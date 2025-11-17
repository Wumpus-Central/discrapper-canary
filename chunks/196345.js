n.d(t, {
    EK: () => d,
    G0: () => C,
    QC: () => m,
    dd: () => b,
}),
    n(388685);
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(454585),
    s = n(489813),
    c = n(388032),
    u = n(624463);
function d(e) {
    let { terms: t, channelId: n, className: l } = e;
    return (0, r.jsx)("div", {
        className: i()(u.termsFieldBody, l),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                "div",
                {
                    className: u.termsRow,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "".concat(t + 1, "."),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: u.termsRowContent,
                            children: a.Z.parseGuildVerificationFormRule(e, !0, { channelId: n }),
                        }),
                    ],
                },
                "term-".concat(t),
            ),
        ),
    });
}
function C(e) {
    let { onChange: t, checked: n, disabled: l } = e;
    return (0, r.jsx)("div", {
        className: u.checkbox,
        children: (0, r.jsx)(o.Checkbox, {
            checked: !!n,
            onChange: t,
            disabled: l,
            label: c.intl.string(c.t["2EXfGJ"]),
        }),
    });
}
function m(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.Ih, {
        icon: o.snC,
        text: c.intl.string(c.t["2xbmoG"]),
        meetsRequirement: !!t.response,
    });
}
let b = (e) => {
    let { channelId: t, formField: n, onChange: l } = e;
    return (0, r.jsxs)(s.hK, {
        title: c.intl.string(c.t["Q8OFN+"]),
        children: [
            (0, r.jsx)(d, {
                className: u.disabledFieldBackground,
                terms: n.values,
                channelId: t,
            }),
            (0, r.jsx)(C, {
                onChange: l,
                checked: n.response,
            }),
        ],
    });
};
