"use strict";
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            i = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
            s = null != t ? `?redirect_to=${encodeURIComponent(t)}` : "";
        return 0 !== r.length && (r = 0 === s.length ? `?${r}` : `&${r}`), `${n ? i : ""}/${e}${s}${r}`;
    })("login", e, t, n);
}
n.d(t, { T2: () => r, dN: () => s, x: () => i });
class i {
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
    for (let r of Object.keys(e)) {
        let s = e[r];
        if ("function" != typeof s) {
            n[r] = s;
            continue;
        }
        n[r] = function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return s(
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
}
