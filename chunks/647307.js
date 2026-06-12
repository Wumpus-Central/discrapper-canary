Object.defineProperty(t, "__esModule", { value: !0 });
var i = n(64700),
    r = n(877508),
    s = i && "object" == typeof i && "default" in i ? i : { default: i },
    a = function () {
        return (a =
            Object.assign ||
            function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
            }).apply(this, arguments);
    };
function o(e, t) {
    var n = {};
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
            0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
    }
    return n;
}
function l(e) {
    var t = e || u(),
        n = i.useState(t),
        r = n[0],
        s = n[1];
    return (
        i.useEffect(
            function () {
                if ("u" > typeof window && "matchMedia" in window) {
                    var t = function () {
                            s(e || u());
                        },
                        n = window.matchMedia("screen and (resolution: ".concat(r, "dppx)"));
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
            [r, e],
        ),
        r
    );
}
function u() {
    return Math.min(
        Math.max(1, "u" > typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1),
        3,
    );
}
var c = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    d = globalThis.ResizeObserver || c,
    _ = void 0 !== globalThis.ResizeObserver,
    h = !_,
    f = {
        useDevicePixelRatio: !0,
        fitCanvasToArtboardHeight: !1,
        useOffscreenRenderer: !0,
        shouldResizeCanvasToContainer: !0,
    };
function p(e) {
    return Object.assign({}, f, e);
}
function E(e) {
    var t,
        n,
        r,
        s,
        a,
        o,
        u,
        c = e.riveLoaded,
        f = void 0 !== c && c,
        E = e.canvasElem,
        m = e.containerRef,
        g = e.options,
        A = e.onCanvasHasResized,
        I = e.artboardBounds,
        T = p(void 0 === g ? {} : g),
        S = i.useState({ height: 0, width: 0 }),
        y = S[0],
        N = y.height,
        v = y.width,
        C = S[1],
        R = i.useState({ height: 0, width: 0 }),
        O = R[0],
        b = O.height,
        D = O.width,
        L = R[1],
        w = i.useState(!0),
        M = w[0],
        P = w[1],
        x = T.fitCanvasToArtboardHeight,
        k = T.shouldResizeCanvasToContainer,
        U = T.useDevicePixelRatio,
        G = T.customDevicePixelRatio,
        F =
            (void 0 === (t = k) && (t = !0),
            (r = (n = i.useState({ width: 0, height: 0 }))[0]),
            (s = n[1]),
            i.useEffect(function () {
                if ("u" > typeof window && t) {
                    var e = function () {
                        s({ width: window.innerWidth, height: window.innerHeight });
                    };
                    return (
                        h && (e(), window.addEventListener("resize", e)),
                        function () {
                            return window.removeEventListener("resize", e);
                        }
                    );
                }
            }, []),
            (u = i.useRef(
                new d(
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
            i.useEffect(
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
            r),
        V = l(G),
        B = null != I ? I : {},
        H = B.maxX,
        j = B.maxY,
        Y = i.useCallback(
            function () {
                var e,
                    t,
                    n,
                    i,
                    r = null != (t = null == (e = m.current) ? void 0 : e.clientWidth) ? t : 0,
                    s = null != (i = null == (n = m.current) ? void 0 : n.clientHeight) ? i : 0;
                return x && I ? { width: r, height: r * (I.maxY / I.maxX) } : { width: r, height: s };
            },
            [m, x, H, j],
        );
    i.useEffect(
        function () {
            if (k && m.current && f) {
                var e = Y(),
                    t = e.width,
                    n = e.height,
                    i = !1;
                if (E) {
                    var r = t !== v || n !== N;
                    if (
                        (T.fitCanvasToArtboardHeight && r && ((m.current.style.height = n + "px"), (i = !0)),
                        T.useDevicePixelRatio)
                    ) {
                        if (r || t * V !== D || n * V !== b) {
                            var s = V * t,
                                a = V * n;
                            (E.width = s),
                                (E.height = a),
                                (E.style.width = t + "px"),
                                (E.style.height = n + "px"),
                                L({ width: s, height: a }),
                                (i = !0);
                        }
                    } else r && ((E.width = t), (E.height = n), L({ width: t, height: n }), (i = !0));
                    C({ width: t, height: n });
                }
                A && (M || i) && A && A(), M && P(!1);
            }
        },
        [E, m, F, V, Y, M, P, b, D, N, v, A, k, x, U, f],
    ),
        i.useEffect(
            function () {
                L({ width: 0, height: 0 });
            },
            [E],
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
        i = e.className,
        r = void 0 === i ? "" : i,
        l = e.style,
        u = e.children,
        c = o(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]),
        d = a({ width: "100%", height: "100%" }, l);
    return s.default.createElement(
        "div",
        a({ ref: t, className: r }, !r && { style: d }),
        s.default.createElement("canvas", a({ ref: n, style: { verticalAlign: "top", width: 0, height: 0 } }, c), u),
    );
}
function y(e, t) {
    void 0 === t && (t = {});
    var n = i.useState(null),
        u = n[0],
        c = n[1],
        d = i.useRef(null),
        _ = i.useRef(null),
        h = i.useState(null),
        f = h[0],
        m = h[1],
        g = !!e,
        A = p(t),
        I = l(),
        y = i.useCallback(
            function () {
                if (f) {
                    if (f.layout && f.layout.fit === r.Fit.Layout && u) {
                        var e = I * f.layout.layoutScaleFactor;
                        (f.devicePixelRatioUsed = I),
                            (f.artboardWidth = (null == u ? void 0 : u.width) / e),
                            (f.artboardHeight = (null == u ? void 0 : u.height) / e);
                    }
                    f.startRendering(), f.resizeToCanvas();
                }
            },
            [f, I],
        );
    E({
        riveLoaded: !!f,
        canvasElem: u,
        containerRef: d,
        options: A,
        onCanvasHasResized: y,
        artboardBounds: null == f ? void 0 : f.bounds,
    });
    var N = i.useCallback(function (e) {
        null === e && u && ((u.height = 0), (u.width = 0)), c(e);
    }, []);
    i.useEffect(
        function () {
            if (u && e) {
                var t,
                    n = null != f;
                if (null == f) {
                    var i = A.useOffscreenRenderer,
                        s = e.onRiveReady,
                        l = o(e, ["onRiveReady"]);
                    (t = new r.Rive(a(a({ useOffscreenRenderer: i }, l), { canvas: u }))),
                        null != _.current && _.current.cleanup(),
                        (_.current = t),
                        t.on(r.EventType.Load, function () {
                            (n = !0), s && s(t), u ? m(t) : t.cleanup();
                        });
                }
                return function () {
                    n || null == t || t.cleanup();
                };
            }
        },
        [u, g, f],
    );
    var v = i.useCallback(function (e) {
            d.current = e;
        }, []),
        C = {
            observe: i.useCallback(function (e, t) {
                T().registerCallback(e, t);
            }, []),
            unobserve: i.useCallback(function (e) {
                T().removeCallback(e);
            }, []),
        },
        R = C.observe,
        O = C.unobserve;
    i.useEffect(
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
                            (null == f || f.startRendering(), (t = !1));
                    }
                };
            return (
                u &&
                    !1 !== A.shouldUseIntersectionObserver &&
                    R(u, function (i) {
                        i.isIntersecting ? f && f.startRendering() : f && f.stopRendering(),
                            (t = !i.isIntersecting),
                            clearTimeout(e),
                            i.isIntersecting || 0 !== i.boundingClientRect.width || (e = setTimeout(n, 10));
                    }),
                function () {
                    u && O(u);
                }
            );
        },
        [R, O, f, u, A.shouldUseIntersectionObserver],
    ),
        i.useEffect(
            function () {
                return function () {
                    f && (f.cleanup(), m(null));
                };
            },
            [f, u],
        ),
        i.useEffect(function () {
            return function () {
                null != _.current && _.current.cleanup();
            };
        }, []);
    var b = null == e ? void 0 : e.animations;
    i.useEffect(
        function () {
            f &&
                b &&
                (f.isPlaying
                    ? (f.stop(f.animationNames), f.play(b))
                    : f.isPaused && (f.stop(f.animationNames), f.pause(b)));
        },
        [b, f],
    );
    var D = i.useCallback(
        function (e) {
            return s.default.createElement(S, a({ setContainerRef: v, setCanvasRef: N }, e));
        },
        [N, v],
    );
    return { canvas: u, container: d.current, setCanvasRef: N, setContainerRef: v, rive: f, RiveComponent: D };
}
function N(e, t, n) {
    var r = i.useState(null),
        s = r[0],
        o = r[1],
        l = i.useState(n.defaultValue),
        u = l[0],
        c = l[1],
        d = i.useState(null),
        _ = d[0],
        h = d[1],
        f = i.useRef(null),
        p = i.useRef(e),
        E = i.useRef(n);
    i.useEffect(
        function () {
            E.current = n;
        },
        [n],
    );
    var m = i.useCallback(function () {
        var e = f.current,
            t = p.current,
            n = E.current;
        if (!e || !t) return o(null), c(n.defaultValue), h(null), function () {};
        var i = n.getProperty(e, t);
        if (i) {
            o(i), c(n.getValue(i)), n.getExtendedData && h(n.getExtendedData(i));
            var r = function () {
                c(n.getValue(i)),
                    n.getExtendedData && h(n.getExtendedData(i)),
                    n.onPropertyEvent && n.onPropertyEvent();
            };
            return (
                i.on(r),
                function () {
                    i.off(r);
                }
            );
        }
        return function () {};
    }, []);
    i.useEffect(
        function () {
            return (f.current = t), (p.current = e), m();
        },
        [t, e, m],
    );
    var g = i.useCallback(
            function (e) {
                if (s && f.current === t)
                    try {
                        return e(s), void (E.current.getExtendedData && h(E.current.getExtendedData(s)));
                    } catch (e) {}
                if (f.current)
                    try {
                        var n = E.current.getProperty(f.current, p.current);
                        n && (o(n), e(n), E.current.getExtendedData && h(E.current.getExtendedData(n)));
                    } catch (e) {}
            },
            [s, t],
        ),
        A = i.useMemo(
            function () {
                return E.current.buildPropertyOperations(g);
            },
            [g],
        ),
        I = a({ value: u }, A);
    return n.getExtendedData && (I.extendedData = _), I;
}
(t.default = function (e) {
    var t = e.src,
        n = e.artboard,
        i = e.animations,
        r = e.stateMachines,
        l = e.layout,
        u = e.useOffscreenRenderer,
        c = e.shouldDisableRiveListeners,
        d = e.shouldResizeCanvasToContainer,
        _ = e.automaticallyHandleEvents,
        h = e.children,
        f = o(e, [
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
        p = y(
            {
                src: t,
                artboard: n,
                animations: i,
                layout: l,
                stateMachines: r,
                autoplay: !0,
                shouldDisableRiveListeners: void 0 !== c && c,
                automaticallyHandleEvents: void 0 !== _ && _,
            },
            { useOffscreenRenderer: void 0 === u || u, shouldResizeCanvasToContainer: void 0 === d || d },
        ).RiveComponent;
    return s.default.createElement(p, a({}, f), h);
}),
    (t.useResizeCanvas = E),
    (t.useRive = y),
    (t.useRiveFile = function (e) {
        var t = this,
            n = i.useState(null),
            s = n[0],
            a = n[1],
            o = i.useState("idle"),
            l = o[0],
            u = o[1];
        return (
            i.useEffect(
                function () {
                    var n,
                        i,
                        s,
                        o = null;
                    return (
                        (n = void 0),
                        (i = void 0),
                        (s = function () {
                            return (function (e, t) {
                                var n,
                                    i,
                                    r,
                                    s,
                                    a = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & r[0]) throw r[1];
                                            return r[1];
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
                                                    i &&
                                                        (r =
                                                            2 & l[0]
                                                                ? i.return
                                                                : l[0]
                                                                  ? i.throw || ((r = i.return) && r.call(i), 0)
                                                                  : i.next) &&
                                                        !(r = r.call(i, l[1])).done)
                                                )
                                                    return r;
                                                switch (((i = 0), r && (l = [2 & l[0], r.value]), l[0])) {
                                                    case 0:
                                                    case 1:
                                                        r = l;
                                                        break;
                                                    case 4:
                                                        return a.label++, { value: l[1], done: !1 };
                                                    case 5:
                                                        a.label++, (i = l[1]), (l = [0]);
                                                        continue;
                                                    case 7:
                                                        (l = a.ops.pop()), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                            (6 === l[0] || 2 === l[0])
                                                        ) {
                                                            a = 0;
                                                            continue;
                                                        }
                                                        if (3 === l[0] && (!r || (l[1] > r[0] && l[1] < r[3]))) {
                                                            a.label = l[1];
                                                            break;
                                                        }
                                                        if (6 === l[0] && a.label < r[1]) {
                                                            (a.label = r[1]), (r = l);
                                                            break;
                                                        }
                                                        if (r && a.label < r[2]) {
                                                            (a.label = r[2]), a.ops.push(l);
                                                            break;
                                                        }
                                                        r[2] && a.ops.pop(), a.trys.pop();
                                                        continue;
                                                }
                                                l = t.call(e, a);
                                            } catch (e) {
                                                (l = [6, e]), (i = 0);
                                            } finally {
                                                n = r = 0;
                                            }
                                        if (5 & l[0]) throw l[1];
                                        return { value: l[0] ? l[1] : void 0, done: !0 };
                                    };
                                }
                            })(this, function (t) {
                                try {
                                    u("loading"),
                                        (o = new r.RiveFile(e)).init(),
                                        o.on(r.EventType.Load, function () {
                                            null == o || o.getInstance(), a(o), u("success");
                                        }),
                                        o.on(r.EventType.LoadError, function () {
                                            u("failed");
                                        }),
                                        a(o);
                                } catch (e) {
                                    console.error(e), u("failed");
                                }
                                return [2];
                            });
                        }),
                        new (i || (i = Promise))(function (e, r) {
                            function a(e) {
                                try {
                                    l(s.next(e));
                                } catch (e) {
                                    r(e);
                                }
                            }
                            function o(e) {
                                try {
                                    l(s.throw(e));
                                } catch (e) {
                                    r(e);
                                }
                            }
                            function l(t) {
                                var n;
                                t.done
                                    ? e(t.value)
                                    : ((n = t.value) instanceof i
                                          ? n
                                          : new i(function (e) {
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
        var a = i.useState(null),
            o = a[0],
            l = a[1];
        return (
            i.useEffect(
                function () {
                    function i() {
                        if (((e && t && n) || l(null), e && t && n)) {
                            var i = e.stateMachineInputs(t);
                            if (i) {
                                var r = i.find(function (e) {
                                    return e.name === n;
                                });
                                void 0 !== s && r && (r.value = s), l(r || null);
                            }
                        } else l(null);
                    }
                    i(),
                        e &&
                            e.on(r.EventType.Load, function () {
                                i();
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
            o = i.useState(null),
            l = o[0],
            u = o[1];
        return (
            i.useEffect(
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
                        e && e.on(r.EventType.Load, t),
                        function () {
                            e && e.off(r.EventType.Load, t);
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
            r = n.name,
            s = n.useDefault,
            a = void 0 !== s && s,
            o = n.useNew,
            l = void 0 !== o && o,
            u = n.rive,
            c = i.useState(null),
            d = c[0],
            _ = c[1];
        return (
            i.useEffect(
                function () {
                    var t, n, i;
                    if (e) {
                        var s = null;
                        _(
                            (s =
                                null != r
                                    ? e.instanceByName(r) || null
                                    : a
                                      ? (null == (t = e.defaultInstance) ? void 0 : t.call(e)) || null
                                      : l
                                        ? (null == (n = e.instance) ? void 0 : n.call(e)) || null
                                        : (null == (i = e.defaultInstance) ? void 0 : i.call(e)) || null),
                        ),
                            u && s && u.viewModelInstance !== s && u.bindViewModelInstance(s);
                    } else _(null);
                },
                [e, r, a, l, u],
            ),
            d
        );
    }),
    (t.useViewModelInstanceArtboard = function (e, t) {
        return {
            setValue: N(e, t, {
                getProperty: i.useCallback(function (e, t) {
                    return e.artboard(t);
                }, []),
                getValue: i.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: i.useCallback(function (e) {
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
            getProperty: i.useCallback(function (e, t) {
                return e.boolean(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: i.useCallback(function (e) {
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
            getProperty: i.useCallback(function (e, t) {
                return e.color(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: i.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                    setRgb: function (t, n, i) {
                        e(function (e) {
                            e.rgb(t, n, i);
                        });
                    },
                    setRgba: function (t, n, i, r) {
                        e(function (e) {
                            e.rgba(t, n, i, r);
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
            getProperty: i.useCallback(function (e, t) {
                return e.enum(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            getExtendedData: i.useCallback(function (e) {
                return e.values;
            }, []),
            buildPropertyOperations: i.useCallback(function (e) {
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
                getProperty: i.useCallback(function (e, t) {
                    return e.image(t);
                }, []),
                getValue: i.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: i.useCallback(function (e) {
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
            r = i.useState(0)[1],
            s = N(e, t, {
                getProperty: i.useCallback(function (e, t) {
                    return e.list(t);
                }, []),
                getValue: i.useCallback(function (e) {
                    return e.length;
                }, []),
                defaultValue: null,
                onPropertyEvent: function () {
                    r(function (e) {
                        return e + 1;
                    });
                },
                buildPropertyOperations: i.useCallback(function (e) {
                    return {
                        addInstance: function (t) {
                            e(function (e) {
                                return e.addInstance(t);
                            });
                        },
                        addInstanceAt: function (t, n) {
                            var i = !1;
                            return (
                                e(function (e) {
                                    i = e.addInstanceAt(t, n);
                                }),
                                i
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
            getProperty: i.useCallback(function (e, t) {
                return e.number(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: i.useCallback(function (e) {
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
            getProperty: i.useCallback(function (e, t) {
                return e.string(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: i.useCallback(function (e) {
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
        var r = (null != n ? n : {}).onTrigger;
        return {
            trigger: N(e, t, {
                getProperty: i.useCallback(function (e, t) {
                    return e.trigger(t);
                }, []),
                getValue: i.useCallback(function () {}, []),
                defaultValue: null,
                onPropertyEvent: r,
                buildPropertyOperations: i.useCallback(function (e) {
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
    Object.keys(r).forEach(function (e) {
        "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return r[e];
                },
            });
    });
