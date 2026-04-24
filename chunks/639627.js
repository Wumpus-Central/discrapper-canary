r.d(t, { I: () => f });
var n = r(321733),
    o = r(212246),
    i = r(541163),
    a = r(394886),
    s = r(201672),
    c = r(498969);
function u(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var d = ["canDrag", "beginDrag", "isDragging", "endDrag"],
    p = ["beginDrag"],
    l = (function () {
        var e;
        function t(e, r, n) {
            var o = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            u(this, "props", null),
                u(this, "spec", void 0),
                u(this, "monitor", void 0),
                u(this, "ref", void 0),
                u(this, "beginDrag", function () {
                    if (o.props) return o.spec.beginDrag(o.props, o.monitor, o.ref.current);
                }),
                (this.spec = e),
                (this.monitor = r),
                (this.ref = n);
        }
        return (
            (e = [
                {
                    key: "receiveProps",
                    value: function (e) {
                        this.props = e;
                    },
                },
                {
                    key: "canDrag",
                    value: function () {
                        return !!this.props && (!this.spec.canDrag || this.spec.canDrag(this.props, this.monitor));
                    },
                },
                {
                    key: "isDragging",
                    value: function (e, t) {
                        return (
                            !!this.props &&
                            (this.spec.isDragging
                                ? this.spec.isDragging(this.props, this.monitor)
                                : t === e.getSourceId())
                        );
                    },
                },
                {
                    key: "endDrag",
                    value: function () {
                        !this.props ||
                            (this.spec.endDrag && this.spec.endDrag(this.props, this.monitor, (0, s.PQ)(this.ref)));
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(t.prototype, e),
            t
        );
    })();
function f(e, t, r) {
    var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, s.cl)("DragSource", "type, spec, collect[, options]", e, t, r, u);
    var f = e;
    "function" != typeof e &&
        ((0, n.V)(
            (0, s.NE)(e),
            'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            e,
        ),
        (f = function () {
            return e;
        })),
        (0, n.V)(
            (0, s.Qd)(t),
            'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            t,
        );
    var h =
        (Object.keys(t).forEach(function (e) {
            (0, n.V)(
                d.indexOf(e) > -1,
                'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                d.join(", "),
                e,
            ),
                (0, n.V)(
                    "function" == typeof t[e],
                    "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
                    e,
                    e,
                    t[e],
                );
        }),
        p.forEach(function (e) {
            (0, n.V)(
                "function" == typeof t[e],
                "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
                e,
                e,
                t[e],
            );
        }),
        function (e, r) {
            return new l(t, e, r);
        });
    return (
        (0, n.V)(
            "function" == typeof r,
            'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            r,
        ),
        (0, n.V)(
            (0, s.Qd)(u),
            'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            r,
        ),
        function (e) {
            return (0, c.A)({
                containerDisplayName: "DragSource",
                createHandler: h,
                registerHandler: o.V,
                createConnector: function (e) {
                    return new i.b(e);
                },
                createMonitor: function (e) {
                    return new a.G(e);
                },
                DecoratedComponent: e,
                getType: f,
                collect: r,
                options: u,
            });
        }
    );
}
