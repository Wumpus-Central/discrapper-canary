n.d(t, {
    A: () => s,
});
var r = n(927813),
    i = n(661191);
let a = 2 * r.A.Millis.HOUR;

function s(e, t, n) {
    var r;
    if (null == e) return !1;
    let s = null != t.activity ? t.activity.party_id : null,
        o = null != s && (null == (r = e.party) ? void 0 : r.id) !== s,
        l = i.default.extractTimestamp(t.id) + a < Date.now(),
        c = null != e.application_id && e.application_id !== n;
    return !o && !l && !c;
}
