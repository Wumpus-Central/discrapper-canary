a.d(e, {
    Wz: () => s,
    m9: () => E,
    re: () =>
        function t(e, a = {}, n) {
            if ("function" != typeof e) return e;
            try {
                let t = e.__sentry_wrapped__;
                if (t) return t;
                if ((0, o.HK)(e)) return e;
            } catch (t) {
                return e;
            }
            let E = function () {
                let o = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    let r = o.map((e) => t(e, a));
                    return e.apply(this, r);
                } catch (t) {
                    throw (
                        (c++,
                        setTimeout(() => {
                            c--;
                        }),
                        (0, r.$e)((e) => {
                            e.addEventProcessor(
                                (t) => (
                                    a.mechanism && ((0, i.Db)(t, void 0, void 0), (0, i.EG)(t, a.mechanism)),
                                    (t.extra = {
                                        ...t.extra,
                                        arguments: o,
                                    }),
                                    t
                                ),
                            ),
                                (0, _.Tb)(t);
                        }),
                        t)
                    );
                }
            };
            try {
                for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (E[t] = e[t]);
            } catch (t) {}
            (0, o.$Q)(E, e), (0, o.xp)(e, "__sentry_wrapped__", E);
            try {
                Object.getOwnPropertyDescriptor(E, "name").configurable &&
                    Object.defineProperty(E, "name", { get: () => e.name });
            } catch (t) {}
            return E;
        },
});
var r = a(263449),
    _ = a(233517),
    n = a(899517),
    o = a(370336),
    i = a(394798);
let E = n.n,
    c = 0;
function s() {
    return c > 0;
}
