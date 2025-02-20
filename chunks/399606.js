n.d(t, {
    Wu: () => u,
    cj: () => c,
    e7: () => l,
    pF: () => s
}),
    n(411104),
    n(47120);
var r = n(192379),
    i = n(902704),
    o = n(250919);
function a(e, t) {
    return e === t;
}
function s(e, t) {
    return !1;
}
function l(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a,
        l = (0, r.useRef)(null);
    null == l.current &&
        (l.current = {
            stores: e,
            areStatesEqual: s,
            getStateFromStores: t,
            prevDeps: void 0,
            state: void 0
        });
    let c = l.current,
        u = c.state;
    if (null == n || !(0, i.E)(n, c.prevDeps)) {
        let e;
        (e = t()), (null != u && s(u, e)) || (u = e);
    }
    (0, r.useInsertionEffect)(() => {
        (c.getStateFromStores = t), (c.prevDeps = n), (c.state = u);
    });
    let [, d] = (0, r.useState)(null);
    return (
        (0, r.useInsertionEffect)(() => {
            let t = () => {
                    let e;
                    (e = c.getStateFromStores()), s(c.state, e) || ((c.state = e), d({}));
                },
                n = new o.F(e, t);
            return n.attach('useStateFromStores'), () => n.detach();
        }, []),
        u
    );
}
function c(e, t, n) {
    return l(e, t, n, i.Z);
}
function u(e, t, n) {
    return l(e, t, n, i.E);
}
n(706678);
