r.d(n, {
    u: function () {
        return p;
    }
});
var i = r(141725),
    a = r(830651),
    o = r(164441),
    s = r(97820),
    l = r(43266),
    u = r(144459);
function c(e, n) {
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
function d(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? c(Object(r), !0).forEach(function (n) {
                  f(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
function f(e, n, r) {
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
function p() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 ? arguments[1] : void 0;
    return {
        dirtyHandlerIds: (0, s.u)(e.dirtyHandlerIds, {
            type: n.type,
            payload: d(d({}, n.payload), {}, { prevTargetIds: (0, u.U2)(e, 'dragOperation.targetIds', []) })
        }),
        dragOffset: (0, i.u)(e.dragOffset, n),
        refCount: (0, o.u)(e.refCount, n),
        dragOperation: (0, a.u)(e.dragOperation, n),
        stateId: (0, l.u)(e.stateId)
    };
}
