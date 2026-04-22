n.d(t, { A: () => f });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(990078),
    c = n(778712),
    o = n(939249),
    d = n(97808),
    u = n(834730),
    _ = n(658675),
    m = n(854627),
    p = n(191577);
function f(e) {
    let { user: t, checked: n, onChange: i, disabled: f, tooltipConfig: A } = e,
        g = a.useRef(null),
        { avatarSrc: h, eventHandlers: b } = (0, m.A)({ userId: t?.id, size: c._3.SIZE_32 }),
        x = t.globalName ?? t.username;
    return (0, r.jsx)(l.m, {
        text: A?.isActive(t, f) ? A.text(t) : null,
        position: "top",
        anchorRef: g,
        asContainer: !0,
        children: (0, r.jsxs)(o.D, {
            className: s()(p.kL, { [p.vk]: !f }),
            onClick: () => {
                f || i(t, !n);
            },
            children: [
                (0, r.jsx)("div", {
                    className: p.dj,
                    children: (0, r.jsx)(d.eu, {
                        className: s()({ [p.SU]: f }),
                        src: h,
                        "aria-label": x,
                        size: c._3.SIZE_32,
                        ...b,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: p.QV,
                    children: [
                        (0, r.jsx)(u.E, {
                            className: p.nT,
                            color: f ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: x,
                        }),
                        (0, r.jsx)(u.E, {
                            className: p.nT,
                            color: f ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: t.username,
                        }),
                    ],
                }),
                (0, r.jsx)("div", { ref: g, className: p.kv, children: (0, r.jsx)(_.P, { checked: n, disabled: f }) }),
            ],
        }),
    });
}
