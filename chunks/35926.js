r.d(t, { Z: () => n });
var a = r(21075);
function n(e, t, r) {
    return (
        (t = (0, a.Z)(t)) in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
