a.d(e, {
    Wz: () => E,
    m9: () => c,
    re: () =>
        function t(e, a = {}, _) {
            if ('function' != typeof e) return e;
            try {
                let t = e.__sentry_wrapped__;
                if (t) return t;
                if ((0, o.HK)(e)) return e;
            } catch (t) {
                return e;
            }
            let c = function () {
                let o = Array.prototype.slice.call(arguments);
                try {
                    _ && 'function' == typeof _ && _.apply(this, arguments);
                    let r = o.map((e) => t(e, a));
                    return e.apply(this, r);
                } catch (t) {
                    throw (
                        (s++,
                        setTimeout(() => {
                            s--;
                        }),
                        (0, r.$e)((e) => {
                            e.addEventProcessor(
                                (t) => (
                                    a.mechanism && ((0, i.Db)(t, void 0, void 0), (0, i.EG)(t, a.mechanism)),
                                    (t.extra = {
                                        ...t.extra,
                                        arguments: o
                                    }),
                                    t
                                )
                            ),
                                (0, n.Tb)(t);
                        }),
                        t)
                    );
                }
            };
            try {
                for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (c[t] = e[t]);
            } catch (t) {}
            (0, o.$Q)(c, e), (0, o.xp)(e, '__sentry_wrapped__', c);
            try {
                Object.getOwnPropertyDescriptor(c, 'name').configurable && Object.defineProperty(c, 'name', { get: () => e.name });
            } catch (t) {}
            return c;
        }
});
var r = a(263449),
    n = a(233517),
    _ = a(899517),
    o = a(370336),
    i = a(394798);
let c = _.n,
    s = 0;
function E() {
    return s > 0;
}
