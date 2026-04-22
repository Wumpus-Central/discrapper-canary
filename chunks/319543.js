t.d(e, { Ay: () => K, Jn: () => N, id: () => T });
var a = t(627968);
t(64700);
var n = t(284009),
    r = t.n(n),
    l = t(317097),
    i = t(417597),
    s = t(821609),
    o = t(866711),
    d = t(289873),
    c = t(695366),
    u = t(834730),
    g = t(534514),
    h = t(905499),
    p = t(696986),
    f = t(241326),
    m = t(192308),
    q = t(452027),
    v = t(532446),
    C = t(744898),
    x = t(317525),
    U = t(137766),
    V = t(652215),
    b = t(985018),
    j = t(955894);
function N() {
    return { name: "", color: V.TGz };
}
function I(A) {
    let e,
        { onRemove: t, role: n } = A;
    return null != n
        ? (0, a.jsx)(o.C, {
              items: [{ id: n.id, label: n.name, icon: { type: "role", color: (0, l.Hl)(n.color) } }],
              onRemove: t,
          })
        : ((e = (0, a.jsx)(d.y, { type: d.y.Type.PULSING_ELLIPSIS })),
          (0, a.jsx)("div", { className: j.qo, children: e }));
}
function T() {
    return (0, a.jsx)(c.E, { size: "xs", color: "currentColor", className: j.QW });
}
function F(A) {
    let { roleName: e } = A;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: b.intl.format(b.t.i2x5aY, {
                    roleName: e,
                    emphasisHook: (A) =>
                        (0, a.jsx)(u.E, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: A,
                        }),
                }),
            }),
            (0, a.jsxs)(g.D, {
                className: j.wV,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, a.jsx)(h.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(p.h, { horizontal: !0, size: 8 }),
                    b.intl.string(b.t.KWx4HY),
                ],
            }),
            (0, a.jsx)(u.E, { variant: "text-md/normal", color: "text-muted", children: b.intl.string(b.t.hNHNph) }),
            (0, a.jsxs)(g.D, {
                className: j.wV,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, a.jsx)(f.u, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(p.h, { horizontal: !0, size: 8 }),
                    b.intl.string(b.t.WIPKAb),
                ],
            }),
            (0, a.jsx)(u.E, { variant: "text-md/normal", color: "text-muted", children: b.intl.string(b.t["40shJX"]) }),
        ],
    });
}
function K(A) {
    let { newRoleParams: e, setNewRoleParams: n, guildId: l, productId: o, listingRoleId: d, error: c } = A,
        u = (0, i.bG)([x.A], () => (null != d ? x.A.getRole(l, d) : void 0));
    return null === e
        ? (0, a.jsx)(q.D, {
              label: b.intl.string(b.t.ovXIrP),
              description: b.intl.string(b.t["H7coX+"]),
              children: (0, a.jsxs)(v.M, {
                  children: [
                      (0, a.jsx)(I, { role: u, onRemove: void 0 }),
                      (0, a.jsx)(s.$, {
                          text: b.intl.string(b.t.KkRpFi),
                          icon: C.e,
                          iconPosition: "end",
                          variant: "secondary",
                          onClick: () => {
                              n(void 0);
                          },
                      }),
                  ],
              }),
          })
        : null != d
          ? (0, a.jsx)(q.D, {
                label: b.intl.string(b.t.zIg9tw),
                description: b.intl.string(b.t.OfuEkP),
                errorMessage: c,
                children: (0, a.jsx)(I, {
                    role: u,
                    onRemove: () => {
                        r()(null != o, "productId cannot be null"),
                            r()(null != u, "no role attached"),
                            (function (A) {
                                let { onConfirm: e, roleName: n } = A;
                                (0, m.openModalLazy)(async () => {
                                    let { default: A } = await t.e("44252").then(t.bind(t, 790743));
                                    return (t) =>
                                        (0, a.jsx)(A, {
                                            title: b.intl.string(b.t.Y3Hi3R),
                                            body: (0, a.jsx)(F, { roleName: n }),
                                            cta: b.intl.string(b.t.VawZVx),
                                            closeLabel: b.intl.string(b.t["6y+3Bw"]),
                                            onConfirm: e,
                                            ...t,
                                        });
                                });
                            })({ roleName: u.name, onConfirm: () => n(null) });
                    },
                }),
            })
          : (r()(null != e, "newRoleParams cannot be null at this point"),
            (0, a.jsx)(q.D, {
                required: !0,
                label: b.intl.string(b.t.xZvFpA),
                errorMessage: c,
                children: (0, a.jsx)(U.A, { newRoleParams: e, setNewRoleParams: n }),
            }));
}
