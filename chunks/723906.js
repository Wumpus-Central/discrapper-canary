"use strict";
let r;
n.d(t, { Bi: () => c, Tw: () => d, X1: () => _ });
var i = n(3388),
    a = n(538047),
    s = n(64700),
    o = n(341221);
let l = !!("u" > typeof window && window.document && window.document.createElement),
    u = new Map();
function c(e) {
    let [t, n] = (0, s.useState)(e),
        a = (0, s.useRef)(null),
        c = (0, o.Cc)(t),
        d = (0, s.useRef)(null);
    if ((r && r.register(d, c), l)) {
        let e = u.get(c);
        e && !e.includes(a) ? e.push(a) : u.set(c, [a]);
    }
    return (
        (0, i.N)(() => {
            let e = c;
            return () => {
                r && r.unregister(d), u.delete(e);
            };
        }, [c]),
        (0, s.useEffect)(() => {
            let e = a.current;
            return (
                e && n(e),
                () => {
                    e && (a.current = null);
                }
            );
        }),
        c
    );
}
function d(e, t) {
    if (e === t) return e;
    let n = u.get(e);
    if (n) return n.forEach((e) => (e.current = t)), t;
    let r = u.get(t);
    return r ? (r.forEach((t) => (t.current = e)), e) : t;
}
function _(e = []) {
    let t = c(),
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
        u.delete(e);
    }));
