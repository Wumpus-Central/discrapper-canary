n.d(t, {
    GM: () => G,
    HU: () => j,
    Q0: () => N,
    V4: () => B,
    _B: () => C,
    dI: () => L,
    do: () => w,
    f: () => P,
    mW: () => R,
}),
    n(781311),
    n(35282);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(592125),
    u = n(944486),
    d = n(914010),
    f = n(594174),
    _ = n(5192),
    p = n(748610),
    h = n(607802),
    m = n(532428),
    g = n(628221),
    E = n(579612),
    b = n(723642),
    y = n(981631),
    O = n(388032),
    v = n(493090);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let { icon: t, label: n, sublabel: i, onSelect: a, navId: o, index: s, selected: c } = e,
        u = () => {
            a({
                searchAutocompleteSelectAction: b.ZW.CLICK,
                selectedIndex: s,
            });
        };
    return (0, r.jsx)(
        l.P3F,
        A(
            T(
                {
                    className: v.itemContainer,
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
                    className: v.item,
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
function N(e) {
    let { label: t, className: n } = e;
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        className: n,
        children: t,
    });
}
function R(e) {
    var t, n;
    let { searchTokenType: i, answer: a } = e,
        o = null != (n = null == (t = m.ZP[i]) ? void 0 : t.key) ? n : "",
        s = null != a ? a : (0, h.Ko)(i);
    return (0, r.jsxs)("div", {
        className: v.filterSublabelTextContainer,
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
function P(e) {
    let t = (0, h.nl)(e);
    return (0, r.jsxs)("div", {
        className: v.channelNameContainer,
        children: [
            (0, r.jsx)(E.MC, {
                channel: e,
                className: v.channelNameIcon,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                className: v.channelName,
                children: t,
            }),
        ],
    });
}
function w(e) {
    let { searchContext: t } = e;
    return (0, r.jsx)(l.ua7, {
        text: O.intl.string(O.t.dwAvX1),
        position: "left",
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i } = e;
            return (0, r.jsx)(l.P3F, {
                onClick: () => p.Z.clearWebSearchHistory(t),
                onMouseEnter: n,
                onMouseLeave: i,
                className: v.clearSearchHistory,
                title: O.intl.string(O.t.dwAvX1),
                "aria-label": O.intl.string(O.t.dwAvX1),
                children: (0, r.jsx)(l.XHJ, {
                    size: "sm",
                    color: "currentColor",
                    className: v.clearSearchHistoryIcon,
                }),
            });
        },
    });
}
function D(e) {
    let { title: t, showDivider: n, children: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            "top" === n && (0, r.jsx)("div", { className: v.divider }),
            (0, r.jsx)(
                "ul",
                {
                    role: "group",
                    "aria-labelledby": "".concat(t, "-header"),
                    children: i,
                },
                t,
            ),
            "bottom" === n && (0, r.jsx)("div", { className: v.divider }),
        ],
    });
}
function x(e) {
    let { headerId: t, titleText: n, trailingIcon: i } = e;
    return (0, r.jsxs)("div", {
        id: t,
        className: v.autocompleteGroupHeader,
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
function L(e) {
    let { navId: t, item: n, startingIndex: i, selectedIndex: a } = e,
        o = i,
        { rows: s, title: l, trailingIcon: c } = n.data,
        u = i > 0,
        d = 0 === i,
        f = u ? "top" : d ? "bottom" : null;
    return (0, r.jsxs)(D, {
        title: l,
        showDivider: f,
        children: [
            (0, r.jsx)(x, {
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
                        C,
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
    let { value: t } = e,
        n = "",
        i = (0, g.ew)(t).map((e, t) => {
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
                        return (0, r.jsx)(k, { token: e }, s);
                    case y.dCx.ANSWER_IN:
                        return (0, r.jsx)(U, { token: e }, s);
                    default:
                        return (0, r.jsx)(
                            M,
                            {
                                text: i,
                                className: v.answerPill,
                            },
                            s,
                        );
                }
            return (0, r.jsx)(
                M,
                {
                    text: i,
                    className: a ? v.filterPill : v.nonText,
                },
                s,
            );
        });
    return {
        label: (0, r.jsx)("div", {
            className: v.autocompletePillContainer,
            children: i,
        }),
        ariaLabel: n,
    };
}
function M(e) {
    let { text: t, className: n } = e;
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-primary",
        className: n,
        children: t,
    });
}
function k(e) {
    let { token: t } = e,
        n = t.getFullMatch(),
        i = t.getData("userId"),
        a = (0, s.e7)([f.default], () => f.default.getUser(i));
    return null == a
        ? (0, r.jsx)(M, {
              text: n,
              className: v.answerPill,
          })
        : (0, r.jsxs)("div", {
              className: v.answerPill,
              children: [
                  (0, r.jsx)(l.qEK, {
                      size: l.EFr.SIZE_16,
                      src: a.getAvatarURL(void 0, 16),
                      "aria-label": a.username,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      color: "text-primary",
                      children: a.username,
                  }),
              ],
          });
}
function U(e) {
    var t;
    let { token: n } = e,
        i = n.getFullMatch(),
        a = null != (t = n.getData("channelIds")) ? t : [],
        u = (0, s.e7)([c.Z], () => c.Z.getChannel(a[0]));
    if (null == u)
        return (0, r.jsx)(M, {
            text: i,
            className: v.answerPill,
        });
    let d = (0, h.nl)(u);
    return (0, r.jsxs)("div", {
        className: o()(v.answerPill, v.channelAnswerPill),
        children: [
            (0, r.jsx)(E.MC, {
                channel: u,
                className: v.channelPillIcon,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                children: d,
            }),
        ],
    });
}
function G(e) {
    let { result: t, group: n } = e;
    if (n === y.rtL.HISTORY)
        return (0, r.jsx)(l._Ve, {
            size: "sm",
            color: "currentColor",
            className: v.itemIcon,
        });
    let { channel: i, user: a } = t;
    return null != i
        ? (0, r.jsx)(l.VL1, {
              size: "sm",
              color: "currentColor",
              className: v.itemIcon,
          })
        : null != a
          ? n === y.dCx.FILTER_MENTIONS
              ? (0, r.jsx)(l.lOy, {
                    size: "sm",
                    color: "currentColor",
                    className: v.itemIcon,
                })
              : (0, r.jsx)(l.tBG, {
                    size: "sm",
                    color: "currentColor",
                    className: v.itemIcon,
                })
          : null;
}
function B(e) {
    let { channel: t, user: n } = e;
    return null != t
        ? {
              label: (0, r.jsx)(Z, { channel: t }),
              ariaLabel: t.name,
          }
        : null != n
          ? {
                label: (0, r.jsx)(F, { user: n }),
                ariaLabel: n.username,
            }
          : {
                label: (0, r.jsx)(N, { label: e.text }),
                ariaLabel: e.text,
            };
}
function Z(e) {
    var t;
    let { channel: n } = e;
    return (0, r.jsxs)("div", {
        className: v.labelWithElements,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-primary",
                children: null != (t = m.ZP[y.dCx.FILTER_IN].key) ? t : "",
            }),
            P(n),
        ],
    });
}
function F(e) {
    let { user: t } = e,
        { selectedGuildId: n, selectedChannelId: a } = (0, s.cj)([d.Z, u.Z], () => {
            let e = d.Z.getGuildId(),
                t = u.Z.getChannelId(e);
            return {
                selectedGuildId: e,
                selectedChannelId: t,
            };
        }),
        o = _.ZP.useName(n, a, t),
        c = i.useMemo(() => t.getAvatarURL(n, 16), [n, t]);
    return (0, r.jsxs)("div", {
        className: v.labelWithElements,
        children: [
            (0, r.jsx)(l.qEK, {
                size: l.EFr.SIZE_16,
                src: c,
                "aria-label": t.username,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-default",
                children: o,
            }),
        ],
    });
}
