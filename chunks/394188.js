n.d(t, { default: () => ir });
var l,
    i,
    a = n(477900),
    s = n(582128),
    r = n(503698),
    c = n.n(r),
    o = n(562708),
    d = n(535185),
    u = n(792216),
    m = n(17928),
    x = n(521489),
    h = n(866665),
    g = n(821609),
    f = n(414499),
    j = n(192308),
    A = n(689175),
    p = n(707554),
    v = n(964486),
    E = n(881698),
    I = n(146779),
    N = n(793574),
    k = n(688810),
    b = n(139286),
    S = n(206828),
    T = n(587895),
    C = n(590703),
    y = n(180170),
    L = n(583846),
    R = n(569926),
    P = n(928550),
    G = n(570962),
    _ = n(831024),
    O = n(402860),
    M = n(773669),
    w = n(409626),
    V = n(422069),
    D = n(945810);
let F = { enabled: !1 },
    U = (0, D.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: F,
        variations: { 0: F, 1: { enabled: !0 } },
    });
function Y(e) {
    let { location: t } = e;
    return U.useConfig({ location: t }).enabled;
}
var W = n(205184),
    B = n(957807),
    H = n(49491),
    z = n(429913),
    X = n(832163),
    K = n(594832),
    J = n(862772),
    $ = n(287809);
let Q = s.createContext(void 0);
function q() {
    let e = s.useContext(Q);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var Z = n(435558),
    ee = n.n(Z),
    et = n(621466),
    en = n(966697),
    el = n(939249),
    ei = n(346055),
    ea = n(834730),
    es = n(297264),
    er = n(460905);
let ec = (0, D.mj)({
    name: "2026-09-new-horizontal-scroll-shared",
    kind: "user",
    defaultConfig: { useNewHScroll: !1 },
    variations: { 0: { useNewHScroll: !1 }, 1: { useNewHScroll: !0 } },
});
function eo(e) {
    return ec.useConfig({ location: e }).useNewHScroll;
}
var ed = n(776231),
    eu = n(449543),
    em = n(46054),
    ex = n(197935),
    eh = n(58703);
n(321073);
var eg = n(155718),
    ef = n(387408),
    ej = n(731068),
    eA = n(59318),
    ep = n(320095),
    ev = n(708676),
    eE = n(383233),
    eI = n(998218),
    eN = n(375708);
let ek = /^#{1,3}\s+(.+)$/,
    eb = /^https?:\/\/\S+$/;
var eS = n(60465),
    eT = n(158390),
    eC = n(636537),
    ey = n(228366),
    eL = n(103348),
    eR = n(927813),
    eP = n(371794),
    eG = n(652215);
let e_ = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function eO(e) {
    ey.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eP.aP)({
                    url: eG.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: M.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(eL.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (ey.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            ey.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        ey.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eM(e) {
    let t = ((await eC.Bo.get({ url: eG.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !e_.has(t),
    );
    ey.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let ew = (0, m.UT)(V.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => V.A.getSimilarGames(e) ?? null,
    load: (e) => eM(e),
    retryConfig: { backoff: () => new eT.A(5 * eR.A.Millis.SECOND, 5 * eR.A.Millis.MINUTE) },
    failureStaleAfter: eR.A.Seconds.MINUTE,
});
async function eV(e, t) {
    ey.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eC.Bo.get({ url: eG.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        ey.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, ef.A)((0, ep.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, eE._c)(e))
                            return e.components
                                .filter((e) => e.type === eg.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || eb.test(t.trim())
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
                        if ((0, eE._c)(e)) {
                            let t = e.components.find((e) => e.type === eg.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, ej.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, eA.tT)(e.content_type));
                        if (null != t) return (0, ej.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, eA.XB)(e.content_type));
                        if (null != n) return (0, ej.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, ej.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, ej.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, ej.oU)(
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(ek)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    d =
                        a === i || (0, eE._c)(l)
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
                    embedSource: d,
                    poll: l.poll,
                };
            }),
            channelId: l.channel_id ?? void 0,
            guildId: l.guild_id ?? void 0,
        });
    } catch (t) {
        ey.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eD = n(284009),
    eF = n.n(eD),
    eU = n(376728),
    eY = n(976860),
    eW = n(71393),
    eB = n(449054);
async function eH(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eF()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eW.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eG.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eB.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eG.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eU.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eY.pX)(eG.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var ez = n(320448),
    eX = n(493285);
let eK = { sm: eX.nz, md: eX.a };
function eJ(e) {
    let { className: t, width: n } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(eX.qf, t), style: { width: n } });
}
function e$(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: l, style: i, children: n });
}
function eQ(e) {
    let { className: t, size: n = "md" } = e;
    return (0, a.jsx)(eJ, { className: c()(eX.x6, eK[n], t) });
}
var eq = n(406510);
function eZ(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, a.jsxs)("div", {
        className: eq.kL,
        "aria-busy": !0,
        children: [
            (0, a.jsxs)("div", {
                className: eq.wR,
                children: [(0, a.jsx)(eJ, { className: eq.Iz, width: n }), l && (0, a.jsx)(eQ, { size: "sm" })],
            }),
            t,
        ],
    });
}
function e0(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, a.jsxs)("div", {
        className: eq.kL,
        children: [
            (0, a.jsxs)("div", {
                className: eq.wR,
                children: [
                    (0, a.jsx)(es.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, a.jsx)(g.$, {
                            size: "sm",
                            icon: ez._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eN.intl.string(eN.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var e1 = n(949959);
function e8(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(e1.n, { [e1.C]: 16 === n }), children: t });
}
var e4 = n(235240),
    e2 = n(165648);
function e5(e, t) {
    return em.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e6(e) {
    return e.id;
}
function e3() {
    return (0, a.jsxs)(e$, {
        className: e4.s7,
        children: [
            (0, a.jsx)(eJ, { className: e4.o$ }),
            (0, a.jsxs)("div", {
                className: e4.UF,
                children: [(0, a.jsx)(eJ, { className: e4.iX }), (0, a.jsx)(eJ, { className: e4.jt })],
            }),
        ],
    });
}
function e9(e, t) {
    var n;
    let l,
        i = (0, ed.kr)(364 * (0, ed.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = eI.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function e7(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, r] = s.useState(!1),
        c = s.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, a.jsx)(en.y, {
              readyState: i ? eG.Rv1.READY : eG.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, a.jsx)("img", {
                  src: n,
                  className: e4.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function te(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, et.vq)(e.target, HTMLAnchorElement) ||
                        ((0, et.vq)(e.target, HTMLSpanElement) && (0, et.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        d = t.media?.proxyUrl ?? t.media?.url,
        u = null != d ? e9(d, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, a.jsx)(el.D, {
              ...i,
              className: e4.Nr,
              onClick: r,
              children: (0, a.jsxs)(ei.M, {
                  className: e4.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(ea.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: e4.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: e4._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: e4.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: e4.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, a.jsx)(ea.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != u &&
                                  (0, a.jsx)("div", {
                                      className: e4.ax,
                                      children: (0, a.jsx)(e7, { message: t, src: u, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(es.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: e4.DD,
                                      children: e5(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: c()(e4.h_, e2.PT),
                                      children: [e5(t.body, n), (0, a.jsx)("div", { className: e4.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: e4.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: e4.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, a.jsxs)(ea.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, eh.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, a.jsxs)("div", {
                                              className: e4.a5,
                                              children: [
                                                  (0, a.jsx)(er.n, { size: "xs", color: "currentColor" }),
                                                  (0, a.jsx)(ea.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eN.intl.currentLocale).format(
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
let tt = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, a.jsxs)(ei.M, {
        className: e4.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(es.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e4.DD,
                    children: e5(t.title, n),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: c()(e4.h_, e2.PT),
                    children: [e5(t.body, n), (0, a.jsx)("div", { className: e4.fm })],
                }),
            (0, a.jsxs)("div", {
                className: e4.ov,
                children: [
                    (0, a.jsx)(ea.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, eh.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: e4.a5,
                            children: [
                                (0, a.jsx)(er.n, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(ea.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(eN.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function tn(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, et.vq)(e.target, HTMLAnchorElement) ||
                        ((0, et.vq)(e.target, HTMLSpanElement) && (0, et.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? e9(o, c) : void 0;
    return (0, a.jsxs)(el.D, {
        ...i,
        className: e4.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != d &&
                (0, a.jsx)("div", {
                    className: e4.Vl,
                    children: (0, a.jsx)(e7, { message: t, src: d, aspectRatio: c }),
                }),
            (0, a.jsx)(tt, { message: t, channelId: n }),
        ],
    });
}
function tl(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        r = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(el.D, {
        ...l,
        className: e4.Nr,
        onClick: r,
        children: (0, a.jsxs)(ei.M, {
            className: e4.zI,
            children: [
                (0, a.jsx)(es.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e4.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: e4.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: e4.Nf,
                                    children: (0, a.jsx)(ea.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e4.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, a.jsx)(ea.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: e4.PF,
                                children: eN.intl.format(eN.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: e4.ov,
                    children: (0, a.jsx)(ea.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eN.intl.format(eN.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, ev.J)(i.expiry) ?? eN.intl.string(eN.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function ti(e) {
    return null != e.message.poll
        ? (0, a.jsx)(tl, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(te, { ...e })
          : (0, a.jsx)(tn, { ...e });
}
let ta = s.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, k.Ay)(),
        { invite: i, hasDiscordWebsite: r, closeModal: c, getScrollOffset: o } = q(),
        {
            messages: d,
            guildId: u,
            channelId: x,
            loading: h,
            hasFetched: g,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, m.cf)([V.A], () => ({
                data: null != e ? V.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && V.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && V.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, s.useEffect)(() => {
                    null == e || n || V.A.isAnnouncementsFetching(e) || eV(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = eo("game_profile_announcements"),
        j = s.useCallback(() => {
            let e = i?.guild?.id ?? u;
            null != e &&
                null != x &&
                (n(w.GameProfileTrackActionActions.Announcements),
                eS.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                c(),
                eH({ invite: i, guildId: e, channelId: x, analyticsLocationStack: l }));
        }, [n, c, o, i, u, x, l, t]),
        A = s.useCallback(
            (e) => {
                let a = i?.guild?.id ?? u;
                null != a &&
                    null != x &&
                    (n(w.GameProfileTrackActionActions.AnnouncementsItem),
                    eS.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                    c(),
                    eH({ invite: i, guildId: a, channelId: x, messageId: e, analyticsLocationStack: l }));
            },
            [n, c, o, i, u, x, l, t],
        ),
        p = null != x && d.length > 0;
    return (!g || h) && r
        ? (0, a.jsx)(eZ, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(e8, {
                  gap: 16,
                  children: ee()
                      .range(3)
                      .map((e) => (0, a.jsx)(e3, {}, e)),
              }),
          })
        : p
          ? (0, a.jsx)(e0, {
                title: eN.intl.string(eN.t.B0BV3Y),
                onClickViewAll: j,
                children: f
                    ? (0, a.jsx)(ex.A, {
                          gap: 16,
                          items: d,
                          getItemKey: e6,
                          itemClassName: e4.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(ti, { message: e, channelId: x, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(eu.A, {
                          gap: 16,
                          children: d.map((e) => (0, a.jsx)(ti, { message: e, channelId: x, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var ts = n(37537),
    tr = n(541830),
    tc = n(240248),
    to = n(505779),
    td = n(808380);
let tu = [td.Y.DESKTOP, td.Y.XBOX, td.Y.PLAYSTATION, td.Y.NINTENDO];
var tm = n(28863),
    tx = n(975807),
    th = n(194362);
function tg(e) {
    let { game: t, trackAction: n } = e,
        l = s.useCallback(async () => {
            n(w.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, th.a)(eG.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tx.A)(e);
        }, [n]),
        i = s.useCallback((e) => (0, a.jsx)(tm.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === eg.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(ea.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eN.intl.format(eN.t.KAjfKl, { claimLink: i }),
          });
}
var tf = n(998445),
    tj = n(274997),
    tA = n(80500),
    tp = n(319745),
    tv = n(488225),
    tE = n(967492),
    tI = n(72265),
    tN = n(454346),
    tk = n(37948),
    tb = n(750013);
let tS = { size: "xs", colorClass: tb.wP };
function tT(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tk.A)(),
        {
            action: i,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case to.V.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(tf.GlobeEarthIcon, { ...t }),
                        action: w.GameProfileTrackActionActions.WebsiteLink,
                        title: eN.intl.string(eN.t.fOUKvg),
                    };
                case to.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(tj.p, { ...t }),
                        action: w.GameProfileTrackActionActions.XLink,
                        title: eN.intl.string(eN.t.INic4y),
                    };
                case to.V.YOUTUBE:
                    return {
                        action: w.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(tA.C, { ...t }),
                        title: eN.intl.string(eN.t.lNmxbE),
                    };
                case to.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(tp.Z, { ...t }),
                        action: w.GameProfileTrackActionActions.FacebookLink,
                        title: eN.intl.string(eN.t.FjyREK),
                    };
                case to.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(tv.L, { ...t }),
                        action: w.GameProfileTrackActionActions.InstagramLink,
                        title: eN.intl.string(eN.t["cgR+IK"]),
                    };
                case to.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(tE.a, { ...t }),
                        action: w.GameProfileTrackActionActions.BlueskyLink,
                        title: eN.intl.string(eN.t["D/PHq5"]),
                    };
                case to.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(tI.T, { ...t }),
                        action: w.GameProfileTrackActionActions.RedditLink,
                        title: eN.intl.string(eN.t["Hgb+fc"]),
                    };
                case to.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(tN.a, { ...t }),
                        action: w.GameProfileTrackActionActions.TwitchLink,
                        title: eN.intl.string(eN.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tS),
        o = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, a.jsx)(h.m, {
        text: c,
        children: (0, a.jsx)(el.D, { onClick: o, className: tb.yO, title: c, children: r }),
    });
}
var tC = n(31300),
    ty = n(802516),
    tL = n(22363),
    tR = n(418524),
    tP = n(672572);
function tG(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case td.Y.DESKTOP:
            return (0, a.jsx)(tC.k, { size: "xs", ...n });
        case td.Y.XBOX:
            return (0, a.jsx)(ty.Y, { size: "xs", ...n });
        case td.Y.PLAYSTATION:
            return (0, a.jsx)(tL.X, { size: "xs", ...n });
        case td.Y.NINTENDO:
            return (0, a.jsx)(tR.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function t_(e) {
    let { platform: t } = e;
    return (0, a.jsx)(
        h.m,
        {
            text: (function (e) {
                switch (e) {
                    case td.Y.DESKTOP:
                        return eN.intl.string(eN.t.KT6uCJ);
                    case td.Y.XBOX:
                        return eN.intl.string(eN.t.DDWUJp);
                    case td.Y.PLAYSTATION:
                        return eN.intl.string(eN.t.fzMz2s);
                    case td.Y.NINTENDO:
                        return eN.intl.string(eN.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(tG, { platform: t }),
        },
        t,
    );
}
var tO = n(424994),
    tM = n(422384);
function tw() {
    return (0, a.jsx)(ea.E, { variant: "text-sm/normal", color: "text-subtle", children: eN.intl.string(eN.t.GruYxV) });
}
let tV = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, ts.c)("GameProfileGameDetails"),
        i = s.useMemo(() => t.genres.map(tr.du).join(", "), [t]),
        r = t.getCompanyByRole(eg.wk.PUBLISHER),
        c = t.getCompanyByRole(eg.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        d = c.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        m = s.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(td.Y.DESKTOP) && (e.has(td.Y.MACOS) || e.has(td.Y.LINUX)) && n.push(td.Y.DESKTOP),
                n.filter((e) => tu.includes(e)).sort((e, t) => tu.indexOf(e) - tu.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return to.p.includes(t);
            })
            .sort((e, t) => to.p.indexOf(e.category) - to.p.indexOf(t.category)),
        h = !(0, tc.uJ)(i),
        g = !(0, tc.uJ)(o),
        f = !(0, tc.uJ)(d),
        j = !(0, tc.uJ)(u),
        A = m.length > 0,
        p = x.length > 0 && !x.every((e) => (0, tc.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: tM.uW,
        children: [
            (0, a.jsx)("div", {
                className: tM.Gf,
                children: (0, a.jsx)(es.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: eN.intl.string(eN.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tM.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: tM.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eN.intl.string(eN.t.pDgwYB) : eN.intl.string(eN.t.mjFKqn),
                            }),
                            h
                                ? (0, a.jsx)(ea.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tM.Gu,
                                      children: i,
                                  })
                                : (0, a.jsx)(tw, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tM.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eN.intl.string(eN.t.Hc7Enk) : eN.intl.string(eN.t["4Byy/G"]),
                            }),
                            g
                                ? (0, a.jsx)(ea.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tM.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(tw, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tM.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? eN.intl.string(eN.t.KATEJB) : eN.intl.string(eN.t.na3PT0),
                            }),
                            f
                                ? (0, a.jsx)(ea.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tM.Gu,
                                      children: d,
                                  })
                                : (0, a.jsx)(tw, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tM.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eN.intl.string(eN.t.H3mPDT),
                            }),
                            j
                                ? (0, a.jsx)(ea.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tM.Gu,
                                      children: eh.i$(new Date(u), "LL"),
                                  })
                                : (0, a.jsx)(tw, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tM.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? eN.intl.string(eN.t.PNqxNe) : eN.intl.string(eN.t["UxAag+"]),
                            }),
                            A
                                ? (0, a.jsx)("div", {
                                      className: tM.Gu,
                                      children: m.map((e) => (0, a.jsx)(t_, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(tw, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tM.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eN.intl.string(eN.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, a.jsx)("div", {
                                      className: tM.Gu,
                                      children: x.map((e) => (0, a.jsx)(tT, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, a.jsx)(tw, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tM.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eN.intl.string(eN.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tM.Gu,
                                children: eN.intl.format(eN.t.XPFZVl, { igdbLink: tO.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: tM.OQ, children: (0, a.jsx)(tg, { game: t, trackAction: n }) }),
        ],
    });
};
var tD = n(714991),
    tF = n(486020),
    tU = n(992638);
function tY() {
    return (0, a.jsxs)(e$, {
        className: tU.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(eJ, { className: tU.dU, width: "30%" }),
            (0, a.jsx)(e$, {
                className: tU.nV,
                children: (0, a.jsxs)("div", {
                    className: tU.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tU.To,
                            children: [
                                (0, a.jsx)(eJ, { className: tU.QV }),
                                (0, a.jsxs)("div", {
                                    className: tU.Yv,
                                    children: [
                                        (0, a.jsx)(eJ, { className: tU.Ag }),
                                        (0, a.jsx)(eJ, { className: tU.zl }),
                                        (0, a.jsx)(eJ, { className: tU.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(eQ, {}),
                    ],
                }),
            }),
        ],
    });
}
function tW(e) {
    let { guild: t } = e,
        n = tF.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        r = null != n && l !== n,
        c = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, a.jsxs)("div", {
        className: tU._C,
        children: [
            r && (0, a.jsx)(eJ, { className: tU.EQ }),
            (0, a.jsx)("img", {
                className: tU.$f,
                src: n,
                alt: eN.intl.formatToPlainString(eN.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tB(e) {
    let { trackAction: t } = e,
        n = (0, ts.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: i, isCommunityInviteResolving: r, isMember: c, closeModal: o } = q(),
        d = s.useCallback(() => {
            null != l &&
                (t(w.GameProfileTrackActionActions.JoinServer),
                o(),
                ey.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eG.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? i && r
            ? (0, a.jsx)(tY, {})
            : null
        : (0, a.jsxs)("div", {
              className: tU.uW,
              children: [
                  (0, a.jsx)(es.D, {
                      className: tU.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: eN.intl.string(eN.t["U2N+ci"]),
                  }),
                  (0, a.jsx)("div", {
                      className: tU.kL,
                      children: (0, a.jsxs)("div", {
                          className: tU.hQ,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: tU.To,
                                  children: [
                                      (0, a.jsx)(tW, { guild: l.guild }),
                                      (0, a.jsxs)("div", {
                                          className: tU.yj,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: tU.YS,
                                                  children: [
                                                      (0, a.jsx)(tD.A, { guild: l.guild, size: 16 }),
                                                      (0, a.jsx)(es.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, tc.uJ)(l.guild?.description) &&
                                                  (0, a.jsx)(ea.E, {
                                                      className: tU.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, a.jsxs)("div", {
                                                        className: tU.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: tU.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tU._o }),
                                                                        (0, a.jsx)(ea.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eN.intl.format(eN.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    l.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != l.approximate_member_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: tU.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tU.jk }),
                                                                        (0, a.jsx)(ea.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eN.intl.format(eN.t.zRl6XR, {
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
                              (0, a.jsx)(g.$, {
                                  variant: "secondary",
                                  text: c ? eN.intl.string(eN.t.cEnaWx) : eN.intl.string(eN.t.XpeFYr),
                                  onClick: d,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var tH = n(369606),
    tz = n(459746),
    tX = n(732369);
let tK = s.forwardRef(function (e, t) {
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
    return (0, tc.uJ)(l)
        ? null
        : (0, a.jsxs)("div", {
              ref: t,
              children: [
                  (0, a.jsx)("div", { className: tX.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, a.jsx)("div", { className: tX.N4 }),
              ],
          });
});
function tJ(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(tr.du).join(", ");
    return (0, tc.uJ)(n) ? null : (0, a.jsx)(ea.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function t$(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: tX.Qc,
        children: [
            (0, a.jsx)(tH.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(ea.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eN.intl.formatToPlainString(eN.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function tQ(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, a.jsx)("div", {
        className: c()(n ? tX.n8 : tX.FS, !n && (0, tz.cO)(t) && tX.CD),
        children: (0, a.jsx)(tz.Ay, { game: t, className: tX.xe, size: tz.wu.LARGE }),
    });
}
let tq = function (e) {
    let { game: t } = e,
        { isTwoColumn: n } = q(),
        l = t.name;
    return (0, a.jsxs)("div", {
        className: tX.ap,
        children: [
            n &&
                (0, a.jsx)("div", {
                    className: c()(tX.Tf, (0, tz.cO)(t) && tX.wS),
                    children: (0, a.jsx)(tz.Ay, { game: t, className: tX.w$, size: tz.wu.LARGE }),
                }),
            (0, a.jsxs)("div", {
                className: tX.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(t$, { rank: t.l30Rank }),
                    (0, a.jsx)(es.D, { variant: "heading-xxl/semibold", children: l }),
                    (0, a.jsx)(tJ, { game: t }),
                ],
            }),
        ],
    });
};
var tZ = n(141628),
    t0 = n(289363),
    t1 = n(134131);
function t8() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: t1.uW,
        children: [
            (0, a.jsx)(eJ, { className: t1.dU, width: "30%" }),
            (0, a.jsxs)(e$, {
                className: t1.nV,
                children: [
                    (0, a.jsx)("div", { className: t1.sB, children: (0, a.jsx)(t0.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: t1.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: t1.Yv,
                                children: [(0, a.jsx)(eJ, { width: "55%" }), (0, a.jsx)(eJ, { width: "85%" })],
                            }),
                            (0, a.jsx)(eQ, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function t4(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, ts.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: i,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: d,
            hasOfficialApplication: u,
            officialApplicationFetchFailed: x,
        } = q(),
        h = (0, m.bG)([$.default], () => $.default.getCurrentUser()),
        f = s.useCallback(() => {
            (t(w.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !u || x || null == h
        ? null
        : null == d || (c && !i)
          ? (0, a.jsx)(t8, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: t1.uW,
                  children: [
                      (0, a.jsx)(es.D, {
                          className: t1.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eN.intl.string(eN.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: t1.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: t1.sB,
                                  children: (0, a.jsx)(t0.default, { application: d }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: t1.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: t1.FS,
                                          children: [
                                              (0, a.jsx)(es.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: eN.intl.formatToPlainString(eN.t.hUbQT2, {
                                                      gameName: d.name,
                                                  }),
                                              }),
                                              (0, a.jsx)(ea.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: eN.intl.string(eN.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(g.$, {
                                          variant: "secondary",
                                          icon: tZ.A,
                                          text: eN.intl.string(eN.t.jynBQ5),
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
var t2 = n(635377),
    t5 = n.n(t2),
    t6 = n(80687),
    t3 = n(775602),
    t9 = n(534573),
    t7 = n(248643),
    ne = n(256905),
    nt = n(85935),
    nn = n(191096),
    nl = n(90721),
    ni = n(258924);
function na(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function ns(e, t) {
    return (0, t9.Ec)(e, { size: t, keepAspectRatio: !0, format: tF.QB ? "webp" : null });
}
let nr = new (t5())({ max: 100 }),
    nc = s.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [i, r] = s.useState(null),
            o = null != i && i.url === t ? i.isPortrait : (nr.get(t) ?? !1),
            d = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (nr.set(t, n),
                        r((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            u = s.useCallback((e) => d(e.currentTarget), [d]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: d,
                    src: ns(t, 106),
                    className: c()(ni.r4, !o && ni.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, a.jsx)("img", { ref: d, src: ns(t, 900), className: c()(ni.c8, o && ni.D7, l), alt: n, onLoad: u }),
            ],
        });
    }),
    no = s.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: i, isPlaying: r, onSelect: o, gameName: d, listItemProps: u } = e,
            m = s.useCallback(() => o(l), [o, l]),
            x = u?.tabIndex;
        return (0, a.jsx)(el.D, {
            ...u,
            className: c()(ni.JS, i && ni.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: ni.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: ns("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: ni.xn,
                        alt: eN.intl.formatToPlainString(eN.t.COYYrn, { game: d }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, a.jsx)("div", {
                            className: ni.UZ,
                            children: (0, a.jsx)(t6.D, { playing: i && r, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nd = s.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: i,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: d,
            } = e,
            u = s.useRef(null);
        return (
            (0, nl.A)({ videoRef: i, canvasRef: u, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: u, className: ni.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: ni.tN,
                        children: (0, a.jsx)(t7.A, {
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
                            renderLinkComponent: nt.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: ni.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nu(e) {
    let { game: t, trackAction: n } = e,
        [l, i] = s.useState(0),
        [r, c] = s.useState(null),
        [o, d] = s.useState(t.screenshotUrls),
        u = s.useRef(null),
        x = s.useRef(null),
        h = (0, m.bG)([t3.Ay], () => t3.Ay.useReducedMotion),
        { obscured: g } = (0, nn.I3)(),
        f = eo("game_profile_media");
    o !== t.screenshotUrls && (d(t.screenshotUrls), i(0));
    let j = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eP.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eP.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        A = s.useMemo(() => j.map((e, t) => ({ item: e, index: t })), [j]),
        p = j.length > 0 ? Math.min(l, j.length - 1) : 0,
        v = j[p],
        E = v?.type === "VIDEO",
        I = s.useCallback(
            (e) => {
                let t = j[p],
                    n = j[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), i(e));
            },
            [j, p],
        ),
        [N, k] = s.useState(!1),
        b = s.useRef(null),
        S = s.useCallback(() => {
            n(E ? w.GameProfileTrackActionActions.ClickTrailer : w.GameProfileTrackActionActions.ClickImage);
            let e = u.current,
                t = b.current,
                l = null != e && !e.paused,
                a = e?.muted ?? !0,
                s = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = j.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === p;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || a, initialTimeSec: n ? s : void 0, videoRef: x };
                }
                return e;
            });
            (0, ne.R)({
                items: r,
                startingIndex: p,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: i,
                onClose: () => {
                    let e = x.current,
                        t = b.current,
                        n = null != e ? !e.paused : l;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        k(n));
                },
            });
        }, [n, j, p, E]),
        T = s.useCallback(() => k(!0), []),
        C = s.useCallback(() => k(!1), []),
        y = s.useCallback(() => c(null), []),
        L = s.useCallback(
            (e) => {
                e && S();
            },
            [S],
        );
    return 0 === j.length
        ? null
        : (0, a.jsxs)("div", {
              className: ni.kL,
              children: [
                  E
                      ? (0, a.jsx)("div", {
                            className: ni.ND,
                            children: (0, a.jsx)(
                                nd,
                                {
                                    item: v,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: u,
                                    mediaPlayerRef: b,
                                    onPlay: T,
                                    onPause: C,
                                    onFullscreenChange: L,
                                },
                                `${p}-${v.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: ni.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: ni.Jy,
                                            onAnimationEnd: y,
                                            children: (0, a.jsx)(nc, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, a.jsx)("div", { className: ni.QN }),
                                (0, a.jsx)(el.D, {
                                    className: ni.gv,
                                    onClick: S,
                                    children: (0, a.jsx)("div", {
                                        className: ni.cs,
                                        children: (0, a.jsx)(
                                            nc,
                                            {
                                                url: v.url,
                                                className: ni.Jf,
                                                alt: eN.intl.formatToPlainString(eN.t.COYYrn, { game: t.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, a.jsx)(ex.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: A,
                            getItemKey: na,
                            renderItem: (e, n) => {
                                let { item: l, index: i } = e;
                                return (0, a.jsx)(
                                    no,
                                    {
                                        item: l,
                                        index: i,
                                        isPlaying: N,
                                        isSelected: i === p,
                                        onSelect: I,
                                        gameName: t.name,
                                        listItemProps: n,
                                    },
                                    `${i}-${l.url}`,
                                );
                            },
                        })
                      : (0, a.jsx)(eu.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, a.jsx)(
                                    no,
                                    {
                                        item: e,
                                        index: n,
                                        isPlaying: N,
                                        isSelected: n === p,
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
var nm = n(49381),
    nx = n(661531),
    nh = n(223273);
function ng(e, t, n) {
    if (null == e || null == t || t < 10) return nh.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nh.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nh.vI.VERY_POSITIVE
              : nh.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nh.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nh.vI.MIXED;
    if (e >= 20) return nh.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nh.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nh.vI.VERY_NEGATIVE;
    return nh.vI.OVERWHELMINGLY_NEGATIVE;
}
function nf(e) {
    switch (e) {
        case nh.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nh.vI.OVERWHELMINGLY_POSITIVE:
        case nh.vI.VERY_POSITIVE:
        case nh.vI.POSITIVE:
        case nh.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nh.vI.MIXED:
            return "steam-review-text-mixed";
        case nh.vI.MOSTLY_NEGATIVE:
        case nh.vI.NEGATIVE:
        case nh.vI.VERY_NEGATIVE:
        case nh.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nj =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nA = n(778591);
function np(e) {
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
var nv = n(255417);
function nE(e) {
    let { url: t, trackAction: n, title: l, rating: i, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tk.A)(),
        d = ng(i, r, "recent" === c),
        u = nf(d),
        m = s.useCallback(() => {
            (n(w.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, a.jsx)(el.D, {
        onClick: m,
        className: nv.nf,
        role: "link",
        "aria-label": eN.intl.string(eN.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nv.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nv.tN,
                    children: [
                        (0, a.jsx)(nm.N, { size: "sm", color: nx.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(es.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    h.m,
                    {
                        text:
                            d === nh.vI.NO_USER_REVIEWS
                                ? eN.intl.string(eN.t.CLMt8J)
                                : eN.intl
                                      .format(
                                          "recent" === c
                                              ? eN.t.TzvC0k
                                              : "localized" === c
                                                ? eN.t.EOfrwm
                                                : eN.t["lzANJ/"],
                                          { rating: i, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: nv.Z0,
                            children: [
                                (0, a.jsx)(ea.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: nv.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nh.vI.NO_USER_REVIEWS:
                                                return eN.intl.string(eN.t.CLMt8J);
                                            case nh.vI.OVERWHELMINGLY_POSITIVE:
                                                return eN.intl.string(eN.t["75sx1S"]);
                                            case nh.vI.VERY_POSITIVE:
                                                return eN.intl.string(eN.t["EkOVg+"]);
                                            case nh.vI.POSITIVE:
                                                return eN.intl.string(eN.t.ZUkFtr);
                                            case nh.vI.MOSTLY_POSITIVE:
                                                return eN.intl.string(eN.t.M7Z09a);
                                            case nh.vI.MIXED:
                                                return eN.intl.string(eN.t.c8yuHR);
                                            case nh.vI.MOSTLY_NEGATIVE:
                                                return eN.intl.string(eN.t.H0MSjG);
                                            case nh.vI.NEGATIVE:
                                                return eN.intl.string(eN.t.vpLrgz);
                                            case nh.vI.VERY_NEGATIVE:
                                                return eN.intl.string(eN.t["5spYuX"]);
                                            case nh.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eN.intl.string(eN.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== nh.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(ea.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eN.intl
                                            .format(eN.t.sgIoin, { rating_count: r.toLocaleString() })
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
function nI(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: i } = t,
        r = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, tk.A)(),
        x = s.useCallback(() => {
            (l(w.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, a.jsx)(el.D, {
        onClick: x,
        className: nv.nf,
        role: "link",
        "aria-label": eN.intl.string(eN.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nv.Ur,
            children: [
                (0, a.jsx)(es.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eN.intl.string(eN.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nv.WA,
                    children: [
                        null != c ? (0, a.jsx)(nN, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, a.jsx)(nk, { rating: o, tier: c }) : null,
                        u
                            ? (0, a.jsx)(ea.E, {
                                  variant: "text-xs/medium",
                                  color: nf(nh.vI.NO_USER_REVIEWS),
                                  children: eN.intl.string(eN.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nN(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nj.MIGHTY:
                    return eN.intl.string(eN.t.aZej2g);
                case nj.STRONG:
                    return eN.intl.string(eN.t.MLxnSg);
                case nj.FAIR:
                    return eN.intl.string(eN.t["3f19KA"]);
                case nj.WEAK:
                    return eN.intl.string(eN.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nj.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nj.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nj.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nj.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, a.jsx)(
        h.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: nv.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nk(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case nj.MIGHTY:
                    t = "#fc430a";
                    break;
                case nj.STRONG:
                    t = "#9e00b4";
                    break;
                case nj.FAIR:
                    t = "#4aa1ce";
                    break;
                case nj.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, a.jsx)(
        h.m,
        {
            text: eN.intl.string(eN.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nv.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(np, { rating: t, strokeColor: l }),
                    (0, a.jsx)(ea.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nv.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nb = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, ts.c)("GameProfileReviews"),
        i = (0, nA.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != i,
        c = t.reviews?.steam,
        o = ng(c?.recentRating, c?.recentRatingCount, !0),
        d = r && o !== nh.vI.NO_USER_REVIEWS,
        m =
            null != c &&
            null != c.localizedRating &&
            null != c.localizedRatingCount &&
            null != c.ratingCount &&
            c.localizedRatingCount >= 200 &&
            c.ratingCount >= 2e3,
        x = m ? c?.localizedRating : c?.rating,
        h = m ? c?.localizedRatingCount : c?.ratingCount,
        g = m ? eN.t["aWb+V4"] : eN.t["8e4LiB"],
        f = t.reviews?.opencritic != null && null != s;
    return r || d || f
        ? (0, a.jsxs)("div", {
              className: nv.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nv.Gf,
                      children: (0, a.jsx)(es.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eN.intl.string(eN.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nv.kL,
                      children: [
                          d && null != i
                              ? (0, a.jsx)("div", {
                                    className: nv.WH,
                                    children: (0, a.jsx)(nE, {
                                        url: i,
                                        trackAction: n,
                                        title: eN.intl.string(eN.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != i
                              ? (0, a.jsx)("div", {
                                    className: nv.WH,
                                    children: (0, a.jsx)(nE, {
                                        url: i,
                                        trackAction: n,
                                        title: eN.intl.string(g),
                                        rating: x,
                                        ratingCount: h,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          f && null != s
                              ? (0, a.jsx)("div", {
                                    className: nv.WH,
                                    children: (0, a.jsx)(nI, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nS = n(815996),
    nT = n(722258),
    nC = n(258245),
    ny = n(561769),
    nL = n(484469),
    nR = n(57020),
    nP = n(682301);
let nG = [];
var n_ = n(758836),
    nO = n(747828);
let nM = [0, 1, 2, 3, 4];
function nw(e) {
    return e.skuId;
}
let nV = s.createContext({ trackAction: () => {} });
function nD(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        r = s.useContext(ny.v3),
        { trackAction: c } = s.useContext(nV),
        o = s.useRef(null),
        d = s.useCallback(
            (e) => {
                (c(w.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, nT.B)({
                        skuId: i,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, nR.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = r;
    return (0, a.jsx)(ny.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(nC.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: nO.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function nF() {
    return (0, a.jsx)(nL.A, {});
}
function nU(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = q(),
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
                    } = (0, m.cf)([V.A], () => ({
                        hasFetched: null != e && V.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && V.A.isShopCollectionFetching(e),
                        skuIds: null != e ? V.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, s.useEffect)(() => {
                            null == e || t || V.A.isShopCollectionFetching(e) || eO(e);
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
            (n(w.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nS.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: n_.G2.CATALOG,
                }));
        }, [n, l]),
        o = s.useMemo(() => ({ trackAction: n }), [n]),
        d = eo("game_profile_shop_carousel");
    return r
        ? (0, a.jsx)(eZ, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(e8, { children: nM.map((e) => (0, a.jsx)(nF, {}, e)) }),
          })
        : 0 === i.length
          ? null
          : (0, a.jsx)(nV.Provider, {
                value: o,
                children: (0, a.jsx)(e0, {
                    title: eN.intl.string(eN.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: d
                        ? (0, a.jsx)(ex.A, {
                              gap: "md",
                              items: i,
                              getItemKey: nw,
                              renderItem: (e, t) => (0, a.jsx)(nD, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, a.jsx)(eu.A, {
                              gap: "md",
                              children: i.map((e) => (0, a.jsx)(nD, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var nY = n(921138),
    nW = n(311043);
let nB = [],
    nH = [];
var nz = n(607346);
let nX = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function nK(e) {
    return e.id;
}
function nJ(e) {
    let { className: t } = e;
    return (0, a.jsx)(e$, { className: t, children: (0, a.jsx)(eJ, { className: nz.Lg }) });
}
function n$(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: i } = q(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        d = null == r || c === r,
        { shouldOpenGameProfile: u, gameId: m } = (0, nY.Ay)({
            gameId: t.id,
            source: w.GameProfileSources.SimilarGames,
        }),
        x = s.useCallback(() => {
            (n(w.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                u && null != m && i(m, w.GameProfileSources.SimilarGames));
        }, [t.id, m, n, u, i]),
        g = s.useCallback(() => o(r), [r]);
    return (0, a.jsx)(h.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, a.jsxs)(el.D, {
            ...l,
            className: nz.Nr,
            onClick: x,
            "aria-label": eN.intl.formatToPlainString(eN.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(tz.Ay, {
                    game: t,
                    className: nz.xe,
                    size: tz.wu.SMALL,
                    imageSize: 256,
                    onLoad: g,
                    onError: g,
                }),
                !d && (0, a.jsx)(nJ, { className: nz.uz }),
            ],
        }),
    });
}
function nQ(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: i } = (function (e) {
            let t = !e_.has(e),
                { data: n, isLoading: l, error: i } = ew(e, t),
                a = t && null != n ? n : nB;
            (0, R.x)(a);
            let s = (0, m.bG)(
                    [nW.A],
                    () => a.some((e) => null == nW.A.getGame(e) && !nW.A.hasNoData(e) && !nW.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [nW.A, $.default],
                    () => {
                        let e = $.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => nW.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, nY.T_)(t) && !(0, H.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: nH };
        })(t),
        s = eo("game_profile_similar_games");
    return e_.has(t)
        ? null
        : l
          ? (0, a.jsx)(eZ, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: nz.XG,
                    style: nX,
                    children: (0, a.jsx)(e8, {
                        children: ee()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(nJ, { className: nz.aZ }, e)),
                    }),
                }),
            })
          : 0 === i.length
            ? null
            : (0, a.jsx)(e0, {
                  title: eN.intl.string(eN.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: nz.XG,
                      style: nX,
                      children: s
                          ? (0, a.jsx)(ex.A, {
                                gap: "md",
                                items: i,
                                getItemKey: nK,
                                itemClassName: nz.cW,
                                renderItem: (e, t) =>
                                    (0, a.jsx)(n$, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(eu.A, {
                                gap: "md",
                                children: i.map((e) => (0, a.jsx)(n$, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
n(667532);
var nq = n(853022);
let nZ = new Set(["1402418703554842694", "356877880938070016"]),
    n0 = [to.V.EPICGAMES, to.V.STEAM, to.V.ROBLOX, to.V.BATTLENET, to.V.RIOT, to.V.MINECRAFT];
var n1 = n(349361),
    n8 = n(924895),
    n4 = n(422688),
    n2 = n(505200),
    n5 = n(695250);
let n6 = function (e) {
    switch (e.category) {
        case to.V.STEAM:
            return {
                icon: nm.N,
                text: eN.intl.string(eN.t.FsANs4),
                ariaLabel: eN.intl.string(eN.t["P+ePTG"]),
                action: w.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case to.V.EPICGAMES:
            return {
                icon: n1.r,
                text: eN.intl.string(eN.t.ZbBMHa),
                ariaLabel: eN.intl.string(eN.t.BwX0UW),
                action: w.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case to.V.ROBLOX:
            return {
                icon: n8.H,
                text: eN.intl.string(eN.t["pJ+P+h"]),
                ariaLabel: eN.intl.string(eN.t.tYxpdf),
                action: w.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case to.V.BATTLENET:
            return {
                icon: n4.a,
                text: eN.intl.string(eN.t["A7grp+"]),
                ariaLabel: eN.intl.string(eN.t.x9at20),
                action: w.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case to.V.RIOT:
            return {
                icon: n2.A,
                text: eN.intl.string(eN.t.h6MapL),
                ariaLabel: eN.intl.string(eN.t["528nvc"]),
                action: w.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case to.V.MINECRAFT:
            return {
                icon: n5.m,
                text: eN.intl.string(eN.t["HZbmO+"]),
                ariaLabel: eN.intl.string(eN.t.WWTqYn),
                action: w.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: ty.Y,
                text: eN.intl.string(eN.t["QpN/Iz"]),
                ariaLabel: eN.intl.string(eN.t["8JZmmF"]),
                action: w.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function n3(e) {
    return (0, a.jsx)(g.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var n9 = n(48460);
function n7(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, nA.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eG.d3x.XBOX_GAME_PASS && !(0, tc.uJ)(e.id));
                return t?.id == null ? null : (0, nq.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== to.V.EPICGAMES || !!nZ.has(l)) &&
                            (e.category !== to.V.STEAM || a !== u.Y.RETIRED_ABANDONED) &&
                            n0.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === to.V.STEAM) ||
                    e.push({ category: to.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === to.V.STEAM ? -1 : +(t.category === to.V.STEAM)));
                return (null != n && s.unshift({ category: "XBOX_GAME_PASS", url: n }), s);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function le(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tk.A)();
    return (0, a.jsx)(n3, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lt = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: i, storeWebsites: r } = n7(t),
        c = s.useMemo(() => r.map(n6).filter((e) => null != e), [r]);
    if (!i) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(le, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, a.jsxs)("div", {
            className: n9.G,
            children: [(0, a.jsx)(le, { data: c[0], trackAction: l }), (0, a.jsx)(le, { data: c[1], trackAction: l })],
        });
    let o = (0, a.jsx)(n3, {
        text: eN.intl.string(eN.t["/hMurx"]),
        "aria-label": eN.intl.string(eN.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, j.openModalLazy)(async () => {
                    let { default: e } = await n.e("176758").then(n.bind(n, 459477));
                    return (n) => (0, a.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, a.jsxs)("div", { className: n9.G, children: [(0, a.jsx)(le, { data: c[0], trackAction: l }), o] })
        : o;
};
var ln = n(123292);
function ll(e) {
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
                    ? (t(w.GameProfileTrackActionActions.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(w.GameProfileTrackActionActions.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: d } = q(),
        u = s.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = i ? eN.intl.string(eN.t["6MwJo/"]) : eN.intl.string(eN.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: c()(tP.fi, tP.mX),
        children: [
            (0, a.jsx)(ea.E, {
                ref: l,
                className: tP.g5,
                lineClamp: i ? void 0 : u,
                variant: "text-md/medium",
                children: t.description,
            }),
            r && (0, a.jsx)(ln.Q, { onClick: o, text: m }),
        ],
    });
}
var li = n(109112),
    la = n(761508),
    ls = n(691540),
    lr = n(857250),
    lc = n(97483),
    lo = n(922016),
    ld = n(980707),
    lu = n(477782),
    lm = n(663341),
    lx = n(408278),
    lh = n(34188),
    lg = n(173936),
    lf = n(365199),
    lj = n(789645),
    lA = n(442433),
    lp = n(50268),
    lv = n(44724),
    lE = n(676924),
    lI = n(957565),
    lN = n(695366),
    lk = n(540185),
    lb = n(926268),
    lS = n(53788),
    lT = n(831453),
    lC = n(785866),
    ly = n(555704),
    lL = n(47675),
    lR = n(633075),
    lP = n(289173),
    lG = n(321191),
    l_ = n(958805),
    lO = n(735321),
    lM = n(96173),
    lw = n(280450),
    lV = n(403362);
async function lD(e) {
    let t = e((0, lO.BF)());
    await l_.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function lF(e) {
    var t;
    let l,
        { game: i, className: r, trackAction: c } = e,
        o = s.useRef(null),
        d = s.useRef(null),
        u = (0, lp.A)({ id: i.id, label: eN.intl.string(eN.t.SHQGPj) }),
        x =
            ((t = i.id),
            (l = s.useCallback(() => {
                null != t &&
                    (c?.(w.GameProfileTrackActionActions.Feedback),
                    (0, j.openModalLazy)(async () => {
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
                : (0, a.jsx)(lu.Dr, {
                      id: "game-profile-something-wrong",
                      label: eN.intl.string(eN.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: lN.E },
                  })),
        f = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([lw.default], () => lw.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: lk.x.FAVORITE_GAMES,
                            addLabel: eN.intl.string(eN.t.fgmitg),
                            removeLabel: eN.intl.string(eN.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: lb.HeartIcon,
                        },
                        {
                            type: lk.x.PLAYED_GAMES,
                            addLabel: eN.intl.string(eN.t["0xIVLR"]),
                            removeLabel: eN.intl.string(eN.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: lS.G,
                        },
                        {
                            type: lk.x.CURRENT_GAMES,
                            addLabel: eN.intl.string(eN.t.G0c4En),
                            removeLabel: eN.intl.string(eN.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: lT.H,
                        },
                        {
                            type: lk.x.WANT_TO_PLAY_GAMES,
                            addLabel: eN.intl.string(eN.t.UuBS4K),
                            removeLabel: eN.intl.string(eN.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: lC._,
                        },
                    ],
                    [],
                ),
                r = (0, m.yK)([lG.A], () => (null == l ? [] : (lG.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, lM.A)(),
                o = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof lR.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(lV.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                d = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await lD((i) => {
                                let a = i.filter(lP.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, lO.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new lP.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new lP.Yy({ ...a, games: e });
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
                        (0, lL.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
                            gameId: t,
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                u = s.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == o ||
                            (await lD((n) =>
                                e
                                    ? n.some((e) => e instanceof lR.R && e.applicationId === o)
                                        ? n
                                        : [(t = new lR.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof lR.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof lR.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, lL.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, lO.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof lR.R && e.applicationId === o);
                h.push(
                    (0, a.jsx)(
                        lu.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eN.intl.formatToPlainString(eN.t.Ktb1n8, { name: n })
                                : eN.intl.formatToPlainString(eN.t.Xp6iZt, { name: n }),
                            action: () => u(!e),
                            leadingAccessory: { type: "icon", icon: ly.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let n = r.filter(lP.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, lO.uA)(n);
                    h.push(
                        (0, a.jsx)(
                            lu.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? eN.intl.string(eN.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => d(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(i),
        { closeModal: A } = q(),
        p = (0, m.bG)([X.A], () => X.A.getApplicationIdFromDetectableId(i.id)),
        v = (0, m.bG)([X.A], () => X.A.hasStorefrontForApplicationId(p), [p]),
        E = Y({ location: "GameProfileOverflowMenu" }),
        I = s.useCallback(() => {
            null != p && (0, lv.G)({ applicationId: p });
        }, [p]),
        k = s.useCallback(() => {
            null != p && (c(w.GameProfileTrackActionActions.GameShop), (0, lv.default)({ applicationId: p }), A());
        }, [p, c, A]),
        b = s.useCallback(() => A(!1), [A]),
        S = s.useCallback(() => {
            c(w.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eG.BVt.GAME_PROFILE(i.id)}`;
            (0, lI.C)(e, () => {
                (0, ls.P0)((0, lr.o)(eN.intl.string(eN.t["+5kSoW"]), lc.Ck.SUCCESS));
            });
        }, [i.id, c]);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            E &&
                (0, a.jsx)(lE.A, {
                    location: N.A.GAME_PROFILE,
                    onNavigateToQuestHome: A,
                    variant: "overlay-secondary",
                }),
            null != f &&
                (0, a.jsx)(lo.Y, {
                    targetElementRef: d,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(ld.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, lA.Z_)(), t());
                            },
                            "aria-label": eN.intl.string(eN.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(lu.rX, { children: f }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: d,
                            children: (0, a.jsx)(g.$, {
                                icon: lm.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eN.intl.string(eN.t.sidPSo),
                            }),
                        }),
                }),
            v &&
                (0, a.jsx)(h.m, {
                    text: eN.intl.string(eN.t.apFNLU),
                    children: (0, a.jsx)(lx.K, {
                        icon: lh.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eN.intl.string(eN.t.apFNLU),
                        onMouseDown: I,
                        onClick: k,
                    }),
                }),
            (0, a.jsx)(h.m, {
                text: eN.intl.string(eN.t.WqhZss),
                children: (0, a.jsx)(lx.K, {
                    icon: lg.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": eN.intl.string(eN.t.WqhZss),
                    onClick: S,
                }),
            }),
            (null != u || null != x) &&
                (0, a.jsx)(lo.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(ld.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, lA.Z_)(), t());
                            },
                            "aria-label": eN.intl.string(eN.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(lu.rX, { children: x }), (0, a.jsx)(lu.rX, { children: u })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(h.m, {
                            text: eN.intl.string(eN.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, a.jsx)(lx.K, {
                                    icon: lf.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eN.intl.string(eN.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(lx.K, {
                icon: lj.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: b,
                "aria-label": eN.intl.string(eN.t.cpT0Cq),
            }),
        ],
    });
}
var lU = (((i = {}).OVERVIEW = "overview"), i),
    lY = n(510954);
function lW(e) {
    let { game: t, trackAction: n } = e,
        { navTab: l, setNavTab: i } = q(),
        r = t.getIconURL(64),
        [c, o] = s.useState(null),
        d = s.useCallback(() => o(r), [r]),
        u = eN.intl.string(eN.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: lY.ln,
        children: (0, a.jsxs)("div", {
            className: lY.ap,
            children: [
                (0, a.jsx)("div", {
                    className: lY.wE,
                    children:
                        null != r && r !== c
                            ? (0, a.jsx)("img", { src: r, alt: "", className: lY.FC, draggable: !1, onError: d })
                            : (0, a.jsx)(li._, { size: "md" }),
                }),
                (0, a.jsx)(la.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: i,
                    className: lY.vR,
                    children: (0, a.jsx)(la.V.Item, {
                        id: lU.OVERVIEW,
                        disableItemStyles: !0,
                        className: lY.Mf,
                        "aria-label": u,
                        children: (0, a.jsx)(ea.E, { variant: "text-md/medium", color: "none", children: u }),
                    }),
                }),
                (0, a.jsx)(lF, { game: t, className: lY.HK, trackAction: n }),
            ],
        }),
    });
}
var lB = n(871123),
    lH = n(439303),
    lz = n(317560),
    lX = n(467884),
    lK = n(761812);
function lJ(e) {
    return e;
}
function l$(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: lK.B, children: t });
}
function lQ(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        i = eo("social_layer_storefront_card_row"),
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
          ? (0, a.jsx)(ex.A, {
                gap: "md",
                "aria-label": `${eN.intl.string(eN.t["kocF+6"])}`,
                items: t,
                getItemKey: lJ,
                disableFocusRingScope: !0,
                renderItem: (e, t, l) =>
                    (0, a.jsx)(l$, {
                        children: (0, a.jsx)(lX.Ay, {
                            positionInSection: l,
                            skuId: e,
                            variant: lX.s6.SMALL,
                            analyticsLocations: n,
                            onClick: r,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, a.jsx)(eu.A, {
                gap: "md",
                "aria-label": eN.intl.string(eN.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, a.jsx)(
                        l$,
                        {
                            children: (0, a.jsx)(lX.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: lX.s6.SMALL,
                                analyticsLocations: n,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var lq = n(403581),
    lZ = n(812095),
    l0 = n(421108),
    l1 = n(647474),
    l8 = n(162536);
function l4(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, l0.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        s = i ? lq.t : t.Icon;
    return (0, a.jsx)(l1.A, {
        className: c()(l8.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: l8.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: l8.Kk }),
                (0, a.jsx)(ea.E, { variant: "text-sm/normal", color: "currentColor", children: (0, lZ.U)(t.text) }),
            ],
        }),
    });
}
var l2 = n(521058);
function l5() {
    let { storefrontPromotion: e } = q();
    return e?.flavor !== "nitro" ? null : (0, a.jsx)(l4, { className: l2.v, promotion: e });
}
let l6 = [0, 1, 2, 3],
    l3 = { placement: lH.Ye.GAME_PROFILE };
function l9() {
    return (0, a.jsx)(eZ, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(e8, { children: l6.map((e) => (0, a.jsx)(l$, { children: (0, a.jsx)(lX.yf, {}) }, e)) }),
    });
}
function l7(e) {
    let { trackAction: t } = e,
        {
            socialLayerStorefrontRecommendationsData: n,
            socialLayerStorefrontRecommendationsLoading: l,
            closeModal: i,
        } = q(),
        { analyticsLocations: r } = (0, k.Ay)([N.A.GAME_PROFILE]),
        c = s.useCallback(() => {
            n?.application != null &&
                (t(w.GameProfileTrackActionActions.GameShop),
                i(),
                (0, lv.default)({ applicationId: n.application.id }));
        }, [n, t, i]),
        o = s.useCallback(
            (e, l) => {
                let a = n?.guildId;
                null != a &&
                    (t(w.GameProfileTrackActionActions.GameShopItem),
                    (0, lz.R)({
                        skuId: e,
                        applicationId: l,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lB.rG)(e, t, l, a) && i();
                        },
                    }));
            },
            [t, i, r, n],
        );
    if (l) return (0, a.jsx)(l9, {});
    if (null == n) return null;
    let { skuIds: d } = n;
    return (0, a.jsxs)(e0, {
        title: eN.intl.string(eN.t.WDdlUb),
        onClickViewAll: c,
        children: [
            (0, a.jsx)(l5, {}),
            (0, a.jsx)(lH.E9, {
                newValue: l3,
                children: (0, a.jsx)(lQ, { skuIds: d, analyticsLocations: r, onCardClick: o }),
            }),
        ],
    });
}
let ie = s.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, a.jsxs)("div", {
            className: tP.oC,
            children: [
                (0, a.jsxs)("div", {
                    className: tP.lM,
                    children: [
                        (0, a.jsx)(nu, { game: t, trackAction: n }),
                        (0, a.jsx)(ll, { game: t, trackAction: n }),
                    ],
                }),
                (0, a.jsx)(ta, { gameId: t.id, trackAction: n }),
                (0, a.jsx)(l7, { trackAction: n }),
                (0, a.jsx)(nU, { game: t, trackAction: n }),
                (0, a.jsx)(nQ, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    it = s.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            i = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
        return (0, a.jsxs)("div", {
            className: tP.V0,
            children: [
                (0, a.jsx)(nu, { game: t, trackAction: n }),
                (0, a.jsxs)("div", {
                    className: tP.gr,
                    children: [
                        (0, a.jsx)(tQ, { game: t, isTwoColumn: !1 }),
                        (0, a.jsxs)("div", {
                            className: tP.E1,
                            children: [
                                (0, a.jsx)(lt, { game: t, trackAction: n }),
                                (0, a.jsx)(ll, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(t4, { analyticsLocations: l, trackAction: n }),
                (0, a.jsx)(tB, { trackAction: n }),
                (0, a.jsx)(ta, { gameId: t.id, trackAction: n }),
                (0, a.jsx)(l7, { trackAction: n }),
                (0, a.jsx)(nU, { game: t, trackAction: n }),
                (0, a.jsx)(nQ, { gameId: t.id, trackAction: n }),
                i && (0, a.jsx)(nb, { game: t, trackAction: n }),
                (0, a.jsx)(tV, { game: t, trackAction: n }),
            ],
        });
    });
function il(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: i } = q();
    (0, b.A)({
        name: o.ImpressionNames.CLOUD_PLAY_CTA,
        type: o.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = s.useCallback(() => {
        (l(w.GameProfileTrackActionActions.CloudPlay), i(), t());
    }, [i, t, l]);
    return (0, a.jsx)(h.m, {
        text: eN.intl.string(eN.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(g.$, {
            icon: f.h,
            text: eN.intl.string(eN.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function ii(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: i } = e,
        s = (0, I.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, a.jsx)("div", {
              className: tP.NC,
              children: (0, a.jsx)(il, { onCloudPlayClick: s, analyticsLocations: l, trackAction: i }),
          });
}
function ia(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        i = (0, E.A)(t.linkedApplications)?.id,
        [s] = (0, P.L_)(t.getOfficialApplicationId()),
        [r] = (0, P.L_)(t.id),
        { showsStoreLinks: o } = n7(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: c()(tP.Pn, tP.fi, tP.iH, o ? tP.sV : tP.gF),
        children: [
            null == i || s || r
                ? null
                : (0, a.jsx)(ii, { gameId: t.id, cloudPlayAppId: i, analyticsLocations: l, trackAction: n }),
            (0, a.jsxs)("div", {
                className: tP.V0,
                children: [
                    (0, a.jsx)(lt, { game: t, trackAction: n }),
                    (0, a.jsx)(t4, { analyticsLocations: l, trackAction: n }),
                    (0, a.jsx)(tB, { trackAction: n }),
                    d && (0, a.jsx)(nb, { game: t, trackAction: n }),
                    (0, a.jsx)(tV, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function is(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: i,
            onClose: r,
            appContext: o,
            trackExternalAction: u,
            initialScrollOffset: h,
            navigateToGame: g,
        } = e,
        [f, E] = s.useState(!0),
        [I, b] = s.useState(null),
        { clientThemesClassName: P } = (0, C.Ay)(),
        D = (0, m.bG)([M.default], () => M.default.locale),
        F = s.useMemo(() => (0, w.generateViewId)(), []),
        { analyticsLocations: U } = (0, k.Ay)(N.A.GAME_PROFILE),
        q = (0, W.s)(t),
        { data: Z } = (0, R.I)(t),
        ee = (0, B.rG)(Z),
        et = Z?.getOfficialApplicationId(),
        en = null != et,
        el = (0, m.bG)([T.A], () => null != et && T.A.didFetchingApplicationFail(et), [et]),
        ei = Z?.name ?? "",
        ea = (0, H.A)(Z),
        es = s.useRef(null);
    s.useEffect(() => {
        es.current = I;
    }, [I]);
    let {
            hasAlreadyLinked: er,
            canStartAuthorization: ec,
            fetched: eo,
            startAuthorization: ed,
            connectionApp: eu,
        } = (0, S.RD)(Z),
        { invite: em, isMember: ex, isResolving: eh } = (0, B.Ay)(Z, b),
        { socialLayerStorefrontRecommendationsData: eg, socialLayerStorefrontRecommendationsLoading: ef } = (function (
            e,
        ) {
            let t = $.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [X.A],
                    () => ({
                        storefrontApplicationId: null != e ? X.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === X.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, z.h)(l),
                r = (0, m.bG)([T.A], () => null != l && T.A.didFetchingApplicationFail(l), [l]),
                c = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: d } = (0, J.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: K.B5.USER_PROFILE,
                }),
                u = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== d || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, d, o],
                ),
                x = "loading" === d,
                h = "success" === d && o.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: u,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (x || h),
            };
        })(t),
        ej = Y({ location: "GameProfileModal" }),
        eA = (0, _.u)({ surface: "storefront_banner", applicationId: ej ? eg?.application.id : null }),
        ep = s.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, w.getGuildIdAndVerifiedFromInvite)(es.current);
                (0, w.trackGameProfileAction)({
                    gameName: ei,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: F,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [ei, t, F, n],
        );
    ((0, v.Ay)(() => {
        ((0, w.trackGameProfileOpen)({
            source: n,
            viewId: F,
            gameId: t,
            gameName: ei,
            authorId: l,
            profileType: w.GameProfileTypes.FullProfile,
        }),
            (0, y.He)());
    }),
        (0, v.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, w.getGuildIdAndVerifiedFromInvite)(es.current),
                l = Date.now(),
                i = q.map((e) => {
                    let t = (0, L.JM)(e) ? (0, L.W6)(e, l) : (0, L.aJ)(e, D);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, w.trackGameProfileClose)({
                viewId: F,
                gameId: t,
                gameName: ei,
                playedFriendIds: q.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: V.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let ev = s.useCallback((e) => {
            E(e.contentRect.width >= 800);
        }, []),
        eE = (0, d.w)(ev, [], { fireOnMount: !0 }),
        eI = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, j.closeAllModals)(), (0, O.closeUserProfileModal)()) : r();
            },
            [r],
        ),
        eN = s.useCallback(() => eI(!1), [eI]),
        [ek, eb] = s.useState(lU.OVERVIEW),
        eS = s.useRef(null),
        eT = s.useCallback(() => eS.current?.getScrollerNode()?.scrollTop ?? 0, []),
        eC = s.useMemo(
            () => ({
                isTwoColumn: f,
                canStartAuthorization: ec,
                hasAlreadyLinked: er,
                fetchedAuthorization: eo,
                startAuthorization: ed,
                connectionApp: eu,
                invite: em,
                hasDiscordWebsite: ee,
                hasOfficialApplication: en,
                officialApplicationFetchFailed: el,
                isCommunityInviteResolving: eh,
                isMember: ex,
                socialLayerStorefrontRecommendationsData: eg,
                socialLayerStorefrontRecommendationsLoading: ef,
                storefrontPromotion: eA,
                closeModal: eI,
                navigateToGame: g,
                getScrollOffset: eT,
                navTab: ek,
                setNavTab: eb,
            }),
            [f, ec, er, eo, ed, eu, em, ee, en, el, eh, ex, eg, ef, eA, eI, g, eT, ek, eb],
        ),
        ey = s.useRef(null);
    s.useEffect(() => {
        null != h && h > 0 && eS.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eL = s.useCallback((e) => {
        if (null != ey.current) {
            let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
            ey.current.style.opacity = String(t);
        }
    }, []);
    return null == Z
        ? null
        : (0, a.jsx)(k.f5, {
              value: U,
              children: (0, a.jsx)(x.N, {
                  transitionState: i,
                  onClose: r,
                  children: (0, a.jsx)(Q.Provider, {
                      value: eC,
                      children: (0, a.jsx)("div", {
                          className: c()(P, tP.kL),
                          ref: eE,
                          children: (0, a.jsxs)(G.A, {
                              obscured: ea,
                              onClose: eN,
                              children: [
                                  (0, a.jsx)(tK, { game: Z, ref: ey }),
                                  (0, a.jsxs)(A.Ch, {
                                      ref: eS,
                                      className: tP.XG,
                                      onScroll: eL,
                                      children: [
                                          (0, a.jsx)(lW, { game: Z, trackAction: ep }),
                                          (0, a.jsx)(tq, { game: Z }),
                                          (0, a.jsx)(p.F, {
                                              children: f
                                                  ? (0, a.jsxs)("div", {
                                                        className: tP.jC,
                                                        children: [
                                                            (0, a.jsx)(ie, { game: Z, trackAction: ep }),
                                                            (0, a.jsx)(ia, {
                                                                game: Z,
                                                                appContext: o,
                                                                source: n,
                                                                trackExternalAction: u,
                                                                trackAction: ep,
                                                                analyticsLocations: U,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, a.jsx)("div", {
                                                        className: tP.b9,
                                                        children: (0, a.jsx)(it, {
                                                            game: Z,
                                                            trackAction: ep,
                                                            analyticsLocations: U,
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
let ir = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, ...r } = e,
        [c, o] = s.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i }),
        d = c.gameId,
        u = s.useCallback(
            (e, t) => {
                e !== d && ((0, B.UT)(e), o({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, a.jsx)(
        is,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            navigateToGame: u,
            ...r,
        },
        c.gameId,
    );
};
