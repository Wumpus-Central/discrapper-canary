(n.d(t, { Z: () => M }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(772848),
    s = n(831209),
    c = n(399606),
    u = n(481060),
    d = n(100527),
    p = n(367907),
    m = n(676742),
    f = n(1585),
    _ = n(841762),
    g = n(336197),
    h = n(406432),
    b = n(348238),
    E = n(38267),
    C = n(884902),
    O = n(670188),
    v = n(695346),
    y = n(271383),
    x = n(594174),
    I = n(768581),
    j = n(900849),
    S = n(506071),
    T = n(495114),
    N = n(170140),
    P = n(981631),
    A = n(959517),
    w = n(388032),
    Z = n(70249),
    R = n(527455);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function L(e, t) {
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
function M(e) {
    var t, n, l, M;
    let { embedUrl: k, message: U, channel: F } = e,
        B = i.useRef(null),
        G = i.useRef(null),
        H = (0, N.J)(k, U),
        { setPopout: V } = (0, E.Z)(U.id, A.d$),
        z = (0, b.qo)(U, F, V, !0),
        W = v.QK.useSetting(),
        K = (0, S.n)(),
        [Y, X] = i.useState(!1),
        [q, Q] = i.useState((null == H ? void 0 : H.coverImage) == null),
        J = (0, c.e7)(
            [y.ZP, x.default],
            () => {
                var e;
                return y.ZP.isMember(null == H ? void 0 : H.guildId, null == (e = x.default.getCurrentUser()) ? void 0 : e.id);
            },
            [H]
        ),
        $ = (0, c.e7)([y.ZP], () => ((null == H ? void 0 : H.authorId) != null ? y.ZP.getMember(H.guildId, H.authorId) : null)),
        ee = (0, m.Z)((null == $ ? void 0 : $.avatarDecoration) != null ? (null == $ ? void 0 : $.avatarDecoration) : null == H || null == (t = H.user) ? void 0 : t.avatarDecoration),
        [et, en, er] = i.useMemo(() => {
            var e, t;
            return [null != (e = null == $ ? void 0 : $.colorString) ? e : 'inherit', null != (t = null == $ ? void 0 : $.colorStrings) ? t : null, null == $ ? void 0 : $.colorRoleId];
        }, [$]),
        ei = (0, C.X7)(null == $ ? void 0 : $.guildId, null != (l = null == H ? void 0 : H.authorId) ? l : void 0, en),
        { reducedMotion: el } = i.useContext(u.Sfi),
        [ea, eo] = i.useState(!1),
        es = i.useCallback(() => {
            X(!0);
        }, [X]),
        ec = i.useCallback(() => {
            X(!1);
        }, [X]),
        eu = i.useCallback(async () => {
            null != H &&
                ((0, p.yw)(P.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: H.threadId,
                    channel_id: F.id,
                    can_access: H.canAccess,
                    is_member: J
                }),
                H.canAccess ? (0, g.Z)(P.Z5c.CHANNEL(H.guildId, H.threadId, H.messageId)) : J ? (0, g.Z)(P.Z5c.CHANNEL(H.guildId, H.parentChannelId)) : await j.Ub(H.guildId, {}, { channelId: H.parentChannelId }));
        }, [H, F, J]);
    if (null == H) return null;
    let ed = (0, I.NZ)({
            avatarDecoration: ee,
            size: (0, f.y9)(u.EFr.SIZE_40),
            canAnimate: ea
        }),
        ep = null == (n = H.user) ? void 0 : n.getAvatarURL(H.guildId, 40, ea),
        em = () => {
            el.enabled || eo((e) => !e);
        },
        ef = H.coverImage,
        e_ = null != ef && (0, h.d$)(ef);
    return (0, r.jsxs)('div', {
        className: Z.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: Z.thumbnailContainer,
                onMouseEnter: es,
                onMouseLeave: ec,
                children: [
                    !q &&
                        (!0 === H.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: R,
                                  alt: w.intl.string(w.t.rIbh8P),
                                  className: a()(Z.thumbnail, { [Z.spoiler]: H.shouldSpoiler }),
                                  onContextMenu: z,
                                  onError: () => Q(!0)
                              })
                            : (0, r.jsx)(_.Z, {
                                  src: !(K && (W || Y)) && e_ ? ''.concat(ef, '?format=png') : ef,
                                  backgroundSrc: ''.concat(ef, '?format=png'),
                                  alt: w.intl.string(w.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: a()(Z.thumbnail, { [Z.spoiler]: H.shouldSpoiler }),
                                  imageChildClassName: Z.thumbnailImage,
                                  onContextMenu: z,
                                  onError: () => Q(!0)
                              })),
                    null != H.coverImageOverlayText &&
                        (0, r.jsx)(u.P3F, {
                            onClick: eu,
                            children: (0, r.jsx)('div', {
                                className: Z.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: Z.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(T.Z, { color: s.Z.WHITE }),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: H.coverImageOverlayText
                                        })
                                    ]
                                })
                            })
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: Z.descriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: Z.descriptionHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-default',
                                className: Z.descriptionHeaderText,
                                children: H.title
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: a()(Z.descriptionHeaderText, Z.descriptionSubtitle),
                                children: H.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: Z.descriptionFooter,
                        children: [
                            null != H.authorId &&
                                null != ep &&
                                (0, r.jsx)(O.Z, {
                                    targetElementRef: G,
                                    userId: H.authorId,
                                    guildId: H.guildId,
                                    channelId: F.id,
                                    messageId: U.id,
                                    roleId: er,
                                    avatarUrl: H.avatarUrl,
                                    newAnalyticsLocations: [d.Z.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            onMouseEnter: em,
                                            onMouseLeave: em,
                                            children: (0, r.jsx)(
                                                u.qEK,
                                                L(D({}, e), {
                                                    ref: G,
                                                    size: u.EFr.SIZE_40,
                                                    src: ep,
                                                    'aria-label': w.intl.string(w.t.KXz3XF),
                                                    avatarDecoration: ed
                                                })
                                            )
                                        })
                                }),
                            (0, r.jsxs)('div', {
                                className: Z.descriptionFooterContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: Z.descriptionFooterChannelName,
                                        children: [
                                            null != H.channelName &&
                                                (0, r.jsx)(u.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: Z.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(u.P3F, {
                                                onClick: eu,
                                                className: Z.channelName,
                                                children: (0, r.jsx)(u.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null != (M = H.channelName) ? M : H.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != H.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: Z.descriptionFooterAuthorContainer,
                                            children: w.intl.format(w.t.voIDKS, {
                                                authorName: H.authorName,
                                                authorNameHook: () =>
                                                    null == H.authorId
                                                        ? (0, r.jsx)(u.rz2, {
                                                              name: H.authorName,
                                                              colorString: et,
                                                              colorStrings: ei,
                                                              className: Z.authorName
                                                          })
                                                        : (0, r.jsx)(
                                                              O.Z,
                                                              {
                                                                  targetElementRef: B,
                                                                  userId: H.authorId,
                                                                  guildId: H.guildId,
                                                                  channelId: F.id,
                                                                  messageId: U.id,
                                                                  roleId: er,
                                                                  avatarUrl: H.avatarUrl,
                                                                  newAnalyticsLocations: [d.Z.USERNAME],
                                                                  children: (e) =>
                                                                      (0, r.jsx)(
                                                                          u.rz2,
                                                                          L(D({}, e), {
                                                                              ref: B,
                                                                              name: H.authorName,
                                                                              colorString: et,
                                                                              colorStrings: ei,
                                                                              className: Z.authorName
                                                                          })
                                                                      )
                                                              },
                                                              (0, o.Z)()
                                                          )
                                            })
                                        })
                                ]
                            }),
                            H.canAccess
                                ? (0, r.jsx)(u.zxk, {
                                      variant: 'primary',
                                      onClick: eu,
                                      text: H.ctaText
                                  })
                                : (0, r.jsx)(u.zxk, {
                                      onClick: eu,
                                      variant: 'primary',
                                      text: H.ctaText
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
