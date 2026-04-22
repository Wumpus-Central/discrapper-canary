"use strict";
r.d(t, { LK: () => h, Ot: () => g });
var i = r(627968);
r(64700);
var a = r(503698),
    n = r.n(a),
    s = r(834730),
    l = r(150934);
if (21552 == r.j) var o = r(622629);
var c = r(46054),
    d = r(31457),
    _ = r(985018),
    u = r(397251);
function p(e) {
    let { terms: t, channelId: r, className: a } = e;
    return (0, i.jsx)("div", {
        className: n()(u.qE, a),
        children: t.map((e, t) =>
            (0, i.jsxs)(
                "div",
                {
                    className: u.gJ,
                    children: [
                        (0, i.jsx)(s.E, { variant: "text-md/normal", color: "text-muted", children: `${t + 1}.` }),
                        (0, i.jsx)(s.E, {
                            variant: "text-md/normal",
                            className: u.RQ,
                            children: c.A.parseGuildVerificationFormRule(e, !0, { channelId: r }),
                        }),
                    ],
                },
                `term-${t}`,
            ),
        ),
    });
}
function m(e) {
    let { onChange: t, checked: r, disabled: a } = e;
    return (0, i.jsx)("div", {
        className: u.kv,
        children: (0, i.jsx)(l.S, { checked: !!r, onChange: t, disabled: a, label: _.intl.string(_.t["2EXfGJ"]) }),
    });
}
function h(e) {
    let { formField: t } = e;
    return (0, i.jsx)(d.fu, { icon: o.B, text: _.intl.string(_.t["2xbmoG"]), meetsRequirement: !!t.response });
}
let g = (e) => {
    let { channelId: t, formField: r, onChange: a } = e;
    return (0, i.jsxs)(d.cS, {
        title: _.intl.string(_.t["Q8OFN+"]),
        children: [
            (0, i.jsx)(p, { className: u.n_, terms: r.values, channelId: t }),
            (0, i.jsx)(m, { onChange: a, checked: r.response }),
        ],
    });
};
