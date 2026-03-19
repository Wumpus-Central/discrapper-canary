"use strict";
n.d(t, { A: () => eA });
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
    _ = n(192308),
    f = n(397927),
    x = n(951001),
    C = n(964486),
    E = n(260762),
    I = n(793574),
    N = n(688810),
    b = n(313961),
    S = n(771781),
    T = n(932001),
    v = n(93055),
    y = n(832275),
    j = n(730253),
    R = n(633965),
    O = n(857071),
    L = n(851109),
    M = n(397938),
    D = n(366811),
    G = n(72314),
    U = n(543897),
    P = n(696451),
    w = n(71393),
    k = n(309010),
    V = n(711014),
    B = n(723702),
    H = n(757780),
    F = n(263715),
    K = n(987344),
    W = n(750448),
    Y = n(845211),
    z = n(941604),
    q = n(246884),
    X = n(497140),
    J = n(34247),
    Q = n(850729),
    $ = n(521872),
    Z = n(827975),
    ee = n(369915),
    et = n(232879),
    en = n(181800),
    ei = n(343170),
    es = n(652215),
    el = n(985018),
    er = n(216788);
let ea = (0, B.isWindows)() ? 4 : 12 * !(0, B.isMac)();
function eo(e) {
    return e.startsWith(es.BVt.GUILD_DISCOVERY) || e.startsWith(es.BVt.GLOBAL_DISCOVERY);
}
class ec {
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
            (0, R.u9)(this.getVisibleGuildIds);
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
            (null == e && eo(window.location.pathname)) ||
            e === es.sFm.SERVER_DISCOVERY_BADGE ||
            e === es.sFm.E3_SERVER_DISCOVERY_BADGE
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
        x.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = o().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function ed(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: l } = e,
        r = (0, y.A)("TopSection"),
        { isExperimentEnabled: a } = (0, v.TW)("TopSection"),
        o = (0, h.bG)([k.A], () => null != k.A.getVoiceChannelId()),
        c = (0, _.useHasAnyModalOpen)(),
        d = (0, S.Ay)((e) => e.postConnectionOpen),
        [u, m] = (0, T.kn)(d && a && !o && !c ? [A.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        p = u === A.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [g] = (0, T.kn)(p ? [A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        f = g === A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        x = s.useRef(!1),
        C = f && r;
    s.useEffect(() => {
        C && !x.current && n(), (x.current = C);
    }, [n, C]);
    let E = (0, h.yK)([w.A, P.Ay], () => w.A.getGuildIds().filter((e) => P.Ay.isCurrentUserGuest(e))),
        I = l.concat(E),
        { entrypoint: N } = (0, L.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Q.C, {}),
            N === L.RK.SERVER_RAIL_TOP && (0, i.jsx)(M.A, {}),
            r ? (0, i.jsx)(j.A, { shouldShowIntroPopover: f, markIntroPopoverAsDismissed: m }) : null,
            !t && (0, i.jsx)(Y.A, {}),
            I.map((e) => (0, i.jsx)(ei.A, { guildId: e }, e)),
            (0, i.jsx)(en.A, { onActivate: n }),
        ],
    });
}
function eu(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: s, renderTreeNode: l, lurkingGuildIds: r } = e,
        [a] = (0, h.yK)([V.Ay], () => {
            let e = V.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = a.getRoots(),
        c = (0, h.yK)([U.A], () => U.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(X.A, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.BJc, {
                role: "group",
                "aria-label": el.intl.string(el.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => l(e, t, o.length)),
            }),
            c,
            (0, i.jsx)(Z.A, {}),
            s ? null : (0, i.jsx)(q.A, { disableTooltip: r.length > 0, lastTargetNode: o[o.length - 1] }),
            s ? null : t,
            n ? null : (0, i.jsx)(z.A, {}),
        ],
    });
}
function eh(e) {
    let { disableAppDownload: t = B.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        [o] = (0, h.yK)([V.Ay], () => {
            let e = V.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([O.A], () => O.A.lurkingGuildIds()),
        A = s.useMemo(() => (n ? [] : u), [u, n]),
        m = (0, h.bG)([b.A], () => b.A.isFullscreenInContext()),
        { isSorting: _, startSorting: x, stopSorting: E } = (0, H.A)(),
        S = s.useRef(!1),
        [T] = s.useState(() => new p.Ep()),
        v = s.useRef(null),
        j = s.useRef(null),
        { ref: R, ...U } = (0, d.$y)(),
        P = (0, f.R7z)(),
        [w, k] = s.useState(!1),
        Y = (0, f.rdh)(g.A.modules.guildbar.AVATAR_SIZE),
        z = (0, f.rdh)(g.A.space.SPACE_XS),
        q = (0, y.A)("GuildsBar"),
        { pathname: X } = (0, c.zy)(),
        { entrypoint: Q } = (0, L.X8)({ location: "GuildsBar" }),
        Z = +!!q + +(Q === L.RK.SERVER_RAIL_TOP),
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
                        heightBeforeGuilds: ea + t + Z * e,
                        bottomInset: 16,
                    });
            return new ec(
                o,
                k,
                es.tEg,
                () => {
                    v.current?.calculateState(), j.current?.calculateState();
                },
                n,
            );
        }, [Y, z, o, Z]);
    s.useEffect(
        () => (
            en.setResizeObserver(),
            () => {
                en.clearResizeObserver();
            }
        ),
        [en],
    );
    let { analyticsLocations: ei } = (0, N.Ay)(I.A.GUILDS_LIST),
        eh = eo(X);
    (0, C.u5)(() => {
        if (!S.current && 0 !== o.size) {
            if (!eh) {
                let { scrollTop: e } = G.A.getGuildListDimensions();
                en.scrollTo({ to: e, animate: !1 });
            }
            return (S.current = !0), () => T.stop();
        }
    }),
        s.useEffect(() => {
            if ((en.setGuildsTree(o), S.current || 0 === o.size)) return;
            let e = D.A.getState().guildId;
            en.scrollToGuild(e, !1);
            let t = null;
            return D.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), en.scrollToGuild(t, !1));
            });
        }, [o, en]);
    let eA = s.useCallback(() => {
        en.scrollTo({ to: 0, animate: !1 });
    }, [en]);
    (0, K.A)(en.scrollToGuild);
    let em = s.useCallback(
            function e(t, n, s) {
                switch (t.type) {
                    case F.PJ.FOLDER:
                        return (0, i.jsx)(
                            ee.A,
                            {
                                folderNode: t,
                                setNodeRef: en.setNodeRef,
                                draggable: !0,
                                sorting: _,
                                onDragStart: x,
                                onDragEnd: E,
                                renderChildNode: e,
                                "aria-setsize": s,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case F.PJ.GUILD:
                        return (0, i.jsx)(
                            et.A,
                            {
                                guildNode: t,
                                setRef: en.setNodeRef,
                                draggable: !0,
                                sorting: _,
                                onDragStart: x,
                                onDragEnd: E,
                                "aria-setsize": s,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [x, E, _, en.setNodeRef],
        ),
        ep = (0, i.jsx)(J.A, { selected: eh, className: er.ai }),
        eg = Q === L.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(N.f5, {
        value: ei,
        children: (0, i.jsx)(f.NPJ, {
            theme: a,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: r()(er.iE, l, e, { [er.R]: m }),
                    "aria-label": el.intl.string(el.t.PjnF2t),
                    children: [
                        (0, i.jsx)(W.A, {
                            ref: v,
                            isVisible: en.isItemVisible,
                            onJumpTo: en.handleJumpToGuild,
                            className: er.Xl,
                            barClassName: er.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: R,
                            ...U,
                            ...P,
                            role: "tree",
                            className: er.B2,
                            children: (0, i.jsxs)("div", {
                                className: er.qD,
                                children: [
                                    (0, i.jsxs)(f.zCo, {
                                        className: r()({ [er.XG]: !0, [er.qw]: w }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: en.scrollerRef,
                                        onScroll: en.handleScroll,
                                        children: [
                                            (0, i.jsx)(ed, { scrollToTop: eA, lurkingGuildIds: A }),
                                            (0, i.jsx)($.A, {}),
                                            (0, i.jsx)(eu, {
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
                                                (0, i.jsx)($.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: er.JU, children: (0, i.jsx)(M.A, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(W.A, {
                            reverse: !0,
                            ref: j,
                            isVisible: en.isItemVisible,
                            onJumpTo: en.handleJumpToGuild,
                            className: r()(er.LZ, { [er.CH]: !n && !eg, [er.c0]: !n && eg }),
                            barClassName: er.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let eA = s.memo(
    function (e) {
        let t = (0, E.A)("guildsnav");
        return (0, i.jsx)(d.hD, { navigator: t, children: (0, i.jsx)(eh, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, m.A)(e, t),
);
