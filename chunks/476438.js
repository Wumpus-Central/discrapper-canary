l.d(t, { BM: () => p, ur: () => s });
var u = l(64700),
    i = l(989349),
    r = l.n(i),
    a = l(17928),
    e = l(832163),
    o = l(375708);
function d(n) {
    if (null == n) return null;
    let t = r()(n).diff(r()(), "days");
    return t <= 0 ? null : t;
}
function s(n) {
    let t = d(n);
    return null == t ? null : o.intl.formatToPlainString(o.t.BXpdIg, { days: Math.max(t, 1) });
}
function p() {
    let n,
        t = ((n = (0, a.bG)([e.A], () => e.A.getConfig()?.promotionEndDatetime, [])), u.useMemo(() => d(n), [n]));
    return u.useMemo(() => (null == t ? null : o.intl.formatToPlainString(o.t.BXpdIg, { days: Math.max(t, 1) })), [t]);
}
