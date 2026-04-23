"use strict";
n.d(t, { De: () => c, sv: () => a, yD: () => l });
var r = n(780755),
    i = n(875565),
    o = n(272469);
let a = "sentry-",
    s = /^sentry-/;
function l(e) {
    let t = (function (e) {
        if (e && ((0, i.Kg)(e) || Array.isArray(e)))
            return Array.isArray(e)
                ? e.reduce(
                      (e, t) => (
                          Object.entries(u(t)).forEach(([t, n]) => {
                              e[t] = n;
                          }),
                          e
                      ),
                      {},
                  )
                : u(e);
    })(e);
    if (!t) return;
    let n = Object.entries(t).reduce((e, [t, n]) => (t.match(s) && (e[t.slice(a.length)] = n), e), {});
    return Object.keys(n).length > 0 ? n : void 0;
}
function c(e) {
    if (e) {
        var t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${a}${t}`] = n), e), {});
        return 0 !== Object.keys(t).length
            ? Object.entries(t).reduce((e, [t, n], i) => {
                  let a = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                      s = 0 === i ? a : `${e},${a}`;
                  return s.length > 8192
                      ? (r.T &&
                            o.vF.warn(
                                `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
                            ),
                        e)
                      : s;
              }, "")
            : void 0;
    }
}
function u(e) {
    return e
        .split(",")
        .map((e) => e.split("=").map((e) => decodeURIComponent(e.trim())))
        .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
}
