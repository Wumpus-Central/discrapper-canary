n.d(t, { Z: () => p });
var r = n(44837),
    i = n(791819),
    a = n(282253);
n(476400);
var o = n(898061),
    s = n(862127),
    l = n(192379),
    c = n(924356),
    u = n(388757),
    d = function (e, t) {
        return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
                return (0, o.Z)(e, t);
            })
        );
    },
    f = function (e, t) {
        return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
                return (0, s.Z)(e, t);
            })
        );
    },
    _ = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                }),
                (t.onEnter = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        a = r[1];
                    t.removeClasses(i, 'exit'), t.addClass(i, a ? 'appear' : 'enter', 'base'), t.props.onEnter && t.props.onEnter(e, n);
                }),
                (t.onEntering = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        a = r[1] ? 'appear' : 'enter';
                    t.addClass(i, a, 'active'), t.props.onEntering && t.props.onEntering(e, n);
                }),
                (t.onEntered = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        a = r[1] ? 'appear' : 'enter';
                    t.removeClasses(i, a), t.addClass(i, a, 'done'), t.props.onEntered && t.props.onEntered(e, n);
                }),
                (t.onExit = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, 'appear'), t.removeClasses(n, 'enter'), t.addClass(n, 'exit', 'base'), t.props.onExit && t.props.onExit(e);
                }),
                (t.onExiting = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.addClass(n, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
                }),
                (t.onExited = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, 'exit'), t.addClass(n, 'exit', 'done'), t.props.onExited && t.props.onExited(e);
                }),
                (t.resolveArguments = function (e, n) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                }),
                (t.getClassNames = function (e) {
                    var n = t.props.classNames,
                        r = 'string' == typeof n,
                        i = r && n ? n + '-' : '',
                        a = r ? '' + i + e : n[e],
                        o = r ? a + '-active' : n[e + 'Active'],
                        s = r ? a + '-done' : n[e + 'Done'];
                    return {
                        baseClassName: a,
                        activeClassName: o,
                        doneClassName: s
                    };
                }),
                t
            );
        }
        (0, a.Z)(t, e);
        var n = t.prototype;
        return (
            (n.addClass = function (e, t, n) {
                var r = this.getClassNames(t)[n + 'ClassName'],
                    i = this.getClassNames('enter').doneClassName;
                'appear' === t && 'done' === n && i && (r += ' ' + i), 'active' === n && e && (0, u.Q)(e), r && ((this.appliedClasses[t][n] = r), d(e, r));
            }),
            (n.removeClasses = function (e, t) {
                var n = this.appliedClasses[t],
                    r = n.base,
                    i = n.active,
                    a = n.done;
                (this.appliedClasses[t] = {}), r && f(e, r), i && f(e, i), a && f(e, a);
            }),
            (n.render = function () {
                var e = this.props,
                    t = (e.classNames, (0, i.Z)(e, ['classNames']));
                return l.createElement(
                    c.ZP,
                    (0, r.Z)({}, t, {
                        onEnter: this.onEnter,
                        onEntered: this.onEntered,
                        onEntering: this.onEntering,
                        onExit: this.onExit,
                        onExiting: this.onExiting,
                        onExited: this.onExited
                    })
                );
            }),
            t
        );
    })(l.Component);
(_.defaultProps = { classNames: '' }), (_.propTypes = {});
let p = _;
