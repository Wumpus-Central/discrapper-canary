n.d(t, { ZP: () => g }), n(47120), n(627494), n(757143);
var i = n(348326),
    r = n(710845),
    a = n(38618),
    s = n(592125),
    o = n(287328),
    l = n(59480),
    u = n(40455),
    c = n(989263),
    d = n(513418);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = new r.Z('Messages');
class p {
    static computeUsersAndMembers(e) {
        (0, d.Z)(e);
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
    constructor(e) {
        if ((f(this, 'connectionId', null), f(this, 'users', []), f(this, 'members', []), f(this, 'messages', []), e.length > 0)) {
            var t;
            let n = null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
                [i, r] = p.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === n) && (this.connectionId = n), (this.users = i), (this.members = r), (this.messages = e.map((e) => e.message));
        }
    }
}
class h {
    async startupLoad(e, t, n, i) {
        let r = o.Z.messages(e);
        return new p(await r.getLatest(t, n, i));
    }
    async load(e, t, n) {
        let i = s.Z.getBasicChannel(t);
        if (null == t || null == i || !(0, c.v)(i)) return new p([]);
        {
            let r = o.Z.messages(e);
            return new p(await r.getLatest(i.guild_id, t, n));
        }
    }
    handleMessageCreate(e, t) {
        !e.optimistic && !e.isPushNotification && null == e.sendMessageOptions && (0, c.$)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t);
    }
    handleMessageUpdate(e, t) {
        null != e.message.id && null != e.message.channel_id && (0, c.$)(e.message.channel_id) && (m(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t));
    }
    handleMessagePreviewsLoaded(e, t) {
        for (let n of e.messages) (0, c.$)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t);
    }
    handleLoadMessagesSuccess(e, t) {
        let n = s.Z.getBasicChannel(e.channelId);
        null != n && (0, c.$)(e.channelId) && (e.isAfter || e.isBefore || e.hasMoreAfter || !(e.limit > 5) ? this.upsertMany(n.guild_id, e.channelId, e.messages, t) : this.replaceAll(n.guild_id, e.channelId, e.messages, t));
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
        let s = o.Z.messagesTransaction(r),
            u = a.Z.lastTimeConnectedChanged();
        s.put(e, t, l.a.fromMessage(e, t, n, u), i.Sn.Skip);
    }
    upsertOne(e, t, n, r) {
        let s = o.Z.messagesTransaction(r),
            c = a.Z.lastTimeConnectedChanged();
        s.put(e, t, l.a.fromMessage(e, t, n, c), i.Sn.Replace), s.trimChannel(e, t, u.ZP.saveLimit(t));
    }
    upsertMany(e, t, n, i) {
        let r = o.Z.messagesTransaction(i),
            s = a.Z.lastTimeConnectedChanged();
        for (let i of n) r.put(e, t, l.a.fromMessage(e, t, i, s));
        r.trimChannel(e, t, u.ZP.saveLimit(t));
    }
    replaceAll(e, t, n, i) {
        let r = o.Z.messagesTransaction(i),
            s = a.Z.lastTimeConnectedChanged(),
            c = u.ZP.saveLimit(t),
            d = (n.length > c ? n.slice(n.length - c) : n).map((n) => l.a.fromMessage(e, t, n, s));
        r.replaceAll(e, t, d), r.trimChannel(e, t, u.ZP.saveLimit(t));
    }
    async updateOne(e, t, n, i) {
        if (null == n.id) {
            _.warn('updateOne: message.id is null; cannot update a message if we do not know its id.');
            return;
        }
        let r = o.Z.messages(i.database),
            s = await r.get(e, t, n.id),
            u = a.Z.lastTimeConnectedChanged();
        null != s &&
            r.put(
                e,
                t,
                l.a.fromMessage(
                    e,
                    t,
                    {
                        ...s.message,
                        ...n
                    },
                    u
                )
            );
    }
    deleteOne(e, t, n, i) {
        o.Z.messagesTransaction(i).deleteMessage(e, t, n);
    }
    deleteChannel(e, t, n) {
        o.Z.messagesTransaction(n).deleteChannel(e, t);
    }
    deleteGuild(e, t) {
        o.Z.messagesTransaction(t).deleteGuild(e);
    }
    constructor() {
        f(this, 'actions', {
            CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
            MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
            MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
            MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
            MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
            MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t)
        });
    }
}
function m(e) {
    return null != e.author && null != e.content && null != e.mentions && null != e.timestamp;
}
let g = new h();
