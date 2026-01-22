n.d(t, {
    Ay: () => Q,
    mJ: () => B,
    sz: () => K,
    xB: () => H,
}),
    n(321073),
    n(896048);
var r,
    l,
    i = n(64700),
    a = n(143236),
    s = n(284009),
    o = n.n(s),
    c = n(735438),
    u = n.n(c),
    d = n(73153),
    f = n(843472),
    p = n(334738),
    h = n(775602),
    b = n(323073),
    g = n(181079),
    m = n(567035),
    A = n(455234),
    y = n(863005),
    O = n(970278),
    j = n(152007),
    v = n(607508),
    x = n(594061),
    E = n(617617),
    _ = n(95701),
    C = n(734057),
    S = n(808728),
    I = n(71393),
    N = n(320501),
    T = n(576705),
    P = n(222823),
    w = n(711014),
    R = n(543465),
    D = n(927813),
    M = n(403362),
    L = n(661191),
    G = n(652215),
    k = n(37411);

function U(e, t, n) {
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

function V(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}

function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var H =
        (((r = {})[(r.Favorite = 0)] = "Favorite"),
        (r[(r.PrivateChannel = 1)] = "PrivateChannel"),
        (r[(r.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (r[(r.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (r[(r.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (r[(r.GuildChannel = 5)] = "GuildChannel"),
        (r[(r.OldChannel = 6)] = "OldChannel"),
        (r[(r.NoNotifications = 7)] = "NoNotifications"),
        (r[(r.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        r),
    B = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
let K = 25;
class W extends a.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            r = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything)
                        return F(V({}, e), {
                            hasLoadedAnything: !0,
                        });
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (o()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || r.some((e, n) => e !== t[n])) &&
            this.setState({
                channels: r,
                loadState: n ? this.state.loadState : "done",
            });
    }
    populateInitialStateFromStore(e) {
        if ("messages" === e.type) return z(e, !1);
        if ("nsfw" === e.type)
            return F(V({}, e), {
                isFullyLoaded: !0,
                hasLoadedAnything: !0,
            });
        if ("forum" === e.type) {
            let t = O.A.hasLoaded(e.guildId);
            return F(V({}, e), {
                isFullyLoaded: t,
                hasLoadedAnything: !0,
            });
        }
        (0, M.xb)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({
            scrollToChannelIndex: null,
        });
    }
    loadChannelMessages(e) {
        f.A.clearChannel(e.channelId);
        let t = f.A.fetchMessages({
            channelId: e.channelId,
            limit: G.EMb,
            jump: {
                messageId: e.oldestReadMessageId,
                flash: !0,
            },
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({
                loadState: "loading",
            }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            o()("messages" === e.type, "channel cannot change type");
                            let n = z(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = F(V({}, n), {
                                        hasLoadedAnything: !0,
                                        isFullyLoaded: !0,
                                        hasError: !t,
                                    })),
                                n
                            );
                        }),
                    });
                },
                () => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            var t;
                            return (
                                o()("messages" === e.type, "channel cannot change type"),
                                F(V({}, z(e, !0)), {
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId:
                                        null == (t = e.messages[e.messages.length - 1]) ? void 0 : t.id,
                                })
                            );
                        }),
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
                (this.state = V({}, this.state, e)), this.emit("change", this.state);
                return;
            }
    }
    constructor(e, t) {
        super(),
            U(this, "state", void 0),
            U(this, "scrollerRef", void 0),
            U(this, "undoStack", void 0),
            U(this, "maybeLoadMore", void 0),
            U(this, "reloadMessages", void 0),
            U(this, "getNumUnreadChannels", void 0),
            U(this, "markChannelRead", void 0),
            U(this, "undoMarkChannelRead", void 0),
            U(this, "markGuildRead", void 0),
            U(this, "deleteChannel", void 0),
            U(this, "markAllRead", void 0),
            U(this, "toggle", void 0),
            U(this, "handleUserGuildSettingsStoreChange", void 0),
            U(this, "handleJoinedThreadsStoreChange", void 0),
            U(this, "handleActiveThreadsStoreChange", void 0),
            (this.state = e),
            (this.scrollerRef = t),
            (this.undoStack = []),
            (this.maybeLoadMore = () => {
                var e;
                let t = null == (e = this.scrollerRef.current) ? void 0 : e.getScrollerState();
                null == t || (t.scrollHeight - t.scrollTop - t.offsetHeight < 2e3 && this.loadMore());
            }),
            (this.reloadMessages = () => {
                this.setState({
                    channels: this.state.channels.map((e) =>
                        "messages" === e.type && e.hasLoadedAnything ? z(e, !1, !0) : e,
                    ),
                });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                d.h.wait(() =>
                    p.ack(
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
                let r = this.state.channels.find((e) => e.channelId === t);
                (null != r && this.undoStack.push(r), 1 === this.state.channels.length)
                    ? this.deleteChannel(t)
                    : (this.setState({
                          channels: this.updateChannel(t, (e) =>
                              F(V({}, e), {
                                  deleted: !0,
                              }),
                          ),
                      }),
                      h.A.useReducedMotion && this.deleteChannel(t),
                      this.maybeLoadMore());
            }),
            (this.undoMarkChannelRead = () => {
                if (0 === this.undoStack.length) return;
                let e = this.undoStack.pop();
                if (null == e) return;
                p.ack(
                    e.channelId,
                    {
                        section: G.JJy.INBOX,
                        object: G.ZSU.UNDO_MARK_AS_READ,
                        objectType: G.AnalyticsObjectTypes.ACK_MANUAL,
                    },
                    !0,
                    void 0,
                    e.oldestReadMessageId,
                );
                let t = this.state.channels.findIndex((t) => t.order > e.order),
                    n = [...this.state.channels];
                t < 0 ? n.push(e) : n.splice(t, 0, e),
                    this.setState({
                        scrollToChannelIndex: t,
                        channels: n,
                    });
            }),
            (this.markGuildRead = (e) => {
                d.h.wait(() => (0, m.A)([e], G.JJy.INBOX)),
                    this.setState({
                        channels: this.state.channels.filter((t) => t.guildId !== e),
                    }),
                    this.maybeLoadMore();
            }),
            (this.deleteChannel = (e) => {
                this.setState({
                    scrollToChannelIndex: u().findIndex(this.state.channels, (t) => t.channelId === e),
                    channels: this.state.channels.filter((t) => t.channelId !== e),
                }),
                    this.maybeLoadMore();
            }),
            (this.markAllRead = () => {
                p.Uq(
                    this.state.channels.map((e) => ({
                        channelId: e.channelId,
                        messageId: e.newestUnreadMessageId,
                    })),
                ),
                    this.setState({
                        channels: [],
                    });
            }),
            (this.toggle = (e) => {
                let { channelId: t, guildId: n } = e,
                    { channels: r, collapsedChannels: l, loadState: i } = this.state,
                    a = u().findIndex(r, (e) => e.channelId === t),
                    s = r[a],
                    o = !s.collapsed;
                (l[t] = o),
                    (0, x.ji)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = o;
                        },
                        x.Sb.FREQUENT_USER_ACTION,
                    ),
                    this.setState({
                        scrollToChannelIndex: a,
                        collapsedChannels: l,
                        loadState: "done" !== i || o || s.isFullyLoaded ? i : "loaded",
                        channels: this.updateChannel(t, (e) =>
                            F(V({}, e), {
                                collapsed: o,
                            }),
                        ),
                    }),
                    s.collapsed ? s.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter(
                    (e) => !R.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId),
                );
                e.length !== this.state.channels.length &&
                    this.setState({
                        channels: e,
                    });
            }),
            (this.handleJoinedThreadsStoreChange = () => {
                let e = this.state.channels.filter((e) => !j.A.isMuted(e.channelId));
                e.length !== this.state.channels.length &&
                    this.setState({
                        channels: e,
                    });
            }),
            (this.handleActiveThreadsStoreChange = () => {
                let e = this.state.channels.map((e) => {
                    if ("forum" !== e.type) return e;
                    {
                        if (!e.hasLoadedAnything) return e;
                        let t = O.A.hasLoaded(e.guildId);
                        return F(V({}, e), {
                            isFullyLoaded: t,
                            hasLoadedAnything: !0,
                        });
                    }
                });
                this.setState({
                    channels: e,
                });
            });
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
}

function z(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = N.A.getMessages(e.channelId),
        i = l
            .toArray()
            .filter(
                (t) =>
                    L.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= L.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (i.length === e.messages.length && i.every((t, n) => e.messages[n] === t) && r) return e;
    let a =
            null != l.getAfter(e.oldestReadMessageId) ||
            (null == (n = i[0]) ? void 0 : n.id) === e.oldestUnreadMessageId,
        s = i[i.length - 1],
        o = L.default.compare(null == s ? void 0 : s.id, e.newestUnreadMessageId) >= 0 || i.length >= K;
    return F(V({}, e), {
        messages: i,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && o) || (t && !l.hasMoreAfter),
    });
}

function Y() {
    var e;
    let t,
        n = (function () {
            var e, t;
            let n = {},
                r = null != (e = null == (t = E.A.settings.guilds) ? void 0 : t.guilds) ? e : {};
            for (let e in r)
                for (let t in r[e].channels) {
                    let l = C.A.getChannel(t);
                    (t in n && (null == l ? void 0 : l.guild_id) !== e) || (n[t] = r[e].channels[t].collapsedInInbox);
                }
            return n;
        })(),
        r =
            ((e = n),
            (t = []),
            C.A.getSortedPrivateChannels().forEach((n) => q(e, t, null, n.id)),
            w.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let r = S.Ay.getSelectableChannelIds(n),
                    l = y.A.getActiveJoinedUnreadThreadsForGuild(n);
                r.forEach((r) => {
                    var i;
                    q(e, t, n, r);
                    let a = null != (i = l[r]) ? i : {};
                    for (let r in a) q(e, t, n, r);
                });
            }),
            u().sortBy(t, (e) => e.sortOrder)),
        l = u()
            .uniq(r.map((e) => e.guildId))
            .filter(M.Vq);
    return (
        d.h.dispatch({
            type: "INBOX_OPEN",
            guildIds: l,
        }),
        {
            collapsedChannels: n,
            loadState: "loaded",
            channels: r,
            scrollToChannelIndex: null,
        }
    );
}

function q(e, t, n, r) {
    if (null == r) return;
    let l = C.A.getChannel(r);
    if (null == l || (!_.Le.has(l.type) && R.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === P.Ay.getMentionCount(r)) return;
    } else if (!(0, A.Y)(l) && 0 === P.Ay.getMentionCount(r)) return;
    if ((!l.isPrivate() && !T.A.can(G.xBc.READ_MESSAGE_HISTORY, l)) || (0, b.qR)(l)) return;
    let i = P.Ay.ackMessageId(r);
    if (null == i) {
        let e = I.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        i = L.default.fromTimestamp(e.joinedAt.getTime());
    }
    let a = P.Ay.getOldestUnreadMessageId(r),
        s = P.Ay.lastMessageId(r),
        o = P.Ay.getMentionCount(r),
        c = o > 0 || l.isPrivate();
    if (null == s || L.default.compare(i, s) >= 0) return;
    let u = {
        guildId: n,
        channelId: r,
        oldestReadMessageId: i,
        oldestUnreadMessageId: a,
        newestUnreadMessageId: s,
        collapsed: !0 === e[r],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: o,
        sortOrder: (function (e, t, n) {
            let r = C.A.getChannel(t);
            if (g.A.isFavorite(t)) return 0;
            if (r.isPrivate()) return 1;
            if (P.Ay.getMentionCount(t) > 0) return P.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = L.default.extractTimestamp(n);
                if (Date.now() - e > J) return 8;
                if (Date.now() - e > X) return 6;
            }
            if (r.isThread()) {
                let e = (0, v.l)(r);
                return e === k.CP.ALL_MESSAGES ? 4 : e === k.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = R.Ay.getChannelMessageNotifications(e, t),
                    r = n === G.orn.NULL ? R.Ay.getMessageNotifications(e) : n;
                return r === G.orn.ALL_MESSAGES ? 4 : r === G.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, r, s),
        order: 0,
    };
    (0, b.qR)(l)
        ? t.push(
              F(V({}, u), {
                  type: "nsfw",
              }),
          )
        : l.isForumLikeChannel()
          ? t.push(
                F(V({}, u), {
                    type: "forum",
                }),
            )
          : t.push(
                F(V({}, u), {
                    type: "messages",
                    messages: [],
                }),
            );
}
let X = 2 * D.A.Millis.DAY,
    J = 10 * D.A.Millis.DAY;

function Q(e) {
    let [t, n] = i.useState(() => new W(Y(), e)),
        [r, l] = i.useState(!1),
        a = i.useRef(Date.now()),
        [s, o] = i.useState(() => Y());
    i.useEffect(() => {
        let e = (e) => o(e);
        return (
            t.on("change", e),
            o(t.state),
            () => {
                t.off("change", e);
            }
        );
    }, [t]),
        i.useEffect(() => {
            if (null == s || s.channels.length > 0 || r) return;
            let t = Date.now(),
                i = Y();
            0 === i.channels.length || t - a.current < 10 * D.A.Millis.SECOND
                ? l(!0)
                : ((a.current = Date.now()), n(new W(i, e)));
        }, [s, r, e]);
    let c = i.useRef(t);
    return (
        i.useLayoutEffect(() => {
            c.current = t;
        }),
        i.useLayoutEffect(() => {
            null == s || s.channels, null == s || s.loadState, c.current.maybeLoadMore();
        }, [null == s ? void 0 : s.channels, null == s ? void 0 : s.loadState]),
        i.useEffect(
            () => (N.A.addChangeListener(t.reloadMessages), () => N.A.removeChangeListener(t.reloadMessages)),
            [t.reloadMessages],
        ),
        i.useEffect(
            () => (
                R.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                () => R.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
            ),
            [t],
        ),
        i.useEffect(
            () => (
                j.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                () => j.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
            ),
            [t],
        ),
        i.useEffect(
            () => (
                O.A.addChangeListener(t.handleActiveThreadsStoreChange),
                () => O.A.removeChangeListener(t.handleActiveThreadsStoreChange)
            ),
            [t],
        ),
        [s, t]
    );
}
