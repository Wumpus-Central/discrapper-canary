function n(e, t) {
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
r.d(
    t,
    {},
    {
        BU: function (e, t, r, i) {
            ((t = Number(t)), (r = Number(r)));
            let o = (e - (isNaN(t) ? 0 : t)) % i,
                a = n(2 * Math.abs(o) >= i ? e + Math.sign(o) * (i - Math.abs(o)) : e - o, i);
            return (
                isNaN(t)
                    ? !isNaN(r) && a > r && (a = Math.floor(n(r / i, i)) * i)
                    : a < t
                      ? (a = t)
                      : !isNaN(r) && a > r && (a = t + Math.floor(n((r - t) / i, i)) * i),
                (a = n(a, i))
            );
        },
        qE: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
            return Math.min(Math.max(e, t), r);
        },
    },
);
