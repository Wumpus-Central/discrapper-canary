l.d(a, {
    default: () => T,
}),
    l(228524),
    l(321073);
var i = l(627968),
    n = l(64700),
    s = l(158954),
    t = l(311907),
    c = l(397927),
    d = l(565645),
    o = l(713654),
    r = l(573435),
    u = l(915089),
    m = l(508675),
    h = l(7584),
    f = l(263063),
    x = l(714991),
    _ = l(976860),
    j = l(734057),
    b = l(71393),
    N = l(576705),
    p = l(147925),
    g = l(954571),
    A = l(447696),
    C = l(684407),
    E = l(547716),
    v = l(652215),
    y = l(818348),
    k = l(985018),
    I = l(486856);
let S = (e) => {
        var a;
        let { channelData: l, onClose: n, trackOptionClick: s } = e,
            r = (0, t.bG)([j.A], () => j.A.getChannel(l.channel_id)),
            u = (0, t.bG)([N.A], () => null != r && N.A.can(y.xB.VIEW_CHANNEL, r)),
            f = (0, t.bG)([m.Ay], () => (null != l.emoji_id ? m.Ay.getCustomEmojiById(l.emoji_id) : null), [
                l.emoji_id,
            ]),
            x = null != l.emoji_name ? h.Ay.getByName(h.Ay.convertSurrogateToName(l.emoji_name, !1)) : null,
            b = null != (a = (0, o.gU)(r)) ? a : c.N$i;
        return null != r && u
            ? (0, i.jsxs)(c.DUT, {
                  className: I.NV,
                  onClick: () => {
                      s(), n(), (0, _.uh)(r.guild_id, r.id);
                  },
                  children: [
                      null != f || null != x
                          ? (0, i.jsx)(d.A, {
                                emojiName: null != l.emoji_id ? (null == f ? void 0 : f.name) : l.emoji_name,
                                animated: null != f && f.animated,
                                emojiId: null == f ? void 0 : f.id,
                                autoplay: !0,
                                className: I.oK,
                            })
                          : (0, i.jsx)(b, {
                                className: I.p,
                            }),
                      (0, i.jsxs)("div", {
                          className: I.uP,
                          children: [
                              (0, i.jsx)(c.Text, {
                                  variant: "text-md/normal",
                                  className: I.I0,
                                  children: l.description,
                              }),
                              (0, i.jsxs)(c.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: [
                                      (0, i.jsx)(b, {
                                          className: I.nO,
                                          size: "xxs",
                                          color: "currentColor",
                                      }),
                                      (0, i.jsx)("span", {
                                          children: r.name,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, i.jsx)(p.A, {
                          direction: p.A.Directions.RIGHT,
                          className: I.R_,
                      }),
                  ],
              })
            : null;
    },
    T = (e) => {
        var a;
        let { onClose: l, transitionState: d, guildId: o, isPreview: m } = e,
            h = (0, t.bG)([b.A], () => b.A.getGuild(o)),
            {
                welcomeScreen: _,
                fetching: j,
                hasError: N,
            } = (0, t.cf)([C.A], () => ({
                welcomeScreen: C.A.get(o),
                fetching: C.A.isFetching(),
                hasError: C.A.hasError(),
            })),
            p = (0, u.GV)();
        n.useEffect(() => {
            null == _ && (0, A.Fy)(o);
        }, [o, _]),
            n.useEffect(() => {
                !1 === j && !0 === N && null == _ && l();
            }, [j, N, l, _]),
            n.useEffect(() => {
                _ === C.E && !1 === j && l();
            }, [l, _, j]),
            n.useEffect(() => {
                !0 !== m &&
                    g.default.track(v.HAw.OPEN_MODAL, {
                        type: E.H,
                        guild_id: o,
                    });
            }, [o, m]);
        let y = n.useCallback(
            (e) => {
                var a;
                if (null == _ || !0 === m) return;
                let l = [],
                    i = [],
                    n = !1;
                null == (a = _.welcome_channels) ||
                    a.forEach((e) => {
                        l.push(e.description), i.push(e.channel_id), null != e.emoji_id && (n = !0);
                    }),
                    g.default.track(v.HAw.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: o,
                        options: l,
                        options_channel_ids: i,
                        guild_description: _.description,
                        has_custom_emojis: n,
                    });
            },
            [o, m, _],
        );
        return null == h
            ? null
            : null == _
              ? (0, i.jsx)(s.Modal, {
                    transitionState: d,
                    "aria-label": k.intl.string(k.t.ZTNur7),
                    title: k.intl.string(k.t.ZTNur7),
                    onClose: () => Promise.resolve(l()),
                    actions: [],
                    children: (0, i.jsx)(c.y$y, {
                        type: c.y$y.Type.SPINNING_CIRCLE,
                    }),
                })
              : (0, i.jsx)(s.Modal, {
                    transitionState: d,
                    "aria-labelledby": p,
                    actions: [
                        {
                            text: k.intl.string(k.t.jizr82),
                            onClick: l,
                            variant: "secondary",
                        },
                    ],
                    title: k.intl.string(k.t["3iCBUn"]),
                    onClose: () => Promise.resolve(l()),
                    children: (0, i.jsxs)("div", {
                        className: I.jE,
                        children: [
                            (0, i.jsx)(r.Ay, {
                                mask: r.Ay.Masks.SQUIRCLE,
                                width: 64,
                                height: 64,
                                className: I.$f,
                                children: (0, i.jsx)(f.A, {
                                    size: f.A.Sizes.LARGER,
                                    guild: h,
                                    active: !0,
                                    animate: !0,
                                    tabIndex: -1,
                                }),
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: I.wx,
                                id: p,
                                children: k.intl.format(k.t["0aydCN"], {
                                    guildName: h.name,
                                    guildNameHook: (e, a) =>
                                        (0, i.jsxs)(
                                            "span",
                                            {
                                                children: [
                                                    (0, i.jsx)(x.A, {
                                                        guild: h,
                                                        className: I.eZ,
                                                        flowerStarClassName: I.mP,
                                                        tooltipColor: c.STz.Colors.PRIMARY,
                                                    }),
                                                    (0, i.jsx)("strong", {
                                                        className: I.aC,
                                                        children: e,
                                                    }),
                                                ],
                                            },
                                            a,
                                        ),
                                }),
                            }),
                            null != _.description
                                ? (0, i.jsx)(c.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      className: I.eF,
                                      children: _.description,
                                  })
                                : null,
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-sm/semibold",
                                className: I.XU,
                                children: k.intl.string(k.t["haj5+i"]),
                            }),
                            (0, i.jsx)("div", {
                                className: I.fF,
                                children:
                                    null == (a = _.welcome_channels)
                                        ? void 0
                                        : a.map((e, a) =>
                                              (0, i.jsx)(
                                                  S,
                                                  {
                                                      channelData: e,
                                                      trackOptionClick: () => y(a),
                                                      onClose: l,
                                                  },
                                                  "".concat(e.channel_id, "-").concat(a),
                                              ),
                                          ),
                            }),
                        ],
                    }),
                });
    };
