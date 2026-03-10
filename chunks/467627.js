"use strict";
n.d(t, { A: () => eu });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(873263),
    d = n(837381),
    u = n(621466),
    h = n(311907),
    A = n(554146),
    m = n(52133),
    p = n(451988),
    g = n(827734),
    _ = n(397927),
    f = n(951001),
    x = n(964486),
    C = n(260762),
    E = n(793574),
    I = n(688810),
    N = n(313961),
    b = n(932001),
    S = n(93055),
    T = n(838432),
    v = n(832275),
    y = n(730253),
    j = n(633965),
    R = n(857071),
    O = n(851109),
    L = n(397938),
    M = n(366811),
    D = n(72314),
    G = n(543897),
    U = n(696451),
    P = n(71393),
    w = n(711014),
    k = n(723702),
    V = n(757780),
    B = n(263715),
    H = n(987344),
    F = n(750448),
    K = n(845211),
    W = n(941604),
    Y = n(246884),
    z = n(497140),
    q = n(34247),
    X = n(850729),
    J = n(521872),
    Q = n(827975),
    $ = n(369915),
    Z = n(232879),
    ee = n(181800),
    et = n(343170),
    en = n(652215),
    ei = n(985018),
    es = n(216788);
let el = (0, k.isWindows)() ? 4 : 12 * !(0, k.isMac)();
function er(e) {
    return e.startsWith(en.BVt.GUILD_DISCOVERY) || e.startsWith(en.BVt.GLOBAL_DISCOVERY);
}
class ea {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = s.createRef();
    nodeRefs = {};
    timeout = new p.Ep();
    observer;
    constructor(e, t, n, i, s) {
        (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = s),
            (0, j.u9)(this.getVisibleGuildIds);
    }
    setResizeObserver = () => {
        let e = this.scrollerRef.current?.getScrollerNode();
        null != e && ((this.observer = new ResizeObserver(this.handleScroll)), this.observer.observe(e));
    };
    clearResizeObserver = () => {
        this.observer?.disconnect(), (this.observer = void 0);
    };
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    scrollToGuild = (e, t) => {
        let n = this.scrollerRef.current;
        if (
            null == n ||
            (null == e && er(window.location.pathname)) ||
            e === en.sFm.SERVER_DISCOVERY_BADGE ||
            e === en.sFm.E3_SERVER_DISCOVERY_BADGE
        )
            return;
        if (null == e) return void n.scrollTo({ to: 0, animate: t });
        let i = this.nodeRefs[e];
        for (; null == i; ) {
            let t = this.guildsTree.getNode(e);
            if (t?.parentId == null) break;
            i = this.nodeRefs[t.parentId];
        }
        null != i && (0, u.vq)(i)
            ? n.scrollIntoViewNode({ node: i, animate: t, padding: 24 })
            : n.scrollTo({ to: 0, animate: t });
    };
    handleJumpToGuild = (e) => {
        this.scrollToGuild(e, !0);
    };
    scrollTo = (e) => {
        this.scrollerRef.current?.scrollTo(e);
    };
    scrollToBottom = () => {
        this.scrollerRef.current?.scrollToBottom();
    };
    isItemVisible = (e, t, n) => {
        let { iconTotalSize: i, badgeVisibleBuffer: s, heightBeforeGuilds: l, bottomInset: r } = this.sizes,
            a = this.scrollerRef.current;
        if (null == a) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let c = i * o + l,
            d = a.getScrollerState();
        return (!t && !!(c >= d.scrollTop)) || (!!t && !!(c + i + s <= d.scrollTop + d.offsetHeight - r));
    };
    getVisibleGuildIds = () => {
        let e = this.scrollerRef.current;
        if (null == e) return [];
        let t = e.getScrollerState().offsetHeight,
            n = e.getScrollerNode()?.getBoundingClientRect().top;
        return void 0 === n
            ? []
            : this.guildsTree
                  .sortedGuildNodes()
                  .filter((e) => {
                      let i = e.parentId ?? e.id,
                          s = this.nodeRefs[i];
                      if (null == s) return !1;
                      let l = s.getBoundingClientRect(),
                          r = l.top - n;
                      return r + l.height > 0 && r < t;
                  })
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  });
    };
    handleScroll = () => {
        this.setScrolling(!0),
            this.timeout.start(200, () => this.setScrolling(!1)),
            this._handleScrollDebounced(),
            this._handleScrollThrottled();
    };
    _handleScrollDebounced = o().debounce(() => {
        let e = this.scrollerRef.current;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState();
        f.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = o().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function eo(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: l } = e,
        r = (0, v.A)("TopSection"),
        { isExperimentEnabled: a } = (0, S.TW)("TopSection"),
        [o, c] = (0, b.kn)(a ? [A.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        d = o === A.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [u] = (0, b.kn)(d ? [A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        m = u === A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        p = s.useRef(!1),
        g = m && r;
    s.useEffect(() => {
        g && !p.current && n(), (p.current = g);
    }, [n, g]);
    let _ = (0, h.yK)([P.A, U.Ay], () => P.A.getGuildIds().filter((e) => U.Ay.isCurrentUserGuest(e))),
        f = l.concat(_),
        { entrypoint: x } = (0, O.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(X.C, {}),
            x === O.RK.SERVER_RAIL_TOP && (0, i.jsx)(L.A, {}),
            r ? (0, i.jsx)(y.A, { shouldShowIntroPopover: m, markIntroPopoverAsDismissed: c }) : null,
            !t && (0, i.jsx)(K.A, {}),
            f.map((e) => (0, i.jsx)(et.A, { guildId: e }, e)),
            (0, i.jsx)(ee.A, { onActivate: n }),
        ],
    });
}
function ec(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: s, renderTreeNode: l, lurkingGuildIds: r } = e,
        [a] = (0, h.yK)([w.Ay], () => {
            let e = w.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = a.getRoots(),
        c = (0, h.yK)([G.A], () => G.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(z.A, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.BJc, {
                role: "group",
                "aria-label": ei.intl.string(ei.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => l(e, t, o.length)),
            }),
            c,
            (0, i.jsx)(Q.A, {}),
            s ? null : (0, i.jsx)(Y.A, { disableTooltip: r.length > 0, lastTargetNode: o[o.length - 1] }),
            s ? null : t,
            n ? null : (0, i.jsx)(W.A, {}),
        ],
    });
}
function ed(e) {
    let { disableAppDownload: t = k.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e;
    (0, T.A)();
    let [o] = (0, h.yK)([w.Ay], () => {
            let e = w.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([R.A], () => R.A.lurkingGuildIds()),
        A = s.useMemo(() => (n ? [] : u), [u, n]),
        m = (0, h.bG)([N.A], () => N.A.isFullscreenInContext()),
        { isSorting: f, startSorting: C, stopSorting: b } = (0, V.A)(),
        S = s.useRef(!1),
        [y] = s.useState(() => new p.Ep()),
        j = s.useRef(null),
        G = s.useRef(null),
        { ref: U, ...P } = (0, d.$y)(),
        K = (0, _.R7z)(),
        [W, Y] = s.useState(!1),
        z = (0, _.rdh)(g.A.modules.guildbar.AVATAR_SIZE),
        X = (0, _.rdh)(g.A.space.SPACE_XS),
        Q = (0, v.A)("GuildsBar"),
        { pathname: ee } = (0, c.zy)(),
        { entrypoint: et } = (0, O.X8)({ location: "GuildsBar" }),
        ed = +!!Q + +(et === O.RK.SERVER_RAIL_TOP),
        eu = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = z + X),
                    {
                        iconSize: z,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + X),
                        heightBeforeGuilds: el + t + ed * e,
                        bottomInset: 16,
                    });
            return new ea(
                o,
                Y,
                en.tEg,
                () => {
                    j.current?.calculateState(), G.current?.calculateState();
                },
                n,
            );
        }, [z, X, o, ed]);
    s.useEffect(
        () => (
            eu.setResizeObserver(),
            () => {
                eu.clearResizeObserver();
            }
        ),
        [eu],
    );
    let { analyticsLocations: eh } = (0, I.Ay)(E.A.GUILDS_LIST),
        eA = er(ee);
    (0, x.u5)(() => {
        if (!S.current && 0 !== o.size) {
            if (!eA) {
                let { scrollTop: e } = D.A.getGuildListDimensions();
                eu.scrollTo({ to: e, animate: !1 });
            }
            return (S.current = !0), () => y.stop();
        }
    }),
        s.useEffect(() => {
            if ((eu.setGuildsTree(o), S.current || 0 === o.size)) return;
            let e = M.A.getState().guildId;
            eu.scrollToGuild(e, !1);
            let t = null;
            return M.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eu.scrollToGuild(t, !1));
            });
        }, [o, eu]);
    let em = s.useCallback(() => {
        eu.scrollTo({ to: 0, animate: !1 });
    }, [eu]);
    (0, H.A)(eu.scrollToGuild);
    let ep = s.useCallback(
            function e(t, n, s) {
                switch (t.type) {
                    case B.PJ.FOLDER:
                        return (0, i.jsx)(
                            $.A,
                            {
                                folderNode: t,
                                setNodeRef: eu.setNodeRef,
                                draggable: !0,
                                sorting: f,
                                onDragStart: C,
                                onDragEnd: b,
                                renderChildNode: e,
                                "aria-setsize": s,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case B.PJ.GUILD:
                        return (0, i.jsx)(
                            Z.A,
                            {
                                guildNode: t,
                                setRef: eu.setNodeRef,
                                draggable: !0,
                                sorting: f,
                                onDragStart: C,
                                onDragEnd: b,
                                "aria-setsize": s,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [C, b, f, eu.setNodeRef],
        ),
        eg = (0, i.jsx)(q.A, { selected: eA, className: es.ai }),
        e_ = et === O.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(I.f5, {
        value: eh,
        children: (0, i.jsx)(_.NPJ, {
            theme: a,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: r()(es.iE, l, e, { [es.R]: m }),
                    "aria-label": ei.intl.string(ei.t.PjnF2t),
                    children: [
                        (0, i.jsx)(F.A, {
                            ref: j,
                            isVisible: eu.isItemVisible,
                            onJumpTo: eu.handleJumpToGuild,
                            className: es.Xl,
                            barClassName: es.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: U,
                            ...P,
                            ...K,
                            role: "tree",
                            className: es.B2,
                            children: (0, i.jsxs)("div", {
                                className: es.qD,
                                children: [
                                    (0, i.jsxs)(_.zCo, {
                                        className: r()({ [es.XG]: !0, [es.qw]: W }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: eu.scrollerRef,
                                        onScroll: eu.handleScroll,
                                        children: [
                                            (0, i.jsx)(eo, { scrollToTop: em, lurkingGuildIds: A }),
                                            (0, i.jsx)(J.A, {}),
                                            (0, i.jsx)(ec, {
                                                guildDiscoveryButton: eg,
                                                disableAppDownload: t,
                                                isOverlay: n,
                                                renderTreeNode: ep,
                                                lurkingGuildIds: A,
                                            }),
                                        ],
                                    }),
                                    e_ &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(J.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: es.JU, children: (0, i.jsx)(L.A, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(F.A, {
                            reverse: !0,
                            ref: G,
                            isVisible: eu.isItemVisible,
                            onJumpTo: eu.handleJumpToGuild,
                            className: r()(es.LZ, { [es.CH]: !n && !e_, [es.c0]: !n && e_ }),
                            barClassName: es.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let eu = s.memo(
    function (e) {
        let t = (0, C.A)("guildsnav");
        return (0, i.jsx)(d.hD, { navigator: t, children: (0, i.jsx)(ed, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, m.A)(e, t),
);
