n.d(t, { v: () => D }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    f = n(584973),
    _ = n(377171),
    p = n(243778),
    h = n(594174),
    m = n(768581),
    g = n(906605),
    E = n(106301),
    b = n(833858),
    y = n(866071),
    O = n(223135),
    v = n(981631),
    I = n(921944),
    T = n(231338),
    S = n(388032),
    A = n(1165);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = (e) => {
        let { style: t, className: n, name: i, icon: o } = e;
        return (0, r.jsx)(d.ua7, {
            text: i,
            children: (e) =>
                (0, r.jsx)(
                    "div",
                    P(
                        C(
                            {
                                className: a()(n, A.iconWidget),
                                style: t,
                            },
                            e,
                        ),
                        { children: null != o && o },
                    ),
                ),
        });
    },
    D = (e) => {
        let { currentStatus: t, channel: o } = e,
            s = i.useRef(E.Z.getRecentCustomStatuses()),
            [N, R] = i.useState(!1),
            P = (0, b.V)(),
            [D, L] = i.useState(null != t ? t : null),
            x = (0, c.e7)([h.default], () => h.default.getCurrentUser()),
            M = i.useMemo(() => [], []),
            k = i.useRef(null).current;
        i.useEffect(
            () => (
                N || M.push(u.z.HANG_STATUS_NEW_BADGE),
                () => {
                    N && (null == k || k(I.L.PRIMARY));
                }
            ),
            [N, M, k],
        );
        let j = (e, t) => {
                e.stopPropagation(), (0, g.Zx)(t, !0), R(!0);
            },
            U = (e, t) => {
                e.stopPropagation(), (0, g._s)(t.status, t.emoji, !0), R(!0);
            },
            G = i.useCallback((e) => {
                e.stopPropagation(), (0, g.Sc)(!0);
            }, []),
            B = (e) => {
                e.stopPropagation(),
                    (0, d.ZDy)(async () => {
                        let { default: e } = await n.e("1631").then(n.bind(n, 333541));
                        return (t) => (0, r.jsx)(e, C({}, t));
                    }),
                    R(!0);
            },
            Z = i.useCallback((e) => {
                L({
                    type: v.IIU.HANG_STATUS,
                    name: "Hang Status",
                    state: e,
                });
            }, []),
            F = i.useCallback((e) => {
                L({
                    type: v.IIU.HANG_STATUS,
                    name: "Hang Status",
                    state: T.tN.CUSTOM,
                    details: e.status,
                    emoji: e.emoji,
                });
            }, []);
        return (0, r.jsx)(p.ZP, {
            contentTypes: M,
            children: (e) => {
                let { visibleContent: n, markAsDismissed: i } = e;
                return (
                    (k = i),
                    (0, r.jsxs)("div", {
                        className: A.container,
                        children: [
                            n === u.z.HANG_STATUS_NEW_BADGE &&
                                (0, r.jsxs)("div", {
                                    className: A.onboarding,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: A.title,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-md/semibold",
                                                    color: "header-primary",
                                                    children: S.intl.string(S.t["8ka8lp"]),
                                                }),
                                                (0, r.jsx)(d.IGR, {
                                                    text: S.intl.string(S.t.oW0eUV),
                                                    color: _.Z.BG_BRAND,
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            className: A.helpText,
                                            children: S.intl.string(S.t.GFo2Gh),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: A.iconGroup,
                                            children: [
                                                null != x &&
                                                    (0, r.jsxs)("div", {
                                                        className: A.avatarWrapper,
                                                        children: [
                                                            (0, r.jsx)(d.qEK, {
                                                                className: A.avatar,
                                                                size: d.EFr.SIZE_40,
                                                                src: (0, m.ov)(x),
                                                                "aria-hidden": !0,
                                                            }),
                                                            (0, r.jsx)("div", { className: A.outline }),
                                                        ],
                                                    }),
                                                (0, r.jsx)(O.Z, {
                                                    className: A.statusIcon,
                                                    hangStatusActivity: D,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, r.jsxs)("div", {
                                className: A.options,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: A.iconsContainer,
                                        children: [
                                            Object.entries(P).map((e) => {
                                                let [n, i] = e;
                                                return (0, r.jsx)(
                                                    d.P3F,
                                                    {
                                                        "aria-label": i.title,
                                                        onMouseEnter: () => Z(n),
                                                        onClick: (e) => j(e, n),
                                                        children: (0, r.jsx)(w, {
                                                            className: a()(A.iconWidget, {
                                                                [A.selectedWidget]:
                                                                    n === (null == t ? void 0 : t.state),
                                                            }),
                                                            name: i.title,
                                                            icon: (0, r.jsx)("img", {
                                                                src: i.icon,
                                                                alt: "",
                                                                className: A.icon,
                                                            }),
                                                            style:
                                                                n === (null == t ? void 0 : t.state)
                                                                    ? {
                                                                          backgroundColor:
                                                                              null != i.color ? i.color : void 0,
                                                                      }
                                                                    : {},
                                                        }),
                                                    },
                                                    n,
                                                );
                                            }),
                                            (0, r.jsx)(d.P3F, {
                                                "aria-label": S.intl.string(S.t.S90Fub),
                                                onClick: G,
                                                onMouseEnter: () => L(null),
                                                children: (0, r.jsx)(w, {
                                                    className: A.optionButton,
                                                    name: S.intl.string(S.t.S90Fub),
                                                    icon: (0, r.jsx)(d.t6m, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: A.editIcon,
                                                        colorClass: A.editIconColor,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", { className: A.divider }),
                                    (0, r.jsxs)("div", {
                                        className: A.iconsContainer,
                                        children: [
                                            s.current.map((e, n) => {
                                                let i =
                                                        e.status === (null == t ? void 0 : t.details) &&
                                                        l().isEqual(e.emoji, null == t ? void 0 : t.emoji),
                                                    s = null != e.emoji && !(0, y.K)(e.emoji, o);
                                                return (0, r.jsxs)(
                                                    d.P3F,
                                                    {
                                                        "aria-label": e.status,
                                                        onMouseEnter: () => F(e),
                                                        onClick: s ? void 0 : (t) => U(t, e),
                                                        className: A.statusOptionContainer,
                                                        children: [
                                                            (0, r.jsx)(w, {
                                                                className: a()(A.iconWidget, { [A.selectedWidget]: i }),
                                                                name: e.status,
                                                                icon:
                                                                    null != e.emoji
                                                                        ? (0, r.jsx)(f.Z, {
                                                                              className: A.customIcon,
                                                                              emoji: e.emoji,
                                                                              hideTooltip: !0,
                                                                          })
                                                                        : null,
                                                                style: i
                                                                    ? { backgroundColor: "#7174B7B3" }
                                                                    : { backgroundColor: "#6466914D" },
                                                            }),
                                                            s
                                                                ? (0, r.jsx)("div", {
                                                                      className: A.emojiLockIconContainer,
                                                                      children: (0, r.jsx)(d.mBM, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: A.emojiLockIcon,
                                                                      }),
                                                                  })
                                                                : null,
                                                        ],
                                                    },
                                                    "custom-status-".concat(n),
                                                );
                                            }),
                                            s.current.length > 0
                                                ? (0, r.jsx)(
                                                      d.P3F,
                                                      {
                                                          "aria-label":
                                                              null != t
                                                                  ? S.intl.string(S.t.IN2LTk)
                                                                  : S.intl.string(S.t.UDg0qK),
                                                          onClick: B,
                                                          children: (0, r.jsx)(w, {
                                                              className: A.optionButton,
                                                              name:
                                                                  null != t
                                                                      ? S.intl.string(S.t.IN2LTk)
                                                                      : S.intl.string(S.t.UDg0qK),
                                                              icon: (0, r.jsx)(d.vdY, {
                                                                  size: "custom",
                                                                  color: "currentColor",
                                                                  width: 20,
                                                                  height: 20,
                                                                  colorClass: A.editIconColor,
                                                              }),
                                                          }),
                                                      },
                                                      "custom-status-edit",
                                                  )
                                                : (0, r.jsxs)(
                                                      d.P3F,
                                                      {
                                                          "aria-label": S.intl.string(S.t.UDg0qK),
                                                          onClick: B,
                                                          className: A.setCustomButton,
                                                          children: [
                                                              (0, r.jsx)(d.vdY, {
                                                                  size: "xs",
                                                                  color: "currentColor",
                                                                  className: A.editIcon,
                                                                  colorClass: A.editIconColor,
                                                              }),
                                                              (0, r.jsx)(d.Text, {
                                                                  variant: "text-xs/medium",
                                                                  color: "interactive-active",
                                                                  children: S.intl.string(S.t.UDg0qK),
                                                              }),
                                                          ],
                                                      },
                                                      "custom-status-edit-full",
                                                  ),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            },
        });
    };
