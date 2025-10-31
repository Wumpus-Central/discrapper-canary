n.d(t, {
    GM: () => F,
    HU: () => U,
    Nk: () => V,
    Q0: () => R,
    V4: () => Y,
    _B: () => N,
    dI: () => M,
    do: () => D,
    f: () => w,
    mW: () => P,
    uB: () => H,
}),
    n(781311),
    n(35282);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(681715),
    l = n(481060),
    c = n(592125),
    u = n(944486),
    d = n(914010),
    f = n(594174),
    _ = n(5192),
    p = n(607802),
    h = n(532428),
    m = n(628221),
    g = n(991896),
    E = n(579612),
    b = n(723642),
    y = n(981631),
    O = n(268685),
    v = n(388032),
    I = n(493090);
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
function S(e) {
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
function C(e, t) {
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
function N(e) {
    let { icon: t, label: n, sublabel: i, onSelect: a, navId: o, index: s, selected: c } = e,
        u = () => {
            a({
                searchAutocompleteSelectAction: b.ZW.CLICK,
                selectedIndex: s,
            });
        };
    return (0, r.jsx)(
        l.P3F,
        C(
            S(
                {
                    className: I.itemContainer,
                    onClick: u,
                },
                (0, m.lR)({
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
function R(e) {
    let { label: t, className: n } = e;
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        className: n,
        children: t,
    });
}
function P(e) {
    var t, n;
    let { searchTokenType: i, answer: a } = e,
        o = null != (n = null == (t = h.ZP[i]) ? void 0 : t.key) ? n : "",
        s = null != a ? a : (0, p.Ko)(i);
    return (0, r.jsxs)("div", {
        className: I.filterSublabelTextContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-secondary",
                children: o,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-tertiary",
                children: s,
            }),
        ],
    });
}
function w(e) {
    let t = (0, p.nl)(e);
    return (0, r.jsxs)("div", {
        className: I.channelNameContainer,
        children: [
            (0, r.jsx)(E.MC, {
                channel: e,
                className: I.channelNameIcon,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                className: I.channelName,
                children: t,
            }),
        ],
    });
}
function D(e) {
    let { searchContext: t } = e;
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        text: v.intl.string(v.t.dwAvX1),
        position: "left",
        children: (0, r.jsx)(l.P3F, {
            onClick: () => g.Z.clearSearchHistory(t),
            className: I.clearSearchHistory,
            title: v.intl.string(v.t.dwAvX1),
            "aria-label": v.intl.string(v.t.dwAvX1),
            children: (0, r.jsx)(l.XHJ, {
                size: "sm",
                color: "currentColor",
                className: I.clearSearchHistoryIcon,
            }),
        }),
    });
}
function x(e) {
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
function L(e) {
    let { headerId: t, titleText: n, trailingIcon: i } = e;
    return (0, r.jsxs)("div", {
        id: t,
        className: I.groupHeader,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-xs/semibold",
                color: "text-secondary",
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
    return (0, r.jsxs)(x, {
        title: l,
        showDivider: i > 0,
        children: [
            (0, r.jsx)(L, {
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
                        N,
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
function j(e) {
    let { size: t, user: n, className: i } = e,
        a = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        s = (0, O.px)(t);
    return (0, r.jsx)(l.qEK, {
        size: t,
        src: n.getAvatarURL(a, s),
        "aria-label": n.username,
        className: i,
    });
}
function k(e) {
    let { user: t } = e,
        { selectedGuildId: n, selectedChannelId: i } = (0, o.cj)([d.Z, u.Z], () => {
            let e = d.Z.getGuildId(),
                t = u.Z.getChannelId(e);
            return {
                selectedGuildId: e,
                selectedChannelId: t,
            };
        }),
        a = _.ZP.useName(n, i, t);
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: a,
    });
}
function U(e) {
    let { value: t } = e,
        n = "",
        i = (0, m.ew)(t).map((e, t) => {
            let i = e.getFullMatch();
            if (0 === i.trim().length) return null;
            n += i;
            let a = y.TNx.test(e.type),
                o = y.KA4.test(e.type),
                s = "".concat(e.type, "-").concat(i, "-").concat(t);
            if (o)
                switch (e.type) {
                    case y.dCx.ANSWER_USERNAME_FROM:
                    case y.dCx.ANSWER_USERNAME_MENTIONS:
                        return (0, r.jsx)(B, { token: e }, s);
                    case y.dCx.ANSWER_IN:
                        return (0, r.jsx)(Z, { token: e }, s);
                    default:
                        return (0, r.jsx)(
                            G,
                            {
                                text: i,
                                className: I.answerPill,
                            },
                            s,
                        );
                }
            return (0, r.jsx)(
                G,
                {
                    text: i,
                    className: a ? I.filterPill : I.nonText,
                },
                s,
            );
        });
    return {
        label: (0, r.jsx)("div", {
            className: I.autocompletePillContainer,
            children: i,
        }),
        ariaLabel: n,
    };
}
function G(e) {
    let { text: t, className: n } = e;
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-primary",
        className: n,
        children: t,
    });
}
function B(e) {
    let { token: t } = e,
        n = t.getFullMatch(),
        i = t.getData("userId"),
        a = (0, o.e7)([f.default], () => f.default.getUser(i));
    return null == a
        ? (0, r.jsx)(G, {
              text: n,
              className: I.answerPill,
          })
        : (0, r.jsxs)("div", {
              className: I.answerPill,
              children: [
                  (0, r.jsx)(j, {
                      size: l.EFr.SIZE_16,
                      user: a,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      color: "text-primary",
                      children: a.username,
                  }),
              ],
          });
}
function Z(e) {
    var t;
    let { token: n } = e,
        i = n.getFullMatch(),
        s = null != (t = n.getData("channelIds")) ? t : [],
        u = (0, o.e7)([c.Z], () => c.Z.getChannel(s[0]));
    if (null == u)
        return (0, r.jsx)(G, {
            text: i,
            className: I.answerPill,
        });
    let d = (0, p.nl)(u);
    return (0, r.jsxs)("div", {
        className: a()(I.answerPill, I.channelAnswerPill),
        children: [
            (0, r.jsx)(E.MC, {
                channel: u,
                className: I.channelPillIcon,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                children: d,
            }),
        ],
    });
}
function F(e) {
    let { result: t, group: n } = e;
    if (n === y.rtL.HISTORY)
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
          ? n === y.dCx.FILTER_MENTIONS
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
function V(e) {
    let { channel: t, user: n, text: i } = e;
    if (null != t) {
        var a;
        return {
            label: (0, r.jsxs)("div", {
                className: I.labelWithElements,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        children: null != (a = h.ZP[y.dCx.FILTER_IN].key) ? a : "",
                    }),
                    w(t),
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
                      (0, r.jsx)(j, {
                          size: l.EFr.SIZE_16,
                          user: n,
                      }),
                      (0, r.jsx)(k, { user: n }),
                  ],
              }),
              ariaLabel: n.username,
          }
        : {
              label: (0, r.jsx)(R, { label: i }),
              ariaLabel: i,
          };
}
function H(e) {
    let { channel: t, user: n } = e;
    return null != t
        ? (0, r.jsx)(E.MC, {
              channel: t,
              className: I.itemIcon,
          })
        : null != n
          ? (0, r.jsx)(j, {
                size: l.EFr.SIZE_20,
                user: n,
                className: I.itemIcon,
            })
          : null;
}
function Y(e) {
    let { channel: t, user: n, text: i } = e;
    if (null != t) {
        let e = (0, p.nl)(t);
        return {
            label: (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
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
                      (0, r.jsx)(k, { user: n }),
                      (0, r.jsx)(l.Text, {
                          variant: "text-sm/medium",
                          color: "text-secondary",
                          children: n.username,
                      }),
                  ],
              }),
              ariaLabel: n.username,
          }
        : {
              label: (0, r.jsx)(R, { label: i }),
              ariaLabel: i,
          };
}
