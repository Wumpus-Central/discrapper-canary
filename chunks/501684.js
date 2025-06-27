let r, _, n, o, i;
a.d(e, {
    $A: () => p,
    PR: () => T,
    YF: () => O,
    _4: () => h,
    _j: () => P,
    cN: () => G,
    to: () => L
});
var c = a(622916),
    s = a(688838),
    E = a(665909),
    l = a(795927),
    u = a(661129),
    I = a(231550),
    R = a(428983),
    d = a(622574),
    N = a(288570);
let f = {},
    A = {};
function T(t, e = !1) {
    return S('cls', t, D, r, e);
}
function p(t, e = !1) {
    return S('lcp', t, v, n, e);
}
function L(t) {
    return S('fid', t, C, _);
}
function h(t) {
    return S('ttfb', t, m, o);
}
function O(t) {
    return S('inp', t, y, i);
}
function P(t, e) {
    return (
        U(t, e),
        A[t] ||
            ((function (t) {
                let e = {};
                'event' === t && (e.durationThreshold = 0),
                    (0, d.N)(
                        t,
                        (e) => {
                            g(t, { entries: e });
                        },
                        e
                    );
            })(t),
            (A[t] = !0)),
        b(t, e)
    );
}
function g(t, e) {
    let a = f[t];
    if (a && a.length)
        for (let r of a)
            try {
                r(e);
            } catch (e) {
                E.X &&
                    c.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, s.$P)(r)}
Error:`,
                        e
                    );
            }
}
function D() {
    return (0, l.m)(
        (t) => {
            g('cls', { metric: t }), (r = t);
        },
        { reportAllChanges: !0 }
    );
}
function C() {
    return (0, u.F)((t) => {
        g('fid', { metric: t }), (_ = t);
    });
}
function v() {
    return (0, R.N)(
        (t) => {
            g('lcp', { metric: t }), (n = t);
        },
        { reportAllChanges: !0 }
    );
}
function m() {
    return (0, N.m)((t) => {
        g('ttfb', { metric: t }), (o = t);
    });
}
function y() {
    return (0, I.Y)((t) => {
        g('inp', { metric: t }), (i = t);
    });
}
function S(t, e, a, r, _ = !1) {
    let n;
    return U(t, e), A[t] || ((n = a()), (A[t] = !0)), r && e({ metric: r }), b(t, e, _ ? n : void 0);
}
function U(t, e) {
    (f[t] = f[t] || []), f[t].push(e);
}
function b(t, e, a) {
    return () => {
        a && a();
        let r = f[t];
        if (!r) return;
        let _ = r.indexOf(e);
        -1 !== _ && r.splice(_, 1);
    };
}
function G(t) {
    return 'duration' in t;
}
