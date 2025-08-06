n.d(t, { E: () => u });
var r = n(573654),
    i = n(178163),
    o = n(63222),
    a = n(969357),
    s = n(528302),
    l = n(509893),
    c = n(23546);
function u(e, t, n) {
    var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, s.U9)('DragSource', 'type, spec, collect[, options]', e, t, n, u);
    var d = e;
    ('function' != typeof e &&
        ((0, r.k)((0, s.m5)(e), 'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', e),
        (d = function () {
            return e;
        })),
        (0, r.k)((0, s.PO)(t), 'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t));
    var f = (0, c.a)(t);
    return (
        (0, r.k)('function' == typeof n, 'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', n),
        (0, r.k)((0, s.PO)(u), 'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', n),
        function (e) {
            return (0, l.K)({
                containerDisplayName: 'DragSource',
                createHandler: f,
                registerHandler: i.w,
                createConnector: function (e) {
                    return new o.x(e);
                },
                createMonitor: function (e) {
                    return new a.p(e);
                },
                DecoratedComponent: e,
                getType: d,
                collect: n,
                options: u
            });
        }
    );
}
