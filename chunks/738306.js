n.d(t, { default: () => rt });
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
    x = n(192308),
    g = n(964486),
    f = n(793574),
    p = n(688810),
    j = n(206828),
    v = n(587895),
    A = n(590703),
    I = n(180170),
    b = n(583846),
    E = n(454908),
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
    P = n(429913),
    G = n(832163),
    w = n(820847),
    V = n(862772),
    D = n(287809);
let _ = s.createContext(void 0);
function F() {
    let e = s.useContext(_);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var U = n(109112),
    Y = n(761508),
    B = n(834730),
    z = n(858899),
    W = n(265872),
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
    ex = n(926268),
    eg = n(53788),
    ef = n(831453),
    ep = n(785866),
    ej = n(555704),
    ev = n(47675),
    eA = n(633075),
    eI = n(289173),
    eb = n(321191),
    eE = n(958805),
    eN = n(735321),
    ek = n(714889),
    eC = n(280450),
    eS = n(403362);
async function ey(e) {
    let t = e((0, eN.BF)());
    await eE.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var eT = n(652215);
function eL(e) {
    var t;
    let l,
        i,
        { className: a, activeTab: c } = e,
        { game: u, closeModal: d, trackAction: h } = F(),
        g = s.useRef(null),
        p = s.useRef(null),
        j = (0, el.A)({ id: u.id, label: em.intl.string(em.t.SHQGPj) }),
        v =
            ((t = u.id),
            (l = o.useContext(_)?.trackAction),
            (i = s.useCallback(() => {
                null != t &&
                    (l?.(S.GameProfileTrackActionActions.Feedback),
                    (0, x.openModalLazy)(async () => {
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
                            icon: ex.HeartIcon,
                        },
                        {
                            type: eh.x.PLAYED_GAMES,
                            addLabel: em.intl.string(em.t["0xIVLR"]),
                            removeLabel: em.intl.string(em.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eg.G,
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
                a = (0, m.yK)([eb.A], () => (null == l ? [] : (eb.A.getUserProfile(l)?.widgets ?? [])), [l]),
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
                                let a = i.filter(eI.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eN.uA)(a))) return i;
                                    let n = { gameId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new eI.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new eI.Yy({ ...a, games: e });
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
                x = [];
            if (null != c) {
                let e = a.some((e) => e instanceof eA.R && e.applicationId === c);
                x.push(
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
                    let n = a.filter(eI.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, eN.uA)(n);
                    x.push(
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
            return 0 === x.length ? null : x;
        })(u),
        I = eu({ location: "GameProfileOverflowMenu" }),
        b = (0, m.bG)([G.A], () => G.A.getApplicationIdFromDetectableId(u.id)),
        E = (0, m.bG)([G.A], () => G.A.hasStorefrontForApplicationId(b), [b]),
        N = s.useCallback(() => {
            null != b && (0, ei.G)({ applicationId: b });
        }, [b]),
        k = s.useCallback(() => {
            null != b && (h(S.GameProfileTrackActionActions.GameShop), (0, ei.default)({ applicationId: b }), d());
        }, [b, h, d]),
        C = s.useCallback(() => d(!1), [d]),
        T = s.useCallback(() => {
            h(S.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eT.BVt.GAME_PROFILE(u.id)}`;
            (0, er.C)(e, () => {
                (0, z.P0)({ text: em.intl.string(em.t["+5kSoW"]), variant: "success" });
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
                (0, r.jsx)(W.Y, {
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
            E &&
                !I &&
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
                (0, r.jsx)(W.Y, {
                    targetElementRef: g,
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
                                ref: g,
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
function eP(e) {
    let { className: t, navigation: n } = e,
        { game: l } = F();
    return (l.communityGuildIds?.length ?? 0) < 3 ? null : (0, r.jsx)(eO, { className: t, navigation: n });
}
var eG = n(661531),
    ew = n(331322),
    eV = n(278416),
    eD = n(478016),
    e_ = n(900797),
    eF = n(847374),
    eU = n(421773),
    eY = n(225647),
    eB = n(421108);
let ez = "text-md/medium",
    eW = [];
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
                (0, r.jsx)(eV.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eG.A.colors.ICON_FEEDBACK_POSITIVE,
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
        m = c?.pages ?? eW,
        h = s.useRef(null),
        { isHovered: x, setIsHovered: g, onMouseEnter: f, onMouseLeave: p, cancelTimers: j } = (0, eU.A)(100, 100),
        v = em.intl.string(em.t["J3/JCl"]),
        A = s.useCallback(
            (e) => {
                (j(), g(e));
            },
            [j, g],
        );
    return (0, r.jsx)(W.Y, {
        targetElementRef: h,
        shouldShow: x,
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
                c = s ? e_.t : eF.a;
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
                    variant: ez,
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
                  variant: ez,
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
                        (0, r.jsx)(eP, { className: e$.Mf, navigation: t }),
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
    e9 = n(73153);
let e5 = {};
class e7 extends m.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eC.default);
    }
    getGuild(e) {
        return e5[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => e5[e]?.guild).filter(eS.Vq);
    }
    isFetching(e) {
        return e.some((e) => e5[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let n = e5[e];
            return (
                null == n ||
                "failed" === n.fetchState ||
                ("fetching" !== n.fetchState && (null == n.fetchedAt || t - n.fetchedAt >= 36e5))
            );
        });
    }
}
let te = new e7(e9.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e5[e] = { guild: e5[e]?.guild ?? null, fetchState: "fetching", fetchedAt: e5[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: n } = e,
                l = Date.now(),
                i = new Map(n.map((e) => [e.id, (0, e2.jE)(e)]));
            for (let e of t) e5[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: l };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e5[e] = { guild: e5[e]?.guild ?? null, fetchState: "failed", fetchedAt: e5[e]?.fetchedAt ?? null };
        },
    }),
    tt = new Map();
async function tn(e) {
    e9.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await e6.Bo.get({
                url: eT.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            n = t.body?.guilds ?? [];
        e9.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: n });
    } catch (t) {
        throw (e9.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
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
var tm = n(534514),
    th = n(714991),
    tx = n(486020),
    tg = n(240248);
function tf(e) {
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
var tp = n(799699),
    tj = n(827085);
function tv(e) {
    let { className: t } = e;
    return (0, r.jsx)(tp.Ay, { className: u()(tj.qV, t) });
}
function tA(e) {
    let { presenceCount: t, memberCount: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("div", {
              className: tj.kL,
              children: [
                  null != t &&
                      (0, r.jsxs)("div", {
                          className: tj.U9,
                          children: [
                              (0, r.jsx)("i", { className: tj._o }),
                              (0, r.jsx)(B.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != n &&
                      (0, r.jsxs)("div", {
                          className: tj.U9,
                          children: [
                              (0, r.jsx)("i", { className: tj.jk }),
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
    return (0, r.jsxs)(tp.qT, {
        className: tI.uW,
        animationDelayMs: 300,
        children: [
            (0, r.jsx)(tp.Ay, { className: tI.dU, width: "30%" }),
            (0, r.jsx)(tp.qT, {
                className: tI.nV,
                children: (0, r.jsxs)("div", {
                    className: tI.hQ,
                    children: [(0, r.jsx)(tE, {}), (0, r.jsx)(tp.pv, {})],
                }),
            }),
        ],
    });
}
function tE() {
    return (0, r.jsxs)("div", {
        className: tI.To,
        children: [
            (0, r.jsx)(tp.Ay, { className: tI.QV }),
            (0, r.jsxs)("div", {
                className: tI.Yv,
                children: [
                    (0, r.jsx)(tp.Ay, { className: tI.Ag }),
                    (0, r.jsx)(tp.Ay, { className: tI.zl }),
                    (0, r.jsx)(tv, { className: tI.P2 }),
                ],
            }),
        ],
    });
}
function tN(e) {
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
            a && (0, r.jsx)(tp.Ay, { className: tI.EQ }),
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
function tk(e) {
    let { guild: t, presenceCount: n, memberCount: l } = e;
    return (0, r.jsxs)("div", {
        className: tI.To,
        children: [
            (0, r.jsx)(tN, { guild: t }),
            (0, r.jsxs)("div", {
                className: tI.yj,
                children: [
                    (0, r.jsxs)("div", {
                        className: tI.YS,
                        children: [
                            (0, r.jsx)(th.A, { guild: t, size: 16 }),
                            (0, r.jsx)(tm.D, {
                                className: tI.J5,
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, tg.uJ)(t.description) &&
                        (0, r.jsx)(B.E, {
                            className: tI.h_,
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, r.jsx)(tA, { presenceCount: n, memberCount: l }),
                ],
            }),
        ],
    });
}
function tC(e) {
    let { guild: t, presenceCount: n, memberCount: l, button: i, className: a } = e;
    return (0, r.jsx)("div", {
        className: u()(tI.kL, a),
        children: (0, r.jsxs)("div", {
            className: tI.hQ,
            children: [(0, r.jsx)(tk, { guild: t, presenceCount: n, memberCount: l }), i],
        }),
    });
}
function tS() {
    let {
            invite: e,
            hasDiscordWebsite: t,
            isCommunityInviteResolving: n,
            isMember: l,
            closeModal: i,
            trackAction: a,
        } = F(),
        o = s.useCallback(() => {
            null != e &&
                (a(S.GameProfileTrackActionActions.JoinServer),
                i(),
                e9.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: e.code, context: eT.BRT.APP }));
        }, [e, a, i]);
    return null == e || null == e.guild
        ? t && n
            ? (0, r.jsx)(tb, {})
            : null
        : (0, r.jsxs)("div", {
              className: tI.uW,
              children: [
                  (0, r.jsx)(tm.D, {
                      className: tI.Gf,
                      variant: "text-md/medium",
                      color: "text-subtle",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, r.jsx)(tC, {
                      guild: e.guild,
                      presenceCount: e.approximate_presence_count,
                      memberCount: e.approximate_member_count,
                      button: (0, r.jsx)(tf, { guildName: e.guild.name, isMember: l, onClick: o, fullWidth: !0 }),
                  }),
              ],
          });
}
var ty = n(320448),
    tT = n(152594);
function tL(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, r.jsxs)("div", {
        className: tT.kL,
        "aria-busy": !0,
        children: [
            (0, r.jsxs)("div", {
                className: tT.wR,
                children: [(0, r.jsx)(tp.Ay, { className: tT.Iz, width: n }), l && (0, r.jsx)(tp.pv, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tR(e) {
    let { children: t, title: n, onClickViewAll: l, trailing: i } = e;
    return (0, r.jsxs)("div", {
        className: tT.kL,
        children: [
            (0, r.jsxs)("div", {
                className: tT.wR,
                children: [
                    (0, r.jsx)(tm.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, r.jsx)(K.$, {
                            size: "sm",
                            icon: ty._,
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
var tM = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tO = (0, to.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tP = n(876798),
    tG = n(481901),
    tw = n(916099),
    tV = n(461353);
function tD() {
    let { layout: e, setLayout: t } = tO(),
        n = em.intl.string(em.t.VGRZh7),
        l = em.intl.string(em.t["NJFr+g"]);
    return (0, r.jsxs)("div", {
        className: tV.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, r.jsx)(J.m, {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(tP.k, {
                    icon: tG.d,
                    pressed: e === tM.GRID,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tM.GRID),
                }),
            }),
            (0, r.jsx)(J.m, {
                text: l,
                asContainer: !0,
                children: (0, r.jsx)(tP.k, {
                    icon: tw.ListBulletsIcon,
                    pressed: e === tM.LIST,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tM.LIST),
                }),
            }),
        ],
    });
}
var t_ = n(37646),
    tF = n(846183);
function tU(e) {
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
function tY(e) {
    let { locales: t } = e,
        n = s.useRef(null),
        l = em.intl.string(em.t.OlOHDH);
    return (0, r.jsx)("div", {
        className: tF.k,
        children: (0, r.jsx)(W.Y, {
            targetElementRef: n,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(tU, { locales: t, onClose: n });
            },
            children: (e) =>
                (0, r.jsx)(J.m, {
                    text: l,
                    asContainer: !0,
                    children: (0, r.jsx)(q.K, {
                        buttonRef: n,
                        icon: t_.U,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": l,
                        ...e,
                    }),
                }),
        }),
    });
}
var tB = n(939249),
    tz = n(762841);
function tW(e) {
    let { className: t, ariaLabel: n, onClick: l, children: i } = e;
    return (0, r.jsx)(tB.D, { className: u()(tz.v, t), onClick: l, "aria-label": n, children: i });
}
var tH = n(759020);
function tX(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsxs)(tW, {
        className: tH.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, r.jsxs)("div", {
                className: tH.OA,
                children: [
                    (0, r.jsx)(tN, { guild: t }),
                    (0, r.jsxs)("div", {
                        className: tH.FS,
                        children: [
                            (0, r.jsxs)("div", {
                                className: tH.YS,
                                children: [
                                    (0, r.jsx)(th.A, { guild: t, size: 16 }),
                                    (0, r.jsx)(tm.D, {
                                        className: tH.J5,
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, tg.uJ)(t.description) &&
                                (0, r.jsx)(B.E, {
                                    className: tH.h_,
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: tH.Rn, children: (0, r.jsx)(tA, { presenceCount: n, memberCount: l }) }),
        ],
    });
}
var tK = n(620387);
function t$(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsx)(tp.qT, { className: tK.s7, animationDelayMs: t, children: (0, r.jsx)(tE, {}) });
}
function tJ(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsxs)(tp.qT, {
        className: tK.fv,
        animationDelayMs: t,
        children: [
            (0, r.jsx)(tp.Ay, { className: tK.VR }),
            (0, r.jsxs)("div", {
                className: tK.hG,
                children: [
                    (0, r.jsx)(tp.Ay, { className: tK.t_ }),
                    (0, r.jsx)(tp.Ay, { className: tK.Aj }),
                    (0, r.jsx)(tp.Ay, { className: tK.ax }),
                ],
            }),
            (0, r.jsx)(tp.Ay, { className: tK.Ah }),
        ],
    });
}
function tq(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsx)(tW, {
        className: tK.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, r.jsx)(tk, { guild: t, presenceCount: n, memberCount: l }),
    });
}
function tQ(e) {
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
        d = n === tM.LIST ? tX : tq;
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
function tZ() {
    var e;
    let t,
        n,
        { game: l } = F(),
        { data: i, isLoading: a } = ts(l.id),
        o = tO((e) => e.layout),
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
        m = o === tM.LIST,
        h = m ? tJ : t$,
        x = a && (null == i || 0 === i.length);
    return (0, r.jsxs)(eZ.Ch, {
        className: tK.XG,
        children: [
            (0, r.jsx)("div", { className: tK.xY, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: tK.uW,
                children: (0, r.jsx)(tR, {
                    title: em.intl.string(em.t.r6bvTh),
                    trailing: (0, r.jsxs)("div", {
                        className: tK.AA,
                        children: [d && (0, r.jsx)(tY, { locales: c }), (0, r.jsx)(tD, {})],
                    }),
                    children: (0, r.jsx)("div", {
                        className: m ? tK.p_ : tK.Vg,
                        children: x
                            ? eQ()
                                  .range(8)
                                  .map((e) => (0, r.jsx)(h, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, r.jsx)(tQ, { guild: e, layout: o }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var t0 = n(707554),
    t1 = n(369606),
    t8 = n(775602),
    t2 = n(21161),
    t4 = n(400492),
    t3 = n(541830),
    t6 = n(459746);
let t9 = "1552821538409939044";
var t5 = n(175213);
let t7 = n(892799);
function ne(e) {
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
    return (0, tg.uJ)(l)
        ? null
        : (0, r.jsxs)("div", {
              ref: t,
              children: [
                  (0, r.jsx)("div", { className: t5.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, r.jsx)("div", { className: t5.N4 }),
              ],
          });
}
function nt() {
    let { game: e } = F(),
        t = (e.genres ?? []).map(t3.du).join(", ");
    return (0, tg.uJ)(t) ? null : (0, r.jsx)(B.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function nn(e) {
    let { rank: t } = e;
    return (0, r.jsxs)("div", {
        className: t5.Qc,
        children: [
            (0, r.jsx)(t1.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, r.jsx)(B.E, {
                variant: "text-xs/semibold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function nl() {
    return (0, r.jsx)(ni, { className: t5._M, imageClassName: t5.xe });
}
function ni(e) {
    let { className: t, imageClassName: n } = e,
        { game: l } = F(),
        i = (0, r.jsx)(t6.Ay, { game: l, className: n, size: t6.wu.LARGE });
    return l.id !== t9
        ? (0, r.jsx)("div", { className: t, children: i })
        : (0, r.jsx)(na, { className: t, children: i });
}
function na(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(t2.x),
        i = (0, m.bG)([t8.Ay], () => t8.Ay.useReducedMotion),
        a = s.useRef({ count: 0, lastTime: 0 });
    return (0, r.jsx)(tB.D, {
        className: u()(n, t5.b3),
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
                (0, t4.Ak)("discodo");
            }
        },
        children: t,
    });
}
let nr = function () {
    let { game: e, isTwoColumn: t } = F(),
        n = e.name;
    return (0, r.jsxs)("div", {
        className: t5.ap,
        children: [
            t && (0, r.jsx)(ni, { className: t5.Tf, imageClassName: t5.w$ }),
            (0, r.jsxs)("div", {
                className: t5.lu,
                children: [
                    null != e.l30Rank && (0, r.jsx)(nn, { rank: e.l30Rank }),
                    (0, r.jsxs)("div", {
                        className: t5.$,
                        children: [
                            (0, r.jsx)(tm.D, { variant: "heading-xxl/semibold", children: n }),
                            e.id === t9 &&
                                (0, r.jsx)("img", {
                                    src: t7,
                                    className: t5.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, r.jsx)(nt, {}),
                ],
            }),
        ],
    });
};
var ns = n(638495),
    no = n(871123),
    nc = n(439303),
    nu = n(317560),
    nd = n(467884),
    nm = n(197935),
    nh = n(761812);
function nx(e) {
    return e;
}
function ng(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: nh.B, children: t });
}
function nf(e) {
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
        : (0, r.jsx)(nm.A, {
              gap: "md",
              "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
              items: t,
              getItemKey: nx,
              disableFocusRingScope: !0,
              renderItem: (e, t, l) =>
                  (0, r.jsx)(ng, {
                      children: (0, r.jsx)(nd.Ay, {
                          positionInSection: l,
                          skuId: e,
                          variant: nd.s6.SMALL,
                          analyticsLocations: n,
                          onClick: i,
                          listItemProps: t,
                      }),
                  }),
          });
}
var np = n(326369),
    nj = n(936785),
    nv = n(403581),
    nA = n(812095),
    nI = n(647474),
    nb = n(162536);
function nE(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, eB.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        a = i ? nv.t : t.Icon;
    return (0, r.jsx)(nI.A, {
        className: u()(nb.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, r.jsxs)("div", {
            className: nb.Qs,
            children: [
                null != a && (0, r.jsx)(a, { size: "xs", color: "currentColor", className: nb.Kk }),
                (0, r.jsx)(B.E, { variant: "text-sm/normal", color: "currentColor", children: (0, nA.U)(t.text) }),
            ],
        }),
    });
}
var nN = n(521058);
function nk() {
    let { storefrontPromotion: e } = F();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, tg.uJ)(a.headerText)) return null;
    let s = {
        Icon: (0, nj.LZ)(l?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, nj.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, r.jsx)(nE, { className: nN.v, promotion: s });
}
let nC = [0, 1, 2, 3],
    nS = { placement: nc.Ye.GAME_PROFILE };
function ny() {
    return (0, r.jsx)(tL, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, r.jsx)(np.A, { children: nC.map((e) => (0, r.jsx)(ng, { children: (0, r.jsx)(nd.yf, {}) }, e)) }),
    });
}
function nT(e) {
    let { selectTab: t } = e,
        n = (0, ns.k)(),
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
                    (0, nu.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: n,
                        onClose: () => {
                            let { pathname: e, search: n } = location;
                            (0, no.rG)(e, n, t, a) && c();
                        },
                    }));
            },
            [l, c, u, i, n],
        );
    if (a) return (0, r.jsx)(ny, {});
    if (null == i) return null;
    let { skuIds: h } = i;
    return (0, r.jsxs)(tR, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, r.jsx)(nk, {}),
            (0, r.jsx)(nc.E9, {
                newValue: nS,
                children: (0, r.jsx)(nf, { skuIds: h, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var nL = n(621466),
    nR = n(966697),
    nM = n(346055),
    nO = n(460905),
    nP = n(776231),
    nG = n(46054),
    nw = n(58703),
    nV = n(890060),
    nD = n(880405),
    n_ = n(284009),
    nF = n.n(n_),
    nU = n(376728),
    nY = n(976860);
async function nB(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    nF()(a.length > 0, "analyticsLocationStack must have at least one location");
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
                (await nU.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, nY.pX)(eT.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var nz = n(806244),
    nW = n(165648);
function nH(e, t) {
    return nG.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function nX(e) {
    return e.id;
}
function nK() {
    return (0, r.jsxs)(tp.qT, {
        className: nz.s7,
        children: [
            (0, r.jsx)(tp.Ay, { className: nz.o$ }),
            (0, r.jsxs)("div", {
                className: nz.UF,
                children: [(0, r.jsx)(tp.Ay, { className: nz.iX }), (0, r.jsx)(tp.Ay, { className: nz.jt })],
            }),
        ],
    });
}
function n$(e, t) {
    let n = (0, nP.kr)(364 * (0, nP.mZ)());
    return (0, nV.VZ)(e, n, Math.round(n / t)) ?? e;
}
function nJ(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, a] = s.useState(!1),
        o = s.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, r.jsx)(nR.y, {
              readyState: i ? eT.Rv1.READY : eT.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, r.jsx)("img", {
                  src: n,
                  className: nz.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: o,
              }),
          });
}
function nq(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nL.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nL.vq)(e.target, HTMLSpanElement) && (0, nL.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        d = null != c ? n$(c, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, r.jsx)(tB.D, {
              ...i,
              className: nz.Nr,
              onClick: a,
              children: (0, r.jsxs)(nM.M, {
                  className: nz.zI,
                  children: [
                      null != m.url &&
                          (0, r.jsx)(B.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: nz.Ow,
                              children: m.url,
                          }),
                      (0, r.jsxs)("div", {
                          className: nz._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, r.jsxs)("div", {
                                      className: nz.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, r.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: nz.SG,
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
                                      className: nz.ax,
                                      children: (0, r.jsx)(nJ, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, r.jsx)(tm.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      className: nz.DD,
                                      children: nH(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, r.jsxs)("div", {
                                      className: u()(nz.h_, nW.PT),
                                      children: [nH(t.body, n), (0, r.jsx)("div", { className: nz.fm })],
                                  }),
                              (0, r.jsxs)("div", {
                                  className: nz.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, r.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: nz.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, r.jsxs)(B.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, nw.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, r.jsxs)("div", {
                                              className: nz.a5,
                                              children: [
                                                  (0, r.jsx)(nO.n, { size: "xs", color: "currentColor" }),
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
let nQ = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, r.jsxs)(nM.M, {
        className: nz.zI,
        children: [
            null != t.title &&
                (0, r.jsx)(tm.D, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    className: nz.DD,
                    children: nH(t.title, n),
                }),
            t.body.length > 0 &&
                (0, r.jsxs)("div", {
                    className: u()(nz.h_, nW.PT),
                    children: [nH(t.body, n), (0, r.jsx)("div", { className: nz.fm })],
                }),
            (0, r.jsxs)("div", {
                className: nz.ov,
                children: [
                    (0, r.jsx)(B.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, nw.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, r.jsxs)("div", {
                            className: nz.a5,
                            children: [
                                (0, r.jsx)(nO.n, { size: "xs", color: "currentColor" }),
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
function nZ(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nL.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nL.vq)(e.target, HTMLSpanElement) && (0, nL.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        u = null != c ? n$(c, o) : void 0;
    return (0, r.jsxs)(tB.D, {
        ...i,
        className: nz.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, r.jsx)("div", {
                    className: nz.Vl,
                    children: (0, r.jsx)(nJ, { message: t, src: u, aspectRatio: o }),
                }),
            (0, r.jsx)(nQ, { message: t, channelId: n }),
        ],
    });
}
function n0(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        a = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, r.jsx)(tB.D, {
        ...l,
        className: nz.Nr,
        onClick: a,
        children: (0, r.jsxs)(nM.M, {
            className: nz.zI,
            children: [
                (0, r.jsx)(tm.D, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    className: nz.MH,
                    children: i.question.text,
                }),
                (0, r.jsxs)("div", {
                    className: nz.xd,
                    children: [
                        o.map((e) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className: nz.Nf,
                                    children: (0, r.jsx)(B.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: nz.TT,
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
                                className: nz.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: nz.ov,
                    children: (0, r.jsx)(B.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, nV.jL)(i),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function n1(e) {
    return null != e.message.poll
        ? (0, r.jsx)(n0, { ...e })
        : null != e.message.embedSource
          ? (0, r.jsx)(nq, { ...e })
          : (0, r.jsx)(nZ, { ...e });
}
let n8 = s.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: n } = (0, p.Ay)(),
        { game: l, invite: i, hasDiscordWebsite: a, closeModal: o, trackAction: c } = F(),
        u = l.id,
        {
            messages: d,
            guildId: h,
            channelId: x,
            loading: g,
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
                    null == e || n || T.A.isAnnouncementsFetching(e) || (0, nD.Rf)(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(u),
        j = s.useCallback(() => {
            let e = i?.guild?.id ?? h;
            null != e &&
                null != x &&
                (c(S.GameProfileTrackActionActions.Announcements),
                e4.default.setGameProfilePendingReturn({ gameId: u, channelId: x, initialScrollOffset: t() }),
                o(),
                nB({ invite: i, guildId: e, channelId: x, analyticsLocationStack: n }));
        }, [c, o, t, i, h, x, n, u]),
        v = s.useCallback(
            (e) => {
                let l = i?.guild?.id ?? h;
                null != l &&
                    null != x &&
                    (c(S.GameProfileTrackActionActions.AnnouncementsItem),
                    e4.default.setGameProfilePendingReturn({ gameId: u, channelId: x, initialScrollOffset: t() }),
                    o(),
                    nB({ invite: i, guildId: l, channelId: x, messageId: e, analyticsLocationStack: n }));
            },
            [c, o, t, i, h, x, n, u],
        ),
        A = null != x && d.length > 0;
    return (!f || g) && a
        ? (0, r.jsx)(tL, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, r.jsx)(np.A, {
                  gap: 16,
                  children: eQ()
                      .range(3)
                      .map((e) => (0, r.jsx)(nK, {}, e)),
              }),
          })
        : A
          ? (0, r.jsx)(tR, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: j,
                children: (0, r.jsx)(nm.A, {
                    gap: 16,
                    items: d,
                    getItemKey: nX,
                    itemClassName: nz.hu,
                    renderItem: (e, t) =>
                        (0, r.jsx)(n1, { message: e, channelId: x, onCardClick: v, listItemProps: t }, e.id),
                }),
            })
          : null;
});
var n2 = n(155718),
    n4 = n(505779);
(n(323874), n(14289), n(35956));
var n3 = n(989441);
let n6 = {
        appStore: {
            websiteCategories: [n4.V1.IPHONE, n4.V1.IPAD],
            websiteHostnames: n4.FU,
            distributor: n3.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://${n4.FU["0"]}/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [n4.V1.ANDROID],
            websiteHostnames: n4.SX,
            distributor: n3.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://${n4.SX["0"]}/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    n9 = new Set(
        Object.values(n6).flatMap((e) => {
            let { websiteCategories: t } = e;
            return t;
        }),
    );
function n5(e, t) {
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
var n7 = n(808380);
let le = [n7.Y.DESKTOP, "mobile", n7.Y.XBOX, n7.Y.PLAYSTATION, n7.Y.NINTENDO, n7.Y.ROBLOX];
var lt = n(28863),
    ln = n(975807),
    ll = n(194362);
function li() {
    let { game: e, trackAction: t } = F(),
        n = s.useCallback(async () => {
            t(S.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, ll.a)(eT.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, ln.A)(e);
        }, [t]),
        l = s.useCallback((e) => (0, r.jsx)(lt.Anchor, { onClick: n, children: e }), [n]);
    return e.linkedApplications?.some((e) => e.type === n2.Mh.OFFICIAL)
        ? null
        : (0, r.jsx)(B.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: l }),
          });
}
var la = n(998445),
    lr = n(274997),
    ls = n(80500),
    lo = n(319745),
    lc = n(488225),
    lu = n(967492),
    ld = n(72265),
    lm = n(454346),
    lh = n(341904),
    lx = n(423438),
    lg = n(610509),
    lf = n(575888),
    lp = n(924895),
    lj = n(37948),
    lv = n(693558);
let lA = { size: "xs", colorClass: lv.w };
function lI(e) {
    let { website: t } = e,
        { trackAction: n } = F(),
        l = (0, lj.A)(),
        {
            action: i,
            icon: a,
            title: o,
        } = (function (e, t) {
            switch (e.category) {
                case n4.V1.OFFICIAL:
                    return {
                        icon: (0, r.jsx)(la.GlobeEarthIcon, { ...t }),
                        action: S.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case n4.V1.TWITTER:
                    return {
                        icon: (0, r.jsx)(lr.p, { ...t }),
                        action: S.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case n4.V1.YOUTUBE:
                    return {
                        action: S.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, r.jsx)(ls.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case n4.V1.FACEBOOK:
                    return {
                        icon: (0, r.jsx)(lo.Z, { ...t }),
                        action: S.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case n4.V1.INSTAGRAM:
                    return {
                        icon: (0, r.jsx)(lc.L, { ...t }),
                        action: S.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case n4.V1.BLUESKY:
                    return {
                        icon: (0, r.jsx)(lu.a, { ...t }),
                        action: S.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case n4.V1.REDDIT:
                    return {
                        icon: (0, r.jsx)(ld.T, { ...t }),
                        action: S.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case n4.V1.TWITCH:
                    return {
                        icon: (0, r.jsx)(lm.a, { ...t }),
                        action: S.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                case n4.V1.ITCH:
                    return {
                        icon: (0, r.jsx)(lh.x, { ...t }),
                        action: S.GameProfileTrackActionActions.ItchLink,
                        title: em.intl.string(em.t.nOrtg9),
                    };
                case n4.V1.WIKIA:
                    return {
                        icon: (0, r.jsx)(lx.g, { ...t }),
                        action: S.GameProfileTrackActionActions.FandomLink,
                        title: em.intl.string(em.t.xDtQAQ),
                    };
                case n4.V1.IPHONE:
                case n4.V1.IPAD:
                    return {
                        icon: (0, r.jsx)(lg.z, { ...t }),
                        action: S.GameProfileTrackActionActions.AppStoreLink,
                        title: em.intl.string(em.t.LVy7Ug),
                    };
                case n4.V1.ANDROID:
                    return {
                        icon: (0, r.jsx)(lf.O, { ...t }),
                        action: S.GameProfileTrackActionActions.GooglePlayStoreLink,
                        title: em.intl.string(em.t.V6rllO),
                    };
                case n4.V1.ROBLOX:
                    return {
                        icon: (0, r.jsx)(lp.H, { ...t }),
                        action: S.GameProfileTrackActionActions.RobloxStoreLink,
                        title: em.intl.string(em.t["pJ+P+h"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, lA),
        c = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, r.jsx)(J.m, {
        text: o,
        children: (0, r.jsx)(tB.D, { onClick: c, className: lv.y, title: o, children: a }),
    });
}
var lb = n(31300),
    lE = n(646270),
    lN = n(802516),
    lk = n(22363),
    lC = n(418524);
let lS = {
    [n7.Y.DESKTOP]: lb.k,
    mobile: lE.u,
    [n7.Y.XBOX]: lN.Y,
    [n7.Y.PLAYSTATION]: lk.X,
    [n7.Y.NINTENDO]: lC.M,
    [n7.Y.ROBLOX]: lp.H,
};
function ly(e) {
    let { platform: t } = e,
        n = (function (e) {
            switch (e) {
                case n7.Y.DESKTOP:
                    return em.intl.string(em.t.KT6uCJ);
                case "mobile":
                    return em.intl.string(em.t["0DvssQ"]);
                case n7.Y.XBOX:
                    return em.intl.string(em.t.DDWUJp);
                case n7.Y.PLAYSTATION:
                    return em.intl.string(em.t.fzMz2s);
                case n7.Y.NINTENDO:
                    return em.intl.string(em.t.AMW8je);
                case n7.Y.ROBLOX:
                    return em.intl.string(em.t.MPURhG);
            }
        })(t),
        l = lS[t];
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
var lT = n(424994),
    lL = n(623828);
function lR() {
    return (0, r.jsx)(B.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let lM = function () {
    let { game: e } = F(),
        t = s.useMemo(() => e.genres.map(t3.du).join(", "), [e]),
        n = e.getCompanyByRole(n2.wk.PUBLISHER),
        l = e.getCompanyByRole(n2.wk.DEVELOPER),
        i = n.map((e) => e.name).join(", "),
        a = l.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        c = s.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(n7.Y.MACOS) || t.has(n7.Y.LINUX)) && t.add(n7.Y.DESKTOP);
            let n = t.has(n7.Y.IOS) || t.has(n7.Y.ANDROID);
            return le.filter((e) => ("mobile" === e ? n : t.has(e)));
        }, [e.platforms]),
        u = s.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return n4.pF.includes(t) && !n9.has(t);
                }),
                n = Object.values(n6)
                    .map((t) => n5(e, t))
                    .filter(eS.Vq);
            return t.sort((e, t) => n4.pF.indexOf(e.category) - n4.pF.indexOf(t.category)).concat(n);
        }, [e]),
        d = !(0, tg.uJ)(t),
        m = !(0, tg.uJ)(i),
        h = !(0, tg.uJ)(a),
        x = !(0, tg.uJ)(o),
        g = c.length > 0,
        f = u.length > 0 && !u.every((e) => (0, tg.uJ)(e.url));
    return (0, r.jsxs)("div", {
        className: lL.uW,
        children: [
            (0, r.jsx)("div", {
                className: lL.Gf,
                children: (0, r.jsx)(tm.D, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: lL.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: lL.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
                            }),
                            d
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lL.Gu,
                                      children: t,
                                  })
                                : (0, r.jsx)(lR, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lL.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
                            }),
                            m
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lL.Gu,
                                      children: i,
                                  })
                                : (0, r.jsx)(lR, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lL.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== l.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            h
                                ? (0, r.jsx)(B.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: lL.Gu,
                                      children: a,
                                  })
                                : (0, r.jsx)(lR, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lL.J1,
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
                                      className: lL.Gu,
                                      children: nw.i$(new Date(o), "LL"),
                                  })
                                : (0, r.jsx)(lR, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lL.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: c.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            g
                                ? (0, r.jsx)("div", {
                                      className: lL.Gu,
                                      children: c.map((e) => (0, r.jsx)(ly, { platform: e }, e)),
                                  })
                                : (0, r.jsx)(lR, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lL.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            f
                                ? (0, r.jsx)("div", {
                                      className: lL.Gu,
                                      children: u.map((e) => (0, r.jsx)(lI, { website: e }, e.url)),
                                  })
                                : (0, r.jsx)(lR, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lL.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: lL.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: lT.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: lL.OQ, children: (0, r.jsx)(li, {}) }),
        ],
    });
};
var lO = n(141628),
    lP = n(289363),
    lG = n(793919);
function lw() {
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: lG.uW,
        children: [
            (0, r.jsx)(tp.Ay, { className: lG.dU, width: "30%" }),
            (0, r.jsxs)(tp.qT, {
                className: lG.nV,
                children: [
                    (0, r.jsx)("div", { className: lG.sB, children: (0, r.jsx)(lP.default, { isLoading: !0 }) }),
                    (0, r.jsxs)("div", {
                        className: lG.hQ,
                        children: [
                            (0, r.jsxs)("div", {
                                className: lG.Yv,
                                children: [(0, r.jsx)(tp.Ay, { width: "55%" }), (0, r.jsx)(tp.Ay, { width: "85%" })],
                            }),
                            (0, r.jsx)(tp.pv, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function lV(e) {
    let { analyticsLocations: t } = e,
        {
            trackAction: n,
            fetchedAuthorization: l,
            hasAlreadyLinked: i,
            canStartAuthorization: a,
            startAuthorization: o,
            connectionApp: c,
            hasOfficialApplication: u,
            officialApplicationFetchFailed: d,
        } = F(),
        h = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        x = s.useCallback(() => {
            (n(S.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !u || d || null == h
        ? null
        : null == c || (a && !l)
          ? (0, r.jsx)(lw, {})
          : !a || i
            ? null
            : (0, r.jsxs)("div", {
                  className: lG.uW,
                  children: [
                      (0, r.jsx)(tm.D, {
                          className: lG.Gf,
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, r.jsxs)("div", {
                          className: lG.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: lG.sB,
                                  children: (0, r.jsx)(lP.default, { application: c }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: lG.hQ,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: lG.FS,
                                          children: [
                                              (0, r.jsx)(tm.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: c.name,
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
                                          icon: lO.A,
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
var lD = n(80687),
    l_ = n(248643),
    lF = n(256905),
    lU = n(44788),
    lY = n(191096),
    lB = n(90721),
    lz = n(371794),
    lW = n(534573),
    lH = n(635377);
let lX = new (n.n(lH)())({ max: 100 });
function lK() {
    let e = new Map();
    return (lX.forEach((t, n) => e.set(n, t)), e);
}
var l$ = n(342857);
function lJ(e, t) {
    return (0, lW.Ec)(e, { size: t, keepAspectRatio: !0, format: tx.QB ? "webp" : null });
}
let lq = s.memo(function (e) {
    let { url: t, size: n, alt: l, className: i, ...a } = e,
        { dimensions: o, recordDimensions: c } = (function () {
            let [e, t] = s.useState(lK);
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
                        let i = lX.get(e) ?? l;
                        (lX.set(e, i),
                            t((t) => {
                                let n = t.get(e);
                                return n?.width === i.width && n.height === i.height ? t : new Map(t).set(e, i);
                            }));
                    },
                    [void 0],
                ),
            };
        })(),
        d = o.get(t),
        m = null != d && d.height > d.width,
        h = s.useCallback(
            (e) => {
                null != e &&
                    0 !== e.naturalWidth &&
                    0 !== e.naturalHeight &&
                    c(t, { width: e.naturalWidth, height: e.naturalHeight });
            },
            [t, c],
        ),
        x = s.useCallback((e) => h(e.currentTarget), [h]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m && (0, r.jsx)("img", { ...a, src: lJ(t, 106), className: l$.cL, alt: "", draggable: !1 }),
            (0, r.jsx)("img", {
                ...a,
                ref: h,
                src: lJ(t, n),
                className: u()(i, l$.Sl, m && l$.F1),
                "data-portrait": m || void 0,
                alt: l,
                onLoad: x,
            }),
        ],
    });
});
var lQ = n(140128);
function lZ(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
let l0 = s.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: i, onSelect: a, gameName: o, listItemProps: c } = e,
            d = s.useCallback(() => a(n), [a, n]),
            m = c?.tabIndex;
        return (0, r.jsx)(tB.D, {
            ...c,
            className: u()(lQ.JS, l && lQ.Y4),
            onClick: d,
            children: (0, r.jsxs)("div", {
                className: lQ.ub,
                children: [
                    (0, r.jsx)("div", {
                        className: lQ.kV,
                        children: (0, r.jsx)(lq, {
                            url: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                            size: 106,
                            className: lQ.xn,
                            alt: em.intl.formatToPlainString(em.t.COYYrn, { game: o }),
                            loading: "lazy",
                            decoding: "async",
                            draggable: !1,
                        }),
                    }),
                    "VIDEO" === t.type &&
                        (0, r.jsx)("div", {
                            className: lQ.UZ,
                            children: (0, r.jsx)(lD.D, { playing: l && i, size: "sm", tabIndex: m }),
                        }),
                ],
            }),
        });
    }),
    l1 = s.memo(function (e) {
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
            (0, lB.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    !n && (0, r.jsx)("canvas", { ref: d, className: lQ.HW, "aria-hidden": "true" }),
                    (0, r.jsx)("div", {
                        className: lQ.tN,
                        children: (0, r.jsx)(l_.A, {
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
                            renderLinkComponent: lU.bU,
                            onPlay: o,
                            onPause: c,
                            onFullscreenChange: u,
                            mediaPlayerClassName: lQ.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function l8() {
    let { game: e, trackAction: t } = F(),
        [n, l] = s.useState(0),
        [i, a] = s.useState(null),
        [o, c] = s.useState(e.screenshotUrls),
        d = s.useRef(null),
        h = s.useRef(null),
        x = (0, m.bG)([t8.Ay], () => t8.Ay.useReducedMotion),
        { obscured: g } = (0, lY.I3)();
    o !== e.screenshotUrls && (c(e.screenshotUrls), l(0));
    let f = s.useMemo(
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
        p = s.useMemo(() => f.map((e, t) => ({ item: e, index: t })), [f]),
        j = f.length > 0 ? Math.min(n, f.length - 1) : 0,
        v = f[j],
        A = v?.type === "VIDEO",
        I = s.useCallback(
            (e) => {
                let t = f[j],
                    n = f[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? a(t.url) : a(null), l(e));
            },
            [f, j],
        ),
        [b, E] = s.useState(!1),
        N = s.useRef(null),
        k = s.useCallback(() => {
            t(A ? S.GameProfileTrackActionActions.ClickTrailer : S.GameProfileTrackActionActions.ClickImage);
            let e = d.current,
                n = N.current,
                i = null != e && !e.paused,
                a = e?.muted ?? !0,
                r = e?.currentTime ?? 0;
            n?.setPlay(!1);
            let s = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === j;
                    return { ...e, autoPlay: !!n && i, autoMute: !n || a, initialTimeSec: n ? r : void 0, videoRef: h };
                }
                return e;
            });
            (0, lF.R)({
                items: s,
                startingIndex: j,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: l,
                onClose: () => {
                    let e = h.current,
                        t = N.current,
                        n = null != e ? !e.paused : i;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        E(n));
                },
            });
        }, [t, f, j, A]),
        C = s.useCallback(() => E(!0), []),
        y = s.useCallback(() => E(!1), []),
        T = s.useCallback(() => a(null), []),
        L = s.useCallback(
            (e) => {
                e && k();
            },
            [k],
        );
    return 0 === f.length
        ? null
        : (0, r.jsxs)("div", {
              className: lQ.kL,
              children: [
                  A
                      ? (0, r.jsx)("div", {
                            className: lQ.ND,
                            children: (0, r.jsx)(
                                l1,
                                {
                                    item: v,
                                    reducedMotion: x,
                                    autoPlay: !x && !g,
                                    videoRef: d,
                                    mediaPlayerRef: N,
                                    onPlay: C,
                                    onPause: y,
                                    onFullscreenChange: L,
                                },
                                `${j}-${v.url}`,
                            ),
                        })
                      : (0, r.jsxs)("div", {
                            className: lQ.wp,
                            children: [
                                null != i &&
                                    !x &&
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: lQ.Jy,
                                            onAnimationEnd: T,
                                            children: (0, r.jsx)(lq, { url: i, size: 900, className: lQ.c8, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, r.jsx)("div", { className: lQ.QN }),
                                (0, r.jsx)(tB.D, {
                                    className: lQ.gv,
                                    onClick: k,
                                    children: (0, r.jsx)("div", {
                                        className: lQ.cs,
                                        children: (0, r.jsx)(
                                            lq,
                                            {
                                                url: v.url,
                                                size: 900,
                                                className: u()(lQ.c8, lQ.Jf),
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  (0, r.jsx)(nm.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      items: p,
                      getItemKey: lZ,
                      renderItem: (t, n) => {
                          let { item: l, index: i } = t;
                          return (0, r.jsx)(
                              l0,
                              {
                                  item: l,
                                  index: i,
                                  isPlaying: b,
                                  isSelected: i === j,
                                  onSelect: I,
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
var l2 = n(49381),
    l4 = n(223273);
function l3(e, t, n) {
    if (null == e || null == t || t < 10) return l4.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? l4.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? l4.vI.VERY_POSITIVE
              : l4.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return l4.vI.MOSTLY_POSITIVE;
    if (e >= 40) return l4.vI.MIXED;
    if (e >= 20) return l4.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return l4.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return l4.vI.VERY_NEGATIVE;
    return l4.vI.OVERWHELMINGLY_NEGATIVE;
}
var l6 = n(792216);
let l9 = {
    appStore: { getTitle: () => em.intl.string(em.t.LVy7Ug), action: S.GameProfileTrackActionActions.AppStoreReviews },
    googlePlay: {
        getTitle: () => em.intl.string(em.t.V6rllO),
        action: S.GameProfileTrackActionActions.GooglePlayReviews,
    },
};
function l5(e) {
    switch (e) {
        case l4.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case l4.vI.OVERWHELMINGLY_POSITIVE:
        case l4.vI.VERY_POSITIVE:
        case l4.vI.POSITIVE:
        case l4.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case l4.vI.MIXED:
            return "steam-review-text-mixed";
        case l4.vI.MOSTLY_NEGATIVE:
        case l4.vI.NEGATIVE:
        case l4.vI.VERY_NEGATIVE:
        case l4.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var l7 =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    ie = n(778591);
function it(e) {
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
var il = n(315189);
let ii = { appStore: lg.z, googlePlay: lf.O };
function ia(e) {
    let { review: t } = e,
        { trackAction: n } = F(),
        l = (0, lj.A)(),
        i = ii[t.key],
        { action: a, url: o } = t,
        c = s.useCallback(() => {
            (n(a), l(o));
        }, [a, l, n, o]);
    return (0, r.jsx)(tB.D, {
        onClick: c,
        className: il.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, r.jsxs)("div", {
            className: il.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: il.hU,
                    children: [
                        (0, r.jsx)(i, { size: "sm", color: eG.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tm.D, { variant: "heading-sm/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: il.nK,
                    children: [
                        (0, r.jsx)(B.E, {
                            variant: "text-xs/medium",
                            color: "text-strong",
                            className: il.yX,
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
function ir(e) {
    let { url: t, title: n, rating: l, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: o } = F(),
        c = (0, lj.A)(),
        u = l3(l, i, "recent" === a),
        d = l5(u),
        m = s.useCallback(() => {
            (o(S.GameProfileTrackActionActions.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, r.jsx)(tB.D, {
        onClick: m,
        className: il.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, r.jsxs)("div", {
            className: il.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: il.hU,
                    children: [
                        (0, r.jsx)(l2.N, { size: "sm", color: eG.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tm.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, r.jsx)(
                    J.m,
                    {
                        text:
                            u === l4.vI.NO_USER_REVIEWS
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
                            className: il.nK,
                            children: [
                                (0, r.jsx)(B.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: il.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case l4.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case l4.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case l4.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case l4.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case l4.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case l4.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case l4.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case l4.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case l4.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case l4.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== l4.vI.NO_USER_REVIEWS &&
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
function is(e) {
    let { url: t } = e,
        { game: n, trackAction: l } = F(),
        { reviews: i } = n,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = a.tier,
        c = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (c <= 0 || u <= 0) && null == o,
        m = (0, lj.A)(),
        h = s.useCallback(() => {
            (l(S.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, l, t]);
    return (0, r.jsx)(tB.D, {
        onClick: h,
        className: il.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, r.jsxs)("div", {
            className: il.Ur,
            children: [
                (0, r.jsx)(tm.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, r.jsxs)("div", {
                    className: il.WA,
                    children: [
                        null != o ? (0, r.jsx)(io, { tier: o }) : null,
                        null != o && c > 0 && u > 0 ? (0, r.jsx)(ic, { rating: c, tier: o }) : null,
                        d
                            ? (0, r.jsx)(B.E, {
                                  variant: "text-xs/medium",
                                  color: l5(l4.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function io(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case l7.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case l7.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case l7.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case l7.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case l7.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case l7.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case l7.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case l7.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, r.jsx)(
        J.m,
        {
            text: n,
            children: (0, r.jsx)("div", {
                className: il.TE,
                children: (0, r.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function ic(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case l7.MIGHTY:
                    t = "#fc430a";
                    break;
                case l7.STRONG:
                    t = "#9e00b4";
                    break;
                case l7.FAIR:
                    t = "#4aa1ce";
                    break;
                case l7.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, r.jsx)(
        J.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, r.jsxs)("div", {
                className: il.TE,
                style: { backgroundColor: i },
                children: [
                    (0, r.jsx)(it, { rating: t, strokeColor: l }),
                    (0, r.jsx)(B.E, {
                        variant: "text-xs/semibold",
                        color: "text-overlay-light",
                        className: il.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let iu = function () {
    let { game: e } = F(),
        t = (0, ie.I)(e.id),
        n = e.opencriticUrl,
        {
            steamReview: l,
            showSteamReview: i,
            showRecentSteamReview: a,
            showLocalizedReview: o,
            primarySteamRating: c,
            primarySteamRatingCount: u,
            primarySteamTitleKey: d,
            mobileStoreReviews: m,
        } = s.useMemo(() => {
            let n = e.reviews?.steam,
                l = e.steamReleaseStatus !== l6.Y.RETIRED_ABANDONED && null != t,
                i = l3(n?.recentRating, n?.recentRatingCount, !0),
                a = l && i !== l4.vI.NO_USER_REVIEWS,
                r =
                    null != n &&
                    null != n.localizedRating &&
                    null != n.localizedRatingCount &&
                    null != n.ratingCount &&
                    n.localizedRatingCount >= 200 &&
                    n.ratingCount >= 2e3;
            return {
                steamReview: n,
                showSteamReview: l,
                showRecentSteamReview: a,
                showLocalizedReview: r,
                primarySteamRating: r ? n?.localizedRating : n?.rating,
                primarySteamRatingCount: r ? n?.localizedRatingCount : n?.ratingCount,
                primarySteamTitleKey: r ? em.t["aWb+V4"] : em.t["8e4LiB"],
                mobileStoreReviews: Object.entries(l9).flatMap((t) => {
                    var n;
                    let l,
                        i,
                        [a, r] = t,
                        s = e.reviews?.[a],
                        o = s?.rating,
                        c = s?.ratingCount;
                    if (null == o || null == c) return [];
                    let u = n5(e, n6[a]);
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
        }, [e, t]),
        h =
            (e.steamReleaseStatus !== l6.Y.RETIRED_ABANDONED || m.length > 0) &&
            e.reviews?.opencritic != null &&
            null != e.opencriticUrl;
    return i || h || 0 !== m.length
        ? (0, r.jsxs)("div", {
              className: il.uW,
              children: [
                  (0, r.jsx)("div", {
                      className: il.Gf,
                      children: (0, r.jsx)(tm.D, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: il.kL,
                      children: [
                          a && null != t
                              ? (0, r.jsx)("div", {
                                    className: il.WH,
                                    children: (0, r.jsx)(ir, {
                                        url: t,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: l?.recentRating,
                                        ratingCount: l?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          i && null != t
                              ? (0, r.jsx)("div", {
                                    className: il.WH,
                                    children: (0, r.jsx)(ir, {
                                        url: t,
                                        title: em.intl.string(d),
                                        rating: c,
                                        ratingCount: u,
                                        tooltipVariant: o ? "localized" : "all",
                                    }),
                                })
                              : null,
                          m.map((e) =>
                              (0, r.jsx)("div", { className: il.WH, children: (0, r.jsx)(ia, { review: e }) }, e.key),
                          ),
                          h && null != n
                              ? (0, r.jsx)("div", { className: il.WH, children: (0, r.jsx)(is, { url: n }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var id = n(815996),
    im = n(722258),
    ih = n(905276),
    ix = n(561769),
    ig = n(484469),
    ip = n(57020),
    ij = n(682301);
let iv = [];
var iA = n(758836),
    iI = n(399872);
let ib = [0, 1, 2, 3, 4];
function iE(e) {
    return e.skuId;
}
function iN(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = s.useContext(ix.v3),
        { trackAction: u } = F(),
        d = s.useRef(null),
        m = s.useCallback(
            (e) => {
                (u(S.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, im.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, ip.A)({ product: t }),
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
    return (0, r.jsx)(ix.v3.Provider, {
        value: h,
        children: (0, r.jsx)(ih.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: iI.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function ik() {
    return (0, r.jsx)(ig.A, {});
}
function iC() {
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
                            null == e || t || T.A.isShopCollectionFetching(e) || (0, nD.hd)(e);
                        }, [e, t]),
                        { skuIds: l ?? iv, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, ij.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(e.shopCollectionIds?.[0]),
        a = s.useCallback(() => {
            (n(S.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, id.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: iA.G2.CATALOG,
                }));
        }, [n, t]);
    return i
        ? (0, r.jsx)(tL, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, r.jsx)(np.A, { children: ib.map((e) => (0, r.jsx)(ik, {}, e)) }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(tR, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: (0, r.jsx)(nm.A, {
                    gap: "md",
                    items: l,
                    getItemKey: iE,
                    renderItem: (e, t) => (0, r.jsx)(iN, { product: e, listItemProps: t }, e.skuId),
                }),
            });
}
var iS = n(611656),
    iy = n(281018),
    iT = n(987070);
let iL = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iR(e) {
    return e.id;
}
function iM(e) {
    let { game: t, listItemProps: n } = e,
        { navigateToGame: l, trackAction: i } = F(),
        { shouldOpenGameProfile: a, gameId: o } = (0, iS.Ay)({
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
        children: (0, r.jsx)(tB.D, {
            ...n,
            className: iT.Nr,
            onClick: c,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: (0, r.jsx)(t6.Ay, {
                game: t,
                className: iT.xe,
                size: t6.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, r.jsx)(t6.gr, { className: iT.uz }),
            }),
        }),
    });
}
function iO() {
    let { game: e } = F(),
        t = e.id,
        { isFetching: n, similarGames: l } = (0, iy.A)(t);
    return n
        ? (0, r.jsx)(tL, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, r.jsx)("div", {
                  className: iT.XG,
                  style: iL,
                  children: (0, r.jsx)(np.A, {
                      children: eQ()
                          .range(0, 8)
                          .map((e) => (0, r.jsx)(t6.gr, { className: iT.aZ }, e)),
                  }),
              }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(tR, {
                title: em.intl.string(em.t["6rLyQB"]),
                children: (0, r.jsx)("div", {
                    className: iT.XG,
                    style: iL,
                    children: (0, r.jsx)(nm.A, {
                        gap: "md",
                        items: l,
                        getItemKey: iR,
                        itemClassName: iT.cW,
                        renderItem: (e, t) => (0, r.jsx)(iM, { game: e, listItemProps: t }, e.id),
                    }),
                }),
            });
}
n(667532);
var iP = n(853022);
let iG = new Set(["1402418703554842694", "356877880938070016"]),
    iw = [n4.V1.EPICGAMES, n4.V1.STEAM, n4.V1.ROBLOX, n4.V1.BATTLENET, n4.V1.RIOT, n4.V1.MINECRAFT];
function iV(e) {
    return (0, r.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iD = n(349361),
    i_ = n(422688),
    iF = n(505200),
    iU = n(695250);
let iY = function (e) {
    switch (e.category) {
        case n4.V1.STEAM:
            return {
                icon: l2.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: S.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case n4.V1.EPICGAMES:
            return {
                icon: iD.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: S.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case n4.V1.ROBLOX:
            return {
                icon: lp.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: S.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case n4.V1.BATTLENET:
            return {
                icon: i_.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: S.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case n4.V1.RIOT:
            return {
                icon: iF.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: S.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case n4.V1.MINECRAFT:
            return {
                icon: iU.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: S.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: lN.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: S.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var iB = n(242216);
function iz(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, ie.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eT.d3x.XBOX_GAME_PASS && !(0, tg.uJ)(e.id));
                return t?.id == null ? null : (0, iP.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== n4.V1.EPICGAMES || !!iG.has(l)) &&
                            (e.category !== n4.V1.STEAM || a !== l6.Y.RETIRED_ABANDONED) &&
                            iw.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === l6.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === n4.V1.STEAM) ||
                    e.push({ category: n4.V1.STEAM, url: t });
                let r = e.sort((e, t) => (e.category === n4.V1.STEAM ? -1 : +(t.category === n4.V1.STEAM)));
                return (null != n && r.unshift({ category: "XBOX_GAME_PASS", url: n }), r);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function iW(e) {
    let { data: t } = e,
        { trackAction: n } = F(),
        l = (0, lj.A)();
    return (0, r.jsx)(iV, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let iH = function () {
    let { game: e, trackAction: t } = F(),
        { showsStoreLinks: l, storeWebsites: i } = iz(e),
        a = s.useMemo(() => i.map(iY).filter((e) => null != e), [i]);
    if (!l) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, r.jsx)(iW, { data: e });
    }
    if (2 === a.length)
        return (0, r.jsxs)("div", {
            className: iB.G,
            children: [(0, r.jsx)(iW, { data: a[0] }), (0, r.jsx)(iW, { data: a[1] })],
        });
    let o = (0, r.jsx)(iV, {
        text: em.intl.string(em.t["/hMurx"]),
        "aria-label": em.intl.string(em.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, x.openModalLazy)(async () => {
                    let { default: e } = await n.e("307898").then(n.bind(n, 679361));
                    return (n) => (0, r.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: e, websiteButtons: a, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, r.jsxs)("div", { className: iB.G, children: [(0, r.jsx)(iW, { data: a[0] }), o] })
        : o;
};
var iX = n(123292),
    iK = n(318076),
    i$ = n(478676),
    iJ = n.n(i$),
    iq = n(694403),
    iQ = n(417964);
function iZ(e, t, n) {
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
let i0 = /[\u0000-\u001f\u007f]/,
    i1 = /https?:\/\//i,
    i8 = String.raw`https?:\/\/[^\s<]+[^<.,:;"'\]\s]`,
    i2 = RegExp(`^(${i8})`, "i"),
    i4 = RegExp(i8, "gi"),
    i3 = /https?:\/\/\S+$/i,
    i6 = /^(?:[a-z0-9_/?#&=%-]|\.[a-z0-9])/i,
    i9 = new Map(
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
    i5 = { bold: !1, italic: !1, underline: !1 },
    i7 = /[\uD800-\uDBFF]/,
    ae = /^[a-z][a-z0-9:-]*$/,
    at = /^<[a-z][a-z0-9:-]*\s*(?:\/+\s*)?>$/i,
    an = /^<[a-z][a-z0-9:-]*(?:\s+[a-z0-9:+-]+)*(?:\s*\/+\s*[a-z0-9:+-]+(?:\s+[a-z0-9:+-]+)*)+\s*>$/i,
    al = /^<\/{2,}[\s/a-z0-9:+-]*>$/i,
    ai = new Set([
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
    aa = new Set([
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
function ar(e) {
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
function as(e, t) {
    return Array.from((0, iQ.El)(e).matchAll(i4)).some((e) => {
        let [n] = e;
        return ar(n, !0) !== t;
    });
}
function ao(e) {
    return ar(iJ().unescapeUrl(e[2]));
}
let ac = {
        text: iJ().defaultRules.text,
        link: {
            ...iq.Ay,
            match(e, t, n) {
                let l = iq.Ay.match(e, t, n);
                return null != l && null != ao(l) ? l : null;
            },
            parse(e, t, n) {
                let l = ao(e);
                return null == l || as((0, iQ.Fd)(e[1]), l) ? { type: "text", content: e[0] } : iq.Ay.parse(e, t, n);
            },
        },
        url: {
            order: iJ().defaultRules.url.order,
            requiredFirstCharacters: ["h", "H"],
            match(e) {
                let t = i2.exec(e);
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
                    n = t.search(i0),
                    l = -1 === n ? t : t.slice(0, n),
                    i = ar(l, !0);
                if (null == i) return { type: "text", content: t };
                let a = { type: "link", content: [{ type: "text", content: l }], target: i },
                    r = t.slice(l.length);
                return "" === r ? a : [a, { type: "text", content: r }];
            },
        },
    },
    au = iJ().parserFor(ac);
function ad(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 10 === n || 9 === n || 13 === n || 12 === n;
}
function am(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 9 === n || 12 === n;
}
function ah(e) {
    let t = 0;
    for (; t < e.length && ad(e, t);) t++;
    return t;
}
function ax(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.length;
    for (; n > t && ad(e, n - 1);) n--;
    return n;
}
function ag(e, t) {
    let n = "",
        l = 0,
        i = t,
        a = -1;
    for (let t = e.indexOf("\n"); -1 !== t; t = e.indexOf("\n", t + 1)) {
        let r = a + 1,
            s = !0;
        for (let n = r; n < t; n++)
            if (!am(e, n)) {
                s = !1;
                break;
            }
        (i > 0 && s ? ((n += e.slice(l, r)), i < 2 && (n += "\n"), (l = t + 1), i++) : (i = 1), (a = t));
    }
    return 0 === l ? e : n + e.slice(l);
}
function af(e) {
    for (; e.length > 0;) {
        let t = e[e.length - 1],
            n = t.text.length;
        for (; n > 0 && am(t.text, n - 1);) n--;
        if (n === t.text.length) break;
        if (0 === n) e.pop();
        else {
            t.text = t.text.slice(0, n);
            break;
        }
    }
}
function ap(e) {
    return e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e;
}
function aj(e) {
    let t = ag(ap(e), 0),
        n = ah(t),
        l = ax(t, n);
    return l > n ? [{ text: t.slice(n, l), ...i5 }] : [];
}
function av(e, t) {
    let n = Math.max(0, Math.floor(t)),
        l = i7.test(e.charAt(n - 1)) ? n - 1 : n;
    return ap(e.slice(0, l));
}
function aA(e) {
    return e.links[e.links.length - 1];
}
function aI(e) {
    return null != e ? { ...i5, link: e } : i5;
}
function ab(e) {
    let t = aA(e);
    return {
        bold: e.styles.bold > 0 || null != e.heading,
        italic: e.styles.italic > 0,
        underline: e.styles.underline > 0,
        ...(null != e.heading ? { heading: e.heading } : {}),
        ...(null != t ? { link: t } : {}),
    };
}
function aE(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i5,
        l = t.indexOf("\n");
    if (e.trailingNewlines > 0 && -1 !== l) {
        let n = !0;
        for (let e = 0; e < l; e++)
            if (!am(t, e)) {
                n = !1;
                break;
            }
        n && af(e.runs);
    }
    let i = e.trailingNewlines,
        a = ag(t, e.trailingNewlines);
    if ((0 === e.runs.length && (a = a.slice(ah(a))), 0 === a.length)) return;
    iZ(e.runs, a, n);
    let r = (function (e) {
        let t = 0;
        for (let n = e.length - 1; n >= 0; n--)
            if (10 === e.charCodeAt(n)) t++;
            else if (!am(e, n)) break;
        return t;
    })(a);
    e.trailingNewlines = ah(a) === a.length ? Math.min(2, i + r) : r;
}
function aN(e) {
    if (0 === e.pendingBreaks) for (let t of e.held) aE(e, t.text, t);
    else
        e.runs.length > 0 &&
            (e.trailingNewlines > 0 && af(e.runs),
            aE(e, "\n".repeat(Math.max(0, e.pendingBreaks - e.trailingNewlines)), aI(e.spacingLink)));
    ((e.held = []), (e.pendingBreaks = 0));
}
function ak(e, t) {
    let n = e.atBoundary ? ah(t) : 0,
        l = ax(t, n),
        i = ab(e);
    (l > n && (aN(e), aE(e, t.slice(n, l), i), (e.spacingLink = i.link), (e.atBoundary = e.afterMarker = !1)),
        l < t.length && e.held.push({ ...i, text: t.slice(l) }));
}
function aC(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null != t &&
        ((n && e.afterMarker) || (e.pendingBreaks = Math.max(e.pendingBreaks, e.itemDepth > 0 ? 1 : t)),
        (e.atBoundary = !0),
        n || (e.afterMarker = !1));
}
function aS(e, t) {
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
            class n extends iK.iX {
                onclosetag(n, l) {
                    let i = this.startIndex,
                        a = e.markup.slice(n, l).toLowerCase();
                    ((t = void 0), super.onclosetag(n, l));
                    let r = a.replace(/\/+$/, "");
                    if (e.hiddenDepth > 0 || t === a || i9.has(r) || ai.has(r) || aa.has(r)) return;
                    let s = e.markup.indexOf(">", l);
                    -1 !== s && ak(e, e.markup.slice(i, s + 1));
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
                            let s = i9.get(t);
                            if (e.hiddenDepth > 0 || s?.hidden === !0) return void e.hiddenDepth++;
                            if (null == s) {
                                let n,
                                    r,
                                    s = e.markup.slice(l.startIndex, l.endIndex + 1);
                                (!ae.test(t) ||
                                    ((at.test(s) || an.test(s)) &&
                                        !ai.has(t) &&
                                        !aa.has(t) &&
                                        ((i = l.endIndex),
                                        (e.closingTags ??= e.markup.includes("</")
                                            ? ((a = e.markup),
                                              (n = new Map()),
                                              (r = new iK.iX(
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
                                    ak(e, s);
                                return;
                            }
                            (aC(e, s.breaks, !0),
                                null != s.style && e.styles[s.style]++,
                                !0 === s.link &&
                                    (e.links.push(ar(n.href) ?? (e.keepInvalidAnchors ? "" : void 0)),
                                    (e.spacingLink = void 0)),
                                null != s.heading && (e.heading = s.heading),
                                null != s.list && e.lists.push({ ordered: "ordered" === s.list, index: 0 }),
                                !0 === s.lineBreak &&
                                    (aN(e),
                                    aE(e, "\n", null != e.heading ? ab(e) : aI(aA(e))),
                                    (e.atBoundary = !0),
                                    (e.afterMarker = !1)),
                                !0 === s.item &&
                                    (aN(e),
                                    (r = e.lists[e.lists.length - 1]),
                                    aE(e, r?.ordered === !0 ? `${++r.index}. ` : "\u2022 "),
                                    e.itemDepth++,
                                    (e.afterMarker = !0)));
                        })(e, t, n, l),
                    onclosetag(n, l) {
                        (l || (t = n),
                            (function (e, t) {
                                if (e.ending) return;
                                if (e.hiddenDepth > 0) return e.hiddenDepth--;
                                let n = i9.get(t);
                                null != n &&
                                    (aC(e, n.breaks),
                                    null != n.style && e.styles[n.style]--,
                                    !0 === n.link && (e.links.pop(), (e.spacingLink = void 0)),
                                    null != n.heading && (e.heading = void 0),
                                    null != n.list && e.lists.pop(),
                                    !0 === n.item && e.itemDepth--);
                            })(e, n));
                    },
                    oncomment() {
                        let t = e.markup.slice(l.startIndex, l.endIndex + 1);
                        0 === e.hiddenDepth && al.test(t) && ak(e, t);
                    },
                    ontext(t) {
                        0 === e.hiddenDepth && ak(e, t);
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
            new iK.iX({ ontext: (e) => ak(l, e) }, { decodeEntities: !0 }).end(n.replace(/</g, "&lt;")));
    for (var a = l.runs; a.length > 0;) {
        let e = a[a.length - 1];
        if (((e.text = e.text.slice(0, ax(e.text))), e.text.length > 0)) break;
        a.pop();
    }
    return a;
}
var ay = n(9578);
let aT = { h1: "heading-lg/semibold", h2: "heading-md/semibold", h3: "heading-sm/semibold", h4: "heading-sm/semibold" },
    aL = { h1: 2, h2: 3, h3: 4, h4: 5 };
var aR = n(407355);
function aM(e) {
    let { italic: t, underline: n } = e;
    return u()({ [aR.T]: t, [aR.V]: n });
}
function aO(e) {
    let { run: t, textVariant: n, boldTextVariant: l } = e;
    if (null != t.heading) return (0, r.jsx)(aP, { run: t });
    let { text: i, bold: a, italic: s, underline: o } = t;
    return a || s || o
        ? (0, r.jsx)(B.E, {
              tag: a ? "strong" : "span",
              variant: a ? l : n,
              color: "none",
              className: aM(t),
              children: s ? (0, r.jsx)("em", { children: i }) : i,
          })
        : i;
}
function aP(e) {
    let { run: t } = e,
        { text: n, italic: l, underline: i } = t;
    if (!l && !i) return n;
    let a = aM(t);
    return l && i
        ? (0, r.jsx)("u", { className: a, children: (0, r.jsx)("em", { children: n }) })
        : l
          ? (0, r.jsx)("em", { className: a, children: n })
          : (0, r.jsx)("u", { className: a, children: n });
}
function aG(e) {
    let { segment: t, textVariant: n, boldTextVariant: l, onLinkPress: i } = e,
        a = t.runs.map((e, t) => (0, r.jsx)(aO, { run: e, textVariant: n, boldTextVariant: l }, t)),
        { link: s } = t;
    return null == s
        ? a
        : (0, r.jsx)(ay.A, {
              href: s,
              title: t.runs.map((e) => e.text).join(""),
              onClick: () => (i?.(s), !1),
              children: a,
          });
}
function aw(e) {
    let { group: t, ...n } = e,
        { heading: l, segments: i } = t,
        a = i.map((e, t) =>
            (0, r.jsx)(
                aG,
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
        : (0, r.jsx)(t0.F, {
              forceLevel: n.headingLevels[l],
              children: (0, r.jsx)(tm.D, { variant: n.headingVariants[l], color: n.headingColor, children: a }),
          });
}
function aV(e) {
    let {
            runs: t,
            textVariant: n = "text-md/normal",
            boldTextVariant: l = "text-md/semibold",
            headingVariants: i = aT,
            headingColor: a = "text-strong",
            headingLevels: o = aL,
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
    return u.map((e, t) => (0, r.jsx)(aw, { group: e, ...d }, t));
}
var aD = n(672572),
    a_ = n(94936);
function aF() {
    let e = s.useRef(null),
        { game: t, isTwoColumn: n, trackAction: l } = F(),
        i = s.useMemo(
            () =>
                null != t.description
                    ? (function (e) {
                          let { maxLength: t = 1e4, parseTextLinks: n = !1 } =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              l = e.includes("<") || e.includes("&");
                          if (!n) return l ? aS(av(e, t)) : aj(e);
                          let i = av(e, t);
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
                                          let s = (0, iQ.Fd)(r).trim(),
                                              o = 0 === s.length ? "" : as(s, i.link) ? void 0 : i.link;
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
                                          iZ(l, a.text, t);
                                      } else iZ(l, a.text, a);
                                      i = !1;
                                  } else {
                                      let r = t[e + 1],
                                          s =
                                              null != r &&
                                              null == r.link &&
                                              !a.text.includes("](") &&
                                              i3.test(a.text) &&
                                              i6.test(r.text);
                                      (i || s
                                          ? iZ(l, a.text, a)
                                          : (function (e, t, n) {
                                                let l = t.text.includes("["),
                                                    i = n && t.text.includes("](");
                                                (!i || l) && (i || i1.test(t.text))
                                                    ? (function e(t, n, l, i) {
                                                          if (Array.isArray(n)) for (let a of n) e(t, a, l, i);
                                                          else
                                                              "text" === n.type && "string" == typeof n.content
                                                                  ? iZ(t, n.content, null != i ? { ...l, link: i } : l)
                                                                  : "link" === n.type && e(t, n.content, l, n.target);
                                                      })(e, au(t.text, { inline: !0, allowLinks: n }), t)
                                                    : iZ(e, t.text, t);
                                            })(l, a, !n.has(e)),
                                          (i = s));
                                  }
                              }
                              return l;
                          })(l ? aS(i, { keepInvalidAnchors: !0 }) : aj(i));
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
                        if (!i || null == n || !(0, nL.vq)(l, HTMLAnchorElement) || !l.matches(":focus-visible"))
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
    let x = o ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, r.jsxs)("div", {
        className: u()(aD.fi, a_.k),
        onFocusCapture: m,
        children: [
            (0, r.jsx)(B.E, {
                ref: e,
                className: a_.Q,
                lineClamp: o ? void 0 : a,
                variant: "text-md/medium",
                children: (0, r.jsx)(aV, { runs: i, textVariant: "text-md/medium", onLinkPress: h }),
            }),
            c && (0, r.jsx)(iX.Q, { onClick: d, text: x, "aria-expanded": o }),
        ],
    });
}
var aU = n(40478),
    aY = n(764948);
let aB = s.memo(function (e) {
    let { analyticsLocations: t, selectTab: n, getScrollOffset: l } = e;
    return (0, r.jsxs)("div", {
        className: aY.V,
        children: [
            (0, r.jsx)(l8, {}),
            (0, r.jsxs)("div", {
                className: aU.h,
                children: [
                    (0, r.jsx)(nl, {}),
                    (0, r.jsxs)("div", { className: aU.X, children: [(0, r.jsx)(iH, {}), (0, r.jsx)(aF, {})] }),
                ],
            }),
            (0, r.jsx)(lV, { analyticsLocations: t }),
            (0, r.jsx)(tS, {}),
            (0, r.jsx)(n8, { getScrollOffset: l }),
            (0, r.jsx)(nT, { selectTab: n }),
            (0, r.jsx)(iC, {}),
            (0, r.jsx)(iO, {}),
            (0, r.jsx)(iu, {}),
            (0, r.jsx)(lM, {}),
        ],
    });
});
var az = n(164135);
let aW = s.memo(function (e) {
    let { selectTab: t, getScrollOffset: n } = e;
    return (0, r.jsxs)("div", {
        className: az.V,
        children: [
            (0, r.jsxs)("div", { className: az.B, children: [(0, r.jsx)(l8, {}), (0, r.jsx)(aF, {})] }),
            (0, r.jsx)(n8, { getScrollOffset: n }),
            (0, r.jsx)(nT, { selectTab: t }),
            (0, r.jsx)(iC, {}),
            (0, r.jsx)(iO, {}),
        ],
    });
});
var aH = n(881698),
    aX = n(928550),
    aK = n(131937),
    a$ = n(414499),
    aJ = n(359549),
    aq = n(139286),
    aQ = n(873516);
function aZ(e) {
    let { onCloudPlayClick: t, analyticsLocations: n } = e,
        { closeModal: l, trackAction: i } = F();
    (0, aq.A)({
        name: aK.ImpressionNames.CLOUD_PLAY_CTA,
        type: aK.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let a = s.useCallback(() => {
        (i(S.GameProfileTrackActionActions.CloudPlay), l(), t());
    }, [l, t, i]);
    return (0, r.jsx)(J.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, r.jsx)(K.$, {
            icon: a$.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function a0(e) {
    let { cloudPlayAppId: t, analyticsLocations: n } = e,
        { game: l } = F(),
        i = (0, aJ.rC)({ applicationId: t, sourceApplicationId: l.id, analyticsLocations: n });
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: aQ.k,
              children: (0, r.jsx)(aZ, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var a1 = n(768626);
function a8(e) {
    let { analyticsLocations: t } = e,
        { game: n } = F(),
        l = (0, aH.A)(n.linkedApplications)?.id,
        [i] = (0, aX.L_)(n.getOfficialApplicationId()),
        [a] = (0, aX.L_)(n.id),
        { showsStoreLinks: s } = iz(n);
    return (0, r.jsxs)("div", {
        className: u()(a1.pz, aD.fi, s ? a1.FJ : a1.dg),
        children: [
            null == l || i || a ? null : (0, r.jsx)(a0, { cloudPlayAppId: l, analyticsLocations: t }),
            (0, r.jsxs)("div", {
                className: aY.V,
                children: [
                    (0, r.jsx)(iH, {}),
                    (0, r.jsx)(lV, { analyticsLocations: t }),
                    (0, r.jsx)(tS, {}),
                    (0, r.jsx)(iu, {}),
                    (0, r.jsx)(lM, {}),
                ],
            }),
        ],
    });
}
var a2 = n(105865);
function a4(e) {
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
            (0, r.jsx)(ne, { ref: o }),
            (0, r.jsxs)(eZ.Ch, {
                ref: c,
                className: a2.XG,
                onScroll: m,
                children: [
                    (0, r.jsx)("div", { className: a2.xY, "aria-hidden": !0 }),
                    (0, r.jsx)(nr, {}),
                    (0, r.jsx)(t0.F, {
                        children: t
                            ? (0, r.jsxs)("div", {
                                  className: a2.jC,
                                  children: [
                                      (0, r.jsx)(aW, { selectTab: n, getScrollOffset: d }),
                                      (0, r.jsx)(a8, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: a2.b9,
                                  children: (0, r.jsx)(aB, { analyticsLocations: a, selectTab: n, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var a3 = n(897503),
    a6 = n(787188);
function a9(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, r.jsx)(a3.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: nc.Ye.GAME_PROFILE_GAME_SHOP,
        className: a6.kL,
        scrollerClassName: a6.XG,
        promotionBannerClassName: a6.Rv,
    });
}
var a5 = n(733391),
    a7 = n(171616);
function re(e) {
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
        [B, z] = s.useState(null),
        { clientThemesClassName: W } = (0, A.Ay)(),
        H = (0, m.bG)([C.default], () => C.default.locale),
        X = s.useMemo(() => (0, S.generateViewId)(), []),
        { analyticsLocations: K } = (0, p.Ay)(f.A.GAME_PROFILE),
        $ = (0, L.s)(t),
        { data: J } = (0, E.I)(t),
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
        { invite: ec, isMember: ed, isResolving: em } = (0, R.Ay)(J, z),
        { socialLayerStorefrontRecommendationsData: eh, socialLayerStorefrontRecommendationsLoading: ex } = (function (
            e,
        ) {
            let t = D.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [G.A],
                    () => ({
                        storefrontApplicationId: null != e ? G.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === G.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, P.h)(l),
                r = (0, m.bG)([v.A], () => null != l && v.A.didFetchingApplicationFail(l), [l]),
                o = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: c, status: u } = (0, V.XQ)({
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
                x = "success" === u && c.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: d,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (h || x),
            };
        })(t),
        eg = s.useCallback(
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
    ((0, g.Ay)(() => {
        ((0, S.trackGameProfileOpen)({
            source: n,
            viewId: X,
            gameId: t,
            gameName: et,
            authorId: l,
            profileType: S.GameProfileTypes.FullProfile,
        }),
            (0, I.He)());
    }),
        (0, g.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, S.getGuildIdAndVerifiedFromInvite)(el.current),
                l = Date.now(),
                i = $.map((e) => {
                    let t = (0, b.JM)(e) ? (0, b.W6)(e, l) : (0, b.aJ)(e, H);
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
                e ? ((0, x.closeAllModals)(), (0, k.M)()) : a();
            },
            [a],
        ),
        ev = s.useCallback(() => ej(!1), [ej]),
        { navigation: eA, selectionVersion: eI } = (function (e) {
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
        })(eg, c),
        { selectedTab: eb } = eA,
        eE = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                o = eu({ location: "GameProfileModal" });
            s.useEffect(() => {
                o && (0, a5.Xw)();
            }, [o]);
            let c = (0, m.bG)(
                    [G.A],
                    () =>
                        (null != a ? G.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && G.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                u = o && null != c,
                { storefront: d } = (0, a7.A)({ applicationId: u ? c : null }),
                [h, x] = s.useState({ storefrontId: d?.id, index: 0 }),
                [g, f] = s.useState(l);
            l !== g && (f(l), l !== y.COMMERCE && x({ storefrontId: d?.id, index: 0 }));
            let p = h.storefrontId === d?.id && h.index < (d?.pages.length ?? 0) ? h.index : 0,
                j = s.useCallback(
                    (e) => {
                        !u ||
                            e < 0 ||
                            e >= (d?.pages.length ?? 0) ||
                            (x({ storefrontId: d?.id, index: e }), i(y.COMMERCE));
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
        { hasCommerceTab: eN, storefrontApplicationId: ek, storefront: eC, selectedStorefrontPageIndex: eS } = eE,
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
                    socialLayerStorefrontRecommendationsLoading: ex,
                    hasCommerceTab: eN,
                    storefrontPromotion: ey,
                    closeModal: ej,
                    navigateToGame: F,
                    trackAction: eg,
                    viewId: X,
                };
        }, [J, U, ea, ei, er, es, eo, ec, Q, Z, ee, em, ed, eh, ex, eN, ey, ej, F, eg, X]);
    return null == J
        ? null
        : (0, r.jsx)(p.f5, {
              value: K,
              children: (0, r.jsx)(h.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, r.jsx)(_.Provider, {
                      value: eT,
                      children: (0, r.jsx)("div", {
                          className: u()(W, aD.kL),
                          ref: ep,
                          children: (0, r.jsxs)(N.A, {
                              obscured: en,
                              onClose: ev,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: u()(aD.sx, { [aD.Tk]: eb !== y.COMMERCE }),
                                      children: (0, r.jsx)(eJ, { navigation: eA, socialLayerStorefront: eE }),
                                  }),
                                  eb === y.OVERVIEW &&
                                      (0, r.jsx)(a4, {
                                          selectTab: eA.selectTab,
                                          selectionVersion: eI,
                                          initialScrollOffset: o,
                                          isTwoColumn: U,
                                          analyticsLocations: K,
                                      }),
                                  eb === y.COMMUNITIES && (0, r.jsx)(tZ, {}),
                                  eb === y.COMMERCE && (0, r.jsx)(a9, { applicationId: ek, selectedPageIndex: eS }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let rt = function (e) {
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
        re,
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
