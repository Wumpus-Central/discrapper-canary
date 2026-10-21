l.d(t, { default: () => aP });
var n,
    i,
    a,
    s = l(477900),
    r = l(582128),
    o = l.t(r, 2),
    c = l(503698),
    u = l.n(c),
    d = l(535185),
    m = l(17928),
    x = l(521489),
    g = l(192308),
    h = l(964486),
    f = l(793574),
    j = l(688810),
    p = l(206828),
    v = l(587895),
    A = l(590703),
    E = l(180170),
    I = l(583846),
    N = l(454908),
    b = l(570962),
    S = l(38145),
    C = l(773669),
    T = l(409626),
    y = (((n = {}).OVERVIEW = "overview"), (n.COMMUNITIES = "communities"), (n.COMMERCE = "commerce"), n),
    L = l(422069),
    k = l(205184),
    R = l(957807);
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
    H = l(265872),
    z = l(980707),
    X = l(477782),
    K = l(821609),
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
let eo = { enabled: !1 },
    ec = (0, er.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: eo,
        variations: { 0: eo, 1: { enabled: !0 } },
    });
function eu(e) {
    let { location: t } = e;
    return ec.useConfig({ location: t }).enabled;
}
var ed = l(695366),
    em = l(105292);
l(321073);
var ex = l(540185),
    eg = l(926268),
    eh = l(53788),
    ef = l(831453),
    ej = l(785866),
    ep = l(555704),
    ev = l(47675),
    eA = l(633075),
    eE = l(289173),
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
var eL = l(652215);
function ek(e) {
    var t;
    let n,
        i,
        { className: a, activeTab: c } = e,
        { game: u, closeModal: d, trackAction: x } = U(),
        h = r.useRef(null),
        j = r.useRef(null),
        p = (0, en.A)({ id: u.id, label: em.intl.string(em.t.SHQGPj) }),
        v =
            ((t = u.id),
            (n = o.useContext(V)?.trackAction),
            (i = r.useCallback(() => {
                null != t &&
                    (n?.(T.GameProfileTrackActionActions.Feedback),
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            l.e("250440"),
                            l.e("568035"),
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
        A = (function (e) {
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
                            icon: eg.HeartIcon,
                        },
                        {
                            type: ex.x.PLAYED_GAMES,
                            addLabel: em.intl.string(em.t["0xIVLR"]),
                            removeLabel: em.intl.string(em.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eh.G,
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
                o = (0, eS.A)(),
                c = r.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...a].filter((e) => e instanceof eA.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eT.Vq).find((e) => t.has(e)) ?? null;
                }, [o, a, e]),
                u = r.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await ey((i) => {
                                let a = i.filter(eE.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, eb.uA)(a))) return i;
                                    let l = { gameId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new eE.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    n = new eE.Yy({ ...a, games: e });
                                }
                                var s = n;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let o = [...i];
                                return ((o[r] = s), o);
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
                            null == c ||
                            (await ey((l) =>
                                e
                                    ? l.some((e) => e instanceof eA.R && e.applicationId === c)
                                        ? l
                                        : [(t = new eA.R({ applicationId: c })), ...l]
                                    : ((t = l.find((e) => e instanceof eA.R && e.applicationId === c) ?? null),
                                      l.filter((e) => !(e instanceof eA.R && e.applicationId === c))),
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
                    [c],
                );
            if (null == n) return null;
            let x = null != e && (0, eb.XX)(e),
                g = [];
            if (null != c) {
                let e = a.some((e) => e instanceof eA.R && e.applicationId === c);
                g.push(
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
                    let l = a.filter(eE.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.gameId === t),
                        i = !n && null != l && (0, eb.uA)(l);
                    g.push(
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
            return 0 === g.length ? null : g;
        })(u),
        E = eu({ location: "GameProfileOverflowMenu" }),
        I = (0, m.bG)([P.A], () => P.A.getApplicationIdFromDetectableId(u.id)),
        N = (0, m.bG)([P.A], () => P.A.hasStorefrontForApplicationId(I), [I]),
        b = r.useCallback(() => {
            null != I && (0, ei.G)({ applicationId: I });
        }, [I]),
        S = r.useCallback(() => {
            null != I && (x(T.GameProfileTrackActionActions.GameShop), (0, ei.default)({ applicationId: I }), d());
        }, [I, x, d]),
        C = r.useCallback(() => d(!1), [d]),
        L = r.useCallback(() => {
            x(T.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eL.BVt.GAME_PROFILE(u.id)}`;
            (0, es.C)(e, () => {
                (0, B.P0)({ text: em.intl.string(em.t["+5kSoW"]), variant: "success" });
            });
        }, [u.id, x]);
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            c === y.COMMERCE &&
                (0, s.jsx)(ea.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: d,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != A &&
                c !== y.COMMERCE &&
                (0, s.jsx)(H.Y, {
                    targetElementRef: j,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(z.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, el.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.sidPSo),
                            onSelect: () => {},
                            children: (0, s.jsx)(X.rX, { children: A }),
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
                !E &&
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
            c !== y.COMMERCE &&
                (0, s.jsx)($.m, {
                    text: em.intl.string(em.t.WqhZss),
                    children: (0, s.jsx)(q.K, {
                        icon: Z.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.WqhZss),
                        onClick: L,
                    }),
                }),
            (null != p || null != v) &&
                c !== y.COMMERCE &&
                (0, s.jsx)(H.Y, {
                    targetElementRef: h,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(z.W, {
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
                                ref: h,
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
let eR = { enabled: !1 },
    eG = (0, er.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eR,
        variations: { 0: eR, 1: { enabled: !0 } },
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
function ez(e) {
    let { className: t, label: l, navigation: n, socialLayerStorefront: i } = e,
        { selectedTab: a, selectTab: o } = n,
        { storefront: c, selectedStorefrontPageIndex: u, selectStorefrontPage: d } = i,
        m = c?.pages ?? eB,
        x = r.useRef(null),
        { isHovered: g, setIsHovered: h, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, eF.A)(100, 100),
        v = em.intl.string(em.t["J3/JCl"]),
        A = r.useCallback(
            (e) => {
                (p(), h(e));
            },
            [p, h],
        );
    return (0, s.jsx)(H.Y, {
        targetElementRef: x,
        shouldShow: g,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => A(!0),
        onRequestClose: () => A(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, s.jsx)(z.W, {
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
                c = r ? eV.t : eU.a;
            return (0, s.jsx)(Y.V.Item, {
                ...e,
                id: y.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a === y.COMMERCE ? y.COMMERCE : void 0,
                onClick: (t) => {
                    (o(y.COMMERCE), e.onClick(t));
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
                    children: (0, s.jsx)(eH, {
                        label: l,
                        chevron: (0, s.jsx)(c, { size: "xs", color: "currentColor" }),
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
        { hasCommerceTab: r, storefront: o } = n;
    if (!r) return null;
    let c = em.intl.string(em.t.apFNLU);
    return (o?.pages.length ?? 0) > 1
        ? (0, s.jsx)(ez, { className: t, label: c, navigation: l, socialLayerStorefront: n })
        : (0, s.jsx)(Y.V.Item, {
              id: y.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(y.COMMERCE),
              className: t,
              "aria-label": c,
              children: (0, s.jsx)(W.E, {
                  variant: eW,
                  color: "none",
                  children: (0, s.jsx)(eH, { label: c, socialLayerStorefront: n }),
              }),
          });
}
var eK = l(510954);
function eJ(e) {
    let { navigation: t, socialLayerStorefront: l } = e,
        { game: n } = U(),
        { selectedTab: i, selectTab: a } = t,
        o = n.getIconURL(64),
        [c, u] = r.useState(null),
        d = r.useCallback(() => u(o), [o]),
        m = em.intl.string(em.t.qHmbyh);
    return (0, s.jsx)("div", {
        className: eK.wx,
        children: (0, s.jsxs)("div", {
            className: eK.ap,
            children: [
                (0, s.jsx)("div", {
                    className: eK.wE,
                    children:
                        null != o && o !== c
                            ? (0, s.jsx)("img", { src: o, alt: "", className: eK.FC, draggable: !1, onError: d })
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
                (0, s.jsx)(ek, { className: eK.HK, activeTab: i }),
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
    e4 = l(60465),
    e3 = l(311043),
    e6 = l(636537),
    e2 = l(73153);
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
let e7 = new e9(e2.h, {
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
    e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await e6.Bo.get({
                url: eL.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            l = t.body?.guilds ?? [];
        e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: l });
    } catch (t) {
        throw (e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
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
    return e3.A.getGame(e)?.communityGuildIds ?? ti;
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
var tr = l(196765);
let to = new Set(),
    tc = (0, tr.v)((e) => ({
        gameId: null,
        excludedLocales: to,
        toggleLocale: (t, l) => {
            e((e) => {
                let n = new Set(e.gameId === t ? e.excludedLocales : to);
                return (n.has(l) ? n.delete(l) : n.add(l), { gameId: t, excludedLocales: n });
            });
        },
    }));
function tu(e) {
    return tc((t) => (t.gameId === e ? t.excludedLocales : to));
}
var td = l(297264),
    tm = l(37537),
    tx = l(714991),
    tg = l(486020),
    th = l(240248);
function tf(e) {
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
var tj = l(810729);
let tp = { sm: tj.nz, md: tj.a };
function tv(e) {
    let { className: t, width: l } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: u()(tj.qf, t), style: { width: l } });
}
function tA(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function tE(e) {
    let { className: t, size: l = "md" } = e;
    return (0, s.jsx)(tv, { className: u()(tj.x6, tp[l], t) });
}
var tI = l(827085);
function tN(e) {
    let { className: t } = e;
    return (0, s.jsx)(tv, { className: u()(tI.qV, t) });
}
function tb(e) {
    let { presenceCount: t, memberCount: l } = e;
    return null == t && null == l
        ? null
        : (0, s.jsxs)("div", {
              className: tI.kL,
              children: [
                  null != t &&
                      (0, s.jsxs)("div", {
                          className: tI.U9,
                          children: [
                              (0, s.jsx)("i", { className: tI._o }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != l &&
                      (0, s.jsxs)("div", {
                          className: tI.U9,
                          children: [
                              (0, s.jsx)("i", { className: tI.jk }),
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
var tS = l(213098);
function tC() {
    return (0, s.jsxs)(tA, {
        className: tS.uW,
        animationDelayMs: 300,
        children: [
            (0, s.jsx)(tv, { className: tS.dU, width: "30%" }),
            (0, s.jsx)(tA, {
                className: tS.nV,
                children: (0, s.jsxs)("div", { className: tS.hQ, children: [(0, s.jsx)(tT, {}), (0, s.jsx)(tE, {})] }),
            }),
        ],
    });
}
function tT() {
    return (0, s.jsxs)("div", {
        className: tS.To,
        children: [
            (0, s.jsx)(tv, { className: tS.QV }),
            (0, s.jsxs)("div", {
                className: tS.Yv,
                children: [
                    (0, s.jsx)(tv, { className: tS.Ag }),
                    (0, s.jsx)(tv, { className: tS.zl }),
                    (0, s.jsx)(tN, { className: tS.P2 }),
                ],
            }),
        ],
    });
}
function ty(e) {
    let { guild: t } = e,
        l = tg.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = r.useState(void 0),
        a = null != l && n !== l,
        o = r.useCallback(() => {
            i(l);
        }, [l]);
    return (0, s.jsxs)("div", {
        className: tS._C,
        children: [
            a && (0, s.jsx)(tv, { className: tS.EQ }),
            (0, s.jsx)("img", {
                className: tS.$f,
                src: l,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: o,
                onError: o,
            }),
        ],
    });
}
function tL(e) {
    let { guild: t, presenceCount: l, memberCount: n } = e;
    return (0, s.jsxs)("div", {
        className: tS.To,
        children: [
            (0, s.jsx)(ty, { guild: t }),
            (0, s.jsxs)("div", {
                className: tS.yj,
                children: [
                    (0, s.jsxs)("div", {
                        className: tS.YS,
                        children: [
                            (0, s.jsx)(tx.A, { guild: t, size: 16 }),
                            (0, s.jsx)(td.D, {
                                className: tS.J5,
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, th.uJ)(t.description) &&
                        (0, s.jsx)(W.E, {
                            className: tS.h_,
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, s.jsx)(tb, { presenceCount: l, memberCount: n }),
                ],
            }),
        ],
    });
}
function tk(e) {
    let { guild: t, presenceCount: l, memberCount: n, button: i, className: a } = e;
    return (0, s.jsx)("div", {
        className: u()(tS.kL, a),
        children: (0, s.jsxs)("div", {
            className: tS.hQ,
            children: [(0, s.jsx)(tL, { guild: t, presenceCount: l, memberCount: n }), i],
        }),
    });
}
function tR() {
    let e = (0, tm.c)("GameProfileGuildInvite"),
        {
            invite: t,
            hasDiscordWebsite: l,
            isCommunityInviteResolving: n,
            isMember: i,
            closeModal: a,
            trackAction: o,
        } = U(),
        c = r.useCallback(() => {
            null != t &&
                (o(T.GameProfileTrackActionActions.JoinServer),
                a(),
                e2.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: eL.BRT.APP }));
        }, [t, o, a]);
    return null == t || null == t.guild
        ? l && n
            ? (0, s.jsx)(tC, {})
            : null
        : (0, s.jsxs)("div", {
              className: tS.uW,
              children: [
                  (0, s.jsx)(td.D, {
                      className: tS.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, s.jsx)(tk, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      button: (0, s.jsx)(tf, { guildName: t.guild.name, isMember: i, onClick: c, fullWidth: !0 }),
                  }),
              ],
          });
}
var tG = l(320448),
    tO = l(152594);
function tM(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, s.jsxs)("div", {
        className: tO.kL,
        "aria-busy": !0,
        children: [
            (0, s.jsxs)("div", {
                className: tO.wR,
                children: [(0, s.jsx)(tv, { className: tO.Iz, width: l }), n && (0, s.jsx)(tE, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tP(e) {
    let { children: t, title: l, onClickViewAll: n, trailing: i } = e;
    return (0, s.jsxs)("div", {
        className: tO.kL,
        children: [
            (0, s.jsxs)("div", {
                className: tO.wR,
                children: [
                    (0, s.jsx)(td.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, s.jsx)(K.$, {
                            size: "sm",
                            icon: tG._,
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
var t_ = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tw = (0, tr.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tD = l(876798),
    tV = l(481901),
    tU = l(916099),
    tF = l(461353);
function tY() {
    let { layout: e, setLayout: t } = tw(),
        l = em.intl.string(em.t.VGRZh7),
        n = em.intl.string(em.t["NJFr+g"]);
    return (0, s.jsxs)("div", {
        className: tF.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, s.jsx)($.m, {
                text: l,
                asContainer: !0,
                children: (0, s.jsx)(tD.k, {
                    icon: tV.d,
                    pressed: e === t_.GRID,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(t_.GRID),
                }),
            }),
            (0, s.jsx)($.m, {
                text: n,
                asContainer: !0,
                children: (0, s.jsx)(tD.k, {
                    icon: tU.ListBulletsIcon,
                    pressed: e === t_.LIST,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(t_.LIST),
                }),
            }),
        ],
    });
}
var tW = l(37646),
    tB = l(846183);
function tH(e) {
    var t;
    let l,
        n,
        i,
        { locales: a, onClose: o } = e,
        { game: c } = U(),
        { options: u, toggleLocale: d } =
            ((t = c.id),
            (l = tu(t)),
            (n = tc((e) => e.toggleLocale)),
            (i = r.useMemo(() => {
                let e;
                return (
                    (e = (0, em.getAvailableLocales)()),
                    a
                        .map((t) => {
                            if ("en-US" === t) return { locale: t, label: em.intl.string(em.t.LQLMGP) };
                            let l = e.find((e) => {
                                let { value: l } = e;
                                return l === t;
                            });
                            return { locale: t, label: null != l ? em.intl.string(l.localizedName) : t };
                        })
                        .sort((e, t) => e.label.localeCompare(t.label))
                );
            }, [a])),
            {
                options: r.useMemo(() => {
                    let e = a.filter((e) => !l.has(e)).length;
                    return i.map((t) => {
                        let { locale: n, label: i } = t,
                            a = !l.has(n);
                        return { locale: n, label: i, checked: a, disabled: a && 1 === e };
                    });
                }, [i, a, l]),
                toggleLocale: r.useCallback((e) => n(t, e), [n, t]),
            });
    return (0, s.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "game-profile-communities-locale-filter",
        "aria-label": em.intl.string(em.t.OlOHDH),
        onClose: o,
        onSelect: void 0,
        children: u.map((e) => {
            let { locale: t, label: l, checked: n, disabled: i } = e;
            return (0, s.jsx)(X.sL, { id: t, label: l, checked: n, disabled: i, action: () => d(t) }, t);
        }),
    });
}
function tz(e) {
    let { locales: t } = e,
        l = r.useRef(null),
        n = em.intl.string(em.t.OlOHDH);
    return (0, s.jsx)("div", {
        className: tB.k,
        children: (0, s.jsx)(H.Y, {
            targetElementRef: l,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, s.jsx)(tH, { locales: t, onClose: l });
            },
            children: (e) =>
                (0, s.jsx)($.m, {
                    text: n,
                    asContainer: !0,
                    children: (0, s.jsx)(q.K, {
                        buttonRef: l,
                        icon: tW.U,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": n,
                        ...e,
                    }),
                }),
        }),
    });
}
var tX = l(939249),
    tK = l(762841);
function tJ(e) {
    let { className: t, ariaLabel: l, onClick: n, children: i } = e;
    return (0, s.jsx)(tX.D, { className: u()(tK.v, t), onClick: n, "aria-label": l, children: i });
}
var t$ = l(759020);
function tq(e) {
    let { guild: t, presenceCount: l, memberCount: n, ariaLabel: i, onClick: a } = e;
    return (0, s.jsxs)(tJ, {
        className: t$.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, s.jsxs)("div", {
                className: t$.OA,
                children: [
                    (0, s.jsx)(ty, { guild: t }),
                    (0, s.jsxs)("div", {
                        className: t$.FS,
                        children: [
                            (0, s.jsxs)("div", {
                                className: t$.YS,
                                children: [
                                    (0, s.jsx)(tx.A, { guild: t, size: 16 }),
                                    (0, s.jsx)(td.D, {
                                        className: t$.J5,
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, th.uJ)(t.description) &&
                                (0, s.jsx)(W.E, {
                                    className: t$.h_,
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: t$.Rn, children: (0, s.jsx)(tb, { presenceCount: l, memberCount: n }) }),
        ],
    });
}
var tQ = l(620387);
function tZ(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsx)(tA, { className: tQ.s7, animationDelayMs: t, children: (0, s.jsx)(tT, {}) });
}
function t0(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(tA, {
        className: tQ.fv,
        animationDelayMs: t,
        children: [
            (0, s.jsx)(tv, { className: tQ.VR }),
            (0, s.jsxs)("div", {
                className: tQ.hG,
                children: [
                    (0, s.jsx)(tv, { className: tQ.t_ }),
                    (0, s.jsx)(tv, { className: tQ.Aj }),
                    (0, s.jsx)(tv, { className: tQ.ax }),
                ],
            }),
            (0, s.jsx)(tv, { className: tQ.Ah }),
        ],
    });
}
function t1(e) {
    let { guild: t, presenceCount: l, memberCount: n, ariaLabel: i, onClick: a } = e;
    return (0, s.jsx)(tJ, {
        className: tQ.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, s.jsx)(tL, { guild: t, presenceCount: l, memberCount: n }),
    });
}
function t8(e) {
    let { guild: t, layout: l } = e,
        { game: n, closeModal: i, trackAction: a, viewId: o } = U(),
        c = (0, m.bG)([e0.A], () => e0.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = r.useCallback(async () => {
            (a(T.GameProfileTrackActionActions.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await e8.Z2(t.id, {}, { joinSource: eL.Q4z.GAME_PROFILE_COMMUNITIES, loadId: o }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, eZ._)(e);
                return;
            }
            let e = e1.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                e4.default.setGameProfilePendingReturn({
                    gameId: n.id,
                    channelId: e,
                    tab: y.COMMUNITIES,
                    source: T.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, o, n.id]),
        d = l === t_.LIST ? tq : t1;
    return (0, s.jsx)(d, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        ariaLabel: c
            ? em.intl.formatToPlainString(em.t.AEfs1D, { guildName: t.name })
            : em.intl.formatToPlainString(em.t.TUZ50q, { guildName: t.name }),
        onClick: u,
    });
}
function t4() {
    var e;
    let t,
        l,
        { game: n } = U(),
        { data: i, isLoading: a } = ts(n.id),
        o = tw((e) => e.layout),
        {
            locales: c,
            filteredGuilds: u,
            showLocaleFilter: d,
        } = ((e = n.id),
        (t = tu(e)),
        {
            locales: (l = r.useMemo(() => eq().uniq((i ?? []).map((e) => e.preferredLocale).filter(eT.Vq)), [i])),
            filteredGuilds: r.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: l.length >= 2,
        }),
        m = o === t_.LIST,
        x = m ? t0 : tZ,
        g = a && (null == i || 0 === i.length);
    return (0, s.jsxs)(eQ.Ch, {
        className: tQ.XG,
        children: [
            (0, s.jsx)("div", { className: tQ.xY, "aria-hidden": !0 }),
            (0, s.jsx)("div", {
                className: tQ.uW,
                children: (0, s.jsx)(tP, {
                    title: em.intl.string(em.t.r6bvTh),
                    trailing: (0, s.jsxs)("div", {
                        className: tQ.AA,
                        children: [d && (0, s.jsx)(tz, { locales: c }), (0, s.jsx)(tY, {})],
                    }),
                    children: (0, s.jsx)("div", {
                        className: m ? tQ.p_ : tQ.Vg,
                        children: g
                            ? eq()
                                  .range(8)
                                  .map((e) => (0, s.jsx)(x, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, s.jsx)(t8, { guild: e, layout: o }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var t3 = l(707554),
    t6 = l(369606),
    t2 = l(775602),
    t5 = l(21161),
    t9 = l(400492),
    t7 = l(541830),
    le = l(459746);
let lt = "1552821538409939044";
var ll = l(175213);
let ln = l(892799);
function li(e) {
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
    return (0, th.uJ)(n)
        ? null
        : (0, s.jsxs)("div", {
              ref: t,
              children: [
                  (0, s.jsx)("div", { className: ll.y1, style: { backgroundImage: `url("${n}")` } }),
                  (0, s.jsx)("div", { className: ll.N4 }),
              ],
          });
}
function la() {
    let { game: e } = U(),
        t = (e.genres ?? []).map(t7.du).join(", ");
    return (0, th.uJ)(t) ? null : (0, s.jsx)(W.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function ls(e) {
    let { rank: t } = e;
    return (0, s.jsxs)("div", {
        className: ll.Qc,
        children: [
            (0, s.jsx)(t6.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, s.jsx)(W.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function lr() {
    let { game: e } = U();
    return (0, s.jsx)(lo, { className: u()(ll._M, (0, le.cO)(e) && ll.i3), imageClassName: ll.xe });
}
function lo(e) {
    let { className: t, imageClassName: l } = e,
        { game: n } = U(),
        i = (0, s.jsx)(le.Ay, { game: n, className: l, size: le.wu.LARGE });
    return n.id !== lt
        ? (0, s.jsx)("div", { className: t, children: i })
        : (0, s.jsx)(lc, { className: t, children: i });
}
function lc(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = r.useContext(t5.x),
        i = (0, m.bG)([t2.Ay], () => t2.Ay.useReducedMotion),
        a = r.useRef({ count: 0, lastTime: 0 });
    return (0, s.jsx)(tX.D, {
        className: u()(l, ll.b3),
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
                (0, t9.Ak)("discodo");
            }
        },
        children: t,
    });
}
let lu = function () {
    let { game: e, isTwoColumn: t } = U(),
        l = e.name;
    return (0, s.jsxs)("div", {
        className: ll.ap,
        children: [
            t && (0, s.jsx)(lo, { className: u()(ll.Tf, (0, le.cO)(e) && ll.wS), imageClassName: ll.w$ }),
            (0, s.jsxs)("div", {
                className: ll.lu,
                children: [
                    null != e.l30Rank && (0, s.jsx)(ls, { rank: e.l30Rank }),
                    (0, s.jsxs)("div", {
                        className: ll.$,
                        children: [
                            (0, s.jsx)(td.D, { variant: "heading-xxl/semibold", children: l }),
                            e.id === lt &&
                                (0, s.jsx)("img", {
                                    src: ln,
                                    className: ll.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, s.jsx)(la, {}),
                ],
            }),
        ],
    });
};
var ld = l(638495),
    lm = l(871123),
    lx = l(439303),
    lg = l(317560),
    lh = l(467884),
    lf = l(480713),
    lj = l(449543),
    lp = l(197935),
    lv = l(761812);
function lA(e) {
    return e;
}
function lE(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: lv.B, children: t });
}
function lI(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, lf.l)("social_layer_storefront_card_row"),
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
          ? (0, s.jsx)(lp.A, {
                gap: "md",
                "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
                items: t,
                getItemKey: lA,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, s.jsx)(lE, {
                        children: (0, s.jsx)(lh.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: lh.s6.SMALL,
                            analyticsLocations: l,
                            onClick: a,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, s.jsx)(lj.A, {
                gap: "md",
                "aria-label": em.intl.string(em.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, s.jsx)(
                        lE,
                        {
                            children: (0, s.jsx)(lh.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: lh.s6.SMALL,
                                analyticsLocations: l,
                                onClick: a,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var lN = l(369435);
function lb(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: u()(lN.n, { [lN.C]: 16 === l }), children: t });
}
var lS = l(936785),
    lC = l(403581),
    lT = l(812095),
    ly = l(647474),
    lL = l(162536);
function lk(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eY.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        a = i ? lC.t : t.Icon;
    return (0, s.jsx)(ly.A, {
        className: u()(lL.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, s.jsxs)("div", {
            className: lL.Qs,
            children: [
                null != a && (0, s.jsx)(a, { size: "xs", color: "currentColor", className: lL.Kk }),
                (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "currentColor", children: (0, lT.U)(t.text) }),
            ],
        }),
    });
}
var lR = l(521058);
function lG() {
    let { storefrontPromotion: e } = U();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, th.uJ)(a.headerText)) return null;
    let r = {
        Icon: (0, lS.LZ)(n?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, lS.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, s.jsx)(lk, { className: lR.v, promotion: r });
}
let lO = [0, 1, 2, 3],
    lM = { placement: lx.Ye.GAME_PROFILE };
function lP() {
    return (0, s.jsx)(tM, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, s.jsx)(lb, { children: lO.map((e) => (0, s.jsx)(lE, { children: (0, s.jsx)(lh.yf, {}) }, e)) }),
    });
}
function l_(e) {
    let { selectTab: t } = e,
        l = (0, ld.k)(),
        {
            trackAction: n,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: a,
            hasCommerceTab: o,
            closeModal: c,
        } = U(),
        { analyticsLocations: u } = (0, j.Ay)([f.A.GAME_PROFILE]),
        d = r.useCallback(() => {
            if (i?.application != null) {
                if (o) return void t(y.COMMERCE);
                (n(T.GameProfileTrackActionActions.GameShop),
                    c(),
                    (0, ei.default)({ applicationId: i.application.id }));
            }
        }, [i, n, o, t, c]),
        m = r.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (n(T.GameProfileTrackActionActions.GameShopItem),
                    (0, lg.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, lm.rG)(e, l, t, a) && c();
                        },
                    }));
            },
            [n, c, u, i, l],
        );
    if (a) return (0, s.jsx)(lP, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, s.jsxs)(tP, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, s.jsx)(lG, {}),
            (0, s.jsx)(lx.E9, {
                newValue: lM,
                children: (0, s.jsx)(lI, { skuIds: x, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var lw = l(621466),
    lD = l(966697),
    lV = l(346055),
    lU = l(460905),
    lF = l(776231),
    lY = l(46054),
    lW = l(58703),
    lB = l(317097),
    lH = l(155718),
    lz = l(387408),
    lX = l(731068),
    lK = l(59318),
    lJ = l(320095),
    l$ = l(708676),
    lq = l(383233),
    lQ = l(998218);
let lZ = /^#{1,3}\s+(.+)$/,
    l0 = /^https?:\/\/\S+$/;
var l1 = l(158390),
    l8 = l(103348),
    l4 = l(371794);
let l3 = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function l6(e) {
    e2.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, l4.aP)({
                    url: eL.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: C.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(l8.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (e2.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            e2.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        e2.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function l2(e) {
    let t = ((await e6.Bo.get({ url: eL.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !l3.has(t),
    );
    e2.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let l5 = (0, m.UT)(L.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => L.A.getSimilarGames(e) ?? null,
    load: (e) => l2(e),
    retryConfig: { backoff: () => new l1.A(5 * tn.A.Millis.SECOND, 5 * tn.A.Millis.MINUTE) },
    failureStaleAfter: tn.A.Seconds.MINUTE,
});
async function l9(e, t) {
    e2.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await e6.Bo.get({ url: eL.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        e2.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, lz.A)((0, lJ.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, lq._c)(e))
                            return e.components
                                .filter((e) => e.type === lH.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || l0.test(t.trim())
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
                        if ((0, lq._c)(e)) {
                            let t = e.components.find((e) => e.type === lH.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, lX.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, lK.tT)(e.content_type));
                        if (null != t) return (0, lX.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, lK.XB)(e.content_type));
                        if (null != l) return (0, lX.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, lX.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, lX.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, lX.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(n),
                    { title: r, body: o } =
                        ((t = a.indexOf("\n")),
                        (l = (-1 === t ? a : a.slice(0, t)).match(lZ)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    c = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, lq._c)(n)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let l = t.author?.name,
                                      n = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = null != t.color ? (0, lB.$k)(t.color, !0) : void 0;
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
                    body: o,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: c,
                    embedSource: u,
                    poll: n.poll,
                };
            }),
            channelId: n.channel_id ?? void 0,
            guildId: n.guild_id ?? void 0,
        });
    } catch (t) {
        e2.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var l7 = l(284009),
    ne = l.n(l7),
    nt = l(376728),
    nl = l(976860);
async function nn(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    ne()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let o = e0.A.getGuild(l);
    if (o?.joinedAt == null)
        if (null == r || r.has(eL.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e8.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: eL.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await nt.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, nl.pX)(eL.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var ni = l(806244),
    na = l(165648);
function ns(e, t) {
    return lY.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function nr(e) {
    return e.id;
}
function no() {
    return (0, s.jsxs)(tA, {
        className: ni.s7,
        children: [
            (0, s.jsx)(tv, { className: ni.o$ }),
            (0, s.jsxs)("div", {
                className: ni.UF,
                children: [(0, s.jsx)(tv, { className: ni.iX }), (0, s.jsx)(tv, { className: ni.jt })],
            }),
        ],
    });
}
function nc(e, t) {
    var l;
    let n,
        i = (0, lF.kr)(364 * (0, lF.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = lQ.A.toURLSafe(e))
            ? null
            : (n.searchParams.append("format", "webp"),
              null != i && n.searchParams.append("width", i.toString()),
              null != l && n.searchParams.append("height", l.toString()),
              n.toString())) ?? e
    );
}
function nu(e) {
    let { message: t, src: l, aspectRatio: n } = e,
        [i, a] = r.useState(!1),
        o = r.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, s.jsx)(lD.y, {
              readyState: i ? eL.Rv1.READY : eL.Rv1.LOADING,
              aspectRatio: n,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, s.jsx)("img", {
                  src: l,
                  className: ni.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: o,
              }),
          });
}
function nd(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lw.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lw.vq)(e.target, HTMLSpanElement) && (0, lw.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        d = null != c ? nc(c, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, s.jsx)(tX.D, {
              ...i,
              className: ni.Nr,
              onClick: a,
              children: (0, s.jsxs)(lV.M, {
                  className: ni.zI,
                  children: [
                      null != m.url &&
                          (0, s.jsx)(W.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: ni.Ow,
                              children: m.url,
                          }),
                      (0, s.jsxs)("div", {
                          className: ni._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, s.jsxs)("div", {
                                      className: ni.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, s.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: ni.SG,
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
                                      className: ni.ax,
                                      children: (0, s.jsx)(nu, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, s.jsx)(td.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: ni.DD,
                                      children: ns(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, s.jsxs)("div", {
                                      className: u()(ni.h_, na.PT),
                                      children: [ns(t.body, l), (0, s.jsx)("div", { className: ni.fm })],
                                  }),
                              (0, s.jsxs)("div", {
                                  className: ni.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, s.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: ni.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, s.jsxs)(W.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, lW.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, s.jsxs)("div", {
                                              className: ni.a5,
                                              children: [
                                                  (0, s.jsx)(lU.n, { size: "xs", color: "currentColor" }),
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
let nm = r.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, s.jsxs)(lV.M, {
        className: ni.zI,
        children: [
            null != t.title &&
                (0, s.jsx)(td.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: ni.DD,
                    children: ns(t.title, l),
                }),
            t.body.length > 0 &&
                (0, s.jsxs)("div", {
                    className: u()(ni.h_, na.PT),
                    children: [ns(t.body, l), (0, s.jsx)("div", { className: ni.fm })],
                }),
            (0, s.jsxs)("div", {
                className: ni.ov,
                children: [
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, lW.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, s.jsxs)("div", {
                            className: ni.a5,
                            children: [
                                (0, s.jsx)(lU.n, { size: "xs", color: "currentColor" }),
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
function nx(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lw.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lw.vq)(e.target, HTMLSpanElement) && (0, lw.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        u = null != c ? nc(c, o) : void 0;
    return (0, s.jsxs)(tX.D, {
        ...i,
        className: ni.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, s.jsx)("div", {
                    className: ni.Vl,
                    children: (0, s.jsx)(nu, { message: t, src: u, aspectRatio: o }),
                }),
            (0, s.jsx)(nm, { message: t, channelId: l }),
        ],
    });
}
function ng(e) {
    let { message: t, onCardClick: l, listItemProps: n } = e,
        { poll: i } = t,
        a = r.useCallback(() => l(t.id), [l, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, s.jsx)(tX.D, {
        ...n,
        className: ni.Nr,
        onClick: a,
        children: (0, s.jsxs)(lV.M, {
            className: ni.zI,
            children: [
                (0, s.jsx)(td.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: ni.MH,
                    children: i.question.text,
                }),
                (0, s.jsxs)("div", {
                    className: ni.xd,
                    children: [
                        o.map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: ni.Nf,
                                    children: (0, s.jsx)(W.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: ni.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        c > 0 &&
                            (0, s.jsx)(W.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: ni.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: ni.ov,
                    children: (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, l$.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function nh(e) {
    return null != e.message.poll
        ? (0, s.jsx)(ng, { ...e })
        : null != e.message.embedSource
          ? (0, s.jsx)(nd, { ...e })
          : (0, s.jsx)(nx, { ...e });
}
let nf = r.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: l } = (0, j.Ay)(),
        { game: n, invite: i, hasDiscordWebsite: a, closeModal: o, trackAction: c } = U(),
        u = n.id,
        {
            messages: d,
            guildId: x,
            channelId: g,
            loading: h,
            hasFetched: f,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, m.cf)([L.A], () => ({
                data: null != e ? L.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && L.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && L.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, r.useEffect)(() => {
                    null == e || l || L.A.isAnnouncementsFetching(e) || l9(e, { limit: 8 });
                }, [e, l, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n, hasFetched: l }
            );
        })(u),
        p = (0, lf.l)("game_profile_announcements"),
        v = r.useCallback(() => {
            let e = i?.guild?.id ?? x;
            null != e &&
                null != g &&
                (c(T.GameProfileTrackActionActions.Announcements),
                e4.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                o(),
                nn({ invite: i, guildId: e, channelId: g, analyticsLocationStack: l }));
        }, [c, o, t, i, x, g, l, u]),
        A = r.useCallback(
            (e) => {
                let n = i?.guild?.id ?? x;
                null != n &&
                    null != g &&
                    (c(T.GameProfileTrackActionActions.AnnouncementsItem),
                    e4.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                    o(),
                    nn({ invite: i, guildId: n, channelId: g, messageId: e, analyticsLocationStack: l }));
            },
            [c, o, t, i, x, g, l, u],
        ),
        E = null != g && d.length > 0;
    return (!f || h) && a
        ? (0, s.jsx)(tM, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, s.jsx)(lb, {
                  gap: 16,
                  children: eq()
                      .range(3)
                      .map((e) => (0, s.jsx)(no, {}, e)),
              }),
          })
        : E
          ? (0, s.jsx)(tP, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: v,
                children: p
                    ? (0, s.jsx)(lp.A, {
                          gap: 16,
                          items: d,
                          getItemKey: nr,
                          itemClassName: ni.hu,
                          renderItem: (e, t) =>
                              (0, s.jsx)(nh, { message: e, channelId: g, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, s.jsx)(lj.A, {
                          gap: 16,
                          children: d.map((e) => (0, s.jsx)(nh, { message: e, channelId: g, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var nj = l(505779);
(l(323874), l(14289), l(35956));
var np = l(989441);
let nv = {
        appStore: {
            websiteCategories: [nj.V.IPHONE, nj.V.IPAD],
            websiteHostnames: ["apps.apple.com", "itunes.apple.com"],
            distributor: np.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://apps.apple.com/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [nj.V.ANDROID],
            websiteHostnames: ["play.google.com"],
            distributor: np.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://play.google.com/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    nA = new Set(
        Object.values(nv).flatMap((e) => {
            let { websiteCategories: t } = e;
            return t;
        }),
    );
function nE(e, t) {
    let l;
    return (
        (function (e, t) {
            for (let l of t.websiteCategories) {
                let n = e.websites.find((e) => {
                    let { category: n, url: i } = e;
                    if (n !== l) return !1;
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
                if (null != n) return n;
            }
            return null;
        })(e, t) ??
        (null != (l = e.thirdPartySkus.find((e) => e.distributor === t.distributor)?.id)
            ? { category: t.websiteCategories[0], url: t.buildUrl(l) }
            : null)
    );
}
var nI = l(808380);
let nN = [nI.Y.DESKTOP, "mobile", nI.Y.XBOX, nI.Y.PLAYSTATION, nI.Y.NINTENDO];
var nb = l(28863),
    nS = l(975807),
    nC = l(194362);
function nT() {
    let { game: e, trackAction: t } = U(),
        l = r.useCallback(async () => {
            t(T.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, nC.a)(eL.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, nS.A)(e);
        }, [t]),
        n = r.useCallback((e) => (0, s.jsx)(nb.Anchor, { onClick: l, children: e }), [l]);
    return e.linkedApplications?.some((e) => e.type === lH.Mh.OFFICIAL)
        ? null
        : (0, s.jsx)(W.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: n }),
          });
}
var ny = l(998445),
    nL = l(274997),
    nk = l(80500),
    nR = l(319745),
    nG = l(488225),
    nO = l(967492),
    nM = l(72265),
    nP = l(454346),
    n_ = l(610509),
    nw = l(575888),
    nD = l(37948),
    nV = l(693558);
let nU = { size: "xs", colorClass: nV.w };
function nF(e) {
    let { website: t } = e,
        { trackAction: l } = U(),
        n = (0, nD.A)(),
        {
            action: i,
            icon: a,
            title: o,
        } = (function (e, t) {
            switch (e.category) {
                case nj.V.OFFICIAL:
                    return {
                        icon: (0, s.jsx)(ny.GlobeEarthIcon, { ...t }),
                        action: T.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case nj.V.TWITTER:
                    return {
                        icon: (0, s.jsx)(nL.p, { ...t }),
                        action: T.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case nj.V.YOUTUBE:
                    return {
                        action: T.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, s.jsx)(nk.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case nj.V.FACEBOOK:
                    return {
                        icon: (0, s.jsx)(nR.Z, { ...t }),
                        action: T.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case nj.V.INSTAGRAM:
                    return {
                        icon: (0, s.jsx)(nG.L, { ...t }),
                        action: T.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case nj.V.BLUESKY:
                    return {
                        icon: (0, s.jsx)(nO.a, { ...t }),
                        action: T.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case nj.V.REDDIT:
                    return {
                        icon: (0, s.jsx)(nM.T, { ...t }),
                        action: T.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case nj.V.TWITCH:
                    return {
                        icon: (0, s.jsx)(nP.a, { ...t }),
                        action: T.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                case nj.V.IPHONE:
                case nj.V.IPAD:
                    return {
                        icon: (0, s.jsx)(n_.z, { ...t }),
                        action: T.GameProfileTrackActionActions.AppStoreLink,
                        title: em.intl.string(em.t.LVy7Ug),
                    };
                case nj.V.ANDROID:
                    return {
                        icon: (0, s.jsx)(nw.O, { ...t }),
                        action: T.GameProfileTrackActionActions.GooglePlayStoreLink,
                        title: em.intl.string(em.t.V6rllO),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, nU),
        c = r.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, s.jsx)($.m, {
        text: o,
        children: (0, s.jsx)(tX.D, { onClick: c, className: nV.y, title: o, children: a }),
    });
}
var nY = l(31300),
    nW = l(646270),
    nB = l(802516),
    nH = l(22363),
    nz = l(418524);
let nX = { [nI.Y.DESKTOP]: nY.k, mobile: nW.u, [nI.Y.XBOX]: nB.Y, [nI.Y.PLAYSTATION]: nH.X, [nI.Y.NINTENDO]: nz.M };
function nK(e) {
    let { platform: t } = e,
        l = (function (e) {
            switch (e) {
                case nI.Y.DESKTOP:
                    return em.intl.string(em.t.KT6uCJ);
                case "mobile":
                    return em.intl.string(em.t["0DvssQ"]);
                case nI.Y.XBOX:
                    return em.intl.string(em.t.DDWUJp);
                case nI.Y.PLAYSTATION:
                    return em.intl.string(em.t.fzMz2s);
                case nI.Y.NINTENDO:
                    return em.intl.string(em.t.AMW8je);
            }
        })(t),
        n = nX[t];
    return (0, s.jsx)(
        $.m,
        {
            text: l,
            ariaHidden: !0,
            children: (0, s.jsx)("span", { role: "img", "aria-label": l, children: (0, s.jsx)(n, { size: "xs" }) }),
        },
        t,
    );
}
var nJ = l(424994),
    n$ = l(623828);
function nq() {
    return (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let nQ = function () {
    let { game: e } = U(),
        t = (0, tm.c)("GameProfileGameDetails"),
        l = r.useMemo(() => e.genres.map(t7.du).join(", "), [e]),
        n = e.getCompanyByRole(lH.wk.PUBLISHER),
        i = e.getCompanyByRole(lH.wk.DEVELOPER),
        a = n.map((e) => e.name).join(", "),
        o = i.map((e) => e.name).join(", "),
        c = e.firstReleaseDate,
        u = r.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(nI.Y.MACOS) || t.has(nI.Y.LINUX)) && t.add(nI.Y.DESKTOP);
            let l = t.has(nI.Y.IOS) || t.has(nI.Y.ANDROID);
            return nN.filter((e) => ("mobile" === e ? l : t.has(e)));
        }, [e.platforms]),
        d = r.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return nj.p.includes(t) && !nA.has(t);
                }),
                l = Object.values(nv)
                    .map((t) => nE(e, t))
                    .filter(eT.Vq);
            return t.sort((e, t) => nj.p.indexOf(e.category) - nj.p.indexOf(t.category)).concat(l);
        }, [e]),
        m = !(0, th.uJ)(l),
        x = !(0, th.uJ)(a),
        g = !(0, th.uJ)(o),
        h = !(0, th.uJ)(c),
        f = u.length > 0,
        j = d.length > 0 && !d.every((e) => (0, th.uJ)(e.url));
    return (0, s.jsxs)("div", {
        className: n$.uW,
        children: [
            (0, s.jsx)("div", {
                className: n$.Gf,
                children: (0, s.jsx)(td.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: n$.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: n$.J1,
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
                                      className: n$.Gu,
                                      children: l,
                                  })
                                : (0, s.jsx)(nq, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n$.J1,
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
                                      className: n$.Gu,
                                      children: a,
                                  })
                                : (0, s.jsx)(nq, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n$.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== i.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            g
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: n$.Gu,
                                      children: o,
                                  })
                                : (0, s.jsx)(nq, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n$.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            h
                                ? (0, s.jsx)(W.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: n$.Gu,
                                      children: lW.i$(new Date(c), "LL"),
                                  })
                                : (0, s.jsx)(nq, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n$.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            f
                                ? (0, s.jsx)("div", {
                                      className: n$.Gu,
                                      children: u.map((e) => (0, s.jsx)(nK, { platform: e }, e)),
                                  })
                                : (0, s.jsx)(nq, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n$.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, s.jsx)("div", {
                                      className: n$.Gu,
                                      children: d.map((e) => (0, s.jsx)(nF, { website: e }, e.url)),
                                  })
                                : (0, s.jsx)(nq, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: n$.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: n$.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: nJ.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: n$.OQ, children: (0, s.jsx)(nT, {}) }),
        ],
    });
};
var nZ = l(141628),
    n0 = l(289363),
    n1 = l(793919);
function n8() {
    return (0, s.jsxs)("div", {
        "aria-hidden": !0,
        className: n1.uW,
        children: [
            (0, s.jsx)(tv, { className: n1.dU, width: "30%" }),
            (0, s.jsxs)(tA, {
                className: n1.nV,
                children: [
                    (0, s.jsx)("div", { className: n1.sB, children: (0, s.jsx)(n0.default, { isLoading: !0 }) }),
                    (0, s.jsxs)("div", {
                        className: n1.hQ,
                        children: [
                            (0, s.jsxs)("div", {
                                className: n1.Yv,
                                children: [(0, s.jsx)(tv, { width: "55%" }), (0, s.jsx)(tv, { width: "85%" })],
                            }),
                            (0, s.jsx)(tE, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function n4(e) {
    let { analyticsLocations: t } = e,
        l = (0, tm.c)("GameProfileLinkAccount"),
        {
            trackAction: n,
            fetchedAuthorization: i,
            hasAlreadyLinked: a,
            canStartAuthorization: o,
            startAuthorization: c,
            connectionApp: u,
            hasOfficialApplication: d,
            officialApplicationFetchFailed: x,
        } = U(),
        g = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        h = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.LinkAccount), c({ analyticsLocations: t }));
        }, [n, c, t]);
    return !d || x || null == g
        ? null
        : null == u || (o && !i)
          ? (0, s.jsx)(n8, {})
          : !o || a
            ? null
            : (0, s.jsxs)("div", {
                  className: n1.uW,
                  children: [
                      (0, s.jsx)(td.D, {
                          className: n1.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, s.jsxs)("div", {
                          className: n1.kL,
                          children: [
                              (0, s.jsx)("div", {
                                  className: n1.sB,
                                  children: (0, s.jsx)(n0.default, { application: u }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: n1.hQ,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: n1.FS,
                                          children: [
                                              (0, s.jsx)(td.D, {
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
                                          icon: nZ.A,
                                          text: em.intl.string(em.t.jynBQ5),
                                          onClick: h,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
}
var n3 = l(635377),
    n6 = l.n(n3),
    n2 = l(80687),
    n5 = l(534573),
    n9 = l(248643),
    n7 = l(256905),
    ie = l(44788),
    it = l(191096),
    il = l(90721),
    ii = l(140128);
function ia(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function is(e, t) {
    return (0, n5.Ec)(e, { size: t, keepAspectRatio: !0, format: tg.QB ? "webp" : null });
}
let ir = new (n6())({ max: 100 }),
    io = r.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, a] = r.useState(null),
            o = null != i && i.url === t ? i.isPortrait : (ir.get(t) ?? !1),
            c = r.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (ir.set(t, l),
                        a((e) => (null != e && e.url === t && e.isPortrait === l ? e : { url: t, isPortrait: l })));
                },
                [t],
            ),
            d = r.useCallback((e) => c(e.currentTarget), [c]);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("img", {
                    ref: c,
                    src: is(t, 106),
                    className: u()(ii.r4, !o && ii.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, s.jsx)("img", { ref: c, src: is(t, 900), className: u()(ii.c8, o && ii.D7, n), alt: l, onLoad: d }),
            ],
        });
    }),
    ic = r.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: a, onSelect: o, gameName: c, listItemProps: d } = e,
            m = r.useCallback(() => o(n), [o, n]),
            x = d?.tabIndex;
        return (0, s.jsx)(tX.D, {
            ...d,
            className: u()(ii.JS, i && ii.Y4),
            onClick: m,
            children: (0, s.jsxs)("div", {
                className: ii.ub,
                children: [
                    (0, s.jsx)("img", {
                        src: is("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: ii.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: c }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, s.jsx)("div", {
                            className: ii.UZ,
                            children: (0, s.jsx)(n2.D, { playing: i && a, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    iu = r.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                autoPlay: n,
                videoRef: i,
                mediaPlayerRef: a,
                onPlay: o,
                onPause: c,
                onFullscreenChange: u,
            } = e,
            d = r.useRef(null);
        return (
            (0, il.A)({ videoRef: i, canvasRef: d, enabled: !l }),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    !l && (0, s.jsx)("canvas", { ref: d, className: ii.HW, "aria-hidden": "true" }),
                    (0, s.jsx)("div", {
                        className: ii.tN,
                        children: (0, s.jsx)(n9.A, {
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
                            renderLinkComponent: ie.bU,
                            onPlay: o,
                            onPause: c,
                            onFullscreenChange: u,
                            mediaPlayerClassName: ii.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function id() {
    let { game: e, trackAction: t } = U(),
        [l, n] = r.useState(0),
        [i, a] = r.useState(null),
        [o, c] = r.useState(e.screenshotUrls),
        u = r.useRef(null),
        d = r.useRef(null),
        x = (0, m.bG)([t2.Ay], () => t2.Ay.useReducedMotion),
        { obscured: g } = (0, it.I3)(),
        h = (0, lf.l)("game_profile_media");
    o !== e.screenshotUrls && (c(e.screenshotUrls), n(0));
    let f = r.useMemo(
            () => [
                ...(e.trailers ?? []).map((e) => {
                    let t = (0, l4.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, l4.YE)(e.application_id, e.id, e.width, "webp"),
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
        A = v?.type === "VIDEO",
        E = r.useCallback(
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
            t(A ? T.GameProfileTrackActionActions.ClickTrailer : T.GameProfileTrackActionActions.ClickImage);
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
            (0, n7.R)({
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
        }, [t, f, p, A]),
        C = r.useCallback(() => N(!0), []),
        y = r.useCallback(() => N(!1), []),
        L = r.useCallback(() => a(null), []),
        k = r.useCallback(
            (e) => {
                e && S();
            },
            [S],
        );
    return 0 === f.length
        ? null
        : (0, s.jsxs)("div", {
              className: ii.kL,
              children: [
                  A
                      ? (0, s.jsx)("div", {
                            className: ii.ND,
                            children: (0, s.jsx)(
                                iu,
                                {
                                    item: v,
                                    reducedMotion: x,
                                    autoPlay: !x && !g,
                                    videoRef: u,
                                    mediaPlayerRef: b,
                                    onPlay: C,
                                    onPause: y,
                                    onFullscreenChange: k,
                                },
                                `${p}-${v.url}`,
                            ),
                        })
                      : (0, s.jsxs)("div", {
                            className: ii.wp,
                            children: [
                                null != i &&
                                    !x &&
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: ii.Jy,
                                            onAnimationEnd: L,
                                            children: (0, s.jsx)(io, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, s.jsx)("div", { className: ii.QN }),
                                (0, s.jsx)(tX.D, {
                                    className: ii.gv,
                                    onClick: S,
                                    children: (0, s.jsx)("div", {
                                        className: ii.cs,
                                        children: (0, s.jsx)(
                                            io,
                                            {
                                                url: v.url,
                                                className: ii.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  h
                      ? (0, s.jsx)(lp.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: j,
                            getItemKey: ia,
                            renderItem: (t, l) => {
                                let { item: n, index: i } = t;
                                return (0, s.jsx)(
                                    ic,
                                    {
                                        item: n,
                                        index: i,
                                        isPlaying: I,
                                        isSelected: i === p,
                                        onSelect: E,
                                        gameName: e.name,
                                        listItemProps: l,
                                    },
                                    `${i}-${n.url}`,
                                );
                            },
                        })
                      : (0, s.jsx)(lj.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: f.map((t, l) =>
                                (0, s.jsx)(
                                    ic,
                                    {
                                        item: t,
                                        index: l,
                                        isPlaying: I,
                                        isSelected: l === p,
                                        onSelect: E,
                                        gameName: e.name,
                                    },
                                    `${l}-${t.url}`,
                                ),
                            ),
                        }),
              ],
          });
}
var im = l(49381),
    ix = l(223273);
function ig(e, t, l) {
    if (null == e || null == t || t < 10) return ix.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? ix.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? ix.vI.VERY_POSITIVE
              : ix.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return ix.vI.MOSTLY_POSITIVE;
    if (e >= 40) return ix.vI.MIXED;
    if (e >= 20) return ix.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return ix.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return ix.vI.VERY_NEGATIVE;
    return ix.vI.OVERWHELMINGLY_NEGATIVE;
}
var ih = l(792216);
let ij = {
    appStore: { getTitle: () => em.intl.string(em.t.LVy7Ug), action: T.GameProfileTrackActionActions.AppStoreReviews },
    googlePlay: {
        getTitle: () => em.intl.string(em.t.V6rllO),
        action: T.GameProfileTrackActionActions.GooglePlayReviews,
    },
};
function ip(e) {
    switch (e) {
        case ix.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case ix.vI.OVERWHELMINGLY_POSITIVE:
        case ix.vI.VERY_POSITIVE:
        case ix.vI.POSITIVE:
        case ix.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case ix.vI.MIXED:
            return "steam-review-text-mixed";
        case ix.vI.MOSTLY_NEGATIVE:
        case ix.vI.NEGATIVE:
        case ix.vI.VERY_NEGATIVE:
        case ix.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
let iv = { enabled: !1 },
    iA = (0, er.mj)({
        name: "2026-10-game-profile-mobile-reviews",
        kind: "user",
        defaultConfig: iv,
        variations: { 0: iv, 1: { enabled: !0 } },
    });
var iE =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    iI = l(778591);
function iN(e) {
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
var ib = l(315189);
let iS = { appStore: n_.z, googlePlay: nw.O };
function iC(e) {
    let { review: t } = e,
        { trackAction: l } = U(),
        n = (0, nD.A)(),
        i = iS[t.key],
        { action: a, url: o } = t,
        c = r.useCallback(() => {
            (l(a), n(o));
        }, [a, n, l, o]);
    return (0, s.jsx)(tX.D, {
        onClick: c,
        className: ib.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, s.jsxs)("div", {
            className: ib.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: ib.hU,
                    children: [
                        (0, s.jsx)(i, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(td.D, { variant: "heading-sm/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: ib.nK,
                    children: [
                        (0, s.jsx)(W.E, {
                            variant: "text-xs/medium",
                            color: "text-strong",
                            className: ib.yX,
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
function iT(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: o } = U(),
        c = (0, nD.A)(),
        u = ig(n, i, "recent" === a),
        d = ip(u),
        m = r.useCallback(() => {
            (o(T.GameProfileTrackActionActions.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, s.jsx)(tX.D, {
        onClick: m,
        className: ib.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, s.jsxs)("div", {
            className: ib.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: ib.hU,
                    children: [
                        (0, s.jsx)(im.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(td.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, s.jsx)(
                    $.m,
                    {
                        text:
                            u === ix.vI.NO_USER_REVIEWS
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
                            className: ib.nK,
                            children: [
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: ib.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case ix.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case ix.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case ix.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case ix.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case ix.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case ix.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case ix.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case ix.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case ix.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case ix.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== ix.vI.NO_USER_REVIEWS &&
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
function iy(e) {
    let { url: t } = e,
        { game: l, trackAction: n } = U(),
        { reviews: i } = l,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = a.tier,
        c = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (c <= 0 || u <= 0) && null == o,
        m = (0, nD.A)(),
        x = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, n, t]);
    return (0, s.jsx)(tX.D, {
        onClick: x,
        className: ib.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, s.jsxs)("div", {
            className: ib.Ur,
            children: [
                (0, s.jsx)(td.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, s.jsxs)("div", {
                    className: ib.WA,
                    children: [
                        null != o ? (0, s.jsx)(iL, { tier: o }) : null,
                        null != o && c > 0 && u > 0 ? (0, s.jsx)(ik, { rating: c, tier: o }) : null,
                        d
                            ? (0, s.jsx)(W.E, {
                                  variant: "text-xs/medium",
                                  color: ip(ix.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function iL(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case iE.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case iE.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case iE.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case iE.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case iE.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case iE.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case iE.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case iE.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, s.jsx)(
        $.m,
        {
            text: l,
            children: (0, s.jsx)("div", {
                className: ib.TE,
                children: (0, s.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function ik(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case iE.MIGHTY:
                    t = "#fc430a";
                    break;
                case iE.STRONG:
                    t = "#9e00b4";
                    break;
                case iE.FAIR:
                    t = "#4aa1ce";
                    break;
                case iE.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, s.jsx)(
        $.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, s.jsxs)("div", {
                className: ib.TE,
                style: { backgroundColor: i },
                children: [
                    (0, s.jsx)(iN, { rating: t, strokeColor: n }),
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: ib.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let iR = function () {
    var e;
    let { game: t } = U(),
        l = (0, tm.c)("GameProfileReviews"),
        n = (0, iI.I)(t.id),
        i = t.opencriticUrl,
        a = r.useMemo(() => {
            let e = t.reviews?.steam,
                l = t.steamReleaseStatus !== ih.Y.RETIRED_ABANDONED && null != n,
                i = ig(e?.recentRating, e?.recentRatingCount, !0),
                a = l && i !== ix.vI.NO_USER_REVIEWS,
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
                mobileStoreReviews: Object.entries(ij).flatMap((e) => {
                    var l;
                    let n,
                        i,
                        [a, s] = e,
                        r = t.reviews?.[a],
                        o = r?.rating,
                        c = r?.ratingCount;
                    if (null == o || null == c) return [];
                    let u = nE(t, nv[a]);
                    return null != u
                        ? [
                              ((l = u.url),
                              (n = s.getTitle()),
                              (i = new Intl.NumberFormat(em.intl.currentLocale, {
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 1,
                              }).format(o)),
                              {
                                  key: a,
                                  url: l,
                                  title: n,
                                  ratingText: em.intl.format(em.t["zdL4/T"], { rating: i }).toString(),
                                  ratingCountText: em.intl.format(em.t.u1m2hs, { rating_count: c }).toString(),
                                  accessibilityLabel: em.intl
                                      .format(em.t["63jSRx"], { store: n, rating: i, rating_count: c })
                                      .toString(),
                                  action: s.action,
                              }),
                          ]
                        : [];
                }),
            };
        }, [t, n]),
        o =
            ((e = a.mobileStoreReviews),
            !(function (e) {
                let { location: t } = e;
                return iA.useConfig({ location: t }).enabled;
            })({ location: "GameProfileReviews" })
                ? []
                : e),
        {
            steamReview: c,
            showSteamReview: u,
            showRecentSteamReview: d,
            showLocalizedReview: m,
            primarySteamRating: x,
            primarySteamRatingCount: g,
            primarySteamTitleKey: h,
        } = a,
        f =
            (t.steamReleaseStatus !== ih.Y.RETIRED_ABANDONED || o.length > 0) &&
            t.reviews?.opencritic != null &&
            null != t.opencriticUrl;
    return u || f || 0 !== o.length
        ? (0, s.jsxs)("div", {
              className: ib.uW,
              children: [
                  (0, s.jsx)("div", {
                      className: ib.Gf,
                      children: (0, s.jsx)(td.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: ib.kL,
                      children: [
                          d && null != n
                              ? (0, s.jsx)("div", {
                                    className: ib.WH,
                                    children: (0, s.jsx)(iT, {
                                        url: n,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          u && null != n
                              ? (0, s.jsx)("div", {
                                    className: ib.WH,
                                    children: (0, s.jsx)(iT, {
                                        url: n,
                                        title: em.intl.string(h),
                                        rating: x,
                                        ratingCount: g,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          o.map((e) =>
                              (0, s.jsx)("div", { className: ib.WH, children: (0, s.jsx)(iC, { review: e }) }, e.key),
                          ),
                          f && null != i
                              ? (0, s.jsx)("div", { className: ib.WH, children: (0, s.jsx)(iy, { url: i }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var iG = l(815996),
    iO = l(722258),
    iM = l(258245),
    iP = l(561769),
    i_ = l(484469),
    iw = l(57020),
    iD = l(682301);
let iV = [];
var iU = l(758836),
    iF = l(399872);
let iY = [0, 1, 2, 3, 4];
function iW(e) {
    return e.skuId;
}
function iB(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = r.useContext(iP.v3),
        { trackAction: u } = U(),
        d = r.useRef(null),
        m = r.useCallback(
            (e) => {
                (u(T.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, iO.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, iw.A)({ product: t }),
                        returnRef: d,
                    }));
            },
            [u, i, t],
        ),
        x = r.useMemo(
            () => ({
                flattenProductVariants: a ?? !0,
                prioritizedCurrency: o,
                standalonePreview: c,
                productOverride: t,
            }),
            [a, o, c, t],
        );
    return (0, s.jsx)(iP.v3.Provider, {
        value: x,
        children: (0, s.jsx)(iM.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: iF.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function iH() {
    return (0, s.jsx)(i_.A, {});
}
function iz() {
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
                    } = (0, m.cf)([L.A], () => ({
                        hasFetched: null != e && L.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && L.A.isShopCollectionFetching(e),
                        skuIds: null != e ? L.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, r.useEffect)(() => {
                            null == e || t || L.A.isShopCollectionFetching(e) || l6(e);
                        }, [e, t]),
                        { skuIds: n ?? iV, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, iD.hv)(t, { flattenVariants: !0 }),
                a = (0, r.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                s = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && s)) };
        })(e.shopCollectionIds?.[0]),
        a = r.useCallback(() => {
            (l(T.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, iG.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: iU.G2.CATALOG,
                }));
        }, [l, t]),
        o = (0, lf.l)("game_profile_shop_carousel");
    return i
        ? (0, s.jsx)(tM, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, s.jsx)(lb, { children: iY.map((e) => (0, s.jsx)(iH, {}, e)) }),
          })
        : 0 === n.length
          ? null
          : (0, s.jsx)(tP, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: o
                    ? (0, s.jsx)(lp.A, {
                          gap: "md",
                          items: n,
                          getItemKey: iW,
                          renderItem: (e, t) => (0, s.jsx)(iB, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, s.jsx)(lj.A, { gap: "md", children: n.map((e) => (0, s.jsx)(iB, { product: e }, e.skuId)) }),
            });
}
var iX = l(921138),
    iK = l(5399);
let iJ = [],
    i$ = [];
var iq = l(987070);
let iQ = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iZ(e) {
    return e.id;
}
function i0(e) {
    let { className: t } = e;
    return (0, s.jsx)(tA, { className: t, children: (0, s.jsx)(tv, { className: iq.Lg }) });
}
function i1(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = U(),
        { shouldOpenGameProfile: a, gameId: o } = (0, iX.Ay)({
            gameId: t.id,
            source: T.GameProfileSources.SimilarGames,
        }),
        c = r.useCallback(() => {
            (i(T.GameProfileTrackActionActions.ClickSimilarGame, { similarGameId: t.id }),
                a && null != o && n(o, T.GameProfileSources.SimilarGames));
        }, [t.id, o, i, a, n]);
    return (0, s.jsx)($.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, s.jsx)(tX.D, {
            ...l,
            className: iq.Nr,
            onClick: c,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: (0, s.jsx)(le.Ay, {
                game: t,
                className: iq.xe,
                size: le.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, s.jsx)(i0, { className: iq.uz }),
            }),
        }),
    });
}
function i8() {
    let { game: e } = U(),
        { isFetching: t, similarGames: l } = (function (e) {
            let t = !l3.has(e),
                { data: l, isLoading: n, error: i } = l5(e, t),
                a = t && null != l ? l : iJ;
            (0, N.x)(a);
            let s = (0, m.bG)(
                    [e3.A],
                    () => a.some((e) => null == e3.A.getGame(e) && !e3.A.hasNoData(e) && !e3.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [e3.A, D.default],
                    () => {
                        let e = D.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => e3.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, iX.T_)(t) && !(0, O.b)(t, e) && (0, iK.zu)(t));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: i$ };
        })(e.id),
        n = (0, lf.l)("game_profile_similar_games");
    return t
        ? (0, s.jsx)(tM, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, s.jsx)("div", {
                  className: iq.XG,
                  style: iQ,
                  children: (0, s.jsx)(lb, {
                      children: eq()
                          .range(0, 8)
                          .map((e) => (0, s.jsx)(i0, { className: iq.aZ }, e)),
                  }),
              }),
          })
        : 0 === l.length
          ? null
          : (0, s.jsx)(tP, {
                title: em.intl.string(em.t["6rLyQB"]),
                children: (0, s.jsx)("div", {
                    className: iq.XG,
                    style: iQ,
                    children: n
                        ? (0, s.jsx)(lp.A, {
                              gap: "md",
                              items: l,
                              getItemKey: iZ,
                              itemClassName: iq.cW,
                              renderItem: (e, t) => (0, s.jsx)(i1, { game: e, listItemProps: t }, e.id),
                          })
                        : (0, s.jsx)(lj.A, { gap: "md", children: l.map((e) => (0, s.jsx)(i1, { game: e }, e.id)) }),
                }),
            });
}
l(667532);
var i4 = l(853022);
let i3 = new Set(["1402418703554842694", "356877880938070016"]),
    i6 = [nj.V.EPICGAMES, nj.V.STEAM, nj.V.ROBLOX, nj.V.BATTLENET, nj.V.RIOT, nj.V.MINECRAFT];
function i2(e) {
    return (0, s.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var i5 = l(349361),
    i9 = l(924895),
    i7 = l(422688),
    ae = l(505200),
    at = l(695250);
let al = function (e) {
    switch (e.category) {
        case nj.V.STEAM:
            return {
                icon: im.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: T.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case nj.V.EPICGAMES:
            return {
                icon: i5.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: T.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case nj.V.ROBLOX:
            return {
                icon: i9.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: T.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case nj.V.BATTLENET:
            return {
                icon: i7.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: T.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case nj.V.RIOT:
            return {
                icon: ae.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: T.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case nj.V.MINECRAFT:
            return {
                icon: at.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: T.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: nB.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: T.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var an = l(242216);
function ai(e) {
    let t,
        l,
        n,
        i,
        a,
        s =
            ((t = (0, iI.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eL.d3x.XBOX_GAME_PASS && !(0, th.uJ)(e.id));
                return t?.id == null ? null : (0, i4.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            r.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== nj.V.EPICGAMES || !!i3.has(n)) &&
                            (e.category !== nj.V.STEAM || a !== ih.Y.RETIRED_ABANDONED) &&
                            i6.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === ih.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === nj.V.STEAM) ||
                    e.push({ category: nj.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === nj.V.STEAM ? -1 : +(t.category === nj.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function aa(e) {
    let { data: t } = e,
        { trackAction: l } = U(),
        n = (0, nD.A)();
    return (0, s.jsx)(i2, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let as = function () {
    let { game: e, trackAction: t } = U(),
        { showsStoreLinks: n, storeWebsites: i } = ai(e),
        a = r.useMemo(() => i.map(al).filter((e) => null != e), [i]);
    if (!n) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, s.jsx)(aa, { data: e });
    }
    if (2 === a.length)
        return (0, s.jsxs)("div", {
            className: an.G,
            children: [(0, s.jsx)(aa, { data: a[0] }), (0, s.jsx)(aa, { data: a[1] })],
        });
    let o = (0, s.jsx)(i2, {
        text: em.intl.string(em.t["/hMurx"]),
        "aria-label": em.intl.string(em.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: i } = e;
                (0, g.openModalLazy)(async () => {
                    let { default: e } = await l.e("307898").then(l.bind(l, 679361));
                    return (l) => (0, s.jsx)(e, { game: t, websiteButtons: n, trackAction: i, ...l });
                });
            })({ game: e, websiteButtons: a, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, s.jsxs)("div", { className: an.G, children: [(0, s.jsx)(aa, { data: a[0] }), o] })
        : o;
};
var ar = l(123292),
    ao = l(672572),
    ac = l(94936);
function au() {
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
        o = r.useMemo(() => (a ? 8 : 5), [a]);
    if (null == i.description) return null;
    let c = t ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, s.jsxs)("div", {
        className: u()(ao.fi, ac.k),
        children: [
            (0, s.jsx)(W.E, {
                ref: e,
                className: ac.Q,
                lineClamp: t ? void 0 : o,
                variant: "text-md/medium",
                children: i.description,
            }),
            l && (0, s.jsx)(ar.Q, { onClick: n, text: c }),
        ],
    });
}
var ad = l(40478),
    am = l(764948);
let ax = r.memo(function (e) {
    let { analyticsLocations: t, selectTab: l, getScrollOffset: n } = e;
    return (0, s.jsxs)("div", {
        className: am.V,
        children: [
            (0, s.jsx)(id, {}),
            (0, s.jsxs)("div", {
                className: ad.h,
                children: [
                    (0, s.jsx)(lr, {}),
                    (0, s.jsxs)("div", { className: ad.X, children: [(0, s.jsx)(as, {}), (0, s.jsx)(au, {})] }),
                ],
            }),
            (0, s.jsx)(n4, { analyticsLocations: t }),
            (0, s.jsx)(tR, {}),
            (0, s.jsx)(nf, { getScrollOffset: n }),
            (0, s.jsx)(l_, { selectTab: l }),
            (0, s.jsx)(iz, {}),
            (0, s.jsx)(i8, {}),
            (0, s.jsx)(iR, {}),
            (0, s.jsx)(nQ, {}),
        ],
    });
});
var ag = l(164135);
let ah = r.memo(function (e) {
    let { selectTab: t, getScrollOffset: l } = e;
    return (0, s.jsxs)("div", {
        className: ag.V,
        children: [
            (0, s.jsxs)("div", { className: ag.B, children: [(0, s.jsx)(id, {}), (0, s.jsx)(au, {})] }),
            (0, s.jsx)(nf, { getScrollOffset: l }),
            (0, s.jsx)(l_, { selectTab: t }),
            (0, s.jsx)(iz, {}),
            (0, s.jsx)(i8, {}),
        ],
    });
});
var af = l(881698),
    aj = l(928550),
    ap = l(562708),
    av = l(414499),
    aA = l(359549),
    aE = l(139286),
    aI = l(873516);
function aN(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = U();
    (0, aE.A)({
        name: ap.ImpressionNames.CLOUD_PLAY_CTA,
        type: ap.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let a = r.useCallback(() => {
        (i(T.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, s.jsx)($.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, s.jsx)(K.$, {
            icon: av.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function ab(e) {
    let { cloudPlayAppId: t, analyticsLocations: l } = e,
        { game: n } = U(),
        i = (0, aA.rC)({ applicationId: t, sourceApplicationId: n.id, analyticsLocations: l });
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: aI.k,
              children: (0, s.jsx)(aN, { onCloudPlayClick: i, analyticsLocations: l }),
          });
}
var aS = l(768626);
function aC(e) {
    let { analyticsLocations: t } = e,
        { game: l } = U(),
        n = (0, af.A)(l.linkedApplications)?.id,
        [i] = (0, aj.L_)(l.getOfficialApplicationId()),
        [a] = (0, aj.L_)(l.id),
        { showsStoreLinks: r } = ai(l);
    return (0, s.jsxs)("div", {
        className: u()(aS.pz, ao.fi, r ? aS.FJ : aS.dg),
        children: [
            null == n || i || a ? null : (0, s.jsx)(ab, { cloudPlayAppId: n, analyticsLocations: t }),
            (0, s.jsxs)("div", {
                className: am.V,
                children: [
                    (0, s.jsx)(as, {}),
                    (0, s.jsx)(n4, { analyticsLocations: t }),
                    (0, s.jsx)(tR, {}),
                    (0, s.jsx)(iR, {}),
                    (0, s.jsx)(nQ, {}),
                ],
            }),
        ],
    });
}
var aT = l(105865);
function ay(e) {
    let { isTwoColumn: t, selectTab: l, selectionVersion: n, initialScrollOffset: i, analyticsLocations: a } = e,
        o = r.useRef(null),
        c = r.useRef(null),
        u = r.useRef(n);
    (r.useLayoutEffect(() => {
        0 === n && null != i && i > 0 && c.current?.getScrollerNode()?.scrollTo({ top: i, behavior: "instant" });
    }, [i, n]),
        r.useLayoutEffect(() => {
            n !== u.current &&
                (c.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (u.current = n));
        }, [n]));
    let d = r.useCallback(() => c.current?.getScrollerNode()?.scrollTop ?? 0, []),
        m = r.useCallback((e) => {
            if (null != o.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                o.current.style.opacity = String(t);
            }
        }, []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(li, { ref: o }),
            (0, s.jsxs)(eQ.Ch, {
                ref: c,
                className: aT.XG,
                onScroll: m,
                children: [
                    (0, s.jsx)("div", { className: aT.xY, "aria-hidden": !0 }),
                    (0, s.jsx)(lu, {}),
                    (0, s.jsx)(t3.F, {
                        children: t
                            ? (0, s.jsxs)("div", {
                                  className: aT.jC,
                                  children: [
                                      (0, s.jsx)(ah, { selectTab: l, getScrollOffset: d }),
                                      (0, s.jsx)(aC, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, s.jsx)("div", {
                                  className: aT.b9,
                                  children: (0, s.jsx)(ax, { analyticsLocations: a, selectTab: l, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var aL = l(360661),
    ak = l(787188);
function aR(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, s.jsx)(aL.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: lx.Ye.GAME_PROFILE_GAME_SHOP,
        className: ak.kL,
        scrollerClassName: ak.XG,
        promotionBannerClassName: ak.Rv,
    });
}
var aG = l(733391),
    aO = l(171616);
function aM(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: i,
            onClose: a,
            initialScrollOffset: o,
            initialTab: c,
            navigateToGame: U,
        } = e,
        [F, Y] = r.useState(!0),
        [W, B] = r.useState(null),
        { clientThemesClassName: H } = (0, A.Ay)(),
        z = (0, m.bG)([C.default], () => C.default.locale),
        X = r.useMemo(() => (0, T.generateViewId)(), []),
        { analyticsLocations: K } = (0, j.Ay)(f.A.GAME_PROFILE),
        J = (0, k.s)(t),
        { data: $ } = (0, N.I)(t),
        q = $?.getOfficialApplicationId(),
        Q = (0, R.rG)($),
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
            connectionApp: eo,
        } = (0, p.RD)($),
        { invite: ec, isMember: ed, isResolving: em } = (0, R.Ay)($, B),
        { socialLayerStorefrontRecommendationsData: ex, socialLayerStorefrontRecommendationsLoading: eg } = (function (
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
                o = r.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: c, status: u } = (0, w.XQ)({
                    applicationIds: o,
                    userIds: l,
                    numItems: 6,
                    source: _.B.USER_PROFILE,
                }),
                d = r.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== u || 0 === c.length
                            ? null
                            : { application: a, skuIds: c.map((e) => e.id), guildId: a.guildId },
                    [a, u, c],
                ),
                x = "loading" === u,
                g = "success" === u && c.length > 0 && null == a && !s;
            return {
                socialLayerStorefrontRecommendationsData: d,
                socialLayerStorefrontRecommendationsLoading: i && null != n && (x || g),
            };
        })(t),
        eh = r.useCallback(
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
    ((0, h.Ay)(() => {
        ((0, T.trackGameProfileOpen)({
            source: l,
            viewId: X,
            gameId: t,
            gameName: et,
            authorId: n,
            profileType: T.GameProfileTypes.FullProfile,
        }),
            (0, E.He)());
    }),
        (0, h.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, T.getGuildIdAndVerifiedFromInvite)(en.current),
                n = Date.now(),
                i = J.map((e) => {
                    let t = (0, I.JM)(e) ? (0, I.W6)(e, n) : (0, I.aJ)(e, z);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, T.trackGameProfileClose)({
                viewId: X,
                gameId: t,
                gameName: et,
                playedFriendIds: J.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: L.A.getSimilarGames(t) ?? [],
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
                e ? ((0, g.closeAllModals)(), (0, S.M)()) : a();
            },
            [a],
        ),
        ev = r.useCallback(() => ep(!1), [ep]),
        { navigation: eA, selectionVersion: eE } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.OVERVIEW,
                [l, n] = r.useState(t),
                [i, a] = r.useState(0),
                s = r.useCallback((e) => {
                    (n(e), a((e) => e + 1));
                }, []),
                o = r.useCallback(
                    (t) => {
                        if (t !== l) {
                            let l = G[t];
                            null != l && e(l);
                        }
                        s(t);
                    },
                    [l, s, e],
                );
            return { navigation: r.useMemo(() => ({ selectedTab: l, selectTab: o }), [l, o]), selectionVersion: i };
        })(eh, c),
        { selectedTab: eI } = eA,
        eN = (function (e) {
            let { game: t, navigation: l } = e,
                { selectedTab: n, selectTab: i } = l,
                a = t?.id,
                s = t?.getOfficialApplicationId(),
                o = eu({ location: "GameProfileModal" });
            r.useEffect(() => {
                o && (0, aG.Xw)();
            }, [o]);
            let c = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != s && P.A.hasStorefrontForApplicationId(s) ? s : null),
                    [a, s],
                ),
                u = o && null != c,
                { storefront: d } = (0, aO.A)({ applicationId: u ? c : null }),
                [x, g] = r.useState({ storefrontId: d?.id, index: 0 }),
                [h, f] = r.useState(n);
            n !== h && (f(n), n !== y.COMMERCE && g({ storefrontId: d?.id, index: 0 }));
            let j = x.storefrontId === d?.id && x.index < (d?.pages.length ?? 0) ? x.index : 0,
                p = r.useCallback(
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
                selectedStorefrontPageIndex: j,
                selectStorefrontPage: p,
            };
        })({ game: $, navigation: eA }),
        { hasCommerceTab: eb, storefrontApplicationId: eS, storefront: eC, selectedStorefrontPageIndex: eT } = eN,
        ey = Object.values(eC?.promotions ?? {})[0] ?? null,
        eL = r.useMemo(() => {
            if (null != $)
                return {
                    game: $,
                    isTwoColumn: F,
                    canStartAuthorization: ea,
                    hasAlreadyLinked: ei,
                    fetchedAuthorization: es,
                    startAuthorization: er,
                    connectionApp: eo,
                    invite: ec,
                    hasDiscordWebsite: Q,
                    hasOfficialApplication: Z,
                    officialApplicationFetchFailed: ee,
                    isCommunityInviteResolving: em,
                    isMember: ed,
                    socialLayerStorefrontRecommendationsData: ex,
                    socialLayerStorefrontRecommendationsLoading: eg,
                    hasCommerceTab: eb,
                    storefrontPromotion: ey,
                    closeModal: ep,
                    navigateToGame: U,
                    trackAction: eh,
                    viewId: X,
                };
        }, [$, F, ea, ei, es, er, eo, ec, Q, Z, ee, em, ed, ex, eg, eb, ey, ep, U, eh, X]);
    return null == $
        ? null
        : (0, s.jsx)(j.f5, {
              value: K,
              children: (0, s.jsx)(x.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, s.jsx)(V.Provider, {
                      value: eL,
                      children: (0, s.jsx)("div", {
                          className: u()(H, ao.kL),
                          ref: ej,
                          children: (0, s.jsxs)(b.A, {
                              obscured: el,
                              onClose: ev,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: u()(ao.sx, { [ao.Tk]: eI !== y.COMMERCE }),
                                      children: (0, s.jsx)(eJ, { navigation: eA, socialLayerStorefront: eN }),
                                  }),
                                  eI === y.OVERVIEW &&
                                      (0, s.jsx)(ay, {
                                          selectTab: eA.selectTab,
                                          selectionVersion: eE,
                                          initialScrollOffset: o,
                                          isTwoColumn: F,
                                          analyticsLocations: K,
                                      }),
                                  eI === y.COMMUNITIES && (0, s.jsx)(t4, {}),
                                  eI === y.COMMERCE && (0, s.jsx)(aR, { applicationId: eS, selectedPageIndex: eT }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let aP = function (e) {
    let { gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, initialTab: a, ...o } = e,
        [c, u] = r.useState({ gameId: t, source: l, sourceUserId: n, initialScrollOffset: i, initialTab: a }),
        d = c.gameId,
        m = r.useCallback(
            (e, t) => {
                e !== d && ((0, R.UT)(e), u({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, s.jsx)(
        aM,
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
