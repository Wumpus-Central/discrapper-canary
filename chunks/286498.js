n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(837381),
    s = n(17928),
    o = n(939249),
    d = n(834730),
    c = n(658675),
    u = n(297413),
    _ = n(966327),
    E = n(235986),
    f = n(290863),
    A = n(427262),
    S = n(973081);
function g(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: a,
            comparator: g,
            selected: m,
            checked: h,
            disabled: p = !1,
            onClick: C,
            onMouseEnter: N,
            "aria-setsize": T,
            "aria-posinset": b,
        } = e,
        I = (0, s.bG)([f.A], () => f.A.getStatus(t.id)),
        L = (0, l.rm)(String(t.id));
    return (0, i.jsx)(o.D, {
        id: `user-row-${n}`,
        className: r()(S.Se, { [S.r9]: p }),
        onClick: () => {
            C?.(t.id);
        },
        onMouseEnter: () => {
            N?.(n);
        },
        ...L,
        role: "checkbox",
        "aria-checked": h,
        "aria-disabled": p,
        "aria-setsize": T,
        "aria-posinset": b,
        children: (0, i.jsxs)(E.A, {
            align: E.A.Align.CENTER,
            className: r()(S.Bc, { [S.oz]: m }),
            children: [
                (0, i.jsx)(_.A, { user: t, status: I, className: S.my }),
                (0, i.jsxs)("div", {
                    className: S.YW,
                    children: [
                        (0, i.jsx)(d.E, {
                            tag: "strong",
                            className: S.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != g && g === t.tag
                                    ? A.Ay.getName(t)
                                    : null != g && "" !== g
                                      ? g
                                      : A.Ay.getName(t),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: (0, i.jsx)(u.A, {
                                user: t,
                                hideDiscriminator: a,
                                className: S.xK,
                                forceUsername: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(c.P, { checked: h, disabled: p }),
            ],
        }),
    });
}
