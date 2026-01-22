function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return a("login", e, t, n);
}

function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        i = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
        a = null != t ? "?redirect_to=".concat(encodeURIComponent(t)) : "";
    return (
        0 !== r.length && (r = 0 === a.length ? "?".concat(r) : "&".concat(r)),
        ""
            .concat(n ? i : "", "/")
            .concat(e)
            .concat(a)
            .concat(r)
    );
}
n.d(t, {
    T2: () => i,
    dN: () => l,
    x: () => s,
}),
    n(747238),
    n(896048);
class s {
    toString() {
        return this.value;
    }
    constructor(e) {
        r(this, "value", void 0), (this.value = e);
    }
}

function o(e, t) {
    return e.map((e) =>
        null == e
            ? e
            : e instanceof s
              ? e.toString()
              : null == t
                ? encodeURIComponent(e)
                : String(e)
                      .split("")
                      .map((e) => (null != t && t.includes(e) ? e : encodeURIComponent(e)))
                      .join(""),
    );
}

function l(e, t) {
    let n = {};
    for (let r of Object.keys(e)) {
        let i = e[r];
        if ("function" != typeof i) {
            n[r] = i;
            continue;
        }
        n[r] = function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return i(...o(n, t));
        };
    }
    return n;
}
