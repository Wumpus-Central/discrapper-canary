n.d(t, { Z: () => M }), n(388685), n(953529), n(781311), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(348327),
    o = n.n(a),
    c = n(100568),
    d = n(417865),
    u = n(442837),
    m = n(481060),
    g = n(239091),
    p = n(596454),
    f = n(493773),
    h = n(607070),
    x = n(933557),
    b = n(471445),
    j = n(339085),
    v = n(565138),
    _ = n(372769),
    O = n(690221),
    y = n(524329),
    C = n(575258),
    N = n(592125),
    E = n(4912),
    I = n(626135),
    S = n(700785),
    T = n(434404),
    P = n(92160),
    w = n(981631),
    R = n(231338),
    D = n(388032),
    Z = n(859267);
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
function L(e, t) {
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
let k = "WELCOME_CHANNEL",
    G = (e) => {
        var t;
        let l,
            { guildId: a, welcomeChannel: o, onEdit: f, onChannelReorder: h, isDropHovered: v, index: _ } = e,
            O = i.useRef(null),
            y = (0, u.e7)([N.Z], () => N.Z.getChannel(o.channel_id)),
            C = (0, u.e7)([j.ZP], () => (null != o.emoji_id ? j.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            I = null != y && S.Uu(w.Plq.VIEW_CHANNEL, y),
            T = null != (t = (0, b.KS)(y)) ? t : m.VL1,
            P = (0, x.ZP)(y, !1),
            G = () => {
                (0, m.ZDy)(
                    async () => {
                        let { default: e } = await n.e("73196").then(n.bind(n, 514698));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                L(A({}, t), {
                                    onConfirm: () => {
                                        f(), t.onClose();
                                    },
                                    channelId: o.channel_id,
                                }),
                            );
                    },
                    { onCloseRequest: () => R.Vq },
                );
            },
            [, M] = (0, c.c)({
                type: k,
                item: {
                    channel: o,
                    index: _,
                },
                end: (e, t) => {
                    null == e || t.didDrop() || h(e.channel, null, !0);
                },
            }),
            [, U] = (0, d.L)({
                accept: k,
                hover: (e) => {
                    h(e.channel, _, !1);
                },
                drop: (e) => {
                    h(e.channel, _, !0);
                },
            });
        return (
            i.useLayoutEffect(
                () => (
                    M(U(O)),
                    () => {
                        M(null), U(null);
                    }
                ),
                [M, U],
            ),
            (l = I
                ? null != C || null != o.emoji_name
                    ? (0, r.jsx)(p.Z, {
                          emojiId: null == C ? void 0 : C.id,
                          emojiName: null != C ? C.name : o.emoji_name,
                          animated: !!(null == C ? void 0 : C.animated),
                      })
                    : (0, r.jsx)(T, {
                          size: "md",
                          color: "currentColor",
                          className: Z.channelIcon,
                      })
                : (0, r.jsx)(E.Z, {
                      width: 24,
                      height: 24,
                      className: Z.warningIcon,
                  })),
            (0, r.jsxs)("div", {
                className: s()(Z.welcomeChannel, { [Z.dragging]: v }),
                ref: O,
                "data-dnd-name": o.description,
                onContextMenu: (e) => {
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("68535").then(n.bind(n, 602320));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                L(A({}, t), {
                                    guildId: a,
                                    welcomeChannel: o,
                                    onChannelReorder: h,
                                    onShowDeleteModal: G,
                                    index: _,
                                }),
                            );
                    });
                },
                children: [
                    l,
                    (0, r.jsxs)("div", {
                        className: Z.channelDescriptionWrapper,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: o.description,
                            }),
                            (0, r.jsxs)(m.Text, {
                                className: I ? void 0 : Z.channelWarning,
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: [
                                    (0, r.jsx)(T, {
                                        className: Z.channelTitleIcon,
                                        size: "xxs",
                                        color: "currentColor",
                                    }),
                                    (0, r.jsx)("span", { children: I ? P : D.intl.string(D.t.zFuCsL) }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(m.hU, {
                        variant: "icon-only",
                        icon: m.XHJ,
                        "aria-label": D.intl.string(D.t.JYBc3N),
                        onClick: G,
                    }),
                ],
            })
        );
    },
    M = (e) => {
        let { guild: t } = e,
            { welcomeSettings: l, originalWelcomeSettings: s } = (0, u.e7)([C.Z], () => C.Z.getSettingsProps()),
            a = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
            [c, d] = i.useState(null),
            [g, p] = i.useState(!1),
            [x, b] = i.useState(!1),
            { description: j, channels: N, enabled: S } = l,
            R = (e) => {
                null != t && (o()(e, s.channels) || ((0, y.Es)(t.id, { channels: e }), p(!0)));
            },
            k = (e) => {
                null != t && e !== s.enabled && ((0, y.Es)(t.id, { enabled: e }), b(!a), p(!0));
            },
            M = (e, t, n) => {
                if (null == N) return;
                let r = N.indexOf(e),
                    i = [...N];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, y.VP)({ channels: i })),
                    n ? (R(i), d(null)) : d(t);
            },
            U = i.useRef(!1);
        (0, f.ZP)(() => () => {
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
                            I.default.track(w.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
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
                  title: D.intl.string(D.t["2rkmDg"]),
                  tag: m.RB0.H1,
                  children: [
                      (0, r.jsx)("div", {
                          className: Z.notice,
                          children: (0, r.jsxs)(m.Text, {
                              variant: "text-md/normal",
                              children: [
                                  (0, r.jsx)(E.Z, { className: Z.noticeIcon }),
                                  D.intl.format(D.t.oj2vi4, {
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
                          children: D.intl.string(D.t["w2d74+"]),
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
                                                        L(A({}, n), {
                                                            guildId: t.id,
                                                            isPreview: !0,
                                                        }),
                                                    );
                                            });
                                    },
                          onToggle:
                              S || (null == N ? void 0 : N.length) !== 0
                                  ? () => {
                                        k(!S);
                                    }
                                  : void 0,
                          animateStatus: x,
                          firstLine: S ? D.intl.string(D.t.JbB7Qk) : D.intl.string(D.t["/bd0Qk"]),
                          secondLine: S ? D.intl.string(D.t["TA1g7+"]) : D.intl.string(D.t.nc6r1N),
                      }),
                      (0, r.jsxs)("div", {
                          className: Z.previewContainer,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: Z.welcomeHeader,
                                  children: [
                                      (0, r.jsx)(v.Z, {
                                          size: v.Z.Sizes.LARGER,
                                          className: Z.icon,
                                          guild: t,
                                          animate: !0,
                                          tabIndex: -1,
                                      }),
                                      (0, r.jsx)(m.X6q, {
                                          className: Z.welcomeTitle,
                                          variant: "heading-xl/semibold",
                                          children: D.intl.format(D.t["0aydCA"], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, r.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              (0, r.jsx)(_.Z, {
                                                                  guild: t,
                                                                  className: Z.headerGuildBadge,
                                                                  flowerStarClassName: Z.flowerStar,
                                                              }),
                                                              (0, r.jsx)("strong", { children: e }),
                                                          ],
                                                      },
                                                      n,
                                                  ),
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: Z.descriptionWrapper,
                                          children: (0, r.jsx)(m.Kx8, {
                                              placeholder: D.intl.string(D.t.qzZHaW),
                                              onChange: (e) => {
                                                  (0, y.VP)({ description: e });
                                              },
                                              onBlur: () => {
                                                  null != t &&
                                                      j !== s.description &&
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
                              (0, r.jsx)(m.$i$, { className: Z.divider }),
                              (0, r.jsxs)("div", {
                                  className: Z.welcomeChannels,
                                  children: [
                                      (0, r.jsx)(m.vwX, { children: D.intl.string(D.t.euJXzc) }),
                                      (0, r.jsx)(m.Text, {
                                          variant: "text-sm/normal",
                                          className: Z.addChannelSubtext,
                                          children: D.intl.string(D.t.VOnnn5),
                                      }),
                                      null == N
                                          ? void 0
                                          : N.map((e, n) =>
                                                (0, r.jsx)(
                                                    G,
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
                                                                    ((0, y.VP)({ enabled: !1 }), k(!1));
                                                        },
                                                        onChannelReorder: M,
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
