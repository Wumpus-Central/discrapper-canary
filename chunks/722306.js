var i = n(613057);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            if (null == t) return !0;
            if ("string" == typeof t) return e.has(t);
            if ("object" != typeof t) return !1;
            let n = t[i.sm.ANY],
                r = t[i.sm.ALL];
            return !!((Array.isArray(n) && n.some((t) => e.has(t))) || (Array.isArray(r) && r.every((t) => e.has(t))));
        },
    },
);
