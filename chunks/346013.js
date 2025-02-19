n.d(t, { Z: () => F }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(512722),
    s = n.n(l),
    c = n(772848),
    d = n(831209),
    u = n(399606),
    p = n(481060),
    m = n(607070),
    f = n(100527),
    h = n(367907),
    g = n(676742),
    _ = n(1585),
    b = n(841762),
    v = n(336197),
    y = n(406432),
    x = n(348238),
    O = n(38267),
    E = n(184301),
    j = n(347475),
    N = n(695346),
    C = n(271383),
    I = n(594174),
    S = n(768581),
    P = n(900849),
    T = n(506071),
    A = n(495114),
    w = n(170140),
    Z = n(981631),
    k = n(959517),
    R = n(388032),
    L = n(351765),
    D = n(527455);
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
function F(e) {
    var t, n, a;
    let { embedUrl: l, message: F, channel: U } = e,
        B = (0, w.J)(l, F),
        { setPopout: G } = (0, O.Z)(F.id, k.d$),
        H = (0, x.qo)(F, U, G, !0),
        V = N.QK.useSetting(),
        z = (0, T.n)(),
        [K, Y] = i.useState(!1),
        [X, q] = i.useState((null == B ? void 0 : B.coverImage) == null),
        Q = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
        J = (0, u.e7)(
            [C.ZP, I.default],
            () => {
                var e;
                return C.ZP.isMember(null == B ? void 0 : B.guildId, null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
            },
            [B]
        ),
        $ = (0, u.e7)([C.ZP], () => ((null == B ? void 0 : B.authorId) != null ? C.ZP.getMember(B.guildId, B.authorId) : null)),
        ee = (0, g.Z)((null == $ ? void 0 : $.avatarDecoration) != null ? (null == $ ? void 0 : $.avatarDecoration) : null == B ? void 0 : null === (t = B.user) || void 0 === t ? void 0 : t.avatarDecoration),
        [et, en] = i.useMemo(() => {
            var e;
            return [null !== (e = null == $ ? void 0 : $.colorString) && void 0 !== e ? e : 'inherit', null == $ ? void 0 : $.colorRoleId];
        }, [$]),
        { reducedMotion: er } = i.useContext(p.Sfi),
        [ei, ea] = i.useState(!1),
        eo = i.useCallback(() => {
            Y(!0);
        }, [Y]),
        el = i.useCallback(() => {
            Y(!1);
        }, [Y]),
        es = i.useCallback(async () => {
            null != B &&
                ((0, h.yw)(Z.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: B.threadId,
                    channel_id: U.id,
                    can_access: B.canAccess,
                    is_member: J
                }),
                B.canAccess ? (0, v.Z)(Z.Z5c.CHANNEL(B.guildId, B.threadId, B.messageId)) : J ? (0, v.Z)(Z.Z5c.CHANNEL(B.guildId, B.parentChannelId)) : await P.Ub(B.guildId, {}, { channelId: B.parentChannelId }));
        }, [B, U, J]),
        ec = i.useCallback(
            () => (
                s()((null == B ? void 0 : B.authorId) != null, 'Author Id cannot be null when loading user profile'),
                (0, E.Z)(B.authorId, B.avatarUrl, {
                    guildId: B.guildId,
                    channelId: U.id
                })
            ),
            [B, U]
        );
    if (null == B) return null;
    let ed = (e, t) => (
            s()(null != B.authorId, 'Author Id cannot be null when rendering user popout'),
            (0, r.jsx)(
                j.Z,
                W(M({}, e), {
                    userId: B.authorId,
                    guildId: B.guildId,
                    channelId: U.id,
                    messageId: F.id,
                    roleId: en,
                    newAnalyticsLocations: t
                })
            )
        ),
        eu = (0, S.NZ)({
            avatarDecoration: ee,
            size: (0, _.y9)(p.EFr.SIZE_40),
            canAnimate: ei
        }),
        ep = null === (n = B.user) || void 0 === n ? void 0 : n.getAvatarURL(B.guildId, 40, ei),
        em = () => {
            !er.enabled && ea((e) => !e);
        },
        ef = B.coverImage,
        eh = null != ef && (0, y.d$)(ef);
    return (0, r.jsxs)('div', {
        className: L.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: L.thumbnailContainer,
                onMouseEnter: eo,
                onMouseLeave: el,
                children: [
                    !X &&
                        (!0 === B.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: D,
                                  alt: R.NW.string(R.t.rIbh8P),
                                  className: o()(L.thumbnail, { [L.spoiler]: B.shouldSpoiler }),
                                  onContextMenu: H,
                                  onError: () => q(!0)
                              })
                            : (0, r.jsx)(b.Z, {
                                  src: !(z && (V || K)) && eh ? ''.concat(ef, '?format=png') : ef,
                                  backgroundSrc: ''.concat(ef, '?format=png'),
                                  alt: R.NW.string(R.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: o()(L.thumbnail, { [L.spoiler]: B.shouldSpoiler }),
                                  imageChildClassName: L.thumbnailImage,
                                  onContextMenu: H,
                                  onError: () => q(!0)
                              })),
                    null != B.coverImageOverlayText &&
                        (0, r.jsx)(p.P3F, {
                            onClick: es,
                            children: (0, r.jsx)('div', {
                                className: L.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: L.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(A.Z, { color: d.Z.WHITE }),
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
                className: L.descriptionContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: L.descriptionHeader,
                        children: [
                            (0, r.jsx)(p.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-normal',
                                className: L.descriptionHeaderText,
                                children: B.title
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: o()(L.descriptionHeaderText, L.descriptionSubtitle),
                                children: B.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: L.descriptionFooter,
                        children: [
                            null != ep &&
                                (0, r.jsx)(p.yRy, {
                                    renderPopout: (e) => ed(e, [f.Z.AVATAR]),
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
                                                    avatarDecoration: eu
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
                                            null != B.channelName &&
                                                (0, r.jsx)(p.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: L.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(p.P3F, {
                                                onClick: es,
                                                className: L.channelName,
                                                children: (0, r.jsx)(p.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null !== (a = B.channelName) && void 0 !== a ? a : B.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != B.authorName &&
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: L.descriptionFooterAuthorContainer,
                                            children: R.NW.format(R.t.voIDKS, {
                                                authorName: B.authorName,
                                                authorNameHook: () =>
                                                    (0, r.jsx)(
                                                        p.yRy,
                                                        {
                                                            renderPopout: (e) => ed(e, [f.Z.USERNAME]),
                                                            position: 'right',
                                                            preload: null == B.authorId ? void 0 : ec,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    p.rz2,
                                                                    W(M({}, e), {
                                                                        name: B.authorName,
                                                                        color: et,
                                                                        className: L.authorName
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
                                      className: o()(L.__invalid_ctaButtonContent, L.subscribeButton),
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
