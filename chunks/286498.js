n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(837381),
    r = n(311907),
    o = n(397927),
    c = n(297413),
    d = n(966327),
    u = n(235986),
    h = n(290863),
    m = n(427262),
    A = n(701066);
function p(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: p,
            selected: g,
            checked: f,
            disabled: _ = !1,
            onClick: E,
            onMouseEnter: x,
            "aria-setsize": C,
            "aria-posinset": S,
        } = e,
        T = (0, r.bG)([h.A], () => h.A.getStatus(t.id)),
        N = (0, a.rm)(String(t.id));
    return (0, i.jsx)(o.DUT, {
        id: `user-row-${n}`,
        className: s()(A.Se, { [A.r9]: _ }),
        onClick: () => {
            E?.(t.id);
        },
        onMouseEnter: () => {
            x?.(n);
        },
        ...N,
        role: "option",
        "aria-selected": f,
        "aria-disabled": _,
        "aria-setsize": C,
        "aria-posinset": S,
        children: (0, i.jsxs)(u.A, {
            align: u.A.Align.CENTER,
            className: s()(A.Bc, { [A.oz]: g }),
            children: [
                (0, i.jsx)(d.A, { user: t, status: T, className: A.my }),
                (0, i.jsxs)("div", {
                    className: A.YW,
                    children: [
                        (0, i.jsx)(o.Text, {
                            tag: "strong",
                            className: A.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != p && p === t.tag
                                    ? m.Ay.getName(t)
                                    : null != p && "" !== p
                                      ? p
                                      : m.Ay.getName(t),
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: (0, i.jsx)(c.A, {
                                user: t,
                                hideDiscriminator: l,
                                className: A.xK,
                                forceUsername: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(o.P7L, { checked: f, disabled: _ }),
            ],
        }),
    });
}
