r.d(n, {
    Wu: function () {
        return _;
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
var s = r(192379),
    o = r(902704),
    l = r(250919);
function u(e, n) {
    return e === n;
}
function c(e, n) {
    return !1;
}
function d(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
        a = (0, s.useRef)(null);
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
    if (null == r || !(0, o.E)(r, c.prevDeps)) {
        let e;
        (e = n()), (null == d || !i(d, e)) && (d = e);
    }
    (0, s.useInsertionEffect)(() => {
        (c.getStateFromStores = n), (c.prevDeps = r), (c.state = d);
    });
    let [, f] = (0, s.useState)(null);
    return (
        (0, s.useInsertionEffect)(() => {
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
    return d(e, n, r, o.Z);
}
function _(e, n, r) {
    return d(e, n, r, o.E);
}
r(706678);
