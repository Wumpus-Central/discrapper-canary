var r = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    t = n(834730),
    c = n(150934);
if (221552 == n.j) var o = n(622629);
var i = n(46054),
    d = n(31457),
    u = n(792996),
    m = n(762062);
function h(e) {
    let { terms: s, channelId: n, className: l } = e;
    return (0, r.jsx)("div", {
        className: a()(m.qE, l),
        children: s.map((e, s) =>
            (0, r.jsxs)(
                "div",
                {
                    className: m.gJ,
                    children: [
                        (0, r.jsx)(t.E, { variant: "body-md/normal", color: "text-muted", children: `${s + 1}.` }),
                        (0, r.jsx)(t.E, {
                            variant: "body-md/normal",
                            className: m.RQ,
                            children: i.A.parseGuildVerificationFormRule(e, !0, { channelId: n }),
                        }),
                    ],
                },
                `term-${s}`,
            ),
        ),
    });
}
function x(e) {
    let { onChange: s, checked: n, disabled: l } = e;
    return (0, r.jsx)("div", {
        className: m.kv,
        children: (0, r.jsx)(c.S, { checked: !!n, onChange: s, disabled: l, label: u.intl.string(u.t["2EXfGJ"]) }),
    });
}
n.d(
    s,
    {},
    {
        LK: function (e) {
            let { formField: s } = e;
            return (0, r.jsx)(d.fu, {
                icon: o.BookCheckIcon,
                text: u.intl.string(u.t["2xbmoG"]),
                meetsRequirement: !!s.response,
            });
        },
        Ot: function (e) {
            let { channelId: s, formField: n, onChange: l } = e;
            return (0, r.jsxs)(d.cS, {
                title: u.intl.string(u.t["Q8OFN+"]),
                children: [
                    (0, r.jsx)(h, { className: m.n_, terms: n.values, channelId: s }),
                    (0, r.jsx)(x, { onChange: l, checked: n.response }),
                ],
            });
        },
    },
);
