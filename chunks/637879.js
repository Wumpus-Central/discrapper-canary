n.d(t, {
    GM: () => V,
    HU: () => G,
    Nk: () => H,
    Q0: () => R,
    V4: () => z,
    YQ: () => W,
    _B: () => P,
    dI: () => M,
    do: () => x,
    f: () => D,
    mW: () => w,
    pb: () => Y,
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
    m = n(28964),
    h = n(532428),
    g = n(628221),
    E = n(991896),
    b = n(579612),
    y = n(723642),
    O = n(981631),
    v = n(268685),
    S = n(388032),
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
            : C(Object(t)).forEach(function (n) {
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
            A(
                {
                    className: I.itemContainer,
                    onClick: u,
                },
                (0, g.lR)({
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
function w(e) {
    var t, n;
    let { searchTokenType: i, answer: a } = e,
        o = null != (n = null == (t = h.ZP[i]) ? void 0 : t.key) ? n : "",
        s = null != a ? a : (0, _.Ko)(i);
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
function D(e) {
    let t = (0, _.nl)(e);
    return (0, r.jsxs)("div", {
        className: I.channelNameContainer,
        children: [
            (0, r.jsx)(b.MC, {
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
function x(e) {
    let { searchContext: t } = e;
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        text: S.intl.string(S.t.dwAvX1),
        position: "left",
        children: (0, r.jsx)(l.P3F, {
            onClick: () => E.Z.clearSearchHistory(t),
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
    let { value: t } = e,
        n = "",
        i = (0, g.ew)(t).map((e, t) => {
            let i = e.getFullMatch();
            if (0 === i.trim().length) return null;
            n += i;
            let a = O.TNx.test(e.type),
                o = O.KA4.test(e.type),
                s = "".concat(e.type, "-").concat(i, "-").concat(t);
            if (o)
                switch (e.type) {
                    case O.dCx.ANSWER_USERNAME_FROM:
                    case O.dCx.ANSWER_USERNAME_MENTIONS:
                        return (0, r.jsx)(B, { token: e }, s);
                    case O.dCx.ANSWER_IN:
                        return (0, r.jsx)(F, { token: e }, s);
                    default:
                        return (0, r.jsx)(
                            Z,
                            {
                                text: i,
                                className: I.answerPill,
                            },
                            s,
                        );
                }
            return (0, r.jsx)(
                Z,
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
function Z(e) {
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
        ? (0, r.jsx)(Z, {
              text: n,
              className: I.answerPill,
          })
        : (0, r.jsxs)("div", {
              className: I.answerPill,
              children: [
                  (0, r.jsx)(k, {
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
function F(e) {
    var t;
    let { token: n } = e,
        i = n.getFullMatch(),
        s = null != (t = n.getData("channelIds")) ? t : [],
        u = (0, o.e7)([c.Z], () => c.Z.getChannel(s[0]));
    if (null == u)
        return (0, r.jsx)(Z, {
            text: i,
            className: I.answerPill,
        });
    let d = (0, _.nl)(u);
    return (0, r.jsxs)("div", {
        className: a()(I.answerPill, I.channelAnswerPill),
        children: [
            (0, r.jsx)(b.MC, {
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
                        color: "text-primary",
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
              label: (0, r.jsx)(R, { label: i }),
              ariaLabel: i,
          };
}
function Y(e) {
    let { text: t, className: n, size: i } = e;
    switch (t) {
        case S.intl.string(S.t.ZNR2fi):
            return (0, r.jsx)(l.xPt, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t["20uQR3"]):
            return (0, r.jsx)(l.FLu, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t.L4lxyE):
            return (0, r.jsx)(l.QDj, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t["AV/v6i"]):
            return (0, r.jsx)(l.aAW, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t.XM9XGP):
            return (0, r.jsx)(l.Odl, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t.TNLcpx):
            return (0, r.jsx)(l.XBm, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t.F8Wf0e):
            return (0, r.jsx)(l.KY1, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t.PJgX2h):
            return (0, r.jsx)(l.SlE, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t.nrpA5E):
            return (0, r.jsx)(l.WZu, {
                size: i,
                color: "currentColor",
                className: n,
            });
        default:
            return null;
    }
}
function W(e) {
    let { text: t, className: n, size: i } = e;
    switch (t) {
        case S.intl.string(S.t.tPZo4p):
            return (0, r.jsx)(l.tBG, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t.JL7sRS):
            return (0, r.jsx)(l.wGt, {
                size: i,
                color: "currentColor",
                className: n,
            });
        case S.intl.string(S.t.WjkIKU):
            return (0, r.jsx)(l.tYf, {
                size: i,
                color: "currentColor",
                className: n,
            });
        default:
            return null;
    }
}
function K(e) {
    let { result: t, group: n } = e,
        { channel: i, user: a } = t;
    if (null != i)
        return (0, r.jsx)(b.MC, {
            channel: i,
            className: I.itemIcon,
        });
    if (null != a)
        return (0, r.jsx)(k, {
            size: l.EFr.SIZE_20,
            user: a,
            className: I.itemIcon,
        });
    let o = (0, m.q$)({ location: "getAutocompleteIcon" });
    return n === O.dCx.FILTER_HAS && o
        ? (0, r.jsx)(Y, {
              size: "sm",
              text: t.text,
              className: I.itemIcon,
          })
        : n === O.dCx.FILTER_AUTHOR_TYPE && o
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
                      (0, r.jsx)(U, { user: n }),
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
