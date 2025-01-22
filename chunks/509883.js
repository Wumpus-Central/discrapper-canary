r.d(n, {
    _: function () {
        return c;
    }
});
var i = r(573654),
    a = r(964742),
    o = r(144459);
function s(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function l(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? s(Object(r), !0).forEach(function (n) {
                  u(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : s(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function c(e) {
    return function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = e.getMonitor(),
            i = e.getRegistry();
        d(r),
            h(r).forEach(function (o, s) {
                var u = f(o, s, i, r),
                    c = {
                        type: a.rp,
                        payload: { dropResult: l(l({}, n), u) }
                    };
                e.dispatch(c);
            });
    };
}
function d(e) {
    (0, i.k)(e.isDragging(), 'Cannot call drop while not dragging.'), (0, i.k)(!e.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function f(e, n, r, i) {
    var a = r.getTarget(e),
        o = a ? a.drop(i, e) : void 0;
    return p(o), void 0 === o && (o = 0 === n ? {} : i.getDropResult()), o;
}
function p(e) {
    (0, i.k)(void 0 === e || (0, o.Kn)(e), 'Drop result must either be an object or undefined.');
}
function h(e) {
    var n = e.getTargetIds().filter(e.canDropOnTarget, e);
    return n.reverse(), n;
}
