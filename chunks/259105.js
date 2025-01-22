i = { value: !0 };
var i,
    a =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    o = (function () {
        function e(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (n, r, i) {
            return r && e(n.prototype, r), i && e(n, i), n;
        };
    })(),
    s = r(192379),
    l = p(s),
    u = p(r(476400)),
    c = p(r(995295)),
    d = p(r(726351)),
    f = p(r(512722));
function p(e) {
    return e && e.__esModule ? e : { default: e };
}
function h(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function _(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function m(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function, not ' + typeof n);
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
}
var g = (function (e) {
    function n() {
        h(this, n);
        var e = _(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
        return (e.state = { initiated: !1 }), (e.onResize = e.onResize.bind(e)), e;
    }
    return (
        m(n, e),
        o(n, null, [
            {
                key: 'getDomNodeDimensions',
                value: function (e) {
                    var n = e.getBoundingClientRect();
                    return {
                        top: n.top,
                        right: n.right,
                        bottom: n.bottom,
                        left: n.left,
                        width: n.width,
                        height: n.height
                    };
                }
            }
        ]),
        o(n, [
            {
                key: 'componentDidMount',
                value: function () {
                    (this.parentNode = c.default.findDOMNode(this).parentNode),
                        (this.elementResizeDetector = (0, d.default)({
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
                    var e = n.getDomNodeDimensions(this.parentNode);
                    this.componentIsMounted && this.setState(a({ initiated: !0 }, e));
                }
            },
            {
                key: 'render',
                value: function () {
                    if (((0, f.default)(this.props.children, 'Expected children to be one of function or React.Element'), !this.state.initiated)) return l.default.createElement('div', null);
                    if ('function' == typeof this.props.children) {
                        var e = this.props.children(this.state);
                        return e && s.Children.only(e);
                    }
                    return s.Children.only(l.default.cloneElement(this.props.children, this.state));
                }
            }
        ]),
        n
    );
})(s.Component);
(g.propTypes = {
    children: u.default.oneOfType([u.default.element, u.default.func]).isRequired
}),
    (n.default = g);
