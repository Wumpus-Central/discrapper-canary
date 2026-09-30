e.d(n, { RV: () => c, n7: () => u });
var r = e(574211),
    s = e(375708);
let i = [r.Z.DESKTOP, r.Z.MOBILE, r.Z.CONSOLE];
function c(t) {
    if (null == t || 0 === t.length) return [];
    let n = new Set(t);
    return i.filter((t) => n.has(t));
}
function u(t) {
    switch (t) {
        case r.Z.DESKTOP:
            return s.intl.string(s.t.KT6uCJ);
        case r.Z.MOBILE:
            return s.intl.string(s.t["0DvssQ"]);
        case r.Z.CONSOLE:
            return s.intl.string(s.t.RT9Ccb);
    }
}
