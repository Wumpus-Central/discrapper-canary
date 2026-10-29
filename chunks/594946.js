function n(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
    return Math.min(Math.max(e, t), r);
}
function i(e, t) {
    let r = e,
        n = 0,
        i = t.toString(),
        o = i.toLowerCase().indexOf("e-");
    if (o > 0) n = Math.abs(Math.floor(Math.log10(Math.abs(t)))) + o;
    else {
        let e = i.indexOf(".");
        e >= 0 && (n = i.length - e);
    }
    if (n > 0) {
        let e = Math.pow(10, n);
        r = Math.round(r * e) / e;
    }
    return r;
}
function o(e, t, r, n) {
    ((t = Number(t)), (r = Number(r)));
    let o = (e - (isNaN(t) ? 0 : t)) % n,
        a = i(2 * Math.abs(o) >= n ? e + Math.sign(o) * (n - Math.abs(o)) : e - o, n);
    return (
        isNaN(t)
            ? !isNaN(r) && a > r && (a = Math.floor(i(r / n, n)) * n)
            : a < t
              ? (a = t)
              : !isNaN(r) && a > r && (a = t + Math.floor(i((r - t) / n, n)) * n),
        (a = i(a, n))
    );
}
r.d(t, { BU: () => o, qE: () => n });
