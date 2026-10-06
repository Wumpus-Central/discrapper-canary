n.d(t, { default: () => iY });
var l,
    i,
    a = n(477900),
    s = n(582128),
    r = n(503698),
    c = n.n(r),
    o = n(535185),
    d = n(17928),
    u = n(521489),
    m = n(192308),
    x = n(964486),
    h = n(793574),
    g = n(688810),
    f = n(206828),
    j = n(587895),
    p = n(590703),
    A = n(180170),
    v = n(583846),
    E = n(569926),
    I = n(570962),
    N = n(38145),
    b = n(773669),
    k = n(409626),
    C = n(422069),
    S = n(205184),
    T = n(957807),
    y = n(49491),
    R = n(429913),
    L = n(832163),
    M = n(820847),
    O = n(862772),
    P = n(287809);
let G = s.createContext(void 0);
function _() {
    let e = s.useContext(G);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var w = n(109112),
    V = n(761508),
    D = n(834730),
    F = n(739187),
    U = n(857250),
    Y = n(97483),
    W = n(922016),
    B = n(980707),
    z = n(477782),
    H = n(821609),
    X = n(663341),
    K = n(866665),
    J = n(408278),
    $ = n(34188),
    Q = n(173936),
    q = n(365199),
    Z = n(789645),
    ee = n(442433),
    et = n(50268),
    en = n(44724),
    el = n(676924),
    ei = n(957565),
    ea = n(945810);
let es = { enabled: !1 },
    er = (0, ea.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: es,
        variations: { 0: es, 1: { enabled: !0 } },
    });
function ec(e) {
    let { location: t } = e;
    return er.useConfig({ location: t }).enabled;
}
var eo = (((l = {}).OVERVIEW = "overview"), (l.COMMUNITIES = "communities"), (l.COMMERCE = "commerce"), l),
    ed = n(695366),
    eu = n(375708);
n(321073);
var em = n(540185),
    ex = n(926268),
    eh = n(53788),
    eg = n(831453),
    ef = n(785866),
    ej = n(555704),
    ep = n(47675),
    eA = n(633075),
    ev = n(289173),
    eE = n(321191),
    eI = n(958805),
    eN = n(735321),
    eb = n(96173),
    ek = n(280450),
    eC = n(403362);
async function eS(e) {
    let t = e((0, eN.BF)());
    await eI.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var eT = n(652215);
function ey(e) {
    var t;
    let l,
        { game: i, className: r, trackAction: c, activeTab: o } = e,
        u = s.useRef(null),
        x = s.useRef(null),
        g = (0, et.A)({ id: i.id, label: eu.intl.string(eu.t.SHQGPj) }),
        f =
            ((t = i.id),
            (l = s.useCallback(() => {
                null != t &&
                    (c?.(k.GameProfileTrackActionActions.Feedback),
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("142753"),
                            n.e("250440"),
                            n.e("568035"),
                            n.e("268582"),
                            n.e("733771"),
                            n.e("946039"),
                            n.e("55266"),
                            n.e("627495"),
                        ]).then(n.bind(n, 651930));
                        return (n) => (0, a.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, c])),
            null == t
                ? null
                : (0, a.jsx)(z.Dr, {
                      id: "game-profile-something-wrong",
                      label: eu.intl.string(eu.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: ed.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([ek.default], () => ek.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: em.x.FAVORITE_GAMES,
                            addLabel: eu.intl.string(eu.t.fgmitg),
                            removeLabel: eu.intl.string(eu.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: ex.HeartIcon,
                        },
                        {
                            type: em.x.PLAYED_GAMES,
                            addLabel: eu.intl.string(eu.t["0xIVLR"]),
                            removeLabel: eu.intl.string(eu.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eh.G,
                        },
                        {
                            type: em.x.CURRENT_GAMES,
                            addLabel: eu.intl.string(eu.t.G0c4En),
                            removeLabel: eu.intl.string(eu.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: eg.H,
                        },
                        {
                            type: em.x.WANT_TO_PLAY_GAMES,
                            addLabel: eu.intl.string(eu.t.UuBS4K),
                            removeLabel: eu.intl.string(eu.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ef._,
                        },
                    ],
                    [],
                ),
                r = (0, d.yK)([eE.A], () => (null == l ? [] : (eE.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, eb.A)(),
                o = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof eA.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eC.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                u = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await eS((i) => {
                                let a = i.filter(ev.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eN.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new ev.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new ev.Yy({ ...a, games: e });
                                }
                                var s = l;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let c = [...i];
                                return ((c[r] = s), c);
                            }),
                            null == l)
                        )
                            return;
                        let i = l;
                        (0, ep.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            gameId: t,
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                m = s.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await eS((n) =>
                                e
                                    ? n.some((e) => e instanceof eA.R && e.applicationId === o)
                                        ? n
                                        : [(t = new eA.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof eA.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof eA.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, ep.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, eN.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof eA.R && e.applicationId === o);
                h.push(
                    (0, a.jsx)(
                        z.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eu.intl.formatToPlainString(eu.t.Ktb1n8, { name: n })
                                : eu.intl.formatToPlainString(eu.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: ej.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let n = r.filter(ev.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, eN.uA)(n);
                    h.push(
                        (0, a.jsx)(
                            z.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? eu.intl.string(eu.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(i),
        { closeModal: p } = _(),
        A = ec({ location: "GameProfileOverflowMenu" }),
        v = (0, d.bG)([L.A], () => L.A.getApplicationIdFromDetectableId(i.id)),
        E = (0, d.bG)([L.A], () => L.A.hasStorefrontForApplicationId(v), [v]),
        I = s.useCallback(() => {
            null != v && (0, en.G)({ applicationId: v });
        }, [v]),
        N = s.useCallback(() => {
            null != v && (c(k.GameProfileTrackActionActions.GameShop), (0, en.default)({ applicationId: v }), p());
        }, [v, c, p]),
        b = s.useCallback(() => p(!1), [p]),
        C = s.useCallback(() => {
            c(k.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eT.BVt.GAME_PROFILE(i.id)}`;
            (0, ei.C)(e, () => {
                (0, F.P)((0, U.o)(eu.intl.string(eu.t["+5kSoW"]), Y.Ck.SUCCESS));
            });
        }, [i.id, c]);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            o === eo.COMMERCE &&
                (0, a.jsx)(el.A, {
                    location: h.A.GAME_PROFILE,
                    onNavigate: p,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != j &&
                o !== eo.COMMERCE &&
                (0, a.jsx)(W.Y, {
                    targetElementRef: x,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(B.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, ee.Z_)(), t());
                            },
                            "aria-label": eu.intl.string(eu.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(z.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: x,
                            children: (0, a.jsx)(H.$, {
                                icon: X.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eu.intl.string(eu.t.sidPSo),
                            }),
                        }),
                }),
            E &&
                !A &&
                (0, a.jsx)(K.m, {
                    text: eu.intl.string(eu.t.apFNLU),
                    children: (0, a.jsx)(J.K, {
                        icon: $.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eu.intl.string(eu.t.apFNLU),
                        onMouseDown: I,
                        onClick: N,
                    }),
                }),
            o !== eo.COMMERCE &&
                (0, a.jsx)(K.m, {
                    text: eu.intl.string(eu.t.WqhZss),
                    children: (0, a.jsx)(J.K, {
                        icon: Q.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eu.intl.string(eu.t.WqhZss),
                        onClick: C,
                    }),
                }),
            (null != g || null != f) &&
                o !== eo.COMMERCE &&
                (0, a.jsx)(W.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(B.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, ee.Z_)(), t());
                            },
                            "aria-label": eu.intl.string(eu.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(z.rX, { children: f }), (0, a.jsx)(z.rX, { children: g })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(K.m, {
                            text: eu.intl.string(eu.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: u,
                                children: (0, a.jsx)(J.K, {
                                    icon: q.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(J.K, {
                icon: Z.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: b,
                "aria-label": eu.intl.string(eu.t.cpT0Cq),
            }),
        ],
    });
}
let eR = { enabled: !1 },
    eL = (0, ea.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eR,
        variations: { 0: eR, 1: { enabled: !0 } },
    });
function eM(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i } = n;
    if (
        !(function (e) {
            let { location: t } = e;
            return eL.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let s = eu.intl.string(eu.t["3xFZEo"]);
    return (0, a.jsx)(V.V.Item, {
        id: eo.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(eo.COMMUNITIES),
        className: t,
        "aria-label": s,
        children: (0, a.jsx)(D.E, { variant: "text-md/medium", color: "none", children: s }),
    });
}
var eO = n(661531),
    eP = n(331322),
    eG = n(278416),
    e_ = n(478016),
    ew = n(900797),
    eV = n(847374),
    eD = n(421773),
    eF = n(421108);
let eU = "text-md/medium",
    eY = [];
function eW(e) {
    let { label: t, chevron: n, socialLayerStorefront: l } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: n } = e,
                l = Object.values(n?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, eF.ZH)(n));
                }),
                i = (0, eF.tm)(l?.endsAt);
            return t && null != l && !i;
        })(l);
    return (0, a.jsxs)(eP.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, a.jsx)(eG.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eO.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, a.jsxs)(eP.B, {
                as: "span",
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [t, n],
            }),
        ],
    });
}
function eB(e) {
    let { className: t, label: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: r, selectTab: c } = l,
        { storefront: o, selectedStorefrontPageIndex: d, selectStorefrontPage: u } = i,
        m = o?.pages ?? eY,
        x = s.useRef(null),
        { isHovered: h, setIsHovered: g, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, eD.A)(100, 100),
        A = eu.intl.string(eu.t["J3/JCl"]),
        v = s.useCallback(
            (e) => {
                (p(), g(e));
            },
            [p, g],
        );
    return (0, a.jsx)(W.Y, {
        targetElementRef: x,
        shouldShow: h,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => v(!0),
        onRequestClose: () => v(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, a.jsx)(B.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": A,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, a.jsx)(z.rX, {
                        children: m.map((e, t) => {
                            var n;
                            let l,
                                i = r === eo.COMMERCE && t === d,
                                s =
                                    ((n = e.title),
                                    null != (l = n?.trim()) && l.length > 0
                                        ? l
                                        : eu.intl.formatToPlainString(eu.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, a.jsx)(
                                z.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: e_.U } : void 0,
                                    action: () => u(t),
                                },
                                t,
                            );
                        }),
                    }),
                }),
            });
        },
        children: (e, l) => {
            let { isShown: s } = l,
                o = s ? ew.t : eV.a;
            return (0, a.jsx)(V.V.Item, {
                ...e,
                id: eo.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r === eo.COMMERCE ? eo.COMMERCE : void 0,
                onClick: (t) => {
                    (c(eo.COMMERCE), e.onClick(t));
                },
                onMouseLeave: j,
                clickableRef: (e) => {
                    x.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": A,
                "aria-haspopup": "menu",
                children: (0, a.jsx)(D.E, {
                    variant: eU,
                    color: "none",
                    children: (0, a.jsx)(eW, {
                        label: n,
                        chevron: (0, a.jsx)(o, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function ez(e) {
    let { className: t, navigation: n, socialLayerStorefront: l } = e,
        { selectedTab: i, selectTab: s } = n,
        { hasCommerceTab: r, storefront: c } = l;
    if (!r) return null;
    let o = eu.intl.string(eu.t.apFNLU);
    return (c?.pages.length ?? 0) > 1
        ? (0, a.jsx)(eB, { className: t, label: o, navigation: n, socialLayerStorefront: l })
        : (0, a.jsx)(V.V.Item, {
              id: eo.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => s(eo.COMMERCE),
              className: t,
              "aria-label": o,
              children: (0, a.jsx)(D.E, {
                  variant: eU,
                  color: "none",
                  children: (0, a.jsx)(eW, { label: o, socialLayerStorefront: l }),
              }),
          });
}
var eH = n(510954);
function eX(e) {
    let { game: t, trackAction: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: r, selectTab: c } = l,
        o = t.getIconURL(64),
        [d, u] = s.useState(null),
        m = s.useCallback(() => u(o), [o]),
        x = eu.intl.string(eu.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: eH.wx,
        children: (0, a.jsxs)("div", {
            className: eH.ap,
            children: [
                (0, a.jsx)("div", {
                    className: eH.wE,
                    children:
                        null != o && o !== d
                            ? (0, a.jsx)("img", { src: o, alt: "", className: eH.FC, draggable: !1, onError: m })
                            : (0, a.jsx)(w._, { size: "md" }),
                }),
                (0, a.jsxs)(V.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: r,
                    onItemSelect: c,
                    className: eH.vR,
                    children: [
                        (0, a.jsx)(V.V.Item, {
                            id: eo.OVERVIEW,
                            disableItemStyles: !0,
                            className: eH.Mf,
                            "aria-label": x,
                            children: (0, a.jsx)(D.E, { variant: "text-md/medium", color: "none", children: x }),
                        }),
                        (0, a.jsx)(eM, { className: eH.Mf, navigation: l }),
                        (0, a.jsx)(ez, { className: eH.Mf, navigation: l, socialLayerStorefront: i }),
                    ],
                }),
                (0, a.jsx)(ey, { game: t, className: eH.HK, trackAction: n, activeTab: r }),
            ],
        }),
    });
}
var eK = n(689175),
    eJ = n(707554),
    e$ = n(297264),
    eQ = n(369606),
    eq = n(939249),
    eZ = n(775602),
    e0 = n(21161),
    e1 = n(400492),
    e8 = n(541830),
    e3 = n(240248),
    e2 = n(459746);
let e4 = "1552821538409939044";
var e5 = n(175213);
let e6 = n(892799),
    e7 = s.forwardRef(function (e, t) {
        let { game: n } = e,
            l = (function (e) {
                let [t] = s.useState(() => Math.random());
                return s.useMemo(() => {
                    let n = e.getBannerURL(1400);
                    if (null != n) return n;
                    let l = e.screenshotUrls?.length ?? 0;
                    return 0 === l ? null : e.getScreenshotURL(Math.floor(t * l), 1400);
                }, [1400, e, t]);
            })(n);
        return (0, e3.uJ)(l)
            ? null
            : (0, a.jsxs)("div", {
                  ref: t,
                  children: [
                      (0, a.jsx)("div", { className: e5.y1, style: { backgroundImage: `url("${l}")` } }),
                      (0, a.jsx)("div", { className: e5.N4 }),
                  ],
              });
    });
function e9(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(e8.du).join(", ");
    return (0, e3.uJ)(n) ? null : (0, a.jsx)(D.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function te(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: e5.Qc,
        children: [
            (0, a.jsx)(eQ.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(D.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eu.intl.formatToPlainString(eu.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function tt(e) {
    let { game: t } = e;
    return (0, a.jsx)(tn, { game: t, className: c()(e5._M, (0, e2.cO)(t) && e5.i3), imageClassName: e5.xe });
}
function tn(e) {
    let { game: t, className: n, imageClassName: l } = e,
        i = (0, a.jsx)(e2.Ay, { game: t, className: l, size: e2.wu.LARGE });
    return t.id !== e4
        ? (0, a.jsx)("div", { className: n, children: i })
        : (0, a.jsx)(tl, { className: n, children: i });
}
function tl(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(e0.x),
        i = (0, d.bG)([eZ.Ay], () => eZ.Ay.useReducedMotion),
        r = s.useRef({ count: 0, lastTime: 0 });
    return (0, a.jsx)(eq.D, {
        className: c()(n, e5.b3),
        "aria-label": eu.intl.string(eu.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = r.current,
                a = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((r.current = { count: a, lastTime: t }), 3 === a)) {
                if (((r.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, e1.Ak)("discodo");
            }
        },
        children: t,
    });
}
let ti = function (e) {
    let { game: t } = e,
        { isTwoColumn: n } = _(),
        l = t.name;
    return (0, a.jsxs)("div", {
        className: e5.ap,
        children: [
            n && (0, a.jsx)(tn, { game: t, className: c()(e5.Tf, (0, e2.cO)(t) && e5.wS), imageClassName: e5.w$ }),
            (0, a.jsxs)("div", {
                className: e5.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(te, { rank: t.l30Rank }),
                    (0, a.jsxs)("div", {
                        className: e5.$,
                        children: [
                            (0, a.jsx)(e$.D, { variant: "heading-xxl/semibold", children: l }),
                            t.id === e4 &&
                                (0, a.jsx)("img", {
                                    src: e6,
                                    className: e5.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, a.jsx)(e9, { game: t }),
                ],
            }),
        ],
    });
};
var ta = n(792216),
    ts = n(638495),
    tr = n(871123),
    tc = n(439303),
    to = n(317560),
    td = n(467884),
    tu = n(480713),
    tm = n(449543),
    tx = n(197935),
    th = n(761812);
function tg(e) {
    return e;
}
function tf(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: th.B, children: t });
}
function tj(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        i = (0, tu.l)("social_layer_storefront_card_row"),
        r = s.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    (e.preventDefault(), l(n, i));
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : i
          ? (0, a.jsx)(tx.A, {
                gap: "md",
                "aria-label": `${eu.intl.string(eu.t["kocF+6"])}`,
                items: t,
                getItemKey: tg,
                disableFocusRingScope: !0,
                renderItem: (e, t, l) =>
                    (0, a.jsx)(tf, {
                        children: (0, a.jsx)(td.Ay, {
                            positionInSection: l,
                            skuId: e,
                            variant: td.s6.SMALL,
                            analyticsLocations: n,
                            onClick: r,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, a.jsx)(tm.A, {
                gap: "md",
                "aria-label": eu.intl.string(eu.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, a.jsx)(
                        tf,
                        {
                            children: (0, a.jsx)(td.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: td.s6.SMALL,
                                analyticsLocations: n,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var tp = n(320448),
    tA = n(810729);
let tv = { sm: tA.nz, md: tA.a };
function tE(e) {
    let { className: t, width: n } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(tA.qf, t), style: { width: n } });
}
function tI(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: l, style: i, children: n });
}
function tN(e) {
    let { className: t, size: n = "md" } = e;
    return (0, a.jsx)(tE, { className: c()(tA.x6, tv[n], t) });
}
var tb = n(152594);
function tk(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, a.jsxs)("div", {
        className: tb.kL,
        "aria-busy": !0,
        children: [
            (0, a.jsxs)("div", {
                className: tb.wR,
                children: [(0, a.jsx)(tE, { className: tb.Iz, width: n }), l && (0, a.jsx)(tN, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tC(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, a.jsxs)("div", {
        className: tb.kL,
        children: [
            (0, a.jsxs)("div", {
                className: tb.wR,
                children: [
                    (0, a.jsx)(e$.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, a.jsx)(H.$, {
                            size: "sm",
                            icon: tp._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eu.intl.string(eu.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var tS = n(369435);
function tT(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(tS.n, { [tS.C]: 16 === n }), children: t });
}
var ty = n(936785),
    tR = n(403581),
    tL = n(812095),
    tM = n(647474),
    tO = n(162536);
function tP(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, eF.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        s = i ? tR.t : t.Icon;
    return (0, a.jsx)(tM.A, {
        className: c()(tO.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: tO.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: tO.Kk }),
                (0, a.jsx)(D.E, { variant: "text-sm/normal", color: "currentColor", children: (0, tL.U)(t.text) }),
            ],
        }),
    });
}
var tG = n(521058);
function t_() {
    let { storefrontPromotion: e } = _();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: s } = e;
    if (null == s || (0, e3.uJ)(s.headerText)) return null;
    let r = {
        Icon: (0, ty.LZ)(l?.icon ?? null),
        text: s.headerText,
        tooltip: null,
        endsAt: (0, ty.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, a.jsx)(tP, { className: tG.v, promotion: r });
}
let tw = [0, 1, 2, 3],
    tV = { placement: tc.Ye.GAME_PROFILE };
function tD() {
    return (0, a.jsx)(tk, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(tT, { children: tw.map((e) => (0, a.jsx)(tf, { children: (0, a.jsx)(td.yf, {}) }, e)) }),
    });
}
function tF(e) {
    let { trackAction: t, selectTab: n } = e,
        l = (0, ts.k)(),
        {
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: r,
            hasCommerceTab: c,
            closeModal: o,
        } = _(),
        { analyticsLocations: d } = (0, g.Ay)([h.A.GAME_PROFILE]),
        u = s.useCallback(() => {
            if (i?.application != null) {
                if (c) return void n(eo.COMMERCE);
                (t(k.GameProfileTrackActionActions.GameShop),
                    o(),
                    (0, en.default)({ applicationId: i.application.id }));
            }
        }, [i, t, c, n, o]),
        m = s.useCallback(
            (e, n) => {
                let a = i?.guildId;
                null != a &&
                    (t(k.GameProfileTrackActionActions.GameShopItem),
                    (0, to.R)({
                        skuId: e,
                        applicationId: n,
                        isStorefront: !1,
                        analyticsLocations: d,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, tr.rG)(e, t, n, a) && o();
                        },
                    }));
            },
            [t, o, d, i, l],
        );
    if (r) return (0, a.jsx)(tD, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, a.jsxs)(tC, {
        title: eu.intl.string(eu.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, a.jsx)(t_, {}),
            (0, a.jsx)(tc.E9, {
                newValue: tV,
                children: (0, a.jsx)(tj, { skuIds: x, analyticsLocations: d, onCardClick: m }),
            }),
        ],
    });
}
var tU = n(435558),
    tY = n.n(tU),
    tW = n(621466),
    tB = n(966697),
    tz = n(346055),
    tH = n(460905),
    tX = n(776231),
    tK = n(46054),
    tJ = n(58703),
    t$ = n(155718),
    tQ = n(387408),
    tq = n(731068),
    tZ = n(59318),
    t0 = n(320095),
    t1 = n(708676),
    t8 = n(383233),
    t3 = n(998218);
let t2 = /^#{1,3}\s+(.+)$/,
    t4 = /^https?:\/\/\S+$/;
var t5 = n(60465),
    t6 = n(158390),
    t7 = n(636537),
    t9 = n(73153),
    ne = n(103348),
    nt = n(927813),
    nn = n(371794);
let nl = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function ni(e) {
    t9.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, nn.aP)({
                    url: eT.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: b.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(ne.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (t9.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            t9.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        t9.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function na(e) {
    let t = ((await t7.Bo.get({ url: eT.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !nl.has(t),
    );
    t9.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let ns = (0, d.UT)(C.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => C.A.getSimilarGames(e) ?? null,
    load: (e) => na(e),
    retryConfig: { backoff: () => new t6.A(5 * nt.A.Millis.SECOND, 5 * nt.A.Millis.MINUTE) },
    failureStaleAfter: nt.A.Seconds.MINUTE,
});
async function nr(e, t) {
    t9.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await t7.Bo.get({ url: eT.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        t9.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, tQ.A)((0, t0.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, t8._c)(e))
                            return e.components
                                .filter((e) => e.type === t$.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || t4.test(t.trim())
                            ? ((function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return null;
                                  let n = [];
                                  return (
                                      null != t.rawTitle && n.push(`# ${t.rawTitle}`),
                                      null != t.rawDescription && n.push(t.rawDescription),
                                      n.length > 0 ? n.join("\n") : null
                                  );
                              })(e) ?? t)
                            : t;
                    })(l),
                    s = (function (e) {
                        if ((0, t8._c)(e)) {
                            let t = e.components.find((e) => e.type === t$.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, tq.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, tZ.tT)(e.content_type));
                        if (null != t) return (0, tq.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, tZ.XB)(e.content_type));
                        if (null != n) return (0, tq.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, tq.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, tq.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, tq.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(l),
                    { title: r, body: c } =
                        ((t = a.indexOf("\n")),
                        (n = (-1 === t ? a : a.slice(0, t)).match(t2)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    d =
                        a === i || (0, t8._c)(l)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let n = t.author?.name,
                                      l = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = t.color ?? void 0;
                                  if (null != n || null != i || null != s)
                                      return {
                                          authorName: n,
                                          authorIconUrl: l,
                                          providerName: i,
                                          providerIconUrl: a,
                                          url: s,
                                          color: r,
                                      };
                              })(l);
                return {
                    id: l.id,
                    media: s,
                    title: r,
                    body: c,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: o,
                    embedSource: d,
                    poll: l.poll,
                };
            }),
            channelId: l.channel_id ?? void 0,
            guildId: l.guild_id ?? void 0,
        });
    } catch (t) {
        t9.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var nc = n(284009),
    no = n.n(nc),
    nd = n(376728),
    nu = n(976860),
    nm = n(71393),
    nx = n(449054);
async function nh(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    no()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = nm.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eT.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, nx.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eT.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await nd.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, nu.pX)(eT.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var ng = n(806244),
    nf = n(165648);
function nj(e, t) {
    return tK.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function np(e) {
    return e.id;
}
function nA() {
    return (0, a.jsxs)(tI, {
        className: ng.s7,
        children: [
            (0, a.jsx)(tE, { className: ng.o$ }),
            (0, a.jsxs)("div", {
                className: ng.UF,
                children: [(0, a.jsx)(tE, { className: ng.iX }), (0, a.jsx)(tE, { className: ng.jt })],
            }),
        ],
    });
}
function nv(e, t) {
    var n;
    let l,
        i = (0, tX.kr)(364 * (0, tX.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = t3.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function nE(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, r] = s.useState(!1),
        c = s.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, a.jsx)(tB.y, {
              readyState: i ? eT.Rv1.READY : eT.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, a.jsx)("img", {
                  src: n,
                  className: ng.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function nI(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, tW.vq)(e.target, HTMLAnchorElement) ||
                        ((0, tW.vq)(e.target, HTMLSpanElement) && (0, tW.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        d = t.media?.proxyUrl ?? t.media?.url,
        u = null != d ? nv(d, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, a.jsx)(eq.D, {
              ...i,
              className: ng.Nr,
              onClick: r,
              children: (0, a.jsxs)(tz.M, {
                  className: ng.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(D.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: ng.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: ng._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: ng.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: ng.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, a.jsx)(D.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != u &&
                                  (0, a.jsx)("div", {
                                      className: ng.ax,
                                      children: (0, a.jsx)(nE, { message: t, src: u, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(e$.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: ng.DD,
                                      children: nj(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: c()(ng.h_, nf.PT),
                                      children: [nj(t.body, n), (0, a.jsx)("div", { className: ng.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: ng.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: ng.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, a.jsxs)(D.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, tJ.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, a.jsxs)("div", {
                                              className: ng.a5,
                                              children: [
                                                  (0, a.jsx)(tH.n, { size: "xs", color: "currentColor" }),
                                                  (0, a.jsx)(D.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eu.intl.currentLocale).format(
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
let nN = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, a.jsxs)(tz.M, {
        className: ng.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(e$.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: ng.DD,
                    children: nj(t.title, n),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: c()(ng.h_, nf.PT),
                    children: [nj(t.body, n), (0, a.jsx)("div", { className: ng.fm })],
                }),
            (0, a.jsxs)("div", {
                className: ng.ov,
                children: [
                    (0, a.jsx)(D.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, tJ.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: ng.a5,
                            children: [
                                (0, a.jsx)(tH.n, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(D.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(eu.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function nb(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, tW.vq)(e.target, HTMLAnchorElement) ||
                        ((0, tW.vq)(e.target, HTMLSpanElement) && (0, tW.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? nv(o, c) : void 0;
    return (0, a.jsxs)(eq.D, {
        ...i,
        className: ng.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != d &&
                (0, a.jsx)("div", {
                    className: ng.Vl,
                    children: (0, a.jsx)(nE, { message: t, src: d, aspectRatio: c }),
                }),
            (0, a.jsx)(nN, { message: t, channelId: n }),
        ],
    });
}
function nk(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        r = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(eq.D, {
        ...l,
        className: ng.Nr,
        onClick: r,
        children: (0, a.jsxs)(tz.M, {
            className: ng.zI,
            children: [
                (0, a.jsx)(e$.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: ng.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: ng.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: ng.Nf,
                                    children: (0, a.jsx)(D.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: ng.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, a.jsx)(D.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: ng.PF,
                                children: eu.intl.format(eu.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: ng.ov,
                    children: (0, a.jsx)(D.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eu.intl.format(eu.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, t1.J)(i.expiry) ?? eu.intl.string(eu.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function nC(e) {
    return null != e.message.poll
        ? (0, a.jsx)(nk, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(nI, { ...e })
          : (0, a.jsx)(nb, { ...e });
}
let nS = s.memo(function (e) {
    let { gameId: t, trackAction: n, getScrollOffset: l } = e,
        { analyticsLocations: i } = (0, g.Ay)(),
        { invite: r, hasDiscordWebsite: c, closeModal: o } = _(),
        {
            messages: u,
            guildId: m,
            channelId: x,
            loading: h,
            hasFetched: f,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, d.cf)([C.A], () => ({
                data: null != e ? C.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && C.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && C.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || n || C.A.isAnnouncementsFetching(e) || nr(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        j = (0, tu.l)("game_profile_announcements"),
        p = s.useCallback(() => {
            let e = r?.guild?.id ?? m;
            null != e &&
                null != x &&
                (n(k.GameProfileTrackActionActions.Announcements),
                t5.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                o(),
                nh({ invite: r, guildId: e, channelId: x, analyticsLocationStack: i }));
        }, [n, o, l, r, m, x, i, t]),
        A = s.useCallback(
            (e) => {
                let a = r?.guild?.id ?? m;
                null != a &&
                    null != x &&
                    (n(k.GameProfileTrackActionActions.AnnouncementsItem),
                    t5.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                    o(),
                    nh({ invite: r, guildId: a, channelId: x, messageId: e, analyticsLocationStack: i }));
            },
            [n, o, l, r, m, x, i, t],
        ),
        v = null != x && u.length > 0;
    return (!f || h) && c
        ? (0, a.jsx)(tk, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(tT, {
                  gap: 16,
                  children: tY()
                      .range(3)
                      .map((e) => (0, a.jsx)(nA, {}, e)),
              }),
          })
        : v
          ? (0, a.jsx)(tC, {
                title: eu.intl.string(eu.t.B0BV3Y),
                onClickViewAll: p,
                children: j
                    ? (0, a.jsx)(tx.A, {
                          gap: 16,
                          items: u,
                          getItemKey: np,
                          itemClassName: ng.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(nC, { message: e, channelId: x, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(tm.A, {
                          gap: 16,
                          children: u.map((e) => (0, a.jsx)(nC, { message: e, channelId: x, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var nT = n(37537),
    ny = n(28863),
    nR = n(975807),
    nL = n(194362);
function nM(e) {
    let { game: t, trackAction: n } = e,
        l = s.useCallback(async () => {
            n(k.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, nL.a)(eT.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, nR.A)(e);
        }, [n]),
        i = s.useCallback((e) => (0, a.jsx)(ny.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === t$.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(D.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eu.intl.format(eu.t.KAjfKl, { claimLink: i }),
          });
}
var nO = n(505779),
    nP = n(998445),
    nG = n(274997),
    n_ = n(80500),
    nw = n(319745),
    nV = n(488225),
    nD = n(967492),
    nF = n(72265),
    nU = n(454346),
    nY = n(37948),
    nW = n(471177);
let nB = { size: "xs", colorClass: nW.w };
function nz(e) {
    let { website: t, trackAction: n } = e,
        l = (0, nY.A)(),
        {
            action: i,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case nO.V.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(nP.GlobeEarthIcon, { ...t }),
                        action: k.GameProfileTrackActionActions.WebsiteLink,
                        title: eu.intl.string(eu.t.fOUKvg),
                    };
                case nO.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(nG.p, { ...t }),
                        action: k.GameProfileTrackActionActions.XLink,
                        title: eu.intl.string(eu.t.INic4y),
                    };
                case nO.V.YOUTUBE:
                    return {
                        action: k.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(n_.C, { ...t }),
                        title: eu.intl.string(eu.t.lNmxbE),
                    };
                case nO.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(nw.Z, { ...t }),
                        action: k.GameProfileTrackActionActions.FacebookLink,
                        title: eu.intl.string(eu.t.FjyREK),
                    };
                case nO.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(nV.L, { ...t }),
                        action: k.GameProfileTrackActionActions.InstagramLink,
                        title: eu.intl.string(eu.t["cgR+IK"]),
                    };
                case nO.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(nD.a, { ...t }),
                        action: k.GameProfileTrackActionActions.BlueskyLink,
                        title: eu.intl.string(eu.t["D/PHq5"]),
                    };
                case nO.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(nF.T, { ...t }),
                        action: k.GameProfileTrackActionActions.RedditLink,
                        title: eu.intl.string(eu.t["Hgb+fc"]),
                    };
                case nO.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(nU.a, { ...t }),
                        action: k.GameProfileTrackActionActions.TwitchLink,
                        title: eu.intl.string(eu.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, nB),
        o = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, a.jsx)(K.m, {
        text: c,
        children: (0, a.jsx)(eq.D, { onClick: o, className: nW.y, title: c, children: r }),
    });
}
var nH = n(808380),
    nX = n(31300),
    nK = n(802516),
    nJ = n(22363),
    n$ = n(418524);
function nQ(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case nH.Y.DESKTOP:
            return (0, a.jsx)(nX.k, { size: "xs", ...n });
        case nH.Y.XBOX:
            return (0, a.jsx)(nK.Y, { size: "xs", ...n });
        case nH.Y.PLAYSTATION:
            return (0, a.jsx)(nJ.X, { size: "xs", ...n });
        case nH.Y.NINTENDO:
            return (0, a.jsx)(n$.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function nq(e) {
    let { platform: t } = e;
    return (0, a.jsx)(
        K.m,
        {
            text: (function (e) {
                switch (e) {
                    case nH.Y.DESKTOP:
                        return eu.intl.string(eu.t.KT6uCJ);
                    case nH.Y.XBOX:
                        return eu.intl.string(eu.t.DDWUJp);
                    case nH.Y.PLAYSTATION:
                        return eu.intl.string(eu.t.fzMz2s);
                    case nH.Y.NINTENDO:
                        return eu.intl.string(eu.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(nQ, { platform: t }),
        },
        t,
    );
}
let nZ = [nH.Y.DESKTOP, nH.Y.XBOX, nH.Y.PLAYSTATION, nH.Y.NINTENDO];
var n0 = n(424994),
    n1 = n(623828);
function n8() {
    return (0, a.jsx)(D.E, { variant: "text-sm/normal", color: "text-subtle", children: eu.intl.string(eu.t.GruYxV) });
}
let n3 = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, nT.c)("GameProfileGameDetails"),
        i = s.useMemo(() => t.genres.map(e8.du).join(", "), [t]),
        r = t.getCompanyByRole(t$.wk.PUBLISHER),
        c = t.getCompanyByRole(t$.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        d = c.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        m = s.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(nH.Y.DESKTOP) && (e.has(nH.Y.MACOS) || e.has(nH.Y.LINUX)) && n.push(nH.Y.DESKTOP),
                n.filter((e) => nZ.includes(e)).sort((e, t) => nZ.indexOf(e) - nZ.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return nO.p.includes(t);
            })
            .sort((e, t) => nO.p.indexOf(e.category) - nO.p.indexOf(t.category)),
        h = !(0, e3.uJ)(i),
        g = !(0, e3.uJ)(o),
        f = !(0, e3.uJ)(d),
        j = !(0, e3.uJ)(u),
        p = m.length > 0,
        A = x.length > 0 && !x.every((e) => (0, e3.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: n1.uW,
        children: [
            (0, a.jsx)("div", {
                className: n1.Gf,
                children: (0, a.jsx)(e$.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: eu.intl.string(eu.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: n1.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: n1.J1,
                        children: [
                            (0, a.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eu.intl.string(eu.t.pDgwYB) : eu.intl.string(eu.t.mjFKqn),
                            }),
                            h
                                ? (0, a.jsx)(D.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: n1.Gu,
                                      children: i,
                                  })
                                : (0, a.jsx)(n8, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: n1.J1,
                        children: [
                            (0, a.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eu.intl.string(eu.t.Hc7Enk) : eu.intl.string(eu.t["4Byy/G"]),
                            }),
                            g
                                ? (0, a.jsx)(D.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: n1.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(n8, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: n1.J1,
                        children: [
                            (0, a.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? eu.intl.string(eu.t.KATEJB) : eu.intl.string(eu.t.na3PT0),
                            }),
                            f
                                ? (0, a.jsx)(D.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: n1.Gu,
                                      children: d,
                                  })
                                : (0, a.jsx)(n8, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: n1.J1,
                        children: [
                            (0, a.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eu.intl.string(eu.t.H3mPDT),
                            }),
                            j
                                ? (0, a.jsx)(D.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: n1.Gu,
                                      children: tJ.i$(new Date(u), "LL"),
                                  })
                                : (0, a.jsx)(n8, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: n1.J1,
                        children: [
                            (0, a.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? eu.intl.string(eu.t.PNqxNe) : eu.intl.string(eu.t["UxAag+"]),
                            }),
                            p
                                ? (0, a.jsx)("div", {
                                      className: n1.Gu,
                                      children: m.map((e) => (0, a.jsx)(nq, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(n8, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: n1.J1,
                        children: [
                            (0, a.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eu.intl.string(eu.t["Oj3o1/"]),
                            }),
                            A
                                ? (0, a.jsx)("div", {
                                      className: n1.Gu,
                                      children: x.map((e) => (0, a.jsx)(nz, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, a.jsx)(n8, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: n1.J1,
                        children: [
                            (0, a.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eu.intl.string(eu.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: n1.Gu,
                                children: eu.intl.format(eu.t.XPFZVl, { igdbLink: n0.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: n1.OQ, children: (0, a.jsx)(nM, { game: t, trackAction: n }) }),
        ],
    });
};
var n2 = n(714991),
    n4 = n(486020),
    n5 = n(213098);
function n6() {
    return (0, a.jsxs)(tI, {
        className: n5.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(tE, { className: n5.dU, width: "30%" }),
            (0, a.jsx)(tI, {
                className: n5.nV,
                children: (0, a.jsxs)("div", {
                    className: n5.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: n5.To,
                            children: [
                                (0, a.jsx)(tE, { className: n5.QV }),
                                (0, a.jsxs)("div", {
                                    className: n5.Yv,
                                    children: [
                                        (0, a.jsx)(tE, { className: n5.Ag }),
                                        (0, a.jsx)(tE, { className: n5.zl }),
                                        (0, a.jsx)(tE, { className: n5.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(tN, {}),
                    ],
                }),
            }),
        ],
    });
}
function n7(e) {
    let { guild: t } = e,
        n = n4.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        r = null != n && l !== n,
        c = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, a.jsxs)("div", {
        className: n5._C,
        children: [
            r && (0, a.jsx)(tE, { className: n5.EQ }),
            (0, a.jsx)("img", {
                className: n5.$f,
                src: n,
                alt: eu.intl.formatToPlainString(eu.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function n9(e) {
    let { trackAction: t } = e,
        n = (0, nT.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: i, isCommunityInviteResolving: r, isMember: c, closeModal: o } = _(),
        d = s.useCallback(() => {
            null != l &&
                (t(k.GameProfileTrackActionActions.JoinServer),
                o(),
                t9.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eT.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? i && r
            ? (0, a.jsx)(n6, {})
            : null
        : (0, a.jsxs)("div", {
              className: n5.uW,
              children: [
                  (0, a.jsx)(e$.D, {
                      className: n5.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: eu.intl.string(eu.t["U2N+ci"]),
                  }),
                  (0, a.jsx)("div", {
                      className: n5.kL,
                      children: (0, a.jsxs)("div", {
                          className: n5.hQ,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: n5.To,
                                  children: [
                                      (0, a.jsx)(n7, { guild: l.guild }),
                                      (0, a.jsxs)("div", {
                                          className: n5.yj,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: n5.YS,
                                                  children: [
                                                      (0, a.jsx)(n2.A, { guild: l.guild, size: 16 }),
                                                      (0, a.jsx)(e$.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, e3.uJ)(l.guild?.description) &&
                                                  (0, a.jsx)(D.E, {
                                                      className: n5.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, a.jsxs)("div", {
                                                        className: n5.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: n5.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: n5._o }),
                                                                        (0, a.jsx)(D.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eu.intl.format(eu.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    l.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != l.approximate_member_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: n5.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: n5.jk }),
                                                                        (0, a.jsx)(D.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eu.intl.format(eu.t.zRl6XR, {
                                                                                count: l.approximate_member_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                        ],
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(H.$, {
                                  variant: "secondary",
                                  text: c ? eu.intl.string(eu.t.cEnaWx) : eu.intl.string(eu.t.XpeFYr),
                                  onClick: d,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var le = n(141628),
    lt = n(289363),
    ln = n(793919);
function ll() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: ln.uW,
        children: [
            (0, a.jsx)(tE, { className: ln.dU, width: "30%" }),
            (0, a.jsxs)(tI, {
                className: ln.nV,
                children: [
                    (0, a.jsx)("div", { className: ln.sB, children: (0, a.jsx)(lt.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: ln.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ln.Yv,
                                children: [(0, a.jsx)(tE, { width: "55%" }), (0, a.jsx)(tE, { width: "85%" })],
                            }),
                            (0, a.jsx)(tN, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function li(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, nT.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: i,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: u,
            hasOfficialApplication: m,
            officialApplicationFetchFailed: x,
        } = _(),
        h = (0, d.bG)([P.default], () => P.default.getCurrentUser()),
        g = s.useCallback(() => {
            (t(k.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !m || x || null == h
        ? null
        : null == u || (c && !i)
          ? (0, a.jsx)(ll, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: ln.uW,
                  children: [
                      (0, a.jsx)(e$.D, {
                          className: ln.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eu.intl.string(eu.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: ln.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: ln.sB,
                                  children: (0, a.jsx)(lt.default, { application: u }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: ln.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: ln.FS,
                                          children: [
                                              (0, a.jsx)(e$.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: eu.intl.formatToPlainString(eu.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, a.jsx)(D.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: eu.intl.string(eu.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(H.$, {
                                          variant: "secondary",
                                          icon: le.A,
                                          text: eu.intl.string(eu.t.jynBQ5),
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
var la = n(635377),
    ls = n.n(la),
    lr = n(80687),
    lc = n(534573),
    lo = n(248643),
    ld = n(256905),
    lu = n(684519),
    lm = n(191096),
    lx = n(90721),
    lh = n(140128);
function lg(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function lf(e, t) {
    return (0, lc.Ec)(e, { size: t, keepAspectRatio: !0, format: n4.QB ? "webp" : null });
}
let lj = new (ls())({ max: 100 }),
    lp = s.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [i, r] = s.useState(null),
            o = null != i && i.url === t ? i.isPortrait : (lj.get(t) ?? !1),
            d = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (lj.set(t, n),
                        r((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            u = s.useCallback((e) => d(e.currentTarget), [d]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: d,
                    src: lf(t, 106),
                    className: c()(lh.r4, !o && lh.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, a.jsx)("img", { ref: d, src: lf(t, 900), className: c()(lh.c8, o && lh.D7, l), alt: n, onLoad: u }),
            ],
        });
    }),
    lA = s.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: i, isPlaying: r, onSelect: o, gameName: d, listItemProps: u } = e,
            m = s.useCallback(() => o(l), [o, l]),
            x = u?.tabIndex;
        return (0, a.jsx)(eq.D, {
            ...u,
            className: c()(lh.JS, i && lh.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: lh.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: lf("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: lh.xn,
                        alt: eu.intl.formatToPlainString(eu.t.COYYrn, { game: d }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, a.jsx)("div", {
                            className: lh.UZ,
                            children: (0, a.jsx)(lr.D, { playing: i && r, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    lv = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: i,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: d,
            } = e,
            u = s.useRef(null);
        return (
            (0, lx.A)({ videoRef: i, canvasRef: u, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: u, className: lh.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: lh.tN,
                        children: (0, a.jsx)(lo.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: l,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: lu.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: lh.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function lE(e) {
    let { game: t, trackAction: n } = e,
        [l, i] = s.useState(0),
        [r, c] = s.useState(null),
        [o, u] = s.useState(t.screenshotUrls),
        m = s.useRef(null),
        x = s.useRef(null),
        h = (0, d.bG)([eZ.Ay], () => eZ.Ay.useReducedMotion),
        { obscured: g } = (0, lm.I3)(),
        f = (0, tu.l)("game_profile_media");
    o !== t.screenshotUrls && (u(t.screenshotUrls), i(0));
    let j = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, nn.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, nn.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        p = s.useMemo(() => j.map((e, t) => ({ item: e, index: t })), [j]),
        A = j.length > 0 ? Math.min(l, j.length - 1) : 0,
        v = j[A],
        E = v?.type === "VIDEO",
        I = s.useCallback(
            (e) => {
                let t = j[A],
                    n = j[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), i(e));
            },
            [j, A],
        ),
        [N, b] = s.useState(!1),
        C = s.useRef(null),
        S = s.useCallback(() => {
            n(E ? k.GameProfileTrackActionActions.ClickTrailer : k.GameProfileTrackActionActions.ClickImage);
            let e = m.current,
                t = C.current,
                l = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = j.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === A;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || a, initialTimeSec: n ? s : void 0, videoRef: x };
                }
                return e;
            });
            (0, ld.R)({
                items: r,
                startingIndex: A,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: i,
                onClose: () => {
                    let e = x.current,
                        t = C.current,
                        n = null != e ? !e.paused : l;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        b(n));
                },
            });
        }, [n, j, A, E]),
        T = s.useCallback(() => b(!0), []),
        y = s.useCallback(() => b(!1), []),
        R = s.useCallback(() => c(null), []),
        L = s.useCallback(
            (e) => {
                e && S();
            },
            [S],
        );
    return 0 === j.length
        ? null
        : (0, a.jsxs)("div", {
              className: lh.kL,
              children: [
                  E
                      ? (0, a.jsx)("div", {
                            className: lh.ND,
                            children: (0, a.jsx)(
                                lv,
                                {
                                    item: v,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: C,
                                    onPlay: T,
                                    onPause: y,
                                    onFullscreenChange: L,
                                },
                                `${A}-${v.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: lh.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: lh.Jy,
                                            onAnimationEnd: R,
                                            children: (0, a.jsx)(lp, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, a.jsx)("div", { className: lh.QN }),
                                (0, a.jsx)(eq.D, {
                                    className: lh.gv,
                                    onClick: S,
                                    children: (0, a.jsx)("div", {
                                        className: lh.cs,
                                        children: (0, a.jsx)(
                                            lp,
                                            {
                                                url: v.url,
                                                className: lh.Jf,
                                                alt: eu.intl.formatToPlainString(eu.t.COYYrn, { game: t.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, a.jsx)(tx.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: p,
                            getItemKey: lg,
                            renderItem: (e, n) => {
                                let { item: l, index: i } = e;
                                return (0, a.jsx)(
                                    lA,
                                    {
                                        item: l,
                                        index: i,
                                        isPlaying: N,
                                        isSelected: i === A,
                                        onSelect: I,
                                        gameName: t.name,
                                        listItemProps: n,
                                    },
                                    `${i}-${l.url}`,
                                );
                            },
                        })
                      : (0, a.jsx)(tm.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, a.jsx)(
                                    lA,
                                    {
                                        item: e,
                                        index: n,
                                        isPlaying: N,
                                        isSelected: n === A,
                                        onSelect: I,
                                        gameName: t.name,
                                    },
                                    `${n}-${e.url}`,
                                ),
                            ),
                        }),
              ],
          });
}
var lI = n(49381),
    lN = n(223273);
function lb(e, t, n) {
    if (null == e || null == t || t < 10) return lN.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? lN.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? lN.vI.VERY_POSITIVE
              : lN.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return lN.vI.MOSTLY_POSITIVE;
    if (e >= 40) return lN.vI.MIXED;
    if (e >= 20) return lN.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return lN.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return lN.vI.VERY_NEGATIVE;
    return lN.vI.OVERWHELMINGLY_NEGATIVE;
}
function lk(e) {
    switch (e) {
        case lN.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case lN.vI.OVERWHELMINGLY_POSITIVE:
        case lN.vI.VERY_POSITIVE:
        case lN.vI.POSITIVE:
        case lN.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case lN.vI.MIXED:
            return "steam-review-text-mixed";
        case lN.vI.MOSTLY_NEGATIVE:
        case lN.vI.NEGATIVE:
        case lN.vI.VERY_NEGATIVE:
        case lN.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var lC =
        (((i = {})[(i.MIGHTY = 1)] = "MIGHTY"),
        (i[(i.STRONG = 2)] = "STRONG"),
        (i[(i.FAIR = 3)] = "FAIR"),
        (i[(i.WEAK = 4)] = "WEAK"),
        i),
    lS = n(778591);
function lT(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        s = i * l;
    return (0, a.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - i) * 360) / 2}deg)` },
        children: (0, a.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${s} ${l - s}`,
        }),
    });
}
var ly = n(315189);
function lR(e) {
    let { url: t, trackAction: n, title: l, rating: i, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, nY.A)(),
        d = lb(i, r, "recent" === c),
        u = lk(d),
        m = s.useCallback(() => {
            (n(k.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, a.jsx)(eq.D, {
        onClick: m,
        className: ly.nf,
        role: "link",
        "aria-label": eu.intl.string(eu.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: ly.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: ly.tN,
                    children: [
                        (0, a.jsx)(lI.N, { size: "sm", color: eO.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(e$.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    K.m,
                    {
                        text:
                            d === lN.vI.NO_USER_REVIEWS
                                ? eu.intl.string(eu.t.CLMt8J)
                                : eu.intl
                                      .format(
                                          "recent" === c
                                              ? eu.t.TzvC0k
                                              : "localized" === c
                                                ? eu.t.EOfrwm
                                                : eu.t["lzANJ/"],
                                          { rating: i, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: ly.Z0,
                            children: [
                                (0, a.jsx)(D.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: ly.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case lN.vI.NO_USER_REVIEWS:
                                                return eu.intl.string(eu.t.CLMt8J);
                                            case lN.vI.OVERWHELMINGLY_POSITIVE:
                                                return eu.intl.string(eu.t["75sx1S"]);
                                            case lN.vI.VERY_POSITIVE:
                                                return eu.intl.string(eu.t["EkOVg+"]);
                                            case lN.vI.POSITIVE:
                                                return eu.intl.string(eu.t.ZUkFtr);
                                            case lN.vI.MOSTLY_POSITIVE:
                                                return eu.intl.string(eu.t.M7Z09a);
                                            case lN.vI.MIXED:
                                                return eu.intl.string(eu.t.c8yuHR);
                                            case lN.vI.MOSTLY_NEGATIVE:
                                                return eu.intl.string(eu.t.H0MSjG);
                                            case lN.vI.NEGATIVE:
                                                return eu.intl.string(eu.t.vpLrgz);
                                            case lN.vI.VERY_NEGATIVE:
                                                return eu.intl.string(eu.t["5spYuX"]);
                                            case lN.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eu.intl.string(eu.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== lN.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(D.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eu.intl
                                            .format(eu.t.sgIoin, { rating_count: r.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${c}`,
                ),
            ],
        }),
    });
}
function lL(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: i } = t,
        r = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, nY.A)(),
        x = s.useCallback(() => {
            (l(k.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, a.jsx)(eq.D, {
        onClick: x,
        className: ly.nf,
        role: "link",
        "aria-label": eu.intl.string(eu.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: ly.Ur,
            children: [
                (0, a.jsx)(e$.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eu.intl.string(eu.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: ly.WA,
                    children: [
                        null != c ? (0, a.jsx)(lM, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, a.jsx)(lO, { rating: o, tier: c }) : null,
                        u
                            ? (0, a.jsx)(D.E, {
                                  variant: "text-xs/medium",
                                  color: lk(lN.vI.NO_USER_REVIEWS),
                                  children: eu.intl.string(eu.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function lM(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case lC.MIGHTY:
                    return eu.intl.string(eu.t.aZej2g);
                case lC.STRONG:
                    return eu.intl.string(eu.t.MLxnSg);
                case lC.FAIR:
                    return eu.intl.string(eu.t["3f19KA"]);
                case lC.WEAK:
                    return eu.intl.string(eu.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case lC.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case lC.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case lC.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case lC.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, a.jsx)(
        K.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: ly.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lO(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case lC.MIGHTY:
                    t = "#fc430a";
                    break;
                case lC.STRONG:
                    t = "#9e00b4";
                    break;
                case lC.FAIR:
                    t = "#4aa1ce";
                    break;
                case lC.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, a.jsx)(
        K.m,
        {
            text: eu.intl.string(eu.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: ly.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(lT, { rating: t, strokeColor: l }),
                    (0, a.jsx)(D.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: ly.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let lP = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, nT.c)("GameProfileReviews"),
        i = (0, lS.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== ta.Y.RETIRED_ABANDONED && null != i,
        c = t.reviews?.steam,
        o = lb(c?.recentRating, c?.recentRatingCount, !0),
        d = r && o !== lN.vI.NO_USER_REVIEWS,
        u =
            null != c &&
            null != c.localizedRating &&
            null != c.localizedRatingCount &&
            null != c.ratingCount &&
            c.localizedRatingCount >= 200 &&
            c.ratingCount >= 2e3,
        m = u ? c?.localizedRating : c?.rating,
        x = u ? c?.localizedRatingCount : c?.ratingCount,
        h = u ? eu.t["aWb+V4"] : eu.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != s;
    return r || d || g
        ? (0, a.jsxs)("div", {
              className: ly.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: ly.Gf,
                      children: (0, a.jsx)(e$.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eu.intl.string(eu.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: ly.kL,
                      children: [
                          d && null != i
                              ? (0, a.jsx)("div", {
                                    className: ly.WH,
                                    children: (0, a.jsx)(lR, {
                                        url: i,
                                        trackAction: n,
                                        title: eu.intl.string(eu.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != i
                              ? (0, a.jsx)("div", {
                                    className: ly.WH,
                                    children: (0, a.jsx)(lR, {
                                        url: i,
                                        trackAction: n,
                                        title: eu.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: u ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != s
                              ? (0, a.jsx)("div", {
                                    className: ly.WH,
                                    children: (0, a.jsx)(lL, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var lG = n(815996),
    l_ = n(722258),
    lw = n(258245),
    lV = n(561769),
    lD = n(484469),
    lF = n(57020),
    lU = n(682301);
let lY = [];
var lW = n(758836),
    lB = n(399872);
let lz = [0, 1, 2, 3, 4];
function lH(e) {
    return e.skuId;
}
let lX = s.createContext({ trackAction: () => {} });
function lK(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        r = s.useContext(lV.v3),
        { trackAction: c } = s.useContext(lX),
        o = s.useRef(null),
        d = s.useCallback(
            (e) => {
                (c(k.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, l_.B)({
                        skuId: i,
                        analyticsLocations: [h.A.GAME_PROFILE],
                        analyticsSource: h.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, lF.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = r;
    return (0, a.jsx)(lV.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(lw.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: lB.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function lJ() {
    return (0, a.jsx)(lD.A, {});
}
function l$(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = _(),
        { products: i, isLoading: r } = (function (e) {
            let {
                    skuIds: t,
                    hasFetched: n,
                    isFetching: l,
                } = (function (e) {
                    let {
                        hasFetched: t,
                        isFetching: n,
                        skuIds: l,
                    } = (0, d.cf)([C.A], () => ({
                        hasFetched: null != e && C.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && C.A.isShopCollectionFetching(e),
                        skuIds: null != e ? C.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, s.useEffect)(() => {
                            null == e || t || C.A.isShopCollectionFetching(e) || ni(e);
                        }, [e, t]),
                        { skuIds: l ?? lY, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, lU.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = s.useCallback(() => {
            (n(k.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, lG.Cz)({
                    analyticsLocations: [h.A.GAME_PROFILE],
                    analyticsSource: h.A.GAME_PROFILE,
                    tab: lW.G2.CATALOG,
                }));
        }, [n, l]),
        o = s.useMemo(() => ({ trackAction: n }), [n]),
        u = (0, tu.l)("game_profile_shop_carousel");
    return r
        ? (0, a.jsx)(tk, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(tT, { children: lz.map((e) => (0, a.jsx)(lJ, {}, e)) }),
          })
        : 0 === i.length
          ? null
          : (0, a.jsx)(lX.Provider, {
                value: o,
                children: (0, a.jsx)(tC, {
                    title: eu.intl.string(eu.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: u
                        ? (0, a.jsx)(tx.A, {
                              gap: "md",
                              items: i,
                              getItemKey: lH,
                              renderItem: (e, t) => (0, a.jsx)(lK, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, a.jsx)(tm.A, {
                              gap: "md",
                              children: i.map((e) => (0, a.jsx)(lK, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var lQ = n(921138),
    lq = n(311043);
let lZ = [],
    l0 = [];
var l1 = n(987070);
let l8 = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function l3(e) {
    return e.id;
}
function l2(e) {
    let { className: t } = e;
    return (0, a.jsx)(tI, { className: t, children: (0, a.jsx)(tE, { className: l1.Lg }) });
}
function l4(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: i } = _(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        d = null == r || c === r,
        { shouldOpenGameProfile: u, gameId: m } = (0, lQ.Ay)({
            gameId: t.id,
            source: k.GameProfileSources.SimilarGames,
        }),
        x = s.useCallback(() => {
            (n(k.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                u && null != m && i(m, k.GameProfileSources.SimilarGames));
        }, [t.id, m, n, u, i]),
        h = s.useCallback(() => o(r), [r]);
    return (0, a.jsx)(K.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, a.jsxs)(eq.D, {
            ...l,
            className: l1.Nr,
            onClick: x,
            "aria-label": eu.intl.formatToPlainString(eu.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(e2.Ay, {
                    game: t,
                    className: l1.xe,
                    size: e2.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !d && (0, a.jsx)(l2, { className: l1.uz }),
            ],
        }),
    });
}
function l5(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: i } = (function (e) {
            let t = !nl.has(e),
                { data: n, isLoading: l, error: i } = ns(e, t),
                a = t && null != n ? n : lZ;
            (0, E.x)(a);
            let s = (0, d.bG)(
                    [lq.A],
                    () => a.some((e) => null == lq.A.getGame(e) && !lq.A.hasNoData(e) && !lq.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, d.yK)(
                    [lq.A, P.default],
                    () => {
                        let e = P.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => lq.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, lQ.T_)(t) && !(0, y.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: l0 };
        })(t),
        s = (0, tu.l)("game_profile_similar_games");
    return nl.has(t)
        ? null
        : l
          ? (0, a.jsx)(tk, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: l1.XG,
                    style: l8,
                    children: (0, a.jsx)(tT, {
                        children: tY()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(l2, { className: l1.aZ }, e)),
                    }),
                }),
            })
          : 0 === i.length
            ? null
            : (0, a.jsx)(tC, {
                  title: eu.intl.string(eu.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: l1.XG,
                      style: l8,
                      children: s
                          ? (0, a.jsx)(tx.A, {
                                gap: "md",
                                items: i,
                                getItemKey: l3,
                                itemClassName: l1.cW,
                                renderItem: (e, t) =>
                                    (0, a.jsx)(l4, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(tm.A, {
                                gap: "md",
                                children: i.map((e) => (0, a.jsx)(l4, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
n(667532);
var l6 = n(853022);
let l7 = new Set(["1402418703554842694", "356877880938070016"]),
    l9 = [nO.V.EPICGAMES, nO.V.STEAM, nO.V.ROBLOX, nO.V.BATTLENET, nO.V.RIOT, nO.V.MINECRAFT];
function ie(e) {
    return (0, a.jsx)(H.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var it = n(349361),
    il = n(924895),
    ii = n(422688),
    ia = n(505200),
    is = n(695250);
let ir = function (e) {
    switch (e.category) {
        case nO.V.STEAM:
            return {
                icon: lI.N,
                text: eu.intl.string(eu.t.FsANs4),
                ariaLabel: eu.intl.string(eu.t["P+ePTG"]),
                action: k.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case nO.V.EPICGAMES:
            return {
                icon: it.r,
                text: eu.intl.string(eu.t.ZbBMHa),
                ariaLabel: eu.intl.string(eu.t.BwX0UW),
                action: k.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case nO.V.ROBLOX:
            return {
                icon: il.H,
                text: eu.intl.string(eu.t["pJ+P+h"]),
                ariaLabel: eu.intl.string(eu.t.tYxpdf),
                action: k.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case nO.V.BATTLENET:
            return {
                icon: ii.a,
                text: eu.intl.string(eu.t["A7grp+"]),
                ariaLabel: eu.intl.string(eu.t.x9at20),
                action: k.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case nO.V.RIOT:
            return {
                icon: ia.A,
                text: eu.intl.string(eu.t.h6MapL),
                ariaLabel: eu.intl.string(eu.t["528nvc"]),
                action: k.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case nO.V.MINECRAFT:
            return {
                icon: is.m,
                text: eu.intl.string(eu.t["HZbmO+"]),
                ariaLabel: eu.intl.string(eu.t.WWTqYn),
                action: k.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: nK.Y,
                text: eu.intl.string(eu.t["QpN/Iz"]),
                ariaLabel: eu.intl.string(eu.t["8JZmmF"]),
                action: k.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var ic = n(242216);
function io(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, lS.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eT.d3x.XBOX_GAME_PASS && !(0, e3.uJ)(e.id));
                return t?.id == null ? null : (0, l6.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== nO.V.EPICGAMES || !!l7.has(l)) &&
                            (e.category !== nO.V.STEAM || a !== ta.Y.RETIRED_ABANDONED) &&
                            l9.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === ta.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === nO.V.STEAM) ||
                    e.push({ category: nO.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === nO.V.STEAM ? -1 : +(t.category === nO.V.STEAM)));
                return (null != n && s.unshift({ category: "XBOX_GAME_PASS", url: n }), s);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function id(e) {
    let { data: t, trackAction: n } = e,
        l = (0, nY.A)();
    return (0, a.jsx)(ie, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let iu = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: i, storeWebsites: r } = io(t),
        c = s.useMemo(() => r.map(ir).filter((e) => null != e), [r]);
    if (!i) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(id, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, a.jsxs)("div", {
            className: ic.G,
            children: [(0, a.jsx)(id, { data: c[0], trackAction: l }), (0, a.jsx)(id, { data: c[1], trackAction: l })],
        });
    let o = (0, a.jsx)(ie, {
        text: eu.intl.string(eu.t["/hMurx"]),
        "aria-label": eu.intl.string(eu.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, m.openModalLazy)(async () => {
                    let { default: e } = await n.e("307898").then(n.bind(n, 679361));
                    return (n) => (0, a.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, a.jsxs)("div", { className: ic.G, children: [(0, a.jsx)(id, { data: c[0], trackAction: l }), o] })
        : o;
};
var im = n(123292),
    ix = n(672572),
    ih = n(94936);
function ig(e) {
    let { game: t, trackAction: n } = e,
        l = s.useRef(null),
        {
            isExpanded: i,
            showToggle: r,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [n, l] = s.useState("full");
            s.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        l((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return (n.observe(t), () => n.disconnect());
            }, [e]);
            let i = s.useCallback(() => {
                "expanded" === n
                    ? (t(k.GameProfileTrackActionActions.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(k.GameProfileTrackActionActions.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: d } = _(),
        u = s.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = i ? eu.intl.string(eu.t["6MwJo/"]) : eu.intl.string(eu.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: c()(ix.fi, ih.k),
        children: [
            (0, a.jsx)(D.E, {
                ref: l,
                className: ih.Q,
                lineClamp: i ? void 0 : u,
                variant: "text-md/medium",
                children: t.description,
            }),
            r && (0, a.jsx)(im.Q, { onClick: o, text: m }),
        ],
    });
}
var ij = n(40478),
    ip = n(764948);
let iA = s.memo(function (e) {
    let { game: t, trackAction: n, analyticsLocations: l, selectTab: i, getScrollOffset: s } = e,
        r = t.steamReleaseStatus !== ta.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: ip.V,
        children: [
            (0, a.jsx)(lE, { game: t, trackAction: n }),
            (0, a.jsxs)("div", {
                className: ij.h,
                children: [
                    (0, a.jsx)(tt, { game: t }),
                    (0, a.jsxs)("div", {
                        className: ij.X,
                        children: [
                            (0, a.jsx)(iu, { game: t, trackAction: n }),
                            (0, a.jsx)(ig, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(li, { analyticsLocations: l, trackAction: n }),
            (0, a.jsx)(n9, { trackAction: n }),
            (0, a.jsx)(nS, { gameId: t.id, trackAction: n, getScrollOffset: s }),
            (0, a.jsx)(tF, { trackAction: n, selectTab: i }),
            (0, a.jsx)(l$, { game: t, trackAction: n }),
            (0, a.jsx)(l5, { gameId: t.id, trackAction: n }),
            r && (0, a.jsx)(lP, { game: t, trackAction: n }),
            (0, a.jsx)(n3, { game: t, trackAction: n }),
        ],
    });
});
var iv = n(164135);
let iE = s.memo(function (e) {
    let { game: t, trackAction: n, selectTab: l, getScrollOffset: i } = e;
    return (0, a.jsxs)("div", {
        className: iv.V,
        children: [
            (0, a.jsxs)("div", {
                className: iv.B,
                children: [(0, a.jsx)(lE, { game: t, trackAction: n }), (0, a.jsx)(ig, { game: t, trackAction: n })],
            }),
            (0, a.jsx)(nS, { gameId: t.id, trackAction: n, getScrollOffset: i }),
            (0, a.jsx)(tF, { trackAction: n, selectTab: l }),
            (0, a.jsx)(l$, { game: t, trackAction: n }),
            (0, a.jsx)(l5, { gameId: t.id, trackAction: n }),
        ],
    });
});
var iI = n(881698),
    iN = n(928550),
    ib = n(562708),
    ik = n(414499),
    iC = n(359549),
    iS = n(139286),
    iT = n(873516);
function iy(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: i } = _();
    (0, iS.A)({
        name: ib.ImpressionNames.CLOUD_PLAY_CTA,
        type: ib.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = s.useCallback(() => {
        (l(k.GameProfileTrackActionActions.CloudPlay), i(), t());
    }, [i, t, l]);
    return (0, a.jsx)(K.m, {
        text: eu.intl.string(eu.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(H.$, {
            icon: ik.h,
            text: eu.intl.string(eu.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function iR(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: i } = e,
        s = (0, iC.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, a.jsx)("div", {
              className: iT.k,
              children: (0, a.jsx)(iy, { onCloudPlayClick: s, analyticsLocations: l, trackAction: i }),
          });
}
var iL = n(768626);
function iM(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        i = (0, iI.A)(t.linkedApplications)?.id,
        [s] = (0, iN.L_)(t.getOfficialApplicationId()),
        [r] = (0, iN.L_)(t.id),
        { showsStoreLinks: o } = io(t),
        d = t.steamReleaseStatus !== ta.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: c()(iL.pz, ix.fi, o ? iL.FJ : iL.dg),
        children: [
            null == i || s || r
                ? null
                : (0, a.jsx)(iR, { gameId: t.id, cloudPlayAppId: i, analyticsLocations: l, trackAction: n }),
            (0, a.jsxs)("div", {
                className: ip.V,
                children: [
                    (0, a.jsx)(iu, { game: t, trackAction: n }),
                    (0, a.jsx)(li, { analyticsLocations: l, trackAction: n }),
                    (0, a.jsx)(n9, { trackAction: n }),
                    d && (0, a.jsx)(lP, { game: t, trackAction: n }),
                    (0, a.jsx)(n3, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
var iO = n(105865);
function iP(e) {
    let {
            game: t,
            isTwoColumn: n,
            selectTab: l,
            selectionVersion: i,
            initialScrollOffset: r,
            trackAction: c,
            analyticsLocations: o,
        } = e,
        d = s.useRef(null),
        u = s.useRef(null),
        m = s.useRef(i);
    (s.useLayoutEffect(() => {
        0 === i && null != r && r > 0 && u.current?.getScrollerNode()?.scrollTo({ top: r, behavior: "instant" });
    }, [r, i]),
        s.useLayoutEffect(() => {
            i !== m.current &&
                (u.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (m.current = i));
        }, [i]));
    let x = s.useCallback(() => u.current?.getScrollerNode()?.scrollTop ?? 0, []),
        h = s.useCallback((e) => {
            if (null != d.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                d.current.style.opacity = String(t);
            }
        }, []);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(e7, { game: t, ref: d }),
            (0, a.jsxs)(eK.Ch, {
                ref: u,
                className: iO.XG,
                onScroll: h,
                children: [
                    (0, a.jsx)("div", { className: iO.xY, "aria-hidden": !0 }),
                    (0, a.jsx)(ti, { game: t }),
                    (0, a.jsx)(eJ.F, {
                        children: n
                            ? (0, a.jsxs)("div", {
                                  className: iO.jC,
                                  children: [
                                      (0, a.jsx)(iE, { game: t, trackAction: c, selectTab: l, getScrollOffset: x }),
                                      (0, a.jsx)(iM, { game: t, trackAction: c, analyticsLocations: o }),
                                  ],
                              })
                            : (0, a.jsx)("div", {
                                  className: iO.b9,
                                  children: (0, a.jsx)(iA, {
                                      game: t,
                                      trackAction: c,
                                      analyticsLocations: o,
                                      selectTab: l,
                                      getScrollOffset: x,
                                  }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var iG = n(658820),
    i_ = n(787188);
function iw(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, a.jsx)(iG.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: h.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: tc.Ye.GAME_PROFILE_GAME_SHOP,
        className: i_.kL,
        scrollerClassName: i_.XG,
        promotionBannerClassName: i_.Rv,
    });
}
var iV = n(733391),
    iD = n(171616);
let iF = {
    [eo.OVERVIEW]: k.GameProfileTrackActionActions.Overview,
    [eo.COMMUNITIES]: k.GameProfileTrackActionActions.Communities,
    [eo.COMMERCE]: k.GameProfileTrackActionActions.GameShop,
};
function iU(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: i,
            onClose: r,
            initialScrollOffset: _,
            navigateToGame: w,
        } = e,
        [V, D] = s.useState(!0),
        [F, U] = s.useState(null),
        { clientThemesClassName: Y } = (0, p.Ay)(),
        W = (0, d.bG)([b.default], () => b.default.locale),
        B = s.useMemo(() => (0, k.generateViewId)(), []),
        { analyticsLocations: z } = (0, g.Ay)(h.A.GAME_PROFILE),
        H = (0, S.s)(t),
        { data: X } = (0, E.I)(t),
        K = X?.getOfficialApplicationId(),
        J = (0, T.rG)(X),
        $ = null != K,
        Q = (0, d.bG)([j.A], () => null != K && j.A.didFetchingApplicationFail(K), [K]),
        q = X?.name ?? "",
        Z = (0, y.A)(X),
        ee = s.useRef(null);
    s.useEffect(() => {
        ee.current = F;
    }, [F]);
    let {
            hasAlreadyLinked: et,
            canStartAuthorization: en,
            fetched: el,
            startAuthorization: ei,
            connectionApp: ea,
        } = (0, f.RD)(X),
        { invite: es, isMember: er, isResolving: ed } = (0, T.Ay)(X, U),
        { socialLayerStorefrontRecommendationsData: eu, socialLayerStorefrontRecommendationsLoading: em } = (function (
            e,
        ) {
            let t = P.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, d.cf)(
                    [L.A],
                    () => ({
                        storefrontApplicationId: null != e ? L.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === L.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, R.h)(l),
                r = (0, d.bG)([j.A], () => null != l && j.A.didFetchingApplicationFail(l), [l]),
                c = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: u } = (0, O.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: M.B.USER_PROFILE,
                }),
                m = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== u || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, u, o],
                ),
                x = "loading" === u,
                h = "success" === u && o.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: m,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (x || h),
            };
        })(t),
        ex = s.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, k.getGuildIdAndVerifiedFromInvite)(ee.current);
                (0, k.trackGameProfileAction)({
                    gameName: q,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: B,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [q, t, B, n],
        );
    ((0, x.Ay)(() => {
        ((0, k.trackGameProfileOpen)({
            source: n,
            viewId: B,
            gameId: t,
            gameName: q,
            authorId: l,
            profileType: k.GameProfileTypes.FullProfile,
        }),
            (0, A.He)());
    }),
        (0, x.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, k.getGuildIdAndVerifiedFromInvite)(ee.current),
                l = Date.now(),
                i = H.map((e) => {
                    let t = (0, v.JM)(e) ? (0, v.W6)(e, l) : (0, v.aJ)(e, W);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, k.trackGameProfileClose)({
                viewId: B,
                gameId: t,
                gameName: q,
                playedFriendIds: H.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: C.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let eh = s.useCallback((e) => {
            D(e.contentRect.width >= 800);
        }, []),
        eg = (0, o.w)(eh, [], { fireOnMount: !0 }),
        ef = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, m.closeAllModals)(), (0, N.M)()) : r();
            },
            [r],
        ),
        ej = s.useCallback(() => ef(!1), [ef]),
        { navigation: ep, selectionVersion: eA } = (function (e) {
            let [t, n] = s.useState(eo.OVERVIEW),
                [l, i] = s.useState(0),
                a = s.useCallback((e) => {
                    (n(e), i((e) => e + 1));
                }, []),
                r = s.useCallback(
                    (n) => {
                        if (n !== t) {
                            let t = iF[n];
                            null != t && e(t);
                        }
                        a(n);
                    },
                    [t, a, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: t, selectTab: r }), [t, r]), selectionVersion: l };
        })(ex),
        { selectedTab: ev } = ep,
        eE = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                c = ec({ location: "GameProfileModal" });
            s.useEffect(() => {
                c && (0, iV.Xw)();
            }, [c]);
            let o = (0, d.bG)(
                    [L.A],
                    () =>
                        (null != a ? L.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && L.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                u = c && null != o,
                { storefront: m } = (0, iD.A)({ applicationId: u ? o : null }),
                [x, h] = s.useState({ storefrontId: m?.id, index: 0 }),
                [g, f] = s.useState(l);
            l !== g && (f(l), l !== eo.COMMERCE && h({ storefrontId: m?.id, index: 0 }));
            let j = x.storefrontId === m?.id && x.index < (m?.pages.length ?? 0) ? x.index : 0,
                p = s.useCallback(
                    (e) => {
                        !u ||
                            e < 0 ||
                            e >= (m?.pages.length ?? 0) ||
                            (h({ storefrontId: m?.id, index: e }), i(eo.COMMERCE));
                    },
                    [u, i, m],
                );
            return {
                hasCommerceTab: u,
                storefrontApplicationId: o,
                storefront: m,
                selectedStorefrontPageIndex: j,
                selectStorefrontPage: p,
            };
        })({ game: X, navigation: ep }),
        { hasCommerceTab: eI, storefrontApplicationId: eN, storefront: eb, selectedStorefrontPageIndex: ek } = eE,
        eC = Object.values(eb?.promotions ?? {})[0] ?? null,
        eS = s.useMemo(
            () => ({
                isTwoColumn: V,
                canStartAuthorization: en,
                hasAlreadyLinked: et,
                fetchedAuthorization: el,
                startAuthorization: ei,
                connectionApp: ea,
                invite: es,
                hasDiscordWebsite: J,
                hasOfficialApplication: $,
                officialApplicationFetchFailed: Q,
                isCommunityInviteResolving: ed,
                isMember: er,
                socialLayerStorefrontRecommendationsData: eu,
                socialLayerStorefrontRecommendationsLoading: em,
                hasCommerceTab: eI,
                storefrontPromotion: eC,
                closeModal: ef,
                navigateToGame: w,
            }),
            [V, en, et, el, ei, ea, es, J, $, Q, ed, er, eu, em, eI, eC, ef, w],
        );
    return null == X
        ? null
        : (0, a.jsx)(g.f5, {
              value: z,
              children: (0, a.jsx)(u.N, {
                  transitionState: i,
                  onClose: r,
                  children: (0, a.jsx)(G.Provider, {
                      value: eS,
                      children: (0, a.jsx)("div", {
                          className: c()(Y, ix.kL),
                          ref: eg,
                          children: (0, a.jsxs)(I.A, {
                              obscured: Z,
                              onClose: ej,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: ix.sx,
                                      children: (0, a.jsx)(eX, {
                                          game: X,
                                          trackAction: ex,
                                          navigation: ep,
                                          socialLayerStorefront: eE,
                                      }),
                                  }),
                                  ev === eo.OVERVIEW &&
                                      (0, a.jsx)(iP, {
                                          game: X,
                                          selectTab: ep.selectTab,
                                          selectionVersion: eA,
                                          initialScrollOffset: _,
                                          isTwoColumn: V,
                                          trackAction: ex,
                                          analyticsLocations: z,
                                      }),
                                  ev === eo.COMMERCE && (0, a.jsx)(iw, { applicationId: eN, selectedPageIndex: ek }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let iY = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, ...r } = e,
        [c, o] = s.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i }),
        d = c.gameId,
        u = s.useCallback(
            (e, t) => {
                e !== d && ((0, T.UT)(e), o({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, a.jsx)(
        iU,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            navigateToGame: u,
            ...r,
        },
        c.gameId,
    );
};
