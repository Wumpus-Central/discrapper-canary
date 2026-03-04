"use strict";
n.d(t, { A: () => eo });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    c = n(873263),
    d = n(837381),
    u = n(621466),
    h = n(311907),
    A = n(52133),
    p = n(451988),
    m = n(827734),
    g = n(397927),
    _ = n(951001),
    f = n(964486),
    x = n(260762),
    C = n(793574),
    E = n(688810),
    I = n(313961),
    N = n(838432),
    S = n(832275),
    b = n(730253),
    T = n(633965),
    v = n(857071),
    y = n(851109),
    j = n(397938),
    R = n(366811),
    O = n(72314),
    L = n(543897),
    M = n(696451),
    D = n(71393),
    G = n(711014),
    U = n(723702),
    P = n(757780),
    w = n(263715),
    k = n(987344),
    V = n(750448),
    B = n(845211),
    H = n(941604),
    F = n(246884),
    K = n(497140),
    W = n(34247),
    Y = n(850729),
    z = n(521872),
    q = n(827975),
    X = n(369915),
    J = n(232879),
    Q = n(181800),
    $ = n(343170),
    Z = n(652215),
    ee = n(985018),
    et = n(216788);
let en = (0, U.isWindows)() ? 4 : 12 * !(0, U.isMac)();
function ei(e) {
    return e.startsWith(Z.BVt.GUILD_DISCOVERY) || e.startsWith(Z.BVt.GLOBAL_DISCOVERY);
}
class es {
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
            (0, T.u9)(this.getVisibleGuildIds);
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
            (null == e && ei(window.location.pathname)) ||
            e === Z.sFm.SERVER_DISCOVERY_BADGE ||
            e === Z.sFm.E3_SERVER_DISCOVERY_BADGE
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
        let { iconTotalSize: i, badgeVisibleBuffer: s, heightBeforeGuilds: l, bottomInset: a } = this.sizes,
            r = this.scrollerRef.current;
        if (null == r) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let c = i * o + l,
            d = r.getScrollerState();
        return (!t && !!(c >= d.scrollTop)) || (!!t && !!(c + i + s <= d.scrollTop + d.offsetHeight - a));
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
                          a = l.top - n;
                      return a + l.height > 0 && a < t;
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
        _.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = o().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function el(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: s } = e,
        l = (0, S.A)("TopSection"),
        a = (0, h.yK)([D.A, M.Ay], () => D.A.getGuildIds().filter((e) => M.Ay.isCurrentUserGuest(e))),
        r = s.concat(a),
        { entrypoint: o } = (0, y.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Y.C, {}),
            o === y.RK.SERVER_RAIL_TOP && (0, i.jsx)(j.A, {}),
            l ? (0, i.jsx)(b.A, {}) : null,
            !t && (0, i.jsx)(B.A, {}),
            r.map((e) => (0, i.jsx)($.A, { guildId: e }, e)),
            (0, i.jsx)(Q.A, { onActivate: n }),
        ],
    });
}
function ea(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: s, renderTreeNode: l, lurkingGuildIds: a } = e,
        [r] = (0, h.yK)([G.Ay], () => {
            let e = G.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = r.getRoots(),
        c = (0, h.yK)([L.A], () => L.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(K.A, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.BJc, {
                role: "group",
                "aria-label": ee.intl.string(ee.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => l(e, t, o.length)),
            }),
            c,
            (0, i.jsx)(q.A, {}),
            s ? null : (0, i.jsx)(F.A, { disableTooltip: a.length > 0, lastTargetNode: o[o.length - 1] }),
            s ? null : t,
            n ? null : (0, i.jsx)(H.A, {}),
        ],
    });
}
function er(e) {
    let { disableAppDownload: t = U.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: r } = e;
    (0, N.A)();
    let [o] = (0, h.yK)([G.Ay], () => {
            let e = G.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([v.A], () => v.A.lurkingGuildIds()),
        A = s.useMemo(() => (n ? [] : u), [u, n]),
        _ = (0, h.bG)([I.A], () => I.A.isFullscreenInContext()),
        { isSorting: x, startSorting: b, stopSorting: T } = (0, P.A)(),
        L = s.useRef(!1),
        [M] = s.useState(() => new p.Ep()),
        D = s.useRef(null),
        B = s.useRef(null),
        { ref: H, ...F } = (0, d.$y)(),
        K = (0, g.R7z)(),
        [Y, q] = s.useState(!1),
        Q = (0, g.rdh)(m.A.modules.guildbar.AVATAR_SIZE),
        $ = (0, g.rdh)(m.A.space.SPACE_XS),
        er = (0, S.A)("GuildsBar"),
        { pathname: eo } = (0, c.zy)(),
        { entrypoint: ec } = (0, y.X8)({ location: "GuildsBar" }),
        ed = +!!er + +(ec === y.RK.SERVER_RAIL_TOP),
        eu = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = Q + $),
                    {
                        iconSize: Q,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + $),
                        heightBeforeGuilds: en + t + ed * e,
                        bottomInset: 16,
                    });
            return new es(
                o,
                q,
                Z.tEg,
                () => {
                    D.current?.calculateState(), B.current?.calculateState();
                },
                n,
            );
        }, [Q, $, o, ed]);
    s.useEffect(
        () => (
            eu.setResizeObserver(),
            () => {
                eu.clearResizeObserver();
            }
        ),
        [eu],
    );
    let { analyticsLocations: eh } = (0, E.Ay)(C.A.GUILDS_LIST),
        eA = ei(eo);
    (0, f.u5)(() => {
        if (!L.current && 0 !== o.size) {
            if (!eA) {
                let { scrollTop: e } = O.A.getGuildListDimensions();
                eu.scrollTo({ to: e, animate: !1 });
            }
            return (L.current = !0), () => M.stop();
        }
    }),
        s.useEffect(() => {
            if ((eu.setGuildsTree(o), L.current || 0 === o.size)) return;
            let e = R.A.getState().guildId;
            eu.scrollToGuild(e, !1);
            let t = null;
            return R.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eu.scrollToGuild(t, !1));
            });
        }, [o, eu]);
    let ep = s.useCallback(() => {
        eu.scrollTo({ to: 0, animate: !1 });
    }, [eu]);
    (0, k.A)(eu.scrollToGuild);
    let em = s.useCallback(
            function e(t, n, s) {
                switch (t.type) {
                    case w.PJ.FOLDER:
                        return (0, i.jsx)(
                            X.A,
                            {
                                folderNode: t,
                                setNodeRef: eu.setNodeRef,
                                draggable: !0,
                                sorting: x,
                                onDragStart: b,
                                onDragEnd: T,
                                renderChildNode: e,
                                "aria-setsize": s,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case w.PJ.GUILD:
                        return (0, i.jsx)(
                            J.A,
                            {
                                guildNode: t,
                                setRef: eu.setNodeRef,
                                draggable: !0,
                                sorting: x,
                                onDragStart: b,
                                onDragEnd: T,
                                "aria-setsize": s,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [b, T, x, eu.setNodeRef],
        ),
        eg = (0, i.jsx)(W.A, { selected: eA, className: et.ai }),
        e_ = ec === y.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(E.f5, {
        value: eh,
        children: (0, i.jsx)(g.NPJ, {
            theme: r,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: a()(et.iE, l, e, { [et.R]: _ }),
                    "aria-label": ee.intl.string(ee.t.PjnF2t),
                    children: [
                        (0, i.jsx)(V.A, {
                            ref: D,
                            isVisible: eu.isItemVisible,
                            onJumpTo: eu.handleJumpToGuild,
                            className: et.Xl,
                            barClassName: et.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: H,
                            ...F,
                            ...K,
                            role: "tree",
                            className: et.B2,
                            children: (0, i.jsxs)("div", {
                                className: et.qD,
                                children: [
                                    (0, i.jsxs)(g.zCo, {
                                        className: a()({ [et.XG]: !0, [et.qw]: Y }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: eu.scrollerRef,
                                        onScroll: eu.handleScroll,
                                        children: [
                                            (0, i.jsx)(el, { scrollToTop: ep, lurkingGuildIds: A }),
                                            (0, i.jsx)(z.A, {}),
                                            (0, i.jsx)(ea, {
                                                guildDiscoveryButton: eg,
                                                disableAppDownload: t,
                                                isOverlay: n,
                                                renderTreeNode: em,
                                                lurkingGuildIds: A,
                                            }),
                                        ],
                                    }),
                                    e_ &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(z.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: et.JU, children: (0, i.jsx)(j.A, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(V.A, {
                            reverse: !0,
                            ref: B,
                            isVisible: eu.isItemVisible,
                            onJumpTo: eu.handleJumpToGuild,
                            className: a()(et.LZ, { [et.CH]: !n && !e_, [et.c0]: !n && e_ }),
                            barClassName: et.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let eo = s.memo(
    function (e) {
        let t = (0, x.A)("guildsnav");
        return (0, i.jsx)(d.hD, { navigator: t, children: (0, i.jsx)(er, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, A.A)(e, t),
);
