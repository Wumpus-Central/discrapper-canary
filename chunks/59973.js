r.d(n, {
    m: function () {
        return u;
    }
});
var i = r(573654),
    a = r(158545),
    o = r(144459),
    s = r(964742),
    l = {
        type: s.TL,
        payload: {
            clientOffset: null,
            sourceClientOffset: null
        }
    };
function u(e) {
    return function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { publishSource: !0 },
            i = r.publishSource,
            o = void 0 === i || i,
            u = r.clientOffset,
            h = r.getSourceClientOffset,
            _ = e.getMonitor(),
            m = e.getRegistry();
        e.dispatch((0, a.T)(u)), c(n, _, m);
        var g = p(n, _);
        if (null === g) {
            e.dispatch(l);
            return;
        }
        var E = null;
        if (u) {
            if (!h) throw Error('getSourceClientOffset must be defined');
            d(h), (E = h(g));
        }
        e.dispatch((0, a.T)(u, E));
        var v = m.getSource(g).beginDrag(_, g);
        if (null != v) {
            f(v), m.pinSource(g);
            var y = m.getSourceType(g);
            return {
                type: s.qu,
                payload: {
                    itemType: y,
                    item: v,
                    sourceId: g,
                    clientOffset: u || null,
                    sourceClientOffset: E || null,
                    isSourcePublic: !!o
                }
            };
        }
    };
}
function c(e, n, r) {
    (0, i.k)(!n.isDragging(), 'Cannot call beginDrag while dragging.'),
        e.forEach(function (e) {
            (0, i.k)(r.getSource(e), 'Expected sourceIds to be registered.');
        });
}
function d(e) {
    (0, i.k)('function' == typeof e, 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function f(e) {
    (0, i.k)((0, o.Kn)(e), 'Item must be an object.');
}
function p(e, n) {
    for (var r = null, i = e.length - 1; i >= 0; i--)
        if (n.canDragSource(e[i])) {
            r = e[i];
            break;
        }
    return r;
}
