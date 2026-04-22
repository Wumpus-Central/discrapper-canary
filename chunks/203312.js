"use strict";
s.d(t, { A: () => d });
var n = s(627968);
s(64700);
var l = s(503698),
    r = s.n(l),
    a = s(777666),
    i = s(993408),
    o = s(985018),
    c = s(616459);
let d = (e) => {
    let { category: t, daysRemainingText: s = o.t.Io7ozn, className: l } = e;
    if (!(0, i.HF)(t.unpublishedAt)) return null;
    let d = (0, i.WU)(t.unpublishedAt),
        u = d > 1 ? o.intl.formatToPlainString(s, { days: d }) : o.intl.string(o.t.Bc13HF);
    return (0, n.jsx)(a.Lp, { disableColor: !0, text: u, className: r()(c.q, l) });
};
