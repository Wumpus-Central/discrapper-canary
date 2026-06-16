"use strict";
let i;
n.d(t, { A: () => W });
var r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = n(451988),
    u = n(36124),
    c = n(626584),
    d = n(927813),
    _ = n(935208);
let h = +d.A.Millis.MINUTE;
class f {
    _subscriptions = {};
    _unsubscriptions = {};
    _onChange;
    _unsubscribe = new l.J_(h, () => this.flushUnsubscriptions());
    constructor(e) {
        this._onChange = e;
    }
    reset() {
        (this._subscriptions = {}), (this._unsubscriptions = {}), this._unsubscribe.cancel();
    }
    get(e) {
        let t = this._subscriptions[e] ?? {};
        return _.default.keys(t);
    }
    clear(e) {
        delete this._subscriptions[e], delete this._unsubscriptions[e];
    }
    subscribe(e, t) {
        let n = this._subscriptions[e] ?? {};
        (n[t] = (n[t] ?? 0) + 1),
            (this._subscriptions[e] = n),
            1 === n[t] && this._onChange(e, this.get(e)),
            this.checkForLeaks(e, t);
    }
    isSubscribed(e, t) {
        return null != this._subscriptions[e] && null != this._subscriptions[e][t];
    }
    isSubscribedToAnyMember(e) {
        return this.get(e).length > 0;
    }
    unsubscribe(e, t) {
        if (!this.isSubscribed(e, t)) return;
        let n = this._unsubscriptions[e] ?? {};
        (n[t] = (n[t] ?? 0) + 1), (this._unsubscriptions[e] = n), 1 === n[t] && this._unsubscribe.delay(!1);
    }
    checkForLeaks(e, t) {
        let n = (this._subscriptions[e]?.[t] ?? 0) - (this._unsubscriptions[e]?.[t] ?? 0);
        n > 5 &&
            new c.A("GuildMemberSubscriptions").warn(
                `GuildMemberSubscriptions.subscribe(...): Potential reference leak! (${n} subscriptions)`,
            );
    }
    flushUnsubscriptions() {
        s().isEmpty(this._unsubscriptions) ||
            (s().forEach(this._unsubscriptions, (e, t) => {
                let n = this._subscriptions[t];
                s().forEach(e, (e, t) => {
                    (n[t] = (n[t] ?? 0) - e), n[t] <= 0 && delete n[t];
                }),
                    s().isEmpty(n) && delete this._subscriptions[t],
                    this._onChange(t, this.get(t));
            }),
            (this._unsubscriptions = {}));
    }
}
var p = n(635377),
    E = n.n(p);
class m {
    _subscriptions = {};
    _onChange;
    constructor(e) {
        this._onChange = e;
    }
    reset() {
        this._subscriptions = {};
    }
    get(e) {
        return this._get(e).keys();
    }
    getSubscribedThreadIds() {
        let e = new Set();
        for (let t in this._subscriptions) for (let n of this._subscriptions[t].keys()) e.add(n);
        return e;
    }
    _get(e) {
        return this._subscriptions[e] ?? new (E())({ max: 3, updateAgeOnGet: !0 });
    }
    clear(e) {
        e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []));
    }
    subscribe(e, t, n) {
        let i = this._get(e);
        return i.has(t)
            ? (i.set(t, Date.now()), !1)
            : (null != n && i.has(n) && i.set(n, Date.now()),
              i.set(t, Date.now()),
              (this._subscriptions[e] = i),
              this._onChange(e, i.keys()),
              !0);
    }
    unsubscribe(e, t) {
        if (!(e in this._subscriptions)) return !1;
        let n = this._subscriptions[e];
        return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), !0);
    }
}
var g = n(652215);
function A(e) {
    return null != e && "null" !== e && e !== g.ME && "undefined" !== e && e !== g.YYv;
}
class I {
    _members = new f((e, t) => this._enqueue(e, { members: t }));
    _channels = new u.Ay((e, t) => this._enqueue(e, { channels: t }));
    _threadMemberLists = new m((e, t) => this._enqueue(e, { thread_member_lists: t }));
    _typing = new Set();
    _threads = new Set();
    _activities = new Set();
    _memberUpdates = new Set();
    _subscribed = new Set();
    _pending = {};
    _flush = new l.J_(0, () => this.flush());
    _onChange;
    constructor(e) {
        this._onChange = e;
    }
    _enqueue(e, t) {
        (this._pending[e] = { ...this._pending[e], ...t }), this._flush.delay();
    }
    reset() {
        this._subscribed.clear(),
            (this._pending = {}),
            this._members.reset(),
            this._memberUpdates.clear(),
            this._channels.reset(),
            this._threadMemberLists.reset(),
            this._typing.clear(),
            this._threads.clear(),
            this._activities.clear();
    }
    get(e) {
        return {
            typing: this._typing.has(e),
            threads: this._threads.has(e),
            activities: this._activities.has(e),
            members: this._members.get(e),
            member_updates: this._memberUpdates.has(e),
            channels: this._channels.get(e),
            thread_member_lists: this._threadMemberLists.get(e),
        };
    }
    getSubscribedThreadIds() {
        return this._threadMemberLists.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return this._threads.has(e);
    }
    isSubscribedToAnyMember(e) {
        return this._members.isSubscribedToAnyMember(e) ?? !1;
    }
    isSubscribedToMemberUpdates(e) {
        return this.get(e).member_updates ?? !1;
    }
    forEach(e) {
        this._subscribed.forEach(e);
    }
    clearWithoutFlushing(e, t) {
        (t || !this._threads.has(e)) && this._subscribed.delete(e),
            delete this._pending[e],
            this._members.clear(e),
            this._channels.clear(e),
            this._threadMemberLists.clear(e),
            this._typing.delete(e),
            this._memberUpdates.delete(e),
            t && this._threads.delete(e),
            this._activities.delete(e);
    }
    flush() {
        s().forEach(this._pending, (e, t) => {
            this._subscribed.add(t);
        }),
            this._onChange(this._pending),
            (this._pending = {});
    }
    subscribeUser(e, t) {
        A(e) && this._members.subscribe(e, t);
    }
    unsubscribeUser(e, t) {
        A(e) && this._members.unsubscribe(e, t);
    }
    subscribeChannel(e, t, n) {
        return !!A(e) && this._channels.subscribe(e, t, n);
    }
    subscribeToMemberUpdates(e) {
        if (!A(e)) return !1;
        this._enqueue(e, { member_updates: !0 }), this._memberUpdates.add(e);
    }
    unsubscribeFromMemberUpdates(e) {
        if (!A(e)) return !1;
        this._enqueue(e, { member_updates: !1 });
    }
    subscribeThreadMemberList(e, t, n) {
        return !!A(e) && this._threadMemberLists.subscribe(e, t, n);
    }
    unsubscribeThreadMemberList(e, t) {
        return !!A(e) && this._threadMemberLists.unsubscribe(e, t);
    }
    subscribeToGuild(e) {
        this._subscribeToFeature(e, this._typing, { typing: !0 }),
            this._subscribeToFeature(e, this._activities, { activities: !0 }),
            this._subscribeToFeature(e, this._threads, { threads: !0 });
    }
    _subscribeToFeature(e, t, n) {
        !A(e) || t.has(e) || (t.add(e), this._enqueue(e, n));
    }
}
var T = n(736056),
    S = n(5180),
    y = n(857071),
    C = n(655116),
    N = n(495544),
    v = n(963307),
    R = n(761640),
    O = n(734057),
    b = n(919638),
    D = n(696451),
    L = n(71393),
    w = n(763827),
    M = n(994500),
    P = n(309010),
    x = n(967198);
let k = new I((e) => {
    for (let t in e) null != L.A.getGuild(t) || b.A.isUnavailable(t) || delete e[t];
    o.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
});
function U(e, t) {
    let n = {};
    k.forEach((r) => {
        r !== x.A.getGuildId() &&
            r !== w.A.getGuildId() &&
            r !== O.A.getChannel(P.A.getChannelId())?.getGuildId() &&
            (null == i || i.guildId !== r) &&
            (k.clearWithoutFlushing(r, e), t && (n[r] = k.get(r)));
    }),
        s().isEmpty(n) || o.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: n });
}
function G(e, t) {
    let n = (0, S.ai)(e) && null != t ? (O.A.getChannel(t)?.getGuildId() ?? e) : e;
    return k.subscribeToGuild(n), null != t && R.Ay.getSection(t) === g.YvQ.MEMBERS && F(e, t, u.LD);
}
function F(e, t, n) {
    if (t === v.sN) return k.subscribeChannel(e, t, n);
    let i = O.A.getChannel(t);
    if (null == i) return !1;
    let r = i.getGuildId();
    return (r !== e && e === g.YYv && k.subscribeToGuild(r), i?.isThread())
        ? i.type === g.rbe.ANNOUNCEMENT_THREAD
            ? k.subscribeChannel(r, i.parent_id, n)
            : !!i.isActiveThread() && k.subscribeThreadMemberList(r, t, P.A.getChannelId())
        : k.subscribeChannel(r, t, n);
}
function V(e) {
    let { type: t } = e;
    "CONNECTION_OPEN" === t && U(!0, !1);
    let n = x.A.getGuildId();
    null != n && G(n, P.A.getChannelId(n));
    let i = {},
        r = new Set(y.A.lurkingGuildIds()),
        a = y.A.mostRecentLurkedGuildId();
    k.forEach((e) => {
        null == L.A.getGuild(e) ? k.clearWithoutFlushing(e, !0) : (r.has(e) && e !== a) || (i[e] = k.get(e));
    }),
        s().isEmpty(i) || o.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: i });
}
function B(e) {
    let { guildId: t, channelId: n } = e;
    return !b.A.isUnavailable(t) && G(t, n);
}
function j() {
    return G(x.A.getGuildId(), P.A.getChannelId());
}
function H() {
    let e = C.A.getSyncingWith();
    if (null == e) null != i && (k.unsubscribeUser(i.guildId, i.userId), (i = null));
    else {
        let { userId: t } = e;
        if ((null != i && i.userId === t) || M.A.isFriend(t)) return !1;
        let n = D.Ay.memberOf(t);
        if (0 === n.length) return !1;
        let [r] = n;
        (i = { guildId: r, userId: t }), k.subscribeUser(r, t);
    }
    return !1;
}
class Y extends a.Ay.Store {
    static displayName = "GuildSubscriptionsStore";
    initialize() {
        this.waitFor(N.default, R.Ay, O.A, T.A, b.A, D.Ay, L.A, y.A, w.A, M.A, P.A, x.A, C.A),
            this.syncWith([C.A], H),
            this.syncWith([R.Ay], j);
    }
    getSubscribedThreadIds() {
        return k.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return k.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return k.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return k.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = k.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
let W = new Y(o.h, {
    CONNECTION_OPEN: V,
    CONNECTION_RESUMED: V,
    CONNECTION_CLOSED: function () {
        U(!1, !1);
    },
    IDLE: function (e) {
        let { idle: t } = e;
        if (!t) return !1;
        U(!1, !0);
    },
    LOGOUT: function () {
        k.reset();
    },
    VOICE_CHANNEL_SELECT: B,
    CHANNEL_SELECT: B,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        t.id === x.A.getGuildId() && j();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        k.clearWithoutFlushing(t.id, !0);
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                e !== N.default.getId() && k.subscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                k.unsubscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        k.subscribeToMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        k.unsubscribeFromMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
        let { guildId: t, channelId: n, ranges: i } = e;
        return F(t, n, i);
    },
    GUILD_SUBSCRIPTIONS: function (e) {
        let { guildId: t } = e;
        return k.subscribeToGuild(t);
    },
    CHANNEL_PRELOAD: function (e) {
        let { guildId: t, channelId: n } = e;
        return G(t, n);
    },
    INBOX_OPEN: function (e) {
        let { guildIds: t } = e;
        for (let e of t) null != e && k.subscribeToGuild(e);
        return !1;
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return t.isArchivedThread()
            ? k.unsubscribeThreadMemberList(t.guild_id, t.id)
            : !!t.isActiveThread() &&
                  P.A.getChannelId() === t.id &&
                  void k.subscribeThreadMemberList(t.guild_id, t.id, P.A.getChannelId());
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return k.unsubscribeThreadMemberList(t.guild_id, t.id);
    },
    THREAD_LIST_SYNC: j,
});
