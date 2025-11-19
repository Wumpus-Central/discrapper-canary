i.d(n, { default: () => P }), i(953529), i(539854);
var a = i(54381),
    l = i(473749),
    o = i(793030),
    t = i(442837),
    s = i(481060),
    r = i(596454),
    c = i(471445),
    d = i(686546),
    u = i(313201),
    m = i(339085),
    h = i(633302),
    _ = i(565138),
    p = i(372769),
    j = i(703656),
    x = i(592125),
    N = i(430824),
    g = i(496675),
    C = i(259580),
    b = i(626135),
    E = i(524329),
    Z = i(995532),
    f = i(845606),
    I = i(981631),
    v = i(231338),
    T = i(388032),
    S = i(144533);
let k = (e) => {
        var n;
        let { channelData: i, onClose: l, trackOptionClick: o } = e,
            d = (0, t.e7)([x.Z], () => x.Z.getChannel(i.channel_id)),
            u = (0, t.e7)([g.Z], () => null != d && g.Z.can(v.Pl.VIEW_CHANNEL, d)),
            _ = (0, t.e7)([m.ZP], () => (null != i.emoji_id ? m.ZP.getCustomEmojiById(i.emoji_id) : null), [
                i.emoji_id,
            ]),
            p = null != i.emoji_name ? h.ZP.getByName(h.ZP.convertSurrogateToName(i.emoji_name, !1)) : null,
            N = null != (n = (0, c.KS)(d)) ? n : s.VL1;
        return null != d && u
            ? (0, a.jsxs)(s.P3F, {
                  className: S.optionContainer,
                  onClick: () => {
                      o(), l(), (0, j.XU)(d.guild_id, d.id);
                  },
                  children: [
                      null != _ || null != p
                          ? (0, a.jsx)(r.Z, {
                                emojiName: null != i.emoji_id ? (null == _ ? void 0 : _.name) : i.emoji_name,
                                animated: null != _ && _.animated,
                                emojiId: null == _ ? void 0 : _.id,
                                autoplay: !0,
                                className: S.optionEmoji,
                            })
                          : (0, a.jsx)(N, { className: S.channelIcon }),
                      (0, a.jsxs)("div", {
                          className: S.optionTextContainer,
                          children: [
                              (0, a.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  className: S.channelDescription,
                                  children: i.description,
                              }),
                              (0, a.jsxs)(s.Text, {
                                  variant: "text-xs/normal",
                                  color: "header-secondary",
                                  children: [
                                      (0, a.jsx)(N, {
                                          className: S.channelTitleIcon,
                                          size: "xxs",
                                          color: "currentColor",
                                      }),
                                      (0, a.jsx)("span", { children: d.name }),
                                  ],
                              }),
                          ],
                      }),
                      (0, a.jsx)(C.Z, {
                          direction: C.Z.Directions.RIGHT,
                          className: S.optionArrow,
                      }),
                  ],
              })
            : null;
    },
    P = (e) => {
        var n;
        let { onClose: i, transitionState: r, guildId: c, isPreview: m } = e,
            h = (0, t.e7)([N.Z], () => N.Z.getGuild(c)),
            {
                welcomeScreen: j,
                fetching: x,
                hasError: g,
            } = (0, t.cj)([Z.Z], () => ({
                welcomeScreen: Z.Z.get(c),
                fetching: Z.Z.isFetching(),
                hasError: Z.Z.hasError(),
            })),
            C = (0, u.Dt)();
        l.useEffect(() => {
            null == j && (0, E.RM)(c);
        }, [c, j]),
            l.useEffect(() => {
                !1 === x && !0 === g && null == j && i();
            }, [x, g, i, j]),
            l.useEffect(() => {
                j === Z.a && !1 === x && i();
            }, [i, j, x]),
            l.useEffect(() => {
                !0 !== m &&
                    b.default.track(I.rMx.OPEN_MODAL, {
                        type: f._,
                        guild_id: c,
                    });
            }, [c, m]);
        let v = l.useCallback(
            (e) => {
                var n;
                if (null == j || !0 === m) return;
                let i = [],
                    a = [],
                    l = !1;
                null == (n = j.welcome_channels) ||
                    n.forEach((e) => {
                        i.push(e.description), a.push(e.channel_id), null != e.emoji_id && (l = !0);
                    }),
                    b.default.track(I.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: c,
                        options: i,
                        options_channel_ids: a,
                        guild_description: j.description,
                        has_custom_emojis: l,
                    });
            },
            [c, m, j],
        );
        return null == h
            ? null
            : null == j
              ? (0, a.jsx)(o.Modal, {
                    transitionState: r,
                    "aria-label": T.intl.string(T.t.ZTNur7),
                    title: T.intl.string(T.t.ZTNur7),
                    onClose: () => Promise.resolve(i()),
                    actions: [],
                    children: (0, a.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE }),
                })
              : (0, a.jsx)(o.Modal, {
                    transitionState: r,
                    "aria-labelledby": C,
                    actions: [
                        {
                            text: T.intl.string(T.t.jizr82),
                            onClick: i,
                            variant: "secondary",
                        },
                    ],
                    title: T.intl.string(T.t["3iCBUn"]),
                    onClose: () => Promise.resolve(i()),
                    children: (0, a.jsxs)("div", {
                        className: S.modalContent,
                        children: [
                            (0, a.jsx)(d.ZP, {
                                mask: d.ZP.Masks.SQUIRCLE,
                                width: 64,
                                height: 64,
                                className: S.guildIcon,
                                children: (0, a.jsx)(_.Z, {
                                    size: _.Z.Sizes.LARGER,
                                    guild: h,
                                    active: !0,
                                    animate: !0,
                                    tabIndex: -1,
                                }),
                            }),
                            (0, a.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                className: S.header,
                                id: C,
                                children: T.intl.format(T.t["0aydCN"], {
                                    guildName: h.name,
                                    guildNameHook: (e, n) =>
                                        (0, a.jsxs)(
                                            "span",
                                            {
                                                children: [
                                                    (0, a.jsx)(p.Z, {
                                                        guild: h,
                                                        className: S.headerGuildBadge,
                                                        flowerStarClassName: S.flowerStar,
                                                        tooltipColor: s.aML.Colors.PRIMARY,
                                                    }),
                                                    (0, a.jsx)("strong", {
                                                        className: S.headerGuildName,
                                                        children: e,
                                                    }),
                                                ],
                                            },
                                            n,
                                        ),
                                }),
                            }),
                            null != j.description
                                ? (0, a.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      color: "header-secondary",
                                      className: S.guildDescription,
                                      children: j.description,
                                  })
                                : null,
                            (0, a.jsx)(s.Heading, {
                                variant: "heading-sm/semibold",
                                className: S.choiceHeader,
                                children: T.intl.string(T.t["haj5+i"]),
                            }),
                            (0, a.jsx)("div", {
                                className: S.options,
                                children:
                                    null == (n = j.welcome_channels)
                                        ? void 0
                                        : n.map((e, n) =>
                                              (0, a.jsx)(
                                                  k,
                                                  {
                                                      channelData: e,
                                                      trackOptionClick: () => v(n),
                                                      onClose: i,
                                                  },
                                                  "".concat(e.channel_id, "-").concat(n),
                                              ),
                                          ),
                            }),
                        ],
                    }),
                });
    };
