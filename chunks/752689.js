let r;
n.d(t, {
    Me: () => u,
    mp: () => f,
    ur: () => d,
});
var i = n(159447),
    a = n(408437),
    o = n(473749),
    s = n(112683);
let l = !!("undefined" != typeof window && window.document && window.document.createElement),
    c = new Map();
function u(e) {
    let [t, n] = (0, o.useState)(e),
        a = (0, o.useRef)(null),
        u = (0, s.gP)(t),
        d = (0, o.useRef)(null);
    if ((r && r.register(d, u), l)) {
        let e = c.get(u);
        e && !e.includes(a) ? e.push(a) : c.set(u, [a]);
    }
    return (
        (0, i.b)(() => {
            let e = u;
            return () => {
                r && r.unregister(d), c.delete(e);
            };
        }, [u]),
        (0, o.useEffect)(() => {
            let e = a.current;
            return (
                e && n(e),
                () => {
                    e && (a.current = null);
                }
            );
        }),
        u
    );
}
function d(e, t) {
    if (e === t) return e;
    let n = c.get(e);
    if (n) return n.forEach((e) => (e.current = t)), t;
    let r = c.get(t);
    return r ? (r.forEach((t) => (t.current = e)), e) : t;
}
function f(e = []) {
    let t = u(),
        [n, r] = (0, a.p)(t),
        s = (0, o.useCallback)(() => {
            r(function* () {
                yield t, yield document.getElementById(t) ? t : void 0;
            });
        }, [t, r]);
    return (0, i.b)(s, [t, s, ...e]), n;
}
"undefined" != typeof FinalizationRegistry &&
    (r = new FinalizationRegistry((e) => {
        c.delete(e);
    }));
