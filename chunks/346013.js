(n.d(t, { Z: () => U }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(772848),
    s = n(831209),
    c = n(399606),
    u = n(755721),
    d = n(481060),
    p = n(607070),
    m = n(100527),
    f = n(367907),
    _ = n(676742),
    g = n(1585),
    h = n(841762),
    b = n(336197),
    E = n(406432),
    C = n(348238),
    O = n(38267),
    y = n(884902),
    v = n(670188),
    x = n(695346),
    I = n(271383),
    j = n(594174),
    S = n(768581),
    T = n(900849),
    N = n(506071),
    P = n(495114),
    A = n(170140),
    w = n(981631),
    Z = n(959517),
    R = n(388032),
    D = n(70249),
    L = n(527455);
function M(e) {
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
function k(e, t) {
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
function U(e) {
    var t, n, l, U;
    let { embedUrl: F, message: B, channel: G } = e,
        H = i.useRef(null),
        V = i.useRef(null),
        z = (0, A.J)(F, B),
        { setPopout: W } = (0, O.Z)(B.id, Z.d$),
        K = (0, C.qo)(B, G, W, !0),
        Y = x.QK.useSetting(),
        X = (0, N.n)(),
        [q, Q] = i.useState(!1),
        [J, $] = i.useState((null == z ? void 0 : z.coverImage) == null),
        ee = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        et = (0, c.e7)(
            [I.ZP, j.default],
            () => {
                var e;
                return I.ZP.isMember(null == z ? void 0 : z.guildId, null == (e = j.default.getCurrentUser()) ? void 0 : e.id);
            },
            [z]
        ),
        en = (0, c.e7)([I.ZP], () => ((null == z ? void 0 : z.authorId) != null ? I.ZP.getMember(z.guildId, z.authorId) : null)),
        er = (0, _.Z)((null == en ? void 0 : en.avatarDecoration) != null ? (null == en ? void 0 : en.avatarDecoration) : null == z || null == (t = z.user) ? void 0 : t.avatarDecoration),
        [ei, el, ea] = i.useMemo(() => {
            var e, t;
            return [null != (e = null == en ? void 0 : en.colorString) ? e : 'inherit', null != (t = null == en ? void 0 : en.colorStrings) ? t : null, null == en ? void 0 : en.colorRoleId];
        }, [en]),
        eo = (0, y.X7)(null == en ? void 0 : en.guildId, null != (l = null == z ? void 0 : z.authorId) ? l : void 0, el),
        { reducedMotion: es } = i.useContext(d.Sfi),
        [ec, eu] = i.useState(!1),
        ed = i.useCallback(() => {
            Q(!0);
        }, [Q]),
        ep = i.useCallback(() => {
            Q(!1);
        }, [Q]),
        em = i.useCallback(async () => {
            null != z &&
                ((0, f.yw)(w.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: z.threadId,
                    channel_id: G.id,
                    can_access: z.canAccess,
                    is_member: et
                }),
                z.canAccess ? (0, b.Z)(w.Z5c.CHANNEL(z.guildId, z.threadId, z.messageId)) : et ? (0, b.Z)(w.Z5c.CHANNEL(z.guildId, z.parentChannelId)) : await T.Ub(z.guildId, {}, { channelId: z.parentChannelId }));
        }, [z, G, et]);
    if (null == z) return null;
    let ef = (0, S.NZ)({
            avatarDecoration: er,
            size: (0, g.y9)(d.EFr.SIZE_40),
            canAnimate: ec
        }),
        e_ = null == (n = z.user) ? void 0 : n.getAvatarURL(z.guildId, 40, ec),
        eg = () => {
            es.enabled || eu((e) => !e);
        },
        eh = z.coverImage,
        eb = null != eh && (0, E.d$)(eh);
    return (0, r.jsxs)('div', {
        className: D.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: D.thumbnailContainer,
                onMouseEnter: ed,
                onMouseLeave: ep,
                children: [
                    !J &&
                        (!0 === z.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: L,
                                  alt: R.intl.string(R.t.rIbh8P),
                                  className: a()(D.thumbnail, { [D.spoiler]: z.shouldSpoiler }),
                                  onContextMenu: K,
                                  onError: () => $(!0)
                              })
                            : (0, r.jsx)(h.Z, {
                                  src: !(X && (Y || q)) && eb ? ''.concat(eh, '?format=png') : eh,
                                  backgroundSrc: ''.concat(eh, '?format=png'),
                                  alt: R.intl.string(R.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: a()(D.thumbnail, { [D.spoiler]: z.shouldSpoiler }),
                                  imageChildClassName: D.thumbnailImage,
                                  onContextMenu: K,
                                  onError: () => $(!0)
                              })),
                    null != z.coverImageOverlayText &&
                        (0, r.jsx)(d.P3F, {
                            onClick: em,
                            children: (0, r.jsx)('div', {
                                className: D.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: D.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(P.Z, { color: s.Z.WHITE }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: z.coverImageOverlayText
                                        })
                                    ]
                                })
                            })
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: D.descriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.descriptionHeader,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-default',
                                className: D.descriptionHeaderText,
                                children: z.title
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: a()(D.descriptionHeaderText, D.descriptionSubtitle),
                                children: z.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: D.descriptionFooter,
                        children: [
                            null != z.authorId &&
                                null != e_ &&
                                (0, r.jsx)(v.Z, {
                                    targetElementRef: V,
                                    userId: z.authorId,
                                    guildId: z.guildId,
                                    channelId: G.id,
                                    messageId: B.id,
                                    roleId: ea,
                                    avatarUrl: z.avatarUrl,
                                    newAnalyticsLocations: [m.Z.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            onMouseEnter: eg,
                                            onMouseLeave: eg,
                                            children: (0, r.jsx)(
                                                d.qEK,
                                                k(M({}, e), {
                                                    ref: V,
                                                    size: d.EFr.SIZE_40,
                                                    src: e_,
                                                    'aria-label': R.intl.string(R.t.KXz3XF),
                                                    avatarDecoration: ef
                                                })
                                            )
                                        })
                                }),
                            (0, r.jsxs)('div', {
                                className: D.descriptionFooterContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: D.descriptionFooterChannelName,
                                        children: [
                                            null != z.channelName &&
                                                (0, r.jsx)(d.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: D.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(d.P3F, {
                                                onClick: em,
                                                className: D.channelName,
                                                children: (0, r.jsx)(d.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null != (U = z.channelName) ? U : z.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != z.authorName &&
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: D.descriptionFooterAuthorContainer,
                                            children: R.intl.format(R.t.voIDKS, {
                                                authorName: z.authorName,
                                                authorNameHook: () =>
                                                    null == z.authorId
                                                        ? (0, r.jsx)(d.rz2, {
                                                              name: z.authorName,
                                                              colorString: ei,
                                                              colorStrings: eo,
                                                              className: D.authorName
                                                          })
                                                        : (0, r.jsx)(
                                                              v.Z,
                                                              {
                                                                  targetElementRef: H,
                                                                  userId: z.authorId,
                                                                  guildId: z.guildId,
                                                                  channelId: G.id,
                                                                  messageId: B.id,
                                                                  roleId: ea,
                                                                  avatarUrl: z.avatarUrl,
                                                                  newAnalyticsLocations: [m.Z.USERNAME],
                                                                  children: (e) =>
                                                                      (0, r.jsx)(
                                                                          d.rz2,
                                                                          k(M({}, e), {
                                                                              ref: H,
                                                                              name: z.authorName,
                                                                              colorString: ei,
                                                                              colorStrings: eo,
                                                                              className: D.authorName
                                                                          })
                                                                      )
                                                              },
                                                              (0, o.Z)()
                                                          )
                                            })
                                        })
                                ]
                            }),
                            z.canAccess
                                ? (0, r.jsx)(u.zx, {
                                      color: u.Tt.BRAND,
                                      onClick: em,
                                      children: (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: z.ctaText
                                      })
                                  })
                                : (0, r.jsx)(d.gtL, {
                                      pauseAnimation: ee,
                                      onClick: em,
                                      className: a()(D.__invalid_ctaButtonContent, D.subscribeButton),
                                      color: u.zx.Colors.CUSTOM,
                                      children: (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: z.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
