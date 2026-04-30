"use strict";
n.d(t, { up: () => W, dF: () => z, B8: () => K, xr: () => B });
var i = n(627968),
    r = n(64700),
    s = n(296489),
    a = n.n(s),
    o = n(299146),
    l = n(1139),
    u = n(527758),
    c = n(47312);
n(655972);
let d = r.createContext(null);
function _(e, t) {
    var n = Object.create(null);
    return (
        e &&
            r.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                n[e.key] = t && (0, r.isValidElement)(e) ? t(e) : e;
            }),
        n
    );
}
function f(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
}
var h =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        },
    p = (function (e) {
        function t(t, n) {
            var i = e.call(this, t, n) || this,
                r = i.handleExited.bind((0, u.A)(i));
            return (i.state = { contextValue: { isMounting: !0 }, handleExited: r, firstRender: !0 }), i;
        }
        (0, c.A)(t, e);
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
                this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
                var n,
                    i,
                    s = t.children,
                    a = t.handleExited;
                return {
                    children: t.firstRender
                        ? _(e.children, function (t) {
                              return (0, r.cloneElement)(t, {
                                  onExited: a.bind(null, t),
                                  in: !0,
                                  appear: f(t, "appear", e),
                                  enter: f(t, "enter", e),
                                  exit: f(t, "exit", e),
                              });
                          })
                        : (Object.keys(
                              (i = (function (e, t) {
                                  function n(n) {
                                      return n in t ? t[n] : e[n];
                                  }
                                  (e = e || {}), (t = t || {});
                                  var i,
                                      r = Object.create(null),
                                      s = [];
                                  for (var a in e) a in t ? s.length && ((r[a] = s), (s = [])) : s.push(a);
                                  var o = {};
                                  for (var l in t) {
                                      if (r[l])
                                          for (i = 0; i < r[l].length; i++) {
                                              var u = r[l][i];
                                              o[r[l][i]] = n(u);
                                          }
                                      o[l] = n(l);
                                  }
                                  for (i = 0; i < s.length; i++) o[s[i]] = n(s[i]);
                                  return o;
                              })(s, (n = _(e.children)))),
                          ).forEach(function (t) {
                              var o = i[t];
                              if ((0, r.isValidElement)(o)) {
                                  var l = t in s,
                                      u = t in n,
                                      c = s[t],
                                      d = (0, r.isValidElement)(c) && !c.props.in;
                                  u && (!l || d)
                                      ? (i[t] = (0, r.cloneElement)(o, {
                                            onExited: a.bind(null, o),
                                            in: !0,
                                            exit: f(o, "exit", e),
                                            enter: f(o, "enter", e),
                                        }))
                                      : u || !l || d
                                        ? u &&
                                          l &&
                                          (0, r.isValidElement)(c) &&
                                          (i[t] = (0, r.cloneElement)(o, {
                                              onExited: a.bind(null, o),
                                              in: c.props.in,
                                              exit: f(o, "exit", e),
                                              enter: f(o, "enter", e),
                                          }))
                                        : (i[t] = (0, r.cloneElement)(o, { in: !1 }));
                              }
                          }),
                          i),
                    firstRender: !1,
                };
            }),
            (n.handleExited = function (e, t) {
                var n = _(this.props.children);
                e.key in n ||
                    (e.props.onExited && e.props.onExited(t),
                    this.mounted &&
                        this.setState(function (t) {
                            var n = (0, l.A)({}, t.children);
                            return delete n[e.key], { children: n };
                        }));
            }),
            (n.render = function () {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    i = (0, o.A)(e, ["component", "childFactory"]),
                    s = this.state.contextValue,
                    a = h(this.state.children).map(n);
                return (delete i.appear, delete i.enter, delete i.exit, null === t)
                    ? r.createElement(d.Provider, { value: s }, a)
                    : r.createElement(d.Provider, { value: s }, r.createElement(t, i, a));
            }),
            t
        );
    })(r.Component);
function E(e, t) {
    return e
        .replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
        .replace(/\s+/g, " ")
        .replace(/^\s*|\s*$/g, "");
}
(p.propTypes = {}),
    (p.defaultProps = {
        component: "div",
        childFactory: function (e) {
            return e;
        },
    });
var m = n(340287),
    g = function (e) {
        return e.scrollTop;
    },
    A = "unmounted",
    I = "exited",
    T = "entering",
    S = "entered",
    N = "exiting",
    y = (function (e) {
        function t(t, n) {
            var i,
                r = e.call(this, t, n) || this,
                s = n && !n.isMounting ? t.enter : t.appear;
            return (
                (r.appearStatus = null),
                t.in
                    ? s
                        ? ((i = I), (r.appearStatus = T))
                        : (i = S)
                    : (i = t.unmountOnExit || t.mountOnEnter ? A : I),
                (r.state = { status: i }),
                (r.nextCallback = null),
                r
            );
        }
        (0, c.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === A ? { status: I } : null;
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
                    this.props.in ? n !== T && n !== S && (t = T) : (n === T || n === S) && (t = N);
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
                    null != i &&
                        "number" != typeof i &&
                        ((e = i.exit), (t = i.enter), (n = void 0 !== i.appear ? i.appear : t)),
                    { exit: e, enter: t, appear: n }
                );
            }),
            (n.updateStatus = function (e, t) {
                if ((void 0 === e && (e = !1), null !== t))
                    if ((this.cancelNextCallback(), t === T)) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var n = this.props.nodeRef ? this.props.nodeRef.current : m.findDOMNode(this);
                            n && g(n);
                        }
                        this.performEnter(e);
                    } else this.performExit();
                else this.props.unmountOnExit && this.state.status === I && this.setState({ status: A });
            }),
            (n.performEnter = function (e) {
                var t = this,
                    n = this.props.enter,
                    i = this.context ? this.context.isMounting : e,
                    r = this.props.nodeRef ? [i] : [m.findDOMNode(this), i],
                    s = r[0],
                    a = r[1],
                    o = this.getTimeouts(),
                    l = i ? o.appear : o.enter;
                (e || n) && 1
                    ? (this.props.onEnter(s, a),
                      this.safeSetState({ status: T }, function () {
                          t.props.onEntering(s, a),
                              t.onTransitionEnd(l, function () {
                                  t.safeSetState({ status: S }, function () {
                                      t.props.onEntered(s, a);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: S }, function () {
                          t.props.onEntered(s);
                      });
            }),
            (n.performExit = function () {
                var e = this,
                    t = this.props.exit,
                    n = this.getTimeouts(),
                    i = this.props.nodeRef ? void 0 : m.findDOMNode(this);
                t
                    ? (this.props.onExit(i),
                      this.safeSetState({ status: N }, function () {
                          e.props.onExiting(i),
                              e.onTransitionEnd(n.exit, function () {
                                  e.safeSetState({ status: I }, function () {
                                      e.props.onExited(i);
                                  });
                              });
                      }))
                    : this.safeSetState({ status: I }, function () {
                          e.props.onExited(i);
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
            (n.onTransitionEnd = function (e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : m.findDOMNode(this),
                    i = null == e && !this.props.addEndListener;
                if (!n || i) return void setTimeout(this.nextCallback, 0);
                if (this.props.addEndListener) {
                    var r = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                        s = r[0],
                        a = r[1];
                    this.props.addEndListener(s, a);
                }
                null != e && setTimeout(this.nextCallback, e);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === A) return null;
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
                        (0, o.A)(t, [
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
                return r.createElement(
                    d.Provider,
                    { value: null },
                    "function" == typeof n ? n(e, i) : r.cloneElement(r.Children.only(n), i),
                );
            }),
            t
        );
    })(r.Component);
function C() {}
(y.contextType = d),
    (y.propTypes = {}),
    (y.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: C,
        onEntering: C,
        onEntered: C,
        onExit: C,
        onExiting: C,
        onExited: C,
    }),
    (y.UNMOUNTED = A),
    (y.EXITED = I),
    (y.ENTERING = T),
    (y.ENTERED = S),
    (y.EXITING = N);
var v = function (e, t) {
        return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
                e.classList
                    ? e.classList.remove(t)
                    : "string" == typeof e.className
                      ? (e.className = E(e.className, t))
                      : e.setAttribute("class", E((e.className && e.className.baseVal) || "", t));
            })
        );
    },
    O = (function (e) {
        function t() {
            for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            return (
                ((t = e.call.apply(e, [this].concat(i)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                (t.onEnter = function (e, n) {
                    var i = t.resolveArguments(e, n),
                        r = i[0],
                        s = i[1];
                    t.removeClasses(r, "exit"),
                        t.addClass(r, s ? "appear" : "enter", "base"),
                        t.props.onEnter && t.props.onEnter(e, n);
                }),
                (t.onEntering = function (e, n) {
                    var i = t.resolveArguments(e, n),
                        r = i[0],
                        s = i[1];
                    t.addClass(r, s ? "appear" : "enter", "active"), t.props.onEntering && t.props.onEntering(e, n);
                }),
                (t.onEntered = function (e, n) {
                    var i = t.resolveArguments(e, n),
                        r = i[0],
                        s = i[1] ? "appear" : "enter";
                    t.removeClasses(r, s), t.addClass(r, s, "done"), t.props.onEntered && t.props.onEntered(e, n);
                }),
                (t.onExit = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "appear"),
                        t.removeClasses(n, "enter"),
                        t.addClass(n, "exit", "base"),
                        t.props.onExit && t.props.onExit(e);
                }),
                (t.onExiting = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e);
                }),
                (t.onExited = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e);
                }),
                (t.resolveArguments = function (e, n) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                }),
                (t.getClassNames = function (e) {
                    var n = t.props.classNames,
                        i = "string" == typeof n,
                        r = i && n ? n + "-" : "",
                        s = i ? "" + r + e : n[e],
                        a = i ? s + "-active" : n[e + "Active"],
                        o = i ? s + "-done" : n[e + "Done"];
                    return { baseClassName: s, activeClassName: a, doneClassName: o };
                }),
                t
            );
        }
        (0, c.A)(t, e);
        var n = t.prototype;
        return (
            (n.addClass = function (e, t, n) {
                var i,
                    r = this.getClassNames(t)[n + "ClassName"],
                    s = this.getClassNames("enter").doneClassName;
                "appear" === t && "done" === n && s && (r += " " + s),
                    "active" === n && e && g(e),
                    r &&
                        ((this.appliedClasses[t][n] = r),
                        (i = r),
                        e &&
                            i &&
                            i.split(" ").forEach(function (t) {
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
            (n.removeClasses = function (e, t) {
                var n = this.appliedClasses[t],
                    i = n.base,
                    r = n.active,
                    s = n.done;
                (this.appliedClasses[t] = {}), i && v(e, i), r && v(e, r), s && v(e, s);
            }),
            (n.render = function () {
                var e = this.props,
                    t = (e.classNames, (0, o.A)(e, ["classNames"]));
                return r.createElement(
                    y,
                    (0, l.A)({}, t, {
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
    })(r.Component);
(O.defaultProps = { classNames: "" }), (O.propTypes = {});
var R = n(353640),
    b = n(121894),
    D = n(319060),
    L = n(315710),
    w = n(844222),
    M = n(775121),
    P = n(240248),
    x = n(750506),
    U = n(191627),
    k = n(87404),
    G = n(215011);
let F = new Set([k._s, U.Uy]),
    V = (0, P.xI)(D.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    B = (0, R.v)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, b.r)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return { fullScreenLayers: [...n, t] };
                });
            }),
    }));
function H(e) {
    let { item: t, containerRef: n } = e;
    return (
        (0, L.t)(n),
        r.useEffect(() => {
            var e, n;
            return (
                M.A.disable(),
                F.has(t.key) ||
                    M.A.enableTemp(
                        ((e = t.key),
                        (n = t.options.onEscape),
                        {
                            POP_LAYER: {
                                binds: ["esc"],
                                comboKeysBindGlobal: !0,
                                action() {
                                    n?.() !== !0 && z(e);
                                },
                            },
                        }),
                    ),
                () => {
                    M.A.disableTemp();
                }
            );
        }, [t.key, t.options.onEscape]),
        (0, i.jsx)(t.LayerComponent, {
            children: (0, i.jsxs)("div", {
                className: G.zr,
                ref: n,
                children: [
                    (0, i.jsx)("div", { className: G.$E }),
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => z(t.key) }),
                ],
            }),
        })
    );
}
let j = { enter: G.Ve, enterActive: G.T8, enterDone: G.lG, exit: G.NS, exitActive: G.N5, exitDone: G.Dr },
    Y = { enter: G.Zf, enterActive: G.BA, enterDone: G.zo, exit: G.ph, exitActive: G.zX, exitDone: G.hf };
function W() {
    let { reducedMotion: e } = r.useContext(w.C),
        t = e.enabled ? Y : j,
        n = B((e) => e.fullScreenLayers),
        s = n.map((e) => ({ item: e, nodeRef: r.createRef() }));
    return (0, i.jsx)(p, {
        children: s.map((e) => {
            let { item: r, nodeRef: s } = e;
            return (0, i.jsx)(
                O,
                {
                    nodeRef: s,
                    classNames: r.options.disableAnimation ? void 0 : t,
                    timeout: V,
                    onEntered: () => {
                        (0, b.r)(() => {
                            B.setState({
                                fullScreenLayers: n.map((e) => (e.key === r.key ? { ...e, transitionState: 2 } : e)),
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, i.jsx)(H, { containerRef: s, item: r }),
                },
                r.key,
            );
        }),
    });
}
function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: i, disableAnimation: r = !1, onEscape: s, showAppUnderLayer: o = !1 } = t,
        l = null != n ? n : a()();
    return (
        (0, b.r)(() => {
            B.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: l,
                        transitionState: 1,
                        LayerComponent: i ?? x.Ay,
                        render: e,
                        options: { disableAnimation: r, onEscape: s, showAppUnderLayer: o },
                    },
                ],
            }));
        }),
        l
    );
}
function z(e) {
    (0, b.r)(() => {
        B.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
