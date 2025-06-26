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
    x = n(348238),
    y = n(38267),
    E = n(884902),
    v = n(670188),
    C = n(695346),
    O = n(271383),
    j = n(594174),
    S = n(768581),
    I = n(900849),
    T = n(506071),
    N = n(495114),
    P = n(170140),
    A = n(981631),
    w = n(959517),
    Z = n(388032),
    R = n(70249),
    k = n(527455);
function L(e) {
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
function D(e, t) {
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
    let { embedUrl: U, message: F, channel: B } = e,
        G = i.useRef(null),
        H = i.useRef(null),
        V = (0, P.J)(U, F),
        { setPopout: z } = (0, y.Z)(F.id, w.d$),
        W = (0, x.qo)(F, B, z, !0),
        K = C.QK.useSetting(),
        Y = (0, T.n)(),
        [q, X] = i.useState(!1),
        [Q, J] = i.useState((null == V ? void 0 : V.coverImage) == null),
        $ = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
        ee = (0, c.e7)(
            [O.ZP, j.default],
            () => {
                var e;
                return O.ZP.isMember(null == V ? void 0 : V.guildId, null == (e = j.default.getCurrentUser()) ? void 0 : e.id);
            },
            [V]
        ),
        et = (0, c.e7)([O.ZP], () => ((null == V ? void 0 : V.authorId) != null ? O.ZP.getMember(V.guildId, V.authorId) : null)),
        en = (0, f.Z)((null == et ? void 0 : et.avatarDecoration) != null ? (null == et ? void 0 : et.avatarDecoration) : null == V || null == (t = V.user) ? void 0 : t.avatarDecoration),
        [er, ei, el] = i.useMemo(() => {
            var e;
            return [null != (e = null == et ? void 0 : et.colorString) ? e : 'inherit', null == et ? void 0 : et.colorStrings, null == et ? void 0 : et.colorRoleId];
        }, [et]),
        ea = (0, E.X7)(null == et ? void 0 : et.guildId, null != (l = null == V ? void 0 : V.authorId) ? l : void 0, ei),
        { reducedMotion: eo } = i.useContext(u.Sfi),
        [es, ec] = i.useState(!1),
        eu = i.useCallback(() => {
            X(!0);
        }, [X]),
        ed = i.useCallback(() => {
            X(!1);
        }, [X]),
        ep = i.useCallback(async () => {
            null != V &&
                ((0, m.yw)(A.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: V.threadId,
                    channel_id: B.id,
                    can_access: V.canAccess,
                    is_member: ee
                }),
                V.canAccess ? (0, _.Z)(A.Z5c.CHANNEL(V.guildId, V.threadId, V.messageId)) : ee ? (0, _.Z)(A.Z5c.CHANNEL(V.guildId, V.parentChannelId)) : await I.Ub(V.guildId, {}, { channelId: V.parentChannelId }));
        }, [V, B, ee]);
    if (null == V) return null;
    let em = (0, S.NZ)({
            avatarDecoration: en,
            size: (0, h.y9)(u.EFr.SIZE_40),
            canAnimate: es
        }),
        ef = null == (n = V.user) ? void 0 : n.getAvatarURL(V.guildId, 40, es),
        eh = () => {
            eo.enabled || ec((e) => !e);
        },
        eg = V.coverImage,
        e_ = null != eg && (0, b.d$)(eg);
    return (0, r.jsxs)('div', {
        className: R.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: R.thumbnailContainer,
                onMouseEnter: eu,
                onMouseLeave: ed,
                children: [
                    !Q &&
                        (!0 === V.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: k,
                                  alt: Z.intl.string(Z.t.rIbh8P),
                                  className: a()(R.thumbnail, { [R.spoiler]: V.shouldSpoiler }),
                                  onContextMenu: W,
                                  onError: () => J(!0)
                              })
                            : (0, r.jsx)(g.Z, {
                                  src: !(Y && (K || q)) && e_ ? ''.concat(eg, '?format=png') : eg,
                                  backgroundSrc: ''.concat(eg, '?format=png'),
                                  alt: Z.intl.string(Z.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: a()(R.thumbnail, { [R.spoiler]: V.shouldSpoiler }),
                                  imageChildClassName: R.thumbnailImage,
                                  onContextMenu: W,
                                  onError: () => J(!0)
                              })),
                    null != V.coverImageOverlayText &&
                        (0, r.jsx)(u.P3F, {
                            onClick: ep,
                            children: (0, r.jsx)('div', {
                                className: R.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: R.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(N.Z, { color: s.Z.WHITE }),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: V.coverImageOverlayText
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
                                color: 'text-default',
                                className: R.descriptionHeaderText,
                                children: V.title
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: a()(R.descriptionHeaderText, R.descriptionSubtitle),
                                children: V.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: R.descriptionFooter,
                        children: [
                            null != V.authorId &&
                                null != ef &&
                                (0, r.jsx)(v.Z, {
                                    targetElementRef: H,
                                    userId: V.authorId,
                                    guildId: V.guildId,
                                    channelId: B.id,
                                    messageId: F.id,
                                    roleId: el,
                                    avatarUrl: V.avatarUrl,
                                    newAnalyticsLocations: [p.Z.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            onMouseEnter: eh,
                                            onMouseLeave: eh,
                                            children: (0, r.jsx)(
                                                u.qEK,
                                                D(L({}, e), {
                                                    ref: H,
                                                    size: u.EFr.SIZE_40,
                                                    src: ef,
                                                    'aria-label': Z.intl.string(Z.t.KXz3XF),
                                                    avatarDecoration: em
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
                                            null != V.channelName &&
                                                (0, r.jsx)(u.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: R.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(u.P3F, {
                                                onClick: ep,
                                                className: R.channelName,
                                                children: (0, r.jsx)(u.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null != (M = V.channelName) ? M : V.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != V.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: R.descriptionFooterAuthorContainer,
                                            children: Z.intl.format(Z.t.voIDKS, {
                                                authorName: V.authorName,
                                                authorNameHook: () =>
                                                    null == V.authorId
                                                        ? (0, r.jsx)(u.rz2, {
                                                              name: V.authorName,
                                                              color: er,
                                                              roleColors: ea,
                                                              className: R.authorName
                                                          })
                                                        : (0, r.jsx)(
                                                              v.Z,
                                                              {
                                                                  targetElementRef: G,
                                                                  userId: V.authorId,
                                                                  guildId: V.guildId,
                                                                  channelId: B.id,
                                                                  messageId: F.id,
                                                                  roleId: el,
                                                                  avatarUrl: V.avatarUrl,
                                                                  newAnalyticsLocations: [p.Z.USERNAME],
                                                                  children: (e) =>
                                                                      (0, r.jsx)(
                                                                          u.rz2,
                                                                          D(L({}, e), {
                                                                              ref: G,
                                                                              name: V.authorName,
                                                                              color: er,
                                                                              roleColors: ea,
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
                            V.canAccess
                                ? (0, r.jsx)(u.zxk, {
                                      color: u.Ttl.BRAND,
                                      onClick: ep,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: V.ctaText
                                      })
                                  })
                                : (0, r.jsx)(u.gtL, {
                                      pauseAnimation: $,
                                      onClick: ep,
                                      className: a()(R.__invalid_ctaButtonContent, R.subscribeButton),
                                      color: u.zxk.Colors.CUSTOM,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: V.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
