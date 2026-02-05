"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(990078),
    l = n(397927),
    r = n(600955),
    a = n(818348),
    o = n(985018),
    d = n(690450);
function c(e) {
    let { title: t, details: n } = e;
    return (0, i.jsxs)("div", {
        className: d.ph,
        children: [
            (0, i.jsxs)("div", {
                className: d.Ly,
                children: [
                    (0, i.jsx)(l.Heading, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    "string" == typeof n
                        ? (0, i.jsx)(l.Text, { variant: "text-sm/medium", color: "text-default", children: n })
                        : n,
                ],
            }),
            (0, i.jsx)(s.m, {
                text: o.intl.string(o.t.NQ4nCp),
                children: (0, i.jsx)(r.A, { checked: !0, disabled: !0, onChange: a.tE, className: d.R0 }),
            }),
        ],
    });
}
