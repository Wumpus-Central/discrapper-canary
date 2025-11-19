_.d(e, {
    EN: () => c,
    IQ: () => s,
    bU: () => o,
});
var a = _(176984),
    r = _(573736),
    n = _(622916);
let o = "baggage",
    E = "sentry-",
    i = /^sentry-/;
function c(t) {
    let e = (function (t) {
        if (t && ((0, r.HD)(t) || Array.isArray(t)))
            return Array.isArray(t)
                ? t.reduce(
                      (t, e) => (
                          Object.entries(l(e)).forEach(([e, _]) => {
                              t[e] = _;
                          }),
                          t
                      ),
                      {},
                  )
                : l(t);
    })(t);
    if (!e) return;
    let _ = Object.entries(e).reduce((t, [e, _]) => (e.match(i) && (t[e.slice(E.length)] = _), t), {});
    return Object.keys(_).length > 0 ? _ : void 0;
}
function s(t) {
    if (t) {
        var e = Object.entries(t).reduce((t, [e, _]) => (_ && (t[`${E}${e}`] = _), t), {});
        return 0 !== Object.keys(e).length
            ? Object.entries(e).reduce((t, [e, _], r) => {
                  let o = `${encodeURIComponent(e)}=${encodeURIComponent(_)}`,
                      E = 0 === r ? o : `${t},${o}`;
                  return E.length > 8192
                      ? (a.X &&
                            n.kg.warn(
                                `Not adding key: ${e} with val: ${_} to baggage header due to exceeding baggage size limits.`,
                            ),
                        t)
                      : E;
              }, "")
            : void 0;
    }
}
function l(t) {
    return t
        .split(",")
        .map((t) => t.split("=").map((t) => decodeURIComponent(t.trim())))
        .reduce((t, [e, _]) => (e && _ && (t[e] = _), t), {});
}
