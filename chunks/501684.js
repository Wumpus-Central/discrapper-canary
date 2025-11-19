let a, r, n, o, E;
_.d(e, {
    $A: () => O,
    PR: () => f,
    YF: () => C,
    _4: () => p,
    _j: () => P,
    cN: () => W,
    to: () => L,
});
var i = _(622916),
    c = _(688838),
    s = _(665909),
    l = _(795927),
    I = _(661129),
    R = _(231550),
    N = _(428983),
    A = _(622574),
    u = _(288570);
let T = {},
    d = {};
function f(t, e = !1) {
    return G("cls", t, D, a, e);
}
function O(t, e = !1) {
    return G("lcp", t, g, n, e);
}
function L(t) {
    return G("fid", t, S, r);
}
function p(t) {
    return G("ttfb", t, y, o);
}
function C(t) {
    return G("inp", t, m, E);
}
function P(t, e) {
    return (
        v(t, e),
        d[t] ||
            ((function (t) {
                let e = {};
                "event" === t && (e.durationThreshold = 0),
                    (0, A.N)(
                        t,
                        (e) => {
                            h(t, { entries: e });
                        },
                        e,
                    );
            })(t),
            (d[t] = !0)),
        U(t, e)
    );
}
function h(t, e) {
    let _ = T[t];
    if (_ && _.length)
        for (let a of _)
            try {
                a(e);
            } catch (e) {
                s.X &&
                    i.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, c.$P)(a)}
Error:`,
                        e,
                    );
            }
}
function D() {
    return (0, l.m)(
        (t) => {
            h("cls", { metric: t }), (a = t);
        },
        { reportAllChanges: !0 },
    );
}
function S() {
    return (0, I.F)((t) => {
        h("fid", { metric: t }), (r = t);
    });
}
function g() {
    return (0, N.N)(
        (t) => {
            h("lcp", { metric: t }), (n = t);
        },
        { reportAllChanges: !0 },
    );
}
function y() {
    return (0, u.m)((t) => {
        h("ttfb", { metric: t }), (o = t);
    });
}
function m() {
    return (0, R.Y)((t) => {
        h("inp", { metric: t }), (E = t);
    });
}
function G(t, e, _, a, r = !1) {
    let n;
    return v(t, e), d[t] || ((n = _()), (d[t] = !0)), a && e({ metric: a }), U(t, e, r ? n : void 0);
}
function v(t, e) {
    (T[t] = T[t] || []), T[t].push(e);
}
function U(t, e, _) {
    return () => {
        _ && _();
        let a = T[t];
        if (!a) return;
        let r = a.indexOf(e);
        -1 !== r && a.splice(r, 1);
    };
}
function W(t) {
    return "duration" in t;
}
