let r, n, _, o, i;
a.d(e, {
    $A: () => T,
    PR: () => N,
    YF: () => O,
    _4: () => h,
    _j: () => D,
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
    f = a(288570);
let A = {},
    p = {};
function N(t, e = !1) {
    return S('cls', t, P, r, e);
}
function T(t, e = !1) {
    return S('lcp', t, m, _, e);
}
function L(t) {
    return S('fid', t, y, n);
}
function h(t) {
    return S('ttfb', t, C, o);
}
function O(t) {
    return S('inp', t, v, i);
}
function D(t, e) {
    return (
        U(t, e),
        p[t] ||
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
            (p[t] = !0)),
        b(t, e)
    );
}
function g(t, e) {
    let a = A[t];
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
function P() {
    return (0, l.m)(
        (t) => {
            g('cls', { metric: t }), (r = t);
        },
        { reportAllChanges: !0 }
    );
}
function y() {
    return (0, u.F)((t) => {
        g('fid', { metric: t }), (n = t);
    });
}
function m() {
    return (0, R.N)(
        (t) => {
            g('lcp', { metric: t }), (_ = t);
        },
        { reportAllChanges: !0 }
    );
}
function C() {
    return (0, f.m)((t) => {
        g('ttfb', { metric: t }), (o = t);
    });
}
function v() {
    return (0, I.Y)((t) => {
        g('inp', { metric: t }), (i = t);
    });
}
function S(t, e, a, r, n = !1) {
    let _;
    return U(t, e), p[t] || ((_ = a()), (p[t] = !0)), r && e({ metric: r }), b(t, e, n ? _ : void 0);
}
function U(t, e) {
    (A[t] = A[t] || []), A[t].push(e);
}
function b(t, e, a) {
    return () => {
        a && a();
        let r = A[t];
        if (!r) return;
        let n = r.indexOf(e);
        -1 !== n && r.splice(n, 1);
    };
}
function G(t) {
    return 'duration' in t;
}
