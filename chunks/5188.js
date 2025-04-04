n.d(t, { Z: () => _ });
var r = n(910974),
    i = n(312089),
    o = n(190031);
n(476400);
var a = n(898061),
    s = n(862127),
    l = n(192379),
    c = n(526367),
    u = function (e, t) {
        return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
                return (0, a.Z)(e, t);
            })
        );
    },
    d = function (e, t) {
        return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
                return (0, s.Z)(e, t);
            })
        );
    },
    f = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                }),
                (t.onEnter = function (e, n) {
                    t.removeClasses(e, 'exit'), t.addClass(e, n ? 'appear' : 'enter', 'base'), t.props.onEnter && t.props.onEnter(e, n);
                }),
                (t.onEntering = function (e, n) {
                    var r = n ? 'appear' : 'enter';
                    t.addClass(e, r, 'active'), t.props.onEntering && t.props.onEntering(e, n);
                }),
                (t.onEntered = function (e, n) {
                    var r = n ? 'appear' : 'enter';
                    t.removeClasses(e, r), t.addClass(e, r, 'done'), t.props.onEntered && t.props.onEntered(e, n);
                }),
                (t.onExit = function (e) {
                    t.removeClasses(e, 'appear'), t.removeClasses(e, 'enter'), t.addClass(e, 'exit', 'base'), t.props.onExit && t.props.onExit(e);
                }),
                (t.onExiting = function (e) {
                    t.addClass(e, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
                }),
                (t.onExited = function (e) {
                    t.removeClasses(e, 'exit'), t.addClass(e, 'exit', 'done'), t.props.onExited && t.props.onExited(e);
                }),
                (t.getClassNames = function (e) {
                    var n = t.props.classNames,
                        r = 'string' == typeof n,
                        i = r && n ? n + '-' : '',
                        o = r ? '' + i + e : n[e],
                        a = r ? o + '-active' : n[e + 'Active'],
                        s = r ? o + '-done' : n[e + 'Done'];
                    return {
                        baseClassName: o,
                        activeClassName: a,
                        doneClassName: s
                    };
                }),
                t
            );
        }
        (0, o.Z)(t, e);
        var n = t.prototype;
        return (
            (n.addClass = function (e, t, n) {
                var r = this.getClassNames(t)[n + 'ClassName'];
                'appear' === t && 'done' === n && (r += ' ' + this.getClassNames('enter').doneClassName), 'active' === n && e && e.scrollTop, (this.appliedClasses[t][n] = r), u(e, r);
            }),
            (n.removeClasses = function (e, t) {
                var n = this.appliedClasses[t],
                    r = n.base,
                    i = n.active,
                    o = n.done;
                (this.appliedClasses[t] = {}), r && d(e, r), i && d(e, i), o && d(e, o);
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
(f.defaultProps = { classNames: '' }), (f.propTypes = {});
let _ = f;
