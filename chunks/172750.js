n.d(t, { default: () => iG });
var l,
    i,
    a = n(477900),
    s = n(582128),
    r = n(503698),
    c = n.n(r),
    o = n(562708),
    u = n(535185),
    d = n(792216),
    m = n(17928),
    x = n(521489),
    g = n(866665),
    h = n(821609),
    f = n(414499),
    j = n(689175),
    p = n(707554),
    A = n(192308),
    v = n(964486),
    E = n(881698),
    I = n(146779),
    N = n(793574),
    b = n(688810),
    C = n(139286),
    S = n(206828),
    k = n(587895),
    T = n(590703),
    y = n(180170),
    R = n(583846),
    L = n(569926),
    M = n(928550),
    O = n(570962),
    P = n(38145),
    G = n(773669),
    _ = n(409626),
    w = n(422069),
    V = n(205184),
    D = n(957807),
    F = n(49491),
    U = n(429913),
    Y = n(832163),
    W = n(820847),
    B = n(862772),
    H = n(287809);
let z = s.createContext(void 0);
function X() {
    let e = s.useContext(z);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var K = n(435558),
    J = n.n(K),
    $ = n(621466),
    Q = n(966697),
    q = n(939249),
    Z = n(346055),
    ee = n(834730),
    et = n(297264),
    en = n(460905),
    el = n(945810);
let ei = (0, el.mj)({
    name: "2026-09-new-horizontal-scroll-shared",
    kind: "user",
    defaultConfig: { useNewHScroll: !1 },
    variations: { 0: { useNewHScroll: !1 }, 1: { useNewHScroll: !0 } },
});
function ea(e) {
    return ei.useConfig({ location: e }).useNewHScroll;
}
var es = n(776231),
    er = n(449543),
    ec = n(46054),
    eo = n(197935),
    eu = n(58703);
n(321073);
var ed = n(155718),
    em = n(387408),
    ex = n(731068),
    eg = n(59318),
    eh = n(320095),
    ef = n(708676),
    ej = n(383233),
    ep = n(998218),
    eA = n(375708);
let ev = /^#{1,3}\s+(.+)$/,
    eE = /^https?:\/\/\S+$/;
var eI = n(60465),
    eN = n(158390),
    eb = n(636537),
    eC = n(73153),
    eS = n(103348),
    ek = n(927813),
    eT = n(371794),
    ey = n(652215);
let eR = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function eL(e) {
    eC.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eT.aP)({
                    url: ey.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: G.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(eS.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (eC.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            eC.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        eC.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eM(e) {
    let t = ((await eb.Bo.get({ url: ey.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eR.has(t),
    );
    eC.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eO = (0, m.UT)(w.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => w.A.getSimilarGames(e) ?? null,
    load: (e) => eM(e),
    retryConfig: { backoff: () => new eN.A(5 * ek.A.Millis.SECOND, 5 * ek.A.Millis.MINUTE) },
    failureStaleAfter: ek.A.Seconds.MINUTE,
});
async function eP(e, t) {
    eC.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eb.Bo.get({ url: ey.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eC.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, em.A)((0, eh.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, ej._c)(e))
                            return e.components
                                .filter((e) => e.type === ed.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || eE.test(t.trim())
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
                        if ((0, ej._c)(e)) {
                            let t = e.components.find((e) => e.type === ed.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, ex.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, eg.tT)(e.content_type));
                        if (null != t) return (0, ex.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, eg.XB)(e.content_type));
                        if (null != n) return (0, ex.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, ex.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, ex.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, ex.oU)(
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(ev)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, ej._c)(l)
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
        eC.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eG = n(284009),
    e_ = n.n(eG),
    ew = n(376728),
    eV = n(976860),
    eD = n(71393),
    eF = n(449054);
async function eU(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    e_()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eD.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(ey.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eF.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: ey.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await ew.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eV.pX)(ey.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eY = n(320448),
    eW = n(493285);
let eB = { sm: eW.nz, md: eW.a };
function eH(e) {
    let { className: t, width: n } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(eW.qf, t), style: { width: n } });
}
function ez(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: l, style: i, children: n });
}
function eX(e) {
    let { className: t, size: n = "md" } = e;
    return (0, a.jsx)(eH, { className: c()(eW.x6, eB[n], t) });
}
var eK = n(406510);
function eJ(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, a.jsxs)("div", {
        className: eK.kL,
        "aria-busy": !0,
        children: [
            (0, a.jsxs)("div", {
                className: eK.wR,
                children: [(0, a.jsx)(eH, { className: eK.Iz, width: n }), l && (0, a.jsx)(eX, { size: "sm" })],
            }),
            t,
        ],
    });
}
function e$(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, a.jsxs)("div", {
        className: eK.kL,
        children: [
            (0, a.jsxs)("div", {
                className: eK.wR,
                children: [
                    (0, a.jsx)(et.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, a.jsx)(h.$, {
                            size: "sm",
                            icon: eY._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eA.intl.string(eA.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eQ = n(949959);
function eq(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(eQ.n, { [eQ.C]: 16 === n }), children: t });
}
let eZ = "1552821538409939044";
var e0 = n(235240),
    e1 = n(165648);
function e8(e, t) {
    return ec.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e4(e) {
    return e.id;
}
function e2() {
    return (0, a.jsxs)(ez, {
        className: e0.s7,
        children: [
            (0, a.jsx)(eH, { className: e0.o$ }),
            (0, a.jsxs)("div", {
                className: e0.UF,
                children: [(0, a.jsx)(eH, { className: e0.iX }), (0, a.jsx)(eH, { className: e0.jt })],
            }),
        ],
    });
}
function e3(e, t) {
    var n;
    let l,
        i = (0, es.kr)(364 * (0, es.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = ep.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function e5(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, r] = s.useState(!1),
        c = s.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, a.jsx)(Q.y, {
              readyState: i ? ey.Rv1.READY : ey.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, a.jsx)("img", {
                  src: n,
                  className: e0.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function e6(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, $.vq)(e.target, HTMLAnchorElement) ||
                        ((0, $.vq)(e.target, HTMLSpanElement) && (0, $.vq)(e.target.parentElement, HTMLAnchorElement))
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
        : (0, a.jsx)(q.D, {
              ...i,
              className: e0.Nr,
              onClick: r,
              children: (0, a.jsxs)(Z.M, {
                  className: e0.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(ee.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: e0.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: e0._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: e0.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: e0.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, a.jsx)(ee.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, a.jsx)("div", {
                                      className: e0.ax,
                                      children: (0, a.jsx)(e5, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(et.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: e0.DD,
                                      children: e8(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: c()(e0.h_, e1.PT),
                                      children: [e8(t.body, n), (0, a.jsx)("div", { className: e0.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: e0.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: e0.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, a.jsxs)(ee.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, eu.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, a.jsxs)("div", {
                                              className: e0.a5,
                                              children: [
                                                  (0, a.jsx)(en.n, { size: "xs", color: "currentColor" }),
                                                  (0, a.jsx)(ee.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eA.intl.currentLocale).format(
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
let e7 = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, a.jsxs)(Z.M, {
        className: e0.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(et.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e0.DD,
                    children: e8(t.title, n),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: c()(e0.h_, e1.PT),
                    children: [e8(t.body, n), (0, a.jsx)("div", { className: e0.fm })],
                }),
            (0, a.jsxs)("div", {
                className: e0.ov,
                children: [
                    (0, a.jsx)(ee.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, eu.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: e0.a5,
                            children: [
                                (0, a.jsx)(en.n, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(ee.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(eA.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function e9(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, $.vq)(e.target, HTMLAnchorElement) ||
                        ((0, $.vq)(e.target, HTMLSpanElement) && (0, $.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? e3(o, c) : void 0;
    return (0, a.jsxs)(q.D, {
        ...i,
        className: e0.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != u &&
                (0, a.jsx)("div", {
                    className: e0.Vl,
                    children: (0, a.jsx)(e5, { message: t, src: u, aspectRatio: c }),
                }),
            (0, a.jsx)(e7, { message: t, channelId: n }),
        ],
    });
}
function te(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        r = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(q.D, {
        ...l,
        className: e0.Nr,
        onClick: r,
        children: (0, a.jsxs)(Z.M, {
            className: e0.zI,
            children: [
                (0, a.jsx)(et.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e0.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: e0.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: e0.Nf,
                                    children: (0, a.jsx)(ee.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e0.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, a.jsx)(ee.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: e0.PF,
                                children: eA.intl.format(eA.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: e0.ov,
                    children: (0, a.jsx)(ee.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eA.intl.format(eA.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, ef.J)(i.expiry) ?? eA.intl.string(eA.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function tt(e) {
    return null != e.message.poll
        ? (0, a.jsx)(te, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(e6, { ...e })
          : (0, a.jsx)(e9, { ...e });
}
let tn = s.memo(function (e) {
    let { gameId: t, trackAction: n, getScrollOffset: l } = e,
        { analyticsLocations: i } = (0, b.Ay)(),
        { invite: r, hasDiscordWebsite: c, closeModal: o } = X(),
        {
            messages: u,
            guildId: d,
            channelId: x,
            loading: g,
            hasFetched: h,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, m.cf)([w.A], () => ({
                data: null != e ? w.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && w.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && w.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || n || w.A.isAnnouncementsFetching(e) || eP(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = ea("game_profile_announcements"),
        j = s.useCallback(() => {
            let e = r?.guild?.id ?? d;
            null != e &&
                null != x &&
                (n(_.GameProfileTrackActionActions.Announcements),
                eI.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                o(),
                eU({ invite: r, guildId: e, channelId: x, analyticsLocationStack: i }));
        }, [n, o, l, r, d, x, i, t]),
        p = s.useCallback(
            (e) => {
                let a = r?.guild?.id ?? d;
                null != a &&
                    null != x &&
                    (n(_.GameProfileTrackActionActions.AnnouncementsItem),
                    eI.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                    o(),
                    eU({ invite: r, guildId: a, channelId: x, messageId: e, analyticsLocationStack: i }));
            },
            [n, o, l, r, d, x, i, t],
        ),
        A = null != x && u.length > 0;
    return (!h || g) && c
        ? (0, a.jsx)(eJ, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(eq, {
                  gap: 16,
                  children: J()
                      .range(3)
                      .map((e) => (0, a.jsx)(e2, {}, e)),
              }),
          })
        : A
          ? (0, a.jsx)(e$, {
                title: eA.intl.string(eA.t.B0BV3Y),
                onClickViewAll: j,
                children: f
                    ? (0, a.jsx)(eo.A, {
                          gap: 16,
                          items: u,
                          getItemKey: e4,
                          itemClassName: e0.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(tt, { message: e, channelId: x, onCardClick: p, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(er.A, {
                          gap: 16,
                          children: u.map((e) => (0, a.jsx)(tt, { message: e, channelId: x, onCardClick: p }, e.id)),
                      }),
            })
          : null;
});
var tl = n(37537),
    ti = n(541830),
    ta = n(240248),
    ts = n(505779),
    tr = n(808380);
let tc = [tr.Y.DESKTOP, tr.Y.XBOX, tr.Y.PLAYSTATION, tr.Y.NINTENDO];
var to = n(28863),
    tu = n(975807),
    td = n(194362);
function tm(e) {
    let { game: t, trackAction: n } = e,
        l = s.useCallback(async () => {
            n(_.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, td.a)(ey.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tu.A)(e);
        }, [n]),
        i = s.useCallback((e) => (0, a.jsx)(to.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === ed.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(ee.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eA.intl.format(eA.t.KAjfKl, { claimLink: i }),
          });
}
var tx = n(998445),
    tg = n(274997),
    th = n(80500),
    tf = n(319745),
    tj = n(488225),
    tp = n(967492),
    tA = n(72265),
    tv = n(454346),
    tE = n(37948),
    tI = n(750013);
let tN = { size: "xs", colorClass: tI.wP };
function tb(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tE.A)(),
        {
            action: i,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case ts.V.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(tx.GlobeEarthIcon, { ...t }),
                        action: _.GameProfileTrackActionActions.WebsiteLink,
                        title: eA.intl.string(eA.t.fOUKvg),
                    };
                case ts.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(tg.p, { ...t }),
                        action: _.GameProfileTrackActionActions.XLink,
                        title: eA.intl.string(eA.t.INic4y),
                    };
                case ts.V.YOUTUBE:
                    return {
                        action: _.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(th.C, { ...t }),
                        title: eA.intl.string(eA.t.lNmxbE),
                    };
                case ts.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(tf.Z, { ...t }),
                        action: _.GameProfileTrackActionActions.FacebookLink,
                        title: eA.intl.string(eA.t.FjyREK),
                    };
                case ts.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(tj.L, { ...t }),
                        action: _.GameProfileTrackActionActions.InstagramLink,
                        title: eA.intl.string(eA.t["cgR+IK"]),
                    };
                case ts.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(tp.a, { ...t }),
                        action: _.GameProfileTrackActionActions.BlueskyLink,
                        title: eA.intl.string(eA.t["D/PHq5"]),
                    };
                case ts.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(tA.T, { ...t }),
                        action: _.GameProfileTrackActionActions.RedditLink,
                        title: eA.intl.string(eA.t["Hgb+fc"]),
                    };
                case ts.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(tv.a, { ...t }),
                        action: _.GameProfileTrackActionActions.TwitchLink,
                        title: eA.intl.string(eA.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tN),
        o = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, a.jsx)(g.m, {
        text: c,
        children: (0, a.jsx)(q.D, { onClick: o, className: tI.yO, title: c, children: r }),
    });
}
var tC = n(31300),
    tS = n(802516),
    tk = n(22363),
    tT = n(418524),
    ty = n(672572);
function tR(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case tr.Y.DESKTOP:
            return (0, a.jsx)(tC.k, { size: "xs", ...n });
        case tr.Y.XBOX:
            return (0, a.jsx)(tS.Y, { size: "xs", ...n });
        case tr.Y.PLAYSTATION:
            return (0, a.jsx)(tk.X, { size: "xs", ...n });
        case tr.Y.NINTENDO:
            return (0, a.jsx)(tT.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tL(e) {
    let { platform: t } = e;
    return (0, a.jsx)(
        g.m,
        {
            text: (function (e) {
                switch (e) {
                    case tr.Y.DESKTOP:
                        return eA.intl.string(eA.t.KT6uCJ);
                    case tr.Y.XBOX:
                        return eA.intl.string(eA.t.DDWUJp);
                    case tr.Y.PLAYSTATION:
                        return eA.intl.string(eA.t.fzMz2s);
                    case tr.Y.NINTENDO:
                        return eA.intl.string(eA.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(tR, { platform: t }),
        },
        t,
    );
}
var tM = n(424994),
    tO = n(422384);
function tP() {
    return (0, a.jsx)(ee.E, { variant: "text-sm/normal", color: "text-subtle", children: eA.intl.string(eA.t.GruYxV) });
}
let tG = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, tl.c)("GameProfileGameDetails"),
        i = s.useMemo(() => t.genres.map(ti.du).join(", "), [t]),
        r = t.getCompanyByRole(ed.wk.PUBLISHER),
        c = t.getCompanyByRole(ed.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        u = c.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        m = s.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(tr.Y.DESKTOP) && (e.has(tr.Y.MACOS) || e.has(tr.Y.LINUX)) && n.push(tr.Y.DESKTOP),
                n.filter((e) => tc.includes(e)).sort((e, t) => tc.indexOf(e) - tc.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return ts.p.includes(t);
            })
            .sort((e, t) => ts.p.indexOf(e.category) - ts.p.indexOf(t.category)),
        g = !(0, ta.uJ)(i),
        h = !(0, ta.uJ)(o),
        f = !(0, ta.uJ)(u),
        j = !(0, ta.uJ)(d),
        p = m.length > 0,
        A = x.length > 0 && !x.every((e) => (0, ta.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: tO.uW,
        children: [
            (0, a.jsx)("div", {
                className: tO.Gf,
                children: (0, a.jsx)(et.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: eA.intl.string(eA.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tO.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eA.intl.string(eA.t.pDgwYB) : eA.intl.string(eA.t.mjFKqn),
                            }),
                            g
                                ? (0, a.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tO.Gu,
                                      children: i,
                                  })
                                : (0, a.jsx)(tP, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eA.intl.string(eA.t.Hc7Enk) : eA.intl.string(eA.t["4Byy/G"]),
                            }),
                            h
                                ? (0, a.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tO.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(tP, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? eA.intl.string(eA.t.KATEJB) : eA.intl.string(eA.t.na3PT0),
                            }),
                            f
                                ? (0, a.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tO.Gu,
                                      children: u,
                                  })
                                : (0, a.jsx)(tP, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eA.intl.string(eA.t.H3mPDT),
                            }),
                            j
                                ? (0, a.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tO.Gu,
                                      children: eu.i$(new Date(d), "LL"),
                                  })
                                : (0, a.jsx)(tP, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? eA.intl.string(eA.t.PNqxNe) : eA.intl.string(eA.t["UxAag+"]),
                            }),
                            p
                                ? (0, a.jsx)("div", {
                                      className: tO.Gu,
                                      children: m.map((e) => (0, a.jsx)(tL, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(tP, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eA.intl.string(eA.t["Oj3o1/"]),
                            }),
                            A
                                ? (0, a.jsx)("div", {
                                      className: tO.Gu,
                                      children: x.map((e) => (0, a.jsx)(tb, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, a.jsx)(tP, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eA.intl.string(eA.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tO.Gu,
                                children: eA.intl.format(eA.t.XPFZVl, { igdbLink: tM.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: tO.OQ, children: (0, a.jsx)(tm, { game: t, trackAction: n }) }),
        ],
    });
};
var t_ = n(714991),
    tw = n(486020),
    tV = n(992638);
function tD() {
    return (0, a.jsxs)(ez, {
        className: tV.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(eH, { className: tV.dU, width: "30%" }),
            (0, a.jsx)(ez, {
                className: tV.nV,
                children: (0, a.jsxs)("div", {
                    className: tV.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tV.To,
                            children: [
                                (0, a.jsx)(eH, { className: tV.QV }),
                                (0, a.jsxs)("div", {
                                    className: tV.Yv,
                                    children: [
                                        (0, a.jsx)(eH, { className: tV.Ag }),
                                        (0, a.jsx)(eH, { className: tV.zl }),
                                        (0, a.jsx)(eH, { className: tV.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(eX, {}),
                    ],
                }),
            }),
        ],
    });
}
function tF(e) {
    let { guild: t } = e,
        n = tw.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        r = null != n && l !== n,
        c = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, a.jsxs)("div", {
        className: tV._C,
        children: [
            r && (0, a.jsx)(eH, { className: tV.EQ }),
            (0, a.jsx)("img", {
                className: tV.$f,
                src: n,
                alt: eA.intl.formatToPlainString(eA.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tU(e) {
    let { trackAction: t } = e,
        n = (0, tl.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: i, isCommunityInviteResolving: r, isMember: c, closeModal: o } = X(),
        u = s.useCallback(() => {
            null != l &&
                (t(_.GameProfileTrackActionActions.JoinServer),
                o(),
                eC.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: ey.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? i && r
            ? (0, a.jsx)(tD, {})
            : null
        : (0, a.jsxs)("div", {
              className: tV.uW,
              children: [
                  (0, a.jsx)(et.D, {
                      className: tV.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: eA.intl.string(eA.t["U2N+ci"]),
                  }),
                  (0, a.jsx)("div", {
                      className: tV.kL,
                      children: (0, a.jsxs)("div", {
                          className: tV.hQ,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: tV.To,
                                  children: [
                                      (0, a.jsx)(tF, { guild: l.guild }),
                                      (0, a.jsxs)("div", {
                                          className: tV.yj,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: tV.YS,
                                                  children: [
                                                      (0, a.jsx)(t_.A, { guild: l.guild, size: 16 }),
                                                      (0, a.jsx)(et.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, ta.uJ)(l.guild?.description) &&
                                                  (0, a.jsx)(ee.E, {
                                                      className: tV.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, a.jsxs)("div", {
                                                        className: tV.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: tV.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tV._o }),
                                                                        (0, a.jsx)(ee.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eA.intl.format(eA.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    l.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != l.approximate_member_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: tV.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tV.jk }),
                                                                        (0, a.jsx)(ee.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eA.intl.format(eA.t.zRl6XR, {
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
                              (0, a.jsx)(h.$, {
                                  variant: "secondary",
                                  text: c ? eA.intl.string(eA.t.cEnaWx) : eA.intl.string(eA.t.XpeFYr),
                                  onClick: u,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var tY = n(369606),
    tW = n(775602),
    tB = n(21161),
    tH = n(400492),
    tz = n(459746),
    tX = n(732369);
let tK = n(892799),
    tJ = s.forwardRef(function (e, t) {
        let { game: n } = e,
            l = (function (e) {
                let [t] = s.useState(() => Math.random());
                return s.useMemo(() => {
                    let n = e.getBannerURL(1400);
                    if (null != n) return n;
                    let l = e.screenshotUrls?.length ?? 0;
                    return 0 === l ? null : e.getScreenshotURL(Math.floor(t * l), 1400);
                }, [1400, e, t]);
            })(n);
        return (0, ta.uJ)(l)
            ? null
            : (0, a.jsxs)("div", {
                  ref: t,
                  children: [
                      (0, a.jsx)("div", { className: tX.y1, style: { backgroundImage: `url("${l}")` } }),
                      (0, a.jsx)("div", { className: tX.N4 }),
                  ],
              });
    });
function t$(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(ti.du).join(", ");
    return (0, ta.uJ)(n) ? null : (0, a.jsx)(ee.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function tQ(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: tX.Qc,
        children: [
            (0, a.jsx)(tY.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(ee.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eA.intl.formatToPlainString(eA.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function tq(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, a.jsx)(tZ, {
        game: t,
        className: c()(n ? tX.n8 : tX.FS, !n && (0, tz.cO)(t) && tX.CD),
        imageClassName: tX.xe,
    });
}
function tZ(e) {
    let { game: t, className: n, imageClassName: l } = e,
        i = (0, a.jsx)(tz.Ay, { game: t, className: l, size: tz.wu.LARGE });
    return t.id !== eZ
        ? (0, a.jsx)("div", { className: n, children: i })
        : (0, a.jsx)(t0, { className: n, children: i });
}
function t0(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(tB.x),
        i = (0, m.bG)([tW.Ay], () => tW.Ay.useReducedMotion),
        r = s.useRef({ count: 0, lastTime: 0 });
    return (0, a.jsx)(q.D, {
        className: c()(n, tX.b3),
        "aria-label": eA.intl.string(eA.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = r.current,
                a = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((r.current = { count: a, lastTime: t }), 3 === a)) {
                if (((r.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tH.Ak)("discodo");
            }
        },
        children: t,
    });
}
let t1 = function (e) {
    let { game: t } = e,
        { isTwoColumn: n } = X(),
        l = t.name;
    return (0, a.jsxs)("div", {
        className: tX.ap,
        children: [
            n && (0, a.jsx)(tZ, { game: t, className: c()(tX.Tf, (0, tz.cO)(t) && tX.wS), imageClassName: tX.w$ }),
            (0, a.jsxs)("div", {
                className: tX.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(tQ, { rank: t.l30Rank }),
                    (0, a.jsxs)("div", {
                        className: tX.$,
                        children: [
                            (0, a.jsx)(et.D, { variant: "heading-xxl/semibold", children: l }),
                            t.id === eZ &&
                                (0, a.jsx)("img", {
                                    src: tK,
                                    className: tX.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, a.jsx)(t$, { game: t }),
                ],
            }),
        ],
    });
};
var t8 = n(141628),
    t4 = n(289363),
    t2 = n(134131);
function t3() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: t2.uW,
        children: [
            (0, a.jsx)(eH, { className: t2.dU, width: "30%" }),
            (0, a.jsxs)(ez, {
                className: t2.nV,
                children: [
                    (0, a.jsx)("div", { className: t2.sB, children: (0, a.jsx)(t4.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: t2.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: t2.Yv,
                                children: [(0, a.jsx)(eH, { width: "55%" }), (0, a.jsx)(eH, { width: "85%" })],
                            }),
                            (0, a.jsx)(eX, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function t5(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, tl.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: i,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: u,
            hasOfficialApplication: d,
            officialApplicationFetchFailed: x,
        } = X(),
        g = (0, m.bG)([H.default], () => H.default.getCurrentUser()),
        f = s.useCallback(() => {
            (t(_.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !d || x || null == g
        ? null
        : null == u || (c && !i)
          ? (0, a.jsx)(t3, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: t2.uW,
                  children: [
                      (0, a.jsx)(et.D, {
                          className: t2.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eA.intl.string(eA.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: t2.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: t2.sB,
                                  children: (0, a.jsx)(t4.default, { application: u }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: t2.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: t2.FS,
                                          children: [
                                              (0, a.jsx)(et.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: eA.intl.formatToPlainString(eA.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, a.jsx)(ee.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: eA.intl.string(eA.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(h.$, {
                                          variant: "secondary",
                                          icon: t8.A,
                                          text: eA.intl.string(eA.t.jynBQ5),
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
var t6 = n(635377),
    t7 = n.n(t6),
    t9 = n(80687),
    ne = n(534573),
    nt = n(248643),
    nn = n(256905),
    nl = n(684519),
    ni = n(191096),
    na = n(90721),
    ns = n(258924);
function nr(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function nc(e, t) {
    return (0, ne.Ec)(e, { size: t, keepAspectRatio: !0, format: tw.QB ? "webp" : null });
}
let no = new (t7())({ max: 100 }),
    nu = s.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [i, r] = s.useState(null),
            o = null != i && i.url === t ? i.isPortrait : (no.get(t) ?? !1),
            u = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (no.set(t, n),
                        r((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            d = s.useCallback((e) => u(e.currentTarget), [u]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: u,
                    src: nc(t, 106),
                    className: c()(ns.r4, !o && ns.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, a.jsx)("img", { ref: u, src: nc(t, 900), className: c()(ns.c8, o && ns.D7, l), alt: n, onLoad: d }),
            ],
        });
    }),
    nd = s.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: i, isPlaying: r, onSelect: o, gameName: u, listItemProps: d } = e,
            m = s.useCallback(() => o(l), [o, l]),
            x = d?.tabIndex;
        return (0, a.jsx)(q.D, {
            ...d,
            className: c()(ns.JS, i && ns.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: ns.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: nc("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: ns.xn,
                        alt: eA.intl.formatToPlainString(eA.t.COYYrn, { game: u }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, a.jsx)("div", {
                            className: ns.UZ,
                            children: (0, a.jsx)(t9.D, { playing: i && r, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nm = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: i,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: u,
            } = e,
            d = s.useRef(null);
        return (
            (0, na.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: d, className: ns.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: ns.tN,
                        children: (0, a.jsx)(nt.A, {
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
                            renderLinkComponent: nl.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: ns.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nx(e) {
    let { game: t, trackAction: n } = e,
        [l, i] = s.useState(0),
        [r, c] = s.useState(null),
        [o, u] = s.useState(t.screenshotUrls),
        d = s.useRef(null),
        x = s.useRef(null),
        g = (0, m.bG)([tW.Ay], () => tW.Ay.useReducedMotion),
        { obscured: h } = (0, ni.I3)(),
        f = ea("game_profile_media");
    o !== t.screenshotUrls && (u(t.screenshotUrls), i(0));
    let j = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eT.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eT.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        p = s.useMemo(() => j.map((e, t) => ({ item: e, index: t })), [j]),
        A = j.length > 0 ? Math.min(l, j.length - 1) : 0,
        v = j[A],
        E = v?.type === "VIDEO",
        I = s.useCallback(
            (e) => {
                let t = j[A],
                    n = j[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), i(e));
            },
            [j, A],
        ),
        [N, b] = s.useState(!1),
        C = s.useRef(null),
        S = s.useCallback(() => {
            n(E ? _.GameProfileTrackActionActions.ClickTrailer : _.GameProfileTrackActionActions.ClickImage);
            let e = d.current,
                t = C.current,
                l = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = j.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === A;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || a, initialTimeSec: n ? s : void 0, videoRef: x };
                }
                return e;
            });
            (0, nn.R)({
                items: r,
                startingIndex: A,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: i,
                onClose: () => {
                    let e = x.current,
                        t = C.current,
                        n = null != e ? !e.paused : l;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        b(n));
                },
            });
        }, [n, j, A, E]),
        k = s.useCallback(() => b(!0), []),
        T = s.useCallback(() => b(!1), []),
        y = s.useCallback(() => c(null), []),
        R = s.useCallback(
            (e) => {
                e && S();
            },
            [S],
        );
    return 0 === j.length
        ? null
        : (0, a.jsxs)("div", {
              className: ns.kL,
              children: [
                  E
                      ? (0, a.jsx)("div", {
                            className: ns.ND,
                            children: (0, a.jsx)(
                                nm,
                                {
                                    item: v,
                                    reducedMotion: g,
                                    autoPlay: !g && !h,
                                    videoRef: d,
                                    mediaPlayerRef: C,
                                    onPlay: k,
                                    onPause: T,
                                    onFullscreenChange: R,
                                },
                                `${A}-${v.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: ns.wp,
                            children: [
                                null != r &&
                                    !g &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: ns.Jy,
                                            onAnimationEnd: y,
                                            children: (0, a.jsx)(nu, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, a.jsx)("div", { className: ns.QN }),
                                (0, a.jsx)(q.D, {
                                    className: ns.gv,
                                    onClick: S,
                                    children: (0, a.jsx)("div", {
                                        className: ns.cs,
                                        children: (0, a.jsx)(
                                            nu,
                                            {
                                                url: v.url,
                                                className: ns.Jf,
                                                alt: eA.intl.formatToPlainString(eA.t.COYYrn, { game: t.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, a.jsx)(eo.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: p,
                            getItemKey: nr,
                            renderItem: (e, n) => {
                                let { item: l, index: i } = e;
                                return (0, a.jsx)(
                                    nd,
                                    {
                                        item: l,
                                        index: i,
                                        isPlaying: N,
                                        isSelected: i === A,
                                        onSelect: I,
                                        gameName: t.name,
                                        listItemProps: n,
                                    },
                                    `${i}-${l.url}`,
                                );
                            },
                        })
                      : (0, a.jsx)(er.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, a.jsx)(
                                    nd,
                                    {
                                        item: e,
                                        index: n,
                                        isPlaying: N,
                                        isSelected: n === A,
                                        onSelect: I,
                                        gameName: t.name,
                                    },
                                    `${n}-${e.url}`,
                                ),
                            ),
                        }),
              ],
          });
}
var ng = n(49381),
    nh = n(661531),
    nf = n(223273);
function nj(e, t, n) {
    if (null == e || null == t || t < 10) return nf.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nf.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nf.vI.VERY_POSITIVE
              : nf.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nf.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nf.vI.MIXED;
    if (e >= 20) return nf.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nf.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nf.vI.VERY_NEGATIVE;
    return nf.vI.OVERWHELMINGLY_NEGATIVE;
}
function np(e) {
    switch (e) {
        case nf.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nf.vI.OVERWHELMINGLY_POSITIVE:
        case nf.vI.VERY_POSITIVE:
        case nf.vI.POSITIVE:
        case nf.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nf.vI.MIXED:
            return "steam-review-text-mixed";
        case nf.vI.MOSTLY_NEGATIVE:
        case nf.vI.NEGATIVE:
        case nf.vI.VERY_NEGATIVE:
        case nf.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nA =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nv = n(778591);
function nE(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        s = i * l;
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
            strokeDasharray: `${s} ${l - s}`,
        }),
    });
}
var nI = n(255417);
function nN(e) {
    let { url: t, trackAction: n, title: l, rating: i, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tE.A)(),
        u = nj(i, r, "recent" === c),
        d = np(u),
        m = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, a.jsx)(q.D, {
        onClick: m,
        className: nI.nf,
        role: "link",
        "aria-label": eA.intl.string(eA.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nI.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nI.tN,
                    children: [
                        (0, a.jsx)(ng.N, { size: "sm", color: nh.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(et.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    g.m,
                    {
                        text:
                            u === nf.vI.NO_USER_REVIEWS
                                ? eA.intl.string(eA.t.CLMt8J)
                                : eA.intl
                                      .format(
                                          "recent" === c
                                              ? eA.t.TzvC0k
                                              : "localized" === c
                                                ? eA.t.EOfrwm
                                                : eA.t["lzANJ/"],
                                          { rating: i, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: nI.Z0,
                            children: [
                                (0, a.jsx)(ee.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: nI.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nf.vI.NO_USER_REVIEWS:
                                                return eA.intl.string(eA.t.CLMt8J);
                                            case nf.vI.OVERWHELMINGLY_POSITIVE:
                                                return eA.intl.string(eA.t["75sx1S"]);
                                            case nf.vI.VERY_POSITIVE:
                                                return eA.intl.string(eA.t["EkOVg+"]);
                                            case nf.vI.POSITIVE:
                                                return eA.intl.string(eA.t.ZUkFtr);
                                            case nf.vI.MOSTLY_POSITIVE:
                                                return eA.intl.string(eA.t.M7Z09a);
                                            case nf.vI.MIXED:
                                                return eA.intl.string(eA.t.c8yuHR);
                                            case nf.vI.MOSTLY_NEGATIVE:
                                                return eA.intl.string(eA.t.H0MSjG);
                                            case nf.vI.NEGATIVE:
                                                return eA.intl.string(eA.t.vpLrgz);
                                            case nf.vI.VERY_NEGATIVE:
                                                return eA.intl.string(eA.t["5spYuX"]);
                                            case nf.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eA.intl.string(eA.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== nf.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(ee.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eA.intl
                                            .format(eA.t.sgIoin, { rating_count: r.toLocaleString() })
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
function nb(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: i } = t,
        r = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tE.A)(),
        x = s.useCallback(() => {
            (l(_.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, a.jsx)(q.D, {
        onClick: x,
        className: nI.nf,
        role: "link",
        "aria-label": eA.intl.string(eA.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nI.Ur,
            children: [
                (0, a.jsx)(et.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eA.intl.string(eA.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nI.WA,
                    children: [
                        null != c ? (0, a.jsx)(nC, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, a.jsx)(nS, { rating: o, tier: c }) : null,
                        d
                            ? (0, a.jsx)(ee.E, {
                                  variant: "text-xs/medium",
                                  color: np(nf.vI.NO_USER_REVIEWS),
                                  children: eA.intl.string(eA.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nC(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nA.MIGHTY:
                    return eA.intl.string(eA.t.aZej2g);
                case nA.STRONG:
                    return eA.intl.string(eA.t.MLxnSg);
                case nA.FAIR:
                    return eA.intl.string(eA.t["3f19KA"]);
                case nA.WEAK:
                    return eA.intl.string(eA.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nA.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nA.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nA.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nA.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, a.jsx)(
        g.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: nI.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nS(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case nA.MIGHTY:
                    t = "#fc430a";
                    break;
                case nA.STRONG:
                    t = "#9e00b4";
                    break;
                case nA.FAIR:
                    t = "#4aa1ce";
                    break;
                case nA.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, a.jsx)(
        g.m,
        {
            text: eA.intl.string(eA.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nI.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(nE, { rating: t, strokeColor: l }),
                    (0, a.jsx)(ee.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nI.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nk = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, tl.c)("GameProfileReviews"),
        i = (0, nv.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED && null != i,
        c = t.reviews?.steam,
        o = nj(c?.recentRating, c?.recentRatingCount, !0),
        u = r && o !== nf.vI.NO_USER_REVIEWS,
        m =
            null != c &&
            null != c.localizedRating &&
            null != c.localizedRatingCount &&
            null != c.ratingCount &&
            c.localizedRatingCount >= 200 &&
            c.ratingCount >= 2e3,
        x = m ? c?.localizedRating : c?.rating,
        g = m ? c?.localizedRatingCount : c?.ratingCount,
        h = m ? eA.t["aWb+V4"] : eA.t["8e4LiB"],
        f = t.reviews?.opencritic != null && null != s;
    return r || u || f
        ? (0, a.jsxs)("div", {
              className: nI.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nI.Gf,
                      children: (0, a.jsx)(et.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eA.intl.string(eA.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nI.kL,
                      children: [
                          u && null != i
                              ? (0, a.jsx)("div", {
                                    className: nI.WH,
                                    children: (0, a.jsx)(nN, {
                                        url: i,
                                        trackAction: n,
                                        title: eA.intl.string(eA.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != i
                              ? (0, a.jsx)("div", {
                                    className: nI.WH,
                                    children: (0, a.jsx)(nN, {
                                        url: i,
                                        trackAction: n,
                                        title: eA.intl.string(h),
                                        rating: x,
                                        ratingCount: g,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          f && null != s
                              ? (0, a.jsx)("div", {
                                    className: nI.WH,
                                    children: (0, a.jsx)(nb, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nT = n(815996),
    ny = n(722258),
    nR = n(258245),
    nL = n(561769),
    nM = n(484469),
    nO = n(57020),
    nP = n(682301);
let nG = [];
var n_ = n(758836),
    nw = n(747828);
let nV = [0, 1, 2, 3, 4];
function nD(e) {
    return e.skuId;
}
let nF = s.createContext({ trackAction: () => {} });
function nU(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        r = s.useContext(nL.v3),
        { trackAction: c } = s.useContext(nF),
        o = s.useRef(null),
        u = s.useCallback(
            (e) => {
                (c(_.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, ny.B)({
                        skuId: i,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, nO.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: d, ...m } = r;
    return (0, a.jsx)(nL.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(nR.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: nw.N,
            onClickCard: u,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function nY() {
    return (0, a.jsx)(nM.A, {});
}
function nW(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = X(),
        { products: i, isLoading: r } = (function (e) {
            let {
                    skuIds: t,
                    hasFetched: n,
                    isFetching: l,
                } = (function (e) {
                    let {
                        hasFetched: t,
                        isFetching: n,
                        skuIds: l,
                    } = (0, m.cf)([w.A], () => ({
                        hasFetched: null != e && w.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && w.A.isShopCollectionFetching(e),
                        skuIds: null != e ? w.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, s.useEffect)(() => {
                            null == e || t || w.A.isShopCollectionFetching(e) || eL(e);
                        }, [e, t]),
                        { skuIds: l ?? nG, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, nP.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nT.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: n_.G2.CATALOG,
                }));
        }, [n, l]),
        o = s.useMemo(() => ({ trackAction: n }), [n]),
        u = ea("game_profile_shop_carousel");
    return r
        ? (0, a.jsx)(eJ, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(eq, { children: nV.map((e) => (0, a.jsx)(nY, {}, e)) }),
          })
        : 0 === i.length
          ? null
          : (0, a.jsx)(nF.Provider, {
                value: o,
                children: (0, a.jsx)(e$, {
                    title: eA.intl.string(eA.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: u
                        ? (0, a.jsx)(eo.A, {
                              gap: "md",
                              items: i,
                              getItemKey: nD,
                              renderItem: (e, t) => (0, a.jsx)(nU, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, a.jsx)(er.A, {
                              gap: "md",
                              children: i.map((e) => (0, a.jsx)(nU, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var nB = n(921138),
    nH = n(311043);
let nz = [],
    nX = [];
var nK = n(607346);
let nJ = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function n$(e) {
    return e.id;
}
function nQ(e) {
    let { className: t } = e;
    return (0, a.jsx)(ez, { className: t, children: (0, a.jsx)(eH, { className: nK.Lg }) });
}
function nq(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: i } = X(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        u = null == r || c === r,
        { shouldOpenGameProfile: d, gameId: m } = (0, nB.Ay)({
            gameId: t.id,
            source: _.GameProfileSources.SimilarGames,
        }),
        x = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                d && null != m && i(m, _.GameProfileSources.SimilarGames));
        }, [t.id, m, n, d, i]),
        h = s.useCallback(() => o(r), [r]);
    return (0, a.jsx)(g.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, a.jsxs)(q.D, {
            ...l,
            className: nK.Nr,
            onClick: x,
            "aria-label": eA.intl.formatToPlainString(eA.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(tz.Ay, {
                    game: t,
                    className: nK.xe,
                    size: tz.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !u && (0, a.jsx)(nQ, { className: nK.uz }),
            ],
        }),
    });
}
function nZ(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: i } = (function (e) {
            let t = !eR.has(e),
                { data: n, isLoading: l, error: i } = eO(e, t),
                a = t && null != n ? n : nz;
            (0, L.x)(a);
            let s = (0, m.bG)(
                    [nH.A],
                    () => a.some((e) => null == nH.A.getGame(e) && !nH.A.hasNoData(e) && !nH.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [nH.A, H.default],
                    () => {
                        let e = H.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => nH.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, nB.T_)(t) && !(0, F.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: nX };
        })(t),
        s = ea("game_profile_similar_games");
    return eR.has(t)
        ? null
        : l
          ? (0, a.jsx)(eJ, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: nK.XG,
                    style: nJ,
                    children: (0, a.jsx)(eq, {
                        children: J()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(nQ, { className: nK.aZ }, e)),
                    }),
                }),
            })
          : 0 === i.length
            ? null
            : (0, a.jsx)(e$, {
                  title: eA.intl.string(eA.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: nK.XG,
                      style: nJ,
                      children: s
                          ? (0, a.jsx)(eo.A, {
                                gap: "md",
                                items: i,
                                getItemKey: n$,
                                itemClassName: nK.cW,
                                renderItem: (e, t) =>
                                    (0, a.jsx)(nq, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(er.A, {
                                gap: "md",
                                children: i.map((e) => (0, a.jsx)(nq, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
n(667532);
var n0 = n(853022);
let n1 = new Set(["1402418703554842694", "356877880938070016"]),
    n8 = [ts.V.EPICGAMES, ts.V.STEAM, ts.V.ROBLOX, ts.V.BATTLENET, ts.V.RIOT, ts.V.MINECRAFT];
var n4 = n(349361),
    n2 = n(924895),
    n3 = n(422688),
    n5 = n(505200),
    n6 = n(695250);
let n7 = function (e) {
    switch (e.category) {
        case ts.V.STEAM:
            return {
                icon: ng.N,
                text: eA.intl.string(eA.t.FsANs4),
                ariaLabel: eA.intl.string(eA.t["P+ePTG"]),
                action: _.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case ts.V.EPICGAMES:
            return {
                icon: n4.r,
                text: eA.intl.string(eA.t.ZbBMHa),
                ariaLabel: eA.intl.string(eA.t.BwX0UW),
                action: _.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case ts.V.ROBLOX:
            return {
                icon: n2.H,
                text: eA.intl.string(eA.t["pJ+P+h"]),
                ariaLabel: eA.intl.string(eA.t.tYxpdf),
                action: _.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case ts.V.BATTLENET:
            return {
                icon: n3.a,
                text: eA.intl.string(eA.t["A7grp+"]),
                ariaLabel: eA.intl.string(eA.t.x9at20),
                action: _.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case ts.V.RIOT:
            return {
                icon: n5.A,
                text: eA.intl.string(eA.t.h6MapL),
                ariaLabel: eA.intl.string(eA.t["528nvc"]),
                action: _.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case ts.V.MINECRAFT:
            return {
                icon: n6.m,
                text: eA.intl.string(eA.t["HZbmO+"]),
                ariaLabel: eA.intl.string(eA.t.WWTqYn),
                action: _.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tS.Y,
                text: eA.intl.string(eA.t["QpN/Iz"]),
                ariaLabel: eA.intl.string(eA.t["8JZmmF"]),
                action: _.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function n9(e) {
    return (0, a.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var le = n(48460);
function lt(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, nv.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ey.d3x.XBOX_GAME_PASS && !(0, ta.uJ)(e.id));
                return t?.id == null ? null : (0, n0.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== ts.V.EPICGAMES || !!n1.has(l)) &&
                            (e.category !== ts.V.STEAM || a !== d.Y.RETIRED_ABANDONED) &&
                            n8.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === d.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === ts.V.STEAM) ||
                    e.push({ category: ts.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === ts.V.STEAM ? -1 : +(t.category === ts.V.STEAM)));
                return (null != n && s.unshift({ category: "XBOX_GAME_PASS", url: n }), s);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function ln(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tE.A)();
    return (0, a.jsx)(n9, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let ll = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: i, storeWebsites: r } = lt(t),
        c = s.useMemo(() => r.map(n7).filter((e) => null != e), [r]);
    if (!i) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(ln, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, a.jsxs)("div", {
            className: le.G,
            children: [(0, a.jsx)(ln, { data: c[0], trackAction: l }), (0, a.jsx)(ln, { data: c[1], trackAction: l })],
        });
    let o = (0, a.jsx)(n9, {
        text: eA.intl.string(eA.t["/hMurx"]),
        "aria-label": eA.intl.string(eA.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, A.openModalLazy)(async () => {
                    let { default: e } = await n.e("176758").then(n.bind(n, 459477));
                    return (n) => (0, a.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, a.jsxs)("div", { className: le.G, children: [(0, a.jsx)(ln, { data: c[0], trackAction: l }), o] })
        : o;
};
var li = n(123292);
function la(e) {
    let { game: t, trackAction: n } = e,
        l = s.useRef(null),
        {
            isExpanded: i,
            showToggle: r,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [n, l] = s.useState("full");
            s.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        l((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return (n.observe(t), () => n.disconnect());
            }, [e]);
            let i = s.useCallback(() => {
                "expanded" === n
                    ? (t(_.GameProfileTrackActionActions.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(_.GameProfileTrackActionActions.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: u } = X(),
        d = s.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = i ? eA.intl.string(eA.t["6MwJo/"]) : eA.intl.string(eA.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: c()(ty.fi, ty.mX),
        children: [
            (0, a.jsx)(ee.E, {
                ref: l,
                className: ty.g5,
                lineClamp: i ? void 0 : d,
                variant: "text-md/medium",
                children: t.description,
            }),
            r && (0, a.jsx)(li.Q, { onClick: o, text: m }),
        ],
    });
}
var ls = n(109112),
    lr = n(761508),
    lc = n(376357),
    lo = n(857250),
    lu = n(97483),
    ld = n(922016),
    lm = n(980707),
    lx = n(477782),
    lg = n(663341),
    lh = n(408278),
    lf = n(34188),
    lj = n(173936),
    lp = n(365199),
    lA = n(789645),
    lv = n(442433),
    lE = n(50268),
    lI = n(44724),
    lN = n(676924),
    lb = n(957565);
let lC = { enabled: !1 },
    lS = (0, el.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: lC,
        variations: { 0: lC, 1: { enabled: !0 } },
    });
function lk(e) {
    let { location: t } = e;
    return lS.useConfig({ location: t }).enabled;
}
var lT = (((i = {}).OVERVIEW = "overview"), (i.COMMUNITIES = "communities"), (i.COMMERCE = "commerce"), i),
    ly = n(695366),
    lR = n(540185),
    lL = n(926268),
    lM = n(53788),
    lO = n(831453),
    lP = n(785866),
    lG = n(555704),
    l_ = n(47675),
    lw = n(633075),
    lV = n(289173),
    lD = n(321191),
    lF = n(958805),
    lU = n(735321),
    lY = n(96173),
    lW = n(280450),
    lB = n(403362);
async function lH(e) {
    let t = e((0, lU.BF)());
    await lF.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function lz(e) {
    var t;
    let l,
        { game: i, className: r, trackAction: c, activeTab: o } = e,
        u = s.useRef(null),
        d = s.useRef(null),
        x = (0, lE.A)({ id: i.id, label: eA.intl.string(eA.t.SHQGPj) }),
        f =
            ((t = i.id),
            (l = s.useCallback(() => {
                null != t &&
                    (c?.(_.GameProfileTrackActionActions.Feedback),
                    (0, A.openModalLazy)(async () => {
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
                        return (n) => (0, a.jsx)(e, { ...n, detected: { gameId: t } });
                    }));
            }, [t, c])),
            null == t
                ? null
                : (0, a.jsx)(lx.Dr, {
                      id: "game-profile-something-wrong",
                      label: eA.intl.string(eA.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: ly.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([lW.default], () => lW.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: lR.x.FAVORITE_GAMES,
                            addLabel: eA.intl.string(eA.t.fgmitg),
                            removeLabel: eA.intl.string(eA.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: lL.HeartIcon,
                        },
                        {
                            type: lR.x.PLAYED_GAMES,
                            addLabel: eA.intl.string(eA.t["0xIVLR"]),
                            removeLabel: eA.intl.string(eA.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: lM.G,
                        },
                        {
                            type: lR.x.CURRENT_GAMES,
                            addLabel: eA.intl.string(eA.t.G0c4En),
                            removeLabel: eA.intl.string(eA.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: lO.H,
                        },
                        {
                            type: lR.x.WANT_TO_PLAY_GAMES,
                            addLabel: eA.intl.string(eA.t.UuBS4K),
                            removeLabel: eA.intl.string(eA.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: lP._,
                        },
                    ],
                    [],
                ),
                r = (0, m.yK)([lD.A], () => (null == l ? [] : (lD.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, lY.A)(),
                o = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof lw.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(lB.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                u = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await lH((i) => {
                                let a = i.filter(lV.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, lU.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new lV.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new lV.Yy({ ...a, games: e });
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
                        (0, l_.un)({
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
                            null == o ||
                            (await lH((n) =>
                                e
                                    ? n.some((e) => e instanceof lw.R && e.applicationId === o)
                                        ? n
                                        : [(t = new lw.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof lw.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof lw.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, l_.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, lU.XX)(e),
                g = [];
            if (null != o) {
                let e = r.some((e) => e instanceof lw.R && e.applicationId === o);
                g.push(
                    (0, a.jsx)(
                        lx.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eA.intl.formatToPlainString(eA.t.Ktb1n8, { name: n })
                                : eA.intl.formatToPlainString(eA.t.Xp6iZt, { name: n }),
                            action: () => d(!e),
                            leadingAccessory: { type: "icon", icon: lG.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let n = r.filter(lV.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, lU.uA)(n);
                    g.push(
                        (0, a.jsx)(
                            lx.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? eA.intl.string(eA.t["86OoiH"]) : void 0,
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
        })(i),
        { closeModal: p } = X(),
        v = lk({ location: "GameProfileOverflowMenu" }),
        E = (0, m.bG)([Y.A], () => Y.A.getApplicationIdFromDetectableId(i.id)),
        I = (0, m.bG)([Y.A], () => Y.A.hasStorefrontForApplicationId(E), [E]),
        b = s.useCallback(() => {
            null != E && (0, lI.G)({ applicationId: E });
        }, [E]),
        C = s.useCallback(() => {
            null != E && (c(_.GameProfileTrackActionActions.GameShop), (0, lI.default)({ applicationId: E }), p());
        }, [E, c, p]),
        S = s.useCallback(() => p(!1), [p]),
        k = s.useCallback(() => {
            c(_.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${ey.BVt.GAME_PROFILE(i.id)}`;
            (0, lb.C)(e, () => {
                (0, lc.P)((0, lo.o)(eA.intl.string(eA.t["+5kSoW"]), lu.Ck.SUCCESS));
            });
        }, [i.id, c]);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            o === lT.COMMERCE &&
                (0, a.jsx)(lN.A, { location: N.A.GAME_PROFILE, onNavigate: p, variant: "overlay-secondary" }),
            null != j &&
                o !== lT.COMMERCE &&
                (0, a.jsx)(ld.Y, {
                    targetElementRef: d,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lm.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, lv.Z_)(), t());
                            },
                            "aria-label": eA.intl.string(eA.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(lx.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: d,
                            children: (0, a.jsx)(h.$, {
                                icon: lg.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eA.intl.string(eA.t.sidPSo),
                            }),
                        }),
                }),
            I &&
                !v &&
                (0, a.jsx)(g.m, {
                    text: eA.intl.string(eA.t.apFNLU),
                    children: (0, a.jsx)(lh.K, {
                        icon: lf.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eA.intl.string(eA.t.apFNLU),
                        onMouseDown: b,
                        onClick: C,
                    }),
                }),
            o !== lT.COMMERCE &&
                (0, a.jsx)(g.m, {
                    text: eA.intl.string(eA.t.WqhZss),
                    children: (0, a.jsx)(lh.K, {
                        icon: lj.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eA.intl.string(eA.t.WqhZss),
                        onClick: k,
                    }),
                }),
            (null != x || null != f) &&
                o !== lT.COMMERCE &&
                (0, a.jsx)(ld.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lm.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, lv.Z_)(), t());
                            },
                            "aria-label": eA.intl.string(eA.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(lx.rX, { children: f }), (0, a.jsx)(lx.rX, { children: x })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(g.m, {
                            text: eA.intl.string(eA.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: u,
                                children: (0, a.jsx)(lh.K, {
                                    icon: lp.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eA.intl.string(eA.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(lh.K, {
                icon: lA.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: S,
                "aria-label": eA.intl.string(eA.t.cpT0Cq),
            }),
        ],
    });
}
let lX = { enabled: !1 },
    lK = (0, el.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: lX,
        variations: { 0: lX, 1: { enabled: !0 } },
    });
function lJ(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i } = n;
    if (
        !(function (e) {
            let { location: t } = e;
            return lK.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let s = eA.intl.string(eA.t["3xFZEo"]);
    return (0, a.jsx)(lr.V.Item, {
        id: lT.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(lT.COMMUNITIES),
        className: t,
        "aria-label": s,
        children: (0, a.jsx)(ee.E, { variant: "text-md/medium", color: "none", children: s }),
    });
}
var l$ = n(331322),
    lQ = n(278416),
    lq = n(478016),
    lZ = n(900797),
    l0 = n(847374),
    l1 = n(421773),
    l8 = n(421108);
let l4 = "text-md/medium",
    l2 = [];
function l3(e) {
    let { label: t, chevron: n, socialLayerStorefront: l } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: n } = e,
                l = Object.values(n?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, l8.ZH)(n));
                }),
                i = (0, l8.tm)(l?.endsAt);
            return t && null != l && !i;
        })(l);
    return (0, a.jsxs)(l$.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, a.jsx)(lQ.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: nh.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, a.jsxs)(l$.B, {
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
function l5(e) {
    let { className: t, label: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: r, selectTab: c } = l,
        { storefront: o, selectedStorefrontPageIndex: u, selectStorefrontPage: d } = i,
        m = o?.pages ?? l2,
        x = s.useRef(null),
        { isHovered: g, setIsHovered: h, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, l1.A)(100, 100),
        A = eA.intl.string(eA.t["J3/JCl"]),
        v = s.useCallback(
            (e) => {
                (p(), h(e));
            },
            [p, h],
        );
    return (0, a.jsx)(ld.Y, {
        targetElementRef: x,
        shouldShow: g,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => v(!0),
        onRequestClose: () => v(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, a.jsx)(lm.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": A,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, a.jsx)(lx.rX, {
                        children: m.map((e, t) => {
                            var n;
                            let l,
                                i = r === lT.COMMERCE && t === u,
                                s =
                                    ((n = e.title),
                                    null != (l = n?.trim()) && l.length > 0
                                        ? l
                                        : eA.intl.formatToPlainString(eA.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, a.jsx)(
                                lx.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: lq.U } : void 0,
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
                o = s ? lZ.t : l0.a;
            return (0, a.jsx)(lr.V.Item, {
                ...e,
                id: lT.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r === lT.COMMERCE ? lT.COMMERCE : void 0,
                onClick: (t) => {
                    (c(lT.COMMERCE), e.onClick(t));
                },
                onMouseLeave: j,
                clickableRef: (e) => {
                    x.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": A,
                "aria-haspopup": "menu",
                children: (0, a.jsx)(ee.E, {
                    variant: l4,
                    color: "none",
                    children: (0, a.jsx)(l3, {
                        label: n,
                        chevron: (0, a.jsx)(o, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function l6(e) {
    let { className: t, navigation: n, socialLayerStorefront: l } = e,
        { selectedTab: i, selectTab: s } = n,
        { hasCommerceTab: r, storefront: c } = l;
    if (!r) return null;
    let o = eA.intl.string(eA.t.apFNLU);
    return (c?.pages.length ?? 0) > 1
        ? (0, a.jsx)(l5, { className: t, label: o, navigation: n, socialLayerStorefront: l })
        : (0, a.jsx)(lr.V.Item, {
              id: lT.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => s(lT.COMMERCE),
              className: t,
              "aria-label": o,
              children: (0, a.jsx)(ee.E, {
                  variant: l4,
                  color: "none",
                  children: (0, a.jsx)(l3, { label: o, socialLayerStorefront: l }),
              }),
          });
}
var l7 = n(510954);
function l9(e) {
    let { game: t, trackAction: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: r, selectTab: c } = l,
        o = t.getIconURL(64),
        [u, d] = s.useState(null),
        m = s.useCallback(() => d(o), [o]),
        x = eA.intl.string(eA.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: l7.wx,
        children: (0, a.jsxs)("div", {
            className: l7.ap,
            children: [
                (0, a.jsx)("div", {
                    className: l7.wE,
                    children:
                        null != o && o !== u
                            ? (0, a.jsx)("img", { src: o, alt: "", className: l7.FC, draggable: !1, onError: m })
                            : (0, a.jsx)(ls._, { size: "md" }),
                }),
                (0, a.jsxs)(lr.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: r,
                    onItemSelect: c,
                    className: l7.vR,
                    children: [
                        (0, a.jsx)(lr.V.Item, {
                            id: lT.OVERVIEW,
                            disableItemStyles: !0,
                            className: l7.Mf,
                            "aria-label": x,
                            children: (0, a.jsx)(ee.E, { variant: "text-md/medium", color: "none", children: x }),
                        }),
                        (0, a.jsx)(lJ, { className: l7.Mf, navigation: l }),
                        (0, a.jsx)(l6, { className: l7.Mf, navigation: l, socialLayerStorefront: i }),
                    ],
                }),
                (0, a.jsx)(lz, { game: t, className: l7.HK, trackAction: n, activeTab: r }),
            ],
        }),
    });
}
var ie = n(439303),
    it = n(658820),
    il = n(787188);
function ii(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, a.jsx)(it.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: N.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: ie.Ye.GAME_PROFILE_GAME_SHOP,
        className: il.kL,
        scrollerClassName: il.XG,
        promotionBannerClassName: il.Rv,
    });
}
var ia = n(871123),
    is = n(317560),
    ir = n(467884),
    ic = n(761812);
function io(e) {
    return e;
}
function iu(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: ic.B, children: t });
}
function id(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        i = ea("social_layer_storefront_card_row"),
        r = s.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    (e.preventDefault(), l(n, i));
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : i
          ? (0, a.jsx)(eo.A, {
                gap: "md",
                "aria-label": `${eA.intl.string(eA.t["kocF+6"])}`,
                items: t,
                getItemKey: io,
                disableFocusRingScope: !0,
                renderItem: (e, t, l) =>
                    (0, a.jsx)(iu, {
                        children: (0, a.jsx)(ir.Ay, {
                            positionInSection: l,
                            skuId: e,
                            variant: ir.s6.SMALL,
                            analyticsLocations: n,
                            onClick: r,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, a.jsx)(er.A, {
                gap: "md",
                "aria-label": eA.intl.string(eA.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, a.jsx)(
                        iu,
                        {
                            children: (0, a.jsx)(ir.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: ir.s6.SMALL,
                                analyticsLocations: n,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var im = n(936785),
    ix = n(403581),
    ig = n(812095),
    ih = n(647474),
    ij = n(162536);
function ip(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, l8.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        s = i ? ix.t : t.Icon;
    return (0, a.jsx)(ih.A, {
        className: c()(ij.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: ij.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: ij.Kk }),
                (0, a.jsx)(ee.E, { variant: "text-sm/normal", color: "currentColor", children: (0, ig.U)(t.text) }),
            ],
        }),
    });
}
var iA = n(521058);
function iv() {
    let { storefrontPromotion: e } = X();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: s } = e;
    if (null == s || (0, ta.uJ)(s.headerText)) return null;
    let r = {
        Icon: (0, im.LZ)(l?.icon ?? null),
        text: s.headerText,
        tooltip: null,
        endsAt: (0, im.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, a.jsx)(ip, { className: iA.v, promotion: r });
}
let iE = [0, 1, 2, 3],
    iI = { placement: ie.Ye.GAME_PROFILE };
function iN() {
    return (0, a.jsx)(eJ, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(eq, { children: iE.map((e) => (0, a.jsx)(iu, { children: (0, a.jsx)(ir.yf, {}) }, e)) }),
    });
}
function ib(e) {
    let { trackAction: t, selectTab: n } = e,
        {
            socialLayerStorefrontRecommendationsData: l,
            socialLayerStorefrontRecommendationsLoading: i,
            hasCommerceTab: r,
            closeModal: c,
        } = X(),
        { analyticsLocations: o } = (0, b.Ay)([N.A.GAME_PROFILE]),
        u = s.useCallback(() => {
            if (l?.application != null) {
                if (r) return void n(lT.COMMERCE);
                (t(_.GameProfileTrackActionActions.GameShop),
                    c(),
                    (0, lI.default)({ applicationId: l.application.id }));
            }
        }, [l, t, r, n, c]),
        d = s.useCallback(
            (e, n) => {
                let i = l?.guildId;
                null != i &&
                    (t(_.GameProfileTrackActionActions.GameShopItem),
                    (0, is.R)({
                        skuId: e,
                        applicationId: n,
                        isStorefront: !1,
                        analyticsLocations: o,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, ia.rG)(e, t, n, i) && c();
                        },
                    }));
            },
            [t, c, o, l],
        );
    if (i) return (0, a.jsx)(iN, {});
    if (null == l) return null;
    let { skuIds: m } = l;
    return (0, a.jsxs)(e$, {
        title: eA.intl.string(eA.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, a.jsx)(iv, {}),
            (0, a.jsx)(ie.E9, {
                newValue: iI,
                children: (0, a.jsx)(id, { skuIds: m, analyticsLocations: o, onCardClick: d }),
            }),
        ],
    });
}
var iC = n(733391),
    iS = n(171616);
let ik = {
        [lT.OVERVIEW]: _.GameProfileTrackActionActions.Overview,
        [lT.COMMUNITIES]: _.GameProfileTrackActionActions.Communities,
        [lT.COMMERCE]: _.GameProfileTrackActionActions.GameShop,
    },
    iT = s.memo(function (e) {
        let { game: t, trackAction: n, selectTab: l, getScrollOffset: i } = e;
        return (0, a.jsxs)("div", {
            className: ty.oC,
            children: [
                (0, a.jsxs)("div", {
                    className: ty.lM,
                    children: [
                        (0, a.jsx)(nx, { game: t, trackAction: n }),
                        (0, a.jsx)(la, { game: t, trackAction: n }),
                    ],
                }),
                (0, a.jsx)(tn, { gameId: t.id, trackAction: n, getScrollOffset: i }),
                (0, a.jsx)(ib, { trackAction: n, selectTab: l }),
                (0, a.jsx)(nW, { game: t, trackAction: n }),
                (0, a.jsx)(nZ, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    iy = s.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l, selectTab: i, getScrollOffset: s } = e,
            r = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
        return (0, a.jsxs)("div", {
            className: ty.V0,
            children: [
                (0, a.jsx)(nx, { game: t, trackAction: n }),
                (0, a.jsxs)("div", {
                    className: ty.gr,
                    children: [
                        (0, a.jsx)(tq, { game: t, isTwoColumn: !1 }),
                        (0, a.jsxs)("div", {
                            className: ty.E1,
                            children: [
                                (0, a.jsx)(ll, { game: t, trackAction: n }),
                                (0, a.jsx)(la, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(t5, { analyticsLocations: l, trackAction: n }),
                (0, a.jsx)(tU, { trackAction: n }),
                (0, a.jsx)(tn, { gameId: t.id, trackAction: n, getScrollOffset: s }),
                (0, a.jsx)(ib, { trackAction: n, selectTab: i }),
                (0, a.jsx)(nW, { game: t, trackAction: n }),
                (0, a.jsx)(nZ, { gameId: t.id, trackAction: n }),
                r && (0, a.jsx)(nk, { game: t, trackAction: n }),
                (0, a.jsx)(tG, { game: t, trackAction: n }),
            ],
        });
    });
function iR(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: i } = X();
    (0, C.A)({
        name: o.ImpressionNames.CLOUD_PLAY_CTA,
        type: o.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = s.useCallback(() => {
        (l(_.GameProfileTrackActionActions.CloudPlay), i(), t());
    }, [i, t, l]);
    return (0, a.jsx)(g.m, {
        text: eA.intl.string(eA.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(h.$, {
            icon: f.h,
            text: eA.intl.string(eA.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function iL(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: i } = e,
        s = (0, I.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, a.jsx)("div", {
              className: ty.NC,
              children: (0, a.jsx)(iR, { onCloudPlayClick: s, analyticsLocations: l, trackAction: i }),
          });
}
function iM(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        i = (0, E.A)(t.linkedApplications)?.id,
        [s] = (0, M.L_)(t.getOfficialApplicationId()),
        [r] = (0, M.L_)(t.id),
        { showsStoreLinks: o } = lt(t),
        u = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: c()(ty.Pn, ty.fi, ty.iH, o ? ty.sV : ty.gF),
        children: [
            null == i || s || r
                ? null
                : (0, a.jsx)(iL, { gameId: t.id, cloudPlayAppId: i, analyticsLocations: l, trackAction: n }),
            (0, a.jsxs)("div", {
                className: ty.V0,
                children: [
                    (0, a.jsx)(ll, { game: t, trackAction: n }),
                    (0, a.jsx)(t5, { analyticsLocations: l, trackAction: n }),
                    (0, a.jsx)(tU, { trackAction: n }),
                    u && (0, a.jsx)(nk, { game: t, trackAction: n }),
                    (0, a.jsx)(tG, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function iO(e) {
    let {
            game: t,
            isTwoColumn: n,
            selectTab: l,
            selectionVersion: i,
            initialScrollOffset: r,
            appContext: c,
            source: o,
            trackExternalAction: u,
            trackAction: d,
            analyticsLocations: m,
        } = e,
        x = s.useRef(null),
        g = s.useRef(null),
        h = s.useRef(i);
    (s.useLayoutEffect(() => {
        0 === i && null != r && r > 0 && g.current?.getScrollerNode()?.scrollTo({ top: r, behavior: "instant" });
    }, [r, i]),
        s.useLayoutEffect(() => {
            i !== h.current &&
                (g.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }), (h.current = i));
        }, [i]));
    let f = s.useCallback(() => g.current?.getScrollerNode()?.scrollTop ?? 0, []),
        A = s.useCallback((e) => {
            if (null != x.current) {
                let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
                x.current.style.opacity = String(t);
            }
        }, []);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tJ, { game: t, ref: x }),
            (0, a.jsxs)(j.Ch, {
                ref: g,
                className: ty.XG,
                onScroll: A,
                children: [
                    (0, a.jsx)("div", { className: ty.xY, "aria-hidden": !0 }),
                    (0, a.jsx)(t1, { game: t }),
                    (0, a.jsx)(p.F, {
                        children: n
                            ? (0, a.jsxs)("div", {
                                  className: ty.jC,
                                  children: [
                                      (0, a.jsx)(iT, { game: t, trackAction: d, selectTab: l, getScrollOffset: f }),
                                      (0, a.jsx)(iM, {
                                          game: t,
                                          appContext: c,
                                          source: o,
                                          trackExternalAction: u,
                                          trackAction: d,
                                          analyticsLocations: m,
                                      }),
                                  ],
                              })
                            : (0, a.jsx)("div", {
                                  className: ty.b9,
                                  children: (0, a.jsx)(iy, {
                                      game: t,
                                      trackAction: d,
                                      analyticsLocations: m,
                                      selectTab: l,
                                      getScrollOffset: f,
                                  }),
                              }),
                    }),
                ],
            }),
        ],
    });
}
function iP(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: i,
            onClose: r,
            appContext: o,
            trackExternalAction: d,
            initialScrollOffset: g,
            navigateToGame: h,
        } = e,
        [f, j] = s.useState(!0),
        [p, E] = s.useState(null),
        { clientThemesClassName: I } = (0, T.Ay)(),
        C = (0, m.bG)([G.default], () => G.default.locale),
        M = s.useMemo(() => (0, _.generateViewId)(), []),
        { analyticsLocations: X } = (0, b.Ay)(N.A.GAME_PROFILE),
        K = (0, V.s)(t),
        { data: J } = (0, L.I)(t),
        $ = J?.getOfficialApplicationId(),
        Q = (0, D.rG)(J),
        q = null != $,
        Z = (0, m.bG)([k.A], () => null != $ && k.A.didFetchingApplicationFail($), [$]),
        ee = J?.name ?? "",
        et = (0, F.A)(J),
        en = s.useRef(null);
    s.useEffect(() => {
        en.current = p;
    }, [p]);
    let {
            hasAlreadyLinked: el,
            canStartAuthorization: ei,
            fetched: ea,
            startAuthorization: es,
            connectionApp: er,
        } = (0, S.RD)(J),
        { invite: ec, isMember: eo, isResolving: eu } = (0, D.Ay)(J, E),
        { socialLayerStorefrontRecommendationsData: ed, socialLayerStorefrontRecommendationsLoading: em } = (function (
            e,
        ) {
            let t = H.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [Y.A],
                    () => ({
                        storefrontApplicationId: null != e ? Y.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === Y.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, U.h)(l),
                r = (0, m.bG)([k.A], () => null != l && k.A.didFetchingApplicationFail(l), [l]),
                c = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: u } = (0, B.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: W.B.USER_PROFILE,
                }),
                d = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== u || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, u, o],
                ),
                x = "loading" === u,
                g = "success" === u && o.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: d,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (x || g),
            };
        })(t),
        ex = s.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, _.getGuildIdAndVerifiedFromInvite)(en.current);
                (0, _.trackGameProfileAction)({
                    gameName: ee,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: M,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [ee, t, M, n],
        );
    ((0, v.Ay)(() => {
        ((0, _.trackGameProfileOpen)({
            source: n,
            viewId: M,
            gameId: t,
            gameName: ee,
            authorId: l,
            profileType: _.GameProfileTypes.FullProfile,
        }),
            (0, y.He)());
    }),
        (0, v.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, _.getGuildIdAndVerifiedFromInvite)(en.current),
                l = Date.now(),
                i = K.map((e) => {
                    let t = (0, R.JM)(e) ? (0, R.W6)(e, l) : (0, R.aJ)(e, C);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, _.trackGameProfileClose)({
                viewId: M,
                gameId: t,
                gameName: ee,
                playedFriendIds: K.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: w.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let eg = s.useCallback((e) => {
            j(e.contentRect.width >= 800);
        }, []),
        eh = (0, u.w)(eg, [], { fireOnMount: !0 }),
        ef = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, A.closeAllModals)(), (0, P.M)()) : r();
            },
            [r],
        ),
        ej = s.useCallback(() => ef(!1), [ef]),
        { navigation: ep, selectionVersion: eA } = (function (e) {
            let [t, n] = s.useState(lT.OVERVIEW),
                [l, i] = s.useState(0),
                a = s.useCallback((e) => {
                    (n(e), i((e) => e + 1));
                }, []),
                r = s.useCallback(
                    (n) => {
                        if (n !== t) {
                            let t = ik[n];
                            null != t && e(t);
                        }
                        a(n);
                    },
                    [t, a, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: t, selectTab: r }), [t, r]), selectionVersion: l };
        })(ex),
        { selectedTab: ev } = ep,
        eE = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                c = lk({ location: "GameProfileModal" });
            s.useEffect(() => {
                c && (0, iC.Xw)();
            }, [c]);
            let o = (0, m.bG)(
                    [Y.A],
                    () =>
                        (null != a ? Y.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && Y.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                u = c && null != o,
                { storefront: d } = (0, iS.A)({ applicationId: u ? o : null }),
                [x, g] = s.useState({ storefrontId: d?.id, index: 0 }),
                [h, f] = s.useState(l);
            l !== h && (f(l), l !== lT.COMMERCE && g({ storefrontId: d?.id, index: 0 }));
            let j = x.storefrontId === d?.id && x.index < (d?.pages.length ?? 0) ? x.index : 0,
                p = s.useCallback(
                    (e) => {
                        !u ||
                            e < 0 ||
                            e >= (d?.pages.length ?? 0) ||
                            (g({ storefrontId: d?.id, index: e }), i(lT.COMMERCE));
                    },
                    [u, i, d],
                );
            return {
                hasCommerceTab: u,
                storefrontApplicationId: o,
                storefront: d,
                selectedStorefrontPageIndex: j,
                selectStorefrontPage: p,
            };
        })({ game: J, navigation: ep }),
        { hasCommerceTab: eI, storefrontApplicationId: eN, storefront: eb, selectedStorefrontPageIndex: eC } = eE,
        eS = Object.values(eb?.promotions ?? {})[0] ?? null,
        ek = s.useMemo(
            () => ({
                isTwoColumn: f,
                canStartAuthorization: ei,
                hasAlreadyLinked: el,
                fetchedAuthorization: ea,
                startAuthorization: es,
                connectionApp: er,
                invite: ec,
                hasDiscordWebsite: Q,
                hasOfficialApplication: q,
                officialApplicationFetchFailed: Z,
                isCommunityInviteResolving: eu,
                isMember: eo,
                socialLayerStorefrontRecommendationsData: ed,
                socialLayerStorefrontRecommendationsLoading: em,
                hasCommerceTab: eI,
                storefrontPromotion: eS,
                closeModal: ef,
                navigateToGame: h,
            }),
            [f, ei, el, ea, es, er, ec, Q, q, Z, eu, eo, ed, em, eI, eS, ef, h],
        );
    return null == J
        ? null
        : (0, a.jsx)(b.f5, {
              value: X,
              children: (0, a.jsx)(x.N, {
                  transitionState: i,
                  onClose: r,
                  children: (0, a.jsx)(z.Provider, {
                      value: ek,
                      children: (0, a.jsx)("div", {
                          className: c()(I, ty.kL),
                          ref: eh,
                          children: (0, a.jsxs)(O.A, {
                              obscured: et,
                              onClose: ej,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: ty.sx,
                                      children: (0, a.jsx)(l9, {
                                          game: J,
                                          trackAction: ex,
                                          navigation: ep,
                                          socialLayerStorefront: eE,
                                      }),
                                  }),
                                  ev === lT.OVERVIEW &&
                                      (0, a.jsx)(iO, {
                                          game: J,
                                          selectTab: ep.selectTab,
                                          selectionVersion: eA,
                                          initialScrollOffset: g,
                                          isTwoColumn: f,
                                          appContext: o,
                                          source: n,
                                          trackExternalAction: d,
                                          trackAction: ex,
                                          analyticsLocations: X,
                                      }),
                                  ev === lT.COMMERCE && (0, a.jsx)(ii, { applicationId: eN, selectedPageIndex: eC }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let iG = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, ...r } = e,
        [c, o] = s.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i }),
        u = c.gameId,
        d = s.useCallback(
            (e, t) => {
                e !== u && ((0, D.UT)(e), o({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, a.jsx)(
        iP,
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
