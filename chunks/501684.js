let r, _, n, o, i;
a.d(e, {
    $A: () => p,
    PR: () => T,
    YF: () => O,
    _4: () => h,
    _j: () => D,
    cN: () => b,
    to: () => L
});
var c = a(622916),
    E = a(688838),
    s = a(665909),
    l = a(795927),
    u = a(661129),
    I = a(231550),
    R = a(428983),
    N = a(622574),
    d = a(288570);
let A = {},
    f = {};
function T(t, e = !1) {
    return U('cls', t, P, r, e);
}
function p(t, e = !1) {
    return U('lcp', t, y, n, e);
}
function L(t) {
    return U('fid', t, C, _);
}
function h(t) {
    return U('ttfb', t, m, o);
}
function O(t) {
    return U('inp', t, v, i);
}
function D(t, e) {
    return (
        S(t, e),
        f[t] ||
            ((function (t) {
                let e = {};
                'event' === t && (e.durationThreshold = 0),
                    (0, N.N)(
                        t,
                        (e) => {
                            g(t, { entries: e });
                        },
                        e
                    );
            })(t),
            (f[t] = !0)),
        G(t, e)
    );
}
function g(t, e) {
    let a = A[t];
    if (a && a.length)
        for (let r of a)
            try {
                r(e);
            } catch (e) {
                s.X &&
                    c.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, E.$P)(r)}
Error:`,
                        e
                    );
            }
}
function P() {
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
function y() {
    return (0, R.N)(
        (t) => {
            g('lcp', { metric: t }), (n = t);
        },
        { reportAllChanges: !0 }
    );
}
function m() {
    return (0, d.m)((t) => {
        g('ttfb', { metric: t }), (o = t);
    });
}
function v() {
    return (0, I.Y)((t) => {
        g('inp', { metric: t }), (i = t);
    });
}
function U(t, e, a, r, _ = !1) {
    let n;
    return S(t, e), f[t] || ((n = a()), (f[t] = !0)), r && e({ metric: r }), G(t, e, _ ? n : void 0);
}
function S(t, e) {
    (A[t] = A[t] || []), A[t].push(e);
}
function G(t, e, a) {
    return () => {
        a && a();
        let r = A[t];
        if (!r) return;
        let _ = r.indexOf(e);
        -1 !== _ && r.splice(_, 1);
    };
}
function b(t) {
    return 'duration' in t;
}
