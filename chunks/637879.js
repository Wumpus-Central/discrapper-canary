n.d(t, {
    Q0: () => T,
    _B: () => I,
    dI: () => P,
    do: () => C,
    dx: () => w,
    f: () => A,
    mW: () => S,
}),
    n(35282);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(592125),
    c = n(594174),
    u = n(748610),
    d = n(607802),
    f = n(532428),
    _ = n(628221),
    p = n(579612),
    h = n(723642),
    m = n(981631),
    g = n(388032),
    E = n(493090);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { icon: t, label: n, sublabel: i, onSelect: a, navId: o, index: l, selected: c } = e,
        u = () => {
            a({
                searchAutocompleteSelectAction: h.ZW.CLICK,
                selectedIndex: l,
            });
        };
    return (0, r.jsx)(
        s.P3F,
        v(
            y(
                {
                    className: E.itemContainer,
                    onClick: u,
                },
                (0, _.lR)({
                    navId: o,
                    index: l,
                    selected: c,
                }),
            ),
            {
                children: (0, r.jsxs)("div", {
                    className: E.item,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            children: [n, i],
                        }),
                    ],
                }),
            },
        ),
    );
}
function T(e) {
    let { label: t, className: n } = e;
    return (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        className: n,
        children: t,
    });
}
function S(e) {
    var t, n;
    let { searchTokenType: i } = e,
        a = null != (n = null == (t = f.ZP[i]) ? void 0 : t.key) ? n : "",
        o = (0, d.Ko)(i);
    return (0, r.jsxs)("div", {
        className: E.filterSublabelTextContainer,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-sm/semibold",
                color: "text-secondary",
                children: a,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-tertiary",
                children: o,
            }),
        ],
    });
}
function A(e) {
    let t = (0, d.nl)(e);
    return (0, r.jsxs)("div", {
        className: E.channelNameContainer,
        children: [
            (0, r.jsx)(p.MC, {
                channel: e,
                className: E.channelNameIcon,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                className: E.channelName,
                children: t,
            }),
        ],
    });
}
function C(e) {
    let { searchContext: t } = e;
    return (0, r.jsx)(s.ua7, {
        text: g.intl.string(g.t.dwAvX1),
        position: "left",
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i } = e;
            return (0, r.jsx)(s.P3F, {
                onClick: () => u.Z.clearWebSearchHistory(t),
                onMouseEnter: n,
                onMouseLeave: i,
                className: E.clearSearchHistory,
                title: g.intl.string(g.t.dwAvX1),
                "aria-label": g.intl.string(g.t.dwAvX1),
                children: (0, r.jsx)(s.XHJ, {
                    size: "sm",
                    color: "currentColor",
                    className: E.clearSearchHistoryIcon,
                }),
            });
        },
    });
}
function N(e) {
    let { title: t, showDivider: n, children: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n && (0, r.jsx)("div", { className: E.divider }),
            (0, r.jsx)(
                "ul",
                {
                    role: "group",
                    "aria-labelledby": "".concat(t, "-header"),
                    children: i,
                },
                t,
            ),
        ],
    });
}
function R(e) {
    let { headerId: t, titleText: n, trailingIcon: i } = e;
    return (0, r.jsxs)("div", {
        id: t,
        className: E.autocompleteGroupHeader,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-xs/semibold",
                color: "text-secondary",
                children: n,
            }),
            i,
        ],
    });
}
function P(e) {
    let { navId: t, item: n, startingIndex: i, selectedIndex: a } = e,
        o = i,
        { rows: s, title: l, trailingIcon: c } = n.data;
    return (0, r.jsxs)(N, {
        title: l,
        showDivider: i > 0,
        children: [
            (0, r.jsx)(R, {
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
                        I,
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
function w(e) {
    let t = "",
        n = (0, _.cm)(e.text).map((e, n) => {
            let i = e.getFullMatch();
            t += i;
            let a = m.TNx.test(e.type),
                o = m.KA4.test(e.type),
                s = "".concat(e.type, "-").concat(i, "-").concat(n);
            if (o)
                switch (e.type) {
                    case m.dCx.ANSWER_USERNAME_FROM:
                    case m.dCx.ANSWER_USERNAME_MENTIONS:
                        return (0, r.jsx)(x, { token: e }, s);
                    case m.dCx.ANSWER_IN:
                        return (0, r.jsx)(L, { token: e }, s);
                    default:
                        return (0, r.jsx)(
                            D,
                            {
                                text: i,
                                className: E.answerPill,
                            },
                            s,
                        );
                }
            return (0, r.jsx)(
                D,
                {
                    text: i,
                    className: a ? E.filterPill : void 0,
                },
                s,
            );
        });
    return {
        label: (0, r.jsx)("div", {
            className: E.historyTextLabel,
            children: n,
        }),
        ariaLabel: g.intl.formatToPlainString(g.t.WoiGra, { suggestion: t }),
    };
}
function D(e) {
    let { text: t, className: n } = e;
    return (0, r.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "text-primary",
        className: n,
        children: t,
    });
}
function x(e) {
    let { token: t } = e,
        n = t.getFullMatch(),
        i = t.getData("userId"),
        a = (0, o.e7)([c.default], () => c.default.getUser(i));
    return null == a
        ? (0, r.jsx)(D, {
              text: n,
              className: E.answerPill,
          })
        : (0, r.jsxs)("div", {
              className: E.answerPill,
              children: [
                  (0, r.jsx)(s.qEK, {
                      size: s.EFr.SIZE_16,
                      src: a.getAvatarURL(void 0, 16),
                      "aria-label": a.username,
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/semibold",
                      color: "text-primary",
                      children: a.username,
                  }),
              ],
          });
}
function L(e) {
    var t;
    let { token: n } = e,
        i = n.getFullMatch(),
        c = null != (t = n.getData("channelIds")) ? t : [],
        u = (0, o.e7)([l.Z], () => l.Z.getChannel(c[0]));
    if (null == u)
        return (0, r.jsx)(D, {
            text: i,
            className: E.answerPill,
        });
    let f = (0, d.nl)(u);
    return (0, r.jsxs)("div", {
        className: a()(E.answerPill, E.channelAnswerPill),
        children: [
            (0, r.jsx)(p.MC, {
                channel: u,
                className: E.channelPillIcon,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                children: f,
            }),
        ],
    });
}
