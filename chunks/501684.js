let r, _, n, o, i;
a.d(e, {
    $A: () => p,
    PR: () => L,
    YF: () => h,
    _4: () => O,
    _j: () => D,
    cN: () => w,
    to: () => f
});
var c = a(622916),
    E = a(688838),
    s = a(665909),
    l = a(795927),
    I = a(661129),
    u = a(231550),
    R = a(428983),
    A = a(622574),
    T = a(288570);
let N = {},
    d = {};
function L(t, e = !1) {
    return U('cls', t, g, r, e);
}
function p(t, e = !1) {
    return U('lcp', t, y, n, e);
}
function f(t) {
    return U('fid', t, C, _);
}
function O(t) {
    return U('ttfb', t, m, o);
}
function h(t) {
    return U('inp', t, v, i);
}
function D(t, e) {
    return (
        S(t, e),
        d[t] ||
            ((function (t) {
                let e = {};
                'event' === t && (e.durationThreshold = 0),
                    (0, A.N)(
                        t,
                        (e) => {
                            P(t, { entries: e });
                        },
                        e
                    );
            })(t),
            (d[t] = !0)),
        G(t, e)
    );
}
function P(t, e) {
    let a = N[t];
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
function g() {
    return (0, l.m)(
        (t) => {
            P('cls', { metric: t }), (r = t);
        },
        { reportAllChanges: !0 }
    );
}
function C() {
    return (0, I.F)((t) => {
        P('fid', { metric: t }), (_ = t);
    });
}
function y() {
    return (0, R.N)(
        (t) => {
            P('lcp', { metric: t }), (n = t);
        },
        { reportAllChanges: !0 }
    );
}
function m() {
    return (0, T.m)((t) => {
        P('ttfb', { metric: t }), (o = t);
    });
}
function v() {
    return (0, u.Y)((t) => {
        P('inp', { metric: t }), (i = t);
    });
}
function U(t, e, a, r, _ = !1) {
    let n;
    return S(t, e), d[t] || ((n = a()), (d[t] = !0)), r && e({ metric: r }), G(t, e, _ ? n : void 0);
}
function S(t, e) {
    (N[t] = N[t] || []), N[t].push(e);
}
function G(t, e, a) {
    return () => {
        a && a();
        let r = N[t];
        if (!r) return;
        let _ = r.indexOf(e);
        -1 !== _ && r.splice(_, 1);
    };
}
function w(t) {
    return 'duration' in t;
}
