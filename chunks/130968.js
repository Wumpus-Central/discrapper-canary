n.d(t, { default: () => rg });
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
    E = n(583846),
    N = n(454908),
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
    em = n(792996);
n(321073);
var eh = n(540185),
    eg = n(926268),
    ex = n(53788),
    ef = n(831453),
    ep = n(785866),
    ej = n(555704),
    ev = n(741534),
    eb = n(633075),
    eI = n(289173),
    eE = n(851767),
    eN = n(958805),
    ey = n(735321),
    eA = n(116281),
    eC = n(46653),
    ek = n(403362);
async function eS(e) {
    let t = e((0, ey.BF)());
    await eN.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
var eL = n(652215);
function eR(e) {
    var t;
    let l,
        i,
        { className: a, activeTab: c } = e,
        { game: u, closeModal: d, trackAction: h } = W(),
        x = s.useRef(null),
        p = s.useRef(null),
        j = (0, el.A)({ id: u.id, label: em.intl.string(em.t.SHQGPj) }),
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
                      label: em.intl.string(em.t.qP2cXd),
                      action: i,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: ed.E },
                  })),
        b = (function (e) {
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
                a = (0, m.yK)([eE.A], () => (null == l ? [] : (eE.A.getUserProfile(l)?.widgets ?? [])), [l]),
                o = (0, eA.A)(),
                c = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...a].filter((e) => e instanceof eb.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(ek.Vq).find((e) => t.has(e)) ?? null;
                }, [o, a, e]),
                u = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await eS((i) => {
                                let a = i.filter(eI.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, ey.uA)(a))) return i;
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
                            (await eS((n) =>
                                e
                                    ? n.some((e) => e instanceof eb.R && e.applicationId === c)
                                        ? n
                                        : [(t = new eb.R({ applicationId: c })), ...n]
                                    : ((t = n.find((e) => e instanceof eb.R && e.applicationId === c) ?? null),
                                      n.filter((e) => !(e instanceof eb.R && e.applicationId === c))),
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
            let h = null != e && (0, ey.XX)(e),
                g = [];
            if (null != c) {
                let e = a.some((e) => e instanceof eb.R && e.applicationId === c);
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
                    let n = a.filter(eI.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, ey.uA)(n);
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
        I = eu({ location: "GameProfileOverflowMenu" }),
        E = (0, m.bG)([P.A], () => P.A.getApplicationIdFromDetectableId(u.id)),
        N = (0, m.bG)([P.A], () => P.A.hasStorefrontForApplicationId(E), [E]),
        y = s.useCallback(() => {
            null != E && (0, ei.G)({ applicationId: E });
        }, [E]),
        A = s.useCallback(() => {
            null != E && (h(k.Ws.GameShop), (0, ei.default)({ applicationId: E }), d());
        }, [E, h, d]),
        C = s.useCallback(() => d(!1), [d]),
        L = s.useCallback(() => {
            h(k.Ws.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eL.BVt.GAME_PROFILE(u.id)}`;
            (0, er.C)(e, () => {
                (0, B.P0)({ text: em.intl.string(em.t["+5kSoW"]), variant: "success" });
            });
        }, [u.id, h]);
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            c === S.COMMERCE &&
                (0, r.jsx)(ea.A, {
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
                                ((0, en.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.sidPSo),
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
                                text: em.intl.string(em.t.sidPSo),
                            }),
                        }),
                }),
            N &&
                !I &&
                (0, r.jsx)(J.m, {
                    text: em.intl.string(em.t.apFNLU),
                    children: (0, r.jsx)(q.K, {
                        icon: Q.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.apFNLU),
                        onMouseDown: y,
                        onClick: A,
                    }),
                }),
            c !== S.COMMERCE &&
                (0, r.jsx)(J.m, {
                    text: em.intl.string(em.t.WqhZss),
                    children: (0, r.jsx)(q.K, {
                        icon: Z.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.WqhZss),
                        onClick: L,
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
let eT = { enabled: !1 },
    eM = (0, es.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: eT,
        variations: { 0: eT, 1: { enabled: !0 } },
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
function ew(e) {
    let { className: t, navigation: n } = e,
        { game: l } = W();
    return (l.communityGuildIds?.length ?? 0) < 3 ? null : (0, r.jsx)(eO, { className: t, navigation: n });
}
var eP = n(646514),
    eD = n(331322),
    eV = n(278416),
    eG = n(478016),
    e_ = n(900797),
    eW = n(847374),
    eF = n(421773),
    eU = n(225647),
    eY = n(421108);
let eB = "body-md/medium",
    ez = [];
function eH(e) {
    let { label: t, chevron: n, socialLayerStorefront: l } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: n } = e,
                l = Object.values(n?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, eY.ZH)(n));
                }),
                i = (0, eY.tm)(l?.endsAt);
            return t && null != l && !i;
        })(l);
    return (0, r.jsxs)(eD.B, {
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
                    color: eP.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, r.jsxs)(eD.B, {
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
        { isHovered: g, setIsHovered: x, onMouseEnter: f, onMouseLeave: p, cancelTimers: j } = (0, eF.A)(100, 100),
        v = em.intl.string(em.t["J3/JCl"]),
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
                                    null != (l = (0, eU.A)(n?.trim())) && l.length > 0
                                        ? l
                                        : em.intl.formatToPlainString(em.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, r.jsx)(
                                X.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: eG.U } : void 0,
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
                c = s ? e_.t : eW.a;
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
                    variant: eB,
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
        : (0, r.jsx)(U.V.Item, {
              id: S.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(S.COMMERCE),
              className: t,
              "aria-label": c,
              children: (0, r.jsx)(Y.E, {
                  variant: eB,
                  color: "none",
                  children: (0, r.jsx)(eH, { label: c, socialLayerStorefront: l }),
              }),
          });
}
var e$ = n(510954);
function eJ(e) {
    let { navigation: t, socialLayerStorefront: n } = e,
        { game: l } = W(),
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
                            : (0, r.jsx)(F._, { size: "md" }),
                }),
                (0, r.jsxs)(U.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: e$.vR,
                    children: [
                        (0, r.jsx)(U.V.Item, {
                            id: S.OVERVIEW,
                            disableItemStyles: !0,
                            className: e$.Mf,
                            "aria-label": m,
                            children: (0, r.jsx)(Y.E, { variant: "body-md/medium", color: "none", children: m }),
                        }),
                        (0, r.jsx)(ew, { className: e$.Mf, navigation: t }),
                        (0, r.jsx)(eK, { className: e$.Mf, navigation: t, socialLayerStorefront: n }),
                    ],
                }),
                (0, r.jsx)(eR, { className: e$.HK, activeTab: i }),
            ],
        }),
    });
}
var eq = n(435558),
    eQ = n.n(eq),
    eZ = n(516521),
    e0 = n(448741),
    e1 = n(71393),
    e2 = n(309010),
    e8 = n(449054),
    e4 = n(60465),
    e3 = n(311043),
    e6 = n(620632),
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
        return e.map((e) => e5[e]?.guild).filter(ek.Vq);
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
                i = new Map(n.map((e) => [e.id, (0, e8.jE)(e)]));
            for (let e of t) e5[e] = { guild: i.get(e) ?? null, fetchState: "succeeded", fetchedAt: l };
        },
        DISCOVERABLE_GUILDS_FETCH_FAILURE: function (e) {
            let { guildIds: t } = e;
            for (let e of t)
                e5[e] = { guild: e5[e]?.guild ?? null, fetchState: "failed", fetchedAt: e5[e]?.fetchedAt ?? null };
        },
    }),
    tt = new Map();
var tn = n(927813);
let tl = [];
function ti(e) {
    return e3.A.getGame(e)?.communityGuildIds ?? tl;
}
let ta = (0, m.UT)(te, {
    getQueryId: (e) => (ti(e).length > 0 ? `game-community-guilds/${e}` : null),
    get: (e) => te.getGuilds(ti(e)),
    load: async (e) => {
        let t = ti(e);
        t.length > 0 &&
            (await (async function (e) {
                let t = te.getStaleGuildIds(e),
                    n = new Set();
                for (let t of e) {
                    let e = tt.get(t);
                    null != e && n.add(e);
                }
                if (t.length > 0) {
                    let e = (async function (e) {
                        e9.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
                        try {
                            let t = await e6.Bo.get({
                                    url: eL.Rsh.GUILD_DISCOVERY,
                                    query: { guild_ids: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }),
                                n = t.body?.guilds ?? [];
                            e9.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: n });
                        } catch (t) {
                            throw (e9.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
                        }
                    })(t).finally(() => {
                        for (let n of t) tt.get(n) === e && tt.delete(n);
                    });
                    for (let n of t) tt.set(n, e);
                    n.add(e);
                }
                await Promise.all(n);
            })(t));
    },
    staleAfter: tn.A.Seconds.HOUR,
    failureStaleAfter: tn.A.Seconds.MINUTE,
});
var tr = n(196765);
let ts = new Set(),
    to = (0, tr.v)((e) => ({
        gameId: null,
        excludedLocales: ts,
        toggleLocale: (t, n) => {
            e((e) => {
                let l = new Set(e.gameId === t ? e.excludedLocales : ts);
                return (l.has(n) ? l.delete(n) : l.add(n), { gameId: t, excludedLocales: l });
            });
        },
    }));
function tc(e) {
    return to((t) => (t.gameId === e ? t.excludedLocales : ts));
}
var tu = n(534514),
    td = n(714991),
    tm = n(486020),
    th = n(240248);
function tg(e) {
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
var tx = n(799699),
    tf = n(827085);
function tp(e) {
    let { className: t } = e;
    return (0, r.jsx)(tx.Ay, { className: u()(tf.qV, t) });
}
function tj(e) {
    let { presenceCount: t, memberCount: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("div", {
              className: tf.kL,
              children: [
                  null != t &&
                      (0, r.jsxs)("div", {
                          className: tf.U9,
                          children: [
                              (0, r.jsx)("i", { className: tf._o }),
                              (0, r.jsx)(Y.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != n &&
                      (0, r.jsxs)("div", {
                          className: tf.U9,
                          children: [
                              (0, r.jsx)("i", { className: tf.jk }),
                              (0, r.jsx)(Y.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t.zRl6XR, { count: n }),
                              }),
                          ],
                      }),
              ],
          });
}
var tv = n(213098);
function tb() {
    return (0, r.jsxs)(tx.qT, {
        className: tv.uW,
        animationDelayMs: 300,
        children: [
            (0, r.jsx)(tx.Ay, { className: tv.dU, width: "30%" }),
            (0, r.jsx)(tx.qT, {
                className: tv.nV,
                children: (0, r.jsxs)("div", {
                    className: tv.hQ,
                    children: [(0, r.jsx)(tI, {}), (0, r.jsx)(tx.pv, {})],
                }),
            }),
        ],
    });
}
function tI() {
    return (0, r.jsxs)("div", {
        className: tv.To,
        children: [
            (0, r.jsx)(tx.Ay, { className: tv.QV }),
            (0, r.jsxs)("div", {
                className: tv.Yv,
                children: [
                    (0, r.jsx)(tx.Ay, { className: tv.Ag }),
                    (0, r.jsx)(tx.Ay, { className: tv.zl }),
                    (0, r.jsx)(tp, { className: tv.P2 }),
                ],
            }),
        ],
    });
}
function tE(e) {
    let { guild: t } = e,
        n = tm.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        a = null != n && l !== n,
        o = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, r.jsxs)("div", {
        className: tv._C,
        children: [
            a && (0, r.jsx)(tx.Ay, { className: tv.EQ }),
            (0, r.jsx)("img", {
                className: tv.$f,
                src: n,
                alt: em.intl.formatToPlainString(em.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: o,
                onError: o,
            }),
        ],
    });
}
function tN(e) {
    let { guild: t, presenceCount: n, memberCount: l } = e;
    return (0, r.jsxs)("div", {
        className: tv.To,
        children: [
            (0, r.jsx)(tE, { guild: t }),
            (0, r.jsxs)("div", {
                className: tv.yj,
                children: [
                    (0, r.jsxs)("div", {
                        className: tv.YS,
                        children: [
                            (0, r.jsx)(td.A, { guild: t, size: 16 }),
                            (0, r.jsx)(tu.D, {
                                className: tv.J5,
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, th.uJ)(t.description) &&
                        (0, r.jsx)(Y.E, {
                            className: tv.h_,
                            variant: "body-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, r.jsx)(tj, { presenceCount: n, memberCount: l }),
                ],
            }),
        ],
    });
}
function ty(e) {
    let { guild: t, presenceCount: n, memberCount: l, button: i, className: a } = e;
    return (0, r.jsx)("div", {
        className: u()(tv.kL, a),
        children: (0, r.jsxs)("div", {
            className: tv.hQ,
            children: [(0, r.jsx)(tN, { guild: t, presenceCount: n, memberCount: l }), i],
        }),
    });
}
function tA() {
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
                e9.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: e.code, context: eL.BRT.APP }));
        }, [e, a, i]);
    return null == e || null == e.guild
        ? t && n
            ? (0, r.jsx)(tb, {})
            : null
        : (0, r.jsxs)("div", {
              className: tv.uW,
              children: [
                  (0, r.jsx)(tu.D, {
                      className: tv.Gf,
                      variant: "body-md/medium",
                      color: "text-subtle",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, r.jsx)(ty, {
                      guild: e.guild,
                      presenceCount: e.approximate_presence_count,
                      memberCount: e.approximate_member_count,
                      button: (0, r.jsx)(tg, { guildName: e.guild.name, isMember: l, onClick: o, fullWidth: !0 }),
                  }),
              ],
          });
}
var tC = n(320448),
    tk = n(152594);
function tS(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, r.jsxs)("div", {
        className: tk.kL,
        "aria-busy": !0,
        children: [
            (0, r.jsxs)("div", {
                className: tk.wR,
                children: [(0, r.jsx)(tx.Ay, { className: tk.Iz, width: n }), l && (0, r.jsx)(tx.pv, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tL(e) {
    let { children: t, title: n, onClickViewAll: l, trailing: i } = e;
    return (0, r.jsxs)("div", {
        className: tk.kL,
        children: [
            (0, r.jsxs)("div", {
                className: tk.wR,
                children: [
                    (0, r.jsx)(tu.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, r.jsx)(K.$, {
                            size: "sm",
                            icon: tC._,
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
var tR = (((i = {}).LIST = "list"), (i.GRID = "grid"), i);
let tT = (0, tr.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tM = n(876798),
    tO = n(481901),
    tw = n(916099),
    tP = n(461353);
function tD() {
    let { layout: e, setLayout: t } = tT(),
        n = em.intl.string(em.t.VGRZh7),
        l = em.intl.string(em.t["NJFr+g"]);
    return (0, r.jsxs)("div", {
        className: tP.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, r.jsx)(J.m, {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(tM.k, {
                    icon: tO.d,
                    pressed: e === tR.GRID,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tR.GRID),
                }),
            }),
            (0, r.jsx)(J.m, {
                text: l,
                asContainer: !0,
                children: (0, r.jsx)(tM.k, {
                    icon: tw.ListBulletsIcon,
                    pressed: e === tR.LIST,
                    size: "sm",
                    "aria-label": l,
                    onClick: () => t(tR.LIST),
                }),
            }),
        ],
    });
}
var tV = n(37646),
    tG = n(846183);
function t_(e) {
    var t;
    let n,
        l,
        i,
        { locales: a, onClose: o } = e,
        { game: c } = W(),
        { options: u, toggleLocale: d } =
            ((t = c.id),
            (n = tc(t)),
            (l = to((e) => e.toggleLocale)),
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
function tW(e) {
    let { locales: t } = e,
        n = s.useRef(null),
        l = em.intl.string(em.t.OlOHDH);
    return (0, r.jsx)("div", {
        className: tG.k,
        children: (0, r.jsx)(z.Y, {
            targetElementRef: n,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, r.jsx)(t_, { locales: t, onClose: n });
            },
            children: (e) =>
                (0, r.jsx)(J.m, {
                    text: l,
                    asContainer: !0,
                    children: (0, r.jsx)(q.K, {
                        buttonRef: n,
                        icon: tV.U,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": l,
                        ...e,
                    }),
                }),
        }),
    });
}
var tF = n(939249),
    tU = n(762841);
function tY(e) {
    let { className: t, ariaLabel: n, onClick: l, children: i } = e;
    return (0, r.jsx)(tF.D, { className: u()(tU.v, t), onClick: l, "aria-label": n, children: i });
}
var tB = n(759020);
function tz(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsxs)(tY, {
        className: tB.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, r.jsxs)("div", {
                className: tB.OA,
                children: [
                    (0, r.jsx)(tE, { guild: t }),
                    (0, r.jsxs)("div", {
                        className: tB.FS,
                        children: [
                            (0, r.jsxs)("div", {
                                className: tB.YS,
                                children: [
                                    (0, r.jsx)(td.A, { guild: t, size: 16 }),
                                    (0, r.jsx)(tu.D, {
                                        className: tB.J5,
                                        variant: "heading-sm/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, th.uJ)(t.description) &&
                                (0, r.jsx)(Y.E, {
                                    className: tB.h_,
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    children: t.description,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: tB.Rn, children: (0, r.jsx)(tj, { presenceCount: n, memberCount: l }) }),
        ],
    });
}
var tH = n(620387);
function tX(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsx)(tx.qT, { className: tH.s7, animationDelayMs: t, children: (0, r.jsx)(tI, {}) });
}
function tK(e) {
    let { animationDelayMs: t } = e;
    return (0, r.jsxs)(tx.qT, {
        className: tH.fv,
        animationDelayMs: t,
        children: [
            (0, r.jsx)(tx.Ay, { className: tH.VR }),
            (0, r.jsxs)("div", {
                className: tH.hG,
                children: [
                    (0, r.jsx)(tx.Ay, { className: tH.t_ }),
                    (0, r.jsx)(tx.Ay, { className: tH.Aj }),
                    (0, r.jsx)(tx.Ay, { className: tH.ax }),
                ],
            }),
            (0, r.jsx)(tx.Ay, { className: tH.Ah }),
        ],
    });
}
function t$(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, r.jsx)(tY, {
        className: tH.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, r.jsx)(tN, { guild: t, presenceCount: n, memberCount: l }),
    });
}
function tJ(e) {
    let { guild: t, layout: n } = e,
        { game: l, closeModal: i, trackAction: a, viewId: o } = W(),
        c = (0, m.bG)([e1.A], () => e1.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = s.useCallback(async () => {
            (a(k.Ws.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await e8.Z2(t.id, {}, { joinSource: eL.Q4z.GAME_PROFILE_COMMUNITIES, loadId: o }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, e0._)(e);
                return;
            }
            let e = e2.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                e4.default.setGameProfilePendingReturn({
                    gameId: l.id,
                    channelId: e,
                    tab: S.COMMUNITIES,
                    source: k.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, o, l.id]),
        d = n === tR.LIST ? tz : t$;
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
function tq() {
    var e;
    let t,
        n,
        { game: l } = W(),
        { data: i, isLoading: a } = ta(l.id),
        o = tT((e) => e.layout),
        {
            locales: c,
            filteredGuilds: u,
            showLocaleFilter: d,
        } = ((e = l.id),
        (t = tc(e)),
        {
            locales: (n = s.useMemo(() => eQ().uniq((i ?? []).map((e) => e.preferredLocale).filter(ek.Vq)), [i])),
            filteredGuilds: s.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: n.length >= 2,
        }),
        m = o === tR.LIST,
        h = m ? tK : tX,
        g = a && (null == i || 0 === i.length);
    return (0, r.jsxs)(eZ.Ch, {
        className: tH.XG,
        children: [
            (0, r.jsx)("div", { className: tH.xY, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: tH.uW,
                children: (0, r.jsx)(tL, {
                    title: em.intl.string(em.t.r6bvTh),
                    trailing: (0, r.jsxs)("div", {
                        className: tH.AA,
                        children: [d && (0, r.jsx)(tW, { locales: c }), (0, r.jsx)(tD, {})],
                    }),
                    children: (0, r.jsx)("div", {
                        className: m ? tH.p_ : tH.Vg,
                        children: g
                            ? eQ()
                                  .range(8)
                                  .map((e) => (0, r.jsx)(h, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, r.jsx)(tJ, { guild: e, layout: o }, e.id)),
                    }),
                }),
            }),
        ],
    });
}
var tQ = n(707554),
    tZ = n(369606),
    t0 = n(775602),
    t1 = n(21161),
    t2 = n(400492),
    t8 = n(541830),
    t4 = n(459746);
let t3 = "1552821538409939044";
var t6 = n(175213);
let t9 = n(892799);
function t5(e) {
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
    return (0, th.uJ)(l)
        ? null
        : (0, r.jsxs)("div", {
              ref: t,
              children: [
                  (0, r.jsx)("div", { className: t6.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, r.jsx)("div", { className: t6.N4 }),
              ],
          });
}
function t7() {
    let { game: e } = W(),
        t = (e.genres ?? []).map(t8.du).join(", ");
    return (0, th.uJ)(t) ? null : (0, r.jsx)(Y.E, { variant: "body-md/normal", color: "text-muted", children: t });
}
function ne(e) {
    let { rank: t } = e;
    return (0, r.jsxs)("div", {
        className: t6.Qc,
        children: [
            (0, r.jsx)(tZ.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, r.jsx)(Y.E, {
                variant: "body-xs/semibold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function nt() {
    return (0, r.jsx)(nn, { className: t6._M, imageClassName: t6.xe });
}
function nn(e) {
    let { className: t, imageClassName: n } = e,
        { game: l } = W(),
        i = (0, r.jsx)(t4.Ay, { game: l, className: n, size: t4.wu.LARGE });
    return l.id !== t3
        ? (0, r.jsx)("div", { className: t, children: i })
        : (0, r.jsx)(nl, { className: t, children: i });
}
function nl(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(t1.x),
        i = (0, m.bG)([t0.Ay], () => t0.Ay.useReducedMotion),
        a = s.useRef({ count: 0, lastTime: 0 });
    return (0, r.jsx)(tF.D, {
        className: u()(n, t6.b3),
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
                (0, t2.Ak)("discodo");
            }
        },
        children: t,
    });
}
let ni = function () {
    let { game: e, isTwoColumn: t } = W(),
        n = e.name;
    return (0, r.jsxs)("div", {
        className: t6.ap,
        children: [
            t && (0, r.jsx)(nn, { className: t6.Tf, imageClassName: t6.w$ }),
            (0, r.jsxs)("div", {
                className: t6.lu,
                children: [
                    null != e.l30Rank && (0, r.jsx)(ne, { rank: e.l30Rank }),
                    (0, r.jsxs)("div", {
                        className: t6.$,
                        children: [
                            (0, r.jsx)(tu.D, { variant: "heading-xxl/semibold", children: n }),
                            e.id === t3 &&
                                (0, r.jsx)("img", {
                                    src: t9,
                                    className: t6.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, r.jsx)(t7, {}),
                ],
            }),
        ],
    });
};
var na = n(638495),
    nr = n(871123),
    ns = n(439303),
    no = n(317560),
    nc = n(869099),
    nu = n(151869),
    nd = n(761812);
function nm(e) {
    return e;
}
function nh(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: nd.B, children: t });
}
function ng(e) {
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
        : (0, r.jsx)(nu.A, {
              gap: "md",
              "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
              items: t,
              getItemKey: nm,
              disableFocusRingScope: !0,
              renderItem: (e, t, l) =>
                  (0, r.jsx)(nh, {
                      children: (0, r.jsx)(nc.Ay, {
                          positionInSection: l,
                          skuId: e,
                          variant: nc.s6.SMALL,
                          analyticsLocations: n,
                          onClick: i,
                          listItemProps: t,
                      }),
                  }),
          });
}
var nx = n(326369),
    nf = n(936785),
    np = n(403581),
    nj = n(812095),
    nv = n(647474),
    nb = n(162536);
function nI(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, eY.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        a = i ? np.t : t.Icon;
    return (0, r.jsx)(nv.A, {
        className: u()(nb.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, r.jsxs)("div", {
            className: nb.Qs,
            children: [
                null != a && (0, r.jsx)(a, { size: "xs", color: "currentColor", className: nb.Kk }),
                (0, r.jsx)(Y.E, { variant: "body-sm/normal", color: "currentColor", children: (0, nj.U)(t.text) }),
            ],
        }),
    });
}
var nE = n(521058);
function nN() {
    let { storefrontPromotion: e } = W();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: a } = e;
    if (null == a || (0, th.uJ)(a.headerText)) return null;
    let s = {
        Icon: (0, nf.LZ)(l?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, nf.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, r.jsx)(nI, { className: nE.v, promotion: s });
}
let ny = [0, 1, 2, 3],
    nA = { placement: ns.Ye.GAME_PROFILE };
function nC() {
    return (0, r.jsx)(tS, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, r.jsx)(nx.A, { children: ny.map((e) => (0, r.jsx)(nh, { children: (0, r.jsx)(nc.yf, {}) }, e)) }),
    });
}
function nk(e) {
    let { selectTab: t } = e,
        n = (0, na.k)(),
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
                (l(k.Ws.GameShop), c(), (0, ei.default)({ applicationId: i.application.id }));
            }
        }, [i, l, o, t, c]),
        m = s.useCallback(
            (e, t) => {
                let a = i?.guildId;
                null != a &&
                    (l(k.Ws.GameShopItem),
                    (0, no.R)({
                        skuId: e,
                        applicationId: t,
                        isStorefront: !1,
                        analyticsLocations: u,
                        contextKey: n,
                        onClose: () => {
                            let { pathname: e, search: n } = location;
                            (0, nr.rG)(e, n, t, a) && c();
                        },
                    }));
            },
            [l, c, u, i, n],
        );
    if (a) return (0, r.jsx)(nC, {});
    if (null == i) return null;
    let { skuIds: h } = i;
    return (0, r.jsxs)(tL, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, r.jsx)(nN, {}),
            (0, r.jsx)(ns.E9, {
                newValue: nA,
                children: (0, r.jsx)(ng, { skuIds: h, analyticsLocations: u, onCardClick: m }),
            }),
        ],
    });
}
var nS = n(621466),
    nL = n(710793),
    nR = n(346055),
    nT = n(460905),
    nM = n(776231),
    nO = n(46054),
    nw = n(5377),
    nP = n(890060),
    nD = n(880405),
    nV = n(284009),
    nG = n.n(nV),
    n_ = n(574332),
    nW = n(976860);
async function nF(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    nG()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let o = e1.A.getGuild(n);
    if (o?.joinedAt == null)
        if (null == s || s.has(eL.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e8.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eL.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await n_.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, nW.pX)(eL.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var nU = n(806244),
    nY = n(165648);
function nB(e, t) {
    return nO.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function nz(e) {
    return e.id;
}
function nH() {
    return (0, r.jsxs)(tx.qT, {
        className: nU.s7,
        children: [
            (0, r.jsx)(tx.Ay, { className: nU.XN }),
            (0, r.jsxs)("div", {
                className: nU.UF,
                children: [(0, r.jsx)(tx.Ay, { className: nU.iX }), (0, r.jsx)(tx.Ay, { className: nU.jt })],
            }),
        ],
    });
}
function nX(e, t) {
    let n = (0, nM.kr)(364 * (0, nM.mZ)());
    return (0, nP.VZ)(e, n, Math.round(n / t)) ?? e;
}
function nK(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, a] = s.useState(!1),
        o = s.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, r.jsx)(nL.y, {
              readyState: i ? eL.Rv1.READY : eL.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, r.jsx)("img", {
                  src: n,
                  className: nU.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: o,
              }),
          });
}
function n$(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nS.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nS.vq)(e.target, HTMLSpanElement) && (0, nS.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        d = null != c ? nX(c, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, r.jsx)(tF.D, {
              ...i,
              className: nU.Nr,
              onClick: a,
              children: (0, r.jsxs)(nR.M, {
                  className: nU.zI,
                  children: [
                      null != m.url &&
                          (0, r.jsx)(Y.E, {
                              variant: "body-xs/medium",
                              color: "text-link",
                              className: nU.Ow,
                              children: m.url,
                          }),
                      (0, r.jsxs)("div", {
                          className: nU._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, r.jsxs)("div", {
                                      className: nU.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, r.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: nU.SG,
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
                                      className: nU.ax,
                                      children: (0, r.jsx)(nK, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, r.jsx)(tu.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-strong",
                                      className: nU.DD,
                                      children: nB(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, r.jsxs)("div", {
                                      className: u()(nU.h_, nY.PT),
                                      children: [
                                          (0, r.jsx)(Y.E, {
                                              variant: "body-sm/medium",
                                              color: "none",
                                              tag: "div",
                                              children: nB(t.body, n),
                                          }),
                                          (0, r.jsx)("div", { className: nU.fm }),
                                      ],
                                  }),
                              (0, r.jsxs)("div", {
                                  className: nU.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, r.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: nU.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, r.jsxs)(Y.E, {
                                          variant: "body-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, nw.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, r.jsxs)("div", {
                                              className: nU.a5,
                                              children: [
                                                  (0, r.jsx)(nT.n, { size: "xs", color: "currentColor" }),
                                                  (0, r.jsx)(Y.E, {
                                                      variant: "body-xs/medium",
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
let nJ = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, r.jsxs)(nR.M, {
        className: nU.zI,
        children: [
            null != t.title &&
                (0, r.jsx)(tu.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: nU.DD,
                    children: nB(t.title, n),
                }),
            t.body.length > 0 &&
                (0, r.jsxs)("div", {
                    className: u()(nU.h_, nY.PT),
                    children: [
                        (0, r.jsx)(Y.E, {
                            variant: "body-sm/medium",
                            color: "none",
                            tag: "div",
                            children: nB(t.body, n),
                        }),
                        (0, r.jsx)("div", { className: nU.fm }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: nU.ov,
                children: [
                    (0, r.jsx)(Y.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        children: (0, nw.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, r.jsxs)("div", {
                            className: nU.a5,
                            children: [
                                (0, r.jsx)(nT.n, { size: "xs", color: "currentColor" }),
                                (0, r.jsx)(Y.E, {
                                    variant: "body-xs/medium",
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
function nq(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, nS.vq)(e.target, HTMLAnchorElement) ||
                        ((0, nS.vq)(e.target, HTMLSpanElement) && (0, nS.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        c = t.media?.proxyUrl ?? t.media?.url,
        u = null != c ? nX(c, o) : void 0;
    return (0, r.jsxs)(tF.D, {
        ...i,
        className: nU.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, r.jsx)("div", {
                    className: nU.Vl,
                    children: (0, r.jsx)(nK, { message: t, src: u, aspectRatio: o }),
                }),
            (0, r.jsx)(nJ, { message: t, channelId: n }),
        ],
    });
}
function nQ(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        a = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, r.jsx)(tF.D, {
        ...l,
        className: nU.Nr,
        onClick: a,
        children: (0, r.jsxs)(nR.M, {
            className: nU.zI,
            children: [
                (0, r.jsx)(tu.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: nU.MH,
                    children: i.question.text,
                }),
                (0, r.jsxs)("div", {
                    className: nU.xd,
                    children: [
                        o.map((e) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className: nU.Nf,
                                    children: (0, r.jsx)(Y.E, {
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        className: nU.TT,
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
                                className: nU.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: nU.ov,
                    children: (0, r.jsx)(Y.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        children: em.intl.format(em.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, nP.jL)(i),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function nZ(e) {
    return null != e.message.poll
        ? (0, r.jsx)(nQ, { ...e })
        : null != e.message.embedSource
          ? (0, r.jsx)(n$, { ...e })
          : (0, r.jsx)(nq, { ...e });
}
let n0 = s.memo(function (e) {
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
                    null == e || n || L.A.isAnnouncementsFetching(e) || (0, nD.Rf)(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(u),
        j = s.useCallback(() => {
            let e = i?.guild?.id ?? h;
            null != e &&
                null != g &&
                (c(k.Ws.Announcements),
                e4.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                o(),
                nF({ invite: i, guildId: e, channelId: g, analyticsLocationStack: n }));
        }, [c, o, t, i, h, g, n, u]),
        v = s.useCallback(
            (e) => {
                let l = i?.guild?.id ?? h;
                null != l &&
                    null != g &&
                    (c(k.Ws.AnnouncementsItem),
                    e4.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                    o(),
                    nF({ invite: i, guildId: l, channelId: g, messageId: e, analyticsLocationStack: n }));
            },
            [c, o, t, i, h, g, n, u],
        ),
        b = null != g && d.length > 0;
    return (!f || x) && a
        ? (0, r.jsx)(tS, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, r.jsx)(nx.A, {
                  gap: 16,
                  children: eQ()
                      .range(3)
                      .map((e) => (0, r.jsx)(nH, {}, e)),
              }),
          })
        : b
          ? (0, r.jsx)(tL, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: j,
                children: (0, r.jsx)(nu.A, {
                    gap: 16,
                    items: d,
                    getItemKey: nz,
                    itemClassName: nU.hu,
                    renderItem: (e, t) =>
                        (0, r.jsx)(nZ, { message: e, channelId: g, onCardClick: v, listItemProps: t }, e.id),
                }),
            })
          : null;
});
var n1 = n(155718),
    n2 = n(505779);
(n(323874), n(14289), n(35956));
var n8 = n(989441);
let n4 = {
        appStore: {
            websiteCategories: [n2.V1.IPHONE, n2.V1.IPAD],
            websiteHostnames: n2.FU,
            distributor: n8.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://${n2.FU["0"]}/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [n2.V1.ANDROID],
            websiteHostnames: n2.SX,
            distributor: n8.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://${n2.SX["0"]}/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    n3 = new Set(
        Object.values(n4).flatMap((e) => {
            let { websiteCategories: t } = e;
            return t;
        }),
    );
function n6(e, t) {
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
var n9 = n(808380);
let n5 = [n9.Y.DESKTOP, "mobile", n9.Y.XBOX, n9.Y.PLAYSTATION, n9.Y.NINTENDO, n9.Y.ROBLOX];
var n7 = n(28863),
    le = n(975807),
    lt = n(194362);
function ln() {
    let { game: e, trackAction: t } = W(),
        n = s.useCallback(async () => {
            t(k.Ws.ClaimGame);
            let e = await (0, lt.a)(eL.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, le.A)(e);
        }, [t]),
        l = s.useCallback((e) => (0, r.jsx)(n7.Anchor, { onClick: n, children: e }), [n]);
    return e.linkedApplications?.some((e) => e.type === n1.Mh.OFFICIAL)
        ? null
        : (0, r.jsx)(Y.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: l }),
          });
}
var ll = n(998445),
    li = n(274997),
    la = n(80500),
    lr = n(319745),
    ls = n(488225),
    lo = n(967492),
    lc = n(72265),
    lu = n(454346),
    ld = n(341904),
    lm = n(423438),
    lh = n(610509),
    lg = n(575888),
    lx = n(924895),
    lf = n(37948),
    lp = n(471177);
let lj = { size: "xs", colorClass: lp.w };
function lv(e) {
    let { website: t } = e,
        { trackAction: n } = W(),
        l = (0, lf.A)(),
        {
            action: i,
            icon: a,
            title: o,
        } = (function (e, t) {
            switch (e.category) {
                case n2.V1.OFFICIAL:
                    return {
                        icon: (0, r.jsx)(ll.GlobeEarthIcon, { ...t }),
                        action: k.Ws.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case n2.V1.TWITTER:
                    return { icon: (0, r.jsx)(li.p, { ...t }), action: k.Ws.XLink, title: em.intl.string(em.t.INic4y) };
                case n2.V1.YOUTUBE:
                    return {
                        action: k.Ws.YouTubeLink,
                        icon: (0, r.jsx)(la.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case n2.V1.FACEBOOK:
                    return {
                        icon: (0, r.jsx)(lr.Z, { ...t }),
                        action: k.Ws.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case n2.V1.INSTAGRAM:
                    return {
                        icon: (0, r.jsx)(ls.L, { ...t }),
                        action: k.Ws.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case n2.V1.BLUESKY:
                    return {
                        icon: (0, r.jsx)(lo.a, { ...t }),
                        action: k.Ws.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case n2.V1.REDDIT:
                    return {
                        icon: (0, r.jsx)(lc.T, { ...t }),
                        action: k.Ws.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case n2.V1.TWITCH:
                    return {
                        icon: (0, r.jsx)(lu.a, { ...t }),
                        action: k.Ws.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                case n2.V1.ITCH:
                    return {
                        icon: (0, r.jsx)(ld.x, { ...t }),
                        action: k.Ws.ItchLink,
                        title: em.intl.string(em.t.nOrtg9),
                    };
                case n2.V1.WIKIA:
                    return {
                        icon: (0, r.jsx)(lm.g, { ...t }),
                        action: k.Ws.FandomLink,
                        title: em.intl.string(em.t.xDtQAQ),
                    };
                case n2.V1.IPHONE:
                case n2.V1.IPAD:
                    return {
                        icon: (0, r.jsx)(lh.z, { ...t }),
                        action: k.Ws.AppStoreLink,
                        title: em.intl.string(em.t.LVy7Ug),
                    };
                case n2.V1.ANDROID:
                    return {
                        icon: (0, r.jsx)(lg.O, { ...t }),
                        action: k.Ws.GooglePlayStoreLink,
                        title: em.intl.string(em.t.V6rllO),
                    };
                case n2.V1.ROBLOX:
                    return {
                        icon: (0, r.jsx)(lx.H, { ...t }),
                        action: k.Ws.RobloxStoreLink,
                        title: em.intl.string(em.t["pJ+P+h"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, lj),
        c = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, r.jsx)(J.m, {
        text: o,
        children: (0, r.jsx)(tF.D, { onClick: c, className: lp.y, title: o, children: a }),
    });
}
var lb = n(31300),
    lI = n(646270),
    lE = n(802516),
    lN = n(22363),
    ly = n(418524);
let lA = {
    [n9.Y.DESKTOP]: lb.k,
    mobile: lI.u,
    [n9.Y.XBOX]: lE.Y,
    [n9.Y.PLAYSTATION]: lN.X,
    [n9.Y.NINTENDO]: ly.M,
    [n9.Y.ROBLOX]: lx.H,
};
function lC(e) {
    let { platform: t } = e,
        n = (function (e) {
            switch (e) {
                case n9.Y.DESKTOP:
                    return em.intl.string(em.t.KT6uCJ);
                case "mobile":
                    return em.intl.string(em.t["0DvssQ"]);
                case n9.Y.XBOX:
                    return em.intl.string(em.t.DDWUJp);
                case n9.Y.PLAYSTATION:
                    return em.intl.string(em.t.fzMz2s);
                case n9.Y.NINTENDO:
                    return em.intl.string(em.t.AMW8je);
                case n9.Y.ROBLOX:
                    return em.intl.string(em.t.MPURhG);
            }
        })(t),
        l = lA[t];
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
var lk = n(424994),
    lS = n(623828);
function lL() {
    return (0, r.jsx)(Y.E, { variant: "body-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let lR = function () {
    let { game: e } = W(),
        t = s.useMemo(() => e.genres.map(t8.du).join(", "), [e]),
        n = e.getCompanyByRole(n1.wk.PUBLISHER),
        l = e.getCompanyByRole(n1.wk.DEVELOPER),
        i = n.map((e) => e.name).join(", "),
        a = l.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        c = s.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(n9.Y.MACOS) || t.has(n9.Y.LINUX)) && t.add(n9.Y.DESKTOP);
            let n = t.has(n9.Y.IOS) || t.has(n9.Y.ANDROID);
            return n5.filter((e) => ("mobile" === e ? n : t.has(e)));
        }, [e.platforms]),
        u = s.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return n2.pF.includes(t) && !n3.has(t);
                }),
                n = Object.values(n4)
                    .map((t) => n6(e, t))
                    .filter(ek.Vq);
            return t.sort((e, t) => n2.pF.indexOf(e.category) - n2.pF.indexOf(t.category)).concat(n);
        }, [e]),
        d = !(0, th.uJ)(t),
        m = !(0, th.uJ)(i),
        h = !(0, th.uJ)(a),
        g = !(0, th.uJ)(o),
        x = c.length > 0,
        f = u.length > 0 && !u.every((e) => (0, th.uJ)(e.url));
    return (0, r.jsxs)("div", {
        className: lS.uW,
        children: [
            (0, r.jsx)("div", {
                className: lS.Gf,
                children: (0, r.jsx)(tu.D, {
                    variant: "body-md/medium",
                    color: "text-subtle",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: lS.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
                            }),
                            d
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lS.Gu,
                                      children: t,
                                  })
                                : (0, r.jsx)(lL, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
                            }),
                            m
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lS.Gu,
                                      children: i,
                                  })
                                : (0, r.jsx)(lL, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== l.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            h
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lS.Gu,
                                      children: a,
                                  })
                                : (0, r.jsx)(lL, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            g
                                ? (0, r.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lS.Gu,
                                      children: nw.i$(new Date(o), "LL"),
                                  })
                                : (0, r.jsx)(lL, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: c.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            x
                                ? (0, r.jsx)("div", {
                                      className: lS.Gu,
                                      children: c.map((e) => (0, r.jsx)(lC, { platform: e }, e)),
                                  })
                                : (0, r.jsx)(lL, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            f
                                ? (0, r.jsx)("div", {
                                      className: lS.Gu,
                                      children: u.map((e) => (0, r.jsx)(lv, { website: e }, e.url)),
                                  })
                                : (0, r.jsx)(lL, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                className: lS.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: lk.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: lS.OQ, children: (0, r.jsx)(ln, {}) }),
        ],
    });
};
var lT = n(141628),
    lM = n(289363),
    lO = n(793919);
function lw() {
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: lO.uW,
        children: [
            (0, r.jsx)(tx.Ay, { className: lO.dU, width: "30%" }),
            (0, r.jsxs)(tx.qT, {
                className: lO.nV,
                children: [
                    (0, r.jsx)("div", { className: lO.sB, children: (0, r.jsx)(lM.default, { isLoading: !0 }) }),
                    (0, r.jsxs)("div", {
                        className: lO.hQ,
                        children: [
                            (0, r.jsxs)("div", {
                                className: lO.Yv,
                                children: [(0, r.jsx)(tx.Ay, { width: "55%" }), (0, r.jsx)(tx.Ay, { width: "85%" })],
                            }),
                            (0, r.jsx)(tx.pv, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function lP(e) {
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
          ? (0, r.jsx)(lw, {})
          : !a || i
            ? null
            : (0, r.jsxs)("div", {
                  className: lO.uW,
                  children: [
                      (0, r.jsx)(tu.D, {
                          className: lO.Gf,
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, r.jsxs)("div", {
                          className: lO.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: lO.sB,
                                  children: (0, r.jsx)(lM.default, { application: c }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: lO.hQ,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: lO.FS,
                                          children: [
                                              (0, r.jsx)(tu.D, {
                                                  variant: "heading-sm/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: c.name,
                                                  }),
                                              }),
                                              (0, r.jsx)(Y.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-muted",
                                                  children: em.intl.string(em.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(K.$, {
                                          variant: "secondary",
                                          icon: lT.A,
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
var lD = n(80687),
    lV = n(248643),
    lG = n(256905),
    l_ = n(383055),
    lW = n(191096),
    lF = n(90721),
    lU = n(371794),
    lY = n(534573),
    lB = n(635377);
let lz = new (n.n(lB)())({ max: 100 });
function lH() {
    let e = new Map();
    return (lz.forEach((t, n) => e.set(n, t)), e);
}
var lX = n(342857);
function lK(e, t) {
    return (0, lY.Ec)(e, { size: t, keepAspectRatio: !0, format: tm.QB ? "webp" : null });
}
let l$ = s.memo(function (e) {
    let { url: t, size: n, alt: l, className: i, ...a } = e,
        { dimensions: o, recordDimensions: c } = (function () {
            let [e, t] = s.useState(lH);
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
                        let i = lz.get(e) ?? l;
                        (lz.set(e, i),
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
            m && (0, r.jsx)("img", { ...a, src: lK(t, 106), className: lX.cL, alt: "", draggable: !1 }),
            (0, r.jsx)("img", {
                ...a,
                ref: h,
                src: lK(t, n),
                className: u()(i, lX.Sl, m && lX.F1),
                "data-portrait": m || void 0,
                alt: l,
                onLoad: g,
            }),
        ],
    });
});
var lJ = n(140128);
function lq(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
let lQ = s.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: i, onSelect: a, gameName: o, listItemProps: c } = e,
            d = s.useCallback(() => a(n), [a, n]),
            m = c?.tabIndex;
        return (0, r.jsx)(tF.D, {
            ...c,
            className: u()(lJ.JS, l && lJ.Y4),
            onClick: d,
            children: (0, r.jsxs)("div", {
                className: lJ.ub,
                children: [
                    (0, r.jsx)("div", {
                        className: lJ.kV,
                        children: (0, r.jsx)(l$, {
                            url: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                            size: 106,
                            className: lJ.xn,
                            alt: em.intl.formatToPlainString(em.t.COYYrn, { game: o }),
                            loading: "lazy",
                            decoding: "async",
                            draggable: !1,
                        }),
                    }),
                    "VIDEO" === t.type &&
                        (0, r.jsx)("div", {
                            className: lJ.UZ,
                            children: (0, r.jsx)(lD.D, { playing: l && i, size: "sm", tabIndex: m }),
                        }),
                ],
            }),
        });
    }),
    lZ = s.memo(function (e) {
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
            (0, lF.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    !n && (0, r.jsx)("canvas", { ref: d, className: lJ.HW, "aria-hidden": "true" }),
                    (0, r.jsx)("div", {
                        className: lJ.tN,
                        children: (0, r.jsx)(lV.A, {
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
                            renderLinkComponent: l_.bU,
                            onPlay: o,
                            onPause: c,
                            onFullscreenChange: u,
                            mediaPlayerClassName: lJ.T9,
                            videoRef: i,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function l0() {
    let { game: e, trackAction: t } = W(),
        [n, l] = s.useState(0),
        [i, a] = s.useState(null),
        [o, c] = s.useState(e.screenshotUrls),
        d = s.useRef(null),
        h = s.useRef(null),
        g = (0, m.bG)([t0.Ay], () => t0.Ay.useReducedMotion),
        { obscured: x } = (0, lW.I3)();
    o !== e.screenshotUrls && (c(e.screenshotUrls), l(0));
    let f = s.useMemo(() => {
            let t = (e.trailers ?? []).map((e) => {
                    let t = (0, lU.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, lU.YE)(e.application_id, e.id, e.width, "webp"),
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
        [E, N] = s.useState(!1),
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
            (0, lG.R)({
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
                        N(n));
                },
            });
        }, [t, f, j, b]),
        C = s.useCallback(() => N(!0), []),
        S = s.useCallback(() => N(!1), []),
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
              className: lJ.kL,
              children: [
                  b
                      ? (0, r.jsx)("div", {
                            className: lJ.ND,
                            children: (0, r.jsx)(
                                lZ,
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
                            className: lJ.wp,
                            children: [
                                null != i &&
                                    !g &&
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: lJ.Jy,
                                            onAnimationEnd: L,
                                            children: (0, r.jsx)(l$, { url: i, size: 900, className: lJ.c8, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, r.jsx)("div", { className: lJ.QN }),
                                (0, r.jsx)(tF.D, {
                                    className: lJ.gv,
                                    onClick: A,
                                    children: (0, r.jsx)("div", {
                                        className: lJ.cs,
                                        children: (0, r.jsx)(
                                            l$,
                                            {
                                                url: v.url,
                                                size: 900,
                                                className: u()(lJ.c8, lJ.Jf),
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  (0, r.jsx)(nu.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      items: p,
                      getItemKey: lq,
                      renderItem: (t, n) => {
                          let { item: l, index: i } = t;
                          return (0, r.jsx)(
                              lQ,
                              {
                                  item: l,
                                  index: i,
                                  isPlaying: E,
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
var l1 = n(49381),
    l2 = n(223273);
function l8(e, t, n) {
    if (null == e || null == t || t < 10) return l2.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? l2.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? l2.vI.VERY_POSITIVE
              : l2.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return l2.vI.MOSTLY_POSITIVE;
    if (e >= 40) return l2.vI.MIXED;
    if (e >= 20) return l2.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return l2.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return l2.vI.VERY_NEGATIVE;
    return l2.vI.OVERWHELMINGLY_NEGATIVE;
}
var l4 = n(792216);
let l3 = {
    appStore: { getTitle: () => em.intl.string(em.t.LVy7Ug), action: k.Ws.AppStoreReviews },
    googlePlay: { getTitle: () => em.intl.string(em.t.V6rllO), action: k.Ws.GooglePlayReviews },
};
function l6(e) {
    switch (e) {
        case l2.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case l2.vI.OVERWHELMINGLY_POSITIVE:
        case l2.vI.VERY_POSITIVE:
        case l2.vI.POSITIVE:
        case l2.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case l2.vI.MIXED:
            return "steam-review-text-mixed";
        case l2.vI.MOSTLY_NEGATIVE:
        case l2.vI.NEGATIVE:
        case l2.vI.VERY_NEGATIVE:
        case l2.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var l9 =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    l5 = n(778591);
function l7(e) {
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
var ie = n(315189);
let it = { appStore: lh.z, googlePlay: lg.O };
function il(e) {
    let { review: t } = e,
        { trackAction: n } = W(),
        l = (0, lf.A)(),
        i = it[t.key],
        { action: a, url: o } = t,
        c = s.useCallback(() => {
            (n(a), l(o));
        }, [a, l, n, o]);
    return (0, r.jsx)(tF.D, {
        onClick: c,
        className: ie.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, r.jsxs)("div", {
            className: ie.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: ie.hU,
                    children: [
                        (0, r.jsx)(i, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tu.D, { variant: "heading-xs/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ie.nK,
                    children: [
                        (0, r.jsx)(Y.E, {
                            variant: "body-xs/medium",
                            color: "text-strong",
                            className: ie.yX,
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
function ii(e) {
    let { url: t, title: n, rating: l, ratingCount: i, tooltipVariant: a = "all" } = e,
        { trackAction: o } = W(),
        c = (0, lf.A)(),
        u = l8(l, i, "recent" === a),
        d = l6(u),
        m = s.useCallback(() => {
            (o(k.Ws.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, r.jsx)(tF.D, {
        onClick: m,
        className: ie.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, r.jsxs)("div", {
            className: ie.tF,
            children: [
                (0, r.jsxs)("div", {
                    className: ie.hU,
                    children: [
                        (0, r.jsx)(l1.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, r.jsx)(tu.D, { variant: "heading-xs/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, r.jsx)(
                    J.m,
                    {
                        text:
                            u === l2.vI.NO_USER_REVIEWS
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
                            className: ie.nK,
                            children: [
                                (0, r.jsx)(Y.E, {
                                    variant: "body-xs/medium",
                                    color: d,
                                    className: ie.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case l2.vI.NO_USER_REVIEWS:
                                                return em.intl.string(em.t.CLMt8J);
                                            case l2.vI.OVERWHELMINGLY_POSITIVE:
                                                return em.intl.string(em.t["75sx1S"]);
                                            case l2.vI.VERY_POSITIVE:
                                                return em.intl.string(em.t["EkOVg+"]);
                                            case l2.vI.POSITIVE:
                                                return em.intl.string(em.t.ZUkFtr);
                                            case l2.vI.MOSTLY_POSITIVE:
                                                return em.intl.string(em.t.M7Z09a);
                                            case l2.vI.MIXED:
                                                return em.intl.string(em.t.c8yuHR);
                                            case l2.vI.MOSTLY_NEGATIVE:
                                                return em.intl.string(em.t.H0MSjG);
                                            case l2.vI.NEGATIVE:
                                                return em.intl.string(em.t.vpLrgz);
                                            case l2.vI.VERY_NEGATIVE:
                                                return em.intl.string(em.t["5spYuX"]);
                                            case l2.vI.OVERWHELMINGLY_NEGATIVE:
                                                return em.intl.string(em.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != i &&
                                    u !== l2.vI.NO_USER_REVIEWS &&
                                    (0, r.jsx)(Y.E, {
                                        variant: "body-xs/medium",
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
function ia(e) {
    let { url: t } = e,
        { game: n, trackAction: l } = W(),
        { reviews: i } = n,
        a = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = a.tier,
        c = a.topCriticRating ?? -1,
        u = a.topCriticRatingCount ?? -1,
        d = (c <= 0 || u <= 0) && null == o,
        m = (0, lf.A)(),
        h = s.useCallback(() => {
            (l(k.Ws.OpenCriticReviews), m(t));
        }, [m, l, t]);
    return (0, r.jsx)(tF.D, {
        onClick: h,
        className: ie.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, r.jsxs)("div", {
            className: ie.Ur,
            children: [
                (0, r.jsx)(tu.D, {
                    variant: "heading-xs/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, r.jsxs)("div", {
                    className: ie.WA,
                    children: [
                        null != o ? (0, r.jsx)(ir, { tier: o }) : null,
                        null != o && c > 0 && u > 0 ? (0, r.jsx)(is, { rating: c, tier: o }) : null,
                        d
                            ? (0, r.jsx)(Y.E, {
                                  variant: "body-xs/medium",
                                  color: l6(l2.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function ir(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case l9.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case l9.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case l9.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case l9.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case l9.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case l9.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case l9.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case l9.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, r.jsx)(
        J.m,
        {
            text: n,
            children: (0, r.jsx)("div", {
                className: ie.TE,
                children: (0, r.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function is(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case l9.MIGHTY:
                    t = "#fc430a";
                    break;
                case l9.STRONG:
                    t = "#9e00b4";
                    break;
                case l9.FAIR:
                    t = "#4aa1ce";
                    break;
                case l9.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, r.jsx)(
        J.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, r.jsxs)("div", {
                className: ie.TE,
                style: { backgroundColor: i },
                children: [
                    (0, r.jsx)(l7, { rating: t, strokeColor: l }),
                    (0, r.jsx)(Y.E, {
                        variant: "body-xs/semibold",
                        color: "text-overlay-light",
                        className: ie.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let io = function () {
    let { game: e } = W(),
        t = (0, l5.I)(e.id),
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
                l = e.steamReleaseStatus !== l4.Y.RETIRED_ABANDONED && null != t,
                i = l8(n?.recentRating, n?.recentRatingCount, !0),
                a = l && i !== l2.vI.NO_USER_REVIEWS,
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
                mobileStoreReviews: Object.entries(l3).flatMap((t) => {
                    var n;
                    let l,
                        i,
                        [a, r] = t,
                        s = e.reviews?.[a],
                        o = s?.rating,
                        c = s?.ratingCount;
                    if (null == o || null == c) return [];
                    let u = n6(e, n4[a]);
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
            (e.steamReleaseStatus !== l4.Y.RETIRED_ABANDONED || m.length > 0) &&
            e.reviews?.opencritic != null &&
            null != e.opencriticUrl;
    return i || h || 0 !== m.length
        ? (0, r.jsxs)("div", {
              className: ie.uW,
              children: [
                  (0, r.jsx)("div", {
                      className: ie.Gf,
                      children: (0, r.jsx)(tu.D, {
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: ie.kL,
                      children: [
                          a && null != t
                              ? (0, r.jsx)("div", {
                                    className: ie.WH,
                                    children: (0, r.jsx)(ii, {
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
                                    className: ie.WH,
                                    children: (0, r.jsx)(ii, {
                                        url: t,
                                        title: em.intl.string(d),
                                        rating: c,
                                        ratingCount: u,
                                        tooltipVariant: o ? "localized" : "all",
                                    }),
                                })
                              : null,
                          m.map((e) =>
                              (0, r.jsx)("div", { className: ie.WH, children: (0, r.jsx)(il, { review: e }) }, e.key),
                          ),
                          h && null != n
                              ? (0, r.jsx)("div", { className: ie.WH, children: (0, r.jsx)(ia, { url: n }) })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var ic = n(110676),
    iu = n(722258),
    id = n(987421),
    im = n(561769),
    ih = n(484469),
    ig = n(57020),
    ix = n(682301);
let ip = [];
var ij = n(758836),
    iv = n(399872);
let ib = [0, 1, 2, 3, 4];
function iI(e) {
    return e.skuId;
}
function iE(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = s.useContext(im.v3),
        { trackAction: u } = W(),
        d = s.useRef(null),
        m = s.useCallback(
            (e) => {
                (u(k.Ws.DiscordCollectiblesShopItem),
                    (d.current = e.currentTarget),
                    (0, iu.B)({
                        skuId: i,
                        analyticsLocations: [f.A.GAME_PROFILE],
                        analyticsSource: f.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, ig.A)({ product: t }),
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
    return (0, r.jsx)(im.v3.Provider, {
        value: h,
        children: (0, r.jsx)(id.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: iv.N,
            onClickCard: m,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function iN() {
    return (0, r.jsx)(ih.A, {});
}
function iy() {
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
                            null == e || t || L.A.isShopCollectionFetching(e) || (0, nD.hd)(e);
                        }, [e, t]),
                        { skuIds: l ?? ip, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, ix.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(e.shopCollectionIds?.[0]),
        a = s.useCallback(() => {
            (n(k.Ws.DiscordCollectiblesShop),
                t(),
                (0, ic.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: ij.G2.CATALOG,
                }));
        }, [n, t]);
    return i
        ? (0, r.jsx)(tS, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, r.jsx)(nx.A, { children: ib.map((e) => (0, r.jsx)(iN, {}, e)) }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(tL, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: (0, r.jsx)(nu.A, {
                    gap: "md",
                    items: l,
                    getItemKey: iI,
                    renderItem: (e, t) => (0, r.jsx)(iE, { product: e, listItemProps: t }, e.skuId),
                }),
            });
}
var iA = n(611656),
    iC = n(281018),
    ik = n(987070);
let iS = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function iL(e) {
    return e.id;
}
function iR(e) {
    let { game: t, listItemProps: n } = e,
        { navigateToGame: l, trackAction: i } = W(),
        { shouldOpenGameProfile: a, gameId: o } = (0, iA.Ay)({
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
        children: (0, r.jsx)(tF.D, {
            ...n,
            className: ik.Nr,
            onClick: c,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: (0, r.jsx)(t4.Ay, {
                game: t,
                className: ik.xe,
                size: t4.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, r.jsx)(t4.gr, { className: ik.uz }),
            }),
        }),
    });
}
function iT() {
    let { game: e } = W(),
        t = e.id,
        { isFetching: n, similarGames: l } = (0, iC.A)(t);
    return n
        ? (0, r.jsx)(tS, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, r.jsx)("div", {
                  className: ik.XG,
                  style: iS,
                  children: (0, r.jsx)(nx.A, {
                      children: eQ()
                          .range(0, 8)
                          .map((e) => (0, r.jsx)(t4.gr, { className: ik.aZ }, e)),
                  }),
              }),
          })
        : 0 === l.length
          ? null
          : (0, r.jsx)(tL, {
                title: em.intl.string(em.t["6rLyQB"]),
                children: (0, r.jsx)("div", {
                    className: ik.XG,
                    style: iS,
                    children: (0, r.jsx)(nu.A, {
                        gap: "md",
                        items: l,
                        getItemKey: iL,
                        itemClassName: ik.cW,
                        renderItem: (e, t) => (0, r.jsx)(iR, { game: e, listItemProps: t }, e.id),
                    }),
                }),
            });
}
n(667532);
var iM = n(853022);
let iO = new Set(["1402418703554842694", "356877880938070016"]),
    iw = [n2.V1.EPICGAMES, n2.V1.STEAM, n2.V1.ROBLOX, n2.V1.BATTLENET, n2.V1.RIOT, n2.V1.MINECRAFT];
function iP(e) {
    return (0, r.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iD = n(349361),
    iV = n(422688),
    iG = n(505200),
    i_ = n(695250);
let iW = function (e) {
    switch (e.category) {
        case n2.V1.STEAM:
            return {
                icon: l1.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: k.Ws.SteamStoreLink,
                url: e.url,
            };
        case n2.V1.EPICGAMES:
            return {
                icon: iD.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: k.Ws.EpicStoreLink,
                url: e.url,
            };
        case n2.V1.ROBLOX:
            return {
                icon: lx.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: k.Ws.RobloxStoreLink,
                url: e.url,
            };
        case n2.V1.BATTLENET:
            return {
                icon: iV.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: k.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case n2.V1.RIOT:
            return {
                icon: iG.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: k.Ws.RiotStoreLink,
                url: e.url,
            };
        case n2.V1.MINECRAFT:
            return {
                icon: i_.m,
                text: em.intl.string(em.t["HZbmO+"]),
                ariaLabel: em.intl.string(em.t.WWTqYn),
                action: k.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: lE.Y,
                text: em.intl.string(em.t["QpN/Iz"]),
                ariaLabel: em.intl.string(em.t["8JZmmF"]),
                action: k.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var iF = n(242216);
function iU(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, l5.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eL.d3x.XBOX_GAME_PASS && !(0, th.uJ)(e.id));
                return t?.id == null ? null : (0, iM.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== n2.V1.EPICGAMES || !!iO.has(l)) &&
                            (e.category !== n2.V1.STEAM || a !== l4.Y.RETIRED_ABANDONED) &&
                            iw.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === l4.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === n2.V1.STEAM) ||
                    e.push({ category: n2.V1.STEAM, url: t });
                let r = e.sort((e, t) => (e.category === n2.V1.STEAM ? -1 : +(t.category === n2.V1.STEAM)));
                return (null != n && r.unshift({ category: "XBOX_GAME_PASS", url: n }), r);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function iY(e) {
    let { data: t } = e,
        { trackAction: n } = W(),
        l = (0, lf.A)();
    return (0, r.jsx)(iP, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let iB = function () {
    let { game: e, trackAction: t } = W(),
        { showsStoreLinks: l, storeWebsites: i } = iU(e),
        a = s.useMemo(() => i.map(iW).filter((e) => null != e), [i]);
    if (!l) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, r.jsx)(iY, { data: e });
    }
    if (2 === a.length)
        return (0, r.jsxs)("div", {
            className: iF.G,
            children: [(0, r.jsx)(iY, { data: a[0] }), (0, r.jsx)(iY, { data: a[1] })],
        });
    let o = (0, r.jsx)(iP, {
        text: em.intl.string(em.t["/hMurx"]),
        "aria-label": em.intl.string(em.t.nK60cc),
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
        ? (0, r.jsxs)("div", { className: iF.G, children: [(0, r.jsx)(iY, { data: a[0] }), o] })
        : o;
};
var iz = n(123292),
    iH = n(30772),
    iX = n(478676),
    iK = n.n(iX),
    i$ = n(486889),
    iJ = n(694403),
    iq = n(417964),
    iQ = n(998218);
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
let i0 = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/,
    i1 = RegExp(i0.source, "g"),
    i2 = /[\n\r\u001c-\u001e\u0085\u2029]/,
    i8 = RegExp(`(${i2.source})`),
    i4 = RegExp(`${/[\u0000-\u001f\u007f]/.source}|${i2.source}`),
    i3 = /[\p{M}\p{Default_Ignorable_Code_Point}]/gu,
    i6 = new Set(["subject", "body"]),
    i9 = /https?:\/\//i,
    i5 = /\b(https?)(?::[/\\]+|[/\\]{2,})/gi,
    i7 = String.raw`https?:\/\/[^\s<]+[^<.,:;"'\]\s]`,
    ae = RegExp(`^(${i7})`, "i"),
    at = RegExp(i7, "gi"),
    an = /(?:^|[^a-z0-9.!#$%&'*+\/=?^_`{|}~-])([a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,})/gi,
    al = new Map(
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
    ai = { bold: !1, italic: !1, underline: !1 },
    aa = /[\uD800-\uDBFF]/,
    ar = /^[a-z][a-z0-9:-]*$/,
    as = /^<[a-z][a-z0-9:-]*\s*(?:\/+\s*)?>$/i,
    ao = /^<[a-z][a-z0-9:-]*(?:\s+[a-z0-9:+-]+)*(?:\s*\/+\s*[a-z0-9:+-]+(?:\s+[a-z0-9:+-]+)*)+\s*>$/i,
    ac = /^<\/{2,}[\s/a-z0-9:+-]*>$/i,
    au = new Set([
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
    ad = new Set([
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
function am(e, t) {
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
          : Array.from(n.searchParams.keys()).every((e) => i6.has(e.toLowerCase()))
            ? n
            : void 0;
}
function ah(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e ? am(e, t)?.href : void 0;
}
function ag(e) {
    return (0, iq.El)(e.replace(i3, "").normalize("NFKC"));
}
function ax(e) {
    return ag((0, iq.Fd)(e));
}
function af(e) {
    return e.replace(i5, "$1://");
}
function ap(e, t) {
    if (
        0 === e.trim().length ||
        (0, i$.Ay)(e).some((n) => {
            let { url: l } = n;
            return (
                ah(l, !0) !== t &&
                (!!(!l.startsWith("http://") || e.includes(l)) || ah(`https://${l.slice(7)}`, !0) !== t)
            );
        })
    )
        return !0;
    let n = af(e),
        l = Array.from(n.matchAll(at), (e) => {
            let [t] = e;
            return t;
        });
    if ((af(ag(n.normalize("NFKD"))).match(at) ?? []).length > l.length || l.some((e) => ah(e, !0) !== t)) return !0;
    let i = Array.from(e.replace(at, " ").matchAll(an), (e) => {
        let [, t] = e;
        return t;
    });
    if (0 === i.length) return !1;
    if (!t.startsWith("mailto:")) return !0;
    let a = iQ.A.safeDecodeURIComponent(new URL(t).pathname)?.toLowerCase();
    return null == a || i.some((e) => e.toLowerCase() !== a);
}
function aj(e) {
    let t = 0;
    for (let n = e.length - 1; n >= 0 && ")" === e[n]; n--) {
        let n = e.indexOf("(", t);
        if (-1 === n) return e.slice(0, -1);
        t = n + 1;
    }
    return e;
}
function av(e) {
    return ah(iK().unescapeUrl(e[2]));
}
let ab = {
        text: iK().defaultRules.text,
        link: {
            ...iJ.Ay,
            match(e, t, n) {
                let l = iJ.Ay.match(e, t, n);
                return null == l || i2.test(l[0]) ? null : null != av(l) ? l : null;
            },
            parse(e, t, n) {
                let l = av(e);
                return null == l || ap(ax(e[1]), l) ? { type: "text", content: e[0] } : iJ.Ay.parse(e, t, n);
            },
        },
        url: {
            order: iK().defaultRules.url.order,
            requiredFirstCharacters: ["h", "H"],
            match(e) {
                let t = ae.exec(e);
                return (null != t && (t[0] = t[1] = aj(t[1])), t);
            },
            parse(e) {
                let t = e[1],
                    n = t.search(i4),
                    l = -1 === n ? t : t.slice(0, n),
                    i = am(l, !0);
                if (null == i) return { type: "text", content: t };
                let a = (0, iJ.W1)(l)?.displayTarget;
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
    aI = iK().parserFor(ab);
function aE(e) {
    let { link: t, ...n } = e;
    return n;
}
function aN(e) {
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
                let s = ax(r).trim(),
                    o = 0 === s.length ? "" : ap(s, i.link) ? void 0 : i.link;
                if (o !== i.link)
                    for (let i = l; i < a; i++) {
                        let l = aE(e[i]);
                        ((t[i] = null != o ? { ...l, link: o } : l), null == o && n.add(i));
                    }
                l = a;
            }
            return { marked: t, rawURLsOnly: n };
        })(
            (function (e, t) {
                if (!e.some((e) => i0.test(e.text))) return e;
                let n = 0,
                    l = e.map((e) =>
                        e.text.split(i8).map((e) => {
                            let t = { text: e, paragraph: n };
                            return (i2.test(e) && n++, t);
                        }),
                    ),
                    i = new Set();
                return (
                    l.forEach((n, l) => {
                        for (let { text: r, paragraph: s } of n) {
                            var a;
                            let n = r.replace(i1, "");
                            "" !== n &&
                                ((a = e[l]), null != a.link ? "" !== a.link : t && (i9.test(n) || n.includes("]("))) &&
                                i.add(s);
                        }
                    }),
                    e.map((e, t) => ({
                        ...e,
                        text: l[t]
                            .map((e) => {
                                let { text: t, paragraph: n } = e;
                                return i.has(n) ? t.replace(i1, "") : t;
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
            ? i.push(aE(a))
            : null == a.link && t
              ? (function (e, t, n) {
                    let l = t.text.includes("["),
                        i = n && t.text.includes("](");
                    (!i || l) && (i || i9.test(t.text))
                        ? (function e(t, n, l) {
                              if (Array.isArray(n)) for (let i of n) e(t, i, l);
                              else
                                  "text" === n.type && "string" == typeof n.content
                                      ? t.push({ ...l, text: n.content })
                                      : ("link" === n.type || "url" === n.type) &&
                                        e(t, n.content, { ...l, link: n.target, rawURL: "url" === n.type });
                          })(e, aI(t.text, { inline: !0, allowLinks: n }), t)
                        : e.push(t);
                })(i, a, !l.has(e))
              : i.push(a);
    }
    let a = [];
    for (let { rawURL: e, ...t } of (function (e) {
        if (!e.some((e) => null != e.link)) return e;
        let t = (function (e) {
                let t = e.map((e) => e.text.split(i4).map(ax).join(" "));
                for (let n = 0; n < e.length;) {
                    let l = e[n];
                    if (null == l.link || !0 === l.rawURL) {
                        n++;
                        continue;
                    }
                    let i = n + 1;
                    for (; i < e.length && !0 !== e[i].rawURL && e[i].link === l.link;) i++;
                    (Array.from(t.slice(n, i).join("").matchAll(at)).some((e) => {
                        let [t] = e;
                        return ah(aj(t), !0) === l.link;
                    }) && (t[i - 1] += " "),
                        (n = i));
                }
                return t;
            })(e),
            n = 0,
            l = t.map((e) => (n += e.length)),
            i = [...e],
            a = 0;
        for (let e of t.join("").matchAll(at)) {
            let t = aj(e[0]);
            for (; l[a] <= e.index;) a++;
            let n = e.index + t.length,
                r = a;
            for (; l[r] < n;) r++;
            if (a === r) continue;
            let s = ah(t, !0);
            for (let e = a; e <= r; e++) (null == s || i[e].link !== s) && (i[e] = aE(i[e]));
        }
        return i;
    })(i))
        iZ(a, t.text, t);
    return a;
}
function ay(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 10 === n || 9 === n || 13 === n || 12 === n;
}
function aA(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 9 === n || 12 === n;
}
function aC(e) {
    let t = 0;
    for (; t < e.length && ay(e, t);) t++;
    return t;
}
function ak(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.length;
    for (; n > t && ay(e, n - 1);) n--;
    return n;
}
function aS(e, t) {
    let n = "",
        l = 0,
        i = t,
        a = -1;
    for (let t = e.indexOf("\n"); -1 !== t; t = e.indexOf("\n", t + 1)) {
        let r = a + 1,
            s = !0;
        for (let n = r; n < t; n++)
            if (!aA(e, n)) {
                s = !1;
                break;
            }
        (i > 0 && s ? ((n += e.slice(l, r)), i < 2 && (n += "\n"), (l = t + 1), i++) : (i = 1), (a = t));
    }
    return 0 === l ? e : n + e.slice(l);
}
function aL(e) {
    for (; e.length > 0;) {
        let t = e[e.length - 1],
            n = t.text.length;
        for (; n > 0 && aA(t.text, n - 1);) n--;
        if (n === t.text.length) break;
        if (0 === n) e.pop();
        else {
            t.text = t.text.slice(0, n);
            break;
        }
    }
}
function aR(e) {
    return e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e;
}
function aT(e) {
    let t = aS(aR(e), 0),
        n = aC(t),
        l = ak(t, n);
    return l > n ? [{ text: t.slice(n, l), ...ai }] : [];
}
function aM(e, t) {
    let n = Math.max(0, Math.floor(t)),
        l = aa.test(e.charAt(n - 1)) ? n - 1 : n;
    return aR(e.slice(0, l));
}
function aO(e) {
    return e.links[e.links.length - 1];
}
function aw(e) {
    return null != e ? { ...ai, link: e } : ai;
}
function aP(e) {
    let t = aO(e);
    return {
        bold: e.styles.bold > 0 || null != e.heading,
        italic: e.styles.italic > 0,
        underline: e.styles.underline > 0,
        ...(null != e.heading ? { heading: e.heading } : {}),
        ...(null != t ? { link: t } : {}),
    };
}
function aD(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ai,
        l = t.indexOf("\n");
    if (e.trailingNewlines > 0 && -1 !== l) {
        let n = !0;
        for (let e = 0; e < l; e++)
            if (!aA(t, e)) {
                n = !1;
                break;
            }
        n && aL(e.runs);
    }
    let i = e.trailingNewlines,
        a = aS(t, e.trailingNewlines);
    if ((0 === e.runs.length && (a = a.slice(aC(a))), 0 === a.length)) return;
    iZ(e.runs, a, n);
    let r = (function (e) {
        let t = 0;
        for (let n = e.length - 1; n >= 0; n--)
            if (10 === e.charCodeAt(n)) t++;
            else if (!aA(e, n)) break;
        return t;
    })(a);
    e.trailingNewlines = aC(a) === a.length ? Math.min(2, i + r) : r;
}
function aV(e) {
    if (0 === e.pendingBreaks) for (let t of e.held) aD(e, t.text, t);
    else
        e.runs.length > 0 &&
            (e.trailingNewlines > 0 && aL(e.runs),
            aD(e, "\n".repeat(Math.max(0, e.pendingBreaks - e.trailingNewlines)), aw(e.spacingLink)));
    ((e.held = []), (e.pendingBreaks = 0));
}
function aG(e, t) {
    let n = e.atBoundary ? aC(t) : 0,
        l = ak(t, n),
        i = aP(e);
    (l > n && (aV(e), aD(e, t.slice(n, l), i), (e.spacingLink = i.link), (e.atBoundary = e.afterMarker = !1)),
        l < t.length && e.held.push({ ...i, text: t.slice(l) }));
}
function a_(e, t) {
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
            class n extends iH.i {
                onclosetag(n, l) {
                    let i = this.startIndex,
                        a = e.markup.slice(n, l).toLowerCase();
                    ((t = void 0), super.onclosetag(n, l));
                    let r = a.replace(/\/+$/, "");
                    if (e.hiddenDepth > 0 || t === a || al.has(r) || au.has(r) || ad.has(r)) return;
                    let s = e.markup.indexOf(">", l);
                    -1 !== s && aG(e, e.markup.slice(i, s + 1));
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
                            let s = al.get(t);
                            if (e.hiddenDepth > 0 || s?.hidden === !0) return void e.hiddenDepth++;
                            if (null == s) {
                                let n,
                                    r,
                                    s = e.markup.slice(l.startIndex, l.endIndex + 1);
                                (!ar.test(t) ||
                                    ((as.test(s) || ao.test(s)) &&
                                        !au.has(t) &&
                                        !ad.has(t) &&
                                        ((i = l.endIndex),
                                        (e.closingTags ??= e.markup.includes("</")
                                            ? ((a = e.markup),
                                              (n = new Map()),
                                              (r = new iH.i(
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
                                    aG(e, s);
                                return;
                            }
                            (a_(e, s.breaks, !0),
                                null != s.style && e.styles[s.style]++,
                                !0 === s.link &&
                                    (e.links.push(ah(n.href) ?? (e.keepInvalidAnchors ? "" : void 0)),
                                    (e.spacingLink = void 0)),
                                null != s.heading && (e.heading = s.heading),
                                null != s.list && e.lists.push({ ordered: "ordered" === s.list, index: 0 }),
                                !0 === s.lineBreak &&
                                    (aV(e),
                                    aD(e, "\n", null != e.heading ? aP(e) : aw(aO(e))),
                                    (e.atBoundary = !0),
                                    (e.afterMarker = !1)),
                                !0 === s.item &&
                                    (aV(e),
                                    (r = e.lists[e.lists.length - 1]),
                                    aD(e, r?.ordered === !0 ? `${++r.index}. ` : "\u2022 "),
                                    e.itemDepth++,
                                    (e.afterMarker = !0)));
                        })(e, t, n, l),
                    onclosetag(n, l) {
                        (l || (t = n),
                            (function (e, t) {
                                if (e.ending) return;
                                if (e.hiddenDepth > 0) return e.hiddenDepth--;
                                let n = al.get(t);
                                null != n &&
                                    (a_(e, n.breaks),
                                    null != n.style && e.styles[n.style]--,
                                    !0 === n.link && (e.links.pop(), (e.spacingLink = void 0)),
                                    null != n.heading && (e.heading = void 0),
                                    null != n.list && e.lists.pop(),
                                    !0 === n.item && e.itemDepth--);
                            })(e, n));
                    },
                    oncomment() {
                        let t = e.markup.slice(l.startIndex, l.endIndex + 1);
                        0 === e.hiddenDepth && ac.test(t) && aG(e, t);
                    },
                    ontext(t) {
                        0 === e.hiddenDepth && aG(e, t);
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
            new iH.i({ ontext: (e) => aG(l, e) }, { decodeEntities: !0 }).end(n.replace(/</g, "&lt;")));
    for (var a = l.runs; a.length > 0;) {
        let e = a[a.length - 1];
        if (((e.text = e.text.slice(0, ak(e.text))), e.text.length > 0)) break;
        a.pop();
    }
    return a;
}
var aF = n(9578);
let aU = { h1: "heading-lg/semibold", h2: "heading-sm/semibold", h3: "heading-xs/semibold", h4: "heading-xs/semibold" },
    aY = { h1: 2, h2: 3, h3: 4, h4: 5 };
var aB = n(407355);
function az(e) {
    let { italic: t, underline: n } = e;
    return u()({ [aB.T]: t, [aB.V]: n });
}
function aH(e) {
    let { run: t, textVariant: n, boldTextVariant: l } = e;
    if (null != t.heading) return (0, r.jsx)(aX, { run: t });
    let { text: i, bold: a, italic: s, underline: o } = t;
    return a || s || o
        ? (0, r.jsx)(Y.E, {
              tag: a ? "strong" : "span",
              variant: a ? l : n,
              color: "none",
              className: az(t),
              children: s ? (0, r.jsx)("em", { children: i }) : i,
          })
        : i;
}
function aX(e) {
    let { run: t } = e,
        { text: n, italic: l, underline: i } = t;
    if (!l && !i) return n;
    let a = az(t);
    return l && i
        ? (0, r.jsx)("u", { className: a, children: (0, r.jsx)("em", { children: n }) })
        : l
          ? (0, r.jsx)("em", { className: a, children: n })
          : (0, r.jsx)("u", { className: a, children: n });
}
function aK(e) {
    let { segment: t, textVariant: n, boldTextVariant: l, onLinkPress: i } = e,
        a = t.runs.map((e, t) => (0, r.jsx)(aH, { run: e, textVariant: n, boldTextVariant: l }, t)),
        { link: s } = t;
    return null == s
        ? a
        : (0, r.jsx)(aF.A, {
              href: s,
              title: t.runs.map((e) => e.text).join(""),
              onClick: () => (i?.(s), !1),
              children: a,
          });
}
function a$(e) {
    let { group: t, ...n } = e,
        { heading: l, segments: i } = t,
        a = i.map((e, t) =>
            (0, r.jsx)(
                aK,
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
        : (0, r.jsx)(tQ.F, {
              forceLevel: n.headingLevels[l],
              children: (0, r.jsx)(tu.D, { variant: n.headingVariants[l], color: n.headingColor, children: a }),
          });
}
function aJ(e) {
    let {
            runs: t,
            textVariant: n = "body-md/normal",
            boldTextVariant: l = "body-md/semibold",
            headingVariants: i = aU,
            headingColor: a = "text-strong",
            headingLevels: o = aY,
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
    return u.map((e, t) => (0, r.jsx)(a$, { group: e, ...d }, t));
}
var aq = n(672572),
    aQ = n(94936);
function aZ() {
    let e = s.useRef(null),
        { game: t, isTwoColumn: n, trackAction: l } = W(),
        i = s.useMemo(
            () =>
                null != t.description
                    ? (function (e) {
                          let { maxLength: t = 1e4, parseTextLinks: n = !1 } =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              l = e.includes("<") || e.includes("&");
                          if (!n) return l ? aN(aW(aM(e, t)), !1) : aT(e);
                          let i = aM(e, t);
                          return aN(l ? aW(i, { keepInvalidAnchors: !0 }) : aT(i));
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
                        if (!i || null == n || !(0, nS.vq)(l, HTMLAnchorElement) || !l.matches(":focus-visible"))
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
    let g = o ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, r.jsxs)("div", {
        className: u()(aq.fi, aQ.k),
        onFocusCapture: m,
        children: [
            (0, r.jsx)(Y.E, {
                ref: e,
                className: aQ.Q,
                lineClamp: o ? void 0 : a,
                variant: "body-md/medium",
                children: (0, r.jsx)(aJ, { runs: i, textVariant: "body-md/medium", onLinkPress: h }),
            }),
            c && (0, r.jsx)(iz.Q, { onClick: d, text: g, "aria-expanded": o }),
        ],
    });
}
var a0 = n(40478),
    a1 = n(764948);
let a2 = s.memo(function (e) {
    let { analyticsLocations: t, selectTab: n, getScrollOffset: l } = e;
    return (0, r.jsxs)("div", {
        className: a1.V,
        children: [
            (0, r.jsx)(l0, {}),
            (0, r.jsxs)("div", {
                className: a0.h,
                children: [
                    (0, r.jsx)(nt, {}),
                    (0, r.jsxs)("div", { className: a0.X, children: [(0, r.jsx)(iB, {}), (0, r.jsx)(aZ, {})] }),
                ],
            }),
            (0, r.jsx)(lP, { analyticsLocations: t }),
            (0, r.jsx)(tA, {}),
            (0, r.jsx)(n0, { getScrollOffset: l }),
            (0, r.jsx)(nk, { selectTab: n }),
            (0, r.jsx)(iy, {}),
            (0, r.jsx)(iT, {}),
            (0, r.jsx)(io, {}),
            (0, r.jsx)(lR, {}),
        ],
    });
});
var a8 = n(164135);
let a4 = s.memo(function (e) {
    let { selectTab: t, getScrollOffset: n } = e;
    return (0, r.jsxs)("div", {
        className: a8.V,
        children: [
            (0, r.jsxs)("div", { className: a8.B, children: [(0, r.jsx)(l0, {}), (0, r.jsx)(aZ, {})] }),
            (0, r.jsx)(n0, { getScrollOffset: n }),
            (0, r.jsx)(nk, { selectTab: t }),
            (0, r.jsx)(iy, {}),
            (0, r.jsx)(iT, {}),
        ],
    });
});
var a3 = n(881698),
    a6 = n(928550),
    a9 = n(613412),
    a5 = n(414499),
    a7 = n(359549),
    re = n(139286),
    rt = n(873516);
function rn(e) {
    let { onCloudPlayClick: t, analyticsLocations: n } = e,
        { closeModal: l, trackAction: i } = W();
    (0, re.A)({
        name: a9.ImpressionNames.CLOUD_PLAY_CTA,
        type: a9.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let a = s.useCallback(() => {
        (i(k.Ws.CloudPlay), l(), t());
    }, [l, t, i]);
    return (0, r.jsx)(J.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, r.jsx)(K.$, {
            icon: a5.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function rl(e) {
    let { cloudPlayAppId: t, analyticsLocations: n } = e,
        { game: l } = W(),
        i = (0, a7.rC)({ applicationId: t, sourceApplicationId: l.id, analyticsLocations: n });
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: rt.k,
              children: (0, r.jsx)(rn, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var ri = n(768626);
function ra(e) {
    let { analyticsLocations: t } = e,
        { game: n } = W(),
        l = (0, a3.A)(n.linkedApplications)?.id,
        [i] = (0, a6.L_)(n.getOfficialApplicationId()),
        [a] = (0, a6.L_)(n.id),
        { showsStoreLinks: s } = iU(n);
    return (0, r.jsxs)("div", {
        className: u()(ri.pz, aq.fi, s ? ri.FJ : ri.dg),
        children: [
            null == l || i || a ? null : (0, r.jsx)(rl, { cloudPlayAppId: l, analyticsLocations: t }),
            (0, r.jsxs)("div", {
                className: a1.V,
                children: [
                    (0, r.jsx)(iB, {}),
                    (0, r.jsx)(lP, { analyticsLocations: t }),
                    (0, r.jsx)(tA, {}),
                    (0, r.jsx)(io, {}),
                    (0, r.jsx)(lR, {}),
                ],
            }),
        ],
    });
}
var rr = n(105865);
function rs(e) {
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
            (0, r.jsx)(t5, { ref: o }),
            (0, r.jsxs)(eZ.Ch, {
                ref: c,
                className: rr.XG,
                onScroll: m,
                children: [
                    (0, r.jsx)("div", { className: rr.xY, "aria-hidden": !0 }),
                    (0, r.jsx)(ni, {}),
                    (0, r.jsx)(tQ.F, {
                        children: t
                            ? (0, r.jsxs)("div", {
                                  className: rr.jC,
                                  children: [
                                      (0, r.jsx)(a4, { selectTab: n, getScrollOffset: d }),
                                      (0, r.jsx)(ra, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: rr.b9,
                                  children: (0, r.jsx)(a2, { analyticsLocations: a, selectTab: n, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var ro = n(953331),
    rc = n(787188);
function ru(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, r.jsx)(ro.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: ns.Ye.GAME_PROFILE_GAME_SHOP,
        className: rc.kL,
        scrollerClassName: rc.XG,
        promotionBannerClassName: rc.Rv,
    });
}
var rd = n(733391),
    rm = n(171616);
function rh(e) {
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
        { data: J } = (0, N.I)(t),
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
        { invite: ec, isMember: ed, isResolving: em } = (0, T.Ay)(J, B),
        { socialLayerStorefrontRecommendationsData: eh, socialLayerStorefrontRecommendationsLoading: eg } = (function (
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
        ex = s.useCallback(
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
                    let t = (0, E.JM)(e) ? (0, E.W6)(e, l) : (0, E.aJ)(e, H);
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
    let ef = s.useCallback((e) => {
            U(e.contentRect.width >= 800);
        }, []),
        ep = (0, d.w)(ef, [], { fireOnMount: !0 }),
        ej = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, g.s7)(), (0, A.M)()) : a();
            },
            [a],
        ),
        ev = s.useCallback(() => ej(!1), [ej]),
        { navigation: eb, selectionVersion: eI } = (function (e) {
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
        })(ex, c),
        { selectedTab: eE } = eb,
        eN = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                o = eu({ location: "GameProfileModal" });
            s.useEffect(() => {
                o && (0, rd.Xw)();
            }, [o]);
            let c = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && P.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                u = o && null != c,
                { storefront: d } = (0, rm.A)({ applicationId: u ? c : null }),
                [h, g] = s.useState({ storefrontId: d?.id, index: 0 }),
                [x, f] = s.useState(l);
            l !== x && (f(l), l !== S.COMMERCE && g({ storefrontId: d?.id, index: 0 }));
            let p = h.storefrontId === d?.id && h.index < (d?.pages.length ?? 0) ? h.index : 0,
                j = s.useCallback(
                    (e) => {
                        !u ||
                            e < 0 ||
                            e >= (d?.pages.length ?? 0) ||
                            (g({ storefrontId: d?.id, index: e }), i(S.COMMERCE));
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
        })({ game: J, navigation: eb }),
        { hasCommerceTab: ey, storefrontApplicationId: eA, storefront: eC, selectedStorefrontPageIndex: ek } = eN,
        eS = Object.values(eC?.promotions ?? {})[0] ?? null,
        eL = s.useMemo(() => {
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
                    isCommunityInviteResolving: em,
                    isMember: ed,
                    socialLayerStorefrontRecommendationsData: eh,
                    socialLayerStorefrontRecommendationsLoading: eg,
                    hasCommerceTab: ey,
                    storefrontPromotion: eS,
                    closeModal: ej,
                    navigateToGame: W,
                    trackAction: ex,
                    viewId: X,
                };
        }, [J, F, ea, ei, er, es, eo, ec, Q, Z, ee, em, ed, eh, eg, ey, eS, ej, W, ex, X]);
    return null == J
        ? null
        : (0, r.jsx)(p.f5, {
              value: K,
              children: (0, r.jsx)(h.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, r.jsx)(_.Provider, {
                      value: eL,
                      children: (0, r.jsx)("div", {
                          className: u()(z, aq.kL),
                          ref: ep,
                          children: (0, r.jsxs)(y.A, {
                              obscured: en,
                              onClose: ev,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: u()(aq.sx, { [aq.Tk]: eE !== S.COMMERCE }),
                                      children: (0, r.jsx)(eJ, { navigation: eb, socialLayerStorefront: eN }),
                                  }),
                                  eE === S.OVERVIEW &&
                                      (0, r.jsx)(rs, {
                                          selectTab: eb.selectTab,
                                          selectionVersion: eI,
                                          initialScrollOffset: o,
                                          isTwoColumn: F,
                                          analyticsLocations: K,
                                      }),
                                  eE === S.COMMUNITIES && (0, r.jsx)(tq, {}),
                                  eE === S.COMMERCE && (0, r.jsx)(ru, { applicationId: eA, selectedPageIndex: ek }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let rg = function (e) {
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
        rh,
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
