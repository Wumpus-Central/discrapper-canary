n.d(t, { default: () => i_ });
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
    g = n(866665),
    h = n(821609),
    f = n(414499),
    j = n(707554),
    p = n(192308),
    A = n(689175),
    E = n(964486),
    v = n(881698),
    I = n(146779),
    N = n(793574),
    b = n(688810),
    C = n(139286),
    k = n(206828),
    S = n(587895),
    T = n(590703),
    y = n(180170),
    R = n(583846),
    P = n(569926),
    L = n(928550),
    M = n(570962),
    O = n(38145),
    G = n(773669),
    _ = n(409626),
    w = n(422069),
    V = n(945810);
let D = { enabled: !1 },
    F = (0, V.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: D,
        variations: { 0: D, 1: { enabled: !0 } },
    });
function U(e) {
    let { location: t } = e;
    return F.useConfig({ location: t }).enabled;
}
var Y = n(733391),
    W = n(832163),
    B = n(429635),
    H = n(156454),
    z = n(205184),
    X = n(957807),
    K = n(49491),
    J = n(429913),
    $ = n(820847),
    Q = n(862772),
    q = n(287809);
let Z = s.createContext(void 0);
function ee() {
    let e = s.useContext(Z);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var et = n(435558),
    en = n.n(et),
    el = n(621466),
    ei = n(966697),
    ea = n(939249),
    es = n(346055),
    er = n(834730),
    ec = n(297264),
    eo = n(460905);
let ed = (0, V.mj)({
    name: "2026-09-new-horizontal-scroll-shared",
    kind: "user",
    defaultConfig: { useNewHScroll: !1 },
    variations: { 0: { useNewHScroll: !1 }, 1: { useNewHScroll: !0 } },
});
function eu(e) {
    return ed.useConfig({ location: e }).useNewHScroll;
}
var em = n(776231),
    ex = n(449543),
    eg = n(46054),
    eh = n(197935),
    ef = n(58703);
n(321073);
var ej = n(155718),
    ep = n(387408),
    eA = n(731068),
    eE = n(59318),
    ev = n(320095),
    eI = n(708676),
    eN = n(383233),
    eb = n(998218),
    eC = n(375708);
let ek = /^#{1,3}\s+(.+)$/,
    eS = /^https?:\/\/\S+$/;
var eT = n(60465),
    ey = n(158390),
    eR = n(636537),
    eP = n(73153),
    eL = n(103348),
    eM = n(927813),
    eO = n(371794),
    eG = n(652215);
let e_ = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function ew(e) {
    eP.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eO.aP)({
                    url: eG.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: G.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(eL.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (eP.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            eP.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        eP.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eV(e) {
    let t = ((await eR.Bo.get({ url: eG.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !e_.has(t),
    );
    eP.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eD = (0, m.UT)(w.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => w.A.getSimilarGames(e) ?? null,
    load: (e) => eV(e),
    retryConfig: { backoff: () => new ey.A(5 * eM.A.Millis.SECOND, 5 * eM.A.Millis.MINUTE) },
    failureStaleAfter: eM.A.Seconds.MINUTE,
});
async function eF(e, t) {
    eP.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eR.Bo.get({ url: eG.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eP.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, ep.A)((0, ev.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, eN._c)(e))
                            return e.components
                                .filter((e) => e.type === ej.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || eS.test(t.trim())
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
                        if ((0, eN._c)(e)) {
                            let t = e.components.find((e) => e.type === ej.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, eA.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, eE.tT)(e.content_type));
                        if (null != t) return (0, eA.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, eE.XB)(e.content_type));
                        if (null != n) return (0, eA.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, eA.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, eA.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, eA.oU)(
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
                        a === i || (0, eN._c)(l)
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
        eP.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eU = n(284009),
    eY = n.n(eU),
    eW = n(376728),
    eB = n(976860),
    eH = n(71393),
    ez = n(449054);
async function eX(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eY()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eH.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eG.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, ez.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eG.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eW.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eB.pX)(eG.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eK = n(320448),
    eJ = n(493285);
let e$ = { sm: eJ.nz, md: eJ.a };
function eQ(e) {
    let { className: t, width: n } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(eJ.qf, t), style: { width: n } });
}
function eq(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: l, style: i, children: n });
}
function eZ(e) {
    let { className: t, size: n = "md" } = e;
    return (0, a.jsx)(eQ, { className: c()(eJ.x6, e$[n], t) });
}
var e0 = n(406510);
function e1(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, a.jsxs)("div", {
        className: e0.kL,
        "aria-busy": !0,
        children: [
            (0, a.jsxs)("div", {
                className: e0.wR,
                children: [(0, a.jsx)(eQ, { className: e0.Iz, width: n }), l && (0, a.jsx)(eZ, { size: "sm" })],
            }),
            t,
        ],
    });
}
function e8(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, a.jsxs)("div", {
        className: e0.kL,
        children: [
            (0, a.jsxs)("div", {
                className: e0.wR,
                children: [
                    (0, a.jsx)(ec.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, a.jsx)(h.$, {
                            size: "sm",
                            icon: eK._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eC.intl.string(eC.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var e4 = n(949959);
function e2(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(e4.n, { [e4.C]: 16 === n }), children: t });
}
let e3 = "1552821538409939044";
var e5 = n(235240),
    e6 = n(165648);
function e7(e, t) {
    return eg.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e9(e) {
    return e.id;
}
function te() {
    return (0, a.jsxs)(eq, {
        className: e5.s7,
        children: [
            (0, a.jsx)(eQ, { className: e5.o$ }),
            (0, a.jsxs)("div", {
                className: e5.UF,
                children: [(0, a.jsx)(eQ, { className: e5.iX }), (0, a.jsx)(eQ, { className: e5.jt })],
            }),
        ],
    });
}
function tt(e, t) {
    var n;
    let l,
        i = (0, em.kr)(364 * (0, em.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = eb.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function tn(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, r] = s.useState(!1),
        c = s.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, a.jsx)(ei.y, {
              readyState: i ? eG.Rv1.READY : eG.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, a.jsx)("img", {
                  src: n,
                  className: e5.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function tl(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, el.vq)(e.target, HTMLAnchorElement) ||
                        ((0, el.vq)(e.target, HTMLSpanElement) && (0, el.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        d = t.media?.proxyUrl ?? t.media?.url,
        u = null != d ? tt(d, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, a.jsx)(ea.D, {
              ...i,
              className: e5.Nr,
              onClick: r,
              children: (0, a.jsxs)(es.M, {
                  className: e5.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(er.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: e5.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: e5._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: e5.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: e5.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, a.jsx)(er.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != u &&
                                  (0, a.jsx)("div", {
                                      className: e5.ax,
                                      children: (0, a.jsx)(tn, { message: t, src: u, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(ec.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: e5.DD,
                                      children: e7(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: c()(e5.h_, e6.PT),
                                      children: [e7(t.body, n), (0, a.jsx)("div", { className: e5.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: e5.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: e5.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, a.jsxs)(er.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, ef.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, a.jsxs)("div", {
                                              className: e5.a5,
                                              children: [
                                                  (0, a.jsx)(eo.n, { size: "xs", color: "currentColor" }),
                                                  (0, a.jsx)(er.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eC.intl.currentLocale).format(
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
let ti = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, a.jsxs)(es.M, {
        className: e5.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(ec.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e5.DD,
                    children: e7(t.title, n),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: c()(e5.h_, e6.PT),
                    children: [e7(t.body, n), (0, a.jsx)("div", { className: e5.fm })],
                }),
            (0, a.jsxs)("div", {
                className: e5.ov,
                children: [
                    (0, a.jsx)(er.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, ef.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: e5.a5,
                            children: [
                                (0, a.jsx)(eo.n, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(er.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(eC.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function ta(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, el.vq)(e.target, HTMLAnchorElement) ||
                        ((0, el.vq)(e.target, HTMLSpanElement) && (0, el.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        d = null != o ? tt(o, c) : void 0;
    return (0, a.jsxs)(ea.D, {
        ...i,
        className: e5.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != d &&
                (0, a.jsx)("div", {
                    className: e5.Vl,
                    children: (0, a.jsx)(tn, { message: t, src: d, aspectRatio: c }),
                }),
            (0, a.jsx)(ti, { message: t, channelId: n }),
        ],
    });
}
function ts(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        r = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(ea.D, {
        ...l,
        className: e5.Nr,
        onClick: r,
        children: (0, a.jsxs)(es.M, {
            className: e5.zI,
            children: [
                (0, a.jsx)(ec.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e5.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: e5.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: e5.Nf,
                                    children: (0, a.jsx)(er.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e5.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, a.jsx)(er.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: e5.PF,
                                children: eC.intl.format(eC.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: e5.ov,
                    children: (0, a.jsx)(er.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eC.intl.format(eC.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, eI.J)(i.expiry) ?? eC.intl.string(eC.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function tr(e) {
    return null != e.message.poll
        ? (0, a.jsx)(ts, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(tl, { ...e })
          : (0, a.jsx)(ta, { ...e });
}
let tc = s.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, b.Ay)(),
        { invite: i, hasDiscordWebsite: r, closeModal: c, getScrollOffset: o } = ee(),
        {
            messages: d,
            guildId: u,
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
                    null == e || n || w.A.isAnnouncementsFetching(e) || eF(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = eu("game_profile_announcements"),
        j = s.useCallback(() => {
            let e = i?.guild?.id ?? u;
            null != e &&
                null != x &&
                (n(_.GameProfileTrackActionActions.Announcements),
                eT.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                c(),
                eX({ invite: i, guildId: e, channelId: x, analyticsLocationStack: l }));
        }, [n, c, o, i, u, x, l, t]),
        p = s.useCallback(
            (e) => {
                let a = i?.guild?.id ?? u;
                null != a &&
                    null != x &&
                    (n(_.GameProfileTrackActionActions.AnnouncementsItem),
                    eT.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                    c(),
                    eX({ invite: i, guildId: a, channelId: x, messageId: e, analyticsLocationStack: l }));
            },
            [n, c, o, i, u, x, l, t],
        ),
        A = null != x && d.length > 0;
    return (!h || g) && r
        ? (0, a.jsx)(e1, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(e2, {
                  gap: 16,
                  children: en()
                      .range(3)
                      .map((e) => (0, a.jsx)(te, {}, e)),
              }),
          })
        : A
          ? (0, a.jsx)(e8, {
                title: eC.intl.string(eC.t.B0BV3Y),
                onClickViewAll: j,
                children: f
                    ? (0, a.jsx)(eh.A, {
                          gap: 16,
                          items: d,
                          getItemKey: e9,
                          itemClassName: e5.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(tr, { message: e, channelId: x, onCardClick: p, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(ex.A, {
                          gap: 16,
                          children: d.map((e) => (0, a.jsx)(tr, { message: e, channelId: x, onCardClick: p }, e.id)),
                      }),
            })
          : null;
});
var to = n(37537),
    td = n(541830),
    tu = n(240248),
    tm = n(505779),
    tx = n(808380);
let tg = [tx.Y.DESKTOP, tx.Y.XBOX, tx.Y.PLAYSTATION, tx.Y.NINTENDO];
var th = n(28863),
    tf = n(975807),
    tj = n(194362);
function tp(e) {
    let { game: t, trackAction: n } = e,
        l = s.useCallback(async () => {
            n(_.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, tj.a)(eG.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tf.A)(e);
        }, [n]),
        i = s.useCallback((e) => (0, a.jsx)(th.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === ej.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(er.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eC.intl.format(eC.t.KAjfKl, { claimLink: i }),
          });
}
var tA = n(998445),
    tE = n(274997),
    tv = n(80500),
    tI = n(319745),
    tN = n(488225),
    tb = n(967492),
    tC = n(72265),
    tk = n(454346),
    tS = n(37948),
    tT = n(750013);
let ty = { size: "xs", colorClass: tT.wP };
function tR(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tS.A)(),
        {
            action: i,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case tm.V.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(tA.GlobeEarthIcon, { ...t }),
                        action: _.GameProfileTrackActionActions.WebsiteLink,
                        title: eC.intl.string(eC.t.fOUKvg),
                    };
                case tm.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(tE.p, { ...t }),
                        action: _.GameProfileTrackActionActions.XLink,
                        title: eC.intl.string(eC.t.INic4y),
                    };
                case tm.V.YOUTUBE:
                    return {
                        action: _.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(tv.C, { ...t }),
                        title: eC.intl.string(eC.t.lNmxbE),
                    };
                case tm.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(tI.Z, { ...t }),
                        action: _.GameProfileTrackActionActions.FacebookLink,
                        title: eC.intl.string(eC.t.FjyREK),
                    };
                case tm.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(tN.L, { ...t }),
                        action: _.GameProfileTrackActionActions.InstagramLink,
                        title: eC.intl.string(eC.t["cgR+IK"]),
                    };
                case tm.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(tb.a, { ...t }),
                        action: _.GameProfileTrackActionActions.BlueskyLink,
                        title: eC.intl.string(eC.t["D/PHq5"]),
                    };
                case tm.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(tC.T, { ...t }),
                        action: _.GameProfileTrackActionActions.RedditLink,
                        title: eC.intl.string(eC.t["Hgb+fc"]),
                    };
                case tm.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(tk.a, { ...t }),
                        action: _.GameProfileTrackActionActions.TwitchLink,
                        title: eC.intl.string(eC.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, ty),
        o = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, a.jsx)(g.m, {
        text: c,
        children: (0, a.jsx)(ea.D, { onClick: o, className: tT.yO, title: c, children: r }),
    });
}
var tP = n(31300),
    tL = n(802516),
    tM = n(22363),
    tO = n(418524),
    tG = n(672572);
function t_(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case tx.Y.DESKTOP:
            return (0, a.jsx)(tP.k, { size: "xs", ...n });
        case tx.Y.XBOX:
            return (0, a.jsx)(tL.Y, { size: "xs", ...n });
        case tx.Y.PLAYSTATION:
            return (0, a.jsx)(tM.X, { size: "xs", ...n });
        case tx.Y.NINTENDO:
            return (0, a.jsx)(tO.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tw(e) {
    let { platform: t } = e;
    return (0, a.jsx)(
        g.m,
        {
            text: (function (e) {
                switch (e) {
                    case tx.Y.DESKTOP:
                        return eC.intl.string(eC.t.KT6uCJ);
                    case tx.Y.XBOX:
                        return eC.intl.string(eC.t.DDWUJp);
                    case tx.Y.PLAYSTATION:
                        return eC.intl.string(eC.t.fzMz2s);
                    case tx.Y.NINTENDO:
                        return eC.intl.string(eC.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(t_, { platform: t }),
        },
        t,
    );
}
var tV = n(424994),
    tD = n(422384);
function tF() {
    return (0, a.jsx)(er.E, { variant: "text-sm/normal", color: "text-subtle", children: eC.intl.string(eC.t.GruYxV) });
}
let tU = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, to.c)("GameProfileGameDetails"),
        i = s.useMemo(() => t.genres.map(td.du).join(", "), [t]),
        r = t.getCompanyByRole(ej.wk.PUBLISHER),
        c = t.getCompanyByRole(ej.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        d = c.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        m = s.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(tx.Y.DESKTOP) && (e.has(tx.Y.MACOS) || e.has(tx.Y.LINUX)) && n.push(tx.Y.DESKTOP),
                n.filter((e) => tg.includes(e)).sort((e, t) => tg.indexOf(e) - tg.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tm.p.includes(t);
            })
            .sort((e, t) => tm.p.indexOf(e.category) - tm.p.indexOf(t.category)),
        g = !(0, tu.uJ)(i),
        h = !(0, tu.uJ)(o),
        f = !(0, tu.uJ)(d),
        j = !(0, tu.uJ)(u),
        p = m.length > 0,
        A = x.length > 0 && !x.every((e) => (0, tu.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: tD.uW,
        children: [
            (0, a.jsx)("div", {
                className: tD.Gf,
                children: (0, a.jsx)(ec.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: eC.intl.string(eC.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tD.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: tD.J1,
                        children: [
                            (0, a.jsx)(er.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eC.intl.string(eC.t.pDgwYB) : eC.intl.string(eC.t.mjFKqn),
                            }),
                            g
                                ? (0, a.jsx)(er.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tD.Gu,
                                      children: i,
                                  })
                                : (0, a.jsx)(tF, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tD.J1,
                        children: [
                            (0, a.jsx)(er.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eC.intl.string(eC.t.Hc7Enk) : eC.intl.string(eC.t["4Byy/G"]),
                            }),
                            h
                                ? (0, a.jsx)(er.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tD.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(tF, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tD.J1,
                        children: [
                            (0, a.jsx)(er.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? eC.intl.string(eC.t.KATEJB) : eC.intl.string(eC.t.na3PT0),
                            }),
                            f
                                ? (0, a.jsx)(er.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tD.Gu,
                                      children: d,
                                  })
                                : (0, a.jsx)(tF, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tD.J1,
                        children: [
                            (0, a.jsx)(er.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eC.intl.string(eC.t.H3mPDT),
                            }),
                            j
                                ? (0, a.jsx)(er.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tD.Gu,
                                      children: ef.i$(new Date(u), "LL"),
                                  })
                                : (0, a.jsx)(tF, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tD.J1,
                        children: [
                            (0, a.jsx)(er.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? eC.intl.string(eC.t.PNqxNe) : eC.intl.string(eC.t["UxAag+"]),
                            }),
                            p
                                ? (0, a.jsx)("div", {
                                      className: tD.Gu,
                                      children: m.map((e) => (0, a.jsx)(tw, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(tF, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tD.J1,
                        children: [
                            (0, a.jsx)(er.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eC.intl.string(eC.t["Oj3o1/"]),
                            }),
                            A
                                ? (0, a.jsx)("div", {
                                      className: tD.Gu,
                                      children: x.map((e) => (0, a.jsx)(tR, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, a.jsx)(tF, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tD.J1,
                        children: [
                            (0, a.jsx)(er.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eC.intl.string(eC.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(er.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tD.Gu,
                                children: eC.intl.format(eC.t.XPFZVl, { igdbLink: tV.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: tD.OQ, children: (0, a.jsx)(tp, { game: t, trackAction: n }) }),
        ],
    });
};
var tY = n(714991),
    tW = n(486020),
    tB = n(992638);
function tH() {
    return (0, a.jsxs)(eq, {
        className: tB.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(eQ, { className: tB.dU, width: "30%" }),
            (0, a.jsx)(eq, {
                className: tB.nV,
                children: (0, a.jsxs)("div", {
                    className: tB.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tB.To,
                            children: [
                                (0, a.jsx)(eQ, { className: tB.QV }),
                                (0, a.jsxs)("div", {
                                    className: tB.Yv,
                                    children: [
                                        (0, a.jsx)(eQ, { className: tB.Ag }),
                                        (0, a.jsx)(eQ, { className: tB.zl }),
                                        (0, a.jsx)(eQ, { className: tB.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(eZ, {}),
                    ],
                }),
            }),
        ],
    });
}
function tz(e) {
    let { guild: t } = e,
        n = tW.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        r = null != n && l !== n,
        c = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, a.jsxs)("div", {
        className: tB._C,
        children: [
            r && (0, a.jsx)(eQ, { className: tB.EQ }),
            (0, a.jsx)("img", {
                className: tB.$f,
                src: n,
                alt: eC.intl.formatToPlainString(eC.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tX(e) {
    let { trackAction: t } = e,
        n = (0, to.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: i, isCommunityInviteResolving: r, isMember: c, closeModal: o } = ee(),
        d = s.useCallback(() => {
            null != l &&
                (t(_.GameProfileTrackActionActions.JoinServer),
                o(),
                eP.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eG.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? i && r
            ? (0, a.jsx)(tH, {})
            : null
        : (0, a.jsxs)("div", {
              className: tB.uW,
              children: [
                  (0, a.jsx)(ec.D, {
                      className: tB.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: eC.intl.string(eC.t["U2N+ci"]),
                  }),
                  (0, a.jsx)("div", {
                      className: tB.kL,
                      children: (0, a.jsxs)("div", {
                          className: tB.hQ,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: tB.To,
                                  children: [
                                      (0, a.jsx)(tz, { guild: l.guild }),
                                      (0, a.jsxs)("div", {
                                          className: tB.yj,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: tB.YS,
                                                  children: [
                                                      (0, a.jsx)(tY.A, { guild: l.guild, size: 16 }),
                                                      (0, a.jsx)(ec.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, tu.uJ)(l.guild?.description) &&
                                                  (0, a.jsx)(er.E, {
                                                      className: tB.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, a.jsxs)("div", {
                                                        className: tB.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: tB.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tB._o }),
                                                                        (0, a.jsx)(er.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eC.intl.format(eC.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    l.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != l.approximate_member_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: tB.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tB.jk }),
                                                                        (0, a.jsx)(er.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eC.intl.format(eC.t.zRl6XR, {
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
                                  text: c ? eC.intl.string(eC.t.cEnaWx) : eC.intl.string(eC.t.XpeFYr),
                                  onClick: d,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var tK = n(369606),
    tJ = n(775602),
    t$ = n(21161),
    tQ = n(400492),
    tq = n(459746),
    tZ = n(732369);
let t0 = n(892799),
    t1 = s.forwardRef(function (e, t) {
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
        return (0, tu.uJ)(l)
            ? null
            : (0, a.jsxs)("div", {
                  ref: t,
                  children: [
                      (0, a.jsx)("div", { className: tZ.y1, style: { backgroundImage: `url("${l}")` } }),
                      (0, a.jsx)("div", { className: tZ.N4 }),
                  ],
              });
    });
function t8(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(td.du).join(", ");
    return (0, tu.uJ)(n) ? null : (0, a.jsx)(er.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function t4(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: tZ.Qc,
        children: [
            (0, a.jsx)(tK.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(er.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eC.intl.formatToPlainString(eC.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t2(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, a.jsx)(t3, {
        game: t,
        className: c()(n ? tZ.n8 : tZ.FS, !n && (0, tq.cO)(t) && tZ.CD),
        imageClassName: tZ.xe,
    });
}
function t3(e) {
    let { game: t, className: n, imageClassName: l } = e,
        i = (0, a.jsx)(tq.Ay, { game: t, className: l, size: tq.wu.LARGE });
    return t.id !== e3
        ? (0, a.jsx)("div", { className: n, children: i })
        : (0, a.jsx)(t5, { className: n, children: i });
}
function t5(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(t$.x),
        i = (0, m.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        r = s.useRef({ count: 0, lastTime: 0 });
    return (0, a.jsx)(ea.D, {
        className: c()(n, tZ.b3),
        "aria-label": eC.intl.string(eC.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = r.current,
                a = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((r.current = { count: a, lastTime: t }), 3 === a)) {
                if (((r.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tQ.Ak)("discodo");
            }
        },
        children: t,
    });
}
let t6 = function (e) {
    let { game: t } = e,
        { isTwoColumn: n } = ee(),
        l = t.name;
    return (0, a.jsxs)("div", {
        className: tZ.ap,
        children: [
            n && (0, a.jsx)(t3, { game: t, className: c()(tZ.Tf, (0, tq.cO)(t) && tZ.wS), imageClassName: tZ.w$ }),
            (0, a.jsxs)("div", {
                className: tZ.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(t4, { rank: t.l30Rank }),
                    (0, a.jsxs)("div", {
                        className: tZ.$,
                        children: [
                            (0, a.jsx)(ec.D, { variant: "heading-xxl/semibold", children: l }),
                            t.id === e3 &&
                                (0, a.jsx)("img", {
                                    src: t0,
                                    className: tZ.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, a.jsx)(t8, { game: t }),
                ],
            }),
        ],
    });
};
var t7 = n(141628),
    t9 = n(289363),
    ne = n(134131);
function nt() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: ne.uW,
        children: [
            (0, a.jsx)(eQ, { className: ne.dU, width: "30%" }),
            (0, a.jsxs)(eq, {
                className: ne.nV,
                children: [
                    (0, a.jsx)("div", { className: ne.sB, children: (0, a.jsx)(t9.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: ne.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ne.Yv,
                                children: [(0, a.jsx)(eQ, { width: "55%" }), (0, a.jsx)(eQ, { width: "85%" })],
                            }),
                            (0, a.jsx)(eZ, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nn(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, to.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: i,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: d,
            hasOfficialApplication: u,
            officialApplicationFetchFailed: x,
        } = ee(),
        g = (0, m.bG)([q.default], () => q.default.getCurrentUser()),
        f = s.useCallback(() => {
            (t(_.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !u || x || null == g
        ? null
        : null == d || (c && !i)
          ? (0, a.jsx)(nt, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: ne.uW,
                  children: [
                      (0, a.jsx)(ec.D, {
                          className: ne.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eC.intl.string(eC.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: ne.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: ne.sB,
                                  children: (0, a.jsx)(t9.default, { application: d }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: ne.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: ne.FS,
                                          children: [
                                              (0, a.jsx)(ec.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: eC.intl.formatToPlainString(eC.t.hUbQT2, {
                                                      gameName: d.name,
                                                  }),
                                              }),
                                              (0, a.jsx)(er.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: eC.intl.string(eC.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(h.$, {
                                          variant: "secondary",
                                          icon: t7.A,
                                          text: eC.intl.string(eC.t.jynBQ5),
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
var nl = n(635377),
    ni = n.n(nl),
    na = n(80687),
    ns = n(534573),
    nr = n(248643),
    nc = n(256905),
    no = n(684519),
    nd = n(191096),
    nu = n(90721),
    nm = n(258924);
function nx(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function ng(e, t) {
    return (0, ns.Ec)(e, { size: t, keepAspectRatio: !0, format: tW.QB ? "webp" : null });
}
let nh = new (ni())({ max: 100 }),
    nf = s.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [i, r] = s.useState(null),
            o = null != i && i.url === t ? i.isPortrait : (nh.get(t) ?? !1),
            d = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (nh.set(t, n),
                        r((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            u = s.useCallback((e) => d(e.currentTarget), [d]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: d,
                    src: ng(t, 106),
                    className: c()(nm.r4, !o && nm.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, a.jsx)("img", { ref: d, src: ng(t, 900), className: c()(nm.c8, o && nm.D7, l), alt: n, onLoad: u }),
            ],
        });
    }),
    nj = s.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: i, isPlaying: r, onSelect: o, gameName: d, listItemProps: u } = e,
            m = s.useCallback(() => o(l), [o, l]),
            x = u?.tabIndex;
        return (0, a.jsx)(ea.D, {
            ...u,
            className: c()(nm.JS, i && nm.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: nm.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: ng("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nm.xn,
                        alt: eC.intl.formatToPlainString(eC.t.COYYrn, { game: d }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, a.jsx)("div", {
                            className: nm.UZ,
                            children: (0, a.jsx)(na.D, { playing: i && r, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    np = s.memo(function (e) {
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
            (0, nu.A)({ videoRef: i, canvasRef: u, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: u, className: nm.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: nm.tN,
                        children: (0, a.jsx)(nr.A, {
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
                            renderLinkComponent: no.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: nm.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nA(e) {
    let { game: t, trackAction: n } = e,
        [l, i] = s.useState(0),
        [r, c] = s.useState(null),
        [o, d] = s.useState(t.screenshotUrls),
        u = s.useRef(null),
        x = s.useRef(null),
        g = (0, m.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        { obscured: h } = (0, nd.I3)(),
        f = eu("game_profile_media");
    o !== t.screenshotUrls && (d(t.screenshotUrls), i(0));
    let j = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eO.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eO.YE)(e.application_id, e.id, e.width, "webp"),
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
        E = j[A],
        v = E?.type === "VIDEO",
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
        k = s.useCallback(() => {
            n(v ? _.GameProfileTrackActionActions.ClickTrailer : _.GameProfileTrackActionActions.ClickImage);
            let e = u.current,
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
            (0, nc.R)({
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
        }, [n, j, A, v]),
        S = s.useCallback(() => b(!0), []),
        T = s.useCallback(() => b(!1), []),
        y = s.useCallback(() => c(null), []),
        R = s.useCallback(
            (e) => {
                e && k();
            },
            [k],
        );
    return 0 === j.length
        ? null
        : (0, a.jsxs)("div", {
              className: nm.kL,
              children: [
                  v
                      ? (0, a.jsx)("div", {
                            className: nm.ND,
                            children: (0, a.jsx)(
                                np,
                                {
                                    item: E,
                                    reducedMotion: g,
                                    autoPlay: !g && !h,
                                    videoRef: u,
                                    mediaPlayerRef: C,
                                    onPlay: S,
                                    onPause: T,
                                    onFullscreenChange: R,
                                },
                                `${A}-${E.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: nm.wp,
                            children: [
                                null != r &&
                                    !g &&
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: nm.Jy,
                                            onAnimationEnd: y,
                                            children: (0, a.jsx)(nf, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, a.jsx)("div", { className: nm.QN }),
                                (0, a.jsx)(ea.D, {
                                    className: nm.gv,
                                    onClick: k,
                                    children: (0, a.jsx)("div", {
                                        className: nm.cs,
                                        children: (0, a.jsx)(
                                            nf,
                                            {
                                                url: E.url,
                                                className: nm.Jf,
                                                alt: eC.intl.formatToPlainString(eC.t.COYYrn, { game: t.name }),
                                            },
                                            E.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, a.jsx)(eh.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: p,
                            getItemKey: nx,
                            renderItem: (e, n) => {
                                let { item: l, index: i } = e;
                                return (0, a.jsx)(
                                    nj,
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
                      : (0, a.jsx)(ex.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, a.jsx)(
                                    nj,
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
var nE = n(49381),
    nv = n(661531),
    nI = n(223273);
function nN(e, t, n) {
    if (null == e || null == t || t < 10) return nI.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nI.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nI.vI.VERY_POSITIVE
              : nI.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nI.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nI.vI.MIXED;
    if (e >= 20) return nI.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nI.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nI.vI.VERY_NEGATIVE;
    return nI.vI.OVERWHELMINGLY_NEGATIVE;
}
function nb(e) {
    switch (e) {
        case nI.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nI.vI.OVERWHELMINGLY_POSITIVE:
        case nI.vI.VERY_POSITIVE:
        case nI.vI.POSITIVE:
        case nI.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nI.vI.MIXED:
            return "steam-review-text-mixed";
        case nI.vI.MOSTLY_NEGATIVE:
        case nI.vI.NEGATIVE:
        case nI.vI.VERY_NEGATIVE:
        case nI.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nC =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nk = n(778591);
function nS(e) {
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
var nT = n(255417);
function ny(e) {
    let { url: t, trackAction: n, title: l, rating: i, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tS.A)(),
        d = nN(i, r, "recent" === c),
        u = nb(d),
        m = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, a.jsx)(ea.D, {
        onClick: m,
        className: nT.nf,
        role: "link",
        "aria-label": eC.intl.string(eC.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nT.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nT.tN,
                    children: [
                        (0, a.jsx)(nE.N, { size: "sm", color: nv.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(ec.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    g.m,
                    {
                        text:
                            d === nI.vI.NO_USER_REVIEWS
                                ? eC.intl.string(eC.t.CLMt8J)
                                : eC.intl
                                      .format(
                                          "recent" === c
                                              ? eC.t.TzvC0k
                                              : "localized" === c
                                                ? eC.t.EOfrwm
                                                : eC.t["lzANJ/"],
                                          { rating: i, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: nT.Z0,
                            children: [
                                (0, a.jsx)(er.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: nT.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nI.vI.NO_USER_REVIEWS:
                                                return eC.intl.string(eC.t.CLMt8J);
                                            case nI.vI.OVERWHELMINGLY_POSITIVE:
                                                return eC.intl.string(eC.t["75sx1S"]);
                                            case nI.vI.VERY_POSITIVE:
                                                return eC.intl.string(eC.t["EkOVg+"]);
                                            case nI.vI.POSITIVE:
                                                return eC.intl.string(eC.t.ZUkFtr);
                                            case nI.vI.MOSTLY_POSITIVE:
                                                return eC.intl.string(eC.t.M7Z09a);
                                            case nI.vI.MIXED:
                                                return eC.intl.string(eC.t.c8yuHR);
                                            case nI.vI.MOSTLY_NEGATIVE:
                                                return eC.intl.string(eC.t.H0MSjG);
                                            case nI.vI.NEGATIVE:
                                                return eC.intl.string(eC.t.vpLrgz);
                                            case nI.vI.VERY_NEGATIVE:
                                                return eC.intl.string(eC.t["5spYuX"]);
                                            case nI.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eC.intl.string(eC.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== nI.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(er.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eC.intl
                                            .format(eC.t.sgIoin, { rating_count: r.toLocaleString() })
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
function nR(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: i } = t,
        r = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, tS.A)(),
        x = s.useCallback(() => {
            (l(_.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, a.jsx)(ea.D, {
        onClick: x,
        className: nT.nf,
        role: "link",
        "aria-label": eC.intl.string(eC.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nT.Ur,
            children: [
                (0, a.jsx)(ec.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eC.intl.string(eC.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nT.WA,
                    children: [
                        null != c ? (0, a.jsx)(nP, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, a.jsx)(nL, { rating: o, tier: c }) : null,
                        u
                            ? (0, a.jsx)(er.E, {
                                  variant: "text-xs/medium",
                                  color: nb(nI.vI.NO_USER_REVIEWS),
                                  children: eC.intl.string(eC.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nP(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nC.MIGHTY:
                    return eC.intl.string(eC.t.aZej2g);
                case nC.STRONG:
                    return eC.intl.string(eC.t.MLxnSg);
                case nC.FAIR:
                    return eC.intl.string(eC.t["3f19KA"]);
                case nC.WEAK:
                    return eC.intl.string(eC.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nC.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nC.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nC.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nC.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, a.jsx)(
        g.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: nT.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nL(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case nC.MIGHTY:
                    t = "#fc430a";
                    break;
                case nC.STRONG:
                    t = "#9e00b4";
                    break;
                case nC.FAIR:
                    t = "#4aa1ce";
                    break;
                case nC.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, a.jsx)(
        g.m,
        {
            text: eC.intl.string(eC.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nT.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(nS, { rating: t, strokeColor: l }),
                    (0, a.jsx)(er.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nT.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nM = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, to.c)("GameProfileReviews"),
        i = (0, nk.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != i,
        c = t.reviews?.steam,
        o = nN(c?.recentRating, c?.recentRatingCount, !0),
        d = r && o !== nI.vI.NO_USER_REVIEWS,
        m =
            null != c &&
            null != c.localizedRating &&
            null != c.localizedRatingCount &&
            null != c.ratingCount &&
            c.localizedRatingCount >= 200 &&
            c.ratingCount >= 2e3,
        x = m ? c?.localizedRating : c?.rating,
        g = m ? c?.localizedRatingCount : c?.ratingCount,
        h = m ? eC.t["aWb+V4"] : eC.t["8e4LiB"],
        f = t.reviews?.opencritic != null && null != s;
    return r || d || f
        ? (0, a.jsxs)("div", {
              className: nT.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nT.Gf,
                      children: (0, a.jsx)(ec.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eC.intl.string(eC.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nT.kL,
                      children: [
                          d && null != i
                              ? (0, a.jsx)("div", {
                                    className: nT.WH,
                                    children: (0, a.jsx)(ny, {
                                        url: i,
                                        trackAction: n,
                                        title: eC.intl.string(eC.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != i
                              ? (0, a.jsx)("div", {
                                    className: nT.WH,
                                    children: (0, a.jsx)(ny, {
                                        url: i,
                                        trackAction: n,
                                        title: eC.intl.string(h),
                                        rating: x,
                                        ratingCount: g,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          f && null != s
                              ? (0, a.jsx)("div", {
                                    className: nT.WH,
                                    children: (0, a.jsx)(nR, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nO = n(815996),
    nG = n(722258),
    n_ = n(258245),
    nw = n(561769),
    nV = n(484469),
    nD = n(57020),
    nF = n(682301);
let nU = [];
var nY = n(758836),
    nW = n(747828);
let nB = [0, 1, 2, 3, 4];
function nH(e) {
    return e.skuId;
}
let nz = s.createContext({ trackAction: () => {} });
function nX(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        r = s.useContext(nw.v3),
        { trackAction: c } = s.useContext(nz),
        o = s.useRef(null),
        d = s.useCallback(
            (e) => {
                (c(_.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, nG.B)({
                        skuId: i,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, nD.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: u, ...m } = r;
    return (0, a.jsx)(nw.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(n_.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: nW.N,
            onClickCard: d,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function nK() {
    return (0, a.jsx)(nV.A, {});
}
function nJ(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = ee(),
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
                            null == e || t || w.A.isShopCollectionFetching(e) || ew(e);
                        }, [e, t]),
                        { skuIds: l ?? nU, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, nF.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nO.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: nY.G2.CATALOG,
                }));
        }, [n, l]),
        o = s.useMemo(() => ({ trackAction: n }), [n]),
        d = eu("game_profile_shop_carousel");
    return r
        ? (0, a.jsx)(e1, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(e2, { children: nB.map((e) => (0, a.jsx)(nK, {}, e)) }),
          })
        : 0 === i.length
          ? null
          : (0, a.jsx)(nz.Provider, {
                value: o,
                children: (0, a.jsx)(e8, {
                    title: eC.intl.string(eC.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: d
                        ? (0, a.jsx)(eh.A, {
                              gap: "md",
                              items: i,
                              getItemKey: nH,
                              renderItem: (e, t) => (0, a.jsx)(nX, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, a.jsx)(ex.A, {
                              gap: "md",
                              children: i.map((e) => (0, a.jsx)(nX, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var n$ = n(921138),
    nQ = n(311043);
let nq = [],
    nZ = [];
var n0 = n(607346);
let n1 = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function n8(e) {
    return e.id;
}
function n4(e) {
    let { className: t } = e;
    return (0, a.jsx)(eq, { className: t, children: (0, a.jsx)(eQ, { className: n0.Lg }) });
}
function n2(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: i } = ee(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        d = null == r || c === r,
        { shouldOpenGameProfile: u, gameId: m } = (0, n$.Ay)({
            gameId: t.id,
            source: _.GameProfileSources.SimilarGames,
        }),
        x = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                u && null != m && i(m, _.GameProfileSources.SimilarGames));
        }, [t.id, m, n, u, i]),
        h = s.useCallback(() => o(r), [r]);
    return (0, a.jsx)(g.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, a.jsxs)(ea.D, {
            ...l,
            className: n0.Nr,
            onClick: x,
            "aria-label": eC.intl.formatToPlainString(eC.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(tq.Ay, {
                    game: t,
                    className: n0.xe,
                    size: tq.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !d && (0, a.jsx)(n4, { className: n0.uz }),
            ],
        }),
    });
}
function n3(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: i } = (function (e) {
            let t = !e_.has(e),
                { data: n, isLoading: l, error: i } = eD(e, t),
                a = t && null != n ? n : nq;
            (0, P.x)(a);
            let s = (0, m.bG)(
                    [nQ.A],
                    () => a.some((e) => null == nQ.A.getGame(e) && !nQ.A.hasNoData(e) && !nQ.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [nQ.A, q.default],
                    () => {
                        let e = q.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => nQ.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, n$.T_)(t) && !(0, K.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: nZ };
        })(t),
        s = eu("game_profile_similar_games");
    return e_.has(t)
        ? null
        : l
          ? (0, a.jsx)(e1, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: n0.XG,
                    style: n1,
                    children: (0, a.jsx)(e2, {
                        children: en()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(n4, { className: n0.aZ }, e)),
                    }),
                }),
            })
          : 0 === i.length
            ? null
            : (0, a.jsx)(e8, {
                  title: eC.intl.string(eC.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: n0.XG,
                      style: n1,
                      children: s
                          ? (0, a.jsx)(eh.A, {
                                gap: "md",
                                items: i,
                                getItemKey: n8,
                                itemClassName: n0.cW,
                                renderItem: (e, t) =>
                                    (0, a.jsx)(n2, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(ex.A, {
                                gap: "md",
                                children: i.map((e) => (0, a.jsx)(n2, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
n(667532);
var n5 = n(853022);
let n6 = new Set(["1402418703554842694", "356877880938070016"]),
    n7 = [tm.V.EPICGAMES, tm.V.STEAM, tm.V.ROBLOX, tm.V.BATTLENET, tm.V.RIOT, tm.V.MINECRAFT];
var n9 = n(349361),
    le = n(924895),
    lt = n(422688),
    ln = n(505200),
    ll = n(695250);
let li = function (e) {
    switch (e.category) {
        case tm.V.STEAM:
            return {
                icon: nE.N,
                text: eC.intl.string(eC.t.FsANs4),
                ariaLabel: eC.intl.string(eC.t["P+ePTG"]),
                action: _.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case tm.V.EPICGAMES:
            return {
                icon: n9.r,
                text: eC.intl.string(eC.t.ZbBMHa),
                ariaLabel: eC.intl.string(eC.t.BwX0UW),
                action: _.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case tm.V.ROBLOX:
            return {
                icon: le.H,
                text: eC.intl.string(eC.t["pJ+P+h"]),
                ariaLabel: eC.intl.string(eC.t.tYxpdf),
                action: _.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case tm.V.BATTLENET:
            return {
                icon: lt.a,
                text: eC.intl.string(eC.t["A7grp+"]),
                ariaLabel: eC.intl.string(eC.t.x9at20),
                action: _.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case tm.V.RIOT:
            return {
                icon: ln.A,
                text: eC.intl.string(eC.t.h6MapL),
                ariaLabel: eC.intl.string(eC.t["528nvc"]),
                action: _.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case tm.V.MINECRAFT:
            return {
                icon: ll.m,
                text: eC.intl.string(eC.t["HZbmO+"]),
                ariaLabel: eC.intl.string(eC.t.WWTqYn),
                action: _.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tL.Y,
                text: eC.intl.string(eC.t["QpN/Iz"]),
                ariaLabel: eC.intl.string(eC.t["8JZmmF"]),
                action: _.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function la(e) {
    return (0, a.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var ls = n(48460);
function lr(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, nk.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eG.d3x.XBOX_GAME_PASS && !(0, tu.uJ)(e.id));
                return t?.id == null ? null : (0, n5.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== tm.V.EPICGAMES || !!n6.has(l)) &&
                            (e.category !== tm.V.STEAM || a !== u.Y.RETIRED_ABANDONED) &&
                            n7.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === tm.V.STEAM) ||
                    e.push({ category: tm.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === tm.V.STEAM ? -1 : +(t.category === tm.V.STEAM)));
                return (null != n && s.unshift({ category: "XBOX_GAME_PASS", url: n }), s);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function lc(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tS.A)();
    return (0, a.jsx)(la, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lo = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: i, storeWebsites: r } = lr(t),
        c = s.useMemo(() => r.map(li).filter((e) => null != e), [r]);
    if (!i) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(lc, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, a.jsxs)("div", {
            className: ls.G,
            children: [(0, a.jsx)(lc, { data: c[0], trackAction: l }), (0, a.jsx)(lc, { data: c[1], trackAction: l })],
        });
    let o = (0, a.jsx)(la, {
        text: eC.intl.string(eC.t["/hMurx"]),
        "aria-label": eC.intl.string(eC.t.nK60cc),
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
        ? (0, a.jsxs)("div", { className: ls.G, children: [(0, a.jsx)(lc, { data: c[0], trackAction: l }), o] })
        : o;
};
var ld = n(123292);
function lu(e) {
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
        { isTwoColumn: d } = ee(),
        u = s.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = i ? eC.intl.string(eC.t["6MwJo/"]) : eC.intl.string(eC.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: c()(tG.fi, tG.mX),
        children: [
            (0, a.jsx)(er.E, {
                ref: l,
                className: tG.g5,
                lineClamp: i ? void 0 : u,
                variant: "text-md/medium",
                children: t.description,
            }),
            r && (0, a.jsx)(ld.Q, { onClick: o, text: m }),
        ],
    });
}
var lm = n(109112),
    lx = n(761508),
    lg = n(376357),
    lh = n(857250),
    lf = n(97483),
    lj = n(922016),
    lp = n(980707),
    lA = n(477782),
    lE = n(663341),
    lv = n(408278),
    lI = n(34188),
    lN = n(173936),
    lb = n(365199),
    lC = n(789645),
    lk = n(442433),
    lS = n(50268),
    lT = n(44724),
    ly = n(676924),
    lR = n(957565),
    lP = (((i = {}).OVERVIEW = "overview"), (i.COMMUNITIES = "communities"), (i.COMMERCE = "commerce"), i),
    lL = n(695366),
    lM = n(540185),
    lO = n(926268),
    lG = n(53788),
    l_ = n(831453),
    lw = n(785866),
    lV = n(555704),
    lD = n(47675),
    lF = n(633075),
    lU = n(289173),
    lY = n(321191),
    lW = n(958805),
    lB = n(735321),
    lH = n(96173),
    lz = n(280450),
    lX = n(403362);
async function lK(e) {
    let t = e((0, lB.BF)());
    await lW.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function lJ(e) {
    var t;
    let l,
        { game: i, className: r, trackAction: c, activeTab: o } = e,
        d = s.useRef(null),
        u = s.useRef(null),
        x = (0, lS.A)({ id: i.id, label: eC.intl.string(eC.t.SHQGPj) }),
        f =
            ((t = i.id),
            (l = s.useCallback(() => {
                null != t &&
                    (c?.(_.GameProfileTrackActionActions.Feedback),
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
                : (0, a.jsx)(lA.Dr, {
                      id: "game-profile-something-wrong",
                      label: eC.intl.string(eC.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: lL.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([lz.default], () => lz.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: lM.x.FAVORITE_GAMES,
                            addLabel: eC.intl.string(eC.t.fgmitg),
                            removeLabel: eC.intl.string(eC.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: lO.HeartIcon,
                        },
                        {
                            type: lM.x.PLAYED_GAMES,
                            addLabel: eC.intl.string(eC.t["0xIVLR"]),
                            removeLabel: eC.intl.string(eC.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: lG.G,
                        },
                        {
                            type: lM.x.CURRENT_GAMES,
                            addLabel: eC.intl.string(eC.t.G0c4En),
                            removeLabel: eC.intl.string(eC.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: l_.H,
                        },
                        {
                            type: lM.x.WANT_TO_PLAY_GAMES,
                            addLabel: eC.intl.string(eC.t.UuBS4K),
                            removeLabel: eC.intl.string(eC.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: lw._,
                        },
                    ],
                    [],
                ),
                r = (0, m.yK)([lY.A], () => (null == l ? [] : (lY.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, lH.A)(),
                o = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof lF.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(lX.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                d = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await lK((i) => {
                                let a = i.filter(lU.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, lB.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new lU.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new lU.Yy({ ...a, games: e });
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
                        (0, lD.un)({
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
                            (await lK((n) =>
                                e
                                    ? n.some((e) => e instanceof lF.R && e.applicationId === o)
                                        ? n
                                        : [(t = new lF.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof lF.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof lF.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, lD.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, lB.XX)(e),
                g = [];
            if (null != o) {
                let e = r.some((e) => e instanceof lF.R && e.applicationId === o);
                g.push(
                    (0, a.jsx)(
                        lA.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eC.intl.formatToPlainString(eC.t.Ktb1n8, { name: n })
                                : eC.intl.formatToPlainString(eC.t.Xp6iZt, { name: n }),
                            action: () => u(!e),
                            leadingAccessory: { type: "icon", icon: lV.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let n = r.filter(lU.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, lB.uA)(n);
                    g.push(
                        (0, a.jsx)(
                            lA.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? eC.intl.string(eC.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => d(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(i),
        { closeModal: A } = ee(),
        E = U({ location: "GameProfileOverflowMenu" }),
        v = (0, m.bG)([W.A], () => W.A.getApplicationIdFromDetectableId(i.id)),
        I = (0, m.bG)([W.A], () => W.A.hasStorefrontForApplicationId(v), [v]),
        b = s.useCallback(() => {
            null != v && (0, lT.G)({ applicationId: v });
        }, [v]),
        C = s.useCallback(() => {
            null != v && (c(_.GameProfileTrackActionActions.GameShop), (0, lT.default)({ applicationId: v }), A());
        }, [v, c, A]),
        k = s.useCallback(() => A(!1), [A]),
        S = s.useCallback(() => {
            c(_.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eG.BVt.GAME_PROFILE(i.id)}`;
            (0, lR.C)(e, () => {
                (0, lg.P)((0, lh.o)(eC.intl.string(eC.t["+5kSoW"]), lf.Ck.SUCCESS));
            });
        }, [i.id, c]);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            o === lP.COMMERCE &&
                (0, a.jsx)(ly.A, { location: N.A.GAME_PROFILE, onNavigate: A, variant: "overlay-secondary" }),
            null != j &&
                o !== lP.COMMERCE &&
                (0, a.jsx)(lj.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lp.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, lk.Z_)(), t());
                            },
                            "aria-label": eC.intl.string(eC.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(lA.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: u,
                            children: (0, a.jsx)(h.$, {
                                icon: lE.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eC.intl.string(eC.t.sidPSo),
                            }),
                        }),
                }),
            I &&
                !E &&
                (0, a.jsx)(g.m, {
                    text: eC.intl.string(eC.t.apFNLU),
                    children: (0, a.jsx)(lv.K, {
                        icon: lI.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eC.intl.string(eC.t.apFNLU),
                        onMouseDown: b,
                        onClick: C,
                    }),
                }),
            o !== lP.COMMERCE &&
                (0, a.jsx)(g.m, {
                    text: eC.intl.string(eC.t.WqhZss),
                    children: (0, a.jsx)(lv.K, {
                        icon: lN.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eC.intl.string(eC.t.WqhZss),
                        onClick: S,
                    }),
                }),
            (null != x || null != f) &&
                o !== lP.COMMERCE &&
                (0, a.jsx)(lj.Y, {
                    targetElementRef: d,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lp.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, lk.Z_)(), t());
                            },
                            "aria-label": eC.intl.string(eC.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(lA.rX, { children: f }), (0, a.jsx)(lA.rX, { children: x })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(g.m, {
                            text: eC.intl.string(eC.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: d,
                                children: (0, a.jsx)(lv.K, {
                                    icon: lb.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eC.intl.string(eC.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(lv.K, {
                icon: lC.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: k,
                "aria-label": eC.intl.string(eC.t.cpT0Cq),
            }),
        ],
    });
}
let l$ = { enabled: !1 },
    lQ = (0, V.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: l$,
        variations: { 0: l$, 1: { enabled: !0 } },
    });
function lq(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i } = n;
    if (
        !(function (e) {
            let { location: t } = e;
            return lQ.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let s = eC.intl.string(eC.t["3xFZEo"]);
    return (0, a.jsx)(lx.V.Item, {
        id: lP.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(lP.COMMUNITIES),
        className: t,
        "aria-label": s,
        children: (0, a.jsx)(er.E, { variant: "text-md/medium", color: "none", children: s }),
    });
}
var lZ = n(331322),
    l0 = n(278416),
    l1 = n(478016),
    l8 = n(900797),
    l4 = n(847374),
    l2 = n(421773),
    l3 = n(421108);
let l5 = "text-md/medium",
    l6 = [];
function l7(e) {
    let { label: t, chevron: n } = e,
        l = (function () {
            let { hasCommerceTab: e, commerceStorefront: t } = ee(),
                n = Object.values(t?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, l3.ZH)(n));
                }),
                l = (0, l3.tm)(n?.endsAt);
            return e && null != n && !l;
        })();
    return (0, a.jsxs)(lZ.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            l &&
                (0, a.jsx)(l0.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: nv.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, a.jsxs)(lZ.B, {
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
function l9(e) {
    let {
            className: t,
            label: n,
            navigation: l,
            commercePages: i,
            selectedCommercePageIndex: r,
            selectCommercePage: c,
        } = e,
        { selectedTab: o, selectTab: d } = l,
        u = s.useRef(null),
        { isHovered: m, setIsHovered: x, onMouseEnter: g, onMouseLeave: h, cancelTimers: f } = (0, l2.A)(100, 100),
        j = eC.intl.string(eC.t["J3/JCl"]),
        p = s.useCallback(
            (e) => {
                (f(), x(e));
            },
            [f, x],
        );
    return (0, a.jsx)(lj.Y, {
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
                onMouseEnter: g,
                onMouseLeave: h,
                children: (0, a.jsx)(lp.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": j,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, a.jsx)(lA.rX, {
                        children: i.map((e, t) => {
                            var n;
                            let l,
                                i = o === lP.COMMERCE && t === r,
                                s =
                                    ((n = e.title),
                                    null != (l = n?.trim()) && l.length > 0
                                        ? l
                                        : eC.intl.formatToPlainString(eC.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, a.jsx)(
                                lA.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: l1.U } : void 0,
                                    action: () => c(t),
                                },
                                t,
                            );
                        }),
                    }),
                }),
            });
        },
        children: (e, l) => {
            let { isShown: i } = l,
                s = i ? l8.t : l4.a;
            return (0, a.jsx)(lx.V.Item, {
                ...e,
                id: lP.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: o === lP.COMMERCE ? lP.COMMERCE : void 0,
                onClick: (t) => {
                    (d(lP.COMMERCE), e.onClick(t));
                },
                onMouseLeave: h,
                clickableRef: (e) => {
                    u.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": j,
                "aria-haspopup": "menu",
                children: (0, a.jsx)(er.E, {
                    variant: l5,
                    color: "none",
                    children: (0, a.jsx)(l7, {
                        label: n,
                        chevron: (0, a.jsx)(s, { size: "xs", color: "currentColor" }),
                    }),
                }),
            });
        },
    });
}
function ie(e) {
    let { className: t, navigation: n, selectedCommercePageIndex: l, selectCommercePage: i } = e,
        {
            selectedTab: s,
            selectTab: r,
            hasCommerceTab: c,
            commercePages: o,
        } = (function (e, t, n) {
            let { selectedTab: l, selectTab: i } = e,
                { hasCommerceTab: a, commerceStorefront: s } = ee();
            return {
                selectedTab: l,
                selectTab: i,
                hasCommerceTab: a,
                commercePages: s?.pages ?? l6,
                selectedCommercePageIndex: t,
                selectCommercePage: n,
            };
        })(n, l, i);
    if (!c) return null;
    let d = eC.intl.string(eC.t.apFNLU);
    return o.length > 1
        ? (0, a.jsx)(l9, {
              className: t,
              label: d,
              navigation: n,
              commercePages: o,
              selectedCommercePageIndex: l,
              selectCommercePage: i,
          })
        : (0, a.jsx)(lx.V.Item, {
              id: lP.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s,
              onClick: () => r(lP.COMMERCE),
              className: t,
              "aria-label": d,
              children: (0, a.jsx)(er.E, { variant: l5, color: "none", children: (0, a.jsx)(l7, { label: d }) }),
          });
}
var it = n(510954);
function il(e) {
    let { game: t, trackAction: n, navigation: l, selectedCommercePageIndex: i, selectCommercePage: r } = e,
        { selectedTab: c, selectTab: o } = l,
        d = t.getIconURL(64),
        [u, m] = s.useState(null),
        x = s.useCallback(() => m(d), [d]),
        g = eC.intl.string(eC.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: it.wx,
        children: (0, a.jsxs)("div", {
            className: it.ap,
            children: [
                (0, a.jsx)("div", {
                    className: it.wE,
                    children:
                        null != d && d !== u
                            ? (0, a.jsx)("img", { src: d, alt: "", className: it.FC, draggable: !1, onError: x })
                            : (0, a.jsx)(lm._, { size: "md" }),
                }),
                (0, a.jsxs)(lx.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: c,
                    onItemSelect: o,
                    className: it.vR,
                    children: [
                        (0, a.jsx)(lx.V.Item, {
                            id: lP.OVERVIEW,
                            disableItemStyles: !0,
                            className: it.Mf,
                            "aria-label": g,
                            children: (0, a.jsx)(er.E, { variant: "text-md/medium", color: "none", children: g }),
                        }),
                        (0, a.jsx)(lq, { className: it.Mf, navigation: l }),
                        (0, a.jsx)(ie, {
                            className: it.Mf,
                            navigation: l,
                            selectedCommercePageIndex: i,
                            selectCommercePage: r,
                        }),
                    ],
                }),
                (0, a.jsx)(lJ, { game: t, className: it.HK, trackAction: n, activeTab: c }),
            ],
        }),
    });
}
var ii = n(439303),
    ia = n(658820),
    is = n(787188);
function ir(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, a.jsx)(ia.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: N.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: ii.Ye.GAME_PROFILE_GAME_SHOP,
        className: is.kL,
        scrollerClassName: is.XG,
        promotionBannerClassName: is.Rv,
    });
}
var ic = n(871123),
    io = n(317560),
    id = n(467884),
    iu = n(761812);
function im(e) {
    return e;
}
function ix(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: iu.B, children: t });
}
function ig(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        i = eu("social_layer_storefront_card_row"),
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
          ? (0, a.jsx)(eh.A, {
                gap: "md",
                "aria-label": `${eC.intl.string(eC.t["kocF+6"])}`,
                items: t,
                getItemKey: im,
                disableFocusRingScope: !0,
                renderItem: (e, t, l) =>
                    (0, a.jsx)(ix, {
                        children: (0, a.jsx)(id.Ay, {
                            positionInSection: l,
                            skuId: e,
                            variant: id.s6.SMALL,
                            analyticsLocations: n,
                            onClick: r,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, a.jsx)(ex.A, {
                gap: "md",
                "aria-label": eC.intl.string(eC.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, a.jsx)(
                        ix,
                        {
                            children: (0, a.jsx)(id.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: id.s6.SMALL,
                                analyticsLocations: n,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var ih = n(936785),
    ij = n(403581),
    ip = n(812095),
    iA = n(647474),
    iE = n(162536);
function iv(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, l3.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        s = i ? ij.t : t.Icon;
    return (0, a.jsx)(iA.A, {
        className: c()(iE.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: iE.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: iE.Kk }),
                (0, a.jsx)(er.E, { variant: "text-sm/normal", color: "currentColor", children: (0, ip.U)(t.text) }),
            ],
        }),
    });
}
var iI = n(521058);
function iN() {
    let { storefrontPromotion: e } = ee();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: s } = e;
    if (null == s || (0, tu.uJ)(s.headerText)) return null;
    let r = {
        Icon: (0, ih.LZ)(l?.icon ?? null),
        text: s.headerText,
        tooltip: null,
        endsAt: (0, ih.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, a.jsx)(iv, { className: iI.v, promotion: r });
}
let ib = [0, 1, 2, 3],
    iC = { placement: ii.Ye.GAME_PROFILE };
function ik() {
    return (0, a.jsx)(e1, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(e2, { children: ib.map((e) => (0, a.jsx)(ix, { children: (0, a.jsx)(id.yf, {}) }, e)) }),
    });
}
function iS(e) {
    let { trackAction: t, selectTab: n } = e,
        {
            socialLayerStorefrontRecommendationsData: l,
            socialLayerStorefrontRecommendationsLoading: i,
            hasCommerceTab: r,
            closeModal: c,
        } = ee(),
        { analyticsLocations: o } = (0, b.Ay)([N.A.GAME_PROFILE]),
        d = s.useCallback(() => {
            if (l?.application != null) {
                if (r) return void n(lP.COMMERCE);
                (t(_.GameProfileTrackActionActions.GameShop),
                    c(),
                    (0, lT.default)({ applicationId: l.application.id }));
            }
        }, [l, t, r, n, c]),
        u = s.useCallback(
            (e, n) => {
                let i = l?.guildId;
                null != i &&
                    (t(_.GameProfileTrackActionActions.GameShopItem),
                    (0, io.R)({
                        skuId: e,
                        applicationId: n,
                        isStorefront: !1,
                        analyticsLocations: o,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, ic.rG)(e, t, n, i) && c();
                        },
                    }));
            },
            [t, c, o, l],
        );
    if (i) return (0, a.jsx)(ik, {});
    if (null == l) return null;
    let { skuIds: m } = l;
    return (0, a.jsxs)(e8, {
        title: eC.intl.string(eC.t.WDdlUb),
        onClickViewAll: d,
        children: [
            (0, a.jsx)(iN, {}),
            (0, a.jsx)(ii.E9, {
                newValue: iC,
                children: (0, a.jsx)(ig, { skuIds: m, analyticsLocations: o, onCardClick: u }),
            }),
        ],
    });
}
let iT = {
        [lP.OVERVIEW]: _.GameProfileTrackActionActions.Overview,
        [lP.COMMUNITIES]: _.GameProfileTrackActionActions.Communities,
        [lP.COMMERCE]: _.GameProfileTrackActionActions.GameShop,
    },
    iy = s.memo(function (e) {
        let { game: t, trackAction: n, selectTab: l } = e;
        return (0, a.jsxs)("div", {
            className: tG.oC,
            children: [
                (0, a.jsxs)("div", {
                    className: tG.lM,
                    children: [
                        (0, a.jsx)(nA, { game: t, trackAction: n }),
                        (0, a.jsx)(lu, { game: t, trackAction: n }),
                    ],
                }),
                (0, a.jsx)(tc, { gameId: t.id, trackAction: n }),
                (0, a.jsx)(iS, { trackAction: n, selectTab: l }),
                (0, a.jsx)(nJ, { game: t, trackAction: n }),
                (0, a.jsx)(n3, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    iR = s.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l, selectTab: i } = e,
            s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
        return (0, a.jsxs)("div", {
            className: tG.V0,
            children: [
                (0, a.jsx)(nA, { game: t, trackAction: n }),
                (0, a.jsxs)("div", {
                    className: tG.gr,
                    children: [
                        (0, a.jsx)(t2, { game: t, isTwoColumn: !1 }),
                        (0, a.jsxs)("div", {
                            className: tG.E1,
                            children: [
                                (0, a.jsx)(lo, { game: t, trackAction: n }),
                                (0, a.jsx)(lu, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(nn, { analyticsLocations: l, trackAction: n }),
                (0, a.jsx)(tX, { trackAction: n }),
                (0, a.jsx)(tc, { gameId: t.id, trackAction: n }),
                (0, a.jsx)(iS, { trackAction: n, selectTab: i }),
                (0, a.jsx)(nJ, { game: t, trackAction: n }),
                (0, a.jsx)(n3, { gameId: t.id, trackAction: n }),
                s && (0, a.jsx)(nM, { game: t, trackAction: n }),
                (0, a.jsx)(tU, { game: t, trackAction: n }),
            ],
        });
    });
function iP(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: i } = ee();
    (0, C.A)({
        name: o.ImpressionNames.CLOUD_PLAY_CTA,
        type: o.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = s.useCallback(() => {
        (l(_.GameProfileTrackActionActions.CloudPlay), i(), t());
    }, [i, t, l]);
    return (0, a.jsx)(g.m, {
        text: eC.intl.string(eC.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(h.$, {
            icon: f.h,
            text: eC.intl.string(eC.t["jaYS/h"]),
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
              className: tG.NC,
              children: (0, a.jsx)(iP, { onCloudPlayClick: s, analyticsLocations: l, trackAction: i }),
          });
}
function iM(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        i = (0, v.A)(t.linkedApplications)?.id,
        [s] = (0, L.L_)(t.getOfficialApplicationId()),
        [r] = (0, L.L_)(t.id),
        { showsStoreLinks: o } = lr(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: c()(tG.Pn, tG.fi, tG.iH, o ? tG.sV : tG.gF),
        children: [
            null == i || s || r
                ? null
                : (0, a.jsx)(iL, { gameId: t.id, cloudPlayAppId: i, analyticsLocations: l, trackAction: n }),
            (0, a.jsxs)("div", {
                className: tG.V0,
                children: [
                    (0, a.jsx)(lo, { game: t, trackAction: n }),
                    (0, a.jsx)(nn, { analyticsLocations: l, trackAction: n }),
                    (0, a.jsx)(tX, { trackAction: n }),
                    d && (0, a.jsx)(nM, { game: t, trackAction: n }),
                    (0, a.jsx)(tU, { game: t, trackAction: n }),
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
        appContext: i,
        source: s,
        trackExternalAction: r,
        trackAction: c,
        analyticsLocations: o,
    } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(t6, { game: t }),
            (0, a.jsx)(j.F, {
                children: n
                    ? (0, a.jsxs)("div", {
                          className: tG.jC,
                          children: [
                              (0, a.jsx)(iy, { game: t, trackAction: c, selectTab: l }),
                              (0, a.jsx)(iM, {
                                  game: t,
                                  appContext: i,
                                  source: s,
                                  trackExternalAction: r,
                                  trackAction: c,
                                  analyticsLocations: o,
                              }),
                          ],
                      })
                    : (0, a.jsx)("div", {
                          className: tG.b9,
                          children: (0, a.jsx)(iR, { game: t, trackAction: c, analyticsLocations: o, selectTab: l }),
                      }),
            }),
        ],
    });
}
function iG(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: i,
            onClose: r,
            appContext: o,
            trackExternalAction: u,
            initialScrollOffset: g,
            navigateToGame: h,
        } = e,
        [f, j] = s.useState(!0),
        [v, I] = s.useState(null),
        { clientThemesClassName: C } = (0, T.Ay)(),
        L = (0, m.bG)([G.default], () => G.default.locale),
        V = s.useMemo(() => (0, _.generateViewId)(), []),
        { analyticsLocations: D } = (0, b.Ay)(N.A.GAME_PROFILE),
        F = (0, z.s)(t),
        { data: ee } = (0, P.I)(t),
        et = ee?.getOfficialApplicationId(),
        en = (0, X.rG)(ee),
        el = null != et,
        ei = (0, m.bG)([S.A], () => null != et && S.A.didFetchingApplicationFail(et), [et]),
        ea = ee?.name ?? "",
        es = (0, K.A)(ee),
        er = s.useRef(null);
    s.useEffect(() => {
        er.current = v;
    }, [v]);
    let {
            hasAlreadyLinked: ec,
            canStartAuthorization: eo,
            fetched: ed,
            startAuthorization: eu,
            connectionApp: em,
        } = (0, k.RD)(ee),
        { invite: ex, isMember: eg, isResolving: eh } = (0, X.Ay)(ee, I),
        { socialLayerStorefrontRecommendationsData: ef, socialLayerStorefrontRecommendationsLoading: ej } = (function (
            e,
        ) {
            let t = q.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [W.A],
                    () => ({
                        storefrontApplicationId: null != e ? W.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === W.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, J.h)(l),
                r = (0, m.bG)([S.A], () => null != l && S.A.didFetchingApplicationFail(l), [l]),
                c = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: d } = (0, Q.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: $.B.USER_PROFILE,
                }),
                u = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== d || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, d, o],
                ),
                x = "loading" === d,
                g = "success" === d && o.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: u,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (x || g),
            };
        })(t),
        {
            hasCommerceTab: ep,
            storefrontApplicationId: eA,
            storefront: eE,
        } = (function (e) {
            let { gameId: t, officialApplicationId: n, commerceEnabled: l } = e;
            s.useEffect(() => {
                l && (0, Y.Xw)();
            }, [l]);
            let i = (0, m.bG)(
                    [W.A],
                    () =>
                        W.A.getApplicationIdFromDetectableId(t) ??
                        (null != n && W.A.hasStorefrontForApplicationId(n) ? n : null),
                    [t, n],
                ),
                a = l && null != i,
                { effectiveStorefront: r } = (0, H.A)({ applicationId: a ? i : null }),
                c = (0, B.A)({ applicationId: a ? i : null }),
                o = c?.storefront ?? null;
            return { hasCommerceTab: a, storefrontApplicationId: i, storefront: r ?? o };
        })({ gameId: t, officialApplicationId: et, commerceEnabled: U({ location: "GameProfileModal" }) }),
        ev = Object.values(eE?.promotions ?? {})[0] ?? null,
        eI = s.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, _.getGuildIdAndVerifiedFromInvite)(er.current);
                (0, _.trackGameProfileAction)({
                    gameName: ea,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: V,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [ea, t, V, n],
        );
    ((0, E.Ay)(() => {
        ((0, _.trackGameProfileOpen)({
            source: n,
            viewId: V,
            gameId: t,
            gameName: ea,
            authorId: l,
            profileType: _.GameProfileTypes.FullProfile,
        }),
            (0, y.He)());
    }),
        (0, E.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, _.getGuildIdAndVerifiedFromInvite)(er.current),
                l = Date.now(),
                i = F.map((e) => {
                    let t = (0, R.JM)(e) ? (0, R.W6)(e, l) : (0, R.aJ)(e, L);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, _.trackGameProfileClose)({
                viewId: V,
                gameId: t,
                gameName: ea,
                playedFriendIds: F.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: w.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let eN = s.useCallback((e) => {
            j(e.contentRect.width >= 800);
        }, []),
        eb = (0, d.w)(eN, [], { fireOnMount: !0 }),
        eC = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, p.closeAllModals)(), (0, O.M)()) : r();
            },
            [r],
        ),
        ek = s.useCallback(() => eC(!1), [eC]),
        { navigation: eS, scrollerRef: eT } = (function (e) {
            let t = s.useRef(null),
                [n, l] = s.useState(lP.OVERVIEW),
                i = s.useCallback(
                    (e) => {
                        (l(e), t.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }));
                    },
                    [t],
                ),
                a = s.useCallback(
                    (t) => {
                        if (t !== n) {
                            let n = iT[t];
                            null != n && e(n);
                        }
                        i(t);
                    },
                    [n, i, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: n, selectTab: a }), [n, a]), scrollerRef: t };
        })(eI),
        { selectedTab: ey } = eS,
        [eR, eP] = s.useState({ storefrontId: eE?.id, index: 0 }),
        [eL, eM] = s.useState(ey);
    ey !== eL && (eM(ey), ey !== lP.COMMERCE && eP({ storefrontId: eE?.id, index: 0 }));
    let eO = eR.storefrontId === eE?.id && eR.index < (eE?.pages.length ?? 0) ? eR.index : 0,
        eG = s.useCallback(
            (e) => {
                !ep ||
                    e < 0 ||
                    e >= (eE?.pages.length ?? 0) ||
                    (eP({ storefrontId: eE?.id, index: e }), eS.selectTab(lP.COMMERCE));
            },
            [eE, ep, eS],
        ),
        e_ = s.useCallback(() => eT.current?.getScrollerNode()?.scrollTop ?? 0, [eT]),
        ew = s.useMemo(
            () => ({
                isTwoColumn: f,
                canStartAuthorization: eo,
                hasAlreadyLinked: ec,
                fetchedAuthorization: ed,
                startAuthorization: eu,
                connectionApp: em,
                invite: ex,
                hasDiscordWebsite: en,
                hasOfficialApplication: el,
                officialApplicationFetchFailed: ei,
                isCommunityInviteResolving: eh,
                isMember: eg,
                socialLayerStorefrontRecommendationsData: ef,
                socialLayerStorefrontRecommendationsLoading: ej,
                hasCommerceTab: ep,
                commerceStorefront: eE,
                storefrontPromotion: ev,
                closeModal: eC,
                navigateToGame: h,
                getScrollOffset: e_,
            }),
            [f, eo, ec, ed, eu, em, ex, en, el, ei, eh, eg, ef, ej, ep, eE, ev, eC, h, e_],
        ),
        eV = s.useRef(null);
    s.useEffect(() => {
        null != g && g > 0 && eT.current?.getScrollerNode()?.scrollTo({ top: g, behavior: "instant" });
    }, []);
    let eD = s.useCallback((e) => {
        if (null != eV.current) {
            let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
            eV.current.style.opacity = String(t);
        }
    }, []);
    return null == ee
        ? null
        : (0, a.jsx)(b.f5, {
              value: D,
              children: (0, a.jsx)(x.N, {
                  transitionState: i,
                  onClose: r,
                  children: (0, a.jsx)(Z.Provider, {
                      value: ew,
                      children: (0, a.jsx)("div", {
                          className: c()(C, tG.kL),
                          ref: eb,
                          children: (0, a.jsxs)(M.A, {
                              obscured: es,
                              onClose: ek,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: tG.sx,
                                      children: (0, a.jsx)(il, {
                                          game: ee,
                                          trackAction: eI,
                                          navigation: eS,
                                          selectedCommercePageIndex: eO,
                                          selectCommercePage: eG,
                                      }),
                                  }),
                                  ey === lP.OVERVIEW &&
                                      (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(t1, { game: ee, ref: eV }),
                                              (0, a.jsxs)(A.Ch, {
                                                  ref: eT,
                                                  className: tG.XG,
                                                  onScroll: eD,
                                                  children: [
                                                      (0, a.jsx)("div", { className: tG.xY, "aria-hidden": !0 }),
                                                      (0, a.jsx)(iO, {
                                                          game: ee,
                                                          selectTab: eS.selectTab,
                                                          isTwoColumn: f,
                                                          appContext: o,
                                                          source: n,
                                                          trackExternalAction: u,
                                                          trackAction: eI,
                                                          analyticsLocations: D,
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ey === lP.COMMERCE && (0, a.jsx)(ir, { applicationId: eA, selectedPageIndex: eO }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let i_ = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, ...r } = e,
        [c, o] = s.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i }),
        d = c.gameId,
        u = s.useCallback(
            (e, t) => {
                e !== d && ((0, X.UT)(e), o({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, a.jsx)(
        iG,
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
