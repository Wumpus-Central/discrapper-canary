Object.defineProperty(t, "__esModule", { value: !0 });
var r = n(64700),
    i = n(877508),
    s = r && "object" == typeof r && "default" in r ? r : { default: r },
    a = function () {
        return (a =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }).apply(this, arguments);
    };
function o(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    }
    return n;
}
function l(e) {
    var t = e || u(),
        n = r.useState(t),
        i = n[0],
        s = n[1];
    return (
        r.useEffect(
            function () {
                if ("u" > typeof window && "matchMedia" in window) {
                    var t = function () {
                            s(e || u());
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
function u() {
    return Math.min(
        Math.max(1, "u" > typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1),
        3,
    );
}
var d = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    c = globalThis.ResizeObserver || d,
    _ = void 0 !== globalThis.ResizeObserver,
    f = !_,
    E = {
        useDevicePixelRatio: !0,
        fitCanvasToArtboardHeight: !1,
        useOffscreenRenderer: !0,
        shouldResizeCanvasToContainer: !0,
    };
function h(e) {
    return Object.assign({}, E, e);
}
function p(e) {
    var t,
        n,
        i,
        s,
        a,
        o,
        u,
        d = e.riveLoaded,
        E = void 0 !== d && d,
        p = e.canvasElem,
        m = e.containerRef,
        g = e.options,
        A = e.onCanvasHasResized,
        I = e.artboardBounds,
        T = h(void 0 === g ? {} : g),
        S = r.useState({ height: 0, width: 0 }),
        y = S[0],
        N = y.height,
        O = y.width,
        R = S[1],
        v = r.useState({ height: 0, width: 0 }),
        C = v[0],
        b = C.height,
        D = C.width,
        L = v[1],
        w = r.useState(!0),
        M = w[0],
        P = w[1],
        U = T.fitCanvasToArtboardHeight,
        k = T.shouldResizeCanvasToContainer,
        x = T.useDevicePixelRatio,
        G = T.customDevicePixelRatio,
        V =
            (void 0 === (t = k) && (t = !0),
            (i = (n = r.useState({ width: 0, height: 0 }))[0]),
            (s = n[1]),
            r.useEffect(function () {
                if ("u" > typeof window && t) {
                    var e = function () {
                        s({ width: window.innerWidth, height: window.innerHeight });
                    };
                    return (
                        f && (e(), window.addEventListener("resize", e)),
                        function () {
                            return window.removeEventListener("resize", e);
                        }
                    );
                }
            }, []),
            (u = r.useRef(
                new c(
                    ((a = function (e) {
                        _ &&
                            s({ width: e[e.length - 1].contentRect.width, height: e[e.length - 1].contentRect.height });
                    }),
                    (o = 0),
                    function () {
                        for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        clearTimeout(o),
                            (o = window.setTimeout(function () {
                                return a.apply(e, t);
                            }, 0));
                    }),
                ),
            )),
            r.useEffect(
                function () {
                    var e = u.current;
                    if (t) {
                        var n = m.current;
                        return (
                            m.current && _ && e.observe(m.current),
                            function () {
                                e.disconnect(), n && _ && e.unobserve(n);
                            }
                        );
                    }
                    e.disconnect();
                },
                [m, u],
            ),
            i),
        F = l(G),
        B = null != I ? I : {},
        H = B.maxX,
        Y = B.maxY,
        W = r.useCallback(
            function () {
                var e,
                    t,
                    n,
                    r,
                    i = null != (t = null == (e = m.current) ? void 0 : e.clientWidth) ? t : 0,
                    s = null != (r = null == (n = m.current) ? void 0 : n.clientHeight) ? r : 0;
                return U && I ? { width: i, height: i * (I.maxY / I.maxX) } : { width: i, height: s };
            },
            [m, U, H, Y],
        );
    r.useEffect(
        function () {
            if (k && m.current && E) {
                var e = W(),
                    t = e.width,
                    n = e.height,
                    r = !1;
                if (p) {
                    var i = t !== O || n !== N;
                    if (
                        (T.fitCanvasToArtboardHeight && i && ((m.current.style.height = n + "px"), (r = !0)),
                        T.useDevicePixelRatio)
                    ) {
                        if (i || t * F !== D || n * F !== b) {
                            var s = F * t,
                                a = F * n;
                            (p.width = s),
                                (p.height = a),
                                (p.style.width = t + "px"),
                                (p.style.height = n + "px"),
                                L({ width: s, height: a }),
                                (r = !0);
                        }
                    } else i && ((p.width = t), (p.height = n), L({ width: t, height: n }), (r = !0));
                    R({ width: t, height: n });
                }
                A && (M || r) && A && A(), M && P(!1);
            }
        },
        [p, m, V, F, W, M, P, b, D, N, O, A, k, U, x, E],
    ),
        r.useEffect(
            function () {
                L({ width: 0, height: 0 });
            },
            [p],
        );
}
var m,
    g = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    A = globalThis.IntersectionObserver || g,
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
                (this.observer = new A(this.onObserved));
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
        return m || (m = new I()), m;
    };
function S(e) {
    var t = e.setContainerRef,
        n = e.setCanvasRef,
        r = e.className,
        i = void 0 === r ? "" : r,
        l = e.style,
        u = e.children,
        d = o(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]),
        c = a({ width: "100%", height: "100%" }, l);
    return s.default.createElement(
        "div",
        a({ ref: t, className: i }, !i && { style: c }),
        s.default.createElement("canvas", a({ ref: n, style: { verticalAlign: "top", width: 0, height: 0 } }, d), u),
    );
}
function y(e, t) {
    void 0 === t && (t = {});
    var n = r.useState(null),
        u = n[0],
        d = n[1],
        c = r.useRef(null),
        _ = r.useRef(null),
        f = r.useState(null),
        E = f[0],
        m = f[1],
        g = !!e,
        A = h(t),
        I = l(),
        y = r.useCallback(
            function () {
                if (E) {
                    if (E.layout && E.layout.fit === i.Fit.Layout && u) {
                        var e = I * E.layout.layoutScaleFactor;
                        (E.devicePixelRatioUsed = I),
                            (E.artboardWidth = (null == u ? void 0 : u.width) / e),
                            (E.artboardHeight = (null == u ? void 0 : u.height) / e);
                    }
                    E.startRendering(), E.resizeToCanvas();
                }
            },
            [E, I],
        );
    p({
        riveLoaded: !!E,
        canvasElem: u,
        containerRef: c,
        options: A,
        onCanvasHasResized: y,
        artboardBounds: null == E ? void 0 : E.bounds,
    });
    var N = r.useCallback(function (e) {
        null === e && u && ((u.height = 0), (u.width = 0)), d(e);
    }, []);
    r.useEffect(
        function () {
            if (u && e) {
                var t,
                    n = null != E;
                if (null == E) {
                    var r = A.useOffscreenRenderer,
                        s = e.onRiveReady,
                        l = o(e, ["onRiveReady"]);
                    (t = new i.Rive(a(a({ useOffscreenRenderer: r }, l), { canvas: u }))),
                        null != _.current && _.current.cleanup(),
                        (_.current = t),
                        t.on(i.EventType.Load, function () {
                            (n = !0), s && s(t), u ? m(t) : t.cleanup();
                        });
                }
                return function () {
                    n || null == t || t.cleanup();
                };
            }
        },
        [u, g, E],
    );
    var O = r.useCallback(function (e) {
            c.current = e;
        }, []),
        R = {
            observe: r.useCallback(function (e, t) {
                T().registerCallback(e, t);
            }, []),
            unobserve: r.useCallback(function (e) {
                T().removeCallback(e);
            }, []),
        },
        v = R.observe,
        C = R.unobserve;
    r.useEffect(
        function () {
            var e,
                t = !1,
                n = function () {
                    if (u && t) {
                        var e = u.getBoundingClientRect();
                        e.width > 0 &&
                            e.height > 0 &&
                            e.top < (window.innerHeight || document.documentElement.clientHeight) &&
                            e.bottom > 0 &&
                            e.left < (window.innerWidth || document.documentElement.clientWidth) &&
                            e.right > 0 &&
                            (null == E || E.startRendering(), (t = !1));
                    }
                };
            return (
                u &&
                    !1 !== A.shouldUseIntersectionObserver &&
                    v(u, function (r) {
                        r.isIntersecting ? E && E.startRendering() : E && E.stopRendering(),
                            (t = !r.isIntersecting),
                            clearTimeout(e),
                            r.isIntersecting || 0 !== r.boundingClientRect.width || (e = setTimeout(n, 10));
                    }),
                function () {
                    u && C(u);
                }
            );
        },
        [v, C, E, u, A.shouldUseIntersectionObserver],
    ),
        r.useEffect(
            function () {
                return function () {
                    E && (E.cleanup(), m(null));
                };
            },
            [E, u],
        ),
        r.useEffect(function () {
            return function () {
                null != _.current && _.current.cleanup();
            };
        }, []);
    var b = null == e ? void 0 : e.animations;
    r.useEffect(
        function () {
            E &&
                b &&
                (E.isPlaying
                    ? (E.stop(E.animationNames), E.play(b))
                    : E.isPaused && (E.stop(E.animationNames), E.pause(b)));
        },
        [b, E],
    );
    var D = r.useCallback(
        function (e) {
            return s.default.createElement(S, a({ setContainerRef: O, setCanvasRef: N }, e));
        },
        [N, O],
    );
    return { canvas: u, container: c.current, setCanvasRef: N, setContainerRef: O, rive: E, RiveComponent: D };
}
function N(e, t, n) {
    var i = r.useState(null),
        s = i[0],
        o = i[1],
        l = r.useState(n.defaultValue),
        u = l[0],
        d = l[1],
        c = r.useState(null),
        _ = c[0],
        f = c[1],
        E = r.useRef(null),
        h = r.useRef(e),
        p = r.useRef(n);
    r.useEffect(
        function () {
            p.current = n;
        },
        [n],
    );
    var m = r.useCallback(function () {
        var e = E.current,
            t = h.current,
            n = p.current;
        if (!e || !t) return o(null), d(n.defaultValue), f(null), function () {};
        var r = n.getProperty(e, t);
        if (r) {
            o(r), d(n.getValue(r)), n.getExtendedData && f(n.getExtendedData(r));
            var i = function () {
                d(n.getValue(r)),
                    n.getExtendedData && f(n.getExtendedData(r)),
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
            return (E.current = t), (h.current = e), m();
        },
        [t, e, m],
    );
    var g = r.useCallback(
            function (e) {
                if (s && E.current === t)
                    try {
                        return e(s), void (p.current.getExtendedData && f(p.current.getExtendedData(s)));
                    } catch (e) {}
                if (E.current)
                    try {
                        var n = p.current.getProperty(E.current, h.current);
                        n && (o(n), e(n), p.current.getExtendedData && f(p.current.getExtendedData(n)));
                    } catch (e) {}
            },
            [s, t],
        ),
        A = r.useMemo(
            function () {
                return p.current.buildPropertyOperations(g);
            },
            [g],
        ),
        I = a({ value: u }, A);
    return n.getExtendedData && (I.extendedData = _), I;
}
(t.default = function (e) {
    var t = e.src,
        n = e.artboard,
        r = e.animations,
        i = e.stateMachines,
        l = e.layout,
        u = e.useOffscreenRenderer,
        d = e.shouldDisableRiveListeners,
        c = e.shouldResizeCanvasToContainer,
        _ = e.automaticallyHandleEvents,
        f = e.children,
        E = o(e, [
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
        h = y(
            {
                src: t,
                artboard: n,
                animations: r,
                layout: l,
                stateMachines: i,
                autoplay: !0,
                shouldDisableRiveListeners: void 0 !== d && d,
                automaticallyHandleEvents: void 0 !== _ && _,
            },
            { useOffscreenRenderer: void 0 === u || u, shouldResizeCanvasToContainer: void 0 === c || c },
        ).RiveComponent;
    return s.default.createElement(h, a({}, E), f);
}),
    (t.useResizeCanvas = p),
    (t.useRive = y),
    (t.useRiveFile = function (e) {
        var t = this,
            n = r.useState(null),
            s = n[0],
            a = n[1],
            o = r.useState("idle"),
            l = o[0],
            u = o[1];
        return (
            r.useEffect(
                function () {
                    var n,
                        r,
                        s,
                        o = null;
                    return (
                        (n = void 0),
                        (r = void 0),
                        (s = function () {
                            return (function (e, t) {
                                var n,
                                    r,
                                    i,
                                    s,
                                    a = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & i[0]) throw i[1];
                                            return i[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (s = { next: o(0), throw: o(1), return: o(2) }),
                                    "function" == typeof Symbol &&
                                        (s[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    s
                                );
                                function o(s) {
                                    return function (o) {
                                        var l = [s, o];
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a; )
                                            try {
                                                if (
                                                    ((n = 1),
                                                    r &&
                                                        (i =
                                                            2 & l[0]
                                                                ? r.return
                                                                : l[0]
                                                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                                                  : r.next) &&
                                                        !(i = i.call(r, l[1])).done)
                                                )
                                                    return i;
                                                switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                                                    case 0:
                                                    case 1:
                                                        i = l;
                                                        break;
                                                    case 4:
                                                        return a.label++, { value: l[1], done: !1 };
                                                    case 5:
                                                        a.label++, (r = l[1]), (l = [0]);
                                                        continue;
                                                    case 7:
                                                        (l = a.ops.pop()), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                                                            (6 === l[0] || 2 === l[0])
                                                        ) {
                                                            a = 0;
                                                            continue;
                                                        }
                                                        if (3 === l[0] && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                                                            a.label = l[1];
                                                            break;
                                                        }
                                                        if (6 === l[0] && a.label < i[1]) {
                                                            (a.label = i[1]), (i = l);
                                                            break;
                                                        }
                                                        if (i && a.label < i[2]) {
                                                            (a.label = i[2]), a.ops.push(l);
                                                            break;
                                                        }
                                                        i[2] && a.ops.pop(), a.trys.pop();
                                                        continue;
                                                }
                                                l = t.call(e, a);
                                            } catch (e) {
                                                (l = [6, e]), (r = 0);
                                            } finally {
                                                n = i = 0;
                                            }
                                        if (5 & l[0]) throw l[1];
                                        return { value: l[0] ? l[1] : void 0, done: !0 };
                                    };
                                }
                            })(this, function (t) {
                                try {
                                    u("loading"),
                                        (o = new i.RiveFile(e)).init(),
                                        o.on(i.EventType.Load, function () {
                                            null == o || o.getInstance(), a(o), u("success");
                                        }),
                                        o.on(i.EventType.LoadError, function () {
                                            u("failed");
                                        }),
                                        a(o);
                                } catch (e) {
                                    console.error(e), u("failed");
                                }
                                return [2];
                            });
                        }),
                        new (r || (r = Promise))(function (e, i) {
                            function a(e) {
                                try {
                                    l(s.next(e));
                                } catch (e) {
                                    i(e);
                                }
                            }
                            function o(e) {
                                try {
                                    l(s.throw(e));
                                } catch (e) {
                                    i(e);
                                }
                            }
                            function l(t) {
                                var n;
                                t.done
                                    ? e(t.value)
                                    : ((n = t.value) instanceof r
                                          ? n
                                          : new r(function (e) {
                                                e(n);
                                            })
                                      ).then(a, o);
                            }
                            l((s = s.apply(t, n || [])).next());
                        }),
                        function () {
                            null == o || o.cleanup();
                        }
                    );
                },
                [e.src, e.buffer],
            ),
            { riveFile: s, status: l }
        );
    }),
    (t.useStateMachineInput = function (e, t, n, s) {
        var a = r.useState(null),
            o = a[0],
            l = a[1];
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
                                void 0 !== s && i && (i.value = s), l(i || null);
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
            o
        );
    }),
    (t.useViewModel = function (e, t) {
        var n = null != t ? t : {},
            s = n.name,
            a = n.useDefault,
            o = r.useState(null),
            l = o[0],
            u = o[1];
        return (
            r.useEffect(
                function () {
                    function t() {
                        var t;
                        if (e)
                            u(
                                null != s
                                    ? (null == (t = e.viewModelByName) ? void 0 : t.call(e, s)) || null
                                    : e.defaultViewModel() || null,
                            );
                        else u(null);
                    }
                    return (
                        t(),
                        e && e.on(i.EventType.Load, t),
                        function () {
                            e && e.off(i.EventType.Load, t);
                        }
                    );
                },
                [e, s, void 0 !== a && a],
            ),
            l
        );
    }),
    (t.useViewModelInstance = function (e, t) {
        var n = null != t ? t : {},
            i = n.name,
            s = n.useDefault,
            a = void 0 !== s && s,
            o = n.useNew,
            l = void 0 !== o && o,
            u = n.rive,
            d = r.useState(null),
            c = d[0],
            _ = d[1];
        return (
            r.useEffect(
                function () {
                    var t, n, r;
                    if (e) {
                        var s = null;
                        _(
                            (s =
                                null != i
                                    ? e.instanceByName(i) || null
                                    : a
                                      ? (null == (t = e.defaultInstance) ? void 0 : t.call(e)) || null
                                      : l
                                        ? (null == (n = e.instance) ? void 0 : n.call(e)) || null
                                        : (null == (r = e.defaultInstance) ? void 0 : r.call(e)) || null),
                        ),
                            u && s && u.viewModelInstance !== s && u.bindViewModelInstance(s);
                    } else _(null);
                },
                [e, i, a, l, u],
            ),
            c
        );
    }),
    (t.useViewModelInstanceArtboard = function (e, t) {
        return {
            setValue: N(e, t, {
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
        var n = N(e, t, {
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
        return { value: n.value, setValue: n.setValue };
    }),
    (t.useViewModelInstanceColor = function (e, t) {
        var n = N(e, t, {
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
        var n = N(e, t, {
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
        return { value: n.value, values: n.extendedData || [], setValue: n.setValue };
    }),
    (t.useViewModelInstanceImage = function (e, t) {
        return {
            setValue: N(e, t, {
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
            s = N(e, t, {
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
            length: null != (n = s.value) ? n : 0,
            addInstance: s.addInstance,
            addInstanceAt: s.addInstanceAt,
            removeInstance: s.removeInstance,
            removeInstanceAt: s.removeInstanceAt,
            getInstanceAt: s.getInstanceAt,
            swap: s.swap,
        };
    }),
    (t.useViewModelInstanceNumber = function (e, t) {
        var n = N(e, t, {
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
        return { value: n.value, setValue: n.setValue };
    }),
    (t.useViewModelInstanceString = function (e, t) {
        var n = N(e, t, {
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
        return { value: n.value, setValue: n.setValue };
    }),
    (t.useViewModelInstanceTrigger = function (e, t, n) {
        var i = (null != n ? n : {}).onTrigger;
        return {
            trigger: N(e, t, {
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
