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
    v = n(838432),
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
    Y = n(750448),
    W = n(845211),
    z = n(941604),
    q = n(246884),
    X = n(497140),
    Q = n(34247),
    J = n(850729),
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
function ed(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: l } = e,
        r = (0, y.A)("TopSection"),
        { isExperimentEnabled: a } = (0, T.TW)("TopSection"),
        o = (0, h.bG)([k.A], () => null != k.A.getVoiceChannelId()),
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
    let x = (0, h.yK)([w.A, P.Ay], () => w.A.getGuildIds().filter((e) => P.Ay.isCurrentUserGuest(e))),
        C = l.concat(x),
        { entrypoint: E } = (0, L.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(J.C, {}),
            E === L.RK.SERVER_RAIL_TOP && (0, i.jsx)(M.A, {}),
            r ? (0, i.jsx)(j.A, { shouldShowIntroPopover: g, markIntroPopoverAsDismissed: u }) : null,
            !t && (0, i.jsx)(W.A, {}),
            C.map((e) => (0, i.jsx)(ei.A, { guildId: e }, e)),
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
            (0, i.jsx)(_.BJc, {
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
    let { disableAppDownload: t = B.isPlatformEmbedded, isOverlay: n = !1, className: l, themeOverride: a } = e;
    (0, v.A)();
    let [o] = (0, h.yK)([V.Ay], () => {
            let e = V.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([O.A], () => O.A.lurkingGuildIds()),
        A = s.useMemo(() => (n ? [] : u), [u, n]),
        m = (0, h.bG)([N.A], () => N.A.isFullscreenInContext()),
        { isSorting: f, startSorting: C, stopSorting: b } = (0, H.A)(),
        S = s.useRef(!1),
        [T] = s.useState(() => new p.Ep()),
        j = s.useRef(null),
        R = s.useRef(null),
        { ref: U, ...P } = (0, d.$y)(),
        w = (0, _.R7z)(),
        [k, W] = s.useState(!1),
        z = (0, _.rdh)(g.A.modules.guildbar.AVATAR_SIZE),
        q = (0, _.rdh)(g.A.space.SPACE_XS),
        X = (0, y.A)("GuildsBar"),
        { pathname: J } = (0, c.zy)(),
        { entrypoint: Z } = (0, L.X8)({ location: "GuildsBar" }),
        en = +!!X + +(Z === L.RK.SERVER_RAIL_TOP),
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
                        heightBeforeGuilds: ea + t + en * e,
                        bottomInset: 16,
                    });
            return new ec(
                o,
                W,
                es.tEg,
                () => {
                    j.current?.calculateState(), R.current?.calculateState();
                },
                n,
            );
        }, [z, q, o, en]);
    s.useEffect(
        () => (
            ei.setResizeObserver(),
            () => {
                ei.clearResizeObserver();
            }
        ),
        [ei],
    );
    let { analyticsLocations: eh } = (0, I.Ay)(E.A.GUILDS_LIST),
        eA = eo(J);
    (0, x.u5)(() => {
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
    (0, K.A)(ei.scrollToGuild);
    let ep = s.useCallback(
            function e(t, n, s) {
                switch (t.type) {
                    case F.PJ.FOLDER:
                        return (0, i.jsx)(
                            ee.A,
                            {
                                folderNode: t,
                                setNodeRef: ei.setNodeRef,
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
                    case F.PJ.GUILD:
                        return (0, i.jsx)(
                            et.A,
                            {
                                guildNode: t,
                                setRef: ei.setNodeRef,
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
            [C, b, f, ei.setNodeRef],
        ),
        eg = (0, i.jsx)(Q.A, { selected: eA, className: er.ai }),
        e_ = Z === L.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(I.f5, {
        value: eh,
        children: (0, i.jsx)(_.NPJ, {
            theme: a,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: r()(er.iE, l, e, { [er.R]: m }),
                    "aria-label": el.intl.string(el.t.PjnF2t),
                    children: [
                        (0, i.jsx)(Y.A, {
                            ref: j,
                            isVisible: ei.isItemVisible,
                            onJumpTo: ei.handleJumpToGuild,
                            className: er.Xl,
                            barClassName: er.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: U,
                            ...P,
                            ...w,
                            role: "tree",
                            className: er.B2,
                            children: (0, i.jsxs)("div", {
                                className: er.qD,
                                children: [
                                    (0, i.jsxs)(_.zCo, {
                                        className: r()({ [er.XG]: !0, [er.qw]: k }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: ei.scrollerRef,
                                        onScroll: ei.handleScroll,
                                        children: [
                                            (0, i.jsx)(ed, { scrollToTop: em, lurkingGuildIds: A }),
                                            (0, i.jsx)($.A, {}),
                                            (0, i.jsx)(eu, {
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
                                                (0, i.jsx)($.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: er.JU, children: (0, i.jsx)(M.A, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(Y.A, {
                            reverse: !0,
                            ref: R,
                            isVisible: ei.isItemVisible,
                            onJumpTo: ei.handleJumpToGuild,
                            className: r()(er.LZ, { [er.CH]: !n && !e_, [er.c0]: !n && e_ }),
                            barClassName: er.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let eA = s.memo(
    function (e) {
        let t = (0, C.A)("guildsnav");
        return (0, i.jsx)(d.hD, { navigator: t, children: (0, i.jsx)(eh, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, m.A)(e, t),
);
