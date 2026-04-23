"use strict";
r.d(t, { A: () => y });
var n = r(1139),
    a = r(299146),
    s = r(47312);
function i(e, t) {
    return e
        .replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
        .replace(/\s+/g, " ")
        .replace(/^\s*|\s*$/g, "");
}
r(655972);
var o = r(64700),
    l = r(340287),
    u = r(167782),
    c = function (e) {
        return e.scrollTop;
    },
    d = "unmounted",
    f = "exited",
    p = "entering",
    h = "entered",
    m = "exiting",
    _ = (function (e) {
        function t(t, r) {
            var n,
                a = e.call(this, t, r) || this,
                s = r && !r.isMounting ? t.enter : t.appear;
            return (
                (a.appearStatus = null),
                t.in
                    ? s
                        ? ((n = f), (a.appearStatus = p))
                        : (n = h)
                    : (n = t.unmountOnExit || t.mountOnEnter ? d : f),
                (a.state = { status: n }),
                (a.nextCallback = null),
                a
            );
        }
        (0, s.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === d ? { status: f } : null;
            });
        var r = t.prototype;
        return (
            (r.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (r.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                    var r = this.state.status;
                    this.props.in ? r !== p && r !== h && (t = p) : (r === p || r === h) && (t = m);
                }
                this.updateStatus(!1, t);
            }),
            (r.componentWillUnmount = function () {
                this.cancelNextCallback();
            }),
            (r.getTimeouts = function () {
                var e,
                    t,
                    r,
                    n = this.props.timeout;
                return (
                    (e = t = r = n),
                    null != n &&
                        "number" != typeof n &&
                        ((e = n.exit), (t = n.enter), (r = void 0 !== n.appear ? n.appear : t)),
                    { exit: e, enter: t, appear: r }
                );
            }),
            (r.updateStatus = function (e, t) {
                if ((void 0 === e && (e = !1), null !== t))
                    if ((this.cancelNextCallback(), t === p)) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var r = this.props.nodeRef ? this.props.nodeRef.current : l.findDOMNode(this);
                            r && c(r);
                        }
                        this.performEnter(e);
                    } else this.performExit();
                else this.props.unmountOnExit && this.state.status === f && this.setState({ status: d });
            }),
            (r.performEnter = function (e) {
                var t = this,
                    r = this.props.enter,
                    n = this.context ? this.context.isMounting : e,
                    a = this.props.nodeRef ? [n] : [l.findDOMNode(this), n],
                    s = a[0],
                    i = a[1],
                    o = this.getTimeouts(),
                    u = n ? o.appear : o.enter;
                (e || r) && 1
                    ? (this.props.onEnter(s, i),
                      this.safeSetState({ status: p }, function () {
                          t.props.onEntering(s, i),
                              t.onTransitionEnd(u, function () {
                                  t.safeSetState({ status: h }, function () {
                                      t.props.onEntered(s, i);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: h }, function () {
                          t.props.onEntered(s);
                      });
            }),
            (r.performExit = function () {
                var e = this,
                    t = this.props.exit,
                    r = this.getTimeouts(),
                    n = this.props.nodeRef ? void 0 : l.findDOMNode(this);
                t
                    ? (this.props.onExit(n),
                      this.safeSetState({ status: m }, function () {
                          e.props.onExiting(n),
                              e.onTransitionEnd(r.exit, function () {
                                  e.safeSetState({ status: f }, function () {
                                      e.props.onExited(n);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: f }, function () {
                          e.props.onExited(n);
                      });
            }),
            (r.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (r.safeSetState = function (e, t) {
                (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (r.setNextCallback = function (e) {
                var t = this,
                    r = !0;
                return (
                    (this.nextCallback = function (n) {
                        r && ((r = !1), (t.nextCallback = null), e(n));
                    }),
                    (this.nextCallback.cancel = function () {
                        r = !1;
                    }),
                    this.nextCallback
                );
            }),
            (r.onTransitionEnd = function (e, t) {
                this.setNextCallback(t);
                var r = this.props.nodeRef ? this.props.nodeRef.current : l.findDOMNode(this),
                    n = null == e && !this.props.addEndListener;
                if (!r || n) return void setTimeout(this.nextCallback, 0);
                if (this.props.addEndListener) {
                    var a = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
                        s = a[0],
                        i = a[1];
                    this.props.addEndListener(s, i);
                }
                null != e && setTimeout(this.nextCallback, e);
            }),
            (r.render = function () {
                var e = this.state.status;
                if (e === d) return null;
                var t = this.props,
                    r = t.children,
                    n =
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
                        (0, a.A)(t, [
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
                return o.createElement(
                    u.A.Provider,
                    { value: null },
                    "function" == typeof r ? r(e, n) : o.cloneElement(o.Children.only(r), n),
                );
            }),
            t
        );
    })(o.Component);
function g() {}
(_.contextType = u.A),
    (_.propTypes = {}),
    (_.defaultProps = {
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
        onExited: g,
    }),
    (_.UNMOUNTED = d),
    (_.EXITED = f),
    (_.ENTERING = p),
    (_.ENTERED = h),
    (_.EXITING = m);
var v = function (e, t) {
        return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
                e.classList
                    ? e.classList.remove(t)
                    : "string" == typeof e.className
                      ? (e.className = i(e.className, t))
                      : e.setAttribute("class", i((e.className && e.className.baseVal) || "", t));
            })
        );
    },
    b = (function (e) {
        function t() {
            for (var t, r = arguments.length, n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
            return (
                ((t = e.call.apply(e, [this].concat(n)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                (t.onEnter = function (e, r) {
                    var n = t.resolveArguments(e, r),
                        a = n[0],
                        s = n[1];
                    t.removeClasses(a, "exit"),
                        t.addClass(a, s ? "appear" : "enter", "base"),
                        t.props.onEnter && t.props.onEnter(e, r);
                }),
                (t.onEntering = function (e, r) {
                    var n = t.resolveArguments(e, r),
                        a = n[0],
                        s = n[1];
                    t.addClass(a, s ? "appear" : "enter", "active"), t.props.onEntering && t.props.onEntering(e, r);
                }),
                (t.onEntered = function (e, r) {
                    var n = t.resolveArguments(e, r),
                        a = n[0],
                        s = n[1] ? "appear" : "enter";
                    t.removeClasses(a, s), t.addClass(a, s, "done"), t.props.onEntered && t.props.onEntered(e, r);
                }),
                (t.onExit = function (e) {
                    var r = t.resolveArguments(e)[0];
                    t.removeClasses(r, "appear"),
                        t.removeClasses(r, "enter"),
                        t.addClass(r, "exit", "base"),
                        t.props.onExit && t.props.onExit(e);
                }),
                (t.onExiting = function (e) {
                    var r = t.resolveArguments(e)[0];
                    t.addClass(r, "exit", "active"), t.props.onExiting && t.props.onExiting(e);
                }),
                (t.onExited = function (e) {
                    var r = t.resolveArguments(e)[0];
                    t.removeClasses(r, "exit"), t.addClass(r, "exit", "done"), t.props.onExited && t.props.onExited(e);
                }),
                (t.resolveArguments = function (e, r) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, r];
                }),
                (t.getClassNames = function (e) {
                    var r = t.props.classNames,
                        n = "string" == typeof r,
                        a = n && r ? r + "-" : "",
                        s = n ? "" + a + e : r[e],
                        i = n ? s + "-active" : r[e + "Active"],
                        o = n ? s + "-done" : r[e + "Done"];
                    return { baseClassName: s, activeClassName: i, doneClassName: o };
                }),
                t
            );
        }
        (0, s.A)(t, e);
        var r = t.prototype;
        return (
            (r.addClass = function (e, t, r) {
                var n,
                    a = this.getClassNames(t)[r + "ClassName"],
                    s = this.getClassNames("enter").doneClassName;
                "appear" === t && "done" === r && s && (a += " " + s),
                    "active" === r && e && c(e),
                    a &&
                        ((this.appliedClasses[t][r] = a),
                        (n = a),
                        e &&
                            n &&
                            n.split(" ").forEach(function (t) {
                                e.classList
                                    ? e.classList.add(t)
                                    : (e.classList
                                          ? t && e.classList.contains(t)
                                          : -1 !==
                                            (" " + (e.className.baseVal || e.className) + " ").indexOf(
                                                " " + t + " ",
                                            )) ||
                                      ("string" == typeof e.className
                                          ? (e.className = e.className + " " + t)
                                          : e.setAttribute(
                                                "class",
                                                ((e.className && e.className.baseVal) || "") + " " + t,
                                            ));
                            }));
            }),
            (r.removeClasses = function (e, t) {
                var r = this.appliedClasses[t],
                    n = r.base,
                    a = r.active,
                    s = r.done;
                (this.appliedClasses[t] = {}), n && v(e, n), a && v(e, a), s && v(e, s);
            }),
            (r.render = function () {
                var e = this.props,
                    t = (e.classNames, (0, a.A)(e, ["classNames"]));
                return o.createElement(
                    _,
                    (0, n.A)({}, t, {
                        onEnter: this.onEnter,
                        onEntered: this.onEntered,
                        onEntering: this.onEntering,
                        onExit: this.onExit,
                        onExiting: this.onExiting,
                        onExited: this.onExited,
                    }),
                );
            }),
            t
        );
    })(o.Component);
(b.defaultProps = { classNames: "" }), (b.propTypes = {});
let y = b;
