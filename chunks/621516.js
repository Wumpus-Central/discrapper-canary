n.d(t, { Z: () => E });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(642128),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(607070),
    h = n(70097),
    g = n(961675),
    f = n(883429),
    p = n(432771),
    x = n(406074),
    b = n(434404),
    j = n(430824),
    v = n(63063),
    C = n(595433),
    _ = n(981631),
    y = n(388032),
    N = n(461238),
    O = n(906739),
    w = n(965358),
    S = n(420196),
    P = n(433075);
function T(e) {
    let { handleHide: t } = e;
    return (0, r.jsx)(d.P3F, {
        onClick: t,
        className: N.closeButton,
        'aria-label': y.NW.string(y.t.WAI6xs),
        children: (0, r.jsx)(d.Dio, {
            size: 'md',
            color: 'currentColor',
            className: N.closeIcon
        })
    });
}
function I(e) {
    let { username: t, title: n, videoSrc: a, messageCount: i, reaction: s, reactionCount: o, classname: c } = e;
    return (0, r.jsxs)('div', {
        className: l()(N.videoPreview, c),
        children: [
            (0, r.jsx)('div', {
                className: N.authorRow,
                children: (0, r.jsxs)('div', {
                    className: N.rowGroup,
                    children: [
                        (0, r.jsx)(d.Text, {
                            tag: 'span',
                            className: N.author,
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: N.postCreationTimestamp,
                            children: y.NW.string(y.t.mA0IvL)
                        })
                    ]
                })
            }),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-md/extrabold',
                className: N.title,
                color: 'header-primary',
                'aria-hidden': !0,
                children: n
            }),
            (0, r.jsx)(d.LZC, { size: 10 }),
            (0, r.jsx)(h.Z, {
                className: N.video,
                src: a,
                autoPlay: !0,
                loop: !0,
                muted: !0
            }),
            (0, r.jsx)(d.LZC, { size: 10 }),
            (0, r.jsx)('div', {
                className: N.footer,
                children: (0, r.jsxs)('div', {
                    className: N.forumPostControls,
                    children: [
                        (0, r.jsxs)('div', {
                            className: N.messageCountBox,
                            children: [
                                (0, r.jsx)('span', {
                                    className: N.messageCountIcon,
                                    children: (0, r.jsx)(d.kBi, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    children: i
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: N.reactionBox,
                            children: [
                                (0, r.jsx)('span', {
                                    role: 'img',
                                    'aria-label': '',
                                    children: s
                                }),
                                (0, r.jsx)(d.Text, {
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
let E = (e) => {
    var t, n;
    let { channel: i } = e,
        h = (0, u.ZP)(),
        E = (0, c.wj)(h),
        k = (0, o.e7)([j.Z], () => j.Z.getGuild(i.guild_id)),
        R = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
        Z = (0, o.e7)([g.Z], () => g.Z.hasHidden(i.id)),
        M = (0, x.C)({
            guildId: i.guild_id,
            channelId: i.id
        }),
        { transitions: A, setVisible: L } = (0, C.H)(),
        W = a.useCallback(() => {
            L(!1), f.Z.hideAdminOnboarding(i.id, !0);
        }, [i, L]);
    a.useEffect(() => {
        (0, p.c)(i.id) || L(!Z);
    }, [i, L, Z]);
    let F = a.useMemo(() => [y.NW.string(y.t['8pEGAw']), y.NW.string(y.t.jwfgDQ), y.NW.string(y.t.mPKs29), y.NW.string(y.t.StRbvL)], []),
        D = a.useMemo(() => [y.NW.string(y.t['m/b58P']), y.NW.string(y.t.MuJSKy), y.NW.string(y.t['d/Wqvr']), y.NW.string(y.t.GJklAw)], []),
        z = () => {
            b.Z.open(i.guild_id, _.pNK.ROLE_SUBSCRIPTIONS);
        },
        B = null != (t = null == k ? void 0 : k.hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && t ? y.NW.string(y.t.n0q7sL) : y.NW.string(y.t.QoYdiY),
        H = null != (n = (null == k ? void 0 : k.hasFeature(_.oNc.CREATOR_MONETIZABLE)) || (null == k ? void 0 : k.hasFeature(_.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) && n,
        U = H ? y.NW.string(y.t['G/7ciY']) : y.NW.string(y.t.IFOiio),
        V = H ? y.NW.string(y.t.GjgQOz) : y.NW.string(y.t.E7AO6u);
    return (0, r.jsx)(r.Fragment, {
        children: A((e, t) =>
            t
                ? (0, r.jsxs)(s.animated.div, {
                      style: e,
                      className: N.container,
                      children: [
                          (0, r.jsxs)('div', {
                              className: l()(N.__invalid_wrapper, N.headerRow),
                              children: [
                                  (0, r.jsxs)(d.Text, {
                                      variant: 'text-xs/normal',
                                      className: N.visibilityInfo,
                                      children: [
                                          (0, r.jsx)(d.d3s, {
                                              size: 'xxs',
                                              color: 'currentColor',
                                              className: N.icon
                                          }),
                                          y.NW.string(y.t.znhX2d)
                                      ]
                                  }),
                                  (0, r.jsx)(T, { handleHide: W })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: N.contentContainer,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: l()(N.contentRow, H && N.contentRowOne),
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: N.contentMediaContainer,
                                              children: (0, r.jsxs)('div', {
                                                  className: N.contentVideoContainer,
                                                  children: [
                                                      (0, r.jsx)(I, {
                                                          username: y.NW.string(y.t.AkORcn),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4',
                                                          title: y.NW.string(y.t.yO6Fxs),
                                                          messageCount: '34',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: N.backgroundVideo
                                                      }),
                                                      (0, r.jsx)(I, {
                                                          username: y.NW.string(y.t.DPg3YG),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4',
                                                          title: y.NW.string(y.t.R5XnCw),
                                                          messageCount: '34',
                                                          reactionCount: '84',
                                                          reaction: '\uD83D\uDC9E',
                                                          classname: l()(N.backgroundVideo, N.secondaryVideo)
                                                      }),
                                                      (0, r.jsx)(I, {
                                                          username: y.NW.string(y.t.KIele3),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4',
                                                          title: y.NW.string(y.t.pt88VV),
                                                          messageCount: '7,103',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: N.highlightVideo
                                                      })
                                                  ]
                                              })
                                          }),
                                          (0, r.jsxs)('article', {
                                              className: N.contentTextContainer,
                                              children: [
                                                  (0, r.jsx)(d.X6q, {
                                                      variant: 'heading-lg/semibold',
                                                      color: 'header-primary',
                                                      children: U
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 8 }),
                                                  (0, r.jsx)(d.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'text-muted',
                                                      children: V
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 16 }),
                                                  (0, r.jsxs)(d.P3F, {
                                                      onClick: () => open(v.Z.getCreatorSupportArticleURL(_.BhN.MEDIA_CHANNEL)),
                                                      className: N.helpCenterLink,
                                                      children: [
                                                          (0, r.jsx)(d.Text, {
                                                              variant: 'text-sm/medium',
                                                              color: 'text-link',
                                                              className: N.__invalid_helpCenterLinkText,
                                                              children: y.NW.string(y.t.OahzBQ)
                                                          }),
                                                          (0, r.jsx)(d.rgF, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: N.helpCenterLinkIcon
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 16 }),
                                                  (0, r.jsx)('div', {
                                                      className: N.mediaChannelTagsContainer,
                                                      children: F.map((e) =>
                                                          (0, r.jsx)(
                                                              d.Text,
                                                              {
                                                                  variant: 'text-sm/medium',
                                                                  color: 'text-normal',
                                                                  className: N.mediaChannelTag,
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
                                  H &&
                                      (0, r.jsxs)('div', {
                                          className: l()(N.contentRow, N.contentRowTwo),
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: N.contentMediaContainer,
                                                  children: (0, r.jsxs)('div', {
                                                      className: N.contentImageContainer,
                                                      children: [
                                                          (0, r.jsx)('img', {
                                                              src: E ? S : P,
                                                              alt: '',
                                                              className: l()(N.previewEmbedImage, N.secondaryImage)
                                                          }),
                                                          (0, r.jsx)('img', {
                                                              src: E ? O : w,
                                                              alt: '',
                                                              className: N.previewEmbedImage
                                                          })
                                                      ]
                                                  })
                                              }),
                                              (0, r.jsxs)('article', {
                                                  className: N.contentTextContainer,
                                                  children: [
                                                      (0, r.jsxs)(d.Text, {
                                                          variant: 'text-xxs/bold',
                                                          className: N.serverSubPill,
                                                          children: [
                                                              y.NW.string(y.t.NChGw8),
                                                              ' ',
                                                              (0, r.jsx)('span', {
                                                                  role: 'img',
                                                                  'aria-label': '',
                                                                  children: '\uD83D\uDD25'
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 10 }),
                                                      (0, r.jsx)(d.X6q, {
                                                          variant: 'heading-lg/semibold',
                                                          color: 'header-primary',
                                                          children: y.NW.string(y.t['N/TRra'])
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 8 }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: 'text-md/normal',
                                                          color: 'text-muted',
                                                          children: y.NW.string(y.t.t3yWxM)
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 16 }),
                                                      (0, r.jsx)('div', {
                                                          className: N.mediaChannelTagsContainer,
                                                          children: D.map((e) =>
                                                              (0, r.jsx)(
                                                                  d.Text,
                                                                  {
                                                                      variant: 'text-sm/medium',
                                                                      color: 'text-normal',
                                                                      className: N.mediaChannelTag,
                                                                      children: e
                                                                  },
                                                                  e
                                                              )
                                                          )
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 16 }),
                                                      0 === M.length &&
                                                          (0, r.jsx)(d.gtL, {
                                                              size: d.zxk.Sizes.MEDIUM,
                                                              pauseAnimation: R,
                                                              onClick: z,
                                                              className: N.addChannelButton,
                                                              color: d.zxk.Colors.CUSTOM,
                                                              children: B
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
