n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(772848),
    d = n(831209),
    u = n(399606),
    m = n(481060),
    h = n(607070),
    f = n(100527),
    p = n(367907),
    _ = n(676742),
    g = n(1585),
    E = n(841762),
    C = n(336197),
    I = n(406432),
    x = n(348238),
    N = n(38267),
    v = n(184301),
    T = n(347475),
    S = n(695346),
    A = n(271383),
    b = n(594174),
    j = n(768581),
    R = n(900849),
    Z = n(506071),
    P = n(495114),
    L = n(170140),
    y = n(981631),
    O = n(959517),
    M = n(388032),
    k = n(352447),
    D = n(527455);
function B(e) {
    var t, n, l;
    let { embedUrl: o, message: B, channel: U } = e,
        w = (0, L.J)(o, B),
        { setPopout: F } = (0, N.Z)(B.id, O.d$),
        G = (0, x.qo)(B, U, F, !0),
        V = S.QK.useSetting(),
        H = (0, Z.n)(),
        [z, W] = r.useState(!1),
        [K, Y] = r.useState((null == w ? void 0 : w.coverImage) == null),
        X = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        Q = (0, u.e7)(
            [A.ZP, b.default],
            () => {
                var e;
                return A.ZP.isMember(null == w ? void 0 : w.guildId, null === (e = b.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
            },
            [w]
        ),
        q = (0, u.e7)([A.ZP], () => ((null == w ? void 0 : w.authorId) != null ? A.ZP.getMember(w.guildId, w.authorId) : null)),
        J = (0, _.Z)((null == q ? void 0 : q.avatarDecoration) != null ? (null == q ? void 0 : q.avatarDecoration) : null == w ? void 0 : null === (t = w.user) || void 0 === t ? void 0 : t.avatarDecoration),
        [$, ee] = r.useMemo(() => {
            var e;
            return [null !== (e = null == q ? void 0 : q.colorString) && void 0 !== e ? e : 'inherit', null == q ? void 0 : q.colorRoleId];
        }, [q]),
        { reducedMotion: et } = r.useContext(m.AccessibilityPreferencesContext),
        [en, ei] = r.useState(!1),
        er = r.useCallback(() => {
            W(!0);
        }, [W]),
        el = r.useCallback(() => {
            W(!1);
        }, [W]),
        ea = r.useCallback(async () => {
            null != w &&
                ((0, p.yw)(y.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: w.threadId,
                    channel_id: U.id,
                    can_access: w.canAccess,
                    is_member: Q
                }),
                w.canAccess ? (0, C.Z)(y.Z5c.CHANNEL(w.guildId, w.threadId, w.messageId)) : Q ? (0, C.Z)(y.Z5c.CHANNEL(w.guildId, w.parentChannelId)) : await R.Ub(w.guildId, {}, { channelId: w.parentChannelId }));
        }, [w, U, Q]),
        eo = r.useCallback(
            () => (
                s()((null == w ? void 0 : w.authorId) != null, 'Author Id cannot be null when loading user profile'),
                (0, v.Z)(w.authorId, w.avatarUrl, {
                    guildId: w.guildId,
                    channelId: U.id
                })
            ),
            [w, U]
        );
    if (null == w) return null;
    let es = (e, t) => (
            s()(null != w.authorId, 'Author Id cannot be null when rendering user popout'),
            (0, i.jsx)(T.Z, {
                ...e,
                userId: w.authorId,
                guildId: w.guildId,
                channelId: U.id,
                messageId: B.id,
                roleId: ee,
                newAnalyticsLocations: t
            })
        ),
        ec = (0, j.NZ)({
            avatarDecoration: J,
            size: (0, g.y9)(m.AvatarSizes.SIZE_40),
            canAnimate: en
        }),
        ed = null === (n = w.user) || void 0 === n ? void 0 : n.getAvatarURL(w.guildId, 40, en),
        eu = () => {
            if (!et.enabled) ei((e) => !e);
        },
        em = w.coverImage,
        eh = null != em && (0, I.d$)(em);
    return (0, i.jsxs)('div', {
        className: k.postPreviewContainer,
        children: [
            (0, i.jsxs)('div', {
                className: k.thumbnailContainer,
                onMouseEnter: er,
                onMouseLeave: el,
                children: [
                    !K &&
                        (!0 === w.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)('img', {
                                  src: D,
                                  alt: M.intl.string(M.t.rIbh8P),
                                  className: a()(k.thumbnail, { [k.spoiler]: w.shouldSpoiler }),
                                  onContextMenu: G,
                                  onError: () => Y(!0)
                              })
                            : (0, i.jsx)(E.Z, {
                                  src: !(H && (V || z)) && eh ? ''.concat(em, '?format=png') : em,
                                  backgroundSrc: ''.concat(em, '?format=png'),
                                  alt: M.intl.string(M.t.rIbh8P),
                                  aspectRatio: 16 / 9,
                                  className: a()(k.thumbnail, { [k.spoiler]: w.shouldSpoiler }),
                                  imageChildClassName: k.thumbnailImage,
                                  onContextMenu: G,
                                  onError: () => Y(!0)
                              })),
                    null != w.coverImageOverlayText &&
                        (0, i.jsx)(m.Clickable, {
                            onClick: ea,
                            children: (0, i.jsx)('div', {
                                className: k.thumbnailOverlay,
                                children: (0, i.jsxs)('div', {
                                    className: k.thumbnailOverlayCta,
                                    children: [
                                        (0, i.jsx)(P.Z, { color: d.Z.WHITE }),
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: w.coverImageOverlayText
                                        })
                                    ]
                                })
                            })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: k.descriptionContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: k.descriptionHeader,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-normal',
                                className: k.descriptionHeaderText,
                                children: w.title
                            }),
                            (0, i.jsx)(m.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: a()(k.descriptionHeaderText, k.descriptionSubtitle),
                                children: w.subtitle
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: k.descriptionFooter,
                        children: [
                            null != ed &&
                                (0, i.jsx)(m.Popout, {
                                    renderPopout: (e) => es(e, [f.Z.AVATAR]),
                                    position: 'right',
                                    spacing: 12,
                                    preload: null == w.authorId ? void 0 : eo,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            onMouseEnter: eu,
                                            onMouseLeave: eu,
                                            children: (0, i.jsx)(m.Avatar, {
                                                ...e,
                                                size: m.AvatarSizes.SIZE_40,
                                                src: ed,
                                                'aria-label': M.intl.string(M.t.KXz3XF),
                                                avatarDecoration: ec
                                            })
                                        })
                                }),
                            (0, i.jsxs)('div', {
                                className: k.descriptionFooterContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: k.descriptionFooterChannelName,
                                        children: [
                                            null != w.channelName &&
                                                (0, i.jsx)(m.ImageSparkleIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: k.mediaChannelIcon
                                                }),
                                            (0, i.jsx)(m.Clickable, {
                                                onClick: ea,
                                                className: k.channelName,
                                                children: (0, i.jsx)(m.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: null !== (l = w.channelName) && void 0 !== l ? l : w.guildName
                                                })
                                            })
                                        ]
                                    }),
                                    null != w.authorName &&
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            className: k.descriptionFooterAuthorContainer,
                                            children: M.intl.format(M.t.voIDKS, {
                                                authorName: w.authorName,
                                                authorNameHook: () =>
                                                    (0, i.jsx)(
                                                        m.Popout,
                                                        {
                                                            renderPopout: (e) => es(e, [f.Z.USERNAME]),
                                                            position: 'right',
                                                            preload: null == w.authorId ? void 0 : eo,
                                                            children: (e) =>
                                                                (0, i.jsx)(m.NameWithRoleAnchor, {
                                                                    ...e,
                                                                    name: w.authorName,
                                                                    color: $,
                                                                    className: k.authorName
                                                                })
                                                        },
                                                        (0, c.Z)()
                                                    )
                                            })
                                        })
                                ]
                            }),
                            w.canAccess
                                ? (0, i.jsx)(m.Button, {
                                      color: m.ButtonColors.BRAND,
                                      onClick: ea,
                                      children: (0, i.jsx)(m.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: w.ctaText
                                      })
                                  })
                                : (0, i.jsx)(m.ShinyButton, {
                                      pauseAnimation: X,
                                      onClick: ea,
                                      className: a()(k.__invalid_ctaButtonContent, k.subscribeButton),
                                      color: m.Button.Colors.CUSTOM,
                                      children: (0, i.jsx)(m.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: w.ctaText
                                      })
                                  })
                        ]
                    })
                ]
            })
        ]
    });
}
