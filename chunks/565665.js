n.d(t, { default: () => l7 });
var l,
    i = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    c = n(562708),
    o = n(535185),
    u = n(792216),
    d = n(17928),
    m = n(521489),
    x = n(866665),
    h = n(821609),
    g = n(414499),
    f = n(192308),
    j = n(689175),
    A = n(707554),
    p = n(964486),
    v = n(881698),
    E = n(146779),
    N = n(793574),
    I = n(688810),
    k = n(139286),
    S = n(206828),
    b = n(587895),
    T = n(590703),
    C = n(180170),
    y = n(583846),
    L = n(569926),
    R = n(928550),
    P = n(570962),
    G = n(831024),
    _ = n(402860),
    O = n(773669),
    M = n(409626),
    w = n(422069),
    D = n(945810);
let V = { enabled: !1 },
    U = (0, D.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: V,
        variations: { 0: V, 1: { enabled: !0 } },
    });
var F = n(205184),
    Y = n(957807),
    W = n(49491),
    B = n(429913),
    H = n(832163),
    z = n(594832),
    X = n(862772),
    K = n(287809);
let J = a.createContext(void 0);
function $() {
    let e = a.useContext(J);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var Q = n(435558),
    q = n.n(Q),
    Z = n(621466),
    ee = n(966697),
    et = n(939249),
    en = n(346055),
    el = n(834730),
    ei = n(297264),
    ea = n(460905);
let es = (0, D.mj)({
    name: "2026-09-new-horizontal-scroll-shared",
    kind: "user",
    defaultConfig: { useNewHScroll: !1 },
    variations: { 0: { useNewHScroll: !1 }, 1: { useNewHScroll: !0 } },
});
function er(e) {
    return es.useConfig({ location: e }).useNewHScroll;
}
var ec = n(776231),
    eo = n(449543),
    eu = n(46054),
    ed = n(197935),
    em = n(58703);
n(321073);
var ex = n(155718),
    eh = n(387408),
    eg = n(731068),
    ef = n(59318),
    ej = n(320095),
    eA = n(708676),
    ep = n(383233),
    ev = n(998218),
    eE = n(375708);
let eN = /^#{1,3}\s+(.+)$/,
    eI = /^https?:\/\/\S+$/;
var ek = n(60465),
    eS = n(158390),
    eb = n(636537),
    eT = n(228366),
    eC = n(103348),
    ey = n(927813),
    eL = n(371794),
    eR = n(652215);
let eP = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function eG(e) {
    eT.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eL.aP)({
                    url: eR.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: O.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(eC.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (eT.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            eT.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        eT.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function e_(e) {
    let t = ((await eb.Bo.get({ url: eR.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eP.has(t),
    );
    eT.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eO = (0, d.UT)(w.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => w.A.getSimilarGames(e) ?? null,
    load: (e) => e_(e),
    retryConfig: { backoff: () => new eS.A(5 * ey.A.Millis.SECOND, 5 * ey.A.Millis.MINUTE) },
    failureStaleAfter: ey.A.Seconds.MINUTE,
});
async function eM(e, t) {
    eT.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eb.Bo.get({ url: eR.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eT.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, eh.A)((0, ej.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, ep._c)(e))
                            return e.components
                                .filter((e) => e.type === ex.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || eI.test(t.trim())
                            ? ((function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return null;
                                  let n = [];
                                  return (
                                      null != t.rawTitle && n.push(`# ${t.rawTitle}`),
                                      null != t.rawDescription && n.push(t.rawDescription),
                                      n.length > 0 ? n.join("\n") : null
                                  );
                              })(e) ?? t)
                            : t;
                    })(l),
                    s = (function (e) {
                        if ((0, ep._c)(e)) {
                            let t = e.components.find((e) => e.type === ex.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, eg.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, ef.tT)(e.content_type));
                        if (null != t) return (0, eg.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, ef.XB)(e.content_type));
                        if (null != n) return (0, eg.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, eg.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, eg.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, eg.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(l),
                    { title: r, body: c } =
                        ((t = a.indexOf("\n")),
                        (n = (-1 === t ? a : a.slice(0, t)).match(eN)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, ep._c)(l)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let n = t.author?.name,
                                      l = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = t.color ?? void 0;
                                  if (null != n || null != i || null != s)
                                      return {
                                          authorName: n,
                                          authorIconUrl: l,
                                          providerName: i,
                                          providerIconUrl: a,
                                          url: s,
                                          color: r,
                                      };
                              })(l);
                return {
                    id: l.id,
                    media: s,
                    title: r,
                    body: c,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: o,
                    embedSource: u,
                    poll: l.poll,
                };
            }),
            channelId: l.channel_id ?? void 0,
            guildId: l.guild_id ?? void 0,
        });
    } catch (t) {
        eT.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var ew = n(284009),
    eD = n.n(ew),
    eV = n(376728),
    eU = n(976860),
    eF = n(71393),
    eY = n(449054);
async function eW(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eD()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eF.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eR.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eY.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eR.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eV.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eU.pX)(eR.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eB = n(320448),
    eH = n(493285);
let ez = { sm: eH.nz, md: eH.a };
function eX(e) {
    let { className: t, width: n } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(eH.qf, t), style: { width: n } });
}
function eK(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        a = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: l, style: a, children: n });
}
function eJ(e) {
    let { className: t, size: n = "md" } = e;
    return (0, i.jsx)(eX, { className: r()(eH.x6, ez[n], t) });
}
var e$ = n(406510);
function eQ(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, i.jsxs)("div", {
        className: e$.kL,
        "aria-busy": !0,
        children: [
            (0, i.jsxs)("div", {
                className: e$.wR,
                children: [(0, i.jsx)(eX, { className: e$.Iz, width: n }), l && (0, i.jsx)(eJ, { size: "sm" })],
            }),
            t,
        ],
    });
}
function eq(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: e$.kL,
        children: [
            (0, i.jsxs)("div", {
                className: e$.wR,
                children: [
                    (0, i.jsx)(ei.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eB._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eE.intl.string(eE.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eZ = n(949959);
function e0(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(eZ.n, { [eZ.C]: 16 === n }), children: t });
}
var e1 = n(235240),
    e8 = n(165648);
function e5(e, t) {
    return eu.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e4(e) {
    return e.id;
}
function e2() {
    return (0, i.jsxs)(eK, {
        className: e1.s7,
        children: [
            (0, i.jsx)(eX, { className: e1.o$ }),
            (0, i.jsxs)("div", {
                className: e1.UF,
                children: [(0, i.jsx)(eX, { className: e1.iX }), (0, i.jsx)(eX, { className: e1.jt })],
            }),
        ],
    });
}
function e3(e, t) {
    var n;
    let l,
        i = (0, ec.kr)(364 * (0, ec.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = ev.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function e6(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [s, r] = a.useState(!1),
        c = a.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, i.jsx)(ee.y, {
              readyState: s ? eR.Rv1.READY : eR.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, i.jsx)("img", {
                  src: n,
                  className: e1.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function e9(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: s } = e,
        c = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, Z.vq)(e.target, HTMLAnchorElement) ||
                        ((0, Z.vq)(e.target, HTMLSpanElement) && (0, Z.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        u = t.media?.proxyUrl ?? t.media?.url,
        d = null != u ? e3(u, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, i.jsx)(et.D, {
              ...s,
              className: e1.Nr,
              onClick: c,
              children: (0, i.jsxs)(en.M, {
                  className: e1.zI,
                  children: [
                      null != m.url &&
                          (0, i.jsx)(el.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: e1.Ow,
                              children: m.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: e1._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: e1.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: e1.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(el.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, i.jsx)("div", {
                                      className: e1.ax,
                                      children: (0, i.jsx)(e6, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, i.jsx)(ei.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: e1.DD,
                                      children: e5(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(e1.h_, e8.PT),
                                      children: [e5(t.body, n), (0, i.jsx)("div", { className: e1.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: e1.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: e1.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(el.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, em.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: e1.a5,
                                              children: [
                                                  (0, i.jsx)(ea.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(el.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eE.intl.currentLocale).format(
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
let e7 = a.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, i.jsxs)(en.M, {
        className: e1.zI,
        children: [
            null != t.title &&
                (0, i.jsx)(ei.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e1.DD,
                    children: e5(t.title, n),
                }),
            t.body.length > 0 &&
                (0, i.jsxs)("div", {
                    className: r()(e1.h_, e8.PT),
                    children: [e5(t.body, n), (0, i.jsx)("div", { className: e1.fm })],
                }),
            (0, i.jsxs)("div", {
                className: e1.ov,
                children: [
                    (0, i.jsx)(el.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, em.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, i.jsxs)("div", {
                            className: e1.a5,
                            children: [
                                (0, i.jsx)(ea.n, { size: "xs", color: "currentColor" }),
                                (0, i.jsx)(el.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(eE.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function te(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: s } = e,
        r = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, Z.vq)(e.target, HTMLAnchorElement) ||
                        ((0, Z.vq)(e.target, HTMLSpanElement) && (0, Z.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? e3(o, c) : void 0;
    return (0, i.jsxs)(et.D, {
        ...s,
        className: e1.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != u &&
                (0, i.jsx)("div", {
                    className: e1.Vl,
                    children: (0, i.jsx)(e6, { message: t, src: u, aspectRatio: c }),
                }),
            (0, i.jsx)(e7, { message: t, channelId: n }),
        ],
    });
}
function tt(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: s } = t,
        r = a.useCallback(() => n(t.id), [n, t.id]);
    if (null == s) return null;
    let c = s.answers.slice(0, 3),
        o = s.answers.length - c.length;
    return (0, i.jsx)(et.D, {
        ...l,
        className: e1.Nr,
        onClick: r,
        children: (0, i.jsxs)(en.M, {
            className: e1.zI,
            children: [
                (0, i.jsx)(ei.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e1.MH,
                    children: s.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: e1.xd,
                    children: [
                        c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: e1.Nf,
                                    children: (0, i.jsx)(el.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e1.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, i.jsx)(el.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: e1.PF,
                                children: eE.intl.format(eE.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: e1.ov,
                    children: (0, i.jsx)(el.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eE.intl.format(eE.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, eA.J)(s.expiry) ?? eE.intl.string(eE.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function tn(e) {
    return null != e.message.poll
        ? (0, i.jsx)(tt, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(e9, { ...e })
          : (0, i.jsx)(te, { ...e });
}
let tl = a.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, I.Ay)(),
        { invite: s, hasDiscordWebsite: r, closeModal: c, getScrollOffset: o } = $(),
        {
            messages: u,
            guildId: m,
            channelId: x,
            loading: h,
            hasFetched: g,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, d.cf)([w.A], () => ({
                data: null != e ? w.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && w.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && w.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || n || w.A.isAnnouncementsFetching(e) || eM(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = er("game_profile_announcements"),
        j = a.useCallback(() => {
            let e = s?.guild?.id ?? m;
            null != e &&
                null != x &&
                (n(M.GameProfileTrackActionActions.Announcements),
                ek.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                c(),
                eW({ invite: s, guildId: e, channelId: x, analyticsLocationStack: l }));
        }, [n, c, o, s, m, x, l, t]),
        A = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? m;
                null != i &&
                    null != x &&
                    (n(M.GameProfileTrackActionActions.AnnouncementsItem),
                    ek.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                    c(),
                    eW({ invite: s, guildId: i, channelId: x, messageId: e, analyticsLocationStack: l }));
            },
            [n, c, o, s, m, x, l, t],
        ),
        p = null != x && u.length > 0;
    return (!g || h) && r
        ? (0, i.jsx)(eQ, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, i.jsx)(e0, {
                  gap: 16,
                  children: q()
                      .range(3)
                      .map((e) => (0, i.jsx)(e2, {}, e)),
              }),
          })
        : p
          ? (0, i.jsx)(eq, {
                title: eE.intl.string(eE.t.B0BV3Y),
                onClickViewAll: j,
                children: f
                    ? (0, i.jsx)(ed.A, {
                          gap: 16,
                          items: u,
                          getItemKey: e4,
                          itemClassName: e1.hu,
                          renderItem: (e, t) =>
                              (0, i.jsx)(tn, { message: e, channelId: x, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, i.jsx)(eo.A, {
                          gap: 16,
                          children: u.map((e) => (0, i.jsx)(tn, { message: e, channelId: x, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var ti = n(37537),
    ta = n(541830),
    ts = n(240248),
    tr = n(505779),
    tc = n(808380);
let to = [tc.Y.DESKTOP, tc.Y.XBOX, tc.Y.PLAYSTATION, tc.Y.NINTENDO];
var tu = n(28863),
    td = n(975807),
    tm = n(194362);
function tx(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(M.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, tm.a)(eR.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, td.A)(e);
        }, [n]),
        s = a.useCallback((e) => (0, i.jsx)(tu.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === ex.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(el.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eE.intl.format(eE.t.KAjfKl, { claimLink: s }),
          });
}
var th = n(998445),
    tg = n(274997),
    tf = n(80500),
    tj = n(319745),
    tA = n(488225),
    tp = n(967492),
    tv = n(72265),
    tE = n(454346),
    tN = n(37948),
    tI = n(750013);
let tk = { size: "xs", colorClass: tI.wP };
function tS(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tN.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case tr.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(th.GlobeEarthIcon, { ...t }),
                        action: M.GameProfileTrackActionActions.WebsiteLink,
                        title: eE.intl.string(eE.t.fOUKvg),
                    };
                case tr.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(tg.p, { ...t }),
                        action: M.GameProfileTrackActionActions.XLink,
                        title: eE.intl.string(eE.t.INic4y),
                    };
                case tr.V.YOUTUBE:
                    return {
                        action: M.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(tf.C, { ...t }),
                        title: eE.intl.string(eE.t.lNmxbE),
                    };
                case tr.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(tj.Z, { ...t }),
                        action: M.GameProfileTrackActionActions.FacebookLink,
                        title: eE.intl.string(eE.t.FjyREK),
                    };
                case tr.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(tA.L, { ...t }),
                        action: M.GameProfileTrackActionActions.InstagramLink,
                        title: eE.intl.string(eE.t["cgR+IK"]),
                    };
                case tr.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(tp.a, { ...t }),
                        action: M.GameProfileTrackActionActions.BlueskyLink,
                        title: eE.intl.string(eE.t["D/PHq5"]),
                    };
                case tr.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(tv.T, { ...t }),
                        action: M.GameProfileTrackActionActions.RedditLink,
                        title: eE.intl.string(eE.t["Hgb+fc"]),
                    };
                case tr.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(tE.a, { ...t }),
                        action: M.GameProfileTrackActionActions.TwitchLink,
                        title: eE.intl.string(eE.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tk),
        o = a.useCallback(() => {
            (n(s), l(t.url));
        }, [s, l, n, t.url]);
    return (0, i.jsx)(x.m, {
        text: c,
        children: (0, i.jsx)(et.D, { onClick: o, className: tI.yO, title: c, children: r }),
    });
}
var tb = n(31300),
    tT = n(802516),
    tC = n(22363),
    ty = n(418524),
    tL = n(672572);
function tR(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case tc.Y.DESKTOP:
            return (0, i.jsx)(tb.k, { size: "xs", ...n });
        case tc.Y.XBOX:
            return (0, i.jsx)(tT.Y, { size: "xs", ...n });
        case tc.Y.PLAYSTATION:
            return (0, i.jsx)(tC.X, { size: "xs", ...n });
        case tc.Y.NINTENDO:
            return (0, i.jsx)(ty.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tP(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        x.m,
        {
            text: (function (e) {
                switch (e) {
                    case tc.Y.DESKTOP:
                        return eE.intl.string(eE.t.KT6uCJ);
                    case tc.Y.XBOX:
                        return eE.intl.string(eE.t.DDWUJp);
                    case tc.Y.PLAYSTATION:
                        return eE.intl.string(eE.t.fzMz2s);
                    case tc.Y.NINTENDO:
                        return eE.intl.string(eE.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(tR, { platform: t }),
        },
        t,
    );
}
var tG = n(424994),
    t_ = n(422384);
function tO() {
    return (0, i.jsx)(el.E, { variant: "text-sm/normal", color: "text-subtle", children: eE.intl.string(eE.t.GruYxV) });
}
let tM = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, ti.c)("GameProfileGameDetails"),
        s = a.useMemo(() => t.genres.map(ta.du).join(", "), [t]),
        r = t.getCompanyByRole(ex.wk.PUBLISHER),
        c = t.getCompanyByRole(ex.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        u = c.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        m = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(tc.Y.DESKTOP) && (e.has(tc.Y.MACOS) || e.has(tc.Y.LINUX)) && n.push(tc.Y.DESKTOP),
                n.filter((e) => to.includes(e)).sort((e, t) => to.indexOf(e) - to.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tr.p.includes(t);
            })
            .sort((e, t) => tr.p.indexOf(e.category) - tr.p.indexOf(t.category)),
        h = !(0, ts.uJ)(s),
        g = !(0, ts.uJ)(o),
        f = !(0, ts.uJ)(u),
        j = !(0, ts.uJ)(d),
        A = m.length > 0,
        p = x.length > 0 && !x.every((e) => (0, ts.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: t_.uW,
        children: [
            (0, i.jsx)("div", {
                className: t_.Gf,
                children: (0, i.jsx)(ei.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: eE.intl.string(eE.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: t_.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: t_.J1,
                        children: [
                            (0, i.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eE.intl.string(eE.t.pDgwYB) : eE.intl.string(eE.t.mjFKqn),
                            }),
                            h
                                ? (0, i.jsx)(el.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: t_.Gu,
                                      children: s,
                                  })
                                : (0, i.jsx)(tO, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t_.J1,
                        children: [
                            (0, i.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eE.intl.string(eE.t.Hc7Enk) : eE.intl.string(eE.t["4Byy/G"]),
                            }),
                            g
                                ? (0, i.jsx)(el.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: t_.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tO, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t_.J1,
                        children: [
                            (0, i.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? eE.intl.string(eE.t.KATEJB) : eE.intl.string(eE.t.na3PT0),
                            }),
                            f
                                ? (0, i.jsx)(el.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: t_.Gu,
                                      children: u,
                                  })
                                : (0, i.jsx)(tO, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t_.J1,
                        children: [
                            (0, i.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eE.intl.string(eE.t.H3mPDT),
                            }),
                            j
                                ? (0, i.jsx)(el.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: t_.Gu,
                                      children: em.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(tO, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t_.J1,
                        children: [
                            (0, i.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? eE.intl.string(eE.t.PNqxNe) : eE.intl.string(eE.t["UxAag+"]),
                            }),
                            A
                                ? (0, i.jsx)("div", {
                                      className: t_.Gu,
                                      children: m.map((e) => (0, i.jsx)(tP, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tO, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t_.J1,
                        children: [
                            (0, i.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eE.intl.string(eE.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: t_.Gu,
                                      children: x.map((e) => (0, i.jsx)(tS, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(tO, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t_.J1,
                        children: [
                            (0, i.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eE.intl.string(eE.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: t_.Gu,
                                children: eE.intl.format(eE.t.XPFZVl, { igdbLink: tG.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: t_.OQ, children: (0, i.jsx)(tx, { game: t, trackAction: n }) }),
        ],
    });
};
var tw = n(714991),
    tD = n(486020),
    tV = n(992638);
function tU() {
    return (0, i.jsxs)(eK, {
        className: tV.uW,
        animationDelayMs: 300,
        children: [
            (0, i.jsx)(eX, { className: tV.dU, width: "30%" }),
            (0, i.jsx)(eK, {
                className: tV.nV,
                children: (0, i.jsxs)("div", {
                    className: tV.hQ,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tV.To,
                            children: [
                                (0, i.jsx)(eX, { className: tV.QV }),
                                (0, i.jsxs)("div", {
                                    className: tV.Yv,
                                    children: [
                                        (0, i.jsx)(eX, { className: tV.Ag }),
                                        (0, i.jsx)(eX, { className: tV.zl }),
                                        (0, i.jsx)(eX, { className: tV.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(eJ, {}),
                    ],
                }),
            }),
        ],
    });
}
function tF(e) {
    let { guild: t } = e,
        n = tD.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, s] = a.useState(void 0),
        r = null != n && l !== n,
        c = a.useCallback(() => {
            s(n);
        }, [n]);
    return (0, i.jsxs)("div", {
        className: tV._C,
        children: [
            r && (0, i.jsx)(eX, { className: tV.EQ }),
            (0, i.jsx)("img", {
                className: tV.$f,
                src: n,
                alt: eE.intl.formatToPlainString(eE.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tY(e) {
    let { trackAction: t } = e,
        n = (0, ti.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: s, isCommunityInviteResolving: r, isMember: c, closeModal: o } = $(),
        u = a.useCallback(() => {
            null != l &&
                (t(M.GameProfileTrackActionActions.JoinServer),
                o(),
                eT.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eR.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? s && r
            ? (0, i.jsx)(tU, {})
            : null
        : (0, i.jsxs)("div", {
              className: tV.uW,
              children: [
                  (0, i.jsx)(ei.D, {
                      className: tV.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: eE.intl.string(eE.t["U2N+ci"]),
                  }),
                  (0, i.jsx)("div", {
                      className: tV.kL,
                      children: (0, i.jsxs)("div", {
                          className: tV.hQ,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tV.To,
                                  children: [
                                      (0, i.jsx)(tF, { guild: l.guild }),
                                      (0, i.jsxs)("div", {
                                          className: tV.yj,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tV.YS,
                                                  children: [
                                                      (0, i.jsx)(tw.A, { guild: l.guild, size: 16 }),
                                                      (0, i.jsx)(ei.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, ts.uJ)(l.guild?.description) &&
                                                  (0, i.jsx)(el.E, {
                                                      className: tV.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, i.jsxs)("div", {
                                                        className: tV.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tV.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tV._o }),
                                                                        (0, i.jsx)(el.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eE.intl.format(eE.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    l.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != l.approximate_member_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tV.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tV.jk }),
                                                                        (0, i.jsx)(el.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eE.intl.format(eE.t.zRl6XR, {
                                                                                count: l.approximate_member_count,
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
                              (0, i.jsx)(h.$, {
                                  variant: "secondary",
                                  text: c ? eE.intl.string(eE.t.cEnaWx) : eE.intl.string(eE.t.XpeFYr),
                                  onClick: u,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var tW = n(369606),
    tB = n(459746),
    tH = n(691540),
    tz = n(857250),
    tX = n(97483),
    tK = n(922016),
    tJ = n(980707),
    t$ = n(477782),
    tQ = n(663341),
    tq = n(408278),
    tZ = n(34188),
    t0 = n(173936),
    t1 = n(365199),
    t8 = n(789645),
    t5 = n(442433),
    t4 = n(50268),
    t2 = n(44724),
    t3 = n(957565),
    t6 = n(695366),
    t9 = n(540185),
    t7 = n(926268),
    ne = n(53788),
    nt = n(831453),
    nn = n(785866),
    nl = n(555704),
    ni = n(47675),
    na = n(633075),
    ns = n(289173),
    nr = n(321191),
    nc = n(958805),
    no = n(735321),
    nu = n(96173),
    nd = n(280450),
    nm = n(403362);
async function nx(e) {
    let t = e((0, no.BF)());
    await nc.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function nh(e) {
    var t;
    let l,
        { game: s, className: r, trackAction: c } = e,
        o = a.useRef(null),
        u = a.useRef(null),
        m = (0, t4.A)({ id: s.id, label: eE.intl.string(eE.t.SHQGPj) }),
        g =
            ((t = s.id),
            (l = a.useCallback(() => {
                null != t &&
                    (c?.(M.GameProfileTrackActionActions.Feedback),
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("142753"),
                            n.e("250440"),
                            n.e("568035"),
                            n.e("268582"),
                            n.e("733771"),
                            n.e("946039"),
                            n.e("55266"),
                            n.e("627495"),
                        ]).then(n.bind(n, 651930));
                        return (n) => (0, i.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, c])),
            null == t
                ? null
                : (0, i.jsx)(t$.Dr, {
                      id: "game-profile-something-wrong",
                      label: eE.intl.string(eE.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: t6.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([nd.default], () => nd.default.getId()),
                s = a.useMemo(
                    () => [
                        {
                            type: t9.x.FAVORITE_GAMES,
                            addLabel: eE.intl.string(eE.t.fgmitg),
                            removeLabel: eE.intl.string(eE.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: t7.HeartIcon,
                        },
                        {
                            type: t9.x.PLAYED_GAMES,
                            addLabel: eE.intl.string(eE.t["0xIVLR"]),
                            removeLabel: eE.intl.string(eE.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: ne.G,
                        },
                        {
                            type: t9.x.CURRENT_GAMES,
                            addLabel: eE.intl.string(eE.t.G0c4En),
                            removeLabel: eE.intl.string(eE.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: nt.H,
                        },
                        {
                            type: t9.x.WANT_TO_PLAY_GAMES,
                            addLabel: eE.intl.string(eE.t.UuBS4K),
                            removeLabel: eE.intl.string(eE.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: nn._,
                        },
                    ],
                    [],
                ),
                r = (0, d.yK)([nr.A], () => (null == l ? [] : (nr.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, nu.A)(),
                o = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof na.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(nm.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                u = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await nx((i) => {
                                let a = i.filter(ns.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, no.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new ns.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new ns.Yy({ ...a, games: e });
                                }
                                var s = l;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let c = [...i];
                                return ((c[r] = s), c);
                            }),
                            null == l)
                        )
                            return;
                        let i = l;
                        (0, ni.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            gameId: t,
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                m = a.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await nx((n) =>
                                e
                                    ? n.some((e) => e instanceof na.R && e.applicationId === o)
                                        ? n
                                        : [(t = new na.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof na.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof na.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, ni.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, no.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof na.R && e.applicationId === o);
                h.push(
                    (0, i.jsx)(
                        t$.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eE.intl.formatToPlainString(eE.t.Ktb1n8, { name: n })
                                : eE.intl.formatToPlainString(eE.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: nl.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of s) {
                    let n = r.filter(ns.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        a = !l && null != n && (0, no.uA)(n);
                    h.push(
                        (0, i.jsx)(
                            t$.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? eE.intl.string(eE.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: a,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(s),
        { closeModal: A } = $(),
        p = (0, d.bG)([H.A], () => H.A.getApplicationIdFromDetectableId(s.id)),
        v = (0, d.bG)([H.A], () => H.A.hasStorefrontForApplicationId(p), [p]),
        E = a.useCallback(() => {
            null != p && (0, t2.G)({ applicationId: p });
        }, [p]),
        N = a.useCallback(() => {
            null != p && (c(M.GameProfileTrackActionActions.GameShop), (0, t2.default)({ applicationId: p }), A());
        }, [p, c, A]),
        I = a.useCallback(() => A(!1), [A]),
        k = a.useCallback(() => {
            c(M.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eR.BVt.GAME_PROFILE(s.id)}`;
            (0, t3.C)(e, () => {
                (0, tH.P0)((0, tz.o)(eE.intl.string(eE.t["+5kSoW"]), tX.Ck.SUCCESS));
            });
        }, [s.id, c]);
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            null != j &&
                (0, i.jsx)(tK.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tJ.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, t5.Z_)(), t());
                            },
                            "aria-label": eE.intl.string(eE.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(t$.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: u,
                            children: (0, i.jsx)(h.$, {
                                icon: tQ.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eE.intl.string(eE.t.sidPSo),
                            }),
                        }),
                }),
            v &&
                (0, i.jsx)(x.m, {
                    text: eE.intl.string(eE.t.apFNLU),
                    children: (0, i.jsx)(tq.K, {
                        icon: tZ.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eE.intl.string(eE.t.apFNLU),
                        onMouseDown: E,
                        onClick: N,
                    }),
                }),
            (0, i.jsx)(x.m, {
                text: eE.intl.string(eE.t.WqhZss),
                children: (0, i.jsx)(tq.K, {
                    icon: t0.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": eE.intl.string(eE.t.WqhZss),
                    onClick: k,
                }),
            }),
            (null != m || null != g) &&
                (0, i.jsx)(tK.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tJ.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, t5.Z_)(), t());
                            },
                            "aria-label": eE.intl.string(eE.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(t$.rX, { children: g }), (0, i.jsx)(t$.rX, { children: m })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(x.m, {
                            text: eE.intl.string(eE.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, i.jsx)(tq.K, {
                                    icon: t1.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eE.intl.string(eE.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tq.K, {
                icon: t8.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: I,
                "aria-label": eE.intl.string(eE.t.cpT0Cq),
            }),
        ],
    });
}
var ng = n(732369);
function nf(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: ng.y5,
        children: [
            (0, i.jsx)("div", { className: r()(ng.nI, n && ng.hD) }),
            (0, i.jsxs)("div", {
                className: r()(ng.A1, n && ng.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: ng.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: ng.hm,
                        children: [
                            (0, i.jsx)(ei.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(nv, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(nh, { game: t, className: ng.HK, trackAction: l }),
        ],
    });
}
function nj(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(ng.nI, ng.Jn, t && ng.hD) });
}
let nA = a.forwardRef(function (e, t) {
    let { game: n } = e,
        l = (function (e) {
            let [t] = a.useState(() => Math.random());
            return a.useMemo(() => {
                let n = e.getBannerURL(1400);
                if (null != n) return n;
                let l = e.screenshotUrls?.length ?? 0;
                return 0 === l ? null : e.getScreenshotURL(Math.floor(t * l), 1400);
            }, [1400, e, t]);
        })(n);
    return (0, ts.uJ)(l)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: ng.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, i.jsx)("div", { className: ng.N4 }),
              ],
          });
});
function np(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(ta.du).join(", ");
    return (0, ts.uJ)(n) ? null : (0, i.jsx)(el.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function nv(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: ng.Qc,
        children: [
            (0, i.jsx)(tW.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(el.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eE.intl.formatToPlainString(eE.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function nE(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: r()(n ? ng.n8 : ng.FS, !n && (0, tB.cO)(t) && ng.CD),
        children: (0, i.jsx)(tB.Ay, { game: t, className: ng.xe, size: tB.wu.LARGE }),
    });
}
let nN = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: s } = $(),
        c = a.useRef(null),
        o = a.useRef(null);
    a.useEffect(() => {
        let e = c.current,
            t = o.current;
        if (null == e || null == t) return;
        let l = (function (e, t) {
            let n = 0,
                l = e;
            for (; null != l && l !== t;) ((n += l.offsetTop), (l = l.offsetParent));
            return n;
        })(t, e);
        l > 0 && n?.(l);
    }, [n]);
    let u = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: r()(ng.ap, l && ng.Gh),
        children: [
            s &&
                (0, i.jsx)("div", {
                    className: r()(ng.Tf, (0, tB.cO)(t) && ng.wS),
                    children: (0, i.jsx)(tB.Ay, { game: t, className: ng.w$, size: tB.wu.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: ng.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(nv, { rank: t.l30Rank }),
                    (0, i.jsx)(ei.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(np, { game: t }),
                ],
            }),
        ],
    });
};
var nI = n(141628),
    nk = n(289363),
    nS = n(134131);
function nb() {
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: nS.uW,
        children: [
            (0, i.jsx)(eX, { className: nS.dU, width: "30%" }),
            (0, i.jsxs)(eK, {
                className: nS.nV,
                children: [
                    (0, i.jsx)("div", { className: nS.sB, children: (0, i.jsx)(nk.default, { isLoading: !0 }) }),
                    (0, i.jsxs)("div", {
                        className: nS.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: nS.Yv,
                                children: [(0, i.jsx)(eX, { width: "55%" }), (0, i.jsx)(eX, { width: "85%" })],
                            }),
                            (0, i.jsx)(eJ, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nT(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, ti.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: s,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: u,
            hasOfficialApplication: m,
            officialApplicationFetchFailed: x,
        } = $(),
        g = (0, d.bG)([K.default], () => K.default.getCurrentUser()),
        f = a.useCallback(() => {
            (t(M.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !m || x || null == g
        ? null
        : null == u || (c && !s)
          ? (0, i.jsx)(nb, {})
          : !c || r
            ? null
            : (0, i.jsxs)("div", {
                  className: nS.uW,
                  children: [
                      (0, i.jsx)(ei.D, {
                          className: nS.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eE.intl.string(eE.t["VDAhr+"]),
                      }),
                      (0, i.jsxs)("div", {
                          className: nS.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: nS.sB,
                                  children: (0, i.jsx)(nk.default, { application: u }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: nS.hQ,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: nS.FS,
                                          children: [
                                              (0, i.jsx)(ei.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: eE.intl.formatToPlainString(eE.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, i.jsx)(el.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: eE.intl.string(eE.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(h.$, {
                                          variant: "secondary",
                                          icon: nI.A,
                                          text: eE.intl.string(eE.t.jynBQ5),
                                          onClick: f,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
}
var nC = n(635377),
    ny = n.n(nC),
    nL = n(80687),
    nR = n(775602),
    nP = n(534573),
    nG = n(248643),
    n_ = n(256905),
    nO = n(85935),
    nM = n(191096),
    nw = n(90721),
    nD = n(258924);
function nV(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function nU(e, t) {
    return (0, nP.Ec)(e, { size: t, keepAspectRatio: !0, format: tD.QB ? "webp" : null });
}
let nF = new (ny())({ max: 100 }),
    nY = a.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [s, c] = a.useState(null),
            o = null != s && s.url === t ? s.isPortrait : (nF.get(t) ?? !1),
            u = a.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (nF.set(t, n),
                        c((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            d = a.useCallback((e) => u(e.currentTarget), [u]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    ref: u,
                    src: nU(t, 106),
                    className: r()(nD.r4, !o && nD.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, i.jsx)("img", { ref: u, src: nU(t, 900), className: r()(nD.c8, o && nD.D7, l), alt: n, onLoad: d }),
            ],
        });
    }),
    nW = a.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: s, isPlaying: c, onSelect: o, gameName: u, listItemProps: d } = e,
            m = a.useCallback(() => o(l), [o, l]),
            x = d?.tabIndex;
        return (0, i.jsx)(et.D, {
            ...d,
            className: r()(nD.JS, s && nD.Y4),
            onClick: m,
            children: (0, i.jsxs)("div", {
                className: nD.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: nU("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nD.xn,
                        alt: eE.intl.formatToPlainString(eE.t.COYYrn, { game: u }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, i.jsx)("div", {
                            className: nD.UZ,
                            children: (0, i.jsx)(nL.D, { playing: s && c, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nB = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: s,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: u,
            } = e,
            d = a.useRef(null);
        return (
            (0, nw.A)({ videoRef: s, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: nD.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nD.tN,
                        children: (0, i.jsx)(nG.A, {
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
                            renderLinkComponent: nO.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: nD.T9,
                            videoRef: s,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nH(e) {
    let { game: t, trackAction: n } = e,
        [l, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([nR.Ay], () => nR.Ay.useReducedMotion),
        { obscured: g } = (0, nM.I3)(),
        f = er("game_profile_media");
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let j = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eL.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eL.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        A = a.useMemo(() => j.map((e, t) => ({ item: e, index: t })), [j]),
        p = j.length > 0 ? Math.min(l, j.length - 1) : 0,
        v = j[p],
        E = v?.type === "VIDEO",
        N = a.useCallback(
            (e) => {
                let t = j[p],
                    n = j[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), s(e));
            },
            [j, p],
        ),
        [I, k] = a.useState(!1),
        S = a.useRef(null),
        b = a.useCallback(() => {
            n(E ? M.GameProfileTrackActionActions.ClickTrailer : M.GameProfileTrackActionActions.ClickImage);
            let e = m.current,
                t = S.current,
                l = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = j.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === p;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || i, initialTimeSec: n ? a : void 0, videoRef: x };
                }
                return e;
            });
            (0, n_.R)({
                items: r,
                startingIndex: p,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: s,
                onClose: () => {
                    let e = x.current,
                        t = S.current,
                        n = null != e ? !e.paused : l;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        k(n));
                },
            });
        }, [n, j, p, E]),
        T = a.useCallback(() => k(!0), []),
        C = a.useCallback(() => k(!1), []),
        y = a.useCallback(() => c(null), []),
        L = a.useCallback(
            (e) => {
                e && b();
            },
            [b],
        );
    return 0 === j.length
        ? null
        : (0, i.jsxs)("div", {
              className: nD.kL,
              children: [
                  E
                      ? (0, i.jsx)("div", {
                            className: nD.ND,
                            children: (0, i.jsx)(
                                nB,
                                {
                                    item: v,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: S,
                                    onPlay: T,
                                    onPause: C,
                                    onFullscreenChange: L,
                                },
                                `${p}-${v.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: nD.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nD.Jy,
                                            onAnimationEnd: y,
                                            children: (0, i.jsx)(nY, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: nD.QN }),
                                (0, i.jsx)(et.D, {
                                    className: nD.gv,
                                    onClick: b,
                                    children: (0, i.jsx)("div", {
                                        className: nD.cs,
                                        children: (0, i.jsx)(
                                            nY,
                                            {
                                                url: v.url,
                                                className: nD.Jf,
                                                alt: eE.intl.formatToPlainString(eE.t.COYYrn, { game: t.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, i.jsx)(ed.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: A,
                            getItemKey: nV,
                            renderItem: (e, n) => {
                                let { item: l, index: a } = e;
                                return (0, i.jsx)(
                                    nW,
                                    {
                                        item: l,
                                        index: a,
                                        isPlaying: I,
                                        isSelected: a === p,
                                        onSelect: N,
                                        gameName: t.name,
                                        listItemProps: n,
                                    },
                                    `${a}-${l.url}`,
                                );
                            },
                        })
                      : (0, i.jsx)(eo.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, i.jsx)(
                                    nW,
                                    {
                                        item: e,
                                        index: n,
                                        isPlaying: I,
                                        isSelected: n === p,
                                        onSelect: N,
                                        gameName: t.name,
                                    },
                                    `${n}-${e.url}`,
                                ),
                            ),
                        }),
              ],
          });
}
var nz = n(49381),
    nX = n(661531),
    nK = n(223273);
function nJ(e, t, n) {
    if (null == e || null == t || t < 10) return nK.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nK.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nK.vI.VERY_POSITIVE
              : nK.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nK.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nK.vI.MIXED;
    if (e >= 20) return nK.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nK.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nK.vI.VERY_NEGATIVE;
    return nK.vI.OVERWHELMINGLY_NEGATIVE;
}
function n$(e) {
    switch (e) {
        case nK.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nK.vI.OVERWHELMINGLY_POSITIVE:
        case nK.vI.VERY_POSITIVE:
        case nK.vI.POSITIVE:
        case nK.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nK.vI.MIXED:
            return "steam-review-text-mixed";
        case nK.vI.MOSTLY_NEGATIVE:
        case nK.vI.NEGATIVE:
        case nK.vI.VERY_NEGATIVE:
        case nK.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nQ =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nq = n(778591);
function nZ(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        a = Math.min(Math.max(t, 0), 100) / 100,
        s = a * l;
    return (0, i.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - a) * 360) / 2}deg)` },
        children: (0, i.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${s} ${l - s}`,
        }),
    });
}
var n0 = n(255417);
function n1(e) {
    let { url: t, trackAction: n, title: l, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tN.A)(),
        u = nJ(s, r, "recent" === c),
        d = n$(u),
        m = a.useCallback(() => {
            (n(M.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, i.jsx)(et.D, {
        onClick: m,
        className: n0.nf,
        role: "link",
        "aria-label": eE.intl.string(eE.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: n0.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: n0.tN,
                    children: [
                        (0, i.jsx)(nz.N, { size: "sm", color: nX.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(ei.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    x.m,
                    {
                        text:
                            u === nK.vI.NO_USER_REVIEWS
                                ? eE.intl.string(eE.t.CLMt8J)
                                : eE.intl
                                      .format(
                                          "recent" === c
                                              ? eE.t.TzvC0k
                                              : "localized" === c
                                                ? eE.t.EOfrwm
                                                : eE.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: n0.Z0,
                            children: [
                                (0, i.jsx)(el.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: n0.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nK.vI.NO_USER_REVIEWS:
                                                return eE.intl.string(eE.t.CLMt8J);
                                            case nK.vI.OVERWHELMINGLY_POSITIVE:
                                                return eE.intl.string(eE.t["75sx1S"]);
                                            case nK.vI.VERY_POSITIVE:
                                                return eE.intl.string(eE.t["EkOVg+"]);
                                            case nK.vI.POSITIVE:
                                                return eE.intl.string(eE.t.ZUkFtr);
                                            case nK.vI.MOSTLY_POSITIVE:
                                                return eE.intl.string(eE.t.M7Z09a);
                                            case nK.vI.MIXED:
                                                return eE.intl.string(eE.t.c8yuHR);
                                            case nK.vI.MOSTLY_NEGATIVE:
                                                return eE.intl.string(eE.t.H0MSjG);
                                            case nK.vI.NEGATIVE:
                                                return eE.intl.string(eE.t.vpLrgz);
                                            case nK.vI.VERY_NEGATIVE:
                                                return eE.intl.string(eE.t["5spYuX"]);
                                            case nK.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eE.intl.string(eE.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== nK.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(el.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eE.intl
                                            .format(eE.t.sgIoin, { rating_count: r.toLocaleString() })
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
function n8(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tN.A)(),
        x = a.useCallback(() => {
            (l(M.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, i.jsx)(et.D, {
        onClick: x,
        className: n0.nf,
        role: "link",
        "aria-label": eE.intl.string(eE.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: n0.Ur,
            children: [
                (0, i.jsx)(ei.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eE.intl.string(eE.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: n0.WA,
                    children: [
                        null != c ? (0, i.jsx)(n5, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(n4, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(el.E, {
                                  variant: "text-xs/medium",
                                  color: n$(nK.vI.NO_USER_REVIEWS),
                                  children: eE.intl.string(eE.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function n5(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nQ.MIGHTY:
                    return eE.intl.string(eE.t.aZej2g);
                case nQ.STRONG:
                    return eE.intl.string(eE.t.MLxnSg);
                case nQ.FAIR:
                    return eE.intl.string(eE.t["3f19KA"]);
                case nQ.WEAK:
                    return eE.intl.string(eE.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nQ.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nQ.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nQ.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nQ.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        x.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: n0.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function n4(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case nQ.MIGHTY:
                    t = "#fc430a";
                    break;
                case nQ.STRONG:
                    t = "#9e00b4";
                    break;
                case nQ.FAIR:
                    t = "#4aa1ce";
                    break;
                case nQ.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        x.m,
        {
            text: eE.intl.string(eE.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: n0.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nZ, { rating: t, strokeColor: l }),
                    (0, i.jsx)(el.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: n0.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let n2 = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, ti.c)("GameProfileReviews"),
        a = (0, nq.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != a,
        c = t.reviews?.steam,
        o = nJ(c?.recentRating, c?.recentRatingCount, !0),
        d = r && o !== nK.vI.NO_USER_REVIEWS,
        m =
            null != c &&
            null != c.localizedRating &&
            null != c.localizedRatingCount &&
            null != c.ratingCount &&
            c.localizedRatingCount >= 200 &&
            c.ratingCount >= 2e3,
        x = m ? c?.localizedRating : c?.rating,
        h = m ? c?.localizedRatingCount : c?.ratingCount,
        g = m ? eE.t["aWb+V4"] : eE.t["8e4LiB"],
        f = t.reviews?.opencritic != null && null != s;
    return r || d || f
        ? (0, i.jsxs)("div", {
              className: n0.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: n0.Gf,
                      children: (0, i.jsx)(ei.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eE.intl.string(eE.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: n0.kL,
                      children: [
                          d && null != a
                              ? (0, i.jsx)("div", {
                                    className: n0.WH,
                                    children: (0, i.jsx)(n1, {
                                        url: a,
                                        trackAction: n,
                                        title: eE.intl.string(eE.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != a
                              ? (0, i.jsx)("div", {
                                    className: n0.WH,
                                    children: (0, i.jsx)(n1, {
                                        url: a,
                                        trackAction: n,
                                        title: eE.intl.string(g),
                                        rating: x,
                                        ratingCount: h,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          f && null != s
                              ? (0, i.jsx)("div", {
                                    className: n0.WH,
                                    children: (0, i.jsx)(n8, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var n3 = n(839534),
    n6 = n(722258),
    n9 = n(258245),
    n7 = n(561769),
    le = n(484469),
    lt = n(57020),
    ln = n(682301);
let ll = [];
var li = n(758836),
    la = n(747828);
let ls = [0, 1, 2, 3, 4];
function lr(e) {
    return e.skuId;
}
let lc = a.createContext({ trackAction: () => {} });
function lo(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: s } = t,
        r = a.useContext(n7.v3),
        { trackAction: c } = a.useContext(lc),
        o = a.useRef(null),
        u = a.useCallback(
            (e) => {
                (c(M.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, n6.B)({
                        skuId: s,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, lt.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, s, t],
        ),
        { flattenProductVariants: d, ...m } = r;
    return (0, i.jsx)(n7.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...m, productOverride: t },
        children: (0, i.jsx)(n9.A, {
            skuId: s,
            aspectRatio: n,
            cardClassName: la.N,
            onClickCard: u,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function lu() {
    return (0, i.jsx)(le.A, {});
}
function ld(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = $(),
        { products: s, isLoading: r } = (function (e) {
            let {
                    skuIds: t,
                    hasFetched: n,
                    isFetching: l,
                } = (function (e) {
                    let {
                        hasFetched: t,
                        isFetching: n,
                        skuIds: l,
                    } = (0, d.cf)([w.A], () => ({
                        hasFetched: null != e && w.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && w.A.isShopCollectionFetching(e),
                        skuIds: null != e ? w.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, a.useEffect)(() => {
                            null == e || t || w.A.isShopCollectionFetching(e) || eG(e);
                        }, [e, t]),
                        { skuIds: l ?? ll, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, ln.hv)(t, { flattenVariants: !0 }),
                s = (0, a.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: s, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = a.useCallback(() => {
            (n(M.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, n3.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: li.G2.CATALOG,
                }));
        }, [n, l]),
        o = a.useMemo(() => ({ trackAction: n }), [n]),
        u = er("game_profile_shop_carousel");
    return r
        ? (0, i.jsx)(eQ, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, i.jsx)(e0, { children: ls.map((e) => (0, i.jsx)(lu, {}, e)) }),
          })
        : 0 === s.length
          ? null
          : (0, i.jsx)(lc.Provider, {
                value: o,
                children: (0, i.jsx)(eq, {
                    title: eE.intl.string(eE.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: u
                        ? (0, i.jsx)(ed.A, {
                              gap: "md",
                              items: s,
                              getItemKey: lr,
                              renderItem: (e, t) => (0, i.jsx)(lo, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, i.jsx)(eo.A, {
                              gap: "md",
                              children: s.map((e) => (0, i.jsx)(lo, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var lm = n(921138),
    lx = n(311043);
let lh = [],
    lg = [];
var lf = n(607346);
let lj = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function lA(e) {
    return e.id;
}
function lp(e) {
    let { className: t } = e;
    return (0, i.jsx)(eK, { className: t, children: (0, i.jsx)(eX, { className: lf.Lg }) });
}
function lv(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: s } = $(),
        r = t.getCoverURL(256),
        [c, o] = a.useState(null),
        u = null == r || c === r,
        { shouldOpenGameProfile: d, gameId: m } = (0, lm.Ay)({
            gameId: t.id,
            source: M.GameProfileSources.SimilarGames,
        }),
        h = a.useCallback(() => {
            (n(M.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                d && null != m && s(m, M.GameProfileSources.SimilarGames));
        }, [t.id, m, n, d, s]),
        g = a.useCallback(() => o(r), [r]);
    return (0, i.jsx)(x.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, i.jsxs)(et.D, {
            ...l,
            className: lf.Nr,
            onClick: h,
            "aria-label": eE.intl.formatToPlainString(eE.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, i.jsx)(tB.Ay, {
                    game: t,
                    className: lf.xe,
                    size: tB.wu.SMALL,
                    imageSize: 256,
                    onLoad: g,
                    onError: g,
                }),
                !u && (0, i.jsx)(lp, { className: lf.uz }),
            ],
        }),
    });
}
function lE(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: a } = (function (e) {
            let t = !eP.has(e),
                { data: n, isLoading: l, error: i } = eO(e, t),
                a = t && null != n ? n : lh;
            (0, L.x)(a);
            let s = (0, d.bG)(
                    [lx.A],
                    () => a.some((e) => null == lx.A.getGame(e) && !lx.A.hasNoData(e) && !lx.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, d.yK)(
                    [lx.A, K.default],
                    () => {
                        let e = K.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => lx.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, lm.T_)(t) && !(0, W.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: lg };
        })(t),
        s = er("game_profile_similar_games");
    return eP.has(t)
        ? null
        : l
          ? (0, i.jsx)(eQ, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, i.jsx)("div", {
                    className: lf.XG,
                    style: lj,
                    children: (0, i.jsx)(e0, {
                        children: q()
                            .range(0, 8)
                            .map((e) => (0, i.jsx)(lp, { className: lf.aZ }, e)),
                    }),
                }),
            })
          : 0 === a.length
            ? null
            : (0, i.jsx)(eq, {
                  title: eE.intl.string(eE.t["6rLyQB"]),
                  children: (0, i.jsx)("div", {
                      className: lf.XG,
                      style: lj,
                      children: s
                          ? (0, i.jsx)(ed.A, {
                                gap: "md",
                                items: a,
                                getItemKey: lA,
                                itemClassName: lf.cW,
                                renderItem: (e, t) =>
                                    (0, i.jsx)(lv, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, i.jsx)(eo.A, {
                                gap: "md",
                                children: a.map((e) => (0, i.jsx)(lv, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
n(667532);
var lN = n(853022);
let lI = new Set(["1402418703554842694", "356877880938070016"]),
    lk = [tr.V.EPICGAMES, tr.V.STEAM, tr.V.ROBLOX, tr.V.BATTLENET, tr.V.RIOT, tr.V.MINECRAFT];
var lS = n(349361),
    lb = n(924895),
    lT = n(422688),
    lC = n(505200),
    ly = n(695250);
let lL = function (e) {
    switch (e.category) {
        case tr.V.STEAM:
            return {
                icon: nz.N,
                text: eE.intl.string(eE.t.FsANs4),
                ariaLabel: eE.intl.string(eE.t["P+ePTG"]),
                action: M.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case tr.V.EPICGAMES:
            return {
                icon: lS.r,
                text: eE.intl.string(eE.t.ZbBMHa),
                ariaLabel: eE.intl.string(eE.t.BwX0UW),
                action: M.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case tr.V.ROBLOX:
            return {
                icon: lb.H,
                text: eE.intl.string(eE.t["pJ+P+h"]),
                ariaLabel: eE.intl.string(eE.t.tYxpdf),
                action: M.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case tr.V.BATTLENET:
            return {
                icon: lT.a,
                text: eE.intl.string(eE.t["A7grp+"]),
                ariaLabel: eE.intl.string(eE.t.x9at20),
                action: M.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case tr.V.RIOT:
            return {
                icon: lC.A,
                text: eE.intl.string(eE.t.h6MapL),
                ariaLabel: eE.intl.string(eE.t["528nvc"]),
                action: M.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case tr.V.MINECRAFT:
            return {
                icon: ly.m,
                text: eE.intl.string(eE.t["HZbmO+"]),
                ariaLabel: eE.intl.string(eE.t.WWTqYn),
                action: M.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tT.Y,
                text: eE.intl.string(eE.t["QpN/Iz"]),
                ariaLabel: eE.intl.string(eE.t["8JZmmF"]),
                action: M.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function lR(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var lP = n(48460);
function lG(e) {
    let t,
        n,
        l,
        i,
        s,
        r =
            ((t = (0, nq.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eR.d3x.XBOX_GAME_PASS && !(0, ts.uJ)(e.id));
                return t?.id == null ? null : (0, lN.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== tr.V.EPICGAMES || !!lI.has(l)) &&
                            (e.category !== tr.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            lk.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === tr.V.STEAM) ||
                    e.push({ category: tr.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === tr.V.STEAM ? -1 : +(t.category === tr.V.STEAM)));
                return (null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a);
            }, [t, i, l, s, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function l_(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tN.A)();
    return (0, i.jsx)(lR, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lO = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: s, storeWebsites: r } = lG(t),
        c = a.useMemo(() => r.map(lL).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(l_, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: lP.G,
            children: [(0, i.jsx)(l_, { data: c[0], trackAction: l }), (0, i.jsx)(l_, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(lR, {
        text: eE.intl.string(eE.t["/hMurx"]),
        "aria-label": eE.intl.string(eE.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: a } = e;
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await n.e("176758").then(n.bind(n, 459477));
                    return (n) => (0, i.jsx)(e, { game: t, websiteButtons: l, trackAction: a, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: lP.G, children: [(0, i.jsx)(l_, { data: c[0], trackAction: l }), o] })
        : o;
};
var lM = n(123292);
function lw(e) {
    let { game: t, trackAction: n } = e,
        l = a.useRef(null),
        {
            isExpanded: s,
            showToggle: c,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [n, l] = a.useState("full");
            a.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        l((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return (n.observe(t), () => n.disconnect());
            }, [e]);
            let i = a.useCallback(() => {
                "expanded" === n
                    ? (t(M.GameProfileTrackActionActions.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(M.GameProfileTrackActionActions.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: u } = $(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = s ? eE.intl.string(eE.t["6MwJo/"]) : eE.intl.string(eE.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tL.fi, tL.mX),
        children: [
            (0, i.jsx)(el.E, {
                ref: l,
                className: tL.g5,
                lineClamp: s ? void 0 : d,
                variant: "text-md/medium",
                children: t.description,
            }),
            c && (0, i.jsx)(lM.Q, { onClick: o, text: m }),
        ],
    });
}
var lD = n(871123),
    lV = n(439303),
    lU = n(317560),
    lF = n(467884),
    lY = n(761812);
function lW(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: lY.B, children: t });
}
function lB(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        s = a.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    (e.preventDefault(), l(n, i));
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(eo.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      lW,
                      {
                          children: (0, i.jsx)(lF.Ay, {
                              positionInSection: t,
                              skuId: e,
                              variant: lF.s6.SMALL,
                              analyticsLocations: n,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
var lH = n(403581),
    lz = n(812095),
    lX = n(421108),
    lK = n(647474),
    lJ = n(162536);
function l$(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, lX.tm)(l)) return null;
    let a = "nitro" === t.flavor,
        s = a ? lH.t : t.Icon;
    return (0, i.jsx)(lK.A, {
        className: r()(lJ.vK, n),
        color: a ? "nitro-pink" : void 0,
        children: (0, i.jsxs)("div", {
            className: lJ.Qs,
            children: [
                null != s && (0, i.jsx)(s, { size: "xs", color: "currentColor", className: lJ.Kk }),
                (0, i.jsx)(el.E, { variant: "text-sm/normal", color: "currentColor", children: (0, lz.U)(t.text) }),
            ],
        }),
    });
}
var lQ = n(521058);
function lq() {
    let { storefrontPromotion: e } = $();
    return e?.flavor !== "nitro" ? null : (0, i.jsx)(l$, { className: lQ.v, promotion: e });
}
let lZ = [0, 1, 2, 3],
    l0 = { placement: lV.Ye.GAME_PROFILE };
function l1() {
    return (0, i.jsx)(eQ, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, i.jsx)(e0, { children: lZ.map((e) => (0, i.jsx)(lW, { children: (0, i.jsx)(lF.yf, {}) }, e)) }),
    });
}
function l8(e) {
    let { trackAction: t } = e,
        {
            socialLayerStorefrontRecommendationsData: n,
            socialLayerStorefrontRecommendationsLoading: l,
            closeModal: s,
        } = $(),
        { analyticsLocations: r } = (0, I.Ay)([N.A.GAME_PROFILE]),
        c = a.useCallback(() => {
            n?.application != null &&
                (t(M.GameProfileTrackActionActions.GameShop),
                s(),
                (0, t2.default)({ applicationId: n.application.id }));
        }, [n, t, s]),
        o = a.useCallback(
            (e, l) => {
                let i = n?.guildId;
                null != i &&
                    (t(M.GameProfileTrackActionActions.GameShopItem),
                    (0, lU.R)({
                        skuId: e,
                        applicationId: l,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lD.rG)(e, t, l, i) && s();
                        },
                    }));
            },
            [t, s, r, n],
        );
    if (l) return (0, i.jsx)(l1, {});
    if (null == n) return null;
    let { skuIds: u } = n;
    return (0, i.jsxs)(eq, {
        title: eE.intl.string(eE.t.WDdlUb),
        onClickViewAll: c,
        children: [
            (0, i.jsx)(lq, {}),
            (0, i.jsx)(lV.E9, {
                newValue: l0,
                children: (0, i.jsx)(lB, { skuIds: u, analyticsLocations: r, onCardClick: o }),
            }),
        ],
    });
}
let l5 = a.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, i.jsxs)("div", {
            className: tL.oC,
            children: [
                (0, i.jsxs)("div", {
                    className: tL.lM,
                    children: [
                        (0, i.jsx)(nH, { game: t, trackAction: n }),
                        (0, i.jsx)(lw, { game: t, trackAction: n }),
                    ],
                }),
                (0, i.jsx)(tl, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(l8, { trackAction: n }),
                (0, i.jsx)(ld, { game: t, trackAction: n }),
                (0, i.jsx)(lE, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    l4 = a.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
        return (0, i.jsxs)("div", {
            className: tL.V0,
            children: [
                (0, i.jsx)(nH, { game: t, trackAction: n }),
                (0, i.jsxs)("div", {
                    className: tL.gr,
                    children: [
                        (0, i.jsx)(nE, { game: t, isTwoColumn: !1 }),
                        (0, i.jsxs)("div", {
                            className: tL.E1,
                            children: [
                                (0, i.jsx)(lO, { game: t, trackAction: n }),
                                (0, i.jsx)(lw, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(nT, { analyticsLocations: l, trackAction: n }),
                (0, i.jsx)(tY, { trackAction: n }),
                (0, i.jsx)(tl, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(l8, { trackAction: n }),
                (0, i.jsx)(ld, { game: t, trackAction: n }),
                (0, i.jsx)(lE, { gameId: t.id, trackAction: n }),
                a && (0, i.jsx)(n2, { game: t, trackAction: n }),
                (0, i.jsx)(tM, { game: t, trackAction: n }),
            ],
        });
    });
function l2(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: s } = $();
    (0, k.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = a.useCallback(() => {
        (l(M.GameProfileTrackActionActions.CloudPlay), s(), t());
    }, [s, t, l]);
    return (0, i.jsx)(x.m, {
        text: eE.intl.string(eE.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: eE.intl.string(eE.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function l3(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: a } = e,
        s = (0, E.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: tL.NC,
              children: (0, i.jsx)(l2, { onCloudPlayClick: s, analyticsLocations: l, trackAction: a }),
          });
}
function l6(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = (0, v.A)(t.linkedApplications)?.id,
        [s] = (0, R.L_)(t.getOfficialApplicationId()),
        [c] = (0, R.L_)(t.id),
        { showsStoreLinks: o } = lG(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(tL.Pn, tL.fi, tL.iH, o ? tL.sV : tL.gF),
        children: [
            null == a || s || c
                ? null
                : (0, i.jsx)(l3, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: l, trackAction: n }),
            (0, i.jsxs)("div", {
                className: tL.V0,
                children: [
                    (0, i.jsx)(lO, { game: t, trackAction: n }),
                    (0, i.jsx)(nT, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tY, { trackAction: n }),
                    d && (0, i.jsx)(n2, { game: t, trackAction: n }),
                    (0, i.jsx)(tM, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function l9(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: s,
            onClose: c,
            appContext: u,
            trackExternalAction: x,
            initialScrollOffset: h,
            navigateToGame: g,
        } = e,
        [v, E] = a.useState(!0),
        [k, R] = a.useState(null),
        { clientThemesClassName: D } = (0, T.Ay)(),
        V = (0, d.bG)([O.default], () => O.default.locale),
        $ = a.useMemo(() => (0, M.generateViewId)(), []),
        { analyticsLocations: Q } = (0, I.Ay)(N.A.GAME_PROFILE),
        q = (0, F.s)(t),
        { data: Z } = (0, L.I)(t),
        ee = (0, Y.rG)(Z),
        et = Z?.getOfficialApplicationId(),
        en = null != et,
        el = (0, d.bG)([b.A], () => null != et && b.A.didFetchingApplicationFail(et), [et]),
        ei = Z?.name ?? "",
        ea = (0, W.A)(Z),
        es = a.useRef(null);
    a.useEffect(() => {
        es.current = k;
    }, [k]);
    let {
            hasAlreadyLinked: er,
            canStartAuthorization: ec,
            fetched: eo,
            startAuthorization: eu,
            connectionApp: ed,
        } = (0, S.RD)(Z),
        { invite: em, isMember: ex, isResolving: eh } = (0, Y.Ay)(Z, R),
        { socialLayerStorefrontRecommendationsData: eg, socialLayerStorefrontRecommendationsLoading: ef } = (function (
            e,
        ) {
            let t = K.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, d.cf)(
                    [H.A],
                    () => ({
                        storefrontApplicationId: null != e ? H.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === H.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                s = (0, B.h)(l),
                r = (0, d.bG)([b.A], () => null != l && b.A.didFetchingApplicationFail(l), [l]),
                c = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: u } = (0, X.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: z.B5.USER_PROFILE,
                }),
                m = a.useMemo(
                    () =>
                        null == s || null == s.guildId || "success" !== u || 0 === o.length
                            ? null
                            : { application: s, skuIds: o.map((e) => e.id), guildId: s.guildId },
                    [s, u, o],
                ),
                x = "loading" === u,
                h = "success" === u && o.length > 0 && null == s && !r;
            return {
                socialLayerStorefrontRecommendationsData: m,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (x || h),
            };
        })(t),
        ej = (function (e) {
            let { location: t } = e;
            return U.useConfig({ location: t }).enabled;
        })({ location: "GameProfileModal" }),
        eA = (0, G.u)({ surface: "storefront_banner", applicationId: ej ? eg?.application.id : null }),
        ep = a.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, M.getGuildIdAndVerifiedFromInvite)(es.current);
                (0, M.trackGameProfileAction)({
                    gameName: ei,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: $,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [ei, t, $, n],
        );
    ((0, p.Ay)(() => {
        ((0, M.trackGameProfileOpen)({
            source: n,
            viewId: $,
            gameId: t,
            gameName: ei,
            authorId: l,
            profileType: M.GameProfileTypes.FullProfile,
        }),
            (0, C.He)());
    }),
        (0, p.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, M.getGuildIdAndVerifiedFromInvite)(es.current),
                l = Date.now(),
                i = q.map((e) => {
                    let t = (0, y.JM)(e) ? (0, y.W6)(e, l) : (0, y.aJ)(e, V);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, M.trackGameProfileClose)({
                viewId: $,
                gameId: t,
                gameName: ei,
                playedFriendIds: q.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: w.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let ev = a.useCallback((e) => {
            E(e.contentRect.width >= 800);
        }, []),
        eE = (0, o.w)(ev, [], { fireOnMount: !0 }),
        eN = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, f.closeAllModals)(), (0, _.closeUserProfileModal)()) : c();
            },
            [c],
        ),
        eI = a.useCallback(() => eN(!1), [eN]),
        ek = a.useRef(null),
        eS = a.useCallback(() => ek.current?.getScrollerNode()?.scrollTop ?? 0, []),
        eb = a.useMemo(
            () => ({
                isTwoColumn: v,
                canStartAuthorization: ec,
                hasAlreadyLinked: er,
                fetchedAuthorization: eo,
                startAuthorization: eu,
                connectionApp: ed,
                invite: em,
                hasDiscordWebsite: ee,
                hasOfficialApplication: en,
                officialApplicationFetchFailed: el,
                isCommunityInviteResolving: eh,
                isMember: ex,
                socialLayerStorefrontRecommendationsData: eg,
                socialLayerStorefrontRecommendationsLoading: ef,
                storefrontPromotion: eA,
                closeModal: eN,
                navigateToGame: g,
                getScrollOffset: eS,
            }),
            [v, ec, er, eo, eu, ed, em, ee, en, el, eh, ex, eg, ef, eA, eN, g, eS],
        ),
        [eT, eC] = a.useState(!1),
        [ey, eL] = a.useState(150),
        eR = a.useRef(null);
    a.useEffect(() => {
        null != h && h > 0 && ek.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eP = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != eR.current) {
                let e = Math.max(0, 1 - t / 150);
                eR.current.style.opacity = String(e);
            }
            eC(t >= ey);
        },
        [ey],
    );
    return null == Z
        ? null
        : (0, i.jsx)(I.f5, {
              value: Q,
              children: (0, i.jsx)(m.N, {
                  transitionState: s,
                  onClose: c,
                  children: (0, i.jsx)(J.Provider, {
                      value: eb,
                      children: (0, i.jsx)("div", {
                          className: r()(D, tL.kL),
                          ref: eE,
                          children: (0, i.jsxs)(P.A, {
                              obscured: ea,
                              onClose: eI,
                              children: [
                                  (0, i.jsx)(nA, { game: Z, ref: eR }),
                                  (0, i.jsx)(nf, { game: Z, show: eT, trackAction: ep }),
                                  (0, i.jsx)(nj, { show: eT }),
                                  (0, i.jsxs)(j.Ch, {
                                      ref: ek,
                                      className: tL.XG,
                                      onScroll: eP,
                                      children: [
                                          (0, i.jsx)(nN, {
                                              game: Z,
                                              onSetCompactBarScrollThreshold: eL,
                                              showCompactBar: eT,
                                          }),
                                          (0, i.jsx)(A.F, {
                                              children: v
                                                  ? (0, i.jsxs)("div", {
                                                        className: tL.jC,
                                                        children: [
                                                            (0, i.jsx)(l5, { game: Z, trackAction: ep }),
                                                            (0, i.jsx)(l6, {
                                                                game: Z,
                                                                appContext: u,
                                                                source: n,
                                                                trackExternalAction: x,
                                                                trackAction: ep,
                                                                analyticsLocations: Q,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: tL.b9,
                                                        children: (0, i.jsx)(l4, {
                                                            game: Z,
                                                            trackAction: ep,
                                                            analyticsLocations: Q,
                                                        }),
                                                    }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let l7 = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: s, ...r } = e,
        [c, o] = a.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: s }),
        u = c.gameId,
        d = a.useCallback(
            (e, t) => {
                e !== u && ((0, Y.UT)(e), o({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, i.jsx)(
        l9,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            navigateToGame: d,
            ...r,
        },
        c.gameId,
    );
};
