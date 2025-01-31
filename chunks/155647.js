n.d(t, {
    fW: () => c,
    jc: () => f
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(823379),
    a = n(568315),
    s = n(83126),
    o = n(617191),
    l = n(82554);
let u = {
    [l.zR.SAFETY_DM_SPAM_FILTER]: a.Z,
    [l.zR.SAFETY_SENSITIVE_MEDIA_FILTERS]: o.Z,
    [l.zR.SAFETY_LANGUAGE_FILTER]: s.Z
};
function c(e) {
    return i.useMemo(() => (null != e ? d(e) : null), [e]);
}
function d(e) {
    let t = [];
    return (
        Object.entries(u).forEach((n) => {
            let [i, r] = n;
            (null == r.eligibleReportSubtypes || r.eligibleReportSubtypes.includes(e)) && t.push(i);
        }),
        0 === t.length ? null : t
    );
}
function f(e, t) {
    return i.useMemo(() => e.map((e) => _(e, t)).filter(r.lm), [e, t]);
}
function _(e, t) {
    let n = u[e];
    return p(n, t) ? n : null;
}
function p(e, t) {
    let { predicate: n, eligibleChannelTypes: i } = e,
        r = null == n || (null == n ? void 0 : n()) === !0,
        a = null == t || null == i || i.includes(t);
    return r && a;
}
