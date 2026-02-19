"use strict";
n.d(t, { Ay: () => X, mJ: () => V, sz: () => B, xB: () => k }), n(321073);
var i,
    s,
    l = n(64700),
    r = n(143236),
    a = n(284009),
    o = n.n(a),
    c = n(735438),
    d = n.n(c),
    u = n(73153),
    h = n(843472),
    A = n(334738),
    p = n(775602),
    g = n(323073),
    m = n(181079),
    _ = n(567035),
    f = n(455234),
    x = n(863005),
    C = n(970278),
    E = n(152007),
    I = n(607508),
    b = n(594061),
    N = n(617617),
    S = n(95701),
    T = n(734057),
    v = n(808728),
    y = n(71393),
    j = n(320501),
    R = n(576705),
    O = n(222823),
    L = n(711014),
    M = n(543465),
    D = n(927813),
    G = n(403362),
    U = n(661191),
    P = n(652215),
    w = n(37411),
    k =
        (((i = {})[(i.Favorite = 0)] = "Favorite"),
        (i[(i.PrivateChannel = 1)] = "PrivateChannel"),
        (i[(i.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (i[(i.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (i[(i.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (i[(i.GuildChannel = 5)] = "GuildChannel"),
        (i[(i.OldChannel = 6)] = "OldChannel"),
        (i[(i.NoNotifications = 7)] = "NoNotifications"),
        (i[(i.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        i),
    V = (((s = {}).Loading = "loading"), (s.Loaded = "loaded"), (s.Done = "done"), s);
let B = 25;
class H extends r.EventEmitter {
    state;
    scrollerRef;
    undoStack = [];
    constructor(e, t) {
        super(), (this.state = e), (this.scrollerRef = t);
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
    maybeLoadMore = () => {
        let e = this.scrollerRef.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 2e3 && this.loadMore());
    };
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            i = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return { ...e, hasLoadedAnything: !0 };
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (o()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || i.some((e, n) => e !== t[n])) &&
            this.setState({ channels: i, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        if ("messages" === e.type) return F(e, !1);
        if ("nsfw" === e.type) return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
        if ("forum" === e.type) {
            let t = C.A.hasLoaded(e.guildId);
            return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
        }
        (0, G.xb)(e);
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) => ("messages" === e.type && e.hasLoadedAnything ? F(e, !1, !0) : e)),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        u.h.wait(() =>
            A.ack(
                t,
                {
                    section: P.JJy.INBOX,
                    object: P.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: P.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                void 0,
                n,
            ),
        );
        let i = this.state.channels.find((e) => e.channelId === t);
        (null != i && this.undoStack.push(i), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              p.A.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        A.ack(
            e.channelId,
            { section: P.JJy.INBOX, object: P.ZSU.UNDO_MARK_AS_READ, objectType: P.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        u.h.wait(() => (0, _.A)([e], P.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: d().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        A.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: i, collapsedChannels: s, loadState: l } = this.state,
            r = d().findIndex(i, (e) => e.channelId === t),
            a = i[r],
            o = !a.collapsed;
        (s[t] = o),
            (0, b.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = o;
                },
                b.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: r,
                collapsedChannels: s,
                loadState: "done" !== l || o || a.isFullyLoaded ? l : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: o })),
            }),
            a.collapsed ? a.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !M.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !E.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = C.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        h.A.clearChannel(e.channelId);
        let t = h.A.fetchMessages({
            channelId: e.channelId,
            limit: P.EMb,
            jump: { messageId: e.oldestReadMessageId, flash: !0 },
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: "loading" }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            o()("messages" === e.type, "channel cannot change type");
                            let n = F(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = { ...n, hasLoadedAnything: !0, isFullyLoaded: !0, hasError: !t }),
                                n
                            );
                        }),
                    });
                },
                () => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(
                            e.channelId,
                            (e) => (
                                o()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...F(e, !0),
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: e.messages[e.messages.length - 1]?.id,
                                }
                            ),
                        ),
                    });
                },
            ),
            !0)
        );
    }
    updateChannel(e, t) {
        return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
function F(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = j.A.getMessages(e.channelId),
        s = i
            .toArray()
            .filter(
                (t) =>
                    U.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= U.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (s.length === e.messages.length && s.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != i.getAfter(e.oldestReadMessageId) || s[0]?.id === e.oldestUnreadMessageId,
        r = s[s.length - 1],
        a = U.default.compare(r?.id, e.newestUnreadMessageId) >= 0 || s.length >= B;
    return {
        ...e,
        messages: s,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && a) || (t && !i.hasMoreAfter),
    };
}
function K() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = N.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let i in t[n].channels) {
                    let s = T.A.getChannel(i);
                    (i in e && s?.guild_id !== n) || (e[i] = t[n].channels[i].collapsedInInbox);
                }
            return e;
        })(),
        i =
            ((e = n),
            (t = []),
            T.A.getSortedPrivateChannels().forEach((n) => W(e, t, null, n.id)),
            L.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let i = v.Ay.getSelectableChannelIds(n),
                    s = x.A.getActiveJoinedUnreadThreadsForGuild(n);
                i.forEach((i) => {
                    W(e, t, n, i);
                    let l = s[i] ?? {};
                    for (let i in l) W(e, t, n, i);
                });
            }),
            d().sortBy(t, (e) => e.sortOrder)),
        s = d()
            .uniq(i.map((e) => e.guildId))
            .filter(G.Vq);
    return (
        u.h.dispatch({ type: "INBOX_OPEN", guildIds: s }),
        { collapsedChannels: n, loadState: "loaded", channels: i, scrollToChannelIndex: null }
    );
}
function W(e, t, n, i) {
    if (null == i) return;
    let s = T.A.getChannel(i);
    if (null == s || (!S.Le.has(s.type) && M.Ay.isGuildOrCategoryOrChannelMuted(n, s.id))) return;
    if (s.isPrivate()) {
        if (0 === O.Ay.getMentionCount(i)) return;
    } else if (!(0, f.Y)(s) && 0 === O.Ay.getMentionCount(i)) return;
    if ((!s.isPrivate() && !R.A.can(P.xBc.READ_MESSAGE_HISTORY, s)) || (0, g.qR)(s)) return;
    let l = O.Ay.ackMessageId(i);
    if (null == l) {
        let e = y.A.getGuild(s.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = U.default.fromTimestamp(e.joinedAt.getTime());
    }
    let r = O.Ay.getOldestUnreadMessageId(i),
        a = O.Ay.lastMessageId(i),
        o = O.Ay.getMentionCount(i),
        c = o > 0 || s.isPrivate();
    if (null == a || U.default.compare(l, a) >= 0) return;
    let d = {
        guildId: n,
        channelId: i,
        oldestReadMessageId: l,
        oldestUnreadMessageId: r,
        newestUnreadMessageId: a,
        collapsed: !0 === e[i],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: o,
        sortOrder: (function (e, t, n) {
            let i = T.A.getChannel(t);
            if (m.A.isFavorite(t)) return 0;
            if (i.isPrivate()) return 1;
            if (O.Ay.getMentionCount(t) > 0) return O.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = U.default.extractTimestamp(n);
                if (Date.now() - e > z) return 8;
                if (Date.now() - e > Y) return 6;
            }
            if (i.isThread()) {
                let e = (0, I.l)(i);
                return e === w.CP.ALL_MESSAGES ? 4 : e === w.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = M.Ay.getChannelMessageNotifications(e, t),
                    i = n === P.orn.NULL ? M.Ay.getMessageNotifications(e) : n;
                return i === P.orn.ALL_MESSAGES ? 4 : i === P.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, i, a),
        order: 0,
    };
    (0, g.qR)(s)
        ? t.push({ ...d, type: "nsfw" })
        : s.isForumLikeChannel()
          ? t.push({ ...d, type: "forum" })
          : t.push({ ...d, type: "messages", messages: [] });
}
let Y = 2 * D.A.Millis.DAY,
    z = 10 * D.A.Millis.DAY;
function X(e) {
    let [t, n] = l.useState(() => new H(K(), e)),
        [i, s] = l.useState(!1),
        r = l.useRef(Date.now()),
        [a, o] = l.useState(() => K());
    l.useEffect(() => {
        let e = (e) => o(e);
        return (
            t.on("change", e),
            o(t.state),
            () => {
                t.off("change", e);
            }
        );
    }, [t]),
        l.useEffect(() => {
            if (null == a || a.channels.length > 0 || i) return;
            let t = Date.now(),
                l = K();
            0 === l.channels.length || t - r.current < 10 * D.A.Millis.SECOND
                ? s(!0)
                : ((r.current = Date.now()), n(new H(l, e)));
        }, [a, i, e]);
    let c = l.useRef(t);
    return (
        l.useLayoutEffect(() => {
            c.current = t;
        }),
        l.useLayoutEffect(() => {
            a?.channels, a?.loadState, c.current.maybeLoadMore();
        }, [a?.channels, a?.loadState]),
        l.useEffect(
            () => (j.A.addChangeListener(t.reloadMessages), () => j.A.removeChangeListener(t.reloadMessages)),
            [t.reloadMessages],
        ),
        l.useEffect(
            () => (
                M.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                () => M.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
            ),
            [t],
        ),
        l.useEffect(
            () => (
                E.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                () => E.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
            ),
            [t],
        ),
        l.useEffect(
            () => (
                C.A.addChangeListener(t.handleActiveThreadsStoreChange),
                () => C.A.removeChangeListener(t.handleActiveThreadsStoreChange)
            ),
            [t],
        ),
        [a, t]
    );
}
