"use strict";
let r;
n.d(t, { X1: () => f, Tw: () => d, Bi: () => c });
var i = n(576024),
    a = n(654978),
    o = n(582128),
    s = n(446649);
let l = !!("u" > typeof window && window.document && window.document.createElement),
    u = new Map();
function c(e) {
    let [t, n] = (0, o.useState)(e),
        a = (0, o.useRef)(null),
        c = (0, s.Cc)(t),
        d = (0, o.useRef)(null);
    if ((r && r.register(d, c), l)) {
        let e = u.get(c);
        e && !e.includes(a) ? e.push(a) : u.set(c, [a]);
    }
    return (
        (0, i.N)(
            () => () => {
                r && r.unregister(d), u.delete(c);
            },
            [c],
        ),
        (0, o.useEffect)(() => {
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
function f(e = []) {
    let t = c(),
        [n, r] = (function (e) {
            let [t, n] = (0, o.useState)(e),
                r = (0, o.useRef)(null),
                s = (0, a.J)(() => {
                    if (!r.current) return;
                    let e = r.current.next();
                    if (e.done) {
                        r.current = null;
                        return;
                    }
                    t === e.value ? s() : n(e.value);
                });
            (0, i.N)(() => {
                r.current && s();
            });
            let l = (0, a.J)((e) => {
                (r.current = e(t)), s();
            });
            return [t, l];
        })(t),
        s = (0, o.useCallback)(() => {
            r(function* () {
                yield t, yield document.getElementById(t) ? t : void 0;
            });
        }, [t, r]);
    return (0, i.N)(s, [t, s, ...e]), n;
}
"u" > typeof FinalizationRegistry &&
    (r = new FinalizationRegistry((e) => {
        u.delete(e);
    }));
