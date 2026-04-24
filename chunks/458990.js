n.d(t, { A: () => eI, Y: () => e_ });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    u = n(837381);
if (21552 == n.j) var c = n(887129);
var d = n(607399),
    p = n(17928),
    h = n(140735),
    f = n(312138),
    m = n(707554),
    E = n(475825);
if (21552 == n.j) var _ = n(506309);
var A = n(442433),
    g = n(361610),
    S = n(414798),
    I = n(110574),
    y = n(775602),
    v = n(793574),
    C = n(58149),
    T = n(688810),
    w = n(941726),
    R = n(449582),
    N = n(276055),
    x = n(83974),
    b = n(420706),
    M = n(228366),
    D = n(963307),
    L = n(734057),
    O = n(71393),
    j = n(531685),
    U = n(954571),
    G = n(99066),
    F = n(435738),
    H = n(376261),
    P = n(947593),
    V = n(518741),
    k = n(424994),
    B = n(495744),
    Y = n(652215),
    W = n(985018);
let $ = 21552 == n.j ? 3e3 : null;
var q = n(485947),
    X = n(915089),
    z = n(509536),
    K = n(201275),
    Q = n(657048),
    J = n(728321),
    Z = n(342296),
    ee = n(773669),
    et = n(317525),
    en = n(994500),
    ei = n(309010),
    el = n(741961),
    er = n(287809),
    es = n(977997),
    ea = n(625494),
    eo = n(403362),
    eu = n(427262),
    ec = n(19575),
    ed = n(47167),
    ep = n(540808);
let eh = ec.Ay.getEnableHardwareAcceleration(),
    ef = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    em = l.memo(function (e) {
        let {
                colorString: t,
                colorStrings: r,
                colorRoleName: s,
                colorRoleId: a,
                isOwner: o,
                nick: u,
                user: c,
                currentUser: p,
                activities: h,
                applicationStream: f,
                status: m,
                channel: E,
                guildId: _,
                isTyping: g,
                isMobileOnline: y,
                isVROnline: v,
                premiumSince: C,
                nameplate: T,
                ...w
            } = e,
            R = l.useRef(null),
            [N, x] = l.useState(!1),
            b = null != C ? new Date(C) : null,
            M = l.useCallback(
                (e) => {
                    (0, A.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("62731"),
                                n.e("97262"),
                                n.e("93103"),
                                n.e("88342"),
                                n.e("35313"),
                                n.e("24170"),
                                n.e("84442"),
                                n.e("24431"),
                                n.e("78178"),
                                n.e("92456"),
                                n.e("78980"),
                            ]).then(n.bind(n, 107632)),
                            t = es.A.isInChannel(ei.A.getVoiceChannelId(), c.id);
                        return (n) => (0, i.jsx)(e, { ...n, user: c, guildId: _, channel: E, showMediaItems: t });
                    });
                },
                [c, _, E],
            ),
            D = l.useCallback(() => {
                let e = `@${eu.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                ea._.dispatch(Y.jej.TEXTAREA_FOCUS, { channelId: E.id }),
                    ea._.dispatchToLastSubscribed(Y.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    S.A.startTyping(E.id);
            }, [c, E.id]),
            L = l.useCallback(
                (e) => {
                    null != _ &&
                        (e.stopPropagation(),
                        (0, z.K4)({
                            guildId: _,
                            location: { section: Y.JJy.MEMBER_LIST, object: Y.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [_],
            );
        return (0, i.jsx)(Z.A, {
            targetElementRef: R,
            user: c,
            guildId: _,
            channelId: E.id,
            roleId: a,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: D,
            shouldShow: N,
            onRequestClose: () => {
                x(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: l, ...a } = e;
                return (0, i.jsx)(I.A, {
                    ref: R,
                    className: ep.Dc,
                    onContextMenu: M,
                    shouldAnimateStatus: eh,
                    user: c,
                    currentUser: p,
                    nick: u,
                    status: m,
                    activities: h,
                    applicationStream: f,
                    isOwner: o,
                    premiumSince: b,
                    colorString: t,
                    colorStrings: r,
                    colorRoleName: s,
                    isTyping: g,
                    channel: E,
                    guildId: _,
                    isMobile: y,
                    isVR: v,
                    onClickPremiumGuildIcon: L,
                    selected: N,
                    itemProps: w,
                    nameplate: T,
                    onClick: (e) => {
                        e.shiftKey ? D?.() : x((e) => !e);
                    },
                    onMouseDown: (e) => {
                        N ? e.stopPropagation() : l?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    eE = l.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: l, user: r, index: s } = e,
            a = (0, u.rm)(`${s}`),
            o = (0, p.bG)([el.A], () => el.A.isTyping(l.id, r.id)),
            c = (0, p.bG)([er.default], () => er.default.getCurrentUser()),
            d = (0, p.bG)([et.A], () => (null != t ? et.A.getRole(l.guild_id, t)?.name : void 0), [l, t]),
            h = (0, R.r)({ user: r, guildId: l.guild_id });
        return (0, i.jsx)(em, { ...n, ...a, isTyping: o, currentUser: c, colorRoleName: d, nameplate: h });
    }),
    e_ = l.memo(function (e) {
        let { id: t, title: r, count: s, guildId: a, className: o } = e,
            u = (0, K.$7)({ roleId: t, guildId: a, size: 16 }),
            c = (0, p.bG)([ee.default], () => (null == s ? null : new Intl.NumberFormat(ee.default.locale).format(s)), [
                s,
            ]),
            d = l.useCallback(
                (e) => {
                    u?.src != null &&
                        (0, A.L3)(e, async () => {
                            let { default: e } = await n.e("33743").then(n.bind(n, 455538));
                            return (t) => (0, i.jsx)(e, { ...t, imageUrl: u.src });
                        });
                },
                [u?.src],
            );
        return t === Y.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: o, children: (0, i.jsx)("div", { className: ep.k1 }) })
            : (0, i.jsxs)(q.A, {
                  className: o,
                  children: [
                      (0, i.jsx)(h.A, { children: null == s ? r : W.intl.format(W.t.Uaqbke, { title: r, count: s }) }),
                      (0, i.jsxs)("div", {
                          className: ep.CN,
                          "aria-hidden": !0,
                          children: [
                              null != u
                                  ? (0, i.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, i.jsx)(Q.A, { className: ep.UT, ...u }),
                                    })
                                  : null,
                              (0, i.jsx)("span", { className: ep.iy, children: r }),
                              null == c ? null : (0, i.jsxs)("span", { children: ["\xa0— ", c] }),
                          ],
                      }),
                  ],
              });
    });
function eA(e) {
    let { index: t } = e,
        n = (0, u.rm)(`${t}`);
    return (0, i.jsx)(I.A, { itemProps: n });
}
class eg extends l.Component {
    _list = null;
    _firstApplicationIdOccurrences = null;
    _lastRowsVersion;
    lastReportedAnalyticsChannel;
    shouldComponentUpdate(e) {
        return (
            e.channel.id !== this.props.channel.id ||
            e.version !== this.props.version ||
            e.groups.length !== this.props.groups.length
        );
    }
    componentDidMount() {
        this.updateSubscription(), this.trackMemberListViewed();
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen();
    }
    setList = (e) => {
        (this._list = e), (this.props.listRef.current = e);
    };
    renderSection = (e) => {
        let { section: t } = e,
            { groups: n, channel: r } = this.props,
            s = n[t];
        if ((0, N.l)(s)) return (0, l.createElement)(N.A, { ...s, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = s;
            return (0, i.jsx)(
                J.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: ef,
                    children: (0, l.createElement)(e_, {
                        ...s,
                        key: `section-${e}`,
                        guildId: r.guild_id,
                        className: ep.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, l.createElement)(e_, { ...s, key: `section-${t}`, guildId: r.guild_id, className: ep.lL });
    };
    getRowProps = (e) => {
        let { groups: t, rows: n } = this.props,
            i = t[e.section];
        if (null == i) return null;
        let { index: l } = i;
        return null == l || "row" !== e.type ? null : n[l + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: t } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
            return this._firstApplicationIdOccurrences;
        let n = new Set(),
            i = new Set();
        for (let t of e)
            if (null != t && t.type === D.S9.CONTENT_INVENTORY) {
                let { entry: e } = t;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let t = e.extra.application_id;
                    n.has(t) || (n.add(t), i.add(e.id));
                }
            }
        return (this._firstApplicationIdOccurrences = i), (this._lastRowsVersion = t), i;
    };
    renderRow = (e) => {
        let { section: t, row: n, rowIndex: l } = e,
            { channel: r } = this.props,
            s = this.getRowProps(e);
        if (null != s) {
            if (s.type === D.S9.MEMBER && "user" in s) {
                let {
                    colorString: e,
                    colorStrings: t,
                    colorRoleId: n,
                    user: a,
                    status: o,
                    isOwner: u,
                    isMobileOnline: c,
                    isVROnline: d,
                    nick: p,
                    activities: h,
                    applicationStream: f,
                    premiumSince: m,
                } = s;
                return (0, i.jsx)(
                    eE,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: a,
                        status: o,
                        isOwner: u,
                        nick: p,
                        activities: h,
                        applicationStream: f,
                        channel: r,
                        guildId: r.guild_id,
                        premiumSince: m,
                        isMobileOnline: c,
                        isVROnline: d,
                        index: l,
                    },
                    `member-${s.user.id}`,
                );
            }
            if (s.type === D.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${s.entry.id}`;
                null != s.entry.original_id && (e += `-${s.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(s.entry.id);
                return (0, i.jsx)(
                    b.Ay,
                    { ...s, channel: this.props.channel, index: l, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (s.type === D.S9.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(x.A, {}, "content-inventory-hidden-entry");
        }
        return (0, i.jsx)(eA, { index: l }, `placeholder-${t}:${n}`);
    };
    handleScroll = () => {
        this.updateSubscription(), this.updateMaxContentFeedRowSeen();
    };
    updateMaxContentFeedRowSeen = o().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            i = n + t - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(i);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if ((0, N.l)(e)) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                i = e.index;
            return function (e, l) {
                if (0 === e) {
                    let e = n[i + 1 + l];
                    return (0, b.h9)(e);
                }
                return t;
            };
        }
        return t;
    };
    getContentFeedHeight = () => {
        let e = this.getContentFeedGroup();
        return null != e ? e.feedHeight + this.props.sectionHeight : 0;
    };
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: i } = e,
            l = this.getContentFeedHeight(),
            r = Math.max(0, t - Math.max(0, l - i)),
            s = Math.floor(r / n);
        return { height: r, rowHeight: n, rowsVisible: s, y: Math.max(0, i - l) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            l = Math.floor(t / i);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: i, rowsVisible: l, y: n });
    }
    updateSubscription = o().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: t, y: n, height: i } = this.getDimensions();
        (0, g.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: i, rowHeight: t });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: t } = this.getDimensions();
        if (void 0 === t || 0 === t || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => 0 !== e.section));
        let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(eo.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== D.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === Y.$pd.PLAYING) && e.num_users_visible_with_game_activity++),
                    null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++,
                    t.user.collectibles?.nameplate != null && e.num_users_visible_with_nameplate++),
                e
            ),
            {
                num_users_visible: 0,
                num_users_visible_with_mobile_indicator: 0,
                num_users_visible_with_game_activity: 0,
                num_users_visible_with_activity: 0,
                num_users_visible_with_avatar_decoration: 0,
                num_users_visible_with_nameplate: 0,
            },
        );
        (this.lastReportedAnalyticsChannel = this.props.channel.id),
            C.Ay.trackWithMetadata(Y.HAw.MEMBER_LIST_VIEWED, { ...i });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: l } = this.props;
        return (0, i.jsx)(f.sk, {
            children: (r) =>
                (0, i.jsx)(X.V0, {
                    children: (a) =>
                        (0, i.jsx)("aside", {
                            className: s()(ep.yg, ep.ML),
                            "aria-labelledby": a,
                            children: (0, i.jsx)(m.F, {
                                component: (0, i.jsx)(h.A, {
                                    children: (0, i.jsx)(m.H, {
                                        id: a,
                                        children: W.intl.format(W.t.JBQxV6, {
                                            channel: (0, ed.m1)(n, er.default, en.A),
                                        }),
                                    }),
                                }),
                                children: (0, i.jsx)(u.PR, {
                                    children: (n) => {
                                        let { ref: a, role: o, ...u } = n;
                                        return (0, i.jsx)(
                                            E.OZ,
                                            {
                                                innerRole: o,
                                                innerAriaLabel: W.intl.string(W.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (a.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: s()(ep.ol, { [ep.Ij]: d.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: l,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...u,
                                                ...r,
                                            },
                                            t,
                                        );
                                    },
                                }),
                            }),
                        }),
                }),
        });
    }
}
function eS(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: r } = (0, T.Ay)(v.A.MEMBER_LIST),
        a = (0, p.bG)([y.A], () => y.A.keyboardModeEnabled),
        o = (0, p.cf)([D.Ay], () => D.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: h,
            version: f,
            updateMaxRowSeen: m,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: t, rows: n, version: i },
                    channelId: r,
                    guildId: s,
                } = e,
                [a, o] = l.useState(!1),
                { requestId: u, entries: c, impressionCappedEntryIds: d } = (0, V.A)(r),
                h = (0, p.bG)([F.A], () => F.A.hidden),
                f = (0, p.bG)([j.A], () => j.A.isFocused()),
                m = (0, p.bG)([L.A], () => L.A.getChannel(r)),
                E = (0, p.bG)([O.A], () => O.A.getGuild(s), [s]),
                _ = ((0, H.T)(E) ?? !1) && m?.isForumChannel() === !1,
                [A, g, S, I] = l.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == u || !_) return [t, n, i];
                    let l = a ? c.length : 3,
                        d = c.slice(0, l);
                    e = h
                        ? [{ type: D.S9.HIDDEN_CONTENT_INVENTORY }]
                        : d.map((e) => ({ type: D.S9.CONTENT_INVENTORY, entry: e, requestId: u }));
                    let p = {
                        id: B.C,
                        type: D.S9.CONTENT_INVENTORY_GROUP,
                        key: B.C,
                        count: e.length,
                        index: n.length,
                        title: W.intl.string(W.t["6gwSFY"]),
                        onToggleExpand: () => {
                            o((e) => {
                                let t = !e;
                                return (
                                    U.default.track(Y.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: r,
                                        guild_id: s,
                                        expanded: t,
                                    }),
                                    t
                                );
                            });
                        },
                        expanded: a,
                        expandedCount: c.length,
                        feedHeight: e.map(b.h9).reduce((e, t) => e + t, 0),
                    };
                    return [[p, ...t], [...n, p, ...e], Math.random(), e];
                }, [r, c, a, t, s, u, n, i, h, _]),
                y = l.useRef(0),
                v = l.useRef(c),
                C = l.useRef(void 0),
                T = l.useRef({ impressionCappedEntryIds: d }),
                w = l.useCallback(
                    (e) => {
                        let t = Math.floor(e / b.bG),
                            n = Math.min(I?.length ?? 0, t);
                        y.current = Math.max(y.current, n);
                    },
                    [I],
                );
            return (
                l.useEffect(() => {
                    v.current = c;
                }, [c]),
                l.useEffect(() => {
                    T.current = { impressionCappedEntryIds: d };
                }, [d]),
                l.useEffect(
                    () => (
                        (y.current = 0),
                        (C.current = Date.now()),
                        () => {
                            if (null == u || null == C.current || Date.now() - C.current < $) return;
                            let e = v.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, y.current);
                            !h &&
                                f &&
                                _ &&
                                ((0, P.D)(Y.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: u,
                                    first_shown_at: C.current,
                                    item_ids: t,
                                    surface_type: k.UG.GUILD_MEMBER_LIST,
                                    channel_id: r,
                                    guild_id: s,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [...T.current.impressionCappedEntryIds],
                                }),
                                (0, G.sE)("useInjectContentInventoryFeed") &&
                                    M.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [u, r, s, h, f, _],
                ),
                { groups: A, rows: g, version: S, updateMaxRowSeen: w }
            );
        })({ memberStoreProps: o, channelId: t.id, guildId: t.guild_id }),
        E = l.useRef(null),
        A = (0, _.W)("lg") + (0, _.W)("xxs"),
        g = l.useCallback(
            (e, t) => {
                let n = E.current;
                if (null == n) return;
                let i = parseInt(t, 10),
                    [l, r] = n.getSectionRowFromIndex(i);
                n.scrollToIndex({
                    section: l,
                    row: r,
                    padding: 42 * (0 === l && 0 === r),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        S = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        I = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        C = (0, c.Ay)({ id: `members-${t.id}`, setFocus: g, isEnabled: a, scrollToStart: S, scrollToEnd: I });
    return (0, i.jsx)(T.f5, {
        value: r,
        children: (0, i.jsx)("div", {
            className: s()(ep.kL, n),
            children: (0, i.jsx)(u.hD, {
                navigator: C,
                children: (0, i.jsx)(eg, {
                    ...e,
                    ...o,
                    version: f,
                    groups: h,
                    rows: d,
                    listRef: E,
                    updateMaxContentFeedRowSeen: m,
                    sectionHeight: 18 + A,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function eI(e) {
    let { channel: t, className: n } = e,
        r = l.useDeferredValue(t);
    return l.useMemo(() => (0, i.jsx)(w.r$, { children: (0, i.jsx)(eS, { channel: r, className: n }) }), [r, n]);
}
