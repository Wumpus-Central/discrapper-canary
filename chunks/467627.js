"use strict";
n.d(t, { A: () => eh });
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
    b = n(771781),
    S = n(932001),
    T = n(93055),
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
    w = n(309010),
    k = n(711014),
    V = n(723702),
    B = n(757780),
    H = n(263715),
    F = n(987344),
    K = n(750448),
    W = n(845211),
    Y = n(941604),
    z = n(246884),
    q = n(497140),
    X = n(34247),
    Q = n(850729),
    J = n(521872),
    $ = n(827975),
    Z = n(369915),
    ee = n(232879),
    et = n(181800),
    en = n(343170),
    ei = n(652215),
    es = n(985018),
    el = n(216788);
let er = (0, V.isWindows)() ? 4 : 12 * !(0, V.isMac)();
function ea(e) {
    return e.startsWith(ei.BVt.GUILD_DISCOVERY) || e.startsWith(ei.BVt.GLOBAL_DISCOVERY);
}
class eo {
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
            (null == e && ea(window.location.pathname)) ||
            e === ei.sFm.SERVER_DISCOVERY_BADGE ||
            e === ei.sFm.E3_SERVER_DISCOVERY_BADGE
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
function ec(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: l } = e,
        r = (0, v.A)("TopSection"),
        { isExperimentEnabled: a } = (0, T.TW)("TopSection"),
        o = (0, h.bG)([w.A], () => null != w.A.getVoiceChannelId()),
        c = (0, b.Ay)((e) => e.postConnectionOpen),
        [d, u] = (0, S.kn)(c && a && !o ? [A.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        m = d === A.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [p] = (0, S.kn)(m ? [A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        g = p === A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        _ = s.useRef(!1),
        f = g && r;
    s.useEffect(() => {
        f && !_.current && n(), (_.current = f);
    }, [n, f]);
    let x = (0, h.yK)([P.A, U.Ay], () => P.A.getGuildIds().filter((e) => U.Ay.isCurrentUserGuest(e))),
        C = l.concat(x),
        { entrypoint: E } = (0, O.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Q.C, {}),
            E === O.RK.SERVER_RAIL_TOP && (0, i.jsx)(L.A, {}),
            r ? (0, i.jsx)(y.A, { shouldShowIntroPopover: g, markIntroPopoverAsDismissed: u }) : null,
            !t && (0, i.jsx)(W.A, {}),
            C.map((e) => (0, i.jsx)(en.A, { guildId: e }, e)),
            (0, i.jsx)(et.A, { onActivate: n }),
        ],
    });
}
function ed(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: s, renderTreeNode: l, lurkingGuildIds: r } = e,
        [a] = (0, h.yK)([k.Ay], () => {
            let e = k.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = a.getRoots(),
        c = (0, h.yK)([G.A], () => G.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(q.A, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.BJc, {
                role: "group",
                "aria-label": es.intl.string(es.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => l(e, t, o.length)),
            }),
            c,
            (0, i.jsx)($.A, {}),
            s ? null : (0, i.jsx)(z.A, { disableTooltip: r.length > 0, lastTargetNode: o[o.length - 1] }),
            s ? null : t,
            n ? null : (0, i.jsx)(Y.A, {}),
        ],
    });
}
function eu(e) {
    let { disableAppDownload: t = V.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        [o] = (0, h.yK)([k.Ay], () => {
            let e = k.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([R.A], () => R.A.lurkingGuildIds()),
        A = s.useMemo(() => (n ? [] : u), [u, n]),
        m = (0, h.bG)([N.A], () => N.A.isFullscreenInContext()),
        { isSorting: f, startSorting: C, stopSorting: b } = (0, B.A)(),
        S = s.useRef(!1),
        [T] = s.useState(() => new p.Ep()),
        y = s.useRef(null),
        j = s.useRef(null),
        { ref: G, ...U } = (0, d.$y)(),
        P = (0, _.R7z)(),
        [w, W] = s.useState(!1),
        Y = (0, _.rdh)(g.A.modules.guildbar.AVATAR_SIZE),
        z = (0, _.rdh)(g.A.space.SPACE_XS),
        q = (0, v.A)("GuildsBar"),
        { pathname: Q } = (0, c.zy)(),
        { entrypoint: $ } = (0, O.X8)({ location: "GuildsBar" }),
        et = +!!q + +($ === O.RK.SERVER_RAIL_TOP),
        en = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = Y + z),
                    {
                        iconSize: Y,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + z),
                        heightBeforeGuilds: er + t + et * e,
                        bottomInset: 16,
                    });
            return new eo(
                o,
                W,
                ei.tEg,
                () => {
                    y.current?.calculateState(), j.current?.calculateState();
                },
                n,
            );
        }, [Y, z, o, et]);
    s.useEffect(
        () => (
            en.setResizeObserver(),
            () => {
                en.clearResizeObserver();
            }
        ),
        [en],
    );
    let { analyticsLocations: eu } = (0, I.Ay)(E.A.GUILDS_LIST),
        eh = ea(Q);
    (0, x.u5)(() => {
        if (!S.current && 0 !== o.size) {
            if (!eh) {
                let { scrollTop: e } = D.A.getGuildListDimensions();
                en.scrollTo({ to: e, animate: !1 });
            }
            return (S.current = !0), () => T.stop();
        }
    }),
        s.useEffect(() => {
            if ((en.setGuildsTree(o), S.current || 0 === o.size)) return;
            let e = M.A.getState().guildId;
            en.scrollToGuild(e, !1);
            let t = null;
            return M.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), en.scrollToGuild(t, !1));
            });
        }, [o, en]);
    let eA = s.useCallback(() => {
        en.scrollTo({ to: 0, animate: !1 });
    }, [en]);
    (0, F.A)(en.scrollToGuild);
    let em = s.useCallback(
            function e(t, n, s) {
                switch (t.type) {
                    case H.PJ.FOLDER:
                        return (0, i.jsx)(
                            Z.A,
                            {
                                folderNode: t,
                                setNodeRef: en.setNodeRef,
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
                    case H.PJ.GUILD:
                        return (0, i.jsx)(
                            ee.A,
                            {
                                guildNode: t,
                                setRef: en.setNodeRef,
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
            [C, b, f, en.setNodeRef],
        ),
        ep = (0, i.jsx)(X.A, { selected: eh, className: el.ai }),
        eg = $ === O.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(I.f5, {
        value: eu,
        children: (0, i.jsx)(_.NPJ, {
            theme: a,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: r()(el.iE, l, e, { [el.R]: m }),
                    "aria-label": es.intl.string(es.t.PjnF2t),
                    children: [
                        (0, i.jsx)(K.A, {
                            ref: y,
                            isVisible: en.isItemVisible,
                            onJumpTo: en.handleJumpToGuild,
                            className: el.Xl,
                            barClassName: el.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: G,
                            ...U,
                            ...P,
                            role: "tree",
                            className: el.B2,
                            children: (0, i.jsxs)("div", {
                                className: el.qD,
                                children: [
                                    (0, i.jsxs)(_.zCo, {
                                        className: r()({ [el.XG]: !0, [el.qw]: w }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: en.scrollerRef,
                                        onScroll: en.handleScroll,
                                        children: [
                                            (0, i.jsx)(ec, { scrollToTop: eA, lurkingGuildIds: A }),
                                            (0, i.jsx)(J.A, {}),
                                            (0, i.jsx)(ed, {
                                                guildDiscoveryButton: ep,
                                                disableAppDownload: t,
                                                isOverlay: n,
                                                renderTreeNode: em,
                                                lurkingGuildIds: A,
                                            }),
                                        ],
                                    }),
                                    eg &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(J.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: el.JU, children: (0, i.jsx)(L.A, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(K.A, {
                            reverse: !0,
                            ref: j,
                            isVisible: en.isItemVisible,
                            onJumpTo: en.handleJumpToGuild,
                            className: r()(el.LZ, { [el.CH]: !n && !eg, [el.c0]: !n && eg }),
                            barClassName: el.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let eh = s.memo(
    function (e) {
        let t = (0, C.A)("guildsnav");
        return (0, i.jsx)(d.hD, { navigator: t, children: (0, i.jsx)(eu, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, m.A)(e, t),
);
