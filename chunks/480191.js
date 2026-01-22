n.d(t, {
    A: () => G,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(835245),
    l = n(417597),
    c = n(827734),
    u = n(397927),
    d = n(793574),
    f = n(58149),
    p = n(325445),
    _ = n(954921),
    h = n(234914),
    m = n(22007),
    g = n(77350),
    E = n(112758),
    b = n(754459),
    y = n(967144),
    O = n(342296),
    A = n(253932),
    v = n(696451),
    S = n(287809),
    I = n(486020),
    T = n(449054),
    C = n(218394),
    N = n(19178),
    R = n(650724),
    w = n(652215),
    P = n(381941),
    D = n(985018),
    x = n(780247),
    L = n(278664);

function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}

function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function G(e) {
    var t, n, a, j;
    let { embedUrl: k, message: G, channel: V } = e,
        F = i.useRef(null),
        B = i.useRef(null),
        H = (0, R.D)(k, G),
        { setPopout: Y } = (0, b.A)(G.id, P.Fd),
        W = (0, E.VL)(G, V, Y, !0),
        K = A.kt.useSetting(),
        z = (0, C.j)(),
        [q, X] = i.useState(!1),
        [Z, Q] = i.useState((null == H ? void 0 : H.coverImage) == null),
        $ = (0, l.bG)([v.Ay, S.default], () => {
            var e;
            return v.Ay.isMember(
                null == H ? void 0 : H.guildId,
                null == (e = S.default.getCurrentUser()) ? void 0 : e.id,
            );
        }, [H]),
        J = (0, l.bG)([v.Ay], () =>
            (null == H ? void 0 : H.authorId) != null ? v.Ay.getMember(H.guildId, H.authorId) : null,
        ),
        ee = (0, p.A)(
            (null == J ? void 0 : J.avatarDecoration) != null
                ? null == J
                    ? void 0
                    : J.avatarDecoration
                : null == H || null == (a = H.user)
                  ? void 0
                  : a.avatarDecoration,
        ),
        [et, en, er] = i.useMemo(() => {
            var e, t;
            return [
                null != (e = null == J ? void 0 : J.colorString) ? e : "inherit",
                null != (t = null == J ? void 0 : J.colorStrings) ? t : null,
                null == J ? void 0 : J.colorRoleId,
            ];
        }, [J]),
        ei = (0, y.gn)(null == J ? void 0 : J.guildId, null != (t = null == H ? void 0 : H.authorId) ? t : void 0, en),
        { reducedMotion: ea } = i.useContext(u.CZY),
        [es, eo] = i.useState(!1),
        el = i.useCallback(() => {
            X(!0);
        }, [X]),
        ec = i.useCallback(() => {
            X(!1);
        }, [X]),
        eu = i.useCallback(async () => {
            null != H &&
                ((0, f.zV)(w.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: H.threadId,
                    channel_id: V.id,
                    can_access: H.canAccess,
                    is_member: $,
                }),
                H.canAccess
                    ? (0, m.A)(w.BVt.CHANNEL(H.guildId, H.threadId, H.messageId))
                    : $
                      ? (0, m.A)(w.BVt.CHANNEL(H.guildId, H.parentChannelId))
                      : await T.Z2(
                            H.guildId,
                            {},
                            {
                                channelId: H.parentChannelId,
                            },
                        ));
        }, [H, V, $]);
    if (null == H) return null;
    let ed = (0, I.F_)({
            avatarDecoration: ee,
            size: (0, _.Te)(u._3J.SIZE_40),
            canAnimate: es,
        }),
        ef = null == (j = H.user) ? void 0 : j.getAvatarURL(H.guildId, 40, es),
        ep = () => {
            ea.enabled || eo((e) => !e);
        },
        e_ = () =>
            null == H.authorId
                ? (0, r.jsx)(u.V30, {
                      name: H.authorName,
                      colorString: et,
                      colorStrings: ei,
                      className: x.fh,
                  })
                : (0, r.jsx)(
                      O.A,
                      {
                          targetElementRef: F,
                          userId: H.authorId,
                          guildId: H.guildId,
                          channelId: V.id,
                          messageId: G.id,
                          roleId: er,
                          avatarUrl: H.avatarUrl,
                          newAnalyticsLocations: [d.A.USERNAME],
                          children: (e) =>
                              (0, r.jsx)(
                                  u.V30,
                                  U(M({}, e), {
                                      ref: F,
                                      name: H.authorName,
                                      colorString: et,
                                      colorStrings: ei,
                                      className: x.fh,
                                  }),
                              ),
                      },
                      (0, o.A)(),
                  ),
        eh = H.coverImage,
        em = null != eh && (0, g.ge)(eh),
        eg = z && (K || q);
    return (0, r.jsxs)("div", {
        className: x.wb,
        children: [
            (0, r.jsxs)("div", {
                className: x.iT,
                onMouseEnter: el,
                onMouseLeave: ec,
                children: [
                    !Z &&
                        (!0 === H.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)("img", {
                                  src: L,
                                  alt: D.intl.string(D.t.rIbh8H),
                                  className: s()(x.xn, {
                                      [x.p6]: H.shouldSpoiler,
                                  }),
                                  onContextMenu: W,
                                  onError: () => Q(!0),
                              })
                            : (0, r.jsx)(h.A, {
                                  src: !eg && em ? "".concat(eh, "?format=png") : eh,
                                  backgroundSrc: "".concat(eh, "?format=png"),
                                  alt: D.intl.string(D.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: s()(x.xn, {
                                      [x.p6]: H.shouldSpoiler,
                                  }),
                                  imageChildClassName: x.q_,
                                  onContextMenu: W,
                                  onError: () => Q(!0),
                              })),
                    null != H.coverImageOverlayText &&
                        (0, r.jsx)(u.DUT, {
                            onClick: eu,
                            children: (0, r.jsx)("div", {
                                className: x.nx,
                                children: (0, r.jsxs)("div", {
                                    className: x.BS,
                                    children: [
                                        (0, r.jsx)(N.A, {
                                            color: c.A.colors.WHITE.css,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: H.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: x.iQ,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.OA,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: x.hF,
                                children: H.title,
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: s()(x.hF, x.Fq),
                                children: H.subtitle,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: x._5,
                        children: [
                            null != H.authorId &&
                                null != ef &&
                                (0, r.jsx)(O.A, {
                                    targetElementRef: B,
                                    userId: H.authorId,
                                    guildId: H.guildId,
                                    channelId: V.id,
                                    messageId: G.id,
                                    roleId: er,
                                    avatarUrl: H.avatarUrl,
                                    newAnalyticsLocations: [d.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)("div", {
                                            onMouseEnter: ep,
                                            onMouseLeave: ep,
                                            children: (0, r.jsx)(
                                                u.euF,
                                                U(M({}, e), {
                                                    ref: B,
                                                    size: u._3J.SIZE_40,
                                                    src: ef,
                                                    "aria-label": D.intl.string(D.t.KXz3XB),
                                                    avatarDecoration: ed,
                                                }),
                                            ),
                                        }),
                                }),
                            (0, r.jsxs)("div", {
                                className: x.Ny,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: x.O9,
                                        children: [
                                            null != H.channelName &&
                                                (0, r.jsx)(u.d2$, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: x.Xg,
                                                }),
                                            (0, r.jsx)(u.DUT, {
                                                onClick: eu,
                                                className: x.HA,
                                                children: (0, r.jsx)(u.Heading, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: null != (n = H.channelName) ? n : H.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != H.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: x.wn,
                                            children: D.intl.format(D.t.voIDKa, {
                                                authorName: H.authorName,
                                                authorNameHook: e_,
                                            }),
                                        }),
                                ],
                            }),
                            H.canAccess
                                ? (0, r.jsx)(u.Button, {
                                      variant: "primary",
                                      onClick: eu,
                                      text: H.ctaText,
                                  })
                                : (0, r.jsx)(u.Button, {
                                      onClick: eu,
                                      variant: "primary",
                                      text: H.ctaText,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
