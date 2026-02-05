n.d(t, { A: () => er });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(960488),
    c = n(837381),
    u = n(621466),
    h = n(311907),
    A = n(52133),
    g = n(451988),
    m = n(827734),
    p = n(397927),
    _ = n(951001),
    x = n(964486),
    f = n(260762),
    E = n(793574),
    C = n(688810),
    I = n(313961),
    S = n(832275),
    b = n(730253),
    N = n(633965),
    T = n(857071),
    j = n(851109),
    v = n(397938),
    y = n(366811),
    R = n(72314),
    O = n(543897),
    L = n(696451),
    D = n(71393),
    M = n(711014),
    G = n(723702),
    U = n(757780),
    P = n(263715),
    k = n(987344),
    w = n(750448),
    V = n(845211),
    B = n(941604),
    H = n(246884),
    F = n(497140),
    Y = n(34247),
    W = n(850729),
    K = n(521872),
    z = n(827975),
    X = n(369915),
    q = n(232879),
    J = n(181800),
    Q = n(343170),
    Z = n(652215),
    $ = n(985018),
    ee = n(216788);
let et = (0, G.isWindows)() ? 4 : 12 * !(0, G.isMac)();
function en(e) {
    return e.startsWith(Z.BVt.GUILD_DISCOVERY) || e.startsWith(Z.BVt.GLOBAL_DISCOVERY);
}
class ei {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = l.createRef();
    nodeRefs = {};
    timeout = new g.Ep();
    observer;
    constructor(e, t, n, i, l) {
        (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = l),
            (0, N.u9)(this.getVisibleGuildIds);
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
        let { iconTotalSize: i, badgeVisibleBuffer: l, heightBeforeGuilds: s, bottomInset: a } = this.sizes,
            r = this.scrollerRef.current;
        if (null == r) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let d = i * o + s,
            c = r.getScrollerState();
        return (!t && !!(d >= c.scrollTop)) || (!!t && !!(d + i + l <= c.scrollTop + c.offsetHeight - a));
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
                          l = this.nodeRefs[i];
                      if (null == l) return !1;
                      let s = l.getBoundingClientRect(),
                          a = s.top - n;
                      return a + s.height > 0 && a < t;
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
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: l } = e,
        s = (0, S.A)(),
        a = (0, h.yK)([D.A, L.Ay], () => D.A.getGuildIds().filter((e) => L.Ay.isCurrentUserGuest(e))),
        r = l.concat(a),
        { entrypoint: o } = (0, j.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(W.C, {}),
            o === j.RK.SERVER_RAIL_TOP && (0, i.jsx)(v.A, {}),
            s ? (0, i.jsx)(b.A, {}) : null,
            !t && (0, i.jsx)(V.A, {}),
            r.map((e) => (0, i.jsx)(Q.A, { guildId: e }, e)),
            (0, i.jsx)(J.A, { onActivate: n }),
        ],
    });
}
function es(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: l, renderTreeNode: s, lurkingGuildIds: a } = e,
        [r] = (0, h.yK)([M.Ay], () => {
            let e = M.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = r.getRoots(),
        d = (0, h.yK)([O.A], () => O.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(F.A, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.BJc, {
                role: "group",
                "aria-label": $.intl.string($.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => s(e, t, o.length)),
            }),
            d,
            (0, i.jsx)(z.A, {}),
            l ? null : (0, i.jsx)(H.A, { disableTooltip: a.length > 0, lastTargetNode: o[o.length - 1] }),
            l ? null : t,
            n ? null : (0, i.jsx)(B.A, {}),
        ],
    });
}
function ea(e) {
    let { disableAppDownload: t = G.isPlatformEmbedded, isOverlay: n = !1, className: s, themeOverride: r } = e,
        [o] = (0, h.yK)([M.Ay], () => {
            let e = M.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([T.A], () => T.A.lurkingGuildIds()),
        A = l.useMemo(() => (n ? [] : u), [u, n]),
        _ = (0, h.bG)([I.A], () => I.A.isFullscreenInContext()),
        { isSorting: f, startSorting: b, stopSorting: N } = (0, U.A)(),
        O = l.useRef(!1),
        [L] = l.useState(() => new g.Ep()),
        D = l.useRef(null),
        V = l.useRef(null),
        { ref: B, ...H } = (0, c.$y)(),
        F = (0, p.R7z)(),
        [W, z] = l.useState(!1),
        J = (0, p.rdh)(m.A.modules.guildbar.AVATAR_SIZE),
        Q = (0, p.rdh)(m.A.space.SPACE_XS),
        ea = (0, S.A)(),
        { pathname: er } = (0, d.zy)(),
        { entrypoint: eo } = (0, j.X8)({ location: "GuildsBar" }),
        ed = +!!ea + +(eo === j.RK.SERVER_RAIL_TOP),
        ec = l.useMemo(() => {
            let e,
                t,
                n =
                    ((e = J + Q),
                    {
                        iconSize: J,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + Q),
                        heightBeforeGuilds: et + t + ed * e,
                        bottomInset: 16,
                    });
            return new ei(
                o,
                z,
                Z.tEg,
                () => {
                    D.current?.calculateState(), V.current?.calculateState();
                },
                n,
            );
        }, [J, Q, o, ed]);
    l.useEffect(
        () => (
            ec.setResizeObserver(),
            () => {
                ec.clearResizeObserver();
            }
        ),
        [ec],
    );
    let { analyticsLocations: eu } = (0, C.Ay)(E.A.GUILDS_LIST),
        eh = en(er);
    (0, x.u5)(() => {
        if (!O.current && 0 !== o.size) {
            if (!eh) {
                let { scrollTop: e } = R.A.getGuildListDimensions();
                ec.scrollTo({ to: e, animate: !1 });
            }
            return (O.current = !0), () => L.stop();
        }
    }),
        l.useEffect(() => {
            if ((ec.setGuildsTree(o), O.current || 0 === o.size)) return;
            let e = y.A.getState().guildId;
            ec.scrollToGuild(e, !1);
            let t = null;
            return y.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ec.scrollToGuild(t, !1));
            });
        }, [o, ec]);
    let eA = l.useCallback(() => {
        ec.scrollTo({ to: 0, animate: !1 });
    }, [ec]);
    (0, k.A)(ec.scrollToGuild);
    let eg = l.useCallback(
            function e(t, n, l) {
                switch (t.type) {
                    case P.PJ.FOLDER:
                        return (0, i.jsx)(
                            X.A,
                            {
                                folderNode: t,
                                setNodeRef: ec.setNodeRef,
                                draggable: !0,
                                sorting: f,
                                onDragStart: b,
                                onDragEnd: N,
                                renderChildNode: e,
                                "aria-setsize": l,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case P.PJ.GUILD:
                        return (0, i.jsx)(
                            q.A,
                            {
                                guildNode: t,
                                setRef: ec.setNodeRef,
                                draggable: !0,
                                sorting: f,
                                onDragStart: b,
                                onDragEnd: N,
                                "aria-setsize": l,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [b, N, f, ec.setNodeRef],
        ),
        em = (0, i.jsx)(Y.A, { selected: eh, className: ee.ai }),
        ep = eo === j.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(C.f5, {
        value: eu,
        children: (0, i.jsx)(p.NPJ, {
            theme: r,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: a()(ee.iE, s, e, { [ee.R]: _ }),
                    "aria-label": $.intl.string($.t.PjnF2t),
                    children: [
                        (0, i.jsx)(w.A, {
                            ref: D,
                            isVisible: ec.isItemVisible,
                            onJumpTo: ec.handleJumpToGuild,
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
                                    (0, i.jsxs)(p.zCo, {
                                        className: a()({ [ee.XG]: !0, [ee.qw]: W }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: ec.scrollerRef,
                                        onScroll: ec.handleScroll,
                                        children: [
                                            (0, i.jsx)(el, { scrollToTop: eA, lurkingGuildIds: A }),
                                            (0, i.jsx)(K.A, {}),
                                            (0, i.jsx)(es, {
                                                guildDiscoveryButton: em,
                                                disableAppDownload: t,
                                                isOverlay: n,
                                                renderTreeNode: eg,
                                                lurkingGuildIds: A,
                                            }),
                                        ],
                                    }),
                                    ep &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(K.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: ee.JU, children: (0, i.jsx)(v.A, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(w.A, {
                            reverse: !0,
                            ref: V,
                            isVisible: ec.isItemVisible,
                            onJumpTo: ec.handleJumpToGuild,
                            className: a()(ee.LZ, { [ee.CH]: !n && !ep, [ee.c0]: !n && ep }),
                            barClassName: ee.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let er = l.memo(
    function (e) {
        let t = (0, f.A)("guildsnav");
        return (0, i.jsx)(c.hD, { navigator: t, children: (0, i.jsx)(ea, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, A.A)(e, t),
);
