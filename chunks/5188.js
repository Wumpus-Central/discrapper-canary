var i = r(910974),
    a = r(312089),
    s = r(190031),
    o = r(476400);
var l = r(898061),
    u = r(862127),
    c = r(192379),
    d = r(526367),
    f = function (e, n) {
        return (
            e &&
            n &&
            n.split(' ').forEach(function (n) {
                return (0, l.Z)(e, n);
            })
        );
    },
    _ = function (e, n) {
        return (
            e &&
            n &&
            n.split(' ').forEach(function (n) {
                return (0, u.Z)(e, n);
            })
        );
    },
    h = (function (e) {
        function n() {
            for (var n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return (
                ((n = e.call.apply(e, [this].concat(i)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                }),
                (n.onEnter = function (e, r) {
                    n.removeClasses(e, 'exit'), n.addClass(e, r ? 'appear' : 'enter', 'base'), n.props.onEnter && n.props.onEnter(e, r);
                }),
                (n.onEntering = function (e, r) {
                    var i = r ? 'appear' : 'enter';
                    n.addClass(e, i, 'active'), n.props.onEntering && n.props.onEntering(e, r);
                }),
                (n.onEntered = function (e, r) {
                    var i = r ? 'appear' : 'enter';
                    n.removeClasses(e, i), n.addClass(e, i, 'done'), n.props.onEntered && n.props.onEntered(e, r);
                }),
                (n.onExit = function (e) {
                    n.removeClasses(e, 'appear'), n.removeClasses(e, 'enter'), n.addClass(e, 'exit', 'base'), n.props.onExit && n.props.onExit(e);
                }),
                (n.onExiting = function (e) {
                    n.addClass(e, 'exit', 'active'), n.props.onExiting && n.props.onExiting(e);
                }),
                (n.onExited = function (e) {
                    n.removeClasses(e, 'exit'), n.addClass(e, 'exit', 'done'), n.props.onExited && n.props.onExited(e);
                }),
                (n.getClassNames = function (e) {
                    var r = n.props.classNames,
                        i = 'string' == typeof r,
                        a = i && r ? r + '-' : '',
                        s = i ? '' + a + e : r[e],
                        o = i ? s + '-active' : r[e + 'Active'],
                        l = i ? s + '-done' : r[e + 'Done'];
                    return {
                        baseClassName: s,
                        activeClassName: o,
                        doneClassName: l
                    };
                }),
                n
            );
        }
        (0, s.Z)(n, e);
        var r = n.prototype;
        return (
            (r.addClass = function (e, n, r) {
                var i = this.getClassNames(n)[r + 'ClassName'];
                'appear' === n && 'done' === r && (i += ' ' + this.getClassNames('enter').doneClassName), 'active' === r && e && e.scrollTop, (this.appliedClasses[n][r] = i), f(e, i);
            }),
            (r.removeClasses = function (e, n) {
                var r = this.appliedClasses[n],
                    i = r.base,
                    a = r.active,
                    s = r.done;
                (this.appliedClasses[n] = {}), i && _(e, i), a && _(e, a), s && _(e, s);
            }),
            (r.render = function () {
                var e = this.props,
                    n = (e.classNames, (0, a.Z)(e, ['classNames']));
                return c.createElement(
                    d.ZP,
                    (0, i.Z)({}, n, {
                        onEnter: this.onEnter,
                        onEntered: this.onEntered,
                        onEntering: this.onEntering,
                        onExit: this.onExit,
                        onExiting: this.onExiting,
                        onExited: this.onExited
                    })
                );
            }),
            n
        );
    })(c.Component);
(h.defaultProps = { classNames: '' }), (h.propTypes = {}), (n.Z = h);
