_.d(e, {
    K: () => E,
    M: () => o,
});
var a = _(622916),
    r = _(263449),
    n = _(255768);
function o(t, e) {
    !0 === e.debug &&
        (n.X
            ? a.kg.enable()
            : (0, a.Cf)(() => {
                  console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
              })),
        (0, r.nZ)().update(e.initialScope);
    let _ = new t(e);
    return E(_), _.init(), _;
}
function E(t) {
    (0, r.nZ)().setClient(t);
}
