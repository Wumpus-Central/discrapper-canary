"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(234419),
    a = n(356309),
    s = n(788868),
    o = n(985018),
    l = n(224471);
let u = (e) => {
    let { discountAmount: t } = e,
        n = (0, i.V)(),
        u = null != n && n.trial_id === s.Dw,
        c = o.intl.string(o.t.IBYG5U);
    return (
        void 0 !== t
            ? (c = o.intl.formatToPlainString(o.t.iiLbvu, { percent: t }))
            : u && (c = o.intl.string(o.t.gtNqJQ)),
        (0, r.jsx)("div", { className: l.f, children: (0, r.jsx)(a.D, { text: c }) })
    );
};
