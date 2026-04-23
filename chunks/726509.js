n.d(t, { A: () => ey, Y: () => eb });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(735438),
    l = n.n(_),
    o = n(837381),
    E = n(887129),
    d = n(607399),
    c = n(17928),
    u = n(140735),
    I = n(312138),
    A = n(707554),
    T = n(475825),
    S = n(506309),
    N = n(442433),
    O = n(361610),
    R = n(414798),
    f = n(110574),
    C = n(775602),
    p = n(793574),
    m = n(58149),
    L = n(688810),
    D = n(941726),
    h = n(449582),
    g = n(276055),
    b = n(83974),
    U = n(420706),
    P = n(228366),
    M = n(963307),
    y = n(734057),
    G = n(71393),
    v = n(531685),
    B = n(954571),
    w = n(99066),
    F = n(435738),
    V = n(376261),
    H = n(947593),
    k = n(681154),
    x = n(99753);
n(321073);
var W = n(136722),
    Y = n(52133),
    j = n(860071),
    K = n(696451),
    $ = n(488926),
    Q = n(818348);
let q = [],
    X = new Set();
var z = n(583846);
let J = new Set();
var Z = n(808323),
    ee = n(424994);
let et = new Set([
    k.ContentInventoryEntryType.PLAYED_GAME,
    k.ContentInventoryEntryType.WATCHED_MEDIA,
    k.ContentInventoryEntryType.TOP_GAME,
    k.ContentInventoryEntryType.TOP_ARTIST,
    k.ContentInventoryEntryType.LISTENED_SESSION,
    k.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var en = n(495744),
    ei = n(652215),
    er = n(985018),
    ea = n(485947),
    es = n(915089),
    e_ = n(509536),
    el = n(201275),
    eo = n(657048),
    eE = n(728321),
    ed = n(342296),
    ec = n(773669),
    eu = n(317525),
    eI = n(994500),
    eA = n(309010),
    eT = n(741961),
    eS = n(287809),
    eN = n(977997),
    eO = n(625494),
    eR = n(403362),
    ef = n(427262),
    eC = n(19575),
    ep = n(47167),
    em = n(540808);
let eL = eC.Ay.getEnableHardwareAcceleration(),
    eD = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    eh = r.memo(function (e) {
        let {
                colorString: t,
                colorStrings: a,
                colorRoleName: s,
                colorRoleId: _,
                isOwner: l,
                nick: o,
                user: E,
                currentUser: c,
                activities: u,
                applicationStream: I,
                status: A,
                channel: T,
                guildId: S,
                isTyping: O,
                isMobileOnline: C,
                isVROnline: p,
                premiumSince: m,
                nameplate: L,
                ...D
            } = e,
            h = r.useRef(null),
            [g, b] = r.useState(!1),
            U = null != m ? new Date(m) : null,
            P = r.useCallback(
                (e) => {
                    (0, N.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("62731"),
                                n.e("97262"),
                                n.e("93103"),
                                n.e("24170"),
                                n.e("97278"),
                                n.e("84442"),
                                n.e("35313"),
                                n.e("52338"),
                                n.e("84841"),
                                n.e("6058"),
                            ]).then(n.bind(n, 107632)),
                            t = eN.A.isInChannel(eA.A.getVoiceChannelId(), E.id);
                        return (n) => (0, i.jsx)(e, { ...n, user: E, guildId: S, channel: T, showMediaItems: t });
                    });
                },
                [E, S, T],
            ),
            M = r.useCallback(() => {
                let e = `@${ef.Ay.getUserTag(E, { decoration: "never" })}`,
                    t = `<@${E.id}>`;
                eO._.dispatch(ei.jej.TEXTAREA_FOCUS, { channelId: T.id }),
                    eO._.dispatchToLastSubscribed(ei.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    R.A.startTyping(T.id);
            }, [E, T.id]),
            y = r.useCallback(
                (e) => {
                    null != S &&
                        (e.stopPropagation(),
                        (0, e_.K4)({
                            guildId: S,
                            location: { section: ei.JJy.MEMBER_LIST, object: ei.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [S],
            );
        return (0, i.jsx)(ed.A, {
            targetElementRef: h,
            user: E,
            guildId: S,
            channelId: T.id,
            roleId: _,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: M,
            shouldShow: g,
            onRequestClose: () => {
                b(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: r, ..._ } = e;
                return (0, i.jsx)(f.A, {
                    ref: h,
                    className: em.Dc,
                    onContextMenu: P,
                    shouldAnimateStatus: eL,
                    user: E,
                    currentUser: c,
                    nick: o,
                    status: A,
                    activities: u,
                    applicationStream: I,
                    isOwner: l,
                    premiumSince: U,
                    colorString: t,
                    colorStrings: a,
                    colorRoleName: s,
                    isTyping: O,
                    channel: T,
                    guildId: S,
                    isMobile: C,
                    isVR: p,
                    onClickPremiumGuildIcon: y,
                    selected: g,
                    itemProps: D,
                    nameplate: L,
                    onClick: (e) => {
                        e.shiftKey ? M?.() : b((e) => !e);
                    },
                    onMouseDown: (e) => {
                        g ? e.stopPropagation() : r?.(e);
                    },
                    ..._,
                });
            },
        });
    }),
    eg = r.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: r, user: a, index: s } = e,
            _ = (0, o.rm)(`${s}`),
            l = (0, c.bG)([eT.A], () => eT.A.isTyping(r.id, a.id)),
            E = (0, c.bG)([eS.default], () => eS.default.getCurrentUser()),
            d = (0, c.bG)([eu.A], () => (null != t ? eu.A.getRole(r.guild_id, t)?.name : void 0), [r, t]),
            u = (0, h.r)({ user: a, guildId: r.guild_id });
        return (0, i.jsx)(eh, { ...n, ..._, isTyping: l, currentUser: E, colorRoleName: d, nameplate: u });
    }),
    eb = r.memo(function (e) {
        let { id: t, title: a, count: s, guildId: _, className: l } = e,
            o = (0, el.$7)({ roleId: t, guildId: _, size: 16 }),
            E = (0, c.bG)([ec.default], () => (null == s ? null : new Intl.NumberFormat(ec.default.locale).format(s)), [
                s,
            ]),
            d = r.useCallback(
                (e) => {
                    o?.src != null &&
                        (0, N.L3)(e, async () => {
                            let { default: e } = await n.e("33743").then(n.bind(n, 455538));
                            return (t) => (0, i.jsx)(e, { ...t, imageUrl: o.src });
                        });
                },
                [o?.src],
            );
        return t === ei.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: l, children: (0, i.jsx)("div", { className: em.k1 }) })
            : (0, i.jsxs)(ea.A, {
                  className: l,
                  children: [
                      (0, i.jsx)(u.A, {
                          children: null == s ? a : er.intl.format(er.t.Uaqbke, { title: a, count: s }),
                      }),
                      (0, i.jsxs)("div", {
                          className: em.CN,
                          "aria-hidden": !0,
                          children: [
                              null != o
                                  ? (0, i.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, i.jsx)(eo.A, { className: em.UT, ...o }),
                                    })
                                  : null,
                              (0, i.jsx)("span", { className: em.iy, children: a }),
                              null == E ? null : (0, i.jsxs)("span", { children: ["\xa0— ", E] }),
                          ],
                      }),
                  ],
              });
    });
function eU(e) {
    let { index: t } = e,
        n = (0, o.rm)(`${t}`);
    return (0, i.jsx)(f.A, { itemProps: n });
}
class eP extends r.Component {
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
            { groups: n, channel: a } = this.props,
            s = n[t];
        if ((0, g.l)(s)) return (0, r.createElement)(g.A, { ...s, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = s;
            return (0, i.jsx)(
                eE.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: eD,
                    children: (0, r.createElement)(eb, {
                        ...s,
                        key: `section-${e}`,
                        guildId: a.guild_id,
                        className: em.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, r.createElement)(eb, { ...s, key: `section-${t}`, guildId: a.guild_id, className: em.lL });
    };
    getRowProps = (e) => {
        let { groups: t, rows: n } = this.props,
            i = t[e.section];
        if (null == i) return null;
        let { index: r } = i;
        return null == r || "row" !== e.type ? null : n[r + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: t } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
            return this._firstApplicationIdOccurrences;
        let n = new Set(),
            i = new Set();
        for (let t of e)
            if (null != t && t.type === M.S9.CONTENT_INVENTORY) {
                let { entry: e } = t;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let t = e.extra.application_id;
                    n.has(t) || (n.add(t), i.add(e.id));
                }
            }
        return (this._firstApplicationIdOccurrences = i), (this._lastRowsVersion = t), i;
    };
    renderRow = (e) => {
        let { section: t, row: n, rowIndex: r } = e,
            { channel: a } = this.props,
            s = this.getRowProps(e);
        if (null != s) {
            if (s.type === M.S9.MEMBER && "user" in s) {
                let {
                    colorString: e,
                    colorStrings: t,
                    colorRoleId: n,
                    user: _,
                    status: l,
                    isOwner: o,
                    isMobileOnline: E,
                    isVROnline: d,
                    nick: c,
                    activities: u,
                    applicationStream: I,
                    premiumSince: A,
                } = s;
                return (0, i.jsx)(
                    eg,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: _,
                        status: l,
                        isOwner: o,
                        nick: c,
                        activities: u,
                        applicationStream: I,
                        channel: a,
                        guildId: a.guild_id,
                        premiumSince: A,
                        isMobileOnline: E,
                        isVROnline: d,
                        index: r,
                    },
                    `member-${s.user.id}`,
                );
            }
            if (s.type === M.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${s.entry.id}`;
                null != s.entry.original_id && (e += `-${s.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(s.entry.id);
                return (0, i.jsx)(
                    U.Ay,
                    { ...s, channel: this.props.channel, index: r, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (s.type === M.S9.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(b.A, {}, "content-inventory-hidden-entry");
        }
        return (0, i.jsx)(eU, { index: r }, `placeholder-${t}:${n}`);
    };
    handleScroll = () => {
        this.updateSubscription(), this.updateMaxContentFeedRowSeen();
    };
    updateMaxContentFeedRowSeen = l().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            i = n + t - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(i);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if ((0, g.l)(e)) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                i = e.index;
            return function (e, r) {
                if (0 === e) {
                    let e = n[i + 1 + r];
                    return (0, U.h9)(e);
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
            r = this.getContentFeedHeight(),
            a = Math.max(0, t - Math.max(0, r - i)),
            s = Math.floor(a / n);
        return { height: a, rowHeight: n, rowsVisible: s, y: Math.max(0, i - r) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            r = Math.floor(t / i);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: i, rowsVisible: r, y: n });
    }
    updateSubscription = l().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: t, y: n, height: i } = this.getDimensions();
        (0, O.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: i, rowHeight: t });
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
            .filter(eR.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== M.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === ei.$pd.PLAYING) &&
                            e.num_users_visible_with_game_activity++),
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
            m.Ay.trackWithMetadata(ei.HAw.MEMBER_LIST_VIEWED, { ...i });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: r } = this.props;
        return (0, i.jsx)(I.sk, {
            children: (a) =>
                (0, i.jsx)(es.V0, {
                    children: (_) =>
                        (0, i.jsx)("aside", {
                            className: s()(em.yg, em.ML),
                            "aria-labelledby": _,
                            children: (0, i.jsx)(A.F, {
                                component: (0, i.jsx)(u.A, {
                                    children: (0, i.jsx)(A.H, {
                                        id: _,
                                        children: er.intl.format(er.t.JBQxV6, {
                                            channel: (0, ep.m1)(n, eS.default, eI.A),
                                        }),
                                    }),
                                }),
                                children: (0, i.jsx)(o.PR, {
                                    children: (n) => {
                                        let { ref: _, role: l, ...o } = n;
                                        return (0, i.jsx)(
                                            T.OZ,
                                            {
                                                innerRole: l,
                                                innerAriaLabel: er.intl.string(er.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (_.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: s()(em.ol, { [em.Ij]: d.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: r,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...o,
                                                ...a,
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
function eM(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: a } = (0, L.Ay)(p.A.MEMBER_LIST),
        _ = (0, c.bG)([C.A], () => C.A.keyboardModeEnabled),
        l = (0, c.cf)([M.Ay], () => M.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: u,
            version: I,
            updateMaxRowSeen: A,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: t, rows: n, version: i },
                    channelId: a,
                    guildId: s,
                } = e,
                [_, l] = r.useState(!1),
                {
                    requestId: o,
                    entries: E,
                    impressionCappedEntryIds: d,
                } = (function (e) {
                    var t;
                    let n,
                        i = (0, Z.A)({ id: ee.X1.GLOBAL_FEED });
                    i = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, c.bG)([y.A], () => y.A.getChannel(n)),
                            a = i?.guild_id,
                            s = r.useRef(new Set()),
                            _ = r.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return (0, Y.v)([...s.current], [...e]) || (s.current = e), s.current;
                            }, [t]);
                        r.useEffect(() => {
                            null != a &&
                                Array.from(_).forEach((e) => {
                                    j.A.requestMember(a, e);
                                });
                        }, [_, a]);
                        let l = (0, c.yK)([K.Ay], () => {
                                if (null == a) return q;
                                let e = [];
                                for (let t of _) K.Ay.isMember(a, t) && e.push(t);
                                return e;
                            }, [_, a]),
                            o = r.useMemo(() => {
                                if (null == i || 0 === l.length) return X;
                                let e = new Set();
                                for (let t of l) {
                                    let n = $.cc({ user: t, context: i });
                                    W.zy(n, Q.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [l, i]);
                        return r.useMemo(() => t?.filter((e) => o.has(e.author_id)), [t, o]);
                    })({ entries: i, channelId: e });
                    let { entries: a, filteredIds: s } =
                        ((t = i = r.useMemo(() => i?.filter((e) => et.has(e.content_type)), [i])),
                        (n = (0, c.bG)([F.A, x.A], () => {
                            let e = x.A.getDebugImpressionCappingDisabled();
                            return !(0, w.sE)("useFilterImpressionCappedContent") || e
                                ? J
                                : F.A.getImpressionCappedItemIds();
                        }, [t])),
                        r.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: J };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, z.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, n]));
                    return (
                        (i = a),
                        {
                            requestId: (0, c.bG)([x.A], () => x.A.getFeedRequestId(ee.X1.GLOBAL_FEED)),
                            entries: (i = (0, D.Ay)(i)),
                            impressionCappedEntryIds: s,
                        }
                    );
                })(a),
                u = (0, c.bG)([F.A], () => F.A.hidden),
                I = (0, c.bG)([v.A], () => v.A.isFocused()),
                A = (0, c.bG)([y.A], () => y.A.getChannel(a)),
                T = (0, c.bG)([G.A], () => G.A.getGuild(s), [s]),
                S = ((0, V.T)(T) ?? !1) && A?.isForumChannel() === !1,
                [N, O, R, f] = r.useMemo(() => {
                    let e;
                    if (null == E || 0 === E.length || null == o || !S) return [t, n, i];
                    let r = _ ? E.length : 3,
                        d = E.slice(0, r);
                    e = u
                        ? [{ type: M.S9.HIDDEN_CONTENT_INVENTORY }]
                        : d.map((e) => ({ type: M.S9.CONTENT_INVENTORY, entry: e, requestId: o }));
                    let c = {
                        id: en.C,
                        type: M.S9.CONTENT_INVENTORY_GROUP,
                        key: en.C,
                        count: e.length,
                        index: n.length,
                        title: er.intl.string(er.t["6gwSFY"]),
                        onToggleExpand: () => {
                            l((e) => {
                                let t = !e;
                                return (
                                    B.default.track(ei.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: a,
                                        guild_id: s,
                                        expanded: t,
                                    }),
                                    t
                                );
                            });
                        },
                        expanded: _,
                        expandedCount: E.length,
                        feedHeight: e.map(U.h9).reduce((e, t) => e + t, 0),
                    };
                    return [[c, ...t], [...n, c, ...e], Math.random(), e];
                }, [a, E, _, t, s, o, n, i, u, S]),
                C = r.useRef(0),
                p = r.useRef(E),
                m = r.useRef(void 0),
                L = r.useRef({ impressionCappedEntryIds: d }),
                h = r.useCallback(
                    (e) => {
                        let t = Math.floor(e / U.bG),
                            n = Math.min(f?.length ?? 0, t);
                        C.current = Math.max(C.current, n);
                    },
                    [f],
                );
            return (
                r.useEffect(() => {
                    p.current = E;
                }, [E]),
                r.useEffect(() => {
                    L.current = { impressionCappedEntryIds: d };
                }, [d]),
                r.useEffect(
                    () => (
                        (C.current = 0),
                        (m.current = Date.now()),
                        () => {
                            if (null == o || null == m.current || Date.now() - m.current < 3e3) return;
                            let e = p.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, C.current);
                            !u &&
                                I &&
                                S &&
                                ((0, H.D)(ei.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: o,
                                    first_shown_at: m.current,
                                    item_ids: t,
                                    surface_type: ee.UG.GUILD_MEMBER_LIST,
                                    channel_id: a,
                                    guild_id: s,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [...L.current.impressionCappedEntryIds],
                                }),
                                (0, w.sE)("useInjectContentInventoryFeed") &&
                                    P.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [o, a, s, u, I, S],
                ),
                { groups: N, rows: O, version: R, updateMaxRowSeen: h }
            );
        })({ memberStoreProps: l, channelId: t.id, guildId: t.guild_id }),
        T = r.useRef(null),
        N = (0, S.W)("lg") + (0, S.W)("xxs"),
        O = r.useCallback(
            (e, t) => {
                let n = T.current;
                if (null == n) return;
                let i = parseInt(t, 10),
                    [r, a] = n.getSectionRowFromIndex(i);
                n.scrollToIndex({
                    section: r,
                    row: a,
                    padding: 42 * (0 === r && 0 === a),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        R = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = T.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        f = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = T.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        m = (0, E.Ay)({ id: `members-${t.id}`, setFocus: O, isEnabled: _, scrollToStart: R, scrollToEnd: f });
    return (0, i.jsx)(L.f5, {
        value: a,
        children: (0, i.jsx)("div", {
            className: s()(em.kL, n),
            children: (0, i.jsx)(o.hD, {
                navigator: m,
                children: (0, i.jsx)(eP, {
                    ...e,
                    ...l,
                    version: I,
                    groups: u,
                    rows: d,
                    listRef: T,
                    updateMaxContentFeedRowSeen: A,
                    sectionHeight: 18 + N,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function ey(e) {
    let { channel: t, className: n } = e,
        a = r.useDeferredValue(t);
    return r.useMemo(() => (0, i.jsx)(D.r$, { children: (0, i.jsx)(eM, { channel: a, className: n }) }), [a, n]);
}
