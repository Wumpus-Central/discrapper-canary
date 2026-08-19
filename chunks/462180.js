"use strict";
r.d(t, { x: () => o });
let n = (e, t) => {
    let r = e instanceof Map ? e : new Map(e.entries()),
        n = t instanceof Map ? t : new Map(t.entries());
    if (r.size !== n.size) return !1;
    for (let [e, t] of r) if (!n.has(e) || !Object.is(t, n.get(e))) return !1;
    return !0;
};
function o(e, t) {
    if (Object.is(e, t)) return !0;
    if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t ||
        Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    )
        return !1;
    if (Symbol.iterator in e && Symbol.iterator in t) {
        if ("entries" in e && "entries" in t) return n(e, t);
        let r = e[Symbol.iterator](),
            o = t[Symbol.iterator](),
            i = r.next(),
            a = o.next();
        for (; !i.done && !a.done; ) {
            if (!Object.is(i.value, a.value)) return !1;
            (i = r.next()), (a = o.next());
        }
        return !!i.done && !!a.done;
    }
    return n({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) });
}
