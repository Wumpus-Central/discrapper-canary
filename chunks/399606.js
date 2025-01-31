n.d(t, {
    Wu: () => c,
    cj: () => u,
    e7: () => l,
    pF: () => o
}),
    n(411104),
    n(47120);
var i = n(192379),
    r = n(902704),
    a = n(250919);
function s(e, t) {
    return e === t;
}
function o(e, t) {
    return !1;
}
function l(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s,
        l = (0, i.useRef)(null);
    null == l.current &&
        (l.current = {
            stores: e,
            areStatesEqual: o,
            getStateFromStores: t,
            prevDeps: void 0,
            state: void 0
        });
    let u = l.current,
        c = u.state;
    if (null == n || !(0, r.E)(n, u.prevDeps)) {
        let e;
        (e = t()), (null != c && o(c, e)) || (c = e);
    }
    (0, i.useInsertionEffect)(() => {
        (u.getStateFromStores = t), (u.prevDeps = n), (u.state = c);
    });
    let [, d] = (0, i.useState)(null);
    return (
        (0, i.useInsertionEffect)(() => {
            let t = () => {
                    let e;
                    (e = u.getStateFromStores()), o(u.state, e) || ((u.state = e), d({}));
                },
                n = new a.F(e, t);
            return n.attach('useStateFromStores'), () => n.detach();
        }, []),
        c
    );
}
function u(e, t, n) {
    return l(e, t, n, r.Z);
}
function c(e, t, n) {
    return l(e, t, n, r.E);
}
n(706678);
