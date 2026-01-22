t.d(A, {
    Ay: () => q,
    Jn: () => p,
    id: () => b,
});
var r = t(627968);
t(64700);
var n = t(284009),
    l = t.n(n),
    a = t(317097),
    i = t(417597),
    s = t(732955),
    o = t(397927),
    d = t(317525),
    c = t(137766),
    u = t(652215),
    g = t(985018),
    f = t(463091);
function p() {
    return {
        name: "",
        color: u.TGz,
    };
}
function m(e) {
    let A,
        { onRemove: t, role: n } = e;
    return null != n
        ? (0, r.jsx)(o.CR_, {
              items: [
                  {
                      id: n.id,
                      label: n.name,
                      icon: {
                          type: "role",
                          color: (0, a.Hl)(n.color),
                      },
                  },
              ],
              onRemove: t,
          })
        : ((A = (0, r.jsx)(o.y$y, { type: o.y$y.Type.PULSING_ELLIPSIS })),
          (0, r.jsx)("div", {
              className: f.qo,
              children: A,
          }));
}
function b() {
    return (0, r.jsx)(o.EpV, {
        size: "xs",
        color: "currentColor",
        className: f.QW,
    });
}
function v(e) {
    let { roleName: A } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.format(g.t.i2x5aY, {
                    roleName: A,
                    emphasisHook: (e) =>
                        (0, r.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: e,
                        }),
                }),
            }),
            (0, r.jsxs)(o.Heading, {
                className: f.wV,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, r.jsx)(o.Nxw, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    (0, r.jsx)(o.hKd, {
                        horizontal: !0,
                        size: 8,
                    }),
                    g.intl.string(g.t.KWx4HY),
                ],
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t.hNHNph),
            }),
            (0, r.jsxs)(o.Heading, {
                className: f.wV,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, r.jsx)(o.ucK, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    (0, r.jsx)(o.hKd, {
                        horizontal: !0,
                        size: 8,
                    }),
                    g.intl.string(g.t.WIPKAb),
                ],
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t["40shJX"]),
            }),
        ],
    });
}
function q(e) {
    let { newRoleParams: A, setNewRoleParams: n, guildId: a, productId: u, listingRoleId: f, error: p } = e,
        b = (0, i.bG)([d.A], () => (null != f ? d.A.getRole(a, f) : void 0));
    return null === A
        ? (0, r.jsx)(o.D0$, {
              label: g.intl.string(g.t.ovXIrP),
              description: g.intl.string(g.t["H7coX+"]),
              children: (0, r.jsxs)(o.M_l, {
                  children: [
                      (0, r.jsx)(m, {
                          role: b,
                          onRemove: void 0,
                      }),
                      (0, r.jsx)(s.$nd, {
                          text: g.intl.string(g.t.KkRpFi),
                          icon: o.ejX,
                          iconPosition: "end",
                          variant: "secondary",
                          onClick: () => {
                              n(void 0);
                          },
                      }),
                  ],
              }),
          })
        : null != f
          ? (0, r.jsx)(o.D0$, {
                label: g.intl.string(g.t.zIg9tw),
                description: g.intl.string(g.t.OfuEkP),
                errorMessage: p,
                children: (0, r.jsx)(m, {
                    role: b,
                    onRemove: () => {
                        l()(null != u, "productId cannot be null"),
                            l()(null != b, "no role attached"),
                            (function (e) {
                                let { onConfirm: A, roleName: n } = e;
                                (0, o.mMO)(async () => {
                                    let { default: e } = await t.e("44252").then(t.bind(t, 790743));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            (function (e) {
                                                for (var A = 1; A < arguments.length; A++) {
                                                    var t = null != arguments[A] ? arguments[A] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (r = r.concat(
                                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                            }),
                                                        )),
                                                        r.forEach(function (A) {
                                                            var r;
                                                            (r = t[A]),
                                                                A in e
                                                                    ? Object.defineProperty(e, A, {
                                                                          value: r,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (e[A] = r);
                                                        });
                                                }
                                                return e;
                                            })(
                                                {
                                                    title: g.intl.string(g.t.Y3Hi3R),
                                                    body: (0, r.jsx)(v, { roleName: n }),
                                                    cta: g.intl.string(g.t.VawZVx),
                                                    closeLabel: g.intl.string(g.t["6y+3Bw"]),
                                                    onConfirm: A,
                                                },
                                                t,
                                            ),
                                        );
                                });
                            })({
                                roleName: b.name,
                                onConfirm: () => n(null),
                            });
                    },
                }),
            })
          : (l()(null != A, "newRoleParams cannot be null at this point"),
            (0, r.jsx)(o.D0$, {
                required: !0,
                label: g.intl.string(g.t.xZvFpA),
                errorMessage: p,
                children: (0, r.jsx)(c.A, {
                    newRoleParams: A,
                    setNewRoleParams: n,
                }),
            }));
}
