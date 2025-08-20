n.d(t, { Z: () => G }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(831209),
    c = n(399606),
    u = n(481060),
    d = n(100527),
    f = n(367907),
    _ = n(676742),
    p = n(1585),
    h = n(841762),
    m = n(336197),
    g = n(406432),
    E = n(348238),
    b = n(38267),
    y = n(884902),
    O = n(670188),
    v = n(695346),
    I = n(271383),
    T = n(594174),
    S = n(768581),
    A = n(900849),
    C = n(506071),
    N = n(495114),
    R = n(170140),
    P = n(981631),
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
    let { embedUrl: k, message: G, channel: B } = e,
        Z = i.useRef(null),
        V = i.useRef(null),
        F = (0, R.J)(k, G),
        { setPopout: H } = (0, b.Z)(G.id, w.d$),
        Y = (0, E.qo)(G, B, H, !0),
        W = v.QK.useSetting(),
        K = (0, C.n)(),
        [z, q] = i.useState(!1),
        [X, Q] = i.useState((null == F ? void 0 : F.coverImage) == null),
        J = (0, c.e7)([I.ZP, T.default], () => {
            var e;
            return I.ZP.isMember(
                null == F ? void 0 : F.guildId,
                null == (e = T.default.getCurrentUser()) ? void 0 : e.id,
            );
        }, [F]),
        $ = (0, c.e7)([I.ZP], () =>
            (null == F ? void 0 : F.authorId) != null ? I.ZP.getMember(F.guildId, F.authorId) : null,
        ),
        ee = (0, _.Z)(
            (null == $ ? void 0 : $.avatarDecoration) != null
                ? null == $
                    ? void 0
                    : $.avatarDecoration
                : null == F || null == (t = F.user)
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
        ei = (0, y.X7)(null == $ ? void 0 : $.guildId, null != (a = null == F ? void 0 : F.authorId) ? a : void 0, en),
        { reducedMotion: ea } = i.useContext(u.Sfi),
        [eo, es] = i.useState(!1),
        el = i.useCallback(() => {
            q(!0);
        }, [q]),
        ec = i.useCallback(() => {
            q(!1);
        }, [q]),
        eu = i.useCallback(async () => {
            null != F &&
                ((0, f.yw)(P.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: F.threadId,
                    channel_id: B.id,
                    can_access: F.canAccess,
                    is_member: J,
                }),
                F.canAccess
                    ? (0, m.Z)(P.Z5c.CHANNEL(F.guildId, F.threadId, F.messageId))
                    : J
                      ? (0, m.Z)(P.Z5c.CHANNEL(F.guildId, F.parentChannelId))
                      : await A.Ub(F.guildId, {}, { channelId: F.parentChannelId }));
        }, [F, B, J]);
    if (null == F) return null;
    let ed = (0, S.NZ)({
            avatarDecoration: ee,
            size: (0, p.y9)(u.EFr.SIZE_40),
            canAnimate: eo,
        }),
        ef = null == (n = F.user) ? void 0 : n.getAvatarURL(F.guildId, 40, eo),
        e_ = () => {
            ea.enabled || es((e) => !e);
        },
        ep = () =>
            null == F.authorId
                ? (0, r.jsx)(u.rz2, {
                      name: F.authorName,
                      colorString: et,
                      colorStrings: ei,
                      className: x.authorName,
                  })
                : (0, r.jsx)(
                      O.Z,
                      {
                          targetElementRef: Z,
                          userId: F.authorId,
                          guildId: F.guildId,
                          channelId: B.id,
                          messageId: G.id,
                          roleId: er,
                          avatarUrl: F.avatarUrl,
                          newAnalyticsLocations: [d.Z.USERNAME],
                          children: (e) =>
                              (0, r.jsx)(
                                  u.rz2,
                                  U(M({}, e), {
                                      ref: Z,
                                      name: F.authorName,
                                      colorString: et,
                                      colorStrings: ei,
                                      className: x.authorName,
                                  }),
                              ),
                      },
                      (0, s.Z)(),
                  ),
        eh = F.coverImage,
        em = null != eh && (0, g.d$)(eh),
        eg = K && (W || z);
    return (0, r.jsxs)("div", {
        className: x.postPreviewContainer,
        children: [
            (0, r.jsxs)("div", {
                className: x.thumbnailContainer,
                onMouseEnter: el,
                onMouseLeave: ec,
                children: [
                    !X &&
                        (!0 === F.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)("img", {
                                  src: L,
                                  alt: D.intl.string(D.t.rIbh8P),
                                  className: o()(x.thumbnail, { [x.spoiler]: F.shouldSpoiler }),
                                  onContextMenu: Y,
                                  onError: () => Q(!0),
                              })
                            : (0, r.jsx)(h.Z, {
                                  src: !eg && em ? "".concat(eh, "?format=png") : eh,
                                  backgroundSrc: "".concat(eh, "?format=png"),
                                  alt: D.intl.string(D.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: o()(x.thumbnail, { [x.spoiler]: F.shouldSpoiler }),
                                  imageChildClassName: x.thumbnailImage,
                                  onContextMenu: Y,
                                  onError: () => Q(!0),
                              })),
                    null != F.coverImageOverlayText &&
                        (0, r.jsx)(u.P3F, {
                            onClick: eu,
                            children: (0, r.jsx)("div", {
                                className: x.thumbnailOverlay,
                                children: (0, r.jsxs)("div", {
                                    className: x.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(N.Z, { color: l.Z.WHITE }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: F.coverImageOverlayText,
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
                                children: F.title,
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(x.descriptionHeaderText, x.descriptionSubtitle),
                                children: F.subtitle,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: x.descriptionFooter,
                        children: [
                            null != F.authorId &&
                                null != ef &&
                                (0, r.jsx)(O.Z, {
                                    targetElementRef: V,
                                    userId: F.authorId,
                                    guildId: F.guildId,
                                    channelId: B.id,
                                    messageId: G.id,
                                    roleId: er,
                                    avatarUrl: F.avatarUrl,
                                    newAnalyticsLocations: [d.Z.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)("div", {
                                            onMouseEnter: e_,
                                            onMouseLeave: e_,
                                            children: (0, r.jsx)(
                                                u.qEK,
                                                U(M({}, e), {
                                                    ref: V,
                                                    size: u.EFr.SIZE_40,
                                                    src: ef,
                                                    "aria-label": D.intl.string(D.t.KXz3XF),
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
                                            null != F.channelName &&
                                                (0, r.jsx)(u.EAQ, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: x.mediaChannelIcon,
                                                }),
                                            (0, r.jsx)(u.P3F, {
                                                onClick: eu,
                                                className: x.channelName,
                                                children: (0, r.jsx)(u.X6q, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: null != (j = F.channelName) ? j : F.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != F.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: x.descriptionFooterAuthorContainer,
                                            children: D.intl.format(D.t.voIDKS, {
                                                authorName: F.authorName,
                                                authorNameHook: ep,
                                            }),
                                        }),
                                ],
                            }),
                            F.canAccess
                                ? (0, r.jsx)(u.zxk, {
                                      variant: "primary",
                                      onClick: eu,
                                      text: F.ctaText,
                                  })
                                : (0, r.jsx)(u.zxk, {
                                      onClick: eu,
                                      variant: "primary",
                                      text: F.ctaText,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
