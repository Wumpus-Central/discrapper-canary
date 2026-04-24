n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(331322),
    o = n(582306),
    d = n(666944),
    u = n(985018),
    c = n(936197);
function h(e) {
    let { defaultValue: t, onChange: n } = e,
        [s, h] = l.useState(t),
        m = a()(),
        p = a()().add(365, "days"),
        f = (e) => {
            e.isValid() && h(e);
        };
    return (
        l.useEffect(() => {
            n?.(s);
        }, [s, n]),
        (0, i.jsxs)(r.B, {
            direction: "horizontal",
            gap: 16,
            className: c.i,
            children: [
                (0, i.jsx)("div", {
                    className: c.f,
                    children: (0, i.jsx)(o.J, {
                        required: !0,
                        label: u.intl.string(u.t.pSZKvM),
                        value: s,
                        onSelect: f,
                        minDate: m,
                        maxDate: p,
                        disabled: !1,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: c.f,
                    children: (0, i.jsx)(d.c, {
                        label: u.intl.string(u.t.GOmEb8),
                        required: !0,
                        value: s,
                        onChange: f,
                        hideValue: !1,
                        disabled: !1,
                    }),
                }),
            ],
        })
    );
}
