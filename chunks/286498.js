n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(837381),
    a = n(17928),
    u = n(939249),
    o = n(834730),
    d = n(658675),
    c = n(297413),
    h = n(966327),
    A = n(235986),
    f = n(290863),
    g = n(427262),
    E = n(973081);
function I(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: I,
            selected: S,
            checked: _,
            disabled: T = !1,
            onClick: C,
            onMouseEnter: m,
            "aria-setsize": p,
            "aria-posinset": N,
        } = e,
        M = (0, a.bG)([f.A], () => f.A.getStatus(t.id)),
        D = (0, r.rm)(String(t.id));
    return (0, i.jsx)(u.D, {
        id: `user-row-${n}`,
        className: s()(E.Se, { [E.r9]: T }),
        onClick: () => {
            C?.(t.id);
        },
        onMouseEnter: () => {
            m?.(n);
        },
        ...D,
        role: "checkbox",
        "aria-checked": _,
        "aria-disabled": T,
        "aria-setsize": p,
        "aria-posinset": N,
        children: (0, i.jsxs)(A.A, {
            align: A.A.Align.CENTER,
            className: s()(E.Bc, { [E.oz]: S }),
            children: [
                (0, i.jsx)(h.A, { user: t, status: M, className: E.my }),
                (0, i.jsxs)("div", {
                    className: E.YW,
                    children: [
                        (0, i.jsx)(o.E, {
                            tag: "strong",
                            className: E.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != I && I === t.tag
                                    ? g.Ay.getName(t)
                                    : null != I && "" !== I
                                      ? I
                                      : g.Ay.getName(t),
                        }),
                        (0, i.jsx)(o.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: (0, i.jsx)(c.A, {
                                user: t,
                                hideDiscriminator: l,
                                className: E.xK,
                                forceUsername: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(d.P, { checked: _, disabled: T }),
            ],
        }),
    });
}
