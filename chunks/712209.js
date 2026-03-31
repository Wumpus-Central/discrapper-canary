n.d(t, { Ay: () => q, mJ: () => B, sz: () => V, xB: () => w }), n(321073);
var i,
    l,
    s = n(64700),
    a = n(143236),
    r = n(284009),
    o = n.n(r),
    c = n(735438),
    d = n.n(c),
    u = n(73153),
    h = n(843472),
    A = n(334738),
    _ = n(775602),
    m = n(323073),
    g = n(181079),
    p = n(567035),
    f = n(455234),
    x = n(863005),
    E = n(970278),
    I = n(152007),
    C = n(607508),
    N = n(594061),
    T = n(617617),
    S = n(95701),
    b = n(734057),
    y = n(808728),
    v = n(71393),
    j = n(320501),
    R = n(576705),
    O = n(222823),
    L = n(711014),
    M = n(543465),
    D = n(927813),
    U = n(403362),
    G = n(661191),
    P = n(652215),
    k = n(37411),
    w =
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
    B = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
let V = 25;
class H extends a.EventEmitter {
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
            let t = E.A.hasLoaded(e.guildId);
            return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
        }
        (0, U.xb)(e);
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
              _.A.useReducedMotion && this.deleteChannel(t),
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
        u.h.wait(() => (0, p.A)([e], P.JJy.INBOX)),
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
            { channels: i, collapsedChannels: l, loadState: s } = this.state,
            a = d().findIndex(i, (e) => e.channelId === t),
            r = i[a],
            o = !r.collapsed;
        (l[t] = o),
            (0, N.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = o;
                },
                N.Sb.FREQUENT_USER_ACTION,
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
        let e = this.state.channels.filter((e) => !M.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !I.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = E.A.hasLoaded(e.guildId);
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
        l = i
            .toArray()
            .filter(
                (t) =>
                    G.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= G.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let s = null != i.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        a = l[l.length - 1],
        r = G.default.compare(a?.id, e.newestUnreadMessageId) >= 0 || l.length >= V;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || s || t,
        hasLoadedFirst: e.hasLoadedFirst || s || t,
        isFullyLoaded: e.isFullyLoaded || (s && r) || (t && !i.hasMoreAfter),
    };
}
function K() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = T.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let i in t[n].channels) {
                    let l = b.A.getChannel(i);
                    (i in e && l?.guild_id !== n) || (e[i] = t[n].channels[i].collapsedInInbox);
                }
            return e;
        })(),
        i =
            ((e = n),
            (t = []),
            b.A.getSortedPrivateChannels().forEach((n) => W(e, t, null, n.id)),
            L.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let i = y.Ay.getSelectableChannelIds(n),
                    l = x.A.getActiveJoinedUnreadThreadsForGuild(n);
                i.forEach((i) => {
                    W(e, t, n, i);
                    let s = l[i] ?? {};
                    for (let i in s) W(e, t, n, i);
                });
            }),
            d().sortBy(t, (e) => e.sortOrder)),
        l = d()
            .uniq(i.map((e) => e.guildId))
            .filter(U.Vq);
    return (
        u.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: i, scrollToChannelIndex: null }
    );
}
function W(e, t, n, i) {
    if (null == i) return;
    let l = b.A.getChannel(i);
    if (null == l || (!S.Le.has(l.type) && M.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === O.Ay.getMentionCount(i)) return;
    } else if (!(0, f.Y)(l) && 0 === O.Ay.getMentionCount(i)) return;
    if ((!l.isPrivate() && !R.A.can(P.xBc.READ_MESSAGE_HISTORY, l)) || (0, m.qR)(l)) return;
    let s = O.Ay.ackMessageId(i);
    if (null == s) {
        let e = v.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        s = G.default.fromTimestamp(e.joinedAt.getTime());
    }
    let a = O.Ay.getOldestUnreadMessageId(i),
        r = O.Ay.lastMessageId(i),
        o = O.Ay.getMentionCount(i),
        c = o > 0 || l.isPrivate();
    if (null == r || G.default.compare(s, r) >= 0) return;
    let d = {
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
        hasMentionsOrUnreads: c,
        mentionCount: o,
        sortOrder: (function (e, t, n) {
            let i = b.A.getChannel(t);
            if (g.A.isFavorite(t)) return 0;
            if (i.isPrivate()) return 1;
            if (O.Ay.getMentionCount(t) > 0) return O.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = G.default.extractTimestamp(n);
                if (Date.now() - e > z) return 8;
                if (Date.now() - e > Y) return 6;
            }
            if (i.isThread()) {
                let e = (0, C.l)(i);
                return e === k.CP.ALL_MESSAGES ? 4 : e === k.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = M.Ay.getChannelMessageNotifications(e, t),
                    i = n === P.orn.NULL ? M.Ay.getMessageNotifications(e) : n;
                return i === P.orn.ALL_MESSAGES ? 4 : i === P.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, i, r),
        order: 0,
    };
    (0, m.qR)(l)
        ? t.push({ ...d, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...d, type: "forum" })
          : t.push({ ...d, type: "messages", messages: [] });
}
let Y = 2 * D.A.Millis.DAY,
    z = 10 * D.A.Millis.DAY;
function q(e) {
    let [t, n] = s.useState(() => new H(K(), e)),
        [i, l] = s.useState(!1),
        a = s.useRef(Date.now()),
        [r, o] = s.useState(() => K());
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
                s = K();
            0 === s.channels.length || t - a.current < 10 * D.A.Millis.SECOND
                ? l(!0)
                : ((a.current = Date.now()), n(new H(s, e)));
        }, [r, i, e]);
    let c = s.useRef(t);
    return (
        s.useLayoutEffect(() => {
            c.current = t;
        }),
        s.useLayoutEffect(() => {
            r?.channels, r?.loadState, c.current.maybeLoadMore();
        }, [r?.channels, r?.loadState]),
        s.useEffect(
            () => (j.A.addChangeListener(t.reloadMessages), () => j.A.removeChangeListener(t.reloadMessages)),
            [t.reloadMessages],
        ),
        s.useEffect(
            () => (
                M.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                () => M.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
            ),
            [t],
        ),
        s.useEffect(
            () => (
                I.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                () => I.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
            ),
            [t],
        ),
        s.useEffect(
            () => (
                E.A.addChangeListener(t.handleActiveThreadsStoreChange),
                () => E.A.removeChangeListener(t.handleActiveThreadsStoreChange)
            ),
            [t],
        ),
        [r, t]
    );
}
