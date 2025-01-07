var i = r(312089),
    a = r(190031),
    s = r(476400);
var o = r(192379),
    l = r(995295),
    u = r(677166),
    c = r(57435),
    d = 'unmounted',
    f = 'exited',
    _ = 'entering',
    h = 'entered',
    p = 'exiting',
    m = (function (e) {
        function n(n, r) {
            i = e.call(this, n, r) || this;
            var i,
                a,
                s = r,
                o = s && !s.isMounting ? n.enter : n.appear;
            return (i.appearStatus = null), n.in ? (o ? ((a = f), (i.appearStatus = _)) : (a = h)) : (a = n.unmountOnExit || n.mountOnEnter ? d : f), (i.state = { status: a }), (i.nextCallback = null), i;
        }
        (0, a.Z)(n, e),
            (n.getDerivedStateFromProps = function (e, n) {
                return e.in && n.status === d ? { status: f } : null;
            });
        var r = n.prototype;
        return (
            (r.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (r.componentDidUpdate = function (e) {
                var n = null;
                if (e !== this.props) {
                    var r = this.state.status;
                    this.props.in ? r !== _ && r !== h && (n = _) : (r === _ || r === h) && (n = p);
                }
                this.updateStatus(!1, n);
            }),
            (r.componentWillUnmount = function () {
                this.cancelNextCallback();
            }),
            (r.getTimeouts = function () {
                var e,
                    n,
                    r,
                    i = this.props.timeout;
                return (
                    (e = n = r = i),
                    null != i && 'number' != typeof i && ((e = i.exit), (n = i.enter), (r = void 0 !== i.appear ? i.appear : n)),
                    {
                        exit: e,
                        enter: n,
                        appear: r
                    }
                );
            }),
            (r.updateStatus = function (e, n) {
                if ((void 0 === e && (e = !1), null !== n)) {
                    this.cancelNextCallback();
                    var r = l.findDOMNode(this);
                    n === _ ? this.performEnter(r, e) : this.performExit(r);
                } else this.props.unmountOnExit && this.state.status === f && this.setState({ status: d });
            }),
            (r.performEnter = function (e, n) {
                var r = this,
                    i = this.props.enter,
                    a = this.context ? this.context.isMounting : n,
                    s = this.getTimeouts(),
                    o = a ? s.appear : s.enter;
                if ((!n && !i) || u.Z.disabled) {
                    this.safeSetState({ status: h }, function () {
                        r.props.onEntered(e);
                    });
                    return;
                }
                this.props.onEnter(e, a),
                    this.safeSetState({ status: _ }, function () {
                        r.props.onEntering(e, a),
                            r.onTransitionEnd(e, o, function () {
                                r.safeSetState({ status: h }, function () {
                                    r.props.onEntered(e, a);
                                });
                            });
                    });
            }),
            (r.performExit = function (e) {
                var n = this,
                    r = this.props.exit,
                    i = this.getTimeouts();
                if (!r || u.Z.disabled) {
                    this.safeSetState({ status: f }, function () {
                        n.props.onExited(e);
                    });
                    return;
                }
                this.props.onExit(e),
                    this.safeSetState({ status: p }, function () {
                        n.props.onExiting(e),
                            n.onTransitionEnd(e, i.exit, function () {
                                n.safeSetState({ status: f }, function () {
                                    n.props.onExited(e);
                                });
                            });
                    });
            }),
            (r.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (r.safeSetState = function (e, n) {
                (n = this.setNextCallback(n)), this.setState(e, n);
            }),
            (r.setNextCallback = function (e) {
                var n = this,
                    r = !0;
                return (
                    (this.nextCallback = function (i) {
                        r && ((r = !1), (n.nextCallback = null), e(i));
                    }),
                    (this.nextCallback.cancel = function () {
                        r = !1;
                    }),
                    this.nextCallback
                );
            }),
            (r.onTransitionEnd = function (e, n, r) {
                this.setNextCallback(r);
                var i = null == n && !this.props.addEndListener;
                if (!e || i) {
                    setTimeout(this.nextCallback, 0);
                    return;
                }
                this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != n && setTimeout(this.nextCallback, n);
            }),
            (r.render = function () {
                var e = this.state.status;
                if (e === d) return null;
                var n = this.props,
                    r = n.children,
                    a = (0, i.Z)(n, ['children']);
                if ((delete a.in, delete a.mountOnEnter, delete a.unmountOnExit, delete a.appear, delete a.enter, delete a.exit, delete a.timeout, delete a.addEndListener, delete a.onEnter, delete a.onEntering, delete a.onEntered, delete a.onExit, delete a.onExiting, delete a.onExited, 'function' == typeof r)) return o.createElement(c.Z.Provider, { value: null }, r(e, a));
                var s = o.Children.only(r);
                return o.createElement(c.Z.Provider, { value: null }, o.cloneElement(s, a));
            }),
            n
        );
    })(o.Component);
function g() {}
(m.contextType = c.Z),
    (m.propTypes = {}),
    (m.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: g,
        onEntering: g,
        onEntered: g,
        onExit: g,
        onExiting: g,
        onExited: g
    }),
    (m.UNMOUNTED = 0),
    (m.EXITED = 1),
    (m.ENTERING = 2),
    (m.ENTERED = 3),
    (m.EXITING = 4),
    (n.ZP = m);
