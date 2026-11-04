r.d(n, { n7: () => c, RV: () => O });
var e = r(574211),
    s = r(792996);
let i = [e.Z.DESKTOP, e.Z.MOBILE, e.Z.CONSOLE, e.Z.ROBLOX];
function O(t) {
    if (null == t || 0 === t.length) return [];
    let n = new Set(t);
    return i.filter((t) => n.has(t));
}
function c(t) {
    switch (t) {
        case e.Z.DESKTOP:
            return s.intl.string(s.t.KT6uCJ);
        case e.Z.MOBILE:
            return s.intl.string(s.t["0DvssQ"]);
        case e.Z.CONSOLE:
            return s.intl.string(s.t.RT9Ccb);
        case e.Z.ROBLOX:
            return s.intl.string(s.t.MPURhG);
    }
}
