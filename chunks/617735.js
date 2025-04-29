r.d(t, { G: () => d });
var n = r(573654);
if (12633 == r.j) var o = r(178163);
if (12633 == r.j) var i = r(524962);
if (12633 == r.j) var a = r(373425);
if (12633 == r.j) var s = r(528302);
if (12633 == r.j) var c = r(509893);
if (12633 == r.j) var u = r(71052);
function d(e, t, r) {
    var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, s.U9)('DropTarget', 'type, spec, collect[, options]', e, t, r, d);
    var p = e;
    'function' != typeof e &&
        ((0, n.k)((0, s.m5)(e, !0), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', e),
        (p = function () {
            return e;
        })),
        (0, n.k)((0, s.PO)(t), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', t);
    var f = (0, u.S)(t);
    return (
        (0, n.k)('function' == typeof r, 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', r),
        (0, n.k)((0, s.PO)(d), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', r),
        function (e) {
            return (0, c.K)({
                containerDisplayName: 'DropTarget',
                createHandler: f,
                registerHandler: o.n,
                createMonitor: function (e) {
                    return new i.H(e);
                },
                createConnector: function (e) {
                    return new a.Y(e);
                },
                DecoratedComponent: e,
                getType: p,
                collect: r,
                options: d
            });
        }
    );
}
