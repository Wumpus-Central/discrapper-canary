"use strict";
n.d(t, { Ay: () => g });
var i = n(519551),
    r = n(626584),
    s = n(366853),
    a = n(734057),
    o = n(723176);
n(321073);
var l = n(696451),
    d = n(287809),
    _ = n(652215);
class u {
    static fromMessage(e, t, n, i) {
        let [r, s] = u.deriveMemberUsers(e, n);
        return { id: n.id, channelId: t, message: n, members: r, users: s, connectionId: i };
    }
    static deriveMemberUsers(e, t) {
        let n = new Set([t.author?.id, t.interaction?.user.id, ...(t.mentions?.map((e) => e.id) ?? [])]),
            i = [],
            r = [];
        for (let t of n) {
            if (null == t) continue;
            let n = d.default.getUser(t),
                s = l.Ay.getTrueMember(e ?? _.dJq, t);
            null != n && r.push(n), null != s && i.push(s);
        }
        return [i, r];
    }
}
var c = n(240525),
    E = n(552618),
    h = n(640631);
let m = new r.A("Messages");
class f {
    connectionId = null;
    users = [];
    members = [];
    messages = [];
    constructor(e) {
        if (e.length > 0) {
            const t = e[0]?.connectionId,
                [n, i] = f.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === t) && (this.connectionId = t),
                (this.users = n),
                (this.members = i),
                (this.messages = e.map((e) => e.message));
        }
    }
    static computeUsersAndMembers(e) {
        (0, h.D)(e);
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
let g = new (class {
    async startupLoad(e, t, n, i) {
        let r = o.A.messages(e);
        return new f(await r.getLatest(t, n, i));
    }
    async load(e, t, n) {
        let i = a.A.getBasicChannel(t);
        if (null == t || null == i || !(0, E.c)(i)) return new f([]);
        {
            let r = o.A.messages(e);
            return new f(await r.getLatest(i.guild_id, t, n));
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
        let n = a.A.getBasicChannel(e.channelId);
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
        let a = o.A.messagesTransaction(r),
            l = s.A.lastTimeConnectedChanged();
        a.put(e, t, u.fromMessage(e, t, n, l), i.hh.Skip);
    }
    upsertOne(e, t, n, r) {
        let a = o.A.messagesTransaction(r),
            l = s.A.lastTimeConnectedChanged();
        a.put(e, t, u.fromMessage(e, t, n, l), i.hh.Replace), a.trimChannel(e, t, c.Ay.saveLimit(t));
    }
    upsertMany(e, t, n, i) {
        let r = o.A.messagesTransaction(i),
            a = s.A.lastTimeConnectedChanged();
        for (let i of n) r.put(e, t, u.fromMessage(e, t, i, a));
        r.trimChannel(e, t, c.Ay.saveLimit(t));
    }
    replaceChannel(e, t, n, i) {
        let r = o.A.messagesTransaction(i),
            a = s.A.lastTimeConnectedChanged(),
            l = c.Ay.saveLimit(t),
            d = (n.length > l ? n.slice(n.length - l) : n).map((n) => u.fromMessage(e, t, n, a));
        r.replaceChannel(e, t, d), r.trimChannel(e, t, c.Ay.saveLimit(t));
    }
    async updateOne(e, t, n, i) {
        if (null == n.id)
            return void m.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
        let r = o.A.messages(i.database),
            a = await r.get(e, t, n.id),
            l = s.A.lastTimeConnectedChanged();
        null != a && r.put(e, t, u.fromMessage(e, t, { ...a.message, ...n }, l));
    }
    deleteOne(e, t, n, i) {
        o.A.messagesTransaction(i).deleteMessage(e, t, n);
    }
    deleteChannel(e, t, n) {
        o.A.messagesTransaction(n).deleteChannel(e, t);
    }
    deleteGuild(e, t) {
        o.A.messagesTransaction(t).deleteGuild(e);
    }
})();
