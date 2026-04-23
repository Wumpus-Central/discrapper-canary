n.d(t, { default: () => lD });
var l,
    a = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(989349),
    c = n.n(o),
    d = n(110259),
    u = n(535185),
    m = n(792216),
    h = n(379834),
    f = n(17928),
    _ = n(990078),
    g = n(521489),
    x = n(825860),
    p = n(834730),
    E = n(534514),
    v = n(821609),
    A = n(414499),
    I = n(224640),
    b = n(364522),
    j = n(707554),
    C = n(689175),
    N = n(964486),
    S = n(737393),
    y = n(793574),
    R = n(688810),
    L = n(139286),
    T = n(46225),
    k = n(429913),
    w = n(590703),
    M = n(180170),
    O = n(583846),
    G = n(569926),
    P = n(928550),
    D = n(975732),
    U = n(773669),
    V = n(486020),
    F = n(541830),
    W = n(935208),
    B = n(409626),
    H = n(636537),
    Y = n(228366),
    z = n(845584),
    K = n(371794),
    Z = n(155718),
    X = n(731068),
    J = n(77350),
    $ = n(320095),
    q = n(383233),
    Q = n(998218);
let ee = /^#{1,3}\s+(.+)$/;
var et = n(652215);
let en = async (e) => {
        Y.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, K.aP)({
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
    el = async (e) => {
        try {
            let t = (
                (await H.Bo.get({ url: et.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            Y.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
        } catch (e) {
            throw new z.LG(e);
        }
    },
    ea = async (e, t) => {
        Y.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let n = {};
            t?.limit != null && (n.limit = t.limit);
            let l = (await H.Bo.get({ url: et.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
            Y.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: l.messages.map((e) => {
                    let t,
                        n,
                        l = (0, $.rh)(e),
                        a = (0, q._c)(l)
                            ? l.components
                                  .filter((e) => e.type === Z.I5.TEXT_DISPLAY)
                                  .map((e) => e.content)
                                  .join("\n")
                            : l.content,
                        i = (function (e) {
                            if ((0, q._c)(e)) {
                                let t = e.components.find((e) => e.type === Z.I5.MEDIA_GALLERY),
                                    n = t?.items[0]?.media;
                                if (null != n) {
                                    let t = (0, X.FE)(n);
                                    if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, J.tT)(e.content_type));
                            if (null != t) return (0, X.Rr)(t, e);
                            let n = e.attachments.find((e) => (0, J.XB)(e.content_type));
                            if (null != n) return (0, X.Rr)(n, e);
                            let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (l?.thumbnail != null)
                                return (0, X.oU)(
                                    l.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                    },
                                    "IMAGE",
                                );
                        })(l),
                        { title: r, body: s } =
                            ((t = a.indexOf("\n")),
                            (n = (-1 === t ? a : a.slice(0, t)).match(ee)),
                            null != n
                                ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                                : { body: a }),
                        o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0;
                    return {
                        id: l.id,
                        media: i,
                        title: r,
                        body: s,
                        content: a,
                        timestamp: e.timestamp,
                        reactionCount: o,
                    };
                }),
                channelId: l.channel_id ?? void 0,
                guildId: l.guild_id ?? void 0,
            });
        } catch (t) {
            Y.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var ei = n(422069),
    er = n(945810);
let es = (0, er.mj)({
    name: "2025-12-game-profiles-v2",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var eo = n(205184),
    ec = n(832163),
    ed = n(594832),
    eu = n(862772),
    em = n(287809),
    eh = n(505779),
    ef = n(970163),
    e_ = n(184989);
let eg = function (e, t) {
    let [n, l] = i.useState(),
        a = i.useRef(null),
        r = i.useRef(t);
    i.useEffect(() => {
        r.current = t;
    }, [t]);
    let s = (0, f.bG)([e_.A], () => n?.guild?.id != null && e_.A.isMember(n?.guild?.id)),
        o = i.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === eh.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        i.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (a.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, ef.A)(t);
                    !0 !== e.banned && ((a.current = t), l(e.invite), null != e.invite && r.current?.(e.invite));
                }
            };
            null != o && e(o.url);
        }, [o]),
        { invite: n, isMember: s }
    );
};
var ex = n(713900),
    ep = n(459746),
    eE = n(922016),
    ev = n(550079),
    eA = n(477782),
    eI = n(939249),
    eb = n(365199),
    ej = n(661531),
    eC = n(663341),
    eN = n(408278),
    eS = n(34188),
    ey = n(789645),
    eR = n(442433),
    eL = n(50268),
    eT = n(44724);
let ek = i.createContext(void 0);
function ew() {
    let e = i.useContext(ek);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
var eM = n(67518);
n(321073);
var eO = n(540185),
    eG = n(926268),
    eP = n(53788),
    eD = n(831453),
    eU = n(785866),
    eV = n(555704),
    eF = n(395332),
    eW = n(47675),
    eB = n(633075),
    eH = n(289173),
    eY = n(841595),
    ez = n(958805),
    eK = n(735321),
    eZ = n(495544),
    eX = n(760751),
    eJ = n(985018);
async function e$(e) {
    let t = e((0, eK.BF)());
    await ez.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function eq(e) {
    let { gameId: t, className: n, trackAction: l } = e,
        r = i.useRef(null),
        s = (0, eL.A)({ id: t, label: eJ.intl.string(eJ.t.SHQGPj) }),
        o = (0, eM.n)(t, l);
    return null == s && null == o
        ? null
        : (0, a.jsx)(eE.Y, {
              targetElementRef: r,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(ev.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, eR.Z_)(), t();
                      },
                      "aria-label": eJ.intl.string(eJ.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(eA.rX, { children: s }), (0, a.jsx)(eA.rX, { children: o })],
                      }),
                  });
              },
              children: (e) =>
                  (0, a.jsx)(_.m, {
                      text: eJ.intl.string(eJ.t["UKOtz+"]),
                      children: (0, a.jsx)(eI.D, {
                          innerRef: r,
                          className: n,
                          ...e,
                          children: (0, a.jsx)(eb.j, { size: "xs", color: ej.A.colors.WHITE }),
                      }),
                  }),
          });
}
function eQ(e) {
    let { game: t, onClose: n, className: l, trackAction: r } = e,
        s = i.useRef(null),
        o = i.useRef(null),
        c = (0, eL.A)({ id: t.id, label: eJ.intl.string(eJ.t.SHQGPj) }),
        d = (0, eM.n)(t.id, r),
        u = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, f.bG)([eZ.default], () => eZ.default.getId()),
                r = (0, f.bG)([eX.A], () => eX.A.getDetectableGame(t)),
                s = i.useMemo(
                    () => [
                        {
                            type: eO.x.FAVORITE_GAMES,
                            addLabel: eJ.intl.string(eJ.t.fgmitg),
                            removeLabel: eJ.intl.string(eJ.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: eG.C,
                        },
                        {
                            type: eO.x.PLAYED_GAMES,
                            addLabel: eJ.intl.string(eJ.t["0xIVLR"]),
                            removeLabel: eJ.intl.string(eJ.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: eP.G,
                        },
                        {
                            type: eO.x.CURRENT_GAMES,
                            addLabel: eJ.intl.string(eJ.t.G0c4En),
                            removeLabel: eJ.intl.string(eJ.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: eD.H,
                        },
                        {
                            type: eO.x.WANT_TO_PLAY_GAMES,
                            addLabel: eJ.intl.string(eJ.t.UuBS4K),
                            removeLabel: eJ.intl.string(eJ.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: eU._,
                        },
                    ],
                    [],
                ),
                o = (0, f.yK)([eY.A], () => (null == l ? [] : (eY.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, eF.w$)({ location: "game-profile-overflow-menu" }),
                d = i.useMemo(() => {
                    if (null == c || 0 === c.length) return null;
                    if (null != e) {
                        if (c.some((t) => t.applicationId === e.id)) return e.id;
                        for (let t of e.linkedApplications ?? [])
                            if (c.some((e) => e.applicationId === t.id)) return t.id;
                    }
                    return null;
                }, [c, e]),
                u = i.useCallback(
                    async (e, n) => {
                        let l = null;
                        if (
                            (await e$((a) => {
                                let i = a.filter(eH.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (i?.games.some((e) => e.applicationId === t) || (null != i && (0, eK.uA)(i)))
                                        return a;
                                    let n = { applicationId: t },
                                        r = null != i ? [n, ...(i.games ?? [])] : [n];
                                    l = new eH.Yy({ ...(i ?? { type: e }), games: r });
                                } else {
                                    if (null == i) return a;
                                    let e = i.games.filter((e) => e.applicationId !== t);
                                    l = new eH.Yy({ ...i, games: e });
                                }
                                var r = l;
                                let s = a.findIndex((e) => e.getUniqueKey() === r.getUniqueKey());
                                if (-1 === s) return [r, ...a];
                                let o = [...a];
                                return (o[s] = r), o;
                            }),
                            null == l)
                        )
                            return;
                        let a = l;
                        (0, eW.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            ...a.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                m = i.useCallback(
                    async (e) => {
                        if (null == d) return;
                        let t = null;
                        if (
                            (await e$((n) =>
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
            if (null == l) return null;
            let h = null != e && null != r && (0, eK.XX)(r),
                _ = [];
            if (null != d) {
                let e = o.some((e) => e instanceof eB.R && e.applicationId === d);
                _.push(
                    (0, a.jsx)(
                        eA.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eJ.intl.formatToPlainString(eJ.t.Ktb1n8, { name: n })
                                : eJ.intl.formatToPlainString(eJ.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: eV.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of s) {
                    let n = o.filter(eH.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.applicationId === t),
                        i = !l && null != n && (0, eK.uA)(n);
                    _.push(
                        (0, a.jsx)(
                            eA.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? eJ.intl.string(eJ.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === _.length ? null : _;
        })(t),
        { officialInvite: m } = ew(),
        h = new Set(m?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        g = i.useCallback(() => {
            null != m && (0, eT.X)({ invite: m });
        }, [m]),
        x = i.useCallback(() => {
            null != m && (r(B.Ws.GameShop), (0, eT.default)({ invite: m }), n());
        }, [m, r, n]);
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            null != u &&
                (0, a.jsx)(eE.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(ev.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, eR.Z_)(), t();
                            },
                            "aria-label": eJ.intl.string(eJ.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(eA.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: o,
                            children: (0, a.jsx)(v.$, {
                                icon: eC.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eJ.intl.string(eJ.t.sidPSo),
                            }),
                        }),
                }),
            h &&
                null != m &&
                (0, a.jsx)(_.m, {
                    text: eJ.intl.string(eJ.t.apFNLU),
                    children: (0, a.jsx)(eN.K, {
                        icon: eS.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eJ.intl.string(eJ.t.apFNLU),
                        onMouseDown: g,
                        onClick: x,
                    }),
                }),
            (null != c || null != d) &&
                (0, a.jsx)(eE.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(ev.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, eR.Z_)(), t();
                            },
                            "aria-label": eJ.intl.string(eJ.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(eA.rX, { children: d }), (0, a.jsx)(eA.rX, { children: c })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(_.m, {
                            text: eJ.intl.string(eJ.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: s,
                                children: (0, a.jsx)(eN.K, {
                                    icon: eb.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eJ.intl.string(eJ.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(eN.K, {
                icon: ey.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: n,
                "aria-label": eJ.intl.string(eJ.t.cpT0Cq),
            }),
        ],
    });
}
var e0 = n(621466),
    e1 = n(966697),
    e2 = n(460905),
    e5 = n(951707),
    e8 = n(46054),
    e6 = n(58703),
    e3 = n(60465),
    e4 = n(284009),
    e9 = n.n(e4),
    e7 = n(376728),
    te = n(976860),
    tt = n(71393),
    tn = n(449054);
async function tl(e) {
    let { invite: t, guildId: n, channelId: l, messageId: a, analyticsLocationStack: i } = e;
    e9()(i.length > 0, "analyticsLocationStack must have at least one location");
    let r = i[i.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let o = tt.A.getGuild(n);
    if (o?.joinedAt == null)
        if (null == s || s.has(et.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, tn.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: a, joinSource: et.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                i,
            ));
        else
            null != t &&
                (await e7.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, te.pX)(et.BVt.CHANNEL(n, l, a), { sourceLocationStack: i });
}
var ta = n(320448),
    ti = n(274119);
function tr(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, a.jsxs)("div", {
        className: ti.k,
        children: [
            (0, a.jsxs)("div", {
                className: ti.w,
                children: [
                    (0, a.jsx)(E.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, a.jsx)(v.$, {
                            size: "sm",
                            icon: ta._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eJ.intl.string(eJ.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var ts = n(468489),
    to = n(992595);
function tc(e, t) {
    return e8.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function td(e) {
    let t,
        { variant: n, message: l, channelId: r, onCardClick: o } = e,
        [c, d] = i.useState(!1),
        u = "main" === n,
        m = i.useCallback(() => d(!0), []),
        h = i.useCallback(
            (e) => {
                if (
                    !(
                        (0, e0.vq)(e.target, HTMLAnchorElement) ||
                        ((0, e0.vq)(e.target, HTMLSpanElement) && (0, e0.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return o(l.id);
            },
            [o, l.id],
        ),
        f = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        _ = l.media?.proxyUrl ?? l.media?.url,
        g =
            (null != _
                ? null == (t = Q.A.toURLSafe(_))
                    ? null
                    : (t.searchParams.append("format", "webp"), t.toString())
                : null) ?? _;
    return (0, a.jsxs)(eI.D, {
        className: u ? ts.cG : ts.IU,
        onClick: h,
        children: [
            null != l.media &&
                null != g &&
                (0, a.jsx)("div", {
                    className: u ? ts._v : ts.eZ,
                    children: (0, a.jsx)(e1.y, {
                        readyState: c ? et.Rv1.READY : et.Rv1.LOADING,
                        aspectRatio: f,
                        placeholder: l.media.placeholder,
                        placeholderVersion: l.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, a.jsx)("img", {
                            src: g,
                            className: u ? ts.fk : ts.v,
                            alt: "",
                            draggable: !1,
                            onLoad: m,
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: u ? ts.GT : ts.s4,
                children: [
                    null != l.title &&
                        (0, a.jsx)(E.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? ts.KX : ts._N,
                            children: tc(l.title, r),
                        }),
                    l.body.length > 0 &&
                        (0, a.jsx)("div", { className: s()(ts.h_, u ? ts.My : ts.Gd, to.PT), children: tc(l.body, r) }),
                    (0, a.jsxs)("div", {
                        className: ts.ov,
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, e6.i$)(new Date(l.timestamp), "LL"),
                            }),
                            l.reactionCount > 0 &&
                                (0, a.jsxs)("div", {
                                    className: ts.a5,
                                    children: [
                                        (0, a.jsx)(e2.n, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(p.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eJ.intl.currentLocale).format(
                                                l.reactionCount,
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
        { analyticsLocations: l } = (0, R.Ay)(),
        { officialInvite: r, closeModal: s, getScrollOffset: o } = ew(),
        {
            messages: c,
            guildId: d,
            channelId: u,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, f.cf)([ei.A], () => ({
                data: null != e ? ei.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && ei.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && ei.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, i.useEffect)(() => {
                    null == e || n || ei.A.isAnnouncementsFetching(e) || ea(e);
                }, [e, n]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l }
            );
        })(t),
        m = i.useCallback(() => {
            let e = r?.guild?.id ?? d;
            null != e &&
                null != u &&
                (n(B.Ws.Announcements),
                e3.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: o() }),
                s(),
                tl({ invite: r, guildId: e, channelId: u, analyticsLocationStack: l }));
        }, [n, s, o, r, d, u, l, t]),
        h = i.useCallback(
            (e) => {
                let a = r?.guild?.id ?? d;
                null != a &&
                    null != u &&
                    (n(B.Ws.AnnouncementsItem),
                    e3.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: o() }),
                    s(),
                    tl({ invite: r, guildId: a, channelId: u, messageId: e, analyticsLocationStack: l }));
            },
            [n, s, o, r, d, u, l, t],
        );
    if (null == u || 0 === c.length) return null;
    let _ = 2 !== c.length,
        g = _ ? c[0] : null,
        x = _ ? c.slice(1) : c;
    return (0, a.jsx)(tr, {
        title: eJ.intl.string(eJ.t.B0BV3Y),
        onClickViewAll: m,
        children: (0, a.jsxs)("div", {
            className: ts.f3,
            children: [
                null != g && (0, a.jsx)(td, { variant: "main", message: g, channelId: u, onCardClick: h }),
                x.length > 0 &&
                    (0, a.jsx)(e5.A, {
                        gap: 16,
                        children: x.map((e) =>
                            (0, a.jsx)(td, { variant: "small", message: e, channelId: u, onCardClick: h }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var tm = n(349288),
    th = n(975807),
    tf = n(194362);
function t_(e) {
    let { game: t, trackAction: n } = e,
        l = i.useCallback(async () => {
            n(B.Ws.ClaimGame);
            let e = await (0, tf.a)(et.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, th.A)(e);
        }, [n]),
        r = i.useCallback((e) => (0, a.jsx)(tm.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === Z.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(p.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eJ.intl.format(eJ.t.KAjfKl, { claimLink: r }),
          });
}
var tg = n(240248);
let tx = [
    eh.V.OFFICIAL,
    eh.V.FACEBOOK,
    eh.V.TWITTER,
    eh.V.INSTAGRAM,
    eh.V.YOUTUBE,
    eh.V.BLUESKY,
    eh.V.REDDIT,
    eh.V.TWITCH,
];
var tp = n(808380);
let tE = [tp.Y.DESKTOP, tp.Y.XBOX, tp.Y.PLAYSTATION, tp.Y.NINTENDO];
function tv(e) {
    return i.useMemo(() => {
        let t = new Set(e.platforms),
            n = [...t];
        return (
            !t.has(tp.Y.DESKTOP) && (t.has(tp.Y.MACOS) || t.has(tp.Y.LINUX)) && n.push(tp.Y.DESKTOP),
            n.filter((e) => tE.includes(e)).sort((e, t) => tE.indexOf(e) - tE.indexOf(t))
        );
    }, [e.platforms]);
}
var tA = n(998445),
    tI = n(274997),
    tb = n(80500),
    tj = n(319745),
    tC = n(488225),
    tN = n(967492),
    tS = n(72265),
    ty = n(454346),
    tR = n(37948),
    tL = n(141535),
    tT = n(262420);
let tk = [eh.V.OFFICIAL, eh.V.TWITTER, eh.V.YOUTUBE],
    tw = { colorClass: tT.wP },
    tM = { size: "xs", colorClass: tT.wP };
function tO(e, t) {
    switch (e.category) {
        case eh.V.OFFICIAL:
            return { icon: (0, a.jsx)(tA.L, { ...t }), action: B.Ws.WebsiteLink, title: eJ.intl.string(eJ.t.fOUKvg) };
        case eh.V.TWITTER:
            return { icon: (0, a.jsx)(tI.p, { ...t }), action: B.Ws.XLink, title: eJ.intl.string(eJ.t.INic4y) };
        case eh.V.YOUTUBE:
            return { action: B.Ws.YouTubeLink, icon: (0, a.jsx)(tb.C, { ...t }), title: eJ.intl.string(eJ.t.lNmxbE) };
        case eh.V.FACEBOOK:
            return { icon: (0, a.jsx)(tj.Z, { ...t }), action: B.Ws.FacebookLink, title: eJ.intl.string(eJ.t.FjyREK) };
        case eh.V.INSTAGRAM:
            return {
                icon: (0, a.jsx)(tC.L, { ...t }),
                action: B.Ws.InstagramLink,
                title: eJ.intl.string(eJ.t["cgR+IK"]),
            };
        case eh.V.BLUESKY:
            return {
                icon: (0, a.jsx)(tN.a, { ...t }),
                action: B.Ws.BlueskyLink,
                title: eJ.intl.string(eJ.t["D/PHq5"]),
            };
        case eh.V.REDDIT:
            return { icon: (0, a.jsx)(tS.T, { ...t }), action: B.Ws.RedditLink, title: eJ.intl.string(eJ.t["Hgb+fc"]) };
        case eh.V.TWITCH:
            return { icon: (0, a.jsx)(ty.a, { ...t }), action: B.Ws.TwitchLink, title: eJ.intl.string(eJ.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function tG(e) {
    let { website: t, trackAction: n } = e,
        { action: l, icon: r, title: s } = tO(t, tw),
        o = i.useCallback(() => {
            n(l);
        }, [l, n]);
    return (0, a.jsx)(_.m, {
        text: s,
        children: (0, a.jsx)(tm.Anchor, {
            onClick: o,
            className: tT.yO,
            href: t.url,
            target: "_blank",
            "aria-label": s,
            children: r,
        }),
    });
}
let tP = function (e) {
    let { game: t, trackAction: n } = e;
    if (null == t.websites) return null;
    let l = t.websites
        .filter((e) => {
            let { category: t } = e;
            return tk.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === l.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(E.D, {
                      className: tL.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eJ.intl.string(eJ.t["Oj3o1/"]),
                  }),
                  (0, a.jsx)("div", {
                      className: s()(tL.nM, tL.mX),
                      children: l.map((e) => (0, a.jsx)(tG, { website: e, trackAction: n }, e.url)),
                  }),
              ],
          });
};
function tD(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tR.A)(),
        { action: r, icon: s, title: o } = tO(t, tM),
        c = i.useCallback(() => {
            n(r), l(t.url);
        }, [r, l, n, t.url]);
    return (0, a.jsx)(_.m, {
        text: o,
        children: (0, a.jsx)(eI.D, { onClick: c, className: tT.yO, title: o, children: s }),
    });
}
var tU = n(31300),
    tV = n(802516),
    tF = n(22363),
    tW = n(418524);
function tB(e) {
    switch (e) {
        case tp.Y.DESKTOP:
            return eJ.intl.string(eJ.t.KT6uCJ);
        case tp.Y.XBOX:
            return eJ.intl.string(eJ.t.DDWUJp);
        case tp.Y.PLAYSTATION:
            return eJ.intl.string(eJ.t.fzMz2s);
        case tp.Y.NINTENDO:
            return eJ.intl.string(eJ.t.AMW8je);
        default:
            return null;
    }
}
function tH(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case tp.Y.DESKTOP:
            return (0, a.jsx)(tU.k, { size: "xs", ...n });
        case tp.Y.XBOX:
            return (0, a.jsx)(tV.Y, { size: "xs", ...n });
        case tp.Y.PLAYSTATION:
            return (0, a.jsx)(tF.X, { size: "xs", ...n });
        case tp.Y.NINTENDO:
            return (0, a.jsx)(tW.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tY(e) {
    let { platforms: t } = e;
    return (0, a.jsx)("div", {
        className: s()(tL.nM, tL.Lc),
        style: { alignItems: "center" },
        children: t.map((e) => (0, a.jsx)(_.m, { text: tB(e), children: (0, a.jsx)(tH, { platform: e }) }, e)),
    });
}
function tz(e) {
    let { platform: t } = e;
    return (0, a.jsx)(_.m, { text: tB(t), children: (0, a.jsx)(tH, { platform: t }) }, t);
}
function tK(e) {
    let { game: t, className: n } = e,
        l = tv(t);
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: s()(tL.fi, tL.iH, n),
              children: l.length > 0 && (0, a.jsx)(tY, { platforms: l }),
          });
}
var tZ = n(424994),
    tX = n(60541);
function tJ() {
    return (0, a.jsx)(p.E, { variant: "text-sm/normal", color: "text-subtle", children: eJ.intl.string(eJ.t.GruYxV) });
}
let t$ = function (e) {
    let { game: t, trackAction: n } = e,
        l = i.useMemo(() => t.genres.map(F.du).join(", "), [t]),
        r = t.getCompanyByRole(Z.wk.PUBLISHER),
        s = t.getCompanyByRole(Z.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        c = s.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        u = tv(t),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tx.includes(t);
            })
            .sort((e, t) => tx.indexOf(e.category) - tx.indexOf(t.category)),
        h = !(0, tg.uJ)(l),
        f = !(0, tg.uJ)(o),
        _ = !(0, tg.uJ)(c),
        g = !(0, tg.uJ)(d),
        x = u.length > 0,
        v = m.length > 0 && !m.every((e) => (0, tg.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: tX.uW,
        children: [
            (0, a.jsx)("div", {
                className: tX.Gf,
                children: (0, a.jsx)(E.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eJ.intl.string(eJ.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tX.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eJ.intl.string(eJ.t.pDgwYB) : eJ.intl.string(eJ.t.mjFKqn),
                            }),
                            h
                                ? (0, a.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: l,
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eJ.intl.string(eJ.t.Hc7Enk) : eJ.intl.string(eJ.t["4Byy/G"]),
                            }),
                            f
                                ? (0, a.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? eJ.intl.string(eJ.t.KATEJB) : eJ.intl.string(eJ.t.na3PT0),
                            }),
                            _
                                ? (0, a.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: c,
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eJ.intl.string(eJ.t.H3mPDT),
                            }),
                            g
                                ? (0, a.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: e6.i$(new Date(d), "LL"),
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.length > 1 ? eJ.intl.string(eJ.t.PNqxNe) : eJ.intl.string(eJ.t["UxAag+"]),
                            }),
                            x
                                ? (0, a.jsx)("div", {
                                      className: tX.Gu,
                                      children: u.map((e) => (0, a.jsx)(tz, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eJ.intl.string(eJ.t["Oj3o1/"]),
                            }),
                            v
                                ? (0, a.jsx)("div", {
                                      className: tX.Gu,
                                      children: m.map((e) => (0, a.jsx)(tD, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eJ.intl.string(eJ.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tX.Gu,
                                children: eJ.intl.format(eJ.t.XPFZVl, { igdbLink: tZ.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: tX.OQ, children: (0, a.jsx)(t_, { game: t, trackAction: n }) }),
        ],
    });
};
function tq(e) {
    let { invite: t, trackAction: n, closeModal: l } = e,
        r = i.useCallback(() => {
            t?.guild != null && (0, eT.X)({ guildId: t.guild.id });
        }, [t]),
        s = i.useCallback(() => {
            t?.guild != null && (n(B.Ws.GameShop), (0, eT.default)({ invite: t }), l());
        }, [l, t, n]);
    return new Set(t?.guild?.features).has(et.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, a.jsx)(v.$, {
              variant: "primary",
              text: eJ.intl.string(eJ.t.v8UpgE),
              icon: eS.U,
              onClick: s,
              onMouseDown: r,
              fullWidth: !0,
          })
        : null;
}
var tQ = n(369606),
    t0 = n(8208);
function t1(e) {
    let { game: t, show: n, onClose: l, trackAction: i } = e,
        r = t.name,
        o = t.getIconURL(80);
    return (0, a.jsxs)("div", {
        className: t0.y5,
        children: [
            (0, a.jsx)("div", { className: s()(t0.nI, n && t0.hD) }),
            (0, a.jsxs)("div", {
                className: s()(t0.A1, n && t0.g8),
                children: [
                    null != o && (0, a.jsx)("img", { src: o, alt: "", className: t0.V$, draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: t0.hm,
                        children: [
                            (0, a.jsx)(E.D, { variant: "heading-md/semibold", lineClamp: 1, children: r }),
                            null != t.l30Rank && (0, a.jsx)(t6, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(eQ, { game: t, onClose: l, className: t0.HK, trackAction: i }),
        ],
    });
}
function t2(e) {
    let { show: t } = e;
    return (0, a.jsx)("div", { className: s()(t0.nI, t0.Jn, t && t0.hD) });
}
let t5 = i.forwardRef(function (e, t) {
    let { game: n } = e,
        [l] = i.useState(() => Math.random()),
        r = i.useMemo(() => {
            if (null != n.bannerHash)
                return V.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(l * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n.id, n.bannerHash, n.screenshotUrls, l]);
    return (0, tg.uJ)(r)
        ? null
        : (0, a.jsxs)("div", {
              ref: t,
              children: [
                  (0, a.jsx)("div", { className: t0.y1, style: { backgroundImage: `url("${r}")` } }),
                  (0, a.jsx)("div", { className: t0.N4 }),
              ],
          });
});
function t8(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(F.du).join(", ");
    return (0, tg.uJ)(n) ? null : (0, a.jsx)(p.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
let t6 = (e) => {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: t0.Qc,
        children: [
            (0, a.jsx)(tQ.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(p.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eJ.intl.formatToPlainString(eJ.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function t3(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, a.jsx)("div", {
        className: n ? t0.n8 : t0.FS,
        children: (0, a.jsx)(ep.A, { game: t, className: t0.xe, size: ep.w.LARGE }),
    });
}
let t4 = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: r } = ew(),
        o = i.useRef(null),
        c = i.useRef(null);
    i.useEffect(() => {
        let e = o.current,
            t = c.current;
        if (null == e || null == t) return;
        let l = (function (e, t) {
            let n = 0,
                l = e;
            for (; null != l && l !== t; ) (n += l.offsetTop), (l = l.offsetParent);
            return n;
        })(t, e);
        l > 0 && n?.(l);
    }, [n]);
    let d = t.name;
    return (0, a.jsxs)("div", {
        ref: o,
        className: s()(t0.ap, l && t0.Gh),
        children: [
            r &&
                null != t &&
                (0, a.jsx)("div", {
                    className: t0.Tf,
                    children: (0, a.jsx)(ep.A, { game: t, className: t0.w$, size: ep.w.LARGE }),
                }),
            (0, a.jsxs)("div", {
                className: t0.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(t6, { rank: t.l30Rank }),
                    (0, a.jsx)(E.D, { ref: c, variant: "heading-xxl/semibold", children: d }),
                    (0, a.jsx)(t8, { game: t }),
                ],
            }),
        ],
    });
};
var t9 = n(141628),
    t7 = n(289363),
    ne = n(448682);
function nt(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: l,
            hasAlreadyLinked: r,
            canStartAuthorization: s,
            startAuthorization: o,
            connectionApp: c,
            officialInvite: d,
        } = ew(),
        u = (0, f.bG)([em.default], () => em.default.getCurrentUser()),
        m = i.useCallback(() => {
            t(B.Ws.LinkAccount), o({ analyticsLocations: n });
        }, [t, o, n]);
    if (!l || null == c || !s || r || null == u) return null;
    let h = d?.guild != null ? V.Ay.getGuildSplashURL({ id: d.guild.id, splash: d.guild.splash }) : null;
    return (0, a.jsxs)("div", {
        className: ne.uW,
        children: [
            (0, a.jsx)(E.D, {
                className: ne.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eJ.intl.string(eJ.t["VDAhr+"]),
            }),
            (0, a.jsxs)("div", {
                className: ne.kL,
                children: [
                    null != h
                        ? (0, a.jsx)("img", { className: ne.ll, src: h, alt: "", draggable: !1 })
                        : (0, a.jsx)("div", { className: ne.sB, children: (0, a.jsx)(t7.default, { application: c }) }),
                    (0, a.jsxs)("div", {
                        className: ne.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ne.FS,
                                children: [
                                    (0, a.jsx)(E.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eJ.intl.formatToPlainString(eJ.t.hUbQT2, { gameName: c.name }),
                                    }),
                                    (0, a.jsx)(p.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eJ.intl.string(eJ.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(v.$, {
                                variant: "secondary",
                                icon: t9.A,
                                text: eJ.intl.string(eJ.t.jynBQ5),
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
    nl = n(477155),
    na = n(935286),
    ni = n(775602),
    nr = n(898736),
    ns = n(248643),
    no = n(256905),
    nc = n(34337),
    nd = n(90721),
    nu = n(616337),
    nm = n(381641);
function nh(e) {
    let { game: t, trackAction: n } = e,
        l = i.useRef(null),
        r = (0, nr._)(t),
        s = i.useMemo(() => {
            let e = r.map((e) => ({ url: e, type: "IMAGE" }));
            return [...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })), ...e];
        }, [r, t.screenshotUrls]),
        o = s.length > 2;
    function c(e) {
        if (null == l.current) return;
        let t = l.current.getScrollerState().scrollLeft;
        l.current.scrollTo({ to: t + 280 * e, animate: !0 });
    }
    return 0 === s.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(E.D, {
                      className: tL.bV,
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: eJ.intl.string(eJ.t.bNdK5x),
                  }),
                  (0, a.jsxs)("div", {
                      className: o ? nu.DA : nu.pZ,
                      children: [
                          (0, a.jsx)(C.zC, {
                              ref: l,
                              className: nu.ec,
                              orientation: "horizontal",
                              children: s.map((e, t) =>
                                  (0, a.jsx)(
                                      eI.D,
                                      {
                                          className: nu.gw,
                                          focusProps: { offset: 4, ringClassName: nu.jR },
                                          onClick: () => {
                                              n(B.Ws.ClickImage),
                                                  (0, no.R)({
                                                      items: s,
                                                      startingIndex: t,
                                                      shouldHideMediaOptions: !0,
                                                      location: "GameProfileMedia",
                                                  });
                                          },
                                          children: (0, a.jsx)("img", {
                                              src: e.url,
                                              className: nu.Zm,
                                              alt: eJ.intl.formatToPlainString(eJ.t.COYYrn, { game: name }),
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          o &&
                              (0, a.jsxs)("div", {
                                  className: nu.NA,
                                  children: [
                                      (0, a.jsx)("div", { className: nu.EJ }),
                                      (0, a.jsx)(eI.D, {
                                          className: nu.G9,
                                          onClick: () => c(-1),
                                          children: (0, a.jsx)(nl.r, { className: nu.UE, color: "currentColor" }),
                                      }),
                                      (0, a.jsx)("div", { className: nu.Pj }),
                                      (0, a.jsx)(eI.D, {
                                          className: nu.G9,
                                          onClick: () => c(1),
                                          children: (0, a.jsx)(na.E, { className: nu.UE, color: "currentColor" }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
let nf = i.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: r, onSelect: o, gameName: c } = e,
            d = i.useCallback(() => o(n), [o, n]);
        return (0, a.jsx)(eI.D, {
            className: s()(nm.JS, l && nm.Y4),
            onClick: d,
            children: (0, a.jsxs)("div", {
                className: nm.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: nm.xn,
                        alt: eJ.intl.formatToPlainString(eJ.t.COYYrn, { game: c }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, a.jsx)("div", {
                            className: nm.UZ,
                            children: (0, a.jsx)(nn.D, { playing: l && r, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    n_ = i.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                videoRef: l,
                mediaPlayerRef: r,
                onPlay: s,
                onPause: o,
                onFullscreenChange: c,
            } = e,
            d = i.useRef(null);
        return (
            (0, nd.A)({ videoRef: l, canvasRef: d, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: d, className: nm.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: nm.tN,
                        children: (0, a.jsx)(ns.A, {
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
                            renderLinkComponent: nc.bU,
                            onPlay: s,
                            onPause: o,
                            onFullscreenChange: c,
                            mediaPlayerClassName: nm.T9,
                            videoRef: l,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function ng(e) {
    let { game: t, trackAction: n } = e,
        [l, r] = i.useState(0),
        [s, o] = i.useState(null),
        [c, d] = i.useState(t.screenshotUrls),
        u = i.useRef(null),
        m = i.useRef(null),
        h = (0, f.bG)([ni.A], () => ni.A.useReducedMotion);
    c !== t.screenshotUrls && (d(t.screenshotUrls), r(0));
    let _ = i.useMemo(
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
        g = _.length > 0 ? Math.min(l, _.length - 1) : 0,
        x = _[g],
        p = x?.type === "VIDEO",
        E = i.useCallback(
            (e) => {
                let t = _[g],
                    n = _[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? o(t.url) : o(null), r(e);
            },
            [_, g],
        ),
        [v, A] = i.useState(!1),
        I = i.useRef(null),
        b = i.useCallback(() => {
            n(p ? B.Ws.ClickTrailer : B.Ws.ClickImage);
            let e = u.current,
                t = I.current,
                l = null != e && !e.paused,
                a = e?.muted ?? !0,
                i = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = _.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === g;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || a, initialTimeSec: n ? i : void 0, videoRef: m };
                }
                return e;
            });
            (0, no.R)({
                items: s,
                startingIndex: g,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = m.current,
                        t = I.current,
                        n = null != e ? !e.paused : l;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        A(n);
                },
            });
        }, [n, _, g, p]),
        j = i.useCallback(() => A(!0), []),
        C = i.useCallback(() => A(!1), []),
        N = i.useCallback(() => o(null), []),
        S = i.useCallback(
            (e) => {
                e && b();
            },
            [b],
        );
    return 0 === _.length
        ? null
        : (0, a.jsxs)("div", {
              className: nm.kL,
              children: [
                  p
                      ? (0, a.jsx)("div", {
                            className: nm.ND,
                            children: (0, a.jsx)(
                                n_,
                                {
                                    item: x,
                                    reducedMotion: h,
                                    videoRef: u,
                                    mediaPlayerRef: I,
                                    onPlay: j,
                                    onPause: C,
                                    onFullscreenChange: S,
                                },
                                `${g}-${x.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: nm.wp,
                            children: [
                                null != s &&
                                    !h &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: nm.Jy,
                                            onAnimationEnd: N,
                                            children: (0, a.jsx)("img", { src: s, className: nm.Db, alt: "" }),
                                        },
                                        s,
                                    ),
                                (0, a.jsx)("div", { className: nm.QN }),
                                (0, a.jsx)(eI.D, {
                                    className: nm.gv,
                                    onClick: b,
                                    children: (0, a.jsx)(
                                        "img",
                                        {
                                            src: x.url,
                                            className: nm.c8,
                                            alt: eJ.intl.formatToPlainString(eJ.t.COYYrn, { game: t.name }),
                                        },
                                        x.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, a.jsx)(e5.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: _.map((e, n) =>
                          (0, a.jsx)(
                              nf,
                              { item: e, index: n, isPlaying: v, isSelected: n === g, onSelect: E, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var nx = n(847374),
    np = n(187322),
    nE = n(110384),
    nv = n(734057),
    nA = n(309010),
    nI = n(562153),
    nb = n(420706),
    nj = n(322789),
    nC = n(506326),
    nN = n(478481);
let nS = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: l,
            onRequestOpen: r,
            disableActivityProfileLinks: o,
            customCTA: c,
            popoutClassname: d,
            popoutPosition: u = "right",
        } = e,
        m = i.useRef(null),
        h = (0, f.bG)([nA.A, nv.A], () => nv.A.getChannel(nA.A.getChannelId())),
        _ = (0, f.bG)([em.default], () => em.default.getUser(t.author_id)),
        { nick: g, avatar: x } = i.useMemo(() => {
            let e = _?.getAvatarURL(h?.guild_id, 48, !1);
            return { nick: nI.Ay.getName(h?.guild_id, h?.id, _), avatar: e };
        }, [_, h]);
    return null == _
        ? null
        : (0, a.jsx)(eE.Y, {
              targetElementRef: m,
              position: u,
              renderPopout: (e) => {
                  let { closePopout: i, updatePosition: r } = e;
                  return (0, a.jsx)("div", {
                      className: d,
                      children: (0, a.jsx)(nb.Oo, {
                          entry: t,
                          closePopout: i,
                          updatePopoutPosition: r,
                          onReaction: () => {
                              l?.(), n(), i();
                          },
                          onUserPopoutClosed: () => i(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: o,
                      }),
                  });
              },
              positionKey: `'content-entry-${t.id}`,
              onRequestOpen: () => {
                  r?.();
              },
              children: (e) =>
                  (0, a.jsx)(eI.D, {
                      innerRef: m,
                      ...e,
                      className: nN.GA,
                      children: (0, a.jsx)(np.vN, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("img", {
                                      className: nN.my,
                                      src: x,
                                      alt: eJ.intl.formatToPlainString(eJ.t.IzVXxY, { userName: g }),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: nN.Su,
                                      children: (0, a.jsxs)("div", {
                                          className: s()(tL.fi, tL.Kt),
                                          children: [
                                              (0, a.jsx)(p.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: g,
                                              }),
                                              (0, a.jsx)(nC.mG, {
                                                  location: nC.N5.APP_LAUNCHER,
                                                  children: nj.n.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != c
                                      ? c
                                      : (0, a.jsx)("div", {
                                            className: nN.Br,
                                            children: (0, a.jsx)(nE.W, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
function ny(e) {
    let { entry: t, viewId: n, officialGuildId: l, source: i } = e;
    return (0, a.jsx)(nS, {
        ...e,
        onReaction: () => {
            (0, B.Tn)({
                action: B.Ws.SendMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: l,
                source: i,
            });
        },
        onRequestOpen: () => {
            (0, B.Tn)({
                action: B.Ws.ClickMessageUser,
                gameId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: l,
                source: i,
            });
        },
    });
}
var nR = n(759203);
function nL(e) {
    let { entries: t, viewId: n, officialGuildId: l, onClose: r, source: o } = e,
        c = t.length > 7,
        [d, u] = i.useState(!1),
        m = i.useMemo(() => t.slice(0, c && !d ? 6 : void 0), [t, c, d]);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(E.D, {
                className: tL.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: eJ.intl.string(eJ.t.ak8OHk),
            }),
            0 === t.length
                ? (0, a.jsx)(p.E, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: nR.p$,
                      children: eJ.intl.string(eJ.t.R5fYVO),
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: s()(nR.yz, { [nR.T6]: c && !d }),
                              children: (0, a.jsx)("div", {
                                  className: tL.fi,
                                  children: m.map((e) =>
                                      (0, a.jsx)(
                                          ny,
                                          { entry: e, viewId: n, onClose: r, officialGuildId: l, source: o },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          c &&
                              !d &&
                              (0, a.jsxs)(eI.D, {
                                  className: nR.ND,
                                  onClick: () => u(!0),
                                  children: [
                                      (0, a.jsx)(p.E, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: eJ.intl.string(eJ.t.yohc6E),
                                      }),
                                      (0, a.jsx)(nx.a, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
var nT = n(714991),
    nk = n(127537),
    nw = n(149225);
function nM(e) {
    let { game: t, trackAction: n, onInviteResolved: l, closeModal: r } = e,
        [o, c] = i.useState(),
        d = (0, f.bG)([e_.A], () => o?.guild?.id != null && e_.A.isMember(o?.guild?.id)),
        u = i.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === eh.V.DISCORD;
                }),
            [t.websites],
        );
    i.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != o && o.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, ef.A)(t);
                !0 !== e.banned && (c(e.invite), null != e.invite && l?.(e.invite));
            }
        };
        null != u && e(u.url);
    }, [u, l, o]);
    let m = i.useCallback(() => {
        null != o &&
            (n(B.Ws.JoinOfficialServer),
            r(),
            Y.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: o, code: o.code, context: et.BRT.APP }));
    }, [o, n, r]);
    if (null == o || null == o.guild || !o.guild.features.includes(et.GuildFeatures.VERIFIED)) return null;
    let h = V.Ay.getGuildIconURL({ id: o.guild.id, icon: o.guild.icon, size: 32 });
    return (0, a.jsxs)("div", {
        className: tL.fi,
        children: [
            (0, a.jsx)(E.D, {
                className: tL.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: eJ.intl.string(eJ.t.kBDZSL),
            }),
            (0, a.jsxs)("div", {
                className: s()(tL.nM, tL.mX),
                children: [
                    (0, a.jsx)("img", {
                        className: nk.$f,
                        src: h,
                        alt: eJ.intl.formatToPlainString(eJ.t.xm6W9D, { guildName: o.guild.name }),
                    }),
                    (0, a.jsxs)("div", {
                        className: nk.U5,
                        children: [
                            (0, a.jsxs)("div", {
                                className: nk.YS,
                                children: [
                                    (0, a.jsx)(p.E, { variant: "text-sm/semibold", children: o.guild.name }),
                                    (0, a.jsx)(nT.A, { guild: o.guild, size: 16 }),
                                ],
                            }),
                            null != o.approximate_member_count &&
                                (0, a.jsx)(p.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: eJ.intl.format(eJ.t.zRl6XR, { count: o.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(v.$, {
                variant: "secondary",
                text: d ? eJ.intl.string(eJ.t.cEnaWx) : eJ.intl.string(eJ.t.XpeFYr),
                onClick: m,
                fullWidth: !0,
            }),
        ],
    });
}
function nO(e) {
    let { trackAction: t, closeModal: n } = e,
        { canStartAuthorization: l, hasAlreadyLinked: r, officialInvite: s, isMember: o } = ew(),
        c = i.useCallback(() => {
            null != s &&
                (t(B.Ws.JoinOfficialServer),
                n(),
                Y.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: et.BRT.APP }));
        }, [s, t, n]);
    if (null == s || null == s.guild || !s.guild.features.includes(et.GuildFeatures.VERIFIED)) return null;
    let d = V.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        u = V.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (l && !r) || null == u,
        h = (0, a.jsx)("img", {
            className: nw.$f,
            src: d,
            alt: eJ.intl.formatToPlainString(eJ.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        f = m ? nw.To : nw.Kt,
        _ = m ? nw.yj : nw.FS;
    return (0, a.jsxs)("div", {
        className: nw.uW,
        children: [
            (0, a.jsx)(E.D, {
                className: nw.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eJ.intl.string(eJ.t["U2N+ci"]),
            }),
            (0, a.jsxs)("div", {
                className: nw.kL,
                children: [
                    !m && null != u && (0, a.jsx)("img", { className: nw.ll, src: u, alt: "", draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: nw.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: f,
                                children: [
                                    m
                                        ? h
                                        : (0, a.jsx)("div", {
                                              className: nw._C,
                                              children: (0, a.jsx)("div", { className: nw.kW, children: h }),
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: _,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nw.YS,
                                                children: [
                                                    (0, a.jsx)(nT.A, { guild: s.guild, size: 16 }),
                                                    (0, a.jsx)(E.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, tg.uJ)(s.guild?.description) &&
                                                (0, a.jsx)(p.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, a.jsxs)("div", {
                                                      className: nw.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, a.jsxs)("div", {
                                                                  className: nw.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: nw._o }),
                                                                      (0, a.jsx)(p.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eJ.intl.format(eJ.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, a.jsxs)("div", {
                                                                  className: nw.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: nw.jk }),
                                                                      (0, a.jsx)(p.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eJ.intl.format(eJ.t.zRl6XR, {
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
                            (0, a.jsx)(v.$, {
                                variant: "secondary",
                                text: o ? eJ.intl.string(eJ.t.cEnaWx) : eJ.intl.string(eJ.t.XpeFYr),
                                onClick: c,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nG(e) {
    let { game: t } = e,
        n = (t.companies ?? []).filter((e) => e.roles.includes(Z.wk.PUBLISHER));
    return 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(E.D, {
                      className: tL.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: eJ.intl.string(eJ.t["4Byy/G"]),
                  }),
                  (0, a.jsx)(p.E, { variant: "text-sm/normal", children: n.map((e) => e.name).join(", ") }),
              ],
          });
}
var nP = n(49381),
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
function nV(e) {
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
let nF = (0, er.mj)({
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
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nB = n(778591);
function nH(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        r = i * l;
    return (0, a.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - i) * 360) / 2}deg)` },
        children: (0, a.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${r} ${l - r}`,
        }),
    });
}
var nY = n(99392);
function nz(e) {
    let { url: t, trackAction: n, title: l, rating: r, ratingCount: s, tooltipVariant: o = "all" } = e,
        c = (0, tR.A)(),
        d = nU(r, s),
        u = nV(d),
        m = i.useCallback(() => {
            n(B.Ws.SteamReviews), c(t);
        }, [c, n, t]);
    return (0, a.jsx)(eI.D, {
        onClick: m,
        className: nY.nf,
        role: "link",
        "aria-label": eJ.intl.string(eJ.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nY.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nY.tN,
                    children: [
                        (0, a.jsx)(nP.N, { size: "sm", color: ej.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(E.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    _.m,
                    {
                        text:
                            d === nD.vI.NO_USER_REVIEWS
                                ? eJ.intl.string(eJ.t.CLMt8J)
                                : eJ.intl
                                      .format(
                                          "recent" === o
                                              ? eJ.t.TzvC0k
                                              : "localized" === o
                                                ? eJ.t.EOfrwm
                                                : eJ.t["lzANJ/"],
                                          { rating: r, rating_count: s?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: nY.Z0,
                            children: [
                                (0, a.jsx)(p.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    children: (function (e) {
                                        switch (e) {
                                            case nD.vI.NO_USER_REVIEWS:
                                                return eJ.intl.string(eJ.t.CLMt8J);
                                            case nD.vI.OVERWHELMINGLY_POSITIVE:
                                                return eJ.intl.string(eJ.t["75sx1S"]);
                                            case nD.vI.VERY_POSITIVE:
                                                return eJ.intl.string(eJ.t["EkOVg+"]);
                                            case nD.vI.POSITIVE:
                                                return eJ.intl.string(eJ.t.ZUkFtr);
                                            case nD.vI.MOSTLY_POSITIVE:
                                                return eJ.intl.string(eJ.t.M7Z09a);
                                            case nD.vI.MIXED:
                                                return eJ.intl.string(eJ.t.c8yuHR);
                                            case nD.vI.MOSTLY_NEGATIVE:
                                                return eJ.intl.string(eJ.t.H0MSjG);
                                            case nD.vI.NEGATIVE:
                                                return eJ.intl.string(eJ.t.vpLrgz);
                                            case nD.vI.VERY_NEGATIVE:
                                                return eJ.intl.string(eJ.t["5spYuX"]);
                                            case nD.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eJ.intl.string(eJ.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != s &&
                                    d !== nD.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(p.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eJ.intl
                                            .format(eJ.t.sgIoin, { rating_count: s.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${o}`,
                ),
            ],
        }),
    });
}
function nK(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: r } = t,
        s = r?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        o = s.tier,
        c = s.topCriticRating ?? -1,
        d = s.topCriticRatingCount ?? -1,
        u = (c <= 0 || d <= 0) && null == o,
        m = (0, tR.A)(),
        h = i.useCallback(() => {
            l(B.Ws.OpenCriticReviews), m(n);
        }, [m, l, n]);
    return (0, a.jsx)(eI.D, {
        onClick: h,
        className: nY.nf,
        role: "link",
        "aria-label": eJ.intl.string(eJ.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nY.Ur,
            children: [
                (0, a.jsx)(E.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eJ.intl.string(eJ.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nY.WA,
                    children: [
                        null != o ? (0, a.jsx)(nZ, { tier: o }) : null,
                        null != o && c > 0 && d > 0 ? (0, a.jsx)(nX, { rating: c, tier: o }) : null,
                        u
                            ? (0, a.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  color: nV(nD.vI.NO_USER_REVIEWS),
                                  children: eJ.intl.string(eJ.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nZ(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nW.MIGHTY:
                    return eJ.intl.string(eJ.t.aZej2g);
                case nW.STRONG:
                    return eJ.intl.string(eJ.t.MLxnSg);
                case nW.FAIR:
                    return eJ.intl.string(eJ.t["3f19KA"]);
                case nW.WEAK:
                    return eJ.intl.string(eJ.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
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
    return (0, a.jsx)(
        _.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: nY.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nX(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
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
    return (0, a.jsx)(
        _.m,
        {
            text: eJ.intl.string(eJ.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nY.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(nH, { rating: t, strokeColor: l }),
                    (0, a.jsx)(p.E, {
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
let nJ = function (e) {
    var t;
    let { game: n, trackAction: l } = e,
        i = (0, nB.I)(n.id),
        r = n.opencriticUrl,
        s = nF.useConfig({ location: "GameProfileReviews" }),
        o = s.recentEnabled || s.englishEnabled,
        c = n.steamReleaseStatus !== m.Y.RETIRED_ABANDONED && null != i,
        d = n.reviews?.steam,
        u = nU(d?.recentRating, d?.recentRatingCount),
        h = c && s.recentEnabled && u !== nD.vI.NO_USER_REVIEWS,
        f =
            s.englishEnabled &&
            null != (t = d) &&
            null != t.localizedRating &&
            null != t.localizedRatingCount &&
            null != t.ratingCount &&
            t.localizedRatingCount >= 200 &&
            t.ratingCount >= 2e3,
        _ = f ? d?.localizedRating : d?.rating,
        g = f ? d?.localizedRatingCount : d?.ratingCount,
        x = o ? (f ? eJ.t["aWb+V4"] : eJ.t["8e4LiB"]) : eJ.t.whmopT,
        p = n.reviews?.opencritic != null && null != r;
    return c || h || p
        ? (0, a.jsxs)("div", {
              className: nY.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nY.Gf,
                      children: (0, a.jsx)(E.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eJ.intl.string(eJ.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nY.kL,
                      children: [
                          h && null != i
                              ? (0, a.jsx)("div", {
                                    className: nY.WH,
                                    children: (0, a.jsx)(nz, {
                                        url: i,
                                        trackAction: l,
                                        title: eJ.intl.string(eJ.t.MQGNsN),
                                        rating: d?.recentRating,
                                        ratingCount: d?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          c && null != i
                              ? (0, a.jsx)("div", {
                                    className: nY.WH,
                                    children: (0, a.jsx)(nz, {
                                        url: i,
                                        trackAction: l,
                                        title: eJ.intl.string(x),
                                        rating: _,
                                        ratingCount: g,
                                        tooltipVariant: f ? "localized" : "all",
                                    }),
                                })
                              : null,
                          p && null != r
                              ? (0, a.jsx)("div", {
                                    className: nY.WH,
                                    children: (0, a.jsx)(nK, { game: n, url: r, trackAction: l }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var n$ = n(803375),
    nq = n(674658),
    nQ = n(491438),
    n0 = n(561769),
    n1 = n(758836),
    n2 = n(804163);
let n5 = i.createContext({ closeModal: () => {}, trackAction: () => {} }),
    n8 = (e) => {
        let { skuId: t, aspectRatio: n } = e,
            { product: l } = (0, nq.q)(t, !0),
            r = i.useContext(n0.v3),
            { closeModal: s, trackAction: o } = i.useContext(n5),
            c = i.useCallback(() => {
                o(B.Ws.DiscordCollectiblesShopItem),
                    s(),
                    (0, n$.Cz)({
                        analyticsLocations: [y.A.GAME_PROFILE],
                        analyticsSource: y.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: n1.G2.CATALOG,
                    });
            }, [o, s, t]);
        if (null == l) return null;
        let { flattenProductVariants: d, ...u } = r;
        return (0, a.jsx)(n0.v3.Provider, {
            value: { flattenProductVariants: d ?? !0, ...u },
            children: (0, a.jsx)(nQ.A, {
                skuId: t,
                aspectRatio: n,
                cardClassName: n2.N,
                onClickCard: c,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function n6(e) {
    let { game: t, closeModal: n, trackAction: l } = e,
        r = (function (e) {
            let { hasFetched: t, skuIds: n } = (0, f.cf)([ei.A], () => ({
                hasFetched: null != e && ei.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? ei.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, i.useEffect)(() => {
                    null == e || t || ei.A.isShopCollectionFetching(e) || en(e);
                }, [e, t]),
                n ?? []
            );
        })(t.shopCollectionIds?.[0]),
        s = i.useCallback(() => {
            l(B.Ws.DiscordCollectiblesShop),
                n(),
                (0, n$.Cz)({
                    analyticsLocations: [y.A.GAME_PROFILE],
                    analyticsSource: y.A.GAME_PROFILE,
                    tab: n1.G2.CATALOG,
                });
        }, [l, n]),
        o = i.useMemo(() => ({ closeModal: n, trackAction: l }), [n, l]);
    return 0 === r.length
        ? null
        : (0, a.jsx)(n5.Provider, {
              value: o,
              children: (0, a.jsx)(tr, {
                  title: eJ.intl.string(eJ.t["5DYPT8"]),
                  onClickViewAll: s,
                  children: (0, a.jsx)(e5.A, { gap: "md", children: r.map((e) => (0, a.jsx)(n8, { skuId: e }, e)) }),
              }),
          });
}
var n3 = n(735438),
    n4 = n.n(n3),
    n9 = n(192308),
    n7 = n(311043),
    le = n(192389);
let lt = (e) => {
    let { game: t, onClose: n, trackClick: l } = e;
    return (0, a.jsx)(_.m, {
        asContainer: !0,
        text: t.name,
        children: (0, a.jsx)(eI.D, {
            className: le.fS,
            onClick: async () => {
                l(B.Ws.ClickSimilarGame, t.id),
                    (0, n9.openModalLazy)(() =>
                        Promise.resolve((e) => (0, a.jsx)(lD, { gameId: t.id, source: B.Ob.SimilarGames, ...e })),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, a.jsx)(ep.A, { game: t, className: le.n1, size: ep.w.SMALL }),
        }),
    });
};
function ln(e) {
    let { gameId: t, onClose: n, trackAction: l, similarGames: i, similarGamesError: r } = e,
        o = (0, f.bG)([ei.A, n7.A], () => {
            let e = void 0 === ei.A.getSimilarGames(t) && null == ei.A.getSimilarGamesError(t),
                n = i.some((e) => n7.A.isFetching(e));
            return e || n;
        }),
        c = (0, f.yK)([n7.A], () =>
            i
                .map((e) => n7.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, ex.T_)(e))
                .slice(0, 5),
        );
    return ((0, G.I)(t), (0, G.x)(i), o && null == r)
        ? (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)("div", { className: s()(le.vM, tL.bV) }),
                  (0, a.jsx)("div", {
                      className: s()(tL.nM, tL.iH),
                      children: n4()
                          .range(0, 5)
                          .map((e) => (0, a.jsx)("div", { className: le.nn }, e)),
                  }),
              ],
          })
        : (o || 0 !== c.length) && null == r
          ? (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(E.D, {
                        className: tL.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eJ.intl.string(eJ.t["6rLyQB"]),
                    }),
                    (0, a.jsx)("div", {
                        className: le.D$,
                        children: c.map((e) => (0, a.jsx)(lt, { game: e, onClose: n, trackClick: l }, e.id)),
                    }),
                ],
            })
          : null;
}
var ll = n(317560),
    la = n(183802),
    li = n(627771);
function lr(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        r = i.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: a } = t;
                    e.preventDefault(), l(n, a);
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, a.jsx)(e5.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, a.jsx)(
                      "div",
                      {
                          className: li.B,
                          children: (0, a.jsx)(la.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: la.s.SMALL,
                              analyticsLocations: n,
                              onClick: r,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function ls(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: l } = ew(),
        { analyticsLocations: r } = (0, R.Ay)([y.A.GAME_PROFILE]),
        s = i.useCallback(() => {
            n?.guildId != null && (t(B.Ws.GameShop), l(), (0, eT.default)({ guildId: n.guildId }));
        }, [n, t, l]),
        o = i.useCallback(
            (e, a) => {
                let i = n?.guildId;
                null != i &&
                    (t(B.Ws.GameShopItem),
                    (0, ll.R)({
                        skuId: e,
                        applicationId: a,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            location.pathname.indexOf(et.BVt.CHANNELS_GAME_SHOP(i)) >= 0 && l();
                        },
                    }));
            },
            [t, l, r, n],
        );
    if (null == n) return null;
    let { skuIds: c } = n;
    return (0, a.jsx)(tr, {
        title: eJ.intl.string(eJ.t.WDdlUb),
        onClickViewAll: s,
        children: (0, a.jsx)(lr, { skuIds: c, analyticsLocations: r, onCardClick: o }),
    });
}
let lo = new Set(["1402418703554842694", "356877880938070016"]),
    lc = [eh.V.EPICGAMES, eh.V.STEAM, eh.V.ROBLOX, eh.V.BATTLENET, eh.V.RIOT, eh.V.MINECRAFT];
var ld = n(349361),
    lu = n(924895),
    lm = n(422688),
    lh = n(505200),
    lf = n(695250);
let l_ = function (e) {
    switch (e.category) {
        case eh.V.STEAM:
            return {
                icon: nP.N,
                text: eJ.intl.string(eJ.t.FsANs4),
                ariaLabel: eJ.intl.string(eJ.t["P+ePTG"]),
                action: B.Ws.SteamStoreLink,
                url: e.url,
            };
        case eh.V.EPICGAMES:
            return {
                icon: ld.r,
                text: eJ.intl.string(eJ.t.ZbBMHa),
                ariaLabel: eJ.intl.string(eJ.t.BwX0UW),
                action: B.Ws.EpicStoreLink,
                url: e.url,
            };
        case eh.V.ROBLOX:
            return {
                icon: lu.H,
                text: eJ.intl.string(eJ.t["pJ+P+h"]),
                ariaLabel: eJ.intl.string(eJ.t.tYxpdf),
                action: B.Ws.RobloxStoreLink,
                url: e.url,
            };
        case eh.V.BATTLENET:
            return {
                icon: lm.a,
                text: eJ.intl.string(eJ.t["A7grp+"]),
                ariaLabel: eJ.intl.string(eJ.t.x9at20),
                action: B.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case eh.V.RIOT:
            return {
                icon: lh.A,
                text: eJ.intl.string(eJ.t.h6MapL),
                ariaLabel: eJ.intl.string(eJ.t["528nvc"]),
                action: B.Ws.RiotStoreLink,
                url: e.url,
            };
        case eh.V.MINECRAFT:
            return {
                icon: lf.m,
                text: eJ.intl.string(eJ.t["HZbmO+"]),
                ariaLabel: eJ.intl.string(eJ.t.WWTqYn),
                action: B.Ws.MinecraftStoreLink,
                url: e.url,
            };
    }
    return null;
};
var lg = n(629004);
function lx(e) {
    let { isTwoColumn: t } = ew();
    return (0, a.jsx)("div", {
        className: lg.U,
        children: (0, a.jsx)(v.$, {
            ...e,
            variant: t ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link",
        }),
    });
}
function lp(e) {
    let t,
        n,
        l,
        a,
        r = es.useConfig({ location: "GameProfileStoreLinks" }).storeLinksEnabled,
        s =
            ((t = (0, nB.I)(e?.id)),
            (n = e?.id),
            (l = e?.websites),
            (a = e?.steamReleaseStatus),
            i.useMemo(() => {
                if (null == l || null == n) return [];
                let e = l.filter(
                    (e) =>
                        (e.category !== eh.V.EPICGAMES || !!lo.has(n)) &&
                        (e.category !== eh.V.STEAM || a !== m.Y.RETIRED_ABANDONED) &&
                        lc.includes(e.category),
                );
                return (
                    null == t ||
                        a === m.Y.RETIRED_ABANDONED ||
                        e.some((e) => e.category === eh.V.STEAM) ||
                        e.push({ category: eh.V.STEAM, url: t }),
                    e.sort((e, t) => (e.category === eh.V.STEAM ? -1 : +(t.category === eh.V.STEAM)))
                );
            }, [t, l, n, a]));
    return { storeWebsites: s, showsStoreLinks: r && s.length > 0 && null != e };
}
let lE = function (e) {
    let { game: t, trackAction: l } = e,
        r = (0, tR.A)(),
        { showsStoreLinks: s, storeWebsites: o } = lp(t),
        c = i.useMemo(() => o.map(l_).filter((e) => null != e), [o]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(lx, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                l(e.action), r(e.url);
            },
        });
    }
    return (0, a.jsx)(lx, {
        text: eJ.intl.string(eJ.t["/hMurx"]),
        "aria-label": eJ.intl.string(eJ.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, n9.openModalLazy)(async () => {
                    let { default: e } = await n.e("76758").then(n.bind(n, 459477));
                    return (n) => (0, a.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
};
var lv = n(566679),
    lA = n(123292),
    lI = n(981355),
    lb = n(242021);
function lj(e) {
    let { game: t, trackAction: n } = e,
        [l, r] = i.useState(t?.summaryLocalized != null),
        [o, c] = i.useState(!0),
        [d, u] = i.useState(!1),
        m = i.useRef(null),
        { width: h, height: f } = (0, lI.A)();
    return (i.useEffect(() => {
        let e = m.current;
        null != e && u(e.scrollHeight - e.clientHeight > 1 || !o);
    }, [m, h, f, o]),
    null == t.description)
        ? null
        : (0, a.jsxs)("div", {
              className: s()(tL.fi, tL.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)("div", {
                          className: s()(tL.nM, tL.Lc),
                          children: [
                              (0, a.jsx)(lv.Z, { color: ej.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, a.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: l
                                      ? eJ.intl.format(eJ.t.aZ2iIp, { onShowOriginal: () => r(!1) })
                                      : eJ.intl.format(eJ.t["/2ylF4"], { onShowTranslated: () => r(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(p.E, {
                      ref: m,
                      lineClamp: o ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: l ? t.summaryLocalized : t.description,
                  }),
                  d &&
                      (0, a.jsx)(eI.D, {
                          className: tL.vk,
                          onClick: () => {
                              n(o ? B.Ws.ShowMore : B.Ws.ShowLess), c(!o);
                          },
                          children: (0, a.jsx)(p.E, {
                              variant: "text-sm/semibold",
                              children: o ? eJ.intl.string(eJ.t.lBeKY2) : eJ.intl.string(eJ.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(tK, { className: lb.B, game: t }),
              ],
          });
}
function lC(e) {
    let { game: t, trackAction: n } = e,
        l = i.useRef(null),
        {
            isExpanded: r,
            showToggle: o,
            handleToggleExpanded: c,
        } = (function (e, t) {
            let [n, l] = i.useState("full");
            i.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        l((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return n.observe(t), () => n.disconnect();
            }, [e]);
            let a = i.useCallback(() => {
                "expanded" === n
                    ? (t(B.Ws.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(B.Ws.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: a,
            };
        })(l, n),
        { isTwoColumn: d } = ew(),
        u = i.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = r ? eJ.intl.string(eJ.t["6MwJo/"]) : eJ.intl.string(eJ.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: s()(tL.fi, tL.mX),
        children: [
            (0, a.jsx)(p.E, { ref: l, lineClamp: r ? void 0 : u, variant: "text-md/medium", children: t.description }),
            o && (0, a.jsx)(lA.Q, { onClick: c, text: m }),
        ],
    });
}
var lN = n(952311);
let lS = () =>
    (0, a.jsxs)("div", {
        className: tL.uv,
        children: [
            (0, a.jsx)(x.Y, { size: "xxs" }),
            (0, a.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: eJ.intl.string(eJ.t.kAlUsy) }),
        ],
    });
function ly(e) {
    let { game: t, entries: n, trackAction: l } = e,
        r = i.useMemo(() => t?.genres.map(F.du).join(", "), [t]),
        [o] = i.useState(() => Math.random()),
        d = i.useMemo(() => {
            if (null == t) return "";
            if (null != t.bannerHash)
                return V.Ay.getGameAssetURL({ id: t.id, hash: t.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            let e = t.getArtworkURLs(),
                n = t.screenshotUrls ?? [];
            if (e.length > 0) {
                let t = Math.floor(o * e.length);
                return e[t];
            }
            if (n.length > 0) {
                let e = Math.floor(o * n.length);
                return n[e];
            }
            return "";
        }, [t, o]),
        u = t.getIconURL(160, V.QB ? "webp" : "png"),
        m = null != t.firstReleaseDate ? new Date(t.firstReleaseDate).getTime() : W.default.extractTimestamp(t.id),
        f = 7 >= c()().diff(c()(m), "days"),
        _ = n.some((e) => (0, O.CZ)(e) === h.m.GLOBAL),
        g = t.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: tL.is, style: { backgroundImage: `url("${d}")` } }),
            (0, a.jsxs)("div", {
                className: s()(tL.Qs, tL.fi, tL.iH, tL.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: tL.xx,
                        children: [
                            (0, a.jsx)("div", {
                                className: tL.bb,
                                children: (0, a.jsx)(ep.A, { game: t, className: tL.wm, size: ep.w.LARGE }),
                            }),
                            (0, a.jsx)(eq, { gameId: t.id, className: tL.Gg, trackAction: l }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: s()(tL.nM, tL.Lc, tL.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(E.D, { variant: "heading-xl/bold", children: g }),
                                (0, a.jsxs)("div", {
                                    className: s()(tL.nM, tL.Lc),
                                    children: [
                                        null != u &&
                                            (0, a.jsx)("img", {
                                                className: tL.Gt,
                                                src: u,
                                                height: 16,
                                                alt: eJ.intl.formatToPlainString(eJ.t["nh+jWk"], { game: g }),
                                            }),
                                        (0, a.jsx)(p.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                        f &&
                                            (0, a.jsx)(p.E, {
                                                variant: "eyebrow",
                                                className: tL.Ad,
                                                children: eJ.intl.string(eJ.t.y2b7CA),
                                            }),
                                        _ &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(p.E, { variant: "text-sm/medium", children: " \xb7 " }),
                                                    (0, a.jsx)(lS, {}),
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
function lR(e) {
    let {
        game: t,
        entries: n,
        officialGuildInvite: l,
        similarGames: i,
        similarGamesError: r,
        onClose: s,
        viewId: o,
        trackAction: c,
        source: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: tL.V0,
        children: [
            (0, a.jsx)(nL, { entries: n, viewId: o, officialGuildId: l?.guild?.id, onClose: s, source: d }),
            (0, a.jsx)(nh, { game: t, trackAction: c }),
            (0, a.jsx)(ln, { gameId: t.id, onClose: s, similarGames: i, similarGamesError: r, trackAction: c }),
        ],
    });
}
function lL(e) {
    let { game: t, trackAction: n, closeModal: l } = e;
    return (0, a.jsxs)("div", {
        className: lN.oC,
        children: [
            (0, a.jsxs)("div", {
                className: lN.lM,
                children: [(0, a.jsx)(ng, { game: t, trackAction: n }), (0, a.jsx)(lC, { game: t, trackAction: n })],
            }),
            (0, a.jsx)(tu, { gameId: t.id, trackAction: n }),
            (0, a.jsx)(ls, { trackAction: n }),
            (0, a.jsx)(n6, { game: t, closeModal: l, trackAction: n }),
        ],
    });
}
function lT(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        i = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED,
        { closeModal: r } = ew();
    return (0, a.jsxs)("div", {
        className: tL.V0,
        children: [
            (0, a.jsx)(ng, { game: t, trackAction: n }),
            (0, a.jsxs)("div", {
                className: lN.gr,
                children: [
                    (0, a.jsx)(t3, { game: t, isTwoColumn: !1 }),
                    (0, a.jsxs)("div", {
                        className: lN.E1,
                        children: [
                            (0, a.jsx)(lE, { game: t, trackAction: n }),
                            (0, a.jsx)(lC, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(nt, { analyticsLocations: l, trackAction: n }),
            (0, a.jsx)(nO, { closeModal: r, trackAction: n }),
            (0, a.jsx)(tu, { gameId: t.id, trackAction: n }),
            (0, a.jsx)(ls, { trackAction: n }),
            (0, a.jsx)(n6, { game: t, closeModal: r, trackAction: n }),
            i && (0, a.jsx)(nJ, { game: t, trackAction: n }),
            (0, a.jsx)(t$, { game: t, trackAction: n }),
        ],
    });
}
function lk(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l, trackAction: r } = e;
    (0, L.A)({
        name: d.ImpressionNames.CLOUD_PLAY_CTA,
        type: d.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let s = i.useCallback(() => {
        r(B.Ws.CloudPlay), t(), n();
    }, [t, n, r]);
    return (0, a.jsx)(_.m, {
        text: eJ.intl.string(eJ.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(v.$, {
            icon: A.h,
            text: eJ.intl.string(eJ.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function lw(e) {
    let { gameId: t, analyticsLocations: n } = e,
        l = (0, k.h)(t),
        a = (0, S.A)({ application: l, analyticsLocations: n });
    return { onCloudPlayClick: a, isCloudPlayButtonShown: !(0, P.L)(t) && null != a };
}
function lM(e) {
    let {
            game: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: l,
            trackAction: r,
            onClose: o,
            analyticsLocations: c,
        } = e,
        d = i.useCallback(() => {
            o(), (0, D.closeUserProfileModal)();
        }, [o]),
        { isCloudPlayButtonShown: u, onCloudPlayClick: m } = lw({ gameId: t.id, analyticsLocations: c });
    return (0, a.jsxs)("div", {
        className: s()(tL.pz, tL.fi, tL.iH),
        children: [
            (0, a.jsxs)("div", {
                className: tL.NC,
                children: [
                    (0, a.jsx)(tq, { invite: l, closeModal: d, trackAction: r }),
                    u &&
                        null != m &&
                        (0, a.jsx)(lk, { onClose: d, onCloudPlayClick: m, analyticsLocations: c, trackAction: r }),
                ],
            }),
            (0, a.jsx)(E.D, { variant: "heading-md/bold", children: eJ.intl.string(eJ.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: tL.V0,
                children: [
                    (0, a.jsx)(lj, { game: t, trackAction: r }),
                    (0, a.jsx)(nM, { game: t, onInviteResolved: n, closeModal: d, trackAction: r }),
                    (0, a.jsx)(tP, { game: t, trackAction: r }),
                    (0, a.jsx)(nG, { game: t }),
                    (0, a.jsx)(t_, { game: t, trackAction: r }),
                    (0, a.jsx)(p.E, {
                        variant: "text-xxs/normal",
                        children: eJ.intl.format(eJ.t.pch2Jw, { igdbLink: tZ.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function lO(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        { closeModal: i } = ew(),
        { isCloudPlayButtonShown: r, onCloudPlayClick: o } = lw({ gameId: t.id, analyticsLocations: l }),
        { showsStoreLinks: c } = lp(t),
        d = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: s()(lN.Pn, tL.fi, tL.iH, c ? lN.sV : lN.gF),
        children: [
            r && null != o
                ? (0, a.jsx)("div", {
                      className: tL.NC,
                      children: (0, a.jsx)(lk, {
                          onClose: i,
                          onCloudPlayClick: o,
                          analyticsLocations: l,
                          trackAction: n,
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: tL.V0,
                children: [
                    (0, a.jsx)(lE, { game: t, trackAction: n }),
                    (0, a.jsx)(nt, { analyticsLocations: l, trackAction: n }),
                    (0, a.jsx)(nO, { closeModal: i, trackAction: n }),
                    d && (0, a.jsx)(nJ, { game: t, trackAction: n }),
                    (0, a.jsx)(t$, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function lG(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: r,
            onClose: o,
            appContext: c,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, w.Ay)(),
        m = (0, f.bG)([U.default], () => U.default.locale),
        { analyticsLocations: h } = (0, R.Ay)(y.A.GAME_PROFILE),
        _ = i.useMemo(() => (0, B.u9)(), []),
        g = (0, f.yK)([ei.A], () => (ei.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [x, p] = i.useState(null),
        E = (0, eo.s)(t),
        [v, A] = i.useState(null),
        { data: C, refetch: S } = (0, G.I)(t),
        L = C?.name ?? "",
        T = (e, l) => {
            (0, B.Tn)({
                gameName: L,
                gameId: t,
                action: e,
                similarGameId: l,
                viewId: _,
                officialGuildId: v?.guild?.id,
                source: n,
            });
        };
    return ((0, N.Ay)(() => {
        (0, B.rw)({ source: n, viewId: _, gameId: t, gameName: L, authorId: l, profileType: B.HV.FullProfile }),
            (0, M.He)();
    }),
    i.useEffect(() => {
        m.startsWith("en") || C?.summaryLocalized != null || S();
    }, [t, C?.summaryLocalized, m, S]),
    i.useEffect(() => {
        (async () => {
            if (0 === g.length) {
                p(null);
                try {
                    await el(t);
                } catch (e) {
                    p(e);
                }
            }
        })();
    }, [t, g]),
    (0, N.Ay)(() => () => {
        let e = Date.now(),
            n = E.map((t) => {
                let n = (0, O.JM)(t) ? (0, O.W6)(t, e) : (0, O.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, B.V_)({
            viewId: _,
            gameId: t,
            gameName: L,
            playedFriendIds: E.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: g.filter(ex.oS).slice(0, 5),
            officialGuildId: v?.guild?.id,
        });
    }),
    null == C)
        ? null
        : (0, a.jsx)(R.f5, {
              value: h,
              children: (0, a.jsx)(I.d, {
                  transitionState: r,
                  onClose: o,
                  size: "xl",
                  children: (0, a.jsx)("div", {
                      className: s()(u, tL.fn),
                      children: (0, a.jsxs)(b.Ip, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(ly, { game: C, entries: E, trackAction: T }),
                              (0, a.jsx)(j.F, {
                                  children: (0, a.jsxs)("div", {
                                      className: s()(tL.Qs, tL.rb),
                                      children: [
                                          (0, a.jsx)(lR, {
                                              game: C,
                                              entries: E,
                                              officialGuildInvite: v,
                                              similarGames: g,
                                              similarGamesError: x,
                                              onClose: o,
                                              viewId: _,
                                              source: n,
                                              trackAction: T,
                                          }),
                                          (0, a.jsx)(lM, {
                                              game: C,
                                              onSetOfficialGuildInvite: A,
                                              officialGuildInvite: v,
                                              onClose: o,
                                              appContext: c,
                                              source: n,
                                              trackExternalAction: d,
                                              trackAction: T,
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
function lP(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: r,
            onClose: o,
            appContext: c,
            trackExternalAction: d,
            initialScrollOffset: m,
        } = e,
        [h, _] = i.useState(!0),
        [x, p] = i.useState(null),
        { clientThemesClassName: E } = (0, w.Ay)(),
        v = (0, f.bG)([U.default], () => U.default.locale),
        A = i.useMemo(() => (0, B.u9)(), []),
        { analyticsLocations: I } = (0, R.Ay)(y.A.GAME_PROFILE),
        b = (0, eo.s)(t),
        { data: S } = (0, G.I)(t),
        L = S?.name ?? "",
        {
            hasAlreadyLinked: P,
            canStartAuthorization: V,
            fetched: F,
            startAuthorization: W,
            connectionApp: H,
        } = (0, T.RD)(S),
        { invite: Y, isMember: z } = eg(S, p),
        { socialLayerStorefrontRecommendationsData: K } = (function (e) {
            let t = em.default.getCurrentUser()?.id,
                n = i.useMemo(() => (null != t ? [t] : []), [t]),
                l = (0, f.bG)([ec.A], () => (null != e ? ec.A.getApplicationIdFromDetectableId(e) : void 0)),
                a = (0, k.h)(l),
                r = i.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: s, status: o } = (0, eu.XQ)({
                    applicationIds: r,
                    userIds: n,
                    numItems: 6,
                    source: ed.B5.USER_PROFILE,
                });
            return {
                socialLayerStorefrontRecommendationsData: i.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== o || 0 === s.length
                            ? null
                            : { application: a, skuIds: s.map((e) => e.id), guildId: a.guildId },
                    [a, o, s],
                ),
            };
        })(t),
        Z = (e, l) => {
            (0, B.Tn)({
                gameName: L,
                gameId: t,
                action: e,
                similarGameId: l,
                viewId: A,
                officialGuildId: x?.guild?.id,
                source: n,
            });
        };
    (0, N.Ay)(() => {
        (0, B.rw)({ source: n, viewId: A, gameId: t, gameName: L, authorId: l, profileType: B.HV.FullProfile }),
            (0, M.He)();
    }),
        (0, N.Ay)(() => () => {
            let e = Date.now(),
                n = b.map((t) => {
                    let n = (0, O.JM)(t) ? (0, O.W6)(t, e) : (0, O.aJ)(t, v);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, B.V_)({
                viewId: A,
                gameId: t,
                gameName: L,
                playedFriendIds: b.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: x?.guild?.id,
            });
        });
    let X = i.useCallback((e) => {
            _(e.contentRect.width >= 800);
        }, []),
        J = (0, u.w)(X, [], { fireOnMount: !0 }),
        $ = i.useCallback(() => {
            o(), (0, D.closeUserProfileModal)();
        }, [o]),
        q = i.useRef(null),
        Q = i.useCallback(() => q.current?.getScrollerNode()?.scrollTop ?? 0, []),
        ee = i.useMemo(
            () => ({
                isTwoColumn: h,
                canStartAuthorization: V,
                hasAlreadyLinked: P,
                fetchedAuthorization: F,
                startAuthorization: W,
                connectionApp: H,
                officialInvite: Y,
                isMember: z,
                socialLayerStorefrontRecommendationsData: K,
                closeModal: $,
                getScrollOffset: Q,
            }),
            [h, V, P, F, W, H, Y, z, K, $, Q],
        ),
        et = i.useCallback(() => {
            o(), (0, D.closeUserProfileModal)();
        }, [o]),
        [en, el] = i.useState(!1),
        [ea, ei] = i.useState(150),
        er = i.useRef(null);
    i.useEffect(() => {
        null != m && m > 0 && q.current?.getScrollerNode()?.scrollTo({ top: m, behavior: "instant" });
    }, []);
    let es = i.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != er.current) {
                let e = Math.max(0, 1 - t / 150);
                er.current.style.opacity = String(e);
            }
            el(t >= ea);
        },
        [ea],
    );
    return null == S
        ? null
        : (0, a.jsx)(R.f5, {
              value: I,
              children: (0, a.jsx)(g.N, {
                  transitionState: r,
                  onClose: o,
                  children: (0, a.jsx)(ek.Provider, {
                      value: ee,
                      children: (0, a.jsxs)("div", {
                          className: s()(E, lN.kL),
                          ref: J,
                          children: [
                              (0, a.jsx)(t5, { game: S, ref: er }),
                              (0, a.jsx)(t1, { game: S, show: en, onClose: et, trackAction: Z }),
                              (0, a.jsx)(t2, { show: en }),
                              (0, a.jsxs)(C.Ch, {
                                  ref: q,
                                  onScroll: es,
                                  children: [
                                      (0, a.jsx)(t4, {
                                          game: S,
                                          onSetCompactBarScrollThreshold: ei,
                                          showCompactBar: en,
                                      }),
                                      (0, a.jsx)(j.F, {
                                          children: h
                                              ? (0, a.jsxs)("div", {
                                                    className: lN.jC,
                                                    children: [
                                                        (0, a.jsx)(lL, { game: S, closeModal: et, trackAction: Z }),
                                                        (0, a.jsx)(lO, {
                                                            game: S,
                                                            appContext: c,
                                                            source: n,
                                                            trackExternalAction: d,
                                                            trackAction: Z,
                                                            analyticsLocations: I,
                                                        }),
                                                    ],
                                                })
                                              : (0, a.jsx)("div", {
                                                    className: lN.b9,
                                                    children: (0, a.jsx)(lT, {
                                                        game: S,
                                                        trackAction: Z,
                                                        analyticsLocations: I,
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
let lD = function (e) {
    let t = es.useConfig({ location: "GameProfileModal" }).enabled;
    return e.forceV2 || t ? (0, a.jsx)(lP, { ...e }) : (0, a.jsx)(lG, { ...e });
};
