r.d(t, { my: () => o });
var n = r(780755),
    i = r(272469);
function o(e, t, r) {
    try {
        Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 });
    } catch (r) {
        n.T && i.vF.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
