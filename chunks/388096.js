n.d(t, { A: () => u }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(397927),
    o = n(985018),
    c = n(789906);
function u(e) {
    let { defaultValue: t, onChange: n } = e,
        [i, u] = l.useState(t),
        d = a()(),
        f = a()().add(365, "days"),
        p = (e) => {
            e.isValid() && u(e);
        };
    return (
        l.useEffect(() => {
            null == n || n(i);
        }, [i, n]),
        (0, r.jsxs)(s.BJc, {
            direction: "horizontal",
            gap: 16,
            className: c.i,
            children: [
                (0, r.jsx)("div", {
                    className: c.f,
                    children: (0, r.jsx)(s.J3s, {
                        required: !0,
                        label: o.intl.string(o.t.pSZKvM),
                        value: i,
                        onSelect: p,
                        minDate: d,
                        maxDate: f,
                        disabled: !1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: c.f,
                    children: (0, r.jsx)(s.czz, {
                        label: o.intl.string(o.t.GOmEb8),
                        required: !0,
                        value: i,
                        onChange: p,
                        hideValue: !1,
                        disabled: !1,
                    }),
                }),
            ],
        })
    );
}
