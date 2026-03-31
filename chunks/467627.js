n.d(t, { A: () => e_ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(873263),
    d = n(837381),
    u = n(621466),
    h = n(311907),
    A = n(554146),
    _ = n(52133),
    m = n(451988),
    g = n(827734),
    p = n(192308),
    f = n(397927),
    x = n(951001),
    E = n(964486),
    I = n(260762),
    C = n(793574),
    N = n(688810),
    T = n(313961),
    S = n(771781),
    b = n(932001),
    y = n(93055),
    v = n(832275),
    j = n(730253),
    R = n(633965),
    O = n(857071),
    L = n(851109),
    M = n(397938),
    D = n(366811),
    U = n(72314),
    G = n(543897),
    P = n(696451),
    k = n(458294),
    w = n(71393),
    B = n(309010),
    V = n(711014),
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
    el = n(343170),
    es = n(652215),
    ea = n(985018),
    er = n(159969);
let eo = (0, H.isWindows)() ? 4 : 12 * !(0, H.isMac)();
function ec(e) {
    return e.startsWith(es.BVt.GUILD_DISCOVERY) || e.startsWith(es.BVt.GLOBAL_DISCOVERY);
}
class ed {
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
        let { iconTotalSize: i, badgeVisibleBuffer: l, heightBeforeGuilds: s, bottomInset: a } = this.sizes,
            r = this.scrollerRef.current;
        if (null == r) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let c = i * o + s,
            d = r.getScrollerState();
        return (!t && !!(c >= d.scrollTop)) || (!!t && !!(c + i + l <= d.scrollTop + d.offsetHeight - a));
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
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: s } = e,
        a = (0, v.A)("TopSection"),
        { isExperimentEnabled: r } = (0, y.TW)("TopSection"),
        o = (0, h.bG)([B.A], () => null != B.A.getVoiceChannelId()),
        c = (0, p.useHasAnyModalOpen)(),
        d = (0, S.Ay)((e) => e.postConnectionOpen),
        [u, _] = (0, b.kn)(d && r && !o && !c ? [A.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        m = u === A.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [g] = (0, b.kn)(m ? [A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        f = g === A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        x = l.useRef(!1),
        E = f && a;
    l.useEffect(() => {
        E && !x.current && n(), (x.current = E);
    }, [n, E]);
    let I = (0, h.yK)([w.A, P.Ay], () => w.A.getGuildIds().filter((e) => P.Ay.isCurrentUserGuest(e))),
        C = s.concat(I),
        { entrypoint: N } = (0, L.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)($.C, {}),
            N === L.RK.SERVER_RAIL_TOP && (0, i.jsx)(M.A, {}),
            a ? (0, i.jsx)(j.A, { shouldShowIntroPopover: f, markIntroPopoverAsDismissed: _ }) : null,
            !t && (0, i.jsx)(z.A, {}),
            C.map((e) => (0, i.jsx)(el.A, { guildId: e }, e)),
            (0, i.jsx)(ei.A, { onActivate: n }),
        ],
    });
}
function eh(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: l, renderTreeNode: s, lurkingGuildIds: a } = e,
        [r] = (0, h.yK)([V.Ay], () => {
            let e = V.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = r.getRoots(),
        c = (0, h.yK)([G.A], () => G.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(J.A, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.BJc, {
                role: "group",
                "aria-label": ea.intl.string(ea.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => s(e, t, o.length)),
            }),
            c,
            (0, i.jsx)(ee.A, {}),
            l ? null : (0, i.jsx)(X.A, { disableTooltip: a.length > 0, lastTargetNode: o[o.length - 1] }),
            l ? null : t,
            n ? null : (0, i.jsx)(q.A, {}),
        ],
    });
}
function eA(e) {
    let { disableAppDownload: t = H.isPlatformEmbedded, isOverlay: n = !1, className: s, themeOverride: r } = e,
        [o] = (0, h.yK)([V.Ay], () => {
            let e = V.Ay.getGuildsTree();
            return [e, e.version];
        }),
        u = (0, h.bG)([O.A], () => O.A.lurkingGuildIds()),
        A = l.useMemo(() => (n ? [] : u), [u, n]),
        _ = (0, h.bG)([T.A], () => T.A.isFullscreenInContext()),
        { isSorting: p, startSorting: x, stopSorting: I } = (0, F.A)(),
        S = l.useRef(!1),
        [b] = l.useState(() => new m.Ep()),
        y = l.useRef(null),
        j = l.useRef(null),
        { ref: R, ...G } = (0, d.$y)(),
        P = (0, f.R7z)(),
        [w, B] = l.useState(!1),
        z = (0, f.rdh)(g.A.modules.guildbar.AVATAR_SIZE),
        q = (0, f.rdh)(g.A.space.SPACE_XS),
        X = (0, v.A)("GuildsBar"),
        { pathname: J } = (0, c.zy)(),
        { entrypoint: $ } = (0, L.X8)({ location: "GuildsBar" }),
        ee = +!!X + +($ === L.RK.SERVER_RAIL_TOP),
        ei = l.useMemo(() => {
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
                B,
                es.tEg,
                () => {
                    y.current?.calculateState(), j.current?.calculateState();
                },
                n,
            );
        }, [z, q, o, ee]);
    l.useEffect(
        () => (
            ei.setResizeObserver(),
            () => {
                ei.clearResizeObserver();
            }
        ),
        [ei],
    ),
        l.useEffect(() => {
            let e = () => {
                y.current?.calculateState(), j.current?.calculateState();
            };
            return k.default.addChangeListener(e), () => k.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: el } = (0, N.Ay)(C.A.GUILDS_LIST),
        eA = ec(J);
    (0, E.u5)(() => {
        if (!S.current && 0 !== o.size) {
            if (!eA) {
                let { scrollTop: e } = U.A.getGuildListDimensions();
                ei.scrollTo({ to: e, animate: !1 });
            }
            return (S.current = !0), () => b.stop();
        }
    }),
        l.useEffect(() => {
            if ((ei.setGuildsTree(o), S.current || 0 === o.size)) return;
            let e = D.A.getState().guildId;
            ei.scrollToGuild(e, !1);
            let t = null;
            return D.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), ei.scrollToGuild(t, !1));
            });
        }, [o, ei]);
    let e_ = l.useCallback(() => {
        ei.scrollTo({ to: 0, animate: !1 });
    }, [ei]);
    (0, W.A)(ei.scrollToGuild);
    let em = l.useCallback(
            function e(t, n, l) {
                switch (t.type) {
                    case K.PJ.FOLDER:
                        return (0, i.jsx)(
                            et.A,
                            {
                                folderNode: t,
                                setNodeRef: ei.setNodeRef,
                                draggable: !0,
                                sorting: p,
                                onDragStart: x,
                                onDragEnd: I,
                                renderChildNode: e,
                                "aria-setsize": l,
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
                                sorting: p,
                                onDragStart: x,
                                onDragEnd: I,
                                "aria-setsize": l,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [x, I, p, ei.setNodeRef],
        ),
        eg = (0, i.jsx)(Q.A, { selected: eA, className: er.ai }),
        ep = $ === L.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(N.f5, {
        value: el,
        children: (0, i.jsx)(f.NPJ, {
            theme: r,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: a()(er.iE, s, e, { [er.R]: _ }),
                    "aria-label": ea.intl.string(ea.t.PjnF2t),
                    children: [
                        (0, i.jsx)(Y.A, {
                            ref: y,
                            isVisible: ei.isItemVisible,
                            onJumpTo: ei.handleJumpToGuild,
                            className: er.Xl,
                            barClassName: er.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: R,
                            ...G,
                            ...P,
                            role: "tree",
                            className: er.B2,
                            children: (0, i.jsxs)("div", {
                                className: er.qD,
                                children: [
                                    (0, i.jsxs)(f.zCo, {
                                        className: a()({ [er.XG]: !0, [er.qw]: w }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: ei.scrollerRef,
                                        onScroll: ei.handleScroll,
                                        children: [
                                            (0, i.jsx)(eu, { scrollToTop: e_, lurkingGuildIds: A }),
                                            (0, i.jsx)(Z.A, {}),
                                            (0, i.jsx)(eh, {
                                                guildDiscoveryButton: eg,
                                                disableAppDownload: t,
                                                isOverlay: n,
                                                renderTreeNode: em,
                                                lurkingGuildIds: A,
                                            }),
                                        ],
                                    }),
                                    ep &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(Z.A, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: er.JU, children: (0, i.jsx)(M.A, {}) }),
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
                            className: a()(er.LZ, { [er.CH]: !n && !ep, [er.c0]: !n && ep }),
                            barClassName: er.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let e_ = l.memo(
    function (e) {
        let t = (0, I.A)("guildsnav");
        return (0, i.jsx)(d.hD, { navigator: t, children: (0, i.jsx)(eA, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, _.A)(e, t),
);
