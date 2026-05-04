l.d(t, { default: () => nP });
var n,
    i = l(627968),
    s = l(64700),
    a = l(503698),
    r = l.n(a),
    c = l(989349),
    o = l.n(c),
    d = l(562708),
    u = l(535185),
    m = l(792216),
    h = l(379834),
    x = l(17928),
    g = l(990078),
    v = l(521489),
    f = l(825860),
    j = l(834730),
    p = l(534514),
    E = l(821609),
    A = l(414499),
    N = l(224640),
    I = l(364522),
    b = l(707554),
    C = l(689175),
    S = l(964486),
    R = l(737393),
    y = l(793574),
    T = l(688810),
    k = l(139286),
    L = l(46225),
    M = l(429913),
    w = l(590703),
    O = l(180170),
    _ = l(832384),
    V = l(569926),
    G = l(928550),
    P = l(975732),
    D = l(773669),
    W = l(486020),
    U = l(541830),
    F = l(935208),
    Y = l(409626),
    H = l(636537),
    B = l(228366),
    Z = l(845584),
    z = l(371794),
    J = l(155718),
    K = l(731068),
    X = l(59318),
    $ = l(320095),
    Q = l(383233),
    q = l(998218);
let ee = /^#{1,3}\s+(.+)$/;
var et = l(652215);
let el = async (e) => {
        B.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, z.aP)({
                    url: et.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: D.default.locale },
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
            throw new Z.LG(e);
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
                        n = (0, $.rh)(e),
                        i = (0, Q._c)(n)
                            ? n.components
                                  .filter((e) => e.type === J.I5.TEXT_DISPLAY)
                                  .map((e) => e.content)
                                  .join("\n")
                            : n.content,
                        s = (function (e) {
                            if ((0, Q._c)(e)) {
                                let t = e.components.find((e) => e.type === J.I5.MEDIA_GALLERY),
                                    l = t?.items[0]?.media;
                                if (null != l) {
                                    let t = (0, K.FE)(l);
                                    if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, X.tT)(e.content_type));
                            if (null != t) return (0, K.Rr)(t, e);
                            let l = e.attachments.find((e) => (0, X.XB)(e.content_type));
                            if (null != l) return (0, K.Rr)(l, e);
                            let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (n?.thumbnail != null)
                                return (0, K.oU)(
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
    eo = l(505779),
    ed = l(970163),
    eu = l(184989);
let em = function (e, t) {
    let [l, n] = s.useState(),
        i = s.useRef(null),
        a = s.useRef(t);
    s.useEffect(() => {
        a.current = t;
    }, [t]);
    let r = (0, x.bG)([eu.A], () => l?.guild?.id != null && eu.A.isMember(l?.guild?.id)),
        c = s.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === eo.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        s.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, ed.A)(t, "game_profile");
                    !0 !== e.banned && ((i.current = t), n(e.invite), null != e.invite && a.current?.(e.invite));
                }
            };
            null != c && e(c.url);
        }, [c]),
        { invite: l, isMember: r }
    );
};
var eh = l(832163),
    ex = l(561794),
    eg = l(862772),
    ev = l(287809),
    ef = l(713900),
    ej = l(459746),
    ep = l(922016),
    eE = l(980707),
    eA = l(477782),
    eN = l(939249),
    eI = l(365199),
    eb = l(661531),
    eC = l(663341),
    eS = l(408278),
    eR = l(34188),
    ey = l(789645),
    eT = l(442433),
    ek = l(50268),
    eL = l(44724);
let eM = s.createContext(void 0);
function ew() {
    let e = s.useContext(eM);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
var eO = l(67518);
l(321073);
var e_ = l(540185),
    eV = l(926268),
    eG = l(53788),
    eP = l(831453),
    eD = l(785866),
    eW = l(555704),
    eU = l(457965),
    eF = l(47675),
    eY = l(633075),
    eH = l(289173),
    eB = l(841595),
    eZ = l(958805),
    ez = l(735321),
    eJ = l(495544),
    eK = l(760751),
    eX = l(375708);
async function e$(e) {
    let t = e((0, ez.BF)());
    await eZ.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function eQ(e) {
    let { gameId: t, className: l, trackAction: n } = e,
        a = s.useRef(null),
        r = (0, ek.A)({ id: t, label: eX.intl.string(eX.t.SHQGPj) }),
        c = (0, eO.n)(t, n);
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
                          (0, eT.Z_)(), t();
                      },
                      "aria-label": eX.intl.string(eX.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(eA.rX, { children: r }), (0, i.jsx)(eA.rX, { children: c })],
                      }),
                  });
              },
              children: (e) =>
                  (0, i.jsx)(g.m, {
                      text: eX.intl.string(eX.t["UKOtz+"]),
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
        o = (0, ek.A)({ id: t.id, label: eX.intl.string(eX.t.SHQGPj) }),
        d = (0, eO.n)(t.id, a),
        u = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, x.bG)([eJ.default], () => eJ.default.getId()),
                a = (0, x.bG)([eK.A], () => eK.A.getDetectableGame(t)),
                r = s.useMemo(
                    () => [
                        {
                            type: e_.x.FAVORITE_GAMES,
                            addLabel: eX.intl.string(eX.t.fgmitg),
                            removeLabel: eX.intl.string(eX.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eV.C,
                        },
                        {
                            type: e_.x.PLAYED_GAMES,
                            addLabel: eX.intl.string(eX.t["0xIVLR"]),
                            removeLabel: eX.intl.string(eX.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eG.G,
                        },
                        {
                            type: e_.x.CURRENT_GAMES,
                            addLabel: eX.intl.string(eX.t.G0c4En),
                            removeLabel: eX.intl.string(eX.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: eP.H,
                        },
                        {
                            type: e_.x.WANT_TO_PLAY_GAMES,
                            addLabel: eX.intl.string(eX.t.UuBS4K),
                            removeLabel: eX.intl.string(eX.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: eD._,
                        },
                    ],
                    [],
                ),
                c = (0, x.yK)([eB.A], () => (null == n ? [] : (eB.A.getUserProfile(n)?.widgets ?? [])), [n]),
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
                            (await e$((i) => {
                                let s = i.filter(eH.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (s?.games.some((e) => e.applicationId === t) || (null != s && (0, ez.uA)(s)))
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
                        (0, eF.un)({
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
                            (await e$((l) =>
                                e
                                    ? l.some((e) => e instanceof eY.R && e.applicationId === d)
                                        ? l
                                        : [(t = new eY.R({ applicationId: d })), ...l]
                                    : ((t = l.find((e) => e instanceof eY.R && e.applicationId === d) ?? null),
                                      l.filter((e) => !(e instanceof eY.R && e.applicationId === d))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, eF.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [d],
                );
            if (null == n) return null;
            let h = null != e && null != a && (0, ez.XX)(a),
                g = [];
            if (null != d) {
                let e = c.some((e) => e instanceof eY.R && e.applicationId === d);
                g.push(
                    (0, i.jsx)(
                        eA.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eX.intl.formatToPlainString(eX.t.Ktb1n8, { name: l })
                                : eX.intl.formatToPlainString(eX.t.Xp6iZt, { name: l }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: eW.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of r) {
                    let l = c.filter(eH.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        s = !n && null != l && (0, ez.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            eA.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: s ? eX.intl.string(eX.t["86OoiH"]) : void 0,
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
        { invite: m } = ew(),
        h = new Set(m?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        v = s.useCallback(() => {
            null != m && (0, eL.X)({ invite: m });
        }, [m]),
        f = s.useCallback(() => {
            null != m && (a(Y.Ws.GameShop), (0, eL.default)({ invite: m }), l());
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
                                (0, eT.Z_)(), t();
                            },
                            "aria-label": eX.intl.string(eX.t.sidPSo),
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
                                text: eX.intl.string(eX.t.sidPSo),
                            }),
                        }),
                }),
            h &&
                null != m &&
                (0, i.jsx)(g.m, {
                    text: eX.intl.string(eX.t.apFNLU),
                    children: (0, i.jsx)(eS.K, {
                        icon: eR.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eX.intl.string(eX.t.apFNLU),
                        onMouseDown: v,
                        onClick: f,
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
                                (0, eT.Z_)(), t();
                            },
                            "aria-label": eX.intl.string(eX.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(eA.rX, { children: d }), (0, i.jsx)(eA.rX, { children: o })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(g.m, {
                            text: eX.intl.string(eX.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: r,
                                children: (0, i.jsx)(eS.K, {
                                    icon: eI.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eX.intl.string(eX.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(eS.K, {
                icon: ey.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: l,
                "aria-label": eX.intl.string(eX.t.cpT0Cq),
            }),
        ],
    });
}
var e0 = l(621466),
    e1 = l(966697),
    e2 = l(460905),
    e3 = l(951707),
    e4 = l(46054),
    e8 = l(58703),
    e6 = l(60465),
    e5 = l(284009),
    e7 = l.n(e5),
    e9 = l(376728),
    te = l(976860),
    tt = l(71393),
    tl = l(449054);
async function tn(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: s } = e;
    e7()(s.length > 0, "analyticsLocationStack must have at least one location");
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
                (await e9.Ay.acceptInvite({ inviteKey: t.code, context: { location: a }, skipOnboarding: !0 }));
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
                            text: eX.intl.string(eX.t.budhsM),
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
    return e4.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function td(e) {
    let t,
        { variant: l, message: n, channelId: a, onCardClick: c } = e,
        [o, d] = s.useState(!1),
        u = "main" === l,
        m = s.useCallback(() => d(!0), []),
        h = s.useCallback(
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
        x = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        g = n.media?.proxyUrl ?? n.media?.url,
        v =
            (null != g
                ? null == (t = q.A.toURLSafe(g))
                    ? null
                    : (t.searchParams.append("format", "webp"), t.toString())
                : null) ?? g;
    return (0, i.jsxs)(eN.D, {
        className: u ? tr.cG : tr.IU,
        onClick: h,
        children: [
            null != n.media &&
                null != v &&
                (0, i.jsx)("div", {
                    className: u ? tr._v : tr.eZ,
                    children: (0, i.jsx)(e1.y, {
                        readyState: o ? et.Rv1.READY : et.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: v,
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
                            (0, i.jsx)(j.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, e8.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: tr.a5,
                                    children: [
                                        (0, i.jsx)(e2.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(j.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eX.intl.currentLocale).format(
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
        { analyticsLocations: n } = (0, T.Ay)(),
        { invite: a, closeModal: r, getScrollOffset: c } = ew(),
        {
            messages: o,
            guildId: d,
            channelId: u,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, x.cf)([es.A], () => ({
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
                (l(Y.Ws.Announcements),
                e6.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                r(),
                tn({ invite: a, guildId: e, channelId: u, analyticsLocationStack: n }));
        }, [l, r, c, a, d, u, n, t]),
        h = s.useCallback(
            (e) => {
                let i = a?.guild?.id ?? d;
                null != i &&
                    null != u &&
                    (l(Y.Ws.AnnouncementsItem),
                    e6.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: c() }),
                    r(),
                    tn({ invite: a, guildId: i, channelId: u, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, a, d, u, n, t],
        );
    if (null == u || 0 === o.length) return null;
    let g = 2 !== o.length,
        v = g ? o[0] : null,
        f = g ? o.slice(1) : o;
    return (0, i.jsx)(ta, {
        title: eX.intl.string(eX.t.B0BV3Y),
        onClickViewAll: m,
        children: (0, i.jsxs)("div", {
            className: tr.f3,
            children: [
                null != v && (0, i.jsx)(td, { variant: "main", message: v, channelId: u, onCardClick: h }),
                f.length > 0 &&
                    (0, i.jsx)(e3.A, {
                        gap: 16,
                        children: f.map((e) =>
                            (0, i.jsx)(td, { variant: "small", message: e, channelId: u, onCardClick: h }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var tm = l(349288),
    th = l(975807),
    tx = l(194362);
function tg(e) {
    let { game: t, trackAction: l } = e,
        n = s.useCallback(async () => {
            l(Y.Ws.ClaimGame);
            let e = await (0, tx.a)(et.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, th.A)(e);
        }, [l]),
        a = s.useCallback((e) => (0, i.jsx)(tm.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === J.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(j.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eX.intl.format(eX.t.KAjfKl, { claimLink: a }),
          });
}
var tv = l(240248);
let tf = [
    eo.V.OFFICIAL,
    eo.V.FACEBOOK,
    eo.V.TWITTER,
    eo.V.INSTAGRAM,
    eo.V.YOUTUBE,
    eo.V.BLUESKY,
    eo.V.REDDIT,
    eo.V.TWITCH,
];
var tj = l(808380);
let tp = [tj.Y.DESKTOP, tj.Y.XBOX, tj.Y.PLAYSTATION, tj.Y.NINTENDO];
function tE(e) {
    return s.useMemo(() => {
        let t = new Set(e.platforms),
            l = [...t];
        return (
            !t.has(tj.Y.DESKTOP) && (t.has(tj.Y.MACOS) || t.has(tj.Y.LINUX)) && l.push(tj.Y.DESKTOP),
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
    ty = l(454346),
    tT = l(37948),
    tk = l(141535),
    tL = l(262420);
let tM = [eo.V.OFFICIAL, eo.V.TWITTER, eo.V.YOUTUBE],
    tw = { colorClass: tL.wP },
    tO = { size: "xs", colorClass: tL.wP };
function t_(e, t) {
    switch (e.category) {
        case eo.V.OFFICIAL:
            return { icon: (0, i.jsx)(tA.L, { ...t }), action: Y.Ws.WebsiteLink, title: eX.intl.string(eX.t.fOUKvg) };
        case eo.V.TWITTER:
            return { icon: (0, i.jsx)(tN.p, { ...t }), action: Y.Ws.XLink, title: eX.intl.string(eX.t.INic4y) };
        case eo.V.YOUTUBE:
            return { action: Y.Ws.YouTubeLink, icon: (0, i.jsx)(tI.C, { ...t }), title: eX.intl.string(eX.t.lNmxbE) };
        case eo.V.FACEBOOK:
            return { icon: (0, i.jsx)(tb.Z, { ...t }), action: Y.Ws.FacebookLink, title: eX.intl.string(eX.t.FjyREK) };
        case eo.V.INSTAGRAM:
            return {
                icon: (0, i.jsx)(tC.L, { ...t }),
                action: Y.Ws.InstagramLink,
                title: eX.intl.string(eX.t["cgR+IK"]),
            };
        case eo.V.BLUESKY:
            return {
                icon: (0, i.jsx)(tS.a, { ...t }),
                action: Y.Ws.BlueskyLink,
                title: eX.intl.string(eX.t["D/PHq5"]),
            };
        case eo.V.REDDIT:
            return { icon: (0, i.jsx)(tR.T, { ...t }), action: Y.Ws.RedditLink, title: eX.intl.string(eX.t["Hgb+fc"]) };
        case eo.V.TWITCH:
            return { icon: (0, i.jsx)(ty.a, { ...t }), action: Y.Ws.TwitchLink, title: eX.intl.string(eX.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function tV(e) {
    let { website: t, trackAction: l } = e,
        { action: n, icon: a, title: r } = t_(t, tw),
        c = s.useCallback(() => {
            l(n);
        }, [n, l]);
    return (0, i.jsx)(g.m, {
        text: r,
        children: (0, i.jsx)(tm.Anchor, {
            onClick: c,
            className: tL.yO,
            href: t.url,
            target: "_blank",
            "aria-label": r,
            children: a,
        }),
    });
}
let tG = function (e) {
    let { game: t, trackAction: l } = e;
    if (null == t.websites) return null;
    let n = t.websites
        .filter((e) => {
            let { category: t } = e;
            return tM.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: tk.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eX.intl.string(eX.t["Oj3o1/"]),
                  }),
                  (0, i.jsx)("div", {
                      className: r()(tk.nM, tk.mX),
                      children: n.map((e) => (0, i.jsx)(tV, { website: e, trackAction: l }, e.url)),
                  }),
              ],
          });
};
function tP(e) {
    let { website: t, trackAction: l } = e,
        n = (0, tT.A)(),
        { action: a, icon: r, title: c } = t_(t, tO),
        o = s.useCallback(() => {
            l(a), n(t.url);
        }, [a, n, l, t.url]);
    return (0, i.jsx)(g.m, {
        text: c,
        children: (0, i.jsx)(eN.D, { onClick: o, className: tL.yO, title: c, children: r }),
    });
}
var tD = l(31300),
    tW = l(802516),
    tU = l(22363),
    tF = l(418524);
function tY(e) {
    switch (e) {
        case tj.Y.DESKTOP:
            return eX.intl.string(eX.t.KT6uCJ);
        case tj.Y.XBOX:
            return eX.intl.string(eX.t.DDWUJp);
        case tj.Y.PLAYSTATION:
            return eX.intl.string(eX.t.fzMz2s);
        case tj.Y.NINTENDO:
            return eX.intl.string(eX.t.AMW8je);
        default:
            return null;
    }
}
function tH(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case tj.Y.DESKTOP:
            return (0, i.jsx)(tD.k, { size: "xs", ...l });
        case tj.Y.XBOX:
            return (0, i.jsx)(tW.Y, { size: "xs", ...l });
        case tj.Y.PLAYSTATION:
            return (0, i.jsx)(tU.X, { size: "xs", ...l });
        case tj.Y.NINTENDO:
            return (0, i.jsx)(tF.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function tB(e) {
    let { platforms: t } = e;
    return (0, i.jsx)("div", {
        className: r()(tk.nM, tk.Lc),
        style: { alignItems: "center" },
        children: t.map((e) => (0, i.jsx)(g.m, { text: tY(e), children: (0, i.jsx)(tH, { platform: e }) }, e)),
    });
}
function tZ(e) {
    let { platform: t } = e;
    return (0, i.jsx)(g.m, { text: tY(t), children: (0, i.jsx)(tH, { platform: t }) }, t);
}
function tz(e) {
    let { game: t, className: l } = e,
        n = tE(t);
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: r()(tk.fi, tk.iH, l),
              children: n.length > 0 && (0, i.jsx)(tB, { platforms: n }),
          });
}
var tJ = l(424994),
    tK = l(60541);
function tX() {
    return (0, i.jsx)(j.E, { variant: "text-sm/normal", color: "text-subtle", children: eX.intl.string(eX.t.GruYxV) });
}
let t$ = function (e) {
    let { game: t, trackAction: l } = e,
        n = s.useMemo(() => t.genres.map(U.du).join(", "), [t]),
        a = t.getCompanyByRole(J.wk.PUBLISHER),
        r = t.getCompanyByRole(J.wk.DEVELOPER),
        c = a.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        u = tE(t),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tf.includes(t);
            })
            .sort((e, t) => tf.indexOf(e.category) - tf.indexOf(t.category)),
        h = !(0, tv.uJ)(n),
        x = !(0, tv.uJ)(c),
        g = !(0, tv.uJ)(o),
        v = !(0, tv.uJ)(d),
        f = u.length > 0,
        E = m.length > 0 && !m.every((e) => (0, tv.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tK.uW,
        children: [
            (0, i.jsx)("div", {
                className: tK.Gf,
                children: (0, i.jsx)(p.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eX.intl.string(eX.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tK.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tK.J1,
                        children: [
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eX.intl.string(eX.t.pDgwYB) : eX.intl.string(eX.t.mjFKqn),
                            }),
                            h
                                ? (0, i.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tK.Gu,
                                      children: n,
                                  })
                                : (0, i.jsx)(tX, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tK.J1,
                        children: [
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== a.length ? eX.intl.string(eX.t.Hc7Enk) : eX.intl.string(eX.t["4Byy/G"]),
                            }),
                            x
                                ? (0, i.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tK.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(tX, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tK.J1,
                        children: [
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eX.intl.string(eX.t.KATEJB) : eX.intl.string(eX.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tK.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tX, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tK.J1,
                        children: [
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eX.intl.string(eX.t.H3mPDT),
                            }),
                            v
                                ? (0, i.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tK.Gu,
                                      children: e8.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(tX, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tK.J1,
                        children: [
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? eX.intl.string(eX.t.PNqxNe) : eX.intl.string(eX.t["UxAag+"]),
                            }),
                            f
                                ? (0, i.jsx)("div", {
                                      className: tK.Gu,
                                      children: u.map((e) => (0, i.jsx)(tZ, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tX, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tK.J1,
                        children: [
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eX.intl.string(eX.t["Oj3o1/"]),
                            }),
                            E
                                ? (0, i.jsx)("div", {
                                      className: tK.Gu,
                                      children: m.map((e) => (0, i.jsx)(tP, { website: e, trackAction: l }, e.url)),
                                  })
                                : (0, i.jsx)(tX, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tK.J1,
                        children: [
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eX.intl.string(eX.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tK.Gu,
                                children: eX.intl.format(eX.t.XPFZVl, { igdbLink: tJ.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tK.OQ, children: (0, i.jsx)(tg, { game: t, trackAction: l }) }),
        ],
    });
};
function tQ(e) {
    let { invite: t, trackAction: l, closeModal: n } = e,
        a = s.useCallback(() => {
            t?.guild != null && (0, eL.X)({ guildId: t.guild.id });
        }, [t]),
        r = s.useCallback(() => {
            t?.guild != null && (l(Y.Ws.GameShop), (0, eL.default)({ invite: t }), n());
        }, [n, t, l]);
    return new Set(t?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, i.jsx)(E.$, {
              variant: "primary",
              text: eX.intl.string(eX.t.v8UpgE),
              icon: eR.U,
              onClick: r,
              onMouseDown: a,
              fullWidth: !0,
          })
        : null;
}
var tq = l(714991),
    t0 = l(552523),
    t1 = l(51531);
function t2(e) {
    let { game: t, trackAction: l, onInviteResolved: n, closeModal: a } = e,
        [c, o] = s.useState(),
        d = (0, x.bG)([eu.A], () => c?.guild?.id != null && eu.A.isMember(c?.guild?.id)),
        u = s.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === eo.V.DISCORD;
                }),
            [t.websites],
        );
    s.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != c && c.code.toLowerCase() === t.toLowerCase()) return;
                try {
                    let e = await (0, ed.A)(t, "game_profile");
                    !0 !== e.banned && (o(e.invite), null != e.invite && n?.(e.invite));
                } catch {}
            }
        };
        null != u && e(u.url);
    }, [u, n, c]);
    let m = s.useCallback(() => {
        null != c &&
            (l(Y.Ws.JoinServer),
            a(),
            B.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: c, code: c.code, context: et.BRT.APP }));
    }, [c, l, a]);
    if (null == c || null == c.guild || !c.guild.features.includes(et.GuildFeatures.VERIFIED)) return null;
    let h = W.Ay.getGuildIconURL({ id: c.guild.id, icon: c.guild.icon, size: 32 });
    return (0, i.jsxs)("div", {
        className: tk.fi,
        children: [
            (0, i.jsx)(p.D, {
                className: tk.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: eX.intl.string(eX.t.kBDZSL),
            }),
            (0, i.jsxs)("div", {
                className: r()(tk.nM, tk.mX),
                children: [
                    (0, i.jsx)("img", {
                        className: t0.$f,
                        src: h,
                        alt: eX.intl.formatToPlainString(eX.t.xm6W9D, { guildName: c.guild.name }),
                    }),
                    (0, i.jsxs)("div", {
                        className: t0.U5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: t0.YS,
                                children: [
                                    (0, i.jsx)(j.E, { variant: "text-sm/semibold", children: c.guild.name }),
                                    (0, i.jsx)(tq.A, { guild: c.guild, size: 16 }),
                                ],
                            }),
                            null != c.approximate_member_count &&
                                (0, i.jsx)(j.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: eX.intl.format(eX.t.zRl6XR, { count: c.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(E.$, {
                variant: "secondary",
                text: d ? eX.intl.string(eX.t.cEnaWx) : eX.intl.string(eX.t.XpeFYr),
                onClick: m,
                fullWidth: !0,
            }),
        ],
    });
}
function t3(e) {
    let { trackAction: t, closeModal: l } = e,
        { canStartAuthorization: n, hasAlreadyLinked: a, invite: r, isMember: c } = ew(),
        o = s.useCallback(() => {
            null != r &&
                (t(Y.Ws.JoinServer),
                l(),
                B.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: r, code: r.code, context: et.BRT.APP }));
        }, [r, t, l]);
    if (null == r || null == r.guild) return null;
    let d = W.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        u = W.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        m = (n && !a) || null == u,
        h = (0, i.jsx)("img", {
            className: t1.$f,
            src: d,
            alt: eX.intl.formatToPlainString(eX.t.xm6W9D, { guildName: r.guild.name }),
            draggable: !1,
        }),
        x = m ? t1.To : t1.Kt,
        g = m ? t1.yj : t1.FS;
    return (0, i.jsxs)("div", {
        className: t1.uW,
        children: [
            (0, i.jsx)(p.D, {
                className: t1.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eX.intl.string(eX.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: t1.kL,
                children: [
                    !m && null != u && (0, i.jsx)("img", { className: t1.ll, src: u, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t1.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: x,
                                children: [
                                    m
                                        ? h
                                        : (0, i.jsx)("div", {
                                              className: t1._C,
                                              children: (0, i.jsx)("div", { className: t1.kW, children: h }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: g,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: t1.YS,
                                                children: [
                                                    (0, i.jsx)(tq.A, { guild: r.guild, size: 16 }),
                                                    (0, i.jsx)(p.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: r.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, tv.uJ)(r.guild?.description) &&
                                                (0, i.jsx)(j.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: r.guild?.description,
                                                }),
                                            null != r.approximate_member_count || null != r.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: t1.iR,
                                                      children: [
                                                          null != r.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: t1.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: t1._o }),
                                                                      (0, i.jsx)(j.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eX.intl.format(eX.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  r.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != r.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: t1.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: t1.jk }),
                                                                      (0, i.jsx)(j.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eX.intl.format(eX.t.zRl6XR, {
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
                                text: c ? eX.intl.string(eX.t.cEnaWx) : eX.intl.string(eX.t.XpeFYr),
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
var t4 = l(369606),
    t8 = l(8208);
function t6(e) {
    let { game: t, show: l, onClose: n, trackAction: s } = e,
        a = t.name,
        c = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t8.y5,
        children: [
            (0, i.jsx)("div", { className: r()(t8.nI, l && t8.hD) }),
            (0, i.jsxs)("div", {
                className: r()(t8.A1, l && t8.g8),
                children: [
                    null != c && (0, i.jsx)("img", { src: c, alt: "", className: t8.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t8.hm,
                        children: [
                            (0, i.jsx)(p.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(le, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(eq, { game: t, onClose: n, className: t8.HK, trackAction: s }),
        ],
    });
}
function t5(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(t8.nI, t8.Jn, t && t8.hD) });
}
let t7 = s.forwardRef(function (e, t) {
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
    return (0, tv.uJ)(a)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t8.y1, style: { backgroundImage: `url("${a}")` } }),
                  (0, i.jsx)("div", { className: t8.N4 }),
              ],
          });
});
function t9(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(U.du).join(", ");
    return (0, tv.uJ)(l) ? null : (0, i.jsx)(j.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
let le = (e) => {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t8.Qc,
        children: [
            (0, i.jsx)(t4.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(j.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eX.intl.formatToPlainString(eX.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function lt(e) {
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? t8.n8 : t8.FS,
        children: (0, i.jsx)(ej.A, { game: t, className: t8.xe, size: ej.w.LARGE }),
    });
}
let ll = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: l, showCompactBar: n } = e,
        { isTwoColumn: a } = ew(),
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
        className: r()(t8.ap, n && t8.Gh),
        children: [
            a &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t8.Tf,
                    children: (0, i.jsx)(ej.A, { game: t, className: t8.w$, size: ej.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t8.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(le, { rank: t.l30Rank }),
                    (0, i.jsx)(p.D, { ref: o, variant: "heading-xxl/semibold", children: d }),
                    (0, i.jsx)(t9, { game: t }),
                ],
            }),
        ],
    });
};
var ln = l(141628),
    li = l(289363),
    ls = l(448682);
function la(e) {
    let { trackAction: t, analyticsLocations: l } = e,
        {
            fetchedAuthorization: n,
            hasAlreadyLinked: a,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            invite: d,
        } = ew(),
        u = (0, x.bG)([ev.default], () => ev.default.getCurrentUser()),
        m = s.useCallback(() => {
            t(Y.Ws.LinkAccount), c({ analyticsLocations: l });
        }, [t, c, l]);
    if (!n || null == o || !r || a || null == u) return null;
    let h = d?.guild != null ? W.Ay.getGuildSplashURL({ id: d.guild.id, splash: d.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: ls.uW,
        children: [
            (0, i.jsx)(p.D, {
                className: ls.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eX.intl.string(eX.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: ls.kL,
                children: [
                    null != h
                        ? (0, i.jsx)("img", { className: ls.ll, src: h, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: ls.sB, children: (0, i.jsx)(li.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: ls.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ls.FS,
                                children: [
                                    (0, i.jsx)(p.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eX.intl.formatToPlainString(eX.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(j.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eX.intl.string(eX.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(E.$, {
                                variant: "secondary",
                                icon: ln.A,
                                text: eX.intl.string(eX.t.jynBQ5),
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
var lr = l(80687),
    lc = l(477155),
    lo = l(935286),
    ld = l(775602),
    lu = l(898736),
    lm = l(248643),
    lh = l(256905),
    lx = l(34337),
    lg = l(90721),
    lv = l(616337),
    lf = l(381641);
function lj(e) {
    let { game: t, trackAction: l } = e,
        n = s.useRef(null),
        a = (0, lu._)(t),
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
                      className: tk.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: eX.intl.string(eX.t.bNdK5x),
                  }),
                  (0, i.jsxs)("div", {
                      className: c ? lv.DA : lv.pZ,
                      children: [
                          (0, i.jsx)(C.zC, {
                              ref: n,
                              className: lv.ec,
                              orientation: "horizontal",
                              children: r.map((e, t) =>
                                  (0, i.jsx)(
                                      eN.D,
                                      {
                                          className: lv.gw,
                                          focusProps: { offset: 4, ringClassName: lv.jR },
                                          onClick: () => {
                                              l(Y.Ws.ClickImage),
                                                  (0, lh.R)({
                                                      items: r,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, i.jsx)("img", {
                                              src: e.url,
                                              className: lv.Zm,
                                              alt: eX.intl.formatToPlainString(eX.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          c &&
                              (0, i.jsxs)("div", {
                                  className: lv.NA,
                                  children: [
                                      (0, i.jsx)("div", { className: lv.EJ }),
                                      (0, i.jsx)(eN.D, {
                                          className: lv.G9,
                                          onClick: () => o(-1),
                                          children: (0, i.jsx)(lc.r, { className: lv.UE, color: "currentColor" }),
                                      }),
                                      (0, i.jsx)("div", { className: lv.Pj }),
                                      (0, i.jsx)(eN.D, {
                                          className: lv.G9,
                                          onClick: () => o(1),
                                          children: (0, i.jsx)(lo.E, { className: lv.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let lp = s.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: a, onSelect: c, gameName: o } = e,
            d = s.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(eN.D, {
            className: r()(lf.JS, n && lf.Y4),
            onClick: d,
            children: (0, i.jsxs)("div", {
                className: lf.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: lf.xn,
                        alt: eX.intl.formatToPlainString(eX.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: lf.UZ,
                            children: (0, i.jsx)(lr.D, { playing: n && a, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    lE = s.memo(function (e) {
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
            (0, lg.A)({ videoRef: n, canvasRef: d, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: d, className: lf.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: lf.tN,
                        children: (0, i.jsx)(lm.A, {
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
                            renderLinkComponent: lx.bU,
                            onPlay: r,
                            onPause: c,
                            onFullscreenChange: o,
                            mediaPlayerClassName: lf.T9,
                            videoRef: n,
                            mediaPlayerRef: a,
                        }),
                    }),
                ],
            })
        );
    });
function lA(e) {
    let { game: t, trackAction: l } = e,
        [n, a] = s.useState(0),
        [r, c] = s.useState(null),
        [o, d] = s.useState(t.screenshotUrls),
        u = s.useRef(null),
        m = s.useRef(null),
        h = (0, x.bG)([ld.A], () => ld.A.useReducedMotion);
    o !== t.screenshotUrls && (d(t.screenshotUrls), a(0));
    let g = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, z.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, z.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        v = g.length > 0 ? Math.min(n, g.length - 1) : 0,
        f = g[v],
        j = f?.type === "VIDEO",
        p = s.useCallback(
            (e) => {
                let t = g[v],
                    l = g[e];
                t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? c(t.url) : c(null), a(e);
            },
            [g, v],
        ),
        [E, A] = s.useState(!1),
        N = s.useRef(null),
        I = s.useCallback(() => {
            l(j ? Y.Ws.ClickTrailer : Y.Ws.ClickImage);
            let e = u.current,
                t = N.current,
                n = null != e && !e.paused,
                i = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = g.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === v;
                    return { ...e, autoPlay: !!l && n, autoMute: !l || i, initialTimeSec: l ? s : void 0, videoRef: m };
                }
                return e;
            });
            (0, lh.R)({
                items: r,
                startingIndex: v,
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
        }, [l, g, v, j]),
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
              className: lf.kL,
              children: [
                  j
                      ? (0, i.jsx)("div", {
                            className: lf.ND,
                            children: (0, i.jsx)(
                                lE,
                                {
                                    item: f,
                                    reducedMotion: h,
                                    videoRef: u,
                                    mediaPlayerRef: N,
                                    onPlay: b,
                                    onPause: C,
                                    onFullscreenChange: R,
                                },
                                `${v}-${f.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: lf.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: lf.Jy,
                                            onAnimationEnd: S,
                                            children: (0, i.jsx)("img", { src: r, className: lf.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: lf.QN }),
                                (0, i.jsx)(eN.D, {
                                    className: lf.gv,
                                    onClick: I,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: f.url,
                                            className: lf.c8,
                                            alt: eX.intl.formatToPlainString(eX.t.COYYrn, { game: t.name }),
                                        },
                                        f.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(e3.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: g.map((e, l) =>
                          (0, i.jsx)(
                              lp,
                              { item: e, index: l, isPlaying: E, isSelected: l === v, onSelect: p, gameName: t.name },
                              `${l}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var lN = l(847374),
    lI = l(187322),
    lb = l(110384),
    lC = l(734057),
    lS = l(309010),
    lR = l(562153),
    ly = l(742424),
    lT = l(322789),
    lk = l(506326),
    lL = l(478481);
let lM = (e) => {
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
        h = (0, x.bG)([lS.A, lC.A], () => lC.A.getChannel(lS.A.getChannelId())),
        g = (0, x.bG)([ev.default], () => ev.default.getUser(t.author_id)),
        { nick: v, avatar: f } = s.useMemo(() => {
            let e = g?.getAvatarURL(h?.guild_id, 48, !1);
            return { nick: lR.Ay.getName(h?.guild_id, h?.id, g), avatar: e };
        }, [g, h]);
    return null == g
        ? null
        : (0, i.jsx)(ep.Y, {
              targetElementRef: m,
              position: u,
              renderPopout: (e) => {
                  let { closePopout: s, updatePosition: a } = e;
                  return (0, i.jsx)("div", {
                      className: d,
                      children: (0, i.jsx)(ly.Oo, {
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
                      className: lL.GA,
                      children: (0, i.jsx)(lI.vN, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("img", {
                                      className: lL.my,
                                      src: f,
                                      alt: eX.intl.formatToPlainString(eX.t.IzVXxY, { userName: v }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: lL.Su,
                                      children: (0, i.jsxs)("div", {
                                          className: r()(tk.fi, tk.Kt),
                                          children: [
                                              (0, i.jsx)(j.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: v,
                                              }),
                                              (0, i.jsx)(lk.mG, {
                                                  location: lk.N5.APP_LAUNCHER,
                                                  children: lT.n.map((e, l) => (0, i.jsx)(e, { entry: t }, l)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != o
                                      ? o
                                      : (0, i.jsx)("div", {
                                            className: lL.Br,
                                            children: (0, i.jsx)(lb.W, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
function lw(e) {
    let { entry: t, viewId: l, source: n, invite: s } = e,
        { guildId: a, isVerified: r } = (0, Y.VO)(s);
    return (0, i.jsx)(lM, {
        ...e,
        onReaction: () => {
            (0, Y.Tn)({
                action: Y.Ws.SendMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: l,
                guildId: a,
                isVerified: r,
                source: n,
            });
        },
        onRequestOpen: () => {
            (0, Y.Tn)({
                action: Y.Ws.ClickMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: l,
                guildId: a,
                isVerified: r,
                source: n,
            });
        },
    });
}
var lO = l(759203);
function l_(e) {
    let { entries: t, viewId: l, invite: n, onClose: a, source: c } = e,
        o = t.length > 7,
        [d, u] = s.useState(!1),
        m = s.useMemo(() => t.slice(0, o && !d ? 6 : void 0), [t, o, d]);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(p.D, {
                className: tk.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: eX.intl.string(eX.t.ak8OHk),
            }),
            0 === t.length
                ? (0, i.jsx)(j.E, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: lO.p$,
                      children: eX.intl.string(eX.t.R5fYVO),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: r()(lO.yz, { [lO.T6]: o && !d }),
                              children: (0, i.jsx)("div", {
                                  className: tk.fi,
                                  children: m.map((e) =>
                                      (0, i.jsx)(lw, { entry: e, viewId: l, onClose: a, invite: n, source: c }, e.id),
                                  ),
                              }),
                          }),
                          o &&
                              !d &&
                              (0, i.jsxs)(eN.D, {
                                  className: lO.ND,
                                  onClick: () => u(!0),
                                  children: [
                                      (0, i.jsx)(j.E, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: eX.intl.string(eX.t.yohc6E),
                                      }),
                                      (0, i.jsx)(lN.a, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
function lV(e) {
    let { game: t } = e,
        l = (t.companies ?? []).filter((e) => e.roles.includes(J.wk.PUBLISHER));
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.D, {
                      className: tk.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eX.intl.string(eX.t["4Byy/G"]),
                  }),
                  (0, i.jsx)(j.E, { variant: "text-sm/normal", children: l.map((e) => e.name).join(", ") }),
              ],
          });
}
var lG = l(49381),
    lP = l(223273);
function lD(e, t, l) {
    if (null == e || null == t || t < 10) return lP.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? lP.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? lP.vI.VERY_POSITIVE
              : lP.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return lP.vI.MOSTLY_POSITIVE;
    if (e >= 40) return lP.vI.MIXED;
    if (e >= 20) return lP.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return lP.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return lP.vI.VERY_NEGATIVE;
    return lP.vI.OVERWHELMINGLY_NEGATIVE;
}
function lW(e) {
    switch (e) {
        case lP.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case lP.vI.OVERWHELMINGLY_POSITIVE:
        case lP.vI.VERY_POSITIVE:
        case lP.vI.POSITIVE:
        case lP.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case lP.vI.MIXED:
            return "steam-review-text-mixed";
        case lP.vI.MOSTLY_NEGATIVE:
        case lP.vI.NEGATIVE:
        case lP.vI.VERY_NEGATIVE:
        case lP.vI.OVERWHELMINGLY_NEGATIVE:
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
var lF =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    lY = l(778591);
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
function lZ(e) {
    let { url: t, trackAction: l, title: n, rating: a, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tT.A)(),
        d = lD(a, r, "recent" === c),
        u = lW(d),
        m = s.useCallback(() => {
            l(Y.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(eN.D, {
        onClick: m,
        className: lB.nf,
        role: "link",
        "aria-label": eX.intl.string(eX.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: lB.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: lB.tN,
                    children: [
                        (0, i.jsx)(lG.N, { size: "sm", color: eb.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(p.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    g.m,
                    {
                        text:
                            d === lP.vI.NO_USER_REVIEWS
                                ? eX.intl.string(eX.t.CLMt8J)
                                : eX.intl
                                      .format(
                                          "recent" === c
                                              ? eX.t.TzvC0k
                                              : "localized" === c
                                                ? eX.t.EOfrwm
                                                : eX.t["lzANJ/"],
                                          { rating: a, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: lB.Z0,
                            children: [
                                (0, i.jsx)(j.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    children: (function (e) {
                                        switch (e) {
                                            case lP.vI.NO_USER_REVIEWS:
                                                return eX.intl.string(eX.t.CLMt8J);
                                            case lP.vI.OVERWHELMINGLY_POSITIVE:
                                                return eX.intl.string(eX.t["75sx1S"]);
                                            case lP.vI.VERY_POSITIVE:
                                                return eX.intl.string(eX.t["EkOVg+"]);
                                            case lP.vI.POSITIVE:
                                                return eX.intl.string(eX.t.ZUkFtr);
                                            case lP.vI.MOSTLY_POSITIVE:
                                                return eX.intl.string(eX.t.M7Z09a);
                                            case lP.vI.MIXED:
                                                return eX.intl.string(eX.t.c8yuHR);
                                            case lP.vI.MOSTLY_NEGATIVE:
                                                return eX.intl.string(eX.t.H0MSjG);
                                            case lP.vI.NEGATIVE:
                                                return eX.intl.string(eX.t.vpLrgz);
                                            case lP.vI.VERY_NEGATIVE:
                                                return eX.intl.string(eX.t["5spYuX"]);
                                            case lP.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eX.intl.string(eX.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== lP.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(j.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eX.intl
                                            .format(eX.t.sgIoin, { rating_count: r.toLocaleString() })
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
function lz(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: a } = t,
        r = a?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, tT.A)(),
        h = s.useCallback(() => {
            n(Y.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(eN.D, {
        onClick: h,
        className: lB.nf,
        role: "link",
        "aria-label": eX.intl.string(eX.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: lB.Ur,
            children: [
                (0, i.jsx)(p.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eX.intl.string(eX.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: lB.WA,
                    children: [
                        null != c ? (0, i.jsx)(lJ, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, i.jsx)(lK, { rating: o, tier: c }) : null,
                        u
                            ? (0, i.jsx)(j.E, {
                                  variant: "text-xs/medium",
                                  color: lW(lP.vI.NO_USER_REVIEWS),
                                  children: eX.intl.string(eX.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function lJ(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case lF.MIGHTY:
                    return eX.intl.string(eX.t.aZej2g);
                case lF.STRONG:
                    return eX.intl.string(eX.t.MLxnSg);
                case lF.FAIR:
                    return eX.intl.string(eX.t["3f19KA"]);
                case lF.WEAK:
                    return eX.intl.string(eX.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case lF.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case lF.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case lF.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case lF.WEAK:
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
function lK(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: s } = (function (e) {
            let t = "";
            switch (e) {
                case lF.MIGHTY:
                    t = "#fc430a";
                    break;
                case lF.STRONG:
                    t = "#9e00b4";
                    break;
                case lF.FAIR:
                    t = "#4aa1ce";
                    break;
                case lF.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        g.m,
        {
            text: eX.intl.string(eX.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: lB.TE,
                style: { backgroundColor: s },
                children: [
                    (0, i.jsx)(lH, { rating: t, strokeColor: n }),
                    (0, i.jsx)(j.E, {
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
let lX = function (e) {
    var t;
    let { game: l, trackAction: n } = e,
        s = (0, lY.I)(l.id),
        a = l.opencriticUrl,
        r = lU.useConfig({ location: "GameProfileReviews" }),
        c = r.recentEnabled || r.englishEnabled,
        o = l.steamReleaseStatus !== m.Y.RETIRED_ABANDONED && null != s,
        d = l.reviews?.steam,
        u = lD(d?.recentRating, d?.recentRatingCount, !0),
        h = o && r.recentEnabled && u !== lP.vI.NO_USER_REVIEWS,
        x =
            r.englishEnabled &&
            null != (t = d) &&
            null != t.localizedRating &&
            null != t.localizedRatingCount &&
            null != t.ratingCount &&
            t.localizedRatingCount >= 200 &&
            t.ratingCount >= 2e3,
        g = x ? d?.localizedRating : d?.rating,
        v = x ? d?.localizedRatingCount : d?.ratingCount,
        f = c ? (x ? eX.t["aWb+V4"] : eX.t["8e4LiB"]) : eX.t.whmopT,
        j = l.reviews?.opencritic != null && null != a;
    return o || h || j
        ? (0, i.jsxs)("div", {
              className: lB.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: lB.Gf,
                      children: (0, i.jsx)(p.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eX.intl.string(eX.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: lB.kL,
                      children: [
                          h && null != s
                              ? (0, i.jsx)("div", {
                                    className: lB.WH,
                                    children: (0, i.jsx)(lZ, {
                                        url: s,
                                        trackAction: n,
                                        title: eX.intl.string(eX.t.MQGNsN),
                                        rating: d?.recentRating,
                                        ratingCount: d?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          o && null != s
                              ? (0, i.jsx)("div", {
                                    className: lB.WH,
                                    children: (0, i.jsx)(lZ, {
                                        url: s,
                                        trackAction: n,
                                        title: eX.intl.string(f),
                                        rating: g,
                                        ratingCount: v,
                                        tooltipVariant: x ? "localized" : "all",
                                    }),
                                })
                              : null,
                          j && null != a
                              ? (0, i.jsx)("div", {
                                    className: lB.WH,
                                    children: (0, i.jsx)(lz, { game: l, url: a, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var l$ = l(859040),
    lQ = l(674658),
    lq = l(491438),
    l0 = l(561769),
    l1 = l(758836),
    l2 = l(804163);
let l3 = s.createContext({ closeModal: () => {}, trackAction: () => {} }),
    l4 = (e) => {
        let { skuId: t, aspectRatio: l } = e,
            { product: n } = (0, lQ.q)(t, !0),
            a = s.useContext(l0.v3),
            { closeModal: r, trackAction: c } = s.useContext(l3),
            o = s.useCallback(() => {
                c(Y.Ws.DiscordCollectiblesShopItem),
                    r(),
                    (0, l$.Cz)({
                        analyticsLocations: [y.A.GAME_PROFILE],
                        analyticsSource: y.A.GAME_PROFILE,
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
                cardClassName: l2.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function l8(e) {
    let { game: t, closeModal: l, trackAction: n } = e,
        a = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, x.cf)([es.A], () => ({
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
            n(Y.Ws.DiscordCollectiblesShop),
                l(),
                (0, l$.Cz)({
                    analyticsLocations: [y.A.GAME_PROFILE],
                    analyticsSource: y.A.GAME_PROFILE,
                    tab: l1.G2.CATALOG,
                });
        }, [n, l]),
        c = s.useMemo(() => ({ closeModal: l, trackAction: n }), [l, n]);
    return 0 === a.length
        ? null
        : (0, i.jsx)(l3.Provider, {
              value: c,
              children: (0, i.jsx)(ta, {
                  title: eX.intl.string(eX.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)(e3.A, { gap: "md", children: a.map((e) => (0, i.jsx)(l4, { skuId: e }, e)) }),
              }),
          });
}
var l6 = l(735438),
    l5 = l.n(l6),
    l7 = l(192308),
    l9 = l(311043),
    ne = l(192389);
let nt = (e) => {
    let { game: t, onClose: l, trackClick: n } = e;
    return (0, i.jsx)(g.m, {
        asContainer: !0,
        text: t.name,
        children: (0, i.jsx)(eN.D, {
            className: ne.fS,
            onClick: async () => {
                n(Y.Ws.ClickSimilarGame, t.id),
                    (0, l7.openModalLazy)(() =>
                        Promise.resolve((e) => (0, i.jsx)(nP, { gameId: t.id, source: Y.Ob.SimilarGames, ...e })),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    l();
            },
            children: (0, i.jsx)(ej.A, { game: t, className: ne.n1, size: ej.w.SMALL }),
        }),
    });
};
function nl(e) {
    let { gameId: t, onClose: l, trackAction: n, similarGames: s, similarGamesError: a } = e,
        c = (0, x.bG)([es.A, l9.A], () => {
            let e = void 0 === es.A.getSimilarGames(t) && null == es.A.getSimilarGamesError(t),
                l = s.some((e) => l9.A.isFetching(e));
            return e || l;
        }),
        o = (0, x.yK)([l9.A], () =>
            s
                .map((e) => l9.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, ef.T_)(e))
                .slice(0, 5),
        );
    return ((0, V.I)(t), (0, V.x)(s), c && null == a)
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", { className: r()(ne.vM, tk.bV) }),
                  (0, i.jsx)("div", {
                      className: r()(tk.nM, tk.iH),
                      children: l5()
                          .range(0, 5)
                          .map((e) => (0, i.jsx)("div", { className: ne.nn }, e)),
                  }),
              ],
          })
        : (c || 0 !== o.length) && null == a
          ? (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(p.D, {
                        className: tk.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eX.intl.string(eX.t["6rLyQB"]),
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
    ni = l(467884),
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
        : (0, i.jsx)(e3.A, {
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
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = ew(),
        { analyticsLocations: a } = (0, T.Ay)([y.A.GAME_PROFILE]),
        r = s.useCallback(() => {
            l?.guildId != null && (t(Y.Ws.GameShop), n(), (0, eL.default)({ guildId: l.guildId }));
        }, [l, t, n]),
        c = s.useCallback(
            (e, i) => {
                let s = l?.guildId;
                null != s &&
                    (t(Y.Ws.GameShopItem),
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
        title: eX.intl.string(eX.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(na, { skuIds: o, analyticsLocations: a, onCardClick: c }),
    });
}
let nc = new Set(["1402418703554842694", "356877880938070016"]),
    no = [eo.V.EPICGAMES, eo.V.STEAM, eo.V.ROBLOX, eo.V.BATTLENET, eo.V.RIOT, eo.V.MINECRAFT];
var nd = l(349361),
    nu = l(924895),
    nm = l(422688),
    nh = l(505200),
    nx = l(695250);
let ng = function (e) {
    switch (e.category) {
        case eo.V.STEAM:
            return {
                icon: lG.N,
                text: eX.intl.string(eX.t.FsANs4),
                ariaLabel: eX.intl.string(eX.t["P+ePTG"]),
                action: Y.Ws.SteamStoreLink,
                url: e.url,
            };
        case eo.V.EPICGAMES:
            return {
                icon: nd.r,
                text: eX.intl.string(eX.t.ZbBMHa),
                ariaLabel: eX.intl.string(eX.t.BwX0UW),
                action: Y.Ws.EpicStoreLink,
                url: e.url,
            };
        case eo.V.ROBLOX:
            return {
                icon: nu.H,
                text: eX.intl.string(eX.t["pJ+P+h"]),
                ariaLabel: eX.intl.string(eX.t.tYxpdf),
                action: Y.Ws.RobloxStoreLink,
                url: e.url,
            };
        case eo.V.BATTLENET:
            return {
                icon: nm.a,
                text: eX.intl.string(eX.t["A7grp+"]),
                ariaLabel: eX.intl.string(eX.t.x9at20),
                action: Y.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case eo.V.RIOT:
            return {
                icon: nh.A,
                text: eX.intl.string(eX.t.h6MapL),
                ariaLabel: eX.intl.string(eX.t["528nvc"]),
                action: Y.Ws.RiotStoreLink,
                url: e.url,
            };
        case eo.V.MINECRAFT:
            return {
                icon: nx.m,
                text: eX.intl.string(eX.t["HZbmO+"]),
                ariaLabel: eX.intl.string(eX.t.WWTqYn),
                action: Y.Ws.MinecraftStoreLink,
                url: e.url,
            };
    }
    return null;
};
var nv = l(629004);
function nf(e) {
    let { isTwoColumn: t } = ew();
    return (0, i.jsx)("div", {
        className: nv.U,
        children: (0, i.jsx)(E.$, {
            ...e,
            variant: t ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link",
        }),
    });
}
function nj(e) {
    let t,
        l,
        n,
        i,
        a = er.useConfig({ location: "GameProfileStoreLinks" }).storeLinksEnabled,
        r =
            ((t = (0, lY.I)(e?.id)),
            (l = e?.id),
            (n = e?.websites),
            (i = e?.steamReleaseStatus),
            s.useMemo(() => {
                if (null == n || null == l) return [];
                let e = n.filter(
                    (e) =>
                        (e.category !== eo.V.EPICGAMES || !!nc.has(l)) &&
                        (e.category !== eo.V.STEAM || i !== m.Y.RETIRED_ABANDONED) &&
                        no.includes(e.category),
                );
                return (
                    null == t ||
                        i === m.Y.RETIRED_ABANDONED ||
                        e.some((e) => e.category === eo.V.STEAM) ||
                        e.push({ category: eo.V.STEAM, url: t }),
                    e.sort((e, t) => (e.category === eo.V.STEAM ? -1 : +(t.category === eo.V.STEAM)))
                );
            }, [t, n, l, i]));
    return { storeWebsites: r, showsStoreLinks: a && r.length > 0 && null != e };
}
let np = function (e) {
    let { game: t, trackAction: n } = e,
        a = (0, tT.A)(),
        { showsStoreLinks: r, storeWebsites: c } = nj(t),
        o = s.useMemo(() => c.map(ng).filter((e) => null != e), [c]);
    if (!r) return null;
    if (1 === o.length) {
        let [e] = o;
        return (0, i.jsx)(nf, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), a(e.url);
            },
        });
    }
    return (0, i.jsx)(nf, {
        text: eX.intl.string(eX.t["/hMurx"]),
        "aria-label": eX.intl.string(eX.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: s } = e;
                (0, l7.openModalLazy)(async () => {
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
        { width: h, height: x } = (0, nN.A)();
    return (s.useEffect(() => {
        let e = m.current;
        null != e && u(e.scrollHeight - e.clientHeight > 1 || !c);
    }, [m, h, x, c]),
    null == t.description)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(tk.fi, tk.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, i.jsxs)("div", {
                          className: r()(tk.nM, tk.Lc),
                          children: [
                              (0, i.jsx)(nE.Z, { color: eb.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, i.jsx)(j.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: n
                                      ? eX.intl.format(eX.t.aZ2iIp, { onShowOriginal: () => a(!1) })
                                      : eX.intl.format(eX.t["/2ylF4"], { onShowTranslated: () => a(!0) }),
                              }),
                          ],
                      }),
                  (0, i.jsx)(j.E, {
                      ref: m,
                      lineClamp: c ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: n ? t.summaryLocalized : t.description,
                  }),
                  d &&
                      (0, i.jsx)(eN.D, {
                          className: tk.vk,
                          onClick: () => {
                              l(c ? Y.Ws.ShowMore : Y.Ws.ShowLess), o(!c);
                          },
                          children: (0, i.jsx)(j.E, {
                              variant: "text-sm/semibold",
                              children: c ? eX.intl.string(eX.t.lBeKY2) : eX.intl.string(eX.t["6MwJo/"]),
                          }),
                      }),
                  (0, i.jsx)(tz, { className: nI.B, game: t }),
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
                    ? (t(Y.Ws.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(Y.Ws.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(n, l),
        { isTwoColumn: d } = ew(),
        u = s.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = a ? eX.intl.string(eX.t["6MwJo/"]) : eX.intl.string(eX.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tk.fi, tk.mX),
        children: [
            (0, i.jsx)(j.E, { ref: n, lineClamp: a ? void 0 : u, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(nA.Q, { onClick: o, text: m }),
        ],
    });
}
var nS = l(952311);
let nR = () =>
    (0, i.jsxs)("div", {
        className: tk.uv,
        children: [
            (0, i.jsx)(f.Y, { size: "xxs" }),
            (0, i.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: eX.intl.string(eX.t.kAlUsy) }),
        ],
    });
function ny(e) {
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
        m = null != t.firstReleaseDate ? new Date(t.firstReleaseDate).getTime() : F.default.extractTimestamp(t.id),
        x = 7 >= o()().diff(o()(m), "days"),
        g = l.some((e) => (0, _.CZ)(e) === h.m.GLOBAL),
        v = t.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: tk.is, style: { backgroundImage: `url("${d}")` } }),
            (0, i.jsxs)("div", {
                className: r()(tk.Qs, tk.fi, tk.iH, tk.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: tk.xx,
                        children: [
                            (0, i.jsx)("div", {
                                className: tk.bb,
                                children: (0, i.jsx)(ej.A, { game: t, className: tk.wm, size: ej.w.LARGE }),
                            }),
                            (0, i.jsx)(eQ, { gameId: t.id, className: tk.Gg, trackAction: n }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: r()(tk.nM, tk.Lc, tk.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.D, { variant: "heading-xl/bold", children: v }),
                                (0, i.jsxs)("div", {
                                    className: r()(tk.nM, tk.Lc),
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("img", {
                                                className: tk.Gt,
                                                src: u,
                                                height: 16,
                                                alt: eX.intl.formatToPlainString(eX.t["nh+jWk"], { game: v }),
                                            }),
                                        (0, i.jsx)(j.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: a,
                                        }),
                                        x &&
                                            (0, i.jsx)(j.E, {
                                                variant: "eyebrow",
                                                className: tk.Ad,
                                                children: eX.intl.string(eX.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(j.E, { variant: "text-sm/medium", children: " \xb7 " }),
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
function nT(e) {
    let {
        game: t,
        entries: l,
        invite: n,
        similarGames: s,
        similarGamesError: a,
        onClose: r,
        viewId: c,
        trackAction: o,
        source: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: tk.V0,
        children: [
            (0, i.jsx)(l_, { entries: l, viewId: c, invite: n, onClose: r, source: d }),
            (0, i.jsx)(lj, { game: t, trackAction: o }),
            (0, i.jsx)(nl, { gameId: t.id, onClose: r, similarGames: s, similarGamesError: a, trackAction: o }),
        ],
    });
}
function nk(e) {
    let { game: t, trackAction: l, closeModal: n } = e;
    return (0, i.jsxs)("div", {
        className: nS.oC,
        children: [
            (0, i.jsxs)("div", {
                className: nS.lM,
                children: [(0, i.jsx)(lA, { game: t, trackAction: l }), (0, i.jsx)(nC, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(tu, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(nr, { trackAction: l }),
            (0, i.jsx)(l8, { game: t, closeModal: n, trackAction: l }),
        ],
    });
}
function nL(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        s = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED,
        { closeModal: a } = ew();
    return (0, i.jsxs)("div", {
        className: tk.V0,
        children: [
            (0, i.jsx)(lA, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: nS.gr,
                children: [
                    (0, i.jsx)(lt, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: nS.E1,
                        children: [
                            (0, i.jsx)(np, { game: t, trackAction: l }),
                            (0, i.jsx)(nC, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(la, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(t3, { closeModal: a, trackAction: l }),
            (0, i.jsx)(tu, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(nr, { trackAction: l }),
            (0, i.jsx)(l8, { game: t, closeModal: a, trackAction: l }),
            s && (0, i.jsx)(lX, { game: t, trackAction: l }),
            (0, i.jsx)(t$, { game: t, trackAction: l }),
        ],
    });
}
function nM(e) {
    let { onClose: t, onCloudPlayClick: l, analyticsLocations: n, trackAction: a } = e;
    (0, k.A)({
        name: d.ImpressionNames.CLOUD_PLAY_CTA,
        type: d.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = s.useCallback(() => {
        a(Y.Ws.CloudPlay), t(), l();
    }, [t, l, a]);
    return (0, i.jsx)(g.m, {
        text: eX.intl.string(eX.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(E.$, {
            icon: A.h,
            text: eX.intl.string(eX.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function nw(e) {
    let { gameId: t, analyticsLocations: l } = e,
        n = (0, M.h)(t),
        i = (0, R.A)({ application: n, analyticsLocations: l });
    return { onCloudPlayClick: i, isCloudPlayButtonShown: !(0, G.L)(t) && null != i };
}
function nO(e) {
    let { game: t, onSetInvite: l, invite: n, trackAction: a, onClose: c, analyticsLocations: o } = e,
        d = s.useCallback(() => {
            c(), (0, P.closeUserProfileModal)();
        }, [c]),
        { isCloudPlayButtonShown: u, onCloudPlayClick: m } = nw({ gameId: t.id, analyticsLocations: o });
    return (0, i.jsxs)("div", {
        className: r()(tk.pz, tk.fi, tk.iH),
        children: [
            (0, i.jsxs)("div", {
                className: tk.NC,
                children: [
                    (0, i.jsx)(tQ, { invite: n, closeModal: d, trackAction: a }),
                    u &&
                        null != m &&
                        (0, i.jsx)(nM, { onClose: d, onCloudPlayClick: m, analyticsLocations: o, trackAction: a }),
                ],
            }),
            (0, i.jsx)(p.D, { variant: "heading-md/bold", children: eX.intl.string(eX.t.CI0vSJ) }),
            (0, i.jsxs)("div", {
                className: tk.V0,
                children: [
                    (0, i.jsx)(nb, { game: t, trackAction: a }),
                    (0, i.jsx)(t2, { game: t, onInviteResolved: l, closeModal: d, trackAction: a }),
                    (0, i.jsx)(tG, { game: t, trackAction: a }),
                    (0, i.jsx)(lV, { game: t }),
                    (0, i.jsx)(tg, { game: t, trackAction: a }),
                    (0, i.jsx)(j.E, {
                        variant: "text-xxs/normal",
                        children: eX.intl.format(eX.t.pch2Jw, { igdbLink: tJ.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function n_(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        { closeModal: s } = ew(),
        { isCloudPlayButtonShown: a, onCloudPlayClick: c } = nw({ gameId: t.id, analyticsLocations: n }),
        { showsStoreLinks: o } = nj(t),
        d = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(nS.Pn, tk.fi, tk.iH, o ? nS.sV : nS.gF),
        children: [
            a && null != c
                ? (0, i.jsx)("div", {
                      className: tk.NC,
                      children: (0, i.jsx)(nM, {
                          onClose: s,
                          onCloudPlayClick: c,
                          analyticsLocations: n,
                          trackAction: l,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: tk.V0,
                children: [
                    (0, i.jsx)(np, { game: t, trackAction: l }),
                    (0, i.jsx)(la, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(t3, { closeModal: s, trackAction: l }),
                    d && (0, i.jsx)(lX, { game: t, trackAction: l }),
                    (0, i.jsx)(t$, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
function nV(e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: a,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, w.Ay)(),
        m = (0, x.bG)([D.default], () => D.default.locale),
        { analyticsLocations: h } = (0, T.Ay)(y.A.GAME_PROFILE),
        g = s.useMemo(() => (0, Y.u9)(), []),
        v = (0, x.yK)([es.A], () => (es.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [f, j] = s.useState(null),
        p = (0, ec.s)(t),
        [E, A] = s.useState(null),
        C = s.useRef(null);
    s.useEffect(() => {
        C.current = E;
    }, [E]);
    let { data: R, refetch: k } = (0, V.I)(t),
        L = R?.name ?? "",
        M = (e, n) => {
            let { guildId: i, isVerified: s } = (0, Y.VO)(C.current);
            (0, Y.Tn)({
                gameName: L,
                gameId: t,
                action: e,
                similarGameId: n,
                viewId: g,
                guildId: i,
                isVerified: s,
                source: l,
            });
        };
    return ((0, S.Ay)(() => {
        (0, Y.rw)({ source: l, viewId: g, gameId: t, gameName: L, authorId: n, profileType: Y.HV.FullProfile }),
            (0, O.He)();
    }),
    s.useEffect(() => {
        m.startsWith("en") || R?.summaryLocalized != null || k();
    }, [t, R?.summaryLocalized, m, k]),
    s.useEffect(() => {
        (async () => {
            if (0 === v.length) {
                j(null);
                try {
                    await en(t);
                } catch (e) {
                    j(e);
                }
            }
        })();
    }, [t, v]),
    (0, S.Ay)(() => () => {
        let { guildId: e, isVerified: l } = (0, Y.VO)(C.current),
            n = Date.now(),
            i = p.map((e) => {
                let t = (0, _.JM)(e) ? (0, _.W6)(e, n) : (0, _.aJ)(e, m);
                return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
            });
        (0, Y.V_)({
            viewId: g,
            gameId: t,
            gameName: L,
            playedFriendIds: p.map((e) => e.author_id),
            playedFriendsData: i,
            similarGames: v.filter(ef.oS).slice(0, 5),
            guildId: e,
            isVerified: l,
        });
    }),
    null == R)
        ? null
        : (0, i.jsx)(T.f5, {
              value: h,
              children: (0, i.jsx)(N.d, {
                  transitionState: a,
                  onClose: c,
                  size: "xl",
                  children: (0, i.jsx)("div", {
                      className: r()(u, tk.fn),
                      children: (0, i.jsxs)(I.Ip, {
                          orientation: "auto",
                          children: [
                              (0, i.jsx)(ny, { game: R, entries: p, trackAction: M }),
                              (0, i.jsx)(b.F, {
                                  children: (0, i.jsxs)("div", {
                                      className: r()(tk.Qs, tk.rb),
                                      children: [
                                          (0, i.jsx)(nT, {
                                              game: R,
                                              entries: p,
                                              invite: E,
                                              similarGames: v,
                                              similarGamesError: f,
                                              onClose: c,
                                              viewId: g,
                                              source: l,
                                              trackAction: M,
                                          }),
                                          (0, i.jsx)(nO, {
                                              game: R,
                                              invite: E,
                                              onSetInvite: A,
                                              onClose: c,
                                              appContext: o,
                                              source: l,
                                              trackExternalAction: d,
                                              trackAction: M,
                                              analyticsLocations: h,
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
function nG(e) {
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
        [h, g] = s.useState(!0),
        [f, j] = s.useState(null),
        { clientThemesClassName: p } = (0, w.Ay)(),
        E = (0, x.bG)([D.default], () => D.default.locale),
        A = s.useMemo(() => (0, Y.u9)(), []),
        { analyticsLocations: N } = (0, T.Ay)(y.A.GAME_PROFILE),
        I = (0, ec.s)(t),
        { data: R } = (0, V.I)(t),
        k = R?.name ?? "",
        G = s.useRef(null);
    s.useEffect(() => {
        G.current = f;
    }, [f]);
    let {
            hasAlreadyLinked: W,
            canStartAuthorization: U,
            fetched: F,
            startAuthorization: H,
            connectionApp: B,
        } = (0, L.RD)(R),
        { invite: Z, isMember: z } = em(R, j),
        { socialLayerStorefrontRecommendationsData: J } = (function (e) {
            let t = ev.default.getCurrentUser()?.id,
                l = s.useMemo(() => (null != t ? [t] : []), [t]),
                n = (0, x.bG)([eh.A], () => (null != e ? eh.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, M.h)(n),
                a = s.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: r, status: c } = (0, eg.XQ)({
                    applicationIds: a,
                    userIds: l,
                    numItems: 6,
                    source: ex.B5.USER_PROFILE,
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
        K = (e, n) => {
            let { guildId: i, isVerified: s } = (0, Y.VO)(G.current);
            (0, Y.Tn)({
                gameName: k,
                gameId: t,
                action: e,
                similarGameId: n,
                viewId: A,
                guildId: i,
                isVerified: s,
                source: l,
            });
        };
    (0, S.Ay)(() => {
        (0, Y.rw)({ source: l, viewId: A, gameId: t, gameName: k, authorId: n, profileType: Y.HV.FullProfile }),
            (0, O.He)();
    }),
        (0, S.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, Y.VO)(G.current),
                n = Date.now(),
                i = I.map((e) => {
                    let t = (0, _.JM)(e) ? (0, _.W6)(e, n) : (0, _.aJ)(e, E);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, Y.V_)({
                viewId: A,
                gameId: t,
                gameName: k,
                playedFriendIds: I.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: [],
                guildId: l,
                isVerified: e,
            });
        });
    let X = s.useCallback((e) => {
            g(e.contentRect.width >= 800);
        }, []),
        $ = (0, u.w)(X, [], { fireOnMount: !0 }),
        Q = s.useCallback(() => {
            c(), (0, P.closeUserProfileModal)();
        }, [c]),
        q = s.useRef(null),
        ee = s.useCallback(() => q.current?.getScrollerNode()?.scrollTop ?? 0, []),
        et = s.useMemo(
            () => ({
                isTwoColumn: h,
                canStartAuthorization: U,
                hasAlreadyLinked: W,
                fetchedAuthorization: F,
                startAuthorization: H,
                connectionApp: B,
                invite: Z,
                isMember: z,
                socialLayerStorefrontRecommendationsData: J,
                closeModal: Q,
                getScrollOffset: ee,
            }),
            [h, U, W, F, H, B, Z, z, J, Q, ee],
        ),
        el = s.useCallback(() => {
            c(), (0, P.closeUserProfileModal)();
        }, [c]),
        [en, ei] = s.useState(!1),
        [es, ea] = s.useState(150),
        er = s.useRef(null);
    s.useEffect(() => {
        null != m && m > 0 && q.current?.getScrollerNode()?.scrollTo({ top: m, behavior: "instant" });
    }, []);
    let eo = s.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != er.current) {
                let e = Math.max(0, 1 - t / 150);
                er.current.style.opacity = String(e);
            }
            ei(t >= es);
        },
        [es],
    );
    return null == R
        ? null
        : (0, i.jsx)(T.f5, {
              value: N,
              children: (0, i.jsx)(v.N, {
                  transitionState: a,
                  onClose: c,
                  children: (0, i.jsx)(eM.Provider, {
                      value: et,
                      children: (0, i.jsxs)("div", {
                          className: r()(p, nS.kL),
                          ref: $,
                          children: [
                              (0, i.jsx)(t7, { game: R, ref: er }),
                              (0, i.jsx)(t6, { game: R, show: en, onClose: el, trackAction: K }),
                              (0, i.jsx)(t5, { show: en }),
                              (0, i.jsxs)(C.Ch, {
                                  ref: q,
                                  onScroll: eo,
                                  children: [
                                      (0, i.jsx)(ll, {
                                          game: R,
                                          onSetCompactBarScrollThreshold: ea,
                                          showCompactBar: en,
                                      }),
                                      (0, i.jsx)(b.F, {
                                          children: h
                                              ? (0, i.jsxs)("div", {
                                                    className: nS.jC,
                                                    children: [
                                                        (0, i.jsx)(nk, { game: R, closeModal: el, trackAction: K }),
                                                        (0, i.jsx)(n_, {
                                                            game: R,
                                                            appContext: o,
                                                            source: l,
                                                            trackExternalAction: d,
                                                            trackAction: K,
                                                            analyticsLocations: N,
                                                        }),
                                                    ],
                                                })
                                              : (0, i.jsx)("div", {
                                                    className: nS.b9,
                                                    children: (0, i.jsx)(nL, {
                                                        game: R,
                                                        trackAction: K,
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
let nP = function (e) {
    let t = er.useConfig({ location: "GameProfileModal" }).enabled;
    return e.forceV2 || t ? (0, i.jsx)(nG, { ...e }) : (0, i.jsx)(nV, { ...e });
};
