l.d(a, { default: () => w }), l(321073);
var i = l(627968),
    n = l(64700),
    t = l(158954),
    s = l(311907),
    o = l(397927),
    r = l(565645),
    c = l(713654),
    d = l(573435),
    m = l(915089),
    _ = l(508675),
    u = l(7584),
    h = l(263063),
    x = l(714991),
    j = l(976860),
    p = l(734057),
    N = l(71393),
    g = l(576705),
    b = l(147925),
    A = l(954571),
    C = l(447696),
    E = l(684407),
    f = l(547716),
    y = l(652215),
    I = l(818348),
    k = l(985018),
    v = l(737265);
let T = (e) => {
        let { channelData: a, onClose: l, trackOptionClick: n } = e,
            t = (0, s.bG)([p.A], () => p.A.getChannel(a.channel_id)),
            d = (0, s.bG)([g.A], () => null != t && g.A.can(I.xB.VIEW_CHANNEL, t)),
            m = (0, s.bG)([_.Ay], () => (null != a.emoji_id ? _.Ay.getCustomEmojiById(a.emoji_id) : null), [
                a.emoji_id,
            ]),
            h = null != a.emoji_name ? u.Ay.getByName(u.Ay.convertSurrogateToName(a.emoji_name, !1)) : null,
            x = (0, c.gU)(t) ?? o.N$i;
        return null != t && d
            ? (0, i.jsxs)(o.DUT, {
                  className: v.NV,
                  onClick: () => {
                      n(), l(), (0, j.uh)(t.guild_id, t.id);
                  },
                  children: [
                      null != m || null != h
                          ? (0, i.jsx)(r.A, {
                                emojiName: null != a.emoji_id ? m?.name : a.emoji_name,
                                animated: null != m && m.animated,
                                emojiId: m?.id,
                                autoplay: !0,
                                className: v.oK,
                            })
                          : (0, i.jsx)(x, { className: v.p }),
                      (0, i.jsxs)("div", {
                          className: v.uP,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  className: v.I0,
                                  children: a.description,
                              }),
                              (0, i.jsxs)(o.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: [
                                      (0, i.jsx)(x, { className: v.nO, size: "xxs", color: "currentColor" }),
                                      (0, i.jsx)("span", { children: t.name }),
                                  ],
                              }),
                          ],
                      }),
                      (0, i.jsx)(b.A, { direction: b.A.Directions.RIGHT, className: v.R_ }),
                  ],
              })
            : null;
    },
    w = (e) => {
        let { onClose: a, transitionState: l, guildId: r, isPreview: c } = e,
            _ = (0, s.bG)([N.A], () => N.A.getGuild(r)),
            {
                welcomeScreen: u,
                fetching: j,
                hasError: p,
            } = (0, s.cf)([E.A], () => ({
                welcomeScreen: E.A.get(r),
                fetching: E.A.isFetching(),
                hasError: E.A.hasError(),
            })),
            g = (0, m.GV)();
        n.useEffect(() => {
            null == u && (0, C.Fy)(r);
        }, [r, u]),
            n.useEffect(() => {
                !1 === j && !0 === p && null == u && a();
            }, [j, p, a, u]),
            n.useEffect(() => {
                u === E.E && !1 === j && a();
            }, [a, u, j]),
            n.useEffect(() => {
                !0 !== c && A.default.track(y.HAw.OPEN_MODAL, { type: f.H, guild_id: r });
            }, [r, c]);
        let b = n.useCallback(
            (e) => {
                if (null == u || !0 === c) return;
                let a = [],
                    l = [],
                    i = !1;
                u.welcome_channels?.forEach((e) => {
                    a.push(e.description), l.push(e.channel_id), null != e.emoji_id && (i = !0);
                }),
                    A.default.track(y.HAw.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: r,
                        options: a,
                        options_channel_ids: l,
                        guild_description: u.description,
                        has_custom_emojis: i,
                    });
            },
            [r, c, u],
        );
        return null == _
            ? null
            : null == u
              ? (0, i.jsx)(t.Modal, {
                    transitionState: l,
                    "aria-label": k.intl.string(k.t.ZTNur7),
                    title: k.intl.string(k.t.ZTNur7),
                    onClose: () => Promise.resolve(a()),
                    actions: [],
                    children: (0, i.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE }),
                })
              : (0, i.jsx)(t.Modal, {
                    transitionState: l,
                    "aria-labelledby": g,
                    actions: [{ text: k.intl.string(k.t.jizr82), onClick: a, variant: "secondary" }],
                    title: k.intl.string(k.t["3iCBUn"]),
                    onClose: () => Promise.resolve(a()),
                    children: (0, i.jsxs)("div", {
                        className: v.jE,
                        children: [
                            (0, i.jsx)(d.Ay, {
                                mask: d.Ay.Masks.SQUIRCLE,
                                width: 64,
                                height: 64,
                                className: v.$f,
                                children: (0, i.jsx)(h.Ay, {
                                    size: h.Ay.Sizes.LARGER,
                                    guild: _,
                                    active: !0,
                                    animate: !0,
                                    tabIndex: -1,
                                }),
                            }),
                            (0, i.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                className: v.wx,
                                id: g,
                                children: k.intl.format(k.t["0aydCN"], {
                                    guildName: _.name,
                                    guildNameHook: (e, a) =>
                                        (0, i.jsxs)(
                                            "span",
                                            {
                                                children: [
                                                    (0, i.jsx)(x.A, {
                                                        guild: _,
                                                        className: v.eZ,
                                                        flowerStarClassName: v.mP,
                                                        tooltipColor: o.STz.Colors.PRIMARY,
                                                    }),
                                                    (0, i.jsx)("strong", { className: v.aC, children: e }),
                                                ],
                                            },
                                            a,
                                        ),
                                }),
                            }),
                            null != u.description
                                ? (0, i.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      className: v.eF,
                                      children: u.description,
                                  })
                                : null,
                            (0, i.jsx)(o.Heading, {
                                variant: "heading-sm/semibold",
                                className: v.XU,
                                children: k.intl.string(k.t["haj5+i"]),
                            }),
                            (0, i.jsx)("div", {
                                className: v.fF,
                                children: u.welcome_channels?.map((e, l) =>
                                    (0, i.jsx)(
                                        T,
                                        { channelData: e, trackOptionClick: () => b(l), onClose: a },
                                        `${e.channel_id}-${l}`,
                                    ),
                                ),
                            }),
                        ],
                    }),
                });
    };
