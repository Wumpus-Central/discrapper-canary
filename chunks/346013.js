n.d(t, { Z: () => w }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(772848),
    d = n(831209),
    u = n(399606),
    m = n(481060),
    _ = n(607070),
    h = n(100527),
    p = n(367907),
    g = n(676742),
    f = n(1585),
    x = n(841762),
    C = n(336197),
    v = n(406432),
    E = n(348238),
    I = n(38267),
    N = n(184301),
    S = n(347475),
    T = n(695346),
    b = n(271383),
    A = n(594174),
    j = n(768581),
    y = n(900849),
    Z = n(506071),
    R = n(495114),
    L = n(170140),
    P = n(981631),
    k = n(959517),
    M = n(388032),
    O = n(499722),
    D = n(527455);
function w(e) {
    var t, n, a;
    let { embedUrl: s, message: w, channel: F } = e,
        U = (0, L.J)(s, w),
        { setPopout: B } = (0, I.Z)(w.id, k.d$),
        G = (0, E.qo)(w, F, B, !0),
        H = T.QK.useSetting(),
        V = (0, Z.n)(),
        [z, W] = l.useState(!1),
        [K, Y] = l.useState((null == U ? void 0 : U.coverImage) == null),
        X = (0, u.e7)([_.Z], () => _.Z.useReducedMotion),
        q = (0, u.e7)(
            [b.ZP, A.default],
            () => {
                var e;
                return b.ZP.isMember(null == U ? void 0 : U.guildId, null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
            },
            [U]
        ),
        Q = (0, u.e7)([b.ZP], () => ((null == U ? void 0 : U.authorId) != null ? b.ZP.getMember(U.guildId, U.authorId) : null)),
        J = (0, g.Z)((null == Q ? void 0 : Q.avatarDecoration) != null ? (null == Q ? void 0 : Q.avatarDecoration) : null == U ? void 0 : null === (t = U.user) || void 0 === t ? void 0 : t.avatarDecoration),
        [$, ee] = l.useMemo(() => {
            var e;
            return [null !== (e = null == Q ? void 0 : Q.colorString) && void 0 !== e ? e : 'inherit', null == Q ? void 0 : Q.colorRoleId];
        }, [Q]),
        { reducedMotion: et } = l.useContext(m.Sfi),
        [en, ei] = l.useState(!1),
        el = l.useCallback(() => {
            W(!0);
        }, [W]),
        ea = l.useCallback(() => {
            W(!1);
        }, [W]),
        er = l.useCallback(async () => {
            null != U &&
                ((0, p.yw)(P.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: U.threadId,
                    channel_id: F.id,
                    can_access: U.canAccess,
                    is_member: q
                }),
                U.canAccess ? (0, C.Z)(P.Z5c.CHANNEL(U.guildId, U.threadId, U.messageId)) : q ? (0, C.Z)(P.Z5c.CHANNEL(U.guildId, U.parentChannelId)) : await y.Ub(U.guildId, {}, { channelId: U.parentChannelId }));
        }, [U, F, q]),
        es = l.useCallback(
            () => (
                o()((null == U ? void 0 : U.authorId) != null, 'Author Id cannot be null when loading user profile'),
                (0, N.Z)(U.authorId, U.avatarUrl, {
                    guildId: U.guildId,
                    channelId: F.id
                })
            ),
            [U, F]
        );
    if (null == U) return null;
    let eo = (e, t) => (
            o()(null != U.authorId, 'Author Id cannot be null when rendering user popout'),
            (0, i.jsx)(S.Z, {
                ...e,
                userId: U.authorId,
                guildId: U.guildId,
                channelId: F.id,
                messageId: w.id,
                roleId: ee,
                newAnalyticsLocations: t
            })
        ),
        ec = (0, j.NZ)({
            avatarDecoration: J,
            size: (0, f.y9)(m.EFr.SIZE_40),
            canAnimate: en
        }),
        ed = null === (n = U.user) || void 0 === n ? void 0 : n.getAvatarURL(U.guildId, 40, en),
        eu = () => {
            !et.enabled && ei((e) => !e);
        },
        em = U.coverImage,
        e_ = null != em && (0, v.d$)(em);
    return (0, i.jsxs)('div', {
        className: O.postPreviewContainer,
        children: [
            (0, i.jsxs)('div', {
                className: O.thumbnailContainer,
                onMouseEnter: el,
                onMouseLeave: ea,
                children: [
                    !K &&
                        (!0 === U.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)('img', {
                                  src: D,
                                  alt: M.intl.string(M.t.rIbh8P),
                                  className: r()(O.thumbnail, { [O.spoiler]: U.shouldSpoiler }),
                                  onContextMenu: G,
                                  onError: () => Y(!0)
                              })
                            : (0, i.jsx)(x.Z, {
                                  src: !(V && (H || z)) && e_ ? ''.concat(em, '?format=png') : em,
                                  backgroundSrc: ''.concat(em, '?format=png'),
                                  alt: M.intl.string(M.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: r()(O.thumbnail, { [O.spoiler]: U.shouldSpoiler }),
                                  imageChildClassName: O.thumbnailImage,
                                  onContextMenu: G,
                                  onError: () => Y(!0)
                              })),
                    null != U.coverImageOverlayText &&
                        (0, i.jsx)(m.P3F, {
                            onClick: er,
                            children: (0, i.jsx)('div', {
                                className: O.thumbnailOverlay,
                                children: (0, i.jsxs)('div', {
                                    className: O.thumbnailOverlayCta,
                                    children: [
                                        (0, i.jsx)(R.Z, { color: d.Z.WHITE }),
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: U.coverImageOverlayText
                                        })
                                    ]
                                })
                            })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: O.descriptionContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: O.descriptionHeader,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-normal',
                                className: O.descriptionHeaderText,
                                children: U.title
                            }),
                            (0, i.jsx)(m.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: r()(O.descriptionHeaderText, O.descriptionSubtitle),
                                children: U.subtitle
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: O.descriptionFooter,
                        children: [
                            null != ed &&
                                (0, i.jsx)(m.yRy, {
                                    renderPopout: (e) => eo(e, [h.Z.AVATAR]),
                                    position: 'right',
                                    spacing: 12,
                                    preload: null == U.authorId ? void 0 : es,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            onMouseEnter: eu,
                                            onMouseLeave: eu,
                                            children: (0, i.jsx)(m.qEK, {
                                                ...e,
                                                size: m.EFr.SIZE_40,
                                                src: ed,
                                                'aria-label': M.intl.string(M.t.KXz3XF),
                                                avatarDecoration: ec
                                            })
                                        })
                                }),
                            (0, i.jsxs)('div', {
                                className: O.descriptionFooterContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: O.descriptionFooterChannelName,
                                        children: [
                                            null != U.channelName &&
                                                (0, i.jsx)(m.EAQ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: O.mediaChannelIcon
                                                }),
                                            (0, i.jsx)(m.P3F, {
                                                onClick: er,
                                                className: O.channelName,
                                                children: (0, i.jsx)(m.X6q, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null !== (a = U.channelName) && void 0 !== a ? a : U.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != U.authorName &&
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: O.descriptionFooterAuthorContainer,
                                            children: M.intl.format(M.t.voIDKS, {
                                                authorName: U.authorName,
                                                authorNameHook: () =>
                                                    (0, i.jsx)(
                                                        m.yRy,
                                                        {
                                                            renderPopout: (e) => eo(e, [h.Z.USERNAME]),
                                                            position: 'right',
                                                            preload: null == U.authorId ? void 0 : es,
                                                            children: (e) =>
                                                                (0, i.jsx)(m.rz2, {
                                                                    ...e,
                                                                    name: U.authorName,
                                                                    color: $,
                                                                    className: O.authorName
                                                                })
                                                        },
                                                        (0, c.Z)()
                                                    )
                                            })
                                        })
                                ]
                            }),
                            U.canAccess
                                ? (0, i.jsx)(m.zxk, {
                                      color: m.Ttl.BRAND,
                                      onClick: er,
                                      children: (0, i.jsx)(m.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: U.ctaText
                                      })
                                  })
                                : (0, i.jsx)(m.gtL, {
                                      pauseAnimation: X,
                                      onClick: er,
                                      className: r()(O.__invalid_ctaButtonContent, O.subscribeButton),
                                      color: m.zxk.Colors.CUSTOM,
                                      children: (0, i.jsx)(m.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: U.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
