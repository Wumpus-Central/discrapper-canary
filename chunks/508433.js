n.d(t, { default: () => lf });
var l,
    i = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    c = n(562708),
    o = n(535185),
    u = n(792216),
    d = n(17928),
    m = n(521489),
    x = n(866665),
    g = n(821609),
    h = n(414499),
    f = n(192308),
    A = n(689175),
    j = n(707554),
    p = n(964486),
    v = n(881698),
    E = n(146779),
    I = n(793574),
    N = n(688810),
    b = n(139286),
    k = n(206828),
    S = n(590703),
    T = n(180170),
    C = n(583846),
    y = n(569926),
    R = n(928550),
    G = n(570962),
    L = n(975732),
    P = n(773669),
    O = n(409626),
    _ = n(422069),
    M = n(945810);
let w = { enabled: !1, dense: !1 },
    D = (0, M.mj)({
        kind: "user",
        name: "2026-06-similar-games-desktop",
        defaultConfig: w,
        variations: { 0: w, 1: { enabled: !0, dense: !0 }, 2: { enabled: !0, dense: !1 } },
    });
(0, M.mj)({
    kind: "user",
    name: "2026-06-similar-games-mobile",
    defaultConfig: w,
    variations: { 0: w, 1: { enabled: !0, dense: !0 }, 2: { enabled: !0, dense: !1 } },
});
var V = n(205184),
    U = n(957807),
    Y = n(49491),
    F = n(429913),
    W = n(832163),
    B = n(594832),
    H = n(862772),
    z = n(287809);
let X = a.createContext(void 0);
function K() {
    let e = a.useContext(X);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var J = n(621466),
    $ = n(966697),
    q = n(939249),
    Q = n(834730),
    Z = n(297264),
    ee = n(460905),
    et = n(776231),
    en = n(449543),
    el = n(46054),
    ei = n(58703);
n(321073);
var ea = n(155718),
    er = n(387408),
    es = n(731068),
    ec = n(59318),
    eo = n(320095),
    eu = n(708676),
    ed = n(383233),
    em = n(998218),
    ex = n(375708);
let eg = /^#{1,3}\s+(.+)$/,
    eh = /^https?:\/\/\S+$/;
var ef = n(60465),
    eA = n(158390),
    ej = n(636537),
    ep = n(228366),
    ev = n(927813),
    eE = n(371794),
    eI = n(652215);
let eN = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function eb(e) {
    ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
            await (0, eE.aP)({
                url: eI.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                query: { locale: P.default.locale },
                rejectWithError: !1,
                retries: 2,
            })
        ).body.products.flatMap((e) => e.sku_ids);
        ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
    } catch (t) {
        ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function ek(e) {
    let t = ((await ej.Bo.get({ url: eI.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eN.has(t),
    );
    ep.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eS = (0, d.UT)(_.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => _.A.getSimilarGames(e) ?? null,
    load: (e) => ek(e),
    retryConfig: { backoff: () => new eA.A(5 * ev.A.Millis.SECOND, 5 * ev.A.Millis.MINUTE) },
    failureStaleAfter: ev.A.Seconds.MINUTE,
});
async function eT(e, t) {
    ep.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await ej.Bo.get({ url: eI.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        ep.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, er.A)((0, eo.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, ed._c)(e))
                            return e.components
                                .filter((e) => e.type === ea.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || eh.test(t.trim())
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
                    r = (function (e) {
                        if ((0, ed._c)(e)) {
                            let t = e.components.find((e) => e.type === ea.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, es.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, ec.tT)(e.content_type));
                        if (null != t) return (0, es.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, ec.XB)(e.content_type));
                        if (null != n) return (0, es.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, es.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, es.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, es.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(l),
                    { title: s, body: c } =
                        ((t = a.indexOf("\n")),
                        (n = (-1 === t ? a : a.slice(0, t)).match(eg)),
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
                                      r = t.url,
                                      s = t.color ?? void 0;
                                  if (null != n || null != i || null != r)
                                      return {
                                          authorName: n,
                                          authorIconUrl: l,
                                          providerName: i,
                                          providerIconUrl: a,
                                          url: r,
                                          color: s,
                                      };
                              })(l);
                return {
                    id: l.id,
                    media: r,
                    title: s,
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
var eC = n(284009),
    ey = n.n(eC),
    eR = n(376728),
    eG = n(976860),
    eL = n(71393),
    eP = n(449054);
async function eO(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    ey()(a.length > 0, "analyticsLocationStack must have at least one location");
    let r = a[a.length - 1],
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let c = eL.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == s || s.has(eI.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eP.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eI.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eR.Ay.acceptInvite({ inviteKey: t.code, context: { location: r }, skipOnboarding: !0 }));
    (0, eG.pX)(eI.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var e_ = n(320448),
    eM = n(406510);
function ew(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: eM.k,
        children: [
            (0, i.jsxs)("div", {
                className: eM.w,
                children: [
                    (0, i.jsx)(Z.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(g.$, {
                            size: "sm",
                            icon: e_._,
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
var eD = n(235240),
    eV = n(165648);
function eU(e, t) {
    return el.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function eY(e, t) {
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
function eF(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [r, s] = a.useState(!1),
        c = a.useCallback(() => s(!0), []);
    return null == t.media
        ? null
        : (0, i.jsx)($.y, {
              readyState: r ? eI.Rv1.READY : eI.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, i.jsx)("img", {
                  src: n,
                  className: eD.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function eW(e) {
    let { variant: t, message: n, channelId: l, onCardClick: r } = e,
        c = "main" === t,
        o = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, J.vq)(e.target, HTMLAnchorElement) ||
                        ((0, J.vq)(e.target, HTMLSpanElement) && (0, J.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return r(n.id);
            },
            [r, n.id],
        ),
        u = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        d = n.media?.proxyUrl ?? n.media?.url,
        m = null != d ? eY(d, u) : void 0,
        { embedSource: x } = n;
    return null == x
        ? null
        : (0, i.jsx)(q.D, {
              className: c ? eD.jI : eD.IU,
              onClick: o,
              children: (0, i.jsxs)("div", {
                  className: c ? eD.GT : eD.s4,
                  children: [
                      null != x.url &&
                          (0, i.jsx)(Q.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eD.Ow,
                              children: x.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eD._d,
                          style: null != x.color ? { borderInlineStartColor: x.color } : void 0,
                          children: [
                              null != x.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eD.Tu,
                                      children: [
                                          null != x.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: x.authorIconUrl,
                                                  className: eD.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(Q.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: x.authorName,
                                          }),
                                      ],
                                  }),
                              null != n.media &&
                                  null != m &&
                                  (0, i.jsx)("div", {
                                      className: eD.ax,
                                      children: (0, i.jsx)(eF, { message: n, src: m, aspectRatio: u }),
                                  }),
                              null != n.title &&
                                  (0, i.jsx)(Z.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: c ? eD.KX : eD._N,
                                      children: eU(n.title, l),
                                  }),
                              n.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: s()(eD.h_, eV.PT),
                                      children: [eU(n.body, l), (0, i.jsx)("div", { className: eD.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eD.ov,
                                  children: [
                                      null != x.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: x.providerIconUrl,
                                              className: eD.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(Q.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != x.providerName ? `${x.providerName} \xb7 ` : "",
                                              (0, ei.i$)(new Date(n.timestamp), "LL"),
                                          ],
                                      }),
                                      n.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eD.a5,
                                              children: [
                                                  (0, i.jsx)(ee.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(Q.E, {
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
let eB = a.memo(function (e) {
    let { message: t, channelId: n, isMain: l } = e;
    return (0, i.jsxs)("div", {
        className: l ? eD.GT : eD.s4,
        children: [
            null != t.title &&
                (0, i.jsx)(Z.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l ? eD.KX : eD._N,
                    children: eU(t.title, n),
                }),
            t.body.length > 0 &&
                (0, i.jsxs)("div", {
                    className: s()(eD.h_, eV.PT),
                    children: [eU(t.body, n), (0, i.jsx)("div", { className: eD.fm })],
                }),
            (0, i.jsxs)("div", {
                className: eD.ov,
                children: [
                    (0, i.jsx)(Q.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, ei.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, i.jsxs)("div", {
                            className: eD.a5,
                            children: [
                                (0, i.jsx)(ee.n, { size: "xs", color: "currentColor" }),
                                (0, i.jsx)(Q.E, {
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
function eH(e) {
    let { variant: t, message: n, channelId: l, onCardClick: r } = e,
        c = "main" === t,
        o = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, J.vq)(e.target, HTMLAnchorElement) ||
                        ((0, J.vq)(e.target, HTMLSpanElement) && (0, J.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return r(n.id);
            },
            [r, n.id],
        ),
        u = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        d = n.media?.proxyUrl ?? n.media?.url,
        m = null != d ? eY(d, u) : void 0,
        x = null != n.media && null != m;
    return (0, i.jsxs)(q.D, {
        className: s()({ [eD.cG]: c && x, [eD.jI]: c && !x, [eD.IU]: !c }),
        onClick: o,
        children: [
            null != n.media &&
                null != m &&
                (0, i.jsx)("div", {
                    className: c ? eD._v : eD.eZ,
                    children: (0, i.jsx)(eF, { message: n, src: m, aspectRatio: u }),
                }),
            (0, i.jsx)(eB, { message: n, channelId: l, isMain: c }),
        ],
    });
}
function ez(e) {
    let { variant: t, message: n, onCardClick: l } = e,
        r = "main" === t,
        { poll: s } = n,
        c = a.useCallback(() => l(n.id), [l, n.id]);
    if (null == s) return null;
    let o = s.answers.slice(0, 3),
        u = s.answers.length - o.length;
    return (0, i.jsx)(q.D, {
        className: r ? eD.jI : eD.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: r ? eD.GT : eD.s4,
            children: [
                (0, i.jsx)(Z.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eD.MH,
                    children: s.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eD.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eD.Nf,
                                    children: (0, i.jsx)(Q.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eD.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        u > 0 &&
                            (0, i.jsx)(Q.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: eD.PF,
                                children: ex.intl.format(ex.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eD.ov,
                    children: (0, i.jsx)(Q.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: ex.intl.format(ex.t.t0FTsH, {
                            createdAt: new Date(n.timestamp),
                            expiryLabel: (0, eu.J)(s.expiry) ?? ex.intl.string(ex.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function eX(e) {
    return null != e.message.poll
        ? (0, i.jsx)(ez, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eW, { ...e })
          : (0, i.jsx)(eH, { ...e });
}
let eK = a.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, N.Ay)(),
        { invite: r, closeModal: s, getScrollOffset: c } = K(),
        {
            messages: o,
            guildId: u,
            channelId: m,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, d.cf)([_.A], () => ({
                data: null != e ? _.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && _.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && _.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || n || _.A.isAnnouncementsFetching(e) || eT(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l }
            );
        })(t),
        x = a.useCallback(() => {
            let e = r?.guild?.id ?? u;
            null != e &&
                null != m &&
                (n(O.GameProfileTrackActionActions.Announcements),
                ef.default.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                s(),
                eO({ invite: r, guildId: e, channelId: m, analyticsLocationStack: l }));
        }, [n, s, c, r, u, m, l, t]),
        g = a.useCallback(
            (e) => {
                let i = r?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (n(O.GameProfileTrackActionActions.AnnouncementsItem),
                    ef.default.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    s(),
                    eO({ invite: r, guildId: i, channelId: m, messageId: e, analyticsLocationStack: l }));
            },
            [n, s, c, r, u, m, l, t],
        );
    return null == m || 0 === o.length
        ? null
        : (0, i.jsx)(ew, {
              title: ex.intl.string(ex.t.B0BV3Y),
              onClickViewAll: x,
              children: (0, i.jsx)(en.A, {
                  gap: 16,
                  children: o.map((e) =>
                      (0, i.jsx)(eX, { variant: "small", message: e, channelId: m, onCardClick: g }, e.id),
                  ),
              }),
          });
});
var eJ = n(541830),
    e$ = n(240248),
    eq = n(505779),
    eQ = n(808380);
let eZ = [eQ.Y.DESKTOP, eQ.Y.XBOX, eQ.Y.PLAYSTATION, eQ.Y.NINTENDO];
var e0 = n(28863),
    e1 = n(975807),
    e8 = n(194362);
function e2(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(O.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, e8.a)(eI.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, e1.A)(e);
        }, [n]),
        r = a.useCallback((e) => (0, i.jsx)(e0.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === ea.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(Q.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ex.intl.format(ex.t.KAjfKl, { claimLink: r }),
          });
}
var e4 = n(998445),
    e5 = n(274997),
    e6 = n(80500),
    e3 = n(319745),
    e7 = n(488225),
    e9 = n(967492),
    te = n(72265),
    tt = n(454346),
    tn = n(37948),
    tl = n(750013);
let ti = { size: "xs", colorClass: tl.wP };
function ta(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tn.A)(),
        {
            action: r,
            icon: s,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case eq.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(e4.GlobeEarthIcon, { ...t }),
                        action: O.GameProfileTrackActionActions.WebsiteLink,
                        title: ex.intl.string(ex.t.fOUKvg),
                    };
                case eq.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(e5.p, { ...t }),
                        action: O.GameProfileTrackActionActions.XLink,
                        title: ex.intl.string(ex.t.INic4y),
                    };
                case eq.V.YOUTUBE:
                    return {
                        action: O.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(e6.C, { ...t }),
                        title: ex.intl.string(ex.t.lNmxbE),
                    };
                case eq.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(e3.Z, { ...t }),
                        action: O.GameProfileTrackActionActions.FacebookLink,
                        title: ex.intl.string(ex.t.FjyREK),
                    };
                case eq.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(e7.L, { ...t }),
                        action: O.GameProfileTrackActionActions.InstagramLink,
                        title: ex.intl.string(ex.t["cgR+IK"]),
                    };
                case eq.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(e9.a, { ...t }),
                        action: O.GameProfileTrackActionActions.BlueskyLink,
                        title: ex.intl.string(ex.t["D/PHq5"]),
                    };
                case eq.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(te.T, { ...t }),
                        action: O.GameProfileTrackActionActions.RedditLink,
                        title: ex.intl.string(ex.t["Hgb+fc"]),
                    };
                case eq.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(tt.a, { ...t }),
                        action: O.GameProfileTrackActionActions.TwitchLink,
                        title: ex.intl.string(ex.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, ti),
        o = a.useCallback(() => {
            n(r), l(t.url);
        }, [r, l, n, t.url]);
    return (0, i.jsx)(x.m, {
        text: c,
        children: (0, i.jsx)(q.D, { onClick: o, className: tl.yO, title: c, children: s }),
    });
}
var tr = n(31300),
    ts = n(802516),
    tc = n(22363),
    to = n(418524),
    tu = n(672572);
function td(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case eQ.Y.DESKTOP:
            return (0, i.jsx)(tr.k, { size: "xs", ...n });
        case eQ.Y.XBOX:
            return (0, i.jsx)(ts.Y, { size: "xs", ...n });
        case eQ.Y.PLAYSTATION:
            return (0, i.jsx)(tc.X, { size: "xs", ...n });
        case eQ.Y.NINTENDO:
            return (0, i.jsx)(to.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tm(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        x.m,
        {
            text: (function (e) {
                switch (e) {
                    case eQ.Y.DESKTOP:
                        return ex.intl.string(ex.t.KT6uCJ);
                    case eQ.Y.XBOX:
                        return ex.intl.string(ex.t.DDWUJp);
                    case eQ.Y.PLAYSTATION:
                        return ex.intl.string(ex.t.fzMz2s);
                    case eQ.Y.NINTENDO:
                        return ex.intl.string(ex.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(td, { platform: t }),
        },
        t,
    );
}
var tx = n(424994),
    tg = n(422384);
function th() {
    return (0, i.jsx)(Q.E, { variant: "text-sm/normal", color: "text-subtle", children: ex.intl.string(ex.t.GruYxV) });
}
let tf = function (e) {
    let { game: t, trackAction: n } = e,
        l = a.useMemo(() => t.genres.map(eJ.du).join(", "), [t]),
        r = t.getCompanyByRole(ea.wk.PUBLISHER),
        s = t.getCompanyByRole(ea.wk.DEVELOPER),
        c = r.map((e) => e.name).join(", "),
        o = s.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(eQ.Y.DESKTOP) && (e.has(eQ.Y.MACOS) || e.has(eQ.Y.LINUX)) && n.push(eQ.Y.DESKTOP),
                n.filter((e) => eZ.includes(e)).sort((e, t) => eZ.indexOf(e) - eZ.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return eq.p.includes(t);
            })
            .sort((e, t) => eq.p.indexOf(e.category) - eq.p.indexOf(t.category)),
        x = !(0, e$.uJ)(l),
        g = !(0, e$.uJ)(c),
        h = !(0, e$.uJ)(o),
        f = !(0, e$.uJ)(u),
        A = d.length > 0,
        j = m.length > 0 && !m.every((e) => (0, e$.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tg.uW,
        children: [
            (0, i.jsx)("div", {
                className: tg.Gf,
                children: (0, i.jsx)(Z.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: ex.intl.string(ex.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tg.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tg.J1,
                        children: [
                            (0, i.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? ex.intl.string(ex.t.pDgwYB) : ex.intl.string(ex.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tg.Gu,
                                      children: l,
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tg.J1,
                        children: [
                            (0, i.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? ex.intl.string(ex.t.Hc7Enk) : ex.intl.string(ex.t["4Byy/G"]),
                            }),
                            g
                                ? (0, i.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tg.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tg.J1,
                        children: [
                            (0, i.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? ex.intl.string(ex.t.KATEJB) : ex.intl.string(ex.t.na3PT0),
                            }),
                            h
                                ? (0, i.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tg.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tg.J1,
                        children: [
                            (0, i.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tg.Gu,
                                      children: ei.i$(new Date(u), "LL"),
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tg.J1,
                        children: [
                            (0, i.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? ex.intl.string(ex.t.PNqxNe) : ex.intl.string(ex.t["UxAag+"]),
                            }),
                            A
                                ? (0, i.jsx)("div", {
                                      className: tg.Gu,
                                      children: d.map((e) => (0, i.jsx)(tm, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tg.J1,
                        children: [
                            (0, i.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: tg.Gu,
                                      children: m.map((e) => (0, i.jsx)(ta, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(th, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tg.J1,
                        children: [
                            (0, i.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tg.Gu,
                                children: ex.intl.format(ex.t.XPFZVl, { igdbLink: tx.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tg.OQ, children: (0, i.jsx)(e2, { game: t, trackAction: n }) }),
        ],
    });
};
var tA = n(714991),
    tj = n(486020),
    tp = n(992638);
function tv(e) {
    let { trackAction: t } = e,
        { invite: n, isMember: l, closeModal: r } = K(),
        s = a.useCallback(() => {
            null != n &&
                (t(O.GameProfileTrackActionActions.JoinServer),
                r(),
                ep.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: n, code: n.code, context: eI.BRT.APP }));
        }, [n, t, r]);
    if (null == n || null == n.guild) return null;
    let c = tj.Ay.getGuildIconURL({ id: n.guild.id, icon: n.guild.icon, size: 48 });
    return (0, i.jsxs)("div", {
        className: tp.uW,
        children: [
            (0, i.jsx)(Z.D, {
                className: tp.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: ex.intl.string(ex.t["U2N+ci"]),
            }),
            (0, i.jsx)("div", {
                className: tp.kL,
                children: (0, i.jsxs)("div", {
                    className: tp.hQ,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tp.To,
                            children: [
                                (0, i.jsx)("img", {
                                    className: tp.$f,
                                    src: c,
                                    alt: ex.intl.formatToPlainString(ex.t.xm6W9D, { guildName: n.guild.name }),
                                    draggable: !1,
                                }),
                                (0, i.jsxs)("div", {
                                    className: tp.yj,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: tp.YS,
                                            children: [
                                                (0, i.jsx)(tA.A, { guild: n.guild, size: 16 }),
                                                (0, i.jsx)(Z.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-default",
                                                    children: n.guild.name,
                                                }),
                                            ],
                                        }),
                                        !(0, e$.uJ)(n.guild?.description) &&
                                            (0, i.jsx)(Q.E, {
                                                className: tp.h_,
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                children: n.guild?.description,
                                            }),
                                        null != n.approximate_member_count || null != n.approximate_presence_count
                                            ? (0, i.jsxs)("div", {
                                                  className: tp.iR,
                                                  children: [
                                                      null != n.approximate_presence_count &&
                                                          (0, i.jsxs)("div", {
                                                              className: tp.Tb,
                                                              children: [
                                                                  (0, i.jsx)("i", { className: tp._o }),
                                                                  (0, i.jsx)(Q.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-muted",
                                                                      children: ex.intl.format(ex.t["LC+S+m"], {
                                                                          membersOnline: n.approximate_presence_count,
                                                                      }),
                                                                  }),
                                                              ],
                                                          }),
                                                      null != n.approximate_member_count &&
                                                          (0, i.jsxs)("div", {
                                                              className: tp.Tb,
                                                              children: [
                                                                  (0, i.jsx)("i", { className: tp.jk }),
                                                                  (0, i.jsx)(Q.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-muted",
                                                                      children: ex.intl.format(ex.t.zRl6XR, {
                                                                          count: n.approximate_member_count,
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
                        (0, i.jsx)(g.$, {
                            variant: "secondary",
                            text: l ? ex.intl.string(ex.t.cEnaWx) : ex.intl.string(ex.t.XpeFYr),
                            onClick: s,
                            fullWidth: !0,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var tE = n(369606),
    tI = n(459746),
    tN = n(691540),
    tb = n(857250),
    tk = n(97483),
    tS = n(922016),
    tT = n(980707),
    tC = n(477782),
    ty = n(663341),
    tR = n(408278),
    tG = n(34188),
    tL = n(173936),
    tP = n(365199),
    tO = n(789645),
    t_ = n(442433),
    tM = n(50268),
    tw = n(44724),
    tD = n(957565),
    tV = n(695366),
    tU = n(540185),
    tY = n(926268),
    tF = n(53788),
    tW = n(831453),
    tB = n(785866),
    tH = n(555704),
    tz = n(47675),
    tX = n(633075),
    tK = n(289173),
    tJ = n(321191),
    t$ = n(958805),
    tq = n(735321),
    tQ = n(96173),
    tZ = n(280450),
    t0 = n(403362);
async function t1(e) {
    let t = e((0, tq.BF)());
    await t$.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function t8(e) {
    var t;
    let l,
        { game: r, className: s, trackAction: c } = e,
        o = a.useRef(null),
        u = a.useRef(null),
        m = (0, tM.A)({ id: r.id, label: ex.intl.string(ex.t.SHQGPj) }),
        h =
            ((t = r.id),
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
                : (0, i.jsx)(tC.Dr, {
                      id: "game-profile-something-wrong",
                      label: ex.intl.string(ex.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: tV.E },
                  })),
        A = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([tZ.default], () => tZ.default.getId()),
                r = a.useMemo(
                    () => [
                        {
                            type: tU.x.FAVORITE_GAMES,
                            addLabel: ex.intl.string(ex.t.fgmitg),
                            removeLabel: ex.intl.string(ex.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tY.HeartIcon,
                        },
                        {
                            type: tU.x.PLAYED_GAMES,
                            addLabel: ex.intl.string(ex.t["0xIVLR"]),
                            removeLabel: ex.intl.string(ex.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tF.G,
                        },
                        {
                            type: tU.x.CURRENT_GAMES,
                            addLabel: ex.intl.string(ex.t.G0c4En),
                            removeLabel: ex.intl.string(ex.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tW.H,
                        },
                        {
                            type: tU.x.WANT_TO_PLAY_GAMES,
                            addLabel: ex.intl.string(ex.t.UuBS4K),
                            removeLabel: ex.intl.string(ex.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: tB._,
                        },
                    ],
                    [],
                ),
                s = (0, d.yK)([tJ.A], () => (null == l ? [] : (tJ.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, tQ.A)(),
                o = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...s].filter((e) => e instanceof tX.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(t0.Vq).find((e) => t.has(e)) ?? null;
                }, [c, s, e]),
                u = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await t1((i) => {
                                let a = i.filter(tK.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, tq.uA)(a))) return i;
                                    let n = { gameId: t },
                                        r = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new tK.Yy({ ...(a ?? { type: e }), games: r });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new tK.Yy({ ...a, games: e });
                                }
                                var r = l;
                                let s = i.findIndex((e) => e.getUniqueKey() === r.getUniqueKey());
                                if (-1 === s) return [r, ...i];
                                let c = [...i];
                                return (c[s] = r), c;
                            }),
                            null == l)
                        )
                            return;
                        let i = l;
                        (0, tz.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
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
                            (await t1((n) =>
                                e
                                    ? n.some((e) => e instanceof tX.R && e.applicationId === o)
                                        ? n
                                        : [(t = new tX.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof tX.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof tX.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, tz.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, tq.XX)(e),
                g = [];
            if (null != o) {
                let e = s.some((e) => e instanceof tX.R && e.applicationId === o);
                g.push(
                    (0, i.jsx)(
                        tC.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? ex.intl.formatToPlainString(ex.t.Ktb1n8, { name: n })
                                : ex.intl.formatToPlainString(ex.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: tH.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of r) {
                    let n = s.filter(tK.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        a = !l && null != n && (0, tq.uA)(n);
                    g.push(
                        (0, i.jsx)(
                            tC.Dr,
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
            return 0 === g.length ? null : g;
        })(r),
        { invite: j, closeModal: p } = K(),
        v = (0, d.bG)([W.A], () => W.A.getApplicationIdFromDetectableId(r.id)),
        E = new Set(j?.guild?.features).has(eI.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        I = a.useCallback(() => {
            null != v && (0, tw.G)({ applicationId: v });
        }, [v]),
        N = a.useCallback(() => {
            null != v && (c(O.GameProfileTrackActionActions.GameShop), (0, tw.default)({ applicationId: v }), p());
        }, [v, c, p]),
        b = a.useCallback(() => p(!1), [p]),
        k = a.useCallback(() => {
            c(O.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eI.BVt.GAME_PROFILE(r.id)}`;
            (0, tD.C)(e, () => {
                (0, tN.P0)((0, tb.o)(ex.intl.string(ex.t["+5kSoW"]), tk.Ck.SUCCESS));
            });
        }, [r.id, c]);
    return (0, i.jsxs)("div", {
        className: s,
        children: [
            null != A &&
                (0, i.jsx)(tS.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tT.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, t_.Z_)(), t();
                            },
                            "aria-label": ex.intl.string(ex.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tC.rX, { children: A }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: u,
                            children: (0, i.jsx)(g.$, {
                                icon: ty.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: ex.intl.string(ex.t.sidPSo),
                            }),
                        }),
                }),
            E &&
                null != j &&
                (0, i.jsx)(x.m, {
                    text: ex.intl.string(ex.t.apFNLU),
                    children: (0, i.jsx)(tR.K, {
                        icon: tG.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": ex.intl.string(ex.t.apFNLU),
                        onMouseDown: I,
                        onClick: N,
                    }),
                }),
            (0, i.jsx)(x.m, {
                text: ex.intl.string(ex.t.WqhZss),
                children: (0, i.jsx)(tR.K, {
                    icon: tL.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": ex.intl.string(ex.t.WqhZss),
                    onClick: k,
                }),
            }),
            (null != m || null != h) &&
                (0, i.jsx)(tS.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tT.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, t_.Z_)(), t();
                            },
                            "aria-label": ex.intl.string(ex.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tC.rX, { children: h }), (0, i.jsx)(tC.rX, { children: m })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(x.m, {
                            text: ex.intl.string(ex.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, i.jsx)(tR.K, {
                                    icon: tP.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": ex.intl.string(ex.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tR.K, {
                icon: tO.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: b,
                "aria-label": ex.intl.string(ex.t.cpT0Cq),
            }),
        ],
    });
}
var t2 = n(732369);
function t4(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        r = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t2.y5,
        children: [
            (0, i.jsx)("div", { className: s()(t2.nI, n && t2.hD) }),
            (0, i.jsxs)("div", {
                className: s()(t2.A1, n && t2.g8),
                children: [
                    null != r && (0, i.jsx)("img", { src: r, alt: "", className: t2.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t2.hm,
                        children: [
                            (0, i.jsx)(Z.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(t7, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(t8, { game: t, className: t2.HK, trackAction: l }),
        ],
    });
}
function t5(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: s()(t2.nI, t2.Jn, t && t2.hD) });
}
let t6 = a.forwardRef(function (e, t) {
    let { game: n } = e,
        [l] = a.useState(() => Math.random()),
        r = a.useMemo(() => {
            let e = n.getBannerURL(2048);
            if (null != e) return e;
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(l * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n, l]);
    return (0, e$.uJ)(r)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t2.y1, style: { backgroundImage: `url("${r}")` } }),
                  (0, i.jsx)("div", { className: t2.N4 }),
              ],
          });
});
function t3(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(eJ.du).join(", ");
    return (0, e$.uJ)(n) ? null : (0, i.jsx)(Q.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function t7(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t2.Qc,
        children: [
            (0, i.jsx)(tE.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(Q.E, {
                variant: "text-xs/bold",
                color: "none",
                children: ex.intl.formatToPlainString(ex.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t9(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: n ? t2.n8 : t2.FS,
        children: (0, i.jsx)(tI.A, { game: t, className: t2.xe, size: tI.w.LARGE }),
    });
}
let ne = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: r } = K(),
        c = a.useRef(null),
        o = a.useRef(null);
    a.useEffect(() => {
        let e = c.current,
            t = o.current;
        if (null == e || null == t) return;
        let l = (function (e, t) {
            let n = 0,
                l = e;
            for (; null != l && l !== t; ) (n += l.offsetTop), (l = l.offsetParent);
            return n;
        })(t, e);
        l > 0 && n?.(l);
    }, [n]);
    let u = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: s()(t2.ap, l && t2.Gh),
        children: [
            r &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t2.Tf,
                    children: (0, i.jsx)(tI.A, { game: t, className: t2.w$, size: tI.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t2.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(t7, { rank: t.l30Rank }),
                    (0, i.jsx)(Z.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(t3, { game: t }),
                ],
            }),
        ],
    });
};
var nt = n(141628),
    nn = n(289363),
    nl = n(134131);
function ni(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: l,
            hasAlreadyLinked: r,
            canStartAuthorization: s,
            startAuthorization: c,
            connectionApp: o,
        } = K(),
        u = (0, d.bG)([z.default], () => z.default.getCurrentUser()),
        m = a.useCallback(() => {
            t(O.GameProfileTrackActionActions.LinkAccount), c({ analyticsLocations: n });
        }, [t, c, n]);
    return l && null != o && s && !r && null != u
        ? (0, i.jsxs)("div", {
              className: nl.uW,
              children: [
                  (0, i.jsx)(Z.D, {
                      className: nl.Gf,
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: ex.intl.string(ex.t["VDAhr+"]),
                  }),
                  (0, i.jsxs)("div", {
                      className: nl.kL,
                      children: [
                          (0, i.jsx)("div", { className: nl.sB, children: (0, i.jsx)(nn.default, { application: o }) }),
                          (0, i.jsxs)("div", {
                              className: nl.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: nl.FS,
                                      children: [
                                          (0, i.jsx)(Z.D, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              children: ex.intl.formatToPlainString(ex.t.hUbQT2, { gameName: o.name }),
                                          }),
                                          (0, i.jsx)(Q.E, {
                                              variant: "text-sm/medium",
                                              color: "text-muted",
                                              children: ex.intl.string(ex.t["JKqu+4"]),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(g.$, {
                                      variant: "secondary",
                                      icon: nt.A,
                                      text: ex.intl.string(ex.t.jynBQ5),
                                      onClick: m,
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var na = n(80687),
    nr = n(775602),
    ns = n(534573),
    nc = n(248643),
    no = n(256905),
    nu = n(966245),
    nd = n(191096),
    nm = n(90721),
    nx = n(258924);
let ng = a.memo(function (e) {
        let t,
            { item: n, index: l, isSelected: r, isPlaying: c, onSelect: o, gameName: u } = e,
            d = a.useCallback(() => o(l), [o, l]);
        return (0, i.jsx)(q.D, {
            className: s()(nx.JS, r && nx.Y4),
            onClick: d,
            children: (0, i.jsxs)("div", {
                className: nx.ub,
                children: [
                    (0, i.jsx)("img", {
                        src:
                            ((t = "VIDEO" === n.type ? (n.poster ?? n.url) : n.url),
                            (0, ns.Ec)(t, { size: 106, keepAspectRatio: !0, format: tj.QB ? "webp" : null })),
                        className: nx.xn,
                        alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: u }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, i.jsx)("div", {
                            className: nx.UZ,
                            children: (0, i.jsx)(na.D, { playing: r && c, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    nh = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: r,
                mediaPlayerRef: s,
                onPlay: c,
                onPause: o,
                onFullscreenChange: u,
            } = e,
            d = a.useRef(null);
        return (
            (0, nm.A)({ videoRef: r, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: nx.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nx.tN,
                        children: (0, i.jsx)(nc.A, {
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
                            renderLinkComponent: nu.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: nx.T9,
                            videoRef: r,
                            mediaPlayerRef: s,
                        }),
                    }),
                ],
            })
        );
    });
function nf(e) {
    let { game: t, trackAction: n } = e,
        [l, r] = a.useState(0),
        [s, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        g = (0, d.bG)([nr.Ay], () => nr.Ay.useReducedMotion),
        { obscured: h } = (0, nd.I3)();
    o !== t.screenshotUrls && (u(t.screenshotUrls), r(0));
    let f = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eE.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eE.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        A = f.length > 0 ? Math.min(l, f.length - 1) : 0,
        j = f[A],
        p = j?.type === "VIDEO",
        v = a.useCallback(
            (e) => {
                let t = f[A],
                    n = f[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), r(e);
            },
            [f, A],
        ),
        [E, I] = a.useState(!1),
        N = a.useRef(null),
        b = a.useCallback(() => {
            n(p ? O.GameProfileTrackActionActions.ClickTrailer : O.GameProfileTrackActionActions.ClickImage);
            let e = m.current,
                t = N.current,
                l = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === A;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || i, initialTimeSec: n ? a : void 0, videoRef: x };
                }
                return e;
            });
            (0, no.R)({
                items: s,
                startingIndex: A,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = x.current,
                        t = N.current,
                        n = null != e ? !e.paused : l;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        I(n);
                },
            });
        }, [n, f, A, p]),
        k = a.useCallback(() => I(!0), []),
        S = a.useCallback(() => I(!1), []),
        T = a.useCallback(() => c(null), []),
        C = a.useCallback(
            (e) => {
                e && b();
            },
            [b],
        );
    return 0 === f.length
        ? null
        : (0, i.jsxs)("div", {
              className: nx.kL,
              children: [
                  p
                      ? (0, i.jsx)("div", {
                            className: nx.ND,
                            children: (0, i.jsx)(
                                nh,
                                {
                                    item: j,
                                    reducedMotion: g,
                                    autoPlay: !g && !h,
                                    videoRef: m,
                                    mediaPlayerRef: N,
                                    onPlay: k,
                                    onPause: S,
                                    onFullscreenChange: C,
                                },
                                `${A}-${j.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: nx.wp,
                            children: [
                                null != s &&
                                    !g &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nx.Jy,
                                            onAnimationEnd: T,
                                            children: (0, i.jsx)("img", { src: s, className: nx.Db, alt: "" }),
                                        },
                                        s,
                                    ),
                                (0, i.jsx)("div", { className: nx.QN }),
                                (0, i.jsx)(q.D, {
                                    className: nx.gv,
                                    onClick: b,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: j.url,
                                            className: nx.c8,
                                            alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: t.name }),
                                        },
                                        j.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(en.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: f.map((e, n) =>
                          (0, i.jsx)(
                              ng,
                              { item: e, index: n, isPlaying: E, isSelected: n === A, onSelect: v, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var nA = n(49381),
    nj = n(661531),
    np = n(223273);
function nv(e, t, n) {
    if (null == e || null == t || t < 10) return np.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? np.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? np.vI.VERY_POSITIVE
              : np.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return np.vI.MOSTLY_POSITIVE;
    if (e >= 40) return np.vI.MIXED;
    if (e >= 20) return np.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return np.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return np.vI.VERY_NEGATIVE;
    return np.vI.OVERWHELMINGLY_NEGATIVE;
}
function nE(e) {
    switch (e) {
        case np.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case np.vI.OVERWHELMINGLY_POSITIVE:
        case np.vI.VERY_POSITIVE:
        case np.vI.POSITIVE:
        case np.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case np.vI.MIXED:
            return "steam-review-text-mixed";
        case np.vI.MOSTLY_NEGATIVE:
        case np.vI.NEGATIVE:
        case np.vI.VERY_NEGATIVE:
        case np.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nI =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nN = n(778591);
function nb(e) {
    let { rating: t, strokeColor: n } = e,
        l = 2 * Math.PI * 16,
        a = Math.min(Math.max(t, 0), 100) / 100,
        r = a * l;
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
            strokeDasharray: `${r} ${l - r}`,
        }),
    });
}
var nk = n(255417);
function nS(e) {
    let { url: t, trackAction: n, title: l, rating: r, ratingCount: s, tooltipVariant: c = "all" } = e,
        o = (0, tn.A)(),
        u = nv(r, s, "recent" === c),
        d = nE(u),
        m = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.SteamReviews), o(t);
        }, [o, n, t]);
    return (0, i.jsx)(q.D, {
        onClick: m,
        className: nk.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: nk.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: nk.tN,
                    children: [
                        (0, i.jsx)(nA.N, { size: "sm", color: nj.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(Z.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    x.m,
                    {
                        text:
                            u === np.vI.NO_USER_REVIEWS
                                ? ex.intl.string(ex.t.CLMt8J)
                                : ex.intl
                                      .format(
                                          "recent" === c
                                              ? ex.t.TzvC0k
                                              : "localized" === c
                                                ? ex.t.EOfrwm
                                                : ex.t["lzANJ/"],
                                          { rating: r, rating_count: s?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: nk.Z0,
                            children: [
                                (0, i.jsx)(Q.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case np.vI.NO_USER_REVIEWS:
                                                return ex.intl.string(ex.t.CLMt8J);
                                            case np.vI.OVERWHELMINGLY_POSITIVE:
                                                return ex.intl.string(ex.t["75sx1S"]);
                                            case np.vI.VERY_POSITIVE:
                                                return ex.intl.string(ex.t["EkOVg+"]);
                                            case np.vI.POSITIVE:
                                                return ex.intl.string(ex.t.ZUkFtr);
                                            case np.vI.MOSTLY_POSITIVE:
                                                return ex.intl.string(ex.t.M7Z09a);
                                            case np.vI.MIXED:
                                                return ex.intl.string(ex.t.c8yuHR);
                                            case np.vI.MOSTLY_NEGATIVE:
                                                return ex.intl.string(ex.t.H0MSjG);
                                            case np.vI.NEGATIVE:
                                                return ex.intl.string(ex.t.vpLrgz);
                                            case np.vI.VERY_NEGATIVE:
                                                return ex.intl.string(ex.t["5spYuX"]);
                                            case np.vI.OVERWHELMINGLY_NEGATIVE:
                                                return ex.intl.string(ex.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != s &&
                                    u !== np.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(Q.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: ex.intl
                                            .format(ex.t.sgIoin, { rating_count: s.toLocaleString() })
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
        { reviews: r } = t,
        s = r?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = s.tier,
        o = s.topCriticRating ?? -1,
        u = s.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tn.A)(),
        x = a.useCallback(() => {
            l(O.GameProfileTrackActionActions.OpenCriticReviews), m(n);
        }, [m, l, n]);
    return (0, i.jsx)(q.D, {
        onClick: x,
        className: nk.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: nk.Ur,
            children: [
                (0, i.jsx)(Z.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: ex.intl.string(ex.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: nk.WA,
                    children: [
                        null != c ? (0, i.jsx)(nC, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(ny, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(Q.E, {
                                  variant: "text-xs/medium",
                                  color: nE(np.vI.NO_USER_REVIEWS),
                                  children: ex.intl.string(ex.t["0xYzpO"]),
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
                case nI.MIGHTY:
                    return ex.intl.string(ex.t.aZej2g);
                case nI.STRONG:
                    return ex.intl.string(ex.t.MLxnSg);
                case nI.FAIR:
                    return ex.intl.string(ex.t["3f19KA"]);
                case nI.WEAK:
                    return ex.intl.string(ex.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nI.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nI.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nI.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nI.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        x.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: nk.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function ny(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case nI.MIGHTY:
                    t = "#fc430a";
                    break;
                case nI.STRONG:
                    t = "#9e00b4";
                    break;
                case nI.FAIR:
                    t = "#4aa1ce";
                    break;
                case nI.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        x.m,
        {
            text: ex.intl.string(ex.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: nk.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nb, { rating: t, strokeColor: l }),
                    (0, i.jsx)(Q.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nk.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nR = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, nN.I)(t.id),
        a = t.opencriticUrl,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != l,
        s = t.reviews?.steam,
        c = nv(s?.recentRating, s?.recentRatingCount, !0),
        o = r && c !== np.vI.NO_USER_REVIEWS,
        d =
            null != s &&
            null != s.localizedRating &&
            null != s.localizedRatingCount &&
            null != s.ratingCount &&
            s.localizedRatingCount >= 200 &&
            s.ratingCount >= 2e3,
        m = d ? s?.localizedRating : s?.rating,
        x = d ? s?.localizedRatingCount : s?.ratingCount,
        g = d ? ex.t["aWb+V4"] : ex.t["8e4LiB"],
        h = t.reviews?.opencritic != null && null != a;
    return r || o || h
        ? (0, i.jsxs)("div", {
              className: nk.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: nk.Gf,
                      children: (0, i.jsx)(Z.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: ex.intl.string(ex.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: nk.kL,
                      children: [
                          o && null != l
                              ? (0, i.jsx)("div", {
                                    className: nk.WH,
                                    children: (0, i.jsx)(nS, {
                                        url: l,
                                        trackAction: n,
                                        title: ex.intl.string(ex.t.MQGNsN),
                                        rating: s?.recentRating,
                                        ratingCount: s?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != l
                              ? (0, i.jsx)("div", {
                                    className: nk.WH,
                                    children: (0, i.jsx)(nS, {
                                        url: l,
                                        trackAction: n,
                                        title: ex.intl.string(g),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          h && null != a
                              ? (0, i.jsx)("div", {
                                    className: nk.WH,
                                    children: (0, i.jsx)(nT, { game: t, url: a, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nG = n(839534),
    nL = n(674658),
    nP = n(722258),
    nO = n(258245),
    n_ = n(561769),
    nM = n(57020),
    nw = n(758836),
    nD = n(747828);
let nV = a.createContext({ trackAction: () => {} });
function nU(e) {
    let { skuId: t, aspectRatio: n } = e,
        { product: l } = (0, nL.q)(t, !0),
        r = a.useContext(n_.v3),
        { trackAction: s } = a.useContext(nV),
        c = a.useRef(null),
        o = a.useCallback(
            (e) => {
                s(O.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    null != l &&
                        ((c.current = e.currentTarget),
                        (0, nP.B)({
                            skuId: t,
                            analyticsLocations: [I.A.GAME_PROFILE],
                            analyticsSource: I.A.GAME_PROFILE,
                            shouldCheckoutWithOrbs: (0, nM.A)({ product: l }),
                            returnRef: c,
                        }));
            },
            [s, t, l],
        );
    if (null == l) return null;
    let { flattenProductVariants: u, ...d } = r;
    return (0, i.jsx)(n_.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...d },
        children: (0, i.jsx)(nO.A, {
            skuId: t,
            aspectRatio: n,
            cardClassName: nD.N,
            onClickCard: o,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
        }),
    });
}
function nY(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = K(),
        r = (function (e) {
            let { hasFetched: t, skuIds: n } = (0, d.cf)([_.A], () => ({
                hasFetched: null != e && _.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? _.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || _.A.isShopCollectionFetching(e) || eb(e);
                }, [e, t]),
                n ?? []
            );
        })(t.shopCollectionIds?.[0]),
        s = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nG.Cz)({
                    analyticsLocations: [I.A.GAME_PROFILE],
                    analyticsSource: I.A.GAME_PROFILE,
                    tab: nw.G2.CATALOG,
                });
        }, [n, l]),
        c = a.useMemo(() => ({ trackAction: n }), [n]);
    return 0 === r.length
        ? null
        : (0, i.jsx)(nV.Provider, {
              value: c,
              children: (0, i.jsx)(ew, {
                  title: ex.intl.string(ex.t["5DYPT8"]),
                  onClickViewAll: s,
                  children: (0, i.jsx)(en.A, { gap: "md", children: r.map((e) => (0, i.jsx)(nU, { skuId: e }, e)) }),
              }),
          });
}
var nF = n(435558),
    nW = n.n(nF),
    nB = n(921138),
    nH = n(311043);
let nz = [],
    nX = [];
var nK = n(607346);
function nJ(e) {
    let { game: t, trackClick: n } = e,
        { navigateToGame: l } = K(),
        { shouldOpenGameProfile: r, gameId: s } = (0, nB.Ay)({
            gameId: t.id,
            source: O.GameProfileSources.SimilarGames,
        }),
        c = a.useCallback(() => {
            n(O.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                r && null != s && l(s, O.GameProfileSources.SimilarGames);
        }, [t.id, s, n, r, l]);
    return (0, i.jsx)(x.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, i.jsx)(q.D, {
            className: nK.Nr,
            onClick: c,
            "aria-label": ex.intl.formatToPlainString(ex.t["8QLQB+"], { gameName: t.name }),
            children: (0, i.jsx)(tI.A, { game: t, className: nK.xe, size: tI.w.SMALL, imageSize: 256 }),
        }),
    });
}
function n$() {
    return (0, i.jsx)("div", { className: nK.nn });
}
function nq(e) {
    let { gameId: t, trackAction: n } = e,
        { enabled: l, dense: a } = D.useConfig({ location: "GameProfileSimilarGames" }),
        { isFetching: r, similarGames: s } = (function (e, t) {
            let n = t && !eN.has(e),
                { data: l, isLoading: i, error: a } = eS(e, n),
                r = n && null != l ? l : nz;
            (0, y.x)(r);
            let s = (0, d.bG)(
                    [nH.A],
                    () => r.some((e) => null == nH.A.getGame(e) && !nH.A.hasNoData(e) && !nH.A.didFetchingFail(e)),
                    [r],
                ),
                c = (0, d.yK)([nH.A, z.default], () => {
                    let e = z.default.getCurrentUser()?.nsfwAllowed;
                    return r
                        .map((e) => nH.A.getGame(e))
                        .filter((e) => null != e)
                        .filter((t) => (0, nB.T_)(t) && !(0, Y.b)(t, e));
                }, [r]);
            return n
                ? { isFetching: (null == a && null == l) || i || s, similarGames: c }
                : { isFetching: !1, similarGames: nX };
        })(t, l),
        c = a ? 8 : 5,
        o = { "--custom-similar-games-per-page": c, "--custom-cover-min-width": `${a ? 60 : 96}px` };
    return r
        ? (0, i.jsx)(ew, {
              title: ex.intl.string(ex.t["6rLyQB"]),
              children: (0, i.jsx)("div", {
                  className: nK.XG,
                  style: o,
                  children: (0, i.jsx)(en.A, {
                      gap: "md",
                      children: nW()
                          .range(0, c)
                          .map((e) => (0, i.jsx)(n$, {}, e)),
                  }),
              }),
          })
        : 0 === s.length
          ? null
          : (0, i.jsx)(ew, {
                title: ex.intl.string(ex.t["6rLyQB"]),
                children: (0, i.jsx)("div", {
                    className: nK.XG,
                    style: o,
                    children: (0, i.jsx)(en.A, {
                        gap: "md",
                        children: s.map((e) => (0, i.jsx)(nJ, { game: e, trackClick: n }, e.id)),
                    }),
                }),
            });
}
var nQ = n(871123),
    nZ = n(317560),
    n0 = n(467884),
    n1 = n(761812);
function n8(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        r = a.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    e.preventDefault(), l(n, i);
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(en.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: n1.B,
                          children: (0, i.jsx)(n0.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: n0.s.SMALL,
                              analyticsLocations: n,
                              onClick: r,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function n2(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: l } = K(),
        { analyticsLocations: r } = (0, N.Ay)([I.A.GAME_PROFILE]),
        s = a.useCallback(() => {
            n?.application != null &&
                (t(O.GameProfileTrackActionActions.GameShop),
                l(),
                (0, tw.default)({ applicationId: n.application.id }));
        }, [n, t, l]),
        c = a.useCallback(
            (e, i) => {
                let a = n?.guildId;
                null != a &&
                    (t(O.GameProfileTrackActionActions.GameShopItem),
                    (0, nZ.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, nQ.rG)(e, t, i, a) && l();
                        },
                    }));
            },
            [t, l, r, n],
        );
    if (null == n) return null;
    let { skuIds: o } = n;
    return (0, i.jsx)(ew, {
        title: ex.intl.string(ex.t.WDdlUb),
        onClickViewAll: s,
        children: (0, i.jsx)(n8, { skuIds: o, analyticsLocations: r, onCardClick: c }),
    });
}
n(667532);
var n4 = n(853022);
let n5 = new Set(["1402418703554842694", "356877880938070016"]),
    n6 = [eq.V.EPICGAMES, eq.V.STEAM, eq.V.ROBLOX, eq.V.BATTLENET, eq.V.RIOT, eq.V.MINECRAFT];
var n3 = n(349361),
    n7 = n(924895),
    n9 = n(422688),
    le = n(505200),
    lt = n(695250);
let ln = function (e) {
    switch (e.category) {
        case eq.V.STEAM:
            return {
                icon: nA.N,
                text: ex.intl.string(ex.t.FsANs4),
                ariaLabel: ex.intl.string(ex.t["P+ePTG"]),
                action: O.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case eq.V.EPICGAMES:
            return {
                icon: n3.r,
                text: ex.intl.string(ex.t.ZbBMHa),
                ariaLabel: ex.intl.string(ex.t.BwX0UW),
                action: O.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case eq.V.ROBLOX:
            return {
                icon: n7.H,
                text: ex.intl.string(ex.t["pJ+P+h"]),
                ariaLabel: ex.intl.string(ex.t.tYxpdf),
                action: O.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case eq.V.BATTLENET:
            return {
                icon: n9.a,
                text: ex.intl.string(ex.t["A7grp+"]),
                ariaLabel: ex.intl.string(ex.t.x9at20),
                action: O.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case eq.V.RIOT:
            return {
                icon: le.A,
                text: ex.intl.string(ex.t.h6MapL),
                ariaLabel: ex.intl.string(ex.t["528nvc"]),
                action: O.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case eq.V.MINECRAFT:
            return {
                icon: lt.m,
                text: ex.intl.string(ex.t["HZbmO+"]),
                ariaLabel: ex.intl.string(ex.t.WWTqYn),
                action: O.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: ts.Y,
                text: ex.intl.string(ex.t["QpN/Iz"]),
                ariaLabel: ex.intl.string(ex.t["8JZmmF"]),
                action: O.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function ll(e) {
    return (0, i.jsx)(g.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var li = n(48460);
function la(e) {
    let t,
        n,
        l,
        i,
        r,
        s =
            ((t = (0, nN.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eI.d3x.XBOX_GAME_PASS && !(0, e$.uJ)(e.id));
                return t?.id == null ? null : (0, n4.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (r = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== eq.V.EPICGAMES || !!n5.has(l)) &&
                            (e.category !== eq.V.STEAM || r !== u.Y.RETIRED_ABANDONED) &&
                            n6.includes(e.category),
                    ) ?? [];
                null == t ||
                    r === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === eq.V.STEAM) ||
                    e.push({ category: eq.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === eq.V.STEAM ? -1 : +(t.category === eq.V.STEAM)));
                return null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a;
            }, [t, i, l, r, n]));
    return { storeWebsites: s, showsStoreLinks: s.length > 0 && null != e };
}
function lr(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tn.A)();
    return (0, i.jsx)(ll, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            n(t.action), l(t.url);
        },
    });
}
let ls = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: r, storeWebsites: s } = la(t),
        c = a.useMemo(() => s.map(ln).filter((e) => null != e), [s]);
    if (!r) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lr, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: li.G,
            children: [(0, i.jsx)(lr, { data: c[0], trackAction: l }), (0, i.jsx)(lr, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(ll, {
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
    return s.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: li.G, children: [(0, i.jsx)(lr, { data: c[0], trackAction: l }), o] })
        : o;
};
var lc = n(123292);
function lo(e) {
    let { game: t, trackAction: n } = e,
        l = a.useRef(null),
        {
            isExpanded: r,
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
                return n.observe(t), () => n.disconnect();
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
        { isTwoColumn: u } = K(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = r ? ex.intl.string(ex.t["6MwJo/"]) : ex.intl.string(ex.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: s()(tu.fi, tu.mX),
        children: [
            (0, i.jsx)(Q.E, { ref: l, lineClamp: r ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(lc.Q, { onClick: o, text: m }),
        ],
    });
}
let lu = a.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, i.jsxs)("div", {
            className: tu.oC,
            children: [
                (0, i.jsxs)("div", {
                    className: tu.lM,
                    children: [
                        (0, i.jsx)(nf, { game: t, trackAction: n }),
                        (0, i.jsx)(lo, { game: t, trackAction: n }),
                    ],
                }),
                (0, i.jsx)(eK, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(n2, { trackAction: n }),
                (0, i.jsx)(nY, { game: t, trackAction: n }),
                (0, i.jsx)(nq, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    ld = a.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
        return (0, i.jsxs)("div", {
            className: tu.V0,
            children: [
                (0, i.jsx)(nf, { game: t, trackAction: n }),
                (0, i.jsxs)("div", {
                    className: tu.gr,
                    children: [
                        (0, i.jsx)(t9, { game: t, isTwoColumn: !1 }),
                        (0, i.jsxs)("div", {
                            className: tu.E1,
                            children: [
                                (0, i.jsx)(ls, { game: t, trackAction: n }),
                                (0, i.jsx)(lo, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(ni, { analyticsLocations: l, trackAction: n }),
                (0, i.jsx)(tv, { trackAction: n }),
                (0, i.jsx)(eK, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(n2, { trackAction: n }),
                (0, i.jsx)(nY, { game: t, trackAction: n }),
                (0, i.jsx)(nq, { gameId: t.id, trackAction: n }),
                a && (0, i.jsx)(nR, { game: t, trackAction: n }),
                (0, i.jsx)(tf, { game: t, trackAction: n }),
            ],
        });
    });
function lm(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: r } = K();
    (0, b.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let s = a.useCallback(() => {
        l(O.GameProfileTrackActionActions.CloudPlay), r(), t();
    }, [r, t, l]);
    return (0, i.jsx)(x.m, {
        text: ex.intl.string(ex.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(g.$, {
            icon: h.h,
            text: ex.intl.string(ex.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function lx(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: a } = e,
        r = (0, E.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: tu.NC,
              children: (0, i.jsx)(lm, { onCloudPlayClick: r, analyticsLocations: l, trackAction: a }),
          });
}
function lg(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = (0, v.A)(t.linkedApplications)?.id,
        [r] = (0, R.L)(t.getOfficialApplicationId()),
        [c] = (0, R.L)(t.id),
        { showsStoreLinks: o } = la(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: s()(tu.Pn, tu.fi, tu.iH, o ? tu.sV : tu.gF),
        children: [
            null == a || r || c
                ? null
                : (0, i.jsx)(lx, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: l, trackAction: n }),
            (0, i.jsxs)("div", {
                className: tu.V0,
                children: [
                    (0, i.jsx)(ls, { game: t, trackAction: n }),
                    (0, i.jsx)(ni, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tv, { trackAction: n }),
                    d && (0, i.jsx)(nR, { game: t, trackAction: n }),
                    (0, i.jsx)(tf, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function lh(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: r,
            onClose: c,
            appContext: u,
            trackExternalAction: x,
            initialScrollOffset: g,
            navigateToGame: h,
        } = e,
        [v, E] = a.useState(!0),
        [b, R] = a.useState(null),
        { clientThemesClassName: M } = (0, S.Ay)(),
        w = (0, d.bG)([P.default], () => P.default.locale),
        K = a.useMemo(() => (0, O.generateViewId)(), []),
        { analyticsLocations: J } = (0, N.Ay)(I.A.GAME_PROFILE),
        $ = (0, V.s)(t),
        { data: q } = (0, y.I)(t),
        Q = q?.name ?? "",
        Z = (0, Y.A)(q),
        ee = a.useRef(null);
    a.useEffect(() => {
        ee.current = b;
    }, [b]);
    let {
            hasAlreadyLinked: et,
            canStartAuthorization: en,
            fetched: el,
            startAuthorization: ei,
            connectionApp: ea,
        } = (0, k.RD)(q),
        { invite: er, isMember: es } = (0, U.A)(q, R),
        { socialLayerStorefrontRecommendationsData: ec } = (function (e) {
            let t = z.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                l = (0, d.bG)([W.A], () => (null != e ? W.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, F.h)(l),
                r = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: s, status: c } = (0, H.XQ)({
                    applicationIds: r,
                    userIds: n,
                    numItems: 6,
                    source: B.B5.USER_PROFILE,
                });
            return {
                socialLayerStorefrontRecommendationsData: a.useMemo(
                    () =>
                        null == i || null == i.guildId || "success" !== c || 0 === s.length
                            ? null
                            : { application: i, skuIds: s.map((e) => e.id), guildId: i.guildId },
                    [i, c, s],
                ),
            };
        })(t),
        eo = a.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, O.getGuildIdAndVerifiedFromInvite)(ee.current);
                (0, O.trackGameProfileAction)({
                    gameName: Q,
                    gameId: t,
                    action: e,
                    similarGameId: l,
                    viewId: K,
                    guildId: i,
                    isVerified: a,
                    source: n,
                });
            },
            [Q, t, K, n],
        );
    (0, p.Ay)(() => {
        (0, O.trackGameProfileOpen)({
            source: n,
            viewId: K,
            gameId: t,
            gameName: Q,
            authorId: l,
            profileType: O.GameProfileTypes.FullProfile,
        }),
            (0, T.He)();
    }),
        (0, p.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, O.getGuildIdAndVerifiedFromInvite)(ee.current),
                l = Date.now(),
                i = $.map((e) => {
                    let t = (0, C.JM)(e) ? (0, C.W6)(e, l) : (0, C.aJ)(e, w);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                }),
                a = D.getConfig({ location: "GameProfileModalClose" }).enabled;
            (0, O.trackGameProfileClose)({
                viewId: K,
                gameId: t,
                gameName: Q,
                playedFriendIds: $.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: a ? (_.A.getSimilarGames(t) ?? []) : [],
                guildId: n,
                isVerified: e,
            });
        });
    let eu = a.useCallback((e) => {
            E(e.contentRect.width >= 800);
        }, []),
        ed = (0, o.w)(eu, [], { fireOnMount: !0 }),
        em = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, f.closeAllModals)(), (0, L.closeUserProfileModal)()) : c();
            },
            [c],
        ),
        ex = a.useCallback(() => em(!1), [em]),
        eg = a.useRef(null),
        eh = a.useCallback(() => eg.current?.getScrollerNode()?.scrollTop ?? 0, []),
        ef = a.useMemo(
            () => ({
                isTwoColumn: v,
                canStartAuthorization: en,
                hasAlreadyLinked: et,
                fetchedAuthorization: el,
                startAuthorization: ei,
                connectionApp: ea,
                invite: er,
                isMember: es,
                socialLayerStorefrontRecommendationsData: ec,
                closeModal: em,
                navigateToGame: h,
                getScrollOffset: eh,
            }),
            [v, en, et, el, ei, ea, er, es, ec, em, h, eh],
        ),
        [eA, ej] = a.useState(!1),
        [ep, ev] = a.useState(150),
        eE = a.useRef(null);
    a.useEffect(() => {
        null != g && g > 0 && eg.current?.getScrollerNode()?.scrollTo({ top: g, behavior: "instant" });
    }, []);
    let eI = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != eE.current) {
                let e = Math.max(0, 1 - t / 150);
                eE.current.style.opacity = String(e);
            }
            ej(t >= ep);
        },
        [ep],
    );
    return null == q
        ? null
        : (0, i.jsx)(N.f5, {
              value: J,
              children: (0, i.jsx)(m.N, {
                  transitionState: r,
                  onClose: c,
                  children: (0, i.jsx)(X.Provider, {
                      value: ef,
                      children: (0, i.jsx)("div", {
                          className: s()(M, tu.kL),
                          ref: ed,
                          children: (0, i.jsxs)(G.A, {
                              obscured: Z,
                              onClose: ex,
                              children: [
                                  (0, i.jsx)(t6, { game: q, ref: eE }),
                                  (0, i.jsx)(t4, { game: q, show: eA, trackAction: eo }),
                                  (0, i.jsx)(t5, { show: eA }),
                                  (0, i.jsxs)(A.Ch, {
                                      ref: eg,
                                      onScroll: eI,
                                      children: [
                                          (0, i.jsx)(ne, {
                                              game: q,
                                              onSetCompactBarScrollThreshold: ev,
                                              showCompactBar: eA,
                                          }),
                                          (0, i.jsx)(j.F, {
                                              children: v
                                                  ? (0, i.jsxs)("div", {
                                                        className: tu.jC,
                                                        children: [
                                                            (0, i.jsx)(lu, { game: q, trackAction: eo }),
                                                            (0, i.jsx)(lg, {
                                                                game: q,
                                                                appContext: u,
                                                                source: n,
                                                                trackExternalAction: x,
                                                                trackAction: eo,
                                                                analyticsLocations: J,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: tu.b9,
                                                        children: (0, i.jsx)(ld, {
                                                            game: q,
                                                            trackAction: eo,
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
let lf = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: r, ...s } = e,
        [c, o] = a.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: r }),
        u = c.gameId,
        d = a.useCallback(
            (e, t) => {
                e !== u && ((0, U.U)(e), o({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, i.jsx)(
        lh,
        {
            gameId: c.gameId,
            source: c.source,
            sourceUserId: c.sourceUserId,
            initialScrollOffset: c.initialScrollOffset,
            navigateToGame: d,
            ...s,
        },
        c.gameId,
    );
};
