n.d(t, { default: () => rd });
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
    D = n(820847),
    V = n(802494),
    G = n(287809);
let _ = s.createContext(void 0);
function W() {
    let e = s.useContext(_);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var F = n(109112),
    U = n(761508),
    Y = n(834730),
    B = n(858899),
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
    ea = n(859574),
    er = n(695366),
    es = n(792996);
n(321073);
var eo = n(540185),
    ec = n(926268),
    eu = n(53788),
    ed = n(831453),
    em = n(785866),
    eh = n(555704),
    eg = n(741534),
    ex = n(633075),
    ef = n(289173),
    ep = n(851767),
    ej = n(958805),
    ev = n(735321),
    eb = n(116281),
    eI = n(46653),
    eN = n(403362);
async function eE(e) {
    let t = e((0, ev.BF)());
    await ej.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function ey(e) {
    var t;
    let l,
        i,
        { className: a, activeTab: c } = e,
        { game: u, closeModal: d, trackAction: h } = W(),
        x = s.useRef(null),
        p = s.useRef(null),
        j = (0, en.A)({ id: u.id, label: es.intl.string(es.t.SHQGPj) }),
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
                      label: es.intl.string(es.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: er.CircleErrorIcon },
                  })),
        b = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([eI.default], () => eI.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: eo.x.FAVORITE_GAMES,
                            addLabel: es.intl.string(es.t.fgmitg),
                            removeLabel: es.intl.string(es.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: ec.HeartIcon,
                        },
                        {
                            type: eo.x.PLAYED_GAMES,
                            addLabel: es.intl.string(es.t["0xIVLR"]),
                            removeLabel: es.intl.string(es.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eu.ThumbsUpIcon,
                        },
                        {
                            type: eo.x.CURRENT_GAMES,
                            addLabel: es.intl.string(es.t.G0c4En),
                            removeLabel: es.intl.string(es.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: ed.RotateIcon,
                        },
                        {
                            type: eo.x.WANT_TO_PLAY_GAMES,
                            addLabel: es.intl.string(es.t.UuBS4K),
                            removeLabel: es.intl.string(es.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: em.JoystickIcon,
                        },
                    ],
                    [],
                ),
                a = (0, m.yK)([ep.A], () => (null == l ? [] : (ep.A.getUserProfile(l)?.widgets ?? [])), [l]),
                o = (0, eb.A)(),
                c = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...a].filter((e) => e instanceof ex.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(eN.Vq).find((e) => t.has(e)) ?? null;
                }, [o, a, e]),
                u = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await eE((i) => {
                                let a = i.filter(ef.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, ev.uA)(a))) return i;
                                    let n = { gameId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new ef.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new ef.Yy({ ...a, games: e });
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
                        (0, eg.un)({
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
                            (await eE((n) =>
                                e
                                    ? n.some((e) => e instanceof ex.R && e.applicationId === c)
                                        ? n
                                        : [(t = new ex.R({ applicationId: c })), ...n]
                                    : ((t = n.find((e) => e instanceof ex.R && e.applicationId === c) ?? null),
                                      n.filter((e) => !(e instanceof ex.R && e.applicationId === c))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, eg.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [c],
                );
            if (null == l) return null;
            let h = null != e && (0, ev.XX)(e),
                g = [];
            if (null != c) {
                let e = a.some((e) => e instanceof ex.R && e.applicationId === c);
                g.push(
                    (0, r.jsx)(
                        X.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? es.intl.formatToPlainString(es.t.Ktb1n8, { name: n })
                                : es.intl.formatToPlainString(es.t.Xp6iZt, { name: n }),
                            action: () => d(!e),
                            leadingAccessory: { type: "icon", icon: eh.AnalyticsIcon },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of i) {
                    let n = a.filter(ef.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, ev.uA)(n);
                    g.push(
                        (0, r.jsx)(
                            X.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? es.intl.string(es.t["86OoiH"]) : void 0,
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
            let e = (0, ea.A)(u.id);
            (0, ei.C)(e, () => {
                (0, B.P0)({ text: es.intl.string(es.t["+5kSoW"]), variant: "success" });
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
                            "aria-label": es.intl.string(es.t.sidPSo),
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
                                text: es.intl.string(es.t.sidPSo),
                            }),
                        }),
                }),
            c !== S.COMMERCE &&
                (0, r.jsx)(J.m, {
                    text: es.intl.string(es.t.WqhZss),
                    children: (0, r.jsx)(q.K, {
                        icon: Q.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": es.intl.string(es.t.WqhZss),
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
                            "aria-label": es.intl.string(es.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(X.rX, { children: v }), (0, r.jsx)(X.rX, { children: j })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)(J.m, {
                            text: es.intl.string(es.t["UKOtz+"]),
                            children: (0, r.jsx)("div", {
                                ...e,
                                ref: x,
                                children: (0, r.jsx)(q.K, {
                                    icon: Z.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": es.intl.string(es.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, r.jsx)(q.K, {
                icon: ee.XSmallIcon,
                variant: "overlay-secondary",
                size: "sm",
                onClick: I,
                "aria-label": es.intl.string(es.t.cpT0Cq),
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
    let a = es.intl.string(es.t["3xFZEo"]);
    return (0, r.jsx)(U.V.Item, {
        id: S.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(S.COMMUNITIES),
        className: t,
        "aria-label": a,
        children: (0, r.jsx)(Y.E, { variant: "body-md/medium", color: "none", children: a }),
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
    eD = n(421773),
    eV = n(225647),
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
        { isHovered: g, setIsHovered: x, onMouseEnter: f, onMouseLeave: p, cancelTimers: j } = (0, eD.A)(100, 100),
        v = es.intl.string(es.t["J3/JCl"]),
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
                                    null != (l = (0, eV.A)(n?.trim())) && l.length > 0
                                        ? l
                                        : es.intl.formatToPlainString(es.t.IGMs8S, { pageNumber: t + 1 }));
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
                children: (0, r.jsx)(Y.E, {
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
function eY(e) {
    let { className: t, navigation: n, socialLayerStorefront: l } = e,
        { selectedTab: i, selectTab: a } = n,
        { hasCommerceTab: s, storefront: o } = l;
    if (!s) return null;
    let c = es.intl.string(es.t.apFNLU);
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
              children: (0, r.jsx)(Y.E, {
                  variant: e_,
                  color: "none",
                  children: (0, r.jsx)(eF, { label: c, socialLayerStorefront: l }),
              }),
          });
}
var eB = n(510954);
function ez(e) {
    let { navigation: t, socialLayerStorefront: n } = e,
        { game: l } = W(),
        { selectedTab: i, selectTab: a } = t,
        o = l.getIconURL(64),
        [c, u] = s.useState(null),
        d = s.useCallback(() => u(o), [o]),
        m = es.intl.string(es.t.qHmbyh);
    return (0, r.jsx)("div", {
        className: eB.wx,
        children: (0, r.jsxs)("div", {
            className: eB.ap,
            children: [
                (0, r.jsx)("div", {
                    className: eB.wE,
                    children:
                        null != o && o !== c
                            ? (0, r.jsx)("img", { src: o, alt: "", className: eB.FC, draggable: !1, onError: d })
                            : (0, r.jsx)(F.UnknownGameIcon, { size: "md" }),
                }),
                (0, r.jsxs)(U.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: eB.vR,
                    children: [
                        (0, r.jsx)(U.V.Item, {
                            id: S.OVERVIEW,
                            disableItemStyles: !0,
                            className: eB.Mf,
                            "aria-label": m,
                            children: (0, r.jsx)(Y.E, { variant: "body-md/medium", color: "none", children: m }),
                        }),
                        (0, r.jsx)(eL, { className: eB.Mf, navigation: t }),
                        (0, r.jsx)(eY, { className: eB.Mf, navigation: t, socialLayerStorefront: n }),
                    ],
                }),
                (0, r.jsx)(ey, { className: eB.HK, activeTab: i }),
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
        this.waitFor(eI.default);
    }
    getGuild(e) {
        return e8[e]?.guild ?? null;
    }
    getGuilds(e) {
        return e.map((e) => e8[e]?.guild).filter(eN.Vq);
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
let e3 = new e4(e2.h, {
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
});
var e6 = n(652215);
let e9 = new Map();
var e5 = n(927813);
let e7 = [];
function te(e) {
    return e0.A.getGame(e)?.communityGuildIds ?? e7;
}
let tt = (0, m.UT)(e3, {
    getQueryId: (e) => (te(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => e3.getGuilds(te(e)),
    load: async (e) => {
        let t = te(e);
        t.length > 0 &&
            (await (async function (e) {
                let t = e3.getStaleGuildIds(e),
                    n = new Set();
                for (let t of e) {
                    let e = e9.get(t);
                    null != e && n.add(e);
                }
                if (t.length > 0) {
                    let e = (async function (e) {
                        e2.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
                        try {
                            let t = await e1.Bo.get({
                                    url: e6.Rsh.GUILD_DISCOVERY,
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
                        for (let n of t) e9.get(n) === e && e9.delete(n);
                    });
                    for (let n of t) e9.set(n, e);
                    n.add(e);
                }
                await Promise.all(n);
            })(t));
    },
    staleAfter: e5.A.Seconds.HOUR,
    failureStaleAfter: e5.A.Seconds.MINUTE,
});
var tn = n(196765);
let tl = new Set(),
    ti = (0, tn.v)((e) => ({
        gameId: null,
        excludedLocales: tl,
        toggleLocale: (t, n) => {
            e((e) => {
                let l = new Set(e.gameId === t ? e.excludedLocales : tl);
                return (l.has(n) ? l.delete(n) : l.add(n), { gameId: t, excludedLocales: l });
            });
        },
    }));
function ta(e) {
    return ti((t) => (t.gameId === e ? t.excludedLocales : tl));
}
var tr = n(534514),
    ts = n(714991),
    to = n(486020),
    tc = n(240248);
function tu(e) {
    let { guildName: t, isMember: n, onClick: l, size: i, fullWidth: a } = e;
    return (0, r.jsx)(K.$, {
        variant: "secondary",
        size: i,
        fullWidth: a,
        text: n ? es.intl.string(es.t.cEnaWx) : es.intl.string(es.t.XpeFYr),
        "aria-label": n
            ? es.intl.formatToPlainString(es.t.lQqwQi, { guildName: t })
            : es.intl.formatToPlainString(es.t["8rL1QB"], { guildName: t }),
        onClick: l,
    });
}
var td = n(799699),
    tm = n(827085);
function th(e) {
    let { className: t } = e;
    return (0, r.jsx)(td.Ay, { className: u()(tm.qV, t) });
}
function tg(e) {
    let { presenceCount: t, memberCount: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("div", {
              className: tm.kL,
              children: [
                  null != t &&
                      (0, r.jsxs)("div", {
                          className: tm.U9,
                          children: [
                              (0, r.jsx)("i", { className: tm._o }),
                              (0, r.jsx)(Y.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: es.intl.format(es.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != n &&
                      (0, r.jsxs)("div", {
                          className: tm.U9,
                          children: [
                              (0, r.jsx)("i", { className: tm.jk }),
                              (0, r.jsx)(Y.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: es.intl.format(es.t.zRl6XR, { count: n }),
                              }),
                          ],
                      }),
              ],
          });
}
var tx = n(213098);
function tf() {
    return (0, r.jsxs)(td.qT, {
        className: tx.uW,
        animationDelayMs: 300,
        children: [
            (0, r.jsx)(td.Ay, { className: tx.dU, width: "30%" }),
            (0, r.jsx)(td.qT, {
                className: tx.nV,
                children: (0, r.jsxs)("div", {
                    className: tx.hQ,
                    children: [(0, r.jsx)(tp, {}), (0, r.jsx)(td.pv, {})],
                }),
            }),
        ],
    });
}
function tp() {
    return (0, r.jsxs)("div", {
        className: tx.To,
        children: [
            (0, r.jsx)(td.Ay, { className: tx.QV }),
            (0, r.jsxs)("div", {
                className: tx.Yv,
                children: [
                    (0, r.jsx)(td.Ay, { className: tx.Ag }),
                    (0, r.jsx)(td.Ay, { className: tx.zl }),
                    (0, r.jsx)(th, { className: tx.P2 }),
                ],
            }),
        ],
    });
}
function tj(e) {
    let { guild: t } = e,
        n = to.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        a = null != n && l !== n,
        o = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, r.jsxs)("div", {
        className: tx._C,
        children: [
            a && (0, r.jsx)(td.Ay, { className: tx.EQ }),
            (0, r.jsx)("img", {
                className: tx.$f,
                src: n,
                alt: es.intl.formatToPlainString(es.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: o,
                onError: o,
            }),
        ],
    });
}
function tv(e) {
    let { guild: t, presenceCount: n, memberCount: l } = e;
    return (0, r.jsxs)("div", {
        className: tx.To,
        children: [
            (0, r.jsx)(tj, { guild: t }),
            (0, r.jsxs)("div", {
                className: tx.yj,
                children: [
                    (0, r.jsxs)("div", {
                        className: tx.YS,
                        children: [
                            (0, r.jsx)(ts.A, { guild: t, size: 16 }),
                            (0, r.jsx)(tr.D, {
                                className: tx.J5,
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, tc.uJ)(t.description) &&
                        (0, r.jsx)(Y.E, {
                            className: tx.h_,
                            variant: "body-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, r.jsx)(tg, { presenceCount: n, memberCount: l }),
                ],
            }),
        ],
    });
}
function tb(e) {
    let { guild: t, presenceCount: n, memberCount: l, button: i, className: a } = e;
    return (0, r.jsx)("div", {
        className: u()(tx.kL, a),
        children: (0, r.jsxs)("div", {
            className: tx.hQ,
            children: [(0, r.jsx)(tv, { guild: t, presenceCount: n, memberCount: l }), i],
        }),
    });
}
function tI() {
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
                e2.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: e.code, context: e6.BRT.APP }));
        }, [e, a, i]);
    return null == e || null == e.guild
        ? t && n
            ? (0, r.jsx)(tf, {})
            : null
        : (0, r.jsxs)("div", {
              className: tx.uW,
              children: [
                  (0, r.jsx)(tr.D, {
                      className: tx.Gf,
                      variant: "body-md/medium",
                      color: "text-subtle",
                      children: es.intl.string(es.t["U2N+ci"]),
                  }),
                  (0, r.jsx)(tb, {
                      guild: e.guild,
                      presenceCount: e.approximate_presence_count,
                      memberCount: e.approximate_member_count,
                      button: (0, r.jsx)(tu, { guildName: e.guild.name, isMember: l, onClick: o, fullWidth: !0 }),
                  }),
              ],
          });
}
var tN = n(320448),
    tE = n(152594);
function ty(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, r.jsxs)("div", {
        className: tE.kL,
        "aria-busy": !0,
        children: [
            (0, r.jsxs)("div", {
                className: tE.wR,
                children: [(0, r.jsx)(td.Ay, { className: tE.Iz, width: n }), l && (0, r.jsx)(td.pv, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tA(e) {
    let { children: t, title: n, onClickViewAll: l, trailing: i } = e;
    return (0, r.jsxs)("div", {
        className: tE.kL,
        children: [
            (0, r.jsxs)("div", {
                className: tE.wR,
                children: [
                    (0, r.jsx)(tr.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, r.jsx)(K.$, {
                            size: "sm",
                            icon: tN.ChevronSmallRightIcon,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: es.intl.string(es.t.budhsM),
                        }),
                    i,
                ],
            }),
            t,
        ],
    });
}
var tC = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tk = (0, tn.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tS = n(876798),
    tL = n(481901),
    tR = n(916099),
    tT = n(461353);
function tM() {
    let { layout: e, setLayout: t } = tk(),
        n = es.intl.string(es.t.VGRZh7),
        l = es.intl.string(es.t["NJFr+g"]);
    return (0, r.jsxs)("div", {
        className: tT.k,
        role: "group",
        "aria-label": es.intl.string(es.t.mFMDSq),
        children: [
            (0, r.jsx)(J.m, {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(tS.k, {
                    icon: tL.GridSquareIcon,
                    pressed: e === tC.GRID,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tC.GRID),
                }),
            }),
            (0, r.jsx)(J.m, {
                text: l,
                asContainer: !0,
                children: (0, r.jsx)(tS.k, {
                    icon: tR.ListBulletsIcon,
                    pressed: e === tC.LIST,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tC.LIST),
                }),
            }),
        ],
    });
}
var tO = n(37646),
    tw = n(846183);
function tP(e) {
    var t;
    let n,
        l,
        i,
        { locales: a, onClose: o } = e,
        { game: c } = W(),
        { options: u, toggleLocale: d } =
            ((t = c.id),
            (n = ta(t)),
            (l = ti((e) => e.toggleLocale)),
            (i = s.useMemo(() => {
                let e;
                return (
                    (e = (0, es.getAvailableLocales)()),
                    a
                        .map((t) => {
                            if ("en-US" === t) return { locale: t, label: es.intl.string(es.t.LQLMGP) };
                            let n = e.find((e) => {
                                let { value: n } = e;
                                return n === t;
                            });
                            return { locale: t, label: null != n ? es.intl.string(n.localizedName) : t };
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
        "aria-label": es.intl.string(es.t.OlOHDH),
        onClose: o,
        onSelect: void 0,
        children: u.map((e) => {
            let { locale: t, label: n, checked: l, disabled: i } = e;
            return (0, r.jsx)(X.sL, { id: t, label: n, checked: l, disabled: i, action: () => d(t) }, t);
        }),
    });
}
function tD(e) {
    let { locales: t } = e,
        n = s.useRef(null),
        l = es.intl.string(es.t.OlOHDH);
    return (0, r.jsx)("div", {
        className: tw.k,
        children: (0, r.jsx)(z.Y, {
            targetElementRef: n,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(tP, { locales: t, onClose: n });
            },
            children: (e) =>
                (0, r.jsx)(J.m, {
                    text: l,
                    asContainer: !0,
                    children: (0, r.jsx)(q.K, {
                        buttonRef: n,
                        icon: tO.LanguageIcon,
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
    tG = n(762841);
function t_(e) {
    let { className: t, ariaLabel: n, onClick: l, children: i } = e;
    return (0, r.jsx)(tV.D, { className: u()(tG.v, t), onClick: l, "aria-label": n, children: i });
}
var tW = n(759020);
function tF(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsxs)(t_, {
        className: tW.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, r.jsxs)("div", {
                className: tW.OA,
                children: [
                    (0, r.jsx)(tj, { guild: t }),
                    (0, r.jsxs)("div", {
                        className: tW.FS,
                        children: [
                            (0, r.jsxs)("div", {
                                className: tW.YS,
                                children: [
                                    (0, r.jsx)(ts.A, { guild: t, size: 16 }),
                                    (0, r.jsx)(tr.D, {
                                        className: tW.J5,
                                        variant: "heading-sm/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, tc.uJ)(t.description) &&
                                (0, r.jsx)(Y.E, {
                                    className: tW.h_,
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: tW.Rn, children: (0, r.jsx)(tg, { presenceCount: n, memberCount: l }) }),
        ],
    });
}
var tU = n(620387);
function tY(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsx)(td.qT, { className: tU.s7, animationDelayMs: t, children: (0, r.jsx)(tp, {}) });
}
function tB(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsxs)(td.qT, {
        className: tU.fv,
        animationDelayMs: t,
        children: [
            (0, r.jsx)(td.Ay, { className: tU.VR }),
            (0, r.jsxs)("div", {
                className: tU.hG,
                children: [
                    (0, r.jsx)(td.Ay, { className: tU.t_ }),
                    (0, r.jsx)(td.Ay, { className: tU.Aj }),
                    (0, r.jsx)(td.Ay, { className: tU.ax }),
                ],
            }),
            (0, r.jsx)(td.Ay, { className: tU.Ah }),
        ],
    });
}
function tz(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsx)(t_, {
        className: tU.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, r.jsx)(tv, { guild: t, presenceCount: n, memberCount: l }),
    });
}
function tH(e) {
    let { guild: t, layout: n } = e,
        { game: l, closeModal: i, trackAction: a, viewId: o } = W(),
        c = (0, m.bG)([eJ.A], () => eJ.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = s.useCallback(async () => {
            (a(k.Ws.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await eQ.Z2(t.id, {}, { joinSource: e6.Q4z.GAME_PROFILE_COMMUNITIES, loadId: o }, [
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
        d = n === tC.LIST ? tF : tz;
    return (0, r.jsx)(d, {
        guild: t,
        presenceCount: t.presenceCount,
        memberCount: t.memberCount,
        ariaLabel: c
            ? es.intl.formatToPlainString(es.t.AEfs1D, { guildName: t.name })
            : es.intl.formatToPlainString(es.t.TUZ50q, { guildName: t.name }),
        onClick: u,
    });
}
function tX() {
    var e;
    let t,
        n,
        { game: l } = W(),
        { data: i, isLoading: a } = tt(l.id),
        o = tk((e) => e.layout),
        {
            locales: c,
            filteredGuilds: u,
            showLocaleFilter: d,
        } = ((e = l.id),
        (t = ta(e)),
        {
            locales: (n = s.useMemo(() => eX().uniq((i ?? []).map((e) => e.preferredLocale).filter(eN.Vq)), [i])),
            filteredGuilds: s.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: n.length >= 2,
        }),
        m = o === tC.LIST,
        h = m ? tB : tY,
        g = a && (null == i || 0 === i.length);
    return (0, r.jsxs)(eK.Ch, {
        className: tU.XG,
        children: [
            (0, r.jsx)("div", { className: tU.xY, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: tU.uW,
                children: (0, r.jsx)(tA, {
                    title: es.intl.string(es.t.r6bvTh),
                    trailing: (0, r.jsxs)("div", {
                        className: tU.AA,
                        children: [d && (0, r.jsx)(tD, { locales: c }), (0, r.jsx)(tM, {})],
                    }),
                    children: (0, r.jsx)("div", {
                        className: m ? tU.p_ : tU.Vg,
                        children: g
                            ? eX()
                                  .range(8)
                                  .map((e) => (0, r.jsx)(h, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, r.jsx)(tH, { guild: e, layout: o }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var tK = n(707554),
    t$ = n(369606),
    tJ = n(775602),
    tq = n(21161),
    tQ = n(400492),
    tZ = n(541830),
    t0 = n(459746);
let t1 = "1552821538409939044";
var t2 = n(175213);
let t8 = n(892799);
function t4(e) {
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
    return (0, tc.uJ)(l)
        ? null
        : (0, r.jsxs)("div", {
              ref: t,
              children: [
                  (0, r.jsx)("div", { className: t2.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, r.jsx)("div", { className: t2.N4 }),
              ],
          });
}
function t3() {
    let { game: e } = W(),
        t = (e.genres ?? []).map(tZ.du).join(", ");
    return (0, tc.uJ)(t) ? null : (0, r.jsx)(Y.E, { variant: "body-md/normal", color: "text-muted", children: t });
}
function t6(e) {
    let { rank: t } = e;
    return (0, r.jsxs)("div", {
        className: t2.Qc,
        children: [
            (0, r.jsx)(t$.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, r.jsx)(Y.E, {
                variant: "body-xs/semibold",
                color: "none",
                children: es.intl.formatToPlainString(es.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t9() {
    return (0, r.jsx)(t5, { className: t2._M, imageClassName: t2.xe });
}
function t5(e) {
    let { className: t, imageClassName: n } = e,
        { game: l } = W(),
        i = (0, r.jsx)(t0.Ay, { game: l, className: n, size: t0.wu.LARGE });
    return l.id !== t1
        ? (0, r.jsx)("div", { className: t, children: i })
        : (0, r.jsx)(t7, { className: t, children: i });
}
function t7(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(tq.x),
        i = (0, m.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        a = s.useRef({ count: 0, lastTime: 0 });
    return (0, r.jsx)(tV.D, {
        className: u()(n, t2.b3),
        "aria-label": es.intl.string(es.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = a.current,
                r = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((a.current = { count: r, lastTime: t }), 3 === r)) {
                if (((a.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tQ.Ak)("discodo");
            }
        },
        children: t,
    });
}
let ne = function () {
    let { game: e, isTwoColumn: t } = W(),
        n = e.name;
    return (0, r.jsxs)("div", {
        className: t2.ap,
        children: [
            t && (0, r.jsx)(t5, { className: t2.Tf, imageClassName: t2.w$ }),
            (0, r.jsxs)("div", {
                className: t2.lu,
                children: [
                    null != e.l30Rank && (0, r.jsx)(t6, { rank: e.l30Rank }),
                    (0, r.jsxs)("div", {
                        className: t2.$,
                        children: [
                            (0, r.jsx)(tr.D, { variant: "heading-xxl/semibold", children: n }),
                            e.id === t1 &&
                                (0, r.jsx)("img", {
                                    src: t8,
                                    className: t2.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, r.jsx)(t3, {}),
                ],
            }),
        ],
    });
};
var nt = n(638495),
    nn = n(871123),
    nl = n(439303),
    ni = n(44724),
    na = n(317560),
    nr = n(869099),
    ns = n(151869),
    no = n(761812);
function nc(e) {
    return e;
}
function nu(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: no.B, children: t });
}
function nd(e) {
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
        : (0, r.jsx)(ns.A, {
              gap: "md",
              "aria-label": `${es.intl.string(es.t["kocF+6"])}`,
              items: t,
              getItemKey: nc,
              disableFocusRingScope: !0,
              renderItem: (e, t, l) =>
                  (0, r.jsx)(nu, {
                      children: (0, r.jsx)(nr.Ay, {
                          positionInSection: l,
                          skuId: e,
                          variant: nr.s6.SMALL,
                          analyticsLocations: n,
                          onClick: i,
                          listItemProps: t,
                      }),
                  }),
          });
}
var nm = n(326369),
    nh = n(936785),
    ng = n(403581),
    nx = n(812095),
    nf = n(647474),
    np = n(162536);
function nj(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, eG.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        a = i ? ng.NitroWheelIcon : t.Icon;
    return (0, r.jsx)(nf.A, {
        className: u()(np.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, r.jsxs)("div", {
            className: np.Qs,
            children: [
                null != a && (0, r.jsx)(a, { size: "xs", color: "currentColor", className: np.Kk }),
                (0, r.jsx)(Y.E, { variant: "body-sm/normal", color: "currentColor", children: (0, nx.U)(t.text) }),
            ],
        }),
    });
}
var nv = n(521058);
function nb() {
    let { storefrontPromotion: e } = W();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, tc.uJ)(a.headerText)) return null;
    let s = {
        Icon: (0, nh.LZ)(l?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, nh.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, r.jsx)(nj, { className: nv.v, promotion: s });
}
let nI = [0, 1, 2, 3],
    nN = { placement: nl.Ye.GAME_PROFILE };
function nE() {
    return (0, r.jsx)(ty, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, r.jsx)(nm.A, { children: nI.map((e) => (0, r.jsx)(nu, { children: (0, r.jsx)(nr.yf, {}) }, e)) }),
    });
}
function ny(e) {
    let { selectTab: t } = e,
        n = (0, nt.k)(),
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
                (l(k.Ws.GameShop), c(), (0, ni.default)({ applicationId: i.application.id }));
            }
        }, [i, l, o, t, c]),
        m = s.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (l(k.Ws.GameShopItem),
                    (0, na.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: n,
                        onClose: () => {
                            let { pathname: e, search: n } = location;
                            (0, nn.rG)(e, n, t, a) && c();
                        },
                    }));
            },
            [l, c, u, i, n],
        );
    if (a) return (0, r.jsx)(nE, {});
    if (null == i) return null;
    let { skuIds: h } = i;
    return (0, r.jsxs)(tA, {
        title: es.intl.string(es.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, r.jsx)(nb, {}),
            (0, r.jsx)(nl.E9, {
                newValue: nN,
                children: (0, r.jsx)(nd, { skuIds: h, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var nA = n(621466),
    nC = n(710793),
    nk = n(346055),
    nS = n(460905),
    nL = n(776231),
    nR = n(46054),
    nT = n(5377),
    nM = n(890060),
    nO = n(880405),
    nw = n(284009),
    nP = n.n(nw),
    nD = n(574332),
    nV = n(976860);
async function nG(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    nP()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let o = eJ.A.getGuild(n);
    if (o?.joinedAt == null)
        if (null == s || s.has(e6.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eQ.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: e6.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await nD.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, nV.pX)(e6.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var n_ = n(806244),
    nW = n(165648);
function nF(e, t) {
    return nR.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function nU(e) {
    return e.id;
}
function nY() {
    return (0, r.jsxs)(td.qT, {
        className: n_.s7,
        children: [
            (0, r.jsx)(td.Ay, { className: n_.XN }),
            (0, r.jsxs)("div", {
                className: n_.UF,
                children: [(0, r.jsx)(td.Ay, { className: n_.iX }), (0, r.jsx)(td.Ay, { className: n_.jt })],
            }),
        ],
    });
}
function nB(e, t) {
    let n = (0, nL.kr)(364 * (0, nL.mZ)());
    return (0, nM.VZ)(e, n, Math.round(n / t)) ?? e;
}
function nz(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, a] = s.useState(!1),
        o = s.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, r.jsx)(nC.y, {
              readyState: i ? e6.Rv1.READY : e6.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, r.jsx)("img", {
                  src: n,
                  className: n_.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: o,
              }),
          });
}
function nH(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nA.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nA.vq)(e.target, HTMLSpanElement) && (0, nA.vq)(e.target.parentElement, HTMLAnchorElement))
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
              className: n_.Nr,
              onClick: a,
              children: (0, r.jsxs)(nk.M, {
                  className: n_.zI,
                  children: [
                      null != m.url &&
                          (0, r.jsx)(Y.E, {
                              variant: "body-xs/medium",
                              color: "text-link",
                              className: n_.Ow,
                              children: m.url,
                          }),
                      (0, r.jsxs)("div", {
                          className: n_._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, r.jsxs)("div", {
                                      className: n_.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, r.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: n_.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, r.jsx)(Y.E, {
                                              variant: "body-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, r.jsx)("div", {
                                      className: n_.ax,
                                      children: (0, r.jsx)(nz, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, r.jsx)(tr.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-strong",
                                      className: n_.DD,
                                      children: nF(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, r.jsxs)("div", {
                                      className: u()(n_.h_, nW.PT),
                                      children: [
                                          (0, r.jsx)(Y.E, {
                                              variant: "body-sm/medium",
                                              color: "none",
                                              tag: "div",
                                              children: nF(t.body, n),
                                          }),
                                          (0, r.jsx)("div", { className: n_.fm }),
                                      ],
                                  }),
                              (0, r.jsxs)("div", {
                                  className: n_.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, r.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: n_.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, r.jsxs)(Y.E, {
                                          variant: "body-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, nT.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, r.jsxs)("div", {
                                              className: n_.a5,
                                              children: [
                                                  (0, r.jsx)(nS.ReactionIcon, { size: "xs", color: "currentColor" }),
                                                  (0, r.jsx)(Y.E, {
                                                      variant: "body-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(es.intl.currentLocale).format(
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
let nX = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, r.jsxs)(nk.M, {
        className: n_.zI,
        children: [
            null != t.title &&
                (0, r.jsx)(tr.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: n_.DD,
                    children: nF(t.title, n),
                }),
            t.body.length > 0 &&
                (0, r.jsxs)("div", {
                    className: u()(n_.h_, nW.PT),
                    children: [
                        (0, r.jsx)(Y.E, {
                            variant: "body-sm/medium",
                            color: "none",
                            tag: "div",
                            children: nF(t.body, n),
                        }),
                        (0, r.jsx)("div", { className: n_.fm }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: n_.ov,
                children: [
                    (0, r.jsx)(Y.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        children: (0, nT.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, r.jsxs)("div", {
                            className: n_.a5,
                            children: [
                                (0, r.jsx)(nS.ReactionIcon, { size: "xs", color: "currentColor" }),
                                (0, r.jsx)(Y.E, {
                                    variant: "body-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(es.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function nK(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nA.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nA.vq)(e.target, HTMLSpanElement) && (0, nA.vq)(e.target.parentElement, HTMLAnchorElement))
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
        className: n_.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, r.jsx)("div", {
                    className: n_.Vl,
                    children: (0, r.jsx)(nz, { message: t, src: u, aspectRatio: o }),
                }),
            (0, r.jsx)(nX, { message: t, channelId: n }),
        ],
    });
}
function n$(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        a = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, r.jsx)(tV.D, {
        ...l,
        className: n_.Nr,
        onClick: a,
        children: (0, r.jsxs)(nk.M, {
            className: n_.zI,
            children: [
                (0, r.jsx)(tr.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: n_.MH,
                    children: i.question.text,
                }),
                (0, r.jsxs)("div", {
                    className: n_.xd,
                    children: [
                        o.map((e) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className: n_.Nf,
                                    children: (0, r.jsx)(Y.E, {
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        className: n_.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        c > 0 &&
                            (0, r.jsx)(Y.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                className: n_.PF,
                                children: es.intl.format(es.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: n_.ov,
                    children: (0, r.jsx)(Y.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        children: es.intl.format(es.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, nM.jL)(i),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function nJ(e) {
    return null != e.message.poll
        ? (0, r.jsx)(n$, { ...e })
        : null != e.message.embedSource
          ? (0, r.jsx)(nH, { ...e })
          : (0, r.jsx)(nK, { ...e });
}
let nq = s.memo(function (e) {
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
                    null == e || n || L.A.isAnnouncementsFetching(e) || (0, nO.Rf)(e, { limit: 8 });
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
                nG({ invite: i, guildId: e, channelId: g, analyticsLocationStack: n }));
        }, [c, o, t, i, h, g, n, u]),
        v = s.useCallback(
            (e) => {
                let l = i?.guild?.id ?? h;
                null != l &&
                    null != g &&
                    (c(k.Ws.AnnouncementsItem),
                    eZ.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                    o(),
                    nG({ invite: i, guildId: l, channelId: g, messageId: e, analyticsLocationStack: n }));
            },
            [c, o, t, i, h, g, n, u],
        ),
        b = null != g && d.length > 0;
    return (!f || x) && a
        ? (0, r.jsx)(ty, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, r.jsx)(nm.A, {
                  gap: 16,
                  children: eX()
                      .range(3)
                      .map((e) => (0, r.jsx)(nY, {}, e)),
              }),
          })
        : b
          ? (0, r.jsx)(tA, {
                title: es.intl.string(es.t.B0BV3Y),
                onClickViewAll: j,
                children: (0, r.jsx)(ns.A, {
                    gap: 16,
                    items: d,
                    getItemKey: nU,
                    itemClassName: n_.hu,
                    renderItem: (e, t) =>
                        (0, r.jsx)(nJ, { message: e, channelId: g, onCardClick: v, listItemProps: t }, e.id),
                }),
            })
          : null;
});
var nQ = n(155718),
    nZ = n(505779);
(n(323874), n(14289), n(35956));
var n0 = n(989441);
let n1 = {
        appStore: {
            websiteCategories: [nZ.V1.IPHONE, nZ.V1.IPAD],
            websiteHostnames: nZ.FU,
            distributor: n0.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://${nZ.FU["0"]}/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [nZ.V1.ANDROID],
            websiteHostnames: nZ.SX,
            distributor: n0.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://${nZ.SX["0"]}/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    n2 = new Set(
        Object.values(n1).flatMap((e) => {
            let { websiteCategories: t } = e;
            return t;
        }),
    );
function n8(e, t) {
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
var n4 = n(808380);
let n3 = [n4.Y.DESKTOP, "mobile", n4.Y.XBOX, n4.Y.PLAYSTATION, n4.Y.NINTENDO, n4.Y.ROBLOX];
var n6 = n(28863),
    n9 = n(975807),
    n5 = n(194362);
function n7() {
    let { game: e, trackAction: t } = W(),
        n = s.useCallback(async () => {
            t(k.Ws.ClaimGame);
            let e = await (0, n5.a)(e6.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, n9.A)(e);
        }, [t]),
        l = s.useCallback((e) => (0, r.jsx)(n6.Anchor, { onClick: n, children: e }), [n]);
    return e.linkedApplications?.some((e) => e.type === nQ.Mh.OFFICIAL)
        ? null
        : (0, r.jsx)(Y.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              children: es.intl.format(es.t.KAjfKl, { claimLink: l }),
          });
}
var le = n(998445),
    lt = n(274997),
    ln = n(80500),
    ll = n(319745),
    li = n(488225),
    la = n(967492),
    lr = n(72265),
    ls = n(454346),
    lo = n(341904),
    lc = n(423438),
    lu = n(610509),
    ld = n(575888),
    lm = n(924895),
    lh = n(37948),
    lg = n(471177);
let lx = { size: "xs", colorClass: lg.w };
function lf(e) {
    let { website: t } = e,
        { trackAction: n } = W(),
        l = (0, lh.A)(),
        {
            action: i,
            icon: a,
            title: o,
        } = (function (e, t) {
            switch (e.category) {
                case nZ.V1.OFFICIAL:
                    return {
                        icon: (0, r.jsx)(le.GlobeEarthIcon, { ...t }),
                        action: k.Ws.WebsiteLink,
                        title: es.intl.string(es.t.fOUKvg),
                    };
                case nZ.V1.TWITTER:
                    return {
                        icon: (0, r.jsx)(lt.XNeutralIcon, { ...t }),
                        action: k.Ws.XLink,
                        title: es.intl.string(es.t.INic4y),
                    };
                case nZ.V1.YOUTUBE:
                    return {
                        action: k.Ws.YouTubeLink,
                        icon: (0, r.jsx)(ln.YoutubeNeutralIcon, { ...t }),
                        title: es.intl.string(es.t.lNmxbE),
                    };
                case nZ.V1.FACEBOOK:
                    return {
                        icon: (0, r.jsx)(ll.FacebookNeutralIcon, { ...t }),
                        action: k.Ws.FacebookLink,
                        title: es.intl.string(es.t.FjyREK),
                    };
                case nZ.V1.INSTAGRAM:
                    return {
                        icon: (0, r.jsx)(li.InstagramNeutralIcon, { ...t }),
                        action: k.Ws.InstagramLink,
                        title: es.intl.string(es.t["cgR+IK"]),
                    };
                case nZ.V1.BLUESKY:
                    return {
                        icon: (0, r.jsx)(la.BlueskyNeutralIcon, { ...t }),
                        action: k.Ws.BlueskyLink,
                        title: es.intl.string(es.t["D/PHq5"]),
                    };
                case nZ.V1.REDDIT:
                    return {
                        icon: (0, r.jsx)(lr.RedditNeutralIcon, { ...t }),
                        action: k.Ws.RedditLink,
                        title: es.intl.string(es.t["Hgb+fc"]),
                    };
                case nZ.V1.TWITCH:
                    return {
                        icon: (0, r.jsx)(ls.TwitchNeutralIcon, { ...t }),
                        action: k.Ws.TwitchLink,
                        title: es.intl.string(es.t["7xtz4G"]),
                    };
                case nZ.V1.ITCH:
                    return {
                        icon: (0, r.jsx)(lo.ItchNeutralIcon, { ...t }),
                        action: k.Ws.ItchLink,
                        title: es.intl.string(es.t.nOrtg9),
                    };
                case nZ.V1.WIKIA:
                    return {
                        icon: (0, r.jsx)(lc.FandomNeutralIcon, { ...t }),
                        action: k.Ws.FandomLink,
                        title: es.intl.string(es.t.xDtQAQ),
                    };
                case nZ.V1.IPHONE:
                case nZ.V1.IPAD:
                    return {
                        icon: (0, r.jsx)(lu.AppleNeutralIcon, { ...t }),
                        action: k.Ws.AppStoreLink,
                        title: es.intl.string(es.t.LVy7Ug),
                    };
                case nZ.V1.ANDROID:
                    return {
                        icon: (0, r.jsx)(ld.GooglePlayNeutralIcon, { ...t }),
                        action: k.Ws.GooglePlayStoreLink,
                        title: es.intl.string(es.t.V6rllO),
                    };
                case nZ.V1.ROBLOX:
                    return {
                        icon: (0, r.jsx)(lm.RobloxNeutralIcon, { ...t }),
                        action: k.Ws.RobloxStoreLink,
                        title: es.intl.string(es.t["pJ+P+h"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, lx),
        c = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, r.jsx)(J.m, {
        text: o,
        children: (0, r.jsx)(tV.D, { onClick: c, className: lg.y, title: o, children: a }),
    });
}
var lp = n(31300),
    lj = n(646270),
    lv = n(802516),
    lb = n(22363),
    lI = n(418524);
let lN = {
    [n4.Y.DESKTOP]: lp.ScreenIcon,
    mobile: lj.MobilePhoneIcon,
    [n4.Y.XBOX]: lv.XboxNeutralIcon,
    [n4.Y.PLAYSTATION]: lb.PlaystationNeutralIcon,
    [n4.Y.NINTENDO]: lI.NintendoSwitchNeutralIcon,
    [n4.Y.ROBLOX]: lm.RobloxNeutralIcon,
};
function lE(e) {
    let { platform: t } = e,
        n = (function (e) {
            switch (e) {
                case n4.Y.DESKTOP:
                    return es.intl.string(es.t.KT6uCJ);
                case "mobile":
                    return es.intl.string(es.t["0DvssQ"]);
                case n4.Y.XBOX:
                    return es.intl.string(es.t.DDWUJp);
                case n4.Y.PLAYSTATION:
                    return es.intl.string(es.t.fzMz2s);
                case n4.Y.NINTENDO:
                    return es.intl.string(es.t.AMW8je);
                case n4.Y.ROBLOX:
                    return es.intl.string(es.t.MPURhG);
            }
        })(t),
        l = lN[t];
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
var ly = n(424994),
    lA = n(623828);
function lC() {
    return (0, r.jsx)(Y.E, { variant: "body-sm/normal", color: "text-subtle", children: es.intl.string(es.t.GruYxV) });
}
let lk = function () {
    let { game: e } = W(),
        t = s.useMemo(() => e.genres.map(tZ.du).join(", "), [e]),
        n = e.getCompanyByRole(nQ.wk.PUBLISHER),
        l = e.getCompanyByRole(nQ.wk.DEVELOPER),
        i = n.map((e) => e.name).join(", "),
        a = l.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        c = s.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(n4.Y.MACOS) || t.has(n4.Y.LINUX)) && t.add(n4.Y.DESKTOP);
            let n = t.has(n4.Y.IOS) || t.has(n4.Y.ANDROID);
            return n3.filter((e) => ("mobile" === e ? n : t.has(e)));
        }, [e.platforms]),
        u = s.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return nZ.pF.includes(t) && !n2.has(t);
                }),
                n = Object.values(n1)
                    .map((t) => n8(e, t))
                    .filter(eN.Vq);
            return t.sort((e, t) => nZ.pF.indexOf(e.category) - nZ.pF.indexOf(t.category)).concat(n);
        }, [e]),
        d = !(0, tc.uJ)(t),
        m = !(0, tc.uJ)(i),
        h = !(0, tc.uJ)(a),
        g = !(0, tc.uJ)(o),
        x = c.length > 0,
        f = u.length > 0 && !u.every((e) => (0, tc.uJ)(e.url));
    return (0, r.jsxs)("div", {
        className: lA.uW,
        children: [
            (0, r.jsx)("div", {
                className: lA.Gf,
                children: (0, r.jsx)(tr.D, {
                    variant: "body-md/medium",
                    color: "text-subtle",
                    children: es.intl.string(es.t["7OjmmH"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: lA.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: lA.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? es.intl.string(es.t.pDgwYB) : es.intl.string(es.t.mjFKqn),
                            }),
                            d
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lA.Gu,
                                      children: t,
                                  })
                                : (0, r.jsx)(lC, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lA.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? es.intl.string(es.t.Hc7Enk) : es.intl.string(es.t["4Byy/G"]),
                            }),
                            m
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lA.Gu,
                                      children: i,
                                  })
                                : (0, r.jsx)(lC, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lA.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== l.length ? es.intl.string(es.t.KATEJB) : es.intl.string(es.t.na3PT0),
                            }),
                            h
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lA.Gu,
                                      children: a,
                                  })
                                : (0, r.jsx)(lC, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lA.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: es.intl.string(es.t.H3mPDT),
                            }),
                            g
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lA.Gu,
                                      children: nT.i$(new Date(o), "LL"),
                                  })
                                : (0, r.jsx)(lC, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lA.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: c.length > 1 ? es.intl.string(es.t.PNqxNe) : es.intl.string(es.t["UxAag+"]),
                            }),
                            x
                                ? (0, r.jsx)("div", {
                                      className: lA.Gu,
                                      children: c.map((e) => (0, r.jsx)(lE, { platform: e }, e)),
                                  })
                                : (0, r.jsx)(lC, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lA.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: es.intl.string(es.t["Oj3o1/"]),
                            }),
                            f
                                ? (0, r.jsx)("div", {
                                      className: lA.Gu,
                                      children: u.map((e) => (0, r.jsx)(lf, { website: e }, e.url)),
                                  })
                                : (0, r.jsx)(lC, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lA.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: es.intl.string(es.t["BwQ+9e"]),
                            }),
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                className: lA.Gu,
                                children: es.intl.format(es.t.XPFZVl, { igdbLink: ly.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: lA.OQ, children: (0, r.jsx)(n7, {}) }),
        ],
    });
};
var lS = n(141628),
    lL = n(289363),
    lR = n(793919);
function lT() {
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: lR.uW,
        children: [
            (0, r.jsx)(td.Ay, { className: lR.dU, width: "30%" }),
            (0, r.jsxs)(td.qT, {
                className: lR.nV,
                children: [
                    (0, r.jsx)("div", { className: lR.sB, children: (0, r.jsx)(lL.default, { isLoading: !0 }) }),
                    (0, r.jsxs)("div", {
                        className: lR.hQ,
                        children: [
                            (0, r.jsxs)("div", {
                                className: lR.Yv,
                                children: [(0, r.jsx)(td.Ay, { width: "55%" }), (0, r.jsx)(td.Ay, { width: "85%" })],
                            }),
                            (0, r.jsx)(td.pv, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function lM(e) {
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
          ? (0, r.jsx)(lT, {})
          : !a || i
            ? null
            : (0, r.jsxs)("div", {
                  className: lR.uW,
                  children: [
                      (0, r.jsx)(tr.D, {
                          className: lR.Gf,
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: es.intl.string(es.t["VDAhr+"]),
                      }),
                      (0, r.jsxs)("div", {
                          className: lR.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: lR.sB,
                                  children: (0, r.jsx)(lL.default, { application: c }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: lR.hQ,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: lR.FS,
                                          children: [
                                              (0, r.jsx)(tr.D, {
                                                  variant: "heading-sm/semibold",
                                                  color: "text-default",
                                                  children: es.intl.formatToPlainString(es.t.hUbQT2, {
                                                      gameName: c.name,
                                                  }),
                                              }),
                                              (0, r.jsx)(Y.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-muted",
                                                  children: es.intl.string(es.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(K.$, {
                                          variant: "secondary",
                                          icon: lS.ExperimentalGameControllerLinkIcon,
                                          text: es.intl.string(es.t.jynBQ5),
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
var lO = n(80687),
    lw = n(248643),
    lP = n(256905),
    lD = n(383055),
    lV = n(191096),
    lG = n(90721),
    l_ = n(371794),
    lW = n(534573),
    lF = n(635377);
let lU = new (n.n(lF)())({ max: 100 });
function lY() {
    let e = new Map();
    return (lU.forEach((t, n) => e.set(n, t)), e);
}
var lB = n(342857);
function lz(e, t) {
    return (0, lW.Ec)(e, { size: t, keepAspectRatio: !0, format: to.QB ? "webp" : null });
}
let lH = s.memo(function (e) {
    let { url: t, size: n, alt: l, className: i, ...a } = e,
        { dimensions: o, recordDimensions: c } = (function () {
            let [e, t] = s.useState(lY);
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
                        let i = lU.get(e) ?? l;
                        (lU.set(e, i),
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
            m && (0, r.jsx)("img", { ...a, src: lz(t, 106), className: lB.cL, alt: "", draggable: !1 }),
            (0, r.jsx)("img", {
                ...a,
                ref: h,
                src: lz(t, n),
                className: u()(i, lB.Sl, m && lB.F1),
                "data-portrait": m || void 0,
                alt: l,
                onLoad: g,
            }),
        ],
    });
});
var lX = n(140128);
function lK(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
let l$ = s.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: i, onSelect: a, gameName: o, listItemProps: c } = e,
            d = s.useCallback(() => a(n), [a, n]),
            m = c?.tabIndex;
        return (0, r.jsx)(tV.D, {
            ...c,
            className: u()(lX.JS, l && lX.Y4),
            onClick: d,
            children: (0, r.jsxs)("div", {
                className: lX.ub,
                children: [
                    (0, r.jsx)("div", {
                        className: lX.kV,
                        children: (0, r.jsx)(lH, {
                            url: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                            size: 106,
                            className: lX.xn,
                            alt: es.intl.formatToPlainString(es.t.COYYrn, { game: o }),
                            loading: "lazy",
                            decoding: "async",
                            draggable: !1,
                        }),
                    }),
                    "VIDEO" === t.type &&
                        (0, r.jsx)("div", {
                            className: lX.UZ,
                            children: (0, r.jsx)(lO.D, { playing: l && i, size: "sm", tabIndex: m }),
                        }),
                ],
            }),
        });
    }),
    lJ = s.memo(function (e) {
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
            (0, lG.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    !n && (0, r.jsx)("canvas", { ref: d, className: lX.HW, "aria-hidden": "true" }),
                    (0, r.jsx)("div", {
                        className: lX.tN,
                        children: (0, r.jsx)(lw.A, {
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
                            renderLinkComponent: lD.bU,
                            onPlay: o,
                            onPause: c,
                            onFullscreenChange: u,
                            mediaPlayerClassName: lX.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function lq() {
    let { game: e, trackAction: t } = W(),
        [n, l] = s.useState(0),
        [i, a] = s.useState(null),
        [o, c] = s.useState(e.screenshotUrls),
        d = s.useRef(null),
        h = s.useRef(null),
        g = (0, m.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        { obscured: x } = (0, lV.I3)();
    o !== e.screenshotUrls && (c(e.screenshotUrls), l(0));
    let f = s.useMemo(() => {
            let t = (e.trailers ?? []).map((e) => {
                    let t = (0, l_.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, l_.YE)(e.application_id, e.id, e.width, "webp"),
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
            (0, lP.R)({
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
              className: lX.kL,
              children: [
                  b
                      ? (0, r.jsx)("div", {
                            className: lX.ND,
                            children: (0, r.jsx)(
                                lJ,
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
                            className: lX.wp,
                            children: [
                                null != i &&
                                    !g &&
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: lX.Jy,
                                            onAnimationEnd: L,
                                            children: (0, r.jsx)(lH, { url: i, size: 900, className: lX.c8, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, r.jsx)("div", { className: lX.QN }),
                                (0, r.jsx)(tV.D, {
                                    className: lX.gv,
                                    onClick: A,
                                    children: (0, r.jsx)("div", {
                                        className: lX.cs,
                                        children: (0, r.jsx)(
                                            lH,
                                            {
                                                url: v.url,
                                                size: 900,
                                                className: u()(lX.c8, lX.Jf),
                                                alt: es.intl.formatToPlainString(es.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  (0, r.jsx)(ns.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      items: p,
                      getItemKey: lK,
                      renderItem: (t, n) => {
                          let { item: l, index: i } = t;
                          return (0, r.jsx)(
                              l$,
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
var lQ = n(49381),
    lZ = n(223273);
function l0(e, t, n) {
    if (null == e || null == t || t < 10) return lZ.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? lZ.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? lZ.vI.VERY_POSITIVE
              : lZ.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return lZ.vI.MOSTLY_POSITIVE;
    if (e >= 40) return lZ.vI.MIXED;
    if (e >= 20) return lZ.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return lZ.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return lZ.vI.VERY_NEGATIVE;
    return lZ.vI.OVERWHELMINGLY_NEGATIVE;
}
var l1 = n(792216);
let l2 = {
    appStore: { getTitle: () => es.intl.string(es.t.LVy7Ug), action: k.Ws.AppStoreReviews },
    googlePlay: { getTitle: () => es.intl.string(es.t.V6rllO), action: k.Ws.GooglePlayReviews },
};
function l8(e) {
    switch (e) {
        case lZ.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case lZ.vI.OVERWHELMINGLY_POSITIVE:
        case lZ.vI.VERY_POSITIVE:
        case lZ.vI.POSITIVE:
        case lZ.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case lZ.vI.MIXED:
            return "steam-review-text-mixed";
        case lZ.vI.MOSTLY_NEGATIVE:
        case lZ.vI.NEGATIVE:
        case lZ.vI.VERY_NEGATIVE:
        case lZ.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var l4 =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    l3 = n(778591);
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
var l9 = n(315189);
let l5 = { appStore: lu.AppleNeutralIcon, googlePlay: ld.GooglePlayNeutralIcon };
function l7(e) {
    let { review: t } = e,
        { trackAction: n } = W(),
        l = (0, lh.A)(),
        i = l5[t.key],
        { action: a, url: o } = t,
        c = s.useCallback(() => {
            (n(a), l(o));
        }, [a, l, n, o]);
    return (0, r.jsx)(tV.D, {
        onClick: c,
        className: l9.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, r.jsxs)("div", {
            className: l9.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: l9.hU,
                    children: [
                        (0, r.jsx)(i, { size: "sm", color: eR.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tr.D, { variant: "heading-xs/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: l9.nK,
                    children: [
                        (0, r.jsx)(Y.E, {
                            variant: "body-xs/medium",
                            color: "text-strong",
                            className: l9.yX,
                            children: t.ratingText,
                        }),
                        (0, r.jsx)(Y.E, {
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
function ie(e) {
    let { url: t, title: n, rating: l, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: o } = W(),
        c = (0, lh.A)(),
        u = l0(l, i, "recent" === a),
        d = l8(u),
        m = s.useCallback(() => {
            (o(k.Ws.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, r.jsx)(tV.D, {
        onClick: m,
        className: l9.nf,
        role: "link",
        "aria-label": es.intl.string(es.t.YNC5Di),
        children: (0, r.jsxs)("div", {
            className: l9.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: l9.hU,
                    children: [
                        (0, r.jsx)(lQ.SteamNeutralIcon, { size: "sm", color: eR.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tr.D, { variant: "heading-xs/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, r.jsx)(
                    J.m,
                    {
                        text:
                            u === lZ.vI.NO_USER_REVIEWS
                                ? es.intl.string(es.t.CLMt8J)
                                : es.intl
                                      .format(
                                          "recent" === a
                                              ? es.t.TzvC0k
                                              : "localized" === a
                                                ? es.t.EOfrwm
                                                : es.t["lzANJ/"],
                                          { rating: l, rating_count: i?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, r.jsxs)("div", {
                            className: l9.nK,
                            children: [
                                (0, r.jsx)(Y.E, {
                                    variant: "body-xs/medium",
                                    color: d,
                                    className: l9.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case lZ.vI.NO_USER_REVIEWS:
                                                return es.intl.string(es.t.CLMt8J);
                                            case lZ.vI.OVERWHELMINGLY_POSITIVE:
                                                return es.intl.string(es.t["75sx1S"]);
                                            case lZ.vI.VERY_POSITIVE:
                                                return es.intl.string(es.t["EkOVg+"]);
                                            case lZ.vI.POSITIVE:
                                                return es.intl.string(es.t.ZUkFtr);
                                            case lZ.vI.MOSTLY_POSITIVE:
                                                return es.intl.string(es.t.M7Z09a);
                                            case lZ.vI.MIXED:
                                                return es.intl.string(es.t.c8yuHR);
                                            case lZ.vI.MOSTLY_NEGATIVE:
                                                return es.intl.string(es.t.H0MSjG);
                                            case lZ.vI.NEGATIVE:
                                                return es.intl.string(es.t.vpLrgz);
                                            case lZ.vI.VERY_NEGATIVE:
                                                return es.intl.string(es.t["5spYuX"]);
                                            case lZ.vI.OVERWHELMINGLY_NEGATIVE:
                                                return es.intl.string(es.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== lZ.vI.NO_USER_REVIEWS &&
                                    (0, r.jsx)(Y.E, {
                                        variant: "body-xs/medium",
                                        color: "text-subtle",
                                        children: es.intl
                                            .format(es.t.sgIoin, { rating_count: i.toLocaleString() })
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
function it(e) {
    let { url: t } = e,
        { game: n, trackAction: l } = W(),
        { reviews: i } = n,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = a.tier,
        c = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (c <= 0 || u <= 0) && null == o,
        m = (0, lh.A)(),
        h = s.useCallback(() => {
            (l(k.Ws.OpenCriticReviews), m(t));
        }, [m, l, t]);
    return (0, r.jsx)(tV.D, {
        onClick: h,
        className: l9.nf,
        role: "link",
        "aria-label": es.intl.string(es.t.aLNBAw),
        children: (0, r.jsxs)("div", {
            className: l9.Ur,
            children: [
                (0, r.jsx)(tr.D, {
                    variant: "heading-xs/medium",
                    color: "text-strong",
                    children: es.intl.string(es.t["UxvER+"]),
                }),
                (0, r.jsxs)("div", {
                    className: l9.WA,
                    children: [
                        null != o ? (0, r.jsx)(il, { tier: o }) : null,
                        null != o && c > 0 && u > 0 ? (0, r.jsx)(ii, { rating: c, tier: o }) : null,
                        d
                            ? (0, r.jsx)(Y.E, {
                                  variant: "body-xs/medium",
                                  color: l8(lZ.vI.NO_USER_REVIEWS),
                                  children: es.intl.string(es.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function il(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case l4.MIGHTY:
                    return es.intl.string(es.t.aZej2g);
                case l4.STRONG:
                    return es.intl.string(es.t.MLxnSg);
                case l4.FAIR:
                    return es.intl.string(es.t["3f19KA"]);
                case l4.WEAK:
                    return es.intl.string(es.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case l4.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case l4.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case l4.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case l4.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, r.jsx)(
        J.m,
        {
            text: n,
            children: (0, r.jsx)("div", {
                className: l9.TE,
                children: (0, r.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function ii(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case l4.MIGHTY:
                    t = "#fc430a";
                    break;
                case l4.STRONG:
                    t = "#9e00b4";
                    break;
                case l4.FAIR:
                    t = "#4aa1ce";
                    break;
                case l4.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, r.jsx)(
        J.m,
        {
            text: es.intl.string(es.t.Ub4YR1),
            children: (0, r.jsxs)("div", {
                className: l9.TE,
                style: { backgroundColor: i },
                children: [
                    (0, r.jsx)(l6, { rating: t, strokeColor: l }),
                    (0, r.jsx)(Y.E, {
                        variant: "body-xs/semibold",
                        color: "text-overlay-light",
                        className: l9.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let ia = function () {
    let { game: e } = W(),
        t = (0, l3.I)(e.id),
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
                l = e.steamReleaseStatus !== l1.Y.RETIRED_ABANDONED && null != t,
                i = l0(n?.recentRating, n?.recentRatingCount, !0),
                a = l && i !== lZ.vI.NO_USER_REVIEWS,
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
                primarySteamTitleKey: r ? es.t["aWb+V4"] : es.t["8e4LiB"],
                mobileStoreReviews: Object.entries(l2).flatMap((t) => {
                    var n;
                    let l,
                        i,
                        [a, r] = t,
                        s = e.reviews?.[a],
                        o = s?.rating,
                        c = s?.ratingCount;
                    if (null == o || null == c) return [];
                    let u = n8(e, n1[a]);
                    return null != u
                        ? [
                              ((n = u.url),
                              (l = r.getTitle()),
                              (i = new Intl.NumberFormat(es.intl.currentLocale, {
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 1,
                              }).format(o)),
                              {
                                  key: a,
                                  url: n,
                                  title: l,
                                  ratingText: es.intl.format(es.t["zdL4/T"], { rating: i }).toString(),
                                  ratingCountText: es.intl.format(es.t.u1m2hs, { rating_count: c }).toString(),
                                  accessibilityLabel: es.intl
                                      .format(es.t["63jSRx"], { store: l, rating: i, rating_count: c })
                                      .toString(),
                                  action: r.action,
                              }),
                          ]
                        : [];
                }),
            };
        }, [e, t]),
        h =
            (e.steamReleaseStatus !== l1.Y.RETIRED_ABANDONED || m.length > 0) &&
            e.reviews?.opencritic != null &&
            null != e.opencriticUrl;
    return i || h || 0 !== m.length
        ? (0, r.jsxs)("div", {
              className: l9.uW,
              children: [
                  (0, r.jsx)("div", {
                      className: l9.Gf,
                      children: (0, r.jsx)(tr.D, {
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: es.intl.string(es.t.GaAQXP),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: l9.kL,
                      children: [
                          a && null != t
                              ? (0, r.jsx)("div", {
                                    className: l9.WH,
                                    children: (0, r.jsx)(ie, {
                                        url: t,
                                        title: es.intl.string(es.t.MQGNsN),
                                        rating: l?.recentRating,
                                        ratingCount: l?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          i && null != t
                              ? (0, r.jsx)("div", {
                                    className: l9.WH,
                                    children: (0, r.jsx)(ie, {
                                        url: t,
                                        title: es.intl.string(d),
                                        rating: c,
                                        ratingCount: u,
                                        tooltipVariant: o ? "localized" : "all",
                                    }),
                                })
                              : null,
                          m.map((e) =>
                              (0, r.jsx)("div", { className: l9.WH, children: (0, r.jsx)(l7, { review: e }) }, e.key),
                          ),
                          h && null != n
                              ? (0, r.jsx)("div", { className: l9.WH, children: (0, r.jsx)(it, { url: n }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var ir = n(969935),
    is = n(722258),
    io = n(987421),
    ic = n(561769),
    iu = n(484469),
    id = n(57020),
    im = n(682301);
let ih = [];
var ig = n(758836),
    ix = n(399872);
let ip = [0, 1, 2, 3, 4];
function ij(e) {
    return e.skuId;
}
function iv(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = s.useContext(ic.v3),
        { trackAction: u } = W(),
        d = s.useRef(null),
        m = s.useCallback(
            (e) => {
                (u(k.Ws.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, is.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, id.A)({ product: t }),
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
    return (0, r.jsx)(ic.v3.Provider, {
        value: h,
        children: (0, r.jsx)(io.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: ix.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function ib() {
    return (0, r.jsx)(iu.A, {});
}
function iI() {
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
                            null == e || t || L.A.isShopCollectionFetching(e) || (0, nO.hd)(e);
                        }, [e, t]),
                        { skuIds: l ?? ih, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, im.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(e.shopCollectionIds?.[0]),
        a = s.useCallback(() => {
            (n(k.Ws.DiscordCollectiblesShop),
                t(),
                (0, ir.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: ig.G2.CATALOG,
                }));
        }, [n, t]);
    return i
        ? (0, r.jsx)(ty, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, r.jsx)(nm.A, { children: ip.map((e) => (0, r.jsx)(ib, {}, e)) }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(tA, {
                title: es.intl.string(es.t["5DYPT8"]),
                onClickViewAll: a,
                children: (0, r.jsx)(ns.A, {
                    gap: "md",
                    items: l,
                    getItemKey: ij,
                    renderItem: (e, t) => (0, r.jsx)(iv, { product: e, listItemProps: t }, e.skuId),
                }),
            });
}
var iN = n(459778),
    iE = n(281018),
    iy = n(987070);
let iA = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iC(e) {
    return e.id;
}
function ik(e) {
    let { game: t, listItemProps: n } = e,
        { navigateToGame: l, trackAction: i } = W(),
        { shouldOpenGameProfile: a, gameId: o } = (0, iN.Ay)({
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
            className: iy.Nr,
            onClick: c,
            "aria-label": es.intl.formatToPlainString(es.t["8QLQB+"], { gameName: t.name }),
            children: (0, r.jsx)(t0.Ay, {
                game: t,
                className: iy.xe,
                size: t0.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, r.jsx)(t0.gr, { className: iy.uz }),
            }),
        }),
    });
}
function iS() {
    let { game: e } = W(),
        t = e.id,
        { isFetching: n, similarGames: l } = (0, iE.A)(t);
    return n
        ? (0, r.jsx)(ty, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, r.jsx)("div", {
                  className: iy.XG,
                  style: iA,
                  children: (0, r.jsx)(nm.A, {
                      children: eX()
                          .range(0, 8)
                          .map((e) => (0, r.jsx)(t0.gr, { className: iy.aZ }, e)),
                  }),
              }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(tA, {
                title: es.intl.string(es.t["6rLyQB"]),
                children: (0, r.jsx)("div", {
                    className: iy.XG,
                    style: iA,
                    children: (0, r.jsx)(ns.A, {
                        gap: "md",
                        items: l,
                        getItemKey: iC,
                        itemClassName: iy.cW,
                        renderItem: (e, t) => (0, r.jsx)(ik, { game: e, listItemProps: t }, e.id),
                    }),
                }),
            });
}
n(667532);
var iL = n(853022);
let iR = new Set(["1402418703554842694", "356877880938070016"]),
    iT = [nZ.V1.EPICGAMES, nZ.V1.STEAM, nZ.V1.ROBLOX, nZ.V1.BATTLENET, nZ.V1.RIOT, nZ.V1.MINECRAFT];
function iM(e) {
    return (0, r.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iO = n(349361),
    iw = n(422688),
    iP = n(505200),
    iD = n(695250);
let iV = function (e) {
    switch (e.category) {
        case nZ.V1.STEAM:
            return {
                icon: lQ.SteamNeutralIcon,
                text: es.intl.string(es.t.FsANs4),
                ariaLabel: es.intl.string(es.t["P+ePTG"]),
                action: k.Ws.SteamStoreLink,
                url: e.url,
            };
        case nZ.V1.EPICGAMES:
            return {
                icon: iO.EpicGamesNeutralIcon,
                text: es.intl.string(es.t.ZbBMHa),
                ariaLabel: es.intl.string(es.t.BwX0UW),
                action: k.Ws.EpicStoreLink,
                url: e.url,
            };
        case nZ.V1.ROBLOX:
            return {
                icon: lm.RobloxNeutralIcon,
                text: es.intl.string(es.t["pJ+P+h"]),
                ariaLabel: es.intl.string(es.t.tYxpdf),
                action: k.Ws.RobloxStoreLink,
                url: e.url,
            };
        case nZ.V1.BATTLENET:
            return {
                icon: iw.BattlenetNeutralIcon,
                text: es.intl.string(es.t["A7grp+"]),
                ariaLabel: es.intl.string(es.t.x9at20),
                action: k.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case nZ.V1.RIOT:
            return {
                icon: iP.RiotGamesNeutralIcon,
                text: es.intl.string(es.t.h6MapL),
                ariaLabel: es.intl.string(es.t["528nvc"]),
                action: k.Ws.RiotStoreLink,
                url: e.url,
            };
        case nZ.V1.MINECRAFT:
            return {
                icon: iD.MinecraftNeutralIcon,
                text: es.intl.string(es.t["HZbmO+"]),
                ariaLabel: es.intl.string(es.t.WWTqYn),
                action: k.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: lv.XboxNeutralIcon,
                text: es.intl.string(es.t["QpN/Iz"]),
                ariaLabel: es.intl.string(es.t["8JZmmF"]),
                action: k.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var iG = n(242216);
function i_(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, l3.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === e6.d3x.XBOX_GAME_PASS && !(0, tc.uJ)(e.id));
                return t?.id == null ? null : (0, iL.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== nZ.V1.EPICGAMES || !!iR.has(l)) &&
                            (e.category !== nZ.V1.STEAM || a !== l1.Y.RETIRED_ABANDONED) &&
                            iT.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === l1.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === nZ.V1.STEAM) ||
                    e.push({ category: nZ.V1.STEAM, url: t });
                let r = e.sort((e, t) => (e.category === nZ.V1.STEAM ? -1 : +(t.category === nZ.V1.STEAM)));
                return (null != n && r.unshift({ category: "XBOX_GAME_PASS", url: n }), r);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function iW(e) {
    let { data: t } = e,
        { trackAction: n } = W(),
        l = (0, lh.A)();
    return (0, r.jsx)(iM, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let iF = function () {
    let { game: e, trackAction: t } = W(),
        { showsStoreLinks: l, storeWebsites: i } = i_(e),
        a = s.useMemo(() => i.map(iV).filter((e) => null != e), [i]);
    if (!l) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, r.jsx)(iW, { data: e });
    }
    if (2 === a.length)
        return (0, r.jsxs)("div", {
            className: iG.G,
            children: [(0, r.jsx)(iW, { data: a[0] }), (0, r.jsx)(iW, { data: a[1] })],
        });
    let o = (0, r.jsx)(iM, {
        text: es.intl.string(es.t["/hMurx"]),
        "aria-label": es.intl.string(es.t.nK60cc),
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
        ? (0, r.jsxs)("div", { className: iG.G, children: [(0, r.jsx)(iW, { data: a[0] }), o] })
        : o;
};
var iU = n(123292),
    iY = n(30772),
    iB = n(478676),
    iz = n.n(iB),
    iH = n(486889),
    iX = n(694403),
    iK = n(417964),
    i$ = n(998218);
function iJ(e, t, n) {
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
let iq = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/,
    iQ = RegExp(iq.source, "g"),
    iZ = /[\n\r\u001c-\u001e\u0085\u2029]/,
    i0 = RegExp(`(${iZ.source})`),
    i1 = RegExp(`${/[\u0000-\u001f\u007f]/.source}|${iZ.source}`),
    i2 = /[\p{M}\p{Default_Ignorable_Code_Point}]/gu,
    i8 = new Set(["subject", "body"]),
    i4 = /https?:\/\//i,
    i3 = /\b(https?)(?::[/\\]+|[/\\]{2,})/gi,
    i6 = String.raw`https?:\/\/[^\s<]+[^<.,:;"'\]\s]`,
    i9 = RegExp(`^(${i6})`, "i"),
    i5 = RegExp(i6, "gi"),
    i7 = /(?:^|[^a-z0-9.!#$%&'*+\/=?^_`{|}~-])([a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,})/gi,
    ae = new Map(
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
    at = { bold: !1, italic: !1, underline: !1 },
    an = /[\uD800-\uDBFF]/,
    al = /^[a-z][a-z0-9:-]*$/,
    ai = /^<[a-z][a-z0-9:-]*\s*(?:\/+\s*)?>$/i,
    aa = /^<[a-z][a-z0-9:-]*(?:\s+[a-z0-9:+-]+)*(?:\s*\/+\s*[a-z0-9:+-]+(?:\s+[a-z0-9:+-]+)*)+\s*>$/i,
    ar = /^<\/{2,}[\s/a-z0-9:+-]*>$/i,
    as = new Set([
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
    ao = new Set([
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
function ac(e, t) {
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
          : Array.from(n.searchParams.keys()).every((e) => i8.has(e.toLowerCase()))
            ? n
            : void 0;
}
function au(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e ? ac(e, t)?.href : void 0;
}
function ad(e) {
    return (0, iK.El)(e.replace(i2, "").normalize("NFKC"));
}
function am(e) {
    return ad((0, iK.Fd)(e));
}
function ah(e) {
    return e.replace(i3, "$1://");
}
function ag(e, t) {
    if (
        0 === e.trim().length ||
        (0, iH.Ay)(e).some((n) => {
            let { url: l } = n;
            return (
                au(l, !0) !== t &&
                (!!(!l.startsWith("http://") || e.includes(l)) || au(`https://${l.slice(7)}`, !0) !== t)
            );
        })
    )
        return !0;
    let n = ah(e),
        l = Array.from(n.matchAll(i5), (e) => {
            let [t] = e;
            return t;
        });
    if ((ah(ad(n.normalize("NFKD"))).match(i5) ?? []).length > l.length || l.some((e) => au(e, !0) !== t)) return !0;
    let i = Array.from(e.replace(i5, " ").matchAll(i7), (e) => {
        let [, t] = e;
        return t;
    });
    if (0 === i.length) return !1;
    if (!t.startsWith("mailto:")) return !0;
    let a = i$.A.safeDecodeURIComponent(new URL(t).pathname)?.toLowerCase();
    return null == a || i.some((e) => e.toLowerCase() !== a);
}
function ax(e) {
    let t = 0;
    for (let n = e.length - 1; n >= 0 && ")" === e[n]; n--) {
        let n = e.indexOf("(", t);
        if (-1 === n) return e.slice(0, -1);
        t = n + 1;
    }
    return e;
}
function af(e) {
    return au(iz().unescapeUrl(e[2]));
}
let ap = {
        text: iz().defaultRules.text,
        link: {
            ...iX.Ay,
            match(e, t, n) {
                let l = iX.Ay.match(e, t, n);
                return null == l || iZ.test(l[0]) ? null : null != af(l) ? l : null;
            },
            parse(e, t, n) {
                let l = af(e);
                return null == l || ag(am(e[1]), l) ? { type: "text", content: e[0] } : iX.Ay.parse(e, t, n);
            },
        },
        url: {
            order: iz().defaultRules.url.order,
            requiredFirstCharacters: ["h", "H"],
            match(e) {
                let t = i9.exec(e);
                return (null != t && (t[0] = t[1] = ax(t[1])), t);
            },
            parse(e) {
                let t = e[1],
                    n = t.search(i1),
                    l = -1 === n ? t : t.slice(0, n),
                    i = ac(l, !0);
                if (null == i) return { type: "text", content: t };
                let a = (0, iX.W1)(l)?.displayTarget;
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
    aj = iz().parserFor(ap);
function av(e) {
    let { link: t, ...n } = e;
    return n;
}
function ab(e) {
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
                let s = am(r).trim(),
                    o = 0 === s.length ? "" : ag(s, i.link) ? void 0 : i.link;
                if (o !== i.link)
                    for (let i = l; i < a; i++) {
                        let l = av(e[i]);
                        ((t[i] = null != o ? { ...l, link: o } : l), null == o && n.add(i));
                    }
                l = a;
            }
            return { marked: t, rawURLsOnly: n };
        })(
            (function (e, t) {
                if (!e.some((e) => iq.test(e.text))) return e;
                let n = 0,
                    l = e.map((e) =>
                        e.text.split(i0).map((e) => {
                            let t = { text: e, paragraph: n };
                            return (iZ.test(e) && n++, t);
                        }),
                    ),
                    i = new Set();
                return (
                    l.forEach((n, l) => {
                        for (let { text: r, paragraph: s } of n) {
                            var a;
                            let n = r.replace(iQ, "");
                            "" !== n &&
                                ((a = e[l]), null != a.link ? "" !== a.link : t && (i4.test(n) || n.includes("]("))) &&
                                i.add(s);
                        }
                    }),
                    e.map((e, t) => ({
                        ...e,
                        text: l[t]
                            .map((e) => {
                                let { text: t, paragraph: n } = e;
                                return i.has(n) ? t.replace(iQ, "") : t;
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
            ? i.push(av(a))
            : null == a.link && t
              ? (function (e, t, n) {
                    let l = t.text.includes("["),
                        i = n && t.text.includes("](");
                    (!i || l) && (i || i4.test(t.text))
                        ? (function e(t, n, l) {
                              if (Array.isArray(n)) for (let i of n) e(t, i, l);
                              else
                                  "text" === n.type && "string" == typeof n.content
                                      ? t.push({ ...l, text: n.content })
                                      : ("link" === n.type || "url" === n.type) &&
                                        e(t, n.content, { ...l, link: n.target, rawURL: "url" === n.type });
                          })(e, aj(t.text, { inline: !0, allowLinks: n }), t)
                        : e.push(t);
                })(i, a, !l.has(e))
              : i.push(a);
    }
    let a = [];
    for (let { rawURL: e, ...t } of (function (e) {
        if (!e.some((e) => null != e.link)) return e;
        let t = (function (e) {
                let t = e.map((e) => e.text.split(i1).map(am).join(" "));
                for (let n = 0; n < e.length;) {
                    let l = e[n];
                    if (null == l.link || !0 === l.rawURL) {
                        n++;
                        continue;
                    }
                    let i = n + 1;
                    for (; i < e.length && !0 !== e[i].rawURL && e[i].link === l.link;) i++;
                    (Array.from(t.slice(n, i).join("").matchAll(i5)).some((e) => {
                        let [t] = e;
                        return au(ax(t), !0) === l.link;
                    }) && (t[i - 1] += " "),
                        (n = i));
                }
                return t;
            })(e),
            n = 0,
            l = t.map((e) => (n += e.length)),
            i = [...e],
            a = 0;
        for (let e of t.join("").matchAll(i5)) {
            let t = ax(e[0]);
            for (; l[a] <= e.index;) a++;
            let n = e.index + t.length,
                r = a;
            for (; l[r] < n;) r++;
            if (a === r) continue;
            let s = au(t, !0);
            for (let e = a; e <= r; e++) (null == s || i[e].link !== s) && (i[e] = av(i[e]));
        }
        return i;
    })(i))
        iJ(a, t.text, t);
    return a;
}
function aI(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 10 === n || 9 === n || 13 === n || 12 === n;
}
function aN(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 9 === n || 12 === n;
}
function aE(e) {
    let t = 0;
    for (; t < e.length && aI(e, t);) t++;
    return t;
}
function ay(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.length;
    for (; n > t && aI(e, n - 1);) n--;
    return n;
}
function aA(e, t) {
    let n = "",
        l = 0,
        i = t,
        a = -1;
    for (let t = e.indexOf("\n"); -1 !== t; t = e.indexOf("\n", t + 1)) {
        let r = a + 1,
            s = !0;
        for (let n = r; n < t; n++)
            if (!aN(e, n)) {
                s = !1;
                break;
            }
        (i > 0 && s ? ((n += e.slice(l, r)), i < 2 && (n += "\n"), (l = t + 1), i++) : (i = 1), (a = t));
    }
    return 0 === l ? e : n + e.slice(l);
}
function aC(e) {
    for (; e.length > 0;) {
        let t = e[e.length - 1],
            n = t.text.length;
        for (; n > 0 && aN(t.text, n - 1);) n--;
        if (n === t.text.length) break;
        if (0 === n) e.pop();
        else {
            t.text = t.text.slice(0, n);
            break;
        }
    }
}
function ak(e) {
    return e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e;
}
function aS(e) {
    let t = aA(ak(e), 0),
        n = aE(t),
        l = ay(t, n);
    return l > n ? [{ text: t.slice(n, l), ...at }] : [];
}
function aL(e, t) {
    let n = Math.max(0, Math.floor(t)),
        l = an.test(e.charAt(n - 1)) ? n - 1 : n;
    return ak(e.slice(0, l));
}
function aR(e) {
    return e.links[e.links.length - 1];
}
function aT(e) {
    return null != e ? { ...at, link: e } : at;
}
function aM(e) {
    let t = aR(e);
    return {
        bold: e.styles.bold > 0 || null != e.heading,
        italic: e.styles.italic > 0,
        underline: e.styles.underline > 0,
        ...(null != e.heading ? { heading: e.heading } : {}),
        ...(null != t ? { link: t } : {}),
    };
}
function aO(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : at,
        l = t.indexOf("\n");
    if (e.trailingNewlines > 0 && -1 !== l) {
        let n = !0;
        for (let e = 0; e < l; e++)
            if (!aN(t, e)) {
                n = !1;
                break;
            }
        n && aC(e.runs);
    }
    let i = e.trailingNewlines,
        a = aA(t, e.trailingNewlines);
    if ((0 === e.runs.length && (a = a.slice(aE(a))), 0 === a.length)) return;
    iJ(e.runs, a, n);
    let r = (function (e) {
        let t = 0;
        for (let n = e.length - 1; n >= 0; n--)
            if (10 === e.charCodeAt(n)) t++;
            else if (!aN(e, n)) break;
        return t;
    })(a);
    e.trailingNewlines = aE(a) === a.length ? Math.min(2, i + r) : r;
}
function aw(e) {
    if (0 === e.pendingBreaks) for (let t of e.held) aO(e, t.text, t);
    else
        e.runs.length > 0 &&
            (e.trailingNewlines > 0 && aC(e.runs),
            aO(e, "\n".repeat(Math.max(0, e.pendingBreaks - e.trailingNewlines)), aT(e.spacingLink)));
    ((e.held = []), (e.pendingBreaks = 0));
}
function aP(e, t) {
    let n = e.atBoundary ? aE(t) : 0,
        l = ay(t, n),
        i = aM(e);
    (l > n && (aw(e), aO(e, t.slice(n, l), i), (e.spacingLink = i.link), (e.atBoundary = e.afterMarker = !1)),
        l < t.length && e.held.push({ ...i, text: t.slice(l) }));
}
function aD(e, t) {
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
            class n extends iY.i {
                onclosetag(n, l) {
                    let i = this.startIndex,
                        a = e.markup.slice(n, l).toLowerCase();
                    ((t = void 0), super.onclosetag(n, l));
                    let r = a.replace(/\/+$/, "");
                    if (e.hiddenDepth > 0 || t === a || ae.has(r) || as.has(r) || ao.has(r)) return;
                    let s = e.markup.indexOf(">", l);
                    -1 !== s && aP(e, e.markup.slice(i, s + 1));
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
                            let s = ae.get(t);
                            if (e.hiddenDepth > 0 || s?.hidden === !0) return void e.hiddenDepth++;
                            if (null == s) {
                                let n,
                                    r,
                                    s = e.markup.slice(l.startIndex, l.endIndex + 1);
                                (!al.test(t) ||
                                    ((ai.test(s) || aa.test(s)) &&
                                        !as.has(t) &&
                                        !ao.has(t) &&
                                        ((i = l.endIndex),
                                        (e.closingTags ??= e.markup.includes("</")
                                            ? ((a = e.markup),
                                              (n = new Map()),
                                              (r = new iY.i(
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
                                    aP(e, s);
                                return;
                            }
                            (aD(e, s.breaks, !0),
                                null != s.style && e.styles[s.style]++,
                                !0 === s.link &&
                                    (e.links.push(au(n.href) ?? (e.keepInvalidAnchors ? "" : void 0)),
                                    (e.spacingLink = void 0)),
                                null != s.heading && (e.heading = s.heading),
                                null != s.list && e.lists.push({ ordered: "ordered" === s.list, index: 0 }),
                                !0 === s.lineBreak &&
                                    (aw(e),
                                    aO(e, "\n", null != e.heading ? aM(e) : aT(aR(e))),
                                    (e.atBoundary = !0),
                                    (e.afterMarker = !1)),
                                !0 === s.item &&
                                    (aw(e),
                                    (r = e.lists[e.lists.length - 1]),
                                    aO(e, r?.ordered === !0 ? `${++r.index}. ` : "\u2022 "),
                                    e.itemDepth++,
                                    (e.afterMarker = !0)));
                        })(e, t, n, l),
                    onclosetag(n, l) {
                        (l || (t = n),
                            (function (e, t) {
                                if (e.ending) return;
                                if (e.hiddenDepth > 0) return e.hiddenDepth--;
                                let n = ae.get(t);
                                null != n &&
                                    (aD(e, n.breaks),
                                    null != n.style && e.styles[n.style]--,
                                    !0 === n.link && (e.links.pop(), (e.spacingLink = void 0)),
                                    null != n.heading && (e.heading = void 0),
                                    null != n.list && e.lists.pop(),
                                    !0 === n.item && e.itemDepth--);
                            })(e, n));
                    },
                    oncomment() {
                        let t = e.markup.slice(l.startIndex, l.endIndex + 1);
                        0 === e.hiddenDepth && ar.test(t) && aP(e, t);
                    },
                    ontext(t) {
                        0 === e.hiddenDepth && aP(e, t);
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
            new iY.i({ ontext: (e) => aP(l, e) }, { decodeEntities: !0 }).end(n.replace(/</g, "&lt;")));
    for (var a = l.runs; a.length > 0;) {
        let e = a[a.length - 1];
        if (((e.text = e.text.slice(0, ay(e.text))), e.text.length > 0)) break;
        a.pop();
    }
    return a;
}
var aG = n(9578);
let a_ = { h1: "heading-lg/semibold", h2: "heading-sm/semibold", h3: "heading-xs/semibold", h4: "heading-xs/semibold" },
    aW = { h1: 2, h2: 3, h3: 4, h4: 5 };
var aF = n(407355);
function aU(e) {
    let { italic: t, underline: n } = e;
    return u()({ [aF.T]: t, [aF.V]: n });
}
function aY(e) {
    let { run: t, textVariant: n, boldTextVariant: l } = e;
    if (null != t.heading) return (0, r.jsx)(aB, { run: t });
    let { text: i, bold: a, italic: s, underline: o } = t;
    return a || s || o
        ? (0, r.jsx)(Y.E, {
              tag: a ? "strong" : "span",
              variant: a ? l : n,
              color: "none",
              className: aU(t),
              children: s ? (0, r.jsx)("em", { children: i }) : i,
          })
        : i;
}
function aB(e) {
    let { run: t } = e,
        { text: n, italic: l, underline: i } = t;
    if (!l && !i) return n;
    let a = aU(t);
    return l && i
        ? (0, r.jsx)("u", { className: a, children: (0, r.jsx)("em", { children: n }) })
        : l
          ? (0, r.jsx)("em", { className: a, children: n })
          : (0, r.jsx)("u", { className: a, children: n });
}
function az(e) {
    let { segment: t, textVariant: n, boldTextVariant: l, onLinkPress: i } = e,
        a = t.runs.map((e, t) => (0, r.jsx)(aY, { run: e, textVariant: n, boldTextVariant: l }, t)),
        { link: s } = t;
    return null == s
        ? a
        : (0, r.jsx)(aG.A, {
              href: s,
              title: t.runs.map((e) => e.text).join(""),
              onClick: () => (i?.(s), !1),
              children: a,
          });
}
function aH(e) {
    let { group: t, ...n } = e,
        { heading: l, segments: i } = t,
        a = i.map((e, t) =>
            (0, r.jsx)(
                az,
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
        : (0, r.jsx)(tK.F, {
              forceLevel: n.headingLevels[l],
              children: (0, r.jsx)(tr.D, { variant: n.headingVariants[l], color: n.headingColor, children: a }),
          });
}
function aX(e) {
    let {
            runs: t,
            textVariant: n = "body-md/normal",
            boldTextVariant: l = "body-md/semibold",
            headingVariants: i = a_,
            headingColor: a = "text-strong",
            headingLevels: o = aW,
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
    return u.map((e, t) => (0, r.jsx)(aH, { group: e, ...d }, t));
}
var aK = n(672572),
    a$ = n(94936);
function aJ() {
    let e = s.useRef(null),
        { game: t, isTwoColumn: n, trackAction: l } = W(),
        i = s.useMemo(
            () =>
                null != t.description
                    ? (function (e) {
                          let { maxLength: t = 1e4, parseTextLinks: n = !1 } =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              l = e.includes("<") || e.includes("&");
                          if (!n) return l ? ab(aV(aL(e, t)), !1) : aS(e);
                          let i = aL(e, t);
                          return ab(l ? aV(i, { keepInvalidAnchors: !0 }) : aS(i));
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
                        if (!i || null == n || !(0, nA.vq)(l, HTMLAnchorElement) || !l.matches(":focus-visible"))
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
    let g = o ? es.intl.string(es.t["6MwJo/"]) : es.intl.string(es.t.lBeKY2);
    return (0, r.jsxs)("div", {
        className: u()(aK.fi, a$.k),
        onFocusCapture: m,
        children: [
            (0, r.jsx)(Y.E, {
                ref: e,
                className: a$.Q,
                lineClamp: o ? void 0 : a,
                variant: "body-md/medium",
                children: (0, r.jsx)(aX, { runs: i, textVariant: "body-md/medium", onLinkPress: h }),
            }),
            c && (0, r.jsx)(iU.Q, { onClick: d, text: g, "aria-expanded": o }),
        ],
    });
}
var aq = n(40478),
    aQ = n(764948);
let aZ = s.memo(function (e) {
    let { analyticsLocations: t, selectTab: n, getScrollOffset: l } = e;
    return (0, r.jsxs)("div", {
        className: aQ.V,
        children: [
            (0, r.jsx)(lq, {}),
            (0, r.jsxs)("div", {
                className: aq.h,
                children: [
                    (0, r.jsx)(t9, {}),
                    (0, r.jsxs)("div", { className: aq.X, children: [(0, r.jsx)(iF, {}), (0, r.jsx)(aJ, {})] }),
                ],
            }),
            (0, r.jsx)(lM, { analyticsLocations: t }),
            (0, r.jsx)(tI, {}),
            (0, r.jsx)(nq, { getScrollOffset: l }),
            (0, r.jsx)(ny, { selectTab: n }),
            (0, r.jsx)(iI, {}),
            (0, r.jsx)(iS, {}),
            (0, r.jsx)(ia, {}),
            (0, r.jsx)(lk, {}),
        ],
    });
});
var a0 = n(164135);
let a1 = s.memo(function (e) {
    let { selectTab: t, getScrollOffset: n } = e;
    return (0, r.jsxs)("div", {
        className: a0.V,
        children: [
            (0, r.jsxs)("div", { className: a0.B, children: [(0, r.jsx)(lq, {}), (0, r.jsx)(aJ, {})] }),
            (0, r.jsx)(nq, { getScrollOffset: n }),
            (0, r.jsx)(ny, { selectTab: t }),
            (0, r.jsx)(iI, {}),
            (0, r.jsx)(iS, {}),
        ],
    });
});
var a2 = n(881698),
    a8 = n(928550),
    a4 = n(613412),
    a3 = n(414499),
    a6 = n(359549),
    a9 = n(139286),
    a5 = n(873516);
function a7(e) {
    let { onCloudPlayClick: t, analyticsLocations: n } = e,
        { closeModal: l, trackAction: i } = W();
    (0, a9.A)({
        name: a4.ImpressionNames.CLOUD_PLAY_CTA,
        type: a4.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let a = s.useCallback(() => {
        (i(k.Ws.CloudPlay), l(), t());
    }, [l, t, i]);
    return (0, r.jsx)(J.m, {
        text: es.intl.string(es.t.JVwWva),
        position: "top",
        children: (0, r.jsx)(K.$, {
            icon: a3.CloudIcon,
            text: es.intl.string(es.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function re(e) {
    let { cloudPlayAppId: t, analyticsLocations: n } = e,
        { game: l } = W(),
        i = (0, a6.rC)({ applicationId: t, sourceApplicationId: l.id, analyticsLocations: n });
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: a5.k,
              children: (0, r.jsx)(a7, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var rt = n(768626);
function rn(e) {
    let { analyticsLocations: t } = e,
        { game: n } = W(),
        l = (0, a2.A)(n.linkedApplications)?.id,
        [i] = (0, a8.L_)(n.getOfficialApplicationId()),
        [a] = (0, a8.L_)(n.id),
        { showsStoreLinks: s } = i_(n);
    return (0, r.jsxs)("div", {
        className: u()(rt.pz, aK.fi, s ? rt.FJ : rt.dg),
        children: [
            null == l || i || a ? null : (0, r.jsx)(re, { cloudPlayAppId: l, analyticsLocations: t }),
            (0, r.jsxs)("div", {
                className: aQ.V,
                children: [
                    (0, r.jsx)(iF, {}),
                    (0, r.jsx)(lM, { analyticsLocations: t }),
                    (0, r.jsx)(tI, {}),
                    (0, r.jsx)(ia, {}),
                    (0, r.jsx)(lk, {}),
                ],
            }),
        ],
    });
}
var rl = n(105865);
function ri(e) {
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
            (0, r.jsx)(t4, { ref: o }),
            (0, r.jsxs)(eK.Ch, {
                ref: c,
                className: rl.XG,
                onScroll: m,
                children: [
                    (0, r.jsx)("div", { className: rl.xY, "aria-hidden": !0 }),
                    (0, r.jsx)(ne, {}),
                    (0, r.jsx)(tK.F, {
                        children: t
                            ? (0, r.jsxs)("div", {
                                  className: rl.jC,
                                  children: [
                                      (0, r.jsx)(a1, { selectTab: n, getScrollOffset: d }),
                                      (0, r.jsx)(rn, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: rl.b9,
                                  children: (0, r.jsx)(aZ, { analyticsLocations: a, selectTab: n, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var ra = n(953331),
    rr = n(787188);
function rs(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, r.jsx)(ra.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: nl.Ye.GAME_PROFILE_GAME_SHOP,
        className: rr.kL,
        scrollerClassName: rr.XG,
        promotionBannerClassName: rr.Rv,
    });
}
var ro = n(733391),
    rc = n(171616);
function ru(e) {
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
        [Y, B] = s.useState(null),
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
        el.current = Y;
    }, [Y]);
    let {
            hasAlreadyLinked: ei,
            canStartAuthorization: ea,
            fetched: er,
            startAuthorization: es,
            connectionApp: eo,
        } = (0, j.RD)(J),
        { invite: ec, isMember: eu, isResolving: ed } = (0, T.Ay)(J, B),
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
                { recommendations: c, status: u } = (0, V.XQ)({
                    applicationIds: o,
                    userIds: n,
                    numItems: 6,
                    source: D.B.USER_PROFILE,
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
                (0, ro.Xw)();
            }, []);
            let o = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && P.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                c = null != o,
                { storefront: u } = (0, rc.A)({ applicationId: c ? o : null }),
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
                          className: u()(z, aK.kL),
                          ref: ef,
                          children: (0, r.jsxs)(y.A, {
                              obscured: en,
                              onClose: ej,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: u()(aK.sx, { [aK.Tk]: eI !== S.COMMERCE }),
                                      children: (0, r.jsx)(ez, { navigation: ev, socialLayerStorefront: eN }),
                                  }),
                                  eI === S.OVERVIEW &&
                                      (0, r.jsx)(ri, {
                                          selectTab: ev.selectTab,
                                          selectionVersion: eb,
                                          initialScrollOffset: o,
                                          isTwoColumn: F,
                                          analyticsLocations: K,
                                      }),
                                  eI === S.COMMUNITIES && (0, r.jsx)(tX, {}),
                                  eI === S.COMMERCE && (0, r.jsx)(rs, { applicationId: ey, selectedPageIndex: eC }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let rd = function (e) {
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
        ru,
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
