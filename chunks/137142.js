n.d(t, { default: () => iP });
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
    h = n(866665),
    g = n(821609),
    f = n(414499),
    j = n(707554),
    A = n(192308),
    p = n(689175),
    v = n(964486),
    E = n(881698),
    I = n(146779),
    N = n(793574),
    b = n(688810),
    C = n(139286),
    k = n(206828),
    S = n(587895),
    T = n(590703),
    y = n(180170),
    R = n(583846),
    L = n(569926),
    P = n(928550),
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
    B = n(156454),
    z = n(205184),
    H = n(957807),
    X = n(49491),
    K = n(429913),
    J = n(820847),
    $ = n(862772),
    Q = n(287809);
let q = s.createContext(void 0);
function Z() {
    let e = s.useContext(q);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var ee = n(435558),
    et = n.n(ee),
    en = n(621466),
    el = n(966697),
    ei = n(939249),
    ea = n(346055),
    es = n(834730),
    er = n(297264),
    ec = n(460905);
let eo = (0, V.mj)({
    name: "2026-09-new-horizontal-scroll-shared",
    kind: "user",
    defaultConfig: { useNewHScroll: !1 },
    variations: { 0: { useNewHScroll: !1 }, 1: { useNewHScroll: !0 } },
});
function eu(e) {
    return eo.useConfig({ location: e }).useNewHScroll;
}
var ed = n(776231),
    em = n(449543),
    ex = n(46054),
    eh = n(197935),
    eg = n(58703);
n(321073);
var ef = n(155718),
    ej = n(387408),
    eA = n(731068),
    ep = n(59318),
    ev = n(320095),
    eE = n(708676),
    eI = n(383233),
    eN = n(998218),
    eb = n(375708);
let eC = /^#{1,3}\s+(.+)$/,
    ek = /^https?:\/\/\S+$/;
var eS = n(60465),
    eT = n(158390),
    ey = n(636537),
    eR = n(73153),
    eL = n(103348),
    eP = n(927813),
    eM = n(371794),
    eO = n(652215);
let eG = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function e_(e) {
    eR.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eM.aP)({
                    url: eO.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: G.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(eL.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (eR.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            eR.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        eR.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function ew(e) {
    let t = ((await ey.Bo.get({ url: eO.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eG.has(t),
    );
    eR.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eV = (0, m.UT)(w.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => w.A.getSimilarGames(e) ?? null,
    load: (e) => ew(e),
    retryConfig: { backoff: () => new eT.A(5 * eP.A.Millis.SECOND, 5 * eP.A.Millis.MINUTE) },
    failureStaleAfter: eP.A.Seconds.MINUTE,
});
async function eD(e, t) {
    eR.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await ey.Bo.get({ url: eO.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eR.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, ej.A)((0, ev.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, eI._c)(e))
                            return e.components
                                .filter((e) => e.type === ef.I5.TEXT_DISPLAY)
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
                        if ((0, eI._c)(e)) {
                            let t = e.components.find((e) => e.type === ef.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, eA.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, ep.tT)(e.content_type));
                        if (null != t) return (0, eA.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, ep.XB)(e.content_type));
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(eC)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, eI._c)(l)
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
        eR.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eF = n(284009),
    eU = n.n(eF),
    eY = n(376728),
    eW = n(976860),
    eB = n(71393),
    ez = n(449054);
async function eH(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eU()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eB.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eO.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, ez.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eO.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eY.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eW.pX)(eO.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eX = n(320448),
    eK = n(493285);
let eJ = { sm: eK.nz, md: eK.a };
function e$(e) {
    let { className: t, width: n } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(eK.qf, t), style: { width: n } });
}
function eQ(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: l, style: i, children: n });
}
function eq(e) {
    let { className: t, size: n = "md" } = e;
    return (0, a.jsx)(e$, { className: c()(eK.x6, eJ[n], t) });
}
var eZ = n(406510);
function e0(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, a.jsxs)("div", {
        className: eZ.kL,
        "aria-busy": !0,
        children: [
            (0, a.jsxs)("div", {
                className: eZ.wR,
                children: [(0, a.jsx)(e$, { className: eZ.Iz, width: n }), l && (0, a.jsx)(eq, { size: "sm" })],
            }),
            t,
        ],
    });
}
function e1(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, a.jsxs)("div", {
        className: eZ.kL,
        children: [
            (0, a.jsxs)("div", {
                className: eZ.wR,
                children: [
                    (0, a.jsx)(er.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, a.jsx)(g.$, {
                            size: "sm",
                            icon: eX._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eb.intl.string(eb.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var e8 = n(949959);
function e4(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(e8.n, { [e8.C]: 16 === n }), children: t });
}
let e2 = "1552821538409939044";
var e3 = n(235240),
    e5 = n(165648);
function e6(e, t) {
    return ex.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e7(e) {
    return e.id;
}
function e9() {
    return (0, a.jsxs)(eQ, {
        className: e3.s7,
        children: [
            (0, a.jsx)(e$, { className: e3.o$ }),
            (0, a.jsxs)("div", {
                className: e3.UF,
                children: [(0, a.jsx)(e$, { className: e3.iX }), (0, a.jsx)(e$, { className: e3.jt })],
            }),
        ],
    });
}
function te(e, t) {
    var n;
    let l,
        i = (0, ed.kr)(364 * (0, ed.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = eN.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function tt(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, r] = s.useState(!1),
        c = s.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, a.jsx)(el.y, {
              readyState: i ? eO.Rv1.READY : eO.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, a.jsx)("img", {
                  src: n,
                  className: e3.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function tn(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, en.vq)(e.target, HTMLAnchorElement) ||
                        ((0, en.vq)(e.target, HTMLSpanElement) && (0, en.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        u = t.media?.proxyUrl ?? t.media?.url,
        d = null != u ? te(u, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, a.jsx)(ei.D, {
              ...i,
              className: e3.Nr,
              onClick: r,
              children: (0, a.jsxs)(ea.M, {
                  className: e3.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(es.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: e3.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: e3._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: e3.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: e3.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, a.jsx)(es.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, a.jsx)("div", {
                                      className: e3.ax,
                                      children: (0, a.jsx)(tt, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(er.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: e3.DD,
                                      children: e6(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: c()(e3.h_, e5.PT),
                                      children: [e6(t.body, n), (0, a.jsx)("div", { className: e3.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: e3.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: e3.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, a.jsxs)(es.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, eg.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, a.jsxs)("div", {
                                              className: e3.a5,
                                              children: [
                                                  (0, a.jsx)(ec.n, { size: "xs", color: "currentColor" }),
                                                  (0, a.jsx)(es.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eb.intl.currentLocale).format(
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
let tl = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, a.jsxs)(ea.M, {
        className: e3.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(er.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e3.DD,
                    children: e6(t.title, n),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: c()(e3.h_, e5.PT),
                    children: [e6(t.body, n), (0, a.jsx)("div", { className: e3.fm })],
                }),
            (0, a.jsxs)("div", {
                className: e3.ov,
                children: [
                    (0, a.jsx)(es.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, eg.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: e3.a5,
                            children: [
                                (0, a.jsx)(ec.n, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(es.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(eb.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function ti(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: i } = e,
        r = s.useCallback(
            (e) => {
                if (
                    !(
                        (0, en.vq)(e.target, HTMLAnchorElement) ||
                        ((0, en.vq)(e.target, HTMLSpanElement) && (0, en.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? te(o, c) : void 0;
    return (0, a.jsxs)(ei.D, {
        ...i,
        className: e3.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != u &&
                (0, a.jsx)("div", {
                    className: e3.Vl,
                    children: (0, a.jsx)(tt, { message: t, src: u, aspectRatio: c }),
                }),
            (0, a.jsx)(tl, { message: t, channelId: n }),
        ],
    });
}
function ta(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        r = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(ei.D, {
        ...l,
        className: e3.Nr,
        onClick: r,
        children: (0, a.jsxs)(ea.M, {
            className: e3.zI,
            children: [
                (0, a.jsx)(er.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e3.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: e3.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: e3.Nf,
                                    children: (0, a.jsx)(es.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e3.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, a.jsx)(es.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: e3.PF,
                                children: eb.intl.format(eb.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: e3.ov,
                    children: (0, a.jsx)(es.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eb.intl.format(eb.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, eE.J)(i.expiry) ?? eb.intl.string(eb.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function ts(e) {
    return null != e.message.poll
        ? (0, a.jsx)(ta, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(tn, { ...e })
          : (0, a.jsx)(ti, { ...e });
}
let tr = s.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, b.Ay)(),
        { invite: i, hasDiscordWebsite: r, closeModal: c, getScrollOffset: o } = Z(),
        {
            messages: u,
            guildId: d,
            channelId: x,
            loading: h,
            hasFetched: g,
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
                    null == e || n || w.A.isAnnouncementsFetching(e) || eD(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = eu("game_profile_announcements"),
        j = s.useCallback(() => {
            let e = i?.guild?.id ?? d;
            null != e &&
                null != x &&
                (n(_.GameProfileTrackActionActions.Announcements),
                eS.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                c(),
                eH({ invite: i, guildId: e, channelId: x, analyticsLocationStack: l }));
        }, [n, c, o, i, d, x, l, t]),
        A = s.useCallback(
            (e) => {
                let a = i?.guild?.id ?? d;
                null != a &&
                    null != x &&
                    (n(_.GameProfileTrackActionActions.AnnouncementsItem),
                    eS.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                    c(),
                    eH({ invite: i, guildId: a, channelId: x, messageId: e, analyticsLocationStack: l }));
            },
            [n, c, o, i, d, x, l, t],
        ),
        p = null != x && u.length > 0;
    return (!g || h) && r
        ? (0, a.jsx)(e0, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(e4, {
                  gap: 16,
                  children: et()
                      .range(3)
                      .map((e) => (0, a.jsx)(e9, {}, e)),
              }),
          })
        : p
          ? (0, a.jsx)(e1, {
                title: eb.intl.string(eb.t.B0BV3Y),
                onClickViewAll: j,
                children: f
                    ? (0, a.jsx)(eh.A, {
                          gap: 16,
                          items: u,
                          getItemKey: e7,
                          itemClassName: e3.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(ts, { message: e, channelId: x, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(em.A, {
                          gap: 16,
                          children: u.map((e) => (0, a.jsx)(ts, { message: e, channelId: x, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var tc = n(37537),
    to = n(541830),
    tu = n(240248),
    td = n(505779),
    tm = n(808380);
let tx = [tm.Y.DESKTOP, tm.Y.XBOX, tm.Y.PLAYSTATION, tm.Y.NINTENDO];
var th = n(28863),
    tg = n(975807),
    tf = n(194362);
function tj(e) {
    let { game: t, trackAction: n } = e,
        l = s.useCallback(async () => {
            n(_.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, tf.a)(eO.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tg.A)(e);
        }, [n]),
        i = s.useCallback((e) => (0, a.jsx)(th.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === ef.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(es.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eb.intl.format(eb.t.KAjfKl, { claimLink: i }),
          });
}
var tA = n(998445),
    tp = n(274997),
    tv = n(80500),
    tE = n(319745),
    tI = n(488225),
    tN = n(967492),
    tb = n(72265),
    tC = n(454346),
    tk = n(37948),
    tS = n(750013);
let tT = { size: "xs", colorClass: tS.wP };
function ty(e) {
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
                        icon: (0, a.jsx)(tA.GlobeEarthIcon, { ...t }),
                        action: _.GameProfileTrackActionActions.WebsiteLink,
                        title: eb.intl.string(eb.t.fOUKvg),
                    };
                case td.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(tp.p, { ...t }),
                        action: _.GameProfileTrackActionActions.XLink,
                        title: eb.intl.string(eb.t.INic4y),
                    };
                case td.V.YOUTUBE:
                    return {
                        action: _.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(tv.C, { ...t }),
                        title: eb.intl.string(eb.t.lNmxbE),
                    };
                case td.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(tE.Z, { ...t }),
                        action: _.GameProfileTrackActionActions.FacebookLink,
                        title: eb.intl.string(eb.t.FjyREK),
                    };
                case td.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(tI.L, { ...t }),
                        action: _.GameProfileTrackActionActions.InstagramLink,
                        title: eb.intl.string(eb.t["cgR+IK"]),
                    };
                case td.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(tN.a, { ...t }),
                        action: _.GameProfileTrackActionActions.BlueskyLink,
                        title: eb.intl.string(eb.t["D/PHq5"]),
                    };
                case td.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(tb.T, { ...t }),
                        action: _.GameProfileTrackActionActions.RedditLink,
                        title: eb.intl.string(eb.t["Hgb+fc"]),
                    };
                case td.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(tC.a, { ...t }),
                        action: _.GameProfileTrackActionActions.TwitchLink,
                        title: eb.intl.string(eb.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tT),
        o = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, a.jsx)(h.m, {
        text: c,
        children: (0, a.jsx)(ei.D, { onClick: o, className: tS.yO, title: c, children: r }),
    });
}
var tR = n(31300),
    tL = n(802516),
    tP = n(22363),
    tM = n(418524),
    tO = n(672572);
function tG(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case tm.Y.DESKTOP:
            return (0, a.jsx)(tR.k, { size: "xs", ...n });
        case tm.Y.XBOX:
            return (0, a.jsx)(tL.Y, { size: "xs", ...n });
        case tm.Y.PLAYSTATION:
            return (0, a.jsx)(tP.X, { size: "xs", ...n });
        case tm.Y.NINTENDO:
            return (0, a.jsx)(tM.M, { size: "xs", ...n });
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
                    case tm.Y.DESKTOP:
                        return eb.intl.string(eb.t.KT6uCJ);
                    case tm.Y.XBOX:
                        return eb.intl.string(eb.t.DDWUJp);
                    case tm.Y.PLAYSTATION:
                        return eb.intl.string(eb.t.fzMz2s);
                    case tm.Y.NINTENDO:
                        return eb.intl.string(eb.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(tG, { platform: t }),
        },
        t,
    );
}
var tw = n(424994),
    tV = n(422384);
function tD() {
    return (0, a.jsx)(es.E, { variant: "text-sm/normal", color: "text-subtle", children: eb.intl.string(eb.t.GruYxV) });
}
let tF = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, tc.c)("GameProfileGameDetails"),
        i = s.useMemo(() => t.genres.map(to.du).join(", "), [t]),
        r = t.getCompanyByRole(ef.wk.PUBLISHER),
        c = t.getCompanyByRole(ef.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        u = c.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        m = s.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(tm.Y.DESKTOP) && (e.has(tm.Y.MACOS) || e.has(tm.Y.LINUX)) && n.push(tm.Y.DESKTOP),
                n.filter((e) => tx.includes(e)).sort((e, t) => tx.indexOf(e) - tx.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return td.p.includes(t);
            })
            .sort((e, t) => td.p.indexOf(e.category) - td.p.indexOf(t.category)),
        h = !(0, tu.uJ)(i),
        g = !(0, tu.uJ)(o),
        f = !(0, tu.uJ)(u),
        j = !(0, tu.uJ)(d),
        A = m.length > 0,
        p = x.length > 0 && !x.every((e) => (0, tu.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: tV.uW,
        children: [
            (0, a.jsx)("div", {
                className: tV.Gf,
                children: (0, a.jsx)(er.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: eb.intl.string(eb.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tV.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: tV.J1,
                        children: [
                            (0, a.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eb.intl.string(eb.t.pDgwYB) : eb.intl.string(eb.t.mjFKqn),
                            }),
                            h
                                ? (0, a.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tV.Gu,
                                      children: i,
                                  })
                                : (0, a.jsx)(tD, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tV.J1,
                        children: [
                            (0, a.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eb.intl.string(eb.t.Hc7Enk) : eb.intl.string(eb.t["4Byy/G"]),
                            }),
                            g
                                ? (0, a.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tV.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(tD, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tV.J1,
                        children: [
                            (0, a.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? eb.intl.string(eb.t.KATEJB) : eb.intl.string(eb.t.na3PT0),
                            }),
                            f
                                ? (0, a.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tV.Gu,
                                      children: u,
                                  })
                                : (0, a.jsx)(tD, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tV.J1,
                        children: [
                            (0, a.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eb.intl.string(eb.t.H3mPDT),
                            }),
                            j
                                ? (0, a.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tV.Gu,
                                      children: eg.i$(new Date(d), "LL"),
                                  })
                                : (0, a.jsx)(tD, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tV.J1,
                        children: [
                            (0, a.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? eb.intl.string(eb.t.PNqxNe) : eb.intl.string(eb.t["UxAag+"]),
                            }),
                            A
                                ? (0, a.jsx)("div", {
                                      className: tV.Gu,
                                      children: m.map((e) => (0, a.jsx)(t_, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(tD, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tV.J1,
                        children: [
                            (0, a.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eb.intl.string(eb.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, a.jsx)("div", {
                                      className: tV.Gu,
                                      children: x.map((e) => (0, a.jsx)(ty, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, a.jsx)(tD, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tV.J1,
                        children: [
                            (0, a.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eb.intl.string(eb.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tV.Gu,
                                children: eb.intl.format(eb.t.XPFZVl, { igdbLink: tw.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: tV.OQ, children: (0, a.jsx)(tj, { game: t, trackAction: n }) }),
        ],
    });
};
var tU = n(714991),
    tY = n(486020),
    tW = n(992638);
function tB() {
    return (0, a.jsxs)(eQ, {
        className: tW.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(e$, { className: tW.dU, width: "30%" }),
            (0, a.jsx)(eQ, {
                className: tW.nV,
                children: (0, a.jsxs)("div", {
                    className: tW.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tW.To,
                            children: [
                                (0, a.jsx)(e$, { className: tW.QV }),
                                (0, a.jsxs)("div", {
                                    className: tW.Yv,
                                    children: [
                                        (0, a.jsx)(e$, { className: tW.Ag }),
                                        (0, a.jsx)(e$, { className: tW.zl }),
                                        (0, a.jsx)(e$, { className: tW.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(eq, {}),
                    ],
                }),
            }),
        ],
    });
}
function tz(e) {
    let { guild: t } = e,
        n = tY.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        r = null != n && l !== n,
        c = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, a.jsxs)("div", {
        className: tW._C,
        children: [
            r && (0, a.jsx)(e$, { className: tW.EQ }),
            (0, a.jsx)("img", {
                className: tW.$f,
                src: n,
                alt: eb.intl.formatToPlainString(eb.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tH(e) {
    let { trackAction: t } = e,
        n = (0, tc.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: i, isCommunityInviteResolving: r, isMember: c, closeModal: o } = Z(),
        u = s.useCallback(() => {
            null != l &&
                (t(_.GameProfileTrackActionActions.JoinServer),
                o(),
                eR.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eO.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? i && r
            ? (0, a.jsx)(tB, {})
            : null
        : (0, a.jsxs)("div", {
              className: tW.uW,
              children: [
                  (0, a.jsx)(er.D, {
                      className: tW.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: eb.intl.string(eb.t["U2N+ci"]),
                  }),
                  (0, a.jsx)("div", {
                      className: tW.kL,
                      children: (0, a.jsxs)("div", {
                          className: tW.hQ,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: tW.To,
                                  children: [
                                      (0, a.jsx)(tz, { guild: l.guild }),
                                      (0, a.jsxs)("div", {
                                          className: tW.yj,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: tW.YS,
                                                  children: [
                                                      (0, a.jsx)(tU.A, { guild: l.guild, size: 16 }),
                                                      (0, a.jsx)(er.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, tu.uJ)(l.guild?.description) &&
                                                  (0, a.jsx)(es.E, {
                                                      className: tW.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, a.jsxs)("div", {
                                                        className: tW.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: tW.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tW._o }),
                                                                        (0, a.jsx)(es.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eb.intl.format(eb.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    l.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != l.approximate_member_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: tW.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: tW.jk }),
                                                                        (0, a.jsx)(es.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: eb.intl.format(eb.t.zRl6XR, {
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
                                  text: c ? eb.intl.string(eb.t.cEnaWx) : eb.intl.string(eb.t.XpeFYr),
                                  onClick: u,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var tX = n(369606),
    tK = n(775602),
    tJ = n(21161),
    t$ = n(400492),
    tQ = n(459746),
    tq = n(732369);
let tZ = n(892799),
    t0 = s.forwardRef(function (e, t) {
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
                      (0, a.jsx)("div", { className: tq.y1, style: { backgroundImage: `url("${l}")` } }),
                      (0, a.jsx)("div", { className: tq.N4 }),
                  ],
              });
    });
function t1(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(to.du).join(", ");
    return (0, tu.uJ)(n) ? null : (0, a.jsx)(es.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function t8(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: tq.Qc,
        children: [
            (0, a.jsx)(tX.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(es.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eb.intl.formatToPlainString(eb.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t4(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, a.jsx)(t2, {
        game: t,
        className: c()(n ? tq.n8 : tq.FS, !n && (0, tQ.cO)(t) && tq.CD),
        imageClassName: tq.xe,
    });
}
function t2(e) {
    let { game: t, className: n, imageClassName: l } = e,
        i = (0, a.jsx)(tQ.Ay, { game: t, className: l, size: tQ.wu.LARGE });
    return t.id !== e2
        ? (0, a.jsx)("div", { className: n, children: i })
        : (0, a.jsx)(t3, { className: n, children: i });
}
function t3(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(tJ.x),
        i = (0, m.bG)([tK.Ay], () => tK.Ay.useReducedMotion),
        r = s.useRef({ count: 0, lastTime: 0 });
    return (0, a.jsx)(ei.D, {
        className: c()(n, tq.b3),
        "aria-label": eb.intl.string(eb.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = r.current,
                a = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((r.current = { count: a, lastTime: t }), 3 === a)) {
                if (((r.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, t$.Ak)("discodo");
            }
        },
        children: t,
    });
}
let t5 = function (e) {
    let { game: t } = e,
        { isTwoColumn: n } = Z(),
        l = t.name;
    return (0, a.jsxs)("div", {
        className: tq.ap,
        children: [
            n && (0, a.jsx)(t2, { game: t, className: c()(tq.Tf, (0, tQ.cO)(t) && tq.wS), imageClassName: tq.w$ }),
            (0, a.jsxs)("div", {
                className: tq.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(t8, { rank: t.l30Rank }),
                    (0, a.jsxs)("div", {
                        className: tq.$,
                        children: [
                            (0, a.jsx)(er.D, { variant: "heading-xxl/semibold", children: l }),
                            t.id === e2 &&
                                (0, a.jsx)("img", {
                                    src: tZ,
                                    className: tq.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, a.jsx)(t1, { game: t }),
                ],
            }),
        ],
    });
};
var t6 = n(141628),
    t7 = n(289363),
    t9 = n(134131);
function ne() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: t9.uW,
        children: [
            (0, a.jsx)(e$, { className: t9.dU, width: "30%" }),
            (0, a.jsxs)(eQ, {
                className: t9.nV,
                children: [
                    (0, a.jsx)("div", { className: t9.sB, children: (0, a.jsx)(t7.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: t9.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: t9.Yv,
                                children: [(0, a.jsx)(e$, { width: "55%" }), (0, a.jsx)(e$, { width: "85%" })],
                            }),
                            (0, a.jsx)(eq, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nt(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, tc.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: i,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: u,
            hasOfficialApplication: d,
            officialApplicationFetchFailed: x,
        } = Z(),
        h = (0, m.bG)([Q.default], () => Q.default.getCurrentUser()),
        f = s.useCallback(() => {
            (t(_.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !d || x || null == h
        ? null
        : null == u || (c && !i)
          ? (0, a.jsx)(ne, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: t9.uW,
                  children: [
                      (0, a.jsx)(er.D, {
                          className: t9.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eb.intl.string(eb.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: t9.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: t9.sB,
                                  children: (0, a.jsx)(t7.default, { application: u }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: t9.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: t9.FS,
                                          children: [
                                              (0, a.jsx)(er.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: eb.intl.formatToPlainString(eb.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, a.jsx)(es.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: eb.intl.string(eb.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(g.$, {
                                          variant: "secondary",
                                          icon: t6.A,
                                          text: eb.intl.string(eb.t.jynBQ5),
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
var nn = n(635377),
    nl = n.n(nn),
    ni = n(80687),
    na = n(534573),
    ns = n(248643),
    nr = n(256905),
    nc = n(684519),
    no = n(191096),
    nu = n(90721),
    nd = n(258924);
function nm(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function nx(e, t) {
    return (0, na.Ec)(e, { size: t, keepAspectRatio: !0, format: tY.QB ? "webp" : null });
}
let nh = new (nl())({ max: 100 }),
    ng = s.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [i, r] = s.useState(null),
            o = null != i && i.url === t ? i.isPortrait : (nh.get(t) ?? !1),
            u = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (nh.set(t, n),
                        r((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            d = s.useCallback((e) => u(e.currentTarget), [u]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: u,
                    src: nx(t, 106),
                    className: c()(nd.r4, !o && nd.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, a.jsx)("img", { ref: u, src: nx(t, 900), className: c()(nd.c8, o && nd.D7, l), alt: n, onLoad: d }),
            ],
        });
    }),
    nf = s.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: i, isPlaying: r, onSelect: o, gameName: u, listItemProps: d } = e,
            m = s.useCallback(() => o(l), [o, l]),
            x = d?.tabIndex;
        return (0, a.jsx)(ei.D, {
            ...d,
            className: c()(nd.JS, i && nd.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: nd.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: nx("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nd.xn,
                        alt: eb.intl.formatToPlainString(eb.t.COYYrn, { game: u }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, a.jsx)("div", {
                            className: nd.UZ,
                            children: (0, a.jsx)(ni.D, { playing: i && r, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nj = s.memo(function (e) {
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
            (0, nu.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: d, className: nd.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: nd.tN,
                        children: (0, a.jsx)(ns.A, {
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
                            renderLinkComponent: nc.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: nd.T9,
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
        [o, u] = s.useState(t.screenshotUrls),
        d = s.useRef(null),
        x = s.useRef(null),
        h = (0, m.bG)([tK.Ay], () => tK.Ay.useReducedMotion),
        { obscured: g } = (0, no.I3)(),
        f = eu("game_profile_media");
    o !== t.screenshotUrls && (u(t.screenshotUrls), i(0));
    let j = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eM.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eM.YE)(e.application_id, e.id, e.width, "webp"),
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
        [N, b] = s.useState(!1),
        C = s.useRef(null),
        k = s.useCallback(() => {
            n(E ? _.GameProfileTrackActionActions.ClickTrailer : _.GameProfileTrackActionActions.ClickImage);
            let e = d.current,
                t = C.current,
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
            (0, nr.R)({
                items: r,
                startingIndex: p,
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
        }, [n, j, p, E]),
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
              className: nd.kL,
              children: [
                  E
                      ? (0, a.jsx)("div", {
                            className: nd.ND,
                            children: (0, a.jsx)(
                                nj,
                                {
                                    item: v,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: d,
                                    mediaPlayerRef: C,
                                    onPlay: S,
                                    onPause: T,
                                    onFullscreenChange: R,
                                },
                                `${p}-${v.url}`,
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
                                            children: (0, a.jsx)(ng, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, a.jsx)("div", { className: nd.QN }),
                                (0, a.jsx)(ei.D, {
                                    className: nd.gv,
                                    onClick: k,
                                    children: (0, a.jsx)("div", {
                                        className: nd.cs,
                                        children: (0, a.jsx)(
                                            ng,
                                            {
                                                url: v.url,
                                                className: nd.Jf,
                                                alt: eb.intl.formatToPlainString(eb.t.COYYrn, { game: t.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, a.jsx)(eh.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: A,
                            getItemKey: nm,
                            renderItem: (e, n) => {
                                let { item: l, index: i } = e;
                                return (0, a.jsx)(
                                    nf,
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
                      : (0, a.jsx)(em.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, a.jsx)(
                                    nf,
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
var np = n(49381),
    nv = n(661531),
    nE = n(223273);
function nI(e, t, n) {
    if (null == e || null == t || t < 10) return nE.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nE.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nE.vI.VERY_POSITIVE
              : nE.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nE.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nE.vI.MIXED;
    if (e >= 20) return nE.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nE.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nE.vI.VERY_NEGATIVE;
    return nE.vI.OVERWHELMINGLY_NEGATIVE;
}
function nN(e) {
    switch (e) {
        case nE.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nE.vI.OVERWHELMINGLY_POSITIVE:
        case nE.vI.VERY_POSITIVE:
        case nE.vI.POSITIVE:
        case nE.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nE.vI.MIXED:
            return "steam-review-text-mixed";
        case nE.vI.MOSTLY_NEGATIVE:
        case nE.vI.NEGATIVE:
        case nE.vI.VERY_NEGATIVE:
        case nE.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nb =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nC = n(778591);
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
function nT(e) {
    let { url: t, trackAction: n, title: l, rating: i, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tk.A)(),
        u = nI(i, r, "recent" === c),
        d = nN(u),
        m = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, a.jsx)(ei.D, {
        onClick: m,
        className: nS.nf,
        role: "link",
        "aria-label": eb.intl.string(eb.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nS.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nS.tN,
                    children: [
                        (0, a.jsx)(np.N, { size: "sm", color: nv.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(er.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    h.m,
                    {
                        text:
                            u === nE.vI.NO_USER_REVIEWS
                                ? eb.intl.string(eb.t.CLMt8J)
                                : eb.intl
                                      .format(
                                          "recent" === c
                                              ? eb.t.TzvC0k
                                              : "localized" === c
                                                ? eb.t.EOfrwm
                                                : eb.t["lzANJ/"],
                                          { rating: i, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: nS.Z0,
                            children: [
                                (0, a.jsx)(es.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: nS.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nE.vI.NO_USER_REVIEWS:
                                                return eb.intl.string(eb.t.CLMt8J);
                                            case nE.vI.OVERWHELMINGLY_POSITIVE:
                                                return eb.intl.string(eb.t["75sx1S"]);
                                            case nE.vI.VERY_POSITIVE:
                                                return eb.intl.string(eb.t["EkOVg+"]);
                                            case nE.vI.POSITIVE:
                                                return eb.intl.string(eb.t.ZUkFtr);
                                            case nE.vI.MOSTLY_POSITIVE:
                                                return eb.intl.string(eb.t.M7Z09a);
                                            case nE.vI.MIXED:
                                                return eb.intl.string(eb.t.c8yuHR);
                                            case nE.vI.MOSTLY_NEGATIVE:
                                                return eb.intl.string(eb.t.H0MSjG);
                                            case nE.vI.NEGATIVE:
                                                return eb.intl.string(eb.t.vpLrgz);
                                            case nE.vI.VERY_NEGATIVE:
                                                return eb.intl.string(eb.t["5spYuX"]);
                                            case nE.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eb.intl.string(eb.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== nE.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(es.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eb.intl
                                            .format(eb.t.sgIoin, { rating_count: r.toLocaleString() })
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
function ny(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: i } = t,
        r = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tk.A)(),
        x = s.useCallback(() => {
            (l(_.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, a.jsx)(ei.D, {
        onClick: x,
        className: nS.nf,
        role: "link",
        "aria-label": eb.intl.string(eb.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nS.Ur,
            children: [
                (0, a.jsx)(er.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eb.intl.string(eb.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nS.WA,
                    children: [
                        null != c ? (0, a.jsx)(nR, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, a.jsx)(nL, { rating: o, tier: c }) : null,
                        d
                            ? (0, a.jsx)(es.E, {
                                  variant: "text-xs/medium",
                                  color: nN(nE.vI.NO_USER_REVIEWS),
                                  children: eb.intl.string(eb.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nR(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nb.MIGHTY:
                    return eb.intl.string(eb.t.aZej2g);
                case nb.STRONG:
                    return eb.intl.string(eb.t.MLxnSg);
                case nb.FAIR:
                    return eb.intl.string(eb.t["3f19KA"]);
                case nb.WEAK:
                    return eb.intl.string(eb.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nb.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nb.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nb.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nb.WEAK:
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
function nL(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (function (e) {
            let t = "";
            switch (e) {
                case nb.MIGHTY:
                    t = "#fc430a";
                    break;
                case nb.STRONG:
                    t = "#9e00b4";
                    break;
                case nb.FAIR:
                    t = "#4aa1ce";
                    break;
                case nb.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, a.jsx)(
        h.m,
        {
            text: eb.intl.string(eb.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nS.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(nk, { rating: t, strokeColor: l }),
                    (0, a.jsx)(es.E, {
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
let nP = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, tc.c)("GameProfileReviews"),
        i = (0, nC.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED && null != i,
        c = t.reviews?.steam,
        o = nI(c?.recentRating, c?.recentRatingCount, !0),
        u = r && o !== nE.vI.NO_USER_REVIEWS,
        m =
            null != c &&
            null != c.localizedRating &&
            null != c.localizedRatingCount &&
            null != c.ratingCount &&
            c.localizedRatingCount >= 200 &&
            c.ratingCount >= 2e3,
        x = m ? c?.localizedRating : c?.rating,
        h = m ? c?.localizedRatingCount : c?.ratingCount,
        g = m ? eb.t["aWb+V4"] : eb.t["8e4LiB"],
        f = t.reviews?.opencritic != null && null != s;
    return r || u || f
        ? (0, a.jsxs)("div", {
              className: nS.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nS.Gf,
                      children: (0, a.jsx)(er.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eb.intl.string(eb.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nS.kL,
                      children: [
                          u && null != i
                              ? (0, a.jsx)("div", {
                                    className: nS.WH,
                                    children: (0, a.jsx)(nT, {
                                        url: i,
                                        trackAction: n,
                                        title: eb.intl.string(eb.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != i
                              ? (0, a.jsx)("div", {
                                    className: nS.WH,
                                    children: (0, a.jsx)(nT, {
                                        url: i,
                                        trackAction: n,
                                        title: eb.intl.string(g),
                                        rating: x,
                                        ratingCount: h,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          f && null != s
                              ? (0, a.jsx)("div", {
                                    className: nS.WH,
                                    children: (0, a.jsx)(ny, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nM = n(815996),
    nO = n(722258),
    nG = n(258245),
    n_ = n(561769),
    nw = n(484469),
    nV = n(57020),
    nD = n(682301);
let nF = [];
var nU = n(758836),
    nY = n(747828);
let nW = [0, 1, 2, 3, 4];
function nB(e) {
    return e.skuId;
}
let nz = s.createContext({ trackAction: () => {} });
function nH(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: i } = t,
        r = s.useContext(n_.v3),
        { trackAction: c } = s.useContext(nz),
        o = s.useRef(null),
        u = s.useCallback(
            (e) => {
                (c(_.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, nO.B)({
                        skuId: i,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, nV.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: d, ...m } = r;
    return (0, a.jsx)(n_.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(nG.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: nY.N,
            onClickCard: u,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function nX() {
    return (0, a.jsx)(nw.A, {});
}
function nK(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = Z(),
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
                            null == e || t || w.A.isShopCollectionFetching(e) || e_(e);
                        }, [e, t]),
                        { skuIds: l ?? nF, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, nD.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nM.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: nU.G2.CATALOG,
                }));
        }, [n, l]),
        o = s.useMemo(() => ({ trackAction: n }), [n]),
        u = eu("game_profile_shop_carousel");
    return r
        ? (0, a.jsx)(e0, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(e4, { children: nW.map((e) => (0, a.jsx)(nX, {}, e)) }),
          })
        : 0 === i.length
          ? null
          : (0, a.jsx)(nz.Provider, {
                value: o,
                children: (0, a.jsx)(e1, {
                    title: eb.intl.string(eb.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: u
                        ? (0, a.jsx)(eh.A, {
                              gap: "md",
                              items: i,
                              getItemKey: nB,
                              renderItem: (e, t) => (0, a.jsx)(nH, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, a.jsx)(em.A, {
                              gap: "md",
                              children: i.map((e) => (0, a.jsx)(nH, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var nJ = n(921138),
    n$ = n(311043);
let nQ = [],
    nq = [];
var nZ = n(607346);
let n0 = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function n1(e) {
    return e.id;
}
function n8(e) {
    let { className: t } = e;
    return (0, a.jsx)(eQ, { className: t, children: (0, a.jsx)(e$, { className: nZ.Lg }) });
}
function n4(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: i } = Z(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        u = null == r || c === r,
        { shouldOpenGameProfile: d, gameId: m } = (0, nJ.Ay)({
            gameId: t.id,
            source: _.GameProfileSources.SimilarGames,
        }),
        x = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                d && null != m && i(m, _.GameProfileSources.SimilarGames));
        }, [t.id, m, n, d, i]),
        g = s.useCallback(() => o(r), [r]);
    return (0, a.jsx)(h.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, a.jsxs)(ei.D, {
            ...l,
            className: nZ.Nr,
            onClick: x,
            "aria-label": eb.intl.formatToPlainString(eb.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(tQ.Ay, {
                    game: t,
                    className: nZ.xe,
                    size: tQ.wu.SMALL,
                    imageSize: 256,
                    onLoad: g,
                    onError: g,
                }),
                !u && (0, a.jsx)(n8, { className: nZ.uz }),
            ],
        }),
    });
}
function n2(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: i } = (function (e) {
            let t = !eG.has(e),
                { data: n, isLoading: l, error: i } = eV(e, t),
                a = t && null != n ? n : nQ;
            (0, L.x)(a);
            let s = (0, m.bG)(
                    [n$.A],
                    () => a.some((e) => null == n$.A.getGame(e) && !n$.A.hasNoData(e) && !n$.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [n$.A, Q.default],
                    () => {
                        let e = Q.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => n$.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, nJ.T_)(t) && !(0, X.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: nq };
        })(t),
        s = eu("game_profile_similar_games");
    return eG.has(t)
        ? null
        : l
          ? (0, a.jsx)(e0, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: nZ.XG,
                    style: n0,
                    children: (0, a.jsx)(e4, {
                        children: et()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(n8, { className: nZ.aZ }, e)),
                    }),
                }),
            })
          : 0 === i.length
            ? null
            : (0, a.jsx)(e1, {
                  title: eb.intl.string(eb.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: nZ.XG,
                      style: n0,
                      children: s
                          ? (0, a.jsx)(eh.A, {
                                gap: "md",
                                items: i,
                                getItemKey: n1,
                                itemClassName: nZ.cW,
                                renderItem: (e, t) =>
                                    (0, a.jsx)(n4, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(em.A, {
                                gap: "md",
                                children: i.map((e) => (0, a.jsx)(n4, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
n(667532);
var n3 = n(853022);
let n5 = new Set(["1402418703554842694", "356877880938070016"]),
    n6 = [td.V.EPICGAMES, td.V.STEAM, td.V.ROBLOX, td.V.BATTLENET, td.V.RIOT, td.V.MINECRAFT];
var n7 = n(349361),
    n9 = n(924895),
    le = n(422688),
    lt = n(505200),
    ln = n(695250);
let ll = function (e) {
    switch (e.category) {
        case td.V.STEAM:
            return {
                icon: np.N,
                text: eb.intl.string(eb.t.FsANs4),
                ariaLabel: eb.intl.string(eb.t["P+ePTG"]),
                action: _.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case td.V.EPICGAMES:
            return {
                icon: n7.r,
                text: eb.intl.string(eb.t.ZbBMHa),
                ariaLabel: eb.intl.string(eb.t.BwX0UW),
                action: _.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case td.V.ROBLOX:
            return {
                icon: n9.H,
                text: eb.intl.string(eb.t["pJ+P+h"]),
                ariaLabel: eb.intl.string(eb.t.tYxpdf),
                action: _.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case td.V.BATTLENET:
            return {
                icon: le.a,
                text: eb.intl.string(eb.t["A7grp+"]),
                ariaLabel: eb.intl.string(eb.t.x9at20),
                action: _.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case td.V.RIOT:
            return {
                icon: lt.A,
                text: eb.intl.string(eb.t.h6MapL),
                ariaLabel: eb.intl.string(eb.t["528nvc"]),
                action: _.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case td.V.MINECRAFT:
            return {
                icon: ln.m,
                text: eb.intl.string(eb.t["HZbmO+"]),
                ariaLabel: eb.intl.string(eb.t.WWTqYn),
                action: _.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tL.Y,
                text: eb.intl.string(eb.t["QpN/Iz"]),
                ariaLabel: eb.intl.string(eb.t["8JZmmF"]),
                action: _.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function li(e) {
    return (0, a.jsx)(g.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var la = n(48460);
function ls(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, nC.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eO.d3x.XBOX_GAME_PASS && !(0, tu.uJ)(e.id));
                return t?.id == null ? null : (0, n3.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (a = e?.steamReleaseStatus),
            s.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== td.V.EPICGAMES || !!n5.has(l)) &&
                            (e.category !== td.V.STEAM || a !== d.Y.RETIRED_ABANDONED) &&
                            n6.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === d.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === td.V.STEAM) ||
                    e.push({ category: td.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === td.V.STEAM ? -1 : +(t.category === td.V.STEAM)));
                return (null != n && s.unshift({ category: "XBOX_GAME_PASS", url: n }), s);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function lr(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tk.A)();
    return (0, a.jsx)(li, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lc = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: i, storeWebsites: r } = ls(t),
        c = s.useMemo(() => r.map(ll).filter((e) => null != e), [r]);
    if (!i) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(lr, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, a.jsxs)("div", {
            className: la.G,
            children: [(0, a.jsx)(lr, { data: c[0], trackAction: l }), (0, a.jsx)(lr, { data: c[1], trackAction: l })],
        });
    let o = (0, a.jsx)(li, {
        text: eb.intl.string(eb.t["/hMurx"]),
        "aria-label": eb.intl.string(eb.t.nK60cc),
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
        ? (0, a.jsxs)("div", { className: la.G, children: [(0, a.jsx)(lr, { data: c[0], trackAction: l }), o] })
        : o;
};
var lo = n(123292);
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
        { isTwoColumn: u } = Z(),
        d = s.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = i ? eb.intl.string(eb.t["6MwJo/"]) : eb.intl.string(eb.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: c()(tO.fi, tO.mX),
        children: [
            (0, a.jsx)(es.E, {
                ref: l,
                className: tO.g5,
                lineClamp: i ? void 0 : d,
                variant: "text-md/medium",
                children: t.description,
            }),
            r && (0, a.jsx)(lo.Q, { onClick: o, text: m }),
        ],
    });
}
var ld = n(109112),
    lm = n(761508),
    lx = n(376357),
    lh = n(857250),
    lg = n(97483),
    lf = n(922016),
    lj = n(980707),
    lA = n(477782),
    lp = n(663341),
    lv = n(408278),
    lE = n(34188),
    lI = n(173936),
    lN = n(365199),
    lb = n(789645),
    lC = n(442433),
    lk = n(50268),
    lS = n(44724),
    lT = n(676924),
    ly = n(957565),
    lR = (((i = {}).OVERVIEW = "overview"), (i.COMMUNITIES = "communities"), (i.COMMERCE = "commerce"), i),
    lL = n(695366),
    lP = n(540185),
    lM = n(926268),
    lO = n(53788),
    lG = n(831453),
    l_ = n(785866),
    lw = n(555704),
    lV = n(47675),
    lD = n(633075),
    lF = n(289173),
    lU = n(321191),
    lY = n(958805),
    lW = n(735321),
    lB = n(96173),
    lz = n(280450),
    lH = n(403362);
async function lX(e) {
    let t = e((0, lW.BF)());
    await lY.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function lK(e) {
    var t;
    let l,
        { game: i, className: r, trackAction: c, activeTab: o } = e,
        u = s.useRef(null),
        d = s.useRef(null),
        x = (0, lk.A)({ id: i.id, label: eb.intl.string(eb.t.SHQGPj) }),
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
                : (0, a.jsx)(lA.Dr, {
                      id: "game-profile-something-wrong",
                      label: eb.intl.string(eb.t.qP2cXd),
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
                            type: lP.x.FAVORITE_GAMES,
                            addLabel: eb.intl.string(eb.t.fgmitg),
                            removeLabel: eb.intl.string(eb.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: lM.HeartIcon,
                        },
                        {
                            type: lP.x.PLAYED_GAMES,
                            addLabel: eb.intl.string(eb.t["0xIVLR"]),
                            removeLabel: eb.intl.string(eb.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: lO.G,
                        },
                        {
                            type: lP.x.CURRENT_GAMES,
                            addLabel: eb.intl.string(eb.t.G0c4En),
                            removeLabel: eb.intl.string(eb.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: lG.H,
                        },
                        {
                            type: lP.x.WANT_TO_PLAY_GAMES,
                            addLabel: eb.intl.string(eb.t.UuBS4K),
                            removeLabel: eb.intl.string(eb.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: l_._,
                        },
                    ],
                    [],
                ),
                r = (0, m.yK)([lU.A], () => (null == l ? [] : (lU.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, lB.A)(),
                o = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof lD.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(lH.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                u = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await lX((i) => {
                                let a = i.filter(lF.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, lW.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new lF.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new lF.Yy({ ...a, games: e });
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
                        (0, lV.un)({
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
                            (await lX((n) =>
                                e
                                    ? n.some((e) => e instanceof lD.R && e.applicationId === o)
                                        ? n
                                        : [(t = new lD.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof lD.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof lD.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, lV.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, lW.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof lD.R && e.applicationId === o);
                h.push(
                    (0, a.jsx)(
                        lA.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eb.intl.formatToPlainString(eb.t.Ktb1n8, { name: n })
                                : eb.intl.formatToPlainString(eb.t.Xp6iZt, { name: n }),
                            action: () => d(!e),
                            leadingAccessory: { type: "icon", icon: lw.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let n = r.filter(lF.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, lW.uA)(n);
                    h.push(
                        (0, a.jsx)(
                            lA.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? eb.intl.string(eb.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => u(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: i,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === h.length ? null : h;
        })(i),
        { closeModal: p } = Z(),
        v = U({ location: "GameProfileOverflowMenu" }),
        E = (0, m.bG)([W.A], () => W.A.getApplicationIdFromDetectableId(i.id)),
        I = (0, m.bG)([W.A], () => W.A.hasStorefrontForApplicationId(E), [E]),
        b = s.useCallback(() => {
            null != E && (0, lS.G)({ applicationId: E });
        }, [E]),
        C = s.useCallback(() => {
            null != E && (c(_.GameProfileTrackActionActions.GameShop), (0, lS.default)({ applicationId: E }), p());
        }, [E, c, p]),
        k = s.useCallback(() => p(!1), [p]),
        S = s.useCallback(() => {
            c(_.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eO.BVt.GAME_PROFILE(i.id)}`;
            (0, ly.C)(e, () => {
                (0, lx.P)((0, lh.o)(eb.intl.string(eb.t["+5kSoW"]), lg.Ck.SUCCESS));
            });
        }, [i.id, c]);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            o === lR.COMMERCE &&
                (0, a.jsx)(lT.A, {
                    location: N.A.GAME_PROFILE,
                    onNavigateToQuestHome: p,
                    variant: "overlay-secondary",
                }),
            null != j &&
                o !== lR.COMMERCE &&
                (0, a.jsx)(lf.Y, {
                    targetElementRef: d,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lj.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, lC.Z_)(), t());
                            },
                            "aria-label": eb.intl.string(eb.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(lA.rX, { children: j }),
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
                                text: eb.intl.string(eb.t.sidPSo),
                            }),
                        }),
                }),
            I &&
                !v &&
                (0, a.jsx)(h.m, {
                    text: eb.intl.string(eb.t.apFNLU),
                    children: (0, a.jsx)(lv.K, {
                        icon: lE.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eb.intl.string(eb.t.apFNLU),
                        onMouseDown: b,
                        onClick: C,
                    }),
                }),
            o !== lR.COMMERCE &&
                (0, a.jsx)(h.m, {
                    text: eb.intl.string(eb.t.WqhZss),
                    children: (0, a.jsx)(lv.K, {
                        icon: lI.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eb.intl.string(eb.t.WqhZss),
                        onClick: S,
                    }),
                }),
            (null != x || null != f) &&
                o !== lR.COMMERCE &&
                (0, a.jsx)(lf.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lj.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, lC.Z_)(), t());
                            },
                            "aria-label": eb.intl.string(eb.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(lA.rX, { children: f }), (0, a.jsx)(lA.rX, { children: x })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(h.m, {
                            text: eb.intl.string(eb.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: u,
                                children: (0, a.jsx)(lv.K, {
                                    icon: lN.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eb.intl.string(eb.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(lv.K, {
                icon: lb.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: k,
                "aria-label": eb.intl.string(eb.t.cpT0Cq),
            }),
        ],
    });
}
let lJ = { enabled: !1 },
    l$ = (0, V.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: lJ,
        variations: { 0: lJ, 1: { enabled: !0 } },
    });
function lQ(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i } = n;
    if (
        !(function (e) {
            let { location: t } = e;
            return l$.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let s = eb.intl.string(eb.t["3xFZEo"]);
    return (0, a.jsx)(lm.V.Item, {
        id: lR.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(lR.COMMUNITIES),
        className: t,
        "aria-label": s,
        children: (0, a.jsx)(es.E, { variant: "text-md/medium", color: "none", children: s }),
    });
}
var lq = n(331322),
    lZ = n(278416),
    l0 = n(478016),
    l1 = n(900797),
    l8 = n(847374),
    l4 = n(421773),
    l2 = n(421108);
let l3 = "text-md/medium",
    l5 = [];
function l6(e) {
    let { label: t, chevron: n } = e,
        l = (function () {
            let { hasCommerceTab: e, commerceStorefront: t } = Z(),
                n = Object.values(t?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, l2.ZH)(n));
                }),
                l = (0, l2.tm)(n?.endsAt);
            return e && null != n && !l;
        })();
    return (0, a.jsxs)(lq.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            l &&
                (0, a.jsx)(lZ.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: nv.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, a.jsxs)(lq.B, {
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
function l7(e) {
    let {
            className: t,
            label: n,
            navigation: l,
            commercePages: i,
            selectedCommercePageIndex: r,
            selectCommercePage: c,
        } = e,
        { selectedTab: o, selectTab: u } = l,
        d = s.useRef(null),
        { isHovered: m, setIsHovered: x, onMouseEnter: h, onMouseLeave: g, cancelTimers: f } = (0, l4.A)(100, 100),
        j = eb.intl.string(eb.t["J3/JCl"]),
        A = s.useCallback(
            (e) => {
                (f(), x(e));
            },
            [f, x],
        );
    return (0, a.jsx)(lf.Y, {
        targetElementRef: d,
        shouldShow: m,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => A(!0),
        onRequestClose: () => A(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)("div", {
                onMouseEnter: h,
                onMouseLeave: g,
                children: (0, a.jsx)(lj.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": j,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, a.jsx)(lA.rX, {
                        children: i.map((e, t) => {
                            var n;
                            let l,
                                i = o === lR.COMMERCE && t === r,
                                s =
                                    ((n = e.title),
                                    null != (l = n?.trim()) && l.length > 0
                                        ? l
                                        : eb.intl.formatToPlainString(eb.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, a.jsx)(
                                lA.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: l0.U } : void 0,
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
                s = i ? l1.t : l8.a;
            return (0, a.jsx)(lm.V.Item, {
                ...e,
                id: lR.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: o === lR.COMMERCE ? lR.COMMERCE : void 0,
                onClick: (t) => {
                    (u(lR.COMMERCE), e.onClick(t));
                },
                onMouseLeave: g,
                clickableRef: (e) => {
                    d.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": j,
                "aria-haspopup": "menu",
                children: (0, a.jsx)(es.E, {
                    variant: l3,
                    color: "none",
                    children: (0, a.jsx)(l6, {
                        label: n,
                        chevron: (0, a.jsx)(s, { size: "xs", color: "currentColor" }),
                    }),
                }),
            });
        },
    });
}
function l9(e) {
    let { className: t, navigation: n } = e,
        {
            selectedTab: l,
            selectTab: i,
            hasCommerceTab: r,
            commercePages: c,
            selectedCommercePageIndex: o,
            selectCommercePage: u,
        } = (function (e) {
            let { selectedTab: t, selectTab: n } = e,
                { hasCommerceTab: l, commerceStorefront: i } = Z(),
                a = i?.pages ?? l5,
                [r, c] = s.useState({ storefrontId: i?.id, index: 0 }),
                [o, u] = s.useState(t);
            t !== o && (u(t), t !== lR.COMMERCE && c({ storefrontId: i?.id, index: 0 }));
            let d = r.storefrontId === i?.id && r.index < a.length ? r.index : 0,
                m = s.useCallback(
                    (e) => {
                        !l || e < 0 || e >= a.length || (c({ storefrontId: i?.id, index: e }), n(lR.COMMERCE));
                    },
                    [a, i?.id, l, n],
                );
            return {
                selectedTab: t,
                selectTab: n,
                hasCommerceTab: l,
                commercePages: a,
                selectedCommercePageIndex: d,
                selectCommercePage: m,
            };
        })(n);
    if (!r) return null;
    let d = eb.intl.string(eb.t.apFNLU);
    return c.length > 1
        ? (0, a.jsx)(l7, {
              className: t,
              label: d,
              navigation: n,
              commercePages: c,
              selectedCommercePageIndex: o,
              selectCommercePage: u,
          })
        : (0, a.jsx)(lm.V.Item, {
              id: lR.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: l,
              onClick: () => i(lR.COMMERCE),
              className: t,
              "aria-label": d,
              children: (0, a.jsx)(es.E, { variant: l3, color: "none", children: (0, a.jsx)(l6, { label: d }) }),
          });
}
var ie = n(510954);
function it(e) {
    let { game: t, trackAction: n, navigation: l } = e,
        { selectedTab: i, selectTab: r } = l,
        c = t.getIconURL(64),
        [o, u] = s.useState(null),
        d = s.useCallback(() => u(c), [c]),
        m = eb.intl.string(eb.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: ie.ln,
        children: (0, a.jsxs)("div", {
            className: ie.ap,
            children: [
                (0, a.jsx)("div", {
                    className: ie.wE,
                    children:
                        null != c && c !== o
                            ? (0, a.jsx)("img", { src: c, alt: "", className: ie.FC, draggable: !1, onError: d })
                            : (0, a.jsx)(ld._, { size: "md" }),
                }),
                (0, a.jsxs)(lm.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: i,
                    onItemSelect: r,
                    className: ie.vR,
                    children: [
                        (0, a.jsx)(lm.V.Item, {
                            id: lR.OVERVIEW,
                            disableItemStyles: !0,
                            className: ie.Mf,
                            "aria-label": m,
                            children: (0, a.jsx)(es.E, { variant: "text-md/medium", color: "none", children: m }),
                        }),
                        (0, a.jsx)(lQ, { className: ie.Mf, navigation: l }),
                        (0, a.jsx)(l9, { className: ie.Mf, navigation: l }),
                    ],
                }),
                (0, a.jsx)(lK, { game: t, className: ie.HK, trackAction: n, activeTab: i }),
            ],
        }),
    });
}
var il = n(871123),
    ii = n(439303),
    ia = n(317560),
    is = n(467884),
    ir = n(761812);
function ic(e) {
    return e;
}
function io(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: ir.B, children: t });
}
function iu(e) {
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
                "aria-label": `${eb.intl.string(eb.t["kocF+6"])}`,
                items: t,
                getItemKey: ic,
                disableFocusRingScope: !0,
                renderItem: (e, t, l) =>
                    (0, a.jsx)(io, {
                        children: (0, a.jsx)(is.Ay, {
                            positionInSection: l,
                            skuId: e,
                            variant: is.s6.SMALL,
                            analyticsLocations: n,
                            onClick: r,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, a.jsx)(em.A, {
                gap: "md",
                "aria-label": eb.intl.string(eb.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, a.jsx)(
                        io,
                        {
                            children: (0, a.jsx)(is.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: is.s6.SMALL,
                                analyticsLocations: n,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var id = n(936785),
    im = n(403581),
    ix = n(812095),
    ih = n(647474),
    ig = n(162536);
function ij(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, l2.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        s = i ? im.t : t.Icon;
    return (0, a.jsx)(ih.A, {
        className: c()(ig.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: ig.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: ig.Kk }),
                (0, a.jsx)(es.E, { variant: "text-sm/normal", color: "currentColor", children: (0, ix.U)(t.text) }),
            ],
        }),
    });
}
var iA = n(521058);
function ip() {
    let { storefrontPromotion: e } = Z();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: s } = e;
    if (null == s || (0, tu.uJ)(s.headerText)) return null;
    let r = {
        Icon: (0, id.LZ)(l?.icon ?? null),
        text: s.headerText,
        tooltip: null,
        endsAt: (0, id.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, a.jsx)(ij, { className: iA.v, promotion: r });
}
let iv = [0, 1, 2, 3],
    iE = { placement: ii.Ye.GAME_PROFILE };
function iI() {
    return (0, a.jsx)(e0, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(e4, { children: iv.map((e) => (0, a.jsx)(io, { children: (0, a.jsx)(is.yf, {}) }, e)) }),
    });
}
function iN(e) {
    let { trackAction: t, selectTab: n } = e,
        {
            socialLayerStorefrontRecommendationsData: l,
            socialLayerStorefrontRecommendationsLoading: i,
            hasCommerceTab: r,
            closeModal: c,
        } = Z(),
        { analyticsLocations: o } = (0, b.Ay)([N.A.GAME_PROFILE]),
        u = s.useCallback(() => {
            if (l?.application != null) {
                if (r) return void n(lR.COMMERCE);
                (t(_.GameProfileTrackActionActions.GameShop),
                    c(),
                    (0, lS.default)({ applicationId: l.application.id }));
            }
        }, [l, t, r, n, c]),
        d = s.useCallback(
            (e, n) => {
                let i = l?.guildId;
                null != i &&
                    (t(_.GameProfileTrackActionActions.GameShopItem),
                    (0, ia.R)({
                        skuId: e,
                        applicationId: n,
                        isStorefront: !1,
                        analyticsLocations: o,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, il.rG)(e, t, n, i) && c();
                        },
                    }));
            },
            [t, c, o, l],
        );
    if (i) return (0, a.jsx)(iI, {});
    if (null == l) return null;
    let { skuIds: m } = l;
    return (0, a.jsxs)(e1, {
        title: eb.intl.string(eb.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, a.jsx)(ip, {}),
            (0, a.jsx)(ii.E9, {
                newValue: iE,
                children: (0, a.jsx)(iu, { skuIds: m, analyticsLocations: o, onCardClick: d }),
            }),
        ],
    });
}
let ib = {
        [lR.OVERVIEW]: _.GameProfileTrackActionActions.Overview,
        [lR.COMMUNITIES]: _.GameProfileTrackActionActions.Communities,
        [lR.COMMERCE]: _.GameProfileTrackActionActions.GameShop,
    },
    iC = s.memo(function (e) {
        let { game: t, trackAction: n, selectTab: l } = e;
        return (0, a.jsxs)("div", {
            className: tO.oC,
            children: [
                (0, a.jsxs)("div", {
                    className: tO.lM,
                    children: [
                        (0, a.jsx)(nA, { game: t, trackAction: n }),
                        (0, a.jsx)(lu, { game: t, trackAction: n }),
                    ],
                }),
                (0, a.jsx)(tr, { gameId: t.id, trackAction: n }),
                (0, a.jsx)(iN, { trackAction: n, selectTab: l }),
                (0, a.jsx)(nK, { game: t, trackAction: n }),
                (0, a.jsx)(n2, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    ik = s.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l, selectTab: i } = e,
            s = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
        return (0, a.jsxs)("div", {
            className: tO.V0,
            children: [
                (0, a.jsx)(nA, { game: t, trackAction: n }),
                (0, a.jsxs)("div", {
                    className: tO.gr,
                    children: [
                        (0, a.jsx)(t4, { game: t, isTwoColumn: !1 }),
                        (0, a.jsxs)("div", {
                            className: tO.E1,
                            children: [
                                (0, a.jsx)(lc, { game: t, trackAction: n }),
                                (0, a.jsx)(lu, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(nt, { analyticsLocations: l, trackAction: n }),
                (0, a.jsx)(tH, { trackAction: n }),
                (0, a.jsx)(tr, { gameId: t.id, trackAction: n }),
                (0, a.jsx)(iN, { trackAction: n, selectTab: i }),
                (0, a.jsx)(nK, { game: t, trackAction: n }),
                (0, a.jsx)(n2, { gameId: t.id, trackAction: n }),
                s && (0, a.jsx)(nP, { game: t, trackAction: n }),
                (0, a.jsx)(tF, { game: t, trackAction: n }),
            ],
        });
    });
function iS(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: i } = Z();
    (0, C.A)({
        name: o.ImpressionNames.CLOUD_PLAY_CTA,
        type: o.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = s.useCallback(() => {
        (l(_.GameProfileTrackActionActions.CloudPlay), i(), t());
    }, [i, t, l]);
    return (0, a.jsx)(h.m, {
        text: eb.intl.string(eb.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(g.$, {
            icon: f.h,
            text: eb.intl.string(eb.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function iT(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: i } = e,
        s = (0, I.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, a.jsx)("div", {
              className: tO.NC,
              children: (0, a.jsx)(iS, { onCloudPlayClick: s, analyticsLocations: l, trackAction: i }),
          });
}
function iy(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        i = (0, E.A)(t.linkedApplications)?.id,
        [s] = (0, P.L_)(t.getOfficialApplicationId()),
        [r] = (0, P.L_)(t.id),
        { showsStoreLinks: o } = ls(t),
        u = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: c()(tO.Pn, tO.fi, tO.iH, o ? tO.sV : tO.gF),
        children: [
            null == i || s || r
                ? null
                : (0, a.jsx)(iT, { gameId: t.id, cloudPlayAppId: i, analyticsLocations: l, trackAction: n }),
            (0, a.jsxs)("div", {
                className: tO.V0,
                children: [
                    (0, a.jsx)(lc, { game: t, trackAction: n }),
                    (0, a.jsx)(nt, { analyticsLocations: l, trackAction: n }),
                    (0, a.jsx)(tH, { trackAction: n }),
                    u && (0, a.jsx)(nP, { game: t, trackAction: n }),
                    (0, a.jsx)(tF, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function iR(e) {
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
            (0, a.jsx)(t5, { game: t }),
            (0, a.jsx)(j.F, {
                children: n
                    ? (0, a.jsxs)("div", {
                          className: tO.jC,
                          children: [
                              (0, a.jsx)(iC, { game: t, trackAction: c, selectTab: l }),
                              (0, a.jsx)(iy, {
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
                          className: tO.b9,
                          children: (0, a.jsx)(ik, { game: t, trackAction: c, analyticsLocations: o, selectTab: l }),
                      }),
            }),
        ],
    });
}
function iL(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: i,
            onClose: r,
            appContext: o,
            trackExternalAction: d,
            initialScrollOffset: h,
            navigateToGame: g,
        } = e,
        [f, j] = s.useState(!0),
        [E, I] = s.useState(null),
        { clientThemesClassName: C } = (0, T.Ay)(),
        P = (0, m.bG)([G.default], () => G.default.locale),
        V = s.useMemo(() => (0, _.generateViewId)(), []),
        { analyticsLocations: D } = (0, b.Ay)(N.A.GAME_PROFILE),
        F = (0, z.s)(t),
        { data: Z } = (0, L.I)(t),
        ee = Z?.getOfficialApplicationId(),
        et = (0, H.rG)(Z),
        en = null != ee,
        el = (0, m.bG)([S.A], () => null != ee && S.A.didFetchingApplicationFail(ee), [ee]),
        ei = Z?.name ?? "",
        ea = (0, X.A)(Z),
        es = s.useRef(null);
    s.useEffect(() => {
        es.current = E;
    }, [E]);
    let {
            hasAlreadyLinked: er,
            canStartAuthorization: ec,
            fetched: eo,
            startAuthorization: eu,
            connectionApp: ed,
        } = (0, k.RD)(Z),
        { invite: em, isMember: ex, isResolving: eh } = (0, H.Ay)(Z, I),
        { socialLayerStorefrontRecommendationsData: eg, socialLayerStorefrontRecommendationsLoading: ef } = (function (
            e,
        ) {
            let t = Q.default.getCurrentUser()?.id,
                n = s.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, m.cf)(
                    [W.A],
                    () => ({
                        storefrontApplicationId: null != e ? W.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === W.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                a = (0, K.h)(l),
                r = (0, m.bG)([S.A], () => null != l && S.A.didFetchingApplicationFail(l), [l]),
                c = s.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: u } = (0, $.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: J.B.USER_PROFILE,
                }),
                d = s.useMemo(
                    () =>
                        null == a || null == a.guildId || "success" !== u || 0 === o.length
                            ? null
                            : { application: a, skuIds: o.map((e) => e.id), guildId: a.guildId },
                    [a, u, o],
                ),
                x = "loading" === u,
                h = "success" === u && o.length > 0 && null == a && !r;
            return {
                socialLayerStorefrontRecommendationsData: d,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (x || h),
            };
        })(t),
        { hasCommerceTab: ej, storefront: eA } = (function (e) {
            let { gameId: t, officialApplicationId: n, commerceEnabled: l } = e;
            s.useEffect(() => {
                l && (0, Y.Xw)();
            }, [l]);
            let i = (0, m.bG)(
                    [W.A],
                    () => W.A.getApplicationIdFromDetectableId(t) ?? (W.A.hasStorefrontForApplicationId(n) ? n : null),
                    [t, n],
                ),
                a = l && null != i,
                { effectiveStorefront: r } = (0, B.A)({ applicationId: a ? i : null }),
                c = (0, m.bG)(
                    [W.A],
                    () => (a && null != i ? (W.A.getStorefrontDataForApplicationId(i)?.storefront ?? null) : null),
                    [a, i],
                );
            return { hasCommerceTab: a, storefront: r ?? c };
        })({ gameId: t, officialApplicationId: ee, commerceEnabled: U({ location: "GameProfileModal" }) }),
        ep = Object.values(eA?.promotions ?? {})[0] ?? null,
        ev = s.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, _.getGuildIdAndVerifiedFromInvite)(es.current);
                (0, _.trackGameProfileAction)({
                    gameName: ei,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: V,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [ei, t, V, n],
        );
    ((0, v.Ay)(() => {
        ((0, _.trackGameProfileOpen)({
            source: n,
            viewId: V,
            gameId: t,
            gameName: ei,
            authorId: l,
            profileType: _.GameProfileTypes.FullProfile,
        }),
            (0, y.He)());
    }),
        (0, v.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, _.getGuildIdAndVerifiedFromInvite)(es.current),
                l = Date.now(),
                i = F.map((e) => {
                    let t = (0, R.JM)(e) ? (0, R.W6)(e, l) : (0, R.aJ)(e, P);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, _.trackGameProfileClose)({
                viewId: V,
                gameId: t,
                gameName: ei,
                playedFriendIds: F.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: w.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let eE = s.useCallback((e) => {
            j(e.contentRect.width >= 800);
        }, []),
        eI = (0, u.w)(eE, [], { fireOnMount: !0 }),
        eN = s.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, A.closeAllModals)(), (0, O.M)()) : r();
            },
            [r],
        ),
        eb = s.useCallback(() => eN(!1), [eN]),
        { navigation: eC, scrollerRef: ek } = (function (e) {
            let t = s.useRef(null),
                [n, l] = s.useState(lR.OVERVIEW),
                i = s.useCallback(
                    (e) => {
                        (l(e), t.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" }));
                    },
                    [t],
                ),
                a = s.useCallback(
                    (t) => {
                        if (t !== n) {
                            let n = ib[t];
                            null != n && e(n);
                        }
                        i(t);
                    },
                    [n, i, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: n, selectTab: a }), [n, a]), scrollerRef: t };
        })(ev),
        { selectedTab: eS } = eC,
        eT = s.useCallback(() => ek.current?.getScrollerNode()?.scrollTop ?? 0, [ek]),
        ey = s.useMemo(
            () => ({
                isTwoColumn: f,
                canStartAuthorization: ec,
                hasAlreadyLinked: er,
                fetchedAuthorization: eo,
                startAuthorization: eu,
                connectionApp: ed,
                invite: em,
                hasDiscordWebsite: et,
                hasOfficialApplication: en,
                officialApplicationFetchFailed: el,
                isCommunityInviteResolving: eh,
                isMember: ex,
                socialLayerStorefrontRecommendationsData: eg,
                socialLayerStorefrontRecommendationsLoading: ef,
                hasCommerceTab: ej,
                commerceStorefront: eA,
                storefrontPromotion: ep,
                closeModal: eN,
                navigateToGame: g,
                getScrollOffset: eT,
            }),
            [f, ec, er, eo, eu, ed, em, et, en, el, eh, ex, eg, ef, ej, eA, ep, eN, g, eT],
        ),
        eR = s.useRef(null);
    s.useEffect(() => {
        null != h && h > 0 && ek.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eL = s.useCallback((e) => {
        if (null != eR.current) {
            let t = Math.max(0, 1 - e.currentTarget.scrollTop / 150);
            eR.current.style.opacity = String(t);
        }
    }, []);
    return null == Z
        ? null
        : (0, a.jsx)(b.f5, {
              value: D,
              children: (0, a.jsx)(x.N, {
                  transitionState: i,
                  onClose: r,
                  children: (0, a.jsx)(q.Provider, {
                      value: ey,
                      children: (0, a.jsx)("div", {
                          className: c()(C, tO.kL),
                          ref: eI,
                          children: (0, a.jsxs)(M.A, {
                              obscured: ea,
                              onClose: eb,
                              children: [
                                  eS === lR.OVERVIEW && (0, a.jsx)(t0, { game: Z, ref: eR }),
                                  (0, a.jsxs)(p.Ch, {
                                      ref: ek,
                                      className: tO.XG,
                                      onScroll: eL,
                                      children: [
                                          (0, a.jsx)(it, { game: Z, trackAction: ev, navigation: eC }),
                                          eS === lR.OVERVIEW &&
                                              (0, a.jsx)(iR, {
                                                  game: Z,
                                                  selectTab: eC.selectTab,
                                                  isTwoColumn: f,
                                                  appContext: o,
                                                  source: n,
                                                  trackExternalAction: d,
                                                  trackAction: ev,
                                                  analyticsLocations: D,
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
let iP = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: i, ...r } = e,
        [c, o] = s.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: i }),
        u = c.gameId,
        d = s.useCallback(
            (e, t) => {
                e !== u && ((0, H.UT)(e), o({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, a.jsx)(
        iL,
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
