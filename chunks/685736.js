var i = r(47120);
var a = r(627494);
var o = r(757143);
var s = r(348326),
    l = r(710845),
    u = r(38618),
    c = r(592125),
    d = r(287328),
    f = r(59480),
    p = r(40455),
    h = r(989263),
    _ = r(513418);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = new l.Z('Messages');
class E {
    static computeUsersAndMembers(e) {
        (0, _.Z)(e);
        let n = new Map(),
            r = new Map();
        for (let i of e) this.addIntoMap(n, i.users, (e) => e.id), this.addIntoMap(r, i.members, (e) => e.userId);
        return [Array.from(n.values()), Array.from(r.values())];
    }
    static addIntoMap(e, n, r) {
        for (let i of n) {
            let n = r(i),
                a = e.get(n);
            (null == a || (a.incomplete && !i.incomplete)) && e.set(n, i);
        }
    }
    constructor(e) {
        if ((m(this, 'connectionId', null), m(this, 'users', []), m(this, 'members', []), m(this, 'messages', []), e.length > 0)) {
            var n;
            let r = null === (n = e[0]) || void 0 === n ? void 0 : n.connectionId,
                [i, a] = E.computeUsersAndMembers(e);
            e.length > 0 && e.every((e) => e.connectionId === r) && (this.connectionId = r), (this.users = i), (this.members = a), (this.messages = e.map((e) => e.message));
        }
    }
}
class v {
    async startupLoad(e, n, r, i) {
        let a = d.Z.messages(e);
        return new E(await a.getLatest(n, r, i));
    }
    async load(e, n, r) {
        let i = c.Z.getBasicChannel(n);
        if (null == n || null == i || !(0, h.v)(i)) return new E([]);
        {
            let a = d.Z.messages(e);
            return new E(await a.getLatest(i.guild_id, n, r));
        }
    }
    handleMessageCreate(e, n) {
        if (!e.optimistic && !e.isPushNotification && null == e.sendMessageOptions) (0, h.$)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, n);
    }
    handleMessageUpdate(e, n) {
        if (null != e.message.id && null != e.message.channel_id && !!(0, h.$)(e.message.channel_id)) y(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, n) : this.updateOne(e.guildId, e.message.channel_id, e.message, n);
    }
    handleMessagePreviewsLoaded(e, n) {
        for (let r of e.messages) (0, h.$)(r.channel_id) && this.insertStale(e.guildId, r.channel_id, r, n);
    }
    handleLoadMessagesSuccess(e, n) {
        let r = c.Z.getBasicChannel(e.channelId);
        if (null != r && !!(0, h.$)(e.channelId)) e.isAfter || e.isBefore || e.hasMoreAfter || !(e.limit > 5) ? this.upsertMany(r.guild_id, e.channelId, e.messages, n) : this.replaceAll(r.guild_id, e.channelId, e.messages, n);
    }
    handleMessageDelete(e, n) {
        if (null != e.id) this.deleteOne(e.guildId, e.channelId, e.id, n);
    }
    handleMessageDeleteBulk(e, n) {
        for (let r of e.ids) this.deleteOne(e.guildId, e.channelId, r, n);
    }
    handleChannelDelete(e, n) {
        this.deleteChannel(e.channel.guild_id, e.channel.id, n);
    }
    handleGuildDelete(e, n) {
        !e.guild.unavailable && this.deleteGuild(e.guild.id, n);
    }
    resetInMemoryState() {}
    insertStale(e, n, r, i) {
        let a = d.Z.messagesTransaction(i),
            o = u.Z.lastTimeConnectedChanged();
        a.put(e, n, f.a.fromMessage(e, n, r, o), s.Sn.Skip);
    }
    upsertOne(e, n, r, i) {
        let a = d.Z.messagesTransaction(i),
            o = u.Z.lastTimeConnectedChanged();
        a.put(e, n, f.a.fromMessage(e, n, r, o), s.Sn.Replace), a.trimChannel(e, n, p.ZP.saveLimit(n));
    }
    upsertMany(e, n, r, i) {
        let a = d.Z.messagesTransaction(i),
            o = u.Z.lastTimeConnectedChanged();
        for (let i of r) a.put(e, n, f.a.fromMessage(e, n, i, o));
        a.trimChannel(e, n, p.ZP.saveLimit(n));
    }
    replaceAll(e, n, r, i) {
        let a = d.Z.messagesTransaction(i),
            o = u.Z.lastTimeConnectedChanged(),
            s = p.ZP.saveLimit(n),
            l = (r.length > s ? r.slice(r.length - s) : r).map((r) => f.a.fromMessage(e, n, r, o));
        a.replaceAll(e, n, l), a.trimChannel(e, n, p.ZP.saveLimit(n));
    }
    async updateOne(e, n, r, i) {
        if (null == r.id) {
            g.warn('updateOne: message.id is null; cannot update a message if we do not know its id.');
            return;
        }
        let a = d.Z.messages(i.database),
            o = await a.get(e, n, r.id),
            s = u.Z.lastTimeConnectedChanged();
        null != o &&
            a.put(
                e,
                n,
                f.a.fromMessage(
                    e,
                    n,
                    {
                        ...o.message,
                        ...r
                    },
                    s
                )
            );
    }
    deleteOne(e, n, r, i) {
        d.Z.messagesTransaction(i).deleteMessage(e, n, r);
    }
    deleteChannel(e, n, r) {
        d.Z.messagesTransaction(r).deleteChannel(e, n);
    }
    deleteGuild(e, n) {
        d.Z.messagesTransaction(n).deleteGuild(e);
    }
    constructor() {
        m(this, 'actions', {
            CHANNEL_DELETE: (e, n) => this.handleChannelDelete(e, n),
            GUILD_DELETE: (e, n) => this.handleGuildDelete(e, n),
            LOAD_MESSAGES_SUCCESS: (e, n) => this.handleLoadMessagesSuccess(e, n),
            MESSAGE_CREATE: (e, n) => this.handleMessageCreate(e, n),
            MESSAGE_DELETE_BULK: (e, n) => this.handleMessageDeleteBulk(e, n),
            MESSAGE_DELETE: (e, n) => this.handleMessageDelete(e, n),
            MESSAGE_PREVIEWS_LOADED: (e, n) => this.handleMessagePreviewsLoaded(e, n),
            MESSAGE_UPDATE: (e, n) => this.handleMessageUpdate(e, n)
        });
    }
}
function y(e) {
    return null != e.author && null != e.content && null != e.mentions && null != e.timestamp;
}
n.ZP = new v();
