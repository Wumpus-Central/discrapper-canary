function a(e) {
    return 'string' === n(e);
}
function n(e) {
    return (Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] || '').toLowerCase();
}
function s(e, { precision: t, unit: r }) {
    return o(e)
        ? 'none'
        : (function (e, t) {
              if (0 === e) return 0;
              let r = ~~e,
                  a = 0;
              r && t && (a = ~~Math.log10(Math.abs(r)) + 1);
              let n = 10 ** (t - a);
              return Math.floor(e * n + 0.5) / n;
          })(e, t) + (r ?? '');
}
function o(e) {
    return Number.isNaN(e) || (e instanceof Number && e?.none);
}
function i(e) {
    return o(e) ? 0 : e;
}
r.d(t, {
    $7: () => m,
    HD: () => a,
    KK: () => b,
    Nw: () => y,
    T7: () => d,
    Wi: () => o,
    Z$: () => u,
    dL: () => l,
    dt: () => n,
    g6: () => p,
    rY: () => g,
    sI: () => i,
    sX: () => f,
    uZ: () => h,
    zL: () => s
});
let c = {
    deg: 1,
    grad: 0.9,
    rad: 180 / Math.PI,
    turn: 360
};
function l(e) {
    if (!e) return;
    e = e.trim();
    let t = /^-?[\d.]+$/,
        r = /%|deg|g?rad|turn$/,
        a = e.match(/^([a-z]+)\((.+?)\)$/i);
    if (a) {
        let e = [];
        return (
            a[2].replace(/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g, (a, n) => {
                let s = n.match(r),
                    o = n;
                if (s) {
                    let e = s[0],
                        t = o.slice(0, -e.length);
                    '%' === e ? ((o = new Number(t / 100)).type = '<percentage>') : (((o = new Number(t * c[e])).type = '<angle>'), (o.unit = e));
                } else t.test(o) ? ((o = new Number(o)).type = '<number>') : 'none' === o && ((o = new Number(NaN)).none = !0);
                a.startsWith('/') && ((o = o instanceof Number ? o : new Number(o)).alpha = !0), 'object' == typeof o && o instanceof Number && (o.raw = n), e.push(o);
            }),
            {
                name: a[1].toLowerCase(),
                rawName: a[1],
                rawArgs: a[2],
                args: e
            }
        );
    }
}
function u(e) {
    return e[e.length - 1];
}
function f(e, t, r) {
    return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
}
function b(e, t, r) {
    var a;
    return f(t[0], t[1], ((a = e[0]), (r - a) / (e[1] - a)));
}
function d(e) {
    return e.map((e) =>
        e.split('|').map((e) => {
            let t = (e = e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
            if (t) {
                let e = new String(t[1]);
                return (e.range = [+t[2], +t[3]]), e;
            }
            return e;
        })
    );
}
function h(e, t, r) {
    return Math.max(Math.min(r, t), e);
}
function p(e, t) {
    return Math.sign(e) === Math.sign(t) ? e : -e;
}
function m(e, t) {
    return p(Math.abs(e) ** t, e);
}
function g(e, t) {
    return 0 === t ? 0 : e / t;
}
function y(e, t, r = 0, a = e.length) {
    for (; r < a; ) {
        let n = (r + a) >> 1;
        e[n] < t ? (r = n + 1) : (a = n);
    }
    return r;
}
