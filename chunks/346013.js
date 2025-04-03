n.d(t, { Z: () => U }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(772848),
    u = n(831209),
    d = n(399606),
    p = n(481060),
    m = n(607070),
    f = n(100527),
    h = n(367907),
    g = n(676742),
    _ = n(1585),
    b = n(841762),
    x = n(336197),
    y = n(406432),
    E = n(348238),
    v = n(38267),
    O = n(184301),
    N = n(347475),
    j = n(695346),
    C = n(271383),
    I = n(594174),
    S = n(768581),
    T = n(900849),
    P = n(506071),
    A = n(495114),
    w = n(170140),
    Z = n(981631),
    k = n(959517),
    R = n(388032),
    D = n(70249),
    L = n(527455);
function M(e) {
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
function W(e, t) {
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
    var t, n, a;
    let { embedUrl: o, message: U, channel: F } = e,
        B = (0, w.J)(o, U),
        { setPopout: G } = (0, v.Z)(U.id, k.d$),
        H = (0, E.qo)(U, F, G, !0),
        V = j.QK.useSetting(),
        z = (0, P.n)(),
        [K, Y] = i.useState(!1),
        [X, q] = i.useState((null == B ? void 0 : B.coverImage) == null),
        Q = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        J = (0, d.e7)(
            [C.ZP, I.default],
            () => {
                var e;
                return C.ZP.isMember(null == B ? void 0 : B.guildId, null == (e = I.default.getCurrentUser()) ? void 0 : e.id);
            },
            [B]
        ),
        $ = (0, d.e7)([C.ZP], () => ((null == B ? void 0 : B.authorId) != null ? C.ZP.getMember(B.guildId, B.authorId) : null)),
        ee = (0, g.Z)((null == $ ? void 0 : $.avatarDecoration) != null ? (null == $ ? void 0 : $.avatarDecoration) : null == B || null == (t = B.user) ? void 0 : t.avatarDecoration),
        [et, en] = i.useMemo(() => {
            var e;
            return [null != (e = null == $ ? void 0 : $.colorString) ? e : 'inherit', null == $ ? void 0 : $.colorRoleId];
        }, [$]),
        { reducedMotion: er } = i.useContext(p.Sfi),
        [ei, ea] = i.useState(!1),
        el = i.useCallback(() => {
            Y(!0);
        }, [Y]),
        eo = i.useCallback(() => {
            Y(!1);
        }, [Y]),
        es = i.useCallback(async () => {
            null != B &&
                ((0, h.yw)(Z.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: B.threadId,
                    channel_id: F.id,
                    can_access: B.canAccess,
                    is_member: J
                }),
                B.canAccess ? (0, x.Z)(Z.Z5c.CHANNEL(B.guildId, B.threadId, B.messageId)) : J ? (0, x.Z)(Z.Z5c.CHANNEL(B.guildId, B.parentChannelId)) : await T.Ub(B.guildId, {}, { channelId: B.parentChannelId }));
        }, [B, F, J]),
        ec = i.useCallback(
            () => (
                s()((null == B ? void 0 : B.authorId) != null, 'Author Id cannot be null when loading user profile'),
                (0, O.Z)(B.authorId, B.avatarUrl, {
                    guildId: B.guildId,
                    channelId: F.id
                })
            ),
            [B, F]
        );
    if (null == B) return null;
    let eu = (e, t) => (
            s()(null != B.authorId, 'Author Id cannot be null when rendering user popout'),
            (0, r.jsx)(
                N.Z,
                W(M({}, e), {
                    userId: B.authorId,
                    guildId: B.guildId,
                    channelId: F.id,
                    messageId: U.id,
                    roleId: en,
                    newAnalyticsLocations: t
                })
            )
        ),
        ed = (0, S.NZ)({
            avatarDecoration: ee,
            size: (0, _.y9)(p.EFr.SIZE_40),
            canAnimate: ei
        }),
        ep = null == (n = B.user) ? void 0 : n.getAvatarURL(B.guildId, 40, ei),
        em = () => {
            er.enabled || ea((e) => !e);
        },
        ef = B.coverImage,
        eh = null != ef && (0, y.d$)(ef);
    return (0, r.jsxs)('div', {
        className: D.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: D.thumbnailContainer,
                onMouseEnter: el,
                onMouseLeave: eo,
                children: [
                    !X &&
                        (!0 === B.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: L,
                                  alt: R.NW.string(R.t.rIbh8P),
                                  className: l()(D.thumbnail, { [D.spoiler]: B.shouldSpoiler }),
                                  onContextMenu: H,
                                  onError: () => q(!0)
                              })
                            : (0, r.jsx)(b.Z, {
                                  src: !(z && (V || K)) && eh ? ''.concat(ef, '?format=png') : ef,
                                  backgroundSrc: ''.concat(ef, '?format=png'),
                                  alt: R.NW.string(R.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: l()(D.thumbnail, { [D.spoiler]: B.shouldSpoiler }),
                                  imageChildClassName: D.thumbnailImage,
                                  onContextMenu: H,
                                  onError: () => q(!0)
                              })),
                    null != B.coverImageOverlayText &&
                        (0, r.jsx)(p.P3F, {
                            onClick: es,
                            children: (0, r.jsx)('div', {
                                className: D.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: D.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(A.Z, { color: u.Z.WHITE }),
                                        (0, r.jsx)(p.Text, {
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
                className: D.descriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.descriptionHeader,
                        children: [
                            (0, r.jsx)(p.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-normal',
                                className: D.descriptionHeaderText,
                                children: B.title
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: l()(D.descriptionHeaderText, D.descriptionSubtitle),
                                children: B.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: D.descriptionFooter,
                        children: [
                            null != ep &&
                                (0, r.jsx)(p.yRy, {
                                    renderPopout: (e) => eu(e, [f.Z.AVATAR]),
                                    position: 'right',
                                    spacing: 12,
                                    preload: null == B.authorId ? void 0 : ec,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            onMouseEnter: em,
                                            onMouseLeave: em,
                                            children: (0, r.jsx)(
                                                p.qEK,
                                                W(M({}, e), {
                                                    size: p.EFr.SIZE_40,
                                                    src: ep,
                                                    'aria-label': R.NW.string(R.t.KXz3XF),
                                                    avatarDecoration: ed
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
                                            null != B.channelName &&
                                                (0, r.jsx)(p.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: D.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(p.P3F, {
                                                onClick: es,
                                                className: D.channelName,
                                                children: (0, r.jsx)(p.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null != (a = B.channelName) ? a : B.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != B.authorName &&
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: D.descriptionFooterAuthorContainer,
                                            children: R.NW.format(R.t.voIDKS, {
                                                authorName: B.authorName,
                                                authorNameHook: () =>
                                                    (0, r.jsx)(
                                                        p.yRy,
                                                        {
                                                            renderPopout: (e) => eu(e, [f.Z.USERNAME]),
                                                            position: 'right',
                                                            preload: null == B.authorId ? void 0 : ec,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    p.rz2,
                                                                    W(M({}, e), {
                                                                        name: B.authorName,
                                                                        color: et,
                                                                        className: D.authorName
                                                                    })
                                                                )
                                                        },
                                                        (0, c.Z)()
                                                    )
                                            })
                                        })
                                ]
                            }),
                            B.canAccess
                                ? (0, r.jsx)(p.zxk, {
                                      color: p.Ttl.BRAND,
                                      onClick: es,
                                      children: (0, r.jsx)(p.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: B.ctaText
                                      })
                                  })
                                : (0, r.jsx)(p.gtL, {
                                      pauseAnimation: Q,
                                      onClick: es,
                                      className: l()(D.__invalid_ctaButtonContent, D.subscribeButton),
                                      color: p.zxk.Colors.CUSTOM,
                                      children: (0, r.jsx)(p.Text, {
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
