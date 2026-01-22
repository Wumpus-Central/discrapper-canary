n.d(t, { Ay: () => g });
var r = n(299146),
    i = n(47312);
n(655972);
var a = n(64700),
    s = n(340287),
    o = n(181729),
    l = n(167782),
    c = n(80292),
    u = "unmounted",
    d = "exited",
    f = "entering",
    p = "entered",
    _ = "exiting",
    h = (function (e) {
        function t(t, n) {
            var r,
                i = e.call(this, t, n) || this,
                a = n,
                s = a && !a.isMounting ? t.enter : t.appear;
            return (
                (i.appearStatus = null),
                t.in
                    ? s
                        ? ((r = d), (i.appearStatus = f))
                        : (r = p)
                    : (r = t.unmountOnExit || t.mountOnEnter ? u : d),
                (i.state = { status: r }),
                (i.nextCallback = null),
                i
            );
        }
        (0, i.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === u ? { status: d } : null;
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
                    this.props.in ? n !== f && n !== p && (t = f) : (n === f || n === p) && (t = _);
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
                    null != r &&
                        "number" != typeof r &&
                        ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                    {
                        exit: e,
                        enter: t,
                        appear: n,
                    }
                );
            }),
            (n.updateStatus = function (e, t) {
                if ((void 0 === e && (e = !1), null !== t))
                    if ((this.cancelNextCallback(), t === f)) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this);
                            n && (0, c.F)(n);
                        }
                        this.performEnter(e);
                    } else this.performExit();
                else this.props.unmountOnExit && this.state.status === d && this.setState({ status: u });
            }),
            (n.performEnter = function (e) {
                var t = this,
                    n = this.props.enter,
                    r = this.context ? this.context.isMounting : e,
                    i = this.props.nodeRef ? [r] : [s.findDOMNode(this), r],
                    a = i[0],
                    l = i[1],
                    c = this.getTimeouts(),
                    u = r ? c.appear : c.enter;
                (e || n) && !o.A.disabled
                    ? (this.props.onEnter(a, l),
                      this.safeSetState({ status: f }, function () {
                          t.props.onEntering(a, l),
                              t.onTransitionEnd(u, function () {
                                  t.safeSetState({ status: p }, function () {
                                      t.props.onEntered(a, l);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: p }, function () {
                          t.props.onEntered(a);
                      });
            }),
            (n.performExit = function () {
                var e = this,
                    t = this.props.exit,
                    n = this.getTimeouts(),
                    r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
                !t || o.A.disabled
                    ? this.safeSetState({ status: d }, function () {
                          e.props.onExited(r);
                      })
                    : (this.props.onExit(r),
                      this.safeSetState({ status: _ }, function () {
                          e.props.onExiting(r),
                              e.onTransitionEnd(n.exit, function () {
                                  e.safeSetState({ status: d }, function () {
                                      e.props.onExited(r);
                                  });
                              });
                      }));
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
            (n.onTransitionEnd = function (e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this),
                    r = null == e && !this.props.addEndListener;
                if (!n || r) return void setTimeout(this.nextCallback, 0);
                if (this.props.addEndListener) {
                    var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                        a = i[0],
                        o = i[1];
                    this.props.addEndListener(a, o);
                }
                null != e && setTimeout(this.nextCallback, e);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === u) return null;
                var t = this.props,
                    n = t.children,
                    i =
                        (t.in,
                        t.mountOnEnter,
                        t.unmountOnExit,
                        t.appear,
                        t.enter,
                        t.exit,
                        t.timeout,
                        t.addEndListener,
                        t.onEnter,
                        t.onEntering,
                        t.onEntered,
                        t.onExit,
                        t.onExiting,
                        t.onExited,
                        t.nodeRef,
                        (0, r.A)(t, [
                            "children",
                            "in",
                            "mountOnEnter",
                            "unmountOnExit",
                            "appear",
                            "enter",
                            "exit",
                            "timeout",
                            "addEndListener",
                            "onEnter",
                            "onEntering",
                            "onEntered",
                            "onExit",
                            "onExiting",
                            "onExited",
                            "nodeRef",
                        ]));
                return a.createElement(
                    l.A.Provider,
                    { value: null },
                    "function" == typeof n ? n(e, i) : a.cloneElement(a.Children.only(n), i),
                );
            }),
            t
        );
    })(a.Component);
function m() {}
(h.contextType = l.A),
    (h.propTypes = {}),
    (h.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: m,
        onEntering: m,
        onEntered: m,
        onExit: m,
        onExiting: m,
        onExited: m,
    }),
    (h.UNMOUNTED = u),
    (h.EXITED = d),
    (h.ENTERING = f),
    (h.ENTERED = p),
    (h.EXITING = _);
let g = h;
