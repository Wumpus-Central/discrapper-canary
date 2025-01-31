s.d(e, { xp: () => r });
var n = s(176984),
    i = s(622916);
function r(t, e, s) {
    try {
        Object.defineProperty(t, e, {
            value: s,
            writable: !0,
            configurable: !0
        });
    } catch (s) {
        n.X && i.kg.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
}
