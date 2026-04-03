n.d(t, { Ay: () => X, mJ: () => V, sz: () => H, xB: () => B }), n(321073);
var i,
    l,
    s = n(64700),
    a = n(143236),
    r = n(284009),
    o = n.n(r),
    d = n(735438),
    c = n.n(d),
    u = n(73153),
    h = n(843472),
    A = n(334738),
    _ = n(775602),
    m = n(323073),
    g = n(181079),
    p = n(567035),
    f = n(202803),
    x = n(455234),
    E = n(863005),
    I = n(970278),
    C = n(152007),
    N = n(607508),
    T = n(594061),
    S = n(617617),
    b = n(95701),
    y = n(734057),
    v = n(808728),
    j = n(71393),
    R = n(320501),
    O = n(576705),
    L = n(222823),
    M = n(711014),
    D = n(543465),
    U = n(927813),
    G = n(403362),
    P = n(661191),
    k = n(652215),
    w = n(37411),
    B =
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
    V = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
let H = 25;
class F extends a.EventEmitter {
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
        if ("messages" === e.type) {
            let t = K(e, !1);
            return t.messages.some(f.$r) ? (h.A.clearChannel(e.channelId), { ...e, messages: [] }) : t;
        }
        if ("nsfw" === e.type) return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
        if ("forum" === e.type) {
            let t = I.A.hasLoaded(e.guildId);
            return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
        }
        (0, G.xb)(e);
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) => ("messages" === e.type && e.hasLoadedAnything ? K(e, !1, !0) : e)),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        u.h.wait(() =>
            A.ack(
                t,
                {
                    section: k.JJy.INBOX,
                    object: k.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: k.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              _.A.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        A.ack(
            e.channelId,
            { section: k.JJy.INBOX, object: k.ZSU.UNDO_MARK_AS_READ, objectType: k.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        u.h.wait(() => (0, p.A)([e], k.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: c().findIndex(this.state.channels, (t) => t.channelId === e),
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
            { channels: i, collapsedChannels: l, loadState: s } = this.state,
            a = c().findIndex(i, (e) => e.channelId === t),
            r = i[a],
            o = !r.collapsed;
        (l[t] = o),
            (0, T.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = o;
                },
                T.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: a,
                collapsedChannels: l,
                loadState: "done" !== s || o || r.isFullyLoaded ? s : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: o })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !D.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !C.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = I.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        h.A.clearChannel(e.channelId);
        let t = h.A.fetchMessages({
            channelId: e.channelId,
            limit: k.EMb,
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
                            let n = K(e, !0);
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
                                    ...K(e, !0),
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
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = R.A.getMessages(e.channelId),
        l = i
            .toArray()
            .filter(
                (t) =>
                    P.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= P.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let s = null != i.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        a = l[l.length - 1],
        r = P.default.compare(a?.id, e.newestUnreadMessageId) >= 0 || l.length >= H;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || s || t,
        hasLoadedFirst: e.hasLoadedFirst || s || t,
        isFullyLoaded: e.isFullyLoaded || (s && r) || (t && !i.hasMoreAfter),
    };
}
function W() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = S.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let i in t[n].channels) {
                    let l = y.A.getChannel(i);
                    (i in e && l?.guild_id !== n) || (e[i] = t[n].channels[i].collapsedInInbox);
                }
            return e;
        })(),
        i =
            ((e = n),
            (t = []),
            y.A.getSortedPrivateChannels().forEach((n) => Y(e, t, null, n.id)),
            M.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let i = v.Ay.getSelectableChannelIds(n),
                    l = E.A.getActiveJoinedUnreadThreadsForGuild(n);
                i.forEach((i) => {
                    Y(e, t, n, i);
                    let s = l[i] ?? {};
                    for (let i in s) Y(e, t, n, i);
                });
            }),
            c().sortBy(t, (e) => e.sortOrder)),
        l = c()
            .uniq(i.map((e) => e.guildId))
            .filter(G.Vq);
    return (
        u.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: i, scrollToChannelIndex: null }
    );
}
function Y(e, t, n, i) {
    if (null == i) return;
    let l = y.A.getChannel(i);
    if (null == l || (!b.Le.has(l.type) && D.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === L.Ay.getMentionCount(i)) return;
    } else if (!(0, x.Y)(l) && 0 === L.Ay.getMentionCount(i)) return;
    if ((!l.isPrivate() && !O.A.can(k.xBc.READ_MESSAGE_HISTORY, l)) || (0, m.qR)(l)) return;
    let s = L.Ay.ackMessageId(i);
    if (null == s) {
        let e = j.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        s = P.default.fromTimestamp(e.joinedAt.getTime());
    }
    let a = L.Ay.getOldestUnreadMessageId(i),
        r = L.Ay.lastMessageId(i),
        o = L.Ay.getMentionCount(i),
        d = o > 0 || l.isPrivate();
    if (null == r || P.default.compare(s, r) >= 0) return;
    let c = {
        guildId: n,
        channelId: i,
        oldestReadMessageId: s,
        oldestUnreadMessageId: a,
        newestUnreadMessageId: r,
        collapsed: !0 === e[i],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: d,
        mentionCount: o,
        sortOrder: (function (e, t, n) {
            let i = y.A.getChannel(t);
            if (g.A.isFavorite(t)) return 0;
            if (i.isPrivate()) return 1;
            if (L.Ay.getMentionCount(t) > 0) return L.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = P.default.extractTimestamp(n);
                if (Date.now() - e > q) return 8;
                if (Date.now() - e > z) return 6;
            }
            if (i.isThread()) {
                let e = (0, N.l)(i);
                return e === w.CP.ALL_MESSAGES ? 4 : e === w.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = D.Ay.getChannelMessageNotifications(e, t),
                    i = n === k.orn.NULL ? D.Ay.getMessageNotifications(e) : n;
                return i === k.orn.ALL_MESSAGES ? 4 : i === k.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, i, r),
        order: 0,
    };
    (0, m.qR)(l)
        ? t.push({ ...c, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...c, type: "forum" })
          : t.push({ ...c, type: "messages", messages: [] });
}
let z = 2 * U.A.Millis.DAY,
    q = 10 * U.A.Millis.DAY;
function X(e) {
    let [t, n] = s.useState(() => new F(W(), e)),
        [i, l] = s.useState(!1),
        a = s.useRef(Date.now()),
        [r, o] = s.useState(() => W());
    s.useEffect(() => {
        let e = (e) => o(e);
        return (
            t.on("change", e),
            o(t.state),
            () => {
                t.off("change", e);
            }
        );
    }, [t]),
        s.useEffect(() => {
            if (null == r || r.channels.length > 0 || i) return;
            let t = Date.now(),
                s = W();
            0 === s.channels.length || t - a.current < 10 * U.A.Millis.SECOND
                ? l(!0)
                : ((a.current = Date.now()), n(new F(s, e)));
        }, [r, i, e]);
    let d = s.useRef(t);
    return (
        s.useLayoutEffect(() => {
            d.current = t;
        }),
        s.useLayoutEffect(() => {
            r?.channels, r?.loadState, d.current.maybeLoadMore();
        }, [r?.channels, r?.loadState]),
        s.useEffect(
            () => (R.A.addChangeListener(t.reloadMessages), () => R.A.removeChangeListener(t.reloadMessages)),
            [t.reloadMessages],
        ),
        s.useEffect(
            () => (
                D.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                () => D.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
            ),
            [t],
        ),
        s.useEffect(
            () => (
                C.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                () => C.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
            ),
            [t],
        ),
        s.useEffect(
            () => (
                I.A.addChangeListener(t.handleActiveThreadsStoreChange),
                () => I.A.removeChangeListener(t.handleActiveThreadsStoreChange)
            ),
            [t],
        ),
        [r, t]
    );
}
