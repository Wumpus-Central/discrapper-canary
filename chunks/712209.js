n.d(t, { Ay: () => Y, mJ: () => B, sz: () => K, xB: () => P }), n(321073);
var s,
    a,
    l = n(64700),
    i = n(143236),
    r = n(284009),
    o = n.n(r),
    d = n(735438),
    c = n.n(d),
    u = n(73153),
    h = n(843472),
    _ = n(334738),
    A = n(775602),
    m = n(323073),
    g = n(181079),
    f = n(567035),
    E = n(202803),
    N = n(455234),
    p = n(863005),
    I = n(970278),
    C = n(152007),
    S = n(607508),
    x = n(594061),
    R = n(617617),
    y = n(95701),
    T = n(734057),
    j = n(808728),
    b = n(71393),
    D = n(320501),
    O = n(576705),
    v = n(222823),
    M = n(711014),
    F = n(543465),
    L = n(927813),
    U = n(403362),
    k = n(661191),
    G = n(652215),
    w = n(37411),
    P =
        (((s = {})[(s.Favorite = 0)] = "Favorite"),
        (s[(s.PrivateChannel = 1)] = "PrivateChannel"),
        (s[(s.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (s[(s.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (s[(s.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (s[(s.GuildChannel = 5)] = "GuildChannel"),
        (s[(s.OldChannel = 6)] = "OldChannel"),
        (s[(s.NoNotifications = 7)] = "NoNotifications"),
        (s[(s.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        s),
    B = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
let K = 25;
class H extends i.EventEmitter {
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
            s = t.map((e) => {
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
        (!n || s.some((e, n) => e !== t[n])) &&
            this.setState({ channels: s, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        if ("messages" === e.type) {
            let t = z(e, !1);
            return t.messages.some(E.$r) ? (h.A.clearChannel(e.channelId), { ...e, messages: [] }) : t;
        }
        if ("nsfw" === e.type) return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
        if ("forum" === e.type) {
            let t = I.A.hasLoaded(e.guildId);
            return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
        }
        (0, U.xb)(e);
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) => ("messages" === e.type && e.hasLoadedAnything ? z(e, !1, !0) : e)),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        u.h.wait(() =>
            _.ack(
                t,
                {
                    section: G.JJy.INBOX,
                    object: G.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: G.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                void 0,
                n,
            ),
        );
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              A.A.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        _.ack(
            e.channelId,
            { section: G.JJy.INBOX, object: G.ZSU.UNDO_MARK_AS_READ, objectType: G.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        u.h.wait(() => (0, f.A)([e], G.JJy.INBOX)),
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
        _.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: a, loadState: l } = this.state,
            i = c().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            o = !r.collapsed;
        (a[t] = o),
            (0, x.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = o;
                },
                x.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: a,
                loadState: "done" !== l || o || r.isFullyLoaded ? l : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: o })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !F.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
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
            limit: G.EMb,
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
                            let n = z(e, !0);
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
                                    ...z(e, !0),
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
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = D.A.getMessages(e.channelId),
        a = s
            .toArray()
            .filter(
                (t) =>
                    k.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= k.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != s.getAfter(e.oldestReadMessageId) || a[0]?.id === e.oldestUnreadMessageId,
        i = a[a.length - 1],
        r = k.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || a.length >= K;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && r) || (t && !s.hasMoreAfter),
    };
}
function J() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = R.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let a = T.A.getChannel(s);
                    (s in e && a?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            T.A.getSortedPrivateChannels().forEach((n) => W(e, t, null, n.id)),
            M.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = j.Ay.getSelectableChannelIds(n),
                    a = p.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    W(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) W(e, t, n, s);
                });
            }),
            c().sortBy(t, (e) => e.sortOrder)),
        a = c()
            .uniq(s.map((e) => e.guildId))
            .filter(U.Vq);
    return (
        u.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function W(e, t, n, s) {
    if (null == s) return;
    let a = T.A.getChannel(s);
    if (null == a || (!y.Le.has(a.type) && F.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === v.Ay.getMentionCount(s)) return;
    } else if (!(0, N.Y)(a) && 0 === v.Ay.getMentionCount(s)) return;
    if ((!a.isPrivate() && !O.A.can(G.xBc.READ_MESSAGE_HISTORY, a)) || (0, m.qR)(a)) return;
    let l = v.Ay.ackMessageId(s);
    if (null == l) {
        let e = b.A.getGuild(a.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = k.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = v.Ay.getOldestUnreadMessageId(s),
        r = v.Ay.lastMessageId(s),
        o = v.Ay.getMentionCount(s),
        d = o > 0 || a.isPrivate();
    if (null == r || k.default.compare(l, r) >= 0) return;
    let c = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: l,
        oldestUnreadMessageId: i,
        newestUnreadMessageId: r,
        collapsed: !0 === e[s],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: d,
        mentionCount: o,
        sortOrder: (function (e, t, n) {
            let s = T.A.getChannel(t);
            if (g.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (v.Ay.getMentionCount(t) > 0) return v.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = k.default.extractTimestamp(n);
                if (Date.now() - e > V) return 8;
                if (Date.now() - e > $) return 6;
            }
            if (s.isThread()) {
                let e = (0, S.l)(s);
                return e === w.CP.ALL_MESSAGES ? 4 : e === w.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = F.Ay.getChannelMessageNotifications(e, t),
                    s = n === G.orn.NULL ? F.Ay.getMessageNotifications(e) : n;
                return s === G.orn.ALL_MESSAGES ? 4 : s === G.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, m.qR)(a)
        ? t.push({ ...c, type: "nsfw" })
        : a.isForumLikeChannel()
          ? t.push({ ...c, type: "forum" })
          : t.push({ ...c, type: "messages", messages: [] });
}
let $ = 2 * L.A.Millis.DAY,
    V = 10 * L.A.Millis.DAY;
function Y(e) {
    let [t, n] = l.useState(() => new H(J(), e)),
        [s, a] = l.useState(!1),
        i = l.useRef(Date.now()),
        [r, o] = l.useState(() => J());
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
            if (null == r || r.channels.length > 0 || s) return;
            let t = Date.now(),
                l = J();
            0 === l.channels.length || t - i.current < 10 * L.A.Millis.SECOND
                ? a(!0)
                : ((i.current = Date.now()), n(new H(l, e)));
        }, [r, s, e]);
    let d = l.useRef(t);
    return (
        l.useLayoutEffect(() => {
            d.current = t;
        }),
        l.useLayoutEffect(() => {
            r?.channels, r?.loadState, d.current.maybeLoadMore();
        }, [r?.channels, r?.loadState]),
        l.useEffect(
            () => (D.A.addChangeListener(t.reloadMessages), () => D.A.removeChangeListener(t.reloadMessages)),
            [t.reloadMessages],
        ),
        l.useEffect(
            () => (
                F.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                () => F.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
            ),
            [t],
        ),
        l.useEffect(
            () => (
                C.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                () => C.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
            ),
            [t],
        ),
        l.useEffect(
            () => (
                I.A.addChangeListener(t.handleActiveThreadsStoreChange),
                () => I.A.removeChangeListener(t.handleActiveThreadsStoreChange)
            ),
            [t],
        ),
        [r, t]
    );
}
