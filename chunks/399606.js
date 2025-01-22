r.d(n, {
    Wu: function () {
        return p;
    },
    cj: function () {
        return f;
    },
    e7: function () {
        return d;
    },
    pF: function () {
        return c;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(192379),
    s = r(902704),
    l = r(250919);
function u(e, n) {
    return e === n;
}
function c(e, n) {
    return !1;
}
function d(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
        a = (0, o.useRef)(null);
    null == a.current &&
        (a.current = {
            stores: e,
            areStatesEqual: i,
            getStateFromStores: n,
            prevDeps: void 0,
            state: void 0
        });
    let c = a.current,
        d = c.state;
    if (null == r || !(0, s.E)(r, c.prevDeps)) {
        let e;
        (e = n()), (null == d || !i(d, e)) && (d = e);
    }
    (0, o.useInsertionEffect)(() => {
        (c.getStateFromStores = n), (c.prevDeps = r), (c.state = d);
    });
    let [, f] = (0, o.useState)(null);
    return (
        (0, o.useInsertionEffect)(() => {
            let n = () => {
                    let e;
                    (e = c.getStateFromStores()), !i(c.state, e) && ((c.state = e), f({}));
                },
                r = new l.F(e, n);
            return r.attach('useStateFromStores'), () => r.detach();
        }, []),
        d
    );
}
function f(e, n, r) {
    return d(e, n, r, s.Z);
}
function p(e, n, r) {
    return d(e, n, r, s.E);
}
r(706678);
