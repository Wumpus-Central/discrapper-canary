"use strict";
n.d(t, { A: () => ea });
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
    A = n(52133),
    p = n(451988),
    g = n(827734),
    m = n(397927),
    _ = n(951001),
    f = n(964486),
    x = n(260762),
    C = n(793574),
    E = n(688810),
    I = n(313961),
    N = n(832275),
    b = n(730253),
    S = n(633965),
    T = n(857071),
    y = n(851109),
    v = n(397938),
    j = n(366811),
    R = n(72314),
    O = n(543897),
    L = n(696451),
    M = n(71393),
    D = n(711014),
    G = n(723702),
    U = n(757780),
    P = n(263715),
    w = n(987344),
    k = n(750448),
    V = n(845211),
    B = n(941604),
    H = n(246884),
    F = n(497140),
    K = n(34247),
    W = n(850729),
    Y = n(521872),
    z = n(827975),
    X = n(369915),
    q = n(232879),
    J = n(181800),
    Q = n(343170),
    $ = n(652215),
    Z = n(985018),
    ee = n(266450);
let et = (0, G.isWindows)() ? 4 : 12 * !(0, G.isMac)();
function en(e) {
    return e.startsWith($.BVt.GUILD_DISCOVERY) || e.startsWith($.BVt.GLOBAL_DISCOVERY);
}
class ei {
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
            (0, S.u9)(this.getVisibleGuildIds);
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
            (null == e && en(window.location.pathname)) ||
            e === $.sFm.SERVER_DISCOVERY_BADGE ||
            e === $.sFm.E3_SERVER_DISCOVERY_BADGE
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
function es(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: s } = e,
        l = (0, N.A)("TopSection"),
        r = (0, h.yK)([M.A, L.Ay], () => M.A.getGuildIds().filter((e) => L.Ay.isCurrentUserGuest(e))),
        a = s.concat(r),
        { entrypoint: o } = (0, y.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(W.C, {}),
            o === y.RK.SERVER_RAIL_TOP && (0, i.jsx)(v.A, {}),
            l ? (0, i.jsx)(b.A, {}) : null,
            !t && (0, i.jsx)(V.A, {}),
            a.map((e) => (0, i.jsx)(Q.A, { guildId: e }, e)),
            (0, i.jsx)(J.A, { onActivate: n }),
        ],
    });
}
function el(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: s, renderTreeNode: l, lurkingGuildIds: r } = e,
        [a] = (0, h.yK)([D.Ay], () => {
            let e = D.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = a.getRoots(),
        c = (0, h.yK)([O.A], () => O.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(F.A, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.BJc, {
                role: "group",
                "aria-label": Z.intl.string(Z.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => l(e, t, o.length)),
            }),
            c,
            (0, i.jsx)(z.A, {}),
            s ? null : (0, i.jsx)(H.A, { disableTooltip: r.length > 0, lastTargetNode: o[o.length - 1] }),
            s ? null : t,
            n ? null : (0, i.jsx)(B.A, {}),
        ],
    });
}
function er(e) {
    let { disableAppDownload: t = G.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        [o] = (0, h.yK)([D.Ay], () => {
            let e = D.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([T.A], () => T.A.lurkingGuildIds()),
        A = s.useMemo(() => (n ? [] : u), [u, n]),
        _ = (0, h.bG)([I.A], () => I.A.isFullscreenInContext()),
        { isSorting: x, startSorting: b, stopSorting: S } = (0, U.A)(),
        O = s.useRef(!1),
        [L] = s.useState(() => new p.Ep()),
        M = s.useRef(null),
        V = s.useRef(null),
        { ref: B, ...H } = (0, d.$y)(),
        F = (0, m.R7z)(),
        [W, z] = s.useState(!1),
        J = (0, m.rdh)(g.A.modules.guildbar.AVATAR_SIZE),
        Q = (0, m.rdh)(g.A.space.SPACE_XS),
        er = (0, N.A)("GuildsBar"),
        { pathname: ea } = (0, c.zy)(),
        { entrypoint: eo } = (0, y.X8)({ location: "GuildsBar" }),
        ec = +!!er + +(eo === y.RK.SERVER_RAIL_TOP),
        ed = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = J + Q),
                    {
                        iconSize: J,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + Q),
                        heightBeforeGuilds: et + t + ec * e,
                        bottomInset: 16,
                    });
            return new ei(
                o,
                z,
                $.tEg,
                () => {
                    M.current?.calculateState(), V.current?.calculateState();
                },
                n,
            );
        }, [J, Q, o, ec]);
    s.useEffect(
        () => (
            ed.setResizeObserver(),
            () => {
                ed.clearResizeObserver();
            }
        ),
        [ed],
    );
    let { analyticsLocations: eu } = (0, E.Ay)(C.A.GUILDS_LIST),
        eh = en(ea);
    (0, f.u5)(() => {
        if (!O.current && 0 !== o.size) {
            if (!eh) {
                let { scrollTop: e } = R.A.getGuildListDimensions();
                ed.scrollTo({ to: e, animate: !1 });
            }
            return (O.current = !0), () => L.stop();
        }
    }),
        s.useEffect(() => {
            if ((ed.setGuildsTree(o), O.current || 0 === o.size)) return;
            let e = j.A.getState().guildId;
            ed.scrollToGuild(e, !1);
            let t = null;
            return j.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ed.scrollToGuild(t, !1));
            });
        }, [o, ed]);
    let eA = s.useCallback(() => {
        ed.scrollTo({ to: 0, animate: !1 });
    }, [ed]);
    (0, w.A)(ed.scrollToGuild);
    let ep = s.useCallback(
            function e(t, n, s) {
                switch (t.type) {
                    case P.PJ.FOLDER:
                        return (0, i.jsx)(
                            X.A,
                            {
                                folderNode: t,
                                setNodeRef: ed.setNodeRef,
                                draggable: !0,
                                sorting: x,
                                onDragStart: b,
                                onDragEnd: S,
                                renderChildNode: e,
                                "aria-setsize": s,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case P.PJ.GUILD:
                        return (0, i.jsx)(
                            q.A,
                            {
                                guildNode: t,
                                setRef: ed.setNodeRef,
                                draggable: !0,
                                sorting: x,
                                onDragStart: b,
                                onDragEnd: S,
                                "aria-setsize": s,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [b, S, x, ed.setNodeRef],
        ),
        eg = (0, i.jsx)(K.A, { selected: eh, className: ee.ai }),
        em = eo === y.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(E.f5, {
        value: eu,
        children: (0, i.jsx)(m.NPJ, {
            theme: a,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: r()(ee.iE, l, e, { [ee.R]: _ }),
                    "aria-label": Z.intl.string(Z.t.PjnF2t),
                    children: [
                        (0, i.jsx)(k.A, {
                            ref: M,
                            isVisible: ed.isItemVisible,
                            onJumpTo: ed.handleJumpToGuild,
                            className: ee.Xl,
                            barClassName: ee.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: B,
                            ...H,
                            ...F,
                            role: "tree",
                            className: ee.B2,
                            children: (0, i.jsxs)("div", {
                                className: ee.qD,
                                children: [
                                    (0, i.jsxs)(m.zCo, {
                                        className: r()({ [ee.XG]: !0, [ee.qw]: W }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: ed.scrollerRef,
                                        onScroll: ed.handleScroll,
                                        children: [
                                            (0, i.jsx)(es, { scrollToTop: eA, lurkingGuildIds: A }),
                                            (0, i.jsx)(Y.A, {}),
                                            (0, i.jsx)(el, {
                                                guildDiscoveryButton: eg,
                                                disableAppDownload: t,
                                                isOverlay: n,
                                                renderTreeNode: ep,
                                                lurkingGuildIds: A,
                                            }),
                                        ],
                                    }),
                                    em &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(Y.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: ee.JU, children: (0, i.jsx)(v.A, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(k.A, {
                            reverse: !0,
                            ref: V,
                            isVisible: ed.isItemVisible,
                            onJumpTo: ed.handleJumpToGuild,
                            className: r()(ee.LZ, { [ee.CH]: !n && !em, [ee.c0]: !n && em }),
                            barClassName: ee.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let ea = s.memo(
    function (e) {
        let t = (0, x.A)("guildsnav");
        return (0, i.jsx)(d.hD, { navigator: t, children: (0, i.jsx)(er, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, A.A)(e, t),
);
