i.d(l, { default: () => L }), i(653041);
var a = i(200651),
    n = i(192379),
    s = i(442837),
    o = i(481060),
    t = i(596454),
    c = i(471445),
    r = i(686546),
    d = i(313201),
    m = i(339085),
    u = i(633302),
    h = i(565138),
    j = i(372769),
    x = i(703656),
    N = i(592125),
    p = i(430824),
    _ = i(496675),
    C = i(259580),
    g = i(626135),
    k = i(524329),
    E = i(995532),
    Z = i(845606),
    v = i(981631),
    f = i(231338),
    I = i(388032),
    S = i(154055);
let P = (e) => {
        var l;
        let { channelData: i, onClose: n, trackOptionClick: r } = e,
            d = (0, s.e7)([N.Z], () => N.Z.getChannel(i.channel_id)),
            h = (0, s.e7)([_.Z], () => null != d && _.Z.can(f.Pl.VIEW_CHANNEL, d)),
            j = (0, s.e7)([m.ZP], () => (null != i.emoji_id ? m.ZP.getCustomEmojiById(i.emoji_id) : null), [i.emoji_id]),
            p = null != i.emoji_name ? u.ZP.getByName(u.ZP.convertSurrogateToName(i.emoji_name, !1)) : null,
            g = null !== (l = (0, c.KS)(d)) && void 0 !== l ? l : o.VL1;
        return null != d && h
            ? (0, a.jsxs)(o.P3F, {
                  className: S.optionContainer,
                  onClick: () => {
                      r(), n(), (0, x.XU)(d.guild_id, d.id);
                  },
                  children: [
                      null != j || null != p
                          ? (0, a.jsx)(t.Z, {
                                emojiName: null != i.emoji_id ? (null == j ? void 0 : j.name) : i.emoji_name,
                                animated: null != j && j.animated,
                                emojiId: null == j ? void 0 : j.id,
                                autoplay: !0,
                                className: S.optionEmoji
                            })
                          : (0, a.jsx)(g, { className: S.channelIcon }),
                      (0, a.jsxs)('div', {
                          className: S.optionTextContainer,
                          children: [
                              (0, a.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  className: S.channelDescription,
                                  children: i.description
                              }),
                              (0, a.jsxs)(o.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: [
                                      (0, a.jsx)(g, {
                                          className: S.channelTitleIcon,
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                                      (0, a.jsx)('span', { children: d.name })
                                  ]
                              })
                          ]
                      }),
                      (0, a.jsx)(C.Z, {
                          direction: C.Z.Directions.RIGHT,
                          className: S.optionArrow
                      })
                  ]
              })
            : null;
    },
    L = (e) => {
        var l;
        let { onClose: i, transitionState: t, guildId: c, isPreview: m } = e,
            u = (0, s.e7)([p.Z], () => p.Z.getGuild(c)),
            {
                welcomeScreen: x,
                fetching: N,
                hasError: _
            } = (0, s.cj)([E.Z], () => ({
                welcomeScreen: E.Z.get(c),
                fetching: E.Z.isFetching(),
                hasError: E.Z.hasError()
            })),
            C = (0, d.Dt)();
        n.useEffect(() => {
            null == x && (0, k.RM)(c);
        }, [c, x]),
            n.useEffect(() => {
                !1 === N && !0 === _ && null == x && i();
            }, [N, _, i, x]),
            n.useEffect(() => {
                x === E.a && !1 === N && i();
            }, [i, x, N]),
            n.useEffect(() => {
                !0 !== m &&
                    g.default.track(v.rMx.OPEN_MODAL, {
                        type: Z._,
                        guild_id: c
                    });
            }, [c, m]);
        let f = n.useCallback(
            (e) => {
                var l;
                if (null == x || !0 === m) return;
                let i = [],
                    a = [],
                    n = !1;
                null === (l = x.welcome_channels) ||
                    void 0 === l ||
                    l.forEach((e) => {
                        i.push(e.description), a.push(e.channel_id), null != e.emoji_id && (n = !0);
                    }),
                    g.default.track(v.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: c,
                        options: i,
                        options_channel_ids: a,
                        guild_description: x.description,
                        has_custom_emojis: n
                    });
            },
            [c, m, x]
        );
        return null == u
            ? null
            : null == x
              ? (0, a.jsx)(o.Y0X, {
                    transitionState: t,
                    className: S.main,
                    'aria-label': I.intl.string(I.t.ZTNur6),
                    children: (0, a.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE })
                })
              : (0, a.jsxs)(o.Y0X, {
                    transitionState: t,
                    className: S.main,
                    'aria-labelledby': C,
                    children: [
                        (0, a.jsx)(o.olH, {
                            onClick: i,
                            className: S.close
                        }),
                        (0, a.jsx)(r.ZP, {
                            mask: r.ZP.Masks.SQUIRCLE,
                            width: 64,
                            height: 64,
                            className: S.guildIcon,
                            children: (0, a.jsx)(h.Z, {
                                size: h.Z.Sizes.LARGER,
                                guild: u,
                                active: !0,
                                animate: !0,
                                tabIndex: -1
                            })
                        }),
                        (0, a.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            className: S.header,
                            id: C,
                            children: I.intl.format(I.t['0aydCA'], {
                                guildName: u.name,
                                guildNameHook: (e, l) =>
                                    (0, a.jsxs)(
                                        'span',
                                        {
                                            children: [
                                                (0, a.jsx)(j.Z, {
                                                    guild: u,
                                                    className: S.headerGuildBadge,
                                                    flowerStarClassName: S.flowerStar,
                                                    tooltipColor: o.ua7.Colors.PRIMARY
                                                }),
                                                (0, a.jsx)('strong', {
                                                    className: S.headerGuildName,
                                                    children: e
                                                })
                                            ]
                                        },
                                        l
                                    )
                            })
                        }),
                        null != x.description
                            ? (0, a.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: S.guildDescription,
                                  children: x.description
                              })
                            : null,
                        (0, a.jsx)(o.vwX, {
                            className: S.choiceHeader,
                            children: I.intl.string(I.t['haj5+v'])
                        }),
                        (0, a.jsx)('div', {
                            className: S.options,
                            children:
                                null === (l = x.welcome_channels) || void 0 === l
                                    ? void 0
                                    : l.map((e, l) =>
                                          (0, a.jsx)(
                                              P,
                                              {
                                                  channelData: e,
                                                  trackOptionClick: () => f(l),
                                                  onClose: i
                                              },
                                              ''.concat(e.channel_id, '-').concat(l)
                                          )
                                      )
                        }),
                        (0, a.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: S.skipColor,
                            className: S.skip,
                            onClick: i,
                            children: I.intl.string(I.t['jizr8/'])
                        })
                    ]
                });
    };
