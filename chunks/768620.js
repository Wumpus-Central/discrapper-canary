"use strict";
n.d(t, { S: () => l });
var r = n(321733),
    i = n(420563),
    s = n(988440),
    a = n(317374),
    o = { type: a.KR, payload: { clientOffset: null, sourceClientOffset: null } };
function l(e) {
    return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { publishSource: !0 },
            l = n.publishSource,
            u = n.clientOffset,
            c = n.getSourceClientOffset,
            d = e.getMonitor(),
            _ = e.getRegistry();
        e.dispatch((0, i.P)(u)),
            (E = t),
            (m = d),
            (g = _),
            (0, r.V)(!m.isDragging(), "Cannot call beginDrag while dragging."),
            E.forEach(function (e) {
                (0, r.V)(g.getSource(e), "Expected sourceIds to be registered.");
            });
        var f = (function (e, t) {
            for (var n = null, r = e.length - 1; r >= 0; r--)
                if (t.canDragSource(e[r])) {
                    n = e[r];
                    break;
                }
            return n;
        })(t, d);
        if (null === f) return void e.dispatch(o);
        var p = null;
        if (u) {
            if (!c) throw Error("getSourceClientOffset must be defined");
            (A = c),
                (0, r.V)(
                    "function" == typeof A,
                    "When clientOffset is provided, getSourceClientOffset must be a function.",
                ),
                (p = c(f));
        }
        e.dispatch((0, i.P)(u, p));
        var h = _.getSource(f).beginDrag(d, f);
        if (null != h) {
            (I = h), (0, r.V)((0, s.Gv)(I), "Item must be an object."), _.pinSource(f);
            var E,
                m,
                g,
                A,
                I,
                T = _.getSourceType(f);
            return {
                type: a.Vw,
                payload: {
                    itemType: T,
                    item: h,
                    sourceId: f,
                    clientOffset: u || null,
                    sourceClientOffset: p || null,
                    isSourcePublic: !!(void 0 === l || l),
                },
            };
        }
    };
}
