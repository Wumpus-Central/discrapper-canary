n.d(t, {
    EK: () => C,
    G0: () => m,
    QC: () => b,
    dd: () => p,
}),
    n(388685);
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    o = n(755721),
    a = n(481060),
    s = n(454585),
    c = n(489813),
    u = n(388032),
    d = n(624463);
function C(e) {
    let { terms: t, channelId: n, className: l } = e;
    return (0, r.jsx)("div", {
        className: i()(d.termsFieldBody, l),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                "div",
                {
                    className: d.termsRow,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "".concat(t + 1, "."),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: d.termsRowContent,
                            children: s.Z.parseGuildVerificationFormRule(e, !0, { channelId: n }),
                        }),
                    ],
                },
                "term-".concat(t),
            ),
        ),
    });
}
function m(e) {
    let { onChange: t, checked: n, disabled: l } = e;
    return (0, r.jsx)(o.VL, {
        checked: n,
        onChange: t,
        disabled: l,
        className: d.checkbox,
        label: u.intl.string(u.t["2EXfGB"]),
    });
}
function b(e) {
    let { formField: t } = e;
    return (0, r.jsx)(c.Ih, {
        icon: a.snC,
        text: u.intl.string(u.t["2xbmoK"]),
        meetsRequirement: !!t.response,
    });
}
let p = (e) => {
    let { channelId: t, formField: n, onChange: l } = e;
    return (0, r.jsxs)(c.hK, {
        title: u.intl.string(u.t.Q8OFNz),
        children: [
            (0, r.jsx)(C, {
                className: d.disabledFieldBackground,
                terms: n.values,
                channelId: t,
            }),
            (0, r.jsx)(m, {
                onChange: l,
                checked: n.response,
            }),
        ],
    });
};
