var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(666912),
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
    C = n(434404),
    v = n(430824),
    b = n(63063),
    j = n(595433),
    _ = n(981631),
    I = n(388032),
    T = n(841835),
    N = n(906739),
    S = n(965358),
    w = n(420196),
    y = n(433075);
function E(e) {
    let { handleHide: t } = e;
    return (0, a.jsx)(d.Clickable, {
        onClick: t,
        className: T.closeButton,
        'aria-label': I.intl.string(I.t.WAI6xs),
        children: (0, a.jsx)(d.XSmallIcon, {
            size: 'md',
            color: 'currentColor',
            className: T.closeIcon
        })
    });
}
function R(e) {
    let { username: t, title: n, videoSrc: i, messageCount: r, reaction: s, reactionCount: o, classname: c } = e;
    return (0, a.jsxs)('div', {
        className: l()(T.videoPreview, c),
        children: [
            (0, a.jsx)('div', {
                className: T.authorRow,
                children: (0, a.jsxs)('div', {
                    className: T.rowGroup,
                    children: [
                        (0, a.jsx)(d.Text, {
                            tag: 'span',
                            className: T.author,
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, a.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: T.postCreationTimestamp,
                            children: I.intl.string(I.t.mA0IvL)
                        })
                    ]
                })
            }),
            (0, a.jsx)(d.Heading, {
                variant: 'heading-md/extrabold',
                className: T.title,
                color: 'header-primary',
                'aria-hidden': !0,
                children: n
            }),
            (0, a.jsx)(d.Spacer, { size: 10 }),
            (0, a.jsx)(h.Z, {
                className: T.video,
                src: i,
                autoPlay: !0,
                loop: !0,
                muted: !0
            }),
            (0, a.jsx)(d.Spacer, { size: 10 }),
            (0, a.jsx)('div', {
                className: T.footer,
                children: (0, a.jsxs)('div', {
                    className: T.forumPostControls,
                    children: [
                        (0, a.jsxs)('div', {
                            className: T.messageCountBox,
                            children: [
                                (0, a.jsx)('span', {
                                    className: T.messageCountIcon,
                                    children: (0, a.jsx)(d.ChatIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                                (0, a.jsx)(d.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    children: r
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: T.reactionBox,
                            children: [
                                (0, a.jsx)('span', {
                                    role: 'img',
                                    'aria-label': '',
                                    children: s
                                }),
                                (0, a.jsx)(d.Text, {
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
t.Z = (e) => {
    var t, n;
    let { channel: r } = e,
        h = (0, u.ZP)(),
        P = (0, c.wj)(h),
        M = (0, o.e7)([v.Z], () => v.Z.getGuild(r.guild_id)),
        k = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
        Z = (0, o.e7)([g.Z], () => g.Z.hasHidden(r.id)),
        A = (0, p.C)({
            guildId: r.guild_id,
            channelId: r.id
        }),
        { transitions: L, setVisible: F } = (0, j.H)(),
        O = i.useCallback(() => {
            F(!1), x.Z.hideAdminOnboarding(r.id, !0);
        }, [r, F]);
    i.useEffect(() => {
        !(0, f.c)(r.id) && F(!Z);
    }, [r, F, Z]);
    let B = i.useMemo(() => [I.intl.string(I.t['8pEGAw']), I.intl.string(I.t.jwfgDQ), I.intl.string(I.t.mPKs29), I.intl.string(I.t.StRbvL)], []),
        z = i.useMemo(() => [I.intl.string(I.t['m/b58P']), I.intl.string(I.t.MuJSKy), I.intl.string(I.t['d/Wqvr']), I.intl.string(I.t.GJklAw)], []),
        H = () => {
            C.Z.open(r.guild_id, _.pNK.ROLE_SUBSCRIPTIONS);
        },
        D = null !== (t = null == M ? void 0 : M.hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t ? I.intl.string(I.t.n0q7sL) : I.intl.string(I.t.QoYdiY),
        U = null !== (n = (null == M ? void 0 : M.hasFeature(_.oNc.CREATOR_MONETIZABLE)) || (null == M ? void 0 : M.hasFeature(_.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== n && n,
        V = U ? I.intl.string(I.t['G/7ciY']) : I.intl.string(I.t.IFOiio),
        G = U ? I.intl.string(I.t.GjgQOz) : I.intl.string(I.t.E7AO6u);
    return (0, a.jsx)(a.Fragment, {
        children: L((e, t) =>
            t
                ? (0, a.jsxs)(s.animated.div, {
                      style: e,
                      className: T.container,
                      children: [
                          (0, a.jsxs)('div', {
                              className: l()(T.__invalid_wrapper, T.headerRow),
                              children: [
                                  (0, a.jsxs)(d.Text, {
                                      variant: 'text-xs/normal',
                                      className: T.visibilityInfo,
                                      children: [
                                          (0, a.jsx)(d.CircleInformationIcon, {
                                              size: 'xxs',
                                              color: 'currentColor',
                                              className: T.icon
                                          }),
                                          I.intl.string(I.t.znhX2d)
                                      ]
                                  }),
                                  (0, a.jsx)(E, { handleHide: O })
                              ]
                          }),
                          (0, a.jsxs)('div', {
                              className: T.contentContainer,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: l()(T.contentRow, U && T.contentRowOne),
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: l()(T.contentMediaContainer),
                                              children: (0, a.jsxs)('div', {
                                                  className: T.contentVideoContainer,
                                                  children: [
                                                      (0, a.jsx)(R, {
                                                          username: I.intl.string(I.t.AkORcn),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4',
                                                          title: I.intl.string(I.t.yO6Fxs),
                                                          messageCount: '34',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: T.backgroundVideo
                                                      }),
                                                      (0, a.jsx)(R, {
                                                          username: I.intl.string(I.t.DPg3YG),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4',
                                                          title: I.intl.string(I.t.R5XnCw),
                                                          messageCount: '34',
                                                          reactionCount: '84',
                                                          reaction: '\uD83D\uDC9E',
                                                          classname: l()(T.backgroundVideo, T.secondaryVideo)
                                                      }),
                                                      (0, a.jsx)(R, {
                                                          username: I.intl.string(I.t.KIele3),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4',
                                                          title: I.intl.string(I.t.pt88VV),
                                                          messageCount: '7,103',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: T.highlightVideo
                                                      })
                                                  ]
                                              })
                                          }),
                                          (0, a.jsxs)('article', {
                                              className: T.contentTextContainer,
                                              children: [
                                                  (0, a.jsx)(d.Heading, {
                                                      variant: 'heading-lg/semibold',
                                                      color: 'header-primary',
                                                      children: V
                                                  }),
                                                  (0, a.jsx)(d.Spacer, { size: 8 }),
                                                  (0, a.jsx)(d.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'text-muted',
                                                      children: G
                                                  }),
                                                  (0, a.jsx)(d.Spacer, { size: 16 }),
                                                  (0, a.jsxs)(d.Clickable, {
                                                      onClick: () => open(b.Z.getCreatorSupportArticleURL(_.BhN.MEDIA_CHANNEL)),
                                                      className: T.helpCenterLink,
                                                      children: [
                                                          (0, a.jsx)(d.Text, {
                                                              variant: 'text-sm/medium',
                                                              color: 'text-link',
                                                              className: T.__invalid_helpCenterLinkText,
                                                              children: I.intl.string(I.t.OahzBQ)
                                                          }),
                                                          (0, a.jsx)(d.WindowLaunchIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: T.helpCenterLinkIcon
                                                          })
                                                      ]
                                                  }),
                                                  (0, a.jsx)(d.Spacer, { size: 16 }),
                                                  (0, a.jsx)('div', {
                                                      className: T.mediaChannelTagsContainer,
                                                      children: B.map((e) =>
                                                          (0, a.jsx)(
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
                                      (0, a.jsxs)('div', {
                                          className: l()(T.contentRow, T.contentRowTwo),
                                          children: [
                                              (0, a.jsx)('div', {
                                                  className: l()(T.contentMediaContainer),
                                                  children: (0, a.jsxs)('div', {
                                                      className: T.contentImageContainer,
                                                      children: [
                                                          (0, a.jsx)('img', {
                                                              src: P ? w : y,
                                                              alt: '',
                                                              className: l()(T.previewEmbedImage, T.secondaryImage)
                                                          }),
                                                          (0, a.jsx)('img', {
                                                              src: P ? N : S,
                                                              alt: '',
                                                              className: T.previewEmbedImage
                                                          })
                                                      ]
                                                  })
                                              }),
                                              (0, a.jsxs)('article', {
                                                  className: T.contentTextContainer,
                                                  children: [
                                                      (0, a.jsxs)(d.Text, {
                                                          variant: 'text-xxs/bold',
                                                          className: T.serverSubPill,
                                                          children: [
                                                              I.intl.string(I.t.NChGw8),
                                                              ' ',
                                                              (0, a.jsx)('span', {
                                                                  role: 'img',
                                                                  'aria-label': '',
                                                                  children: '\uD83D\uDD25'
                                                              })
                                                          ]
                                                      }),
                                                      (0, a.jsx)(d.Spacer, { size: 10 }),
                                                      (0, a.jsx)(d.Heading, {
                                                          variant: 'heading-lg/semibold',
                                                          color: 'header-primary',
                                                          children: I.intl.string(I.t['N/TRra'])
                                                      }),
                                                      (0, a.jsx)(d.Spacer, { size: 8 }),
                                                      (0, a.jsx)(d.Text, {
                                                          variant: 'text-md/normal',
                                                          color: 'text-muted',
                                                          children: I.intl.string(I.t.t3yWxM)
                                                      }),
                                                      (0, a.jsx)(d.Spacer, { size: 16 }),
                                                      (0, a.jsx)('div', {
                                                          className: T.mediaChannelTagsContainer,
                                                          children: z.map((e) =>
                                                              (0, a.jsx)(
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
                                                      (0, a.jsx)(d.Spacer, { size: 16 }),
                                                      0 === A.length &&
                                                          (0, a.jsx)(d.ShinyButton, {
                                                              size: d.Button.Sizes.MEDIUM,
                                                              pauseAnimation: k,
                                                              onClick: H,
                                                              className: T.addChannelButton,
                                                              color: d.Button.Colors.CUSTOM,
                                                              children: D
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
