n.d(t, { default: () => lU });
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
    p = n(825860),
    x = n(834730),
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
    B = n(240248),
    H = n(409626),
    Y = n(636537),
    z = n(228366),
    K = n(845584),
    Z = n(371794),
    X = n(155718),
    J = n(731068),
    $ = n(77350),
    q = n(320095),
    Q = n(383233),
    ee = n(998218);
let et = /^#{1,3}\s+(.+)$/;
var en = n(652215);
let el = async (e) => {
        z.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, Z.aP)({
                    url: en.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: U.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            z.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            z.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    ea = async (e) => {
        try {
            let t = (
                (await Y.Bo.get({ url: en.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            z.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", applicationId: e, games: t });
        } catch (e) {
            throw new K.LG(e);
        }
    },
    ei = async (e, t) => {
        z.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let n = {};
            t?.limit != null && (n.limit = t.limit);
            let l = (await Y.Bo.get({ url: en.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
            z.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: l.messages.map((e) => {
                    let t,
                        n,
                        l = (0, q.rh)(e),
                        a = (0, Q._c)(l)
                            ? l.components
                                  .filter((e) => e.type === X.I5.TEXT_DISPLAY)
                                  .map((e) => e.content)
                                  .join("\n")
                            : l.content,
                        i = (function (e) {
                            if ((0, Q._c)(e)) {
                                let t = e.components.find((e) => e.type === X.I5.MEDIA_GALLERY),
                                    n = t?.items[0]?.media;
                                if (null != n) {
                                    let t = (0, J.FE)(n);
                                    if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, $.tT)(e.content_type));
                            if (null != t) return (0, J.Rr)(t, e);
                            let n = e.attachments.find((e) => (0, $.XB)(e.content_type));
                            if (null != n) return (0, J.Rr)(n, e);
                            let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (l?.thumbnail != null)
                                return (0, J.oU)(
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
                            (n = (-1 === t ? a : a.slice(0, t)).match(et)),
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
            z.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var er = n(422069),
    es = n(945810);
let eo = (0, es.mj)({
    name: "2025-12-game-profiles-v2",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var ec = n(205184),
    ed = n(832163),
    eu = n(594832),
    em = n(862772),
    eh = n(287809),
    ef = n(505779),
    e_ = n(970163),
    eg = n(184989);
let ep = function (e, t) {
    let [n, l] = i.useState(),
        a = i.useRef(null),
        r = i.useRef(t);
    i.useEffect(() => {
        r.current = t;
    }, [t]);
    let s = (0, f.bG)([eg.A], () => n?.guild?.id != null && eg.A.isMember(n?.guild?.id)),
        o = i.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ef.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        i.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (a.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, e_.A)(t);
                    !0 !== e.banned && ((a.current = t), l(e.invite), null != e.invite && r.current?.(e.invite));
                }
            };
            null != o && e(o.url);
        }, [o]),
        { invite: n, isMember: s }
    );
};
var ex = n(80552),
    eE = n(459746),
    ev = n(922016),
    eA = n(550079),
    eI = n(477782),
    eb = n(939249),
    ej = n(365199),
    eC = n(661531),
    eN = n(663341),
    eS = n(408278),
    ey = n(34188),
    eR = n(789645),
    eL = n(442433),
    eT = n(50268),
    ek = n(44724);
let ew = i.createContext(void 0);
function eM() {
    let e = i.useContext(ew);
    if (void 0 === e) throw Error("useGameProfileV2Context must be used within a GameProfileV2Provider");
    return e;
}
var eO = n(67518);
n(321073);
var eG = n(540185),
    eP = n(926268),
    eD = n(53788),
    eU = n(831453),
    eV = n(785866),
    eF = n(555704),
    eW = n(395332),
    eB = n(47675),
    eH = n(633075),
    eY = n(289173),
    ez = n(841595),
    eK = n(958805),
    eZ = n(735321),
    eX = n(495544),
    eJ = n(760751),
    e$ = n(985018);
async function eq(e) {
    let t = e((0, eZ.BF)());
    await eK.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function eQ(e) {
    let { applicationId: t, className: n, trackAction: l } = e,
        r = i.useRef(null),
        s = (0, eT.A)({ id: t, label: e$.intl.string(e$.t["FfCL+6"]) }),
        o = (0, eO.n)(t, l);
    return null == s && null == o
        ? null
        : (0, a.jsx)(ev.Y, {
              targetElementRef: r,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(eA.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, eL.Z_)(), t();
                      },
                      "aria-label": e$.intl.string(e$.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(eI.rX, { children: s }), (0, a.jsx)(eI.rX, { children: o })],
                      }),
                  });
              },
              children: (e) =>
                  (0, a.jsx)(_.m, {
                      text: e$.intl.string(e$.t["UKOtz+"]),
                      children: (0, a.jsx)(eb.D, {
                          innerRef: r,
                          className: n,
                          ...e,
                          children: (0, a.jsx)(ej.j, { size: "xs", color: eC.A.colors.WHITE }),
                      }),
                  }),
          });
}
function e0(e) {
    let { game: t, onClose: n, className: l, trackAction: r } = e,
        s = i.useRef(null),
        o = i.useRef(null),
        c = (0, eT.A)({ id: t.id, label: e$.intl.string(e$.t["FfCL+6"]) }),
        d = (0, eO.n)(t.id, r),
        u = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, f.bG)([eX.default], () => eX.default.getId()),
                r = (0, f.bG)([eJ.A], () => eJ.A.getDetectableGame(t)),
                s = i.useMemo(
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
                            icon: eD.G,
                        },
                        {
                            type: eG.x.CURRENT_GAMES,
                            addLabel: e$.intl.string(e$.t.G0c4En),
                            removeLabel: e$.intl.string(e$.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: eU.H,
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
                o = (0, f.yK)([ez.A], () => (null == l ? [] : (ez.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, eW.w$)({ location: "game-profile-overflow-menu" }),
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
                            (await eq((a) => {
                                let i = a.filter(eY.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (i?.games.some((e) => e.applicationId === t) || (null != i && (0, eZ.uA)(i)))
                                        return a;
                                    let n = { applicationId: t },
                                        r = null != i ? [n, ...(i.games ?? [])] : [n];
                                    l = new eY.Yy({ ...(i ?? { type: e }), games: r });
                                } else {
                                    if (null == i) return a;
                                    let e = i.games.filter((e) => e.applicationId !== t);
                                    l = new eY.Yy({ ...i, games: e });
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
                        (0, eB.un)({
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
                            (await eq((n) =>
                                e
                                    ? n.some((e) => e instanceof eH.R && e.applicationId === d)
                                        ? n
                                        : [(t = new eH.R({ applicationId: d })), ...n]
                                    : ((t = n.find((e) => e instanceof eH.R && e.applicationId === d) ?? null),
                                      n.filter((e) => !(e instanceof eH.R && e.applicationId === d))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, eB.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [d],
                );
            if (null == l) return null;
            let h = null != e && null != r && (0, eZ.XX)(r),
                _ = [];
            if (null != d) {
                let e = o.some((e) => e instanceof eH.R && e.applicationId === d);
                _.push(
                    (0, a.jsx)(
                        eI.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? e$.intl.formatToPlainString(e$.t.Ktb1n8, { name: n })
                                : e$.intl.formatToPlainString(e$.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: eF.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of s) {
                    let n = o.filter(eY.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.applicationId === t),
                        i = !l && null != n && (0, eZ.uA)(n);
                    _.push(
                        (0, a.jsx)(
                            eI.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? e$.intl.string(e$.t["86OoiH"]) : void 0,
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
        { officialInvite: m } = eM(),
        h = new Set(m?.guild?.features).has(en.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        g = i.useCallback(() => {
            null != m && (0, ek.X)({ invite: m });
        }, [m]),
        p = i.useCallback(() => {
            null != m && (r(H.Ws.GameShop), (0, ek.default)({ invite: m }), n());
        }, [m, r, n]);
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            null != u &&
                (0, a.jsx)(ev.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(eA.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, eL.Z_)(), t();
                            },
                            "aria-label": e$.intl.string(e$.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(eI.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: o,
                            children: (0, a.jsx)(v.$, {
                                icon: eN.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: e$.intl.string(e$.t.sidPSo),
                            }),
                        }),
                }),
            h &&
                null != m &&
                (0, a.jsx)(_.m, {
                    text: e$.intl.string(e$.t.apFNLU),
                    children: (0, a.jsx)(eS.K, {
                        icon: ey.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": e$.intl.string(e$.t.apFNLU),
                        onMouseDown: g,
                        onClick: p,
                    }),
                }),
            (null != c || null != d) &&
                (0, a.jsx)(ev.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(eA.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, eL.Z_)(), t();
                            },
                            "aria-label": e$.intl.string(e$.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(eI.rX, { children: d }), (0, a.jsx)(eI.rX, { children: c })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(_.m, {
                            text: e$.intl.string(e$.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: s,
                                children: (0, a.jsx)(eS.K, {
                                    icon: ej.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": e$.intl.string(e$.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(eS.K, {
                icon: eR.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: n,
                "aria-label": e$.intl.string(e$.t.cpT0Cq),
            }),
        ],
    });
}
var e1 = n(621466),
    e2 = n(966697),
    e5 = n(460905),
    e8 = n(951707),
    e6 = n(46054),
    e3 = n(58703),
    e4 = n(60465),
    e9 = n(284009),
    e7 = n.n(e9),
    te = n(376728),
    tt = n(976860),
    tn = n(71393),
    tl = n(449054);
async function ta(e) {
    let { invite: t, guildId: n, channelId: l, messageId: a, analyticsLocationStack: i } = e;
    e7()(i.length > 0, "analyticsLocationStack must have at least one location");
    let r = i[i.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let o = tn.A.getGuild(n);
    if (o?.joinedAt == null)
        if (null == s || s.has(en.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, tl.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: a, joinSource: en.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                i,
            ));
        else
            null != t &&
                (await te.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, tt.pX)(en.BVt.CHANNEL(n, l, a), { sourceLocationStack: i });
}
var ti = n(320448),
    tr = n(274119);
function ts(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, a.jsxs)("div", {
        className: tr.k,
        children: [
            (0, a.jsxs)("div", {
                className: tr.w,
                children: [
                    (0, a.jsx)(E.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, a.jsx)(v.$, {
                            size: "sm",
                            icon: ti._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: e$.intl.string(e$.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var to = n(468489),
    tc = n(992595);
function td(e, t) {
    return e6.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function tu(e) {
    let t,
        { variant: n, message: l, channelId: r, onCardClick: o } = e,
        [c, d] = i.useState(!1),
        u = "main" === n,
        m = i.useCallback(() => d(!0), []),
        h = i.useCallback(
            (e) => {
                if (
                    !(
                        (0, e1.vq)(e.target, HTMLAnchorElement) ||
                        ((0, e1.vq)(e.target, HTMLSpanElement) && (0, e1.vq)(e.target.parentElement, HTMLAnchorElement))
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
                ? null == (t = ee.A.toURLSafe(_))
                    ? null
                    : (t.searchParams.append("format", "webp"), t.toString())
                : null) ?? _;
    return (0, a.jsxs)(eb.D, {
        className: u ? to.cG : to.IU,
        onClick: h,
        children: [
            null != l.media &&
                null != g &&
                (0, a.jsx)("div", {
                    className: u ? to._v : to.eZ,
                    children: (0, a.jsx)(e2.y, {
                        readyState: c ? en.Rv1.READY : en.Rv1.LOADING,
                        aspectRatio: f,
                        placeholder: l.media.placeholder,
                        placeholderVersion: l.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, a.jsx)("img", {
                            src: g,
                            className: u ? to.fk : to.v,
                            alt: "",
                            draggable: !1,
                            onLoad: m,
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: u ? to.GT : to.s4,
                children: [
                    null != l.title &&
                        (0, a.jsx)(E.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? to.KX : to._N,
                            children: td(l.title, r),
                        }),
                    l.body.length > 0 &&
                        (0, a.jsx)("div", { className: s()(to.h_, u ? to.My : to.Gd, tc.PT), children: td(l.body, r) }),
                    (0, a.jsxs)("div", {
                        className: to.ov,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, e3.i$)(new Date(l.timestamp), "LL"),
                            }),
                            l.reactionCount > 0 &&
                                (0, a.jsxs)("div", {
                                    className: to.a5,
                                    children: [
                                        (0, a.jsx)(e5.n, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(x.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(e$.intl.currentLocale).format(
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
function tm(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, R.Ay)(),
        { officialInvite: r, closeModal: s, getScrollOffset: o } = eM(),
        {
            messages: c,
            guildId: d,
            channelId: u,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, f.cf)([er.A], () => ({
                data: null != e ? er.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && er.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && er.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, i.useEffect)(() => {
                    null == e || n || er.A.isAnnouncementsFetching(e) || ei(e);
                }, [e, n]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l }
            );
        })(t),
        m = i.useCallback(() => {
            let e = r?.guild?.id ?? d;
            null != e &&
                null != u &&
                (n(H.Ws.Announcements),
                e4.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: o() }),
                s(),
                ta({ invite: r, guildId: e, channelId: u, analyticsLocationStack: l }));
        }, [n, s, o, r, d, u, l, t]),
        h = i.useCallback(
            (e) => {
                let a = r?.guild?.id ?? d;
                null != a &&
                    null != u &&
                    (n(H.Ws.AnnouncementsItem),
                    e4.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: o() }),
                    s(),
                    ta({ invite: r, guildId: a, channelId: u, messageId: e, analyticsLocationStack: l }));
            },
            [n, s, o, r, d, u, l, t],
        );
    if (null == u || 0 === c.length) return null;
    let _ = 2 !== c.length,
        g = _ ? c[0] : null,
        p = _ ? c.slice(1) : c;
    return (0, a.jsx)(ts, {
        title: e$.intl.string(e$.t.B0BV3Y),
        onClickViewAll: m,
        children: (0, a.jsxs)("div", {
            className: to.f3,
            children: [
                null != g && (0, a.jsx)(tu, { variant: "main", message: g, channelId: u, onCardClick: h }),
                p.length > 0 &&
                    (0, a.jsx)(e8.A, {
                        gap: 16,
                        children: p.map((e) =>
                            (0, a.jsx)(tu, { variant: "small", message: e, channelId: u, onCardClick: h }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var th = n(349288),
    tf = n(975807),
    t_ = n(194362);
function tg(e) {
    let { application: t, trackAction: n } = e,
        l = i.useCallback(async () => {
            n(H.Ws.ClaimGame);
            let e = await (0, t_.a)(en.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tf.A)(e);
        }, [n]),
        r = i.useCallback((e) => (0, a.jsx)(th.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedGames?.some((e) => e.type === X.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(x.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: e$.intl.format(e$.t.KAjfKl, { claimLink: r }),
          });
}
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
let tE = [tx.Y.DESKTOP, tx.Y.XBOX, tx.Y.PLAYSTATION, tx.Y.NINTENDO];
function tv(e) {
    return i.useMemo(() => {
        let t = new Set(e.platforms),
            n = [...t];
        return (
            !t.has(tx.Y.DESKTOP) && (t.has(tx.Y.MACOS) || t.has(tx.Y.LINUX)) && n.push(tx.Y.DESKTOP),
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
let tk = [ef.V.OFFICIAL, ef.V.TWITTER, ef.V.YOUTUBE],
    tw = { colorClass: tT.wP },
    tM = { size: "xs", colorClass: tT.wP };
function tO(e, t) {
    switch (e.category) {
        case ef.V.OFFICIAL:
            return { icon: (0, a.jsx)(tA.L, { ...t }), action: H.Ws.WebsiteLink, title: e$.intl.string(e$.t.fOUKvg) };
        case ef.V.TWITTER:
            return { icon: (0, a.jsx)(tI.p, { ...t }), action: H.Ws.XLink, title: e$.intl.string(e$.t.INic4y) };
        case ef.V.YOUTUBE:
            return { action: H.Ws.YouTubeLink, icon: (0, a.jsx)(tb.C, { ...t }), title: e$.intl.string(e$.t.lNmxbE) };
        case ef.V.FACEBOOK:
            return { icon: (0, a.jsx)(tj.Z, { ...t }), action: H.Ws.FacebookLink, title: e$.intl.string(e$.t.FjyREK) };
        case ef.V.INSTAGRAM:
            return {
                icon: (0, a.jsx)(tC.L, { ...t }),
                action: H.Ws.InstagramLink,
                title: e$.intl.string(e$.t["cgR+IK"]),
            };
        case ef.V.BLUESKY:
            return {
                icon: (0, a.jsx)(tN.a, { ...t }),
                action: H.Ws.BlueskyLink,
                title: e$.intl.string(e$.t["D/PHq5"]),
            };
        case ef.V.REDDIT:
            return { icon: (0, a.jsx)(tS.T, { ...t }), action: H.Ws.RedditLink, title: e$.intl.string(e$.t["Hgb+fc"]) };
        case ef.V.TWITCH:
            return { icon: (0, a.jsx)(ty.a, { ...t }), action: H.Ws.TwitchLink, title: e$.intl.string(e$.t["7xtz4G"]) };
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
        children: (0, a.jsx)(th.Anchor, {
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
                      children: e$.intl.string(e$.t["Oj3o1/"]),
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
        children: (0, a.jsx)(eb.D, { onClick: c, className: tT.yO, title: o, children: s }),
    });
}
var tU = n(31300),
    tV = n(802516),
    tF = n(22363),
    tW = n(418524);
function tB(e) {
    switch (e) {
        case tx.Y.DESKTOP:
            return e$.intl.string(e$.t.KT6uCJ);
        case tx.Y.XBOX:
            return e$.intl.string(e$.t.DDWUJp);
        case tx.Y.PLAYSTATION:
            return e$.intl.string(e$.t.fzMz2s);
        case tx.Y.NINTENDO:
            return e$.intl.string(e$.t.AMW8je);
        default:
            return null;
    }
}
function tH(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case tx.Y.DESKTOP:
            return (0, a.jsx)(tU.k, { size: "xs", ...n });
        case tx.Y.XBOX:
            return (0, a.jsx)(tV.Y, { size: "xs", ...n });
        case tx.Y.PLAYSTATION:
            return (0, a.jsx)(tF.X, { size: "xs", ...n });
        case tx.Y.NINTENDO:
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
    return (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-subtle", children: e$.intl.string(e$.t.GruYxV) });
}
let t$ = function (e) {
    let { application: t, game: n, trackAction: l } = e,
        r = i.useMemo(() => n.genres.map(F.du).join(", "), [n]),
        s = n.getCompanyByRole(X.wk.PUBLISHER),
        o = n.getCompanyByRole(X.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        d = o.map((e) => e.name).join(", "),
        u = n.firstReleaseDate,
        m = tv(n),
        h = (n?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tp.includes(t);
            })
            .sort((e, t) => tp.indexOf(e.category) - tp.indexOf(t.category)),
        f = !(0, B.uJ)(r),
        _ = !(0, B.uJ)(c),
        g = !(0, B.uJ)(d),
        p = !(0, B.uJ)(u),
        v = m.length > 0,
        A = h.length > 0 && !h.every((e) => (0, B.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: tX.uW,
        children: [
            (0, a.jsx)("div", {
                className: tX.Gf,
                children: (0, a.jsx)(E.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: e$.intl.string(e$.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tX.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== n.genres.length ? e$.intl.string(e$.t.pDgwYB) : e$.intl.string(e$.t.mjFKqn),
                            }),
                            f
                                ? (0, a.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: r,
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? e$.intl.string(e$.t.Hc7Enk) : e$.intl.string(e$.t["4Byy/G"]),
                            }),
                            _
                                ? (0, a.jsx)(x.E, {
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
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== o.length ? e$.intl.string(e$.t.KATEJB) : e$.intl.string(e$.t.na3PT0),
                            }),
                            g
                                ? (0, a.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: d,
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: e$.intl.string(e$.t.H3mPDT),
                            }),
                            p
                                ? (0, a.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tX.Gu,
                                      children: e3.i$(new Date(u), "LL"),
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? e$.intl.string(e$.t.PNqxNe) : e$.intl.string(e$.t["UxAag+"]),
                            }),
                            v
                                ? (0, a.jsx)("div", {
                                      className: tX.Gu,
                                      children: m.map((e) => (0, a.jsx)(tz, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: e$.intl.string(e$.t["Oj3o1/"]),
                            }),
                            A
                                ? (0, a.jsx)("div", {
                                      className: tX.Gu,
                                      children: h.map((e) => (0, a.jsx)(tD, { website: e, trackAction: l }, e.url)),
                                  })
                                : (0, a.jsx)(tJ, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tX.J1,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: e$.intl.string(e$.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tX.Gu,
                                children: e$.intl.format(e$.t.XPFZVl, { igdbLink: tZ.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: tX.OQ, children: (0, a.jsx)(tg, { application: t, trackAction: l }) }),
        ],
    });
};
function tq(e) {
    let { invite: t, trackAction: n, closeModal: l } = e,
        r = i.useCallback(() => {
            t?.guild != null && (0, ek.X)({ guildId: t.guild.id });
        }, [t]),
        s = i.useCallback(() => {
            t?.guild != null && (n(H.Ws.GameShop), (0, ek.default)({ invite: t }), l());
        }, [l, t, n]);
    return new Set(t?.guild?.features).has(en.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, a.jsx)(v.$, {
              variant: "primary",
              text: e$.intl.string(e$.t.v8UpgE),
              icon: ey.U,
              onClick: s,
              onMouseDown: r,
              fullWidth: !0,
          })
        : null;
}
var tQ = n(369606),
    t0 = n(8208);
function t1(e) {
    let { game: t, application: n, show: l, onClose: i, trackAction: r } = e,
        o = t.name ?? n?.name,
        c = n.getIconURL(80);
    return (0, a.jsxs)("div", {
        className: t0.y5,
        children: [
            (0, a.jsx)("div", { className: s()(t0.nI, l && t0.hD) }),
            (0, a.jsxs)("div", {
                className: s()(t0.A1, l && t0.g8),
                children: [
                    null != c && (0, a.jsx)("img", { src: c, alt: "", className: t0.V$, draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: t0.hm,
                        children: [
                            (0, a.jsx)(E.D, { variant: "heading-md/semibold", lineClamp: 1, children: o }),
                            null != t.l30Rank && (0, a.jsx)(t6, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(e0, { game: t, onClose: i, className: t0.HK, trackAction: r }),
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
    return (0, B.uJ)(r)
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
    return (0, B.uJ)(n) ? null : (0, a.jsx)(x.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
let t6 = (e) => {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: t0.Qc,
        children: [
            (0, a.jsx)(tQ.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(x.E, {
                variant: "text-xs/bold",
                color: "none",
                children: e$.intl.formatToPlainString(e$.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function t3(e) {
    let { game: t, application: n, isTwoColumn: l } = e;
    return (0, a.jsx)("div", {
        className: l ? t0.n8 : t0.FS,
        children: (0, a.jsx)(eE.A, { game: t, application: n, className: t0.xe, size: eE.w.LARGE }),
    });
}
let t4 = function (e) {
    let { game: t, application: n, onSetCompactBarScrollThreshold: l, showCompactBar: r } = e,
        { isTwoColumn: o } = eM(),
        c = i.useRef(null),
        d = i.useRef(null);
    i.useEffect(() => {
        let e = c.current,
            t = d.current;
        if (null == e || null == t) return;
        let n = (function (e, t) {
            let n = 0,
                l = e;
            for (; null != l && l !== t; ) (n += l.offsetTop), (l = l.offsetParent);
            return n;
        })(t, e);
        n > 0 && l?.(n);
    }, [l]);
    let u = t.name ?? n?.name;
    return (0, a.jsxs)("div", {
        ref: c,
        className: s()(t0.ap, r && t0.Gh),
        children: [
            o &&
                null != t &&
                (0, a.jsx)("div", {
                    className: t0.Tf,
                    children: (0, a.jsx)(eE.A, { game: t, application: n, className: t0.w$, size: eE.w.LARGE }),
                }),
            (0, a.jsxs)("div", {
                className: t0.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(t6, { rank: t.l30Rank }),
                    (0, a.jsx)(E.D, { ref: d, variant: "heading-xxl/semibold", children: u }),
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
        } = eM(),
        u = (0, f.bG)([eh.default], () => eh.default.getCurrentUser()),
        m = i.useCallback(() => {
            t(H.Ws.LinkAccount), o({ analyticsLocations: n });
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
                children: e$.intl.string(e$.t["VDAhr+"]),
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
                                        children: e$.intl.formatToPlainString(e$.t.hUbQT2, { gameName: c.name }),
                                    }),
                                    (0, a.jsx)(x.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: e$.intl.string(e$.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(v.$, {
                                variant: "secondary",
                                icon: t9.A,
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
                      children: e$.intl.string(e$.t.bNdK5x),
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
                                      eb.D,
                                      {
                                          className: nu.gw,
                                          focusProps: { offset: 4, ringClassName: nu.jR },
                                          onClick: () => {
                                              n(H.Ws.ClickImage),
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
                                              alt: e$.intl.formatToPlainString(e$.t.COYYrn, { game: name }),
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
                                      (0, a.jsx)(eb.D, {
                                          className: nu.G9,
                                          onClick: () => c(-1),
                                          children: (0, a.jsx)(nl.r, { className: nu.UE, color: "currentColor" }),
                                      }),
                                      (0, a.jsx)("div", { className: nu.Pj }),
                                      (0, a.jsx)(eb.D, {
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
        return (0, a.jsx)(eb.D, {
            className: s()(nm.JS, l && nm.Y4),
            onClick: d,
            children: (0, a.jsxs)("div", {
                className: nm.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: nm.xn,
                        alt: e$.intl.formatToPlainString(e$.t.COYYrn, { game: c }),
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
                    let t = (0, Z.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, Z.YE)(e.application_id, e.id, e.width, "webp"),
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
        p = _[g],
        x = p?.type === "VIDEO",
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
            n(x ? H.Ws.ClickTrailer : H.Ws.ClickImage);
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
        }, [n, _, g, x]),
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
                  x
                      ? (0, a.jsx)("div", {
                            className: nm.ND,
                            children: (0, a.jsx)(
                                n_,
                                {
                                    item: p,
                                    reducedMotion: h,
                                    videoRef: u,
                                    mediaPlayerRef: I,
                                    onPlay: j,
                                    onPause: C,
                                    onFullscreenChange: S,
                                },
                                `${g}-${p.url}`,
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
                                (0, a.jsx)(eb.D, {
                                    className: nm.gv,
                                    onClick: b,
                                    children: (0, a.jsx)(
                                        "img",
                                        {
                                            src: p.url,
                                            className: nm.c8,
                                            alt: e$.intl.formatToPlainString(e$.t.COYYrn, { game: t.name }),
                                        },
                                        p.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, a.jsx)(e8.A, {
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
var np = n(847374),
    nx = n(187322),
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
        _ = (0, f.bG)([eh.default], () => eh.default.getUser(t.author_id)),
        { nick: g, avatar: p } = i.useMemo(() => {
            let e = _?.getAvatarURL(h?.guild_id, 48, !1);
            return { nick: nI.Ay.getName(h?.guild_id, h?.id, _), avatar: e };
        }, [_, h]);
    return null == _
        ? null
        : (0, a.jsx)(ev.Y, {
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
                  (0, a.jsx)(eb.D, {
                      innerRef: m,
                      ...e,
                      className: nN.GA,
                      children: (0, a.jsx)(nx.vN, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("img", {
                                      className: nN.my,
                                      src: p,
                                      alt: e$.intl.formatToPlainString(e$.t.IzVXxY, { userName: g }),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: nN.Su,
                                      children: (0, a.jsxs)("div", {
                                          className: s()(tL.fi, tL.Kt),
                                          children: [
                                              (0, a.jsx)(x.E, {
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
            (0, H.Tn)({
                action: H.Ws.SendMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: l,
                source: i,
            });
        },
        onRequestOpen: () => {
            (0, H.Tn)({
                action: H.Ws.ClickMessageUser,
                applicationId: t.extra.application_id,
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
                children: e$.intl.string(e$.t.ak8OHk),
            }),
            0 === t.length
                ? (0, a.jsx)(x.E, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: nR.p$,
                      children: e$.intl.string(e$.t.R5fYVO),
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
                              (0, a.jsxs)(eb.D, {
                                  className: nR.ND,
                                  onClick: () => u(!0),
                                  children: [
                                      (0, a.jsx)(x.E, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: e$.intl.string(e$.t.yohc6E),
                                      }),
                                      (0, a.jsx)(np.a, { size: "xs" }),
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
        d = (0, f.bG)([eg.A], () => o?.guild?.id != null && eg.A.isMember(o?.guild?.id)),
        u = i.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === ef.V.DISCORD;
                }),
            [t.websites],
        );
    i.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != o && o.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, e_.A)(t);
                !0 !== e.banned && (c(e.invite), null != e.invite && l?.(e.invite));
            }
        };
        null != u && e(u.url);
    }, [u, l, o]);
    let m = i.useCallback(() => {
        null != o &&
            (n(H.Ws.JoinOfficialServer),
            r(),
            z.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: o, code: o.code, context: en.BRT.APP }));
    }, [o, n, r]);
    if (null == o || null == o.guild || !o.guild.features.includes(en.GuildFeatures.VERIFIED)) return null;
    let h = V.Ay.getGuildIconURL({ id: o.guild.id, icon: o.guild.icon, size: 32 });
    return (0, a.jsxs)("div", {
        className: tL.fi,
        children: [
            (0, a.jsx)(E.D, {
                className: tL.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: e$.intl.string(e$.t.kBDZSL),
            }),
            (0, a.jsxs)("div", {
                className: s()(tL.nM, tL.mX),
                children: [
                    (0, a.jsx)("img", {
                        className: nk.$f,
                        src: h,
                        alt: e$.intl.formatToPlainString(e$.t.xm6W9D, { guildName: o.guild.name }),
                    }),
                    (0, a.jsxs)("div", {
                        className: nk.U5,
                        children: [
                            (0, a.jsxs)("div", {
                                className: nk.YS,
                                children: [
                                    (0, a.jsx)(x.E, { variant: "text-sm/semibold", children: o.guild.name }),
                                    (0, a.jsx)(nT.A, { guild: o.guild, size: 16 }),
                                ],
                            }),
                            null != o.approximate_member_count &&
                                (0, a.jsx)(x.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: e$.intl.format(e$.t.zRl6XR, { count: o.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(v.$, {
                variant: "secondary",
                text: d ? e$.intl.string(e$.t.cEnaWx) : e$.intl.string(e$.t.XpeFYr),
                onClick: m,
                fullWidth: !0,
            }),
        ],
    });
}
function nO(e) {
    let { trackAction: t, closeModal: n } = e,
        { canStartAuthorization: l, hasAlreadyLinked: r, officialInvite: s, isMember: o } = eM(),
        c = i.useCallback(() => {
            null != s &&
                (t(H.Ws.JoinOfficialServer),
                n(),
                z.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: en.BRT.APP }));
        }, [s, t, n]);
    if (null == s || null == s.guild || !s.guild.features.includes(en.GuildFeatures.VERIFIED)) return null;
    let d = V.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        u = V.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (l && !r) || null == u,
        h = (0, a.jsx)("img", {
            className: nw.$f,
            src: d,
            alt: e$.intl.formatToPlainString(e$.t.xm6W9D, { guildName: s.guild.name }),
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
                children: e$.intl.string(e$.t["U2N+ci"]),
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
                                            !(0, B.uJ)(s.guild?.description) &&
                                                (0, a.jsx)(x.E, {
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
                                                                      (0, a.jsx)(x.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: e$.intl.format(e$.t["LC+S+m"], {
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
                                                                      (0, a.jsx)(x.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: e$.intl.format(e$.t.zRl6XR, {
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
                                text: o ? e$.intl.string(e$.t.cEnaWx) : e$.intl.string(e$.t.XpeFYr),
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
        n = (t.companies ?? []).filter((e) => e.roles.includes(X.wk.PUBLISHER));
    return 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(E.D, {
                      className: tL.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: e$.intl.string(e$.t["4Byy/G"]),
                  }),
                  (0, a.jsx)(x.E, { variant: "text-sm/normal", children: n.map((e) => e.name).join(", ") }),
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
let nF = (0, es.mj)({
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
            n(H.Ws.SteamReviews), c(t);
        }, [c, n, t]);
    return (0, a.jsx)(eb.D, {
        onClick: m,
        className: nY.nf,
        role: "link",
        "aria-label": e$.intl.string(e$.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nY.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nY.tN,
                    children: [
                        (0, a.jsx)(nP.N, { size: "sm", color: eC.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(E.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    _.m,
                    {
                        text:
                            d === nD.vI.NO_USER_REVIEWS
                                ? e$.intl.string(e$.t.CLMt8J)
                                : e$.intl
                                      .format(
                                          "recent" === o
                                              ? e$.t.TzvC0k
                                              : "localized" === o
                                                ? e$.t.EOfrwm
                                                : e$.t["lzANJ/"],
                                          { rating: r, rating_count: s?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: nY.Z0,
                            children: [
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    children: (function (e) {
                                        switch (e) {
                                            case nD.vI.NO_USER_REVIEWS:
                                                return e$.intl.string(e$.t.CLMt8J);
                                            case nD.vI.OVERWHELMINGLY_POSITIVE:
                                                return e$.intl.string(e$.t["75sx1S"]);
                                            case nD.vI.VERY_POSITIVE:
                                                return e$.intl.string(e$.t["EkOVg+"]);
                                            case nD.vI.POSITIVE:
                                                return e$.intl.string(e$.t.ZUkFtr);
                                            case nD.vI.MOSTLY_POSITIVE:
                                                return e$.intl.string(e$.t.M7Z09a);
                                            case nD.vI.MIXED:
                                                return e$.intl.string(e$.t.c8yuHR);
                                            case nD.vI.MOSTLY_NEGATIVE:
                                                return e$.intl.string(e$.t.H0MSjG);
                                            case nD.vI.NEGATIVE:
                                                return e$.intl.string(e$.t.vpLrgz);
                                            case nD.vI.VERY_NEGATIVE:
                                                return e$.intl.string(e$.t["5spYuX"]);
                                            case nD.vI.OVERWHELMINGLY_NEGATIVE:
                                                return e$.intl.string(e$.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != s &&
                                    d !== nD.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(x.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: e$.intl
                                            .format(e$.t.sgIoin, { rating_count: s.toLocaleString() })
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
            l(H.Ws.OpenCriticReviews), m(n);
        }, [m, l, n]);
    return (0, a.jsx)(eb.D, {
        onClick: h,
        className: nY.nf,
        role: "link",
        "aria-label": e$.intl.string(e$.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nY.Ur,
            children: [
                (0, a.jsx)(E.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: e$.intl.string(e$.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nY.WA,
                    children: [
                        null != o ? (0, a.jsx)(nZ, { tier: o }) : null,
                        null != o && c > 0 && d > 0 ? (0, a.jsx)(nX, { rating: c, tier: o }) : null,
                        u
                            ? (0, a.jsx)(x.E, {
                                  variant: "text-xs/medium",
                                  color: nV(nD.vI.NO_USER_REVIEWS),
                                  children: e$.intl.string(e$.t["0xYzpO"]),
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
                    return e$.intl.string(e$.t.aZej2g);
                case nW.STRONG:
                    return e$.intl.string(e$.t.MLxnSg);
                case nW.FAIR:
                    return e$.intl.string(e$.t["3f19KA"]);
                case nW.WEAK:
                    return e$.intl.string(e$.t.jtVgSh);
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
            text: e$.intl.string(e$.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nY.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(nH, { rating: t, strokeColor: l }),
                    (0, a.jsx)(x.E, {
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
        { applicationId: i } = n,
        r = (0, nB.I)(i),
        s = n.opencriticUrl,
        o = nF.useConfig({ location: "GameProfileReviews" }),
        c = o.recentEnabled || o.englishEnabled,
        d = n.steamReleaseStatus !== m.Y.RETIRED_ABANDONED && null != r,
        u = n.reviews?.steam,
        h = nU(u?.recentRating, u?.recentRatingCount),
        f = d && o.recentEnabled && h !== nD.vI.NO_USER_REVIEWS,
        _ =
            o.englishEnabled &&
            null != (t = u) &&
            null != t.localizedRating &&
            null != t.localizedRatingCount &&
            null != t.ratingCount &&
            t.localizedRatingCount >= 200 &&
            t.ratingCount >= 2e3,
        g = _ ? u?.localizedRating : u?.rating,
        p = _ ? u?.localizedRatingCount : u?.ratingCount,
        x = c ? (_ ? e$.t["aWb+V4"] : e$.t["8e4LiB"]) : e$.t.whmopT,
        v = n.reviews?.opencritic != null && null != s;
    return d || f || v
        ? (0, a.jsxs)("div", {
              className: nY.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nY.Gf,
                      children: (0, a.jsx)(E.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: e$.intl.string(e$.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nY.kL,
                      children: [
                          f && null != r
                              ? (0, a.jsx)("div", {
                                    className: nY.WH,
                                    children: (0, a.jsx)(nz, {
                                        url: r,
                                        trackAction: l,
                                        title: e$.intl.string(e$.t.MQGNsN),
                                        rating: u?.recentRating,
                                        ratingCount: u?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          d && null != r
                              ? (0, a.jsx)("div", {
                                    className: nY.WH,
                                    children: (0, a.jsx)(nz, {
                                        url: r,
                                        trackAction: l,
                                        title: e$.intl.string(x),
                                        rating: g,
                                        ratingCount: p,
                                        tooltipVariant: _ ? "localized" : "all",
                                    }),
                                })
                              : null,
                          v && null != s
                              ? (0, a.jsx)("div", {
                                    className: nY.WH,
                                    children: (0, a.jsx)(nK, { game: n, url: s, trackAction: l }),
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
                o(H.Ws.DiscordCollectiblesShopItem),
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
            let { hasFetched: t, skuIds: n } = (0, f.cf)([er.A], () => ({
                hasFetched: null != e && er.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? er.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, i.useEffect)(() => {
                    null == e || t || er.A.isShopCollectionFetching(e) || el(e);
                }, [e, t]),
                n ?? []
            );
        })(t.shopCollectionIds?.[0]),
        s = i.useCallback(() => {
            l(H.Ws.DiscordCollectiblesShop),
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
              children: (0, a.jsx)(ts, {
                  title: e$.intl.string(e$.t["5DYPT8"]),
                  onClickViewAll: s,
                  children: (0, a.jsx)(e8.A, { gap: "md", children: r.map((e) => (0, a.jsx)(n8, { skuId: e }, e)) }),
              }),
          });
}
var n3 = n(735438),
    n4 = n.n(n3),
    n9 = n(192308),
    n7 = n(587895),
    le = n(311043),
    lt = n(192389);
let ln = (e) => {
    let { game: t, onClose: n, trackClick: l } = e,
        i = (0, f.bG)([n7.A], () => n7.A.getApplication(t.applicationId));
    return (0, a.jsx)(_.m, {
        asContainer: !0,
        text: t.name,
        children: (0, a.jsx)(eb.D, {
            className: lt.fS,
            onClick: async () => {
                l(H.Ws.ClickSimilarGame, t.applicationId),
                    (0, n9.openModalLazy)(() =>
                        Promise.resolve((e) =>
                            (0, a.jsx)(lU, { applicationId: t.applicationId, source: H.Ob.SimilarGames, ...e }),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, a.jsx)(eE.A, { game: t, application: i, className: lt.n1, size: eE.w.SMALL }),
        }),
    });
};
function ll(e) {
    let { applicationId: t, onClose: n, trackAction: l, similarGames: i, similarGamesError: r } = e,
        o = (0, f.bG)([er.A, le.A], () => {
            let e = void 0 === er.A.getSimilarGames(t) && null == er.A.getSimilarGamesError(t),
                n = i.some((e) => le.A.isFetching(e));
            return e || n;
        }),
        c = (0, f.yK)([le.A], () =>
            i
                .map((e) => le.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, ex.oS)(e.applicationId))
                .slice(0, 5),
        );
    return ((0, G.I)(t), (0, G.x)(i), o && null == r)
        ? (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)("div", { className: s()(lt.vM, tL.bV) }),
                  (0, a.jsx)("div", {
                      className: s()(tL.nM, tL.iH),
                      children: n4()
                          .range(0, 5)
                          .map((e) => (0, a.jsx)("div", { className: lt.nn }, e)),
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
                        children: e$.intl.string(e$.t["6rLyQB"]),
                    }),
                    (0, a.jsx)("div", {
                        className: lt.D$,
                        children: c.map((e) => (0, a.jsx)(ln, { game: e, onClose: n, trackClick: l }, e.applicationId)),
                    }),
                ],
            })
          : null;
}
var la = n(317560),
    li = n(183802),
    lr = n(627771);
function ls(e) {
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
        : (0, a.jsx)(e8.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, a.jsx)(
                      "div",
                      {
                          className: lr.B,
                          children: (0, a.jsx)(li.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: li.s.SMALL,
                              analyticsLocations: n,
                              onClick: r,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function lo(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: l } = eM(),
        { analyticsLocations: r } = (0, R.Ay)([y.A.GAME_PROFILE]),
        s = i.useCallback(() => {
            n?.guildId != null && (t(H.Ws.GameShop), l(), (0, ek.default)({ guildId: n.guildId }));
        }, [n, t, l]),
        o = i.useCallback(
            (e, a) => {
                let i = n?.guildId;
                null != i &&
                    (t(H.Ws.GameShopItem),
                    (0, la.R)({
                        skuId: e,
                        applicationId: a,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            location.pathname.indexOf(en.BVt.CHANNELS_GAME_SHOP(i)) >= 0 && l();
                        },
                    }));
            },
            [t, l, r, n],
        );
    if (null == n) return null;
    let { skuIds: c } = n;
    return (0, a.jsx)(ts, {
        title: e$.intl.string(e$.t.WDdlUb),
        onClickViewAll: s,
        children: (0, a.jsx)(ls, { skuIds: c, analyticsLocations: r, onCardClick: o }),
    });
}
let lc = new Set(["1402418703554842694", "356877880938070016"]),
    ld = [ef.V.EPICGAMES, ef.V.STEAM, ef.V.ROBLOX, ef.V.BATTLENET, ef.V.RIOT, ef.V.MINECRAFT];
var lu = n(349361),
    lm = n(924895),
    lh = n(422688),
    lf = n(505200),
    l_ = n(695250);
let lg = function (e) {
    switch (e.category) {
        case ef.V.STEAM:
            return {
                icon: nP.N,
                text: e$.intl.string(e$.t.FsANs4),
                ariaLabel: e$.intl.string(e$.t["P+ePTG"]),
                action: H.Ws.SteamStoreLink,
                url: e.url,
            };
        case ef.V.EPICGAMES:
            return {
                icon: lu.r,
                text: e$.intl.string(e$.t.ZbBMHa),
                ariaLabel: e$.intl.string(e$.t.BwX0UW),
                action: H.Ws.EpicStoreLink,
                url: e.url,
            };
        case ef.V.ROBLOX:
            return {
                icon: lm.H,
                text: e$.intl.string(e$.t["pJ+P+h"]),
                ariaLabel: e$.intl.string(e$.t.tYxpdf),
                action: H.Ws.RobloxStoreLink,
                url: e.url,
            };
        case ef.V.BATTLENET:
            return {
                icon: lh.a,
                text: e$.intl.string(e$.t["A7grp+"]),
                ariaLabel: e$.intl.string(e$.t.x9at20),
                action: H.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case ef.V.RIOT:
            return {
                icon: lf.A,
                text: e$.intl.string(e$.t.h6MapL),
                ariaLabel: e$.intl.string(e$.t["528nvc"]),
                action: H.Ws.RiotStoreLink,
                url: e.url,
            };
        case ef.V.MINECRAFT:
            return {
                icon: l_.m,
                text: e$.intl.string(e$.t["HZbmO+"]),
                ariaLabel: e$.intl.string(e$.t.WWTqYn),
                action: H.Ws.MinecraftStoreLink,
                url: e.url,
            };
    }
    return null;
};
var lp = n(629004);
function lx(e) {
    let { isTwoColumn: t } = eM();
    return (0, a.jsx)("div", {
        className: lp.U,
        children: (0, a.jsx)(v.$, {
            ...e,
            variant: t ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link",
        }),
    });
}
function lE(e) {
    let t,
        n,
        l,
        a,
        r = eo.useConfig({ location: "GameProfileStoreLinks" }).storeLinksEnabled,
        s =
            ((t = (0, nB.I)(e?.applicationId)),
            (n = e?.applicationId),
            (l = e?.websites),
            (a = e?.steamReleaseStatus),
            i.useMemo(() => {
                if (null == l || null == n) return [];
                let e = l.filter(
                    (e) =>
                        (e.category !== ef.V.EPICGAMES || !!lc.has(n)) &&
                        (e.category !== ef.V.STEAM || a !== m.Y.RETIRED_ABANDONED) &&
                        ld.includes(e.category),
                );
                return (
                    null == t ||
                        a === m.Y.RETIRED_ABANDONED ||
                        e.some((e) => e.category === ef.V.STEAM) ||
                        e.push({ category: ef.V.STEAM, url: t }),
                    e.sort((e, t) => (e.category === ef.V.STEAM ? -1 : +(t.category === ef.V.STEAM)))
                );
            }, [t, l, n, a]));
    return { storeWebsites: s, showsStoreLinks: r && s.length > 0 && null != e };
}
let lv = function (e) {
    let { game: t, trackAction: l } = e,
        r = (0, tR.A)(),
        { showsStoreLinks: s, storeWebsites: o } = lE(t),
        c = i.useMemo(() => o.map(lg).filter((e) => null != e), [o]);
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
        text: e$.intl.string(e$.t["/hMurx"]),
        "aria-label": e$.intl.string(e$.t.nK60cc),
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
var lA = n(566679),
    lI = n(123292),
    lb = n(981355),
    lj = n(242021);
function lC(e) {
    let { game: t, trackAction: n } = e,
        [l, r] = i.useState(t?.summaryLocalized != null),
        [o, c] = i.useState(!0),
        [d, u] = i.useState(!1),
        m = i.useRef(null),
        { width: h, height: f } = (0, lb.A)();
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
                              (0, a.jsx)(lA.Z, { color: eC.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, a.jsx)(x.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: l
                                      ? e$.intl.format(e$.t.aZ2iIp, { onShowOriginal: () => r(!1) })
                                      : e$.intl.format(e$.t["/2ylF4"], { onShowTranslated: () => r(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(x.E, {
                      ref: m,
                      lineClamp: o ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: l ? t.summaryLocalized : t.description,
                  }),
                  d &&
                      (0, a.jsx)(eb.D, {
                          className: tL.vk,
                          onClick: () => {
                              n(o ? H.Ws.ShowMore : H.Ws.ShowLess), c(!o);
                          },
                          children: (0, a.jsx)(x.E, {
                              variant: "text-sm/semibold",
                              children: o ? e$.intl.string(e$.t.lBeKY2) : e$.intl.string(e$.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(tK, { className: lj.B, game: t }),
              ],
          });
}
function lN(e) {
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
                    ? (t(H.Ws.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(H.Ws.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: a,
            };
        })(l, n),
        { isTwoColumn: d } = eM(),
        u = i.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = r ? e$.intl.string(e$.t["6MwJo/"]) : e$.intl.string(e$.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: s()(tL.fi, tL.mX),
        children: [
            (0, a.jsx)(x.E, { ref: l, lineClamp: r ? void 0 : u, variant: "text-md/medium", children: t.description }),
            o && (0, a.jsx)(lI.Q, { onClick: c, text: m }),
        ],
    });
}
var lS = n(952311);
let ly = () =>
    (0, a.jsxs)("div", {
        className: tL.uv,
        children: [
            (0, a.jsx)(p.Y, { size: "xxs" }),
            (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: e$.intl.string(e$.t.kAlUsy) }),
        ],
    });
function lR(e) {
    let { game: t, application: n, entries: l, trackAction: r } = e,
        o = i.useMemo(() => t?.genres.map(F.du).join(", "), [t]),
        [d] = i.useState(() => Math.random()),
        u = i.useMemo(() => {
            if (null == t) return "";
            if (null != t.bannerHash)
                return V.Ay.getGameAssetURL({ id: t.id, hash: t.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            let e = t.getArtworkURLs(),
                n = t.screenshotUrls ?? [];
            if (e.length > 0) {
                let t = Math.floor(d * e.length);
                return e[t];
            }
            if (n.length > 0) {
                let e = Math.floor(d * n.length);
                return n[e];
            }
            return "";
        }, [t, d]),
        m = (0, B.uJ)(t.iconHash)
            ? n?.getIconURL(160, V.QB ? "webp" : "png")
            : V.Ay.getGameAssetURL({ id: t.id, hash: t.iconHash, size: 160, format: V.QB ? "webp" : "png" }),
        f = W.default.extractTimestamp(n.id),
        _ = 7 >= c()().diff(c()(f), "days"),
        g = l.some((e) => (0, O.CZ)(e) === h.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: tL.is, style: { backgroundImage: `url("${u}")` } }),
            (0, a.jsxs)("div", {
                className: s()(tL.Qs, tL.fi, tL.iH, tL.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: tL.xx,
                        children: [
                            (0, a.jsx)("div", {
                                className: tL.bb,
                                children: (0, a.jsx)(eE.A, {
                                    game: t,
                                    application: n,
                                    className: tL.wm,
                                    size: eE.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)(eQ, { applicationId: n.id, className: tL.Gg, trackAction: r }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: s()(tL.nM, tL.Lc, tL.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(E.D, { variant: "heading-xl/bold", children: p }),
                                (0, a.jsxs)("div", {
                                    className: s()(tL.nM, tL.Lc),
                                    children: [
                                        null != m &&
                                            (0, a.jsx)("img", {
                                                className: tL.Gt,
                                                src: m,
                                                height: 16,
                                                alt: e$.intl.formatToPlainString(e$.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, a.jsx)(x.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                        _ &&
                                            (0, a.jsx)(x.E, {
                                                variant: "eyebrow",
                                                className: tL.Ad,
                                                children: e$.intl.string(e$.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(x.E, { variant: "text-sm/medium", children: " \xb7 " }),
                                                    (0, a.jsx)(ly, {}),
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
function lL(e) {
    let {
        game: t,
        application: n,
        entries: l,
        officialGuildInvite: i,
        similarGames: r,
        similarGamesError: s,
        onClose: o,
        viewId: c,
        trackAction: d,
        source: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: tL.V0,
        children: [
            (0, a.jsx)(nL, { entries: l, viewId: c, officialGuildId: i?.guild?.id, onClose: o, source: u }),
            (0, a.jsx)(nh, { game: t, trackAction: d }),
            (0, a.jsx)(ll, { applicationId: n.id, onClose: o, similarGames: r, similarGamesError: s, trackAction: d }),
        ],
    });
}
function lT(e) {
    let { game: t, trackAction: n, closeModal: l } = e;
    return (0, a.jsxs)("div", {
        className: lS.oC,
        children: [
            (0, a.jsxs)("div", {
                className: lS.lM,
                children: [(0, a.jsx)(ng, { game: t, trackAction: n }), (0, a.jsx)(lN, { game: t, trackAction: n })],
            }),
            (0, a.jsx)(tm, { gameId: t.id, trackAction: n }),
            (0, a.jsx)(lo, { trackAction: n }),
            (0, a.jsx)(n6, { game: t, closeModal: l, trackAction: n }),
        ],
    });
}
function lk(e) {
    let { game: t, trackAction: n, application: l, analyticsLocations: i } = e,
        r = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED,
        { closeModal: s } = eM();
    return (0, a.jsxs)("div", {
        className: tL.V0,
        children: [
            (0, a.jsx)(ng, { game: t, trackAction: n }),
            (0, a.jsxs)("div", {
                className: lS.gr,
                children: [
                    (0, a.jsx)(t3, { game: t, application: l, isTwoColumn: !1 }),
                    (0, a.jsxs)("div", {
                        className: lS.E1,
                        children: [
                            (0, a.jsx)(lv, { game: t, trackAction: n }),
                            (0, a.jsx)(lN, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(nt, { analyticsLocations: i, trackAction: n }),
            (0, a.jsx)(nO, { closeModal: s, trackAction: n }),
            (0, a.jsx)(tm, { gameId: t.id, trackAction: n }),
            (0, a.jsx)(lo, { trackAction: n }),
            (0, a.jsx)(n6, { game: t, closeModal: s, trackAction: n }),
            r && (0, a.jsx)(nJ, { game: t, trackAction: n }),
            (0, a.jsx)(t$, { application: l, game: t, trackAction: n }),
        ],
    });
}
function lw(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l, trackAction: r } = e;
    (0, L.A)({
        name: d.ImpressionNames.CLOUD_PLAY_CTA,
        type: d.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let s = i.useCallback(() => {
        r(H.Ws.CloudPlay), t(), n();
    }, [t, n, r]);
    return (0, a.jsx)(_.m, {
        text: e$.intl.string(e$.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(v.$, {
            icon: A.h,
            text: e$.intl.string(e$.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function lM(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        l = (0, k.h)(t),
        a = (0, S.A)({ application: l, analyticsLocations: n });
    return { onCloudPlayClick: a, isCloudPlayButtonShown: !(0, P.L)(t) && null != a };
}
function lO(e) {
    let {
            game: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: l,
            trackAction: r,
            onClose: o,
            application: c,
            analyticsLocations: d,
        } = e,
        u = i.useCallback(() => {
            o(), (0, D.closeUserProfileModal)();
        }, [o]),
        { isCloudPlayButtonShown: m, onCloudPlayClick: h } = lM({ applicationId: c.id, analyticsLocations: d });
    return (0, a.jsxs)("div", {
        className: s()(tL.pz, tL.fi, tL.iH),
        children: [
            (0, a.jsxs)("div", {
                className: tL.NC,
                children: [
                    (0, a.jsx)(tq, { invite: l, closeModal: u, trackAction: r }),
                    m &&
                        null != h &&
                        (0, a.jsx)(lw, { onClose: u, onCloudPlayClick: h, analyticsLocations: d, trackAction: r }),
                ],
            }),
            (0, a.jsx)(E.D, { variant: "heading-md/bold", children: e$.intl.string(e$.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: tL.V0,
                children: [
                    (0, a.jsx)(lC, { game: t, trackAction: r }),
                    (0, a.jsx)(nM, { game: t, onInviteResolved: n, closeModal: u, trackAction: r }),
                    (0, a.jsx)(tP, { game: t, trackAction: r }),
                    (0, a.jsx)(nG, { game: t }),
                    (0, a.jsx)(tg, { application: c, trackAction: r }),
                    (0, a.jsx)(x.E, {
                        variant: "text-xxs/normal",
                        children: e$.intl.format(e$.t.pch2Jw, { igdbLink: tZ.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function lG(e) {
    let { game: t, trackAction: n, application: l, analyticsLocations: i } = e,
        { closeModal: r } = eM(),
        { isCloudPlayButtonShown: o, onCloudPlayClick: c } = lM({ applicationId: l.id, analyticsLocations: i }),
        { showsStoreLinks: d } = lE(t),
        u = t.steamReleaseStatus !== m.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: s()(lS.Pn, tL.fi, tL.iH, d ? lS.sV : lS.gF),
        children: [
            o && null != c
                ? (0, a.jsx)("div", {
                      className: tL.NC,
                      children: (0, a.jsx)(lw, {
                          onClose: r,
                          onCloudPlayClick: c,
                          analyticsLocations: i,
                          trackAction: n,
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: tL.V0,
                children: [
                    (0, a.jsx)(lv, { game: t, trackAction: n }),
                    (0, a.jsx)(nt, { analyticsLocations: i, trackAction: n }),
                    (0, a.jsx)(nO, { closeModal: r, trackAction: n }),
                    u && (0, a.jsx)(nJ, { game: t, trackAction: n }),
                    (0, a.jsx)(t$, { application: l, game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function lP(e) {
    let {
            applicationId: t,
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
        _ = i.useMemo(() => (0, H.u9)(), []),
        g = (0, f.yK)([er.A], () => (er.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, x] = i.useState(null),
        E = (0, ec.s)(t),
        [v, A] = i.useState(null),
        C = (0, k.h)(t),
        { data: S, refetch: L } = (0, G.I)(t),
        T = S?.name ?? C?.name,
        P = (e, l) => {
            (0, H.Tn)({
                gameName: T ?? "",
                applicationId: t,
                action: e,
                similarGameId: l,
                viewId: _,
                officialGuildId: v?.guild?.id,
                source: n,
            });
        };
    return ((0, N.Ay)(() => {
        (0, H.rw)({
            source: n,
            viewId: _,
            applicationId: t,
            gameName: T ?? "",
            authorId: l,
            profileType: H.HV.FullProfile,
        }),
            (0, M.He)();
    }),
    (0, k.A)(g),
    i.useEffect(() => {
        m.startsWith("en") || S?.summaryLocalized != null || L();
    }, [t, S?.summaryLocalized, m, L]),
    i.useEffect(() => {
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
    (0, N.Ay)(() => () => {
        let e = Date.now(),
            n = E.map((t) => {
                let n = (0, O.JM)(t) ? (0, O.W6)(t, e) : (0, O.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, H.V_)({
            viewId: _,
            applicationId: t,
            gameName: T ?? "",
            playedFriendIds: E.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: g.filter(ex.oS).slice(0, 5),
            officialGuildId: v?.guild?.id,
        });
    }),
    null == S || null == C)
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
                              (0, a.jsx)(lR, { game: S, application: C, entries: E, trackAction: P }),
                              (0, a.jsx)(j.F, {
                                  children: (0, a.jsxs)("div", {
                                      className: s()(tL.Qs, tL.rb),
                                      children: [
                                          (0, a.jsx)(lL, {
                                              game: S,
                                              application: C,
                                              entries: E,
                                              officialGuildInvite: v,
                                              similarGames: g,
                                              similarGamesError: p,
                                              onClose: o,
                                              viewId: _,
                                              source: n,
                                              trackAction: P,
                                          }),
                                          (0, a.jsx)(lO, {
                                              game: S,
                                              onSetOfficialGuildInvite: A,
                                              officialGuildInvite: v,
                                              onClose: o,
                                              appContext: c,
                                              application: C,
                                              source: n,
                                              trackExternalAction: d,
                                              trackAction: P,
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
function lD(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: l,
            transitionState: r,
            onClose: o,
            appContext: c,
            trackExternalAction: d,
            initialScrollOffset: m,
        } = e,
        [h, _] = i.useState(!0),
        [p, x] = i.useState(null),
        { clientThemesClassName: E } = (0, w.Ay)(),
        v = (0, f.bG)([U.default], () => U.default.locale),
        A = i.useMemo(() => (0, H.u9)(), []),
        { analyticsLocations: I } = (0, R.Ay)(y.A.GAME_PROFILE),
        b = (0, k.h)(t),
        S = (0, ec.s)(t),
        { data: L } = (0, G.I)(t),
        P = L?.name ?? b?.name ?? "",
        {
            hasAlreadyLinked: V,
            canStartAuthorization: F,
            fetched: W,
            startAuthorization: B,
            connectionApp: Y,
        } = (0, T.RD)(b),
        { invite: z, isMember: K } = ep(L, x),
        { socialLayerStorefrontRecommendationsData: Z } = (function (e) {
            let t = eh.default.getCurrentUser()?.id,
                n = i.useMemo(() => (null != t ? [t] : []), [t]),
                l = (0, f.bG)([ed.A], () => (null != e ? ed.A.getApplicationIdFromDetectableId(e.id) : void 0)),
                a = (0, k.h)(l),
                r = i.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: s, status: o } = (0, em.XQ)({
                    applicationIds: r,
                    userIds: n,
                    numItems: 6,
                    source: eu.B5.USER_PROFILE,
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
        })(b ?? null),
        X = (e, l) => {
            (0, H.Tn)({
                gameName: P,
                applicationId: t,
                action: e,
                similarGameId: l,
                viewId: A,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, N.Ay)(() => {
        (0, H.rw)({ source: n, viewId: A, applicationId: t, gameName: P, authorId: l, profileType: H.HV.FullProfile }),
            (0, M.He)();
    }),
        (0, N.Ay)(() => () => {
            let e = Date.now(),
                n = S.map((t) => {
                    let n = (0, O.JM)(t) ? (0, O.W6)(t, e) : (0, O.aJ)(t, v);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, H.V_)({
                viewId: A,
                applicationId: t,
                gameName: P,
                playedFriendIds: S.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let J = i.useCallback((e) => {
            _(e.contentRect.width >= 800);
        }, []),
        $ = (0, u.w)(J, [], { fireOnMount: !0 }),
        q = i.useCallback(() => {
            o(), (0, D.closeUserProfileModal)();
        }, [o]),
        Q = i.useRef(null),
        ee = i.useCallback(() => Q.current?.getScrollerNode()?.scrollTop ?? 0, []),
        et = i.useMemo(
            () => ({
                application: b,
                isTwoColumn: h,
                canStartAuthorization: F,
                hasAlreadyLinked: V,
                fetchedAuthorization: W,
                startAuthorization: B,
                connectionApp: Y,
                officialInvite: z,
                isMember: K,
                socialLayerStorefrontRecommendationsData: Z,
                closeModal: q,
                getScrollOffset: ee,
            }),
            [b, h, F, V, W, B, Y, z, K, Z, q, ee],
        ),
        en = i.useCallback(() => {
            o(), (0, D.closeUserProfileModal)();
        }, [o]),
        [el, ea] = i.useState(!1),
        [ei, er] = i.useState(150),
        es = i.useRef(null);
    i.useEffect(() => {
        null != m && m > 0 && Q.current?.getScrollerNode()?.scrollTo({ top: m, behavior: "instant" });
    }, []);
    let eo = i.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != es.current) {
                let e = Math.max(0, 1 - t / 150);
                es.current.style.opacity = String(e);
            }
            ea(t >= ei);
        },
        [ei],
    );
    return null == L || null == b
        ? null
        : (0, a.jsx)(R.f5, {
              value: I,
              children: (0, a.jsx)(g.N, {
                  transitionState: r,
                  onClose: o,
                  children: (0, a.jsx)(ew.Provider, {
                      value: et,
                      children: (0, a.jsxs)("div", {
                          className: s()(E, lS.kL),
                          ref: $,
                          children: [
                              (0, a.jsx)(t5, { game: L, ref: es }),
                              (0, a.jsx)(t1, { game: L, application: b, show: el, onClose: en, trackAction: X }),
                              (0, a.jsx)(t2, { show: el }),
                              (0, a.jsxs)(C.Ch, {
                                  ref: Q,
                                  onScroll: eo,
                                  children: [
                                      (0, a.jsx)(t4, {
                                          game: L,
                                          application: b,
                                          onSetCompactBarScrollThreshold: er,
                                          showCompactBar: el,
                                      }),
                                      (0, a.jsx)(j.F, {
                                          children: h
                                              ? (0, a.jsxs)("div", {
                                                    className: lS.jC,
                                                    children: [
                                                        (0, a.jsx)(lT, { game: L, closeModal: en, trackAction: X }),
                                                        (0, a.jsx)(lG, {
                                                            game: L,
                                                            application: b,
                                                            appContext: c,
                                                            source: n,
                                                            trackExternalAction: d,
                                                            trackAction: X,
                                                            analyticsLocations: I,
                                                        }),
                                                    ],
                                                })
                                              : (0, a.jsx)("div", {
                                                    className: lS.b9,
                                                    children: (0, a.jsx)(lk, {
                                                        game: L,
                                                        application: b,
                                                        trackAction: X,
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
let lU = function (e) {
    let t = eo.useConfig({ location: "GameProfileModal" }).enabled;
    return e.forceV2 || t ? (0, a.jsx)(lD, { ...e }) : (0, a.jsx)(lP, { ...e });
};
