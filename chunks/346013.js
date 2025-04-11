n.d(t, { Z: () => M }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
    N = n(695346),
    O = n(271383),
    j = n(594174),
    C = n(768581),
    S = n(900849),
    I = n(506071),
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
    var t, n, a;
    let { embedUrl: M, message: W, channel: U } = e,
        F = (0, P.J)(M, W),
        { setPopout: B } = (0, y.Z)(W.id, w.d$),
        G = (0, x.qo)(W, U, B, !0),
        H = N.QK.useSetting(),
        V = (0, I.n)(),
        [z, K] = i.useState(!1),
        [Y, X] = i.useState((null == F ? void 0 : F.coverImage) == null),
        q = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
        Q = (0, c.e7)(
            [O.ZP, j.default],
            () => {
                var e;
                return O.ZP.isMember(null == F ? void 0 : F.guildId, null == (e = j.default.getCurrentUser()) ? void 0 : e.id);
            },
            [F]
        ),
        J = (0, c.e7)([O.ZP], () => ((null == F ? void 0 : F.authorId) != null ? O.ZP.getMember(F.guildId, F.authorId) : null)),
        $ = (0, f.Z)((null == J ? void 0 : J.avatarDecoration) != null ? (null == J ? void 0 : J.avatarDecoration) : null == F || null == (t = F.user) ? void 0 : t.avatarDecoration),
        [ee, et, en] = i.useMemo(() => {
            var e;
            return [null != (e = null == J ? void 0 : J.colorString) ? e : 'inherit', null == J ? void 0 : J.colorStrings, null == J ? void 0 : J.colorRoleId];
        }, [J]),
        er = (0, E.X)(null == J ? void 0 : J.guildId, et),
        { reducedMotion: ei } = i.useContext(u.Sfi),
        [ea, el] = i.useState(!1),
        eo = i.useCallback(() => {
            K(!0);
        }, [K]),
        es = i.useCallback(() => {
            K(!1);
        }, [K]),
        ec = i.useCallback(async () => {
            null != F &&
                ((0, m.yw)(A.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: F.threadId,
                    channel_id: U.id,
                    can_access: F.canAccess,
                    is_member: Q
                }),
                F.canAccess ? (0, _.Z)(A.Z5c.CHANNEL(F.guildId, F.threadId, F.messageId)) : Q ? (0, _.Z)(A.Z5c.CHANNEL(F.guildId, F.parentChannelId)) : await S.Ub(F.guildId, {}, { channelId: F.parentChannelId }));
        }, [F, U, Q]);
    if (null == F) return null;
    let eu = (0, C.NZ)({
            avatarDecoration: $,
            size: (0, h.y9)(u.EFr.SIZE_40),
            canAnimate: ea
        }),
        ed = null == (n = F.user) ? void 0 : n.getAvatarURL(F.guildId, 40, ea),
        ep = () => {
            ei.enabled || el((e) => !e);
        },
        em = F.coverImage,
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
                        (!0 === F.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: k,
                                  alt: Z.NW.string(Z.t.rIbh8P),
                                  className: l()(R.thumbnail, { [R.spoiler]: F.shouldSpoiler }),
                                  onContextMenu: G,
                                  onError: () => X(!0)
                              })
                            : (0, r.jsx)(g.Z, {
                                  src: !(V && (H || z)) && ef ? ''.concat(em, '?format=png') : em,
                                  backgroundSrc: ''.concat(em, '?format=png'),
                                  alt: Z.NW.string(Z.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: l()(R.thumbnail, { [R.spoiler]: F.shouldSpoiler }),
                                  imageChildClassName: R.thumbnailImage,
                                  onContextMenu: G,
                                  onError: () => X(!0)
                              })),
                    null != F.coverImageOverlayText &&
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
                                            children: F.coverImageOverlayText
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
                                children: F.title
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: l()(R.descriptionHeaderText, R.descriptionSubtitle),
                                children: F.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: R.descriptionFooter,
                        children: [
                            null != F.authorId &&
                                null != ed &&
                                (0, r.jsx)(v.Z, {
                                    userId: F.authorId,
                                    guildId: F.guildId,
                                    channelId: U.id,
                                    messageId: W.id,
                                    roleId: en,
                                    avatarUrl: F.avatarUrl,
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
                                                    'aria-label': Z.NW.string(Z.t.KXz3XF),
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
                                            null != F.channelName &&
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
                                                    children: null != (a = F.channelName) ? a : F.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != F.authorName &&
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: R.descriptionFooterAuthorContainer,
                                            children: Z.NW.format(Z.t.voIDKS, {
                                                authorName: F.authorName,
                                                authorNameHook: () =>
                                                    null == F.authorId
                                                        ? (0, r.jsx)(u.rz2, {
                                                              name: F.authorName,
                                                              color: ee,
                                                              roleColors: er,
                                                              className: R.authorName
                                                          })
                                                        : (0, r.jsx)(
                                                              v.Z,
                                                              {
                                                                  userId: F.authorId,
                                                                  guildId: F.guildId,
                                                                  channelId: U.id,
                                                                  messageId: W.id,
                                                                  roleId: en,
                                                                  avatarUrl: F.avatarUrl,
                                                                  newAnalyticsLocations: [p.Z.USERNAME],
                                                                  children: (e) =>
                                                                      (0, r.jsx)(
                                                                          u.rz2,
                                                                          L(D({}, e), {
                                                                              name: F.authorName,
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
                            F.canAccess
                                ? (0, r.jsx)(u.zxk, {
                                      color: u.Ttl.BRAND,
                                      onClick: ec,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: F.ctaText
                                      })
                                  })
                                : (0, r.jsx)(u.gtL, {
                                      pauseAnimation: q,
                                      onClick: ec,
                                      className: l()(R.__invalid_ctaButtonContent, R.subscribeButton),
                                      color: u.zxk.Colors.CUSTOM,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: F.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
