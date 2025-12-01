n.d(t, { ZP: () => b }), n(388685), n(804061), n(704826), n(35282);
var r = n(348326),
    i = n(710845),
    a = n(38618),
    o = n(592125),
    s = n(345142),
    l = n(287328),
    c = n(59480),
    u = n(40455),
    d = n(989263),
    f = n(513418);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = new i.Z("Messages");
class h {
    static computeUsersAndMembers(e) {
        (0, f.Z)(e);
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
            (p(this, "connectionId", null),
            p(this, "users", []),
            p(this, "members", []),
            p(this, "messages", []),
            e.length > 0)
        ) {
            var t;
            let n = null == (t = e[0]) ? void 0 : t.connectionId,
                [r, i] = h.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === n) && (this.connectionId = n),
                (this.users = r),
                (this.members = i),
                (this.messages = e.map((e) => e.message));
        }
    }
}
class g {
    async startupLoad(e, t, n, r) {
        let i = l.Z.messages(e);
        return new h(await i.getLatest(t, n, r));
    }
    async load(e, t, n) {
        let r = o.Z.getBasicChannel(t);
        if (null == t || null == r || !(0, d.v)(r)) return new h([]);
        {
            let i = l.Z.messages(e);
            return new h(await i.getLatest(r.guild_id, t, n));
        }
    }
    handleMessageCreate(e, t) {
        e.optimistic ||
            e.isPushNotification ||
            null != e.sendMessageOptions ||
            ((0, d.$)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t));
    }
    handleMessageUpdate(e, t) {
        null != e.message.id &&
            null != e.message.channel_id &&
            (0, d.$)(e.message.channel_id) &&
            (E(e.message)
                ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t)
                : this.updateOne(e.guildId, e.message.channel_id, e.message, t));
    }
    handleMessagePreviewsLoaded(e, t) {
        for (let n of e.messages) (0, d.$)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t);
    }
    handleLoadMessagesSuccess(e, t) {
        let n = o.Z.getBasicChannel(e.channelId);
        null != n &&
            (0, d.$)(e.channelId) &&
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
        let o = l.Z.messagesTransaction(i),
            s = a.Z.lastTimeConnectedChanged();
        o.put(e, t, c.a.fromMessage(e, t, n, s), r.Sn.Skip);
    }
    upsertOne(e, t, n, i) {
        let o = l.Z.messagesTransaction(i),
            s = a.Z.lastTimeConnectedChanged();
        o.put(e, t, c.a.fromMessage(e, t, n, s), r.Sn.Replace), o.trimChannel(e, t, u.ZP.saveLimit(t));
    }
    upsertMany(e, t, n, r) {
        let i = l.Z.messagesTransaction(r),
            o = a.Z.lastTimeConnectedChanged();
        for (let r of n) i.put(e, t, c.a.fromMessage(e, t, r, o));
        i.trimChannel(e, t, u.ZP.saveLimit(t));
    }
    replaceChannel(e, t, n, r) {
        let i = l.Z.messagesTransaction(r),
            o = a.Z.lastTimeConnectedChanged(),
            d = u.ZP.saveLimit(t),
            f = (n.length > d ? n.slice(n.length - d) : n).map((n) => c.a.fromMessage(e, t, n, o));
        s.Z.getConfig({ location: "replaceChannel" }).enabled ? i.replaceChannel(e, t, f) : i.replaceAll(e, t, f),
            i.trimChannel(e, t, u.ZP.saveLimit(t));
    }
    async updateOne(e, t, n, r) {
        if (null == n.id)
            return void m.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
        let i = l.Z.messages(r.database),
            o = await i.get(e, t, n.id),
            s = a.Z.lastTimeConnectedChanged();
        null != o && i.put(e, t, c.a.fromMessage(e, t, _({}, o.message, n), s));
    }
    deleteOne(e, t, n, r) {
        l.Z.messagesTransaction(r).deleteMessage(e, t, n);
    }
    deleteChannel(e, t, n) {
        l.Z.messagesTransaction(n).deleteChannel(e, t);
    }
    deleteGuild(e, t) {
        l.Z.messagesTransaction(t).deleteGuild(e);
    }
    constructor() {
        p(this, "actions", {
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
function E(e) {
    return null != e.author && null != e.content && null != e.mentions && null != e.timestamp;
}
let b = new g();
