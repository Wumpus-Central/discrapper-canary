n.d(t, { A: () => c }), n(896048);
var r = n(762230),
    i = n(807348),
    a = n(320501),
    s = n(980504);
function o(e, t) {
    let n;
    for (let i of e) {
        var r;
        let e = l(null == (r = i.message) ? void 0 : r.soundboardSounds, t);
        if (null != e) {
            n = e;
            break;
        }
    }
    return n;
}
function l(e, t) {
    return null == e ? void 0 : e.find((e) => String(e.sound_id) === String(t));
}
function c(e, t, n, c) {
    var u, d, f, p;
    let _ = l(c, n);
    if (null != _) return (0, i.N0)(_, null != (p = _.guild_id) ? p : s.mV);
    let h = a.A.getMessage(e, t);
    if (
        null != h &&
        null !=
            (_ =
                (null == h || null == (f = h.messageReference) ? void 0 : f.type) === r.S.FORWARD
                    ? o(null != (u = null == h ? void 0 : h.messageSnapshots) ? u : [], n)
                    : l(null == h ? void 0 : h.soundboardSounds, n))
    )
        return (0, i.N0)(_, null != (d = _.guild_id) ? d : s.mV);
}
