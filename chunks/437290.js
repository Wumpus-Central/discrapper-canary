n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(990078),
    o = n(397927),
    d = n(854627),
    c = n(429974);
function u(e) {
    let { user: t, checked: n, onChange: a, disabled: u, tooltipConfig: m } = e,
        _ = l.useRef(null),
        { avatarSrc: h, eventHandlers: p } = (0, d.A)({ userId: t?.id, size: o._3J.SIZE_32 }),
        g = t.globalName ?? t.username;
    return (0, i.jsx)(s.m, {
        text: m?.isActive(t, u) ? m.text(t) : null,
        position: "top",
        anchorRef: _,
        asContainer: !0,
        children: (0, i.jsxs)(o.DUT, {
            className: r()(c.kL, { [c.vk]: !u }),
            onClick: () => {
                u || a(t, !n);
            },
            children: [
                (0, i.jsx)("div", {
                    className: c.dj,
                    children: (0, i.jsx)(o.euF, {
                        className: r()({ [c.SU]: u }),
                        src: h,
                        "aria-label": g,
                        size: o._3J.SIZE_32,
                        ...p,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: c.QV,
                    children: [
                        (0, i.jsx)(o.Text, {
                            className: c.nT,
                            color: u ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: g,
                        }),
                        (0, i.jsx)(o.Text, {
                            className: c.nT,
                            color: u ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: t.username,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    ref: _,
                    className: c.kv,
                    children: (0, i.jsx)(o.Checkbox, { disabled: u, checked: n, label: "" }),
                }),
            ],
        }),
    });
}
