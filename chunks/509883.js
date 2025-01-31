n.d(t, { _: () => u });
var i = n(573654),
    r = n(964742),
    a = n(144459);
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? s(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (t) {
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
function u(e) {
    return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.getMonitor(),
            i = e.getRegistry();
        c(n),
            _(n).forEach(function (a, s) {
                var l = d(a, s, i, n),
                    u = {
                        type: r.rp,
                        payload: { dropResult: o(o({}, t), l) }
                    };
                e.dispatch(u);
            });
    };
}
function c(e) {
    (0, i.k)(e.isDragging(), 'Cannot call drop while not dragging.'), (0, i.k)(!e.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function d(e, t, n, i) {
    var r = n.getTarget(e),
        a = r ? r.drop(i, e) : void 0;
    return f(a), void 0 === a && (a = 0 === t ? {} : i.getDropResult()), a;
}
function f(e) {
    (0, i.k)(void 0 === e || (0, a.Kn)(e), 'Drop result must either be an object or undefined.');
}
function _(e) {
    var t = e.getTargetIds().filter(e.canDropOnTarget, e);
    return t.reverse(), t;
}
