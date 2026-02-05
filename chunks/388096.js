n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    a = n(989349),
    s = n.n(a),
    r = n(397927),
    o = n(985018),
    c = n(789906);
function d(e) {
    let { defaultValue: t, onChange: n } = e,
        [a, d] = l.useState(t),
        u = s()(),
        h = s()().add(365, "days"),
        m = (e) => {
            e.isValid() && d(e);
        };
    return (
        l.useEffect(() => {
            n?.(a);
        }, [a, n]),
        (0, i.jsxs)(r.BJc, {
            direction: "horizontal",
            gap: 16,
            className: c.i,
            children: [
                (0, i.jsx)("div", {
                    className: c.f,
                    children: (0, i.jsx)(r.J3s, {
                        required: !0,
                        label: o.intl.string(o.t.pSZKvM),
                        value: a,
                        onSelect: m,
                        minDate: u,
                        maxDate: h,
                        disabled: !1,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: c.f,
                    children: (0, i.jsx)(r.czz, {
                        label: o.intl.string(o.t.GOmEb8),
                        required: !0,
                        value: a,
                        onChange: m,
                        hideValue: !1,
                        disabled: !1,
                    }),
                }),
            ],
        })
    );
}
