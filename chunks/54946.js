"use strict";
n.d(t, { q: () => l });
var r = n(321733),
    i = n(317374),
    s = n(988440);
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
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? a(Object(n), !0).forEach(function (t) {
                  var r, i, s;
                  (r = e),
                      (i = t),
                      (s = n[t]),
                      i in r
                          ? Object.defineProperty(r, i, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (r[i] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function l(e) {
    return function () {
        var t,
            n,
            a,
            l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            u = e.getMonitor(),
            c = e.getRegistry();
        (t = u),
            (0, r.V)(t.isDragging(), "Cannot call drop while not dragging."),
            (0, r.V)(!t.didDrop(), "Cannot call drop twice during one drag operation."),
            ((a = (n = u).getTargetIds().filter(n.canDropOnTarget, n)).reverse(), a).forEach(function (t, n) {
                var a,
                    d,
                    _,
                    f,
                    p,
                    h,
                    E,
                    m =
                        ((a = t),
                        (d = n),
                        (_ = c),
                        (f = u),
                        (E = h = (p = _.getTarget(a)) ? p.drop(f, a) : void 0),
                        (0, r.V)(void 0 === E || (0, s.Gv)(E), "Drop result must either be an object or undefined."),
                        void 0 === h && (h = 0 === d ? {} : f.getDropResult()),
                        h),
                    g = { type: i.q2, payload: { dropResult: o(o({}, l), m) } };
                e.dispatch(g);
            });
    };
}
