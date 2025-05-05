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
        B = (0, P.J)(M, U),
        { setPopout: G } = (0, y.Z)(U.id, w.d$),
        H = (0, x.qo)(U, F, G, !0),
        V = O.QK.useSetting(),
        z = (0, N.n)(),
        [W, K] = i.useState(!1),
        [Y, X] = i.useState((null == B ? void 0 : B.coverImage) == null),
        q = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
        Q = (0, c.e7)(
            [j.ZP, C.default],
            () => {
                var e;
                return j.ZP.isMember(null == B ? void 0 : B.guildId, null == (e = C.default.getCurrentUser()) ? void 0 : e.id);
            },
            [B]
        ),
        J = (0, c.e7)([j.ZP], () => ((null == B ? void 0 : B.authorId) != null ? j.ZP.getMember(B.guildId, B.authorId) : null)),
        $ = (0, f.Z)((null == J ? void 0 : J.avatarDecoration) != null ? (null == J ? void 0 : J.avatarDecoration) : null == B || null == (t = B.user) ? void 0 : t.avatarDecoration),
        [ee, et, en] = i.useMemo(() => {
            var e;
            return [null != (e = null == J ? void 0 : J.colorString) ? e : 'inherit', null == J ? void 0 : J.colorStrings, null == J ? void 0 : J.colorRoleId];
        }, [J]),
        er = (0, E.X)(null == J ? void 0 : J.guildId, et),
        { reducedMotion: ei } = i.useContext(u.Sfi),
        [el, ea] = i.useState(!1),
        eo = i.useCallback(() => {
            K(!0);
        }, [K]),
        es = i.useCallback(() => {
            K(!1);
        }, [K]),
        ec = i.useCallback(async () => {
            null != B &&
                ((0, m.yw)(A.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: B.threadId,
                    channel_id: F.id,
                    can_access: B.canAccess,
                    is_member: Q
                }),
                B.canAccess ? (0, _.Z)(A.Z5c.CHANNEL(B.guildId, B.threadId, B.messageId)) : Q ? (0, _.Z)(A.Z5c.CHANNEL(B.guildId, B.parentChannelId)) : await I.Ub(B.guildId, {}, { channelId: B.parentChannelId }));
        }, [B, F, Q]);
    if (null == B) return null;
    let eu = (0, S.NZ)({
            avatarDecoration: $,
            size: (0, h.y9)(u.EFr.SIZE_40),
            canAnimate: el
        }),
        ed = null == (n = B.user) ? void 0 : n.getAvatarURL(B.guildId, 40, el),
        ep = () => {
            ei.enabled || ea((e) => !e);
        },
        em = B.coverImage,
        ef = null != em && (0, b.d$)(em);
    return (0, r.jsxs)('div', {
        className: R.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: R.thumbnailContainer,
                onMouseEnter: eo,
                onMouseLeave: es,
                children: [
                    !Y &&
                        (!0 === B.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: k,
                                  alt: Z.intl.string(Z.t.rIbh8P),
                                  className: a()(R.thumbnail, { [R.spoiler]: B.shouldSpoiler }),
                                  onContextMenu: H,
                                  onError: () => X(!0)
                              })
                            : (0, r.jsx)(g.Z, {
                                  src: !(z && (V || W)) && ef ? ''.concat(em, '?format=png') : em,
                                  backgroundSrc: ''.concat(em, '?format=png'),
                                  alt: Z.intl.string(Z.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: a()(R.thumbnail, { [R.spoiler]: B.shouldSpoiler }),
                                  imageChildClassName: R.thumbnailImage,
                                  onContextMenu: H,
                                  onError: () => X(!0)
                              })),
                    null != B.coverImageOverlayText &&
                        (0, r.jsx)(u.P3F, {
                            onClick: ec,
                            children: (0, r.jsx)('div', {
                                className: R.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: R.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(T.Z, { color: s.Z.WHITE }),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: B.coverImageOverlayText
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
                                children: B.title
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: a()(R.descriptionHeaderText, R.descriptionSubtitle),
                                children: B.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: R.descriptionFooter,
                        children: [
                            null != B.authorId &&
                                null != ed &&
                                (0, r.jsx)(v.Z, {
                                    userId: B.authorId,
                                    guildId: B.guildId,
                                    channelId: F.id,
                                    messageId: U.id,
                                    roleId: en,
                                    avatarUrl: B.avatarUrl,
                                    newAnalyticsLocations: [p.Z.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            onMouseEnter: ep,
                                            onMouseLeave: ep,
                                            children: (0, r.jsx)(
                                                u.qEK,
                                                L(D({}, e), {
                                                    size: u.EFr.SIZE_40,
                                                    src: ed,
                                                    'aria-label': Z.intl.string(Z.t.KXz3XF),
                                                    avatarDecoration: eu
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
                                            null != B.channelName &&
                                                (0, r.jsx)(u.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: R.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(u.P3F, {
                                                onClick: ec,
                                                className: R.channelName,
                                                children: (0, r.jsx)(u.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null != (l = B.channelName) ? l : B.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != B.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: R.descriptionFooterAuthorContainer,
                                            children: Z.intl.format(Z.t.voIDKS, {
                                                authorName: B.authorName,
                                                authorNameHook: () =>
                                                    null == B.authorId
                                                        ? (0, r.jsx)(u.rz2, {
                                                              name: B.authorName,
                                                              color: ee,
                                                              roleColors: er,
                                                              className: R.authorName
                                                          })
                                                        : (0, r.jsx)(
                                                              v.Z,
                                                              {
                                                                  userId: B.authorId,
                                                                  guildId: B.guildId,
                                                                  channelId: F.id,
                                                                  messageId: U.id,
                                                                  roleId: en,
                                                                  avatarUrl: B.avatarUrl,
                                                                  newAnalyticsLocations: [p.Z.USERNAME],
                                                                  children: (e) =>
                                                                      (0, r.jsx)(
                                                                          u.rz2,
                                                                          L(D({}, e), {
                                                                              name: B.authorName,
                                                                              color: ee,
                                                                              roleColors: er,
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
                            B.canAccess
                                ? (0, r.jsx)(u.zxk, {
                                      color: u.Ttl.BRAND,
                                      onClick: ec,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: B.ctaText
                                      })
                                  })
                                : (0, r.jsx)(u.gtL, {
                                      pauseAnimation: q,
                                      onClick: ec,
                                      className: a()(R.__invalid_ctaButtonContent, R.subscribeButton),
                                      color: u.zxk.Colors.CUSTOM,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: B.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
