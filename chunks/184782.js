a.d(n, { default: () => T }), a(953529), a(539854);
var i = a(255367),
    l = a(73800),
    o = a(442837),
    s = a(481060),
    t = a(596454),
    c = a(471445),
    r = a(686546),
    d = a(313201),
    m = a(339085),
    u = a(633302),
    _ = a(565138),
    h = a(372769),
    p = a(703656),
    j = a(592125),
    x = a(430824),
    N = a(496675),
    C = a(259580),
    g = a(626135),
    b = a(524329),
    k = a(995532),
    E = a(845606),
    Z = a(981631),
    f = a(231338),
    I = a(388032),
    S = a(62311);
let v = (e) => {
        var n;
        let { channelData: a, onClose: l, trackOptionClick: r } = e,
            d = (0, o.e7)([j.Z], () => j.Z.getChannel(a.channel_id)),
            _ = (0, o.e7)([N.Z], () => null != d && N.Z.can(f.Pl.VIEW_CHANNEL, d)),
            h = (0, o.e7)([m.ZP], () => (null != a.emoji_id ? m.ZP.getCustomEmojiById(a.emoji_id) : null), [a.emoji_id]),
            x = null != a.emoji_name ? u.ZP.getByName(u.ZP.convertSurrogateToName(a.emoji_name, !1)) : null,
            g = null != (n = (0, c.KS)(d)) ? n : s.VL1;
        return null != d && _
            ? (0, i.jsxs)(s.P3F, {
                  className: S.optionContainer,
                  onClick: () => {
                      r(), l(), (0, p.XU)(d.guild_id, d.id);
                  },
                  children: [
                      null != h || null != x
                          ? (0, i.jsx)(t.Z, {
                                emojiName: null != a.emoji_id ? (null == h ? void 0 : h.name) : a.emoji_name,
                                animated: null != h && h.animated,
                                emojiId: null == h ? void 0 : h.id,
                                autoplay: !0,
                                className: S.optionEmoji
                            })
                          : (0, i.jsx)(g, { className: S.channelIcon }),
                      (0, i.jsxs)('div', {
                          className: S.optionTextContainer,
                          children: [
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  className: S.channelDescription,
                                  children: a.description
                              }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: [
                                      (0, i.jsx)(g, {
                                          className: S.channelTitleIcon,
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                                      (0, i.jsx)('span', { children: d.name })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(C.Z, {
                          direction: C.Z.Directions.RIGHT,
                          className: S.optionArrow
                      })
                  ]
              })
            : null;
    },
    T = (e) => {
        var n;
        let { onClose: a, transitionState: t, guildId: c, isPreview: m } = e,
            u = (0, o.e7)([x.Z], () => x.Z.getGuild(c)),
            {
                welcomeScreen: p,
                fetching: j,
                hasError: N
            } = (0, o.cj)([k.Z], () => ({
                welcomeScreen: k.Z.get(c),
                fetching: k.Z.isFetching(),
                hasError: k.Z.hasError()
            })),
            C = (0, d.Dt)();
        l.useEffect(() => {
            null == p && (0, b.RM)(c);
        }, [c, p]),
            l.useEffect(() => {
                !1 === j && !0 === N && null == p && a();
            }, [j, N, a, p]),
            l.useEffect(() => {
                p === k.a && !1 === j && a();
            }, [a, p, j]),
            l.useEffect(() => {
                !0 !== m &&
                    g.default.track(Z.rMx.OPEN_MODAL, {
                        type: E._,
                        guild_id: c
                    });
            }, [c, m]);
        let f = l.useCallback(
            (e) => {
                var n;
                if (null == p || !0 === m) return;
                let a = [],
                    i = [],
                    l = !1;
                null == (n = p.welcome_channels) ||
                    n.forEach((e) => {
                        a.push(e.description), i.push(e.channel_id), null != e.emoji_id && (l = !0);
                    }),
                    g.default.track(Z.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: c,
                        options: a,
                        options_channel_ids: i,
                        guild_description: p.description,
                        has_custom_emojis: l
                    });
            },
            [c, m, p]
        );
        return null == u
            ? null
            : null == p
              ? (0, i.jsx)(s.Y0X, {
                    transitionState: t,
                    className: S.main,
                    'aria-label': I.intl.string(I.t.ZTNur6),
                    parentComponent: 'WelcomeScreenModal',
                    children: (0, i.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE })
                })
              : (0, i.jsxs)(s.Y0X, {
                    transitionState: t,
                    className: S.main,
                    'aria-labelledby': C,
                    parentComponent: 'WelcomeScreenModal',
                    children: [
                        (0, i.jsx)(s.olH, {
                            onClick: a,
                            className: S.close
                        }),
                        (0, i.jsx)(r.ZP, {
                            mask: r.ZP.Masks.SQUIRCLE,
                            width: 64,
                            height: 64,
                            className: S.guildIcon,
                            children: (0, i.jsx)(_.Z, {
                                size: _.Z.Sizes.LARGER,
                                guild: u,
                                active: !0,
                                animate: !0,
                                tabIndex: -1
                            })
                        }),
                        (0, i.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            className: S.header,
                            id: C,
                            children: I.intl.format(I.t['0aydCA'], {
                                guildName: u.name,
                                guildNameHook: (e, n) =>
                                    (0, i.jsxs)(
                                        'span',
                                        {
                                            children: [
                                                (0, i.jsx)(h.Z, {
                                                    guild: u,
                                                    className: S.headerGuildBadge,
                                                    flowerStarClassName: S.flowerStar,
                                                    tooltipColor: s.ua7.Colors.PRIMARY
                                                }),
                                                (0, i.jsx)('strong', {
                                                    className: S.headerGuildName,
                                                    children: e
                                                })
                                            ]
                                        },
                                        n
                                    )
                            })
                        }),
                        null != p.description
                            ? (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: S.guildDescription,
                                  children: p.description
                              })
                            : null,
                        (0, i.jsx)(s.vwX, {
                            className: S.choiceHeader,
                            children: I.intl.string(I.t['haj5+v'])
                        }),
                        (0, i.jsx)('div', {
                            className: S.options,
                            children:
                                null == (n = p.welcome_channels)
                                    ? void 0
                                    : n.map((e, n) =>
                                          (0, i.jsx)(
                                              v,
                                              {
                                                  channelData: e,
                                                  trackOptionClick: () => f(n),
                                                  onClose: a
                                              },
                                              ''.concat(e.channel_id, '-').concat(n)
                                          )
                                      )
                        }),
                        (0, i.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: S.skipColor,
                            className: S.skip,
                            onClick: a,
                            children: I.intl.string(I.t['jizr8/'])
                        })
                    ]
                });
    };
