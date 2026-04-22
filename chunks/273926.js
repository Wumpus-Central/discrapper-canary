n.d(t, { LK: () => h, Ot: () => m });
var r = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    l = n(397927),
    a = n(46054),
    o = n(31457),
    d = n(985018),
    c = n(397251);
function u(e) {
    let { terms: t, channelId: n, className: s } = e;
    return (0, r.jsx)("div", {
        className: i()(c.qE, s),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                "div",
                {
                    className: c.gJ,
                    children: [
                        (0, r.jsx)(l.Text, { variant: "text-md/normal", color: "text-muted", children: `${t + 1}.` }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: c.RQ,
                            children: a.A.parseGuildVerificationFormRule(e, !0, { channelId: n }),
                        }),
                    ],
                },
                `term-${t}`,
            ),
        ),
    });
}
function _(e) {
    let { onChange: t, checked: n, disabled: s } = e;
    return (0, r.jsx)("div", {
        className: c.kv,
        children: (0, r.jsx)(l.Checkbox, {
            checked: !!n,
            onChange: t,
            disabled: s,
            label: d.intl.string(d.t["2EXfGJ"]),
        }),
    });
}
function h(e) {
    let { formField: t } = e;
    return (0, r.jsx)(o.fu, { icon: l.B8Q, text: d.intl.string(d.t["2xbmoG"]), meetsRequirement: !!t.response });
}
let m = (e) => {
    let { channelId: t, formField: n, onChange: s } = e;
    return (0, r.jsxs)(o.cS, {
        title: d.intl.string(d.t["Q8OFN+"]),
        children: [
            (0, r.jsx)(u, { className: c.n_, terms: n.values, channelId: t }),
            (0, r.jsx)(_, { onChange: s, checked: n.response }),
        ],
    });
};
