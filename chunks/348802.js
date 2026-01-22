n.d(t, {
    Ay: () => E,
}),
    n(896048);
var r = n(35033),
    i = n(626584),
    a = n(142120),
    s = n(734057),
    o = n(723176),
    l = n(176015),
    c = n(240525),
    u = n(552618),
    d = n(640631);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = new i.A("Messages");
class h {
    static computeUsersAndMembers(e) {
        (0, d.D)(e);
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
        if (
            (f(this, "connectionId", null),
            f(this, "users", []),
            f(this, "members", []),
            f(this, "messages", []),
            e.length > 0)
        ) {
            var t;
            const n = null == (t = e[0]) ? void 0 : t.connectionId,
                [r, i] = h.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === n) && (this.connectionId = n),
                (this.users = r),
                (this.members = i),
                (this.messages = e.map((e) => e.message));
        }
    }
}
class m {
    async startupLoad(e, t, n, r) {
        let i = o.A.messages(e);
        return new h(await i.getLatest(t, n, r));
    }
    async load(e, t, n) {
        let r = s.A.getBasicChannel(t);
        if (null == t || null == r || !(0, u.c)(r)) return new h([]);
        {
            let i = o.A.messages(e);
            return new h(await i.getLatest(r.guild_id, t, n));
        }
    }
    handleMessageCreate(e, t) {
        e.optimistic ||
            e.isPushNotification ||
            null != e.sendMessageOptions ||
            ((0, u.J)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t));
    }
    handleMessageUpdate(e, t) {
        null == e.message.id ||
            null == e.message.channel_id ||
            ((0, u.J)(e.message.channel_id) &&
                (g(e.message)
                    ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t)
                    : this.updateOne(e.guildId, e.message.channel_id, e.message, t)));
    }
    handleMessagePreviewsLoaded(e, t) {
        for (let n of e.messages) (0, u.J)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t);
    }
    handleLoadMessagesSuccess(e, t) {
        let n = s.A.getBasicChannel(e.channelId);
        null != n &&
            (0, u.J)(e.channelId) &&
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
        let s = o.A.messagesTransaction(i),
            c = a.A.lastTimeConnectedChanged();
        s.put(e, t, l.B.fromMessage(e, t, n, c), r.hh.Skip);
    }
    upsertOne(e, t, n, i) {
        let s = o.A.messagesTransaction(i),
            u = a.A.lastTimeConnectedChanged();
        s.put(e, t, l.B.fromMessage(e, t, n, u), r.hh.Replace), s.trimChannel(e, t, c.Ay.saveLimit(t));
    }
    upsertMany(e, t, n, r) {
        let i = o.A.messagesTransaction(r),
            s = a.A.lastTimeConnectedChanged();
        for (let r of n) i.put(e, t, l.B.fromMessage(e, t, r, s));
        i.trimChannel(e, t, c.Ay.saveLimit(t));
    }
    replaceChannel(e, t, n, r) {
        let i = o.A.messagesTransaction(r),
            s = a.A.lastTimeConnectedChanged(),
            u = c.Ay.saveLimit(t),
            d = (n.length > u ? n.slice(n.length - u) : n).map((n) => l.B.fromMessage(e, t, n, s));
        i.replaceChannel(e, t, d), i.trimChannel(e, t, c.Ay.saveLimit(t));
    }
    async updateOne(e, t, n, r) {
        if (null == n.id)
            return void _.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
        let i = o.A.messages(r.database),
            s = await i.get(e, t, n.id),
            c = a.A.lastTimeConnectedChanged();
        null != s && i.put(e, t, l.B.fromMessage(e, t, p({}, s.message, n), c));
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
    constructor() {
        f(this, "actions", {
            CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
            MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
            MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
            MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
            MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
            MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t),
        });
    }
}

function g(e) {
    return null != e.author && null != e.content && null != e.mentions && null != e.timestamp;
}
let E = new m();
