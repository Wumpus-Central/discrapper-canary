n.d(t, { Z: () => M }), n(388685), n(953529), n(781311), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(348327),
    o = n.n(s),
    c = n(100568),
    d = n(417865),
    u = n(442837),
    g = n(481060),
    m = n(239091),
    p = n(596454),
    f = n(493773),
    h = n(607070),
    b = n(933557),
    x = n(471445),
    j = n(339085),
    v = n(565138),
    _ = n(372769),
    C = n(690221),
    O = n(524329),
    y = n(575258),
    N = n(592125),
    E = n(4912),
    I = n(626135),
    S = n(700785),
    T = n(434404),
    P = n(92160),
    w = n(981631),
    Z = n(231338),
    R = n(388032),
    D = n(859267);
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
            { guildId: s, welcomeChannel: o, onEdit: f, onChannelReorder: h, isDropHovered: v, index: _ } = e,
            C = i.useRef(null),
            O = (0, u.e7)([N.Z], () => N.Z.getChannel(o.channel_id)),
            y = (0, u.e7)([j.ZP], () => (null != o.emoji_id ? j.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            I = null != O && S.Uu(w.Plq.VIEW_CHANNEL, O),
            T = null != (t = (0, x.KS)(O)) ? t : g.VL1,
            P = (0, b.ZP)(O, !1),
            G = () => {
                (0, g.ZDy)(
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
                    { onCloseRequest: () => Z.Vq },
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
                    M(U(C)),
                    () => {
                        M(null), U(null);
                    }
                ),
                [M, U],
            ),
            (l = I
                ? null != y || null != o.emoji_name
                    ? (0, r.jsx)(p.Z, {
                          emojiId: null == y ? void 0 : y.id,
                          emojiName: null != y ? y.name : o.emoji_name,
                          animated: !!(null == y ? void 0 : y.animated),
                      })
                    : (0, r.jsx)(T, {
                          size: "md",
                          color: "currentColor",
                          className: D.channelIcon,
                      })
                : (0, r.jsx)(E.Z, {
                      width: 24,
                      height: 24,
                      className: D.warningIcon,
                  })),
            (0, r.jsxs)("div", {
                className: a()(D.welcomeChannel, { [D.dragging]: v }),
                ref: C,
                "data-dnd-name": o.description,
                onContextMenu: (e) => {
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e("68535").then(n.bind(n, 602320));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                L(A({}, t), {
                                    guildId: s,
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
                        className: D.channelDescriptionWrapper,
                        children: [
                            (0, r.jsx)(g.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: o.description,
                            }),
                            (0, r.jsxs)(g.Text, {
                                className: I ? void 0 : D.channelWarning,
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: [
                                    (0, r.jsx)(T, {
                                        className: D.channelTitleIcon,
                                        size: "xxs",
                                        color: "currentColor",
                                    }),
                                    (0, r.jsx)("span", { children: I ? P : R.intl.string(R.t.zFuCsL) }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.hU, {
                        variant: "icon-only",
                        icon: g.XHJ,
                        "aria-label": R.intl.string(R.t.JYBc3N),
                        onClick: G,
                    }),
                ],
            })
        );
    },
    M = (e) => {
        let { guild: t } = e,
            { welcomeSettings: l, originalWelcomeSettings: a } = (0, u.e7)([y.Z], () => y.Z.getSettingsProps()),
            s = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
            [c, d] = i.useState(null),
            [m, p] = i.useState(!1),
            [b, x] = i.useState(!1),
            { description: j, channels: N, enabled: S } = l,
            Z = (e) => {
                null != t && (o()(e, a.channels) || ((0, O.Es)(t.id, { channels: e }), p(!0)));
            },
            k = (e) => {
                null != t && e !== a.enabled && ((0, O.Es)(t.id, { enabled: e }), x(!s), p(!0));
            },
            M = (e, t, n) => {
                if (null == N) return;
                let r = N.indexOf(e),
                    i = [...N];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, O.VP)({ channels: i })),
                    n ? (Z(i), d(null)) : d(t);
            },
            U = i.useRef(!1);
        (0, f.ZP)(() => () => {
            U.current = !0;
        }),
            i.useEffect(
                () => () => {
                    if (U.current && m) {
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
                [m, N, j, S, t],
            ),
            i.useEffect(() => () => (0, O.sm)(), []);
        let B = i.useCallback(() => {
            null != t && T.Z.open(t.id, w.pNK.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(g.Heading, {
                          variant: "heading-lg/semibold",
                          children: R.intl.string(R.t["2rkmDg"]),
                      }),
                      (0, r.jsx)("div", {
                          className: D.notice,
                          children: (0, r.jsxs)(g.Text, {
                              variant: "text-md/normal",
                              children: [
                                  (0, r.jsx)(E.Z, { className: D.noticeIcon }),
                                  R.intl.format(R.t.oj2vi4, {
                                      onboardingLink: (e) =>
                                          (0, r.jsx)(C.Z, {
                                              onClick: B,
                                              children: e,
                                          }),
                                  }),
                              ],
                          }),
                      }),
                      (0, r.jsx)(g.Text, {
                          variant: "text-sm/normal",
                          children: R.intl.string(R.t["w2d74+"]),
                      }),
                      (0, r.jsx)(P.Z, {
                          enabled: S,
                          onPreview:
                              (null == N ? void 0 : N.length) === 0
                                  ? void 0
                                  : () => {
                                        null != t &&
                                            (0, g.ZDy)(async () => {
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
                          animateStatus: b,
                          firstLine: S ? R.intl.string(R.t.JbB7Qk) : R.intl.string(R.t["/bd0Qk"]),
                          secondLine: S ? R.intl.string(R.t["TA1g7+"]) : R.intl.string(R.t.nc6r1N),
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
                                      (0, r.jsx)(g.Heading, {
                                          className: D.welcomeTitle,
                                          variant: "heading-xl/semibold",
                                          children: R.intl.format(R.t["0aydCA"], {
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
                                          children: (0, r.jsx)(g.Kx8, {
                                              placeholder: R.intl.string(R.t.qzZHaW),
                                              onChange: (e) => {
                                                  (0, O.VP)({ description: e });
                                              },
                                              onBlur: () => {
                                                  null != t &&
                                                      j !== a.description &&
                                                      ((0, O.Es)(t.id, { description: null == j ? void 0 : j.trim() }),
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
                              (0, r.jsx)(g.izJ, { className: D.divider }),
                              (0, r.jsx)("div", {
                                  className: D.welcomeChannels,
                                  children: (0, r.jsx)(g.gNt, {
                                      label: R.intl.string(R.t.euJXzc),
                                      description: R.intl.string(R.t.VOnnn5),
                                      children:
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
                                                                    (0, O.VP)({ channels: t }),
                                                                    Z(t),
                                                                    0 === t.length &&
                                                                        S &&
                                                                        ((0, O.VP)({ enabled: !1 }), k(!1));
                                                            },
                                                            onChannelReorder: M,
                                                            isDropHovered: n === c,
                                                            index: n,
                                                        },
                                                        n,
                                                    ),
                                                ),
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    };
