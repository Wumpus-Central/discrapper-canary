a.d(e, {
    K: () => i,
    M: () => o
});
var r = a(622916),
    _ = a(263449),
    n = a(255768);
function o(t, e) {
    !0 === e.debug &&
        (n.X
            ? r.kg.enable()
            : (0, r.Cf)(() => {
                  console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
              })),
        (0, _.nZ)().update(e.initialScope);
    let a = new t(e);
    return i(a), a.init(), a;
}
function i(t) {
    (0, _.nZ)().setClient(t);
}
