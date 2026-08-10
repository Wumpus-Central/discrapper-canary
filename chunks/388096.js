"use strict";
n.d(t, { A: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(989349),
    s = n.n(a),
    l = n(331322),
    o = n(582306),
    d = n(666944),
    c = n(375708),
    u = n(693005);
function _(e) {
    let { defaultValue: t, onChange: n } = e,
        [a, _] = r.useState(t),
        E = s()(),
        A = s()().add(365, "days");
    function h(e) {
        e.isValid() && _(e);
    }
    return (
        r.useEffect(() => {
            n?.(a);
        }, [a, n]),
        (0, i.jsxs)(l.B, {
            direction: "horizontal",
            gap: 16,
            className: u.i,
            children: [
                (0, i.jsx)("div", {
                    className: u.f,
                    children: (0, i.jsx)(o.J, {
                        required: !0,
                        label: c.intl.string(c.t.pSZKvM),
                        value: a,
                        onSelect: h,
                        minDate: E,
                        maxDate: A,
                        disabled: !1,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: u.f,
                    children: (0, i.jsx)(d.c, {
                        label: c.intl.string(c.t.GOmEb8),
                        required: !0,
                        value: a,
                        onChange: h,
                        hideValue: !1,
                        disabled: !1,
                    }),
                }),
            ],
        })
    );
}
