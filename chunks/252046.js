l.d(t, { default: () => lq });
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
    f = l(689175),
    p = l(707554),
    j = l(964486),
    v = l(737393),
    E = l(793574),
    A = l(688810),
    I = l(139286),
    N = l(46225),
    b = l(429913),
    S = l(590703),
    C = l(180170),
    R = l(751765),
    T = l(569926),
    y = l(928550),
    k = l(570962),
    L = l(975732),
    O = l(773669),
    _ = l(409626),
    G = l(205184),
    M = l(505779),
    P = l(970163),
    w = l(184989);
let D = function (e, t) {
    let [l, n] = a.useState(),
        i = a.useRef(null),
        s = a.useRef(t);
    a.useEffect(() => {
        s.current = t;
    }, [t]);
    let r = (0, d.bG)([w.A], () => l?.guild?.id != null && w.A.isMember(l?.guild?.id)),
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
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (i.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, P.A)(t, "game_profile");
                    !0 !== e.banned && ((i.current = t), n(e.invite), null != e.invite && s.current?.(e.invite));
                }
            };
            null != c && e(c.url);
        }, [c]),
        { invite: l, isMember: r }
    );
};
var V = l(457408),
    W = l(287809),
    U = l(832163),
    Y = l(561794),
    F = l(862772);
let B = a.createContext(void 0);
function H() {
    let e = a.useContext(B);
    if (void 0 === e) throw Error("useGameProfileContext must be used within a GameProfileProvider");
    return e;
}
var z = l(621466),
    X = l(966697),
    K = l(939249),
    J = l(834730),
    $ = l(534514),
    q = l(460905),
    Z = l(449543),
    Q = l(46054),
    ee = l(58703);
l(321073);
var et = l(155718),
    el = l(387408),
    en = l(731068),
    ei = l(59318),
    ea = l(320095),
    es = l(708676),
    er = l(383233),
    ec = l(998218),
    eo = l(375708);
let eu = /^#{1,3}\s+(.+)$/,
    ed = /^https?:\/\/\S+$/;
function em(e) {
    let t = ec.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString());
}
var ex = l(60465),
    eh = l(636537),
    eg = l(228366);
l(913122);
var ef = l(371794),
    ep = l(652215);
let ej = async (e) => {
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
    },
    ev = async (e, t) => {
        eg.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let l = {};
            t?.limit != null && (l.limit = t.limit);
            let n = (await eh.Bo.get({ url: ep.Rsh.GAME_ANNOUNCEMENTS(e), query: l, rejectWithError: !1 })).body;
            eg.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: n.messages.map((e) => {
                    let t,
                        l,
                        n = (0, el.A)((0, ea.rh)(e)),
                        i = n.content,
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
                            if ((0, er._c)(e)) {
                                let t = e.components.find((e) => e.type === et.I5.MEDIA_GALLERY),
                                    l = t?.items[0]?.media;
                                if (null != l) {
                                    let t = (0, en.FE)(l);
                                    if ("INVALID" !== t) return { ...l, type: t, sourceMetadata: { message: e } };
                                }
                            }
                            let t = e.attachments.find((e) => (0, ei.tT)(e.content_type));
                            if (null != t) return (0, en.Rr)(t, e);
                            let l = e.attachments.find((e) => (0, ei.XB)(e.content_type));
                            if (null != l) return (0, en.Rr)(l, e);
                            let n = e.embeds.find((e) => null != e.video && null != e.thumbnail);
                            if (n?.thumbnail != null)
                                return (0, en.oU)(
                                    n.thumbnail,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === n) },
                                    },
                                    "IMAGE",
                                );
                            let i = e.embeds.find((e) => null != e.image);
                            if (i?.image != null)
                                return (0, en.oU)(
                                    i.image,
                                    {
                                        message: e,
                                        identifier: { type: "embed", embedIndex: e.embeds.findIndex((e) => e === i) },
                                    },
                                    "IMAGE",
                                );
                            let a = e.embeds.find((e) => null != e.thumbnail);
                            if (a?.thumbnail != null)
                                return (0, en.oU)(
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
                            (l = (-1 === t ? a : a.slice(0, t)).match(eu)),
                            null != l
                                ? { title: l[1].trim(), body: -1 === t ? "" : a.slice(t + 1).trimStart() }
                                : { body: a }),
                        o = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0,
                        u =
                            a === i || (0, er._c)(n)
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
            eg.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
var eE = l(422069),
    eA = l(284009),
    eI = l.n(eA),
    eN = l(376728),
    eb = l(976860),
    eS = l(71393),
    eC = l(385648);
async function eR(e) {
    let { invite: t, guildId: l, channelId: n, messageId: i, analyticsLocationStack: a } = e;
    eI()(a.length > 0, "analyticsLocationStack must have at least one location");
    let s = a[a.length - 1],
        r = null;
    if ((null != t && ((l = t.guild?.id), (r = new Set(t.guild?.features))), null == l)) return;
    let c = eS.A.getGuild(l);
    if (c?.joinedAt == null)
        if (null == r || r.has(ep.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, eC.Z2)(
                l,
                {},
                { shouldNavigate: !0, channelId: n, messageId: i, joinSource: ep.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                a,
            ));
        else
            null != t &&
                (await eN.Ay.acceptInvite({ inviteKey: t.code, context: { location: s }, skipOnboarding: !0 }));
    (0, eb.pX)(ep.BVt.CHANNEL(l, n, i), { sourceLocationStack: a });
}
var eT = l(320448),
    ey = l(274119);
function ek(e) {
    let { children: t, title: l, onClickViewAll: n } = e;
    return (0, i.jsxs)("div", {
        className: ey.k,
        children: [
            (0, i.jsxs)("div", {
                className: ey.w,
                children: [
                    (0, i.jsx)($.D, { variant: "heading-lg/medium", children: l }),
                    null != n &&
                        (0, i.jsx)(h.$, {
                            size: "sm",
                            icon: eT._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: n,
                            text: eo.intl.string(eo.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
var eL = l(468489),
    eO = l(992595);
function e_(e, t) {
    return Q.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function eG(e) {
    let { variant: t, message: l, channelId: n, onCardClick: s } = e,
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
                    return s(l.id);
            },
            [s, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? em(h) : null) ?? h,
        { embedSource: f } = l;
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
                              null != l.media &&
                                  null != g &&
                                  (0, i.jsx)("div", {
                                      className: eL.ax,
                                      children: (0, i.jsx)(X.y, {
                                          readyState: c ? ep.Rv1.READY : ep.Rv1.LOADING,
                                          aspectRatio: x,
                                          placeholder: l.media.placeholder,
                                          placeholderVersion: l.media.placeholderVersion,
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
                              null != l.title &&
                                  (0, i.jsx)($.D, {
                                      variant: "heading-md/bold",
                                      color: "text-strong",
                                      className: u ? eL.KX : eL._N,
                                      children: e_(l.title, n),
                                  }),
                              l.body.length > 0 &&
                                  (0, i.jsxs)("div", {
                                      className: r()(eL.h_, eO.PT),
                                      children: [e_(l.body, n), (0, i.jsx)("div", { className: eL.fm })],
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
                                              (0, ee.i$)(new Date(l.timestamp), "LL"),
                                          ],
                                      }),
                                      l.reactionCount > 0 &&
                                          (0, i.jsxs)("div", {
                                              className: eL.a5,
                                              children: [
                                                  (0, i.jsx)(q.n, { size: "xs", color: "currentColor" }),
                                                  (0, i.jsx)(J.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: new Intl.NumberFormat(eo.intl.currentLocale).format(
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
function eM(e) {
    let { variant: t, message: l, channelId: n, onCardClick: s } = e,
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
                    return s(l.id);
            },
            [s, l.id],
        ),
        x = l.media?.width != null && l.media?.height != null ? l.media.width / l.media.height : 16 / 9,
        h = l.media?.proxyUrl ?? l.media?.url,
        g = (null != h ? em(h) : null) ?? h,
        f = null != l.media && null != g;
    return (0, i.jsxs)(K.D, {
        className: r()({ [eL.cG]: u && f, [eL.jI]: u && !f, [eL.IU]: !u }),
        onClick: m,
        children: [
            null != l.media &&
                null != g &&
                (0, i.jsx)("div", {
                    className: u ? eL._v : eL.eZ,
                    children: (0, i.jsx)(X.y, {
                        readyState: c ? ep.Rv1.READY : ep.Rv1.LOADING,
                        aspectRatio: x,
                        placeholder: l.media.placeholder,
                        placeholderVersion: l.media.placeholderVersion,
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
                    null != l.title &&
                        (0, i.jsx)($.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: u ? eL.KX : eL._N,
                            children: e_(l.title, n),
                        }),
                    l.body.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: r()(eL.h_, eO.PT),
                            children: [e_(l.body, n), (0, i.jsx)("div", { className: eL.fm })],
                        }),
                    (0, i.jsxs)("div", {
                        className: eL.ov,
                        children: [
                            (0, i.jsx)(J.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, ee.i$)(new Date(l.timestamp), "LL"),
                            }),
                            l.reactionCount > 0 &&
                                (0, i.jsxs)("div", {
                                    className: eL.a5,
                                    children: [
                                        (0, i.jsx)(q.n, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(J.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(eo.intl.currentLocale).format(
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
function eP(e) {
    let { variant: t, message: l, onCardClick: n } = e,
        s = "main" === t,
        { poll: r } = l,
        c = a.useCallback(() => n(l.id), [n, l.id]);
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
                            createdAt: new Date(l.timestamp),
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
    let { gameId: t, trackAction: l } = e,
        { analyticsLocations: n } = (0, A.Ay)(),
        { invite: s, closeModal: r, getScrollOffset: c } = H(),
        {
            messages: o,
            guildId: u,
            channelId: m,
        } = (function (e) {
            let {
                data: t,
                hasFetched: l,
                isFetching: n,
            } = (0, d.cf)([eE.A], () => ({
                data: null != e ? eE.A.getAnnouncements(e) : void 0,
                hasFetched: null != e && eE.A.hasAnnouncementsBeenFetched(e),
                isFetching: null != e && eE.A.isAnnouncementsFetching(e),
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || l || eE.A.isAnnouncementsFetching(e) || ev(e);
                }, [e, l]),
                { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: n }
            );
        })(t),
        x = a.useCallback(() => {
            let e = s?.guild?.id ?? u;
            null != e &&
                null != m &&
                (l(_.Ws.Announcements),
                ex.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                r(),
                eR({ invite: s, guildId: e, channelId: m, analyticsLocationStack: n }));
        }, [l, r, c, s, u, m, n, t]),
        h = a.useCallback(
            (e) => {
                let i = s?.guild?.id ?? u;
                null != i &&
                    null != m &&
                    (l(_.Ws.AnnouncementsItem),
                    ex.A.setGameProfilePendingReturn({ gameId: t, channelId: m, initialScrollOffset: c() }),
                    r(),
                    eR({ invite: s, guildId: i, channelId: m, messageId: e, analyticsLocationStack: n }));
            },
            [l, r, c, s, u, m, n, t],
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
var eV = l(541830),
    eW = l(240248);
let eU = [M.V.OFFICIAL, M.V.FACEBOOK, M.V.TWITTER, M.V.INSTAGRAM, M.V.YOUTUBE, M.V.BLUESKY, M.V.REDDIT, M.V.TWITCH];
var eY = l(808380);
let eF = [eY.Y.DESKTOP, eY.Y.XBOX, eY.Y.PLAYSTATION, eY.Y.NINTENDO];
var eB = l(349288),
    eH = l(975807),
    ez = l(194362);
function eX(e) {
    let { game: t, trackAction: l } = e,
        n = a.useCallback(async () => {
            l(_.Ws.ClaimGame);
            let e = await (0, ez.a)(ep.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, eH.A)(e);
        }, [l]),
        s = a.useCallback((e) => (0, i.jsx)(eB.Anchor, { onClick: n, children: e }), [n]);
    return t.linkedApplications?.some((e) => e.type === et.Mh.OFFICIAL)
        ? null
        : (0, i.jsx)(J.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eo.intl.format(eo.t.KAjfKl, { claimLink: s }),
          });
}
var eK = l(998445),
    eJ = l(274997),
    e$ = l(80500),
    eq = l(319745),
    eZ = l(488225),
    eQ = l(967492),
    e0 = l(72265),
    e1 = l(454346),
    e8 = l(37948),
    e4 = l(262420);
let e3 = { size: "xs", colorClass: e4.wP };
function e2(e) {
    let { website: t, trackAction: l } = e,
        n = (0, e8.A)(),
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
            l(s), n(t.url);
        }, [s, n, l, t.url]);
    return (0, i.jsx)(m.m, {
        text: c,
        children: (0, i.jsx)(K.D, { onClick: o, className: e4.yO, title: c, children: r }),
    });
}
var e5 = l(31300),
    e6 = l(802516),
    e7 = l(22363),
    e9 = l(418524),
    te = l(141535);
function tt(e) {
    let { platform: t, ...l } = e;
    switch (t) {
        case eY.Y.DESKTOP:
            return (0, i.jsx)(e5.k, { size: "xs", ...l });
        case eY.Y.XBOX:
            return (0, i.jsx)(e6.Y, { size: "xs", ...l });
        case eY.Y.PLAYSTATION:
            return (0, i.jsx)(e7.X, { size: "xs", ...l });
        case eY.Y.NINTENDO:
            return (0, i.jsx)(e9.M, { size: "xs", ...l });
        default:
            return null;
    }
}
function tl(e) {
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
var tn = l(424994),
    ti = l(60541);
function ta() {
    return (0, i.jsx)(J.E, { variant: "text-sm/normal", color: "text-subtle", children: eo.intl.string(eo.t.GruYxV) });
}
let ts = function (e) {
    let { game: t, trackAction: l } = e,
        n = a.useMemo(() => t.genres.map(eV.du).join(", "), [t]),
        s = t.getCompanyByRole(et.wk.PUBLISHER),
        r = t.getCompanyByRole(et.wk.DEVELOPER),
        c = s.map((e) => e.name).join(", "),
        o = r.map((e) => e.name).join(", "),
        u = t.firstReleaseDate,
        d = a.useMemo(() => {
            let e = new Set(t.platforms),
                l = [...e];
            return (
                !e.has(eY.Y.DESKTOP) && (e.has(eY.Y.MACOS) || e.has(eY.Y.LINUX)) && l.push(eY.Y.DESKTOP),
                l.filter((e) => eF.includes(e)).sort((e, t) => eF.indexOf(e) - eF.indexOf(t))
            );
        }, [t.platforms]),
        m = (t?.websites ?? [])
            .filter((e) => {
                let { category: t } = e;
                return eU.includes(t);
            })
            .sort((e, t) => eU.indexOf(e.category) - eU.indexOf(t.category)),
        x = !(0, eW.uJ)(n),
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
                                      children: n,
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
                                      children: d.map((e) => (0, i.jsx)(tl, { platform: e }, e)),
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
                                      children: m.map((e) => (0, i.jsx)(e2, { website: e, trackAction: l }, e.url)),
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
                                children: eo.intl.format(eo.t.XPFZVl, { igdbLink: tn.s8 }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: ti.OQ, children: (0, i.jsx)(eX, { game: t, trackAction: l }) }),
        ],
    });
};
var tr = l(714991),
    tc = l(486020),
    to = l(552523);
function tu(e) {
    let { trackAction: t } = e,
        { canStartAuthorization: l, hasAlreadyLinked: n, invite: s, isMember: r, closeModal: c } = H(),
        o = a.useCallback(() => {
            null != s &&
                (t(_.Ws.JoinServer),
                c(),
                eg.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: ep.BRT.APP }));
        }, [s, t, c]);
    if (null == s || null == s.guild) return null;
    let u = tc.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        d = tc.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        m = (l && !n) || null == d,
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
var td = l(369606),
    tm = l(459746),
    tx = l(922016),
    th = l(980707),
    tg = l(477782),
    tf = l(663341),
    tp = l(408278),
    tj = l(34188),
    tv = l(365199),
    tE = l(789645),
    tA = l(442433),
    tI = l(50268),
    tN = l(44724),
    tb = l(67518),
    tS = l(540185),
    tC = l(926268),
    tR = l(53788),
    tT = l(831453),
    ty = l(785866),
    tk = l(555704),
    tL = l(457965),
    tO = l(47675),
    t_ = l(633075),
    tG = l(289173),
    tM = l(841595),
    tP = l(958805),
    tw = l(735321),
    tD = l(495544),
    tV = l(760751);
async function tW(e) {
    let t = e((0, tw.BF)());
    await tP.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function tU(e) {
    let { game: t, className: l, trackAction: n } = e,
        s = a.useRef(null),
        r = a.useRef(null),
        c = (0, tI.A)({ id: t.id, label: eo.intl.string(eo.t.SHQGPj) }),
        o = (0, tb.n)(t.id, n),
        u = (function (e) {
            let t = e?.id,
                l = e?.name ?? "",
                n = (0, d.bG)([tD.default], () => tD.default.getId()),
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
                c = (0, d.yK)([tM.A], () => (null == n ? [] : (tM.A.getUserProfile(n)?.widgets ?? [])), [n]),
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
                    async (e, l) => {
                        let n = null;
                        if (
                            (await tW((i) => {
                                let a = i.filter(tG.fu).find((t) => t.type === e) ?? null;
                                if (l) {
                                    if (a?.games.some((e) => e.applicationId === t) || (null != a && (0, tw.uA)(a)))
                                        return i;
                                    let l = { applicationId: t },
                                        s = null != a ? [l, ...(a.games ?? [])] : [l];
                                    n = new tG.Yy({ ...(a ?? { type: e }), games: s });
                                } else {
                                    if (null == a) return i;
                                    let e = a.games.filter((e) => e.applicationId !== t);
                                    n = new tG.Yy({ ...a, games: e });
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
                        (0, tO.un)({
                            action: l ? "GAME_ADDED" : "GAME_REMOVED",
                            ...i.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [t],
                ),
                x = a.useCallback(
                    async (e) => {
                        if (null == u) return;
                        let t = null;
                        if (
                            (await tW((l) =>
                                e
                                    ? l.some((e) => e instanceof t_.R && e.applicationId === u)
                                        ? l
                                        : [(t = new t_.R({ applicationId: u })), ...l]
                                    : ((t = l.find((e) => e instanceof t_.R && e.applicationId === u) ?? null),
                                      l.filter((e) => !(e instanceof t_.R && e.applicationId === u))),
                            ),
                            null == t)
                        )
                            return;
                        let l = t;
                        (0, tO.un)({
                            action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                            ...l.getProfileEditAnalyticsOptions(),
                        });
                    },
                    [u],
                );
            if (null == n) return null;
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
                                ? eo.intl.formatToPlainString(eo.t.Ktb1n8, { name: l })
                                : eo.intl.formatToPlainString(eo.t.Xp6iZt, { name: l }),
                            action: () => x(!e),
                            leadingAccessory: { type: "icon", icon: tk.U },
                        },
                        e ? "remove-app-widget" : "add-app-widget",
                    ),
                );
            }
            if (h)
                for (let e of r) {
                    let l = c.filter(tG.fu).find((t) => t.type === e.type) ?? null,
                        n = null != l && l.games.some((e) => e.applicationId === t),
                        a = !n && null != l && (0, tw.uA)(l);
                    g.push(
                        (0, i.jsx)(
                            tg.Dr,
                            {
                                id: e.menuId,
                                label: n ? e.removeLabel : e.addLabel,
                                subtext: a ? eo.intl.string(eo.t["86OoiH"]) : void 0,
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
        { invite: x, closeModal: g } = H(),
        f = (0, d.bG)([U.A], () => U.A.getApplicationIdFromDetectableId(t.id)),
        p = new Set(x?.guild?.features).has(ep.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        j = a.useCallback(() => {
            null != f && (0, tN.G)({ applicationId: f });
        }, [f]),
        v = a.useCallback(() => {
            null != f && (n(_.Ws.GameShop), (0, tN.default)({ applicationId: f }), g());
        }, [f, n, g]),
        E = a.useCallback(() => g(!1), [g]);
    return (0, i.jsxs)("div", {
        className: l,
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
var tY = l(8208);
function tF(e) {
    let { game: t, show: l, trackAction: n } = e,
        a = t.name,
        s = t.getIconURL(80);
    return (0, i.jsxs)("div", {
        className: tY.y5,
        children: [
            (0, i.jsx)("div", { className: r()(tY.nI, l && tY.hD) }),
            (0, i.jsxs)("div", {
                className: r()(tY.A1, l && tY.g8),
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
            (0, i.jsx)(tU, { game: t, className: tY.HK, trackAction: n }),
        ],
    });
}
function tB(e) {
    let { show: t } = e;
    return (0, i.jsx)("div", { className: r()(tY.nI, tY.Jn, t && tY.hD) });
}
let tH = a.forwardRef(function (e, t) {
    let { game: l } = e,
        [n] = a.useState(() => Math.random()),
        s = a.useMemo(() => {
            if (null != l.bannerHash)
                return tc.Ay.getGameAssetURL({ id: l.id, hash: l.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != l.screenshotUrls && l.screenshotUrls.length > 0) {
                let e = Math.floor(n * l.screenshotUrls.length);
                return l.screenshotUrls[e];
            }
            return "";
        }, [l.id, l.bannerHash, l.screenshotUrls, n]);
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
        l = (t.genres ?? []).map(eV.du).join(", ");
    return (0, eW.uJ)(l) ? null : (0, i.jsx)(J.E, { variant: "text-md/normal", color: "text-muted", children: l });
}
let tX = (e) => {
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
};
function tK(e) {
    let { game: t, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? tY.n8 : tY.FS,
        children: (0, i.jsx)(tm.A, { game: t, className: tY.xe, size: tm.w.LARGE }),
    });
}
let tJ = function (e) {
    let { game: t, onSetCompactBarScrollThreshold: l, showCompactBar: n } = e,
        { isTwoColumn: s } = H(),
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
        className: r()(tY.ap, n && tY.Gh),
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
var t$ = l(141628),
    tq = l(289363),
    tZ = l(448682);
function tQ(e) {
    let { trackAction: t, analyticsLocations: l } = e,
        {
            fetchedAuthorization: n,
            hasAlreadyLinked: s,
            canStartAuthorization: r,
            startAuthorization: c,
            connectionApp: o,
            invite: u,
        } = H(),
        m = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
        x = a.useCallback(() => {
            t(_.Ws.LinkAccount), c({ analyticsLocations: l });
        }, [t, c, l]);
    if (!n || null == o || !r || s || null == m) return null;
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
var t0 = l(80687),
    t1 = l(775602),
    t8 = l(248643),
    t4 = l(256905),
    t3 = l(34337),
    t2 = l(191096),
    t5 = l(90721),
    t6 = l(616337);
let t7 = a.memo(function (e) {
        let { item: t, index: l, isSelected: n, isPlaying: s, onSelect: c, gameName: o } = e,
            u = a.useCallback(() => c(l), [c, l]);
        return (0, i.jsx)(K.D, {
            className: r()(t6.JS, n && t6.Y4),
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
                            children: (0, i.jsx)(t0.D, { playing: n && s, size: "sm" }),
                        }),
                ],
            }),
        });
    }),
    t9 = a.memo(function (e) {
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
            (0, t5.A)({ videoRef: s, canvasRef: d, enabled: !l }),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    !l && (0, i.jsx)("canvas", { ref: d, className: t6.HW, "aria-hidden": "true" }),
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
                            autoPlay: n,
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
function le(e) {
    let { game: t, trackAction: l } = e,
        [n, s] = a.useState(0),
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
            l(v ? _.Ws.ClickTrailer : _.Ws.ClickImage);
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
            (0, t4.R)({
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
                      children: f.map((e, l) =>
                          (0, i.jsx)(
                              t7,
                              { item: e, index: l, isPlaying: A, isSelected: l === p, onSelect: E, gameName: t.name },
                              `${l}-${e.url}`,
                          ),
                      ),
                  }),
              ],
          });
}
var lt = l(49381),
    ll = l(661531),
    ln = l(223273);
function li(e, t, l) {
    if (null == e || null == t || t < 10) return ln.vI.NO_USER_REVIEWS;
    if (e >= 80)
        return t < 50 * !l
            ? ln.vI.POSITIVE
            : t < (l ? 100 : 500) || e < 95
              ? ln.vI.VERY_POSITIVE
              : ln.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return ln.vI.MOSTLY_POSITIVE;
    if (e >= 40) return ln.vI.MIXED;
    if (e >= 20) return ln.vI.MOSTLY_NEGATIVE;
    else if (t < 50 * !l) return ln.vI.NEGATIVE;
    else if (t < (l ? 100 : 500)) return ln.vI.VERY_NEGATIVE;
    return ln.vI.OVERWHELMINGLY_NEGATIVE;
}
function la(e) {
    switch (e) {
        case ln.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case ln.vI.OVERWHELMINGLY_POSITIVE:
        case ln.vI.VERY_POSITIVE:
        case ln.vI.POSITIVE:
        case ln.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case ln.vI.MIXED:
            return "steam-review-text-mixed";
        case ln.vI.MOSTLY_NEGATIVE:
        case ln.vI.NEGATIVE:
        case ln.vI.VERY_NEGATIVE:
        case ln.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle";
    }
}
var ls =
        (((n = {})[(n.MIGHTY = 1)] = "MIGHTY"),
        (n[(n.STRONG = 2)] = "STRONG"),
        (n[(n.FAIR = 3)] = "FAIR"),
        (n[(n.WEAK = 4)] = "WEAK"),
        n),
    lr = l(778591);
function lc(e) {
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
var lo = l(99392);
function lu(e) {
    let { url: t, trackAction: l, title: n, rating: s, ratingCount: r, tooltipVariant: c = "all" } = e,
        o = (0, e8.A)(),
        u = li(s, r, "recent" === c),
        d = la(u),
        x = a.useCallback(() => {
            l(_.Ws.SteamReviews), o(t);
        }, [o, l, t]);
    return (0, i.jsx)(K.D, {
        onClick: x,
        className: lo.nf,
        role: "link",
        "aria-label": eo.intl.string(eo.t.YNC5Di),
        children: (0, i.jsxs)("div", {
            className: lo.U6,
            children: [
                (0, i.jsxs)("div", {
                    className: lo.tN,
                    children: [
                        (0, i.jsx)(lt.N, { size: "sm", color: ll.A.colors.ICON_STRONG.css }),
                        (0, i.jsx)($.D, { variant: "heading-sm/medium", color: "text-strong", children: n }),
                    ],
                }),
                (0, i.jsx)(
                    m.m,
                    {
                        text:
                            u === ln.vI.NO_USER_REVIEWS
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
                            className: lo.Z0,
                            children: [
                                (0, i.jsx)(J.E, {
                                    variant: "text-xs/medium",
                                    color: d,
                                    children: (function (e) {
                                        switch (e) {
                                            case ln.vI.NO_USER_REVIEWS:
                                                return eo.intl.string(eo.t.CLMt8J);
                                            case ln.vI.OVERWHELMINGLY_POSITIVE:
                                                return eo.intl.string(eo.t["75sx1S"]);
                                            case ln.vI.VERY_POSITIVE:
                                                return eo.intl.string(eo.t["EkOVg+"]);
                                            case ln.vI.POSITIVE:
                                                return eo.intl.string(eo.t.ZUkFtr);
                                            case ln.vI.MOSTLY_POSITIVE:
                                                return eo.intl.string(eo.t.M7Z09a);
                                            case ln.vI.MIXED:
                                                return eo.intl.string(eo.t.c8yuHR);
                                            case ln.vI.MOSTLY_NEGATIVE:
                                                return eo.intl.string(eo.t.H0MSjG);
                                            case ln.vI.NEGATIVE:
                                                return eo.intl.string(eo.t.vpLrgz);
                                            case ln.vI.VERY_NEGATIVE:
                                                return eo.intl.string(eo.t["5spYuX"]);
                                            case ln.vI.OVERWHELMINGLY_NEGATIVE:
                                                return eo.intl.string(eo.t.A8uk5J);
                                            default:
                                                return null;
                                        }
                                    })(u),
                                }),
                                null != r &&
                                    u !== ln.vI.NO_USER_REVIEWS &&
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
function ld(e) {
    let { game: t, url: l, trackAction: n } = e,
        { reviews: s } = t,
        r = s?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        o = r.topCriticRating ?? -1,
        u = r.topCriticRatingCount ?? -1,
        d = (o <= 0 || u <= 0) && null == c,
        m = (0, e8.A)(),
        x = a.useCallback(() => {
            n(_.Ws.OpenCriticReviews), m(l);
        }, [m, n, l]);
    return (0, i.jsx)(K.D, {
        onClick: x,
        className: lo.nf,
        role: "link",
        "aria-label": eo.intl.string(eo.t.aLNBAw),
        children: (0, i.jsxs)("div", {
            className: lo.Ur,
            children: [
                (0, i.jsx)($.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: eo.intl.string(eo.t["UxvER+"]),
                }),
                (0, i.jsxs)("div", {
                    className: lo.WA,
                    children: [
                        null != c ? (0, i.jsx)(lm, { tier: c }) : null,
                        null != c && o > 0 && u > 0 ? (0, i.jsx)(lx, { rating: o, tier: c }) : null,
                        d
                            ? (0, i.jsx)(J.E, {
                                  variant: "text-xs/medium",
                                  color: la(ln.vI.NO_USER_REVIEWS),
                                  children: eo.intl.string(eo.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function lm(e) {
    let { tier: t } = e,
        l = (function (e) {
            switch (e) {
                case ls.MIGHTY:
                    return eo.intl.string(eo.t.aZej2g);
                case ls.STRONG:
                    return eo.intl.string(eo.t.MLxnSg);
                case ls.FAIR:
                    return eo.intl.string(eo.t["3f19KA"]);
                case ls.WEAK:
                    return eo.intl.string(eo.t.jtVgSh);
            }
        })(t),
        n = (function (e) {
            switch (e) {
                case ls.MIGHTY:
                    return "https://cdn.discordapp.com/assets/content/35c42952234dc88292af091e1f0a5eb2189dbe0e40253245f51637c4ff587173.png";
                case ls.STRONG:
                    return "https://cdn.discordapp.com/assets/content/8d450a540daa7b1a93e760d85891273058b41ed329141c86dae484c23817e0bb.png";
                case ls.FAIR:
                    return "https://cdn.discordapp.com/assets/content/9008eb4e7484a2c84cc11e8dff3831398fedd2de795ebf7c70436fd747bab475.png";
                case ls.WEAK:
                    return "https://cdn.discordapp.com/assets/content/1538fd1d5a67d65aebc33a9b47ab87cafbd83433f31f064f8deba3f89104ac8f.png";
            }
        })(t);
    return (0, i.jsx)(
        m.m,
        {
            text: l,
            children: (0, i.jsx)("div", {
                className: lo.TE,
                children: (0, i.jsx)("img", { src: n, alt: l, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function lx(e) {
    let { rating: t, tier: l } = e,
        { foregroundColor: n, backgroundColor: a } = (function (e) {
            let t = "";
            switch (e) {
                case ls.MIGHTY:
                    t = "#fc430a";
                    break;
                case ls.STRONG:
                    t = "#9e00b4";
                    break;
                case ls.FAIR:
                    t = "#4aa1ce";
                    break;
                case ls.WEAK:
                    t = "#80b06a";
            }
            return { foregroundColor: t, backgroundColor: "#2e2e2e" };
        })(l);
    return (0, i.jsx)(
        m.m,
        {
            text: eo.intl.string(eo.t.Ub4YR1),
            children: (0, i.jsxs)("div", {
                className: lo.TE,
                style: { backgroundColor: a },
                children: [
                    (0, i.jsx)(lc, { rating: t, strokeColor: n }),
                    (0, i.jsx)(J.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: lo.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let lh = function (e) {
    let { game: t, trackAction: l } = e,
        n = (0, lr.I)(t.id),
        a = t.opencriticUrl,
        s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED && null != n,
        r = t.reviews?.steam,
        c = li(r?.recentRating, r?.recentRatingCount, !0),
        o = s && c !== ln.vI.NO_USER_REVIEWS,
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
              className: lo.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: lo.Gf,
                      children: (0, i.jsx)($.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: eo.intl.string(eo.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                      className: lo.kL,
                      children: [
                          o && null != n
                              ? (0, i.jsx)("div", {
                                    className: lo.WH,
                                    children: (0, i.jsx)(lu, {
                                        url: n,
                                        trackAction: l,
                                        title: eo.intl.string(eo.t.MQGNsN),
                                        rating: r?.recentRating,
                                        ratingCount: r?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          s && null != n
                              ? (0, i.jsx)("div", {
                                    className: lo.WH,
                                    children: (0, i.jsx)(lu, {
                                        url: n,
                                        trackAction: l,
                                        title: eo.intl.string(h),
                                        rating: m,
                                        ratingCount: x,
                                        tooltipVariant: d ? "localized" : "all",
                                    }),
                                })
                              : null,
                          g && null != a
                              ? (0, i.jsx)("div", {
                                    className: lo.WH,
                                    children: (0, i.jsx)(ld, { game: t, url: a, trackAction: l }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
var lg = l(564064),
    lf = l(674658),
    lp = l(828614),
    lj = l(561769),
    lv = l(758836),
    lE = l(804163);
let lA = a.createContext({ trackAction: () => {} }),
    lI = (e) => {
        let { skuId: t, aspectRatio: l } = e,
            { product: n } = (0, lf.q)(t, !0),
            s = a.useContext(lj.v3),
            { closeModal: r } = H(),
            { trackAction: c } = a.useContext(lA),
            o = a.useCallback(() => {
                c(_.Ws.DiscordCollectiblesShopItem),
                    r(),
                    (0, lg.Cz)({
                        analyticsLocations: [E.A.GAME_PROFILE],
                        analyticsSource: E.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: lv.G2.CATALOG,
                    });
            }, [c, r, t]);
        if (null == n) return null;
        let { flattenProductVariants: u, ...d } = s;
        return (0, i.jsx)(lj.v3.Provider, {
            value: { flattenProductVariants: u ?? !0, ...d },
            children: (0, i.jsx)(lp.A, {
                skuId: t,
                aspectRatio: l,
                cardClassName: lE.N,
                onClickCard: o,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function lN(e) {
    let { game: t, trackAction: l } = e,
        { closeModal: n } = H(),
        s = (function (e) {
            let { hasFetched: t, skuIds: l } = (0, d.cf)([eE.A], () => ({
                hasFetched: null != e && eE.A.hasShopCollectionBeenFetched(e),
                skuIds: null != e ? eE.A.getShopCollectionSkuIds(e) : void 0,
            }));
            return (
                (0, a.useEffect)(() => {
                    null == e || t || eE.A.isShopCollectionFetching(e) || ej(e);
                }, [e, t]),
                l ?? []
            );
        })(t.shopCollectionIds?.[0]),
        r = a.useCallback(() => {
            l(_.Ws.DiscordCollectiblesShop),
                n(),
                (0, lg.Cz)({
                    analyticsLocations: [E.A.GAME_PROFILE],
                    analyticsSource: E.A.GAME_PROFILE,
                    tab: lv.G2.CATALOG,
                });
        }, [l, n]),
        c = a.useMemo(() => ({ trackAction: l }), [l]);
    return 0 === s.length
        ? null
        : (0, i.jsx)(lA.Provider, {
              value: c,
              children: (0, i.jsx)(ek, {
                  title: eo.intl.string(eo.t["5DYPT8"]),
                  onClickViewAll: r,
                  children: (0, i.jsx)(Z.A, { gap: "md", children: s.map((e) => (0, i.jsx)(lI, { skuId: e }, e)) }),
              }),
          });
}
var lb = l(871123),
    lS = l(317560),
    lC = l(328100),
    lR = l(627771);
function lT(e) {
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
        : (0, i.jsx)(Z.A, {
              gap: "md",
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: lR.B,
                          children: (0, i.jsx)(lC.A, {
                              positionInSection: t,
                              skuId: e,
                              variant: lC.s.SMALL,
                              analyticsLocations: l,
                              onClick: s,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
function ly(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: l, closeModal: n } = H(),
        { analyticsLocations: s } = (0, A.Ay)([E.A.GAME_PROFILE]),
        r = a.useCallback(() => {
            l?.application != null && (t(_.Ws.GameShop), n(), (0, tN.default)({ applicationId: l.application.id }));
        }, [l, t, n]),
        c = a.useCallback(
            (e, i) => {
                let a = l?.guildId;
                null != a &&
                    (t(_.Ws.GameShopItem),
                    (0, lS.R)({
                        skuId: e,
                        applicationId: i,
                        isStorefront: !1,
                        analyticsLocations: s,
                        onClose: () => {
                            let { pathname: e, search: t } = location;
                            (0, lb.rG)(e, t, i, a) && n();
                        },
                    }));
            },
            [t, n, s, l],
        );
    if (null == l) return null;
    let { skuIds: o } = l;
    return (0, i.jsx)(ek, {
        title: eo.intl.string(eo.t.WDdlUb),
        onClickViewAll: r,
        children: (0, i.jsx)(lT, { skuIds: o, analyticsLocations: s, onCardClick: c }),
    });
}
l(667532);
var lk = l(853022);
let lL = new Set(["1402418703554842694", "356877880938070016"]),
    lO = [M.V.EPICGAMES, M.V.STEAM, M.V.ROBLOX, M.V.BATTLENET, M.V.RIOT, M.V.MINECRAFT];
var l_ = l(349361),
    lG = l(924895),
    lM = l(422688),
    lP = l(505200),
    lw = l(695250);
let lD = function (e) {
    switch (e.category) {
        case M.V.STEAM:
            return {
                icon: lt.N,
                text: eo.intl.string(eo.t.FsANs4),
                ariaLabel: eo.intl.string(eo.t["P+ePTG"]),
                action: _.Ws.SteamStoreLink,
                url: e.url,
            };
        case M.V.EPICGAMES:
            return {
                icon: l_.r,
                text: eo.intl.string(eo.t.ZbBMHa),
                ariaLabel: eo.intl.string(eo.t.BwX0UW),
                action: _.Ws.EpicStoreLink,
                url: e.url,
            };
        case M.V.ROBLOX:
            return {
                icon: lG.H,
                text: eo.intl.string(eo.t["pJ+P+h"]),
                ariaLabel: eo.intl.string(eo.t.tYxpdf),
                action: _.Ws.RobloxStoreLink,
                url: e.url,
            };
        case M.V.BATTLENET:
            return {
                icon: lM.a,
                text: eo.intl.string(eo.t["A7grp+"]),
                ariaLabel: eo.intl.string(eo.t.x9at20),
                action: _.Ws.BattlenetStoreLink,
                url: e.url,
            };
        case M.V.RIOT:
            return {
                icon: lP.A,
                text: eo.intl.string(eo.t.h6MapL),
                ariaLabel: eo.intl.string(eo.t["528nvc"]),
                action: _.Ws.RiotStoreLink,
                url: e.url,
            };
        case M.V.MINECRAFT:
            return {
                icon: lw.m,
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
var lV = l(192308);
function lW(e) {
    return (0, i.jsx)(h.$, { ...e, variant: "secondary", fullWidth: !0, role: "link" });
}
var lU = l(352639);
function lY(e) {
    let t,
        l,
        n,
        i,
        s,
        r =
            ((t = (0, lr.I)(e?.id)),
            (l = (function (e) {
                if (null == e) return null;
                let t = e.thirdPartySkus.find((e) => e.distributor === ep.d3x.XBOX_GAME_PASS && !(0, eW.uJ)(e.id));
                return t?.id == null ? null : (0, lk.jA)(t.id);
            })(e)),
            (n = e?.id),
            (i = e?.websites),
            (s = e?.steamReleaseStatus),
            a.useMemo(() => {
                if ((null == i && null == l) || null == n) return [];
                let e =
                    i?.filter(
                        (e) =>
                            (e.category !== M.V.EPICGAMES || !!lL.has(n)) &&
                            (e.category !== M.V.STEAM || s !== u.Y.RETIRED_ABANDONED) &&
                            lO.includes(e.category),
                    ) ?? [];
                null == t ||
                    s === u.Y.RETIRED_ABANDONED ||
                    e.some((e) => e.category === M.V.STEAM) ||
                    e.push({ category: M.V.STEAM, url: t });
                let a = e.sort((e, t) => (e.category === M.V.STEAM ? -1 : +(t.category === M.V.STEAM)));
                return null != l && a.unshift({ category: "XBOX_GAME_PASS", url: l }), a;
            }, [t, i, n, s, l]));
    return { storeWebsites: r, showsStoreLinks: r.length > 0 && null != e };
}
function lF(e) {
    let { data: t, trackAction: l } = e,
        n = (0, e8.A)();
    return (0, i.jsx)(lW, {
        icon: t.icon,
        text: t.text,
        "aria-label": t.ariaLabel,
        onClick: () => {
            l(t.action), n(t.url);
        },
    });
}
let lB = function (e) {
    let { game: t, trackAction: n } = e,
        { showsStoreLinks: s, storeWebsites: r } = lY(t),
        c = a.useMemo(() => r.map(lD).filter((e) => null != e), [r]);
    if (!s) return null;
    if (1 === c.length) {
        let [e] = c;
        return (0, i.jsx)(lF, { data: e, trackAction: n });
    }
    if (2 === c.length)
        return (0, i.jsxs)("div", {
            className: lU.G,
            children: [(0, i.jsx)(lF, { data: c[0], trackAction: n }), (0, i.jsx)(lF, { data: c[1], trackAction: n })],
        });
    let o = (0, i.jsx)(lW, {
        text: eo.intl.string(eo.t["/hMurx"]),
        "aria-label": eo.intl.string(eo.t.nK60cc),
        onClick: () =>
            (function (e) {
                let { game: t, websiteButtons: n, trackAction: a } = e;
                (0, lV.openModalLazy)(async () => {
                    let { default: e } = await l.e("76758").then(l.bind(l, 459477));
                    return (l) => (0, i.jsx)(e, { game: t, websiteButtons: n, trackAction: a, ...l });
                });
            })({ game: t, websiteButtons: c, trackAction: n }),
    });
    return r.some((e) => "XBOX_GAME_PASS" === e.category)
        ? (0, i.jsxs)("div", { className: lU.G, children: [(0, i.jsx)(lF, { data: c[0], trackAction: n }), o] })
        : o;
};
var lH = l(123292);
function lz(e) {
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
                    ? (t(_.Ws.ShowLess), n("collapsed"))
                    : "collapsed" === l && (t(_.Ws.ShowMore), n("expanded"));
            }, [t, l]);
            return {
                isExpanded: "expanded" === l,
                showToggle: "expanded" === l || "collapsed" === l,
                handleToggleExpanded: i,
            };
        })(n, l),
        { isTwoColumn: u } = H(),
        d = a.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let m = s ? eo.intl.string(eo.t["6MwJo/"]) : eo.intl.string(eo.t.lBeKY2);
    return (0, i.jsxs)("div", {
        className: r()(te.fi, te.mX),
        children: [
            (0, i.jsx)(J.E, { ref: n, lineClamp: s ? void 0 : d, variant: "text-md/medium", children: t.description }),
            c && (0, i.jsx)(lH.Q, { onClick: o, text: m }),
        ],
    });
}
function lX(e) {
    let { game: t, trackAction: l } = e;
    return (0, i.jsxs)("div", {
        className: te.oC,
        children: [
            (0, i.jsxs)("div", {
                className: te.lM,
                children: [(0, i.jsx)(le, { game: t, trackAction: l }), (0, i.jsx)(lz, { game: t, trackAction: l })],
            }),
            (0, i.jsx)(eD, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(ly, { trackAction: l }),
            (0, i.jsx)(lN, { game: t, trackAction: l }),
        ],
    });
}
function lK(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        a = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: te.V0,
        children: [
            (0, i.jsx)(le, { game: t, trackAction: l }),
            (0, i.jsxs)("div", {
                className: te.gr,
                children: [
                    (0, i.jsx)(tK, { game: t, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: te.E1,
                        children: [
                            (0, i.jsx)(lB, { game: t, trackAction: l }),
                            (0, i.jsx)(lz, { game: t, trackAction: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(tQ, { analyticsLocations: n, trackAction: l }),
            (0, i.jsx)(tu, { trackAction: l }),
            (0, i.jsx)(eD, { gameId: t.id, trackAction: l }),
            (0, i.jsx)(ly, { trackAction: l }),
            (0, i.jsx)(lN, { game: t, trackAction: l }),
            a && (0, i.jsx)(lh, { game: t, trackAction: l }),
            (0, i.jsx)(ts, { game: t, trackAction: l }),
        ],
    });
}
function lJ(e) {
    let { onCloudPlayClick: t, analyticsLocations: l, trackAction: n } = e,
        { closeModal: s } = H();
    (0, I.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let r = a.useCallback(() => {
        n(_.Ws.CloudPlay), s(), t();
    }, [s, t, n]);
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
function l$(e) {
    let { game: t, trackAction: l, analyticsLocations: n } = e,
        { isCloudPlayButtonShown: a, onCloudPlayClick: s } = (function (e) {
            let { gameId: t, analyticsLocations: l } = e,
                n = (0, b.h)(t),
                i = (0, v.A)({ application: n, analyticsLocations: l }),
                [a] = (0, y.L)(t);
            return { onCloudPlayClick: i, isCloudPlayButtonShown: !a && null != i };
        })({ gameId: t.id, analyticsLocations: n }),
        { showsStoreLinks: c } = lY(t),
        o = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(te.Pn, te.fi, te.iH, c ? te.sV : te.gF),
        children: [
            a && null != s
                ? (0, i.jsx)("div", {
                      className: te.NC,
                      children: (0, i.jsx)(lJ, { onCloudPlayClick: s, analyticsLocations: n, trackAction: l }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: te.V0,
                children: [
                    (0, i.jsx)(lB, { game: t, trackAction: l }),
                    (0, i.jsx)(tQ, { analyticsLocations: n, trackAction: l }),
                    (0, i.jsx)(tu, { trackAction: l }),
                    o && (0, i.jsx)(lh, { game: t, trackAction: l }),
                    (0, i.jsx)(ts, { game: t, trackAction: l }),
                ],
            }),
        ],
    });
}
let lq = function (e) {
    let t,
        {
            gameId: l,
            source: n,
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
        X = (0, G.s)(l),
        { data: K } = (0, T.I)(l),
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
            connectionApp: el,
        } = (0, N.RD)(K),
        { invite: en, isMember: ei } = D(K, M),
        { socialLayerStorefrontRecommendationsData: ea } = (function (e) {
            let t = W.default.getCurrentUser()?.id,
                l = a.useMemo(() => (null != t ? [t] : []), [t]),
                n = (0, d.bG)([U.A], () => (null != e ? U.A.getApplicationIdFromDetectableId(e) : void 0)),
                i = (0, b.h)(n),
                s = a.useMemo(() => (null != n ? [n] : []), [n]),
                { recommendations: r, status: c } = (0, F.XQ)({
                    applicationIds: s,
                    userIds: l,
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
        })(l),
        es = (e, t) => {
            let { guildId: i, isVerified: a } = (0, _.VO)(q.current);
            (0, _.Tn)({
                gameName: J,
                gameId: l,
                action: e,
                similarGameId: t,
                viewId: H,
                guildId: i,
                isVerified: a,
                source: n,
            });
        };
    (0, j.Ay)(() => {
        (0, _.rw)({ source: n, viewId: H, gameId: l, gameName: J, authorId: s, profileType: _.HV.FullProfile }),
            (0, C.He)();
    }),
        (0, j.Ay)(() => () => {
            let { isVerified: e, guildId: t } = (0, _.VO)(q.current),
                n = Date.now(),
                i = X.map((e) => {
                    let t = (0, R.JM)(e) ? (0, R.W6)(e, n) : (0, R.aJ)(e, w);
                    return JSON.stringify({ item_id: e.id, trait: e.traits, time_played: t });
                });
            (0, _.V_)({
                viewId: H,
                gameId: l,
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
                connectionApp: el,
                invite: en,
                isMember: ei,
                socialLayerStorefrontRecommendationsData: ea,
                closeModal: eo,
                getScrollOffset: em,
            }),
            [v, Q, Z, ee, et, el, en, ei, ea, eo, em],
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
                                                            (0, i.jsx)(lX, { game: K, trackAction: es }),
                                                            (0, i.jsx)(l$, {
                                                                game: K,
                                                                appContext: m,
                                                                source: n,
                                                                trackExternalAction: h,
                                                                trackAction: es,
                                                                analyticsLocations: z,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)("div", {
                                                        className: te.b9,
                                                        children: (0, i.jsx)(lK, {
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
