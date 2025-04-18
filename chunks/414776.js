n.d(t, {
    B0: () => c,
    IP: () => s,
    Qb: () => o,
    UI: () => l,
    j$: () => i,
    je: () => a
});
var r = Symbol.for('FluidValue:config'),
    i = function (e) {
        return !!o(e);
    };
function a(e) {
    var t = o(e);
    return t ? t.get() : e;
}
function o(e) {
    if (e) return e[r];
}
function s(e, t) {
    Object.defineProperty(e, r, {
        value: t,
        configurable: !0
    });
}
function l(e, t) {
    var n = o(e);
    if (n)
        return (
            n.addChild(t),
            function () {
                return n.removeChild(t);
            }
        );
}
var c = (function () {
    return function () {
        s(this, this);
    };
})();
