"use strict";
n.d(t, { Ay: () => m });
var r = n(299146),
    i = n(47312);
n(655972);
var s = n(64700),
    a = n(340287),
    o = n(181729),
    l = n(167782),
    u = n(80292),
    c = "unmounted",
    d = "exited",
    _ = "entering",
    f = "entered",
    p = "exiting",
    h = (function (e) {
        function t(t, n) {
            var r,
                i = e.call(this, t, n) || this,
                s = n && !n.isMounting ? t.enter : t.appear;
            return (
                (i.appearStatus = null),
                t.in
                    ? s
                        ? ((r = d), (i.appearStatus = _))
                        : (r = f)
                    : (r = t.unmountOnExit || t.mountOnEnter ? c : d),
                (i.state = { status: r }),
                (i.nextCallback = null),
                i
            );
        }
        (0, i.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === c ? { status: d } : null;
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
                    this.props.in ? n !== _ && n !== f && (t = _) : (n === _ || n === f) && (t = p);
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
                    { exit: e, enter: t, appear: n }
                );
            }),
            (n.updateStatus = function (e, t) {
                if ((void 0 === e && (e = !1), null !== t))
                    if ((this.cancelNextCallback(), t === _)) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var n = this.props.nodeRef ? this.props.nodeRef.current : a.findDOMNode(this);
                            n && (0, u.F)(n);
                        }
                        this.performEnter(e);
                    } else this.performExit();
                else this.props.unmountOnExit && this.state.status === d && this.setState({ status: c });
            }),
            (n.performEnter = function (e) {
                var t = this,
                    n = this.props.enter,
                    r = this.context ? this.context.isMounting : e,
                    i = this.props.nodeRef ? [r] : [a.findDOMNode(this), r],
                    s = i[0],
                    l = i[1],
                    u = this.getTimeouts(),
                    c = r ? u.appear : u.enter;
                (e || n) && !o.A.disabled
                    ? (this.props.onEnter(s, l),
                      this.safeSetState({ status: _ }, function () {
                          t.props.onEntering(s, l),
                              t.onTransitionEnd(c, function () {
                                  t.safeSetState({ status: f }, function () {
                                      t.props.onEntered(s, l);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: f }, function () {
                          t.props.onEntered(s);
                      });
            }),
            (n.performExit = function () {
                var e = this,
                    t = this.props.exit,
                    n = this.getTimeouts(),
                    r = this.props.nodeRef ? void 0 : a.findDOMNode(this);
                !t || o.A.disabled
                    ? this.safeSetState({ status: d }, function () {
                          e.props.onExited(r);
                      })
                    : (this.props.onExit(r),
                      this.safeSetState({ status: p }, function () {
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
                var n = this.props.nodeRef ? this.props.nodeRef.current : a.findDOMNode(this),
                    r = null == e && !this.props.addEndListener;
                if (!n || r) return void setTimeout(this.nextCallback, 0);
                if (this.props.addEndListener) {
                    var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                        s = i[0],
                        o = i[1];
                    this.props.addEndListener(s, o);
                }
                null != e && setTimeout(this.nextCallback, e);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === c) return null;
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
                return s.createElement(
                    l.A.Provider,
                    { value: null },
                    "function" == typeof n ? n(e, i) : s.cloneElement(s.Children.only(n), i),
                );
            }),
            t
        );
    })(s.Component);
function E() {}
(h.contextType = l.A),
    (h.propTypes = {}),
    (h.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: E,
        onEntering: E,
        onEntered: E,
        onExit: E,
        onExiting: E,
        onExited: E,
    }),
    (h.UNMOUNTED = c),
    (h.EXITED = d),
    (h.ENTERING = _),
    (h.ENTERED = f),
    (h.EXITING = p);
let m = h;
