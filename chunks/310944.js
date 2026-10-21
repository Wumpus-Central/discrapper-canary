l.d(t, { default: () => a_ });
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
    eY = l(225647),
    eW = l(421108);
let eB = "text-md/medium",
    eH = [];
function ez(e) {
    let { label: t, chevron: l, socialLayerStorefront: n } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: l } = e,
                n = Object.values(l?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: l } = e;
                    return "nitro" === t && (null == l || null != (0, eW.ZH)(l));
                }),
                i = (0, eW.tm)(n?.endsAt);
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
function eX(e) {
    let { className: t, label: l, navigation: n, socialLayerStorefront: i } = e,
        { selectedTab: a, selectTab: o } = n,
        { storefront: c, selectedStorefrontPageIndex: u, selectStorefrontPage: d } = i,
        m = c?.pages ?? eH,
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
                                    null != (n = (0, eY.A)(l?.trim())) && n.length > 0
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
                    variant: eB,
                    color: "none",
                    children: (0, s.jsx)(ez, {
                        label: l,
                        chevron: (0, s.jsx)(c, { size: "xs", color: "currentColor" }),
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
        { hasCommerceTab: r, storefront: o } = n;
    if (!r) return null;
    let c = em.intl.string(em.t.apFNLU);
    return (o?.pages.length ?? 0) > 1
        ? (0, s.jsx)(eX, { className: t, label: c, navigation: l, socialLayerStorefront: n })
        : (0, s.jsx)(Y.V.Item, {
              id: y.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(y.COMMERCE),
              className: t,
              "aria-label": c,
              children: (0, s.jsx)(W.E, {
                  variant: eB,
                  color: "none",
                  children: (0, s.jsx)(ez, { label: c, socialLayerStorefront: n }),
              }),
          });
}
var eJ = l(510954);
function e$(e) {
    let { navigation: t, socialLayerStorefront: l } = e,
        { game: n } = U(),
        { selectedTab: i, selectTab: a } = t,
        o = n.getIconURL(64),
        [c, u] = r.useState(null),
        d = r.useCallback(() => u(o), [o]),
        m = em.intl.string(em.t.qHmbyh);
    return (0, s.jsx)("div", {
        className: eJ.wx,
        children: (0, s.jsxs)("div", {
            className: eJ.ap,
            children: [
                (0, s.jsx)("div", {
                    className: eJ.wE,
                    children:
                        null != o && o !== c
                            ? (0, s.jsx)("img", { src: o, alt: "", className: eJ.FC, draggable: !1, onError: d })
                            : (0, s.jsx)(F._, { size: "md" }),
                }),
                (0, s.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: eJ.vR,
                    children: [
                        (0, s.jsx)(Y.V.Item, {
                            id: y.OVERVIEW,
                            disableItemStyles: !0,
                            className: eJ.Mf,
                            "aria-label": m,
                            children: (0, s.jsx)(W.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, s.jsx)(eM, { className: eJ.Mf, navigation: t }),
                        (0, s.jsx)(eK, { className: eJ.Mf, navigation: t, socialLayerStorefront: l }),
                    ],
                }),
                (0, s.jsx)(ek, { className: eJ.HK, activeTab: i }),
            ],
        }),
    });
}
var eq = l(435558),
    eQ = l.n(eq),
    eZ = l(689175),
    e0 = l(448741),
    e1 = l(71393),
    e8 = l(309010),
    e4 = l(449054),
    e3 = l(60465),
    e6 = l(311043),
    e2 = l(636537),
    e5 = l(73153);
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
        return e.map((e) => e9[e]?.guild).filter(eT.Vq);
    }
    isFetching(e) {
        return e.some((e) => e9[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let l = e9[e];
            return (
                null == l ||
                "failed" === l.fetchState ||
                ("fetching" !== l.fetchState && (null == l.fetchedAt || t - l.fetchedAt >= 36e5))
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
            let { guildIds: t, guilds: l } = e,
                n = Date.now(),
                i = new Map(l.map((e) => [e.id, (0, e4.jE)(e)]));
            for (let e of t) e9[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: n };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e9[e] = { guild: e9[e]?.guild ?? null, fetchState: "failed", fetchedAt: e9[e]?.fetchedAt ?? null };
        },
    }),
    tt = new Map();
async function tl(e) {
    e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
    try {
        let t = await e2.Bo.get({
                url: eL.Rsh.GUILD_DISCOVERY,
                query: { guild_ids: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            l = t.body?.guilds ?? [];
        e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: l });
    } catch (t) {
        throw (e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
    }
}
async function tn(e) {
    let t = te.getStaleGuildIds(e),
        l = new Set();
    for (let t of e) {
        let e = tt.get(t);
        null != e && l.add(e);
    }
    if (t.length > 0) {
        let e = tl(t).finally(() => {
            for (let l of t) tt.get(l) === e && tt.delete(l);
        });
        for (let l of t) tt.set(l, e);
        l.add(e);
    }
    await Promise.all(l);
}
var ti = l(927813);
let ta = [];
function ts(e) {
    return e6.A.getGame(e)?.communityGuildIds ?? ta;
}
let tr = (0, m.UT)(te, {
    getQueryId: (e) => (ts(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => te.getGuilds(ts(e)),
    load: async (e) => {
        let t = ts(e);
        t.length > 0 && (await tn(t));
    },
    staleAfter: ti.A.Seconds.HOUR,
    failureStaleAfter: ti.A.Seconds.MINUTE,
});
var to = l(196765);
let tc = new Set(),
    tu = (0, to.v)((e) => ({
        gameId: null,
        excludedLocales: tc,
        toggleLocale: (t, l) => {
            e((e) => {
                let n = new Set(e.gameId === t ? e.excludedLocales : tc);
                return (n.has(l) ? n.delete(l) : n.add(l), { gameId: t, excludedLocales: n });
            });
        },
    }));
function td(e) {
    return tu((t) => (t.gameId === e ? t.excludedLocales : tc));
}
var tm = l(297264),
    tx = l(37537),
    tg = l(714991),
    th = l(486020),
    tf = l(240248);
function tj(e) {
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
var tp = l(810729);
let tv = { sm: tp.nz, md: tp.a };
function tA(e) {
    let { className: t, width: l } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: u()(tp.qf, t), style: { width: l } });
}
function tE(e) {
    let { animationDelayMs: t, children: l, className: n } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: n, style: i, children: l });
}
function tI(e) {
    let { className: t, size: l = "md" } = e;
    return (0, s.jsx)(tA, { className: u()(tp.x6, tv[l], t) });
}
var tN = l(827085);
function tb(e) {
    let { className: t } = e;
    return (0, s.jsx)(tA, { className: u()(tN.qV, t) });
}
function tS(e) {
    let { presenceCount: t, memberCount: l } = e;
    return null == t && null == l
        ? null
        : (0, s.jsxs)("div", {
              className: tN.kL,
              children: [
                  null != t &&
                      (0, s.jsxs)("div", {
                          className: tN.U9,
                          children: [
                              (0, s.jsx)("i", { className: tN._o }),
                              (0, s.jsx)(W.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != l &&
                      (0, s.jsxs)("div", {
                          className: tN.U9,
                          children: [
                              (0, s.jsx)("i", { className: tN.jk }),
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
var tC = l(213098);
function tT() {
    return (0, s.jsxs)(tE, {
        className: tC.uW,
        animationDelayMs: 300,
        children: [
            (0, s.jsx)(tA, { className: tC.dU, width: "30%" }),
            (0, s.jsx)(tE, {
                className: tC.nV,
                children: (0, s.jsxs)("div", { className: tC.hQ, children: [(0, s.jsx)(ty, {}), (0, s.jsx)(tI, {})] }),
            }),
        ],
    });
}
function ty() {
    return (0, s.jsxs)("div", {
        className: tC.To,
        children: [
            (0, s.jsx)(tA, { className: tC.QV }),
            (0, s.jsxs)("div", {
                className: tC.Yv,
                children: [
                    (0, s.jsx)(tA, { className: tC.Ag }),
                    (0, s.jsx)(tA, { className: tC.zl }),
                    (0, s.jsx)(tb, { className: tC.P2 }),
                ],
            }),
        ],
    });
}
function tL(e) {
    let { guild: t } = e,
        l = th.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [n, i] = r.useState(void 0),
        a = null != l && n !== l,
        o = r.useCallback(() => {
            i(l);
        }, [l]);
    return (0, s.jsxs)("div", {
        className: tC._C,
        children: [
            a && (0, s.jsx)(tA, { className: tC.EQ }),
            (0, s.jsx)("img", {
                className: tC.$f,
                src: l,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: o,
                onError: o,
            }),
        ],
    });
}
function tk(e) {
    let { guild: t, presenceCount: l, memberCount: n } = e;
    return (0, s.jsxs)("div", {
        className: tC.To,
        children: [
            (0, s.jsx)(tL, { guild: t }),
            (0, s.jsxs)("div", {
                className: tC.yj,
                children: [
                    (0, s.jsxs)("div", {
                        className: tC.YS,
                        children: [
                            (0, s.jsx)(tg.A, { guild: t, size: 16 }),
                            (0, s.jsx)(tm.D, {
                                className: tC.J5,
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, tf.uJ)(t.description) &&
                        (0, s.jsx)(W.E, {
                            className: tC.h_,
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, s.jsx)(tS, { presenceCount: l, memberCount: n }),
                ],
            }),
        ],
    });
}
function tR(e) {
    let { guild: t, presenceCount: l, memberCount: n, button: i, className: a } = e;
    return (0, s.jsx)("div", {
        className: u()(tC.kL, a),
        children: (0, s.jsxs)("div", {
            className: tC.hQ,
            children: [(0, s.jsx)(tk, { guild: t, presenceCount: l, memberCount: n }), i],
        }),
    });
}
function tG() {
    let e = (0, tx.c)("GameProfileGuildInvite"),
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
                e5.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: t.code, context: eL.BRT.APP }));
        }, [t, o, a]);
    return null == t || null == t.guild
        ? l && n
            ? (0, s.jsx)(tT, {})
            : null
        : (0, s.jsxs)("div", {
              className: tC.uW,
              children: [
                  (0, s.jsx)(tm.D, {
                      className: tC.Gf,
                      variant: e ? "text-md/medium" : "heading-sm/semibold",
                      color: e ? "text-subtle" : "text-strong",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, s.jsx)(tR, {
                      guild: t.guild,
                      presenceCount: t.approximate_presence_count,
                      memberCount: t.approximate_member_count,
                      button: (0, s.jsx)(tj, { guildName: t.guild.name, isMember: i, onClick: c, fullWidth: !0 }),
                  }),
              ],
          });
}
var tO = l(320448),
    tM = l(152594);
function tP(e) {
    let { children: t, skeletonTitleWidth: l, showViewAllSkeleton: n } = e;
    return (0, s.jsxs)("div", {
        className: tM.kL,
        "aria-busy": !0,
        children: [
            (0, s.jsxs)("div", {
                className: tM.wR,
                children: [(0, s.jsx)(tA, { className: tM.Iz, width: l }), n && (0, s.jsx)(tI, { size: "sm" })],
            }),
            t,
        ],
    });
}
function t_(e) {
    let { children: t, title: l, onClickViewAll: n, trailing: i } = e;
    return (0, s.jsxs)("div", {
        className: tM.kL,
        children: [
            (0, s.jsxs)("div", {
                className: tM.wR,
                children: [
                    (0, s.jsx)(tm.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, s.jsx)(K.$, {
                            size: "sm",
                            icon: tO._,
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
var tw = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tD = (0, to.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tV = l(876798),
    tU = l(481901),
    tF = l(916099),
    tY = l(461353);
function tW() {
    let { layout: e, setLayout: t } = tD(),
        l = em.intl.string(em.t.VGRZh7),
        n = em.intl.string(em.t["NJFr+g"]);
    return (0, s.jsxs)("div", {
        className: tY.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, s.jsx)($.m, {
                text: l,
                asContainer: !0,
                children: (0, s.jsx)(tV.k, {
                    icon: tU.d,
                    pressed: e === tw.GRID,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tw.GRID),
                }),
            }),
            (0, s.jsx)($.m, {
                text: n,
                asContainer: !0,
                children: (0, s.jsx)(tV.k, {
                    icon: tF.ListBulletsIcon,
                    pressed: e === tw.LIST,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tw.LIST),
                }),
            }),
        ],
    });
}
var tB = l(37646),
    tH = l(846183);
function tz(e) {
    var t;
    let l,
        n,
        i,
        { locales: a, onClose: o } = e,
        { game: c } = U(),
        { options: u, toggleLocale: d } =
            ((t = c.id),
            (l = td(t)),
            (n = tu((e) => e.toggleLocale)),
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
function tX(e) {
    let { locales: t } = e,
        l = r.useRef(null),
        n = em.intl.string(em.t.OlOHDH);
    return (0, s.jsx)("div", {
        className: tH.k,
        children: (0, s.jsx)(H.Y, {
            targetElementRef: l,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, s.jsx)(tz, { locales: t, onClose: l });
            },
            children: (e) =>
                (0, s.jsx)($.m, {
                    text: n,
                    asContainer: !0,
                    children: (0, s.jsx)(q.K, {
                        buttonRef: l,
                        icon: tB.U,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": n,
                        ...e,
                    }),
                }),
        }),
    });
}
var tK = l(939249),
    tJ = l(762841);
function t$(e) {
    let { className: t, ariaLabel: l, onClick: n, children: i } = e;
    return (0, s.jsx)(tK.D, { className: u()(tJ.v, t), onClick: n, "aria-label": l, children: i });
}
var tq = l(759020);
function tQ(e) {
    let { guild: t, presenceCount: l, memberCount: n, ariaLabel: i, onClick: a } = e;
    return (0, s.jsxs)(t$, {
        className: tq.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, s.jsxs)("div", {
                className: tq.OA,
                children: [
                    (0, s.jsx)(tL, { guild: t }),
                    (0, s.jsxs)("div", {
                        className: tq.FS,
                        children: [
                            (0, s.jsxs)("div", {
                                className: tq.YS,
                                children: [
                                    (0, s.jsx)(tg.A, { guild: t, size: 16 }),
                                    (0, s.jsx)(tm.D, {
                                        className: tq.J5,
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, tf.uJ)(t.description) &&
                                (0, s.jsx)(W.E, {
                                    className: tq.h_,
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: tq.Rn, children: (0, s.jsx)(tS, { presenceCount: l, memberCount: n }) }),
        ],
    });
}
var tZ = l(620387);
function t0(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsx)(tE, { className: tZ.s7, animationDelayMs: t, children: (0, s.jsx)(ty, {}) });
}
function t1(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(tE, {
        className: tZ.fv,
        animationDelayMs: t,
        children: [
            (0, s.jsx)(tA, { className: tZ.VR }),
            (0, s.jsxs)("div", {
                className: tZ.hG,
                children: [
                    (0, s.jsx)(tA, { className: tZ.t_ }),
                    (0, s.jsx)(tA, { className: tZ.Aj }),
                    (0, s.jsx)(tA, { className: tZ.ax }),
                ],
            }),
            (0, s.jsx)(tA, { className: tZ.Ah }),
        ],
    });
}
function t8(e) {
    let { guild: t, presenceCount: l, memberCount: n, ariaLabel: i, onClick: a } = e;
    return (0, s.jsx)(t$, {
        className: tZ.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, s.jsx)(tk, { guild: t, presenceCount: l, memberCount: n }),
    });
}
function t4(e) {
    let { guild: t, layout: l } = e,
        { game: n, closeModal: i, trackAction: a, viewId: o } = U(),
        c = (0, m.bG)([e1.A], () => e1.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = r.useCallback(async () => {
            (a(T.GameProfileTrackActionActions.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await e4.Z2(t.id, {}, { joinSource: eL.Q4z.GAME_PROFILE_COMMUNITIES, loadId: o }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, e0._)(e);
                return;
            }
            let e = e8.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                e3.default.setGameProfilePendingReturn({
                    gameId: n.id,
                    channelId: e,
                    tab: y.COMMUNITIES,
                    source: T.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, o, n.id]),
        d = l === tw.LIST ? tQ : t8;
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
function t3() {
    var e;
    let t,
        l,
        { game: n } = U(),
        { data: i, isLoading: a } = tr(n.id),
        o = tD((e) => e.layout),
        {
            locales: c,
            filteredGuilds: u,
            showLocaleFilter: d,
        } = ((e = n.id),
        (t = td(e)),
        {
            locales: (l = r.useMemo(() => eQ().uniq((i ?? []).map((e) => e.preferredLocale).filter(eT.Vq)), [i])),
            filteredGuilds: r.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: l.length >= 2,
        }),
        m = o === tw.LIST,
        x = m ? t1 : t0,
        g = a && (null == i || 0 === i.length);
    return (0, s.jsxs)(eZ.Ch, {
        className: tZ.XG,
        children: [
            (0, s.jsx)("div", { className: tZ.xY, "aria-hidden": !0 }),
            (0, s.jsx)("div", {
                className: tZ.uW,
                children: (0, s.jsx)(t_, {
                    title: em.intl.string(em.t.r6bvTh),
                    trailing: (0, s.jsxs)("div", {
                        className: tZ.AA,
                        children: [d && (0, s.jsx)(tX, { locales: c }), (0, s.jsx)(tW, {})],
                    }),
                    children: (0, s.jsx)("div", {
                        className: m ? tZ.p_ : tZ.Vg,
                        children: g
                            ? eQ()
                                  .range(8)
                                  .map((e) => (0, s.jsx)(x, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, s.jsx)(t4, { guild: e, layout: o }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var t6 = l(707554),
    t2 = l(369606),
    t5 = l(775602),
    t9 = l(21161),
    t7 = l(400492),
    le = l(541830),
    lt = l(459746);
let ll = "1552821538409939044";
var ln = l(175213);
let li = l(892799);
function la(e) {
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
    return (0, tf.uJ)(n)
        ? null
        : (0, s.jsxs)("div", {
              ref: t,
              children: [
                  (0, s.jsx)("div", { className: ln.y1, style: { backgroundImage: `url("${n}")` } }),
                  (0, s.jsx)("div", { className: ln.N4 }),
              ],
          });
}
function ls() {
    let { game: e } = U(),
        t = (e.genres ?? []).map(le.du).join(", ");
    return (0, tf.uJ)(t) ? null : (0, s.jsx)(W.E, { variant: "text-md/normal", color: "text-muted", children: t });
}
function lr(e) {
    let { rank: t } = e;
    return (0, s.jsxs)("div", {
        className: ln.Qc,
        children: [
            (0, s.jsx)(t2.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, s.jsx)(W.E, {
                variant: "text-xs/bold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function lo() {
    let { game: e } = U();
    return (0, s.jsx)(lc, { className: u()(ln._M, (0, lt.cO)(e) && ln.i3), imageClassName: ln.xe });
}
function lc(e) {
    let { className: t, imageClassName: l } = e,
        { game: n } = U(),
        i = (0, s.jsx)(lt.Ay, { game: n, className: l, size: lt.wu.LARGE });
    return n.id !== ll
        ? (0, s.jsx)("div", { className: t, children: i })
        : (0, s.jsx)(lu, { className: t, children: i });
}
function lu(e) {
    let { children: t, className: l } = e,
        { createMultipleConfettiAt: n } = r.useContext(t9.x),
        i = (0, m.bG)([t5.Ay], () => t5.Ay.useReducedMotion),
        a = r.useRef({ count: 0, lastTime: 0 });
    return (0, s.jsx)(tK.D, {
        className: u()(l, ln.b3),
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
                (0, t7.Ak)("discodo");
            }
        },
        children: t,
    });
}
let ld = function () {
    let { game: e, isTwoColumn: t } = U(),
        l = e.name;
    return (0, s.jsxs)("div", {
        className: ln.ap,
        children: [
            t && (0, s.jsx)(lc, { className: u()(ln.Tf, (0, lt.cO)(e) && ln.wS), imageClassName: ln.w$ }),
            (0, s.jsxs)("div", {
                className: ln.lu,
                children: [
                    null != e.l30Rank && (0, s.jsx)(lr, { rank: e.l30Rank }),
                    (0, s.jsxs)("div", {
                        className: ln.$,
                        children: [
                            (0, s.jsx)(tm.D, { variant: "heading-xxl/semibold", children: l }),
                            e.id === ll &&
                                (0, s.jsx)("img", {
                                    src: li,
                                    className: ln.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, s.jsx)(ls, {}),
                ],
            }),
        ],
    });
};
var lm = l(638495),
    lx = l(871123),
    lg = l(439303),
    lh = l(317560),
    lf = l(467884),
    lj = l(480713),
    lp = l(449543),
    lv = l(197935),
    lA = l(761812);
function lE(e) {
    return e;
}
function lI(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: lA.B, children: t });
}
function lN(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        i = (0, lj.l)("social_layer_storefront_card_row"),
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
          ? (0, s.jsx)(lv.A, {
                gap: "md",
                "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
                items: t,
                getItemKey: lE,
                disableFocusRingScope: !0,
                renderItem: (e, t, n) =>
                    (0, s.jsx)(lI, {
                        children: (0, s.jsx)(lf.Ay, {
                            positionInSection: n,
                            skuId: e,
                            variant: lf.s6.SMALL,
                            analyticsLocations: l,
                            onClick: a,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, s.jsx)(lp.A, {
                gap: "md",
                "aria-label": em.intl.string(em.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, s.jsx)(
                        lI,
                        {
                            children: (0, s.jsx)(lf.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: lf.s6.SMALL,
                                analyticsLocations: l,
                                onClick: a,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var lb = l(369435);
function lS(e) {
    let { children: t, gap: l = "md" } = e;
    return (0, s.jsx)("div", { "aria-hidden": !0, className: u()(lb.n, { [lb.C]: 16 === l }), children: t });
}
var lC = l(936785),
    lT = l(403581),
    ly = l(812095),
    lL = l(647474),
    lk = l(162536);
function lR(e) {
    let { promotion: t, className: l } = e,
        n = t.endsAt;
    if ((0, eW.tm)(n)) return null;
    let i = "nitro" === t.flavor,
        a = i ? lT.t : t.Icon;
    return (0, s.jsx)(lL.A, {
        className: u()(lk.vK, l),
        color: i ? "nitro-pink" : void 0,
        children: (0, s.jsxs)("div", {
            className: lk.Qs,
            children: [
                null != a && (0, s.jsx)(a, { size: "xs", color: "currentColor", className: lk.Kk }),
                (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "currentColor", children: (0, ly.U)(t.text) }),
            ],
        }),
    });
}
var lG = l(521058);
function lO() {
    let { storefrontPromotion: e } = U();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: l, pdp: n, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, tf.uJ)(a.headerText)) return null;
    let r = {
        Icon: (0, lC.LZ)(n?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, lC.RD)(t),
        flavor: l,
        rewardRequirements: i,
    };
    return (0, s.jsx)(lR, { className: lG.v, promotion: r });
}
let lM = [0, 1, 2, 3],
    lP = { placement: lg.Ye.GAME_PROFILE };
function l_() {
    return (0, s.jsx)(tP, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, s.jsx)(lS, { children: lM.map((e) => (0, s.jsx)(lI, { children: (0, s.jsx)(lf.yf, {}) }, e)) }),
    });
}
function lw(e) {
    let { selectTab: t } = e,
        l = (0, lm.k)(),
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
                    (0, lh.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: l,
                        onClose: () => {
                            let { pathname: e, search: l } = location;
                            (0, lx.rG)(e, l, t, a) && c();
                        },
                    }));
            },
            [n, c, u, i, l],
        );
    if (a) return (0, s.jsx)(l_, {});
    if (null == i) return null;
    let { skuIds: x } = i;
    return (0, s.jsxs)(t_, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, s.jsx)(lO, {}),
            (0, s.jsx)(lg.E9, {
                newValue: lP,
                children: (0, s.jsx)(lN, { skuIds: x, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var lD = l(621466),
    lV = l(966697),
    lU = l(346055),
    lF = l(460905),
    lY = l(776231),
    lW = l(46054),
    lB = l(58703),
    lH = l(317097),
    lz = l(155718),
    lX = l(387408),
    lK = l(731068),
    lJ = l(59318),
    l$ = l(320095),
    lq = l(708676),
    lQ = l(383233),
    lZ = l(998218);
let l0 = /^#{1,3}\s+(.+)$/,
    l1 = /^https?:\/\/\S+$/;
var l8 = l(158390),
    l4 = l(103348),
    l3 = l(371794);
let l6 = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function l2(e) {
    e5.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, l3.aP)({
                    url: eL.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: C.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(l4.A.fromServer),
            l = t.flatMap((e) => e.skuIds);
        (e5.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: l, products: t }),
            e5.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: l }));
    } catch (t) {
        e5.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function l5(e) {
    let t = ((await e2.Bo.get({ url: eL.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !l6.has(t),
    );
    e5.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let l9 = (0, m.UT)(L.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => L.A.getSimilarGames(e) ?? null,
    load: (e) => l5(e),
    retryConfig: { backoff: () => new l8.A(5 * ti.A.Millis.SECOND, 5 * ti.A.Millis.MINUTE) },
    failureStaleAfter: ti.A.Seconds.MINUTE,
});
async function l7(e, t) {
    e5.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await e2.Bo.get({ url: eL.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        e5.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, lX.A)((0, l$.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, lQ._c)(e))
                            return e.components
                                .filter((e) => e.type === lz.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || l1.test(t.trim())
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
                        if ((0, lQ._c)(e)) {
                            let t = e.components.find((e) => e.type === lz.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, lK.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, lJ.tT)(e.content_type));
                        if (null != t) return (0, lK.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, lJ.XB)(e.content_type));
                        if (null != l) return (0, lK.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, lK.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, lK.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, lK.oU)(
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
                        (l = (-1 === t ? a : a.slice(0, t)).match(l0)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    c = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, lQ._c)(n)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let l = t.author?.name,
                                      n = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = null != t.color ? (0, lH.$k)(t.color, !0) : void 0;
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
        e5.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var ne = l(284009),
    nt = l.n(ne),
    nl = l(376728),
    nn = l(976860);
async function ni(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    nt()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let o = e1.A.getGuild(l);
    if (o?.joinedAt == null)
        if (null == r || r.has(eL.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e4.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: eL.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await nl.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, nn.pX)(eL.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var na = l(806244),
    ns = l(165648);
function nr(e, t) {
    return lW.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function no(e) {
    return e.id;
}
function nc() {
    return (0, s.jsxs)(tE, {
        className: na.s7,
        children: [
            (0, s.jsx)(tA, { className: na.o$ }),
            (0, s.jsxs)("div", {
                className: na.UF,
                children: [(0, s.jsx)(tA, { className: na.iX }), (0, s.jsx)(tA, { className: na.jt })],
            }),
        ],
    });
}
function nu(e, t) {
    var l;
    let n,
        i = (0, lY.kr)(364 * (0, lY.mZ)());
    return (
        (l = Math.round(i / t)),
        (null == (n = lZ.A.toURLSafe(e))
            ? null
            : (n.searchParams.append("format", "webp"),
              null != i && n.searchParams.append("width", i.toString()),
              null != l && n.searchParams.append("height", l.toString()),
              n.toString())) ?? e
    );
}
function nd(e) {
    let { message: t, src: l, aspectRatio: n } = e,
        [i, a] = r.useState(!1),
        o = r.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, s.jsx)(lV.y, {
              readyState: i ? eL.Rv1.READY : eL.Rv1.LOADING,
              aspectRatio: n,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, s.jsx)("img", {
                  src: l,
                  className: na.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: o,
              }),
          });
}
function nm(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lD.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lD.vq)(e.target, HTMLSpanElement) && (0, lD.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        d = null != c ? nu(c, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, s.jsx)(tK.D, {
              ...i,
              className: na.Nr,
              onClick: a,
              children: (0, s.jsxs)(lU.M, {
                  className: na.zI,
                  children: [
                      null != m.url &&
                          (0, s.jsx)(W.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: na.Ow,
                              children: m.url,
                          }),
                      (0, s.jsxs)("div", {
                          className: na._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, s.jsxs)("div", {
                                      className: na.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, s.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: na.SG,
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
                                      className: na.ax,
                                      children: (0, s.jsx)(nd, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, s.jsx)(tm.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: na.DD,
                                      children: nr(t.title, l),
                                  }),
                              t.body.length > 0 &&
                                  (0, s.jsxs)("div", {
                                      className: u()(na.h_, ns.PT),
                                      children: [nr(t.body, l), (0, s.jsx)("div", { className: na.fm })],
                                  }),
                              (0, s.jsxs)("div", {
                                  className: na.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, s.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: na.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, s.jsxs)(W.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, lB.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, s.jsxs)("div", {
                                              className: na.a5,
                                              children: [
                                                  (0, s.jsx)(lF.n, { size: "xs", color: "currentColor" }),
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
let nx = r.memo(function (e) {
    let { message: t, channelId: l } = e;
    return (0, s.jsxs)(lU.M, {
        className: na.zI,
        children: [
            null != t.title &&
                (0, s.jsx)(tm.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: na.DD,
                    children: nr(t.title, l),
                }),
            t.body.length > 0 &&
                (0, s.jsxs)("div", {
                    className: u()(na.h_, ns.PT),
                    children: [nr(t.body, l), (0, s.jsx)("div", { className: na.fm })],
                }),
            (0, s.jsxs)("div", {
                className: na.ov,
                children: [
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, lB.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, s.jsxs)("div", {
                            className: na.a5,
                            children: [
                                (0, s.jsx)(lF.n, { size: "xs", color: "currentColor" }),
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
function ng(e) {
    let { message: t, channelId: l, onCardClick: n, listItemProps: i } = e,
        a = r.useCallback(
            (e) => {
                if (
                    !(
                        (0, lD.vq)(e.target, HTMLAnchorElement) ||
                        ((0, lD.vq)(e.target, HTMLSpanElement) && (0, lD.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return n(t.id);
            },
            [n, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        u = null != c ? nu(c, o) : void 0;
    return (0, s.jsxs)(tK.D, {
        ...i,
        className: na.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, s.jsx)("div", {
                    className: na.Vl,
                    children: (0, s.jsx)(nd, { message: t, src: u, aspectRatio: o }),
                }),
            (0, s.jsx)(nx, { message: t, channelId: l }),
        ],
    });
}
function nh(e) {
    let { message: t, onCardClick: l, listItemProps: n } = e,
        { poll: i } = t,
        a = r.useCallback(() => l(t.id), [l, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, s.jsx)(tK.D, {
        ...n,
        className: na.Nr,
        onClick: a,
        children: (0, s.jsxs)(lU.M, {
            className: na.zI,
            children: [
                (0, s.jsx)(tm.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: na.MH,
                    children: i.question.text,
                }),
                (0, s.jsxs)("div", {
                    className: na.xd,
                    children: [
                        o.map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: na.Nf,
                                    children: (0, s.jsx)(W.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: na.TT,
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
                                className: na.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: na.ov,
                    children: (0, s.jsx)(W.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, lq.J)(i.expiry) ?? em.intl.string(em.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function nf(e) {
    return null != e.message.poll
        ? (0, s.jsx)(nh, { ...e })
        : null != e.message.embedSource
          ? (0, s.jsx)(nm, { ...e })
          : (0, s.jsx)(ng, { ...e });
}
let nj = r.memo(function (e) {
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
                    null == e || l || L.A.isAnnouncementsFetching(e) || l7(e, { limit: 8 });
                }, [e, l, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n, hasFetched: l }
            );
        })(u),
        p = (0, lj.l)("game_profile_announcements"),
        v = r.useCallback(() => {
            let e = i?.guild?.id ?? x;
            null != e &&
                null != g &&
                (c(T.GameProfileTrackActionActions.Announcements),
                e3.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                o(),
                ni({ invite: i, guildId: e, channelId: g, analyticsLocationStack: l }));
        }, [c, o, t, i, x, g, l, u]),
        A = r.useCallback(
            (e) => {
                let n = i?.guild?.id ?? x;
                null != n &&
                    null != g &&
                    (c(T.GameProfileTrackActionActions.AnnouncementsItem),
                    e3.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                    o(),
                    ni({ invite: i, guildId: n, channelId: g, messageId: e, analyticsLocationStack: l }));
            },
            [c, o, t, i, x, g, l, u],
        ),
        E = null != g && d.length > 0;
    return (!f || h) && a
        ? (0, s.jsx)(tP, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, s.jsx)(lS, {
                  gap: 16,
                  children: eQ()
                      .range(3)
                      .map((e) => (0, s.jsx)(nc, {}, e)),
              }),
          })
        : E
          ? (0, s.jsx)(t_, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: v,
                children: p
                    ? (0, s.jsx)(lv.A, {
                          gap: 16,
                          items: d,
                          getItemKey: no,
                          itemClassName: na.hu,
                          renderItem: (e, t) =>
                              (0, s.jsx)(nf, { message: e, channelId: g, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, s.jsx)(lp.A, {
                          gap: 16,
                          children: d.map((e) => (0, s.jsx)(nf, { message: e, channelId: g, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var np = l(505779);
(l(323874), l(14289), l(35956));
var nv = l(989441);
let nA = {
        appStore: {
            websiteCategories: [np.V.IPHONE, np.V.IPAD],
            websiteHostnames: ["apps.apple.com", "itunes.apple.com"],
            distributor: nv.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://apps.apple.com/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [np.V.ANDROID],
            websiteHostnames: ["play.google.com"],
            distributor: nv.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://play.google.com/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    nE = new Set(
        Object.values(nA).flatMap((e) => {
            let { websiteCategories: t } = e;
            return t;
        }),
    );
function nI(e, t) {
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
var nN = l(808380);
let nb = [nN.Y.DESKTOP, "mobile", nN.Y.XBOX, nN.Y.PLAYSTATION, nN.Y.NINTENDO];
var nS = l(28863),
    nC = l(975807),
    nT = l(194362);
function ny() {
    let { game: e, trackAction: t } = U(),
        l = r.useCallback(async () => {
            t(T.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, nT.a)(eL.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, nC.A)(e);
        }, [t]),
        n = r.useCallback((e) => (0, s.jsx)(nS.Anchor, { onClick: l, children: e }), [l]);
    return e.linkedApplications?.some((e) => e.type === lz.Mh.OFFICIAL)
        ? null
        : (0, s.jsx)(W.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: n }),
          });
}
var nL = l(998445),
    nk = l(274997),
    nR = l(80500),
    nG = l(319745),
    nO = l(488225),
    nM = l(967492),
    nP = l(72265),
    n_ = l(454346),
    nw = l(610509),
    nD = l(575888),
    nV = l(37948),
    nU = l(693558);
let nF = { size: "xs", colorClass: nU.w };
function nY(e) {
    let { website: t } = e,
        { trackAction: l } = U(),
        n = (0, nV.A)(),
        {
            action: i,
            icon: a,
            title: o,
        } = (function (e, t) {
            switch (e.category) {
                case np.V.OFFICIAL:
                    return {
                        icon: (0, s.jsx)(nL.GlobeEarthIcon, { ...t }),
                        action: T.GameProfileTrackActionActions.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case np.V.TWITTER:
                    return {
                        icon: (0, s.jsx)(nk.p, { ...t }),
                        action: T.GameProfileTrackActionActions.XLink,
                        title: em.intl.string(em.t.INic4y),
                    };
                case np.V.YOUTUBE:
                    return {
                        action: T.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, s.jsx)(nR.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case np.V.FACEBOOK:
                    return {
                        icon: (0, s.jsx)(nG.Z, { ...t }),
                        action: T.GameProfileTrackActionActions.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case np.V.INSTAGRAM:
                    return {
                        icon: (0, s.jsx)(nO.L, { ...t }),
                        action: T.GameProfileTrackActionActions.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case np.V.BLUESKY:
                    return {
                        icon: (0, s.jsx)(nM.a, { ...t }),
                        action: T.GameProfileTrackActionActions.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case np.V.REDDIT:
                    return {
                        icon: (0, s.jsx)(nP.T, { ...t }),
                        action: T.GameProfileTrackActionActions.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case np.V.TWITCH:
                    return {
                        icon: (0, s.jsx)(n_.a, { ...t }),
                        action: T.GameProfileTrackActionActions.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                case np.V.IPHONE:
                case np.V.IPAD:
                    return {
                        icon: (0, s.jsx)(nw.z, { ...t }),
                        action: T.GameProfileTrackActionActions.AppStoreLink,
                        title: em.intl.string(em.t.LVy7Ug),
                    };
                case np.V.ANDROID:
                    return {
                        icon: (0, s.jsx)(nD.O, { ...t }),
                        action: T.GameProfileTrackActionActions.GooglePlayStoreLink,
                        title: em.intl.string(em.t.V6rllO),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, nF),
        c = r.useCallback(() => {
            (l(i), n(t.url));
        }, [i, n, l, t.url]);
    return (0, s.jsx)($.m, {
        text: o,
        children: (0, s.jsx)(tK.D, { onClick: c, className: nU.y, title: o, children: a }),
    });
}
var nW = l(31300),
    nB = l(646270),
    nH = l(802516),
    nz = l(22363),
    nX = l(418524);
let nK = { [nN.Y.DESKTOP]: nW.k, mobile: nB.u, [nN.Y.XBOX]: nH.Y, [nN.Y.PLAYSTATION]: nz.X, [nN.Y.NINTENDO]: nX.M };
function nJ(e) {
    let { platform: t } = e,
        l = (function (e) {
            switch (e) {
                case nN.Y.DESKTOP:
                    return em.intl.string(em.t.KT6uCJ);
                case "mobile":
                    return em.intl.string(em.t["0DvssQ"]);
                case nN.Y.XBOX:
                    return em.intl.string(em.t.DDWUJp);
                case nN.Y.PLAYSTATION:
                    return em.intl.string(em.t.fzMz2s);
                case nN.Y.NINTENDO:
                    return em.intl.string(em.t.AMW8je);
            }
        })(t),
        n = nK[t];
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
var n$ = l(424994),
    nq = l(623828);
function nQ() {
    return (0, s.jsx)(W.E, { variant: "text-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let nZ = function () {
    let { game: e } = U(),
        t = (0, tx.c)("GameProfileGameDetails"),
        l = r.useMemo(() => e.genres.map(le.du).join(", "), [e]),
        n = e.getCompanyByRole(lz.wk.PUBLISHER),
        i = e.getCompanyByRole(lz.wk.DEVELOPER),
        a = n.map((e) => e.name).join(", "),
        o = i.map((e) => e.name).join(", "),
        c = e.firstReleaseDate,
        u = r.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(nN.Y.MACOS) || t.has(nN.Y.LINUX)) && t.add(nN.Y.DESKTOP);
            let l = t.has(nN.Y.IOS) || t.has(nN.Y.ANDROID);
            return nb.filter((e) => ("mobile" === e ? l : t.has(e)));
        }, [e.platforms]),
        d = r.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return np.p.includes(t) && !nE.has(t);
                }),
                l = Object.values(nA)
                    .map((t) => nI(e, t))
                    .filter(eT.Vq);
            return t.sort((e, t) => np.p.indexOf(e.category) - np.p.indexOf(t.category)).concat(l);
        }, [e]),
        m = !(0, tf.uJ)(l),
        x = !(0, tf.uJ)(a),
        g = !(0, tf.uJ)(o),
        h = !(0, tf.uJ)(c),
        f = u.length > 0,
        j = d.length > 0 && !d.every((e) => (0, tf.uJ)(e.url));
    return (0, s.jsxs)("div", {
        className: nq.uW,
        children: [
            (0, s.jsx)("div", {
                className: nq.Gf,
                children: (0, s.jsx)(tm.D, {
                    variant: t ? "text-md/medium" : "heading-sm/semibold",
                    color: t ? "text-subtle" : "text-strong",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: nq.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: nq.J1,
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
                                      className: nq.Gu,
                                      children: l,
                                  })
                                : (0, s.jsx)(nQ, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nq.J1,
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
                                      className: nq.Gu,
                                      children: a,
                                  })
                                : (0, s.jsx)(nQ, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nq.J1,
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
                                      className: nq.Gu,
                                      children: o,
                                  })
                                : (0, s.jsx)(nQ, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nq.J1,
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
                                      className: nq.Gu,
                                      children: lB.i$(new Date(c), "LL"),
                                  })
                                : (0, s.jsx)(nQ, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nq.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            f
                                ? (0, s.jsx)("div", {
                                      className: nq.Gu,
                                      children: u.map((e) => (0, s.jsx)(nJ, { platform: e }, e)),
                                  })
                                : (0, s.jsx)(nQ, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nq.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, s.jsx)("div", {
                                      className: nq.Gu,
                                      children: d.map((e) => (0, s.jsx)(nY, { website: e }, e.url)),
                                  })
                                : (0, s.jsx)(nQ, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: nq.J1,
                        children: [
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, s.jsx)(W.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: nq.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: n$.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: nq.OQ, children: (0, s.jsx)(ny, {}) }),
        ],
    });
};
var n0 = l(141628),
    n1 = l(289363),
    n8 = l(793919);
function n4() {
    return (0, s.jsxs)("div", {
        "aria-hidden": !0,
        className: n8.uW,
        children: [
            (0, s.jsx)(tA, { className: n8.dU, width: "30%" }),
            (0, s.jsxs)(tE, {
                className: n8.nV,
                children: [
                    (0, s.jsx)("div", { className: n8.sB, children: (0, s.jsx)(n1.default, { isLoading: !0 }) }),
                    (0, s.jsxs)("div", {
                        className: n8.hQ,
                        children: [
                            (0, s.jsxs)("div", {
                                className: n8.Yv,
                                children: [(0, s.jsx)(tA, { width: "55%" }), (0, s.jsx)(tA, { width: "85%" })],
                            }),
                            (0, s.jsx)(tI, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function n3(e) {
    let { analyticsLocations: t } = e,
        l = (0, tx.c)("GameProfileLinkAccount"),
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
          ? (0, s.jsx)(n4, {})
          : !o || a
            ? null
            : (0, s.jsxs)("div", {
                  className: n8.uW,
                  children: [
                      (0, s.jsx)(tm.D, {
                          className: n8.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, s.jsxs)("div", {
                          className: n8.kL,
                          children: [
                              (0, s.jsx)("div", {
                                  className: n8.sB,
                                  children: (0, s.jsx)(n1.default, { application: u }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: n8.hQ,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: n8.FS,
                                          children: [
                                              (0, s.jsx)(tm.D, {
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
                                          icon: n0.A,
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
var n6 = l(635377),
    n2 = l.n(n6),
    n5 = l(80687),
    n9 = l(534573),
    n7 = l(248643),
    ie = l(256905),
    it = l(44788),
    il = l(191096),
    ii = l(90721),
    ia = l(140128);
function is(e) {
    let { item: t, index: l } = e;
    return `${l}-${t.url}`;
}
function ir(e, t) {
    return (0, n9.Ec)(e, { size: t, keepAspectRatio: !0, format: th.QB ? "webp" : null });
}
let io = new (n2())({ max: 100 }),
    ic = r.memo(function (e) {
        let { url: t, alt: l, className: n } = e,
            [i, a] = r.useState(null),
            o = null != i && i.url === t ? i.isPortrait : (io.get(t) ?? !1),
            c = r.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let l = e.naturalHeight > e.naturalWidth;
                    (io.set(t, l),
                        a((e) => (null != e && e.url === t && e.isPortrait === l ? e : { url: t, isPortrait: l })));
                },
                [t],
            ),
            d = r.useCallback((e) => c(e.currentTarget), [c]);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("img", {
                    ref: c,
                    src: ir(t, 106),
                    className: u()(ia.r4, !o && ia.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, s.jsx)("img", { ref: c, src: ir(t, 900), className: u()(ia.c8, o && ia.D7, n), alt: l, onLoad: d }),
            ],
        });
    }),
    iu = r.memo(function (e) {
        var t;
        let { item: l, index: n, isSelected: i, isPlaying: a, onSelect: o, gameName: c, listItemProps: d } = e,
            m = r.useCallback(() => o(n), [o, n]),
            x = d?.tabIndex;
        return (0, s.jsx)(tK.D, {
            ...d,
            className: u()(ia.JS, i && ia.Y4),
            onClick: m,
            children: (0, s.jsxs)("div", {
                className: ia.ub,
                children: [
                    (0, s.jsx)("img", {
                        src: ir("VIDEO" === (t = l).type ? (t.poster ?? t.url) : t.url, 106),
                        className: ia.xn,
                        alt: em.intl.formatToPlainString(em.t.COYYrn, { game: c }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === l.type &&
                        (0, s.jsx)("div", {
                            className: ia.UZ,
                            children: (0, s.jsx)(n5.D, { playing: i && a, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    id = r.memo(function (e) {
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
            (0, ii.A)({ videoRef: i, canvasRef: d, enabled: !l }),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    !l && (0, s.jsx)("canvas", { ref: d, className: ia.HW, "aria-hidden": "true" }),
                    (0, s.jsx)("div", {
                        className: ia.tN,
                        children: (0, s.jsx)(n7.A, {
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
                            renderLinkComponent: it.bU,
                            onPlay: o,
                            onPause: c,
                            onFullscreenChange: u,
                            mediaPlayerClassName: ia.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function im() {
    let { game: e, trackAction: t } = U(),
        [l, n] = r.useState(0),
        [i, a] = r.useState(null),
        [o, c] = r.useState(e.screenshotUrls),
        u = r.useRef(null),
        d = r.useRef(null),
        x = (0, m.bG)([t5.Ay], () => t5.Ay.useReducedMotion),
        { obscured: g } = (0, il.I3)(),
        h = (0, lj.l)("game_profile_media");
    o !== e.screenshotUrls && (c(e.screenshotUrls), n(0));
    let f = r.useMemo(
            () => [
                ...(e.trailers ?? []).map((e) => {
                    let t = (0, l3.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, l3.YE)(e.application_id, e.id, e.width, "webp"),
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
            (0, ie.R)({
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
              className: ia.kL,
              children: [
                  A
                      ? (0, s.jsx)("div", {
                            className: ia.ND,
                            children: (0, s.jsx)(
                                id,
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
                            className: ia.wp,
                            children: [
                                null != i &&
                                    !x &&
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: ia.Jy,
                                            onAnimationEnd: L,
                                            children: (0, s.jsx)(ic, { url: i, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, s.jsx)("div", { className: ia.QN }),
                                (0, s.jsx)(tK.D, {
                                    className: ia.gv,
                                    onClick: S,
                                    children: (0, s.jsx)("div", {
                                        className: ia.cs,
                                        children: (0, s.jsx)(
                                            ic,
                                            {
                                                url: v.url,
                                                className: ia.Jf,
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  h
                      ? (0, s.jsx)(lv.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: j,
                            getItemKey: is,
                            renderItem: (t, l) => {
                                let { item: n, index: i } = t;
                                return (0, s.jsx)(
                                    iu,
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
                      : (0, s.jsx)(lp.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: f.map((t, l) =>
                                (0, s.jsx)(
                                    iu,
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
var ix = l(49381),
    ig = l(223273);
function ih(e, t, l) {
    if (null == e || null == t || t < 10) return ig.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? ig.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? ig.vI.VERY_POSITIVE
              : ig.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return ig.vI.MOSTLY_POSITIVE;
    if (e >= 40) return ig.vI.MIXED;
    if (e >= 20) return ig.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return ig.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return ig.vI.VERY_NEGATIVE;
    return ig.vI.OVERWHELMINGLY_NEGATIVE;
}
var ij = l(792216);
let ip = {
    appStore: { getTitle: () => em.intl.string(em.t.LVy7Ug), action: T.GameProfileTrackActionActions.AppStoreReviews },
    googlePlay: {
        getTitle: () => em.intl.string(em.t.V6rllO),
        action: T.GameProfileTrackActionActions.GooglePlayReviews,
    },
};
function iv(e) {
    switch (e) {
        case ig.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case ig.vI.OVERWHELMINGLY_POSITIVE:
        case ig.vI.VERY_POSITIVE:
        case ig.vI.POSITIVE:
        case ig.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case ig.vI.MIXED:
            return "steam-review-text-mixed";
        case ig.vI.MOSTLY_NEGATIVE:
        case ig.vI.NEGATIVE:
        case ig.vI.VERY_NEGATIVE:
        case ig.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
let iA = { enabled: !1 },
    iE = (0, er.mj)({
        name: "2026-10-game-profile-mobile-reviews",
        kind: "user",
        defaultConfig: iA,
        variations: { 0: iA, 1: { enabled: !0 } },
    });
var iI =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    iN = l(778591);
function ib(e) {
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
var iS = l(315189);
let iC = { appStore: nw.z, googlePlay: nD.O };
function iT(e) {
    let { review: t } = e,
        { trackAction: l } = U(),
        n = (0, nV.A)(),
        i = iC[t.key],
        { action: a, url: o } = t,
        c = r.useCallback(() => {
            (l(a), n(o));
        }, [a, n, l, o]);
    return (0, s.jsx)(tK.D, {
        onClick: c,
        className: iS.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, s.jsxs)("div", {
            className: iS.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: iS.hU,
                    children: [
                        (0, s.jsx)(i, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(tm.D, { variant: "heading-sm/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: iS.nK,
                    children: [
                        (0, s.jsx)(W.E, {
                            variant: "text-xs/medium",
                            color: "text-strong",
                            className: iS.yX,
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
function iy(e) {
    let { url: t, title: l, rating: n, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: o } = U(),
        c = (0, nV.A)(),
        u = ih(n, i, "recent" === a),
        d = iv(u),
        m = r.useCallback(() => {
            (o(T.GameProfileTrackActionActions.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, s.jsx)(tK.D, {
        onClick: m,
        className: iS.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, s.jsxs)("div", {
            className: iS.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: iS.hU,
                    children: [
                        (0, s.jsx)(ix.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(tm.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, s.jsx)(
                    $.m,
                    {
                        text:
                            u === ig.vI.NO_USER_REVIEWS
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
                            className: iS.nK,
                            children: [
                                (0, s.jsx)(W.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: iS.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case ig.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case ig.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case ig.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case ig.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case ig.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case ig.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case ig.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case ig.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case ig.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case ig.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== ig.vI.NO_USER_REVIEWS &&
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
function iL(e) {
    let { url: t } = e,
        { game: l, trackAction: n } = U(),
        { reviews: i } = l,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = a.tier,
        c = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (c <= 0 || u <= 0) && null == o,
        m = (0, nV.A)(),
        x = r.useCallback(() => {
            (n(T.GameProfileTrackActionActions.OpenCriticReviews), m(t));
        }, [m, n, t]);
    return (0, s.jsx)(tK.D, {
        onClick: x,
        className: iS.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, s.jsxs)("div", {
            className: iS.Ur,
            children: [
                (0, s.jsx)(tm.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, s.jsxs)("div", {
                    className: iS.WA,
                    children: [
                        null != o ? (0, s.jsx)(ik, { tier: o }) : null,
                        null != o && c > 0 && u > 0 ? (0, s.jsx)(iR, { rating: c, tier: o }) : null,
                        d
                            ? (0, s.jsx)(W.E, {
                                  variant: "text-xs/medium",
                                  color: iv(ig.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function ik(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case iI.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case iI.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case iI.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case iI.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case iI.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case iI.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case iI.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case iI.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, s.jsx)(
        $.m,
        {
            text: l,
            children: (0, s.jsx)("div", {
                className: iS.TE,
                children: (0, s.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function iR(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case iI.MIGHTY:
                    t = "#fc430a";
                    break;
                case iI.STRONG:
                    t = "#9e00b4";
                    break;
                case iI.FAIR:
                    t = "#4aa1ce";
                    break;
                case iI.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, s.jsx)(
        $.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, s.jsxs)("div", {
                className: iS.TE,
                style: { backgroundColor: i },
                children: [
                    (0, s.jsx)(ib, { rating: t, strokeColor: n }),
                    (0, s.jsx)(W.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: iS.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let iG = function () {
    var e;
    let { game: t } = U(),
        l = (0, tx.c)("GameProfileReviews"),
        n = (0, iN.I)(t.id),
        i = t.opencriticUrl,
        a = r.useMemo(() => {
            let e = t.reviews?.steam,
                l = t.steamReleaseStatus !== ij.Y.RETIRED_ABANDONED && null != n,
                i = ih(e?.recentRating, e?.recentRatingCount, !0),
                a = l && i !== ig.vI.NO_USER_REVIEWS,
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
                mobileStoreReviews: Object.entries(ip).flatMap((e) => {
                    var l;
                    let n,
                        i,
                        [a, s] = e,
                        r = t.reviews?.[a],
                        o = r?.rating,
                        c = r?.ratingCount;
                    if (null == o || null == c) return [];
                    let u = nI(t, nA[a]);
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
                return iE.useConfig({ location: t }).enabled;
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
            (t.steamReleaseStatus !== ij.Y.RETIRED_ABANDONED || o.length > 0) &&
            t.reviews?.opencritic != null &&
            null != t.opencriticUrl;
    return u || f || 0 !== o.length
        ? (0, s.jsxs)("div", {
              className: iS.uW,
              children: [
                  (0, s.jsx)("div", {
                      className: iS.Gf,
                      children: (0, s.jsx)(tm.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: iS.kL,
                      children: [
                          d && null != n
                              ? (0, s.jsx)("div", {
                                    className: iS.WH,
                                    children: (0, s.jsx)(iy, {
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
                                    className: iS.WH,
                                    children: (0, s.jsx)(iy, {
                                        url: n,
                                        title: em.intl.string(h),
                                        rating: x,
                                        ratingCount: g,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          o.map((e) =>
                              (0, s.jsx)("div", { className: iS.WH, children: (0, s.jsx)(iT, { review: e }) }, e.key),
                          ),
                          f && null != i
                              ? (0, s.jsx)("div", { className: iS.WH, children: (0, s.jsx)(iL, { url: i }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var iO = l(815996),
    iM = l(722258),
    iP = l(258245),
    i_ = l(561769),
    iw = l(484469),
    iD = l(57020),
    iV = l(682301);
let iU = [];
var iF = l(758836),
    iY = l(399872);
let iW = [0, 1, 2, 3, 4];
function iB(e) {
    return e.skuId;
}
function iH(e) {
    let { product: t, aspectRatio: l, listItemProps: n } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = r.useContext(i_.v3),
        { trackAction: u } = U(),
        d = r.useRef(null),
        m = r.useCallback(
            (e) => {
                (u(T.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, iM.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, iD.A)({ product: t }),
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
    return (0, s.jsx)(i_.v3.Provider, {
        value: x,
        children: (0, s.jsx)(iP.A, {
            skuId: i,
            aspectRatio: l,
            cardClassName: iY.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: n,
        }),
    });
}
function iz() {
    return (0, s.jsx)(iw.A, {});
}
function iX() {
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
                            null == e || t || L.A.isShopCollectionFetching(e) || l2(e);
                        }, [e, t]),
                        { skuIds: n ?? iU, hasFetched: t, isFetching: l }
                    );
                })(e),
                i = (0, iV.hv)(t, { flattenVariants: !0 }),
                a = (0, r.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                s = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!l || n || (t.length > 0 && s)) };
        })(e.shopCollectionIds?.[0]),
        a = r.useCallback(() => {
            (l(T.GameProfileTrackActionActions.DiscordCollectiblesShop),
                t(),
                (0, iO.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: iF.G2.CATALOG,
                }));
        }, [l, t]),
        o = (0, lj.l)("game_profile_shop_carousel");
    return i
        ? (0, s.jsx)(tP, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, s.jsx)(lS, { children: iW.map((e) => (0, s.jsx)(iz, {}, e)) }),
          })
        : 0 === n.length
          ? null
          : (0, s.jsx)(t_, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: o
                    ? (0, s.jsx)(lv.A, {
                          gap: "md",
                          items: n,
                          getItemKey: iB,
                          renderItem: (e, t) => (0, s.jsx)(iH, { product: e, listItemProps: t }, e.skuId),
                      })
                    : (0, s.jsx)(lp.A, { gap: "md", children: n.map((e) => (0, s.jsx)(iH, { product: e }, e.skuId)) }),
            });
}
var iK = l(921138),
    iJ = l(5399);
let i$ = [],
    iq = [];
var iQ = l(987070);
let iZ = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function i0(e) {
    return e.id;
}
function i1(e) {
    let { className: t } = e;
    return (0, s.jsx)(tE, { className: t, children: (0, s.jsx)(tA, { className: iQ.Lg }) });
}
function i8(e) {
    let { game: t, listItemProps: l } = e,
        { navigateToGame: n, trackAction: i } = U(),
        { shouldOpenGameProfile: a, gameId: o } = (0, iK.Ay)({
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
        children: (0, s.jsx)(tK.D, {
            ...l,
            className: iQ.Nr,
            onClick: c,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: (0, s.jsx)(lt.Ay, {
                game: t,
                className: iQ.xe,
                size: lt.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, s.jsx)(i1, { className: iQ.uz }),
            }),
        }),
    });
}
function i4() {
    let { game: e } = U(),
        { isFetching: t, similarGames: l } = (function (e) {
            let t = !l6.has(e),
                { data: l, isLoading: n, error: i } = l9(e, t),
                a = t && null != l ? l : i$;
            (0, N.x)(a);
            let s = (0, m.bG)(
                    [e6.A],
                    () => a.some((e) => null == e6.A.getGame(e) && !e6.A.hasNoData(e) && !e6.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [e6.A, D.default],
                    () => {
                        let e = D.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => e6.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, iK.T_)(t) && !(0, O.b)(t, e) && (0, iJ.zu)(t));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: iq };
        })(e.id),
        n = (0, lj.l)("game_profile_similar_games");
    return t
        ? (0, s.jsx)(tP, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, s.jsx)("div", {
                  className: iQ.XG,
                  style: iZ,
                  children: (0, s.jsx)(lS, {
                      children: eQ()
                          .range(0, 8)
                          .map((e) => (0, s.jsx)(i1, { className: iQ.aZ }, e)),
                  }),
              }),
          })
        : 0 === l.length
          ? null
          : (0, s.jsx)(t_, {
                title: em.intl.string(em.t["6rLyQB"]),
                children: (0, s.jsx)("div", {
                    className: iQ.XG,
                    style: iZ,
                    children: n
                        ? (0, s.jsx)(lv.A, {
                              gap: "md",
                              items: l,
                              getItemKey: i0,
                              itemClassName: iQ.cW,
                              renderItem: (e, t) => (0, s.jsx)(i8, { game: e, listItemProps: t }, e.id),
                          })
                        : (0, s.jsx)(lp.A, { gap: "md", children: l.map((e) => (0, s.jsx)(i8, { game: e }, e.id)) }),
                }),
            });
}
l(667532);
var i3 = l(853022);
let i6 = new Set(["1402418703554842694", "356877880938070016"]),
    i2 = [np.V.EPICGAMES, np.V.STEAM, np.V.ROBLOX, np.V.BATTLENET, np.V.RIOT, np.V.MINECRAFT];
function i5(e) {
    return (0, s.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var i9 = l(349361),
    i7 = l(924895),
    ae = l(422688),
    at = l(505200),
    al = l(695250);
let an = function (e) {
    switch (e.category) {
        case np.V.STEAM:
            return {
                icon: ix.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: T.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case np.V.EPICGAMES:
            return {
                icon: i9.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: T.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case np.V.ROBLOX:
            return {
                icon: i7.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: T.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case np.V.BATTLENET:
            return {
                icon: ae.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: T.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case np.V.RIOT:
            return {
                icon: at.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: T.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case np.V.MINECRAFT:
            return {
                icon: al.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: T.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: nH.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: T.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var ai = l(242216);
function aa(e) {
    let t,
        l,
        n,
        i,
        a,
        s =
            ((t = (0, iN.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eL.d3x.XBOX_GAME_PASS && !(0, tf.uJ)(e.id));
                return t?.id == null ? null : (0, i3.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            r.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== np.V.EPICGAMES || !!i6.has(n)) &&
                            (e.category !== np.V.STEAM || a !== ij.Y.RETIRED_ABANDONED) &&
                            i2.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === ij.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === np.V.STEAM) ||
                    e.push({ category: np.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === np.V.STEAM ? -1 : +(t.category === np.V.STEAM)));
                return (null != l && s.unshift({ category: "XBOX_GAME_PASS", url: l }), s);
            }, [t, i, n, a, l]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function as(e) {
    let { data: t } = e,
        { trackAction: l } = U(),
        n = (0, nV.A)();
    return (0, s.jsx)(i5, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (l(t.action), n(t.url));
        },
    });
}
let ar = function () {
    let { game: e, trackAction: t } = U(),
        { showsStoreLinks: n, storeWebsites: i } = aa(e),
        a = r.useMemo(() => i.map(an).filter((e) => null != e), [i]);
    if (!n) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, s.jsx)(as, { data: e });
    }
    if (2 === a.length)
        return (0, s.jsxs)("div", {
            className: ai.G,
            children: [(0, s.jsx)(as, { data: a[0] }), (0, s.jsx)(as, { data: a[1] })],
        });
    let o = (0, s.jsx)(i5, {
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
        ? (0, s.jsxs)("div", { className: ai.G, children: [(0, s.jsx)(as, { data: a[0] }), o] })
        : o;
};
var ao = l(123292),
    ac = l(672572),
    au = l(94936);
function ad() {
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
        className: u()(ac.fi, au.k),
        children: [
            (0, s.jsx)(W.E, {
                ref: e,
                className: au.Q,
                lineClamp: t ? void 0 : o,
                variant: "text-md/medium",
                children: i.description,
            }),
            l && (0, s.jsx)(ao.Q, { onClick: n, text: c }),
        ],
    });
}
var am = l(40478),
    ax = l(764948);
let ag = r.memo(function (e) {
    let { analyticsLocations: t, selectTab: l, getScrollOffset: n } = e;
    return (0, s.jsxs)("div", {
        className: ax.V,
        children: [
            (0, s.jsx)(im, {}),
            (0, s.jsxs)("div", {
                className: am.h,
                children: [
                    (0, s.jsx)(lo, {}),
                    (0, s.jsxs)("div", { className: am.X, children: [(0, s.jsx)(ar, {}), (0, s.jsx)(ad, {})] }),
                ],
            }),
            (0, s.jsx)(n3, { analyticsLocations: t }),
            (0, s.jsx)(tG, {}),
            (0, s.jsx)(nj, { getScrollOffset: n }),
            (0, s.jsx)(lw, { selectTab: l }),
            (0, s.jsx)(iX, {}),
            (0, s.jsx)(i4, {}),
            (0, s.jsx)(iG, {}),
            (0, s.jsx)(nZ, {}),
        ],
    });
});
var ah = l(164135);
let af = r.memo(function (e) {
    let { selectTab: t, getScrollOffset: l } = e;
    return (0, s.jsxs)("div", {
        className: ah.V,
        children: [
            (0, s.jsxs)("div", { className: ah.B, children: [(0, s.jsx)(im, {}), (0, s.jsx)(ad, {})] }),
            (0, s.jsx)(nj, { getScrollOffset: l }),
            (0, s.jsx)(lw, { selectTab: t }),
            (0, s.jsx)(iX, {}),
            (0, s.jsx)(i4, {}),
        ],
    });
});
var aj = l(881698),
    ap = l(928550),
    av = l(562708),
    aA = l(414499),
    aE = l(359549),
    aI = l(139286),
    aN = l(873516);
function ab(e) {
    let { onCloudPlayClick: t, analyticsLocations: l } = e,
        { closeModal: n, trackAction: i } = U();
    (0, aI.A)({
        name: av.ImpressionNames.CLOUD_PLAY_CTA,
        type: av.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let a = r.useCallback(() => {
        (i(T.GameProfileTrackActionActions.CloudPlay), n(), t());
    }, [n, t, i]);
    return (0, s.jsx)($.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, s.jsx)(K.$, {
            icon: aA.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function aS(e) {
    let { cloudPlayAppId: t, analyticsLocations: l } = e,
        { game: n } = U(),
        i = (0, aE.rC)({ applicationId: t, sourceApplicationId: n.id, analyticsLocations: l });
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: aN.k,
              children: (0, s.jsx)(ab, { onCloudPlayClick: i, analyticsLocations: l }),
          });
}
var aC = l(768626);
function aT(e) {
    let { analyticsLocations: t } = e,
        { game: l } = U(),
        n = (0, aj.A)(l.linkedApplications)?.id,
        [i] = (0, ap.L_)(l.getOfficialApplicationId()),
        [a] = (0, ap.L_)(l.id),
        { showsStoreLinks: r } = aa(l);
    return (0, s.jsxs)("div", {
        className: u()(aC.pz, ac.fi, r ? aC.FJ : aC.dg),
        children: [
            null == n || i || a ? null : (0, s.jsx)(aS, { cloudPlayAppId: n, analyticsLocations: t }),
            (0, s.jsxs)("div", {
                className: ax.V,
                children: [
                    (0, s.jsx)(ar, {}),
                    (0, s.jsx)(n3, { analyticsLocations: t }),
                    (0, s.jsx)(tG, {}),
                    (0, s.jsx)(iG, {}),
                    (0, s.jsx)(nZ, {}),
                ],
            }),
        ],
    });
}
var ay = l(105865);
function aL(e) {
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
            (0, s.jsx)(la, { ref: o }),
            (0, s.jsxs)(eZ.Ch, {
                ref: c,
                className: ay.XG,
                onScroll: m,
                children: [
                    (0, s.jsx)("div", { className: ay.xY, "aria-hidden": !0 }),
                    (0, s.jsx)(ld, {}),
                    (0, s.jsx)(t6.F, {
                        children: t
                            ? (0, s.jsxs)("div", {
                                  className: ay.jC,
                                  children: [
                                      (0, s.jsx)(af, { selectTab: l, getScrollOffset: d }),
                                      (0, s.jsx)(aT, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, s.jsx)("div", {
                                  className: ay.b9,
                                  children: (0, s.jsx)(ag, { analyticsLocations: a, selectTab: l, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var ak = l(360661),
    aR = l(787188);
function aG(e) {
    let { applicationId: t, selectedPageIndex: l } = e;
    return (0, s.jsx)(ak.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: l,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: lg.Ye.GAME_PROFILE_GAME_SHOP,
        className: aR.kL,
        scrollerClassName: aR.XG,
        promotionBannerClassName: aR.Rv,
    });
}
var aO = l(733391),
    aM = l(171616);
function aP(e) {
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
                o && (0, aO.Xw)();
            }, [o]);
            let c = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != s && P.A.hasStorefrontForApplicationId(s) ? s : null),
                    [a, s],
                ),
                u = o && null != c,
                { storefront: d } = (0, aM.A)({ applicationId: u ? c : null }),
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
                          className: u()(H, ac.kL),
                          ref: ej,
                          children: (0, s.jsxs)(b.A, {
                              obscured: el,
                              onClose: ev,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: u()(ac.sx, { [ac.Tk]: eI !== y.COMMERCE }),
                                      children: (0, s.jsx)(e$, { navigation: eA, socialLayerStorefront: eN }),
                                  }),
                                  eI === y.OVERVIEW &&
                                      (0, s.jsx)(aL, {
                                          selectTab: eA.selectTab,
                                          selectionVersion: eE,
                                          initialScrollOffset: o,
                                          isTwoColumn: F,
                                          analyticsLocations: K,
                                      }),
                                  eI === y.COMMUNITIES && (0, s.jsx)(t3, {}),
                                  eI === y.COMMERCE && (0, s.jsx)(aG, { applicationId: eS, selectedPageIndex: eT }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let a_ = function (e) {
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
        aP,
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
