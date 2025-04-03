a.d(l, { default: () => L }), a(266796), a(653041);
var i = a(200651),
    n = a(192379),
    s = a(442837),
    o = a(481060),
    t = a(596454),
    c = a(471445),
    r = a(686546),
    d = a(313201),
    m = a(339085),
    u = a(633302),
    h = a(565138),
    j = a(372769),
    N = a(703656),
    x = a(592125),
    p = a(430824),
    _ = a(496675),
    C = a(259580),
    g = a(626135),
    k = a(524329),
    E = a(995532),
    Z = a(845606),
    f = a(981631),
    v = a(231338),
    I = a(388032),
    S = a(62311);
let P = (e) => {
        var l;
        let { channelData: a, onClose: n, trackOptionClick: r } = e,
            d = (0, s.e7)([x.Z], () => x.Z.getChannel(a.channel_id)),
            h = (0, s.e7)([_.Z], () => null != d && _.Z.can(v.Pl.VIEW_CHANNEL, d)),
            j = (0, s.e7)([m.ZP], () => (null != a.emoji_id ? m.ZP.getCustomEmojiById(a.emoji_id) : null), [a.emoji_id]),
            p = null != a.emoji_name ? u.ZP.getByName(u.ZP.convertSurrogateToName(a.emoji_name, !1)) : null,
            g = null != (l = (0, c.KS)(d)) ? l : o.VL1;
        return null != d && h
            ? (0, i.jsxs)(o.P3F, {
                  className: S.optionContainer,
                  onClick: () => {
                      r(), n(), (0, N.XU)(d.guild_id, d.id);
                  },
                  children: [
                      null != j || null != p
                          ? (0, i.jsx)(t.Z, {
                                emojiName: null != a.emoji_id ? (null == j ? void 0 : j.name) : a.emoji_name,
                                animated: null != j && j.animated,
                                emojiId: null == j ? void 0 : j.id,
                                autoplay: !0,
                                className: S.optionEmoji
                            })
                          : (0, i.jsx)(g, { className: S.channelIcon }),
                      (0, i.jsxs)('div', {
                          className: S.optionTextContainer,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  className: S.channelDescription,
                                  children: a.description
                              }),
                              (0, i.jsxs)(o.Text, {
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
    L = (e) => {
        var l;
        let { onClose: a, transitionState: t, guildId: c, isPreview: m } = e,
            u = (0, s.e7)([p.Z], () => p.Z.getGuild(c)),
            {
                welcomeScreen: N,
                fetching: x,
                hasError: _
            } = (0, s.cj)([E.Z], () => ({
                welcomeScreen: E.Z.get(c),
                fetching: E.Z.isFetching(),
                hasError: E.Z.hasError()
            })),
            C = (0, d.Dt)();
        n.useEffect(() => {
            null == N && (0, k.RM)(c);
        }, [c, N]),
            n.useEffect(() => {
                !1 === x && !0 === _ && null == N && a();
            }, [x, _, a, N]),
            n.useEffect(() => {
                N === E.a && !1 === x && a();
            }, [a, N, x]),
            n.useEffect(() => {
                !0 !== m &&
                    g.default.track(f.rMx.OPEN_MODAL, {
                        type: Z._,
                        guild_id: c
                    });
            }, [c, m]);
        let v = n.useCallback(
            (e) => {
                var l;
                if (null == N || !0 === m) return;
                let a = [],
                    i = [],
                    n = !1;
                null == (l = N.welcome_channels) ||
                    l.forEach((e) => {
                        a.push(e.description), i.push(e.channel_id), null != e.emoji_id && (n = !0);
                    }),
                    g.default.track(f.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: c,
                        options: a,
                        options_channel_ids: i,
                        guild_description: N.description,
                        has_custom_emojis: n
                    });
            },
            [c, m, N]
        );
        return null == u
            ? null
            : null == N
              ? (0, i.jsx)(o.Y0X, {
                    transitionState: t,
                    className: S.main,
                    'aria-label': I.NW.string(I.t.ZTNur6),
                    children: (0, i.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE })
                })
              : (0, i.jsxs)(o.Y0X, {
                    transitionState: t,
                    className: S.main,
                    'aria-labelledby': C,
                    children: [
                        (0, i.jsx)(o.olH, {
                            onClick: a,
                            className: S.close
                        }),
                        (0, i.jsx)(r.ZP, {
                            mask: r.ZP.Masks.SQUIRCLE,
                            width: 64,
                            height: 64,
                            className: S.guildIcon,
                            children: (0, i.jsx)(h.Z, {
                                size: h.Z.Sizes.LARGER,
                                guild: u,
                                active: !0,
                                animate: !0,
                                tabIndex: -1
                            })
                        }),
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            className: S.header,
                            id: C,
                            children: I.NW.format(I.t['0aydCA'], {
                                guildName: u.name,
                                guildNameHook: (e, l) =>
                                    (0, i.jsxs)(
                                        'span',
                                        {
                                            children: [
                                                (0, i.jsx)(j.Z, {
                                                    guild: u,
                                                    className: S.headerGuildBadge,
                                                    flowerStarClassName: S.flowerStar,
                                                    tooltipColor: o.ua7.Colors.PRIMARY
                                                }),
                                                (0, i.jsx)('strong', {
                                                    className: S.headerGuildName,
                                                    children: e
                                                })
                                            ]
                                        },
                                        l
                                    )
                            })
                        }),
                        null != N.description
                            ? (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: S.guildDescription,
                                  children: N.description
                              })
                            : null,
                        (0, i.jsx)(o.vwX, {
                            className: S.choiceHeader,
                            children: I.NW.string(I.t['haj5+v'])
                        }),
                        (0, i.jsx)('div', {
                            className: S.options,
                            children:
                                null == (l = N.welcome_channels)
                                    ? void 0
                                    : l.map((e, l) =>
                                          (0, i.jsx)(
                                              P,
                                              {
                                                  channelData: e,
                                                  trackOptionClick: () => v(l),
                                                  onClose: a
                                              },
                                              ''.concat(e.channel_id, '-').concat(l)
                                          )
                                      )
                        }),
                        (0, i.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: S.skipColor,
                            className: S.skip,
                            onClick: a,
                            children: I.NW.string(I.t['jizr8/'])
                        })
                    ]
                });
    };
