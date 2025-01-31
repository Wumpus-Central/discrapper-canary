n.d(t, { Z: () => r });
var i = n(501951);
function r(e, t, n) {
    return (
        (t = (0, i.Z)(t)) in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
