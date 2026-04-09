l.d(a, { default: () => G }), l(321073);
var i = l(627968),
    n = l(64700),
    t = l(158954),
    s = l(311907),
    o = l(397927),
    r = l(565645),
    c = l(47167),
    d = l(713654),
    m = l(573435),
    _ = l(915089),
    u = l(508675),
    h = l(7584),
    x = l(263063),
    j = l(714991),
    p = l(976860),
    N = l(734057),
    g = l(71393),
    A = l(576705),
    b = l(147925),
    C = l(954571),
    E = l(447696),
    f = l(684407),
    y = l(547716),
    I = l(652215),
    k = l(818348),
    v = l(985018),
    T = l(79562);
let w = (e) => {
        let { channelData: a, onClose: l, trackOptionClick: n } = e,
            t = (0, s.bG)([N.A], () => N.A.getChannel(a.channel_id)),
            m = (0, c.Ay)(t),
            _ = (0, s.bG)([A.A], () => null != t && A.A.can(k.xB.VIEW_CHANNEL, t)),
            x = (0, s.bG)([u.Ay], () => (null != a.emoji_id ? u.Ay.getCustomEmojiById(a.emoji_id) : null), [
                a.emoji_id,
            ]),
            j = null != a.emoji_name ? h.Ay.getByName(h.Ay.convertSurrogateToName(a.emoji_name, !1)) : null,
            g = (0, d.gU)(t) ?? o.N$i;
        return null != t && _
            ? (0, i.jsxs)(o.DUT, {
                  className: T.NV,
                  onClick: () => {
                      n(), l(), (0, p.uh)(t.guild_id, t.id);
                  },
                  children: [
                      null != x || null != j
                          ? (0, i.jsx)(r.A, {
                                emojiName: null != a.emoji_id ? x?.name : a.emoji_name,
                                animated: null != x && x.animated,
                                emojiId: x?.id,
                                autoplay: !0,
                                className: T.oK,
                            })
                          : (0, i.jsx)(g, { className: T.p }),
                      (0, i.jsxs)("div", {
                          className: T.uP,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  className: T.I0,
                                  children: a.description,
                              }),
                              (0, i.jsxs)(o.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: [
                                      (0, i.jsx)(g, { className: T.nO, size: "xxs", color: "currentColor" }),
                                      (0, i.jsx)("span", { children: m }),
                                  ],
                              }),
                          ],
                      }),
                      (0, i.jsx)(b.A, { direction: b.A.Directions.RIGHT, className: T.R_ }),
                  ],
              })
            : null;
    },
    G = (e) => {
        let { onClose: a, transitionState: l, guildId: r, isPreview: c } = e,
            d = (0, s.bG)([g.A], () => g.A.getGuild(r)),
            {
                welcomeScreen: u,
                fetching: h,
                hasError: p,
            } = (0, s.cf)([f.A], () => ({
                welcomeScreen: f.A.get(r),
                fetching: f.A.isFetching(),
                hasError: f.A.hasError(),
            })),
            N = (0, _.GV)();
        n.useEffect(() => {
            null == u && (0, E.Fy)(r);
        }, [r, u]),
            n.useEffect(() => {
                !1 === h && !0 === p && null == u && a();
            }, [h, p, a, u]),
            n.useEffect(() => {
                u === f.E && !1 === h && a();
            }, [a, u, h]),
            n.useEffect(() => {
                !0 !== c && C.default.track(I.HAw.OPEN_MODAL, { type: y.H, guild_id: r });
            }, [r, c]);
        let A = n.useCallback(
            (e) => {
                if (null == u || !0 === c) return;
                let a = [],
                    l = [],
                    i = !1;
                u.welcome_channels?.forEach((e) => {
                    a.push(e.description), l.push(e.channel_id), null != e.emoji_id && (i = !0);
                }),
                    C.default.track(I.HAw.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
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
        return null == d
            ? null
            : null == u
              ? (0, i.jsx)(t.Modal, {
                    transitionState: l,
                    "aria-label": v.intl.string(v.t.ZTNur7),
                    title: v.intl.string(v.t.ZTNur7),
                    onClose: () => Promise.resolve(a()),
                    actions: [],
                    children: (0, i.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE }),
                })
              : (0, i.jsx)(t.Modal, {
                    transitionState: l,
                    "aria-labelledby": N,
                    actions: [{ text: v.intl.string(v.t.jizr82), onClick: a, variant: "secondary" }],
                    title: v.intl.string(v.t["3iCBUn"]),
                    onClose: () => Promise.resolve(a()),
                    children: (0, i.jsxs)("div", {
                        className: T.jE,
                        children: [
                            (0, i.jsx)(m.Ay, {
                                mask: m.Ay.Masks.SQUIRCLE,
                                width: 64,
                                height: 64,
                                className: T.$f,
                                children: (0, i.jsx)(x.Ay, {
                                    size: x.Ay.Sizes.LARGER,
                                    guild: d,
                                    active: !0,
                                    animate: !0,
                                    tabIndex: -1,
                                }),
                            }),
                            (0, i.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                className: T.wx,
                                id: N,
                                children: v.intl.format(v.t["0aydCN"], {
                                    guildName: d.name,
                                    guildNameHook: (e, a) =>
                                        (0, i.jsxs)(
                                            "span",
                                            {
                                                children: [
                                                    (0, i.jsx)(j.A, {
                                                        guild: d,
                                                        className: T.eZ,
                                                        flowerStarClassName: T.mP,
                                                        tooltipColor: o.STz.Colors.PRIMARY,
                                                    }),
                                                    (0, i.jsx)("strong", { className: T.aC, children: e }),
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
                                      className: T.eF,
                                      children: u.description,
                                  })
                                : null,
                            (0, i.jsx)(o.Heading, {
                                variant: "heading-sm/semibold",
                                className: T.XU,
                                children: v.intl.string(v.t["haj5+i"]),
                            }),
                            (0, i.jsx)("div", {
                                className: T.fF,
                                children: u.welcome_channels?.map((e, l) =>
                                    (0, i.jsx)(
                                        w,
                                        { channelData: e, trackOptionClick: () => A(l), onClose: a },
                                        `${e.channel_id}-${l}`,
                                    ),
                                ),
                            }),
                        ],
                    }),
                });
    };
