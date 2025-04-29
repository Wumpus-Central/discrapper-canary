n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481752),
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
    O = n(461238),
    w = n(906739),
    S = n(965358),
    P = n(420196),
    N = n(433075);
function T(e) {
    let { handleHide: t } = e;
    return (0, r.jsx)(d.P3F, {
        onClick: t,
        className: O.closeButton,
        'aria-label': y.intl.string(y.t.WAI6xs),
        children: (0, r.jsx)(d.Dio, {
            size: 'md',
            color: 'currentColor',
            className: O.closeIcon
        })
    });
}
function I(e) {
    let { username: t, title: n, videoSrc: i, messageCount: l, reaction: s, reactionCount: o, classname: c } = e;
    return (0, r.jsxs)('div', {
        className: a()(O.videoPreview, c),
        children: [
            (0, r.jsx)('div', {
                className: O.authorRow,
                children: (0, r.jsxs)('div', {
                    className: O.rowGroup,
                    children: [
                        (0, r.jsx)(d.Text, {
                            tag: 'span',
                            className: O.author,
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: O.postCreationTimestamp,
                            children: y.intl.string(y.t.mA0IvL)
                        })
                    ]
                })
            }),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-md/extrabold',
                className: O.title,
                color: 'header-primary',
                'aria-hidden': !0,
                children: n
            }),
            (0, r.jsx)(d.LZC, { size: 10 }),
            (0, r.jsx)(h.Z, {
                className: O.video,
                src: i,
                autoPlay: !0,
                loop: !0,
                muted: !0
            }),
            (0, r.jsx)(d.LZC, { size: 10 }),
            (0, r.jsx)('div', {
                className: O.footer,
                children: (0, r.jsxs)('div', {
                    className: O.forumPostControls,
                    children: [
                        (0, r.jsxs)('div', {
                            className: O.messageCountBox,
                            children: [
                                (0, r.jsx)('span', {
                                    className: O.messageCountIcon,
                                    children: (0, r.jsx)(d.kBi, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    children: l
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: O.reactionBox,
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
    let { channel: l } = e,
        h = (0, u.ZP)(),
        E = (0, c.wj)(h),
        k = (0, o.e7)([j.Z], () => j.Z.getGuild(l.guild_id)),
        R = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
        Z = (0, o.e7)([g.Z], () => g.Z.hasHidden(l.id)),
        M = (0, x.C)({
            guildId: l.guild_id,
            channelId: l.id
        }),
        { transitions: A, setVisible: L } = (0, C.H)(),
        F = i.useCallback(() => {
            L(!1), f.Z.hideAdminOnboarding(l.id, !0);
        }, [l, L]);
    i.useEffect(() => {
        (0, p.c)(l.id) || L(!Z);
    }, [l, L, Z]);
    let D = i.useMemo(() => [y.intl.string(y.t['8pEGAw']), y.intl.string(y.t.jwfgDQ), y.intl.string(y.t.mPKs29), y.intl.string(y.t.StRbvL)], []),
        z = i.useMemo(() => [y.intl.string(y.t['m/b58P']), y.intl.string(y.t.MuJSKy), y.intl.string(y.t['d/Wqvr']), y.intl.string(y.t.GJklAw)], []),
        B = () => {
            b.Z.open(l.guild_id, _.pNK.ROLE_SUBSCRIPTIONS);
        },
        H = null != (t = null == k ? void 0 : k.hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && t ? y.intl.string(y.t.n0q7sL) : y.intl.string(y.t.QoYdiY),
        U = null != (n = (null == k ? void 0 : k.hasFeature(_.oNc.CREATOR_MONETIZABLE)) || (null == k ? void 0 : k.hasFeature(_.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) && n,
        V = U ? y.intl.string(y.t['G/7ciY']) : y.intl.string(y.t.IFOiio),
        G = U ? y.intl.string(y.t.GjgQOz) : y.intl.string(y.t.E7AO6u);
    return (0, r.jsx)(r.Fragment, {
        children: A((e, t) =>
            t
                ? (0, r.jsxs)(s.animated.div, {
                      style: e,
                      className: O.container,
                      children: [
                          (0, r.jsxs)('div', {
                              className: a()(O.__invalid_wrapper, O.headerRow),
                              children: [
                                  (0, r.jsxs)(d.Text, {
                                      variant: 'text-xs/normal',
                                      className: O.visibilityInfo,
                                      children: [
                                          (0, r.jsx)(d.d3s, {
                                              size: 'xxs',
                                              color: 'currentColor',
                                              className: O.icon
                                          }),
                                          y.intl.string(y.t.znhX2d)
                                      ]
                                  }),
                                  (0, r.jsx)(T, { handleHide: F })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: O.contentContainer,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: a()(O.contentRow, U && O.contentRowOne),
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: O.contentMediaContainer,
                                              children: (0, r.jsxs)('div', {
                                                  className: O.contentVideoContainer,
                                                  children: [
                                                      (0, r.jsx)(I, {
                                                          username: y.intl.string(y.t.AkORcn),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4',
                                                          title: y.intl.string(y.t.yO6Fxs),
                                                          messageCount: '34',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: O.backgroundVideo
                                                      }),
                                                      (0, r.jsx)(I, {
                                                          username: y.intl.string(y.t.DPg3YG),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4',
                                                          title: y.intl.string(y.t.R5XnCw),
                                                          messageCount: '34',
                                                          reactionCount: '84',
                                                          reaction: '\uD83D\uDC9E',
                                                          classname: a()(O.backgroundVideo, O.secondaryVideo)
                                                      }),
                                                      (0, r.jsx)(I, {
                                                          username: y.intl.string(y.t.KIele3),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4',
                                                          title: y.intl.string(y.t.pt88VV),
                                                          messageCount: '7,103',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: O.highlightVideo
                                                      })
                                                  ]
                                              })
                                          }),
                                          (0, r.jsxs)('article', {
                                              className: O.contentTextContainer,
                                              children: [
                                                  (0, r.jsx)(d.X6q, {
                                                      variant: 'heading-lg/semibold',
                                                      color: 'header-primary',
                                                      children: V
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 8 }),
                                                  (0, r.jsx)(d.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'text-muted',
                                                      children: G
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 16 }),
                                                  (0, r.jsxs)(d.P3F, {
                                                      onClick: () => open(v.Z.getCreatorSupportArticleURL(_.BhN.MEDIA_CHANNEL)),
                                                      className: O.helpCenterLink,
                                                      children: [
                                                          (0, r.jsx)(d.Text, {
                                                              variant: 'text-sm/medium',
                                                              color: 'text-link',
                                                              className: O.__invalid_helpCenterLinkText,
                                                              children: y.intl.string(y.t.OahzBQ)
                                                          }),
                                                          (0, r.jsx)(d.rgF, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: O.helpCenterLinkIcon
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 16 }),
                                                  (0, r.jsx)('div', {
                                                      className: O.mediaChannelTagsContainer,
                                                      children: D.map((e) =>
                                                          (0, r.jsx)(
                                                              d.Text,
                                                              {
                                                                  variant: 'text-sm/medium',
                                                                  color: 'text-normal',
                                                                  className: O.mediaChannelTag,
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
                                      (0, r.jsxs)('div', {
                                          className: a()(O.contentRow, O.contentRowTwo),
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: O.contentMediaContainer,
                                                  children: (0, r.jsxs)('div', {
                                                      className: O.contentImageContainer,
                                                      children: [
                                                          (0, r.jsx)('img', {
                                                              src: E ? P : N,
                                                              alt: '',
                                                              className: a()(O.previewEmbedImage, O.secondaryImage)
                                                          }),
                                                          (0, r.jsx)('img', {
                                                              src: E ? w : S,
                                                              alt: '',
                                                              className: O.previewEmbedImage
                                                          })
                                                      ]
                                                  })
                                              }),
                                              (0, r.jsxs)('article', {
                                                  className: O.contentTextContainer,
                                                  children: [
                                                      (0, r.jsxs)(d.Text, {
                                                          variant: 'text-xxs/bold',
                                                          className: O.serverSubPill,
                                                          children: [
                                                              y.intl.string(y.t.NChGw8),
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
                                                          children: y.intl.string(y.t['N/TRra'])
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 8 }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: 'text-md/normal',
                                                          color: 'text-muted',
                                                          children: y.intl.string(y.t.t3yWxM)
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 16 }),
                                                      (0, r.jsx)('div', {
                                                          className: O.mediaChannelTagsContainer,
                                                          children: z.map((e) =>
                                                              (0, r.jsx)(
                                                                  d.Text,
                                                                  {
                                                                      variant: 'text-sm/medium',
                                                                      color: 'text-normal',
                                                                      className: O.mediaChannelTag,
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
                                                              onClick: B,
                                                              className: O.addChannelButton,
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
