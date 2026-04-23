r.d(t, { LK: () => E, Ot: () => f });
var n = r(627968);
r(64700);
var i = r(503698),
    l = r.n(i),
    a = r(834730),
    s = r(150934);
if (21552 == r.j) var o = r(622629);
var d = r(46054),
    c = r(31457),
    u = r(985018),
    _ = r(397251);
function m(e) {
    let { terms: t, channelId: r, className: i } = e;
    return (0, n.jsx)("div", {
        className: l()(_.qE, i),
        children: t.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: _.gJ,
                    children: [
                        (0, n.jsx)(a.E, { variant: "text-md/normal", color: "text-muted", children: `${t + 1}.` }),
                        (0, n.jsx)(a.E, {
                            variant: "text-md/normal",
                            className: _.RQ,
                            children: d.A.parseGuildVerificationFormRule(e, !0, { channelId: r }),
                        }),
                    ],
                },
                `term-${t}`,
            ),
        ),
    });
}
function h(e) {
    let { onChange: t, checked: r, disabled: i } = e;
    return (0, n.jsx)("div", {
        className: _.kv,
        children: (0, n.jsx)(s.S, { checked: !!r, onChange: t, disabled: i, label: u.intl.string(u.t["2EXfGJ"]) }),
    });
}
function E(e) {
    let { formField: t } = e;
    return (0, n.jsx)(c.fu, { icon: o.B, text: u.intl.string(u.t["2xbmoG"]), meetsRequirement: !!t.response });
}
let f = (e) => {
    let { channelId: t, formField: r, onChange: i } = e;
    return (0, n.jsxs)(c.cS, {
        title: u.intl.string(u.t["Q8OFN+"]),
        children: [
            (0, n.jsx)(m, { className: _.n_, terms: r.values, channelId: t }),
            (0, n.jsx)(h, { onChange: i, checked: r.response }),
        ],
    });
};
