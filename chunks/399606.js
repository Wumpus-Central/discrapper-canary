n.d(t, {
    Wu: () => d,
    cj: () => u,
    e7: () => c,
    pF: () => l
}),
    n(415506),
    n(388685);
var r = n(73800),
    i = n(902704),
    a = n(250919),
    o = n(52165);
function s(e, t) {
    return e === t;
}
function l(e, t) {
    return !1;
}
function c(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s,
        c = (0, r.useRef)(null);
    null == c.current &&
        (c.current = {
            stores: e,
            areStatesEqual: l,
            getStateFromStores: t,
            prevDeps: void 0,
            state: void 0,
            libDiscoreContext: (0, o.kr)()
        });
    let u = c.current,
        d = u.state;
    if (null == n || !(0, i.E)(n, u.prevDeps)) {
        let e;
        void 0 !== u.libDiscoreContext && (0, o.kK)(u.libDiscoreContext), (e = t());
        let n = !1;
        (null != d && l(d, e)) || ((d = e), (n = !0)), void 0 !== u.libDiscoreContext && (0, o.BC)(u.libDiscoreContext, n);
    }
    (0, r.useInsertionEffect)(() => {
        (u.getStateFromStores = t), (u.prevDeps = n), (u.state = d);
    });
    let [, f] = (0, r.useState)(null);
    return (
        (0, r.useInsertionEffect)(() => {
            let t = () => {
                    let e;
                    void 0 !== u.libDiscoreContext && (0, o.kK)(u.libDiscoreContext), (e = u.getStateFromStores());
                    let t = !1;
                    l(u.state, e) || ((u.state = e), f({}), (t = !0)), void 0 !== u.libDiscoreContext && (0, o.BC)(u.libDiscoreContext, t);
                },
                n = new a.F(e, t, u.libDiscoreContext);
            return n.attach('useStateFromStores'), () => n.detach();
        }, []),
        d
    );
}
function u(e, t, n) {
    return c(e, t, n, i.Z);
}
function d(e, t, n) {
    return c(e, t, n, i.E);
}
n(706678);
