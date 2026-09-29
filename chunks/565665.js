n.d(t, { default: () => il });
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
    P = n(928550),
    R = n(570962),
    G = n(831024),
    _ = n(402860),
    O = n(773669),
    M = n(409626),
    w = n(422069),
    D = n(945810);
let V = { enabled: !1 },
    F = (0, D.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: V,
        variations: { 0: V, 1: { enabled: !0 } },
    });
function U(e) {
    let { location: t } = e;
    return F.useConfig({ location: t }).enabled;
}
var Y = n(205184),
    W = n(957807),
    B = n(49491),
    H = n(429913),
    z = n(832163),
    X = n(594832),
    K = n(862772),
    J = n(287809);
let $ = a.createContext(void 0);
function Q() {
    let e = a.useContext($);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var q = n(435558),
    Z = n.n(q),
    ee = n(621466),
    et = n(966697),
    en = n(939249),
    el = n(346055),
    ei = n(834730),
    ea = n(297264),
    es = n(460905);
let er = (0, D.mj)({
    name: "2026-09-new-horizontal-scroll-shared",
    kind: "user",
    defaultConfig: { useNewHScroll: !1 },
    variations: { 0: { useNewHScroll: !1 }, 1: { useNewHScroll: !0 } },
});
function ec(e) {
    return er.useConfig({ location: e }).useNewHScroll;
}
var eo = n(776231),
    eu = n(449543),
    ed = n(46054),
    em = n(197935),
    ex = n(58703);
n(321073);
var eh = n(155718),
    eg = n(387408),
    ef = n(731068),
    ej = n(59318),
    eA = n(320095),
    ep = n(708676),
    ev = n(383233),
    eE = n(998218),
    eN = n(375708);
let eI = /^#{1,3}\s+(.+)$/,
    ek = /^https?:\/\/\S+$/;
var eS = n(60465),
    eb = n(158390),
    eT = n(636537),
    eC = n(228366),
    ey = n(103348),
    eL = n(927813),
    eP = n(371794),
    eR = n(652215);
let eG = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function e_(e) {
    eC.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eP.aP)({
                    url: eR.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: O.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(ey.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (eC.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            eC.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        eC.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eO(e) {
    let t = ((await eT.Bo.get({ url: eR.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eG.has(t),
    );
    eC.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eM = (0, d.UT)(w.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => w.A.getSimilarGames(e) ?? null,
    load: (e) => eO(e),
    retryConfig: { backoff: () => new eb.A(5 * eL.A.Millis.SECOND, 5 * eL.A.Millis.MINUTE) },
    failureStaleAfter: eL.A.Seconds.MINUTE,
});
async function ew(e, t) {
    eC.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eT.Bo.get({ url: eR.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eC.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, eg.A)((0, eA.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, ev._c)(e))
                            return e.components
                                .filter((e) => e.type === eh.I5.TEXT_DISPLAY)
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
                        if ((0, ev._c)(e)) {
                            let t = e.components.find((e) => e.type === eh.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, ef.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, ej.tT)(e.content_type));
                        if (null != t) return (0, ef.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, ej.XB)(e.content_type));
                        if (null != n) return (0, ef.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, ef.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, ef.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, ef.oU)(
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(eI)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, ev._c)(l)
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
var eD = n(284009),
    eV = n.n(eD),
    eF = n(376728),
    eU = n(976860),
    eY = n(71393),
    eW = n(449054);
async function eB(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eV()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eY.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eR.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eW.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eR.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eF.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eU.pX)(eR.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eH = n(320448),
    ez = n(493285);
let eX = { sm: ez.nz, md: ez.a };
function eK(e) {
    let { className: t, width: n } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(ez.qf, t), style: { width: n } });
}
function eJ(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        a = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: l, style: a, children: n });
}
function e$(e) {
    let { className: t, size: n = "md" } = e;
    return (0, i.jsx)(eK, { className: r()(ez.x6, eX[n], t) });
}
var eQ = n(406510);
function eq(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, i.jsxs)("div", {
        className: eQ.kL,
        "aria-busy": !0,
        children: [
            (0, i.jsxs)("div", {
                className: eQ.wR,
                children: [(0, i.jsx)(eK, { className: eQ.Iz, width: n }), l && (0, i.jsx)(e$, { size: "sm" })],
            }),
            t,
        ],
    });
}
function eZ(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: eQ.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eQ.wR,
                children: [
                    (0, i.jsx)(ea.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eH._,
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
var e0 = n(949959);
function e1(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(e0.n, { [e0.C]: 16 === n }), children: t });
}
var e8 = n(235240),
    e5 = n(165648);
function e6(e, t) {
    return ed.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e2(e) {
    return e.id;
}
function e4() {
    return (0, i.jsxs)(eJ, {
        className: e8.s7,
        children: [
            (0, i.jsx)(eK, { className: e8.o$ }),
            (0, i.jsxs)("div", {
                className: e8.UF,
                children: [(0, i.jsx)(eK, { className: e8.iX }), (0, i.jsx)(eK, { className: e8.jt })],
            }),
        ],
    });
}
function e3(e, t) {
    var n;
    let l,
        i = (0, eo.kr)(364 * (0, eo.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = eE.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function e9(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [s, r] = a.useState(!1),
        c = a.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, i.jsx)(et.y, {
              readyState: s ? eR.Rv1.READY : eR.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, i.jsx)("img", {
                  src: n,
                  className: e8.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function e7(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: s } = e,
        c = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, ee.vq)(e.target, HTMLAnchorElement) ||
                        ((0, ee.vq)(e.target, HTMLSpanElement) && (0, ee.vq)(e.target.parentElement, HTMLAnchorElement))
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
        : (0, i.jsx)(en.D, {
              ...s,
              className: e8.Nr,
              onClick: c,
              children: (0, i.jsxs)(el.M, {
                  className: e8.zI,
                  children: [
                      null != m.url &&
                          (0, i.jsx)(ei.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: e8.Ow,
                              children: m.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: e8._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: e8.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: e8.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(ei.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, i.jsx)("div", {
                                      className: e8.ax,
                                      children: (0, i.jsx)(e9, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, i.jsx)(ea.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: e8.DD,
                                      children: e6(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(e8.h_, e5.PT),
                                      children: [e6(t.body, n), (0, i.jsx)("div", { className: e8.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: e8.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: e8.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(ei.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, ex.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: e8.a5,
                                              children: [
                                                  (0, i.jsx)(es.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(ei.E, {
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
let te = a.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, i.jsxs)(el.M, {
        className: e8.zI,
        children: [
            null != t.title &&
                (0, i.jsx)(ea.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e8.DD,
                    children: e6(t.title, n),
                }),
            t.body.length > 0 &&
                (0, i.jsxs)("div", {
                    className: r()(e8.h_, e5.PT),
                    children: [e6(t.body, n), (0, i.jsx)("div", { className: e8.fm })],
                }),
            (0, i.jsxs)("div", {
                className: e8.ov,
                children: [
                    (0, i.jsx)(ei.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, ex.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, i.jsxs)("div", {
                            className: e8.a5,
                            children: [
                                (0, i.jsx)(es.n, { size: "xs", color: "currentColor" }),
                                (0, i.jsx)(ei.E, {
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
function tt(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: s } = e,
        r = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, ee.vq)(e.target, HTMLAnchorElement) ||
                        ((0, ee.vq)(e.target, HTMLSpanElement) && (0, ee.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? e3(o, c) : void 0;
    return (0, i.jsxs)(en.D, {
        ...s,
        className: e8.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != u &&
                (0, i.jsx)("div", {
                    className: e8.Vl,
                    children: (0, i.jsx)(e9, { message: t, src: u, aspectRatio: c }),
                }),
            (0, i.jsx)(te, { message: t, channelId: n }),
        ],
    });
}
function tn(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: s } = t,
        r = a.useCallback(() => n(t.id), [n, t.id]);
    if (null == s) return null;
    let c = s.answers.slice(0, 3),
        o = s.answers.length - c.length;
    return (0, i.jsx)(en.D, {
        ...l,
        className: e8.Nr,
        onClick: r,
        children: (0, i.jsxs)(el.M, {
            className: e8.zI,
            children: [
                (0, i.jsx)(ea.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: e8.MH,
                    children: s.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: e8.xd,
                    children: [
                        c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: e8.Nf,
                                    children: (0, i.jsx)(ei.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e8.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, i.jsx)(ei.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: e8.PF,
                                children: eN.intl.format(eN.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: e8.ov,
                    children: (0, i.jsx)(ei.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eN.intl.format(eN.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, ep.J)(s.expiry) ?? eN.intl.string(eN.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function tl(e) {
    return null != e.message.poll
        ? (0, i.jsx)(tn, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(e7, { ...e })
          : (0, i.jsx)(tt, { ...e });
}
let ti = a.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, I.Ay)(),
        { invite: s, hasDiscordWebsite: r, closeModal: c, getScrollOffset: o } = Q(),
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
                    null == e || n || w.A.isAnnouncementsFetching(e) || ew(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = ec("game_profile_announcements"),
        j = a.useCallback(() => {
            let e = s?.guild?.id ?? m;
            null != e &&
                null != x &&
                (n(M.GameProfileTrackActionActions.Announcements),
                eS.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                c(),
                eB({ invite: s, guildId: e, channelId: x, analyticsLocationStack: l }));
        }, [n, c, o, s, m, x, l, t]),
        A = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? m;
                null != i &&
                    null != x &&
                    (n(M.GameProfileTrackActionActions.AnnouncementsItem),
                    eS.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                    c(),
                    eB({ invite: s, guildId: i, channelId: x, messageId: e, analyticsLocationStack: l }));
            },
            [n, c, o, s, m, x, l, t],
        ),
        p = null != x && u.length > 0;
    return (!g || h) && r
        ? (0, i.jsx)(eq, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, i.jsx)(e1, {
                  gap: 16,
                  children: Z()
                      .range(3)
                      .map((e) => (0, i.jsx)(e4, {}, e)),
              }),
          })
        : p
          ? (0, i.jsx)(eZ, {
                title: eN.intl.string(eN.t.B0BV3Y),
                onClickViewAll: j,
                children: f
                    ? (0, i.jsx)(em.A, {
                          gap: 16,
                          items: u,
                          getItemKey: e2,
                          itemClassName: e8.hu,
                          renderItem: (e, t) =>
                              (0, i.jsx)(tl, { message: e, channelId: x, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, i.jsx)(eu.A, {
                          gap: 16,
                          children: u.map((e) => (0, i.jsx)(tl, { message: e, channelId: x, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var ta = n(37537),
    ts = n(541830),
    tr = n(240248),
    tc = n(505779),
    to = n(808380);
let tu = [to.Y.DESKTOP, to.Y.XBOX, to.Y.PLAYSTATION, to.Y.NINTENDO];
var td = n(28863),
    tm = n(975807),
    tx = n(194362);
function th(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(M.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, tx.a)(eR.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tm.A)(e);
        }, [n]),
        s = a.useCallback((e) => (0, i.jsx)(td.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === eh.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(ei.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eN.intl.format(eN.t.KAjfKl, { claimLink: s }),
          });
}
var tg = n(998445),
    tf = n(274997),
    tj = n(80500),
    tA = n(319745),
    tp = n(488225),
    tv = n(967492),
    tE = n(72265),
    tN = n(454346),
    tI = n(37948),
    tk = n(750013);
let tS = { size: "xs", colorClass: tk.wP };
function tb(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tI.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case tc.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(tg.GlobeEarthIcon, { ...t }),
                        action: M.GameProfileTrackActionActions.WebsiteLink,
                        title: eN.intl.string(eN.t.fOUKvg),
                    };
                case tc.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(tf.p, { ...t }),
                        action: M.GameProfileTrackActionActions.XLink,
                        title: eN.intl.string(eN.t.INic4y),
                    };
                case tc.V.YOUTUBE:
                    return {
                        action: M.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(tj.C, { ...t }),
                        title: eN.intl.string(eN.t.lNmxbE),
                    };
                case tc.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(tA.Z, { ...t }),
                        action: M.GameProfileTrackActionActions.FacebookLink,
                        title: eN.intl.string(eN.t.FjyREK),
                    };
                case tc.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(tp.L, { ...t }),
                        action: M.GameProfileTrackActionActions.InstagramLink,
                        title: eN.intl.string(eN.t["cgR+IK"]),
                    };
                case tc.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(tv.a, { ...t }),
                        action: M.GameProfileTrackActionActions.BlueskyLink,
                        title: eN.intl.string(eN.t["D/PHq5"]),
                    };
                case tc.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(tE.T, { ...t }),
                        action: M.GameProfileTrackActionActions.RedditLink,
                        title: eN.intl.string(eN.t["Hgb+fc"]),
                    };
                case tc.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(tN.a, { ...t }),
                        action: M.GameProfileTrackActionActions.TwitchLink,
                        title: eN.intl.string(eN.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tS),
        o = a.useCallback(() => {
            (n(s), l(t.url));
        }, [s, l, n, t.url]);
    return (0, i.jsx)(x.m, {
        text: c,
        children: (0, i.jsx)(en.D, { onClick: o, className: tk.yO, title: c, children: r }),
    });
}
var tT = n(31300),
    tC = n(802516),
    ty = n(22363),
    tL = n(418524),
    tP = n(672572);
function tR(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case to.Y.DESKTOP:
            return (0, i.jsx)(tT.k, { size: "xs", ...n });
        case to.Y.XBOX:
            return (0, i.jsx)(tC.Y, { size: "xs", ...n });
        case to.Y.PLAYSTATION:
            return (0, i.jsx)(ty.X, { size: "xs", ...n });
        case to.Y.NINTENDO:
            return (0, i.jsx)(tL.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tG(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        x.m,
        {
            text: (function (e) {
                switch (e) {
                    case to.Y.DESKTOP:
                        return eN.intl.string(eN.t.KT6uCJ);
                    case to.Y.XBOX:
                        return eN.intl.string(eN.t.DDWUJp);
                    case to.Y.PLAYSTATION:
                        return eN.intl.string(eN.t.fzMz2s);
                    case to.Y.NINTENDO:
                        return eN.intl.string(eN.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(tR, { platform: t }),
        },
        t,
    );
}
var t_ = n(424994),
    tO = n(422384);
function tM() {
    return (0, i.jsx)(ei.E, { variant: "text-sm/normal", color: "text-subtle", children: eN.intl.string(eN.t.GruYxV) });
}
let tw = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, ta.c)("GameProfileGameDetails"),
        s = a.useMemo(() => t.genres.map(ts.du).join(", "), [t]),
        r = t.getCompanyByRole(eh.wk.PUBLISHER),
        c = t.getCompanyByRole(eh.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        u = c.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        m = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(to.Y.DESKTOP) && (e.has(to.Y.MACOS) || e.has(to.Y.LINUX)) && n.push(to.Y.DESKTOP),
                n.filter((e) => tu.includes(e)).sort((e, t) => tu.indexOf(e) - tu.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tc.p.includes(t);
            })
            .sort((e, t) => tc.p.indexOf(e.category) - tc.p.indexOf(t.category)),
        h = !(0, tr.uJ)(s),
        g = !(0, tr.uJ)(o),
        f = !(0, tr.uJ)(u),
        j = !(0, tr.uJ)(d),
        A = m.length > 0,
        p = x.length > 0 && !x.every((e) => (0, tr.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tO.uW,
        children: [
            (0, i.jsx)("div", {
                className: tO.Gf,
                children: (0, i.jsx)(ea.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: eN.intl.string(eN.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tO.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, i.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eN.intl.string(eN.t.pDgwYB) : eN.intl.string(eN.t.mjFKqn),
                            }),
                            h
                                ? (0, i.jsx)(ei.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tO.Gu,
                                      children: s,
                                  })
                                : (0, i.jsx)(tM, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, i.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eN.intl.string(eN.t.Hc7Enk) : eN.intl.string(eN.t["4Byy/G"]),
                            }),
                            g
                                ? (0, i.jsx)(ei.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tO.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tM, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, i.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? eN.intl.string(eN.t.KATEJB) : eN.intl.string(eN.t.na3PT0),
                            }),
                            f
                                ? (0, i.jsx)(ei.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tO.Gu,
                                      children: u,
                                  })
                                : (0, i.jsx)(tM, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, i.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eN.intl.string(eN.t.H3mPDT),
                            }),
                            j
                                ? (0, i.jsx)(ei.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tO.Gu,
                                      children: ex.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(tM, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, i.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? eN.intl.string(eN.t.PNqxNe) : eN.intl.string(eN.t["UxAag+"]),
                            }),
                            A
                                ? (0, i.jsx)("div", {
                                      className: tO.Gu,
                                      children: m.map((e) => (0, i.jsx)(tG, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tM, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, i.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eN.intl.string(eN.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: tO.Gu,
                                      children: x.map((e) => (0, i.jsx)(tb, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(tM, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tO.J1,
                        children: [
                            (0, i.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eN.intl.string(eN.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tO.Gu,
                                children: eN.intl.format(eN.t.XPFZVl, { igdbLink: t_.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tO.OQ, children: (0, i.jsx)(th, { game: t, trackAction: n }) }),
        ],
    });
};
var tD = n(714991),
    tV = n(486020),
    tF = n(992638);
function tU() {
    return (0, i.jsxs)(eJ, {
        className: tF.uW,
        animationDelayMs: 300,
        children: [
            (0, i.jsx)(eK, { className: tF.dU, width: "30%" }),
            (0, i.jsx)(eJ, {
                className: tF.nV,
                children: (0, i.jsxs)("div", {
                    className: tF.hQ,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tF.To,
                            children: [
                                (0, i.jsx)(eK, { className: tF.QV }),
                                (0, i.jsxs)("div", {
                                    className: tF.Yv,
                                    children: [
                                        (0, i.jsx)(eK, { className: tF.Ag }),
                                        (0, i.jsx)(eK, { className: tF.zl }),
                                        (0, i.jsx)(eK, { className: tF.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(e$, {}),
                    ],
                }),
            }),
        ],
    });
}
function tY(e) {
    let { guild: t } = e,
        n = tV.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, s] = a.useState(void 0),
        r = null != n && l !== n,
        c = a.useCallback(() => {
            s(n);
        }, [n]);
    return (0, i.jsxs)("div", {
        className: tF._C,
        children: [
            r && (0, i.jsx)(eK, { className: tF.EQ }),
            (0, i.jsx)("img", {
                className: tF.$f,
                src: n,
                alt: eN.intl.formatToPlainString(eN.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tW(e) {
    let { trackAction: t } = e,
        n = (0, ta.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: s, isCommunityInviteResolving: r, isMember: c, closeModal: o } = Q(),
        u = a.useCallback(() => {
            null != l &&
                (t(M.GameProfileTrackActionActions.JoinServer),
                o(),
                eC.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eR.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? s && r
            ? (0, i.jsx)(tU, {})
            : null
        : (0, i.jsxs)("div", {
              className: tF.uW,
              children: [
                  (0, i.jsx)(ea.D, {
                      className: tF.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: eN.intl.string(eN.t["U2N+ci"]),
                  }),
                  (0, i.jsx)("div", {
                      className: tF.kL,
                      children: (0, i.jsxs)("div", {
                          className: tF.hQ,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tF.To,
                                  children: [
                                      (0, i.jsx)(tY, { guild: l.guild }),
                                      (0, i.jsxs)("div", {
                                          className: tF.yj,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tF.YS,
                                                  children: [
                                                      (0, i.jsx)(tD.A, { guild: l.guild, size: 16 }),
                                                      (0, i.jsx)(ea.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, tr.uJ)(l.guild?.description) &&
                                                  (0, i.jsx)(ei.E, {
                                                      className: tF.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, i.jsxs)("div", {
                                                        className: tF.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tF.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tF._o }),
                                                                        (0, i.jsx)(ei.E, {
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
                                                                (0, i.jsxs)("div", {
                                                                    className: tF.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tF.jk }),
                                                                        (0, i.jsx)(ei.E, {
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
                              (0, i.jsx)(h.$, {
                                  variant: "secondary",
                                  text: c ? eN.intl.string(eN.t.cEnaWx) : eN.intl.string(eN.t.XpeFYr),
                                  onClick: u,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var tB = n(369606),
    tH = n(459746),
    tz = n(691540),
    tX = n(857250),
    tK = n(97483),
    tJ = n(922016),
    t$ = n(980707),
    tQ = n(477782),
    tq = n(663341),
    tZ = n(408278),
    t0 = n(34188),
    t1 = n(173936),
    t8 = n(365199),
    t5 = n(789645),
    t6 = n(442433),
    t2 = n(50268),
    t4 = n(44724),
    t3 = n(676924),
    t9 = n(957565),
    t7 = n(695366),
    ne = n(540185),
    nt = n(926268),
    nn = n(53788),
    nl = n(831453),
    ni = n(785866),
    na = n(555704),
    ns = n(47675),
    nr = n(633075),
    nc = n(289173),
    no = n(321191),
    nu = n(958805),
    nd = n(735321),
    nm = n(96173),
    nx = n(280450),
    nh = n(403362);
async function ng(e) {
    let t = e((0, nd.BF)());
    await nu.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function nf(e) {
    var t;
    let l,
        { game: s, className: r, trackAction: c } = e,
        o = a.useRef(null),
        u = a.useRef(null),
        m = (0, t2.A)({ id: s.id, label: eN.intl.string(eN.t.SHQGPj) }),
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
                : (0, i.jsx)(tQ.Dr, {
                      id: "game-profile-something-wrong",
                      label: eN.intl.string(eN.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: t7.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([nx.default], () => nx.default.getId()),
                s = a.useMemo(
                    () => [
                        {
                            type: ne.x.FAVORITE_GAMES,
                            addLabel: eN.intl.string(eN.t.fgmitg),
                            removeLabel: eN.intl.string(eN.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: nt.HeartIcon,
                        },
                        {
                            type: ne.x.PLAYED_GAMES,
                            addLabel: eN.intl.string(eN.t["0xIVLR"]),
                            removeLabel: eN.intl.string(eN.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: nn.G,
                        },
                        {
                            type: ne.x.CURRENT_GAMES,
                            addLabel: eN.intl.string(eN.t.G0c4En),
                            removeLabel: eN.intl.string(eN.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: nl.H,
                        },
                        {
                            type: ne.x.WANT_TO_PLAY_GAMES,
                            addLabel: eN.intl.string(eN.t.UuBS4K),
                            removeLabel: eN.intl.string(eN.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ni._,
                        },
                    ],
                    [],
                ),
                r = (0, d.yK)([no.A], () => (null == l ? [] : (no.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, nm.A)(),
                o = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof nr.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(nh.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                u = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await ng((i) => {
                                let a = i.filter(nc.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, nd.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new nc.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new nc.Yy({ ...a, games: e });
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
                        (0, ns.un)({
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
                            (await ng((n) =>
                                e
                                    ? n.some((e) => e instanceof nr.R && e.applicationId === o)
                                        ? n
                                        : [(t = new nr.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof nr.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof nr.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, ns.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, nd.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof nr.R && e.applicationId === o);
                h.push(
                    (0, i.jsx)(
                        tQ.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eN.intl.formatToPlainString(eN.t.Ktb1n8, { name: n })
                                : eN.intl.formatToPlainString(eN.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: na.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of s) {
                    let n = r.filter(nc.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        a = !l && null != n && (0, nd.uA)(n);
                    h.push(
                        (0, i.jsx)(
                            tQ.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? eN.intl.string(eN.t["86OoiH"]) : void 0,
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
        { closeModal: A } = Q(),
        p = (0, d.bG)([z.A], () => z.A.getApplicationIdFromDetectableId(s.id)),
        v = (0, d.bG)([z.A], () => z.A.hasStorefrontForApplicationId(p), [p]),
        E = U({ location: "GameProfileOverflowMenu" }),
        I = a.useCallback(() => {
            null != p && (0, t4.G)({ applicationId: p });
        }, [p]),
        k = a.useCallback(() => {
            null != p && (c(M.GameProfileTrackActionActions.GameShop), (0, t4.default)({ applicationId: p }), A());
        }, [p, c, A]),
        S = a.useCallback(() => A(!1), [A]),
        b = a.useCallback(() => {
            c(M.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eR.BVt.GAME_PROFILE(s.id)}`;
            (0, t9.C)(e, () => {
                (0, tz.P0)((0, tX.o)(eN.intl.string(eN.t["+5kSoW"]), tK.Ck.SUCCESS));
            });
        }, [s.id, c]);
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            E &&
                (0, i.jsx)(t3.A, {
                    location: N.A.GAME_PROFILE,
                    onNavigateToQuestHome: A,
                    variant: "overlay-secondary",
                }),
            null != j &&
                (0, i.jsx)(tJ.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(t$.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, t6.Z_)(), t());
                            },
                            "aria-label": eN.intl.string(eN.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tQ.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: u,
                            children: (0, i.jsx)(h.$, {
                                icon: tq.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eN.intl.string(eN.t.sidPSo),
                            }),
                        }),
                }),
            v &&
                (0, i.jsx)(x.m, {
                    text: eN.intl.string(eN.t.apFNLU),
                    children: (0, i.jsx)(tZ.K, {
                        icon: t0.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eN.intl.string(eN.t.apFNLU),
                        onMouseDown: I,
                        onClick: k,
                    }),
                }),
            (0, i.jsx)(x.m, {
                text: eN.intl.string(eN.t.WqhZss),
                children: (0, i.jsx)(tZ.K, {
                    icon: t1.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": eN.intl.string(eN.t.WqhZss),
                    onClick: b,
                }),
            }),
            (null != m || null != g) &&
                (0, i.jsx)(tJ.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(t$.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, t6.Z_)(), t());
                            },
                            "aria-label": eN.intl.string(eN.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tQ.rX, { children: g }), (0, i.jsx)(tQ.rX, { children: m })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(x.m, {
                            text: eN.intl.string(eN.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, i.jsx)(tZ.K, {
                                    icon: t8.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eN.intl.string(eN.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tZ.K, {
                icon: t5.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: S,
                "aria-label": eN.intl.string(eN.t.cpT0Cq),
            }),
        ],
    });
}
var nj = n(732369);
function nA(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: nj.y5,
        children: [
            (0, i.jsx)("div", { className: r()(nj.nI, n && nj.hD) }),
            (0, i.jsxs)("div", {
                className: r()(nj.A1, n && nj.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: nj.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: nj.hm,
                        children: [
                            (0, i.jsx)(ea.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(nN, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(nf, { game: t, className: nj.HK, trackAction: l }),
        ],
    });
}
function np(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(nj.nI, nj.Jn, t && nj.hD) });
}
let nv = a.forwardRef(function (e, t) {
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
    return (0, tr.uJ)(l)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: nj.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, i.jsx)("div", { className: nj.N4 }),
              ],
          });
});
function nE(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(ts.du).join(", ");
    return (0, tr.uJ)(n) ? null : (0, i.jsx)(ei.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function nN(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: nj.Qc,
        children: [
            (0, i.jsx)(tB.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(ei.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eN.intl.formatToPlainString(eN.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function nI(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: r()(n ? nj.n8 : nj.FS, !n && (0, tH.cO)(t) && nj.CD),
        children: (0, i.jsx)(tH.Ay, { game: t, className: nj.xe, size: tH.wu.LARGE }),
    });
}
let nk = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: s } = Q(),
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
        className: r()(nj.ap, l && nj.Gh),
        children: [
            s &&
                (0, i.jsx)("div", {
                    className: r()(nj.Tf, (0, tH.cO)(t) && nj.wS),
                    children: (0, i.jsx)(tH.Ay, { game: t, className: nj.w$, size: tH.wu.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: nj.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(nN, { rank: t.l30Rank }),
                    (0, i.jsx)(ea.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(nE, { game: t }),
                ],
            }),
        ],
    });
};
var nS = n(141628),
    nb = n(289363),
    nT = n(134131);
function nC() {
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: nT.uW,
        children: [
            (0, i.jsx)(eK, { className: nT.dU, width: "30%" }),
            (0, i.jsxs)(eJ, {
                className: nT.nV,
                children: [
                    (0, i.jsx)("div", { className: nT.sB, children: (0, i.jsx)(nb.default, { isLoading: !0 }) }),
                    (0, i.jsxs)("div", {
                        className: nT.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: nT.Yv,
                                children: [(0, i.jsx)(eK, { width: "55%" }), (0, i.jsx)(eK, { width: "85%" })],
                            }),
                            (0, i.jsx)(e$, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ny(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, ta.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: s,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: u,
            hasOfficialApplication: m,
            officialApplicationFetchFailed: x,
        } = Q(),
        g = (0, d.bG)([J.default], () => J.default.getCurrentUser()),
        f = a.useCallback(() => {
            (t(M.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !m || x || null == g
        ? null
        : null == u || (c && !s)
          ? (0, i.jsx)(nC, {})
          : !c || r
            ? null
            : (0, i.jsxs)("div", {
                  className: nT.uW,
                  children: [
                      (0, i.jsx)(ea.D, {
                          className: nT.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eN.intl.string(eN.t["VDAhr+"]),
                      }),
                      (0, i.jsxs)("div", {
                          className: nT.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: nT.sB,
                                  children: (0, i.jsx)(nb.default, { application: u }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: nT.hQ,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: nT.FS,
                                          children: [
                                              (0, i.jsx)(ea.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: eN.intl.formatToPlainString(eN.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, i.jsx)(ei.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: eN.intl.string(eN.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(h.$, {
                                          variant: "secondary",
                                          icon: nS.A,
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
var nL = n(635377),
    nP = n.n(nL),
    nR = n(80687),
    nG = n(775602),
    n_ = n(534573),
    nO = n(248643),
    nM = n(256905),
    nw = n(85935),
    nD = n(191096),
    nV = n(90721),
    nF = n(258924);
function nU(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function nY(e, t) {
    return (0, n_.Ec)(e, { size: t, keepAspectRatio: !0, format: tV.QB ? "webp" : null });
}
let nW = new (nP())({ max: 100 }),
    nB = a.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [s, c] = a.useState(null),
            o = null != s && s.url === t ? s.isPortrait : (nW.get(t) ?? !1),
            u = a.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (nW.set(t, n),
                        c((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            d = a.useCallback((e) => u(e.currentTarget), [u]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    ref: u,
                    src: nY(t, 106),
                    className: r()(nF.r4, !o && nF.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, i.jsx)("img", { ref: u, src: nY(t, 900), className: r()(nF.c8, o && nF.D7, l), alt: n, onLoad: d }),
            ],
        });
    }),
    nH = a.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: s, isPlaying: c, onSelect: o, gameName: u, listItemProps: d } = e,
            m = a.useCallback(() => o(l), [o, l]),
            x = d?.tabIndex;
        return (0, i.jsx)(en.D, {
            ...d,
            className: r()(nF.JS, s && nF.Y4),
            onClick: m,
            children: (0, i.jsxs)("div", {
                className: nF.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: nY("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nF.xn,
                        alt: eN.intl.formatToPlainString(eN.t.COYYrn, { game: u }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, i.jsx)("div", {
                            className: nF.UZ,
                            children: (0, i.jsx)(nR.D, { playing: s && c, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nz = a.memo(function (e) {
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
            (0, nV.A)({ videoRef: s, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: nF.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nF.tN,
                        children: (0, i.jsx)(nO.A, {
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
                            renderLinkComponent: nw.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: nF.T9,
                            videoRef: s,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nX(e) {
    let { game: t, trackAction: n } = e,
        [l, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([nG.Ay], () => nG.Ay.useReducedMotion),
        { obscured: g } = (0, nD.I3)(),
        f = ec("game_profile_media");
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let j = a.useMemo(
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
            (0, nM.R)({
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
              className: nF.kL,
              children: [
                  E
                      ? (0, i.jsx)("div", {
                            className: nF.ND,
                            children: (0, i.jsx)(
                                nz,
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
                            className: nF.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nF.Jy,
                                            onAnimationEnd: y,
                                            children: (0, i.jsx)(nB, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: nF.QN }),
                                (0, i.jsx)(en.D, {
                                    className: nF.gv,
                                    onClick: b,
                                    children: (0, i.jsx)("div", {
                                        className: nF.cs,
                                        children: (0, i.jsx)(
                                            nB,
                                            {
                                                url: v.url,
                                                className: nF.Jf,
                                                alt: eN.intl.formatToPlainString(eN.t.COYYrn, { game: t.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, i.jsx)(em.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: A,
                            getItemKey: nU,
                            renderItem: (e, n) => {
                                let { item: l, index: a } = e;
                                return (0, i.jsx)(
                                    nH,
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
                      : (0, i.jsx)(eu.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, i.jsx)(
                                    nH,
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
var nK = n(49381),
    nJ = n(661531),
    n$ = n(223273);
function nQ(e, t, n) {
    if (null == e || null == t || t < 10) return n$.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? n$.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? n$.vI.VERY_POSITIVE
              : n$.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return n$.vI.MOSTLY_POSITIVE;
    if (e >= 40) return n$.vI.MIXED;
    if (e >= 20) return n$.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return n$.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return n$.vI.VERY_NEGATIVE;
    return n$.vI.OVERWHELMINGLY_NEGATIVE;
}
function nq(e) {
    switch (e) {
        case n$.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case n$.vI.OVERWHELMINGLY_POSITIVE:
        case n$.vI.VERY_POSITIVE:
        case n$.vI.POSITIVE:
        case n$.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case n$.vI.MIXED:
            return "steam-review-text-mixed";
        case n$.vI.MOSTLY_NEGATIVE:
        case n$.vI.NEGATIVE:
        case n$.vI.VERY_NEGATIVE:
        case n$.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nZ =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    n0 = n(778591);
function n1(e) {
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
var n8 = n(255417);
function n5(e) {
    let { url: t, trackAction: n, title: l, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tI.A)(),
        u = nQ(s, r, "recent" === c),
        d = nq(u),
        m = a.useCallback(() => {
            (n(M.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, i.jsx)(en.D, {
        onClick: m,
        className: n8.nf,
        role: "link",
        "aria-label": eN.intl.string(eN.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: n8.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: n8.tN,
                    children: [
                        (0, i.jsx)(nK.N, { size: "sm", color: nJ.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(ea.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    x.m,
                    {
                        text:
                            u === n$.vI.NO_USER_REVIEWS
                                ? eN.intl.string(eN.t.CLMt8J)
                                : eN.intl
                                      .format(
                                          "recent" === c
                                              ? eN.t.TzvC0k
                                              : "localized" === c
                                                ? eN.t.EOfrwm
                                                : eN.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: n8.Z0,
                            children: [
                                (0, i.jsx)(ei.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: n8.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case n$.vI.NO_USER_REVIEWS:
                                                return eN.intl.string(eN.t.CLMt8J);
                                            case n$.vI.OVERWHELMINGLY_POSITIVE:
                                                return eN.intl.string(eN.t["75sx1S"]);
                                            case n$.vI.VERY_POSITIVE:
                                                return eN.intl.string(eN.t["EkOVg+"]);
                                            case n$.vI.POSITIVE:
                                                return eN.intl.string(eN.t.ZUkFtr);
                                            case n$.vI.MOSTLY_POSITIVE:
                                                return eN.intl.string(eN.t.M7Z09a);
                                            case n$.vI.MIXED:
                                                return eN.intl.string(eN.t.c8yuHR);
                                            case n$.vI.MOSTLY_NEGATIVE:
                                                return eN.intl.string(eN.t.H0MSjG);
                                            case n$.vI.NEGATIVE:
                                                return eN.intl.string(eN.t.vpLrgz);
                                            case n$.vI.VERY_NEGATIVE:
                                                return eN.intl.string(eN.t["5spYuX"]);
                                            case n$.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eN.intl.string(eN.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== n$.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(ei.E, {
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
function n6(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tI.A)(),
        x = a.useCallback(() => {
            (l(M.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, i.jsx)(en.D, {
        onClick: x,
        className: n8.nf,
        role: "link",
        "aria-label": eN.intl.string(eN.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: n8.Ur,
            children: [
                (0, i.jsx)(ea.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eN.intl.string(eN.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: n8.WA,
                    children: [
                        null != c ? (0, i.jsx)(n2, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(n4, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(ei.E, {
                                  variant: "text-xs/medium",
                                  color: nq(n$.vI.NO_USER_REVIEWS),
                                  children: eN.intl.string(eN.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function n2(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nZ.MIGHTY:
                    return eN.intl.string(eN.t.aZej2g);
                case nZ.STRONG:
                    return eN.intl.string(eN.t.MLxnSg);
                case nZ.FAIR:
                    return eN.intl.string(eN.t["3f19KA"]);
                case nZ.WEAK:
                    return eN.intl.string(eN.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nZ.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nZ.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nZ.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nZ.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        x.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: n8.TE,
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
                case nZ.MIGHTY:
                    t = "#fc430a";
                    break;
                case nZ.STRONG:
                    t = "#9e00b4";
                    break;
                case nZ.FAIR:
                    t = "#4aa1ce";
                    break;
                case nZ.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        x.m,
        {
            text: eN.intl.string(eN.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: n8.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(n1, { rating: t, strokeColor: l }),
                    (0, i.jsx)(ei.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: n8.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let n3 = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, ta.c)("GameProfileReviews"),
        a = (0, n0.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != a,
        c = t.reviews?.steam,
        o = nQ(c?.recentRating, c?.recentRatingCount, !0),
        d = r && o !== n$.vI.NO_USER_REVIEWS,
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
        ? (0, i.jsxs)("div", {
              className: n8.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: n8.Gf,
                      children: (0, i.jsx)(ea.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: eN.intl.string(eN.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: n8.kL,
                      children: [
                          d && null != a
                              ? (0, i.jsx)("div", {
                                    className: n8.WH,
                                    children: (0, i.jsx)(n5, {
                                        url: a,
                                        trackAction: n,
                                        title: eN.intl.string(eN.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != a
                              ? (0, i.jsx)("div", {
                                    className: n8.WH,
                                    children: (0, i.jsx)(n5, {
                                        url: a,
                                        trackAction: n,
                                        title: eN.intl.string(g),
                                        rating: x,
                                        ratingCount: h,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          f && null != s
                              ? (0, i.jsx)("div", {
                                    className: n8.WH,
                                    children: (0, i.jsx)(n6, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var n9 = n(815996),
    n7 = n(722258),
    le = n(258245),
    lt = n(561769),
    ln = n(484469),
    ll = n(57020),
    li = n(682301);
let la = [];
var ls = n(758836),
    lr = n(747828);
let lc = [0, 1, 2, 3, 4];
function lo(e) {
    return e.skuId;
}
let lu = a.createContext({ trackAction: () => {} });
function ld(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: s } = t,
        r = a.useContext(lt.v3),
        { trackAction: c } = a.useContext(lu),
        o = a.useRef(null),
        u = a.useCallback(
            (e) => {
                (c(M.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, n7.B)({
                        skuId: s,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, ll.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, s, t],
        ),
        { flattenProductVariants: d, ...m } = r;
    return (0, i.jsx)(lt.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...m, productOverride: t },
        children: (0, i.jsx)(le.A, {
            skuId: s,
            aspectRatio: n,
            cardClassName: lr.N,
            onClickCard: u,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function lm() {
    return (0, i.jsx)(ln.A, {});
}
function lx(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = Q(),
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
                            null == e || t || w.A.isShopCollectionFetching(e) || e_(e);
                        }, [e, t]),
                        { skuIds: l ?? la, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, li.hv)(t, { flattenVariants: !0 }),
                s = (0, a.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: s, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = a.useCallback(() => {
            (n(M.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, n9.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: ls.G2.CATALOG,
                }));
        }, [n, l]),
        o = a.useMemo(() => ({ trackAction: n }), [n]),
        u = ec("game_profile_shop_carousel");
    return r
        ? (0, i.jsx)(eq, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, i.jsx)(e1, { children: lc.map((e) => (0, i.jsx)(lm, {}, e)) }),
          })
        : 0 === s.length
          ? null
          : (0, i.jsx)(lu.Provider, {
                value: o,
                children: (0, i.jsx)(eZ, {
                    title: eN.intl.string(eN.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: u
                        ? (0, i.jsx)(em.A, {
                              gap: "md",
                              items: s,
                              getItemKey: lo,
                              renderItem: (e, t) => (0, i.jsx)(ld, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, i.jsx)(eu.A, {
                              gap: "md",
                              children: s.map((e) => (0, i.jsx)(ld, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var lh = n(921138),
    lg = n(311043);
let lf = [],
    lj = [];
var lA = n(607346);
let lp = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function lv(e) {
    return e.id;
}
function lE(e) {
    let { className: t } = e;
    return (0, i.jsx)(eJ, { className: t, children: (0, i.jsx)(eK, { className: lA.Lg }) });
}
function lN(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: s } = Q(),
        r = t.getCoverURL(256),
        [c, o] = a.useState(null),
        u = null == r || c === r,
        { shouldOpenGameProfile: d, gameId: m } = (0, lh.Ay)({
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
        children: (0, i.jsxs)(en.D, {
            ...l,
            className: lA.Nr,
            onClick: h,
            "aria-label": eN.intl.formatToPlainString(eN.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, i.jsx)(tH.Ay, {
                    game: t,
                    className: lA.xe,
                    size: tH.wu.SMALL,
                    imageSize: 256,
                    onLoad: g,
                    onError: g,
                }),
                !u && (0, i.jsx)(lE, { className: lA.uz }),
            ],
        }),
    });
}
function lI(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: a } = (function (e) {
            let t = !eG.has(e),
                { data: n, isLoading: l, error: i } = eM(e, t),
                a = t && null != n ? n : lf;
            (0, L.x)(a);
            let s = (0, d.bG)(
                    [lg.A],
                    () => a.some((e) => null == lg.A.getGame(e) && !lg.A.hasNoData(e) && !lg.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, d.yK)(
                    [lg.A, J.default],
                    () => {
                        let e = J.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => lg.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, lh.T_)(t) && !(0, B.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: lj };
        })(t),
        s = ec("game_profile_similar_games");
    return eG.has(t)
        ? null
        : l
          ? (0, i.jsx)(eq, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, i.jsx)("div", {
                    className: lA.XG,
                    style: lp,
                    children: (0, i.jsx)(e1, {
                        children: Z()
                            .range(0, 8)
                            .map((e) => (0, i.jsx)(lE, { className: lA.aZ }, e)),
                    }),
                }),
            })
          : 0 === a.length
            ? null
            : (0, i.jsx)(eZ, {
                  title: eN.intl.string(eN.t["6rLyQB"]),
                  children: (0, i.jsx)("div", {
                      className: lA.XG,
                      style: lp,
                      children: s
                          ? (0, i.jsx)(em.A, {
                                gap: "md",
                                items: a,
                                getItemKey: lv,
                                itemClassName: lA.cW,
                                renderItem: (e, t) =>
                                    (0, i.jsx)(lN, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, i.jsx)(eu.A, {
                                gap: "md",
                                children: a.map((e) => (0, i.jsx)(lN, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
n(667532);
var lk = n(853022);
let lS = new Set(["1402418703554842694", "356877880938070016"]),
    lb = [tc.V.EPICGAMES, tc.V.STEAM, tc.V.ROBLOX, tc.V.BATTLENET, tc.V.RIOT, tc.V.MINECRAFT];
var lT = n(349361),
    lC = n(924895),
    ly = n(422688),
    lL = n(505200),
    lP = n(695250);
let lR = function (e) {
    switch (e.category) {
        case tc.V.STEAM:
            return {
                icon: nK.N,
                text: eN.intl.string(eN.t.FsANs4),
                ariaLabel: eN.intl.string(eN.t["P+ePTG"]),
                action: M.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case tc.V.EPICGAMES:
            return {
                icon: lT.r,
                text: eN.intl.string(eN.t.ZbBMHa),
                ariaLabel: eN.intl.string(eN.t.BwX0UW),
                action: M.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case tc.V.ROBLOX:
            return {
                icon: lC.H,
                text: eN.intl.string(eN.t["pJ+P+h"]),
                ariaLabel: eN.intl.string(eN.t.tYxpdf),
                action: M.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case tc.V.BATTLENET:
            return {
                icon: ly.a,
                text: eN.intl.string(eN.t["A7grp+"]),
                ariaLabel: eN.intl.string(eN.t.x9at20),
                action: M.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case tc.V.RIOT:
            return {
                icon: lL.A,
                text: eN.intl.string(eN.t.h6MapL),
                ariaLabel: eN.intl.string(eN.t["528nvc"]),
                action: M.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case tc.V.MINECRAFT:
            return {
                icon: lP.m,
                text: eN.intl.string(eN.t["HZbmO+"]),
                ariaLabel: eN.intl.string(eN.t.WWTqYn),
                action: M.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tC.Y,
                text: eN.intl.string(eN.t["QpN/Iz"]),
                ariaLabel: eN.intl.string(eN.t["8JZmmF"]),
                action: M.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function lG(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var l_ = n(48460);
function lO(e) {
    let t,
        n,
        l,
        i,
        s,
        r =
            ((t = (0, n0.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eR.d3x.XBOX_GAME_PASS && !(0, tr.uJ)(e.id));
                return t?.id == null ? null : (0, lk.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== tc.V.EPICGAMES || !!lS.has(l)) &&
                            (e.category !== tc.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            lb.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === tc.V.STEAM) ||
                    e.push({ category: tc.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === tc.V.STEAM ? -1 : +(t.category === tc.V.STEAM)));
                return (null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a);
            }, [t, i, l, s, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function lM(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tI.A)();
    return (0, i.jsx)(lG, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lw = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: s, storeWebsites: r } = lO(t),
        c = a.useMemo(() => r.map(lR).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lM, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: l_.G,
            children: [(0, i.jsx)(lM, { data: c[0], trackAction: l }), (0, i.jsx)(lM, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(lG, {
        text: eN.intl.string(eN.t["/hMurx"]),
        "aria-label": eN.intl.string(eN.t.nK60cc),
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
        ? (0, i.jsxs)("div", { className: l_.G, children: [(0, i.jsx)(lM, { data: c[0], trackAction: l }), o] })
        : o;
};
var lD = n(123292);
function lV(e) {
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
        { isTwoColumn: u } = Q(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = s ? eN.intl.string(eN.t["6MwJo/"]) : eN.intl.string(eN.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tP.fi, tP.mX),
        children: [
            (0, i.jsx)(ei.E, {
                ref: l,
                className: tP.g5,
                lineClamp: s ? void 0 : d,
                variant: "text-md/medium",
                children: t.description,
            }),
            c && (0, i.jsx)(lD.Q, { onClick: o, text: m }),
        ],
    });
}
var lF = n(871123),
    lU = n(439303),
    lY = n(317560),
    lW = n(467884),
    lB = n(761812);
function lH(e) {
    return e;
}
function lz(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: lB.B, children: t });
}
function lX(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        s = ec("social_layer_storefront_card_row"),
        r = a.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    (e.preventDefault(), l(n, i));
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : s
          ? (0, i.jsx)(em.A, {
                gap: "md",
                "aria-label": `${eN.intl.string(eN.t["kocF+6"])}`,
                items: t,
                getItemKey: lH,
                disableFocusRingScope: !0,
                renderItem: (e, t, l) =>
                    (0, i.jsx)(lz, {
                        children: (0, i.jsx)(lW.Ay, {
                            positionInSection: l,
                            skuId: e,
                            variant: lW.s6.SMALL,
                            analyticsLocations: n,
                            onClick: r,
                            listItemProps: t,
                        }),
                    }),
            })
          : (0, i.jsx)(eu.A, {
                gap: "md",
                "aria-label": eN.intl.string(eN.t["kocF+6"]),
                children: t.map((e, t) =>
                    (0, i.jsx)(
                        lz,
                        {
                            children: (0, i.jsx)(lW.Ay, {
                                positionInSection: t,
                                skuId: e,
                                variant: lW.s6.SMALL,
                                analyticsLocations: n,
                                onClick: r,
                            }),
                        },
                        `${e}-${t}`,
                    ),
                ),
            });
}
var lK = n(403581),
    lJ = n(812095),
    l$ = n(421108),
    lQ = n(647474),
    lq = n(162536);
function lZ(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, l$.tm)(l)) return null;
    let a = "nitro" === t.flavor,
        s = a ? lK.t : t.Icon;
    return (0, i.jsx)(lQ.A, {
        className: r()(lq.vK, n),
        color: a ? "nitro-pink" : void 0,
        children: (0, i.jsxs)("div", {
            className: lq.Qs,
            children: [
                null != s && (0, i.jsx)(s, { size: "xs", color: "currentColor", className: lq.Kk }),
                (0, i.jsx)(ei.E, { variant: "text-sm/normal", color: "currentColor", children: (0, lJ.U)(t.text) }),
            ],
        }),
    });
}
var l0 = n(521058);
function l1() {
    let { storefrontPromotion: e } = Q();
    return e?.flavor !== "nitro" ? null : (0, i.jsx)(lZ, { className: l0.v, promotion: e });
}
let l8 = [0, 1, 2, 3],
    l5 = { placement: lU.Ye.GAME_PROFILE };
function l6() {
    return (0, i.jsx)(eq, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, i.jsx)(e1, { children: l8.map((e) => (0, i.jsx)(lz, { children: (0, i.jsx)(lW.yf, {}) }, e)) }),
    });
}
function l2(e) {
    let { trackAction: t } = e,
        {
            socialLayerStorefrontRecommendationsData: n,
            socialLayerStorefrontRecommendationsLoading: l,
            closeModal: s,
        } = Q(),
        { analyticsLocations: r } = (0, I.Ay)([N.A.GAME_PROFILE]),
        c = a.useCallback(() => {
            n?.application != null &&
                (t(M.GameProfileTrackActionActions.GameShop),
                s(),
                (0, t4.default)({ applicationId: n.application.id }));
        }, [n, t, s]),
        o = a.useCallback(
            (e, l) => {
                let i = n?.guildId;
                null != i &&
                    (t(M.GameProfileTrackActionActions.GameShopItem),
                    (0, lY.R)({
                        skuId: e,
                        applicationId: l,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lF.rG)(e, t, l, i) && s();
                        },
                    }));
            },
            [t, s, r, n],
        );
    if (l) return (0, i.jsx)(l6, {});
    if (null == n) return null;
    let { skuIds: u } = n;
    return (0, i.jsxs)(eZ, {
        title: eN.intl.string(eN.t.WDdlUb),
        onClickViewAll: c,
        children: [
            (0, i.jsx)(l1, {}),
            (0, i.jsx)(lU.E9, {
                newValue: l5,
                children: (0, i.jsx)(lX, { skuIds: u, analyticsLocations: r, onCardClick: o }),
            }),
        ],
    });
}
let l4 = a.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, i.jsxs)("div", {
            className: tP.oC,
            children: [
                (0, i.jsxs)("div", {
                    className: tP.lM,
                    children: [
                        (0, i.jsx)(nX, { game: t, trackAction: n }),
                        (0, i.jsx)(lV, { game: t, trackAction: n }),
                    ],
                }),
                (0, i.jsx)(ti, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(l2, { trackAction: n }),
                (0, i.jsx)(lx, { game: t, trackAction: n }),
                (0, i.jsx)(lI, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    l3 = a.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
        return (0, i.jsxs)("div", {
            className: tP.V0,
            children: [
                (0, i.jsx)(nX, { game: t, trackAction: n }),
                (0, i.jsxs)("div", {
                    className: tP.gr,
                    children: [
                        (0, i.jsx)(nI, { game: t, isTwoColumn: !1 }),
                        (0, i.jsxs)("div", {
                            className: tP.E1,
                            children: [
                                (0, i.jsx)(lw, { game: t, trackAction: n }),
                                (0, i.jsx)(lV, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(ny, { analyticsLocations: l, trackAction: n }),
                (0, i.jsx)(tW, { trackAction: n }),
                (0, i.jsx)(ti, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(l2, { trackAction: n }),
                (0, i.jsx)(lx, { game: t, trackAction: n }),
                (0, i.jsx)(lI, { gameId: t.id, trackAction: n }),
                a && (0, i.jsx)(n3, { game: t, trackAction: n }),
                (0, i.jsx)(tw, { game: t, trackAction: n }),
            ],
        });
    });
function l9(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: s } = Q();
    (0, k.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = a.useCallback(() => {
        (l(M.GameProfileTrackActionActions.CloudPlay), s(), t());
    }, [s, t, l]);
    return (0, i.jsx)(x.m, {
        text: eN.intl.string(eN.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: eN.intl.string(eN.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function l7(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: a } = e,
        s = (0, E.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: tP.NC,
              children: (0, i.jsx)(l9, { onCloudPlayClick: s, analyticsLocations: l, trackAction: a }),
          });
}
function ie(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = (0, v.A)(t.linkedApplications)?.id,
        [s] = (0, P.L_)(t.getOfficialApplicationId()),
        [c] = (0, P.L_)(t.id),
        { showsStoreLinks: o } = lO(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(tP.Pn, tP.fi, tP.iH, o ? tP.sV : tP.gF),
        children: [
            null == a || s || c
                ? null
                : (0, i.jsx)(l7, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: l, trackAction: n }),
            (0, i.jsxs)("div", {
                className: tP.V0,
                children: [
                    (0, i.jsx)(lw, { game: t, trackAction: n }),
                    (0, i.jsx)(ny, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tW, { trackAction: n }),
                    d && (0, i.jsx)(n3, { game: t, trackAction: n }),
                    (0, i.jsx)(tw, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function it(e) {
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
        [k, P] = a.useState(null),
        { clientThemesClassName: D } = (0, T.Ay)(),
        V = (0, d.bG)([O.default], () => O.default.locale),
        F = a.useMemo(() => (0, M.generateViewId)(), []),
        { analyticsLocations: Q } = (0, I.Ay)(N.A.GAME_PROFILE),
        q = (0, Y.s)(t),
        { data: Z } = (0, L.I)(t),
        ee = (0, W.rG)(Z),
        et = Z?.getOfficialApplicationId(),
        en = null != et,
        el = (0, d.bG)([b.A], () => null != et && b.A.didFetchingApplicationFail(et), [et]),
        ei = Z?.name ?? "",
        ea = (0, B.A)(Z),
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
        { invite: em, isMember: ex, isResolving: eh } = (0, W.Ay)(Z, P),
        { socialLayerStorefrontRecommendationsData: eg, socialLayerStorefrontRecommendationsLoading: ef } = (function (
            e,
        ) {
            let t = J.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, d.cf)(
                    [z.A],
                    () => ({
                        storefrontApplicationId: null != e ? z.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === z.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                s = (0, H.h)(l),
                r = (0, d.bG)([b.A], () => null != l && b.A.didFetchingApplicationFail(l), [l]),
                c = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: u } = (0, K.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: X.B5.USER_PROFILE,
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
        ej = U({ location: "GameProfileModal" }),
        eA = (0, G.u)({ surface: "storefront_banner", applicationId: ej ? eg?.application.id : null }),
        ep = a.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, M.getGuildIdAndVerifiedFromInvite)(es.current);
                (0, M.trackGameProfileAction)({
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
    ((0, p.Ay)(() => {
        ((0, M.trackGameProfileOpen)({
            source: n,
            viewId: F,
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
                viewId: F,
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
        eP = a.useRef(null);
    a.useEffect(() => {
        null != h && h > 0 && ek.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eR = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != eP.current) {
                let e = Math.max(0, 1 - t / 150);
                eP.current.style.opacity = String(e);
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
                  children: (0, i.jsx)($.Provider, {
                      value: eb,
                      children: (0, i.jsx)("div", {
                          className: r()(D, tP.kL),
                          ref: eE,
                          children: (0, i.jsxs)(R.A, {
                              obscured: ea,
                              onClose: eI,
                              children: [
                                  (0, i.jsx)(nv, { game: Z, ref: eP }),
                                  (0, i.jsx)(nA, { game: Z, show: eT, trackAction: ep }),
                                  (0, i.jsx)(np, { show: eT }),
                                  (0, i.jsxs)(j.Ch, {
                                      ref: ek,
                                      className: tP.XG,
                                      onScroll: eR,
                                      children: [
                                          (0, i.jsx)(nk, {
                                              game: Z,
                                              onSetCompactBarScrollThreshold: eL,
                                              showCompactBar: eT,
                                          }),
                                          (0, i.jsx)(A.F, {
                                              children: v
                                                  ? (0, i.jsxs)("div", {
                                                        className: tP.jC,
                                                        children: [
                                                            (0, i.jsx)(l4, { game: Z, trackAction: ep }),
                                                            (0, i.jsx)(ie, {
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
                                                        className: tP.b9,
                                                        children: (0, i.jsx)(l3, {
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
let il = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: s, ...r } = e,
        [c, o] = a.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: s }),
        u = c.gameId,
        d = a.useCallback(
            (e, t) => {
                e !== u && ((0, W.UT)(e), o({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, i.jsx)(
        it,
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
