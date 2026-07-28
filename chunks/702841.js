"use strict";
n.d(t, { My: () => h, yK: () => p, bG: () => I, cf: () => f });
var i = n(582128),
    r = n(52133),
    a = n(968441),
    s = n(118356);
n(506774);
let l = new s.Vy("useStateFromStores"),
    o = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6e4;
        return e;
    })(),
    d = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
        return e;
    })(),
    c = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
        return e;
    })(),
    u = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e;
    })();
(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
})() &&
    setInterval(function () {
        for (let [e, t] of ((function () {
            for (let [e, t] of _) if (E(t)) return !0;
            return !1;
        })() || "" !== u
            ? (function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 34,
                      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
                      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + t + n + 6;
                  for (let [r, a] of (l.log("|".padEnd(i, "-") + "|"),
                  l.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(i, " ") + "|"),
                  l.log("|".padEnd(i, "-") + "|"),
                  l.log(
                      `| ${"Function/Component Name".padEnd(e, " ")}| ${"Total Exec Time".padEnd(t, " ")}| ${"Total Exec Count".padEnd(n, " ")}|`,
                  ),
                  l.log("|".padEnd(i, "-") + "|"),
                  _))
                      (("" !== u && r === u) || E(a)) &&
                          l.log(
                              `| ${r.padEnd(e, " ")}| ${(a.execTime.toFixed(2) + "ms").padEnd(t, " ")}| ${a.execCount.toString().padEnd(n, " ")}|`,
                          );
                  l.log("|".padEnd(i, "-") + "|");
              })()
            : l.log("No violators found"),
        _))
            (t.warned = !1), (t.execTime = 0), (t.execCount = 0);
    }, o);
let _ = new Map();
function E(e) {
    return "anonymous" !== e.name && ("" === u || e.name === u) && (e.execCount > c || e.execTime > d);
}
function A(e, t) {
    return e === t;
}
function h(e, t) {
    return !1;
}
function I(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A,
        l = (0, i.useRef)(null);
    null == l.current &&
        (l.current = { stores: e, areStatesEqual: s, getStateFromStores: t, prevDeps: void 0, state: void 0 });
    let o = l.current,
        d = o.state;
    if (null == n || !(0, r.v)(n, o.prevDeps)) {
        let e;
        (e = t()), (null != d && s(d, e)) || (d = e);
    }
    (0, i.useInsertionEffect)(() => {
        (o.getStateFromStores = t), (o.prevDeps = n), (o.state = d);
    });
    let [, c] = (0, i.useState)(null);
    return (
        (0, i.useInsertionEffect)(() => {
            let t = new a.r(e, function () {
                let e;
                (e = o.getStateFromStores()), s(o.state, e) || ((o.state = e), c({}));
            });
            return t.attach("useStateFromStores"), () => t.detach();
        }, []),
        d
    );
}
function f(e, t, n) {
    return I(e, t, n, r.A);
}
function p(e, t, n) {
    return I(e, t, n, r.v);
}
