e.d(t, { A: () => h });
var i = e(627968);
e(64700);
var l = e(503698),
    d = e.n(l),
    r = e(812993),
    n = e(993408),
    s = e(375708),
    o = e(616459);
let h = (a) => {
    let { category: t, daysRemainingText: e = s.t.Io7ozn, className: l } = a;
    if (!(0, n.HF)(t.unpublishedAt)) return null;
    let h = (0, n.WU)(t.unpublishedAt),
        c = h > 1 ? s.intl.formatToPlainString(e, { days: h }) : s.intl.string(s.t.Bc13HF);
    return (0, i.jsx)(r.Lp, { disableColor: !0, text: c, className: d()(o.q, l) });
};
