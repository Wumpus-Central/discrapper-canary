s.d(t, { A: () => d });
var i = s(627968);
s(64700);
var r = s(503698),
    a = s.n(r),
    l = s(397927),
    n = s(854627),
    C = s(237531);
function d(e) {
    let { user: t, checked: s, onChange: r, disabled: d } = e,
        { avatarSrc: o, eventHandlers: c } = (0, n.A)({ userId: t?.id, size: l._3J.SIZE_32 }),
        x = t.globalName ?? t.username;
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsxs)("div", {
                className: C.kQ,
                children: [
                    (0, i.jsx)(l.euF, {
                        className: a()({ [C.SU]: d }),
                        src: o,
                        "aria-label": x,
                        size: l._3J.SIZE_32,
                        ...c,
                    }),
                    (0, i.jsx)(l.Text, {
                        color: d ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: x,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: C.kv,
                children: (0, i.jsx)(l.Checkbox, { disabled: d, checked: s, onChange: (e) => r(t, e), label: "" }),
            }),
        ],
    });
}
