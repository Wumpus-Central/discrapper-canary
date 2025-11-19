_.d(e, {
    Wz: () => s,
    m9: () => i,
    re: () =>
        function t(e, _ = {}, n) {
            if ("function" != typeof e) return e;
            try {
                let t = e.__sentry_wrapped__;
                if (t) return t;
                if ((0, o.HK)(e)) return e;
            } catch (t) {
                return e;
            }
            let i = function () {
                let o = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    let a = o.map((e) => t(e, _));
                    return e.apply(this, a);
                } catch (t) {
                    throw (
                        (c++,
                        setTimeout(() => {
                            c--;
                        }),
                        (0, a.$e)((e) => {
                            e.addEventProcessor(
                                (t) => (
                                    _.mechanism && ((0, E.Db)(t, void 0, void 0), (0, E.EG)(t, _.mechanism)),
                                    (t.extra = {
                                        ...t.extra,
                                        arguments: o,
                                    }),
                                    t
                                ),
                            ),
                                (0, r.Tb)(t);
                        }),
                        t)
                    );
                }
            };
            try {
                for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (i[t] = e[t]);
            } catch (t) {}
            (0, o.$Q)(i, e), (0, o.xp)(e, "__sentry_wrapped__", i);
            try {
                Object.getOwnPropertyDescriptor(i, "name").configurable &&
                    Object.defineProperty(i, "name", { get: () => e.name });
            } catch (t) {}
            return i;
        },
});
var a = _(263449),
    r = _(233517),
    n = _(899517),
    o = _(370336),
    E = _(394798);
let i = n.n,
    c = 0;
function s() {
    return c > 0;
}
