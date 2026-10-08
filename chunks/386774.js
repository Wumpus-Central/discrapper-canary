l.d(t, { default: () => ao });
var n,
    i,
    a,
    s = l(477900),
    r = l(582128),
    c = l.t(r, 2),
    o = l(503698),
    d = l.n(o),
    u = l(535185),
    m = l(17928),
    x = l(521489),
    h = l(192308),
    g = l(964486),
    f = l(793574),
    j = l(688810),
    p = l(206828),
    v = l(587895),
    E = l(590703),
    A = l(180170),
    I = l(583846),
    N = l(569926),
    S = l(570962),
    C = l(38145),
    b = l(773669),
    T = l(409626),
    y = (((n = {}).OVERVIEW = "overview"), (n.COMMUNITIES = "communities"), (n.COMMERCE = "commerce"), n),
    k = l(422069),
    R = l(205184),
    L = l(957807);
let G = {
    [y.OVERVIEW]: T.GameProfileTrackActionActions.Overview,
    [y.COMMUNITIES]: T.GameProfileTrackActionActions.Communities,
    [y.COMMERCE]: T.GameProfileTrackActionActions.GameShop,
};
var M = l(49491),
    O = l(429913),
    P = l(832163),
    _ = l(820847),
    w = l(862772),
    D = l(287809);
let V = r.createContext(void 0);
function F() {
    let e = r.useContext(V);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var U = l(109112),
    Y = l(761508),
    W = l(834730),
    B = l(739187),
    z = l(857250),
    H = l(97483),
    X = l(922016),
    K = l(980707),
    J = l(477782),
    $ = l(821609),
    Q = l(663341),
    q = l(866665),
    Z = l(408278),
    ee = l(34188),
    et = l(173936),
    el = l(365199),
    en = l(789645),
    ei = l(442433),
    ea = l(50268),
    es = l(44724),
    er = l(676924),
    ec = l(957565),
    eo = l(945810);
let ed = { enabled: !1 },
    eu = (0, eo.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: ed,
        variations: { 0: ed, 1: { enabled: !0 } },
    });
function em(e) {
    let { location: t } = e;
    return eu.useConfig({ location: t }).enabled;
}
var ex = l(695366),
    eh = l(660183);
l(321073);
var eg = l(540185),
    ef = l(926268),
    ej = l(53788),
    ep = l(831453),
    ev = l(785866),
    eE = l(555704),
    eA = l(47675),
    eI = l(633075),
    eN = l(289173),
    eS = l(321191),
    eC = l(958805),
    eb = l(735321),
    eT = l(96173),
    ey = l(280450),
    ek = l(403362);
async function eR(e) {
    let t = e((0, eb.BF)());
    await eC.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var eL = l(652215);
function eG(e) {
    var t;
    let n,
        i,
        { className: a, activeTab: o } = e,
        { game: d, closeModal: u, trackAction: x } = F(),
        g = r.useRef(null),
        j = r.useRef(null),
        p = (0, ea.A)({ id: d.id, label: eh.intl.string(eh.t.SHQGPj) }),
        v =
            ((t = d.id),
            (n = c.useContext(V)?.trackAction),
            (i = r.useCallback(() => {
                null != t &&
                    (n?.(T.GameProfileTrackActionActions.Feedback),
                    (0, h.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            l.e("142753"),
                            l.e("250440"),
                            l.e("568035"),
                            l.e("268582"),
                            l.e("733771"),
                            l.e("946039"),
                            l.e("55266"),
                            l.e("627495"),
                        ]).then(l.bind(l, 651930));
                        return (l) => (0, s.jsx)(e, { ...l, detected: { gameId: t } });
                    }));
            }, [t, n])),
            null == t
                ? null
                : (0, s.jsx)(J.Dr, {
                      id: "game-profile-something-wrong",
                      label: eh.intl.string(eh.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: ex.E },
                  })),
        E = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, m.bG)([ey.default], () => ey.default.getId()),
                i = r.useMemo(
                    () => [
                        {
                            type: eg.x.FAVORITE_GAMES,
                            addLabel: eh.intl.string(eh.t.fgmitg),
                            removeLabel: eh.intl.string(eh.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: ef.HeartIcon,
                        },
                        {
                            type: eg.x.PLAYED_GAMES,
                            addLabel: eh.intl.string(eh.t["0xIVLR"]),
                            removeLabel: eh.intl.string(eh.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: ej.G,
                        },
                        {
                            type: eg.x.CURRENT_GAMES,
                            addLabel: eh.intl.string(eh.t.G0c4En),
                            removeLabel: eh.intl.string(eh.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: ep.H,
                        },
                        {
                            type: eg.x.WANT_TO_PLAY_GAMES,
                            addLabel: eh.intl.string(eh.t.UuBS4K),
                            removeLabel: eh.intl.string(eh.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ev._,
                        },
                    ],
                    [],
                ),
                a = (0, m.yK)([eS.A], () => (null == n ? [] : (eS.A.getUserProfile(n)?.widgets ?? [])), [n]),
                c = (0, eT.A)(),
                o = r.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...a].filter((e) => e instanceof eI.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(ek.Vq).find((e) => t.has(e)) ?? null;
                }, [c, a, e]),
                d = r.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await eR((i) => {
                                let a = i.filter(eN.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eb.uA)(a))) return i;
                                    let l = { gameId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new eN.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    n = new eN.Yy({ ...a, games: e });
                                }
                                var s = n;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let c = [...i];
                                return ((c[r] = s), c);
                            }),
                            null == n)
                        )
                            return;
                        let i = n;
                        (0, eA.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
                            gameId: t,
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                u = r.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await eR((l) =>
                                e
                                    ? l.some((e) => e instanceof eI.R && e.applicationId === o)
                                        ? l
                                        : [(t = new eI.R({ applicationId: o })), ...l]
                                    : ((t = l.find((e) => e instanceof eI.R && e.applicationId === o) ?? null),
                                      l.filter((e) => !(e instanceof eI.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, eA.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == n) return null;
            let x = null != e && (0, eb.XX)(e),
                h = [];
            if (null != o) {
                let e = a.some((e) => e instanceof eI.R && e.applicationId === o);
                h.push(
                    (0, s.jsx)(
                        J.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eh.intl.formatToPlainString(eh.t.Ktb1n8, { name: l })
                                : eh.intl.formatToPlainString(eh.t.Xp6iZt, { name: l }),
                            action: () => u(!e),
                            leadingAccessory: { type: "icon", icon: eE.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let l = a.filter(eN.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.gameId === t),
                        i = !n && null != l && (0, eb.uA)(l);
                    h.push(
                        (0, s.jsx)(
                            J.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: i ? eh.intl.string(eh.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => d(e.type, !n),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(d),
        A = em({ location: "GameProfileOverflowMenu" }),
        I = (0, m.bG)([P.A], () => P.A.getApplicationIdFromDetectableId(d.id)),
        N = (0, m.bG)([P.A], () => P.A.hasStorefrontForApplicationId(I), [I]),
        S = r.useCallback(() => {
            null != I && (0, es.G)({ applicationId: I });
        }, [I]),
        C = r.useCallback(() => {
            null != I && (x(T.GameProfileTrackActionActions.GameShop), (0, es.default)({ applicationId: I }), u());
        }, [I, x, u]),
        b = r.useCallback(() => u(!1), [u]),
        k = r.useCallback(() => {
            x(T.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eL.BVt.GAME_PROFILE(d.id)}`;
            (0, ec.C)(e, () => {
                (0, B.P)((0, z.o)(eh.intl.string(eh.t["+5kSoW"]), H.Ck.SUCCESS));
            });
        }, [d.id, x]);
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            o === y.COMMERCE &&
                (0, s.jsx)(er.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: u,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != E &&
                o !== y.COMMERCE &&
                (0, s.jsx)(X.Y, {
                    targetElementRef: j,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(K.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, ei.Z_)(), t());
                            },
                            "aria-label": eh.intl.string(eh.t.sidPSo),
                            onSelect: () => {},
                            children: (0, s.jsx)(J.rX, { children: E }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)("div", {
                            ...e,
                            ref: j,
                            children: (0, s.jsx)($.$, {
                                icon: Q.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eh.intl.string(eh.t.sidPSo),
                            }),
                        }),
                }),
            N &&
                !A &&
                (0, s.jsx)(q.m, {
                    text: eh.intl.string(eh.t.apFNLU),
                    children: (0, s.jsx)(Z.K, {
                        icon: ee.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eh.intl.string(eh.t.apFNLU),
                        onMouseDown: S,
                        onClick: C,
                    }),
                }),
            o !== y.COMMERCE &&
                (0, s.jsx)(q.m, {
                    text: eh.intl.string(eh.t.WqhZss),
                    children: (0, s.jsx)(Z.K, {
                        icon: et.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eh.intl.string(eh.t.WqhZss),
                        onClick: k,
                    }),
                }),
            (null != p || null != v) &&
                o !== y.COMMERCE &&
                (0, s.jsx)(X.Y, {
                    targetElementRef: g,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(K.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, ei.Z_)(), t());
                            },
                            "aria-label": eh.intl.string(eh.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(J.rX, { children: v }), (0, s.jsx)(J.rX, { children: p })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)(q.m, {
                            text: eh.intl.string(eh.t["UKOtz+"]),
                            children: (0, s.jsx)("div", {
                                ...e,
                                ref: g,
                                children: (0, s.jsx)(Z.K, {
                                    icon: el.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eh.intl.string(eh.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, s.jsx)(Z.K, {
                icon: en.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: b,
                "aria-label": eh.intl.string(eh.t.cpT0Cq),
            }),
        ],
    });
}
let eM = { enabled: !1 },
    eO = (0, eo.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eM,
        variations: { 0: eM, 1: { enabled: !0 } },
    });
function eP(e) {
    let { className: t, navigation: l } = e,
        { selectedTab: n, selectTab: i } = l;
    if (
        !(function (e) {
            let { location: t } = e;
            return eO.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let a = eh.intl.string(eh.t["3xFZEo"]);
    return (0, s.jsx)(Y.V.Item, {
        id: y.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: n,
        onClick: () => i(y.COMMUNITIES),
        className: t,
        "aria-label": a,
        children: (0, s.jsx)(W.E, { variant: "text-md/medium", color: "none", children: a }),
    });
}
function e_(e) {
    let { className: t, navigation: l } = e,
        { game: n } = F();
    return (n.communityGuildIds?.length ?? 0) < 3 ? null : (0, s.jsx)(eP, { className: t, navigation: l });
}
var ew = l(661531),
    eD = l(331322),
    eV = l(278416),
    eF = l(478016),
    eU = l(900797),
    eY = l(847374),
    eW = l(421773),
    eB = l(421108);
let ez = "text-md/medium",
    eH = [];
function eX(e) {
    let { label: t, chevron: l, socialLayerStorefront: n } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: l } = e,
                n = Object.values(l?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: l } = e;
                    return "nitro" === t && (null == l || null != (0, eB.ZH)(l));
                }),
                i = (0, eB.tm)(n?.endsAt);
            return t && null != n && !i;
        })(n);
    return (0, s.jsxs)(eD.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, s.jsx)(eV.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: ew.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, s.jsxs)(eD.B, {
                as: "span",
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [t, l],
            }),
        ],
    });
}
function eK(e) {
    let { className: t, label: l, navigation: n, socialLayerStorefront: i } = e,
        { selectedTab: a, selectTab: c } = n,
        { storefront: o, selectedStorefrontPageIndex: d, selectStorefrontPage: u } = i,
        m = o?.pages ?? eH,
        x = r.useRef(null),
        { isHovered: h, setIsHovered: g, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, eW.A)(100, 100),
        v = eh.intl.string(eh.t["J3/JCl"]),
        E = r.useCallback(
            (e) => {
                (p(), g(e));
            },
            [p, g],
        );
    return (0, s.jsx)(X.Y, {
        targetElementRef: x,
        shouldShow: h,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => E(!0),
        onRequestClose: () => E(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, s.jsx)(K.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": v,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, s.jsx)(J.rX, {
                        children: m.map((e, t) => {
                            var l;
                            let n,
                                i = a === y.COMMERCE && t === d,
                                r =
                                    ((l = e.title),
                                    null != (n = l?.trim()) && n.length > 0
                                        ? n
                                        : eh.intl.formatToPlainString(eh.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, s.jsx)(
                                J.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: r,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: eF.U } : void 0,
                                    action: () => u(t),
                                },
                                t,
                            );
                        }),
                    }),
                }),
            });
        },
        children: (e, n) => {
            let { isShown: r } = n,
                o = r ? eU.t : eY.a;
            return (0, s.jsx)(Y.V.Item, {
                ...e,
                id: y.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a === y.COMMERCE ? y.COMMERCE : void 0,
                onClick: (t) => {
                    (c(y.COMMERCE), e.onClick(t));
                },
                onMouseLeave: j,
                clickableRef: (e) => {
                    x.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": v,
                "aria-haspopup": "menu",
                children: (0, s.jsx)(W.E, {
                    variant: ez,
                    color: "none",
                    children: (0, s.jsx)(eX, {
                        label: l,
                        chevron: (0, s.jsx)(o, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function eJ(e) {
    let { className: t, navigation: l, socialLayerStorefront: n } = e,
        { selectedTab: i, selectTab: a } = l,
        { hasCommerceTab: r, storefront: c } = n;
    if (!r) return null;
    let o = eh.intl.string(eh.t.apFNLU);
    return (c?.pages.length ?? 0) > 1
        ? (0, s.jsx)(eK, { className: t, label: o, navigation: l, socialLayerStorefront: n })
        : (0, s.jsx)(Y.V.Item, {
              id: y.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(y.COMMERCE),
              className: t,
              "aria-label": o,
              children: (0, s.jsx)(W.E, {
                  variant: ez,
                  color: "none",
                  children: (0, s.jsx)(eX, { label: o, socialLayerStorefront: n }),
              }),
          });
}
var e$ = l(510954);
function eQ(e) {
    let { navigation: t, socialLayerStorefront: l } = e,
        { game: n } = F(),
        { selectedTab: i, selectTab: a } = t,
        c = n.getIconURL(64),
        [o, d] = r.useState(null),
        u = r.useCallback(() => d(c), [c]),
        m = eh.intl.string(eh.t.qHmbyh);
    return (0, s.jsx)("div", {
        className: e$.wx,
        children: (0, s.jsxs)("div", {
            className: e$.ap,
            children: [
                (0, s.jsx)("div", {
                    className: e$.wE,
                    children:
                        null != c && c !== o
                            ? (0, s.jsx)("img", { src: c, alt: "", className: e$.FC, draggable: !1, onError: u })
                            : (0, s.jsx)(U._, { size: "md" }),
                }),
                (0, s.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: e$.vR,
                    children: [
                        (0, s.jsx)(Y.V.Item, {
                            id: y.OVERVIEW,
                            disableItemStyles: !0,
                            className: e$.Mf,
                            "aria-label": m,
                            children: (0, s.jsx)(W.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, s.jsx)(e_, { className: e$.Mf, navigation: t }),
                        (0, s.jsx)(eJ, { className: e$.Mf, navigation: t, socialLayerStorefront: l }),
                    ],
                }),
                (0, s.jsx)(eG, { className: e$.HK, activeTab: i }),
            ],
        }),
    });
}
var eq = l(435558),
    eZ = l.n(eq),
    e0 = l(689175),
    e1 = l(448741),
    e8 = l(71393),
    e3 = l(449054),
    e6 = l(810729);
let e2 = { sm: e6.nz, md: e6.a };
function e4(e) {
    let { className: t, width: l } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: d()(e6.qf, t), style: { width: l } });
}
function e5(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function e9(e) {
    let { className: t, size: l = "md" } = e;
    return (0, s.jsx)(e4, { className: d()(e6.x6, e2[l], t) });
}
var e7 = l(827085);
function te(e) {
    let { className: t } = e;
    return (0, s.jsx)(e4, { className: d()(e7.qV, t) });
}
function tt(e) {
    let { presenceCount: t, memberCount: l } = e;
    return null == t && null == l
        ? null
        : (0, s.jsxs)("div", {
              className: e7.kL,
              children: [
                  null != t &&
                      (0, s.jsxs)("div", {
                          className: e7.U9,
                          children: [
                              (0, s.jsx)("i", { className: e7._o }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eh.intl.format(eh.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != l &&
                      (0, s.jsxs)("div", {
                          className: e7.U9,
                          children: [
                              (0, s.jsx)("i", { className: e7.jk }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eh.intl.format(eh.t.zRl6XR, { count: l }),
                              }),
                          ],
                      }),
              ],
          });
}
var tl = l(297264),
    tn = l(73153),
    ti = l(37537),
    ta = l(714991),
    ts = l(486020),
    tr = l(240248),
    tc = l(213098);
function to() {
    return (0, s.jsxs)(e5, {
        className: tc.uW,
        animationDelayMs: 300,
        children: [
            (0, s.jsx)(e4, { className: tc.dU, width: "30%" }),
            (0, s.jsx)(e5, {
                className: tc.nV,
                children: (0, s.jsxs)("div", {
                    className: tc.hQ,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tc.To,
                            children: [
                                (0, s.jsx)(e4, { className: tc.QV }),
                                (0, s.jsxs)("div", {
                                    className: tc.Yv,
                                    children: [
                                        (0, s.jsx)(e4, { className: tc.Ag }),
                                        (0, s.jsx)(e4, { className: tc.zl }),
                                        (0, s.jsx)(te, { className: tc.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(e9, {}),
                    ],
                }),
            }),
        ],
    });
}
function td(e) {
    let { guild: t } = e,
        l = ts.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = r.useState(void 0),
        a = null != l && n !== l,
        c = r.useCallback(() => {
            i(l);
        }, [l]);
    return (0, s.jsxs)("div", {
        className: tc._C,
        children: [
            a && (0, s.jsx)(e4, { className: tc.EQ }),
            (0, s.jsx)("img", {
                className: tc.$f,
                src: l,
                alt: eh.intl.formatToPlainString(eh.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tu(e) {
    let { guild: t, presenceCount: l, memberCount: n, isMember: i, onJoin: a, className: r } = e;
    return (0, s.jsx)("div", {
        className: d()(tc.kL, r),
        children: (0, s.jsxs)("div", {
            className: tc.hQ,
            children: [
                (0, s.jsxs)("div", {
                    className: tc.To,
                    children: [
                        (0, s.jsx)(td, { guild: t }),
                        (0, s.jsxs)("div", {
                            className: tc.yj,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: tc.YS,
                                    children: [
                                        (0, s.jsx)(ta.A, { guild: t, size: 16 }),
                                        (0, s.jsx)(tl.D, {
                                            className: tc.J5,
                                            variant: "heading-md/semibold",
                                            color: "text-default",
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                !(0, tr.uJ)(t.description) &&
                                    (0, s.jsx)(W.E, {
                                        className: tc.h_,
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: t.description,
                                    }),
                                (0, s.jsx)(tt, { presenceCount: l, memberCount: n }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsx)($.$, {
                    variant: "secondary",
                    text: i ? eh.intl.string(eh.t.cEnaWx) : eh.intl.string(eh.t.XpeFYr),
                    "aria-label": i
                        ? eh.intl.formatToPlainString(eh.t.lQqwQi, { guildName: t.name })
                        : eh.intl.formatToPlainString(eh.t["8rL1QB"], { guildName: t.name }),
                    onClick: a,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function tm() {
    let e = (0, ti.c)("GameProfileGuildInvite"),
        {
            invite: t,
            hasDiscordWebsite: l,
            isCommunityInviteResolving: n,
            isMember: i,
            closeModal: a,
            trackAction: c,
        } = F(),
        o = r.useCallback(() => {
            null != t &&
                (c(T.GameProfileTrackActionActions.JoinServer),
                a(),
                tn.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: eL.BRT.APP }));
        }, [t, c, a]);
    return null == t || null == t.guild
        ? l && n
            ? (0, s.jsx)(to, {})
            : null
        : (0, s.jsxs)("div", {
              className: tc.uW,
              children: [
                  (0, s.jsx)(tl.D, {
                      className: tc.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: eh.intl.string(eh.t["U2N+ci"]),
                  }),
                  (0, s.jsx)(tu, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      isMember: i,
                      onJoin: o,
                  }),
              ],
          });
}
var tx = l(320448),
    th = l(152594);
function tg(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, s.jsxs)("div", {
        className: th.kL,
        "aria-busy": !0,
        children: [
            (0, s.jsxs)("div", {
                className: th.wR,
                children: [(0, s.jsx)(e4, { className: th.Iz, width: l }), n && (0, s.jsx)(e9, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tf(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, s.jsxs)("div", {
        className: th.kL,
        children: [
            (0, s.jsxs)("div", {
                className: th.wR,
                children: [
                    (0, s.jsx)(tl.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, s.jsx)($.$, {
                            size: "sm",
                            icon: tx._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: eh.intl.string(eh.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var tj = l(196765),
    tp = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tv = (0, tj.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tE = l(876798),
    tA = l(481901),
    tI = l(916099),
    tN = l(461353);
function tS() {
    let { layout: e, setLayout: t } = tv(),
        l = eh.intl.string(eh.t.VGRZh7),
        n = eh.intl.string(eh.t["NJFr+g"]);
    return (0, s.jsxs)("div", {
        className: tN.k,
        role: "group",
        "aria-label": eh.intl.string(eh.t.mFMDSq),
        children: [
            (0, s.jsx)(q.m, {
                text: l,
                asContainer: !0,
                children: (0, s.jsx)(tE.k, {
                    icon: tA.d,
                    pressed: e === tp.GRID,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tp.GRID),
                }),
            }),
            (0, s.jsx)(q.m, {
                text: n,
                asContainer: !0,
                children: (0, s.jsx)(tE.k, {
                    icon: tI.ListBulletsIcon,
                    pressed: e === tp.LIST,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tp.LIST),
                }),
            }),
        ],
    });
}
var tC = l(759020);
function tb(e) {
    let { guild: t, presenceCount: l, memberCount: n, isMember: i, onJoin: a } = e;
    return (0, s.jsxs)("div", {
        className: tC.kL,
        children: [
            (0, s.jsxs)("div", {
                className: tC.OA,
                children: [
                    (0, s.jsx)(td, { guild: t }),
                    (0, s.jsxs)("div", {
                        className: tC.FS,
                        children: [
                            (0, s.jsxs)("div", {
                                className: tC.YS,
                                children: [
                                    (0, s.jsx)(ta.A, { guild: t, size: 16 }),
                                    (0, s.jsx)(tl.D, {
                                        className: tC.J5,
                                        variant: "heading-sm/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, tr.uJ)(t.description) &&
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: tC.o1,
                children: [
                    (0, s.jsx)(tt, { presenceCount: l, memberCount: n }),
                    (0, s.jsx)($.$, {
                        size: "sm",
                        variant: "secondary",
                        text: i ? eh.intl.string(eh.t.cEnaWx) : eh.intl.string(eh.t.XpeFYr),
                        "aria-label": i
                            ? eh.intl.formatToPlainString(eh.t.lQqwQi, { guildName: t.name })
                            : eh.intl.formatToPlainString(eh.t["8rL1QB"], { guildName: t.name }),
                        onClick: a,
                    }),
                ],
            }),
        ],
    });
}
var tT = l(311043),
    ty = l(636537);
let tk = {};
class tR extends m.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(ey.default);
    }
    getGuild(e) {
        return tk[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => tk[e]?.guild).filter(ek.Vq);
    }
    isFetching(e) {
        return e.some((e) => tk[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let l = tk[e];
            return (
                null == l ||
                "failed" === l.fetchState ||
                ("fetching" !== l.fetchState && (null == l.fetchedAt || t - l.fetchedAt >= 36e5))
            );
        });
    }
}
let tL = new tR(tn.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                tk[e] = { guild: tk[e]?.guild ?? null, fetchState: "fetching", fetchedAt: tk[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: l } = e,
                n = Date.now(),
                i = new Map(l.map((e) => [e.id, (0, e3.jE)(e)]));
            for (let e of t) tk[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: n };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                tk[e] = { guild: tk[e]?.guild ?? null, fetchState: "failed", fetchedAt: tk[e]?.fetchedAt ?? null };
        },
    }),
    tG = new Map();
async function tM(e) {
    tn.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await ty.Bo.get({
                url: eL.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            l = t.body?.guilds ?? [];
        tn.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: l });
    } catch (t) {
        throw (tn.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
    }
}
async function tO(e) {
    let t = tL.getStaleGuildIds(e),
        l = new Set();
    for (let t of e) {
        let e = tG.get(t);
        null != e && l.add(e);
    }
    if (t.length > 0) {
        let e = tM(t).finally(() => {
            for (let l of t) tG.get(l) === e && tG.delete(l);
        });
        for (let l of t) tG.set(l, e);
        l.add(e);
    }
    await Promise.all(l);
}
var tP = l(927813);
let t_ = [];
function tw(e) {
    return tT.A.getGame(e)?.communityGuildIds ?? t_;
}
let tD = (0, m.UT)(tL, {
    getQueryId: (e) => (tw(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => tL.getGuilds(tw(e)),
    load: async (e) => {
        let t = tw(e);
        t.length > 0 && (await tO(t));
    },
    staleAfter: tP.A.Seconds.HOUR,
    failureStaleAfter: tP.A.Seconds.MINUTE,
});
var tV = l(620387);
function tF(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(e5, {
        className: tV.s7,
        animationDelayMs: t,
        children: [
            (0, s.jsxs)("div", {
                className: tV.Xc,
                children: [
                    (0, s.jsx)(e4, { className: tV.VR }),
                    (0, s.jsxs)("div", {
                        className: tV.hG,
                        children: [
                            (0, s.jsx)(e4, { className: tV.t_ }),
                            (0, s.jsx)(e4, { className: tV.Aj }),
                            (0, s.jsx)(te, {}),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(e9, {}),
        ],
    });
}
function tU(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(e5, {
        className: tV.fv,
        animationDelayMs: t,
        children: [
            (0, s.jsx)(e4, { className: tV.VR }),
            (0, s.jsxs)("div", {
                className: tV.hG,
                children: [(0, s.jsx)(e4, { className: tV.t_ }), (0, s.jsx)(e4, { className: tV.Aj })],
            }),
            (0, s.jsx)(e9, { size: "sm" }),
        ],
    });
}
function tY(e) {
    let { guild: t, layout: l } = e,
        { closeModal: n, trackAction: i, viewId: a } = F(),
        c = (0, m.bG)([e8.A], () => e8.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        o = r.useCallback(async () => {
            (i(T.GameProfileTrackActionActions.CommunityClicked, void 0, t.id), n());
            try {
                await e3.Z2(t.id, {}, { joinSource: eL.Q4z.GAME_PROFILE_COMMUNITIES, loadId: a }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, e1._)(e);
            }
        }, [t.id, i, n, a]),
        d = l === tp.LIST ? tb : tu;
    return (0, s.jsx)(d, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        isMember: c,
        onJoin: o,
    });
}
function tW() {
    let { game: e } = F(),
        { data: t, isLoading: l } = tD(e.id),
        n = tv((e) => e.layout),
        i = n === tp.LIST,
        a = i ? tU : tF,
        r = l && (null == t || 0 === t.length);
    return (0, s.jsxs)(e0.Ch, {
        className: tV.XG,
        children: [
            (0, s.jsx)("div", { className: tV.xY, "aria-hidden": !0 }),
            (0, s.jsx)("div", {
                className: tV.uW,
                children: (0, s.jsxs)(tf, {
                    title: eh.intl.string(eh.t.r6bvTh),
                    children: [
                        (0, s.jsx)("div", { className: tV.KE, children: (0, s.jsx)(tS, {}) }),
                        (0, s.jsx)("div", {
                            className: i ? tV.p_ : tV.Vg,
                            children: r
                                ? eZ()
                                      .range(8)
                                      .map((e) => (0, s.jsx)(a, { animationDelayMs: 150 * e }, e))
                                : (t ?? []).map((e) => (0, s.jsx)(tY, { guild: e, layout: n }, e.id)),
                        }),
                    ],
                }),
            }),
        ],
    });
}
var tB = l(707554),
    tz = l(369606),
    tH = l(939249),
    tX = l(775602),
    tK = l(21161),
    tJ = l(400492),
    t$ = l(541830),
    tQ = l(459746);
let tq = "1552821538409939044";
var tZ = l(175213);
let t0 = l(892799);
function t1(e) {
    let { ref: t } = e,
        { game: l } = F(),
        n = (function (e) {
            let [t] = r.useState(() => Math.random());
            return r.useMemo(() => {
                let l = e.getBannerURL(1400);
                if (null != l) return l;
                let n = e.screenshotUrls?.length ?? 0;
                return 0 === n ? null : e.getScreenshotURL(Math.floor(t * n), 1400);
            }, [1400, e, t]);
        })(l);
    return (0, tr.uJ)(n)
        ? null
        : (0, s.jsxs)("div", {
              ref: t,
              children: [
                  (0, s.jsx)("div", { className: tZ.y1, style: { backgroundImage: `url("${n}")` } }),
                  (0, s.jsx)("div", { className: tZ.N4 }),
              ],
          });
}
function t8() {
    let { game: e } = F(),
        t = (e.genres ?? []).map(t$.du).join(", ");
    return (0, tr.uJ)(t) ? null : (0, s.jsx)(W.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function t3(e) {
    let { rank: t } = e;
    return (0, s.jsxs)("div", {
        className: tZ.Qc,
        children: [
            (0, s.jsx)(tz.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, s.jsx)(W.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eh.intl.formatToPlainString(eh.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t6() {
    let { game: e } = F();
    return (0, s.jsx)(t2, { className: d()(tZ._M, (0, tQ.cO)(e) && tZ.i3), imageClassName: tZ.xe });
}
function t2(e) {
    let { className: t, imageClassName: l } = e,
        { game: n } = F(),
        i = (0, s.jsx)(tQ.Ay, { game: n, className: l, size: tQ.wu.LARGE });
    return n.id !== tq
        ? (0, s.jsx)("div", { className: t, children: i })
        : (0, s.jsx)(t4, { className: t, children: i });
}
function t4(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = r.useContext(tK.x),
        i = (0, m.bG)([tX.Ay], () => tX.Ay.useReducedMotion),
        a = r.useRef({ count: 0, lastTime: 0 });
    return (0, s.jsx)(tH.D, {
        className: d()(l, tZ.b3),
        "aria-label": eh.intl.string(eh.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                l = a.current,
                s = t - l.lastTime > 1e4 ? 1 : l.count + 1;
            if (((a.current = { count: s, lastTime: t }), 3 === s)) {
                if (((a.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    n(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tJ.Ak)("discodo");
            }
        },
        children: t,
    });
}
let t5 = function () {
    let { game: e, isTwoColumn: t } = F(),
        l = e.name;
    return (0, s.jsxs)("div", {
        className: tZ.ap,
        children: [
            t && (0, s.jsx)(t2, { className: d()(tZ.Tf, (0, tQ.cO)(e) && tZ.wS), imageClassName: tZ.w$ }),
            (0, s.jsxs)("div", {
                className: tZ.lu,
                children: [
                    null != e.l30Rank && (0, s.jsx)(t3, { rank: e.l30Rank }),
                    (0, s.jsxs)("div", {
                        className: tZ.$,
                        children: [
                            (0, s.jsx)(tl.D, { variant: "heading-xxl/semibold", children: l }),
                            e.id === tq &&
                                (0, s.jsx)("img", {
                                    src: t0,
                                    className: tZ.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, s.jsx)(t8, {}),
                ],
            }),
        ],
    });
};
var t9 = l(792216),
    t7 = l(638495),
    le = l(871123),
    lt = l(439303),
    ll = l(317560),
    ln = l(467884),
    li = l(480713),
    la = l(449543),
    ls = l(197935),
    lr = l(761812);
function lc(e) {
    return e;
}
function lo(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: lr.B, children: t });
}
function ld(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, li.l)("social_layer_storefront_card_row"),
        a = r.useMemo(() => {
            if (null != n)
                return (e, t) => {
                    let { skuId: l, applicationId: i } = t;
                    (e.preventDefault(), n(l, i));
                };
        }, [n]);
    return null == t || 0 === t.length
        ? null
        : i
          ? (0, s.jsx)(ls.A, {
                gap: "md",
                "aria-label": `${eh.intl.string(eh.t["kocF+6"])}`,
                items: t,
                getItemKey: lc,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, s.jsx)(lo, {
                        children: (0, s.jsx)(ln.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: ln.s6.SMALL,
                            analyticsLocations: l,
                            onClick: a,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, s.jsx)(la.A, {
                gap: "md",
                "aria-label": eh.intl.string(eh.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, s.jsx)(
                        lo,
                        {
                            children: (0, s.jsx)(ln.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: ln.s6.SMALL,
                                analyticsLocations: l,
                                onClick: a,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var lu = l(369435);
function lm(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: d()(lu.n, { [lu.C]: 16 === l }), children: t });
}
var lx = l(936785),
    lh = l(403581),
    lg = l(812095),
    lf = l(647474),
    lj = l(162536);
function lp(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eB.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        a = i ? lh.t : t.Icon;
    return (0, s.jsx)(lf.A, {
        className: d()(lj.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, s.jsxs)("div", {
            className: lj.Qs,
            children: [
                null != a && (0, s.jsx)(a, { size: "xs", color: "currentColor", className: lj.Kk }),
                (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "currentColor", children: (0, lg.U)(t.text) }),
            ],
        }),
    });
}
var lv = l(521058);
function lE() {
    let { storefrontPromotion: e } = F();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, tr.uJ)(a.headerText)) return null;
    let r = {
        Icon: (0, lx.LZ)(n?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, lx.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, s.jsx)(lp, { className: lv.v, promotion: r });
}
let lA = [0, 1, 2, 3],
    lI = { placement: lt.Ye.GAME_PROFILE };
function lN() {
    return (0, s.jsx)(tg, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, s.jsx)(lm, { children: lA.map((e) => (0, s.jsx)(lo, { children: (0, s.jsx)(ln.yf, {}) }, e)) }),
    });
}
function lS(e) {
    let { selectTab: t } = e,
        l = (0, t7.k)(),
        {
            trackAction: n,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: a,
            hasCommerceTab: c,
            closeModal: o,
        } = F(),
        { analyticsLocations: d } = (0, j.Ay)([f.A.GAME_PROFILE]),
        u = r.useCallback(() => {
            if (i?.application != null) {
                if (c) return void t(y.COMMERCE);
                (n(T.GameProfileTrackActionActions.GameShop),
                    o(),
                    (0, es.default)({ applicationId: i.application.id }));
            }
        }, [i, n, c, t, o]),
        m = r.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (n(T.GameProfileTrackActionActions.GameShopItem),
                    (0, ll.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: d,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, le.rG)(e, l, t, a) && o();
                        },
                    }));
            },
            [n, o, d, i, l],
        );
    if (a) return (0, s.jsx)(lN, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, s.jsxs)(tf, {
        title: eh.intl.string(eh.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, s.jsx)(lE, {}),
            (0, s.jsx)(lt.E9, {
                newValue: lI,
                children: (0, s.jsx)(ld, { skuIds: x, analyticsLocations: d, onCardClick: m }),
            }),
        ],
    });
}
var lC = l(621466),
    lb = l(966697),
    lT = l(346055),
    ly = l(460905),
    lk = l(776231),
    lR = l(46054),
    lL = l(58703),
    lG = l(155718),
    lM = l(387408),
    lO = l(731068),
    lP = l(59318),
    l_ = l(320095),
    lw = l(708676),
    lD = l(383233),
    lV = l(998218);
let lF = /^#{1,3}\s+(.+)$/,
    lU = /^https?:\/\/\S+$/;
var lY = l(60465),
    lW = l(158390),
    lB = l(103348),
    lz = l(371794);
let lH = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function lX(e) {
    tn.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, lz.aP)({
                    url: eL.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: b.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(lB.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (tn.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            tn.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        tn.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function lK(e) {
    let t = ((await ty.Bo.get({ url: eL.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !lH.has(t),
    );
    tn.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let lJ = (0, m.UT)(k.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => k.A.getSimilarGames(e) ?? null,
    load: (e) => lK(e),
    retryConfig: { backoff: () => new lW.A(5 * tP.A.Millis.SECOND, 5 * tP.A.Millis.MINUTE) },
    failureStaleAfter: tP.A.Seconds.MINUTE,
});
async function l$(e, t) {
    tn.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await ty.Bo.get({ url: eL.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        tn.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, lM.A)((0, l_.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, lD._c)(e))
                            return e.components
                                .filter((e) => e.type === lG.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || lU.test(t.trim())
                            ? ((function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return null;
                                  let l = [];
                                  return (
                                      null != t.rawTitle && l.push(`# ${t.rawTitle}`),
                                      null != t.rawDescription && l.push(t.rawDescription),
                                      l.length > 0 ? l.join("\n") : null
                                  );
                              })(e) ?? t)
                            : t;
                    })(n),
                    s = (function (e) {
                        if ((0, lD._c)(e)) {
                            let t = e.components.find((e) => e.type === lG.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, lO.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, lP.tT)(e.content_type));
                        if (null != t) return (0, lO.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, lP.XB)(e.content_type));
                        if (null != l) return (0, lO.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, lO.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, lO.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, lO.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(n),
                    { title: r, body: c } =
                        ((t = a.indexOf("\n")),
                        (l = (-1 === t ? a : a.slice(0, t)).match(lF)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    d =
                        a === i || (0, lD._c)(n)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let l = t.author?.name,
                                      n = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = t.color ?? void 0;
                                  if (null != l || null != i || null != s)
                                      return {
                                          authorName: l,
                                          authorIconUrl: n,
                                          providerName: i,
                                          providerIconUrl: a,
                                          url: s,
                                          color: r,
                                      };
                              })(n);
                return {
                    id: n.id,
                    media: s,
                    title: r,
                    body: c,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: o,
                    embedSource: d,
                    poll: n.poll,
                };
            }),
            channelId: n.channel_id ?? void 0,
            guildId: n.guild_id ?? void 0,
        });
    } catch (t) {
        tn.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var lQ = l(284009),
    lq = l.n(lQ),
    lZ = l(376728),
    l0 = l(976860);
async function l1(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    lq()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = e8.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(eL.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e3.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: eL.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await lZ.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, l0.pX)(eL.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var l8 = l(806244),
    l3 = l(165648);
function l6(e, t) {
    return lR.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function l2(e) {
    return e.id;
}
function l4() {
    return (0, s.jsxs)(e5, {
        className: l8.s7,
        children: [
            (0, s.jsx)(e4, { className: l8.o$ }),
            (0, s.jsxs)("div", {
                className: l8.UF,
                children: [(0, s.jsx)(e4, { className: l8.iX }), (0, s.jsx)(e4, { className: l8.jt })],
            }),
        ],
    });
}
function l5(e, t) {
    var l;
    let n,
        i = (0, lk.kr)(364 * (0, lk.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = lV.A.toURLSafe(e))
            ? null
            : (n.searchParams.append("format", "webp"),
              null != i && n.searchParams.append("width", i.toString()),
              null != l && n.searchParams.append("height", l.toString()),
              n.toString())) ?? e
    );
}
function l9(e) {
    let { message: t, src: l, aspectRatio: n } = e,
        [i, a] = r.useState(!1),
        c = r.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, s.jsx)(lb.y, {
              readyState: i ? eL.Rv1.READY : eL.Rv1.LOADING,
              aspectRatio: n,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, s.jsx)("img", {
                  src: l,
                  className: l8.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function l7(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lC.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lC.vq)(e.target, HTMLSpanElement) && (0, lC.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? l5(o, c) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, s.jsx)(tH.D, {
              ...i,
              className: l8.Nr,
              onClick: a,
              children: (0, s.jsxs)(lT.M, {
                  className: l8.zI,
                  children: [
                      null != m.url &&
                          (0, s.jsx)(W.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: l8.Ow,
                              children: m.url,
                          }),
                      (0, s.jsxs)("div", {
                          className: l8._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, s.jsxs)("div", {
                                      className: l8.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, s.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: l8.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, s.jsx)(W.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != u &&
                                  (0, s.jsx)("div", {
                                      className: l8.ax,
                                      children: (0, s.jsx)(l9, { message: t, src: u, aspectRatio: c }),
                                  }),
                              null != t.title &&
                                  (0, s.jsx)(tl.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: l8.DD,
                                      children: l6(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, s.jsxs)("div", {
                                      className: d()(l8.h_, l3.PT),
                                      children: [l6(t.body, l), (0, s.jsx)("div", { className: l8.fm })],
                                  }),
                              (0, s.jsxs)("div", {
                                  className: l8.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, s.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: l8.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, s.jsxs)(W.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, lL.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, s.jsxs)("div", {
                                              className: l8.a5,
                                              children: [
                                                  (0, s.jsx)(ly.n, { size: "xs", color: "currentColor" }),
                                                  (0, s.jsx)(W.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eh.intl.currentLocale).format(
                                                          t.reactionCount,
                                                      ),
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
let ne = r.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, s.jsxs)(lT.M, {
        className: l8.zI,
        children: [
            null != t.title &&
                (0, s.jsx)(tl.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l8.DD,
                    children: l6(t.title, l),
                }),
            t.body.length > 0 &&
                (0, s.jsxs)("div", {
                    className: d()(l8.h_, l3.PT),
                    children: [l6(t.body, l), (0, s.jsx)("div", { className: l8.fm })],
                }),
            (0, s.jsxs)("div", {
                className: l8.ov,
                children: [
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, lL.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, s.jsxs)("div", {
                            className: l8.a5,
                            children: [
                                (0, s.jsx)(ly.n, { size: "xs", color: "currentColor" }),
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(eh.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function nt(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lC.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lC.vq)(e.target, HTMLSpanElement) && (0, lC.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? l5(o, c) : void 0;
    return (0, s.jsxs)(tH.D, {
        ...i,
        className: l8.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != d &&
                (0, s.jsx)("div", {
                    className: l8.Vl,
                    children: (0, s.jsx)(l9, { message: t, src: d, aspectRatio: c }),
                }),
            (0, s.jsx)(ne, { message: t, channelId: l }),
        ],
    });
}
function nl(e) {
    let { message: t, onCardClick: l, listItemProps: n } = e,
        { poll: i } = t,
        a = r.useCallback(() => l(t.id), [l, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, s.jsx)(tH.D, {
        ...n,
        className: l8.Nr,
        onClick: a,
        children: (0, s.jsxs)(lT.M, {
            className: l8.zI,
            children: [
                (0, s.jsx)(tl.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l8.MH,
                    children: i.question.text,
                }),
                (0, s.jsxs)("div", {
                    className: l8.xd,
                    children: [
                        c.map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: l8.Nf,
                                    children: (0, s.jsx)(W.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: l8.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, s.jsx)(W.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: l8.PF,
                                children: eh.intl.format(eh.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: l8.ov,
                    children: (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eh.intl.format(eh.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, lw.J)(i.expiry) ?? eh.intl.string(eh.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function nn(e) {
    return null != e.message.poll
        ? (0, s.jsx)(nl, { ...e })
        : null != e.message.embedSource
          ? (0, s.jsx)(l7, { ...e })
          : (0, s.jsx)(nt, { ...e });
}
let ni = r.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: l } = (0, j.Ay)(),
        { game: n, invite: i, hasDiscordWebsite: a, closeModal: c, trackAction: o } = F(),
        d = n.id,
        {
            messages: u,
            guildId: x,
            channelId: h,
            loading: g,
            hasFetched: f,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, m.cf)([k.A], () => ({
                data: null != e ? k.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && k.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && k.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, r.useEffect)(() => {
                    null == e || l || k.A.isAnnouncementsFetching(e) || l$(e, { limit: 8 });
                }, [e, l, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n, hasFetched: l }
            );
        })(d),
        p = (0, li.l)("game_profile_announcements"),
        v = r.useCallback(() => {
            let e = i?.guild?.id ?? x;
            null != e &&
                null != h &&
                (o(T.GameProfileTrackActionActions.Announcements),
                lY.default.setGameProfilePendingReturn({ gameId: d, channelId: h, initialScrollOffset: t() }),
                c(),
                l1({ invite: i, guildId: e, channelId: h, analyticsLocationStack: l }));
        }, [o, c, t, i, x, h, l, d]),
        E = r.useCallback(
            (e) => {
                let n = i?.guild?.id ?? x;
                null != n &&
                    null != h &&
                    (o(T.GameProfileTrackActionActions.AnnouncementsItem),
                    lY.default.setGameProfilePendingReturn({ gameId: d, channelId: h, initialScrollOffset: t() }),
                    c(),
                    l1({ invite: i, guildId: n, channelId: h, messageId: e, analyticsLocationStack: l }));
            },
            [o, c, t, i, x, h, l, d],
        ),
        A = null != h && u.length > 0;
    return (!f || g) && a
        ? (0, s.jsx)(tg, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, s.jsx)(lm, {
                  gap: 16,
                  children: eZ()
                      .range(3)
                      .map((e) => (0, s.jsx)(l4, {}, e)),
              }),
          })
        : A
          ? (0, s.jsx)(tf, {
                title: eh.intl.string(eh.t.B0BV3Y),
                onClickViewAll: v,
                children: p
                    ? (0, s.jsx)(ls.A, {
                          gap: 16,
                          items: u,
                          getItemKey: l2,
                          itemClassName: l8.hu,
                          renderItem: (e, t) =>
                              (0, s.jsx)(nn, { message: e, channelId: h, onCardClick: E, listItemProps: t }, e.id),
                      })
                    : (0, s.jsx)(la.A, {
                          gap: 16,
                          children: u.map((e) => (0, s.jsx)(nn, { message: e, channelId: h, onCardClick: E }, e.id)),
                      }),
            })
          : null;
});
var na = l(28863),
    ns = l(975807),
    nr = l(194362);
function nc() {
    let { game: e, trackAction: t } = F(),
        l = r.useCallback(async () => {
            t(T.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, nr.a)(eL.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, ns.A)(e);
        }, [t]),
        n = r.useCallback((e) => (0, s.jsx)(na.Anchor, { onClick: l, children: e }), [l]);
    return e.linkedApplications?.some((e) => e.type === lG.Mh.OFFICIAL)
        ? null
        : (0, s.jsx)(W.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eh.intl.format(eh.t.KAjfKl, { claimLink: n }),
          });
}
var no = l(505779),
    nd = l(998445),
    nu = l(274997),
    nm = l(80500),
    nx = l(319745),
    nh = l(488225),
    ng = l(967492),
    nf = l(72265),
    nj = l(454346),
    np = l(37948),
    nv = l(693558);
let nE = { size: "xs", colorClass: nv.w };
function nA(e) {
    let { website: t } = e,
        { trackAction: l } = F(),
        n = (0, np.A)(),
        {
            action: i,
            icon: a,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case no.V.OFFICIAL:
                    return {
                        icon: (0, s.jsx)(nd.GlobeEarthIcon, { ...t }),
                        action: T.GameProfileTrackActionActions.WebsiteLink,
                        title: eh.intl.string(eh.t.fOUKvg),
                    };
                case no.V.TWITTER:
                    return {
                        icon: (0, s.jsx)(nu.p, { ...t }),
                        action: T.GameProfileTrackActionActions.XLink,
                        title: eh.intl.string(eh.t.INic4y),
                    };
                case no.V.YOUTUBE:
                    return {
                        action: T.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, s.jsx)(nm.C, { ...t }),
                        title: eh.intl.string(eh.t.lNmxbE),
                    };
                case no.V.FACEBOOK:
                    return {
                        icon: (0, s.jsx)(nx.Z, { ...t }),
                        action: T.GameProfileTrackActionActions.FacebookLink,
                        title: eh.intl.string(eh.t.FjyREK),
                    };
                case no.V.INSTAGRAM:
                    return {
                        icon: (0, s.jsx)(nh.L, { ...t }),
                        action: T.GameProfileTrackActionActions.InstagramLink,
                        title: eh.intl.string(eh.t["cgR+IK"]),
                    };
                case no.V.BLUESKY:
                    return {
                        icon: (0, s.jsx)(ng.a, { ...t }),
                        action: T.GameProfileTrackActionActions.BlueskyLink,
                        title: eh.intl.string(eh.t["D/PHq5"]),
                    };
                case no.V.REDDIT:
                    return {
                        icon: (0, s.jsx)(nf.T, { ...t }),
                        action: T.GameProfileTrackActionActions.RedditLink,
                        title: eh.intl.string(eh.t["Hgb+fc"]),
                    };
                case no.V.TWITCH:
                    return {
                        icon: (0, s.jsx)(nj.a, { ...t }),
                        action: T.GameProfileTrackActionActions.TwitchLink,
                        title: eh.intl.string(eh.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, nE),
        o = r.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, s.jsx)(q.m, {
        text: c,
        children: (0, s.jsx)(tH.D, { onClick: o, className: nv.y, title: c, children: a }),
    });
}
var nI = l(808380),
    nN = l(31300),
    nS = l(802516),
    nC = l(22363),
    nb = l(418524);
function nT(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case nI.Y.DESKTOP:
            return (0, s.jsx)(nN.k, { size: "xs", ...l });
        case nI.Y.XBOX:
            return (0, s.jsx)(nS.Y, { size: "xs", ...l });
        case nI.Y.PLAYSTATION:
            return (0, s.jsx)(nC.X, { size: "xs", ...l });
        case nI.Y.NINTENDO:
            return (0, s.jsx)(nb.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function ny(e) {
    let { platform: t } = e;
    return (0, s.jsx)(
        q.m,
        {
            text: (function (e) {
                switch (e) {
                    case nI.Y.DESKTOP:
                        return eh.intl.string(eh.t.KT6uCJ);
                    case nI.Y.XBOX:
                        return eh.intl.string(eh.t.DDWUJp);
                    case nI.Y.PLAYSTATION:
                        return eh.intl.string(eh.t.fzMz2s);
                    case nI.Y.NINTENDO:
                        return eh.intl.string(eh.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, s.jsx)(nT, { platform: t }),
        },
        t,
    );
}
let nk = [nI.Y.DESKTOP, nI.Y.XBOX, nI.Y.PLAYSTATION, nI.Y.NINTENDO];
var nR = l(424994),
    nL = l(623828);
function nG() {
    return (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "text-subtle", children: eh.intl.string(eh.t.GruYxV) });
}
let nM = function () {
    let { game: e } = F(),
        t = (0, ti.c)("GameProfileGameDetails"),
        l = r.useMemo(() => e.genres.map(t$.du).join(", "), [e]),
        n = e.getCompanyByRole(lG.wk.PUBLISHER),
        i = e.getCompanyByRole(lG.wk.DEVELOPER),
        a = n.map((e) => e.name).join(", "),
        c = i.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        d = r.useMemo(() => {
            let t = new Set(e.platforms),
                l = [...t];
            return (
                !t.has(nI.Y.DESKTOP) && (t.has(nI.Y.MACOS) || t.has(nI.Y.LINUX)) && l.push(nI.Y.DESKTOP),
                l.filter((e) => nk.includes(e)).sort((e, t) => nk.indexOf(e) - nk.indexOf(t))
            );
        }, [e.platforms]),
        u = (e?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return no.p.includes(t);
            })
            .sort((e, t) => no.p.indexOf(e.category) - no.p.indexOf(t.category)),
        m = !(0, tr.uJ)(l),
        x = !(0, tr.uJ)(a),
        h = !(0, tr.uJ)(c),
        g = !(0, tr.uJ)(o),
        f = d.length > 0,
        j = u.length > 0 && !u.every((e) => (0, tr.uJ)(e.url));
    return (0, s.jsxs)("div", {
        className: nL.uW,
        children: [
            (0, s.jsx)("div", {
                className: nL.Gf,
                children: (0, s.jsx)(tl.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: eh.intl.string(eh.t["7OjmmH"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: nL.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: nL.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? eh.intl.string(eh.t.pDgwYB) : eh.intl.string(eh.t.mjFKqn),
                            }),
                            m
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nL.Gu,
                                      children: l,
                                  })
                                : (0, s.jsx)(nG, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nL.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? eh.intl.string(eh.t.Hc7Enk) : eh.intl.string(eh.t["4Byy/G"]),
                            }),
                            x
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nL.Gu,
                                      children: a,
                                  })
                                : (0, s.jsx)(nG, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nL.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== i.length ? eh.intl.string(eh.t.KATEJB) : eh.intl.string(eh.t.na3PT0),
                            }),
                            h
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nL.Gu,
                                      children: c,
                                  })
                                : (0, s.jsx)(nG, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nL.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eh.intl.string(eh.t.H3mPDT),
                            }),
                            g
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nL.Gu,
                                      children: lL.i$(new Date(o), "LL"),
                                  })
                                : (0, s.jsx)(nG, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nL.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? eh.intl.string(eh.t.PNqxNe) : eh.intl.string(eh.t["UxAag+"]),
                            }),
                            f
                                ? (0, s.jsx)("div", {
                                      className: nL.Gu,
                                      children: d.map((e) => (0, s.jsx)(ny, { platform: e }, e)),
                                  })
                                : (0, s.jsx)(nG, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nL.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eh.intl.string(eh.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, s.jsx)("div", {
                                      className: nL.Gu,
                                      children: u.map((e) => (0, s.jsx)(nA, { website: e }, e.url)),
                                  })
                                : (0, s.jsx)(nG, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nL.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eh.intl.string(eh.t["BwQ+9e"]),
                            }),
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: nL.Gu,
                                children: eh.intl.format(eh.t.XPFZVl, { igdbLink: nR.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: nL.OQ, children: (0, s.jsx)(nc, {}) }),
        ],
    });
};
var nO = l(141628),
    nP = l(289363),
    n_ = l(793919);
function nw() {
    return (0, s.jsxs)("div", {
        "aria-hidden": !0,
        className: n_.uW,
        children: [
            (0, s.jsx)(e4, { className: n_.dU, width: "30%" }),
            (0, s.jsxs)(e5, {
                className: n_.nV,
                children: [
                    (0, s.jsx)("div", { className: n_.sB, children: (0, s.jsx)(nP.default, { isLoading: !0 }) }),
                    (0, s.jsxs)("div", {
                        className: n_.hQ,
                        children: [
                            (0, s.jsxs)("div", {
                                className: n_.Yv,
                                children: [(0, s.jsx)(e4, { width: "55%" }), (0, s.jsx)(e4, { width: "85%" })],
                            }),
                            (0, s.jsx)(e9, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nD(e) {
    let { analyticsLocations: t } = e,
        l = (0, ti.c)("GameProfileLinkAccount"),
        {
            trackAction: n,
            fetchedAuthorization: i,
            hasAlreadyLinked: a,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: d,
            hasOfficialApplication: u,
            officialApplicationFetchFailed: x,
        } = F(),
        h = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        g = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !u || x || null == h
        ? null
        : null == d || (c && !i)
          ? (0, s.jsx)(nw, {})
          : !c || a
            ? null
            : (0, s.jsxs)("div", {
                  className: n_.uW,
                  children: [
                      (0, s.jsx)(tl.D, {
                          className: n_.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eh.intl.string(eh.t["VDAhr+"]),
                      }),
                      (0, s.jsxs)("div", {
                          className: n_.kL,
                          children: [
                              (0, s.jsx)("div", {
                                  className: n_.sB,
                                  children: (0, s.jsx)(nP.default, { application: d }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: n_.hQ,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: n_.FS,
                                          children: [
                                              (0, s.jsx)(tl.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: eh.intl.formatToPlainString(eh.t.hUbQT2, {
                                                      gameName: d.name,
                                                  }),
                                              }),
                                              (0, s.jsx)(W.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: eh.intl.string(eh.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, s.jsx)($.$, {
                                          variant: "secondary",
                                          icon: nO.A,
                                          text: eh.intl.string(eh.t.jynBQ5),
                                          onClick: g,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
}
var nV = l(635377),
    nF = l.n(nV),
    nU = l(80687),
    nY = l(534573),
    nW = l(248643),
    nB = l(256905),
    nz = l(684519),
    nH = l(191096),
    nX = l(90721),
    nK = l(140128);
function nJ(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function n$(e, t) {
    return (0, nY.Ec)(e, { size: t, keepAspectRatio: !0, format: ts.QB ? "webp" : null });
}
let nQ = new (nF())({ max: 100 }),
    nq = r.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, a] = r.useState(null),
            c = null != i && i.url === t ? i.isPortrait : (nQ.get(t) ?? !1),
            o = r.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (nQ.set(t, l),
                        a((e) => (null != e && e.url === t && e.isPortrait === l ? e : { url: t, isPortrait: l })));
                },
                [t],
            ),
            u = r.useCallback((e) => o(e.currentTarget), [o]);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("img", {
                    ref: o,
                    src: n$(t, 106),
                    className: d()(nK.r4, !c && nK.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, s.jsx)("img", { ref: o, src: n$(t, 900), className: d()(nK.c8, c && nK.D7, n), alt: l, onLoad: u }),
            ],
        });
    }),
    nZ = r.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: a, onSelect: c, gameName: o, listItemProps: u } = e,
            m = r.useCallback(() => c(n), [c, n]),
            x = u?.tabIndex;
        return (0, s.jsx)(tH.D, {
            ...u,
            className: d()(nK.JS, i && nK.Y4),
            onClick: m,
            children: (0, s.jsxs)("div", {
                className: nK.ub,
                children: [
                    (0, s.jsx)("img", {
                        src: n$("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nK.xn,
                        alt: eh.intl.formatToPlainString(eh.t.COYYrn, { game: o }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, s.jsx)("div", {
                            className: nK.UZ,
                            children: (0, s.jsx)(nU.D, { playing: i && a, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    n0 = r.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                autoPlay: n,
                videoRef: i,
                mediaPlayerRef: a,
                onPlay: c,
                onPause: o,
                onFullscreenChange: d,
            } = e,
            u = r.useRef(null);
        return (
            (0, nX.A)({ videoRef: i, canvasRef: u, enabled: !l }),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    !l && (0, s.jsx)("canvas", { ref: u, className: nK.HW, "aria-hidden": "true" }),
                    (0, s.jsx)("div", {
                        className: nK.tN,
                        children: (0, s.jsx)(nW.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: n,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: nz.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: nK.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function n1() {
    let { game: e, trackAction: t } = F(),
        [l, n] = r.useState(0),
        [i, a] = r.useState(null),
        [c, o] = r.useState(e.screenshotUrls),
        d = r.useRef(null),
        u = r.useRef(null),
        x = (0, m.bG)([tX.Ay], () => tX.Ay.useReducedMotion),
        { obscured: h } = (0, nH.I3)(),
        g = (0, li.l)("game_profile_media");
    c !== e.screenshotUrls && (o(e.screenshotUrls), n(0));
    let f = r.useMemo(
            () => [
                ...(e.trailers ?? []).map((e) => {
                    let t = (0, lz.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, lz.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(e.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [e.trailers, e.screenshotUrls],
        ),
        j = r.useMemo(() => f.map((e, t) => ({ item: e, index: t })), [f]),
        p = f.length > 0 ? Math.min(l, f.length - 1) : 0,
        v = f[p],
        E = v?.type === "VIDEO",
        A = r.useCallback(
            (e) => {
                let t = f[p],
                    l = f[e];
                (t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? a(t.url) : a(null), n(e));
            },
            [f, p],
        ),
        [I, N] = r.useState(!1),
        S = r.useRef(null),
        C = r.useCallback(() => {
            t(E ? T.GameProfileTrackActionActions.ClickTrailer : T.GameProfileTrackActionActions.ClickImage);
            let e = d.current,
                l = S.current,
                i = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            l?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === p;
                    return { ...e, autoPlay: !!l && i, autoMute: !l || a, initialTimeSec: l ? s : void 0, videoRef: u };
                }
                return e;
            });
            (0, nB.R)({
                items: r,
                startingIndex: p,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: n,
                onClose: () => {
                    let e = u.current,
                        t = S.current,
                        l = null != e ? !e.paused : i;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        N(l));
                },
            });
        }, [t, f, p, E]),
        b = r.useCallback(() => N(!0), []),
        y = r.useCallback(() => N(!1), []),
        k = r.useCallback(() => a(null), []),
        R = r.useCallback(
            (e) => {
                e && C();
            },
            [C],
        );
    return 0 === f.length
        ? null
        : (0, s.jsxs)("div", {
              className: nK.kL,
              children: [
                  E
                      ? (0, s.jsx)("div", {
                            className: nK.ND,
                            children: (0, s.jsx)(
                                n0,
                                {
                                    item: v,
                                    reducedMotion: x,
                                    autoPlay: !x && !h,
                                    videoRef: d,
                                    mediaPlayerRef: S,
                                    onPlay: b,
                                    onPause: y,
                                    onFullscreenChange: R,
                                },
                                `${p}-${v.url}`,
                            ),
                        })
                      : (0, s.jsxs)("div", {
                            className: nK.wp,
                            children: [
                                null != i &&
                                    !x &&
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: nK.Jy,
                                            onAnimationEnd: k,
                                            children: (0, s.jsx)(nq, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, s.jsx)("div", { className: nK.QN }),
                                (0, s.jsx)(tH.D, {
                                    className: nK.gv,
                                    onClick: C,
                                    children: (0, s.jsx)("div", {
                                        className: nK.cs,
                                        children: (0, s.jsx)(
                                            nq,
                                            {
                                                url: v.url,
                                                className: nK.Jf,
                                                alt: eh.intl.formatToPlainString(eh.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  g
                      ? (0, s.jsx)(ls.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: j,
                            getItemKey: nJ,
                            renderItem: (t, l) => {
                                let { item: n, index: i } = t;
                                return (0, s.jsx)(
                                    nZ,
                                    {
                                        item: n,
                                        index: i,
                                        isPlaying: I,
                                        isSelected: i === p,
                                        onSelect: A,
                                        gameName: e.name,
                                        listItemProps: l,
                                    },
                                    `${i}-${n.url}`,
                                );
                            },
                        })
                      : (0, s.jsx)(la.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: f.map((t, l) =>
                                (0, s.jsx)(
                                    nZ,
                                    {
                                        item: t,
                                        index: l,
                                        isPlaying: I,
                                        isSelected: l === p,
                                        onSelect: A,
                                        gameName: e.name,
                                    },
                                    `${l}-${t.url}`,
                                ),
                            ),
                        }),
              ],
          });
}
var n8 = l(49381),
    n3 = l(223273);
function n6(e, t, l) {
    if (null == e || null == t || t < 10) return n3.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? n3.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? n3.vI.VERY_POSITIVE
              : n3.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return n3.vI.MOSTLY_POSITIVE;
    if (e >= 40) return n3.vI.MIXED;
    if (e >= 20) return n3.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return n3.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return n3.vI.VERY_NEGATIVE;
    return n3.vI.OVERWHELMINGLY_NEGATIVE;
}
function n2(e) {
    switch (e) {
        case n3.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case n3.vI.OVERWHELMINGLY_POSITIVE:
        case n3.vI.VERY_POSITIVE:
        case n3.vI.POSITIVE:
        case n3.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case n3.vI.MIXED:
            return "steam-review-text-mixed";
        case n3.vI.MOSTLY_NEGATIVE:
        case n3.vI.NEGATIVE:
        case n3.vI.VERY_NEGATIVE:
        case n3.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var n4 =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    n5 = l(778591);
function n9(e) {
    let { rating: t, strokeColor: l } = e,
        n = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        a = i * n;
    return (0, s.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - i) * 360) / 2}deg)` },
        children: (0, s.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: l,
            strokeWidth: 2.4,
            strokeDasharray: `${a} ${n - a}`,
        }),
    });
}
var n7 = l(315189);
function ie(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: c } = F(),
        o = (0, np.A)(),
        d = n6(n, i, "recent" === a),
        u = n2(d),
        m = r.useCallback(() => {
            (c(T.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, c, t]);
    return (0, s.jsx)(tH.D, {
        onClick: m,
        className: n7.nf,
        role: "link",
        "aria-label": eh.intl.string(eh.t.YNC5Di),
        children: (0, s.jsxs)("div", {
            className: n7.U6,
            children: [
                (0, s.jsxs)("div", {
                    className: n7.tN,
                    children: [
                        (0, s.jsx)(n8.N, { size: "sm", color: ew.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(tl.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, s.jsx)(
                    q.m,
                    {
                        text:
                            d === n3.vI.NO_USER_REVIEWS
                                ? eh.intl.string(eh.t.CLMt8J)
                                : eh.intl
                                      .format(
                                          "recent" === a
                                              ? eh.t.TzvC0k
                                              : "localized" === a
                                                ? eh.t.EOfrwm
                                                : eh.t["lzANJ/"],
                                          { rating: n, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, s.jsxs)("div", {
                            className: n7.Z0,
                            children: [
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: n7.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case n3.vI.NO_USER_REVIEWS:
                                                return eh.intl.string(eh.t.CLMt8J);
                                            case n3.vI.OVERWHELMINGLY_POSITIVE:
                                                return eh.intl.string(eh.t["75sx1S"]);
                                            case n3.vI.VERY_POSITIVE:
                                                return eh.intl.string(eh.t["EkOVg+"]);
                                            case n3.vI.POSITIVE:
                                                return eh.intl.string(eh.t.ZUkFtr);
                                            case n3.vI.MOSTLY_POSITIVE:
                                                return eh.intl.string(eh.t.M7Z09a);
                                            case n3.vI.MIXED:
                                                return eh.intl.string(eh.t.c8yuHR);
                                            case n3.vI.MOSTLY_NEGATIVE:
                                                return eh.intl.string(eh.t.H0MSjG);
                                            case n3.vI.NEGATIVE:
                                                return eh.intl.string(eh.t.vpLrgz);
                                            case n3.vI.VERY_NEGATIVE:
                                                return eh.intl.string(eh.t["5spYuX"]);
                                            case n3.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eh.intl.string(eh.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != i &&
                                    d !== n3.vI.NO_USER_REVIEWS &&
                                    (0, s.jsx)(W.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eh.intl
                                            .format(eh.t.sgIoin, { rating_count: i.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${a}`,
                ),
            ],
        }),
    });
}
function it(e) {
    let { url: t } = e,
        { game: l, trackAction: n } = F(),
        { reviews: i } = l,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = a.tier,
        o = a.topCriticRating ?? -1,
        d = a.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, np.A)(),
        x = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, n, t]);
    return (0, s.jsx)(tH.D, {
        onClick: x,
        className: n7.nf,
        role: "link",
        "aria-label": eh.intl.string(eh.t.aLNBAw),
        children: (0, s.jsxs)("div", {
            className: n7.Ur,
            children: [
                (0, s.jsx)(tl.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eh.intl.string(eh.t["UxvER+"]),
                }),
                (0, s.jsxs)("div", {
                    className: n7.WA,
                    children: [
                        null != c ? (0, s.jsx)(il, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, s.jsx)(ii, { rating: o, tier: c }) : null,
                        u
                            ? (0, s.jsx)(W.E, {
                                  variant: "text-xs/medium",
                                  color: n2(n3.vI.NO_USER_REVIEWS),
                                  children: eh.intl.string(eh.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function il(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case n4.MIGHTY:
                    return eh.intl.string(eh.t.aZej2g);
                case n4.STRONG:
                    return eh.intl.string(eh.t.MLxnSg);
                case n4.FAIR:
                    return eh.intl.string(eh.t["3f19KA"]);
                case n4.WEAK:
                    return eh.intl.string(eh.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case n4.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case n4.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case n4.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case n4.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, s.jsx)(
        q.m,
        {
            text: l,
            children: (0, s.jsx)("div", {
                className: n7.TE,
                children: (0, s.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function ii(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case n4.MIGHTY:
                    t = "#fc430a";
                    break;
                case n4.STRONG:
                    t = "#9e00b4";
                    break;
                case n4.FAIR:
                    t = "#4aa1ce";
                    break;
                case n4.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, s.jsx)(
        q.m,
        {
            text: eh.intl.string(eh.t.Ub4YR1),
            children: (0, s.jsxs)("div", {
                className: n7.TE,
                style: { backgroundColor: i },
                children: [
                    (0, s.jsx)(n9, { rating: t, strokeColor: n }),
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: n7.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let ia = function () {
    let { game: e } = F(),
        t = (0, ti.c)("GameProfileReviews"),
        l = (0, n5.I)(e.id),
        n = e.opencriticUrl,
        i = e.steamReleaseStatus !== t9.Y.RETIRED_ABANDONED && null != l,
        a = e.reviews?.steam,
        r = n6(a?.recentRating, a?.recentRatingCount, !0),
        c = i && r !== n3.vI.NO_USER_REVIEWS,
        o =
            null != a &&
            null != a.localizedRating &&
            null != a.localizedRatingCount &&
            null != a.ratingCount &&
            a.localizedRatingCount >= 200 &&
            a.ratingCount >= 2e3,
        d = o ? a?.localizedRating : a?.rating,
        u = o ? a?.localizedRatingCount : a?.ratingCount,
        m = o ? eh.t["aWb+V4"] : eh.t["8e4LiB"],
        x = e.reviews?.opencritic != null && null != n;
    return i || c || x
        ? (0, s.jsxs)("div", {
              className: n7.uW,
              children: [
                  (0, s.jsx)("div", {
                      className: n7.Gf,
                      children: (0, s.jsx)(tl.D, {
                          variant: t ? "text-md/medium" : "heading-sm/semibold",
                          color: t ? "text-subtle" : "text-strong",
                          children: eh.intl.string(eh.t.GaAQXP),
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: n7.kL,
                      children: [
                          c && null != l
                              ? (0, s.jsx)("div", {
                                    className: n7.WH,
                                    children: (0, s.jsx)(ie, {
                                        url: l,
                                        title: eh.intl.string(eh.t.MQGNsN),
                                        rating: a?.recentRating,
                                        ratingCount: a?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          i && null != l
                              ? (0, s.jsx)("div", {
                                    className: n7.WH,
                                    children: (0, s.jsx)(ie, {
                                        url: l,
                                        title: eh.intl.string(m),
                                        rating: d,
                                        ratingCount: u,
                                        tooltipVariant: o ? "localized" : "all",
                                    }),
                                })
                              : null,
                          x && null != n
                              ? (0, s.jsx)("div", { className: n7.WH, children: (0, s.jsx)(it, { url: n }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var is = l(815996),
    ir = l(722258),
    ic = l(258245),
    io = l(561769),
    id = l(484469),
    iu = l(57020),
    im = l(682301);
let ix = [];
var ih = l(758836),
    ig = l(399872);
let ij = [0, 1, 2, 3, 4];
function ip(e) {
    return e.skuId;
}
function iv(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        a = r.useContext(io.v3),
        { trackAction: c } = F(),
        o = r.useRef(null),
        d = r.useCallback(
            (e) => {
                (c(T.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, ir.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, iu.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = a;
    return (0, s.jsx)(io.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, s.jsx)(ic.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: ig.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function iE() {
    return (0, s.jsx)(id.A, {});
}
function iA() {
    let { game: e, closeModal: t, trackAction: l } = F(),
        { products: n, isLoading: i } = (function (e) {
            let {
                    skuIds: t,
                    hasFetched: l,
                    isFetching: n,
                } = (function (e) {
                    let {
                        hasFetched: t,
                        isFetching: l,
                        skuIds: n,
                    } = (0, m.cf)([k.A], () => ({
                        hasFetched: null != e && k.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && k.A.isShopCollectionFetching(e),
                        skuIds: null != e ? k.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, r.useEffect)(() => {
                            null == e || t || k.A.isShopCollectionFetching(e) || lX(e);
                        }, [e, t]),
                        { skuIds: n ?? ix, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, im.hv)(t, { flattenVariants: !0 }),
                a = (0, r.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                s = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && s)) };
        })(e.shopCollectionIds?.[0]),
        a = r.useCallback(() => {
            (l(T.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, is.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: ih.G2.CATALOG,
                }));
        }, [l, t]),
        c = (0, li.l)("game_profile_shop_carousel");
    return i
        ? (0, s.jsx)(tg, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, s.jsx)(lm, { children: ij.map((e) => (0, s.jsx)(iE, {}, e)) }),
          })
        : 0 === n.length
          ? null
          : (0, s.jsx)(tf, {
                title: eh.intl.string(eh.t["5DYPT8"]),
                onClickViewAll: a,
                children: c
                    ? (0, s.jsx)(ls.A, {
                          gap: "md",
                          items: n,
                          getItemKey: ip,
                          renderItem: (e, t) => (0, s.jsx)(iv, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, s.jsx)(la.A, { gap: "md", children: n.map((e) => (0, s.jsx)(iv, { product: e }, e.skuId)) }),
            });
}
var iI = l(921138);
let iN = [],
    iS = [];
var iC = l(987070);
let ib = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iT(e) {
    return e.id;
}
function iy(e) {
    let { className: t } = e;
    return (0, s.jsx)(e5, { className: t, children: (0, s.jsx)(e4, { className: iC.Lg }) });
}
function ik(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = F(),
        a = t.getCoverURL(256),
        [c, o] = r.useState(null),
        d = null == a || c === a,
        { shouldOpenGameProfile: u, gameId: m } = (0, iI.Ay)({
            gameId: t.id,
            source: T.GameProfileSources.SimilarGames,
        }),
        x = r.useCallback(() => {
            (i(T.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                u && null != m && n(m, T.GameProfileSources.SimilarGames));
        }, [t.id, m, i, u, n]),
        h = r.useCallback(() => o(a), [a]);
    return (0, s.jsx)(q.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, s.jsxs)(tH.D, {
            ...l,
            className: iC.Nr,
            onClick: x,
            "aria-label": eh.intl.formatToPlainString(eh.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, s.jsx)(tQ.Ay, {
                    game: t,
                    className: iC.xe,
                    size: tQ.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !d && (0, s.jsx)(iy, { className: iC.uz }),
            ],
        }),
    });
}
function iR() {
    let { game: e } = F(),
        t = e.id,
        { isFetching: l, similarGames: n } = (function (e) {
            let t = !lH.has(e),
                { data: l, isLoading: n, error: i } = lJ(e, t),
                a = t && null != l ? l : iN;
            (0, N.x)(a);
            let s = (0, m.bG)(
                    [tT.A],
                    () => a.some((e) => null == tT.A.getGame(e) && !tT.A.hasNoData(e) && !tT.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [tT.A, D.default],
                    () => {
                        let e = D.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => tT.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, iI.T_)(t) && !(0, M.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: iS };
        })(t),
        i = (0, li.l)("game_profile_similar_games");
    return lH.has(t)
        ? null
        : l
          ? (0, s.jsx)(tg, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, s.jsx)("div", {
                    className: iC.XG,
                    style: ib,
                    children: (0, s.jsx)(lm, {
                        children: eZ()
                            .range(0, 8)
                            .map((e) => (0, s.jsx)(iy, { className: iC.aZ }, e)),
                    }),
                }),
            })
          : 0 === n.length
            ? null
            : (0, s.jsx)(tf, {
                  title: eh.intl.string(eh.t["6rLyQB"]),
                  children: (0, s.jsx)("div", {
                      className: iC.XG,
                      style: ib,
                      children: i
                          ? (0, s.jsx)(ls.A, {
                                gap: "md",
                                items: n,
                                getItemKey: iT,
                                itemClassName: iC.cW,
                                renderItem: (e, t) => (0, s.jsx)(ik, { game: e, listItemProps: t }, e.id),
                            })
                          : (0, s.jsx)(la.A, { gap: "md", children: n.map((e) => (0, s.jsx)(ik, { game: e }, e.id)) }),
                  }),
              });
}
l(667532);
var iL = l(853022);
let iG = new Set(["1402418703554842694", "356877880938070016"]),
    iM = [no.V.EPICGAMES, no.V.STEAM, no.V.ROBLOX, no.V.BATTLENET, no.V.RIOT, no.V.MINECRAFT];
function iO(e) {
    return (0, s.jsx)($.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iP = l(349361),
    i_ = l(924895),
    iw = l(422688),
    iD = l(505200),
    iV = l(695250);
let iF = function (e) {
    switch (e.category) {
        case no.V.STEAM:
            return {
                icon: n8.N,
                text: eh.intl.string(eh.t.FsANs4),
                ariaLabel: eh.intl.string(eh.t["P+ePTG"]),
                action: T.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case no.V.EPICGAMES:
            return {
                icon: iP.r,
                text: eh.intl.string(eh.t.ZbBMHa),
                ariaLabel: eh.intl.string(eh.t.BwX0UW),
                action: T.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case no.V.ROBLOX:
            return {
                icon: i_.H,
                text: eh.intl.string(eh.t["pJ+P+h"]),
                ariaLabel: eh.intl.string(eh.t.tYxpdf),
                action: T.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case no.V.BATTLENET:
            return {
                icon: iw.a,
                text: eh.intl.string(eh.t["A7grp+"]),
                ariaLabel: eh.intl.string(eh.t.x9at20),
                action: T.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case no.V.RIOT:
            return {
                icon: iD.A,
                text: eh.intl.string(eh.t.h6MapL),
                ariaLabel: eh.intl.string(eh.t["528nvc"]),
                action: T.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case no.V.MINECRAFT:
            return {
                icon: iV.m,
                text: eh.intl.string(eh.t["HZbmO+"]),
                ariaLabel: eh.intl.string(eh.t.WWTqYn),
                action: T.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: nS.Y,
                text: eh.intl.string(eh.t["QpN/Iz"]),
                ariaLabel: eh.intl.string(eh.t["8JZmmF"]),
                action: T.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var iU = l(242216);
function iY(e) {
    let t,
        l,
        n,
        i,
        a,
        s =
            ((t = (0, n5.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eL.d3x.XBOX_GAME_PASS && !(0, tr.uJ)(e.id));
                return t?.id == null ? null : (0, iL.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            r.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== no.V.EPICGAMES || !!iG.has(n)) &&
                            (e.category !== no.V.STEAM || a !== t9.Y.RETIRED_ABANDONED) &&
                            iM.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === t9.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === no.V.STEAM) ||
                    e.push({ category: no.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === no.V.STEAM ? -1 : +(t.category === no.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function iW(e) {
    let { data: t } = e,
        { trackAction: l } = F(),
        n = (0, np.A)();
    return (0, s.jsx)(iO, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let iB = function () {
    let { game: e, trackAction: t } = F(),
        { showsStoreLinks: n, storeWebsites: i } = iY(e),
        a = r.useMemo(() => i.map(iF).filter((e) => null != e), [i]);
    if (!n) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, s.jsx)(iW, { data: e });
    }
    if (2 === a.length)
        return (0, s.jsxs)("div", {
            className: iU.G,
            children: [(0, s.jsx)(iW, { data: a[0] }), (0, s.jsx)(iW, { data: a[1] })],
        });
    let c = (0, s.jsx)(iO, {
        text: eh.intl.string(eh.t["/hMurx"]),
        "aria-label": eh.intl.string(eh.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: i } = e;
                (0, h.openModalLazy)(async () => {
                    let { default: e } = await l.e("307898").then(l.bind(l, 679361));
                    return (l) => (0, s.jsx)(e, { game: t, websiteButtons: n, trackAction: i, ...l });
                });
            })({ game: e, websiteButtons: a, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, s.jsxs)("div", { className: iU.G, children: [(0, s.jsx)(iW, { data: a[0] }), c] })
        : c;
};
var iz = l(123292),
    iH = l(672572),
    iX = l(94936);
function iK() {
    let e = r.useRef(null),
        {
            isExpanded: t,
            showToggle: l,
            handleToggleExpanded: n,
        } = (function (e) {
            let { trackAction: t } = F(),
                [l, n] = r.useState("full");
            r.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let l = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        n((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return (l.observe(t), () => l.disconnect());
            }, [e]);
            let i = r.useCallback(() => {
                "expanded" === l
                    ? (t(T.GameProfileTrackActionActions.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(T.GameProfileTrackActionActions.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(e),
        { game: i, isTwoColumn: a } = F(),
        c = r.useMemo(() => (a ? 8 : 5), [a]);
    if (null == i.description) return null;
    let o = t ? eh.intl.string(eh.t["6MwJo/"]) : eh.intl.string(eh.t.lBeKY2);
    return (0, s.jsxs)("div", {
        className: d()(iH.fi, iX.k),
        children: [
            (0, s.jsx)(W.E, {
                ref: e,
                className: iX.Q,
                lineClamp: t ? void 0 : c,
                variant: "text-md/medium",
                children: i.description,
            }),
            l && (0, s.jsx)(iz.Q, { onClick: n, text: o }),
        ],
    });
}
var iJ = l(40478),
    i$ = l(764948);
let iQ = r.memo(function (e) {
    let { analyticsLocations: t, selectTab: l, getScrollOffset: n } = e,
        { game: i } = F(),
        a = i.steamReleaseStatus !== t9.Y.RETIRED_ABANDONED;
    return (0, s.jsxs)("div", {
        className: i$.V,
        children: [
            (0, s.jsx)(n1, {}),
            (0, s.jsxs)("div", {
                className: iJ.h,
                children: [
                    (0, s.jsx)(t6, {}),
                    (0, s.jsxs)("div", { className: iJ.X, children: [(0, s.jsx)(iB, {}), (0, s.jsx)(iK, {})] }),
                ],
            }),
            (0, s.jsx)(nD, { analyticsLocations: t }),
            (0, s.jsx)(tm, {}),
            (0, s.jsx)(ni, { getScrollOffset: n }),
            (0, s.jsx)(lS, { selectTab: l }),
            (0, s.jsx)(iA, {}),
            (0, s.jsx)(iR, {}),
            a && (0, s.jsx)(ia, {}),
            (0, s.jsx)(nM, {}),
        ],
    });
});
var iq = l(164135);
let iZ = r.memo(function (e) {
    let { selectTab: t, getScrollOffset: l } = e;
    return (0, s.jsxs)("div", {
        className: iq.V,
        children: [
            (0, s.jsxs)("div", { className: iq.B, children: [(0, s.jsx)(n1, {}), (0, s.jsx)(iK, {})] }),
            (0, s.jsx)(ni, { getScrollOffset: l }),
            (0, s.jsx)(lS, { selectTab: t }),
            (0, s.jsx)(iA, {}),
            (0, s.jsx)(iR, {}),
        ],
    });
});
var i0 = l(881698),
    i1 = l(928550),
    i8 = l(562708),
    i3 = l(414499),
    i6 = l(359549),
    i2 = l(139286),
    i4 = l(873516);
function i5(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = F();
    (0, i2.A)({
        name: i8.ImpressionNames.CLOUD_PLAY_CTA,
        type: i8.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let a = r.useCallback(() => {
        (i(T.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, s.jsx)(q.m, {
        text: eh.intl.string(eh.t.JVwWva),
        position: "top",
        children: (0, s.jsx)($.$, {
            icon: i3.h,
            text: eh.intl.string(eh.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function i9(e) {
    let { cloudPlayAppId: t, analyticsLocations: l } = e,
        { game: n } = F(),
        i = (0, i6.rC)({ applicationId: t, sourceApplicationId: n.id, analyticsLocations: l });
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: i4.k,
              children: (0, s.jsx)(i5, { onCloudPlayClick: i, analyticsLocations: l }),
          });
}
var i7 = l(768626);
function ae(e) {
    let { analyticsLocations: t } = e,
        { game: l } = F(),
        n = (0, i0.A)(l.linkedApplications)?.id,
        [i] = (0, i1.L_)(l.getOfficialApplicationId()),
        [a] = (0, i1.L_)(l.id),
        { showsStoreLinks: r } = iY(l),
        c = l.steamReleaseStatus !== t9.Y.RETIRED_ABANDONED;
    return (0, s.jsxs)("div", {
        className: d()(i7.pz, iH.fi, r ? i7.FJ : i7.dg),
        children: [
            null == n || i || a ? null : (0, s.jsx)(i9, { cloudPlayAppId: n, analyticsLocations: t }),
            (0, s.jsxs)("div", {
                className: i$.V,
                children: [
                    (0, s.jsx)(iB, {}),
                    (0, s.jsx)(nD, { analyticsLocations: t }),
                    (0, s.jsx)(tm, {}),
                    c && (0, s.jsx)(ia, {}),
                    (0, s.jsx)(nM, {}),
                ],
            }),
        ],
    });
}
var at = l(105865);
function al(e) {
    let { isTwoColumn: t, selectTab: l, selectionVersion: n, initialScrollOffset: i, analyticsLocations: a } = e,
        c = r.useRef(null),
        o = r.useRef(null),
        d = r.useRef(n);
    (r.useLayoutEffect(() => {
        0 === n && null != i && i > 0 && o.current?.getScrollerNode()?.scrollTo({ top: i, behavior: "instant" });
    }, [i, n]),
        r.useLayoutEffect(() => {
            n !== d.current &&
                (o.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (d.current = n));
        }, [n]));
    let u = r.useCallback(() => o.current?.getScrollerNode()?.scrollTop ?? 0, []),
        m = r.useCallback((e) => {
            if (null != c.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                c.current.style.opacity = String(t);
            }
        }, []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(t1, { ref: c }),
            (0, s.jsxs)(e0.Ch, {
                ref: o,
                className: at.XG,
                onScroll: m,
                children: [
                    (0, s.jsx)("div", { className: at.xY, "aria-hidden": !0 }),
                    (0, s.jsx)(t5, {}),
                    (0, s.jsx)(tB.F, {
                        children: t
                            ? (0, s.jsxs)("div", {
                                  className: at.jC,
                                  children: [
                                      (0, s.jsx)(iZ, { selectTab: l, getScrollOffset: u }),
                                      (0, s.jsx)(ae, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, s.jsx)("div", {
                                  className: at.b9,
                                  children: (0, s.jsx)(iQ, { analyticsLocations: a, selectTab: l, getScrollOffset: u }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var an = l(658820),
    ai = l(787188);
function aa(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, s.jsx)(an.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: lt.Ye.GAME_PROFILE_GAME_SHOP,
        className: ai.kL,
        scrollerClassName: ai.XG,
        promotionBannerClassName: ai.Rv,
    });
}
var as = l(733391),
    ar = l(171616);
function ac(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: i,
            onClose: a,
            initialScrollOffset: c,
            navigateToGame: o,
        } = e,
        [F, U] = r.useState(!0),
        [Y, W] = r.useState(null),
        { clientThemesClassName: B } = (0, E.Ay)(),
        z = (0, m.bG)([b.default], () => b.default.locale),
        H = r.useMemo(() => (0, T.generateViewId)(), []),
        { analyticsLocations: X } = (0, j.Ay)(f.A.GAME_PROFILE),
        K = (0, R.s)(t),
        { data: J } = (0, N.I)(t),
        $ = J?.getOfficialApplicationId(),
        Q = (0, L.rG)(J),
        q = null != $,
        Z = (0, m.bG)([v.A], () => null != $ && v.A.didFetchingApplicationFail($), [$]),
        ee = J?.name ?? "",
        et = (0, M.A)(J),
        el = r.useRef(null);
    r.useEffect(() => {
        el.current = Y;
    }, [Y]);
    let {
            hasAlreadyLinked: en,
            canStartAuthorization: ei,
            fetched: ea,
            startAuthorization: es,
            connectionApp: er,
        } = (0, p.RD)(J),
        { invite: ec, isMember: eo, isResolving: ed } = (0, L.Ay)(J, W),
        { socialLayerStorefrontRecommendationsData: eu, socialLayerStorefrontRecommendationsLoading: ex } = (function (
            e,
        ) {
            let t = D.default.getCurrentUser()?.id,
                l = r.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: n, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [P.A],
                    () => ({
                        storefrontApplicationId: null != e ? P.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === P.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, O.h)(n),
                s = (0, m.bG)([v.A], () => null != n && v.A.didFetchingApplicationFail(n), [n]),
                c = r.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: o, status: d } = (0, w.XQ)({
                    applicationIds: c,
                    userIds: l,
                    numItems: 6,
                    source: _.B.USER_PROFILE,
                }),
                u = r.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== d || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, d, o],
                ),
                x = "loading" === d,
                h = "success" === d && o.length > 0 && null == a && !s;
            return {
                socialLayerStorefrontRecommendationsData: u,
                socialLayerStorefrontRecommendationsLoading: i && null != n && (x || h),
            };
        })(t),
        eh = r.useCallback(
            function (e, n, i) {
                let a = (0, T.getGuildIdAndVerifiedFromInvite)(el.current);
                (0, T.trackGameProfileAction)({
                    gameName: ee,
                    gameId: t,
                    action: e,
                    similarGameId: n,
                    viewId: H,
                    guildId: i ?? a.guildId,
                    isVerified: null == i && a.isVerified,
                    source: l,
                });
            },
            [ee, t, H, l],
        );
    ((0, g.Ay)(() => {
        ((0, T.trackGameProfileOpen)({
            source: l,
            viewId: H,
            gameId: t,
            gameName: ee,
            authorId: n,
            profileType: T.GameProfileTypes.FullProfile,
        }),
            (0, A.He)());
    }),
        (0, g.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, T.getGuildIdAndVerifiedFromInvite)(el.current),
                n = Date.now(),
                i = K.map((e) => {
                    let t = (0, I.JM)(e) ? (0, I.W6)(e, n) : (0, I.aJ)(e, z);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, T.trackGameProfileClose)({
                viewId: H,
                gameId: t,
                gameName: ee,
                playedFriendIds: K.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: k.A.getSimilarGames(t) ?? [],
                guildId: l,
                isVerified: e,
            });
        }));
    let eg = r.useCallback((e) => {
            U(e.contentRect.width >= 800);
        }, []),
        ef = (0, u.w)(eg, [], { fireOnMount: !0 }),
        ej = r.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, h.closeAllModals)(), (0, C.M)()) : a();
            },
            [a],
        ),
        ep = r.useCallback(() => ej(!1), [ej]),
        { navigation: ev, selectionVersion: eE } = (function (e) {
            let [t, l] = r.useState(y.OVERVIEW),
                [n, i] = r.useState(0),
                a = r.useCallback((e) => {
                    (l(e), i((e) => e + 1));
                }, []),
                s = r.useCallback(
                    (l) => {
                        if (l !== t) {
                            let t = G[l];
                            null != t && e(t);
                        }
                        a(l);
                    },
                    [t, a, e],
                );
            return { navigation: r.useMemo(() => ({ selectedTab: t, selectTab: s }), [t, s]), selectionVersion: n };
        })(eh),
        { selectedTab: eA } = ev,
        eI = (function (e) {
            let { game: t, navigation: l } = e,
                { selectedTab: n, selectTab: i } = l,
                a = t?.id,
                s = t?.getOfficialApplicationId(),
                c = em({ location: "GameProfileModal" });
            r.useEffect(() => {
                c && (0, as.Xw)();
            }, [c]);
            let o = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != s && P.A.hasStorefrontForApplicationId(s) ? s : null),
                    [a, s],
                ),
                d = c && null != o,
                { storefront: u } = (0, ar.A)({ applicationId: d ? o : null }),
                [x, h] = r.useState({ storefrontId: u?.id, index: 0 }),
                [g, f] = r.useState(n);
            n !== g && (f(n), n !== y.COMMERCE && h({ storefrontId: u?.id, index: 0 }));
            let j = x.storefrontId === u?.id && x.index < (u?.pages.length ?? 0) ? x.index : 0,
                p = r.useCallback(
                    (e) => {
                        !d ||
                            e < 0 ||
                            e >= (u?.pages.length ?? 0) ||
                            (h({ storefrontId: u?.id, index: e }), i(y.COMMERCE));
                    },
                    [d, i, u],
                );
            return {
                hasCommerceTab: d,
                storefrontApplicationId: o,
                storefront: u,
                selectedStorefrontPageIndex: j,
                selectStorefrontPage: p,
            };
        })({ game: J, navigation: ev }),
        { hasCommerceTab: eN, storefrontApplicationId: eS, storefront: eC, selectedStorefrontPageIndex: eb } = eI,
        eT = Object.values(eC?.promotions ?? {})[0] ?? null,
        ey = r.useMemo(() => {
            if (null != J)
                return {
                    game: J,
                    isTwoColumn: F,
                    canStartAuthorization: ei,
                    hasAlreadyLinked: en,
                    fetchedAuthorization: ea,
                    startAuthorization: es,
                    connectionApp: er,
                    invite: ec,
                    hasDiscordWebsite: Q,
                    hasOfficialApplication: q,
                    officialApplicationFetchFailed: Z,
                    isCommunityInviteResolving: ed,
                    isMember: eo,
                    socialLayerStorefrontRecommendationsData: eu,
                    socialLayerStorefrontRecommendationsLoading: ex,
                    hasCommerceTab: eN,
                    storefrontPromotion: eT,
                    closeModal: ej,
                    navigateToGame: o,
                    trackAction: eh,
                    viewId: H,
                };
        }, [J, F, ei, en, ea, es, er, ec, Q, q, Z, ed, eo, eu, ex, eN, eT, ej, o, eh, H]);
    return null == J
        ? null
        : (0, s.jsx)(j.f5, {
              value: X,
              children: (0, s.jsx)(x.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, s.jsx)(V.Provider, {
                      value: ey,
                      children: (0, s.jsx)("div", {
                          className: d()(B, iH.kL),
                          ref: ef,
                          children: (0, s.jsxs)(S.A, {
                              obscured: et,
                              onClose: ep,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: iH.sx,
                                      children: (0, s.jsx)(eQ, { navigation: ev, socialLayerStorefront: eI }),
                                  }),
                                  eA === y.OVERVIEW &&
                                      (0, s.jsx)(al, {
                                          selectTab: ev.selectTab,
                                          selectionVersion: eE,
                                          initialScrollOffset: c,
                                          isTwoColumn: F,
                                          analyticsLocations: X,
                                      }),
                                  eA === y.COMMUNITIES && (0, s.jsx)(tW, {}),
                                  eA === y.COMMERCE && (0, s.jsx)(aa, { applicationId: eS, selectedPageIndex: eb }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let ao = function (e) {
    let { gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, ...a } = e,
        [c, o] = r.useState({ gameId: t, source: l, sourceUserId: n, initialScrollOffset: i }),
        d = c.gameId,
        u = r.useCallback(
            (e, t) => {
                e !== d && ((0, L.UT)(e), o({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, s.jsx)(
        ac,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            navigateToGame: u,
            ...a,
        },
        c.gameId,
    );
};
