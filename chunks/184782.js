i.d(a, { default: () => T }), i(953529), i(539854);
var n = i(200651),
    l = i(192379),
    o = i(442837),
    s = i(481060),
    t = i(596454),
    c = i(471445),
    r = i(686546),
    d = i(313201),
    u = i(339085),
    m = i(633302),
    _ = i(565138),
    h = i(372769),
    p = i(703656),
    j = i(592125),
    x = i(430824),
    N = i(496675),
    C = i(259580),
    g = i(626135),
    b = i(524329),
    k = i(995532),
    E = i(845606),
    Z = i(981631),
    f = i(231338),
    I = i(388032),
    v = i(62311);
let S = (e) => {
        var a;
        let { channelData: i, onClose: l, trackOptionClick: r } = e,
            d = (0, o.e7)([j.Z], () => j.Z.getChannel(i.channel_id)),
            _ = (0, o.e7)([N.Z], () => null != d && N.Z.can(f.Pl.VIEW_CHANNEL, d)),
            h = (0, o.e7)([u.ZP], () => (null != i.emoji_id ? u.ZP.getCustomEmojiById(i.emoji_id) : null), [i.emoji_id]),
            x = null != i.emoji_name ? m.ZP.getByName(m.ZP.convertSurrogateToName(i.emoji_name, !1)) : null,
            g = null != (a = (0, c.KS)(d)) ? a : s.VL1;
        return null != d && _
            ? (0, n.jsxs)(s.P3F, {
                  className: v.optionContainer,
                  onClick: () => {
                      r(), l(), (0, p.XU)(d.guild_id, d.id);
                  },
                  children: [
                      null != h || null != x
                          ? (0, n.jsx)(t.Z, {
                                emojiName: null != i.emoji_id ? (null == h ? void 0 : h.name) : i.emoji_name,
                                animated: null != h && h.animated,
                                emojiId: null == h ? void 0 : h.id,
                                autoplay: !0,
                                className: v.optionEmoji
                            })
                          : (0, n.jsx)(g, { className: v.channelIcon }),
                      (0, n.jsxs)('div', {
                          className: v.optionTextContainer,
                          children: [
                              (0, n.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  className: v.channelDescription,
                                  children: i.description
                              }),
                              (0, n.jsxs)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: [
                                      (0, n.jsx)(g, {
                                          className: v.channelTitleIcon,
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                                      (0, n.jsx)('span', { children: d.name })
                                  ]
                              })
                          ]
                      }),
                      (0, n.jsx)(C.Z, {
                          direction: C.Z.Directions.RIGHT,
                          className: v.optionArrow
                      })
                  ]
              })
            : null;
    },
    T = (e) => {
        var a;
        let { onClose: i, transitionState: t, guildId: c, isPreview: u } = e,
            m = (0, o.e7)([x.Z], () => x.Z.getGuild(c)),
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
                !1 === j && !0 === N && null == p && i();
            }, [j, N, i, p]),
            l.useEffect(() => {
                p === k.a && !1 === j && i();
            }, [i, p, j]),
            l.useEffect(() => {
                !0 !== u &&
                    g.default.track(Z.rMx.OPEN_MODAL, {
                        type: E._,
                        guild_id: c
                    });
            }, [c, u]);
        let f = l.useCallback(
            (e) => {
                var a;
                if (null == p || !0 === u) return;
                let i = [],
                    n = [],
                    l = !1;
                null == (a = p.welcome_channels) ||
                    a.forEach((e) => {
                        i.push(e.description), n.push(e.channel_id), null != e.emoji_id && (l = !0);
                    }),
                    g.default.track(Z.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: c,
                        options: i,
                        options_channel_ids: n,
                        guild_description: p.description,
                        has_custom_emojis: l
                    });
            },
            [c, u, p]
        );
        return null == m
            ? null
            : null == p
              ? (0, n.jsx)(s.Y0X, {
                    transitionState: t,
                    className: v.main,
                    'aria-label': I.NW.string(I.t.ZTNur6),
                    children: (0, n.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE })
                })
              : (0, n.jsxs)(s.Y0X, {
                    transitionState: t,
                    className: v.main,
                    'aria-labelledby': C,
                    children: [
                        (0, n.jsx)(s.olH, {
                            onClick: i,
                            className: v.close
                        }),
                        (0, n.jsx)(r.ZP, {
                            mask: r.ZP.Masks.SQUIRCLE,
                            width: 64,
                            height: 64,
                            className: v.guildIcon,
                            children: (0, n.jsx)(_.Z, {
                                size: _.Z.Sizes.LARGER,
                                guild: m,
                                active: !0,
                                animate: !0,
                                tabIndex: -1
                            })
                        }),
                        (0, n.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            className: v.header,
                            id: C,
                            children: I.NW.format(I.t['0aydCA'], {
                                guildName: m.name,
                                guildNameHook: (e, a) =>
                                    (0, n.jsxs)(
                                        'span',
                                        {
                                            children: [
                                                (0, n.jsx)(h.Z, {
                                                    guild: m,
                                                    className: v.headerGuildBadge,
                                                    flowerStarClassName: v.flowerStar,
                                                    tooltipColor: s.ua7.Colors.PRIMARY
                                                }),
                                                (0, n.jsx)('strong', {
                                                    className: v.headerGuildName,
                                                    children: e
                                                })
                                            ]
                                        },
                                        a
                                    )
                            })
                        }),
                        null != p.description
                            ? (0, n.jsx)(s.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: v.guildDescription,
                                  children: p.description
                              })
                            : null,
                        (0, n.jsx)(s.vwX, {
                            className: v.choiceHeader,
                            children: I.NW.string(I.t['haj5+v'])
                        }),
                        (0, n.jsx)('div', {
                            className: v.options,
                            children:
                                null == (a = p.welcome_channels)
                                    ? void 0
                                    : a.map((e, a) =>
                                          (0, n.jsx)(
                                              S,
                                              {
                                                  channelData: e,
                                                  trackOptionClick: () => f(a),
                                                  onClose: i
                                              },
                                              ''.concat(e.channel_id, '-').concat(a)
                                          )
                                      )
                        }),
                        (0, n.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: v.skipColor,
                            className: v.skip,
                            onClick: i,
                            children: I.NW.string(I.t['jizr8/'])
                        })
                    ]
                });
    };
