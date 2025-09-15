n.d(t, { L: () => s });
var r = n(620662),
    i = n(841784),
    a = n(171516),
    o = n(981631);
function s(e, t) {
    var n;
    let s = null != (n = null == t ? void 0 : t.applicationId) ? n : null == e ? void 0 : e.application_id,
        l = null != t || (0, i.Z)(e),
        c = (0, a.h)(s),
        u = !!c,
        d = (0, r.Z)(e, o.xjy.JOIN) || l;
    return (
        !((null == e || e.application_id === c) && l && null == t && (null == e || !(0, r.Z)(e, o.xjy.CONTEXTLESS))) &&
        null != s &&
        d &&
        u
    );
}
