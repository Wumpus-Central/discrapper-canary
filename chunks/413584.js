n.d(t, { Z: () => G }), n(388685), n(953529), n(781311), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(348327),
    o = n.n(s),
    c = n(562075),
    d = n(539202),
    u = n(442837),
    m = n(481060),
    g = n(239091),
    p = n(596454),
    h = n(493773),
    f = n(607070),
    b = n(933557),
    x = n(471445),
    j = n(339085),
    v = n(565138),
    _ = n(372769),
    O = n(690221),
    y = n(524329),
    C = n(575258),
    N = n(592125),
    I = n(4912),
    E = n(626135),
    S = n(700785),
    T = n(434404),
    P = n(92160),
    w = n(981631),
    R = n(231338),
    Z = n(388032),
    D = n(119802);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = "WELCOME_CHANNEL",
    M = (e) => {
        var t;
        let l,
            { guildId: s, welcomeChannel: o, onEdit: h, onChannelReorder: f, isDropHovered: v, index: _ } = e,
            O = i.useRef(null),
            y = (0, u.e7)([N.Z], () => N.Z.getChannel(o.channel_id)),
            C = (0, u.e7)([j.ZP], () => (null != o.emoji_id ? j.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            E = null != y && S.Uu(w.Plq.VIEW_CHANNEL, y),
            T = null != (t = (0, x.KS)(y)) ? t : m.VL1,
            P = (0, b.ZP)(y, !1),
            M = () => {
                (0, m.ZDy)(
                    async () => {
                        let { default: e } = await n.e("73196").then(n.bind(n, 514698));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                k(A({}, t), {
                                    onConfirm: () => {
                                        h(), t.onClose();
                                    },
                                    channelId: o.channel_id,
                                }),
                            );
                    },
                    { onCloseRequest: () => R.Vq },
                );
            },
            [, G] = (0, c.c)({
                type: L,
                item: {
                    channel: o,
                    index: _,
                },
                end: (e, t) => {
                    null == e || t.didDrop() || f(e.channel, null, !0);
                },
            }),
            [, U] = (0, d.L)({
                accept: L,
                hover: (e) => {
                    f(e.channel, _, !1);
                },
                drop: (e) => {
                    f(e.channel, _, !0);
                },
            });
        return (
            i.useLayoutEffect(
                () => (
                    G(U(O)),
                    () => {
                        G(null), U(null);
                    }
                ),
                [G, U],
            ),
            (l = E
                ? null != C || null != o.emoji_name
                    ? (0, r.jsx)(p.Z, {
                          emojiId: null == C ? void 0 : C.id,
                          emojiName: null != C ? C.name : o.emoji_name,
                          animated: !!(null == C ? void 0 : C.animated),
                      })
                    : (0, r.jsx)(T, {
                          size: "md",
                          color: "currentColor",
                          className: D.channelIcon,
                      })
                : (0, r.jsx)(I.Z, {
                      width: 24,
                      height: 24,
                      className: D.warningIcon,
                  })),
            (0, r.jsxs)("div", {
                className: a()(D.welcomeChannel, { [D.dragging]: v }),
                ref: O,
                "data-dnd-name": o.description,
                onContextMenu: (e) => {
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("68535").then(n.bind(n, 602320));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                k(A({}, t), {
                                    guildId: s,
                                    welcomeChannel: o,
                                    onChannelReorder: f,
                                    onShowDeleteModal: M,
                                    index: _,
                                }),
                            );
                    });
                },
                children: [
                    l,
                    (0, r.jsxs)("div", {
                        className: D.channelDescriptionWrapper,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: o.description,
                            }),
                            (0, r.jsxs)(m.Text, {
                                className: E ? void 0 : D.channelWarning,
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: [
                                    (0, r.jsx)(T, {
                                        className: D.channelTitleIcon,
                                        size: "xxs",
                                        color: "currentColor",
                                    }),
                                    (0, r.jsx)("span", { children: E ? P : Z.intl.string(Z.t.zFuCsL) }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(m.hU, {
                        variant: "icon-only",
                        icon: m.XHJ,
                        "aria-label": Z.intl.string(Z.t.JYBc3N),
                        onClick: M,
                    }),
                ],
            })
        );
    },
    G = (e) => {
        let { guild: t } = e,
            { welcomeSettings: l, originalWelcomeSettings: a } = (0, u.e7)([C.Z], () => C.Z.getSettingsProps()),
            s = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
            [c, d] = i.useState(null),
            [g, p] = i.useState(!1),
            [b, x] = i.useState(!1),
            { description: j, channels: N, enabled: S } = l,
            R = (e) => {
                null != t && (o()(e, a.channels) || ((0, y.Es)(t.id, { channels: e }), p(!0)));
            },
            L = (e) => {
                null != t && e !== a.enabled && ((0, y.Es)(t.id, { enabled: e }), x(!s), p(!0));
            },
            G = (e, t, n) => {
                if (null == N) return;
                let r = N.indexOf(e),
                    i = [...N];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, y.VP)({ channels: i })),
                    n ? (R(i), d(null)) : d(t);
            },
            U = i.useRef(!1);
        (0, h.ZP)(() => () => {
            U.current = !0;
        }),
            i.useEffect(
                () => () => {
                    if (U.current && g) {
                        let e = [],
                            n = [],
                            r = !1;
                        null == N ||
                            N.forEach((t) => {
                                e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = !0);
                            }),
                            E.default.track(w.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                                guild_id: null == t ? void 0 : t.id,
                                options: e,
                                options_channel_ids: n,
                                guild_description: j,
                                has_custom_emojis: r,
                                is_enabled: S,
                            });
                    }
                },
                [g, N, j, S, t],
            ),
            i.useEffect(() => () => (0, y.sm)(), []);
        let B = i.useCallback(() => {
            null != t && T.Z.open(t.id, w.pNK.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, r.jsxs)(m.hjN, {
                  title: Z.intl.string(Z.t["2rkmDg"]),
                  tag: m.RB0.H1,
                  children: [
                      (0, r.jsx)("div", {
                          className: D.notice,
                          children: (0, r.jsxs)(m.Text, {
                              variant: "text-md/normal",
                              children: [
                                  (0, r.jsx)(I.Z, { className: D.noticeIcon }),
                                  Z.intl.format(Z.t.oj2vi4, {
                                      onboardingLink: (e) =>
                                          (0, r.jsx)(O.Z, {
                                              onClick: B,
                                              children: e,
                                          }),
                                  }),
                              ],
                          }),
                      }),
                      (0, r.jsx)(m.Text, {
                          variant: "text-sm/normal",
                          children: Z.intl.string(Z.t["w2d74+"]),
                      }),
                      (0, r.jsx)(P.Z, {
                          enabled: S,
                          onPreview:
                              (null == N ? void 0 : N.length) === 0
                                  ? void 0
                                  : () => {
                                        null != t &&
                                            (0, m.ZDy)(async () => {
                                                let { default: e } = await n.e("90542").then(n.bind(n, 184782));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        k(A({}, n), {
                                                            guildId: t.id,
                                                            isPreview: !0,
                                                        }),
                                                    );
                                            });
                                    },
                          onToggle:
                              S || (null == N ? void 0 : N.length) !== 0
                                  ? () => {
                                        L(!S);
                                    }
                                  : void 0,
                          animateStatus: b,
                          firstLine: S ? Z.intl.string(Z.t.JbB7Qk) : Z.intl.string(Z.t["/bd0Qk"]),
                          secondLine: S ? Z.intl.string(Z.t["TA1g7+"]) : Z.intl.string(Z.t.nc6r1N),
                      }),
                      (0, r.jsxs)("div", {
                          className: D.previewContainer,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: D.welcomeHeader,
                                  children: [
                                      (0, r.jsx)(v.Z, {
                                          size: v.Z.Sizes.LARGER,
                                          className: D.icon,
                                          guild: t,
                                          animate: !0,
                                          tabIndex: -1,
                                      }),
                                      (0, r.jsx)(m.X6q, {
                                          className: D.welcomeTitle,
                                          variant: "heading-xl/semibold",
                                          children: Z.intl.format(Z.t["0aydCA"], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, r.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              (0, r.jsx)(_.Z, {
                                                                  guild: t,
                                                                  className: D.headerGuildBadge,
                                                                  flowerStarClassName: D.flowerStar,
                                                              }),
                                                              (0, r.jsx)("strong", { children: e }),
                                                          ],
                                                      },
                                                      n,
                                                  ),
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: D.descriptionWrapper,
                                          children: (0, r.jsx)(m.Kx8, {
                                              placeholder: Z.intl.string(Z.t.qzZHaW),
                                              onChange: (e) => {
                                                  (0, y.VP)({ description: e });
                                              },
                                              onBlur: () => {
                                                  null != t &&
                                                      j !== a.description &&
                                                      ((0, y.Es)(t.id, { description: null == j ? void 0 : j.trim() }),
                                                      p(!0));
                                              },
                                              onKeyDown: (e) => {
                                                  e.keyCode === w.yXg.ENTER && e.preventDefault();
                                              },
                                              value: j,
                                              maxLength: 140,
                                              disabled: !0,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(m.$i$, { className: D.divider }),
                              (0, r.jsxs)("div", {
                                  className: D.welcomeChannels,
                                  children: [
                                      (0, r.jsx)(m.vwX, { children: Z.intl.string(Z.t.euJXzc) }),
                                      (0, r.jsx)(m.Text, {
                                          variant: "text-sm/normal",
                                          className: D.addChannelSubtext,
                                          children: Z.intl.string(Z.t.VOnnn5),
                                      }),
                                      null == N
                                          ? void 0
                                          : N.map((e, n) =>
                                                (0, r.jsx)(
                                                    M,
                                                    {
                                                        guildId: t.id,
                                                        welcomeChannel: e,
                                                        onEdit: (e) => {
                                                            let t = [...(null != N ? N : [])];
                                                            null == e ? t.splice(n, 1) : (t[n] = e),
                                                                (0, y.VP)({ channels: t }),
                                                                R(t),
                                                                0 === t.length &&
                                                                    S &&
                                                                    ((0, y.VP)({ enabled: !1 }), L(!1));
                                                        },
                                                        onChannelReorder: G,
                                                        isDropHovered: n === c,
                                                        index: n,
                                                    },
                                                    n,
                                                ),
                                            ),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    };
