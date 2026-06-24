n.d(t, { default: () => nq });
var l,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    c = n(562708),
    o = n(535185),
    u = n(792216),
    d = n(17928),
    m = n(990078),
    x = n(521489),
    h = n(821609),
    g = n(414499),
    f = n(689175),
    p = n(707554),
    j = n(964486),
    v = n(737393),
    E = n(793574),
    A = n(688810),
    I = n(139286),
    N = n(46225),
    b = n(429913),
    S = n(590703),
    C = n(180170),
    R = n(751765),
    T = n(569926),
    y = n(928550),
    k = n(570962),
    L = n(975732),
    O = n(773669),
    _ = n(409626),
    G = n(205184),
    M = n(505779),
    P = n(970163),
    w = n(184989);
let D = function (e, t) {
    let [n, l] = a.useState(),
        i = a.useRef(null),
        s = a.useRef(t);
    a.useEffect(() => {
        s.current = t;
    }, [t]);
    let r = (0, d.bG)([w.A], () => n?.guild?.id != null && w.A.isMember(n?.guild?.id)),
        c = a.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === M.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        a.useEffect(() => {
            async function e(e) {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, P.A)(t, "game_profile");
                    !0 !== e.banned && ((i.current = t), l(e.invite), null != e.invite && s.current?.(e.invite));
                }
            }
            null != c && e(c.url);
        }, [c]),
        { invite: n, isMember: r }
    );
};
var V = n(457408),
    W = n(287809),
    U = n(832163),
    Y = n(561794),
    F = n(862772);
let B = a.createContext(void 0);
function H() {
    let e = a.useContext(B);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var z = n(621466),
    X = n(966697),
    K = n(939249),
    J = n(834730),
    $ = n(534514),
    q = n(460905),
    Z = n(449543),
    Q = n(46054),
    ee = n(58703);
n(321073);
var et = n(155718),
    en = n(387408),
    el = n(731068),
    ei = n(59318),
    ea = n(320095),
    es = n(708676),
    er = n(383233),
    ec = n(998218),
    eo = n(375708);
let eu = /^#{1,3}\s+(.+)$/,
    ed = /^https?:\/\/\S+$/;
function em(e) {
    let t = ec.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
var ex = n(60465),
    eh = n(636537),
    eg = n(228366);
n(913122);
var ef = n(371794),
    ep = n(652215);
async function ej(e) {
    eg.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
    try {
        let t = (
            await (0, ef.aP)({
                url: ep.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                query: { locale: O.default.locale },
                rejectWithError: !1,
                retries: 2,
            })
        ).body.products.flatMap((e) => e.sku_ids);
        eg.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
    } catch (t) {
        eg.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
    }
}
async function ev(e, t) {
    eg.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
    try {
        let n = {};
        t?.limit != null && (n.limit = t.limit);
        let l = (await eh.Bo.get({ url: ep.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
        eg.h.dispatch({
            type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
            gameId: e,
            messages: l.messages.map((e) => {
                let t,
                    n,
                    l = (0, en.A)((0, ea.rh)(e)),
                    i = l.content,
                    a = (function (e) {
                        if ((0, er._c)(e))
                            return e.components
                                .filter((e) => e.type === et.I5.TEXT_DISPLAY)
                                .map((e) => e.content)
                                .join("\n");
                        let t = e.content;
                        return 0 === t.length || ed.test(t.trim())
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
                        if ((0, er._c)(e)) {
                            let t = e.components.find((e) => e.type === et.I5.MEDIA_GALLERY),
                                n = t?.items[0]?.media;
                            if (null != n) {
                                let t = (0, el.FE)(n);
                                if ("INVALID" !== t) return { ...n, type: t, sourceMetadata: { message: e } };
                            }
                        }
                        let t = e.attachments.find((e) => (0, ei.tT)(e.content_type));
                        if (null != t) return (0, el.Rr)(t, e);
                        let n = e.attachments.find((e) => (0, ei.XB)(e.content_type));
                        if (null != n) return (0, el.Rr)(n, e);
                        let l = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                        if (l?.thumbnail != null)
                            return (0, el.oU)(
                                l.thumbnail,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === l) },
                                },
                                "IMAGE",
                            );
                        let i = e.embeds.find((e) => null != e.image);
                        if (i?.image != null)
                            return (0, el.oU)(
                                i.image,
                                {
                                    message: e,
                                    identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                },
                                "IMAGE",
                            );
                        let a = e.embeds.find((e) => null != e.thumbnail);
                        if (a?.thumbnail != null)
                            return (0, el.oU)(
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
                        (n = (-1 === t ? a : a.slice(0, t)).match(eu)),
                        null != n
                            ? { title: n[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                            : { body: a }),
                    o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                    u =
                        a === i || (0, er._c)(l)
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
        eg.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
    }
}
var eE = n(422069),
    eA = n(284009),
    eI = n.n(eA),
    eN = n(376728),
    eb = n(976860),
    eS = n(71393),
    eC = n(385648);
async function eR(e) {
    let { invite: t, guildId: n, channelId: l, messageId: i, analyticsLocationStack: a } = e;
    eI()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((n = t.guild?.id), (r = new Set(t.guild?.features))), null == n)) return;
    let c = eS.A.getGuild(n);
    if (c?.joinedAt == null)
        if (null == r || r.has(ep.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eC.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: i, joinSource: ep.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eN.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eb.pX)(ep.BVt.CHANNEL(n, l, i), { sourceLocationStack: a });
}
var eT = n(320448),
    ey = n(274119);
function ek(e) {
    let { children: t, title: n, onClickViewAll: l } = e;
    return (0, i.jsxs)("div", {
        className: ey.k,
        children: [
            (0, i.jsxs)("div", {
                className: ey.w,
                children: [
                    (0, i.jsx)($.D, { variant: "heading-lg/medium", children: n }),
                    null != l &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eT._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: l,
                            text: eo.intl.string(eo.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eL = n(468489),
    eO = n(992595);
function e_(e, t) {
    return Q.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function eG(e) {
    let { variant: t, message: n, channelId: l, onCardClick: s } = e,
        [c, o] = a.useState(!1),
        u = "main" === t,
        d = a.useCallback(() => o(!0), []),
        m = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, z.vq)(e.target, HTMLAnchorElement) ||
                        ((0, z.vq)(e.target, HTMLSpanElement) && (0, z.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(n.id);
            },
            [s, n.id],
        ),
        x = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        h = n.media?.proxyUrl ?? n.media?.url,
        g = (null != h ? em(h) : null) ?? h,
        { embedSource: f } = n;
    return null == f
        ? null
        : (0, i.jsx)(K.D, {
              className: u ? eL.jI : eL.IU,
              onClick: m,
              children: (0, i.jsxs)("div", {
                  className: u ? eL.GT : eL.s4,
                  children: [
                      null != f.url &&
                          (0, i.jsx)(J.E, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              className: eL.Ow,
                              children: f.url,
                          }),
                      (0, i.jsxs)("div", {
                          className: eL._d,
                          style: null != f.color ? { borderInlineStartColor: f.color } : void 0,
                          children: [
                              null != f.authorName &&
                                  (0, i.jsxs)("div", {
                                      className: eL.Tu,
                                      children: [
                                          null != f.authorIconUrl &&
                                              (0, i.jsx)("img", {
                                                  src: f.authorIconUrl,
                                                  className: eL.SG,
                                                  alt: "",
                                                  draggable: !1,
                                              }),
                                          (0, i.jsx)(J.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-strong",
                                              children: f.authorName,
                                          }),
                                      ],
                                  }),
                              null != n.media &&
                                  null != g &&
                                  (0, i.jsx)("div", {
                                      className: eL.ax,
                                      children: (0, i.jsx)(X.y, {
                                          readyState: c ? ep.Rv1.READY : ep.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: n.media.placeholder,
                                          placeholderVersion: n.media.placeholderVersion,
                                          placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                                          children: (0, i.jsx)("img", {
                                              src: g,
                                              className: eL.Lw,
                                              alt: "",
                                              draggable: !1,
                                              onLoad: d,
                                          }),
                                      }),
                                  }),
                              null != n.title &&
                                  (0, i.jsx)($.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: u ? eL.KX : eL._N,
                                      children: e_(n.title, l),
                                  }),
                              n.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eL.h_, eO.PT),
                                      children: [e_(n.body, l), (0, i.jsx)("div", { className: eL.fm })],
                                  }),
                              (0, i.jsxs)("div", {
                                  className: eL.ov,
                                  children: [
                                      null != f.providerIconUrl &&
                                          (0, i.jsx)("img", {
                                              src: f.providerIconUrl,
                                              className: eL.Cd,
                                              alt: "",
                                              draggable: !1,
                                          }),
                                      (0, i.jsxs)(J.E, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: [
                                              null != f.providerName ? `${f.providerName} \xb7 ` : "",
                                              (0, ee.i$)(new Date(n.timestamp), "LL"),
                                          ],
                                      }),
                                      n.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eL.a5,
                                              children: [
                                                  (0, i.jsx)(q.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(J.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eo.intl.currentLocale).format(
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
function eM(e) {
    let { variant: t, message: n, channelId: l, onCardClick: s } = e,
        [c, o] = a.useState(!1),
        u = "main" === t,
        d = a.useCallback(() => o(!0), []),
        m = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, z.vq)(e.target, HTMLAnchorElement) ||
                        ((0, z.vq)(e.target, HTMLSpanElement) && (0, z.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return s(n.id);
            },
            [s, n.id],
        ),
        x = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        h = n.media?.proxyUrl ?? n.media?.url,
        g = (null != h ? em(h) : null) ?? h,
        f = null != n.media && null != g;
    return (0, i.jsxs)(K.D, {
        className: r()({ [eL.cG]: u && f, [eL.jI]: u && !f, [eL.IU]: !u }),
        onClick: m,
        children: [
            null != n.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eL._v : eL.eZ,
                    children: (0, i.jsx)(X.y, {
                        readyState: c ? ep.Rv1.READY : ep.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, i.jsx)("img", {
                            src: g,
                            className: u ? eL.fk : eL.v,
                            alt: "",
                            draggable: !1,
                            onLoad: d,
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: u ? eL.GT : eL.s4,
                children: [
                    null != n.title &&
                        (0, i.jsx)($.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eL.KX : eL._N,
                            children: e_(n.title, l),
                        }),
                    n.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(eL.h_, eO.PT),
                            children: [e_(n.body, l), (0, i.jsx)("div", { className: eL.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eL.ov,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, ee.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eL.a5,
                                    children: [
                                        (0, i.jsx)(q.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(J.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eo.intl.currentLocale).format(
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
    });
}
function eP(e) {
    let { variant: t, message: n, onCardClick: l } = e,
        s = "main" === t,
        { poll: r } = n,
        c = a.useCallback(() => l(n.id), [l, n.id]);
    if (null == r) return null;
    let o = r.answers.slice(0, 3),
        u = r.answers.length - o.length;
    return (0, i.jsx)(K.D, {
        className: s ? eL.jI : eL.IU,
        onClick: c,
        children: (0, i.jsxs)("div", {
            className: s ? eL.GT : eL.s4,
            children: [
                (0, i.jsx)($.D, {
                    variant: "heading-md/bold",
                    color: "text-strong",
                    className: eL.MH,
                    children: r.question.text,
                }),
                (0, i.jsxs)("div", {
                    className: eL.xd,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className: eL.Nf,
                                    children: (0, i.jsx)(J.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eL.TT,
                                        children: e.poll_media.text ?? "",
                                    }),
                                },
                                e.answer_id,
                            ),
                        ),
                        u > 0 &&
                            (0, i.jsx)(J.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: eL.PF,
                                children: eo.intl.format(eo.t["mv/nIa"], { count: u }),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eL.ov,
                    children: (0, i.jsx)(J.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eo.intl.format(eo.t.t0FTsH, {
                            createdAt: new Date(n.timestamp),
                            expiryLabel: (0, es.J)(r.expiry) ?? eo.intl.string(eo.t["e+J3JZ"]),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function ew(e) {
    return null != e.message.poll
        ? (0, i.jsx)(eP, { ...e })
        : null != e.message.embedSource
          ? (0, i.jsx)(eG, { ...e })
          : (0, i.jsx)(eM, { ...e });
}
function eD(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, A.Ay)(),
        { invite: s, closeModal: r, getScrollOffset: c } = H(),
        {
            messages: o,
            guildId: u,
            channelId: m,
        } = (function (e) {
            let {
                data: t,
                hasFetched: n,
                isFetching: l,
            } = (0, d.cf)([eE.A], () => ({
                data: null != e ? eE.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && eE.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && eE.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || n || eE.A.isAnnouncementsFetching(e) || ev(e);
                }, [e, n]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: l }
            );
        })(t),
        x = a.useCallback(() => {
            let e = s?.guild?.id ?? u;
            null != e &&
                null != m &&
                (n(_.Ws.Announcements),
                ex.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                r(),
                eR({ invite: s, guildId: e, channelId: m, analyticsLocationStack: l }));
        }, [n, r, c, s, u, m, l, t]),
        h = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (n(_.Ws.AnnouncementsItem),
                    ex.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    r(),
                    eR({ invite: s, guildId: i, channelId: m, messageId: e, analyticsLocationStack: l }));
            },
            [n, r, c, s, u, m, l, t],
        );
    if (null == m || 0 === o.length) return null;
    let g = 2 !== o.length,
        f = g ? o[0] : null,
        p = g ? o.slice(1) : o;
    return (0, i.jsx)(ek, {
        title: eo.intl.string(eo.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, i.jsxs)("div", {
            className: eL.f3,
            children: [
                null != f && (0, i.jsx)(ew, { variant: "main", message: f, channelId: m, onCardClick: h }),
                p.length > 0 &&
                    (0, i.jsx)(Z.A, {
                        gap: 16,
                        children: p.map((e) =>
                            (0, i.jsx)(ew, { variant: "small", message: e, channelId: m, onCardClick: h }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
var eV = n(541830),
    eW = n(240248);
let eU = [M.V.OFFICIAL, M.V.FACEBOOK, M.V.TWITTER, M.V.INSTAGRAM, M.V.YOUTUBE, M.V.BLUESKY, M.V.REDDIT, M.V.TWITCH];
var eY = n(808380);
let eF = [eY.Y.DESKTOP, eY.Y.XBOX, eY.Y.PLAYSTATION, eY.Y.NINTENDO];
var eB = n(349288),
    eH = n(975807),
    ez = n(194362);
function eX(e) {
    let { game: t, trackAction: n } = e,
        l = a.useCallback(async () => {
            n(_.Ws.ClaimGame);
            let e = await (0, ez.a)(ep.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, eH.A)(e);
        }, [n]),
        s = a.useCallback((e) => (0, i.jsx)(eB.Anchor, { onClick: l, children: e }), [l]);
    return t.linkedApplications?.some((e) => e.type === et.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(J.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eo.intl.format(eo.t.KAjfKl, { claimLink: s }),
          });
}
var eK = n(998445),
    eJ = n(274997),
    e$ = n(80500),
    eq = n(319745),
    eZ = n(488225),
    eQ = n(967492),
    e0 = n(72265),
    e1 = n(454346),
    e8 = n(37948),
    e4 = n(262420);
let e3 = { size: "xs", colorClass: e4.wP };
function e2(e) {
    let { website: t, trackAction: n } = e,
        l = (0, e8.A)(),
        {
            action: s,
            icon: r,
            title: c,
        } = (function (e, t) {
            switch (e.category) {
                case M.V.OFFICIAL:
                    return {
                        icon: (0, i.jsx)(eK.L, { ...t }),
                        action: _.Ws.WebsiteLink,
                        title: eo.intl.string(eo.t.fOUKvg),
                    };
                case M.V.TWITTER:
                    return { icon: (0, i.jsx)(eJ.p, { ...t }), action: _.Ws.XLink, title: eo.intl.string(eo.t.INic4y) };
                case M.V.YOUTUBE:
                    return {
                        action: _.Ws.YouTubeLink,
                        icon: (0, i.jsx)(e$.C, { ...t }),
                        title: eo.intl.string(eo.t.lNmxbE),
                    };
                case M.V.FACEBOOK:
                    return {
                        icon: (0, i.jsx)(eq.Z, { ...t }),
                        action: _.Ws.FacebookLink,
                        title: eo.intl.string(eo.t.FjyREK),
                    };
                case M.V.INSTAGRAM:
                    return {
                        icon: (0, i.jsx)(eZ.L, { ...t }),
                        action: _.Ws.InstagramLink,
                        title: eo.intl.string(eo.t["cgR+IK"]),
                    };
                case M.V.BLUESKY:
                    return {
                        icon: (0, i.jsx)(eQ.a, { ...t }),
                        action: _.Ws.BlueskyLink,
                        title: eo.intl.string(eo.t["D/PHq5"]),
                    };
                case M.V.REDDIT:
                    return {
                        icon: (0, i.jsx)(e0.T, { ...t }),
                        action: _.Ws.RedditLink,
                        title: eo.intl.string(eo.t["Hgb+fc"]),
                    };
                case M.V.TWITCH:
                    return {
                        icon: (0, i.jsx)(e1.a, { ...t }),
                        action: _.Ws.TwitchLink,
                        title: eo.intl.string(eo.t["7xtz4G"]),
                    };
                default:
                    throw Error("Unknown website category");
            }
        })(t, e3),
        o = a.useCallback(() => {
            n(s), l(t.url);
        }, [s, l, n, t.url]);
    return (0, i.jsx)(m.m, {
        text: c,
        children: (0, i.jsx)(K.D, { onClick: o, className: e4.yO, title: c, children: r }),
    });
}
var e5 = n(31300),
    e6 = n(802516),
    e7 = n(22363),
    e9 = n(418524),
    te = n(141535);
function tt(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case eY.Y.DESKTOP:
            return (0, i.jsx)(e5.k, { size: "xs", ...n });
        case eY.Y.XBOX:
            return (0, i.jsx)(e6.Y, { size: "xs", ...n });
        case eY.Y.PLAYSTATION:
            return (0, i.jsx)(e7.X, { size: "xs", ...n });
        case eY.Y.NINTENDO:
            return (0, i.jsx)(e9.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function tn(e) {
    let { platform: t } = e;
    return (0, i.jsx)(
        m.m,
        {
            text: (function (e) {
                switch (e) {
                    case eY.Y.DESKTOP:
                        return eo.intl.string(eo.t.KT6uCJ);
                    case eY.Y.XBOX:
                        return eo.intl.string(eo.t.DDWUJp);
                    case eY.Y.PLAYSTATION:
                        return eo.intl.string(eo.t.fzMz2s);
                    case eY.Y.NINTENDO:
                        return eo.intl.string(eo.t.AMW8je);
                    default:
                        return null;
                }
            })(t),
            children: (0, i.jsx)(tt, { platform: t }),
        },
        t,
    );
}
var tl = n(424994),
    ti = n(60541);
function ta() {
    return (0, i.jsx)(J.E, { variant: "text-sm/normal", color: "text-subtle", children: eo.intl.string(eo.t.GruYxV) });
}
let ts = function (e) {
    let { game: t, trackAction: n } = e,
        l = a.useMemo(() => t.genres.map(eV.du).join(", "), [t]),
        s = t.getCompanyByRole(et.wk.PUBLISHER),
        r = t.getCompanyByRole(et.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(eY.Y.DESKTOP) && (e.has(eY.Y.MACOS) || e.has(eY.Y.LINUX)) && n.push(eY.Y.DESKTOP),
                n.filter((e) => eF.includes(e)).sort((e, t) => eF.indexOf(e) - eF.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return eU.includes(t);
            })
            .sort((e, t) => eU.indexOf(e.category) - eU.indexOf(t.category)),
        x = !(0, eW.uJ)(l),
        h = !(0, eW.uJ)(c),
        g = !(0, eW.uJ)(o),
        f = !(0, eW.uJ)(u),
        p = d.length > 0,
        j = m.length > 0 && !m.every((e) => (0, eW.uJ)(e.url));
    return (0, i.jsxs)("div", {
        className: ti.uW,
        children: [
            (0, i.jsx)("div", {
                className: ti.Gf,
                children: (0, i.jsx)($.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: eo.intl.string(eo.t["7OjmmH"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ti.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: ti.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    1 !== t.genres.length ? eo.intl.string(eo.t.pDgwYB) : eo.intl.string(eo.t.mjFKqn),
                            }),
                            x
                                ? (0, i.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: ti.Gu,
                                      children: l,
                                  })
                                : (0, i.jsx)(ta, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ti.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== s.length ? eo.intl.string(eo.t.Hc7Enk) : eo.intl.string(eo.t["4Byy/G"]),
                            }),
                            h
                                ? (0, i.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: ti.Gu,
                                      children: c,
                                  })
                                : (0, i.jsx)(ta, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ti.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: 1 !== r.length ? eo.intl.string(eo.t.KATEJB) : eo.intl.string(eo.t.na3PT0),
                            }),
                            g
                                ? (0, i.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: ti.Gu,
                                      children: o,
                                  })
                                : (0, i.jsx)(ta, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ti.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eo.intl.string(eo.t.H3mPDT),
                            }),
                            f
                                ? (0, i.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: ti.Gu,
                                      children: ee.i$(new Date(u), "LL"),
                                  })
                                : (0, i.jsx)(ta, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ti.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: d.length > 1 ? eo.intl.string(eo.t.PNqxNe) : eo.intl.string(eo.t["UxAag+"]),
                            }),
                            p
                                ? (0, i.jsx)("div", {
                                      className: ti.Gu,
                                      children: d.map((e) => (0, i.jsx)(tn, { platform: e }, e)),
                                  })
                                : (0, i.jsx)(ta, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ti.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eo.intl.string(eo.t["Oj3o1/"]),
                            }),
                            j
                                ? (0, i.jsx)("div", {
                                      className: ti.Gu,
                                      children: m.map((e) => (0, i.jsx)(e2, { website: e, trackAction: n }, e.url)),
                                  })
                                : (0, i.jsx)(ta, {}),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ti.J1,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: eo.intl.string(eo.t["BwQ+9e"]),
                            }),
                            (0, i.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: ti.Gu,
                                children: eo.intl.format(eo.t.XPFZVl, { igdbLink: tl.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: ti.OQ, children: (0, i.jsx)(eX, { game: t, trackAction: n }) }),
        ],
    });
};
var tr = n(714991),
    tc = n(486020),
    to = n(552523);
function tu(e) {
    let { trackAction: t } = e,
        { canStartAuthorization: n, hasAlreadyLinked: l, invite: s, isMember: r, closeModal: c } = H(),
        o = a.useCallback(() => {
            null != s &&
                (t(_.Ws.JoinServer),
                c(),
                eg.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: ep.BRT.APP }));
        }, [s, t, c]);
    if (null == s || null == s.guild) return null;
    let u = tc.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        d = tc.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (n && !l) || null == d,
        x = (0, i.jsx)("img", {
            className: to.$f,
            src: u,
            alt: eo.intl.formatToPlainString(eo.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        g = m ? to.To : to.Kt,
        f = m ? to.yj : to.FS;
    return (0, i.jsxs)("div", {
        className: to.uW,
        children: [
            (0, i.jsx)($.D, {
                className: to.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eo.intl.string(eo.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: to.kL,
                children: [
                    !m && null != d && (0, i.jsx)("img", { className: to.ll, src: d, alt: "", draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: to.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g,
                                children: [
                                    m
                                        ? x
                                        : (0, i.jsx)("div", {
                                              className: to._C,
                                              children: (0, i.jsx)("div", { className: to.kW, children: x }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: f,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: to.YS,
                                                children: [
                                                    (0, i.jsx)(tr.A, { guild: s.guild, size: 16 }),
                                                    (0, i.jsx)($.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, eW.uJ)(s.guild?.description) &&
                                                (0, i.jsx)(J.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: to.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: to.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: to._o }),
                                                                      (0, i.jsx)(J.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eo.intl.format(eo.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: to.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: to.jk }),
                                                                      (0, i.jsx)(J.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: eo.intl.format(eo.t.zRl6XR, {
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
                                text: r ? eo.intl.string(eo.t.cEnaWx) : eo.intl.string(eo.t.XpeFYr),
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
var td = n(369606),
    tm = n(459746),
    tx = n(922016),
    th = n(980707),
    tg = n(477782),
    tf = n(663341),
    tp = n(408278),
    tj = n(34188),
    tv = n(365199),
    tE = n(789645),
    tA = n(442433),
    tI = n(50268),
    tN = n(44724),
    tb = n(67518),
    tS = n(540185),
    tC = n(926268),
    tR = n(53788),
    tT = n(831453),
    ty = n(785866),
    tk = n(555704),
    tL = n(457965),
    tO = n(47675),
    t_ = n(633075),
    tG = n(289173),
    tM = n(841595),
    tP = n(958805),
    tw = n(735321),
    tD = n(495544),
    tV = n(760751);
async function tW(e) {
    let t = e((0, tw.BF)());
    await tP.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function tU(e) {
    let { game: t, className: n, trackAction: l } = e,
        s = a.useRef(null),
        r = a.useRef(null),
        c = (0, tI.A)({ id: t.id, label: eo.intl.string(eo.t.SHQGPj) }),
        o = (0, tb.n)(t.id, l),
        u = (function (e) {
            let t = e?.id,
                n = e?.name ?? "",
                l = (0, d.bG)([tD.default], () => tD.default.getId()),
                s = (0, d.bG)([tV.A], () => tV.A.getDetectableGame(t)),
                r = a.useMemo(
                    () => [
                        {
                            type: tS.x.FAVORITE_GAMES,
                            addLabel: eo.intl.string(eo.t.fgmitg),
                            removeLabel: eo.intl.string(eo.t.TSGNQY),
                            menuId: "game-profile-add-favorite-game",
                            icon: tC.C,
                        },
                        {
                            type: tS.x.PLAYED_GAMES,
                            addLabel: eo.intl.string(eo.t["0xIVLR"]),
                            removeLabel: eo.intl.string(eo.t.iN9ShA),
                            menuId: "game-profile-add-games-i-like",
                            icon: tR.G,
                        },
                        {
                            type: tS.x.CURRENT_GAMES,
                            addLabel: eo.intl.string(eo.t.G0c4En),
                            removeLabel: eo.intl.string(eo.t.h00srf),
                            menuId: "game-profile-add-games-in-rotation",
                            icon: tT.H,
                        },
                        {
                            type: tS.x.WANT_TO_PLAY_GAMES,
                            addLabel: eo.intl.string(eo.t.UuBS4K),
                            removeLabel: eo.intl.string(eo.t.MB8XLq),
                            menuId: "game-profile-add-want-to-play",
                            icon: ty._,
                        },
                    ],
                    [],
                ),
                c = (0, d.yK)([tM.A], () => (null == l ? [] : (tM.A.getUserProfile(l)?.widgets ?? [])), [l]),
                o = (0, tL.w$)({ location: "game-profile-overflow-menu" }),
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
                    async (e, n) => {
                        let l;
                        if (
                            (await tW((i) => {
                                let a = i.filter(tG.fu).find((t) => t.type === e) ?? null;
                                if (n) {
                                    if (a?.games.some((e) => e.applicationId === t) || (null != a && (0, tw.uA)(a)))
                                        return i;
                                    let n = { applicationId: t },
                                        s = null != a ? [n, ...(a.games ?? [])] : [n];
                                    l = new tG.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.applicationId !== t);
                                    l = new tG.Yy({ ...a, games: e });
                                }
                                var s = l;
                                let r = i.findIndex((e) => e.getUniqueKey() === s.getUniqueKey());
                                if (-1 === r) return [s, ...i];
                                let c = [...i];
                                return (c[r] = s), c;
                            }),
                            null == l)
                        )
                            return;
                        let i = l;
                        (0, tO.un)({
                            action: n ? "GAME_ADDED" : "GAME_REMOVED",
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
                            (await tW((n) =>
                                e
                                    ? n.some((e) => e instanceof t_.R && e.applicationId === u)
                                        ? n
                                        : [(t = new t_.R({ applicationId: u })), ...n]
                                    : ((t = n.find((e) => e instanceof t_.R && e.applicationId === u) ?? null),
                                      n.filter((e) => !(e instanceof t_.R && e.applicationId === u))),
                            ),
                            null == t)
                        )
                            return;
                        let n = t;
                        (0, tO.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...n.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [u],
                );
            if (null == l) return null;
            let h = null != e && null != s && (0, tw.XX)(s),
                g = [];
            if (null != u) {
                let e = c.some((e) => e instanceof t_.R && e.applicationId === u);
                g.push(
                    (0, i.jsx)(
                        tg.Dr,
                        {
                            id: "game-profile-app-widget",
                            label: e
                                ? eo.intl.formatToPlainString(eo.t.Ktb1n8, { name: n })
                                : eo.intl.formatToPlainString(eo.t.Xp6iZt, { name: n }),
                            action: () => x(!e),
                            leadingAccessory: { type: "icon", icon: tk.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of r) {
                    let n = c.filter(tG.fu).find((t) => t.type === e.type) ?? null,
                        l = null != n && n.games.some((e) => e.applicationId === t),
                        a = !l && null != n && (0, tw.uA)(n);
                    g.push(
                        (0, i.jsx)(
                            tg.Dr,
                            {
                                id: e.menuId,
                                label: l ? e.removeLabel : e.addLabel,
                                subtext: a ? eo.intl.string(eo.t["86OoiH"]) : void 0,
                                subtextLineClamp: 1,
                                action: () => m(e.type, !l),
                                leadingAccessory: { type: "icon", icon: e.icon },
                                disabled: a,
                            },
                            e.type,
                        ),
                    );
                }
            return 0 === g.length ? null : g;
        })(t),
        { invite: x, closeModal: g } = H(),
        f = (0, d.bG)([U.A], () => U.A.getApplicationIdFromDetectableId(t.id)),
        p = new Set(x?.guild?.features).has(ep.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        j = a.useCallback(() => {
            null != f && (0, tN.G)({ applicationId: f });
        }, [f]),
        v = a.useCallback(() => {
            null != f && (l(_.Ws.GameShop), (0, tN.default)({ applicationId: f }), g());
        }, [f, l, g]),
        E = a.useCallback(() => g(!1), [g]);
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            null != u &&
                (0, i.jsx)(tx.Y, {
                    targetElementRef: r,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(th.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, tA.Z_)(), t();
                            },
                            "aria-label": eo.intl.string(eo.t.sidPSo),
                            onSelect: () => {},
                            children: (0, i.jsx)(tg.rX, { children: u }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: r,
                            children: (0, i.jsx)(h.$, {
                                icon: tf.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: eo.intl.string(eo.t.sidPSo),
                            }),
                        }),
                }),
            p &&
                null != x &&
                (0, i.jsx)(m.m, {
                    text: eo.intl.string(eo.t.apFNLU),
                    children: (0, i.jsx)(tp.K, {
                        icon: tj.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": eo.intl.string(eo.t.apFNLU),
                        onMouseDown: j,
                        onClick: v,
                    }),
                }),
            (null != c || null != o) &&
                (0, i.jsx)(tx.Y, {
                    targetElementRef: s,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(th.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, tA.Z_)(), t();
                            },
                            "aria-label": eo.intl.string(eo.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(tg.rX, { children: o }), (0, i.jsx)(tg.rX, { children: c })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(m.m, {
                            text: eo.intl.string(eo.t["UKOtz+"]),
                            children: (0, i.jsx)("div", {
                                ...e,
                                ref: s,
                                children: (0, i.jsx)(tp.K, {
                                    icon: tv.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": eo.intl.string(eo.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, i.jsx)(tp.K, {
                icon: tE.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: E,
                "aria-label": eo.intl.string(eo.t.cpT0Cq),
            }),
        ],
    });
}
var tY = n(8208);
function tF(e) {
    let { game: t, show: n, trackAction: l } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: tY.y5,
        children: [
            (0, i.jsx)("div", { className: r()(tY.nI, n && tY.hD) }),
            (0, i.jsxs)("div", {
                className: r()(tY.A1, n && tY.g8),
                children: [
                    null != s && (0, i.jsx)("img", { src: s, alt: "", className: tY.V$, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: tY.hm,
                        children: [
                            (0, i.jsx)($.D, { variant: "heading-md/semibold", lineClamp: 1, children: a }),
                            null != t.l30Rank && (0, i.jsx)(tX, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tU, { game: t, className: tY.HK, trackAction: l }),
        ],
    });
}
function tB(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(tY.nI, tY.Jn, t && tY.hD) });
}
let tH = a.forwardRef(function (e, t) {
    let { game: n } = e,
        [l] = a.useState(() => Math.random()),
        s = a.useMemo(() => {
            if (null != n.bannerHash)
                return tc.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(l * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n.id, n.bannerHash, n.screenshotUrls, l]);
    return (0, eW.uJ)(s)
        ? null
        : (0, i.jsxs)("div", {
              ref: t,
              children: [
                  (0, i.jsx)("div", { className: tY.y1, style: { backgroundImage: `url("${s}")` } }),
                  (0, i.jsx)("div", { className: tY.N4 }),
              ],
          });
});
function tz(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(eV.du).join(", ");
    return (0, eW.uJ)(n) ? null : (0, i.jsx)(J.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
function tX(e) {
    let { rank: t } = e;
    return (0, i.jsxs)("div", {
        className: tY.Qc,
        children: [
            (0, i.jsx)(td.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, i.jsx)(J.E, {
                variant: "text-xs/bold",
                color: "none",
                children: eo.intl.formatToPlainString(eo.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
}
function tK(e) {
    let { game: t, isTwoColumn: n } = e;
    return (0, i.jsx)("div", {
        className: n ? tY.n8 : tY.FS,
        children: (0, i.jsx)(tm.A, { game: t, className: tY.xe, size: tm.w.LARGE }),
    });
}
let tJ = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: n, showCompactBar: l } = e,
        { isTwoColumn: s } = H(),
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
        className: r()(tY.ap, l && tY.Gh),
        children: [
            s &&
                null != t &&
                (0, i.jsx)("div", {
                    className: tY.Tf,
                    children: (0, i.jsx)(tm.A, { game: t, className: tY.w$, size: tm.w.LARGE }),
                }),
            (0, i.jsxs)("div", {
                className: tY.lu,
                children: [
                    null != t.l30Rank && (0, i.jsx)(tX, { rank: t.l30Rank }),
                    (0, i.jsx)($.D, { ref: o, variant: "heading-xxl/semibold", children: u }),
                    (0, i.jsx)(tz, { game: t }),
                ],
            }),
        ],
    });
};
var t$ = n(141628),
    tq = n(289363),
    tZ = n(448682);
function tQ(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: l,
            hasAlreadyLinked: s,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            invite: u,
        } = H(),
        m = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
        x = a.useCallback(() => {
            t(_.Ws.LinkAccount), c({ analyticsLocations: n });
        }, [t, c, n]);
    if (!l || null == o || !r || s || null == m) return null;
    let g = u?.guild != null ? tc.Ay.getGuildSplashURL({ id: u.guild.id, splash: u.guild.splash }) : null;
    return (0, i.jsxs)("div", {
        className: tZ.uW,
        children: [
            (0, i.jsx)($.D, {
                className: tZ.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: eo.intl.string(eo.t["VDAhr+"]),
            }),
            (0, i.jsxs)("div", {
                className: tZ.kL,
                children: [
                    null != g
                        ? (0, i.jsx)("img", { className: tZ.ll, src: g, alt: "", draggable: !1 })
                        : (0, i.jsx)("div", { className: tZ.sB, children: (0, i.jsx)(tq.default, { application: o }) }),
                    (0, i.jsxs)("div", {
                        className: tZ.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tZ.FS,
                                children: [
                                    (0, i.jsx)($.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: eo.intl.formatToPlainString(eo.t.hUbQT2, { gameName: o.name }),
                                    }),
                                    (0, i.jsx)(J.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: eo.intl.string(eo.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(h.$, {
                                variant: "secondary",
                                icon: t$.A,
                                text: eo.intl.string(eo.t.jynBQ5),
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
var t0 = n(80687),
    t1 = n(775602),
    t8 = n(248643),
    t4 = n(256905),
    t3 = n(34337),
    t2 = n(191096),
    t5 = n(90721),
    t6 = n(616337);
let t7 = a.memo(function (e) {
        let { item: t, index: n, isSelected: l, isPlaying: s, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(n), [c, n]);
        return (0, i.jsx)(K.D, {
            className: r()(t6.JS, l && t6.Y4),
            onClick: u,
            children: (0, i.jsxs)("div", {
                className: t6.ub,
                children: [
                    (0, i.jsx)("img", {
                        src: "VIDEO" === t.type ? (t.poster ?? t.url) : t.url,
                        className: t6.xn,
                        alt: eo.intl.formatToPlainString(eo.t.COYYrn, { game: o }),
                        draggable: !1,
                    }),
                    "VIDEO" === t.type &&
                        (0, i.jsx)("div", {
                            className: t6.UZ,
                            children: (0, i.jsx)(t0.D, { playing: l && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    t9 = a.memo(function (e) {
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
            (0, t5.A)({ videoRef: s, canvasRef: d, enabled: !n }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !n && (0, i.jsx)("canvas", { ref: d, className: t6.HW, "aria-hidden": "true" }),
                    (0, i.jsx)("div", {
                        className: t6.tN,
                        children: (0, i.jsx)(t8.A, {
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
                            renderLinkComponent: t3.bU,
                            onPlay: c,
                            onPause: o,
                            onFullscreenChange: u,
                            mediaPlayerClassName: t6.T9,
                            videoRef: s,
                            mediaPlayerRef: r,
                        }),
                    }),
                ],
            })
        );
    });
function ne(e) {
    let { game: t, trackAction: n } = e,
        [l, s] = a.useState(0),
        [r, c] = a.useState(null),
        [o, u] = a.useState(t.screenshotUrls),
        m = a.useRef(null),
        x = a.useRef(null),
        h = (0, d.bG)([t1.Ay], () => t1.Ay.useReducedMotion),
        { obscured: g } = (0, t2.I3)();
    o !== t.screenshotUrls && (u(t.screenshotUrls), s(0));
    let f = a.useMemo(
            () => [
                ...(t.trailers ?? []).map((e) => {
                    let t = (0, ef.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, ef.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height,
                    };
                }),
                ...(t.screenshotUrls ?? []).map((e) => ({ url: e, type: "IMAGE" })),
            ],
            [t.trailers, t.screenshotUrls],
        ),
        p = f.length > 0 ? Math.min(l, f.length - 1) : 0,
        j = f[p],
        v = j?.type === "VIDEO",
        E = a.useCallback(
            (e) => {
                let t = f[p],
                    n = f[e];
                t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? c(t.url) : c(null), s(e);
            },
            [f, p],
        ),
        [A, I] = a.useState(!1),
        N = a.useRef(null),
        b = a.useCallback(() => {
            n(v ? _.Ws.ClickTrailer : _.Ws.ClickImage);
            let e = m.current,
                t = N.current,
                l = null != e && !e.paused,
                i = e?.muted ?? !0,
                a = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let r = f.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === p;
                    return { ...e, autoPlay: !!n && l, autoMute: !n || i, initialTimeSec: n ? a : void 0, videoRef: x };
                }
                return e;
            });
            (0, t4.R)({
                items: r,
                startingIndex: p,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: s,
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
        }, [n, f, p, v]),
        S = a.useCallback(() => I(!0), []),
        C = a.useCallback(() => I(!1), []),
        R = a.useCallback(() => c(null), []),
        T = a.useCallback(
            (e) => {
                e && b();
            },
            [b],
        );
    return 0 === f.length
        ? null
        : (0, i.jsxs)("div", {
              className: t6.kL,
              children: [
                  v
                      ? (0, i.jsx)("div", {
                            className: t6.ND,
                            children: (0, i.jsx)(
                                t9,
                                {
                                    item: j,
                                    reducedMotion: h,
                                    autoPlay: !h && !g,
                                    videoRef: m,
                                    mediaPlayerRef: N,
                                    onPlay: S,
                                    onPause: C,
                                    onFullscreenChange: T,
                                },
                                `${p}-${j.url}`,
                            ),
                        })
                      : (0, i.jsxs)("div", {
                            className: t6.wp,
                            children: [
                                null != r &&
                                    !h &&
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: t6.Jy,
                                            onAnimationEnd: R,
                                            children: (0, i.jsx)("img", { src: r, className: t6.Db, alt: "" }),
                                        },
                                        r,
                                    ),
                                (0, i.jsx)("div", { className: t6.QN }),
                                (0, i.jsx)(K.D, {
                                    className: t6.gv,
                                    onClick: b,
                                    children: (0, i.jsx)(
                                        "img",
                                        {
                                            src: j.url,
                                            className: t6.c8,
                                            alt: eo.intl.formatToPlainString(eo.t.COYYrn, { game: t.name }),
                                        },
                                        j.url,
                                    ),
                                }),
                            ],
                        }),
                  (0, i.jsx)(Z.A, {
                      gap: "xs",
                      iconButtonSize: "sm",
                      children: f.map((e, n) =>
                          (0, i.jsx)(
                              t7,
                              { item: e, index: n, isPlaying: A, isSelected: n === p, onSelect: E, gameName: t.name },
                              `${n}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var nt = n(49381),
    nn = n(661531),
    nl = n(223273);
function ni(e, t, n) {
    if (null == e || null == t || t < 10) return nl.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !n
            ? nl.vI.POSITIVE
            : t < (n ? 100 : 500) || e < 95
              ? nl.vI.VERY_POSITIVE
              : nl.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return nl.vI.MOSTLY_POSITIVE;
    if (e >= 40) return nl.vI.MIXED;
    if (e >= 20) return nl.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !n) return nl.vI.NEGATIVE;
    else if (t < (n ? 100 : 500)) return nl.vI.VERY_NEGATIVE;
    return nl.vI.OVERWHELMINGLY_NEGATIVE;
}
function na(e) {
    switch (e) {
        case nl.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case nl.vI.OVERWHELMINGLY_POSITIVE:
        case nl.vI.VERY_POSITIVE:
        case nl.vI.POSITIVE:
        case nl.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case nl.vI.MIXED:
            return "steam-review-text-mixed";
        case nl.vI.MOSTLY_NEGATIVE:
        case nl.vI.NEGATIVE:
        case nl.vI.VERY_NEGATIVE:
        case nl.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var ns =
        (((l = {})[(l.MIGHTY = 1)] = "MIGHTY"),
        (l[(l.STRONG = 2)] = "STRONG"),
        (l[(l.FAIR = 3)] = "FAIR"),
        (l[(l.WEAK = 4)] = "WEAK"),
        l),
    nr = n(778591);
function nc(e) {
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
var no = n(99392);
function nu(e) {
    let { url: t, trackAction: n, title: l, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, e8.A)(),
        u = ni(s, r, "recent" === c),
        d = na(u),
        x = a.useCallback(() => {
            n(_.Ws.SteamReviews), o(t);
        }, [o, n, t]);
    return (0, i.jsx)(K.D, {
        onClick: x,
        className: no.nf,
        role: "link",
        "aria-label": eo.intl.string(eo.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: no.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: no.tN,
                    children: [
                        (0, i.jsx)(nt.N, { size: "sm", color: nn.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)($.D, { variant: "heading-sm/medium", color: "text-strong", children: l }),
                    ],
                }),
                (0, i.jsx)(
                    m.m,
                    {
                        text:
                            u === nl.vI.NO_USER_REVIEWS
                                ? eo.intl.string(eo.t.CLMt8J)
                                : eo.intl
                                      .format(
                                          "recent" === c
                                              ? eo.t.TzvC0k
                                              : "localized" === c
                                                ? eo.t.EOfrwm
                                                : eo.t["lzANJ/"],
                                          { rating: s, rating_count: r?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, i.jsxs)("div", {
                            className: no.Z0,
                            children: [
                                (0, i.jsx)(J.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case nl.vI.NO_USER_REVIEWS:
                                                return eo.intl.string(eo.t.CLMt8J);
                                            case nl.vI.OVERWHELMINGLY_POSITIVE:
                                                return eo.intl.string(eo.t["75sx1S"]);
                                            case nl.vI.VERY_POSITIVE:
                                                return eo.intl.string(eo.t["EkOVg+"]);
                                            case nl.vI.POSITIVE:
                                                return eo.intl.string(eo.t.ZUkFtr);
                                            case nl.vI.MOSTLY_POSITIVE:
                                                return eo.intl.string(eo.t.M7Z09a);
                                            case nl.vI.MIXED:
                                                return eo.intl.string(eo.t.c8yuHR);
                                            case nl.vI.MOSTLY_NEGATIVE:
                                                return eo.intl.string(eo.t.H0MSjG);
                                            case nl.vI.NEGATIVE:
                                                return eo.intl.string(eo.t.vpLrgz);
                                            case nl.vI.VERY_NEGATIVE:
                                                return eo.intl.string(eo.t["5spYuX"]);
                                            case nl.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eo.intl.string(eo.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== nl.vI.NO_USER_REVIEWS &&
                                    (0, i.jsx)(J.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: eo.intl
                                            .format(eo.t.sgIoin, { rating_count: r.toLocaleString() })
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
function nd(e) {
    let { game: t, url: n, trackAction: l } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, e8.A)(),
        x = a.useCallback(() => {
            l(_.Ws.OpenCriticReviews), m(n);
        }, [m, l, n]);
    return (0, i.jsx)(K.D, {
        onClick: x,
        className: no.nf,
        role: "link",
        "aria-label": eo.intl.string(eo.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: no.Ur,
            children: [
                (0, i.jsx)($.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eo.intl.string(eo.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: no.WA,
                    children: [
                        null != c ? (0, i.jsx)(nm, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(nx, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(J.E, {
                                  variant: "text-xs/medium",
                                  color: na(nl.vI.NO_USER_REVIEWS),
                                  children: eo.intl.string(eo.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function nm(e) {
    let { tier: t } = e,
        n = (function (e) {
            switch (e) {
                case ns.MIGHTY:
                    return eo.intl.string(eo.t.aZej2g);
                case ns.STRONG:
                    return eo.intl.string(eo.t.MLxnSg);
                case ns.FAIR:
                    return eo.intl.string(eo.t["3f19KA"]);
                case ns.WEAK:
                    return eo.intl.string(eo.t.jtVgSh);
            }
        })(t),
        l = (function (e) {
            switch (e) {
                case ns.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case ns.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case ns.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case ns.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        m.m,
        {
            text: n,
            children: (0, i.jsx)("div", {
                className: no.TE,
                children: (0, i.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function nx(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case ns.MIGHTY:
                    t = "#fc430a";
                    break;
                case ns.STRONG:
                    t = "#9e00b4";
                    break;
                case ns.FAIR:
                    t = "#4aa1ce";
                    break;
                case ns.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(n);
    return (0, i.jsx)(
        m.m,
        {
            text: eo.intl.string(eo.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: no.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(nc, { rating: t, strokeColor: l }),
                    (0, i.jsx)(J.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: no.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let nh = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, nr.I)(t.id),
        a = t.opencriticUrl,
        s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != l,
        r = t.reviews?.steam,
        c = ni(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== nl.vI.NO_USER_REVIEWS,
        d =
            null != r &&
            null != r.localizedRating &&
            null != r.localizedRatingCount &&
            null != r.ratingCount &&
            r.localizedRatingCount >= 200 &&
            r.ratingCount >= 2e3,
        m = d ? r?.localizedRating : r?.rating,
        x = d ? r?.localizedRatingCount : r?.ratingCount,
        h = d ? eo.t["aWb+V4"] : eo.t["8e4LiB"],
        g = t.reviews?.opencritic != null && null != a;
    return s || o || g
        ? (0, i.jsxs)("div", {
              className: no.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: no.Gf,
                      children: (0, i.jsx)($.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eo.intl.string(eo.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: no.kL,
                      children: [
                          o && null != l
                              ? (0, i.jsx)("div", {
                                    className: no.WH,
                                    children: (0, i.jsx)(nu, {
                                        url: l,
                                        trackAction: n,
                                        title: eo.intl.string(eo.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != l
                              ? (0, i.jsx)("div", {
                                    className: no.WH,
                                    children: (0, i.jsx)(nu, {
                                        url: l,
                                        trackAction: n,
                                        title: eo.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: no.WH,
                                    children: (0, i.jsx)(nd, { game: t, url: a, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var ng = n(662388),
    nf = n(674658),
    np = n(828614),
    nj = n(561769),
    nv = n(758836),
    nE = n(804163);
let nA = a.createContext({ trackAction: () => {} });
function nI(e) {
    let { skuId: t, aspectRatio: n } = e,
        { product: l } = (0, nf.q)(t, !0),
        s = a.useContext(nj.v3),
        { closeModal: r } = H(),
        { trackAction: c } = a.useContext(nA),
        o = a.useCallback(() => {
            c(_.Ws.DiscordCollectiblesShopItem),
                r(),
                (0, ng.Cz)({
                    analyticsLocations: [E.A.GAME_PROFILE],
                    analyticsSource: E.A.GAME_PROFILE,
                    initialProductSkuId: t,
                    tab: nv.G2.CATALOG,
                });
        }, [c, r, t]);
    if (null == l) return null;
    let { flattenProductVariants: u, ...d } = s;
    return (0, i.jsx)(nj.v3.Provider, {
        value: { flattenProductVariants: u ?? !0, ...d },
        children: (0, i.jsx)(np.A, {
            skuId: t,
            aspectRatio: n,
            cardClassName: nE.N,
            onClickCard: o,
            hideWishlistButton: !0,
            hidePrice: !0,
            hidePrimaryCTA: !0,
            hideSecondaryCTA: !0,
        }),
    });
}
function nN(e) {
    let { game: t, trackAction: n } = e,
        { closeModal: l } = H(),
        s = (function (e) {
            let { hasFetched: t, skuIds: n } = (0, d.cf)([eE.A], () => ({
                hasFetched: null != e && eE.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? eE.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || eE.A.isShopCollectionFetching(e) || ej(e);
                }, [e, t]),
                n ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = a.useCallback(() => {
            n(_.Ws.DiscordCollectiblesShop),
                l(),
                (0, ng.Cz)({
                    analyticsLocations: [E.A.GAME_PROFILE],
                    analyticsSource: E.A.GAME_PROFILE,
                    tab: nv.G2.CATALOG,
                });
        }, [n, l]),
        c = a.useMemo(() => ({ trackAction: n }), [n]);
    return 0 === s.length
        ? null
        : (0, i.jsx)(nA.Provider, {
              value: c,
              children: (0, i.jsx)(ek, {
                  title: eo.intl.string(eo.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)(Z.A, { gap: "md", children: s.map((e) => (0, i.jsx)(nI, { skuId: e }, e)) }),
              }),
          });
}
var nb = n(871123),
    nS = n(317560),
    nC = n(328100),
    nR = n(627771);
function nT(e) {
    let { skuIds: t, analyticsLocations: n, onCardClick: l } = e,
        s = a.useMemo(() => {
            if (null != l)
                return (e, t) => {
                    let { skuId: n, applicationId: i } = t;
                    e.preventDefault(), l(n, i);
                };
        }, [l]);
    return null == t || 0 === t.length
        ? null
        : (0, i.jsx)(Z.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: nR.B,
                          children: (0, i.jsx)(nC.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: nC.s.SMALL,
                              analyticsLocations: n,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function ny(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: l } = H(),
        { analyticsLocations: s } = (0, A.Ay)([E.A.GAME_PROFILE]),
        r = a.useCallback(() => {
            n?.application != null && (t(_.Ws.GameShop), l(), (0, tN.default)({ applicationId: n.application.id }));
        }, [n, t, l]),
        c = a.useCallback(
            (e, i) => {
                let a = n?.guildId;
                null != a &&
                    (t(_.Ws.GameShopItem),
                    (0, nS.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: s,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, nb.rG)(e, t, i, a) && l();
                        },
                    }));
            },
            [t, l, s, n],
        );
    if (null == n) return null;
    let { skuIds: o } = n;
    return (0, i.jsx)(ek, {
        title: eo.intl.string(eo.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(nT, { skuIds: o, analyticsLocations: s, onCardClick: c }),
    });
}
n(667532);
var nk = n(853022);
let nL = new Set(["1402418703554842694", "356877880938070016"]),
    nO = [M.V.EPICGAMES, M.V.STEAM, M.V.ROBLOX, M.V.BATTLENET, M.V.RIOT, M.V.MINECRAFT];
var n_ = n(349361),
    nG = n(924895),
    nM = n(422688),
    nP = n(505200),
    nw = n(695250);
let nD = function (e) {
    switch (e.category) {
        case M.V.STEAM:
            return {
                icon: nt.N,
                text: eo.intl.string(eo.t.FsANs4),
                ariaLabel: eo.intl.string(eo.t["P+ePTG"]),
                action: _.Ws.SteamStoreLink,
                url: e.url,
            };
        case M.V.EPICGAMES:
            return {
                icon: n_.r,
                text: eo.intl.string(eo.t.ZbBMHa),
                ariaLabel: eo.intl.string(eo.t.BwX0UW),
                action: _.Ws.EpicStoreLink,
                url: e.url,
            };
        case M.V.ROBLOX:
            return {
                icon: nG.H,
                text: eo.intl.string(eo.t["pJ+P+h"]),
                ariaLabel: eo.intl.string(eo.t.tYxpdf),
                action: _.Ws.RobloxStoreLink,
                url: e.url,
            };
        case M.V.BATTLENET:
            return {
                icon: nM.a,
                text: eo.intl.string(eo.t["A7grp+"]),
                ariaLabel: eo.intl.string(eo.t.x9at20),
                action: _.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case M.V.RIOT:
            return {
                icon: nP.A,
                text: eo.intl.string(eo.t.h6MapL),
                ariaLabel: eo.intl.string(eo.t["528nvc"]),
                action: _.Ws.RiotStoreLink,
                url: e.url,
            };
        case M.V.MINECRAFT:
            return {
                icon: nw.m,
                text: eo.intl.string(eo.t["HZbmO+"]),
                ariaLabel: eo.intl.string(eo.t.WWTqYn),
                action: _.Ws.MinecraftStoreLink,
                url: e.url,
            };
        case "XBOX_GAME_PASS":
            return {
                icon: e6.Y,
                text: eo.intl.string(eo.t["QpN/Iz"]),
                ariaLabel: eo.intl.string(eo.t["8JZmmF"]),
                action: _.Ws.XboxGamePassStoreLink,
                url: e.url,
            };
    }
    return null;
};
var nV = n(192308);
function nW(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var nU = n(352639);
function nY(e) {
    let t,
        n,
        l,
        i,
        s,
        r =
            ((t = (0, nr.I)(e?.id)),
            (n = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ep.d3x.XBOX_GAME_PASS && !(0, eW.uJ)(e.id));
                return t?.id == null ? null : (0, nk.jA)(t.id);
            })(e)),
            (l = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == n) || null == l) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== M.V.EPICGAMES || !!nL.has(l)) &&
                            (e.category !== M.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            nO.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === M.V.STEAM) ||
                    e.push({ category: M.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === M.V.STEAM ? -1 : +(t.category === M.V.STEAM)));
                return null != n && a.unshift({ category: "XBOX_GAME_PASS", url: n }), a;
            }, [t, i, l, s, n]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function nF(e) {
    let { data: t, trackAction: n } = e,
        l = (0, e8.A)();
    return (0, i.jsx)(nW, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            n(t.action), l(t.url);
        },
    });
}
let nB = function (e) {
    let { game: t, trackAction: l } = e,
        { showsStoreLinks: s, storeWebsites: r } = nY(t),
        c = a.useMemo(() => r.map(nD).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(nF, { data: e, trackAction: l });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: nU.G,
            children: [(0, i.jsx)(nF, { data: c[0], trackAction: l }), (0, i.jsx)(nF, { data: c[1], trackAction: l })],
        });
    let o = (0, i.jsx)(nW, {
        text: eo.intl.string(eo.t["/hMurx"]),
        "aria-label": eo.intl.string(eo.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: l, trackAction: a } = e;
                (0, nV.openModalLazy)(async () => {
                    let { default: e } = await n.e("76758").then(n.bind(n, 459477));
                    return (n) => (0, i.jsx)(e, { game: t, websiteButtons: l, trackAction: a, ...n });
                });
            })({ game: t, websiteButtons: c, trackAction: l }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: nU.G, children: [(0, i.jsx)(nF, { data: c[0], trackAction: l }), o] })
        : o;
};
var nH = n(123292);
function nz(e) {
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
                return n.observe(t), () => n.disconnect();
            }, [e]);
            let i = a.useCallback(() => {
                "expanded" === n
                    ? (t(_.Ws.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(_.Ws.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(l, n),
        { isTwoColumn: u } = H(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = s ? eo.intl.string(eo.t["6MwJo/"]) : eo.intl.string(eo.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(te.fi, te.mX),
        children: [
            (0, i.jsx)(J.E, { ref: l, lineClamp: s ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(nH.Q, { onClick: o, text: m }),
        ],
    });
}
function nX(e) {
    let { game: t, trackAction: n } = e;
    return (0, i.jsxs)("div", {
        className: te.oC,
        children: [
            (0, i.jsxs)("div", {
                className: te.lM,
                children: [(0, i.jsx)(ne, { game: t, trackAction: n }), (0, i.jsx)(nz, { game: t, trackAction: n })],
            }),
            (0, i.jsx)(eD, { gameId: t.id, trackAction: n }),
            (0, i.jsx)(ny, { trackAction: n }),
            (0, i.jsx)(nN, { game: t, trackAction: n }),
        ],
    });
}
function nK(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: te.V0,
        children: [
            (0, i.jsx)(ne, { game: t, trackAction: n }),
            (0, i.jsxs)("div", {
                className: te.gr,
                children: [
                    (0, i.jsx)(tK, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: te.E1,
                        children: [
                            (0, i.jsx)(nB, { game: t, trackAction: n }),
                            (0, i.jsx)(nz, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tQ, { analyticsLocations: l, trackAction: n }),
            (0, i.jsx)(tu, { trackAction: n }),
            (0, i.jsx)(eD, { gameId: t.id, trackAction: n }),
            (0, i.jsx)(ny, { trackAction: n }),
            (0, i.jsx)(nN, { game: t, trackAction: n }),
            a && (0, i.jsx)(nh, { game: t, trackAction: n }),
            (0, i.jsx)(ts, { game: t, trackAction: n }),
        ],
    });
}
function nJ(e) {
    let { onCloudPlayClick: t, analyticsLocations: n, trackAction: l } = e,
        { closeModal: s } = H();
    (0, I.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let r = a.useCallback(() => {
        l(_.Ws.CloudPlay), s(), t();
    }, [s, t, l]);
    return (0, i.jsx)(m.m, {
        text: eo.intl.string(eo.t.JVwWva),
        position: "top",
        children: (0, i.jsx)(h.$, {
            icon: g.h,
            text: eo.intl.string(eo.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: r,
            fullWidth: !0,
        }),
    });
}
function n$(e) {
    let { game: t, trackAction: n, analyticsLocations: l } = e,
        { isCloudPlayButtonShown: a, onCloudPlayClick: s } = (function (e) {
            let { gameId: t, analyticsLocations: n } = e,
                l = (0, b.h)(t),
                i = (0, v.A)({ application: l, analyticsLocations: n }),
                [a] = (0, y.L)(t);
            return { onCloudPlayClick: i, isCloudPlayButtonShown: !a && null != i };
        })({ gameId: t.id, analyticsLocations: l }),
        { showsStoreLinks: c } = nY(t),
        o = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(te.Pn, te.fi, te.iH, c ? te.sV : te.gF),
        children: [
            a && null != s
                ? (0, i.jsx)("div", {
                      className: te.NC,
                      children: (0, i.jsx)(nJ, { onCloudPlayClick: s, analyticsLocations: l, trackAction: n }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: te.V0,
                children: [
                    (0, i.jsx)(nB, { game: t, trackAction: n }),
                    (0, i.jsx)(tQ, { analyticsLocations: l, trackAction: n }),
                    (0, i.jsx)(tu, { trackAction: n }),
                    o && (0, i.jsx)(nh, { game: t, trackAction: n }),
                    (0, i.jsx)(ts, { game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
let nq = function (e) {
    let t,
        {
            gameId: n,
            source: l,
            sourceUserId: s,
            transitionState: c,
            onClose: u,
            appContext: m,
            trackExternalAction: h,
            initialScrollOffset: g,
        } = e,
        [v, I] = a.useState(!0),
        [y, M] = a.useState(null),
        { clientThemesClassName: P } = (0, S.Ay)(),
        w = (0, d.bG)([O.default], () => O.default.locale),
        H = a.useMemo(() => (0, _.u9)(), []),
        { analyticsLocations: z } = (0, A.Ay)(E.A.GAME_PROFILE),
        X = (0, G.s)(n),
        { data: K } = (0, T.I)(n),
        J = K?.name ?? "",
        $ =
            ((t = (0, d.bG)([W.default], () => W.default.getCurrentUser()?.nsfwAllowed)),
            null != K && !1 === t && (0, V.K)(K.contentClassification)),
        q = a.useRef(null);
    a.useEffect(() => {
        q.current = y;
    }, [y]);
    let {
            hasAlreadyLinked: Z,
            canStartAuthorization: Q,
            fetched: ee,
            startAuthorization: et,
            connectionApp: en,
        } = (0, N.RD)(K),
        { invite: el, isMember: ei } = D(K, M),
        { socialLayerStorefrontRecommendationsData: ea } = (function (e) {
            let t = W.default.getCurrentUser()?.id,
                n = a.useMemo(() => (null != t ? [t] : []), [t]),
                l = (0, d.bG)([U.A], () => (null != e ? U.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, b.h)(l),
                s = a.useMemo(() => (null != l ? [l] : []), [l]),
                { recommendations: r, status: c } = (0, F.XQ)({
                    applicationIds: s,
                    userIds: n,
                    numItems: 6,
                    source: Y.B5.USER_PROFILE,
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
        })(n);
    function es(e, t) {
        let { guildId: i, isVerified: a } = (0, _.VO)(q.current);
        (0, _.Tn)({
            gameName: J,
            gameId: n,
            action: e,
            similarGameId: t,
            viewId: H,
            guildId: i,
            isVerified: a,
            source: l,
        });
    }
    (0, j.Ay)(() => {
        (0, _.rw)({ source: l, viewId: H, gameId: n, gameName: J, authorId: s, profileType: _.HV.FullProfile }),
            (0, C.He)();
    }),
        (0, j.Ay)(() => () => {
            let { isVerified: e, guildId: t } = (0, _.VO)(q.current),
                l = Date.now(),
                i = X.map((e) => {
                    let t = (0, R.JM)(e) ? (0, R.W6)(e, l) : (0, R.aJ)(e, w);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, _.V_)({
                viewId: H,
                gameId: n,
                gameName: J,
                playedFriendIds: X.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: [],
                guildId: t,
                isVerified: e,
            });
        });
    let er = a.useCallback((e) => {
            I(e.contentRect.width >= 800);
        }, []),
        ec = (0, o.w)(er, [], { fireOnMount: !0 }),
        eo = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                u(), e && (0, L.closeUserProfileModal)();
            },
            [u],
        ),
        eu = a.useCallback(() => eo(!1), [eo]),
        ed = a.useRef(null),
        em = a.useCallback(() => ed.current?.getScrollerNode()?.scrollTop ?? 0, []),
        ex = a.useMemo(
            () => ({
                isTwoColumn: v,
                canStartAuthorization: Q,
                hasAlreadyLinked: Z,
                fetchedAuthorization: ee,
                startAuthorization: et,
                connectionApp: en,
                invite: el,
                isMember: ei,
                socialLayerStorefrontRecommendationsData: ea,
                closeModal: eo,
                getScrollOffset: em,
            }),
            [v, Q, Z, ee, et, en, el, ei, ea, eo, em],
        ),
        [eh, eg] = a.useState(!1),
        [ef, ep] = a.useState(150),
        ej = a.useRef(null);
    a.useEffect(() => {
        null != g && g > 0 && ed.current?.getScrollerNode()?.scrollTo({ top: g, behavior: "instant" });
    }, []);
    let ev = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != ej.current) {
                let e = Math.max(0, 1 - t / 150);
                ej.current.style.opacity = String(e);
            }
            eg(t >= ef);
        },
        [ef],
    );
    return null == K
        ? null
        : (0, i.jsx)(A.f5, {
              value: z,
              children: (0, i.jsx)(x.N, {
                  transitionState: c,
                  onClose: u,
                  children: (0, i.jsx)(B.Provider, {
                      value: ex,
                      children: (0, i.jsx)("div", {
                          className: r()(P, te.kL),
                          ref: ec,
                          children: (0, i.jsxs)(k.A, {
                              obscured: $,
                              onClose: eu,
                              children: [
                                  (0, i.jsx)(tH, { game: K, ref: ej }),
                                  (0, i.jsx)(tF, { game: K, show: eh, trackAction: es }),
                                  (0, i.jsx)(tB, { show: eh }),
                                  (0, i.jsxs)(f.Ch, {
                                      ref: ed,
                                      onScroll: ev,
                                      children: [
                                          (0, i.jsx)(tJ, {
                                              game: K,
                                              onSetCompactBarScrollThreshold: ep,
                                              showCompactBar: eh,
                                          }),
                                          (0, i.jsx)(p.F, {
                                              children: v
                                                  ? (0, i.jsxs)("div", {
                                                        className: te.jC,
                                                        children: [
                                                            (0, i.jsx)(nX, { game: K, trackAction: es }),
                                                            (0, i.jsx)(n$, {
                                                                game: K,
                                                                appContext: m,
                                                                source: l,
                                                                trackExternalAction: h,
                                                                trackAction: es,
                                                                analyticsLocations: z,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: te.b9,
                                                        children: (0, i.jsx)(nK, {
                                                            game: K,
                                                            trackAction: es,
                                                            analyticsLocations: z,
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
