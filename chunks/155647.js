r.d(n, {
    fW: function () {
        return p;
    },
    jc: function () {
        return _;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(192379),
    s = r(823379),
    l = r(568315),
    u = r(83126),
    c = r(617191),
    d = r(82554);
let f = {
    [d.zR.SAFETY_DM_SPAM_FILTER]: l.Z,
    [d.zR.SAFETY_SENSITIVE_MEDIA_FILTERS]: c.Z,
    [d.zR.SAFETY_LANGUAGE_FILTER]: u.Z
};
function p(e) {
    return o.useMemo(() => (null != e ? h(e) : null), [e]);
}
function h(e) {
    let n = [];
    return (
        Object.entries(f).forEach((r) => {
            let [i, a] = r;
            (null == a.eligibleReportSubtypes || a.eligibleReportSubtypes.includes(e)) && n.push(i);
        }),
        0 === n.length ? null : n
    );
}
function _(e, n) {
    return o.useMemo(() => e.map((e) => m(e, n)).filter(s.lm), [e, n]);
}
function m(e, n) {
    let r = f[e];
    return g(r, n) ? r : null;
}
function g(e, n) {
    let { predicate: r, eligibleChannelTypes: i } = e,
        a = null == r || (null == r ? void 0 : r()) === !0,
        o = null == n || null == i || i.includes(n);
    return a && o;
}
