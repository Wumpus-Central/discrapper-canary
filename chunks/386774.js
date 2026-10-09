l.d(t, { default: () => ar });
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
    E = l(587895),
    v = l(590703),
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
    B = l(376357),
    z = l(922016),
    H = l(980707),
    X = l(477782),
    K = l(821609),
    J = l(663341),
    $ = l(866665),
    Q = l(408278),
    q = l(34188),
    Z = l(173936),
    ee = l(365199),
    et = l(789645),
    el = l(442433),
    en = l(50268),
    ei = l(44724),
    ea = l(676924),
    es = l(957565),
    er = l(945810);
let ec = { enabled: !1 },
    eo = (0, er.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: ec,
        variations: { 0: ec, 1: { enabled: !0 } },
    });
function ed(e) {
    let { location: t } = e;
    return eo.useConfig({ location: t }).enabled;
}
var eu = l(695366),
    em = l(660183);
l(321073);
var ex = l(540185),
    eh = l(926268),
    eg = l(53788),
    ef = l(831453),
    ej = l(785866),
    ep = l(555704),
    eE = l(47675),
    ev = l(633075),
    eA = l(289173),
    eI = l(321191),
    eN = l(958805),
    eS = l(735321),
    eC = l(96173),
    eb = l(280450),
    eT = l(403362);
async function ey(e) {
    let t = e((0, eS.BF)());
    await eN.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var ek = l(652215);
function eR(e) {
    var t;
    let n,
        i,
        { className: a, activeTab: o } = e,
        { game: d, closeModal: u, trackAction: x } = F(),
        g = r.useRef(null),
        j = r.useRef(null),
        p = (0, en.A)({ id: d.id, label: em.intl.string(em.t.SHQGPj) }),
        E =
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
                : (0, s.jsx)(X.Dr, {
                      id: "game-profile-something-wrong",
                      label: em.intl.string(em.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: eu.E },
                  })),
        v = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, m.bG)([eb.default], () => eb.default.getId()),
                i = r.useMemo(
                    () => [
                        {
                            type: ex.x.FAVORITE_GAMES,
                            addLabel: em.intl.string(em.t.fgmitg),
                            removeLabel: em.intl.string(em.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eh.HeartIcon,
                        },
                        {
                            type: ex.x.PLAYED_GAMES,
                            addLabel: em.intl.string(em.t["0xIVLR"]),
                            removeLabel: em.intl.string(em.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eg.G,
                        },
                        {
                            type: ex.x.CURRENT_GAMES,
                            addLabel: em.intl.string(em.t.G0c4En),
                            removeLabel: em.intl.string(em.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: ef.H,
                        },
                        {
                            type: ex.x.WANT_TO_PLAY_GAMES,
                            addLabel: em.intl.string(em.t.UuBS4K),
                            removeLabel: em.intl.string(em.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ej._,
                        },
                    ],
                    [],
                ),
                a = (0, m.yK)([eI.A], () => (null == n ? [] : (eI.A.getUserProfile(n)?.widgets ?? [])), [n]),
                c = (0, eC.A)(),
                o = r.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...a].filter((e) => e instanceof ev.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eT.Vq).find((e) => t.has(e)) ?? null;
                }, [c, a, e]),
                d = r.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await ey((i) => {
                                let a = i.filter(eA.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eS.uA)(a))) return i;
                                    let l = { gameId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new eA.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    n = new eA.Yy({ ...a, games: e });
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
                        (0, eE.un)({
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
                            (await ey((l) =>
                                e
                                    ? l.some((e) => e instanceof ev.R && e.applicationId === o)
                                        ? l
                                        : [(t = new ev.R({ applicationId: o })), ...l]
                                    : ((t = l.find((e) => e instanceof ev.R && e.applicationId === o) ?? null),
                                      l.filter((e) => !(e instanceof ev.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, eE.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == n) return null;
            let x = null != e && (0, eS.XX)(e),
                h = [];
            if (null != o) {
                let e = a.some((e) => e instanceof ev.R && e.applicationId === o);
                h.push(
                    (0, s.jsx)(
                        X.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? em.intl.formatToPlainString(em.t.Ktb1n8, { name: l })
                                : em.intl.formatToPlainString(em.t.Xp6iZt, { name: l }),
                            action: () => u(!e),
                            leadingAccessory: { type: "icon", icon: ep.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let l = a.filter(eA.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.gameId === t),
                        i = !n && null != l && (0, eS.uA)(l);
                    h.push(
                        (0, s.jsx)(
                            X.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: i ? em.intl.string(em.t["86OoiH"]) : void 0,
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
        A = ed({ location: "GameProfileOverflowMenu" }),
        I = (0, m.bG)([P.A], () => P.A.getApplicationIdFromDetectableId(d.id)),
        N = (0, m.bG)([P.A], () => P.A.hasStorefrontForApplicationId(I), [I]),
        S = r.useCallback(() => {
            null != I && (0, ei.G)({ applicationId: I });
        }, [I]),
        C = r.useCallback(() => {
            null != I && (x(T.GameProfileTrackActionActions.GameShop), (0, ei.default)({ applicationId: I }), u());
        }, [I, x, u]),
        b = r.useCallback(() => u(!1), [u]),
        k = r.useCallback(() => {
            x(T.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${ek.BVt.GAME_PROFILE(d.id)}`;
            (0, es.C)(e, () => {
                (0, B.P0)((0, B.ox)(em.intl.string(em.t["+5kSoW"]), B.Ck.SUCCESS));
            });
        }, [d.id, x]);
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            o === y.COMMERCE &&
                (0, s.jsx)(ea.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: u,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != v &&
                o !== y.COMMERCE &&
                (0, s.jsx)(z.Y, {
                    targetElementRef: j,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(H.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, el.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.sidPSo),
                            onSelect: () => {},
                            children: (0, s.jsx)(X.rX, { children: v }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)("div", {
                            ...e,
                            ref: j,
                            children: (0, s.jsx)(K.$, {
                                icon: J.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: em.intl.string(em.t.sidPSo),
                            }),
                        }),
                }),
            N &&
                !A &&
                (0, s.jsx)($.m, {
                    text: em.intl.string(em.t.apFNLU),
                    children: (0, s.jsx)(Q.K, {
                        icon: q.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.apFNLU),
                        onMouseDown: S,
                        onClick: C,
                    }),
                }),
            o !== y.COMMERCE &&
                (0, s.jsx)($.m, {
                    text: em.intl.string(em.t.WqhZss),
                    children: (0, s.jsx)(Q.K, {
                        icon: Z.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.WqhZss),
                        onClick: k,
                    }),
                }),
            (null != p || null != E) &&
                o !== y.COMMERCE &&
                (0, s.jsx)(z.Y, {
                    targetElementRef: g,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(H.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, el.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(X.rX, { children: E }), (0, s.jsx)(X.rX, { children: p })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)($.m, {
                            text: em.intl.string(em.t["UKOtz+"]),
                            children: (0, s.jsx)("div", {
                                ...e,
                                ref: g,
                                children: (0, s.jsx)(Q.K, {
                                    icon: ee.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": em.intl.string(em.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, s.jsx)(Q.K, {
                icon: et.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: b,
                "aria-label": em.intl.string(em.t.cpT0Cq),
            }),
        ],
    });
}
let eL = { enabled: !1 },
    eG = (0, er.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eL,
        variations: { 0: eL, 1: { enabled: !0 } },
    });
function eM(e) {
    let { className: t, navigation: l } = e,
        { selectedTab: n, selectTab: i } = l;
    if (
        !(function (e) {
            let { location: t } = e;
            return eG.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let a = em.intl.string(em.t["3xFZEo"]);
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
function eO(e) {
    let { className: t, navigation: l } = e,
        { game: n } = F();
    return (n.communityGuildIds?.length ?? 0) < 3 ? null : (0, s.jsx)(eM, { className: t, navigation: l });
}
var eP = l(661531),
    e_ = l(331322),
    ew = l(278416),
    eD = l(478016),
    eV = l(900797),
    eF = l(847374),
    eU = l(421773),
    eY = l(421108);
let eW = "text-md/medium",
    eB = [];
function ez(e) {
    let { label: t, chevron: l, socialLayerStorefront: n } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: l } = e,
                n = Object.values(l?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: l } = e;
                    return "nitro" === t && (null == l || null != (0, eY.ZH)(l));
                }),
                i = (0, eY.tm)(n?.endsAt);
            return t && null != n && !i;
        })(n);
    return (0, s.jsxs)(e_.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, s.jsx)(ew.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eP.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, s.jsxs)(e_.B, {
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
function eH(e) {
    let { className: t, label: l, navigation: n, socialLayerStorefront: i } = e,
        { selectedTab: a, selectTab: c } = n,
        { storefront: o, selectedStorefrontPageIndex: d, selectStorefrontPage: u } = i,
        m = o?.pages ?? eB,
        x = r.useRef(null),
        { isHovered: h, setIsHovered: g, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, eU.A)(100, 100),
        E = em.intl.string(em.t["J3/JCl"]),
        v = r.useCallback(
            (e) => {
                (p(), g(e));
            },
            [p, g],
        );
    return (0, s.jsx)(z.Y, {
        targetElementRef: x,
        shouldShow: h,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => v(!0),
        onRequestClose: () => v(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, s.jsx)(H.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": E,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, s.jsx)(X.rX, {
                        children: m.map((e, t) => {
                            var l;
                            let n,
                                i = a === y.COMMERCE && t === d,
                                r =
                                    ((l = e.title),
                                    null != (n = l?.trim()) && n.length > 0
                                        ? n
                                        : em.intl.formatToPlainString(em.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, s.jsx)(
                                X.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: r,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: eD.U } : void 0,
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
                o = r ? eV.t : eF.a;
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
                "aria-label": E,
                "aria-haspopup": "menu",
                children: (0, s.jsx)(W.E, {
                    variant: eW,
                    color: "none",
                    children: (0, s.jsx)(ez, {
                        label: l,
                        chevron: (0, s.jsx)(o, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function eX(e) {
    let { className: t, navigation: l, socialLayerStorefront: n } = e,
        { selectedTab: i, selectTab: a } = l,
        { hasCommerceTab: r, storefront: c } = n;
    if (!r) return null;
    let o = em.intl.string(em.t.apFNLU);
    return (c?.pages.length ?? 0) > 1
        ? (0, s.jsx)(eH, { className: t, label: o, navigation: l, socialLayerStorefront: n })
        : (0, s.jsx)(Y.V.Item, {
              id: y.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(y.COMMERCE),
              className: t,
              "aria-label": o,
              children: (0, s.jsx)(W.E, {
                  variant: eW,
                  color: "none",
                  children: (0, s.jsx)(ez, { label: o, socialLayerStorefront: n }),
              }),
          });
}
var eK = l(510954);
function eJ(e) {
    let { navigation: t, socialLayerStorefront: l } = e,
        { game: n } = F(),
        { selectedTab: i, selectTab: a } = t,
        c = n.getIconURL(64),
        [o, d] = r.useState(null),
        u = r.useCallback(() => d(c), [c]),
        m = em.intl.string(em.t.qHmbyh);
    return (0, s.jsx)("div", {
        className: eK.wx,
        children: (0, s.jsxs)("div", {
            className: eK.ap,
            children: [
                (0, s.jsx)("div", {
                    className: eK.wE,
                    children:
                        null != c && c !== o
                            ? (0, s.jsx)("img", { src: c, alt: "", className: eK.FC, draggable: !1, onError: u })
                            : (0, s.jsx)(U._, { size: "md" }),
                }),
                (0, s.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: eK.vR,
                    children: [
                        (0, s.jsx)(Y.V.Item, {
                            id: y.OVERVIEW,
                            disableItemStyles: !0,
                            className: eK.Mf,
                            "aria-label": m,
                            children: (0, s.jsx)(W.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, s.jsx)(eO, { className: eK.Mf, navigation: t }),
                        (0, s.jsx)(eX, { className: eK.Mf, navigation: t, socialLayerStorefront: l }),
                    ],
                }),
                (0, s.jsx)(eR, { className: eK.HK, activeTab: i }),
            ],
        }),
    });
}
var e$ = l(435558),
    eQ = l.n(e$),
    eq = l(689175),
    eZ = l(448741),
    e0 = l(71393),
    e1 = l(449054),
    e8 = l(810729);
let e3 = { sm: e8.nz, md: e8.a };
function e6(e) {
    let { className: t, width: l } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: d()(e8.qf, t), style: { width: l } });
}
function e2(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function e4(e) {
    let { className: t, size: l = "md" } = e;
    return (0, s.jsx)(e6, { className: d()(e8.x6, e3[l], t) });
}
var e5 = l(827085);
function e9(e) {
    let { className: t } = e;
    return (0, s.jsx)(e6, { className: d()(e5.qV, t) });
}
function e7(e) {
    let { presenceCount: t, memberCount: l } = e;
    return null == t && null == l
        ? null
        : (0, s.jsxs)("div", {
              className: e5.kL,
              children: [
                  null != t &&
                      (0, s.jsxs)("div", {
                          className: e5.U9,
                          children: [
                              (0, s.jsx)("i", { className: e5._o }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != l &&
                      (0, s.jsxs)("div", {
                          className: e5.U9,
                          children: [
                              (0, s.jsx)("i", { className: e5.jk }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t.zRl6XR, { count: l }),
                              }),
                          ],
                      }),
              ],
          });
}
var te = l(297264),
    tt = l(73153),
    tl = l(37537),
    tn = l(714991),
    ti = l(486020),
    ta = l(240248),
    ts = l(213098);
function tr() {
    return (0, s.jsxs)(e2, {
        className: ts.uW,
        animationDelayMs: 300,
        children: [
            (0, s.jsx)(e6, { className: ts.dU, width: "30%" }),
            (0, s.jsx)(e2, {
                className: ts.nV,
                children: (0, s.jsxs)("div", {
                    className: ts.hQ,
                    children: [
                        (0, s.jsxs)("div", {
                            className: ts.To,
                            children: [
                                (0, s.jsx)(e6, { className: ts.QV }),
                                (0, s.jsxs)("div", {
                                    className: ts.Yv,
                                    children: [
                                        (0, s.jsx)(e6, { className: ts.Ag }),
                                        (0, s.jsx)(e6, { className: ts.zl }),
                                        (0, s.jsx)(e9, { className: ts.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(e4, {}),
                    ],
                }),
            }),
        ],
    });
}
function tc(e) {
    let { guild: t } = e,
        l = ti.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = r.useState(void 0),
        a = null != l && n !== l,
        c = r.useCallback(() => {
            i(l);
        }, [l]);
    return (0, s.jsxs)("div", {
        className: ts._C,
        children: [
            a && (0, s.jsx)(e6, { className: ts.EQ }),
            (0, s.jsx)("img", {
                className: ts.$f,
                src: l,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function to(e) {
    let { guild: t, presenceCount: l, memberCount: n, isMember: i, onJoin: a, className: r } = e;
    return (0, s.jsx)("div", {
        className: d()(ts.kL, r),
        children: (0, s.jsxs)("div", {
            className: ts.hQ,
            children: [
                (0, s.jsxs)("div", {
                    className: ts.To,
                    children: [
                        (0, s.jsx)(tc, { guild: t }),
                        (0, s.jsxs)("div", {
                            className: ts.yj,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: ts.YS,
                                    children: [
                                        (0, s.jsx)(tn.A, { guild: t, size: 16 }),
                                        (0, s.jsx)(te.D, {
                                            className: ts.J5,
                                            variant: "heading-md/semibold",
                                            color: "text-default",
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                !(0, ta.uJ)(t.description) &&
                                    (0, s.jsx)(W.E, {
                                        className: ts.h_,
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: t.description,
                                    }),
                                (0, s.jsx)(e7, { presenceCount: l, memberCount: n }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsx)(K.$, {
                    variant: "secondary",
                    text: i ? em.intl.string(em.t.cEnaWx) : em.intl.string(em.t.XpeFYr),
                    "aria-label": i
                        ? em.intl.formatToPlainString(em.t.lQqwQi, { guildName: t.name })
                        : em.intl.formatToPlainString(em.t["8rL1QB"], { guildName: t.name }),
                    onClick: a,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function td() {
    let e = (0, tl.c)("GameProfileGuildInvite"),
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
                tt.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: ek.BRT.APP }));
        }, [t, c, a]);
    return null == t || null == t.guild
        ? l && n
            ? (0, s.jsx)(tr, {})
            : null
        : (0, s.jsxs)("div", {
              className: ts.uW,
              children: [
                  (0, s.jsx)(te.D, {
                      className: ts.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, s.jsx)(to, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      isMember: i,
                      onJoin: o,
                  }),
              ],
          });
}
var tu = l(320448),
    tm = l(152594);
function tx(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, s.jsxs)("div", {
        className: tm.kL,
        "aria-busy": !0,
        children: [
            (0, s.jsxs)("div", {
                className: tm.wR,
                children: [(0, s.jsx)(e6, { className: tm.Iz, width: l }), n && (0, s.jsx)(e4, { size: "sm" })],
            }),
            t,
        ],
    });
}
function th(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, s.jsxs)("div", {
        className: tm.kL,
        children: [
            (0, s.jsxs)("div", {
                className: tm.wR,
                children: [
                    (0, s.jsx)(te.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, s.jsx)(K.$, {
                            size: "sm",
                            icon: tu._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: em.intl.string(em.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var tg = l(196765),
    tf = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tj = (0, tg.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tp = l(876798),
    tE = l(481901),
    tv = l(916099),
    tA = l(461353);
function tI() {
    let { layout: e, setLayout: t } = tj(),
        l = em.intl.string(em.t.VGRZh7),
        n = em.intl.string(em.t["NJFr+g"]);
    return (0, s.jsxs)("div", {
        className: tA.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, s.jsx)($.m, {
                text: l,
                asContainer: !0,
                children: (0, s.jsx)(tp.k, {
                    icon: tE.d,
                    pressed: e === tf.GRID,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tf.GRID),
                }),
            }),
            (0, s.jsx)($.m, {
                text: n,
                asContainer: !0,
                children: (0, s.jsx)(tp.k, {
                    icon: tv.ListBulletsIcon,
                    pressed: e === tf.LIST,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tf.LIST),
                }),
            }),
        ],
    });
}
var tN = l(759020);
function tS(e) {
    let { guild: t, presenceCount: l, memberCount: n, isMember: i, onJoin: a } = e;
    return (0, s.jsxs)("div", {
        className: tN.kL,
        children: [
            (0, s.jsxs)("div", {
                className: tN.OA,
                children: [
                    (0, s.jsx)(tc, { guild: t }),
                    (0, s.jsxs)("div", {
                        className: tN.FS,
                        children: [
                            (0, s.jsxs)("div", {
                                className: tN.YS,
                                children: [
                                    (0, s.jsx)(tn.A, { guild: t, size: 16 }),
                                    (0, s.jsx)(te.D, {
                                        className: tN.J5,
                                        variant: "heading-sm/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, ta.uJ)(t.description) &&
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
                className: tN.o1,
                children: [
                    (0, s.jsx)(e7, { presenceCount: l, memberCount: n }),
                    (0, s.jsx)(K.$, {
                        size: "sm",
                        variant: "secondary",
                        text: i ? em.intl.string(em.t.cEnaWx) : em.intl.string(em.t.XpeFYr),
                        "aria-label": i
                            ? em.intl.formatToPlainString(em.t.lQqwQi, { guildName: t.name })
                            : em.intl.formatToPlainString(em.t["8rL1QB"], { guildName: t.name }),
                        onClick: a,
                    }),
                ],
            }),
        ],
    });
}
var tC = l(311043),
    tb = l(636537);
let tT = {};
class ty extends m.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eb.default);
    }
    getGuild(e) {
        return tT[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => tT[e]?.guild).filter(eT.Vq);
    }
    isFetching(e) {
        return e.some((e) => tT[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let l = tT[e];
            return (
                null == l ||
                "failed" === l.fetchState ||
                ("fetching" !== l.fetchState && (null == l.fetchedAt || t - l.fetchedAt >= 36e5))
            );
        });
    }
}
let tk = new ty(tt.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                tT[e] = { guild: tT[e]?.guild ?? null, fetchState: "fetching", fetchedAt: tT[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: l } = e,
                n = Date.now(),
                i = new Map(l.map((e) => [e.id, (0, e1.jE)(e)]));
            for (let e of t) tT[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: n };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                tT[e] = { guild: tT[e]?.guild ?? null, fetchState: "failed", fetchedAt: tT[e]?.fetchedAt ?? null };
        },
    }),
    tR = new Map();
async function tL(e) {
    tt.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await tb.Bo.get({
                url: ek.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            l = t.body?.guilds ?? [];
        tt.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: l });
    } catch (t) {
        throw (tt.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
    }
}
async function tG(e) {
    let t = tk.getStaleGuildIds(e),
        l = new Set();
    for (let t of e) {
        let e = tR.get(t);
        null != e && l.add(e);
    }
    if (t.length > 0) {
        let e = tL(t).finally(() => {
            for (let l of t) tR.get(l) === e && tR.delete(l);
        });
        for (let l of t) tR.set(l, e);
        l.add(e);
    }
    await Promise.all(l);
}
var tM = l(927813);
let tO = [];
function tP(e) {
    return tC.A.getGame(e)?.communityGuildIds ?? tO;
}
let t_ = (0, m.UT)(tk, {
    getQueryId: (e) => (tP(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => tk.getGuilds(tP(e)),
    load: async (e) => {
        let t = tP(e);
        t.length > 0 && (await tG(t));
    },
    staleAfter: tM.A.Seconds.HOUR,
    failureStaleAfter: tM.A.Seconds.MINUTE,
});
var tw = l(620387);
function tD(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(e2, {
        className: tw.s7,
        animationDelayMs: t,
        children: [
            (0, s.jsxs)("div", {
                className: tw.Xc,
                children: [
                    (0, s.jsx)(e6, { className: tw.VR }),
                    (0, s.jsxs)("div", {
                        className: tw.hG,
                        children: [
                            (0, s.jsx)(e6, { className: tw.t_ }),
                            (0, s.jsx)(e6, { className: tw.Aj }),
                            (0, s.jsx)(e9, {}),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(e4, {}),
        ],
    });
}
function tV(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(e2, {
        className: tw.fv,
        animationDelayMs: t,
        children: [
            (0, s.jsx)(e6, { className: tw.VR }),
            (0, s.jsxs)("div", {
                className: tw.hG,
                children: [(0, s.jsx)(e6, { className: tw.t_ }), (0, s.jsx)(e6, { className: tw.Aj })],
            }),
            (0, s.jsx)(e4, { size: "sm" }),
        ],
    });
}
function tF(e) {
    let { guild: t, layout: l } = e,
        { closeModal: n, trackAction: i, viewId: a } = F(),
        c = (0, m.bG)([e0.A], () => e0.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        o = r.useCallback(async () => {
            (i(T.GameProfileTrackActionActions.CommunityClicked, void 0, t.id), n());
            try {
                await e1.Z2(t.id, {}, { joinSource: ek.Q4z.GAME_PROFILE_COMMUNITIES, loadId: a }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, eZ._)(e);
            }
        }, [t.id, i, n, a]),
        d = l === tf.LIST ? tS : to;
    return (0, s.jsx)(d, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        isMember: c,
        onJoin: o,
    });
}
function tU() {
    let { game: e } = F(),
        { data: t, isLoading: l } = t_(e.id),
        n = tj((e) => e.layout),
        i = n === tf.LIST,
        a = i ? tV : tD,
        r = l && (null == t || 0 === t.length);
    return (0, s.jsxs)(eq.Ch, {
        className: tw.XG,
        children: [
            (0, s.jsx)("div", { className: tw.xY, "aria-hidden": !0 }),
            (0, s.jsx)("div", {
                className: tw.uW,
                children: (0, s.jsxs)(th, {
                    title: em.intl.string(em.t.r6bvTh),
                    children: [
                        (0, s.jsx)("div", { className: tw.KE, children: (0, s.jsx)(tI, {}) }),
                        (0, s.jsx)("div", {
                            className: i ? tw.p_ : tw.Vg,
                            children: r
                                ? eQ()
                                      .range(8)
                                      .map((e) => (0, s.jsx)(a, { animationDelayMs: 150 * e }, e))
                                : (t ?? []).map((e) => (0, s.jsx)(tF, { guild: e, layout: n }, e.id)),
                        }),
                    ],
                }),
            }),
        ],
    });
}
var tY = l(707554),
    tW = l(369606),
    tB = l(939249),
    tz = l(775602),
    tH = l(21161),
    tX = l(400492),
    tK = l(541830),
    tJ = l(459746);
let t$ = "1552821538409939044";
var tQ = l(175213);
let tq = l(892799);
function tZ(e) {
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
    return (0, ta.uJ)(n)
        ? null
        : (0, s.jsxs)("div", {
              ref: t,
              children: [
                  (0, s.jsx)("div", { className: tQ.y1, style: { backgroundImage: `url("${n}")` } }),
                  (0, s.jsx)("div", { className: tQ.N4 }),
              ],
          });
}
function t0() {
    let { game: e } = F(),
        t = (e.genres ?? []).map(tK.du).join(", ");
    return (0, ta.uJ)(t) ? null : (0, s.jsx)(W.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function t1(e) {
    let { rank: t } = e;
    return (0, s.jsxs)("div", {
        className: tQ.Qc,
        children: [
            (0, s.jsx)(tW.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, s.jsx)(W.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t8() {
    let { game: e } = F();
    return (0, s.jsx)(t3, { className: d()(tQ._M, (0, tJ.cO)(e) && tQ.i3), imageClassName: tQ.xe });
}
function t3(e) {
    let { className: t, imageClassName: l } = e,
        { game: n } = F(),
        i = (0, s.jsx)(tJ.Ay, { game: n, className: l, size: tJ.wu.LARGE });
    return n.id !== t$
        ? (0, s.jsx)("div", { className: t, children: i })
        : (0, s.jsx)(t6, { className: t, children: i });
}
function t6(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = r.useContext(tH.x),
        i = (0, m.bG)([tz.Ay], () => tz.Ay.useReducedMotion),
        a = r.useRef({ count: 0, lastTime: 0 });
    return (0, s.jsx)(tB.D, {
        className: d()(l, tQ.b3),
        "aria-label": em.intl.string(em.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                l = a.current,
                s = t - l.lastTime > 1e4 ? 1 : l.count + 1;
            if (((a.current = { count: s, lastTime: t }), 3 === s)) {
                if (((a.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    n(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tX.Ak)("discodo");
            }
        },
        children: t,
    });
}
let t2 = function () {
    let { game: e, isTwoColumn: t } = F(),
        l = e.name;
    return (0, s.jsxs)("div", {
        className: tQ.ap,
        children: [
            t && (0, s.jsx)(t3, { className: d()(tQ.Tf, (0, tJ.cO)(e) && tQ.wS), imageClassName: tQ.w$ }),
            (0, s.jsxs)("div", {
                className: tQ.lu,
                children: [
                    null != e.l30Rank && (0, s.jsx)(t1, { rank: e.l30Rank }),
                    (0, s.jsxs)("div", {
                        className: tQ.$,
                        children: [
                            (0, s.jsx)(te.D, { variant: "heading-xxl/semibold", children: l }),
                            e.id === t$ &&
                                (0, s.jsx)("img", {
                                    src: tq,
                                    className: tQ.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, s.jsx)(t0, {}),
                ],
            }),
        ],
    });
};
var t4 = l(792216),
    t5 = l(638495),
    t9 = l(871123),
    t7 = l(439303),
    le = l(317560),
    lt = l(467884),
    ll = l(480713),
    ln = l(449543),
    li = l(197935),
    la = l(761812);
function ls(e) {
    return e;
}
function lr(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: la.B, children: t });
}
function lc(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, ll.l)("social_layer_storefront_card_row"),
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
          ? (0, s.jsx)(li.A, {
                gap: "md",
                "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
                items: t,
                getItemKey: ls,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, s.jsx)(lr, {
                        children: (0, s.jsx)(lt.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: lt.s6.SMALL,
                            analyticsLocations: l,
                            onClick: a,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, s.jsx)(ln.A, {
                gap: "md",
                "aria-label": em.intl.string(em.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, s.jsx)(
                        lr,
                        {
                            children: (0, s.jsx)(lt.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: lt.s6.SMALL,
                                analyticsLocations: l,
                                onClick: a,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var lo = l(369435);
function ld(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: d()(lo.n, { [lo.C]: 16 === l }), children: t });
}
var lu = l(936785),
    lm = l(403581),
    lx = l(812095),
    lh = l(647474),
    lg = l(162536);
function lf(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eY.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        a = i ? lm.t : t.Icon;
    return (0, s.jsx)(lh.A, {
        className: d()(lg.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, s.jsxs)("div", {
            className: lg.Qs,
            children: [
                null != a && (0, s.jsx)(a, { size: "xs", color: "currentColor", className: lg.Kk }),
                (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "currentColor", children: (0, lx.U)(t.text) }),
            ],
        }),
    });
}
var lj = l(521058);
function lp() {
    let { storefrontPromotion: e } = F();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, ta.uJ)(a.headerText)) return null;
    let r = {
        Icon: (0, lu.LZ)(n?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, lu.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, s.jsx)(lf, { className: lj.v, promotion: r });
}
let lE = [0, 1, 2, 3],
    lv = { placement: t7.Ye.GAME_PROFILE };
function lA() {
    return (0, s.jsx)(tx, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, s.jsx)(ld, { children: lE.map((e) => (0, s.jsx)(lr, { children: (0, s.jsx)(lt.yf, {}) }, e)) }),
    });
}
function lI(e) {
    let { selectTab: t } = e,
        l = (0, t5.k)(),
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
                    (0, ei.default)({ applicationId: i.application.id }));
            }
        }, [i, n, c, t, o]),
        m = r.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (n(T.GameProfileTrackActionActions.GameShopItem),
                    (0, le.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: d,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, t9.rG)(e, l, t, a) && o();
                        },
                    }));
            },
            [n, o, d, i, l],
        );
    if (a) return (0, s.jsx)(lA, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, s.jsxs)(th, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, s.jsx)(lp, {}),
            (0, s.jsx)(t7.E9, {
                newValue: lv,
                children: (0, s.jsx)(lc, { skuIds: x, analyticsLocations: d, onCardClick: m }),
            }),
        ],
    });
}
var lN = l(621466),
    lS = l(966697),
    lC = l(346055),
    lb = l(460905),
    lT = l(776231),
    ly = l(46054),
    lk = l(58703),
    lR = l(155718),
    lL = l(387408),
    lG = l(731068),
    lM = l(59318),
    lO = l(320095),
    lP = l(708676),
    l_ = l(383233),
    lw = l(998218);
let lD = /^#{1,3}\s+(.+)$/,
    lV = /^https?:\/\/\S+$/;
var lF = l(60465),
    lU = l(158390),
    lY = l(103348),
    lW = l(371794);
let lB = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function lz(e) {
    tt.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, lW.aP)({
                    url: ek.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: b.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(lY.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (tt.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            tt.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        tt.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function lH(e) {
    let t = ((await tb.Bo.get({ url: ek.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !lB.has(t),
    );
    tt.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let lX = (0, m.UT)(k.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => k.A.getSimilarGames(e) ?? null,
    load: (e) => lH(e),
    retryConfig: { backoff: () => new lU.A(5 * tM.A.Millis.SECOND, 5 * tM.A.Millis.MINUTE) },
    failureStaleAfter: tM.A.Seconds.MINUTE,
});
async function lK(e, t) {
    tt.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await tb.Bo.get({ url: ek.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        tt.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, lL.A)((0, lO.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, l_._c)(e))
                            return e.components
                                .filter((e) => e.type === lR.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || lV.test(t.trim())
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
                        if ((0, l_._c)(e)) {
                            let t = e.components.find((e) => e.type === lR.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, lG.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, lM.tT)(e.content_type));
                        if (null != t) return (0, lG.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, lM.XB)(e.content_type));
                        if (null != l) return (0, lG.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, lG.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, lG.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, lG.oU)(
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
                        (l = (-1 === t ? a : a.slice(0, t)).match(lD)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    d =
                        a === i || (0, l_._c)(n)
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
        tt.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var lJ = l(284009),
    l$ = l.n(lJ),
    lQ = l(376728),
    lq = l(976860);
async function lZ(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    l$()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = e0.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(ek.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e1.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: ek.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await lQ.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, lq.pX)(ek.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var l0 = l(806244),
    l1 = l(165648);
function l8(e, t) {
    return ly.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function l3(e) {
    return e.id;
}
function l6() {
    return (0, s.jsxs)(e2, {
        className: l0.s7,
        children: [
            (0, s.jsx)(e6, { className: l0.o$ }),
            (0, s.jsxs)("div", {
                className: l0.UF,
                children: [(0, s.jsx)(e6, { className: l0.iX }), (0, s.jsx)(e6, { className: l0.jt })],
            }),
        ],
    });
}
function l2(e, t) {
    var l;
    let n,
        i = (0, lT.kr)(364 * (0, lT.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = lw.A.toURLSafe(e))
            ? null
            : (n.searchParams.append("format", "webp"),
              null != i && n.searchParams.append("width", i.toString()),
              null != l && n.searchParams.append("height", l.toString()),
              n.toString())) ?? e
    );
}
function l4(e) {
    let { message: t, src: l, aspectRatio: n } = e,
        [i, a] = r.useState(!1),
        c = r.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, s.jsx)(lS.y, {
              readyState: i ? ek.Rv1.READY : ek.Rv1.LOADING,
              aspectRatio: n,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, s.jsx)("img", {
                  src: l,
                  className: l0.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function l5(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lN.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lN.vq)(e.target, HTMLSpanElement) && (0, lN.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? l2(o, c) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, s.jsx)(tB.D, {
              ...i,
              className: l0.Nr,
              onClick: a,
              children: (0, s.jsxs)(lC.M, {
                  className: l0.zI,
                  children: [
                      null != m.url &&
                          (0, s.jsx)(W.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: l0.Ow,
                              children: m.url,
                          }),
                      (0, s.jsxs)("div", {
                          className: l0._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, s.jsxs)("div", {
                                      className: l0.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, s.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: l0.SG,
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
                                      className: l0.ax,
                                      children: (0, s.jsx)(l4, { message: t, src: u, aspectRatio: c }),
                                  }),
                              null != t.title &&
                                  (0, s.jsx)(te.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: l0.DD,
                                      children: l8(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, s.jsxs)("div", {
                                      className: d()(l0.h_, l1.PT),
                                      children: [l8(t.body, l), (0, s.jsx)("div", { className: l0.fm })],
                                  }),
                              (0, s.jsxs)("div", {
                                  className: l0.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, s.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: l0.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, s.jsxs)(W.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, lk.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, s.jsxs)("div", {
                                              className: l0.a5,
                                              children: [
                                                  (0, s.jsx)(lb.n, { size: "xs", color: "currentColor" }),
                                                  (0, s.jsx)(W.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(em.intl.currentLocale).format(
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
let l9 = r.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, s.jsxs)(lC.M, {
        className: l0.zI,
        children: [
            null != t.title &&
                (0, s.jsx)(te.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l0.DD,
                    children: l8(t.title, l),
                }),
            t.body.length > 0 &&
                (0, s.jsxs)("div", {
                    className: d()(l0.h_, l1.PT),
                    children: [l8(t.body, l), (0, s.jsx)("div", { className: l0.fm })],
                }),
            (0, s.jsxs)("div", {
                className: l0.ov,
                children: [
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, lk.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, s.jsxs)("div", {
                            className: l0.a5,
                            children: [
                                (0, s.jsx)(lb.n, { size: "xs", color: "currentColor" }),
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(em.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function l7(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lN.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lN.vq)(e.target, HTMLSpanElement) && (0, lN.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? l2(o, c) : void 0;
    return (0, s.jsxs)(tB.D, {
        ...i,
        className: l0.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != d &&
                (0, s.jsx)("div", {
                    className: l0.Vl,
                    children: (0, s.jsx)(l4, { message: t, src: d, aspectRatio: c }),
                }),
            (0, s.jsx)(l9, { message: t, channelId: l }),
        ],
    });
}
function ne(e) {
    let { message: t, onCardClick: l, listItemProps: n } = e,
        { poll: i } = t,
        a = r.useCallback(() => l(t.id), [l, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, s.jsx)(tB.D, {
        ...n,
        className: l0.Nr,
        onClick: a,
        children: (0, s.jsxs)(lC.M, {
            className: l0.zI,
            children: [
                (0, s.jsx)(te.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l0.MH,
                    children: i.question.text,
                }),
                (0, s.jsxs)("div", {
                    className: l0.xd,
                    children: [
                        c.map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: l0.Nf,
                                    children: (0, s.jsx)(W.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: l0.TT,
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
                                className: l0.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: l0.ov,
                    children: (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, lP.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function nt(e) {
    return null != e.message.poll
        ? (0, s.jsx)(ne, { ...e })
        : null != e.message.embedSource
          ? (0, s.jsx)(l5, { ...e })
          : (0, s.jsx)(l7, { ...e });
}
let nl = r.memo(function (e) {
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
                    null == e || l || k.A.isAnnouncementsFetching(e) || lK(e, { limit: 8 });
                }, [e, l, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n, hasFetched: l }
            );
        })(d),
        p = (0, ll.l)("game_profile_announcements"),
        E = r.useCallback(() => {
            let e = i?.guild?.id ?? x;
            null != e &&
                null != h &&
                (o(T.GameProfileTrackActionActions.Announcements),
                lF.default.setGameProfilePendingReturn({ gameId: d, channelId: h, initialScrollOffset: t() }),
                c(),
                lZ({ invite: i, guildId: e, channelId: h, analyticsLocationStack: l }));
        }, [o, c, t, i, x, h, l, d]),
        v = r.useCallback(
            (e) => {
                let n = i?.guild?.id ?? x;
                null != n &&
                    null != h &&
                    (o(T.GameProfileTrackActionActions.AnnouncementsItem),
                    lF.default.setGameProfilePendingReturn({ gameId: d, channelId: h, initialScrollOffset: t() }),
                    c(),
                    lZ({ invite: i, guildId: n, channelId: h, messageId: e, analyticsLocationStack: l }));
            },
            [o, c, t, i, x, h, l, d],
        ),
        A = null != h && u.length > 0;
    return (!f || g) && a
        ? (0, s.jsx)(tx, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, s.jsx)(ld, {
                  gap: 16,
                  children: eQ()
                      .range(3)
                      .map((e) => (0, s.jsx)(l6, {}, e)),
              }),
          })
        : A
          ? (0, s.jsx)(th, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: E,
                children: p
                    ? (0, s.jsx)(li.A, {
                          gap: 16,
                          items: u,
                          getItemKey: l3,
                          itemClassName: l0.hu,
                          renderItem: (e, t) =>
                              (0, s.jsx)(nt, { message: e, channelId: h, onCardClick: v, listItemProps: t }, e.id),
                      })
                    : (0, s.jsx)(ln.A, {
                          gap: 16,
                          children: u.map((e) => (0, s.jsx)(nt, { message: e, channelId: h, onCardClick: v }, e.id)),
                      }),
            })
          : null;
});
var nn = l(28863),
    ni = l(975807),
    na = l(194362);
function ns() {
    let { game: e, trackAction: t } = F(),
        l = r.useCallback(async () => {
            t(T.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, na.a)(ek.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, ni.A)(e);
        }, [t]),
        n = r.useCallback((e) => (0, s.jsx)(nn.Anchor, { onClick: l, children: e }), [l]);
    return e.linkedApplications?.some((e) => e.type === lR.Mh.OFFICIAL)
        ? null
        : (0, s.jsx)(W.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: n }),
          });
}
var nr = l(505779),
    nc = l(998445),
    no = l(274997),
    nd = l(80500),
    nu = l(319745),
    nm = l(488225),
    nx = l(967492),
    nh = l(72265),
    ng = l(454346),
    nf = l(37948),
    nj = l(693558);
let np = { size: "xs", colorClass: nj.w };
function nE(e) {
    let { website: t } = e,
        { trackAction: l } = F(),
        n = (0, nf.A)(),
        {
            action: i,
            icon: a,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case nr.V.OFFICIAL:
                    return {
                        icon: (0, s.jsx)(nc.GlobeEarthIcon, { ...t }),
                        action: T.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case nr.V.TWITTER:
                    return {
                        icon: (0, s.jsx)(no.p, { ...t }),
                        action: T.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case nr.V.YOUTUBE:
                    return {
                        action: T.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, s.jsx)(nd.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case nr.V.FACEBOOK:
                    return {
                        icon: (0, s.jsx)(nu.Z, { ...t }),
                        action: T.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case nr.V.INSTAGRAM:
                    return {
                        icon: (0, s.jsx)(nm.L, { ...t }),
                        action: T.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case nr.V.BLUESKY:
                    return {
                        icon: (0, s.jsx)(nx.a, { ...t }),
                        action: T.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case nr.V.REDDIT:
                    return {
                        icon: (0, s.jsx)(nh.T, { ...t }),
                        action: T.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case nr.V.TWITCH:
                    return {
                        icon: (0, s.jsx)(ng.a, { ...t }),
                        action: T.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, np),
        o = r.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, s.jsx)($.m, {
        text: c,
        children: (0, s.jsx)(tB.D, { onClick: o, className: nj.y, title: c, children: a }),
    });
}
var nv = l(808380),
    nA = l(31300),
    nI = l(802516),
    nN = l(22363),
    nS = l(418524);
function nC(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case nv.Y.DESKTOP:
            return (0, s.jsx)(nA.k, { size: "xs", ...l });
        case nv.Y.XBOX:
            return (0, s.jsx)(nI.Y, { size: "xs", ...l });
        case nv.Y.PLAYSTATION:
            return (0, s.jsx)(nN.X, { size: "xs", ...l });
        case nv.Y.NINTENDO:
            return (0, s.jsx)(nS.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function nb(e) {
    let { platform: t } = e;
    return (0, s.jsx)(
        $.m,
        {
            text: (function (e) {
                switch (e) {
                    case nv.Y.DESKTOP:
                        return em.intl.string(em.t.KT6uCJ);
                    case nv.Y.XBOX:
                        return em.intl.string(em.t.DDWUJp);
                    case nv.Y.PLAYSTATION:
                        return em.intl.string(em.t.fzMz2s);
                    case nv.Y.NINTENDO:
                        return em.intl.string(em.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, s.jsx)(nC, { platform: t }),
        },
        t,
    );
}
let nT = [nv.Y.DESKTOP, nv.Y.XBOX, nv.Y.PLAYSTATION, nv.Y.NINTENDO];
var ny = l(424994),
    nk = l(623828);
function nR() {
    return (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let nL = function () {
    let { game: e } = F(),
        t = (0, tl.c)("GameProfileGameDetails"),
        l = r.useMemo(() => e.genres.map(tK.du).join(", "), [e]),
        n = e.getCompanyByRole(lR.wk.PUBLISHER),
        i = e.getCompanyByRole(lR.wk.DEVELOPER),
        a = n.map((e) => e.name).join(", "),
        c = i.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        d = r.useMemo(() => {
            let t = new Set(e.platforms),
                l = [...t];
            return (
                !t.has(nv.Y.DESKTOP) && (t.has(nv.Y.MACOS) || t.has(nv.Y.LINUX)) && l.push(nv.Y.DESKTOP),
                l.filter((e) => nT.includes(e)).sort((e, t) => nT.indexOf(e) - nT.indexOf(t))
            );
        }, [e.platforms]),
        u = (e?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return nr.p.includes(t);
            })
            .sort((e, t) => nr.p.indexOf(e.category) - nr.p.indexOf(t.category)),
        m = !(0, ta.uJ)(l),
        x = !(0, ta.uJ)(a),
        h = !(0, ta.uJ)(c),
        g = !(0, ta.uJ)(o),
        f = d.length > 0,
        j = u.length > 0 && !u.every((e) => (0, ta.uJ)(e.url));
    return (0, s.jsxs)("div", {
        className: nk.uW,
        children: [
            (0, s.jsx)("div", {
                className: nk.Gf,
                children: (0, s.jsx)(te.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: nk.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: nk.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
                            }),
                            m
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nk.Gu,
                                      children: l,
                                  })
                                : (0, s.jsx)(nR, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nk.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
                            }),
                            x
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nk.Gu,
                                      children: a,
                                  })
                                : (0, s.jsx)(nR, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nk.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== i.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            h
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nk.Gu,
                                      children: c,
                                  })
                                : (0, s.jsx)(nR, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nk.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            g
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nk.Gu,
                                      children: lk.i$(new Date(o), "LL"),
                                  })
                                : (0, s.jsx)(nR, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nk.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            f
                                ? (0, s.jsx)("div", {
                                      className: nk.Gu,
                                      children: d.map((e) => (0, s.jsx)(nb, { platform: e }, e)),
                                  })
                                : (0, s.jsx)(nR, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nk.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, s.jsx)("div", {
                                      className: nk.Gu,
                                      children: u.map((e) => (0, s.jsx)(nE, { website: e }, e.url)),
                                  })
                                : (0, s.jsx)(nR, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nk.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: nk.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: ny.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: nk.OQ, children: (0, s.jsx)(ns, {}) }),
        ],
    });
};
var nG = l(141628),
    nM = l(289363),
    nO = l(793919);
function nP() {
    return (0, s.jsxs)("div", {
        "aria-hidden": !0,
        className: nO.uW,
        children: [
            (0, s.jsx)(e6, { className: nO.dU, width: "30%" }),
            (0, s.jsxs)(e2, {
                className: nO.nV,
                children: [
                    (0, s.jsx)("div", { className: nO.sB, children: (0, s.jsx)(nM.default, { isLoading: !0 }) }),
                    (0, s.jsxs)("div", {
                        className: nO.hQ,
                        children: [
                            (0, s.jsxs)("div", {
                                className: nO.Yv,
                                children: [(0, s.jsx)(e6, { width: "55%" }), (0, s.jsx)(e6, { width: "85%" })],
                            }),
                            (0, s.jsx)(e4, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function n_(e) {
    let { analyticsLocations: t } = e,
        l = (0, tl.c)("GameProfileLinkAccount"),
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
          ? (0, s.jsx)(nP, {})
          : !c || a
            ? null
            : (0, s.jsxs)("div", {
                  className: nO.uW,
                  children: [
                      (0, s.jsx)(te.D, {
                          className: nO.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, s.jsxs)("div", {
                          className: nO.kL,
                          children: [
                              (0, s.jsx)("div", {
                                  className: nO.sB,
                                  children: (0, s.jsx)(nM.default, { application: d }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: nO.hQ,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: nO.FS,
                                          children: [
                                              (0, s.jsx)(te.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: d.name,
                                                  }),
                                              }),
                                              (0, s.jsx)(W.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: em.intl.string(em.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, s.jsx)(K.$, {
                                          variant: "secondary",
                                          icon: nG.A,
                                          text: em.intl.string(em.t.jynBQ5),
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
var nw = l(635377),
    nD = l.n(nw),
    nV = l(80687),
    nF = l(534573),
    nU = l(248643),
    nY = l(256905),
    nW = l(684519),
    nB = l(191096),
    nz = l(90721),
    nH = l(140128);
function nX(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function nK(e, t) {
    return (0, nF.Ec)(e, { size: t, keepAspectRatio: !0, format: ti.QB ? "webp" : null });
}
let nJ = new (nD())({ max: 100 }),
    n$ = r.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, a] = r.useState(null),
            c = null != i && i.url === t ? i.isPortrait : (nJ.get(t) ?? !1),
            o = r.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (nJ.set(t, l),
                        a((e) => (null != e && e.url === t && e.isPortrait === l ? e : { url: t, isPortrait: l })));
                },
                [t],
            ),
            u = r.useCallback((e) => o(e.currentTarget), [o]);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("img", {
                    ref: o,
                    src: nK(t, 106),
                    className: d()(nH.r4, !c && nH.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, s.jsx)("img", { ref: o, src: nK(t, 900), className: d()(nH.c8, c && nH.D7, n), alt: l, onLoad: u }),
            ],
        });
    }),
    nQ = r.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: a, onSelect: c, gameName: o, listItemProps: u } = e,
            m = r.useCallback(() => c(n), [c, n]),
            x = u?.tabIndex;
        return (0, s.jsx)(tB.D, {
            ...u,
            className: d()(nH.JS, i && nH.Y4),
            onClick: m,
            children: (0, s.jsxs)("div", {
                className: nH.ub,
                children: [
                    (0, s.jsx)("img", {
                        src: nK("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nH.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: o }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, s.jsx)("div", {
                            className: nH.UZ,
                            children: (0, s.jsx)(nV.D, { playing: i && a, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nq = r.memo(function (e) {
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
            (0, nz.A)({ videoRef: i, canvasRef: u, enabled: !l }),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    !l && (0, s.jsx)("canvas", { ref: u, className: nH.HW, "aria-hidden": "true" }),
                    (0, s.jsx)("div", {
                        className: nH.tN,
                        children: (0, s.jsx)(nU.A, {
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
                            renderLinkComponent: nW.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: nH.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function nZ() {
    let { game: e, trackAction: t } = F(),
        [l, n] = r.useState(0),
        [i, a] = r.useState(null),
        [c, o] = r.useState(e.screenshotUrls),
        d = r.useRef(null),
        u = r.useRef(null),
        x = (0, m.bG)([tz.Ay], () => tz.Ay.useReducedMotion),
        { obscured: h } = (0, nB.I3)(),
        g = (0, ll.l)("game_profile_media");
    c !== e.screenshotUrls && (o(e.screenshotUrls), n(0));
    let f = r.useMemo(
            () => [
                ...(e.trailers ?? []).map((e) => {
                    let t = (0, lW.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, lW.YE)(e.application_id, e.id, e.width, "webp"),
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
        E = f[p],
        v = E?.type === "VIDEO",
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
            t(v ? T.GameProfileTrackActionActions.ClickTrailer : T.GameProfileTrackActionActions.ClickImage);
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
            (0, nY.R)({
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
        }, [t, f, p, v]),
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
              className: nH.kL,
              children: [
                  v
                      ? (0, s.jsx)("div", {
                            className: nH.ND,
                            children: (0, s.jsx)(
                                nq,
                                {
                                    item: E,
                                    reducedMotion: x,
                                    autoPlay: !x && !h,
                                    videoRef: d,
                                    mediaPlayerRef: S,
                                    onPlay: b,
                                    onPause: y,
                                    onFullscreenChange: R,
                                },
                                `${p}-${E.url}`,
                            ),
                        })
                      : (0, s.jsxs)("div", {
                            className: nH.wp,
                            children: [
                                null != i &&
                                    !x &&
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: nH.Jy,
                                            onAnimationEnd: k,
                                            children: (0, s.jsx)(n$, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, s.jsx)("div", { className: nH.QN }),
                                (0, s.jsx)(tB.D, {
                                    className: nH.gv,
                                    onClick: C,
                                    children: (0, s.jsx)("div", {
                                        className: nH.cs,
                                        children: (0, s.jsx)(
                                            n$,
                                            {
                                                url: E.url,
                                                className: nH.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            E.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  g
                      ? (0, s.jsx)(li.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: j,
                            getItemKey: nX,
                            renderItem: (t, l) => {
                                let { item: n, index: i } = t;
                                return (0, s.jsx)(
                                    nQ,
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
                      : (0, s.jsx)(ln.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: f.map((t, l) =>
                                (0, s.jsx)(
                                    nQ,
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
var n0 = l(49381),
    n1 = l(223273);
function n8(e, t, l) {
    if (null == e || null == t || t < 10) return n1.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? n1.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? n1.vI.VERY_POSITIVE
              : n1.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return n1.vI.MOSTLY_POSITIVE;
    if (e >= 40) return n1.vI.MIXED;
    if (e >= 20) return n1.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return n1.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return n1.vI.VERY_NEGATIVE;
    return n1.vI.OVERWHELMINGLY_NEGATIVE;
}
function n3(e) {
    switch (e) {
        case n1.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case n1.vI.OVERWHELMINGLY_POSITIVE:
        case n1.vI.VERY_POSITIVE:
        case n1.vI.POSITIVE:
        case n1.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case n1.vI.MIXED:
            return "steam-review-text-mixed";
        case n1.vI.MOSTLY_NEGATIVE:
        case n1.vI.NEGATIVE:
        case n1.vI.VERY_NEGATIVE:
        case n1.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var n6 =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    n2 = l(778591);
function n4(e) {
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
var n5 = l(315189);
function n9(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: c } = F(),
        o = (0, nf.A)(),
        d = n8(n, i, "recent" === a),
        u = n3(d),
        m = r.useCallback(() => {
            (c(T.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, c, t]);
    return (0, s.jsx)(tB.D, {
        onClick: m,
        className: n5.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, s.jsxs)("div", {
            className: n5.U6,
            children: [
                (0, s.jsxs)("div", {
                    className: n5.tN,
                    children: [
                        (0, s.jsx)(n0.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(te.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, s.jsx)(
                    $.m,
                    {
                        text:
                            d === n1.vI.NO_USER_REVIEWS
                                ? em.intl.string(em.t.CLMt8J)
                                : em.intl
                                      .format(
                                          "recent" === a
                                              ? em.t.TzvC0k
                                              : "localized" === a
                                                ? em.t.EOfrwm
                                                : em.t["lzANJ/"],
                                          { rating: n, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, s.jsxs)("div", {
                            className: n5.Z0,
                            children: [
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: n5.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case n1.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case n1.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case n1.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case n1.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case n1.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case n1.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case n1.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case n1.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case n1.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case n1.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != i &&
                                    d !== n1.vI.NO_USER_REVIEWS &&
                                    (0, s.jsx)(W.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: em.intl
                                            .format(em.t.sgIoin, { rating_count: i.toLocaleString() })
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
function n7(e) {
    let { url: t } = e,
        { game: l, trackAction: n } = F(),
        { reviews: i } = l,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = a.tier,
        o = a.topCriticRating ?? -1,
        d = a.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, nf.A)(),
        x = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, n, t]);
    return (0, s.jsx)(tB.D, {
        onClick: x,
        className: n5.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, s.jsxs)("div", {
            className: n5.Ur,
            children: [
                (0, s.jsx)(te.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, s.jsxs)("div", {
                    className: n5.WA,
                    children: [
                        null != c ? (0, s.jsx)(ie, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, s.jsx)(it, { rating: o, tier: c }) : null,
                        u
                            ? (0, s.jsx)(W.E, {
                                  variant: "text-xs/medium",
                                  color: n3(n1.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function ie(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case n6.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case n6.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case n6.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case n6.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case n6.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case n6.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case n6.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case n6.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, s.jsx)(
        $.m,
        {
            text: l,
            children: (0, s.jsx)("div", {
                className: n5.TE,
                children: (0, s.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function it(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case n6.MIGHTY:
                    t = "#fc430a";
                    break;
                case n6.STRONG:
                    t = "#9e00b4";
                    break;
                case n6.FAIR:
                    t = "#4aa1ce";
                    break;
                case n6.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, s.jsx)(
        $.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, s.jsxs)("div", {
                className: n5.TE,
                style: { backgroundColor: i },
                children: [
                    (0, s.jsx)(n4, { rating: t, strokeColor: n }),
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: n5.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let il = function () {
    let { game: e } = F(),
        t = (0, tl.c)("GameProfileReviews"),
        l = (0, n2.I)(e.id),
        n = e.opencriticUrl,
        i = e.steamReleaseStatus !== t4.Y.RETIRED_ABANDONED && null != l,
        a = e.reviews?.steam,
        r = n8(a?.recentRating, a?.recentRatingCount, !0),
        c = i && r !== n1.vI.NO_USER_REVIEWS,
        o =
            null != a &&
            null != a.localizedRating &&
            null != a.localizedRatingCount &&
            null != a.ratingCount &&
            a.localizedRatingCount >= 200 &&
            a.ratingCount >= 2e3,
        d = o ? a?.localizedRating : a?.rating,
        u = o ? a?.localizedRatingCount : a?.ratingCount,
        m = o ? em.t["aWb+V4"] : em.t["8e4LiB"],
        x = e.reviews?.opencritic != null && null != n;
    return i || c || x
        ? (0, s.jsxs)("div", {
              className: n5.uW,
              children: [
                  (0, s.jsx)("div", {
                      className: n5.Gf,
                      children: (0, s.jsx)(te.D, {
                          variant: t ? "text-md/medium" : "heading-sm/semibold",
                          color: t ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: n5.kL,
                      children: [
                          c && null != l
                              ? (0, s.jsx)("div", {
                                    className: n5.WH,
                                    children: (0, s.jsx)(n9, {
                                        url: l,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: a?.recentRating,
                                        ratingCount: a?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          i && null != l
                              ? (0, s.jsx)("div", {
                                    className: n5.WH,
                                    children: (0, s.jsx)(n9, {
                                        url: l,
                                        title: em.intl.string(m),
                                        rating: d,
                                        ratingCount: u,
                                        tooltipVariant: o ? "localized" : "all",
                                    }),
                                })
                              : null,
                          x && null != n
                              ? (0, s.jsx)("div", { className: n5.WH, children: (0, s.jsx)(n7, { url: n }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var ii = l(815996),
    ia = l(722258),
    is = l(258245),
    ir = l(561769),
    ic = l(484469),
    io = l(57020),
    id = l(682301);
let iu = [];
var im = l(758836),
    ix = l(399872);
let ih = [0, 1, 2, 3, 4];
function ig(e) {
    return e.skuId;
}
function ij(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        a = r.useContext(ir.v3),
        { trackAction: c } = F(),
        o = r.useRef(null),
        d = r.useCallback(
            (e) => {
                (c(T.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, ia.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, io.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = a;
    return (0, s.jsx)(ir.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, s.jsx)(is.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: ix.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function ip() {
    return (0, s.jsx)(ic.A, {});
}
function iE() {
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
                            null == e || t || k.A.isShopCollectionFetching(e) || lz(e);
                        }, [e, t]),
                        { skuIds: n ?? iu, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, id.hv)(t, { flattenVariants: !0 }),
                a = (0, r.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                s = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && s)) };
        })(e.shopCollectionIds?.[0]),
        a = r.useCallback(() => {
            (l(T.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, ii.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: im.G2.CATALOG,
                }));
        }, [l, t]),
        c = (0, ll.l)("game_profile_shop_carousel");
    return i
        ? (0, s.jsx)(tx, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, s.jsx)(ld, { children: ih.map((e) => (0, s.jsx)(ip, {}, e)) }),
          })
        : 0 === n.length
          ? null
          : (0, s.jsx)(th, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: c
                    ? (0, s.jsx)(li.A, {
                          gap: "md",
                          items: n,
                          getItemKey: ig,
                          renderItem: (e, t) => (0, s.jsx)(ij, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, s.jsx)(ln.A, { gap: "md", children: n.map((e) => (0, s.jsx)(ij, { product: e }, e.skuId)) }),
            });
}
var iv = l(921138);
let iA = [],
    iI = [];
var iN = l(987070);
let iS = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iC(e) {
    return e.id;
}
function ib(e) {
    let { className: t } = e;
    return (0, s.jsx)(e2, { className: t, children: (0, s.jsx)(e6, { className: iN.Lg }) });
}
function iT(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = F(),
        a = t.getCoverURL(256),
        [c, o] = r.useState(null),
        d = null == a || c === a,
        { shouldOpenGameProfile: u, gameId: m } = (0, iv.Ay)({
            gameId: t.id,
            source: T.GameProfileSources.SimilarGames,
        }),
        x = r.useCallback(() => {
            (i(T.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                u && null != m && n(m, T.GameProfileSources.SimilarGames));
        }, [t.id, m, i, u, n]),
        h = r.useCallback(() => o(a), [a]);
    return (0, s.jsx)($.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, s.jsxs)(tB.D, {
            ...l,
            className: iN.Nr,
            onClick: x,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, s.jsx)(tJ.Ay, {
                    game: t,
                    className: iN.xe,
                    size: tJ.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !d && (0, s.jsx)(ib, { className: iN.uz }),
            ],
        }),
    });
}
function iy() {
    let { game: e } = F(),
        t = e.id,
        { isFetching: l, similarGames: n } = (function (e) {
            let t = !lB.has(e),
                { data: l, isLoading: n, error: i } = lX(e, t),
                a = t && null != l ? l : iA;
            (0, N.x)(a);
            let s = (0, m.bG)(
                    [tC.A],
                    () => a.some((e) => null == tC.A.getGame(e) && !tC.A.hasNoData(e) && !tC.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [tC.A, D.default],
                    () => {
                        let e = D.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => tC.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, iv.T_)(t) && !(0, M.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: iI };
        })(t),
        i = (0, ll.l)("game_profile_similar_games");
    return lB.has(t)
        ? null
        : l
          ? (0, s.jsx)(tx, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, s.jsx)("div", {
                    className: iN.XG,
                    style: iS,
                    children: (0, s.jsx)(ld, {
                        children: eQ()
                            .range(0, 8)
                            .map((e) => (0, s.jsx)(ib, { className: iN.aZ }, e)),
                    }),
                }),
            })
          : 0 === n.length
            ? null
            : (0, s.jsx)(th, {
                  title: em.intl.string(em.t["6rLyQB"]),
                  children: (0, s.jsx)("div", {
                      className: iN.XG,
                      style: iS,
                      children: i
                          ? (0, s.jsx)(li.A, {
                                gap: "md",
                                items: n,
                                getItemKey: iC,
                                itemClassName: iN.cW,
                                renderItem: (e, t) => (0, s.jsx)(iT, { game: e, listItemProps: t }, e.id),
                            })
                          : (0, s.jsx)(ln.A, { gap: "md", children: n.map((e) => (0, s.jsx)(iT, { game: e }, e.id)) }),
                  }),
              });
}
l(667532);
var ik = l(853022);
let iR = new Set(["1402418703554842694", "356877880938070016"]),
    iL = [nr.V.EPICGAMES, nr.V.STEAM, nr.V.ROBLOX, nr.V.BATTLENET, nr.V.RIOT, nr.V.MINECRAFT];
function iG(e) {
    return (0, s.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iM = l(349361),
    iO = l(924895),
    iP = l(422688),
    i_ = l(505200),
    iw = l(695250);
let iD = function (e) {
    switch (e.category) {
        case nr.V.STEAM:
            return {
                icon: n0.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: T.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case nr.V.EPICGAMES:
            return {
                icon: iM.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: T.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case nr.V.ROBLOX:
            return {
                icon: iO.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: T.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case nr.V.BATTLENET:
            return {
                icon: iP.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: T.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case nr.V.RIOT:
            return {
                icon: i_.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: T.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case nr.V.MINECRAFT:
            return {
                icon: iw.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: T.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: nI.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: T.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var iV = l(242216);
function iF(e) {
    let t,
        l,
        n,
        i,
        a,
        s =
            ((t = (0, n2.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ek.d3x.XBOX_GAME_PASS && !(0, ta.uJ)(e.id));
                return t?.id == null ? null : (0, ik.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            r.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== nr.V.EPICGAMES || !!iR.has(n)) &&
                            (e.category !== nr.V.STEAM || a !== t4.Y.RETIRED_ABANDONED) &&
                            iL.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === t4.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === nr.V.STEAM) ||
                    e.push({ category: nr.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === nr.V.STEAM ? -1 : +(t.category === nr.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function iU(e) {
    let { data: t } = e,
        { trackAction: l } = F(),
        n = (0, nf.A)();
    return (0, s.jsx)(iG, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let iY = function () {
    let { game: e, trackAction: t } = F(),
        { showsStoreLinks: n, storeWebsites: i } = iF(e),
        a = r.useMemo(() => i.map(iD).filter((e) => null != e), [i]);
    if (!n) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, s.jsx)(iU, { data: e });
    }
    if (2 === a.length)
        return (0, s.jsxs)("div", {
            className: iV.G,
            children: [(0, s.jsx)(iU, { data: a[0] }), (0, s.jsx)(iU, { data: a[1] })],
        });
    let c = (0, s.jsx)(iG, {
        text: em.intl.string(em.t["/hMurx"]),
        "aria-label": em.intl.string(em.t.nK60cc),
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
        ? (0, s.jsxs)("div", { className: iV.G, children: [(0, s.jsx)(iU, { data: a[0] }), c] })
        : c;
};
var iW = l(123292),
    iB = l(672572),
    iz = l(94936);
function iH() {
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
    let o = t ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, s.jsxs)("div", {
        className: d()(iB.fi, iz.k),
        children: [
            (0, s.jsx)(W.E, {
                ref: e,
                className: iz.Q,
                lineClamp: t ? void 0 : c,
                variant: "text-md/medium",
                children: i.description,
            }),
            l && (0, s.jsx)(iW.Q, { onClick: n, text: o }),
        ],
    });
}
var iX = l(40478),
    iK = l(764948);
let iJ = r.memo(function (e) {
    let { analyticsLocations: t, selectTab: l, getScrollOffset: n } = e,
        { game: i } = F(),
        a = i.steamReleaseStatus !== t4.Y.RETIRED_ABANDONED;
    return (0, s.jsxs)("div", {
        className: iK.V,
        children: [
            (0, s.jsx)(nZ, {}),
            (0, s.jsxs)("div", {
                className: iX.h,
                children: [
                    (0, s.jsx)(t8, {}),
                    (0, s.jsxs)("div", { className: iX.X, children: [(0, s.jsx)(iY, {}), (0, s.jsx)(iH, {})] }),
                ],
            }),
            (0, s.jsx)(n_, { analyticsLocations: t }),
            (0, s.jsx)(td, {}),
            (0, s.jsx)(nl, { getScrollOffset: n }),
            (0, s.jsx)(lI, { selectTab: l }),
            (0, s.jsx)(iE, {}),
            (0, s.jsx)(iy, {}),
            a && (0, s.jsx)(il, {}),
            (0, s.jsx)(nL, {}),
        ],
    });
});
var i$ = l(164135);
let iQ = r.memo(function (e) {
    let { selectTab: t, getScrollOffset: l } = e;
    return (0, s.jsxs)("div", {
        className: i$.V,
        children: [
            (0, s.jsxs)("div", { className: i$.B, children: [(0, s.jsx)(nZ, {}), (0, s.jsx)(iH, {})] }),
            (0, s.jsx)(nl, { getScrollOffset: l }),
            (0, s.jsx)(lI, { selectTab: t }),
            (0, s.jsx)(iE, {}),
            (0, s.jsx)(iy, {}),
        ],
    });
});
var iq = l(881698),
    iZ = l(928550),
    i0 = l(562708),
    i1 = l(414499),
    i8 = l(359549),
    i3 = l(139286),
    i6 = l(873516);
function i2(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = F();
    (0, i3.A)({
        name: i0.ImpressionNames.CLOUD_PLAY_CTA,
        type: i0.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let a = r.useCallback(() => {
        (i(T.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, s.jsx)($.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, s.jsx)(K.$, {
            icon: i1.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function i4(e) {
    let { cloudPlayAppId: t, analyticsLocations: l } = e,
        { game: n } = F(),
        i = (0, i8.rC)({ applicationId: t, sourceApplicationId: n.id, analyticsLocations: l });
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: i6.k,
              children: (0, s.jsx)(i2, { onCloudPlayClick: i, analyticsLocations: l }),
          });
}
var i5 = l(768626);
function i9(e) {
    let { analyticsLocations: t } = e,
        { game: l } = F(),
        n = (0, iq.A)(l.linkedApplications)?.id,
        [i] = (0, iZ.L_)(l.getOfficialApplicationId()),
        [a] = (0, iZ.L_)(l.id),
        { showsStoreLinks: r } = iF(l),
        c = l.steamReleaseStatus !== t4.Y.RETIRED_ABANDONED;
    return (0, s.jsxs)("div", {
        className: d()(i5.pz, iB.fi, r ? i5.FJ : i5.dg),
        children: [
            null == n || i || a ? null : (0, s.jsx)(i4, { cloudPlayAppId: n, analyticsLocations: t }),
            (0, s.jsxs)("div", {
                className: iK.V,
                children: [
                    (0, s.jsx)(iY, {}),
                    (0, s.jsx)(n_, { analyticsLocations: t }),
                    (0, s.jsx)(td, {}),
                    c && (0, s.jsx)(il, {}),
                    (0, s.jsx)(nL, {}),
                ],
            }),
        ],
    });
}
var i7 = l(105865);
function ae(e) {
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
            (0, s.jsx)(tZ, { ref: c }),
            (0, s.jsxs)(eq.Ch, {
                ref: o,
                className: i7.XG,
                onScroll: m,
                children: [
                    (0, s.jsx)("div", { className: i7.xY, "aria-hidden": !0 }),
                    (0, s.jsx)(t2, {}),
                    (0, s.jsx)(tY.F, {
                        children: t
                            ? (0, s.jsxs)("div", {
                                  className: i7.jC,
                                  children: [
                                      (0, s.jsx)(iQ, { selectTab: l, getScrollOffset: u }),
                                      (0, s.jsx)(i9, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, s.jsx)("div", {
                                  className: i7.b9,
                                  children: (0, s.jsx)(iJ, { analyticsLocations: a, selectTab: l, getScrollOffset: u }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var at = l(658820),
    al = l(787188);
function an(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, s.jsx)(at.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: t7.Ye.GAME_PROFILE_GAME_SHOP,
        className: al.kL,
        scrollerClassName: al.XG,
        promotionBannerClassName: al.Rv,
    });
}
var ai = l(733391),
    aa = l(171616);
function as(e) {
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
        { clientThemesClassName: B } = (0, v.Ay)(),
        z = (0, m.bG)([b.default], () => b.default.locale),
        H = r.useMemo(() => (0, T.generateViewId)(), []),
        { analyticsLocations: X } = (0, j.Ay)(f.A.GAME_PROFILE),
        K = (0, R.s)(t),
        { data: J } = (0, N.I)(t),
        $ = J?.getOfficialApplicationId(),
        Q = (0, L.rG)(J),
        q = null != $,
        Z = (0, m.bG)([E.A], () => null != $ && E.A.didFetchingApplicationFail($), [$]),
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
        { invite: ec, isMember: eo, isResolving: eu } = (0, L.Ay)(J, W),
        { socialLayerStorefrontRecommendationsData: em, socialLayerStorefrontRecommendationsLoading: ex } = (function (
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
                s = (0, m.bG)([E.A], () => null != n && E.A.didFetchingApplicationFail(n), [n]),
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
        { navigation: eE, selectionVersion: ev } = (function (e) {
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
        { selectedTab: eA } = eE,
        eI = (function (e) {
            let { game: t, navigation: l } = e,
                { selectedTab: n, selectTab: i } = l,
                a = t?.id,
                s = t?.getOfficialApplicationId(),
                c = ed({ location: "GameProfileModal" });
            r.useEffect(() => {
                c && (0, ai.Xw)();
            }, [c]);
            let o = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != s && P.A.hasStorefrontForApplicationId(s) ? s : null),
                    [a, s],
                ),
                d = c && null != o,
                { storefront: u } = (0, aa.A)({ applicationId: d ? o : null }),
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
        })({ game: J, navigation: eE }),
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
                    isCommunityInviteResolving: eu,
                    isMember: eo,
                    socialLayerStorefrontRecommendationsData: em,
                    socialLayerStorefrontRecommendationsLoading: ex,
                    hasCommerceTab: eN,
                    storefrontPromotion: eT,
                    closeModal: ej,
                    navigateToGame: o,
                    trackAction: eh,
                    viewId: H,
                };
        }, [J, F, ei, en, ea, es, er, ec, Q, q, Z, eu, eo, em, ex, eN, eT, ej, o, eh, H]);
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
                          className: d()(B, iB.kL),
                          ref: ef,
                          children: (0, s.jsxs)(S.A, {
                              obscured: et,
                              onClose: ep,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: d()(iB.sx, { [iB.Tk]: eA !== y.COMMERCE }),
                                      children: (0, s.jsx)(eJ, { navigation: eE, socialLayerStorefront: eI }),
                                  }),
                                  eA === y.OVERVIEW &&
                                      (0, s.jsx)(ae, {
                                          selectTab: eE.selectTab,
                                          selectionVersion: ev,
                                          initialScrollOffset: c,
                                          isTwoColumn: F,
                                          analyticsLocations: X,
                                      }),
                                  eA === y.COMMUNITIES && (0, s.jsx)(tU, {}),
                                  eA === y.COMMERCE && (0, s.jsx)(an, { applicationId: eS, selectedPageIndex: eb }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let ar = function (e) {
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
        as,
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
