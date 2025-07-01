(n.d(l, { default: () => L }), n(953529), n(539854));
var a = n(255367),
    i = n(73800),
    s = n(442837),
    o = n(481060),
    t = n(596454),
    c = n(471445),
    r = n(686546),
    d = n(313201),
    m = n(339085),
    u = n(633302),
    h = n(565138),
    j = n(372769),
    x = n(703656),
    p = n(592125),
    N = n(430824),
    _ = n(496675),
    C = n(259580),
    g = n(626135),
    k = n(524329),
    E = n(995532),
    Z = n(845606),
    f = n(981631),
    v = n(231338),
    I = n(388032),
    S = n(62311);
let P = (e) => {
        var l;
        let { channelData: n, onClose: i, trackOptionClick: r } = e,
            d = (0, s.e7)([p.Z], () => p.Z.getChannel(n.channel_id)),
            h = (0, s.e7)([_.Z], () => null != d && _.Z.can(v.Pl.VIEW_CHANNEL, d)),
            j = (0, s.e7)([m.ZP], () => (null != n.emoji_id ? m.ZP.getCustomEmojiById(n.emoji_id) : null), [n.emoji_id]),
            N = null != n.emoji_name ? u.ZP.getByName(u.ZP.convertSurrogateToName(n.emoji_name, !1)) : null,
            g = null != (l = (0, c.KS)(d)) ? l : o.VL1;
        return null != d && h
            ? (0, a.jsxs)(o.P3F, {
                  className: S.optionContainer,
                  onClick: () => {
                      (r(), i(), (0, x.XU)(d.guild_id, d.id));
                  },
                  children: [
                      null != j || null != N
                          ? (0, a.jsx)(t.Z, {
                                emojiName: null != n.emoji_id ? (null == j ? void 0 : j.name) : n.emoji_name,
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
                                  children: n.description
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
        let { onClose: n, transitionState: t, guildId: c, isPreview: m } = e,
            u = (0, s.e7)([N.Z], () => N.Z.getGuild(c)),
            {
                welcomeScreen: x,
                fetching: p,
                hasError: _
            } = (0, s.cj)([E.Z], () => ({
                welcomeScreen: E.Z.get(c),
                fetching: E.Z.isFetching(),
                hasError: E.Z.hasError()
            })),
            C = (0, d.Dt)();
        (i.useEffect(() => {
            null == x && (0, k.RM)(c);
        }, [c, x]),
            i.useEffect(() => {
                !1 === p && !0 === _ && null == x && n();
            }, [p, _, n, x]),
            i.useEffect(() => {
                x === E.a && !1 === p && n();
            }, [n, x, p]),
            i.useEffect(() => {
                !0 !== m &&
                    g.default.track(f.rMx.OPEN_MODAL, {
                        type: Z._,
                        guild_id: c
                    });
            }, [c, m]));
        let v = i.useCallback(
            (e) => {
                var l;
                if (null == x || !0 === m) return;
                let n = [],
                    a = [],
                    i = !1;
                (null == (l = x.welcome_channels) ||
                    l.forEach((e) => {
                        (n.push(e.description), a.push(e.channel_id), null != e.emoji_id && (i = !0));
                    }),
                    g.default.track(f.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: c,
                        options: n,
                        options_channel_ids: a,
                        guild_description: x.description,
                        has_custom_emojis: i
                    }));
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
                    parentComponent: 'WelcomeScreenModal',
                    children: (0, a.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE })
                })
              : (0, a.jsxs)(o.Y0X, {
                    transitionState: t,
                    className: S.main,
                    'aria-labelledby': C,
                    parentComponent: 'WelcomeScreenModal',
                    children: [
                        (0, a.jsx)(o.olH, {
                            onClick: n,
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
                                null == (l = x.welcome_channels)
                                    ? void 0
                                    : l.map((e, l) =>
                                          (0, a.jsx)(
                                              P,
                                              {
                                                  channelData: e,
                                                  trackOptionClick: () => v(l),
                                                  onClose: n
                                              },
                                              ''.concat(e.channel_id, '-').concat(l)
                                          )
                                      )
                        }),
                        (0, a.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: S.skipColor,
                            className: S.skip,
                            onClick: n,
                            children: I.intl.string(I.t['jizr8/'])
                        })
                    ]
                });
    };
