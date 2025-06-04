n.d(t, { _: () => c });
var r = n(573654),
    i = n(964742),
    o = n(144459);
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? a(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function l(e, t, n) {
    return (
        t in e
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
function c(e) {
    return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.getMonitor(),
            r = e.getRegistry();
        u(n),
            _(n).forEach(function (o, a) {
                var l = d(o, a, r, n),
                    c = {
                        type: i.rp,
                        payload: { dropResult: s(s({}, t), l) }
                    };
                e.dispatch(c);
            });
    };
}
function u(e) {
    (0, r.k)(e.isDragging(), 'Cannot call drop while not dragging.'), (0, r.k)(!e.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function d(e, t, n, r) {
    var i = n.getTarget(e),
        o = i ? i.drop(r, e) : void 0;
    return f(o), void 0 === o && (o = 0 === t ? {} : r.getDropResult()), o;
}
function f(e) {
    (0, r.k)(void 0 === e || (0, o.Kn)(e), 'Drop result must either be an object or undefined.');
}
function _(e) {
    var t = e.getTargetIds().filter(e.canDropOnTarget, e);
    return t.reverse(), t;
}
