n.d(t, { RV: () => r, n7: () => s });
var l = n(574211),
    i = n(375708);
let a = [l.Z.DESKTOP, l.Z.MOBILE, l.Z.CONSOLE];
function r(e) {
    if (null == e || 0 === e.length) return [];
    let t = new Set(e);
    return a.filter((e) => t.has(e));
}
function s(e) {
    switch (e) {
        case l.Z.DESKTOP:
            return i.intl.string(i.t.KT6uCJ);
        case l.Z.MOBILE:
            return i.intl.string(i.t["0DvssQ"]);
        case l.Z.CONSOLE:
            return i.intl.string(i.t.RT9Ccb);
    }
}
