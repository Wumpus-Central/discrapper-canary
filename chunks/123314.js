Object.defineProperty(t, "__esModule", { value: !0 });
var r = n(473749),
    i = n(460444),
    a = (function (e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
    })(r),
    o = function () {
        return (o =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }).apply(this, arguments);
    };
function s(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    }
    return n;
}
function l(e, t, n, r) {
    return new (n || (n = Promise))(function (i, a) {
        function o(e) {
            try {
                l(r.next(e));
            } catch (e) {
                a(e);
            }
        }
        function s(e) {
            try {
                l(r.throw(e));
            } catch (e) {
                a(e);
            }
        }
        function l(e) {
            var t;
            e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                            e(t);
                        })
                  ).then(o, s);
        }
        l((r = r.apply(e, t || [])).next());
    });
}
function c(e, t) {
    var n,
        r,
        i,
        a,
        o = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (a = {
            next: s(0),
            throw: s(1),
            return: s(2),
        }),
        "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
        a
    );
    function s(a) {
        return function (s) {
            return (function (a) {
                if (n) throw TypeError("Generator is already executing.");
                for (; o; )
                    try {
                        if (
                            ((n = 1),
                            r &&
                                (i =
                                    2 & a[0]
                                        ? r.return
                                        : a[0]
                                          ? r.throw || ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                !(i = i.call(r, a[1])).done)
                        )
                            return i;
                        switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return (
                                    o.label++,
                                    {
                                        value: a[1],
                                        done: !1,
                                    }
                                );
                            case 5:
                                o.label++, (r = a[1]), (a = [0]);
                                continue;
                            case 7:
                                (a = o.ops.pop()), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue;
                                }
                                if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                    o.label = a[1];
                                    break;
                                }
                                if (6 === a[0] && o.label < i[1]) {
                                    (o.label = i[1]), (i = a);
                                    break;
                                }
                                if (i && o.label < i[2]) {
                                    (o.label = i[2]), o.ops.push(a);
                                    break;
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue;
                        }
                        a = t.call(e, o);
                    } catch (e) {
                        (a = [6, e]), (r = 0);
                    } finally {
                        n = i = 0;
                    }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0,
                };
            })([a, s]);
        };
    }
}
function u(e) {
    var t = e || d(),
        n = r.useState(t),
        i = n[0],
        a = n[1];
    return (
        r.useEffect(
            function () {
                if ("undefined" != typeof window && "matchMedia" in window) {
                    var t = function () {
                            a(e || d());
                        },
                        n = window.matchMedia("screen and (resolution: ".concat(i, "dppx)"));
                    return (
                        n.hasOwnProperty("addEventListener") ? n.addEventListener("change", t) : n.addListener(t),
                        function () {
                            n.hasOwnProperty("removeEventListener")
                                ? n.removeEventListener("change", t)
                                : n.removeListener(t);
                        }
                    );
                }
            },
            [i, e],
        ),
        i
    );
}
function d() {
    return Math.min(
        Math.max(
            1,
            "undefined" != typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1,
        ),
        3,
    );
}
var f = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    _ = globalThis.ResizeObserver || f,
    p = void 0 !== globalThis.ResizeObserver,
    h = !p;
function m(e, t) {
    void 0 === t && (t = !0);
    var n = r.useState({
            width: 0,
            height: 0,
        }),
        i = n[0],
        a = n[1];
    r.useEffect(function () {
        if ("undefined" != typeof window && t) {
            var e = function () {
                a({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            return (
                h && (e(), window.addEventListener("resize", e)),
                function () {
                    return window.removeEventListener("resize", e);
                }
            );
        }
    }, []);
    var o,
        s,
        l,
        c = r.useRef(
            new _(
                ((o = function (e) {
                    p &&
                        a({
                            width: e[e.length - 1].contentRect.width,
                            height: e[e.length - 1].contentRect.height,
                        });
                }),
                (s = 0),
                (l = 0),
                function () {
                    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    clearTimeout(l),
                        (l = window.setTimeout(function () {
                            return o.apply(e, t);
                        }, s));
                }),
            ),
        );
    return (
        r.useEffect(
            function () {
                var n = c.current;
                if (t) {
                    var r = e.current;
                    return (
                        e.current && p && n.observe(e.current),
                        function () {
                            n.disconnect(), r && p && n.unobserve(r);
                        }
                    );
                }
                n.disconnect();
            },
            [e, c],
        ),
        i
    );
}
var g = {
    useDevicePixelRatio: !0,
    fitCanvasToArtboardHeight: !1,
    useOffscreenRenderer: !0,
    shouldResizeCanvasToContainer: !0,
};
function E(e) {
    return Object.assign({}, g, e);
}
function b(e) {
    var t = e.riveLoaded,
        n = void 0 !== t && t,
        i = e.canvasElem,
        a = e.containerRef,
        o = e.options,
        s = void 0 === o ? {} : o,
        l = e.onCanvasHasResized,
        c = e.artboardBounds,
        d = E(s),
        f = r.useState({
            height: 0,
            width: 0,
        }),
        _ = f[0],
        p = _.height,
        h = _.width,
        g = f[1],
        b = r.useState({
            height: 0,
            width: 0,
        }),
        y = b[0],
        O = y.height,
        v = y.width,
        I = b[1],
        T = r.useState(!0),
        S = T[0],
        A = T[1],
        C = d.fitCanvasToArtboardHeight,
        N = d.shouldResizeCanvasToContainer,
        R = d.useDevicePixelRatio,
        P = d.customDevicePixelRatio,
        D = m(a, N),
        w = u(P),
        L = null != c ? c : {},
        x = L.maxX,
        M = L.maxY,
        j = r.useCallback(
            function () {
                var e,
                    t,
                    n,
                    r,
                    i = null != (t = null == (e = a.current) ? void 0 : e.clientWidth) ? t : 0,
                    o = null != (r = null == (n = a.current) ? void 0 : n.clientHeight) ? r : 0;
                return C && c
                    ? {
                          width: i,
                          height: i * (c.maxY / c.maxX),
                      }
                    : {
                          width: i,
                          height: o,
                      };
            },
            [a, C, x, M],
        );
    r.useEffect(
        function () {
            if (N && a.current && n) {
                var e = j(),
                    t = e.width,
                    r = e.height,
                    o = !1;
                if (i) {
                    var s = t !== h || r !== p;
                    if (
                        (d.fitCanvasToArtboardHeight && s && ((a.current.style.height = r + "px"), (o = !0)),
                        d.useDevicePixelRatio)
                    ) {
                        if (s || t * w !== v || r * w !== O) {
                            var c = w * t,
                                u = w * r;
                            (i.width = c),
                                (i.height = u),
                                (i.style.width = t + "px"),
                                (i.style.height = r + "px"),
                                I({
                                    width: c,
                                    height: u,
                                }),
                                (o = !0);
                        }
                    } else
                        s &&
                            ((i.width = t),
                            (i.height = r),
                            I({
                                width: t,
                                height: r,
                            }),
                            (o = !0));
                    g({
                        width: t,
                        height: r,
                    });
                }
                l && (S || o) && l && l(), S && A(!1);
            }
        },
        [i, a, D, w, j, S, A, O, v, p, h, l, N, C, R, n],
    ),
        r.useEffect(
            function () {
                I({
                    width: 0,
                    height: 0,
                });
            },
            [i],
        );
}
var y,
    O = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    v = globalThis.IntersectionObserver || O,
    I = (function () {
        function e() {
            var e = this;
            (this.elementsMap = new Map()),
                (this.onObserved = function (t) {
                    t.forEach(function (t) {
                        var n = e.elementsMap.get(t.target);
                        n && n(t);
                    });
                }),
                (this.observer = new v(this.onObserved));
        }
        return (
            (e.prototype.registerCallback = function (e, t) {
                this.observer.observe(e), this.elementsMap.set(e, t);
            }),
            (e.prototype.removeCallback = function (e) {
                this.observer.unobserve(e), this.elementsMap.delete(e);
            }),
            e
        );
    })(),
    T = function () {
        return y || (y = new I()), y;
    };
function S(e) {
    var t = e.setContainerRef,
        n = e.setCanvasRef,
        r = e.className,
        i = void 0 === r ? "" : r,
        l = e.style,
        c = e.children,
        u = s(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]),
        d = o(
            {
                width: "100%",
                height: "100%",
            },
            l,
        );
    return a.default.createElement(
        "div",
        o(
            {
                ref: t,
                className: i,
            },
            !i && { style: d },
        ),
        a.default.createElement(
            "canvas",
            o(
                {
                    ref: n,
                    style: {
                        verticalAlign: "top",
                        width: 0,
                        height: 0,
                    },
                },
                u,
            ),
            c,
        ),
    );
}
function A(e, t) {
    void 0 === t && (t = {});
    var n = r.useState(null),
        l = n[0],
        c = n[1],
        d = r.useRef(null),
        f = r.useRef(null),
        _ = r.useState(null),
        p = _[0],
        h = _[1],
        m = !!e,
        g = E(t),
        y = u(),
        O = r.useCallback(
            function () {
                if (p) {
                    if (p.layout && p.layout.fit === i.Fit.Layout && l) {
                        var e = y * p.layout.layoutScaleFactor;
                        (p.devicePixelRatioUsed = y),
                            (p.artboardWidth = (null == l ? void 0 : l.width) / e),
                            (p.artboardHeight = (null == l ? void 0 : l.height) / e);
                    }
                    p.startRendering(), p.resizeToCanvas();
                }
            },
            [p, y],
        );
    b({
        riveLoaded: !!p,
        canvasElem: l,
        containerRef: d,
        options: g,
        onCanvasHasResized: O,
        artboardBounds: null == p ? void 0 : p.bounds,
    });
    var v = r.useCallback(function (e) {
        null === e && l && ((l.height = 0), (l.width = 0)), c(e);
    }, []);
    r.useEffect(
        function () {
            if (l && e) {
                var t,
                    n = null != p;
                if (null == p) {
                    var r = g.useOffscreenRenderer,
                        a = e.onRiveReady,
                        c = s(e, ["onRiveReady"]);
                    (t = new i.Rive(o(o({ useOffscreenRenderer: r }, c), { canvas: l }))),
                        null != f.current && f.current.cleanup(),
                        (f.current = t),
                        t.on(i.EventType.Load, function () {
                            (n = !0), a && a(t), l ? h(t) : t.cleanup();
                        });
                }
                return function () {
                    n || null == t || t.cleanup();
                };
            }
        },
        [l, m, p],
    );
    var I = r.useCallback(function (e) {
            d.current = e;
        }, []),
        A = {
            observe: r.useCallback(function (e, t) {
                T().registerCallback(e, t);
            }, []),
            unobserve: r.useCallback(function (e) {
                T().removeCallback(e);
            }, []),
        },
        C = A.observe,
        N = A.unobserve;
    r.useEffect(
        function () {
            var e,
                t = !1,
                n = function () {
                    if (l && t) {
                        var e = l.getBoundingClientRect();
                        e.width > 0 &&
                            e.height > 0 &&
                            e.top < (window.innerHeight || document.documentElement.clientHeight) &&
                            e.bottom > 0 &&
                            e.left < (window.innerWidth || document.documentElement.clientWidth) &&
                            e.right > 0 &&
                            (null == p || p.startRendering(), (t = !1));
                    }
                };
            return (
                l &&
                    !1 !== g.shouldUseIntersectionObserver &&
                    C(l, function (r) {
                        r.isIntersecting ? p && p.startRendering() : p && p.stopRendering(),
                            (t = !r.isIntersecting),
                            clearTimeout(e),
                            r.isIntersecting || 0 !== r.boundingClientRect.width || (e = setTimeout(n, 10));
                    }),
                function () {
                    l && N(l);
                }
            );
        },
        [C, N, p, l, g.shouldUseIntersectionObserver],
    ),
        r.useEffect(
            function () {
                return function () {
                    p && (p.cleanup(), h(null));
                };
            },
            [p, l],
        ),
        r.useEffect(function () {
            return function () {
                null != f.current && f.current.cleanup();
            };
        }, []);
    var R = null == e ? void 0 : e.animations;
    r.useEffect(
        function () {
            p &&
                R &&
                (p.isPlaying
                    ? (p.stop(p.animationNames), p.play(R))
                    : p.isPaused && (p.stop(p.animationNames), p.pause(R)));
        },
        [R, p],
    );
    var P = r.useCallback(
        function (e) {
            return a.default.createElement(
                S,
                o(
                    {
                        setContainerRef: I,
                        setCanvasRef: v,
                    },
                    e,
                ),
            );
        },
        [v, I],
    );
    return {
        canvas: l,
        container: d.current,
        setCanvasRef: v,
        setContainerRef: I,
        rive: p,
        RiveComponent: P,
    };
}
function C(e, t, n) {
    var i = r.useState(null),
        a = i[0],
        s = i[1],
        l = r.useState(n.defaultValue),
        c = l[0],
        u = l[1],
        d = r.useState(null),
        f = d[0],
        _ = d[1],
        p = r.useRef(null),
        h = r.useRef(e),
        m = r.useRef(n);
    r.useEffect(
        function () {
            m.current = n;
        },
        [n],
    );
    var g = r.useCallback(function () {
        var e = p.current,
            t = h.current,
            n = m.current;
        if (!e || !t) return s(null), u(n.defaultValue), _(null), function () {};
        var r = n.getProperty(e, t);
        if (r) {
            s(r), u(n.getValue(r)), n.getExtendedData && _(n.getExtendedData(r));
            var i = function () {
                u(n.getValue(r)),
                    n.getExtendedData && _(n.getExtendedData(r)),
                    n.onPropertyEvent && n.onPropertyEvent();
            };
            return (
                r.on(i),
                function () {
                    r.off(i);
                }
            );
        }
        return function () {};
    }, []);
    r.useEffect(
        function () {
            return (p.current = t), (h.current = e), g();
        },
        [t, e, g],
    );
    var E = r.useCallback(
            function (e) {
                if (a && p.current === t)
                    try {
                        return e(a), void (m.current.getExtendedData && _(m.current.getExtendedData(a)));
                    } catch (e) {}
                if (p.current)
                    try {
                        var n = m.current.getProperty(p.current, h.current);
                        n && (s(n), e(n), m.current.getExtendedData && _(m.current.getExtendedData(n)));
                    } catch (e) {}
            },
            [a, t],
        ),
        b = r.useMemo(
            function () {
                return m.current.buildPropertyOperations(E);
            },
            [E],
        ),
        y = o({ value: c }, b);
    return n.getExtendedData && (y.extendedData = f), y;
}
(t.default = function (e) {
    var t = e.src,
        n = e.artboard,
        r = e.animations,
        i = e.stateMachines,
        l = e.layout,
        c = e.useOffscreenRenderer,
        u = void 0 === c || c,
        d = e.shouldDisableRiveListeners,
        f = void 0 !== d && d,
        _ = e.shouldResizeCanvasToContainer,
        p = void 0 === _ || _,
        h = e.automaticallyHandleEvents,
        m = void 0 !== h && h,
        g = e.children,
        E = s(e, [
            "src",
            "artboard",
            "animations",
            "stateMachines",
            "layout",
            "useOffscreenRenderer",
            "shouldDisableRiveListeners",
            "shouldResizeCanvasToContainer",
            "automaticallyHandleEvents",
            "children",
        ]),
        b = A(
            {
                src: t,
                artboard: n,
                animations: r,
                layout: l,
                stateMachines: i,
                autoplay: !0,
                shouldDisableRiveListeners: f,
                automaticallyHandleEvents: m,
            },
            {
                useOffscreenRenderer: u,
                shouldResizeCanvasToContainer: p,
            },
        ).RiveComponent;
    return a.default.createElement(b, o({}, E), g);
}),
    (t.useResizeCanvas = b),
    (t.useRive = A),
    (t.useRiveFile = function (e) {
        var t = this,
            n = r.useState(null),
            a = n[0],
            o = n[1],
            s = r.useState("idle"),
            u = s[0],
            d = s[1];
        return (
            r.useEffect(
                function () {
                    var n = null;
                    return (
                        l(t, void 0, void 0, function () {
                            return c(this, function (t) {
                                try {
                                    d("loading"),
                                        (n = new i.RiveFile(e)).init(),
                                        n.on(i.EventType.Load, function () {
                                            null == n || n.getInstance(), o(n), d("success");
                                        }),
                                        n.on(i.EventType.LoadError, function () {
                                            d("failed");
                                        }),
                                        o(n);
                                } catch (e) {
                                    console.error(e), d("failed");
                                }
                                return [2];
                            });
                        }),
                        function () {
                            null == n || n.cleanup();
                        }
                    );
                },
                [e.src, e.buffer],
            ),
            {
                riveFile: a,
                status: u,
            }
        );
    }),
    (t.useStateMachineInput = function (e, t, n, a) {
        var o = r.useState(null),
            s = o[0],
            l = o[1];
        return (
            r.useEffect(
                function () {
                    function r() {
                        if (((e && t && n) || l(null), e && t && n)) {
                            var r = e.stateMachineInputs(t);
                            if (r) {
                                var i = r.find(function (e) {
                                    return e.name === n;
                                });
                                void 0 !== a && i && (i.value = a), l(i || null);
                            }
                        } else l(null);
                    }
                    r(),
                        e &&
                            e.on(i.EventType.Load, function () {
                                r();
                            });
                },
                [e],
            ),
            s
        );
    }),
    (t.useViewModel = function (e, t) {
        var n = null != t ? t : {},
            a = n.name,
            o = n.useDefault,
            s = void 0 !== o && o,
            l = r.useState(null),
            c = l[0],
            u = l[1];
        return (
            r.useEffect(
                function () {
                    function t() {
                        var t;
                        if (e) {
                            var n = null;
                            u(
                                (n =
                                    null != a
                                        ? (null == (t = e.viewModelByName) ? void 0 : t.call(e, a)) || null
                                        : e.defaultViewModel() || null),
                            );
                        } else u(null);
                    }
                    return (
                        t(),
                        e && e.on(i.EventType.Load, t),
                        function () {
                            e && e.off(i.EventType.Load, t);
                        }
                    );
                },
                [e, a, s],
            ),
            c
        );
    }),
    (t.useViewModelInstance = function (e, t) {
        var n = null != t ? t : {},
            i = n.name,
            a = n.useDefault,
            o = void 0 !== a && a,
            s = n.useNew,
            l = void 0 !== s && s,
            c = n.rive,
            u = r.useState(null),
            d = u[0],
            f = u[1];
        return (
            r.useEffect(
                function () {
                    var t, n, r;
                    if (e) {
                        var a = null;
                        f(
                            (a =
                                null != i
                                    ? e.instanceByName(i) || null
                                    : o
                                      ? (null == (t = e.defaultInstance) ? void 0 : t.call(e)) || null
                                      : l
                                        ? (null == (n = e.instance) ? void 0 : n.call(e)) || null
                                        : (null == (r = e.defaultInstance) ? void 0 : r.call(e)) || null),
                        ),
                            c && a && c.viewModelInstance !== a && c.bindViewModelInstance(a);
                    } else f(null);
                },
                [e, i, o, l, c],
            ),
            d
        );
    }),
    (t.useViewModelInstanceArtboard = function (e, t) {
        return {
            setValue: C(e, t, {
                getProperty: r.useCallback(function (e, t) {
                    return e.artboard(t);
                }, []),
                getValue: r.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: r.useCallback(function (e) {
                    return {
                        setValue: function (t) {
                            e(function (e) {
                                e.value = t;
                            });
                        },
                    };
                }, []),
            }).setValue,
        };
    }),
    (t.useViewModelInstanceBoolean = function (e, t) {
        var n = C(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.boolean(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return {
            value: n.value,
            setValue: n.setValue,
        };
    }),
    (t.useViewModelInstanceColor = function (e, t) {
        var n = C(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.color(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                    setRgb: function (t, n, r) {
                        e(function (e) {
                            e.rgb(t, n, r);
                        });
                    },
                    setRgba: function (t, n, r, i) {
                        e(function (e) {
                            e.rgba(t, n, r, i);
                        });
                    },
                    setAlpha: function (t) {
                        e(function (e) {
                            e.alpha(t);
                        });
                    },
                    setOpacity: function (t) {
                        e(function (e) {
                            e.opacity(t);
                        });
                    },
                };
            }, []),
        });
        return {
            value: n.value,
            setValue: n.setValue,
            setRgb: n.setRgb,
            setRgba: n.setRgba,
            setAlpha: n.setAlpha,
            setOpacity: n.setOpacity,
        };
    }),
    (t.useViewModelInstanceEnum = function (e, t) {
        var n = C(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.enum(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            getExtendedData: r.useCallback(function (e) {
                return e.values;
            }, []),
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return {
            value: n.value,
            values: n.extendedData || [],
            setValue: n.setValue,
        };
    }),
    (t.useViewModelInstanceImage = function (e, t) {
        return {
            setValue: C(e, t, {
                getProperty: r.useCallback(function (e, t) {
                    return e.image(t);
                }, []),
                getValue: r.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: r.useCallback(function (e) {
                    return {
                        setValue: function (t) {
                            e(function (e) {
                                e.value = t;
                            });
                        },
                    };
                }, []),
            }).setValue,
        };
    }),
    (t.useViewModelInstanceList = function (e, t) {
        var n,
            i = r.useState(0)[1],
            a = C(e, t, {
                getProperty: r.useCallback(function (e, t) {
                    return e.list(t);
                }, []),
                getValue: r.useCallback(function (e) {
                    return e.length;
                }, []),
                defaultValue: null,
                onPropertyEvent: function () {
                    i(function (e) {
                        return e + 1;
                    });
                },
                buildPropertyOperations: r.useCallback(function (e) {
                    return {
                        addInstance: function (t) {
                            e(function (e) {
                                return e.addInstance(t);
                            });
                        },
                        addInstanceAt: function (t, n) {
                            var r = !1;
                            return (
                                e(function (e) {
                                    r = e.addInstanceAt(t, n);
                                }),
                                r
                            );
                        },
                        removeInstance: function (t) {
                            e(function (e) {
                                return e.removeInstance(t);
                            });
                        },
                        removeInstanceAt: function (t) {
                            e(function (e) {
                                return e.removeInstanceAt(t);
                            });
                        },
                        getInstanceAt: function (t) {
                            var n = null;
                            return (
                                e(function (e) {
                                    n = e.instanceAt(t);
                                }),
                                n
                            );
                        },
                        swap: function (t, n) {
                            e(function (e) {
                                return e.swap(t, n);
                            });
                        },
                    };
                }, []),
            });
        return {
            length: null != (n = a.value) ? n : 0,
            addInstance: a.addInstance,
            addInstanceAt: a.addInstanceAt,
            removeInstance: a.removeInstance,
            removeInstanceAt: a.removeInstanceAt,
            getInstanceAt: a.getInstanceAt,
            swap: a.swap,
        };
    }),
    (t.useViewModelInstanceNumber = function (e, t) {
        var n = C(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.number(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return {
            value: n.value,
            setValue: n.setValue,
        };
    }),
    (t.useViewModelInstanceString = function (e, t) {
        var n = C(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.string(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return {
            value: n.value,
            setValue: n.setValue,
        };
    }),
    (t.useViewModelInstanceTrigger = function (e, t, n) {
        var i = (null != n ? n : {}).onTrigger;
        return {
            trigger: C(e, t, {
                getProperty: r.useCallback(function (e, t) {
                    return e.trigger(t);
                }, []),
                getValue: r.useCallback(function () {}, []),
                defaultValue: null,
                onPropertyEvent: i,
                buildPropertyOperations: r.useCallback(function (e) {
                    return {
                        trigger: function () {
                            e(function (e) {
                                e.trigger();
                            });
                        },
                    };
                }, []),
            }).trigger,
        };
    }),
    Object.keys(i).forEach(function (e) {
        "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return i[e];
                },
            });
    });
