(t.__esModule = !0),
    (t.default = void 0),
    (function (e) {
        if (!e || !e.__esModule) {
            var t = {};
            if (null != e) {
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        o.get || o.set ? Object.defineProperty(t, n, o) : (t[n] = e[n]);
                    }
            }
            t.default = e;
        }
    })(n(476400));
var o = u(n(121116)),
    r = u(n(938398)),
    i = u(n(192379)),
    a = u(n(669270));
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
function s() {
    return (s =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
        }).apply(this, arguments);
}
n(950295);
var l = function (e, t) {
        return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
                return (0, o.default)(e, t);
            })
        );
    },
    c = function (e, t) {
        return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
                return (0, r.default)(e, t);
            })
        );
    },
    p = (function (e) {
        function t() {
            for (var t, n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (
                ((t = e.call.apply(e, [this].concat(o)) || this).onEnter = function (e, n) {
                    var o = t.getClassNames(n ? 'appear' : 'enter').className;
                    t.removeClasses(e, 'exit'), l(e, o), t.props.onEnter && t.props.onEnter(e, n);
                }),
                (t.onEntering = function (e, n) {
                    var o = t.getClassNames(n ? 'appear' : 'enter').activeClassName;
                    t.reflowAndAddClass(e, o), t.props.onEntering && t.props.onEntering(e, n);
                }),
                (t.onEntered = function (e, n) {
                    var o = t.getClassNames('appear').doneClassName,
                        r = t.getClassNames('enter').doneClassName;
                    t.removeClasses(e, n ? 'appear' : 'enter'), l(e, n ? o + ' ' + r : r), t.props.onEntered && t.props.onEntered(e, n);
                }),
                (t.onExit = function (e) {
                    var n = t.getClassNames('exit').className;
                    t.removeClasses(e, 'appear'), t.removeClasses(e, 'enter'), l(e, n), t.props.onExit && t.props.onExit(e);
                }),
                (t.onExiting = function (e) {
                    var n = t.getClassNames('exit').activeClassName;
                    t.reflowAndAddClass(e, n), t.props.onExiting && t.props.onExiting(e);
                }),
                (t.onExited = function (e) {
                    var n = t.getClassNames('exit').doneClassName;
                    t.removeClasses(e, 'exit'), l(e, n), t.props.onExited && t.props.onExited(e);
                }),
                (t.getClassNames = function (e) {
                    var n = t.props.classNames,
                        o = 'string' == typeof n,
                        r = o && n ? n + '-' : '',
                        i = o ? r + e : n[e],
                        a = o ? i + '-active' : n[e + 'Active'],
                        u = o ? i + '-done' : n[e + 'Done'];
                    return {
                        className: i,
                        activeClassName: a,
                        doneClassName: u
                    };
                }),
                t
            );
        }
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
        var n = t.prototype;
        return (
            (n.removeClasses = function (e, t) {
                var n = this.getClassNames(t),
                    o = n.className,
                    r = n.activeClassName,
                    i = n.doneClassName;
                o && c(e, o), r && c(e, r), i && c(e, i);
            }),
            (n.reflowAndAddClass = function (e, t) {
                t && (e && e.scrollTop, l(e, t));
            }),
            (n.render = function () {
                var e = s({}, this.props);
                return (
                    delete e.classNames,
                    i.default.createElement(
                        a.default,
                        s({}, e, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        })
                    )
                );
            }),
            t
        );
    })(i.default.Component);
(p.defaultProps = { classNames: '' }), (p.propTypes = {}), (t.default = p), (e.exports = t.default);
