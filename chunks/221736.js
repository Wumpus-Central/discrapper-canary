s.d(t, { A: () => x });
var i = s(627968);
s(64700);
var r = s(503698),
    a = s.n(r),
    l = s(778712),
    n = s(97808),
    C = s(834730),
    d = s(150934),
    o = s(854627),
    c = s(919563);
function x(e) {
    let { user: t, checked: s, onChange: r, disabled: x } = e,
        { avatarSrc: h, eventHandlers: p } = (0, o.A)({ userId: t?.id, size: l._3.SIZE_32 }),
        _ = t.globalName ?? t.username;
    return (0, i.jsxs)("div", {
        className: c.kL,
        children: [
            (0, i.jsxs)("div", {
                className: c.kQ,
                children: [
                    (0, i.jsx)(n.eu, {
                        className: a()({ [c.SU]: x }),
                        src: h,
                        "aria-label": _,
                        size: l._3.SIZE_32,
                        ...p,
                    }),
                    (0, i.jsx)(C.E, {
                        color: x ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: _,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: c.kv,
                children: (0, i.jsx)(d.S, { disabled: x, checked: s, onChange: (e) => r(t, e), label: "" }),
            }),
        ],
    });
}
