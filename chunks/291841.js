n.d(t, { default: () => lQ });
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
    G = n(402860),
    _ = n(773669),
    O = n(409626),
    M = n(422069),
    w = n(205184),
    D = n(957807),
    V = n(49491),
    U = n(429913),
    F = n(832163),
    Y = n(594832),
    W = n(862772),
    B = n(287809);
let H = a.createContext(void 0);
function z() {
    let e = a.useContext(H);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var X = n(435558),
    K = n.n(X),
    J = n(621466),
    $ = n(966697),
    Q = n(939249),
    q = n(346055),
    Z = n(834730),
    ee = n(297264),
    et = n(460905);
let en = (0, n(945810).mj)({
    name: "2026-09-new-horizontal-scroll-shared",
    kind: "user",
    defaultConfig: { useNewHScroll: !1 },
    variations: { 0: { useNewHScroll: !1 }, 1: { useNewHScroll: !0 } },
});
function el(e) {
    return en.useConfig({ location: e }).useNewHScroll;
}
var ei = n(776231),
    ea = n(449543),
    es = n(46054),
    er = n(197935),
    ec = n(58703);
n(321073);
var eo = n(155718),
    eu = n(387408),
    ed = n(731068),
    em = n(59318),
    ex = n(320095),
    eh = n(708676),
    eg = n(383233),
    ef = n(998218),
    ej = n(375708);
let eA = /^#{1,3}\s+(.+)$/,
    ep = /^https?:\/\/\S+$/;
var ev = n(60465),
    eE = n(158390),
    eN = n(636537),
    eI = n(228366),
    ek = n(103348),
    eS = n(927813),
    eb = n(371794),
    eT = n(652215);
let eC = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function ey(e) {
    eI.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eb.aP)({
                    url: eT.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: _.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(ek.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (eI.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            eI.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        eI.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eL(e) {
    let t = ((await eN.Bo.get({ url: eT.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eC.has(t),
    );
    eI.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eR = (0, d.UT)(M.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => M.A.getSimilarGames(e) ?? null,
    load: (e) => eL(e),
    retryConfig: { backoff: () => new eE.A(5 * eS.A.Millis.SECOND, 5 * eS.A.Millis.MINUTE) },
    failureStaleAfter: eS.A.Seconds.MINUTE,
});
async function eP(e, t) {
    eI.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eN.Bo.get({ url: eT.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eI.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, eu.A)((0, ex.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, eg._c)(e))
                            return e.components
                                .filter((e) => e.type === eo.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || ep.test(t.trim())
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
                        if ((0, eg._c)(e)) {
                            let t = e.components.find((e) => e.type === eo.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, ed.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, em.tT)(e.content_type));
                        if (null != t) return (0, ed.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, em.XB)(e.content_type));
                        if (null != n) return (0, ed.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, ed.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, ed.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, ed.oU)(
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(eA)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, eg._c)(l)
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
        eI.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eG = n(284009),
    e_ = n.n(eG),
    eO = n(376728),
    eM = n(976860),
    ew = n(71393),
    eD = n(449054);
async function eV(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    e_()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = ew.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eT.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eD.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eT.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eO.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eM.pX)(eT.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eU = n(320448),
    eF = n(493285);
let eY = { sm: eF.nz, md: eF.a };
function eW(e) {
    let { className: t, width: n } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(eF.qf, t), style: { width: n } });
}
function eB(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        a = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: l, style: a, children: n });
}
function eH(e) {
    let { className: t, size: n = "md" } = e;
    return (0, i.jsx)(eW, { className: r()(eF.x6, eY[n], t) });
}
var ez = n(406510);
function eX(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, i.jsxs)("div", {
        className: ez.kL,
        "aria-busy": !0,
        children: [
            (0, i.jsxs)("div", {
                className: ez.wR,
                children: [(0, i.jsx)(eW, { className: ez.Iz, width: n }), l && (0, i.jsx)(eH, { size: "sm" })],
            }),
            t,
        ],
    });
}
function eK(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: ez.kL,
        children: [
            (0, i.jsxs)("div", {
                className: ez.wR,
                children: [
                    (0, i.jsx)(ee.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eU._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: ej.intl.string(ej.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eJ = n(949959);
function e$(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(eJ.n, { [eJ.C]: 16 === n }), children: t });
}
var eQ = n(235240),
    eq = n(165648);
function eZ(e, t) {
    return es.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e0(e) {
    return e.id;
}
function e1() {
    return (0, i.jsxs)(eB, {
        className: eQ.s7,
        children: [
            (0, i.jsx)(eW, { className: eQ.o$ }),
            (0, i.jsxs)("div", {
                className: eQ.UF,
                children: [(0, i.jsx)(eW, { className: eQ.iX }), (0, i.jsx)(eW, { className: eQ.jt })],
            }),
        ],
    });
}
function e8(e, t) {
    var n;
    let l,
        i = (0, ei.kr)(364 * (0, ei.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = ef.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function e5(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [s, r] = a.useState(!1),
        c = a.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, i.jsx)($.y, {
              readyState: s ? eT.Rv1.READY : eT.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, i.jsx)("img", {
                  src: n,
                  className: eQ.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function e4(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: s } = e,
        c = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, J.vq)(e.target, HTMLAnchorElement) ||
                        ((0, J.vq)(e.target, HTMLSpanElement) && (0, J.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        o = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        u = t.media?.proxyUrl ?? t.media?.url,
        d = null != u ? e8(u, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, i.jsx)(Q.D, {
              ...s,
              className: eQ.Nr,
              onClick: c,
              children: (0, i.jsxs)(q.M, {
                  className: eQ.zI,
                  children: [
                      null != m.url &&
                          (0, i.jsx)(Z.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eQ.Ow,
                              children: m.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eQ._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eQ.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: eQ.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(Z.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: m.authorName,
                                          }),
                                      ],
                                  }),
                              null != t.media &&
                                  null != d &&
                                  (0, i.jsx)("div", {
                                      className: eQ.ax,
                                      children: (0, i.jsx)(e5, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, i.jsx)(ee.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: eQ.DD,
                                      children: eZ(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eQ.h_, eq.PT),
                                      children: [eZ(t.body, n), (0, i.jsx)("div", { className: eQ.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eQ.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: eQ.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(Z.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, ec.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eQ.a5,
                                              children: [
                                                  (0, i.jsx)(et.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(Z.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(ej.intl.currentLocale).format(
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
let e2 = a.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, i.jsxs)(q.M, {
        className: eQ.zI,
        children: [
            null != t.title &&
                (0, i.jsx)(ee.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eQ.DD,
                    children: eZ(t.title, n),
                }),
            t.body.length > 0 &&
                (0, i.jsxs)("div", {
                    className: r()(eQ.h_, eq.PT),
                    children: [eZ(t.body, n), (0, i.jsx)("div", { className: eQ.fm })],
                }),
            (0, i.jsxs)("div", {
                className: eQ.ov,
                children: [
                    (0, i.jsx)(Z.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, ec.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, i.jsxs)("div", {
                            className: eQ.a5,
                            children: [
                                (0, i.jsx)(et.n, { size: "xs", color: "currentColor" }),
                                (0, i.jsx)(Z.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(ej.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function e3(e) {
    let { message: t, channelId: n, onCardClick: l, listItemProps: s } = e,
        r = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, J.vq)(e.target, HTMLAnchorElement) ||
                        ((0, J.vq)(e.target, HTMLSpanElement) && (0, J.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return l(t.id);
            },
            [l, t.id],
        ),
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? e8(o, c) : void 0;
    return (0, i.jsxs)(Q.D, {
        ...s,
        className: eQ.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != u &&
                (0, i.jsx)("div", {
                    className: eQ.Vl,
                    children: (0, i.jsx)(e5, { message: t, src: u, aspectRatio: c }),
                }),
            (0, i.jsx)(e2, { message: t, channelId: n }),
        ],
    });
}
function e6(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: s } = t,
        r = a.useCallback(() => n(t.id), [n, t.id]);
    if (null == s) return null;
    let c = s.answers.slice(0, 3),
        o = s.answers.length - c.length;
    return (0, i.jsx)(Q.D, {
        ...l,
        className: eQ.Nr,
        onClick: r,
        children: (0, i.jsxs)(q.M, {
            className: eQ.zI,
            children: [
                (0, i.jsx)(ee.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eQ.MH,
                    children: s.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eQ.xd,
                    children: [
                        c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eQ.Nf,
                                    children: (0, i.jsx)(Z.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eQ.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        o > 0 &&
                            (0, i.jsx)(Z.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: eQ.PF,
                                children: ej.intl.format(ej.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eQ.ov,
                    children: (0, i.jsx)(Z.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: ej.intl.format(ej.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, eh.J)(s.expiry) ?? ej.intl.string(ej.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function e9(e) {
    return null != e.message.poll
        ? (0, i.jsx)(e6, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(e4, { ...e })
          : (0, i.jsx)(e3, { ...e });
}
let e7 = a.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, I.Ay)(),
        { invite: s, hasDiscordWebsite: r, closeModal: c, getScrollOffset: o } = z(),
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
            } = (0, d.cf)([M.A], () => ({
                data: null != e ? M.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && M.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && M.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || n || M.A.isAnnouncementsFetching(e) || eP(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = el("game_profile_announcements"),
        j = a.useCallback(() => {
            let e = s?.guild?.id ?? m;
            null != e &&
                null != x &&
                (n(O.GameProfileTrackActionActions.Announcements),
                ev.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                c(),
                eV({ invite: s, guildId: e, channelId: x, analyticsLocationStack: l }));
        }, [n, c, o, s, m, x, l, t]),
        A = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? m;
                null != i &&
                    null != x &&
                    (n(O.GameProfileTrackActionActions.AnnouncementsItem),
                    ev.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                    c(),
                    eV({ invite: s, guildId: i, channelId: x, messageId: e, analyticsLocationStack: l }));
            },
            [n, c, o, s, m, x, l, t],
        ),
        p = null != x && u.length > 0;
    return (!g || h) && r
        ? (0, i.jsx)(eX, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, i.jsx)(e$, {
                  gap: 16,
                  children: K()
                      .range(3)
                      .map((e) => (0, i.jsx)(e1, {}, e)),
              }),
          })
        : p
          ? (0, i.jsx)(eK, {
                title: ej.intl.string(ej.t.B0BV3Y),
                onClickViewAll: j,
                children: f
                    ? (0, i.jsx)(er.A, {
                          gap: 16,
                          items: u,
                          getItemKey: e0,
                          itemClassName: eQ.hu,
                          renderItem: (e, t) =>
                              (0, i.jsx)(e9, { message: e, channelId: x, onCardClick: A, listItemProps: t }, e.id),
                      })
                    : (0, i.jsx)(ea.A, {
                          gap: 16,
                          children: u.map((e) => (0, i.jsx)(e9, { message: e, channelId: x, onCardClick: A }, e.id)),
                      }),
            })
          : null;
});
var te = n(37537),
    tt = n(541830),
    tn = n(240248),
    tl = n(505779),
    ti = n(808380);
let ta = [ti.Y.DESKTOP, ti.Y.XBOX, ti.Y.PLAYSTATION, ti.Y.NINTENDO];
var ts = n(28863),
    tr = n(975807),
    tc = n(194362);
function to(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(O.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, tc.a)(eT.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tr.A)(e);
        }, [n]),
        s = a.useCallback((e) => (0, i.jsx)(ts.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === eo.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(Z.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ej.intl.format(ej.t.KAjfKl, { claimLink: s }),
          });
}
var tu = n(998445),
    td = n(274997),
    tm = n(80500),
    tx = n(319745),
    th = n(488225),
    tg = n(967492),
    tf = n(72265),
    tj = n(454346),
    tA = n(37948),
    tp = n(750013);
let tv = { size: "xs", colorClass: tp.wP };
function tE(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tA.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case tl.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(tu.GlobeEarthIcon, { ...t }),
                        action: O.GameProfileTrackActionActions.WebsiteLink,
                        title: ej.intl.string(ej.t.fOUKvg),
                    };
                case tl.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(td.p, { ...t }),
                        action: O.GameProfileTrackActionActions.XLink,
                        title: ej.intl.string(ej.t.INic4y),
                    };
                case tl.V.YOUTUBE:
                    return {
                        action: O.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(tm.C, { ...t }),
                        title: ej.intl.string(ej.t.lNmxbE),
                    };
                case tl.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(tx.Z, { ...t }),
                        action: O.GameProfileTrackActionActions.FacebookLink,
                        title: ej.intl.string(ej.t.FjyREK),
                    };
                case tl.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(th.L, { ...t }),
                        action: O.GameProfileTrackActionActions.InstagramLink,
                        title: ej.intl.string(ej.t["cgR+IK"]),
                    };
                case tl.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(tg.a, { ...t }),
                        action: O.GameProfileTrackActionActions.BlueskyLink,
                        title: ej.intl.string(ej.t["D/PHq5"]),
                    };
                case tl.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(tf.T, { ...t }),
                        action: O.GameProfileTrackActionActions.RedditLink,
                        title: ej.intl.string(ej.t["Hgb+fc"]),
                    };
                case tl.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(tj.a, { ...t }),
                        action: O.GameProfileTrackActionActions.TwitchLink,
                        title: ej.intl.string(ej.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tv),
        o = a.useCallback(() => {
            (n(s), l(t.url));
        }, [s, l, n, t.url]);
    return (0, i.jsx)(x.m, {
        text: c,
        children: (0, i.jsx)(Q.D, { onClick: o, className: tp.yO, title: c, children: r }),
    });
}
var tN = n(31300),
    tI = n(802516),
    tk = n(22363),
    tS = n(418524),
    tb = n(672572);
function tT(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case ti.Y.DESKTOP:
            return (0, i.jsx)(tN.k, { size: "xs", ...n });
        case ti.Y.XBOX:
            return (0, i.jsx)(tI.Y, { size: "xs", ...n });
        case ti.Y.PLAYSTATION:
            return (0, i.jsx)(tk.X, { size: "xs", ...n });
        case ti.Y.NINTENDO:
            return (0, i.jsx)(tS.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tC(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        x.m,
        {
            text: (function (e) {
                switch (e) {
                    case ti.Y.DESKTOP:
                        return ej.intl.string(ej.t.KT6uCJ);
                    case ti.Y.XBOX:
                        return ej.intl.string(ej.t.DDWUJp);
                    case ti.Y.PLAYSTATION:
                        return ej.intl.string(ej.t.fzMz2s);
                    case ti.Y.NINTENDO:
                        return ej.intl.string(ej.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(tT, { platform: t }),
        },
        t,
    );
}
var ty = n(424994),
    tL = n(422384);
function tR() {
    return (0, i.jsx)(Z.E, { variant: "text-sm/normal", color: "text-subtle", children: ej.intl.string(ej.t.GruYxV) });
}
let tP = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, te.c)("GameProfileGameDetails"),
        s = a.useMemo(() => t.genres.map(tt.du).join(", "), [t]),
        r = t.getCompanyByRole(eo.wk.PUBLISHER),
        c = t.getCompanyByRole(eo.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        u = c.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        m = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(ti.Y.DESKTOP) && (e.has(ti.Y.MACOS) || e.has(ti.Y.LINUX)) && n.push(ti.Y.DESKTOP),
                n.filter((e) => ta.includes(e)).sort((e, t) => ta.indexOf(e) - ta.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return tl.p.includes(t);
            })
            .sort((e, t) => tl.p.indexOf(e.category) - tl.p.indexOf(t.category)),
        h = !(0, tn.uJ)(s),
        g = !(0, tn.uJ)(o),
        f = !(0, tn.uJ)(u),
        j = !(0, tn.uJ)(d),
        A = m.length > 0,
        p = x.length > 0 && !x.every((e) => (0, tn.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tL.uW,
        children: [
            (0, i.jsx)("div", {
                className: tL.Gf,
                children: (0, i.jsx)(ee.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: ej.intl.string(ej.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tL.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? ej.intl.string(ej.t.pDgwYB) : ej.intl.string(ej.t.mjFKqn),
                            }),
                            h
                                ? (0, i.jsx)(Z.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tL.Gu,
                                      children: s,
                                  })
                                : (0, i.jsx)(tR, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? ej.intl.string(ej.t.Hc7Enk) : ej.intl.string(ej.t["4Byy/G"]),
                            }),
                            g
                                ? (0, i.jsx)(Z.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tL.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tR, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? ej.intl.string(ej.t.KATEJB) : ej.intl.string(ej.t.na3PT0),
                            }),
                            f
                                ? (0, i.jsx)(Z.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tL.Gu,
                                      children: u,
                                  })
                                : (0, i.jsx)(tR, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ej.intl.string(ej.t.H3mPDT),
                            }),
                            j
                                ? (0, i.jsx)(Z.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tL.Gu,
                                      children: ec.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(tR, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? ej.intl.string(ej.t.PNqxNe) : ej.intl.string(ej.t["UxAag+"]),
                            }),
                            A
                                ? (0, i.jsx)("div", {
                                      className: tL.Gu,
                                      children: m.map((e) => (0, i.jsx)(tC, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tR, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ej.intl.string(ej.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: tL.Gu,
                                      children: x.map((e) => (0, i.jsx)(tE, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(tR, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ej.intl.string(ej.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(Z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tL.Gu,
                                children: ej.intl.format(ej.t.XPFZVl, { igdbLink: ty.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tL.OQ, children: (0, i.jsx)(to, { game: t, trackAction: n }) }),
        ],
    });
};
var tG = n(714991),
    t_ = n(486020),
    tO = n(992638);
function tM() {
    return (0, i.jsxs)(eB, {
        className: tO.uW,
        animationDelayMs: 300,
        children: [
            (0, i.jsx)(eW, { className: tO.dU, width: "30%" }),
            (0, i.jsx)(eB, {
                className: tO.nV,
                children: (0, i.jsxs)("div", {
                    className: tO.hQ,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tO.To,
                            children: [
                                (0, i.jsx)(eW, { className: tO.QV }),
                                (0, i.jsxs)("div", {
                                    className: tO.Yv,
                                    children: [
                                        (0, i.jsx)(eW, { className: tO.Ag }),
                                        (0, i.jsx)(eW, { className: tO.zl }),
                                        (0, i.jsx)(eW, { className: tO.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(eH, {}),
                    ],
                }),
            }),
        ],
    });
}
function tw(e) {
    let { guild: t } = e,
        n = t_.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, s] = a.useState(void 0),
        r = null != n && l !== n,
        c = a.useCallback(() => {
            s(n);
        }, [n]);
    return (0, i.jsxs)("div", {
        className: tO._C,
        children: [
            r && (0, i.jsx)(eW, { className: tO.EQ }),
            (0, i.jsx)("img", {
                className: tO.$f,
                src: n,
                alt: ej.intl.formatToPlainString(ej.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tD(e) {
    let { trackAction: t } = e,
        n = (0, te.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: s, isCommunityInviteResolving: r, isMember: c, closeModal: o } = z(),
        u = a.useCallback(() => {
            null != l &&
                (t(O.GameProfileTrackActionActions.JoinServer),
                o(),
                eI.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eT.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? s && r
            ? (0, i.jsx)(tM, {})
            : null
        : (0, i.jsxs)("div", {
              className: tO.uW,
              children: [
                  (0, i.jsx)(ee.D, {
                      className: tO.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: ej.intl.string(ej.t["U2N+ci"]),
                  }),
                  (0, i.jsx)("div", {
                      className: tO.kL,
                      children: (0, i.jsxs)("div", {
                          className: tO.hQ,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tO.To,
                                  children: [
                                      (0, i.jsx)(tw, { guild: l.guild }),
                                      (0, i.jsxs)("div", {
                                          className: tO.yj,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tO.YS,
                                                  children: [
                                                      (0, i.jsx)(tG.A, { guild: l.guild, size: 16 }),
                                                      (0, i.jsx)(ee.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, tn.uJ)(l.guild?.description) &&
                                                  (0, i.jsx)(Z.E, {
                                                      className: tO.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, i.jsxs)("div", {
                                                        className: tO.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tO.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tO._o }),
                                                                        (0, i.jsx)(Z.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: ej.intl.format(ej.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    l.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != l.approximate_member_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tO.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tO.jk }),
                                                                        (0, i.jsx)(Z.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: ej.intl.format(ej.t.zRl6XR, {
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
                                  text: c ? ej.intl.string(ej.t.cEnaWx) : ej.intl.string(ej.t.XpeFYr),
                                  onClick: u,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var tV = n(369606),
    tU = n(459746),
    tF = n(691540),
    tY = n(857250),
    tW = n(97483),
    tB = n(922016),
    tH = n(980707),
    tz = n(477782),
    tX = n(663341),
    tK = n(408278),
    tJ = n(34188),
    t$ = n(173936),
    tQ = n(365199),
    tq = n(789645),
    tZ = n(442433),
    t0 = n(50268),
    t1 = n(44724),
    t8 = n(957565),
    t5 = n(695366),
    t4 = n(540185),
    t2 = n(926268),
    t3 = n(53788),
    t6 = n(831453),
    t9 = n(785866),
    t7 = n(555704),
    ne = n(47675),
    nt = n(633075),
    nn = n(289173),
    nl = n(321191),
    ni = n(958805),
    na = n(735321),
    ns = n(96173),
    nr = n(280450),
    nc = n(403362);
async function no(e) {
    let t = e((0, na.BF)());
    await ni.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function nu(e) {
    var t;
    let l,
        { game: s, className: r, trackAction: c } = e,
        o = a.useRef(null),
        u = a.useRef(null),
        m = (0, t0.A)({ id: s.id, label: ej.intl.string(ej.t.SHQGPj) }),
        g =
            ((t = s.id),
            (l = a.useCallback(() => {
                null != t &&
                    (c?.(O.GameProfileTrackActionActions.Feedback),
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
                : (0, i.jsx)(tz.Dr, {
                      id: "game-profile-something-wrong",
                      label: ej.intl.string(ej.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: t5.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([nr.default], () => nr.default.getId()),
                s = a.useMemo(
                    () => [
                        {
                            type: t4.x.FAVORITE_GAMES,
                            addLabel: ej.intl.string(ej.t.fgmitg),
                            removeLabel: ej.intl.string(ej.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: t2.HeartIcon,
                        },
                        {
                            type: t4.x.PLAYED_GAMES,
                            addLabel: ej.intl.string(ej.t["0xIVLR"]),
                            removeLabel: ej.intl.string(ej.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: t3.G,
                        },
                        {
                            type: t4.x.CURRENT_GAMES,
                            addLabel: ej.intl.string(ej.t.G0c4En),
                            removeLabel: ej.intl.string(ej.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: t6.H,
                        },
                        {
                            type: t4.x.WANT_TO_PLAY_GAMES,
                            addLabel: ej.intl.string(ej.t.UuBS4K),
                            removeLabel: ej.intl.string(ej.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: t9._,
                        },
                    ],
                    [],
                ),
                r = (0, d.yK)([nl.A], () => (null == l ? [] : (nl.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, ns.A)(),
                o = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof nt.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(nc.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                u = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await no((i) => {
                                let a = i.filter(nn.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, na.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new nn.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new nn.Yy({ ...a, games: e });
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
                        (0, ne.un)({
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
                            (await no((n) =>
                                e
                                    ? n.some((e) => e instanceof nt.R && e.applicationId === o)
                                        ? n
                                        : [(t = new nt.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof nt.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof nt.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, ne.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, na.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof nt.R && e.applicationId === o);
                h.push(
                    (0, i.jsx)(
                        tz.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? ej.intl.formatToPlainString(ej.t.Ktb1n8, { name: n })
                                : ej.intl.formatToPlainString(ej.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: t7.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of s) {
                    let n = r.filter(nn.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        a = !l && null != n && (0, na.uA)(n);
                    h.push(
                        (0, i.jsx)(
                            tz.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? ej.intl.string(ej.t["86OoiH"]) : void 0,
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
        { closeModal: A } = z(),
        p = (0, d.bG)([F.A], () => F.A.getApplicationIdFromDetectableId(s.id)),
        v = (0, d.bG)([F.A], () => F.A.hasStorefrontForApplicationId(p), [p]),
        E = a.useCallback(() => {
            null != p && (0, t1.G)({ applicationId: p });
        }, [p]),
        N = a.useCallback(() => {
            null != p && (c(O.GameProfileTrackActionActions.GameShop), (0, t1.default)({ applicationId: p }), A());
        }, [p, c, A]),
        I = a.useCallback(() => A(!1), [A]),
        k = a.useCallback(() => {
            c(O.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eT.BVt.GAME_PROFILE(s.id)}`;
            (0, t8.C)(e, () => {
                (0, tF.P0)((0, tY.o)(ej.intl.string(ej.t["+5kSoW"]), tW.Ck.SUCCESS));
            });
        }, [s.id, c]);
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            null != j &&
                (0, i.jsx)(tB.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tH.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, tZ.Z_)(), t());
                            },
                            "aria-label": ej.intl.string(ej.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tz.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: u,
                            children: (0, i.jsx)(h.$, {
                                icon: tX.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: ej.intl.string(ej.t.sidPSo),
                            }),
                        }),
                }),
            v &&
                (0, i.jsx)(x.m, {
                    text: ej.intl.string(ej.t.apFNLU),
                    children: (0, i.jsx)(tK.K, {
                        icon: tJ.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": ej.intl.string(ej.t.apFNLU),
                        onMouseDown: E,
                        onClick: N,
                    }),
                }),
            (0, i.jsx)(x.m, {
                text: ej.intl.string(ej.t.WqhZss),
                children: (0, i.jsx)(tK.K, {
                    icon: t$.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": ej.intl.string(ej.t.WqhZss),
                    onClick: k,
                }),
            }),
            (null != m || null != g) &&
                (0, i.jsx)(tB.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tH.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, tZ.Z_)(), t());
                            },
                            "aria-label": ej.intl.string(ej.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tz.rX, { children: g }), (0, i.jsx)(tz.rX, { children: m })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(x.m, {
                            text: ej.intl.string(ej.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, i.jsx)(tK.K, {
                                    icon: tQ.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": ej.intl.string(ej.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tK.K, {
                icon: tq.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: I,
                "aria-label": ej.intl.string(ej.t.cpT0Cq),
            }),
        ],
    });
}
var nd = n(732369);
function nm(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: nd.y5,
        children: [
            (0, i.jsx)("div", { className: r()(nd.nI, n && nd.hD) }),
            (0, i.jsxs)("div", {
                className: r()(nd.A1, n && nd.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: nd.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: nd.hm,
                        children: [
                            (0, i.jsx)(ee.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(nf, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(nu, { game: t, className: nd.HK, trackAction: l }),
        ],
    });
}
function nx(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(nd.nI, nd.Jn, t && nd.hD) });
}
let nh = a.forwardRef(function (e, t) {
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
    return (0, tn.uJ)(l)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: nd.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, i.jsx)("div", { className: nd.N4 }),
              ],
          });
});
function ng(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(tt.du).join(", ");
    return (0, tn.uJ)(n) ? null : (0, i.jsx)(Z.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function nf(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: nd.Qc,
        children: [
            (0, i.jsx)(tV.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(Z.E, {
                variant: "text-xs/bold",
                color: "none",
                children: ej.intl.formatToPlainString(ej.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function nj(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: r()(n ? nd.n8 : nd.FS, !n && (0, tU.cO)(t) && nd.CD),
        children: (0, i.jsx)(tU.Ay, { game: t, className: nd.xe, size: tU.wu.LARGE }),
    });
}
let nA = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: s } = z(),
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
        className: r()(nd.ap, l && nd.Gh),
        children: [
            s &&
                (0, i.jsx)("div", {
                    className: r()(nd.Tf, (0, tU.cO)(t) && nd.wS),
                    children: (0, i.jsx)(tU.Ay, { game: t, className: nd.w$, size: tU.wu.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: nd.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(nf, { rank: t.l30Rank }),
                    (0, i.jsx)(ee.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(ng, { game: t }),
                ],
            }),
        ],
    });
};
var np = n(141628),
    nv = n(289363),
    nE = n(134131);
function nN() {
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: nE.uW,
        children: [
            (0, i.jsx)(eW, { className: nE.dU, width: "30%" }),
            (0, i.jsxs)(eB, {
                className: nE.nV,
                children: [
                    (0, i.jsx)("div", { className: nE.sB, children: (0, i.jsx)(nv.default, { isLoading: !0 }) }),
                    (0, i.jsxs)("div", {
                        className: nE.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: nE.Yv,
                                children: [(0, i.jsx)(eW, { width: "55%" }), (0, i.jsx)(eW, { width: "85%" })],
                            }),
                            (0, i.jsx)(eH, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nI(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, te.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: s,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: u,
            hasOfficialApplication: m,
            officialApplicationFetchFailed: x,
        } = z(),
        g = (0, d.bG)([B.default], () => B.default.getCurrentUser()),
        f = a.useCallback(() => {
            (t(O.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !m || x || null == g
        ? null
        : null == u || (c && !s)
          ? (0, i.jsx)(nN, {})
          : !c || r
            ? null
            : (0, i.jsxs)("div", {
                  className: nE.uW,
                  children: [
                      (0, i.jsx)(ee.D, {
                          className: nE.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: ej.intl.string(ej.t["VDAhr+"]),
                      }),
                      (0, i.jsxs)("div", {
                          className: nE.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: nE.sB,
                                  children: (0, i.jsx)(nv.default, { application: u }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: nE.hQ,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: nE.FS,
                                          children: [
                                              (0, i.jsx)(ee.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: ej.intl.formatToPlainString(ej.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, i.jsx)(Z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: ej.intl.string(ej.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(h.$, {
                                          variant: "secondary",
                                          icon: np.A,
                                          text: ej.intl.string(ej.t.jynBQ5),
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
var nk = n(635377),
    nS = n.n(nk),
    nb = n(80687),
    nT = n(775602),
    nC = n(534573),
    ny = n(248643),
    nL = n(256905),
    nR = n(85935),
    nP = n(191096),
    nG = n(90721),
    n_ = n(258924);
function nO(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function nM(e, t) {
    return (0, nC.Ec)(e, { size: t, keepAspectRatio: !0, format: t_.QB ? "webp" : null });
}
let nw = new (nS())({ max: 100 }),
    nD = a.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [s, c] = a.useState(null),
            o = null != s && s.url === t ? s.isPortrait : (nw.get(t) ?? !1),
            u = a.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (nw.set(t, n),
                        c((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            d = a.useCallback((e) => u(e.currentTarget), [u]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    ref: u,
                    src: nM(t, 106),
                    className: r()(n_.r4, !o && n_.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, i.jsx)("img", { ref: u, src: nM(t, 900), className: r()(n_.c8, o && n_.D7, l), alt: n, onLoad: d }),
            ],
        });
    }),
    nV = a.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: s, isPlaying: c, onSelect: o, gameName: u, listItemProps: d } = e,
            m = a.useCallback(() => o(l), [o, l]),
            x = d?.tabIndex;
        return (0, i.jsx)(Q.D, {
            ...d,
            className: r()(n_.JS, s && n_.Y4),
            onClick: m,
            children: (0, i.jsxs)("div", {
                className: n_.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: nM("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: n_.xn,
                        alt: ej.intl.formatToPlainString(ej.t.COYYrn, { game: u }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, i.jsx)("div", {
                            className: n_.UZ,
                            children: (0, i.jsx)(nb.D, { playing: s && c, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nU = a.memo(function (e) {
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
            (0, nG.A)({ videoRef: s, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: n_.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: n_.tN,
                        children: (0, i.jsx)(ny.A, {
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
                            renderLinkComponent: nR.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: n_.T9,
                            videoRef: s,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nF(e) {
    let { game: t, trackAction: n } = e,
        [l, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([nT.Ay], () => nT.Ay.useReducedMotion),
        { obscured: g } = (0, nP.I3)(),
        f = el("game_profile_media");
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let j = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eb.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eb.YE)(e.application_id, e.id, e.width, "webp"),
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
            n(E ? O.GameProfileTrackActionActions.ClickTrailer : O.GameProfileTrackActionActions.ClickImage);
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
            (0, nL.R)({
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
              className: n_.kL,
              children: [
                  E
                      ? (0, i.jsx)("div", {
                            className: n_.ND,
                            children: (0, i.jsx)(
                                nU,
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
                            className: n_.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: n_.Jy,
                                            onAnimationEnd: y,
                                            children: (0, i.jsx)(nD, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: n_.QN }),
                                (0, i.jsx)(Q.D, {
                                    className: n_.gv,
                                    onClick: b,
                                    children: (0, i.jsx)("div", {
                                        className: n_.cs,
                                        children: (0, i.jsx)(
                                            nD,
                                            {
                                                url: v.url,
                                                className: n_.Jf,
                                                alt: ej.intl.formatToPlainString(ej.t.COYYrn, { game: t.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, i.jsx)(er.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: A,
                            getItemKey: nO,
                            renderItem: (e, n) => {
                                let { item: l, index: a } = e;
                                return (0, i.jsx)(
                                    nV,
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
                      : (0, i.jsx)(ea.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, i.jsx)(
                                    nV,
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
var nY = n(49381),
    nW = n(661531),
    nB = n(223273);
function nH(e, t, n) {
    if (null == e || null == t || t < 10) return nB.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nB.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nB.vI.VERY_POSITIVE
              : nB.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nB.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nB.vI.MIXED;
    if (e >= 20) return nB.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nB.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nB.vI.VERY_NEGATIVE;
    return nB.vI.OVERWHELMINGLY_NEGATIVE;
}
function nz(e) {
    switch (e) {
        case nB.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nB.vI.OVERWHELMINGLY_POSITIVE:
        case nB.vI.VERY_POSITIVE:
        case nB.vI.POSITIVE:
        case nB.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nB.vI.MIXED:
            return "steam-review-text-mixed";
        case nB.vI.MOSTLY_NEGATIVE:
        case nB.vI.NEGATIVE:
        case nB.vI.VERY_NEGATIVE:
        case nB.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nX =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nK = n(778591);
function nJ(e) {
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
var n$ = n(255417);
function nQ(e) {
    let { url: t, trackAction: n, title: l, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tA.A)(),
        u = nH(s, r, "recent" === c),
        d = nz(u),
        m = a.useCallback(() => {
            (n(O.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, i.jsx)(Q.D, {
        onClick: m,
        className: n$.nf,
        role: "link",
        "aria-label": ej.intl.string(ej.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: n$.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: n$.tN,
                    children: [
                        (0, i.jsx)(nY.N, { size: "sm", color: nW.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(ee.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    x.m,
                    {
                        text:
                            u === nB.vI.NO_USER_REVIEWS
                                ? ej.intl.string(ej.t.CLMt8J)
                                : ej.intl
                                      .format(
                                          "recent" === c
                                              ? ej.t.TzvC0k
                                              : "localized" === c
                                                ? ej.t.EOfrwm
                                                : ej.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: n$.Z0,
                            children: [
                                (0, i.jsx)(Z.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: n$.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nB.vI.NO_USER_REVIEWS:
                                                return ej.intl.string(ej.t.CLMt8J);
                                            case nB.vI.OVERWHELMINGLY_POSITIVE:
                                                return ej.intl.string(ej.t["75sx1S"]);
                                            case nB.vI.VERY_POSITIVE:
                                                return ej.intl.string(ej.t["EkOVg+"]);
                                            case nB.vI.POSITIVE:
                                                return ej.intl.string(ej.t.ZUkFtr);
                                            case nB.vI.MOSTLY_POSITIVE:
                                                return ej.intl.string(ej.t.M7Z09a);
                                            case nB.vI.MIXED:
                                                return ej.intl.string(ej.t.c8yuHR);
                                            case nB.vI.MOSTLY_NEGATIVE:
                                                return ej.intl.string(ej.t.H0MSjG);
                                            case nB.vI.NEGATIVE:
                                                return ej.intl.string(ej.t.vpLrgz);
                                            case nB.vI.VERY_NEGATIVE:
                                                return ej.intl.string(ej.t["5spYuX"]);
                                            case nB.vI.OVERWHELMINGLY_NEGATIVE:
                                                return ej.intl.string(ej.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== nB.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(Z.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: ej.intl
                                            .format(ej.t.sgIoin, { rating_count: r.toLocaleString() })
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
function nq(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tA.A)(),
        x = a.useCallback(() => {
            (l(O.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, i.jsx)(Q.D, {
        onClick: x,
        className: n$.nf,
        role: "link",
        "aria-label": ej.intl.string(ej.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: n$.Ur,
            children: [
                (0, i.jsx)(ee.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: ej.intl.string(ej.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: n$.WA,
                    children: [
                        null != c ? (0, i.jsx)(nZ, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(n0, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(Z.E, {
                                  variant: "text-xs/medium",
                                  color: nz(nB.vI.NO_USER_REVIEWS),
                                  children: ej.intl.string(ej.t["0xYzpO"]),
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
                case nX.MIGHTY:
                    return ej.intl.string(ej.t.aZej2g);
                case nX.STRONG:
                    return ej.intl.string(ej.t.MLxnSg);
                case nX.FAIR:
                    return ej.intl.string(ej.t["3f19KA"]);
                case nX.WEAK:
                    return ej.intl.string(ej.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nX.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nX.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nX.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nX.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        x.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: n$.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function n0(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case nX.MIGHTY:
                    t = "#fc430a";
                    break;
                case nX.STRONG:
                    t = "#9e00b4";
                    break;
                case nX.FAIR:
                    t = "#4aa1ce";
                    break;
                case nX.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        x.m,
        {
            text: ej.intl.string(ej.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: n$.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nJ, { rating: t, strokeColor: l }),
                    (0, i.jsx)(Z.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: n$.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let n1 = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, te.c)("GameProfileReviews"),
        a = (0, nK.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != a,
        c = t.reviews?.steam,
        o = nH(c?.recentRating, c?.recentRatingCount, !0),
        d = r && o !== nB.vI.NO_USER_REVIEWS,
        m =
            null != c &&
            null != c.localizedRating &&
            null != c.localizedRatingCount &&
            null != c.ratingCount &&
            c.localizedRatingCount >= 200 &&
            c.ratingCount >= 2e3,
        x = m ? c?.localizedRating : c?.rating,
        h = m ? c?.localizedRatingCount : c?.ratingCount,
        g = m ? ej.t["aWb+V4"] : ej.t["8e4LiB"],
        f = t.reviews?.opencritic != null && null != s;
    return r || d || f
        ? (0, i.jsxs)("div", {
              className: n$.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: n$.Gf,
                      children: (0, i.jsx)(ee.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: ej.intl.string(ej.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: n$.kL,
                      children: [
                          d && null != a
                              ? (0, i.jsx)("div", {
                                    className: n$.WH,
                                    children: (0, i.jsx)(nQ, {
                                        url: a,
                                        trackAction: n,
                                        title: ej.intl.string(ej.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != a
                              ? (0, i.jsx)("div", {
                                    className: n$.WH,
                                    children: (0, i.jsx)(nQ, {
                                        url: a,
                                        trackAction: n,
                                        title: ej.intl.string(g),
                                        rating: x,
                                        ratingCount: h,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          f && null != s
                              ? (0, i.jsx)("div", {
                                    className: n$.WH,
                                    children: (0, i.jsx)(nq, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var n8 = n(839534),
    n5 = n(722258),
    n4 = n(258245),
    n2 = n(561769),
    n3 = n(484469),
    n6 = n(57020),
    n9 = n(682301);
let n7 = [];
var le = n(758836),
    lt = n(747828);
let ln = [0, 1, 2, 3, 4];
function ll(e) {
    return e.skuId;
}
let li = a.createContext({ trackAction: () => {} });
function la(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: s } = t,
        r = a.useContext(n2.v3),
        { trackAction: c } = a.useContext(li),
        o = a.useRef(null),
        u = a.useCallback(
            (e) => {
                (c(O.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, n5.B)({
                        skuId: s,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, n6.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, s, t],
        ),
        { flattenProductVariants: d, ...m } = r;
    return (0, i.jsx)(n2.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...m, productOverride: t },
        children: (0, i.jsx)(n4.A, {
            skuId: s,
            aspectRatio: n,
            cardClassName: lt.N,
            onClickCard: u,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function ls() {
    return (0, i.jsx)(n3.A, {});
}
function lr(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = z(),
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
                    } = (0, d.cf)([M.A], () => ({
                        hasFetched: null != e && M.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && M.A.isShopCollectionFetching(e),
                        skuIds: null != e ? M.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, a.useEffect)(() => {
                            null == e || t || M.A.isShopCollectionFetching(e) || ey(e);
                        }, [e, t]),
                        { skuIds: l ?? n7, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, n9.hv)(t, { flattenVariants: !0 }),
                s = (0, a.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: s, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = a.useCallback(() => {
            (n(O.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, n8.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: le.G2.CATALOG,
                }));
        }, [n, l]),
        o = a.useMemo(() => ({ trackAction: n }), [n]),
        u = el("game_profile_shop_carousel");
    return r
        ? (0, i.jsx)(eX, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, i.jsx)(e$, { children: ln.map((e) => (0, i.jsx)(ls, {}, e)) }),
          })
        : 0 === s.length
          ? null
          : (0, i.jsx)(li.Provider, {
                value: o,
                children: (0, i.jsx)(eK, {
                    title: ej.intl.string(ej.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: u
                        ? (0, i.jsx)(er.A, {
                              gap: "md",
                              items: s,
                              getItemKey: ll,
                              renderItem: (e, t) => (0, i.jsx)(la, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, i.jsx)(ea.A, {
                              gap: "md",
                              children: s.map((e) => (0, i.jsx)(la, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var lc = n(921138),
    lo = n(311043);
let lu = [],
    ld = [];
var lm = n(607346);
let lx = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function lh(e) {
    return e.id;
}
function lg(e) {
    let { className: t } = e;
    return (0, i.jsx)(eB, { className: t, children: (0, i.jsx)(eW, { className: lm.Lg }) });
}
function lf(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: s } = z(),
        r = t.getCoverURL(256),
        [c, o] = a.useState(null),
        u = null == r || c === r,
        { shouldOpenGameProfile: d, gameId: m } = (0, lc.Ay)({
            gameId: t.id,
            source: O.GameProfileSources.SimilarGames,
        }),
        h = a.useCallback(() => {
            (n(O.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                d && null != m && s(m, O.GameProfileSources.SimilarGames));
        }, [t.id, m, n, d, s]),
        g = a.useCallback(() => o(r), [r]);
    return (0, i.jsx)(x.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, i.jsxs)(Q.D, {
            ...l,
            className: lm.Nr,
            onClick: h,
            "aria-label": ej.intl.formatToPlainString(ej.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, i.jsx)(tU.Ay, {
                    game: t,
                    className: lm.xe,
                    size: tU.wu.SMALL,
                    imageSize: 256,
                    onLoad: g,
                    onError: g,
                }),
                !u && (0, i.jsx)(lg, { className: lm.uz }),
            ],
        }),
    });
}
function lj(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: a } = (function (e) {
            let t = !eC.has(e),
                { data: n, isLoading: l, error: i } = eR(e, t),
                a = t && null != n ? n : lu;
            (0, L.x)(a);
            let s = (0, d.bG)(
                    [lo.A],
                    () => a.some((e) => null == lo.A.getGame(e) && !lo.A.hasNoData(e) && !lo.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, d.yK)(
                    [lo.A, B.default],
                    () => {
                        let e = B.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => lo.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, lc.T_)(t) && !(0, V.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: ld };
        })(t),
        s = el("game_profile_similar_games");
    return eC.has(t)
        ? null
        : l
          ? (0, i.jsx)(eX, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, i.jsx)("div", {
                    className: lm.XG,
                    style: lx,
                    children: (0, i.jsx)(e$, {
                        children: K()
                            .range(0, 8)
                            .map((e) => (0, i.jsx)(lg, { className: lm.aZ }, e)),
                    }),
                }),
            })
          : 0 === a.length
            ? null
            : (0, i.jsx)(eK, {
                  title: ej.intl.string(ej.t["6rLyQB"]),
                  children: (0, i.jsx)("div", {
                      className: lm.XG,
                      style: lx,
                      children: s
                          ? (0, i.jsx)(er.A, {
                                gap: "md",
                                items: a,
                                getItemKey: lh,
                                itemClassName: lm.cW,
                                renderItem: (e, t) =>
                                    (0, i.jsx)(lf, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, i.jsx)(ea.A, {
                                gap: "md",
                                children: a.map((e) => (0, i.jsx)(lf, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
var lA = n(871123),
    lp = n(439303),
    lv = n(317560),
    lE = n(467884),
    lN = n(761812);
function lI(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: lN.B, children: t });
}
function lk(e) {
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
        : (0, i.jsx)(ea.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      lI,
                      {
                          children: (0, i.jsx)(lE.Ay, {
                              positionInSection: t,
                              skuId: e,
                              variant: lE.s6.SMALL,
                              analyticsLocations: n,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
let lS = [0, 1, 2, 3],
    lb = { placement: lp.Ye.GAME_PROFILE };
function lT() {
    return (0, i.jsx)(eX, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, i.jsx)(e$, { children: lS.map((e) => (0, i.jsx)(lI, { children: (0, i.jsx)(lE.yf, {}) }, e)) }),
    });
}
function lC(e) {
    let { trackAction: t } = e,
        {
            socialLayerStorefrontRecommendationsData: n,
            socialLayerStorefrontRecommendationsLoading: l,
            closeModal: s,
        } = z(),
        { analyticsLocations: r } = (0, I.Ay)([N.A.GAME_PROFILE]),
        c = a.useCallback(() => {
            n?.application != null &&
                (t(O.GameProfileTrackActionActions.GameShop),
                s(),
                (0, t1.default)({ applicationId: n.application.id }));
        }, [n, t, s]),
        o = a.useCallback(
            (e, l) => {
                let i = n?.guildId;
                null != i &&
                    (t(O.GameProfileTrackActionActions.GameShopItem),
                    (0, lv.R)({
                        skuId: e,
                        applicationId: l,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lA.rG)(e, t, l, i) && s();
                        },
                    }));
            },
            [t, s, r, n],
        );
    if (l) return (0, i.jsx)(lT, {});
    if (null == n) return null;
    let { skuIds: u } = n;
    return (0, i.jsx)(eK, {
        title: ej.intl.string(ej.t.WDdlUb),
        onClickViewAll: c,
        children: (0, i.jsx)(lp.E9, {
            newValue: lb,
            children: (0, i.jsx)(lk, { skuIds: u, analyticsLocations: r, onCardClick: o }),
        }),
    });
}
n(667532);
var ly = n(853022);
let lL = new Set(["1402418703554842694", "356877880938070016"]),
    lR = [tl.V.EPICGAMES, tl.V.STEAM, tl.V.ROBLOX, tl.V.BATTLENET, tl.V.RIOT, tl.V.MINECRAFT];
var lP = n(349361),
    lG = n(924895),
    l_ = n(422688),
    lO = n(505200),
    lM = n(695250);
let lw = function (e) {
    switch (e.category) {
        case tl.V.STEAM:
            return {
                icon: nY.N,
                text: ej.intl.string(ej.t.FsANs4),
                ariaLabel: ej.intl.string(ej.t["P+ePTG"]),
                action: O.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case tl.V.EPICGAMES:
            return {
                icon: lP.r,
                text: ej.intl.string(ej.t.ZbBMHa),
                ariaLabel: ej.intl.string(ej.t.BwX0UW),
                action: O.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case tl.V.ROBLOX:
            return {
                icon: lG.H,
                text: ej.intl.string(ej.t["pJ+P+h"]),
                ariaLabel: ej.intl.string(ej.t.tYxpdf),
                action: O.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case tl.V.BATTLENET:
            return {
                icon: l_.a,
                text: ej.intl.string(ej.t["A7grp+"]),
                ariaLabel: ej.intl.string(ej.t.x9at20),
                action: O.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case tl.V.RIOT:
            return {
                icon: lO.A,
                text: ej.intl.string(ej.t.h6MapL),
                ariaLabel: ej.intl.string(ej.t["528nvc"]),
                action: O.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case tl.V.MINECRAFT:
            return {
                icon: lM.m,
                text: ej.intl.string(ej.t["HZbmO+"]),
                ariaLabel: ej.intl.string(ej.t.WWTqYn),
                action: O.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tI.Y,
                text: ej.intl.string(ej.t["QpN/Iz"]),
                ariaLabel: ej.intl.string(ej.t["8JZmmF"]),
                action: O.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function lD(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var lV = n(48460);
function lU(e) {
    let t,
        n,
        l,
        i,
        s,
        r =
            ((t = (0, nK.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eT.d3x.XBOX_GAME_PASS && !(0, tn.uJ)(e.id));
                return t?.id == null ? null : (0, ly.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== tl.V.EPICGAMES || !!lL.has(l)) &&
                            (e.category !== tl.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            lR.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === tl.V.STEAM) ||
                    e.push({ category: tl.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === tl.V.STEAM ? -1 : +(t.category === tl.V.STEAM)));
                return (null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a);
            }, [t, i, l, s, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function lF(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tA.A)();
    return (0, i.jsx)(lD, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lY = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: s, storeWebsites: r } = lU(t),
        c = a.useMemo(() => r.map(lw).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lF, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: lV.G,
            children: [(0, i.jsx)(lF, { data: c[0], trackAction: l }), (0, i.jsx)(lF, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(lD, {
        text: ej.intl.string(ej.t["/hMurx"]),
        "aria-label": ej.intl.string(ej.t.nK60cc),
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
        ? (0, i.jsxs)("div", { className: lV.G, children: [(0, i.jsx)(lF, { data: c[0], trackAction: l }), o] })
        : o;
};
var lW = n(123292);
function lB(e) {
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
                    ? (t(O.GameProfileTrackActionActions.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(O.GameProfileTrackActionActions.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: u } = z(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = s ? ej.intl.string(ej.t["6MwJo/"]) : ej.intl.string(ej.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tb.fi, tb.mX),
        children: [
            (0, i.jsx)(Z.E, {
                ref: l,
                className: tb.g5,
                lineClamp: s ? void 0 : d,
                variant: "text-md/medium",
                children: t.description,
            }),
            c && (0, i.jsx)(lW.Q, { onClick: o, text: m }),
        ],
    });
}
let lH = a.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, i.jsxs)("div", {
            className: tb.oC,
            children: [
                (0, i.jsxs)("div", {
                    className: tb.lM,
                    children: [
                        (0, i.jsx)(nF, { game: t, trackAction: n }),
                        (0, i.jsx)(lB, { game: t, trackAction: n }),
                    ],
                }),
                (0, i.jsx)(e7, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(lC, { trackAction: n }),
                (0, i.jsx)(lr, { game: t, trackAction: n }),
                (0, i.jsx)(lj, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    lz = a.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
        return (0, i.jsxs)("div", {
            className: tb.V0,
            children: [
                (0, i.jsx)(nF, { game: t, trackAction: n }),
                (0, i.jsxs)("div", {
                    className: tb.gr,
                    children: [
                        (0, i.jsx)(nj, { game: t, isTwoColumn: !1 }),
                        (0, i.jsxs)("div", {
                            className: tb.E1,
                            children: [
                                (0, i.jsx)(lY, { game: t, trackAction: n }),
                                (0, i.jsx)(lB, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(nI, { analyticsLocations: l, trackAction: n }),
                (0, i.jsx)(tD, { trackAction: n }),
                (0, i.jsx)(e7, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(lC, { trackAction: n }),
                (0, i.jsx)(lr, { game: t, trackAction: n }),
                (0, i.jsx)(lj, { gameId: t.id, trackAction: n }),
                a && (0, i.jsx)(n1, { game: t, trackAction: n }),
                (0, i.jsx)(tP, { game: t, trackAction: n }),
            ],
        });
    });
function lX(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: s } = z();
    (0, k.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = a.useCallback(() => {
        (l(O.GameProfileTrackActionActions.CloudPlay), s(), t());
    }, [s, t, l]);
    return (0, i.jsx)(x.m, {
        text: ej.intl.string(ej.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: ej.intl.string(ej.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function lK(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: a } = e,
        s = (0, E.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: tb.NC,
              children: (0, i.jsx)(lX, { onCloudPlayClick: s, analyticsLocations: l, trackAction: a }),
          });
}
function lJ(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = (0, v.A)(t.linkedApplications)?.id,
        [s] = (0, R.L_)(t.getOfficialApplicationId()),
        [c] = (0, R.L_)(t.id),
        { showsStoreLinks: o } = lU(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(tb.Pn, tb.fi, tb.iH, o ? tb.sV : tb.gF),
        children: [
            null == a || s || c
                ? null
                : (0, i.jsx)(lK, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: l, trackAction: n }),
            (0, i.jsxs)("div", {
                className: tb.V0,
                children: [
                    (0, i.jsx)(lY, { game: t, trackAction: n }),
                    (0, i.jsx)(nI, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tD, { trackAction: n }),
                    d && (0, i.jsx)(n1, { game: t, trackAction: n }),
                    (0, i.jsx)(tP, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function l$(e) {
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
        { clientThemesClassName: z } = (0, T.Ay)(),
        X = (0, d.bG)([_.default], () => _.default.locale),
        K = a.useMemo(() => (0, O.generateViewId)(), []),
        { analyticsLocations: J } = (0, I.Ay)(N.A.GAME_PROFILE),
        $ = (0, w.s)(t),
        { data: Q } = (0, L.I)(t),
        q = (0, D.rG)(Q),
        Z = Q?.getOfficialApplicationId(),
        ee = null != Z,
        et = (0, d.bG)([b.A], () => null != Z && b.A.didFetchingApplicationFail(Z), [Z]),
        en = Q?.name ?? "",
        el = (0, V.A)(Q),
        ei = a.useRef(null);
    a.useEffect(() => {
        ei.current = k;
    }, [k]);
    let {
            hasAlreadyLinked: ea,
            canStartAuthorization: es,
            fetched: er,
            startAuthorization: ec,
            connectionApp: eo,
        } = (0, S.RD)(Q),
        { invite: eu, isMember: ed, isResolving: em } = (0, D.Ay)(Q, R),
        { socialLayerStorefrontRecommendationsData: ex, socialLayerStorefrontRecommendationsLoading: eh } = (function (
            e,
        ) {
            let t = B.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, d.cf)(
                    [F.A],
                    () => ({
                        storefrontApplicationId: null != e ? F.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === F.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                s = (0, U.h)(l),
                r = (0, d.bG)([b.A], () => null != l && b.A.didFetchingApplicationFail(l), [l]),
                c = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: u } = (0, W.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: Y.B5.USER_PROFILE,
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
        eg = a.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, O.getGuildIdAndVerifiedFromInvite)(ei.current);
                (0, O.trackGameProfileAction)({
                    gameName: en,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: K,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [en, t, K, n],
        );
    ((0, p.Ay)(() => {
        ((0, O.trackGameProfileOpen)({
            source: n,
            viewId: K,
            gameId: t,
            gameName: en,
            authorId: l,
            profileType: O.GameProfileTypes.FullProfile,
        }),
            (0, C.He)());
    }),
        (0, p.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, O.getGuildIdAndVerifiedFromInvite)(ei.current),
                l = Date.now(),
                i = $.map((e) => {
                    let t = (0, y.JM)(e) ? (0, y.W6)(e, l) : (0, y.aJ)(e, X);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, O.trackGameProfileClose)({
                viewId: K,
                gameId: t,
                gameName: en,
                playedFriendIds: $.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: M.A.getSimilarGames(t) ?? [],
                guildId: n,
                isVerified: e,
            });
        }));
    let ef = a.useCallback((e) => {
            E(e.contentRect.width >= 800);
        }, []),
        ej = (0, o.w)(ef, [], { fireOnMount: !0 }),
        eA = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, f.closeAllModals)(), (0, G.closeUserProfileModal)()) : c();
            },
            [c],
        ),
        ep = a.useCallback(() => eA(!1), [eA]),
        ev = a.useRef(null),
        eE = a.useCallback(() => ev.current?.getScrollerNode()?.scrollTop ?? 0, []),
        eN = a.useMemo(
            () => ({
                isTwoColumn: v,
                canStartAuthorization: es,
                hasAlreadyLinked: ea,
                fetchedAuthorization: er,
                startAuthorization: ec,
                connectionApp: eo,
                invite: eu,
                hasDiscordWebsite: q,
                hasOfficialApplication: ee,
                officialApplicationFetchFailed: et,
                isCommunityInviteResolving: em,
                isMember: ed,
                socialLayerStorefrontRecommendationsData: ex,
                socialLayerStorefrontRecommendationsLoading: eh,
                closeModal: eA,
                navigateToGame: g,
                getScrollOffset: eE,
            }),
            [v, es, ea, er, ec, eo, eu, q, ee, et, em, ed, ex, eh, eA, g, eE],
        ),
        [eI, ek] = a.useState(!1),
        [eS, eb] = a.useState(150),
        eT = a.useRef(null);
    a.useEffect(() => {
        null != h && h > 0 && ev.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eC = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != eT.current) {
                let e = Math.max(0, 1 - t / 150);
                eT.current.style.opacity = String(e);
            }
            ek(t >= eS);
        },
        [eS],
    );
    return null == Q
        ? null
        : (0, i.jsx)(I.f5, {
              value: J,
              children: (0, i.jsx)(m.N, {
                  transitionState: s,
                  onClose: c,
                  children: (0, i.jsx)(H.Provider, {
                      value: eN,
                      children: (0, i.jsx)("div", {
                          className: r()(z, tb.kL),
                          ref: ej,
                          children: (0, i.jsxs)(P.A, {
                              obscured: el,
                              onClose: ep,
                              children: [
                                  (0, i.jsx)(nh, { game: Q, ref: eT }),
                                  (0, i.jsx)(nm, { game: Q, show: eI, trackAction: eg }),
                                  (0, i.jsx)(nx, { show: eI }),
                                  (0, i.jsxs)(j.Ch, {
                                      ref: ev,
                                      className: tb.XG,
                                      onScroll: eC,
                                      children: [
                                          (0, i.jsx)(nA, {
                                              game: Q,
                                              onSetCompactBarScrollThreshold: eb,
                                              showCompactBar: eI,
                                          }),
                                          (0, i.jsx)(A.F, {
                                              children: v
                                                  ? (0, i.jsxs)("div", {
                                                        className: tb.jC,
                                                        children: [
                                                            (0, i.jsx)(lH, { game: Q, trackAction: eg }),
                                                            (0, i.jsx)(lJ, {
                                                                game: Q,
                                                                appContext: u,
                                                                source: n,
                                                                trackExternalAction: x,
                                                                trackAction: eg,
                                                                analyticsLocations: J,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: tb.b9,
                                                        children: (0, i.jsx)(lz, {
                                                            game: Q,
                                                            trackAction: eg,
                                                            analyticsLocations: J,
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
let lQ = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: s, ...r } = e,
        [c, o] = a.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: s }),
        u = c.gameId,
        d = a.useCallback(
            (e, t) => {
                e !== u && ((0, D.UT)(e), o({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, i.jsx)(
        l$,
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
