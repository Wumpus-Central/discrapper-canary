l.d(t, { default: () => aN });
var n,
    i,
    a,
    s = l(477900),
    r = l(582128),
    c = l.t(r, 2),
    o = l(503698),
    u = l.n(o),
    d = l(535185),
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
    b = l(570962),
    S = l(38145),
    C = l(773669),
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
var O = l(49491),
    M = l(429913),
    P = l(832163),
    _ = l(820847),
    w = l(862772),
    D = l(287809);
let V = r.createContext(void 0);
function U() {
    let e = r.useContext(V);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var F = l(109112),
    Y = l(761508),
    W = l(834730),
    B = l(858899),
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
function eu(e) {
    let { location: t } = e;
    return eo.useConfig({ location: t }).enabled;
}
var ed = l(695366),
    em = l(105292);
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
async function ey(e) {
    let t = e((0, eb.BF)());
    await eN.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var ek = l(652215);
function eR(e) {
    var t;
    let n,
        i,
        { className: a, activeTab: o } = e,
        { game: u, closeModal: d, trackAction: x } = U(),
        g = r.useRef(null),
        j = r.useRef(null),
        p = (0, en.A)({ id: u.id, label: em.intl.string(em.t.SHQGPj) }),
        v =
            ((t = u.id),
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
                      leadingAccessory: { type: "icon", icon: ed.E },
                  })),
        E = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, m.bG)([eC.default], () => eC.default.getId()),
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
                c = (0, eS.A)(),
                o = r.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...a].filter((e) => e instanceof eE.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eT.Vq).find((e) => t.has(e)) ?? null;
                }, [c, a, e]),
                u = r.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await ey((i) => {
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
                d = r.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await ey((l) =>
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
                let e = a.some((e) => e instanceof eE.R && e.applicationId === o);
                h.push(
                    (0, s.jsx)(
                        X.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? em.intl.formatToPlainString(em.t.Ktb1n8, { name: l })
                                : em.intl.formatToPlainString(em.t.Xp6iZt, { name: l }),
                            action: () => d(!e),
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
                        i = !n && null != l && (0, eb.uA)(l);
                    h.push(
                        (0, s.jsx)(
                            X.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: i ? em.intl.string(em.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !n),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(u),
        A = eu({ location: "GameProfileOverflowMenu" }),
        I = (0, m.bG)([P.A], () => P.A.getApplicationIdFromDetectableId(u.id)),
        N = (0, m.bG)([P.A], () => P.A.hasStorefrontForApplicationId(I), [I]),
        b = r.useCallback(() => {
            null != I && (0, ei.G)({ applicationId: I });
        }, [I]),
        S = r.useCallback(() => {
            null != I && (x(T.GameProfileTrackActionActions.GameShop), (0, ei.default)({ applicationId: I }), d());
        }, [I, x, d]),
        C = r.useCallback(() => d(!1), [d]),
        k = r.useCallback(() => {
            x(T.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${ek.BVt.GAME_PROFILE(u.id)}`;
            (0, es.C)(e, () => {
                (0, B.P0)({ text: em.intl.string(em.t["+5kSoW"]), variant: "success" });
            });
        }, [u.id, x]);
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            o === y.COMMERCE &&
                (0, s.jsx)(ea.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: d,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != E &&
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
                            children: (0, s.jsx)(X.rX, { children: E }),
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
                        onMouseDown: b,
                        onClick: S,
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
            (null != p || null != v) &&
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
                                children: [(0, s.jsx)(X.rX, { children: v }), (0, s.jsx)(X.rX, { children: p })],
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
                onClick: C,
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
function eO(e) {
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
function eM(e) {
    let { className: t, navigation: l } = e,
        { game: n } = U();
    return (n.communityGuildIds?.length ?? 0) < 3 ? null : (0, s.jsx)(eO, { className: t, navigation: l });
}
var eP = l(661531),
    e_ = l(331322),
    ew = l(278416),
    eD = l(478016),
    eV = l(900797),
    eU = l(847374),
    eF = l(421773),
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
        { storefront: o, selectedStorefrontPageIndex: u, selectStorefrontPage: d } = i,
        m = o?.pages ?? eB,
        x = r.useRef(null),
        { isHovered: h, setIsHovered: g, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, eF.A)(100, 100),
        v = em.intl.string(em.t["J3/JCl"]),
        E = r.useCallback(
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
        onRequestOpen: () => E(!0),
        onRequestClose: () => E(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, s.jsx)(H.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": v,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, s.jsx)(X.rX, {
                        children: m.map((e, t) => {
                            var l;
                            let n,
                                i = a === y.COMMERCE && t === u,
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
                                    action: () => d(t),
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
                o = r ? eV.t : eU.a;
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
        { game: n } = U(),
        { selectedTab: i, selectTab: a } = t,
        c = n.getIconURL(64),
        [o, u] = r.useState(null),
        d = r.useCallback(() => u(c), [c]),
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
                            ? (0, s.jsx)("img", { src: c, alt: "", className: eK.FC, draggable: !1, onError: d })
                            : (0, s.jsx)(F._, { size: "md" }),
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
                        (0, s.jsx)(eM, { className: eK.Mf, navigation: t }),
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
    e1 = l(309010),
    e8 = l(449054),
    e3 = l(60465),
    e2 = l(311043),
    e4 = l(636537),
    e6 = l(73153);
let e5 = {};
class e9 extends m.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eC.default);
    }
    getGuild(e) {
        return e5[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => e5[e]?.guild).filter(eT.Vq);
    }
    isFetching(e) {
        return e.some((e) => e5[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let l = e5[e];
            return (
                null == l ||
                "failed" === l.fetchState ||
                ("fetching" !== l.fetchState && (null == l.fetchedAt || t - l.fetchedAt >= 36e5))
            );
        });
    }
}
let e7 = new e9(e6.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e5[e] = { guild: e5[e]?.guild ?? null, fetchState: "fetching", fetchedAt: e5[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: l } = e,
                n = Date.now(),
                i = new Map(l.map((e) => [e.id, (0, e8.jE)(e)]));
            for (let e of t) e5[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: n };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e5[e] = { guild: e5[e]?.guild ?? null, fetchState: "failed", fetchedAt: e5[e]?.fetchedAt ?? null };
        },
    }),
    te = new Map();
async function tt(e) {
    e6.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await e4.Bo.get({
                url: ek.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            l = t.body?.guilds ?? [];
        e6.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: l });
    } catch (t) {
        throw (e6.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
    }
}
async function tl(e) {
    let t = e7.getStaleGuildIds(e),
        l = new Set();
    for (let t of e) {
        let e = te.get(t);
        null != e && l.add(e);
    }
    if (t.length > 0) {
        let e = tt(t).finally(() => {
            for (let l of t) te.get(l) === e && te.delete(l);
        });
        for (let l of t) te.set(l, e);
        l.add(e);
    }
    await Promise.all(l);
}
var tn = l(927813);
let ti = [];
function ta(e) {
    return e2.A.getGame(e)?.communityGuildIds ?? ti;
}
let ts = (0, m.UT)(e7, {
    getQueryId: (e) => (ta(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => e7.getGuilds(ta(e)),
    load: async (e) => {
        let t = ta(e);
        t.length > 0 && (await tl(t));
    },
    staleAfter: tn.A.Seconds.HOUR,
    failureStaleAfter: tn.A.Seconds.MINUTE,
});
var tr = l(297264),
    tc = l(37537),
    to = l(714991),
    tu = l(486020),
    td = l(240248);
function tm(e) {
    let { guildName: t, isMember: l, onClick: n, size: i, fullWidth: a } = e;
    return (0, s.jsx)(K.$, {
        variant: "secondary",
        size: i,
        fullWidth: a,
        text: l ? em.intl.string(em.t.cEnaWx) : em.intl.string(em.t.XpeFYr),
        "aria-label": l
            ? em.intl.formatToPlainString(em.t.lQqwQi, { guildName: t })
            : em.intl.formatToPlainString(em.t["8rL1QB"], { guildName: t }),
        onClick: n,
    });
}
var tx = l(810729);
let th = { sm: tx.nz, md: tx.a };
function tg(e) {
    let { className: t, width: l } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: u()(tx.qf, t), style: { width: l } });
}
function tf(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function tj(e) {
    let { className: t, size: l = "md" } = e;
    return (0, s.jsx)(tg, { className: u()(tx.x6, th[l], t) });
}
var tp = l(827085);
function tv(e) {
    let { className: t } = e;
    return (0, s.jsx)(tg, { className: u()(tp.qV, t) });
}
function tE(e) {
    let { presenceCount: t, memberCount: l } = e;
    return null == t && null == l
        ? null
        : (0, s.jsxs)("div", {
              className: tp.kL,
              children: [
                  null != t &&
                      (0, s.jsxs)("div", {
                          className: tp.U9,
                          children: [
                              (0, s.jsx)("i", { className: tp._o }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != l &&
                      (0, s.jsxs)("div", {
                          className: tp.U9,
                          children: [
                              (0, s.jsx)("i", { className: tp.jk }),
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
var tA = l(213098);
function tI() {
    return (0, s.jsxs)(tf, {
        className: tA.uW,
        animationDelayMs: 300,
        children: [
            (0, s.jsx)(tg, { className: tA.dU, width: "30%" }),
            (0, s.jsx)(tf, {
                className: tA.nV,
                children: (0, s.jsxs)("div", { className: tA.hQ, children: [(0, s.jsx)(tN, {}), (0, s.jsx)(tj, {})] }),
            }),
        ],
    });
}
function tN() {
    return (0, s.jsxs)("div", {
        className: tA.To,
        children: [
            (0, s.jsx)(tg, { className: tA.QV }),
            (0, s.jsxs)("div", {
                className: tA.Yv,
                children: [
                    (0, s.jsx)(tg, { className: tA.Ag }),
                    (0, s.jsx)(tg, { className: tA.zl }),
                    (0, s.jsx)(tv, { className: tA.P2 }),
                ],
            }),
        ],
    });
}
function tb(e) {
    let { guild: t } = e,
        l = tu.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = r.useState(void 0),
        a = null != l && n !== l,
        c = r.useCallback(() => {
            i(l);
        }, [l]);
    return (0, s.jsxs)("div", {
        className: tA._C,
        children: [
            a && (0, s.jsx)(tg, { className: tA.EQ }),
            (0, s.jsx)("img", {
                className: tA.$f,
                src: l,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tS(e) {
    let { guild: t, presenceCount: l, memberCount: n } = e;
    return (0, s.jsxs)("div", {
        className: tA.To,
        children: [
            (0, s.jsx)(tb, { guild: t }),
            (0, s.jsxs)("div", {
                className: tA.yj,
                children: [
                    (0, s.jsxs)("div", {
                        className: tA.YS,
                        children: [
                            (0, s.jsx)(to.A, { guild: t, size: 16 }),
                            (0, s.jsx)(tr.D, {
                                className: tA.J5,
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, td.uJ)(t.description) &&
                        (0, s.jsx)(W.E, {
                            className: tA.h_,
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, s.jsx)(tE, { presenceCount: l, memberCount: n }),
                ],
            }),
        ],
    });
}
function tC(e) {
    let { guild: t, presenceCount: l, memberCount: n, button: i, className: a } = e;
    return (0, s.jsx)("div", {
        className: u()(tA.kL, a),
        children: (0, s.jsxs)("div", {
            className: tA.hQ,
            children: [(0, s.jsx)(tS, { guild: t, presenceCount: l, memberCount: n }), i],
        }),
    });
}
function tT() {
    let e = (0, tc.c)("GameProfileGuildInvite"),
        {
            invite: t,
            hasDiscordWebsite: l,
            isCommunityInviteResolving: n,
            isMember: i,
            closeModal: a,
            trackAction: c,
        } = U(),
        o = r.useCallback(() => {
            null != t &&
                (c(T.GameProfileTrackActionActions.JoinServer),
                a(),
                e6.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: ek.BRT.APP }));
        }, [t, c, a]);
    return null == t || null == t.guild
        ? l && n
            ? (0, s.jsx)(tI, {})
            : null
        : (0, s.jsxs)("div", {
              className: tA.uW,
              children: [
                  (0, s.jsx)(tr.D, {
                      className: tA.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, s.jsx)(tC, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      button: (0, s.jsx)(tm, { guildName: t.guild.name, isMember: i, onClick: o, fullWidth: !0 }),
                  }),
              ],
          });
}
var ty = l(320448),
    tk = l(152594);
function tR(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, s.jsxs)("div", {
        className: tk.kL,
        "aria-busy": !0,
        children: [
            (0, s.jsxs)("div", {
                className: tk.wR,
                children: [(0, s.jsx)(tg, { className: tk.Iz, width: l }), n && (0, s.jsx)(tj, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tL(e) {
    let { children: t, title: l, onClickViewAll: n, trailing: i } = e;
    return (0, s.jsxs)("div", {
        className: tk.kL,
        children: [
            (0, s.jsxs)("div", {
                className: tk.wR,
                children: [
                    (0, s.jsx)(tr.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, s.jsx)(K.$, {
                            size: "sm",
                            icon: ty._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: em.intl.string(em.t.budhsM),
                        }),
                    i,
                ],
            }),
            t,
        ],
    });
}
var tG = l(196765),
    tO = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tM = (0, tG.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tP = l(876798),
    t_ = l(481901),
    tw = l(916099),
    tD = l(461353);
function tV() {
    let { layout: e, setLayout: t } = tM(),
        l = em.intl.string(em.t.VGRZh7),
        n = em.intl.string(em.t["NJFr+g"]);
    return (0, s.jsxs)("div", {
        className: tD.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, s.jsx)($.m, {
                text: l,
                asContainer: !0,
                children: (0, s.jsx)(tP.k, {
                    icon: t_.d,
                    pressed: e === tO.GRID,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tO.GRID),
                }),
            }),
            (0, s.jsx)($.m, {
                text: n,
                asContainer: !0,
                children: (0, s.jsx)(tP.k, {
                    icon: tw.ListBulletsIcon,
                    pressed: e === tO.LIST,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tO.LIST),
                }),
            }),
        ],
    });
}
var tU = l(939249),
    tF = l(762841);
function tY(e) {
    let { className: t, ariaLabel: l, onClick: n, children: i } = e;
    return (0, s.jsx)(tU.D, { className: u()(tF.v, t), onClick: n, "aria-label": l, children: i });
}
var tW = l(759020);
function tB(e) {
    let { guild: t, presenceCount: l, memberCount: n, ariaLabel: i, onClick: a } = e;
    return (0, s.jsxs)(tY, {
        className: tW.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, s.jsxs)("div", {
                className: tW.OA,
                children: [
                    (0, s.jsx)(tb, { guild: t }),
                    (0, s.jsxs)("div", {
                        className: tW.FS,
                        children: [
                            (0, s.jsxs)("div", {
                                className: tW.YS,
                                children: [
                                    (0, s.jsx)(to.A, { guild: t, size: 16 }),
                                    (0, s.jsx)(tr.D, {
                                        className: tW.J5,
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, td.uJ)(t.description) &&
                                (0, s.jsx)(W.E, {
                                    className: tW.h_,
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: tW.Rn, children: (0, s.jsx)(tE, { presenceCount: l, memberCount: n }) }),
        ],
    });
}
var tz = l(620387);
function tH(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsx)(tf, { className: tz.s7, animationDelayMs: t, children: (0, s.jsx)(tN, {}) });
}
function tX(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(tf, {
        className: tz.fv,
        animationDelayMs: t,
        children: [
            (0, s.jsx)(tg, { className: tz.VR }),
            (0, s.jsxs)("div", {
                className: tz.hG,
                children: [
                    (0, s.jsx)(tg, { className: tz.t_ }),
                    (0, s.jsx)(tg, { className: tz.Aj }),
                    (0, s.jsx)(tg, { className: tz.ax }),
                ],
            }),
            (0, s.jsx)(tg, { className: tz.Ah }),
        ],
    });
}
function tK(e) {
    let { guild: t, presenceCount: l, memberCount: n, ariaLabel: i, onClick: a } = e;
    return (0, s.jsx)(tY, {
        className: tz.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, s.jsx)(tS, { guild: t, presenceCount: l, memberCount: n }),
    });
}
function tJ(e) {
    let { guild: t, layout: l } = e,
        { game: n, closeModal: i, trackAction: a, viewId: c } = U(),
        o = (0, m.bG)([e0.A], () => e0.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = r.useCallback(async () => {
            (a(T.GameProfileTrackActionActions.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await e8.Z2(t.id, {}, { joinSource: ek.Q4z.GAME_PROFILE_COMMUNITIES, loadId: c }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, eZ._)(e);
                return;
            }
            let e = e1.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                e3.default.setGameProfilePendingReturn({
                    gameId: n.id,
                    channelId: e,
                    tab: y.COMMUNITIES,
                    source: T.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, c, n.id]),
        d = l === tO.LIST ? tB : tK;
    return (0, s.jsx)(d, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        ariaLabel: o
            ? em.intl.formatToPlainString(em.t.AEfs1D, { guildName: t.name })
            : em.intl.formatToPlainString(em.t.TUZ50q, { guildName: t.name }),
        onClick: u,
    });
}
function t$() {
    let { game: e } = U(),
        { data: t, isLoading: l } = ts(e.id),
        n = tM((e) => e.layout),
        i = n === tO.LIST,
        a = i ? tX : tH,
        r = l && (null == t || 0 === t.length);
    return (0, s.jsxs)(eq.Ch, {
        className: tz.XG,
        children: [
            (0, s.jsx)("div", { className: tz.xY, "aria-hidden": !0 }),
            (0, s.jsx)("div", {
                className: tz.uW,
                children: (0, s.jsx)(tL, {
                    title: em.intl.string(em.t.r6bvTh),
                    trailing: (0, s.jsx)(tV, {}),
                    children: (0, s.jsx)("div", {
                        className: i ? tz.p_ : tz.Vg,
                        children: r
                            ? eQ()
                                  .range(8)
                                  .map((e) => (0, s.jsx)(a, { animationDelayMs: 150 * e }, e))
                            : (t ?? []).map((e) => (0, s.jsx)(tJ, { guild: e, layout: n }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var tQ = l(707554),
    tq = l(369606),
    tZ = l(775602),
    t0 = l(21161),
    t1 = l(400492),
    t8 = l(541830),
    t3 = l(459746);
let t2 = "1552821538409939044";
var t4 = l(175213);
let t6 = l(892799);
function t5(e) {
    let { ref: t } = e,
        { game: l } = U(),
        n = (function (e) {
            let [t] = r.useState(() => Math.random());
            return r.useMemo(() => {
                let l = e.getBannerURL(1400);
                if (null != l) return l;
                let n = e.screenshotUrls?.length ?? 0;
                return 0 === n ? null : e.getScreenshotURL(Math.floor(t * n), 1400);
            }, [1400, e, t]);
        })(l);
    return (0, td.uJ)(n)
        ? null
        : (0, s.jsxs)("div", {
              ref: t,
              children: [
                  (0, s.jsx)("div", { className: t4.y1, style: { backgroundImage: `url("${n}")` } }),
                  (0, s.jsx)("div", { className: t4.N4 }),
              ],
          });
}
function t9() {
    let { game: e } = U(),
        t = (e.genres ?? []).map(t8.du).join(", ");
    return (0, td.uJ)(t) ? null : (0, s.jsx)(W.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function t7(e) {
    let { rank: t } = e;
    return (0, s.jsxs)("div", {
        className: t4.Qc,
        children: [
            (0, s.jsx)(tq.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, s.jsx)(W.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function le() {
    let { game: e } = U();
    return (0, s.jsx)(lt, { className: u()(t4._M, (0, t3.cO)(e) && t4.i3), imageClassName: t4.xe });
}
function lt(e) {
    let { className: t, imageClassName: l } = e,
        { game: n } = U(),
        i = (0, s.jsx)(t3.Ay, { game: n, className: l, size: t3.wu.LARGE });
    return n.id !== t2
        ? (0, s.jsx)("div", { className: t, children: i })
        : (0, s.jsx)(ll, { className: t, children: i });
}
function ll(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = r.useContext(t0.x),
        i = (0, m.bG)([tZ.Ay], () => tZ.Ay.useReducedMotion),
        a = r.useRef({ count: 0, lastTime: 0 });
    return (0, s.jsx)(tU.D, {
        className: u()(l, t4.b3),
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
                (0, t1.Ak)("discodo");
            }
        },
        children: t,
    });
}
let ln = function () {
    let { game: e, isTwoColumn: t } = U(),
        l = e.name;
    return (0, s.jsxs)("div", {
        className: t4.ap,
        children: [
            t && (0, s.jsx)(lt, { className: u()(t4.Tf, (0, t3.cO)(e) && t4.wS), imageClassName: t4.w$ }),
            (0, s.jsxs)("div", {
                className: t4.lu,
                children: [
                    null != e.l30Rank && (0, s.jsx)(t7, { rank: e.l30Rank }),
                    (0, s.jsxs)("div", {
                        className: t4.$,
                        children: [
                            (0, s.jsx)(tr.D, { variant: "heading-xxl/semibold", children: l }),
                            e.id === t2 &&
                                (0, s.jsx)("img", {
                                    src: t6,
                                    className: t4.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, s.jsx)(t9, {}),
                ],
            }),
        ],
    });
};
var li = l(638495),
    la = l(871123),
    ls = l(439303),
    lr = l(317560),
    lc = l(467884),
    lo = l(480713),
    lu = l(449543),
    ld = l(197935),
    lm = l(761812);
function lx(e) {
    return e;
}
function lh(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: lm.B, children: t });
}
function lg(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, lo.l)("social_layer_storefront_card_row"),
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
          ? (0, s.jsx)(ld.A, {
                gap: "md",
                "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
                items: t,
                getItemKey: lx,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, s.jsx)(lh, {
                        children: (0, s.jsx)(lc.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: lc.s6.SMALL,
                            analyticsLocations: l,
                            onClick: a,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, s.jsx)(lu.A, {
                gap: "md",
                "aria-label": em.intl.string(em.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, s.jsx)(
                        lh,
                        {
                            children: (0, s.jsx)(lc.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: lc.s6.SMALL,
                                analyticsLocations: l,
                                onClick: a,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var lf = l(369435);
function lj(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: u()(lf.n, { [lf.C]: 16 === l }), children: t });
}
var lp = l(936785),
    lv = l(403581),
    lE = l(812095),
    lA = l(647474),
    lI = l(162536);
function lN(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eY.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        a = i ? lv.t : t.Icon;
    return (0, s.jsx)(lA.A, {
        className: u()(lI.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, s.jsxs)("div", {
            className: lI.Qs,
            children: [
                null != a && (0, s.jsx)(a, { size: "xs", color: "currentColor", className: lI.Kk }),
                (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "currentColor", children: (0, lE.U)(t.text) }),
            ],
        }),
    });
}
var lb = l(521058);
function lS() {
    let { storefrontPromotion: e } = U();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, td.uJ)(a.headerText)) return null;
    let r = {
        Icon: (0, lp.LZ)(n?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, lp.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, s.jsx)(lN, { className: lb.v, promotion: r });
}
let lC = [0, 1, 2, 3],
    lT = { placement: ls.Ye.GAME_PROFILE };
function ly() {
    return (0, s.jsx)(tR, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, s.jsx)(lj, { children: lC.map((e) => (0, s.jsx)(lh, { children: (0, s.jsx)(lc.yf, {}) }, e)) }),
    });
}
function lk(e) {
    let { selectTab: t } = e,
        l = (0, li.k)(),
        {
            trackAction: n,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: a,
            hasCommerceTab: c,
            closeModal: o,
        } = U(),
        { analyticsLocations: u } = (0, j.Ay)([f.A.GAME_PROFILE]),
        d = r.useCallback(() => {
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
                    (0, lr.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, la.rG)(e, l, t, a) && o();
                        },
                    }));
            },
            [n, o, u, i, l],
        );
    if (a) return (0, s.jsx)(ly, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, s.jsxs)(tL, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, s.jsx)(lS, {}),
            (0, s.jsx)(ls.E9, {
                newValue: lT,
                children: (0, s.jsx)(lg, { skuIds: x, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var lR = l(621466),
    lL = l(966697),
    lG = l(346055),
    lO = l(460905),
    lM = l(776231),
    lP = l(46054),
    l_ = l(58703),
    lw = l(317097),
    lD = l(155718),
    lV = l(387408),
    lU = l(731068),
    lF = l(59318),
    lY = l(320095),
    lW = l(708676),
    lB = l(383233),
    lz = l(998218);
let lH = /^#{1,3}\s+(.+)$/,
    lX = /^https?:\/\/\S+$/;
var lK = l(158390),
    lJ = l(103348),
    l$ = l(371794);
let lQ = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function lq(e) {
    e6.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, l$.aP)({
                    url: ek.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: C.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(lJ.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (e6.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            e6.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        e6.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function lZ(e) {
    let t = ((await e4.Bo.get({ url: ek.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !lQ.has(t),
    );
    e6.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let l0 = (0, m.UT)(k.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => k.A.getSimilarGames(e) ?? null,
    load: (e) => lZ(e),
    retryConfig: { backoff: () => new lK.A(5 * tn.A.Millis.SECOND, 5 * tn.A.Millis.MINUTE) },
    failureStaleAfter: tn.A.Seconds.MINUTE,
});
async function l1(e, t) {
    e6.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await e4.Bo.get({ url: ek.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        e6.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, lV.A)((0, lY.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, lB._c)(e))
                            return e.components
                                .filter((e) => e.type === lD.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || lX.test(t.trim())
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
                        if ((0, lB._c)(e)) {
                            let t = e.components.find((e) => e.type === lD.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, lU.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, lF.tT)(e.content_type));
                        if (null != t) return (0, lU.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, lF.XB)(e.content_type));
                        if (null != l) return (0, lU.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, lU.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, lU.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, lU.oU)(
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
                        (l = (-1 === t ? a : a.slice(0, t)).match(lH)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, lB._c)(n)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let l = t.author?.name,
                                      n = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = null != t.color ? (0, lw.$k)(t.color, !0) : void 0;
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
                    embedSource: u,
                    poll: n.poll,
                };
            }),
            channelId: n.channel_id ?? void 0,
            guildId: n.guild_id ?? void 0,
        });
    } catch (t) {
        e6.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var l8 = l(284009),
    l3 = l.n(l8),
    l2 = l(376728),
    l4 = l(976860);
async function l6(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    l3()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = e0.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(ek.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e8.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: ek.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await l2.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, l4.pX)(ek.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var l5 = l(806244),
    l9 = l(165648);
function l7(e, t) {
    return lP.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function ne(e) {
    return e.id;
}
function nt() {
    return (0, s.jsxs)(tf, {
        className: l5.s7,
        children: [
            (0, s.jsx)(tg, { className: l5.o$ }),
            (0, s.jsxs)("div", {
                className: l5.UF,
                children: [(0, s.jsx)(tg, { className: l5.iX }), (0, s.jsx)(tg, { className: l5.jt })],
            }),
        ],
    });
}
function nl(e, t) {
    var l;
    let n,
        i = (0, lM.kr)(364 * (0, lM.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = lz.A.toURLSafe(e))
            ? null
            : (n.searchParams.append("format", "webp"),
              null != i && n.searchParams.append("width", i.toString()),
              null != l && n.searchParams.append("height", l.toString()),
              n.toString())) ?? e
    );
}
function nn(e) {
    let { message: t, src: l, aspectRatio: n } = e,
        [i, a] = r.useState(!1),
        c = r.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, s.jsx)(lL.y, {
              readyState: i ? ek.Rv1.READY : ek.Rv1.LOADING,
              aspectRatio: n,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, s.jsx)("img", {
                  src: l,
                  className: l5.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function ni(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lR.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lR.vq)(e.target, HTMLSpanElement) && (0, lR.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? nl(o, c) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, s.jsx)(tU.D, {
              ...i,
              className: l5.Nr,
              onClick: a,
              children: (0, s.jsxs)(lG.M, {
                  className: l5.zI,
                  children: [
                      null != m.url &&
                          (0, s.jsx)(W.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: l5.Ow,
                              children: m.url,
                          }),
                      (0, s.jsxs)("div", {
                          className: l5._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, s.jsxs)("div", {
                                      className: l5.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, s.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: l5.SG,
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
                                  null != d &&
                                  (0, s.jsx)("div", {
                                      className: l5.ax,
                                      children: (0, s.jsx)(nn, { message: t, src: d, aspectRatio: c }),
                                  }),
                              null != t.title &&
                                  (0, s.jsx)(tr.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: l5.DD,
                                      children: l7(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, s.jsxs)("div", {
                                      className: u()(l5.h_, l9.PT),
                                      children: [l7(t.body, l), (0, s.jsx)("div", { className: l5.fm })],
                                  }),
                              (0, s.jsxs)("div", {
                                  className: l5.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, s.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: l5.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, s.jsxs)(W.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, l_.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, s.jsxs)("div", {
                                              className: l5.a5,
                                              children: [
                                                  (0, s.jsx)(lO.n, { size: "xs", color: "currentColor" }),
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
let na = r.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, s.jsxs)(lG.M, {
        className: l5.zI,
        children: [
            null != t.title &&
                (0, s.jsx)(tr.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l5.DD,
                    children: l7(t.title, l),
                }),
            t.body.length > 0 &&
                (0, s.jsxs)("div", {
                    className: u()(l5.h_, l9.PT),
                    children: [l7(t.body, l), (0, s.jsx)("div", { className: l5.fm })],
                }),
            (0, s.jsxs)("div", {
                className: l5.ov,
                children: [
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, l_.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, s.jsxs)("div", {
                            className: l5.a5,
                            children: [
                                (0, s.jsx)(lO.n, { size: "xs", color: "currentColor" }),
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
function ns(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lR.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lR.vq)(e.target, HTMLSpanElement) && (0, lR.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? nl(o, c) : void 0;
    return (0, s.jsxs)(tU.D, {
        ...i,
        className: l5.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, s.jsx)("div", {
                    className: l5.Vl,
                    children: (0, s.jsx)(nn, { message: t, src: u, aspectRatio: c }),
                }),
            (0, s.jsx)(na, { message: t, channelId: l }),
        ],
    });
}
function nr(e) {
    let { message: t, onCardClick: l, listItemProps: n } = e,
        { poll: i } = t,
        a = r.useCallback(() => l(t.id), [l, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, s.jsx)(tU.D, {
        ...n,
        className: l5.Nr,
        onClick: a,
        children: (0, s.jsxs)(lG.M, {
            className: l5.zI,
            children: [
                (0, s.jsx)(tr.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l5.MH,
                    children: i.question.text,
                }),
                (0, s.jsxs)("div", {
                    className: l5.xd,
                    children: [
                        c.map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: l5.Nf,
                                    children: (0, s.jsx)(W.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: l5.TT,
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
                                className: l5.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: l5.ov,
                    children: (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, lW.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function nc(e) {
    return null != e.message.poll
        ? (0, s.jsx)(nr, { ...e })
        : null != e.message.embedSource
          ? (0, s.jsx)(ni, { ...e })
          : (0, s.jsx)(ns, { ...e });
}
let no = r.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: l } = (0, j.Ay)(),
        { game: n, invite: i, hasDiscordWebsite: a, closeModal: c, trackAction: o } = U(),
        u = n.id,
        {
            messages: d,
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
                    null == e || l || k.A.isAnnouncementsFetching(e) || l1(e, { limit: 8 });
                }, [e, l, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n, hasFetched: l }
            );
        })(u),
        p = (0, lo.l)("game_profile_announcements"),
        v = r.useCallback(() => {
            let e = i?.guild?.id ?? x;
            null != e &&
                null != h &&
                (o(T.GameProfileTrackActionActions.Announcements),
                e3.default.setGameProfilePendingReturn({ gameId: u, channelId: h, initialScrollOffset: t() }),
                c(),
                l6({ invite: i, guildId: e, channelId: h, analyticsLocationStack: l }));
        }, [o, c, t, i, x, h, l, u]),
        E = r.useCallback(
            (e) => {
                let n = i?.guild?.id ?? x;
                null != n &&
                    null != h &&
                    (o(T.GameProfileTrackActionActions.AnnouncementsItem),
                    e3.default.setGameProfilePendingReturn({ gameId: u, channelId: h, initialScrollOffset: t() }),
                    c(),
                    l6({ invite: i, guildId: n, channelId: h, messageId: e, analyticsLocationStack: l }));
            },
            [o, c, t, i, x, h, l, u],
        ),
        A = null != h && d.length > 0;
    return (!f || g) && a
        ? (0, s.jsx)(tR, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, s.jsx)(lj, {
                  gap: 16,
                  children: eQ()
                      .range(3)
                      .map((e) => (0, s.jsx)(nt, {}, e)),
              }),
          })
        : A
          ? (0, s.jsx)(tL, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: v,
                children: p
                    ? (0, s.jsx)(ld.A, {
                          gap: 16,
                          items: d,
                          getItemKey: ne,
                          itemClassName: l5.hu,
                          renderItem: (e, t) =>
                              (0, s.jsx)(nc, { message: e, channelId: h, onCardClick: E, listItemProps: t }, e.id),
                      })
                    : (0, s.jsx)(lu.A, {
                          gap: 16,
                          children: d.map((e) => (0, s.jsx)(nc, { message: e, channelId: h, onCardClick: E }, e.id)),
                      }),
            })
          : null;
});
var nu = l(28863),
    nd = l(975807),
    nm = l(194362);
function nx() {
    let { game: e, trackAction: t } = U(),
        l = r.useCallback(async () => {
            t(T.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, nm.a)(ek.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, nd.A)(e);
        }, [t]),
        n = r.useCallback((e) => (0, s.jsx)(nu.Anchor, { onClick: l, children: e }), [l]);
    return e.linkedApplications?.some((e) => e.type === lD.Mh.OFFICIAL)
        ? null
        : (0, s.jsx)(W.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: n }),
          });
}
var nh = l(505779),
    ng = l(998445),
    nf = l(274997),
    nj = l(80500),
    np = l(319745),
    nv = l(488225),
    nE = l(967492),
    nA = l(72265),
    nI = l(454346),
    nN = l(37948),
    nb = l(693558);
let nS = { size: "xs", colorClass: nb.w };
function nC(e) {
    let { website: t } = e,
        { trackAction: l } = U(),
        n = (0, nN.A)(),
        {
            action: i,
            icon: a,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case nh.V.OFFICIAL:
                    return {
                        icon: (0, s.jsx)(ng.GlobeEarthIcon, { ...t }),
                        action: T.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case nh.V.TWITTER:
                    return {
                        icon: (0, s.jsx)(nf.p, { ...t }),
                        action: T.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case nh.V.YOUTUBE:
                    return {
                        action: T.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, s.jsx)(nj.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case nh.V.FACEBOOK:
                    return {
                        icon: (0, s.jsx)(np.Z, { ...t }),
                        action: T.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case nh.V.INSTAGRAM:
                    return {
                        icon: (0, s.jsx)(nv.L, { ...t }),
                        action: T.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case nh.V.BLUESKY:
                    return {
                        icon: (0, s.jsx)(nE.a, { ...t }),
                        action: T.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case nh.V.REDDIT:
                    return {
                        icon: (0, s.jsx)(nA.T, { ...t }),
                        action: T.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case nh.V.TWITCH:
                    return {
                        icon: (0, s.jsx)(nI.a, { ...t }),
                        action: T.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, nS),
        o = r.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, s.jsx)($.m, {
        text: c,
        children: (0, s.jsx)(tU.D, { onClick: o, className: nb.y, title: c, children: a }),
    });
}
var nT = l(808380),
    ny = l(31300),
    nk = l(802516),
    nR = l(22363),
    nL = l(418524);
function nG(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case nT.Y.DESKTOP:
            return (0, s.jsx)(ny.k, { size: "xs", ...l });
        case nT.Y.XBOX:
            return (0, s.jsx)(nk.Y, { size: "xs", ...l });
        case nT.Y.PLAYSTATION:
            return (0, s.jsx)(nR.X, { size: "xs", ...l });
        case nT.Y.NINTENDO:
            return (0, s.jsx)(nL.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function nO(e) {
    let { platform: t } = e;
    return (0, s.jsx)(
        $.m,
        {
            text: (function (e) {
                switch (e) {
                    case nT.Y.DESKTOP:
                        return em.intl.string(em.t.KT6uCJ);
                    case nT.Y.XBOX:
                        return em.intl.string(em.t.DDWUJp);
                    case nT.Y.PLAYSTATION:
                        return em.intl.string(em.t.fzMz2s);
                    case nT.Y.NINTENDO:
                        return em.intl.string(em.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, s.jsx)(nG, { platform: t }),
        },
        t,
    );
}
let nM = [nT.Y.DESKTOP, nT.Y.XBOX, nT.Y.PLAYSTATION, nT.Y.NINTENDO];
var nP = l(424994),
    n_ = l(623828);
function nw() {
    return (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let nD = function () {
    let { game: e } = U(),
        t = (0, tc.c)("GameProfileGameDetails"),
        l = r.useMemo(() => e.genres.map(t8.du).join(", "), [e]),
        n = e.getCompanyByRole(lD.wk.PUBLISHER),
        i = e.getCompanyByRole(lD.wk.DEVELOPER),
        a = n.map((e) => e.name).join(", "),
        c = i.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        u = r.useMemo(() => {
            let t = new Set(e.platforms),
                l = [...t];
            return (
                !t.has(nT.Y.DESKTOP) && (t.has(nT.Y.MACOS) || t.has(nT.Y.LINUX)) && l.push(nT.Y.DESKTOP),
                l.filter((e) => nM.includes(e)).sort((e, t) => nM.indexOf(e) - nM.indexOf(t))
            );
        }, [e.platforms]),
        d = (e?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return nh.p.includes(t);
            })
            .sort((e, t) => nh.p.indexOf(e.category) - nh.p.indexOf(t.category)),
        m = !(0, td.uJ)(l),
        x = !(0, td.uJ)(a),
        h = !(0, td.uJ)(c),
        g = !(0, td.uJ)(o),
        f = u.length > 0,
        j = d.length > 0 && !d.every((e) => (0, td.uJ)(e.url));
    return (0, s.jsxs)("div", {
        className: n_.uW,
        children: [
            (0, s.jsx)("div", {
                className: n_.Gf,
                children: (0, s.jsx)(tr.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: n_.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: n_.J1,
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
                                      className: n_.Gu,
                                      children: l,
                                  })
                                : (0, s.jsx)(nw, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n_.J1,
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
                                      className: n_.Gu,
                                      children: a,
                                  })
                                : (0, s.jsx)(nw, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n_.J1,
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
                                      className: n_.Gu,
                                      children: c,
                                  })
                                : (0, s.jsx)(nw, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n_.J1,
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
                                      className: n_.Gu,
                                      children: l_.i$(new Date(o), "LL"),
                                  })
                                : (0, s.jsx)(nw, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n_.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            f
                                ? (0, s.jsx)("div", {
                                      className: n_.Gu,
                                      children: u.map((e) => (0, s.jsx)(nO, { platform: e }, e)),
                                  })
                                : (0, s.jsx)(nw, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n_.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, s.jsx)("div", {
                                      className: n_.Gu,
                                      children: d.map((e) => (0, s.jsx)(nC, { website: e }, e.url)),
                                  })
                                : (0, s.jsx)(nw, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n_.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: n_.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: nP.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: n_.OQ, children: (0, s.jsx)(nx, {}) }),
        ],
    });
};
var nV = l(141628),
    nU = l(289363),
    nF = l(793919);
function nY() {
    return (0, s.jsxs)("div", {
        "aria-hidden": !0,
        className: nF.uW,
        children: [
            (0, s.jsx)(tg, { className: nF.dU, width: "30%" }),
            (0, s.jsxs)(tf, {
                className: nF.nV,
                children: [
                    (0, s.jsx)("div", { className: nF.sB, children: (0, s.jsx)(nU.default, { isLoading: !0 }) }),
                    (0, s.jsxs)("div", {
                        className: nF.hQ,
                        children: [
                            (0, s.jsxs)("div", {
                                className: nF.Yv,
                                children: [(0, s.jsx)(tg, { width: "55%" }), (0, s.jsx)(tg, { width: "85%" })],
                            }),
                            (0, s.jsx)(tj, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nW(e) {
    let { analyticsLocations: t } = e,
        l = (0, tc.c)("GameProfileLinkAccount"),
        {
            trackAction: n,
            fetchedAuthorization: i,
            hasAlreadyLinked: a,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: u,
            hasOfficialApplication: d,
            officialApplicationFetchFailed: x,
        } = U(),
        h = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        g = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !d || x || null == h
        ? null
        : null == u || (c && !i)
          ? (0, s.jsx)(nY, {})
          : !c || a
            ? null
            : (0, s.jsxs)("div", {
                  className: nF.uW,
                  children: [
                      (0, s.jsx)(tr.D, {
                          className: nF.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, s.jsxs)("div", {
                          className: nF.kL,
                          children: [
                              (0, s.jsx)("div", {
                                  className: nF.sB,
                                  children: (0, s.jsx)(nU.default, { application: u }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: nF.hQ,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: nF.FS,
                                          children: [
                                              (0, s.jsx)(tr.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: u.name,
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
                                          icon: nV.A,
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
var nB = l(635377),
    nz = l.n(nB),
    nH = l(80687),
    nX = l(534573),
    nK = l(248643),
    nJ = l(256905),
    n$ = l(684519),
    nQ = l(191096),
    nq = l(90721),
    nZ = l(140128);
function n0(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function n1(e, t) {
    return (0, nX.Ec)(e, { size: t, keepAspectRatio: !0, format: tu.QB ? "webp" : null });
}
let n8 = new (nz())({ max: 100 }),
    n3 = r.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, a] = r.useState(null),
            c = null != i && i.url === t ? i.isPortrait : (n8.get(t) ?? !1),
            o = r.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (n8.set(t, l),
                        a((e) => (null != e && e.url === t && e.isPortrait === l ? e : { url: t, isPortrait: l })));
                },
                [t],
            ),
            d = r.useCallback((e) => o(e.currentTarget), [o]);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("img", {
                    ref: o,
                    src: n1(t, 106),
                    className: u()(nZ.r4, !c && nZ.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, s.jsx)("img", { ref: o, src: n1(t, 900), className: u()(nZ.c8, c && nZ.D7, n), alt: l, onLoad: d }),
            ],
        });
    }),
    n2 = r.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: a, onSelect: c, gameName: o, listItemProps: d } = e,
            m = r.useCallback(() => c(n), [c, n]),
            x = d?.tabIndex;
        return (0, s.jsx)(tU.D, {
            ...d,
            className: u()(nZ.JS, i && nZ.Y4),
            onClick: m,
            children: (0, s.jsxs)("div", {
                className: nZ.ub,
                children: [
                    (0, s.jsx)("img", {
                        src: n1("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nZ.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: o }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, s.jsx)("div", {
                            className: nZ.UZ,
                            children: (0, s.jsx)(nH.D, { playing: i && a, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    n4 = r.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                autoPlay: n,
                videoRef: i,
                mediaPlayerRef: a,
                onPlay: c,
                onPause: o,
                onFullscreenChange: u,
            } = e,
            d = r.useRef(null);
        return (
            (0, nq.A)({ videoRef: i, canvasRef: d, enabled: !l }),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    !l && (0, s.jsx)("canvas", { ref: d, className: nZ.HW, "aria-hidden": "true" }),
                    (0, s.jsx)("div", {
                        className: nZ.tN,
                        children: (0, s.jsx)(nK.A, {
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
                            renderLinkComponent: n$.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: nZ.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function n6() {
    let { game: e, trackAction: t } = U(),
        [l, n] = r.useState(0),
        [i, a] = r.useState(null),
        [c, o] = r.useState(e.screenshotUrls),
        u = r.useRef(null),
        d = r.useRef(null),
        x = (0, m.bG)([tZ.Ay], () => tZ.Ay.useReducedMotion),
        { obscured: h } = (0, nQ.I3)(),
        g = (0, lo.l)("game_profile_media");
    c !== e.screenshotUrls && (o(e.screenshotUrls), n(0));
    let f = r.useMemo(
            () => [
                ...(e.trailers ?? []).map((e) => {
                    let t = (0, l$.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, l$.YE)(e.application_id, e.id, e.width, "webp"),
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
        b = r.useRef(null),
        S = r.useCallback(() => {
            t(E ? T.GameProfileTrackActionActions.ClickTrailer : T.GameProfileTrackActionActions.ClickImage);
            let e = u.current,
                l = b.current,
                i = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            l?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === p;
                    return { ...e, autoPlay: !!l && i, autoMute: !l || a, initialTimeSec: l ? s : void 0, videoRef: d };
                }
                return e;
            });
            (0, nJ.R)({
                items: r,
                startingIndex: p,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: n,
                onClose: () => {
                    let e = d.current,
                        t = b.current,
                        l = null != e ? !e.paused : i;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        N(l));
                },
            });
        }, [t, f, p, E]),
        C = r.useCallback(() => N(!0), []),
        y = r.useCallback(() => N(!1), []),
        k = r.useCallback(() => a(null), []),
        R = r.useCallback(
            (e) => {
                e && S();
            },
            [S],
        );
    return 0 === f.length
        ? null
        : (0, s.jsxs)("div", {
              className: nZ.kL,
              children: [
                  E
                      ? (0, s.jsx)("div", {
                            className: nZ.ND,
                            children: (0, s.jsx)(
                                n4,
                                {
                                    item: v,
                                    reducedMotion: x,
                                    autoPlay: !x && !h,
                                    videoRef: u,
                                    mediaPlayerRef: b,
                                    onPlay: C,
                                    onPause: y,
                                    onFullscreenChange: R,
                                },
                                `${p}-${v.url}`,
                            ),
                        })
                      : (0, s.jsxs)("div", {
                            className: nZ.wp,
                            children: [
                                null != i &&
                                    !x &&
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: nZ.Jy,
                                            onAnimationEnd: k,
                                            children: (0, s.jsx)(n3, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, s.jsx)("div", { className: nZ.QN }),
                                (0, s.jsx)(tU.D, {
                                    className: nZ.gv,
                                    onClick: S,
                                    children: (0, s.jsx)("div", {
                                        className: nZ.cs,
                                        children: (0, s.jsx)(
                                            n3,
                                            {
                                                url: v.url,
                                                className: nZ.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  g
                      ? (0, s.jsx)(ld.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: j,
                            getItemKey: n0,
                            renderItem: (t, l) => {
                                let { item: n, index: i } = t;
                                return (0, s.jsx)(
                                    n2,
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
                      : (0, s.jsx)(lu.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: f.map((t, l) =>
                                (0, s.jsx)(
                                    n2,
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
var n5 = l(610509),
    n9 = l(575888),
    n7 = l(49381),
    ie = l(223273);
function it(e, t, l) {
    if (null == e || null == t || t < 10) return ie.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? ie.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? ie.vI.VERY_POSITIVE
              : ie.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return ie.vI.MOSTLY_POSITIVE;
    if (e >= 40) return ie.vI.MIXED;
    if (e >= 20) return ie.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return ie.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return ie.vI.VERY_NEGATIVE;
    return ie.vI.OVERWHELMINGLY_NEGATIVE;
}
(l(323874), l(14289), l(35956));
var il = l(989441),
    ii = l(792216);
let ia = {
    appStore: {
        getTitle: () => em.intl.string(em.t.LVy7Ug),
        websiteCategories: [nh.V.IPHONE, nh.V.IPAD],
        websiteHostnames: ["apps.apple.com", "itunes.apple.com"],
        distributor: il.D.APPLE_APP_STORE,
        buildUrl: (e) => `https://apps.apple.com/app/id${e}`,
        action: T.GameProfileTrackActionActions.AppStoreReviews,
    },
    googlePlay: {
        getTitle: () => em.intl.string(em.t.V6rllO),
        websiteCategories: [nh.V.ANDROID],
        websiteHostnames: ["play.google.com"],
        distributor: il.D.GOOGLE_PLAY,
        buildUrl: (e) => `https://play.google.com/store/apps/details?id=${encodeURIComponent(e)}`,
        action: T.GameProfileTrackActionActions.GooglePlayReviews,
    },
};
function is(e) {
    switch (e) {
        case ie.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case ie.vI.OVERWHELMINGLY_POSITIVE:
        case ie.vI.VERY_POSITIVE:
        case ie.vI.POSITIVE:
        case ie.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case ie.vI.MIXED:
            return "steam-review-text-mixed";
        case ie.vI.MOSTLY_NEGATIVE:
        case ie.vI.NEGATIVE:
        case ie.vI.VERY_NEGATIVE:
        case ie.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
let ir = { enabled: !1 },
    ic = (0, er.mj)({
        name: "2026-10-game-profile-mobile-reviews",
        kind: "user",
        defaultConfig: ir,
        variations: { 0: ir, 1: { enabled: !0 } },
    });
var io =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    iu = l(778591);
function id(e) {
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
var im = l(315189);
let ix = { appStore: n5.z, googlePlay: n9.O };
function ih(e) {
    let { review: t } = e,
        { trackAction: l } = U(),
        n = (0, nN.A)(),
        i = ix[t.key],
        { action: a, url: c } = t,
        o = r.useCallback(() => {
            (l(a), n(c));
        }, [a, n, l, c]);
    return (0, s.jsx)(tU.D, {
        onClick: o,
        className: im.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, s.jsxs)("div", {
            className: im.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: im.hU,
                    children: [
                        (0, s.jsx)(i, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(tr.D, { variant: "heading-sm/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: im.nK,
                    children: [
                        (0, s.jsx)(W.E, {
                            variant: "text-xs/medium",
                            color: "text-strong",
                            className: im.yX,
                            children: t.ratingText,
                        }),
                        (0, s.jsx)(W.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: t.ratingCountText,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ig(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: c } = U(),
        o = (0, nN.A)(),
        u = it(n, i, "recent" === a),
        d = is(u),
        m = r.useCallback(() => {
            (c(T.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, c, t]);
    return (0, s.jsx)(tU.D, {
        onClick: m,
        className: im.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, s.jsxs)("div", {
            className: im.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: im.hU,
                    children: [
                        (0, s.jsx)(n7.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(tr.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, s.jsx)(
                    $.m,
                    {
                        text:
                            u === ie.vI.NO_USER_REVIEWS
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
                            className: im.nK,
                            children: [
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: im.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case ie.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case ie.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case ie.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case ie.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case ie.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case ie.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case ie.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case ie.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case ie.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case ie.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== ie.vI.NO_USER_REVIEWS &&
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
function ij(e) {
    let { url: t } = e,
        { game: l, trackAction: n } = U(),
        { reviews: i } = l,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = a.tier,
        o = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, nN.A)(),
        x = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, n, t]);
    return (0, s.jsx)(tU.D, {
        onClick: x,
        className: im.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, s.jsxs)("div", {
            className: im.Ur,
            children: [
                (0, s.jsx)(tr.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, s.jsxs)("div", {
                    className: im.WA,
                    children: [
                        null != c ? (0, s.jsx)(ip, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, s.jsx)(iv, { rating: o, tier: c }) : null,
                        d
                            ? (0, s.jsx)(W.E, {
                                  variant: "text-xs/medium",
                                  color: is(ie.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function ip(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case io.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case io.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case io.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case io.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case io.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case io.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case io.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case io.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, s.jsx)(
        $.m,
        {
            text: l,
            children: (0, s.jsx)("div", {
                className: im.TE,
                children: (0, s.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function iv(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case io.MIGHTY:
                    t = "#fc430a";
                    break;
                case io.STRONG:
                    t = "#9e00b4";
                    break;
                case io.FAIR:
                    t = "#4aa1ce";
                    break;
                case io.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, s.jsx)(
        $.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, s.jsxs)("div", {
                className: im.TE,
                style: { backgroundColor: i },
                children: [
                    (0, s.jsx)(id, { rating: t, strokeColor: n }),
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: im.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let iE = function () {
    var e;
    let { game: t } = U(),
        l = (0, tc.c)("GameProfileReviews"),
        n = (0, iu.I)(t.id),
        i = t.opencriticUrl,
        a = r.useMemo(() => {
            let e = t.reviews?.steam,
                l = t.steamReleaseStatus !== ii.Y.RETIRED_ABANDONED && null != n,
                i = it(e?.recentRating, e?.recentRatingCount, !0),
                a = l && i !== ie.vI.NO_USER_REVIEWS,
                s =
                    null != e &&
                    null != e.localizedRating &&
                    null != e.localizedRatingCount &&
                    null != e.ratingCount &&
                    e.localizedRatingCount >= 200 &&
                    e.ratingCount >= 2e3;
            return {
                steamReview: e,
                showSteamReview: l,
                showRecentSteamReview: a,
                showLocalizedReview: s,
                primarySteamRating: s ? e?.localizedRating : e?.rating,
                primarySteamRatingCount: s ? e?.localizedRatingCount : e?.ratingCount,
                primarySteamTitleKey: s ? em.t["aWb+V4"] : em.t["8e4LiB"],
                mobileStoreReviews: Object.entries(ia).flatMap((e) => {
                    let l,
                        n,
                        [i, a] = e,
                        s = t.reviews?.[i],
                        r = s?.rating,
                        c = s?.ratingCount;
                    if (null == r || null == c) return [];
                    let o = (function (e, t) {
                        let l = e.websites.find((e) => {
                            let { category: l, url: n } = e;
                            try {
                                return (
                                    t.websiteCategories.includes(l) && t.websiteHostnames.includes(new URL(n).hostname)
                                );
                            } catch {
                                return !1;
                            }
                        });
                        if (null != l) return l.url;
                        let n = e.thirdPartySkus.find((e) => e.distributor === t.distributor)?.id;
                        return null != n ? t.buildUrl(n) : null;
                    })(t, a);
                    return null != o
                        ? [
                              ((l = a.getTitle()),
                              (n = new Intl.NumberFormat(em.intl.currentLocale, {
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 1,
                              }).format(r)),
                              {
                                  key: i,
                                  url: o,
                                  title: l,
                                  ratingText: em.intl.format(em.t["zdL4/T"], { rating: n }).toString(),
                                  ratingCountText: em.intl.format(em.t.u1m2hs, { rating_count: c }).toString(),
                                  accessibilityLabel: em.intl
                                      .format(em.t["63jSRx"], { store: l, rating: n, rating_count: c })
                                      .toString(),
                                  action: a.action,
                              }),
                          ]
                        : [];
                }),
            };
        }, [t, n]),
        c =
            ((e = a.mobileStoreReviews),
            !(function (e) {
                let { location: t } = e;
                return ic.useConfig({ location: t }).enabled;
            })({ location: "GameProfileReviews" })
                ? []
                : e),
        {
            steamReview: o,
            showSteamReview: u,
            showRecentSteamReview: d,
            showLocalizedReview: m,
            primarySteamRating: x,
            primarySteamRatingCount: h,
            primarySteamTitleKey: g,
        } = a,
        f =
            (t.steamReleaseStatus !== ii.Y.RETIRED_ABANDONED || c.length > 0) &&
            t.reviews?.opencritic != null &&
            null != t.opencriticUrl;
    return u || f || 0 !== c.length
        ? (0, s.jsxs)("div", {
              className: im.uW,
              children: [
                  (0, s.jsx)("div", {
                      className: im.Gf,
                      children: (0, s.jsx)(tr.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: im.kL,
                      children: [
                          d && null != n
                              ? (0, s.jsx)("div", {
                                    className: im.WH,
                                    children: (0, s.jsx)(ig, {
                                        url: n,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: o?.recentRating,
                                        ratingCount: o?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          u && null != n
                              ? (0, s.jsx)("div", {
                                    className: im.WH,
                                    children: (0, s.jsx)(ig, {
                                        url: n,
                                        title: em.intl.string(g),
                                        rating: x,
                                        ratingCount: h,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          c.map((e) =>
                              (0, s.jsx)("div", { className: im.WH, children: (0, s.jsx)(ih, { review: e }) }, e.key),
                          ),
                          f && null != i
                              ? (0, s.jsx)("div", { className: im.WH, children: (0, s.jsx)(ij, { url: i }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var iA = l(815996),
    iI = l(722258),
    iN = l(258245),
    ib = l(561769),
    iS = l(484469),
    iC = l(57020),
    iT = l(682301);
let iy = [];
var ik = l(758836),
    iR = l(399872);
let iL = [0, 1, 2, 3, 4];
function iG(e) {
    return e.skuId;
}
function iO(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: c, standalonePreview: o } = r.useContext(ib.v3),
        { trackAction: u } = U(),
        d = r.useRef(null),
        m = r.useCallback(
            (e) => {
                (u(T.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, iI.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, iC.A)({ product: t }),
                        returnRef: d,
                    }));
            },
            [u, i, t],
        ),
        x = r.useMemo(
            () => ({
                flattenProductVariants: a ?? !0,
                prioritizedCurrency: c,
                standalonePreview: o,
                productOverride: t,
            }),
            [a, c, o, t],
        );
    return (0, s.jsx)(ib.v3.Provider, {
        value: x,
        children: (0, s.jsx)(iN.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: iR.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function iM() {
    return (0, s.jsx)(iS.A, {});
}
function iP() {
    let { game: e, closeModal: t, trackAction: l } = U(),
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
                            null == e || t || k.A.isShopCollectionFetching(e) || lq(e);
                        }, [e, t]),
                        { skuIds: n ?? iy, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, iT.hv)(t, { flattenVariants: !0 }),
                a = (0, r.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                s = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && s)) };
        })(e.shopCollectionIds?.[0]),
        a = r.useCallback(() => {
            (l(T.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, iA.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: ik.G2.CATALOG,
                }));
        }, [l, t]),
        c = (0, lo.l)("game_profile_shop_carousel");
    return i
        ? (0, s.jsx)(tR, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, s.jsx)(lj, { children: iL.map((e) => (0, s.jsx)(iM, {}, e)) }),
          })
        : 0 === n.length
          ? null
          : (0, s.jsx)(tL, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: c
                    ? (0, s.jsx)(ld.A, {
                          gap: "md",
                          items: n,
                          getItemKey: iG,
                          renderItem: (e, t) => (0, s.jsx)(iO, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, s.jsx)(lu.A, { gap: "md", children: n.map((e) => (0, s.jsx)(iO, { product: e }, e.skuId)) }),
            });
}
var i_ = l(921138);
let iw = [],
    iD = [];
var iV = l(987070);
let iU = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iF(e) {
    return e.id;
}
function iY(e) {
    let { className: t } = e;
    return (0, s.jsx)(tf, { className: t, children: (0, s.jsx)(tg, { className: iV.Lg }) });
}
function iW(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = U(),
        a = t.getCoverURL(256),
        [c, o] = r.useState(null),
        u = null == a || c === a,
        { shouldOpenGameProfile: d, gameId: m } = (0, i_.Ay)({
            gameId: t.id,
            source: T.GameProfileSources.SimilarGames,
        }),
        x = r.useCallback(() => {
            (i(T.GameProfileTrackActionActions.ClickSimilarGame, { similarGameId: t.id }),
                d && null != m && n(m, T.GameProfileSources.SimilarGames));
        }, [t.id, m, i, d, n]),
        h = r.useCallback(() => o(a), [a]);
    return (0, s.jsx)($.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, s.jsxs)(tU.D, {
            ...l,
            className: iV.Nr,
            onClick: x,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, s.jsx)(t3.Ay, {
                    game: t,
                    className: iV.xe,
                    size: t3.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !u && (0, s.jsx)(iY, { className: iV.uz }),
            ],
        }),
    });
}
function iB() {
    let { game: e } = U(),
        t = e.id,
        { isFetching: l, similarGames: n } = (function (e) {
            let t = !lQ.has(e),
                { data: l, isLoading: n, error: i } = l0(e, t),
                a = t && null != l ? l : iw;
            (0, N.x)(a);
            let s = (0, m.bG)(
                    [e2.A],
                    () => a.some((e) => null == e2.A.getGame(e) && !e2.A.hasNoData(e) && !e2.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [e2.A, D.default],
                    () => {
                        let e = D.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => e2.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, i_.T_)(t) && !(0, O.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: iD };
        })(t),
        i = (0, lo.l)("game_profile_similar_games");
    return lQ.has(t)
        ? null
        : l
          ? (0, s.jsx)(tR, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, s.jsx)("div", {
                    className: iV.XG,
                    style: iU,
                    children: (0, s.jsx)(lj, {
                        children: eQ()
                            .range(0, 8)
                            .map((e) => (0, s.jsx)(iY, { className: iV.aZ }, e)),
                    }),
                }),
            })
          : 0 === n.length
            ? null
            : (0, s.jsx)(tL, {
                  title: em.intl.string(em.t["6rLyQB"]),
                  children: (0, s.jsx)("div", {
                      className: iV.XG,
                      style: iU,
                      children: i
                          ? (0, s.jsx)(ld.A, {
                                gap: "md",
                                items: n,
                                getItemKey: iF,
                                itemClassName: iV.cW,
                                renderItem: (e, t) => (0, s.jsx)(iW, { game: e, listItemProps: t }, e.id),
                            })
                          : (0, s.jsx)(lu.A, { gap: "md", children: n.map((e) => (0, s.jsx)(iW, { game: e }, e.id)) }),
                  }),
              });
}
l(667532);
var iz = l(853022);
let iH = new Set(["1402418703554842694", "356877880938070016"]),
    iX = [nh.V.EPICGAMES, nh.V.STEAM, nh.V.ROBLOX, nh.V.BATTLENET, nh.V.RIOT, nh.V.MINECRAFT];
function iK(e) {
    return (0, s.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iJ = l(349361),
    i$ = l(924895),
    iQ = l(422688),
    iq = l(505200),
    iZ = l(695250);
let i0 = function (e) {
    switch (e.category) {
        case nh.V.STEAM:
            return {
                icon: n7.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: T.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case nh.V.EPICGAMES:
            return {
                icon: iJ.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: T.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case nh.V.ROBLOX:
            return {
                icon: i$.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: T.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case nh.V.BATTLENET:
            return {
                icon: iQ.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: T.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case nh.V.RIOT:
            return {
                icon: iq.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: T.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case nh.V.MINECRAFT:
            return {
                icon: iZ.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: T.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: nk.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: T.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var i1 = l(242216);
function i8(e) {
    let t,
        l,
        n,
        i,
        a,
        s =
            ((t = (0, iu.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ek.d3x.XBOX_GAME_PASS && !(0, td.uJ)(e.id));
                return t?.id == null ? null : (0, iz.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            r.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== nh.V.EPICGAMES || !!iH.has(n)) &&
                            (e.category !== nh.V.STEAM || a !== ii.Y.RETIRED_ABANDONED) &&
                            iX.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === ii.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === nh.V.STEAM) ||
                    e.push({ category: nh.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === nh.V.STEAM ? -1 : +(t.category === nh.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function i3(e) {
    let { data: t } = e,
        { trackAction: l } = U(),
        n = (0, nN.A)();
    return (0, s.jsx)(iK, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let i2 = function () {
    let { game: e, trackAction: t } = U(),
        { showsStoreLinks: n, storeWebsites: i } = i8(e),
        a = r.useMemo(() => i.map(i0).filter((e) => null != e), [i]);
    if (!n) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, s.jsx)(i3, { data: e });
    }
    if (2 === a.length)
        return (0, s.jsxs)("div", {
            className: i1.G,
            children: [(0, s.jsx)(i3, { data: a[0] }), (0, s.jsx)(i3, { data: a[1] })],
        });
    let c = (0, s.jsx)(iK, {
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
        ? (0, s.jsxs)("div", { className: i1.G, children: [(0, s.jsx)(i3, { data: a[0] }), c] })
        : c;
};
var i4 = l(123292),
    i6 = l(672572),
    i5 = l(94936);
function i9() {
    let e = r.useRef(null),
        {
            isExpanded: t,
            showToggle: l,
            handleToggleExpanded: n,
        } = (function (e) {
            let { trackAction: t } = U(),
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
        { game: i, isTwoColumn: a } = U(),
        c = r.useMemo(() => (a ? 8 : 5), [a]);
    if (null == i.description) return null;
    let o = t ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, s.jsxs)("div", {
        className: u()(i6.fi, i5.k),
        children: [
            (0, s.jsx)(W.E, {
                ref: e,
                className: i5.Q,
                lineClamp: t ? void 0 : c,
                variant: "text-md/medium",
                children: i.description,
            }),
            l && (0, s.jsx)(i4.Q, { onClick: n, text: o }),
        ],
    });
}
var i7 = l(40478),
    ae = l(764948);
let at = r.memo(function (e) {
    let { analyticsLocations: t, selectTab: l, getScrollOffset: n } = e;
    return (0, s.jsxs)("div", {
        className: ae.V,
        children: [
            (0, s.jsx)(n6, {}),
            (0, s.jsxs)("div", {
                className: i7.h,
                children: [
                    (0, s.jsx)(le, {}),
                    (0, s.jsxs)("div", { className: i7.X, children: [(0, s.jsx)(i2, {}), (0, s.jsx)(i9, {})] }),
                ],
            }),
            (0, s.jsx)(nW, { analyticsLocations: t }),
            (0, s.jsx)(tT, {}),
            (0, s.jsx)(no, { getScrollOffset: n }),
            (0, s.jsx)(lk, { selectTab: l }),
            (0, s.jsx)(iP, {}),
            (0, s.jsx)(iB, {}),
            (0, s.jsx)(iE, {}),
            (0, s.jsx)(nD, {}),
        ],
    });
});
var al = l(164135);
let an = r.memo(function (e) {
    let { selectTab: t, getScrollOffset: l } = e;
    return (0, s.jsxs)("div", {
        className: al.V,
        children: [
            (0, s.jsxs)("div", { className: al.B, children: [(0, s.jsx)(n6, {}), (0, s.jsx)(i9, {})] }),
            (0, s.jsx)(no, { getScrollOffset: l }),
            (0, s.jsx)(lk, { selectTab: t }),
            (0, s.jsx)(iP, {}),
            (0, s.jsx)(iB, {}),
        ],
    });
});
var ai = l(881698),
    aa = l(928550),
    as = l(562708),
    ar = l(414499),
    ac = l(359549),
    ao = l(139286),
    au = l(873516);
function ad(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = U();
    (0, ao.A)({
        name: as.ImpressionNames.CLOUD_PLAY_CTA,
        type: as.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let a = r.useCallback(() => {
        (i(T.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, s.jsx)($.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, s.jsx)(K.$, {
            icon: ar.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function am(e) {
    let { cloudPlayAppId: t, analyticsLocations: l } = e,
        { game: n } = U(),
        i = (0, ac.rC)({ applicationId: t, sourceApplicationId: n.id, analyticsLocations: l });
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: au.k,
              children: (0, s.jsx)(ad, { onCloudPlayClick: i, analyticsLocations: l }),
          });
}
var ax = l(768626);
function ah(e) {
    let { analyticsLocations: t } = e,
        { game: l } = U(),
        n = (0, ai.A)(l.linkedApplications)?.id,
        [i] = (0, aa.L_)(l.getOfficialApplicationId()),
        [a] = (0, aa.L_)(l.id),
        { showsStoreLinks: r } = i8(l);
    return (0, s.jsxs)("div", {
        className: u()(ax.pz, i6.fi, r ? ax.FJ : ax.dg),
        children: [
            null == n || i || a ? null : (0, s.jsx)(am, { cloudPlayAppId: n, analyticsLocations: t }),
            (0, s.jsxs)("div", {
                className: ae.V,
                children: [
                    (0, s.jsx)(i2, {}),
                    (0, s.jsx)(nW, { analyticsLocations: t }),
                    (0, s.jsx)(tT, {}),
                    (0, s.jsx)(iE, {}),
                    (0, s.jsx)(nD, {}),
                ],
            }),
        ],
    });
}
var ag = l(105865);
function af(e) {
    let { isTwoColumn: t, selectTab: l, selectionVersion: n, initialScrollOffset: i, analyticsLocations: a } = e,
        c = r.useRef(null),
        o = r.useRef(null),
        u = r.useRef(n);
    (r.useLayoutEffect(() => {
        0 === n && null != i && i > 0 && o.current?.getScrollerNode()?.scrollTo({ top: i, behavior: "instant" });
    }, [i, n]),
        r.useLayoutEffect(() => {
            n !== u.current &&
                (o.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (u.current = n));
        }, [n]));
    let d = r.useCallback(() => o.current?.getScrollerNode()?.scrollTop ?? 0, []),
        m = r.useCallback((e) => {
            if (null != c.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                c.current.style.opacity = String(t);
            }
        }, []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(t5, { ref: c }),
            (0, s.jsxs)(eq.Ch, {
                ref: o,
                className: ag.XG,
                onScroll: m,
                children: [
                    (0, s.jsx)("div", { className: ag.xY, "aria-hidden": !0 }),
                    (0, s.jsx)(ln, {}),
                    (0, s.jsx)(tQ.F, {
                        children: t
                            ? (0, s.jsxs)("div", {
                                  className: ag.jC,
                                  children: [
                                      (0, s.jsx)(an, { selectTab: l, getScrollOffset: d }),
                                      (0, s.jsx)(ah, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, s.jsx)("div", {
                                  className: ag.b9,
                                  children: (0, s.jsx)(at, { analyticsLocations: a, selectTab: l, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var aj = l(883912),
    ap = l(787188);
function av(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, s.jsx)(aj.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: ls.Ye.GAME_PROFILE_GAME_SHOP,
        className: ap.kL,
        scrollerClassName: ap.XG,
        promotionBannerClassName: ap.Rv,
    });
}
var aE = l(733391),
    aA = l(171616);
function aI(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: i,
            onClose: a,
            initialScrollOffset: c,
            initialTab: o,
            navigateToGame: U,
        } = e,
        [F, Y] = r.useState(!0),
        [W, B] = r.useState(null),
        { clientThemesClassName: z } = (0, E.Ay)(),
        H = (0, m.bG)([C.default], () => C.default.locale),
        X = r.useMemo(() => (0, T.generateViewId)(), []),
        { analyticsLocations: K } = (0, j.Ay)(f.A.GAME_PROFILE),
        J = (0, R.s)(t),
        { data: $ } = (0, N.I)(t),
        Q = $?.getOfficialApplicationId(),
        q = (0, L.rG)($),
        Z = null != Q,
        ee = (0, m.bG)([v.A], () => null != Q && v.A.didFetchingApplicationFail(Q), [Q]),
        et = $?.name ?? "",
        el = (0, O.A)($),
        en = r.useRef(null);
    r.useEffect(() => {
        en.current = W;
    }, [W]);
    let {
            hasAlreadyLinked: ei,
            canStartAuthorization: ea,
            fetched: es,
            startAuthorization: er,
            connectionApp: ec,
        } = (0, p.RD)($),
        { invite: eo, isMember: ed, isResolving: em } = (0, L.Ay)($, B),
        { socialLayerStorefrontRecommendationsData: ex, socialLayerStorefrontRecommendationsLoading: eh } = (function (
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
                a = (0, M.h)(n),
                s = (0, m.bG)([v.A], () => null != n && v.A.didFetchingApplicationFail(n), [n]),
                c = r.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: o, status: u } = (0, w.XQ)({
                    applicationIds: c,
                    userIds: l,
                    numItems: 6,
                    source: _.B.USER_PROFILE,
                }),
                d = r.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== u || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, u, o],
                ),
                x = "loading" === u,
                h = "success" === u && o.length > 0 && null == a && !s;
            return {
                socialLayerStorefrontRecommendationsData: d,
                socialLayerStorefrontRecommendationsLoading: i && null != n && (x || h),
            };
        })(t),
        eg = r.useCallback(
            function (e) {
                let { similarGameId: n, communityGuildId: i } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, T.getGuildIdAndVerifiedFromInvite)(en.current);
                (0, T.trackGameProfileAction)({
                    gameName: et,
                    gameId: t,
                    action: e,
                    similarGameId: n,
                    viewId: X,
                    guildId: i ?? a.guildId,
                    isVerified: null == i && a.isVerified,
                    source: l,
                });
            },
            [et, t, X, l],
        );
    ((0, g.Ay)(() => {
        ((0, T.trackGameProfileOpen)({
            source: l,
            viewId: X,
            gameId: t,
            gameName: et,
            authorId: n,
            profileType: T.GameProfileTypes.FullProfile,
        }),
            (0, A.He)());
    }),
        (0, g.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, T.getGuildIdAndVerifiedFromInvite)(en.current),
                n = Date.now(),
                i = J.map((e) => {
                    let t = (0, I.JM)(e) ? (0, I.W6)(e, n) : (0, I.aJ)(e, H);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, T.trackGameProfileClose)({
                viewId: X,
                gameId: t,
                gameName: et,
                playedFriendIds: J.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: k.A.getSimilarGames(t) ?? [],
                guildId: l,
                isVerified: e,
            });
        }));
    let ef = r.useCallback((e) => {
            Y(e.contentRect.width >= 800);
        }, []),
        ej = (0, d.w)(ef, [], { fireOnMount: !0 }),
        ep = r.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, h.closeAllModals)(), (0, S.M)()) : a();
            },
            [a],
        ),
        ev = r.useCallback(() => ep(!1), [ep]),
        { navigation: eE, selectionVersion: eA } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.OVERVIEW,
                [l, n] = r.useState(t),
                [i, a] = r.useState(0),
                s = r.useCallback((e) => {
                    (n(e), a((e) => e + 1));
                }, []),
                c = r.useCallback(
                    (t) => {
                        if (t !== l) {
                            let l = G[t];
                            null != l && e(l);
                        }
                        s(t);
                    },
                    [l, s, e],
                );
            return { navigation: r.useMemo(() => ({ selectedTab: l, selectTab: c }), [l, c]), selectionVersion: i };
        })(eg, o),
        { selectedTab: eI } = eE,
        eN = (function (e) {
            let { game: t, navigation: l } = e,
                { selectedTab: n, selectTab: i } = l,
                a = t?.id,
                s = t?.getOfficialApplicationId(),
                c = eu({ location: "GameProfileModal" });
            r.useEffect(() => {
                c && (0, aE.Xw)();
            }, [c]);
            let o = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != s && P.A.hasStorefrontForApplicationId(s) ? s : null),
                    [a, s],
                ),
                u = c && null != o,
                { storefront: d } = (0, aA.A)({ applicationId: u ? o : null }),
                [x, h] = r.useState({ storefrontId: d?.id, index: 0 }),
                [g, f] = r.useState(n);
            n !== g && (f(n), n !== y.COMMERCE && h({ storefrontId: d?.id, index: 0 }));
            let j = x.storefrontId === d?.id && x.index < (d?.pages.length ?? 0) ? x.index : 0,
                p = r.useCallback(
                    (e) => {
                        !u ||
                            e < 0 ||
                            e >= (d?.pages.length ?? 0) ||
                            (h({ storefrontId: d?.id, index: e }), i(y.COMMERCE));
                    },
                    [u, i, d],
                );
            return {
                hasCommerceTab: u,
                storefrontApplicationId: o,
                storefront: d,
                selectedStorefrontPageIndex: j,
                selectStorefrontPage: p,
            };
        })({ game: $, navigation: eE }),
        { hasCommerceTab: eb, storefrontApplicationId: eS, storefront: eC, selectedStorefrontPageIndex: eT } = eN,
        ey = Object.values(eC?.promotions ?? {})[0] ?? null,
        ek = r.useMemo(() => {
            if (null != $)
                return {
                    game: $,
                    isTwoColumn: F,
                    canStartAuthorization: ea,
                    hasAlreadyLinked: ei,
                    fetchedAuthorization: es,
                    startAuthorization: er,
                    connectionApp: ec,
                    invite: eo,
                    hasDiscordWebsite: q,
                    hasOfficialApplication: Z,
                    officialApplicationFetchFailed: ee,
                    isCommunityInviteResolving: em,
                    isMember: ed,
                    socialLayerStorefrontRecommendationsData: ex,
                    socialLayerStorefrontRecommendationsLoading: eh,
                    hasCommerceTab: eb,
                    storefrontPromotion: ey,
                    closeModal: ep,
                    navigateToGame: U,
                    trackAction: eg,
                    viewId: X,
                };
        }, [$, F, ea, ei, es, er, ec, eo, q, Z, ee, em, ed, ex, eh, eb, ey, ep, U, eg, X]);
    return null == $
        ? null
        : (0, s.jsx)(j.f5, {
              value: K,
              children: (0, s.jsx)(x.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, s.jsx)(V.Provider, {
                      value: ek,
                      children: (0, s.jsx)("div", {
                          className: u()(z, i6.kL),
                          ref: ej,
                          children: (0, s.jsxs)(b.A, {
                              obscured: el,
                              onClose: ev,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: u()(i6.sx, { [i6.Tk]: eI !== y.COMMERCE }),
                                      children: (0, s.jsx)(eJ, { navigation: eE, socialLayerStorefront: eN }),
                                  }),
                                  eI === y.OVERVIEW &&
                                      (0, s.jsx)(af, {
                                          selectTab: eE.selectTab,
                                          selectionVersion: eA,
                                          initialScrollOffset: c,
                                          isTwoColumn: F,
                                          analyticsLocations: K,
                                      }),
                                  eI === y.COMMUNITIES && (0, s.jsx)(t$, {}),
                                  eI === y.COMMERCE && (0, s.jsx)(av, { applicationId: eS, selectedPageIndex: eT }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let aN = function (e) {
    let { gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, initialTab: a, ...c } = e,
        [o, u] = r.useState({ gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, initialTab: a }),
        d = o.gameId,
        m = r.useCallback(
            (e, t) => {
                e !== d && ((0, L.UT)(e), u({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, s.jsx)(
        aI,
        {
            gameId: o.gameId,
            source: o.source,
            sourceUserId: o.sourceUserId,
            initialScrollOffset: o.initialScrollOffset,
            initialTab: o.initialTab,
            navigateToGame: m,
            ...c,
        },
        o.gameId,
    );
};
