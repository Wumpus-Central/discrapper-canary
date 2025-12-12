n.d(t, {
    EN: () => c,
    IQ: () => E,
    bU: () => o,
});
var r = n(975318),
    i = n(661822),
    a = n(98076);
let o = "baggage",
    _ = "sentry-",
    s = /^sentry-/;
function c(e) {
    let t = (function (e) {
        if (e && ((0, i.HD)(e) || Array.isArray(e)))
            return Array.isArray(e)
                ? e.reduce(
                      (e, t) => (
                          Object.entries(l(t)).forEach(([t, n]) => {
                              e[t] = n;
                          }),
                          e
                      ),
                      {},
                  )
                : l(e);
    })(e);
    if (!t) return;
    let n = Object.entries(t).reduce((e, [t, n]) => (t.match(s) && (e[t.slice(_.length)] = n), e), {});
    return Object.keys(n).length > 0 ? n : void 0;
}
function E(e) {
    if (e) {
        var t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${_}${t}`] = n), e), {});
        return 0 !== Object.keys(t).length
            ? Object.entries(t).reduce((e, [t, n], i) => {
                  let o = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                      _ = 0 === i ? o : `${e},${o}`;
                  return _.length > 8192
                      ? (r.X &&
                            a.kg.warn(
                                `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
                            ),
                        e)
                      : _;
              }, "")
            : void 0;
    }
}
function l(e) {
    return e
        .split(",")
        .map((e) => e.split("=").map((e) => decodeURIComponent(e.trim())))
        .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
}
