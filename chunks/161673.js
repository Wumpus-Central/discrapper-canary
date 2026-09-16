n.d(t, { default: () => lU });
var l,
    i = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    c = n(562708),
    o = n(535185),
    d = n(792216),
    u = n(17928),
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
    b = n(206828),
    S = n(587895),
    T = n(590703),
    C = n(180170),
    y = n(583846),
    L = n(569926),
    R = n(928550),
    G = n(570962),
    P = n(402860),
    O = n(773669),
    _ = n(409626),
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
    ed = n(708676),
    eu = n(383233),
    em = n(998218),
    ex = n(375708);
let eh = /^#{1,3}\s+(.+)$/,
    eg = /^https?:\/\/\S+$/;
var ef = n(60465),
    ej = n(158390),
    eA = n(636537),
    ep = n(228366),
    ev = n(927813),
    eE = n(371794),
    eN = n(652215);
let eI = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function ek(e) {
    ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
            await (0, eE.aP)({
                url: eN.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                query: { locale: O.default.locale },
                rejectWithError: !1,
                retries: 2,
            })
        ).body.products.flatMap((e) => e.sku_ids);
        ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
    } catch (t) {
        ep.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eb(e) {
    let t = ((await eA.Bo.get({ url: eN.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eI.has(t),
    );
    ep.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eS = (0, u.UT)(M.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => M.A.getSimilarGames(e) ?? null,
    load: (e) => eb(e),
    retryConfig: { backoff: () => new ej.A(5 * ev.A.Millis.SECOND, 5 * ev.A.Millis.MINUTE) },
    failureStaleAfter: ev.A.Seconds.MINUTE,
});
async function eT(e, t) {
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
                        if ((0, eu._c)(e))
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
                        if ((0, eu._c)(e)) {
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
                    d =
                        a === i || (0, eu._c)(l)
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
        ep.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eC = n(284009),
    ey = n.n(eC),
    eL = n(376728),
    eR = n(976860),
    eG = n(71393),
    eP = n(449054);
async function eO(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    ey()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eG.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(eN.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eP.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: eN.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eL.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eR.pX)(eN.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var e_ = n(320448),
    eM = n(493285);
let ew = { sm: eM.nz, md: eM.a };
function eD(e) {
    let { className: t, width: n } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(eM.qf, t), style: { width: n } });
}
function eV(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        a = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: l, style: a, children: n });
}
function eU(e) {
    let { className: t, size: n = "md" } = e;
    return (0, i.jsx)(eD, { className: r()(eM.x6, ew[n], t) });
}
var eF = n(406510);
function eY(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, i.jsxs)("div", {
        className: eF.kL,
        "aria-busy": !0,
        children: [
            (0, i.jsxs)("div", {
                className: eF.wR,
                children: [(0, i.jsx)(eD, { className: eF.Iz, width: n }), l && (0, i.jsx)(eU, { size: "sm" })],
            }),
            t,
        ],
    });
}
function eW(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: eF.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eF.wR,
                children: [
                    (0, i.jsx)(Z.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
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
var eB = n(949959);
function eH(e) {
    let { children: t, gap: n = "md" } = e;
    return (0, i.jsx)("div", { "aria-hidden": !0, className: r()(eB.n, { [eB.C]: 16 === n }), children: t });
}
var ez = n(235240),
    eX = n(165648);
function eK(e, t) {
    return el.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function eJ() {
    return (0, i.jsxs)(eV, {
        className: ez.s7,
        children: [
            (0, i.jsx)(eD, { className: ez.o$ }),
            (0, i.jsxs)("div", {
                className: ez.UF,
                children: [(0, i.jsx)(eD, { className: ez.iX }), (0, i.jsx)(eD, { className: ez.jt })],
            }),
        ],
    });
}
function e$(e, t) {
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
function eQ(e) {
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
                  className: ez.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function eq(e) {
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
        d = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        u = n.media?.proxyUrl ?? n.media?.url,
        m = null != u ? e$(u, d) : void 0,
        { embedSource: x } = n;
    return null == x
        ? null
        : (0, i.jsx)(Q.D, {
              className: c ? ez.jI : ez.IU,
              onClick: o,
              children: (0, i.jsxs)("div", {
                  className: c ? ez.GT : ez.s4,
                  children: [
                      null != x.url &&
                          (0, i.jsx)(q.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: ez.Ow,
                              children: x.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: ez._d,
                          style: null != x.color ? { borderInlineStartColor: x.color } : void 0,
                          children: [
                              null != x.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: ez.Tu,
                                      children: [
                                          null != x.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: x.authorIconUrl,
                                                  className: ez.SG,
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
                                      className: ez.ax,
                                      children: (0, i.jsx)(eQ, { message: n, src: m, aspectRatio: d }),
                                  }),
                              null != n.title &&
                                  (0, i.jsx)(Z.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: c ? ez.KX : ez._N,
                                      children: eK(n.title, l),
                                  }),
                              n.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(ez.h_, eX.PT),
                                      children: [eK(n.body, l), (0, i.jsx)("div", { className: ez.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: ez.ov,
                                  children: [
                                      null != x.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: x.providerIconUrl,
                                              className: ez.Cd,
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
                                              className: ez.a5,
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
let eZ = a.memo(function (e) {
    let { message: t, channelId: n, isMain: l } = e;
    return (0, i.jsxs)("div", {
        className: l ? ez.GT : ez.s4,
        children: [
            null != t.title &&
                (0, i.jsx)(Z.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: l ? ez.KX : ez._N,
                    children: eK(t.title, n),
                }),
            t.body.length > 0 &&
                (0, i.jsxs)("div", {
                    className: r()(ez.h_, eX.PT),
                    children: [eK(t.body, n), (0, i.jsx)("div", { className: ez.fm })],
                }),
            (0, i.jsxs)("div", {
                className: ez.ov,
                children: [
                    (0, i.jsx)(q.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, ei.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, i.jsxs)("div", {
                            className: ez.a5,
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
function e0(e) {
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
        d = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        u = n.media?.proxyUrl ?? n.media?.url,
        m = null != u ? e$(u, d) : void 0,
        x = null != n.media && null != m;
    return (0, i.jsxs)(Q.D, {
        className: r()({ [ez.cG]: c && x, [ez.jI]: c && !x, [ez.IU]: !c }),
        onClick: o,
        children: [
            null != n.media &&
                null != m &&
                (0, i.jsx)("div", {
                    className: c ? ez._v : ez.eZ,
                    children: (0, i.jsx)(eQ, { message: n, src: m, aspectRatio: d }),
                }),
            (0, i.jsx)(eZ, { message: n, channelId: l, isMain: c }),
        ],
    });
}
function e1(e) {
    let { variant: t, message: n, onCardClick: l } = e,
        s = "main" === t,
        { poll: r } = n,
        c = a.useCallback(() => l(n.id), [l, n.id]);
    if (null == r) return null;
    let o = r.answers.slice(0, 3),
        d = r.answers.length - o.length;
    return (0, i.jsx)(Q.D, {
        className: s ? ez.jI : ez.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: s ? ez.GT : ez.s4,
            children: [
                (0, i.jsx)(Z.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: ez.MH,
                    children: r.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: ez.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: ez.Nf,
                                    children: (0, i.jsx)(q.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: ez.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        d > 0 &&
                            (0, i.jsx)(q.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: ez.PF,
                                children: ex.intl.format(ex.t["mv/nIa"], { count: d }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ez.ov,
                    children: (0, i.jsx)(q.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: ex.intl.format(ex.t.t0FTsH, {
                            createdAt: new Date(n.timestamp),
                            expiryLabel: (0, ed.J)(r.expiry) ?? ex.intl.string(ex.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function e8(e) {
    return null != e.message.poll
        ? (0, i.jsx)(e1, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eq, { ...e })
          : (0, i.jsx)(e0, { ...e });
}
let e4 = a.memo(function (e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, I.Ay)(),
        { invite: s, hasDiscordWebsite: r, closeModal: c, getScrollOffset: o } = z(),
        {
            messages: d,
            guildId: m,
            channelId: x,
            loading: h,
            hasFetched: g,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, u.cf)([M.A], () => ({
                data: null != e ? M.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && M.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && M.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || n || M.A.isAnnouncementsFetching(e) || eT(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = a.useCallback(() => {
            let e = s?.guild?.id ?? m;
            null != e &&
                null != x &&
                (n(_.GameProfileTrackActionActions.Announcements),
                ef.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                c(),
                eO({ invite: s, guildId: e, channelId: x, analyticsLocationStack: l }));
        }, [n, c, o, s, m, x, l, t]),
        j = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? m;
                null != i &&
                    null != x &&
                    (n(_.GameProfileTrackActionActions.AnnouncementsItem),
                    ef.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: o() }),
                    c(),
                    eO({ invite: s, guildId: i, channelId: x, messageId: e, analyticsLocationStack: l }));
            },
            [n, c, o, s, m, x, l, t],
        ),
        A = null != x && d.length > 0;
    return (!g || h) && r
        ? (0, i.jsx)(eY, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, i.jsx)(eH, {
                  gap: 16,
                  children: K()
                      .range(3)
                      .map((e) => (0, i.jsx)(eJ, {}, e)),
              }),
          })
        : A
          ? (0, i.jsx)(eW, {
                title: ex.intl.string(ex.t.B0BV3Y),
                onClickViewAll: f,
                children: (0, i.jsx)(en.A, {
                    gap: 16,
                    children: d.map((e) =>
                        (0, i.jsx)(e8, { variant: "small", message: e, channelId: x, onCardClick: j }, e.id),
                    ),
                }),
            })
          : null;
});
var e5 = n(37537),
    e2 = n(541830),
    e3 = n(240248),
    e6 = n(505779),
    e7 = n(808380);
let e9 = [e7.Y.DESKTOP, e7.Y.XBOX, e7.Y.PLAYSTATION, e7.Y.NINTENDO];
var te = n(28863),
    tt = n(975807),
    tn = n(194362);
function tl(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(_.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, tn.a)(eN.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tt.A)(e);
        }, [n]),
        s = a.useCallback((e) => (0, i.jsx)(te.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === ea.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(q.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ex.intl.format(ex.t.KAjfKl, { claimLink: s }),
          });
}
var ti = n(998445),
    ta = n(274997),
    ts = n(80500),
    tr = n(319745),
    tc = n(488225),
    to = n(967492),
    td = n(72265),
    tu = n(454346),
    tm = n(37948),
    tx = n(750013);
let th = { size: "xs", colorClass: tx.wP };
function tg(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tm.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case e6.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(ti.GlobeEarthIcon, { ...t }),
                        action: _.GameProfileTrackActionActions.WebsiteLink,
                        title: ex.intl.string(ex.t.fOUKvg),
                    };
                case e6.V.TWITTER:
                    return {
                        icon: (0, i.jsx)(ta.p, { ...t }),
                        action: _.GameProfileTrackActionActions.XLink,
                        title: ex.intl.string(ex.t.INic4y),
                    };
                case e6.V.YOUTUBE:
                    return {
                        action: _.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, i.jsx)(ts.C, { ...t }),
                        title: ex.intl.string(ex.t.lNmxbE),
                    };
                case e6.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(tr.Z, { ...t }),
                        action: _.GameProfileTrackActionActions.FacebookLink,
                        title: ex.intl.string(ex.t.FjyREK),
                    };
                case e6.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(tc.L, { ...t }),
                        action: _.GameProfileTrackActionActions.InstagramLink,
                        title: ex.intl.string(ex.t["cgR+IK"]),
                    };
                case e6.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(to.a, { ...t }),
                        action: _.GameProfileTrackActionActions.BlueskyLink,
                        title: ex.intl.string(ex.t["D/PHq5"]),
                    };
                case e6.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(td.T, { ...t }),
                        action: _.GameProfileTrackActionActions.RedditLink,
                        title: ex.intl.string(ex.t["Hgb+fc"]),
                    };
                case e6.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(tu.a, { ...t }),
                        action: _.GameProfileTrackActionActions.TwitchLink,
                        title: ex.intl.string(ex.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, th),
        o = a.useCallback(() => {
            (n(s), l(t.url));
        }, [s, l, n, t.url]);
    return (0, i.jsx)(x.m, {
        text: c,
        children: (0, i.jsx)(Q.D, { onClick: o, className: tx.yO, title: c, children: r }),
    });
}
var tf = n(31300),
    tj = n(802516),
    tA = n(22363),
    tp = n(418524),
    tv = n(672572);
function tE(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case e7.Y.DESKTOP:
            return (0, i.jsx)(tf.k, { size: "xs", ...n });
        case e7.Y.XBOX:
            return (0, i.jsx)(tj.Y, { size: "xs", ...n });
        case e7.Y.PLAYSTATION:
            return (0, i.jsx)(tA.X, { size: "xs", ...n });
        case e7.Y.NINTENDO:
            return (0, i.jsx)(tp.M, { size: "xs", ...n });
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
                    case e7.Y.DESKTOP:
                        return ex.intl.string(ex.t.KT6uCJ);
                    case e7.Y.XBOX:
                        return ex.intl.string(ex.t.DDWUJp);
                    case e7.Y.PLAYSTATION:
                        return ex.intl.string(ex.t.fzMz2s);
                    case e7.Y.NINTENDO:
                        return ex.intl.string(ex.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(tE, { platform: t }),
        },
        t,
    );
}
var tI = n(424994),
    tk = n(422384);
function tb() {
    return (0, i.jsx)(q.E, { variant: "text-sm/normal", color: "text-subtle", children: ex.intl.string(ex.t.GruYxV) });
}
let tS = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, e5.c)("GameProfileGameDetails"),
        s = a.useMemo(() => t.genres.map(e2.du).join(", "), [t]),
        r = t.getCompanyByRole(ea.wk.PUBLISHER),
        c = t.getCompanyByRole(ea.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        d = c.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        m = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(e7.Y.DESKTOP) && (e.has(e7.Y.MACOS) || e.has(e7.Y.LINUX)) && n.push(e7.Y.DESKTOP),
                n.filter((e) => e9.includes(e)).sort((e, t) => e9.indexOf(e) - e9.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return e6.p.includes(t);
            })
            .sort((e, t) => e6.p.indexOf(e.category) - e6.p.indexOf(t.category)),
        h = !(0, e3.uJ)(s),
        g = !(0, e3.uJ)(o),
        f = !(0, e3.uJ)(d),
        j = !(0, e3.uJ)(u),
        A = m.length > 0,
        p = x.length > 0 && !x.every((e) => (0, e3.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tk.uW,
        children: [
            (0, i.jsx)("div", {
                className: tk.Gf,
                children: (0, i.jsx)(Z.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: ex.intl.string(ex.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tk.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tk.J1,
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
                                      className: tk.Gu,
                                      children: s,
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tk.J1,
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
                                      className: tk.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tk.J1,
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
                                      className: tk.Gu,
                                      children: d,
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tk.J1,
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
                                      className: tk.Gu,
                                      children: ei.i$(new Date(u), "LL"),
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tk.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? ex.intl.string(ex.t.PNqxNe) : ex.intl.string(ex.t["UxAag+"]),
                            }),
                            A
                                ? (0, i.jsx)("div", {
                                      className: tk.Gu,
                                      children: m.map((e) => (0, i.jsx)(tN, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tk.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["Oj3o1/"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: tk.Gu,
                                      children: x.map((e) => (0, i.jsx)(tg, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(tb, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tk.J1,
                        children: [
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ex.intl.string(ex.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tk.Gu,
                                children: ex.intl.format(ex.t.XPFZVl, { igdbLink: tI.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tk.OQ, children: (0, i.jsx)(tl, { game: t, trackAction: n }) }),
        ],
    });
};
var tT = n(714991),
    tC = n(486020),
    ty = n(992638);
function tL() {
    return (0, i.jsxs)(eV, {
        className: ty.uW,
        animationDelayMs: 300,
        children: [
            (0, i.jsx)(eD, { className: ty.dU, width: "30%" }),
            (0, i.jsx)(eV, {
                className: ty.nV,
                children: (0, i.jsxs)("div", {
                    className: ty.hQ,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ty.To,
                            children: [
                                (0, i.jsx)(eD, { className: ty.QV }),
                                (0, i.jsxs)("div", {
                                    className: ty.Yv,
                                    children: [
                                        (0, i.jsx)(eD, { className: ty.Ag }),
                                        (0, i.jsx)(eD, { className: ty.zl }),
                                        (0, i.jsx)(eD, { className: ty.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(eU, {}),
                    ],
                }),
            }),
        ],
    });
}
function tR(e) {
    let { guild: t } = e,
        n = tC.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, s] = a.useState(void 0),
        r = null != n && l !== n,
        c = a.useCallback(() => {
            s(n);
        }, [n]);
    return (0, i.jsxs)("div", {
        className: ty._C,
        children: [
            r && (0, i.jsx)(eD, { className: ty.EQ }),
            (0, i.jsx)("img", {
                className: ty.$f,
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
        d = a.useCallback(() => {
            null != l &&
                (t(_.GameProfileTrackActionActions.JoinServer),
                o(),
                ep.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: eN.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? s && r
            ? (0, i.jsx)(tL, {})
            : null
        : (0, i.jsxs)("div", {
              className: ty.uW,
              children: [
                  (0, i.jsx)(Z.D, {
                      className: ty.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: ex.intl.string(ex.t["U2N+ci"]),
                  }),
                  (0, i.jsx)("div", {
                      className: ty.kL,
                      children: (0, i.jsxs)("div", {
                          className: ty.hQ,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ty.To,
                                  children: [
                                      (0, i.jsx)(tR, { guild: l.guild }),
                                      (0, i.jsxs)("div", {
                                          className: ty.yj,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: ty.YS,
                                                  children: [
                                                      (0, i.jsx)(tT.A, { guild: l.guild, size: 16 }),
                                                      (0, i.jsx)(Z.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, e3.uJ)(l.guild?.description) &&
                                                  (0, i.jsx)(q.E, {
                                                      className: ty.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, i.jsxs)("div", {
                                                        className: ty.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, i.jsxs)("div", {
                                                                    className: ty.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: ty._o }),
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
                                                                    className: ty.Tb,
                                                                    children: [
                                                                        (0, i.jsx)("i", { className: ty.jk }),
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
                                  onClick: d,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var tP = n(369606),
    tO = n(459746),
    t_ = n(691540),
    tM = n(857250),
    tw = n(97483),
    tD = n(922016),
    tV = n(980707),
    tU = n(477782),
    tF = n(663341),
    tY = n(408278),
    tW = n(34188),
    tB = n(173936),
    tH = n(365199),
    tz = n(789645),
    tX = n(442433),
    tK = n(50268),
    tJ = n(44724),
    t$ = n(957565),
    tQ = n(695366),
    tq = n(540185),
    tZ = n(926268),
    t0 = n(53788),
    t1 = n(831453),
    t8 = n(785866),
    t4 = n(555704),
    t5 = n(47675),
    t2 = n(633075),
    t3 = n(289173),
    t6 = n(321191),
    t7 = n(958805),
    t9 = n(735321),
    ne = n(96173),
    nt = n(280450),
    nn = n(403362);
async function nl(e) {
    let t = e((0, t9.BF)());
    await t7.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function ni(e) {
    var t;
    let l,
        { game: s, className: r, trackAction: c } = e,
        o = a.useRef(null),
        d = a.useRef(null),
        m = (0, tK.A)({ id: s.id, label: ex.intl.string(ex.t.SHQGPj) }),
        g =
            ((t = s.id),
            (l = a.useCallback(() => {
                null != t &&
                    (c?.(_.GameProfileTrackActionActions.Feedback),
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
                : (0, i.jsx)(tU.Dr, {
                      id: "game-profile-something-wrong",
                      label: ex.intl.string(ex.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: tQ.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, u.bG)([nt.default], () => nt.default.getId()),
                s = a.useMemo(
                    () => [
                        {
                            type: tq.x.FAVORITE_GAMES,
                            addLabel: ex.intl.string(ex.t.fgmitg),
                            removeLabel: ex.intl.string(ex.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tZ.HeartIcon,
                        },
                        {
                            type: tq.x.PLAYED_GAMES,
                            addLabel: ex.intl.string(ex.t["0xIVLR"]),
                            removeLabel: ex.intl.string(ex.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: t0.G,
                        },
                        {
                            type: tq.x.CURRENT_GAMES,
                            addLabel: ex.intl.string(ex.t.G0c4En),
                            removeLabel: ex.intl.string(ex.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: t1.H,
                        },
                        {
                            type: tq.x.WANT_TO_PLAY_GAMES,
                            addLabel: ex.intl.string(ex.t.UuBS4K),
                            removeLabel: ex.intl.string(ex.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: t8._,
                        },
                    ],
                    [],
                ),
                r = (0, u.yK)([t6.A], () => (null == l ? [] : (t6.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, ne.A)(),
                o = a.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof t2.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(nn.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                d = a.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await nl((i) => {
                                let a = i.filter(t3.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, t9.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new t3.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new t3.Yy({ ...a, games: e });
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
                            (await nl((n) =>
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
            let x = null != e && (0, t9.XX)(e),
                h = [];
            if (null != o) {
                let e = r.some((e) => e instanceof t2.R && e.applicationId === o);
                h.push(
                    (0, i.jsx)(
                        tU.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? ex.intl.formatToPlainString(ex.t.Ktb1n8, { name: n })
                                : ex.intl.formatToPlainString(ex.t.Xp6iZt, { name: n }),
                            action: () => m(!e),
                            leadingAccessory: { type: "icon", icon: t4.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of s) {
                    let n = r.filter(t3.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        a = !l && null != n && (0, t9.uA)(n);
                    h.push(
                        (0, i.jsx)(
                            tU.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? ex.intl.string(ex.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => d(e.type, !l),
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
        p = (0, u.bG)([F.A], () => F.A.getApplicationIdFromDetectableId(s.id)),
        v = (0, u.bG)([F.A], () => F.A.hasStorefrontForApplicationId(p), [p]),
        E = a.useCallback(() => {
            null != p && (0, tJ.G)({ applicationId: p });
        }, [p]),
        N = a.useCallback(() => {
            null != p && (c(_.GameProfileTrackActionActions.GameShop), (0, tJ.default)({ applicationId: p }), A());
        }, [p, c, A]),
        I = a.useCallback(() => A(!1), [A]),
        k = a.useCallback(() => {
            c(_.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eN.BVt.GAME_PROFILE(s.id)}`;
            (0, t$.C)(e, () => {
                (0, t_.P0)((0, tM.o)(ex.intl.string(ex.t["+5kSoW"]), tw.Ck.SUCCESS));
            });
        }, [s.id, c]);
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            null != j &&
                (0, i.jsx)(tD.Y, {
                    targetElementRef: d,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tV.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, tX.Z_)(), t());
                            },
                            "aria-label": ex.intl.string(ex.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tU.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: d,
                            children: (0, i.jsx)(h.$, {
                                icon: tF.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: ex.intl.string(ex.t.sidPSo),
                            }),
                        }),
                }),
            v &&
                (0, i.jsx)(x.m, {
                    text: ex.intl.string(ex.t.apFNLU),
                    children: (0, i.jsx)(tY.K, {
                        icon: tW.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": ex.intl.string(ex.t.apFNLU),
                        onMouseDown: E,
                        onClick: N,
                    }),
                }),
            (0, i.jsx)(x.m, {
                text: ex.intl.string(ex.t.WqhZss),
                children: (0, i.jsx)(tY.K, {
                    icon: tB.LinkIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": ex.intl.string(ex.t.WqhZss),
                    onClick: k,
                }),
            }),
            (null != m || null != g) &&
                (0, i.jsx)(tD.Y, {
                    targetElementRef: o,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tV.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, tX.Z_)(), t());
                            },
                            "aria-label": ex.intl.string(ex.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tU.rX, { children: g }), (0, i.jsx)(tU.rX, { children: m })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(x.m, {
                            text: ex.intl.string(ex.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: o,
                                children: (0, i.jsx)(tY.K, {
                                    icon: tH.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": ex.intl.string(ex.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tY.K, {
                icon: tz.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: I,
                "aria-label": ex.intl.string(ex.t.cpT0Cq),
            }),
        ],
    });
}
var na = n(732369);
function ns(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: na.y5,
        children: [
            (0, i.jsx)("div", { className: r()(na.nI, n && na.hD) }),
            (0, i.jsxs)("div", {
                className: r()(na.A1, n && na.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: na.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: na.hm,
                        children: [
                            (0, i.jsx)(Z.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(nd, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(ni, { game: t, className: na.HK, trackAction: l }),
        ],
    });
}
function nr(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(na.nI, na.Jn, t && na.hD) });
}
let nc = a.forwardRef(function (e, t) {
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
    return (0, e3.uJ)(l)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: na.y1, style: { backgroundImage: `url("${l}")` } }),
                  (0, i.jsx)("div", { className: na.N4 }),
              ],
          });
});
function no(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(e2.du).join(", ");
    return (0, e3.uJ)(n) ? null : (0, i.jsx)(q.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function nd(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: na.Qc,
        children: [
            (0, i.jsx)(tP.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(q.E, {
                variant: "text-xs/bold",
                color: "none",
                children: ex.intl.formatToPlainString(ex.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function nu(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: n ? na.n8 : na.FS,
        children: (0, i.jsx)(tO.A, { game: t, className: na.xe, size: tO.w.LARGE }),
    });
}
let nm = function (e) {
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
    let d = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: r()(na.ap, l && na.Gh),
        children: [
            s &&
                (0, i.jsx)("div", {
                    className: na.Tf,
                    children: (0, i.jsx)(tO.A, { game: t, className: na.w$, size: tO.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: na.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(nd, { rank: t.l30Rank }),
                    (0, i.jsx)(Z.D, { ref: o, variant: "heading-xxl/semibold", children: d }),
                    (0, i.jsx)(no, { game: t }),
                ],
            }),
        ],
    });
};
var nx = n(141628),
    nh = n(289363),
    ng = n(134131);
function nf() {
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: ng.uW,
        children: [
            (0, i.jsx)(eD, { className: ng.dU, width: "30%" }),
            (0, i.jsxs)(eV, {
                className: ng.nV,
                children: [
                    (0, i.jsx)("div", { className: ng.sB, children: (0, i.jsx)(nh.default, { isLoading: !0 }) }),
                    (0, i.jsxs)("div", {
                        className: ng.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ng.Yv,
                                children: [(0, i.jsx)(eD, { width: "55%" }), (0, i.jsx)(eD, { width: "85%" })],
                            }),
                            (0, i.jsx)(eU, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function nj(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, e5.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: s,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: d,
            hasOfficialApplication: m,
            officialApplicationFetchFailed: x,
        } = z(),
        g = (0, u.bG)([B.default], () => B.default.getCurrentUser()),
        f = a.useCallback(() => {
            (t(_.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !m || x || null == g
        ? null
        : null == d || (c && !s)
          ? (0, i.jsx)(nf, {})
          : !c || r
            ? null
            : (0, i.jsxs)("div", {
                  className: ng.uW,
                  children: [
                      (0, i.jsx)(Z.D, {
                          className: ng.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: ex.intl.string(ex.t["VDAhr+"]),
                      }),
                      (0, i.jsxs)("div", {
                          className: ng.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: ng.sB,
                                  children: (0, i.jsx)(nh.default, { application: d }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: ng.hQ,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: ng.FS,
                                          children: [
                                              (0, i.jsx)(Z.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: ex.intl.formatToPlainString(ex.t.hUbQT2, {
                                                      gameName: d.name,
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
                                          icon: nx.A,
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
var nA = n(635377),
    np = n.n(nA),
    nv = n(80687),
    nE = n(775602),
    nN = n(534573),
    nI = n(248643),
    nk = n(256905),
    nb = n(85935),
    nS = n(191096),
    nT = n(90721),
    nC = n(258924);
function ny(e, t) {
    return (0, nN.Ec)(e, { size: t, keepAspectRatio: !0, format: tC.QB ? "webp" : null });
}
let nL = new (np())({ max: 100 }),
    nR = a.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [s, c] = a.useState(null),
            o = null != s && s.url === t ? s.isPortrait : (nL.get(t) ?? !1),
            d = a.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (nL.set(t, n),
                        c((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            u = a.useCallback((e) => d(e.currentTarget), [d]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", {
                    ref: d,
                    src: ny(t, 106),
                    className: r()(nC.r4, !o && nC.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: u,
                }),
                (0, i.jsx)("img", { ref: d, src: ny(t, 900), className: r()(nC.c8, o && nC.D7, l), alt: n, onLoad: u }),
            ],
        });
    }),
    nG = a.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: s, isPlaying: c, onSelect: o, gameName: d } = e,
            u = a.useCallback(() => o(l), [o, l]);
        return (0, i.jsx)(Q.D, {
            className: r()(nC.JS, s && nC.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: nC.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: ny("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: nC.xn,
                        alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: d }),
                        loading: "lazy",
                        decoding: "async",
                        draggable: !1,
                    }),
                    "VIDEO" === n.type &&
                        (0, i.jsx)("div", {
                            className: nC.UZ,
                            children: (0, i.jsx)(nv.D, { playing: s && c, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    nP = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: n,
                autoPlay: l,
                videoRef: s,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: d,
            } = e,
            u = a.useRef(null);
        return (
            (0, nT.A)({ videoRef: s, canvasRef: u, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: u, className: nC.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: nC.tN,
                        children: (0, i.jsx)(nI.A, {
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
                            renderLinkComponent: nb.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: d,
                            mediaPlayerClassName: nC.T9,
                            videoRef: s,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nO(e) {
    let { game: t, trackAction: n } = e,
        [l, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, d] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, u.bG)([nE.Ay], () => nE.Ay.useReducedMotion),
        { obscured: g } = (0, nS.I3)();
    o !== t.screenshotUrls && (d(t.screenshotUrls), s(0));
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
        j = f.length > 0 ? Math.min(l, f.length - 1) : 0,
        A = f[j],
        p = A?.type === "VIDEO",
        v = a.useCallback(
            (e) => {
                let t = f[j],
                    n = f[e];
                (t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), s(e));
            },
            [f, j],
        ),
        [E, N] = a.useState(!1),
        I = a.useRef(null),
        k = a.useCallback(() => {
            n(p ? _.GameProfileTrackActionActions.ClickTrailer : _.GameProfileTrackActionActions.ClickImage);
            let e = m.current,
                t = I.current,
                l = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === j;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || i, initialTimeSec: n ? a : void 0, videoRef: x };
                }
                return e;
            });
            (0, nk.R)({
                items: r,
                startingIndex: j,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: s,
                onClose: () => {
                    let e = x.current,
                        t = I.current,
                        n = null != e ? !e.paused : l;
                    (e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted))
                            : n && t?.setPlay(!0),
                        N(n));
                },
            });
        }, [n, f, j, p]),
        b = a.useCallback(() => N(!0), []),
        S = a.useCallback(() => N(!1), []),
        T = a.useCallback(() => c(null), []),
        C = a.useCallback(
            (e) => {
                e && k();
            },
            [k],
        );
    return 0 === f.length
        ? null
        : (0, i.jsxs)("div", {
              className: nC.kL,
              children: [
                  p
                      ? (0, i.jsx)("div", {
                            className: nC.ND,
                            children: (0, i.jsx)(
                                nP,
                                {
                                    item: A,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: I,
                                    onPlay: b,
                                    onPause: S,
                                    onFullscreenChange: C,
                                },
                                `${j}-${A.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: nC.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: nC.Jy,
                                            onAnimationEnd: T,
                                            children: (0, i.jsx)(nR, { url: r, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: nC.QN }),
                                (0, i.jsx)(Q.D, {
                                    className: nC.gv,
                                    onClick: k,
                                    children: (0, i.jsx)("div", {
                                        className: nC.cs,
                                        children: (0, i.jsx)(
                                            nR,
                                            {
                                                url: A.url,
                                                className: nC.Jf,
                                                alt: ex.intl.formatToPlainString(ex.t.COYYrn, { game: t.name }),
                                            },
                                            A.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  (0, i.jsx)(en.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: f.map((e, n) =>
                          (0, i.jsx)(
                              nG,
                              { item: e, index: n, isPlaying: E, isSelected: n === j, onSelect: v, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var n_ = n(49381),
    nM = n(661531),
    nw = n(223273);
function nD(e, t, n) {
    if (null == e || null == t || t < 10) return nw.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nw.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nw.vI.VERY_POSITIVE
              : nw.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nw.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nw.vI.MIXED;
    if (e >= 20) return nw.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nw.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nw.vI.VERY_NEGATIVE;
    return nw.vI.OVERWHELMINGLY_NEGATIVE;
}
function nV(e) {
    switch (e) {
        case nw.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nw.vI.OVERWHELMINGLY_POSITIVE:
        case nw.vI.VERY_POSITIVE:
        case nw.vI.POSITIVE:
        case nw.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nw.vI.MIXED:
            return "steam-review-text-mixed";
        case nw.vI.MOSTLY_NEGATIVE:
        case nw.vI.NEGATIVE:
        case nw.vI.VERY_NEGATIVE:
        case nw.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var nU =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nF = n(778591);
function nY(e) {
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
var nW = n(255417);
function nB(e) {
    let { url: t, trackAction: n, title: l, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tm.A)(),
        d = nD(s, r, "recent" === c),
        u = nV(d),
        m = a.useCallback(() => {
            (n(_.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, i.jsx)(Q.D, {
        onClick: m,
        className: nW.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: nW.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: nW.tN,
                    children: [
                        (0, i.jsx)(n_.N, { size: "sm", color: nM.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(Z.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    x.m,
                    {
                        text:
                            d === nw.vI.NO_USER_REVIEWS
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
                            className: nW.Z0,
                            children: [
                                (0, i.jsx)(q.E, {
                                    variant: "text-xs/medium",
                                    color: u,
                                    className: nW.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case nw.vI.NO_USER_REVIEWS:
                                                return ex.intl.string(ex.t.CLMt8J);
                                            case nw.vI.OVERWHELMINGLY_POSITIVE:
                                                return ex.intl.string(ex.t["75sx1S"]);
                                            case nw.vI.VERY_POSITIVE:
                                                return ex.intl.string(ex.t["EkOVg+"]);
                                            case nw.vI.POSITIVE:
                                                return ex.intl.string(ex.t.ZUkFtr);
                                            case nw.vI.MOSTLY_POSITIVE:
                                                return ex.intl.string(ex.t.M7Z09a);
                                            case nw.vI.MIXED:
                                                return ex.intl.string(ex.t.c8yuHR);
                                            case nw.vI.MOSTLY_NEGATIVE:
                                                return ex.intl.string(ex.t.H0MSjG);
                                            case nw.vI.NEGATIVE:
                                                return ex.intl.string(ex.t.vpLrgz);
                                            case nw.vI.VERY_NEGATIVE:
                                                return ex.intl.string(ex.t["5spYuX"]);
                                            case nw.vI.OVERWHELMINGLY_NEGATIVE:
                                                return ex.intl.string(ex.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(d),
                                }),
                                null != r &&
                                    d !== nw.vI.NO_USER_REVIEWS &&
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
function nH(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        d = r.topCriticRatingCount ?? -1,
        u = (o <= 0 || d <= 0) && null == c,
        m = (0, tm.A)(),
        x = a.useCallback(() => {
            (l(_.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, i.jsx)(Q.D, {
        onClick: x,
        className: nW.nf,
        role: "link",
        "aria-label": ex.intl.string(ex.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: nW.Ur,
            children: [
                (0, i.jsx)(Z.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: ex.intl.string(ex.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: nW.WA,
                    children: [
                        null != c ? (0, i.jsx)(nz, { tier: c }) : null,
                        null != c && o > 0 && d > 0 ? (0, i.jsx)(nX, { rating: o, tier: c }) : null,
                        u
                            ? (0, i.jsx)(q.E, {
                                  variant: "text-xs/medium",
                                  color: nV(nw.vI.NO_USER_REVIEWS),
                                  children: ex.intl.string(ex.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nz(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case nU.MIGHTY:
                    return ex.intl.string(ex.t.aZej2g);
                case nU.STRONG:
                    return ex.intl.string(ex.t.MLxnSg);
                case nU.FAIR:
                    return ex.intl.string(ex.t["3f19KA"]);
                case nU.WEAK:
                    return ex.intl.string(ex.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case nU.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case nU.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case nU.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case nU.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        x.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: nW.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nX(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case nU.MIGHTY:
                    t = "#fc430a";
                    break;
                case nU.STRONG:
                    t = "#9e00b4";
                    break;
                case nU.FAIR:
                    t = "#4aa1ce";
                    break;
                case nU.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        x.m,
        {
            text: ex.intl.string(ex.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: nW.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nY, { rating: t, strokeColor: l }),
                    (0, i.jsx)(q.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nW.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nK = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, e5.c)("GameProfileReviews"),
        a = (0, nF.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED && null != a,
        c = t.reviews?.steam,
        o = nD(c?.recentRating, c?.recentRatingCount, !0),
        u = r && o !== nw.vI.NO_USER_REVIEWS,
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
    return r || u || f
        ? (0, i.jsxs)("div", {
              className: nW.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: nW.Gf,
                      children: (0, i.jsx)(Z.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: ex.intl.string(ex.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: nW.kL,
                      children: [
                          u && null != a
                              ? (0, i.jsx)("div", {
                                    className: nW.WH,
                                    children: (0, i.jsx)(nB, {
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
                                    className: nW.WH,
                                    children: (0, i.jsx)(nB, {
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
                                    className: nW.WH,
                                    children: (0, i.jsx)(nH, { game: t, url: s, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var nJ = n(839534),
    n$ = n(722258),
    nQ = n(258245),
    nq = n(561769),
    nZ = n(484469),
    n0 = n(57020),
    n1 = n(682301);
let n8 = [];
var n4 = n(758836),
    n5 = n(747828);
let n2 = [0, 1, 2, 3, 4],
    n3 = a.createContext({ trackAction: () => {} });
function n6(e) {
    let { product: t, aspectRatio: n } = e,
        { skuId: l } = t,
        s = a.useContext(nq.v3),
        { trackAction: r } = a.useContext(n3),
        c = a.useRef(null),
        o = a.useCallback(
            (e) => {
                (r(_.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (c.current = e.currentTarget),
                    (0, n$.B)({
                        skuId: l,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, n0.A)({ product: t }),
                        returnRef: c,
                    }));
            },
            [r, l, t],
        ),
        { flattenProductVariants: d, ...u } = s;
    return (0, i.jsx)(nq.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...u, productOverride: t },
        children: (0, i.jsx)(nQ.A, {
            skuId: l,
            aspectRatio: n,
            cardClassName: n5.N,
            onClickCard: o,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
        }),
    });
}
function n7() {
    return (0, i.jsx)(nZ.A, {});
}
function n9(e) {
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
                    } = (0, u.cf)([M.A], () => ({
                        hasFetched: null != e && M.A.hasShopCollectionBeenFetched(e),
                        isFetching: null != e && M.A.isShopCollectionFetching(e),
                        skuIds: null != e ? M.A.getShopCollectionSkuIds(e) : void 0,
                    }));
                    return (
                        (0, a.useEffect)(() => {
                            null == e || t || M.A.isShopCollectionFetching(e) || ek(e);
                        }, [e, t]),
                        { skuIds: l ?? n8, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, n1.hv)(t, { flattenVariants: !0 }),
                s = (0, a.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: s, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = a.useCallback(() => {
            (n(_.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nJ.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: n4.G2.CATALOG,
                }));
        }, [n, l]),
        o = a.useMemo(() => ({ trackAction: n }), [n]);
    return r
        ? (0, i.jsx)(eY, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, i.jsx)(eH, { children: n2.map((e) => (0, i.jsx)(n7, {}, e)) }),
          })
        : 0 === s.length
          ? null
          : (0, i.jsx)(n3.Provider, {
                value: o,
                children: (0, i.jsx)(eW, {
                    title: ex.intl.string(ex.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: (0, i.jsx)(en.A, {
                        gap: "md",
                        children: s.map((e) => (0, i.jsx)(n6, { product: e }, e.skuId)),
                    }),
                }),
            });
}
var le = n(921138),
    lt = n(311043);
let ln = [],
    ll = [];
var li = n(607346);
let la = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function ls(e) {
    let { className: t } = e;
    return (0, i.jsx)(eV, { className: t, children: (0, i.jsx)(eD, { className: li.Lg }) });
}
function lr(e) {
    let { game: t, trackClick: n } = e,
        { navigateToGame: l } = z(),
        s = t.getCoverURL(256),
        [r, c] = a.useState(null),
        o = null == s || r === s,
        { shouldOpenGameProfile: d, gameId: u } = (0, le.Ay)({
            gameId: t.id,
            source: _.GameProfileSources.SimilarGames,
        }),
        m = a.useCallback(() => {
            (n(_.GameProfileTrackActionActions.ClickSimilarGame, t.id),
                d && null != u && l(u, _.GameProfileSources.SimilarGames));
        }, [t.id, u, n, d, l]),
        h = a.useCallback(() => c(s), [s]);
    return (0, i.jsx)(x.m, {
        text: t.name,
        ariaHidden: !0,
        children: (0, i.jsxs)(Q.D, {
            className: li.Nr,
            onClick: m,
            "aria-label": ex.intl.formatToPlainString(ex.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, i.jsx)(tO.A, {
                    game: t,
                    className: li.xe,
                    size: tO.w.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !o && (0, i.jsx)(ls, { className: li.uz }),
            ],
        }),
    });
}
function lc(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: a } = (function (e) {
            let t = !eI.has(e),
                { data: n, isLoading: l, error: i } = eS(e, t),
                a = t && null != n ? n : ln;
            (0, L.x)(a);
            let s = (0, u.bG)(
                    [lt.A],
                    () => a.some((e) => null == lt.A.getGame(e) && !lt.A.hasNoData(e) && !lt.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, u.yK)(
                    [lt.A, B.default],
                    () => {
                        let e = B.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => lt.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, le.T_)(t) && !(0, V.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: ll };
        })(t);
    return eI.has(t)
        ? null
        : l
          ? (0, i.jsx)(eY, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, i.jsx)("div", {
                    className: li.XG,
                    style: la,
                    children: (0, i.jsx)(eH, {
                        children: K()
                            .range(0, 8)
                            .map((e) => (0, i.jsx)(ls, { className: li.aZ }, e)),
                    }),
                }),
            })
          : 0 === a.length
            ? null
            : (0, i.jsx)(eW, {
                  title: ex.intl.string(ex.t["6rLyQB"]),
                  children: (0, i.jsx)("div", {
                      className: li.XG,
                      style: la,
                      children: (0, i.jsx)(en.A, {
                          gap: "md",
                          children: a.map((e) => (0, i.jsx)(lr, { game: e, trackClick: n }, e.id)),
                      }),
                  }),
              });
}
var lo = n(871123),
    ld = n(317560),
    lu = n(445881),
    lm = n(761812);
function lx(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: lm.B, children: t });
}
function lh(e) {
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
                      lx,
                      {
                          children: (0, i.jsx)(lu.Ay, {
                              positionInSection: t,
                              skuId: e,
                              variant: lu.s6.SMALL,
                              analyticsLocations: n,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
let lg = [0, 1, 2, 3];
function lf() {
    return (0, i.jsx)(eY, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, i.jsx)(eH, { children: lg.map((e) => (0, i.jsx)(lx, { children: (0, i.jsx)(lu.yf, {}) }, e)) }),
    });
}
function lj(e) {
    let { trackAction: t } = e,
        {
            socialLayerStorefrontRecommendationsData: n,
            socialLayerStorefrontRecommendationsLoading: l,
            closeModal: s,
        } = z(),
        { analyticsLocations: r } = (0, I.Ay)([N.A.GAME_PROFILE]),
        c = a.useCallback(() => {
            n?.application != null &&
                (t(_.GameProfileTrackActionActions.GameShop),
                s(),
                (0, tJ.default)({ applicationId: n.application.id }));
        }, [n, t, s]),
        o = a.useCallback(
            (e, l) => {
                let i = n?.guildId;
                null != i &&
                    (t(_.GameProfileTrackActionActions.GameShopItem),
                    (0, ld.R)({
                        skuId: e,
                        applicationId: l,
                        isStorefront: !1,
                        analyticsLocations: r,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lo.rG)(e, t, l, i) && s();
                        },
                    }));
            },
            [t, s, r, n],
        );
    if (l) return (0, i.jsx)(lf, {});
    if (null == n) return null;
    let { skuIds: d } = n;
    return (0, i.jsx)(eW, {
        title: ex.intl.string(ex.t.WDdlUb),
        onClickViewAll: c,
        children: (0, i.jsx)(lh, { skuIds: d, analyticsLocations: r, onCardClick: o }),
    });
}
n(667532);
var lA = n(853022);
let lp = new Set(["1402418703554842694", "356877880938070016"]),
    lv = [e6.V.EPICGAMES, e6.V.STEAM, e6.V.ROBLOX, e6.V.BATTLENET, e6.V.RIOT, e6.V.MINECRAFT];
var lE = n(349361),
    lN = n(924895),
    lI = n(422688),
    lk = n(505200),
    lb = n(695250);
let lS = function (e) {
    switch (e.category) {
        case e6.V.STEAM:
            return {
                icon: n_.N,
                text: ex.intl.string(ex.t.FsANs4),
                ariaLabel: ex.intl.string(ex.t["P+ePTG"]),
                action: _.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case e6.V.EPICGAMES:
            return {
                icon: lE.r,
                text: ex.intl.string(ex.t.ZbBMHa),
                ariaLabel: ex.intl.string(ex.t.BwX0UW),
                action: _.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case e6.V.ROBLOX:
            return {
                icon: lN.H,
                text: ex.intl.string(ex.t["pJ+P+h"]),
                ariaLabel: ex.intl.string(ex.t.tYxpdf),
                action: _.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case e6.V.BATTLENET:
            return {
                icon: lI.a,
                text: ex.intl.string(ex.t["A7grp+"]),
                ariaLabel: ex.intl.string(ex.t.x9at20),
                action: _.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case e6.V.RIOT:
            return {
                icon: lk.A,
                text: ex.intl.string(ex.t.h6MapL),
                ariaLabel: ex.intl.string(ex.t["528nvc"]),
                action: _.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case e6.V.MINECRAFT:
            return {
                icon: lb.m,
                text: ex.intl.string(ex.t["HZbmO+"]),
                ariaLabel: ex.intl.string(ex.t.WWTqYn),
                action: _.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tj.Y,
                text: ex.intl.string(ex.t["QpN/Iz"]),
                ariaLabel: ex.intl.string(ex.t["8JZmmF"]),
                action: _.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function lT(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var lC = n(48460);
function ly(e) {
    let t,
        n,
        l,
        i,
        s,
        r =
            ((t = (0, nF.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eN.d3x.XBOX_GAME_PASS && !(0, e3.uJ)(e.id));
                return t?.id == null ? null : (0, lA.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== e6.V.EPICGAMES || !!lp.has(l)) &&
                            (e.category !== e6.V.STEAM || s !== d.Y.RETIRED_ABANDONED) &&
                            lv.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === d.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === e6.V.STEAM) ||
                    e.push({ category: e6.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === e6.V.STEAM ? -1 : +(t.category === e6.V.STEAM)));
                return (null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a);
            }, [t, i, l, s, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function lL(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tm.A)();
    return (0, i.jsx)(lT, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            (n(t.action), l(t.url));
        },
    });
}
let lR = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: s, storeWebsites: r } = ly(t),
        c = a.useMemo(() => r.map(lS).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lL, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: lC.G,
            children: [(0, i.jsx)(lL, { data: c[0], trackAction: l }), (0, i.jsx)(lL, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(lT, {
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
        ? (0, i.jsxs)("div", { className: lC.G, children: [(0, i.jsx)(lL, { data: c[0], trackAction: l }), o] })
        : o;
};
var lG = n(123292);
function lP(e) {
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
                    ? (t(_.GameProfileTrackActionActions.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(_.GameProfileTrackActionActions.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: d } = z(),
        u = a.useMemo(() => (d ? 8 : 5), [d]);
    if (null == t.description) return null;
    let m = s ? ex.intl.string(ex.t["6MwJo/"]) : ex.intl.string(ex.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tv.fi, tv.mX),
        children: [
            (0, i.jsx)(q.E, {
                ref: l,
                className: tv.g5,
                lineClamp: s ? void 0 : u,
                variant: "text-md/medium",
                children: t.description,
            }),
            c && (0, i.jsx)(lG.Q, { onClick: o, text: m }),
        ],
    });
}
let lO = a.memo(function (e) {
        let { game: t, trackAction: n } = e;
        return (0, i.jsxs)("div", {
            className: tv.oC,
            children: [
                (0, i.jsxs)("div", {
                    className: tv.lM,
                    children: [
                        (0, i.jsx)(nO, { game: t, trackAction: n }),
                        (0, i.jsx)(lP, { game: t, trackAction: n }),
                    ],
                }),
                (0, i.jsx)(e4, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(lj, { trackAction: n }),
                (0, i.jsx)(n9, { game: t, trackAction: n }),
                (0, i.jsx)(lc, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    l_ = a.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l } = e,
            a = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
        return (0, i.jsxs)("div", {
            className: tv.V0,
            children: [
                (0, i.jsx)(nO, { game: t, trackAction: n }),
                (0, i.jsxs)("div", {
                    className: tv.gr,
                    children: [
                        (0, i.jsx)(nu, { game: t, isTwoColumn: !1 }),
                        (0, i.jsxs)("div", {
                            className: tv.E1,
                            children: [
                                (0, i.jsx)(lR, { game: t, trackAction: n }),
                                (0, i.jsx)(lP, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(nj, { analyticsLocations: l, trackAction: n }),
                (0, i.jsx)(tG, { trackAction: n }),
                (0, i.jsx)(e4, { gameId: t.id, trackAction: n }),
                (0, i.jsx)(lj, { trackAction: n }),
                (0, i.jsx)(n9, { game: t, trackAction: n }),
                (0, i.jsx)(lc, { gameId: t.id, trackAction: n }),
                a && (0, i.jsx)(nK, { game: t, trackAction: n }),
                (0, i.jsx)(tS, { game: t, trackAction: n }),
            ],
        });
    });
function lM(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: s } = z();
    (0, k.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = a.useCallback(() => {
        (l(_.GameProfileTrackActionActions.CloudPlay), s(), t());
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
function lw(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: a } = e,
        s = (0, E.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: tv.NC,
              children: (0, i.jsx)(lM, { onCloudPlayClick: s, analyticsLocations: l, trackAction: a }),
          });
}
function lD(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = (0, v.A)(t.linkedApplications)?.id,
        [s] = (0, R.L_)(t.getOfficialApplicationId()),
        [c] = (0, R.L_)(t.id),
        { showsStoreLinks: o } = ly(t),
        u = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(tv.Pn, tv.fi, tv.iH, o ? tv.sV : tv.gF),
        children: [
            null == a || s || c
                ? null
                : (0, i.jsx)(lw, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: l, trackAction: n }),
            (0, i.jsxs)("div", {
                className: tv.V0,
                children: [
                    (0, i.jsx)(lR, { game: t, trackAction: n }),
                    (0, i.jsx)(nj, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tG, { trackAction: n }),
                    u && (0, i.jsx)(nK, { game: t, trackAction: n }),
                    (0, i.jsx)(tS, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function lV(e) {
    let {
            gameId: t,
            source: n,
            sourceUserId: l,
            transitionState: s,
            onClose: c,
            appContext: d,
            trackExternalAction: x,
            initialScrollOffset: h,
            navigateToGame: g,
        } = e,
        [v, E] = a.useState(!0),
        [k, R] = a.useState(null),
        { clientThemesClassName: z } = (0, T.Ay)(),
        X = (0, u.bG)([O.default], () => O.default.locale),
        K = a.useMemo(() => (0, _.generateViewId)(), []),
        { analyticsLocations: J } = (0, I.Ay)(N.A.GAME_PROFILE),
        $ = (0, w.s)(t),
        { data: Q } = (0, L.I)(t),
        q = (0, D.rG)(Q),
        Z = Q?.getOfficialApplicationId(),
        ee = null != Z,
        et = (0, u.bG)([S.A], () => null != Z && S.A.didFetchingApplicationFail(Z), [Z]),
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
        } = (0, b.RD)(Q),
        { invite: ed, isMember: eu, isResolving: em } = (0, D.Ay)(Q, R),
        { socialLayerStorefrontRecommendationsData: ex, socialLayerStorefrontRecommendationsLoading: eh } = (function (
            e,
        ) {
            let t = B.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                { storefrontApplicationId: l, isStorefrontConfigLoaded: i } = (0, u.cf)(
                    [F.A],
                    () => ({
                        storefrontApplicationId: null != e ? F.A.getApplicationIdFromDetectableId(e) : void 0,
                        isStorefrontConfigLoaded: "success" === F.A.getConfigFetchState().state,
                    }),
                    [e],
                ),
                s = (0, U.h)(l),
                r = (0, u.bG)([S.A], () => null != l && S.A.didFetchingApplicationFail(l), [l]),
                c = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: o, status: d } = (0, W.XQ)({
                    applicationIds: c,
                    userIds: n,
                    numItems: 6,
                    source: Y.B5.USER_PROFILE,
                }),
                m = a.useMemo(
                    () =>
                        null == s || null == s.guildId || "success" !== d || 0 === o.length
                            ? null
                            : { application: s, skuIds: o.map((e) => e.id), guildId: s.guildId },
                    [s, d, o],
                ),
                x = "loading" === d,
                h = "success" === d && o.length > 0 && null == s && !r;
            return {
                socialLayerStorefrontRecommendationsData: m,
                socialLayerStorefrontRecommendationsLoading: i && null != l && (x || h),
            };
        })(t),
        eg = a.useCallback(
            function (e, l) {
                let { guildId: i, isVerified: a } = (0, _.getGuildIdAndVerifiedFromInvite)(ei.current);
                (0, _.trackGameProfileAction)({
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
        ((0, _.trackGameProfileOpen)({
            source: n,
            viewId: K,
            gameId: t,
            gameName: en,
            authorId: l,
            profileType: _.GameProfileTypes.FullProfile,
        }),
            (0, C.He)());
    }),
        (0, p.Ay)(() => () => {
            let { isVerified: e, guildId: n } = (0, _.getGuildIdAndVerifiedFromInvite)(ei.current),
                l = Date.now(),
                i = $.map((e) => {
                    let t = (0, y.JM)(e) ? (0, y.W6)(e, l) : (0, y.aJ)(e, X);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, _.trackGameProfileClose)({
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
                e ? ((0, f.closeAllModals)(), (0, P.closeUserProfileModal)()) : c();
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
                invite: ed,
                hasDiscordWebsite: q,
                hasOfficialApplication: ee,
                officialApplicationFetchFailed: et,
                isCommunityInviteResolving: em,
                isMember: eu,
                socialLayerStorefrontRecommendationsData: ex,
                socialLayerStorefrontRecommendationsLoading: eh,
                closeModal: eA,
                navigateToGame: g,
                getScrollOffset: eE,
            }),
            [v, es, ea, er, ec, eo, ed, q, ee, et, em, eu, ex, eh, eA, g, eE],
        ),
        [eI, ek] = a.useState(!1),
        [eb, eS] = a.useState(150),
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
            ek(t >= eb);
        },
        [eb],
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
                          className: r()(z, tv.kL),
                          ref: ej,
                          children: (0, i.jsxs)(G.A, {
                              obscured: el,
                              onClose: ep,
                              children: [
                                  (0, i.jsx)(nc, { game: Q, ref: eT }),
                                  (0, i.jsx)(ns, { game: Q, show: eI, trackAction: eg }),
                                  (0, i.jsx)(nr, { show: eI }),
                                  (0, i.jsxs)(j.Ch, {
                                      ref: ev,
                                      onScroll: eC,
                                      children: [
                                          (0, i.jsx)(nm, {
                                              game: Q,
                                              onSetCompactBarScrollThreshold: eS,
                                              showCompactBar: eI,
                                          }),
                                          (0, i.jsx)(A.F, {
                                              children: v
                                                  ? (0, i.jsxs)("div", {
                                                        className: tv.jC,
                                                        children: [
                                                            (0, i.jsx)(lO, { game: Q, trackAction: eg }),
                                                            (0, i.jsx)(lD, {
                                                                game: Q,
                                                                appContext: d,
                                                                source: n,
                                                                trackExternalAction: x,
                                                                trackAction: eg,
                                                                analyticsLocations: J,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: tv.b9,
                                                        children: (0, i.jsx)(l_, {
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
let lU = function (e) {
    let { gameId: t, source: n, sourceUserId: l, initialScrollOffset: s, ...r } = e,
        [c, o] = a.useState({ gameId: t, source: n, sourceUserId: l, initialScrollOffset: s }),
        d = c.gameId,
        u = a.useCallback(
            (e, t) => {
                e !== d && ((0, D.UT)(e), o({ gameId: e, source: t }));
            },
            [d],
        );
    return (0, i.jsx)(
        lV,
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
