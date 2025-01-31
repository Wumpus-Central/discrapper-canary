a.d(e, {
    K: () => i,
    M: () => _
});
var r = a(622916),
    n = a(263449),
    o = a(255768);
function _(t, e) {
    !0 === e.debug &&
        (o.X
            ? r.kg.enable()
            : (0, r.Cf)(() => {
                  console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
              })),
        (0, n.nZ)().update(e.initialScope);
    let a = new t(e);
    return i(a), a.init(), a;
}
function i(t) {
    (0, n.nZ)().setClient(t);
}
