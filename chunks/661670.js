let i;
n.d(t, { A: () => j });
var r = n(435558),
    a = n.n(r),
    s = n(855986),
    l = n(73153),
    o = n(451988),
    d = n(5180),
    c = n(36124),
    u = n(626584),
    _ = n(927813),
    E = n(811091);
let A = +_.A.Millis.MINUTE;
class f {
    _subscriptions = {};
    _unsubscriptions = {};
    _onChange;
    _unsubscribe = new o.J_(A, () => this.flushUnsubscriptions());
    constructor(e) {
        this._onChange = e;
    }
    reset() {
        ((this._subscriptions = {}), (this._unsubscriptions = {}), this._unsubscribe.cancel());
    }
    get(e) {
        let t = this._subscriptions[e] ?? {};
        return E.default.keys(t);
    }
    clear(e) {
        (delete this._subscriptions[e], delete this._unsubscriptions[e]);
    }
    subscribe(e, t) {
        let n = this._subscriptions[e] ?? {};
        ((n[t] = (n[t] ?? 0) + 1),
            (this._subscriptions[e] = n),
            1 === n[t] && this._onChange(e, this.get(e)),
            this.checkForLeaks(e, t));
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
        ((n[t] = (n[t] ?? 0) + 1), (this._unsubscriptions[e] = n), 1 === n[t] && this._unsubscribe.delay(!1));
    }
    checkForLeaks(e, t) {
        let n = (this._subscriptions[e]?.[t] ?? 0) - (this._unsubscriptions[e]?.[t] ?? 0);
        n > 5 &&
            new u.A("GuildMemberSubscriptions").warn(
                `GuildMemberSubscriptions.subscribe(...): Potential reference leak! (${n} subscriptions)`,
            );
    }
    flushUnsubscriptions() {
        a().isEmpty(this._unsubscriptions) ||
            (a().forEach(this._unsubscriptions, (e, t) => {
                let n = this._subscriptions[t];
                (a().forEach(e, (e, t) => {
                    ((n[t] = (n[t] ?? 0) - e), n[t] <= 0 && delete n[t]);
                }),
                    a().isEmpty(n) && delete this._subscriptions[t],
                    this._onChange(t, this.get(t)));
            }),
            (this._unsubscriptions = {}));
    }
}
var h = n(635377),
    I = n.n(h);
class p {
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
var m = n(652215);
function g(e) {
    return null != e && "null" !== e && e !== m.ME && "undefined" !== e && !(0, d.ai)(e);
}
var T = n(343446),
    S = n(857071),
    N = n(655116),
    C = n(46653);
n(963307);
var O = n(799704),
    R = n(734057),
    L = n(919638),
    y = n(696451),
    D = n(71393),
    b = n(495867),
    v = n(994500),
    P = n(309010),
    M = n(967198);
let U = new (class {
    _members = new f((e, t) => this._enqueue(e, { members: t }));
    _channels = new c.A((e, t) => this._enqueue(e, { channels: t }));
    _threadMemberLists = new p((e, t) => this._enqueue(e, { thread_member_lists: t }));
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
        ((this._pending[e] = { ...this._pending[e], ...t }), this._flush.delay());
    }
    reset() {
        (this._subscribed.clear(),
            (this._pending = {}),
            this._members.reset(),
            this._memberUpdates.clear(),
            this._channels.reset(),
            this._threadMemberLists.reset(),
            this._typing.clear(),
            this._threads.clear(),
            this._activities.clear());
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
        ((t || !this._threads.has(e)) && this._subscribed.delete(e),
            delete this._pending[e],
            this._members.clear(e),
            this._channels.clear(e),
            this._threadMemberLists.clear(e),
            this._typing.delete(e),
            this._memberUpdates.delete(e),
            t && this._threads.delete(e),
            this._activities.delete(e));
    }
    flush() {
        (a().forEach(this._pending, (e, t) => {
            this._subscribed.add(t);
        }),
            this._onChange(this._pending),
            (this._pending = {}));
    }
    subscribeUser(e, t) {
        g(e) && this._members.subscribe(e, t);
    }
    unsubscribeUser(e, t) {
        g(e) && this._members.unsubscribe(e, t);
    }
    subscribeChannel(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return !!g(e) && this._channels.subscribe(e, t, n, i);
    }
    subscribeToMemberUpdates(e) {
        if (!g(e)) return !1;
        (this._enqueue(e, { member_updates: !0 }), this._memberUpdates.add(e));
    }
    unsubscribeFromMemberUpdates(e) {
        if (!g(e)) return !1;
        this._enqueue(e, { member_updates: !1 });
    }
    subscribeThreadMemberList(e, t, n) {
        return !!g(e) && this._threadMemberLists.subscribe(e, t, n);
    }
    unsubscribeThreadMemberList(e, t) {
        return !!g(e) && this._threadMemberLists.unsubscribe(e, t);
    }
    subscribeToGuild(e) {
        (this._subscribeToFeature(e, this._typing, { typing: !0 }),
            this._subscribeToFeature(e, this._activities, { activities: !0 }),
            this._subscribeToFeature(e, this._threads, { threads: !0 }));
    }
    _subscribeToFeature(e, t, n) {
        !g(e) || t.has(e) || (t.add(e), this._enqueue(e, n));
    }
})((e) => {
    for (let t in e) null != D.A.getGuild(t) || L.A.isUnavailable(t) || delete e[t];
    l.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
});
function w(e, t) {
    let n = {};
    (U.forEach((r) => {
        r !== M.A.getGuildId() &&
            r !== b.A.getGuildId() &&
            r !== R.A.getChannel(P.Ay.getChannelId())?.getGuildId() &&
            (null == i || i.guildId !== r) &&
            (U.clearWithoutFlushing(r, e), t && (n[r] = U.get(r)));
    }),
        a().isEmpty(n) || l.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: n }));
}
function G(e, t) {
    let n = (0, d.ai)(e) && null != t ? (R.A.getChannel(t)?.getGuildId() ?? e) : e;
    return (U.subscribeToGuild(n), null != t && O.Ay.getSection(t) === m.YvQ.MEMBERS && x(e, t, c.L, !0));
}
function x(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (0 === t) return U.subscribeChannel(e, t, n, i);
    let r = R.A.getChannel(t);
    if (null == r) return !1;
    let a = r.getGuildId();
    return (a !== e && (0, d.ai)(e) && U.subscribeToGuild(a), r?.isThread())
        ? r.type === m.rbe.ANNOUNCEMENT_THREAD
            ? U.subscribeChannel(a, r.parent_id, n, i)
            : !!r.isActiveThread() && U.subscribeThreadMemberList(a, t, P.Ay.getChannelId())
        : U.subscribeChannel(a, t, n, i);
}
function k(e) {
    let { type: t } = e;
    "CONNECTION_OPEN" === t && w(!0, !1);
    let n = M.A.getGuildId();
    null != n && G(n, P.Ay.getChannelId(n));
    let i = {},
        r = new Set(S.A.lurkingGuildIds()),
        s = S.A.mostRecentLurkedGuildId();
    (U.forEach((e) => {
        null == D.A.getGuild(e) ? U.clearWithoutFlushing(e, !0) : (r.has(e) && e !== s) || (i[e] = U.get(e));
    }),
        a().isEmpty(i) || l.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: i }));
}
function F(e) {
    let { guildId: t, channelId: n } = e;
    return !L.A.isUnavailable(t) && G(t, n);
}
function B() {
    return G(M.A.getGuildId(), P.Ay.getChannelId());
}
function V() {
    let e = N.A.getSyncingWith();
    if (null == e) null != i && (U.unsubscribeUser(i.guildId, i.userId), (i = null));
    else {
        let { userId: t } = e;
        if ((null != i && i.userId === t) || v.A.isFriend(t)) return !1;
        let n = y.Ay.memberOf(t);
        if (0 === n.length) return !1;
        let [r] = n;
        ((i = { guildId: r, userId: t }), U.subscribeUser(r, t));
    }
    return !1;
}
class H extends s.Ay.Store {
    static displayName = "GuildSubscriptionsStore";
    initialize() {
        (this.waitFor(C.default, O.Ay, R.A, T.A, L.A, y.Ay, D.A, S.A, b.A, v.A, P.Ay, M.A, N.A),
            this.syncWith([N.A], V),
            this.syncWith([O.Ay], B));
    }
    getSubscribedThreadIds() {
        return U.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return U.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return U.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return U.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = U.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
let j = new H(l.h, {
    CONNECTION_OPEN: k,
    CONNECTION_RESUMED: k,
    CONNECTION_CLOSED: function () {
        w(!1, !1);
    },
    IDLE: function (e) {
        let { idle: t } = e;
        if (!t) return !1;
        w(!1, !0);
    },
    LOGOUT: function () {
        U.reset();
    },
    VOICE_CHANNEL_SELECT: F,
    CHANNEL_SELECT: F,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        t.id === M.A.getGuildId() && B();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        U.clearWithoutFlushing(t.id, !0);
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                e !== C.default.getId() && U.subscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                U.unsubscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        U.subscribeToMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        U.unsubscribeFromMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
        let { guildId: t, channelId: n, ranges: i } = e;
        return x(t, n, i);
    },
    GUILD_SUBSCRIPTIONS: function (e) {
        let { guildId: t } = e;
        return U.subscribeToGuild(t);
    },
    CHANNEL_PRELOAD: function (e) {
        let { guildId: t, channelId: n } = e;
        return G(t, n);
    },
    OVERLAY_TEXT_CHAT_SELECT_CHANNEL: function (e) {
        let { guildId: t, channelId: n } = e;
        return G(t, n);
    },
    INBOX_OPEN: function (e) {
        let { guildIds: t } = e;
        for (let e of t) null != e && U.subscribeToGuild(e);
        return !1;
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return t.isArchivedThread()
            ? U.unsubscribeThreadMemberList(t.guild_id, t.id)
            : !!t.isActiveThread() &&
                  P.Ay.getChannelId() === t.id &&
                  void U.subscribeThreadMemberList(t.guild_id, t.id, P.Ay.getChannelId());
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return U.unsubscribeThreadMemberList(t.guild_id, t.id);
    },
    THREAD_LIST_SYNC: B,
});
