n.d(t, {
    B0: () => u,
    IP: () => o,
    Qb: () => s,
    UI: () => l,
    j$: () => r,
    je: () => a
});
var i = Symbol.for('FluidValue:config'),
    r = function (e) {
        return !!s(e);
    };
function a(e) {
    var t = s(e);
    return t ? t.get() : e;
}
function s(e) {
    if (e) return e[i];
}
function o(e, t) {
    Object.defineProperty(e, i, {
        value: t,
        configurable: !0
    });
}
function l(e, t) {
    var n = s(e);
    if (n)
        return (
            n.addChild(t),
            function () {
                return n.removeChild(t);
            }
        );
}
var u = (function () {
    return function () {
        o(this, this);
    };
})();
