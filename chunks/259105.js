i = { value: !0 };
var i,
    r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    a = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    })(),
    s = n(192379),
    o = f(s),
    l = f(n(476400)),
    u = f(n(995295)),
    c = f(n(726351)),
    d = f(n(512722));
function f(e) {
    return e && e.__esModule ? e : { default: e };
}
function _(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function p(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function h(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var m = (function (e) {
    function t() {
        _(this, t);
        var e = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (e.state = { initiated: !1 }), (e.onResize = e.onResize.bind(e)), e;
    }
    return (
        h(t, e),
        a(t, null, [
            {
                key: 'getDomNodeDimensions',
                value: function (e) {
                    var t = e.getBoundingClientRect();
                    return {
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left,
                        width: t.width,
                        height: t.height
                    };
                }
            }
        ]),
        a(t, [
            {
                key: 'componentDidMount',
                value: function () {
                    (this.parentNode = u.default.findDOMNode(this).parentNode),
                        (this.elementResizeDetector = (0, c.default)({
                            strategy: 'scroll',
                            callOnAdd: !1
                        })),
                        this.elementResizeDetector.listenTo(this.parentNode, this.onResize),
                        (this.componentIsMounted = !0),
                        this.onResize();
                }
            },
            {
                key: 'componentWillUnmount',
                value: function () {
                    (this.componentIsMounted = !1), this.elementResizeDetector.uninstall(this.parentNode);
                }
            },
            {
                key: 'onResize',
                value: function () {
                    var e = t.getDomNodeDimensions(this.parentNode);
                    this.componentIsMounted && this.setState(r({ initiated: !0 }, e));
                }
            },
            {
                key: 'render',
                value: function () {
                    if (((0, d.default)(this.props.children, 'Expected children to be one of function or React.Element'), !this.state.initiated)) return o.default.createElement('div', null);
                    if ('function' == typeof this.props.children) {
                        var e = this.props.children(this.state);
                        return e && s.Children.only(e);
                    }
                    return s.Children.only(o.default.cloneElement(this.props.children, this.state));
                }
            }
        ]),
        t
    );
})(s.Component);
(m.propTypes = {
    children: l.default.oneOfType([l.default.element, l.default.func]).isRequired
}),
    (t.default = m);
