n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(71347),
    o = n(442837),
    c = n(780384),
    d = n(755721),
    u = n(481060),
    m = n(410030),
    h = n(607070),
    g = n(70097),
    f = n(961675),
    x = n(883429),
    p = n(432771),
    b = n(406074),
    j = n(434404),
    v = n(430824),
    C = n(63063),
    _ = n(595433),
    y = n(981631),
    O = n(388032),
    w = n(461238),
    N = n(906739),
    S = n(965358),
    T = n(420196),
    P = n(433075);
function I(e) {
    let { handleHide: t } = e;
    return (0, r.jsx)(u.P3F, {
        onClick: t,
        className: w.closeButton,
        'aria-label': O.intl.string(O.t.WAI6xs),
        children: (0, r.jsx)(u.Dio, {
            size: 'md',
            color: 'currentColor',
            className: w.closeIcon
        })
    });
}
function E(e) {
    let { username: t, title: n, videoSrc: i, messageCount: a, reaction: s, reactionCount: o, classname: c } = e;
    return (0, r.jsxs)('div', {
        className: l()(w.videoPreview, c),
        children: [
            (0, r.jsx)('div', {
                className: w.authorRow,
                children: (0, r.jsxs)('div', {
                    className: w.rowGroup,
                    children: [
                        (0, r.jsx)(u.Text, {
                            tag: 'span',
                            className: w.author,
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: w.postCreationTimestamp,
                            children: O.intl.string(O.t.mA0IvL)
                        })
                    ]
                })
            }),
            (0, r.jsx)(u.X6q, {
                variant: 'heading-md/extrabold',
                className: w.title,
                color: 'header-primary',
                'aria-hidden': !0,
                children: n
            }),
            (0, r.jsx)(u.LZC, { size: 10 }),
            (0, r.jsx)(g.Z, {
                className: w.video,
                src: i,
                autoPlay: !0,
                loop: !0,
                muted: !0
            }),
            (0, r.jsx)(u.LZC, { size: 10 }),
            (0, r.jsx)('div', {
                className: w.footer,
                children: (0, r.jsxs)('div', {
                    className: w.forumPostControls,
                    children: [
                        (0, r.jsxs)('div', {
                            className: w.messageCountBox,
                            children: [
                                (0, r.jsx)('span', {
                                    className: w.messageCountIcon,
                                    children: (0, r.jsx)(u.kBi, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    children: a
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: w.reactionBox,
                            children: [
                                (0, r.jsx)('span', {
                                    role: 'img',
                                    'aria-label': '',
                                    children: s
                                }),
                                (0, r.jsx)(u.Text, {
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
let R = (e) => {
    var t, n;
    let { channel: a } = e,
        g = (0, m.ZP)(),
        R = (0, c.wj)(g),
        M = (0, o.e7)([v.Z], () => v.Z.getGuild(a.guild_id)),
        Z = (0, o.e7)([h.Z], () => h.Z.useReducedMotion),
        k = (0, o.e7)([f.Z], () => f.Z.hasHidden(a.id)),
        A = (0, b.C)({
            guildId: a.guild_id,
            channelId: a.id
        }),
        { transitions: L, setVisible: F } = (0, _.H)(),
        D = i.useCallback(() => {
            (F(!1), x.Z.hideAdminOnboarding(a.id, !0));
        }, [a, F]);
    i.useEffect(() => {
        (0, p.c)(a.id) || F(!k);
    }, [a, F, k]);
    let z = i.useMemo(() => [O.intl.string(O.t['8pEGAw']), O.intl.string(O.t.jwfgDQ), O.intl.string(O.t.mPKs29), O.intl.string(O.t.StRbvL)], []),
        B = i.useMemo(() => [O.intl.string(O.t['m/b58P']), O.intl.string(O.t.MuJSKy), O.intl.string(O.t['d/Wqvr']), O.intl.string(O.t.GJklAw)], []),
        H = () => {
            j.Z.open(a.guild_id, y.pNK.ROLE_SUBSCRIPTIONS);
        },
        U = null != (t = null == M ? void 0 : M.features.has(y.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && t ? O.intl.string(O.t.n0q7sL) : O.intl.string(O.t.QoYdiY),
        G = null != (n = (null == M ? void 0 : M.features.has(y.oNc.CREATOR_MONETIZABLE)) || (null == M ? void 0 : M.features.has(y.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) && n,
        V = G ? O.intl.string(O.t['G/7ciY']) : O.intl.string(O.t.IFOiio),
        q = G ? O.intl.string(O.t.GjgQOz) : O.intl.string(O.t.E7AO6u);
    return (0, r.jsx)(r.Fragment, {
        children: L((e, t) =>
            t
                ? (0, r.jsxs)(s.animated.div, {
                      style: e,
                      className: w.container,
                      children: [
                          (0, r.jsxs)('div', {
                              className: w.headerRow,
                              children: [
                                  (0, r.jsxs)(u.Text, {
                                      variant: 'text-xs/normal',
                                      className: w.visibilityInfo,
                                      children: [
                                          (0, r.jsx)(u.d3s, {
                                              size: 'xxs',
                                              color: 'currentColor',
                                              className: w.icon
                                          }),
                                          O.intl.string(O.t.znhX2d)
                                      ]
                                  }),
                                  (0, r.jsx)(I, { handleHide: D })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: w.contentContainer,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: l()(w.contentRow, G && w.contentRowOne),
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: w.contentMediaContainer,
                                              children: (0, r.jsxs)('div', {
                                                  className: w.contentVideoContainer,
                                                  children: [
                                                      (0, r.jsx)(E, {
                                                          username: O.intl.string(O.t.AkORcn),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4',
                                                          title: O.intl.string(O.t.yO6Fxs),
                                                          messageCount: '34',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: w.backgroundVideo
                                                      }),
                                                      (0, r.jsx)(E, {
                                                          username: O.intl.string(O.t.DPg3YG),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4',
                                                          title: O.intl.string(O.t.R5XnCw),
                                                          messageCount: '34',
                                                          reactionCount: '84',
                                                          reaction: '\uD83D\uDC9E',
                                                          classname: w.backgroundVideo
                                                      }),
                                                      (0, r.jsx)(E, {
                                                          username: O.intl.string(O.t.KIele3),
                                                          videoSrc: 'https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4',
                                                          title: O.intl.string(O.t.pt88VV),
                                                          messageCount: '7,103',
                                                          reaction: '\u26A1️',
                                                          reactionCount: '724',
                                                          classname: w.highlightVideo
                                                      })
                                                  ]
                                              })
                                          }),
                                          (0, r.jsxs)('article', {
                                              className: w.contentTextContainer,
                                              children: [
                                                  (0, r.jsx)(u.X6q, {
                                                      variant: 'heading-lg/semibold',
                                                      color: 'header-primary',
                                                      children: V
                                                  }),
                                                  (0, r.jsx)(u.LZC, { size: 8 }),
                                                  (0, r.jsx)(u.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'text-muted',
                                                      children: q
                                                  }),
                                                  (0, r.jsx)(u.LZC, { size: 16 }),
                                                  (0, r.jsxs)(u.P3F, {
                                                      onClick: () => open(C.Z.getCreatorSupportArticleURL(y.BhN.MEDIA_CHANNEL)),
                                                      className: w.helpCenterLink,
                                                      children: [
                                                          (0, r.jsx)(u.Text, {
                                                              variant: 'text-sm/medium',
                                                              color: 'text-link',
                                                              children: O.intl.string(O.t.OahzBQ)
                                                          }),
                                                          (0, r.jsx)(u.rgF, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: w.helpCenterLinkIcon
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)(u.LZC, { size: 16 }),
                                                  (0, r.jsx)('div', {
                                                      className: w.mediaChannelTagsContainer,
                                                      children: z.map((e) =>
                                                          (0, r.jsx)(
                                                              u.Text,
                                                              {
                                                                  variant: 'text-sm/medium',
                                                                  color: 'text-default',
                                                                  className: w.mediaChannelTag,
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
                                  G &&
                                      (0, r.jsxs)('div', {
                                          className: l()(w.contentRow, w.contentRowTwo),
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: w.contentMediaContainer,
                                                  children: (0, r.jsxs)('div', {
                                                      className: w.contentImageContainer,
                                                      children: [
                                                          (0, r.jsx)('img', {
                                                              src: R ? T : P,
                                                              alt: '',
                                                              className: w.previewEmbedImage
                                                          }),
                                                          (0, r.jsx)('img', {
                                                              src: R ? N : S,
                                                              alt: '',
                                                              className: w.previewEmbedImage
                                                          })
                                                      ]
                                                  })
                                              }),
                                              (0, r.jsxs)('article', {
                                                  className: w.contentTextContainer,
                                                  children: [
                                                      (0, r.jsxs)(u.Text, {
                                                          variant: 'text-xxs/bold',
                                                          className: w.serverSubPill,
                                                          children: [
                                                              O.intl.string(O.t.NChGw8),
                                                              ' ',
                                                              (0, r.jsx)('span', {
                                                                  role: 'img',
                                                                  'aria-label': '',
                                                                  children: '\uD83D\uDD25'
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsx)(u.LZC, { size: 10 }),
                                                      (0, r.jsx)(u.X6q, {
                                                          variant: 'heading-lg/semibold',
                                                          color: 'header-primary',
                                                          children: O.intl.string(O.t['N/TRra'])
                                                      }),
                                                      (0, r.jsx)(u.LZC, { size: 8 }),
                                                      (0, r.jsx)(u.Text, {
                                                          variant: 'text-md/normal',
                                                          color: 'text-muted',
                                                          children: O.intl.string(O.t.t3yWxM)
                                                      }),
                                                      (0, r.jsx)(u.LZC, { size: 16 }),
                                                      (0, r.jsx)('div', {
                                                          className: w.mediaChannelTagsContainer,
                                                          children: B.map((e) =>
                                                              (0, r.jsx)(
                                                                  u.Text,
                                                                  {
                                                                      variant: 'text-sm/medium',
                                                                      color: 'text-default',
                                                                      className: w.mediaChannelTag,
                                                                      children: e
                                                                  },
                                                                  e
                                                              )
                                                          )
                                                      }),
                                                      (0, r.jsx)(u.LZC, { size: 16 }),
                                                      0 === A.length &&
                                                          (0, r.jsx)(u.gtL, {
                                                              size: d.zx.Sizes.MEDIUM,
                                                              pauseAnimation: Z,
                                                              onClick: H,
                                                              className: w.addChannelButton,
                                                              color: d.zx.Colors.CUSTOM,
                                                              children: U
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
