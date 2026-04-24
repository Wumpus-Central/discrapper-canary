i.d(e, { A: () => s });
var l = i(627968);
i(64700);
var n = i(503698),
    a = i.n(n),
    o = i(777666),
    r = i(993408),
    u = i(985018),
    d = i(616459);
let s = (t) => {
    let { category: e, daysRemainingText: i = u.t.Io7ozn, className: n } = t;
    if (!(0, r.HF)(e.unpublishedAt)) return null;
    let s = (0, r.WU)(e.unpublishedAt),
        c = s > 1 ? u.intl.formatToPlainString(i, { days: s }) : u.intl.string(u.t.Bc13HF);
    return (0, l.jsx)(o.Lp, { disableColor: !0, text: c, className: a()(d.q, n) });
};
