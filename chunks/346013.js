n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
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
    O = n(456077),
    v = n(695346),
    I = n(271383),
    T = n(594174),
    S = n(768581),
    A = n(900849),
    C = n(506071),
    N = n(495114),
    R = n(170140),
    P = n(981631),
    D = n(959517),
    w = n(388032),
    L = n(823708),
    x = n(527455);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
    var t, n, a, M;
    let { embedUrl: j, message: G, channel: B } = e,
        Z = i.useRef(null),
        F = i.useRef(null),
        V = (0, R.J)(j, G),
        { setPopout: H } = (0, b.Z)(G.id, D.d$),
        Y = (0, E.qo)(G, B, H, !0),
        W = v.QK.useSetting(),
        K = (0, C.n)(),
        [z, q] = i.useState(!1),
        [X, Q] = i.useState((null == V ? void 0 : V.coverImage) == null),
        J = (0, c.e7)([I.ZP, T.default], () => {
            var e;
            return I.ZP.isMember(
                null == V ? void 0 : V.guildId,
                null == (e = T.default.getCurrentUser()) ? void 0 : e.id,
            );
        }, [V]),
        $ = (0, c.e7)([I.ZP], () =>
            (null == V ? void 0 : V.authorId) != null ? I.ZP.getMember(V.guildId, V.authorId) : null,
        ),
        ee = (0, _.Z)(
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
                ((0, f.yw)(P.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: V.threadId,
                    channel_id: B.id,
                    can_access: V.canAccess,
                    is_member: J,
                }),
                V.canAccess
                    ? (0, m.Z)(P.Z5c.CHANNEL(V.guildId, V.threadId, V.messageId))
                    : J
                      ? (0, m.Z)(P.Z5c.CHANNEL(V.guildId, V.parentChannelId))
                      : await A.Ub(V.guildId, {}, { channelId: V.parentChannelId }));
        }, [V, B, J]);
    if (null == V) return null;
    let ed = (0, S.NZ)({
            avatarDecoration: ee,
            size: (0, p.y9)(u.EFr.SIZE_40),
            canAnimate: eo,
        }),
        ef = null == (n = V.user) ? void 0 : n.getAvatarURL(V.guildId, 40, eo),
        e_ = () => {
            ea.enabled || es((e) => !e);
        },
        ep = () =>
            null == V.authorId
                ? (0, r.jsx)(u.rz2, {
                      name: V.authorName,
                      colorString: et,
                      colorStrings: ei,
                      className: L.authorName,
                  })
                : (0, r.jsx)(
                      O.Z,
                      {
                          targetElementRef: Z,
                          userId: V.authorId,
                          guildId: V.guildId,
                          channelId: B.id,
                          messageId: G.id,
                          roleId: er,
                          avatarUrl: V.avatarUrl,
                          newAnalyticsLocations: [d.Z.USERNAME],
                          children: (e) =>
                              (0, r.jsx)(
                                  u.rz2,
                                  U(k({}, e), {
                                      ref: Z,
                                      name: V.authorName,
                                      colorString: et,
                                      colorStrings: ei,
                                      className: L.authorName,
                                  }),
                              ),
                      },
                      (0, s.Z)(),
                  ),
        eh = V.coverImage,
        em = null != eh && (0, g.d$)(eh),
        eg = K && (W || z);
    return (0, r.jsxs)("div", {
        className: L.postPreviewContainer,
        children: [
            (0, r.jsxs)("div", {
                className: L.thumbnailContainer,
                onMouseEnter: el,
                onMouseLeave: ec,
                children: [
                    !X &&
                        (!0 === V.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)("img", {
                                  src: x,
                                  alt: w.intl.string(w.t.rIbh8H),
                                  className: o()(L.thumbnail, { [L.spoiler]: V.shouldSpoiler }),
                                  onContextMenu: Y,
                                  onError: () => Q(!0),
                              })
                            : (0, r.jsx)(h.Z, {
                                  src: !eg && em ? "".concat(eh, "?format=png") : eh,
                                  backgroundSrc: "".concat(eh, "?format=png"),
                                  alt: w.intl.string(w.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(L.thumbnail, { [L.spoiler]: V.shouldSpoiler }),
                                  imageChildClassName: L.thumbnailImage,
                                  onContextMenu: Y,
                                  onError: () => Q(!0),
                              })),
                    null != V.coverImageOverlayText &&
                        (0, r.jsx)(u.P3F, {
                            onClick: eu,
                            children: (0, r.jsx)("div", {
                                className: L.thumbnailOverlay,
                                children: (0, r.jsxs)("div", {
                                    className: L.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(N.Z, { color: l.Z.WHITE }),
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
                className: L.descriptionContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: L.descriptionHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: L.descriptionHeaderText,
                                children: V.title,
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(L.descriptionHeaderText, L.descriptionSubtitle),
                                children: V.subtitle,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: L.descriptionFooter,
                        children: [
                            null != V.authorId &&
                                null != ef &&
                                (0, r.jsx)(O.Z, {
                                    targetElementRef: F,
                                    userId: V.authorId,
                                    guildId: V.guildId,
                                    channelId: B.id,
                                    messageId: G.id,
                                    roleId: er,
                                    avatarUrl: V.avatarUrl,
                                    newAnalyticsLocations: [d.Z.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)("div", {
                                            onMouseEnter: e_,
                                            onMouseLeave: e_,
                                            children: (0, r.jsx)(
                                                u.qEK,
                                                U(k({}, e), {
                                                    ref: F,
                                                    size: u.EFr.SIZE_40,
                                                    src: ef,
                                                    "aria-label": w.intl.string(w.t.KXz3XB),
                                                    avatarDecoration: ed,
                                                }),
                                            ),
                                        }),
                                }),
                            (0, r.jsxs)("div", {
                                className: L.descriptionFooterContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: L.descriptionFooterChannelName,
                                        children: [
                                            null != V.channelName &&
                                                (0, r.jsx)(u.EAQ, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: L.mediaChannelIcon,
                                                }),
                                            (0, r.jsx)(u.P3F, {
                                                onClick: eu,
                                                className: L.channelName,
                                                children: (0, r.jsx)(u.Heading, {
                                                    variant: "heading-md/semibold",
                                                    color: "header-primary",
                                                    children: null != (M = V.channelName) ? M : V.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != V.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: L.descriptionFooterAuthorContainer,
                                            children: w.intl.format(w.t.voIDKa, {
                                                authorName: V.authorName,
                                                authorNameHook: ep,
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
