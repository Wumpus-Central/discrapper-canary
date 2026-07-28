n.d(t, { A: () => S });
var a = n(477900),
    i = n(582128),
    s = n(989349),
    l = n.n(s),
    r = n(331322),
    o = n(582306),
    d = n(666944),
    u = n(375708),
    c = n(693005);
function S(e) {
    let { defaultValue: t, onChange: n } = e,
        [s, S] = i.useState(t),
        E = l()(),
        m = l()().add(365, "days");
    function h(e) {
        e.isValid() && S(e);
    }
    return (
        i.useEffect(() => {
            n?.(s);
        }, [s, n]),
        (0, a.jsxs)(r.B, {
            direction: "horizontal",
            gap: 16,
            className: c.i,
            children: [
                (0, a.jsx)("div", {
                    className: c.f,
                    children: (0, a.jsx)(o.J, {
                        required: !0,
                        label: u.intl.string(u.t.pSZKvM),
                        value: s,
                        onSelect: h,
                        minDate: E,
                        maxDate: m,
                        disabled: !1,
                    }),
                }),
                (0, a.jsx)("div", {
                    className: c.f,
                    children: (0, a.jsx)(d.c, {
                        label: u.intl.string(u.t.GOmEb8),
                        required: !0,
                        value: s,
                        onChange: h,
                        hideValue: !1,
                        disabled: !1,
                    }),
                }),
            ],
        })
    );
}
