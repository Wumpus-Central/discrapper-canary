n.d(t, { Ay: () => p });
var i = n(979096),
    r = n(626584),
    a = n(403010),
    s = n(734057),
    l = n(935208),
    o = n(723176);
n(321073);
var d = n(696451),
    c = n(287809),
    u = n(652215);
class _ {
    static fromMessage(e, t, n, i) {
        let [r, a] = _.deriveMemberUsers(e, n);
        return { id: n.id, channelId: t, message: n, members: r, users: a, connectionId: i };
    }
    static deriveMemberUsers(e, t) {
        let n = new Set([t.author?.id, t.interaction?.user.id, ...(t.mentions?.map((e) => e.id) ?? [])]),
            i = [],
            r = [];
        for (let t of n) {
            if (null == t) continue;
            let n = c.default.getUser(t),
                a = d.Ay.getTrueMember(e ?? u.dJq, t);
            (null != n && r.push(n), null != a && i.push(a));
        }
        return [i, r];
    }
}
var E = n(632789),
    A = n(552618),
    h = n(640631);
let f = new r.A("Messages");
class I {
    connectionId = null;
    users = [];
    members = [];
    messages = [];
    constructor(e) {
        if (e.length > 0) {
            const t = e[0]?.connectionId,
                [n, i] = I.computeUsersAndMembers(e);
            (e.length > 0 && e.every((e) => e.connectionId === t) && (this.connectionId = t),
                (this.users = n),
                (this.members = i),
                (this.messages = e.map((e) => e.message)));
        }
    }
    static computeUsersAndMembers(e) {
        (0, h.D)(e);
        let t = new Map(),
            n = new Map();
        for (let i of e) (this.addIntoMap(t, i.users, (e) => e.id), this.addIntoMap(n, i.members, (e) => e.userId));
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
let p = new (class {
    async startupLoad(e, t, n, i) {
        let r = o.A.messages(e);
        return new I(await r.getLatest(t, n, i));
    }
    async load(e, t, n) {
        let i = s.A.getBasicChannel(t);
        if (null == t || null == i || !(0, A.c)(i)) return new I([]);
        {
            let r = o.A.messages(e);
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
            ((0, A.J)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t));
    }
    handleMessageUpdate(e, t) {
        var n;
        null == e.message.id ||
            null == e.message.channel_id ||
            ((0, A.J)(e.message.channel_id) &&
                (null != (n = e.message).author && null != n.content && null != n.mentions && null != n.timestamp
                    ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t)
                    : this.updateOne(e.guildId, e.message.channel_id, e.message, t)));
    }
    handleMessagePreviewsLoaded(e, t) {
        for (let n of e.messages) (0, A.J)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t);
    }
    handleLoadMessagesSuccess(e, t) {
        let n = s.A.getBasicChannel(e.channelId);
        null != n &&
            (0, A.J)(e.channelId) &&
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
        let s = o.A.messagesTransaction(r),
            l = a.A.lastTimeConnectedChanged();
        s.put(e, t, _.fromMessage(e, t, n, l), i.hh.Skip);
    }
    upsertOne(e, t, n, r) {
        let s = o.A.messagesTransaction(r),
            l = a.A.lastTimeConnectedChanged();
        (s.put(e, t, _.fromMessage(e, t, n, l), i.hh.Replace), s.trimChannel(e, t, E.Ay.saveLimit(t)));
    }
    upsertMany(e, t, n, i) {
        let r = o.A.messagesTransaction(i),
            s = a.A.lastTimeConnectedChanged();
        for (let i of n) r.put(e, t, _.fromMessage(e, t, i, s));
        r.trimChannel(e, t, E.Ay.saveLimit(t));
    }
    replaceChannel(e, t, n, i) {
        let r = o.A.messagesTransaction(i),
            s = a.A.lastTimeConnectedChanged(),
            d = E.Ay.saveLimit(t),
            c = [...n]
                .sort((e, t) => l.default.compare(t.id, e.id))
                .slice(0, d)
                .map((n) => _.fromMessage(e, t, n, s));
        (r.replaceChannel(e, t, c), r.trimChannel(e, t, E.Ay.saveLimit(t)));
    }
    async updateOne(e, t, n, i) {
        if (null == n.id)
            return void f.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
        let r = o.A.messages(i.database),
            s = await r.get(e, t, n.id),
            l = a.A.lastTimeConnectedChanged();
        null != s && r.put(e, t, _.fromMessage(e, t, { ...s.message, ...n }, l));
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
