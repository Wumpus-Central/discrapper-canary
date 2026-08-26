"use strict";
n.d(t, { Ay: () => f });
var i = n(979096),
    r = n(626584),
    a = n(597643),
    s = n(734057),
    l = n(723176);
n(321073);
var o = n(696451),
    d = n(287809),
    c = n(652215);
class u {
    static fromMessage(e, t, n, i) {
        let [r, a] = u.deriveMemberUsers(e, n);
        return { id: n.id, channelId: t, message: n, members: r, users: a, connectionId: i };
    }
    static deriveMemberUsers(e, t) {
        let n = new Set([t.author?.id, t.interaction?.user.id, ...(t.mentions?.map((e) => e.id) ?? [])]),
            i = [],
            r = [];
        for (let t of n) {
            if (null == t) continue;
            let n = d.default.getUser(t),
                a = o.Ay.getTrueMember(e ?? c.dJq, t);
            null != n && r.push(n), null != a && i.push(a);
        }
        return [i, r];
    }
}
var _ = n(632789),
    E = n(552618),
    A = n(640631);
let h = new r.A("Messages");
class I {
    connectionId = null;
    users = [];
    members = [];
    messages = [];
    constructor(e) {
        if (e.length > 0) {
            const t = e[0]?.connectionId,
                [n, i] = I.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === t) && (this.connectionId = t),
                (this.users = n),
                (this.members = i),
                (this.messages = e.map((e) => e.message));
        }
    }
    static computeUsersAndMembers(e) {
        (0, A.D)(e);
        let t = new Map(),
            n = new Map();
        for (let i of e) this.addIntoMap(t, i.users, (e) => e.id), this.addIntoMap(n, i.members, (e) => e.userId);
        return [Array.from(t.values()), Array.from(n.values())];
    }
    static addIntoMap(e, t, n) {
        for (let i of t) {
            let t = n(i),
                r = e.get(t);
            (null == r || (r.incomplete && !i.incomplete)) && e.set(t, i);
        }
    }
}
let f = new (class {
    async startupLoad(e, t, n, i) {
        let r = l.A.messages(e);
        return new I(await r.getLatest(t, n, i));
    }
    async load(e, t, n) {
        let i = s.A.getBasicChannel(t);
        if (null == t || null == i || !(0, E.c)(i)) return new I([]);
        {
            let r = l.A.messages(e);
            return new I(await r.getLatest(i.guild_id, t, n));
        }
    }
    actions = {
        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
        LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
        MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
        MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
        MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
        MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
        MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t),
    };
    handleMessageCreate(e, t) {
        e.optimistic ||
            e.isPushNotification ||
            null != e.sendMessageOptions ||
            ((0, E.J)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t));
    }
    handleMessageUpdate(e, t) {
        var n;
        null == e.message.id ||
            null == e.message.channel_id ||
            ((0, E.J)(e.message.channel_id) &&
                (null != (n = e.message).author && null != n.content && null != n.mentions && null != n.timestamp
                    ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t)
                    : this.updateOne(e.guildId, e.message.channel_id, e.message, t)));
    }
    handleMessagePreviewsLoaded(e, t) {
        for (let n of e.messages) (0, E.J)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t);
    }
    handleLoadMessagesSuccess(e, t) {
        let n = s.A.getBasicChannel(e.channelId);
        null != n &&
            (0, E.J)(e.channelId) &&
            (e.isAfter || e.isBefore || e.hasMoreAfter || !(e.limit > 5)
                ? this.upsertMany(n.guild_id, e.channelId, e.messages, t)
                : this.replaceChannel(n.guild_id, e.channelId, e.messages, t));
    }
    handleMessageDelete(e, t) {
        null != e.id && this.deleteOne(e.guildId, e.channelId, e.id, t);
    }
    handleMessageDeleteBulk(e, t) {
        for (let n of e.ids) this.deleteOne(e.guildId, e.channelId, n, t);
    }
    handleChannelDelete(e, t) {
        this.deleteChannel(e.channel.guild_id, e.channel.id, t);
    }
    handleGuildDelete(e, t) {
        e.guild.unavailable || this.deleteGuild(e.guild.id, t);
    }
    resetInMemoryState() {}
    insertStale(e, t, n, r) {
        let s = l.A.messagesTransaction(r),
            o = a.A.lastTimeConnectedChanged();
        s.put(e, t, u.fromMessage(e, t, n, o), i.hh.Skip);
    }
    upsertOne(e, t, n, r) {
        let s = l.A.messagesTransaction(r),
            o = a.A.lastTimeConnectedChanged();
        s.put(e, t, u.fromMessage(e, t, n, o), i.hh.Replace), s.trimChannel(e, t, _.Ay.saveLimit(t));
    }
    upsertMany(e, t, n, i) {
        let r = l.A.messagesTransaction(i),
            s = a.A.lastTimeConnectedChanged();
        for (let i of n) r.put(e, t, u.fromMessage(e, t, i, s));
        r.trimChannel(e, t, _.Ay.saveLimit(t));
    }
    replaceChannel(e, t, n, i) {
        let r = l.A.messagesTransaction(i),
            s = a.A.lastTimeConnectedChanged(),
            o = _.Ay.saveLimit(t),
            d = (n.length > o ? n.slice(n.length - o) : n).map((n) => u.fromMessage(e, t, n, s));
        r.replaceChannel(e, t, d), r.trimChannel(e, t, _.Ay.saveLimit(t));
    }
    async updateOne(e, t, n, i) {
        if (null == n.id)
            return void h.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
        let r = l.A.messages(i.database),
            s = await r.get(e, t, n.id),
            o = a.A.lastTimeConnectedChanged();
        null != s && r.put(e, t, u.fromMessage(e, t, { ...s.message, ...n }, o));
    }
    deleteOne(e, t, n, i) {
        l.A.messagesTransaction(i).deleteMessage(e, t, n);
    }
    deleteChannel(e, t, n) {
        l.A.messagesTransaction(n).deleteChannel(e, t);
    }
    deleteGuild(e, t) {
        l.A.messagesTransaction(t).deleteGuild(e);
    }
})();
