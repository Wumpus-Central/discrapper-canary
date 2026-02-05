t.d(e, { Ay: () => C, Jn: () => p, id: () => m });
var n = t(627968);
t(64700);
var a = t(284009),
    r = t.n(a),
    i = t(317097),
    l = t(417597),
    s = t(732955),
    o = t(397927),
    d = t(317525),
    u = t(137766),
    c = t(652215),
    g = t(985018),
    q = t(463091);
function p() {
    return { name: "", color: c.TGz };
}
function f(A) {
    let e,
        { onRemove: t, role: a } = A;
    return null != a
        ? (0, n.jsx)(o.CR_, {
              items: [{ id: a.id, label: a.name, icon: { type: "role", color: (0, i.Hl)(a.color) } }],
              onRemove: t,
          })
        : ((e = (0, n.jsx)(o.y$y, { type: o.y$y.Type.PULSING_ELLIPSIS })),
          (0, n.jsx)("div", { className: q.qo, children: e }));
}
function m() {
    return (0, n.jsx)(o.EpV, { size: "xs", color: "currentColor", className: q.QW });
}
function h(A) {
    let { roleName: e } = A;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.format(g.t.i2x5aY, {
                    roleName: e,
                    emphasisHook: (A) =>
                        (0, n.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: A,
                        }),
                }),
            }),
            (0, n.jsxs)(o.Heading, {
                className: q.wV,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, n.jsx)(o.Nxw, { size: "sm", color: "currentColor" }),
                    (0, n.jsx)(o.hKd, { horizontal: !0, size: 8 }),
                    g.intl.string(g.t.KWx4HY),
                ],
            }),
            (0, n.jsx)(o.Text, { variant: "text-md/normal", color: "text-muted", children: g.intl.string(g.t.hNHNph) }),
            (0, n.jsxs)(o.Heading, {
                className: q.wV,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, n.jsx)(o.ucK, { size: "sm", color: "currentColor" }),
                    (0, n.jsx)(o.hKd, { horizontal: !0, size: 8 }),
                    g.intl.string(g.t.WIPKAb),
                ],
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t["40shJX"]),
            }),
        ],
    });
}
function C(A) {
    let { newRoleParams: e, setNewRoleParams: a, guildId: i, productId: c, listingRoleId: q, error: p } = A,
        m = (0, l.bG)([d.A], () => (null != q ? d.A.getRole(i, q) : void 0));
    return null === e
        ? (0, n.jsx)(o.D0$, {
              label: g.intl.string(g.t.ovXIrP),
              description: g.intl.string(g.t["H7coX+"]),
              children: (0, n.jsxs)(o.M_l, {
                  children: [
                      (0, n.jsx)(f, { role: m, onRemove: void 0 }),
                      (0, n.jsx)(s.$nd, {
                          text: g.intl.string(g.t.KkRpFi),
                          icon: o.ejX,
                          iconPosition: "end",
                          variant: "secondary",
                          onClick: () => {
                              a(void 0);
                          },
                      }),
                  ],
              }),
          })
        : null != q
          ? (0, n.jsx)(o.D0$, {
                label: g.intl.string(g.t.zIg9tw),
                description: g.intl.string(g.t.OfuEkP),
                errorMessage: p,
                children: (0, n.jsx)(f, {
                    role: m,
                    onRemove: () => {
                        r()(null != c, "productId cannot be null"),
                            r()(null != m, "no role attached"),
                            (function (A) {
                                let { onConfirm: e, roleName: a } = A;
                                (0, o.mMO)(async () => {
                                    let { default: A } = await t.e("44252").then(t.bind(t, 790743));
                                    return (t) =>
                                        (0, n.jsx)(A, {
                                            title: g.intl.string(g.t.Y3Hi3R),
                                            body: (0, n.jsx)(h, { roleName: a }),
                                            cta: g.intl.string(g.t.VawZVx),
                                            closeLabel: g.intl.string(g.t["6y+3Bw"]),
                                            onConfirm: e,
                                            ...t,
                                        });
                                });
                            })({ roleName: m.name, onConfirm: () => a(null) });
                    },
                }),
            })
          : (r()(null != e, "newRoleParams cannot be null at this point"),
            (0, n.jsx)(o.D0$, {
                required: !0,
                label: g.intl.string(g.t.xZvFpA),
                errorMessage: p,
                children: (0, n.jsx)(u.A, { newRoleParams: e, setNewRoleParams: a }),
            }));
}
