n.d(t, { Z: () => P });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(642128),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(607070),
    h = n(70097),
    g = n(961675),
    x = n(883429),
    f = n(432771),
    p = n(406074),
    v = n(434404),
    C = n(430824),
    _ = n(63063),
    b = n(595433),
    j = n(981631),
    N = n(388032),
    T = n(846169),
    I = n(906739),
    S = n(965358),
    w = n(420196),
    y = n(433075);
function E(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(d.P3F, {
        onClick: t,
        className: T.closeButton,
        'aria-label': N.intl.string(N.t.WAI6xs),
        children: (0, i.jsx)(d.Dio, {
            size: 'md',
            color: 'currentColor',
            className: T.closeIcon
        })
    });
}
function R(e) {
    let { username: t, title: n, videoSrc: r, messageCount: l, reaction: s, reactionCount: o, classname: c } = e;
    return (0, i.jsxs)('div', {
        className: a()(T.videoPreview, c),
        children: [
            (0, i.jsx)('div', {
                className: T.authorRow,
                children: (0, i.jsxs)('div', {
                    className: T.rowGroup,
                    children: [
                        (0, i.jsx)(d.Text, {
                            tag: 'span',
                            className: T.author,
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: T.postCreationTimestamp,
                            children: N.intl.string(N.t.mA0IvL)
                        })
                    ]
                })
            }),
            (0, i.jsx)(d.X6q, {
                variant: 'heading-md/extrabold',
                className: T.title,
                color: 'header-primary',
                'aria-hidden': !0,
                children: n
            }),
            (0, i.jsx)(d.LZC, { size: 10 }),
            (0, i.jsx)(h.Z, {
                className: T.video,
                src: r,
                autoPlay: !0,
                loop: !0,
                muted: !0
            }),
            (0, i.jsx)(d.LZC, { size: 10 }),
            (0, i.jsx)('div', {
                className: T.footer,
                children: (0, i.jsxs)('div', {
                    className: T.forumPostControls,
                    children: [
                        (0, i.jsxs)('div', {
                            className: T.messageCountBox,
                            children: [
                                (0, i.jsx)('span', {
                                    className: T.messageCountIcon,
                                    children: (0, i.jsx)(d.kBi, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    children: l
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: T.reactionBox,
                            children: [
                                (0, i.jsx)('span', {
                                    role: 'img',
                                    'aria-label': '',
                                    children: s
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    children: o
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
let P = (e) => {
    var t, n;
    let { channel: l } = e,
        h = (0, u.ZP)(),
        P = (0, c.wj)(h),
        k = (0, o.e7)([C.Z], () => C.Z.getGuild(l.guild_id)),
        Z = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
        M = (0, o.e7)([g.Z], () => g.Z.hasHidden(l.id)),
        A = (0, p.C)({
            guildId: l.guild_id,
            channelId: l.id
        }),
        { transitions: L, setVisible: F } = (0, b.H)(),
        O = r.useCallback(() => {
            F(!1), x.Z.hideAdminOnboarding(l.id, !0);
        }, [l, F]);
    r.useEffect(() => {
        (0, f.c)(l.id) || F(!M);
    }, [l, F, M]);
    let z = r.useMemo(() => [N.intl.string(N.t['8pEGAw']), N.intl.string(N.t.jwfgDQ), N.intl.string(N.t.mPKs29), N.intl.string(N.t.StRbvL)], []),
        D = r.useMemo(() => [N.intl.string(N.t['m/b58P']), N.intl.string(N.t.MuJSKy), N.intl.string(N.t['d/Wqvr']), N.intl.string(N.t.GJklAw)], []),
        B = () => {
            v.Z.open(l.guild_id, j.pNK.ROLE_SUBSCRIPTIONS);
        },
        H = null !== (t = null == k ? void 0 : k.hasFeature(j.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t ? N.intl.string(N.t.n0q7sL) : N.intl.string(N.t.QoYdiY),
        U = null !== (n = (null == k ? void 0 : k.hasFeature(j.oNc.CREATOR_MONETIZABLE)) || (null == k ? void 0 : k.hasFeature(j.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== n && n,
        V = U ? N.intl.string(N.t['G/7ciY']) : N.intl.string(N.t.IFOiio),
        G = U ? N.intl.string(N.t.GjgQOz) : N.intl.string(N.t.E7AO6u);
    return (0, i.jsx)(i.Fragment, {
        children: L((e, t) =>
            t
                ? (0, i.jsxs)(s.animated.div, {
                      style: e,
                      className: T.container,
                      children: [
                          (0, i.jsxs)('div', {
                              className: a()(T.__invalid_wrapper, T.headerRow),
                              children: [
                                  (0, i.jsxs)(d.Text, {
                                      variant: 'text-xs/normal',
                                      className: T.visibilityInfo,
                                      children: [
                                          (0, i.jsx)(d.d3s, {
                                              size: 'xxs',
                                              color: 'currentColor',
                                              className: T.icon
                                          }),
                                          N.intl.string(N.t.znhX2d)
                                      ]
                                  }),
                                  (0, i.jsx)(E, { handleHide: O })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: T.contentContainer,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: a()(T.contentRow, U && T.contentRowOne),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: a()(T.contentMediaContainer),
                                              children: (0, i.jsxs)('div', {
                                                  className: T.contentVideoContainer,
                                                  children: [
                                                      (0, i.jsx)(R, {
                                                          username: N.intl.string(N.t.AkORcn),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4',
                                                          title: N.intl.string(N.t.yO6Fxs),
                                                          messageCount: '34',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: T.backgroundVideo
                                                      }),
                                                      (0, i.jsx)(R, {
                                                          username: N.intl.string(N.t.DPg3YG),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4',
                                                          title: N.intl.string(N.t.R5XnCw),
                                                          messageCount: '34',
                                                          reactionCount: '84',
                                                          reaction: '\uD83D\uDC9E',
                                                          classname: a()(T.backgroundVideo, T.secondaryVideo)
                                                      }),
                                                      (0, i.jsx)(R, {
                                                          username: N.intl.string(N.t.KIele3),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4',
                                                          title: N.intl.string(N.t.pt88VV),
                                                          messageCount: '7,103',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: T.highlightVideo
                                                      })
                                                  ]
                                              })
                                          }),
                                          (0, i.jsxs)('article', {
                                              className: T.contentTextContainer,
                                              children: [
                                                  (0, i.jsx)(d.X6q, {
                                                      variant: 'heading-lg/semibold',
                                                      color: 'header-primary',
                                                      children: V
                                                  }),
                                                  (0, i.jsx)(d.LZC, { size: 8 }),
                                                  (0, i.jsx)(d.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'text-muted',
                                                      children: G
                                                  }),
                                                  (0, i.jsx)(d.LZC, { size: 16 }),
                                                  (0, i.jsxs)(d.P3F, {
                                                      onClick: () => open(_.Z.getCreatorSupportArticleURL(j.BhN.MEDIA_CHANNEL)),
                                                      className: T.helpCenterLink,
                                                      children: [
                                                          (0, i.jsx)(d.Text, {
                                                              variant: 'text-sm/medium',
                                                              color: 'text-link',
                                                              className: T.__invalid_helpCenterLinkText,
                                                              children: N.intl.string(N.t.OahzBQ)
                                                          }),
                                                          (0, i.jsx)(d.rgF, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: T.helpCenterLinkIcon
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(d.LZC, { size: 16 }),
                                                  (0, i.jsx)('div', {
                                                      className: T.mediaChannelTagsContainer,
                                                      children: z.map((e) =>
                                                          (0, i.jsx)(
                                                              d.Text,
                                                              {
                                                                  variant: 'text-sm/medium',
                                                                  color: 'text-normal',
                                                                  className: T.mediaChannelTag,
                                                                  children: e
                                                              },
                                                              e
                                                          )
                                                      )
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  U &&
                                      (0, i.jsxs)('div', {
                                          className: a()(T.contentRow, T.contentRowTwo),
                                          children: [
                                              (0, i.jsx)('div', {
                                                  className: a()(T.contentMediaContainer),
                                                  children: (0, i.jsxs)('div', {
                                                      className: T.contentImageContainer,
                                                      children: [
                                                          (0, i.jsx)('img', {
                                                              src: P ? w : y,
                                                              alt: '',
                                                              className: a()(T.previewEmbedImage, T.secondaryImage)
                                                          }),
                                                          (0, i.jsx)('img', {
                                                              src: P ? I : S,
                                                              alt: '',
                                                              className: T.previewEmbedImage
                                                          })
                                                      ]
                                                  })
                                              }),
                                              (0, i.jsxs)('article', {
                                                  className: T.contentTextContainer,
                                                  children: [
                                                      (0, i.jsxs)(d.Text, {
                                                          variant: 'text-xxs/bold',
                                                          className: T.serverSubPill,
                                                          children: [
                                                              N.intl.string(N.t.NChGw8),
                                                              ' ',
                                                              (0, i.jsx)('span', {
                                                                  role: 'img',
                                                                  'aria-label': '',
                                                                  children: '\uD83D\uDD25'
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)(d.LZC, { size: 10 }),
                                                      (0, i.jsx)(d.X6q, {
                                                          variant: 'heading-lg/semibold',
                                                          color: 'header-primary',
                                                          children: N.intl.string(N.t['N/TRra'])
                                                      }),
                                                      (0, i.jsx)(d.LZC, { size: 8 }),
                                                      (0, i.jsx)(d.Text, {
                                                          variant: 'text-md/normal',
                                                          color: 'text-muted',
                                                          children: N.intl.string(N.t.t3yWxM)
                                                      }),
                                                      (0, i.jsx)(d.LZC, { size: 16 }),
                                                      (0, i.jsx)('div', {
                                                          className: T.mediaChannelTagsContainer,
                                                          children: D.map((e) =>
                                                              (0, i.jsx)(
                                                                  d.Text,
                                                                  {
                                                                      variant: 'text-sm/medium',
                                                                      color: 'text-normal',
                                                                      className: T.mediaChannelTag,
                                                                      children: e
                                                                  },
                                                                  e
                                                              )
                                                          )
                                                      }),
                                                      (0, i.jsx)(d.LZC, { size: 16 }),
                                                      0 === A.length &&
                                                          (0, i.jsx)(d.gtL, {
                                                              size: d.zxk.Sizes.MEDIUM,
                                                              pauseAnimation: Z,
                                                              onClick: B,
                                                              className: T.addChannelButton,
                                                              color: d.zxk.Colors.CUSTOM,
                                                              children: H
                                                          })
                                                  ]
                                              })
                                          ]
                                      })
                              ]
                          })
                      ]
                  })
                : null
        )
    });
};
