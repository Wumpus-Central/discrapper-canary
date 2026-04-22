"use strict";
n.d(t, { Ay: () => E });
var r = n(35033),
    i = n(626584),
    s = n(142120),
    a = n(734057),
    o = n(723176),
    l = n(176015),
    u = n(240525),
    d = n(552618),
    c = n(640631);
let _ = new i.A("Messages");
class f {
    connectionId = null;
    users = [];
    members = [];
    messages = [];
    constructor(e) {
        if (e.length > 0) {
            const t = e[0]?.connectionId,
                [n, r] = f.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === t) && (this.connectionId = t),
                (this.users = n),
                (this.members = r),
                (this.messages = e.map((e) => e.message));
        }
    }
    static computeUsersAndMembers(e) {
        (0, c.D)(e);
        let t = new Map(),
            n = new Map();
        for (let r of e) this.addIntoMap(t, r.users, (e) => e.id), this.addIntoMap(n, r.members, (e) => e.userId);
        return [Array.from(t.values()), Array.from(n.values())];
    }
    static addIntoMap(e, t, n) {
        for (let r of t) {
            let t = n(r),
                i = e.get(t);
            (null == i || (i.incomplete && !r.incomplete)) && e.set(t, r);
        }
    }
}
let E = new (class {
    async startupLoad(e, t, n, r) {
        let i = o.A.messages(e);
        return new f(await i.getLatest(t, n, r));
    }
    async load(e, t, n) {
        let r = a.A.getBasicChannel(t);
        if (null == t || null == r || !(0, d.c)(r)) return new f([]);
        {
            let i = o.A.messages(e);
            return new f(await i.getLatest(r.guild_id, t, n));
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
            ((0, d.J)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t));
    }
    handleMessageUpdate(e, t) {
        var n;
        null == e.message.id ||
            null == e.message.channel_id ||
            ((0, d.J)(e.message.channel_id) &&
                (null != (n = e.message).author && null != n.content && null != n.mentions && null != n.timestamp
                    ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t)
                    : this.updateOne(e.guildId, e.message.channel_id, e.message, t)));
    }
    handleMessagePreviewsLoaded(e, t) {
        for (let n of e.messages) (0, d.J)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t);
    }
    handleLoadMessagesSuccess(e, t) {
        let n = a.A.getBasicChannel(e.channelId);
        null != n &&
            (0, d.J)(e.channelId) &&
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
    insertStale(e, t, n, i) {
        let a = o.A.messagesTransaction(i),
            u = s.A.lastTimeConnectedChanged();
        a.put(e, t, l.B.fromMessage(e, t, n, u), r.hh.Skip);
    }
    upsertOne(e, t, n, i) {
        let a = o.A.messagesTransaction(i),
            d = s.A.lastTimeConnectedChanged();
        a.put(e, t, l.B.fromMessage(e, t, n, d), r.hh.Replace), a.trimChannel(e, t, u.Ay.saveLimit(t));
    }
    upsertMany(e, t, n, r) {
        let i = o.A.messagesTransaction(r),
            a = s.A.lastTimeConnectedChanged();
        for (let r of n) i.put(e, t, l.B.fromMessage(e, t, r, a));
        i.trimChannel(e, t, u.Ay.saveLimit(t));
    }
    replaceChannel(e, t, n, r) {
        let i = o.A.messagesTransaction(r),
            a = s.A.lastTimeConnectedChanged(),
            d = u.Ay.saveLimit(t),
            c = (n.length > d ? n.slice(n.length - d) : n).map((n) => l.B.fromMessage(e, t, n, a));
        i.replaceChannel(e, t, c), i.trimChannel(e, t, u.Ay.saveLimit(t));
    }
    async updateOne(e, t, n, r) {
        if (null == n.id)
            return void _.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
        let i = o.A.messages(r.database),
            a = await i.get(e, t, n.id),
            u = s.A.lastTimeConnectedChanged();
        null != a && i.put(e, t, l.B.fromMessage(e, t, { ...a.message, ...n }, u));
    }
    deleteOne(e, t, n, r) {
        o.A.messagesTransaction(r).deleteMessage(e, t, n);
    }
    deleteChannel(e, t, n) {
        o.A.messagesTransaction(n).deleteChannel(e, t);
    }
    deleteGuild(e, t) {
        o.A.messagesTransaction(t).deleteGuild(e);
    }
})();
