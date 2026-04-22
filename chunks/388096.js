n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(989349),
    s = n.n(a),
    r = n(331322),
    o = n(582306),
    c = n(335310),
    d = n(985018),
    u = n(936197);
function h(e) {
    let { defaultValue: t, onChange: n } = e,
        [a, h] = l.useState(t),
        m = s()(),
        A = s()().add(365, "days"),
        g = (e) => {
            e.isValid() && h(e);
        };
    return (
        l.useEffect(() => {
            n?.(a);
        }, [a, n]),
        (0, i.jsxs)(r.B, {
            direction: "horizontal",
            gap: 16,
            className: u.i,
            children: [
                (0, i.jsx)("div", {
                    className: u.f,
                    children: (0, i.jsx)(o.J, {
                        required: !0,
                        label: d.intl.string(d.t.pSZKvM),
                        value: a,
                        onSelect: g,
                        minDate: m,
                        maxDate: A,
                        disabled: !1,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: u.f,
                    children: (0, i.jsx)(c.c, {
                        label: d.intl.string(d.t.GOmEb8),
                        required: !0,
                        value: a,
                        onChange: g,
                        hideValue: !1,
                        disabled: !1,
                    }),
                }),
            ],
        })
    );
}
