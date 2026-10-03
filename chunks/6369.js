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
    g = n(866665),
    h = n(821609),
    f = n(414499),
    j = n(689175),
    p = n(707554),
    A = n(192308),
    E = n(964486),
    v = n(881698),
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
    z = n(287809);
let H = s.createContext(void 0);
function X() {
    let e = s.useContext(H);
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
    el = n(480713),
    ei = n(776231),
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
    eg = n(708676),
    eh = n(383233),
    ef = n(998218),
    ej = n(375708);
let ep = /^#{1,3}\s+(.+)$/,
    eA = /^https?:\/\/\S+$/;
var eE = n(60465),
    ev = n(158390),
    eI = n(636537),
    eN = n(73153),
    eb = n(103348),
    eC = n(927813),
    eS = n(371794),
    ek = n(652215);
let eT = new Set(["700136079562375258", "1402418693958275202", "1402418696126992445", "1417993715611467826"]);
async function ey(e) {
    eN.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
                await (0, eS.aP)({
                    url: ek.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: G.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.map(eb.A.fromServer),
            n = t.flatMap((e) => e.skuIds);
        (eN.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
            eN.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
    } catch (t) {
        eN.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function eR(e) {
    let t = ((await eI.Bo.get({ url: ek.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []).filter(
        (t) => t !== e && !eT.has(t),
    );
    eN.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
}
let eL = (0, m.UT)(w.A, {
    getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
    get: (e) => w.A.getSimilarGames(e) ?? null,
    load: (e) => eR(e),
    retryConfig: { backoff: () => new ev.A(5 * eC.A.Millis.SECOND, 5 * eC.A.Millis.MINUTE) },
    failureStaleAfter: eC.A.Seconds.MINUTE,
});
async function eM(e, t) {
    eN.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eI.Bo.get({ url: ek.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eN.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, eu.A)((0, ex.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, eh._c)(e))
                            return e.components
                                .filter((e) => e.type === eo.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || eA.test(t.trim())
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
                        if ((0, eh._c)(e)) {
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(ep)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, eh._c)(l)
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
        eN.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eO = n(284009),
    eP = n.n(eO),
    eG = n(376728),
    e_ = n(976860),
    ew = n(71393),
    eV = n(449054);
async function eD(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eP()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = ew.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(ek.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eV.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: ek.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eG.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, e_.pX)(ek.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eF = n(320448),
    eU = n(493285);
let eY = { sm: eU.nz, md: eU.a };
function eW(e) {
    let { className: t, width: n } = e;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(eU.qf, t), style: { width: n } });
}
function eB(e) {
    let { animationDelayMs: t, children: n, className: l } = e,
        i = null != t ? { "--custom-game-profile-skeleton-animation-delay": `${t}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: l, style: i, children: n });
}
function ez(e) {
    let { className: t, size: n = "md" } = e;
    return (0, a.jsx)(eW, { className: c()(eU.x6, eY[n], t) });
}
var eH = n(406510);
function eX(e) {
    let { children: t, skeletonTitleWidth: n, showViewAllSkeleton: l } = e;
    return (0, a.jsxs)("div", {
        className: eH.kL,
        "aria-busy": !0,
        children: [
            (0, a.jsxs)("div", {
                className: eH.wR,
                children: [(0, a.jsx)(eW, { className: eH.Iz, width: n }), l && (0, a.jsx)(ez, { size: "sm" })],
            }),
            t,
        ],
    });
}
function eK(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, a.jsxs)("div", {
        className: eH.kL,
        children: [
            (0, a.jsxs)("div", {
                className: eH.wR,
                children: [
                    (0, a.jsx)(et.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, a.jsx)(h.$, {
                            size: "sm",
                            icon: eF._,
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
    return (0, a.jsx)("div", { "aria-hidden": !0, className: c()(eJ.n, { [eJ.C]: 16 === n }), children: t });
}
let eQ = "1552821538409939044";
var eq = n(235240),
    eZ = n(165648);
function e0(e, t) {
    return es.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function e1(e) {
    return e.id;
}
function e8() {
    return (0, a.jsxs)(eB, {
        className: eq.s7,
        children: [
            (0, a.jsx)(eW, { className: eq.o$ }),
            (0, a.jsxs)("div", {
                className: eq.UF,
                children: [(0, a.jsx)(eW, { className: eq.iX }), (0, a.jsx)(eW, { className: eq.jt })],
            }),
        ],
    });
}
function e4(e, t) {
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
function e2(e) {
    let { message: t, src: n, aspectRatio: l } = e,
        [i, r] = s.useState(!1),
        c = s.useCallback(() => r(!0), []);
    return null == t.media
        ? null
        : (0, a.jsx)(Q.y, {
              readyState: i ? ek.Rv1.READY : ek.Rv1.LOADING,
              aspectRatio: l,
              placeholder: t.media.placeholder,
              placeholderVersion: t.media.placeholderVersion,
              placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
              children: (0, a.jsx)("img", {
                  src: n,
                  className: eq.Lw,
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  onLoad: c,
              }),
          });
}
function e3(e) {
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
        d = null != u ? e4(u, o) : void 0,
        { embedSource: m } = t;
    return null == m
        ? null
        : (0, a.jsx)(q.D, {
              ...i,
              className: eq.Nr,
              onClick: r,
              children: (0, a.jsxs)(Z.M, {
                  className: eq.zI,
                  children: [
                      null != m.url &&
                          (0, a.jsx)(ee.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eq.Ow,
                              children: m.url,
                          }),
                      (0, a.jsxs)("div", {
                          className: eq._d,
                          style: null != m.color ? { borderInlineStartColor: m.color } : void 0,
                          children: [
                              null != m.authorName &&
                                  (0, a.jsxs)("div", {
                                      className: eq.Tu,
                                      children: [
                                          null != m.authorIconUrl &&
                                              (0, a.jsx)("img", {
                                                  src: m.authorIconUrl,
                                                  className: eq.SG,
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
                                      className: eq.ax,
                                      children: (0, a.jsx)(e2, { message: t, src: d, aspectRatio: o }),
                                  }),
                              null != t.title &&
                                  (0, a.jsx)(et.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: eq.DD,
                                      children: e0(t.title, n),
                                  }),
                              t.body.length > 0 &&
                                  (0, a.jsxs)("div", {
                                      className: c()(eq.h_, eZ.PT),
                                      children: [e0(t.body, n), (0, a.jsx)("div", { className: eq.fm })],
                                  }),
                              (0, a.jsxs)("div", {
                                  className: eq.ov,
                                  children: [
                                      null != m.providerIconUrl &&
                                          (0, a.jsx)("img", {
                                              src: m.providerIconUrl,
                                              className: eq.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, a.jsxs)(ee.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != m.providerName ? `${m.providerName} \xb7 ` : "",
                                              (0, ec.i$)(new Date(t.timestamp), "LL"),
                                          ],
                                      }),
                                      t.reactionCount > 0 &&
                                          (0, a.jsxs)("div", {
                                              className: eq.a5,
                                              children: [
                                                  (0, a.jsx)(en.n, { size: "xs", color: "currentColor" }),
                                                  (0, a.jsx)(ee.E, {
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
let e5 = s.memo(function (e) {
    let { message: t, channelId: n } = e;
    return (0, a.jsxs)(Z.M, {
        className: eq.zI,
        children: [
            null != t.title &&
                (0, a.jsx)(et.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eq.DD,
                    children: e0(t.title, n),
                }),
            t.body.length > 0 &&
                (0, a.jsxs)("div", {
                    className: c()(eq.h_, eZ.PT),
                    children: [e0(t.body, n), (0, a.jsx)("div", { className: eq.fm })],
                }),
            (0, a.jsxs)("div", {
                className: eq.ov,
                children: [
                    (0, a.jsx)(ee.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: (0, ec.i$)(new Date(t.timestamp), "LL"),
                    }),
                    t.reactionCount > 0 &&
                        (0, a.jsxs)("div", {
                            className: eq.a5,
                            children: [
                                (0, a.jsx)(en.n, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(ee.E, {
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
        c = t.media?.width != null && t.media?.height != null ? t.media.width / t.media.height : 16 / 9,
        o = t.media?.proxyUrl ?? t.media?.url,
        u = null != o ? e4(o, c) : void 0;
    return (0, a.jsxs)(q.D, {
        ...i,
        className: eq.Nr,
        onClick: r,
        children: [
            null != t.media &&
                null != u &&
                (0, a.jsx)("div", {
                    className: eq.Vl,
                    children: (0, a.jsx)(e2, { message: t, src: u, aspectRatio: c }),
                }),
            (0, a.jsx)(e5, { message: t, channelId: n }),
        ],
    });
}
function e7(e) {
    let { message: t, onCardClick: n, listItemProps: l } = e,
        { poll: i } = t,
        r = s.useCallback(() => n(t.id), [n, t.id]);
    if (null == i) return null;
    let c = i.answers.slice(0, 3),
        o = i.answers.length - c.length;
    return (0, a.jsx)(q.D, {
        ...l,
        className: eq.Nr,
        onClick: r,
        children: (0, a.jsxs)(Z.M, {
            className: eq.zI,
            children: [
                (0, a.jsx)(et.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eq.MH,
                    children: i.question.text,
                }),
                (0, a.jsxs)("div", {
                    className: eq.xd,
                    children: [
                        c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    className: eq.Nf,
                                    children: (0, a.jsx)(ee.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eq.TT,
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
                                className: eq.PF,
                                children: ej.intl.format(ej.t["mv/nIa"], { count: o }),
                            }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: eq.ov,
                    children: (0, a.jsx)(ee.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: ej.intl.format(ej.t.t0FTsH, {
                            createdAt: new Date(t.timestamp),
                            expiryLabel: (0, eg.J)(i.expiry) ?? ej.intl.string(ej.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function e9(e) {
    return null != e.message.poll
        ? (0, a.jsx)(e7, { ...e })
        : null != e.message.embedSource
          ? (0, a.jsx)(e3, { ...e })
          : (0, a.jsx)(e6, { ...e });
}
let te = s.memo(function (e) {
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
                    null == e || n || w.A.isAnnouncementsFetching(e) || eM(e, { limit: 8 });
                }, [e, n, 8]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l, hasFetched: n }
            );
        })(t),
        f = (0, el.l)("game_profile_announcements"),
        j = s.useCallback(() => {
            let e = r?.guild?.id ?? d;
            null != e &&
                null != x &&
                (n(_.GameProfileTrackActionActions.Announcements),
                eE.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                o(),
                eD({ invite: r, guildId: e, channelId: x, analyticsLocationStack: i }));
        }, [n, o, l, r, d, x, i, t]),
        p = s.useCallback(
            (e) => {
                let a = r?.guild?.id ?? d;
                null != a &&
                    null != x &&
                    (n(_.GameProfileTrackActionActions.AnnouncementsItem),
                    eE.default.setGameProfilePendingReturn({ gameId: t, channelId: x, initialScrollOffset: l() }),
                    o(),
                    eD({ invite: r, guildId: a, channelId: x, messageId: e, analyticsLocationStack: i }));
            },
            [n, o, l, r, d, x, i, t],
        ),
        A = null != x && u.length > 0;
    return (!h || g) && c
        ? (0, a.jsx)(eX, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 246,
              children: (0, a.jsx)(e$, {
                  gap: 16,
                  children: J()
                      .range(3)
                      .map((e) => (0, a.jsx)(e8, {}, e)),
              }),
          })
        : A
          ? (0, a.jsx)(eK, {
                title: ej.intl.string(ej.t.B0BV3Y),
                onClickViewAll: j,
                children: f
                    ? (0, a.jsx)(er.A, {
                          gap: 16,
                          items: u,
                          getItemKey: e1,
                          itemClassName: eq.hu,
                          renderItem: (e, t) =>
                              (0, a.jsx)(e9, { message: e, channelId: x, onCardClick: p, listItemProps: t }, e.id),
                      })
                    : (0, a.jsx)(ea.A, {
                          gap: 16,
                          children: u.map((e) => (0, a.jsx)(e9, { message: e, channelId: x, onCardClick: p }, e.id)),
                      }),
            })
          : null;
});
var tt = n(37537),
    tn = n(541830),
    tl = n(240248),
    ti = n(505779),
    ta = n(808380);
let ts = [ta.Y.DESKTOP, ta.Y.XBOX, ta.Y.PLAYSTATION, ta.Y.NINTENDO];
var tr = n(28863),
    tc = n(975807),
    to = n(194362);
function tu(e) {
    let { game: t, trackAction: n } = e,
        l = s.useCallback(async () => {
            n(_.GameProfileTrackActionActions.ClaimGame);
            let e = await (0, to.a)(ek.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tc.A)(e);
        }, [n]),
        i = s.useCallback((e) => (0, a.jsx)(tr.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === eo.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(ee.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ej.intl.format(ej.t.KAjfKl, { claimLink: i }),
          });
}
var td = n(998445),
    tm = n(274997),
    tx = n(80500),
    tg = n(319745),
    th = n(488225),
    tf = n(967492),
    tj = n(72265),
    tp = n(454346),
    tA = n(37948),
    tE = n(750013);
let tv = { size: "xs", colorClass: tE.wP };
function tI(e) {
    let { website: t, trackAction: n } = e,
        l = (0, tA.A)(),
        {
            action: i,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case ti.V.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(td.GlobeEarthIcon, { ...t }),
                        action: _.GameProfileTrackActionActions.WebsiteLink,
                        title: ej.intl.string(ej.t.fOUKvg),
                    };
                case ti.V.TWITTER:
                    return {
                        icon: (0, a.jsx)(tm.p, { ...t }),
                        action: _.GameProfileTrackActionActions.XLink,
                        title: ej.intl.string(ej.t.INic4y),
                    };
                case ti.V.YOUTUBE:
                    return {
                        action: _.GameProfileTrackActionActions.YouTubeLink,
                        icon: (0, a.jsx)(tx.C, { ...t }),
                        title: ej.intl.string(ej.t.lNmxbE),
                    };
                case ti.V.FACEBOOK:
                    return {
                        icon: (0, a.jsx)(tg.Z, { ...t }),
                        action: _.GameProfileTrackActionActions.FacebookLink,
                        title: ej.intl.string(ej.t.FjyREK),
                    };
                case ti.V.INSTAGRAM:
                    return {
                        icon: (0, a.jsx)(th.L, { ...t }),
                        action: _.GameProfileTrackActionActions.InstagramLink,
                        title: ej.intl.string(ej.t["cgR+IK"]),
                    };
                case ti.V.BLUESKY:
                    return {
                        icon: (0, a.jsx)(tf.a, { ...t }),
                        action: _.GameProfileTrackActionActions.BlueskyLink,
                        title: ej.intl.string(ej.t["D/PHq5"]),
                    };
                case ti.V.REDDIT:
                    return {
                        icon: (0, a.jsx)(tj.T, { ...t }),
                        action: _.GameProfileTrackActionActions.RedditLink,
                        title: ej.intl.string(ej.t["Hgb+fc"]),
                    };
                case ti.V.TWITCH:
                    return {
                        icon: (0, a.jsx)(tp.a, { ...t }),
                        action: _.GameProfileTrackActionActions.TwitchLink,
                        title: ej.intl.string(ej.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tv),
        o = s.useCallback(() => {
            (n(i), l(t.url));
        }, [i, l, n, t.url]);
    return (0, a.jsx)(g.m, {
        text: c,
        children: (0, a.jsx)(q.D, { onClick: o, className: tE.yO, title: c, children: r }),
    });
}
var tN = n(31300),
    tb = n(802516),
    tC = n(22363),
    tS = n(418524),
    tk = n(672572);
function tT(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case ta.Y.DESKTOP:
            return (0, a.jsx)(tN.k, { size: "xs", ...n });
        case ta.Y.XBOX:
            return (0, a.jsx)(tb.Y, { size: "xs", ...n });
        case ta.Y.PLAYSTATION:
            return (0, a.jsx)(tC.X, { size: "xs", ...n });
        case ta.Y.NINTENDO:
            return (0, a.jsx)(tS.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function ty(e) {
    let { platform: t } = e;
    return (0, a.jsx)(
        g.m,
        {
            text: (function (e) {
                switch (e) {
                    case ta.Y.DESKTOP:
                        return ej.intl.string(ej.t.KT6uCJ);
                    case ta.Y.XBOX:
                        return ej.intl.string(ej.t.DDWUJp);
                    case ta.Y.PLAYSTATION:
                        return ej.intl.string(ej.t.fzMz2s);
                    case ta.Y.NINTENDO:
                        return ej.intl.string(ej.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, a.jsx)(tT, { platform: t }),
        },
        t,
    );
}
var tR = n(424994),
    tL = n(422384);
function tM() {
    return (0, a.jsx)(ee.E, { variant: "text-sm/normal", color: "text-subtle", children: ej.intl.string(ej.t.GruYxV) });
}
let tO = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, tt.c)("GameProfileGameDetails"),
        i = s.useMemo(() => t.genres.map(tn.du).join(", "), [t]),
        r = t.getCompanyByRole(eo.wk.PUBLISHER),
        c = t.getCompanyByRole(eo.wk.DEVELOPER),
        o = r.map((e) => e.name).join(", "),
        u = c.map((e) => e.name).join(", "),
        d = t.firstReleaseDate,
        m = s.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(ta.Y.DESKTOP) && (e.has(ta.Y.MACOS) || e.has(ta.Y.LINUX)) && n.push(ta.Y.DESKTOP),
                n.filter((e) => ts.includes(e)).sort((e, t) => ts.indexOf(e) - ts.indexOf(t))
            );
        }, [t.platforms]),
        x = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return ti.p.includes(t);
            })
            .sort((e, t) => ti.p.indexOf(e.category) - ti.p.indexOf(t.category)),
        g = !(0, tl.uJ)(i),
        h = !(0, tl.uJ)(o),
        f = !(0, tl.uJ)(u),
        j = !(0, tl.uJ)(d),
        p = m.length > 0,
        A = x.length > 0 && !x.every((e) => (0, tl.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: tL.uW,
        children: [
            (0, a.jsx)("div", {
                className: tL.Gf,
                children: (0, a.jsx)(et.D, {
                    variant: l ? "text-md/medium" : "heading-sm/semibold",
                    color: l ? "text-subtle" : "text-strong",
                    children: ej.intl.string(ej.t["7OjmmH"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tL.kL,
                children: [
                    (0, a.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? ej.intl.string(ej.t.pDgwYB) : ej.intl.string(ej.t.mjFKqn),
                            }),
                            g
                                ? (0, a.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tL.Gu,
                                      children: i,
                                  })
                                : (0, a.jsx)(tM, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? ej.intl.string(ej.t.Hc7Enk) : ej.intl.string(ej.t["4Byy/G"]),
                            }),
                            h
                                ? (0, a.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tL.Gu,
                                      children: o,
                                  })
                                : (0, a.jsx)(tM, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== c.length ? ej.intl.string(ej.t.KATEJB) : ej.intl.string(ej.t.na3PT0),
                            }),
                            f
                                ? (0, a.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tL.Gu,
                                      children: u,
                                  })
                                : (0, a.jsx)(tM, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ej.intl.string(ej.t.H3mPDT),
                            }),
                            j
                                ? (0, a.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tL.Gu,
                                      children: ec.i$(new Date(d), "LL"),
                                  })
                                : (0, a.jsx)(tM, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.length > 1 ? ej.intl.string(ej.t.PNqxNe) : ej.intl.string(ej.t["UxAag+"]),
                            }),
                            p
                                ? (0, a.jsx)("div", {
                                      className: tL.Gu,
                                      children: m.map((e) => (0, a.jsx)(ty, { platform: e }, e)),
                                  })
                                : (0, a.jsx)(tM, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ej.intl.string(ej.t["Oj3o1/"]),
                            }),
                            A
                                ? (0, a.jsx)("div", {
                                      className: tL.Gu,
                                      children: x.map((e) => (0, a.jsx)(tI, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, a.jsx)(tM, {}),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tL.J1,
                        children: [
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: ej.intl.string(ej.t["BwQ+9e"]),
                            }),
                            (0, a.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tL.Gu,
                                children: ej.intl.format(ej.t.XPFZVl, { igdbLink: tR.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: tL.OQ, children: (0, a.jsx)(tu, { game: t, trackAction: n }) }),
        ],
    });
};
var tP = n(714991),
    tG = n(486020),
    t_ = n(992638);
function tw() {
    return (0, a.jsxs)(eB, {
        className: t_.uW,
        animationDelayMs: 300,
        children: [
            (0, a.jsx)(eW, { className: t_.dU, width: "30%" }),
            (0, a.jsx)(eB, {
                className: t_.nV,
                children: (0, a.jsxs)("div", {
                    className: t_.hQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: t_.To,
                            children: [
                                (0, a.jsx)(eW, { className: t_.QV }),
                                (0, a.jsxs)("div", {
                                    className: t_.Yv,
                                    children: [
                                        (0, a.jsx)(eW, { className: t_.Ag }),
                                        (0, a.jsx)(eW, { className: t_.zl }),
                                        (0, a.jsx)(eW, { className: t_.P2 }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(ez, {}),
                    ],
                }),
            }),
        ],
    });
}
function tV(e) {
    let { guild: t } = e,
        n = tG.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 48 }),
        [l, i] = s.useState(void 0),
        r = null != n && l !== n,
        c = s.useCallback(() => {
            i(n);
        }, [n]);
    return (0, a.jsxs)("div", {
        className: t_._C,
        children: [
            r && (0, a.jsx)(eW, { className: t_.EQ }),
            (0, a.jsx)("img", {
                className: t_.$f,
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
        n = (0, tt.c)("GameProfileGuildInvite"),
        { invite: l, hasDiscordWebsite: i, isCommunityInviteResolving: r, isMember: c, closeModal: o } = X(),
        u = s.useCallback(() => {
            null != l &&
                (t(_.GameProfileTrackActionActions.JoinServer),
                o(),
                eN.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: ek.BRT.APP }));
        }, [l, t, o]);
    return null == l || null == l.guild
        ? i && r
            ? (0, a.jsx)(tw, {})
            : null
        : (0, a.jsxs)("div", {
              className: t_.uW,
              children: [
                  (0, a.jsx)(et.D, {
                      className: t_.Gf,
                      variant: n ? "text-md/medium" : "heading-sm/semibold",
                      color: n ? "text-subtle" : "text-strong",
                      children: ej.intl.string(ej.t["U2N+ci"]),
                  }),
                  (0, a.jsx)("div", {
                      className: t_.kL,
                      children: (0, a.jsxs)("div", {
                          className: t_.hQ,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: t_.To,
                                  children: [
                                      (0, a.jsx)(tV, { guild: l.guild }),
                                      (0, a.jsxs)("div", {
                                          className: t_.yj,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: t_.YS,
                                                  children: [
                                                      (0, a.jsx)(tP.A, { guild: l.guild, size: 16 }),
                                                      (0, a.jsx)(et.D, {
                                                          variant: "heading-md/semibold",
                                                          color: "text-default",
                                                          children: l.guild.name,
                                                      }),
                                                  ],
                                              }),
                                              !(0, tl.uJ)(l.guild?.description) &&
                                                  (0, a.jsx)(ee.E, {
                                                      className: t_.h_,
                                                      variant: "text-sm/medium",
                                                      color: "text-muted",
                                                      children: l.guild?.description,
                                                  }),
                                              null != l.approximate_member_count || null != l.approximate_presence_count
                                                  ? (0, a.jsxs)("div", {
                                                        className: t_.iR,
                                                        children: [
                                                            null != l.approximate_presence_count &&
                                                                (0, a.jsxs)("div", {
                                                                    className: t_.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: t_._o }),
                                                                        (0, a.jsx)(ee.E, {
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
                                                                (0, a.jsxs)("div", {
                                                                    className: t_.Tb,
                                                                    children: [
                                                                        (0, a.jsx)("i", { className: t_.jk }),
                                                                        (0, a.jsx)(ee.E, {
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
                              (0, a.jsx)(h.$, {
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
var tF = n(369606),
    tU = n(775602),
    tY = n(21161),
    tW = n(400492),
    tB = n(459746),
    tz = n(732369);
let tH = n(892799),
    tX = s.forwardRef(function (e, t) {
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
        return (0, tl.uJ)(l)
            ? null
            : (0, a.jsxs)("div", {
                  ref: t,
                  children: [
                      (0, a.jsx)("div", { className: tz.y1, style: { backgroundImage: `url("${l}")` } }),
                      (0, a.jsx)("div", { className: tz.N4 }),
                  ],
              });
    });
function tK(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(tn.du).join(", ");
    return (0, tl.uJ)(n) ? null : (0, a.jsx)(ee.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function tJ(e) {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: tz.Qc,
        children: [
            (0, a.jsx)(tF.TrophyIcon, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(ee.E, {
                variant: "text-xs/bold",
                color: "none",
                children: ej.intl.formatToPlainString(ej.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t$(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, a.jsx)(tQ, {
        game: t,
        className: c()(n ? tz.n8 : tz.FS, !n && (0, tB.cO)(t) && tz.CD),
        imageClassName: tz.xe,
    });
}
function tQ(e) {
    let { game: t, className: n, imageClassName: l } = e,
        i = (0, a.jsx)(tB.Ay, { game: t, className: l, size: tB.wu.LARGE });
    return t.id !== eQ
        ? (0, a.jsx)("div", { className: n, children: i })
        : (0, a.jsx)(tq, { className: n, children: i });
}
function tq(e) {
    let { children: t, className: n } = e,
        { createMultipleConfettiAt: l } = s.useContext(tY.x),
        i = (0, m.bG)([tU.Ay], () => tU.Ay.useReducedMotion),
        r = s.useRef({ count: 0, lastTime: 0 });
    return (0, a.jsx)(q.D, {
        className: c()(n, tz.b3),
        "aria-label": ej.intl.string(ej.t.M2b74O),
        onClick: function (e) {
            let t = Date.now(),
                n = r.current,
                a = t - n.lastTime > 1e4 ? 1 : n.count + 1;
            if (((r.current = { count: a, lastTime: t }), 3 === a)) {
                if (((r.current = { count: 0, lastTime: 0 }), !i)) {
                    let t = e.currentTarget.getBoundingClientRect();
                    l(t.left + t.width / 2, t.top + t.height / 2);
                }
                (0, tW.Ak)("discodo");
            }
        },
        children: t,
    });
}
let tZ = function (e) {
    let { game: t } = e,
        { isTwoColumn: n } = X(),
        l = t.name;
    return (0, a.jsxs)("div", {
        className: tz.ap,
        children: [
            n && (0, a.jsx)(tQ, { game: t, className: c()(tz.Tf, (0, tB.cO)(t) && tz.wS), imageClassName: tz.w$ }),
            (0, a.jsxs)("div", {
                className: tz.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(tJ, { rank: t.l30Rank }),
                    (0, a.jsxs)("div", {
                        className: tz.$,
                        children: [
                            (0, a.jsx)(et.D, { variant: "heading-xxl/semibold", children: l }),
                            t.id === eQ &&
                                (0, a.jsx)("img", {
                                    src: tH,
                                    className: tz.IU,
                                    alt: "",
                                    "aria-hidden": "true",
                                    draggable: !1,
                                }),
                        ],
                    }),
                    (0, a.jsx)(tK, { game: t }),
                ],
            }),
        ],
    });
};
var t0 = n(141628),
    t1 = n(289363),
    t8 = n(134131);
function t4() {
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: t8.uW,
        children: [
            (0, a.jsx)(eW, { className: t8.dU, width: "30%" }),
            (0, a.jsxs)(eB, {
                className: t8.nV,
                children: [
                    (0, a.jsx)("div", { className: t8.sB, children: (0, a.jsx)(t1.default, { isLoading: !0 }) }),
                    (0, a.jsxs)("div", {
                        className: t8.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: t8.Yv,
                                children: [(0, a.jsx)(eW, { width: "55%" }), (0, a.jsx)(eW, { width: "85%" })],
                            }),
                            (0, a.jsx)(ez, {}),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function t2(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        l = (0, tt.c)("GameProfileLinkAccount"),
        {
            fetchedAuthorization: i,
            hasAlreadyLinked: r,
            canStartAuthorization: c,
            startAuthorization: o,
            connectionApp: u,
            hasOfficialApplication: d,
            officialApplicationFetchFailed: x,
        } = X(),
        g = (0, m.bG)([z.default], () => z.default.getCurrentUser()),
        f = s.useCallback(() => {
            (t(_.GameProfileTrackActionActions.LinkAccount), o({ analyticsLocations: n }));
        }, [t, o, n]);
    return !d || x || null == g
        ? null
        : null == u || (c && !i)
          ? (0, a.jsx)(t4, {})
          : !c || r
            ? null
            : (0, a.jsxs)("div", {
                  className: t8.uW,
                  children: [
                      (0, a.jsx)(et.D, {
                          className: t8.Gf,
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: ej.intl.string(ej.t["VDAhr+"]),
                      }),
                      (0, a.jsxs)("div", {
                          className: t8.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: t8.sB,
                                  children: (0, a.jsx)(t1.default, { application: u }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: t8.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: t8.FS,
                                          children: [
                                              (0, a.jsx)(et.D, {
                                                  variant: "heading-md/semibold",
                                                  color: "text-default",
                                                  children: ej.intl.formatToPlainString(ej.t.hUbQT2, {
                                                      gameName: u.name,
                                                  }),
                                              }),
                                              (0, a.jsx)(ee.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: ej.intl.string(ej.t["JKqu+4"]),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(h.$, {
                                          variant: "secondary",
                                          icon: t0.A,
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
var t3 = n(635377),
    t5 = n.n(t3),
    t6 = n(80687),
    t7 = n(534573),
    t9 = n(248643),
    ne = n(256905),
    nt = n(684519),
    nn = n(191096),
    nl = n(90721),
    ni = n(258924);
function na(e) {
    let { item: t, index: n } = e;
    return `${n}-${t.url}`;
}
function ns(e, t) {
    return (0, t7.Ec)(e, { size: t, keepAspectRatio: !0, format: tG.QB ? "webp" : null });
}
let nr = new (t5())({ max: 100 }),
    nc = s.memo(function (e) {
        let { url: t, alt: n, className: l } = e,
            [i, r] = s.useState(null),
            o = null != i && i.url === t ? i.isPortrait : (nr.get(t) ?? !1),
            u = s.useCallback(
                (e) => {
                    if (null == e || 0 === e.naturalWidth || 0 === e.naturalHeight) return;
                    let n = e.naturalHeight > e.naturalWidth;
                    (nr.set(t, n),
                        r((e) => (null != e && e.url === t && e.isPortrait === n ? e : { url: t, isPortrait: n })));
                },
                [t],
            ),
            d = s.useCallback((e) => u(e.currentTarget), [u]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    ref: u,
                    src: ns(t, 106),
                    className: c()(ni.r4, !o && ni.l5),
                    alt: "",
                    draggable: !1,
                    onLoad: d,
                }),
                (0, a.jsx)("img", { ref: u, src: ns(t, 900), className: c()(ni.c8, o && ni.D7, l), alt: n, onLoad: d }),
            ],
        });
    }),
    no = s.memo(function (e) {
        var t;
        let { item: n, index: l, isSelected: i, isPlaying: r, onSelect: o, gameName: u, listItemProps: d } = e,
            m = s.useCallback(() => o(l), [o, l]),
            x = d?.tabIndex;
        return (0, a.jsx)(q.D, {
            ...d,
            className: c()(ni.JS, i && ni.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: ni.ub,
                children: [
                    (0, a.jsx)("img", {
                        src: ns("VIDEO" === (t = n).type ? (t.poster ?? t.url) : t.url, 106),
                        className: ni.xn,
                        alt: ej.intl.formatToPlainString(ej.t.COYYrn, { game: u }),
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
    nu = s.memo(function (e) {
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
            (0, nl.A)({ videoRef: i, canvasRef: d, enabled: !n }),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    !n && (0, a.jsx)("canvas", { ref: d, className: ni.HW, "aria-hidden": "true" }),
                    (0, a.jsx)("div", {
                        className: ni.tN,
                        children: (0, a.jsx)(t9.A, {
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
                            onFullscreenChange: u,
                            mediaPlayerClassName: ni.T9,
                            videoRef: i,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function nd(e) {
    let { game: t, trackAction: n } = e,
        [l, i] = s.useState(0),
        [r, c] = s.useState(null),
        [o, u] = s.useState(t.screenshotUrls),
        d = s.useRef(null),
        x = s.useRef(null),
        g = (0, m.bG)([tU.Ay], () => tU.Ay.useReducedMotion),
        { obscured: h } = (0, nn.I3)(),
        f = (0, el.l)("game_profile_media");
    o !== t.screenshotUrls && (u(t.screenshotUrls), i(0));
    let j = s.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eS.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eS.YE)(e.application_id, e.id, e.width, "webp"),
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
        S = s.useCallback(() => {
            n(v ? _.GameProfileTrackActionActions.ClickTrailer : _.GameProfileTrackActionActions.ClickImage);
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
            (0, ne.R)({
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
              className: ni.kL,
              children: [
                  v
                      ? (0, a.jsx)("div", {
                            className: ni.ND,
                            children: (0, a.jsx)(
                                nu,
                                {
                                    item: E,
                                    reducedMotion: g,
                                    autoPlay: !g && !h,
                                    videoRef: d,
                                    mediaPlayerRef: C,
                                    onPlay: k,
                                    onPause: T,
                                    onFullscreenChange: R,
                                },
                                `${A}-${E.url}`,
                            ),
                        })
                      : (0, a.jsxs)("div", {
                            className: ni.wp,
                            children: [
                                null != r &&
                                    !g &&
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
                                (0, a.jsx)(q.D, {
                                    className: ni.gv,
                                    onClick: S,
                                    children: (0, a.jsx)("div", {
                                        className: ni.cs,
                                        children: (0, a.jsx)(
                                            nc,
                                            {
                                                url: E.url,
                                                className: ni.Jf,
                                                alt: ej.intl.formatToPlainString(ej.t.COYYrn, { game: t.name }),
                                            },
                                            E.url,
                                        ),
                                    }),
                                }),
                            ],
                        }),
                  f
                      ? (0, a.jsx)(er.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            items: p,
                            getItemKey: na,
                            renderItem: (e, n) => {
                                let { item: l, index: i } = e;
                                return (0, a.jsx)(
                                    no,
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
                      : (0, a.jsx)(ea.A, {
                            gap: "xs",
                            iconButtonSize: "sm",
                            children: j.map((e, n) =>
                                (0, a.jsx)(
                                    no,
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
var nm = n(49381),
    nx = n(661531),
    ng = n(223273);
function nh(e, t, n) {
    if (null == e || null == t || t < 10) return ng.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? ng.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? ng.vI.VERY_POSITIVE
              : ng.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return ng.vI.MOSTLY_POSITIVE;
    if (e >= 40) return ng.vI.MIXED;
    if (e >= 20) return ng.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return ng.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return ng.vI.VERY_NEGATIVE;
    return ng.vI.OVERWHELMINGLY_NEGATIVE;
}
function nf(e) {
    switch (e) {
        case ng.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case ng.vI.OVERWHELMINGLY_POSITIVE:
        case ng.vI.VERY_POSITIVE:
        case ng.vI.POSITIVE:
        case ng.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case ng.vI.MIXED:
            return "steam-review-text-mixed";
        case ng.vI.MOSTLY_NEGATIVE:
        case ng.vI.NEGATIVE:
        case ng.vI.VERY_NEGATIVE:
        case ng.vI.OVERWHELMINGLY_NEGATIVE:
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
    np = n(778591);
function nA(e) {
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
var nE = n(255417);
function nv(e) {
    let { url: t, trackAction: n, title: l, rating: i, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, tA.A)(),
        u = nh(i, r, "recent" === c),
        d = nf(u),
        m = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.SteamReviews), o(t));
        }, [o, n, t]);
    return (0, a.jsx)(q.D, {
        onClick: m,
        className: nE.nf,
        role: "link",
        "aria-label": ej.intl.string(ej.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: nE.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: nE.tN,
                    children: [
                        (0, a.jsx)(nm.N, { size: "sm", color: nx.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(et.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, a.jsx)(
                    g.m,
                    {
                        text:
                            u === ng.vI.NO_USER_REVIEWS
                                ? ej.intl.string(ej.t.CLMt8J)
                                : ej.intl
                                      .format(
                                          "recent" === c
                                              ? ej.t.TzvC0k
                                              : "localized" === c
                                                ? ej.t.EOfrwm
                                                : ej.t["lzANJ/"],
                                          { rating: i, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: nE.Z0,
                            children: [
                                (0, a.jsx)(ee.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    className: nE.yX,
                                    children: (function (e) {
                                        switch (e) {
                                            case ng.vI.NO_USER_REVIEWS:
                                                return ej.intl.string(ej.t.CLMt8J);
                                            case ng.vI.OVERWHELMINGLY_POSITIVE:
                                                return ej.intl.string(ej.t["75sx1S"]);
                                            case ng.vI.VERY_POSITIVE:
                                                return ej.intl.string(ej.t["EkOVg+"]);
                                            case ng.vI.POSITIVE:
                                                return ej.intl.string(ej.t.ZUkFtr);
                                            case ng.vI.MOSTLY_POSITIVE:
                                                return ej.intl.string(ej.t.M7Z09a);
                                            case ng.vI.MIXED:
                                                return ej.intl.string(ej.t.c8yuHR);
                                            case ng.vI.MOSTLY_NEGATIVE:
                                                return ej.intl.string(ej.t.H0MSjG);
                                            case ng.vI.NEGATIVE:
                                                return ej.intl.string(ej.t.vpLrgz);
                                            case ng.vI.VERY_NEGATIVE:
                                                return ej.intl.string(ej.t["5spYuX"]);
                                            case ng.vI.OVERWHELMINGLY_NEGATIVE:
                                                return ej.intl.string(ej.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== ng.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(ee.E, {
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
function nI(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: i } = t,
        r = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, tA.A)(),
        x = s.useCallback(() => {
            (l(_.GameProfileTrackActionActions.OpenCriticReviews), m(n));
        }, [m, l, n]);
    return (0, a.jsx)(q.D, {
        onClick: x,
        className: nE.nf,
        role: "link",
        "aria-label": ej.intl.string(ej.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: nE.Ur,
            children: [
                (0, a.jsx)(et.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: ej.intl.string(ej.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: nE.WA,
                    children: [
                        null != c ? (0, a.jsx)(nN, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, a.jsx)(nb, { rating: o, tier: c }) : null,
                        d
                            ? (0, a.jsx)(ee.E, {
                                  variant: "text-xs/medium",
                                  color: nf(ng.vI.NO_USER_REVIEWS),
                                  children: ej.intl.string(ej.t["0xYzpO"]),
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
                    return ej.intl.string(ej.t.aZej2g);
                case nj.STRONG:
                    return ej.intl.string(ej.t.MLxnSg);
                case nj.FAIR:
                    return ej.intl.string(ej.t["3f19KA"]);
                case nj.WEAK:
                    return ej.intl.string(ej.t.jtVgSh);
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
        g.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: nE.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nb(e) {
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
        g.m,
        {
            text: ej.intl.string(ej.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: nE.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(nA, { rating: t, strokeColor: l }),
                    (0, a.jsx)(ee.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        className: nE.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nC = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, tt.c)("GameProfileReviews"),
        i = (0, np.I)(t.id),
        s = t.opencriticUrl,
        r = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED && null != i,
        c = t.reviews?.steam,
        o = nh(c?.recentRating, c?.recentRatingCount, !0),
        u = r && o !== ng.vI.NO_USER_REVIEWS,
        m =
            null != c &&
            null != c.localizedRating &&
            null != c.localizedRatingCount &&
            null != c.ratingCount &&
            c.localizedRatingCount >= 200 &&
            c.ratingCount >= 2e3,
        x = m ? c?.localizedRating : c?.rating,
        g = m ? c?.localizedRatingCount : c?.ratingCount,
        h = m ? ej.t["aWb+V4"] : ej.t["8e4LiB"],
        f = t.reviews?.opencritic != null && null != s;
    return r || u || f
        ? (0, a.jsxs)("div", {
              className: nE.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: nE.Gf,
                      children: (0, a.jsx)(et.D, {
                          variant: l ? "text-md/medium" : "heading-sm/semibold",
                          color: l ? "text-subtle" : "text-strong",
                          children: ej.intl.string(ej.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: nE.kL,
                      children: [
                          u && null != i
                              ? (0, a.jsx)("div", {
                                    className: nE.WH,
                                    children: (0, a.jsx)(nv, {
                                        url: i,
                                        trackAction: n,
                                        title: ej.intl.string(ej.t.MQGNsN),
                                        rating: c?.recentRating,
                                        ratingCount: c?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          r && null != i
                              ? (0, a.jsx)("div", {
                                    className: nE.WH,
                                    children: (0, a.jsx)(nv, {
                                        url: i,
                                        trackAction: n,
                                        title: ej.intl.string(h),
                                        rating: x,
                                        ratingCount: g,
                                        tooltipVariant: m ? "localized" : "all",
                                    }),
                                })
                              : null,
                          f && null != s
                              ? (0, a.jsx)("div", {
                                    className: nE.WH,
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
    nk = n(722258),
    nT = n(258245),
    ny = n(561769),
    nR = n(484469),
    nL = n(57020),
    nM = n(682301);
let nO = [];
var nP = n(758836),
    nG = n(747828);
let n_ = [0, 1, 2, 3, 4];
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
        u = s.useCallback(
            (e) => {
                (c(_.GameProfileTrackActionActions.DiscordCollectiblesShopItem),
                    (o.current = e.currentTarget),
                    (0, nk.B)({
                        skuId: i,
                        analyticsLocations: [N.A.GAME_PROFILE],
                        analyticsSource: N.A.GAME_PROFILE,
                        shouldCheckoutWithOrbs: (0, nL.A)({ product: t }),
                        returnRef: o,
                    }));
            },
            [c, i, t],
        ),
        { flattenProductVariants: d, ...m } = r;
    return (0, a.jsx)(ny.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...m, productOverride: t },
        children: (0, a.jsx)(nT.A, {
            skuId: i,
            aspectRatio: n,
            cardClassName: nG.N,
            onClickCard: u,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
            listItemProps: l,
        }),
    });
}
function nF() {
    return (0, a.jsx)(nR.A, {});
}
function nU(e) {
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
                            null == e || t || w.A.isShopCollectionFetching(e) || ey(e);
                        }, [e, t]),
                        { skuIds: l ?? nO, hasFetched: t, isFetching: n }
                    );
                })(e),
                i = (0, nM.hv)(t, { flattenVariants: !0 }),
                a = (0, s.useMemo)(() => t.map((e) => i[e]?.product).filter((e) => null != e), [t, i]),
                r = t.some((e) => i[e]?.state === "loading");
            return { products: a, isLoading: null != e && (!n || l || (t.length > 0 && r)) };
        })(t.shopCollectionIds?.[0]),
        c = s.useCallback(() => {
            (n(_.GameProfileTrackActionActions.DiscordCollectiblesShop),
                l(),
                (0, nS.Cz)({
                    analyticsLocations: [N.A.GAME_PROFILE],
                    analyticsSource: N.A.GAME_PROFILE,
                    tab: nP.G2.CATALOG,
                }));
        }, [n, l]),
        o = s.useMemo(() => ({ trackAction: n }), [n]),
        u = (0, el.l)("game_profile_shop_carousel");
    return r
        ? (0, a.jsx)(eX, {
              showViewAllSkeleton: !0,
              skeletonTitleWidth: 118,
              children: (0, a.jsx)(e$, { children: n_.map((e) => (0, a.jsx)(nF, {}, e)) }),
          })
        : 0 === i.length
          ? null
          : (0, a.jsx)(nV.Provider, {
                value: o,
                children: (0, a.jsx)(eK, {
                    title: ej.intl.string(ej.t["5DYPT8"]),
                    onClickViewAll: c,
                    children: u
                        ? (0, a.jsx)(er.A, {
                              gap: "md",
                              items: i,
                              getItemKey: nw,
                              renderItem: (e, t) => (0, a.jsx)(nD, { product: e, listItemProps: t }, e.skuId),
                          })
                        : (0, a.jsx)(ea.A, {
                              gap: "md",
                              children: i.map((e) => (0, a.jsx)(nD, { product: e }, e.skuId)),
                          }),
                }),
            });
}
var nY = n(921138),
    nW = n(311043);
let nB = [],
    nz = [];
var nH = n(607346);
let nX = { "--custom-similar-games-per-page": 8, "--custom-cover-min-width": "60px" };
function nK(e) {
    return e.id;
}
function nJ(e) {
    let { className: t } = e;
    return (0, a.jsx)(eB, { className: t, children: (0, a.jsx)(eW, { className: nH.Lg }) });
}
function n$(e) {
    let { game: t, trackClick: n, listItemProps: l } = e,
        { navigateToGame: i } = X(),
        r = t.getCoverURL(256),
        [c, o] = s.useState(null),
        u = null == r || c === r,
        { shouldOpenGameProfile: d, gameId: m } = (0, nY.Ay)({
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
            className: nH.Nr,
            onClick: x,
            "aria-label": ej.intl.formatToPlainString(ej.t["8QLQB+"], { gameName: t.name }),
            children: [
                (0, a.jsx)(tB.Ay, {
                    game: t,
                    className: nH.xe,
                    size: tB.wu.SMALL,
                    imageSize: 256,
                    onLoad: h,
                    onError: h,
                }),
                !u && (0, a.jsx)(nJ, { className: nH.uz }),
            ],
        }),
    });
}
function nQ(e) {
    let { gameId: t, trackAction: n } = e,
        { isFetching: l, similarGames: i } = (function (e) {
            let t = !eT.has(e),
                { data: n, isLoading: l, error: i } = eL(e, t),
                a = t && null != n ? n : nB;
            (0, L.x)(a);
            let s = (0, m.bG)(
                    [nW.A],
                    () => a.some((e) => null == nW.A.getGame(e) && !nW.A.hasNoData(e) && !nW.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, m.yK)(
                    [nW.A, z.default],
                    () => {
                        let e = z.default.getCurrentUser()?.nsfwAllowed;
                        return a
                            .map((e) => nW.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => (0, nY.T_)(t) && !(0, F.b)(t, e));
                    },
                    [a],
                );
            return t
                ? { isFetching: (null == i && null == n) || l || s, similarGames: r }
                : { isFetching: !1, similarGames: nz };
        })(t),
        s = (0, el.l)("game_profile_similar_games");
    return eT.has(t)
        ? null
        : l
          ? (0, a.jsx)(eX, {
                showViewAllSkeleton: !1,
                skeletonTitleWidth: 124,
                children: (0, a.jsx)("div", {
                    className: nH.XG,
                    style: nX,
                    children: (0, a.jsx)(e$, {
                        children: J()
                            .range(0, 8)
                            .map((e) => (0, a.jsx)(nJ, { className: nH.aZ }, e)),
                    }),
                }),
            })
          : 0 === i.length
            ? null
            : (0, a.jsx)(eK, {
                  title: ej.intl.string(ej.t["6rLyQB"]),
                  children: (0, a.jsx)("div", {
                      className: nH.XG,
                      style: nX,
                      children: s
                          ? (0, a.jsx)(er.A, {
                                gap: "md",
                                items: i,
                                getItemKey: nK,
                                itemClassName: nH.cW,
                                renderItem: (e, t) =>
                                    (0, a.jsx)(n$, { game: e, trackClick: n, listItemProps: t }, e.id),
                            })
                          : (0, a.jsx)(ea.A, {
                                gap: "md",
                                children: i.map((e) => (0, a.jsx)(n$, { game: e, trackClick: n }, e.id)),
                            }),
                  }),
              });
}
n(667532);
var nq = n(853022);
let nZ = new Set(["1402418703554842694", "356877880938070016"]),
    n0 = [ti.V.EPICGAMES, ti.V.STEAM, ti.V.ROBLOX, ti.V.BATTLENET, ti.V.RIOT, ti.V.MINECRAFT];
var n1 = n(349361),
    n8 = n(924895),
    n4 = n(422688),
    n2 = n(505200),
    n3 = n(695250);
let n5 = function (e) {
    switch (e.category) {
        case ti.V.STEAM:
            return {
                icon: nm.N,
                text: ej.intl.string(ej.t.FsANs4),
                ariaLabel: ej.intl.string(ej.t["P+ePTG"]),
                action: _.GameProfileTrackActionActions.SteamStoreLink,
                url: e.url,
            };
        case ti.V.EPICGAMES:
            return {
                icon: n1.r,
                text: ej.intl.string(ej.t.ZbBMHa),
                ariaLabel: ej.intl.string(ej.t.BwX0UW),
                action: _.GameProfileTrackActionActions.EpicStoreLink,
                url: e.url,
            };
        case ti.V.ROBLOX:
            return {
                icon: n8.H,
                text: ej.intl.string(ej.t["pJ+P+h"]),
                ariaLabel: ej.intl.string(ej.t.tYxpdf),
                action: _.GameProfileTrackActionActions.RobloxStoreLink,
                url: e.url,
            };
        case ti.V.BATTLENET:
            return {
                icon: n4.a,
                text: ej.intl.string(ej.t["A7grp+"]),
                ariaLabel: ej.intl.string(ej.t.x9at20),
                action: _.GameProfileTrackActionActions.BattlenetStoreLink,
                url: e.url,
            };
        case ti.V.RIOT:
            return {
                icon: n2.A,
                text: ej.intl.string(ej.t.h6MapL),
                ariaLabel: ej.intl.string(ej.t["528nvc"]),
                action: _.GameProfileTrackActionActions.RiotStoreLink,
                url: e.url,
            };
        case ti.V.MINECRAFT:
            return {
                icon: n3.m,
                text: ej.intl.string(ej.t["HZbmO+"]),
                ariaLabel: ej.intl.string(ej.t.WWTqYn),
                action: _.GameProfileTrackActionActions.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: tb.Y,
                text: ej.intl.string(ej.t["QpN/Iz"]),
                ariaLabel: ej.intl.string(ej.t["8JZmmF"]),
                action: _.GameProfileTrackActionActions.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function n6(e) {
    return (0, a.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var n7 = n(48460);
function n9(e) {
    let t,
        n,
        l,
        i,
        a,
        r =
            ((t = (0, np.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ek.d3x.XBOX_GAME_PASS && !(0, tl.uJ)(e.id));
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
                            (e.category !== ti.V.EPICGAMES || !!nZ.has(l)) &&
                            (e.category !== ti.V.STEAM || a !== d.Y.RETIRED_ABANDONED) &&
                            n0.includes(e.category),
                    ) ?? [];
                null == t ||
                    a === d.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === ti.V.STEAM) ||
                    e.push({ category: ti.V.STEAM, url: t });
                let s = e.sort((e, t) => (e.category === ti.V.STEAM ? -1 : +(t.category === ti.V.STEAM)));
                return (null != n && s.unshift({ category: "XBOX_GAME_PASS", url: n }), s);
            }, [t, i, l, a, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function le(e) {
    let { data: t, trackAction: n } = e,
        l = (0, tA.A)();
    return (0, a.jsx)(n6, {
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
        { showsStoreLinks: i, storeWebsites: r } = n9(t),
        c = s.useMemo(() => r.map(n5).filter((e) => null != e), [r]);
    if (!i) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, a.jsx)(le, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, a.jsxs)("div", {
            className: n7.G,
            children: [(0, a.jsx)(le, { data: c[0], trackAction: l }), (0, a.jsx)(le, { data: c[1], trackAction: l })],
        });
    let o = (0, a.jsx)(n6, {
        text: ej.intl.string(ej.t["/hMurx"]),
        "aria-label": ej.intl.string(ej.t.nK60cc),
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
        ? (0, a.jsxs)("div", { className: n7.G, children: [(0, a.jsx)(le, { data: c[0], trackAction: l }), o] })
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
    let m = i ? ej.intl.string(ej.t["6MwJo/"]) : ej.intl.string(ej.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: c()(tk.fi, tk.mX),
        children: [
            (0, a.jsx)(ee.E, {
                ref: l,
                className: tk.g5,
                lineClamp: i ? void 0 : d,
                variant: "text-md/medium",
                children: t.description,
            }),
            r && (0, a.jsx)(ln.Q, { onClick: o, text: m }),
        ],
    });
}
var li = n(109112),
    la = n(761508),
    ls = n(739187),
    lr = n(857250),
    lc = n(97483),
    lo = n(922016),
    lu = n(980707),
    ld = n(477782),
    lm = n(663341),
    lx = n(408278),
    lg = n(34188),
    lh = n(173936),
    lf = n(365199),
    lj = n(789645),
    lp = n(442433),
    lA = n(50268),
    lE = n(44724),
    lv = n(676924),
    lI = n(957565),
    lN = n(945810);
let lb = { enabled: !1 },
    lC = (0, lN.mj)({
        name: "2026-09-game-profiles-v3-commerce-tab",
        kind: "user",
        defaultConfig: lb,
        variations: { 0: lb, 1: { enabled: !0 } },
    });
function lS(e) {
    let { location: t } = e;
    return lC.useConfig({ location: t }).enabled;
}
var lk = (((i = {}).OVERVIEW = "overview"), (i.COMMUNITIES = "communities"), (i.COMMERCE = "commerce"), i),
    lT = n(695366),
    ly = n(540185),
    lR = n(926268),
    lL = n(53788),
    lM = n(831453),
    lO = n(785866),
    lP = n(555704),
    lG = n(47675),
    l_ = n(633075),
    lw = n(289173),
    lV = n(321191),
    lD = n(958805),
    lF = n(735321),
    lU = n(96173),
    lY = n(280450),
    lW = n(403362);
async function lB(e) {
    let t = e((0, lF.BF)());
    await lD.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function lz(e) {
    var t;
    let l,
        { game: i, className: r, trackAction: c, activeTab: o } = e,
        u = s.useRef(null),
        d = s.useRef(null),
        x = (0, lA.A)({ id: i.id, label: ej.intl.string(ej.t.SHQGPj) }),
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
                : (0, a.jsx)(ld.Dr, {
                      id: "game-profile-something-wrong",
                      label: ej.intl.string(ej.t.qP2cXd),
                      action: l,
                      color: "danger",
                      leadingAccessory: { type: "icon", icon: lT.E },
                  })),
        j = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, m.bG)([lY.default], () => lY.default.getId()),
                i = s.useMemo(
                    () => [
                        {
                            type: ly.x.FAVORITE_GAMES,
                            addLabel: ej.intl.string(ej.t.fgmitg),
                            removeLabel: ej.intl.string(ej.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: lR.HeartIcon,
                        },
                        {
                            type: ly.x.PLAYED_GAMES,
                            addLabel: ej.intl.string(ej.t["0xIVLR"]),
                            removeLabel: ej.intl.string(ej.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: lL.G,
                        },
                        {
                            type: ly.x.CURRENT_GAMES,
                            addLabel: ej.intl.string(ej.t.G0c4En),
                            removeLabel: ej.intl.string(ej.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: lM.H,
                        },
                        {
                            type: ly.x.WANT_TO_PLAY_GAMES,
                            addLabel: ej.intl.string(ej.t.UuBS4K),
                            removeLabel: ej.intl.string(ej.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: lO._,
                        },
                    ],
                    [],
                ),
                r = (0, m.yK)([lV.A], () => (null == l ? [] : (lV.A.getUserProfile(l)?.widgets ?? [])), [l]),
                c = (0, lU.A)(),
                o = s.useMemo(() => {
                    if (null == e) return null;
                    let t = new Set([...c, ...r].filter((e) => e instanceof l_.R).map((e) => e.applicationId));
                    return [e.id, e.getOfficialApplicationId()].filter(lW.Vq).find((e) => t.has(e)) ?? null;
                }, [c, r, e]),
                u = s.useCallback(
                    async (e, n) => {
                        let l;
                        if (
                            (await lB((i) => {
                                let a = i.filter(lw.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.gameId === t) || (null != a && (0, lF.uA)(a))) return i;
                                    let n = { gameId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new lw.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.gameId !== t);
                                    l = new lw.Yy({ ...a, games: e });
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
                        (0, lG.un)({
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
                            (await lB((n) =>
                                e
                                    ? n.some((e) => e instanceof l_.R && e.applicationId === o)
                                        ? n
                                        : [(t = new l_.R({ applicationId: o })), ...n]
                                    : ((t = n.find((e) => e instanceof l_.R && e.applicationId === o) ?? null),
                                      n.filter((e) => !(e instanceof l_.R && e.applicationId === o))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, lG.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [o],
                );
            if (null == l) return null;
            let x = null != e && (0, lF.XX)(e),
                g = [];
            if (null != o) {
                let e = r.some((e) => e instanceof l_.R && e.applicationId === o);
                g.push(
                    (0, a.jsx)(
                        ld.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? ej.intl.formatToPlainString(ej.t.Ktb1n8, { name: n })
                                : ej.intl.formatToPlainString(ej.t.Xp6iZt, { name: n }),
                            action: () => d(!e),
                            leadingAccessory: { type: "icon", icon: lP.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (x)
                for (let e of i) {
                    let n = r.filter(lw.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.gameId === t),
                        i = !l && null != n && (0, lF.uA)(n);
                    g.push(
                        (0, a.jsx)(
                            ld.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: i ? ej.intl.string(ej.t["86OoiH"]) : void 0,
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
        E = lS({ location: "GameProfileOverflowMenu" }),
        v = (0, m.bG)([Y.A], () => Y.A.getApplicationIdFromDetectableId(i.id)),
        I = (0, m.bG)([Y.A], () => Y.A.hasStorefrontForApplicationId(v), [v]),
        b = s.useCallback(() => {
            null != v && (0, lE.G)({ applicationId: v });
        }, [v]),
        C = s.useCallback(() => {
            null != v && (c(_.GameProfileTrackActionActions.GameShop), (0, lE.default)({ applicationId: v }), p());
        }, [v, c, p]),
        S = s.useCallback(() => p(!1), [p]),
        k = s.useCallback(() => {
            c(_.GameProfileTrackActionActions.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${ek.BVt.GAME_PROFILE(i.id)}`;
            (0, lI.C)(e, () => {
                (0, ls.P)((0, lr.o)(ej.intl.string(ej.t["+5kSoW"]), lc.Ck.SUCCESS));
            });
        }, [i.id, c]);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            o === lk.COMMERCE &&
                (0, a.jsx)(lv.A, { location: N.A.GAME_PROFILE, onNavigate: p, variant: "overlay-secondary" }),
            null != j &&
                o !== lk.COMMERCE &&
                (0, a.jsx)(lo.Y, {
                    targetElementRef: d,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lu.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                ((0, lp.Z_)(), t());
                            },
                            "aria-label": ej.intl.string(ej.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(ld.rX, { children: j }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: d,
                            children: (0, a.jsx)(h.$, {
                                icon: lm.PlusLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: ej.intl.string(ej.t.sidPSo),
                            }),
                        }),
                }),
            I &&
                !E &&
                (0, a.jsx)(g.m, {
                    text: ej.intl.string(ej.t.apFNLU),
                    children: (0, a.jsx)(lx.K, {
                        icon: lg.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": ej.intl.string(ej.t.apFNLU),
                        onMouseDown: b,
                        onClick: C,
                    }),
                }),
            o !== lk.COMMERCE &&
                (0, a.jsx)(g.m, {
                    text: ej.intl.string(ej.t.WqhZss),
                    children: (0, a.jsx)(lx.K, {
                        icon: lh.LinkIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": ej.intl.string(ej.t.WqhZss),
                        onClick: k,
                    }),
                }),
            (null != x || null != f) &&
                o !== lk.COMMERCE &&
                (0, a.jsx)(lo.Y, {
                    targetElementRef: u,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(lu.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                ((0, lp.Z_)(), t());
                            },
                            "aria-label": ej.intl.string(ej.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(ld.rX, { children: f }), (0, a.jsx)(ld.rX, { children: x })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(g.m, {
                            text: ej.intl.string(ej.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: u,
                                children: (0, a.jsx)(lx.K, {
                                    icon: lf.MoreHorizontalIcon,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": ej.intl.string(ej.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(lx.K, {
                icon: lj.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: S,
                "aria-label": ej.intl.string(ej.t.cpT0Cq),
            }),
        ],
    });
}
let lH = { enabled: !1 },
    lX = (0, lN.mj)({
        name: "2026-09-game-profiles-v3-communities-tab",
        kind: "user",
        defaultConfig: lH,
        variations: { 0: lH, 1: { enabled: !0 } },
    });
function lK(e) {
    let { className: t, navigation: n } = e,
        { selectedTab: l, selectTab: i } = n;
    if (
        !(function (e) {
            let { location: t } = e;
            return lX.useConfig({ location: t }).enabled;
        })({ location: "GameProfileCommunitiesTabBar" })
    )
        return null;
    let s = ej.intl.string(ej.t["3xFZEo"]);
    return (0, a.jsx)(la.V.Item, {
        id: lk.COMMUNITIES,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: l,
        onClick: () => i(lk.COMMUNITIES),
        className: t,
        "aria-label": s,
        children: (0, a.jsx)(ee.E, { variant: "text-md/medium", color: "none", children: s }),
    });
}
var lJ = n(331322),
    l$ = n(278416),
    lQ = n(478016),
    lq = n(900797),
    lZ = n(847374),
    l0 = n(421773),
    l1 = n(421108);
let l8 = "text-md/medium",
    l4 = [];
function l2(e) {
    let { label: t, chevron: n, socialLayerStorefront: l } = e,
        i = (function (e) {
            let { hasCommerceTab: t, storefront: n } = e,
                l = Object.values(n?.promotions ?? {}).find((e) => {
                    let { flavor: t, endsAt: n } = e;
                    return "nitro" === t && (null == n || null != (0, l1.ZH)(n));
                }),
                i = (0, l1.tm)(l?.endsAt);
            return t && null != l && !i;
        })(l);
    return (0, a.jsxs)(lJ.B, {
        as: "span",
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        children: [
            i &&
                (0, a.jsx)(l$.TagIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: nx.A.colors.ICON_FEEDBACK_POSITIVE,
                    "aria-hidden": "true",
                }),
            (0, a.jsxs)(lJ.B, {
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
function l3(e) {
    let { className: t, label: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: r, selectTab: c } = l,
        { storefront: o, selectedStorefrontPageIndex: u, selectStorefrontPage: d } = i,
        m = o?.pages ?? l4,
        x = s.useRef(null),
        { isHovered: g, setIsHovered: h, onMouseEnter: f, onMouseLeave: j, cancelTimers: p } = (0, l0.A)(100, 100),
        A = ej.intl.string(ej.t["J3/JCl"]),
        E = s.useCallback(
            (e) => {
                (p(), h(e));
            },
            [p, h],
        );
    return (0, a.jsx)(lo.Y, {
        targetElementRef: x,
        shouldShow: g,
        position: "bottom",
        align: "left",
        useMouseEnter: !0,
        onRequestOpen: () => E(!0),
        onRequestClose: () => E(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)("div", {
                onMouseEnter: f,
                onMouseLeave: j,
                children: (0, a.jsx)(lu.W, {
                    navId: "game-profile-commerce-pages",
                    "aria-label": A,
                    onClose: t,
                    onSelect: void 0,
                    children: (0, a.jsx)(ld.rX, {
                        children: m.map((e, t) => {
                            var n;
                            let l,
                                i = r === lk.COMMERCE && t === u,
                                s =
                                    ((n = e.title),
                                    null != (l = n?.trim()) && l.length > 0
                                        ? l
                                        : ej.intl.formatToPlainString(ej.t.IGMs8S, { pageNumber: t + 1 }));
                            return (0, a.jsx)(
                                ld.Dr,
                                {
                                    id: `commerce-page-${t}`,
                                    label: s,
                                    color: i ? "brand" : "default",
                                    trailingIndicator: i ? { type: "icon", icon: lQ.U } : void 0,
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
                o = s ? lq.t : lZ.a;
            return (0, a.jsx)(la.V.Item, {
                ...e,
                id: lk.COMMERCE,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r === lk.COMMERCE ? lk.COMMERCE : void 0,
                onClick: (t) => {
                    (c(lk.COMMERCE), e.onClick(t));
                },
                onMouseLeave: j,
                clickableRef: (e) => {
                    x.current = e?.ref ?? null;
                },
                className: t,
                "aria-label": A,
                "aria-haspopup": "menu",
                children: (0, a.jsx)(ee.E, {
                    variant: l8,
                    color: "none",
                    children: (0, a.jsx)(l2, {
                        label: n,
                        chevron: (0, a.jsx)(o, { size: "xs", color: "currentColor" }),
                        socialLayerStorefront: i,
                    }),
                }),
            });
        },
    });
}
function l5(e) {
    let { className: t, navigation: n, socialLayerStorefront: l } = e,
        { selectedTab: i, selectTab: s } = n,
        { hasCommerceTab: r, storefront: c } = l;
    if (!r) return null;
    let o = ej.intl.string(ej.t.apFNLU);
    return (c?.pages.length ?? 0) > 1
        ? (0, a.jsx)(l3, { className: t, label: o, navigation: n, socialLayerStorefront: l })
        : (0, a.jsx)(la.V.Item, {
              id: lk.COMMERCE,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: i,
              onClick: () => s(lk.COMMERCE),
              className: t,
              "aria-label": o,
              children: (0, a.jsx)(ee.E, {
                  variant: l8,
                  color: "none",
                  children: (0, a.jsx)(l2, { label: o, socialLayerStorefront: l }),
              }),
          });
}
var l6 = n(510954);
function l7(e) {
    let { game: t, trackAction: n, navigation: l, socialLayerStorefront: i } = e,
        { selectedTab: r, selectTab: c } = l,
        o = t.getIconURL(64),
        [u, d] = s.useState(null),
        m = s.useCallback(() => d(o), [o]),
        x = ej.intl.string(ej.t.qHmbyh);
    return (0, a.jsx)("div", {
        className: l6.wx,
        children: (0, a.jsxs)("div", {
            className: l6.ap,
            children: [
                (0, a.jsx)("div", {
                    className: l6.wE,
                    children:
                        null != o && o !== u
                            ? (0, a.jsx)("img", { src: o, alt: "", className: l6.FC, draggable: !1, onError: m })
                            : (0, a.jsx)(li._, { size: "md" }),
                }),
                (0, a.jsxs)(la.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: r,
                    onItemSelect: c,
                    className: l6.vR,
                    children: [
                        (0, a.jsx)(la.V.Item, {
                            id: lk.OVERVIEW,
                            disableItemStyles: !0,
                            className: l6.Mf,
                            "aria-label": x,
                            children: (0, a.jsx)(ee.E, { variant: "text-md/medium", color: "none", children: x }),
                        }),
                        (0, a.jsx)(lK, { className: l6.Mf, navigation: l }),
                        (0, a.jsx)(l5, { className: l6.Mf, navigation: l, socialLayerStorefront: i }),
                    ],
                }),
                (0, a.jsx)(lz, { game: t, className: l6.HK, trackAction: n, activeTab: r }),
            ],
        }),
    });
}
var l9 = n(439303),
    ie = n(658820),
    it = n(787188);
function il(e) {
    let { applicationId: t, selectedPageIndex: n } = e;
    return (0, a.jsx)(ie.SocialLayerStorefrontInnerWrapper, {
        applicationId: t,
        pageIndex: n,
        analyticsLocation: N.A.GAME_PROFILE_GAME_SHOP,
        analyticsPlacement: l9.Ye.GAME_PROFILE_GAME_SHOP,
        className: it.kL,
        scrollerClassName: it.XG,
        promotionBannerClassName: it.Rv,
    });
}
var ii = n(871123),
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
        i = (0, el.l)("social_layer_storefront_card_row"),
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
          ? (0, a.jsx)(er.A, {
                gap: "md",
                "aria-label": `${ej.intl.string(ej.t["kocF+6"])}`,
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
          : (0, a.jsx)(ea.A, {
                gap: "md",
                "aria-label": ej.intl.string(ej.t["kocF+6"]),
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
    ig = n(647474),
    ih = n(162536);
function ij(e) {
    let { promotion: t, className: n } = e,
        l = t.endsAt;
    if ((0, l1.tm)(l)) return null;
    let i = "nitro" === t.flavor,
        s = i ? im.t : t.Icon;
    return (0, a.jsx)(ig.A, {
        className: c()(ih.vK, n),
        color: i ? "nitro-pink" : void 0,
        children: (0, a.jsxs)("div", {
            className: ih.Qs,
            children: [
                null != s && (0, a.jsx)(s, { size: "xs", color: "currentColor", className: ih.Kk }),
                (0, a.jsx)(ee.E, { variant: "text-sm/normal", color: "currentColor", children: (0, ix.U)(t.text) }),
            ],
        }),
    });
}
var ip = n(521058);
function iA() {
    let { storefrontPromotion: e } = X();
    if (null == e || "nitro" !== e.flavor) return null;
    let { endsAt: t, flavor: n, pdp: l, rewardRequirements: i, storefront: s } = e;
    if (null == s || (0, tl.uJ)(s.headerText)) return null;
    let r = {
        Icon: (0, id.LZ)(l?.icon ?? null),
        text: s.headerText,
        tooltip: null,
        endsAt: (0, id.RD)(t),
        flavor: n,
        rewardRequirements: i,
    };
    return (0, a.jsx)(ij, { className: ip.v, promotion: r });
}
let iE = [0, 1, 2, 3],
    iv = { placement: l9.Ye.GAME_PROFILE };
function iI() {
    return (0, a.jsx)(eX, {
        showViewAllSkeleton: !0,
        skeletonTitleWidth: 172,
        children: (0, a.jsx)(e$, { children: iE.map((e) => (0, a.jsx)(io, { children: (0, a.jsx)(is.yf, {}) }, e)) }),
    });
}
function iN(e) {
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
                if (r) return void n(lk.COMMERCE);
                (t(_.GameProfileTrackActionActions.GameShop),
                    c(),
                    (0, lE.default)({ applicationId: l.application.id }));
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
                            (0, ii.rG)(e, t, n, i) && c();
                        },
                    }));
            },
            [t, c, o, l],
        );
    if (i) return (0, a.jsx)(iI, {});
    if (null == l) return null;
    let { skuIds: m } = l;
    return (0, a.jsxs)(eK, {
        title: ej.intl.string(ej.t.WDdlUb),
        onClickViewAll: u,
        children: [
            (0, a.jsx)(iA, {}),
            (0, a.jsx)(l9.E9, {
                newValue: iv,
                children: (0, a.jsx)(iu, { skuIds: m, analyticsLocations: o, onCardClick: d }),
            }),
        ],
    });
}
var ib = n(733391),
    iC = n(171616);
let iS = {
        [lk.OVERVIEW]: _.GameProfileTrackActionActions.Overview,
        [lk.COMMUNITIES]: _.GameProfileTrackActionActions.Communities,
        [lk.COMMERCE]: _.GameProfileTrackActionActions.GameShop,
    },
    ik = s.memo(function (e) {
        let { game: t, trackAction: n, selectTab: l, getScrollOffset: i } = e;
        return (0, a.jsxs)("div", {
            className: tk.oC,
            children: [
                (0, a.jsxs)("div", {
                    className: tk.lM,
                    children: [
                        (0, a.jsx)(nd, { game: t, trackAction: n }),
                        (0, a.jsx)(ll, { game: t, trackAction: n }),
                    ],
                }),
                (0, a.jsx)(te, { gameId: t.id, trackAction: n, getScrollOffset: i }),
                (0, a.jsx)(iN, { trackAction: n, selectTab: l }),
                (0, a.jsx)(nU, { game: t, trackAction: n }),
                (0, a.jsx)(nQ, { gameId: t.id, trackAction: n }),
            ],
        });
    }),
    iT = s.memo(function (e) {
        let { game: t, trackAction: n, analyticsLocations: l, selectTab: i, getScrollOffset: s } = e,
            r = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
        return (0, a.jsxs)("div", {
            className: tk.V0,
            children: [
                (0, a.jsx)(nd, { game: t, trackAction: n }),
                (0, a.jsxs)("div", {
                    className: tk.gr,
                    children: [
                        (0, a.jsx)(t$, { game: t, isTwoColumn: !1 }),
                        (0, a.jsxs)("div", {
                            className: tk.E1,
                            children: [
                                (0, a.jsx)(lt, { game: t, trackAction: n }),
                                (0, a.jsx)(ll, { game: t, trackAction: n }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(t2, { analyticsLocations: l, trackAction: n }),
                (0, a.jsx)(tD, { trackAction: n }),
                (0, a.jsx)(te, { gameId: t.id, trackAction: n, getScrollOffset: s }),
                (0, a.jsx)(iN, { trackAction: n, selectTab: i }),
                (0, a.jsx)(nU, { game: t, trackAction: n }),
                (0, a.jsx)(nQ, { gameId: t.id, trackAction: n }),
                r && (0, a.jsx)(nC, { game: t, trackAction: n }),
                (0, a.jsx)(tO, { game: t, trackAction: n }),
            ],
        });
    });
function iy(e) {
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
        text: ej.intl.string(ej.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(h.$, {
            icon: f.h,
            text: ej.intl.string(ej.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function iR(e) {
    let { gameId: t, cloudPlayAppId: n, analyticsLocations: l, trackAction: i } = e,
        s = (0, I.rC)({ applicationId: n, sourceApplicationId: t, analyticsLocations: l });
    return null == s
        ? null
        : (0, a.jsx)("div", {
              className: tk.NC,
              children: (0, a.jsx)(iy, { onCloudPlayClick: s, analyticsLocations: l, trackAction: i }),
          });
}
function iL(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        i = (0, v.A)(t.linkedApplications)?.id,
        [s] = (0, M.L_)(t.getOfficialApplicationId()),
        [r] = (0, M.L_)(t.id),
        { showsStoreLinks: o } = n9(t),
        u = t.steamReleaseStatus !== d.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: c()(tk.Pn, tk.fi, tk.iH, o ? tk.sV : tk.gF),
        children: [
            null == i || s || r
                ? null
                : (0, a.jsx)(iR, { gameId: t.id, cloudPlayAppId: i, analyticsLocations: l, trackAction: n }),
            (0, a.jsxs)("div", {
                className: tk.V0,
                children: [
                    (0, a.jsx)(lt, { game: t, trackAction: n }),
                    (0, a.jsx)(t2, { analyticsLocations: l, trackAction: n }),
                    (0, a.jsx)(tD, { trackAction: n }),
                    u && (0, a.jsx)(nC, { game: t, trackAction: n }),
                    (0, a.jsx)(tO, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function iM(e) {
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
            (0, a.jsx)(tX, { game: t, ref: x }),
            (0, a.jsxs)(j.Ch, {
                ref: g,
                className: tk.XG,
                onScroll: A,
                children: [
                    (0, a.jsx)("div", { className: tk.xY, "aria-hidden": !0 }),
                    (0, a.jsx)(tZ, { game: t }),
                    (0, a.jsx)(p.F, {
                        children: n
                            ? (0, a.jsxs)("div", {
                                  className: tk.jC,
                                  children: [
                                      (0, a.jsx)(ik, { game: t, trackAction: d, selectTab: l, getScrollOffset: f }),
                                      (0, a.jsx)(iL, {
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
                                  className: tk.b9,
                                  children: (0, a.jsx)(iT, {
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
function iO(e) {
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
        [p, v] = s.useState(null),
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
        { invite: ec, isMember: eo, isResolving: eu } = (0, D.Ay)(J, v),
        { socialLayerStorefrontRecommendationsData: ed, socialLayerStorefrontRecommendationsLoading: em } = (function (
            e,
        ) {
            let t = z.default.getCurrentUser()?.id,
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
    ((0, E.Ay)(() => {
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
        (0, E.Ay)(() => () => {
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
            let [t, n] = s.useState(lk.OVERVIEW),
                [l, i] = s.useState(0),
                a = s.useCallback((e) => {
                    (n(e), i((e) => e + 1));
                }, []),
                r = s.useCallback(
                    (n) => {
                        if (n !== t) {
                            let t = iS[n];
                            null != t && e(t);
                        }
                        a(n);
                    },
                    [t, a, e],
                );
            return { navigation: s.useMemo(() => ({ selectedTab: t, selectTab: r }), [t, r]), selectionVersion: l };
        })(ex),
        { selectedTab: eE } = ep,
        ev = (function (e) {
            let { game: t, navigation: n } = e,
                { selectedTab: l, selectTab: i } = n,
                a = t?.id,
                r = t?.getOfficialApplicationId(),
                c = lS({ location: "GameProfileModal" });
            s.useEffect(() => {
                c && (0, ib.Xw)();
            }, [c]);
            let o = (0, m.bG)(
                    [Y.A],
                    () =>
                        (null != a ? Y.A.getApplicationIdFromDetectableId(a) : void 0) ??
                        (null != r && Y.A.hasStorefrontForApplicationId(r) ? r : null),
                    [a, r],
                ),
                u = c && null != o,
                { storefront: d } = (0, iC.A)({ applicationId: u ? o : null }),
                [x, g] = s.useState({ storefrontId: d?.id, index: 0 }),
                [h, f] = s.useState(l);
            l !== h && (f(l), l !== lk.COMMERCE && g({ storefrontId: d?.id, index: 0 }));
            let j = x.storefrontId === d?.id && x.index < (d?.pages.length ?? 0) ? x.index : 0,
                p = s.useCallback(
                    (e) => {
                        !u ||
                            e < 0 ||
                            e >= (d?.pages.length ?? 0) ||
                            (g({ storefrontId: d?.id, index: e }), i(lk.COMMERCE));
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
        { hasCommerceTab: eI, storefrontApplicationId: eN, storefront: eb, selectedStorefrontPageIndex: eC } = ev,
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
                  children: (0, a.jsx)(H.Provider, {
                      value: ek,
                      children: (0, a.jsx)("div", {
                          className: c()(I, tk.kL),
                          ref: eh,
                          children: (0, a.jsxs)(O.A, {
                              obscured: et,
                              onClose: ej,
                              children: [
                                  (0, a.jsx)("div", {
                                      className: tk.sx,
                                      children: (0, a.jsx)(l7, {
                                          game: J,
                                          trackAction: ex,
                                          navigation: ep,
                                          socialLayerStorefront: ev,
                                      }),
                                  }),
                                  eE === lk.OVERVIEW &&
                                      (0, a.jsx)(iM, {
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
                                  eE === lk.COMMERCE && (0, a.jsx)(il, { applicationId: eN, selectedPageIndex: eC }),
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
                e !== u && ((0, D.UT)(e), o({ gameId: e, source: t }));
            },
            [u],
        );
    return (0, a.jsx)(
        iO,
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
