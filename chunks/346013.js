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
    g = n(676742),
    _ = n(1585),
    h = n(841762),
    b = n(336197),
    E = n(406432),
    C = n(348238),
    x = n(38267),
    v = n(884902),
    O = n(670188),
    y = n(695346),
    j = n(271383),
    I = n(594174),
    S = n(768581),
    T = n(900849),
    N = n(506071),
    P = n(495114),
    A = n(170140),
    w = n(981631),
    Z = n(959517),
    R = n(388032),
    L = n(70249),
    D = n(527455);
function k(e) {
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
function U(e) {
    var t, n, l, U;
    let { embedUrl: F, message: B, channel: G } = e,
        H = i.useRef(null),
        V = i.useRef(null),
        z = (0, A.J)(F, B),
        { setPopout: W } = (0, x.Z)(B.id, Z.d$),
        K = (0, C.qo)(B, G, W, !0),
        Y = y.QK.useSetting(),
        X = (0, N.n)(),
        [q, Q] = i.useState(!1),
        [J, $] = i.useState((null == z ? void 0 : z.coverImage) == null),
        ee = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        et = (0, c.e7)(
            [j.ZP, I.default],
            () => {
                var e;
                return j.ZP.isMember(null == z ? void 0 : z.guildId, null == (e = I.default.getCurrentUser()) ? void 0 : e.id);
            },
            [z]
        ),
        en = (0, c.e7)([j.ZP], () => ((null == z ? void 0 : z.authorId) != null ? j.ZP.getMember(z.guildId, z.authorId) : null)),
        er = (0, g.Z)((null == en ? void 0 : en.avatarDecoration) != null ? (null == en ? void 0 : en.avatarDecoration) : null == z || null == (t = z.user) ? void 0 : t.avatarDecoration),
        [ei, el, ea] = i.useMemo(() => {
            var e, t;
            return [null != (e = null == en ? void 0 : en.colorString) ? e : 'inherit', null != (t = null == en ? void 0 : en.colorStrings) ? t : null, null == en ? void 0 : en.colorRoleId];
        }, [en]),
        eo = (0, v.X7)(null == en ? void 0 : en.guildId, null != (l = null == z ? void 0 : z.authorId) ? l : void 0, el),
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
            size: (0, _.y9)(d.EFr.SIZE_40),
            canAnimate: ec
        }),
        eg = null == (n = z.user) ? void 0 : n.getAvatarURL(z.guildId, 40, ec),
        e_ = () => {
            es.enabled || eu((e) => !e);
        },
        eh = z.coverImage,
        eb = null != eh && (0, E.d$)(eh);
    return (0, r.jsxs)('div', {
        className: L.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: L.thumbnailContainer,
                onMouseEnter: ed,
                onMouseLeave: ep,
                children: [
                    !J &&
                        (!0 === z.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: D,
                                  alt: R.intl.string(R.t.rIbh8P),
                                  className: a()(L.thumbnail, { [L.spoiler]: z.shouldSpoiler }),
                                  onContextMenu: K,
                                  onError: () => $(!0)
                              })
                            : (0, r.jsx)(h.Z, {
                                  src: !(X && (Y || q)) && eb ? ''.concat(eh, '?format=png') : eh,
                                  backgroundSrc: ''.concat(eh, '?format=png'),
                                  alt: R.intl.string(R.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: a()(L.thumbnail, { [L.spoiler]: z.shouldSpoiler }),
                                  imageChildClassName: L.thumbnailImage,
                                  onContextMenu: K,
                                  onError: () => $(!0)
                              })),
                    null != z.coverImageOverlayText &&
                        (0, r.jsx)(d.P3F, {
                            onClick: em,
                            children: (0, r.jsx)('div', {
                                className: L.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: L.thumbnailOverlayCta,
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
                className: L.descriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: L.descriptionHeader,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-default',
                                className: L.descriptionHeaderText,
                                children: z.title
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: a()(L.descriptionHeaderText, L.descriptionSubtitle),
                                children: z.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: L.descriptionFooter,
                        children: [
                            null != z.authorId &&
                                null != eg &&
                                (0, r.jsx)(O.Z, {
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
                                            onMouseEnter: e_,
                                            onMouseLeave: e_,
                                            children: (0, r.jsx)(
                                                d.qEK,
                                                M(k({}, e), {
                                                    ref: V,
                                                    size: d.EFr.SIZE_40,
                                                    src: eg,
                                                    'aria-label': R.intl.string(R.t.KXz3XF),
                                                    avatarDecoration: ef
                                                })
                                            )
                                        })
                                }),
                            (0, r.jsxs)('div', {
                                className: L.descriptionFooterContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: L.descriptionFooterChannelName,
                                        children: [
                                            null != z.channelName &&
                                                (0, r.jsx)(d.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: L.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(d.P3F, {
                                                onClick: em,
                                                className: L.channelName,
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
                                            className: L.descriptionFooterAuthorContainer,
                                            children: R.intl.format(R.t.voIDKS, {
                                                authorName: z.authorName,
                                                authorNameHook: () =>
                                                    null == z.authorId
                                                        ? (0, r.jsx)(d.rz2, {
                                                              name: z.authorName,
                                                              colorString: ei,
                                                              colorStrings: eo,
                                                              className: L.authorName
                                                          })
                                                        : (0, r.jsx)(
                                                              O.Z,
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
                                                                          M(k({}, e), {
                                                                              ref: H,
                                                                              name: z.authorName,
                                                                              colorString: ei,
                                                                              colorStrings: eo,
                                                                              className: L.authorName
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
                                      className: a()(L.__invalid_ctaButtonContent, L.subscribeButton),
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
