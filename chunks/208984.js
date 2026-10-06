l.d(t, { default: () => iY });
var n,
    i,
    a = l(477900),
    s = l(582128),
    r = l.t(s, 2),
    c = l(503698),
    o = l.n(c),
    d = l(535185),
    u = l(17928),
    m = l(521489),
    x = l(192308),
    h = l(964486),
    g = l(793574),
    f = l(688810),
    j = l(206828),
    p = l(587895),
    v = l(590703),
    E = l(180170),
    A = l(583846),
    I = l(569926),
    N = l(570962),
    b = l(38145),
    S = l(773669),
    C = l(409626),
    T = l(422069),
    k = l(205184),
    y = l(957807),
    R = l(49491),
    L = l(429913),
    M = l(832163),
    O = l(820847),
    P = l(862772),
    G = l(287809);
let _ = s.createContext(void 0);
function w() {
    let e = s.useContext(_);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var V = l(109112),
    D = l(761508),
    F = l(834730),
    U = l(739187),
    Y = l(857250),
    W = l(97483),
    B = l(922016),
    z = l(980707),
    H = l(477782),
    X = l(821609),
    K = l(663341),
    J = l(866665),
    $ = l(408278),
    Q = l(34188),
    q = l(173936),
    Z = l(365199),
    ee = l(789645),
    et = l(442433),
    el = l(50268),
    en = l(44724),
    ei = l(676924),
    ea = l(957565),
    es = l(945810);
let er = { enabled: !1 },
    ec = (0, es.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: er,
        variations: { 0: er, 1: { enabled: !0 } },
    });
function eo(e) {
    let { location: t } = e;
    return ec.useConfig({ location: t }).enabled;
}
var ed = (((n = {}).OVERVIEW = "overview"), (n.COMMUNITIES = "communities"), (n.COMMERCE = "commerce"), n),
    eu = l(695366),
    em = l(375708);
l(321073);
var ex = l(540185),
    eh = l(926268),
    eg = l(53788),
    ef = l(831453),
    ej = l(785866),
    ep = l(555704),
    ev = l(47675),
    eE = l(633075),
    eA = l(289173),
    eI = l(321191),
    eN = l(958805),
    eb = l(735321),
    eS = l(96173),
    eC = l(280450),
    eT = l(403362);
async function ek(e) {
    let t = e((0, eb.BF)());
    await eN.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var ey = l(652215);
function eR(e) {
    var t;
    let n,
        i,
        { game: c, className: o, activeTab: d } = e,
        m = s.useRef(null),
        h = s.useRef(null),
        f = (0, el.A)({ id: c.id, label: em.intl.string(em.t.SHQGPj) }),
        j =
            ((t = c.id),
            (n = r.useContext(_)?.trackAction),
            (i = s.useCallback(() => {
                null != t &&
                    (n?.(C.GameProfileTrackActionActions.Feedback),
                    (0, x.openModalLazy)(async () => {
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
                        return (l) => (0, a.jsx)(e, { ...l, detected: { gameId: t } });
                    }));
            }, [t, n])),
            null == t
                ? null
                : (0, a.jsx)(H.Dr, {
                      id: "game-profile-something-wrong",
                      label: em.intl.string(em.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: eu.E },
                  })),
        p = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, u.bG)([eC.default], () => eC.default.getId()),
                i = s.useMemo(
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
                r = (0, u.yK)([eI.A], () => (null == n ? [] : (eI.A.getUserProfile(n)?.widgets ?? [])), [n]),
                c = (0, eS.A)(),
                o = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof eE.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eT.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                d = s.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await ek((i) => {
                                let a = i.filter(eA.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eb.uA)(a))) return i;
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
                        (0, ev.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
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
                            (await ek((l) =>
                                e
                                    ? l.some((e) => e instanceof eE.R && e.applicationId === o)
                                        ? l
                                        : [(t = new eE.R({ applicationId: o })), ...l]
                                    : ((t = l.find((e) => e instanceof eE.R && e.applicationId === o) ?? null),
                                      l.filter((e) => !(e instanceof eE.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, ev.un)({
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
                let e = r.some((e) => e instanceof eE.R && e.applicationId === o);
                h.push(
                    (0, a.jsx)(
                        H.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? em.intl.formatToPlainString(em.t.Ktb1n8, { name: l })
                                : em.intl.formatToPlainString(em.t.Xp6iZt, { name: l }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: ep.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let l = r.filter(eA.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.gameId === t),
                        i = !n && null != l && (0, eb.uA)(l);
                    h.push(
                        (0, a.jsx)(
                            H.Dr,
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
        })(c),
        { closeModal: v, trackAction: E } = w(),
        A = eo({ location: "GameProfileOverflowMenu" }),
        I = (0, u.bG)([M.A], () => M.A.getApplicationIdFromDetectableId(c.id)),
        N = (0, u.bG)([M.A], () => M.A.hasStorefrontForApplicationId(I), [I]),
        b = s.useCallback(() => {
            null != I && (0, en.G)({ applicationId: I });
        }, [I]),
        S = s.useCallback(() => {
            null != I && (E(C.GameProfileTrackActionActions.GameShop), (0, en.default)({ applicationId: I }), v());
        }, [I, E, v]),
        T = s.useCallback(() => v(!1), [v]),
        k = s.useCallback(() => {
            E(C.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${ey.BVt.GAME_PROFILE(c.id)}`;
            (0, ea.C)(e, () => {
                (0, U.P)((0, Y.o)(em.intl.string(em.t["+5kSoW"]), W.Ck.SUCCESS));
            });
        }, [c.id, E]);
    return (0, a.jsxs)("div", {
        className: o,
        children: [
            d === ed.COMMERCE &&
                (0, a.jsx)(ei.A, {
                    location: g.A.GAME_PROFILE,
                    onNavigate: v,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != p &&
                d !== ed.COMMERCE &&
                (0, a.jsx)(B.Y, {
                    targetElementRef: h,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(z.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, et.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(H.rX, { children: p }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: h,
                            children: (0, a.jsx)(X.$, {
                                icon: K.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: em.intl.string(em.t.sidPSo),
                            }),
                        }),
                }),
            N &&
                !A &&
                (0, a.jsx)(J.m, {
                    text: em.intl.string(em.t.apFNLU),
                    children: (0, a.jsx)($.K, {
                        icon: Q.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.apFNLU),
                        onMouseDown: b,
                        onClick: S,
                    }),
                }),
            d !== ed.COMMERCE &&
                (0, a.jsx)(J.m, {
                    text: em.intl.string(em.t.WqhZss),
                    children: (0, a.jsx)($.K, {
                        icon: q.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.WqhZss),
                        onClick: k,
                    }),
                }),
            (null != f || null != j) &&
                d !== ed.COMMERCE &&
                (0, a.jsx)(B.Y, {
                    targetElementRef: m,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(z.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, et.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(H.rX, { children: j }), (0, a.jsx)(H.rX, { children: f })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(J.m, {
                            text: em.intl.string(em.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: m,
                                children: (0, a.jsx)($.K, {
                                    icon: Z.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": em.intl.string(em.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)($.K, {
                icon: ee.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: T,
                "aria-label": em.intl.string(em.t.cpT0Cq),
            }),
        ],
    });
}
let eL = { enabled: !1 },
    eM = (0, es.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eL,
        variations: { 0: eL, 1: { enabled: !0 } },
    });
function eO(e) {
    let { className: t, navigation: l } = e,
        { selectedTab: n, selectTab: i } = l;
    if (
        !(function (e) {
            let { location: t } = e;
            return eM.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let s = em.intl.string(em.t["3xFZEo"]);
    return (0, a.jsx)(D.V.Item, {
        id: ed.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: n,
        onClick: () => i(ed.COMMUNITIES),
        className: t,
        "aria-label": s,
        children: (0, a.jsx)(F.E, { variant: "text-md/medium", color: "none", children: s }),
    });
}
var eP = l(661531),
    eG = l(331322),
    e_ = l(278416),
    ew = l(478016),
    eV = l(900797),
    eD = l(847374),
    eF = l(421773),
    eU = l(421108);
let eY = "text-md/medium",
    eW = [];
function eB(e) {
    let { label: t, chevron: l, socialLayerStorefront: n } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: l } = e,
                n = Object.values(l?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: l } = e;
                    return "nitro" === t && (null == l || null != (0, eU.ZH)(l));
                }),
                i = (0, eU.tm)(n?.endsAt);
            return t && null != n && !i;
        })(n);
    return (0, a.jsxs)(eG.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, a.jsx)(e_.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eP.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, a.jsxs)(eG.B, {
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
function ez(e) {
    let { className: t, label: l, navigation: n, socialLayerStorefront: i } = e,
        { selectedTab: r, selectTab: c } = n,
        { storefront: o, selectedStorefrontPageIndex: d, selectStorefrontPage: u } = i,
        m = o?.pages ?? eW,
        x = s.useRef(null),
        { isHovered: h, setIsHovered: g, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, eF.A)(100, 100),
        v = em.intl.string(em.t["J3/JCl"]),
        E = s.useCallback(
            (e) => {
                (p(), g(e));
            },
            [p, g],
        );
    return (0, a.jsx)(B.Y, {
        targetElementRef: x,
        shouldShow: h,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => E(!0),
        onRequestClose: () => E(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, a.jsx)(z.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": v,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, a.jsx)(H.rX, {
                        children: m.map((e, t) => {
                            var l;
                            let n,
                                i = r === ed.COMMERCE && t === d,
                                s =
                                    ((l = e.title),
                                    null != (n = l?.trim()) && n.length > 0
                                        ? n
                                        : em.intl.formatToPlainString(em.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, a.jsx)(
                                H.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: ew.U } : void 0,
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
            let { isShown: s } = n,
                o = s ? eV.t : eD.a;
            return (0, a.jsx)(D.V.Item, {
                ...e,
                id: ed.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r === ed.COMMERCE ? ed.COMMERCE : void 0,
                onClick: (t) => {
                    (c(ed.COMMERCE), e.onClick(t));
                },
                onMouseLeave: j,
                clickableRef: (e) => {
                    x.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": v,
                "aria-haspopup": "menu",
                children: (0, a.jsx)(F.E, {
                    variant: eY,
                    color: "none",
                    children: (0, a.jsx)(eB, {
                        label: l,
                        chevron: (0, a.jsx)(o, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function eH(e) {
    let { className: t, navigation: l, socialLayerStorefront: n } = e,
        { selectedTab: i, selectTab: s } = l,
        { hasCommerceTab: r, storefront: c } = n;
    if (!r) return null;
    let o = em.intl.string(em.t.apFNLU);
    return (c?.pages.length ?? 0) > 1
        ? (0, a.jsx)(ez, { className: t, label: o, navigation: l, socialLayerStorefront: n })
        : (0, a.jsx)(D.V.Item, {
              id: ed.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => s(ed.COMMERCE),
              className: t,
              "aria-label": o,
              children: (0, a.jsx)(F.E, {
                  variant: eY,
                  color: "none",
                  children: (0, a.jsx)(eB, { label: o, socialLayerStorefront: n }),
              }),
          });
}
var eX = l(510954);
function eK(e) {
    let { game: t, navigation: l, socialLayerStorefront: n } = e,
        { selectedTab: i, selectTab: r } = l,
        c = t.getIconURL(64),
        [o, d] = s.useState(null),
        u = s.useCallback(() => d(c), [c]),
        m = em.intl.string(em.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: eX.wx,
        children: (0, a.jsxs)("div", {
            className: eX.ap,
            children: [
                (0, a.jsx)("div", {
                    className: eX.wE,
                    children:
                        null != c && c !== o
                            ? (0, a.jsx)("img", { src: c, alt: "", className: eX.FC, draggable: !1, onError: u })
                            : (0, a.jsx)(V._, { size: "md" }),
                }),
                (0, a.jsxs)(D.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: r,
                    className: eX.vR,
                    children: [
                        (0, a.jsx)(D.V.Item, {
                            id: ed.OVERVIEW,
                            disableItemStyles: !0,
                            className: eX.Mf,
                            "aria-label": m,
                            children: (0, a.jsx)(F.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, a.jsx)(eO, { className: eX.Mf, navigation: l }),
                        (0, a.jsx)(eH, { className: eX.Mf, navigation: l, socialLayerStorefront: n }),
                    ],
                }),
                (0, a.jsx)(eR, { game: t, className: eX.HK, activeTab: i }),
            ],
        }),
    });
}
var eJ = l(689175),
    e$ = l(707554),
    eQ = l(297264),
    eq = l(369606),
    eZ = l(939249),
    e0 = l(775602),
    e1 = l(21161),
    e8 = l(400492),
    e3 = l(541830),
    e2 = l(240248),
    e4 = l(459746);
let e5 = "1552821538409939044";
var e6 = l(175213);
let e7 = l(892799),
    e9 = s.forwardRef(function (e, t) {
        let { game: l } = e,
            n = (function (e) {
                let [t] = s.useState(() => Math.random());
                return s.useMemo(() => {
                    let l = e.getBannerURL(1400);
                    if (null != l) return l;
                    let n = e.screenshotUrls?.length ?? 0;
                    return 0 === n ? null : e.getScreenshotURL(Math.floor(t * n), 1400);
                }, [1400, e, t]);
            })(l);
        return (0, e2.uJ)(n)
            ? null
            : (0, a.jsxs)("div", {
                  ref: t,
                  children: [
                      (0, a.jsx)("div", { className: e6.y1, style: { backgroundImage: `url("${n}")` } }),
                      (0, a.jsx)("div", { className: e6.N4 }),
                  ],
              });
    });
function te(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(e3.du).join(", ");
    return (0, e2.uJ)(l) ? null : (0, a.jsx)(F.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
function tt(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: e6.Qc,
        children: [
            (0, a.jsx)(eq.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(F.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function tl(e) {
    let { game: t } = e;
    return (0, a.jsx)(tn, { game: t, className: o()(e6._M, (0, e4.cO)(t) && e6.i3), imageClassName: e6.xe });
}
function tn(e) {
    let { game: t, className: l, imageClassName: n } = e,
        i = (0, a.jsx)(e4.Ay, { game: t, className: n, size: e4.wu.LARGE });
    return t.id !== e5
        ? (0, a.jsx)("div", { className: l, children: i })
        : (0, a.jsx)(ti, { className: l, children: i });
}
function ti(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = s.useContext(e1.x),
        i = (0, u.bG)([e0.Ay], () => e0.Ay.useReducedMotion),
        r = s.useRef({ count: 0, lastTime: 0 });
    return (0, a.jsx)(eZ.D, {
        className: o()(l, e6.b3),
        "aria-label": em.intl.string(em.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                l = r.current,
                a = t - l.lastTime > 1e4 ? 1 : l.count + 1;
            if (((r.current = { count: a, lastTime: t }), 3 === a)) {
                if (((r.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    n(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, e8.Ak)("discodo");
            }
        },
        children: t,
    });
}
let ta = function (e) {
    let { game: t } = e,
        { isTwoColumn: l } = w(),
        n = t.name;
    return (0, a.jsxs)("div", {
        className: e6.ap,
        children: [
            l && (0, a.jsx)(tn, { game: t, className: o()(e6.Tf, (0, e4.cO)(t) && e6.wS), imageClassName: e6.w$ }),
            (0, a.jsxs)("div", {
                className: e6.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(tt, { rank: t.l30Rank }),
                    (0, a.jsxs)("div", {
                        className: e6.$,
                        children: [
                            (0, a.jsx)(eQ.D, { variant: "heading-xxl/semibold", children: n }),
                            t.id === e5 &&
                                (0, a.jsx)("img", {
                                    src: e7,
                                    className: e6.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, a.jsx)(te, { game: t }),
                ],
            }),
        ],
    });
};
var ts = l(792216),
    tr = l(638495),
    tc = l(871123),
    to = l(439303),
    td = l(317560),
    tu = l(467884),
    tm = l(480713),
    tx = l(449543),
    th = l(197935),
    tg = l(761812);
function tf(e) {
    return e;
}
function tj(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: tg.B, children: t });
}
function tp(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, tm.l)("social_layer_storefront_card_row"),
        r = s.useMemo(() => {
            if (null != n)
                return (e, t) => {
                    let { skuId: l, applicationId: i } = t;
                    (e.preventDefault(), n(l, i));
                };
        }, [n]);
    return null == t || 0 === t.length
        ? null
        : i
          ? (0, a.jsx)(th.A, {
                gap: "md",
                "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
                items: t,
                getItemKey: tf,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, a.jsx)(tj, {
                        children: (0, a.jsx)(tu.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: tu.s6.SMALL,
                            analyticsLocations: l,
                            onClick: r,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, a.jsx)(tx.A, {
                gap: "md",
                "aria-label": em.intl.string(em.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, a.jsx)(
                        tj,
                        {
                            children: (0, a.jsx)(tu.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: tu.s6.SMALL,
                                analyticsLocations: l,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var tv = l(320448),
    tE = l(810729);
let tA = { sm: tE.nz, md: tE.a };
function tI(e) {
    let { className: t, width: l } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: o()(tE.qf, t), style: { width: l } });
}
function tN(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function tb(e) {
    let { className: t, size: l = "md" } = e;
    return (0, a.jsx)(tI, { className: o()(tE.x6, tA[l], t) });
}
var tS = l(152594);
function tC(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, a.jsxs)("div", {
        className: tS.kL,
        "aria-busy": !0,
        children: [
            (0, a.jsxs)("div", {
                className: tS.wR,
                children: [(0, a.jsx)(tI, { className: tS.Iz, width: l }), n && (0, a.jsx)(tb, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tT(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, a.jsxs)("div", {
        className: tS.kL,
        children: [
            (0, a.jsxs)("div", {
                className: tS.wR,
                children: [
                    (0, a.jsx)(eQ.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, a.jsx)(X.$, {
                            size: "sm",
                            icon: tv._,
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
var tk = l(369435);
function ty(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: o()(tk.n, { [tk.C]: 16 === l }), children: t });
}
var tR = l(936785),
    tL = l(403581),
    tM = l(812095),
    tO = l(647474),
    tP = l(162536);
function tG(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eU.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        s = i ? tL.t : t.Icon;
    return (0, a.jsx)(tO.A, {
        className: o()(tP.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: tP.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: tP.Kk }),
                (0, a.jsx)(F.E, { variant: "text-sm/normal", color: "currentColor", children: (0, tM.U)(t.text) }),
            ],
        }),
    });
}
var t_ = l(521058);
function tw() {
    let { storefrontPromotion: e } = w();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: s } = e;
    if (null == s || (0, e2.uJ)(s.headerText)) return null;
    let r = {
        Icon: (0, tR.LZ)(n?.icon ?? null),
        text: s.headerText,
        tooltip: null,
        endsAt: (0, tR.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, a.jsx)(tG, { className: t_.v, promotion: r });
}
let tV = [0, 1, 2, 3],
    tD = { placement: to.Ye.GAME_PROFILE };
function tF() {
    return (0, a.jsx)(tC, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(ty, { children: tV.map((e) => (0, a.jsx)(tj, { children: (0, a.jsx)(tu.yf, {}) }, e)) }),
    });
}
function tU(e) {
    let { selectTab: t } = e,
        l = (0, tr.k)(),
        {
            trackAction: n,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: r,
            hasCommerceTab: c,
            closeModal: o,
        } = w(),
        { analyticsLocations: d } = (0, f.Ay)([g.A.GAME_PROFILE]),
        u = s.useCallback(() => {
            if (i?.application != null) {
                if (c) return void t(ed.COMMERCE);
                (n(C.GameProfileTrackActionActions.GameShop),
                    o(),
                    (0, en.default)({ applicationId: i.application.id }));
            }
        }, [i, n, c, t, o]),
        m = s.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (n(C.GameProfileTrackActionActions.GameShopItem),
                    (0, td.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: d,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, tc.rG)(e, l, t, a) && o();
                        },
                    }));
            },
            [n, o, d, i, l],
        );
    if (r) return (0, a.jsx)(tF, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, a.jsxs)(tT, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, a.jsx)(tw, {}),
            (0, a.jsx)(to.E9, {
                newValue: tD,
                children: (0, a.jsx)(tp, { skuIds: x, analyticsLocations: d, onCardClick: m }),
            }),
        ],
    });
}
var tY = l(435558),
    tW = l.n(tY),
    tB = l(621466),
    tz = l(966697),
    tH = l(346055),
    tX = l(460905),
    tK = l(776231),
    tJ = l(46054),
    t$ = l(58703),
    tQ = l(155718),
    tq = l(387408),
    tZ = l(731068),
    t0 = l(59318),
    t1 = l(320095),
    t8 = l(708676),
    t3 = l(383233),
    t2 = l(998218);
let t4 = /^#{1,3}\s+(.+)$/,
    t5 = /^https?:\/\/\S+$/;
var t6 = l(60465),
    t7 = l(158390),
    t9 = l(636537),
    le = l(73153),
    lt = l(103348),
    ll = l(927813),
    ln = l(371794);
let li = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function la(e) {
    le.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, ln.aP)({
                    url: ey.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: S.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(lt.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (le.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            le.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        le.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function ls(e) {
    let t = ((await t9.Bo.get({ url: ey.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !li.has(t),
    );
    le.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let lr = (0, u.UT)(T.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => T.A.getSimilarGames(e) ?? null,
    load: (e) => ls(e),
    retryConfig: { backoff: () => new t7.A(5 * ll.A.Millis.SECOND, 5 * ll.A.Millis.MINUTE) },
    failureStaleAfter: ll.A.Seconds.MINUTE,
});
async function lc(e, t) {
    le.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await t9.Bo.get({ url: ey.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        le.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, tq.A)((0, t1.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, t3._c)(e))
                            return e.components
                                .filter((e) => e.type === tQ.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || t5.test(t.trim())
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
                        if ((0, t3._c)(e)) {
                            let t = e.components.find((e) => e.type === tQ.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, tZ.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, t0.tT)(e.content_type));
                        if (null != t) return (0, tZ.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, t0.XB)(e.content_type));
                        if (null != l) return (0, tZ.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, tZ.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, tZ.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, tZ.oU)(
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
                        (l = (-1 === t ? a : a.slice(0, t)).match(t4)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    d =
                        a === i || (0, t3._c)(n)
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
        le.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var lo = l(284009),
    ld = l.n(lo),
    lu = l(376728),
    lm = l(976860),
    lx = l(71393),
    lh = l(449054);
async function lg(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    ld()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = lx.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(ey.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, lh.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: ey.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await lu.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, lm.pX)(ey.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var lf = l(806244),
    lj = l(165648);
function lp(e, t) {
    return tJ.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function lv(e) {
    return e.id;
}
function lE() {
    return (0, a.jsxs)(tN, {
        className: lf.s7,
        children: [
            (0, a.jsx)(tI, { className: lf.o$ }),
            (0, a.jsxs)("div", {
                className: lf.UF,
                children: [(0, a.jsx)(tI, { className: lf.iX }), (0, a.jsx)(tI, { className: lf.jt })],
            }),
        ],
    });
}
function lA(e, t) {
    var l;
    let n,
        i = (0, tK.kr)(364 * (0, tK.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = t2.A.toURLSafe(e))
            ? null
            : (n.searchParams.append("format", "webp"),
              null != i && n.searchParams.append("width", i.toString()),
              null != l && n.searchParams.append("height", l.toString()),
              n.toString())) ?? e
    );
}
function lI(e) {
    let { message: t, src: l, aspectRatio: n } = e,
        [i, r] = s.useState(!1),
        c = s.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, a.jsx)(tz.y, {
              readyState: i ? ey.Rv1.READY : ey.Rv1.LOADING,
              aspectRatio: n,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, a.jsx)("img", {
                  src: l,
                  className: lf.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function lN(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, tB.vq)(e.target, HTMLAnchorElement) ||
                        ((0, tB.vq)(e.target, HTMLSpanElement) && (0, tB.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        d = t.media?.proxyUrl ?? t.media?.url,
        u = null != d ? lA(d, c) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, a.jsx)(eZ.D, {
              ...i,
              className: lf.Nr,
              onClick: r,
              children: (0, a.jsxs)(tH.M, {
                  className: lf.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(F.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: lf.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: lf._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: lf.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: lf.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, a.jsx)(F.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != u &&
                                  (0, a.jsx)("div", {
                                      className: lf.ax,
                                      children: (0, a.jsx)(lI, { message: t, src: u, aspectRatio: c }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(eQ.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: lf.DD,
                                      children: lp(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: o()(lf.h_, lj.PT),
                                      children: [lp(t.body, l), (0, a.jsx)("div", { className: lf.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: lf.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: lf.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, a.jsxs)(F.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, t$.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, a.jsxs)("div", {
                                              className: lf.a5,
                                              children: [
                                                  (0, a.jsx)(tX.n, { size: "xs", color: "currentColor" }),
                                                  (0, a.jsx)(F.E, {
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
let lb = s.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, a.jsxs)(tH.M, {
        className: lf.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(eQ.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: lf.DD,
                    children: lp(t.title, l),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: o()(lf.h_, lj.PT),
                    children: [lp(t.body, l), (0, a.jsx)("div", { className: lf.fm })],
                }),
            (0, a.jsxs)("div", {
                className: lf.ov,
                children: [
                    (0, a.jsx)(F.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, t$.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: lf.a5,
                            children: [
                                (0, a.jsx)(tX.n, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(F.E, {
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
function lS(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, tB.vq)(e.target, HTMLAnchorElement) ||
                        ((0, tB.vq)(e.target, HTMLSpanElement) && (0, tB.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? lA(o, c) : void 0;
    return (0, a.jsxs)(eZ.D, {
        ...i,
        className: lf.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != d &&
                (0, a.jsx)("div", {
                    className: lf.Vl,
                    children: (0, a.jsx)(lI, { message: t, src: d, aspectRatio: c }),
                }),
            (0, a.jsx)(lb, { message: t, channelId: l }),
        ],
    });
}
function lC(e) {
    let { message: t, onCardClick: l, listItemProps: n } = e,
        { poll: i } = t,
        r = s.useCallback(() => l(t.id), [l, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(eZ.D, {
        ...n,
        className: lf.Nr,
        onClick: r,
        children: (0, a.jsxs)(tH.M, {
            className: lf.zI,
            children: [
                (0, a.jsx)(eQ.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: lf.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: lf.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: lf.Nf,
                                    children: (0, a.jsx)(F.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: lf.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, a.jsx)(F.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: lf.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: lf.ov,
                    children: (0, a.jsx)(F.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, t8.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function lT(e) {
    return null != e.message.poll
        ? (0, a.jsx)(lC, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(lN, { ...e })
          : (0, a.jsx)(lS, { ...e });
}
let lk = s.memo(function (e) {
    let { gameId: t, getScrollOffset: l } = e,
        { analyticsLocations: n } = (0, f.Ay)(),
        { invite: i, hasDiscordWebsite: r, closeModal: c, trackAction: o } = w(),
        {
            messages: d,
            guildId: m,
            channelId: x,
            loading: h,
            hasFetched: g,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, u.cf)([T.A], () => ({
                data: null != e ? T.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && T.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && T.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || l || T.A.isAnnouncementsFetching(e) || lc(e, { limit: 8 });
                }, [e, l, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n, hasFetched: l }
            );
        })(t),
        j = (0, tm.l)("game_profile_announcements"),
        p = s.useCallback(() => {
            let e = i?.guild?.id ?? m;
            null != e &&
                null != x &&
                (o(C.GameProfileTrackActionActions.Announcements),
                t6.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                c(),
                lg({ invite: i, guildId: e, channelId: x, analyticsLocationStack: n }));
        }, [o, c, l, i, m, x, n, t]),
        v = s.useCallback(
            (e) => {
                let a = i?.guild?.id ?? m;
                null != a &&
                    null != x &&
                    (o(C.GameProfileTrackActionActions.AnnouncementsItem),
                    t6.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                    c(),
                    lg({ invite: i, guildId: a, channelId: x, messageId: e, analyticsLocationStack: n }));
            },
            [o, c, l, i, m, x, n, t],
        ),
        E = null != x && d.length > 0;
    return (!g || h) && r
        ? (0, a.jsx)(tC, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(ty, {
                  gap: 16,
                  children: tW()
                      .range(3)
                      .map((e) => (0, a.jsx)(lE, {}, e)),
              }),
          })
        : E
          ? (0, a.jsx)(tT, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: p,
                children: j
                    ? (0, a.jsx)(th.A, {
                          gap: 16,
                          items: d,
                          getItemKey: lv,
                          itemClassName: lf.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(lT, { message: e, channelId: x, onCardClick: v, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(tx.A, {
                          gap: 16,
                          children: d.map((e) => (0, a.jsx)(lT, { message: e, channelId: x, onCardClick: v }, e.id)),
                      }),
            })
          : null;
});
var ly = l(37537),
    lR = l(28863),
    lL = l(975807),
    lM = l(194362);
function lO(e) {
    let { game: t } = e,
        { trackAction: l } = w(),
        n = s.useCallback(async () => {
            l(C.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, lM.a)(ey.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, lL.A)(e);
        }, [l]),
        i = s.useCallback((e) => (0, a.jsx)(lR.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === tQ.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(F.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: i }),
          });
}
var lP = l(505779),
    lG = l(998445),
    l_ = l(274997),
    lw = l(80500),
    lV = l(319745),
    lD = l(488225),
    lF = l(967492),
    lU = l(72265),
    lY = l(454346),
    lW = l(37948),
    lB = l(471177);
let lz = { size: "xs", colorClass: lB.w };
function lH(e) {
    let { website: t } = e,
        { trackAction: l } = w(),
        n = (0, lW.A)(),
        {
            action: i,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case lP.V.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(lG.GlobeEarthIcon, { ...t }),
                        action: C.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case lP.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(l_.p, { ...t }),
                        action: C.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case lP.V.YOUTUBE:
                    return {
                        action: C.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(lw.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case lP.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(lV.Z, { ...t }),
                        action: C.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case lP.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(lD.L, { ...t }),
                        action: C.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case lP.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(lF.a, { ...t }),
                        action: C.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case lP.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(lU.T, { ...t }),
                        action: C.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case lP.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(lY.a, { ...t }),
                        action: C.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, lz),
        o = s.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, a.jsx)(J.m, {
        text: c,
        children: (0, a.jsx)(eZ.D, { onClick: o, className: lB.y, title: c, children: r }),
    });
}
var lX = l(808380),
    lK = l(31300),
    lJ = l(802516),
    l$ = l(22363),
    lQ = l(418524);
function lq(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case lX.Y.DESKTOP:
            return (0, a.jsx)(lK.k, { size: "xs", ...l });
        case lX.Y.XBOX:
            return (0, a.jsx)(lJ.Y, { size: "xs", ...l });
        case lX.Y.PLAYSTATION:
            return (0, a.jsx)(l$.X, { size: "xs", ...l });
        case lX.Y.NINTENDO:
            return (0, a.jsx)(lQ.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function lZ(e) {
    let { platform: t } = e;
    return (0, a.jsx)(
        J.m,
        {
            text: (function (e) {
                switch (e) {
                    case lX.Y.DESKTOP:
                        return em.intl.string(em.t.KT6uCJ);
                    case lX.Y.XBOX:
                        return em.intl.string(em.t.DDWUJp);
                    case lX.Y.PLAYSTATION:
                        return em.intl.string(em.t.fzMz2s);
                    case lX.Y.NINTENDO:
                        return em.intl.string(em.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(lq, { platform: t }),
        },
        t,
    );
}
let l0 = [lX.Y.DESKTOP, lX.Y.XBOX, lX.Y.PLAYSTATION, lX.Y.NINTENDO];
var l1 = l(424994),
    l8 = l(623828);
function l3() {
    return (0, a.jsx)(F.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let l2 = function (e) {
    let { game: t } = e,
        l = (0, ly.c)("GameProfileGameDetails"),
        n = s.useMemo(() => t.genres.map(e3.du).join(", "), [t]),
        i = t.getCompanyByRole(tQ.wk.PUBLISHER),
        r = t.getCompanyByRole(tQ.wk.DEVELOPER),
        c = i.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        u = s.useMemo(() => {
            let e = new Set(t.platforms),
                l = [...e];
            return (
                !e.has(lX.Y.DESKTOP) && (e.has(lX.Y.MACOS) || e.has(lX.Y.LINUX)) && l.push(lX.Y.DESKTOP),
                l.filter((e) => l0.includes(e)).sort((e, t) => l0.indexOf(e) - l0.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return lP.p.includes(t);
            })
            .sort((e, t) => lP.p.indexOf(e.category) - lP.p.indexOf(t.category)),
        x = !(0, e2.uJ)(n),
        h = !(0, e2.uJ)(c),
        g = !(0, e2.uJ)(o),
        f = !(0, e2.uJ)(d),
        j = u.length > 0,
        p = m.length > 0 && !m.every((e) => (0, e2.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: l8.uW,
        children: [
            (0, a.jsx)("div", {
                className: l8.Gf,
                children: (0, a.jsx)(eQ.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: l8.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: l8.J1,
                        children: [
                            (0, a.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
                            }),
                            x
                                ? (0, a.jsx)(F.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: l8.Gu,
                                      children: n,
                                  })
                                : (0, a.jsx)(l3, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: l8.J1,
                        children: [
                            (0, a.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== i.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
                            }),
                            h
                                ? (0, a.jsx)(F.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: l8.Gu,
                                      children: c,
                                  })
                                : (0, a.jsx)(l3, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: l8.J1,
                        children: [
                            (0, a.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            g
                                ? (0, a.jsx)(F.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: l8.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(l3, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: l8.J1,
                        children: [
                            (0, a.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            f
                                ? (0, a.jsx)(F.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: l8.Gu,
                                      children: t$.i$(new Date(d), "LL"),
                                  })
                                : (0, a.jsx)(l3, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: l8.J1,
                        children: [
                            (0, a.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            j
                                ? (0, a.jsx)("div", {
                                      className: l8.Gu,
                                      children: u.map((e) => (0, a.jsx)(lZ, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(l3, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: l8.J1,
                        children: [
                            (0, a.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, a.jsx)("div", {
                                      className: l8.Gu,
                                      children: m.map((e) => (0, a.jsx)(lH, { website: e }, e.url)),
                                  })
                                : (0, a.jsx)(l3, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: l8.J1,
                        children: [
                            (0, a.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: l8.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: l1.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: l8.OQ, children: (0, a.jsx)(lO, { game: t }) }),
        ],
    });
};
var l4 = l(714991),
    l5 = l(486020),
    l6 = l(213098);
function l7() {
    return (0, a.jsxs)(tN, {
        className: l6.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(tI, { className: l6.dU, width: "30%" }),
            (0, a.jsx)(tN, {
                className: l6.nV,
                children: (0, a.jsxs)("div", {
                    className: l6.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: l6.To,
                            children: [
                                (0, a.jsx)(tI, { className: l6.QV }),
                                (0, a.jsxs)("div", {
                                    className: l6.Yv,
                                    children: [
                                        (0, a.jsx)(tI, { className: l6.Ag }),
                                        (0, a.jsx)(tI, { className: l6.zl }),
                                        (0, a.jsx)(tI, { className: l6.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(tb, {}),
                    ],
                }),
            }),
        ],
    });
}
function l9(e) {
    let { guild: t } = e,
        l = l5.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = s.useState(void 0),
        r = null != l && n !== l,
        c = s.useCallback(() => {
            i(l);
        }, [l]);
    return (0, a.jsxs)("div", {
        className: l6._C,
        children: [
            r && (0, a.jsx)(tI, { className: l6.EQ }),
            (0, a.jsx)("img", {
                className: l6.$f,
                src: l,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function ne() {
    let e = (0, ly.c)("GameProfileGuildInvite"),
        {
            invite: t,
            hasDiscordWebsite: l,
            isCommunityInviteResolving: n,
            isMember: i,
            closeModal: r,
            trackAction: c,
        } = w(),
        o = s.useCallback(() => {
            null != t &&
                (c(C.GameProfileTrackActionActions.JoinServer),
                r(),
                le.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: ey.BRT.APP }));
        }, [t, c, r]);
    return null == t || null == t.guild
        ? l && n
            ? (0, a.jsx)(l7, {})
            : null
        : (0, a.jsxs)("div", {
              className: l6.uW,
              children: [
                  (0, a.jsx)(eQ.D, {
                      className: l6.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, a.jsx)("div", {
                      className: l6.kL,
                      children: (0, a.jsxs)("div", {
                          className: l6.hQ,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: l6.To,
                                  children: [
                                      (0, a.jsx)(l9, { guild: t.guild }),
                                      (0, a.jsxs)("div", {
                                          className: l6.yj,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: l6.YS,
                                                  children: [
                                                      (0, a.jsx)(l4.A, { guild: t.guild, size: 16 }),
                                                      (0, a.jsx)(eQ.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: t.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, e2.uJ)(t.guild?.description) &&
                                                  (0, a.jsx)(F.E, {
                                                      className: l6.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: t.guild?.description,
                                                  }),
                                              null != t.approximate_member_count || null != t.approximate_presence_count
                                                  ? (0, a.jsxs)("div", {
                                                        className: l6.iR,
                                                        children: [
                                                            null != t.approximate_presence_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: l6.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: l6._o }),
                                                                        (0, a.jsx)(F.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: em.intl.format(em.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    t.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != t.approximate_member_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: l6.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: l6.jk }),
                                                                        (0, a.jsx)(F.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: em.intl.format(em.t.zRl6XR, {
                                                                                count: t.approximate_member_count,
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
                              (0, a.jsx)(X.$, {
                                  variant: "secondary",
                                  text: i ? em.intl.string(em.t.cEnaWx) : em.intl.string(em.t.XpeFYr),
                                  onClick: o,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var nt = l(141628),
    nl = l(289363),
    nn = l(793919);
function ni() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: nn.uW,
        children: [
            (0, a.jsx)(tI, { className: nn.dU, width: "30%" }),
            (0, a.jsxs)(tN, {
                className: nn.nV,
                children: [
                    (0, a.jsx)("div", { className: nn.sB, children: (0, a.jsx)(nl.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: nn.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: nn.Yv,
                                children: [(0, a.jsx)(tI, { width: "55%" }), (0, a.jsx)(tI, { width: "85%" })],
                            }),
                            (0, a.jsx)(tb, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function na(e) {
    let { analyticsLocations: t } = e,
        l = (0, ly.c)("GameProfileLinkAccount"),
        {
            trackAction: n,
            fetchedAuthorization: i,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: d,
            hasOfficialApplication: m,
            officialApplicationFetchFailed: x,
        } = w(),
        h = (0, u.bG)([G.default], () => G.default.getCurrentUser()),
        g = s.useCallback(() => {
            (n(C.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !m || x || null == h
        ? null
        : null == d || (c && !i)
          ? (0, a.jsx)(ni, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: nn.uW,
                  children: [
                      (0, a.jsx)(eQ.D, {
                          className: nn.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: nn.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: nn.sB,
                                  children: (0, a.jsx)(nl.default, { application: d }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: nn.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: nn.FS,
                                          children: [
                                              (0, a.jsx)(eQ.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: d.name,
                                                  }),
                                              }),
                                              (0, a.jsx)(F.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: em.intl.string(em.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(X.$, {
                                          variant: "secondary",
                                          icon: nt.A,
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
var ns = l(635377),
    nr = l.n(ns),
    nc = l(80687),
    no = l(534573),
    nd = l(248643),
    nu = l(256905),
    nm = l(684519),
    nx = l(191096),
    nh = l(90721),
    ng = l(140128);
function nf(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function nj(e, t) {
    return (0, no.Ec)(e, { size: t, keepAspectRatio: !0, format: l5.QB ? "webp" : null });
}
let np = new (nr())({ max: 100 }),
    nv = s.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, r] = s.useState(null),
            c = null != i && i.url === t ? i.isPortrait : (np.get(t) ?? !1),
            d = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (np.set(t, l),
                        r((e) => (null != e && e.url === t && e.isPortrait === l ? e : { url: t, isPortrait: l })));
                },
                [t],
            ),
            u = s.useCallback((e) => d(e.currentTarget), [d]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: d,
                    src: nj(t, 106),
                    className: o()(ng.r4, !c && ng.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, a.jsx)("img", { ref: d, src: nj(t, 900), className: o()(ng.c8, c && ng.D7, n), alt: l, onLoad: u }),
            ],
        });
    }),
    nE = s.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: r, onSelect: c, gameName: d, listItemProps: u } = e,
            m = s.useCallback(() => c(n), [c, n]),
            x = u?.tabIndex;
        return (0, a.jsx)(eZ.D, {
            ...u,
            className: o()(ng.JS, i && ng.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: ng.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: nj("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: ng.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: d }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, a.jsx)("div", {
                            className: ng.UZ,
                            children: (0, a.jsx)(nc.D, { playing: i && r, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nA = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                autoPlay: n,
                videoRef: i,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: d,
            } = e,
            u = s.useRef(null);
        return (
            (0, nh.A)({ videoRef: i, canvasRef: u, enabled: !l }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !l && (0, a.jsx)("canvas", { ref: u, className: ng.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: ng.tN,
                        children: (0, a.jsx)(nd.A, {
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
                            renderLinkComponent: nm.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: ng.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nI(e) {
    let { game: t } = e,
        { trackAction: l } = w(),
        [n, i] = s.useState(0),
        [r, c] = s.useState(null),
        [o, d] = s.useState(t.screenshotUrls),
        m = s.useRef(null),
        x = s.useRef(null),
        h = (0, u.bG)([e0.Ay], () => e0.Ay.useReducedMotion),
        { obscured: g } = (0, nx.I3)(),
        f = (0, tm.l)("game_profile_media");
    o !== t.screenshotUrls && (d(t.screenshotUrls), i(0));
    let j = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, ln.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, ln.YE)(e.application_id, e.id, e.width, "webp"),
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
        v = j.length > 0 ? Math.min(n, j.length - 1) : 0,
        E = j[v],
        A = E?.type === "VIDEO",
        I = s.useCallback(
            (e) => {
                let t = j[v],
                    l = j[e];
                (t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? c(t.url) : c(null), i(e));
            },
            [j, v],
        ),
        [N, b] = s.useState(!1),
        S = s.useRef(null),
        T = s.useCallback(() => {
            l(A ? C.GameProfileTrackActionActions.ClickTrailer : C.GameProfileTrackActionActions.ClickImage);
            let e = m.current,
                t = S.current,
                n = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = j.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === v;
                    return { ...e, autoPlay: !!l && n, autoMute: !l || a, initialTimeSec: l ? s : void 0, videoRef: x };
                }
                return e;
            });
            (0, nu.R)({
                items: r,
                startingIndex: v,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: i,
                onClose: () => {
                    let e = x.current,
                        t = S.current,
                        l = null != e ? !e.paused : n;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        b(l));
                },
            });
        }, [l, j, v, A]),
        k = s.useCallback(() => b(!0), []),
        y = s.useCallback(() => b(!1), []),
        R = s.useCallback(() => c(null), []),
        L = s.useCallback(
            (e) => {
                e && T();
            },
            [T],
        );
    return 0 === j.length
        ? null
        : (0, a.jsxs)("div", {
              className: ng.kL,
              children: [
                  A
                      ? (0, a.jsx)("div", {
                            className: ng.ND,
                            children: (0, a.jsx)(
                                nA,
                                {
                                    item: E,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: S,
                                    onPlay: k,
                                    onPause: y,
                                    onFullscreenChange: L,
                                },
                                `${v}-${E.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: ng.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: ng.Jy,
                                            onAnimationEnd: R,
                                            children: (0, a.jsx)(nv, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, a.jsx)("div", { className: ng.QN }),
                                (0, a.jsx)(eZ.D, {
                                    className: ng.gv,
                                    onClick: T,
                                    children: (0, a.jsx)("div", {
                                        className: ng.cs,
                                        children: (0, a.jsx)(
                                            nv,
                                            {
                                                url: E.url,
                                                className: ng.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: t.name }),
                                            },
                                            E.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, a.jsx)(th.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: p,
                            getItemKey: nf,
                            renderItem: (e, l) => {
                                let { item: n, index: i } = e;
                                return (0, a.jsx)(
                                    nE,
                                    {
                                        item: n,
                                        index: i,
                                        isPlaying: N,
                                        isSelected: i === v,
                                        onSelect: I,
                                        gameName: t.name,
                                        listItemProps: l,
                                    },
                                    `${i}-${n.url}`,
                                );
                            },
                        })
                      : (0, a.jsx)(tx.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, l) =>
                                (0, a.jsx)(
                                    nE,
                                    {
                                        item: e,
                                        index: l,
                                        isPlaying: N,
                                        isSelected: l === v,
                                        onSelect: I,
                                        gameName: t.name,
                                    },
                                    `${l}-${e.url}`,
                                ),
                            ),
                        }),
              ],
          });
}
var nN = l(49381),
    nb = l(223273);
function nS(e, t, l) {
    if (null == e || null == t || t < 10) return nb.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? nb.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? nb.vI.VERY_POSITIVE
              : nb.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nb.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nb.vI.MIXED;
    if (e >= 20) return nb.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return nb.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return nb.vI.VERY_NEGATIVE;
    return nb.vI.OVERWHELMINGLY_NEGATIVE;
}
function nC(e) {
    switch (e) {
        case nb.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nb.vI.OVERWHELMINGLY_POSITIVE:
        case nb.vI.VERY_POSITIVE:
        case nb.vI.POSITIVE:
        case nb.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nb.vI.MIXED:
            return "steam-review-text-mixed";
        case nb.vI.MOSTLY_NEGATIVE:
        case nb.vI.NEGATIVE:
        case nb.vI.VERY_NEGATIVE:
        case nb.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nT =
        (((i = {})[(i.MIGHTY = 1)] = "MIGHTY"),
        (i[(i.STRONG = 2)] = "STRONG"),
        (i[(i.FAIR = 3)] = "FAIR"),
        (i[(i.WEAK = 4)] = "WEAK"),
        i),
    nk = l(778591);
function ny(e) {
    let { rating: t, strokeColor: l } = e,
        n = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        s = i * n;
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
            stroke: l,
            strokeWidth: 2.4,
            strokeDasharray: `${s} ${n - s}`,
        }),
    });
}
var nR = l(315189);
function nL(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: r = "all" } = e,
        { trackAction: c } = w(),
        o = (0, lW.A)(),
        d = nS(n, i, "recent" === r),
        u = nC(d),
        m = s.useCallback(() => {
            (c(C.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, c, t]);
    return (0, a.jsx)(eZ.D, {
        onClick: m,
        className: nR.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nR.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nR.tN,
                    children: [
                        (0, a.jsx)(nN.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(eQ.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    J.m,
                    {
                        text:
                            d === nb.vI.NO_USER_REVIEWS
                                ? em.intl.string(em.t.CLMt8J)
                                : em.intl
                                      .format(
                                          "recent" === r
                                              ? em.t.TzvC0k
                                              : "localized" === r
                                                ? em.t.EOfrwm
                                                : em.t["lzANJ/"],
                                          { rating: n, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: nR.Z0,
                            children: [
                                (0, a.jsx)(F.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: nR.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nb.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case nb.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case nb.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case nb.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case nb.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case nb.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case nb.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case nb.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case nb.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case nb.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != i &&
                                    d !== nb.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(F.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: em.intl
                                            .format(em.t.sgIoin, { rating_count: i.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${r}`,
                ),
            ],
        }),
    });
}
function nM(e) {
    let { game: t, url: l } = e,
        { reviews: n } = t,
        i = n?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        r = i.tier,
        c = i.topCriticRating ?? -1,
        o = i.topCriticRatingCount ?? -1,
        d = (c <= 0 || o <= 0) && null == r,
        { trackAction: u } = w(),
        m = (0, lW.A)(),
        x = s.useCallback(() => {
            (u(C.GameProfileTrackActionActions.OpenCriticReviews), m(l));
        }, [m, u, l]);
    return (0, a.jsx)(eZ.D, {
        onClick: x,
        className: nR.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nR.Ur,
            children: [
                (0, a.jsx)(eQ.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nR.WA,
                    children: [
                        null != r ? (0, a.jsx)(nO, { tier: r }) : null,
                        null != r && c > 0 && o > 0 ? (0, a.jsx)(nP, { rating: c, tier: r }) : null,
                        d
                            ? (0, a.jsx)(F.E, {
                                  variant: "text-xs/medium",
                                  color: nC(nb.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nO(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case nT.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case nT.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case nT.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case nT.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case nT.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nT.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nT.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nT.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, a.jsx)(
        J.m,
        {
            text: l,
            children: (0, a.jsx)("div", {
                className: nR.TE,
                children: (0, a.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nP(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case nT.MIGHTY:
                    t = "#fc430a";
                    break;
                case nT.STRONG:
                    t = "#9e00b4";
                    break;
                case nT.FAIR:
                    t = "#4aa1ce";
                    break;
                case nT.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, a.jsx)(
        J.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nR.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(ny, { rating: t, strokeColor: n }),
                    (0, a.jsx)(F.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nR.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nG = function (e) {
    let { game: t } = e,
        l = (0, ly.c)("GameProfileReviews"),
        n = (0, nk.I)(t.id),
        i = t.opencriticUrl,
        s = t.steamReleaseStatus !== ts.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = nS(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== nb.vI.NO_USER_REVIEWS,
        d =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        u = d ? r?.localizedRating : r?.rating,
        m = d ? r?.localizedRatingCount : r?.ratingCount,
        x = d ? em.t["aWb+V4"] : em.t["8e4LiB"],
        h = t.reviews?.opencritic != null && null != i;
    return s || o || h
        ? (0, a.jsxs)("div", {
              className: nR.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nR.Gf,
                      children: (0, a.jsx)(eQ.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nR.kL,
                      children: [
                          o && null != n
                              ? (0, a.jsx)("div", {
                                    className: nR.WH,
                                    children: (0, a.jsx)(nL, {
                                        url: n,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != n
                              ? (0, a.jsx)("div", {
                                    className: nR.WH,
                                    children: (0, a.jsx)(nL, {
                                        url: n,
                                        title: em.intl.string(x),
                                        rating: u,
                                        ratingCount: m,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          h && null != i
                              ? (0, a.jsx)("div", { className: nR.WH, children: (0, a.jsx)(nM, { game: t, url: i }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var n_ = l(815996),
    nw = l(722258),
    nV = l(258245),
    nD = l(561769),
    nF = l(484469),
    nU = l(57020),
    nY = l(682301);
let nW = [];
var nB = l(758836),
    nz = l(399872);
let nH = [0, 1, 2, 3, 4];
function nX(e) {
    return e.skuId;
}
function nK(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        r = s.useContext(nD.v3),
        { trackAction: c } = w(),
        o = s.useRef(null),
        d = s.useCallback(
            (e) => {
                (c(C.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, nw.B)({
                        skuId: i,
                        analyticsLocations: [g.A.GAME_PROFILE],
                        analyticsSource: g.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, nU.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = r;
    return (0, a.jsx)(nD.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(nV.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: nz.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function nJ() {
    return (0, a.jsx)(nF.A, {});
}
function n$(e) {
    let { game: t } = e,
        { closeModal: l, trackAction: n } = w(),
        { products: i, isLoading: r } = (function (e) {
            let {
                    skuIds: t,
                    hasFetched: l,
                    isFetching: n,
                } = (function (e) {
                    let {
                        hasFetched: t,
                        isFetching: l,
                        skuIds: n,
                    } = (0, u.cf)([T.A], () => ({
                        hasFetched: null != e && T.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && T.A.isShopCollectionFetching(e),
                        skuIds: null != e ? T.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, s.useEffect)(() => {
                            null == e || t || T.A.isShopCollectionFetching(e) || la(e);
                        }, [e, t]),
                        { skuIds: n ?? nW, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, nY.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = s.useCallback(() => {
            (n(C.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, n_.Cz)({
                    analyticsLocations: [g.A.GAME_PROFILE],
                    analyticsSource: g.A.GAME_PROFILE,
                    tab: nB.G2.CATALOG,
                }));
        }, [n, l]),
        o = (0, tm.l)("game_profile_shop_carousel");
    return r
        ? (0, a.jsx)(tC, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(ty, { children: nH.map((e) => (0, a.jsx)(nJ, {}, e)) }),
          })
        : 0 === i.length
          ? null
          : (0, a.jsx)(tT, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: c,
                children: o
                    ? (0, a.jsx)(th.A, {
                          gap: "md",
                          items: i,
                          getItemKey: nX,
                          renderItem: (e, t) => (0, a.jsx)(nK, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, a.jsx)(tx.A, { gap: "md", children: i.map((e) => (0, a.jsx)(nK, { product: e }, e.skuId)) }),
            });
}
var nQ = l(921138),
    nq = l(311043);
let nZ = [],
    n0 = [];
var n1 = l(987070);
let n8 = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function n3(e) {
    return e.id;
}
function n2(e) {
    let { className: t } = e;
    return (0, a.jsx)(tN, { className: t, children: (0, a.jsx)(tI, { className: n1.Lg }) });
}
function n4(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = w(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        d = null == r || c === r,
        { shouldOpenGameProfile: u, gameId: m } = (0, nQ.Ay)({
            gameId: t.id,
            source: C.GameProfileSources.SimilarGames,
        }),
        x = s.useCallback(() => {
            (i(C.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                u && null != m && n(m, C.GameProfileSources.SimilarGames));
        }, [t.id, m, i, u, n]),
        h = s.useCallback(() => o(r), [r]);
    return (0, a.jsx)(J.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, a.jsxs)(eZ.D, {
            ...l,
            className: n1.Nr,
            onClick: x,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(e4.Ay, {
                    game: t,
                    className: n1.xe,
                    size: e4.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !d && (0, a.jsx)(n2, { className: n1.uz }),
            ],
        }),
    });
}
function n5(e) {
    let { gameId: t } = e,
        { isFetching: l, similarGames: n } = (function (e) {
            let t = !li.has(e),
                { data: l, isLoading: n, error: i } = lr(e, t),
                a = t && null != l ? l : nZ;
            (0, I.x)(a);
            let s = (0, u.bG)(
                    [nq.A],
                    () => a.some((e) => null == nq.A.getGame(e) && !nq.A.hasNoData(e) && !nq.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, u.yK)(
                    [nq.A, G.default],
                    () => {
                        let e = G.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => nq.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, nQ.T_)(t) && !(0, R.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: n0 };
        })(t),
        i = (0, tm.l)("game_profile_similar_games");
    return li.has(t)
        ? null
        : l
          ? (0, a.jsx)(tC, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: n1.XG,
                    style: n8,
                    children: (0, a.jsx)(ty, {
                        children: tW()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(n2, { className: n1.aZ }, e)),
                    }),
                }),
            })
          : 0 === n.length
            ? null
            : (0, a.jsx)(tT, {
                  title: em.intl.string(em.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: n1.XG,
                      style: n8,
                      children: i
                          ? (0, a.jsx)(th.A, {
                                gap: "md",
                                items: n,
                                getItemKey: n3,
                                itemClassName: n1.cW,
                                renderItem: (e, t) => (0, a.jsx)(n4, { game: e, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(tx.A, { gap: "md", children: n.map((e) => (0, a.jsx)(n4, { game: e }, e.id)) }),
                  }),
              });
}
l(667532);
var n6 = l(853022);
let n7 = new Set(["1402418703554842694", "356877880938070016"]),
    n9 = [lP.V.EPICGAMES, lP.V.STEAM, lP.V.ROBLOX, lP.V.BATTLENET, lP.V.RIOT, lP.V.MINECRAFT];
function ie(e) {
    return (0, a.jsx)(X.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var it = l(349361),
    il = l(924895),
    ii = l(422688),
    ia = l(505200),
    is = l(695250);
let ir = function (e) {
    switch (e.category) {
        case lP.V.STEAM:
            return {
                icon: nN.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: C.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case lP.V.EPICGAMES:
            return {
                icon: it.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: C.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case lP.V.ROBLOX:
            return {
                icon: il.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: C.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case lP.V.BATTLENET:
            return {
                icon: ii.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: C.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case lP.V.RIOT:
            return {
                icon: ia.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: C.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case lP.V.MINECRAFT:
            return {
                icon: is.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: C.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: lJ.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: C.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var ic = l(242216);
function io(e) {
    let t,
        l,
        n,
        i,
        a,
        r =
            ((t = (0, nk.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ey.d3x.XBOX_GAME_PASS && !(0, e2.uJ)(e.id));
                return t?.id == null ? null : (0, n6.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== lP.V.EPICGAMES || !!n7.has(n)) &&
                            (e.category !== lP.V.STEAM || a !== ts.Y.RETIRED_ABANDONED) &&
                            n9.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === ts.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === lP.V.STEAM) ||
                    e.push({ category: lP.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === lP.V.STEAM ? -1 : +(t.category === lP.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function id(e) {
    let { data: t } = e,
        { trackAction: l } = w(),
        n = (0, lW.A)();
    return (0, a.jsx)(ie, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let iu = function (e) {
    let { game: t } = e,
        { trackAction: n } = w(),
        { showsStoreLinks: i, storeWebsites: r } = io(t),
        c = s.useMemo(() => r.map(ir).filter((e) => null != e), [r]);
    if (!i) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(id, { data: e });
    }
    if (2 === c.length)
        return (0, a.jsxs)("div", {
            className: ic.G,
            children: [(0, a.jsx)(id, { data: c[0] }), (0, a.jsx)(id, { data: c[1] })],
        });
    let o = (0, a.jsx)(ie, {
        text: em.intl.string(em.t["/hMurx"]),
        "aria-label": em.intl.string(em.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: i } = e;
                (0, x.openModalLazy)(async () => {
                    let { default: e } = await l.e("307898").then(l.bind(l, 679361));
                    return (l) => (0, a.jsx)(e, { game: t, websiteButtons: n, trackAction: i, ...l });
                });
            })({ game: t, websiteButtons: c, trackAction: n }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, a.jsxs)("div", { className: ic.G, children: [(0, a.jsx)(id, { data: c[0] }), o] })
        : o;
};
var im = l(123292),
    ix = l(672572),
    ih = l(94936);
function ig(e) {
    let { game: t } = e,
        l = s.useRef(null),
        {
            isExpanded: n,
            showToggle: i,
            handleToggleExpanded: r,
        } = (function (e) {
            let { trackAction: t } = w(),
                [l, n] = s.useState("full");
            s.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let l = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        n((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return (l.observe(t), () => l.disconnect());
            }, [e]);
            let i = s.useCallback(() => {
                "expanded" === l
                    ? (t(C.GameProfileTrackActionActions.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(C.GameProfileTrackActionActions.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(l),
        { isTwoColumn: c } = w(),
        d = s.useMemo(() => (c ? 8 : 5), [c]);
    if (null == t.description) return null;
    let u = n ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: o()(ix.fi, ih.k),
        children: [
            (0, a.jsx)(F.E, {
                ref: l,
                className: ih.Q,
                lineClamp: n ? void 0 : d,
                variant: "text-md/medium",
                children: t.description,
            }),
            i && (0, a.jsx)(im.Q, { onClick: r, text: u }),
        ],
    });
}
var ij = l(40478),
    ip = l(764948);
let iv = s.memo(function (e) {
    let { game: t, analyticsLocations: l, selectTab: n, getScrollOffset: i } = e,
        s = t.steamReleaseStatus !== ts.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: ip.V,
        children: [
            (0, a.jsx)(nI, { game: t }),
            (0, a.jsxs)("div", {
                className: ij.h,
                children: [
                    (0, a.jsx)(tl, { game: t }),
                    (0, a.jsxs)("div", {
                        className: ij.X,
                        children: [(0, a.jsx)(iu, { game: t }), (0, a.jsx)(ig, { game: t })],
                    }),
                ],
            }),
            (0, a.jsx)(na, { analyticsLocations: l }),
            (0, a.jsx)(ne, {}),
            (0, a.jsx)(lk, { gameId: t.id, getScrollOffset: i }),
            (0, a.jsx)(tU, { selectTab: n }),
            (0, a.jsx)(n$, { game: t }),
            (0, a.jsx)(n5, { gameId: t.id }),
            s && (0, a.jsx)(nG, { game: t }),
            (0, a.jsx)(l2, { game: t }),
        ],
    });
});
var iE = l(164135);
let iA = s.memo(function (e) {
    let { game: t, selectTab: l, getScrollOffset: n } = e;
    return (0, a.jsxs)("div", {
        className: iE.V,
        children: [
            (0, a.jsxs)("div", {
                className: iE.B,
                children: [(0, a.jsx)(nI, { game: t }), (0, a.jsx)(ig, { game: t })],
            }),
            (0, a.jsx)(lk, { gameId: t.id, getScrollOffset: n }),
            (0, a.jsx)(tU, { selectTab: l }),
            (0, a.jsx)(n$, { game: t }),
            (0, a.jsx)(n5, { gameId: t.id }),
        ],
    });
});
var iI = l(881698),
    iN = l(928550),
    ib = l(562708),
    iS = l(414499),
    iC = l(359549),
    iT = l(139286),
    ik = l(873516);
function iy(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = w();
    (0, iT.A)({
        name: ib.ImpressionNames.CLOUD_PLAY_CTA,
        type: ib.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let r = s.useCallback(() => {
        (i(C.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, a.jsx)(J.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(X.$, {
            icon: iS.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function iR(e) {
    let { gameId: t, cloudPlayAppId: l, analyticsLocations: n } = e,
        i = (0, iC.rC)({ applicationId: l, sourceApplicationId: t, analyticsLocations: n });
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: ik.k,
              children: (0, a.jsx)(iy, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var iL = l(768626);
function iM(e) {
    let { game: t, analyticsLocations: l } = e,
        n = (0, iI.A)(t.linkedApplications)?.id,
        [i] = (0, iN.L_)(t.getOfficialApplicationId()),
        [s] = (0, iN.L_)(t.id),
        { showsStoreLinks: r } = io(t),
        c = t.steamReleaseStatus !== ts.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: o()(iL.pz, ix.fi, r ? iL.FJ : iL.dg),
        children: [
            null == n || i || s ? null : (0, a.jsx)(iR, { gameId: t.id, cloudPlayAppId: n, analyticsLocations: l }),
            (0, a.jsxs)("div", {
                className: ip.V,
                children: [
                    (0, a.jsx)(iu, { game: t }),
                    (0, a.jsx)(na, { analyticsLocations: l }),
                    (0, a.jsx)(ne, {}),
                    c && (0, a.jsx)(nG, { game: t }),
                    (0, a.jsx)(l2, { game: t }),
                ],
            }),
        ],
    });
}
var iO = l(105865);
function iP(e) {
    let {
            game: t,
            isTwoColumn: l,
            selectTab: n,
            selectionVersion: i,
            initialScrollOffset: r,
            analyticsLocations: c,
        } = e,
        o = s.useRef(null),
        d = s.useRef(null),
        u = s.useRef(i);
    (s.useLayoutEffect(() => {
        0 === i && null != r && r > 0 && d.current?.getScrollerNode()?.scrollTo({ top: r, behavior: "instant" });
    }, [r, i]),
        s.useLayoutEffect(() => {
            i !== u.current &&
                (d.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (u.current = i));
        }, [i]));
    let m = s.useCallback(() => d.current?.getScrollerNode()?.scrollTop ?? 0, []),
        x = s.useCallback((e) => {
            if (null != o.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                o.current.style.opacity = String(t);
            }
        }, []);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(e9, { game: t, ref: o }),
            (0, a.jsxs)(eJ.Ch, {
                ref: d,
                className: iO.XG,
                onScroll: x,
                children: [
                    (0, a.jsx)("div", { className: iO.xY, "aria-hidden": !0 }),
                    (0, a.jsx)(ta, { game: t }),
                    (0, a.jsx)(e$.F, {
                        children: l
                            ? (0, a.jsxs)("div", {
                                  className: iO.jC,
                                  children: [
                                      (0, a.jsx)(iA, { game: t, selectTab: n, getScrollOffset: m }),
                                      (0, a.jsx)(iM, { game: t, analyticsLocations: c }),
                                  ],
                              })
                            : (0, a.jsx)("div", {
                                  className: iO.b9,
                                  children: (0, a.jsx)(iv, {
                                      game: t,
                                      analyticsLocations: c,
                                      selectTab: n,
                                      getScrollOffset: m,
                                  }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var iG = l(658820),
    i_ = l(787188);
function iw(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, a.jsx)(iG.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: g.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: to.Ye.GAME_PROFILE_GAME_SHOP,
        className: i_.kL,
        scrollerClassName: i_.XG,
        promotionBannerClassName: i_.Rv,
    });
}
var iV = l(733391),
    iD = l(171616);
let iF = {
    [ed.OVERVIEW]: C.GameProfileTrackActionActions.Overview,
    [ed.COMMUNITIES]: C.GameProfileTrackActionActions.Communities,
    [ed.COMMERCE]: C.GameProfileTrackActionActions.GameShop,
};
function iU(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: i,
            onClose: r,
            initialScrollOffset: c,
            navigateToGame: w,
        } = e,
        [V, D] = s.useState(!0),
        [F, U] = s.useState(null),
        { clientThemesClassName: Y } = (0, v.Ay)(),
        W = (0, u.bG)([S.default], () => S.default.locale),
        B = s.useMemo(() => (0, C.generateViewId)(), []),
        { analyticsLocations: z } = (0, f.Ay)(g.A.GAME_PROFILE),
        H = (0, k.s)(t),
        { data: X } = (0, I.I)(t),
        K = X?.getOfficialApplicationId(),
        J = (0, y.rG)(X),
        $ = null != K,
        Q = (0, u.bG)([p.A], () => null != K && p.A.didFetchingApplicationFail(K), [K]),
        q = X?.name ?? "",
        Z = (0, R.A)(X),
        ee = s.useRef(null);
    s.useEffect(() => {
        ee.current = F;
    }, [F]);
    let {
            hasAlreadyLinked: et,
            canStartAuthorization: el,
            fetched: en,
            startAuthorization: ei,
            connectionApp: ea,
        } = (0, j.RD)(X),
        { invite: es, isMember: er, isResolving: ec } = (0, y.Ay)(X, U),
        { socialLayerStorefrontRecommendationsData: eu, socialLayerStorefrontRecommendationsLoading: em } = (function (
            e,
        ) {
            let t = G.default.getCurrentUser()?.id,
                l = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: n, isStorefrontConfigLoaded: i } = (0, u.cf)(
                    [M.A],
                    () => ({
                        storefrontApplicationId: null != e ? M.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === M.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, L.h)(n),
                r = (0, u.bG)([p.A], () => null != n && p.A.didFetchingApplicationFail(n), [n]),
                c = s.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: o, status: d } = (0, P.XQ)({
                    applicationIds: c,
                    userIds: l,
                    numItems: 6,
                    source: O.B.USER_PROFILE,
                }),
                m = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== d || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, d, o],
                ),
                x = "loading" === d,
                h = "success" === d && o.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: m,
                socialLayerStorefrontRecommendationsLoading: i && null != n && (x || h),
            };
        })(t),
        ex = s.useCallback(
            function (e, n) {
                let { guildId: i, isVerified: a } = (0, C.getGuildIdAndVerifiedFromInvite)(ee.current);
                (0, C.trackGameProfileAction)({
                    gameName: q,
                    gameId: t,
                    action: e,
                    similarGameId: n,
                    viewId: B,
                    guildId: i,
                    isVerified: a,
                    source: l,
                });
            },
            [q, t, B, l],
        );
    ((0, h.Ay)(() => {
        ((0, C.trackGameProfileOpen)({
            source: l,
            viewId: B,
            gameId: t,
            gameName: q,
            authorId: n,
            profileType: C.GameProfileTypes.FullProfile,
        }),
            (0, E.He)());
    }),
        (0, h.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, C.getGuildIdAndVerifiedFromInvite)(ee.current),
                n = Date.now(),
                i = H.map((e) => {
                    let t = (0, A.JM)(e) ? (0, A.W6)(e, n) : (0, A.aJ)(e, W);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, C.trackGameProfileClose)({
                viewId: B,
                gameId: t,
                gameName: q,
                playedFriendIds: H.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: T.A.getSimilarGames(t) ?? [],
                guildId: l,
                isVerified: e,
            });
        }));
    let eh = s.useCallback((e) => {
            D(e.contentRect.width >= 800);
        }, []),
        eg = (0, d.w)(eh, [], { fireOnMount: !0 }),
        ef = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, x.closeAllModals)(), (0, b.M)()) : r();
            },
            [r],
        ),
        ej = s.useCallback(() => ef(!1), [ef]),
        { navigation: ep, selectionVersion: ev } = (function (e) {
            let [t, l] = s.useState(ed.OVERVIEW),
                [n, i] = s.useState(0),
                a = s.useCallback((e) => {
                    (l(e), i((e) => e + 1));
                }, []),
                r = s.useCallback(
                    (l) => {
                        if (l !== t) {
                            let t = iF[l];
                            null != t && e(t);
                        }
                        a(l);
                    },
                    [t, a, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: t, selectTab: r }), [t, r]), selectionVersion: n };
        })(ex),
        { selectedTab: eE } = ep,
        eA = (function (e) {
            let { game: t, navigation: l } = e,
                { selectedTab: n, selectTab: i } = l,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                c = eo({ location: "GameProfileModal" });
            s.useEffect(() => {
                c && (0, iV.Xw)();
            }, [c]);
            let o = (0, u.bG)(
                    [M.A],
                    () =>
                        (null != a ? M.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && M.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                d = c && null != o,
                { storefront: m } = (0, iD.A)({ applicationId: d ? o : null }),
                [x, h] = s.useState({ storefrontId: m?.id, index: 0 }),
                [g, f] = s.useState(n);
            n !== g && (f(n), n !== ed.COMMERCE && h({ storefrontId: m?.id, index: 0 }));
            let j = x.storefrontId === m?.id && x.index < (m?.pages.length ?? 0) ? x.index : 0,
                p = s.useCallback(
                    (e) => {
                        !d ||
                            e < 0 ||
                            e >= (m?.pages.length ?? 0) ||
                            (h({ storefrontId: m?.id, index: e }), i(ed.COMMERCE));
                    },
                    [d, i, m],
                );
            return {
                hasCommerceTab: d,
                storefrontApplicationId: o,
                storefront: m,
                selectedStorefrontPageIndex: j,
                selectStorefrontPage: p,
            };
        })({ game: X, navigation: ep }),
        { hasCommerceTab: eI, storefrontApplicationId: eN, storefront: eb, selectedStorefrontPageIndex: eS } = eA,
        eC = Object.values(eb?.promotions ?? {})[0] ?? null,
        eT = s.useMemo(
            () => ({
                isTwoColumn: V,
                canStartAuthorization: el,
                hasAlreadyLinked: et,
                fetchedAuthorization: en,
                startAuthorization: ei,
                connectionApp: ea,
                invite: es,
                hasDiscordWebsite: J,
                hasOfficialApplication: $,
                officialApplicationFetchFailed: Q,
                isCommunityInviteResolving: ec,
                isMember: er,
                socialLayerStorefrontRecommendationsData: eu,
                socialLayerStorefrontRecommendationsLoading: em,
                hasCommerceTab: eI,
                storefrontPromotion: eC,
                closeModal: ef,
                navigateToGame: w,
                trackAction: ex,
            }),
            [V, el, et, en, ei, ea, es, J, $, Q, ec, er, eu, em, eI, eC, ef, w, ex],
        );
    return null == X
        ? null
        : (0, a.jsx)(f.f5, {
              value: z,
              children: (0, a.jsx)(m.N, {
                  transitionState: i,
                  onClose: r,
                  children: (0, a.jsx)(_.Provider, {
                      value: eT,
                      children: (0, a.jsx)("div", {
                          className: o()(Y, ix.kL),
                          ref: eg,
                          children: (0, a.jsxs)(N.A, {
                              obscured: Z,
                              onClose: ej,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: ix.sx,
                                      children: (0, a.jsx)(eK, { game: X, navigation: ep, socialLayerStorefront: eA }),
                                  }),
                                  eE === ed.OVERVIEW &&
                                      (0, a.jsx)(iP, {
                                          game: X,
                                          selectTab: ep.selectTab,
                                          selectionVersion: ev,
                                          initialScrollOffset: c,
                                          isTwoColumn: V,
                                          analyticsLocations: z,
                                      }),
                                  eE === ed.COMMERCE && (0, a.jsx)(iw, { applicationId: eN, selectedPageIndex: eS }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let iY = function (e) {
    let { gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, ...r } = e,
        [c, o] = s.useState({ gameId: t, source: l, sourceUserId: n, initialScrollOffset: i }),
        d = c.gameId,
        u = s.useCallback(
            (e, t) => {
                e !== d && ((0, y.UT)(e), o({ gameId: e, source: t }));
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
