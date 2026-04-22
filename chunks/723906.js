"use strict";
let r;
n.d(t, { Bi: () => d, Tw: () => c, X1: () => _ });
var i = n(3388),
    s = n(538047),
    a = n(64700),
    o = n(341221);
let l = !!("u" > typeof window && window.document && window.document.createElement),
    u = new Map();
function d(e) {
    let [t, n] = (0, a.useState)(e),
        s = (0, a.useRef)(null),
        d = (0, o.Cc)(t),
        c = (0, a.useRef)(null);
    if ((r && r.register(c, d), l)) {
        let e = u.get(d);
        e && !e.includes(s) ? e.push(s) : u.set(d, [s]);
    }
    return (
        (0, i.N)(
            () => () => {
                r && r.unregister(c), u.delete(d);
            },
            [d],
        ),
        (0, a.useEffect)(() => {
            let e = s.current;
            return (
                e && n(e),
                () => {
                    e && (s.current = null);
                }
            );
        }),
        d
    );
}
function c(e, t) {
    if (e === t) return e;
    let n = u.get(e);
    if (n) return n.forEach((e) => (e.current = t)), t;
    let r = u.get(t);
    return r ? (r.forEach((t) => (t.current = e)), e) : t;
}
function _(e = []) {
    let t = d(),
        [n, r] = (0, s.y)(t),
        o = (0, a.useCallback)(() => {
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
