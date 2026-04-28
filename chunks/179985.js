l.d(t, { default: () => nD });
var n,
    i = l(627968),
    s = l(64700),
    a = l(503698),
    r = l.n(a),
    c = l(989349),
    o = l.n(c),
    d = l(110259),
    u = l(535185),
    m = l(792216),
    x = l(379834),
    h = l(17928),
    g = l(990078),
    f = l(521489),
    j = l(825860),
    v = l(834730),
    p = l(534514),
    E = l(821609),
    A = l(414499),
    N = l(224640),
    I = l(364522),
    b = l(707554),
    C = l(689175),
    S = l(964486),
    R = l(737393),
    k = l(793574),
    y = l(688810),
    L = l(139286),
    T = l(46225),
    O = l(429913),
    M = l(590703),
    _ = l(180170),
    G = l(583846),
    P = l(569926),
    w = l(928550),
    D = l(975732),
    V = l(773669),
    W = l(486020),
    U = l(541830),
    Y = l(935208),
    F = l(409626),
    H = l(636537),
    B = l(228366),
    z = l(845584),
    K = l(371794),
    X = l(155718),
    J = l(731068),
    $ = l(77350),
    Z = l(320095),
    Q = l(383233),
    q = l(998218);
let ee = /^#{1,3}\s+(.+)$/;
var et = l(652215);
let el = async (e) => {
        B.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, K.aP)({
                    url: et.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: V.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            B.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            B.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    en = async (e) => {
        try {
            let t = (
                (await H.Bo.get({ url: et.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            B.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
        } catch (e) {
            throw new z.LG(e);
        }
    },
    ei = async (e, t) => {
        B.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let l = {};
            t?.limit != null && (l.limit = t.limit);
            let n = (await H.Bo.get({ url: et.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
            B.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: n.messages.map((e) => {
                    let t,
                        l,
                        n = (0, Z.rh)(e),
                        i = (0, Q._c)(n)
                            ? n.components
                                  .filter((e) => e.type === X.I5.TEXT_DISPLAY)
                                  .map((e) => e.content)
                                  .join("\n")
                            : n.content,
                        s = (function (e) {
                            if ((0, Q._c)(e)) {
                                let t = e.components.find((e) => e.type === X.I5.MEDIA_GALLERY),
                                    l = t?.items[0]?.media;
                                if (null != l) {
                                    let t = (0, J.FE)(l);
                                    if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, $.tT)(e.content_type));
                            if (null != t) return (0, J.Rr)(t, e);
                            let l = e.attachments.find((e) => (0, $.XB)(e.content_type));
                            if (null != l) return (0, J.Rr)(l, e);
                            let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (n?.thumbnail != null)
                                return (0, J.oU)(
                                    n.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                    },
                                    "IMAGE",
                                );
                        })(n),
                        { title: a, body: r } =
                            ((t = i.indexOf("\n")),
                            (l = (-1 === t ? i : i.slice(0, t)).match(ee)),
                            null != l
                                ? { title: l[1].trim(), body: -1 === t ? "" : i.slice(t + 1).trimStart() }
                                : { body: i }),
                        c = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0;
                    return {
                        id: n.id,
                        media: s,
                        title: a,
                        body: r,
                        content: i,
                        timestamp: e.timestamp,
                        reactionCount: c,
                    };
                }),
                channelId: n.channel_id ?? void 0,
                guildId: n.guild_id ?? void 0,
            });
        } catch (t) {
            B.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var es = l(422069),
    ea = l(945810);
let er = (0, ea.mj)({
    name: "2025-12-game-profiles-v2",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var ec = l(205184),
    eo = l(832163),
    ed = l(594832),
    eu = l(862772),
    em = l(287809),
    ex = l(505779),
    eh = l(970163),
    eg = l(184989);
let ef = function (e, t) {
    let [l, n] = s.useState(),
        i = s.useRef(null),
        a = s.useRef(t);
    s.useEffect(() => {
        a.current = t;
    }, [t]);
    let r = (0, h.bG)([eg.A], () => l?.guild?.id != null && eg.A.isMember(l?.guild?.id)),
        c = s.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ex.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        s.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, eh.A)(t);
                    !0 !== e.banned && ((i.current = t), n(e.invite), null != e.invite && a.current?.(e.invite));
                }
            };
            null != c && e(c.url);
        }, [c]),
        { invite: l, isMember: r }
    );
};
var ej = l(713900),
    ev = l(459746),
    ep = l(922016),
    eE = l(550079),
    eA = l(477782),
    eN = l(939249),
    eI = l(365199),
    eb = l(661531),
    eC = l(663341),
    eS = l(408278),
    eR = l(34188),
    ek = l(789645),
    ey = l(442433),
    eL = l(50268),
    eT = l(44724);
let eO = s.createContext(void 0);
function eM() {
    let e = s.useContext(eO);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
var e_ = l(67518);
l(321073);
var eG = l(540185),
    eP = l(926268),
    ew = l(53788),
    eD = l(831453),
    eV = l(785866),
    eW = l(555704),
    eU = l(395332),
    eY = l(47675),
    eF = l(633075),
    eH = l(289173),
    eB = l(841595),
    ez = l(958805),
    eK = l(735321),
    eX = l(495544),
    eJ = l(760751),
    e$ = l(985018);
async function eZ(e) {
    let t = e((0, eK.BF)());
    await ez.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function eQ(e) {
    let { gameId: t, className: l, trackAction: n } = e,
        a = s.useRef(null),
        r = (0, eL.A)({ id: t, label: e$.intl.string(e$.t.SHQGPj) }),
        c = (0, e_.n)(t, n);
    return null == r && null == c
        ? null
        : (0, i.jsx)(ep.Y, {
              targetElementRef: a,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(eE.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, ey.Z_)(), t();
                      },
                      "aria-label": e$.intl.string(e$.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(eA.rX, { children: r }), (0, i.jsx)(eA.rX, { children: c })],
                      }),
                  });
              },
              children: (e) =>
                  (0, i.jsx)(g.m, {
                      text: e$.intl.string(e$.t["UKOtz+"]),
                      children: (0, i.jsx)(eN.D, {
                          innerRef: a,
                          className: l,
                          ...e,
                          children: (0, i.jsx)(eI.j, { size: "xs", color: eb.A.colors.WHITE }),
                      }),
                  }),
          });
}
function eq(e) {
    let { game: t, onClose: l, className: n, trackAction: a } = e,
        r = s.useRef(null),
        c = s.useRef(null),
        o = (0, eL.A)({ id: t.id, label: e$.intl.string(e$.t.SHQGPj) }),
        d = (0, e_.n)(t.id, a),
        u = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, h.bG)([eX.default], () => eX.default.getId()),
                a = (0, h.bG)([eJ.A], () => eJ.A.getDetectableGame(t)),
                r = s.useMemo(
                    () => [
                        {
                            type: eG.x.FAVORITE_GAMES,
                            addLabel: e$.intl.string(e$.t.fgmitg),
                            removeLabel: e$.intl.string(e$.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eP.C,
                        },
                        {
                            type: eG.x.PLAYED_GAMES,
                            addLabel: e$.intl.string(e$.t["0xIVLR"]),
                            removeLabel: e$.intl.string(e$.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: ew.G,
                        },
                        {
                            type: eG.x.CURRENT_GAMES,
                            addLabel: e$.intl.string(e$.t.G0c4En),
                            removeLabel: e$.intl.string(e$.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: eD.H,
                        },
                        {
                            type: eG.x.WANT_TO_PLAY_GAMES,
                            addLabel: e$.intl.string(e$.t.UuBS4K),
                            removeLabel: e$.intl.string(e$.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: eV._,
                        },
                    ],
                    [],
                ),
                c = (0, h.yK)([eB.A], () => (null == n ? [] : (eB.A.getUserProfile(n)?.widgets ?? [])), [n]),
                o = (0, eU.w$)({ location: "game-profile-overflow-menu" }),
                d = s.useMemo(() => {
                    if (null == o || 0 === o.length) return null;
                    if (null != e) {
                        if (o.some((t) => t.applicationId === e.id)) return e.id;
                        for (let t of e.linkedApplications ?? [])
                            if (o.some((e) => e.applicationId === t.id)) return t.id;
                    }
                    return null;
                }, [o, e]),
                u = s.useCallback(
                    async (e, l) => {
                        let n = null;
                        if (
                            (await eZ((i) => {
                                let s = i.filter(eH.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (s?.games.some((e) => e.applicationId === t) || (null != s && (0, eK.uA)(s)))
                                        return i;
                                    let l = { applicationId: t },
                                        a = null != s ? [l, ...(s.games ?? [])] : [l];
                                    n = new eH.Yy({ ...(s ?? { type: e }), games: a });
                                } else {
                                    if (null == s) return i;
                                    let e = s.games.filter((e) => e.applicationId !== t);
                                    n = new eH.Yy({ ...s, games: e });
                                }
                                var a = n;
                                let r = i.findIndex((e) => e.getUniqueKey() === a.getUniqueKey());
                                if (-1 === r) return [a, ...i];
                                let c = [...i];
                                return (c[r] = a), c;
                            }),
                            null == n)
                        )
                            return;
                        let i = n;
                        (0, eY.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                m = s.useCallback(
                    async (e) => {
                        if (null == d) return;
                        let t = null;
                        if (
                            (await eZ((l) =>
                                e
                                    ? l.some((e) => e instanceof eF.R && e.applicationId === d)
                                        ? l
                                        : [(t = new eF.R({ applicationId: d })), ...l]
                                    : ((t = l.find((e) => e instanceof eF.R && e.applicationId === d) ?? null),
                                      l.filter((e) => !(e instanceof eF.R && e.applicationId === d))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, eY.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [d],
                );
            if (null == n) return null;
            let x = null != e && null != a && (0, eK.XX)(a),
                g = [];
            if (null != d) {
                let e = c.some((e) => e instanceof eF.R && e.applicationId === d);
                g.push(
                    (0, i.jsx)(
                        eA.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? e$.intl.formatToPlainString(e$.t.Ktb1n8, { name: l })
                                : e$.intl.formatToPlainString(e$.t.Xp6iZt, { name: l }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: eW.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of r) {
                    let l = c.filter(eH.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        s = !n && null != l && (0, eK.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            eA.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: s ? e$.intl.string(e$.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !n),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: s,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(t),
        { officialInvite: m } = eM(),
        x = new Set(m?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        f = s.useCallback(() => {
            null != m && (0, eT.X)({ invite: m });
        }, [m]),
        j = s.useCallback(() => {
            null != m && (a(F.Ws.GameShop), (0, eT.default)({ invite: m }), l());
        }, [m, a, l]);
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            null != u &&
                (0, i.jsx)(ep.Y, {
                    targetElementRef: c,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(eE.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, ey.Z_)(), t();
                            },
                            "aria-label": e$.intl.string(e$.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(eA.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: c,
                            children: (0, i.jsx)(E.$, {
                                icon: eC.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: e$.intl.string(e$.t.sidPSo),
                            }),
                        }),
                }),
            x &&
                null != m &&
                (0, i.jsx)(g.m, {
                    text: e$.intl.string(e$.t.apFNLU),
                    children: (0, i.jsx)(eS.K, {
                        icon: eR.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": e$.intl.string(e$.t.apFNLU),
                        onMouseDown: f,
                        onClick: j,
                    }),
                }),
            (null != o || null != d) &&
                (0, i.jsx)(ep.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(eE.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, ey.Z_)(), t();
                            },
                            "aria-label": e$.intl.string(e$.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(eA.rX, { children: d }), (0, i.jsx)(eA.rX, { children: o })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(g.m, {
                            text: e$.intl.string(e$.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: r,
                                children: (0, i.jsx)(eS.K, {
                                    icon: eI.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": e$.intl.string(e$.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(eS.K, {
                icon: ek.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: l,
                "aria-label": e$.intl.string(e$.t.cpT0Cq),
            }),
        ],
    });
}
var e0 = l(621466),
    e1 = l(966697),
    e8 = l(460905),
    e4 = l(951707),
    e2 = l(46054),
    e3 = l(58703),
    e5 = l(60465),
    e9 = l(284009),
    e6 = l.n(e9),
    e7 = l(376728),
    te = l(976860),
    tt = l(71393),
    tl = l(449054);
async function tn(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: s } = e;
    e6()(s.length > 0, "analyticsLocationStack must have at least one location");
    let a = s[s.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = tt.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(et.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, tl.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: et.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                s,
            ));
        else
            null != t &&
                (await e7.Ay.acceptInvite({ inviteKey: t.code, context: { location: a }, skipOnboarding: !0 }));
    (0, te.pX)(et.BVt.CHANNEL(l, n, i), { sourceLocationStack: s });
}
var ti = l(320448),
    ts = l(274119);
function ta(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, i.jsxs)("div", {
        className: ts.k,
        children: [
            (0, i.jsxs)("div", {
                className: ts.w,
                children: [
                    (0, i.jsx)(p.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, i.jsx)(E.$, {
                            size: "sm",
                            icon: ti._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: e$.intl.string(e$.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var tr = l(468489),
    tc = l(992595);
function to(e, t) {
    return e2.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function td(e) {
    let t,
        { variant: l, message: n, channelId: a, onCardClick: c } = e,
        [o, d] = s.useState(!1),
        u = "main" === l,
        m = s.useCallback(() => d(!0), []),
        x = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, e0.vq)(e.target, HTMLAnchorElement) ||
                        ((0, e0.vq)(e.target, HTMLSpanElement) && (0, e0.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return c(n.id);
            },
            [c, n.id],
        ),
        h = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        g = n.media?.proxyUrl ?? n.media?.url,
        f =
            (null != g
                ? null == (t = q.A.toURLSafe(g))
                    ? null
                    : (t.searchParams.append("format", "webp"), t.toString())
                : null) ?? g;
    return (0, i.jsxs)(eN.D, {
        className: u ? tr.cG : tr.IU,
        onClick: x,
        children: [
            null != n.media &&
                null != f &&
                (0, i.jsx)("div", {
                    className: u ? tr._v : tr.eZ,
                    children: (0, i.jsx)(e1.y, {
                        readyState: o ? et.Rv1.READY : et.Rv1.LOADING,
                        aspectRatio: h,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: f,
                            className: u ? tr.fk : tr.v,
                            alt: "",
                            draggable: !1,
                            onLoad: m,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? tr.GT : tr.s4,
                children: [
                    null != n.title &&
                        (0, i.jsx)(p.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? tr.KX : tr._N,
                            children: to(n.title, a),
                        }),
                    n.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(tr.h_, tc.PT),
                            children: [to(n.body, a), (0, i.jsx)("div", { className: tr.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: tr.ov,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, e3.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: tr.a5,
                                    children: [
                                        (0, i.jsx)(e8.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(e$.intl.currentLocale).format(
                                                n.reactionCount,
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
    let { gameId: t, trackAction: l } = e,
        { analyticsLocations: n } = (0, y.Ay)(),
        { officialInvite: a, closeModal: r, getScrollOffset: c } = eM(),
        {
            messages: o,
            guildId: d,
            channelId: u,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, h.cf)([es.A], () => ({
                data: null != e ? es.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && es.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && es.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || l || es.A.isAnnouncementsFetching(e) || ei(e);
                }, [e, l]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n }
            );
        })(t),
        m = s.useCallback(() => {
            let e = a?.guild?.id ?? d;
            null != e &&
                null != u &&
                (l(F.Ws.Announcements),
                e5.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                r(),
                tn({ invite: a, guildId: e, channelId: u, analyticsLocationStack: n }));
        }, [l, r, c, a, d, u, n, t]),
        x = s.useCallback(
            (e) => {
                let i = a?.guild?.id ?? d;
                null != i &&
                    null != u &&
                    (l(F.Ws.AnnouncementsItem),
                    e5.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                    r(),
                    tn({ invite: a, guildId: i, channelId: u, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, a, d, u, n, t],
        );
    if (null == u || 0 === o.length) return null;
    let g = 2 !== o.length,
        f = g ? o[0] : null,
        j = g ? o.slice(1) : o;
    return (0, i.jsx)(ta, {
        title: e$.intl.string(e$.t.B0BV3Y),
        onClickViewAll: m,
        children: (0, i.jsxs)("div", {
            className: tr.f3,
            children: [
                null != f && (0, i.jsx)(td, { variant: "main", message: f, channelId: u, onCardClick: x }),
                j.length > 0 &&
                    (0, i.jsx)(e4.A, {
                        gap: 16,
                        children: j.map((e) =>
                            (0, i.jsx)(td, { variant: "small", message: e, channelId: u, onCardClick: x }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var tm = l(349288),
    tx = l(975807),
    th = l(194362);
function tg(e) {
    let { game: t, trackAction: l } = e,
        n = s.useCallback(async () => {
            l(F.Ws.ClaimGame);
            let e = await (0, th.a)(et.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tx.A)(e);
        }, [l]),
        a = s.useCallback((e) => (0, i.jsx)(tm.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === X.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: e$.intl.format(e$.t.KAjfKl, { claimLink: a }),
          });
}
var tf = l(240248);
let tj = [
    ex.V.OFFICIAL,
    ex.V.FACEBOOK,
    ex.V.TWITTER,
    ex.V.INSTAGRAM,
    ex.V.YOUTUBE,
    ex.V.BLUESKY,
    ex.V.REDDIT,
    ex.V.TWITCH,
];
var tv = l(808380);
let tp = [tv.Y.DESKTOP, tv.Y.XBOX, tv.Y.PLAYSTATION, tv.Y.NINTENDO];
function tE(e) {
    return s.useMemo(() => {
        let t = new Set(e.platforms),
            l = [...t];
        return (
            !t.has(tv.Y.DESKTOP) && (t.has(tv.Y.MACOS) || t.has(tv.Y.LINUX)) && l.push(tv.Y.DESKTOP),
            l.filter((e) => tp.includes(e)).sort((e, t) => tp.indexOf(e) - tp.indexOf(t))
        );
    }, [e.platforms]);
}
var tA = l(998445),
    tN = l(274997),
    tI = l(80500),
    tb = l(319745),
    tC = l(488225),
    tS = l(967492),
    tR = l(72265),
    tk = l(454346),
    ty = l(37948),
    tL = l(141535),
    tT = l(262420);
let tO = [ex.V.OFFICIAL, ex.V.TWITTER, ex.V.YOUTUBE],
    tM = { colorClass: tT.wP },
    t_ = { size: "xs", colorClass: tT.wP };
function tG(e, t) {
    switch (e.category) {
        case ex.V.OFFICIAL:
            return { icon: (0, i.jsx)(tA.L, { ...t }), action: F.Ws.WebsiteLink, title: e$.intl.string(e$.t.fOUKvg) };
        case ex.V.TWITTER:
            return { icon: (0, i.jsx)(tN.p, { ...t }), action: F.Ws.XLink, title: e$.intl.string(e$.t.INic4y) };
        case ex.V.YOUTUBE:
            return { action: F.Ws.YouTubeLink, icon: (0, i.jsx)(tI.C, { ...t }), title: e$.intl.string(e$.t.lNmxbE) };
        case ex.V.FACEBOOK:
            return { icon: (0, i.jsx)(tb.Z, { ...t }), action: F.Ws.FacebookLink, title: e$.intl.string(e$.t.FjyREK) };
        case ex.V.INSTAGRAM:
            return {
                icon: (0, i.jsx)(tC.L, { ...t }),
                action: F.Ws.InstagramLink,
                title: e$.intl.string(e$.t["cgR+IK"]),
            };
        case ex.V.BLUESKY:
            return {
                icon: (0, i.jsx)(tS.a, { ...t }),
                action: F.Ws.BlueskyLink,
                title: e$.intl.string(e$.t["D/PHq5"]),
            };
        case ex.V.REDDIT:
            return { icon: (0, i.jsx)(tR.T, { ...t }), action: F.Ws.RedditLink, title: e$.intl.string(e$.t["Hgb+fc"]) };
        case ex.V.TWITCH:
            return { icon: (0, i.jsx)(tk.a, { ...t }), action: F.Ws.TwitchLink, title: e$.intl.string(e$.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function tP(e) {
    let { website: t, trackAction: l } = e,
        { action: n, icon: a, title: r } = tG(t, tM),
        c = s.useCallback(() => {
            l(n);
        }, [n, l]);
    return (0, i.jsx)(g.m, {
        text: r,
        children: (0, i.jsx)(tm.Anchor, {
            onClick: c,
            className: tT.yO,
            href: t.url,
            target: "_blank",
            "aria-label": r,
            children: a,
        }),
    });
}
let tw = function (e) {
    let { game: t, trackAction: l } = e;
    if (null == t.websites) return null;
    let n = t.websites
        .filter((e) => {
            let { category: t } = e;
            return tO.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: tL.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: e$.intl.string(e$.t["Oj3o1/"]),
                  }),
                  (0, i.jsx)("div", {
                      className: r()(tL.nM, tL.mX),
                      children: n.map((e) => (0, i.jsx)(tP, { website: e, trackAction: l }, e.url)),
                  }),
              ],
          });
};
function tD(e) {
    let { website: t, trackAction: l } = e,
        n = (0, ty.A)(),
        { action: a, icon: r, title: c } = tG(t, t_),
        o = s.useCallback(() => {
            l(a), n(t.url);
        }, [a, n, l, t.url]);
    return (0, i.jsx)(g.m, {
        text: c,
        children: (0, i.jsx)(eN.D, { onClick: o, className: tT.yO, title: c, children: r }),
    });
}
var tV = l(31300),
    tW = l(802516),
    tU = l(22363),
    tY = l(418524);
function tF(e) {
    switch (e) {
        case tv.Y.DESKTOP:
            return e$.intl.string(e$.t.KT6uCJ);
        case tv.Y.XBOX:
            return e$.intl.string(e$.t.DDWUJp);
        case tv.Y.PLAYSTATION:
            return e$.intl.string(e$.t.fzMz2s);
        case tv.Y.NINTENDO:
            return e$.intl.string(e$.t.AMW8je);
        default:
            return null;
    }
}
function tH(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case tv.Y.DESKTOP:
            return (0, i.jsx)(tV.k, { size: "xs", ...l });
        case tv.Y.XBOX:
            return (0, i.jsx)(tW.Y, { size: "xs", ...l });
        case tv.Y.PLAYSTATION:
            return (0, i.jsx)(tU.X, { size: "xs", ...l });
        case tv.Y.NINTENDO:
            return (0, i.jsx)(tY.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function tB(e) {
    let { platforms: t } = e;
    return (0, i.jsx)("div", {
        className: r()(tL.nM, tL.Lc),
        style: { alignItems: "center" },
        children: t.map((e) => (0, i.jsx)(g.m, { text: tF(e), children: (0, i.jsx)(tH, { platform: e }) }, e)),
    });
}
function tz(e) {
    let { platform: t } = e;
    return (0, i.jsx)(g.m, { text: tF(t), children: (0, i.jsx)(tH, { platform: t }) }, t);
}
function tK(e) {
    let { game: t, className: l } = e,
        n = tE(t);
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: r()(tL.fi, tL.iH, l),
              children: n.length > 0 && (0, i.jsx)(tB, { platforms: n }),
          });
}
var tX = l(424994),
    tJ = l(60541);
function t$() {
    return (0, i.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: e$.intl.string(e$.t.GruYxV) });
}
let tZ = function (e) {
    let { game: t, trackAction: l } = e,
        n = s.useMemo(() => t.genres.map(U.du).join(", "), [t]),
        a = t.getCompanyByRole(X.wk.PUBLISHER),
        r = t.getCompanyByRole(X.wk.DEVELOPER),
        c = a.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        u = tE(t),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tj.includes(t);
            })
            .sort((e, t) => tj.indexOf(e.category) - tj.indexOf(t.category)),
        x = !(0, tf.uJ)(n),
        h = !(0, tf.uJ)(c),
        g = !(0, tf.uJ)(o),
        f = !(0, tf.uJ)(d),
        j = u.length > 0,
        E = m.length > 0 && !m.every((e) => (0, tf.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tJ.uW,
        children: [
            (0, i.jsx)("div", {
                className: tJ.Gf,
                children: (0, i.jsx)(p.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: e$.intl.string(e$.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tJ.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tJ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? e$.intl.string(e$.t.pDgwYB) : e$.intl.string(e$.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tJ.Gu,
                                      children: n,
                                  })
                                : (0, i.jsx)(t$, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== a.length ? e$.intl.string(e$.t.Hc7Enk) : e$.intl.string(e$.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tJ.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(t$, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? e$.intl.string(e$.t.KATEJB) : e$.intl.string(e$.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tJ.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(t$, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: e$.intl.string(e$.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tJ.Gu,
                                      children: e3.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(t$, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? e$.intl.string(e$.t.PNqxNe) : e$.intl.string(e$.t["UxAag+"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: tJ.Gu,
                                      children: u.map((e) => (0, i.jsx)(tz, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(t$, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: e$.intl.string(e$.t["Oj3o1/"]),
                            }),
                            E
                                ? (0, i.jsx)("div", {
                                      className: tJ.Gu,
                                      children: m.map((e) => (0, i.jsx)(tD, { website: e, trackAction: l }, e.url)),
                                  })
                                : (0, i.jsx)(t$, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.J1,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: e$.intl.string(e$.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tJ.Gu,
                                children: e$.intl.format(e$.t.XPFZVl, { igdbLink: tX.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tJ.OQ, children: (0, i.jsx)(tg, { game: t, trackAction: l }) }),
        ],
    });
};
function tQ(e) {
    let { invite: t, trackAction: l, closeModal: n } = e,
        a = s.useCallback(() => {
            t?.guild != null && (0, eT.X)({ guildId: t.guild.id });
        }, [t]),
        r = s.useCallback(() => {
            t?.guild != null && (l(F.Ws.GameShop), (0, eT.default)({ invite: t }), n());
        }, [n, t, l]);
    return new Set(t?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, i.jsx)(E.$, {
              variant: "primary",
              text: e$.intl.string(e$.t.v8UpgE),
              icon: eR.U,
              onClick: r,
              onMouseDown: a,
              fullWidth: !0,
          })
        : null;
}
var tq = l(369606),
    t0 = l(8208);
function t1(e) {
    let { game: t, show: l, onClose: n, trackAction: s } = e,
        a = t.name,
        c = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t0.y5,
        children: [
            (0, i.jsx)("div", { className: r()(t0.nI, l && t0.hD) }),
            (0, i.jsxs)("div", {
                className: r()(t0.A1, l && t0.g8),
                children: [
                    null != c && (0, i.jsx)("img", { src: c, alt: "", className: t0.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t0.hm,
                        children: [
                            (0, i.jsx)(p.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(t3, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(eq, { game: t, onClose: n, className: t0.HK, trackAction: s }),
        ],
    });
}
function t8(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(t0.nI, t0.Jn, t && t0.hD) });
}
let t4 = s.forwardRef(function (e, t) {
    let { game: l } = e,
        [n] = s.useState(() => Math.random()),
        a = s.useMemo(() => {
            if (null != l.bannerHash)
                return W.Ay.getGameAssetURL({ id: l.id, hash: l.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != l.screenshotUrls && l.screenshotUrls.length > 0) {
                let e = Math.floor(n * l.screenshotUrls.length);
                return l.screenshotUrls[e];
            }
            return "";
        }, [l.id, l.bannerHash, l.screenshotUrls, n]);
    return (0, tf.uJ)(a)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t0.y1, style: { backgroundImage: `url("${a}")` } }),
                  (0, i.jsx)("div", { className: t0.N4 }),
              ],
          });
});
function t2(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(U.du).join(", ");
    return (0, tf.uJ)(l) ? null : (0, i.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
let t3 = (e) => {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t0.Qc,
        children: [
            (0, i.jsx)(tq.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(v.E, {
                variant: "text-xs/bold",
                color: "none",
                children: e$.intl.formatToPlainString(e$.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function t5(e) {
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? t0.n8 : t0.FS,
        children: (0, i.jsx)(ev.A, { game: t, className: t0.xe, size: ev.w.LARGE }),
    });
}
let t9 = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: l, showCompactBar: n } = e,
        { isTwoColumn: a } = eM(),
        c = s.useRef(null),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = c.current,
            t = o.current;
        if (null == e || null == t) return;
        let n = (function (e, t) {
            let l = 0,
                n = e;
            for (; null != n && n !== t; ) (l += n.offsetTop), (n = n.offsetParent);
            return l;
        })(t, e);
        n > 0 && l?.(n);
    }, [l]);
    let d = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: r()(t0.ap, n && t0.Gh),
        children: [
            a &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t0.Tf,
                    children: (0, i.jsx)(ev.A, { game: t, className: t0.w$, size: ev.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t0.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(t3, { rank: t.l30Rank }),
                    (0, i.jsx)(p.D, { ref: o, variant: "heading-xxl/semibold", children: d }),
                    (0, i.jsx)(t2, { game: t }),
                ],
            }),
        ],
    });
};
var t6 = l(141628),
    t7 = l(289363),
    le = l(448682);
function lt(e) {
    let { trackAction: t, analyticsLocations: l } = e,
        {
            fetchedAuthorization: n,
            hasAlreadyLinked: a,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            officialInvite: d,
        } = eM(),
        u = (0, h.bG)([em.default], () => em.default.getCurrentUser()),
        m = s.useCallback(() => {
            t(F.Ws.LinkAccount), c({ analyticsLocations: l });
        }, [t, c, l]);
    if (!n || null == o || !r || a || null == u) return null;
    let x = d?.guild != null ? W.Ay.getGuildSplashURL({ id: d.guild.id, splash: d.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: le.uW,
        children: [
            (0, i.jsx)(p.D, {
                className: le.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: e$.intl.string(e$.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: le.kL,
                children: [
                    null != x
                        ? (0, i.jsx)("img", { className: le.ll, src: x, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: le.sB, children: (0, i.jsx)(t7.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: le.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: le.FS,
                                children: [
                                    (0, i.jsx)(p.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: e$.intl.formatToPlainString(e$.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: e$.intl.string(e$.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(E.$, {
                                variant: "secondary",
                                icon: t6.A,
                                text: e$.intl.string(e$.t.jynBQ5),
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
var ll = l(80687),
    ln = l(477155),
    li = l(935286),
    ls = l(775602),
    la = l(898736),
    lr = l(248643),
    lc = l(256905),
    lo = l(34337),
    ld = l(90721),
    lu = l(616337),
    lm = l(381641);
function lx(e) {
    let { game: t, trackAction: l } = e,
        n = s.useRef(null),
        a = (0, la._)(t),
        r = s.useMemo(() => {
            let e = a.map((e) => ({ url: e, type: "IMAGE" }));
            return [...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [a, t.screenshotUrls]),
        c = r.length > 2;
    function o(e) {
        if (null == n.current) return;
        let t = n.current.getScrollerState().scrollLeft;
        n.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === r.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: tL.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: e$.intl.string(e$.t.bNdK5x),
                  }),
                  (0, i.jsxs)("div", {
                      className: c ? lu.DA : lu.pZ,
                      children: [
                          (0, i.jsx)(C.zC, {
                              ref: n,
                              className: lu.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, i.jsx)(
                                      eN.D,
                                      {
                                          className: lu.gw,
                                          focusProps: { offset: 4, ringClassName: lu.jR },
                                          onClick: () => {
                                              l(F.Ws.ClickImage),
                                                  (0, lc.R)({
                                                      items: r,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, i.jsx)("img", {
                                              src: e.url,
                                              className: lu.Zm,
                                              alt: e$.intl.formatToPlainString(e$.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          c &&
                              (0, i.jsxs)("div", {
                                  className: lu.NA,
                                  children: [
                                      (0, i.jsx)("div", { className: lu.EJ }),
                                      (0, i.jsx)(eN.D, {
                                          className: lu.G9,
                                          onClick: () => o(-1),
                                          children: (0, i.jsx)(ln.r, { className: lu.UE, color: "currentColor" }),
                                      }),
                                      (0, i.jsx)("div", { className: lu.Pj }),
                                      (0, i.jsx)(eN.D, {
                                          className: lu.G9,
                                          onClick: () => o(1),
                                          children: (0, i.jsx)(li.E, { className: lu.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let lh = s.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: a, onSelect: c, gameName: o } = e,
            d = s.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(eN.D, {
            className: r()(lm.JS, n && lm.Y4),
            onClick: d,
            children: (0, i.jsxs)("div", {
                className: lm.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: lm.xn,
                        alt: e$.intl.formatToPlainString(e$.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: lm.UZ,
                            children: (0, i.jsx)(ll.D, { playing: n && a, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    lg = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                videoRef: n,
                mediaPlayerRef: a,
                onPlay: r,
                onPause: c,
                onFullscreenChange: o,
            } = e,
            d = s.useRef(null);
        return (
            (0, ld.A)({ videoRef: n, canvasRef: d, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: d, className: lm.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: lm.tN,
                        children: (0, i.jsx)(lr.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: !l,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: lo.bU,
                            onPlay: r,
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: lm.T9,
                            videoRef: n,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function lf(e) {
    let { game: t, trackAction: l } = e,
        [n, a] = s.useState(0),
        [r, c] = s.useState(null),
        [o, d] = s.useState(t.screenshotUrls),
        u = s.useRef(null),
        m = s.useRef(null),
        x = (0, h.bG)([ls.A], () => ls.A.useReducedMotion);
    o !== t.screenshotUrls && (d(t.screenshotUrls), a(0));
    let g = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, K.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, K.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        f = g.length > 0 ? Math.min(n, g.length - 1) : 0,
        j = g[f],
        v = j?.type === "VIDEO",
        p = s.useCallback(
            (e) => {
                let t = g[f],
                    l = g[e];
                t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? c(t.url) : c(null), a(e);
            },
            [g, f],
        ),
        [E, A] = s.useState(!1),
        N = s.useRef(null),
        I = s.useCallback(() => {
            l(v ? F.Ws.ClickTrailer : F.Ws.ClickImage);
            let e = u.current,
                t = N.current,
                n = null != e && !e.paused,
                i = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = g.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === f;
                    return { ...e, autoPlay: !!l && n, autoMute: !l || i, initialTimeSec: l ? s : void 0, videoRef: m };
                }
                return e;
            });
            (0, lc.R)({
                items: r,
                startingIndex: f,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: a,
                onClose: () => {
                    let e = m.current,
                        t = N.current,
                        l = null != e ? !e.paused : n;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        A(l);
                },
            });
        }, [l, g, f, v]),
        b = s.useCallback(() => A(!0), []),
        C = s.useCallback(() => A(!1), []),
        S = s.useCallback(() => c(null), []),
        R = s.useCallback(
            (e) => {
                e && I();
            },
            [I],
        );
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: lm.kL,
              children: [
                  v
                      ? (0, i.jsx)("div", {
                            className: lm.ND,
                            children: (0, i.jsx)(
                                lg,
                                {
                                    item: j,
                                    reducedMotion: x,
                                    videoRef: u,
                                    mediaPlayerRef: N,
                                    onPlay: b,
                                    onPause: C,
                                    onFullscreenChange: R,
                                },
                                `${f}-${j.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: lm.wp,
                            children: [
                                null != r &&
                                    !x &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: lm.Jy,
                                            onAnimationEnd: S,
                                            children: (0, i.jsx)("img", { src: r, className: lm.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: lm.QN }),
                                (0, i.jsx)(eN.D, {
                                    className: lm.gv,
                                    onClick: I,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: j.url,
                                            className: lm.c8,
                                            alt: e$.intl.formatToPlainString(e$.t.COYYrn, { game: t.name }),
                                        },
                                        j.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(e4.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: g.map((e, l) =>
                          (0, i.jsx)(
                              lh,
                              { item: e, index: l, isPlaying: E, isSelected: l === f, onSelect: p, gameName: t.name },
                              `${l}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var lj = l(847374),
    lv = l(187322),
    lp = l(110384),
    lE = l(734057),
    lA = l(309010),
    lN = l(562153),
    lI = l(420706),
    lb = l(322789),
    lC = l(506326),
    lS = l(478481);
let lR = (e) => {
    let {
            entry: t,
            onClose: l,
            onReaction: n,
            onRequestOpen: a,
            disableActivityProfileLinks: c,
            customCTA: o,
            popoutClassname: d,
            popoutPosition: u = "right",
        } = e,
        m = s.useRef(null),
        x = (0, h.bG)([lA.A, lE.A], () => lE.A.getChannel(lA.A.getChannelId())),
        g = (0, h.bG)([em.default], () => em.default.getUser(t.author_id)),
        { nick: f, avatar: j } = s.useMemo(() => {
            let e = g?.getAvatarURL(x?.guild_id, 48, !1);
            return { nick: lN.Ay.getName(x?.guild_id, x?.id, g), avatar: e };
        }, [g, x]);
    return null == g
        ? null
        : (0, i.jsx)(ep.Y, {
              targetElementRef: m,
              position: u,
              renderPopout: (e) => {
                  let { closePopout: s, updatePosition: a } = e;
                  return (0, i.jsx)("div", {
                      className: d,
                      children: (0, i.jsx)(lI.Oo, {
                          entry: t,
                          closePopout: s,
                          updatePopoutPosition: a,
                          onReaction: () => {
                              n?.(), l(), s();
                          },
                          onUserPopoutClosed: () => s(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: c,
                      }),
                  });
              },
              positionKey: `'content-entry-${t.id}`,
              onRequestOpen: () => {
                  a?.();
              },
              children: (e) =>
                  (0, i.jsx)(eN.D, {
                      innerRef: m,
                      ...e,
                      className: lS.GA,
                      children: (0, i.jsx)(lv.vN, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("img", {
                                      className: lS.my,
                                      src: j,
                                      alt: e$.intl.formatToPlainString(e$.t.IzVXxY, { userName: f }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: lS.Su,
                                      children: (0, i.jsxs)("div", {
                                          className: r()(tL.fi, tL.Kt),
                                          children: [
                                              (0, i.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: f,
                                              }),
                                              (0, i.jsx)(lC.mG, {
                                                  location: lC.N5.APP_LAUNCHER,
                                                  children: lb.n.map((e, l) => (0, i.jsx)(e, { entry: t }, l)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != o
                                      ? o
                                      : (0, i.jsx)("div", {
                                            className: lS.Br,
                                            children: (0, i.jsx)(lp.W, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
function lk(e) {
    let { entry: t, viewId: l, officialGuildId: n, source: s } = e;
    return (0, i.jsx)(lR, {
        ...e,
        onReaction: () => {
            (0, F.Tn)({
                action: F.Ws.SendMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: l,
                officialGuildId: n,
                source: s,
            });
        },
        onRequestOpen: () => {
            (0, F.Tn)({
                action: F.Ws.ClickMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: l,
                officialGuildId: n,
                source: s,
            });
        },
    });
}
var ly = l(759203);
function lL(e) {
    let { entries: t, viewId: l, officialGuildId: n, onClose: a, source: c } = e,
        o = t.length > 7,
        [d, u] = s.useState(!1),
        m = s.useMemo(() => t.slice(0, o && !d ? 6 : void 0), [t, o, d]);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(p.D, {
                className: tL.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: e$.intl.string(e$.t.ak8OHk),
            }),
            0 === t.length
                ? (0, i.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: ly.p$,
                      children: e$.intl.string(e$.t.R5fYVO),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: r()(ly.yz, { [ly.T6]: o && !d }),
                              children: (0, i.jsx)("div", {
                                  className: tL.fi,
                                  children: m.map((e) =>
                                      (0, i.jsx)(
                                          lk,
                                          { entry: e, viewId: l, onClose: a, officialGuildId: n, source: c },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          o &&
                              !d &&
                              (0, i.jsxs)(eN.D, {
                                  className: ly.ND,
                                  onClick: () => u(!0),
                                  children: [
                                      (0, i.jsx)(v.E, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: e$.intl.string(e$.t.yohc6E),
                                      }),
                                      (0, i.jsx)(lj.a, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
var lT = l(714991),
    lO = l(127537),
    lM = l(149225);
function l_(e) {
    let { game: t, trackAction: l, onInviteResolved: n, closeModal: a } = e,
        [c, o] = s.useState(),
        d = (0, h.bG)([eg.A], () => c?.guild?.id != null && eg.A.isMember(c?.guild?.id)),
        u = s.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ex.V.DISCORD;
                }),
            [t.websites],
        );
    s.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != c && c.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, eh.A)(t);
                !0 !== e.banned && (o(e.invite), null != e.invite && n?.(e.invite));
            }
        };
        null != u && e(u.url);
    }, [u, n, c]);
    let m = s.useCallback(() => {
        null != c &&
            (l(F.Ws.JoinOfficialServer),
            a(),
            B.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: c, code: c.code, context: et.BRT.APP }));
    }, [c, l, a]);
    if (null == c || null == c.guild || !c.guild.features.includes(et.GuildFeatures.VERIFIED)) return null;
    let x = W.Ay.getGuildIconURL({ id: c.guild.id, icon: c.guild.icon, size: 32 });
    return (0, i.jsxs)("div", {
        className: tL.fi,
        children: [
            (0, i.jsx)(p.D, {
                className: tL.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: e$.intl.string(e$.t.kBDZSL),
            }),
            (0, i.jsxs)("div", {
                className: r()(tL.nM, tL.mX),
                children: [
                    (0, i.jsx)("img", {
                        className: lO.$f,
                        src: x,
                        alt: e$.intl.formatToPlainString(e$.t.xm6W9D, { guildName: c.guild.name }),
                    }),
                    (0, i.jsxs)("div", {
                        className: lO.U5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: lO.YS,
                                children: [
                                    (0, i.jsx)(v.E, { variant: "text-sm/semibold", children: c.guild.name }),
                                    (0, i.jsx)(lT.A, { guild: c.guild, size: 16 }),
                                ],
                            }),
                            null != c.approximate_member_count &&
                                (0, i.jsx)(v.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: e$.intl.format(e$.t.zRl6XR, { count: c.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(E.$, {
                variant: "secondary",
                text: d ? e$.intl.string(e$.t.cEnaWx) : e$.intl.string(e$.t.XpeFYr),
                onClick: m,
                fullWidth: !0,
            }),
        ],
    });
}
function lG(e) {
    let { trackAction: t, closeModal: l } = e,
        { canStartAuthorization: n, hasAlreadyLinked: a, officialInvite: r, isMember: c } = eM(),
        o = s.useCallback(() => {
            null != r &&
                (t(F.Ws.JoinOfficialServer),
                l(),
                B.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: r, code: r.code, context: et.BRT.APP }));
        }, [r, t, l]);
    if (null == r || null == r.guild || !r.guild.features.includes(et.GuildFeatures.VERIFIED)) return null;
    let d = W.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        u = W.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        m = (n && !a) || null == u,
        x = (0, i.jsx)("img", {
            className: lM.$f,
            src: d,
            alt: e$.intl.formatToPlainString(e$.t.xm6W9D, { guildName: r.guild.name }),
            draggable: !1,
        }),
        h = m ? lM.To : lM.Kt,
        g = m ? lM.yj : lM.FS;
    return (0, i.jsxs)("div", {
        className: lM.uW,
        children: [
            (0, i.jsx)(p.D, {
                className: lM.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: e$.intl.string(e$.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: lM.kL,
                children: [
                    !m && null != u && (0, i.jsx)("img", { className: lM.ll, src: u, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: lM.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: h,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: lM._C,
                                              children: (0, i.jsx)("div", { className: lM.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: g,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: lM.YS,
                                                children: [
                                                    (0, i.jsx)(lT.A, { guild: r.guild, size: 16 }),
                                                    (0, i.jsx)(p.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: r.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, tf.uJ)(r.guild?.description) &&
                                                (0, i.jsx)(v.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: r.guild?.description,
                                                }),
                                            null != r.approximate_member_count || null != r.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: lM.iR,
                                                      children: [
                                                          null != r.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: lM.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: lM._o }),
                                                                      (0, i.jsx)(v.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: e$.intl.format(e$.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  r.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != r.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: lM.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: lM.jk }),
                                                                      (0, i.jsx)(v.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: e$.intl.format(e$.t.zRl6XR, {
                                                                              count: r.approximate_member_count,
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
                                text: c ? e$.intl.string(e$.t.cEnaWx) : e$.intl.string(e$.t.XpeFYr),
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
function lP(e) {
    let { game: t } = e,
        l = (t.companies ?? []).filter((e) => e.roles.includes(X.wk.PUBLISHER));
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: tL.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: e$.intl.string(e$.t["4Byy/G"]),
                  }),
                  (0, i.jsx)(v.E, { variant: "text-sm/normal", children: l.map((e) => e.name).join(", ") }),
              ],
          });
}
var lw = l(49381),
    lD = l(223273);
function lV(e, t) {
    if (null == e || null == t || t < 10) return lD.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 ? lD.vI.POSITIVE : t < 500 || e < 95 ? lD.vI.VERY_POSITIVE : lD.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return lD.vI.MOSTLY_POSITIVE;
    if (e >= 40) return lD.vI.MIXED;
    if (e >= 20) return lD.vI.MOSTLY_NEGATIVE;
    else if (t < 50) return lD.vI.NEGATIVE;
    else if (t < 500) return lD.vI.VERY_NEGATIVE;
    return lD.vI.OVERWHELMINGLY_NEGATIVE;
}
function lW(e) {
    switch (e) {
        case lD.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case lD.vI.OVERWHELMINGLY_POSITIVE:
        case lD.vI.VERY_POSITIVE:
        case lD.vI.POSITIVE:
        case lD.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case lD.vI.MIXED:
            return "steam-review-text-mixed";
        case lD.vI.MOSTLY_NEGATIVE:
        case lD.vI.NEGATIVE:
        case lD.vI.VERY_NEGATIVE:
        case lD.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
let lU = (0, ea.mj)({
    name: "2026-04-steam-reviews-v2",
    kind: "user",
    defaultConfig: { recentEnabled: !1, englishEnabled: !1 },
    variations: {
        1: { recentEnabled: !0, englishEnabled: !1 },
        2: { recentEnabled: !1, englishEnabled: !0 },
        3: { recentEnabled: !0, englishEnabled: !0 },
    },
});
var lY =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    lF = l(778591);
function lH(e) {
    let { rating: t, strokeColor: l } = e,
        n = 2 * Math.PI * 16,
        s = Math.min(Math.max(t, 0), 100) / 100,
        a = s * n;
    return (0, i.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - s) * 360) / 2}deg)` },
        children: (0, i.jsx)("circle", {
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
var lB = l(99392);
function lz(e) {
    let { url: t, trackAction: l, title: n, rating: a, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, ty.A)(),
        d = lV(a, r),
        u = lW(d),
        m = s.useCallback(() => {
            l(F.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(eN.D, {
        onClick: m,
        className: lB.nf,
        role: "link",
        "aria-label": e$.intl.string(e$.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: lB.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: lB.tN,
                    children: [
                        (0, i.jsx)(lw.N, { size: "sm", color: eb.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(p.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    g.m,
                    {
                        text:
                            d === lD.vI.NO_USER_REVIEWS
                                ? e$.intl.string(e$.t.CLMt8J)
                                : e$.intl
                                      .format(
                                          "recent" === c
                                              ? e$.t.TzvC0k
                                              : "localized" === c
                                                ? e$.t.EOfrwm
                                                : e$.t["lzANJ/"],
                                          { rating: a, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: lB.Z0,
                            children: [
                                (0, i.jsx)(v.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    children: (function (e) {
                                        switch (e) {
                                            case lD.vI.NO_USER_REVIEWS:
                                                return e$.intl.string(e$.t.CLMt8J);
                                            case lD.vI.OVERWHELMINGLY_POSITIVE:
                                                return e$.intl.string(e$.t["75sx1S"]);
                                            case lD.vI.VERY_POSITIVE:
                                                return e$.intl.string(e$.t["EkOVg+"]);
                                            case lD.vI.POSITIVE:
                                                return e$.intl.string(e$.t.ZUkFtr);
                                            case lD.vI.MOSTLY_POSITIVE:
                                                return e$.intl.string(e$.t.M7Z09a);
                                            case lD.vI.MIXED:
                                                return e$.intl.string(e$.t.c8yuHR);
                                            case lD.vI.MOSTLY_NEGATIVE:
                                                return e$.intl.string(e$.t.H0MSjG);
                                            case lD.vI.NEGATIVE:
                                                return e$.intl.string(e$.t.vpLrgz);
                                            case lD.vI.VERY_NEGATIVE:
                                                return e$.intl.string(e$.t["5spYuX"]);
                                            case lD.vI.OVERWHELMINGLY_NEGATIVE:
                                                return e$.intl.string(e$.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== lD.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(v.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: e$.intl
                                            .format(e$.t.sgIoin, { rating_count: r.toLocaleString() })
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
function lK(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: a } = t,
        r = a?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, ty.A)(),
        x = s.useCallback(() => {
            n(F.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(eN.D, {
        onClick: x,
        className: lB.nf,
        role: "link",
        "aria-label": e$.intl.string(e$.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: lB.Ur,
            children: [
                (0, i.jsx)(p.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: e$.intl.string(e$.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: lB.WA,
                    children: [
                        null != c ? (0, i.jsx)(lX, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, i.jsx)(lJ, { rating: o, tier: c }) : null,
                        u
                            ? (0, i.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: lW(lD.vI.NO_USER_REVIEWS),
                                  children: e$.intl.string(e$.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function lX(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case lY.MIGHTY:
                    return e$.intl.string(e$.t.aZej2g);
                case lY.STRONG:
                    return e$.intl.string(e$.t.MLxnSg);
                case lY.FAIR:
                    return e$.intl.string(e$.t["3f19KA"]);
                case lY.WEAK:
                    return e$.intl.string(e$.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case lY.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case lY.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case lY.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case lY.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        g.m,
        {
            text: l,
            children: (0, i.jsx)("div", {
                className: lB.TE,
                children: (0, i.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lJ(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: s } = (function (e) {
            let t = "";
            switch (e) {
                case lY.MIGHTY:
                    t = "#fc430a";
                    break;
                case lY.STRONG:
                    t = "#9e00b4";
                    break;
                case lY.FAIR:
                    t = "#4aa1ce";
                    break;
                case lY.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        g.m,
        {
            text: e$.intl.string(e$.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: lB.TE,
                style: { backgroundColor: s },
                children: [
                    (0, i.jsx)(lH, { rating: t, strokeColor: n }),
                    (0, i.jsx)(v.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: lB.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let l$ = function (e) {
    var t;
    let { game: l, trackAction: n } = e,
        s = (0, lF.I)(l.id),
        a = l.opencriticUrl,
        r = lU.useConfig({ location: "GameProfileReviews" }),
        c = r.recentEnabled || r.englishEnabled,
        o = l.steamReleaseStatus !== m.Y.RETIRED_ABANDONED && null != s,
        d = l.reviews?.steam,
        u = lV(d?.recentRating, d?.recentRatingCount),
        x = o && r.recentEnabled && u !== lD.vI.NO_USER_REVIEWS,
        h =
            r.englishEnabled &&
            null != (t = d) &&
            null != t.localizedRating &&
            null != t.localizedRatingCount &&
            null != t.ratingCount &&
            t.localizedRatingCount >= 200 &&
            t.ratingCount >= 2e3,
        g = h ? d?.localizedRating : d?.rating,
        f = h ? d?.localizedRatingCount : d?.ratingCount,
        j = c ? (h ? e$.t["aWb+V4"] : e$.t["8e4LiB"]) : e$.t.whmopT,
        v = l.reviews?.opencritic != null && null != a;
    return o || x || v
        ? (0, i.jsxs)("div", {
              className: lB.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: lB.Gf,
                      children: (0, i.jsx)(p.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: e$.intl.string(e$.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: lB.kL,
                      children: [
                          x && null != s
                              ? (0, i.jsx)("div", {
                                    className: lB.WH,
                                    children: (0, i.jsx)(lz, {
                                        url: s,
                                        trackAction: n,
                                        title: e$.intl.string(e$.t.MQGNsN),
                                        rating: d?.recentRating,
                                        ratingCount: d?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          o && null != s
                              ? (0, i.jsx)("div", {
                                    className: lB.WH,
                                    children: (0, i.jsx)(lz, {
                                        url: s,
                                        trackAction: n,
                                        title: e$.intl.string(j),
                                        rating: g,
                                        ratingCount: f,
                                        tooltipVariant: h ? "localized" : "all",
                                    }),
                                })
                              : null,
                          v && null != a
                              ? (0, i.jsx)("div", {
                                    className: lB.WH,
                                    children: (0, i.jsx)(lK, { game: l, url: a, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var lZ = l(693477),
    lQ = l(674658),
    lq = l(491438),
    l0 = l(561769),
    l1 = l(758836),
    l8 = l(804163);
let l4 = s.createContext({ closeModal: () => {}, trackAction: () => {} }),
    l2 = (e) => {
        let { skuId: t, aspectRatio: l } = e,
            { product: n } = (0, lQ.q)(t, !0),
            a = s.useContext(l0.v3),
            { closeModal: r, trackAction: c } = s.useContext(l4),
            o = s.useCallback(() => {
                c(F.Ws.DiscordCollectiblesShopItem),
                    r(),
                    (0, lZ.Cz)({
                        analyticsLocations: [k.A.GAME_PROFILE],
                        analyticsSource: k.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: l1.G2.CATALOG,
                    });
            }, [c, r, t]);
        if (null == n) return null;
        let { flattenProductVariants: d, ...u } = a;
        return (0, i.jsx)(l0.v3.Provider, {
            value: { flattenProductVariants: d ?? !0, ...u },
            children: (0, i.jsx)(lq.A, {
                skuId: t,
                aspectRatio: l,
                cardClassName: l8.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function l3(e) {
    let { game: t, closeModal: l, trackAction: n } = e,
        a = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, h.cf)([es.A], () => ({
                hasFetched: null != e && es.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? es.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || t || es.A.isShopCollectionFetching(e) || el(e);
                }, [e, t]),
                l ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = s.useCallback(() => {
            n(F.Ws.DiscordCollectiblesShop),
                l(),
                (0, lZ.Cz)({
                    analyticsLocations: [k.A.GAME_PROFILE],
                    analyticsSource: k.A.GAME_PROFILE,
                    tab: l1.G2.CATALOG,
                });
        }, [n, l]),
        c = s.useMemo(() => ({ closeModal: l, trackAction: n }), [l, n]);
    return 0 === a.length
        ? null
        : (0, i.jsx)(l4.Provider, {
              value: c,
              children: (0, i.jsx)(ta, {
                  title: e$.intl.string(e$.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)(e4.A, { gap: "md", children: a.map((e) => (0, i.jsx)(l2, { skuId: e }, e)) }),
              }),
          });
}
var l5 = l(735438),
    l9 = l.n(l5),
    l6 = l(192308),
    l7 = l(311043),
    ne = l(192389);
let nt = (e) => {
    let { game: t, onClose: l, trackClick: n } = e;
    return (0, i.jsx)(g.m, {
        asContainer: !0,
        text: t.name,
        children: (0, i.jsx)(eN.D, {
            className: ne.fS,
            onClick: async () => {
                n(F.Ws.ClickSimilarGame, t.id),
                    (0, l6.openModalLazy)(() =>
                        Promise.resolve((e) => (0, i.jsx)(nD, { gameId: t.id, source: F.Ob.SimilarGames, ...e })),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    l();
            },
            children: (0, i.jsx)(ev.A, { game: t, className: ne.n1, size: ev.w.SMALL }),
        }),
    });
};
function nl(e) {
    let { gameId: t, onClose: l, trackAction: n, similarGames: s, similarGamesError: a } = e,
        c = (0, h.bG)([es.A, l7.A], () => {
            let e = void 0 === es.A.getSimilarGames(t) && null == es.A.getSimilarGamesError(t),
                l = s.some((e) => l7.A.isFetching(e));
            return e || l;
        }),
        o = (0, h.yK)([l7.A], () =>
            s
                .map((e) => l7.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, ej.T_)(e))
                .slice(0, 5),
        );
    return ((0, P.I)(t), (0, P.x)(s), c && null == a)
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", { className: r()(ne.vM, tL.bV) }),
                  (0, i.jsx)("div", {
                      className: r()(tL.nM, tL.iH),
                      children: l9()
                          .range(0, 5)
                          .map((e) => (0, i.jsx)("div", { className: ne.nn }, e)),
                  }),
              ],
          })
        : (c || 0 !== o.length) && null == a
          ? (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(p.D, {
                        className: tL.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: e$.intl.string(e$.t["6rLyQB"]),
                    }),
                    (0, i.jsx)("div", {
                        className: ne.D$,
                        children: o.map((e) => (0, i.jsx)(nt, { game: e, onClose: l, trackClick: n }, e.id)),
                    }),
                ],
            })
          : null;
}
var nn = l(317560),
    ni = l(183802),
    ns = l(627771);
function na(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        a = s.useMemo(() => {
            if (null != n)
                return (e, t) => {
                    let { skuId: l, applicationId: i } = t;
                    e.preventDefault(), n(l, i);
                };
        }, [n]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(e4.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: ns.B,
                          children: (0, i.jsx)(ni.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: ni.s.SMALL,
                              analyticsLocations: l,
                              onClick: a,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function nr(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = eM(),
        { analyticsLocations: a } = (0, y.Ay)([k.A.GAME_PROFILE]),
        r = s.useCallback(() => {
            l?.guildId != null && (t(F.Ws.GameShop), n(), (0, eT.default)({ guildId: l.guildId }));
        }, [l, t, n]),
        c = s.useCallback(
            (e, i) => {
                let s = l?.guildId;
                null != s &&
                    (t(F.Ws.GameShopItem),
                    (0, nn.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: a,
                        onClose: () => {
                            location.pathname.indexOf(et.BVt.CHANNELS_GAME_SHOP(s)) >= 0 && n();
                        },
                    }));
            },
            [t, n, a, l],
        );
    if (null == l) return null;
    let { skuIds: o } = l;
    return (0, i.jsx)(ta, {
        title: e$.intl.string(e$.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(na, { skuIds: o, analyticsLocations: a, onCardClick: c }),
    });
}
let nc = new Set(["1402418703554842694", "356877880938070016"]),
    no = [ex.V.EPICGAMES, ex.V.STEAM, ex.V.ROBLOX, ex.V.BATTLENET, ex.V.RIOT, ex.V.MINECRAFT];
var nd = l(349361),
    nu = l(924895),
    nm = l(422688),
    nx = l(505200),
    nh = l(695250);
let ng = function (e) {
    switch (e.category) {
        case ex.V.STEAM:
            return {
                icon: lw.N,
                text: e$.intl.string(e$.t.FsANs4),
                ariaLabel: e$.intl.string(e$.t["P+ePTG"]),
                action: F.Ws.SteamStoreLink,
                url: e.url,
            };
        case ex.V.EPICGAMES:
            return {
                icon: nd.r,
                text: e$.intl.string(e$.t.ZbBMHa),
                ariaLabel: e$.intl.string(e$.t.BwX0UW),
                action: F.Ws.EpicStoreLink,
                url: e.url,
            };
        case ex.V.ROBLOX:
            return {
                icon: nu.H,
                text: e$.intl.string(e$.t["pJ+P+h"]),
                ariaLabel: e$.intl.string(e$.t.tYxpdf),
                action: F.Ws.RobloxStoreLink,
                url: e.url,
            };
        case ex.V.BATTLENET:
            return {
                icon: nm.a,
                text: e$.intl.string(e$.t["A7grp+"]),
                ariaLabel: e$.intl.string(e$.t.x9at20),
                action: F.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case ex.V.RIOT:
            return {
                icon: nx.A,
                text: e$.intl.string(e$.t.h6MapL),
                ariaLabel: e$.intl.string(e$.t["528nvc"]),
                action: F.Ws.RiotStoreLink,
                url: e.url,
            };
        case ex.V.MINECRAFT:
            return {
                icon: nh.m,
                text: e$.intl.string(e$.t["HZbmO+"]),
                ariaLabel: e$.intl.string(e$.t.WWTqYn),
                action: F.Ws.MinecraftStoreLink,
                url: e.url,
            };
    }
    return null;
};
var nf = l(629004);
function nj(e) {
    let { isTwoColumn: t } = eM();
    return (0, i.jsx)("div", {
        className: nf.U,
        children: (0, i.jsx)(E.$, {
            ...e,
            variant: t ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link",
        }),
    });
}
function nv(e) {
    let t,
        l,
        n,
        i,
        a = er.useConfig({ location: "GameProfileStoreLinks" }).storeLinksEnabled,
        r =
            ((t = (0, lF.I)(e?.id)),
            (l = e?.id),
            (n = e?.websites),
            (i = e?.steamReleaseStatus),
            s.useMemo(() => {
                if (null == n || null == l) return [];
                let e = n.filter(
                    (e) =>
                        (e.category !== ex.V.EPICGAMES || !!nc.has(l)) &&
                        (e.category !== ex.V.STEAM || i !== m.Y.RETIRED_ABANDONED) &&
                        no.includes(e.category),
                );
                return (
                    null == t ||
                        i === m.Y.RETIRED_ABANDONED ||
                        e.some((e) => e.category === ex.V.STEAM) ||
                        e.push({ category: ex.V.STEAM, url: t }),
                    e.sort((e, t) => (e.category === ex.V.STEAM ? -1 : +(t.category === ex.V.STEAM)))
                );
            }, [t, n, l, i]));
    return { storeWebsites: r, showsStoreLinks: a && r.length > 0 && null != e };
}
let np = function (e) {
    let { game: t, trackAction: n } = e,
        a = (0, ty.A)(),
        { showsStoreLinks: r, storeWebsites: c } = nv(t),
        o = s.useMemo(() => c.map(ng).filter((e) => null != e), [c]);
    if (!r) return null;
    if (1 === o.length) {
        let [e] = o;
        return (0, i.jsx)(nj, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), a(e.url);
            },
        });
    }
    return (0, i.jsx)(nj, {
        text: e$.intl.string(e$.t["/hMurx"]),
        "aria-label": e$.intl.string(e$.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: s } = e;
                (0, l6.openModalLazy)(async () => {
                    let { default: e } = await l.e("76758").then(l.bind(l, 459477));
                    return (l) => (0, i.jsx)(e, { game: t, websiteButtons: n, trackAction: s, ...l });
                });
            })({ game: t, websiteButtons: o, trackAction: n }),
    });
};
var nE = l(566679),
    nA = l(123292),
    nN = l(981355),
    nI = l(242021);
function nb(e) {
    let { game: t, trackAction: l } = e,
        [n, a] = s.useState(t?.summaryLocalized != null),
        [c, o] = s.useState(!0),
        [d, u] = s.useState(!1),
        m = s.useRef(null),
        { width: x, height: h } = (0, nN.A)();
    return (s.useEffect(() => {
        let e = m.current;
        null != e && u(e.scrollHeight - e.clientHeight > 1 || !c);
    }, [m, x, h, c]),
    null == t.description)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(tL.fi, tL.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, i.jsxs)("div", {
                          className: r()(tL.nM, tL.Lc),
                          children: [
                              (0, i.jsx)(nE.Z, { color: eb.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, i.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: n
                                      ? e$.intl.format(e$.t.aZ2iIp, { onShowOriginal: () => a(!1) })
                                      : e$.intl.format(e$.t["/2ylF4"], { onShowTranslated: () => a(!0) }),
                              }),
                          ],
                      }),
                  (0, i.jsx)(v.E, {
                      ref: m,
                      lineClamp: c ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: n ? t.summaryLocalized : t.description,
                  }),
                  d &&
                      (0, i.jsx)(eN.D, {
                          className: tL.vk,
                          onClick: () => {
                              l(c ? F.Ws.ShowMore : F.Ws.ShowLess), o(!c);
                          },
                          children: (0, i.jsx)(v.E, {
                              variant: "text-sm/semibold",
                              children: c ? e$.intl.string(e$.t.lBeKY2) : e$.intl.string(e$.t["6MwJo/"]),
                          }),
                      }),
                  (0, i.jsx)(tK, { className: nI.B, game: t }),
              ],
          });
}
function nC(e) {
    let { game: t, trackAction: l } = e,
        n = s.useRef(null),
        {
            isExpanded: a,
            showToggle: c,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [l, n] = s.useState("full");
            s.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let l = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        n((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return l.observe(t), () => l.disconnect();
            }, [e]);
            let i = s.useCallback(() => {
                "expanded" === l
                    ? (t(F.Ws.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(F.Ws.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(n, l),
        { isTwoColumn: d } = eM(),
        u = s.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = a ? e$.intl.string(e$.t["6MwJo/"]) : e$.intl.string(e$.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tL.fi, tL.mX),
        children: [
            (0, i.jsx)(v.E, { ref: n, lineClamp: a ? void 0 : u, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(nA.Q, { onClick: o, text: m }),
        ],
    });
}
var nS = l(952311);
let nR = () =>
    (0, i.jsxs)("div", {
        className: tL.uv,
        children: [
            (0, i.jsx)(j.Y, { size: "xxs" }),
            (0, i.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: e$.intl.string(e$.t.kAlUsy) }),
        ],
    });
function nk(e) {
    let { game: t, entries: l, trackAction: n } = e,
        a = s.useMemo(() => t?.genres.map(U.du).join(", "), [t]),
        [c] = s.useState(() => Math.random()),
        d = s.useMemo(() => {
            if (null == t) return "";
            if (null != t.bannerHash)
                return W.Ay.getGameAssetURL({ id: t.id, hash: t.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            let e = t.getArtworkURLs(),
                l = t.screenshotUrls ?? [];
            if (e.length > 0) {
                let t = Math.floor(c * e.length);
                return e[t];
            }
            if (l.length > 0) {
                let e = Math.floor(c * l.length);
                return l[e];
            }
            return "";
        }, [t, c]),
        u = t.getIconURL(160, W.QB ? "webp" : "png"),
        m = null != t.firstReleaseDate ? new Date(t.firstReleaseDate).getTime() : Y.default.extractTimestamp(t.id),
        h = 7 >= o()().diff(o()(m), "days"),
        g = l.some((e) => (0, G.CZ)(e) === x.m.GLOBAL),
        f = t.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: tL.is, style: { backgroundImage: `url("${d}")` } }),
            (0, i.jsxs)("div", {
                className: r()(tL.Qs, tL.fi, tL.iH, tL.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: tL.xx,
                        children: [
                            (0, i.jsx)("div", {
                                className: tL.bb,
                                children: (0, i.jsx)(ev.A, { game: t, className: tL.wm, size: ev.w.LARGE }),
                            }),
                            (0, i.jsx)(eQ, { gameId: t.id, className: tL.Gg, trackAction: n }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: r()(tL.nM, tL.Lc, tL.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.D, { variant: "heading-xl/bold", children: f }),
                                (0, i.jsxs)("div", {
                                    className: r()(tL.nM, tL.Lc),
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("img", {
                                                className: tL.Gt,
                                                src: u,
                                                height: 16,
                                                alt: e$.intl.formatToPlainString(e$.t["nh+jWk"], { game: f }),
                                            }),
                                        (0, i.jsx)(v.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: a,
                                        }),
                                        h &&
                                            (0, i.jsx)(v.E, {
                                                variant: "eyebrow",
                                                className: tL.Ad,
                                                children: e$.intl.string(e$.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(v.E, { variant: "text-sm/medium", children: " \xb7 " }),
                                                    (0, i.jsx)(nR, {}),
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
function ny(e) {
    let {
        game: t,
        entries: l,
        officialGuildInvite: n,
        similarGames: s,
        similarGamesError: a,
        onClose: r,
        viewId: c,
        trackAction: o,
        source: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: tL.V0,
        children: [
            (0, i.jsx)(lL, { entries: l, viewId: c, officialGuildId: n?.guild?.id, onClose: r, source: d }),
            (0, i.jsx)(lx, { game: t, trackAction: o }),
            (0, i.jsx)(nl, { gameId: t.id, onClose: r, similarGames: s, similarGamesError: a, trackAction: o }),
        ],
    });
}
function nL(e) {
    let { game: t, trackAction: l, closeModal: n } = e;
    return (0, i.jsxs)("div", {
        className: nS.oC,
        children: [
            (0, i.jsxs)("div", {
                className: nS.lM,
                children: [(0, i.jsx)(lf, { game: t, trackAction: l }), (0, i.jsx)(nC, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(tu, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(nr, { trackAction: l }),
            (0, i.jsx)(l3, { game: t, closeModal: n, trackAction: l }),
        ],
    });
}
function nT(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        s = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED,
        { closeModal: a } = eM();
    return (0, i.jsxs)("div", {
        className: tL.V0,
        children: [
            (0, i.jsx)(lf, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: nS.gr,
                children: [
                    (0, i.jsx)(t5, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: nS.E1,
                        children: [
                            (0, i.jsx)(np, { game: t, trackAction: l }),
                            (0, i.jsx)(nC, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(lt, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(lG, { closeModal: a, trackAction: l }),
            (0, i.jsx)(tu, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(nr, { trackAction: l }),
            (0, i.jsx)(l3, { game: t, closeModal: a, trackAction: l }),
            s && (0, i.jsx)(l$, { game: t, trackAction: l }),
            (0, i.jsx)(tZ, { game: t, trackAction: l }),
        ],
    });
}
function nO(e) {
    let { onClose: t, onCloudPlayClick: l, analyticsLocations: n, trackAction: a } = e;
    (0, L.A)({
        name: d.ImpressionNames.CLOUD_PLAY_CTA,
        type: d.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = s.useCallback(() => {
        a(F.Ws.CloudPlay), t(), l();
    }, [t, l, a]);
    return (0, i.jsx)(g.m, {
        text: e$.intl.string(e$.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(E.$, {
            icon: A.h,
            text: e$.intl.string(e$.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function nM(e) {
    let { gameId: t, analyticsLocations: l } = e,
        n = (0, O.h)(t),
        i = (0, R.A)({ application: n, analyticsLocations: l });
    return { onCloudPlayClick: i, isCloudPlayButtonShown: !(0, w.L)(t) && null != i };
}
function n_(e) {
    let {
            game: t,
            onSetOfficialGuildInvite: l,
            officialGuildInvite: n,
            trackAction: a,
            onClose: c,
            analyticsLocations: o,
        } = e,
        d = s.useCallback(() => {
            c(), (0, D.closeUserProfileModal)();
        }, [c]),
        { isCloudPlayButtonShown: u, onCloudPlayClick: m } = nM({ gameId: t.id, analyticsLocations: o });
    return (0, i.jsxs)("div", {
        className: r()(tL.pz, tL.fi, tL.iH),
        children: [
            (0, i.jsxs)("div", {
                className: tL.NC,
                children: [
                    (0, i.jsx)(tQ, { invite: n, closeModal: d, trackAction: a }),
                    u &&
                        null != m &&
                        (0, i.jsx)(nO, { onClose: d, onCloudPlayClick: m, analyticsLocations: o, trackAction: a }),
                ],
            }),
            (0, i.jsx)(p.D, { variant: "heading-md/bold", children: e$.intl.string(e$.t.CI0vSJ) }),
            (0, i.jsxs)("div", {
                className: tL.V0,
                children: [
                    (0, i.jsx)(nb, { game: t, trackAction: a }),
                    (0, i.jsx)(l_, { game: t, onInviteResolved: l, closeModal: d, trackAction: a }),
                    (0, i.jsx)(tw, { game: t, trackAction: a }),
                    (0, i.jsx)(lP, { game: t }),
                    (0, i.jsx)(tg, { game: t, trackAction: a }),
                    (0, i.jsx)(v.E, {
                        variant: "text-xxs/normal",
                        children: e$.intl.format(e$.t.pch2Jw, { igdbLink: tX.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function nG(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        { closeModal: s } = eM(),
        { isCloudPlayButtonShown: a, onCloudPlayClick: c } = nM({ gameId: t.id, analyticsLocations: n }),
        { showsStoreLinks: o } = nv(t),
        d = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(nS.Pn, tL.fi, tL.iH, o ? nS.sV : nS.gF),
        children: [
            a && null != c
                ? (0, i.jsx)("div", {
                      className: tL.NC,
                      children: (0, i.jsx)(nO, {
                          onClose: s,
                          onCloudPlayClick: c,
                          analyticsLocations: n,
                          trackAction: l,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: tL.V0,
                children: [
                    (0, i.jsx)(np, { game: t, trackAction: l }),
                    (0, i.jsx)(lt, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(lG, { closeModal: s, trackAction: l }),
                    d && (0, i.jsx)(l$, { game: t, trackAction: l }),
                    (0, i.jsx)(tZ, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
function nP(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: a,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, M.Ay)(),
        m = (0, h.bG)([V.default], () => V.default.locale),
        { analyticsLocations: x } = (0, y.Ay)(k.A.GAME_PROFILE),
        g = s.useMemo(() => (0, F.u9)(), []),
        f = (0, h.yK)([es.A], () => (es.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [j, v] = s.useState(null),
        p = (0, ec.s)(t),
        [E, A] = s.useState(null),
        { data: C, refetch: R } = (0, P.I)(t),
        L = C?.name ?? "",
        T = (e, n) => {
            (0, F.Tn)({
                gameName: L,
                gameId: t,
                action: e,
                similarGameId: n,
                viewId: g,
                officialGuildId: E?.guild?.id,
                source: l,
            });
        };
    return ((0, S.Ay)(() => {
        (0, F.rw)({ source: l, viewId: g, gameId: t, gameName: L, authorId: n, profileType: F.HV.FullProfile }),
            (0, _.He)();
    }),
    s.useEffect(() => {
        m.startsWith("en") || C?.summaryLocalized != null || R();
    }, [t, C?.summaryLocalized, m, R]),
    s.useEffect(() => {
        (async () => {
            if (0 === f.length) {
                v(null);
                try {
                    await en(t);
                } catch (e) {
                    v(e);
                }
            }
        })();
    }, [t, f]),
    (0, S.Ay)(() => () => {
        let e = Date.now(),
            l = p.map((t) => {
                let l = (0, G.JM)(t) ? (0, G.W6)(t, e) : (0, G.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: l });
            });
        (0, F.V_)({
            viewId: g,
            gameId: t,
            gameName: L,
            playedFriendIds: p.map((e) => e.author_id),
            playedFriendsData: l,
            similarGames: f.filter(ej.oS).slice(0, 5),
            officialGuildId: E?.guild?.id,
        });
    }),
    null == C)
        ? null
        : (0, i.jsx)(y.f5, {
              value: x,
              children: (0, i.jsx)(N.d, {
                  transitionState: a,
                  onClose: c,
                  size: "xl",
                  children: (0, i.jsx)("div", {
                      className: r()(u, tL.fn),
                      children: (0, i.jsxs)(I.Ip, {
                          orientation: "auto",
                          children: [
                              (0, i.jsx)(nk, { game: C, entries: p, trackAction: T }),
                              (0, i.jsx)(b.F, {
                                  children: (0, i.jsxs)("div", {
                                      className: r()(tL.Qs, tL.rb),
                                      children: [
                                          (0, i.jsx)(ny, {
                                              game: C,
                                              entries: p,
                                              officialGuildInvite: E,
                                              similarGames: f,
                                              similarGamesError: j,
                                              onClose: c,
                                              viewId: g,
                                              source: l,
                                              trackAction: T,
                                          }),
                                          (0, i.jsx)(n_, {
                                              game: C,
                                              onSetOfficialGuildInvite: A,
                                              officialGuildInvite: E,
                                              onClose: c,
                                              appContext: o,
                                              source: l,
                                              trackExternalAction: d,
                                              trackAction: T,
                                              analyticsLocations: x,
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
function nw(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: a,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
            initialScrollOffset: m,
        } = e,
        [x, g] = s.useState(!0),
        [j, v] = s.useState(null),
        { clientThemesClassName: p } = (0, M.Ay)(),
        E = (0, h.bG)([V.default], () => V.default.locale),
        A = s.useMemo(() => (0, F.u9)(), []),
        { analyticsLocations: N } = (0, y.Ay)(k.A.GAME_PROFILE),
        I = (0, ec.s)(t),
        { data: R } = (0, P.I)(t),
        L = R?.name ?? "",
        {
            hasAlreadyLinked: w,
            canStartAuthorization: W,
            fetched: U,
            startAuthorization: Y,
            connectionApp: H,
        } = (0, T.RD)(R),
        { invite: B, isMember: z } = ef(R, v),
        { socialLayerStorefrontRecommendationsData: K } = (function (e) {
            let t = em.default.getCurrentUser()?.id,
                l = s.useMemo(() => (null != t ? [t] : []), [t]),
                n = (0, h.bG)([eo.A], () => (null != e ? eo.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, O.h)(n),
                a = s.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: r, status: c } = (0, eu.XQ)({
                    applicationIds: a,
                    userIds: l,
                    numItems: 6,
                    source: ed.B5.USER_PROFILE,
                });
            return {
                socialLayerStorefrontRecommendationsData: s.useMemo(
                    () =>
                        null == i || null == i.guildId || "success" !== c || 0 === r.length
                            ? null
                            : { application: i, skuIds: r.map((e) => e.id), guildId: i.guildId },
                    [i, c, r],
                ),
            };
        })(t),
        X = (e, n) => {
            (0, F.Tn)({
                gameName: L,
                gameId: t,
                action: e,
                similarGameId: n,
                viewId: A,
                officialGuildId: j?.guild?.id,
                source: l,
            });
        };
    (0, S.Ay)(() => {
        (0, F.rw)({ source: l, viewId: A, gameId: t, gameName: L, authorId: n, profileType: F.HV.FullProfile }),
            (0, _.He)();
    }),
        (0, S.Ay)(() => () => {
            let e = Date.now(),
                l = I.map((t) => {
                    let l = (0, G.JM)(t) ? (0, G.W6)(t, e) : (0, G.aJ)(t, E);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: l });
                });
            (0, F.V_)({
                viewId: A,
                gameId: t,
                gameName: L,
                playedFriendIds: I.map((e) => e.author_id),
                playedFriendsData: l,
                similarGames: [],
                officialGuildId: j?.guild?.id,
            });
        });
    let J = s.useCallback((e) => {
            g(e.contentRect.width >= 800);
        }, []),
        $ = (0, u.w)(J, [], { fireOnMount: !0 }),
        Z = s.useCallback(() => {
            c(), (0, D.closeUserProfileModal)();
        }, [c]),
        Q = s.useRef(null),
        q = s.useCallback(() => Q.current?.getScrollerNode()?.scrollTop ?? 0, []),
        ee = s.useMemo(
            () => ({
                isTwoColumn: x,
                canStartAuthorization: W,
                hasAlreadyLinked: w,
                fetchedAuthorization: U,
                startAuthorization: Y,
                connectionApp: H,
                officialInvite: B,
                isMember: z,
                socialLayerStorefrontRecommendationsData: K,
                closeModal: Z,
                getScrollOffset: q,
            }),
            [x, W, w, U, Y, H, B, z, K, Z, q],
        ),
        et = s.useCallback(() => {
            c(), (0, D.closeUserProfileModal)();
        }, [c]),
        [el, en] = s.useState(!1),
        [ei, es] = s.useState(150),
        ea = s.useRef(null);
    s.useEffect(() => {
        null != m && m > 0 && Q.current?.getScrollerNode()?.scrollTo({ top: m, behavior: "instant" });
    }, []);
    let er = s.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != ea.current) {
                let e = Math.max(0, 1 - t / 150);
                ea.current.style.opacity = String(e);
            }
            en(t >= ei);
        },
        [ei],
    );
    return null == R
        ? null
        : (0, i.jsx)(y.f5, {
              value: N,
              children: (0, i.jsx)(f.N, {
                  transitionState: a,
                  onClose: c,
                  children: (0, i.jsx)(eO.Provider, {
                      value: ee,
                      children: (0, i.jsxs)("div", {
                          className: r()(p, nS.kL),
                          ref: $,
                          children: [
                              (0, i.jsx)(t4, { game: R, ref: ea }),
                              (0, i.jsx)(t1, { game: R, show: el, onClose: et, trackAction: X }),
                              (0, i.jsx)(t8, { show: el }),
                              (0, i.jsxs)(C.Ch, {
                                  ref: Q,
                                  onScroll: er,
                                  children: [
                                      (0, i.jsx)(t9, {
                                          game: R,
                                          onSetCompactBarScrollThreshold: es,
                                          showCompactBar: el,
                                      }),
                                      (0, i.jsx)(b.F, {
                                          children: x
                                              ? (0, i.jsxs)("div", {
                                                    className: nS.jC,
                                                    children: [
                                                        (0, i.jsx)(nL, { game: R, closeModal: et, trackAction: X }),
                                                        (0, i.jsx)(nG, {
                                                            game: R,
                                                            appContext: o,
                                                            source: l,
                                                            trackExternalAction: d,
                                                            trackAction: X,
                                                            analyticsLocations: N,
                                                        }),
                                                    ],
                                                })
                                              : (0, i.jsx)("div", {
                                                    className: nS.b9,
                                                    children: (0, i.jsx)(nT, {
                                                        game: R,
                                                        trackAction: X,
                                                        analyticsLocations: N,
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
let nD = function (e) {
    let t = er.useConfig({ location: "GameProfileModal" }).enabled;
    return e.forceV2 || t ? (0, i.jsx)(nw, { ...e }) : (0, i.jsx)(nP, { ...e });
};
