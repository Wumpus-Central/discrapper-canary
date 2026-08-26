n.d(t, { Rg: () => s, Yn: () => u, a8: () => o });
var l = n(392054),
    i = n(213404),
    r = n(834968),
    a = n(73510);
function s(e) {
    return e.type === l.Hf.BUILT_IN ? r.A : i.A;
}
function o(e) {
    return `${e / 16}rem`;
}
function u(e, t) {
    let n = t,
        l = !1,
        i = t.indexOf(":");
    if (i >= 0) {
        let e = t.lastIndexOf(" ", i);
        e >= 0 ? ((t = t.substring(0, e)), (l = !0)) : (t = t.substring(0, i));
    } else t = t.substring(0, t.length);
    let r = t.split(" ", a.uA + 1);
    return (
        r.length > a.uA && ((l = !0), r.pop()),
        (t = r.join(" ")),
        (n.length > t.length || t.endsWith(" ")) && ((l = !0), (t = t.trimEnd())),
        { text: t, parts: r, hasSpaceTerminator: l }
    );
}
