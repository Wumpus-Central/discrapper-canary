n.d(t, { m: () => l });
var i = n(573654),
    r = n(158545),
    a = n(144459),
    s = n(964742),
    o = {
        type: s.TL,
        payload: {
            clientOffset: null,
            sourceClientOffset: null
        }
    };
function l(e) {
    return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { publishSource: !0 },
            i = n.publishSource,
            a = void 0 === i || i,
            l = n.clientOffset,
            _ = n.getSourceClientOffset,
            p = e.getMonitor(),
            h = e.getRegistry();
        e.dispatch((0, r.T)(l)), u(t, p, h);
        var m = f(t, p);
        if (null === m) {
            e.dispatch(o);
            return;
        }
        var g = null;
        if (l) {
            if (!_) throw Error('getSourceClientOffset must be defined');
            c(_), (g = _(m));
        }
        e.dispatch((0, r.T)(l, g));
        var E = h.getSource(m).beginDrag(p, m);
        if (null != E) {
            d(E), h.pinSource(m);
            var v = h.getSourceType(m);
            return {
                type: s.qu,
                payload: {
                    itemType: v,
                    item: E,
                    sourceId: m,
                    clientOffset: l || null,
                    sourceClientOffset: g || null,
                    isSourcePublic: !!a
                }
            };
        }
    };
}
function u(e, t, n) {
    (0, i.k)(!t.isDragging(), 'Cannot call beginDrag while dragging.'),
        e.forEach(function (e) {
            (0, i.k)(n.getSource(e), 'Expected sourceIds to be registered.');
        });
}
function c(e) {
    (0, i.k)('function' == typeof e, 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function d(e) {
    (0, i.k)((0, a.Kn)(e), 'Item must be an object.');
}
function f(e, t) {
    for (var n = null, i = e.length - 1; i >= 0; i--)
        if (t.canDragSource(e[i])) {
            n = e[i];
            break;
        }
    return n;
}
