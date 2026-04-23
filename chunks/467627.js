n.d(t, { A: () => ef });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(873263),
    c = n(837381),
    u = n(621466),
    h = n(311907),
    A = n(554146),
    _ = n(52133),
    m = n(451988),
    g = n(827734),
    p = n(192308),
    f = n(331322),
    E = n(312138),
    x = n(602853),
    I = n(43990),
    C = n(599319),
    b = n(951001),
    N = n(964486),
    S = n(260762),
    v = n(793574),
    T = n(688810),
    y = n(313961),
    j = n(771781),
    R = n(932001),
    L = n(93055),
    O = n(832275),
    G = n(730253),
    M = n(633965),
    D = n(857071),
    U = n(851109),
    P = n(397938),
    w = n(366811),
    k = n(72314),
    V = n(543897),
    B = n(696451),
    H = n(458294),
    F = n(71393),
    W = n(309010),
    Y = n(711014),
    K = n(723702),
    z = n(757780),
    q = n(263715),
    X = n(987344),
    Q = n(750448),
    Z = n(845211),
    J = n(941604),
    $ = n(246884),
    ee = n(497140),
    et = n(34247),
    en = n(850729),
    ei = n(521872),
    el = n(827975),
    es = n(369915),
    ea = n(232879),
    er = n(181800),
    eo = n(343170),
    ed = n(652215),
    ec = n(985018),
    eu = n(803921);
let eh = (0, K.isWindows)() ? 4 : 12 * !(0, K.isMac)();
function eA(e) {
    return e.startsWith(ed.BVt.GUILD_DISCOVERY) || e.startsWith(ed.BVt.GLOBAL_DISCOVERY);
}
class e_ {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = l.createRef();
    nodeRefs = {};
    timeout = new m.Ep();
    observer;
    constructor(e, t, n, i, l) {
        (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = l),
            (0, M.u9)(this.getVisibleGuildIds);
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
            (null == e && eA(window.location.pathname)) ||
            e === ed.sFm.SERVER_DISCOVERY_BADGE ||
            e === ed.sFm.E3_SERVER_DISCOVERY_BADGE
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
        b.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = o().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function em(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: s } = e,
        a = (0, O.A)("TopSection"),
        { isExperimentEnabled: r } = (0, L.TW)("TopSection"),
        o = (0, h.bG)([W.A], () => null != W.A.getVoiceChannelId()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, j.Ay)((e) => e.postConnectionOpen),
        [u, _] = (0, R.kn)(c && r && !o && !d ? [A.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        m = u === A.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [g] = (0, R.kn)(m ? [A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        f = g === A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        E = l.useRef(!1),
        x = f && a;
    l.useEffect(() => {
        x && !E.current && n(), (E.current = x);
    }, [n, x]);
    let I = (0, h.yK)([F.A, B.Ay], () => F.A.getGuildIds().filter((e) => B.Ay.isCurrentUserGuest(e))),
        C = s.concat(I),
        { entrypoint: b } = (0, U.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(en.C, {}),
            b === U.RK.SERVER_RAIL_TOP && (0, i.jsx)(P.A, {}),
            a ? (0, i.jsx)(G.A, { shouldShowIntroPopover: f, markIntroPopoverAsDismissed: _ }) : null,
            !t && (0, i.jsx)(Z.A, {}),
            C.map((e) => (0, i.jsx)(eo.A, { guildId: e }, e)),
            (0, i.jsx)(er.A, { onActivate: n }),
        ],
    });
}
function eg(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: l, renderTreeNode: s, lurkingGuildIds: a } = e,
        [r] = (0, h.yK)([Y.Ay], () => {
            let e = Y.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = r.getRoots(),
        d = (0, h.yK)([V.A], () => V.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(ee.A, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.B, {
                role: "group",
                "aria-label": ec.intl.string(ec.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => s(e, t, o.length)),
            }),
            d,
            (0, i.jsx)(el.A, {}),
            l ? null : (0, i.jsx)($.A, { disableTooltip: a.length > 0, lastTargetNode: o[o.length - 1] }),
            l ? null : t,
            n ? null : (0, i.jsx)(J.A, {}),
        ],
    });
}
function ep(e) {
    let { disableAppDownload: t = K.isPlatformEmbedded, isOverlay: n = !1, className: s, themeOverride: r } = e,
        [o] = (0, h.yK)([Y.Ay], () => {
            let e = Y.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([D.A], () => D.A.lurkingGuildIds()),
        A = l.useMemo(() => (n ? [] : u), [u, n]),
        _ = (0, h.bG)([y.A], () => y.A.isFullscreenInContext()),
        { isSorting: p, startSorting: f, stopSorting: b } = (0, z.A)(),
        S = l.useRef(!1),
        [j] = l.useState(() => new m.Ep()),
        R = l.useRef(null),
        L = l.useRef(null),
        { ref: G, ...M } = (0, c.$y)(),
        V = (0, E.R7)(),
        [B, F] = l.useState(!1),
        W = (0, x.r)(g.A.modules.guildbar.AVATAR_SIZE),
        Z = (0, x.r)(g.A.space.SPACE_XS),
        J = (0, O.A)("GuildsBar"),
        { pathname: $ } = (0, d.zy)(),
        { entrypoint: ee } = (0, U.X8)({ location: "GuildsBar" }),
        en = +!!J + +(ee === U.RK.SERVER_RAIL_TOP),
        el = l.useMemo(() => {
            let e,
                t,
                n =
                    ((e = W + Z),
                    {
                        iconSize: W,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + Z),
                        heightBeforeGuilds: eh + t + en * e,
                        bottomInset: 16,
                    });
            return new e_(
                o,
                F,
                ed.tEg,
                () => {
                    R.current?.calculateState(), L.current?.calculateState();
                },
                n,
            );
        }, [W, Z, o, en]);
    l.useEffect(
        () => (
            el.setResizeObserver(),
            () => {
                el.clearResizeObserver();
            }
        ),
        [el],
    ),
        l.useEffect(() => {
            let e = () => {
                R.current?.calculateState(), L.current?.calculateState();
            };
            return H.default.addChangeListener(e), () => H.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: er } = (0, T.Ay)(v.A.GUILDS_LIST),
        eo = eA($);
    (0, N.u5)(() => {
        if (!S.current && 0 !== o.size) {
            if (!eo) {
                let { scrollTop: e } = k.A.getGuildListDimensions();
                el.scrollTo({ to: e, animate: !1 });
            }
            return (S.current = !0), () => j.stop();
        }
    }),
        l.useEffect(() => {
            if ((el.setGuildsTree(o), S.current || 0 === o.size)) return;
            let e = w.A.getState().guildId;
            el.scrollToGuild(e, !1);
            let t = null;
            return w.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), el.scrollToGuild(t, !1));
            });
        }, [o, el]);
    let ep = l.useCallback(() => {
        el.scrollTo({ to: 0, animate: !1 });
    }, [el]);
    (0, X.A)(el.scrollToGuild);
    let ef = l.useCallback(
            function e(t, n, l) {
                switch (t.type) {
                    case q.PJ.FOLDER:
                        return (0, i.jsx)(
                            es.A,
                            {
                                folderNode: t,
                                setNodeRef: el.setNodeRef,
                                draggable: !0,
                                sorting: p,
                                onDragStart: f,
                                onDragEnd: b,
                                renderChildNode: e,
                                "aria-setsize": l,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case q.PJ.GUILD:
                        return (0, i.jsx)(
                            ea.A,
                            {
                                guildNode: t,
                                setRef: el.setNodeRef,
                                draggable: !0,
                                sorting: p,
                                onDragStart: f,
                                onDragEnd: b,
                                "aria-setsize": l,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [f, b, p, el.setNodeRef],
        ),
        eE = (0, i.jsx)(et.A, { selected: eo, className: eu.ai }),
        ex = ee === U.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(T.f5, {
        value: er,
        children: (0, i.jsx)(I.N, {
            theme: r,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: a()(eu.iE, s, e, { [eu.R]: _ }),
                    "aria-label": ec.intl.string(ec.t.PjnF2t),
                    children: [
                        (0, i.jsx)(Q.A, {
                            ref: R,
                            isVisible: el.isItemVisible,
                            onJumpTo: el.handleJumpToGuild,
                            className: eu.Xl,
                            barClassName: eu.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: G,
                            ...M,
                            ...V,
                            role: "tree",
                            className: eu.B2,
                            children: (0, i.jsxs)("div", {
                                className: eu.qD,
                                children: [
                                    (0, i.jsxs)(C.zC, {
                                        className: a()({ [eu.XG]: !0, [eu.qw]: B }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: el.scrollerRef,
                                        onScroll: el.handleScroll,
                                        children: [
                                            (0, i.jsx)(em, { scrollToTop: ep, lurkingGuildIds: A }),
                                            (0, i.jsx)(ei.A, {}),
                                            (0, i.jsx)(eg, {
                                                guildDiscoveryButton: eE,
                                                disableAppDownload: t,
                                                isOverlay: n,
                                                renderTreeNode: ef,
                                                lurkingGuildIds: A,
                                            }),
                                        ],
                                    }),
                                    ex &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(ei.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: eu.JU, children: (0, i.jsx)(P.A, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(Q.A, {
                            reverse: !0,
                            ref: L,
                            isVisible: el.isItemVisible,
                            onJumpTo: el.handleJumpToGuild,
                            className: a()(eu.LZ, { [eu.CH]: !n && !ex, [eu.c0]: !n && ex }),
                            barClassName: eu.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let ef = l.memo(
    function (e) {
        let t = (0, S.A)("guildsnav");
        return (0, i.jsx)(c.hD, { navigator: t, children: (0, i.jsx)(ep, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, _.A)(e, t),
);
