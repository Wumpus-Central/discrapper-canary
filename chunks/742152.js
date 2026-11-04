var n = Object.create,
    o = Object.defineProperty,
    u = Object.getOwnPropertyDescriptor,
    l = Object.getOwnPropertyNames,
    a = Object.getPrototypeOf,
    p = Object.prototype.hasOwnProperty,
    c = (e, t, r, n) => {
        if ((t && "object" == typeof t) || "function" == typeof t)
            for (var a, c = l(t), s = 0, i = c.length; s < i; s++)
                ((a = c[s]),
                    p.call(e, a) ||
                        a === r ||
                        o(e, a, { get: ((e) => t[e]).bind(null, a), enumerable: !(n = u(t, a)) || n.enumerable }));
        return e;
    };
r.d(
    t,
    {},
    {
        a: (e) => (t) => {
            let r, u;
            return (
                (r = t.default),
                (u = null != r ? n(a(r)) : {}),
                c(!e && r && r.__esModule ? u : o(u, "default", { value: r, enumerable: !0 }), r)
            );
        },
        i: (e) => (p.call(e, "module.exports") ? e["module.exports"] : c(o({}, "__esModule", { value: !0 }), e)),
        n: (e, t) =>
            function () {
                return (e && (t = (0, e[l(e)[0]])((e = 0))), t);
            },
        r: (e, t) => {
            let r = {};
            for (var n in e) o(r, n, { get: e[n], enumerable: !0 });
            return (t && o(r, Symbol.toStringTag, { value: "Module" }), r);
        },
        t: (e, t) =>
            function () {
                return (t || (0, e[l(e)[0]])((t = { exports: {} }).exports, t), t.exports);
            },
    },
);
