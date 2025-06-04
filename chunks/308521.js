Object.defineProperty(t, '__esModule', { value: !0 });
var r = n(73800),
    i = n(743989),
    o = (function (e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    })(r),
    a = function () {
        return (a =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }).apply(this, arguments);
    };
function s(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    }
    return n;
}
function l(e, t, n, r) {
    return new (n || (n = Promise))(function (i, o) {
        function a(e) {
            try {
                l(r.next(e));
            } catch (e) {
                o(e);
            }
        }
        function s(e) {
            try {
                l(r.throw(e));
            } catch (e) {
                o(e);
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
                  ).then(a, s);
        }
        l((r = r.apply(e, t || [])).next());
    });
}
function c(e, t) {
    var n,
        r,
        i,
        o,
        a = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: []
        };
    return (
        (o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }),
        'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
                return this;
            }),
        o
    );
    function s(o) {
        return function (s) {
            return (function (o) {
                if (n) throw TypeError('Generator is already executing.');
                for (; a; )
                    try {
                        if (((n = 1), r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)) return i;
                        switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return (
                                    a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    }
                                );
                            case 5:
                                a.label++, (r = o[1]), (o = [0]);
                                continue;
                            case 7:
                                (o = a.ops.pop()), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue;
                                }
                                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                    a.label = o[1];
                                    break;
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    (a.label = i[1]), (i = o);
                                    break;
                                }
                                if (i && a.label < i[2]) {
                                    (a.label = i[2]), a.ops.push(o);
                                    break;
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue;
                        }
                        o = t.call(e, a);
                    } catch (e) {
                        (o = [6, e]), (r = 0);
                    } finally {
                        n = i = 0;
                    }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            })([o, s]);
        };
    }
}
function u(e) {
    var t = e || d(),
        n = r.useState(t),
        i = n[0],
        o = n[1];
    return (
        r.useEffect(
            function () {
                if ('undefined' != typeof window && 'matchMedia' in window) {
                    var t = function () {
                            o(e || d());
                        },
                        n = window.matchMedia('screen and (resolution: '.concat(i, 'dppx)'));
                    return (
                        n.hasOwnProperty('addEventListener') ? n.addEventListener('change', t) : n.addListener(t),
                        function () {
                            n.hasOwnProperty('removeEventListener') ? n.removeEventListener('change', t) : n.removeListener(t);
                        }
                    );
                }
            },
            [i, e]
        ),
        i
    );
}
function d() {
    return Math.min(Math.max(1, 'undefined' != typeof window && 'number' == typeof window.devicePixelRatio ? window.devicePixelRatio : 1), 3);
}
var f = (function () {
        function e() {}
        return (e.prototype.observe = function () {}), (e.prototype.unobserve = function () {}), (e.prototype.disconnect = function () {}), e;
    })(),
    _ = globalThis.ResizeObserver || f,
    p = void 0 !== globalThis.ResizeObserver,
    h = !p;
function m(e, t) {
    void 0 === t && (t = !0);
    var n = r.useState({
            width: 0,
            height: 0
        }),
        i = n[0],
        o = n[1];
    r.useEffect(function () {
        if ('undefined' != typeof window && t) {
            var e = function () {
                o({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            };
            return (
                h && (e(), window.addEventListener('resize', e)),
                function () {
                    return window.removeEventListener('resize', e);
                }
            );
        }
    }, []);
    var a,
        s,
        l,
        c = r.useRef(
            new _(
                ((a = function (e) {
                    p &&
                        o({
                            width: e[e.length - 1].contentRect.width,
                            height: e[e.length - 1].contentRect.height
                        });
                }),
                (s = 0),
                (l = 0),
                function () {
                    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    clearTimeout(l),
                        (l = window.setTimeout(function () {
                            return a.apply(e, t);
                        }, s));
                })
            )
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
            [e, c]
        ),
        i
    );
}
var g = {
    useDevicePixelRatio: !0,
    fitCanvasToArtboardHeight: !1,
    useOffscreenRenderer: !0,
    shouldResizeCanvasToContainer: !0
};
function E(e) {
    return Object.assign({}, g, e);
}
function b(e) {
    var t = e.riveLoaded,
        n = void 0 !== t && t,
        i = e.canvasElem,
        o = e.containerRef,
        a = e.options,
        s = void 0 === a ? {} : a,
        l = e.onCanvasHasResized,
        c = e.artboardBounds,
        d = E(s),
        f = r.useState({
            height: 0,
            width: 0
        }),
        _ = f[0],
        p = _.height,
        h = _.width,
        g = f[1],
        b = r.useState({
            height: 0,
            width: 0
        }),
        y = b[0],
        O = y.height,
        v = y.width,
        I = b[1],
        S = r.useState(!0),
        T = S[0],
        A = S[1],
        N = d.fitCanvasToArtboardHeight,
        C = d.shouldResizeCanvasToContainer,
        P = d.useDevicePixelRatio,
        R = d.customDevicePixelRatio,
        w = m(o, C),
        D = u(R),
        L = null != c ? c : {},
        x = L.maxX,
        k = L.maxY,
        M = r.useCallback(
            function () {
                var e,
                    t,
                    n,
                    r,
                    i = null != (t = null == (e = o.current) ? void 0 : e.clientWidth) ? t : 0,
                    a = null != (r = null == (n = o.current) ? void 0 : n.clientHeight) ? r : 0;
                return N && c
                    ? {
                          width: i,
                          height: i * (c.maxY / c.maxX)
                      }
                    : {
                          width: i,
                          height: a
                      };
            },
            [o, N, x, k]
        );
    r.useEffect(
        function () {
            if (C && o.current && n) {
                var e = M(),
                    t = e.width,
                    r = e.height,
                    a = !1;
                if (i) {
                    var s = t !== h || r !== p;
                    if ((d.fitCanvasToArtboardHeight && s && ((o.current.style.height = r + 'px'), (a = !0)), d.useDevicePixelRatio)) {
                        if (s || t * D !== v || r * D !== O) {
                            var c = D * t,
                                u = D * r;
                            (i.width = c),
                                (i.height = u),
                                (i.style.width = t + 'px'),
                                (i.style.height = r + 'px'),
                                I({
                                    width: c,
                                    height: u
                                }),
                                (a = !0);
                        }
                    } else
                        s &&
                            ((i.width = t),
                            (i.height = r),
                            I({
                                width: t,
                                height: r
                            }),
                            (a = !0));
                    g({
                        width: t,
                        height: r
                    });
                }
                l && (T || a) && l && l(), T && A(!1);
            }
        },
        [i, o, w, D, M, T, A, O, v, p, h, l, C, N, P, n]
    ),
        r.useEffect(
            function () {
                I({
                    width: 0,
                    height: 0
                });
            },
            [i]
        );
}
var y,
    O = (function () {
        function e() {}
        return (e.prototype.observe = function () {}), (e.prototype.unobserve = function () {}), (e.prototype.disconnect = function () {}), e;
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
    S = function () {
        return y || (y = new I()), y;
    };
function T(e) {
    var t = e.setContainerRef,
        n = e.setCanvasRef,
        r = e.className,
        i = void 0 === r ? '' : r,
        l = e.style,
        c = e.children,
        u = s(e, ['setContainerRef', 'setCanvasRef', 'className', 'style', 'children']),
        d = a(
            {
                width: '100%',
                height: '100%'
            },
            l
        );
    return o.default.createElement(
        'div',
        a(
            {
                ref: t,
                className: i
            },
            !i && { style: d }
        ),
        o.default.createElement(
            'canvas',
            a(
                {
                    ref: n,
                    style: {
                        verticalAlign: 'top',
                        width: 0,
                        height: 0
                    }
                },
                u
            ),
            c
        )
    );
}
function A(e, t) {
    void 0 === t && (t = {});
    var n = r.useState(null),
        s = n[0],
        l = n[1],
        c = r.useRef(null),
        d = r.useState(null),
        f = d[0],
        _ = d[1],
        p = !!e,
        h = E(t),
        m = u(),
        g = r.useCallback(
            function () {
                if (f) {
                    if (f.layout && f.layout.fit === i.Fit.Layout && s) {
                        var e = m * f.layout.layoutScaleFactor;
                        (f.devicePixelRatioUsed = m), (f.artboardWidth = (null == s ? void 0 : s.width) / e), (f.artboardHeight = (null == s ? void 0 : s.height) / e);
                    }
                    f.startRendering(), f.resizeToCanvas();
                }
            },
            [f, m]
        );
    b({
        riveLoaded: !!f,
        canvasElem: s,
        containerRef: c,
        options: h,
        onCanvasHasResized: g,
        artboardBounds: null == f ? void 0 : f.bounds
    });
    var y = r.useCallback(function (e) {
        null === e && s && ((s.height = 0), (s.width = 0)), l(e);
    }, []);
    r.useEffect(
        function () {
            if (s && e) {
                var t,
                    n = null != f;
                if (null == f) {
                    var r = h.useOffscreenRenderer;
                    (t = new i.Rive(a(a({ useOffscreenRenderer: r }, e), { canvas: s }))).on(i.EventType.Load, function () {
                        (n = !0), s ? _(t) : t.cleanup();
                    });
                }
                return function () {
                    n || null == t || t.cleanup();
                };
            }
        },
        [s, p, f]
    );
    var O = r.useCallback(function (e) {
            c.current = e;
        }, []),
        v = {
            observe: r.useCallback(function (e, t) {
                S().registerCallback(e, t);
            }, []),
            unobserve: r.useCallback(function (e) {
                S().removeCallback(e);
            }, [])
        },
        I = v.observe,
        A = v.unobserve;
    r.useEffect(
        function () {
            var e,
                t = !1,
                n = function () {
                    if (s && t) {
                        var e = s.getBoundingClientRect();
                        e.width > 0 && e.height > 0 && e.top < (window.innerHeight || document.documentElement.clientHeight) && e.bottom > 0 && e.left < (window.innerWidth || document.documentElement.clientWidth) && e.right > 0 && (null == f || f.startRendering(), (t = !1));
                    }
                };
            return (
                s &&
                    !1 !== h.shouldUseIntersectionObserver &&
                    I(s, function (r) {
                        r.isIntersecting ? f && f.startRendering() : f && f.stopRendering(), (t = !r.isIntersecting), clearTimeout(e), r.isIntersecting || 0 !== r.boundingClientRect.width || (e = setTimeout(n, 10));
                    }),
                function () {
                    s && A(s);
                }
            );
        },
        [I, A, f, s, h.shouldUseIntersectionObserver]
    ),
        r.useEffect(
            function () {
                return function () {
                    f && (f.cleanup(), _(null));
                };
            },
            [f, s]
        );
    var N = null == e ? void 0 : e.animations;
    r.useEffect(
        function () {
            f && N && (f.isPlaying ? (f.stop(f.animationNames), f.play(N)) : f.isPaused && (f.stop(f.animationNames), f.pause(N)));
        },
        [N, f]
    );
    var C = r.useCallback(
        function (e) {
            return o.default.createElement(
                T,
                a(
                    {
                        setContainerRef: O,
                        setCanvasRef: y
                    },
                    e
                )
            );
        },
        [y, O]
    );
    return {
        canvas: s,
        container: c.current,
        setCanvasRef: y,
        setContainerRef: O,
        rive: f,
        RiveComponent: C
    };
}
function N(e, t, n) {
    var i = r.useState(null),
        o = i[0],
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
        [n]
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
                u(n.getValue(r)), n.getExtendedData && _(n.getExtendedData(r)), n.onPropertyEvent && n.onPropertyEvent();
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
        [t, e, g]
    );
    var E = r.useCallback(
            function (e) {
                if (o && p.current === t)
                    try {
                        return e(o), void (m.current.getExtendedData && _(m.current.getExtendedData(o)));
                    } catch (e) {}
                if (p.current)
                    try {
                        var n = m.current.getProperty(p.current, h.current);
                        n && (s(n), e(n), m.current.getExtendedData && _(m.current.getExtendedData(n)));
                    } catch (e) {}
            },
            [o, t]
        ),
        b = r.useMemo(
            function () {
                return m.current.buildPropertyOperations(E);
            },
            [E]
        ),
        y = a({ value: c }, b);
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
        E = s(e, ['src', 'artboard', 'animations', 'stateMachines', 'layout', 'useOffscreenRenderer', 'shouldDisableRiveListeners', 'shouldResizeCanvasToContainer', 'automaticallyHandleEvents', 'children']),
        b = A(
            {
                src: t,
                artboard: n,
                animations: r,
                layout: l,
                stateMachines: i,
                autoplay: !0,
                shouldDisableRiveListeners: f,
                automaticallyHandleEvents: m
            },
            {
                useOffscreenRenderer: u,
                shouldResizeCanvasToContainer: p
            }
        ).RiveComponent;
    return o.default.createElement(b, a({}, E), g);
}),
    (t.useResizeCanvas = b),
    (t.useRive = A),
    (t.useRiveFile = function (e) {
        var t = this,
            n = r.useState(null),
            o = n[0],
            a = n[1],
            s = r.useState('idle'),
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
                                    d('loading'),
                                        (n = new i.RiveFile(e)).init(),
                                        n.on(i.EventType.Load, function () {
                                            null == n || n.getInstance(), a(n), d('success');
                                        }),
                                        n.on(i.EventType.LoadError, function () {
                                            d('failed');
                                        }),
                                        a(n);
                                } catch (e) {
                                    console.error(e), d('failed');
                                }
                                return [2];
                            });
                        }),
                        function () {
                            null == n || n.cleanup();
                        }
                    );
                },
                [e.src, e.buffer]
            ),
            {
                riveFile: o,
                status: u
            }
        );
    }),
    (t.useStateMachineInput = function (e, t, n, o) {
        var a = r.useState(null),
            s = a[0],
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
                                void 0 !== o && i && (i.value = o), l(i || null);
                            }
                        } else l(null);
                    }
                    r(),
                        e &&
                            e.on(i.EventType.Load, function () {
                                r();
                            });
                },
                [e]
            ),
            s
        );
    }),
    (t.useViewModel = function (e, t) {
        var n = null != t ? t : {},
            o = n.name,
            a = n.useDefault,
            s = void 0 !== a && a,
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
                            u((n = null != o ? (null == (t = e.viewModelByName) ? void 0 : t.call(e, o)) || null : e.defaultViewModel() || null));
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
                [e, o, s]
            ),
            c
        );
    }),
    (t.useViewModelInstance = function (e, t) {
        var n = null != t ? t : {},
            i = n.name,
            o = n.useDefault,
            a = void 0 !== o && o,
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
                        var o = null;
                        f((o = null != i ? e.instanceByName(i) || null : a ? (null == (t = e.defaultInstance) ? void 0 : t.call(e)) || null : l ? (null == (n = e.instance) ? void 0 : n.call(e)) || null : (null == (r = e.defaultInstance) ? void 0 : r.call(e)) || null)), c && o && c.viewModelInstance !== o && c.bindViewModelInstance(o);
                    } else f(null);
                },
                [e, i, a, l, c]
            ),
            d
        );
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
                    }
                };
            }, [])
        });
        return {
            value: n.value,
            setValue: n.setValue
        };
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
                    }
                };
            }, [])
        });
        return {
            value: n.value,
            setValue: n.setValue,
            setRgb: n.setRgb,
            setRgba: n.setRgba,
            setAlpha: n.setAlpha,
            setOpacity: n.setOpacity
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
                    }
                };
            }, [])
        });
        return {
            value: n.value,
            values: n.extendedData || [],
            setValue: n.setValue
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
                    }
                };
            }, [])
        });
        return {
            value: n.value,
            setValue: n.setValue
        };
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
                    }
                };
            }, [])
        });
        return {
            value: n.value,
            setValue: n.setValue
        };
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
                        }
                    };
                }, [])
            }).trigger
        };
    }),
    Object.keys(i).forEach(function (e) {
        'default' === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return i[e];
                }
            });
    });
