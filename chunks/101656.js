(t.__esModule = !0), (t.default = void 0), a(n(476400));
var o = a(n(192379)),
    r = n(995295),
    i = a(n(883297));
function a(e) {
    return e && e.__esModule ? e : { default: e };
}
var u = (function (e) {
    function t() {
        for (var t, n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
        return (
            ((t = e.call.apply(e, [this].concat(o)) || this).handleEnter = function () {
                for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                return t.handleLifecycle('onEnter', 0, n);
            }),
            (t.handleEntering = function () {
                for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                return t.handleLifecycle('onEntering', 0, n);
            }),
            (t.handleEntered = function () {
                for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                return t.handleLifecycle('onEntered', 0, n);
            }),
            (t.handleExit = function () {
                for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                return t.handleLifecycle('onExit', 1, n);
            }),
            (t.handleExiting = function () {
                for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                return t.handleLifecycle('onExiting', 1, n);
            }),
            (t.handleExited = function () {
                for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                return t.handleLifecycle('onExited', 1, n);
            }),
            t
        );
    }
    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
    var n = t.prototype;
    return (
        (n.handleLifecycle = function (e, t, n) {
            var i,
                a = this.props.children,
                u = o.default.Children.toArray(a)[t];
            u.props[e] && (i = u.props)[e].apply(i, n), this.props[e] && this.props[e]((0, r.findDOMNode)(this));
        }),
        (n.render = function () {
            var e = this.props,
                t = e.children,
                n = e.in,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        o,
                        r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) t.indexOf((n = i[o])) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, ['children', 'in']),
                a = o.default.Children.toArray(t),
                u = a[0],
                s = a[1];
            return (
                delete r.onEnter,
                delete r.onEntering,
                delete r.onEntered,
                delete r.onExit,
                delete r.onExiting,
                delete r.onExited,
                o.default.createElement(
                    i.default,
                    r,
                    n
                        ? o.default.cloneElement(u, {
                              key: 'first',
                              onEnter: this.handleEnter,
                              onEntering: this.handleEntering,
                              onEntered: this.handleEntered
                          })
                        : o.default.cloneElement(s, {
                              key: 'second',
                              onEnter: this.handleExit,
                              onEntering: this.handleExiting,
                              onEntered: this.handleExited
                          })
                )
            );
        }),
        t
    );
})(o.default.Component);
(u.propTypes = {}), (t.default = u), (e.exports = t.default);
