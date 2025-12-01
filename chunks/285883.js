r.d(t, {
    EN: () => c,
    IQ: () => E,
    bU: () => o,
});
var n = r(176984),
    a = r(573736),
    i = r(622916);
let o = "baggage",
    _ = "sentry-",
    s = /^sentry-/;
function c(e) {
    let t = (function (e) {
        if (e && ((0, a.HD)(e) || Array.isArray(e)))
            return Array.isArray(e)
                ? e.reduce(
                      (e, t) => (
                          Object.entries(l(t)).forEach(([t, r]) => {
                              e[t] = r;
                          }),
                          e
                      ),
                      {},
                  )
                : l(e);
    })(e);
    if (!t) return;
    let r = Object.entries(t).reduce((e, [t, r]) => (t.match(s) && (e[t.slice(_.length)] = r), e), {});
    return Object.keys(r).length > 0 ? r : void 0;
}
function E(e) {
    if (e) {
        var t = Object.entries(e).reduce((e, [t, r]) => (r && (e[`${_}${t}`] = r), e), {});
        return 0 !== Object.keys(t).length
            ? Object.entries(t).reduce((e, [t, r], a) => {
                  let o = `${encodeURIComponent(t)}=${encodeURIComponent(r)}`,
                      _ = 0 === a ? o : `${e},${o}`;
                  return _.length > 8192
                      ? (n.X &&
                            i.kg.warn(
                                `Not adding key: ${t} with val: ${r} to baggage header due to exceeding baggage size limits.`,
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
        .reduce((e, [t, r]) => (t && r && (e[t] = r), e), {});
}
