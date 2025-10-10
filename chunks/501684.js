let r, _, n, o, i;
a.d(e, {
    $A: () => L,
    PR: () => f,
    YF: () => O,
    _4: () => h,
    _j: () => P,
    cN: () => G,
    to: () => p,
});
var c = a(622916),
    E = a(688838),
    s = a(665909),
    l = a(795927),
    I = a(661129),
    u = a(231550),
    R = a(428983),
    d = a(622574),
    N = a(288570);
let A = {},
    T = {};
function f(t, e = !1) {
    return y("cls", t, D, r, e);
}
function L(t, e = !1) {
    return y("lcp", t, m, n, e);
}
function p(t) {
    return y("fid", t, C, _);
}
function h(t) {
    return y("ttfb", t, v, o);
}
function O(t) {
    return y("inp", t, S, i);
}
function P(t, e) {
    return (
        U(t, e),
        T[t] ||
            ((function (t) {
                let e = {};
                "event" === t && (e.durationThreshold = 0),
                    (0, d.N)(
                        t,
                        (e) => {
                            g(t, { entries: e });
                        },
                        e,
                    );
            })(t),
            (T[t] = !0)),
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
                s.X &&
                    c.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, E.$P)(r)}
Error:`,
                        e,
                    );
            }
}
function D() {
    return (0, l.m)(
        (t) => {
            g("cls", { metric: t }), (r = t);
        },
        { reportAllChanges: !0 },
    );
}
function C() {
    return (0, I.F)((t) => {
        g("fid", { metric: t }), (_ = t);
    });
}
function m() {
    return (0, R.N)(
        (t) => {
            g("lcp", { metric: t }), (n = t);
        },
        { reportAllChanges: !0 },
    );
}
function v() {
    return (0, N.m)((t) => {
        g("ttfb", { metric: t }), (o = t);
    });
}
function S() {
    return (0, u.Y)((t) => {
        g("inp", { metric: t }), (i = t);
    });
}
function y(t, e, a, r, _ = !1) {
    let n;
    return U(t, e), T[t] || ((n = a()), (T[t] = !0)), r && e({ metric: r }), b(t, e, _ ? n : void 0);
}
function U(t, e) {
    (A[t] = A[t] || []), A[t].push(e);
}
function b(t, e, a) {
    return () => {
        a && a();
        let r = A[t];
        if (!r) return;
        let _ = r.indexOf(e);
        -1 !== _ && r.splice(_, 1);
    };
}
function G(t) {
    return "duration" in t;
}
