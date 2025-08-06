n.d(t, { G: () => u });
var r = n(573654),
    i = n(178163),
    o = n(524962),
    a = n(373425),
    s = n(528302),
    l = n(509893),
    c = n(71052);
function u(e, t, n) {
    var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, s.U9)("DropTarget", "type, spec, collect[, options]", e, t, n, u);
    var d = e;
    "function" != typeof e &&
        ((0, r.k)(
            (0, s.m5)(e, !0),
            'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            e,
        ),
        (d = function () {
            return e;
        })),
        (0, r.k)(
            (0, s.PO)(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t,
        );
    var f = (0, c.S)(t);
    return (
        (0, r.k)(
            "function" == typeof n,
            'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            n,
        ),
        (0, r.k)(
            (0, s.PO)(u),
            'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            n,
        ),
        function (e) {
            return (0, l.K)({
                containerDisplayName: "DropTarget",
                createHandler: f,
                registerHandler: i.n,
                createMonitor: function (e) {
                    return new o.H(e);
                },
                createConnector: function (e) {
                    return new a.Y(e);
                },
                DecoratedComponent: e,
                getType: d,
                collect: n,
                options: u,
            });
        }
    );
}
