"use strict";
n.d(t, { default: () => aD });
var a,
    i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    c = n(989349),
    o = n.n(c),
    d = n(110259),
    u = n(535185),
    m = n(792216),
    f = n(379834),
    h = n(17928),
    _ = n(990078),
    g = n(521489),
    p = n(825860),
    x = n(834730),
    b = n(534514),
    E = n(821609),
    v = n(414499),
    A = n(224640),
    I = n(364522),
    N = n(707554),
    S = n(689175),
    j = n(964486),
    C = n(737393),
    y = n(793574),
    R = n(688810),
    T = n(139286),
    L = n(46225),
    k = n(429913),
    M = n(590703),
    O = n(180170),
    w = n(583846),
    P = n(569926),
    G = n(928550),
    D = n(975732),
    U = n(773669),
    F = n(486020),
    V = n(541830),
    W = n(935208),
    B = n(409626),
    H = n(636537),
    Y = n(228366),
    z = n(845584),
    X = n(371794),
    K = n(155718),
    Z = n(731068),
    q = n(77350),
    J = n(320095),
    $ = n(383233),
    Q = n(998218);
let ee = /^#{1,3}\s+(.+)$/;
var et = n(652215);
let en = async (e) => {
        Y.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, X.aP)({
                    url: et.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: U.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            Y.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            Y.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    ea = async (e) => {
        try {
            let t = (
                (await H.Bo.get({ url: et.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            Y.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
        } catch (e) {
            throw new z.LG(e);
        }
    },
    ei = async (e, t) => {
        Y.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let n = {};
            t?.limit != null && (n.limit = t.limit);
            let a = (await H.Bo.get({ url: et.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
            Y.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: a.messages.map((e) => {
                    let t,
                        n,
                        a = (0, J.rh)(e),
                        i = (0, $._c)(a)
                            ? a.components
                                  .filter((e) => e.type === K.I5.TEXT_DISPLAY)
                                  .map((e) => e.content)
                                  .join("\n")
                            : a.content,
                        l = (function (e) {
                            if ((0, $._c)(e)) {
                                let t = e.components.find((e) => e.type === K.I5.MEDIA_GALLERY),
                                    n = t?.items[0]?.media;
                                if (null != n) {
                                    let t = (0, Z.FE)(n);
                                    if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, q.tT)(e.content_type));
                            if (null != t) return (0, Z.Rr)(t, e);
                            let n = e.attachments.find((e) => (0, q.XB)(e.content_type));
                            if (null != n) return (0, Z.Rr)(n, e);
                            let a = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (a?.thumbnail != null)
                                return (0, Z.oU)(
                                    a.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                    },
                                    "IMAGE",
                                );
                        })(a),
                        { title: r, body: s } =
                            ((t = i.indexOf("\n")),
                            (n = (-1 === t ? i : i.slice(0, t)).match(ee)),
                            null != n
                                ? { title: n[1].trim(), body: -1 === t ? "" : i.slice(t + 1).trimStart() }
                                : { body: i }),
                        c = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0;
                    return {
                        id: a.id,
                        media: l,
                        title: r,
                        body: s,
                        content: i,
                        timestamp: e.timestamp,
                        reactionCount: c,
                    };
                }),
                channelId: a.channel_id ?? void 0,
                guildId: a.guild_id ?? void 0,
            });
        } catch (t) {
            Y.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var el = n(422069),
    er = n(945810);
let es = (0, er.mj)({
    name: "2025-12-game-profiles-v2",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var ec = n(205184),
    eo = n(832163),
    ed = n(594832),
    eu = n(862772),
    em = n(287809),
    ef = n(505779),
    eh = n(970163),
    e_ = n(184989);
let eg = function (e, t) {
    let [n, a] = l.useState(),
        i = l.useRef(null),
        r = l.useRef(t);
    l.useEffect(() => {
        r.current = t;
    }, [t]);
    let s = (0, h.bG)([e_.A], () => n?.guild?.id != null && e_.A.isMember(n?.guild?.id)),
        c = l.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ef.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        l.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, eh.A)(t);
                    !0 !== e.banned && ((i.current = t), a(e.invite), null != e.invite && r.current?.(e.invite));
                }
            };
            null != c && e(c.url);
        }, [c]),
        { invite: n, isMember: s }
    );
};
var ep = n(713900),
    ex = n(459746),
    eb = n(922016),
    eE = n(550079),
    ev = n(477782),
    eA = n(939249),
    eI = n(365199),
    eN = n(661531),
    eS = n(663341),
    ej = n(408278),
    eC = n(34188),
    ey = n(789645),
    eR = n(442433),
    eT = n(50268),
    eL = n(44724);
let ek = l.createContext(void 0);
function eM() {
    let e = l.useContext(ek);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
var eO = n(67518);
n(321073);
var ew = n(540185),
    eP = n(926268),
    eG = n(53788),
    eD = n(831453),
    eU = n(785866),
    eF = n(555704),
    eV = n(457965),
    eW = n(47675),
    eB = n(633075),
    eH = n(289173),
    eY = n(841595),
    ez = n(958805),
    eX = n(735321),
    eK = n(495544),
    eZ = n(760751),
    eq = n(985018);
async function eJ(e) {
    let t = e((0, eX.BF)());
    await ez.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function e$(e) {
    let { gameId: t, className: n, trackAction: a } = e,
        r = l.useRef(null),
        s = (0, eT.A)({ id: t, label: eq.intl.string(eq.t.SHQGPj) }),
        c = (0, eO.n)(t, a);
    return null == s && null == c
        ? null
        : (0, i.jsx)(eb.Y, {
              targetElementRef: r,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(eE.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, eR.Z_)(), t();
                      },
                      "aria-label": eq.intl.string(eq.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(ev.rX, { children: s }), (0, i.jsx)(ev.rX, { children: c })],
                      }),
                  });
              },
              children: (e) =>
                  (0, i.jsx)(_.m, {
                      text: eq.intl.string(eq.t["UKOtz+"]),
                      children: (0, i.jsx)(eA.D, {
                          innerRef: r,
                          className: n,
                          ...e,
                          children: (0, i.jsx)(eI.j, { size: "xs", color: eN.A.colors.WHITE }),
                      }),
                  }),
          });
}
function eQ(e) {
    let { game: t, onClose: n, className: a, trackAction: r } = e,
        s = l.useRef(null),
        c = l.useRef(null),
        o = (0, eT.A)({ id: t.id, label: eq.intl.string(eq.t.SHQGPj) }),
        d = (0, eO.n)(t.id, r),
        u = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                a = (0, h.bG)([eK.default], () => eK.default.getId()),
                r = (0, h.bG)([eZ.A], () => eZ.A.getDetectableGame(t)),
                s = l.useMemo(
                    () => [
                        {
                            type: ew.x.FAVORITE_GAMES,
                            addLabel: eq.intl.string(eq.t.fgmitg),
                            removeLabel: eq.intl.string(eq.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eP.C,
                        },
                        {
                            type: ew.x.PLAYED_GAMES,
                            addLabel: eq.intl.string(eq.t["0xIVLR"]),
                            removeLabel: eq.intl.string(eq.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eG.G,
                        },
                        {
                            type: ew.x.CURRENT_GAMES,
                            addLabel: eq.intl.string(eq.t.G0c4En),
                            removeLabel: eq.intl.string(eq.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: eD.H,
                        },
                        {
                            type: ew.x.WANT_TO_PLAY_GAMES,
                            addLabel: eq.intl.string(eq.t.UuBS4K),
                            removeLabel: eq.intl.string(eq.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: eU._,
                        },
                    ],
                    [],
                ),
                c = (0, h.yK)([eY.A], () => (null == a ? [] : (eY.A.getUserProfile(a)?.widgets ?? [])), [a]),
                o = (0, eV.w$)({ location: "game-profile-overflow-menu" }),
                d = l.useMemo(() => {
                    if (null == o || 0 === o.length) return null;
                    if (null != e) {
                        if (o.some((t) => t.applicationId === e.id)) return e.id;
                        for (let t of e.linkedApplications ?? [])
                            if (o.some((e) => e.applicationId === t.id)) return t.id;
                    }
                    return null;
                }, [o, e]),
                u = l.useCallback(
                    async (e, n) => {
                        let a = null;
                        if (
                            (await eJ((i) => {
                                let l = i.filter(eH.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (l?.games.some((e) => e.applicationId === t) || (null != l && (0, eX.uA)(l)))
                                        return i;
                                    let n = { applicationId: t },
                                        r = null != l ? [n, ...(l.games ?? [])] : [n];
                                    a = new eH.Yy({ ...(l ?? { type: e }), games: r });
                                } else {
                                    if (null == l) return i;
                                    let e = l.games.filter((e) => e.applicationId !== t);
                                    a = new eH.Yy({ ...l, games: e });
                                }
                                var r = a;
                                let s = i.findIndex((e) => e.getUniqueKey() === r.getUniqueKey());
                                if (-1 === s) return [r, ...i];
                                let c = [...i];
                                return (c[s] = r), c;
                            }),
                            null == a)
                        )
                            return;
                        let i = a;
                        (0, eW.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                m = l.useCallback(
                    async (e) => {
                        if (null == d) return;
                        let t = null;
                        if (
                            (await eJ((n) =>
                                e
                                    ? n.some((e) => e instanceof eB.R && e.applicationId === d)
                                        ? n
                                        : [(t = new eB.R({ applicationId: d })), ...n]
                                    : ((t = n.find((e) => e instanceof eB.R && e.applicationId === d) ?? null),
                                      n.filter((e) => !(e instanceof eB.R && e.applicationId === d))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, eW.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [d],
                );
            if (null == a) return null;
            let f = null != e && null != r && (0, eX.XX)(r),
                _ = [];
            if (null != d) {
                let e = c.some((e) => e instanceof eB.R && e.applicationId === d);
                _.push(
                    (0, i.jsx)(
                        ev.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eq.intl.formatToPlainString(eq.t.Ktb1n8, { name: n })
                                : eq.intl.formatToPlainString(eq.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: eF.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (f)
                for (let e of s) {
                    let n = c.filter(eH.fu).find((t) => t.type === e.type) ?? null,
                        a = null != n && n.games.some((e) => e.applicationId === t),
                        l = !a && null != n && (0, eX.uA)(n);
                    _.push(
                        (0, i.jsx)(
                            ev.Dr,
                            {
                                id: e.menuId,
                                label: a ? e.removeLabel : e.addLabel,
                                subtext: l ? eq.intl.string(eq.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !a),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: l,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === _.length ? null : _;
        })(t),
        { officialInvite: m } = eM(),
        f = new Set(m?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        g = l.useCallback(() => {
            null != m && (0, eL.X)({ invite: m });
        }, [m]),
        p = l.useCallback(() => {
            null != m && (r(B.Ws.GameShop), (0, eL.default)({ invite: m }), n());
        }, [m, r, n]);
    return (0, i.jsxs)("div", {
        className: a,
        children: [
            null != u &&
                (0, i.jsx)(eb.Y, {
                    targetElementRef: c,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(eE.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, eR.Z_)(), t();
                            },
                            "aria-label": eq.intl.string(eq.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(ev.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: c,
                            children: (0, i.jsx)(E.$, {
                                icon: eS.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eq.intl.string(eq.t.sidPSo),
                            }),
                        }),
                }),
            f &&
                null != m &&
                (0, i.jsx)(_.m, {
                    text: eq.intl.string(eq.t.apFNLU),
                    children: (0, i.jsx)(ej.K, {
                        icon: eC.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eq.intl.string(eq.t.apFNLU),
                        onMouseDown: g,
                        onClick: p,
                    }),
                }),
            (null != o || null != d) &&
                (0, i.jsx)(eb.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(eE.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, eR.Z_)(), t();
                            },
                            "aria-label": eq.intl.string(eq.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(ev.rX, { children: d }), (0, i.jsx)(ev.rX, { children: o })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(_.m, {
                            text: eq.intl.string(eq.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: s,
                                children: (0, i.jsx)(ej.K, {
                                    icon: eI.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eq.intl.string(eq.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(ej.K, {
                icon: ey.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: n,
                "aria-label": eq.intl.string(eq.t.cpT0Cq),
            }),
        ],
    });
}
var e0 = n(621466),
    e1 = n(966697),
    e2 = n(460905),
    e5 = n(951707),
    e8 = n(46054),
    e3 = n(58703),
    e9 = n(60465),
    e6 = n(284009),
    e7 = n.n(e6),
    e4 = n(376728),
    te = n(976860),
    tt = n(71393),
    tn = n(449054);
async function ta(e) {
    let { invite: t, guildId: n, channelId: a, messageId: i, analyticsLocationStack: l } = e;
    e7()(l.length > 0, "analyticsLocationStack must have at least one location");
    let r = l[l.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let c = tt.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == s || s.has(et.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, tn.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: a, messageId: i, joinSource: et.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                l,
            ));
        else
            null != t &&
                (await e4.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, te.pX)(et.BVt.CHANNEL(n, a, i), { sourceLocationStack: l });
}
var ti = n(320448),
    tl = n(274119);
function tr(e) {
    let { children: t, title: n, onClickViewAll: a } = e;
    return (0, i.jsxs)("div", {
        className: tl.k,
        children: [
            (0, i.jsxs)("div", {
                className: tl.w,
                children: [
                    (0, i.jsx)(b.D, { variant: "heading-lg/medium", children: n }),
                    null != a &&
                        (0, i.jsx)(E.$, {
                            size: "sm",
                            icon: ti._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: a,
                            text: eq.intl.string(eq.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var ts = n(468489),
    tc = n(992595);
function to(e, t) {
    return e8.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function td(e) {
    let t,
        { variant: n, message: a, channelId: r, onCardClick: c } = e,
        [o, d] = l.useState(!1),
        u = "main" === n,
        m = l.useCallback(() => d(!0), []),
        f = l.useCallback(
            (e) => {
                if (
                    !(
                        (0, e0.vq)(e.target, HTMLAnchorElement) ||
                        ((0, e0.vq)(e.target, HTMLSpanElement) && (0, e0.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return c(a.id);
            },
            [c, a.id],
        ),
        h = a.media?.width != null && a.media?.height != null ? a.media.width / a.media.height : 16 / 9,
        _ = a.media?.proxyUrl ?? a.media?.url,
        g =
            (null != _
                ? null == (t = Q.A.toURLSafe(_))
                    ? null
                    : (t.searchParams.append("format", "webp"), t.toString())
                : null) ?? _;
    return (0, i.jsxs)(eA.D, {
        className: u ? ts.cG : ts.IU,
        onClick: f,
        children: [
            null != a.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? ts._v : ts.eZ,
                    children: (0, i.jsx)(e1.y, {
                        readyState: o ? et.Rv1.READY : et.Rv1.LOADING,
                        aspectRatio: h,
                        placeholder: a.media.placeholder,
                        placeholderVersion: a.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? ts.fk : ts.v,
                            alt: "",
                            draggable: !1,
                            onLoad: m,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? ts.GT : ts.s4,
                children: [
                    null != a.title &&
                        (0, i.jsx)(b.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? ts.KX : ts._N,
                            children: to(a.title, r),
                        }),
                    a.body.length > 0 &&
                        (0, i.jsx)("div", { className: s()(ts.h_, u ? ts.My : ts.Gd, tc.PT), children: to(a.body, r) }),
                    (0, i.jsxs)("div", {
                        className: ts.ov,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, e3.i$)(new Date(a.timestamp), "LL"),
                            }),
                            a.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: ts.a5,
                                    children: [
                                        (0, i.jsx)(e2.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(x.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eq.intl.currentLocale).format(
                                                a.reactionCount,
                                            ),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function tu(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: a } = (0, R.Ay)(),
        { officialInvite: r, closeModal: s, getScrollOffset: c } = eM(),
        {
            messages: o,
            guildId: d,
            channelId: u,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: a,
            } = (0, h.cf)([el.A], () => ({
                data: null != e ? el.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && el.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && el.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, l.useEffect)(() => {
                    null == e || n || el.A.isAnnouncementsFetching(e) || ei(e);
                }, [e, n]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: a }
            );
        })(t),
        m = l.useCallback(() => {
            let e = r?.guild?.id ?? d;
            null != e &&
                null != u &&
                (n(B.Ws.Announcements),
                e9.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                s(),
                ta({ invite: r, guildId: e, channelId: u, analyticsLocationStack: a }));
        }, [n, s, c, r, d, u, a, t]),
        f = l.useCallback(
            (e) => {
                let i = r?.guild?.id ?? d;
                null != i &&
                    null != u &&
                    (n(B.Ws.AnnouncementsItem),
                    e9.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                    s(),
                    ta({ invite: r, guildId: i, channelId: u, messageId: e, analyticsLocationStack: a }));
            },
            [n, s, c, r, d, u, a, t],
        );
    if (null == u || 0 === o.length) return null;
    let _ = 2 !== o.length,
        g = _ ? o[0] : null,
        p = _ ? o.slice(1) : o;
    return (0, i.jsx)(tr, {
        title: eq.intl.string(eq.t.B0BV3Y),
        onClickViewAll: m,
        children: (0, i.jsxs)("div", {
            className: ts.f3,
            children: [
                null != g && (0, i.jsx)(td, { variant: "main", message: g, channelId: u, onCardClick: f }),
                p.length > 0 &&
                    (0, i.jsx)(e5.A, {
                        gap: 16,
                        children: p.map((e) =>
                            (0, i.jsx)(td, { variant: "small", message: e, channelId: u, onCardClick: f }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var tm = n(349288),
    tf = n(975807),
    th = n(194362);
function t_(e) {
    let { game: t, trackAction: n } = e,
        a = l.useCallback(async () => {
            n(B.Ws.ClaimGame);
            let e = await (0, th.a)(et.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tf.A)(e);
        }, [n]),
        r = l.useCallback((e) => (0, i.jsx)(tm.Anchor, { onClick: a, children: e }), [a]);
    return t.linkedApplications?.some((e) => e.type === K.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(x.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eq.intl.format(eq.t.KAjfKl, { claimLink: r }),
          });
}
var tg = n(240248);
let tp = [
    ef.V.OFFICIAL,
    ef.V.FACEBOOK,
    ef.V.TWITTER,
    ef.V.INSTAGRAM,
    ef.V.YOUTUBE,
    ef.V.BLUESKY,
    ef.V.REDDIT,
    ef.V.TWITCH,
];
var tx = n(808380);
let tb = [tx.Y.DESKTOP, tx.Y.XBOX, tx.Y.PLAYSTATION, tx.Y.NINTENDO];
function tE(e) {
    return l.useMemo(() => {
        let t = new Set(e.platforms),
            n = [...t];
        return (
            !t.has(tx.Y.DESKTOP) && (t.has(tx.Y.MACOS) || t.has(tx.Y.LINUX)) && n.push(tx.Y.DESKTOP),
            n.filter((e) => tb.includes(e)).sort((e, t) => tb.indexOf(e) - tb.indexOf(t))
        );
    }, [e.platforms]);
}
var tv = n(998445),
    tA = n(274997),
    tI = n(80500),
    tN = n(319745),
    tS = n(488225),
    tj = n(967492),
    tC = n(72265),
    ty = n(454346),
    tR = n(37948),
    tT = n(141535),
    tL = n(262420);
let tk = [ef.V.OFFICIAL, ef.V.TWITTER, ef.V.YOUTUBE],
    tM = { colorClass: tL.wP },
    tO = { size: "xs", colorClass: tL.wP };
function tw(e, t) {
    switch (e.category) {
        case ef.V.OFFICIAL:
            return { icon: (0, i.jsx)(tv.L, { ...t }), action: B.Ws.WebsiteLink, title: eq.intl.string(eq.t.fOUKvg) };
        case ef.V.TWITTER:
            return { icon: (0, i.jsx)(tA.p, { ...t }), action: B.Ws.XLink, title: eq.intl.string(eq.t.INic4y) };
        case ef.V.YOUTUBE:
            return { action: B.Ws.YouTubeLink, icon: (0, i.jsx)(tI.C, { ...t }), title: eq.intl.string(eq.t.lNmxbE) };
        case ef.V.FACEBOOK:
            return { icon: (0, i.jsx)(tN.Z, { ...t }), action: B.Ws.FacebookLink, title: eq.intl.string(eq.t.FjyREK) };
        case ef.V.INSTAGRAM:
            return {
                icon: (0, i.jsx)(tS.L, { ...t }),
                action: B.Ws.InstagramLink,
                title: eq.intl.string(eq.t["cgR+IK"]),
            };
        case ef.V.BLUESKY:
            return {
                icon: (0, i.jsx)(tj.a, { ...t }),
                action: B.Ws.BlueskyLink,
                title: eq.intl.string(eq.t["D/PHq5"]),
            };
        case ef.V.REDDIT:
            return { icon: (0, i.jsx)(tC.T, { ...t }), action: B.Ws.RedditLink, title: eq.intl.string(eq.t["Hgb+fc"]) };
        case ef.V.TWITCH:
            return { icon: (0, i.jsx)(ty.a, { ...t }), action: B.Ws.TwitchLink, title: eq.intl.string(eq.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function tP(e) {
    let { website: t, trackAction: n } = e,
        { action: a, icon: r, title: s } = tw(t, tM),
        c = l.useCallback(() => {
            n(a);
        }, [a, n]);
    return (0, i.jsx)(_.m, {
        text: s,
        children: (0, i.jsx)(tm.Anchor, {
            onClick: c,
            className: tL.yO,
            href: t.url,
            target: "_blank",
            "aria-label": s,
            children: r,
        }),
    });
}
let tG = function (e) {
    let { game: t, trackAction: n } = e;
    if (null == t.websites) return null;
    let a = t.websites
        .filter((e) => {
            let { category: t } = e;
            return tk.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === a.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(b.D, {
                      className: tT.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eq.intl.string(eq.t["Oj3o1/"]),
                  }),
                  (0, i.jsx)("div", {
                      className: s()(tT.nM, tT.mX),
                      children: a.map((e) => (0, i.jsx)(tP, { website: e, trackAction: n }, e.url)),
                  }),
              ],
          });
};
function tD(e) {
    let { website: t, trackAction: n } = e,
        a = (0, tR.A)(),
        { action: r, icon: s, title: c } = tw(t, tO),
        o = l.useCallback(() => {
            n(r), a(t.url);
        }, [r, a, n, t.url]);
    return (0, i.jsx)(_.m, {
        text: c,
        children: (0, i.jsx)(eA.D, { onClick: o, className: tL.yO, title: c, children: s }),
    });
}
var tU = n(31300),
    tF = n(802516),
    tV = n(22363),
    tW = n(418524);
function tB(e) {
    switch (e) {
        case tx.Y.DESKTOP:
            return eq.intl.string(eq.t.KT6uCJ);
        case tx.Y.XBOX:
            return eq.intl.string(eq.t.DDWUJp);
        case tx.Y.PLAYSTATION:
            return eq.intl.string(eq.t.fzMz2s);
        case tx.Y.NINTENDO:
            return eq.intl.string(eq.t.AMW8je);
        default:
            return null;
    }
}
function tH(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case tx.Y.DESKTOP:
            return (0, i.jsx)(tU.k, { size: "xs", ...n });
        case tx.Y.XBOX:
            return (0, i.jsx)(tF.Y, { size: "xs", ...n });
        case tx.Y.PLAYSTATION:
            return (0, i.jsx)(tV.X, { size: "xs", ...n });
        case tx.Y.NINTENDO:
            return (0, i.jsx)(tW.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tY(e) {
    let { platforms: t } = e;
    return (0, i.jsx)("div", {
        className: s()(tT.nM, tT.Lc),
        style: { alignItems: "center" },
        children: t.map((e) => (0, i.jsx)(_.m, { text: tB(e), children: (0, i.jsx)(tH, { platform: e }) }, e)),
    });
}
function tz(e) {
    let { platform: t } = e;
    return (0, i.jsx)(_.m, { text: tB(t), children: (0, i.jsx)(tH, { platform: t }) }, t);
}
function tX(e) {
    let { game: t, className: n } = e,
        a = tE(t);
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: s()(tT.fi, tT.iH, n),
              children: a.length > 0 && (0, i.jsx)(tY, { platforms: a }),
          });
}
var tK = n(424994),
    tZ = n(60541);
function tq() {
    return (0, i.jsx)(x.E, { variant: "text-sm/normal", color: "text-subtle", children: eq.intl.string(eq.t.GruYxV) });
}
let tJ = function (e) {
    let { game: t, trackAction: n } = e,
        a = l.useMemo(() => t.genres.map(V.du).join(", "), [t]),
        r = t.getCompanyByRole(K.wk.PUBLISHER),
        s = t.getCompanyByRole(K.wk.DEVELOPER),
        c = r.map((e) => e.name).join(", "),
        o = s.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        u = tE(t),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tp.includes(t);
            })
            .sort((e, t) => tp.indexOf(e.category) - tp.indexOf(t.category)),
        f = !(0, tg.uJ)(a),
        h = !(0, tg.uJ)(c),
        _ = !(0, tg.uJ)(o),
        g = !(0, tg.uJ)(d),
        p = u.length > 0,
        E = m.length > 0 && !m.every((e) => (0, tg.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tZ.uW,
        children: [
            (0, i.jsx)("div", {
                className: tZ.Gf,
                children: (0, i.jsx)(b.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eq.intl.string(eq.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tZ.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tZ.J1,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eq.intl.string(eq.t.pDgwYB) : eq.intl.string(eq.t.mjFKqn),
                            }),
                            f
                                ? (0, i.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tZ.Gu,
                                      children: a,
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tZ.J1,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eq.intl.string(eq.t.Hc7Enk) : eq.intl.string(eq.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tZ.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tZ.J1,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? eq.intl.string(eq.t.KATEJB) : eq.intl.string(eq.t.na3PT0),
                            }),
                            _
                                ? (0, i.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tZ.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tZ.J1,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eq.intl.string(eq.t.H3mPDT),
                            }),
                            g
                                ? (0, i.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tZ.Gu,
                                      children: e3.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tZ.J1,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? eq.intl.string(eq.t.PNqxNe) : eq.intl.string(eq.t["UxAag+"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: tZ.Gu,
                                      children: u.map((e) => (0, i.jsx)(tz, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tZ.J1,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eq.intl.string(eq.t["Oj3o1/"]),
                            }),
                            E
                                ? (0, i.jsx)("div", {
                                      className: tZ.Gu,
                                      children: m.map((e) => (0, i.jsx)(tD, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(tq, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tZ.J1,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eq.intl.string(eq.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tZ.Gu,
                                children: eq.intl.format(eq.t.XPFZVl, { igdbLink: tK.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tZ.OQ, children: (0, i.jsx)(t_, { game: t, trackAction: n }) }),
        ],
    });
};
function t$(e) {
    let { invite: t, trackAction: n, closeModal: a } = e,
        r = l.useCallback(() => {
            t?.guild != null && (0, eL.X)({ guildId: t.guild.id });
        }, [t]),
        s = l.useCallback(() => {
            t?.guild != null && (n(B.Ws.GameShop), (0, eL.default)({ invite: t }), a());
        }, [a, t, n]);
    return new Set(t?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, i.jsx)(E.$, {
              variant: "primary",
              text: eq.intl.string(eq.t.v8UpgE),
              icon: eC.U,
              onClick: s,
              onMouseDown: r,
              fullWidth: !0,
          })
        : null;
}
var tQ = n(369606),
    t0 = n(8208);
function t1(e) {
    let { game: t, show: n, onClose: a, trackAction: l } = e,
        r = t.name,
        c = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t0.y5,
        children: [
            (0, i.jsx)("div", { className: s()(t0.nI, n && t0.hD) }),
            (0, i.jsxs)("div", {
                className: s()(t0.A1, n && t0.g8),
                children: [
                    null != c && (0, i.jsx)("img", { src: c, alt: "", className: t0.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t0.hm,
                        children: [
                            (0, i.jsx)(b.D, { variant: "heading-md/semibold", lineClamp: 1, children: r }),
                            null != t.l30Rank && (0, i.jsx)(t3, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(eQ, { game: t, onClose: a, className: t0.HK, trackAction: l }),
        ],
    });
}
function t2(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: s()(t0.nI, t0.Jn, t && t0.hD) });
}
let t5 = l.forwardRef(function (e, t) {
    let { game: n } = e,
        [a] = l.useState(() => Math.random()),
        r = l.useMemo(() => {
            if (null != n.bannerHash)
                return F.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(a * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n.id, n.bannerHash, n.screenshotUrls, a]);
    return (0, tg.uJ)(r)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t0.y1, style: { backgroundImage: `url("${r}")` } }),
                  (0, i.jsx)("div", { className: t0.N4 }),
              ],
          });
});
function t8(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(V.du).join(", ");
    return (0, tg.uJ)(n) ? null : (0, i.jsx)(x.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
let t3 = (e) => {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t0.Qc,
        children: [
            (0, i.jsx)(tQ.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(x.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eq.intl.formatToPlainString(eq.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function t9(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: n ? t0.n8 : t0.FS,
        children: (0, i.jsx)(ex.A, { game: t, className: t0.xe, size: ex.w.LARGE }),
    });
}
let t6 = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: a } = e,
        { isTwoColumn: r } = eM(),
        c = l.useRef(null),
        o = l.useRef(null);
    l.useEffect(() => {
        let e = c.current,
            t = o.current;
        if (null == e || null == t) return;
        let a = (function (e, t) {
            let n = 0,
                a = e;
            for (; null != a && a !== t; ) (n += a.offsetTop), (a = a.offsetParent);
            return n;
        })(t, e);
        a > 0 && n?.(a);
    }, [n]);
    let d = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: s()(t0.ap, a && t0.Gh),
        children: [
            r &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t0.Tf,
                    children: (0, i.jsx)(ex.A, { game: t, className: t0.w$, size: ex.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t0.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(t3, { rank: t.l30Rank }),
                    (0, i.jsx)(b.D, { ref: o, variant: "heading-xxl/semibold", children: d }),
                    (0, i.jsx)(t8, { game: t }),
                ],
            }),
        ],
    });
};
var t7 = n(141628),
    t4 = n(289363),
    ne = n(448682);
function nt(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: a,
            hasAlreadyLinked: r,
            canStartAuthorization: s,
            startAuthorization: c,
            connectionApp: o,
            officialInvite: d,
        } = eM(),
        u = (0, h.bG)([em.default], () => em.default.getCurrentUser()),
        m = l.useCallback(() => {
            t(B.Ws.LinkAccount), c({ analyticsLocations: n });
        }, [t, c, n]);
    if (!a || null == o || !s || r || null == u) return null;
    let f = d?.guild != null ? F.Ay.getGuildSplashURL({ id: d.guild.id, splash: d.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: ne.uW,
        children: [
            (0, i.jsx)(b.D, {
                className: ne.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eq.intl.string(eq.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: ne.kL,
                children: [
                    null != f
                        ? (0, i.jsx)("img", { className: ne.ll, src: f, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: ne.sB, children: (0, i.jsx)(t4.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: ne.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ne.FS,
                                children: [
                                    (0, i.jsx)(b.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eq.intl.formatToPlainString(eq.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(x.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eq.intl.string(eq.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(E.$, {
                                variant: "secondary",
                                icon: t7.A,
                                text: eq.intl.string(eq.t.jynBQ5),
                                onClick: m,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var nn = n(80687),
    na = n(477155),
    ni = n(935286),
    nl = n(775602),
    nr = n(898736),
    ns = n(248643),
    nc = n(256905),
    no = n(34337),
    nd = n(90721),
    nu = n(616337),
    nm = n(381641);
function nf(e) {
    let { game: t, trackAction: n } = e,
        a = l.useRef(null),
        r = (0, nr._)(t),
        s = l.useMemo(() => {
            let e = r.map((e) => ({ url: e, type: "IMAGE" }));
            return [...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [r, t.screenshotUrls]),
        c = s.length > 2;
    function o(e) {
        if (null == a.current) return;
        let t = a.current.getScrollerState().scrollLeft;
        a.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === s.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(b.D, {
                      className: tT.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: eq.intl.string(eq.t.bNdK5x),
                  }),
                  (0, i.jsxs)("div", {
                      className: c ? nu.DA : nu.pZ,
                      children: [
                          (0, i.jsx)(S.zC, {
                              ref: a,
                              className: nu.ec,
                              orientation: "horizontal",
                              children: s.map((e, t) =>
                                  (0, i.jsx)(
                                      eA.D,
                                      {
                                          className: nu.gw,
                                          focusProps: { offset: 4, ringClassName: nu.jR },
                                          onClick: () => {
                                              n(B.Ws.ClickImage),
                                                  (0, nc.R)({
                                                      items: s,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, i.jsx)("img", {
                                              src: e.url,
                                              className: nu.Zm,
                                              alt: eq.intl.formatToPlainString(eq.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          c &&
                              (0, i.jsxs)("div", {
                                  className: nu.NA,
                                  children: [
                                      (0, i.jsx)("div", { className: nu.EJ }),
                                      (0, i.jsx)(eA.D, {
                                          className: nu.G9,
                                          onClick: () => o(-1),
                                          children: (0, i.jsx)(na.r, { className: nu.UE, color: "currentColor" }),
                                      }),
                                      (0, i.jsx)("div", { className: nu.Pj }),
                                      (0, i.jsx)(eA.D, {
                                          className: nu.G9,
                                          onClick: () => o(1),
                                          children: (0, i.jsx)(ni.E, { className: nu.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let nh = l.memo(function (e) {
        let { item: t, index: n, isSelected: a, isPlaying: r, onSelect: c, gameName: o } = e,
            d = l.useCallback(() => c(n), [c, n]);
        return (0, i.jsx)(eA.D, {
            className: s()(nm.JS, a && nm.Y4),
            onClick: d,
            children: (0, i.jsxs)("div", {
                className: nm.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: nm.xn,
                        alt: eq.intl.formatToPlainString(eq.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: nm.UZ,
                            children: (0, i.jsx)(nn.D, { playing: a && r, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    n_ = l.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                videoRef: a,
                mediaPlayerRef: r,
                onPlay: s,
                onPause: c,
                onFullscreenChange: o,
            } = e,
            d = l.useRef(null);
        return (
            (0, nd.A)({ videoRef: a, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: nm.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nm.tN,
                        children: (0, i.jsx)(ns.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: !n,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: no.bU,
                            onPlay: s,
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: nm.T9,
                            videoRef: a,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function ng(e) {
    let { game: t, trackAction: n } = e,
        [a, r] = l.useState(0),
        [s, c] = l.useState(null),
        [o, d] = l.useState(t.screenshotUrls),
        u = l.useRef(null),
        m = l.useRef(null),
        f = (0, h.bG)([nl.A], () => nl.A.useReducedMotion);
    o !== t.screenshotUrls && (d(t.screenshotUrls), r(0));
    let _ = l.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, X.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, X.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        g = _.length > 0 ? Math.min(a, _.length - 1) : 0,
        p = _[g],
        x = p?.type === "VIDEO",
        b = l.useCallback(
            (e) => {
                let t = _[g],
                    n = _[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), r(e);
            },
            [_, g],
        ),
        [E, v] = l.useState(!1),
        A = l.useRef(null),
        I = l.useCallback(() => {
            n(x ? B.Ws.ClickTrailer : B.Ws.ClickImage);
            let e = u.current,
                t = A.current,
                a = null != e && !e.paused,
                i = e?.muted ?? !0,
                l = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = _.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === g;
                    return { ...e, autoPlay: !!n && a, autoMute: !n || i, initialTimeSec: n ? l : void 0, videoRef: m };
                }
                return e;
            });
            (0, nc.R)({
                items: s,
                startingIndex: g,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = m.current,
                        t = A.current,
                        n = null != e ? !e.paused : a;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        v(n);
                },
            });
        }, [n, _, g, x]),
        N = l.useCallback(() => v(!0), []),
        S = l.useCallback(() => v(!1), []),
        j = l.useCallback(() => c(null), []),
        C = l.useCallback(
            (e) => {
                e && I();
            },
            [I],
        );
    return 0 === _.length
        ? null
        : (0, i.jsxs)("div", {
              className: nm.kL,
              children: [
                  x
                      ? (0, i.jsx)("div", {
                            className: nm.ND,
                            children: (0, i.jsx)(
                                n_,
                                {
                                    item: p,
                                    reducedMotion: f,
                                    videoRef: u,
                                    mediaPlayerRef: A,
                                    onPlay: N,
                                    onPause: S,
                                    onFullscreenChange: C,
                                },
                                `${g}-${p.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: nm.wp,
                            children: [
                                null != s &&
                                    !f &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nm.Jy,
                                            onAnimationEnd: j,
                                            children: (0, i.jsx)("img", { src: s, className: nm.Db, alt: "" }),
                                        },
                                        s,
                                    ),
                                (0, i.jsx)("div", { className: nm.QN }),
                                (0, i.jsx)(eA.D, {
                                    className: nm.gv,
                                    onClick: I,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: p.url,
                                            className: nm.c8,
                                            alt: eq.intl.formatToPlainString(eq.t.COYYrn, { game: t.name }),
                                        },
                                        p.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(e5.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: _.map((e, n) =>
                          (0, i.jsx)(
                              nh,
                              { item: e, index: n, isPlaying: E, isSelected: n === g, onSelect: b, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var np = n(847374),
    nx = n(187322),
    nb = n(110384),
    nE = n(734057),
    nv = n(309010),
    nA = n(562153),
    nI = n(420706),
    nN = n(322789),
    nS = n(506326),
    nj = n(478481);
let nC = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: a,
            onRequestOpen: r,
            disableActivityProfileLinks: c,
            customCTA: o,
            popoutClassname: d,
            popoutPosition: u = "right",
        } = e,
        m = l.useRef(null),
        f = (0, h.bG)([nv.A, nE.A], () => nE.A.getChannel(nv.A.getChannelId())),
        _ = (0, h.bG)([em.default], () => em.default.getUser(t.author_id)),
        { nick: g, avatar: p } = l.useMemo(() => {
            let e = _?.getAvatarURL(f?.guild_id, 48, !1);
            return { nick: nA.Ay.getName(f?.guild_id, f?.id, _), avatar: e };
        }, [_, f]);
    return null == _
        ? null
        : (0, i.jsx)(eb.Y, {
              targetElementRef: m,
              position: u,
              renderPopout: (e) => {
                  let { closePopout: l, updatePosition: r } = e;
                  return (0, i.jsx)("div", {
                      className: d,
                      children: (0, i.jsx)(nI.Oo, {
                          entry: t,
                          closePopout: l,
                          updatePopoutPosition: r,
                          onReaction: () => {
                              a?.(), n(), l();
                          },
                          onUserPopoutClosed: () => l(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: c,
                      }),
                  });
              },
              positionKey: `'content-entry-${t.id}`,
              onRequestOpen: () => {
                  r?.();
              },
              children: (e) =>
                  (0, i.jsx)(eA.D, {
                      innerRef: m,
                      ...e,
                      className: nj.GA,
                      children: (0, i.jsx)(nx.vN, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("img", {
                                      className: nj.my,
                                      src: p,
                                      alt: eq.intl.formatToPlainString(eq.t.IzVXxY, { userName: g }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: nj.Su,
                                      children: (0, i.jsxs)("div", {
                                          className: s()(tT.fi, tT.Kt),
                                          children: [
                                              (0, i.jsx)(x.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: g,
                                              }),
                                              (0, i.jsx)(nS.mG, {
                                                  location: nS.N5.APP_LAUNCHER,
                                                  children: nN.n.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != o
                                      ? o
                                      : (0, i.jsx)("div", {
                                            className: nj.Br,
                                            children: (0, i.jsx)(nb.W, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
function ny(e) {
    let { entry: t, viewId: n, officialGuildId: a, source: l } = e;
    return (0, i.jsx)(nC, {
        ...e,
        onReaction: () => {
            (0, B.Tn)({
                action: B.Ws.SendMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: a,
                source: l,
            });
        },
        onRequestOpen: () => {
            (0, B.Tn)({
                action: B.Ws.ClickMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: a,
                source: l,
            });
        },
    });
}
var nR = n(759203);
function nT(e) {
    let { entries: t, viewId: n, officialGuildId: a, onClose: r, source: c } = e,
        o = t.length > 7,
        [d, u] = l.useState(!1),
        m = l.useMemo(() => t.slice(0, o && !d ? 6 : void 0), [t, o, d]);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(b.D, {
                className: tT.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: eq.intl.string(eq.t.ak8OHk),
            }),
            0 === t.length
                ? (0, i.jsx)(x.E, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: nR.p$,
                      children: eq.intl.string(eq.t.R5fYVO),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: s()(nR.yz, { [nR.T6]: o && !d }),
                              children: (0, i.jsx)("div", {
                                  className: tT.fi,
                                  children: m.map((e) =>
                                      (0, i.jsx)(
                                          ny,
                                          { entry: e, viewId: n, onClose: r, officialGuildId: a, source: c },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          o &&
                              !d &&
                              (0, i.jsxs)(eA.D, {
                                  className: nR.ND,
                                  onClick: () => u(!0),
                                  children: [
                                      (0, i.jsx)(x.E, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: eq.intl.string(eq.t.yohc6E),
                                      }),
                                      (0, i.jsx)(np.a, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
var nL = n(714991),
    nk = n(127537),
    nM = n(149225);
function nO(e) {
    let { game: t, trackAction: n, onInviteResolved: a, closeModal: r } = e,
        [c, o] = l.useState(),
        d = (0, h.bG)([e_.A], () => c?.guild?.id != null && e_.A.isMember(c?.guild?.id)),
        u = l.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ef.V.DISCORD;
                }),
            [t.websites],
        );
    l.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != c && c.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, eh.A)(t);
                !0 !== e.banned && (o(e.invite), null != e.invite && a?.(e.invite));
            }
        };
        null != u && e(u.url);
    }, [u, a, c]);
    let m = l.useCallback(() => {
        null != c &&
            (n(B.Ws.JoinOfficialServer),
            r(),
            Y.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: c, code: c.code, context: et.BRT.APP }));
    }, [c, n, r]);
    if (null == c || null == c.guild || !c.guild.features.includes(et.GuildFeatures.VERIFIED)) return null;
    let f = F.Ay.getGuildIconURL({ id: c.guild.id, icon: c.guild.icon, size: 32 });
    return (0, i.jsxs)("div", {
        className: tT.fi,
        children: [
            (0, i.jsx)(b.D, {
                className: tT.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: eq.intl.string(eq.t.kBDZSL),
            }),
            (0, i.jsxs)("div", {
                className: s()(tT.nM, tT.mX),
                children: [
                    (0, i.jsx)("img", {
                        className: nk.$f,
                        src: f,
                        alt: eq.intl.formatToPlainString(eq.t.xm6W9D, { guildName: c.guild.name }),
                    }),
                    (0, i.jsxs)("div", {
                        className: nk.U5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: nk.YS,
                                children: [
                                    (0, i.jsx)(x.E, { variant: "text-sm/semibold", children: c.guild.name }),
                                    (0, i.jsx)(nL.A, { guild: c.guild, size: 16 }),
                                ],
                            }),
                            null != c.approximate_member_count &&
                                (0, i.jsx)(x.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: eq.intl.format(eq.t.zRl6XR, { count: c.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(E.$, {
                variant: "secondary",
                text: d ? eq.intl.string(eq.t.cEnaWx) : eq.intl.string(eq.t.XpeFYr),
                onClick: m,
                fullWidth: !0,
            }),
        ],
    });
}
function nw(e) {
    let { trackAction: t, closeModal: n } = e,
        { canStartAuthorization: a, hasAlreadyLinked: r, officialInvite: s, isMember: c } = eM(),
        o = l.useCallback(() => {
            null != s &&
                (t(B.Ws.JoinOfficialServer),
                n(),
                Y.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: et.BRT.APP }));
        }, [s, t, n]);
    if (null == s || null == s.guild || !s.guild.features.includes(et.GuildFeatures.VERIFIED)) return null;
    let d = F.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        u = F.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (a && !r) || null == u,
        f = (0, i.jsx)("img", {
            className: nM.$f,
            src: d,
            alt: eq.intl.formatToPlainString(eq.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        h = m ? nM.To : nM.Kt,
        _ = m ? nM.yj : nM.FS;
    return (0, i.jsxs)("div", {
        className: nM.uW,
        children: [
            (0, i.jsx)(b.D, {
                className: nM.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eq.intl.string(eq.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: nM.kL,
                children: [
                    !m && null != u && (0, i.jsx)("img", { className: nM.ll, src: u, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: nM.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: h,
                                children: [
                                    m
                                        ? f
                                        : (0, i.jsx)("div", {
                                              className: nM._C,
                                              children: (0, i.jsx)("div", { className: nM.kW, children: f }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: _,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: nM.YS,
                                                children: [
                                                    (0, i.jsx)(nL.A, { guild: s.guild, size: 16 }),
                                                    (0, i.jsx)(b.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, tg.uJ)(s.guild?.description) &&
                                                (0, i.jsx)(x.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: nM.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: nM.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: nM._o }),
                                                                      (0, i.jsx)(x.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eq.intl.format(eq.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: nM.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: nM.jk }),
                                                                      (0, i.jsx)(x.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eq.intl.format(eq.t.zRl6XR, {
                                                                              count: s.approximate_member_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                      ],
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(E.$, {
                                variant: "secondary",
                                text: c ? eq.intl.string(eq.t.cEnaWx) : eq.intl.string(eq.t.XpeFYr),
                                onClick: o,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nP(e) {
    let { game: t } = e,
        n = (t.companies ?? []).filter((e) => e.roles.includes(K.wk.PUBLISHER));
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(b.D, {
                      className: tT.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eq.intl.string(eq.t["4Byy/G"]),
                  }),
                  (0, i.jsx)(x.E, { variant: "text-sm/normal", children: n.map((e) => e.name).join(", ") }),
              ],
          });
}
var nG = n(49381),
    nD = n(223273);
function nU(e, t) {
    if (null == e || null == t || t < 10) return nD.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 ? nD.vI.POSITIVE : t < 500 || e < 95 ? nD.vI.VERY_POSITIVE : nD.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nD.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nD.vI.MIXED;
    if (e >= 20) return nD.vI.MOSTLY_NEGATIVE;
    else if (t < 50) return nD.vI.NEGATIVE;
    else if (t < 500) return nD.vI.VERY_NEGATIVE;
    return nD.vI.OVERWHELMINGLY_NEGATIVE;
}
function nF(e) {
    switch (e) {
        case nD.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nD.vI.OVERWHELMINGLY_POSITIVE:
        case nD.vI.VERY_POSITIVE:
        case nD.vI.POSITIVE:
        case nD.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nD.vI.MIXED:
            return "steam-review-text-mixed";
        case nD.vI.MOSTLY_NEGATIVE:
        case nD.vI.NEGATIVE:
        case nD.vI.VERY_NEGATIVE:
        case nD.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
let nV = (0, er.mj)({
    name: "2026-04-steam-reviews-v2",
    kind: "user",
    defaultConfig: { recentEnabled: !1, englishEnabled: !1 },
    variations: {
        1: { recentEnabled: !0, englishEnabled: !1 },
        2: { recentEnabled: !1, englishEnabled: !0 },
        3: { recentEnabled: !0, englishEnabled: !0 },
    },
});
var nW =
        (((a = {})[(a.MIGHTY = 1)] = "MIGHTY"),
        (a[(a.STRONG = 2)] = "STRONG"),
        (a[(a.FAIR = 3)] = "FAIR"),
        (a[(a.WEAK = 4)] = "WEAK"),
        a),
    nB = n(778591);
function nH(e) {
    let { rating: t, strokeColor: n } = e,
        a = 2 * Math.PI * 16,
        l = Math.min(Math.max(t, 0), 100) / 100,
        r = l * a;
    return (0, i.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - l) * 360) / 2}deg)` },
        children: (0, i.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${r} ${a - r}`,
        }),
    });
}
var nY = n(99392);
function nz(e) {
    let { url: t, trackAction: n, title: a, rating: r, ratingCount: s, tooltipVariant: c = "all" } = e,
        o = (0, tR.A)(),
        d = nU(r, s),
        u = nF(d),
        m = l.useCallback(() => {
            n(B.Ws.SteamReviews), o(t);
        }, [o, n, t]);
    return (0, i.jsx)(eA.D, {
        onClick: m,
        className: nY.nf,
        role: "link",
        "aria-label": eq.intl.string(eq.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: nY.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: nY.tN,
                    children: [
                        (0, i.jsx)(nG.N, { size: "sm", color: eN.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(b.D, { variant: "heading-sm/medium", color: "text-strong", children: a }),
                    ],
                }),
                (0, i.jsx)(
                    _.m,
                    {
                        text:
                            d === nD.vI.NO_USER_REVIEWS
                                ? eq.intl.string(eq.t.CLMt8J)
                                : eq.intl
                                      .format(
                                          "recent" === c
                                              ? eq.t.TzvC0k
                                              : "localized" === c
                                                ? eq.t.EOfrwm
                                                : eq.t["lzANJ/"],
                                          { rating: r, rating_count: s?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: nY.Z0,
                            children: [
                                (0, i.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    children: (function (e) {
                                        switch (e) {
                                            case nD.vI.NO_USER_REVIEWS:
                                                return eq.intl.string(eq.t.CLMt8J);
                                            case nD.vI.OVERWHELMINGLY_POSITIVE:
                                                return eq.intl.string(eq.t["75sx1S"]);
                                            case nD.vI.VERY_POSITIVE:
                                                return eq.intl.string(eq.t["EkOVg+"]);
                                            case nD.vI.POSITIVE:
                                                return eq.intl.string(eq.t.ZUkFtr);
                                            case nD.vI.MOSTLY_POSITIVE:
                                                return eq.intl.string(eq.t.M7Z09a);
                                            case nD.vI.MIXED:
                                                return eq.intl.string(eq.t.c8yuHR);
                                            case nD.vI.MOSTLY_NEGATIVE:
                                                return eq.intl.string(eq.t.H0MSjG);
                                            case nD.vI.NEGATIVE:
                                                return eq.intl.string(eq.t.vpLrgz);
                                            case nD.vI.VERY_NEGATIVE:
                                                return eq.intl.string(eq.t["5spYuX"]);
                                            case nD.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eq.intl.string(eq.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != s &&
                                    d !== nD.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(x.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eq.intl
                                            .format(eq.t.sgIoin, { rating_count: s.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${c}`,
                ),
            ],
        }),
    });
}
function nX(e) {
    let { game: t, url: n, trackAction: a } = e,
        { reviews: r } = t,
        s = r?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = s.tier,
        o = s.topCriticRating ?? -1,
        d = s.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, tR.A)(),
        f = l.useCallback(() => {
            a(B.Ws.OpenCriticReviews), m(n);
        }, [m, a, n]);
    return (0, i.jsx)(eA.D, {
        onClick: f,
        className: nY.nf,
        role: "link",
        "aria-label": eq.intl.string(eq.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: nY.Ur,
            children: [
                (0, i.jsx)(b.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eq.intl.string(eq.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: nY.WA,
                    children: [
                        null != c ? (0, i.jsx)(nK, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, i.jsx)(nZ, { rating: o, tier: c }) : null,
                        u
                            ? (0, i.jsx)(x.E, {
                                  variant: "text-xs/medium",
                                  color: nF(nD.vI.NO_USER_REVIEWS),
                                  children: eq.intl.string(eq.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nK(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nW.MIGHTY:
                    return eq.intl.string(eq.t.aZej2g);
                case nW.STRONG:
                    return eq.intl.string(eq.t.MLxnSg);
                case nW.FAIR:
                    return eq.intl.string(eq.t["3f19KA"]);
                case nW.WEAK:
                    return eq.intl.string(eq.t.jtVgSh);
            }
        })(t),
        a = (function (e) {
            switch (e) {
                case nW.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nW.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nW.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nW.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        _.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: nY.TE,
                children: (0, i.jsx)("img", { src: a, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nZ(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: a, backgroundColor: l } = (function (e) {
            let t = "";
            switch (e) {
                case nW.MIGHTY:
                    t = "#fc430a";
                    break;
                case nW.STRONG:
                    t = "#9e00b4";
                    break;
                case nW.FAIR:
                    t = "#4aa1ce";
                    break;
                case nW.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        _.m,
        {
            text: eq.intl.string(eq.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: nY.TE,
                style: { backgroundColor: l },
                children: [
                    (0, i.jsx)(nH, { rating: t, strokeColor: a }),
                    (0, i.jsx)(x.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: nY.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nq = function (e) {
    var t;
    let { game: n, trackAction: a } = e,
        l = (0, nB.I)(n.id),
        r = n.opencriticUrl,
        s = nV.useConfig({ location: "GameProfileReviews" }),
        c = s.recentEnabled || s.englishEnabled,
        o = n.steamReleaseStatus !== m.Y.RETIRED_ABANDONED && null != l,
        d = n.reviews?.steam,
        u = nU(d?.recentRating, d?.recentRatingCount),
        f = o && s.recentEnabled && u !== nD.vI.NO_USER_REVIEWS,
        h =
            s.englishEnabled &&
            null != (t = d) &&
            null != t.localizedRating &&
            null != t.localizedRatingCount &&
            null != t.ratingCount &&
            t.localizedRatingCount >= 200 &&
            t.ratingCount >= 2e3,
        _ = h ? d?.localizedRating : d?.rating,
        g = h ? d?.localizedRatingCount : d?.ratingCount,
        p = c ? (h ? eq.t["aWb+V4"] : eq.t["8e4LiB"]) : eq.t.whmopT,
        x = n.reviews?.opencritic != null && null != r;
    return o || f || x
        ? (0, i.jsxs)("div", {
              className: nY.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: nY.Gf,
                      children: (0, i.jsx)(b.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eq.intl.string(eq.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: nY.kL,
                      children: [
                          f && null != l
                              ? (0, i.jsx)("div", {
                                    className: nY.WH,
                                    children: (0, i.jsx)(nz, {
                                        url: l,
                                        trackAction: a,
                                        title: eq.intl.string(eq.t.MQGNsN),
                                        rating: d?.recentRating,
                                        ratingCount: d?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          o && null != l
                              ? (0, i.jsx)("div", {
                                    className: nY.WH,
                                    children: (0, i.jsx)(nz, {
                                        url: l,
                                        trackAction: a,
                                        title: eq.intl.string(p),
                                        rating: _,
                                        ratingCount: g,
                                        tooltipVariant: h ? "localized" : "all",
                                    }),
                                })
                              : null,
                          x && null != r
                              ? (0, i.jsx)("div", {
                                    className: nY.WH,
                                    children: (0, i.jsx)(nX, { game: n, url: r, trackAction: a }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nJ = n(29292),
    n$ = n(674658),
    nQ = n(491438),
    n0 = n(561769),
    n1 = n(758836),
    n2 = n(804163);
let n5 = l.createContext({ closeModal: () => {}, trackAction: () => {} }),
    n8 = (e) => {
        let { skuId: t, aspectRatio: n } = e,
            { product: a } = (0, n$.q)(t, !0),
            r = l.useContext(n0.v3),
            { closeModal: s, trackAction: c } = l.useContext(n5),
            o = l.useCallback(() => {
                c(B.Ws.DiscordCollectiblesShopItem),
                    s(),
                    (0, nJ.Cz)({
                        analyticsLocations: [y.A.GAME_PROFILE],
                        analyticsSource: y.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: n1.G2.CATALOG,
                    });
            }, [c, s, t]);
        if (null == a) return null;
        let { flattenProductVariants: d, ...u } = r;
        return (0, i.jsx)(n0.v3.Provider, {
            value: { flattenProductVariants: d ?? !0, ...u },
            children: (0, i.jsx)(nQ.A, {
                skuId: t,
                aspectRatio: n,
                cardClassName: n2.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function n3(e) {
    let { game: t, closeModal: n, trackAction: a } = e,
        r = (function (e) {
            let { hasFetched: t, skuIds: n } = (0, h.cf)([el.A], () => ({
                hasFetched: null != e && el.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? el.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, l.useEffect)(() => {
                    null == e || t || el.A.isShopCollectionFetching(e) || en(e);
                }, [e, t]),
                n ?? []
            );
        })(t.shopCollectionIds?.[0]),
        s = l.useCallback(() => {
            a(B.Ws.DiscordCollectiblesShop),
                n(),
                (0, nJ.Cz)({
                    analyticsLocations: [y.A.GAME_PROFILE],
                    analyticsSource: y.A.GAME_PROFILE,
                    tab: n1.G2.CATALOG,
                });
        }, [a, n]),
        c = l.useMemo(() => ({ closeModal: n, trackAction: a }), [n, a]);
    return 0 === r.length
        ? null
        : (0, i.jsx)(n5.Provider, {
              value: c,
              children: (0, i.jsx)(tr, {
                  title: eq.intl.string(eq.t["5DYPT8"]),
                  onClickViewAll: s,
                  children: (0, i.jsx)(e5.A, { gap: "md", children: r.map((e) => (0, i.jsx)(n8, { skuId: e }, e)) }),
              }),
          });
}
var n9 = n(735438),
    n6 = n.n(n9),
    n7 = n(192308),
    n4 = n(311043),
    ae = n(192389);
let at = (e) => {
    let { game: t, onClose: n, trackClick: a } = e;
    return (0, i.jsx)(_.m, {
        asContainer: !0,
        text: t.name,
        children: (0, i.jsx)(eA.D, {
            className: ae.fS,
            onClick: async () => {
                a(B.Ws.ClickSimilarGame, t.id),
                    (0, n7.openModalLazy)(() =>
                        Promise.resolve((e) => (0, i.jsx)(aD, { gameId: t.id, source: B.Ob.SimilarGames, ...e })),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, i.jsx)(ex.A, { game: t, className: ae.n1, size: ex.w.SMALL }),
        }),
    });
};
function an(e) {
    let { gameId: t, onClose: n, trackAction: a, similarGames: l, similarGamesError: r } = e,
        c = (0, h.bG)([el.A, n4.A], () => {
            let e = void 0 === el.A.getSimilarGames(t) && null == el.A.getSimilarGamesError(t),
                n = l.some((e) => n4.A.isFetching(e));
            return e || n;
        }),
        o = (0, h.yK)([n4.A], () =>
            l
                .map((e) => n4.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, ep.T_)(e))
                .slice(0, 5),
        );
    return ((0, P.I)(t), (0, P.x)(l), c && null == r)
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", { className: s()(ae.vM, tT.bV) }),
                  (0, i.jsx)("div", {
                      className: s()(tT.nM, tT.iH),
                      children: n6()
                          .range(0, 5)
                          .map((e) => (0, i.jsx)("div", { className: ae.nn }, e)),
                  }),
              ],
          })
        : (c || 0 !== o.length) && null == r
          ? (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(b.D, {
                        className: tT.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eq.intl.string(eq.t["6rLyQB"]),
                    }),
                    (0, i.jsx)("div", {
                        className: ae.D$,
                        children: o.map((e) => (0, i.jsx)(at, { game: e, onClose: n, trackClick: a }, e.id)),
                    }),
                ],
            })
          : null;
}
var aa = n(317560),
    ai = n(183802),
    al = n(627771);
function ar(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: a } = e,
        r = l.useMemo(() => {
            if (null != a)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    e.preventDefault(), a(n, i);
                };
        }, [a]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(e5.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: al.B,
                          children: (0, i.jsx)(ai.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: ai.s.SMALL,
                              analyticsLocations: n,
                              onClick: r,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function as(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: a } = eM(),
        { analyticsLocations: r } = (0, R.Ay)([y.A.GAME_PROFILE]),
        s = l.useCallback(() => {
            n?.guildId != null && (t(B.Ws.GameShop), a(), (0, eL.default)({ guildId: n.guildId }));
        }, [n, t, a]),
        c = l.useCallback(
            (e, i) => {
                let l = n?.guildId;
                null != l &&
                    (t(B.Ws.GameShopItem),
                    (0, aa.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            location.pathname.indexOf(et.BVt.CHANNELS_GAME_SHOP(l)) >= 0 && a();
                        },
                    }));
            },
            [t, a, r, n],
        );
    if (null == n) return null;
    let { skuIds: o } = n;
    return (0, i.jsx)(tr, {
        title: eq.intl.string(eq.t.WDdlUb),
        onClickViewAll: s,
        children: (0, i.jsx)(ar, { skuIds: o, analyticsLocations: r, onCardClick: c }),
    });
}
let ac = new Set(["1402418703554842694", "356877880938070016"]),
    ao = [ef.V.EPICGAMES, ef.V.STEAM, ef.V.ROBLOX, ef.V.BATTLENET, ef.V.RIOT, ef.V.MINECRAFT];
var ad = n(349361),
    au = n(924895),
    am = n(422688),
    af = n(505200),
    ah = n(695250);
let a_ = function (e) {
    switch (e.category) {
        case ef.V.STEAM:
            return {
                icon: nG.N,
                text: eq.intl.string(eq.t.FsANs4),
                ariaLabel: eq.intl.string(eq.t["P+ePTG"]),
                action: B.Ws.SteamStoreLink,
                url: e.url,
            };
        case ef.V.EPICGAMES:
            return {
                icon: ad.r,
                text: eq.intl.string(eq.t.ZbBMHa),
                ariaLabel: eq.intl.string(eq.t.BwX0UW),
                action: B.Ws.EpicStoreLink,
                url: e.url,
            };
        case ef.V.ROBLOX:
            return {
                icon: au.H,
                text: eq.intl.string(eq.t["pJ+P+h"]),
                ariaLabel: eq.intl.string(eq.t.tYxpdf),
                action: B.Ws.RobloxStoreLink,
                url: e.url,
            };
        case ef.V.BATTLENET:
            return {
                icon: am.a,
                text: eq.intl.string(eq.t["A7grp+"]),
                ariaLabel: eq.intl.string(eq.t.x9at20),
                action: B.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case ef.V.RIOT:
            return {
                icon: af.A,
                text: eq.intl.string(eq.t.h6MapL),
                ariaLabel: eq.intl.string(eq.t["528nvc"]),
                action: B.Ws.RiotStoreLink,
                url: e.url,
            };
        case ef.V.MINECRAFT:
            return {
                icon: ah.m,
                text: eq.intl.string(eq.t["HZbmO+"]),
                ariaLabel: eq.intl.string(eq.t.WWTqYn),
                action: B.Ws.MinecraftStoreLink,
                url: e.url,
            };
    }
    return null;
};
var ag = n(629004);
function ap(e) {
    let { isTwoColumn: t } = eM();
    return (0, i.jsx)("div", {
        className: ag.U,
        children: (0, i.jsx)(E.$, {
            ...e,
            variant: t ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link",
        }),
    });
}
function ax(e) {
    let t,
        n,
        a,
        i,
        r = es.useConfig({ location: "GameProfileStoreLinks" }).storeLinksEnabled,
        s =
            ((t = (0, nB.I)(e?.id)),
            (n = e?.id),
            (a = e?.websites),
            (i = e?.steamReleaseStatus),
            l.useMemo(() => {
                if (null == a || null == n) return [];
                let e = a.filter(
                    (e) =>
                        (e.category !== ef.V.EPICGAMES || !!ac.has(n)) &&
                        (e.category !== ef.V.STEAM || i !== m.Y.RETIRED_ABANDONED) &&
                        ao.includes(e.category),
                );
                return (
                    null == t ||
                        i === m.Y.RETIRED_ABANDONED ||
                        e.some((e) => e.category === ef.V.STEAM) ||
                        e.push({ category: ef.V.STEAM, url: t }),
                    e.sort((e, t) => (e.category === ef.V.STEAM ? -1 : +(t.category === ef.V.STEAM)))
                );
            }, [t, a, n, i]));
    return { storeWebsites: s, showsStoreLinks: r && s.length > 0 && null != e };
}
let ab = function (e) {
    let { game: t, trackAction: a } = e,
        r = (0, tR.A)(),
        { showsStoreLinks: s, storeWebsites: c } = ax(t),
        o = l.useMemo(() => c.map(a_).filter((e) => null != e), [c]);
    if (!s) return null;
    if (1 === o.length) {
        let [e] = o;
        return (0, i.jsx)(ap, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                a(e.action), r(e.url);
            },
        });
    }
    return (0, i.jsx)(ap, {
        text: eq.intl.string(eq.t["/hMurx"]),
        "aria-label": eq.intl.string(eq.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: a, trackAction: l } = e;
                (0, n7.openModalLazy)(async () => {
                    let { default: e } = await n.e("76758").then(n.bind(n, 459477));
                    return (n) => (0, i.jsx)(e, { game: t, websiteButtons: a, trackAction: l, ...n });
                });
            })({ game: t, websiteButtons: o, trackAction: a }),
    });
};
var aE = n(566679),
    av = n(123292),
    aA = n(981355),
    aI = n(242021);
function aN(e) {
    let { game: t, trackAction: n } = e,
        [a, r] = l.useState(t?.summaryLocalized != null),
        [c, o] = l.useState(!0),
        [d, u] = l.useState(!1),
        m = l.useRef(null),
        { width: f, height: h } = (0, aA.A)();
    return (l.useEffect(() => {
        let e = m.current;
        null != e && u(e.scrollHeight - e.clientHeight > 1 || !c);
    }, [m, f, h, c]),
    null == t.description)
        ? null
        : (0, i.jsxs)("div", {
              className: s()(tT.fi, tT.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, i.jsxs)("div", {
                          className: s()(tT.nM, tT.Lc),
                          children: [
                              (0, i.jsx)(aE.Z, { color: eN.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, i.jsx)(x.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: a
                                      ? eq.intl.format(eq.t.aZ2iIp, { onShowOriginal: () => r(!1) })
                                      : eq.intl.format(eq.t["/2ylF4"], { onShowTranslated: () => r(!0) }),
                              }),
                          ],
                      }),
                  (0, i.jsx)(x.E, {
                      ref: m,
                      lineClamp: c ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: a ? t.summaryLocalized : t.description,
                  }),
                  d &&
                      (0, i.jsx)(eA.D, {
                          className: tT.vk,
                          onClick: () => {
                              n(c ? B.Ws.ShowMore : B.Ws.ShowLess), o(!c);
                          },
                          children: (0, i.jsx)(x.E, {
                              variant: "text-sm/semibold",
                              children: c ? eq.intl.string(eq.t.lBeKY2) : eq.intl.string(eq.t["6MwJo/"]),
                          }),
                      }),
                  (0, i.jsx)(tX, { className: aI.B, game: t }),
              ],
          });
}
function aS(e) {
    let { game: t, trackAction: n } = e,
        a = l.useRef(null),
        {
            isExpanded: r,
            showToggle: c,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [n, a] = l.useState("full");
            l.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        a((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return n.observe(t), () => n.disconnect();
            }, [e]);
            let i = l.useCallback(() => {
                "expanded" === n
                    ? (t(B.Ws.ShowLess), a("collapsed"))
                    : "collapsed" === n && (t(B.Ws.ShowMore), a("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(a, n),
        { isTwoColumn: d } = eM(),
        u = l.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = r ? eq.intl.string(eq.t["6MwJo/"]) : eq.intl.string(eq.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: s()(tT.fi, tT.mX),
        children: [
            (0, i.jsx)(x.E, { ref: a, lineClamp: r ? void 0 : u, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(av.Q, { onClick: o, text: m }),
        ],
    });
}
var aj = n(952311);
let aC = () =>
    (0, i.jsxs)("div", {
        className: tT.uv,
        children: [
            (0, i.jsx)(p.Y, { size: "xxs" }),
            (0, i.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: eq.intl.string(eq.t.kAlUsy) }),
        ],
    });
function ay(e) {
    let { game: t, entries: n, trackAction: a } = e,
        r = l.useMemo(() => t?.genres.map(V.du).join(", "), [t]),
        [c] = l.useState(() => Math.random()),
        d = l.useMemo(() => {
            if (null == t) return "";
            if (null != t.bannerHash)
                return F.Ay.getGameAssetURL({ id: t.id, hash: t.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            let e = t.getArtworkURLs(),
                n = t.screenshotUrls ?? [];
            if (e.length > 0) {
                let t = Math.floor(c * e.length);
                return e[t];
            }
            if (n.length > 0) {
                let e = Math.floor(c * n.length);
                return n[e];
            }
            return "";
        }, [t, c]),
        u = t.getIconURL(160, F.QB ? "webp" : "png"),
        m = null != t.firstReleaseDate ? new Date(t.firstReleaseDate).getTime() : W.default.extractTimestamp(t.id),
        h = 7 >= o()().diff(o()(m), "days"),
        _ = n.some((e) => (0, w.CZ)(e) === f.m.GLOBAL),
        g = t.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: tT.is, style: { backgroundImage: `url("${d}")` } }),
            (0, i.jsxs)("div", {
                className: s()(tT.Qs, tT.fi, tT.iH, tT.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: tT.xx,
                        children: [
                            (0, i.jsx)("div", {
                                className: tT.bb,
                                children: (0, i.jsx)(ex.A, { game: t, className: tT.wm, size: ex.w.LARGE }),
                            }),
                            (0, i.jsx)(e$, { gameId: t.id, className: tT.Gg, trackAction: a }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: s()(tT.nM, tT.Lc, tT.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(b.D, { variant: "heading-xl/bold", children: g }),
                                (0, i.jsxs)("div", {
                                    className: s()(tT.nM, tT.Lc),
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("img", {
                                                className: tT.Gt,
                                                src: u,
                                                height: 16,
                                                alt: eq.intl.formatToPlainString(eq.t["nh+jWk"], { game: g }),
                                            }),
                                        (0, i.jsx)(x.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                        h &&
                                            (0, i.jsx)(x.E, {
                                                variant: "eyebrow",
                                                className: tT.Ad,
                                                children: eq.intl.string(eq.t.y2b7CA),
                                            }),
                                        _ &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(x.E, { variant: "text-sm/medium", children: " \xb7 " }),
                                                    (0, i.jsx)(aC, {}),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
function aR(e) {
    let {
        game: t,
        entries: n,
        officialGuildInvite: a,
        similarGames: l,
        similarGamesError: r,
        onClose: s,
        viewId: c,
        trackAction: o,
        source: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: tT.V0,
        children: [
            (0, i.jsx)(nT, { entries: n, viewId: c, officialGuildId: a?.guild?.id, onClose: s, source: d }),
            (0, i.jsx)(nf, { game: t, trackAction: o }),
            (0, i.jsx)(an, { gameId: t.id, onClose: s, similarGames: l, similarGamesError: r, trackAction: o }),
        ],
    });
}
function aT(e) {
    let { game: t, trackAction: n, closeModal: a } = e;
    return (0, i.jsxs)("div", {
        className: aj.oC,
        children: [
            (0, i.jsxs)("div", {
                className: aj.lM,
                children: [(0, i.jsx)(ng, { game: t, trackAction: n }), (0, i.jsx)(aS, { game: t, trackAction: n })],
            }),
            (0, i.jsx)(tu, { gameId: t.id, trackAction: n }),
            (0, i.jsx)(as, { trackAction: n }),
            (0, i.jsx)(n3, { game: t, closeModal: a, trackAction: n }),
        ],
    });
}
function aL(e) {
    let { game: t, trackAction: n, analyticsLocations: a } = e,
        l = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED,
        { closeModal: r } = eM();
    return (0, i.jsxs)("div", {
        className: tT.V0,
        children: [
            (0, i.jsx)(ng, { game: t, trackAction: n }),
            (0, i.jsxs)("div", {
                className: aj.gr,
                children: [
                    (0, i.jsx)(t9, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: aj.E1,
                        children: [
                            (0, i.jsx)(ab, { game: t, trackAction: n }),
                            (0, i.jsx)(aS, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(nt, { analyticsLocations: a, trackAction: n }),
            (0, i.jsx)(nw, { closeModal: r, trackAction: n }),
            (0, i.jsx)(tu, { gameId: t.id, trackAction: n }),
            (0, i.jsx)(as, { trackAction: n }),
            (0, i.jsx)(n3, { game: t, closeModal: r, trackAction: n }),
            l && (0, i.jsx)(nq, { game: t, trackAction: n }),
            (0, i.jsx)(tJ, { game: t, trackAction: n }),
        ],
    });
}
function ak(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: a, trackAction: r } = e;
    (0, T.A)({
        name: d.ImpressionNames.CLOUD_PLAY_CTA,
        type: d.ImpressionTypes.VIEW,
        properties: { location_stack: a },
    });
    let s = l.useCallback(() => {
        r(B.Ws.CloudPlay), t(), n();
    }, [t, n, r]);
    return (0, i.jsx)(_.m, {
        text: eq.intl.string(eq.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(E.$, {
            icon: v.h,
            text: eq.intl.string(eq.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function aM(e) {
    let { gameId: t, analyticsLocations: n } = e,
        a = (0, k.h)(t),
        i = (0, C.A)({ application: a, analyticsLocations: n });
    return { onCloudPlayClick: i, isCloudPlayButtonShown: !(0, G.L)(t) && null != i };
}
function aO(e) {
    let {
            game: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: a,
            trackAction: r,
            onClose: c,
            analyticsLocations: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, D.closeUserProfileModal)();
        }, [c]),
        { isCloudPlayButtonShown: u, onCloudPlayClick: m } = aM({ gameId: t.id, analyticsLocations: o });
    return (0, i.jsxs)("div", {
        className: s()(tT.pz, tT.fi, tT.iH),
        children: [
            (0, i.jsxs)("div", {
                className: tT.NC,
                children: [
                    (0, i.jsx)(t$, { invite: a, closeModal: d, trackAction: r }),
                    u &&
                        null != m &&
                        (0, i.jsx)(ak, { onClose: d, onCloudPlayClick: m, analyticsLocations: o, trackAction: r }),
                ],
            }),
            (0, i.jsx)(b.D, { variant: "heading-md/bold", children: eq.intl.string(eq.t.CI0vSJ) }),
            (0, i.jsxs)("div", {
                className: tT.V0,
                children: [
                    (0, i.jsx)(aN, { game: t, trackAction: r }),
                    (0, i.jsx)(nO, { game: t, onInviteResolved: n, closeModal: d, trackAction: r }),
                    (0, i.jsx)(tG, { game: t, trackAction: r }),
                    (0, i.jsx)(nP, { game: t }),
                    (0, i.jsx)(t_, { game: t, trackAction: r }),
                    (0, i.jsx)(x.E, {
                        variant: "text-xxs/normal",
                        children: eq.intl.format(eq.t.pch2Jw, { igdbLink: tK.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function aw(e) {
    let { game: t, trackAction: n, analyticsLocations: a } = e,
        { closeModal: l } = eM(),
        { isCloudPlayButtonShown: r, onCloudPlayClick: c } = aM({ gameId: t.id, analyticsLocations: a }),
        { showsStoreLinks: o } = ax(t),
        d = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: s()(aj.Pn, tT.fi, tT.iH, o ? aj.sV : aj.gF),
        children: [
            r && null != c
                ? (0, i.jsx)("div", {
                      className: tT.NC,
                      children: (0, i.jsx)(ak, {
                          onClose: l,
                          onCloudPlayClick: c,
                          analyticsLocations: a,
                          trackAction: n,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: tT.V0,
                children: [
                    (0, i.jsx)(ab, { game: t, trackAction: n }),
                    (0, i.jsx)(nt, { analyticsLocations: a, trackAction: n }),
                    (0, i.jsx)(nw, { closeModal: l, trackAction: n }),
                    d && (0, i.jsx)(nq, { game: t, trackAction: n }),
                    (0, i.jsx)(tJ, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function aP(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: a,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, M.Ay)(),
        m = (0, h.bG)([U.default], () => U.default.locale),
        { analyticsLocations: f } = (0, R.Ay)(y.A.GAME_PROFILE),
        _ = l.useMemo(() => (0, B.u9)(), []),
        g = (0, h.yK)([el.A], () => (el.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, x] = l.useState(null),
        b = (0, ec.s)(t),
        [E, v] = l.useState(null),
        { data: S, refetch: C } = (0, P.I)(t),
        T = S?.name ?? "",
        L = (e, a) => {
            (0, B.Tn)({
                gameName: T,
                gameId: t,
                action: e,
                similarGameId: a,
                viewId: _,
                officialGuildId: E?.guild?.id,
                source: n,
            });
        };
    return ((0, j.Ay)(() => {
        (0, B.rw)({ source: n, viewId: _, gameId: t, gameName: T, authorId: a, profileType: B.HV.FullProfile }),
            (0, O.He)();
    }),
    l.useEffect(() => {
        m.startsWith("en") || S?.summaryLocalized != null || C();
    }, [t, S?.summaryLocalized, m, C]),
    l.useEffect(() => {
        (async () => {
            if (0 === g.length) {
                x(null);
                try {
                    await ea(t);
                } catch (e) {
                    x(e);
                }
            }
        })();
    }, [t, g]),
    (0, j.Ay)(() => () => {
        let e = Date.now(),
            n = b.map((t) => {
                let n = (0, w.JM)(t) ? (0, w.W6)(t, e) : (0, w.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, B.V_)({
            viewId: _,
            gameId: t,
            gameName: T,
            playedFriendIds: b.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: g.filter(ep.oS).slice(0, 5),
            officialGuildId: E?.guild?.id,
        });
    }),
    null == S)
        ? null
        : (0, i.jsx)(R.f5, {
              value: f,
              children: (0, i.jsx)(A.d, {
                  transitionState: r,
                  onClose: c,
                  size: "xl",
                  children: (0, i.jsx)("div", {
                      className: s()(u, tT.fn),
                      children: (0, i.jsxs)(I.Ip, {
                          orientation: "auto",
                          children: [
                              (0, i.jsx)(ay, { game: S, entries: b, trackAction: L }),
                              (0, i.jsx)(N.F, {
                                  children: (0, i.jsxs)("div", {
                                      className: s()(tT.Qs, tT.rb),
                                      children: [
                                          (0, i.jsx)(aR, {
                                              game: S,
                                              entries: b,
                                              officialGuildInvite: E,
                                              similarGames: g,
                                              similarGamesError: p,
                                              onClose: c,
                                              viewId: _,
                                              source: n,
                                              trackAction: L,
                                          }),
                                          (0, i.jsx)(aO, {
                                              game: S,
                                              onSetOfficialGuildInvite: v,
                                              officialGuildInvite: E,
                                              onClose: c,
                                              appContext: o,
                                              source: n,
                                              trackExternalAction: d,
                                              trackAction: L,
                                              analyticsLocations: f,
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
function aG(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: a,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
            initialScrollOffset: m,
        } = e,
        [f, _] = l.useState(!0),
        [p, x] = l.useState(null),
        { clientThemesClassName: b } = (0, M.Ay)(),
        E = (0, h.bG)([U.default], () => U.default.locale),
        v = l.useMemo(() => (0, B.u9)(), []),
        { analyticsLocations: A } = (0, R.Ay)(y.A.GAME_PROFILE),
        I = (0, ec.s)(t),
        { data: C } = (0, P.I)(t),
        T = C?.name ?? "",
        {
            hasAlreadyLinked: G,
            canStartAuthorization: F,
            fetched: V,
            startAuthorization: W,
            connectionApp: H,
        } = (0, L.RD)(C),
        { invite: Y, isMember: z } = eg(C, x),
        { socialLayerStorefrontRecommendationsData: X } = (function (e) {
            let t = em.default.getCurrentUser()?.id,
                n = l.useMemo(() => (null != t ? [t] : []), [t]),
                a = (0, h.bG)([eo.A], () => (null != e ? eo.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, k.h)(a),
                r = l.useMemo(() => (null != a ? [a] : []), [a]),
                { recommendations: s, status: c } = (0, eu.XQ)({
                    applicationIds: r,
                    userIds: n,
                    numItems: 6,
                    source: ed.B5.USER_PROFILE,
                });
            return {
                socialLayerStorefrontRecommendationsData: l.useMemo(
                    () =>
                        null == i || null == i.guildId || "success" !== c || 0 === s.length
                            ? null
                            : { application: i, skuIds: s.map((e) => e.id), guildId: i.guildId },
                    [i, c, s],
                ),
            };
        })(t),
        K = (e, a) => {
            (0, B.Tn)({
                gameName: T,
                gameId: t,
                action: e,
                similarGameId: a,
                viewId: v,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, j.Ay)(() => {
        (0, B.rw)({ source: n, viewId: v, gameId: t, gameName: T, authorId: a, profileType: B.HV.FullProfile }),
            (0, O.He)();
    }),
        (0, j.Ay)(() => () => {
            let e = Date.now(),
                n = I.map((t) => {
                    let n = (0, w.JM)(t) ? (0, w.W6)(t, e) : (0, w.aJ)(t, E);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, B.V_)({
                viewId: v,
                gameId: t,
                gameName: T,
                playedFriendIds: I.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let Z = l.useCallback((e) => {
            _(e.contentRect.width >= 800);
        }, []),
        q = (0, u.w)(Z, [], { fireOnMount: !0 }),
        J = l.useCallback(() => {
            c(), (0, D.closeUserProfileModal)();
        }, [c]),
        $ = l.useRef(null),
        Q = l.useCallback(() => $.current?.getScrollerNode()?.scrollTop ?? 0, []),
        ee = l.useMemo(
            () => ({
                isTwoColumn: f,
                canStartAuthorization: F,
                hasAlreadyLinked: G,
                fetchedAuthorization: V,
                startAuthorization: W,
                connectionApp: H,
                officialInvite: Y,
                isMember: z,
                socialLayerStorefrontRecommendationsData: X,
                closeModal: J,
                getScrollOffset: Q,
            }),
            [f, F, G, V, W, H, Y, z, X, J, Q],
        ),
        et = l.useCallback(() => {
            c(), (0, D.closeUserProfileModal)();
        }, [c]),
        [en, ea] = l.useState(!1),
        [ei, el] = l.useState(150),
        er = l.useRef(null);
    l.useEffect(() => {
        null != m && m > 0 && $.current?.getScrollerNode()?.scrollTo({ top: m, behavior: "instant" });
    }, []);
    let es = l.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != er.current) {
                let e = Math.max(0, 1 - t / 150);
                er.current.style.opacity = String(e);
            }
            ea(t >= ei);
        },
        [ei],
    );
    return null == C
        ? null
        : (0, i.jsx)(R.f5, {
              value: A,
              children: (0, i.jsx)(g.N, {
                  transitionState: r,
                  onClose: c,
                  children: (0, i.jsx)(ek.Provider, {
                      value: ee,
                      children: (0, i.jsxs)("div", {
                          className: s()(b, aj.kL),
                          ref: q,
                          children: [
                              (0, i.jsx)(t5, { game: C, ref: er }),
                              (0, i.jsx)(t1, { game: C, show: en, onClose: et, trackAction: K }),
                              (0, i.jsx)(t2, { show: en }),
                              (0, i.jsxs)(S.Ch, {
                                  ref: $,
                                  onScroll: es,
                                  children: [
                                      (0, i.jsx)(t6, {
                                          game: C,
                                          onSetCompactBarScrollThreshold: el,
                                          showCompactBar: en,
                                      }),
                                      (0, i.jsx)(N.F, {
                                          children: f
                                              ? (0, i.jsxs)("div", {
                                                    className: aj.jC,
                                                    children: [
                                                        (0, i.jsx)(aT, { game: C, closeModal: et, trackAction: K }),
                                                        (0, i.jsx)(aw, {
                                                            game: C,
                                                            appContext: o,
                                                            source: n,
                                                            trackExternalAction: d,
                                                            trackAction: K,
                                                            analyticsLocations: A,
                                                        }),
                                                    ],
                                                })
                                              : (0, i.jsx)("div", {
                                                    className: aj.b9,
                                                    children: (0, i.jsx)(aL, {
                                                        game: C,
                                                        trackAction: K,
                                                        analyticsLocations: A,
                                                    }),
                                                }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
let aD = function (e) {
    let t = es.useConfig({ location: "GameProfileModal" }).enabled;
    return e.forceV2 || t ? (0, i.jsx)(aG, { ...e }) : (0, i.jsx)(aP, { ...e });
};
