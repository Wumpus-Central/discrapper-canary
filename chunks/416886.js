e.d(r, { A: () => n });
var o = e(682465);
function n(t, r, e) {
    return (
        (r = (0, o.A)(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
        t
    );
}
