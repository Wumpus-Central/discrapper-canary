n.d(t, { Rg: () => a, Yn: () => o, a8: () => u });
var l = n(392054),
    r = n(213404),
    i = n(834968),
    s = n(73510);
function a(e) {
    return e.type === l.Hf.BUILT_IN ? i.A : r.A;
}
function u(e) {
    return `${e / 16}rem`;
}
function o(e, t) {
    let n = t,
        l = !1,
        r = t.indexOf(":");
    if (r >= 0) {
        let e = t.lastIndexOf(" ", r);
        e >= 0 ? ((t = t.substring(0, e)), (l = !0)) : (t = t.substring(0, r));
    } else t = t.substring(0, t.length);
    let i = t.split(" ", s.uA + 1);
    return (
        i.length > s.uA && ((l = !0), i.pop()),
        (t = i.join(" ")),
        (n.length > t.length || t.endsWith(" ")) && ((l = !0), (t = t.trimEnd())),
        { text: t, parts: i, hasSpaceTerminator: l }
    );
}
