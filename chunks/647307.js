Object.defineProperty(t, "__esModule", { value: !0 });
var r = n(64700),
    i = n(877508),
    a = (function (e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
    })(r),
    s = function () {
        return (s =
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
function l(e, t, n, r) {
    return new (n || (n = Promise))(function (i, a) {
        function s(e) {
            try {
                l(r.next(e));
            } catch (e) {
                a(e);
            }
        }
        function o(e) {
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
                  ).then(s, o);
        }
        l((r = r.apply(e, t || [])).next());
    });
}
function u(e, t) {
    var n,
        r,
        i,
        a,
        s = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (a = { next: o(0), throw: o(1), return: o(2) }),
        "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
        a
    );
    function o(a) {
        return function (o) {
            return (function (a) {
                if (n) throw TypeError("Generator is already executing.");
                for (; s; )
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
                                return s.label++, { value: a[1], done: !1 };
                            case 5:
                                s.label++, (r = a[1]), (a = [0]);
                                continue;
                            case 7:
                                (a = s.ops.pop()), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue;
                                }
                                if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                    s.label = a[1];
                                    break;
                                }
                                if (6 === a[0] && s.label < i[1]) {
                                    (s.label = i[1]), (i = a);
                                    break;
                                }
                                if (i && s.label < i[2]) {
                                    (s.label = i[2]), s.ops.push(a);
                                    break;
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue;
                        }
                        a = t.call(e, s);
                    } catch (e) {
                        (a = [6, e]), (r = 0);
                    } finally {
                        n = i = 0;
                    }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, o]);
        };
    }
}
function c(e) {
    var t = e || d(),
        n = r.useState(t),
        i = n[0],
        a = n[1];
    return (
        r.useEffect(
            function () {
                if ("u" > typeof window && "matchMedia" in window) {
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
        Math.max(1, "u" > typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1),
        3,
    );
}
var _ = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    f = globalThis.ResizeObserver || _,
    p = void 0 !== globalThis.ResizeObserver,
    h = !p;
function m(e, t) {
    void 0 === t && (t = !0);
    var n = r.useState({ width: 0, height: 0 }),
        i = n[0],
        a = n[1];
    r.useEffect(function () {
        if ("u" > typeof window && t) {
            var e = function () {
                a({ width: window.innerWidth, height: window.innerHeight });
            };
            return (
                h && (e(), window.addEventListener("resize", e)),
                function () {
                    return window.removeEventListener("resize", e);
                }
            );
        }
    }, []);
    var s,
        o,
        l,
        u = r.useRef(
            new f(
                ((s = function (e) {
                    p && a({ width: e[e.length - 1].contentRect.width, height: e[e.length - 1].contentRect.height });
                }),
                (o = 0),
                (l = 0),
                function () {
                    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    clearTimeout(l),
                        (l = window.setTimeout(function () {
                            return s.apply(e, t);
                        }, o));
                }),
            ),
        );
    return (
        r.useEffect(
            function () {
                var n = u.current;
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
            [e, u],
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
function A(e) {
    var t = e.riveLoaded,
        n = void 0 !== t && t,
        i = e.canvasElem,
        a = e.containerRef,
        s = e.options,
        o = void 0 === s ? {} : s,
        l = e.onCanvasHasResized,
        u = e.artboardBounds,
        d = E(o),
        _ = r.useState({ height: 0, width: 0 }),
        f = _[0],
        p = f.height,
        h = f.width,
        g = _[1],
        A = r.useState({ height: 0, width: 0 }),
        I = A[0],
        T = I.height,
        y = I.width,
        S = A[1],
        v = r.useState(!0),
        C = v[0],
        b = v[1],
        N = d.fitCanvasToArtboardHeight,
        R = d.shouldResizeCanvasToContainer,
        O = d.useDevicePixelRatio,
        D = d.customDevicePixelRatio,
        L = m(a, R),
        w = c(D),
        x = null != u ? u : {},
        P = x.maxX,
        M = x.maxY,
        k = r.useCallback(
            function () {
                var e,
                    t,
                    n,
                    r,
                    i = null != (t = null == (e = a.current) ? void 0 : e.clientWidth) ? t : 0,
                    s = null != (r = null == (n = a.current) ? void 0 : n.clientHeight) ? r : 0;
                return N && u ? { width: i, height: i * (u.maxY / u.maxX) } : { width: i, height: s };
            },
            [a, N, P, M],
        );
    r.useEffect(
        function () {
            if (R && a.current && n) {
                var e = k(),
                    t = e.width,
                    r = e.height,
                    s = !1;
                if (i) {
                    var o = t !== h || r !== p;
                    if (
                        (d.fitCanvasToArtboardHeight && o && ((a.current.style.height = r + "px"), (s = !0)),
                        d.useDevicePixelRatio)
                    ) {
                        if (o || t * w !== y || r * w !== T) {
                            var u = w * t,
                                c = w * r;
                            (i.width = u),
                                (i.height = c),
                                (i.style.width = t + "px"),
                                (i.style.height = r + "px"),
                                S({ width: u, height: c }),
                                (s = !0);
                        }
                    } else o && ((i.width = t), (i.height = r), S({ width: t, height: r }), (s = !0));
                    g({ width: t, height: r });
                }
                l && (C || s) && l && l(), C && b(!1);
            }
        },
        [i, a, L, w, k, C, b, T, y, p, h, l, R, N, O, n],
    ),
        r.useEffect(
            function () {
                S({ width: 0, height: 0 });
            },
            [i],
        );
}
var I,
    T = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    y = globalThis.IntersectionObserver || T,
    S = (function () {
        function e() {
            var e = this;
            (this.elementsMap = new Map()),
                (this.onObserved = function (t) {
                    t.forEach(function (t) {
                        var n = e.elementsMap.get(t.target);
                        n && n(t);
                    });
                }),
                (this.observer = new y(this.onObserved));
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
    v = function () {
        return I || (I = new S()), I;
    };
function C(e) {
    var t = e.setContainerRef,
        n = e.setCanvasRef,
        r = e.className,
        i = void 0 === r ? "" : r,
        l = e.style,
        u = e.children,
        c = o(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]),
        d = s({ width: "100%", height: "100%" }, l);
    return a.default.createElement(
        "div",
        s({ ref: t, className: i }, !i && { style: d }),
        a.default.createElement("canvas", s({ ref: n, style: { verticalAlign: "top", width: 0, height: 0 } }, c), u),
    );
}
function b(e, t) {
    void 0 === t && (t = {});
    var n = r.useState(null),
        l = n[0],
        u = n[1],
        d = r.useRef(null),
        _ = r.useRef(null),
        f = r.useState(null),
        p = f[0],
        h = f[1],
        m = !!e,
        g = E(t),
        I = c(),
        T = r.useCallback(
            function () {
                if (p) {
                    if (p.layout && p.layout.fit === i.Fit.Layout && l) {
                        var e = I * p.layout.layoutScaleFactor;
                        (p.devicePixelRatioUsed = I),
                            (p.artboardWidth = (null == l ? void 0 : l.width) / e),
                            (p.artboardHeight = (null == l ? void 0 : l.height) / e);
                    }
                    p.startRendering(), p.resizeToCanvas();
                }
            },
            [p, I],
        );
    A({
        riveLoaded: !!p,
        canvasElem: l,
        containerRef: d,
        options: g,
        onCanvasHasResized: T,
        artboardBounds: null == p ? void 0 : p.bounds,
    });
    var y = r.useCallback(function (e) {
        null === e && l && ((l.height = 0), (l.width = 0)), u(e);
    }, []);
    r.useEffect(
        function () {
            if (l && e) {
                var t,
                    n = null != p;
                if (null == p) {
                    var r = g.useOffscreenRenderer,
                        a = e.onRiveReady,
                        u = o(e, ["onRiveReady"]);
                    (t = new i.Rive(s(s({ useOffscreenRenderer: r }, u), { canvas: l }))),
                        null != _.current && _.current.cleanup(),
                        (_.current = t),
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
    var S = r.useCallback(function (e) {
            d.current = e;
        }, []),
        b = {
            observe: r.useCallback(function (e, t) {
                v().registerCallback(e, t);
            }, []),
            unobserve: r.useCallback(function (e) {
                v().removeCallback(e);
            }, []),
        },
        N = b.observe,
        R = b.unobserve;
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
                    N(l, function (r) {
                        r.isIntersecting ? p && p.startRendering() : p && p.stopRendering(),
                            (t = !r.isIntersecting),
                            clearTimeout(e),
                            r.isIntersecting || 0 !== r.boundingClientRect.width || (e = setTimeout(n, 10));
                    }),
                function () {
                    l && R(l);
                }
            );
        },
        [N, R, p, l, g.shouldUseIntersectionObserver],
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
                null != _.current && _.current.cleanup();
            };
        }, []);
    var O = null == e ? void 0 : e.animations;
    r.useEffect(
        function () {
            p &&
                O &&
                (p.isPlaying
                    ? (p.stop(p.animationNames), p.play(O))
                    : p.isPaused && (p.stop(p.animationNames), p.pause(O)));
        },
        [O, p],
    );
    var D = r.useCallback(
        function (e) {
            return a.default.createElement(C, s({ setContainerRef: S, setCanvasRef: y }, e));
        },
        [y, S],
    );
    return { canvas: l, container: d.current, setCanvasRef: y, setContainerRef: S, rive: p, RiveComponent: D };
}
function N(e, t, n) {
    var i = r.useState(null),
        a = i[0],
        o = i[1],
        l = r.useState(n.defaultValue),
        u = l[0],
        c = l[1],
        d = r.useState(null),
        _ = d[0],
        f = d[1],
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
        if (!e || !t) return o(null), c(n.defaultValue), f(null), function () {};
        var r = n.getProperty(e, t);
        if (r) {
            o(r), c(n.getValue(r)), n.getExtendedData && f(n.getExtendedData(r));
            var i = function () {
                c(n.getValue(r)),
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
            return (p.current = t), (h.current = e), g();
        },
        [t, e, g],
    );
    var E = r.useCallback(
            function (e) {
                if (a && p.current === t)
                    try {
                        return e(a), void (m.current.getExtendedData && f(m.current.getExtendedData(a)));
                    } catch (e) {}
                if (p.current)
                    try {
                        var n = m.current.getProperty(p.current, h.current);
                        n && (o(n), e(n), m.current.getExtendedData && f(m.current.getExtendedData(n)));
                    } catch (e) {}
            },
            [a, t],
        ),
        A = r.useMemo(
            function () {
                return m.current.buildPropertyOperations(E);
            },
            [E],
        ),
        I = s({ value: u }, A);
    return n.getExtendedData && (I.extendedData = _), I;
}
(t.default = function (e) {
    var t = e.src,
        n = e.artboard,
        r = e.animations,
        i = e.stateMachines,
        l = e.layout,
        u = e.useOffscreenRenderer,
        c = void 0 === u || u,
        d = e.shouldDisableRiveListeners,
        _ = void 0 !== d && d,
        f = e.shouldResizeCanvasToContainer,
        p = void 0 === f || f,
        h = e.automaticallyHandleEvents,
        m = void 0 !== h && h,
        g = e.children,
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
        A = b(
            {
                src: t,
                artboard: n,
                animations: r,
                layout: l,
                stateMachines: i,
                autoplay: !0,
                shouldDisableRiveListeners: _,
                automaticallyHandleEvents: m,
            },
            { useOffscreenRenderer: c, shouldResizeCanvasToContainer: p },
        ).RiveComponent;
    return a.default.createElement(A, s({}, E), g);
}),
    (t.useResizeCanvas = A),
    (t.useRive = b),
    (t.useRiveFile = function (e) {
        var t = this,
            n = r.useState(null),
            a = n[0],
            s = n[1],
            o = r.useState("idle"),
            c = o[0],
            d = o[1];
        return (
            r.useEffect(
                function () {
                    var n = null;
                    return (
                        l(t, void 0, void 0, function () {
                            return u(this, function (t) {
                                try {
                                    d("loading"),
                                        (n = new i.RiveFile(e)).init(),
                                        n.on(i.EventType.Load, function () {
                                            null == n || n.getInstance(), s(n), d("success");
                                        }),
                                        n.on(i.EventType.LoadError, function () {
                                            d("failed");
                                        }),
                                        s(n);
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
            { riveFile: a, status: c }
        );
    }),
    (t.useStateMachineInput = function (e, t, n, a) {
        var s = r.useState(null),
            o = s[0],
            l = s[1];
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
            o
        );
    }),
    (t.useViewModel = function (e, t) {
        var n = null != t ? t : {},
            a = n.name,
            s = n.useDefault,
            o = void 0 !== s && s,
            l = r.useState(null),
            u = l[0],
            c = l[1];
        return (
            r.useEffect(
                function () {
                    function t() {
                        var t;
                        if (e) {
                            var n = null;
                            c(
                                (n =
                                    null != a
                                        ? (null == (t = e.viewModelByName) ? void 0 : t.call(e, a)) || null
                                        : e.defaultViewModel() || null),
                            );
                        } else c(null);
                    }
                    return (
                        t(),
                        e && e.on(i.EventType.Load, t),
                        function () {
                            e && e.off(i.EventType.Load, t);
                        }
                    );
                },
                [e, a, o],
            ),
            u
        );
    }),
    (t.useViewModelInstance = function (e, t) {
        var n = null != t ? t : {},
            i = n.name,
            a = n.useDefault,
            s = void 0 !== a && a,
            o = n.useNew,
            l = void 0 !== o && o,
            u = n.rive,
            c = r.useState(null),
            d = c[0],
            _ = c[1];
        return (
            r.useEffect(
                function () {
                    var t, n, r;
                    if (e) {
                        var a = null;
                        _(
                            (a =
                                null != i
                                    ? e.instanceByName(i) || null
                                    : s
                                      ? (null == (t = e.defaultInstance) ? void 0 : t.call(e)) || null
                                      : l
                                        ? (null == (n = e.instance) ? void 0 : n.call(e)) || null
                                        : (null == (r = e.defaultInstance) ? void 0 : r.call(e)) || null),
                        ),
                            u && a && u.viewModelInstance !== a && u.bindViewModelInstance(a);
                    } else _(null);
                },
                [e, i, s, l, u],
            ),
            d
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
            a = N(e, t, {
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
