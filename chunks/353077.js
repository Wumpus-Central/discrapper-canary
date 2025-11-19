n.d(t, { Z: () => u }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(913527),
    a = n.n(l),
    o = n(481060),
    s = n(388032),
    c = n(675374);
function u(e) {
    let { defaultValue: t, onChange: n } = e,
        [l, u] = r.useState(t),
        d = a()(),
        p = a()().add(365, "days"),
        h = (e) => {
            e.isValid() && u(e);
        };
    return (
        r.useEffect(() => {
            null == n || n(l);
        }, [l, n]),
        (0, i.jsxs)(o.Kqy, {
            direction: "horizontal",
            gap: 16,
            className: c.wrapper,
            children: [
                (0, i.jsx)("div", {
                    className: c.column,
                    children: (0, i.jsx)(o.Wrb, {
                        required: !0,
                        label: s.intl.string(s.t.pSZKvM),
                        value: l,
                        onSelect: h,
                        minDate: d,
                        maxDate: p,
                        disabled: !1,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: c.column,
                    children: (0, i.jsx)(o.MGJ, {
                        label: s.intl.string(s.t.GOmEb8),
                        required: !0,
                        value: l,
                        onChange: h,
                        hideValue: !1,
                        disabled: !1,
                    }),
                }),
            ],
        })
    );
}
