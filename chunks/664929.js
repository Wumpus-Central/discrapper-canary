"use strict";
n.d(t, { Rg: () => o, Yn: () => u, a8: () => l });
var r = n(392054),
    i = n(991023),
    s = n(834968),
    a = n(73510);
let o = (e) => (e.type === r.Hf.BUILT_IN ? s.A : i.A);
function l(e) {
    return `${e / 16}rem`;
}
function u(e, t) {
    let n = t,
        r = !1,
        i = t.indexOf(":");
    if (i >= 0) {
        let e = t.lastIndexOf(" ", i);
        e >= 0 ? ((t = t.substring(0, e)), (r = !0)) : (t = t.substring(0, i));
    } else t = t.substring(0, t.length);
    let s = t.split(" ", a.uA + 1);
    return (
        s.length > a.uA && ((r = !0), s.pop()),
        (t = s.join(" ")),
        (n.length > t.length || t.endsWith(" ")) && ((r = !0), (t = t.trimEnd())),
        { text: t, parts: s, hasSpaceTerminator: r }
    );
}
