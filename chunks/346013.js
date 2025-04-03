n.d(t, { Z: () => F }), n(47120);
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
    v = n(348238),
    E = n(38267),
    O = n(884902),
    N = n(184301),
    j = n(347475),
    C = n(695346),
    I = n(271383),
    S = n(594174),
    T = n(768581),
    P = n(900849),
    A = n(506071),
    w = n(495114),
    Z = n(170140),
    k = n(981631),
    R = n(959517),
    D = n(388032),
    L = n(70249),
    M = n(527455);
function W(e) {
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
function U(e, t) {
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
    let { embedUrl: o, message: F, channel: B } = e,
        G = (0, Z.J)(o, F),
        { setPopout: H } = (0, E.Z)(F.id, R.d$),
        V = (0, v.qo)(F, B, H, !0),
        z = C.QK.useSetting(),
        K = (0, A.n)(),
        [Y, X] = i.useState(!1),
        [q, Q] = i.useState((null == G ? void 0 : G.coverImage) == null),
        J = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        $ = (0, d.e7)(
            [I.ZP, S.default],
            () => {
                var e;
                return I.ZP.isMember(null == G ? void 0 : G.guildId, null == (e = S.default.getCurrentUser()) ? void 0 : e.id);
            },
            [G]
        ),
        ee = (0, d.e7)([I.ZP], () => ((null == G ? void 0 : G.authorId) != null ? I.ZP.getMember(G.guildId, G.authorId) : null)),
        et = (0, g.Z)((null == ee ? void 0 : ee.avatarDecoration) != null ? (null == ee ? void 0 : ee.avatarDecoration) : null == G || null == (t = G.user) ? void 0 : t.avatarDecoration),
        [en, er, ei] = i.useMemo(() => {
            var e;
            return [null != (e = null == ee ? void 0 : ee.colorString) ? e : 'inherit', null == ee ? void 0 : ee.colorStrings, null == ee ? void 0 : ee.colorRoleId];
        }, [ee]),
        ea = (0, O.E)(null == ee ? void 0 : ee.guildId, er),
        { reducedMotion: el } = i.useContext(p.Sfi),
        [eo, es] = i.useState(!1),
        ec = i.useCallback(() => {
            X(!0);
        }, [X]),
        eu = i.useCallback(() => {
            X(!1);
        }, [X]),
        ed = i.useCallback(async () => {
            null != G &&
                ((0, h.yw)(k.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: G.threadId,
                    channel_id: B.id,
                    can_access: G.canAccess,
                    is_member: $
                }),
                G.canAccess ? (0, x.Z)(k.Z5c.CHANNEL(G.guildId, G.threadId, G.messageId)) : $ ? (0, x.Z)(k.Z5c.CHANNEL(G.guildId, G.parentChannelId)) : await P.Ub(G.guildId, {}, { channelId: G.parentChannelId }));
        }, [G, B, $]),
        ep = i.useCallback(
            () => (
                s()((null == G ? void 0 : G.authorId) != null, 'Author Id cannot be null when loading user profile'),
                (0, N.Z)(G.authorId, G.avatarUrl, {
                    guildId: G.guildId,
                    channelId: B.id
                })
            ),
            [G, B]
        );
    if (null == G) return null;
    let em = (e, t) => (
            s()(null != G.authorId, 'Author Id cannot be null when rendering user popout'),
            (0, r.jsx)(
                j.Z,
                U(W({}, e), {
                    userId: G.authorId,
                    guildId: G.guildId,
                    channelId: B.id,
                    messageId: F.id,
                    roleId: ei,
                    newAnalyticsLocations: t
                })
            )
        ),
        ef = (0, T.NZ)({
            avatarDecoration: et,
            size: (0, _.y9)(p.EFr.SIZE_40),
            canAnimate: eo
        }),
        eh = null == (n = G.user) ? void 0 : n.getAvatarURL(G.guildId, 40, eo),
        eg = () => {
            el.enabled || es((e) => !e);
        },
        e_ = G.coverImage,
        eb = null != e_ && (0, y.d$)(e_);
    return (0, r.jsxs)('div', {
        className: L.postPreviewContainer,
        children: [
            (0, r.jsxs)('div', {
                className: L.thumbnailContainer,
                onMouseEnter: ec,
                onMouseLeave: eu,
                children: [
                    !q &&
                        (!0 === G.shouldShowBlurredThumbnailImage
                            ? (0, r.jsx)('img', {
                                  src: M,
                                  alt: D.NW.string(D.t.rIbh8P),
                                  className: l()(L.thumbnail, { [L.spoiler]: G.shouldSpoiler }),
                                  onContextMenu: V,
                                  onError: () => Q(!0)
                              })
                            : (0, r.jsx)(b.Z, {
                                  src: !(K && (z || Y)) && eb ? ''.concat(e_, '?format=png') : e_,
                                  backgroundSrc: ''.concat(e_, '?format=png'),
                                  alt: D.NW.string(D.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: l()(L.thumbnail, { [L.spoiler]: G.shouldSpoiler }),
                                  imageChildClassName: L.thumbnailImage,
                                  onContextMenu: V,
                                  onError: () => Q(!0)
                              })),
                    null != G.coverImageOverlayText &&
                        (0, r.jsx)(p.P3F, {
                            onClick: ed,
                            children: (0, r.jsx)('div', {
                                className: L.thumbnailOverlay,
                                children: (0, r.jsxs)('div', {
                                    className: L.thumbnailOverlayCta,
                                    children: [
                                        (0, r.jsx)(w.Z, { color: u.Z.WHITE }),
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: G.coverImageOverlayText
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
                                children: G.title
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: l()(L.descriptionHeaderText, L.descriptionSubtitle),
                                children: G.subtitle
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: L.descriptionFooter,
                        children: [
                            null != eh &&
                                (0, r.jsx)(p.yRy, {
                                    renderPopout: (e) => em(e, [f.Z.AVATAR]),
                                    position: 'right',
                                    spacing: 12,
                                    preload: null == G.authorId ? void 0 : ep,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            onMouseEnter: eg,
                                            onMouseLeave: eg,
                                            children: (0, r.jsx)(
                                                p.qEK,
                                                U(W({}, e), {
                                                    size: p.EFr.SIZE_40,
                                                    src: eh,
                                                    'aria-label': D.NW.string(D.t.KXz3XF),
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
                                            null != G.channelName &&
                                                (0, r.jsx)(p.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: L.mediaChannelIcon
                                                }),
                                            (0, r.jsx)(p.P3F, {
                                                onClick: ed,
                                                className: L.channelName,
                                                children: (0, r.jsx)(p.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null != (a = G.channelName) ? a : G.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != G.authorName &&
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: L.descriptionFooterAuthorContainer,
                                            children: D.NW.format(D.t.voIDKS, {
                                                authorName: G.authorName,
                                                authorNameHook: () =>
                                                    (0, r.jsx)(
                                                        p.yRy,
                                                        {
                                                            renderPopout: (e) => em(e, [f.Z.USERNAME]),
                                                            position: 'right',
                                                            preload: null == G.authorId ? void 0 : ep,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    p.rz2,
                                                                    U(W({}, e), {
                                                                        name: G.authorName,
                                                                        color: en,
                                                                        roleGradient: ea,
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
                            G.canAccess
                                ? (0, r.jsx)(p.zxk, {
                                      color: p.Ttl.BRAND,
                                      onClick: ed,
                                      children: (0, r.jsx)(p.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: G.ctaText
                                      })
                                  })
                                : (0, r.jsx)(p.gtL, {
                                      pauseAnimation: J,
                                      onClick: ed,
                                      className: l()(L.__invalid_ctaButtonContent, L.subscribeButton),
                                      color: p.zxk.Colors.CUSTOM,
                                      children: (0, r.jsx)(p.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: G.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
