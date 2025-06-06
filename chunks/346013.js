n.d(t, { Z: () => M }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(772848),
    s = n(831209),
    c = n(399606),
    u = n(481060),
    d = n(607070),
    p = n(100527),
    m = n(367907),
    f = n(676742),
    h = n(1585),
    g = n(841762),
    _ = n(336197),
    b = n(406432),
    E = n(348238),
    x = n(38267),
    y = n(884902),
    v = n(670188),
    O = n(695346),
    j = n(271383),
    C = n(594174),
    S = n(768581),
    I = n(900849),
    N = n(506071),
    T = n(495114),
    P = n(170140),
    A = n(981631),
    w = n(959517),
    Z = n(388032),
    R = n(70249),
    k = n(527455);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
    var t, n, l;
    let { embedUrl: M, message: U, channel: F } = e,
        B = i.useRef(null),
        G = i.useRef(null),
        H = (0, P.J)(M, U),
        { setPopout: V } = (0, x.Z)(U.id, w.d$),
        z = (0, E.qo)(U, F, V, !0),
        W = O.QK.useSetting(),
        K = (0, N.n)(),
        [Y, X] = i.useState(!1),
        [q, Q] = i.useState((null == H ? void 0 : H.coverImage) == null),
        J = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
        $ = (0, c.e7)(
            [j.ZP, C.default],
            () => {
                var e;
                return j.ZP.isMember(null == H ? void 0 : H.guildId, null == (e = C.default.getCurrentUser()) ? void 0 : e.id);
            },
            [H]
        ),
        ee = (0, c.e7)([j.ZP], () => ((null == H ? void 0 : H.authorId) != null ? j.ZP.getMember(H.guildId, H.authorId) : null)),
        et = (0, f.Z)((null == ee ? void 0 : ee.avatarDecoration) != null ? (null == ee ? void 0 : ee.avatarDecoration) : null == H || null == (t = H.user) ? void 0 : t.avatarDecoration),
        [en, er, ei] = i.useMemo(() => {
            var e;
            return [null != (e = null == ee ? void 0 : ee.colorString) ? e : 'inherit', null == ee ? void 0 : ee.colorStrings, null == ee ? void 0 : ee.colorRoleId];
        }, [ee]),
        el = (0, y.X)(null == ee ? void 0 : ee.guildId, er),
        { reducedMotion: ea } = i.useContext(u.Sfi),
        [eo, es] = i.useState(!1),
        ec = i.useCallback(() => {
            X(!0);
        }, [X]),
        eu = i.useCallback(() => {
            X(!1);
        }, [X]),
        ed = i.useCallback(async () => {
            null != H &&
                ((0, m.yw)(A.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: H.threadId,
                    channel_id: F.id,
                    can_access: H.canAccess,
                    is_member: $
                }),
                H.canAccess ? (0, _.Z)(A.Z5c.CHANNEL(H.guildId, H.threadId, H.messageId)) : $ ? (0, _.Z)(A.Z5c.CHANNEL(H.guildId, H.parentChannelId)) : await I.Ub(H.guildId, {}, { channelId: H.parentChannelId }));
        }, [H, F, $]);
    if (null == H) return null;
    let ep = (0, S.NZ)({
            avatarDecoration: et,
            size: (0, h.y9)(u.EFr.SIZE_40),
            canAnimate: eo
        }),
        em = null == (n = H.user) ? void 0 : n.getAvatarURL(H.guildId, 40, eo),
        ef = () => {
            ea.enabled || es((e) => !e);
        },
        eh = H.coverImage,
        eg = null != eh && (0, b.d$)(eh);
    return (0, r.jsxs)('div', {
        className: R.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: R.thumbnailContainer,
                onMouseEnter: ec,
                onMouseLeave: eu,
                children: [
                    !q &&
                        (!0 === H.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: k,
                                  alt: Z.intl.string(Z.t.rIbh8P),
                                  className: a()(R.thumbnail, { [R.spoiler]: H.shouldSpoiler }),
                                  onContextMenu: z,
                                  onError: () => Q(!0)
                              })
                            : (0, r.jsx)(g.Z, {
                                  src: !(K && (W || Y)) && eg ? ''.concat(eh, '?format=png') : eh,
                                  backgroundSrc: ''.concat(eh, '?format=png'),
                                  alt: Z.intl.string(Z.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: a()(R.thumbnail, { [R.spoiler]: H.shouldSpoiler }),
                                  imageChildClassName: R.thumbnailImage,
                                  onContextMenu: z,
                                  onError: () => Q(!0)
                              })),
                    null != H.coverImageOverlayText &&
                        (0, r.jsx)(u.P3F, {
                            onClick: ed,
                            children: (0, r.jsx)('div', {
                                className: R.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: R.thumbnailOverlayCta,
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
                className: R.descriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.descriptionHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-normal',
                                className: R.descriptionHeaderText,
                                children: H.title
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: a()(R.descriptionHeaderText, R.descriptionSubtitle),
                                children: H.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: R.descriptionFooter,
                        children: [
                            null != H.authorId &&
                                null != em &&
                                (0, r.jsx)(v.Z, {
                                    targetElementRef: G,
                                    userId: H.authorId,
                                    guildId: H.guildId,
                                    channelId: F.id,
                                    messageId: U.id,
                                    roleId: ei,
                                    avatarUrl: H.avatarUrl,
                                    newAnalyticsLocations: [p.Z.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            onMouseEnter: ef,
                                            onMouseLeave: ef,
                                            children: (0, r.jsx)(
                                                u.qEK,
                                                L(D({}, e), {
                                                    ref: G,
                                                    size: u.EFr.SIZE_40,
                                                    src: em,
                                                    'aria-label': Z.intl.string(Z.t.KXz3XF),
                                                    avatarDecoration: ep
                                                })
                                            )
                                        })
                                }),
                            (0, r.jsxs)('div', {
                                className: R.descriptionFooterContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: R.descriptionFooterChannelName,
                                        children: [
                                            null != H.channelName &&
                                                (0, r.jsx)(u.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: R.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(u.P3F, {
                                                onClick: ed,
                                                className: R.channelName,
                                                children: (0, r.jsx)(u.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null != (l = H.channelName) ? l : H.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != H.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: R.descriptionFooterAuthorContainer,
                                            children: Z.intl.format(Z.t.voIDKS, {
                                                authorName: H.authorName,
                                                authorNameHook: () =>
                                                    null == H.authorId
                                                        ? (0, r.jsx)(u.rz2, {
                                                              name: H.authorName,
                                                              color: en,
                                                              roleColors: el,
                                                              className: R.authorName
                                                          })
                                                        : (0, r.jsx)(
                                                              v.Z,
                                                              {
                                                                  targetElementRef: B,
                                                                  userId: H.authorId,
                                                                  guildId: H.guildId,
                                                                  channelId: F.id,
                                                                  messageId: U.id,
                                                                  roleId: ei,
                                                                  avatarUrl: H.avatarUrl,
                                                                  newAnalyticsLocations: [p.Z.USERNAME],
                                                                  children: (e) =>
                                                                      (0, r.jsx)(
                                                                          u.rz2,
                                                                          L(D({}, e), {
                                                                              ref: B,
                                                                              name: H.authorName,
                                                                              color: en,
                                                                              roleColors: el,
                                                                              className: R.authorName
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
                                      color: u.Ttl.BRAND,
                                      onClick: ed,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: H.ctaText
                                      })
                                  })
                                : (0, r.jsx)(u.gtL, {
                                      pauseAnimation: J,
                                      onClick: ed,
                                      className: a()(R.__invalid_ctaButtonContent, R.subscribeButton),
                                      color: u.zxk.Colors.CUSTOM,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: H.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
