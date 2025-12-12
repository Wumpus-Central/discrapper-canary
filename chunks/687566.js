let r, i, a, o, _;
n.d(t, {
    $A: () => N,
    PR: () => A,
    YF: () => S,
    _4: () => O,
    _j: () => L,
    cN: () => w,
    to: () => h,
});
var s = n(98076),
    c = n(521257),
    E = n(808446),
    l = n(486548),
    u = n(449159),
    d = n(16013),
    p = n(674519),
    f = n(798619),
    I = n(154320);
let T = {},
    R = {};
function A(e, t = !1) {
    return v("cls", e, m, r, t);
}
function N(e, t = !1) {
    return v("lcp", e, C, a, t);
}
function h(e) {
    return v("fid", e, D, i);
}
function O(e) {
    return v("ttfb", e, y, o);
}
function S(e) {
    return v("inp", e, P, _);
}
function L(e, t) {
    return (
        b(e, t),
        R[e] ||
            ((function (e) {
                let t = {};
                "event" === e && (t.durationThreshold = 0),
                    (0, f.N)(
                        e,
                        (t) => {
                            g(e, { entries: t });
                        },
                        t,
                    );
            })(e),
            (R[e] = !0)),
        M(e, t)
    );
}
function g(e, t) {
    let n = T[e];
    if (n && n.length)
        for (let r of n)
            try {
                r(t);
            } catch (t) {
                E.X &&
                    s.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, c.$P)(r)}
Error:`,
                        t,
                    );
            }
}
function m() {
    return (0, l.m)(
        (e) => {
            g("cls", { metric: e }), (r = e);
        },
        { reportAllChanges: !0 },
    );
}
function D() {
    return (0, u.F)((e) => {
        g("fid", { metric: e }), (i = e);
    });
}
function C() {
    return (0, p.N)(
        (e) => {
            g("lcp", { metric: e }), (a = e);
        },
        { reportAllChanges: !0 },
    );
}
function y() {
    return (0, I.m)((e) => {
        g("ttfb", { metric: e }), (o = e);
    });
}
function P() {
    return (0, d.Y)((e) => {
        g("inp", { metric: e }), (_ = e);
    });
}
function v(e, t, n, r, i = !1) {
    let a;
    return b(e, t), R[e] || ((a = n()), (R[e] = !0)), r && t({ metric: r }), M(e, t, i ? a : void 0);
}
function b(e, t) {
    (T[e] = T[e] || []), T[e].push(t);
}
function M(e, t, n) {
    return () => {
        n && n();
        let r = T[e];
        if (!r) return;
        let i = r.indexOf(t);
        -1 !== i && r.splice(i, 1);
    };
}
function w(e) {
    return "duration" in e;
}
