n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(399606),
    c = n(692547),
    u = n(481060),
    d = n(100527),
    f = n(367907),
    p = n(676742),
    _ = n(1585),
    m = n(841762),
    h = n(336197),
    g = n(406432),
    E = n(348238),
    b = n(38267),
    y = n(884902),
    O = n(670188),
    v = n(695346),
    S = n(271383),
    I = n(594174),
    T = n(768581),
    A = n(900849),
    C = n(506071),
    N = n(495114),
    P = n(170140),
    R = n(981631),
    w = n(959517),
    D = n(388032),
    x = n(823708),
    L = n(527455);
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
    let { embedUrl: k, message: G, channel: Z } = e,
        B = i.useRef(null),
        F = i.useRef(null),
        V = (0, P.J)(k, G),
        { setPopout: H } = (0, b.Z)(G.id, w.d$),
        Y = (0, E.qo)(G, Z, H, !0),
        W = v.QK.useSetting(),
        K = (0, C.n)(),
        [z, q] = i.useState(!1),
        [Q, X] = i.useState((null == V ? void 0 : V.coverImage) == null),
        J = (0, l.e7)([S.ZP, I.default], () => {
            var e;
            return S.ZP.isMember(
                null == V ? void 0 : V.guildId,
                null == (e = I.default.getCurrentUser()) ? void 0 : e.id,
            );
        }, [V]),
        $ = (0, l.e7)([S.ZP], () =>
            (null == V ? void 0 : V.authorId) != null ? S.ZP.getMember(V.guildId, V.authorId) : null,
        ),
        ee = (0, p.Z)(
            (null == $ ? void 0 : $.avatarDecoration) != null
                ? null == $
                    ? void 0
                    : $.avatarDecoration
                : null == V || null == (t = V.user)
                  ? void 0
                  : t.avatarDecoration,
        ),
        [et, en, er] = i.useMemo(() => {
            var e, t;
            return [
                null != (e = null == $ ? void 0 : $.colorString) ? e : "inherit",
                null != (t = null == $ ? void 0 : $.colorStrings) ? t : null,
                null == $ ? void 0 : $.colorRoleId,
            ];
        }, [$]),
        ei = (0, y.X7)(null == $ ? void 0 : $.guildId, null != (a = null == V ? void 0 : V.authorId) ? a : void 0, en),
        { reducedMotion: ea } = i.useContext(u.Sfi),
        [eo, es] = i.useState(!1),
        el = i.useCallback(() => {
            q(!0);
        }, [q]),
        ec = i.useCallback(() => {
            q(!1);
        }, [q]),
        eu = i.useCallback(async () => {
            null != V &&
                ((0, f.yw)(R.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: V.threadId,
                    channel_id: Z.id,
                    can_access: V.canAccess,
                    is_member: J,
                }),
                V.canAccess
                    ? (0, h.Z)(R.Z5c.CHANNEL(V.guildId, V.threadId, V.messageId))
                    : J
                      ? (0, h.Z)(R.Z5c.CHANNEL(V.guildId, V.parentChannelId))
                      : await A.Ub(V.guildId, {}, { channelId: V.parentChannelId }));
        }, [V, Z, J]);
    if (null == V) return null;
    let ed = (0, T.NZ)({
            avatarDecoration: ee,
            size: (0, _.y9)(u.EFr.SIZE_40),
            canAnimate: eo,
        }),
        ef = null == (n = V.user) ? void 0 : n.getAvatarURL(V.guildId, 40, eo),
        ep = () => {
            ea.enabled || es((e) => !e);
        },
        e_ = () =>
            null == V.authorId
                ? (0, r.jsx)(u.rz2, {
                      name: V.authorName,
                      colorString: et,
                      colorStrings: ei,
                      className: x.authorName,
                  })
                : (0, r.jsx)(
                      O.Z,
                      {
                          targetElementRef: B,
                          userId: V.authorId,
                          guildId: V.guildId,
                          channelId: Z.id,
                          messageId: G.id,
                          roleId: er,
                          avatarUrl: V.avatarUrl,
                          newAnalyticsLocations: [d.Z.USERNAME],
                          children: (e) =>
                              (0, r.jsx)(
                                  u.rz2,
                                  U(M({}, e), {
                                      ref: B,
                                      name: V.authorName,
                                      colorString: et,
                                      colorStrings: ei,
                                      className: x.authorName,
                                  }),
                              ),
                      },
                      (0, s.Z)(),
                  ),
        em = V.coverImage,
        eh = null != em && (0, g.d$)(em),
        eg = K && (W || z);
    return (0, r.jsxs)("div", {
        className: x.postPreviewContainer,
        children: [
            (0, r.jsxs)("div", {
                className: x.thumbnailContainer,
                onMouseEnter: el,
                onMouseLeave: ec,
                children: [
                    !Q &&
                        (!0 === V.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)("img", {
                                  src: L,
                                  alt: D.intl.string(D.t.rIbh8H),
                                  className: o()(x.thumbnail, { [x.spoiler]: V.shouldSpoiler }),
                                  onContextMenu: Y,
                                  onError: () => X(!0),
                              })
                            : (0, r.jsx)(m.Z, {
                                  src: !eg && eh ? "".concat(em, "?format=png") : em,
                                  backgroundSrc: "".concat(em, "?format=png"),
                                  alt: D.intl.string(D.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(x.thumbnail, { [x.spoiler]: V.shouldSpoiler }),
                                  imageChildClassName: x.thumbnailImage,
                                  onContextMenu: Y,
                                  onError: () => X(!0),
                              })),
                    null != V.coverImageOverlayText &&
                        (0, r.jsx)(u.P3F, {
                            onClick: eu,
                            children: (0, r.jsx)("div", {
                                className: x.thumbnailOverlay,
                                children: (0, r.jsxs)("div", {
                                    className: x.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(N.Z, { color: c.Z.colors.WHITE.css }),
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
                className: x.descriptionContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.descriptionHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: x.descriptionHeaderText,
                                children: V.title,
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(x.descriptionHeaderText, x.descriptionSubtitle),
                                children: V.subtitle,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: x.descriptionFooter,
                        children: [
                            null != V.authorId &&
                                null != ef &&
                                (0, r.jsx)(O.Z, {
                                    targetElementRef: F,
                                    userId: V.authorId,
                                    guildId: V.guildId,
                                    channelId: Z.id,
                                    messageId: G.id,
                                    roleId: er,
                                    avatarUrl: V.avatarUrl,
                                    newAnalyticsLocations: [d.Z.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)("div", {
                                            onMouseEnter: ep,
                                            onMouseLeave: ep,
                                            children: (0, r.jsx)(
                                                u.qEK,
                                                U(M({}, e), {
                                                    ref: F,
                                                    size: u.EFr.SIZE_40,
                                                    src: ef,
                                                    "aria-label": D.intl.string(D.t.KXz3XB),
                                                    avatarDecoration: ed,
                                                }),
                                            ),
                                        }),
                                }),
                            (0, r.jsxs)("div", {
                                className: x.descriptionFooterContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: x.descriptionFooterChannelName,
                                        children: [
                                            null != V.channelName &&
                                                (0, r.jsx)(u.EAQ, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: x.mediaChannelIcon,
                                                }),
                                            (0, r.jsx)(u.P3F, {
                                                onClick: eu,
                                                className: x.channelName,
                                                children: (0, r.jsx)(u.Heading, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: null != (j = V.channelName) ? j : V.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != V.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: x.descriptionFooterAuthorContainer,
                                            children: D.intl.format(D.t.voIDKa, {
                                                authorName: V.authorName,
                                                authorNameHook: e_,
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
