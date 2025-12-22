n.d(t, {
    GM: () => H,
    HU: () => Z,
    Nk: () => Y,
    Q0: () => w,
    V4: () => q,
    _B: () => R,
    dI: () => k,
    do: () => L,
    f: () => x,
    mW: () => D,
    uB: () => z,
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
    g = n(991896),
    E = n(971212),
    b = n(447368),
    y = n(397430),
    O = n(723642),
    v = n(981631),
    S = n(268685),
    I = n(388032),
    T = n(983190);
function C(e, t, n) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    let { icon: t, label: n, sublabel: i, onSelect: a, navId: o, index: s, selected: c } = e,
        u = () => {
            a({
                searchAutocompleteSelectAction: O.ZW.CLICK,
                selectedIndex: s,
            });
        };
    return (0, r.jsx)(
        l.P3F,
        P(
            A(
                {
                    className: T.itemContainer,
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
                    className: T.item,
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
function D(e) {
    var t, n;
    let { searchTokenType: i, answer: a } = e,
        o = null != (n = null == (t = h.ZP[i]) ? void 0 : t.key) ? n : "",
        s = null != a ? a : (0, _.Ko)(i);
    return (0, r.jsxs)("div", {
        className: T.filterSublabelTextContainer,
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
function x(e) {
    let t = (0, _.nl)(e);
    return (0, r.jsxs)("div", {
        className: T.channelNameContainer,
        children: [
            (0, r.jsx)(y.MC, {
                channel: e,
                avatarSize: l.EFr.SIZE_16,
                iconClassName: T.channelNameIcon,
                iconSize: "xs",
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: T.channelName,
                children: t,
            }),
        ],
    });
}
function L(e) {
    let { searchContext: t } = e;
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        text: I.intl.string(I.t.dwAvX1),
        position: "left",
        children: (0, r.jsx)(l.P3F, {
            onClick: () => g.Z.clearSearchHistory(t),
            className: T.clearSearchHistory,
            title: I.intl.string(I.t.dwAvX1),
            "aria-label": I.intl.string(I.t.dwAvX1),
            children: (0, r.jsx)(l.XHJ, {
                size: "sm",
                color: "currentColor",
                className: T.clearSearchHistoryIcon,
            }),
        }),
    });
}
function j(e) {
    let { title: t, showDivider: n, children: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n && (0, r.jsx)("div", { className: T.divider }),
            (0, r.jsx)(
                "ul",
                {
                    role: "group",
                    "aria-labelledby": "".concat(t, "-header"),
                    className: T.groupWrapper,
                    children: i,
                },
                t,
            ),
        ],
    });
}
function M(e) {
    let { headerId: t, titleText: n, trailingIcon: i } = e;
    return (0, r.jsxs)("div", {
        id: t,
        className: T.groupHeader,
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
function k(e) {
    let { navId: t, item: n, startingIndex: i, selectedIndex: a } = e,
        o = i,
        { rows: s, title: l, trailingIcon: c } = n.data;
    return (0, r.jsxs)(j, {
        title: l,
        showDivider: i > 0,
        children: [
            (0, r.jsx)(M, {
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
                        R,
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
function U(e) {
    let { size: t, user: n, className: i } = e,
        a = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        s = (0, S.px)(t);
    return (0, r.jsx)(l.qEK, {
        size: t,
        src: n.getAvatarURL(a, s),
        "aria-label": n.username,
        className: i,
    });
}
function G(e) {
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
function Z(e) {
    let { value: t, avatarSize: n, iconSize: i } = e,
        a = "",
        o = (0, b.ew)(t).map((e, t) => {
            let o = e.getFullMatch();
            if (0 === o.trim().length) return null;
            a += o;
            let s = v.TNx.test(e.type),
                l = v.KA4.test(e.type),
                c = "".concat(e.type, "-").concat(o, "-").concat(t);
            if (l)
                switch (e.type) {
                    case v.dCx.ANSWER_USERNAME_FROM:
                    case v.dCx.ANSWER_USERNAME_MENTIONS:
                        return (0, r.jsx)(
                            B,
                            {
                                token: e,
                                avatarSize: n,
                            },
                            c,
                        );
                    case v.dCx.ANSWER_IN:
                        return (0, r.jsx)(
                            V,
                            {
                                token: e,
                                avatarSize: n,
                                iconSize: i,
                            },
                            c,
                        );
                    default:
                        return (0, r.jsx)(
                            F,
                            {
                                text: o,
                                className: T.answerPill,
                            },
                            c,
                        );
                }
            return (0, r.jsx)(
                F,
                {
                    text: o,
                    className: s ? T.filterPill : T.nonText,
                },
                c,
            );
        });
    return {
        label: (0, r.jsx)("div", {
            className: T.autocompletePillContainer,
            children: o,
        }),
        ariaLabel: a,
    };
}
function F(e) {
    let { text: t, className: n } = e;
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-strong",
        className: n,
        children: t,
    });
}
function B(e) {
    let { token: t, avatarSize: n } = e,
        i = t.getFullMatch(),
        a = t.getData("userId"),
        s = (0, o.e7)([f.default], () => f.default.getUser(a));
    return null == s
        ? (0, r.jsx)(F, {
              text: i,
              className: T.answerPill,
          })
        : (0, r.jsxs)("div", {
              className: T.answerPill,
              children: [
                  (0, r.jsx)(U, {
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
function V(e) {
    var t;
    let { token: n, avatarSize: i, iconSize: s } = e,
        u = n.getFullMatch(),
        d = null != (t = n.getData("channelIds")) ? t : [],
        f = (0, o.e7)([c.Z], () => c.Z.getChannel(d[0]));
    if (null == f)
        return (0, r.jsx)(F, {
            text: u,
            className: T.answerPill,
        });
    let p = (0, _.nl)(f);
    return (0, r.jsxs)("div", {
        className: a()(T.answerPill, T.channelAnswerPill),
        children: [
            (0, r.jsx)(y.MC, {
                channel: f,
                avatarSize: i,
                iconClassName: T.channelPillIcon,
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
function H(e) {
    let { result: t, group: n } = e;
    if (n === v.rtL.HISTORY)
        return (0, r.jsx)(l._Ve, {
            size: "sm",
            color: "currentColor",
            className: T.itemIcon,
        });
    let { channel: i, user: a } = t;
    return null != i
        ? (0, r.jsx)(l.VL1, {
              size: "sm",
              color: "currentColor",
              className: T.itemIcon,
          })
        : null != a
          ? n === v.dCx.FILTER_MENTIONS
              ? (0, r.jsx)(l.lOy, {
                    size: "sm",
                    color: "currentColor",
                    className: T.itemIcon,
                })
              : (0, r.jsx)(l.tBG, {
                    size: "sm",
                    color: "currentColor",
                    className: T.itemIcon,
                })
          : null;
}
function Y(e) {
    let { channel: t, user: n, text: i } = e;
    if (null != t) {
        var a;
        return {
            label: (0, r.jsxs)("div", {
                className: T.labelWithElements,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: null != (a = h.ZP[v.dCx.FILTER_IN].key) ? a : "",
                    }),
                    x(t),
                ],
            }),
            ariaLabel: t.name,
        };
    }
    return null != n
        ? {
              label: (0, r.jsxs)("div", {
                  className: T.labelWithElements,
                  children: [
                      (0, r.jsx)(U, {
                          size: l.EFr.SIZE_16,
                          user: n,
                      }),
                      (0, r.jsx)(G, { user: n }),
                  ],
              }),
              ariaLabel: n.username,
          }
        : {
              label: (0, r.jsx)(w, { label: i }),
              ariaLabel: i,
          };
}
function W(e) {
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
function K(e) {
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
function z(e) {
    let { result: t, group: n } = e,
        { channel: i, user: a } = t;
    if (null != i)
        return (0, r.jsx)(y.MC, {
            channel: i,
            avatarSize: l.EFr.SIZE_20,
            iconClassName: T.itemIcon,
            iconSize: "refresh_sm",
        });
    if (null != a)
        return (0, r.jsx)(U, {
            size: l.EFr.SIZE_20,
            user: a,
            className: T.itemIcon,
        });
    let o = (0, m.q$)({ location: "getAutocompleteIcon" });
    return n === v.dCx.FILTER_HAS && o
        ? (0, r.jsx)(W, {
              size: "sm",
              text: t.text,
              className: T.itemIcon,
          })
        : n === v.dCx.FILTER_AUTHOR_TYPE && o
          ? (0, r.jsx)(K, {
                size: "sm",
                text: t.text,
                className: T.itemIcon,
            })
          : null;
}
function q(e) {
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
                  className: T.labelWithElements,
                  children: [
                      (0, r.jsx)(G, { user: n }),
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
