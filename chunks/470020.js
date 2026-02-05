"use strict";
n.d(t, { A: () => l });
var r = n(762230),
    i = n(807348),
    a = n(320501);
function s(e, t) {
    let n;
    for (let r of e) {
        let e = o(r.message?.soundboardSounds, t);
        if (null != e) {
            n = e;
            break;
        }
    }
    return n;
}
function o(e, t) {
    return e?.find((e) => String(e.sound_id) === String(t));
}
function l(e, t, n, l) {
    let u = o(l, n);
    if (null != u) return (0, i.N0)(u, u.guild_id ?? "0");
    let c = a.A.getMessage(e, t);
    if (
        null != c &&
        null !=
            (u =
                c?.messageReference?.type === r.S.FORWARD ? s(c?.messageSnapshots ?? [], n) : o(c?.soundboardSounds, n))
    )
        return (0, i.N0)(u, u.guild_id ?? "0");
}
n(980504);
