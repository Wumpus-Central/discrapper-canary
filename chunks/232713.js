n.d(t, { X: () => o });
let i = (e) => Symbol.iterator in e,
    r = (e) => 'entries' in e,
    a = (e, t) => {
        let n = e instanceof Map ? e : new Map(e.entries()),
            i = t instanceof Map ? t : new Map(t.entries());
        if (n.size !== i.size) return !1;
        for (let [e, t] of n) if (!Object.is(t, i.get(e))) return !1;
        return !0;
    },
    s = (e, t) => {
        let n = e[Symbol.iterator](),
            i = t[Symbol.iterator](),
            r = n.next(),
            a = i.next();
        for (; !r.done && !a.done; ) {
            if (!Object.is(r.value, a.value)) return !1;
            (r = n.next()), (a = i.next());
        }
        return !!r.done && !!a.done;
    };
function o(e, t) {
    return !!Object.is(e, t) || ('object' == typeof e && null !== e && 'object' == typeof t && null !== t && (i(e) && i(t) ? (r(e) && r(t) ? a(e, t) : s(e, t)) : a({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) })));
}
