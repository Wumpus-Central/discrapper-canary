n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(913527),
    a = n.n(l),
    o = n(481060),
    s = n(388032),
    c = n(917995);
function u(e) {
    let { defaultValue: t, onChange: n } = e,
        [l, u] = i.useState(t),
        d = a()(),
        p = a()().add(365, "days"),
        f = (e) => {
            e.isValid() && u(e);
        };
    return (
        i.useEffect(() => {
            null == n || n(l);
        }, [l, n]),
        (0, r.jsxs)(o.Kqy, {
            direction: "horizontal",
            gap: 16,
            className: c.wrapper,
            children: [
                (0, r.jsx)("div", {
                    className: c.column,
                    children: (0, r.jsx)(o.Wrb, {
                        required: !0,
                        label: s.intl.string(s.t.pSZKvM),
                        value: l,
                        onSelect: f,
                        minDate: d,
                        maxDate: p,
                        disabled: !1,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: c.column,
                    children: (0, r.jsx)(o.MGJ, {
                        label: s.intl.string(s.t.GOmEb8),
                        required: !0,
                        value: l,
                        onChange: f,
                        hideValue: !1,
                        disabled: !1,
                    }),
                }),
            ],
        })
    );
}
