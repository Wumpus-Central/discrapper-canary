r.d(t, {
    AX: () => F,
    JK: () => G,
    Jx: () => v,
    YD: () => C,
    _h: () => z,
    bg: () => x,
    bj: () => T,
    c$: () => H,
    ge: () => D,
    k8: () => j,
    lF: () => I,
}),
    r(733351),
    r(747238);
var n = r(627968);
r(64700);
var l = r(503698),
    s = r.n(l),
    a = r(311907),
    i = r(435371),
    o = r(397927),
    c = r(734057),
    u = r(309010),
    d = r(967198),
    h = r(287809),
    p = r(562153),
    f = r(822382),
    g = r(771650),
    S = r(616252),
    E = r(315059),
    y = r(121806),
    _ = r(949759),
    m = r(768570),
    A = r(652215),
    b = r(778712),
    O = r(985018),
    R = r(935606);

function v(e) {
    var t, r;
    let { icon: l, label: s, sublabel: a, onSelect: i, navId: c, index: u, selected: d } = e;
    return (0, n.jsx)(
        o.DUT,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                className: R.DB,
                onClick: () => {
                    i({
                        searchAutocompleteSelectAction: m.oi.CLICK,
                        selectedIndex: u,
                    });
                },
            },
            (0, _.wR)({
                navId: c,
                index: u,
                selected: d,
            }),
        )),
        (r = r =
            {
                children: (0, n.jsxs)("div", {
                    className: R.AS,
                    children: [
                        l,
                        null == a
                            ? s
                            : (0, n.jsxs)("div", {
                                  children: [s, a],
                              }),
                    ],
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}

function x(e) {
    let { label: t, className: r } = e;
    return (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        className: r,
        children: t,
    });
}

function T(e) {
    var t, r;
    let { searchTokenType: l, answer: s } = e,
        a = null != (t = null == (r = g.Ay[l]) ? void 0 : r.key) ? t : "",
        i = null != s ? s : (0, f.sh)(l);
    return (0, n.jsxs)("div", {
        className: R.Xq,
        children: [
            (0, n.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                children: a,
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: i,
            }),
        ],
    });
}

function I(e) {
    let t = (0, f.E3)(e);
    return (0, n.jsxs)("div", {
        className: R.aT,
        children: [
            (0, n.jsx)(E.A, {
                channel: e,
                avatarSize: o._3J.SIZE_16,
                iconClassName: R.er,
                iconSize: "xs",
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: R.HA,
                children: t,
            }),
        ],
    });
}

function j(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(i.m_, {
        asContainer: !0,
        text: O.intl.string(O.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(o.DUT, {
            onClick: () => S.A.clearSearchHistory(t),
            className: R.Wf,
            title: O.intl.string(O.t.dwAvX1),
            "aria-label": O.intl.string(O.t.dwAvX1),
            children: (0, n.jsx)(o.ucK, {
                size: "sm",
                color: "currentColor",
                className: R.f,
            }),
        }),
    });
}

function L(e) {
    let { title: t, showDivider: r, children: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            r &&
                (0, n.jsx)("div", {
                    className: R.yF,
                }),
            (0, n.jsx)(
                "ul",
                {
                    role: "group",
                    "aria-labelledby": "".concat(t, "-header"),
                    className: R.jw,
                    children: l,
                },
                t,
            ),
        ],
    });
}

function N(e) {
    let { headerId: t, titleText: r, trailingIcon: l } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: R.x_,
        children: [
            (0, n.jsx)(o.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: r,
            }),
            l,
        ],
    });
}

function C(e) {
    let { navId: t, item: r, startingIndex: l, selectedIndex: s } = e,
        a = l,
        { rows: i, title: o, trailingIcon: c } = r.data;
    return (0, n.jsxs)(L, {
        title: o,
        showDivider: l > 0,
        children: [
            (0, n.jsx)(N, {
                headerId: o,
                titleText: o,
                trailingIcon: c,
            }),
            i.map((e) => {
                let { icon: l, label: i, sublabel: c, onSelect: u } = e.data,
                    d = s === a,
                    h = a;
                return (
                    (a += 1),
                    (0, n.jsx)(
                        v,
                        {
                            icon: l,
                            label: i,
                            sublabel: c,
                            onSelect: u,
                            navId: t,
                            index: h,
                            selected: d,
                        },
                        "".concat(r.type, "-").concat(o, "-").concat(h),
                    )
                );
            }),
        ],
    });
}

function w(e) {
    let { size: t, user: r, className: l } = e,
        s = (0, a.bG)([d.A], () => d.A.getGuildId()),
        i = (0, b.FT)(t);
    return (0, n.jsx)(o.euF, {
        size: t,
        src: r.getAvatarURL(s, i),
        "aria-label": r.username,
        className: l,
    });
}

function P(e) {
    let { user: t } = e,
        { selectedGuildId: r, selectedChannelId: l } = (0, a.cf)([d.A, u.A], () => {
            let e = d.A.getGuildId(),
                t = u.A.getChannelId(e);
            return {
                selectedGuildId: e,
                selectedChannelId: t,
            };
        }),
        s = p.Ay.useName(r, l, t);
    return (0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: s,
    });
}

function F(e) {
    let { value: t, avatarSize: r, iconSize: l } = e,
        s = "",
        a = (0, _.fh)(t).map((e, t) => {
            let a = e.getFullMatch();
            if (0 === a.trim().length) return null;
            s += a;
            let i = A.l90.test(e.type),
                o = A.T2E.test(e.type),
                c = "".concat(e.type, "-").concat(a, "-").concat(t);
            if (o)
                switch (e.type) {
                    case A.LWr.ANSWER_USERNAME_FROM:
                    case A.LWr.ANSWER_USERNAME_MENTIONS:
                        return (0, n.jsx)(
                            M,
                            {
                                token: e,
                                avatarSize: r,
                            },
                            c,
                        );
                    case A.LWr.ANSWER_IN:
                        return (0, n.jsx)(
                            W,
                            {
                                token: e,
                                avatarSize: r,
                                iconSize: l,
                            },
                            c,
                        );
                    default:
                        return (0, n.jsx)(
                            k,
                            {
                                text: a,
                                className: R.Mj,
                            },
                            c,
                        );
                }
            return (0, n.jsx)(
                k,
                {
                    text: a,
                    className: i ? R._y : R.Lc,
                },
                c,
            );
        });
    return {
        label: (0, n.jsx)("div", {
            className: R.fH,
            children: a,
        }),
        ariaLabel: s,
    };
}

function k(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "text-strong",
        className: r,
        children: t,
    });
}

function M(e) {
    let { token: t, avatarSize: r } = e,
        l = t.getFullMatch(),
        s = t.getData("userId"),
        i = (0, a.bG)([h.default], () => h.default.getUser(s));
    return null == i
        ? (0, n.jsx)(k, {
              text: l,
              className: R.Mj,
          })
        : (0, n.jsxs)("div", {
              className: R.Mj,
              children: [
                  (0, n.jsx)(w, {
                      size: r,
                      user: i,
                  }),
                  (0, n.jsx)(o.Text, {
                      variant: "text-sm/semibold",
                      color: "text-strong",
                      children: i.username,
                  }),
              ],
          });
}

function W(e) {
    var t;
    let { token: r, avatarSize: l, iconSize: i } = e,
        u = r.getFullMatch(),
        d = null != (t = r.getData("channelIds")) ? t : [],
        h = (0, a.bG)([c.A], () => c.A.getChannel(d[0]));
    if (null == h)
        return (0, n.jsx)(k, {
            text: u,
            className: R.Mj,
        });
    let p = (0, f.E3)(h);
    return (0, n.jsxs)("div", {
        className: s()(R.Mj, R.JG),
        children: [
            (0, n.jsx)(E.A, {
                channel: h,
                avatarSize: l,
                iconClassName: R.Wh,
                iconSize: i,
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: p,
            }),
        ],
    });
}

function D(e) {
    let { result: t, group: r } = e;
    if (r === A.x2k.HISTORY)
        return (0, n.jsx)(o.$p$, {
            size: "sm",
            color: "currentColor",
            className: R.Fx,
        });
    let { channel: l, user: s } = t;
    return null != l
        ? (0, n.jsx)(o.N$i, {
              size: "sm",
              color: "currentColor",
              className: R.Fx,
          })
        : null != s
          ? r === A.LWr.FILTER_MENTIONS
              ? (0, n.jsx)(o.XxR, {
                    size: "sm",
                    color: "currentColor",
                    className: R.Fx,
                })
              : (0, n.jsx)(o.nys, {
                    size: "sm",
                    color: "currentColor",
                    className: R.Fx,
                })
          : null;
}

function H(e) {
    let { channel: t, user: r, text: l } = e;
    if (null != t) {
        var s;
        return {
            label: (0, n.jsxs)("div", {
                className: R.YL,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: null != (s = g.Ay[A.LWr.FILTER_IN].key) ? s : "",
                    }),
                    I(t),
                ],
            }),
            ariaLabel: t.name,
        };
    }
    return null != r
        ? {
              label: (0, n.jsxs)("div", {
                  className: R.YL,
                  children: [
                      (0, n.jsx)(w, {
                          size: o._3J.SIZE_16,
                          user: r,
                      }),
                      (0, n.jsx)(P, {
                          user: r,
                      }),
                  ],
              }),
              ariaLabel: r.username,
          }
        : {
              label: (0, n.jsx)(x, {
                  label: l,
              }),
              ariaLabel: l,
          };
}

function U(e) {
    let { text: t, className: r, size: l } = e,
        s = (0, y.KD)(t);
    return null != s
        ? (0, n.jsx)(s, {
              size: l,
              color: "currentColor",
              className: r,
          })
        : null;
}

function q(e) {
    let { text: t, className: r, size: l } = e,
        s = (0, y.Ht)(t);
    return null != s
        ? (0, n.jsx)(s, {
              size: l,
              color: "currentColor",
              className: r,
          })
        : null;
}

function z(e) {
    let { result: t, group: r } = e,
        { channel: l, user: s } = t;
    return null != l
        ? (0, n.jsx)(E.A, {
              channel: l,
              avatarSize: o._3J.SIZE_20,
              iconClassName: R.Fx,
              iconSize: "refresh_sm",
          })
        : null != s
          ? (0, n.jsx)(w, {
                size: o._3J.SIZE_20,
                user: s,
                className: R.Fx,
            })
          : r === A.LWr.FILTER_HAS
            ? (0, n.jsx)(U, {
                  size: "sm",
                  text: t.text,
                  className: R.Fx,
              })
            : r === A.LWr.FILTER_AUTHOR_TYPE
              ? (0, n.jsx)(q, {
                    size: "sm",
                    text: t.text,
                    className: R.Fx,
                })
              : null;
}

function G(e) {
    let { channel: t, user: r, text: l } = e;
    if (null != t) {
        let e = (0, f.E3)(t);
        return {
            label: (0, n.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: e,
            }),
            ariaLabel: t.name,
        };
    }
    return null != r
        ? {
              label: (0, n.jsxs)("div", {
                  className: R.YL,
                  children: [
                      (0, n.jsx)(P, {
                          user: r,
                      }),
                      (0, n.jsx)(o.Text, {
                          variant: "text-sm/medium",
                          color: "text-subtle",
                          children: r.username,
                      }),
                  ],
              }),
              ariaLabel: r.username,
          }
        : {
              label: (0, n.jsx)(x, {
                  label: l,
              }),
              ariaLabel: l,
          };
}
