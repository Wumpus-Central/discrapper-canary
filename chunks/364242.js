r.d(t, { D: () => s, Y: () => a });
var n = r(632434);
function s(e) {
    return e < 100 && (e > 50 ? (e += 1900) : (e += 2e3)), e;
}
function a(e, t, r) {
    let s = new Date(e);
    s.setMonth(r - 1), s.setDate(t);
    let a = (0, n.Gw)(s, { year: 1 }),
        i = (0, n.Gw)(s, { year: -1 });
    return (
        Math.abs(a.getTime() - e.getTime()) < Math.abs(s.getTime() - e.getTime())
            ? (s = a)
            : Math.abs(i.getTime() - e.getTime()) < Math.abs(s.getTime() - e.getTime()) && (s = i),
        s.getFullYear()
    );
}
