"use strict";
n.d(t, { My: () => o, bG: () => l, cf: () => u, yK: () => c });
var r = n(64700),
    i = n(52133),
    s = n(968441);
function a(e, t) {
    return e === t;
}
function o(e, t) {
    return !1;
}
function l(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a,
        l = (0, r.useRef)(null);
    null == l.current &&
        (l.current = { stores: e, areStatesEqual: o, getStateFromStores: t, prevDeps: void 0, state: void 0 });
    let u = l.current,
        c = u.state;
    if (null == n || !(0, i.v)(n, u.prevDeps)) {
        let e;
        (e = t()), (null != c && o(c, e)) || (c = e);
    }
    (0, r.useInsertionEffect)(() => {
        (u.getStateFromStores = t), (u.prevDeps = n), (u.state = c);
    });
    let [, d] = (0, r.useState)(null);
    return (
        (0, r.useInsertionEffect)(() => {
            let t = new s.r(e, () => {
                let e;
                (e = u.getStateFromStores()), o(u.state, e) || ((u.state = e), d({}));
            });
            return t.attach("useStateFromStores"), () => t.detach();
        }, []),
        c
    );
}
function u(e, t, n) {
    return l(e, t, n, i.A);
}
function c(e, t, n) {
    return l(e, t, n, i.v);
}
n(461275);
