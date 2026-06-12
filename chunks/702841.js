"use strict";
n.d(t, { My: () => E, yK: () => A, bG: () => m, cf: () => g });
var i = n(64700),
    r = n(52133),
    s = n(968441),
    a = n(941426);
n(506774);
let o = new a.Vy("useStateFromStores"),
    l = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6e4;
        return e;
    })(),
    u = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
        return e;
    })(),
    c = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
        return e;
    })(),
    d = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e;
    })();
(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
})() &&
    setInterval(function () {
        for (let [e, t] of ((function () {
            for (let [e, t] of _) if (h(t)) return !0;
            return !1;
        })() || "" !== d
            ? f()
            : o.log("No violators found"),
        _))
            (t.warned = !1), (t.execTime = 0), (t.execCount = 0);
    }, l);
let _ = new Map();
function h(e) {
    return "anonymous" !== e.name && ("" === d || e.name === d) && (e.execCount > c || e.execTime > u);
}
let f = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 34,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + t + n + 6;
    for (let [r, s] of (o.log("|".padEnd(i, "-") + "|"),
    o.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(i, " ") + "|"),
    o.log("|".padEnd(i, "-") + "|"),
    o.log(
        `| ${"Function/Component Name".padEnd(e, " ")}| ${"Total Exec Time".padEnd(t, " ")}| ${"Total Exec Count".padEnd(n, " ")}|`,
    ),
    o.log("|".padEnd(i, "-") + "|"),
    _))
        (("" !== d && r === d) || h(s)) &&
            o.log(
                `| ${r.padEnd(e, " ")}| ${(s.execTime.toFixed(2) + "ms").padEnd(t, " ")}| ${s.execCount.toString().padEnd(n, " ")}|`,
            );
    o.log("|".padEnd(i, "-") + "|");
};
function p(e, t) {
    return e === t;
}
function E(e, t) {
    return !1;
}
function m(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p,
        o = (0, i.useRef)(null);
    null == o.current &&
        (o.current = { stores: e, areStatesEqual: a, getStateFromStores: t, prevDeps: void 0, state: void 0 });
    let l = o.current,
        u = l.state;
    if (null == n || !(0, r.v)(n, l.prevDeps)) {
        let e;
        (e = t()), (null != u && a(u, e)) || (u = e);
    }
    (0, i.useInsertionEffect)(() => {
        (l.getStateFromStores = t), (l.prevDeps = n), (l.state = u);
    });
    let [, c] = (0, i.useState)(null);
    return (
        (0, i.useInsertionEffect)(() => {
            let t = new s.r(e, () => {
                let e;
                (e = l.getStateFromStores()), a(l.state, e) || ((l.state = e), c({}));
            });
            return t.attach("useStateFromStores"), () => t.detach();
        }, []),
        u
    );
}
function g(e, t, n) {
    return m(e, t, n, r.A);
}
function A(e, t, n) {
    return m(e, t, n, r.v);
}
