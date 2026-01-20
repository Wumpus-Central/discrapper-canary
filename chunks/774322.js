n.d(t, {
    GM: () => V,
    HU: () => G,
    Nk: () => H,
    Q0: () => w,
    V4: () => z,
    _B: () => P,
    dI: () => M,
    do: () => x,
    f: () => D,
    mW: () => R,
    uB: () => K,
}),
    n(781311),
    n(35282);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(681715),
    l = n(481060),
    c = n(592125),
    u = n(944486),
    d = n(914010),
    f = n(594174),
    p = n(5192),
    _ = n(607802),
    h = n(532428),
    m = n(991896),
    g = n(41054),
    E = n(971212),
    b = n(142243),
    y = n(723642),
    O = n(981631),
    v = n(268685),
    S = n(388032),
    I = n(467611);
function T(e, t, n) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { icon: t, label: n, sublabel: i, onSelect: a, navId: o, index: s, selected: c } = e,
        u = () => {
            a({
                searchAutocompleteSelectAction: y.ZW.CLICK,
                selectedIndex: s,
            });
        };
    return (0, r.jsx)(
        l.P3F,
        N(
            C(
                {
                    className: I.itemContainer,
                    onClick: u,
                },
                (0, b.lR)({
                    navId: o,
                    index: s,
                    selected: c,
                }),
            ),
            {
                children: (0, r.jsxs)("div", {
                    className: I.item,
                    children: [
                        t,
                        null == i
                            ? n
                            : (0, r.jsxs)("div", {
                                  children: [n, i],
                              }),
                    ],
                }),
            },
        ),
    );
}
function w(e) {
    let { label: t, className: n } = e;
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        className: n,
        children: t,
    });
}
function R(e) {
    var t, n;
    let { searchTokenType: i, answer: a } = e,
        o = null != (n = null == (t = h.ZP[i]) ? void 0 : t.key) ? n : "",
        s = null != a ? a : (0, _.Ko)(i);
    return (0, r.jsxs)("div", {
        className: I.filterSublabelTextContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                children: o,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: s,
            }),
        ],
    });
}
function D(e) {
    let t = (0, _.nl)(e);
    return (0, r.jsxs)("div", {
        className: I.channelNameContainer,
        children: [
            (0, r.jsx)(g.Z, {
                channel: e,
                avatarSize: l.EFr.SIZE_16,
                iconClassName: I.channelNameIcon,
                iconSize: "xs",
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: I.channelName,
                children: t,
            }),
        ],
    });
}
function x(e) {
    let { searchContext: t } = e;
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        text: S.intl.string(S.t.dwAvX1),
        position: "left",
        children: (0, r.jsx)(l.P3F, {
            onClick: () => m.Z.clearSearchHistory(t),
            className: I.clearSearchHistory,
            title: S.intl.string(S.t.dwAvX1),
            "aria-label": S.intl.string(S.t.dwAvX1),
            children: (0, r.jsx)(l.XHJ, {
                size: "sm",
                color: "currentColor",
                className: I.clearSearchHistoryIcon,
            }),
        }),
    });
}
function L(e) {
    let { title: t, showDivider: n, children: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n && (0, r.jsx)("div", { className: I.divider }),
            (0, r.jsx)(
                "ul",
                {
                    role: "group",
                    "aria-labelledby": "".concat(t, "-header"),
                    className: I.groupWrapper,
                    children: i,
                },
                t,
            ),
        ],
    });
}
function j(e) {
    let { headerId: t, titleText: n, trailingIcon: i } = e;
    return (0, r.jsxs)("div", {
        id: t,
        className: I.groupHeader,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: n,
            }),
            i,
        ],
    });
}
function M(e) {
    let { navId: t, item: n, startingIndex: i, selectedIndex: a } = e,
        o = i,
        { rows: s, title: l, trailingIcon: c } = n.data;
    return (0, r.jsxs)(L, {
        title: l,
        showDivider: i > 0,
        children: [
            (0, r.jsx)(j, {
                headerId: l,
                titleText: l,
                trailingIcon: c,
            }),
            s.map((e) => {
                let { icon: i, label: s, sublabel: c, onSelect: u } = e.data,
                    d = a === o,
                    f = o;
                return (
                    (o += 1),
                    (0, r.jsx)(
                        P,
                        {
                            icon: i,
                            label: s,
                            sublabel: c,
                            onSelect: u,
                            navId: t,
                            index: f,
                            selected: d,
                        },
                        "".concat(n.type, "-").concat(l, "-").concat(f),
                    )
                );
            }),
        ],
    });
}
function k(e) {
    let { size: t, user: n, className: i } = e,
        a = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        s = (0, v.px)(t);
    return (0, r.jsx)(l.qEK, {
        size: t,
        src: n.getAvatarURL(a, s),
        "aria-label": n.username,
        className: i,
    });
}
function U(e) {
    let { user: t } = e,
        { selectedGuildId: n, selectedChannelId: i } = (0, o.cj)([d.Z, u.Z], () => {
            let e = d.Z.getGuildId(),
                t = u.Z.getChannelId(e);
            return {
                selectedGuildId: e,
                selectedChannelId: t,
            };
        }),
        a = p.ZP.useName(n, i, t);
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: a,
    });
}
function G(e) {
    let { value: t, avatarSize: n, iconSize: i } = e,
        a = "",
        o = (0, b.ew)(t).map((e, t) => {
            let o = e.getFullMatch();
            if (0 === o.trim().length) return null;
            a += o;
            let s = O.TNx.test(e.type),
                l = O.KA4.test(e.type),
                c = "".concat(e.type, "-").concat(o, "-").concat(t);
            if (l)
                switch (e.type) {
                    case O.dCx.ANSWER_USERNAME_FROM:
                    case O.dCx.ANSWER_USERNAME_MENTIONS:
                        return (0, r.jsx)(
                            F,
                            {
                                token: e,
                                avatarSize: n,
                            },
                            c,
                        );
                    case O.dCx.ANSWER_IN:
                        return (0, r.jsx)(
                            B,
                            {
                                token: e,
                                avatarSize: n,
                                iconSize: i,
                            },
                            c,
                        );
                    default:
                        return (0, r.jsx)(
                            Z,
                            {
                                text: o,
                                className: I.answerPill,
                            },
                            c,
                        );
                }
            return (0, r.jsx)(
                Z,
                {
                    text: o,
                    className: s ? I.filterPill : I.nonText,
                },
                c,
            );
        });
    return {
        label: (0, r.jsx)("div", {
            className: I.autocompletePillContainer,
            children: o,
        }),
        ariaLabel: a,
    };
}
function Z(e) {
    let { text: t, className: n } = e;
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-strong",
        className: n,
        children: t,
    });
}
function F(e) {
    let { token: t, avatarSize: n } = e,
        i = t.getFullMatch(),
        a = t.getData("userId"),
        s = (0, o.e7)([f.default], () => f.default.getUser(a));
    return null == s
        ? (0, r.jsx)(Z, {
              text: i,
              className: I.answerPill,
          })
        : (0, r.jsxs)("div", {
              className: I.answerPill,
              children: [
                  (0, r.jsx)(k, {
                      size: n,
                      user: s,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: s.username,
                  }),
              ],
          });
}
function B(e) {
    var t;
    let { token: n, avatarSize: i, iconSize: s } = e,
        u = n.getFullMatch(),
        d = null != (t = n.getData("channelIds")) ? t : [],
        f = (0, o.e7)([c.Z], () => c.Z.getChannel(d[0]));
    if (null == f)
        return (0, r.jsx)(Z, {
            text: u,
            className: I.answerPill,
        });
    let p = (0, _.nl)(f);
    return (0, r.jsxs)("div", {
        className: a()(I.answerPill, I.channelAnswerPill),
        children: [
            (0, r.jsx)(g.Z, {
                channel: f,
                avatarSize: i,
                iconClassName: I.channelPillIcon,
                iconSize: s,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: p,
            }),
        ],
    });
}
function V(e) {
    let { result: t, group: n } = e;
    if (n === O.rtL.HISTORY)
        return (0, r.jsx)(l._Ve, {
            size: "sm",
            color: "currentColor",
            className: I.itemIcon,
        });
    let { channel: i, user: a } = t;
    return null != i
        ? (0, r.jsx)(l.VL1, {
              size: "sm",
              color: "currentColor",
              className: I.itemIcon,
          })
        : null != a
          ? n === O.dCx.FILTER_MENTIONS
              ? (0, r.jsx)(l.lOy, {
                    size: "sm",
                    color: "currentColor",
                    className: I.itemIcon,
                })
              : (0, r.jsx)(l.tBG, {
                    size: "sm",
                    color: "currentColor",
                    className: I.itemIcon,
                })
          : null;
}
function H(e) {
    let { channel: t, user: n, text: i } = e;
    if (null != t) {
        var a;
        return {
            label: (0, r.jsxs)("div", {
                className: I.labelWithElements,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: null != (a = h.ZP[O.dCx.FILTER_IN].key) ? a : "",
                    }),
                    D(t),
                ],
            }),
            ariaLabel: t.name,
        };
    }
    return null != n
        ? {
              label: (0, r.jsxs)("div", {
                  className: I.labelWithElements,
                  children: [
                      (0, r.jsx)(k, {
                          size: l.EFr.SIZE_16,
                          user: n,
                      }),
                      (0, r.jsx)(U, { user: n }),
                  ],
              }),
              ariaLabel: n.username,
          }
        : {
              label: (0, r.jsx)(w, { label: i }),
              ariaLabel: i,
          };
}
function Y(e) {
    let { text: t, className: n, size: i } = e,
        a = (0, E.Xb)(t);
    return null != a
        ? (0, r.jsx)(a, {
              size: i,
              color: "currentColor",
              className: n,
          })
        : null;
}
function W(e) {
    let { text: t, className: n, size: i } = e,
        a = (0, E.Lw)(t);
    return null != a
        ? (0, r.jsx)(a, {
              size: i,
              color: "currentColor",
              className: n,
          })
        : null;
}
function K(e) {
    let { result: t, group: n } = e,
        { channel: i, user: a } = t;
    return null != i
        ? (0, r.jsx)(g.Z, {
              channel: i,
              avatarSize: l.EFr.SIZE_20,
              iconClassName: I.itemIcon,
              iconSize: "refresh_sm",
          })
        : null != a
          ? (0, r.jsx)(k, {
                size: l.EFr.SIZE_20,
                user: a,
                className: I.itemIcon,
            })
          : n === O.dCx.FILTER_HAS
            ? (0, r.jsx)(Y, {
                  size: "sm",
                  text: t.text,
                  className: I.itemIcon,
              })
            : n === O.dCx.FILTER_AUTHOR_TYPE
              ? (0, r.jsx)(W, {
                    size: "sm",
                    text: t.text,
                    className: I.itemIcon,
                })
              : null;
}
function z(e) {
    let { channel: t, user: n, text: i } = e;
    if (null != t) {
        let e = (0, _.nl)(t);
        return {
            label: (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: e,
            }),
            ariaLabel: t.name,
        };
    }
    return null != n
        ? {
              label: (0, r.jsxs)("div", {
                  className: I.labelWithElements,
                  children: [
                      (0, r.jsx)(U, { user: n }),
                      (0, r.jsx)(l.Text, {
                          variant: "text-sm/medium",
                          color: "text-subtle",
                          children: n.username,
                      }),
                  ],
              }),
              ariaLabel: n.username,
          }
        : {
              label: (0, r.jsx)(w, { label: i }),
              ariaLabel: i,
          };
}
