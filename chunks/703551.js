i.d(n, { default: () => d });
var e = i(477900),
    a = i(582128),
    s = i(189213),
    o = i(95477),
    r = i(16236),
    l = i(5180),
    u = i(349828),
    c = i(375708);
function d(t) {
    let { onClose: n, transitionState: i } = t,
        [d, p] = a.useState("");
    return (0, e.jsx)("form", {
        onSubmit: function (t) {
            t.preventDefault(), (0, r.od)(d, "modal"), n();
        },
        children: (0, e.jsx)(s.Modal, {
            title: c.intl.string(c.t["ISN+NM"]),
            actions: [
                { text: c.intl.string(c.t["ETE/oC"]), onClick: n, variant: "secondary" },
                {
                    text: c.intl.string(c.t["ISN+NM"]),
                    variant: "primary",
                    type: "submit",
                    autoFocus: !1,
                    disabled: !(0, l.QN)(d),
                },
            ],
            transitionState: i,
            onClose: n,
            children: (0, e.jsx)(o.k, {
                label: c.intl.string(c.t.OCAkGP),
                value: d,
                onChange: p,
                maxLength: u.sv,
                placeholder: c.intl.string(c.t.eTVbtx),
                autoFocus: !0,
            }),
        }),
    });
}
