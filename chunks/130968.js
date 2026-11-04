n.d(t, { default: () => a7 });
var l,
    i,
    a,
    s = n(477900),
    r = n(582128),
    o = n.t(r, 2),
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
    V = n(820847),
    D = n(802494),
    G = n(287809);
let _ = r.createContext(void 0);
function W() {
    let e = r.useContext(_);
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
    J = n(663341),
    $ = n(866665),
    q = n(408278),
    Q = n(34188),
    Z = n(173936),
    ee = n(365199),
    et = n(789645),
    en = n(442433),
    el = n(50268),
    ei = n(44724),
    ea = n(676924),
    es = n(957565),
    er = n(945810);
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
        x = r.useRef(null),
        p = r.useRef(null),
        j = (0, el.A)({ id: u.id, label: em.intl.string(em.t.SHQGPj) }),
        v =
            ((t = u.id),
            (l = o.useContext(_)?.trackAction),
            (i = r.useCallback(() => {
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
                        return (n) => (0, s.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, l])),
            null == t
                ? null
                : (0, s.jsx)(X.Dr, {
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
                i = r.useMemo(
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
                c = r.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...o, ...a].filter((e) => e instanceof eb.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(ek.Vq).find((e) => t.has(e)) ?? null;
                }, [o, a, e]),
                u = r.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await eS((i) => {
                                let a = i.filter(eI.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, ey.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new eI.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new eI.Yy({ ...a, games: e });
                                }
                                var s = l;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let o = [...i];
                                return ((o[r] = s), o);
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
                d = r.useCallback(
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
                    (0, s.jsx)(
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
                        (0, s.jsx)(
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
        y = r.useCallback(() => {
            null != E && (0, ei.G)({ applicationId: E });
        }, [E]),
        A = r.useCallback(() => {
            null != E && (h(k.Ws.GameShop), (0, ei.default)({ applicationId: E }), d());
        }, [E, h, d]),
        C = r.useCallback(() => d(!1), [d]),
        L = r.useCallback(() => {
            h(k.Ws.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eL.BVt.GAME_PROFILE(u.id)}`;
            (0, es.C)(e, () => {
                (0, B.P0)({ text: em.intl.string(em.t["+5kSoW"]), variant: "success" });
            });
        }, [u.id, h]);
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            c === S.COMMERCE &&
                (0, s.jsx)(ea.A, {
                    location: f.A.GAME_PROFILE,
                    onNavigate: d,
                    variant: "overlay-secondary",
                    themeOverride: "dark",
                }),
            null != b &&
                c !== S.COMMERCE &&
                (0, s.jsx)(z.Y, {
                    targetElementRef: p,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(H.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, en.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.sidPSo),
                            onSelect: () => {},
                            children: (0, s.jsx)(X.rX, { children: b }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)("div", {
                            ...e,
                            ref: p,
                            children: (0, s.jsx)(K.$, {
                                icon: J.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: em.intl.string(em.t.sidPSo),
                            }),
                        }),
                }),
            N &&
                !I &&
                (0, s.jsx)($.m, {
                    text: em.intl.string(em.t.apFNLU),
                    children: (0, s.jsx)(q.K, {
                        icon: Q.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": em.intl.string(em.t.apFNLU),
                        onMouseDown: y,
                        onClick: A,
                    }),
                }),
            c !== S.COMMERCE &&
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
            (null != j || null != v) &&
                c !== S.COMMERCE &&
                (0, s.jsx)(z.Y, {
                    targetElementRef: x,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, s.jsx)(H.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, en.Z_)(), t());
                            },
                            "aria-label": em.intl.string(em.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(X.rX, { children: v }), (0, s.jsx)(X.rX, { children: j })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, s.jsx)($.m, {
                            text: em.intl.string(em.t["UKOtz+"]),
                            children: (0, s.jsx)("div", {
                                ...e,
                                ref: x,
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
let eT = { enabled: !1 },
    eM = (0, er.mj)({
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
    return (0, s.jsx)(U.V.Item, {
        id: S.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(S.COMMUNITIES),
        className: t,
        "aria-label": a,
        children: (0, s.jsx)(Y.E, { variant: "body-md/medium", color: "none", children: a }),
    });
}
function ew(e) {
    let { className: t, navigation: n } = e,
        { game: l } = W();
    return (l.communityGuildIds?.length ?? 0) < 3 ? null : (0, s.jsx)(eO, { className: t, navigation: n });
}
var eP = n(646514),
    eV = n(331322),
    eD = n(278416),
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
    return (0, s.jsxs)(eV.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, s.jsx)(eD.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: eP.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, s.jsxs)(eV.B, {
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
        h = r.useRef(null),
        { isHovered: g, setIsHovered: x, onMouseEnter: f, onMouseLeave: p, cancelTimers: j } = (0, eF.A)(100, 100),
        v = em.intl.string(em.t["J3/JCl"]),
        b = r.useCallback(
            (e) => {
                (j(), x(e));
            },
            [j, x],
        );
    return (0, s.jsx)(z.Y, {
        targetElementRef: h,
        shouldShow: g,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => b(!0),
        onRequestClose: () => b(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: p,
                children: (0, s.jsx)(H.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": v,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, s.jsx)(X.rX, {
                        children: m.map((e, t) => {
                            var n;
                            let l,
                                i = a === S.COMMERCE && t === u,
                                r =
                                    ((n = e.title),
                                    null != (l = (0, eU.A)(n?.trim())) && l.length > 0
                                        ? l
                                        : em.intl.formatToPlainString(em.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, s.jsx)(
                                X.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: r,
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
            let { isShown: r } = l,
                c = r ? e_.t : eW.a;
            return (0, s.jsx)(U.V.Item, {
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
                children: (0, s.jsx)(Y.E, {
                    variant: eB,
                    color: "none",
                    children: (0, s.jsx)(eH, {
                        label: n,
                        chevron: (0, s.jsx)(c, { size: "xs", color: "currentColor" }),
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
        { hasCommerceTab: r, storefront: o } = l;
    if (!r) return null;
    let c = em.intl.string(em.t.apFNLU);
    return (o?.pages.length ?? 0) > 1
        ? (0, s.jsx)(eX, { className: t, label: c, navigation: n, socialLayerStorefront: l })
        : (0, s.jsx)(U.V.Item, {
              id: S.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => a(S.COMMERCE),
              className: t,
              "aria-label": c,
              children: (0, s.jsx)(Y.E, {
                  variant: eB,
                  color: "none",
                  children: (0, s.jsx)(eH, { label: c, socialLayerStorefront: l }),
              }),
          });
}
var eJ = n(510954);
function e$(e) {
    let { navigation: t, socialLayerStorefront: n } = e,
        { game: l } = W(),
        { selectedTab: i, selectTab: a } = t,
        o = l.getIconURL(64),
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
                (0, s.jsxs)(U.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: a,
                    className: eJ.vR,
                    children: [
                        (0, s.jsx)(U.V.Item, {
                            id: S.OVERVIEW,
                            disableItemStyles: !0,
                            className: eJ.Mf,
                            "aria-label": m,
                            children: (0, s.jsx)(Y.E, { variant: "body-md/medium", color: "none", children: m }),
                        }),
                        (0, s.jsx)(ew, { className: eJ.Mf, navigation: t }),
                        (0, s.jsx)(eK, { className: eJ.Mf, navigation: t, socialLayerStorefront: n }),
                    ],
                }),
                (0, s.jsx)(eR, { className: eJ.HK, activeTab: i }),
            ],
        }),
    });
}
var eq = n(435558),
    eQ = n.n(eq),
    eZ = n(516521),
    e0 = n(448741),
    e1 = n(71393),
    e4 = n(309010),
    e2 = n(449054),
    e8 = n(60465),
    e3 = n(311043),
    e6 = n(620632),
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
        return e.map((e) => e9[e]?.guild).filter(ek.Vq);
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
                        e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: e });
                        try {
                            let t = await e6.Bo.get({
                                    url: eL.Rsh.GUILD_DISCOVERY,
                                    query: { guild_ids: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }),
                                n = t.body?.guilds ?? [];
                            e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: e, guilds: n });
                        } catch (t) {
                            throw (e5.h.dispatch({ type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: e }), t);
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
var ts = n(196765);
let tr = new Set(),
    to = (0, ts.v)((e) => ({
        gameId: null,
        excludedLocales: tr,
        toggleLocale: (t, n) => {
            e((e) => {
                let l = new Set(e.gameId === t ? e.excludedLocales : tr);
                return (l.has(n) ? l.delete(n) : l.add(n), { gameId: t, excludedLocales: l });
            });
        },
    }));
function tc(e) {
    return to((t) => (t.gameId === e ? t.excludedLocales : tr));
}
var tu = n(534514),
    td = n(714991),
    tm = n(486020),
    th = n(240248);
function tg(e) {
    let { guildName: t, isMember: n, onClick: l, size: i, fullWidth: a } = e;
    return (0, s.jsx)(K.$, {
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
    return (0, s.jsx)(tx.Ay, { className: u()(tf.qV, t) });
}
function tj(e) {
    let { presenceCount: t, memberCount: n } = e;
    return null == t && null == n
        ? null
        : (0, s.jsxs)("div", {
              className: tf.kL,
              children: [
                  null != t &&
                      (0, s.jsxs)("div", {
                          className: tf.U9,
                          children: [
                              (0, s.jsx)("i", { className: tf._o }),
                              (0, s.jsx)(Y.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.format(em.t["LC+S+m"], { membersOnline: t }),
                              }),
                          ],
                      }),
                  null != n &&
                      (0, s.jsxs)("div", {
                          className: tf.U9,
                          children: [
                              (0, s.jsx)("i", { className: tf.jk }),
                              (0, s.jsx)(Y.E, {
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
    return (0, s.jsxs)(tx.qT, {
        className: tv.uW,
        animationDelayMs: 300,
        children: [
            (0, s.jsx)(tx.Ay, { className: tv.dU, width: "30%" }),
            (0, s.jsx)(tx.qT, {
                className: tv.nV,
                children: (0, s.jsxs)("div", {
                    className: tv.hQ,
                    children: [(0, s.jsx)(tI, {}), (0, s.jsx)(tx.pv, {})],
                }),
            }),
        ],
    });
}
function tI() {
    return (0, s.jsxs)("div", {
        className: tv.To,
        children: [
            (0, s.jsx)(tx.Ay, { className: tv.QV }),
            (0, s.jsxs)("div", {
                className: tv.Yv,
                children: [
                    (0, s.jsx)(tx.Ay, { className: tv.Ag }),
                    (0, s.jsx)(tx.Ay, { className: tv.zl }),
                    (0, s.jsx)(tp, { className: tv.P2 }),
                ],
            }),
        ],
    });
}
function tE(e) {
    let { guild: t } = e,
        n = tm.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = r.useState(void 0),
        a = null != n && l !== n,
        o = r.useCallback(() => {
            i(n);
        }, [n]);
    return (0, s.jsxs)("div", {
        className: tv._C,
        children: [
            a && (0, s.jsx)(tx.Ay, { className: tv.EQ }),
            (0, s.jsx)("img", {
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
    return (0, s.jsxs)("div", {
        className: tv.To,
        children: [
            (0, s.jsx)(tE, { guild: t }),
            (0, s.jsxs)("div", {
                className: tv.yj,
                children: [
                    (0, s.jsxs)("div", {
                        className: tv.YS,
                        children: [
                            (0, s.jsx)(td.A, { guild: t, size: 16 }),
                            (0, s.jsx)(tu.D, {
                                className: tv.J5,
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                children: t.name,
                            }),
                        ],
                    }),
                    !(0, th.uJ)(t.description) &&
                        (0, s.jsx)(Y.E, {
                            className: tv.h_,
                            variant: "body-sm/medium",
                            color: "text-muted",
                            children: t.description,
                        }),
                    (0, s.jsx)(tj, { presenceCount: n, memberCount: l }),
                ],
            }),
        ],
    });
}
function ty(e) {
    let { guild: t, presenceCount: n, memberCount: l, button: i, className: a } = e;
    return (0, s.jsx)("div", {
        className: u()(tv.kL, a),
        children: (0, s.jsxs)("div", {
            className: tv.hQ,
            children: [(0, s.jsx)(tN, { guild: t, presenceCount: n, memberCount: l }), i],
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
        o = r.useCallback(() => {
            null != e &&
                (a(k.Ws.JoinServer),
                i(),
                e5.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: e.code, context: eL.BRT.APP }));
        }, [e, a, i]);
    return null == e || null == e.guild
        ? t && n
            ? (0, s.jsx)(tb, {})
            : null
        : (0, s.jsxs)("div", {
              className: tv.uW,
              children: [
                  (0, s.jsx)(tu.D, {
                      className: tv.Gf,
                      variant: "body-md/medium",
                      color: "text-subtle",
                      children: em.intl.string(em.t["U2N+ci"]),
                  }),
                  (0, s.jsx)(ty, {
                      guild: e.guild,
                      presenceCount: e.approximate_presence_count,
                      memberCount: e.approximate_member_count,
                      button: (0, s.jsx)(tg, { guildName: e.guild.name, isMember: l, onClick: o, fullWidth: !0 }),
                  }),
              ],
          });
}
var tC = n(320448),
    tk = n(152594);
function tS(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, s.jsxs)("div", {
        className: tk.kL,
        "aria-busy": !0,
        children: [
            (0, s.jsxs)("div", {
                className: tk.wR,
                children: [(0, s.jsx)(tx.Ay, { className: tk.Iz, width: n }), l && (0, s.jsx)(tx.pv, { size: "sm" })],
            }),
            t,
        ],
    });
}
function tL(e) {
    let { children: t, title: n, onClickViewAll: l, trailing: i } = e;
    return (0, s.jsxs)("div", {
        className: tk.kL,
        children: [
            (0, s.jsxs)("div", {
                className: tk.wR,
                children: [
                    (0, s.jsx)(tu.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, s.jsx)(K.$, {
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
let tT = (0, ts.v)((e) => ({
    layout: "grid",
    setLayout: (t) => {
        e({ layout: t });
    },
}));
var tM = n(876798),
    tO = n(481901),
    tw = n(916099),
    tP = n(461353);
function tV() {
    let { layout: e, setLayout: t } = tT(),
        n = em.intl.string(em.t.VGRZh7),
        l = em.intl.string(em.t["NJFr+g"]);
    return (0, s.jsxs)("div", {
        className: tP.k,
        role: "group",
        "aria-label": em.intl.string(em.t.mFMDSq),
        children: [
            (0, s.jsx)($.m, {
                text: n,
                asContainer: !0,
                children: (0, s.jsx)(tM.k, {
                    icon: tO.d,
                    pressed: e === tR.GRID,
                    size: "sm",
                    "aria-label": n,
                    onClick: () => t(tR.GRID),
                }),
            }),
            (0, s.jsx)($.m, {
                text: l,
                asContainer: !0,
                children: (0, s.jsx)(tM.k, {
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
var tD = n(37646),
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
            (i = r.useMemo(() => {
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
                options: r.useMemo(() => {
                    let e = a.filter((e) => !n.has(e)).length;
                    return i.map((t) => {
                        let { locale: l, label: i } = t,
                            a = !n.has(l);
                        return { locale: l, label: i, checked: a, disabled: a && 1 === e };
                    });
                }, [i, a, n]),
                toggleLocale: r.useCallback((e) => l(t, e), [l, t]),
            });
    return (0, s.jsx)(H.W, {
        "data-menu-migrated": !0,
        navId: "game-profile-communities-locale-filter",
        "aria-label": em.intl.string(em.t.OlOHDH),
        onClose: o,
        onSelect: void 0,
        children: u.map((e) => {
            let { locale: t, label: n, checked: l, disabled: i } = e;
            return (0, s.jsx)(X.sL, { id: t, label: n, checked: l, disabled: i, action: () => d(t) }, t);
        }),
    });
}
function tW(e) {
    let { locales: t } = e,
        n = r.useRef(null),
        l = em.intl.string(em.t.OlOHDH);
    return (0, s.jsx)("div", {
        className: tG.k,
        children: (0, s.jsx)(z.Y, {
            targetElementRef: n,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, s.jsx)(t_, { locales: t, onClose: n });
            },
            children: (e) =>
                (0, s.jsx)($.m, {
                    text: l,
                    asContainer: !0,
                    children: (0, s.jsx)(q.K, {
                        buttonRef: n,
                        icon: tD.U,
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
    return (0, s.jsx)(tF.D, { className: u()(tU.v, t), onClick: l, "aria-label": n, children: i });
}
var tB = n(759020);
function tz(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, s.jsxs)(tY, {
        className: tB.kL,
        onClick: a,
        ariaLabel: i,
        children: [
            (0, s.jsxs)("div", {
                className: tB.OA,
                children: [
                    (0, s.jsx)(tE, { guild: t }),
                    (0, s.jsxs)("div", {
                        className: tB.FS,
                        children: [
                            (0, s.jsxs)("div", {
                                className: tB.YS,
                                children: [
                                    (0, s.jsx)(td.A, { guild: t, size: 16 }),
                                    (0, s.jsx)(tu.D, {
                                        className: tB.J5,
                                        variant: "heading-sm/semibold",
                                        color: "text-default",
                                        children: t.name,
                                    }),
                                ],
                            }),
                            !(0, th.uJ)(t.description) &&
                                (0, s.jsx)(Y.E, {
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
            (0, s.jsx)("div", { className: tB.Rn, children: (0, s.jsx)(tj, { presenceCount: n, memberCount: l }) }),
        ],
    });
}
var tH = n(620387);
function tX(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsx)(tx.qT, { className: tH.s7, animationDelayMs: t, children: (0, s.jsx)(tI, {}) });
}
function tK(e) {
    let { animationDelayMs: t } = e;
    return (0, s.jsxs)(tx.qT, {
        className: tH.fv,
        animationDelayMs: t,
        children: [
            (0, s.jsx)(tx.Ay, { className: tH.VR }),
            (0, s.jsxs)("div", {
                className: tH.hG,
                children: [
                    (0, s.jsx)(tx.Ay, { className: tH.t_ }),
                    (0, s.jsx)(tx.Ay, { className: tH.Aj }),
                    (0, s.jsx)(tx.Ay, { className: tH.ax }),
                ],
            }),
            (0, s.jsx)(tx.Ay, { className: tH.Ah }),
        ],
    });
}
function tJ(e) {
    let { guild: t, presenceCount: n, memberCount: l, ariaLabel: i, onClick: a } = e;
    return (0, s.jsx)(tY, {
        className: tH.Nr,
        onClick: a,
        ariaLabel: i,
        children: (0, s.jsx)(tN, { guild: t, presenceCount: n, memberCount: l }),
    });
}
function t$(e) {
    let { guild: t, layout: n } = e,
        { game: l, closeModal: i, trackAction: a, viewId: o } = W(),
        c = (0, m.bG)([e1.A], () => e1.A.getGuild(t.id)?.joinedAt != null, [t.id]),
        u = r.useCallback(async () => {
            (a(k.Ws.CommunityClicked, { communityGuildId: t.id }), i());
            try {
                await e2.Z2(t.id, {}, { joinSource: eL.Q4z.GAME_PROFILE_COMMUNITIES, loadId: o }, [
                    f.A.GAME_PROFILE_COMMUNITIES,
                ]);
            } catch (e) {
                (0, e0._)(e);
                return;
            }
            let e = e4.Ay.getCurrentlySelectedChannelId(t.id);
            null != e &&
                e8.default.setGameProfilePendingReturn({
                    gameId: l.id,
                    channelId: e,
                    tab: S.COMMUNITIES,
                    source: k.GameProfileSources.CommunityPreviewReturn,
                });
        }, [t.id, a, i, o, l.id]),
        d = n === tR.LIST ? tz : tJ;
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
            locales: (n = r.useMemo(() => eQ().uniq((i ?? []).map((e) => e.preferredLocale).filter(ek.Vq)), [i])),
            filteredGuilds: r.useMemo(
                () => (i ?? []).filter((e) => null == e.preferredLocale || !t.has(e.preferredLocale)),
                [i, t],
            ),
            showLocaleFilter: n.length >= 2,
        }),
        m = o === tR.LIST,
        h = m ? tK : tX,
        g = a && (null == i || 0 === i.length);
    return (0, s.jsxs)(eZ.Ch, {
        className: tH.XG,
        children: [
            (0, s.jsx)("div", { className: tH.xY, "aria-hidden": !0 }),
            (0, s.jsx)("div", {
                className: tH.uW,
                children: (0, s.jsx)(tL, {
                    title: em.intl.string(em.t.r6bvTh),
                    trailing: (0, s.jsxs)("div", {
                        className: tH.AA,
                        children: [d && (0, s.jsx)(tW, { locales: c }), (0, s.jsx)(tV, {})],
                    }),
                    children: (0, s.jsx)("div", {
                        className: m ? tH.p_ : tH.Vg,
                        children: g
                            ? eQ()
                                  .range(8)
                                  .map((e) => (0, s.jsx)(h, { animationDelayMs: 150 * e }, e))
                            : u.map((e) => (0, s.jsx)(t$, { guild: e, layout: o }, e.id)),
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
    t4 = n(400492),
    t2 = n(541830),
    t8 = n(459746);
let t3 = "1552821538409939044";
var t6 = n(175213);
let t5 = n(892799);
function t9(e) {
    let { ref: t } = e,
        { game: n } = W(),
        l = (function (e) {
            let [t] = r.useState(() => Math.random());
            return r.useMemo(() => {
                let n = e.getBannerURL(1400);
                if (null != n) return n;
                let l = e.screenshotUrls?.length ?? 0;
                return 0 === l ? null : e.getScreenshotURL(Math.floor(t * l), 1400);
            }, [1400, e, t]);
        })(n);
    return (0, th.uJ)(l)
        ? null
        : (0, s.jsxs)("div", {
              ref: t,
              children: [
                  (0, s.jsx)("div", { className: t6.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, s.jsx)("div", { className: t6.N4 }),
              ],
          });
}
function t7() {
    let { game: e } = W(),
        t = (e.genres ?? []).map(t2.du).join(", ");
    return (0, th.uJ)(t) ? null : (0, s.jsx)(Y.E, { variant: "body-md/normal", color: "text-muted", children: t });
}
function ne(e) {
    let { rank: t } = e;
    return (0, s.jsxs)("div", {
        className: t6.Qc,
        children: [
            (0, s.jsx)(tZ.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, s.jsx)(Y.E, {
                variant: "body-xs/semibold",
                color: "none",
                children: em.intl.formatToPlainString(em.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function nt() {
    return (0, s.jsx)(nn, { className: t6._M, imageClassName: t6.xe });
}
function nn(e) {
    let { className: t, imageClassName: n } = e,
        { game: l } = W(),
        i = (0, s.jsx)(t8.Ay, { game: l, className: n, size: t8.wu.LARGE });
    return l.id !== t3
        ? (0, s.jsx)("div", { className: t, children: i })
        : (0, s.jsx)(nl, { className: t, children: i });
}
function nl(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = r.useContext(t1.x),
        i = (0, m.bG)([t0.Ay], () => t0.Ay.useReducedMotion),
        a = r.useRef({ count: 0, lastTime: 0 });
    return (0, s.jsx)(tF.D, {
        className: u()(n, t6.b3),
        "aria-label": em.intl.string(em.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = a.current,
                s = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((a.current = { count: s, lastTime: t }), 3 === s)) {
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
let ni = function () {
    let { game: e, isTwoColumn: t } = W(),
        n = e.name;
    return (0, s.jsxs)("div", {
        className: t6.ap,
        children: [
            t && (0, s.jsx)(nn, { className: t6.Tf, imageClassName: t6.w$ }),
            (0, s.jsxs)("div", {
                className: t6.lu,
                children: [
                    null != e.l30Rank && (0, s.jsx)(ne, { rank: e.l30Rank }),
                    (0, s.jsxs)("div", {
                        className: t6.$,
                        children: [
                            (0, s.jsx)(tu.D, { variant: "heading-xxl/semibold", children: n }),
                            e.id === t3 &&
                                (0, s.jsx)("img", {
                                    src: t5,
                                    className: t6.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, s.jsx)(t7, {}),
                ],
            }),
        ],
    });
};
var na = n(638495),
    ns = n(871123),
    nr = n(439303),
    no = n(317560),
    nc = n(869099),
    nu = n(151869),
    nd = n(761812);
function nm(e) {
    return e;
}
function nh(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: nd.B, children: t });
}
function ng(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        i = r.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    (e.preventDefault(), l(n, i));
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, s.jsx)(nu.A, {
              gap: "md",
              "aria-label": `${em.intl.string(em.t["kocF+6"])}`,
              items: t,
              getItemKey: nm,
              disableFocusRingScope: !0,
              renderItem: (e, t, l) =>
                  (0, s.jsx)(nh, {
                      children: (0, s.jsx)(nc.Ay, {
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
    return (0, s.jsx)(nv.A, {
        className: u()(nb.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, s.jsxs)("div", {
            className: nb.Qs,
            children: [
                null != a && (0, s.jsx)(a, { size: "xs", color: "currentColor", className: nb.Kk }),
                (0, s.jsx)(Y.E, { variant: "body-sm/normal", color: "currentColor", children: (0, nj.U)(t.text) }),
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
    let r = {
        Icon: (0, nf.LZ)(l?.icon ?? null),
        text: a.headerText,
        tooltip: null,
        endsAt: (0, nf.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, s.jsx)(nI, { className: nE.v, promotion: r });
}
let ny = [0, 1, 2, 3],
    nA = { placement: nr.Ye.GAME_PROFILE };
function nC() {
    return (0, s.jsx)(tS, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, s.jsx)(nx.A, { children: ny.map((e) => (0, s.jsx)(nh, { children: (0, s.jsx)(nc.yf, {}) }, e)) }),
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
        d = r.useCallback(() => {
            if (i?.application != null) {
                if (o) return void t(S.COMMERCE);
                (l(k.Ws.GameShop), c(), (0, ei.default)({ applicationId: i.application.id }));
            }
        }, [i, l, o, t, c]),
        m = r.useCallback(
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
                            (0, ns.rG)(e, n, t, a) && c();
                        },
                    }));
            },
            [l, c, u, i, n],
        );
    if (a) return (0, s.jsx)(nC, {});
    if (null == i) return null;
    let { skuIds: h } = i;
    return (0, s.jsxs)(tL, {
        title: em.intl.string(em.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, s.jsx)(nN, {}),
            (0, s.jsx)(nr.E9, {
                newValue: nA,
                children: (0, s.jsx)(ng, { skuIds: h, analyticsLocations: u, onCardClick: m }),
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
    nV = n(880405),
    nD = n(284009),
    nG = n.n(nD),
    n_ = n(574332),
    nW = n(976860);
async function nF(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    nG()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let o = e1.A.getGuild(n);
    if (o?.joinedAt == null)
        if (null == r || r.has(eL.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e2.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eL.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await n_.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
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
    return (0, s.jsxs)(tx.qT, {
        className: nU.s7,
        children: [
            (0, s.jsx)(tx.Ay, { className: nU.XN }),
            (0, s.jsxs)("div", {
                className: nU.UF,
                children: [(0, s.jsx)(tx.Ay, { className: nU.iX }), (0, s.jsx)(tx.Ay, { className: nU.jt })],
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
        [i, a] = r.useState(!1),
        o = r.useCallback(() => a(!0), []);
    return null == t.media
        ? null
        : (0, s.jsx)(nL.y, {
              readyState: i ? eL.Rv1.READY : eL.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, s.jsx)("img", {
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
function nJ(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        a = r.useCallback(
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
        : (0, s.jsx)(tF.D, {
              ...i,
              className: nU.Nr,
              onClick: a,
              children: (0, s.jsxs)(nR.M, {
                  className: nU.zI,
                  children: [
                      null != m.url &&
                          (0, s.jsx)(Y.E, {
                              variant: "body-xs/medium",
                              color: "text-link",
                              className: nU.Ow,
                              children: m.url,
                          }),
                      (0, s.jsxs)("div", {
                          className: nU._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, s.jsxs)("div", {
                                      className: nU.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, s.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: nU.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, s.jsx)(Y.E, {
                                              variant: "body-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, s.jsx)("div", {
                                      className: nU.ax,
                                      children: (0, s.jsx)(nK, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, s.jsx)(tu.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-strong",
                                      className: nU.DD,
                                      children: nB(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, s.jsxs)("div", {
                                      className: u()(nU.h_, nY.PT),
                                      children: [nB(t.body, n), (0, s.jsx)("div", { className: nU.fm })],
                                  }),
                              (0, s.jsxs)("div", {
                                  className: nU.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, s.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: nU.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, s.jsxs)(Y.E, {
                                          variant: "body-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, nw.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, s.jsxs)("div", {
                                              className: nU.a5,
                                              children: [
                                                  (0, s.jsx)(nT.n, { size: "xs", color: "currentColor" }),
                                                  (0, s.jsx)(Y.E, {
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
let n$ = r.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, s.jsxs)(nR.M, {
        className: nU.zI,
        children: [
            null != t.title &&
                (0, s.jsx)(tu.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: nU.DD,
                    children: nB(t.title, n),
                }),
            t.body.length > 0 &&
                (0, s.jsxs)("div", {
                    className: u()(nU.h_, nY.PT),
                    children: [nB(t.body, n), (0, s.jsx)("div", { className: nU.fm })],
                }),
            (0, s.jsxs)("div", {
                className: nU.ov,
                children: [
                    (0, s.jsx)(Y.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        children: (0, nw.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, s.jsxs)("div", {
                            className: nU.a5,
                            children: [
                                (0, s.jsx)(nT.n, { size: "xs", color: "currentColor" }),
                                (0, s.jsx)(Y.E, {
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
        a = r.useCallback(
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
    return (0, s.jsxs)(tF.D, {
        ...i,
        className: nU.Nr,
        onClick: a,
        children: [
            null != t.media &&
                null != u &&
                (0, s.jsx)("div", {
                    className: nU.Vl,
                    children: (0, s.jsx)(nK, { message: t, src: u, aspectRatio: o }),
                }),
            (0, s.jsx)(n$, { message: t, channelId: n }),
        ],
    });
}
function nQ(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        a = r.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let o = i.answers.slice(0, 3),
        c = i.answers.length - o.length;
    return (0, s.jsx)(tF.D, {
        ...l,
        className: nU.Nr,
        onClick: a,
        children: (0, s.jsxs)(nR.M, {
            className: nU.zI,
            children: [
                (0, s.jsx)(tu.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    className: nU.MH,
                    children: i.question.text,
                }),
                (0, s.jsxs)("div", {
                    className: nU.xd,
                    children: [
                        o.map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: nU.Nf,
                                    children: (0, s.jsx)(Y.E, {
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
                            (0, s.jsx)(Y.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                className: nU.PF,
                                children: em.intl.format(em.t["mv/nIa"], { count: c }),
                            }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: nU.ov,
                    children: (0, s.jsx)(Y.E, {
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
        ? (0, s.jsx)(nQ, { ...e })
        : null != e.message.embedSource
          ? (0, s.jsx)(nJ, { ...e })
          : (0, s.jsx)(nq, { ...e });
}
let n0 = r.memo(function (e) {
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
                (0, r.useEffect)(() => {
                    null == e || n || L.A.isAnnouncementsFetching(e) || (0, nV.Rf)(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(u),
        j = r.useCallback(() => {
            let e = i?.guild?.id ?? h;
            null != e &&
                null != g &&
                (c(k.Ws.Announcements),
                e8.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                o(),
                nF({ invite: i, guildId: e, channelId: g, analyticsLocationStack: n }));
        }, [c, o, t, i, h, g, n, u]),
        v = r.useCallback(
            (e) => {
                let l = i?.guild?.id ?? h;
                null != l &&
                    null != g &&
                    (c(k.Ws.AnnouncementsItem),
                    e8.default.setGameProfilePendingReturn({ gameId: u, channelId: g, initialScrollOffset: t() }),
                    o(),
                    nF({ invite: i, guildId: l, channelId: g, messageId: e, analyticsLocationStack: n }));
            },
            [c, o, t, i, h, g, n, u],
        ),
        b = null != g && d.length > 0;
    return (!f || x) && a
        ? (0, s.jsx)(tS, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, s.jsx)(nx.A, {
                  gap: 16,
                  children: eQ()
                      .range(3)
                      .map((e) => (0, s.jsx)(nH, {}, e)),
              }),
          })
        : b
          ? (0, s.jsx)(tL, {
                title: em.intl.string(em.t.B0BV3Y),
                onClickViewAll: j,
                children: (0, s.jsx)(nu.A, {
                    gap: 16,
                    items: d,
                    getItemKey: nz,
                    itemClassName: nU.hu,
                    renderItem: (e, t) =>
                        (0, s.jsx)(nZ, { message: e, channelId: g, onCardClick: v, listItemProps: t }, e.id),
                }),
            })
          : null;
});
var n1 = n(155718),
    n4 = n(505779);
(n(323874), n(14289), n(35956));
var n2 = n(989441);
let n8 = {
        appStore: {
            websiteCategories: [n4.V1.IPHONE, n4.V1.IPAD],
            websiteHostnames: n4.FU,
            distributor: n2.D.APPLE_APP_STORE,
            buildUrl: (e) => `https://${n4.FU["0"]}/app/id${e}`,
        },
        googlePlay: {
            websiteCategories: [n4.V1.ANDROID],
            websiteHostnames: n4.SX,
            distributor: n2.D.GOOGLE_PLAY,
            buildUrl: (e) => `https://${n4.SX["0"]}/store/apps/details?id=${encodeURIComponent(e)}`,
        },
    },
    n3 = new Set(
        Object.values(n8).flatMap((e) => {
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
var n5 = n(808380);
let n9 = [n5.Y.DESKTOP, "mobile", n5.Y.XBOX, n5.Y.PLAYSTATION, n5.Y.NINTENDO, n5.Y.ROBLOX];
var n7 = n(28863),
    le = n(975807),
    lt = n(194362);
function ln() {
    let { game: e, trackAction: t } = W(),
        n = r.useCallback(async () => {
            t(k.Ws.ClaimGame);
            let e = await (0, lt.a)(eL.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, le.A)(e);
        }, [t]),
        l = r.useCallback((e) => (0, s.jsx)(n7.Anchor, { onClick: n, children: e }), [n]);
    return e.linkedApplications?.some((e) => e.type === n1.Mh.OFFICIAL)
        ? null
        : (0, s.jsx)(Y.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              children: em.intl.format(em.t.KAjfKl, { claimLink: l }),
          });
}
var ll = n(998445),
    li = n(274997),
    la = n(80500),
    ls = n(319745),
    lr = n(488225),
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
                case n4.V1.OFFICIAL:
                    return {
                        icon: (0, s.jsx)(ll.GlobeEarthIcon, { ...t }),
                        action: k.Ws.WebsiteLink,
                        title: em.intl.string(em.t.fOUKvg),
                    };
                case n4.V1.TWITTER:
                    return { icon: (0, s.jsx)(li.p, { ...t }), action: k.Ws.XLink, title: em.intl.string(em.t.INic4y) };
                case n4.V1.YOUTUBE:
                    return {
                        action: k.Ws.YouTubeLink,
                        icon: (0, s.jsx)(la.C, { ...t }),
                        title: em.intl.string(em.t.lNmxbE),
                    };
                case n4.V1.FACEBOOK:
                    return {
                        icon: (0, s.jsx)(ls.Z, { ...t }),
                        action: k.Ws.FacebookLink,
                        title: em.intl.string(em.t.FjyREK),
                    };
                case n4.V1.INSTAGRAM:
                    return {
                        icon: (0, s.jsx)(lr.L, { ...t }),
                        action: k.Ws.InstagramLink,
                        title: em.intl.string(em.t["cgR+IK"]),
                    };
                case n4.V1.BLUESKY:
                    return {
                        icon: (0, s.jsx)(lo.a, { ...t }),
                        action: k.Ws.BlueskyLink,
                        title: em.intl.string(em.t["D/PHq5"]),
                    };
                case n4.V1.REDDIT:
                    return {
                        icon: (0, s.jsx)(lc.T, { ...t }),
                        action: k.Ws.RedditLink,
                        title: em.intl.string(em.t["Hgb+fc"]),
                    };
                case n4.V1.TWITCH:
                    return {
                        icon: (0, s.jsx)(lu.a, { ...t }),
                        action: k.Ws.TwitchLink,
                        title: em.intl.string(em.t["7xtz4G"]),
                    };
                case n4.V1.ITCH:
                    return {
                        icon: (0, s.jsx)(ld.x, { ...t }),
                        action: k.Ws.ItchLink,
                        title: em.intl.string(em.t.nOrtg9),
                    };
                case n4.V1.WIKIA:
                    return {
                        icon: (0, s.jsx)(lm.g, { ...t }),
                        action: k.Ws.FandomLink,
                        title: em.intl.string(em.t.xDtQAQ),
                    };
                case n4.V1.IPHONE:
                case n4.V1.IPAD:
                    return {
                        icon: (0, s.jsx)(lh.z, { ...t }),
                        action: k.Ws.AppStoreLink,
                        title: em.intl.string(em.t.LVy7Ug),
                    };
                case n4.V1.ANDROID:
                    return {
                        icon: (0, s.jsx)(lg.O, { ...t }),
                        action: k.Ws.GooglePlayStoreLink,
                        title: em.intl.string(em.t.V6rllO),
                    };
                case n4.V1.ROBLOX:
                    return {
                        icon: (0, s.jsx)(lx.H, { ...t }),
                        action: k.Ws.RobloxStoreLink,
                        title: em.intl.string(em.t["pJ+P+h"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, lj),
        c = r.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, s.jsx)($.m, {
        text: o,
        children: (0, s.jsx)(tF.D, { onClick: c, className: lp.y, title: o, children: a }),
    });
}
var lb = n(31300),
    lI = n(646270),
    lE = n(802516),
    lN = n(22363),
    ly = n(418524);
let lA = {
    [n5.Y.DESKTOP]: lb.k,
    mobile: lI.u,
    [n5.Y.XBOX]: lE.Y,
    [n5.Y.PLAYSTATION]: lN.X,
    [n5.Y.NINTENDO]: ly.M,
    [n5.Y.ROBLOX]: lx.H,
};
function lC(e) {
    let { platform: t } = e,
        n = (function (e) {
            switch (e) {
                case n5.Y.DESKTOP:
                    return em.intl.string(em.t.KT6uCJ);
                case "mobile":
                    return em.intl.string(em.t["0DvssQ"]);
                case n5.Y.XBOX:
                    return em.intl.string(em.t.DDWUJp);
                case n5.Y.PLAYSTATION:
                    return em.intl.string(em.t.fzMz2s);
                case n5.Y.NINTENDO:
                    return em.intl.string(em.t.AMW8je);
                case n5.Y.ROBLOX:
                    return em.intl.string(em.t.MPURhG);
            }
        })(t),
        l = lA[t];
    return (0, s.jsx)(
        $.m,
        {
            text: n,
            ariaHidden: !0,
            children: (0, s.jsx)("span", { role: "img", "aria-label": n, children: (0, s.jsx)(l, { size: "xs" }) }),
        },
        t,
    );
}
var lk = n(424994),
    lS = n(623828);
function lL() {
    return (0, s.jsx)(Y.E, { variant: "body-sm/normal", color: "text-subtle", children: em.intl.string(em.t.GruYxV) });
}
let lR = function () {
    let { game: e } = W(),
        t = r.useMemo(() => e.genres.map(t2.du).join(", "), [e]),
        n = e.getCompanyByRole(n1.wk.PUBLISHER),
        l = e.getCompanyByRole(n1.wk.DEVELOPER),
        i = n.map((e) => e.name).join(", "),
        a = l.map((e) => e.name).join(", "),
        o = e.firstReleaseDate,
        c = r.useMemo(() => {
            let t = new Set(e.platforms);
            (t.has(n5.Y.MACOS) || t.has(n5.Y.LINUX)) && t.add(n5.Y.DESKTOP);
            let n = t.has(n5.Y.IOS) || t.has(n5.Y.ANDROID);
            return n9.filter((e) => ("mobile" === e ? n : t.has(e)));
        }, [e.platforms]),
        u = r.useMemo(() => {
            let t = e.websites.filter((e) => {
                    let { category: t } = e;
                    return n4.pF.includes(t) && !n3.has(t);
                }),
                n = Object.values(n8)
                    .map((t) => n6(e, t))
                    .filter(ek.Vq);
            return t.sort((e, t) => n4.pF.indexOf(e.category) - n4.pF.indexOf(t.category)).concat(n);
        }, [e]),
        d = !(0, th.uJ)(t),
        m = !(0, th.uJ)(i),
        h = !(0, th.uJ)(a),
        g = !(0, th.uJ)(o),
        x = c.length > 0,
        f = u.length > 0 && !u.every((e) => (0, th.uJ)(e.url));
    return (0, s.jsxs)("div", {
        className: lS.uW,
        children: [
            (0, s.jsx)("div", {
                className: lS.Gf,
                children: (0, s.jsx)(tu.D, {
                    variant: "body-md/medium",
                    color: "text-subtle",
                    children: em.intl.string(em.t["7OjmmH"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: lS.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, s.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== e.genres.length ? em.intl.string(em.t.pDgwYB) : em.intl.string(em.t.mjFKqn),
                            }),
                            d
                                ? (0, s.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lS.Gu,
                                      children: t,
                                  })
                                : (0, s.jsx)(lL, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, s.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== n.length ? em.intl.string(em.t.Hc7Enk) : em.intl.string(em.t["4Byy/G"]),
                            }),
                            m
                                ? (0, s.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lS.Gu,
                                      children: i,
                                  })
                                : (0, s.jsx)(lL, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, s.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: 1 !== l.length ? em.intl.string(em.t.KATEJB) : em.intl.string(em.t.na3PT0),
                            }),
                            h
                                ? (0, s.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lS.Gu,
                                      children: a,
                                  })
                                : (0, s.jsx)(lL, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, s.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t.H3mPDT),
                            }),
                            g
                                ? (0, s.jsx)(Y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      className: lS.Gu,
                                      children: nw.i$(new Date(o), "LL"),
                                  })
                                : (0, s.jsx)(lL, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, s.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: c.length > 1 ? em.intl.string(em.t.PNqxNe) : em.intl.string(em.t["UxAag+"]),
                            }),
                            x
                                ? (0, s.jsx)("div", {
                                      className: lS.Gu,
                                      children: c.map((e) => (0, s.jsx)(lC, { platform: e }, e)),
                                  })
                                : (0, s.jsx)(lL, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, s.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["Oj3o1/"]),
                            }),
                            f
                                ? (0, s.jsx)("div", {
                                      className: lS.Gu,
                                      children: u.map((e) => (0, s.jsx)(lv, { website: e }, e.url)),
                                  })
                                : (0, s.jsx)(lL, {}),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lS.J1,
                        children: [
                            (0, s.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: em.intl.string(em.t["BwQ+9e"]),
                            }),
                            (0, s.jsx)(Y.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                className: lS.Gu,
                                children: em.intl.format(em.t.XPFZVl, { igdbLink: lk.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: lS.OQ, children: (0, s.jsx)(ln, {}) }),
        ],
    });
};
var lT = n(141628),
    lM = n(289363),
    lO = n(793919);
function lw() {
    return (0, s.jsxs)("div", {
        "aria-hidden": !0,
        className: lO.uW,
        children: [
            (0, s.jsx)(tx.Ay, { className: lO.dU, width: "30%" }),
            (0, s.jsxs)(tx.qT, {
                className: lO.nV,
                children: [
                    (0, s.jsx)("div", { className: lO.sB, children: (0, s.jsx)(lM.default, { isLoading: !0 }) }),
                    (0, s.jsxs)("div", {
                        className: lO.hQ,
                        children: [
                            (0, s.jsxs)("div", {
                                className: lO.Yv,
                                children: [(0, s.jsx)(tx.Ay, { width: "55%" }), (0, s.jsx)(tx.Ay, { width: "85%" })],
                            }),
                            (0, s.jsx)(tx.pv, {}),
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
        g = r.useCallback(() => {
            (n(k.Ws.LinkAccount), o({ analyticsLocations: t }));
        }, [n, o, t]);
    return !u || d || null == h
        ? null
        : null == c || (a && !l)
          ? (0, s.jsx)(lw, {})
          : !a || i
            ? null
            : (0, s.jsxs)("div", {
                  className: lO.uW,
                  children: [
                      (0, s.jsx)(tu.D, {
                          className: lO.Gf,
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: em.intl.string(em.t["VDAhr+"]),
                      }),
                      (0, s.jsxs)("div", {
                          className: lO.kL,
                          children: [
                              (0, s.jsx)("div", {
                                  className: lO.sB,
                                  children: (0, s.jsx)(lM.default, { application: c }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: lO.hQ,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: lO.FS,
                                          children: [
                                              (0, s.jsx)(tu.D, {
                                                  variant: "heading-sm/semibold",
                                                  color: "text-default",
                                                  children: em.intl.formatToPlainString(em.t.hUbQT2, {
                                                      gameName: c.name,
                                                  }),
                                              }),
                                              (0, s.jsx)(Y.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-muted",
                                                  children: em.intl.string(em.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, s.jsx)(K.$, {
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
var lV = n(80687),
    lD = n(248643),
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
let lJ = r.memo(function (e) {
    let { url: t, size: n, alt: l, className: i, ...a } = e,
        { dimensions: o, recordDimensions: c } = (function () {
            let [e, t] = r.useState(lH);
            return {
                dimensions: e,
                recordDimensions: r.useCallback(
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
        h = r.useCallback(
            (e) => {
                null != e &&
                    0 !== e.naturalWidth &&
                    0 !== e.naturalHeight &&
                    c(t, { width: e.naturalWidth, height: e.naturalHeight });
            },
            [t, c],
        ),
        g = r.useCallback((e) => h(e.currentTarget), [h]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            m && (0, s.jsx)("img", { ...a, src: lK(t, 106), className: lX.cL, alt: "", draggable: !1 }),
            (0, s.jsx)("img", {
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
var l$ = n(140128);
function lq(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
let lQ = r.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: i, onSelect: a, gameName: o, listItemProps: c } = e,
            d = r.useCallback(() => a(n), [a, n]),
            m = c?.tabIndex;
        return (0, s.jsx)(tF.D, {
            ...c,
            className: u()(l$.JS, l && l$.Y4),
            onClick: d,
            children: (0, s.jsxs)("div", {
                className: l$.ub,
                children: [
                    (0, s.jsx)("div", {
                        className: l$.kV,
                        children: (0, s.jsx)(lJ, {
                            url: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                            size: 106,
                            className: l$.xn,
                            alt: em.intl.formatToPlainString(em.t.COYYrn, { game: o }),
                            loading: "lazy",
                            decoding: "async",
                            draggable: !1,
                        }),
                    }),
                    "VIDEO" === t.type &&
                        (0, s.jsx)("div", {
                            className: l$.UZ,
                            children: (0, s.jsx)(lV.D, { playing: l && i, size: "sm", tabIndex: m }),
                        }),
                ],
            }),
        });
    }),
    lZ = r.memo(function (e) {
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
            d = r.useRef(null);
        return (
            (0, lF.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    !n && (0, s.jsx)("canvas", { ref: d, className: l$.HW, "aria-hidden": "true" }),
                    (0, s.jsx)("div", {
                        className: l$.tN,
                        children: (0, s.jsx)(lD.A, {
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
                            mediaPlayerClassName: l$.T9,
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
        [n, l] = r.useState(0),
        [i, a] = r.useState(null),
        [o, c] = r.useState(e.screenshotUrls),
        d = r.useRef(null),
        h = r.useRef(null),
        g = (0, m.bG)([t0.Ay], () => t0.Ay.useReducedMotion),
        { obscured: x } = (0, lW.I3)();
    o !== e.screenshotUrls && (c(e.screenshotUrls), l(0));
    let f = r.useMemo(() => {
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
        p = r.useMemo(() => f.map((e, t) => ({ item: e, index: t })), [f]),
        j = f.length > 0 ? Math.min(n, f.length - 1) : 0,
        v = f[j],
        b = v?.type === "VIDEO",
        I = r.useCallback(
            (e) => {
                let t = f[j],
                    n = f[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? a(t.url) : a(null), l(e));
            },
            [f, j],
        ),
        [E, N] = r.useState(!1),
        y = r.useRef(null),
        A = r.useCallback(() => {
            t(b ? k.Ws.ClickTrailer : k.Ws.ClickImage);
            let e = d.current,
                n = y.current,
                i = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            n?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === j;
                    return { ...e, autoPlay: !!n && i, autoMute: !n || a, initialTimeSec: n ? s : void 0, videoRef: h };
                }
                return e;
            });
            (0, lG.R)({
                items: r,
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
        C = r.useCallback(() => N(!0), []),
        S = r.useCallback(() => N(!1), []),
        L = r.useCallback(() => a(null), []),
        R = r.useCallback(
            (e) => {
                e && A();
            },
            [A],
        );
    return 0 === f.length
        ? null
        : (0, s.jsxs)("div", {
              className: l$.kL,
              children: [
                  b
                      ? (0, s.jsx)("div", {
                            className: l$.ND,
                            children: (0, s.jsx)(
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
                      : (0, s.jsxs)("div", {
                            className: l$.wp,
                            children: [
                                null != i &&
                                    !g &&
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: l$.Jy,
                                            onAnimationEnd: L,
                                            children: (0, s.jsx)(lJ, { url: i, size: 900, className: l$.c8, alt: "" }),
                                        },
                                        i,
                                    ),
                                (0, s.jsx)("div", { className: l$.QN }),
                                (0, s.jsx)(tF.D, {
                                    className: l$.gv,
                                    onClick: A,
                                    children: (0, s.jsx)("div", {
                                        className: l$.cs,
                                        children: (0, s.jsx)(
                                            lJ,
                                            {
                                                url: v.url,
                                                size: 900,
                                                className: u()(l$.c8, l$.Jf),
                                                alt: em.intl.formatToPlainString(em.t.COYYrn, { game: e.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  (0, s.jsx)(nu.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      items: p,
                      getItemKey: lq,
                      renderItem: (t, n) => {
                          let { item: l, index: i } = t;
                          return (0, s.jsx)(
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
    l4 = n(223273);
function l2(e, t, n) {
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
var l8 = n(792216);
let l3 = {
    appStore: { getTitle: () => em.intl.string(em.t.LVy7Ug), action: k.Ws.AppStoreReviews },
    googlePlay: { getTitle: () => em.intl.string(em.t.V6rllO), action: k.Ws.GooglePlayReviews },
};
function l6(e) {
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
var l5 =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    l9 = n(778591);
function l7(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        a = i * l;
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
        c = r.useCallback(() => {
            (n(a), l(o));
        }, [a, l, n, o]);
    return (0, s.jsx)(tF.D, {
        onClick: c,
        className: ie.nf,
        role: "link",
        "aria-label": t.accessibilityLabel,
        children: (0, s.jsxs)("div", {
            className: ie.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: ie.hU,
                    children: [
                        (0, s.jsx)(i, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(tu.D, { variant: "heading-xs/medium", color: "text-strong", children: t.title }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: ie.nK,
                    children: [
                        (0, s.jsx)(Y.E, {
                            variant: "body-xs/medium",
                            color: "text-strong",
                            className: ie.yX,
                            children: t.ratingText,
                        }),
                        (0, s.jsx)(Y.E, {
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
        u = l2(l, i, "recent" === a),
        d = l6(u),
        m = r.useCallback(() => {
            (o(k.Ws.SteamReviews), c(t));
        }, [c, o, t]);
    return (0, s.jsx)(tF.D, {
        onClick: m,
        className: ie.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.YNC5Di),
        children: (0, s.jsxs)("div", {
            className: ie.tF,
            children: [
                (0, s.jsxs)("div", {
                    className: ie.hU,
                    children: [
                        (0, s.jsx)(l1.N, { size: "sm", color: eP.A.colors.ICON_STRONG.css }),
                        (0, s.jsx)(tu.D, { variant: "heading-xs/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, s.jsx)(
                    $.m,
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
                        children: (0, s.jsxs)("div", {
                            className: ie.nK,
                            children: [
                                (0, s.jsx)(Y.E, {
                                    variant: "body-xs/medium",
                                    color: d,
                                    className: ie.yX,
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
                                    (0, s.jsx)(Y.E, {
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
        h = r.useCallback(() => {
            (l(k.Ws.OpenCriticReviews), m(t));
        }, [m, l, t]);
    return (0, s.jsx)(tF.D, {
        onClick: h,
        className: ie.nf,
        role: "link",
        "aria-label": em.intl.string(em.t.aLNBAw),
        children: (0, s.jsxs)("div", {
            className: ie.Ur,
            children: [
                (0, s.jsx)(tu.D, {
                    variant: "heading-xs/medium",
                    color: "text-strong",
                    children: em.intl.string(em.t["UxvER+"]),
                }),
                (0, s.jsxs)("div", {
                    className: ie.WA,
                    children: [
                        null != o ? (0, s.jsx)(is, { tier: o }) : null,
                        null != o && c > 0 && u > 0 ? (0, s.jsx)(ir, { rating: c, tier: o }) : null,
                        d
                            ? (0, s.jsx)(Y.E, {
                                  variant: "body-xs/medium",
                                  color: l6(l4.vI.NO_USER_REVIEWS),
                                  children: em.intl.string(em.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function is(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case l5.MIGHTY:
                    return em.intl.string(em.t.aZej2g);
                case l5.STRONG:
                    return em.intl.string(em.t.MLxnSg);
                case l5.FAIR:
                    return em.intl.string(em.t["3f19KA"]);
                case l5.WEAK:
                    return em.intl.string(em.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case l5.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case l5.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case l5.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case l5.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, s.jsx)(
        $.m,
        {
            text: n,
            children: (0, s.jsx)("div", {
                className: ie.TE,
                children: (0, s.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function ir(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case l5.MIGHTY:
                    t = "#fc430a";
                    break;
                case l5.STRONG:
                    t = "#9e00b4";
                    break;
                case l5.FAIR:
                    t = "#4aa1ce";
                    break;
                case l5.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, s.jsx)(
        $.m,
        {
            text: em.intl.string(em.t.Ub4YR1),
            children: (0, s.jsxs)("div", {
                className: ie.TE,
                style: { backgroundColor: i },
                children: [
                    (0, s.jsx)(l7, { rating: t, strokeColor: l }),
                    (0, s.jsx)(Y.E, {
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
        t = (0, l9.I)(e.id),
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
        } = r.useMemo(() => {
            let n = e.reviews?.steam,
                l = e.steamReleaseStatus !== l8.Y.RETIRED_ABANDONED && null != t,
                i = l2(n?.recentRating, n?.recentRatingCount, !0),
                a = l && i !== l4.vI.NO_USER_REVIEWS,
                s =
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
                showLocalizedReview: s,
                primarySteamRating: s ? n?.localizedRating : n?.rating,
                primarySteamRatingCount: s ? n?.localizedRatingCount : n?.ratingCount,
                primarySteamTitleKey: s ? em.t["aWb+V4"] : em.t["8e4LiB"],
                mobileStoreReviews: Object.entries(l3).flatMap((t) => {
                    var n;
                    let l,
                        i,
                        [a, s] = t,
                        r = e.reviews?.[a],
                        o = r?.rating,
                        c = r?.ratingCount;
                    if (null == o || null == c) return [];
                    let u = n6(e, n8[a]);
                    return null != u
                        ? [
                              ((n = u.url),
                              (l = s.getTitle()),
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
                                  action: s.action,
                              }),
                          ]
                        : [];
                }),
            };
        }, [e, t]),
        h =
            (e.steamReleaseStatus !== l8.Y.RETIRED_ABANDONED || m.length > 0) &&
            e.reviews?.opencritic != null &&
            null != e.opencriticUrl;
    return i || h || 0 !== m.length
        ? (0, s.jsxs)("div", {
              className: ie.uW,
              children: [
                  (0, s.jsx)("div", {
                      className: ie.Gf,
                      children: (0, s.jsx)(tu.D, {
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: em.intl.string(em.t.GaAQXP),
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: ie.kL,
                      children: [
                          a && null != t
                              ? (0, s.jsx)("div", {
                                    className: ie.WH,
                                    children: (0, s.jsx)(ii, {
                                        url: t,
                                        title: em.intl.string(em.t.MQGNsN),
                                        rating: l?.recentRating,
                                        ratingCount: l?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          i && null != t
                              ? (0, s.jsx)("div", {
                                    className: ie.WH,
                                    children: (0, s.jsx)(ii, {
                                        url: t,
                                        title: em.intl.string(d),
                                        rating: c,
                                        ratingCount: u,
                                        tooltipVariant: o ? "localized" : "all",
                                    }),
                                })
                              : null,
                          m.map((e) =>
                              (0, s.jsx)("div", { className: ie.WH, children: (0, s.jsx)(il, { review: e }) }, e.key),
                          ),
                          h && null != n
                              ? (0, s.jsx)("div", { className: ie.WH, children: (0, s.jsx)(ia, { url: n }) })
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
        { flattenProductVariants: a, prioritizedCurrency: o, standalonePreview: c } = r.useContext(im.v3),
        { trackAction: u } = W(),
        d = r.useRef(null),
        m = r.useCallback(
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
        h = r.useMemo(
            () => ({
                flattenProductVariants: a ?? !0,
                prioritizedCurrency: o,
                standalonePreview: c,
                productOverride: t,
            }),
            [a, o, c, t],
        );
    return (0, s.jsx)(im.v3.Provider, {
        value: h,
        children: (0, s.jsx)(id.A, {
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
    return (0, s.jsx)(ih.A, {});
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
                        (0, r.useEffect)(() => {
                            null == e || t || L.A.isShopCollectionFetching(e) || (0, nV.hd)(e);
                        }, [e, t]),
                        { skuIds: l ?? ip, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, ix.hv)(t, { flattenVariants: !0 }),
                a = (0, r.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                s = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && s)) };
        })(e.shopCollectionIds?.[0]),
        a = r.useCallback(() => {
            (n(k.Ws.DiscordCollectiblesShop),
                t(),
                (0, ic.Cz)({
                    analyticsLocations: [f.A.GAME_PROFILE],
                    analyticsSource: f.A.GAME_PROFILE,
                    tab: ij.G2.CATALOG,
                }));
        }, [n, t]);
    return i
        ? (0, s.jsx)(tS, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, s.jsx)(nx.A, { children: ib.map((e) => (0, s.jsx)(iN, {}, e)) }),
          })
        : 0 === l.length
          ? null
          : (0, s.jsx)(tL, {
                title: em.intl.string(em.t["5DYPT8"]),
                onClickViewAll: a,
                children: (0, s.jsx)(nu.A, {
                    gap: "md",
                    items: l,
                    getItemKey: iI,
                    renderItem: (e, t) => (0, s.jsx)(iE, { product: e, listItemProps: t }, e.skuId),
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
        c = r.useCallback(() => {
            (i(k.Ws.ClickSimilarGame, { similarGameId: t.id }),
                a && null != o && l(o, k.GameProfileSources.SimilarGames));
        }, [t.id, o, i, a, l]);
    return (0, s.jsx)($.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, s.jsx)(tF.D, {
            ...n,
            className: ik.Nr,
            onClick: c,
            "aria-label": em.intl.formatToPlainString(em.t["8QLQB+"], { gameName: t.name }),
            children: (0, s.jsx)(t8.Ay, {
                game: t,
                className: ik.xe,
                size: t8.wu.SMALL,
                imageSize: 256,
                loadingPlaceholder: (0, s.jsx)(t8.gr, { className: ik.uz }),
            }),
        }),
    });
}
function iT() {
    let { game: e } = W(),
        t = e.id,
        { isFetching: n, similarGames: l } = (0, iC.A)(t);
    return n
        ? (0, s.jsx)(tS, {
              showViewAllSkeleton: !1,
              skeletonTitleWidth: 124,
              children: (0, s.jsx)("div", {
                  className: ik.XG,
                  style: iS,
                  children: (0, s.jsx)(nx.A, {
                      children: eQ()
                          .range(0, 8)
                          .map((e) => (0, s.jsx)(t8.gr, { className: ik.aZ }, e)),
                  }),
              }),
          })
        : 0 === l.length
          ? null
          : (0, s.jsx)(tL, {
                title: em.intl.string(em.t["6rLyQB"]),
                children: (0, s.jsx)("div", {
                    className: ik.XG,
                    style: iS,
                    children: (0, s.jsx)(nu.A, {
                        gap: "md",
                        items: l,
                        getItemKey: iL,
                        itemClassName: ik.cW,
                        renderItem: (e, t) => (0, s.jsx)(iR, { game: e, listItemProps: t }, e.id),
                    }),
                }),
            });
}
n(667532);
var iM = n(853022);
let iO = new Set(["1402418703554842694", "356877880938070016"]),
    iw = [n4.V1.EPICGAMES, n4.V1.STEAM, n4.V1.ROBLOX, n4.V1.BATTLENET, n4.V1.RIOT, n4.V1.MINECRAFT];
function iP(e) {
    return (0, s.jsx)(K.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var iV = n(349361),
    iD = n(422688),
    iG = n(505200),
    i_ = n(695250);
let iW = function (e) {
    switch (e.category) {
        case n4.V1.STEAM:
            return {
                icon: l1.N,
                text: em.intl.string(em.t.FsANs4),
                ariaLabel: em.intl.string(em.t["P+ePTG"]),
                action: k.Ws.SteamStoreLink,
                url: e.url,
            };
        case n4.V1.EPICGAMES:
            return {
                icon: iV.r,
                text: em.intl.string(em.t.ZbBMHa),
                ariaLabel: em.intl.string(em.t.BwX0UW),
                action: k.Ws.EpicStoreLink,
                url: e.url,
            };
        case n4.V1.ROBLOX:
            return {
                icon: lx.H,
                text: em.intl.string(em.t["pJ+P+h"]),
                ariaLabel: em.intl.string(em.t.tYxpdf),
                action: k.Ws.RobloxStoreLink,
                url: e.url,
            };
        case n4.V1.BATTLENET:
            return {
                icon: iD.a,
                text: em.intl.string(em.t["A7grp+"]),
                ariaLabel: em.intl.string(em.t.x9at20),
                action: k.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case n4.V1.RIOT:
            return {
                icon: iG.A,
                text: em.intl.string(em.t.h6MapL),
                ariaLabel: em.intl.string(em.t["528nvc"]),
                action: k.Ws.RiotStoreLink,
                url: e.url,
            };
        case n4.V1.MINECRAFT:
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
        s =
            ((t = (0, l9.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eL.d3x.XBOX_GAME_PASS && !(0, th.uJ)(e.id));
                return t?.id == null ? null : (0, iM.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            r.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== n4.V1.EPICGAMES || !!iO.has(l)) &&
                            (e.category !== n4.V1.STEAM || a !== l8.Y.RETIRED_ABANDONED) &&
                            iw.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === l8.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === n4.V1.STEAM) ||
                    e.push({ category: n4.V1.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === n4.V1.STEAM ? -1 : +(t.category === n4.V1.STEAM)));
                return (null != n && s.unshift({ category: "XBOX_GAME_PASS", url: n }), s);
            }, [t, i, l, a, n]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function iY(e) {
    let { data: t } = e,
        { trackAction: n } = W(),
        l = (0, lf.A)();
    return (0, s.jsx)(iP, {
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
        a = r.useMemo(() => i.map(iW).filter((e) => null != e), [i]);
    if (!l) return null;
    if (1 === a.length) {
        let [e] = a;
        return (0, s.jsx)(iY, { data: e });
    }
    if (2 === a.length)
        return (0, s.jsxs)("div", {
            className: iF.G,
            children: [(0, s.jsx)(iY, { data: a[0] }), (0, s.jsx)(iY, { data: a[1] })],
        });
    let o = (0, s.jsx)(iP, {
        text: em.intl.string(em.t["/hMurx"]),
        "aria-label": em.intl.string(em.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, g.mM)(async () => {
                    let { default: e } = await n.e(307898).then(n.bind(n, 679361));
                    return (n) => (0, s.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: e, websiteButtons: a, trackAction: t }),
    });
    return i.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, s.jsxs)("div", { className: iF.G, children: [(0, s.jsx)(iY, { data: a[0] }), o] })
        : o;
};
var iz = n(123292),
    iH = n(30772),
    iX = n(478676),
    iK = n.n(iX),
    iJ = n(694403),
    i$ = n(417964);
function iq(e, t, n) {
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
let iQ = /[\u0000-\u001f\u007f]/,
    iZ = /https?:\/\//i,
    i0 = String.raw`https?:\/\/[^\s<]+[^<.,:;"'\]\s]`,
    i1 = RegExp(`^(${i0})`, "i"),
    i4 = RegExp(i0, "gi"),
    i2 = /https?:\/\/\S+$/i,
    i8 = /^(?:[a-z0-9_/?#&=%-]|\.[a-z0-9])/i,
    i3 = new Map(
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
    i6 = { bold: !1, italic: !1, underline: !1 },
    i5 = /[\uD800-\uDBFF]/,
    i9 = /^[a-z][a-z0-9:-]*$/,
    i7 = /^<[a-z][a-z0-9:-]*\s*(?:\/+\s*)?>$/i,
    ae = /^<[a-z][a-z0-9:-]*(?:\s+[a-z0-9:+-]+)*(?:\s*\/+\s*[a-z0-9:+-]+(?:\s+[a-z0-9:+-]+)*)+\s*>$/i,
    at = /^<\/{2,}[\s/a-z0-9:+-]*>$/i,
    an = new Set([
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
    al = new Set([
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
function ai(e) {
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
function aa(e, t) {
    return Array.from((0, i$.El)(e).matchAll(i4)).some((e) => {
        let [n] = e;
        return ai(n, !0) !== t;
    });
}
function as(e) {
    return ai(iK().unescapeUrl(e[2]));
}
let ar = {
        text: iK().defaultRules.text,
        link: {
            ...iJ.Ay,
            match(e, t, n) {
                let l = iJ.Ay.match(e, t, n);
                return null != l && null != as(l) ? l : null;
            },
            parse(e, t, n) {
                let l = as(e);
                return null == l || aa((0, i$.Fd)(e[1]), l) ? { type: "text", content: e[0] } : iJ.Ay.parse(e, t, n);
            },
        },
        url: {
            order: iK().defaultRules.url.order,
            requiredFirstCharacters: ["h", "H"],
            match(e) {
                let t = i1.exec(e);
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
                    n = t.search(iQ),
                    l = -1 === n ? t : t.slice(0, n),
                    i = ai(l, !0);
                if (null == i) return { type: "text", content: t };
                let a = { type: "link", content: [{ type: "text", content: l }], target: i },
                    s = t.slice(l.length);
                return "" === s ? a : [a, { type: "text", content: s }];
            },
        },
    },
    ao = iK().parserFor(ar);
function ac(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 10 === n || 9 === n || 13 === n || 12 === n;
}
function au(e, t) {
    let n = e.charCodeAt(t);
    return 32 === n || 9 === n || 12 === n;
}
function ad(e) {
    let t = 0;
    for (; t < e.length && ac(e, t);) t++;
    return t;
}
function am(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = e.length;
    for (; n > t && ac(e, n - 1);) n--;
    return n;
}
function ah(e, t) {
    let n = "",
        l = 0,
        i = t,
        a = -1;
    for (let t = e.indexOf("\n"); -1 !== t; t = e.indexOf("\n", t + 1)) {
        let s = a + 1,
            r = !0;
        for (let n = s; n < t; n++)
            if (!au(e, n)) {
                r = !1;
                break;
            }
        (i > 0 && r ? ((n += e.slice(l, s)), i < 2 && (n += "\n"), (l = t + 1), i++) : (i = 1), (a = t));
    }
    return 0 === l ? e : n + e.slice(l);
}
function ag(e) {
    for (; e.length > 0;) {
        let t = e[e.length - 1],
            n = t.text.length;
        for (; n > 0 && au(t.text, n - 1);) n--;
        if (n === t.text.length) break;
        if (0 === n) e.pop();
        else {
            t.text = t.text.slice(0, n);
            break;
        }
    }
}
function ax(e) {
    return e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e;
}
function af(e) {
    let t = ah(ax(e), 0),
        n = ad(t),
        l = am(t, n);
    return l > n ? [{ text: t.slice(n, l), ...i6 }] : [];
}
function ap(e, t) {
    let n = Math.max(0, Math.floor(t)),
        l = i5.test(e.charAt(n - 1)) ? n - 1 : n;
    return ax(e.slice(0, l));
}
function aj(e) {
    return e.links[e.links.length - 1];
}
function av(e) {
    return null != e ? { ...i6, link: e } : i6;
}
function ab(e) {
    let t = aj(e);
    return {
        bold: e.styles.bold > 0 || null != e.heading,
        italic: e.styles.italic > 0,
        underline: e.styles.underline > 0,
        ...(null != e.heading ? { heading: e.heading } : {}),
        ...(null != t ? { link: t } : {}),
    };
}
function aI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i6,
        l = t.indexOf("\n");
    if (e.trailingNewlines > 0 && -1 !== l) {
        let n = !0;
        for (let e = 0; e < l; e++)
            if (!au(t, e)) {
                n = !1;
                break;
            }
        n && ag(e.runs);
    }
    let i = e.trailingNewlines,
        a = ah(t, e.trailingNewlines);
    if ((0 === e.runs.length && (a = a.slice(ad(a))), 0 === a.length)) return;
    iq(e.runs, a, n);
    let s = (function (e) {
        let t = 0;
        for (let n = e.length - 1; n >= 0; n--)
            if (10 === e.charCodeAt(n)) t++;
            else if (!au(e, n)) break;
        return t;
    })(a);
    e.trailingNewlines = ad(a) === a.length ? Math.min(2, i + s) : s;
}
function aE(e) {
    if (0 === e.pendingBreaks) for (let t of e.held) aI(e, t.text, t);
    else
        e.runs.length > 0 &&
            (e.trailingNewlines > 0 && ag(e.runs),
            aI(e, "\n".repeat(Math.max(0, e.pendingBreaks - e.trailingNewlines)), av(e.spacingLink)));
    ((e.held = []), (e.pendingBreaks = 0));
}
function aN(e, t) {
    let n = e.atBoundary ? ad(t) : 0,
        l = am(t, n),
        i = ab(e);
    (l > n && (aE(e), aI(e, t.slice(n, l), i), (e.spacingLink = i.link), (e.atBoundary = e.afterMarker = !1)),
        l < t.length && e.held.push({ ...i, text: t.slice(l) }));
}
function ay(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null != t &&
        ((n && e.afterMarker) || (e.pendingBreaks = Math.max(e.pendingBreaks, e.itemDepth > 0 ? 1 : t)),
        (e.atBoundary = !0),
        n || (e.afterMarker = !1));
}
function aA(e, t) {
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
                    let s = a.replace(/\/+$/, "");
                    if (e.hiddenDepth > 0 || t === a || i3.has(s) || an.has(s) || al.has(s)) return;
                    let r = e.markup.indexOf(">", l);
                    -1 !== r && aN(e, e.markup.slice(i, r + 1));
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
                            let s;
                            e.unfinishedTag = void 0;
                            let r = i3.get(t);
                            if (e.hiddenDepth > 0 || r?.hidden === !0) return void e.hiddenDepth++;
                            if (null == r) {
                                let n,
                                    s,
                                    r = e.markup.slice(l.startIndex, l.endIndex + 1);
                                (!i9.test(t) ||
                                    ((i7.test(r) || ae.test(r)) &&
                                        !an.has(t) &&
                                        !al.has(t) &&
                                        ((i = l.endIndex),
                                        (e.closingTags ??= e.markup.includes("</")
                                            ? ((a = e.markup),
                                              (n = new Map()),
                                              (s = new iH.i(
                                                  {
                                                      onclosetag(e) {
                                                          let t = s.startIndex;
                                                          a.slice(t, t + e.length + 2).toLowerCase() === `</${e}` &&
                                                              n.set(e, t);
                                                      },
                                                  },
                                                  { decodeEntities: !0, recognizeSelfClosing: !0 },
                                              )).end(a),
                                              n)
                                            : new Map()),
                                        !((e.closingTags.get(t) ?? -1) > i)))) &&
                                    aN(e, r);
                                return;
                            }
                            (ay(e, r.breaks, !0),
                                null != r.style && e.styles[r.style]++,
                                !0 === r.link &&
                                    (e.links.push(ai(n.href) ?? (e.keepInvalidAnchors ? "" : void 0)),
                                    (e.spacingLink = void 0)),
                                null != r.heading && (e.heading = r.heading),
                                null != r.list && e.lists.push({ ordered: "ordered" === r.list, index: 0 }),
                                !0 === r.lineBreak &&
                                    (aE(e),
                                    aI(e, "\n", null != e.heading ? ab(e) : av(aj(e))),
                                    (e.atBoundary = !0),
                                    (e.afterMarker = !1)),
                                !0 === r.item &&
                                    (aE(e),
                                    (s = e.lists[e.lists.length - 1]),
                                    aI(e, s?.ordered === !0 ? `${++s.index}. ` : "\u2022 "),
                                    e.itemDepth++,
                                    (e.afterMarker = !0)));
                        })(e, t, n, l),
                    onclosetag(n, l) {
                        (l || (t = n),
                            (function (e, t) {
                                if (e.ending) return;
                                if (e.hiddenDepth > 0) return e.hiddenDepth--;
                                let n = i3.get(t);
                                null != n &&
                                    (ay(e, n.breaks),
                                    null != n.style && e.styles[n.style]--,
                                    !0 === n.link && (e.links.pop(), (e.spacingLink = void 0)),
                                    null != n.heading && (e.heading = void 0),
                                    null != n.list && e.lists.pop(),
                                    !0 === n.item && e.itemDepth--);
                            })(e, n));
                    },
                    oncomment() {
                        let t = e.markup.slice(l.startIndex, l.endIndex + 1);
                        0 === e.hiddenDepth && at.test(t) && aN(e, t);
                    },
                    ontext(t) {
                        0 === e.hiddenDepth && aN(e, t);
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
            new iH.i({ ontext: (e) => aN(l, e) }, { decodeEntities: !0 }).end(n.replace(/</g, "&lt;")));
    for (var a = l.runs; a.length > 0;) {
        let e = a[a.length - 1];
        if (((e.text = e.text.slice(0, am(e.text))), e.text.length > 0)) break;
        a.pop();
    }
    return a;
}
var aC = n(9578);
let ak = { h1: "heading-lg/semibold", h2: "heading-sm/semibold", h3: "heading-xs/semibold", h4: "heading-xs/semibold" },
    aS = { h1: 2, h2: 3, h3: 4, h4: 5 };
var aL = n(407355);
function aR(e) {
    let { italic: t, underline: n } = e;
    return u()({ [aL.T]: t, [aL.V]: n });
}
function aT(e) {
    let { run: t, textVariant: n, boldTextVariant: l } = e;
    if (null != t.heading) return (0, s.jsx)(aM, { run: t });
    let { text: i, bold: a, italic: r, underline: o } = t;
    return a || r || o
        ? (0, s.jsx)(Y.E, {
              tag: a ? "strong" : "span",
              variant: a ? l : n,
              color: "none",
              className: aR(t),
              children: r ? (0, s.jsx)("em", { children: i }) : i,
          })
        : i;
}
function aM(e) {
    let { run: t } = e,
        { text: n, italic: l, underline: i } = t;
    if (!l && !i) return n;
    let a = aR(t);
    return l && i
        ? (0, s.jsx)("u", { className: a, children: (0, s.jsx)("em", { children: n }) })
        : l
          ? (0, s.jsx)("em", { className: a, children: n })
          : (0, s.jsx)("u", { className: a, children: n });
}
function aO(e) {
    let { segment: t, textVariant: n, boldTextVariant: l, onLinkPress: i } = e,
        a = t.runs.map((e, t) => (0, s.jsx)(aT, { run: e, textVariant: n, boldTextVariant: l }, t)),
        { link: r } = t;
    return null == r
        ? a
        : (0, s.jsx)(aC.A, {
              href: r,
              title: t.runs.map((e) => e.text).join(""),
              onClick: () => (i?.(r), !1),
              children: a,
          });
}
function aw(e) {
    let { group: t, ...n } = e,
        { heading: l, segments: i } = t,
        a = i.map((e, t) =>
            (0, s.jsx)(
                aO,
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
        : (0, s.jsx)(tQ.F, {
              forceLevel: n.headingLevels[l],
              children: (0, s.jsx)(tu.D, { variant: n.headingVariants[l], color: n.headingColor, children: a }),
          });
}
function aP(e) {
    let {
            runs: t,
            textVariant: n = "body-md/normal",
            boldTextVariant: l = "body-md/semibold",
            headingVariants: i = ak,
            headingColor: a = "text-strong",
            headingLevels: o = aS,
            onLinkPress: c,
        } = e,
        u = r.useMemo(
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
    return u.map((e, t) => (0, s.jsx)(aw, { group: e, ...d }, t));
}
var aV = n(672572),
    aD = n(94936);
function aG() {
    let e = r.useRef(null),
        { game: t, isTwoColumn: n, trackAction: l } = W(),
        i = r.useMemo(
            () =>
                null != t.description
                    ? (function (e) {
                          let { maxLength: t = 1e4, parseTextLinks: n = !1 } =
                                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              l = e.includes("<") || e.includes("&");
                          if (!n) return l ? aA(ap(e, t)) : af(e);
                          let i = ap(e, t);
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
                                          let s = "";
                                          for (let t = l; t < a; t++) s += e[t].text;
                                          let r = (0, i$.Fd)(s).trim(),
                                              o = 0 === r.length ? "" : aa(r, i.link) ? void 0 : i.link;
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
                                          iq(l, a.text, t);
                                      } else iq(l, a.text, a);
                                      i = !1;
                                  } else {
                                      let s = t[e + 1],
                                          r =
                                              null != s &&
                                              null == s.link &&
                                              !a.text.includes("](") &&
                                              i2.test(a.text) &&
                                              i8.test(s.text);
                                      (i || r
                                          ? iq(l, a.text, a)
                                          : (function (e, t, n) {
                                                let l = t.text.includes("["),
                                                    i = n && t.text.includes("](");
                                                (!i || l) && (i || iZ.test(t.text))
                                                    ? (function e(t, n, l, i) {
                                                          if (Array.isArray(n)) for (let a of n) e(t, a, l, i);
                                                          else
                                                              "text" === n.type && "string" == typeof n.content
                                                                  ? iq(t, n.content, null != i ? { ...l, link: i } : l)
                                                                  : "link" === n.type && e(t, n.content, l, n.target);
                                                      })(e, ao(t.text, { inline: !0, allowLinks: n }), t)
                                                    : iq(e, t.text, t);
                                            })(l, a, !n.has(e)),
                                          (i = r));
                                  }
                              }
                              return l;
                          })(l ? aA(i, { keepInvalidAnchors: !0 }) : af(i));
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
                    showToggle: s,
                    setHasOverflow: o,
                    setExpanded: c,
                    toggleExpanded: u,
                } = (function (e) {
                    let [t, n] = r.useState("full"),
                        l = r.useCallback((e) => {
                            n((t) => ("expanded" === t ? t : e ? "collapsed" : "full"));
                        }, []),
                        i = r.useCallback(
                            (l) => {
                                let i = l ? "expanded" : "collapsed";
                                "full" !== t && t !== i && (e(l ? k.Ws.ShowMore : k.Ws.ShowLess), n(i));
                            },
                            [e, t],
                        ),
                        a = r.useCallback(() => i("expanded" !== t), [i, t]);
                    return {
                        isCollapsed: "collapsed" === t,
                        isExpanded: "expanded" === t,
                        showToggle: "full" !== t,
                        setHasOverflow: l,
                        setExpanded: i,
                        toggleExpanded: a,
                    };
                })(l),
                d = r.useRef(!1),
                m = r.useRef(null);
            (r.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    o(t.scrollHeight - t.clientHeight > 1);
                });
                return (n.observe(t), () => n.disconnect());
            }, [e, t, n, o]),
                r.useLayoutEffect(() => {
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
            let h = r.useCallback(() => {
                (a && (d.current = !0), u());
            }, [a, u]);
            return {
                isExpanded: a,
                showToggle: s,
                handleToggleExpanded: h,
                handleDescriptionFocus: r.useCallback(
                    (t) => {
                        let n = e.current,
                            l = t.target;
                        if (!i || null == n || !(0, nS.vq)(l, HTMLAnchorElement) || !l.matches(":focus-visible"))
                            return;
                        let a = n.getBoundingClientRect(),
                            s = l.getBoundingClientRect();
                        (n.scrollTop > 1 || s.top < a.top - 1 || s.bottom > a.bottom + 1) && ((m.current = l), c(!0));
                    },
                    [i, c, e],
                ),
            };
        })(e, t.description, a),
        h = r.useCallback(() => {
            l(k.Ws.ClickDescriptionLink);
        }, [l]);
    if (0 === i.length) return null;
    let g = o ? em.intl.string(em.t["6MwJo/"]) : em.intl.string(em.t.lBeKY2);
    return (0, s.jsxs)("div", {
        className: u()(aV.fi, aD.k),
        onFocusCapture: m,
        children: [
            (0, s.jsx)(Y.E, {
                ref: e,
                className: aD.Q,
                lineClamp: o ? void 0 : a,
                variant: "body-md/medium",
                children: (0, s.jsx)(aP, { runs: i, textVariant: "body-md/medium", onLinkPress: h }),
            }),
            c && (0, s.jsx)(iz.Q, { onClick: d, text: g, "aria-expanded": o }),
        ],
    });
}
var a_ = n(40478),
    aW = n(764948);
let aF = r.memo(function (e) {
    let { analyticsLocations: t, selectTab: n, getScrollOffset: l } = e;
    return (0, s.jsxs)("div", {
        className: aW.V,
        children: [
            (0, s.jsx)(l0, {}),
            (0, s.jsxs)("div", {
                className: a_.h,
                children: [
                    (0, s.jsx)(nt, {}),
                    (0, s.jsxs)("div", { className: a_.X, children: [(0, s.jsx)(iB, {}), (0, s.jsx)(aG, {})] }),
                ],
            }),
            (0, s.jsx)(lP, { analyticsLocations: t }),
            (0, s.jsx)(tA, {}),
            (0, s.jsx)(n0, { getScrollOffset: l }),
            (0, s.jsx)(nk, { selectTab: n }),
            (0, s.jsx)(iy, {}),
            (0, s.jsx)(iT, {}),
            (0, s.jsx)(io, {}),
            (0, s.jsx)(lR, {}),
        ],
    });
});
var aU = n(164135);
let aY = r.memo(function (e) {
    let { selectTab: t, getScrollOffset: n } = e;
    return (0, s.jsxs)("div", {
        className: aU.V,
        children: [
            (0, s.jsxs)("div", { className: aU.B, children: [(0, s.jsx)(l0, {}), (0, s.jsx)(aG, {})] }),
            (0, s.jsx)(n0, { getScrollOffset: n }),
            (0, s.jsx)(nk, { selectTab: t }),
            (0, s.jsx)(iy, {}),
            (0, s.jsx)(iT, {}),
        ],
    });
});
var aB = n(881698),
    az = n(928550),
    aH = n(613412),
    aX = n(414499),
    aK = n(359549),
    aJ = n(139286),
    a$ = n(873516);
function aq(e) {
    let { onCloudPlayClick: t, analyticsLocations: n } = e,
        { closeModal: l, trackAction: i } = W();
    (0, aJ.A)({
        name: aH.ImpressionNames.CLOUD_PLAY_CTA,
        type: aH.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let a = r.useCallback(() => {
        (i(k.Ws.CloudPlay), l(), t());
    }, [l, t, i]);
    return (0, s.jsx)($.m, {
        text: em.intl.string(em.t.JVwWva),
        position: "top",
        children: (0, s.jsx)(K.$, {
            icon: aX.h,
            text: em.intl.string(em.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: a,
            fullWidth: !0,
        }),
    });
}
function aQ(e) {
    let { cloudPlayAppId: t, analyticsLocations: n } = e,
        { game: l } = W(),
        i = (0, aK.rC)({ applicationId: t, sourceApplicationId: l.id, analyticsLocations: n });
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: a$.k,
              children: (0, s.jsx)(aq, { onCloudPlayClick: i, analyticsLocations: n }),
          });
}
var aZ = n(768626);
function a0(e) {
    let { analyticsLocations: t } = e,
        { game: n } = W(),
        l = (0, aB.A)(n.linkedApplications)?.id,
        [i] = (0, az.L_)(n.getOfficialApplicationId()),
        [a] = (0, az.L_)(n.id),
        { showsStoreLinks: r } = iU(n);
    return (0, s.jsxs)("div", {
        className: u()(aZ.pz, aV.fi, r ? aZ.FJ : aZ.dg),
        children: [
            null == l || i || a ? null : (0, s.jsx)(aQ, { cloudPlayAppId: l, analyticsLocations: t }),
            (0, s.jsxs)("div", {
                className: aW.V,
                children: [
                    (0, s.jsx)(iB, {}),
                    (0, s.jsx)(lP, { analyticsLocations: t }),
                    (0, s.jsx)(tA, {}),
                    (0, s.jsx)(io, {}),
                    (0, s.jsx)(lR, {}),
                ],
            }),
        ],
    });
}
var a1 = n(105865);
function a4(e) {
    let { isTwoColumn: t, selectTab: n, selectionVersion: l, initialScrollOffset: i, analyticsLocations: a } = e,
        o = r.useRef(null),
        c = r.useRef(null),
        u = r.useRef(l);
    (r.useLayoutEffect(() => {
        0 === l && null != i && i > 0 && c.current?.getScrollerNode()?.scrollTo({ top: i, behavior: "instant" });
    }, [i, l]),
        r.useLayoutEffect(() => {
            l !== u.current &&
                (c.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (u.current = l));
        }, [l]));
    let d = r.useCallback(() => c.current?.getScrollerNode()?.scrollTop ?? 0, []),
        m = r.useCallback((e) => {
            if (null != o.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                o.current.style.opacity = String(t);
            }
        }, []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(t9, { ref: o }),
            (0, s.jsxs)(eZ.Ch, {
                ref: c,
                className: a1.XG,
                onScroll: m,
                children: [
                    (0, s.jsx)("div", { className: a1.xY, "aria-hidden": !0 }),
                    (0, s.jsx)(ni, {}),
                    (0, s.jsx)(tQ.F, {
                        children: t
                            ? (0, s.jsxs)("div", {
                                  className: a1.jC,
                                  children: [
                                      (0, s.jsx)(aY, { selectTab: n, getScrollOffset: d }),
                                      (0, s.jsx)(a0, { analyticsLocations: a }),
                                  ],
                              })
                            : (0, s.jsx)("div", {
                                  className: a1.b9,
                                  children: (0, s.jsx)(aF, { analyticsLocations: a, selectTab: n, getScrollOffset: d }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
var a2 = n(953331),
    a8 = n(787188);
function a3(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, s.jsx)(a2.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: f.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: nr.Ye.GAME_PROFILE_GAME_SHOP,
        className: a8.kL,
        scrollerClassName: a8.XG,
        promotionBannerClassName: a8.Rv,
    });
}
var a6 = n(733391),
    a5 = n(171616);
function a9(e) {
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
        [F, U] = r.useState(!0),
        [Y, B] = r.useState(null),
        { clientThemesClassName: z } = (0, b.Ay)(),
        H = (0, m.bG)([C.default], () => C.default.locale),
        X = r.useMemo(() => (0, k.u9)(), []),
        { analyticsLocations: K } = (0, p.Ay)(f.A.GAME_PROFILE),
        J = (0, R.s)(t),
        { data: $ } = (0, N.I)(t),
        q = $?.getOfficialApplicationId(),
        Q = (0, T.rG)($),
        Z = null != q,
        ee = (0, m.bG)([v.A], () => null != q && v.A.didFetchingApplicationFail(q), [q]),
        et = $?.name ?? "",
        en = (0, O.A)($),
        el = r.useRef(null);
    r.useEffect(() => {
        el.current = Y;
    }, [Y]);
    let {
            hasAlreadyLinked: ei,
            canStartAuthorization: ea,
            fetched: es,
            startAuthorization: er,
            connectionApp: eo,
        } = (0, j.RD)($),
        { invite: ec, isMember: ed, isResolving: em } = (0, T.Ay)($, B),
        { socialLayerStorefrontRecommendationsData: eh, socialLayerStorefrontRecommendationsLoading: eg } = (function (
            e,
        ) {
            let t = G.default.getCurrentUser()?.id,
                n = r.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [P.A],
                    () => ({
                        storefrontApplicationId: null != e ? P.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === P.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, w.h)(l),
                s = (0, m.bG)([v.A], () => null != l && v.A.didFetchingApplicationFail(l), [l]),
                o = r.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: c, status: u } = (0, D.XQ)({
                    applicationIds: o,
                    userIds: n,
                    numItems: 6,
                    source: V.B.USER_PROFILE,
                }),
                d = r.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== u || 0 === c.length
                            ? null
                            : { application: a, skuIds: c.map((e) => e.id), guildId: a.guildId },
                    [a, u, c],
                ),
                h = "loading" === u,
                g = "success" === u && c.length > 0 && null == a && !s;
            return {
                socialLayerStorefrontRecommendationsData: d,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (h || g),
            };
        })(t),
        ex = r.useCallback(
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
                i = J.map((e) => {
                    let t = (0, E.JM)(e) ? (0, E.W6)(e, l) : (0, E.aJ)(e, H);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, k.V_)({
                viewId: X,
                gameId: t,
                gameName: et,
                playedFriendIds: J.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: L.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let ef = r.useCallback((e) => {
            U(e.contentRect.width >= 800);
        }, []),
        ep = (0, d.w)(ef, [], { fireOnMount: !0 }),
        ej = r.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, g.s7)(), (0, A.M)()) : a();
            },
            [a],
        ),
        ev = r.useCallback(() => ej(!1), [ej]),
        { navigation: eb, selectionVersion: eI } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.OVERVIEW,
                [n, l] = r.useState(t),
                [i, a] = r.useState(0),
                s = r.useCallback((e) => {
                    (l(e), a((e) => e + 1));
                }, []),
                o = r.useCallback(
                    (t) => {
                        if (t !== n) {
                            let n = M[t];
                            null != n && e(n);
                        }
                        s(t);
                    },
                    [n, s, e],
                );
            return { navigation: r.useMemo(() => ({ selectedTab: n, selectTab: o }), [n, o]), selectionVersion: i };
        })(ex, c),
        { selectedTab: eE } = eb,
        eN = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                s = t?.getOfficialApplicationId(),
                o = eu({ location: "GameProfileModal" });
            r.useEffect(() => {
                o && (0, a6.Xw)();
            }, [o]);
            let c = (0, m.bG)(
                    [P.A],
                    () =>
                        (null != a ? P.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != s && P.A.hasStorefrontForApplicationId(s) ? s : null),
                    [a, s],
                ),
                u = o && null != c,
                { storefront: d } = (0, a5.A)({ applicationId: u ? c : null }),
                [h, g] = r.useState({ storefrontId: d?.id, index: 0 }),
                [x, f] = r.useState(l);
            l !== x && (f(l), l !== S.COMMERCE && g({ storefrontId: d?.id, index: 0 }));
            let p = h.storefrontId === d?.id && h.index < (d?.pages.length ?? 0) ? h.index : 0,
                j = r.useCallback(
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
        })({ game: $, navigation: eb }),
        { hasCommerceTab: ey, storefrontApplicationId: eA, storefront: eC, selectedStorefrontPageIndex: ek } = eN,
        eS = Object.values(eC?.promotions ?? {})[0] ?? null,
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
                    socialLayerStorefrontRecommendationsData: eh,
                    socialLayerStorefrontRecommendationsLoading: eg,
                    hasCommerceTab: ey,
                    storefrontPromotion: eS,
                    closeModal: ej,
                    navigateToGame: W,
                    trackAction: ex,
                    viewId: X,
                };
        }, [$, F, ea, ei, es, er, eo, ec, Q, Z, ee, em, ed, eh, eg, ey, eS, ej, W, ex, X]);
    return null == $
        ? null
        : (0, s.jsx)(p.f5, {
              value: K,
              children: (0, s.jsx)(h.N, {
                  transitionState: i,
                  onClose: a,
                  children: (0, s.jsx)(_.Provider, {
                      value: eL,
                      children: (0, s.jsx)("div", {
                          className: u()(z, aV.kL),
                          ref: ep,
                          children: (0, s.jsxs)(y.A, {
                              obscured: en,
                              onClose: ev,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: u()(aV.sx, { [aV.Tk]: eE !== S.COMMERCE }),
                                      children: (0, s.jsx)(e$, { navigation: eb, socialLayerStorefront: eN }),
                                  }),
                                  eE === S.OVERVIEW &&
                                      (0, s.jsx)(a4, {
                                          selectTab: eb.selectTab,
                                          selectionVersion: eI,
                                          initialScrollOffset: o,
                                          isTwoColumn: F,
                                          analyticsLocations: K,
                                      }),
                                  eE === S.COMMUNITIES && (0, s.jsx)(tq, {}),
                                  eE === S.COMMERCE && (0, s.jsx)(a3, { applicationId: eA, selectedPageIndex: ek }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let a7 = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a, ...o } = e,
        [c, u] = r.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, initialTab: a }),
        d = c.gameId,
        m = r.useCallback(
            (e, t) => {
                e !== d && ((0, T.UT)(e), u({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, s.jsx)(
        a9,
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
