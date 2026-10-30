n.d(t, { default: () => rj });
var l,
    i,
    a,
    r = n(477900),
    s = n(582128),
    o = n.t(s, 2),
    c = n(503698),
    u = n.n(c),
    d = n(535185),
    m = n(17928),
    h = n(521489),
    g = n(192308),
    x = n(964486),
    f = n(793574),
    p = n(688810),
    j = n(206828),
    v = n(587895),
    A = n(590703),
    E = n(180170),
    I = n(583846),
    b = n(454908),
    N = n(570962),
    k = n(38145),
    C = n(773669),
    S = n(409626),
    y = (((l = {}).OVERVIEW = "overview"), (l.COMMUNITIES = "communities"), (l.COMMERCE = "commerce"), l),
    T = n(422069),
    L = n(205184),
    R = n(957807);
let M = {
    [y.OVERVIEW]: S.GameProfileTrackActionActions.Overview,
    [y.COMMUNITIES]: S.GameProfileTrackActionActions.Communities,
    [y.COMMERCE]: S.GameProfileTrackActionActions.GameShop,
};
var O = n(49491),
    G = n(429913),
    P = n(832163),
    w = n(820847),
    _ = n(862772),
    D = n(287809);
let V = s.createContext(void 0);
function F() {
    let e = s.useContext(V);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var U = n(109112),
    Y = n(761508),
    B = n(834730),
    W = n(858899),
    z = n(265872),
    H = n(980707),
    X = n(477782),
    K = n(821609),
    $ = n(663341),
    J = n(866665),
    q = n(408278),
    Q = n(34188),
    Z = n(173936),
    ee = n(365199),
    et = n(789645),
    en = n(442433),
    el = n(50268),
    ei = n(44724),
    ea = n(676924),
    er = n(957565),
    es = n(945810);
let eo = { enabled: !1 },
    ec = (0, es.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: eo,
        variations: { 0: eo, 1: { enabled: !0 } },
    });
function eu(e) {
    let { location: t } = e;
    return ec.useConfig({ location: t }).enabled;
}
var ed = n(695366),
    em = n(105292);
n(321073);
var eh = n(540185),
    eg = n(926268),
    ex = n(53788),
    ef = n(831453),
    ep = n(785866),
    ej = n(555704),
    ev = n(47675),
    eA = n(633075),
    eE = n(289173),
    eI = n(321191),
    eb = n(958805),
    eN = n(735321),
    ek = n(714889),
    eC = n(280450),
    eS = n(403362);
async function ey(e) {
    let t = e((0, eN.BF)());
    await eb.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var eT = n(652215);
function eL(e) {
    var t;
    let l,
        i,
        { className: a, activeTab: c } = e,
        { game: u, closeModal: d, trackAction: h } = F(),
        x = s.useRef(null),
        p = s.useRef(null),
        j = (0, el.A)({ id: u.id, label: em.intl.string(em.t.SHQGPj) }),
        v =
            ((t = u.id),
            (l = o.useContext(V)?.trackAction),
            (i = s.useCallback(() => {
                null != t &&
                    (l?.(S.GameProfileTrackActionActions.Feedback),
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("250440"),
                            n.e("568035"),
                            n.e("733771"),
                            n.e("946039"),
                            n.e("55266"),
                            n.e("627495"),
                        ]).then(n.bind(n, 651930));
                        return (n) => (0, r.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, l])),
            null == t
                ? null
                : (0, r.jsx)(X.Dr, {
                      id: "game-profile-something-wrong",
                      label: em.intl.string(em.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: ed.E },
                  })),
        A = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([eC.default], () => eC.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: eh.x.FAVORITE_GAMES,
                            addLabel: em.intl.string(em.t.fgmitg),
                            removeLabel: em.intl.string(em.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eg.HeartIcon,
                        },
                        {
                            type: eh.x.PLAYED_GAMES,
                            addLabel: em.intl.string(em.t["0xIVLR"]),
                            removeLabel: em.intl.string(em.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: ex.G,
                        },
                        {
                            type: eh.x.CURRENT_GAMES,
                            addLabel: em.intl.string(em.t.G0c4En),
                            removeLabel: em.intl.string(em.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: ef.H,
                        },
                        {
                            type: eh.x.WANT_TO_PLAY_GAMES,
                            addLabel: em.intl.string(em.t.UuBS4K),
                            removeLabel: em.intl.string(em.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ep._,
                        },
                    ],
                    [],
                ),
                a = (0, m.yK)([eI.A], () => (null == l ? [] : (eI.A.getUserProfile(l)?.widgets ?? [])), [l]),
                o = (0, ek.A)(),
                c = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...a].filter((e) => e instanceof eA.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eS.Vq).find((e) => t.has(e)) ?? null;
                }, [o, a, e]),
                u = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await ey((i) => {
                                let a = i.filter(eE.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eN.uA)(a))) return i;
                                    let n = { gameId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new eE.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new eE.Yy({ ...a, games: e });
                                }
                                var r = l;
                                let s = i.findIndex((e) => e.getUniqueKey() === r.getUniqueKey());
                                if (-1 === s) return [r, ...i];
                                let o = [...i];
                                return ((o[s] = r), o);
                            }),
                            null == l)
                        )
                            return;
                        let i = l;
                        (0, ev.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            gameId: t,
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                d = s.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == c ||
                            (await ey((n) =>
                                e
                                    ? n.some((e) => e instanceof eA.R && e.applicationId === c)
                                        ? n
                                        : [(t = new eA.R({ applicationId: c })), ...n]
                                    : ((t = n.find((e) => e instanceof eA.R && e.applicationId === c) ?? null),
                                      n.filter((e) => !(e instanceof eA.R && e.applicationId === c))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, ev.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [c],
                );
            if (null == l) return null;
            let h = null != e && (0, eN.XX)(e),
                g = [];
            if (null != c) {
                let e = a.some((e) => e instanceof eA.R && e.applicationId === c);
                g.push(
                    (0, r.jsx)(
                        X.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? em.intl.formatToPlainString(em.t.Ktb1n8, { name: n })
                                : em.intl.formatToPlainString(em.t.Xp6iZt, { name: n }),
                            action: () => d(!e),
                            leadingAccessory: { type: "icon", icon: ej.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of i) {
                    let n = a.filter(eE.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, eN.uA)(n);
                    g.push(
                        (0, r.jsx)(
                            X.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? em.intl.string(em.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(u),
        E = eu({ location: "GameProfileOverflowMenu" }),
        I = (0, m.bG)([P.A], () => P.A.getApplicationIdFromDetectableId(u.id)),
        b = (0, m.bG)([P.A], () => P.A.hasStorefrontForApplicationId(I), [I]),
        N = s.useCallback(() => {
            null != I && (0, ei.G)({ applicationId: I });
        }, [I]),
        k = s.useCallback(() => {
            null != I && (h(S.GameProfileTrackActionActions.GameShop), (0, ei.default)({ applicationId: I }), d());
        }, [I, h, d]),
        C = s.useCallback(() => d(!1), [d]),
        T = s.useCallback(() => {
            h(S.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eT.BVt.GAME_PROFILE(u.id)}`;
            (0, er.C)(e, () => {
                (0, W.P0)({ text: em.intl.string(em.t["+5kSoW"]), variant: "success" });
            });
        }, [u.id, h]);
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            c === y.COMMERCE &&
                (0, r.jsx)(ea.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: d,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != A &&
                c !== y.COMMERCE &&
                (0, r.jsx)(z.Y, {
                    targetElementRef: p,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(H.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, en.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.sidPSo),
                            onSelect: () => {},
                            children: (0, r.jsx)(X.rX, { children: A }),
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ...e,
                            ref: p,
                            children: (0, r.jsx)(K.$, {
                                icon: $.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: em.intl.string(em.t.sidPSo),
                            }),
                        }),
                }),
            b &&
                !E &&
                (0, r.jsx)(J.m, {
                    text: em.intl.string(em.t.apFNLU),
                    children: (0, r.jsx)(q.K, {
                        icon: Q.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.apFNLU),
                        onMouseDown: N,
                        onClick: k,
                    }),
                }),
            c !== y.COMMERCE &&
                (0, r.jsx)(J.m, {
                    text: em.intl.string(em.t.WqhZss),
                    children: (0, r.jsx)(q.K, {
                        icon: Z.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.WqhZss),
                        onClick: T,
                    }),
                }),
            (null != j || null != v) &&
                c !== y.COMMERCE &&
                (0, r.jsx)(z.Y, {
                    targetElementRef: x,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(H.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, en.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(X.rX, { children: v }), (0, r.jsx)(X.rX, { children: j })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)(J.m, {
                            text: em.intl.string(em.t["UKOtz+"]),
                            children: (0, r.jsx)("div", {
                                ...e,
                                ref: x,
                                children: (0, r.jsx)(q.K, {
                                    icon: ee.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": em.intl.string(em.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, r.jsx)(q.K, {
                icon: et.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: C,
                "aria-label": em.intl.string(em.t.cpT0Cq),
            }),
        ],
    });
}
let eR = { enabled: !1 },
    eM = (0, es.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eR,
        variations: { 0: eR, 1: { enabled: !0 } },
    });
function eO(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i } = n;
    if (
        !(function (e) {
            let { location: t } = e;
            return eM.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let a = em.intl.string(em.t["3xFZEo"]);
    return (0, r.jsx)(Y.V.Item, {
        id: y.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(y.COMMUNITIES),
        className: t,
        "aria-label": a,
        children: (0, r.jsx)(B.E, { variant: "text-md/medium", color: "none", children: a }),
    });
}
function eG(e) {
    let { className: t, navigation: n } = e,
        { game: l } = F();
    return (l.communityGuildIds?.length ?? 0) < 3 ? null : (0, r.jsx)(eO, { className: t, navigation: n });
}
var eP = n(661531),
    ew = n(331322),
    e_ = n(278416),
    eD = n(478016),
    eV = n(900797),
    eF = n(847374),
    eU = n(421773),
    eY = n(225647),
    eB = n(421108);
let eW = "text-md/medium",
    ez = [];
function eH(e) {
    let { label: t, chevron: n, socialLayerStorefront: l } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: n } = e,
                l = Object.values(n?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, eB.ZH)(n));
                }),
                i = (0, eB.tm)(l?.endsAt);
            return t && null != l && !i;
        })(l);
    return (0, r.jsxs)(ew.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, r.jsx)(e_.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eP.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, r.jsxs)(ew.B, {
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
function eX(e) {
    let { className: t, label: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: a, selectTab: o } = l,
        { storefront: c, selectedStorefrontPageIndex: u, selectStorefrontPage: d } = i,
        m = c?.pages ?? ez,
        h = s.useRef(null),
        { isHovered: g, setIsHovered: x, onMouseEnter: f, onMouseLeave: p, cancelTimers: j } = (0, eU.A)(100, 100),
        v = em.intl.string(em.t["J3/JCl"]),
        A = s.useCallback(
            (e) => {
                (j(), x(e));
            },
            [j, x],
        );
    return (0, r.jsx)(z.Y, {
        targetElementRef: h,
        shouldShow: g,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => A(!0),
        onRequestClose: () => A(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: p,
                children: (0, r.jsx)(H.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": v,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, r.jsx)(X.rX, {
                        children: m.map((e, t) => {
                            var n;
                            let l,
                                i = a === y.COMMERCE && t === u,
                                s =
                                    ((n = e.title),
                                    null != (l = (0, eY.A)(n?.trim())) && l.length > 0
                                        ? l
                                        : em.intl.formatToPlainString(em.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, r.jsx)(
                                X.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
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
        children: (e, l) => {
            let { isShown: s } = l,
                c = s ? eV.t : eF.a;
            return (0, r.jsx)(Y.V.Item, {
                ...e,
                id: y.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a === y.COMMERCE ? y.COMMERCE : void 0,
                onClick: (t) => {
                    (o(y.COMMERCE), e.onClick(t));
                },
                onMouseLeave: p,
                clickableRef: (e) => {
                    h.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": v,
                "aria-haspopup": "menu",
                children: (0, r.jsx)(B.E, {
                    variant: eW,
                    color: "none",
                    children: (0, r.jsx)(eH, {
                        label: n,
                        chevron: (0, r.jsx)(c, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function eK(e) {
    let { className: t, navigation: n, socialLayerStorefront: l } = e,
        { selectedTab: i, selectTab: a } = n,
        { hasCommerceTab: s, storefront: o } = l;
    if (!s) return null;
    let c = em.intl.string(em.t.apFNLU);
    return (o?.pages.length ?? 0) > 1
        ? (0, r.jsx)(eX, { className: t, label: c, navigation: n, socialLayerStorefront: l })
        : (0, r.jsx)(Y.V.Item, {
              id: y.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(y.COMMERCE),
              className: t,
              "aria-label": c,
              children: (0, r.jsx)(B.E, {
                  variant: eW,
                  color: "none",
                  children: (0, r.jsx)(eH, { label: c, socialLayerStorefront: l }),
              }),
          });
}
var e$ = n(510954);
function eJ(e) {
    let { navigation: t, socialLayerStorefront: n } = e,
        { game: l } = F(),
        { selectedTab: i, selectTab: a } = t,
        o = l.getIconURL(64),
        [c, u] = s.useState(null),
        d = s.useCallback(() => u(o), [o]),
        m = em.intl.string(em.t.qHmbyh);
    return (0, r.jsx)("div", {
        className: e$.wx,
        children: (0, r.jsxs)("div", {
            className: e$.ap,
            children: [
                (0, r.jsx)("div", {
                    className: e$.wE,
                    children:
                        null != o && o !== c
                            ? (0, r.jsx)("img", { src: o, alt: "", className: e$.FC, draggable: !1, onError: d })
                            : (0, r.jsx)(U._, { size: "md" }),
                }),
                (0, r.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: e$.vR,
                    children: [
                        (0, r.jsx)(Y.V.Item, {
                            id: y.OVERVIEW,
                            disableItemStyles: !0,
                            className: e$.Mf,
                            "aria-label": m,
                            children: (0, r.jsx)(B.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, r.jsx)(eG, { className: e$.Mf, navigation: t }),
                        (0, r.jsx)(eK, { className: e$.Mf, navigation: t, socialLayerStorefront: n }),
                    ],
                }),
                (0, r.jsx)(eL, { className: e$.HK, activeTab: i }),
            ],
        }),
    });
}
var eq = n(435558),
    eQ = n.n(eq),
    eZ = n(689175),
    e0 = n(448741),
    e1 = n(71393),
    e8 = n(309010),
    e2 = n(449054),
    e4 = n(60465),
    e3 = n(311043),
    e6 = n(636537),
    e5 = n(73153);
let e9 = {};
class e7 extends m.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eC.default);
    }
    getGuild(e) {
        return e9[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => e9[e]?.guild).filter(eS.Vq);
    }
    isFetching(e) {
        return e.some((e) => e9[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let n = e9[e];
            return (
                null == n ||
                "failed" === n.fetchState ||
                ("fetching" !== n.fetchState && (null == n.fetchedAt || t - n.fetchedAt >= 36e5))
            );
        });
    }
}
let te = new e7(e5.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e9[e] = { guild: e9[e]?.guild ?? null, fetchState: "fetching", fetchedAt: e9[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: n } = e,
                l = Date.now(),
                i = new Map(n.map((e) => [e.id, (0, e2.jE)(e)]));
            for (let e of t) e9[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: l };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e9[e] = { guild: e9[e]?.guild ?? null, fetchState: "failed", fetchedAt: e9[e]?.fetchedAt ?? null };
        },
    }),
    tt = new Map();
async function tn(e) {
    e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await e6.Bo.get({
                url: eT.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            n = t.body?.guilds ?? [];
        e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: n });
    } catch (t) {
        throw (e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
    }
}
async function tl(e) {
    let t = te.getStaleGuildIds(e),
        n = new Set();
    for (let t of e) {
        let e = tt.get(t);
        null != e && n.add(e);
    }
    if (t.length > 0) {
        let e = tn(t).finally(() => {
            for (let n of t) tt.get(n) === e && tt.delete(n);
        });
        for (let n of t) tt.set(n, e);
        n.add(e);
    }
    await Promise.all(n);
}
var ti = n(927813);
let ta = [];
function tr(e) {
    return e3.A.getGame(e)?.communityGuildIds ?? ta;
}
let ts = (0, m.UT)(te, {
    getQueryId: (e) => (tr(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => te.getGuilds(tr(e)),
    load: async (e) => {
        let t = tr(e);
        t.length > 0 && (await tl(t));
    },
    staleAfter: ti.A.Seconds.HOUR,
    failureStaleAfter: ti.A.Seconds.MINUTE,
});
var to = n(196765);
let tc = new Set(),
    tu = (0, to.v)((e) => ({
        gameId: null,
        excludedLocales: tc,
        toggleLocale: (t, n) => {
            e((e) => {
                let l = new Set(e.gameId === t ? e.excludedLocales : tc);
                return (l.has(n) ? l.delete(n) : l.add(n), { gameId: t, excludedLocales: l });
            });
        },
    }));
function td(e) {
    return tu((t) => (t.gameId === e ? t.excludedLocales : tc));
}
var tm = n(297264),
    th = n(37537),
    tg = n(714991),
    tx = n(486020),
    tf = n(240248);
function tp(e) {
    let { guildName: t, isMember: n, onClick: l, size: i, fullWidth: a } = e;
    return (0, r.jsx)(K.$, {
        variant: "secondary",
        size: i,
        fullWidth: a,
        text: n ? em.intl.string(em.t.cEnaWx) : em.intl.string(em.t.XpeFYr),
        "aria-label": n
            ? em.intl.formatToPlainString(em.t.lQqwQi, { guildName: t })
            : em.intl.formatToPlainString(em.t["8rL1QB"], { guildName: t }),
        onClick: l,
    });
}
var tj = n(799699),
    tv = n(827085);
function tA(e) {
    let { className: t } = e;
    return (0, r.jsx)(tj.Ay, { className: u()(tv.qV, t) });
}
function tE(e) {
    let { presenceCount: t, memberCount: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("div", {
              className: tv.kL,
              children: [
                  null != t &&
                      (0, r.jsxs)("div", {
                          className: tv.U9,
                          children: [
                              (0, r.jsx)("i", { className: tv._o }),
                              (0, r.jsx)(B.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != n &&
                      (0, r.jsxs)("div", {
                          className: tv.U9,
                          children: [
                              (0, r.jsx)("i", { className: tv.jk }),
                              (0, r.jsx)(B.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t.zRl6XR, { count: n }),
                              }),
                          ],
                      }),
              ],
          });
}
var tI = n(213098);
function tb() {
    return (0, r.jsxs)(tj.qT, {
        className: tI.uW,
        animationDelayMs: 300,
        children: [
            (0, r.jsx)(tj.Ay, { className: tI.dU, width: "30%" }),
            (0, r.jsx)(tj.qT, {
                className: tI.nV,
                children: (0, r.jsxs)("div", {
                    className: tI.hQ,
                    children: [(0, r.jsx)(tN, {}), (0, r.jsx)(tj.pv, {})],
                }),
            }),
        ],
    });
}
function tN() {
    return (0, r.jsxs)("div", {
        className: tI.To,
        children: [
            (0, r.jsx)(tj.Ay, { className: tI.QV }),
            (0, r.jsxs)("div", {
                className: tI.Yv,
                children: [
                    (0, r.jsx)(tj.Ay, { className: tI.Ag }),
                    (0, r.jsx)(tj.Ay, { className: tI.zl }),
                    (0, r.jsx)(tA, { className: tI.P2 }),
                ],
            }),
        ],
    });
}
function tk(e) {
    let { guild: t } = e,
        n = tx.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        a = null != n && l !== n,
        o = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, r.jsxs)("div", {
        className: tI._C,
        children: [
            a && (0, r.jsx)(tj.Ay, { className: tI.EQ }),
            (0, r.jsx)("img", {
                className: tI.$f,
                src: n,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: o,
                onError: o,
            }),
        ],
    });
}
function tC(e) {
    let { guild: t, presenceCount: n, memberCount: l } = e;
    return (0, r.jsxs)("div", {
        className: tI.To,
        children: [
            (0, r.jsx)(tk, { guild: t }),
            (0, r.jsxs)("div", {
                className: tI.yj,
                children: [
                    (0, r.jsxs)("div", {
                        className: tI.YS,
                        children: [
                            (0, r.jsx)(tg.A, { guild: t, size: 16 }),
                            (0, r.jsx)(tm.D, {
                                className: tI.J5,
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, tf.uJ)(t.description) &&
                        (0, r.jsx)(B.E, {
                            className: tI.h_,
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, r.jsx)(tE, { presenceCount: n, memberCount: l }),
                ],
            }),
        ],
    });
}
function tS(e) {
    let { guild: t, presenceCount: n, memberCount: l, button: i, className: a } = e;
    return (0, r.jsx)("div", {
        className: u()(tI.kL, a),
        children: (0, r.jsxs)("div", {
            className: tI.hQ,
            children: [(0, r.jsx)(tC, { guild: t, presenceCount: n, memberCount: l }), i],
        }),
    });
}
function ty() {
    let e = (0, th.c)("GameProfileGuildInvite"),
        {
            invite: t,
            hasDiscordWebsite: n,
            isCommunityInviteResolving: l,
            isMember: i,
            closeModal: a,
            trackAction: o,
        } = F(),
        c = s.useCallback(() => {
            null != t &&
                (o(S.GameProfileTrackActionActions.JoinServer),
                a(),
                e5.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: eT.BRT.APP }));
        }, [t, o, a]);
    return null == t || null == t.guild
        ? n && l
            ? (0, r.jsx)(tb, {})
            : null
        : (0, r.jsxs)("div", {
              className: tI.uW,
              children: [
                  (0, r.jsx)(tm.D, {
                      className: tI.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, r.jsx)(tS, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      button: (0, r.jsx)(tp, { guildName: t.guild.name, isMember: i, onClick: c, fullWidth: !0 }),
                  }),
              ],
          });
}
var tT = n(320448),
    tL = n(152594);
function tR(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, r.jsxs)("div", {
        className: tL.kL,
        "aria-busy": !0,
        children: [
            (0, r.jsxs)("div", {
                className: tL.wR,
                children: [(0, r.jsx)(tj.Ay, { className: tL.Iz, width: n }), l && (0, r.jsx)(tj.pv, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tM(e) {
    let { children: t, title: n, onClickViewAll: l, trailing: i } = e;
    return (0, r.jsxs)("div", {
        className: tL.kL,
        children: [
            (0, r.jsxs)("div", {
                className: tL.wR,
                children: [
                    (0, r.jsx)(tm.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, r.jsx)(K.$, {
                            size: "sm",
                            icon: tT._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: em.intl.string(em.t.budhsM),
                        }),
                    i,
                ],
            }),
            t,
        ],
    });
}
var tO = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tG = (0, to.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tP = n(876798),
    tw = n(481901),
    t_ = n(916099),
    tD = n(461353);
function tV() {
    let { layout: e, setLayout: t } = tG(),
        n = em.intl.string(em.t.VGRZh7),
        l = em.intl.string(em.t["NJFr+g"]);
    return (0, r.jsxs)("div", {
        className: tD.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, r.jsx)(J.m, {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(tP.k, {
                    icon: tw.d,
                    pressed: e === tO.GRID,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tO.GRID),
                }),
            }),
            (0, r.jsx)(J.m, {
                text: l,
                asContainer: !0,
                children: (0, r.jsx)(tP.k, {
                    icon: t_.ListBulletsIcon,
                    pressed: e === tO.LIST,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tO.LIST),
                }),
            }),
        ],
    });
}
var tF = n(37646),
    tU = n(846183);
function tY(e) {
    var t;
    let n,
        l,
        i,
        { locales: a, onClose: o } = e,
        { game: c } = F(),
        { options: u, toggleLocale: d } =
            ((t = c.id),
            (n = td(t)),
            (l = tu((e) => e.toggleLocale)),
            (i = s.useMemo(() => {
                let e;
                return (
                    (e = (0, em.getAvailableLocales)()),
                    a
                        .map((t) => {
                            if ("en-US" === t) return { locale: t, label: em.intl.string(em.t.LQLMGP) };
                            let n = e.find((e) => {
                                let { value: n } = e;
                                return n === t;
                            });
                            return { locale: t, label: null != n ? em.intl.string(n.localizedName) : t };
                        })
                        .sort((e, t) => e.label.localeCompare(t.label))
                );
            }, [a])),
            {
                options: s.useMemo(() => {
                    let e = a.filter((e) => !n.has(e)).length;
                    return i.map((t) => {
                        let { locale: l, label: i } = t,
                            a = !n.has(l);
                        return { locale: l, label: i, checked: a, disabled: a && 1 === e };
                    });
                }, [i, a, n]),
                toggleLocale: s.useCallback((e) => l(t, e), [l, t]),
            });
    return (0, r.jsx)(H.W, {
        "data-menu-migrated": !0,
        navId: "game-profile-communities-locale-filter",
        "aria-label": em.intl.string(em.t.OlOHDH),
        onClose: o,
        onSelect: void 0,
        children: u.map((e) => {
            let { locale: t, label: n, checked: l, disabled: i } = e;
            return (0, r.jsx)(X.sL, { id: t, label: n, checked: l, disabled: i, action: () => d(t) }, t);
        }),
    });
}
function tB(e) {
    let { locales: t } = e,
        n = s.useRef(null),
        l = em.intl.string(em.t.OlOHDH);
    return (0, r.jsx)("div", {
        className: tU.k,
        children: (0, r.jsx)(z.Y, {
            targetElementRef: n,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(tY, { locales: t, onClose: n });
            },
            children: (e) =>
                (0, r.jsx)(J.m, {
                    text: l,
                    asContainer: !0,
                    children: (0, r.jsx)(q.K, {
                        buttonRef: n,
                        icon: tF.U,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": l,
                        ...e,
                    }),
                }),
        }),
    });
}
var tW = n(939249),
    tz = n(762841);
function tH(e) {
    let { className: t, ariaLabel: n, onClick: l, children: i } = e;
    return (0, r.jsx)(tW.D, { className: u()(tz.v, t), onClick: l, "aria-label": n, children: i });
}
var tX = n(759020);
function tK(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsxs)(tH, {
        className: tX.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, r.jsxs)("div", {
                className: tX.OA,
                children: [
                    (0, r.jsx)(tk, { guild: t }),
                    (0, r.jsxs)("div", {
                        className: tX.FS,
                        children: [
                            (0, r.jsxs)("div", {
                                className: tX.YS,
                                children: [
                                    (0, r.jsx)(tg.A, { guild: t, size: 16 }),
                                    (0, r.jsx)(tm.D, {
                                        className: tX.J5,
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, tf.uJ)(t.description) &&
                                (0, r.jsx)(B.E, {
                                    className: tX.h_,
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: tX.Rn, children: (0, r.jsx)(tE, { presenceCount: n, memberCount: l }) }),
        ],
    });
}
var t$ = n(620387);
function tJ(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsx)(tj.qT, { className: t$.s7, animationDelayMs: t, children: (0, r.jsx)(tN, {}) });
}
function tq(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsxs)(tj.qT, {
        className: t$.fv,
        animationDelayMs: t,
        children: [
            (0, r.jsx)(tj.Ay, { className: t$.VR }),
            (0, r.jsxs)("div", {
                className: t$.hG,
                children: [
                    (0, r.jsx)(tj.Ay, { className: t$.t_ }),
                    (0, r.jsx)(tj.Ay, { className: t$.Aj }),
                    (0, r.jsx)(tj.Ay, { className: t$.ax }),
                ],
            }),
            (0, r.jsx)(tj.Ay, { className: t$.Ah }),
        ],
    });
}
function tQ(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsx)(tH, {
        className: t$.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, r.jsx)(tC, { guild: t, presenceCount: n, memberCount: l }),
    });
}
function tZ(e) {
    let { guild: t, layout: n } = e,
        { game: l, closeModal: i, trackAction: a, viewId: o } = F(),
        c = (0, m.bG)([e1.A], () => e1.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = s.useCallback(async () => {
            (a(S.GameProfileTrackActionActions.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await e2.Z2(t.id, {}, { joinSource: eT.Q4z.GAME_PROFILE_COMMUNITIES, loadId: o }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, e0._)(e);
                return;
            }
            let e = e8.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                e4.default.setGameProfilePendingReturn({
                    gameId: l.id,
                    channelId: e,
                    tab: y.COMMUNITIES,
                    source: S.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, o, l.id]),
        d = n === tO.LIST ? tK : tQ;
    return (0, r.jsx)(d, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        ariaLabel: c
            ? em.intl.formatToPlainString(em.t.AEfs1D, { guildName: t.name })
            : em.intl.formatToPlainString(em.t.TUZ50q, { guildName: t.name }),
        onClick: u,
    });
}
function t0() {
    var e;
    let t,
        n,
        { game: l } = F(),
        { data: i, isLoading: a } = ts(l.id),
        o = tG((e) => e.layout),
        {
            locales: c,
            filteredGuilds: u,
            showLocaleFilter: d,
        } = ((e = l.id),
        (t = td(e)),
        {
            locales: (n = s.useMemo(() => eQ().uniq((i ?? []).map((e) => e.preferredLocale).filter(eS.Vq)), [i])),
            filteredGuilds: s.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: n.length >= 2,
        }),
        m = o === tO.LIST,
        h = m ? tq : tJ,
        g = a && (null == i || 0 === i.length);
    return (0, r.jsxs)(eZ.Ch, {
        className: t$.XG,
        children: [
            (0, r.jsx)("div", { className: t$.xY, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: t$.uW,
                children: (0, r.jsx)(tM, {
                    title: em.intl.string(em.t.r6bvTh),
                    trailing: (0, r.jsxs)("div", {
                        className: t$.AA,
                        children: [d && (0, r.jsx)(tB, { locales: c }), (0, r.jsx)(tV, {})],
                    }),
                    children: (0, r.jsx)("div", {
                        className: m ? t$.p_ : t$.Vg,
                        children: g
                            ? eQ()
                                  .range(8)
                                  .map((e) => (0, r.jsx)(h, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, r.jsx)(tZ, { guild: e, layout: o }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var t1 = n(707554),
    t8 = n(369606),
    t2 = n(775602),
    t4 = n(21161),
    t3 = n(400492),
    t6 = n(541830),
    t5 = n(459746);
let t9 = "1552821538409939044";
var t7 = n(175213);
let ne = n(892799);
function nt(e) {
    let { ref: t } = e,
        { game: n } = F(),
        l = (function (e) {
            let [t] = s.useState(() => Math.random());
            return s.useMemo(() => {
                let n = e.getBannerURL(1400);
                if (null != n) return n;
                let l = e.screenshotUrls?.length ?? 0;
                return 0 === l ? null : e.getScreenshotURL(Math.floor(t * l), 1400);
            }, [1400, e, t]);
        })(n);
    return (0, tf.uJ)(l)
        ? null
        : (0, r.jsxs)("div", {
              ref: t,
              children: [
                  (0, r.jsx)("div", { className: t7.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, r.jsx)("div", { className: t7.N4 }),
              ],
          });
}
function nn() {
    let { game: e } = F(),
        t = (e.genres ?? []).map(t6.du).join(", ");
    return (0, tf.uJ)(t) ? null : (0, r.jsx)(B.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function nl(e) {
    let { rank: t } = e;
    return (0, r.jsxs)("div", {
        className: t7.Qc,
        children: [
            (0, r.jsx)(t8.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, r.jsx)(B.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function ni() {
    return (0, r.jsx)(na, { className: t7._M, imageClassName: t7.xe });
}
function na(e) {
    let { className: t, imageClassName: n } = e,
        { game: l } = F(),
        i = (0, r.jsx)(t5.Ay, { game: l, className: n, size: t5.wu.LARGE });
    return l.id !== t9
        ? (0, r.jsx)("div", { className: t, children: i })
        : (0, r.jsx)(nr, { className: t, children: i });
}
function nr(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(t4.x),
        i = (0, m.bG)([t2.Ay], () => t2.Ay.useReducedMotion),
        a = s.useRef({ count: 0, lastTime: 0 });
    return (0, r.jsx)(tW.D, {
        className: u()(n, t7.b3),
        "aria-label": em.intl.string(em.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = a.current,
                r = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((a.current = { count: r, lastTime: t }), 3 === r)) {
                if (((a.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, t3.Ak)("discodo");
            }
        },
        children: t,
    });
}
let ns = function () {
    let { game: e, isTwoColumn: t } = F(),
        n = e.name;
    return (0, r.jsxs)("div", {
        className: t7.ap,
        children: [
            t && (0, r.jsx)(na, { className: t7.Tf, imageClassName: t7.w$ }),
            (0, r.jsxs)("div", {
                className: t7.lu,
                children: [
                    null != e.l30Rank && (0, r.jsx)(nl, { rank: e.l30Rank }),
                    (0, r.jsxs)("div", {
                        className: t7.$,
                        children: [
                            (0, r.jsx)(tm.D, { variant: "heading-xxl/semibold", children: n }),
                            e.id === t9 &&
                                (0, r.jsx)("img", {
                                    src: ne,
                                    className: t7.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, r.jsx)(nn, {}),
                ],
            }),
        ],
    });
};
var no = n(638495),
    nc = n(871123),
    nu = n(439303),
    nd = n(317560),
    nm = n(467884),
    nh = n(197935),
    ng = n(761812);
function nx(e) {
    return e;
}
function nf(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ng.B, children: t });
}
function np(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        i = s.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    (e.preventDefault(), l(n, i));
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, r.jsx)(nh.A, {
              gap: "md",
              "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
              items: t,
              getItemKey: nx,
              disableFocusRingScope: !0,
              renderItem: (e, t, l) =>
                  (0, r.jsx)(nf, {
                      children: (0, r.jsx)(nm.Ay, {
                          positionInSection: l,
                          skuId: e,
                          variant: nm.s6.SMALL,
                          analyticsLocations: n,
                          onClick: i,
                          listItemProps: t,
                      }),
                  }),
          });
}
var nj = n(326369),
    nv = n(936785),
    nA = n(403581),
    nE = n(812095),
    nI = n(647474),
    nb = n(162536);
function nN(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, eB.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        a = i ? nA.t : t.Icon;
    return (0, r.jsx)(nI.A, {
        className: u()(nb.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, r.jsxs)("div", {
            className: nb.Qs,
            children: [
                null != a && (0, r.jsx)(a, { size: "xs", color: "currentColor", className: nb.Kk }),
                (0, r.jsx)(B.E, { variant: "text-sm/normal", color: "currentColor", children: (0, nE.U)(t.text) }),
            ],
        }),
    });
}
var nk = n(521058);
function nC() {
    let { storefrontPromotion: e } = F();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, tf.uJ)(a.headerText)) return null;
    let s = {
        Icon: (0, nv.LZ)(l?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, nv.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, r.jsx)(nN, { className: nk.v, promotion: s });
}
let nS = [0, 1, 2, 3],
    ny = { placement: nu.Ye.GAME_PROFILE };
function nT() {
    return (0, r.jsx)(tR, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, r.jsx)(nj.A, { children: nS.map((e) => (0, r.jsx)(nf, { children: (0, r.jsx)(nm.yf, {}) }, e)) }),
    });
}
function nL(e) {
    let { selectTab: t } = e,
        n = (0, no.k)(),
        {
            trackAction: l,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: a,
            hasCommerceTab: o,
            closeModal: c,
        } = F(),
        { analyticsLocations: u } = (0, p.Ay)([f.A.GAME_PROFILE]),
        d = s.useCallback(() => {
            if (i?.application != null) {
                if (o) return void t(y.COMMERCE);
                (l(S.GameProfileTrackActionActions.GameShop),
                    c(),
                    (0, ei.default)({ applicationId: i.application.id }));
            }
        }, [i, l, o, t, c]),
        m = s.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (l(S.GameProfileTrackActionActions.GameShopItem),
                    (0, nd.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: n,
                        onClose: () => {
                            let { pathname: e, search: n } = location;
                            (0, nc.rG)(e, n, t, a) && c();
                        },
                    }));
            },
            [l, c, u, i, n],
        );
    if (a) return (0, r.jsx)(nT, {});
    if (null == i) return null;
    let { skuIds: h } = i;
    return (0, r.jsxs)(tM, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, r.jsx)(nC, {}),
            (0, r.jsx)(nu.E9, {
                newValue: ny,
                children: (0, r.jsx)(np, { skuIds: h, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var nR = n(621466),
    nM = n(966697),
    nO = n(346055),
    nG = n(460905),
    nP = n(776231),
    nw = n(46054),
    n_ = n(58703),
    nD = n(317097),
    nV = n(155718),
    nF = n(387408),
    nU = n(731068),
    nY = n(59318),
    nB = n(320095),
    nW = n(708676),
    nz = n(383233),
    nH = n(998218);
let nX = /^#{1,3}\s+(.+)$/,
    nK = /^https?:\/\/\S+$/;
var n$ = n(158390),
    nJ = n(103348),
    nq = n(371794);
let nQ = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function nZ(e) {
    e5.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, nq.aP)({
                    url: eT.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: C.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(nJ.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (e5.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            e5.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        e5.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function n0(e) {
    let t = ((await e6.Bo.get({ url: eT.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !nQ.has(t),
    );
    e5.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let n1 = (0, m.UT)(T.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => T.A.getSimilarGames(e) ?? null,
    load: (e) => n0(e),
    retryConfig: { backoff: () => new n$.A(5 * ti.A.Millis.SECOND, 5 * ti.A.Millis.MINUTE) },
    failureStaleAfter: ti.A.Seconds.MINUTE,
});
async function n8(e, t) {
    e5.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await e6.Bo.get({ url: eT.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        e5.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, nF.A)((0, nB.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, nz._c)(e))
                            return e.components
                                .filter((e) => e.type === nV.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || nK.test(t.trim())
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
                    r = (function (e) {
                        if ((0, nz._c)(e)) {
                            let t = e.components.find((e) => e.type === nV.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, nU.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, nY.tT)(e.content_type));
                        if (null != t) return (0, nU.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, nY.XB)(e.content_type));
                        if (null != n) return (0, nU.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, nU.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, nU.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, nU.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(l),
                    { title: s, body: o } =
                        ((t = a.indexOf("\n")),
                        (n = (-1 === t ? a : a.slice(0, t)).match(nX)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    c = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, nz._c)(l)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let n = t.author?.name,
                                      l = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      r = t.url,
                                      s = null != t.color ? (0, nD.$k)(t.color, !0) : void 0;
                                  if (null != n || null != i || null != r)
                                      return {
                                          authorName: n,
                                          authorIconUrl: l,
                                          providerName: i,
                                          providerIconUrl: a,
                                          url: r,
                                          color: s,
                                      };
                              })(l);
                return {
                    id: l.id,
                    media: r,
                    title: s,
                    body: o,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: c,
                    embedSource: u,
                    poll: l.poll,
                };
            }),
            channelId: l.channel_id ?? void 0,
            guildId: l.guild_id ?? void 0,
        });
    } catch (t) {
        e5.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var n2 = n(284009),
    n4 = n.n(n2),
    n3 = n(376728),
    n6 = n(976860);
async function n5(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    n4()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let o = e1.A.getGuild(n);
    if (o?.joinedAt == null)
        if (null == s || s.has(eT.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e2.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eT.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await n3.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, n6.pX)(eT.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var n9 = n(806244),
    n7 = n(165648);
function le(e, t) {
    return nw.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function lt(e) {
    return e.id;
}
function ln() {
    return (0, r.jsxs)(tj.qT, {
        className: n9.s7,
        children: [
            (0, r.jsx)(tj.Ay, { className: n9.o$ }),
            (0, r.jsxs)("div", {
                className: n9.UF,
                children: [(0, r.jsx)(tj.Ay, { className: n9.iX }), (0, r.jsx)(tj.Ay, { className: n9.jt })],
            }),
        ],
    });
}
function ll(e, t) {
    var n;
    let l,
        i = (0, nP.kr)(364 * (0, nP.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = nH.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function li(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, a] = s.useState(!1),
        o = s.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, r.jsx)(nM.y, {
              readyState: i ? eT.Rv1.READY : eT.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, r.jsx)("img", {
                  src: n,
                  className: n9.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: o,
              }),
          });
}
function la(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nR.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nR.vq)(e.target, HTMLSpanElement) && (0, nR.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        d = null != c ? ll(c, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, r.jsx)(tW.D, {
              ...i,
              className: n9.Nr,
              onClick: a,
              children: (0, r.jsxs)(nO.M, {
                  className: n9.zI,
                  children: [
                      null != m.url &&
                          (0, r.jsx)(B.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: n9.Ow,
                              children: m.url,
                          }),
                      (0, r.jsxs)("div", {
                          className: n9._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, r.jsxs)("div", {
                                      className: n9.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, r.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: n9.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, r.jsx)(B.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, r.jsx)("div", {
                                      className: n9.ax,
                                      children: (0, r.jsx)(li, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, r.jsx)(tm.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: n9.DD,
                                      children: le(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, r.jsxs)("div", {
                                      className: u()(n9.h_, n7.PT),
                                      children: [le(t.body, n), (0, r.jsx)("div", { className: n9.fm })],
                                  }),
                              (0, r.jsxs)("div", {
                                  className: n9.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, r.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: n9.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, r.jsxs)(B.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, n_.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, r.jsxs)("div", {
                                              className: n9.a5,
                                              children: [
                                                  (0, r.jsx)(nG.n, { size: "xs", color: "currentColor" }),
                                                  (0, r.jsx)(B.E, {
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
let lr = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, r.jsxs)(nO.M, {
        className: n9.zI,
        children: [
            null != t.title &&
                (0, r.jsx)(tm.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: n9.DD,
                    children: le(t.title, n),
                }),
            t.body.length > 0 &&
                (0, r.jsxs)("div", {
                    className: u()(n9.h_, n7.PT),
                    children: [le(t.body, n), (0, r.jsx)("div", { className: n9.fm })],
                }),
            (0, r.jsxs)("div", {
                className: n9.ov,
                children: [
                    (0, r.jsx)(B.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, n_.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, r.jsxs)("div", {
                            className: n9.a5,
                            children: [
                                (0, r.jsx)(nG.n, { size: "xs", color: "currentColor" }),
                                (0, r.jsx)(B.E, {
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
function ls(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nR.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nR.vq)(e.target, HTMLSpanElement) && (0, nR.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        u = null != c ? ll(c, o) : void 0;
    return (0, r.jsxs)(tW.D, {
        ...i,
        className: n9.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, r.jsx)("div", {
                    className: n9.Vl,
                    children: (0, r.jsx)(li, { message: t, src: u, aspectRatio: o }),
                }),
            (0, r.jsx)(lr, { message: t, channelId: n }),
        ],
    });
}
function lo(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        a = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, r.jsx)(tW.D, {
        ...l,
        className: n9.Nr,
        onClick: a,
        children: (0, r.jsxs)(nO.M, {
            className: n9.zI,
            children: [
                (0, r.jsx)(tm.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: n9.MH,
                    children: i.question.text,
                }),
                (0, r.jsxs)("div", {
                    className: n9.xd,
                    children: [
                        o.map((e) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className: n9.Nf,
                                    children: (0, r.jsx)(B.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: n9.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        c > 0 &&
                            (0, r.jsx)(B.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: n9.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: n9.ov,
                    children: (0, r.jsx)(B.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, nW.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function lc(e) {
    return null != e.message.poll
        ? (0, r.jsx)(lo, { ...e })
        : null != e.message.embedSource
          ? (0, r.jsx)(la, { ...e })
          : (0, r.jsx)(ls, { ...e });
}
let lu = s.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: n } = (0, p.Ay)(),
        { game: l, invite: i, hasDiscordWebsite: a, closeModal: o, trackAction: c } = F(),
        u = l.id,
        {
            messages: d,
            guildId: h,
            channelId: g,
            loading: x,
            hasFetched: f,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, m.cf)([T.A], () => ({
                data: null != e ? T.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && T.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && T.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || n || T.A.isAnnouncementsFetching(e) || n8(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(u),
        j = s.useCallback(() => {
            let e = i?.guild?.id ?? h;
            null != e &&
                null != g &&
                (c(S.GameProfileTrackActionActions.Announcements),
                e4.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                o(),
                n5({ invite: i, guildId: e, channelId: g, analyticsLocationStack: n }));
        }, [c, o, t, i, h, g, n, u]),
        v = s.useCallback(
            (e) => {
                let l = i?.guild?.id ?? h;
                null != l &&
                    null != g &&
                    (c(S.GameProfileTrackActionActions.AnnouncementsItem),
                    e4.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                    o(),
                    n5({ invite: i, guildId: l, channelId: g, messageId: e, analyticsLocationStack: n }));
            },
            [c, o, t, i, h, g, n, u],
        ),
        A = null != g && d.length > 0;
    return (!f || x) && a
        ? (0, r.jsx)(tR, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, r.jsx)(nj.A, {
                  gap: 16,
                  children: eQ()
                      .range(3)
                      .map((e) => (0, r.jsx)(ln, {}, e)),
              }),
          })
        : A
          ? (0, r.jsx)(tM, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: j,
                children: (0, r.jsx)(nh.A, {
                    gap: 16,
                    items: d,
                    getItemKey: lt,
                    itemClassName: n9.hu,
                    renderItem: (e, t) =>
                        (0, r.jsx)(lc, { message: e, channelId: g, onCardClick: v, listItemProps: t }, e.id),
                }),
            })
          : null;
});
var ld = n(505779);
(n(323874), n(14289), n(35956));
var lm = n(989441);
let lh = {
        appStore: {
            websiteCategories: [ld.V1.IPHONE, ld.V1.IPAD],
            websiteHostnames: ld.FU,
            distributor: lm.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://${ld.FU["0"]}/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [ld.V1.ANDROID],
            websiteHostnames: ld.SX,
            distributor: lm.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://${ld.SX["0"]}/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    lg = new Set(
        Object.values(lh).flatMap((e) => {
            let { websiteCategories: t } = e;
            return t;
        }),
    );
function lx(e, t) {
    let n;
    return (
        (function (e, t) {
            for (let n of t.websiteCategories) {
                let l = e.websites.find((e) => {
                    let { category: l, url: i } = e;
                    if (l !== n) return !1;
                    try {
                        let e = new URL(i);
                        return (
                            ("http:" === e.protocol || "https:" === e.protocol) &&
                            t.websiteHostnames.includes(e.hostname)
                        );
                    } catch {
                        return !1;
                    }
                });
                if (null != l) return l;
            }
            return null;
        })(e, t) ??
        (null != (n = e.thirdPartySkus.find((e) => e.distributor === t.distributor)?.id)
            ? { category: t.websiteCategories[0], url: t.buildUrl(n) }
            : null)
    );
}
var lf = n(808380);
let lp = [lf.Y.DESKTOP, "mobile", lf.Y.XBOX, lf.Y.PLAYSTATION, lf.Y.NINTENDO, lf.Y.ROBLOX];
var lj = n(28863),
    lv = n(975807),
    lA = n(194362);
function lE() {
    let { game: e, trackAction: t } = F(),
        n = s.useCallback(async () => {
            t(S.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, lA.a)(eT.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, lv.A)(e);
        }, [t]),
        l = s.useCallback((e) => (0, r.jsx)(lj.Anchor, { onClick: n, children: e }), [n]);
    return e.linkedApplications?.some((e) => e.type === nV.Mh.OFFICIAL)
        ? null
        : (0, r.jsx)(B.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: l }),
          });
}
var lI = n(998445),
    lb = n(274997),
    lN = n(80500),
    lk = n(319745),
    lC = n(488225),
    lS = n(967492),
    ly = n(72265),
    lT = n(454346),
    lL = n(341904),
    lR = n(423438),
    lM = n(610509),
    lO = n(575888),
    lG = n(924895),
    lP = n(37948),
    lw = n(693558);
let l_ = { size: "xs", colorClass: lw.w };
function lD(e) {
    let { website: t } = e,
        { trackAction: n } = F(),
        l = (0, lP.A)(),
        {
            action: i,
            icon: a,
            title: o,
        } = (function (e, t) {
            switch (e.category) {
                case ld.V1.OFFICIAL:
                    return {
                        icon: (0, r.jsx)(lI.GlobeEarthIcon, { ...t }),
                        action: S.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case ld.V1.TWITTER:
                    return {
                        icon: (0, r.jsx)(lb.p, { ...t }),
                        action: S.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case ld.V1.YOUTUBE:
                    return {
                        action: S.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, r.jsx)(lN.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case ld.V1.FACEBOOK:
                    return {
                        icon: (0, r.jsx)(lk.Z, { ...t }),
                        action: S.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case ld.V1.INSTAGRAM:
                    return {
                        icon: (0, r.jsx)(lC.L, { ...t }),
                        action: S.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case ld.V1.BLUESKY:
                    return {
                        icon: (0, r.jsx)(lS.a, { ...t }),
                        action: S.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case ld.V1.REDDIT:
                    return {
                        icon: (0, r.jsx)(ly.T, { ...t }),
                        action: S.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case ld.V1.TWITCH:
                    return {
                        icon: (0, r.jsx)(lT.a, { ...t }),
                        action: S.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                case ld.V1.ITCH:
                    return {
                        icon: (0, r.jsx)(lL.x, { ...t }),
                        action: S.GameProfileTrackActionActions.ItchLink,
                        title: em.intl.string(em.t.nOrtg9),
                    };
                case ld.V1.WIKIA:
                    return {
                        icon: (0, r.jsx)(lR.g, { ...t }),
                        action: S.GameProfileTrackActionActions.FandomLink,
                        title: em.intl.string(em.t.xDtQAQ),
                    };
                case ld.V1.IPHONE:
                case ld.V1.IPAD:
                    return {
                        icon: (0, r.jsx)(lM.z, { ...t }),
                        action: S.GameProfileTrackActionActions.AppStoreLink,
                        title: em.intl.string(em.t.LVy7Ug),
                    };
                case ld.V1.ANDROID:
                    return {
                        icon: (0, r.jsx)(lO.O, { ...t }),
                        action: S.GameProfileTrackActionActions.GooglePlayStoreLink,
                        title: em.intl.string(em.t.V6rllO),
                    };
                case ld.V1.ROBLOX:
                    return {
                        icon: (0, r.jsx)(lG.H, { ...t }),
                        action: S.GameProfileTrackActionActions.RobloxStoreLink,
                        title: em.intl.string(em.t["pJ+P+h"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, l_),
        c = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, r.jsx)(J.m, {
        text: o,
        children: (0, r.jsx)(tW.D, { onClick: c, className: lw.y, title: o, children: a }),
    });
}
var lV = n(31300),
    lF = n(646270),
    lU = n(802516),
    lY = n(22363),
    lB = n(418524);
let lW = {
    [lf.Y.DESKTOP]: lV.k,
    mobile: lF.u,
    [lf.Y.XBOX]: lU.Y,
    [lf.Y.PLAYSTATION]: lY.X,
    [lf.Y.NINTENDO]: lB.M,
    [lf.Y.ROBLOX]: lG.H,
};
function lz(e) {
    let { platform: t } = e,
        n = (function (e) {
            switch (e) {
                case lf.Y.DESKTOP:
                    return em.intl.string(em.t.KT6uCJ);
                case "mobile":
                    return em.intl.string(em.t["0DvssQ"]);
                case lf.Y.XBOX:
                    return em.intl.string(em.t.DDWUJp);
                case lf.Y.PLAYSTATION:
                    return em.intl.string(em.t.fzMz2s);
                case lf.Y.NINTENDO:
                    return em.intl.string(em.t.AMW8je);
                case lf.Y.ROBLOX:
                    return em.intl.string(em.t.MPURhG);
            }
        })(t),
        l = lW[t];
    return (0, r.jsx)(
        J.m,
        {
            text: n,
            ariaHidden: !0,
            children: (0, r.jsx)("span", { role: "img", "aria-label": n, children: (0, r.jsx)(l, { size: "xs" }) }),
        },
        t,
    );
}
var lH = n(424994),
    lX = n(623828);
function lK() {
    return (0, r.jsx)(B.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let l$ = function () {
    let { game: e } = F(),
        t = (0, th.c)("GameProfileGameDetails"),
        n = s.useMemo(() => e.genres.map(t6.du).join(", "), [e]),
        l = e.getCompanyByRole(nV.wk.PUBLISHER),
        i = e.getCompanyByRole(nV.wk.DEVELOPER),
        a = l.map((e) => e.name).join(", "),
        o = i.map((e) => e.name).join(", "),
        c = e.firstReleaseDate,
        u = s.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(lf.Y.MACOS) || t.has(lf.Y.LINUX)) && t.add(lf.Y.DESKTOP);
            let n = t.has(lf.Y.IOS) || t.has(lf.Y.ANDROID);
            return lp.filter((e) => ("mobile" === e ? n : t.has(e)));
        }, [e.platforms]),
        d = s.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return ld.pF.includes(t) && !lg.has(t);
                }),
                n = Object.values(lh)
                    .map((t) => lx(e, t))
                    .filter(eS.Vq);
            return t.sort((e, t) => ld.pF.indexOf(e.category) - ld.pF.indexOf(t.category)).concat(n);
        }, [e]),
        m = !(0, tf.uJ)(n),
        h = !(0, tf.uJ)(a),
        g = !(0, tf.uJ)(o),
        x = !(0, tf.uJ)(c),
        f = u.length > 0,
        p = d.length > 0 && !d.every((e) => (0, tf.uJ)(e.url));
    return (0, r.jsxs)("div", {
        className: lX.uW,
        children: [
            (0, r.jsx)("div", {
                className: lX.Gf,
                children: (0, r.jsx)(tm.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: lX.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: lX.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
                            }),
                            m
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lX.Gu,
                                      children: n,
                                  })
                                : (0, r.jsx)(lK, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lX.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== l.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
                            }),
                            h
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lX.Gu,
                                      children: a,
                                  })
                                : (0, r.jsx)(lK, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lX.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== i.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            g
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lX.Gu,
                                      children: o,
                                  })
                                : (0, r.jsx)(lK, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lX.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            x
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lX.Gu,
                                      children: n_.i$(new Date(c), "LL"),
                                  })
                                : (0, r.jsx)(lK, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lX.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            f
                                ? (0, r.jsx)("div", {
                                      className: lX.Gu,
                                      children: u.map((e) => (0, r.jsx)(lz, { platform: e }, e)),
                                  })
                                : (0, r.jsx)(lK, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lX.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, r.jsx)("div", {
                                      className: lX.Gu,
                                      children: d.map((e) => (0, r.jsx)(lD, { website: e }, e.url)),
                                  })
                                : (0, r.jsx)(lK, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lX.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: lX.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: lH.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: lX.OQ, children: (0, r.jsx)(lE, {}) }),
        ],
    });
};
var lJ = n(141628),
    lq = n(289363),
    lQ = n(793919);
function lZ() {
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: lQ.uW,
        children: [
            (0, r.jsx)(tj.Ay, { className: lQ.dU, width: "30%" }),
            (0, r.jsxs)(tj.qT, {
                className: lQ.nV,
                children: [
                    (0, r.jsx)("div", { className: lQ.sB, children: (0, r.jsx)(lq.default, { isLoading: !0 }) }),
                    (0, r.jsxs)("div", {
                        className: lQ.hQ,
                        children: [
                            (0, r.jsxs)("div", {
                                className: lQ.Yv,
                                children: [(0, r.jsx)(tj.Ay, { width: "55%" }), (0, r.jsx)(tj.Ay, { width: "85%" })],
                            }),
                            (0, r.jsx)(tj.pv, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function l0(e) {
    let { analyticsLocations: t } = e,
        n = (0, th.c)("GameProfileLinkAccount"),
        {
            trackAction: l,
            fetchedAuthorization: i,
            hasAlreadyLinked: a,
            canStartAuthorization: o,
            startAuthorization: c,
            connectionApp: u,
            hasOfficialApplication: d,
            officialApplicationFetchFailed: h,
        } = F(),
        g = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        x = s.useCallback(() => {
            (l(S.GameProfileTrackActionActions.LinkAccount), c({ analyticsLocations: t }));
        }, [l, c, t]);
    return !d || h || null == g
        ? null
        : null == u || (o && !i)
          ? (0, r.jsx)(lZ, {})
          : !o || a
            ? null
            : (0, r.jsxs)("div", {
                  className: lQ.uW,
                  children: [
                      (0, r.jsx)(tm.D, {
                          className: lQ.Gf,
                          variant: n ? "text-md/medium" : "heading-sm/semibold",
                          color: n ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, r.jsxs)("div", {
                          className: lQ.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: lQ.sB,
                                  children: (0, r.jsx)(lq.default, { application: u }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: lQ.hQ,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: lQ.FS,
                                          children: [
                                              (0, r.jsx)(tm.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, r.jsx)(B.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: em.intl.string(em.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(K.$, {
                                          variant: "secondary",
                                          icon: lJ.A,
                                          text: em.intl.string(em.t.jynBQ5),
                                          onClick: x,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
}
var l1 = n(80687),
    l8 = n(534573),
    l2 = n(248643),
    l4 = n(256905),
    l3 = n(44788),
    l6 = n(191096),
    l5 = n(90721),
    l9 = n(635377);
let l7 = new (n.n(l9)())({ max: 100 });
function ie() {
    let e = new Map();
    return (l7.forEach((t, n) => e.set(n, t)), e);
}
var it = n(140128);
function il(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function ii(e, t) {
    return (0, l8.Ec)(e, { size: t, keepAspectRatio: !0, format: tx.QB ? "webp" : null });
}
let ia = s.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            { dimensions: i, recordDimensions: a } = (function () {
                let [e, t] = s.useState(ie);
                return {
                    dimensions: e,
                    recordDimensions: s.useCallback(
                        (e, n) => {
                            let l = (function (e, t) {
                                if (
                                    !Number.isFinite(e.width) ||
                                    !Number.isFinite(e.height) ||
                                    e.width <= 0 ||
                                    e.height <= 0
                                )
                                    return;
                                if (null == t) return e;
                                let n = t / Math.max(e.width, e.height);
                                return {
                                    width: Math.max(1, Math.round(e.width * n)),
                                    height: Math.max(1, Math.round(e.height * n)),
                                };
                            })(n, void 0);
                            if (null == l) return;
                            let i = l7.get(e) ?? l;
                            (l7.set(e, i),
                                t((t) => {
                                    let n = t.get(e);
                                    return n?.width === i.width && n.height === i.height ? t : new Map(t).set(e, i);
                                }));
                        },
                        [void 0],
                    ),
                };
            })(),
            o = i.get(t),
            c = null != o && o.height > o.width,
            d = s.useCallback(
                (e) => {
                    null != e &&
                        0 !== e.naturalWidth &&
                        0 !== e.naturalHeight &&
                        a(t, { width: e.naturalWidth, height: e.naturalHeight });
                },
                [t, a],
            ),
            m = s.useCallback((e) => d(e.currentTarget), [d]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    ref: d,
                    src: ii(t, 106),
                    className: u()(it.r4, !c && it.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: m,
                }),
                (0, r.jsx)("img", { ref: d, src: ii(t, 900), className: u()(it.c8, c && it.D7, l), alt: n, onLoad: m }),
            ],
        });
    }),
    ir = s.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: i, isPlaying: a, onSelect: o, gameName: c, listItemProps: d } = e,
            m = s.useCallback(() => o(l), [o, l]),
            h = d?.tabIndex;
        return (0, r.jsx)(tW.D, {
            ...d,
            className: u()(it.JS, i && it.Y4),
            onClick: m,
            children: (0, r.jsxs)("div", {
                className: it.ub,
                children: [
                    (0, r.jsx)("img", {
                        src: ii("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: it.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: c }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, r.jsx)("div", {
                            className: it.UZ,
                            children: (0, r.jsx)(l1.D, { playing: i && a, size: "sm", tabIndex: h }),
                        }),
                ],
            }),
        });
    }),
    is = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: i,
                mediaPlayerRef: a,
                onPlay: o,
                onPause: c,
                onFullscreenChange: u,
            } = e,
            d = s.useRef(null);
        return (
            (0, l5.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    !n && (0, r.jsx)("canvas", { ref: d, className: it.HW, "aria-hidden": "true" }),
                    (0, r.jsx)("div", {
                        className: it.tN,
                        children: (0, r.jsx)(l2.A, {
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
                            renderLinkComponent: l3.bU,
                            onPlay: o,
                            onPause: c,
                            onFullscreenChange: u,
                            mediaPlayerClassName: it.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function io() {
    let { game: e, trackAction: t } = F(),
        [n, l] = s.useState(0),
        [i, a] = s.useState(null),
        [o, c] = s.useState(e.screenshotUrls),
        u = s.useRef(null),
        d = s.useRef(null),
        h = (0, m.bG)([t2.Ay], () => t2.Ay.useReducedMotion),
        { obscured: g } = (0, l6.I3)();
    o !== e.screenshotUrls && (c(e.screenshotUrls), l(0));
    let x = s.useMemo(
            () => [
                ...(e.trailers ?? []).map((e) => {
                    let t = (0, nq.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, nq.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(e.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [e.trailers, e.screenshotUrls],
        ),
        f = s.useMemo(() => x.map((e, t) => ({ item: e, index: t })), [x]),
        p = x.length > 0 ? Math.min(n, x.length - 1) : 0,
        j = x[p],
        v = j?.type === "VIDEO",
        A = s.useCallback(
            (e) => {
                let t = x[p],
                    n = x[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? a(t.url) : a(null), l(e));
            },
            [x, p],
        ),
        [E, I] = s.useState(!1),
        b = s.useRef(null),
        N = s.useCallback(() => {
            t(v ? S.GameProfileTrackActionActions.ClickTrailer : S.GameProfileTrackActionActions.ClickImage);
            let e = u.current,
                n = b.current,
                i = null != e && !e.paused,
                a = e?.muted ?? !0,
                r = e?.currentTime ?? 0;
            n?.setPlay(!1);
            let s = x.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === p;
                    return { ...e, autoPlay: !!n && i, autoMute: !n || a, initialTimeSec: n ? r : void 0, videoRef: d };
                }
                return e;
            });
            (0, l4.R)({
                items: s,
                startingIndex: p,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: l,
                onClose: () => {
                    let e = d.current,
                        t = b.current,
                        n = null != e ? !e.paused : i;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        I(n));
                },
            });
        }, [t, x, p, v]),
        k = s.useCallback(() => I(!0), []),
        C = s.useCallback(() => I(!1), []),
        y = s.useCallback(() => a(null), []),
        T = s.useCallback(
            (e) => {
                e && N();
            },
            [N],
        );
    return 0 === x.length
        ? null
        : (0, r.jsxs)("div", {
              className: it.kL,
              children: [
                  v
                      ? (0, r.jsx)("div", {
                            className: it.ND,
                            children: (0, r.jsx)(
                                is,
                                {
                                    item: j,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: u,
                                    mediaPlayerRef: b,
                                    onPlay: k,
                                    onPause: C,
                                    onFullscreenChange: T,
                                },
                                `${p}-${j.url}`,
                            ),
                        })
                      : (0, r.jsxs)("div", {
                            className: it.wp,
                            children: [
                                null != i &&
                                    !h &&
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: it.Jy,
                                            onAnimationEnd: y,
                                            children: (0, r.jsx)(ia, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, r.jsx)("div", { className: it.QN }),
                                (0, r.jsx)(tW.D, {
                                    className: it.gv,
                                    onClick: N,
                                    children: (0, r.jsx)("div", {
                                        className: it.cs,
                                        children: (0, r.jsx)(
                                            ia,
                                            {
                                                url: j.url,
                                                className: it.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            j.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  (0, r.jsx)(nh.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      items: f,
                      getItemKey: il,
                      renderItem: (t, n) => {
                          let { item: l, index: i } = t;
                          return (0, r.jsx)(
                              ir,
                              {
                                  item: l,
                                  index: i,
                                  isPlaying: E,
                                  isSelected: i === p,
                                  onSelect: A,
                                  gameName: e.name,
                                  listItemProps: n,
                              },
                              `${i}-${l.url}`,
                          );
                      },
                  }),
              ],
          });
}
var ic = n(49381),
    iu = n(223273);
function id(e, t, n) {
    if (null == e || null == t || t < 10) return iu.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? iu.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? iu.vI.VERY_POSITIVE
              : iu.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return iu.vI.MOSTLY_POSITIVE;
    if (e >= 40) return iu.vI.MIXED;
    if (e >= 20) return iu.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return iu.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return iu.vI.VERY_NEGATIVE;
    return iu.vI.OVERWHELMINGLY_NEGATIVE;
}
var im = n(792216);
let ih = {
    appStore: { getTitle: () => em.intl.string(em.t.LVy7Ug), action: S.GameProfileTrackActionActions.AppStoreReviews },
    googlePlay: {
        getTitle: () => em.intl.string(em.t.V6rllO),
        action: S.GameProfileTrackActionActions.GooglePlayReviews,
    },
};
function ig(e) {
    switch (e) {
        case iu.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case iu.vI.OVERWHELMINGLY_POSITIVE:
        case iu.vI.VERY_POSITIVE:
        case iu.vI.POSITIVE:
        case iu.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case iu.vI.MIXED:
            return "steam-review-text-mixed";
        case iu.vI.MOSTLY_NEGATIVE:
        case iu.vI.NEGATIVE:
        case iu.vI.VERY_NEGATIVE:
        case iu.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var ix =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    ip = n(778591);
function ij(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        a = i * l;
    return (0, r.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - i) * 360) / 2}deg)` },
        children: (0, r.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${a} ${l - a}`,
        }),
    });
}
var iv = n(315189);
let iA = { appStore: lM.z, googlePlay: lO.O };
function iE(e) {
    let { review: t } = e,
        { trackAction: n } = F(),
        l = (0, lP.A)(),
        i = iA[t.key],
        { action: a, url: o } = t,
        c = s.useCallback(() => {
            (n(a), l(o));
        }, [a, l, n, o]);
    return (0, r.jsx)(tW.D, {
        onClick: c,
        className: iv.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, r.jsxs)("div", {
            className: iv.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: iv.hU,
                    children: [
                        (0, r.jsx)(i, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tm.D, { variant: "heading-sm/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iv.nK,
                    children: [
                        (0, r.jsx)(B.E, {
                            variant: "text-xs/medium",
                            color: "text-strong",
                            className: iv.yX,
                            children: t.ratingText,
                        }),
                        (0, r.jsx)(B.E, {
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
function iI(e) {
    let { url: t, title: n, rating: l, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: o } = F(),
        c = (0, lP.A)(),
        u = id(l, i, "recent" === a),
        d = ig(u),
        m = s.useCallback(() => {
            (o(S.GameProfileTrackActionActions.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, r.jsx)(tW.D, {
        onClick: m,
        className: iv.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, r.jsxs)("div", {
            className: iv.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: iv.hU,
                    children: [
                        (0, r.jsx)(ic.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tm.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, r.jsx)(
                    J.m,
                    {
                        text:
                            u === iu.vI.NO_USER_REVIEWS
                                ? em.intl.string(em.t.CLMt8J)
                                : em.intl
                                      .format(
                                          "recent" === a
                                              ? em.t.TzvC0k
                                              : "localized" === a
                                                ? em.t.EOfrwm
                                                : em.t["lzANJ/"],
                                          { rating: l, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, r.jsxs)("div", {
                            className: iv.nK,
                            children: [
                                (0, r.jsx)(B.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: iv.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case iu.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case iu.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case iu.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case iu.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case iu.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case iu.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case iu.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case iu.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case iu.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case iu.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== iu.vI.NO_USER_REVIEWS &&
                                    (0, r.jsx)(B.E, {
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
function ib(e) {
    let { url: t } = e,
        { game: n, trackAction: l } = F(),
        { reviews: i } = n,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = a.tier,
        c = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (c <= 0 || u <= 0) && null == o,
        m = (0, lP.A)(),
        h = s.useCallback(() => {
            (l(S.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, l, t]);
    return (0, r.jsx)(tW.D, {
        onClick: h,
        className: iv.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, r.jsxs)("div", {
            className: iv.Ur,
            children: [
                (0, r.jsx)(tm.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, r.jsxs)("div", {
                    className: iv.WA,
                    children: [
                        null != o ? (0, r.jsx)(iN, { tier: o }) : null,
                        null != o && c > 0 && u > 0 ? (0, r.jsx)(ik, { rating: c, tier: o }) : null,
                        d
                            ? (0, r.jsx)(B.E, {
                                  variant: "text-xs/medium",
                                  color: ig(iu.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function iN(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case ix.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case ix.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case ix.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case ix.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case ix.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case ix.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case ix.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case ix.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, r.jsx)(
        J.m,
        {
            text: n,
            children: (0, r.jsx)("div", {
                className: iv.TE,
                children: (0, r.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function ik(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case ix.MIGHTY:
                    t = "#fc430a";
                    break;
                case ix.STRONG:
                    t = "#9e00b4";
                    break;
                case ix.FAIR:
                    t = "#4aa1ce";
                    break;
                case ix.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, r.jsx)(
        J.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, r.jsxs)("div", {
                className: iv.TE,
                style: { backgroundColor: i },
                children: [
                    (0, r.jsx)(ij, { rating: t, strokeColor: l }),
                    (0, r.jsx)(B.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: iv.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let iC = function () {
    let { game: e } = F(),
        t = (0, th.c)("GameProfileReviews"),
        n = (0, ip.I)(e.id),
        l = e.opencriticUrl,
        {
            steamReview: i,
            showSteamReview: a,
            showRecentSteamReview: o,
            showLocalizedReview: c,
            primarySteamRating: u,
            primarySteamRatingCount: d,
            primarySteamTitleKey: m,
            mobileStoreReviews: h,
        } = s.useMemo(() => {
            let t = e.reviews?.steam,
                l = e.steamReleaseStatus !== im.Y.RETIRED_ABANDONED && null != n,
                i = id(t?.recentRating, t?.recentRatingCount, !0),
                a = l && i !== iu.vI.NO_USER_REVIEWS,
                r =
                    null != t &&
                    null != t.localizedRating &&
                    null != t.localizedRatingCount &&
                    null != t.ratingCount &&
                    t.localizedRatingCount >= 200 &&
                    t.ratingCount >= 2e3;
            return {
                steamReview: t,
                showSteamReview: l,
                showRecentSteamReview: a,
                showLocalizedReview: r,
                primarySteamRating: r ? t?.localizedRating : t?.rating,
                primarySteamRatingCount: r ? t?.localizedRatingCount : t?.ratingCount,
                primarySteamTitleKey: r ? em.t["aWb+V4"] : em.t["8e4LiB"],
                mobileStoreReviews: Object.entries(ih).flatMap((t) => {
                    var n;
                    let l,
                        i,
                        [a, r] = t,
                        s = e.reviews?.[a],
                        o = s?.rating,
                        c = s?.ratingCount;
                    if (null == o || null == c) return [];
                    let u = lx(e, lh[a]);
                    return null != u
                        ? [
                              ((n = u.url),
                              (l = r.getTitle()),
                              (i = new Intl.NumberFormat(em.intl.currentLocale, {
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 1,
                              }).format(o)),
                              {
                                  key: a,
                                  url: n,
                                  title: l,
                                  ratingText: em.intl.format(em.t["zdL4/T"], { rating: i }).toString(),
                                  ratingCountText: em.intl.format(em.t.u1m2hs, { rating_count: c }).toString(),
                                  accessibilityLabel: em.intl
                                      .format(em.t["63jSRx"], { store: l, rating: i, rating_count: c })
                                      .toString(),
                                  action: r.action,
                              }),
                          ]
                        : [];
                }),
            };
        }, [e, n]),
        g =
            (e.steamReleaseStatus !== im.Y.RETIRED_ABANDONED || h.length > 0) &&
            e.reviews?.opencritic != null &&
            null != e.opencriticUrl;
    return a || g || 0 !== h.length
        ? (0, r.jsxs)("div", {
              className: iv.uW,
              children: [
                  (0, r.jsx)("div", {
                      className: iv.Gf,
                      children: (0, r.jsx)(tm.D, {
                          variant: t ? "text-md/medium" : "heading-sm/semibold",
                          color: t ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: iv.kL,
                      children: [
                          o && null != n
                              ? (0, r.jsx)("div", {
                                    className: iv.WH,
                                    children: (0, r.jsx)(iI, {
                                        url: n,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: i?.recentRating,
                                        ratingCount: i?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          a && null != n
                              ? (0, r.jsx)("div", {
                                    className: iv.WH,
                                    children: (0, r.jsx)(iI, {
                                        url: n,
                                        title: em.intl.string(m),
                                        rating: u,
                                        ratingCount: d,
                                        tooltipVariant: c ? "localized" : "all",
                                    }),
                                })
                              : null,
                          h.map((e) =>
                              (0, r.jsx)("div", { className: iv.WH, children: (0, r.jsx)(iE, { review: e }) }, e.key),
                          ),
                          g && null != l
                              ? (0, r.jsx)("div", { className: iv.WH, children: (0, r.jsx)(ib, { url: l }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var iS = n(815996),
    iy = n(722258),
    iT = n(905276),
    iL = n(561769),
    iR = n(484469),
    iM = n(57020),
    iO = n(682301);
let iG = [];
var iP = n(758836),
    iw = n(399872);
let i_ = [0, 1, 2, 3, 4];
function iD(e) {
    return e.skuId;
}
function iV(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = s.useContext(iL.v3),
        { trackAction: u } = F(),
        d = s.useRef(null),
        m = s.useCallback(
            (e) => {
                (u(S.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, iy.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, iM.A)({ product: t }),
                        returnRef: d,
                    }));
            },
            [u, i, t],
        ),
        h = s.useMemo(
            () => ({
                flattenProductVariants: a ?? !0,
                prioritizedCurrency: o,
                standalonePreview: c,
                productOverride: t,
            }),
            [a, o, c, t],
        );
    return (0, r.jsx)(iL.v3.Provider, {
        value: h,
        children: (0, r.jsx)(iT.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: iw.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function iF() {
    return (0, r.jsx)(iR.A, {});
}
function iU() {
    let { game: e, closeModal: t, trackAction: n } = F(),
        { products: l, isLoading: i } = (function (e) {
            let {
                    skuIds: t,
                    hasFetched: n,
                    isFetching: l,
                } = (function (e) {
                    let {
                        hasFetched: t,
                        isFetching: n,
                        skuIds: l,
                    } = (0, m.cf)([T.A], () => ({
                        hasFetched: null != e && T.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && T.A.isShopCollectionFetching(e),
                        skuIds: null != e ? T.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, s.useEffect)(() => {
                            null == e || t || T.A.isShopCollectionFetching(e) || nZ(e);
                        }, [e, t]),
                        { skuIds: l ?? iG, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, iO.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(e.shopCollectionIds?.[0]),
        a = s.useCallback(() => {
            (n(S.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, iS.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: iP.G2.CATALOG,
                }));
        }, [n, t]);
    return i
        ? (0, r.jsx)(tR, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, r.jsx)(nj.A, { children: i_.map((e) => (0, r.jsx)(iF, {}, e)) }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(tM, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: (0, r.jsx)(nh.A, {
                    gap: "md",
                    items: l,
                    getItemKey: iD,
                    renderItem: (e, t) => (0, r.jsx)(iV, { product: e, listItemProps: t }, e.skuId),
                }),
            });
}
var iY = n(611656),
    iB = n(5399);
let iW = [],
    iz = [];
var iH = n(987070);
let iX = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iK(e) {
    return e.id;
}
function i$(e) {
    let { game: t, listItemProps: n } = e,
        { navigateToGame: l, trackAction: i } = F(),
        { shouldOpenGameProfile: a, gameId: o } = (0, iY.Ay)({
            gameId: t.id,
            source: S.GameProfileSources.SimilarGames,
        }),
        c = s.useCallback(() => {
            (i(S.GameProfileTrackActionActions.ClickSimilarGame, { similarGameId: t.id }),
                a && null != o && l(o, S.GameProfileSources.SimilarGames));
        }, [t.id, o, i, a, l]);
    return (0, r.jsx)(J.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, r.jsx)(tW.D, {
            ...n,
            className: iH.Nr,
            onClick: c,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: (0, r.jsx)(t5.Ay, {
                game: t,
                className: iH.xe,
                size: t5.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, r.jsx)(t5.gr, { className: iH.uz }),
            }),
        }),
    });
}
function iJ() {
    let { game: e } = F(),
        { isFetching: t, similarGames: n } = (function (e) {
            let t = !nQ.has(e),
                { data: n, isLoading: l, error: i } = n1(e, t),
                a = t && null != n ? n : iW;
            (0, b.x)(a);
            let r = (0, m.bG)(
                    [e3.A],
                    () => a.some((e) => null == e3.A.getGame(e) && !e3.A.hasNoData(e) && !e3.A.didFetchingFail(e)),
                    [a],
                ),
                s = (0, m.yK)(
                    [e3.A, D.default],
                    () => {
                        let e = D.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => e3.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, iY.T_)(t) && !(0, O.b)(t, e) && (0, iB.zu)(t));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || r, similarGames: s }
                : { isFetching: !1, similarGames: iz };
        })(e.id);
    return t
        ? (0, r.jsx)(tR, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, r.jsx)("div", {
                  className: iH.XG,
                  style: iX,
                  children: (0, r.jsx)(nj.A, {
                      children: eQ()
                          .range(0, 8)
                          .map((e) => (0, r.jsx)(t5.gr, { className: iH.aZ }, e)),
                  }),
              }),
          })
        : 0 === n.length
          ? null
          : (0, r.jsx)(tM, {
                title: em.intl.string(em.t["6rLyQB"]),
                children: (0, r.jsx)("div", {
                    className: iH.XG,
                    style: iX,
                    children: (0, r.jsx)(nh.A, {
                        gap: "md",
                        items: n,
                        getItemKey: iK,
                        itemClassName: iH.cW,
                        renderItem: (e, t) => (0, r.jsx)(i$, { game: e, listItemProps: t }, e.id),
                    }),
                }),
            });
}
n(667532);
var iq = n(853022);
let iQ = new Set(["1402418703554842694", "356877880938070016"]),
    iZ = [ld.V1.EPICGAMES, ld.V1.STEAM, ld.V1.ROBLOX, ld.V1.BATTLENET, ld.V1.RIOT, ld.V1.MINECRAFT];
function i0(e) {
    return (0, r.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var i1 = n(349361),
    i8 = n(422688),
    i2 = n(505200),
    i4 = n(695250);
let i3 = function (e) {
    switch (e.category) {
        case ld.V1.STEAM:
            return {
                icon: ic.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: S.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case ld.V1.EPICGAMES:
            return {
                icon: i1.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: S.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case ld.V1.ROBLOX:
            return {
                icon: lG.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: S.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case ld.V1.BATTLENET:
            return {
                icon: i8.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: S.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case ld.V1.RIOT:
            return {
                icon: i2.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: S.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case ld.V1.MINECRAFT:
            return {
                icon: i4.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: S.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: lU.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: S.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var i6 = n(242216);
function i5(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, ip.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eT.d3x.XBOX_GAME_PASS && !(0, tf.uJ)(e.id));
                return t?.id == null ? null : (0, iq.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== ld.V1.EPICGAMES || !!iQ.has(l)) &&
                            (e.category !== ld.V1.STEAM || a !== im.Y.RETIRED_ABANDONED) &&
                            iZ.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === im.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === ld.V1.STEAM) ||
                    e.push({ category: ld.V1.STEAM, url: t });
                let r = e.sort((e, t) => (e.category === ld.V1.STEAM ? -1 : +(t.category === ld.V1.STEAM)));
                return (null != n && r.unshift({ category: "XBOX_GAME_PASS", url: n }), r);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function i9(e) {
    let { data: t } = e,
        { trackAction: n } = F(),
        l = (0, lP.A)();
    return (0, r.jsx)(i0, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let i7 = function () {
    let { game: e, trackAction: t } = F(),
        { showsStoreLinks: l, storeWebsites: i } = i5(e),
        a = s.useMemo(() => i.map(i3).filter((e) => null != e), [i]);
    if (!l) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, r.jsx)(i9, { data: e });
    }
    if (2 === a.length)
        return (0, r.jsxs)("div", {
            className: i6.G,
            children: [(0, r.jsx)(i9, { data: a[0] }), (0, r.jsx)(i9, { data: a[1] })],
        });
    let o = (0, r.jsx)(i0, {
        text: em.intl.string(em.t["/hMurx"]),
        "aria-label": em.intl.string(em.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, g.openModalLazy)(async () => {
                    let { default: e } = await n.e("307898").then(n.bind(n, 679361));
                    return (n) => (0, r.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: e, websiteButtons: a, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, r.jsxs)("div", { className: i6.G, children: [(0, r.jsx)(i9, { data: a[0] }), o] })
        : o;
};
var ae = n(123292),
    at = n(318076),
    an = n(478676),
    al = n.n(an),
    ai = n(694403),
    aa = n(417964);
function ar(e, t, n) {
    let l = e[e.length - 1];
    null != l &&
    l.bold === n.bold &&
    l.italic === n.italic &&
    l.underline === n.underline &&
    l.heading === n.heading &&
    l.link === n.link
        ? (l.text += t)
        : e.push({ ...n, text: t });
}
let as = /[\u0000-\u001f\u007f]/,
    ao = /https?:\/\//i,
    ac = String.raw`https?:\/\/[^\s<]+[^<.,:;"'\]\s]`,
    au = RegExp(`^(${ac})`, "i"),
    ad = RegExp(ac, "gi"),
    am = /https?:\/\/\S+$/i,
    ah = /^(?:[a-z0-9_/?#&=%-]|\.[a-z0-9])/i,
    ag = new Map(
        Object.entries({
            b: { style: "bold" },
            strong: { style: "bold" },
            i: { style: "italic" },
            em: { style: "italic" },
            u: { style: "underline" },
            h1: { heading: "h1", breaks: 2 },
            h2: { heading: "h2", breaks: 2 },
            h3: { heading: "h3", breaks: 2 },
            h4: { heading: "h4", breaks: 2 },
            p: { breaks: 2 },
            blockquote: { breaks: 2 },
            hr: { breaks: 2 },
            div: { breaks: 1 },
            br: { lineBreak: !0 },
            ul: { breaks: 1, list: "unordered" },
            ol: { breaks: 1, list: "ordered" },
            li: { breaks: 1, item: !0 },
            a: { link: !0 },
            span: {},
            small: {},
            sup: {},
            script: { hidden: !0 },
            style: { hidden: !0 },
        }),
    ),
    ax = { bold: !1, italic: !1, underline: !1 },
    af = /[\uD800-\uDBFF]/,
    ap = /^[a-z][a-z0-9:-]*$/,
    aj = /^<[a-z][a-z0-9:-]*\s*(?:\/+\s*)?>$/i,
    av = /^<[a-z][a-z0-9:-]*(?:\s+[a-z0-9:+-]+)*(?:\s*\/+\s*[a-z0-9:+-]+(?:\s+[a-z0-9:+-]+)*)+\s*>$/i,
    aA = /^<\/{2,}[\s/a-z0-9:+-]*>$/i,
    aE = new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
    ]),
    aI = new Set([
        "abbr",
        "address",
        "article",
        "aside",
        "audio",
        "bdi",
        "bdo",
        "body",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "html",
        "iframe",
        "ins",
        "kbd",
        "label",
        "legend",
        "main",
        "map",
        "mark",
        "math",
        "menu",
        "meter",
        "nav",
        "noscript",
        "object",
        "optgroup",
        "option",
        "output",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "search",
        "section",
        "select",
        "slot",
        "sub",
        "summary",
        "svg",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "var",
        "video",
    ]);
function ab(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e)
        try {
            let n = new URL(e);
            return "http:" !== n.protocol && "https:" !== n.protocol && (t || "mailto:" !== n.protocol)
                ? void 0
                : n.href;
        } catch {
            return;
        }
}
function aN(e, t) {
    return Array.from((0, aa.El)(e).matchAll(ad)).some((e) => {
        let [n] = e;
        return ab(n, !0) !== t;
    });
}
function ak(e) {
    return ab(al().unescapeUrl(e[2]));
}
let aC = {
        text: al().defaultRules.text,
        link: {
            ...ai.Ay,
            match(e, t, n) {
                let l = ai.Ay.match(e, t, n);
                return null != l && null != ak(l) ? l : null;
            },
            parse(e, t, n) {
                let l = ak(e);
                return null == l || aN((0, aa.Fd)(e[1]), l) ? { type: "text", content: e[0] } : ai.Ay.parse(e, t, n);
            },
        },
        url: {
            order: al().defaultRules.url.order,
            requiredFirstCharacters: ["h", "H"],
            match(e) {
                let t = au.exec(e);
                return (
                    null != t &&
                        (t[0] = t[1] =
                            (function (e) {
                                let t = 0;
                                for (let n = e.length - 1; n >= 0 && ")" === e[n]; n--) {
                                    let n = e.indexOf("(", t);
                                    if (-1 === n) return e.slice(0, -1);
                                    t = n + 1;
                                }
                                return e;
                            })(t[1])),
                    t
                );
            },
            parse(e) {
                let t = e[1],
                    n = t.search(as),
                    l = -1 === n ? t : t.slice(0, n),
                    i = ab(l, !0);
                if (null == i) return { type: "text", content: t };
                let a = { type: "link", content: [{ type: "text", content: l }], target: i },
                    r = t.slice(l.length);
                return "" === r ? a : [a, { type: "text", content: r }];
            },
        },
    },
    aS = al().parserFor(aC);
function ay(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 10 === n || 9 === n || 13 === n || 12 === n;
}
function aT(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 9 === n || 12 === n;
}
function aL(e) {
    let t = 0;
    for (; t < e.length && ay(e, t);) t++;
    return t;
}
function aR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.length;
    for (; n > t && ay(e, n - 1);) n--;
    return n;
}
function aM(e, t) {
    let n = "",
        l = 0,
        i = t,
        a = -1;
    for (let t = e.indexOf("\n"); -1 !== t; t = e.indexOf("\n", t + 1)) {
        let r = a + 1,
            s = !0;
        for (let n = r; n < t; n++)
            if (!aT(e, n)) {
                s = !1;
                break;
            }
        (i > 0 && s ? ((n += e.slice(l, r)), i < 2 && (n += "\n"), (l = t + 1), i++) : (i = 1), (a = t));
    }
    return 0 === l ? e : n + e.slice(l);
}
function aO(e) {
    for (; e.length > 0;) {
        let t = e[e.length - 1],
            n = t.text.length;
        for (; n > 0 && aT(t.text, n - 1);) n--;
        if (n === t.text.length) break;
        if (0 === n) e.pop();
        else {
            t.text = t.text.slice(0, n);
            break;
        }
    }
}
function aG(e) {
    return e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e;
}
function aP(e) {
    let t = aM(aG(e), 0),
        n = aL(t),
        l = aR(t, n);
    return l > n ? [{ text: t.slice(n, l), ...ax }] : [];
}
function aw(e, t) {
    let n = Math.max(0, Math.floor(t)),
        l = af.test(e.charAt(n - 1)) ? n - 1 : n;
    return aG(e.slice(0, l));
}
function a_(e) {
    return e.links[e.links.length - 1];
}
function aD(e) {
    return null != e ? { ...ax, link: e } : ax;
}
function aV(e) {
    let t = a_(e);
    return {
        bold: e.styles.bold > 0 || null != e.heading,
        italic: e.styles.italic > 0,
        underline: e.styles.underline > 0,
        ...(null != e.heading ? { heading: e.heading } : {}),
        ...(null != t ? { link: t } : {}),
    };
}
function aF(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ax,
        l = t.indexOf("\n");
    if (e.trailingNewlines > 0 && -1 !== l) {
        let n = !0;
        for (let e = 0; e < l; e++)
            if (!aT(t, e)) {
                n = !1;
                break;
            }
        n && aO(e.runs);
    }
    let i = e.trailingNewlines,
        a = aM(t, e.trailingNewlines);
    if ((0 === e.runs.length && (a = a.slice(aL(a))), 0 === a.length)) return;
    ar(e.runs, a, n);
    let r = (function (e) {
        let t = 0;
        for (let n = e.length - 1; n >= 0; n--)
            if (10 === e.charCodeAt(n)) t++;
            else if (!aT(e, n)) break;
        return t;
    })(a);
    e.trailingNewlines = aL(a) === a.length ? Math.min(2, i + r) : r;
}
function aU(e) {
    if (0 === e.pendingBreaks) for (let t of e.held) aF(e, t.text, t);
    else
        e.runs.length > 0 &&
            (e.trailingNewlines > 0 && aO(e.runs),
            aF(e, "\n".repeat(Math.max(0, e.pendingBreaks - e.trailingNewlines)), aD(e.spacingLink)));
    ((e.held = []), (e.pendingBreaks = 0));
}
function aY(e, t) {
    let n = e.atBoundary ? aL(t) : 0,
        l = aR(t, n),
        i = aV(e);
    (l > n && (aU(e), aF(e, t.slice(n, l), i), (e.spacingLink = i.link), (e.atBoundary = e.afterMarker = !1)),
        l < t.length && e.held.push({ ...i, text: t.slice(l) }));
}
function aB(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null != t &&
        ((n && e.afterMarker) || (e.pendingBreaks = Math.max(e.pendingBreaks, e.itemDepth > 0 ? 1 : t)),
        (e.atBoundary = !0),
        n || (e.afterMarker = !1));
}
function aW(e, t) {
    let n,
        l = {
            markup: e,
            keepInvalidAnchors: t?.keepInvalidAnchors === !0,
            runs: [],
            styles: { bold: 0, italic: 0, underline: 0 },
            links: [],
            lists: [],
            itemDepth: 0,
            hiddenDepth: 0,
            ending: !1,
            held: [],
            pendingBreaks: 0,
            atBoundary: !0,
            afterMarker: !1,
            trailingNewlines: 0,
        },
        i = (function (e) {
            let t;
            class n extends at.iX {
                onclosetag(n, l) {
                    let i = this.startIndex,
                        a = e.markup.slice(n, l).toLowerCase();
                    ((t = void 0), super.onclosetag(n, l));
                    let r = a.replace(/\/+$/, "");
                    if (e.hiddenDepth > 0 || t === a || ag.has(r) || aE.has(r) || aI.has(r)) return;
                    let s = e.markup.indexOf(">", l);
                    -1 !== s && aY(e, e.markup.slice(i, s + 1));
                }
            }
            let l = new n(
                {
                    onopentagname() {
                        e.unfinishedTag = l.startIndex;
                    },
                    onopentag: (t, n) =>
                        (function (e, t, n, l) {
                            var i, a;
                            let r;
                            e.unfinishedTag = void 0;
                            let s = ag.get(t);
                            if (e.hiddenDepth > 0 || s?.hidden === !0) return void e.hiddenDepth++;
                            if (null == s) {
                                let n,
                                    r,
                                    s = e.markup.slice(l.startIndex, l.endIndex + 1);
                                (!ap.test(t) ||
                                    ((aj.test(s) || av.test(s)) &&
                                        !aE.has(t) &&
                                        !aI.has(t) &&
                                        ((i = l.endIndex),
                                        (e.closingTags ??= e.markup.includes("</")
                                            ? ((a = e.markup),
                                              (n = new Map()),
                                              (r = new at.iX(
                                                  {
                                                      onclosetag(e) {
                                                          let t = r.startIndex;
                                                          a.slice(t, t + e.length + 2).toLowerCase() === `</${e}` &&
                                                              n.set(e, t);
                                                      },
                                                  },
                                                  { decodeEntities: !0, recognizeSelfClosing: !0 },
                                              )).end(a),
                                              n)
                                            : new Map()),
                                        !((e.closingTags.get(t) ?? -1) > i)))) &&
                                    aY(e, s);
                                return;
                            }
                            (aB(e, s.breaks, !0),
                                null != s.style && e.styles[s.style]++,
                                !0 === s.link &&
                                    (e.links.push(ab(n.href) ?? (e.keepInvalidAnchors ? "" : void 0)),
                                    (e.spacingLink = void 0)),
                                null != s.heading && (e.heading = s.heading),
                                null != s.list && e.lists.push({ ordered: "ordered" === s.list, index: 0 }),
                                !0 === s.lineBreak &&
                                    (aU(e),
                                    aF(e, "\n", null != e.heading ? aV(e) : aD(a_(e))),
                                    (e.atBoundary = !0),
                                    (e.afterMarker = !1)),
                                !0 === s.item &&
                                    (aU(e),
                                    (r = e.lists[e.lists.length - 1]),
                                    aF(e, r?.ordered === !0 ? `${++r.index}. ` : "\u2022 "),
                                    e.itemDepth++,
                                    (e.afterMarker = !0)));
                        })(e, t, n, l),
                    onclosetag(n, l) {
                        (l || (t = n),
                            (function (e, t) {
                                if (e.ending) return;
                                if (e.hiddenDepth > 0) return e.hiddenDepth--;
                                let n = ag.get(t);
                                null != n &&
                                    (aB(e, n.breaks),
                                    null != n.style && e.styles[n.style]--,
                                    !0 === n.link && (e.links.pop(), (e.spacingLink = void 0)),
                                    null != n.heading && (e.heading = void 0),
                                    null != n.list && e.lists.pop(),
                                    !0 === n.item && e.itemDepth--);
                            })(e, n));
                    },
                    oncomment() {
                        let t = e.markup.slice(l.startIndex, l.endIndex + 1);
                        0 === e.hiddenDepth && aA.test(t) && aY(e, t);
                    },
                    ontext(t) {
                        0 === e.hiddenDepth && aY(e, t);
                    },
                },
                { decodeEntities: !0, recognizeSelfClosing: !0 },
            );
            return l;
        })(l);
    (i.write(e),
        (l.ending = !0),
        i.end(),
        "" === (n = l.markup.slice(l.unfinishedTag ?? i.startIndex)) ||
            /^<\/?br\/?$/i.test(n) ||
            new at.iX({ ontext: (e) => aY(l, e) }, { decodeEntities: !0 }).end(n.replace(/</g, "&lt;")));
    for (var a = l.runs; a.length > 0;) {
        let e = a[a.length - 1];
        if (((e.text = e.text.slice(0, aR(e.text))), e.text.length > 0)) break;
        a.pop();
    }
    return a;
}
var az = n(9578);
let aH = { h1: "heading-lg/bold", h2: "heading-md/bold", h3: "heading-sm/bold", h4: "heading-sm/semibold" },
    aX = { h1: 2, h2: 3, h3: 4, h4: 5 };
var aK = n(407355);
function a$(e) {
    let { italic: t, underline: n } = e;
    return u()({ [aK.T]: t, [aK.V]: n });
}
function aJ(e) {
    let { run: t, textVariant: n, boldTextVariant: l } = e;
    if (null != t.heading) return (0, r.jsx)(aq, { run: t });
    let { text: i, bold: a, italic: s, underline: o } = t;
    return a || s || o
        ? (0, r.jsx)(B.E, {
              tag: a ? "strong" : "span",
              variant: a ? l : n,
              color: "none",
              className: a$(t),
              children: s ? (0, r.jsx)("em", { children: i }) : i,
          })
        : i;
}
function aq(e) {
    let { run: t } = e,
        { text: n, italic: l, underline: i } = t;
    if (!l && !i) return n;
    let a = a$(t);
    return l && i
        ? (0, r.jsx)("u", { className: a, children: (0, r.jsx)("em", { children: n }) })
        : l
          ? (0, r.jsx)("em", { className: a, children: n })
          : (0, r.jsx)("u", { className: a, children: n });
}
function aQ(e) {
    let { segment: t, textVariant: n, boldTextVariant: l, onLinkPress: i } = e,
        a = t.runs.map((e, t) => (0, r.jsx)(aJ, { run: e, textVariant: n, boldTextVariant: l }, t)),
        { link: s } = t;
    return null == s
        ? a
        : (0, r.jsx)(az.A, {
              href: s,
              title: t.runs.map((e) => e.text).join(""),
              onClick: () => (i?.(s), !1),
              children: a,
          });
}
function aZ(e) {
    let { group: t, ...n } = e,
        { heading: l, segments: i } = t,
        a = i.map((e, t) =>
            (0, r.jsx)(
                aQ,
                {
                    segment: e,
                    textVariant: n.textVariant,
                    boldTextVariant: n.boldTextVariant,
                    onLinkPress: n.onLinkPress,
                },
                t,
            ),
        );
    return null == l
        ? a
        : (0, r.jsx)(t1.F, {
              forceLevel: n.headingLevels[l],
              children: (0, r.jsx)(tm.D, { variant: n.headingVariants[l], color: n.headingColor, children: a }),
          });
}
function a0(e) {
    let {
            runs: t,
            textVariant: n = "text-md/normal",
            boldTextVariant: l = "text-md/bold",
            headingVariants: i = aH,
            headingColor: a = "text-strong",
            headingLevels: o = aX,
            onLinkPress: c,
        } = e,
        u = s.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let n of e) {
                        let e = t[t.length - 1];
                        (null == e || e.heading !== n.heading) &&
                            ((e = { heading: n.heading, segments: [] }), t.push(e));
                        let l = e.segments[e.segments.length - 1];
                        null != l && l.link === n.link ? l.runs.push(n) : e.segments.push({ link: n.link, runs: [n] });
                    }
                    return t;
                })(t),
            [t],
        ),
        d = {
            textVariant: n,
            boldTextVariant: l,
            headingVariants: i,
            headingColor: a,
            headingLevels: o,
            onLinkPress: c,
        };
    return u.map((e, t) => (0, r.jsx)(aZ, { group: e, ...d }, t));
}
var a1 = n(672572),
    a8 = n(94936);
function a2() {
    let e = s.useRef(null),
        { game: t, isTwoColumn: n, trackAction: l } = F(),
        i = s.useMemo(
            () =>
                null != t.description
                    ? (function (e) {
                          let { maxLength: t = 1e4, parseTextLinks: n = !1 } =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              l = e.includes("<") || e.includes("&");
                          if (!n) return l ? aW(aw(e, t)) : aP(e);
                          let i = aw(e, t);
                          return (function (e) {
                              let { marked: t, rawURLsOnly: n } = (function (e) {
                                      let t = [...e],
                                          n = new Set();
                                      for (let l = 0; l < e.length;) {
                                          let i = e[l];
                                          if (null == i.link || "" === i.link) {
                                              l++;
                                              continue;
                                          }
                                          let a = l + 1;
                                          for (; a < e.length && e[a].link === i.link;) a++;
                                          let r = "";
                                          for (let t = l; t < a; t++) r += e[t].text;
                                          let s = (0, aa.Fd)(r).trim(),
                                              o = 0 === s.length ? "" : aN(s, i.link) ? void 0 : i.link;
                                          if (o !== i.link)
                                              for (let i = l; i < a; i++) {
                                                  let { link: l, ...a } = e[i];
                                                  ((t[i] = null != o ? { ...a, link: o } : a), null == o && n.add(i));
                                              }
                                          l = a;
                                      }
                                      return { marked: t, rawURLsOnly: n };
                                  })(e),
                                  l = [],
                                  i = !1;
                              for (let e = 0; e < t.length; e++) {
                                  let a = t[e];
                                  if (null != a.link) {
                                      if ("" === a.link) {
                                          let { link: e, ...t } = a;
                                          ar(l, a.text, t);
                                      } else ar(l, a.text, a);
                                      i = !1;
                                  } else {
                                      let r = t[e + 1],
                                          s =
                                              null != r &&
                                              null == r.link &&
                                              !a.text.includes("](") &&
                                              am.test(a.text) &&
                                              ah.test(r.text);
                                      (i || s
                                          ? ar(l, a.text, a)
                                          : (function (e, t, n) {
                                                let l = t.text.includes("["),
                                                    i = n && t.text.includes("](");
                                                (!i || l) && (i || ao.test(t.text))
                                                    ? (function e(t, n, l, i) {
                                                          if (Array.isArray(n)) for (let a of n) e(t, a, l, i);
                                                          else
                                                              "text" === n.type && "string" == typeof n.content
                                                                  ? ar(t, n.content, null != i ? { ...l, link: i } : l)
                                                                  : "link" === n.type && e(t, n.content, l, n.target);
                                                      })(e, aS(t.text, { inline: !0, allowLinks: n }), t)
                                                    : ar(e, t.text, t);
                                            })(l, a, !n.has(e)),
                                          (i = s));
                                  }
                              }
                              return l;
                          })(l ? aW(i, { keepInvalidAnchors: !0 }) : aP(i));
                      })(t.description, { parseTextLinks: !0 })
                    : [],
            [t.description],
        ),
        a = n ? 8 : 5,
        {
            isExpanded: o,
            showToggle: c,
            handleToggleExpanded: d,
            handleDescriptionFocus: m,
        } = (function (e, t, n) {
            let { trackAction: l } = F(),
                {
                    isCollapsed: i,
                    isExpanded: a,
                    showToggle: r,
                    setHasOverflow: o,
                    setExpanded: c,
                    toggleExpanded: u,
                } = (function (e) {
                    let [t, n] = s.useState("full"),
                        l = s.useCallback((e) => {
                            n((t) => ("expanded" === t ? t : e ? "collapsed" : "full"));
                        }, []),
                        i = s.useCallback(
                            (l) => {
                                let i = l ? "expanded" : "collapsed";
                                "full" !== t &&
                                    t !== i &&
                                    (e(
                                        l
                                            ? S.GameProfileTrackActionActions.ShowMore
                                            : S.GameProfileTrackActionActions.ShowLess,
                                    ),
                                    n(i));
                            },
                            [e, t],
                        ),
                        a = s.useCallback(() => i("expanded" !== t), [i, t]);
                    return {
                        isCollapsed: "collapsed" === t,
                        isExpanded: "expanded" === t,
                        showToggle: "full" !== t,
                        setHasOverflow: l,
                        setExpanded: i,
                        toggleExpanded: a,
                    };
                })(l),
                d = s.useRef(!1),
                m = s.useRef(null);
            (s.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    o(t.scrollHeight - t.clientHeight > 1);
                });
                return (n.observe(t), () => n.disconnect());
            }, [e, t, n, o]),
                s.useLayoutEffect(() => {
                    let t = e.current;
                    null != t &&
                        (a && null != m.current
                            ? ((t.scrollTop = 0),
                              m.current.scrollIntoView({ block: "nearest", behavior: "instant" }),
                              (m.current = null))
                            : i &&
                              ((t.scrollTop = 0),
                              d.current &&
                                  ((d.current = !1), t.scrollIntoView({ block: "start", behavior: "instant" }))));
                }, [e, i, a]));
            let h = s.useCallback(() => {
                (a && (d.current = !0), u());
            }, [a, u]);
            return {
                isExpanded: a,
                showToggle: r,
                handleToggleExpanded: h,
                handleDescriptionFocus: s.useCallback(
                    (t) => {
                        let n = e.current,
                            l = t.target;
                        if (!i || null == n || !(0, nR.vq)(l, HTMLAnchorElement) || !l.matches(":focus-visible"))
                            return;
                        let a = n.getBoundingClientRect(),
                            r = l.getBoundingClientRect();
                        (n.scrollTop > 1 || r.top < a.top - 1 || r.bottom > a.bottom + 1) && ((m.current = l), c(!0));
                    },
                    [i, c, e],
                ),
            };
        })(e, t.description, a),
        h = s.useCallback(() => {
            l(S.GameProfileTrackActionActions.ClickDescriptionLink);
        }, [l]);
    if (0 === i.length) return null;
    let g = o ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, r.jsxs)("div", {
        className: u()(a1.fi, a8.k),
        onFocusCapture: m,
        children: [
            (0, r.jsx)(B.E, {
                ref: e,
                className: a8.Q,
                lineClamp: o ? void 0 : a,
                variant: "text-md/medium",
                children: (0, r.jsx)(a0, { runs: i, textVariant: "text-md/medium", onLinkPress: h }),
            }),
            c && (0, r.jsx)(ae.Q, { onClick: d, text: g, "aria-expanded": o }),
        ],
    });
}
var a4 = n(40478),
    a3 = n(764948);
let a6 = s.memo(function (e) {
    let { analyticsLocations: t, selectTab: n, getScrollOffset: l } = e;
    return (0, r.jsxs)("div", {
        className: a3.V,
        children: [
            (0, r.jsx)(io, {}),
            (0, r.jsxs)("div", {
                className: a4.h,
                children: [
                    (0, r.jsx)(ni, {}),
                    (0, r.jsxs)("div", { className: a4.X, children: [(0, r.jsx)(i7, {}), (0, r.jsx)(a2, {})] }),
                ],
            }),
            (0, r.jsx)(l0, { analyticsLocations: t }),
            (0, r.jsx)(ty, {}),
            (0, r.jsx)(lu, { getScrollOffset: l }),
            (0, r.jsx)(nL, { selectTab: n }),
            (0, r.jsx)(iU, {}),
            (0, r.jsx)(iJ, {}),
            (0, r.jsx)(iC, {}),
            (0, r.jsx)(l$, {}),
        ],
    });
});
var a5 = n(164135);
let a9 = s.memo(function (e) {
    let { selectTab: t, getScrollOffset: n } = e;
    return (0, r.jsxs)("div", {
        className: a5.V,
        children: [
            (0, r.jsxs)("div", { className: a5.B, children: [(0, r.jsx)(io, {}), (0, r.jsx)(a2, {})] }),
            (0, r.jsx)(lu, { getScrollOffset: n }),
            (0, r.jsx)(nL, { selectTab: t }),
            (0, r.jsx)(iU, {}),
            (0, r.jsx)(iJ, {}),
        ],
    });
});
var a7 = n(881698),
    re = n(928550),
    rt = n(562708),
    rn = n(414499),
    rl = n(359549),
    ri = n(139286),
    ra = n(873516);
function rr(e) {
    let { onCloudPlayClick: t, analyticsLocations: n } = e,
        { closeModal: l, trackAction: i } = F();
    (0, ri.A)({
        name: rt.ImpressionNames.CLOUD_PLAY_CTA,
        type: rt.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let a = s.useCallback(() => {
        (i(S.GameProfileTrackActionActions.CloudPlay), l(), t());
    }, [l, t, i]);
    return (0, r.jsx)(J.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, r.jsx)(K.$, {
            icon: rn.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function rs(e) {
    let { cloudPlayAppId: t, analyticsLocations: n } = e,
        { game: l } = F(),
        i = (0, rl.rC)({ applicationId: t, sourceApplicationId: l.id, analyticsLocations: n });
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: ra.k,
              children: (0, r.jsx)(rr, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var ro = n(768626);
function rc(e) {
    let { analyticsLocations: t } = e,
        { game: n } = F(),
        l = (0, a7.A)(n.linkedApplications)?.id,
        [i] = (0, re.L_)(n.getOfficialApplicationId()),
        [a] = (0, re.L_)(n.id),
        { showsStoreLinks: s } = i5(n);
    return (0, r.jsxs)("div", {
        className: u()(ro.pz, a1.fi, s ? ro.FJ : ro.dg),
        children: [
            null == l || i || a ? null : (0, r.jsx)(rs, { cloudPlayAppId: l, analyticsLocations: t }),
            (0, r.jsxs)("div", {
                className: a3.V,
                children: [
                    (0, r.jsx)(i7, {}),
                    (0, r.jsx)(l0, { analyticsLocations: t }),
                    (0, r.jsx)(ty, {}),
                    (0, r.jsx)(iC, {}),
                    (0, r.jsx)(l$, {}),
                ],
            }),
        ],
    });
}
var ru = n(105865);
function rd(e) {
    let { isTwoColumn: t, selectTab: n, selectionVersion: l, initialScrollOffset: i, analyticsLocations: a } = e,
        o = s.useRef(null),
        c = s.useRef(null),
        u = s.useRef(l);
    (s.useLayoutEffect(() => {
        0 === l && null != i && i > 0 && c.current?.getScrollerNode()?.scrollTo({ top: i, behavior: "instant" });
    }, [i, l]),
        s.useLayoutEffect(() => {
            l !== u.current &&
                (c.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (u.current = l));
        }, [l]));
    let d = s.useCallback(() => c.current?.getScrollerNode()?.scrollTop ?? 0, []),
        m = s.useCallback((e) => {
            if (null != o.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                o.current.style.opacity = String(t);
            }
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nt, { ref: o }),
            (0, r.jsxs)(eZ.Ch, {
                ref: c,
                className: ru.XG,
                onScroll: m,
                children: [
                    (0, r.jsx)("div", { className: ru.xY, "aria-hidden": !0 }),
                    (0, r.jsx)(ns, {}),
                    (0, r.jsx)(t1.F, {
                        children: t
                            ? (0, r.jsxs)("div", {
                                  className: ru.jC,
                                  children: [
                                      (0, r.jsx)(a9, { selectTab: n, getScrollOffset: d }),
                                      (0, r.jsx)(rc, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: ru.b9,
                                  children: (0, r.jsx)(a6, { analyticsLocations: a, selectTab: n, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var rm = n(897503),
    rh = n(787188);
function rg(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, r.jsx)(rm.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: nu.Ye.GAME_PROFILE_GAME_SHOP,
        className: rh.kL,
        scrollerClassName: rh.XG,
        promotionBannerClassName: rh.Rv,
    });
}
var rx = n(733391),
    rf = n(171616);
function rp(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: i,
            onClose: a,
            initialScrollOffset: o,
            initialTab: c,
            navigateToGame: F,
        } = e,
        [U, Y] = s.useState(!0),
        [B, W] = s.useState(null),
        { clientThemesClassName: z } = (0, A.Ay)(),
        H = (0, m.bG)([C.default], () => C.default.locale),
        X = s.useMemo(() => (0, S.generateViewId)(), []),
        { analyticsLocations: K } = (0, p.Ay)(f.A.GAME_PROFILE),
        $ = (0, L.s)(t),
        { data: J } = (0, b.I)(t),
        q = J?.getOfficialApplicationId(),
        Q = (0, R.rG)(J),
        Z = null != q,
        ee = (0, m.bG)([v.A], () => null != q && v.A.didFetchingApplicationFail(q), [q]),
        et = J?.name ?? "",
        en = (0, O.A)(J),
        el = s.useRef(null);
    s.useEffect(() => {
        el.current = B;
    }, [B]);
    let {
            hasAlreadyLinked: ei,
            canStartAuthorization: ea,
            fetched: er,
            startAuthorization: es,
            connectionApp: eo,
        } = (0, j.RD)(J),
        { invite: ec, isMember: ed, isResolving: em } = (0, R.Ay)(J, W),
        { socialLayerStorefrontRecommendationsData: eh, socialLayerStorefrontRecommendationsLoading: eg } = (function (
            e,
        ) {
            let t = D.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [P.A],
                    () => ({
                        storefrontApplicationId: null != e ? P.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === P.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, G.h)(l),
                r = (0, m.bG)([v.A], () => null != l && v.A.didFetchingApplicationFail(l), [l]),
                o = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: c, status: u } = (0, _.XQ)({
                    applicationIds: o,
                    userIds: n,
                    numItems: 6,
                    source: w.B.USER_PROFILE,
                }),
                d = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== u || 0 === c.length
                            ? null
                            : { application: a, skuIds: c.map((e) => e.id), guildId: a.guildId },
                    [a, u, c],
                ),
                h = "loading" === u,
                g = "success" === u && c.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: d,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (h || g),
            };
        })(t),
        ex = s.useCallback(
            function (e) {
                let { similarGameId: l, communityGuildId: i } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, S.getGuildIdAndVerifiedFromInvite)(el.current);
                (0, S.trackGameProfileAction)({
                    gameName: et,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: X,
                    guildId: i ?? a.guildId,
                    isVerified: null == i && a.isVerified,
                    source: n,
                });
            },
            [et, t, X, n],
        );
    ((0, x.Ay)(() => {
        ((0, S.trackGameProfileOpen)({
            source: n,
            viewId: X,
            gameId: t,
            gameName: et,
            authorId: l,
            profileType: S.GameProfileTypes.FullProfile,
        }),
            (0, E.He)());
    }),
        (0, x.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, S.getGuildIdAndVerifiedFromInvite)(el.current),
                l = Date.now(),
                i = $.map((e) => {
                    let t = (0, I.JM)(e) ? (0, I.W6)(e, l) : (0, I.aJ)(e, H);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, S.trackGameProfileClose)({
                viewId: X,
                gameId: t,
                gameName: et,
                playedFriendIds: $.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: T.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let ef = s.useCallback((e) => {
            Y(e.contentRect.width >= 800);
        }, []),
        ep = (0, d.w)(ef, [], { fireOnMount: !0 }),
        ej = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, g.closeAllModals)(), (0, k.M)()) : a();
            },
            [a],
        ),
        ev = s.useCallback(() => ej(!1), [ej]),
        { navigation: eA, selectionVersion: eE } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.OVERVIEW,
                [n, l] = s.useState(t),
                [i, a] = s.useState(0),
                r = s.useCallback((e) => {
                    (l(e), a((e) => e + 1));
                }, []),
                o = s.useCallback(
                    (t) => {
                        if (t !== n) {
                            let n = M[t];
                            null != n && e(n);
                        }
                        r(t);
                    },
                    [n, r, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: n, selectTab: o }), [n, o]), selectionVersion: i };
        })(ex, c),
        { selectedTab: eI } = eA,
        eb = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                o = eu({ location: "GameProfileModal" });
            s.useEffect(() => {
                o && (0, rx.Xw)();
            }, [o]);
            let c = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && P.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                u = o && null != c,
                { storefront: d } = (0, rf.A)({ applicationId: u ? c : null }),
                [h, g] = s.useState({ storefrontId: d?.id, index: 0 }),
                [x, f] = s.useState(l);
            l !== x && (f(l), l !== y.COMMERCE && g({ storefrontId: d?.id, index: 0 }));
            let p = h.storefrontId === d?.id && h.index < (d?.pages.length ?? 0) ? h.index : 0,
                j = s.useCallback(
                    (e) => {
                        !u ||
                            e < 0 ||
                            e >= (d?.pages.length ?? 0) ||
                            (g({ storefrontId: d?.id, index: e }), i(y.COMMERCE));
                    },
                    [u, i, d],
                );
            return {
                hasCommerceTab: u,
                storefrontApplicationId: c,
                storefront: d,
                selectedStorefrontPageIndex: p,
                selectStorefrontPage: j,
            };
        })({ game: J, navigation: eA }),
        { hasCommerceTab: eN, storefrontApplicationId: ek, storefront: eC, selectedStorefrontPageIndex: eS } = eb,
        ey = Object.values(eC?.promotions ?? {})[0] ?? null,
        eT = s.useMemo(() => {
            if (null != J)
                return {
                    game: J,
                    isTwoColumn: U,
                    canStartAuthorization: ea,
                    hasAlreadyLinked: ei,
                    fetchedAuthorization: er,
                    startAuthorization: es,
                    connectionApp: eo,
                    invite: ec,
                    hasDiscordWebsite: Q,
                    hasOfficialApplication: Z,
                    officialApplicationFetchFailed: ee,
                    isCommunityInviteResolving: em,
                    isMember: ed,
                    socialLayerStorefrontRecommendationsData: eh,
                    socialLayerStorefrontRecommendationsLoading: eg,
                    hasCommerceTab: eN,
                    storefrontPromotion: ey,
                    closeModal: ej,
                    navigateToGame: F,
                    trackAction: ex,
                    viewId: X,
                };
        }, [J, U, ea, ei, er, es, eo, ec, Q, Z, ee, em, ed, eh, eg, eN, ey, ej, F, ex, X]);
    return null == J
        ? null
        : (0, r.jsx)(p.f5, {
              value: K,
              children: (0, r.jsx)(h.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, r.jsx)(V.Provider, {
                      value: eT,
                      children: (0, r.jsx)("div", {
                          className: u()(z, a1.kL),
                          ref: ep,
                          children: (0, r.jsxs)(N.A, {
                              obscured: en,
                              onClose: ev,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: u()(a1.sx, { [a1.Tk]: eI !== y.COMMERCE }),
                                      children: (0, r.jsx)(eJ, { navigation: eA, socialLayerStorefront: eb }),
                                  }),
                                  eI === y.OVERVIEW &&
                                      (0, r.jsx)(rd, {
                                          selectTab: eA.selectTab,
                                          selectionVersion: eE,
                                          initialScrollOffset: o,
                                          isTwoColumn: U,
                                          analyticsLocations: K,
                                      }),
                                  eI === y.COMMUNITIES && (0, r.jsx)(t0, {}),
                                  eI === y.COMMERCE && (0, r.jsx)(rg, { applicationId: ek, selectedPageIndex: eS }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let rj = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a, ...o } = e,
        [c, u] = s.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a }),
        d = c.gameId,
        m = s.useCallback(
            (e, t) => {
                e !== d && ((0, R.UT)(e), u({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, r.jsx)(
        rp,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            initialTab: c.initialTab,
            navigateToGame: m,
            ...o,
        },
        c.gameId,
    );
};
