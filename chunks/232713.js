n.d(t, { X: () => s });
let r = (e) => Symbol.iterator in e,
    i = (e) => 'entries' in e,
    o = (e, t) => {
        let n = e instanceof Map ? e : new Map(e.entries()),
            r = t instanceof Map ? t : new Map(t.entries());
        if (n.size !== r.size) return !1;
        for (let [e, t] of n) if (!Object.is(t, r.get(e))) return !1;
        return !0;
    },
    a = (e, t) => {
        let n = e[Symbol.iterator](),
            r = t[Symbol.iterator](),
            i = n.next(),
            o = r.next();
        for (; !i.done && !o.done; ) {
            if (!Object.is(i.value, o.value)) return !1;
            (i = n.next()), (o = r.next());
        }
        return !!i.done && !!o.done;
    };
function s(e, t) {
    return !!Object.is(e, t) || ('object' == typeof e && null !== e && 'object' == typeof t && null !== t && (r(e) && r(t) ? (i(e) && i(t) ? o(e, t) : a(e, t)) : o({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) })));
}
