n.d(t, { ZP: () => m });
var r = n(312089),
    i = n(190031);
n(476400);
var o = n(192379),
    a = n(995295),
    s = n(677166),
    l = n(57435),
    c = 'unmounted',
    u = 'exited',
    d = 'entering',
    f = 'entered',
    _ = 'exiting',
    p = (function (e) {
        function t(t, n) {
            var r,
                i = e.call(this, t, n) || this,
                o = n,
                a = o && !o.isMounting ? t.enter : t.appear;
            return (i.appearStatus = null), t.in ? (a ? ((r = u), (i.appearStatus = d)) : (r = f)) : (r = t.unmountOnExit || t.mountOnEnter ? c : u), (i.state = { status: r }), (i.nextCallback = null), i;
        }
        (0, i.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === c ? { status: u } : null;
            });
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== d && n !== f && (t = d) : (n === d || n === f) && (t = _);
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
                    r = this.props.timeout;
                return (
                    (e = t = n = r),
                    null != r && 'number' != typeof r && ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
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
                    var n = a.findDOMNode(this);
                    t === d ? this.performEnter(n, e) : this.performExit(n);
                } else this.props.unmountOnExit && this.state.status === u && this.setState({ status: c });
            }),
            (n.performEnter = function (e, t) {
                var n = this,
                    r = this.props.enter,
                    i = this.context ? this.context.isMounting : t,
                    o = this.getTimeouts(),
                    a = i ? o.appear : o.enter;
                if ((!t && !r) || s.Z.disabled)
                    return void this.safeSetState({ status: f }, function () {
                        n.props.onEntered(e);
                    });
                this.props.onEnter(e, i),
                    this.safeSetState({ status: d }, function () {
                        n.props.onEntering(e, i),
                            n.onTransitionEnd(e, a, function () {
                                n.safeSetState({ status: f }, function () {
                                    n.props.onEntered(e, i);
                                });
                            });
                    });
            }),
            (n.performExit = function (e) {
                var t = this,
                    n = this.props.exit,
                    r = this.getTimeouts();
                if (!n || s.Z.disabled)
                    return void this.safeSetState({ status: u }, function () {
                        t.props.onExited(e);
                    });
                this.props.onExit(e),
                    this.safeSetState({ status: _ }, function () {
                        t.props.onExiting(e),
                            t.onTransitionEnd(e, r.exit, function () {
                                t.safeSetState({ status: u }, function () {
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
                    (this.nextCallback = function (r) {
                        n && ((n = !1), (t.nextCallback = null), e(r));
                    }),
                    (this.nextCallback.cancel = function () {
                        n = !1;
                    }),
                    this.nextCallback
                );
            }),
            (n.onTransitionEnd = function (e, t, n) {
                this.setNextCallback(n);
                var r = null == t && !this.props.addEndListener;
                if (!e || r) return void setTimeout(this.nextCallback, 0);
                this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === c) return null;
                var t = this.props,
                    n = t.children,
                    i = (0, r.Z)(t, ['children']);
                if ((delete i.in, delete i.mountOnEnter, delete i.unmountOnExit, delete i.appear, delete i.enter, delete i.exit, delete i.timeout, delete i.addEndListener, delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, 'function' == typeof n)) return o.createElement(l.Z.Provider, { value: null }, n(e, i));
                var a = o.Children.only(n);
                return o.createElement(l.Z.Provider, { value: null }, o.cloneElement(a, i));
            }),
            t
        );
    })(o.Component);
function h() {}
(p.contextType = l.Z),
    (p.propTypes = {}),
    (p.defaultProps = {
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
    (p.UNMOUNTED = 0),
    (p.EXITED = 1),
    (p.ENTERING = 2),
    (p.ENTERED = 3),
    (p.EXITING = 4);
let m = p;
