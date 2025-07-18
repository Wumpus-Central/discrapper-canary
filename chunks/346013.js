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
    h = n(1585),
    _ = n(841762),
    b = n(336197),
    E = n(406432),
    x = n(348238),
    C = n(38267),
    v = n(884902),
    y = n(670188),
    O = n(695346),
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
    k = n(70249),
    L = n(527455);
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
        { setPopout: W } = (0, C.Z)(B.id, Z.d$),
        K = (0, x.qo)(B, G, W, !0),
        Y = O.QK.useSetting(),
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
            var e;
            return [null != (e = null == en ? void 0 : en.colorString) ? e : 'inherit', null == en ? void 0 : en.colorStrings, null == en ? void 0 : en.colorRoleId];
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
            size: (0, h.y9)(d.EFr.SIZE_40),
            canAnimate: ec
        }),
        eg = null == (n = z.user) ? void 0 : n.getAvatarURL(z.guildId, 40, ec),
        eh = () => {
            es.enabled || eu((e) => !e);
        },
        e_ = z.coverImage,
        eb = null != e_ && (0, E.d$)(e_);
    return (0, r.jsxs)('div', {
        className: k.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: k.thumbnailContainer,
                onMouseEnter: ed,
                onMouseLeave: ep,
                children: [
                    !J &&
                        (!0 === z.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: L,
                                  alt: R.intl.string(R.t.rIbh8P),
                                  className: a()(k.thumbnail, { [k.spoiler]: z.shouldSpoiler }),
                                  onContextMenu: K,
                                  onError: () => $(!0)
                              })
                            : (0, r.jsx)(_.Z, {
                                  src: !(X && (Y || q)) && eb ? ''.concat(e_, '?format=png') : e_,
                                  backgroundSrc: ''.concat(e_, '?format=png'),
                                  alt: R.intl.string(R.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: a()(k.thumbnail, { [k.spoiler]: z.shouldSpoiler }),
                                  imageChildClassName: k.thumbnailImage,
                                  onContextMenu: K,
                                  onError: () => $(!0)
                              })),
                    null != z.coverImageOverlayText &&
                        (0, r.jsx)(d.P3F, {
                            onClick: em,
                            children: (0, r.jsx)('div', {
                                className: k.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: k.thumbnailOverlayCta,
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
                className: k.descriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: k.descriptionHeader,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-default',
                                className: k.descriptionHeaderText,
                                children: z.title
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: a()(k.descriptionHeaderText, k.descriptionSubtitle),
                                children: z.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: k.descriptionFooter,
                        children: [
                            null != z.authorId &&
                                null != eg &&
                                (0, r.jsx)(y.Z, {
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
                                            onMouseEnter: eh,
                                            onMouseLeave: eh,
                                            children: (0, r.jsx)(
                                                d.qEK,
                                                M(D({}, e), {
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
                                className: k.descriptionFooterContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: k.descriptionFooterChannelName,
                                        children: [
                                            null != z.channelName &&
                                                (0, r.jsx)(d.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: k.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(d.P3F, {
                                                onClick: em,
                                                className: k.channelName,
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
                                            className: k.descriptionFooterAuthorContainer,
                                            children: R.intl.format(R.t.voIDKS, {
                                                authorName: z.authorName,
                                                authorNameHook: () =>
                                                    null == z.authorId
                                                        ? (0, r.jsx)(d.rz2, {
                                                              name: z.authorName,
                                                              color: ei,
                                                              roleColors: eo,
                                                              className: k.authorName
                                                          })
                                                        : (0, r.jsx)(
                                                              y.Z,
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
                                                                          M(D({}, e), {
                                                                              ref: H,
                                                                              name: z.authorName,
                                                                              color: ei,
                                                                              roleColors: eo,
                                                                              className: k.authorName
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
                                      className: a()(k.__invalid_ctaButtonContent, k.subscribeButton),
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
