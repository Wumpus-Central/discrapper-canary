n.d(t, {
    A: () => C,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    s = n(990078),
    a = n(397927),
    c = n(442433),
    o = n(525113),
    d = n(611371),
    u = n(627794),
    f = n(928348),
    g = n(53594),
    b = n(268749),
    m = n(878701),
    p = n(542210),
    x = n(780679),
    h = n(411335),
    j = n(985018),
    O = n(985681);

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

function v(e, t) {
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

function A(e) {
    let { rule: t, triggerType: n } = e,
        l = i.useMemo(
            () =>
                null == t
                    ? (0, g.J6)(n).map((e) =>
                          (0, r.jsx)(
                              p.A,
                              {
                                  actionType: e,
                                  triggerType: n,
                              },
                              e,
                          ),
                      )
                    : (0, g.J6)(n).reduce((e, i) => {
                          var l;
                          let s = t.actions.find((e) => {
                              let { type: t } = e;
                              return i === t;
                          });
                          return (
                              null == s ||
                                  e.push(
                                      (0, r.jsx)(
                                          p.A,
                                          {
                                              actionType: i,
                                              action: s,
                                              triggerType: null != (l = null == t ? void 0 : t.triggerType) ? l : n,
                                          },
                                          i,
                                      ),
                                  ),
                              e
                          );
                      }, []),
            [t, n],
        );
    return 0 === l.length
        ? null
        : (0, r.jsx)("div", {
              className: O.Wy,
              children: l,
          });
}
let E = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    N = (e) => {
        let { className: t, children: n } = e,
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(e, ["className", "children"]);
        return (0, r.jsx)(
            a.DUT,
            v(
                y(
                    {
                        className: t,
                        onClick: E,
                        onMouseDown: E,
                        onMouseUp: E,
                    },
                    i,
                ),
                {
                    children: n,
                },
            ),
        );
    };

function _(e) {
    var t;
    let { rule: n, onChangeRule: i, onContextMenu: l } = e,
        c = () =>
            i(
                v(y({}, n), {
                    enabled: !n.enabled,
                }),
            );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: O.XG,
                children: (0, r.jsx)(x.A, {
                    rule: n,
                    onChangeRule: i,
                }),
            }),
            (0, r.jsxs)(N, {
                className: O.Ik,
                children: [
                    (0, r.jsx)(a.dOG, {
                        onChange: c,
                        checked: null != (t = null == n ? void 0 : n.enabled) && t,
                    }),
                    (0, r.jsx)(s.m, {
                        text: j.intl.string(j.t["UKOtz+"]),
                        position: "top",
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        children: (0, r.jsx)(a.DUT, {
                            onClick: (e) => {
                                E(e), l(e);
                            },
                            className: O.p5,
                            children: (0, r.jsx)(a.FHP, {
                                size: "md",
                                color: "currentColor",
                                className: O.ro,
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}

function S(e) {
    return (0, g.ub)(e, g.H2.ALPHA)
        ? (0, r.jsx)(o.A, {
              className: O.n0,
          })
        : (0, g.ub)(e, g.H2.BETA)
          ? (0, r.jsx)(d.A, {
                className: O.n0,
            })
          : null;
}

function T(e) {
    let { rule: t, isDefaultRule: n, onContextMenu: c } = e,
        o = (0, m.l)(t.triggerType, t),
        { isLoading: d, saveRule: g } = (0, b.S)(),
        { updateRule: p } = (0, f.wP)(t.guildId),
        [x, h] = i.useState(t.enabled),
        _ = (0, l.throttle)(async () => {
            if (!d) {
                let e = v(y({}, t), {
                    enabled: !x,
                });
                h(!x);
                let n = await g(e, []);
                null != n && (p(n), h(n.enabled));
            }
        }, 300);
    if (null == o) return null;
    let { headerText: T, headerSubtext: I, descriptionText: C, icon: P } = o,
        w = !(0, u.wC)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: O.Ji,
                children: (0, r.jsx)(P, {
                    size: "md",
                    color: "currentColor",
                    className: O.S3,
                }),
            }),
            (0, r.jsxs)("div", {
                className: O.XG,
                children: [
                    (0, r.jsxs)(a.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: O.aY,
                        children: [
                            (0, r.jsxs)("div", {
                                className: O.bR,
                                children: [T, S(t.triggerType)],
                            }),
                            (0, r.jsx)(a.Text, {
                                className: O.bL,
                                variant: "text-sm/normal",
                                children: I,
                            }),
                        ],
                    }),
                    w &&
                        (0, r.jsx)(a.Text, {
                            className: O.mT,
                            variant: "text-sm/normal",
                            children: C,
                        }),
                    (0, r.jsx)(A, {
                        rule: t,
                        triggerType: t.triggerType,
                    }),
                ],
            }),
            (0, r.jsxs)(N, {
                className: O.Ik,
                children: [
                    (0, r.jsx)(a.dOG, {
                        onChange: _,
                        checked: null != x && x,
                    }),
                    !n &&
                        (0, r.jsx)(s.m, {
                            text: j.intl.string(j.t["UKOtz+"]),
                            position: "top",
                            "aria-label": j.intl.string(j.t.PdRCRg),
                            children: (0, r.jsx)(a.DUT, {
                                onClick: (e) => {
                                    E(e), c(e);
                                },
                                className: O.p5,
                                children: (0, r.jsx)(a.FHP, {
                                    size: "md",
                                    color: "currentColor",
                                    className: O.ro,
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}

function I(e) {
    let { triggerType: t, onSetupRule: n } = e,
        l = i.useMemo(() => (0, m.l)(t), [t]);
    if (null == l) return null;
    let { headerText: s, descriptionText: c, icon: o } = l;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: O.Ji,
                children: (0, r.jsx)(o, {
                    color: "currentColor",
                    size: "md",
                    className: O.S3,
                }),
            }),
            (0, r.jsxs)("div", {
                className: O.XG,
                children: [
                    (0, r.jsx)(a.Heading, {
                        className: O.bR,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: (0, r.jsxs)("div", {
                            className: O.bR,
                            children: [s, S(t)],
                        }),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: O.mT,
                        variant: "text-sm/normal",
                        children: c,
                    }),
                    (0, r.jsx)(A, {
                        triggerType: t,
                    }),
                ],
            }),
            (0, r.jsx)(N, {
                className: O.Ik,
                children: (0, r.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: t === h.uh.KEYWORD ? j.intl.string(j.t.CumH4u) : j.intl.string(j.t.oRs6mG),
                    onClick: n,
                }),
            }),
        ],
    });
}

function C(e) {
    let {
            rule: t,
            triggerType: i,
            isEditMode: l,
            isDefaultRule: s,
            forceSetup: o,
            onSetupRule: d,
            onChangeRule: u,
        } = e,
        f = (e) => {
            null != t &&
                (e.preventDefault(),
                e.stopPropagation(),
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("52106").then(n.bind(n, 345585));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            y(
                                {
                                    rule: t,
                                },
                                n,
                            ),
                        );
                }));
        },
        g = (0, r.jsx)(I, {
            triggerType: i,
            onSetupRule: d,
        });
    return (
        null == t ||
            o ||
            (g = l
                ? (0, r.jsx)(_, {
                      rule: t,
                      onChangeRule: u,
                      onContextMenu: f,
                  })
                : (0, r.jsx)(T, {
                      rule: t,
                      isDefaultRule: s,
                      onContextMenu: f,
                  })),
        (0, r.jsx)(a.DUT, {
            className: O.rs,
            onContextMenu: f,
            children: g,
        })
    );
}
