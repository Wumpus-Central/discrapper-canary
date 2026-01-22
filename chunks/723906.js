let r;
n.d(t, {
    Bi: () => u,
    Tw: () => d,
    X1: () => f,
});
var i = n(3388),
    a = n(538047),
    s = n(64700),
    o = n(341221);
let l = !!("u" > typeof window && window.document && window.document.createElement),
    c = new Map();

function u(e) {
    let [t, n] = (0, s.useState)(e),
        a = (0, s.useRef)(null),
        u = (0, o.Cc)(t),
        d = (0, s.useRef)(null);
    if ((r && r.register(d, u), l)) {
        let e = c.get(u);
        e && !e.includes(a) ? e.push(a) : c.set(u, [a]);
    }
    return (
        (0, i.N)(() => {
            let e = u;
            return () => {
                r && r.unregister(d), c.delete(e);
            };
        }, [u]),
        (0, s.useEffect)(() => {
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
        [n, r] = (0, a.y)(t),
        o = (0, s.useCallback)(() => {
            r(function* () {
                yield t, yield document.getElementById(t) ? t : void 0;
            });
        }, [t, r]);
    return (0, i.N)(o, [t, o, ...e]), n;
}
"u" > typeof FinalizationRegistry &&
    (r = new FinalizationRegistry((e) => {
        c.delete(e);
    }));
