"use strict";
let i;
n.d(t, { A: () => Y });
var r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(228366),
    o = n(451988),
    d = n(36124),
    c = n(626584),
    u = n(927813),
    _ = n(935208);
let E = +u.A.Millis.MINUTE;
class A {
    _subscriptions = {};
    _unsubscriptions = {};
    _onChange;
    _unsubscribe = new o.J_(E, () => this.flushUnsubscriptions());
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
        a().isEmpty(this._unsubscriptions) ||
            (a().forEach(this._unsubscriptions, (e, t) => {
                let n = this._subscriptions[t];
                a().forEach(e, (e, t) => {
                    (n[t] = (n[t] ?? 0) - e), n[t] <= 0 && delete n[t];
                }),
                    a().isEmpty(n) && delete this._subscriptions[t],
                    this._onChange(t, this.get(t));
            }),
            (this._unsubscriptions = {}));
    }
}
var h = n(635377),
    I = n.n(h);
class f {
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
        return this._subscriptions[e] ?? new (I())({ max: 3, updateAgeOnGet: !0 });
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
var p = n(652215);
function T(e) {
    return null != e && "null" !== e && e !== p.ME && "undefined" !== e && e !== p.YYv;
}
class m {
    _members = new A((e, t) => this._enqueue(e, { members: t }));
    _channels = new d.Ay((e, t) => this._enqueue(e, { channels: t }));
    _threadMemberLists = new f((e, t) => this._enqueue(e, { thread_member_lists: t }));
    _typing = new Set();
    _threads = new Set();
    _activities = new Set();
    _memberUpdates = new Set();
    _subscribed = new Set();
    _pending = {};
    _flush = new o.J_(0, () => this.flush());
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
        a().forEach(this._pending, (e, t) => {
            this._subscribed.add(t);
        }),
            this._onChange(this._pending),
            (this._pending = {});
    }
    subscribeUser(e, t) {
        T(e) && this._members.subscribe(e, t);
    }
    unsubscribeUser(e, t) {
        T(e) && this._members.unsubscribe(e, t);
    }
    subscribeChannel(e, t, n) {
        return !!T(e) && this._channels.subscribe(e, t, n);
    }
    subscribeToMemberUpdates(e) {
        if (!T(e)) return !1;
        this._enqueue(e, { member_updates: !0 }), this._memberUpdates.add(e);
    }
    unsubscribeFromMemberUpdates(e) {
        if (!T(e)) return !1;
        this._enqueue(e, { member_updates: !1 });
    }
    subscribeThreadMemberList(e, t, n) {
        return !!T(e) && this._threadMemberLists.subscribe(e, t, n);
    }
    unsubscribeThreadMemberList(e, t) {
        return !!T(e) && this._threadMemberLists.unsubscribe(e, t);
    }
    subscribeToGuild(e) {
        this._subscribeToFeature(e, this._typing, { typing: !0 }),
            this._subscribeToFeature(e, this._activities, { activities: !0 }),
            this._subscribeToFeature(e, this._threads, { threads: !0 });
    }
    _subscribeToFeature(e, t, n) {
        !T(e) || t.has(e) || (t.add(e), this._enqueue(e, n));
    }
}
var g = n(736056),
    S = n(5180),
    N = n(857071),
    C = n(655116),
    R = n(280450),
    O = n(963307),
    L = n(761640),
    y = n(734057),
    D = n(919638),
    v = n(696451),
    b = n(71393),
    M = n(763827),
    P = n(994500),
    U = n(309010),
    w = n(967198);
let G = new m((e) => {
    for (let t in e) null != b.A.getGuild(t) || D.A.isUnavailable(t) || delete e[t];
    l.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
});
function x(e, t) {
    let n = {};
    G.forEach((r) => {
        r !== w.A.getGuildId() &&
            r !== M.A.getGuildId() &&
            r !== y.A.getChannel(U.Ay.getChannelId())?.getGuildId() &&
            (null == i || i.guildId !== r) &&
            (G.clearWithoutFlushing(r, e), t && (n[r] = G.get(r)));
    }),
        a().isEmpty(n) || l.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: n });
}
function k(e, t) {
    let n = (0, S.ai)(e) && null != t ? (y.A.getChannel(t)?.getGuildId() ?? e) : e;
    return G.subscribeToGuild(n), null != t && L.Ay.getSection(t) === p.YvQ.MEMBERS && F(e, t, d.LD);
}
function F(e, t, n) {
    if (t === O.sN) return G.subscribeChannel(e, t, n);
    let i = y.A.getChannel(t);
    if (null == i) return !1;
    let r = i.getGuildId();
    return (r !== e && e === p.YYv && G.subscribeToGuild(r), i?.isThread())
        ? i.type === p.rbe.ANNOUNCEMENT_THREAD
            ? G.subscribeChannel(r, i.parent_id, n)
            : !!i.isActiveThread() && G.subscribeThreadMemberList(r, t, U.Ay.getChannelId())
        : G.subscribeChannel(r, t, n);
}
function V(e) {
    let { type: t } = e;
    "CONNECTION_OPEN" === t && x(!0, !1);
    let n = w.A.getGuildId();
    null != n && k(n, U.Ay.getChannelId(n));
    let i = {},
        r = new Set(N.A.lurkingGuildIds()),
        s = N.A.mostRecentLurkedGuildId();
    G.forEach((e) => {
        null == b.A.getGuild(e) ? G.clearWithoutFlushing(e, !0) : (r.has(e) && e !== s) || (i[e] = G.get(e));
    }),
        a().isEmpty(i) || l.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: i });
}
function B(e) {
    let { guildId: t, channelId: n } = e;
    return !D.A.isUnavailable(t) && k(t, n);
}
function H() {
    return k(w.A.getGuildId(), U.Ay.getChannelId());
}
function j() {
    let e = C.A.getSyncingWith();
    if (null == e) null != i && (G.unsubscribeUser(i.guildId, i.userId), (i = null));
    else {
        let { userId: t } = e;
        if ((null != i && i.userId === t) || P.A.isFriend(t)) return !1;
        let n = v.Ay.memberOf(t);
        if (0 === n.length) return !1;
        let [r] = n;
        (i = { guildId: r, userId: t }), G.subscribeUser(r, t);
    }
    return !1;
}
class W extends s.Ay.Store {
    static displayName = "GuildSubscriptionsStore";
    initialize() {
        this.waitFor(R.default, L.Ay, y.A, g.A, D.A, v.Ay, b.A, N.A, M.A, P.A, U.Ay, w.A, C.A),
            this.syncWith([C.A], j),
            this.syncWith([L.Ay], H);
    }
    getSubscribedThreadIds() {
        return G.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return G.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return G.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return G.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = G.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
let Y = new W(l.h, {
    CONNECTION_OPEN: V,
    CONNECTION_RESUMED: V,
    CONNECTION_CLOSED: function () {
        x(!1, !1);
    },
    IDLE: function (e) {
        let { idle: t } = e;
        if (!t) return !1;
        x(!1, !0);
    },
    LOGOUT: function () {
        G.reset();
    },
    VOICE_CHANNEL_SELECT: B,
    CHANNEL_SELECT: B,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        t.id === w.A.getGuildId() && H();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        G.clearWithoutFlushing(t.id, !0);
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                e !== R.default.getId() && G.subscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                G.unsubscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        G.subscribeToMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        G.unsubscribeFromMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
        let { guildId: t, channelId: n, ranges: i } = e;
        return F(t, n, i);
    },
    GUILD_SUBSCRIPTIONS: function (e) {
        let { guildId: t } = e;
        return G.subscribeToGuild(t);
    },
    CHANNEL_PRELOAD: function (e) {
        let { guildId: t, channelId: n } = e;
        return k(t, n);
    },
    INBOX_OPEN: function (e) {
        let { guildIds: t } = e;
        for (let e of t) null != e && G.subscribeToGuild(e);
        return !1;
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return t.isArchivedThread()
            ? G.unsubscribeThreadMemberList(t.guild_id, t.id)
            : !!t.isActiveThread() &&
                  U.Ay.getChannelId() === t.id &&
                  void G.subscribeThreadMemberList(t.guild_id, t.id, U.Ay.getChannelId());
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return G.unsubscribeThreadMemberList(t.guild_id, t.id);
    },
    THREAD_LIST_SYNC: H,
});
