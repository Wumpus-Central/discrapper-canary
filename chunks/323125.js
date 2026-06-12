"use strict";
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            r = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
            s = null != t ? `?redirect_to=${encodeURIComponent(t)}` : "";
        return 0 !== i.length && (i = 0 === s.length ? `?${i}` : `&${i}`), `${n ? r : ""}/${e}${s}${i}`;
    })("login", e, t, n);
}
n.d(t, { T2: () => i, dN: () => s, x: () => r });
class r {
    value;
    constructor(e) {
        this.value = e;
    }
    toString() {
        return this.value;
    }
}
function s(e, t) {
    let n = {};
    for (let i of Object.keys(e)) {
        let s = e[i];
        if ("function" != typeof s) {
            n[i] = s;
            continue;
        }
        n[i] = function () {
            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            return s(
                ...(function (e, t) {
                    return e.map((e) =>
                        null == e
                            ? e
                            : e instanceof r
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
}
