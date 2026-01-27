n.d(t, {
    A: () => k,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(835245),
    o = n(417597),
    c = n(827734),
    u = n(397927),
    d = n(793574),
    p = n(58149),
    m = n(325445),
    f = n(954921),
    g = n(234914),
    h = n(22007),
    _ = n(77350),
    b = n(112758),
    A = n(754459),
    y = n(967144),
    v = n(342296),
    x = n(253932),
    O = n(696451),
    E = n(287809),
    j = n(486020),
    C = n(449054),
    I = n(218394),
    S = n(19178),
    T = n(650724),
    N = n(652215),
    P = n(381941),
    w = n(985018),
    R = n(780247),
    D = n(278664);

function L(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function k(e) {
    var t, n, l, k;
    let { embedUrl: U, message: G, channel: B } = e,
        F = i.useRef(null),
        H = i.useRef(null),
        V = (0, T.D)(U, G),
        { setPopout: z } = (0, A.A)(G.id, P.Fd),
        W = (0, b.VL)(G, B, z, !0),
        K = x.kt.useSetting(),
        Y = (0, I.j)(),
        [q, J] = i.useState(!1),
        [Q, Z] = i.useState((null == V ? void 0 : V.coverImage) == null),
        X = (0, o.bG)([O.Ay, E.default], () => {
            var e;
            return O.Ay.isMember(
                null == V ? void 0 : V.guildId,
                null == (e = E.default.getCurrentUser()) ? void 0 : e.id,
            );
        }, [V]),
        $ = (0, o.bG)([O.Ay], () =>
            (null == V ? void 0 : V.authorId) != null ? O.Ay.getMember(V.guildId, V.authorId) : null,
        ),
        ee = (0, m.A)(
            (null == $ ? void 0 : $.avatarDecoration) != null
                ? null == $
                    ? void 0
                    : $.avatarDecoration
                : null == V || null == (l = V.user)
                  ? void 0
                  : l.avatarDecoration,
        ),
        [et, en, er] = i.useMemo(() => {
            var e, t;
            return [
                null != (e = null == $ ? void 0 : $.colorString) ? e : "inherit",
                null != (t = null == $ ? void 0 : $.colorStrings) ? t : null,
                null == $ ? void 0 : $.colorRoleId,
            ];
        }, [$]),
        ei = (0, y.gn)(null == $ ? void 0 : $.guildId, null != (t = null == V ? void 0 : V.authorId) ? t : void 0, en),
        { reducedMotion: el } = i.useContext(u.CZY),
        [ea, es] = i.useState(!1),
        eo = i.useCallback(() => {
            J(!0);
        }, [J]),
        ec = i.useCallback(() => {
            J(!1);
        }, [J]),
        eu = i.useCallback(async () => {
            null != V &&
                ((0, p.zV)(N.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: V.threadId,
                    channel_id: B.id,
                    can_access: V.canAccess,
                    is_member: X,
                }),
                V.canAccess
                    ? (0, h.A)(N.BVt.CHANNEL(V.guildId, V.threadId, V.messageId))
                    : X
                      ? (0, h.A)(N.BVt.CHANNEL(V.guildId, V.parentChannelId))
                      : await C.Z2(
                            V.guildId,
                            {},
                            {
                                channelId: V.parentChannelId,
                            },
                        ));
        }, [V, B, X]);
    if (null == V) return null;
    let ed = (0, j.F_)({
            avatarDecoration: ee,
            size: (0, f.Te)(u._3J.SIZE_40),
            canAnimate: ea,
        }),
        ep = null == (k = V.user) ? void 0 : k.getAvatarURL(V.guildId, 40, ea),
        em = () => {
            el.enabled || es((e) => !e);
        },
        ef = V.coverImage,
        eg = null != ef && (0, _.ge)(ef);
    return (0, r.jsxs)("div", {
        className: R.wb,
        children: [
            (0, r.jsxs)("div", {
                className: R.iT,
                onMouseEnter: eo,
                onMouseLeave: ec,
                children: [
                    !Q &&
                        (!0 === V.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)("img", {
                                  src: D,
                                  alt: w.intl.string(w.t.rIbh8H),
                                  className: a()(R.xn, {
                                      [R.p6]: V.shouldSpoiler,
                                  }),
                                  onContextMenu: W,
                                  onError: () => Z(!0),
                              })
                            : (0, r.jsx)(g.A, {
                                  src: !(Y && (K || q)) && eg ? "".concat(ef, "?format=png") : ef,
                                  backgroundSrc: "".concat(ef, "?format=png"),
                                  alt: w.intl.string(w.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: a()(R.xn, {
                                      [R.p6]: V.shouldSpoiler,
                                  }),
                                  imageChildClassName: R.q_,
                                  onContextMenu: W,
                                  onError: () => Z(!0),
                              })),
                    null != V.coverImageOverlayText &&
                        (0, r.jsx)(u.DUT, {
                            onClick: eu,
                            children: (0, r.jsx)("div", {
                                className: R.nx,
                                children: (0, r.jsxs)("div", {
                                    className: R.BS,
                                    children: [
                                        (0, r.jsx)(S.A, {
                                            color: c.A.colors.WHITE.css,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: V.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: R.iQ,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.OA,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: R.hF,
                                children: V.title,
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: a()(R.hF, R.Fq),
                                children: V.subtitle,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: R._5,
                        children: [
                            null != V.authorId &&
                                null != ep &&
                                (0, r.jsx)(v.A, {
                                    targetElementRef: H,
                                    userId: V.authorId,
                                    guildId: V.guildId,
                                    channelId: B.id,
                                    messageId: G.id,
                                    roleId: er,
                                    avatarUrl: V.avatarUrl,
                                    newAnalyticsLocations: [d.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)("div", {
                                            onMouseEnter: em,
                                            onMouseLeave: em,
                                            children: (0, r.jsx)(
                                                u.euF,
                                                M(L({}, e), {
                                                    ref: H,
                                                    size: u._3J.SIZE_40,
                                                    src: ep,
                                                    "aria-label": w.intl.string(w.t.KXz3XB),
                                                    avatarDecoration: ed,
                                                }),
                                            ),
                                        }),
                                }),
                            (0, r.jsxs)("div", {
                                className: R.Ny,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: R.O9,
                                        children: [
                                            null != V.channelName &&
                                                (0, r.jsx)(u.d2$, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: R.Xg,
                                                }),
                                            (0, r.jsx)(u.DUT, {
                                                onClick: eu,
                                                className: R.HA,
                                                children: (0, r.jsx)(u.Heading, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: null != (n = V.channelName) ? n : V.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != V.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: R.wn,
                                            children: w.intl.format(w.t.voIDKa, {
                                                authorName: V.authorName,
                                                authorNameHook: () =>
                                                    null == V.authorId
                                                        ? (0, r.jsx)(u.V30, {
                                                              name: V.authorName,
                                                              colorString: et,
                                                              colorStrings: ei,
                                                              className: R.fh,
                                                          })
                                                        : (0, r.jsx)(
                                                              v.A,
                                                              {
                                                                  targetElementRef: F,
                                                                  userId: V.authorId,
                                                                  guildId: V.guildId,
                                                                  channelId: B.id,
                                                                  messageId: G.id,
                                                                  roleId: er,
                                                                  avatarUrl: V.avatarUrl,
                                                                  newAnalyticsLocations: [d.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, r.jsx)(
                                                                          u.V30,
                                                                          M(L({}, e), {
                                                                              ref: F,
                                                                              name: V.authorName,
                                                                              colorString: et,
                                                                              colorStrings: ei,
                                                                              className: R.fh,
                                                                          }),
                                                                      ),
                                                              },
                                                              (0, s.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            V.canAccess
                                ? (0, r.jsx)(u.Button, {
                                      variant: "primary",
                                      onClick: eu,
                                      text: V.ctaText,
                                  })
                                : (0, r.jsx)(u.Button, {
                                      onClick: eu,
                                      variant: "primary",
                                      text: V.ctaText,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
