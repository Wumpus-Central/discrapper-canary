class i {
    value;
    constructor(e) {
        this.value = e;
    }
    toString() {
        return this.value;
    }
}
n.d(
    t,
    {},
    {
        T2: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    r = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
                    a = null != t ? `?redirect_to=${encodeURIComponent(t)}` : "";
                return (0 !== i.length && (i = 0 === a.length ? `?${i}` : `&${i}`), `${n ? r : ""}/${e}${a}${i}`);
            })("login", e, t, n);
        },
        dN: function (e, t) {
            let n = {};
            for (let r of Object.keys(e)) {
                let a = e[r];
                if ("function" != typeof a) {
                    n[r] = a;
                    continue;
                }
                n[r] = function () {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return a(
                        ...(function (e, t) {
                            return e.map((e) =>
                                null == e
                                    ? e
                                    : e instanceof i
                                      ? e.toString()
                                      : null == t
                                        ? encodeURIComponent(e)
                                        : String(e)
                                              .split("")
                                              .map((e) => (null != t && t.includes(e) ? e : encodeURIComponent(e)))
                                              .join(""),
                            );
                        })(n, t),
                    );
                };
            }
            return n;
        },
        x: i,
    },
);
