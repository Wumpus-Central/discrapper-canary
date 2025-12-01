r.d(t, {
    K: () => _,
    M: () => o,
});
var n = r(622916),
    a = r(263449),
    i = r(255768);
function o(e, t) {
    !0 === t.debug &&
        (i.X
            ? n.kg.enable()
            : (0, n.Cf)(() => {
                  console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
              })),
        (0, a.nZ)().update(t.initialScope);
    let r = new e(t);
    return _(r), r.init(), r;
}
function _(e) {
    (0, a.nZ)().setClient(e);
}
