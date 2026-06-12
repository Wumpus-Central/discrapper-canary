n.d(t, { A: () => r });
var i = n(927813),
    l = n(935208);
let s = 2 * i.A.Millis.HOUR;
function r(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        r = null != i && e.party?.id !== i,
        a = l.default.extractTimestamp(t.id) + s < Date.now(),
        o = null != e.application_id && e.application_id !== n;
    return !r && !a && !o;
}
