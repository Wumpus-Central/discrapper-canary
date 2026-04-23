n.d(t, { A: () => s });
var i = n(927813),
    l = n(661191);
let a = 2 * i.A.Millis.HOUR;
function s(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        s = null != i && e.party?.id !== i,
        r = l.default.extractTimestamp(t.id) + a < Date.now(),
        o = null != e.application_id && e.application_id !== n;
    return !s && !r && !o;
}
