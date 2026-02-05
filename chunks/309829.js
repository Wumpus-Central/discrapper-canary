"use strict";
n.d(t, { K: () => c });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(17372),
    l = n(843376),
    a = n(985018),
    o = n(101865);
let c = (e) => {
    let { showBackButton: t, onBack: n, renderFooter: c, onReopen: d } = e,
        u = (0, l.i)(r.tY.MEDIA_TAKEDOWN, d),
        h = (0, i.jsxs)(s.ButtonGroup, {
            fullWidth: !0,
            children: [
                t &&
                    null != n &&
                    (0, i.jsx)(s.Button, { variant: "secondary", text: a.intl.string(a.t["13/7kX"]), onClick: n }),
                (0, i.jsx)(s.Button, { text: a.intl.string(a.t.D5Czbu), variant: "primary", onClick: u }),
            ],
        });
    return (0, i.jsxs)(s.BJc, {
        gap: 8,
        children: [
            (0, i.jsx)(s.Heading, { variant: "heading-xl/semibold", children: a.intl.string(a.t.jMSjZL) }),
            (0, i.jsx)(s.Text, { variant: "text-md/normal", className: o.D, children: a.intl.format(a.t.SenKQA, {}) }),
            c?.(h),
        ],
    });
};
