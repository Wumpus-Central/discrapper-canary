(t.__esModule = !0), (t.default = t.EXITING = t.ENTERED = t.ENTERING = t.EXITED = t.UNMOUNTED = void 0);
var o = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) {
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    o.get || o.set ? Object.defineProperty(t, n, o) : (t[n] = e[n]);
                }
        }
        return (t.default = e), t;
    })(n(476400)),
    r = u(n(192379)),
    i = u(n(995295)),
    a = n(823189);
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
n(950295);
var s = 'unmounted';
t.UNMOUNTED = s;
var l = 'exited';
t.EXITED = l;
var c = 'entering';
t.ENTERING = c;
var p = 'entered';
t.ENTERED = p;
var d = 'exiting';
t.EXITING = d;
var f = (function (e) {
    function t(t, n) {
        var o,
            r = e.call(this, t, n) || this,
            i = n.transitionGroup,
            a = i && !i.isMounting ? t.enter : t.appear;
        return (r.appearStatus = null), t.in ? (a ? ((o = l), (r.appearStatus = c)) : (o = p)) : (o = t.unmountOnExit || t.mountOnEnter ? s : l), (r.state = { status: o }), (r.nextCallback = null), r;
    }
    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
    var n = t.prototype;
    return (
        (n.getChildContext = function () {
            return { transitionGroup: null };
        }),
        (t.getDerivedStateFromProps = function (e, t) {
            return e.in && t.status === s ? { status: l } : null;
        }),
        (n.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
        }),
        (n.componentDidUpdate = function (e) {
            var t = null;
            if (e !== this.props) {
                var n = this.state.status;
                this.props.in ? n !== c && n !== p && (t = c) : (n === c || n === p) && (t = d);
            }
            this.updateStatus(!1, t);
        }),
        (n.componentWillUnmount = function () {
            this.cancelNextCallback();
        }),
        (n.getTimeouts = function () {
            var e,
                t,
                n,
                o = this.props.timeout;
            return (
                (e = t = n = o),
                null != o && 'number' != typeof o && ((e = o.exit), (t = o.enter), (n = void 0 !== o.appear ? o.appear : t)),
                {
                    exit: e,
                    enter: t,
                    appear: n
                }
            );
        }),
        (n.updateStatus = function (e, t) {
            if ((void 0 === e && (e = !1), null !== t)) {
                this.cancelNextCallback();
                var n = i.default.findDOMNode(this);
                t === c ? this.performEnter(n, e) : this.performExit(n);
            } else this.props.unmountOnExit && this.state.status === l && this.setState({ status: s });
        }),
        (n.performEnter = function (e, t) {
            var n = this,
                o = this.props.enter,
                r = this.context.transitionGroup ? this.context.transitionGroup.isMounting : t,
                i = this.getTimeouts(),
                a = r ? i.appear : i.enter;
            if (!t && !o)
                return void this.safeSetState({ status: p }, function () {
                    n.props.onEntered(e);
                });
            this.props.onEnter(e, r),
                this.safeSetState({ status: c }, function () {
                    n.props.onEntering(e, r),
                        n.onTransitionEnd(e, a, function () {
                            n.safeSetState({ status: p }, function () {
                                n.props.onEntered(e, r);
                            });
                        });
                });
        }),
        (n.performExit = function (e) {
            var t = this,
                n = this.props.exit,
                o = this.getTimeouts();
            if (!n)
                return void this.safeSetState({ status: l }, function () {
                    t.props.onExited(e);
                });
            this.props.onExit(e),
                this.safeSetState({ status: d }, function () {
                    t.props.onExiting(e),
                        t.onTransitionEnd(e, o.exit, function () {
                            t.safeSetState({ status: l }, function () {
                                t.props.onExited(e);
                            });
                        });
                });
        }),
        (n.cancelNextCallback = function () {
            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
        }),
        (n.safeSetState = function (e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
        }),
        (n.setNextCallback = function (e) {
            var t = this,
                n = !0;
            return (
                (this.nextCallback = function (o) {
                    n && ((n = !1), (t.nextCallback = null), e(o));
                }),
                (this.nextCallback.cancel = function () {
                    n = !1;
                }),
                this.nextCallback
            );
        }),
        (n.onTransitionEnd = function (e, t, n) {
            this.setNextCallback(n);
            var o = null == t && !this.props.addEndListener;
            if (!e || o) return void setTimeout(this.nextCallback, 0);
            this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t);
        }),
        (n.render = function () {
            var e = this.state.status;
            if (e === s) return null;
            var t = this.props,
                n = t.children,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        o,
                        r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) t.indexOf((n = i[o])) >= 0 || (r[n] = e[n]);
                    return r;
                })(t, ['children']);
            if ((delete o.in, delete o.mountOnEnter, delete o.unmountOnExit, delete o.appear, delete o.enter, delete o.exit, delete o.timeout, delete o.addEndListener, delete o.onEnter, delete o.onEntering, delete o.onEntered, delete o.onExit, delete o.onExiting, delete o.onExited, 'function' == typeof n)) return n(e, o);
            var i = r.default.Children.only(n);
            return r.default.cloneElement(i, o);
        }),
        t
    );
})(r.default.Component);
function h() {}
(f.contextTypes = { transitionGroup: o.object }),
    (f.childContextTypes = {
        transitionGroup: function () {}
    }),
    (f.propTypes = {}),
    (f.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: h,
        onEntering: h,
        onEntered: h,
        onExit: h,
        onExiting: h,
        onExited: h
    }),
    (f.UNMOUNTED = 0),
    (f.EXITED = 1),
    (f.ENTERING = 2),
    (f.ENTERED = 3),
    (f.EXITING = 4),
    (t.default = (0, a.polyfill)(f));
