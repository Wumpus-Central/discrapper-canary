"use strict";
n.d(t, { A: () => em });
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
    _ = n(827734),
    g = n(192308),
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
    k = n(458294),
    w = n(71393),
    V = n(309010),
    B = n(711014),
    H = n(723702),
    F = n(757780),
    K = n(263715),
    W = n(987344),
    Y = n(750448),
    z = n(845211),
    q = n(941604),
    X = n(246884),
    J = n(497140),
    Q = n(34247),
    $ = n(850729),
    Z = n(521872),
    ee = n(827975),
    et = n(369915),
    en = n(232879),
    ei = n(181800),
    es = n(343170),
    el = n(652215),
    er = n(985018),
    ea = n(216788);
let eo = (0, H.isWindows)() ? 4 : 12 * !(0, H.isMac)();
function ec(e) {
    return e.startsWith(el.BVt.GUILD_DISCOVERY) || e.startsWith(el.BVt.GLOBAL_DISCOVERY);
}
class ed {
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
            (null == e && ec(window.location.pathname)) ||
            e === el.sFm.SERVER_DISCOVERY_BADGE ||
            e === el.sFm.E3_SERVER_DISCOVERY_BADGE
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
function eu(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: l } = e,
        r = (0, y.A)("TopSection"),
        { isExperimentEnabled: a } = (0, v.TW)("TopSection"),
        o = (0, h.bG)([V.A], () => null != V.A.getVoiceChannelId()),
        c = (0, g.useHasAnyModalOpen)(),
        d = (0, S.Ay)((e) => e.postConnectionOpen),
        [u, m] = (0, T.kn)(d && a && !o && !c ? [A.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        p = u === A.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [_] = (0, T.kn)(p ? [A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        f = _ === A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
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
            (0, i.jsx)($.C, {}),
            N === L.RK.SERVER_RAIL_TOP && (0, i.jsx)(M.A, {}),
            r ? (0, i.jsx)(j.A, { shouldShowIntroPopover: f, markIntroPopoverAsDismissed: m }) : null,
            !t && (0, i.jsx)(z.A, {}),
            I.map((e) => (0, i.jsx)(es.A, { guildId: e }, e)),
            (0, i.jsx)(ei.A, { onActivate: n }),
        ],
    });
}
function eh(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: s, renderTreeNode: l, lurkingGuildIds: r } = e,
        [a] = (0, h.yK)([B.Ay], () => {
            let e = B.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = a.getRoots(),
        c = (0, h.yK)([U.A], () => U.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(J.A, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.BJc, {
                role: "group",
                "aria-label": er.intl.string(er.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => l(e, t, o.length)),
            }),
            c,
            (0, i.jsx)(ee.A, {}),
            s ? null : (0, i.jsx)(X.A, { disableTooltip: r.length > 0, lastTargetNode: o[o.length - 1] }),
            s ? null : t,
            n ? null : (0, i.jsx)(q.A, {}),
        ],
    });
}
function eA(e) {
    let { disableAppDownload: t = H.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e,
        [o] = (0, h.yK)([B.Ay], () => {
            let e = B.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([O.A], () => O.A.lurkingGuildIds()),
        A = s.useMemo(() => (n ? [] : u), [u, n]),
        m = (0, h.bG)([b.A], () => b.A.isFullscreenInContext()),
        { isSorting: g, startSorting: x, stopSorting: E } = (0, F.A)(),
        S = s.useRef(!1),
        [T] = s.useState(() => new p.Ep()),
        v = s.useRef(null),
        j = s.useRef(null),
        { ref: R, ...U } = (0, d.$y)(),
        P = (0, f.R7z)(),
        [w, V] = s.useState(!1),
        z = (0, f.rdh)(_.A.modules.guildbar.AVATAR_SIZE),
        q = (0, f.rdh)(_.A.space.SPACE_XS),
        X = (0, y.A)("GuildsBar"),
        { pathname: J } = (0, c.zy)(),
        { entrypoint: $ } = (0, L.X8)({ location: "GuildsBar" }),
        ee = +!!X + +($ === L.RK.SERVER_RAIL_TOP),
        ei = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = z + q),
                    {
                        iconSize: z,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + q),
                        heightBeforeGuilds: eo + t + ee * e,
                        bottomInset: 16,
                    });
            return new ed(
                o,
                V,
                el.tEg,
                () => {
                    v.current?.calculateState(), j.current?.calculateState();
                },
                n,
            );
        }, [z, q, o, ee]);
    s.useEffect(
        () => (
            ei.setResizeObserver(),
            () => {
                ei.clearResizeObserver();
            }
        ),
        [ei],
    ),
        s.useEffect(() => {
            let e = () => {
                v.current?.calculateState(), j.current?.calculateState();
            };
            return k.default.addChangeListener(e), () => k.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: es } = (0, N.Ay)(I.A.GUILDS_LIST),
        eA = ec(J);
    (0, C.u5)(() => {
        if (!S.current && 0 !== o.size) {
            if (!eA) {
                let { scrollTop: e } = G.A.getGuildListDimensions();
                ei.scrollTo({ to: e, animate: !1 });
            }
            return (S.current = !0), () => T.stop();
        }
    }),
        s.useEffect(() => {
            if ((ei.setGuildsTree(o), S.current || 0 === o.size)) return;
            let e = D.A.getState().guildId;
            ei.scrollToGuild(e, !1);
            let t = null;
            return D.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ei.scrollToGuild(t, !1));
            });
        }, [o, ei]);
    let em = s.useCallback(() => {
        ei.scrollTo({ to: 0, animate: !1 });
    }, [ei]);
    (0, W.A)(ei.scrollToGuild);
    let ep = s.useCallback(
            function e(t, n, s) {
                switch (t.type) {
                    case K.PJ.FOLDER:
                        return (0, i.jsx)(
                            et.A,
                            {
                                folderNode: t,
                                setNodeRef: ei.setNodeRef,
                                draggable: !0,
                                sorting: g,
                                onDragStart: x,
                                onDragEnd: E,
                                renderChildNode: e,
                                "aria-setsize": s,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case K.PJ.GUILD:
                        return (0, i.jsx)(
                            en.A,
                            {
                                guildNode: t,
                                setRef: ei.setNodeRef,
                                draggable: !0,
                                sorting: g,
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
            [x, E, g, ei.setNodeRef],
        ),
        e_ = (0, i.jsx)(Q.A, { selected: eA, className: ea.ai }),
        eg = $ === L.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(N.f5, {
        value: es,
        children: (0, i.jsx)(f.NPJ, {
            theme: a,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: r()(ea.iE, l, e, { [ea.R]: m }),
                    "aria-label": er.intl.string(er.t.PjnF2t),
                    children: [
                        (0, i.jsx)(Y.A, {
                            ref: v,
                            isVisible: ei.isItemVisible,
                            onJumpTo: ei.handleJumpToGuild,
                            className: ea.Xl,
                            barClassName: ea.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: R,
                            ...U,
                            ...P,
                            role: "tree",
                            className: ea.B2,
                            children: (0, i.jsxs)("div", {
                                className: ea.qD,
                                children: [
                                    (0, i.jsxs)(f.zCo, {
                                        className: r()({ [ea.XG]: !0, [ea.qw]: w }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: ei.scrollerRef,
                                        onScroll: ei.handleScroll,
                                        children: [
                                            (0, i.jsx)(eu, { scrollToTop: em, lurkingGuildIds: A }),
                                            (0, i.jsx)(Z.A, {}),
                                            (0, i.jsx)(eh, {
                                                guildDiscoveryButton: e_,
                                                disableAppDownload: t,
                                                isOverlay: n,
                                                renderTreeNode: ep,
                                                lurkingGuildIds: A,
                                            }),
                                        ],
                                    }),
                                    eg &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(Z.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: ea.JU, children: (0, i.jsx)(M.A, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(Y.A, {
                            reverse: !0,
                            ref: j,
                            isVisible: ei.isItemVisible,
                            onJumpTo: ei.handleJumpToGuild,
                            className: r()(ea.LZ, { [ea.CH]: !n && !eg, [ea.c0]: !n && eg }),
                            barClassName: ea.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let em = s.memo(
    function (e) {
        let t = (0, E.A)("guildsnav");
        return (0, i.jsx)(d.hD, { navigator: t, children: (0, i.jsx)(eA, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, m.A)(e, t),
);
