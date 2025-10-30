n.d(t, {
    r: () => a,
    y: () => i,
});
var r = n(89199);
function i(e) {
    return e < 100 && (e > 50 ? (e += 1900) : (e += 2000)), e;
}
function a(e, t, n) {
    let i = new Date(e);
    i.setMonth(n - 1), i.setDate(t);
    let a = (0, r.WK)(i, { year: 1 }),
        o = (0, r.WK)(i, { year: -1 });
    return (
        Math.abs(a.getTime() - e.getTime()) < Math.abs(i.getTime() - e.getTime())
            ? (i = a)
            : Math.abs(o.getTime() - e.getTime()) < Math.abs(i.getTime() - e.getTime()) && (i = o),
        i.getFullYear()
    );
}
