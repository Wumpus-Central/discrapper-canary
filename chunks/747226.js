l.d(t, { default: () => nm });
var n,
    i = l(627968),
    a = l(64700),
    s = l(503698),
    r = l.n(s),
    c = l(562708),
    o = l(535185),
    u = l(792216),
    d = l(17928),
    m = l(990078),
    x = l(521489),
    h = l(821609),
    g = l(414499),
    f = l(192308),
    p = l(689175),
    j = l(707554),
    v = l(155718),
    E = l(964486),
    A = l(737393),
    I = l(793574),
    N = l(688810),
    b = l(139286),
    S = l(46225),
    C = l(590703),
    R = l(180170),
    k = l(751765),
    T = l(569926),
    y = l(928550),
    L = l(570962),
    O = l(975732),
    _ = l(773669),
    G = l(409626),
    M = l(422069),
    P = l(945810);
let w = { enabled: !1, dense: !1 },
    D = (0, P.mj)({
        kind: "user",
        name: "2026-06-similar-games-desktop",
        defaultConfig: w,
        variations: { 0: w, 1: { enabled: !0, dense: !0 }, 2: { enabled: !0, dense: !1 } },
    });
(0, P.mj)({
    kind: "user",
    name: "2026-06-similar-games-mobile",
    defaultConfig: w,
    variations: { 0: w, 1: { enabled: !0, dense: !0 }, 2: { enabled: !0, dense: !1 } },
});
var V = l(205184),
    W = l(505779),
    U = l(970163),
    Y = l(184989);
let F = function (e, t) {
    let [l, n] = a.useState(),
        i = a.useRef(null),
        s = a.useRef(t);
    a.useEffect(() => {
        s.current = t;
    }, [t]);
    let r = (0, d.bG)([Y.A], () => l?.guild?.id != null && Y.A.isMember(l?.guild?.id)),
        c = a.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === W.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        a.useEffect(() => {
            async function e(e) {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, U.A)(t, "game_profile");
                    !0 !== e.banned && ((i.current = t), n(e.invite), null != e.invite && s.current?.(e.invite));
                }
            }
            null != c && e(c.url);
        }, [c]),
        { invite: l, isMember: r }
    );
};
var B = l(49491),
    H = l(429913),
    z = l(832163),
    X = l(561794),
    K = l(862772),
    J = l(287809);
let $ = a.createContext(void 0);
function q() {
    let e = a.useContext($);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var Z = l(621466),
    Q = l(966697),
    ee = l(939249),
    et = l(834730),
    el = l(534514),
    en = l(460905),
    ei = l(449543),
    ea = l(46054),
    es = l(58703);
l(321073);
var er = l(387408),
    ec = l(731068),
    eo = l(59318),
    eu = l(320095),
    ed = l(708676),
    em = l(383233),
    ex = l(998218),
    eh = l(375708);
let eg = /^#{1,3}\s+(.+)$/,
    ef = /^https?:\/\/\S+$/;
function ep(e) {
    let t = ex.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
var ej = l(60465),
    ev = l(158390),
    eE = l(636537),
    eA = l(228366),
    eI = l(927813),
    eN = l(371794),
    eb = l(652215);
async function eS(e) {
    eA.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
            await (0, eN.aP)({
                url: eb.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                query: { locale: _.default.locale },
                rejectWithError: !1,
                retries: 2,
            })
        ).body.products.flatMap((e) => e.sku_ids);
        eA.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
    } catch (t) {
        eA.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
let eC = async (e) => {
        let t = (
            (await eE.Bo.get({ url: eb.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []
        ).filter((t) => t !== e);
        eA.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
    },
    eR = (0, d.UT)(M.A, {
        getQueryId: (e, t) => (t ? `similar-games:${e}` : null),
        get: (e) => M.A.getSimilarGames(e) ?? null,
        load: (e) => eC(e),
        retryConfig: { backoff: () => new ev.A(5 * eI.A.Millis.SECOND, 5 * eI.A.Millis.MINUTE) },
        failureStaleAfter: eI.A.Seconds.MINUTE,
    });
async function ek(e, t) {
    eA.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let l = {};
        t?.limit != null && (l.limit = t.limit);
        let n = (await eE.Bo.get({ url: eb.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
        eA.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: n.messages.map((e) => {
                let t,
                    l,
                    n = (0, er.A)((0, eu.rh)(e)),
                    i = n.content,
                    a = (function (e) {
                        if ((0, em._c)(e))
                            return e.components
                                .filter((e) => e.type === v.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || ef.test(t.trim())
                            ? ((function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return null;
                                  let l = [];
                                  return (
                                      null != t.rawTitle && l.push(`# ${t.rawTitle}`),
                                      null != t.rawDescription && l.push(t.rawDescription),
                                      l.length > 0 ? l.join("\n") : null
                                  );
                              })(e) ?? t)
                            : t;
                    })(n),
                    s = (function (e) {
                        if ((0, em._c)(e)) {
                            let t = e.components.find((e) => e.type === v.I5.MEDIA_GALLERY),
                                l = t?.items[0]?.media;
                            if (null != l) {
                                let t = (0, ec.FE)(l);
                                if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, eo.tT)(e.content_type));
                        if (null != t) return (0, ec.Rr)(t, e);
                        let l = e.attachments.find((e) => (0, eo.XB)(e.content_type));
                        if (null != l) return (0, ec.Rr)(l, e);
                        let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (n?.thumbnail != null)
                            return (0, ec.oU)(
                                n.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, ec.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, ec.oU)(
                                a.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === a) },
                                },
                                "IMAGE",
                            );
                    })(n),
                    { title: r, body: c } =
                        ((t = a.indexOf("\n")),
                        (l = (-1 === t ? a : a.slice(0, t)).match(eg)),
                        null != l
                            ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, em._c)(n)
                            ? void 0
                            : (function (e) {
                                  let t = e.embeds[0];
                                  if (null == t) return;
                                  let l = t.author?.name,
                                      n = t.author?.iconProxyURL ?? t.author?.iconURL,
                                      i = t.footer?.text ?? t.provider?.name,
                                      a = t.footer?.iconProxyURL ?? t.footer?.iconURL,
                                      s = t.url,
                                      r = t.color ?? void 0;
                                  if (null != l || null != i || null != s)
                                      return {
                                          authorName: l,
                                          authorIconUrl: n,
                                          providerName: i,
                                          providerIconUrl: a,
                                          url: s,
                                          color: r,
                                      };
                              })(n);
                return {
                    id: n.id,
                    media: s,
                    title: r,
                    body: c,
                    content: a,
                    timestamp: e.timestamp,
                    reactionCount: o,
                    embedSource: u,
                    poll: n.poll,
                };
            }),
            channelId: n.channel_id ?? void 0,
            guildId: n.guild_id ?? void 0,
        });
    } catch (t) {
        eA.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eT = l(284009),
    ey = l.n(eT),
    eL = l(376728),
    eO = l(976860),
    e_ = l(71393),
    eG = l(385648);
async function eM(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    ey()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = e_.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(eb.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eG.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: eb.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eL.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eO.pX)(eb.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var eP = l(320448),
    ew = l(274119);
function eD(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, i.jsxs)("div", {
        className: ew.k,
        children: [
            (0, i.jsxs)("div", {
                className: ew.w,
                children: [
                    (0, i.jsx)(el.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eP._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: eh.intl.string(eh.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eV = l(468489),
    eW = l(992595);
function eU(e, t) {
    return ea.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function eY(e) {
    let { variant: t, message: l, channelId: n, onCardClick: s } = e,
        [c, o] = a.useState(!1),
        u = "main" === t,
        d = a.useCallback(() => o(!0), []),
        m = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, Z.vq)(e.target, HTMLAnchorElement) ||
                        ((0, Z.vq)(e.target, HTMLSpanElement) && (0, Z.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(l.id);
            },
            [s, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? ep(h) : null) ?? h,
        { embedSource: f } = l;
    return null == f
        ? null
        : (0, i.jsx)(ee.D, {
              className: u ? eV.jI : eV.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: u ? eV.GT : eV.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(et.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eV.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eV._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eV.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: eV.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(et.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: f.authorName,
                                          }),
                                      ],
                                  }),
                              null != l.media &&
                                  null != g &&
                                  (0, i.jsx)("div", {
                                      className: eV.ax,
                                      children: (0, i.jsx)(Q.y, {
                                          readyState: c ? eb.Rv1.READY : eb.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: l.media.placeholder,
                                          placeholderVersion: l.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: eV.Lw,
                                              alt: "",
                                              draggable: !1,
                                              onLoad: d,
                                          }),
                                      }),
                                  }),
                              null != l.title &&
                                  (0, i.jsx)(el.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: u ? eV.KX : eV._N,
                                      children: eU(l.title, n),
                                  }),
                              l.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eV.h_, eW.PT),
                                      children: [eU(l.body, n), (0, i.jsx)("div", { className: eV.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eV.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: eV.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(et.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != f.providerName ? `${f.providerName} \xb7 ` : "",
                                              (0, es.i$)(new Date(l.timestamp), "LL"),
                                          ],
                                      }),
                                      l.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eV.a5,
                                              children: [
                                                  (0, i.jsx)(en.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(et.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eh.intl.currentLocale).format(
                                                          l.reactionCount,
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
function eF(e) {
    let { variant: t, message: l, channelId: n, onCardClick: s } = e,
        [c, o] = a.useState(!1),
        u = "main" === t,
        d = a.useCallback(() => o(!0), []),
        m = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, Z.vq)(e.target, HTMLAnchorElement) ||
                        ((0, Z.vq)(e.target, HTMLSpanElement) && (0, Z.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(l.id);
            },
            [s, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? ep(h) : null) ?? h,
        f = null != l.media && null != g;
    return (0, i.jsxs)(ee.D, {
        className: r()({ [eV.cG]: u && f, [eV.jI]: u && !f, [eV.IU]: !u }),
        onClick: m,
        children: [
            null != l.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eV._v : eV.eZ,
                    children: (0, i.jsx)(Q.y, {
                        readyState: c ? eb.Rv1.READY : eb.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: l.media.placeholder,
                        placeholderVersion: l.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? eV.fk : eV.v,
                            alt: "",
                            draggable: !1,
                            onLoad: d,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? eV.GT : eV.s4,
                children: [
                    null != l.title &&
                        (0, i.jsx)(el.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eV.KX : eV._N,
                            children: eU(l.title, n),
                        }),
                    l.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(eV.h_, eW.PT),
                            children: [eU(l.body, n), (0, i.jsx)("div", { className: eV.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eV.ov,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, es.i$)(new Date(l.timestamp), "LL"),
                            }),
                            l.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eV.a5,
                                    children: [
                                        (0, i.jsx)(en.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(et.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eh.intl.currentLocale).format(
                                                l.reactionCount,
                                            ),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eB(e) {
    let { variant: t, message: l, onCardClick: n } = e,
        s = "main" === t,
        { poll: r } = l,
        c = a.useCallback(() => n(l.id), [n, l.id]);
    if (null == r) return null;
    let o = r.answers.slice(0, 3),
        u = r.answers.length - o.length;
    return (0, i.jsx)(ee.D, {
        className: s ? eV.jI : eV.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: s ? eV.GT : eV.s4,
            children: [
                (0, i.jsx)(el.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eV.MH,
                    children: r.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eV.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eV.Nf,
                                    children: (0, i.jsx)(et.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eV.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        u > 0 &&
                            (0, i.jsx)(et.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: eV.PF,
                                children: eh.intl.format(eh.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eV.ov,
                    children: (0, i.jsx)(et.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eh.intl.format(eh.t.t0FTsH, {
                            createdAt: new Date(l.timestamp),
                            expiryLabel: (0, ed.J)(r.expiry) ?? eh.intl.string(eh.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function eH(e) {
    return null != e.message.poll
        ? (0, i.jsx)(eB, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eY, { ...e })
          : (0, i.jsx)(eF, { ...e });
}
function ez(e) {
    let { gameId: t, trackAction: l } = e,
        { analyticsLocations: n } = (0, N.Ay)(),
        { invite: s, closeModal: r, getScrollOffset: c } = q(),
        {
            messages: o,
            guildId: u,
            channelId: m,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, d.cf)([M.A], () => ({
                data: null != e ? M.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && M.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && M.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || l || M.A.isAnnouncementsFetching(e) || ek(e);
                }, [e, l]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n }
            );
        })(t),
        x = a.useCallback(() => {
            let e = s?.guild?.id ?? u;
            null != e &&
                null != m &&
                (l(G.Ws.Announcements),
                ej.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                r(),
                eM({ invite: s, guildId: e, channelId: m, analyticsLocationStack: n }));
        }, [l, r, c, s, u, m, n, t]),
        h = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (l(G.Ws.AnnouncementsItem),
                    ej.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    r(),
                    eM({ invite: s, guildId: i, channelId: m, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, s, u, m, n, t],
        );
    return null == m || 0 === o.length
        ? null
        : (0, i.jsx)(eD, {
              title: eh.intl.string(eh.t.B0BV3Y),
              onClickViewAll: x,
              children: (0, i.jsx)(ei.A, {
                  gap: 16,
                  children: o.map((e) =>
                      (0, i.jsx)(eH, { variant: "small", message: e, channelId: m, onCardClick: h }, e.id),
                  ),
              }),
          });
}
var eX = l(541830),
    eK = l(240248);
let eJ = [W.V.OFFICIAL, W.V.FACEBOOK, W.V.TWITTER, W.V.INSTAGRAM, W.V.YOUTUBE, W.V.BLUESKY, W.V.REDDIT, W.V.TWITCH];
var e$ = l(808380);
let eq = [e$.Y.DESKTOP, e$.Y.XBOX, e$.Y.PLAYSTATION, e$.Y.NINTENDO];
var eZ = l(349288),
    eQ = l(975807),
    e0 = l(194362);
function e1(e) {
    let { game: t, trackAction: l } = e,
        n = a.useCallback(async () => {
            l(G.Ws.ClaimGame);
            let e = await (0, e0.a)(eb.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, eQ.A)(e);
        }, [l]),
        s = a.useCallback((e) => (0, i.jsx)(eZ.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === v.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(et.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eh.intl.format(eh.t.KAjfKl, { claimLink: s }),
          });
}
var e8 = l(998445),
    e4 = l(274997),
    e2 = l(80500),
    e3 = l(319745),
    e5 = l(488225),
    e6 = l(967492),
    e9 = l(72265),
    e7 = l(454346),
    te = l(37948),
    tt = l(262420);
let tl = { size: "xs", colorClass: tt.wP };
function tn(e) {
    let { website: t, trackAction: l } = e,
        n = (0, te.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case W.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(e8.L, { ...t }),
                        action: G.Ws.WebsiteLink,
                        title: eh.intl.string(eh.t.fOUKvg),
                    };
                case W.V.TWITTER:
                    return { icon: (0, i.jsx)(e4.p, { ...t }), action: G.Ws.XLink, title: eh.intl.string(eh.t.INic4y) };
                case W.V.YOUTUBE:
                    return {
                        action: G.Ws.YouTubeLink,
                        icon: (0, i.jsx)(e2.C, { ...t }),
                        title: eh.intl.string(eh.t.lNmxbE),
                    };
                case W.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(e3.Z, { ...t }),
                        action: G.Ws.FacebookLink,
                        title: eh.intl.string(eh.t.FjyREK),
                    };
                case W.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(e5.L, { ...t }),
                        action: G.Ws.InstagramLink,
                        title: eh.intl.string(eh.t["cgR+IK"]),
                    };
                case W.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(e6.a, { ...t }),
                        action: G.Ws.BlueskyLink,
                        title: eh.intl.string(eh.t["D/PHq5"]),
                    };
                case W.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(e9.T, { ...t }),
                        action: G.Ws.RedditLink,
                        title: eh.intl.string(eh.t["Hgb+fc"]),
                    };
                case W.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(e7.a, { ...t }),
                        action: G.Ws.TwitchLink,
                        title: eh.intl.string(eh.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, tl),
        o = a.useCallback(() => {
            l(s), n(t.url);
        }, [s, n, l, t.url]);
    return (0, i.jsx)(m.m, {
        text: c,
        children: (0, i.jsx)(ee.D, { onClick: o, className: tt.yO, title: c, children: r }),
    });
}
var ti = l(31300),
    ta = l(802516),
    ts = l(22363),
    tr = l(418524),
    tc = l(141535);
function to(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case e$.Y.DESKTOP:
            return (0, i.jsx)(ti.k, { size: "xs", ...l });
        case e$.Y.XBOX:
            return (0, i.jsx)(ta.Y, { size: "xs", ...l });
        case e$.Y.PLAYSTATION:
            return (0, i.jsx)(ts.X, { size: "xs", ...l });
        case e$.Y.NINTENDO:
            return (0, i.jsx)(tr.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function tu(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        m.m,
        {
            text: (function (e) {
                switch (e) {
                    case e$.Y.DESKTOP:
                        return eh.intl.string(eh.t.KT6uCJ);
                    case e$.Y.XBOX:
                        return eh.intl.string(eh.t.DDWUJp);
                    case e$.Y.PLAYSTATION:
                        return eh.intl.string(eh.t.fzMz2s);
                    case e$.Y.NINTENDO:
                        return eh.intl.string(eh.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(to, { platform: t }),
        },
        t,
    );
}
var td = l(424994),
    tm = l(60541);
function tx() {
    return (0, i.jsx)(et.E, { variant: "text-sm/normal", color: "text-subtle", children: eh.intl.string(eh.t.GruYxV) });
}
let th = function (e) {
    let { game: t, trackAction: l } = e,
        n = a.useMemo(() => t.genres.map(eX.du).join(", "), [t]),
        s = t.getCompanyByRole(v.wk.PUBLISHER),
        r = t.getCompanyByRole(v.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                l = [...e];
            return (
                !e.has(e$.Y.DESKTOP) && (e.has(e$.Y.MACOS) || e.has(e$.Y.LINUX)) && l.push(e$.Y.DESKTOP),
                l.filter((e) => eq.includes(e)).sort((e, t) => eq.indexOf(e) - eq.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return eJ.includes(t);
            })
            .sort((e, t) => eJ.indexOf(e.category) - eJ.indexOf(t.category)),
        x = !(0, eK.uJ)(n),
        h = !(0, eK.uJ)(c),
        g = !(0, eK.uJ)(o),
        f = !(0, eK.uJ)(u),
        p = d.length > 0,
        j = m.length > 0 && !m.every((e) => (0, eK.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: tm.uW,
        children: [
            (0, i.jsx)("div", {
                className: tm.Gf,
                children: (0, i.jsx)(el.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eh.intl.string(eh.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tm.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: tm.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eh.intl.string(eh.t.pDgwYB) : eh.intl.string(eh.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(et.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tm.Gu,
                                      children: n,
                                  })
                                : (0, i.jsx)(tx, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tm.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? eh.intl.string(eh.t.Hc7Enk) : eh.intl.string(eh.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(et.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tm.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(tx, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tm.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eh.intl.string(eh.t.KATEJB) : eh.intl.string(eh.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(et.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tm.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(tx, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tm.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eh.intl.string(eh.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(et.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: tm.Gu,
                                      children: es.i$(new Date(u), "LL"),
                                  })
                                : (0, i.jsx)(tx, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tm.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? eh.intl.string(eh.t.PNqxNe) : eh.intl.string(eh.t["UxAag+"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: tm.Gu,
                                      children: d.map((e) => (0, i.jsx)(tu, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(tx, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tm.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eh.intl.string(eh.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: tm.Gu,
                                      children: m.map((e) => (0, i.jsx)(tn, { website: e, trackAction: l }, e.url)),
                                  })
                                : (0, i.jsx)(tx, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tm.J1,
                        children: [
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eh.intl.string(eh.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(et.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: tm.Gu,
                                children: eh.intl.format(eh.t.XPFZVl, { igdbLink: td.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: tm.OQ, children: (0, i.jsx)(e1, { game: t, trackAction: l }) }),
        ],
    });
};
var tg = l(714991),
    tf = l(486020),
    tp = l(552523);
function tj(e) {
    let { trackAction: t } = e,
        { canStartAuthorization: l, hasAlreadyLinked: n, invite: s, isMember: r, closeModal: c } = q(),
        o = a.useCallback(() => {
            null != s &&
                (t(G.Ws.JoinServer),
                c(),
                eA.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: eb.BRT.APP }));
        }, [s, t, c]);
    if (null == s || null == s.guild) return null;
    let u = tf.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        d = tf.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (l && !n) || null == d,
        x = (0, i.jsx)("img", {
            className: tp.$f,
            src: u,
            alt: eh.intl.formatToPlainString(eh.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        g = m ? tp.To : tp.Kt,
        f = m ? tp.yj : tp.FS;
    return (0, i.jsxs)("div", {
        className: tp.uW,
        children: [
            (0, i.jsx)(el.D, {
                className: tp.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eh.intl.string(eh.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: tp.kL,
                children: [
                    !m && null != d && (0, i.jsx)("img", { className: tp.ll, src: d, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: tp.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: tp._C,
                                              children: (0, i.jsx)("div", { className: tp.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: f,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: tp.YS,
                                                children: [
                                                    (0, i.jsx)(tg.A, { guild: s.guild, size: 16 }),
                                                    (0, i.jsx)(el.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, eK.uJ)(s.guild?.description) &&
                                                (0, i.jsx)(et.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: tp.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: tp.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: tp._o }),
                                                                      (0, i.jsx)(et.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eh.intl.format(eh.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: tp.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: tp.jk }),
                                                                      (0, i.jsx)(et.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eh.intl.format(eh.t.zRl6XR, {
                                                                              count: s.approximate_member_count,
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
                                text: r ? eh.intl.string(eh.t.cEnaWx) : eh.intl.string(eh.t.XpeFYr),
                                onClick: o,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tv = l(369606),
    tE = l(459746),
    tA = l(691540),
    tI = l(857250),
    tN = l(97483),
    tb = l(922016),
    tS = l(980707),
    tC = l(477782),
    tR = l(663341),
    tk = l(408278),
    tT = l(34188),
    ty = l(173936),
    tL = l(365199),
    tO = l(789645),
    t_ = l(442433),
    tG = l(50268),
    tM = l(44724),
    tP = l(957565),
    tw = l(341662),
    tD = l(67518),
    tV = l(540185),
    tW = l(926268),
    tU = l(53788),
    tY = l(831453),
    tF = l(785866),
    tB = l(555704),
    tH = l(457965),
    tz = l(47675),
    tX = l(633075),
    tK = l(289173),
    tJ = l(841595),
    t$ = l(958805),
    tq = l(735321),
    tZ = l(495544),
    tQ = l(760751);
async function t0(e) {
    let t = e((0, tq.BF)());
    await t$.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function t1(e) {
    let { game: t, className: l, trackAction: n } = e,
        s = a.useRef(null),
        r = a.useRef(null),
        c = (0, tG.A)({ id: t.id, label: eh.intl.string(eh.t.SHQGPj) }),
        o = (0, tD.n)(t.id, n),
        u = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, d.bG)([tZ.default], () => tZ.default.getId()),
                s = (0, d.bG)([tQ.A], () => tQ.A.getDetectableGame(t)),
                r = a.useMemo(
                    () => [
                        {
                            type: tV.x.FAVORITE_GAMES,
                            addLabel: eh.intl.string(eh.t.fgmitg),
                            removeLabel: eh.intl.string(eh.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tW.C,
                        },
                        {
                            type: tV.x.PLAYED_GAMES,
                            addLabel: eh.intl.string(eh.t["0xIVLR"]),
                            removeLabel: eh.intl.string(eh.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tU.G,
                        },
                        {
                            type: tV.x.CURRENT_GAMES,
                            addLabel: eh.intl.string(eh.t.G0c4En),
                            removeLabel: eh.intl.string(eh.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tY.H,
                        },
                        {
                            type: tV.x.WANT_TO_PLAY_GAMES,
                            addLabel: eh.intl.string(eh.t.UuBS4K),
                            removeLabel: eh.intl.string(eh.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: tF._,
                        },
                    ],
                    [],
                ),
                c = (0, d.yK)([tJ.A], () => (null == n ? [] : (tJ.A.getUserProfile(n)?.widgets ?? [])), [n]),
                o = (0, tH.w$)({ location: "game-profile-overflow-menu" }),
                u = a.useMemo(() => {
                    if (null == o || 0 === o.length) return null;
                    if (null != e) {
                        if (o.some((t) => t.applicationId === e.id)) return e.id;
                        for (let t of e.linkedApplications ?? [])
                            if (o.some((e) => e.applicationId === t.id)) return t.id;
                    }
                    return null;
                }, [o, e]),
                m = a.useCallback(
                    async (e, l) => {
                        let n;
                        if (
                            (await t0((i) => {
                                let a = i.filter(tK.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.applicationId === t) || (null != a && (0, tq.uA)(a)))
                                        return i;
                                    let l = { applicationId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new tK.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.applicationId !== t);
                                    n = new tK.Yy({ ...a, games: e });
                                }
                                var s = n;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let c = [...i];
                                return (c[r] = s), c;
                            }),
                            null == n)
                        )
                            return;
                        let i = n;
                        (0, tz.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                x = a.useCallback(
                    async (e) => {
                        let t;
                        if (
                            null == u ||
                            (await t0((l) =>
                                e
                                    ? l.some((e) => e instanceof tX.R && e.applicationId === u)
                                        ? l
                                        : [(t = new tX.R({ applicationId: u })), ...l]
                                    : ((t = l.find((e) => e instanceof tX.R && e.applicationId === u) ?? null),
                                      l.filter((e) => !(e instanceof tX.R && e.applicationId === u))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, tz.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [u],
                );
            if (null == n) return null;
            let h = null != e && null != s && (0, tq.XX)(s),
                g = [];
            if (null != u) {
                let e = c.some((e) => e instanceof tX.R && e.applicationId === u);
                g.push(
                    (0, i.jsx)(
                        tC.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eh.intl.formatToPlainString(eh.t.Ktb1n8, { name: l })
                                : eh.intl.formatToPlainString(eh.t.Xp6iZt, { name: l }),
                            action: () => x(!e),
                            leadingAccessory: { type: "icon", icon: tB.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of r) {
                    let l = c.filter(tK.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        a = !n && null != l && (0, tq.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            tC.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: a ? eh.intl.string(eh.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => m(e.type, !n),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: a,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(t),
        { invite: x, closeModal: g } = q(),
        f = (0, d.bG)([z.A], () => z.A.getApplicationIdFromDetectableId(t.id)),
        p = new Set(x?.guild?.features).has(eb.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        { enabled: j } = tw.A.useConfig({ location: "GameProfileOverflowMenu" }),
        v = a.useCallback(() => {
            null != f && (0, tM.G)({ applicationId: f });
        }, [f]),
        E = a.useCallback(() => {
            null != f && (n(G.Ws.GameShop), (0, tM.default)({ applicationId: f }), g());
        }, [f, n, g]),
        A = a.useCallback(() => g(!1), [g]),
        I = a.useCallback(() => {
            n(G.Ws.CopyLink);
            let e = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}${eb.BVt.GAME_PROFILE(t.id)}`;
            (0, tP.C)(e, () => {
                (0, tA.P0)((0, tI.o)(eh.intl.string(eh.t["+5kSoW"]), tN.Ck.SUCCESS));
            });
        }, [t.id, n]);
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            null != u &&
                (0, i.jsx)(tb.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tS.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, t_.Z_)(), t();
                            },
                            "aria-label": eh.intl.string(eh.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tC.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: r,
                            children: (0, i.jsx)(h.$, {
                                icon: tR.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eh.intl.string(eh.t.sidPSo),
                            }),
                        }),
                }),
            p &&
                null != x &&
                (0, i.jsx)(m.m, {
                    text: eh.intl.string(eh.t.apFNLU),
                    children: (0, i.jsx)(tk.K, {
                        icon: tT.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eh.intl.string(eh.t.apFNLU),
                        onMouseDown: v,
                        onClick: E,
                    }),
                }),
            j &&
                (0, i.jsx)(m.m, {
                    text: eh.intl.string(eh.t.WqhZss),
                    children: (0, i.jsx)(tk.K, {
                        icon: ty.q,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eh.intl.string(eh.t.WqhZss),
                        onClick: I,
                    }),
                }),
            (null != c || null != o) &&
                (0, i.jsx)(tb.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(tS.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, t_.Z_)(), t();
                            },
                            "aria-label": eh.intl.string(eh.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tC.rX, { children: o }), (0, i.jsx)(tC.rX, { children: c })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(m.m, {
                            text: eh.intl.string(eh.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: s,
                                children: (0, i.jsx)(tk.K, {
                                    icon: tL.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eh.intl.string(eh.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tk.K, {
                icon: tO.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: A,
                "aria-label": eh.intl.string(eh.t.cpT0Cq),
            }),
        ],
    });
}
var t8 = l(8208);
function t4(e) {
    let { game: t, show: l, trackAction: n } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: t8.y5,
        children: [
            (0, i.jsx)("div", { className: r()(t8.nI, l && t8.hD) }),
            (0, i.jsxs)("div", {
                className: r()(t8.A1, l && t8.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: t8.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: t8.hm,
                        children: [
                            (0, i.jsx)(el.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(t6, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(t1, { game: t, className: t8.HK, trackAction: n }),
        ],
    });
}
function t2(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(t8.nI, t8.Jn, t && t8.hD) });
}
let t3 = a.forwardRef(function (e, t) {
    let { game: l } = e,
        [n] = a.useState(() => Math.random()),
        s = a.useMemo(() => {
            if (null != l.bannerHash)
                return tf.Ay.getGameAssetURL({ id: l.id, hash: l.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != l.screenshotUrls && l.screenshotUrls.length > 0) {
                let e = Math.floor(n * l.screenshotUrls.length);
                return l.screenshotUrls[e];
            }
            return "";
        }, [l.id, l.bannerHash, l.screenshotUrls, n]);
    return (0, eK.uJ)(s)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: t8.y1, style: { backgroundImage: `url("${s}")` } }),
                  (0, i.jsx)("div", { className: t8.N4 }),
              ],
          });
});
function t5(e) {
    let { game: t } = e,
        l = (t.genres ?? []).map(eX.du).join(", ");
    return (0, eK.uJ)(l) ? null : (0, i.jsx)(et.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
function t6(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: t8.Qc,
        children: [
            (0, i.jsx)(tv.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(et.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eh.intl.formatToPlainString(eh.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function t9(e) {
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? t8.n8 : t8.FS,
        children: (0, i.jsx)(tE.A, { game: t, className: t8.xe, size: tE.w.LARGE }),
    });
}
let t7 = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: l, showCompactBar: n } = e,
        { isTwoColumn: s } = q(),
        c = a.useRef(null),
        o = a.useRef(null);
    a.useEffect(() => {
        let e = c.current,
            t = o.current;
        if (null == e || null == t) return;
        let n = (function (e, t) {
            let l = 0,
                n = e;
            for (; null != n && n !== t; ) (l += n.offsetTop), (n = n.offsetParent);
            return l;
        })(t, e);
        n > 0 && l?.(n);
    }, [l]);
    let u = t.name;
    return (0, i.jsxs)("div", {
        ref: c,
        className: r()(t8.ap, n && t8.Gh),
        children: [
            s &&
                null != t &&
                (0, i.jsx)("div", {
                    className: t8.Tf,
                    children: (0, i.jsx)(tE.A, { game: t, className: t8.w$, size: tE.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: t8.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(t6, { rank: t.l30Rank }),
                    (0, i.jsx)(el.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(t5, { game: t }),
                ],
            }),
        ],
    });
};
var le = l(141628),
    lt = l(289363),
    ll = l(448682);
function ln(e) {
    let { trackAction: t, analyticsLocations: l } = e,
        {
            fetchedAuthorization: n,
            hasAlreadyLinked: s,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            invite: u,
        } = q(),
        m = (0, d.bG)([J.default], () => J.default.getCurrentUser()),
        x = a.useCallback(() => {
            t(G.Ws.LinkAccount), c({ analyticsLocations: l });
        }, [t, c, l]);
    if (!n || null == o || !r || s || null == m) return null;
    let g = u?.guild != null ? tf.Ay.getGuildSplashURL({ id: u.guild.id, splash: u.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: ll.uW,
        children: [
            (0, i.jsx)(el.D, {
                className: ll.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eh.intl.string(eh.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: ll.kL,
                children: [
                    null != g
                        ? (0, i.jsx)("img", { className: ll.ll, src: g, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: ll.sB, children: (0, i.jsx)(lt.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: ll.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ll.FS,
                                children: [
                                    (0, i.jsx)(el.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eh.intl.formatToPlainString(eh.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(et.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eh.intl.string(eh.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(h.$, {
                                variant: "secondary",
                                icon: le.A,
                                text: eh.intl.string(eh.t.jynBQ5),
                                onClick: x,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var li = l(80687),
    la = l(775602),
    ls = l(248643),
    lr = l(256905),
    lc = l(34337),
    lo = l(191096),
    lu = l(90721),
    ld = l(616337);
let lm = a.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: s, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(ee.D, {
            className: r()(ld.JS, n && ld.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: ld.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: ld.xn,
                        alt: eh.intl.formatToPlainString(eh.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: ld.UZ,
                            children: (0, i.jsx)(li.D, { playing: n && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    lx = a.memo(function (e) {
        let {
                item: t,
                reducedMotion: l,
                autoPlay: n,
                videoRef: s,
                mediaPlayerRef: r,
                onPlay: c,
                onPause: o,
                onFullscreenChange: u,
            } = e,
            d = a.useRef(null);
        return (
            (0, lu.A)({ videoRef: s, canvasRef: d, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: d, className: ld.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: ld.tN,
                        children: (0, i.jsx)(ls.A, {
                            src: t.url,
                            poster: t.poster ?? "",
                            width: t.width ?? 1920,
                            height: t.height ?? 1080,
                            naturalWidth: t.width ?? 1920,
                            naturalHeight: t.height ?? 1080,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            autoPlay: n,
                            autoMute: !0,
                            useFullWidth: !0,
                            responsive: !0,
                            renderLinkComponent: lc.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: ld.T9,
                            videoRef: s,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function lh(e) {
    let { game: t, trackAction: l } = e,
        [n, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([la.Ay], () => la.Ay.useReducedMotion),
        { obscured: g } = (0, lo.I3)();
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let f = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, eN.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, eN.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        p = f.length > 0 ? Math.min(n, f.length - 1) : 0,
        j = f[p],
        v = j?.type === "VIDEO",
        E = a.useCallback(
            (e) => {
                let t = f[p],
                    l = f[e];
                t?.type === "IMAGE" && l?.type === "IMAGE" && t.url !== l.url ? c(t.url) : c(null), s(e);
            },
            [f, p],
        ),
        [A, I] = a.useState(!1),
        N = a.useRef(null),
        b = a.useCallback(() => {
            l(v ? G.Ws.ClickTrailer : G.Ws.ClickImage);
            let e = m.current,
                t = N.current,
                n = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let l = t === p;
                    return { ...e, autoPlay: !!l && n, autoMute: !l || i, initialTimeSec: l ? a : void 0, videoRef: x };
                }
                return e;
            });
            (0, lr.R)({
                items: r,
                startingIndex: p,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: s,
                onClose: () => {
                    let e = x.current,
                        t = N.current,
                        l = null != e ? !e.paused : n;
                    e?.pause(),
                        null != t && null != e
                            ? (t.setTime(e.currentTime, !1), l && t.setPlay(!0), t.setMuted(e.muted))
                            : l && t?.setPlay(!0),
                        I(l);
                },
            });
        }, [l, f, p, v]),
        S = a.useCallback(() => I(!0), []),
        C = a.useCallback(() => I(!1), []),
        R = a.useCallback(() => c(null), []),
        k = a.useCallback(
            (e) => {
                e && b();
            },
            [b],
        );
    return 0 === f.length
        ? null
        : (0, i.jsxs)("div", {
              className: ld.kL,
              children: [
                  v
                      ? (0, i.jsx)("div", {
                            className: ld.ND,
                            children: (0, i.jsx)(
                                lx,
                                {
                                    item: j,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: N,
                                    onPlay: S,
                                    onPause: C,
                                    onFullscreenChange: k,
                                },
                                `${p}-${j.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: ld.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: ld.Jy,
                                            onAnimationEnd: R,
                                            children: (0, i.jsx)("img", { src: r, className: ld.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: ld.QN }),
                                (0, i.jsx)(ee.D, {
                                    className: ld.gv,
                                    onClick: b,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: j.url,
                                            className: ld.c8,
                                            alt: eh.intl.formatToPlainString(eh.t.COYYrn, { game: t.name }),
                                        },
                                        j.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(ei.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: f.map((e, l) =>
                          (0, i.jsx)(
                              lm,
                              { item: e, index: l, isPlaying: A, isSelected: l === p, onSelect: E, gameName: t.name },
                              `${l}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var lg = l(49381),
    lf = l(661531),
    lp = l(223273);
function lj(e, t, l) {
    if (null == e || null == t || t < 10) return lp.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? lp.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? lp.vI.VERY_POSITIVE
              : lp.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return lp.vI.MOSTLY_POSITIVE;
    if (e >= 40) return lp.vI.MIXED;
    if (e >= 20) return lp.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return lp.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return lp.vI.VERY_NEGATIVE;
    return lp.vI.OVERWHELMINGLY_NEGATIVE;
}
function lv(e) {
    switch (e) {
        case lp.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case lp.vI.OVERWHELMINGLY_POSITIVE:
        case lp.vI.VERY_POSITIVE:
        case lp.vI.POSITIVE:
        case lp.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case lp.vI.MIXED:
            return "steam-review-text-mixed";
        case lp.vI.MOSTLY_NEGATIVE:
        case lp.vI.NEGATIVE:
        case lp.vI.VERY_NEGATIVE:
        case lp.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var lE =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    lA = l(778591);
function lI(e) {
    let { rating: t, strokeColor: l } = e,
        n = 2 * Math.PI * 16,
        a = Math.min(Math.max(t, 0), 100) / 100,
        s = a * n;
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
            stroke: l,
            strokeWidth: 2.4,
            strokeDasharray: `${s} ${n - s}`,
        }),
    });
}
var lN = l(99392);
function lb(e) {
    let { url: t, trackAction: l, title: n, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, te.A)(),
        u = lj(s, r, "recent" === c),
        d = lv(u),
        x = a.useCallback(() => {
            l(G.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(ee.D, {
        onClick: x,
        className: lN.nf,
        role: "link",
        "aria-label": eh.intl.string(eh.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: lN.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: lN.tN,
                    children: [
                        (0, i.jsx)(lg.N, { size: "sm", color: lf.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)(el.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    m.m,
                    {
                        text:
                            u === lp.vI.NO_USER_REVIEWS
                                ? eh.intl.string(eh.t.CLMt8J)
                                : eh.intl
                                      .format(
                                          "recent" === c
                                              ? eh.t.TzvC0k
                                              : "localized" === c
                                                ? eh.t.EOfrwm
                                                : eh.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: lN.Z0,
                            children: [
                                (0, i.jsx)(et.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case lp.vI.NO_USER_REVIEWS:
                                                return eh.intl.string(eh.t.CLMt8J);
                                            case lp.vI.OVERWHELMINGLY_POSITIVE:
                                                return eh.intl.string(eh.t["75sx1S"]);
                                            case lp.vI.VERY_POSITIVE:
                                                return eh.intl.string(eh.t["EkOVg+"]);
                                            case lp.vI.POSITIVE:
                                                return eh.intl.string(eh.t.ZUkFtr);
                                            case lp.vI.MOSTLY_POSITIVE:
                                                return eh.intl.string(eh.t.M7Z09a);
                                            case lp.vI.MIXED:
                                                return eh.intl.string(eh.t.c8yuHR);
                                            case lp.vI.MOSTLY_NEGATIVE:
                                                return eh.intl.string(eh.t.H0MSjG);
                                            case lp.vI.NEGATIVE:
                                                return eh.intl.string(eh.t.vpLrgz);
                                            case lp.vI.VERY_NEGATIVE:
                                                return eh.intl.string(eh.t["5spYuX"]);
                                            case lp.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eh.intl.string(eh.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== lp.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(et.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eh.intl
                                            .format(eh.t.sgIoin, { rating_count: r.toLocaleString() })
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
function lS(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, te.A)(),
        x = a.useCallback(() => {
            n(G.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(ee.D, {
        onClick: x,
        className: lN.nf,
        role: "link",
        "aria-label": eh.intl.string(eh.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: lN.Ur,
            children: [
                (0, i.jsx)(el.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eh.intl.string(eh.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: lN.WA,
                    children: [
                        null != c ? (0, i.jsx)(lC, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(lR, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(et.E, {
                                  variant: "text-xs/medium",
                                  color: lv(lp.vI.NO_USER_REVIEWS),
                                  children: eh.intl.string(eh.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function lC(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case lE.MIGHTY:
                    return eh.intl.string(eh.t.aZej2g);
                case lE.STRONG:
                    return eh.intl.string(eh.t.MLxnSg);
                case lE.FAIR:
                    return eh.intl.string(eh.t["3f19KA"]);
                case lE.WEAK:
                    return eh.intl.string(eh.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case lE.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case lE.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case lE.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case lE.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        m.m,
        {
            text: l,
            children: (0, i.jsx)("div", {
                className: lN.TE,
                children: (0, i.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lR(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case lE.MIGHTY:
                    t = "#fc430a";
                    break;
                case lE.STRONG:
                    t = "#9e00b4";
                    break;
                case lE.FAIR:
                    t = "#4aa1ce";
                    break;
                case lE.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        m.m,
        {
            text: eh.intl.string(eh.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: lN.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(lI, { rating: t, strokeColor: n }),
                    (0, i.jsx)(et.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: lN.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let lk = function (e) {
    let { game: t, trackAction: l } = e,
        n = (0, lA.I)(t.id),
        a = t.opencriticUrl,
        s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = lj(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== lp.vI.NO_USER_REVIEWS,
        d =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        m = d ? r?.localizedRating : r?.rating,
        x = d ? r?.localizedRatingCount : r?.ratingCount,
        h = d ? eh.t["aWb+V4"] : eh.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return s || o || g
        ? (0, i.jsxs)("div", {
              className: lN.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: lN.Gf,
                      children: (0, i.jsx)(el.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eh.intl.string(eh.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: lN.kL,
                      children: [
                          o && null != n
                              ? (0, i.jsx)("div", {
                                    className: lN.WH,
                                    children: (0, i.jsx)(lb, {
                                        url: n,
                                        trackAction: l,
                                        title: eh.intl.string(eh.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != n
                              ? (0, i.jsx)("div", {
                                    className: lN.WH,
                                    children: (0, i.jsx)(lb, {
                                        url: n,
                                        trackAction: l,
                                        title: eh.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: lN.WH,
                                    children: (0, i.jsx)(lS, { game: t, url: a, trackAction: l }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var lT = l(662388),
    ly = l(674658),
    lL = l(828614),
    lO = l(561769),
    l_ = l(758836),
    lG = l(804163);
let lM = a.createContext({ trackAction: () => {} });
function lP(e) {
    let { skuId: t, aspectRatio: l } = e,
        { product: n } = (0, ly.q)(t, !0),
        s = a.useContext(lO.v3),
        { closeModal: r } = q(),
        { trackAction: c } = a.useContext(lM),
        o = a.useCallback(() => {
            c(G.Ws.DiscordCollectiblesShopItem),
                r(),
                (0, lT.Cz)({
                    analyticsLocations: [I.A.GAME_PROFILE],
                    analyticsSource: I.A.GAME_PROFILE,
                    initialProductSkuId: t,
                    tab: l_.G2.CATALOG,
                });
        }, [c, r, t]);
    if (null == n) return null;
    let { flattenProductVariants: u, ...d } = s;
    return (0, i.jsx)(lO.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...d },
        children: (0, i.jsx)(lL.A, {
            skuId: t,
            aspectRatio: l,
            cardClassName: lG.N,
            onClickCard: o,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
        }),
    });
}
function lw(e) {
    let { game: t, trackAction: l } = e,
        { closeModal: n } = q(),
        s = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, d.cf)([M.A], () => ({
                hasFetched: null != e && M.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? M.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || M.A.isShopCollectionFetching(e) || eS(e);
                }, [e, t]),
                l ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = a.useCallback(() => {
            l(G.Ws.DiscordCollectiblesShop),
                n(),
                (0, lT.Cz)({
                    analyticsLocations: [I.A.GAME_PROFILE],
                    analyticsSource: I.A.GAME_PROFILE,
                    tab: l_.G2.CATALOG,
                });
        }, [l, n]),
        c = a.useMemo(() => ({ trackAction: l }), [l]);
    return 0 === s.length
        ? null
        : (0, i.jsx)(lM.Provider, {
              value: c,
              children: (0, i.jsx)(eD, {
                  title: eh.intl.string(eh.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)(ei.A, { gap: "md", children: s.map((e) => (0, i.jsx)(lP, { skuId: e }, e)) }),
              }),
          });
}
var lD = l(735438),
    lV = l.n(lD),
    lW = l(692969),
    lU = l(311043),
    lY = l(344005);
let lF = [],
    lB = [];
var lH = l(192389);
function lz(e) {
    let { game: t, trackClick: l } = e,
        n = (0, lW.A)({ gameId: t.id, source: G.Ob.SimilarGames }),
        s = a.useCallback(() => {
            l(G.Ws.ClickSimilarGame, t.id), n?.();
        }, [t.id, l, n]);
    return (0, i.jsxs)(ee.D, {
        className: lH.Nr,
        onClick: s,
        children: [
            (0, i.jsx)(tE.A, { game: t, className: lH.xe, size: tE.w.SMALL }),
            (0, i.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "none",
                lineClamp: 2,
                className: lH.mO,
                children: t.name,
            }),
        ],
    });
}
function lX() {
    return (0, i.jsxs)("div", {
        className: lH.Nr,
        children: [(0, i.jsx)("div", { className: lH.nn }), (0, i.jsx)("div", { className: lH.i2 })],
    });
}
function lK(e) {
    let { gameId: t, trackAction: l } = e,
        { enabled: n, dense: a } = D.useConfig({ location: "GameProfileSimilarGames" }),
        { isFetching: s, similarGames: r } = (function (e, t) {
            let { data: l, isLoading: n, error: i } = eR(e, t),
                a = t && null != l ? l : lF;
            (0, T.x)(a);
            let s = (0, d.bG)(
                    [lU.A],
                    () => a.some((e) => null == lU.A.getGame(e) && !lU.A.hasNoData(e) && !lU.A.didFetchingFail(e)),
                    [a],
                ),
                r = (0, d.yK)([lU.A, J.default], () => {
                    let e = J.default.getCurrentUser()?.nsfwAllowed;
                    return a
                        .map((e) => lU.A.getGame(e))
                        .filter((e) => null != e)
                        .filter((t) => (0, lY.T_)(t) && !(0, B.b)(t, e));
                }, [a]);
            return t
                ? { isFetching: (null == i && null == l) || n || s, similarGames: r }
                : { isFetching: !1, similarGames: lB };
        })(t, n),
        c = a ? 8 : 5,
        o = { "--custom-similar-games-per-page": c };
    return s
        ? (0, i.jsx)(eD, {
              title: eh.intl.string(eh.t["6rLyQB"]),
              children: (0, i.jsx)("div", {
                  style: o,
                  children: (0, i.jsx)(ei.A, {
                      gap: "md",
                      children: lV()
                          .range(0, c)
                          .map((e) => (0, i.jsx)(lX, {}, e)),
                  }),
              }),
          })
        : 0 === r.length
          ? null
          : (0, i.jsx)(eD, {
                title: eh.intl.string(eh.t["6rLyQB"]),
                children: (0, i.jsx)("div", {
                    style: o,
                    children: (0, i.jsx)(ei.A, {
                        gap: "md",
                        children: r.map((e) => (0, i.jsx)(lz, { game: e, trackClick: l }, e.id)),
                    }),
                }),
            });
}
var lJ = l(871123),
    l$ = l(317560),
    lq = l(328100),
    lZ = l(627771);
function lQ(e) {
    let { skuIds: t, analyticsLocations: l, onCardClick: n } = e,
        s = a.useMemo(() => {
            if (null != n)
                return (e, t) => {
                    let { skuId: l, applicationId: i } = t;
                    e.preventDefault(), n(l, i);
                };
        }, [n]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(ei.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: lZ.B,
                          children: (0, i.jsx)(lq.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: lq.s.SMALL,
                              analyticsLocations: l,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function l0(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = q(),
        { analyticsLocations: s } = (0, N.Ay)([I.A.GAME_PROFILE]),
        r = a.useCallback(() => {
            l?.application != null && (t(G.Ws.GameShop), n(), (0, tM.default)({ applicationId: l.application.id }));
        }, [l, t, n]),
        c = a.useCallback(
            (e, i) => {
                let a = l?.guildId;
                null != a &&
                    (t(G.Ws.GameShopItem),
                    (0, l$.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: s,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lJ.rG)(e, t, i, a) && n();
                        },
                    }));
            },
            [t, n, s, l],
        );
    if (null == l) return null;
    let { skuIds: o } = l;
    return (0, i.jsx)(eD, {
        title: eh.intl.string(eh.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(lQ, { skuIds: o, analyticsLocations: s, onCardClick: c }),
    });
}
l(667532);
var l1 = l(853022);
let l8 = new Set(["1402418703554842694", "356877880938070016"]),
    l4 = [W.V.EPICGAMES, W.V.STEAM, W.V.ROBLOX, W.V.BATTLENET, W.V.RIOT, W.V.MINECRAFT];
var l2 = l(349361),
    l3 = l(924895),
    l5 = l(422688),
    l6 = l(505200),
    l9 = l(695250);
let l7 = function (e) {
    switch (e.category) {
        case W.V.STEAM:
            return {
                icon: lg.N,
                text: eh.intl.string(eh.t.FsANs4),
                ariaLabel: eh.intl.string(eh.t["P+ePTG"]),
                action: G.Ws.SteamStoreLink,
                url: e.url,
            };
        case W.V.EPICGAMES:
            return {
                icon: l2.r,
                text: eh.intl.string(eh.t.ZbBMHa),
                ariaLabel: eh.intl.string(eh.t.BwX0UW),
                action: G.Ws.EpicStoreLink,
                url: e.url,
            };
        case W.V.ROBLOX:
            return {
                icon: l3.H,
                text: eh.intl.string(eh.t["pJ+P+h"]),
                ariaLabel: eh.intl.string(eh.t.tYxpdf),
                action: G.Ws.RobloxStoreLink,
                url: e.url,
            };
        case W.V.BATTLENET:
            return {
                icon: l5.a,
                text: eh.intl.string(eh.t["A7grp+"]),
                ariaLabel: eh.intl.string(eh.t.x9at20),
                action: G.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case W.V.RIOT:
            return {
                icon: l6.A,
                text: eh.intl.string(eh.t.h6MapL),
                ariaLabel: eh.intl.string(eh.t["528nvc"]),
                action: G.Ws.RiotStoreLink,
                url: e.url,
            };
        case W.V.MINECRAFT:
            return {
                icon: l9.m,
                text: eh.intl.string(eh.t["HZbmO+"]),
                ariaLabel: eh.intl.string(eh.t.WWTqYn),
                action: G.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: ta.Y,
                text: eh.intl.string(eh.t["QpN/Iz"]),
                ariaLabel: eh.intl.string(eh.t["8JZmmF"]),
                action: G.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
function ne(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var nt = l(352639);
function nl(e) {
    let t,
        l,
        n,
        i,
        s,
        r =
            ((t = (0, lA.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === eb.d3x.XBOX_GAME_PASS && !(0, eK.uJ)(e.id));
                return t?.id == null ? null : (0, l1.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== W.V.EPICGAMES || !!l8.has(n)) &&
                            (e.category !== W.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            l4.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === W.V.STEAM) ||
                    e.push({ category: W.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === W.V.STEAM ? -1 : +(t.category === W.V.STEAM)));
                return null != l && a.unshift({ category: "XBOX_GAME_PASS", url: l }), a;
            }, [t, i, n, s, l]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function nn(e) {
    let { data: t, trackAction: l } = e,
        n = (0, te.A)();
    return (0, i.jsx)(ne, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            l(t.action), n(t.url);
        },
    });
}
let ni = function (e) {
    let { game: t, trackAction: n } = e,
        { showsStoreLinks: s, storeWebsites: r } = nl(t),
        c = a.useMemo(() => r.map(l7).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(nn, { data: e, trackAction: n });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: nt.G,
            children: [(0, i.jsx)(nn, { data: c[0], trackAction: n }), (0, i.jsx)(nn, { data: c[1], trackAction: n })],
        });
    let o = (0, i.jsx)(ne, {
        text: eh.intl.string(eh.t["/hMurx"]),
        "aria-label": eh.intl.string(eh.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: a } = e;
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await l.e("76758").then(l.bind(l, 459477));
                    return (l) => (0, i.jsx)(e, { game: t, websiteButtons: n, trackAction: a, ...l });
                });
            })({ game: t, websiteButtons: c, trackAction: n }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: nt.G, children: [(0, i.jsx)(nn, { data: c[0], trackAction: n }), o] })
        : o;
};
var na = l(123292);
function ns(e) {
    let { game: t, trackAction: l } = e,
        n = a.useRef(null),
        {
            isExpanded: s,
            showToggle: c,
            handleToggleExpanded: o,
        } = (function (e, t) {
            let [l, n] = a.useState("full");
            a.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let l = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        n((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return l.observe(t), () => l.disconnect();
            }, [e]);
            let i = a.useCallback(() => {
                "expanded" === l
                    ? (t(G.Ws.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(G.Ws.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(n, l),
        { isTwoColumn: u } = q(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = s ? eh.intl.string(eh.t["6MwJo/"]) : eh.intl.string(eh.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(tc.fi, tc.mX),
        children: [
            (0, i.jsx)(et.E, { ref: n, lineClamp: s ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(na.Q, { onClick: o, text: m }),
        ],
    });
}
function nr(e) {
    let { game: t, trackAction: l } = e;
    return (0, i.jsxs)("div", {
        className: tc.oC,
        children: [
            (0, i.jsxs)("div", {
                className: tc.lM,
                children: [(0, i.jsx)(lh, { game: t, trackAction: l }), (0, i.jsx)(ns, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(ez, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(l0, { trackAction: l }),
            (0, i.jsx)(lw, { game: t, trackAction: l }),
            (0, i.jsx)(lK, { gameId: t.id, trackAction: l }),
        ],
    });
}
function nc(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: tc.V0,
        children: [
            (0, i.jsx)(lh, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: tc.gr,
                children: [
                    (0, i.jsx)(t9, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: tc.E1,
                        children: [
                            (0, i.jsx)(ni, { game: t, trackAction: l }),
                            (0, i.jsx)(ns, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(ln, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(tj, { trackAction: l }),
            (0, i.jsx)(ez, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(l0, { trackAction: l }),
            (0, i.jsx)(lw, { game: t, trackAction: l }),
            (0, i.jsx)(lK, { gameId: t.id, trackAction: l }),
            a && (0, i.jsx)(lk, { game: t, trackAction: l }),
            (0, i.jsx)(th, { game: t, trackAction: l }),
        ],
    });
}
function no(e) {
    let { onCloudPlayClick: t, analyticsLocations: l, trackAction: n } = e,
        { closeModal: s } = q();
    (0, b.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let r = a.useCallback(() => {
        n(G.Ws.CloudPlay), s(), t();
    }, [s, t, n]);
    return (0, i.jsx)(m.m, {
        text: eh.intl.string(eh.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: eh.intl.string(eh.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function nu(e) {
    let { gameId: t, cloudPlayAppId: l, analyticsLocations: n, trackAction: a } = e,
        s = (0, A.rC)({ applicationId: l, sourceApplicationId: t, analyticsLocations: n });
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: tc.NC,
              children: (0, i.jsx)(no, { onCloudPlayClick: s, analyticsLocations: n, trackAction: a }),
          });
}
function nd(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        a = t.linkedApplications?.find((e) => e.type === v.Mh.NVIDIA)?.id,
        [s] = (0, y.L)(t.getOfficialApplicationId()),
        [c] = (0, y.L)(t.id),
        { showsStoreLinks: o } = nl(t),
        d = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(tc.Pn, tc.fi, tc.iH, o ? tc.sV : tc.gF),
        children: [
            null == a || s || c
                ? null
                : (0, i.jsx)(nu, { gameId: t.id, cloudPlayAppId: a, analyticsLocations: n, trackAction: l }),
            (0, i.jsxs)("div", {
                className: tc.V0,
                children: [
                    (0, i.jsx)(ni, { game: t, trackAction: l }),
                    (0, i.jsx)(ln, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(tj, { trackAction: l }),
                    d && (0, i.jsx)(lk, { game: t, trackAction: l }),
                    (0, i.jsx)(th, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
let nm = function (e) {
    let {
            gameId: t,
            source: l,
            sourceUserId: n,
            transitionState: s,
            onClose: c,
            appContext: u,
            trackExternalAction: m,
            initialScrollOffset: h,
        } = e,
        [g, v] = a.useState(!0),
        [A, b] = a.useState(null),
        { clientThemesClassName: y } = (0, C.Ay)(),
        P = (0, d.bG)([_.default], () => _.default.locale),
        w = a.useMemo(() => (0, G.u9)(), []),
        { analyticsLocations: W } = (0, N.Ay)(I.A.GAME_PROFILE),
        U = (0, V.s)(t),
        { data: Y } = (0, T.I)(t),
        q = Y?.name ?? "",
        Z = (0, B.A)(Y),
        Q = a.useRef(null);
    a.useEffect(() => {
        Q.current = A;
    }, [A]);
    let {
            hasAlreadyLinked: ee,
            canStartAuthorization: et,
            fetched: el,
            startAuthorization: en,
            connectionApp: ei,
        } = (0, S.RD)(Y),
        { invite: ea, isMember: es } = F(Y, b),
        { socialLayerStorefrontRecommendationsData: er } = (function (e) {
            let t = J.default.getCurrentUser()?.id,
                l = a.useMemo(() => (null != t ? [t] : []), [t]),
                n = (0, d.bG)([z.A], () => (null != e ? z.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, H.h)(n),
                s = a.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: r, status: c } = (0, K.XQ)({
                    applicationIds: s,
                    userIds: l,
                    numItems: 6,
                    source: X.B5.USER_PROFILE,
                });
            return {
                socialLayerStorefrontRecommendationsData: a.useMemo(
                    () =>
                        null == i || null == i.guildId || "success" !== c || 0 === r.length
                            ? null
                            : { application: i, skuIds: r.map((e) => e.id), guildId: i.guildId },
                    [i, c, r],
                ),
            };
        })(t);
    function ec(e, n) {
        let { guildId: i, isVerified: a } = (0, G.VO)(Q.current);
        (0, G.Tn)({
            gameName: q,
            gameId: t,
            action: e,
            similarGameId: n,
            viewId: w,
            guildId: i,
            isVerified: a,
            source: l,
        });
    }
    (0, E.Ay)(() => {
        (0, G.rw)({ source: l, viewId: w, gameId: t, gameName: q, authorId: n, profileType: G.HV.FullProfile }),
            (0, R.He)();
    }),
        (0, E.Ay)(() => () => {
            let { isVerified: e, guildId: l } = (0, G.VO)(Q.current),
                n = Date.now(),
                i = U.map((e) => {
                    let t = (0, k.JM)(e) ? (0, k.W6)(e, n) : (0, k.aJ)(e, P);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                }),
                a = D.getConfig({ location: "GameProfileModalClose" }).enabled;
            (0, G.V_)({
                viewId: w,
                gameId: t,
                gameName: q,
                playedFriendIds: U.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: a ? (M.A.getSimilarGames(t) ?? []) : [],
                guildId: l,
                isVerified: e,
            });
        });
    let eo = a.useCallback((e) => {
            v(e.contentRect.width >= 800);
        }, []),
        eu = (0, o.w)(eo, [], { fireOnMount: !0 }),
        ed = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e ? ((0, f.closeAllModals)(), (0, O.closeUserProfileModal)()) : c();
            },
            [c],
        ),
        em = a.useCallback(() => ed(!1), [ed]),
        ex = a.useRef(null),
        eh = a.useCallback(() => ex.current?.getScrollerNode()?.scrollTop ?? 0, []),
        eg = a.useMemo(
            () => ({
                isTwoColumn: g,
                canStartAuthorization: et,
                hasAlreadyLinked: ee,
                fetchedAuthorization: el,
                startAuthorization: en,
                connectionApp: ei,
                invite: ea,
                isMember: es,
                socialLayerStorefrontRecommendationsData: er,
                closeModal: ed,
                getScrollOffset: eh,
            }),
            [g, et, ee, el, en, ei, ea, es, er, ed, eh],
        ),
        [ef, ep] = a.useState(!1),
        [ej, ev] = a.useState(150),
        eE = a.useRef(null);
    a.useEffect(() => {
        null != h && h > 0 && ex.current?.getScrollerNode()?.scrollTo({ top: h, behavior: "instant" });
    }, []);
    let eA = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != eE.current) {
                let e = Math.max(0, 1 - t / 150);
                eE.current.style.opacity = String(e);
            }
            ep(t >= ej);
        },
        [ej],
    );
    return null == Y
        ? null
        : (0, i.jsx)(N.f5, {
              value: W,
              children: (0, i.jsx)(x.N, {
                  transitionState: s,
                  onClose: c,
                  children: (0, i.jsx)($.Provider, {
                      value: eg,
                      children: (0, i.jsx)("div", {
                          className: r()(y, tc.kL),
                          ref: eu,
                          children: (0, i.jsxs)(L.A, {
                              obscured: Z,
                              onClose: em,
                              children: [
                                  (0, i.jsx)(t3, { game: Y, ref: eE }),
                                  (0, i.jsx)(t4, { game: Y, show: ef, trackAction: ec }),
                                  (0, i.jsx)(t2, { show: ef }),
                                  (0, i.jsxs)(p.Ch, {
                                      ref: ex,
                                      onScroll: eA,
                                      children: [
                                          (0, i.jsx)(t7, {
                                              game: Y,
                                              onSetCompactBarScrollThreshold: ev,
                                              showCompactBar: ef,
                                          }),
                                          (0, i.jsx)(j.F, {
                                              children: g
                                                  ? (0, i.jsxs)("div", {
                                                        className: tc.jC,
                                                        children: [
                                                            (0, i.jsx)(nr, { game: Y, trackAction: ec }),
                                                            (0, i.jsx)(nd, {
                                                                game: Y,
                                                                appContext: u,
                                                                source: l,
                                                                trackExternalAction: m,
                                                                trackAction: ec,
                                                                analyticsLocations: W,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: tc.b9,
                                                        children: (0, i.jsx)(nc, {
                                                            game: Y,
                                                            trackAction: ec,
                                                            analyticsLocations: W,
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
};
