var i = Object.create,
    e = Object.defineProperty,
    c = Object.getOwnPropertyDescriptor,
    a = Object.getOwnPropertyNames,
    s = Object.getPrototypeOf,
    n = Object.prototype.hasOwnProperty;
d.d(
    t,
    {},
    {
        n: (l, t) => {
            let d = {};
            for (var i in l) e(d, i, { get: l[i], enumerable: !0 });
            return (t || e(d, Symbol.toStringTag, { value: "Module" }), d);
        },
        r: (l, t, d) => (
            (d = null != l ? i(s(l)) : {}),
            ((l, t, d) => {
                if ((t && "object" == typeof t) || "function" == typeof t)
                    for (var i, s = a(t), Z = 0, b = s.length; Z < b; Z++)
                        ((i = s[Z]),
                            n.call(l, i) ||
                                void 0 === i ||
                                e(l, i, {
                                    get: ((l) => t[l]).bind(null, i),
                                    enumerable: !(d = c(t, i)) || d.enumerable,
                                }));
                return l;
            })(!t && l && l.__esModule ? d : e(d, "default", { value: l, enumerable: !0 }), l)
        ),
        t: (l, t) => () => (t || l((t = { exports: {} }).exports, t), t.exports),
    },
);
