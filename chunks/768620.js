"use strict";
n.d(t, { S: () => l });
var r = n(321733),
    i = n(420563),
    a = n(988440),
    s = n(317374),
    o = { type: s.KR, payload: { clientOffset: null, sourceClientOffset: null } };
function l(e) {
    return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { publishSource: !0 },
            r = n.publishSource,
            a = void 0 === r || r,
            l = n.clientOffset,
            f = n.getSourceClientOffset,
            p = e.getMonitor(),
            h = e.getRegistry();
        e.dispatch((0, i.P)(l)), u(t, p, h);
        var m = _(t, p);
        if (null === m) return void e.dispatch(o);
        var g = null;
        if (l) {
            if (!f) throw Error("getSourceClientOffset must be defined");
            c(f), (g = f(m));
        }
        e.dispatch((0, i.P)(l, g));
        var E = h.getSource(m).beginDrag(p, m);
        if (null != E) {
            d(E), h.pinSource(m);
            var A = h.getSourceType(m);
            return {
                type: s.Vw,
                payload: {
                    itemType: A,
                    item: E,
                    sourceId: m,
                    clientOffset: l || null,
                    sourceClientOffset: g || null,
                    isSourcePublic: !!a,
                },
            };
        }
    };
}
function u(e, t, n) {
    (0, r.V)(!t.isDragging(), "Cannot call beginDrag while dragging."),
        e.forEach(function (e) {
            (0, r.V)(n.getSource(e), "Expected sourceIds to be registered.");
        });
}
function c(e) {
    (0, r.V)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function d(e) {
    (0, r.V)((0, a.Gv)(e), "Item must be an object.");
}
function _(e, t) {
    for (var n = null, r = e.length - 1; r >= 0; r--)
        if (t.canDragSource(e[r])) {
            n = e[r];
            break;
        }
    return n;
}
