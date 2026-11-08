var e = i(477900),
    a = i(582128),
    s = i(189213),
    r = i(95477),
    o = i(794412),
    l = i(5180);
i(349828);
var u = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { onClose: n, transitionState: i } = t,
                [c, d] = a.useState("");
            return (0, e.jsx)("form", {
                onSubmit: function (t) {
                    (t.preventDefault(), (0, o.od)(c), n());
                },
                children: (0, e.jsx)(s.a, {
                    title: u.intl.string(u.t["ISN+NM"]),
                    actions: [
                        { text: u.intl.string(u.t["ETE/oC"]), onClick: n, variant: "secondary" },
                        {
                            text: u.intl.string(u.t["ISN+NM"]),
                            variant: "primary",
                            type: "submit",
                            autoFocus: !1,
                            disabled: !(0, l.QN)(c),
                        },
                    ],
                    transitionState: i,
                    onClose: n,
                    children: (0, e.jsx)(r.k, {
                        label: u.intl.string(u.t.OCAkGP),
                        value: c,
                        onChange: d,
                        maxLength: 100,
                        placeholder: u.intl.string(u.t.eTVbtx),
                        autoFocus: !0,
                    }),
                }),
            });
        },
    },
);
