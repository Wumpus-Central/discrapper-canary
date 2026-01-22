n.d(t, {
    A: () => i,
});
var r = n(684401);

function i(e, t, n) {
    return (
        (t = (0, r.A)(t)) in e
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
