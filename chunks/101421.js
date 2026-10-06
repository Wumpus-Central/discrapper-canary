l.d(t, { default: () => i2 });
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
    E = l(590703),
    A = l(180170),
    v = l(583846),
    I = l(569926),
    N = l(570962),
    S = l(38145),
    C = l(773669),
    b = l(409626),
    T = l(422069),
    y = l(205184),
    R = l(957807),
    k = l(49491),
    L = l(429913),
    G = l(832163),
    M = l(820847),
    O = l(862772),
    P = l(287809);
let _ = s.createContext(void 0);
function w() {
    let e = s.useContext(_);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var V = l(109112),
    D = l(761508),
    U = l(834730),
    F = l(739187),
    Y = l(857250),
    W = l(97483),
    B = l(922016),
    H = l(980707),
    z = l(477782),
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
    eE = l(47675),
    eA = l(633075),
    ev = l(289173),
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
var eR = l(652215);
function ek(e) {
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
                    (n?.(b.GameProfileTrackActionActions.Feedback),
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
                : (0, a.jsx)(z.Dr, {
                      id: "game-profile-something-wrong",
                      label: em.intl.string(em.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: eu.E },
                  })),
        p = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, u.bG)([eb.default], () => eb.default.getId()),
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
                c = (0, eC.A)(),
                o = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof eA.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eT.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                d = s.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await ey((i) => {
                                let a = i.filter(ev.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eS.uA)(a))) return i;
                                    let l = { gameId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new ev.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    n = new ev.Yy({ ...a, games: e });
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
                m = s.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await ey((l) =>
                                e
                                    ? l.some((e) => e instanceof eA.R && e.applicationId === o)
                                        ? l
                                        : [(t = new eA.R({ applicationId: o })), ...l]
                                    : ((t = l.find((e) => e instanceof eA.R && e.applicationId === o) ?? null),
                                      l.filter((e) => !(e instanceof eA.R && e.applicationId === o))),
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
                let e = r.some((e) => e instanceof eA.R && e.applicationId === o);
                h.push(
                    (0, a.jsx)(
                        z.Dr,
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
                    let l = r.filter(ev.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.gameId === t),
                        i = !n && null != l && (0, eS.uA)(l);
                    h.push(
                        (0, a.jsx)(
                            z.Dr,
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
        { closeModal: E, trackAction: A } = w(),
        v = eo({ location: "GameProfileOverflowMenu" }),
        I = (0, u.bG)([G.A], () => G.A.getApplicationIdFromDetectableId(c.id)),
        N = (0, u.bG)([G.A], () => G.A.hasStorefrontForApplicationId(I), [I]),
        S = s.useCallback(() => {
            null != I && (0, en.G)({ applicationId: I });
        }, [I]),
        C = s.useCallback(() => {
            null != I && (A(b.GameProfileTrackActionActions.GameShop), (0, en.default)({ applicationId: I }), E());
        }, [I, A, E]),
        T = s.useCallback(() => E(!1), [E]),
        y = s.useCallback(() => {
            A(b.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eR.BVt.GAME_PROFILE(c.id)}`;
            (0, ea.C)(e, () => {
                (0, F.P)((0, Y.o)(em.intl.string(em.t["+5kSoW"]), W.Ck.SUCCESS));
            });
        }, [c.id, A]);
    return (0, a.jsxs)("div", {
        className: o,
        children: [
            d === ed.COMMERCE &&
                (0, a.jsx)(ei.A, {
                    location: g.A.GAME_PROFILE,
                    onNavigate: E,
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
                        return (0, a.jsx)(H.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, et.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(z.rX, { children: p }),
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
                !v &&
                (0, a.jsx)(J.m, {
                    text: em.intl.string(em.t.apFNLU),
                    children: (0, a.jsx)($.K, {
                        icon: Q.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.apFNLU),
                        onMouseDown: S,
                        onClick: C,
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
                        onClick: y,
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
                        return (0, a.jsx)(H.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, et.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(z.rX, { children: j }), (0, a.jsx)(z.rX, { children: f })],
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
    eG = (0, es.mj)({
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
    let s = em.intl.string(em.t["3xFZEo"]);
    return (0, a.jsx)(D.V.Item, {
        id: ed.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: n,
        onClick: () => i(ed.COMMUNITIES),
        className: t,
        "aria-label": s,
        children: (0, a.jsx)(U.E, { variant: "text-md/medium", color: "none", children: s }),
    });
}
function eO(e) {
    let { className: t, game: l, navigation: n } = e;
    return (l.communityGuildIds?.length ?? 0) < 3 ? null : (0, a.jsx)(eM, { className: t, navigation: n });
}
var eP = l(661531),
    e_ = l(331322),
    ew = l(278416),
    eV = l(478016),
    eD = l(900797),
    eU = l(847374),
    eF = l(421773),
    eY = l(421108);
let eW = "text-md/medium",
    eB = [];
function eH(e) {
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
    return (0, a.jsxs)(e_.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, a.jsx)(ew.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eP.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, a.jsxs)(e_.B, {
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
        m = o?.pages ?? eB,
        x = s.useRef(null),
        { isHovered: h, setIsHovered: g, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, eF.A)(100, 100),
        E = em.intl.string(em.t["J3/JCl"]),
        A = s.useCallback(
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
        onRequestOpen: () => A(!0),
        onRequestClose: () => A(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, a.jsx)(H.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": E,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, a.jsx)(z.rX, {
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
                                z.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: eV.U } : void 0,
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
                o = s ? eD.t : eU.a;
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
                "aria-label": E,
                "aria-haspopup": "menu",
                children: (0, a.jsx)(U.E, {
                    variant: eW,
                    color: "none",
                    children: (0, a.jsx)(eH, {
                        label: l,
                        chevron: (0, a.jsx)(o, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function eX(e) {
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
              children: (0, a.jsx)(U.E, {
                  variant: eW,
                  color: "none",
                  children: (0, a.jsx)(eH, { label: o, socialLayerStorefront: n }),
              }),
          });
}
var eK = l(510954);
function eJ(e) {
    let { game: t, navigation: l, socialLayerStorefront: n } = e,
        { selectedTab: i, selectTab: r } = l,
        c = t.getIconURL(64),
        [o, d] = s.useState(null),
        u = s.useCallback(() => d(c), [c]),
        m = em.intl.string(em.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: eK.wx,
        children: (0, a.jsxs)("div", {
            className: eK.ap,
            children: [
                (0, a.jsx)("div", {
                    className: eK.wE,
                    children:
                        null != c && c !== o
                            ? (0, a.jsx)("img", { src: c, alt: "", className: eK.FC, draggable: !1, onError: u })
                            : (0, a.jsx)(V._, { size: "md" }),
                }),
                (0, a.jsxs)(D.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: r,
                    className: eK.vR,
                    children: [
                        (0, a.jsx)(D.V.Item, {
                            id: ed.OVERVIEW,
                            disableItemStyles: !0,
                            className: eK.Mf,
                            "aria-label": m,
                            children: (0, a.jsx)(U.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, a.jsx)(eO, { className: eK.Mf, game: t, navigation: l }),
                        (0, a.jsx)(eX, { className: eK.Mf, navigation: l, socialLayerStorefront: n }),
                    ],
                }),
                (0, a.jsx)(ek, { game: t, className: eK.HK, activeTab: i }),
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
    e8 = l(297264),
    e3 = l(73153),
    e2 = l(37537),
    e4 = l(714991),
    e6 = l(486020),
    e5 = l(240248),
    e7 = l(810729);
let e9 = { sm: e7.nz, md: e7.a };
function te(e) {
    let { className: t, width: l } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: o()(e7.qf, t), style: { width: l } });
}
function tt(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function tl(e) {
    let { className: t, size: l = "md" } = e;
    return (0, a.jsx)(te, { className: o()(e7.x6, e9[l], t) });
}
var tn = l(213098);
function ti() {
    return (0, a.jsxs)(tt, {
        className: tn.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(te, { className: tn.dU, width: "30%" }),
            (0, a.jsx)(tt, {
                className: tn.nV,
                children: (0, a.jsxs)("div", {
                    className: tn.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tn.To,
                            children: [
                                (0, a.jsx)(te, { className: tn.QV }),
                                (0, a.jsxs)("div", {
                                    className: tn.Yv,
                                    children: [
                                        (0, a.jsx)(te, { className: tn.Ag }),
                                        (0, a.jsx)(te, { className: tn.zl }),
                                        (0, a.jsx)(te, { className: tn.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(tl, {}),
                    ],
                }),
            }),
        ],
    });
}
function ta(e) {
    let { guild: t } = e,
        l = e6.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = s.useState(void 0),
        r = null != l && n !== l,
        c = s.useCallback(() => {
            i(l);
        }, [l]);
    return (0, a.jsxs)("div", {
        className: tn._C,
        children: [
            r && (0, a.jsx)(te, { className: tn.EQ }),
            (0, a.jsx)("img", {
                className: tn.$f,
                src: l,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function ts(e) {
    let { guild: t, presenceCount: l, memberCount: n, isMember: i, onJoin: s, className: r } = e;
    return (0, a.jsx)("div", {
        className: o()(tn.kL, r),
        children: (0, a.jsxs)("div", {
            className: tn.hQ,
            children: [
                (0, a.jsxs)("div", {
                    className: tn.To,
                    children: [
                        (0, a.jsx)(ta, { guild: t }),
                        (0, a.jsxs)("div", {
                            className: tn.yj,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: tn.YS,
                                    children: [
                                        (0, a.jsx)(e4.A, { guild: t, size: 16 }),
                                        (0, a.jsx)(e8.D, {
                                            className: tn.J5,
                                            variant: "heading-md/semibold",
                                            color: "text-default",
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                !(0, e5.uJ)(t.description) &&
                                    (0, a.jsx)(U.E, {
                                        className: tn.h_,
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: t.description,
                                    }),
                                null != l || null != n
                                    ? (0, a.jsxs)("div", {
                                          className: tn.iR,
                                          children: [
                                              null != l &&
                                                  (0, a.jsxs)("div", {
                                                      className: tn.Tb,
                                                      children: [
                                                          (0, a.jsx)("i", { className: tn._o }),
                                                          (0, a.jsx)(U.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: em.intl.format(em.t["LC+S+m"], {
                                                                  membersOnline: l,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              null != n &&
                                                  (0, a.jsxs)("div", {
                                                      className: tn.Tb,
                                                      children: [
                                                          (0, a.jsx)("i", { className: tn.jk }),
                                                          (0, a.jsx)(U.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: em.intl.format(em.t.zRl6XR, { count: n }),
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
                    onClick: s,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function tr() {
    let e = (0, e2.c)("GameProfileGuildInvite"),
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
                (c(b.GameProfileTrackActionActions.JoinServer),
                r(),
                e3.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: eR.BRT.APP }));
        }, [t, c, r]);
    return null == t || null == t.guild
        ? l && n
            ? (0, a.jsx)(ti, {})
            : null
        : (0, a.jsxs)("div", {
              className: tn.uW,
              children: [
                  (0, a.jsx)(e8.D, {
                      className: tn.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, a.jsx)(ts, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      isMember: i,
                      onJoin: o,
                  }),
              ],
          });
}
var tc = l(320448),
    to = l(152594);
function td(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, a.jsxs)("div", {
        className: to.kL,
        "aria-busy": !0,
        children: [
            (0, a.jsxs)("div", {
                className: to.wR,
                children: [(0, a.jsx)(te, { className: to.Iz, width: l }), n && (0, a.jsx)(tl, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tu(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, a.jsxs)("div", {
        className: to.kL,
        children: [
            (0, a.jsxs)("div", {
                className: to.wR,
                children: [
                    (0, a.jsx)(e8.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, a.jsx)(X.$, {
                            size: "sm",
                            icon: tc._,
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
var tm = l(311043),
    tx = l(636537);
let th = {};
class tg extends u.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eb.default);
    }
    getGuild(e) {
        return th[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => th[e]?.guild).filter(eT.Vq);
    }
    isFetching(e) {
        return e.some((e) => th[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let l = th[e];
            return (
                null == l ||
                "failed" === l.fetchState ||
                ("fetching" !== l.fetchState && (null == l.fetchedAt || t - l.fetchedAt >= 36e5))
            );
        });
    }
}
let tf = new tg(e3.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                th[e] = { guild: th[e]?.guild ?? null, fetchState: "fetching", fetchedAt: th[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: l } = e,
                n = Date.now(),
                i = new Map(l.map((e) => [e.id, (0, e1.jE)(e)]));
            for (let e of t) th[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: n };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                th[e] = { guild: th[e]?.guild ?? null, fetchState: "failed", fetchedAt: th[e]?.fetchedAt ?? null };
        },
    }),
    tj = new Map();
async function tp(e) {
    e3.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await tx.Bo.get({
                url: eR.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            l = t.body?.guilds ?? [];
        e3.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: l });
    } catch (t) {
        throw (e3.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
    }
}
async function tE(e) {
    let t = tf.getStaleGuildIds(e),
        l = new Set();
    for (let t of e) {
        let e = tj.get(t);
        null != e && l.add(e);
    }
    if (t.length > 0) {
        let e = tp(t).finally(() => {
            for (let l of t) tj.get(l) === e && tj.delete(l);
        });
        for (let l of t) tj.set(l, e);
        l.add(e);
    }
    await Promise.all(l);
}
var tA = l(927813);
let tv = [];
function tI(e) {
    return tm.A.getGame(e)?.communityGuildIds ?? tv;
}
let tN = (0, u.UT)(tf, {
    getQueryId: (e) => (tI(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => tf.getGuilds(tI(e)),
    load: async (e) => {
        let t = tI(e);
        t.length > 0 && (await tE(t));
    },
    staleAfter: tA.A.Seconds.HOUR,
    failureStaleAfter: tA.A.Seconds.MINUTE,
});
var tS = l(620387);
function tC(e) {
    let { animationDelayMs: t } = e;
    return (0, a.jsxs)(tt, {
        className: tS.s7,
        animationDelayMs: t,
        children: [
            (0, a.jsxs)("div", {
                className: tS.Xc,
                children: [
                    (0, a.jsx)(te, { className: tS.VR }),
                    (0, a.jsxs)("div", {
                        className: tS.hG,
                        children: [
                            (0, a.jsx)(te, { className: tS.t_ }),
                            (0, a.jsx)(te, { className: tS.Aj }),
                            (0, a.jsx)(te, { className: tS.Ah }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(tl, {}),
        ],
    });
}
function tb(e) {
    let { guild: t } = e,
        { closeModal: l, trackAction: n, viewId: i } = w(),
        r = (0, u.bG)([e0.A], () => e0.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        c = s.useCallback(async () => {
            (n(b.GameProfileTrackActionActions.CommunityClicked, void 0, t.id), l());
            try {
                await e1.Z2(t.id, {}, { joinSource: eR.Q4z.GAME_PROFILE_COMMUNITIES, loadId: i }, [
                    g.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, eZ._)(e);
            }
        }, [t.id, n, l, i]);
    return (0, a.jsx)(ts, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        isMember: r,
        onJoin: c,
    });
}
function tT(e) {
    let { game: t } = e,
        { data: l, isLoading: n } = tN(t.id),
        i = n && (null == l || 0 === l.length);
    return (0, a.jsxs)(eq.Ch, {
        className: tS.XG,
        children: [
            (0, a.jsx)("div", { className: tS.xY, "aria-hidden": !0 }),
            (0, a.jsx)("div", {
                className: tS.uW,
                children: (0, a.jsx)(tu, {
                    title: em.intl.string(em.t.r6bvTh),
                    children: (0, a.jsx)("div", {
                        className: tS.Vg,
                        children: i
                            ? eQ()
                                  .range(8)
                                  .map((e) => (0, a.jsx)(tC, { animationDelayMs: 150 * e }, e))
                            : (l ?? []).map((e) => (0, a.jsx)(tb, { guild: e }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var ty = l(707554),
    tR = l(369606),
    tk = l(939249),
    tL = l(775602),
    tG = l(21161),
    tM = l(400492),
    tO = l(541830),
    tP = l(459746);
let t_ = "1552821538409939044";
var tw = l(175213);
let tV = l(892799),
    tD = s.forwardRef(function (e, t) {
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
        return (0, e5.uJ)(n)
            ? null
            : (0, a.jsxs)("div", {
                  ref: t,
                  children: [
                      (0, a.jsx)("div", { className: tw.y1, style: { backgroundImage: `url("${n}")` } }),
                      (0, a.jsx)("div", { className: tw.N4 }),
                  ],
              });
    });
function tU(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(tO.du).join(", ");
    return (0, e5.uJ)(l) ? null : (0, a.jsx)(U.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
function tF(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: tw.Qc,
        children: [
            (0, a.jsx)(tR.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(U.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function tY(e) {
    let { game: t } = e;
    return (0, a.jsx)(tW, { game: t, className: o()(tw._M, (0, tP.cO)(t) && tw.i3), imageClassName: tw.xe });
}
function tW(e) {
    let { game: t, className: l, imageClassName: n } = e,
        i = (0, a.jsx)(tP.Ay, { game: t, className: n, size: tP.wu.LARGE });
    return t.id !== t_
        ? (0, a.jsx)("div", { className: l, children: i })
        : (0, a.jsx)(tB, { className: l, children: i });
}
function tB(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = s.useContext(tG.x),
        i = (0, u.bG)([tL.Ay], () => tL.Ay.useReducedMotion),
        r = s.useRef({ count: 0, lastTime: 0 });
    return (0, a.jsx)(tk.D, {
        className: o()(l, tw.b3),
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
                (0, tM.Ak)("discodo");
            }
        },
        children: t,
    });
}
let tH = function (e) {
    let { game: t } = e,
        { isTwoColumn: l } = w(),
        n = t.name;
    return (0, a.jsxs)("div", {
        className: tw.ap,
        children: [
            l && (0, a.jsx)(tW, { game: t, className: o()(tw.Tf, (0, tP.cO)(t) && tw.wS), imageClassName: tw.w$ }),
            (0, a.jsxs)("div", {
                className: tw.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(tF, { rank: t.l30Rank }),
                    (0, a.jsxs)("div", {
                        className: tw.$,
                        children: [
                            (0, a.jsx)(e8.D, { variant: "heading-xxl/semibold", children: n }),
                            t.id === t_ &&
                                (0, a.jsx)("img", {
                                    src: tV,
                                    className: tw.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, a.jsx)(tU, { game: t }),
                ],
            }),
        ],
    });
};
var tz = l(792216),
    tX = l(638495),
    tK = l(871123),
    tJ = l(439303),
    t$ = l(317560),
    tQ = l(467884),
    tq = l(480713),
    tZ = l(449543),
    t0 = l(197935),
    t1 = l(761812);
function t8(e) {
    return e;
}
function t3(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: t1.B, children: t });
}
function t2(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, tq.l)("social_layer_storefront_card_row"),
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
          ? (0, a.jsx)(t0.A, {
                gap: "md",
                "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
                items: t,
                getItemKey: t8,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, a.jsx)(t3, {
                        children: (0, a.jsx)(tQ.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: tQ.s6.SMALL,
                            analyticsLocations: l,
                            onClick: r,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, a.jsx)(tZ.A, {
                gap: "md",
                "aria-label": em.intl.string(em.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, a.jsx)(
                        t3,
                        {
                            children: (0, a.jsx)(tQ.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: tQ.s6.SMALL,
                                analyticsLocations: l,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var t4 = l(369435);
function t6(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: o()(t4.n, { [t4.C]: 16 === l }), children: t });
}
var t5 = l(936785),
    t7 = l(403581),
    t9 = l(812095),
    le = l(647474),
    lt = l(162536);
function ll(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eY.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        s = i ? t7.t : t.Icon;
    return (0, a.jsx)(le.A, {
        className: o()(lt.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: lt.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: lt.Kk }),
                (0, a.jsx)(U.E, { variant: "text-sm/normal", color: "currentColor", children: (0, t9.U)(t.text) }),
            ],
        }),
    });
}
var ln = l(521058);
function li() {
    let { storefrontPromotion: e } = w();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: s } = e;
    if (null == s || (0, e5.uJ)(s.headerText)) return null;
    let r = {
        Icon: (0, t5.LZ)(n?.icon ?? null),
        text: s.headerText,
        tooltip: null,
        endsAt: (0, t5.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, a.jsx)(ll, { className: ln.v, promotion: r });
}
let la = [0, 1, 2, 3],
    ls = { placement: tJ.Ye.GAME_PROFILE };
function lr() {
    return (0, a.jsx)(td, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(t6, { children: la.map((e) => (0, a.jsx)(t3, { children: (0, a.jsx)(tQ.yf, {}) }, e)) }),
    });
}
function lc(e) {
    let { selectTab: t } = e,
        l = (0, tX.k)(),
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
                (n(b.GameProfileTrackActionActions.GameShop),
                    o(),
                    (0, en.default)({ applicationId: i.application.id }));
            }
        }, [i, n, c, t, o]),
        m = s.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (n(b.GameProfileTrackActionActions.GameShopItem),
                    (0, t$.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: d,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, tK.rG)(e, l, t, a) && o();
                        },
                    }));
            },
            [n, o, d, i, l],
        );
    if (r) return (0, a.jsx)(lr, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, a.jsxs)(tu, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, a.jsx)(li, {}),
            (0, a.jsx)(tJ.E9, {
                newValue: ls,
                children: (0, a.jsx)(t2, { skuIds: x, analyticsLocations: d, onCardClick: m }),
            }),
        ],
    });
}
var lo = l(621466),
    ld = l(966697),
    lu = l(346055),
    lm = l(460905),
    lx = l(776231),
    lh = l(46054),
    lg = l(58703),
    lf = l(155718),
    lj = l(387408),
    lp = l(731068),
    lE = l(59318),
    lA = l(320095),
    lv = l(708676),
    lI = l(383233),
    lN = l(998218);
let lS = /^#{1,3}\s+(.+)$/,
    lC = /^https?:\/\/\S+$/;
var lb = l(60465),
    lT = l(158390),
    ly = l(103348),
    lR = l(371794);
let lk = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function lL(e) {
    e3.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, lR.aP)({
                    url: eR.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: C.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(ly.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (e3.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            e3.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        e3.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function lG(e) {
    let t = ((await tx.Bo.get({ url: eR.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !lk.has(t),
    );
    e3.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let lM = (0, u.UT)(T.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => T.A.getSimilarGames(e) ?? null,
    load: (e) => lG(e),
    retryConfig: { backoff: () => new lT.A(5 * tA.A.Millis.SECOND, 5 * tA.A.Millis.MINUTE) },
    failureStaleAfter: tA.A.Seconds.MINUTE,
});
async function lO(e, t) {
    e3.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await tx.Bo.get({ url: eR.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        e3.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, lj.A)((0, lA.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, lI._c)(e))
                            return e.components
                                .filter((e) => e.type === lf.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || lC.test(t.trim())
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
                        if ((0, lI._c)(e)) {
                            let t = e.components.find((e) => e.type === lf.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, lp.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, lE.tT)(e.content_type));
                        if (null != t) return (0, lp.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, lE.XB)(e.content_type));
                        if (null != l) return (0, lp.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, lp.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, lp.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, lp.oU)(
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
                        (l = (-1 === t ? a : a.slice(0, t)).match(lS)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    d =
                        a === i || (0, lI._c)(n)
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
        e3.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var lP = l(284009),
    l_ = l.n(lP),
    lw = l(376728),
    lV = l(976860);
async function lD(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    l_()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = e0.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(eR.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e1.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: eR.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await lw.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, lV.pX)(eR.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var lU = l(806244),
    lF = l(165648);
function lY(e, t) {
    return lh.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function lW(e) {
    return e.id;
}
function lB() {
    return (0, a.jsxs)(tt, {
        className: lU.s7,
        children: [
            (0, a.jsx)(te, { className: lU.o$ }),
            (0, a.jsxs)("div", {
                className: lU.UF,
                children: [(0, a.jsx)(te, { className: lU.iX }), (0, a.jsx)(te, { className: lU.jt })],
            }),
        ],
    });
}
function lH(e, t) {
    var l;
    let n,
        i = (0, lx.kr)(364 * (0, lx.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = lN.A.toURLSafe(e))
            ? null
            : (n.searchParams.append("format", "webp"),
              null != i && n.searchParams.append("width", i.toString()),
              null != l && n.searchParams.append("height", l.toString()),
              n.toString())) ?? e
    );
}
function lz(e) {
    let { message: t, src: l, aspectRatio: n } = e,
        [i, r] = s.useState(!1),
        c = s.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, a.jsx)(ld.y, {
              readyState: i ? eR.Rv1.READY : eR.Rv1.LOADING,
              aspectRatio: n,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, a.jsx)("img", {
                  src: l,
                  className: lU.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function lX(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, lo.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lo.vq)(e.target, HTMLSpanElement) && (0, lo.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        d = t.media?.proxyUrl ?? t.media?.url,
        u = null != d ? lH(d, c) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, a.jsx)(tk.D, {
              ...i,
              className: lU.Nr,
              onClick: r,
              children: (0, a.jsxs)(lu.M, {
                  className: lU.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(U.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: lU.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: lU._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: lU.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: lU.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, a.jsx)(U.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != u &&
                                  (0, a.jsx)("div", {
                                      className: lU.ax,
                                      children: (0, a.jsx)(lz, { message: t, src: u, aspectRatio: c }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(e8.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: lU.DD,
                                      children: lY(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: o()(lU.h_, lF.PT),
                                      children: [lY(t.body, l), (0, a.jsx)("div", { className: lU.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: lU.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: lU.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, a.jsxs)(U.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, lg.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, a.jsxs)("div", {
                                              className: lU.a5,
                                              children: [
                                                  (0, a.jsx)(lm.n, { size: "xs", color: "currentColor" }),
                                                  (0, a.jsx)(U.E, {
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
let lK = s.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, a.jsxs)(lu.M, {
        className: lU.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(e8.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: lU.DD,
                    children: lY(t.title, l),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: o()(lU.h_, lF.PT),
                    children: [lY(t.body, l), (0, a.jsx)("div", { className: lU.fm })],
                }),
            (0, a.jsxs)("div", {
                className: lU.ov,
                children: [
                    (0, a.jsx)(U.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, lg.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: lU.a5,
                            children: [
                                (0, a.jsx)(lm.n, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(U.E, {
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
function lJ(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, lo.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lo.vq)(e.target, HTMLSpanElement) && (0, lo.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? lH(o, c) : void 0;
    return (0, a.jsxs)(tk.D, {
        ...i,
        className: lU.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != d &&
                (0, a.jsx)("div", {
                    className: lU.Vl,
                    children: (0, a.jsx)(lz, { message: t, src: d, aspectRatio: c }),
                }),
            (0, a.jsx)(lK, { message: t, channelId: l }),
        ],
    });
}
function l$(e) {
    let { message: t, onCardClick: l, listItemProps: n } = e,
        { poll: i } = t,
        r = s.useCallback(() => l(t.id), [l, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(tk.D, {
        ...n,
        className: lU.Nr,
        onClick: r,
        children: (0, a.jsxs)(lu.M, {
            className: lU.zI,
            children: [
                (0, a.jsx)(e8.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: lU.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: lU.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: lU.Nf,
                                    children: (0, a.jsx)(U.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: lU.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, a.jsx)(U.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: lU.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: lU.ov,
                    children: (0, a.jsx)(U.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, lv.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function lQ(e) {
    return null != e.message.poll
        ? (0, a.jsx)(l$, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(lX, { ...e })
          : (0, a.jsx)(lJ, { ...e });
}
let lq = s.memo(function (e) {
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
                    null == e || l || T.A.isAnnouncementsFetching(e) || lO(e, { limit: 8 });
                }, [e, l, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n, hasFetched: l }
            );
        })(t),
        j = (0, tq.l)("game_profile_announcements"),
        p = s.useCallback(() => {
            let e = i?.guild?.id ?? m;
            null != e &&
                null != x &&
                (o(b.GameProfileTrackActionActions.Announcements),
                lb.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                c(),
                lD({ invite: i, guildId: e, channelId: x, analyticsLocationStack: n }));
        }, [o, c, l, i, m, x, n, t]),
        E = s.useCallback(
            (e) => {
                let a = i?.guild?.id ?? m;
                null != a &&
                    null != x &&
                    (o(b.GameProfileTrackActionActions.AnnouncementsItem),
                    lb.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                    c(),
                    lD({ invite: i, guildId: a, channelId: x, messageId: e, analyticsLocationStack: n }));
            },
            [o, c, l, i, m, x, n, t],
        ),
        A = null != x && d.length > 0;
    return (!g || h) && r
        ? (0, a.jsx)(td, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(t6, {
                  gap: 16,
                  children: eQ()
                      .range(3)
                      .map((e) => (0, a.jsx)(lB, {}, e)),
              }),
          })
        : A
          ? (0, a.jsx)(tu, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: p,
                children: j
                    ? (0, a.jsx)(t0.A, {
                          gap: 16,
                          items: d,
                          getItemKey: lW,
                          itemClassName: lU.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(lQ, { message: e, channelId: x, onCardClick: E, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(tZ.A, {
                          gap: 16,
                          children: d.map((e) => (0, a.jsx)(lQ, { message: e, channelId: x, onCardClick: E }, e.id)),
                      }),
            })
          : null;
});
var lZ = l(28863),
    l0 = l(975807),
    l1 = l(194362);
function l8(e) {
    let { game: t } = e,
        { trackAction: l } = w(),
        n = s.useCallback(async () => {
            l(b.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, l1.a)(eR.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, l0.A)(e);
        }, [l]),
        i = s.useCallback((e) => (0, a.jsx)(lZ.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === lf.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(U.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: i }),
          });
}
var l3 = l(505779),
    l2 = l(998445),
    l4 = l(274997),
    l6 = l(80500),
    l5 = l(319745),
    l7 = l(488225),
    l9 = l(967492),
    ne = l(72265),
    nt = l(454346),
    nl = l(37948),
    nn = l(693558);
let ni = { size: "xs", colorClass: nn.w };
function na(e) {
    let { website: t } = e,
        { trackAction: l } = w(),
        n = (0, nl.A)(),
        {
            action: i,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case l3.V.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(l2.GlobeEarthIcon, { ...t }),
                        action: b.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case l3.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(l4.p, { ...t }),
                        action: b.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case l3.V.YOUTUBE:
                    return {
                        action: b.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(l6.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case l3.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(l5.Z, { ...t }),
                        action: b.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case l3.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(l7.L, { ...t }),
                        action: b.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case l3.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(l9.a, { ...t }),
                        action: b.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case l3.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(ne.T, { ...t }),
                        action: b.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case l3.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(nt.a, { ...t }),
                        action: b.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, ni),
        o = s.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, a.jsx)(J.m, {
        text: c,
        children: (0, a.jsx)(tk.D, { onClick: o, className: nn.y, title: c, children: r }),
    });
}
var ns = l(808380),
    nr = l(31300),
    nc = l(802516),
    no = l(22363),
    nd = l(418524);
function nu(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case ns.Y.DESKTOP:
            return (0, a.jsx)(nr.k, { size: "xs", ...l });
        case ns.Y.XBOX:
            return (0, a.jsx)(nc.Y, { size: "xs", ...l });
        case ns.Y.PLAYSTATION:
            return (0, a.jsx)(no.X, { size: "xs", ...l });
        case ns.Y.NINTENDO:
            return (0, a.jsx)(nd.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function nm(e) {
    let { platform: t } = e;
    return (0, a.jsx)(
        J.m,
        {
            text: (function (e) {
                switch (e) {
                    case ns.Y.DESKTOP:
                        return em.intl.string(em.t.KT6uCJ);
                    case ns.Y.XBOX:
                        return em.intl.string(em.t.DDWUJp);
                    case ns.Y.PLAYSTATION:
                        return em.intl.string(em.t.fzMz2s);
                    case ns.Y.NINTENDO:
                        return em.intl.string(em.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(nu, { platform: t }),
        },
        t,
    );
}
let nx = [ns.Y.DESKTOP, ns.Y.XBOX, ns.Y.PLAYSTATION, ns.Y.NINTENDO];
var nh = l(424994),
    ng = l(623828);
function nf() {
    return (0, a.jsx)(U.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let nj = function (e) {
    let { game: t } = e,
        l = (0, e2.c)("GameProfileGameDetails"),
        n = s.useMemo(() => t.genres.map(tO.du).join(", "), [t]),
        i = t.getCompanyByRole(lf.wk.PUBLISHER),
        r = t.getCompanyByRole(lf.wk.DEVELOPER),
        c = i.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        u = s.useMemo(() => {
            let e = new Set(t.platforms),
                l = [...e];
            return (
                !e.has(ns.Y.DESKTOP) && (e.has(ns.Y.MACOS) || e.has(ns.Y.LINUX)) && l.push(ns.Y.DESKTOP),
                l.filter((e) => nx.includes(e)).sort((e, t) => nx.indexOf(e) - nx.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return l3.p.includes(t);
            })
            .sort((e, t) => l3.p.indexOf(e.category) - l3.p.indexOf(t.category)),
        x = !(0, e5.uJ)(n),
        h = !(0, e5.uJ)(c),
        g = !(0, e5.uJ)(o),
        f = !(0, e5.uJ)(d),
        j = u.length > 0,
        p = m.length > 0 && !m.every((e) => (0, e5.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: ng.uW,
        children: [
            (0, a.jsx)("div", {
                className: ng.Gf,
                children: (0, a.jsx)(e8.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ng.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: ng.J1,
                        children: [
                            (0, a.jsx)(U.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
                            }),
                            x
                                ? (0, a.jsx)(U.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: ng.Gu,
                                      children: n,
                                  })
                                : (0, a.jsx)(nf, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ng.J1,
                        children: [
                            (0, a.jsx)(U.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== i.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
                            }),
                            h
                                ? (0, a.jsx)(U.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: ng.Gu,
                                      children: c,
                                  })
                                : (0, a.jsx)(nf, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ng.J1,
                        children: [
                            (0, a.jsx)(U.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            g
                                ? (0, a.jsx)(U.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: ng.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(nf, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ng.J1,
                        children: [
                            (0, a.jsx)(U.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            f
                                ? (0, a.jsx)(U.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: ng.Gu,
                                      children: lg.i$(new Date(d), "LL"),
                                  })
                                : (0, a.jsx)(nf, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ng.J1,
                        children: [
                            (0, a.jsx)(U.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            j
                                ? (0, a.jsx)("div", {
                                      className: ng.Gu,
                                      children: u.map((e) => (0, a.jsx)(nm, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(nf, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ng.J1,
                        children: [
                            (0, a.jsx)(U.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, a.jsx)("div", {
                                      className: ng.Gu,
                                      children: m.map((e) => (0, a.jsx)(na, { website: e }, e.url)),
                                  })
                                : (0, a.jsx)(nf, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ng.J1,
                        children: [
                            (0, a.jsx)(U.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(U.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: ng.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: nh.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: ng.OQ, children: (0, a.jsx)(l8, { game: t }) }),
        ],
    });
};
var np = l(141628),
    nE = l(289363),
    nA = l(793919);
function nv() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: nA.uW,
        children: [
            (0, a.jsx)(te, { className: nA.dU, width: "30%" }),
            (0, a.jsxs)(tt, {
                className: nA.nV,
                children: [
                    (0, a.jsx)("div", { className: nA.sB, children: (0, a.jsx)(nE.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: nA.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: nA.Yv,
                                children: [(0, a.jsx)(te, { width: "55%" }), (0, a.jsx)(te, { width: "85%" })],
                            }),
                            (0, a.jsx)(tl, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nI(e) {
    let { analyticsLocations: t } = e,
        l = (0, e2.c)("GameProfileLinkAccount"),
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
        h = (0, u.bG)([P.default], () => P.default.getCurrentUser()),
        g = s.useCallback(() => {
            (n(b.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !m || x || null == h
        ? null
        : null == d || (c && !i)
          ? (0, a.jsx)(nv, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: nA.uW,
                  children: [
                      (0, a.jsx)(e8.D, {
                          className: nA.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: nA.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: nA.sB,
                                  children: (0, a.jsx)(nE.default, { application: d }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: nA.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: nA.FS,
                                          children: [
                                              (0, a.jsx)(e8.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: d.name,
                                                  }),
                                              }),
                                              (0, a.jsx)(U.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: em.intl.string(em.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(X.$, {
                                          variant: "secondary",
                                          icon: np.A,
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
var nN = l(635377),
    nS = l.n(nN),
    nC = l(80687),
    nb = l(534573),
    nT = l(248643),
    ny = l(256905),
    nR = l(684519),
    nk = l(191096),
    nL = l(90721),
    nG = l(140128);
function nM(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function nO(e, t) {
    return (0, nb.Ec)(e, { size: t, keepAspectRatio: !0, format: e6.QB ? "webp" : null });
}
let nP = new (nS())({ max: 100 }),
    n_ = s.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, r] = s.useState(null),
            c = null != i && i.url === t ? i.isPortrait : (nP.get(t) ?? !1),
            d = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (nP.set(t, l),
                        r((e) => (null != e && e.url === t && e.isPortrait === l ? e : { url: t, isPortrait: l })));
                },
                [t],
            ),
            u = s.useCallback((e) => d(e.currentTarget), [d]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: d,
                    src: nO(t, 106),
                    className: o()(nG.r4, !c && nG.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, a.jsx)("img", { ref: d, src: nO(t, 900), className: o()(nG.c8, c && nG.D7, n), alt: l, onLoad: u }),
            ],
        });
    }),
    nw = s.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: r, onSelect: c, gameName: d, listItemProps: u } = e,
            m = s.useCallback(() => c(n), [c, n]),
            x = u?.tabIndex;
        return (0, a.jsx)(tk.D, {
            ...u,
            className: o()(nG.JS, i && nG.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: nG.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: nO("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nG.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: d }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, a.jsx)("div", {
                            className: nG.UZ,
                            children: (0, a.jsx)(nC.D, { playing: i && r, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nV = s.memo(function (e) {
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
            (0, nL.A)({ videoRef: i, canvasRef: u, enabled: !l }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !l && (0, a.jsx)("canvas", { ref: u, className: nG.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: nG.tN,
                        children: (0, a.jsx)(nT.A, {
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
                            renderLinkComponent: nR.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: nG.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nD(e) {
    let { game: t } = e,
        { trackAction: l } = w(),
        [n, i] = s.useState(0),
        [r, c] = s.useState(null),
        [o, d] = s.useState(t.screenshotUrls),
        m = s.useRef(null),
        x = s.useRef(null),
        h = (0, u.bG)([tL.Ay], () => tL.Ay.useReducedMotion),
        { obscured: g } = (0, nk.I3)(),
        f = (0, tq.l)("game_profile_media");
    o !== t.screenshotUrls && (d(t.screenshotUrls), i(0));
    let j = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, lR.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, lR.YE)(e.application_id, e.id, e.width, "webp"),
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
        E = j.length > 0 ? Math.min(n, j.length - 1) : 0,
        A = j[E],
        v = A?.type === "VIDEO",
        I = s.useCallback(
            (e) => {
                let t = j[E],
                    l = j[e];
                (t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? c(t.url) : c(null), i(e));
            },
            [j, E],
        ),
        [N, S] = s.useState(!1),
        C = s.useRef(null),
        T = s.useCallback(() => {
            l(v ? b.GameProfileTrackActionActions.ClickTrailer : b.GameProfileTrackActionActions.ClickImage);
            let e = m.current,
                t = C.current,
                n = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = j.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === E;
                    return { ...e, autoPlay: !!l && n, autoMute: !l || a, initialTimeSec: l ? s : void 0, videoRef: x };
                }
                return e;
            });
            (0, ny.R)({
                items: r,
                startingIndex: E,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: i,
                onClose: () => {
                    let e = x.current,
                        t = C.current,
                        l = null != e ? !e.paused : n;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        S(l));
                },
            });
        }, [l, j, E, v]),
        y = s.useCallback(() => S(!0), []),
        R = s.useCallback(() => S(!1), []),
        k = s.useCallback(() => c(null), []),
        L = s.useCallback(
            (e) => {
                e && T();
            },
            [T],
        );
    return 0 === j.length
        ? null
        : (0, a.jsxs)("div", {
              className: nG.kL,
              children: [
                  v
                      ? (0, a.jsx)("div", {
                            className: nG.ND,
                            children: (0, a.jsx)(
                                nV,
                                {
                                    item: A,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: C,
                                    onPlay: y,
                                    onPause: R,
                                    onFullscreenChange: L,
                                },
                                `${E}-${A.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: nG.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: nG.Jy,
                                            onAnimationEnd: k,
                                            children: (0, a.jsx)(n_, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, a.jsx)("div", { className: nG.QN }),
                                (0, a.jsx)(tk.D, {
                                    className: nG.gv,
                                    onClick: T,
                                    children: (0, a.jsx)("div", {
                                        className: nG.cs,
                                        children: (0, a.jsx)(
                                            n_,
                                            {
                                                url: A.url,
                                                className: nG.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: t.name }),
                                            },
                                            A.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, a.jsx)(t0.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: p,
                            getItemKey: nM,
                            renderItem: (e, l) => {
                                let { item: n, index: i } = e;
                                return (0, a.jsx)(
                                    nw,
                                    {
                                        item: n,
                                        index: i,
                                        isPlaying: N,
                                        isSelected: i === E,
                                        onSelect: I,
                                        gameName: t.name,
                                        listItemProps: l,
                                    },
                                    `${i}-${n.url}`,
                                );
                            },
                        })
                      : (0, a.jsx)(tZ.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, l) =>
                                (0, a.jsx)(
                                    nw,
                                    {
                                        item: e,
                                        index: l,
                                        isPlaying: N,
                                        isSelected: l === E,
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
var nU = l(49381),
    nF = l(223273);
function nY(e, t, l) {
    if (null == e || null == t || t < 10) return nF.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? nF.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? nF.vI.VERY_POSITIVE
              : nF.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nF.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nF.vI.MIXED;
    if (e >= 20) return nF.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return nF.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return nF.vI.VERY_NEGATIVE;
    return nF.vI.OVERWHELMINGLY_NEGATIVE;
}
function nW(e) {
    switch (e) {
        case nF.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nF.vI.OVERWHELMINGLY_POSITIVE:
        case nF.vI.VERY_POSITIVE:
        case nF.vI.POSITIVE:
        case nF.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nF.vI.MIXED:
            return "steam-review-text-mixed";
        case nF.vI.MOSTLY_NEGATIVE:
        case nF.vI.NEGATIVE:
        case nF.vI.VERY_NEGATIVE:
        case nF.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nB =
        (((i = {})[(i.MIGHTY = 1)] = "MIGHTY"),
        (i[(i.STRONG = 2)] = "STRONG"),
        (i[(i.FAIR = 3)] = "FAIR"),
        (i[(i.WEAK = 4)] = "WEAK"),
        i),
    nH = l(778591);
function nz(e) {
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
var nX = l(315189);
function nK(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: r = "all" } = e,
        { trackAction: c } = w(),
        o = (0, nl.A)(),
        d = nY(n, i, "recent" === r),
        u = nW(d),
        m = s.useCallback(() => {
            (c(b.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, c, t]);
    return (0, a.jsx)(tk.D, {
        onClick: m,
        className: nX.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nX.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nX.tN,
                    children: [
                        (0, a.jsx)(nU.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(e8.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    J.m,
                    {
                        text:
                            d === nF.vI.NO_USER_REVIEWS
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
                            className: nX.Z0,
                            children: [
                                (0, a.jsx)(U.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: nX.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nF.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case nF.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case nF.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case nF.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case nF.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case nF.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case nF.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case nF.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case nF.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case nF.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != i &&
                                    d !== nF.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(U.E, {
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
function nJ(e) {
    let { game: t, url: l } = e,
        { reviews: n } = t,
        i = n?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        r = i.tier,
        c = i.topCriticRating ?? -1,
        o = i.topCriticRatingCount ?? -1,
        d = (c <= 0 || o <= 0) && null == r,
        { trackAction: u } = w(),
        m = (0, nl.A)(),
        x = s.useCallback(() => {
            (u(b.GameProfileTrackActionActions.OpenCriticReviews), m(l));
        }, [m, u, l]);
    return (0, a.jsx)(tk.D, {
        onClick: x,
        className: nX.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nX.Ur,
            children: [
                (0, a.jsx)(e8.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nX.WA,
                    children: [
                        null != r ? (0, a.jsx)(n$, { tier: r }) : null,
                        null != r && c > 0 && o > 0 ? (0, a.jsx)(nQ, { rating: c, tier: r }) : null,
                        d
                            ? (0, a.jsx)(U.E, {
                                  variant: "text-xs/medium",
                                  color: nW(nF.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function n$(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case nB.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case nB.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case nB.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case nB.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case nB.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nB.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nB.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nB.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, a.jsx)(
        J.m,
        {
            text: l,
            children: (0, a.jsx)("div", {
                className: nX.TE,
                children: (0, a.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nQ(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case nB.MIGHTY:
                    t = "#fc430a";
                    break;
                case nB.STRONG:
                    t = "#9e00b4";
                    break;
                case nB.FAIR:
                    t = "#4aa1ce";
                    break;
                case nB.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, a.jsx)(
        J.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nX.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(nz, { rating: t, strokeColor: n }),
                    (0, a.jsx)(U.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nX.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nq = function (e) {
    let { game: t } = e,
        l = (0, e2.c)("GameProfileReviews"),
        n = (0, nH.I)(t.id),
        i = t.opencriticUrl,
        s = t.steamReleaseStatus !== tz.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = nY(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== nF.vI.NO_USER_REVIEWS,
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
              className: nX.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nX.Gf,
                      children: (0, a.jsx)(e8.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nX.kL,
                      children: [
                          o && null != n
                              ? (0, a.jsx)("div", {
                                    className: nX.WH,
                                    children: (0, a.jsx)(nK, {
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
                                    className: nX.WH,
                                    children: (0, a.jsx)(nK, {
                                        url: n,
                                        title: em.intl.string(x),
                                        rating: u,
                                        ratingCount: m,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          h && null != i
                              ? (0, a.jsx)("div", { className: nX.WH, children: (0, a.jsx)(nJ, { game: t, url: i }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nZ = l(815996),
    n0 = l(722258),
    n1 = l(258245),
    n8 = l(561769),
    n3 = l(484469),
    n2 = l(57020),
    n4 = l(682301);
let n6 = [];
var n5 = l(758836),
    n7 = l(399872);
let n9 = [0, 1, 2, 3, 4];
function ie(e) {
    return e.skuId;
}
function it(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        r = s.useContext(n8.v3),
        { trackAction: c } = w(),
        o = s.useRef(null),
        d = s.useCallback(
            (e) => {
                (c(b.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, n0.B)({
                        skuId: i,
                        analyticsLocations: [g.A.GAME_PROFILE],
                        analyticsSource: g.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, n2.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = r;
    return (0, a.jsx)(n8.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(n1.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: n7.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function il() {
    return (0, a.jsx)(n3.A, {});
}
function ii(e) {
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
                            null == e || t || T.A.isShopCollectionFetching(e) || lL(e);
                        }, [e, t]),
                        { skuIds: n ?? n6, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, n4.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = s.useCallback(() => {
            (n(b.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nZ.Cz)({
                    analyticsLocations: [g.A.GAME_PROFILE],
                    analyticsSource: g.A.GAME_PROFILE,
                    tab: n5.G2.CATALOG,
                }));
        }, [n, l]),
        o = (0, tq.l)("game_profile_shop_carousel");
    return r
        ? (0, a.jsx)(td, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(t6, { children: n9.map((e) => (0, a.jsx)(il, {}, e)) }),
          })
        : 0 === i.length
          ? null
          : (0, a.jsx)(tu, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: c,
                children: o
                    ? (0, a.jsx)(t0.A, {
                          gap: "md",
                          items: i,
                          getItemKey: ie,
                          renderItem: (e, t) => (0, a.jsx)(it, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, a.jsx)(tZ.A, { gap: "md", children: i.map((e) => (0, a.jsx)(it, { product: e }, e.skuId)) }),
            });
}
var ia = l(921138);
let is = [],
    ir = [];
var ic = l(987070);
let io = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function id(e) {
    return e.id;
}
function iu(e) {
    let { className: t } = e;
    return (0, a.jsx)(tt, { className: t, children: (0, a.jsx)(te, { className: ic.Lg }) });
}
function im(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = w(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        d = null == r || c === r,
        { shouldOpenGameProfile: u, gameId: m } = (0, ia.Ay)({
            gameId: t.id,
            source: b.GameProfileSources.SimilarGames,
        }),
        x = s.useCallback(() => {
            (i(b.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                u && null != m && n(m, b.GameProfileSources.SimilarGames));
        }, [t.id, m, i, u, n]),
        h = s.useCallback(() => o(r), [r]);
    return (0, a.jsx)(J.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, a.jsxs)(tk.D, {
            ...l,
            className: ic.Nr,
            onClick: x,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(tP.Ay, {
                    game: t,
                    className: ic.xe,
                    size: tP.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !d && (0, a.jsx)(iu, { className: ic.uz }),
            ],
        }),
    });
}
function ix(e) {
    let { gameId: t } = e,
        { isFetching: l, similarGames: n } = (function (e) {
            let t = !lk.has(e),
                { data: l, isLoading: n, error: i } = lM(e, t),
                a = t && null != l ? l : is;
            (0, I.x)(a);
            let s = (0, u.bG)(
                    [tm.A],
                    () => a.some((e) => null == tm.A.getGame(e) && !tm.A.hasNoData(e) && !tm.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, u.yK)(
                    [tm.A, P.default],
                    () => {
                        let e = P.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => tm.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, ia.T_)(t) && !(0, k.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: ir };
        })(t),
        i = (0, tq.l)("game_profile_similar_games");
    return lk.has(t)
        ? null
        : l
          ? (0, a.jsx)(td, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: ic.XG,
                    style: io,
                    children: (0, a.jsx)(t6, {
                        children: eQ()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(iu, { className: ic.aZ }, e)),
                    }),
                }),
            })
          : 0 === n.length
            ? null
            : (0, a.jsx)(tu, {
                  title: em.intl.string(em.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: ic.XG,
                      style: io,
                      children: i
                          ? (0, a.jsx)(t0.A, {
                                gap: "md",
                                items: n,
                                getItemKey: id,
                                itemClassName: ic.cW,
                                renderItem: (e, t) => (0, a.jsx)(im, { game: e, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(tZ.A, { gap: "md", children: n.map((e) => (0, a.jsx)(im, { game: e }, e.id)) }),
                  }),
              });
}
l(667532);
var ih = l(853022);
let ig = new Set(["1402418703554842694", "356877880938070016"]),
    ij = [l3.V.EPICGAMES, l3.V.STEAM, l3.V.ROBLOX, l3.V.BATTLENET, l3.V.RIOT, l3.V.MINECRAFT];
function ip(e) {
    return (0, a.jsx)(X.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iE = l(349361),
    iA = l(924895),
    iv = l(422688),
    iI = l(505200),
    iN = l(695250);
let iS = function (e) {
    switch (e.category) {
        case l3.V.STEAM:
            return {
                icon: nU.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: b.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case l3.V.EPICGAMES:
            return {
                icon: iE.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: b.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case l3.V.ROBLOX:
            return {
                icon: iA.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: b.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case l3.V.BATTLENET:
            return {
                icon: iv.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: b.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case l3.V.RIOT:
            return {
                icon: iI.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: b.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case l3.V.MINECRAFT:
            return {
                icon: iN.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: b.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: nc.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: b.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var iC = l(242216);
function ib(e) {
    let t,
        l,
        n,
        i,
        a,
        r =
            ((t = (0, nH.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eR.d3x.XBOX_GAME_PASS && !(0, e5.uJ)(e.id));
                return t?.id == null ? null : (0, ih.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== l3.V.EPICGAMES || !!ig.has(n)) &&
                            (e.category !== l3.V.STEAM || a !== tz.Y.RETIRED_ABANDONED) &&
                            ij.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === tz.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === l3.V.STEAM) ||
                    e.push({ category: l3.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === l3.V.STEAM ? -1 : +(t.category === l3.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function iT(e) {
    let { data: t } = e,
        { trackAction: l } = w(),
        n = (0, nl.A)();
    return (0, a.jsx)(ip, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let iy = function (e) {
    let { game: t } = e,
        { trackAction: n } = w(),
        { showsStoreLinks: i, storeWebsites: r } = ib(t),
        c = s.useMemo(() => r.map(iS).filter((e) => null != e), [r]);
    if (!i) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(iT, { data: e });
    }
    if (2 === c.length)
        return (0, a.jsxs)("div", {
            className: iC.G,
            children: [(0, a.jsx)(iT, { data: c[0] }), (0, a.jsx)(iT, { data: c[1] })],
        });
    let o = (0, a.jsx)(ip, {
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
        ? (0, a.jsxs)("div", { className: iC.G, children: [(0, a.jsx)(iT, { data: c[0] }), o] })
        : o;
};
var iR = l(123292),
    ik = l(672572),
    iL = l(94936);
function iG(e) {
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
                    ? (t(b.GameProfileTrackActionActions.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(b.GameProfileTrackActionActions.ShowMore), n("expanded"));
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
        className: o()(ik.fi, iL.k),
        children: [
            (0, a.jsx)(U.E, {
                ref: l,
                className: iL.Q,
                lineClamp: n ? void 0 : d,
                variant: "text-md/medium",
                children: t.description,
            }),
            i && (0, a.jsx)(iR.Q, { onClick: r, text: u }),
        ],
    });
}
var iM = l(40478),
    iO = l(764948);
let iP = s.memo(function (e) {
    let { game: t, analyticsLocations: l, selectTab: n, getScrollOffset: i } = e,
        s = t.steamReleaseStatus !== tz.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: iO.V,
        children: [
            (0, a.jsx)(nD, { game: t }),
            (0, a.jsxs)("div", {
                className: iM.h,
                children: [
                    (0, a.jsx)(tY, { game: t }),
                    (0, a.jsxs)("div", {
                        className: iM.X,
                        children: [(0, a.jsx)(iy, { game: t }), (0, a.jsx)(iG, { game: t })],
                    }),
                ],
            }),
            (0, a.jsx)(nI, { analyticsLocations: l }),
            (0, a.jsx)(tr, {}),
            (0, a.jsx)(lq, { gameId: t.id, getScrollOffset: i }),
            (0, a.jsx)(lc, { selectTab: n }),
            (0, a.jsx)(ii, { game: t }),
            (0, a.jsx)(ix, { gameId: t.id }),
            s && (0, a.jsx)(nq, { game: t }),
            (0, a.jsx)(nj, { game: t }),
        ],
    });
});
var i_ = l(164135);
let iw = s.memo(function (e) {
    let { game: t, selectTab: l, getScrollOffset: n } = e;
    return (0, a.jsxs)("div", {
        className: i_.V,
        children: [
            (0, a.jsxs)("div", {
                className: i_.B,
                children: [(0, a.jsx)(nD, { game: t }), (0, a.jsx)(iG, { game: t })],
            }),
            (0, a.jsx)(lq, { gameId: t.id, getScrollOffset: n }),
            (0, a.jsx)(lc, { selectTab: l }),
            (0, a.jsx)(ii, { game: t }),
            (0, a.jsx)(ix, { gameId: t.id }),
        ],
    });
});
var iV = l(881698),
    iD = l(928550),
    iU = l(562708),
    iF = l(414499),
    iY = l(359549),
    iW = l(139286),
    iB = l(873516);
function iH(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = w();
    (0, iW.A)({
        name: iU.ImpressionNames.CLOUD_PLAY_CTA,
        type: iU.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let r = s.useCallback(() => {
        (i(b.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, a.jsx)(J.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(X.$, {
            icon: iF.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function iz(e) {
    let { gameId: t, cloudPlayAppId: l, analyticsLocations: n } = e,
        i = (0, iY.rC)({ applicationId: l, sourceApplicationId: t, analyticsLocations: n });
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: iB.k,
              children: (0, a.jsx)(iH, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var iX = l(768626);
function iK(e) {
    let { game: t, analyticsLocations: l } = e,
        n = (0, iV.A)(t.linkedApplications)?.id,
        [i] = (0, iD.L_)(t.getOfficialApplicationId()),
        [s] = (0, iD.L_)(t.id),
        { showsStoreLinks: r } = ib(t),
        c = t.steamReleaseStatus !== tz.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: o()(iX.pz, ik.fi, r ? iX.FJ : iX.dg),
        children: [
            null == n || i || s ? null : (0, a.jsx)(iz, { gameId: t.id, cloudPlayAppId: n, analyticsLocations: l }),
            (0, a.jsxs)("div", {
                className: iO.V,
                children: [
                    (0, a.jsx)(iy, { game: t }),
                    (0, a.jsx)(nI, { analyticsLocations: l }),
                    (0, a.jsx)(tr, {}),
                    c && (0, a.jsx)(nq, { game: t }),
                    (0, a.jsx)(nj, { game: t }),
                ],
            }),
        ],
    });
}
var iJ = l(105865);
function i$(e) {
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
            (0, a.jsx)(tD, { game: t, ref: o }),
            (0, a.jsxs)(eq.Ch, {
                ref: d,
                className: iJ.XG,
                onScroll: x,
                children: [
                    (0, a.jsx)("div", { className: iJ.xY, "aria-hidden": !0 }),
                    (0, a.jsx)(tH, { game: t }),
                    (0, a.jsx)(ty.F, {
                        children: l
                            ? (0, a.jsxs)("div", {
                                  className: iJ.jC,
                                  children: [
                                      (0, a.jsx)(iw, { game: t, selectTab: n, getScrollOffset: m }),
                                      (0, a.jsx)(iK, { game: t, analyticsLocations: c }),
                                  ],
                              })
                            : (0, a.jsx)("div", {
                                  className: iJ.b9,
                                  children: (0, a.jsx)(iP, {
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
var iQ = l(658820),
    iq = l(787188);
function iZ(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, a.jsx)(iQ.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: g.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: tJ.Ye.GAME_PROFILE_GAME_SHOP,
        className: iq.kL,
        scrollerClassName: iq.XG,
        promotionBannerClassName: iq.Rv,
    });
}
var i0 = l(733391),
    i1 = l(171616);
let i8 = {
    [ed.OVERVIEW]: b.GameProfileTrackActionActions.Overview,
    [ed.COMMUNITIES]: b.GameProfileTrackActionActions.Communities,
    [ed.COMMERCE]: b.GameProfileTrackActionActions.GameShop,
};
function i3(e) {
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
        [U, F] = s.useState(null),
        { clientThemesClassName: Y } = (0, E.Ay)(),
        W = (0, u.bG)([C.default], () => C.default.locale),
        B = s.useMemo(() => (0, b.generateViewId)(), []),
        { analyticsLocations: H } = (0, f.Ay)(g.A.GAME_PROFILE),
        z = (0, y.s)(t),
        { data: X } = (0, I.I)(t),
        K = X?.getOfficialApplicationId(),
        J = (0, R.rG)(X),
        $ = null != K,
        Q = (0, u.bG)([p.A], () => null != K && p.A.didFetchingApplicationFail(K), [K]),
        q = X?.name ?? "",
        Z = (0, k.A)(X),
        ee = s.useRef(null);
    s.useEffect(() => {
        ee.current = U;
    }, [U]);
    let {
            hasAlreadyLinked: et,
            canStartAuthorization: el,
            fetched: en,
            startAuthorization: ei,
            connectionApp: ea,
        } = (0, j.RD)(X),
        { invite: es, isMember: er, isResolving: ec } = (0, R.Ay)(X, F),
        { socialLayerStorefrontRecommendationsData: eu, socialLayerStorefrontRecommendationsLoading: em } = (function (
            e,
        ) {
            let t = P.default.getCurrentUser()?.id,
                l = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: n, isStorefrontConfigLoaded: i } = (0, u.cf)(
                    [G.A],
                    () => ({
                        storefrontApplicationId: null != e ? G.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === G.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, L.h)(n),
                r = (0, u.bG)([p.A], () => null != n && p.A.didFetchingApplicationFail(n), [n]),
                c = s.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: o, status: d } = (0, O.XQ)({
                    applicationIds: c,
                    userIds: l,
                    numItems: 6,
                    source: M.B.USER_PROFILE,
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
            function (e, n, i) {
                let a = (0, b.getGuildIdAndVerifiedFromInvite)(ee.current);
                (0, b.trackGameProfileAction)({
                    gameName: q,
                    gameId: t,
                    action: e,
                    similarGameId: n,
                    viewId: B,
                    guildId: i ?? a.guildId,
                    isVerified: null == i && a.isVerified,
                    source: l,
                });
            },
            [q, t, B, l],
        );
    ((0, h.Ay)(() => {
        ((0, b.trackGameProfileOpen)({
            source: l,
            viewId: B,
            gameId: t,
            gameName: q,
            authorId: n,
            profileType: b.GameProfileTypes.FullProfile,
        }),
            (0, A.He)());
    }),
        (0, h.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, b.getGuildIdAndVerifiedFromInvite)(ee.current),
                n = Date.now(),
                i = z.map((e) => {
                    let t = (0, v.JM)(e) ? (0, v.W6)(e, n) : (0, v.aJ)(e, W);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, b.trackGameProfileClose)({
                viewId: B,
                gameId: t,
                gameName: q,
                playedFriendIds: z.map((e) => e.author_id),
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
                e ? ((0, x.closeAllModals)(), (0, S.M)()) : r();
            },
            [r],
        ),
        ej = s.useCallback(() => ef(!1), [ef]),
        { navigation: ep, selectionVersion: eE } = (function (e) {
            let [t, l] = s.useState(ed.OVERVIEW),
                [n, i] = s.useState(0),
                a = s.useCallback((e) => {
                    (l(e), i((e) => e + 1));
                }, []),
                r = s.useCallback(
                    (l) => {
                        if (l !== t) {
                            let t = i8[l];
                            null != t && e(t);
                        }
                        a(l);
                    },
                    [t, a, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: t, selectTab: r }), [t, r]), selectionVersion: n };
        })(ex),
        { selectedTab: eA } = ep,
        ev = (function (e) {
            let { game: t, navigation: l } = e,
                { selectedTab: n, selectTab: i } = l,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                c = eo({ location: "GameProfileModal" });
            s.useEffect(() => {
                c && (0, i0.Xw)();
            }, [c]);
            let o = (0, u.bG)(
                    [G.A],
                    () =>
                        (null != a ? G.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && G.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                d = c && null != o,
                { storefront: m } = (0, i1.A)({ applicationId: d ? o : null }),
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
        { hasCommerceTab: eI, storefrontApplicationId: eN, storefront: eS, selectedStorefrontPageIndex: eC } = ev,
        eb = Object.values(eS?.promotions ?? {})[0] ?? null,
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
                storefrontPromotion: eb,
                closeModal: ef,
                navigateToGame: w,
                trackAction: ex,
                viewId: B,
            }),
            [V, el, et, en, ei, ea, es, J, $, Q, ec, er, eu, em, eI, eb, ef, w, ex, B],
        );
    return null == X
        ? null
        : (0, a.jsx)(f.f5, {
              value: H,
              children: (0, a.jsx)(m.N, {
                  transitionState: i,
                  onClose: r,
                  children: (0, a.jsx)(_.Provider, {
                      value: eT,
                      children: (0, a.jsx)("div", {
                          className: o()(Y, ik.kL),
                          ref: eg,
                          children: (0, a.jsxs)(N.A, {
                              obscured: Z,
                              onClose: ej,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: ik.sx,
                                      children: (0, a.jsx)(eJ, { game: X, navigation: ep, socialLayerStorefront: ev }),
                                  }),
                                  eA === ed.OVERVIEW &&
                                      (0, a.jsx)(i$, {
                                          game: X,
                                          selectTab: ep.selectTab,
                                          selectionVersion: eE,
                                          initialScrollOffset: c,
                                          isTwoColumn: V,
                                          analyticsLocations: H,
                                      }),
                                  eA === ed.COMMUNITIES && (0, a.jsx)(tT, { game: X }),
                                  eA === ed.COMMERCE && (0, a.jsx)(iZ, { applicationId: eN, selectedPageIndex: eC }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let i2 = function (e) {
    let { gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, ...r } = e,
        [c, o] = s.useState({ gameId: t, source: l, sourceUserId: n, initialScrollOffset: i }),
        d = c.gameId,
        u = s.useCallback(
            (e, t) => {
                e !== d && ((0, R.UT)(e), o({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, a.jsx)(
        i3,
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
