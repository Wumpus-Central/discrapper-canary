l.d(t, { IJ: () => c, LK: () => m, Ot: () => x, xs: () => u });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(397927),
    r = l(46054),
    o = l(31457),
    C = l(985018),
    d = l(712104);
function c(e) {
    let { terms: t, channelId: l, className: i } = e;
    return (0, n.jsx)("div", {
        className: s()(d.qE, i),
        children: t.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: d.gJ,
                    children: [
                        (0, n.jsx)(a.Text, { variant: "text-md/normal", color: "text-muted", children: `${t + 1}.` }),
                        (0, n.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: d.RQ,
                            children: r.A.parseGuildVerificationFormRule(e, !0, { channelId: l }),
                        }),
                    ],
                },
                `term-${t}`,
            ),
        ),
    });
}
function u(e) {
    let { onChange: t, checked: l, disabled: i } = e;
    return (0, n.jsx)("div", {
        className: d.kv,
        children: (0, n.jsx)(a.Checkbox, {
            checked: !!l,
            onChange: t,
            disabled: i,
            label: C.intl.string(C.t["2EXfGJ"]),
        }),
    });
}
function m(e) {
    let { formField: t } = e;
    return (0, n.jsx)(o.fu, { icon: a.B8Q, text: C.intl.string(C.t["2xbmoG"]), meetsRequirement: !!t.response });
}
let x = (e) => {
    let { channelId: t, formField: l, onChange: i } = e;
    return (0, n.jsxs)(o.cS, {
        title: C.intl.string(C.t["Q8OFN+"]),
        children: [
            (0, n.jsx)(c, { className: d.n_, terms: l.values, channelId: t }),
            (0, n.jsx)(u, { onChange: i, checked: l.response }),
        ],
    });
};
