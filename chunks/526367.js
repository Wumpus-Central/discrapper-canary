n.d(t, { ZP: () => m });
var i = n(312089),
    r = n(190031);
n(476400);
var a = n(192379),
    s = n(995295),
    o = n(677166),
    l = n(57435),
    u = 'unmounted',
    c = 'exited',
    d = 'entering',
    f = 'entered',
    _ = 'exiting',
    p = (function (e) {
        function t(t, n) {
            i = e.call(this, t, n) || this;
            var i,
                r,
                a = n,
                s = a && !a.isMounting ? t.enter : t.appear;
            return (i.appearStatus = null), t.in ? (s ? ((r = c), (i.appearStatus = d)) : (r = f)) : (r = t.unmountOnExit || t.mountOnEnter ? u : c), (i.state = { status: r }), (i.nextCallback = null), i;
        }
        (0, r.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === u ? { status: c } : null;
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
                    i = this.props.timeout;
                return (
                    (e = t = n = i),
                    null != i && 'number' != typeof i && ((e = i.exit), (t = i.enter), (n = void 0 !== i.appear ? i.appear : t)),
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
                    var n = s.findDOMNode(this);
                    t === d ? this.performEnter(n, e) : this.performExit(n);
                } else this.props.unmountOnExit && this.state.status === c && this.setState({ status: u });
            }),
            (n.performEnter = function (e, t) {
                var n = this,
                    i = this.props.enter,
                    r = this.context ? this.context.isMounting : t,
                    a = this.getTimeouts(),
                    s = r ? a.appear : a.enter;
                if ((!t && !i) || o.Z.disabled) {
                    this.safeSetState({ status: f }, function () {
                        n.props.onEntered(e);
                    });
                    return;
                }
                this.props.onEnter(e, r),
                    this.safeSetState({ status: d }, function () {
                        n.props.onEntering(e, r),
                            n.onTransitionEnd(e, s, function () {
                                n.safeSetState({ status: f }, function () {
                                    n.props.onEntered(e, r);
                                });
                            });
                    });
            }),
            (n.performExit = function (e) {
                var t = this,
                    n = this.props.exit,
                    i = this.getTimeouts();
                if (!n || o.Z.disabled) {
                    this.safeSetState({ status: c }, function () {
                        t.props.onExited(e);
                    });
                    return;
                }
                this.props.onExit(e),
                    this.safeSetState({ status: _ }, function () {
                        t.props.onExiting(e),
                            t.onTransitionEnd(e, i.exit, function () {
                                t.safeSetState({ status: c }, function () {
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
                    (this.nextCallback = function (i) {
                        n && ((n = !1), (t.nextCallback = null), e(i));
                    }),
                    (this.nextCallback.cancel = function () {
                        n = !1;
                    }),
                    this.nextCallback
                );
            }),
            (n.onTransitionEnd = function (e, t, n) {
                this.setNextCallback(n);
                var i = null == t && !this.props.addEndListener;
                if (!e || i) {
                    setTimeout(this.nextCallback, 0);
                    return;
                }
                this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === u) return null;
                var t = this.props,
                    n = t.children,
                    r = (0, i.Z)(t, ['children']);
                if ((delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, 'function' == typeof n)) return a.createElement(l.Z.Provider, { value: null }, n(e, r));
                var s = a.Children.only(n);
                return a.createElement(l.Z.Provider, { value: null }, a.cloneElement(s, r));
            }),
            t
        );
    })(a.Component);
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
