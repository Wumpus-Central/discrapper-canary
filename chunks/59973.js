n.d(t, { m: () => l });
var r = n(573654),
    i = n(158545),
    a = n(144459),
    o = n(964742),
    s = {
        type: o.TL,
        payload: {
            clientOffset: null,
            sourceClientOffset: null,
        },
    };
function l(e) {
    return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { publishSource: !0 },
            r = n.publishSource,
            a = void 0 === r || r,
            l = n.clientOffset,
            p = n.getSourceClientOffset,
            _ = e.getMonitor(),
            m = e.getRegistry();
        e.dispatch((0, i.T)(l)), c(t, _, m);
        var h = f(t, _);
        if (null === h) return void e.dispatch(s);
        var g = null;
        if (l) {
            if (!p) throw Error("getSourceClientOffset must be defined");
            u(p), (g = p(h));
        }
        e.dispatch((0, i.T)(l, g));
        var E = m.getSource(h).beginDrag(_, h);
        if (null != E) {
            d(E), m.pinSource(h);
            var b = m.getSourceType(h);
            return {
                type: o.qu,
                payload: {
                    itemType: b,
                    item: E,
                    sourceId: h,
                    clientOffset: l || null,
                    sourceClientOffset: g || null,
                    isSourcePublic: !!a,
                },
            };
        }
    };
}
function c(e, t, n) {
    (0, r.k)(!t.isDragging(), "Cannot call beginDrag while dragging."),
        e.forEach(function (e) {
            (0, r.k)(n.getSource(e), "Expected sourceIds to be registered.");
        });
}
function u(e) {
    (0, r.k)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function d(e) {
    (0, r.k)((0, a.Kn)(e), "Item must be an object.");
}
function f(e, t) {
    for (var n = null, r = e.length - 1; r >= 0; r--)
        if (t.canDragSource(e[r])) {
            n = e[r];
            break;
        }
    return n;
}
