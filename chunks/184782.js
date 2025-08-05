(a.d(n, { default: () => w }), a(953529), a(539854));
var i = a(255367),
    l = a(73800),
    o = a(442837),
    s = a(755721),
    t = a(481060),
    c = a(596454),
    r = a(471445),
    d = a(686546),
    m = a(313201),
    u = a(339085),
    _ = a(633302),
    h = a(565138),
    p = a(372769),
    j = a(703656),
    x = a(592125),
    N = a(430824),
    C = a(496675),
    g = a(259580),
    b = a(626135),
    k = a(524329),
    E = a(995532),
    Z = a(845606),
    f = a(981631),
    I = a(231338),
    S = a(388032),
    v = a(62311);
let T = (e) => {
        var n;
        let { channelData: a, onClose: l, trackOptionClick: s } = e,
            d = (0, o.e7)([x.Z], () => x.Z.getChannel(a.channel_id)),
            m = (0, o.e7)([C.Z], () => null != d && C.Z.can(I.Pl.VIEW_CHANNEL, d)),
            h = (0, o.e7)([u.ZP], () => (null != a.emoji_id ? u.ZP.getCustomEmojiById(a.emoji_id) : null), [a.emoji_id]),
            p = null != a.emoji_name ? _.ZP.getByName(_.ZP.convertSurrogateToName(a.emoji_name, !1)) : null,
            N = null != (n = (0, r.KS)(d)) ? n : t.VL1;
        return null != d && m
            ? (0, i.jsxs)(t.P3F, {
                  className: v.optionContainer,
                  onClick: () => {
                      (s(), l(), (0, j.XU)(d.guild_id, d.id));
                  },
                  children: [
                      null != h || null != p
                          ? (0, i.jsx)(c.Z, {
                                emojiName: null != a.emoji_id ? (null == h ? void 0 : h.name) : a.emoji_name,
                                animated: null != h && h.animated,
                                emojiId: null == h ? void 0 : h.id,
                                autoplay: !0,
                                className: v.optionEmoji
                            })
                          : (0, i.jsx)(N, { className: v.channelIcon }),
                      (0, i.jsxs)('div', {
                          className: v.optionTextContainer,
                          children: [
                              (0, i.jsx)(t.Text, {
                                  variant: 'text-md/normal',
                                  className: v.channelDescription,
                                  children: a.description
                              }),
                              (0, i.jsxs)(t.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: [
                                      (0, i.jsx)(N, {
                                          className: v.channelTitleIcon,
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                                      (0, i.jsx)('span', { children: d.name })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(g.Z, {
                          direction: g.Z.Directions.RIGHT,
                          className: v.optionArrow
                      })
                  ]
              })
            : null;
    },
    w = (e) => {
        var n;
        let { onClose: a, transitionState: c, guildId: r, isPreview: u } = e,
            _ = (0, o.e7)([N.Z], () => N.Z.getGuild(r)),
            {
                welcomeScreen: j,
                fetching: x,
                hasError: C
            } = (0, o.cj)([E.Z], () => ({
                welcomeScreen: E.Z.get(r),
                fetching: E.Z.isFetching(),
                hasError: E.Z.hasError()
            })),
            g = (0, m.Dt)();
        (l.useEffect(() => {
            null == j && (0, k.RM)(r);
        }, [r, j]),
            l.useEffect(() => {
                !1 === x && !0 === C && null == j && a();
            }, [x, C, a, j]),
            l.useEffect(() => {
                j === E.a && !1 === x && a();
            }, [a, j, x]),
            l.useEffect(() => {
                !0 !== u &&
                    b.default.track(f.rMx.OPEN_MODAL, {
                        type: Z._,
                        guild_id: r
                    });
            }, [r, u]));
        let I = l.useCallback(
            (e) => {
                var n;
                if (null == j || !0 === u) return;
                let a = [],
                    i = [],
                    l = !1;
                (null == (n = j.welcome_channels) ||
                    n.forEach((e) => {
                        (a.push(e.description), i.push(e.channel_id), null != e.emoji_id && (l = !0));
                    }),
                    b.default.track(f.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: r,
                        options: a,
                        options_channel_ids: i,
                        guild_description: j.description,
                        has_custom_emojis: l
                    }));
            },
            [r, u, j]
        );
        return null == _
            ? null
            : null == j
              ? (0, i.jsx)(t.Y0X, {
                    transitionState: c,
                    className: v.main,
                    'aria-label': S.intl.string(S.t.ZTNur6),
                    parentComponent: 'WelcomeScreenModal',
                    children: (0, i.jsx)(t.$jN, { type: t.$jN.Type.SPINNING_CIRCLE })
                })
              : (0, i.jsxs)(t.Y0X, {
                    transitionState: c,
                    className: v.main,
                    'aria-labelledby': g,
                    parentComponent: 'WelcomeScreenModal',
                    children: [
                        (0, i.jsx)(t.olH, {
                            onClick: a,
                            className: v.close
                        }),
                        (0, i.jsx)(d.ZP, {
                            mask: d.ZP.Masks.SQUIRCLE,
                            width: 64,
                            height: 64,
                            className: v.guildIcon,
                            children: (0, i.jsx)(h.Z, {
                                size: h.Z.Sizes.LARGER,
                                guild: _,
                                active: !0,
                                animate: !0,
                                tabIndex: -1
                            })
                        }),
                        (0, i.jsx)(t.X6q, {
                            variant: 'heading-xl/semibold',
                            className: v.header,
                            id: g,
                            children: S.intl.format(S.t['0aydCA'], {
                                guildName: _.name,
                                guildNameHook: (e, n) =>
                                    (0, i.jsxs)(
                                        'span',
                                        {
                                            children: [
                                                (0, i.jsx)(p.Z, {
                                                    guild: _,
                                                    className: v.headerGuildBadge,
                                                    flowerStarClassName: v.flowerStar,
                                                    tooltipColor: t.ua7.Colors.PRIMARY
                                                }),
                                                (0, i.jsx)('strong', {
                                                    className: v.headerGuildName,
                                                    children: e
                                                })
                                            ]
                                        },
                                        n
                                    )
                            })
                        }),
                        null != j.description
                            ? (0, i.jsx)(t.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: v.guildDescription,
                                  children: j.description
                              })
                            : null,
                        (0, i.jsx)(t.vwX, {
                            className: v.choiceHeader,
                            children: S.intl.string(S.t['haj5+v'])
                        }),
                        (0, i.jsx)('div', {
                            className: v.options,
                            children:
                                null == (n = j.welcome_channels)
                                    ? void 0
                                    : n.map((e, n) =>
                                          (0, i.jsx)(
                                              T,
                                              {
                                                  channelData: e,
                                                  trackOptionClick: () => I(n),
                                                  onClose: a
                                              },
                                              ''.concat(e.channel_id, '-').concat(n)
                                          )
                                      )
                        }),
                        (0, i.jsx)(s.zx, {
                            look: s.zx.Looks.LINK,
                            color: v.skipColor,
                            className: v.skip,
                            onClick: a,
                            children: S.intl.string(S.t['jizr8/'])
                        })
                    ]
                });
    };
