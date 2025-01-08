function a(e) {
    return 'string' === n(e);
}
function n(e) {
    return (Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] || '').toLowerCase();
}
function o(e, { precision: t, unit: r }) {
    return s(e)
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
function s(e) {
    return Number.isNaN(e) || (e instanceof Number && e?.none);
}
function i(e) {
    return s(e) ? 0 : e;
}
r.d(t, {
    $7: function () {
        return m;
    },
    HD: function () {
        return a;
    },
    KK: function () {
        return b;
    },
    Nw: function () {
        return y;
    },
    T7: function () {
        return h;
    },
    Wi: function () {
        return s;
    },
    Z$: function () {
        return l;
    },
    dL: function () {
        return u;
    },
    dt: function () {
        return n;
    },
    g6: function () {
        return p;
    },
    rY: function () {
        return g;
    },
    sI: function () {
        return i;
    },
    sX: function () {
        return f;
    },
    uZ: function () {
        return d;
    },
    zL: function () {
        return o;
    }
});
let c = {
    deg: 1,
    grad: 0.9,
    rad: 180 / Math.PI,
    turn: 360
};
function u(e) {
    if (!e) return;
    e = e.trim();
    let t = /^-?[\d.]+$/,
        r = /%|deg|g?rad|turn$/,
        a = e.match(/^([a-z]+)\((.+?)\)$/i);
    if (a) {
        let e = [];
        return (
            a[2].replace(/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g, (a, n) => {
                let o = n.match(r),
                    s = n;
                if (o) {
                    let e = o[0],
                        t = s.slice(0, -e.length);
                    '%' === e ? ((s = new Number(t / 100)).type = '<percentage>') : (((s = new Number(t * c[e])).type = '<angle>'), (s.unit = e));
                } else t.test(s) ? ((s = new Number(s)).type = '<number>') : 'none' === s && ((s = new Number(NaN)).none = !0);
                a.startsWith('/') && ((s = s instanceof Number ? s : new Number(s)).alpha = !0), 'object' == typeof s && s instanceof Number && (s.raw = n), e.push(s);
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
function l(e) {
    return e[e.length - 1];
}
function f(e, t, r) {
    return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
}
function b(e, t, r) {
    var a, n;
    return f(t[0], t[1], ((a = e[0]), (n = e[1]), (r - a) / (n - a)));
}
function h(e) {
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
function d(e, t, r) {
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
