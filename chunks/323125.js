"use strict";
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return i("login", e, t, n);
}
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        i = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
        a = null != t ? `?redirect_to=${encodeURIComponent(t)}` : "";
    return 0 !== r.length && (r = 0 === a.length ? `?${r}` : `&${r}`), `${n ? i : ""}/${e}${a}${r}`;
}
n.d(t, { T2: () => r, dN: () => o, x: () => a });
class a {
    value;
    constructor(e) {
        this.value = e;
    }
    toString() {
        return this.value;
    }
}
function s(e, t) {
    return e.map((e) =>
        null == e
            ? e
            : e instanceof a
              ? e.toString()
              : null == t
                ? encodeURIComponent(e)
                : String(e)
                      .split("")
                      .map((e) => (null != t && t.includes(e) ? e : encodeURIComponent(e)))
                      .join(""),
    );
}
function o(e, t) {
    let n = {};
    for (let r of Object.keys(e)) {
        let i = e[r];
        if ("function" != typeof i) {
            n[r] = i;
            continue;
        }
        n[r] = function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return i(...s(n, t));
        };
    }
    return n;
}
