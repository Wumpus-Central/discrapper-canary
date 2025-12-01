let n, a, i, o, _;
r.d(t, {
    $A: () => f,
    PR: () => N,
    YF: () => D,
    _4: () => h,
    _j: () => S,
    cN: () => M,
    to: () => O,
});
var s = r(622916),
    c = r(688838),
    E = r(665909),
    l = r(795927),
    u = r(661129),
    d = r(231550),
    I = r(428983),
    p = r(622574),
    R = r(288570);
let T = {},
    A = {};
function N(e, t = !1) {
    return v("cls", e, C, n, t);
}
function f(e, t = !1) {
    return v("lcp", e, m, i, t);
}
function O(e) {
    return v("fid", e, g, a);
}
function h(e) {
    return v("ttfb", e, y, o);
}
function D(e) {
    return v("inp", e, P, _);
}
function S(e, t) {
    return (
        w(e, t),
        A[e] ||
            ((function (e) {
                let t = {};
                "event" === e && (t.durationThreshold = 0),
                    (0, p.N)(
                        e,
                        (t) => {
                            L(e, { entries: t });
                        },
                        t,
                    );
            })(e),
            (A[e] = !0)),
        G(e, t)
    );
}
function L(e, t) {
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
function C() {
    return (0, l.m)(
        (e) => {
            L("cls", { metric: e }), (n = e);
        },
        { reportAllChanges: !0 },
    );
}
function g() {
    return (0, u.F)((e) => {
        L("fid", { metric: e }), (a = e);
    });
}
function m() {
    return (0, I.N)(
        (e) => {
            L("lcp", { metric: e }), (i = e);
        },
        { reportAllChanges: !0 },
    );
}
function y() {
    return (0, R.m)((e) => {
        L("ttfb", { metric: e }), (o = e);
    });
}
function P() {
    return (0, d.Y)((e) => {
        L("inp", { metric: e }), (_ = e);
    });
}
function v(e, t, r, n, a = !1) {
    let i;
    return w(e, t), A[e] || ((i = r()), (A[e] = !0)), n && t({ metric: n }), G(e, t, a ? i : void 0);
}
function w(e, t) {
    (T[e] = T[e] || []), T[e].push(t);
}
function G(e, t, r) {
    return () => {
        r && r();
        let n = T[e];
        if (!n) return;
        let a = n.indexOf(t);
        -1 !== a && n.splice(a, 1);
    };
}
function M(e) {
    return "duration" in e;
}
