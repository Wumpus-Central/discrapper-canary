l.d(t, { default: () => ap });
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
    K = l(477782),
    X = l(821609),
    J = l(663341),
    $ = l(866665),
    q = l(408278),
    Q = l(34188),
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
        { game: d, closeModal: u, trackAction: x } = U(),
        g = r.useRef(null),
        j = r.useRef(null),
        p = (0, en.A)({ id: d.id, label: em.intl.string(em.t.SHQGPj) }),
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
                : (0, s.jsx)(K.Dr, {
                      id: "game-profile-something-wrong",
                      label: em.intl.string(em.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: eu.E },
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
                d = r.useCallback(
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
                u = r.useCallback(
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
                        K.Dr,
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
                        i = !n && null != l && (0, eb.uA)(l);
                    h.push(
                        (0, s.jsx)(
                            K.Dr,
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
        b = r.useCallback(() => {
            null != I && (0, ei.G)({ applicationId: I });
        }, [I]),
        S = r.useCallback(() => {
            null != I && (x(T.GameProfileTrackActionActions.GameShop), (0, ei.default)({ applicationId: I }), u());
        }, [I, x, u]),
        C = r.useCallback(() => u(!1), [u]),
        k = r.useCallback(() => {
            x(T.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${ek.BVt.GAME_PROFILE(d.id)}`;
            (0, es.C)(e, () => {
                (0, B.P0)({ text: em.intl.string(em.t["+5kSoW"]), variant: "success" });
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
                            children: (0, s.jsx)(K.rX, { children: E }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)("div", {
                            ...e,
                            ref: j,
                            children: (0, s.jsx)(X.$, {
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
                    children: (0, s.jsx)(q.K, {
                        icon: Q.U,
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
                    children: (0, s.jsx)(q.K, {
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
                                children: [(0, s.jsx)(K.rX, { children: v }), (0, s.jsx)(K.rX, { children: p })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)($.m, {
                            text: em.intl.string(em.t["UKOtz+"]),
                            children: (0, s.jsx)("div", {
                                ...e,
                                ref: g,
                                children: (0, s.jsx)(q.K, {
                                    icon: ee.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": em.intl.string(em.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, s.jsx)(q.K, {
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
        { storefront: o, selectedStorefrontPageIndex: d, selectStorefrontPage: u } = i,
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
                    children: (0, s.jsx)(K.rX, {
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
                                K.Dr,
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
function eK(e) {
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
var eX = l(510954);
function eJ(e) {
    let { navigation: t, socialLayerStorefront: l } = e,
        { game: n } = U(),
        { selectedTab: i, selectTab: a } = t,
        c = n.getIconURL(64),
        [o, d] = r.useState(null),
        u = r.useCallback(() => d(c), [c]),
        m = em.intl.string(em.t.qHmbyh);
    return (0, s.jsx)("div", {
        className: eX.wx,
        children: (0, s.jsxs)("div", {
            className: eX.ap,
            children: [
                (0, s.jsx)("div", {
                    className: eX.wE,
                    children:
                        null != c && c !== o
                            ? (0, s.jsx)("img", { src: c, alt: "", className: eX.FC, draggable: !1, onError: u })
                            : (0, s.jsx)(F._, { size: "md" }),
                }),
                (0, s.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: eX.vR,
                    children: [
                        (0, s.jsx)(Y.V.Item, {
                            id: y.OVERVIEW,
                            disableItemStyles: !0,
                            className: eX.Mf,
                            "aria-label": m,
                            children: (0, s.jsx)(W.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, s.jsx)(eM, { className: eX.Mf, navigation: t }),
                        (0, s.jsx)(eK, { className: eX.Mf, navigation: t, socialLayerStorefront: l }),
                    ],
                }),
                (0, s.jsx)(eR, { className: eX.HK, activeTab: i }),
            ],
        }),
    });
}
var e$ = l(435558),
    eq = l.n(e$),
    eQ = l(689175),
    eZ = l(448741),
    e0 = l(71393),
    e1 = l(309010),
    e8 = l(449054),
    e3 = l(60465),
    e2 = l(311043),
    e6 = l(636537),
    e4 = l(73153);
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
let e7 = new e9(e4.h, {
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
    e4.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await e6.Bo.get({
                url: ek.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            l = t.body?.guilds ?? [];
        e4.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: l });
    } catch (t) {
        throw (e4.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
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
function tr(e) {
    let { guildName: t, isMember: l, onClick: n, size: i, fullWidth: a } = e;
    return (0, s.jsx)(X.$, {
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
function tc(e) {
    let { guildName: t, isMember: l, onClick: n, size: i, fullWidth: a } = e;
    return (0, s.jsx)(X.$, {
        variant: "secondary",
        size: i,
        fullWidth: a,
        text: l ? em.intl.string(em.t.KLOhbO) : em.intl.string(em.t.SKNnqq),
        "aria-label": l
            ? em.intl.formatToPlainString(em.t.AEfs1D, { guildName: t })
            : em.intl.formatToPlainString(em.t.TUZ50q, { guildName: t }),
        onClick: n,
    });
}
var to = l(810729);
let td = { sm: to.nz, md: to.a };
function tu(e) {
    let { className: t, width: l } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: d()(to.qf, t), style: { width: l } });
}
function tm(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function tx(e) {
    let { className: t, size: l = "md" } = e;
    return (0, s.jsx)(tu, { className: d()(to.x6, td[l], t) });
}
var th = l(827085);
function tg(e) {
    let { className: t } = e;
    return (0, s.jsx)(tu, { className: d()(th.qV, t) });
}
function tf(e) {
    let { presenceCount: t, memberCount: l } = e;
    return null == t && null == l
        ? null
        : (0, s.jsxs)("div", {
              className: th.kL,
              children: [
                  null != t &&
                      (0, s.jsxs)("div", {
                          className: th.U9,
                          children: [
                              (0, s.jsx)("i", { className: th._o }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != l &&
                      (0, s.jsxs)("div", {
                          className: th.U9,
                          children: [
                              (0, s.jsx)("i", { className: th.jk }),
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
var tj = l(297264),
    tp = l(37537),
    tv = l(714991),
    tE = l(486020),
    tA = l(240248),
    tI = l(213098);
function tN() {
    return (0, s.jsxs)(tm, {
        className: tI.uW,
        animationDelayMs: 300,
        children: [
            (0, s.jsx)(tu, { className: tI.dU, width: "30%" }),
            (0, s.jsx)(tm, {
                className: tI.nV,
                children: (0, s.jsxs)("div", {
                    className: tI.hQ,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tI.To,
                            children: [
                                (0, s.jsx)(tu, { className: tI.QV }),
                                (0, s.jsxs)("div", {
                                    className: tI.Yv,
                                    children: [
                                        (0, s.jsx)(tu, { className: tI.Ag }),
                                        (0, s.jsx)(tu, { className: tI.zl }),
                                        (0, s.jsx)(tg, { className: tI.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(tx, {}),
                    ],
                }),
            }),
        ],
    });
}
function tb(e) {
    let { guild: t } = e,
        l = tE.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = r.useState(void 0),
        a = null != l && n !== l,
        c = r.useCallback(() => {
            i(l);
        }, [l]);
    return (0, s.jsxs)("div", {
        className: tI._C,
        children: [
            a && (0, s.jsx)(tu, { className: tI.EQ }),
            (0, s.jsx)("img", {
                className: tI.$f,
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
    let { guild: t, presenceCount: l, memberCount: n, button: i, className: a } = e;
    return (0, s.jsx)("div", {
        className: d()(tI.kL, a),
        children: (0, s.jsxs)("div", {
            className: tI.hQ,
            children: [
                (0, s.jsxs)("div", {
                    className: tI.To,
                    children: [
                        (0, s.jsx)(tb, { guild: t }),
                        (0, s.jsxs)("div", {
                            className: tI.yj,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: tI.YS,
                                    children: [
                                        (0, s.jsx)(tv.A, { guild: t, size: 16 }),
                                        (0, s.jsx)(tj.D, {
                                            className: tI.J5,
                                            variant: "heading-md/semibold",
                                            color: "text-default",
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                !(0, tA.uJ)(t.description) &&
                                    (0, s.jsx)(W.E, {
                                        className: tI.h_,
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: t.description,
                                    }),
                                (0, s.jsx)(tf, { presenceCount: l, memberCount: n }),
                            ],
                        }),
                    ],
                }),
                i,
            ],
        }),
    });
}
function tC() {
    let e = (0, tp.c)("GameProfileGuildInvite"),
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
                e4.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: ek.BRT.APP }));
        }, [t, c, a]);
    return null == t || null == t.guild
        ? l && n
            ? (0, s.jsx)(tN, {})
            : null
        : (0, s.jsxs)("div", {
              className: tI.uW,
              children: [
                  (0, s.jsx)(tj.D, {
                      className: tI.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, s.jsx)(tS, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      button: (0, s.jsx)(tr, { guildName: t.guild.name, isMember: i, onClick: o, fullWidth: !0 }),
                  }),
              ],
          });
}
var tT = l(320448),
    ty = l(152594);
function tk(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, s.jsxs)("div", {
        className: ty.kL,
        "aria-busy": !0,
        children: [
            (0, s.jsxs)("div", {
                className: ty.wR,
                children: [(0, s.jsx)(tu, { className: ty.Iz, width: l }), n && (0, s.jsx)(tx, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tR(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, s.jsxs)("div", {
        className: ty.kL,
        children: [
            (0, s.jsxs)("div", {
                className: ty.wR,
                children: [
                    (0, s.jsx)(tj.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, s.jsx)(X.$, {
                            size: "sm",
                            icon: tT._,
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
var tL = l(196765),
    tG = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tO = (0, tL.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tM = l(876798),
    tP = l(481901),
    t_ = l(916099),
    tw = l(461353);
function tD() {
    let { layout: e, setLayout: t } = tO(),
        l = em.intl.string(em.t.VGRZh7),
        n = em.intl.string(em.t["NJFr+g"]);
    return (0, s.jsxs)("div", {
        className: tw.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, s.jsx)($.m, {
                text: l,
                asContainer: !0,
                children: (0, s.jsx)(tM.k, {
                    icon: tP.d,
                    pressed: e === tG.GRID,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tG.GRID),
                }),
            }),
            (0, s.jsx)($.m, {
                text: n,
                asContainer: !0,
                children: (0, s.jsx)(tM.k, {
                    icon: t_.ListBulletsIcon,
                    pressed: e === tG.LIST,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tG.LIST),
                }),
            }),
        ],
    });
}
var tV = l(759020);
function tU(e) {
    let { guild: t, presenceCount: l, memberCount: n, button: i } = e;
    return (0, s.jsxs)("div", {
        className: tV.kL,
        children: [
            (0, s.jsxs)("div", {
                className: tV.OA,
                children: [
                    (0, s.jsx)(tb, { guild: t }),
                    (0, s.jsxs)("div", {
                        className: tV.FS,
                        children: [
                            (0, s.jsxs)("div", {
                                className: tV.YS,
                                children: [
                                    (0, s.jsx)(tv.A, { guild: t, size: 16 }),
                                    (0, s.jsx)(tj.D, {
                                        className: tV.J5,
                                        variant: "heading-sm/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, tA.uJ)(t.description) &&
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
                className: tV.o1,
                children: [(0, s.jsx)(tf, { presenceCount: l, memberCount: n }), i],
            }),
        ],
    });
}
var tF = l(620387);
function tY(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(tm, {
        className: tF.s7,
        animationDelayMs: t,
        children: [
            (0, s.jsxs)("div", {
                className: tF.Xc,
                children: [
                    (0, s.jsx)(tu, { className: tF.VR }),
                    (0, s.jsxs)("div", {
                        className: tF.hG,
                        children: [
                            (0, s.jsx)(tu, { className: tF.t_ }),
                            (0, s.jsx)(tu, { className: tF.Aj }),
                            (0, s.jsx)(tg, {}),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(tx, {}),
        ],
    });
}
function tW(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(tm, {
        className: tF.fv,
        animationDelayMs: t,
        children: [
            (0, s.jsx)(tu, { className: tF.VR }),
            (0, s.jsxs)("div", {
                className: tF.hG,
                children: [(0, s.jsx)(tu, { className: tF.t_ }), (0, s.jsx)(tu, { className: tF.Aj })],
            }),
            (0, s.jsx)(tx, { size: "sm" }),
        ],
    });
}
function tB(e) {
    let { guild: t, layout: l } = e,
        { game: n, closeModal: i, trackAction: a, viewId: c } = U(),
        o = (0, m.bG)([e0.A], () => e0.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        d = r.useCallback(async () => {
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
        u = l === tG.LIST;
    return (0, s.jsx)(u ? tU : tS, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        button: (0, s.jsx)(tc, { guildName: t.name, isMember: o, onClick: d, size: u ? "sm" : void 0, fullWidth: !u }),
    });
}
function tz() {
    let { game: e } = U(),
        { data: t, isLoading: l } = ts(e.id),
        n = tO((e) => e.layout),
        i = n === tG.LIST,
        a = i ? tW : tY,
        r = l && (null == t || 0 === t.length);
    return (0, s.jsxs)(eQ.Ch, {
        className: tF.XG,
        children: [
            (0, s.jsx)("div", { className: tF.xY, "aria-hidden": !0 }),
            (0, s.jsx)("div", {
                className: tF.uW,
                children: (0, s.jsxs)(tR, {
                    title: em.intl.string(em.t.r6bvTh),
                    children: [
                        (0, s.jsx)("div", { className: tF.KE, children: (0, s.jsx)(tD, {}) }),
                        (0, s.jsx)("div", {
                            className: i ? tF.p_ : tF.Vg,
                            children: r
                                ? eq()
                                      .range(8)
                                      .map((e) => (0, s.jsx)(a, { animationDelayMs: 150 * e }, e))
                                : (t ?? []).map((e) => (0, s.jsx)(tB, { guild: e, layout: n }, e.id)),
                        }),
                    ],
                }),
            }),
        ],
    });
}
var tH = l(707554),
    tK = l(369606),
    tX = l(939249),
    tJ = l(775602),
    t$ = l(21161),
    tq = l(400492),
    tQ = l(541830),
    tZ = l(459746);
let t0 = "1552821538409939044";
var t1 = l(175213);
let t8 = l(892799);
function t3(e) {
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
    return (0, tA.uJ)(n)
        ? null
        : (0, s.jsxs)("div", {
              ref: t,
              children: [
                  (0, s.jsx)("div", { className: t1.y1, style: { backgroundImage: `url("${n}")` } }),
                  (0, s.jsx)("div", { className: t1.N4 }),
              ],
          });
}
function t2() {
    let { game: e } = U(),
        t = (e.genres ?? []).map(tQ.du).join(", ");
    return (0, tA.uJ)(t) ? null : (0, s.jsx)(W.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function t6(e) {
    let { rank: t } = e;
    return (0, s.jsxs)("div", {
        className: t1.Qc,
        children: [
            (0, s.jsx)(tK.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, s.jsx)(W.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t4() {
    let { game: e } = U();
    return (0, s.jsx)(t5, { className: d()(t1._M, (0, tZ.cO)(e) && t1.i3), imageClassName: t1.xe });
}
function t5(e) {
    let { className: t, imageClassName: l } = e,
        { game: n } = U(),
        i = (0, s.jsx)(tZ.Ay, { game: n, className: l, size: tZ.wu.LARGE });
    return n.id !== t0
        ? (0, s.jsx)("div", { className: t, children: i })
        : (0, s.jsx)(t9, { className: t, children: i });
}
function t9(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = r.useContext(t$.x),
        i = (0, m.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        a = r.useRef({ count: 0, lastTime: 0 });
    return (0, s.jsx)(tX.D, {
        className: d()(l, t1.b3),
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
                (0, tq.Ak)("discodo");
            }
        },
        children: t,
    });
}
let t7 = function () {
    let { game: e, isTwoColumn: t } = U(),
        l = e.name;
    return (0, s.jsxs)("div", {
        className: t1.ap,
        children: [
            t && (0, s.jsx)(t5, { className: d()(t1.Tf, (0, tZ.cO)(e) && t1.wS), imageClassName: t1.w$ }),
            (0, s.jsxs)("div", {
                className: t1.lu,
                children: [
                    null != e.l30Rank && (0, s.jsx)(t6, { rank: e.l30Rank }),
                    (0, s.jsxs)("div", {
                        className: t1.$,
                        children: [
                            (0, s.jsx)(tj.D, { variant: "heading-xxl/semibold", children: l }),
                            e.id === t0 &&
                                (0, s.jsx)("img", {
                                    src: t8,
                                    className: t1.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, s.jsx)(t2, {}),
                ],
            }),
        ],
    });
};
var le = l(638495),
    lt = l(871123),
    ll = l(439303),
    ln = l(317560),
    li = l(467884),
    la = l(480713),
    ls = l(449543),
    lr = l(197935),
    lc = l(761812);
function lo(e) {
    return e;
}
function ld(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: lc.B, children: t });
}
function lu(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, la.l)("social_layer_storefront_card_row"),
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
          ? (0, s.jsx)(lr.A, {
                gap: "md",
                "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
                items: t,
                getItemKey: lo,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, s.jsx)(ld, {
                        children: (0, s.jsx)(li.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: li.s6.SMALL,
                            analyticsLocations: l,
                            onClick: a,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, s.jsx)(ls.A, {
                gap: "md",
                "aria-label": em.intl.string(em.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, s.jsx)(
                        ld,
                        {
                            children: (0, s.jsx)(li.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: li.s6.SMALL,
                                analyticsLocations: l,
                                onClick: a,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var lm = l(369435);
function lx(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: d()(lm.n, { [lm.C]: 16 === l }), children: t });
}
var lh = l(936785),
    lg = l(403581),
    lf = l(812095),
    lj = l(647474),
    lp = l(162536);
function lv(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eY.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        a = i ? lg.t : t.Icon;
    return (0, s.jsx)(lj.A, {
        className: d()(lp.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, s.jsxs)("div", {
            className: lp.Qs,
            children: [
                null != a && (0, s.jsx)(a, { size: "xs", color: "currentColor", className: lp.Kk }),
                (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "currentColor", children: (0, lf.U)(t.text) }),
            ],
        }),
    });
}
var lE = l(521058);
function lA() {
    let { storefrontPromotion: e } = U();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, tA.uJ)(a.headerText)) return null;
    let r = {
        Icon: (0, lh.LZ)(n?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, lh.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, s.jsx)(lv, { className: lE.v, promotion: r });
}
let lI = [0, 1, 2, 3],
    lN = { placement: ll.Ye.GAME_PROFILE };
function lb() {
    return (0, s.jsx)(tk, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, s.jsx)(lx, { children: lI.map((e) => (0, s.jsx)(ld, { children: (0, s.jsx)(li.yf, {}) }, e)) }),
    });
}
function lS(e) {
    let { selectTab: t } = e,
        l = (0, le.k)(),
        {
            trackAction: n,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: a,
            hasCommerceTab: c,
            closeModal: o,
        } = U(),
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
                    (0, ln.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: d,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, lt.rG)(e, l, t, a) && o();
                        },
                    }));
            },
            [n, o, d, i, l],
        );
    if (a) return (0, s.jsx)(lb, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, s.jsxs)(tR, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, s.jsx)(lA, {}),
            (0, s.jsx)(ll.E9, {
                newValue: lN,
                children: (0, s.jsx)(lu, { skuIds: x, analyticsLocations: d, onCardClick: m }),
            }),
        ],
    });
}
var lC = l(621466),
    lT = l(966697),
    ly = l(346055),
    lk = l(460905),
    lR = l(776231),
    lL = l(46054),
    lG = l(58703),
    lO = l(155718),
    lM = l(387408),
    lP = l(731068),
    l_ = l(59318),
    lw = l(320095),
    lD = l(708676),
    lV = l(383233),
    lU = l(998218);
let lF = /^#{1,3}\s+(.+)$/,
    lY = /^https?:\/\/\S+$/;
var lW = l(158390),
    lB = l(103348),
    lz = l(371794);
let lH = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function lK(e) {
    e4.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, lz.aP)({
                    url: ek.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: C.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(lB.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (e4.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            e4.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        e4.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function lX(e) {
    let t = ((await e6.Bo.get({ url: ek.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !lH.has(t),
    );
    e4.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let lJ = (0, m.UT)(k.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => k.A.getSimilarGames(e) ?? null,
    load: (e) => lX(e),
    retryConfig: { backoff: () => new lW.A(5 * tn.A.Millis.SECOND, 5 * tn.A.Millis.MINUTE) },
    failureStaleAfter: tn.A.Seconds.MINUTE,
});
async function l$(e, t) {
    e4.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await e6.Bo.get({ url: ek.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        e4.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, lM.A)((0, lw.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, lV._c)(e))
                            return e.components
                                .filter((e) => e.type === lO.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || lY.test(t.trim())
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
                        if ((0, lV._c)(e)) {
                            let t = e.components.find((e) => e.type === lO.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, lP.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, l_.tT)(e.content_type));
                        if (null != t) return (0, lP.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, l_.XB)(e.content_type));
                        if (null != l) return (0, lP.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, lP.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, lP.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, lP.oU)(
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
                        a === i || (0, lV._c)(n)
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
        e4.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var lq = l(284009),
    lQ = l.n(lq),
    lZ = l(376728),
    l0 = l(976860);
async function l1(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    lQ()(a.length > 0, "analyticsLocationStack must have at least one location");
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
                (await lZ.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, l0.pX)(ek.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var l8 = l(806244),
    l3 = l(165648);
function l2(e, t) {
    return lL.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function l6(e) {
    return e.id;
}
function l4() {
    return (0, s.jsxs)(tm, {
        className: l8.s7,
        children: [
            (0, s.jsx)(tu, { className: l8.o$ }),
            (0, s.jsxs)("div", {
                className: l8.UF,
                children: [(0, s.jsx)(tu, { className: l8.iX }), (0, s.jsx)(tu, { className: l8.jt })],
            }),
        ],
    });
}
function l5(e, t) {
    var l;
    let n,
        i = (0, lR.kr)(364 * (0, lR.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = lU.A.toURLSafe(e))
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
        : (0, s.jsx)(lT.y, {
              readyState: i ? ek.Rv1.READY : ek.Rv1.LOADING,
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
        : (0, s.jsx)(tX.D, {
              ...i,
              className: l8.Nr,
              onClick: a,
              children: (0, s.jsxs)(ly.M, {
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
                                  (0, s.jsx)(tj.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: l8.DD,
                                      children: l2(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, s.jsxs)("div", {
                                      className: d()(l8.h_, l3.PT),
                                      children: [l2(t.body, l), (0, s.jsx)("div", { className: l8.fm })],
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
                                              (0, lG.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, s.jsxs)("div", {
                                              className: l8.a5,
                                              children: [
                                                  (0, s.jsx)(lk.n, { size: "xs", color: "currentColor" }),
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
let ne = r.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, s.jsxs)(ly.M, {
        className: l8.zI,
        children: [
            null != t.title &&
                (0, s.jsx)(tj.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l8.DD,
                    children: l2(t.title, l),
                }),
            t.body.length > 0 &&
                (0, s.jsxs)("div", {
                    className: d()(l8.h_, l3.PT),
                    children: [l2(t.body, l), (0, s.jsx)("div", { className: l8.fm })],
                }),
            (0, s.jsxs)("div", {
                className: l8.ov,
                children: [
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, lG.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, s.jsxs)("div", {
                            className: l8.a5,
                            children: [
                                (0, s.jsx)(lk.n, { size: "xs", color: "currentColor" }),
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
    return (0, s.jsxs)(tX.D, {
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
    return (0, s.jsx)(tX.D, {
        ...n,
        className: l8.Nr,
        onClick: a,
        children: (0, s.jsxs)(ly.M, {
            className: l8.zI,
            children: [
                (0, s.jsx)(tj.D, {
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
                                children: em.intl.format(em.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: l8.ov,
                    children: (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, lD.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
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
        { game: n, invite: i, hasDiscordWebsite: a, closeModal: c, trackAction: o } = U(),
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
        p = (0, la.l)("game_profile_announcements"),
        v = r.useCallback(() => {
            let e = i?.guild?.id ?? x;
            null != e &&
                null != h &&
                (o(T.GameProfileTrackActionActions.Announcements),
                e3.default.setGameProfilePendingReturn({ gameId: d, channelId: h, initialScrollOffset: t() }),
                c(),
                l1({ invite: i, guildId: e, channelId: h, analyticsLocationStack: l }));
        }, [o, c, t, i, x, h, l, d]),
        E = r.useCallback(
            (e) => {
                let n = i?.guild?.id ?? x;
                null != n &&
                    null != h &&
                    (o(T.GameProfileTrackActionActions.AnnouncementsItem),
                    e3.default.setGameProfilePendingReturn({ gameId: d, channelId: h, initialScrollOffset: t() }),
                    c(),
                    l1({ invite: i, guildId: n, channelId: h, messageId: e, analyticsLocationStack: l }));
            },
            [o, c, t, i, x, h, l, d],
        ),
        A = null != h && u.length > 0;
    return (!f || g) && a
        ? (0, s.jsx)(tk, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, s.jsx)(lx, {
                  gap: 16,
                  children: eq()
                      .range(3)
                      .map((e) => (0, s.jsx)(l4, {}, e)),
              }),
          })
        : A
          ? (0, s.jsx)(tR, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: v,
                children: p
                    ? (0, s.jsx)(lr.A, {
                          gap: 16,
                          items: u,
                          getItemKey: l6,
                          itemClassName: l8.hu,
                          renderItem: (e, t) =>
                              (0, s.jsx)(nn, { message: e, channelId: h, onCardClick: E, listItemProps: t }, e.id),
                      })
                    : (0, s.jsx)(ls.A, {
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
    let { game: e, trackAction: t } = U(),
        l = r.useCallback(async () => {
            t(T.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, nr.a)(ek.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, ns.A)(e);
        }, [t]),
        n = r.useCallback((e) => (0, s.jsx)(na.Anchor, { onClick: l, children: e }), [l]);
    return e.linkedApplications?.some((e) => e.type === lO.Mh.OFFICIAL)
        ? null
        : (0, s.jsx)(W.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: n }),
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
        { trackAction: l } = U(),
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
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case no.V.TWITTER:
                    return {
                        icon: (0, s.jsx)(nu.p, { ...t }),
                        action: T.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case no.V.YOUTUBE:
                    return {
                        action: T.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, s.jsx)(nm.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case no.V.FACEBOOK:
                    return {
                        icon: (0, s.jsx)(nx.Z, { ...t }),
                        action: T.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case no.V.INSTAGRAM:
                    return {
                        icon: (0, s.jsx)(nh.L, { ...t }),
                        action: T.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case no.V.BLUESKY:
                    return {
                        icon: (0, s.jsx)(ng.a, { ...t }),
                        action: T.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case no.V.REDDIT:
                    return {
                        icon: (0, s.jsx)(nf.T, { ...t }),
                        action: T.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case no.V.TWITCH:
                    return {
                        icon: (0, s.jsx)(nj.a, { ...t }),
                        action: T.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, nE),
        o = r.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, s.jsx)($.m, {
        text: c,
        children: (0, s.jsx)(tX.D, { onClick: o, className: nv.y, title: c, children: a }),
    });
}
var nI = l(808380),
    nN = l(31300),
    nb = l(802516),
    nS = l(22363),
    nC = l(418524);
function nT(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case nI.Y.DESKTOP:
            return (0, s.jsx)(nN.k, { size: "xs", ...l });
        case nI.Y.XBOX:
            return (0, s.jsx)(nb.Y, { size: "xs", ...l });
        case nI.Y.PLAYSTATION:
            return (0, s.jsx)(nS.X, { size: "xs", ...l });
        case nI.Y.NINTENDO:
            return (0, s.jsx)(nC.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function ny(e) {
    let { platform: t } = e;
    return (0, s.jsx)(
        $.m,
        {
            text: (function (e) {
                switch (e) {
                    case nI.Y.DESKTOP:
                        return em.intl.string(em.t.KT6uCJ);
                    case nI.Y.XBOX:
                        return em.intl.string(em.t.DDWUJp);
                    case nI.Y.PLAYSTATION:
                        return em.intl.string(em.t.fzMz2s);
                    case nI.Y.NINTENDO:
                        return em.intl.string(em.t.AMW8je);
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
    return (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let nO = function () {
    let { game: e } = U(),
        t = (0, tp.c)("GameProfileGameDetails"),
        l = r.useMemo(() => e.genres.map(tQ.du).join(", "), [e]),
        n = e.getCompanyByRole(lO.wk.PUBLISHER),
        i = e.getCompanyByRole(lO.wk.DEVELOPER),
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
        m = !(0, tA.uJ)(l),
        x = !(0, tA.uJ)(a),
        h = !(0, tA.uJ)(c),
        g = !(0, tA.uJ)(o),
        f = d.length > 0,
        j = u.length > 0 && !u.every((e) => (0, tA.uJ)(e.url));
    return (0, s.jsxs)("div", {
        className: nL.uW,
        children: [
            (0, s.jsx)("div", {
                className: nL.Gf,
                children: (0, s.jsx)(tj.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
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
                                    1 !== e.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
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
                                children: 1 !== n.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
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
                                children: 1 !== i.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
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
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            g
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: nL.Gu,
                                      children: lG.i$(new Date(o), "LL"),
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
                                children: d.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
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
                                children: em.intl.string(em.t["Oj3o1/"]),
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
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: nL.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: nR.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: nL.OQ, children: (0, s.jsx)(nc, {}) }),
        ],
    });
};
var nM = l(141628),
    nP = l(289363),
    n_ = l(793919);
function nw() {
    return (0, s.jsxs)("div", {
        "aria-hidden": !0,
        className: n_.uW,
        children: [
            (0, s.jsx)(tu, { className: n_.dU, width: "30%" }),
            (0, s.jsxs)(tm, {
                className: n_.nV,
                children: [
                    (0, s.jsx)("div", { className: n_.sB, children: (0, s.jsx)(nP.default, { isLoading: !0 }) }),
                    (0, s.jsxs)("div", {
                        className: n_.hQ,
                        children: [
                            (0, s.jsxs)("div", {
                                className: n_.Yv,
                                children: [(0, s.jsx)(tu, { width: "55%" }), (0, s.jsx)(tu, { width: "85%" })],
                            }),
                            (0, s.jsx)(tx, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nD(e) {
    let { analyticsLocations: t } = e,
        l = (0, tp.c)("GameProfileLinkAccount"),
        {
            trackAction: n,
            fetchedAuthorization: i,
            hasAlreadyLinked: a,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: d,
            hasOfficialApplication: u,
            officialApplicationFetchFailed: x,
        } = U(),
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
                      (0, s.jsx)(tj.D, {
                          className: n_.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
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
                                              (0, s.jsx)(tj.D, {
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
                                      (0, s.jsx)(X.$, {
                                          variant: "secondary",
                                          icon: nM.A,
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
var nV = l(635377),
    nU = l.n(nV),
    nF = l(80687),
    nY = l(534573),
    nW = l(248643),
    nB = l(256905),
    nz = l(684519),
    nH = l(191096),
    nK = l(90721),
    nX = l(140128);
function nJ(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function n$(e, t) {
    return (0, nY.Ec)(e, { size: t, keepAspectRatio: !0, format: tE.QB ? "webp" : null });
}
let nq = new (nU())({ max: 100 }),
    nQ = r.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, a] = r.useState(null),
            c = null != i && i.url === t ? i.isPortrait : (nq.get(t) ?? !1),
            o = r.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (nq.set(t, l),
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
                    className: d()(nX.r4, !c && nX.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, s.jsx)("img", { ref: o, src: n$(t, 900), className: d()(nX.c8, c && nX.D7, n), alt: l, onLoad: u }),
            ],
        });
    }),
    nZ = r.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: a, onSelect: c, gameName: o, listItemProps: u } = e,
            m = r.useCallback(() => c(n), [c, n]),
            x = u?.tabIndex;
        return (0, s.jsx)(tX.D, {
            ...u,
            className: d()(nX.JS, i && nX.Y4),
            onClick: m,
            children: (0, s.jsxs)("div", {
                className: nX.ub,
                children: [
                    (0, s.jsx)("img", {
                        src: n$("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nX.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: o }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, s.jsx)("div", {
                            className: nX.UZ,
                            children: (0, s.jsx)(nF.D, { playing: i && a, size: "sm", tabIndex: x }),
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
            (0, nK.A)({ videoRef: i, canvasRef: u, enabled: !l }),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    !l && (0, s.jsx)("canvas", { ref: u, className: nX.HW, "aria-hidden": "true" }),
                    (0, s.jsx)("div", {
                        className: nX.tN,
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
                            mediaPlayerClassName: nX.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function n1() {
    let { game: e, trackAction: t } = U(),
        [l, n] = r.useState(0),
        [i, a] = r.useState(null),
        [c, o] = r.useState(e.screenshotUrls),
        d = r.useRef(null),
        u = r.useRef(null),
        x = (0, m.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        { obscured: h } = (0, nH.I3)(),
        g = (0, la.l)("game_profile_media");
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
        b = r.useRef(null),
        S = r.useCallback(() => {
            t(E ? T.GameProfileTrackActionActions.ClickTrailer : T.GameProfileTrackActionActions.ClickImage);
            let e = d.current,
                l = b.current,
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
              className: nX.kL,
              children: [
                  E
                      ? (0, s.jsx)("div", {
                            className: nX.ND,
                            children: (0, s.jsx)(
                                n0,
                                {
                                    item: v,
                                    reducedMotion: x,
                                    autoPlay: !x && !h,
                                    videoRef: d,
                                    mediaPlayerRef: b,
                                    onPlay: C,
                                    onPause: y,
                                    onFullscreenChange: R,
                                },
                                `${p}-${v.url}`,
                            ),
                        })
                      : (0, s.jsxs)("div", {
                            className: nX.wp,
                            children: [
                                null != i &&
                                    !x &&
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: nX.Jy,
                                            onAnimationEnd: k,
                                            children: (0, s.jsx)(nQ, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, s.jsx)("div", { className: nX.QN }),
                                (0, s.jsx)(tX.D, {
                                    className: nX.gv,
                                    onClick: S,
                                    children: (0, s.jsx)("div", {
                                        className: nX.cs,
                                        children: (0, s.jsx)(
                                            nQ,
                                            {
                                                url: v.url,
                                                className: nX.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  g
                      ? (0, s.jsx)(lr.A, {
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
                      : (0, s.jsx)(ls.A, {
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
var n8 = l(610509),
    n3 = l(575888),
    n2 = l(49381),
    n6 = l(223273);
function n4(e, t, l) {
    if (null == e || null == t || t < 10) return n6.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? n6.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? n6.vI.VERY_POSITIVE
              : n6.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return n6.vI.MOSTLY_POSITIVE;
    if (e >= 40) return n6.vI.MIXED;
    if (e >= 20) return n6.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return n6.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return n6.vI.VERY_NEGATIVE;
    return n6.vI.OVERWHELMINGLY_NEGATIVE;
}
(l(323874), l(14289), l(35956));
var n5 = l(989441),
    n9 = l(792216);
let n7 = {
    appStore: {
        getTitle: () => em.intl.string(em.t.LVy7Ug),
        websiteCategories: [no.V.IPHONE, no.V.IPAD],
        websiteHostnames: ["apps.apple.com", "itunes.apple.com"],
        distributor: n5.D.APPLE_APP_STORE,
        buildUrl: (e) => `https://apps.apple.com/app/id${e}`,
        action: T.GameProfileTrackActionActions.AppStoreReviews,
    },
    googlePlay: {
        getTitle: () => em.intl.string(em.t.V6rllO),
        websiteCategories: [no.V.ANDROID],
        websiteHostnames: ["play.google.com"],
        distributor: n5.D.GOOGLE_PLAY,
        buildUrl: (e) => `https://play.google.com/store/apps/details?id=${encodeURIComponent(e)}`,
        action: T.GameProfileTrackActionActions.GooglePlayReviews,
    },
};
function ie(e) {
    switch (e) {
        case n6.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case n6.vI.OVERWHELMINGLY_POSITIVE:
        case n6.vI.VERY_POSITIVE:
        case n6.vI.POSITIVE:
        case n6.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case n6.vI.MIXED:
            return "steam-review-text-mixed";
        case n6.vI.MOSTLY_NEGATIVE:
        case n6.vI.NEGATIVE:
        case n6.vI.VERY_NEGATIVE:
        case n6.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
let it = { enabled: !1 },
    il = (0, er.mj)({
        name: "2026-10-game-profile-mobile-reviews",
        kind: "user",
        defaultConfig: it,
        variations: { 0: it, 1: { enabled: !0 } },
    });
var ii =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    ia = l(778591);
function is(e) {
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
var ir = l(315189);
let ic = { appStore: n8.z, googlePlay: n3.O };
function io(e) {
    let { review: t } = e,
        { trackAction: l } = U(),
        n = (0, np.A)(),
        i = ic[t.key],
        { action: a, url: c } = t,
        o = r.useCallback(() => {
            (l(a), n(c));
        }, [a, n, l, c]);
    return (0, s.jsx)(tX.D, {
        onClick: o,
        className: ir.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, s.jsxs)("div", {
            className: ir.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: ir.hU,
                    children: [
                        (0, s.jsx)(i, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(tj.D, { variant: "heading-sm/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: ir.nK,
                    children: [
                        (0, s.jsx)(W.E, {
                            variant: "text-xs/medium",
                            color: "text-strong",
                            className: ir.yX,
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
function id(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: c } = U(),
        o = (0, np.A)(),
        d = n4(n, i, "recent" === a),
        u = ie(d),
        m = r.useCallback(() => {
            (c(T.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, c, t]);
    return (0, s.jsx)(tX.D, {
        onClick: m,
        className: ir.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, s.jsxs)("div", {
            className: ir.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: ir.hU,
                    children: [
                        (0, s.jsx)(n2.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(tj.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, s.jsx)(
                    $.m,
                    {
                        text:
                            d === n6.vI.NO_USER_REVIEWS
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
                            className: ir.nK,
                            children: [
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: ir.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case n6.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case n6.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case n6.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case n6.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case n6.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case n6.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case n6.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case n6.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case n6.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case n6.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != i &&
                                    d !== n6.vI.NO_USER_REVIEWS &&
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
function iu(e) {
    let { url: t } = e,
        { game: l, trackAction: n } = U(),
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
    return (0, s.jsx)(tX.D, {
        onClick: x,
        className: ir.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, s.jsxs)("div", {
            className: ir.Ur,
            children: [
                (0, s.jsx)(tj.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, s.jsxs)("div", {
                    className: ir.WA,
                    children: [
                        null != c ? (0, s.jsx)(im, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, s.jsx)(ix, { rating: o, tier: c }) : null,
                        u
                            ? (0, s.jsx)(W.E, {
                                  variant: "text-xs/medium",
                                  color: ie(n6.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function im(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case ii.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case ii.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case ii.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case ii.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case ii.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case ii.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case ii.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case ii.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, s.jsx)(
        $.m,
        {
            text: l,
            children: (0, s.jsx)("div", {
                className: ir.TE,
                children: (0, s.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function ix(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case ii.MIGHTY:
                    t = "#fc430a";
                    break;
                case ii.STRONG:
                    t = "#9e00b4";
                    break;
                case ii.FAIR:
                    t = "#4aa1ce";
                    break;
                case ii.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, s.jsx)(
        $.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, s.jsxs)("div", {
                className: ir.TE,
                style: { backgroundColor: i },
                children: [
                    (0, s.jsx)(is, { rating: t, strokeColor: n }),
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: ir.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let ih = function () {
    var e;
    let { game: t } = U(),
        l = (0, tp.c)("GameProfileReviews"),
        n = (0, ia.I)(t.id),
        i = t.opencriticUrl,
        a = r.useMemo(() => {
            let e = t.reviews?.steam,
                l = t.steamReleaseStatus !== n9.Y.RETIRED_ABANDONED && null != n,
                i = n4(e?.recentRating, e?.recentRatingCount, !0),
                a = l && i !== n6.vI.NO_USER_REVIEWS,
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
                mobileStoreReviews: Object.entries(n7).flatMap((e) => {
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
                return il.useConfig({ location: t }).enabled;
            })({ location: "GameProfileReviews" })
                ? []
                : e),
        {
            steamReview: o,
            showSteamReview: d,
            showRecentSteamReview: u,
            showLocalizedReview: m,
            primarySteamRating: x,
            primarySteamRatingCount: h,
            primarySteamTitleKey: g,
        } = a,
        f =
            (t.steamReleaseStatus !== n9.Y.RETIRED_ABANDONED || c.length > 0) &&
            t.reviews?.opencritic != null &&
            null != t.opencriticUrl;
    return d || f || 0 !== c.length
        ? (0, s.jsxs)("div", {
              className: ir.uW,
              children: [
                  (0, s.jsx)("div", {
                      className: ir.Gf,
                      children: (0, s.jsx)(tj.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: ir.kL,
                      children: [
                          u && null != n
                              ? (0, s.jsx)("div", {
                                    className: ir.WH,
                                    children: (0, s.jsx)(id, {
                                        url: n,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: o?.recentRating,
                                        ratingCount: o?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          d && null != n
                              ? (0, s.jsx)("div", {
                                    className: ir.WH,
                                    children: (0, s.jsx)(id, {
                                        url: n,
                                        title: em.intl.string(g),
                                        rating: x,
                                        ratingCount: h,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          c.map((e) =>
                              (0, s.jsx)("div", { className: ir.WH, children: (0, s.jsx)(io, { review: e }) }, e.key),
                          ),
                          f && null != i
                              ? (0, s.jsx)("div", { className: ir.WH, children: (0, s.jsx)(iu, { url: i }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var ig = l(815996),
    ij = l(722258),
    ip = l(258245),
    iv = l(561769),
    iE = l(484469),
    iA = l(57020),
    iI = l(682301);
let iN = [];
var ib = l(758836),
    iS = l(399872);
let iC = [0, 1, 2, 3, 4];
function iT(e) {
    return e.skuId;
}
function iy(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        a = r.useContext(iv.v3),
        { trackAction: c } = U(),
        o = r.useRef(null),
        d = r.useCallback(
            (e) => {
                (c(T.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, ij.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, iA.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = a;
    return (0, s.jsx)(iv.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, s.jsx)(ip.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: iS.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function ik() {
    return (0, s.jsx)(iE.A, {});
}
function iR() {
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
                            null == e || t || k.A.isShopCollectionFetching(e) || lK(e);
                        }, [e, t]),
                        { skuIds: n ?? iN, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, iI.hv)(t, { flattenVariants: !0 }),
                a = (0, r.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                s = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && s)) };
        })(e.shopCollectionIds?.[0]),
        a = r.useCallback(() => {
            (l(T.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, ig.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: ib.G2.CATALOG,
                }));
        }, [l, t]),
        c = (0, la.l)("game_profile_shop_carousel");
    return i
        ? (0, s.jsx)(tk, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, s.jsx)(lx, { children: iC.map((e) => (0, s.jsx)(ik, {}, e)) }),
          })
        : 0 === n.length
          ? null
          : (0, s.jsx)(tR, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: c
                    ? (0, s.jsx)(lr.A, {
                          gap: "md",
                          items: n,
                          getItemKey: iT,
                          renderItem: (e, t) => (0, s.jsx)(iy, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, s.jsx)(ls.A, { gap: "md", children: n.map((e) => (0, s.jsx)(iy, { product: e }, e.skuId)) }),
            });
}
var iL = l(921138);
let iG = [],
    iO = [];
var iM = l(987070);
let iP = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function i_(e) {
    return e.id;
}
function iw(e) {
    let { className: t } = e;
    return (0, s.jsx)(tm, { className: t, children: (0, s.jsx)(tu, { className: iM.Lg }) });
}
function iD(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = U(),
        a = t.getCoverURL(256),
        [c, o] = r.useState(null),
        d = null == a || c === a,
        { shouldOpenGameProfile: u, gameId: m } = (0, iL.Ay)({
            gameId: t.id,
            source: T.GameProfileSources.SimilarGames,
        }),
        x = r.useCallback(() => {
            (i(T.GameProfileTrackActionActions.ClickSimilarGame, { similarGameId: t.id }),
                u && null != m && n(m, T.GameProfileSources.SimilarGames));
        }, [t.id, m, i, u, n]),
        h = r.useCallback(() => o(a), [a]);
    return (0, s.jsx)($.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, s.jsxs)(tX.D, {
            ...l,
            className: iM.Nr,
            onClick: x,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, s.jsx)(tZ.Ay, {
                    game: t,
                    className: iM.xe,
                    size: tZ.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !d && (0, s.jsx)(iw, { className: iM.uz }),
            ],
        }),
    });
}
function iV() {
    let { game: e } = U(),
        t = e.id,
        { isFetching: l, similarGames: n } = (function (e) {
            let t = !lH.has(e),
                { data: l, isLoading: n, error: i } = lJ(e, t),
                a = t && null != l ? l : iG;
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
                            .filter((t) => (0, iL.T_)(t) && !(0, O.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: iO };
        })(t),
        i = (0, la.l)("game_profile_similar_games");
    return lH.has(t)
        ? null
        : l
          ? (0, s.jsx)(tk, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, s.jsx)("div", {
                    className: iM.XG,
                    style: iP,
                    children: (0, s.jsx)(lx, {
                        children: eq()
                            .range(0, 8)
                            .map((e) => (0, s.jsx)(iw, { className: iM.aZ }, e)),
                    }),
                }),
            })
          : 0 === n.length
            ? null
            : (0, s.jsx)(tR, {
                  title: em.intl.string(em.t["6rLyQB"]),
                  children: (0, s.jsx)("div", {
                      className: iM.XG,
                      style: iP,
                      children: i
                          ? (0, s.jsx)(lr.A, {
                                gap: "md",
                                items: n,
                                getItemKey: i_,
                                itemClassName: iM.cW,
                                renderItem: (e, t) => (0, s.jsx)(iD, { game: e, listItemProps: t }, e.id),
                            })
                          : (0, s.jsx)(ls.A, { gap: "md", children: n.map((e) => (0, s.jsx)(iD, { game: e }, e.id)) }),
                  }),
              });
}
l(667532);
var iU = l(853022);
let iF = new Set(["1402418703554842694", "356877880938070016"]),
    iY = [no.V.EPICGAMES, no.V.STEAM, no.V.ROBLOX, no.V.BATTLENET, no.V.RIOT, no.V.MINECRAFT];
function iW(e) {
    return (0, s.jsx)(X.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iB = l(349361),
    iz = l(924895),
    iH = l(422688),
    iK = l(505200),
    iX = l(695250);
let iJ = function (e) {
    switch (e.category) {
        case no.V.STEAM:
            return {
                icon: n2.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: T.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case no.V.EPICGAMES:
            return {
                icon: iB.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: T.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case no.V.ROBLOX:
            return {
                icon: iz.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: T.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case no.V.BATTLENET:
            return {
                icon: iH.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: T.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case no.V.RIOT:
            return {
                icon: iK.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: T.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case no.V.MINECRAFT:
            return {
                icon: iX.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: T.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: nb.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: T.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var i$ = l(242216);
function iq(e) {
    let t,
        l,
        n,
        i,
        a,
        s =
            ((t = (0, ia.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ek.d3x.XBOX_GAME_PASS && !(0, tA.uJ)(e.id));
                return t?.id == null ? null : (0, iU.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            r.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== no.V.EPICGAMES || !!iF.has(n)) &&
                            (e.category !== no.V.STEAM || a !== n9.Y.RETIRED_ABANDONED) &&
                            iY.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === n9.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === no.V.STEAM) ||
                    e.push({ category: no.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === no.V.STEAM ? -1 : +(t.category === no.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function iQ(e) {
    let { data: t } = e,
        { trackAction: l } = U(),
        n = (0, np.A)();
    return (0, s.jsx)(iW, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let iZ = function () {
    let { game: e, trackAction: t } = U(),
        { showsStoreLinks: n, storeWebsites: i } = iq(e),
        a = r.useMemo(() => i.map(iJ).filter((e) => null != e), [i]);
    if (!n) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, s.jsx)(iQ, { data: e });
    }
    if (2 === a.length)
        return (0, s.jsxs)("div", {
            className: i$.G,
            children: [(0, s.jsx)(iQ, { data: a[0] }), (0, s.jsx)(iQ, { data: a[1] })],
        });
    let c = (0, s.jsx)(iW, {
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
        ? (0, s.jsxs)("div", { className: i$.G, children: [(0, s.jsx)(iQ, { data: a[0] }), c] })
        : c;
};
var i0 = l(123292),
    i1 = l(672572),
    i8 = l(94936);
function i3() {
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
        className: d()(i1.fi, i8.k),
        children: [
            (0, s.jsx)(W.E, {
                ref: e,
                className: i8.Q,
                lineClamp: t ? void 0 : c,
                variant: "text-md/medium",
                children: i.description,
            }),
            l && (0, s.jsx)(i0.Q, { onClick: n, text: o }),
        ],
    });
}
var i2 = l(40478),
    i6 = l(764948);
let i4 = r.memo(function (e) {
    let { analyticsLocations: t, selectTab: l, getScrollOffset: n } = e;
    return (0, s.jsxs)("div", {
        className: i6.V,
        children: [
            (0, s.jsx)(n1, {}),
            (0, s.jsxs)("div", {
                className: i2.h,
                children: [
                    (0, s.jsx)(t4, {}),
                    (0, s.jsxs)("div", { className: i2.X, children: [(0, s.jsx)(iZ, {}), (0, s.jsx)(i3, {})] }),
                ],
            }),
            (0, s.jsx)(nD, { analyticsLocations: t }),
            (0, s.jsx)(tC, {}),
            (0, s.jsx)(ni, { getScrollOffset: n }),
            (0, s.jsx)(lS, { selectTab: l }),
            (0, s.jsx)(iR, {}),
            (0, s.jsx)(iV, {}),
            (0, s.jsx)(ih, {}),
            (0, s.jsx)(nO, {}),
        ],
    });
});
var i5 = l(164135);
let i9 = r.memo(function (e) {
    let { selectTab: t, getScrollOffset: l } = e;
    return (0, s.jsxs)("div", {
        className: i5.V,
        children: [
            (0, s.jsxs)("div", { className: i5.B, children: [(0, s.jsx)(n1, {}), (0, s.jsx)(i3, {})] }),
            (0, s.jsx)(ni, { getScrollOffset: l }),
            (0, s.jsx)(lS, { selectTab: t }),
            (0, s.jsx)(iR, {}),
            (0, s.jsx)(iV, {}),
        ],
    });
});
var i7 = l(881698),
    ae = l(928550),
    at = l(562708),
    al = l(414499),
    an = l(359549),
    ai = l(139286),
    aa = l(873516);
function as(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = U();
    (0, ai.A)({
        name: at.ImpressionNames.CLOUD_PLAY_CTA,
        type: at.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let a = r.useCallback(() => {
        (i(T.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, s.jsx)($.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, s.jsx)(X.$, {
            icon: al.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function ar(e) {
    let { cloudPlayAppId: t, analyticsLocations: l } = e,
        { game: n } = U(),
        i = (0, an.rC)({ applicationId: t, sourceApplicationId: n.id, analyticsLocations: l });
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: aa.k,
              children: (0, s.jsx)(as, { onCloudPlayClick: i, analyticsLocations: l }),
          });
}
var ac = l(768626);
function ao(e) {
    let { analyticsLocations: t } = e,
        { game: l } = U(),
        n = (0, i7.A)(l.linkedApplications)?.id,
        [i] = (0, ae.L_)(l.getOfficialApplicationId()),
        [a] = (0, ae.L_)(l.id),
        { showsStoreLinks: r } = iq(l);
    return (0, s.jsxs)("div", {
        className: d()(ac.pz, i1.fi, r ? ac.FJ : ac.dg),
        children: [
            null == n || i || a ? null : (0, s.jsx)(ar, { cloudPlayAppId: n, analyticsLocations: t }),
            (0, s.jsxs)("div", {
                className: i6.V,
                children: [
                    (0, s.jsx)(iZ, {}),
                    (0, s.jsx)(nD, { analyticsLocations: t }),
                    (0, s.jsx)(tC, {}),
                    (0, s.jsx)(ih, {}),
                    (0, s.jsx)(nO, {}),
                ],
            }),
        ],
    });
}
var ad = l(105865);
function au(e) {
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
            (0, s.jsx)(t3, { ref: c }),
            (0, s.jsxs)(eQ.Ch, {
                ref: o,
                className: ad.XG,
                onScroll: m,
                children: [
                    (0, s.jsx)("div", { className: ad.xY, "aria-hidden": !0 }),
                    (0, s.jsx)(t7, {}),
                    (0, s.jsx)(tH.F, {
                        children: t
                            ? (0, s.jsxs)("div", {
                                  className: ad.jC,
                                  children: [
                                      (0, s.jsx)(i9, { selectTab: l, getScrollOffset: u }),
                                      (0, s.jsx)(ao, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, s.jsx)("div", {
                                  className: ad.b9,
                                  children: (0, s.jsx)(i4, { analyticsLocations: a, selectTab: l, getScrollOffset: u }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var am = l(658820),
    ax = l(787188);
function ah(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, s.jsx)(am.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: ll.Ye.GAME_PROFILE_GAME_SHOP,
        className: ax.kL,
        scrollerClassName: ax.XG,
        promotionBannerClassName: ax.Rv,
    });
}
var ag = l(733391),
    af = l(171616);
function aj(e) {
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
        K = r.useMemo(() => (0, T.generateViewId)(), []),
        { analyticsLocations: X } = (0, j.Ay)(f.A.GAME_PROFILE),
        J = (0, R.s)(t),
        { data: $ } = (0, N.I)(t),
        q = $?.getOfficialApplicationId(),
        Q = (0, L.rG)($),
        Z = null != q,
        ee = (0, m.bG)([v.A], () => null != q && v.A.didFetchingApplicationFail(q), [q]),
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
        { invite: eo, isMember: eu, isResolving: em } = (0, L.Ay)($, B),
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
                    viewId: K,
                    guildId: i ?? a.guildId,
                    isVerified: null == i && a.isVerified,
                    source: l,
                });
            },
            [et, t, K, l],
        );
    ((0, g.Ay)(() => {
        ((0, T.trackGameProfileOpen)({
            source: l,
            viewId: K,
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
                viewId: K,
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
        ej = (0, u.w)(ef, [], { fireOnMount: !0 }),
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
                c = ed({ location: "GameProfileModal" });
            r.useEffect(() => {
                c && (0, ag.Xw)();
            }, [c]);
            let o = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != s && P.A.hasStorefrontForApplicationId(s) ? s : null),
                    [a, s],
                ),
                d = c && null != o,
                { storefront: u } = (0, af.A)({ applicationId: d ? o : null }),
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
                    hasDiscordWebsite: Q,
                    hasOfficialApplication: Z,
                    officialApplicationFetchFailed: ee,
                    isCommunityInviteResolving: em,
                    isMember: eu,
                    socialLayerStorefrontRecommendationsData: ex,
                    socialLayerStorefrontRecommendationsLoading: eh,
                    hasCommerceTab: eb,
                    storefrontPromotion: ey,
                    closeModal: ep,
                    navigateToGame: U,
                    trackAction: eg,
                    viewId: K,
                };
        }, [$, F, ea, ei, es, er, ec, eo, Q, Z, ee, em, eu, ex, eh, eb, ey, ep, U, eg, K]);
    return null == $
        ? null
        : (0, s.jsx)(j.f5, {
              value: X,
              children: (0, s.jsx)(x.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, s.jsx)(V.Provider, {
                      value: ek,
                      children: (0, s.jsx)("div", {
                          className: d()(z, i1.kL),
                          ref: ej,
                          children: (0, s.jsxs)(b.A, {
                              obscured: el,
                              onClose: ev,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: d()(i1.sx, { [i1.Tk]: eI !== y.COMMERCE }),
                                      children: (0, s.jsx)(eJ, { navigation: eE, socialLayerStorefront: eN }),
                                  }),
                                  eI === y.OVERVIEW &&
                                      (0, s.jsx)(au, {
                                          selectTab: eE.selectTab,
                                          selectionVersion: eA,
                                          initialScrollOffset: c,
                                          isTwoColumn: F,
                                          analyticsLocations: X,
                                      }),
                                  eI === y.COMMUNITIES && (0, s.jsx)(tz, {}),
                                  eI === y.COMMERCE && (0, s.jsx)(ah, { applicationId: eS, selectedPageIndex: eT }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let ap = function (e) {
    let { gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, initialTab: a, ...c } = e,
        [o, d] = r.useState({ gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, initialTab: a }),
        u = o.gameId,
        m = r.useCallback(
            (e, t) => {
                e !== u && ((0, L.UT)(e), d({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, s.jsx)(
        aj,
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
