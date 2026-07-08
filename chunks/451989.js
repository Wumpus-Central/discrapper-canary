"use strict";
r.d(t, { A: () => w });
var n = r(1139),
    i = r(299146),
    o = r(47312);
function a(e, t) {
    return e
        .replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
        .replace(/\s+/g, " ")
        .replace(/^\s*|\s*$/g, "");
}
r(655972);
var s = r(64700),
    l = r(340287),
    u = r(167782),
    c = function (e) {
        return e.scrollTop;
    },
    f = "unmounted",
    d = "exited",
    p = "entering",
    h = "entered",
    m = "exiting",
    g = (function (e) {
        function t(t, r) {
            var n,
                i = e.call(this, t, r) || this,
                o = r && !r.isMounting ? t.enter : t.appear;
            return (
                (i.appearStatus = null),
                t.in
                    ? o
                        ? ((n = d), (i.appearStatus = p))
                        : (n = h)
                    : (n = t.unmountOnExit || t.mountOnEnter ? f : d),
                (i.state = { status: n }),
                (i.nextCallback = null),
                i
            );
        }
        (0, o.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === f ? { status: d } : null;
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
                else this.props.unmountOnExit && this.state.status === d && this.setState({ status: f });
            }),
            (r.performEnter = function (e) {
                var t = this,
                    r = this.props.enter,
                    n = this.context ? this.context.isMounting : e,
                    i = this.props.nodeRef ? [n] : [l.findDOMNode(this), n],
                    o = i[0],
                    a = i[1],
                    s = this.getTimeouts(),
                    u = n ? s.appear : s.enter;
                (e || r) && 1
                    ? (this.props.onEnter(o, a),
                      this.safeSetState({ status: p }, function () {
                          t.props.onEntering(o, a),
                              t.onTransitionEnd(u, function () {
                                  t.safeSetState({ status: h }, function () {
                                      t.props.onEntered(o, a);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: h }, function () {
                          t.props.onEntered(o);
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
                                  e.safeSetState({ status: d }, function () {
                                      e.props.onExited(n);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: d }, function () {
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
                    var i = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
                        o = i[0],
                        a = i[1];
                    this.props.addEndListener(o, a);
                }
                null != e && setTimeout(this.nextCallback, e);
            }),
            (r.render = function () {
                var e = this.state.status;
                if (e === f) return null;
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
                        (0, i.A)(t, [
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
                    u.A.Provider,
                    { value: null },
                    "function" == typeof r ? r(e, n) : s.cloneElement(s.Children.only(r), n),
                );
            }),
            t
        );
    })(s.Component);
function v() {}
(g.contextType = u.A),
    (g.propTypes = {}),
    (g.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: v,
        onEntering: v,
        onEntered: v,
        onExit: v,
        onExiting: v,
        onExited: v,
    }),
    (g.UNMOUNTED = f),
    (g.EXITED = d),
    (g.ENTERING = p),
    (g.ENTERED = h),
    (g.EXITING = m);
var y = function (e, t) {
        return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
                e.classList
                    ? e.classList.remove(t)
                    : "string" == typeof e.className
                      ? (e.className = a(e.className, t))
                      : e.setAttribute("class", a((e.className && e.className.baseVal) || "", t));
            })
        );
    },
    b = (function (e) {
        function t() {
            for (var t, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(n)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                (t.onEnter = function (e, r) {
                    var n = t.resolveArguments(e, r),
                        i = n[0],
                        o = n[1];
                    t.removeClasses(i, "exit"),
                        t.addClass(i, o ? "appear" : "enter", "base"),
                        t.props.onEnter && t.props.onEnter(e, r);
                }),
                (t.onEntering = function (e, r) {
                    var n = t.resolveArguments(e, r),
                        i = n[0],
                        o = n[1];
                    t.addClass(i, o ? "appear" : "enter", "active"), t.props.onEntering && t.props.onEntering(e, r);
                }),
                (t.onEntered = function (e, r) {
                    var n = t.resolveArguments(e, r),
                        i = n[0],
                        o = n[1] ? "appear" : "enter";
                    t.removeClasses(i, o), t.addClass(i, o, "done"), t.props.onEntered && t.props.onEntered(e, r);
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
                        i = n && r ? r + "-" : "",
                        o = n ? "" + i + e : r[e],
                        a = n ? o + "-active" : r[e + "Active"],
                        s = n ? o + "-done" : r[e + "Done"];
                    return { baseClassName: o, activeClassName: a, doneClassName: s };
                }),
                t
            );
        }
        (0, o.A)(t, e);
        var r = t.prototype;
        return (
            (r.addClass = function (e, t, r) {
                var n,
                    i = this.getClassNames(t)[r + "ClassName"],
                    o = this.getClassNames("enter").doneClassName;
                "appear" === t && "done" === r && o && (i += " " + o),
                    "active" === r && e && c(e),
                    i &&
                        ((this.appliedClasses[t][r] = i),
                        (n = i),
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
                    i = r.active,
                    o = r.done;
                (this.appliedClasses[t] = {}), n && y(e, n), i && y(e, i), o && y(e, o);
            }),
            (r.render = function () {
                var e = this.props,
                    t = (e.classNames, (0, i.A)(e, ["classNames"]));
                return s.createElement(
                    g,
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
    })(s.Component);
(b.defaultProps = { classNames: "" }), (b.propTypes = {});
let w = b;
