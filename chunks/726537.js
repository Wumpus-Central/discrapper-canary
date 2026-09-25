function i(l) {
    if (l.length < 2) return null;
    let t = 0;
    for (let d of l) d && t++;
    let d = l.length - t;
    return 0 === t || 0 === d || t === d ? null : t > d ? "mark-optional" : "mark-required";
}
function e(l, t) {
    return l ? ("mark-optional" === l ? (t ? null : "optional") : t ? "required" : null) : null;
}
d.d(t, { n: () => i, t: () => e });
