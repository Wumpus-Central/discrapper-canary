n.d(t, { Z: () => U }), n(388685), n(953529), n(781311), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(348327),
    o = n.n(s),
    c = n(891371),
    d = n(692992),
    u = n(442837),
    g = n(481060),
    f = n(239091),
    m = n(596454),
    b = n(493773),
    p = n(607070),
    h = n(933557),
    x = n(471445),
    j = n(339085),
    v = n(565138),
    O = n(372769),
    C = n(690221),
    y = n(524329),
    N = n(575258),
    E = n(592125),
    I = n(4912),
    S = n(626135),
    _ = n(700785),
    T = n(434404),
    P = n(92160),
    w = n(981631),
    Z = n(231338),
    R = n(295907),
    D = n(388032),
    A = n(568880);
function L(e) {
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
let G = "WELCOME_CHANNEL",
    M = (e) => {
        var t;
        let l,
            { guildId: s, welcomeChannel: o, onEdit: b, onChannelReorder: p, isDropHovered: v, index: O } = e,
            C = i.useRef(null),
            y = (0, u.e7)([E.Z], () => E.Z.getChannel(o.channel_id)),
            N = (0, u.e7)([j.ZP], () => (null != o.emoji_id ? j.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            S = null != y && _.Uu(w.Plq.VIEW_CHANNEL, y),
            T = null != (t = (0, x.KS)(y)) ? t : g.VL1,
            P = (0, h.ZP)(y, !1),
            R = () => {
                (0, g.ZDy)(
                    async () => {
                        let { default: e } = await n.e("73196").then(n.bind(n, 514698));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                k(L({}, t), {
                                    onConfirm: () => {
                                        b(), t.onClose();
                                    },
                                    channelId: o.channel_id,
                                }),
                            );
                    },
                    { onCloseRequest: () => Z.Vq },
                );
            },
            [, M] = (0, c.c)({
                type: G,
                item: {
                    channel: o,
                    index: O,
                },
                end: (e, t) => {
                    null == e || t.didDrop() || p(e.channel, null, !0);
                },
            }),
            [, U] = (0, d.L)({
                accept: G,
                hover: (e) => {
                    p(e.channel, O, !1);
                },
                drop: (e) => {
                    p(e.channel, O, !0);
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
            (l = S
                ? null != N || null != o.emoji_name
                    ? (0, r.jsx)(m.Z, {
                          emojiId: null == N ? void 0 : N.id,
                          emojiName: null != N ? N.name : o.emoji_name,
                          animated: !!(null == N ? void 0 : N.animated),
                      })
                    : (0, r.jsx)(T, {
                          size: "md",
                          color: "currentColor",
                          className: A.channelIcon,
                      })
                : (0, r.jsx)(I.Z, {
                      width: 24,
                      height: 24,
                      className: A.warningIcon,
                  })),
            (0, r.jsxs)("div", {
                className: a()(A.welcomeChannel, { [A.dragging]: v }),
                ref: C,
                "data-dnd-name": o.description,
                onContextMenu: (e) => {
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("68535").then(n.bind(n, 602320));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                k(L({}, t), {
                                    guildId: s,
                                    welcomeChannel: o,
                                    onChannelReorder: p,
                                    onShowDeleteModal: R,
                                    index: O,
                                }),
                            );
                    });
                },
                children: [
                    l,
                    (0, r.jsxs)("div", {
                        className: A.channelDescriptionWrapper,
                        children: [
                            (0, r.jsx)(g.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: o.description,
                            }),
                            (0, r.jsxs)(g.Text, {
                                className: S ? void 0 : A.channelWarning,
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: [
                                    (0, r.jsx)(T, {
                                        className: A.channelTitleIcon,
                                        size: "xxs",
                                        color: "currentColor",
                                    }),
                                    (0, r.jsx)("span", { children: S ? P : D.intl.string(D.t.zFuCsF) }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.hU, {
                        variant: "icon-only",
                        icon: g.XHJ,
                        "aria-label": D.intl.string(D.t.JYBc3K),
                        onClick: R,
                    }),
                ],
            })
        );
    },
    U = (e) => {
        let { guild: t } = e,
            { welcomeSettings: l, originalWelcomeSettings: a } = (0, u.e7)([N.Z], () => N.Z.getSettingsProps()),
            s = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            [c, d] = i.useState(null),
            [f, m] = i.useState(!1),
            [h, x] = i.useState(!1),
            { description: j, channels: E, enabled: _ } = l,
            Z = (e) => {
                null != t && (o()(e, a.channels) || ((0, y.Es)(t.id, { channels: e }), m(!0)));
            },
            G = (e) => {
                null != t && e !== a.enabled && ((0, y.Es)(t.id, { enabled: e }), x(!s), m(!0));
            },
            U = (e, t, n) => {
                if (null == E) return;
                let r = E.indexOf(e),
                    i = [...E];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, y.VP)({ channels: i })),
                    n ? (Z(i), d(null)) : d(t);
            },
            B = i.useRef(!1);
        (0, b.ZP)(() => () => {
            B.current = !0;
        }),
            i.useEffect(
                () => () => {
                    if (B.current && f) {
                        let e = [],
                            n = [],
                            r = !1;
                        null == E ||
                            E.forEach((t) => {
                                e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = !0);
                            }),
                            S.default.track(w.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                                guild_id: null == t ? void 0 : t.id,
                                options: e,
                                options_channel_ids: n,
                                guild_description: j,
                                has_custom_emojis: r,
                                is_enabled: _,
                            });
                    }
                },
                [f, E, j, _, t],
            ),
            i.useEffect(() => () => (0, y.sm)(), []);
        let F = i.useCallback(() => {
            null != t && T.Z.open(t.id, w.pNK.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(g.Heading, {
                          variant: "heading-lg/semibold",
                          children: D.intl.string(D.t["2rkmDr"]),
                      }),
                      (0, r.jsx)("div", {
                          className: A.notice,
                          children: (0, r.jsxs)(g.Text, {
                              variant: "text-md/normal",
                              children: [
                                  (0, r.jsx)(I.Z, { className: A.noticeIcon }),
                                  D.intl.format(D.t["oj2vi+"], {
                                      onboardingLink: (e) =>
                                          (0, r.jsx)(C.Z, {
                                              onClick: F,
                                              children: e,
                                          }),
                                  }),
                              ],
                          }),
                      }),
                      (0, r.jsx)(g.Text, {
                          variant: "text-sm/normal",
                          children: D.intl.string(D.t.w2d74x),
                      }),
                      (0, r.jsx)(P.Z, {
                          enabled: _,
                          onPreview:
                              (null == E ? void 0 : E.length) === 0
                                  ? void 0
                                  : () => {
                                        null != t &&
                                            (0, g.ZDy)(async () => {
                                                let { default: e } = await n.e("90542").then(n.bind(n, 184782));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        k(L({}, n), {
                                                            guildId: t.id,
                                                            isPreview: !0,
                                                        }),
                                                    );
                                            });
                                    },
                          onToggle:
                              _ || (null == E ? void 0 : E.length) !== 0
                                  ? () => {
                                        G(!_);
                                    }
                                  : void 0,
                          animateStatus: h,
                          firstLine: _ ? D.intl.string(D.t.JbB7Ql) : D.intl.string(D.t["/bd0Qv"]),
                          secondLine: _ ? D.intl.string(D.t.TA1g7z) : D.intl.string(D.t.nc6r1B),
                      }),
                      (0, r.jsxs)("div", {
                          className: A.previewContainer,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: A.welcomeHeader,
                                  children: [
                                      (0, r.jsx)(v.Z, {
                                          size: v.Z.Sizes.LARGER,
                                          className: A.icon,
                                          guild: t,
                                          animate: !0,
                                          tabIndex: -1,
                                      }),
                                      (0, r.jsx)(g.Heading, {
                                          className: A.welcomeTitle,
                                          variant: "heading-xl/semibold",
                                          children: D.intl.format(D.t["0aydCN"], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, r.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              (0, r.jsx)(O.Z, {
                                                                  guild: t,
                                                                  className: A.headerGuildBadge,
                                                                  flowerStarClassName: A.flowerStar,
                                                              }),
                                                              (0, r.jsx)("strong", { children: e }),
                                                          ],
                                                      },
                                                      n,
                                                  ),
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: A.descriptionWrapper,
                                          children: (0, r.jsx)(g.Kx8, {
                                              placeholder: D.intl.string(D.t.qzZHaX),
                                              onChange: (e) => {
                                                  (0, y.VP)({ description: e });
                                              },
                                              onBlur: () => {
                                                  null != t &&
                                                      j !== a.description &&
                                                      ((0, y.Es)(t.id, { description: null == j ? void 0 : j.trim() }),
                                                      m(!0));
                                              },
                                              onKeyDown: (e) => {
                                                  e.key === R.vn.ENTER && e.preventDefault();
                                              },
                                              value: j,
                                              maxLength: 140,
                                              disabled: !0,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(g.izJ, { className: A.divider }),
                              (0, r.jsx)("div", {
                                  className: A.welcomeChannels,
                                  children: (0, r.jsx)(g.gNt, {
                                      label: D.intl.string(D.t.euJXzT),
                                      description: D.intl.string(D.t.VOnnnz),
                                      children:
                                          null == E
                                              ? void 0
                                              : E.map((e, n) =>
                                                    (0, r.jsx)(
                                                        M,
                                                        {
                                                            guildId: t.id,
                                                            welcomeChannel: e,
                                                            onEdit: (e) => {
                                                                let t = [...(null != E ? E : [])];
                                                                null == e ? t.splice(n, 1) : (t[n] = e),
                                                                    (0, y.VP)({ channels: t }),
                                                                    Z(t),
                                                                    0 === t.length &&
                                                                        _ &&
                                                                        ((0, y.VP)({ enabled: !1 }), G(!1));
                                                            },
                                                            onChannelReorder: U,
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
