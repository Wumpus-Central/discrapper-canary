"use strict";
let n;
r.d(t, { X1: () => p, Tw: () => f, Bi: () => c });
var o = r(576024),
    i = r(654978),
    a = r(582128),
    s = r(446649);
let l = !!("u" > typeof window && window.document && window.document.createElement),
    u = new Map();
function c(e) {
    let [t, r] = (0, a.useState)(e),
        i = (0, a.useRef)(null),
        c = (0, s.Cc)(t),
        f = (0, a.useRef)(null);
    if ((n && n.register(f, c), l)) {
        let e = u.get(c);
        e && !e.includes(i) ? e.push(i) : u.set(c, [i]);
    }
    return (
        (0, o.N)(
            () => () => {
                n && n.unregister(f), u.delete(c);
            },
            [c],
        ),
        (0, a.useEffect)(() => {
            let e = i.current;
            return (
                e && r(e),
                () => {
                    e && (i.current = null);
                }
            );
        }),
        c
    );
}
function f(e, t) {
    if (e === t) return e;
    let r = u.get(e);
    if (r) return r.forEach((e) => (e.current = t)), t;
    let n = u.get(t);
    return n ? (n.forEach((t) => (t.current = e)), e) : t;
}
function p(e = []) {
    let t = c(),
        [r, n] = (function (e) {
            let [t, r] = (0, a.useState)(e),
                n = (0, a.useRef)(null),
                s = (0, i.J)(() => {
                    if (!n.current) return;
                    let e = n.current.next();
                    if (e.done) {
                        n.current = null;
                        return;
                    }
                    t === e.value ? s() : r(e.value);
                });
            (0, o.N)(() => {
                n.current && s();
            });
            let l = (0, i.J)((e) => {
                (n.current = e(t)), s();
            });
            return [t, l];
        })(t),
        s = (0, a.useCallback)(() => {
            n(function* () {
                yield t, yield document.getElementById(t) ? t : void 0;
            });
        }, [t, n]);
    return (0, o.N)(s, [t, s, ...e]), r;
}
"u" > typeof FinalizationRegistry &&
    (n = new FinalizationRegistry((e) => {
        u.delete(e);
    }));
