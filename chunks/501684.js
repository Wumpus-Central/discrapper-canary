let r, _, n, o, i;
a.d(e, {
    $A: () => L,
    PR: () => f,
    YF: () => h,
    _4: () => O,
    _j: () => P,
    cN: () => W,
    to: () => p,
});
var E = a(622916),
    c = a(688838),
    s = a(665909),
    l = a(795927),
    I = a(661129),
    R = a(231550),
    u = a(428983),
    A = a(622574),
    N = a(288570);
let T = {},
    d = {};
function f(t, e = !1) {
    return y("cls", t, D, r, e);
}
function L(t, e = !1) {
    return y("lcp", t, S, n, e);
}
function p(t) {
    return y("fid", t, g, _);
}
function O(t) {
    return y("ttfb", t, m, o);
}
function h(t) {
    return y("inp", t, v, i);
}
function P(t, e) {
    return (
        U(t, e),
        d[t] ||
            ((function (t) {
                let e = {};
                "event" === t && (e.durationThreshold = 0),
                    (0, A.N)(
                        t,
                        (e) => {
                            C(t, { entries: e });
                        },
                        e,
                    );
            })(t),
            (d[t] = !0)),
        G(t, e)
    );
}
function C(t, e) {
    let a = T[t];
    if (a && a.length)
        for (let r of a)
            try {
                r(e);
            } catch (e) {
                s.X &&
                    E.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, c.$P)(r)}
Error:`,
                        e,
                    );
            }
}
function D() {
    return (0, l.m)(
        (t) => {
            C("cls", { metric: t }), (r = t);
        },
        { reportAllChanges: !0 },
    );
}
function g() {
    return (0, I.F)((t) => {
        C("fid", { metric: t }), (_ = t);
    });
}
function S() {
    return (0, u.N)(
        (t) => {
            C("lcp", { metric: t }), (n = t);
        },
        { reportAllChanges: !0 },
    );
}
function m() {
    return (0, N.m)((t) => {
        C("ttfb", { metric: t }), (o = t);
    });
}
function v() {
    return (0, R.Y)((t) => {
        C("inp", { metric: t }), (i = t);
    });
}
function y(t, e, a, r, _ = !1) {
    let n;
    return U(t, e), d[t] || ((n = a()), (d[t] = !0)), r && e({ metric: r }), G(t, e, _ ? n : void 0);
}
function U(t, e) {
    (T[t] = T[t] || []), T[t].push(e);
}
function G(t, e, a) {
    return () => {
        a && a();
        let r = T[t];
        if (!r) return;
        let _ = r.indexOf(e);
        -1 !== _ && r.splice(_, 1);
    };
}
function W(t) {
    return "duration" in t;
}
