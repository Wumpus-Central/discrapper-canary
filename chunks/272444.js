n.d(t, {
    AX: () => G,
    JK: () => q,
    Jx: () => R,
    YD: () => M,
    _h: () => z,
    bg: () => w,
    bj: () => P,
    c$: () => Y,
    ge: () => H,
    k8: () => x,
    lF: () => D,
}),
    n(733351),
    n(747238);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(435371),
    l = n(397927),
    c = n(734057),
    u = n(309010),
    d = n(967198),
    f = n(287809),
    p = n(562153),
    _ = n(822382),
    h = n(771650),
    m = n(616252),
    g = n(315059),
    E = n(121806),
    b = n(949759),
    y = n(768570),
    O = n(652215),
    A = n(778712),
    v = n(985018),
    S = n(935606);
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
function R(e) {
    let { icon: t, label: n, sublabel: i, onSelect: a, navId: s, index: o, selected: c } = e,
        u = () => {
            a({
                searchAutocompleteSelectAction: y.oi.CLICK,
                selectedIndex: o,
            });
        };
    return (0, r.jsx)(
        l.DUT,
        N(
            T(
                {
                    className: S.DB,
                    onClick: u,
                },
                (0, b.wR)({
                    navId: s,
                    index: o,
                    selected: c,
                }),
            ),
            {
                children: (0, r.jsxs)("div", {
                    className: S.AS,
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
function P(e) {
    var t, n;
    let { searchTokenType: i, answer: a } = e,
        s = null != (t = null == (n = h.Ay[i]) ? void 0 : n.key) ? t : "",
        o = null != a ? a : (0, _.sh)(i);
    return (0, r.jsxs)("div", {
        className: S.Xq,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                children: s,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: o,
            }),
        ],
    });
}
function D(e) {
    let t = (0, _.E3)(e);
    return (0, r.jsxs)("div", {
        className: S.aT,
        children: [
            (0, r.jsx)(g.A, {
                channel: e,
                avatarSize: l._3J.SIZE_16,
                iconClassName: S.er,
                iconSize: "xs",
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: S.HA,
                children: t,
            }),
        ],
    });
}
function x(e) {
    let { searchContext: t } = e;
    return (0, r.jsx)(o.m_, {
        asContainer: !0,
        text: v.intl.string(v.t.dwAvX1),
        position: "left",
        children: (0, r.jsx)(l.DUT, {
            onClick: () => m.A.clearSearchHistory(t),
            className: S.Wf,
            title: v.intl.string(v.t.dwAvX1),
            "aria-label": v.intl.string(v.t.dwAvX1),
            children: (0, r.jsx)(l.ucK, {
                size: "sm",
                color: "currentColor",
                className: S.f,
            }),
        }),
    });
}
function L(e) {
    let { title: t, showDivider: n, children: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n && (0, r.jsx)("div", { className: S.yF }),
            (0, r.jsx)(
                "ul",
                {
                    role: "group",
                    "aria-labelledby": "".concat(t, "-header"),
                    className: S.jw,
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
        className: S.x_,
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
        s = i,
        { rows: o, title: l, trailingIcon: c } = n.data;
    return (0, r.jsxs)(L, {
        title: l,
        showDivider: i > 0,
        children: [
            (0, r.jsx)(j, {
                headerId: l,
                titleText: l,
                trailingIcon: c,
            }),
            o.map((e) => {
                let { icon: i, label: o, sublabel: c, onSelect: u } = e.data,
                    d = a === s,
                    f = s;
                return (
                    (s += 1),
                    (0, r.jsx)(
                        R,
                        {
                            icon: i,
                            label: o,
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
        a = (0, s.bG)([d.A], () => d.A.getGuildId()),
        o = (0, A.FT)(t);
    return (0, r.jsx)(l.euF, {
        size: t,
        src: n.getAvatarURL(a, o),
        "aria-label": n.username,
        className: i,
    });
}
function U(e) {
    let { user: t } = e,
        { selectedGuildId: n, selectedChannelId: i } = (0, s.cf)([d.A, u.A], () => {
            let e = d.A.getGuildId(),
                t = u.A.getChannelId(e);
            return {
                selectedGuildId: e,
                selectedChannelId: t,
            };
        }),
        a = p.Ay.useName(n, i, t);
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: a,
    });
}
function G(e) {
    let { value: t, avatarSize: n, iconSize: i } = e,
        a = "",
        s = (0, b.fh)(t).map((e, t) => {
            let s = e.getFullMatch();
            if (0 === s.trim().length) return null;
            a += s;
            let o = O.l90.test(e.type),
                l = O.T2E.test(e.type),
                c = "".concat(e.type, "-").concat(s, "-").concat(t);
            if (l)
                switch (e.type) {
                    case O.LWr.ANSWER_USERNAME_FROM:
                    case O.LWr.ANSWER_USERNAME_MENTIONS:
                        return (0, r.jsx)(
                            F,
                            {
                                token: e,
                                avatarSize: n,
                            },
                            c,
                        );
                    case O.LWr.ANSWER_IN:
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
                            V,
                            {
                                text: s,
                                className: S.Mj,
                            },
                            c,
                        );
                }
            return (0, r.jsx)(
                V,
                {
                    text: s,
                    className: o ? S._y : S.Lc,
                },
                c,
            );
        });
    return {
        label: (0, r.jsx)("div", {
            className: S.fH,
            children: s,
        }),
        ariaLabel: a,
    };
}
function V(e) {
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
        o = (0, s.bG)([f.default], () => f.default.getUser(a));
    return null == o
        ? (0, r.jsx)(V, {
              text: i,
              className: S.Mj,
          })
        : (0, r.jsxs)("div", {
              className: S.Mj,
              children: [
                  (0, r.jsx)(k, {
                      size: n,
                      user: o,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: o.username,
                  }),
              ],
          });
}
function B(e) {
    var t;
    let { token: n, avatarSize: i, iconSize: o } = e,
        u = n.getFullMatch(),
        d = null != (t = n.getData("channelIds")) ? t : [],
        f = (0, s.bG)([c.A], () => c.A.getChannel(d[0]));
    if (null == f)
        return (0, r.jsx)(V, {
            text: u,
            className: S.Mj,
        });
    let p = (0, _.E3)(f);
    return (0, r.jsxs)("div", {
        className: a()(S.Mj, S.JG),
        children: [
            (0, r.jsx)(g.A, {
                channel: f,
                avatarSize: i,
                iconClassName: S.Wh,
                iconSize: o,
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
    if (n === O.x2k.HISTORY)
        return (0, r.jsx)(l.$p$, {
            size: "sm",
            color: "currentColor",
            className: S.Fx,
        });
    let { channel: i, user: a } = t;
    return null != i
        ? (0, r.jsx)(l.N$i, {
              size: "sm",
              color: "currentColor",
              className: S.Fx,
          })
        : null != a
          ? n === O.LWr.FILTER_MENTIONS
              ? (0, r.jsx)(l.XxR, {
                    size: "sm",
                    color: "currentColor",
                    className: S.Fx,
                })
              : (0, r.jsx)(l.nys, {
                    size: "sm",
                    color: "currentColor",
                    className: S.Fx,
                })
          : null;
}
function Y(e) {
    let { channel: t, user: n, text: i } = e;
    if (null != t) {
        var a;
        return {
            label: (0, r.jsxs)("div", {
                className: S.YL,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: null != (a = h.Ay[O.LWr.FILTER_IN].key) ? a : "",
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
                  className: S.YL,
                  children: [
                      (0, r.jsx)(k, {
                          size: l._3J.SIZE_16,
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
function W(e) {
    let { text: t, className: n, size: i } = e,
        a = (0, E.KD)(t);
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
        a = (0, E.Ht)(t);
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
    return null != i
        ? (0, r.jsx)(g.A, {
              channel: i,
              avatarSize: l._3J.SIZE_20,
              iconClassName: S.Fx,
              iconSize: "refresh_sm",
          })
        : null != a
          ? (0, r.jsx)(k, {
                size: l._3J.SIZE_20,
                user: a,
                className: S.Fx,
            })
          : n === O.LWr.FILTER_HAS
            ? (0, r.jsx)(W, {
                  size: "sm",
                  text: t.text,
                  className: S.Fx,
              })
            : n === O.LWr.FILTER_AUTHOR_TYPE
              ? (0, r.jsx)(K, {
                    size: "sm",
                    text: t.text,
                    className: S.Fx,
                })
              : null;
}
function q(e) {
    let { channel: t, user: n, text: i } = e;
    if (null != t) {
        let e = (0, _.E3)(t);
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
                  className: S.YL,
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
