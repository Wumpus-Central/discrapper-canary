i.d(n, { default: () => P }), i(953529), i(539854);
var a = i(54381),
    l = i(473749),
    t = i(793030),
    o = i(442837),
    s = i(481060),
    d = i(596454),
    r = i(471445),
    c = i(686546),
    u = i(313201),
    m = i(339085),
    h = i(633302),
    p = i(565138),
    _ = i(372769),
    j = i(703656),
    x = i(592125),
    N = i(430824),
    g = i(496675),
    C = i(259580),
    b = i(626135),
    f = i(524329),
    E = i(995532),
    Z = i(845606),
    I = i(981631),
    v = i(231338),
    T = i(388032),
    S = i(145598);
let k = (e) => {
        var n;
        let { channelData: i, onClose: l, trackOptionClick: t } = e,
            c = (0, o.e7)([x.Z], () => x.Z.getChannel(i.channel_id)),
            u = (0, o.e7)([g.Z], () => null != c && g.Z.can(v.Pl.VIEW_CHANNEL, c)),
            p = (0, o.e7)([m.ZP], () => (null != i.emoji_id ? m.ZP.getCustomEmojiById(i.emoji_id) : null), [
                i.emoji_id,
            ]),
            _ = null != i.emoji_name ? h.ZP.getByName(h.ZP.convertSurrogateToName(i.emoji_name, !1)) : null,
            N = null != (n = (0, r.KS)(c)) ? n : s.VL1;
        return null != c && u
            ? (0, a.jsxs)(s.P3F, {
                  className: S.optionContainer,
                  onClick: () => {
                      t(), l(), (0, j.XU)(c.guild_id, c.id);
                  },
                  children: [
                      null != p || null != _
                          ? (0, a.jsx)(d.Z, {
                                emojiName: null != i.emoji_id ? (null == p ? void 0 : p.name) : i.emoji_name,
                                animated: null != p && p.animated,
                                emojiId: null == p ? void 0 : p.id,
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
                                  color: "text-default",
                                  children: [
                                      (0, a.jsx)(N, {
                                          className: S.channelTitleIcon,
                                          size: "xxs",
                                          color: "currentColor",
                                      }),
                                      (0, a.jsx)("span", { children: c.name }),
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
        let { onClose: i, transitionState: d, guildId: r, isPreview: m } = e,
            h = (0, o.e7)([N.Z], () => N.Z.getGuild(r)),
            {
                welcomeScreen: j,
                fetching: x,
                hasError: g,
            } = (0, o.cj)([E.Z], () => ({
                welcomeScreen: E.Z.get(r),
                fetching: E.Z.isFetching(),
                hasError: E.Z.hasError(),
            })),
            C = (0, u.Dt)();
        l.useEffect(() => {
            null == j && (0, f.RM)(r);
        }, [r, j]),
            l.useEffect(() => {
                !1 === x && !0 === g && null == j && i();
            }, [x, g, i, j]),
            l.useEffect(() => {
                j === E.a && !1 === x && i();
            }, [i, j, x]),
            l.useEffect(() => {
                !0 !== m &&
                    b.default.track(I.rMx.OPEN_MODAL, {
                        type: Z._,
                        guild_id: r,
                    });
            }, [r, m]);
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
                        guild_id: r,
                        options: i,
                        options_channel_ids: a,
                        guild_description: j.description,
                        has_custom_emojis: l,
                    });
            },
            [r, m, j],
        );
        return null == h
            ? null
            : null == j
              ? (0, a.jsx)(t.Modal, {
                    transitionState: d,
                    "aria-label": T.intl.string(T.t.ZTNur7),
                    title: T.intl.string(T.t.ZTNur7),
                    onClose: () => Promise.resolve(i()),
                    actions: [],
                    children: (0, a.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE }),
                })
              : (0, a.jsx)(t.Modal, {
                    transitionState: d,
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
                            (0, a.jsx)(c.ZP, {
                                mask: c.ZP.Masks.SQUIRCLE,
                                width: 64,
                                height: 64,
                                className: S.guildIcon,
                                children: (0, a.jsx)(p.Z, {
                                    size: p.Z.Sizes.LARGER,
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
                                                    (0, a.jsx)(_.Z, {
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
                                      color: "text-default",
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
