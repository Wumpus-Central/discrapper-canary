let n, a, i, o, _;
r.d(t, {
    $A: () => N,
    PR: () => f,
    YF: () => S,
    _4: () => h,
    _j: () => D,
    cN: () => G,
    to: () => O,
});
var s = r(98076),
    c = r(521257),
    E = r(808446),
    l = r(486548),
    u = r(449159),
    d = r(16013),
    I = r(674519),
    p = r(798619),
    R = r(154320);
let T = {},
    A = {};
function f(e, t = !1) {
    return v("cls", e, L, n, t);
}
function N(e, t = !1) {
    return v("lcp", e, m, i, t);
}
function O(e) {
    return v("fid", e, g, a);
}
function h(e) {
    return v("ttfb", e, y, o);
}
function S(e) {
    return v("inp", e, P, _);
}
function D(e, t) {
    return (
        M(e, t),
        A[e] ||
            ((function (e) {
                let t = {};
                "event" === e && (t.durationThreshold = 0),
                    (0, p.N)(
                        e,
                        (t) => {
                            C(e, { entries: t });
                        },
                        t,
                    );
            })(e),
            (A[e] = !0)),
        w(e, t)
    );
}
function C(e, t) {
    let r = T[e];
    if (r && r.length)
        for (let n of r)
            try {
                n(t);
            } catch (t) {
                E.X &&
                    s.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, c.$P)(n)}
Error:`,
                        t,
                    );
            }
}
function L() {
    return (0, l.m)(
        (e) => {
            C("cls", { metric: e }), (n = e);
        },
        { reportAllChanges: !0 },
    );
}
function g() {
    return (0, u.F)((e) => {
        C("fid", { metric: e }), (a = e);
    });
}
function m() {
    return (0, I.N)(
        (e) => {
            C("lcp", { metric: e }), (i = e);
        },
        { reportAllChanges: !0 },
    );
}
function y() {
    return (0, R.m)((e) => {
        C("ttfb", { metric: e }), (o = e);
    });
}
function P() {
    return (0, d.Y)((e) => {
        C("inp", { metric: e }), (_ = e);
    });
}
function v(e, t, r, n, a = !1) {
    let i;
    return M(e, t), A[e] || ((i = r()), (A[e] = !0)), n && t({ metric: n }), w(e, t, a ? i : void 0);
}
function M(e, t) {
    (T[e] = T[e] || []), T[e].push(t);
}
function w(e, t, r) {
    return () => {
        r && r();
        let n = T[e];
        if (!n) return;
        let a = n.indexOf(t);
        -1 !== a && n.splice(a, 1);
    };
}
function G(e) {
    return "duration" in e;
}
