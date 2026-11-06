n.d(t, { default: () => ru });
var l,
    i,
    a,
    r = n(477900),
    s = n(582128),
    o = n.t(s, 2),
    c = n(503698),
    u = n.n(c),
    d = n(535185),
    m = n(855986),
    h = n(521489),
    g = n(192308),
    x = n(964486),
    f = n(793574),
    p = n(688810),
    j = n(724302),
    v = n(587895),
    b = n(590703),
    I = n(396696),
    N = n(583846),
    E = n(454908),
    y = n(570962),
    A = n(38145),
    C = n(773669),
    k = n(409626),
    S = (((l = {}).OVERVIEW = "overview"), (l.COMMUNITIES = "communities"), (l.COMMERCE = "commerce"), l),
    L = n(422069),
    R = n(205184),
    T = n(957807);
let M = { [S.OVERVIEW]: k.Ws.Overview, [S.COMMUNITIES]: k.Ws.Communities, [S.COMMERCE]: k.Ws.GameShop };
var O = n(49491),
    w = n(429913),
    P = n(832163),
    V = n(820847),
    D = n(802494),
    G = n(287809);
let _ = s.createContext(void 0);
function W() {
    let e = s.useContext(_);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var F = n(109112),
    U = n(761508),
    B = n(834730),
    Y = n(858899),
    z = n(265872),
    H = n(165862),
    X = n(477782),
    K = n(821609),
    $ = n(663341),
    J = n(866665),
    q = n(408278),
    Q = n(173936),
    Z = n(365199),
    ee = n(789645),
    et = n(442433),
    en = n(50268),
    el = n(676924),
    ei = n(957565),
    ea = n(695366),
    er = n(792996);
n(321073);
var es = n(540185),
    eo = n(926268),
    ec = n(53788),
    eu = n(831453),
    ed = n(785866),
    em = n(555704),
    eh = n(741534),
    eg = n(633075),
    ex = n(289173),
    ef = n(851767),
    ep = n(958805),
    ej = n(735321),
    ev = n(116281),
    eb = n(46653),
    eI = n(403362);
async function eN(e) {
    let t = e((0, ej.BF)());
    await ep.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var eE = n(652215);
function ey(e) {
    var t;
    let l,
        i,
        { className: a, activeTab: c } = e,
        { game: u, closeModal: d, trackAction: h } = W(),
        x = s.useRef(null),
        p = s.useRef(null),
        j = (0, en.A)({ id: u.id, label: er.intl.string(er.t.SHQGPj) }),
        v =
            ((t = u.id),
            (l = o.useContext(_)?.trackAction),
            (i = s.useCallback(() => {
                null != t &&
                    (l?.(k.Ws.Feedback),
                    (0, g.mM)(async () => {
                        let { default: e } = await Promise.all([
                            n.e(250440),
                            n.e(568035),
                            n.e(733771),
                            n.e(946039),
                            n.e(55266),
                            n.e(627495),
                        ]).then(n.bind(n, 651930));
                        return (n) => (0, r.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, l])),
            null == t
                ? null
                : (0, r.jsx)(X.Dr, {
                      id: "game-profile-something-wrong",
                      label: er.intl.string(er.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: ea.CircleErrorIcon },
                  })),
        b = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([eb.default], () => eb.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: es.x.FAVORITE_GAMES,
                            addLabel: er.intl.string(er.t.fgmitg),
                            removeLabel: er.intl.string(er.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eo.HeartIcon,
                        },
                        {
                            type: es.x.PLAYED_GAMES,
                            addLabel: er.intl.string(er.t["0xIVLR"]),
                            removeLabel: er.intl.string(er.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: ec.ThumbsUpIcon,
                        },
                        {
                            type: es.x.CURRENT_GAMES,
                            addLabel: er.intl.string(er.t.G0c4En),
                            removeLabel: er.intl.string(er.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: eu.RotateIcon,
                        },
                        {
                            type: es.x.WANT_TO_PLAY_GAMES,
                            addLabel: er.intl.string(er.t.UuBS4K),
                            removeLabel: er.intl.string(er.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ed.JoystickIcon,
                        },
                    ],
                    [],
                ),
                a = (0, m.yK)([ef.A], () => (null == l ? [] : (ef.A.getUserProfile(l)?.widgets ?? [])), [l]),
                o = (0, ev.A)(),
                c = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...a].filter((e) => e instanceof eg.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eI.Vq).find((e) => t.has(e)) ?? null;
                }, [o, a, e]),
                u = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await eN((i) => {
                                let a = i.filter(ex.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, ej.uA)(a))) return i;
                                    let n = { gameId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new ex.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new ex.Yy({ ...a, games: e });
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
                        (0, eh.un)({
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
                            (await eN((n) =>
                                e
                                    ? n.some((e) => e instanceof eg.R && e.applicationId === c)
                                        ? n
                                        : [(t = new eg.R({ applicationId: c })), ...n]
                                    : ((t = n.find((e) => e instanceof eg.R && e.applicationId === c) ?? null),
                                      n.filter((e) => !(e instanceof eg.R && e.applicationId === c))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, eh.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [c],
                );
            if (null == l) return null;
            let h = null != e && (0, ej.XX)(e),
                g = [];
            if (null != c) {
                let e = a.some((e) => e instanceof eg.R && e.applicationId === c);
                g.push(
                    (0, r.jsx)(
                        X.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? er.intl.formatToPlainString(er.t.Ktb1n8, { name: n })
                                : er.intl.formatToPlainString(er.t.Xp6iZt, { name: n }),
                            action: () => d(!e),
                            leadingAccessory: { type: "icon", icon: em.AnalyticsIcon },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of i) {
                    let n = a.filter(ex.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, ej.uA)(n);
                    g.push(
                        (0, r.jsx)(
                            X.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? er.intl.string(er.t["86OoiH"]) : void 0,
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
        I = s.useCallback(() => d(!1), [d]),
        N = s.useCallback(() => {
            h(k.Ws.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eE.BVt.GAME_PROFILE(u.id)}`;
            (0, ei.C)(e, () => {
                (0, Y.P0)({ text: er.intl.string(er.t["+5kSoW"]), variant: "success" });
            });
        }, [u.id, h]);
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            c === S.COMMERCE &&
                (0, r.jsx)(el.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: d,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != b &&
                c !== S.COMMERCE &&
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
                                ((0, et.Z_)(), t());
                            },
                            "aria-label": er.intl.string(er.t.sidPSo),
                            onSelect: () => {},
                            children: (0, r.jsx)(X.rX, { children: b }),
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
                                text: er.intl.string(er.t.sidPSo),
                            }),
                        }),
                }),
            c !== S.COMMERCE &&
                (0, r.jsx)(J.m, {
                    text: er.intl.string(er.t.WqhZss),
                    children: (0, r.jsx)(q.K, {
                        icon: Q.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": er.intl.string(er.t.WqhZss),
                        onClick: N,
                    }),
                }),
            (null != j || null != v) &&
                c !== S.COMMERCE &&
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
                                ((0, et.Z_)(), t());
                            },
                            "aria-label": er.intl.string(er.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(X.rX, { children: v }), (0, r.jsx)(X.rX, { children: j })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)(J.m, {
                            text: er.intl.string(er.t["UKOtz+"]),
                            children: (0, r.jsx)("div", {
                                ...e,
                                ref: x,
                                children: (0, r.jsx)(q.K, {
                                    icon: Z.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": er.intl.string(er.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, r.jsx)(q.K, {
                icon: ee.XSmallIcon,
                variant: "overlay-secondary",
                size: "sm",
                onClick: I,
                "aria-label": er.intl.string(er.t.cpT0Cq),
            }),
        ],
    });
}
var eA = n(945810);
let eC = { enabled: !1 },
    ek = (0, eA.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eC,
        variations: { 0: eC, 1: { enabled: !0 } },
    });
function eS(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i } = n;
    if (
        !(function (e) {
            let { location: t } = e;
            return ek.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let a = er.intl.string(er.t["3xFZEo"]);
    return (0, r.jsx)(U.V.Item, {
        id: S.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(S.COMMUNITIES),
        className: t,
        "aria-label": a,
        children: (0, r.jsx)(B.E, { variant: "body-md/medium", color: "none", children: a }),
    });
}
function eL(e) {
    let { className: t, navigation: n } = e,
        { game: l } = W();
    return (l.communityGuildIds?.length ?? 0) < 3 ? null : (0, r.jsx)(eS, { className: t, navigation: n });
}
var eR = n(646514),
    eT = n(331322),
    eM = n(278416),
    eO = n(478016),
    ew = n(900797),
    eP = n(847374),
    eV = n(421773),
    eD = n(225647),
    eG = n(421108);
let e_ = "body-md/medium",
    eW = [];
function eF(e) {
    let { label: t, chevron: n, socialLayerStorefront: l } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: n } = e,
                l = Object.values(n?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, eG.ZH)(n));
                }),
                i = (0, eG.tm)(l?.endsAt);
            return t && null != l && !i;
        })(l);
    return (0, r.jsxs)(eT.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, r.jsx)(eM.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eR.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, r.jsxs)(eT.B, {
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
function eU(e) {
    let { className: t, label: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: a, selectTab: o } = l,
        { storefront: c, selectedStorefrontPageIndex: u, selectStorefrontPage: d } = i,
        m = c?.pages ?? eW,
        h = s.useRef(null),
        { isHovered: g, setIsHovered: x, onMouseEnter: f, onMouseLeave: p, cancelTimers: j } = (0, eV.A)(100, 100),
        v = er.intl.string(er.t["J3/JCl"]),
        b = s.useCallback(
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
        onRequestOpen: () => b(!0),
        onRequestClose: () => b(!1),
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
                                i = a === S.COMMERCE && t === u,
                                s =
                                    ((n = e.title),
                                    null != (l = (0, eD.A)(n?.trim())) && l.length > 0
                                        ? l
                                        : er.intl.formatToPlainString(er.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, r.jsx)(
                                X.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: eO.CheckmarkSmallIcon } : void 0,
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
                c = s ? ew.ChevronSmallUpIcon : eP.ChevronSmallDownIcon;
            return (0, r.jsx)(U.V.Item, {
                ...e,
                id: S.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a === S.COMMERCE ? S.COMMERCE : void 0,
                onClick: (t) => {
                    (o(S.COMMERCE), e.onClick(t));
                },
                onMouseLeave: p,
                clickableRef: (e) => {
                    h.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": v,
                "aria-haspopup": "menu",
                children: (0, r.jsx)(B.E, {
                    variant: e_,
                    color: "none",
                    children: (0, r.jsx)(eF, {
                        label: n,
                        chevron: (0, r.jsx)(c, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function eB(e) {
    let { className: t, navigation: n, socialLayerStorefront: l } = e,
        { selectedTab: i, selectTab: a } = n,
        { hasCommerceTab: s, storefront: o } = l;
    if (!s) return null;
    let c = er.intl.string(er.t.apFNLU);
    return (o?.pages.length ?? 0) > 1
        ? (0, r.jsx)(eU, { className: t, label: c, navigation: n, socialLayerStorefront: l })
        : (0, r.jsx)(U.V.Item, {
              id: S.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(S.COMMERCE),
              className: t,
              "aria-label": c,
              children: (0, r.jsx)(B.E, {
                  variant: e_,
                  color: "none",
                  children: (0, r.jsx)(eF, { label: c, socialLayerStorefront: l }),
              }),
          });
}
var eY = n(510954);
function ez(e) {
    let { navigation: t, socialLayerStorefront: n } = e,
        { game: l } = W(),
        { selectedTab: i, selectTab: a } = t,
        o = l.getIconURL(64),
        [c, u] = s.useState(null),
        d = s.useCallback(() => u(o), [o]),
        m = er.intl.string(er.t.qHmbyh);
    return (0, r.jsx)("div", {
        className: eY.wx,
        children: (0, r.jsxs)("div", {
            className: eY.ap,
            children: [
                (0, r.jsx)("div", {
                    className: eY.wE,
                    children:
                        null != o && o !== c
                            ? (0, r.jsx)("img", { src: o, alt: "", className: eY.FC, draggable: !1, onError: d })
                            : (0, r.jsx)(F.UnknownGameIcon, { size: "md" }),
                }),
                (0, r.jsxs)(U.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: eY.vR,
                    children: [
                        (0, r.jsx)(U.V.Item, {
                            id: S.OVERVIEW,
                            disableItemStyles: !0,
                            className: eY.Mf,
                            "aria-label": m,
                            children: (0, r.jsx)(B.E, { variant: "body-md/medium", color: "none", children: m }),
                        }),
                        (0, r.jsx)(eL, { className: eY.Mf, navigation: t }),
                        (0, r.jsx)(eB, { className: eY.Mf, navigation: t, socialLayerStorefront: n }),
                    ],
                }),
                (0, r.jsx)(ey, { className: eY.HK, activeTab: i }),
            ],
        }),
    });
}
var eH = n(435558),
    eX = n.n(eH),
    eK = n(516521),
    e$ = n(448741),
    eJ = n(71393),
    eq = n(309010),
    eQ = n(449054),
    eZ = n(60465),
    e0 = n(311043),
    e1 = n(620632),
    e2 = n(73153);
let e8 = {};
class e4 extends m.Ay.Store {
    static displayName = "DiscoverableGuildsStore";
    initialize() {
        this.waitFor(eb.default);
    }
    getGuild(e) {
        return e8[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => e8[e]?.guild).filter(eI.Vq);
    }
    isFetching(e) {
        return e.some((e) => e8[e]?.fetchState === "fetching");
    }
    getStaleGuildIds(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return e.filter((e) => {
            let n = e8[e];
            return (
                null == n ||
                "failed" === n.fetchState ||
                ("fetching" !== n.fetchState && (null == n.fetchedAt || t - n.fetchedAt >= 36e5))
            );
        });
    }
}
let e6 = new e4(e2.h, {
        DISCOVERABLE_GUILDS_FETCH_START: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e8[e] = { guild: e8[e]?.guild ?? null, fetchState: "fetching", fetchedAt: e8[e]?.fetchedAt ?? null };
        },
        DISCOVERABLE_GUILDS_FETCH_SUCCESS: function (e) {
            let { guildIds: t, guilds: n } = e,
                l = Date.now(),
                i = new Map(n.map((e) => [e.id, (0, eQ.jE)(e)]));
            for (let e of t) e8[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: l };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e8[e] = { guild: e8[e]?.guild ?? null, fetchState: "failed", fetchedAt: e8[e]?.fetchedAt ?? null };
        },
    }),
    e3 = new Map();
var e9 = n(927813);
let e5 = [];
function e7(e) {
    return e0.A.getGame(e)?.communityGuildIds ?? e5;
}
let te = (0, m.UT)(e6, {
    getQueryId: (e) => (e7(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => e6.getGuilds(e7(e)),
    load: async (e) => {
        let t = e7(e);
        t.length > 0 &&
            (await (async function (e) {
                let t = e6.getStaleGuildIds(e),
                    n = new Set();
                for (let t of e) {
                    let e = e3.get(t);
                    null != e && n.add(e);
                }
                if (t.length > 0) {
                    let e = (async function (e) {
                        e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
                        try {
                            let t = await e1.Bo.get({
                                    url: eE.Rsh.GUILD_DISCOVERY,
                                    query: { guild_ids: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }),
                                n = t.body?.guilds ?? [];
                            e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: n });
                        } catch (t) {
                            throw (e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
                        }
                    })(t).finally(() => {
                        for (let n of t) e3.get(n) === e && e3.delete(n);
                    });
                    for (let n of t) e3.set(n, e);
                    n.add(e);
                }
                await Promise.all(n);
            })(t));
    },
    staleAfter: e9.A.Seconds.HOUR,
    failureStaleAfter: e9.A.Seconds.MINUTE,
});
var tt = n(196765);
let tn = new Set(),
    tl = (0, tt.v)((e) => ({
        gameId: null,
        excludedLocales: tn,
        toggleLocale: (t, n) => {
            e((e) => {
                let l = new Set(e.gameId === t ? e.excludedLocales : tn);
                return (l.has(n) ? l.delete(n) : l.add(n), { gameId: t, excludedLocales: l });
            });
        },
    }));
function ti(e) {
    return tl((t) => (t.gameId === e ? t.excludedLocales : tn));
}
var ta = n(534514),
    tr = n(714991),
    ts = n(486020),
    to = n(240248);
function tc(e) {
    let { guildName: t, isMember: n, onClick: l, size: i, fullWidth: a } = e;
    return (0, r.jsx)(K.$, {
        variant: "secondary",
        size: i,
        fullWidth: a,
        text: n ? er.intl.string(er.t.cEnaWx) : er.intl.string(er.t.XpeFYr),
        "aria-label": n
            ? er.intl.formatToPlainString(er.t.lQqwQi, { guildName: t })
            : er.intl.formatToPlainString(er.t["8rL1QB"], { guildName: t }),
        onClick: l,
    });
}
var tu = n(799699),
    td = n(827085);
function tm(e) {
    let { className: t } = e;
    return (0, r.jsx)(tu.Ay, { className: u()(td.qV, t) });
}
function th(e) {
    let { presenceCount: t, memberCount: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("div", {
              className: td.kL,
              children: [
                  null != t &&
                      (0, r.jsxs)("div", {
                          className: td.U9,
                          children: [
                              (0, r.jsx)("i", { className: td._o }),
                              (0, r.jsx)(B.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: er.intl.format(er.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != n &&
                      (0, r.jsxs)("div", {
                          className: td.U9,
                          children: [
                              (0, r.jsx)("i", { className: td.jk }),
                              (0, r.jsx)(B.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: er.intl.format(er.t.zRl6XR, { count: n }),
                              }),
                          ],
                      }),
              ],
          });
}
var tg = n(213098);
function tx() {
    return (0, r.jsxs)(tu.qT, {
        className: tg.uW,
        animationDelayMs: 300,
        children: [
            (0, r.jsx)(tu.Ay, { className: tg.dU, width: "30%" }),
            (0, r.jsx)(tu.qT, {
                className: tg.nV,
                children: (0, r.jsxs)("div", {
                    className: tg.hQ,
                    children: [(0, r.jsx)(tf, {}), (0, r.jsx)(tu.pv, {})],
                }),
            }),
        ],
    });
}
function tf() {
    return (0, r.jsxs)("div", {
        className: tg.To,
        children: [
            (0, r.jsx)(tu.Ay, { className: tg.QV }),
            (0, r.jsxs)("div", {
                className: tg.Yv,
                children: [
                    (0, r.jsx)(tu.Ay, { className: tg.Ag }),
                    (0, r.jsx)(tu.Ay, { className: tg.zl }),
                    (0, r.jsx)(tm, { className: tg.P2 }),
                ],
            }),
        ],
    });
}
function tp(e) {
    let { guild: t } = e,
        n = ts.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        a = null != n && l !== n,
        o = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, r.jsxs)("div", {
        className: tg._C,
        children: [
            a && (0, r.jsx)(tu.Ay, { className: tg.EQ }),
            (0, r.jsx)("img", {
                className: tg.$f,
                src: n,
                alt: er.intl.formatToPlainString(er.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: o,
                onError: o,
            }),
        ],
    });
}
function tj(e) {
    let { guild: t, presenceCount: n, memberCount: l } = e;
    return (0, r.jsxs)("div", {
        className: tg.To,
        children: [
            (0, r.jsx)(tp, { guild: t }),
            (0, r.jsxs)("div", {
                className: tg.yj,
                children: [
                    (0, r.jsxs)("div", {
                        className: tg.YS,
                        children: [
                            (0, r.jsx)(tr.A, { guild: t, size: 16 }),
                            (0, r.jsx)(ta.D, {
                                className: tg.J5,
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, to.uJ)(t.description) &&
                        (0, r.jsx)(B.E, {
                            className: tg.h_,
                            variant: "body-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, r.jsx)(th, { presenceCount: n, memberCount: l }),
                ],
            }),
        ],
    });
}
function tv(e) {
    let { guild: t, presenceCount: n, memberCount: l, button: i, className: a } = e;
    return (0, r.jsx)("div", {
        className: u()(tg.kL, a),
        children: (0, r.jsxs)("div", {
            className: tg.hQ,
            children: [(0, r.jsx)(tj, { guild: t, presenceCount: n, memberCount: l }), i],
        }),
    });
}
function tb() {
    let {
            invite: e,
            hasDiscordWebsite: t,
            isCommunityInviteResolving: n,
            isMember: l,
            closeModal: i,
            trackAction: a,
        } = W(),
        o = s.useCallback(() => {
            null != e &&
                (a(k.Ws.JoinServer),
                i(),
                e2.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: e.code, context: eE.BRT.APP }));
        }, [e, a, i]);
    return null == e || null == e.guild
        ? t && n
            ? (0, r.jsx)(tx, {})
            : null
        : (0, r.jsxs)("div", {
              className: tg.uW,
              children: [
                  (0, r.jsx)(ta.D, {
                      className: tg.Gf,
                      variant: "body-md/medium",
                      color: "text-subtle",
                      children: er.intl.string(er.t["U2N+ci"]),
                  }),
                  (0, r.jsx)(tv, {
                      guild: e.guild,
                      presenceCount: e.approximate_presence_count,
                      memberCount: e.approximate_member_count,
                      button: (0, r.jsx)(tc, { guildName: e.guild.name, isMember: l, onClick: o, fullWidth: !0 }),
                  }),
              ],
          });
}
var tI = n(320448),
    tN = n(152594);
function tE(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, r.jsxs)("div", {
        className: tN.kL,
        "aria-busy": !0,
        children: [
            (0, r.jsxs)("div", {
                className: tN.wR,
                children: [(0, r.jsx)(tu.Ay, { className: tN.Iz, width: n }), l && (0, r.jsx)(tu.pv, { size: "sm" })],
            }),
            t,
        ],
    });
}
function ty(e) {
    let { children: t, title: n, onClickViewAll: l, trailing: i } = e;
    return (0, r.jsxs)("div", {
        className: tN.kL,
        children: [
            (0, r.jsxs)("div", {
                className: tN.wR,
                children: [
                    (0, r.jsx)(ta.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, r.jsx)(K.$, {
                            size: "sm",
                            icon: tI.ChevronSmallRightIcon,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: er.intl.string(er.t.budhsM),
                        }),
                    i,
                ],
            }),
            t,
        ],
    });
}
var tA = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tC = (0, tt.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tk = n(876798),
    tS = n(481901),
    tL = n(916099),
    tR = n(461353);
function tT() {
    let { layout: e, setLayout: t } = tC(),
        n = er.intl.string(er.t.VGRZh7),
        l = er.intl.string(er.t["NJFr+g"]);
    return (0, r.jsxs)("div", {
        className: tR.k,
        role: "group",
        "aria-label": er.intl.string(er.t.mFMDSq),
        children: [
            (0, r.jsx)(J.m, {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(tk.k, {
                    icon: tS.GridSquareIcon,
                    pressed: e === tA.GRID,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tA.GRID),
                }),
            }),
            (0, r.jsx)(J.m, {
                text: l,
                asContainer: !0,
                children: (0, r.jsx)(tk.k, {
                    icon: tL.ListBulletsIcon,
                    pressed: e === tA.LIST,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tA.LIST),
                }),
            }),
        ],
    });
}
var tM = n(37646),
    tO = n(846183);
function tw(e) {
    var t;
    let n,
        l,
        i,
        { locales: a, onClose: o } = e,
        { game: c } = W(),
        { options: u, toggleLocale: d } =
            ((t = c.id),
            (n = ti(t)),
            (l = tl((e) => e.toggleLocale)),
            (i = s.useMemo(() => {
                let e;
                return (
                    (e = (0, er.getAvailableLocales)()),
                    a
                        .map((t) => {
                            if ("en-US" === t) return { locale: t, label: er.intl.string(er.t.LQLMGP) };
                            let n = e.find((e) => {
                                let { value: n } = e;
                                return n === t;
                            });
                            return { locale: t, label: null != n ? er.intl.string(n.localizedName) : t };
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
        "aria-label": er.intl.string(er.t.OlOHDH),
        onClose: o,
        onSelect: void 0,
        children: u.map((e) => {
            let { locale: t, label: n, checked: l, disabled: i } = e;
            return (0, r.jsx)(X.sL, { id: t, label: n, checked: l, disabled: i, action: () => d(t) }, t);
        }),
    });
}
function tP(e) {
    let { locales: t } = e,
        n = s.useRef(null),
        l = er.intl.string(er.t.OlOHDH);
    return (0, r.jsx)("div", {
        className: tO.k,
        children: (0, r.jsx)(z.Y, {
            targetElementRef: n,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(tw, { locales: t, onClose: n });
            },
            children: (e) =>
                (0, r.jsx)(J.m, {
                    text: l,
                    asContainer: !0,
                    children: (0, r.jsx)(q.K, {
                        buttonRef: n,
                        icon: tM.LanguageIcon,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": l,
                        ...e,
                    }),
                }),
        }),
    });
}
var tV = n(939249),
    tD = n(762841);
function tG(e) {
    let { className: t, ariaLabel: n, onClick: l, children: i } = e;
    return (0, r.jsx)(tV.D, { className: u()(tD.v, t), onClick: l, "aria-label": n, children: i });
}
var t_ = n(759020);
function tW(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsxs)(tG, {
        className: t_.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, r.jsxs)("div", {
                className: t_.OA,
                children: [
                    (0, r.jsx)(tp, { guild: t }),
                    (0, r.jsxs)("div", {
                        className: t_.FS,
                        children: [
                            (0, r.jsxs)("div", {
                                className: t_.YS,
                                children: [
                                    (0, r.jsx)(tr.A, { guild: t, size: 16 }),
                                    (0, r.jsx)(ta.D, {
                                        className: t_.J5,
                                        variant: "heading-sm/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, to.uJ)(t.description) &&
                                (0, r.jsx)(B.E, {
                                    className: t_.h_,
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: t_.Rn, children: (0, r.jsx)(th, { presenceCount: n, memberCount: l }) }),
        ],
    });
}
var tF = n(620387);
function tU(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsx)(tu.qT, { className: tF.s7, animationDelayMs: t, children: (0, r.jsx)(tf, {}) });
}
function tB(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsxs)(tu.qT, {
        className: tF.fv,
        animationDelayMs: t,
        children: [
            (0, r.jsx)(tu.Ay, { className: tF.VR }),
            (0, r.jsxs)("div", {
                className: tF.hG,
                children: [
                    (0, r.jsx)(tu.Ay, { className: tF.t_ }),
                    (0, r.jsx)(tu.Ay, { className: tF.Aj }),
                    (0, r.jsx)(tu.Ay, { className: tF.ax }),
                ],
            }),
            (0, r.jsx)(tu.Ay, { className: tF.Ah }),
        ],
    });
}
function tY(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsx)(tG, {
        className: tF.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, r.jsx)(tj, { guild: t, presenceCount: n, memberCount: l }),
    });
}
function tz(e) {
    let { guild: t, layout: n } = e,
        { game: l, closeModal: i, trackAction: a, viewId: o } = W(),
        c = (0, m.bG)([eJ.A], () => eJ.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = s.useCallback(async () => {
            (a(k.Ws.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await eQ.Z2(t.id, {}, { joinSource: eE.Q4z.GAME_PROFILE_COMMUNITIES, loadId: o }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, e$._)(e);
                return;
            }
            let e = eq.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                eZ.default.setGameProfilePendingReturn({
                    gameId: l.id,
                    channelId: e,
                    tab: S.COMMUNITIES,
                    source: k.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, o, l.id]),
        d = n === tA.LIST ? tW : tY;
    return (0, r.jsx)(d, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        ariaLabel: c
            ? er.intl.formatToPlainString(er.t.AEfs1D, { guildName: t.name })
            : er.intl.formatToPlainString(er.t.TUZ50q, { guildName: t.name }),
        onClick: u,
    });
}
function tH() {
    var e;
    let t,
        n,
        { game: l } = W(),
        { data: i, isLoading: a } = te(l.id),
        o = tC((e) => e.layout),
        {
            locales: c,
            filteredGuilds: u,
            showLocaleFilter: d,
        } = ((e = l.id),
        (t = ti(e)),
        {
            locales: (n = s.useMemo(() => eX().uniq((i ?? []).map((e) => e.preferredLocale).filter(eI.Vq)), [i])),
            filteredGuilds: s.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: n.length >= 2,
        }),
        m = o === tA.LIST,
        h = m ? tB : tU,
        g = a && (null == i || 0 === i.length);
    return (0, r.jsxs)(eK.Ch, {
        className: tF.XG,
        children: [
            (0, r.jsx)("div", { className: tF.xY, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: tF.uW,
                children: (0, r.jsx)(ty, {
                    title: er.intl.string(er.t.r6bvTh),
                    trailing: (0, r.jsxs)("div", {
                        className: tF.AA,
                        children: [d && (0, r.jsx)(tP, { locales: c }), (0, r.jsx)(tT, {})],
                    }),
                    children: (0, r.jsx)("div", {
                        className: m ? tF.p_ : tF.Vg,
                        children: g
                            ? eX()
                                  .range(8)
                                  .map((e) => (0, r.jsx)(h, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, r.jsx)(tz, { guild: e, layout: o }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var tX = n(707554),
    tK = n(369606),
    t$ = n(775602),
    tJ = n(21161),
    tq = n(400492),
    tQ = n(541830),
    tZ = n(459746);
let t0 = "1552821538409939044";
var t1 = n(175213);
let t2 = n(892799);
function t8(e) {
    let { ref: t } = e,
        { game: n } = W(),
        l = (function (e) {
            let [t] = s.useState(() => Math.random());
            return s.useMemo(() => {
                let n = e.getBannerURL(1400);
                if (null != n) return n;
                let l = e.screenshotUrls?.length ?? 0;
                return 0 === l ? null : e.getScreenshotURL(Math.floor(t * l), 1400);
            }, [1400, e, t]);
        })(n);
    return (0, to.uJ)(l)
        ? null
        : (0, r.jsxs)("div", {
              ref: t,
              children: [
                  (0, r.jsx)("div", { className: t1.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, r.jsx)("div", { className: t1.N4 }),
              ],
          });
}
function t4() {
    let { game: e } = W(),
        t = (e.genres ?? []).map(tQ.du).join(", ");
    return (0, to.uJ)(t) ? null : (0, r.jsx)(B.E, { variant: "body-md/normal", color: "text-muted", children: t });
}
function t6(e) {
    let { rank: t } = e;
    return (0, r.jsxs)("div", {
        className: t1.Qc,
        children: [
            (0, r.jsx)(tK.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, r.jsx)(B.E, {
                variant: "body-xs/semibold",
                color: "none",
                children: er.intl.formatToPlainString(er.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t3() {
    return (0, r.jsx)(t9, { className: t1._M, imageClassName: t1.xe });
}
function t9(e) {
    let { className: t, imageClassName: n } = e,
        { game: l } = W(),
        i = (0, r.jsx)(tZ.Ay, { game: l, className: n, size: tZ.wu.LARGE });
    return l.id !== t0
        ? (0, r.jsx)("div", { className: t, children: i })
        : (0, r.jsx)(t5, { className: t, children: i });
}
function t5(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(tJ.x),
        i = (0, m.bG)([t$.Ay], () => t$.Ay.useReducedMotion),
        a = s.useRef({ count: 0, lastTime: 0 });
    return (0, r.jsx)(tV.D, {
        className: u()(n, t1.b3),
        "aria-label": er.intl.string(er.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = a.current,
                r = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((a.current = { count: r, lastTime: t }), 3 === r)) {
                if (((a.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tq.Ak)("discodo");
            }
        },
        children: t,
    });
}
let t7 = function () {
    let { game: e, isTwoColumn: t } = W(),
        n = e.name;
    return (0, r.jsxs)("div", {
        className: t1.ap,
        children: [
            t && (0, r.jsx)(t9, { className: t1.Tf, imageClassName: t1.w$ }),
            (0, r.jsxs)("div", {
                className: t1.lu,
                children: [
                    null != e.l30Rank && (0, r.jsx)(t6, { rank: e.l30Rank }),
                    (0, r.jsxs)("div", {
                        className: t1.$,
                        children: [
                            (0, r.jsx)(ta.D, { variant: "heading-xxl/semibold", children: n }),
                            e.id === t0 &&
                                (0, r.jsx)("img", {
                                    src: t2,
                                    className: t1.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, r.jsx)(t4, {}),
                ],
            }),
        ],
    });
};
var ne = n(638495),
    nt = n(871123),
    nn = n(439303),
    nl = n(44724),
    ni = n(317560),
    na = n(869099),
    nr = n(151869),
    ns = n(761812);
function no(e) {
    return e;
}
function nc(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ns.B, children: t });
}
function nu(e) {
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
        : (0, r.jsx)(nr.A, {
              gap: "md",
              "aria-label": `${er.intl.string(er.t["kocF+6"])}`,
              items: t,
              getItemKey: no,
              disableFocusRingScope: !0,
              renderItem: (e, t, l) =>
                  (0, r.jsx)(nc, {
                      children: (0, r.jsx)(na.Ay, {
                          positionInSection: l,
                          skuId: e,
                          variant: na.s6.SMALL,
                          analyticsLocations: n,
                          onClick: i,
                          listItemProps: t,
                      }),
                  }),
          });
}
var nd = n(326369),
    nm = n(936785),
    nh = n(403581),
    ng = n(812095),
    nx = n(647474),
    nf = n(162536);
function np(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, eG.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        a = i ? nh.NitroWheelIcon : t.Icon;
    return (0, r.jsx)(nx.A, {
        className: u()(nf.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, r.jsxs)("div", {
            className: nf.Qs,
            children: [
                null != a && (0, r.jsx)(a, { size: "xs", color: "currentColor", className: nf.Kk }),
                (0, r.jsx)(B.E, { variant: "body-sm/normal", color: "currentColor", children: (0, ng.U)(t.text) }),
            ],
        }),
    });
}
var nj = n(521058);
function nv() {
    let { storefrontPromotion: e } = W();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, to.uJ)(a.headerText)) return null;
    let s = {
        Icon: (0, nm.LZ)(l?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, nm.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, r.jsx)(np, { className: nj.v, promotion: s });
}
let nb = [0, 1, 2, 3],
    nI = { placement: nn.Ye.GAME_PROFILE };
function nN() {
    return (0, r.jsx)(tE, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, r.jsx)(nd.A, { children: nb.map((e) => (0, r.jsx)(nc, { children: (0, r.jsx)(na.yf, {}) }, e)) }),
    });
}
function nE(e) {
    let { selectTab: t } = e,
        n = (0, ne.k)(),
        {
            trackAction: l,
            socialLayerStorefrontRecommendationsData: i,
            socialLayerStorefrontRecommendationsLoading: a,
            hasCommerceTab: o,
            closeModal: c,
        } = W(),
        { analyticsLocations: u } = (0, p.Ay)([f.A.GAME_PROFILE]),
        d = s.useCallback(() => {
            if (i?.application != null) {
                if (o) return void t(S.COMMERCE);
                (l(k.Ws.GameShop), c(), (0, nl.default)({ applicationId: i.application.id }));
            }
        }, [i, l, o, t, c]),
        m = s.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (l(k.Ws.GameShopItem),
                    (0, ni.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: n,
                        onClose: () => {
                            let { pathname: e, search: n } = location;
                            (0, nt.rG)(e, n, t, a) && c();
                        },
                    }));
            },
            [l, c, u, i, n],
        );
    if (a) return (0, r.jsx)(nN, {});
    if (null == i) return null;
    let { skuIds: h } = i;
    return (0, r.jsxs)(ty, {
        title: er.intl.string(er.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, r.jsx)(nv, {}),
            (0, r.jsx)(nn.E9, {
                newValue: nI,
                children: (0, r.jsx)(nu, { skuIds: h, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var ny = n(621466),
    nA = n(710793),
    nC = n(346055),
    nk = n(460905),
    nS = n(776231),
    nL = n(46054),
    nR = n(5377),
    nT = n(890060),
    nM = n(880405),
    nO = n(284009),
    nw = n.n(nO),
    nP = n(574332),
    nV = n(976860);
async function nD(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    nw()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let o = eJ.A.getGuild(n);
    if (o?.joinedAt == null)
        if (null == s || s.has(eE.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eQ.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eE.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await nP.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, nV.pX)(eE.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var nG = n(806244),
    n_ = n(165648);
function nW(e, t) {
    return nL.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function nF(e) {
    return e.id;
}
function nU() {
    return (0, r.jsxs)(tu.qT, {
        className: nG.s7,
        children: [
            (0, r.jsx)(tu.Ay, { className: nG.XN }),
            (0, r.jsxs)("div", {
                className: nG.UF,
                children: [(0, r.jsx)(tu.Ay, { className: nG.iX }), (0, r.jsx)(tu.Ay, { className: nG.jt })],
            }),
        ],
    });
}
function nB(e, t) {
    let n = (0, nS.kr)(364 * (0, nS.mZ)());
    return (0, nT.VZ)(e, n, Math.round(n / t)) ?? e;
}
function nY(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, a] = s.useState(!1),
        o = s.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, r.jsx)(nA.y, {
              readyState: i ? eE.Rv1.READY : eE.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, r.jsx)("img", {
                  src: n,
                  className: nG.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: o,
              }),
          });
}
function nz(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, ny.vq)(e.target, HTMLAnchorElement) ||
                        ((0, ny.vq)(e.target, HTMLSpanElement) && (0, ny.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        d = null != c ? nB(c, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, r.jsx)(tV.D, {
              ...i,
              className: nG.Nr,
              onClick: a,
              children: (0, r.jsxs)(nC.M, {
                  className: nG.zI,
                  children: [
                      null != m.url &&
                          (0, r.jsx)(B.E, {
                              variant: "body-xs/medium",
                              color: "text-link",
                              className: nG.Ow,
                              children: m.url,
                          }),
                      (0, r.jsxs)("div", {
                          className: nG._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, r.jsxs)("div", {
                                      className: nG.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, r.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: nG.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, r.jsx)(B.E, {
                                              variant: "body-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, r.jsx)("div", {
                                      className: nG.ax,
                                      children: (0, r.jsx)(nY, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, r.jsx)(ta.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-strong",
                                      className: nG.DD,
                                      children: nW(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, r.jsxs)("div", {
                                      className: u()(nG.h_, n_.PT),
                                      children: [
                                          (0, r.jsx)(B.E, {
                                              variant: "body-sm/medium",
                                              color: "none",
                                              tag: "div",
                                              children: nW(t.body, n),
                                          }),
                                          (0, r.jsx)("div", { className: nG.fm }),
                                      ],
                                  }),
                              (0, r.jsxs)("div", {
                                  className: nG.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, r.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: nG.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, r.jsxs)(B.E, {
                                          variant: "body-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, nR.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, r.jsxs)("div", {
                                              className: nG.a5,
                                              children: [
                                                  (0, r.jsx)(nk.ReactionIcon, { size: "xs", color: "currentColor" }),
                                                  (0, r.jsx)(B.E, {
                                                      variant: "body-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(er.intl.currentLocale).format(
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
let nH = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, r.jsxs)(nC.M, {
        className: nG.zI,
        children: [
            null != t.title &&
                (0, r.jsx)(ta.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: nG.DD,
                    children: nW(t.title, n),
                }),
            t.body.length > 0 &&
                (0, r.jsxs)("div", {
                    className: u()(nG.h_, n_.PT),
                    children: [
                        (0, r.jsx)(B.E, {
                            variant: "body-sm/medium",
                            color: "none",
                            tag: "div",
                            children: nW(t.body, n),
                        }),
                        (0, r.jsx)("div", { className: nG.fm }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: nG.ov,
                children: [
                    (0, r.jsx)(B.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        children: (0, nR.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, r.jsxs)("div", {
                            className: nG.a5,
                            children: [
                                (0, r.jsx)(nk.ReactionIcon, { size: "xs", color: "currentColor" }),
                                (0, r.jsx)(B.E, {
                                    variant: "body-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(er.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function nX(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, ny.vq)(e.target, HTMLAnchorElement) ||
                        ((0, ny.vq)(e.target, HTMLSpanElement) && (0, ny.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        u = null != c ? nB(c, o) : void 0;
    return (0, r.jsxs)(tV.D, {
        ...i,
        className: nG.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, r.jsx)("div", {
                    className: nG.Vl,
                    children: (0, r.jsx)(nY, { message: t, src: u, aspectRatio: o }),
                }),
            (0, r.jsx)(nH, { message: t, channelId: n }),
        ],
    });
}
function nK(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        a = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, r.jsx)(tV.D, {
        ...l,
        className: nG.Nr,
        onClick: a,
        children: (0, r.jsxs)(nC.M, {
            className: nG.zI,
            children: [
                (0, r.jsx)(ta.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: nG.MH,
                    children: i.question.text,
                }),
                (0, r.jsxs)("div", {
                    className: nG.xd,
                    children: [
                        o.map((e) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className: nG.Nf,
                                    children: (0, r.jsx)(B.E, {
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        className: nG.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        c > 0 &&
                            (0, r.jsx)(B.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                className: nG.PF,
                                children: er.intl.format(er.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: nG.ov,
                    children: (0, r.jsx)(B.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        children: er.intl.format(er.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, nT.jL)(i),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function n$(e) {
    return null != e.message.poll
        ? (0, r.jsx)(nK, { ...e })
        : null != e.message.embedSource
          ? (0, r.jsx)(nz, { ...e })
          : (0, r.jsx)(nX, { ...e });
}
let nJ = s.memo(function (e) {
    let { getScrollOffset: t } = e,
        { analyticsLocations: n } = (0, p.Ay)(),
        { game: l, invite: i, hasDiscordWebsite: a, closeModal: o, trackAction: c } = W(),
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
            } = (0, m.cf)([L.A], () => ({
                data: null != e ? L.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && L.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && L.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || n || L.A.isAnnouncementsFetching(e) || (0, nM.Rf)(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(u),
        j = s.useCallback(() => {
            let e = i?.guild?.id ?? h;
            null != e &&
                null != g &&
                (c(k.Ws.Announcements),
                eZ.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                o(),
                nD({ invite: i, guildId: e, channelId: g, analyticsLocationStack: n }));
        }, [c, o, t, i, h, g, n, u]),
        v = s.useCallback(
            (e) => {
                let l = i?.guild?.id ?? h;
                null != l &&
                    null != g &&
                    (c(k.Ws.AnnouncementsItem),
                    eZ.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                    o(),
                    nD({ invite: i, guildId: l, channelId: g, messageId: e, analyticsLocationStack: n }));
            },
            [c, o, t, i, h, g, n, u],
        ),
        b = null != g && d.length > 0;
    return (!f || x) && a
        ? (0, r.jsx)(tE, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, r.jsx)(nd.A, {
                  gap: 16,
                  children: eX()
                      .range(3)
                      .map((e) => (0, r.jsx)(nU, {}, e)),
              }),
          })
        : b
          ? (0, r.jsx)(ty, {
                title: er.intl.string(er.t.B0BV3Y),
                onClickViewAll: j,
                children: (0, r.jsx)(nr.A, {
                    gap: 16,
                    items: d,
                    getItemKey: nF,
                    itemClassName: nG.hu,
                    renderItem: (e, t) =>
                        (0, r.jsx)(n$, { message: e, channelId: g, onCardClick: v, listItemProps: t }, e.id),
                }),
            })
          : null;
});
var nq = n(155718),
    nQ = n(505779);
(n(323874), n(14289), n(35956));
var nZ = n(989441);
let n0 = {
        appStore: {
            websiteCategories: [nQ.V1.IPHONE, nQ.V1.IPAD],
            websiteHostnames: nQ.FU,
            distributor: nZ.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://${nQ.FU["0"]}/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [nQ.V1.ANDROID],
            websiteHostnames: nQ.SX,
            distributor: nZ.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://${nQ.SX["0"]}/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    n1 = new Set(
        Object.values(n0).flatMap((e) => {
            let { websiteCategories: t } = e;
            return t;
        }),
    );
function n2(e, t) {
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
var n8 = n(808380);
let n4 = [n8.Y.DESKTOP, "mobile", n8.Y.XBOX, n8.Y.PLAYSTATION, n8.Y.NINTENDO, n8.Y.ROBLOX];
var n6 = n(28863),
    n3 = n(975807),
    n9 = n(194362);
function n5() {
    let { game: e, trackAction: t } = W(),
        n = s.useCallback(async () => {
            t(k.Ws.ClaimGame);
            let e = await (0, n9.a)(eE.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, n3.A)(e);
        }, [t]),
        l = s.useCallback((e) => (0, r.jsx)(n6.Anchor, { onClick: n, children: e }), [n]);
    return e.linkedApplications?.some((e) => e.type === nq.Mh.OFFICIAL)
        ? null
        : (0, r.jsx)(B.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              children: er.intl.format(er.t.KAjfKl, { claimLink: l }),
          });
}
var n7 = n(998445),
    le = n(274997),
    lt = n(80500),
    ln = n(319745),
    ll = n(488225),
    li = n(967492),
    la = n(72265),
    lr = n(454346),
    ls = n(341904),
    lo = n(423438),
    lc = n(610509),
    lu = n(575888),
    ld = n(924895),
    lm = n(37948),
    lh = n(471177);
let lg = { size: "xs", colorClass: lh.w };
function lx(e) {
    let { website: t } = e,
        { trackAction: n } = W(),
        l = (0, lm.A)(),
        {
            action: i,
            icon: a,
            title: o,
        } = (function (e, t) {
            switch (e.category) {
                case nQ.V1.OFFICIAL:
                    return {
                        icon: (0, r.jsx)(n7.GlobeEarthIcon, { ...t }),
                        action: k.Ws.WebsiteLink,
                        title: er.intl.string(er.t.fOUKvg),
                    };
                case nQ.V1.TWITTER:
                    return {
                        icon: (0, r.jsx)(le.XNeutralIcon, { ...t }),
                        action: k.Ws.XLink,
                        title: er.intl.string(er.t.INic4y),
                    };
                case nQ.V1.YOUTUBE:
                    return {
                        action: k.Ws.YouTubeLink,
                        icon: (0, r.jsx)(lt.YoutubeNeutralIcon, { ...t }),
                        title: er.intl.string(er.t.lNmxbE),
                    };
                case nQ.V1.FACEBOOK:
                    return {
                        icon: (0, r.jsx)(ln.FacebookNeutralIcon, { ...t }),
                        action: k.Ws.FacebookLink,
                        title: er.intl.string(er.t.FjyREK),
                    };
                case nQ.V1.INSTAGRAM:
                    return {
                        icon: (0, r.jsx)(ll.InstagramNeutralIcon, { ...t }),
                        action: k.Ws.InstagramLink,
                        title: er.intl.string(er.t["cgR+IK"]),
                    };
                case nQ.V1.BLUESKY:
                    return {
                        icon: (0, r.jsx)(li.BlueskyNeutralIcon, { ...t }),
                        action: k.Ws.BlueskyLink,
                        title: er.intl.string(er.t["D/PHq5"]),
                    };
                case nQ.V1.REDDIT:
                    return {
                        icon: (0, r.jsx)(la.RedditNeutralIcon, { ...t }),
                        action: k.Ws.RedditLink,
                        title: er.intl.string(er.t["Hgb+fc"]),
                    };
                case nQ.V1.TWITCH:
                    return {
                        icon: (0, r.jsx)(lr.TwitchNeutralIcon, { ...t }),
                        action: k.Ws.TwitchLink,
                        title: er.intl.string(er.t["7xtz4G"]),
                    };
                case nQ.V1.ITCH:
                    return {
                        icon: (0, r.jsx)(ls.ItchNeutralIcon, { ...t }),
                        action: k.Ws.ItchLink,
                        title: er.intl.string(er.t.nOrtg9),
                    };
                case nQ.V1.WIKIA:
                    return {
                        icon: (0, r.jsx)(lo.FandomNeutralIcon, { ...t }),
                        action: k.Ws.FandomLink,
                        title: er.intl.string(er.t.xDtQAQ),
                    };
                case nQ.V1.IPHONE:
                case nQ.V1.IPAD:
                    return {
                        icon: (0, r.jsx)(lc.AppleNeutralIcon, { ...t }),
                        action: k.Ws.AppStoreLink,
                        title: er.intl.string(er.t.LVy7Ug),
                    };
                case nQ.V1.ANDROID:
                    return {
                        icon: (0, r.jsx)(lu.GooglePlayNeutralIcon, { ...t }),
                        action: k.Ws.GooglePlayStoreLink,
                        title: er.intl.string(er.t.V6rllO),
                    };
                case nQ.V1.ROBLOX:
                    return {
                        icon: (0, r.jsx)(ld.RobloxNeutralIcon, { ...t }),
                        action: k.Ws.RobloxStoreLink,
                        title: er.intl.string(er.t["pJ+P+h"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, lg),
        c = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, r.jsx)(J.m, {
        text: o,
        children: (0, r.jsx)(tV.D, { onClick: c, className: lh.y, title: o, children: a }),
    });
}
var lf = n(31300),
    lp = n(646270),
    lj = n(802516),
    lv = n(22363),
    lb = n(418524);
let lI = {
    [n8.Y.DESKTOP]: lf.ScreenIcon,
    mobile: lp.MobilePhoneIcon,
    [n8.Y.XBOX]: lj.XboxNeutralIcon,
    [n8.Y.PLAYSTATION]: lv.PlaystationNeutralIcon,
    [n8.Y.NINTENDO]: lb.NintendoSwitchNeutralIcon,
    [n8.Y.ROBLOX]: ld.RobloxNeutralIcon,
};
function lN(e) {
    let { platform: t } = e,
        n = (function (e) {
            switch (e) {
                case n8.Y.DESKTOP:
                    return er.intl.string(er.t.KT6uCJ);
                case "mobile":
                    return er.intl.string(er.t["0DvssQ"]);
                case n8.Y.XBOX:
                    return er.intl.string(er.t.DDWUJp);
                case n8.Y.PLAYSTATION:
                    return er.intl.string(er.t.fzMz2s);
                case n8.Y.NINTENDO:
                    return er.intl.string(er.t.AMW8je);
                case n8.Y.ROBLOX:
                    return er.intl.string(er.t.MPURhG);
            }
        })(t),
        l = lI[t];
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
var lE = n(424994),
    ly = n(623828);
function lA() {
    return (0, r.jsx)(B.E, { variant: "body-sm/normal", color: "text-subtle", children: er.intl.string(er.t.GruYxV) });
}
let lC = function () {
    let { game: e } = W(),
        t = s.useMemo(() => e.genres.map(tQ.du).join(", "), [e]),
        n = e.getCompanyByRole(nq.wk.PUBLISHER),
        l = e.getCompanyByRole(nq.wk.DEVELOPER),
        i = n.map((e) => e.name).join(", "),
        a = l.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        c = s.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(n8.Y.MACOS) || t.has(n8.Y.LINUX)) && t.add(n8.Y.DESKTOP);
            let n = t.has(n8.Y.IOS) || t.has(n8.Y.ANDROID);
            return n4.filter((e) => ("mobile" === e ? n : t.has(e)));
        }, [e.platforms]),
        u = s.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return nQ.pF.includes(t) && !n1.has(t);
                }),
                n = Object.values(n0)
                    .map((t) => n2(e, t))
                    .filter(eI.Vq);
            return t.sort((e, t) => nQ.pF.indexOf(e.category) - nQ.pF.indexOf(t.category)).concat(n);
        }, [e]),
        d = !(0, to.uJ)(t),
        m = !(0, to.uJ)(i),
        h = !(0, to.uJ)(a),
        g = !(0, to.uJ)(o),
        x = c.length > 0,
        f = u.length > 0 && !u.every((e) => (0, to.uJ)(e.url));
    return (0, r.jsxs)("div", {
        className: ly.uW,
        children: [
            (0, r.jsx)("div", {
                className: ly.Gf,
                children: (0, r.jsx)(ta.D, {
                    variant: "body-md/medium",
                    color: "text-subtle",
                    children: er.intl.string(er.t["7OjmmH"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: ly.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: ly.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? er.intl.string(er.t.pDgwYB) : er.intl.string(er.t.mjFKqn),
                            }),
                            d
                                ? (0, r.jsx)(B.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: ly.Gu,
                                      children: t,
                                  })
                                : (0, r.jsx)(lA, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ly.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? er.intl.string(er.t.Hc7Enk) : er.intl.string(er.t["4Byy/G"]),
                            }),
                            m
                                ? (0, r.jsx)(B.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: ly.Gu,
                                      children: i,
                                  })
                                : (0, r.jsx)(lA, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ly.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== l.length ? er.intl.string(er.t.KATEJB) : er.intl.string(er.t.na3PT0),
                            }),
                            h
                                ? (0, r.jsx)(B.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: ly.Gu,
                                      children: a,
                                  })
                                : (0, r.jsx)(lA, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ly.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: er.intl.string(er.t.H3mPDT),
                            }),
                            g
                                ? (0, r.jsx)(B.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: ly.Gu,
                                      children: nR.i$(new Date(o), "LL"),
                                  })
                                : (0, r.jsx)(lA, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ly.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: c.length > 1 ? er.intl.string(er.t.PNqxNe) : er.intl.string(er.t["UxAag+"]),
                            }),
                            x
                                ? (0, r.jsx)("div", {
                                      className: ly.Gu,
                                      children: c.map((e) => (0, r.jsx)(lN, { platform: e }, e)),
                                  })
                                : (0, r.jsx)(lA, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ly.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: er.intl.string(er.t["Oj3o1/"]),
                            }),
                            f
                                ? (0, r.jsx)("div", {
                                      className: ly.Gu,
                                      children: u.map((e) => (0, r.jsx)(lx, { website: e }, e.url)),
                                  })
                                : (0, r.jsx)(lA, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ly.J1,
                        children: [
                            (0, r.jsx)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: er.intl.string(er.t["BwQ+9e"]),
                            }),
                            (0, r.jsx)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                className: ly.Gu,
                                children: er.intl.format(er.t.XPFZVl, { igdbLink: lE.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: ly.OQ, children: (0, r.jsx)(n5, {}) }),
        ],
    });
};
var lk = n(141628),
    lS = n(289363),
    lL = n(793919);
function lR() {
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: lL.uW,
        children: [
            (0, r.jsx)(tu.Ay, { className: lL.dU, width: "30%" }),
            (0, r.jsxs)(tu.qT, {
                className: lL.nV,
                children: [
                    (0, r.jsx)("div", { className: lL.sB, children: (0, r.jsx)(lS.default, { isLoading: !0 }) }),
                    (0, r.jsxs)("div", {
                        className: lL.hQ,
                        children: [
                            (0, r.jsxs)("div", {
                                className: lL.Yv,
                                children: [(0, r.jsx)(tu.Ay, { width: "55%" }), (0, r.jsx)(tu.Ay, { width: "85%" })],
                            }),
                            (0, r.jsx)(tu.pv, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function lT(e) {
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
        } = W(),
        h = (0, m.bG)([G.default], () => G.default.getCurrentUser()),
        g = s.useCallback(() => {
            (n(k.Ws.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !u || d || null == h
        ? null
        : null == c || (a && !l)
          ? (0, r.jsx)(lR, {})
          : !a || i
            ? null
            : (0, r.jsxs)("div", {
                  className: lL.uW,
                  children: [
                      (0, r.jsx)(ta.D, {
                          className: lL.Gf,
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: er.intl.string(er.t["VDAhr+"]),
                      }),
                      (0, r.jsxs)("div", {
                          className: lL.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: lL.sB,
                                  children: (0, r.jsx)(lS.default, { application: c }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: lL.hQ,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: lL.FS,
                                          children: [
                                              (0, r.jsx)(ta.D, {
                                                  variant: "heading-sm/semibold",
                                                  color: "text-default",
                                                  children: er.intl.formatToPlainString(er.t.hUbQT2, {
                                                      gameName: c.name,
                                                  }),
                                              }),
                                              (0, r.jsx)(B.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-muted",
                                                  children: er.intl.string(er.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(K.$, {
                                          variant: "secondary",
                                          icon: lk.ExperimentalGameControllerLinkIcon,
                                          text: er.intl.string(er.t.jynBQ5),
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
var lM = n(80687),
    lO = n(248643),
    lw = n(256905),
    lP = n(383055),
    lV = n(191096),
    lD = n(90721),
    lG = n(371794),
    l_ = n(534573),
    lW = n(635377);
let lF = new (n.n(lW)())({ max: 100 });
function lU() {
    let e = new Map();
    return (lF.forEach((t, n) => e.set(n, t)), e);
}
var lB = n(342857);
function lY(e, t) {
    return (0, l_.Ec)(e, { size: t, keepAspectRatio: !0, format: ts.QB ? "webp" : null });
}
let lz = s.memo(function (e) {
    let { url: t, size: n, alt: l, className: i, ...a } = e,
        { dimensions: o, recordDimensions: c } = (function () {
            let [e, t] = s.useState(lU);
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
                        let i = lF.get(e) ?? l;
                        (lF.set(e, i),
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
        g = s.useCallback((e) => h(e.currentTarget), [h]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m && (0, r.jsx)("img", { ...a, src: lY(t, 106), className: lB.cL, alt: "", draggable: !1 }),
            (0, r.jsx)("img", {
                ...a,
                ref: h,
                src: lY(t, n),
                className: u()(i, lB.Sl, m && lB.F1),
                "data-portrait": m || void 0,
                alt: l,
                onLoad: g,
            }),
        ],
    });
});
var lH = n(140128);
function lX(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
let lK = s.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: i, onSelect: a, gameName: o, listItemProps: c } = e,
            d = s.useCallback(() => a(n), [a, n]),
            m = c?.tabIndex;
        return (0, r.jsx)(tV.D, {
            ...c,
            className: u()(lH.JS, l && lH.Y4),
            onClick: d,
            children: (0, r.jsxs)("div", {
                className: lH.ub,
                children: [
                    (0, r.jsx)("div", {
                        className: lH.kV,
                        children: (0, r.jsx)(lz, {
                            url: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                            size: 106,
                            className: lH.xn,
                            alt: er.intl.formatToPlainString(er.t.COYYrn, { game: o }),
                            loading: "lazy",
                            decoding: "async",
                            draggable: !1,
                        }),
                    }),
                    "VIDEO" === t.type &&
                        (0, r.jsx)("div", {
                            className: lH.UZ,
                            children: (0, r.jsx)(lM.D, { playing: l && i, size: "sm", tabIndex: m }),
                        }),
                ],
            }),
        });
    }),
    l$ = s.memo(function (e) {
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
            (0, lD.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    !n && (0, r.jsx)("canvas", { ref: d, className: lH.HW, "aria-hidden": "true" }),
                    (0, r.jsx)("div", {
                        className: lH.tN,
                        children: (0, r.jsx)(lO.A, {
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
                            renderLinkComponent: lP.bU,
                            onPlay: o,
                            onPause: c,
                            onFullscreenChange: u,
                            mediaPlayerClassName: lH.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function lJ() {
    let { game: e, trackAction: t } = W(),
        [n, l] = s.useState(0),
        [i, a] = s.useState(null),
        [o, c] = s.useState(e.screenshotUrls),
        d = s.useRef(null),
        h = s.useRef(null),
        g = (0, m.bG)([t$.Ay], () => t$.Ay.useReducedMotion),
        { obscured: x } = (0, lV.I3)();
    o !== e.screenshotUrls && (c(e.screenshotUrls), l(0));
    let f = s.useMemo(() => {
            let t = (e.trailers ?? []).map((e) => {
                    let t = (0, lG.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, lG.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                n = (e.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" }));
            return [...t, ...n];
        }, [e.trailers, e.screenshotUrls]),
        p = s.useMemo(() => f.map((e, t) => ({ item: e, index: t })), [f]),
        j = f.length > 0 ? Math.min(n, f.length - 1) : 0,
        v = f[j],
        b = v?.type === "VIDEO",
        I = s.useCallback(
            (e) => {
                let t = f[j],
                    n = f[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? a(t.url) : a(null), l(e));
            },
            [f, j],
        ),
        [N, E] = s.useState(!1),
        y = s.useRef(null),
        A = s.useCallback(() => {
            t(b ? k.Ws.ClickTrailer : k.Ws.ClickImage);
            let e = d.current,
                n = y.current,
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
            (0, lw.R)({
                items: s,
                startingIndex: j,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: l,
                onClose: () => {
                    let e = h.current,
                        t = y.current,
                        n = null != e ? !e.paused : i;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        E(n));
                },
            });
        }, [t, f, j, b]),
        C = s.useCallback(() => E(!0), []),
        S = s.useCallback(() => E(!1), []),
        L = s.useCallback(() => a(null), []),
        R = s.useCallback(
            (e) => {
                e && A();
            },
            [A],
        );
    return 0 === f.length
        ? null
        : (0, r.jsxs)("div", {
              className: lH.kL,
              children: [
                  b
                      ? (0, r.jsx)("div", {
                            className: lH.ND,
                            children: (0, r.jsx)(
                                l$,
                                {
                                    item: v,
                                    reducedMotion: g,
                                    autoPlay: !g && !x,
                                    videoRef: d,
                                    mediaPlayerRef: y,
                                    onPlay: C,
                                    onPause: S,
                                    onFullscreenChange: R,
                                },
                                `${j}-${v.url}`,
                            ),
                        })
                      : (0, r.jsxs)("div", {
                            className: lH.wp,
                            children: [
                                null != i &&
                                    !g &&
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: lH.Jy,
                                            onAnimationEnd: L,
                                            children: (0, r.jsx)(lz, { url: i, size: 900, className: lH.c8, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, r.jsx)("div", { className: lH.QN }),
                                (0, r.jsx)(tV.D, {
                                    className: lH.gv,
                                    onClick: A,
                                    children: (0, r.jsx)("div", {
                                        className: lH.cs,
                                        children: (0, r.jsx)(
                                            lz,
                                            {
                                                url: v.url,
                                                size: 900,
                                                className: u()(lH.c8, lH.Jf),
                                                alt: er.intl.formatToPlainString(er.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  (0, r.jsx)(nr.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      items: p,
                      getItemKey: lX,
                      renderItem: (t, n) => {
                          let { item: l, index: i } = t;
                          return (0, r.jsx)(
                              lK,
                              {
                                  item: l,
                                  index: i,
                                  isPlaying: N,
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
var lq = n(49381),
    lQ = n(223273);
function lZ(e, t, n) {
    if (null == e || null == t || t < 10) return lQ.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? lQ.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? lQ.vI.VERY_POSITIVE
              : lQ.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return lQ.vI.MOSTLY_POSITIVE;
    if (e >= 40) return lQ.vI.MIXED;
    if (e >= 20) return lQ.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return lQ.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return lQ.vI.VERY_NEGATIVE;
    return lQ.vI.OVERWHELMINGLY_NEGATIVE;
}
var l0 = n(792216);
let l1 = {
    appStore: { getTitle: () => er.intl.string(er.t.LVy7Ug), action: k.Ws.AppStoreReviews },
    googlePlay: { getTitle: () => er.intl.string(er.t.V6rllO), action: k.Ws.GooglePlayReviews },
};
function l2(e) {
    switch (e) {
        case lQ.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case lQ.vI.OVERWHELMINGLY_POSITIVE:
        case lQ.vI.VERY_POSITIVE:
        case lQ.vI.POSITIVE:
        case lQ.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case lQ.vI.MIXED:
            return "steam-review-text-mixed";
        case lQ.vI.MOSTLY_NEGATIVE:
        case lQ.vI.NEGATIVE:
        case lQ.vI.VERY_NEGATIVE:
        case lQ.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var l8 =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    l4 = n(778591);
function l6(e) {
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
            strokeWidth: 2 / (30 / 36),
            strokeDasharray: `${a} ${l - a}`,
        }),
    });
}
var l3 = n(315189);
let l9 = { appStore: lc.AppleNeutralIcon, googlePlay: lu.GooglePlayNeutralIcon };
function l5(e) {
    let { review: t } = e,
        { trackAction: n } = W(),
        l = (0, lm.A)(),
        i = l9[t.key],
        { action: a, url: o } = t,
        c = s.useCallback(() => {
            (n(a), l(o));
        }, [a, l, n, o]);
    return (0, r.jsx)(tV.D, {
        onClick: c,
        className: l3.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, r.jsxs)("div", {
            className: l3.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: l3.hU,
                    children: [
                        (0, r.jsx)(i, { size: "sm", color: eR.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(ta.D, { variant: "heading-xs/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: l3.nK,
                    children: [
                        (0, r.jsx)(B.E, {
                            variant: "body-xs/medium",
                            color: "text-strong",
                            className: l3.yX,
                            children: t.ratingText,
                        }),
                        (0, r.jsx)(B.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: t.ratingCountText,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function l7(e) {
    let { url: t, title: n, rating: l, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: o } = W(),
        c = (0, lm.A)(),
        u = lZ(l, i, "recent" === a),
        d = l2(u),
        m = s.useCallback(() => {
            (o(k.Ws.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, r.jsx)(tV.D, {
        onClick: m,
        className: l3.nf,
        role: "link",
        "aria-label": er.intl.string(er.t.YNC5Di),
        children: (0, r.jsxs)("div", {
            className: l3.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: l3.hU,
                    children: [
                        (0, r.jsx)(lq.SteamNeutralIcon, { size: "sm", color: eR.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(ta.D, { variant: "heading-xs/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, r.jsx)(
                    J.m,
                    {
                        text:
                            u === lQ.vI.NO_USER_REVIEWS
                                ? er.intl.string(er.t.CLMt8J)
                                : er.intl
                                      .format(
                                          "recent" === a
                                              ? er.t.TzvC0k
                                              : "localized" === a
                                                ? er.t.EOfrwm
                                                : er.t["lzANJ/"],
                                          { rating: l, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, r.jsxs)("div", {
                            className: l3.nK,
                            children: [
                                (0, r.jsx)(B.E, {
                                    variant: "body-xs/medium",
                                    color: d,
                                    className: l3.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case lQ.vI.NO_USER_REVIEWS:
                                                return er.intl.string(er.t.CLMt8J);
                                            case lQ.vI.OVERWHELMINGLY_POSITIVE:
                                                return er.intl.string(er.t["75sx1S"]);
                                            case lQ.vI.VERY_POSITIVE:
                                                return er.intl.string(er.t["EkOVg+"]);
                                            case lQ.vI.POSITIVE:
                                                return er.intl.string(er.t.ZUkFtr);
                                            case lQ.vI.MOSTLY_POSITIVE:
                                                return er.intl.string(er.t.M7Z09a);
                                            case lQ.vI.MIXED:
                                                return er.intl.string(er.t.c8yuHR);
                                            case lQ.vI.MOSTLY_NEGATIVE:
                                                return er.intl.string(er.t.H0MSjG);
                                            case lQ.vI.NEGATIVE:
                                                return er.intl.string(er.t.vpLrgz);
                                            case lQ.vI.VERY_NEGATIVE:
                                                return er.intl.string(er.t["5spYuX"]);
                                            case lQ.vI.OVERWHELMINGLY_NEGATIVE:
                                                return er.intl.string(er.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== lQ.vI.NO_USER_REVIEWS &&
                                    (0, r.jsx)(B.E, {
                                        variant: "body-xs/medium",
                                        color: "text-subtle",
                                        children: er.intl
                                            .format(er.t.sgIoin, { rating_count: i.toLocaleString() })
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
function ie(e) {
    let { url: t } = e,
        { game: n, trackAction: l } = W(),
        { reviews: i } = n,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = a.tier,
        c = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (c <= 0 || u <= 0) && null == o,
        m = (0, lm.A)(),
        h = s.useCallback(() => {
            (l(k.Ws.OpenCriticReviews), m(t));
        }, [m, l, t]);
    return (0, r.jsx)(tV.D, {
        onClick: h,
        className: l3.nf,
        role: "link",
        "aria-label": er.intl.string(er.t.aLNBAw),
        children: (0, r.jsxs)("div", {
            className: l3.Ur,
            children: [
                (0, r.jsx)(ta.D, {
                    variant: "heading-xs/medium",
                    color: "text-strong",
                    children: er.intl.string(er.t["UxvER+"]),
                }),
                (0, r.jsxs)("div", {
                    className: l3.WA,
                    children: [
                        null != o ? (0, r.jsx)(it, { tier: o }) : null,
                        null != o && c > 0 && u > 0 ? (0, r.jsx)(il, { rating: c, tier: o }) : null,
                        d
                            ? (0, r.jsx)(B.E, {
                                  variant: "body-xs/medium",
                                  color: l2(lQ.vI.NO_USER_REVIEWS),
                                  children: er.intl.string(er.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function it(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case l8.MIGHTY:
                    return er.intl.string(er.t.aZej2g);
                case l8.STRONG:
                    return er.intl.string(er.t.MLxnSg);
                case l8.FAIR:
                    return er.intl.string(er.t["3f19KA"]);
                case l8.WEAK:
                    return er.intl.string(er.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case l8.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case l8.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case l8.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case l8.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, r.jsx)(
        J.m,
        {
            text: n,
            children: (0, r.jsx)("div", {
                className: l3.TE,
                children: (0, r.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function il(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case l8.MIGHTY:
                    t = "#fc430a";
                    break;
                case l8.STRONG:
                    t = "#9e00b4";
                    break;
                case l8.FAIR:
                    t = "#4aa1ce";
                    break;
                case l8.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, r.jsx)(
        J.m,
        {
            text: er.intl.string(er.t.Ub4YR1),
            children: (0, r.jsxs)("div", {
                className: l3.TE,
                style: { backgroundColor: i },
                children: [
                    (0, r.jsx)(l6, { rating: t, strokeColor: l }),
                    (0, r.jsx)(B.E, {
                        variant: "body-xs/semibold",
                        color: "text-overlay-light",
                        className: l3.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let ii = function () {
    let { game: e } = W(),
        t = (0, l4.I)(e.id),
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
                l = e.steamReleaseStatus !== l0.Y.RETIRED_ABANDONED && null != t,
                i = lZ(n?.recentRating, n?.recentRatingCount, !0),
                a = l && i !== lQ.vI.NO_USER_REVIEWS,
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
                primarySteamTitleKey: r ? er.t["aWb+V4"] : er.t["8e4LiB"],
                mobileStoreReviews: Object.entries(l1).flatMap((t) => {
                    var n;
                    let l,
                        i,
                        [a, r] = t,
                        s = e.reviews?.[a],
                        o = s?.rating,
                        c = s?.ratingCount;
                    if (null == o || null == c) return [];
                    let u = n2(e, n0[a]);
                    return null != u
                        ? [
                              ((n = u.url),
                              (l = r.getTitle()),
                              (i = new Intl.NumberFormat(er.intl.currentLocale, {
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 1,
                              }).format(o)),
                              {
                                  key: a,
                                  url: n,
                                  title: l,
                                  ratingText: er.intl.format(er.t["zdL4/T"], { rating: i }).toString(),
                                  ratingCountText: er.intl.format(er.t.u1m2hs, { rating_count: c }).toString(),
                                  accessibilityLabel: er.intl
                                      .format(er.t["63jSRx"], { store: l, rating: i, rating_count: c })
                                      .toString(),
                                  action: r.action,
                              }),
                          ]
                        : [];
                }),
            };
        }, [e, t]),
        h =
            (e.steamReleaseStatus !== l0.Y.RETIRED_ABANDONED || m.length > 0) &&
            e.reviews?.opencritic != null &&
            null != e.opencriticUrl;
    return i || h || 0 !== m.length
        ? (0, r.jsxs)("div", {
              className: l3.uW,
              children: [
                  (0, r.jsx)("div", {
                      className: l3.Gf,
                      children: (0, r.jsx)(ta.D, {
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: er.intl.string(er.t.GaAQXP),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: l3.kL,
                      children: [
                          a && null != t
                              ? (0, r.jsx)("div", {
                                    className: l3.WH,
                                    children: (0, r.jsx)(l7, {
                                        url: t,
                                        title: er.intl.string(er.t.MQGNsN),
                                        rating: l?.recentRating,
                                        ratingCount: l?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          i && null != t
                              ? (0, r.jsx)("div", {
                                    className: l3.WH,
                                    children: (0, r.jsx)(l7, {
                                        url: t,
                                        title: er.intl.string(d),
                                        rating: c,
                                        ratingCount: u,
                                        tooltipVariant: o ? "localized" : "all",
                                    }),
                                })
                              : null,
                          m.map((e) =>
                              (0, r.jsx)("div", { className: l3.WH, children: (0, r.jsx)(l5, { review: e }) }, e.key),
                          ),
                          h && null != n
                              ? (0, r.jsx)("div", { className: l3.WH, children: (0, r.jsx)(ie, { url: n }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var ia = n(110676),
    ir = n(722258),
    is = n(987421),
    io = n(561769),
    ic = n(484469),
    iu = n(57020),
    id = n(682301);
let im = [];
var ih = n(758836),
    ig = n(399872);
let ix = [0, 1, 2, 3, 4];
function ip(e) {
    return e.skuId;
}
function ij(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = s.useContext(io.v3),
        { trackAction: u } = W(),
        d = s.useRef(null),
        m = s.useCallback(
            (e) => {
                (u(k.Ws.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, ir.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, iu.A)({ product: t }),
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
    return (0, r.jsx)(io.v3.Provider, {
        value: h,
        children: (0, r.jsx)(is.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: ig.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function iv() {
    return (0, r.jsx)(ic.A, {});
}
function ib() {
    let { game: e, closeModal: t, trackAction: n } = W(),
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
                    } = (0, m.cf)([L.A], () => ({
                        hasFetched: null != e && L.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && L.A.isShopCollectionFetching(e),
                        skuIds: null != e ? L.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, s.useEffect)(() => {
                            null == e || t || L.A.isShopCollectionFetching(e) || (0, nM.hd)(e);
                        }, [e, t]),
                        { skuIds: l ?? im, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, id.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(e.shopCollectionIds?.[0]),
        a = s.useCallback(() => {
            (n(k.Ws.DiscordCollectiblesShop),
                t(),
                (0, ia.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: ih.G2.CATALOG,
                }));
        }, [n, t]);
    return i
        ? (0, r.jsx)(tE, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, r.jsx)(nd.A, { children: ix.map((e) => (0, r.jsx)(iv, {}, e)) }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(ty, {
                title: er.intl.string(er.t["5DYPT8"]),
                onClickViewAll: a,
                children: (0, r.jsx)(nr.A, {
                    gap: "md",
                    items: l,
                    getItemKey: ip,
                    renderItem: (e, t) => (0, r.jsx)(ij, { product: e, listItemProps: t }, e.skuId),
                }),
            });
}
var iI = n(611656),
    iN = n(281018),
    iE = n(987070);
let iy = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iA(e) {
    return e.id;
}
function iC(e) {
    let { game: t, listItemProps: n } = e,
        { navigateToGame: l, trackAction: i } = W(),
        { shouldOpenGameProfile: a, gameId: o } = (0, iI.Ay)({
            gameId: t.id,
            source: k.GameProfileSources.SimilarGames,
        }),
        c = s.useCallback(() => {
            (i(k.Ws.ClickSimilarGame, { similarGameId: t.id }),
                a && null != o && l(o, k.GameProfileSources.SimilarGames));
        }, [t.id, o, i, a, l]);
    return (0, r.jsx)(J.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, r.jsx)(tV.D, {
            ...n,
            className: iE.Nr,
            onClick: c,
            "aria-label": er.intl.formatToPlainString(er.t["8QLQB+"], { gameName: t.name }),
            children: (0, r.jsx)(tZ.Ay, {
                game: t,
                className: iE.xe,
                size: tZ.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, r.jsx)(tZ.gr, { className: iE.uz }),
            }),
        }),
    });
}
function ik() {
    let { game: e } = W(),
        t = e.id,
        { isFetching: n, similarGames: l } = (0, iN.A)(t);
    return n
        ? (0, r.jsx)(tE, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, r.jsx)("div", {
                  className: iE.XG,
                  style: iy,
                  children: (0, r.jsx)(nd.A, {
                      children: eX()
                          .range(0, 8)
                          .map((e) => (0, r.jsx)(tZ.gr, { className: iE.aZ }, e)),
                  }),
              }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(ty, {
                title: er.intl.string(er.t["6rLyQB"]),
                children: (0, r.jsx)("div", {
                    className: iE.XG,
                    style: iy,
                    children: (0, r.jsx)(nr.A, {
                        gap: "md",
                        items: l,
                        getItemKey: iA,
                        itemClassName: iE.cW,
                        renderItem: (e, t) => (0, r.jsx)(iC, { game: e, listItemProps: t }, e.id),
                    }),
                }),
            });
}
n(667532);
var iS = n(853022);
let iL = new Set(["1402418703554842694", "356877880938070016"]),
    iR = [nQ.V1.EPICGAMES, nQ.V1.STEAM, nQ.V1.ROBLOX, nQ.V1.BATTLENET, nQ.V1.RIOT, nQ.V1.MINECRAFT];
function iT(e) {
    return (0, r.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iM = n(349361),
    iO = n(422688),
    iw = n(505200),
    iP = n(695250);
let iV = function (e) {
    switch (e.category) {
        case nQ.V1.STEAM:
            return {
                icon: lq.SteamNeutralIcon,
                text: er.intl.string(er.t.FsANs4),
                ariaLabel: er.intl.string(er.t["P+ePTG"]),
                action: k.Ws.SteamStoreLink,
                url: e.url,
            };
        case nQ.V1.EPICGAMES:
            return {
                icon: iM.EpicGamesNeutralIcon,
                text: er.intl.string(er.t.ZbBMHa),
                ariaLabel: er.intl.string(er.t.BwX0UW),
                action: k.Ws.EpicStoreLink,
                url: e.url,
            };
        case nQ.V1.ROBLOX:
            return {
                icon: ld.RobloxNeutralIcon,
                text: er.intl.string(er.t["pJ+P+h"]),
                ariaLabel: er.intl.string(er.t.tYxpdf),
                action: k.Ws.RobloxStoreLink,
                url: e.url,
            };
        case nQ.V1.BATTLENET:
            return {
                icon: iO.BattlenetNeutralIcon,
                text: er.intl.string(er.t["A7grp+"]),
                ariaLabel: er.intl.string(er.t.x9at20),
                action: k.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case nQ.V1.RIOT:
            return {
                icon: iw.RiotGamesNeutralIcon,
                text: er.intl.string(er.t.h6MapL),
                ariaLabel: er.intl.string(er.t["528nvc"]),
                action: k.Ws.RiotStoreLink,
                url: e.url,
            };
        case nQ.V1.MINECRAFT:
            return {
                icon: iP.MinecraftNeutralIcon,
                text: er.intl.string(er.t["HZbmO+"]),
                ariaLabel: er.intl.string(er.t.WWTqYn),
                action: k.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: lj.XboxNeutralIcon,
                text: er.intl.string(er.t["QpN/Iz"]),
                ariaLabel: er.intl.string(er.t["8JZmmF"]),
                action: k.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var iD = n(242216);
function iG(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, l4.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eE.d3x.XBOX_GAME_PASS && !(0, to.uJ)(e.id));
                return t?.id == null ? null : (0, iS.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== nQ.V1.EPICGAMES || !!iL.has(l)) &&
                            (e.category !== nQ.V1.STEAM || a !== l0.Y.RETIRED_ABANDONED) &&
                            iR.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === l0.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === nQ.V1.STEAM) ||
                    e.push({ category: nQ.V1.STEAM, url: t });
                let r = e.sort((e, t) => (e.category === nQ.V1.STEAM ? -1 : +(t.category === nQ.V1.STEAM)));
                return (null != n && r.unshift({ category: "XBOX_GAME_PASS", url: n }), r);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function i_(e) {
    let { data: t } = e,
        { trackAction: n } = W(),
        l = (0, lm.A)();
    return (0, r.jsx)(iT, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let iW = function () {
    let { game: e, trackAction: t } = W(),
        { showsStoreLinks: l, storeWebsites: i } = iG(e),
        a = s.useMemo(() => i.map(iV).filter((e) => null != e), [i]);
    if (!l) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, r.jsx)(i_, { data: e });
    }
    if (2 === a.length)
        return (0, r.jsxs)("div", {
            className: iD.G,
            children: [(0, r.jsx)(i_, { data: a[0] }), (0, r.jsx)(i_, { data: a[1] })],
        });
    let o = (0, r.jsx)(iT, {
        text: er.intl.string(er.t["/hMurx"]),
        "aria-label": er.intl.string(er.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, g.mM)(async () => {
                    let { default: e } = await n.e(307898).then(n.bind(n, 679361));
                    return (n) => (0, r.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: e, websiteButtons: a, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, r.jsxs)("div", { className: iD.G, children: [(0, r.jsx)(i_, { data: a[0] }), o] })
        : o;
};
var iF = n(123292),
    iU = n(30772),
    iB = n(478676),
    iY = n.n(iB),
    iz = n(486889),
    iH = n(694403),
    iX = n(417964),
    iK = n(998218);
function i$(e, t, n) {
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
let iJ = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/,
    iq = RegExp(iJ.source, "g"),
    iQ = /[\n\r\u001c-\u001e\u0085\u2029]/,
    iZ = RegExp(`(${iQ.source})`),
    i0 = RegExp(`${/[\u0000-\u001f\u007f]/.source}|${iQ.source}`),
    i1 = /[\p{M}\p{Default_Ignorable_Code_Point}]/gu,
    i2 = new Set(["subject", "body"]),
    i8 = /https?:\/\//i,
    i4 = /\b(https?)(?::[/\\]+|[/\\]{2,})/gi,
    i6 = String.raw`https?:\/\/[^\s<]+[^<.,:;"'\]\s]`,
    i3 = RegExp(`^(${i6})`, "i"),
    i9 = RegExp(i6, "gi"),
    i5 = /(?:^|[^a-z0-9.!#$%&'*+\/=?^_`{|}~-])([a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,})/gi,
    i7 = new Map(
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
    ae = { bold: !1, italic: !1, underline: !1 },
    at = /[\uD800-\uDBFF]/,
    an = /^[a-z][a-z0-9:-]*$/,
    al = /^<[a-z][a-z0-9:-]*\s*(?:\/+\s*)?>$/i,
    ai = /^<[a-z][a-z0-9:-]*(?:\s+[a-z0-9:+-]+)*(?:\s*\/+\s*[a-z0-9:+-]+(?:\s+[a-z0-9:+-]+)*)+\s*>$/i,
    aa = /^<\/{2,}[\s/a-z0-9:+-]*>$/i,
    ar = new Set([
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
    as = new Set([
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
function ao(e, t) {
    let n;
    try {
        n = new URL(e);
    } catch {
        return;
    }
    return "http:" === n.protocol || "https:" === n.protocol
        ? n
        : t || "mailto:" !== n.protocol
          ? void 0
          : Array.from(n.searchParams.keys()).every((e) => i2.has(e.toLowerCase()))
            ? n
            : void 0;
}
function ac(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e ? ao(e, t)?.href : void 0;
}
function au(e) {
    return (0, iX.El)(e.replace(i1, "").normalize("NFKC"));
}
function ad(e) {
    return au((0, iX.Fd)(e));
}
function am(e) {
    return e.replace(i4, "$1://");
}
function ah(e, t) {
    if (
        0 === e.trim().length ||
        (0, iz.Ay)(e).some((n) => {
            let { url: l } = n;
            return (
                ac(l, !0) !== t &&
                (!!(!l.startsWith("http://") || e.includes(l)) || ac(`https://${l.slice(7)}`, !0) !== t)
            );
        })
    )
        return !0;
    let n = am(e),
        l = Array.from(n.matchAll(i9), (e) => {
            let [t] = e;
            return t;
        });
    if ((am(au(n.normalize("NFKD"))).match(i9) ?? []).length > l.length || l.some((e) => ac(e, !0) !== t)) return !0;
    let i = Array.from(e.replace(i9, " ").matchAll(i5), (e) => {
        let [, t] = e;
        return t;
    });
    if (0 === i.length) return !1;
    if (!t.startsWith("mailto:")) return !0;
    let a = iK.A.safeDecodeURIComponent(new URL(t).pathname)?.toLowerCase();
    return null == a || i.some((e) => e.toLowerCase() !== a);
}
function ag(e) {
    let t = 0;
    for (let n = e.length - 1; n >= 0 && ")" === e[n]; n--) {
        let n = e.indexOf("(", t);
        if (-1 === n) return e.slice(0, -1);
        t = n + 1;
    }
    return e;
}
function ax(e) {
    return ac(iY().unescapeUrl(e[2]));
}
let af = {
        text: iY().defaultRules.text,
        link: {
            ...iH.Ay,
            match(e, t, n) {
                let l = iH.Ay.match(e, t, n);
                return null == l || iQ.test(l[0]) ? null : null != ax(l) ? l : null;
            },
            parse(e, t, n) {
                let l = ax(e);
                return null == l || ah(ad(e[1]), l) ? { type: "text", content: e[0] } : iH.Ay.parse(e, t, n);
            },
        },
        url: {
            order: iY().defaultRules.url.order,
            requiredFirstCharacters: ["h", "H"],
            match(e) {
                let t = i3.exec(e);
                return (null != t && (t[0] = t[1] = ag(t[1])), t);
            },
            parse(e) {
                let t = e[1],
                    n = t.search(i0),
                    l = -1 === n ? t : t.slice(0, n),
                    i = ao(l, !0);
                if (null == i) return { type: "text", content: t };
                let a = (0, iH.W1)(l)?.displayTarget;
                if (null == a) return { type: "text", content: t };
                let r = new URL(a).host,
                    s = {
                        type: "url",
                        content: [
                            {
                                type: "text",
                                content:
                                    "" === i.username && "" === i.password && l.toLowerCase().includes(`//${r}`)
                                        ? l
                                        : a,
                            },
                        ],
                        target: i.href,
                    },
                    o = t.slice(l.length);
                return "" === o ? s : [s, { type: "text", content: o }];
            },
        },
    },
    ap = iY().parserFor(af);
function aj(e) {
    let { link: t, ...n } = e;
    return n;
}
function av(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { marked: n, rawURLsOnly: l } = (function (e) {
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
                let s = ad(r).trim(),
                    o = 0 === s.length ? "" : ah(s, i.link) ? void 0 : i.link;
                if (o !== i.link)
                    for (let i = l; i < a; i++) {
                        let l = aj(e[i]);
                        ((t[i] = null != o ? { ...l, link: o } : l), null == o && n.add(i));
                    }
                l = a;
            }
            return { marked: t, rawURLsOnly: n };
        })(
            (function (e, t) {
                if (!e.some((e) => iJ.test(e.text))) return e;
                let n = 0,
                    l = e.map((e) =>
                        e.text.split(iZ).map((e) => {
                            let t = { text: e, paragraph: n };
                            return (iQ.test(e) && n++, t);
                        }),
                    ),
                    i = new Set();
                return (
                    l.forEach((n, l) => {
                        for (let { text: r, paragraph: s } of n) {
                            var a;
                            let n = r.replace(iq, "");
                            "" !== n &&
                                ((a = e[l]), null != a.link ? "" !== a.link : t && (i8.test(n) || n.includes("]("))) &&
                                i.add(s);
                        }
                    }),
                    e.map((e, t) => ({
                        ...e,
                        text: l[t]
                            .map((e) => {
                                let { text: t, paragraph: n } = e;
                                return i.has(n) ? t.replace(iq, "") : t;
                            })
                            .join(""),
                    }))
                );
            })(e, t),
        ),
        i = [];
    for (let e = 0; e < n.length; e++) {
        let a = n[e];
        "" === a.link
            ? i.push(aj(a))
            : null == a.link && t
              ? (function (e, t, n) {
                    let l = t.text.includes("["),
                        i = n && t.text.includes("](");
                    (!i || l) && (i || i8.test(t.text))
                        ? (function e(t, n, l) {
                              if (Array.isArray(n)) for (let i of n) e(t, i, l);
                              else
                                  "text" === n.type && "string" == typeof n.content
                                      ? t.push({ ...l, text: n.content })
                                      : ("link" === n.type || "url" === n.type) &&
                                        e(t, n.content, { ...l, link: n.target, rawURL: "url" === n.type });
                          })(e, ap(t.text, { inline: !0, allowLinks: n }), t)
                        : e.push(t);
                })(i, a, !l.has(e))
              : i.push(a);
    }
    let a = [];
    for (let { rawURL: e, ...t } of (function (e) {
        if (!e.some((e) => null != e.link)) return e;
        let t = (function (e) {
                let t = e.map((e) => e.text.split(i0).map(ad).join(" "));
                for (let n = 0; n < e.length;) {
                    let l = e[n];
                    if (null == l.link || !0 === l.rawURL) {
                        n++;
                        continue;
                    }
                    let i = n + 1;
                    for (; i < e.length && !0 !== e[i].rawURL && e[i].link === l.link;) i++;
                    (Array.from(t.slice(n, i).join("").matchAll(i9)).some((e) => {
                        let [t] = e;
                        return ac(ag(t), !0) === l.link;
                    }) && (t[i - 1] += " "),
                        (n = i));
                }
                return t;
            })(e),
            n = 0,
            l = t.map((e) => (n += e.length)),
            i = [...e],
            a = 0;
        for (let e of t.join("").matchAll(i9)) {
            let t = ag(e[0]);
            for (; l[a] <= e.index;) a++;
            let n = e.index + t.length,
                r = a;
            for (; l[r] < n;) r++;
            if (a === r) continue;
            let s = ac(t, !0);
            for (let e = a; e <= r; e++) (null == s || i[e].link !== s) && (i[e] = aj(i[e]));
        }
        return i;
    })(i))
        i$(a, t.text, t);
    return a;
}
function ab(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 10 === n || 9 === n || 13 === n || 12 === n;
}
function aI(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 9 === n || 12 === n;
}
function aN(e) {
    let t = 0;
    for (; t < e.length && ab(e, t);) t++;
    return t;
}
function aE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.length;
    for (; n > t && ab(e, n - 1);) n--;
    return n;
}
function ay(e, t) {
    let n = "",
        l = 0,
        i = t,
        a = -1;
    for (let t = e.indexOf("\n"); -1 !== t; t = e.indexOf("\n", t + 1)) {
        let r = a + 1,
            s = !0;
        for (let n = r; n < t; n++)
            if (!aI(e, n)) {
                s = !1;
                break;
            }
        (i > 0 && s ? ((n += e.slice(l, r)), i < 2 && (n += "\n"), (l = t + 1), i++) : (i = 1), (a = t));
    }
    return 0 === l ? e : n + e.slice(l);
}
function aA(e) {
    for (; e.length > 0;) {
        let t = e[e.length - 1],
            n = t.text.length;
        for (; n > 0 && aI(t.text, n - 1);) n--;
        if (n === t.text.length) break;
        if (0 === n) e.pop();
        else {
            t.text = t.text.slice(0, n);
            break;
        }
    }
}
function aC(e) {
    return e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e;
}
function ak(e) {
    let t = ay(aC(e), 0),
        n = aN(t),
        l = aE(t, n);
    return l > n ? [{ text: t.slice(n, l), ...ae }] : [];
}
function aS(e, t) {
    let n = Math.max(0, Math.floor(t)),
        l = at.test(e.charAt(n - 1)) ? n - 1 : n;
    return aC(e.slice(0, l));
}
function aL(e) {
    return e.links[e.links.length - 1];
}
function aR(e) {
    return null != e ? { ...ae, link: e } : ae;
}
function aT(e) {
    let t = aL(e);
    return {
        bold: e.styles.bold > 0 || null != e.heading,
        italic: e.styles.italic > 0,
        underline: e.styles.underline > 0,
        ...(null != e.heading ? { heading: e.heading } : {}),
        ...(null != t ? { link: t } : {}),
    };
}
function aM(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ae,
        l = t.indexOf("\n");
    if (e.trailingNewlines > 0 && -1 !== l) {
        let n = !0;
        for (let e = 0; e < l; e++)
            if (!aI(t, e)) {
                n = !1;
                break;
            }
        n && aA(e.runs);
    }
    let i = e.trailingNewlines,
        a = ay(t, e.trailingNewlines);
    if ((0 === e.runs.length && (a = a.slice(aN(a))), 0 === a.length)) return;
    i$(e.runs, a, n);
    let r = (function (e) {
        let t = 0;
        for (let n = e.length - 1; n >= 0; n--)
            if (10 === e.charCodeAt(n)) t++;
            else if (!aI(e, n)) break;
        return t;
    })(a);
    e.trailingNewlines = aN(a) === a.length ? Math.min(2, i + r) : r;
}
function aO(e) {
    if (0 === e.pendingBreaks) for (let t of e.held) aM(e, t.text, t);
    else
        e.runs.length > 0 &&
            (e.trailingNewlines > 0 && aA(e.runs),
            aM(e, "\n".repeat(Math.max(0, e.pendingBreaks - e.trailingNewlines)), aR(e.spacingLink)));
    ((e.held = []), (e.pendingBreaks = 0));
}
function aw(e, t) {
    let n = e.atBoundary ? aN(t) : 0,
        l = aE(t, n),
        i = aT(e);
    (l > n && (aO(e), aM(e, t.slice(n, l), i), (e.spacingLink = i.link), (e.atBoundary = e.afterMarker = !1)),
        l < t.length && e.held.push({ ...i, text: t.slice(l) }));
}
function aP(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null != t &&
        ((n && e.afterMarker) || (e.pendingBreaks = Math.max(e.pendingBreaks, e.itemDepth > 0 ? 1 : t)),
        (e.atBoundary = !0),
        n || (e.afterMarker = !1));
}
function aV(e, t) {
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
            class n extends iU.i {
                onclosetag(n, l) {
                    let i = this.startIndex,
                        a = e.markup.slice(n, l).toLowerCase();
                    ((t = void 0), super.onclosetag(n, l));
                    let r = a.replace(/\/+$/, "");
                    if (e.hiddenDepth > 0 || t === a || i7.has(r) || ar.has(r) || as.has(r)) return;
                    let s = e.markup.indexOf(">", l);
                    -1 !== s && aw(e, e.markup.slice(i, s + 1));
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
                            let s = i7.get(t);
                            if (e.hiddenDepth > 0 || s?.hidden === !0) return void e.hiddenDepth++;
                            if (null == s) {
                                let n,
                                    r,
                                    s = e.markup.slice(l.startIndex, l.endIndex + 1);
                                (!an.test(t) ||
                                    ((al.test(s) || ai.test(s)) &&
                                        !ar.has(t) &&
                                        !as.has(t) &&
                                        ((i = l.endIndex),
                                        (e.closingTags ??= e.markup.includes("</")
                                            ? ((a = e.markup),
                                              (n = new Map()),
                                              (r = new iU.i(
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
                                    aw(e, s);
                                return;
                            }
                            (aP(e, s.breaks, !0),
                                null != s.style && e.styles[s.style]++,
                                !0 === s.link &&
                                    (e.links.push(ac(n.href) ?? (e.keepInvalidAnchors ? "" : void 0)),
                                    (e.spacingLink = void 0)),
                                null != s.heading && (e.heading = s.heading),
                                null != s.list && e.lists.push({ ordered: "ordered" === s.list, index: 0 }),
                                !0 === s.lineBreak &&
                                    (aO(e),
                                    aM(e, "\n", null != e.heading ? aT(e) : aR(aL(e))),
                                    (e.atBoundary = !0),
                                    (e.afterMarker = !1)),
                                !0 === s.item &&
                                    (aO(e),
                                    (r = e.lists[e.lists.length - 1]),
                                    aM(e, r?.ordered === !0 ? `${++r.index}. ` : "\u2022 "),
                                    e.itemDepth++,
                                    (e.afterMarker = !0)));
                        })(e, t, n, l),
                    onclosetag(n, l) {
                        (l || (t = n),
                            (function (e, t) {
                                if (e.ending) return;
                                if (e.hiddenDepth > 0) return e.hiddenDepth--;
                                let n = i7.get(t);
                                null != n &&
                                    (aP(e, n.breaks),
                                    null != n.style && e.styles[n.style]--,
                                    !0 === n.link && (e.links.pop(), (e.spacingLink = void 0)),
                                    null != n.heading && (e.heading = void 0),
                                    null != n.list && e.lists.pop(),
                                    !0 === n.item && e.itemDepth--);
                            })(e, n));
                    },
                    oncomment() {
                        let t = e.markup.slice(l.startIndex, l.endIndex + 1);
                        0 === e.hiddenDepth && aa.test(t) && aw(e, t);
                    },
                    ontext(t) {
                        0 === e.hiddenDepth && aw(e, t);
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
            new iU.i({ ontext: (e) => aw(l, e) }, { decodeEntities: !0 }).end(n.replace(/</g, "&lt;")));
    for (var a = l.runs; a.length > 0;) {
        let e = a[a.length - 1];
        if (((e.text = e.text.slice(0, aE(e.text))), e.text.length > 0)) break;
        a.pop();
    }
    return a;
}
var aD = n(9578);
let aG = { h1: "heading-lg/semibold", h2: "heading-sm/semibold", h3: "heading-xs/semibold", h4: "heading-xs/semibold" },
    a_ = { h1: 2, h2: 3, h3: 4, h4: 5 };
var aW = n(407355);
function aF(e) {
    let { italic: t, underline: n } = e;
    return u()({ [aW.T]: t, [aW.V]: n });
}
function aU(e) {
    let { run: t, textVariant: n, boldTextVariant: l } = e;
    if (null != t.heading) return (0, r.jsx)(aB, { run: t });
    let { text: i, bold: a, italic: s, underline: o } = t;
    return a || s || o
        ? (0, r.jsx)(B.E, {
              tag: a ? "strong" : "span",
              variant: a ? l : n,
              color: "none",
              className: aF(t),
              children: s ? (0, r.jsx)("em", { children: i }) : i,
          })
        : i;
}
function aB(e) {
    let { run: t } = e,
        { text: n, italic: l, underline: i } = t;
    if (!l && !i) return n;
    let a = aF(t);
    return l && i
        ? (0, r.jsx)("u", { className: a, children: (0, r.jsx)("em", { children: n }) })
        : l
          ? (0, r.jsx)("em", { className: a, children: n })
          : (0, r.jsx)("u", { className: a, children: n });
}
function aY(e) {
    let { segment: t, textVariant: n, boldTextVariant: l, onLinkPress: i } = e,
        a = t.runs.map((e, t) => (0, r.jsx)(aU, { run: e, textVariant: n, boldTextVariant: l }, t)),
        { link: s } = t;
    return null == s
        ? a
        : (0, r.jsx)(aD.A, {
              href: s,
              title: t.runs.map((e) => e.text).join(""),
              onClick: () => (i?.(s), !1),
              children: a,
          });
}
function az(e) {
    let { group: t, ...n } = e,
        { heading: l, segments: i } = t,
        a = i.map((e, t) =>
            (0, r.jsx)(
                aY,
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
        : (0, r.jsx)(tX.F, {
              forceLevel: n.headingLevels[l],
              children: (0, r.jsx)(ta.D, { variant: n.headingVariants[l], color: n.headingColor, children: a }),
          });
}
function aH(e) {
    let {
            runs: t,
            textVariant: n = "body-md/normal",
            boldTextVariant: l = "body-md/semibold",
            headingVariants: i = aG,
            headingColor: a = "text-strong",
            headingLevels: o = a_,
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
    return u.map((e, t) => (0, r.jsx)(az, { group: e, ...d }, t));
}
var aX = n(672572),
    aK = n(94936);
function a$() {
    let e = s.useRef(null),
        { game: t, isTwoColumn: n, trackAction: l } = W(),
        i = s.useMemo(
            () =>
                null != t.description
                    ? (function (e) {
                          let { maxLength: t = 1e4, parseTextLinks: n = !1 } =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              l = e.includes("<") || e.includes("&");
                          if (!n) return l ? av(aV(aS(e, t)), !1) : ak(e);
                          let i = aS(e, t);
                          return av(l ? aV(i, { keepInvalidAnchors: !0 }) : ak(i));
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
            let { trackAction: l } = W(),
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
                                "full" !== t && t !== i && (e(l ? k.Ws.ShowMore : k.Ws.ShowLess), n(i));
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
                        if (!i || null == n || !(0, ny.vq)(l, HTMLAnchorElement) || !l.matches(":focus-visible"))
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
            l(k.Ws.ClickDescriptionLink);
        }, [l]);
    if (0 === i.length) return null;
    let g = o ? er.intl.string(er.t["6MwJo/"]) : er.intl.string(er.t.lBeKY2);
    return (0, r.jsxs)("div", {
        className: u()(aX.fi, aK.k),
        onFocusCapture: m,
        children: [
            (0, r.jsx)(B.E, {
                ref: e,
                className: aK.Q,
                lineClamp: o ? void 0 : a,
                variant: "body-md/medium",
                children: (0, r.jsx)(aH, { runs: i, textVariant: "body-md/medium", onLinkPress: h }),
            }),
            c && (0, r.jsx)(iF.Q, { onClick: d, text: g, "aria-expanded": o }),
        ],
    });
}
var aJ = n(40478),
    aq = n(764948);
let aQ = s.memo(function (e) {
    let { analyticsLocations: t, selectTab: n, getScrollOffset: l } = e;
    return (0, r.jsxs)("div", {
        className: aq.V,
        children: [
            (0, r.jsx)(lJ, {}),
            (0, r.jsxs)("div", {
                className: aJ.h,
                children: [
                    (0, r.jsx)(t3, {}),
                    (0, r.jsxs)("div", { className: aJ.X, children: [(0, r.jsx)(iW, {}), (0, r.jsx)(a$, {})] }),
                ],
            }),
            (0, r.jsx)(lT, { analyticsLocations: t }),
            (0, r.jsx)(tb, {}),
            (0, r.jsx)(nJ, { getScrollOffset: l }),
            (0, r.jsx)(nE, { selectTab: n }),
            (0, r.jsx)(ib, {}),
            (0, r.jsx)(ik, {}),
            (0, r.jsx)(ii, {}),
            (0, r.jsx)(lC, {}),
        ],
    });
});
var aZ = n(164135);
let a0 = s.memo(function (e) {
    let { selectTab: t, getScrollOffset: n } = e;
    return (0, r.jsxs)("div", {
        className: aZ.V,
        children: [
            (0, r.jsxs)("div", { className: aZ.B, children: [(0, r.jsx)(lJ, {}), (0, r.jsx)(a$, {})] }),
            (0, r.jsx)(nJ, { getScrollOffset: n }),
            (0, r.jsx)(nE, { selectTab: t }),
            (0, r.jsx)(ib, {}),
            (0, r.jsx)(ik, {}),
        ],
    });
});
var a1 = n(881698),
    a2 = n(928550),
    a8 = n(613412),
    a4 = n(414499),
    a6 = n(359549),
    a3 = n(139286),
    a9 = n(873516);
function a5(e) {
    let { onCloudPlayClick: t, analyticsLocations: n } = e,
        { closeModal: l, trackAction: i } = W();
    (0, a3.A)({
        name: a8.ImpressionNames.CLOUD_PLAY_CTA,
        type: a8.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let a = s.useCallback(() => {
        (i(k.Ws.CloudPlay), l(), t());
    }, [l, t, i]);
    return (0, r.jsx)(J.m, {
        text: er.intl.string(er.t.JVwWva),
        position: "top",
        children: (0, r.jsx)(K.$, {
            icon: a4.CloudIcon,
            text: er.intl.string(er.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function a7(e) {
    let { cloudPlayAppId: t, analyticsLocations: n } = e,
        { game: l } = W(),
        i = (0, a6.rC)({ applicationId: t, sourceApplicationId: l.id, analyticsLocations: n });
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: a9.k,
              children: (0, r.jsx)(a5, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var re = n(768626);
function rt(e) {
    let { analyticsLocations: t } = e,
        { game: n } = W(),
        l = (0, a1.A)(n.linkedApplications)?.id,
        [i] = (0, a2.L_)(n.getOfficialApplicationId()),
        [a] = (0, a2.L_)(n.id),
        { showsStoreLinks: s } = iG(n);
    return (0, r.jsxs)("div", {
        className: u()(re.pz, aX.fi, s ? re.FJ : re.dg),
        children: [
            null == l || i || a ? null : (0, r.jsx)(a7, { cloudPlayAppId: l, analyticsLocations: t }),
            (0, r.jsxs)("div", {
                className: aq.V,
                children: [
                    (0, r.jsx)(iW, {}),
                    (0, r.jsx)(lT, { analyticsLocations: t }),
                    (0, r.jsx)(tb, {}),
                    (0, r.jsx)(ii, {}),
                    (0, r.jsx)(lC, {}),
                ],
            }),
        ],
    });
}
var rn = n(105865);
function rl(e) {
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
            (0, r.jsx)(t8, { ref: o }),
            (0, r.jsxs)(eK.Ch, {
                ref: c,
                className: rn.XG,
                onScroll: m,
                children: [
                    (0, r.jsx)("div", { className: rn.xY, "aria-hidden": !0 }),
                    (0, r.jsx)(t7, {}),
                    (0, r.jsx)(tX.F, {
                        children: t
                            ? (0, r.jsxs)("div", {
                                  className: rn.jC,
                                  children: [
                                      (0, r.jsx)(a0, { selectTab: n, getScrollOffset: d }),
                                      (0, r.jsx)(rt, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: rn.b9,
                                  children: (0, r.jsx)(aQ, { analyticsLocations: a, selectTab: n, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var ri = n(953331),
    ra = n(787188);
function rr(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, r.jsx)(ri.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: nn.Ye.GAME_PROFILE_GAME_SHOP,
        className: ra.kL,
        scrollerClassName: ra.XG,
        promotionBannerClassName: ra.Rv,
    });
}
var rs = n(733391),
    ro = n(171616);
function rc(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: i,
            onClose: a,
            initialScrollOffset: o,
            initialTab: c,
            navigateToGame: W,
        } = e,
        [F, U] = s.useState(!0),
        [B, Y] = s.useState(null),
        { clientThemesClassName: z } = (0, b.Ay)(),
        H = (0, m.bG)([C.default], () => C.default.locale),
        X = s.useMemo(() => (0, k.u9)(), []),
        { analyticsLocations: K } = (0, p.Ay)(f.A.GAME_PROFILE),
        $ = (0, R.s)(t),
        { data: J } = (0, E.I)(t),
        q = J?.getOfficialApplicationId(),
        Q = (0, T.rG)(J),
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
        { invite: ec, isMember: eu, isResolving: ed } = (0, T.Ay)(J, Y),
        { socialLayerStorefrontRecommendationsData: em, socialLayerStorefrontRecommendationsLoading: eh } = (function (
            e,
        ) {
            let t = G.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [P.A],
                    () => ({
                        storefrontApplicationId: null != e ? P.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === P.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, w.h)(l),
                r = (0, m.bG)([v.A], () => null != l && v.A.didFetchingApplicationFail(l), [l]),
                o = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: c, status: u } = (0, D.XQ)({
                    applicationIds: o,
                    userIds: n,
                    numItems: 6,
                    source: V.B.USER_PROFILE,
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
        eg = s.useCallback(
            function (e) {
                let { similarGameId: l, communityGuildId: i } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, k.VO)(el.current);
                (0, k.Tn)({
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
        ((0, k.rw)({ source: n, viewId: X, gameId: t, gameName: et, authorId: l, profileType: k.HV.FullProfile }),
            (0, I.He)());
    }),
        (0, x.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, k.VO)(el.current),
                l = Date.now(),
                i = $.map((e) => {
                    let t = (0, N.JM)(e) ? (0, N.W6)(e, l) : (0, N.aJ)(e, H);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, k.V_)({
                viewId: X,
                gameId: t,
                gameName: et,
                playedFriendIds: $.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: L.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let ex = s.useCallback((e) => {
            U(e.contentRect.width >= 800);
        }, []),
        ef = (0, d.w)(ex, [], { fireOnMount: !0 }),
        ep = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, g.s7)(), (0, A.M)()) : a();
            },
            [a],
        ),
        ej = s.useCallback(() => ep(!1), [ep]),
        { navigation: ev, selectionVersion: eb } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.OVERVIEW,
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
        { selectedTab: eI } = ev,
        eN = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                r = t?.getOfficialApplicationId();
            s.useEffect(() => {
                (0, rs.Xw)();
            }, []);
            let o = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && P.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                c = null != o,
                { storefront: u } = (0, ro.A)({ applicationId: c ? o : null }),
                [d, h] = s.useState({ storefrontId: u?.id, index: 0 }),
                [g, x] = s.useState(l);
            l !== g && (x(l), l !== S.COMMERCE && h({ storefrontId: u?.id, index: 0 }));
            let f = d.storefrontId === u?.id && d.index < (u?.pages.length ?? 0) ? d.index : 0,
                p = s.useCallback(
                    (e) => {
                        !c ||
                            e < 0 ||
                            e >= (u?.pages.length ?? 0) ||
                            (h({ storefrontId: u?.id, index: e }), i(S.COMMERCE));
                    },
                    [c, i, u],
                );
            return {
                hasCommerceTab: c,
                storefrontApplicationId: o,
                storefront: u,
                selectedStorefrontPageIndex: f,
                selectStorefrontPage: p,
            };
        })({ game: J, navigation: ev }),
        { hasCommerceTab: eE, storefrontApplicationId: ey, storefront: eA, selectedStorefrontPageIndex: eC } = eN,
        ek = Object.values(eA?.promotions ?? {})[0] ?? null,
        eS = s.useMemo(() => {
            if (null != J)
                return {
                    game: J,
                    isTwoColumn: F,
                    canStartAuthorization: ea,
                    hasAlreadyLinked: ei,
                    fetchedAuthorization: er,
                    startAuthorization: es,
                    connectionApp: eo,
                    invite: ec,
                    hasDiscordWebsite: Q,
                    hasOfficialApplication: Z,
                    officialApplicationFetchFailed: ee,
                    isCommunityInviteResolving: ed,
                    isMember: eu,
                    socialLayerStorefrontRecommendationsData: em,
                    socialLayerStorefrontRecommendationsLoading: eh,
                    hasCommerceTab: eE,
                    storefrontPromotion: ek,
                    closeModal: ep,
                    navigateToGame: W,
                    trackAction: eg,
                    viewId: X,
                };
        }, [J, F, ea, ei, er, es, eo, ec, Q, Z, ee, ed, eu, em, eh, eE, ek, ep, W, eg, X]);
    return null == J
        ? null
        : (0, r.jsx)(p.f5, {
              value: K,
              children: (0, r.jsx)(h.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, r.jsx)(_.Provider, {
                      value: eS,
                      children: (0, r.jsx)("div", {
                          className: u()(z, aX.kL),
                          ref: ef,
                          children: (0, r.jsxs)(y.A, {
                              obscured: en,
                              onClose: ej,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: u()(aX.sx, { [aX.Tk]: eI !== S.COMMERCE }),
                                      children: (0, r.jsx)(ez, { navigation: ev, socialLayerStorefront: eN }),
                                  }),
                                  eI === S.OVERVIEW &&
                                      (0, r.jsx)(rl, {
                                          selectTab: ev.selectTab,
                                          selectionVersion: eb,
                                          initialScrollOffset: o,
                                          isTwoColumn: F,
                                          analyticsLocations: K,
                                      }),
                                  eI === S.COMMUNITIES && (0, r.jsx)(tH, {}),
                                  eI === S.COMMERCE && (0, r.jsx)(rr, { applicationId: ey, selectedPageIndex: eC }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let ru = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a, ...o } = e,
        [c, u] = s.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a }),
        d = c.gameId,
        m = s.useCallback(
            (e, t) => {
                e !== d && ((0, T.UT)(e), u({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, r.jsx)(
        rc,
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
