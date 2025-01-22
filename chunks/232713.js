r.d(n, {
    X: function () {
        return l;
    }
});
let i = (e) => Symbol.iterator in e,
    a = (e) => 'entries' in e,
    o = (e, n) => {
        let r = e instanceof Map ? e : new Map(e.entries()),
            i = n instanceof Map ? n : new Map(n.entries());
        if (r.size !== i.size) return !1;
        for (let [e, n] of r) if (!Object.is(n, i.get(e))) return !1;
        return !0;
    },
    s = (e, n) => {
        let r = e[Symbol.iterator](),
            i = n[Symbol.iterator](),
            a = r.next(),
            o = i.next();
        for (; !a.done && !o.done; ) {
            if (!Object.is(a.value, o.value)) return !1;
            (a = r.next()), (o = i.next());
        }
        return !!a.done && !!o.done;
    };
function l(e, n) {
    return !!Object.is(e, n) || ('object' == typeof e && null !== e && 'object' == typeof n && null !== n && (i(e) && i(n) ? (a(e) && a(n) ? o(e, n) : s(e, n)) : o({ entries: () => Object.entries(e) }, { entries: () => Object.entries(n) })));
}
