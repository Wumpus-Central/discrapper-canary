n.d(t, { ZP: () => E }), n(47120), n(627494), n(757143), n(301563);
var r = n(348326),
    i = n(710845),
    o = n(38618),
    a = n(592125),
    s = n(287328),
    l = n(59480),
    c = n(40455),
    u = n(989263),
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = new i.Z('Messages');
class h {
    static computeUsersAndMembers(e) {
        (0, d.Z)(e);
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
    constructor(e) {
        if ((f(this, 'connectionId', null), f(this, 'users', []), f(this, 'members', []), f(this, 'messages', []), e.length > 0)) {
            var t;
            let n = null == (t = e[0]) ? void 0 : t.connectionId,
                [r, i] = h.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === n) && (this.connectionId = n), (this.users = r), (this.members = i), (this.messages = e.map((e) => e.message));
        }
    }
}
class m {
    async startupLoad(e, t, n, r) {
        let i = s.Z.messages(e);
        return new h(await i.getLatest(t, n, r));
    }
    async load(e, t, n) {
        let r = a.Z.getBasicChannel(t);
        if (null == t || null == r || !(0, u.v)(r)) return new h([]);
        {
            let i = s.Z.messages(e);
            return new h(await i.getLatest(r.guild_id, t, n));
        }
    }
    handleMessageCreate(e, t) {
        e.optimistic || e.isPushNotification || null != e.sendMessageOptions || ((0, u.$)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t));
    }
    handleMessageUpdate(e, t) {
        null != e.message.id && null != e.message.channel_id && (0, u.$)(e.message.channel_id) && (g(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t));
    }
    handleMessagePreviewsLoaded(e, t) {
        for (let n of e.messages) (0, u.$)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t);
    }
    handleLoadMessagesSuccess(e, t) {
        let n = a.Z.getBasicChannel(e.channelId);
        null != n && (0, u.$)(e.channelId) && (e.isAfter || e.isBefore || e.hasMoreAfter || !(e.limit > 5) ? this.upsertMany(n.guild_id, e.channelId, e.messages, t) : this.replaceAll(n.guild_id, e.channelId, e.messages, t));
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
        let a = s.Z.messagesTransaction(i),
            c = o.Z.lastTimeConnectedChanged();
        a.put(e, t, l.a.fromMessage(e, t, n, c), r.Sn.Skip);
    }
    upsertOne(e, t, n, i) {
        let a = s.Z.messagesTransaction(i),
            u = o.Z.lastTimeConnectedChanged();
        a.put(e, t, l.a.fromMessage(e, t, n, u), r.Sn.Replace), a.trimChannel(e, t, c.ZP.saveLimit(t));
    }
    upsertMany(e, t, n, r) {
        let i = s.Z.messagesTransaction(r),
            a = o.Z.lastTimeConnectedChanged();
        for (let r of n) i.put(e, t, l.a.fromMessage(e, t, r, a));
        i.trimChannel(e, t, c.ZP.saveLimit(t));
    }
    replaceAll(e, t, n, r) {
        let i = s.Z.messagesTransaction(r),
            a = o.Z.lastTimeConnectedChanged(),
            u = c.ZP.saveLimit(t),
            d = (n.length > u ? n.slice(n.length - u) : n).map((n) => l.a.fromMessage(e, t, n, a));
        i.replaceAll(e, t, d), i.trimChannel(e, t, c.ZP.saveLimit(t));
    }
    async updateOne(e, t, n, r) {
        if (null == n.id) return void p.warn('updateOne: message.id is null; cannot update a message if we do not know its id.');
        let i = s.Z.messages(r.database),
            a = await i.get(e, t, n.id),
            c = o.Z.lastTimeConnectedChanged();
        null != a && i.put(e, t, l.a.fromMessage(e, t, _({}, a.message, n), c));
    }
    deleteOne(e, t, n, r) {
        s.Z.messagesTransaction(r).deleteMessage(e, t, n);
    }
    deleteChannel(e, t, n) {
        s.Z.messagesTransaction(n).deleteChannel(e, t);
    }
    deleteGuild(e, t) {
        s.Z.messagesTransaction(t).deleteGuild(e);
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
function g(e) {
    return null != e.author && null != e.content && null != e.mentions && null != e.timestamp;
}
let E = new m();
