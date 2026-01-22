n.d(t, {
    Rg: () => o,
    Yn: () => c,
    a8: () => l,
}),
    n(747238),
    n(183875);
var r = n(392054),
    i = n(991023),
    a = n(834968),
    s = n(73510);
let o = (e) => (e.type === r.Hf.BUILT_IN ? a.A : i.A);

function l(e) {
    return "".concat(e / 16, "rem");
}

function c(e, t) {
    let n = t,
        r = !1,
        i = t.indexOf(":");
    if (i >= 0) {
        let e = t.lastIndexOf(" ", i);
        e >= 0 ? ((t = t.substring(0, e)), (r = !0)) : (t = t.substring(0, i));
    } else t = t.substring(0, t.length);
    let a = t.split(" ", s.uA + 1);
    return (
        a.length > s.uA && ((r = !0), a.pop()),
        (t = a.join(" ")),
        (n.length > t.length || t.endsWith(" ")) && ((r = !0), (t = t.trimEnd())),
        {
            text: t,
            parts: a,
            hasSpaceTerminator: r,
        }
    );
}
