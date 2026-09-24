n.d(t, { default: () => lK });
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
    I = n(793574),
    N = n(688810),
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
    q = n(834730),
    Z = n(297264),
    ee = n(460905),
    et = n(776231),
    en = n(449543),
    el = n(46054),
    ei = n(58703);
n(321073);
var ea = n(155718),
    es = n(387408),
    er = n(731068),
    ec = n(59318),
    eo = n(320095),
    eu = n(708676),
    ed = n(383233),
    em = n(998218),
    ex = n(375708);
let eh = /^#{1,3}\s+(.+)$/,
    eg = /^https?:\/\/\S+$/;
var ef = n(60465),
    ej = n(158390),
    eA = n(636537),
    ep = n(228366),
    ev = n(103348),
    eE = n(927813),
    eI = n(371794),
    eN = n(652215);
let ek = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function eS(e) {
    ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eI.aP)({
                    url: eN.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: _.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(ev.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (ep.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eb(e) {
    let t = ((await eA.Bo.get({ url: eN.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !ek.has(t),
    );
    ep.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eT = (0, d.UT)(M.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => M.A.getSimilarGames(e) ?? null,
    load: (e) => eb(e),
    retryConfig: { backoff: () => new ej.A(5 * eE.A.Millis.SECOND, 5 * eE.A.Millis.MINUTE) },
    failureStaleAfter: eE.A.Seconds.MINUTE,
});
async function eC(e, t) {
    ep.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eA.Bo.get({ url: eN.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        ep.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, es.A)((0, eo.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, ed._c)(e))
                            return e.components
                                .filter((e) => e.type === ea.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || eg.test(t.trim())
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
                        if ((0, ed._c)(e)) {
                            let t = e.components.find((e) => e.type === ea.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, er.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, ec.tT)(e.content_type));
                        if (null != t) return (0, er.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, ec.XB)(e.content_type));
                        if (null != n) return (0, er.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, er.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, er.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, er.oU)(
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(eh)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, ed._c)(l)
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
        ep.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var ey = n(284009),
    eL = n.n(ey),
    eR = n(376728),
    eP = n(976860),
    eG = n(71393),
    e_ = n(449054);
async function eO(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eL()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eG.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eN.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, e_.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eN.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eR.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eP.pX)(eN.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eM = n(320448),
    ew = n(493285);
let eD = { sm: ew.nz, md: ew.a };
function eV(e) {
    let { className: t, width: n } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(ew.qf, t), style: { width: n } });
}
function eU(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        a = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: l, style: a, children: n });
}
function eF(e) {
    let { className: t, size: n = "md" } = e;
    return (0, i.jsx)(eV, { className: r()(ew.x6, eD[n], t) });
}
var eY = n(406510);
function eW(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, i.jsxs)("div", {
        className: eY.kL,
        "aria-busy": !0,
        children: [
            (0, i.jsxs)("div", {
                className: eY.wR,
                children: [(0, i.jsx)(eV, { className: eY.Iz, width: n }), l && (0, i.jsx)(eF, { size: "sm" })],
            }),
            t,
        ],
    });
}
function eB(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: eY.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eY.wR,
                children: [
                    (0, i.jsx)(Z.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eM._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: ex.intl.string(ex.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eH = n(949959);
function ez(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(eH.n, { [eH.C]: 16 === n }), children: t });
}
var eX = n(235240),
    eK = n(165648);
function eJ(e, t) {
    return el.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e$() {
    return (0, i.jsxs)(eU, {
        className: eX.s7,
        children: [
            (0, i.jsx)(eV, { className: eX.o$ }),
            (0, i.jsxs)("div", {
                className: eX.UF,
                children: [(0, i.jsx)(eV, { className: eX.iX }), (0, i.jsx)(eV, { className: eX.jt })],
            }),
        ],
    });
}
function eQ(e, t) {
    var n;
    let l,
        i = (0, et.kr)(364 * (0, et.mZ)());
    return (
        (n = Math.round(i / t)),
        (null == (l = em.A.toURLSafe(e))
            ? null
            : (l.searchParams.append("format", "webp"),
              null != i && l.searchParams.append("width", i.toString()),
              null != n && l.searchParams.append("height", n.toString()),
              l.toString())) ?? e
    );
}
function eq(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [s, r] = a.useState(!1),
        c = a.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, i.jsx)($.y, {
              readyState: s ? eN.Rv1.READY : eN.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, i.jsx)("img", {
                  src: n,
                  className: eX.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function eZ(e) {
    let { variant: t, message: n, channelId: l, onCardClick: s } = e,
        c = "main" === t,
        o = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, J.vq)(e.target, HTMLAnchorElement) ||
                        ((0, J.vq)(e.target, HTMLSpanElement) && (0, J.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(n.id);
            },
            [s, n.id],
        ),
        u = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        d = n.media?.proxyUrl ?? n.media?.url,
        m = null != d ? eQ(d, u) : void 0,
        { embedSource: x } = n;
    return null == x
        ? null
        : (0, i.jsx)(Q.D, {
              className: c ? eX.jI : eX.IU,
              onClick: o,
              children: (0, i.jsxs)("div", {
                  className: c ? eX.GT : eX.s4,
                  children: [
                      null != x.url &&
                          (0, i.jsx)(q.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eX.Ow,
                              children: x.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eX._d,
                          style: null != x.color ? { borderInlineStartColor: x.color } : void 0,
                          children: [
                              null != x.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eX.Tu,
                                      children: [
                                          null != x.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: x.authorIconUrl,
                                                  className: eX.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(q.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: x.authorName,
                                          }),
                                      ],
                                  }),
                              null != n.media &&
                                  null != m &&
                                  (0, i.jsx)("div", {
                                      className: eX.ax,
                                      children: (0, i.jsx)(eq, { message: n, src: m, aspectRatio: u }),
                                  }),
                              null != n.title &&
                                  (0, i.jsx)(Z.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: c ? eX.KX : eX._N,
                                      children: eJ(n.title, l),
                                  }),
                              n.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eX.h_, eK.PT),
                                      children: [eJ(n.body, l), (0, i.jsx)("div", { className: eX.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eX.ov,
                                  children: [
                                      null != x.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: x.providerIconUrl,
                                              className: eX.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(q.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != x.providerName ? `${x.providerName} \xb7 ` : "",
                                              (0, ei.i$)(new Date(n.timestamp), "LL"),
                                          ],
                                      }),
                                      n.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eX.a5,
                                              children: [
                                                  (0, i.jsx)(ee.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(q.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(ex.intl.currentLocale).format(
                                                          n.reactionCount,
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
let e0 = a.memo(function (e) {
    let { message: t, channelId: n, isMain: l } = e;
    return (0, i.jsxs)("div", {
        className: l ? eX.GT : eX.s4,
        children: [
            null != t.title &&
                (0, i.jsx)(Z.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l ? eX.KX : eX._N,
                    children: eJ(t.title, n),
                }),
            t.body.length > 0 &&
                (0, i.jsxs)("div", {
                    className: r()(eX.h_, eK.PT),
                    children: [eJ(t.body, n), (0, i.jsx)("div", { className: eX.fm })],
                }),
            (0, i.jsxs)("div", {
                className: eX.ov,
                children: [
                    (0, i.jsx)(q.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, ei.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, i.jsxs)("div", {
                            className: eX.a5,
                            children: [
                                (0, i.jsx)(ee.n, { size: "xs", color: "currentColor" }),
                                (0, i.jsx)(q.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: new Intl.NumberFormat(ex.intl.currentLocale).format(t.reactionCount),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
function e1(e) {
    let { variant: t, message: n, channelId: l, onCardClick: s } = e,
        c = "main" === t,
        o = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, J.vq)(e.target, HTMLAnchorElement) ||
                        ((0, J.vq)(e.target, HTMLSpanElement) && (0, J.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(n.id);
            },
            [s, n.id],
        ),
        u = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        d = n.media?.proxyUrl ?? n.media?.url,
        m = null != d ? eQ(d, u) : void 0,
        x = null != n.media && null != m;
    return (0, i.jsxs)(Q.D, {
        className: r()({ [eX.cG]: c && x, [eX.jI]: c && !x, [eX.IU]: !c }),
        onClick: o,
        children: [
            null != n.media &&
                null != m &&
                (0, i.jsx)("div", {
                    className: c ? eX._v : eX.eZ,
                    children: (0, i.jsx)(eq, { message: n, src: m, aspectRatio: u }),
                }),
            (0, i.jsx)(e0, { message: n, channelId: l, isMain: c }),
        ],
    });
}
function e8(e) {
    let { variant: t, message: n, onCardClick: l } = e,
        s = "main" === t,
        { poll: r } = n,
        c = a.useCallback(() => l(n.id), [l, n.id]);
    if (null == r) return null;
    let o = r.answers.slice(0, 3),
        u = r.answers.length - o.length;
    return (0, i.jsx)(Q.D, {
        className: s ? eX.jI : eX.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: s ? eX.GT : eX.s4,
            children: [
                (0, i.jsx)(Z.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eX.MH,
                    children: r.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eX.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eX.Nf,
                                    children: (0, i.jsx)(q.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eX.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        u > 0 &&
                            (0, i.jsx)(q.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: eX.PF,
                                children: ex.intl.format(ex.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eX.ov,
                    children: (0, i.jsx)(q.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: ex.intl.format(ex.t.t0FTsH, {
                            createdAt: new Date(n.timestamp),
                            expiryLabel: (0, eu.J)(r.expiry) ?? ex.intl.string(ex.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function e4(e) {
    return null != e.message.poll
        ? (0, i.jsx)(e8, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eZ, { ...e })
          : (0, i.jsx)(e1, { ...e });
}
let e3 = a.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, N.Ay)(),
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
                    null == e || n || M.A.isAnnouncementsFetching(e) || eC(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = a.useCallback(() => {
            let e = s?.guild?.id ?? m;
            null != e &&
                null != x &&
                (n(O.GameProfileTrackActionActions.Announcements),
                ef.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                c(),
                eO({ invite: s, guildId: e, channelId: x, analyticsLocationStack: l }));
        }, [n, c, o, s, m, x, l, t]),
        j = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? m;
                null != i &&
                    null != x &&
                    (n(O.GameProfileTrackActionActions.AnnouncementsItem),
                    ef.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                    c(),
                    eO({ invite: s, guildId: i, channelId: x, messageId: e, analyticsLocationStack: l }));
            },
            [n, c, o, s, m, x, l, t],
        ),
        A = null != x && u.length > 0;
    return (!g || h) && r
        ? (0, i.jsx)(eW, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, i.jsx)(ez, {
                  gap: 16,
                  children: K()
                      .range(3)
                      .map((e) => (0, i.jsx)(e$, {}, e)),
              }),
          })
        : A
          ? (0, i.jsx)(eB, {
                title: ex.intl.string(ex.t.B0BV3Y),
                onClickViewAll: f,
                children: (0, i.jsx)(en.A, {
                    gap: 16,
                    children: u.map((e) =>
                        (0, i.jsx)(e4, { variant: "small", message: e, channelId: x, onCardClick: j }, e.id),
                    ),
                }),
            })
          : null;
});
var e5 = n(37537),
    e2 = n(541830),
    e6 = n(240248),
    e7 = n(505779),
    e9 = n(808380);
let te = [e9.Y.DESKTOP, e9.Y.XBOX, e9.Y.PLAYSTATION, e9.Y.NINTENDO];
var tt = n(28863),
    tn = n(975807),
    tl = n(194362);
function ti(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(O.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, tl.a)(eN.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tn.A)(e);
        }, [n]),
        s = a.useCallback((e) => (0, i.jsx)(tt.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === ea.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(q.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ex.intl.format(ex.t.KAjfKl, { claimLink: s }),
          });
}
var ta = n(998445),
    ts = n(274997),
    tr = n(80500),
    tc = n(319745),
    to = n(488225),
    tu = n(967492),
    td = n(72265),
    tm = n(454346),
    tx = n(37948),
    th = n(750013);
let tg = { size: "xs", colorClass: th.wP };
function tf(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tx.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case e7.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(ta.GlobeEarthIcon, { ...t }),
                        action: O.GameProfileTrackActionActions.WebsiteLink,
                        title: ex.intl.string(ex.t.fOUKvg),
                    };
                case e7.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(ts.p, { ...t }),
                        action: O.GameProfileTrackActionActions.XLink,
                        title: ex.intl.string(ex.t.INic4y),
                    };
                case e7.V.YOUTUBE:
                    return {
                        action: O.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(tr.C, { ...t }),
                        title: ex.intl.string(ex.t.lNmxbE),
                    };
                case e7.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(tc.Z, { ...t }),
                        action: O.GameProfileTrackActionActions.FacebookLink,
                        title: ex.intl.string(ex.t.FjyREK),
                    };
                case e7.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(to.L, { ...t }),
                        action: O.GameProfileTrackActionActions.InstagramLink,
                        title: ex.intl.string(ex.t["cgR+IK"]),
                    };
                case e7.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(tu.a, { ...t }),
                        action: O.GameProfileTrackActionActions.BlueskyLink,
                        title: ex.intl.string(ex.t["D/PHq5"]),
                    };
                case e7.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(td.T, { ...t }),
                        action: O.GameProfileTrackActionActions.RedditLink,
                        title: ex.intl.string(ex.t["Hgb+fc"]),
                    };
                case e7.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(tm.a, { ...t }),
                        action: O.GameProfileTrackActionActions.TwitchLink,
                        title: ex.intl.string(ex.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tg),
        o = a.useCallback(() => {
            (n(s), l(t.url));
        }, [s, l, n, t.url]);
    return (0, i.jsx)(x.m, {
        text: c,
        children: (0, i.jsx)(Q.D, { onClick: o, className: th.yO, title: c, children: r }),
    });
}
var tj = n(31300),
    tA = n(802516),
    tp = n(22363),
    tv = n(418524),
    tE = n(672572);
function tI(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case e9.Y.DESKTOP:
            return (0, i.jsx)(tj.k, { size: "xs", ...n });
        case e9.Y.XBOX:
            return (0, i.jsx)(tA.Y, { size: "xs", ...n });
        case e9.Y.PLAYSTATION:
            return (0, i.jsx)(tp.X, { size: "xs", ...n });
        case e9.Y.NINTENDO:
            return (0, i.jsx)(tv.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tN(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        x.m,
        {
            text: (function (e) {
                switch (e) {
                    case e9.Y.DESKTOP:
                        return ex.intl.string(ex.t.KT6uCJ);
                    case e9.Y.XBOX:
                        return ex.intl.string(ex.t.DDWUJp);
                    case e9.Y.PLAYSTATION:
                        return ex.intl.string(ex.t.fzMz2s);
                    case e9.Y.NINTENDO:
                        return ex.intl.string(ex.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(tI, { platform: t }),
        },
        t,
    );
}
var tk = n(424994),
    tS = n(422384);
function tb() {
    return (0, i.jsx)(q.E, { variant: "text-sm/normal", color: "text-subtle", children: ex.intl.string(ex.t.GruYxV) });
}
let tT = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, e5.c)("GameProfileGameDetails"),
        s = a.useMemo(() => t.genres.map(e2.du).join(", "), [t]),
        r = t.getCompanyByRole(ea.wk.PUBLISHER),
        c = t.getCompanyByRole(ea.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        u = c.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        m = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(e9.Y.DESKTOP) && (e.has(e9.Y.MACOS) || e.has(e9.Y.LINUX)) && n.push(e9.Y.DESKTOP),
                n.filter((e) => te.includes(e)).sort((e, t) => te.indexOf(e) - te.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return e7.p.includes(t);
            })
            .sort((e, t) => e7.p.indexOf(e.category) - e7.p.indexOf(t.category)),
        h = !(0, e6.uJ)(s),
        g = !(0, e6.uJ)(o),
        f = !(0, e6.uJ)(u),
        j = !(0, e6.uJ)(d),
        A = m.length > 0,
        p = x.length > 0 && !x.every((e) => (0, e6.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tS.uW,
        children: [
            (0, i.jsx)("div", {
                className: tS.Gf,
                children: (0, i.jsx)(Z.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: ex.intl.string(ex.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tS.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tS.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? ex.intl.string(ex.t.pDgwYB) : ex.intl.string(ex.t.mjFKqn),
                            }),
                            h
                                ? (0, i.jsx)(q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tS.Gu,
                                      children: s,
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tS.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? ex.intl.string(ex.t.Hc7Enk) : ex.intl.string(ex.t["4Byy/G"]),
                            }),
                            g
                                ? (0, i.jsx)(q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tS.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tS.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? ex.intl.string(ex.t.KATEJB) : ex.intl.string(ex.t.na3PT0),
                            }),
                            f
                                ? (0, i.jsx)(q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tS.Gu,
                                      children: u,
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tS.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t.H3mPDT),
                            }),
                            j
                                ? (0, i.jsx)(q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tS.Gu,
                                      children: ei.i$(new Date(d), "LL"),
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tS.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? ex.intl.string(ex.t.PNqxNe) : ex.intl.string(ex.t["UxAag+"]),
                            }),
                            A
                                ? (0, i.jsx)("div", {
                                      className: tS.Gu,
                                      children: m.map((e) => (0, i.jsx)(tN, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tS.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: tS.Gu,
                                      children: x.map((e) => (0, i.jsx)(tf, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tS.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tS.Gu,
                                children: ex.intl.format(ex.t.XPFZVl, { igdbLink: tk.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tS.OQ, children: (0, i.jsx)(ti, { game: t, trackAction: n }) }),
        ],
    });
};
var tC = n(714991),
    ty = n(486020),
    tL = n(992638);
function tR() {
    return (0, i.jsxs)(eU, {
        className: tL.uW,
        animationDelayMs: 300,
        children: [
            (0, i.jsx)(eV, { className: tL.dU, width: "30%" }),
            (0, i.jsx)(eU, {
                className: tL.nV,
                children: (0, i.jsxs)("div", {
                    className: tL.hQ,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tL.To,
                            children: [
                                (0, i.jsx)(eV, { className: tL.QV }),
                                (0, i.jsxs)("div", {
                                    className: tL.Yv,
                                    children: [
                                        (0, i.jsx)(eV, { className: tL.Ag }),
                                        (0, i.jsx)(eV, { className: tL.zl }),
                                        (0, i.jsx)(eV, { className: tL.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(eF, {}),
                    ],
                }),
            }),
        ],
    });
}
function tP(e) {
    let { guild: t } = e,
        n = ty.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, s] = a.useState(void 0),
        r = null != n && l !== n,
        c = a.useCallback(() => {
            s(n);
        }, [n]);
    return (0, i.jsxs)("div", {
        className: tL._C,
        children: [
            r && (0, i.jsx)(eV, { className: tL.EQ }),
            (0, i.jsx)("img", {
                className: tL.$f,
                src: n,
                alt: ex.intl.formatToPlainString(ex.t.xm6W9D, { guildName: t.name }),
                draggable: !1,
                onLoad: c,
                onError: c,
            }),
        ],
    });
}
function tG(e) {
    let { trackAction: t } = e,
        n = (0, e5.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: s, isCommunityInviteResolving: r, isMember: c, closeModal: o } = z(),
        u = a.useCallback(() => {
            null != l &&
                (t(O.GameProfileTrackActionActions.JoinServer),
                o(),
                ep.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eN.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? s && r
            ? (0, i.jsx)(tR, {})
            : null
        : (0, i.jsxs)("div", {
              className: tL.uW,
              children: [
                  (0, i.jsx)(Z.D, {
                      className: tL.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: ex.intl.string(ex.t["U2N+ci"]),
                  }),
                  (0, i.jsx)("div", {
                      className: tL.kL,
                      children: (0, i.jsxs)("div", {
                          className: tL.hQ,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tL.To,
                                  children: [
                                      (0, i.jsx)(tP, { guild: l.guild }),
                                      (0, i.jsxs)("div", {
                                          className: tL.yj,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tL.YS,
                                                  children: [
                                                      (0, i.jsx)(tC.A, { guild: l.guild, size: 16 }),
                                                      (0, i.jsx)(Z.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, e6.uJ)(l.guild?.description) &&
                                                  (0, i.jsx)(q.E, {
                                                      className: tL.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, i.jsxs)("div", {
                                                        className: tL.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tL.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tL._o }),
                                                                        (0, i.jsx)(q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: ex.intl.format(ex.t["LC+S+m"], {
                                                                                membersOnline:
                                                                                    l.approximate_presence_count,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != l.approximate_member_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tL.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: tL.jk }),
                                                                        (0, i.jsx)(q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            children: ex.intl.format(ex.t.zRl6XR, {
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
                                  text: c ? ex.intl.string(ex.t.cEnaWx) : ex.intl.string(ex.t.XpeFYr),
                                  onClick: u,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var t_ = n(369606),
    tO = n(459746),
    tM = n(691540),
    tw = n(857250),
    tD = n(97483),
    tV = n(922016),
    tU = n(980707),
    tF = n(477782),
    tY = n(663341),
    tW = n(408278),
    tB = n(34188),
    tH = n(173936),
    tz = n(365199),
    tX = n(789645),
    tK = n(442433),
    tJ = n(50268),
    t$ = n(44724),
    tQ = n(957565),
    tq = n(695366),
    tZ = n(540185),
    t0 = n(926268),
    t1 = n(53788),
    t8 = n(831453),
    t4 = n(785866),
    t3 = n(555704),
    t5 = n(47675),
    t2 = n(633075),
    t6 = n(289173),
    t7 = n(321191),
    t9 = n(958805),
    ne = n(735321),
    nt = n(96173),
    nn = n(280450),
    nl = n(403362);
async function ni(e) {
    let t = e((0, ne.BF)());
    await t9.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function na(e) {
    var t;
    let l,
        { game: s, className: r, trackAction: c } = e,
        o = a.useRef(null),
        u = a.useRef(null),
        m = (0, tJ.A)({ id: s.id, label: ex.intl.string(ex.t.SHQGPj) }),
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
                : (0, i.jsx)(tF.Dr, {
                      id: "game-profile-something-wrong",
                      label: ex.intl.string(ex.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: tq.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([nn.default], () => nn.default.getId()),
                s = a.useMemo(
                    () => [
                        {
                            type: tZ.x.FAVORITE_GAMES,
                            addLabel: ex.intl.string(ex.t.fgmitg),
                            removeLabel: ex.intl.string(ex.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: t0.HeartIcon,
                        },
                        {
                            type: tZ.x.PLAYED_GAMES,
                            addLabel: ex.intl.string(ex.t["0xIVLR"]),
                            removeLabel: ex.intl.string(ex.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: t1.G,
                        },
                        {
                            type: tZ.x.CURRENT_GAMES,
                            addLabel: ex.intl.string(ex.t.G0c4En),
                            removeLabel: ex.intl.string(ex.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: t8.H,
                        },
                        {
                            type: tZ.x.WANT_TO_PLAY_GAMES,
                            addLabel: ex.intl.string(ex.t.UuBS4K),
                            removeLabel: ex.intl.string(ex.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: t4._,
                        },
                    ],
                    [],
                ),
                r = (0, d.yK)([t7.A], () => (null == l ? [] : (t7.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, nt.A)(),
                o = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof t2.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(nl.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                u = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await ni((i) => {
                                let a = i.filter(t6.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, ne.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new t6.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new t6.Yy({ ...a, games: e });
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
                        (0, t5.un)({
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
                            (await ni((n) =>
                                e
                                    ? n.some((e) => e instanceof t2.R && e.applicationId === o)
                                        ? n
                                        : [(t = new t2.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof t2.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof t2.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, t5.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, ne.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof t2.R && e.applicationId === o);
                h.push(
                    (0, i.jsx)(
                        tF.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? ex.intl.formatToPlainString(ex.t.Ktb1n8, { name: n })
                                : ex.intl.formatToPlainString(ex.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: t3.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of s) {
                    let n = r.filter(t6.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        a = !l && null != n && (0, ne.uA)(n);
                    h.push(
                        (0, i.jsx)(
                            tF.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? ex.intl.string(ex.t["86OoiH"]) : void 0,
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
            null != p && (0, t$.G)({ applicationId: p });
        }, [p]),
        I = a.useCallback(() => {
            null != p && (c(O.GameProfileTrackActionActions.GameShop), (0, t$.default)({ applicationId: p }), A());
        }, [p, c, A]),
        N = a.useCallback(() => A(!1), [A]),
        k = a.useCallback(() => {
            c(O.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eN.BVt.GAME_PROFILE(s.id)}`;
            (0, tQ.C)(e, () => {
                (0, tM.P0)((0, tw.o)(ex.intl.string(ex.t["+5kSoW"]), tD.Ck.SUCCESS));
            });
        }, [s.id, c]);
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            null != j &&
                (0, i.jsx)(tV.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tU.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, tK.Z_)(), t());
                            },
                            "aria-label": ex.intl.string(ex.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tF.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: u,
                            children: (0, i.jsx)(h.$, {
                                icon: tY.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: ex.intl.string(ex.t.sidPSo),
                            }),
                        }),
                }),
            v &&
                (0, i.jsx)(x.m, {
                    text: ex.intl.string(ex.t.apFNLU),
                    children: (0, i.jsx)(tW.K, {
                        icon: tB.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": ex.intl.string(ex.t.apFNLU),
                        onMouseDown: E,
                        onClick: I,
                    }),
                }),
            (0, i.jsx)(x.m, {
                text: ex.intl.string(ex.t.WqhZss),
                children: (0, i.jsx)(tW.K, {
                    icon: tH.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": ex.intl.string(ex.t.WqhZss),
                    onClick: k,
                }),
            }),
            (null != m || null != g) &&
                (0, i.jsx)(tV.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tU.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, tK.Z_)(), t());
                            },
                            "aria-label": ex.intl.string(ex.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tF.rX, { children: g }), (0, i.jsx)(tF.rX, { children: m })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(x.m, {
                            text: ex.intl.string(ex.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, i.jsx)(tW.K, {
                                    icon: tz.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": ex.intl.string(ex.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tW.K, {
                icon: tX.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: N,
                "aria-label": ex.intl.string(ex.t.cpT0Cq),
            }),
        ],
    });
}
var ns = n(732369);
function nr(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: ns.y5,
        children: [
            (0, i.jsx)("div", { className: r()(ns.nI, n && ns.hD) }),
            (0, i.jsxs)("div", {
                className: r()(ns.A1, n && ns.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: ns.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: ns.hm,
                        children: [
                            (0, i.jsx)(Z.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(nd, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(na, { game: t, className: ns.HK, trackAction: l }),
        ],
    });
}
function nc(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(ns.nI, ns.Jn, t && ns.hD) });
}
let no = a.forwardRef(function (e, t) {
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
    return (0, e6.uJ)(l)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: ns.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, i.jsx)("div", { className: ns.N4 }),
              ],
          });
});
function nu(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(e2.du).join(", ");
    return (0, e6.uJ)(n) ? null : (0, i.jsx)(q.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function nd(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: ns.Qc,
        children: [
            (0, i.jsx)(t_.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(q.E, {
                variant: "text-xs/bold",
                color: "none",
                children: ex.intl.formatToPlainString(ex.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function nm(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: r()(n ? ns.n8 : ns.FS, !n && (0, tO.cO)(t) && ns.CD),
        children: (0, i.jsx)(tO.Ay, { game: t, className: ns.xe, size: tO.wu.LARGE }),
    });
}
let nx = function (e) {
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
        className: r()(ns.ap, l && ns.Gh),
        children: [
            s &&
                (0, i.jsx)("div", {
                    className: r()(ns.Tf, (0, tO.cO)(t) && ns.wS),
                    children: (0, i.jsx)(tO.Ay, { game: t, className: ns.w$, size: tO.wu.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: ns.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(nd, { rank: t.l30Rank }),
                    (0, i.jsx)(Z.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(nu, { game: t }),
                ],
            }),
        ],
    });
};
var nh = n(141628),
    ng = n(289363),
    nf = n(134131);
function nj() {
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: nf.uW,
        children: [
            (0, i.jsx)(eV, { className: nf.dU, width: "30%" }),
            (0, i.jsxs)(eU, {
                className: nf.nV,
                children: [
                    (0, i.jsx)("div", { className: nf.sB, children: (0, i.jsx)(ng.default, { isLoading: !0 }) }),
                    (0, i.jsxs)("div", {
                        className: nf.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: nf.Yv,
                                children: [(0, i.jsx)(eV, { width: "55%" }), (0, i.jsx)(eV, { width: "85%" })],
                            }),
                            (0, i.jsx)(eF, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nA(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, e5.c)("GameProfileLinkAccount"),
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
          ? (0, i.jsx)(nj, {})
          : !c || r
            ? null
            : (0, i.jsxs)("div", {
                  className: nf.uW,
                  children: [
                      (0, i.jsx)(Z.D, {
                          className: nf.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: ex.intl.string(ex.t["VDAhr+"]),
                      }),
                      (0, i.jsxs)("div", {
                          className: nf.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: nf.sB,
                                  children: (0, i.jsx)(ng.default, { application: u }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: nf.hQ,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: nf.FS,
                                          children: [
                                              (0, i.jsx)(Z.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: ex.intl.formatToPlainString(ex.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, i.jsx)(q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: ex.intl.string(ex.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(h.$, {
                                          variant: "secondary",
                                          icon: nh.A,
                                          text: ex.intl.string(ex.t.jynBQ5),
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
var np = n(635377),
    nv = n.n(np),
    nE = n(80687),
    nI = n(775602),
    nN = n(879221),
    nk = n(534573),
    nS = n(248643),
    nb = n(256905),
    nT = n(85935),
    nC = n(197935),
    ny = n(191096),
    nL = n(90721),
    nR = n(258924);
function nP(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function nG(e, t) {
    return (0, nk.Ec)(e, { size: t, keepAspectRatio: !0, format: ty.QB ? "webp" : null });
}
let n_ = new (nv())({ max: 100 }),
    nO = a.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [s, c] = a.useState(null),
            o = null != s && s.url === t ? s.isPortrait : (n_.get(t) ?? !1),
            u = a.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (n_.set(t, n),
                        c((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            d = a.useCallback((e) => u(e.currentTarget), [u]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    ref: u,
                    src: nG(t, 106),
                    className: r()(nR.r4, !o && nR.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, i.jsx)("img", { ref: u, src: nG(t, 900), className: r()(nR.c8, o && nR.D7, l), alt: n, onLoad: d }),
            ],
        });
    }),
    nM = a.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: s, isPlaying: c, onSelect: o, gameName: u, listItemProps: d } = e,
            m = a.useCallback(() => o(l), [o, l]),
            x = d?.tabIndex;
        return (0, i.jsx)(Q.D, {
            ...d,
            className: r()(nR.JS, s && nR.Y4),
            onClick: m,
            children: (0, i.jsxs)("div", {
                className: nR.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: nG("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nR.xn,
                        alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: u }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, i.jsx)("div", {
                            className: nR.UZ,
                            children: (0, i.jsx)(nE.D, { playing: s && c, size: "sm", tabIndex: x }),
                        }),
                ],
            }),
        });
    }),
    nw = a.memo(function (e) {
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
            (0, nL.A)({ videoRef: s, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: nR.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nR.tN,
                        children: (0, i.jsx)(nS.A, {
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
                            renderLinkComponent: nT.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: nR.T9,
                            videoRef: s,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nD(e) {
    let { game: t, trackAction: n } = e,
        [l, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([nI.Ay], () => nI.Ay.useReducedMotion),
        { obscured: g } = (0, ny.I3)(),
        f = (0, nN.O)("game_profile_media");
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let j = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eI.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eI.YE)(e.application_id, e.id, e.width, "webp"),
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
        I = a.useCallback(
            (e) => {
                let t = j[p],
                    n = j[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), s(e));
            },
            [j, p],
        ),
        [N, k] = a.useState(!1),
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
            (0, nb.R)({
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
              className: nR.kL,
              children: [
                  E
                      ? (0, i.jsx)("div", {
                            className: nR.ND,
                            children: (0, i.jsx)(
                                nw,
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
                            className: nR.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nR.Jy,
                                            onAnimationEnd: y,
                                            children: (0, i.jsx)(nO, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: nR.QN }),
                                (0, i.jsx)(Q.D, {
                                    className: nR.gv,
                                    onClick: b,
                                    children: (0, i.jsx)("div", {
                                        className: nR.cs,
                                        children: (0, i.jsx)(
                                            nO,
                                            {
                                                url: v.url,
                                                className: nR.Jf,
                                                alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: t.name }),
                                            },
                                            v.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, i.jsx)(nC.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: A,
                            getItemKey: nP,
                            renderItem: (e, n) => {
                                let { item: l, index: a } = e;
                                return (0, i.jsx)(
                                    nM,
                                    {
                                        item: l,
                                        index: a,
                                        isPlaying: N,
                                        isSelected: a === p,
                                        onSelect: I,
                                        gameName: t.name,
                                        listItemProps: n,
                                    },
                                    `${a}-${l.url}`,
                                );
                            },
                        })
                      : (0, i.jsx)(en.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, i.jsx)(
                                    nM,
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
var nV = n(49381),
    nU = n(661531),
    nF = n(223273);
function nY(e, t, n) {
    if (null == e || null == t || t < 10) return nF.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nF.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nF.vI.VERY_POSITIVE
              : nF.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nF.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nF.vI.MIXED;
    if (e >= 20) return nF.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nF.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nF.vI.VERY_NEGATIVE;
    return nF.vI.OVERWHELMINGLY_NEGATIVE;
}
function nW(e) {
    switch (e) {
        case nF.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nF.vI.OVERWHELMINGLY_POSITIVE:
        case nF.vI.VERY_POSITIVE:
        case nF.vI.POSITIVE:
        case nF.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nF.vI.MIXED:
            return "steam-review-text-mixed";
        case nF.vI.MOSTLY_NEGATIVE:
        case nF.vI.NEGATIVE:
        case nF.vI.VERY_NEGATIVE:
        case nF.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nB =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nH = n(778591);
function nz(e) {
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
var nX = n(255417);
function nK(e) {
    let { url: t, trackAction: n, title: l, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tx.A)(),
        u = nY(s, r, "recent" === c),
        d = nW(u),
        m = a.useCallback(() => {
            (n(O.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, i.jsx)(Q.D, {
        onClick: m,
        className: nX.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: nX.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: nX.tN,
                    children: [
                        (0, i.jsx)(nV.N, { size: "sm", color: nU.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(Z.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    x.m,
                    {
                        text:
                            u === nF.vI.NO_USER_REVIEWS
                                ? ex.intl.string(ex.t.CLMt8J)
                                : ex.intl
                                      .format(
                                          "recent" === c
                                              ? ex.t.TzvC0k
                                              : "localized" === c
                                                ? ex.t.EOfrwm
                                                : ex.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: nX.Z0,
                            children: [
                                (0, i.jsx)(q.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: nX.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nF.vI.NO_USER_REVIEWS:
                                                return ex.intl.string(ex.t.CLMt8J);
                                            case nF.vI.OVERWHELMINGLY_POSITIVE:
                                                return ex.intl.string(ex.t["75sx1S"]);
                                            case nF.vI.VERY_POSITIVE:
                                                return ex.intl.string(ex.t["EkOVg+"]);
                                            case nF.vI.POSITIVE:
                                                return ex.intl.string(ex.t.ZUkFtr);
                                            case nF.vI.MOSTLY_POSITIVE:
                                                return ex.intl.string(ex.t.M7Z09a);
                                            case nF.vI.MIXED:
                                                return ex.intl.string(ex.t.c8yuHR);
                                            case nF.vI.MOSTLY_NEGATIVE:
                                                return ex.intl.string(ex.t.H0MSjG);
                                            case nF.vI.NEGATIVE:
                                                return ex.intl.string(ex.t.vpLrgz);
                                            case nF.vI.VERY_NEGATIVE:
                                                return ex.intl.string(ex.t["5spYuX"]);
                                            case nF.vI.OVERWHELMINGLY_NEGATIVE:
                                                return ex.intl.string(ex.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== nF.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(q.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: ex.intl
                                            .format(ex.t.sgIoin, { rating_count: r.toLocaleString() })
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
function nJ(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tx.A)(),
        x = a.useCallback(() => {
            (l(O.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, i.jsx)(Q.D, {
        onClick: x,
        className: nX.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: nX.Ur,
            children: [
                (0, i.jsx)(Z.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: ex.intl.string(ex.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: nX.WA,
                    children: [
                        null != c ? (0, i.jsx)(n$, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(nQ, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(q.E, {
                                  variant: "text-xs/medium",
                                  color: nW(nF.vI.NO_USER_REVIEWS),
                                  children: ex.intl.string(ex.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function n$(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nB.MIGHTY:
                    return ex.intl.string(ex.t.aZej2g);
                case nB.STRONG:
                    return ex.intl.string(ex.t.MLxnSg);
                case nB.FAIR:
                    return ex.intl.string(ex.t["3f19KA"]);
                case nB.WEAK:
                    return ex.intl.string(ex.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nB.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nB.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nB.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nB.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        x.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: nX.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nQ(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case nB.MIGHTY:
                    t = "#fc430a";
                    break;
                case nB.STRONG:
                    t = "#9e00b4";
                    break;
                case nB.FAIR:
                    t = "#4aa1ce";
                    break;
                case nB.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        x.m,
        {
            text: ex.intl.string(ex.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: nX.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nz, { rating: t, strokeColor: l }),
                    (0, i.jsx)(q.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nX.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nq = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, e5.c)("GameProfileReviews"),
        a = (0, nH.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != a,
        c = t.reviews?.steam,
        o = nY(c?.recentRating, c?.recentRatingCount, !0),
        d = r && o !== nF.vI.NO_USER_REVIEWS,
        m =
            null != c &&
            null != c.localizedRating &&
            null != c.localizedRatingCount &&
            null != c.ratingCount &&
            c.localizedRatingCount >= 200 &&
            c.ratingCount >= 2e3,
        x = m ? c?.localizedRating : c?.rating,
        h = m ? c?.localizedRatingCount : c?.ratingCount,
        g = m ? ex.t["aWb+V4"] : ex.t["8e4LiB"],
        f = t.reviews?.opencritic != null && null != s;
    return r || d || f
        ? (0, i.jsxs)("div", {
              className: nX.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: nX.Gf,
                      children: (0, i.jsx)(Z.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: ex.intl.string(ex.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: nX.kL,
                      children: [
                          d && null != a
                              ? (0, i.jsx)("div", {
                                    className: nX.WH,
                                    children: (0, i.jsx)(nK, {
                                        url: a,
                                        trackAction: n,
                                        title: ex.intl.string(ex.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != a
                              ? (0, i.jsx)("div", {
                                    className: nX.WH,
                                    children: (0, i.jsx)(nK, {
                                        url: a,
                                        trackAction: n,
                                        title: ex.intl.string(g),
                                        rating: x,
                                        ratingCount: h,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          f && null != s
                              ? (0, i.jsx)("div", {
                                    className: nX.WH,
                                    children: (0, i.jsx)(nJ, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nZ = n(839534),
    n0 = n(722258),
    n1 = n(258245),
    n8 = n(561769),
    n4 = n(484469),
    n3 = n(57020),
    n5 = n(682301);
let n2 = [];
var n6 = n(758836),
    n7 = n(747828);
let n9 = [0, 1, 2, 3, 4];
function le(e) {
    return e.skuId;
}
let lt = a.createContext({ trackAction: () => {} });
function ln(e) {
    let { product: t, aspectRatio: n, listItemProps: l } = e,
        { skuId: s } = t,
        r = a.useContext(n8.v3),
        { trackAction: c } = a.useContext(lt),
        o = a.useRef(null),
        u = a.useCallback(
            (e) => {
                (c(O.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, n0.B)({
                        skuId: s,
                        analyticsLocations: [I.A.GAME_PROFILE],
                        analyticsSource: I.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, n3.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, s, t],
        ),
        { flattenProductVariants: d, ...m } = r;
    return (0, i.jsx)(n8.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...m, productOverride: t },
        children: (0, i.jsx)(n1.A, {
            skuId: s,
            aspectRatio: n,
            cardClassName: n7.N,
            onClickCard: u,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function ll() {
    return (0, i.jsx)(n4.A, {});
}
function li(e) {
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
                            null == e || t || M.A.isShopCollectionFetching(e) || eS(e);
                        }, [e, t]),
                        { skuIds: l ?? n2, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, n5.hv)(t, { flattenVariants: !0 }),
                s = (0, a.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: s, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = a.useCallback(() => {
            (n(O.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nZ.Cz)({
                    analyticsLocations: [I.A.GAME_PROFILE],
                    analyticsSource: I.A.GAME_PROFILE,
                    tab: n6.G2.CATALOG,
                }));
        }, [n, l]),
        o = a.useMemo(() => ({ trackAction: n }), [n]),
        u = (0, nN.O)("game_profile_shop_carousel");
    return r
        ? (0, i.jsx)(eW, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, i.jsx)(ez, { children: n9.map((e) => (0, i.jsx)(ll, {}, e)) }),
          })
        : 0 === s.length
          ? null
          : (0, i.jsx)(lt.Provider, {
                value: o,
                children: (0, i.jsx)(eB, {
                    title: ex.intl.string(ex.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: u
                        ? (0, i.jsx)(nC.A, {
                              gap: "md",
                              items: s,
                              getItemKey: le,
                              renderItem: (e, t) => (0, i.jsx)(ln, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, i.jsx)(en.A, {
                              gap: "md",
                              children: s.map((e) => (0, i.jsx)(ln, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var la = n(921138),
    ls = n(311043);
let lr = [],
    lc = [];
var lo = n(607346);
let lu = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function ld(e) {
    return e.id;
}
function lm(e) {
    let { className: t } = e;
    return (0, i.jsx)(eU, { className: t, children: (0, i.jsx)(eV, { className: lo.Lg }) });
}
function lx(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: s } = z(),
        r = t.getCoverURL(256),
        [c, o] = a.useState(null),
        u = null == r || c === r,
        { shouldOpenGameProfile: d, gameId: m } = (0, la.Ay)({
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
            className: lo.Nr,
            onClick: h,
            "aria-label": ex.intl.formatToPlainString(ex.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, i.jsx)(tO.Ay, {
                    game: t,
                    className: lo.xe,
                    size: tO.wu.SMALL,
                    imageSize: 256,
                    onLoad: g,
                    onError: g,
                }),
                !u && (0, i.jsx)(lm, { className: lo.uz }),
            ],
        }),
    });
}
function lh(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: a } = (function (e) {
            let t = !ek.has(e),
                { data: n, isLoading: l, error: i } = eT(e, t),
                a = t && null != n ? n : lr;
            (0, L.x)(a);
            let s = (0, d.bG)(
                    [ls.A],
                    () => a.some((e) => null == ls.A.getGame(e) && !ls.A.hasNoData(e) && !ls.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, d.yK)(
                    [ls.A, B.default],
                    () => {
                        let e = B.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => ls.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, la.T_)(t) && !(0, V.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: lc };
        })(t),
        s = (0, nN.O)("game_profile_similar_games");
    return ek.has(t)
        ? null
        : l
          ? (0, i.jsx)(eW, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, i.jsx)("div", {
                    className: lo.XG,
                    style: lu,
                    children: (0, i.jsx)(ez, {
                        children: K()
                            .range(0, 8)
                            .map((e) => (0, i.jsx)(lm, { className: lo.aZ }, e)),
                    }),
                }),
            })
          : 0 === a.length
            ? null
            : (0, i.jsx)(eB, {
                  title: ex.intl.string(ex.t["6rLyQB"]),
                  children: (0, i.jsx)("div", {
                      className: lo.XG,
                      style: lu,
                      children: s
                          ? (0, i.jsx)(nC.A, {
                                gap: "md",
                                items: a,
                                getItemKey: ld,
                                itemClassName: lo.cW,
                                renderItem: (e, t) =>
                                    (0, i.jsx)(lx, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, i.jsx)(en.A, {
                                gap: "md",
                                children: a.map((e) => (0, i.jsx)(lx, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
var lg = n(871123),
    lf = n(439303),
    lj = n(317560),
    lA = n(467884),
    lp = n(761812);
function lv(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: lp.B, children: t });
}
function lE(e) {
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
        : (0, i.jsx)(en.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      lv,
                      {
                          children: (0, i.jsx)(lA.Ay, {
                              positionInSection: t,
                              skuId: e,
                              variant: lA.s6.SMALL,
                              analyticsLocations: n,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
let lI = [0, 1, 2, 3],
    lN = { placement: lf.Ye.GAME_PROFILE };
function lk() {
    return (0, i.jsx)(eW, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, i.jsx)(ez, { children: lI.map((e) => (0, i.jsx)(lv, { children: (0, i.jsx)(lA.yf, {}) }, e)) }),
    });
}
function lS(e) {
    let { trackAction: t } = e,
        {
            socialLayerStorefrontRecommendationsData: n,
            socialLayerStorefrontRecommendationsLoading: l,
            closeModal: s,
        } = z(),
        { analyticsLocations: r } = (0, N.Ay)([I.A.GAME_PROFILE]),
        c = a.useCallback(() => {
            n?.application != null &&
                (t(O.GameProfileTrackActionActions.GameShop),
                s(),
                (0, t$.default)({ applicationId: n.application.id }));
        }, [n, t, s]),
        o = a.useCallback(
            (e, l) => {
                let i = n?.guildId;
                null != i &&
                    (t(O.GameProfileTrackActionActions.GameShopItem),
                    (0, lj.R)({
                        skuId: e,
                        applicationId: l,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lg.rG)(e, t, l, i) && s();
                        },
                    }));
            },
            [t, s, r, n],
        );
    if (l) return (0, i.jsx)(lk, {});
    if (null == n) return null;
    let { skuIds: u } = n;
    return (0, i.jsx)(eB, {
        title: ex.intl.string(ex.t.WDdlUb),
        onClickViewAll: c,
        children: (0, i.jsx)(lf.E9, {
            newValue: lN,
            children: (0, i.jsx)(lE, { skuIds: u, analyticsLocations: r, onCardClick: o }),
        }),
    });
}
n(667532);
var lb = n(853022);
let lT = new Set(["1402418703554842694", "356877880938070016"]),
    lC = [e7.V.EPICGAMES, e7.V.STEAM, e7.V.ROBLOX, e7.V.BATTLENET, e7.V.RIOT, e7.V.MINECRAFT];
var ly = n(349361),
    lL = n(924895),
    lR = n(422688),
    lP = n(505200),
    lG = n(695250);
let l_ = function (e) {
    switch (e.category) {
        case e7.V.STEAM:
            return {
                icon: nV.N,
                text: ex.intl.string(ex.t.FsANs4),
                ariaLabel: ex.intl.string(ex.t["P+ePTG"]),
                action: O.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case e7.V.EPICGAMES:
            return {
                icon: ly.r,
                text: ex.intl.string(ex.t.ZbBMHa),
                ariaLabel: ex.intl.string(ex.t.BwX0UW),
                action: O.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case e7.V.ROBLOX:
            return {
                icon: lL.H,
                text: ex.intl.string(ex.t["pJ+P+h"]),
                ariaLabel: ex.intl.string(ex.t.tYxpdf),
                action: O.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case e7.V.BATTLENET:
            return {
                icon: lR.a,
                text: ex.intl.string(ex.t["A7grp+"]),
                ariaLabel: ex.intl.string(ex.t.x9at20),
                action: O.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case e7.V.RIOT:
            return {
                icon: lP.A,
                text: ex.intl.string(ex.t.h6MapL),
                ariaLabel: ex.intl.string(ex.t["528nvc"]),
                action: O.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case e7.V.MINECRAFT:
            return {
                icon: lG.m,
                text: ex.intl.string(ex.t["HZbmO+"]),
                ariaLabel: ex.intl.string(ex.t.WWTqYn),
                action: O.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tA.Y,
                text: ex.intl.string(ex.t["QpN/Iz"]),
                ariaLabel: ex.intl.string(ex.t["8JZmmF"]),
                action: O.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function lO(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var lM = n(48460);
function lw(e) {
    let t,
        n,
        l,
        i,
        s,
        r =
            ((t = (0, nH.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eN.d3x.XBOX_GAME_PASS && !(0, e6.uJ)(e.id));
                return t?.id == null ? null : (0, lb.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== e7.V.EPICGAMES || !!lT.has(l)) &&
                            (e.category !== e7.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            lC.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === e7.V.STEAM) ||
                    e.push({ category: e7.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === e7.V.STEAM ? -1 : +(t.category === e7.V.STEAM)));
                return (null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a);
            }, [t, i, l, s, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function lD(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tx.A)();
    return (0, i.jsx)(lO, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lV = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: s, storeWebsites: r } = lw(t),
        c = a.useMemo(() => r.map(l_).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lD, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: lM.G,
            children: [(0, i.jsx)(lD, { data: c[0], trackAction: l }), (0, i.jsx)(lD, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(lO, {
        text: ex.intl.string(ex.t["/hMurx"]),
        "aria-label": ex.intl.string(ex.t.nK60cc),
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
        ? (0, i.jsxs)("div", { className: lM.G, children: [(0, i.jsx)(lD, { data: c[0], trackAction: l }), o] })
        : o;
};
var lU = n(123292);
function lF(e) {
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
    let m = s ? ex.intl.string(ex.t["6MwJo/"]) : ex.intl.string(ex.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tE.fi, tE.mX),
        children: [
            (0, i.jsx)(q.E, {
                ref: l,
                className: tE.g5,
                lineClamp: s ? void 0 : d,
                variant: "text-md/medium",
                children: t.description,
            }),
            c && (0, i.jsx)(lU.Q, { onClick: o, text: m }),
        ],
    });
}
let lY = a.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, i.jsxs)("div", {
            className: tE.oC,
            children: [
                (0, i.jsxs)("div", {
                    className: tE.lM,
                    children: [
                        (0, i.jsx)(nD, { game: t, trackAction: n }),
                        (0, i.jsx)(lF, { game: t, trackAction: n }),
                    ],
                }),
                (0, i.jsx)(e3, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(lS, { trackAction: n }),
                (0, i.jsx)(li, { game: t, trackAction: n }),
                (0, i.jsx)(lh, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    lW = a.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
        return (0, i.jsxs)("div", {
            className: tE.V0,
            children: [
                (0, i.jsx)(nD, { game: t, trackAction: n }),
                (0, i.jsxs)("div", {
                    className: tE.gr,
                    children: [
                        (0, i.jsx)(nm, { game: t, isTwoColumn: !1 }),
                        (0, i.jsxs)("div", {
                            className: tE.E1,
                            children: [
                                (0, i.jsx)(lV, { game: t, trackAction: n }),
                                (0, i.jsx)(lF, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(nA, { analyticsLocations: l, trackAction: n }),
                (0, i.jsx)(tG, { trackAction: n }),
                (0, i.jsx)(e3, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(lS, { trackAction: n }),
                (0, i.jsx)(li, { game: t, trackAction: n }),
                (0, i.jsx)(lh, { gameId: t.id, trackAction: n }),
                a && (0, i.jsx)(nq, { game: t, trackAction: n }),
                (0, i.jsx)(tT, { game: t, trackAction: n }),
            ],
        });
    });
function lB(e) {
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
        text: ex.intl.string(ex.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: ex.intl.string(ex.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function lH(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: a } = e,
        s = (0, E.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: tE.NC,
              children: (0, i.jsx)(lB, { onCloudPlayClick: s, analyticsLocations: l, trackAction: a }),
          });
}
function lz(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = (0, v.A)(t.linkedApplications)?.id,
        [s] = (0, R.L_)(t.getOfficialApplicationId()),
        [c] = (0, R.L_)(t.id),
        { showsStoreLinks: o } = lw(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(tE.Pn, tE.fi, tE.iH, o ? tE.sV : tE.gF),
        children: [
            null == a || s || c
                ? null
                : (0, i.jsx)(lH, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: l, trackAction: n }),
            (0, i.jsxs)("div", {
                className: tE.V0,
                children: [
                    (0, i.jsx)(lV, { game: t, trackAction: n }),
                    (0, i.jsx)(nA, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tG, { trackAction: n }),
                    d && (0, i.jsx)(nq, { game: t, trackAction: n }),
                    (0, i.jsx)(tT, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function lX(e) {
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
        { analyticsLocations: J } = (0, N.Ay)(I.A.GAME_PROFILE),
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
        eI = a.useMemo(
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
        [eN, ek] = a.useState(!1),
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
        : (0, i.jsx)(N.f5, {
              value: J,
              children: (0, i.jsx)(m.N, {
                  transitionState: s,
                  onClose: c,
                  children: (0, i.jsx)(H.Provider, {
                      value: eI,
                      children: (0, i.jsx)("div", {
                          className: r()(z, tE.kL),
                          ref: ej,
                          children: (0, i.jsxs)(P.A, {
                              obscured: el,
                              onClose: ep,
                              children: [
                                  (0, i.jsx)(no, { game: Q, ref: eT }),
                                  (0, i.jsx)(nr, { game: Q, show: eN, trackAction: eg }),
                                  (0, i.jsx)(nc, { show: eN }),
                                  (0, i.jsxs)(j.Ch, {
                                      ref: ev,
                                      onScroll: eC,
                                      children: [
                                          (0, i.jsx)(nx, {
                                              game: Q,
                                              onSetCompactBarScrollThreshold: eb,
                                              showCompactBar: eN,
                                          }),
                                          (0, i.jsx)(A.F, {
                                              children: v
                                                  ? (0, i.jsxs)("div", {
                                                        className: tE.jC,
                                                        children: [
                                                            (0, i.jsx)(lY, { game: Q, trackAction: eg }),
                                                            (0, i.jsx)(lz, {
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
                                                        className: tE.b9,
                                                        children: (0, i.jsx)(lW, {
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
let lK = function (e) {
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
        lX,
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
