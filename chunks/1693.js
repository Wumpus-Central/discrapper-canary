n.d(t, {
    $G: () => i,
    JM: () => a,
    U0: () => _,
    nK: () => o,
});
var r = n(661822);
function i(e, t = 0) {
    return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function a(e, t) {
    let n = e,
        r = n.length;
    if (r <= 150) return n;
    t > r && (t = r);
    let i = Math.max(t - 60, 0);
    i < 5 && (i = 0);
    let a = Math.min(i + 140, r);
    return (
        a > r - 5 && (a = r),
        a === r && (i = Math.max(a - 140, 0)),
        (n = n.slice(i, a)),
        i > 0 && (n = `'{snip} ${n}`),
        a < r && (n += " {snip}"),
        n
    );
}
function o(e, t) {
    if (!Array.isArray(e)) return "";
    let n = [];
    for (let t = 0; t < e.length; t++) {
        let i = e[t];
        try {
            (0, r.y1)(i) ? n.push("[VueViewModel]") : n.push(String(i));
        } catch (e) {
            n.push("[value cannot be serialized]");
        }
    }
    return n.join(t);
}
function _(e, t = [], n = !1) {
    return t.some((t) =>
        (function (e, t, n = !1) {
            return !!(0, r.HD)(e) && ((0, r.Kj)(t) ? t.test(e) : !!(0, r.HD)(t) && (n ? e === t : e.includes(t)));
        })(e, t, n),
    );
}
