n.d(t, { It: () => o, U4: () => c, VS: () => d });
var i = n(991690),
    r = n(735991),
    a = n(20015),
    s = n(878014),
    l = n(652215);
function o(e) {
    let t = new Set();
    if (null == e || !(0, r.$B)(e)) return t;
    if (
        ((0, s.W)(e, i.U.MAIN) && (0, a.n)(e, l.gfo.CONTEXTLESS_ACTIVITY) && t.add(i.U.MAIN),
        "conjureProjectId" in e && null != e.conjureProjectId)
    )
        for (let n of [i.U.APP_CHANNEL, i.U.VOICE_CHANNEL]) (0, s.W)(e, n) && t.add(n);
    return t;
}
function d(e) {
    return o(e).size > 0;
}
function c(e) {
    let t = o(e);
    return t.has(i.U.MAIN) || t.has(i.U.APP_CHANNEL);
}
