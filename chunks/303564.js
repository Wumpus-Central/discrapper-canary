n.d(t, { default: () => iS });
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
    j = n(707554),
    p = n(192308),
    A = n(689175),
    v = n(964486),
    E = n(881698),
    I = n(146779),
    N = n(793574),
    b = n(688810),
    k = n(139286),
    S = n(206828),
    C = n(587895),
    T = n(590703),
    y = n(180170),
    R = n(583846),
    L = n(569926),
    P = n(928550),
    G = n(570962),
    O = n(831024),
    M = n(402860),
    _ = n(773669),
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
    ep = n(59318),
    eA = n(320095),
    ev = n(708676),
    eE = n(383233),
    eI = n(998218),
    eN = n(375708);
let eb = /^#{1,3}\s+(.+)$/,
    ek = /^https?:\/\/\S+$/;
var eS = n(60465),
    eC = n(158390),
    eT = n(636537),
    ey = n(228366),
    eR = n(103348),
    eL = n(927813),
    eP = n(371794),
    eG = n(652215);
let eO = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function eM(e) {
    ey.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eP.aP)({
                    url: eG.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: _.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(eR.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (ey.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            ey.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        ey.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function e_(e) {
    let t = ((await eT.Bo.get({ url: eG.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eO.has(t),
    );
    ey.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let ew = (0, m.UT)(V.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => V.A.getSimilarGames(e) ?? null,
    load: (e) => e_(e),
    retryConfig: { backoff: () => new eC.A(5 * eL.A.Millis.SECOND, 5 * eL.A.Millis.MINUTE) },
    failureStaleAfter: eL.A.Seconds.MINUTE,
});
async function eV(e, t) {
    ey.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eT.Bo.get({ url: eG.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        ey.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, ef.A)((0, eA.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, eE._c)(e))
                            return e.components
                                .filter((e) => e.type === eg.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || ek.test(t.trim())
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
                        let t = e.attachments.find((e) => (0, ep.tT)(e.content_type));
                        if (null != t) return (0, ej.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, ep.XB)(e.content_type));
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(eb)),
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
function e4(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(e1.n, { [e1.C]: 16 === n }), children: t });
}
let e8 = "1552821538409939044";
var e2 = n(235240),
    e3 = n(165648);
function e5(e, t) {
    return em.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e6(e) {
    return e.id;
}
function e7() {
    return (0, a.jsxs)(e$, {
        className: e2.s7,
        children: [
            (0, a.jsx)(eJ, { className: e2.o$ }),
            (0, a.jsxs)("div", {
                className: e2.UF,
                children: [(0, a.jsx)(eJ, { className: e2.iX }), (0, a.jsx)(eJ, { className: e2.jt })],
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
function te(e) {
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
                  className: e2.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function tt(e) {
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
              className: e2.Nr,
              onClick: r,
              children: (0, a.jsxs)(ei.M, {
                  className: e2.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(ea.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: e2.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: e2._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: e2.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: e2.SG,
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
                                      className: e2.ax,
                                      children: (0, a.jsx)(te, { message: t, src: u, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(es.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: e2.DD,
                                      children: e5(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: c()(e2.h_, e3.PT),
                                      children: [e5(t.body, n), (0, a.jsx)("div", { className: e2.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: e2.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: e2.Cd,
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
                                              className: e2.a5,
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
let tn = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, a.jsxs)(ei.M, {
        className: e2.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(es.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e2.DD,
                    children: e5(t.title, n),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: c()(e2.h_, e3.PT),
                    children: [e5(t.body, n), (0, a.jsx)("div", { className: e2.fm })],
                }),
            (0, a.jsxs)("div", {
                className: e2.ov,
                children: [
                    (0, a.jsx)(ea.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, eh.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: e2.a5,
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
function tl(e) {
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
        className: e2.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != d &&
                (0, a.jsx)("div", {
                    className: e2.Vl,
                    children: (0, a.jsx)(te, { message: t, src: d, aspectRatio: c }),
                }),
            (0, a.jsx)(tn, { message: t, channelId: n }),
        ],
    });
}
function ti(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        r = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(el.D, {
        ...l,
        className: e2.Nr,
        onClick: r,
        children: (0, a.jsxs)(ei.M, {
            className: e2.zI,
            children: [
                (0, a.jsx)(es.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e2.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: e2.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: e2.Nf,
                                    children: (0, a.jsx)(ea.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e2.TT,
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
                                className: e2.PF,
                                children: eN.intl.format(eN.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: e2.ov,
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
function ta(e) {
    return null != e.message.poll
        ? (0, a.jsx)(ti, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(tt, { ...e })
          : (0, a.jsx)(tl, { ...e });
}
let ts = s.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, b.Ay)(),
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
        p = s.useCallback(
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
        A = null != x && d.length > 0;
    return (!g || h) && r
        ? (0, a.jsx)(eZ, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(e4, {
                  gap: 16,
                  children: ee()
                      .range(3)
                      .map((e) => (0, a.jsx)(e7, {}, e)),
              }),
          })
        : A
          ? (0, a.jsx)(e0, {
                title: eN.intl.string(eN.t.B0BV3Y),
                onClickViewAll: j,
                children: f
                    ? (0, a.jsx)(ex.A, {
                          gap: 16,
                          items: d,
                          getItemKey: e6,
                          itemClassName: e2.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(ta, { message: e, channelId: x, onCardClick: p, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(eu.A, {
                          gap: 16,
                          children: d.map((e) => (0, a.jsx)(ta, { message: e, channelId: x, onCardClick: p }, e.id)),
                      }),
            })
          : null;
});
var tr = n(37537),
    tc = n(541830),
    to = n(240248),
    td = n(505779),
    tu = n(808380);
let tm = [tu.Y.DESKTOP, tu.Y.XBOX, tu.Y.PLAYSTATION, tu.Y.NINTENDO];
var tx = n(28863),
    th = n(975807),
    tg = n(194362);
function tf(e) {
    let { game: t, trackAction: n } = e,
        l = s.useCallback(async () => {
            n(w.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, tg.a)(eG.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, th.A)(e);
        }, [n]),
        i = s.useCallback((e) => (0, a.jsx)(tx.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === eg.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(ea.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eN.intl.format(eN.t.KAjfKl, { claimLink: i }),
          });
}
var tj = n(998445),
    tp = n(274997),
    tA = n(80500),
    tv = n(319745),
    tE = n(488225),
    tI = n(967492),
    tN = n(72265),
    tb = n(454346),
    tk = n(37948),
    tS = n(750013);
let tC = { size: "xs", colorClass: tS.wP };
function tT(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tk.A)(),
        {
            action: i,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case td.V.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(tj.GlobeEarthIcon, { ...t }),
                        action: w.GameProfileTrackActionActions.WebsiteLink,
                        title: eN.intl.string(eN.t.fOUKvg),
                    };
                case td.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(tp.p, { ...t }),
                        action: w.GameProfileTrackActionActions.XLink,
                        title: eN.intl.string(eN.t.INic4y),
                    };
                case td.V.YOUTUBE:
                    return {
                        action: w.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(tA.C, { ...t }),
                        title: eN.intl.string(eN.t.lNmxbE),
                    };
                case td.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(tv.Z, { ...t }),
                        action: w.GameProfileTrackActionActions.FacebookLink,
                        title: eN.intl.string(eN.t.FjyREK),
                    };
                case td.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(tE.L, { ...t }),
                        action: w.GameProfileTrackActionActions.InstagramLink,
                        title: eN.intl.string(eN.t["cgR+IK"]),
                    };
                case td.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(tI.a, { ...t }),
                        action: w.GameProfileTrackActionActions.BlueskyLink,
                        title: eN.intl.string(eN.t["D/PHq5"]),
                    };
                case td.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(tN.T, { ...t }),
                        action: w.GameProfileTrackActionActions.RedditLink,
                        title: eN.intl.string(eN.t["Hgb+fc"]),
                    };
                case td.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(tb.a, { ...t }),
                        action: w.GameProfileTrackActionActions.TwitchLink,
                        title: eN.intl.string(eN.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tC),
        o = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, a.jsx)(h.m, {
        text: c,
        children: (0, a.jsx)(el.D, { onClick: o, className: tS.yO, title: c, children: r }),
    });
}
var ty = n(31300),
    tR = n(802516),
    tL = n(22363),
    tP = n(418524),
    tG = n(672572);
function tO(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case tu.Y.DESKTOP:
            return (0, a.jsx)(ty.k, { size: "xs", ...n });
        case tu.Y.XBOX:
            return (0, a.jsx)(tR.Y, { size: "xs", ...n });
        case tu.Y.PLAYSTATION:
            return (0, a.jsx)(tL.X, { size: "xs", ...n });
        case tu.Y.NINTENDO:
            return (0, a.jsx)(tP.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tM(e) {
    let { platform: t } = e;
    return (0, a.jsx)(
        h.m,
        {
            text: (function (e) {
                switch (e) {
                    case tu.Y.DESKTOP:
                        return eN.intl.string(eN.t.KT6uCJ);
                    case tu.Y.XBOX:
                        return eN.intl.string(eN.t.DDWUJp);
                    case tu.Y.PLAYSTATION:
                        return eN.intl.string(eN.t.fzMz2s);
                    case tu.Y.NINTENDO:
                        return eN.intl.string(eN.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(tO, { platform: t }),
        },
        t,
    );
}
var t_ = n(424994),
    tw = n(422384);
function tV() {
    return (0, a.jsx)(ea.E, { variant: "text-sm/normal", color: "text-subtle", children: eN.intl.string(eN.t.GruYxV) });
}
let tD = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, tr.c)("GameProfileGameDetails"),
        i = s.useMemo(() => t.genres.map(tc.du).join(", "), [t]),
        r = t.getCompanyByRole(eg.wk.PUBLISHER),
        c = t.getCompanyByRole(eg.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        d = c.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        m = s.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(tu.Y.DESKTOP) && (e.has(tu.Y.MACOS) || e.has(tu.Y.LINUX)) && n.push(tu.Y.DESKTOP),
                n.filter((e) => tm.includes(e)).sort((e, t) => tm.indexOf(e) - tm.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return td.p.includes(t);
            })
            .sort((e, t) => td.p.indexOf(e.category) - td.p.indexOf(t.category)),
        h = !(0, to.uJ)(i),
        g = !(0, to.uJ)(o),
        f = !(0, to.uJ)(d),
        j = !(0, to.uJ)(u),
        p = m.length > 0,
        A = x.length > 0 && !x.every((e) => (0, to.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: tw.uW,
        children: [
            (0, a.jsx)("div", {
                className: tw.Gf,
                children: (0, a.jsx)(es.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: eN.intl.string(eN.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tw.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: tw.J1,
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
                                      className: tw.Gu,
                                      children: i,
                                  })
                                : (0, a.jsx)(tV, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tw.J1,
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
                                      className: tw.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(tV, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tw.J1,
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
                                      className: tw.Gu,
                                      children: d,
                                  })
                                : (0, a.jsx)(tV, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tw.J1,
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
                                      className: tw.Gu,
                                      children: eh.i$(new Date(u), "LL"),
                                  })
                                : (0, a.jsx)(tV, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tw.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? eN.intl.string(eN.t.PNqxNe) : eN.intl.string(eN.t["UxAag+"]),
                            }),
                            p
                                ? (0, a.jsx)("div", {
                                      className: tw.Gu,
                                      children: m.map((e) => (0, a.jsx)(tM, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(tV, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tw.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eN.intl.string(eN.t["Oj3o1/"]),
                            }),
                            A
                                ? (0, a.jsx)("div", {
                                      className: tw.Gu,
                                      children: x.map((e) => (0, a.jsx)(tT, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, a.jsx)(tV, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tw.J1,
                        children: [
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eN.intl.string(eN.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(ea.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tw.Gu,
                                children: eN.intl.format(eN.t.XPFZVl, { igdbLink: t_.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: tw.OQ, children: (0, a.jsx)(tf, { game: t, trackAction: n }) }),
        ],
    });
};
var tF = n(714991),
    tU = n(486020),
    tY = n(992638);
function tW() {
    return (0, a.jsxs)(e$, {
        className: tY.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(eJ, { className: tY.dU, width: "30%" }),
            (0, a.jsx)(e$, {
                className: tY.nV,
                children: (0, a.jsxs)("div", {
                    className: tY.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tY.To,
                            children: [
                                (0, a.jsx)(eJ, { className: tY.QV }),
                                (0, a.jsxs)("div", {
                                    className: tY.Yv,
                                    children: [
                                        (0, a.jsx)(eJ, { className: tY.Ag }),
                                        (0, a.jsx)(eJ, { className: tY.zl }),
                                        (0, a.jsx)(eJ, { className: tY.P2 }),
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
function tB(e) {
    let { guild: t } = e,
        n = tU.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        r = null != n && l !== n,
        c = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, a.jsxs)("div", {
        className: tY._C,
        children: [
            r && (0, a.jsx)(eJ, { className: tY.EQ }),
            (0, a.jsx)("img", {
                className: tY.$f,
                src: n,
                alt: eN.intl.formatToPlainString(eN.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tH(e) {
    let { trackAction: t } = e,
        n = (0, tr.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: i, isCommunityInviteResolving: r, isMember: c, closeModal: o } = q(),
        d = s.useCallback(() => {
            null != l &&
                (t(w.GameProfileTrackActionActions.JoinServer),
                o(),
                ey.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eG.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? i && r
            ? (0, a.jsx)(tW, {})
            : null
        : (0, a.jsxs)("div", {
              className: tY.uW,
              children: [
                  (0, a.jsx)(es.D, {
                      className: tY.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: eN.intl.string(eN.t["U2N+ci"]),
                  }),
                  (0, a.jsx)("div", {
                      className: tY.kL,
                      children: (0, a.jsxs)("div", {
                          className: tY.hQ,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: tY.To,
                                  children: [
                                      (0, a.jsx)(tB, { guild: l.guild }),
                                      (0, a.jsxs)("div", {
                                          className: tY.yj,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: tY.YS,
                                                  children: [
                                                      (0, a.jsx)(tF.A, { guild: l.guild, size: 16 }),
                                                      (0, a.jsx)(es.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, to.uJ)(l.guild?.description) &&
                                                  (0, a.jsx)(ea.E, {
                                                      className: tY.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, a.jsxs)("div", {
                                                        className: tY.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: tY.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tY._o }),
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
                                                                    className: tY.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tY.jk }),
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
var tz = n(369606),
    tX = n(775602),
    tK = n(21161),
    tJ = n(400492),
    t$ = n(459746),
    tQ = n(732369);
let tq = n(892799),
    tZ = s.forwardRef(function (e, t) {
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
        return (0, to.uJ)(l)
            ? null
            : (0, a.jsxs)("div", {
                  ref: t,
                  children: [
                      (0, a.jsx)("div", { className: tQ.y1, style: { backgroundImage: `url("${l}")` } }),
                      (0, a.jsx)("div", { className: tQ.N4 }),
                  ],
              });
    });
function t0(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(tc.du).join(", ");
    return (0, to.uJ)(n) ? null : (0, a.jsx)(ea.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function t1(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: tQ.Qc,
        children: [
            (0, a.jsx)(tz.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(ea.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eN.intl.formatToPlainString(eN.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t4(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, a.jsx)(t8, {
        game: t,
        className: c()(n ? tQ.n8 : tQ.FS, !n && (0, t$.cO)(t) && tQ.CD),
        imageClassName: tQ.xe,
    });
}
function t8(e) {
    let { game: t, className: n, imageClassName: l } = e,
        i = (0, a.jsx)(t$.Ay, { game: t, className: l, size: t$.wu.LARGE });
    return t.id !== e8
        ? (0, a.jsx)("div", { className: n, children: i })
        : (0, a.jsx)(t2, { className: n, children: i });
}
function t2(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(tK.x),
        i = (0, m.bG)([tX.Ay], () => tX.Ay.useReducedMotion),
        r = s.useRef({ count: 0, lastTime: 0 });
    return (0, a.jsx)(el.D, {
        className: c()(n, tQ.b3),
        "aria-label": eN.intl.string(eN.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = r.current,
                a = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((r.current = { count: a, lastTime: t }), 3 === a)) {
                if (((r.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tJ.Ak)("discodo");
            }
        },
        children: t,
    });
}
let t3 = function (e) {
    let { game: t } = e,
        { isTwoColumn: n } = q(),
        l = t.name;
    return (0, a.jsxs)("div", {
        className: tQ.ap,
        children: [
            n && (0, a.jsx)(t8, { game: t, className: c()(tQ.Tf, (0, t$.cO)(t) && tQ.wS), imageClassName: tQ.w$ }),
            (0, a.jsxs)("div", {
                className: tQ.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(t1, { rank: t.l30Rank }),
                    (0, a.jsxs)("div", {
                        className: tQ.$,
                        children: [
                            (0, a.jsx)(es.D, { variant: "heading-xxl/semibold", children: l }),
                            t.id === e8 &&
                                (0, a.jsx)("img", {
                                    src: tq,
                                    className: tQ.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, a.jsx)(t0, { game: t }),
                ],
            }),
        ],
    });
};
var t5 = n(141628),
    t6 = n(289363),
    t7 = n(134131);
function t9() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: t7.uW,
        children: [
            (0, a.jsx)(eJ, { className: t7.dU, width: "30%" }),
            (0, a.jsxs)(e$, {
                className: t7.nV,
                children: [
                    (0, a.jsx)("div", { className: t7.sB, children: (0, a.jsx)(t6.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: t7.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: t7.Yv,
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
function ne(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, tr.c)("GameProfileLinkAccount"),
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
          ? (0, a.jsx)(t9, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: t7.uW,
                  children: [
                      (0, a.jsx)(es.D, {
                          className: t7.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eN.intl.string(eN.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: t7.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: t7.sB,
                                  children: (0, a.jsx)(t6.default, { application: d }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: t7.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: t7.FS,
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
                                          icon: t5.A,
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
var nt = n(635377),
    nn = n.n(nt),
    nl = n(80687),
    ni = n(534573),
    na = n(248643),
    ns = n(256905),
    nr = n(684519),
    nc = n(191096),
    no = n(90721),
    nd = n(258924);
function nu(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function nm(e, t) {
    return (0, ni.Ec)(e, { size: t, keepAspectRatio: !0, format: tU.QB ? "webp" : null });
}
let nx = new (nn())({ max: 100 }),
    nh = s.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [i, r] = s.useState(null),
            o = null != i && i.url === t ? i.isPortrait : (nx.get(t) ?? !1),
            d = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (nx.set(t, n),
                        r((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            u = s.useCallback((e) => d(e.currentTarget), [d]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: d,
                    src: nm(t, 106),
                    className: c()(nd.r4, !o && nd.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, a.jsx)("img", { ref: d, src: nm(t, 900), className: c()(nd.c8, o && nd.D7, l), alt: n, onLoad: u }),
            ],
        });
    }),
    ng = s.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: i, isPlaying: r, onSelect: o, gameName: d, listItemProps: u } = e,
            m = s.useCallback(() => o(l), [o, l]),
            x = u?.tabIndex;
        return (0, a.jsx)(el.D, {
            ...u,
            className: c()(nd.JS, i && nd.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: nd.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: nm("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nd.xn,
                        alt: eN.intl.formatToPlainString(eN.t.COYYrn, { game: d }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, a.jsx)("div", {
                            className: nd.UZ,
                            children: (0, a.jsx)(nl.D, { playing: i && r, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nf = s.memo(function (e) {
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
            (0, no.A)({ videoRef: i, canvasRef: u, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: u, className: nd.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: nd.tN,
                        children: (0, a.jsx)(na.A, {
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
                            renderLinkComponent: nr.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: nd.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nj(e) {
    let { game: t, trackAction: n } = e,
        [l, i] = s.useState(0),
        [r, c] = s.useState(null),
        [o, d] = s.useState(t.screenshotUrls),
        u = s.useRef(null),
        x = s.useRef(null),
        h = (0, m.bG)([tX.Ay], () => tX.Ay.useReducedMotion),
        { obscured: g } = (0, nc.I3)(),
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
        k = s.useRef(null),
        S = s.useCallback(() => {
            n(E ? w.GameProfileTrackActionActions.ClickTrailer : w.GameProfileTrackActionActions.ClickImage);
            let e = u.current,
                t = k.current,
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
            (0, ns.R)({
                items: r,
                startingIndex: A,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: i,
                onClose: () => {
                    let e = x.current,
                        t = k.current,
                        n = null != e ? !e.paused : l;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        b(n));
                },
            });
        }, [n, j, A, E]),
        C = s.useCallback(() => b(!0), []),
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
              className: nd.kL,
              children: [
                  E
                      ? (0, a.jsx)("div", {
                            className: nd.ND,
                            children: (0, a.jsx)(
                                nf,
                                {
                                    item: v,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: u,
                                    mediaPlayerRef: k,
                                    onPlay: C,
                                    onPause: T,
                                    onFullscreenChange: R,
                                },
                                `${A}-${v.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: nd.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: nd.Jy,
                                            onAnimationEnd: y,
                                            children: (0, a.jsx)(nh, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, a.jsx)("div", { className: nd.QN }),
                                (0, a.jsx)(el.D, {
                                    className: nd.gv,
                                    onClick: S,
                                    children: (0, a.jsx)("div", {
                                        className: nd.cs,
                                        children: (0, a.jsx)(
                                            nh,
                                            {
                                                url: v.url,
                                                className: nd.Jf,
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
                            items: p,
                            getItemKey: nu,
                            renderItem: (e, n) => {
                                let { item: l, index: i } = e;
                                return (0, a.jsx)(
                                    ng,
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
                      : (0, a.jsx)(eu.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, a.jsx)(
                                    ng,
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
var np = n(49381),
    nA = n(661531),
    nv = n(223273);
function nE(e, t, n) {
    if (null == e || null == t || t < 10) return nv.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nv.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nv.vI.VERY_POSITIVE
              : nv.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nv.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nv.vI.MIXED;
    if (e >= 20) return nv.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nv.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nv.vI.VERY_NEGATIVE;
    return nv.vI.OVERWHELMINGLY_NEGATIVE;
}
function nI(e) {
    switch (e) {
        case nv.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nv.vI.OVERWHELMINGLY_POSITIVE:
        case nv.vI.VERY_POSITIVE:
        case nv.vI.POSITIVE:
        case nv.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nv.vI.MIXED:
            return "steam-review-text-mixed";
        case nv.vI.MOSTLY_NEGATIVE:
        case nv.vI.NEGATIVE:
        case nv.vI.VERY_NEGATIVE:
        case nv.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nN =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nb = n(778591);
function nk(e) {
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
var nS = n(255417);
function nC(e) {
    let { url: t, trackAction: n, title: l, rating: i, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tk.A)(),
        d = nE(i, r, "recent" === c),
        u = nI(d),
        m = s.useCallback(() => {
            (n(w.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, a.jsx)(el.D, {
        onClick: m,
        className: nS.nf,
        role: "link",
        "aria-label": eN.intl.string(eN.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nS.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nS.tN,
                    children: [
                        (0, a.jsx)(np.N, { size: "sm", color: nA.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(es.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    h.m,
                    {
                        text:
                            d === nv.vI.NO_USER_REVIEWS
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
                            className: nS.Z0,
                            children: [
                                (0, a.jsx)(ea.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: nS.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nv.vI.NO_USER_REVIEWS:
                                                return eN.intl.string(eN.t.CLMt8J);
                                            case nv.vI.OVERWHELMINGLY_POSITIVE:
                                                return eN.intl.string(eN.t["75sx1S"]);
                                            case nv.vI.VERY_POSITIVE:
                                                return eN.intl.string(eN.t["EkOVg+"]);
                                            case nv.vI.POSITIVE:
                                                return eN.intl.string(eN.t.ZUkFtr);
                                            case nv.vI.MOSTLY_POSITIVE:
                                                return eN.intl.string(eN.t.M7Z09a);
                                            case nv.vI.MIXED:
                                                return eN.intl.string(eN.t.c8yuHR);
                                            case nv.vI.MOSTLY_NEGATIVE:
                                                return eN.intl.string(eN.t.H0MSjG);
                                            case nv.vI.NEGATIVE:
                                                return eN.intl.string(eN.t.vpLrgz);
                                            case nv.vI.VERY_NEGATIVE:
                                                return eN.intl.string(eN.t["5spYuX"]);
                                            case nv.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eN.intl.string(eN.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== nv.vI.NO_USER_REVIEWS &&
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
function nT(e) {
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
        className: nS.nf,
        role: "link",
        "aria-label": eN.intl.string(eN.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nS.Ur,
            children: [
                (0, a.jsx)(es.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eN.intl.string(eN.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nS.WA,
                    children: [
                        null != c ? (0, a.jsx)(ny, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, a.jsx)(nR, { rating: o, tier: c }) : null,
                        u
                            ? (0, a.jsx)(ea.E, {
                                  variant: "text-xs/medium",
                                  color: nI(nv.vI.NO_USER_REVIEWS),
                                  children: eN.intl.string(eN.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function ny(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nN.MIGHTY:
                    return eN.intl.string(eN.t.aZej2g);
                case nN.STRONG:
                    return eN.intl.string(eN.t.MLxnSg);
                case nN.FAIR:
                    return eN.intl.string(eN.t["3f19KA"]);
                case nN.WEAK:
                    return eN.intl.string(eN.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nN.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nN.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nN.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nN.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, a.jsx)(
        h.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: nS.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nR(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case nN.MIGHTY:
                    t = "#fc430a";
                    break;
                case nN.STRONG:
                    t = "#9e00b4";
                    break;
                case nN.FAIR:
                    t = "#4aa1ce";
                    break;
                case nN.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, a.jsx)(
        h.m,
        {
            text: eN.intl.string(eN.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nS.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(nk, { rating: t, strokeColor: l }),
                    (0, a.jsx)(ea.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nS.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nL = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, tr.c)("GameProfileReviews"),
        i = (0, nb.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != i,
        c = t.reviews?.steam,
        o = nE(c?.recentRating, c?.recentRatingCount, !0),
        d = r && o !== nv.vI.NO_USER_REVIEWS,
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
              className: nS.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nS.Gf,
                      children: (0, a.jsx)(es.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eN.intl.string(eN.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nS.kL,
                      children: [
                          d && null != i
                              ? (0, a.jsx)("div", {
                                    className: nS.WH,
                                    children: (0, a.jsx)(nC, {
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
                                    className: nS.WH,
                                    children: (0, a.jsx)(nC, {
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
                                    className: nS.WH,
                                    children: (0, a.jsx)(nT, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nP = n(815996),
    nG = n(722258),
    nO = n(258245),
    nM = n(561769),
    n_ = n(484469),
    nw = n(57020),
    nV = n(682301);
let nD = [];
var nF = n(758836),
    nU = n(747828);
let nY = [0, 1, 2, 3, 4];
function nW(e) {
    return e.skuId;
}
let nB = s.createContext({ trackAction: () => {} });
function nH(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        r = s.useContext(nM.v3),
        { trackAction: c } = s.useContext(nB),
        o = s.useRef(null),
        d = s.useCallback(
            (e) => {
                (c(w.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, nG.B)({
                        skuId: i,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, nw.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = r;
    return (0, a.jsx)(nM.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(nO.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: nU.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function nz() {
    return (0, a.jsx)(n_.A, {});
}
function nX(e) {
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
                            null == e || t || V.A.isShopCollectionFetching(e) || eM(e);
                        }, [e, t]),
                        { skuIds: l ?? nD, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, nV.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = s.useCallback(() => {
            (n(w.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nP.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: nF.G2.CATALOG,
                }));
        }, [n, l]),
        o = s.useMemo(() => ({ trackAction: n }), [n]),
        d = eo("game_profile_shop_carousel");
    return r
        ? (0, a.jsx)(eZ, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(e4, { children: nY.map((e) => (0, a.jsx)(nz, {}, e)) }),
          })
        : 0 === i.length
          ? null
          : (0, a.jsx)(nB.Provider, {
                value: o,
                children: (0, a.jsx)(e0, {
                    title: eN.intl.string(eN.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: d
                        ? (0, a.jsx)(ex.A, {
                              gap: "md",
                              items: i,
                              getItemKey: nW,
                              renderItem: (e, t) => (0, a.jsx)(nH, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, a.jsx)(eu.A, {
                              gap: "md",
                              children: i.map((e) => (0, a.jsx)(nH, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var nK = n(921138),
    nJ = n(311043);
let n$ = [],
    nQ = [];
var nq = n(607346);
let nZ = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function n0(e) {
    return e.id;
}
function n1(e) {
    let { className: t } = e;
    return (0, a.jsx)(e$, { className: t, children: (0, a.jsx)(eJ, { className: nq.Lg }) });
}
function n4(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: i } = q(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        d = null == r || c === r,
        { shouldOpenGameProfile: u, gameId: m } = (0, nK.Ay)({
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
            className: nq.Nr,
            onClick: x,
            "aria-label": eN.intl.formatToPlainString(eN.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(t$.Ay, {
                    game: t,
                    className: nq.xe,
                    size: t$.wu.SMALL,
                    imageSize: 256,
                    onLoad: g,
                    onError: g,
                }),
                !d && (0, a.jsx)(n1, { className: nq.uz }),
            ],
        }),
    });
}
function n8(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: i } = (function (e) {
            let t = !eO.has(e),
                { data: n, isLoading: l, error: i } = ew(e, t),
                a = t && null != n ? n : n$;
            (0, L.x)(a);
            let s = (0, m.bG)(
                    [nJ.A],
                    () => a.some((e) => null == nJ.A.getGame(e) && !nJ.A.hasNoData(e) && !nJ.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [nJ.A, $.default],
                    () => {
                        let e = $.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => nJ.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, nK.T_)(t) && !(0, H.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: nQ };
        })(t),
        s = eo("game_profile_similar_games");
    return eO.has(t)
        ? null
        : l
          ? (0, a.jsx)(eZ, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: nq.XG,
                    style: nZ,
                    children: (0, a.jsx)(e4, {
                        children: ee()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(n1, { className: nq.aZ }, e)),
                    }),
                }),
            })
          : 0 === i.length
            ? null
            : (0, a.jsx)(e0, {
                  title: eN.intl.string(eN.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: nq.XG,
                      style: nZ,
                      children: s
                          ? (0, a.jsx)(ex.A, {
                                gap: "md",
                                items: i,
                                getItemKey: n0,
                                itemClassName: nq.cW,
                                renderItem: (e, t) =>
                                    (0, a.jsx)(n4, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(eu.A, {
                                gap: "md",
                                children: i.map((e) => (0, a.jsx)(n4, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
n(667532);
var n2 = n(853022);
let n3 = new Set(["1402418703554842694", "356877880938070016"]),
    n5 = [td.V.EPICGAMES, td.V.STEAM, td.V.ROBLOX, td.V.BATTLENET, td.V.RIOT, td.V.MINECRAFT];
var n6 = n(349361),
    n7 = n(924895),
    n9 = n(422688),
    le = n(505200),
    lt = n(695250);
let ln = function (e) {
    switch (e.category) {
        case td.V.STEAM:
            return {
                icon: np.N,
                text: eN.intl.string(eN.t.FsANs4),
                ariaLabel: eN.intl.string(eN.t["P+ePTG"]),
                action: w.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case td.V.EPICGAMES:
            return {
                icon: n6.r,
                text: eN.intl.string(eN.t.ZbBMHa),
                ariaLabel: eN.intl.string(eN.t.BwX0UW),
                action: w.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case td.V.ROBLOX:
            return {
                icon: n7.H,
                text: eN.intl.string(eN.t["pJ+P+h"]),
                ariaLabel: eN.intl.string(eN.t.tYxpdf),
                action: w.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case td.V.BATTLENET:
            return {
                icon: n9.a,
                text: eN.intl.string(eN.t["A7grp+"]),
                ariaLabel: eN.intl.string(eN.t.x9at20),
                action: w.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case td.V.RIOT:
            return {
                icon: le.A,
                text: eN.intl.string(eN.t.h6MapL),
                ariaLabel: eN.intl.string(eN.t["528nvc"]),
                action: w.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case td.V.MINECRAFT:
            return {
                icon: lt.m,
                text: eN.intl.string(eN.t["HZbmO+"]),
                ariaLabel: eN.intl.string(eN.t.WWTqYn),
                action: w.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tR.Y,
                text: eN.intl.string(eN.t["QpN/Iz"]),
                ariaLabel: eN.intl.string(eN.t["8JZmmF"]),
                action: w.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function ll(e) {
    return (0, a.jsx)(g.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var li = n(48460);
function la(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, nb.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eG.d3x.XBOX_GAME_PASS && !(0, to.uJ)(e.id));
                return t?.id == null ? null : (0, n2.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== td.V.EPICGAMES || !!n3.has(l)) &&
                            (e.category !== td.V.STEAM || a !== u.Y.RETIRED_ABANDONED) &&
                            n5.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === td.V.STEAM) ||
                    e.push({ category: td.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === td.V.STEAM ? -1 : +(t.category === td.V.STEAM)));
                return (null != n && s.unshift({ category: "XBOX_GAME_PASS", url: n }), s);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function ls(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tk.A)();
    return (0, a.jsx)(ll, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lr = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: i, storeWebsites: r } = la(t),
        c = s.useMemo(() => r.map(ln).filter((e) => null != e), [r]);
    if (!i) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(ls, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, a.jsxs)("div", {
            className: li.G,
            children: [(0, a.jsx)(ls, { data: c[0], trackAction: l }), (0, a.jsx)(ls, { data: c[1], trackAction: l })],
        });
    let o = (0, a.jsx)(ll, {
        text: eN.intl.string(eN.t["/hMurx"]),
        "aria-label": eN.intl.string(eN.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: i } = e;
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await n.e("176758").then(n.bind(n, 459477));
                    return (n) => (0, a.jsx)(e, { game: t, websiteButtons: l, trackAction: i, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, a.jsxs)("div", { className: li.G, children: [(0, a.jsx)(ls, { data: c[0], trackAction: l }), o] })
        : o;
};
var lc = n(123292);
function lo(e) {
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
        className: c()(tG.fi, tG.mX),
        children: [
            (0, a.jsx)(ea.E, {
                ref: l,
                className: tG.g5,
                lineClamp: i ? void 0 : u,
                variant: "text-md/medium",
                children: t.description,
            }),
            r && (0, a.jsx)(lc.Q, { onClick: o, text: m }),
        ],
    });
}
var ld = n(109112),
    lu = n(761508),
    lm = n(376357),
    lx = n(857250),
    lh = n(97483),
    lg = n(922016),
    lf = n(980707),
    lj = n(477782),
    lp = n(663341),
    lA = n(408278),
    lv = n(34188),
    lE = n(173936),
    lI = n(365199),
    lN = n(789645),
    lb = n(442433),
    lk = n(50268),
    lS = n(44724),
    lC = n(676924),
    lT = n(957565),
    ly = n(695366),
    lR = n(540185),
    lL = n(926268),
    lP = n(53788),
    lG = n(831453),
    lO = n(785866),
    lM = n(555704),
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
        { game: i, className: r, trackAction: c } = e,
        o = s.useRef(null),
        d = s.useRef(null),
        u = (0, lk.A)({ id: i.id, label: eN.intl.string(eN.t.SHQGPj) }),
        x =
            ((t = i.id),
            (l = s.useCallback(() => {
                null != t &&
                    (c?.(w.GameProfileTrackActionActions.Feedback),
                    (0, p.openModalLazy)(async () => {
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
                : (0, a.jsx)(lj.Dr, {
                      id: "game-profile-something-wrong",
                      label: eN.intl.string(eN.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: ly.E },
                  })),
        f = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([lW.default], () => lW.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: lR.x.FAVORITE_GAMES,
                            addLabel: eN.intl.string(eN.t.fgmitg),
                            removeLabel: eN.intl.string(eN.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: lL.HeartIcon,
                        },
                        {
                            type: lR.x.PLAYED_GAMES,
                            addLabel: eN.intl.string(eN.t["0xIVLR"]),
                            removeLabel: eN.intl.string(eN.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: lP.G,
                        },
                        {
                            type: lR.x.CURRENT_GAMES,
                            addLabel: eN.intl.string(eN.t.G0c4En),
                            removeLabel: eN.intl.string(eN.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: lG.H,
                        },
                        {
                            type: lR.x.WANT_TO_PLAY_GAMES,
                            addLabel: eN.intl.string(eN.t.UuBS4K),
                            removeLabel: eN.intl.string(eN.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: lO._,
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
                d = s.useCallback(
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
                u = s.useCallback(
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
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof lw.R && e.applicationId === o);
                h.push(
                    (0, a.jsx)(
                        lj.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eN.intl.formatToPlainString(eN.t.Ktb1n8, { name: n })
                                : eN.intl.formatToPlainString(eN.t.Xp6iZt, { name: n }),
                            action: () => u(!e),
                            leadingAccessory: { type: "icon", icon: lM.U },
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
                    h.push(
                        (0, a.jsx)(
                            lj.Dr,
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
        { closeModal: j } = q(),
        A = (0, m.bG)([X.A], () => X.A.getApplicationIdFromDetectableId(i.id)),
        v = (0, m.bG)([X.A], () => X.A.hasStorefrontForApplicationId(A), [A]),
        E = Y({ location: "GameProfileOverflowMenu" }),
        I = s.useCallback(() => {
            null != A && (0, lS.G)({ applicationId: A });
        }, [A]),
        b = s.useCallback(() => {
            null != A && (c(w.GameProfileTrackActionActions.GameShop), (0, lS.default)({ applicationId: A }), j());
        }, [A, c, j]),
        k = s.useCallback(() => j(!1), [j]),
        S = s.useCallback(() => {
            c(w.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eG.BVt.GAME_PROFILE(i.id)}`;
            (0, lT.C)(e, () => {
                (0, lm.P)((0, lx.o)(eN.intl.string(eN.t["+5kSoW"]), lh.Ck.SUCCESS));
            });
        }, [i.id, c]);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            E &&
                (0, a.jsx)(lC.A, {
                    location: N.A.GAME_PROFILE,
                    onNavigateToQuestHome: j,
                    variant: "overlay-secondary",
                }),
            null != f &&
                (0, a.jsx)(lg.Y, {
                    targetElementRef: d,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lf.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, lb.Z_)(), t());
                            },
                            "aria-label": eN.intl.string(eN.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(lj.rX, { children: f }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: d,
                            children: (0, a.jsx)(g.$, {
                                icon: lp.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eN.intl.string(eN.t.sidPSo),
                            }),
                        }),
                }),
            v &&
                (0, a.jsx)(h.m, {
                    text: eN.intl.string(eN.t.apFNLU),
                    children: (0, a.jsx)(lA.K, {
                        icon: lv.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eN.intl.string(eN.t.apFNLU),
                        onMouseDown: I,
                        onClick: b,
                    }),
                }),
            (0, a.jsx)(h.m, {
                text: eN.intl.string(eN.t.WqhZss),
                children: (0, a.jsx)(lA.K, {
                    icon: lE.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": eN.intl.string(eN.t.WqhZss),
                    onClick: S,
                }),
            }),
            (null != u || null != x) &&
                (0, a.jsx)(lg.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lf.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, lb.Z_)(), t());
                            },
                            "aria-label": eN.intl.string(eN.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(lj.rX, { children: x }), (0, a.jsx)(lj.rX, { children: u })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(h.m, {
                            text: eN.intl.string(eN.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, a.jsx)(lA.K, {
                                    icon: lI.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eN.intl.string(eN.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(lA.K, {
                icon: lN.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: k,
                "aria-label": eN.intl.string(eN.t.cpT0Cq),
            }),
        ],
    });
}
var lX = (((i = {}).OVERVIEW = "overview"), (i.COMMERCE = "commerce"), i),
    lK = n(478016),
    lJ = n(900797),
    l$ = n(847374),
    lQ = n(331322),
    lq = n(421773);
let lZ = "text-md/medium";
function l0(e) {
    let { className: t, label: n, navigation: l } = e,
        { selectedTab: i, selectTab: r, commercePages: c, selectedCommercePageIndex: o, selectCommercePage: d } = l,
        u = s.useRef(null),
        { isHovered: m, setIsHovered: x, onMouseEnter: h, onMouseLeave: g, cancelTimers: f } = (0, lq.A)(100, 100),
        j = eN.intl.string(eN.t["J3/JCl"]),
        p = s.useCallback(
            (e) => {
                (f(), x(e));
            },
            [f, x],
        );
    return (0, a.jsx)(lg.Y, {
        targetElementRef: u,
        shouldShow: m,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => p(!0),
        onRequestClose: () => p(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)("div", {
                onMouseEnter: h,
                onMouseLeave: g,
                children: (0, a.jsx)(lf.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": j,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, a.jsx)(lj.rX, {
                        children: c.map((e, t) => {
                            var n;
                            let l,
                                s = i === lX.COMMERCE && t === o,
                                r =
                                    ((n = e.title),
                                    null != (l = n?.trim()) && l.length > 0
                                        ? l
                                        : eN.intl.formatToPlainString(eN.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, a.jsx)(
                                lj.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: r,
                                    color: s ? "brand" : "default",
                                    trailingIndicator: s ? { type: "icon", icon: lK.U } : void 0,
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
                c = s ? lJ.t : l$.a;
            return (0, a.jsx)(lu.V.Item, {
                ...e,
                id: lX.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: i === lX.COMMERCE ? lX.COMMERCE : void 0,
                onClick: (t) => {
                    (r(lX.COMMERCE), e.onClick(t));
                },
                onMouseLeave: g,
                clickableRef: (e) => {
                    u.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": j,
                "aria-haspopup": "menu",
                children: (0, a.jsx)(ea.E, {
                    variant: lZ,
                    color: "none",
                    children: (0, a.jsxs)(lQ.B, {
                        as: "span",
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        fullWidth: !1,
                        children: [n, (0, a.jsx)(c, { size: "xs", color: "currentColor" })],
                    }),
                }),
            });
        },
    });
}
function l1(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i, hasCommerceTab: s, commercePages: r } = n;
    if (!s) return null;
    let c = eN.intl.string(eN.t.apFNLU);
    return r.length > 1
        ? (0, a.jsx)(l0, { className: t, label: c, navigation: n })
        : (0, a.jsx)(lu.V.Item, {
              id: lX.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: l,
              onClick: () => i(lX.COMMERCE),
              className: t,
              "aria-label": c,
              children: (0, a.jsx)(ea.E, { variant: lZ, color: "none", children: c }),
          });
}
var l4 = n(510954);
function l8(e) {
    let { game: t, trackAction: n, navigation: l } = e,
        { selectedTab: i, selectTab: r } = l,
        c = t.getIconURL(64),
        [o, d] = s.useState(null),
        u = s.useCallback(() => d(c), [c]),
        m = eN.intl.string(eN.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: l4.ln,
        children: (0, a.jsxs)("div", {
            className: l4.ap,
            children: [
                (0, a.jsx)("div", {
                    className: l4.wE,
                    children:
                        null != c && c !== o
                            ? (0, a.jsx)("img", { src: c, alt: "", className: l4.FC, draggable: !1, onError: u })
                            : (0, a.jsx)(ld._, { size: "md" }),
                }),
                (0, a.jsxs)(lu.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: r,
                    className: l4.vR,
                    children: [
                        (0, a.jsx)(lu.V.Item, {
                            id: lX.OVERVIEW,
                            disableItemStyles: !0,
                            className: l4.Mf,
                            "aria-label": m,
                            children: (0, a.jsx)(ea.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, a.jsx)(l1, { className: l4.Mf, navigation: l }),
                    ],
                }),
                (0, a.jsx)(lz, { game: t, className: l4.HK, trackAction: n }),
            ],
        }),
    });
}
var l2 = n(871123),
    l3 = n(439303),
    l5 = n(317560),
    l6 = n(467884),
    l7 = n(761812);
function l9(e) {
    return e;
}
function ie(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: l7.B, children: t });
}
function it(e) {
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
                getItemKey: l9,
                disableFocusRingScope: !0,
                renderItem: (e, t, l) =>
                    (0, a.jsx)(ie, {
                        children: (0, a.jsx)(l6.Ay, {
                            positionInSection: l,
                            skuId: e,
                            variant: l6.s6.SMALL,
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
                        ie,
                        {
                            children: (0, a.jsx)(l6.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: l6.s6.SMALL,
                                analyticsLocations: n,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var il = n(403581),
    ii = n(812095),
    ia = n(421108),
    is = n(647474),
    ir = n(162536);
function ic(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, ia.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        s = i ? il.t : t.Icon;
    return (0, a.jsx)(is.A, {
        className: c()(ir.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: ir.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: ir.Kk }),
                (0, a.jsx)(ea.E, { variant: "text-sm/normal", color: "currentColor", children: (0, ii.U)(t.text) }),
            ],
        }),
    });
}
var io = n(521058);
function id() {
    let { storefrontPromotion: e } = q();
    return e?.flavor !== "nitro" ? null : (0, a.jsx)(ic, { className: io.v, promotion: e });
}
let iu = [0, 1, 2, 3],
    im = { placement: l3.Ye.GAME_PROFILE };
function ix() {
    return (0, a.jsx)(eZ, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(e4, { children: iu.map((e) => (0, a.jsx)(ie, { children: (0, a.jsx)(l6.yf, {}) }, e)) }),
    });
}
function ih(e) {
    let { trackAction: t } = e,
        {
            socialLayerStorefrontRecommendationsData: n,
            socialLayerStorefrontRecommendationsLoading: l,
            closeModal: i,
        } = q(),
        { analyticsLocations: r } = (0, b.Ay)([N.A.GAME_PROFILE]),
        c = s.useCallback(() => {
            n?.application != null &&
                (t(w.GameProfileTrackActionActions.GameShop),
                i(),
                (0, lS.default)({ applicationId: n.application.id }));
        }, [n, t, i]),
        o = s.useCallback(
            (e, l) => {
                let a = n?.guildId;
                null != a &&
                    (t(w.GameProfileTrackActionActions.GameShopItem),
                    (0, l5.R)({
                        skuId: e,
                        applicationId: l,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, l2.rG)(e, t, l, a) && i();
                        },
                    }));
            },
            [t, i, r, n],
        );
    if (l) return (0, a.jsx)(ix, {});
    if (null == n) return null;
    let { skuIds: d } = n;
    return (0, a.jsxs)(e0, {
        title: eN.intl.string(eN.t.WDdlUb),
        onClickViewAll: c,
        children: [
            (0, a.jsx)(id, {}),
            (0, a.jsx)(l3.E9, {
                newValue: im,
                children: (0, a.jsx)(it, { skuIds: d, analyticsLocations: r, onCardClick: o }),
            }),
        ],
    });
}
var ig = n(733391),
    ij = n(156454);
let ip = [],
    iA = s.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, a.jsxs)("div", {
            className: tG.oC,
            children: [
                (0, a.jsxs)("div", {
                    className: tG.lM,
                    children: [
                        (0, a.jsx)(nj, { game: t, trackAction: n }),
                        (0, a.jsx)(lo, { game: t, trackAction: n }),
                    ],
                }),
                (0, a.jsx)(ts, { gameId: t.id, trackAction: n }),
                (0, a.jsx)(ih, { trackAction: n }),
                (0, a.jsx)(nX, { game: t, trackAction: n }),
                (0, a.jsx)(n8, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    iv = s.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            i = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
        return (0, a.jsxs)("div", {
            className: tG.V0,
            children: [
                (0, a.jsx)(nj, { game: t, trackAction: n }),
                (0, a.jsxs)("div", {
                    className: tG.gr,
                    children: [
                        (0, a.jsx)(t4, { game: t, isTwoColumn: !1 }),
                        (0, a.jsxs)("div", {
                            className: tG.E1,
                            children: [
                                (0, a.jsx)(lr, { game: t, trackAction: n }),
                                (0, a.jsx)(lo, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(ne, { analyticsLocations: l, trackAction: n }),
                (0, a.jsx)(tH, { trackAction: n }),
                (0, a.jsx)(ts, { gameId: t.id, trackAction: n }),
                (0, a.jsx)(ih, { trackAction: n }),
                (0, a.jsx)(nX, { game: t, trackAction: n }),
                (0, a.jsx)(n8, { gameId: t.id, trackAction: n }),
                i && (0, a.jsx)(nL, { game: t, trackAction: n }),
                (0, a.jsx)(tD, { game: t, trackAction: n }),
            ],
        });
    });
function iE(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: i } = q();
    (0, k.A)({
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
function iI(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: i } = e,
        s = (0, I.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, a.jsx)("div", {
              className: tG.NC,
              children: (0, a.jsx)(iE, { onCloudPlayClick: s, analyticsLocations: l, trackAction: i }),
          });
}
function iN(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        i = (0, E.A)(t.linkedApplications)?.id,
        [s] = (0, P.L_)(t.getOfficialApplicationId()),
        [r] = (0, P.L_)(t.id),
        { showsStoreLinks: o } = la(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: c()(tG.Pn, tG.fi, tG.iH, o ? tG.sV : tG.gF),
        children: [
            null == i || s || r
                ? null
                : (0, a.jsx)(iI, { gameId: t.id, cloudPlayAppId: i, analyticsLocations: l, trackAction: n }),
            (0, a.jsxs)("div", {
                className: tG.V0,
                children: [
                    (0, a.jsx)(lr, { game: t, trackAction: n }),
                    (0, a.jsx)(ne, { analyticsLocations: l, trackAction: n }),
                    (0, a.jsx)(tH, { trackAction: n }),
                    d && (0, a.jsx)(nL, { game: t, trackAction: n }),
                    (0, a.jsx)(tD, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function ib(e) {
    let {
        game: t,
        isTwoColumn: n,
        appContext: l,
        source: i,
        trackExternalAction: s,
        trackAction: r,
        analyticsLocations: c,
    } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(t3, { game: t }),
            (0, a.jsx)(j.F, {
                children: n
                    ? (0, a.jsxs)("div", {
                          className: tG.jC,
                          children: [
                              (0, a.jsx)(iA, { game: t, trackAction: r }),
                              (0, a.jsx)(iN, {
                                  game: t,
                                  appContext: l,
                                  source: i,
                                  trackExternalAction: s,
                                  trackAction: r,
                                  analyticsLocations: c,
                              }),
                          ],
                      })
                    : (0, a.jsx)("div", {
                          className: tG.b9,
                          children: (0, a.jsx)(iv, { game: t, trackAction: r, analyticsLocations: c }),
                      }),
            }),
        ],
    });
}
function ik(e) {
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
        [f, j] = s.useState(!0),
        [E, I] = s.useState(null),
        { clientThemesClassName: k } = (0, T.Ay)(),
        P = (0, m.bG)([_.default], () => _.default.locale),
        D = s.useMemo(() => (0, w.generateViewId)(), []),
        { analyticsLocations: F } = (0, b.Ay)(N.A.GAME_PROFILE),
        U = (0, W.s)(t),
        { data: q } = (0, L.I)(t),
        Z = q?.getOfficialApplicationId(),
        ee = (0, B.rG)(q),
        et = null != Z,
        en = (0, m.bG)([C.A], () => null != Z && C.A.didFetchingApplicationFail(Z), [Z]),
        el = q?.name ?? "",
        ei = (0, H.A)(q),
        ea = s.useRef(null);
    s.useEffect(() => {
        ea.current = E;
    }, [E]);
    let {
            hasAlreadyLinked: es,
            canStartAuthorization: er,
            fetched: ec,
            startAuthorization: eo,
            connectionApp: ed,
        } = (0, S.RD)(q),
        { invite: eu, isMember: em, isResolving: ex } = (0, B.Ay)(q, I),
        { socialLayerStorefrontRecommendationsData: eh, socialLayerStorefrontRecommendationsLoading: eg } = (function (
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
                r = (0, m.bG)([C.A], () => null != l && C.A.didFetchingApplicationFail(l), [l]),
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
        ef = Y({ location: "GameProfileModal" }),
        ej = (0, O.u)({ surface: "storefront_banner", applicationId: ef ? eh?.application.id : null }),
        ep = s.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, w.getGuildIdAndVerifiedFromInvite)(ea.current);
                (0, w.trackGameProfileAction)({
                    gameName: el,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: D,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [el, t, D, n],
        );
    ((0, v.Ay)(() => {
        ((0, w.trackGameProfileOpen)({
            source: n,
            viewId: D,
            gameId: t,
            gameName: el,
            authorId: l,
            profileType: w.GameProfileTypes.FullProfile,
        }),
            (0, y.He)());
    }),
        (0, v.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, w.getGuildIdAndVerifiedFromInvite)(ea.current),
                l = Date.now(),
                i = U.map((e) => {
                    let t = (0, R.JM)(e) ? (0, R.W6)(e, l) : (0, R.aJ)(e, P);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, w.trackGameProfileClose)({
                viewId: D,
                gameId: t,
                gameName: el,
                playedFriendIds: U.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: V.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let eA = s.useCallback((e) => {
            j(e.contentRect.width >= 800);
        }, []),
        ev = (0, d.w)(eA, [], { fireOnMount: !0 }),
        eE = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, p.closeAllModals)(), (0, M.closeUserProfileModal)()) : r();
            },
            [r],
        ),
        eI = s.useCallback(() => eE(!1), [eE]),
        eN = s.useRef(null),
        eb = (function (e) {
            let { gameId: t, officialApplicationId: n, commerceEnabled: l, scrollerRef: i } = e;
            s.useEffect(() => {
                l && (0, ig.Xw)();
            }, [l]);
            let a = (0, m.bG)(
                    [X.A],
                    () => X.A.getApplicationIdFromDetectableId(t) ?? (X.A.hasStorefrontForApplicationId(n) ? n : null),
                    [t, n],
                ),
                r = l && null != a,
                { effectiveStorefront: c } = (0, ij.A)({ applicationId: r ? a : null }),
                o = (0, m.bG)(
                    [X.A],
                    () => (r && null != a ? (X.A.getStorefrontDataForApplicationId(a)?.storefront ?? null) : null),
                    [r, a],
                ),
                d = c ?? o,
                u = d?.pages ?? ip,
                [x, h] = s.useState(lX.OVERVIEW),
                [g, f] = s.useState({ storefrontId: d?.id, index: 0 }),
                j = r ? x : lX.OVERVIEW,
                p = g.storefrontId === d?.id && g.index < u.length ? g.index : 0,
                A = s.useCallback(
                    (e) => {
                        (h(e), i.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }));
                    },
                    [i],
                ),
                v = s.useCallback(
                    (e) => {
                        !r || e < 0 || e >= u.length || (f({ storefrontId: d?.id, index: e }), A(lX.COMMERCE));
                    },
                    [u, d?.id, r, A],
                );
            return s.useMemo(
                () => ({
                    selectedTab: j,
                    selectTab: A,
                    hasCommerceTab: r,
                    commercePages: u,
                    selectedCommercePageIndex: p,
                    selectCommercePage: v,
                }),
                [j, A, r, u, p, v],
            );
        })({ gameId: t, officialApplicationId: Z, commerceEnabled: ef, scrollerRef: eN }),
        { selectedTab: ek } = eb,
        eS = s.useCallback(() => eN.current?.getScrollerNode()?.scrollTop ?? 0, []),
        eC = s.useMemo(
            () => ({
                isTwoColumn: f,
                canStartAuthorization: er,
                hasAlreadyLinked: es,
                fetchedAuthorization: ec,
                startAuthorization: eo,
                connectionApp: ed,
                invite: eu,
                hasDiscordWebsite: ee,
                hasOfficialApplication: et,
                officialApplicationFetchFailed: en,
                isCommunityInviteResolving: ex,
                isMember: em,
                socialLayerStorefrontRecommendationsData: eh,
                socialLayerStorefrontRecommendationsLoading: eg,
                storefrontPromotion: ej,
                closeModal: eE,
                navigateToGame: g,
                getScrollOffset: eS,
            }),
            [f, er, es, ec, eo, ed, eu, ee, et, en, ex, em, eh, eg, ej, eE, g, eS],
        ),
        eT = s.useRef(null);
    s.useEffect(() => {
        null != h && h > 0 && eN.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let ey = s.useCallback((e) => {
        if (null != eT.current) {
            let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
            eT.current.style.opacity = String(t);
        }
    }, []);
    return null == q
        ? null
        : (0, a.jsx)(b.f5, {
              value: F,
              children: (0, a.jsx)(x.N, {
                  transitionState: i,
                  onClose: r,
                  children: (0, a.jsx)(Q.Provider, {
                      value: eC,
                      children: (0, a.jsx)("div", {
                          className: c()(k, tG.kL),
                          ref: ev,
                          children: (0, a.jsxs)(G.A, {
                              obscured: ei,
                              onClose: eI,
                              children: [
                                  ek === lX.OVERVIEW && (0, a.jsx)(tZ, { game: q, ref: eT }),
                                  (0, a.jsxs)(A.Ch, {
                                      ref: eN,
                                      className: tG.XG,
                                      onScroll: ey,
                                      children: [
                                          (0, a.jsx)(l8, { game: q, trackAction: ep, navigation: eb }),
                                          ek === lX.OVERVIEW &&
                                              (0, a.jsx)(ib, {
                                                  game: q,
                                                  isTwoColumn: f,
                                                  appContext: o,
                                                  source: n,
                                                  trackExternalAction: u,
                                                  trackAction: ep,
                                                  analyticsLocations: F,
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
let iS = function (e) {
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
        ik,
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
