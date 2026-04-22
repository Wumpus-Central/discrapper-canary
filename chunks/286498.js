n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(837381),
    r = n(311907),
    o = n(939249),
    c = n(834730),
    d = n(658675),
    u = n(297413),
    h = n(966327),
    m = n(235986),
    A = n(290863),
    g = n(427262),
    p = n(973081);
function _(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: _,
            selected: f,
            checked: E,
            disabled: C = !1,
            onClick: x,
            onMouseEnter: S,
            "aria-setsize": I,
            "aria-posinset": N,
        } = e,
        v = (0, r.bG)([A.A], () => A.A.getStatus(t.id)),
        T = (0, s.rm)(String(t.id));
    return (0, i.jsx)(o.D, {
        id: `user-row-${n}`,
        className: a()(p.Se, { [p.r9]: C }),
        onClick: () => {
            x?.(t.id);
        },
        onMouseEnter: () => {
            S?.(n);
        },
        ...T,
        role: "option",
        "aria-selected": E,
        "aria-disabled": C,
        "aria-setsize": I,
        "aria-posinset": N,
        children: (0, i.jsxs)(m.A, {
            align: m.A.Align.CENTER,
            className: a()(p.Bc, { [p.oz]: f }),
            children: [
                (0, i.jsx)(h.A, { user: t, status: v, className: p.my }),
                (0, i.jsxs)("div", {
                    className: p.YW,
                    children: [
                        (0, i.jsx)(c.E, {
                            tag: "strong",
                            className: p.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != _ && _ === t.tag
                                    ? g.Ay.getName(t)
                                    : null != _ && "" !== _
                                      ? _
                                      : g.Ay.getName(t),
                        }),
                        (0, i.jsx)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: (0, i.jsx)(u.A, {
                                user: t,
                                hideDiscriminator: l,
                                className: p.xK,
                                forceUsername: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(d.P, { checked: E, disabled: C }),
            ],
        }),
    });
}
