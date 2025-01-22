r.d(n, {
    B0: function () {
        return c;
    },
    IP: function () {
        return l;
    },
    Qb: function () {
        return s;
    },
    UI: function () {
        return u;
    },
    j$: function () {
        return a;
    },
    je: function () {
        return o;
    }
});
var i = Symbol.for('FluidValue:config'),
    a = function (e) {
        return !!s(e);
    };
function o(e) {
    var n = s(e);
    return n ? n.get() : e;
}
function s(e) {
    if (e) return e[i];
}
function l(e, n) {
    Object.defineProperty(e, i, {
        value: n,
        configurable: !0
    });
}
function u(e, n) {
    var r = s(e);
    if (r)
        return (
            r.addChild(n),
            function () {
                return r.removeChild(n);
            }
        );
}
var c = (function () {
    return function e() {
        l(this, this);
    };
})();
