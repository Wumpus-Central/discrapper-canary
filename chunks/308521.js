Object.defineProperty(t, '__esModule', { value: !0 });
var r = n(73800),
    i = n(685066),
    a = (function (e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    })(r),
    o = function () {
        return (o =
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
            ops: []
        };
    return (
        (a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }),
        'function' == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
        a
    );
    function s(a) {
        return function (s) {
            return (function (a) {
                if (n) throw TypeError('Generator is already executing.');
                for (; o; )
                    try {
                        if (((n = 1), r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)) return i;
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
                                        done: !1
                                    }
                                );
                            case 5:
                                (o.label++, (r = a[1]), (a = [0]));
                                continue;
                            case 7:
                                ((a = o.ops.pop()), o.trys.pop());
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
                                    ((o.label = i[1]), (i = a));
                                    break;
                                }
                                if (i && o.label < i[2]) {
                                    ((o.label = i[2]), o.ops.push(a));
                                    break;
                                }
                                (i[2] && o.ops.pop(), o.trys.pop());
                                continue;
                        }
                        a = t.call(e, o);
                    } catch (e) {
                        ((a = [6, e]), (r = 0));
                    } finally {
                        n = i = 0;
                    }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
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
                if ('undefined' != typeof window && 'matchMedia' in window) {
                    var t = function () {
                            a(e || d());
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
var _ = (function () {
        function e() {}
        return ((e.prototype.observe = function () {}), (e.prototype.unobserve = function () {}), (e.prototype.disconnect = function () {}), e);
    })(),
    f = globalThis.ResizeObserver || _,
    p = void 0 !== globalThis.ResizeObserver,
    h = !p;
function m(e, t) {
    void 0 === t && (t = !0);
    var n = r.useState({
            width: 0,
            height: 0
        }),
        i = n[0],
        a = n[1];
    r.useEffect(function () {
        if ('undefined' != typeof window && t) {
            var e = function () {
                a({
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
    var o,
        s,
        l,
        c = r.useRef(
            new f(
                ((o = function (e) {
                    p &&
                        a({
                            width: e[e.length - 1].contentRect.width,
                            height: e[e.length - 1].contentRect.height
                        });
                }),
                (s = 0),
                (l = 0),
                function () {
                    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    (clearTimeout(l),
                        (l = window.setTimeout(function () {
                            return o.apply(e, t);
                        }, s)));
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
                            (n.disconnect(), r && p && n.unobserve(r));
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
        a = e.containerRef,
        o = e.options,
        s = void 0 === o ? {} : o,
        l = e.onCanvasHasResized,
        c = e.artboardBounds,
        d = E(s),
        _ = r.useState({
            height: 0,
            width: 0
        }),
        f = _[0],
        p = f.height,
        h = f.width,
        g = _[1],
        b = r.useState({
            height: 0,
            width: 0
        }),
        y = b[0],
        O = y.height,
        v = y.width,
        I = b[1],
        T = r.useState(!0),
        S = T[0],
        A = T[1],
        N = d.fitCanvasToArtboardHeight,
        C = d.shouldResizeCanvasToContainer,
        R = d.useDevicePixelRatio,
        P = d.customDevicePixelRatio,
        w = m(a, C),
        D = u(P),
        L = null != c ? c : {},
        x = L.maxX,
        M = L.maxY,
        k = r.useCallback(
            function () {
                var e,
                    t,
                    n,
                    r,
                    i = null != (t = null == (e = a.current) ? void 0 : e.clientWidth) ? t : 0,
                    o = null != (r = null == (n = a.current) ? void 0 : n.clientHeight) ? r : 0;
                return N && c
                    ? {
                          width: i,
                          height: i * (c.maxY / c.maxX)
                      }
                    : {
                          width: i,
                          height: o
                      };
            },
            [a, N, x, M]
        );
    (r.useEffect(
        function () {
            if (C && a.current && n) {
                var e = k(),
                    t = e.width,
                    r = e.height,
                    o = !1;
                if (i) {
                    var s = t !== h || r !== p;
                    if ((d.fitCanvasToArtboardHeight && s && ((a.current.style.height = r + 'px'), (o = !0)), d.useDevicePixelRatio)) {
                        if (s || t * D !== v || r * D !== O) {
                            var c = D * t,
                                u = D * r;
                            ((i.width = c),
                                (i.height = u),
                                (i.style.width = t + 'px'),
                                (i.style.height = r + 'px'),
                                I({
                                    width: c,
                                    height: u
                                }),
                                (o = !0));
                        }
                    } else
                        s &&
                            ((i.width = t),
                            (i.height = r),
                            I({
                                width: t,
                                height: r
                            }),
                            (o = !0));
                    g({
                        width: t,
                        height: r
                    });
                }
                (l && (S || o) && l && l(), S && A(!1));
            }
        },
        [i, a, w, D, k, S, A, O, v, p, h, l, C, N, R, n]
    ),
        r.useEffect(
            function () {
                I({
                    width: 0,
                    height: 0
                });
            },
            [i]
        ));
}
var y,
    O = (function () {
        function e() {}
        return ((e.prototype.observe = function () {}), (e.prototype.unobserve = function () {}), (e.prototype.disconnect = function () {}), e);
    })(),
    v = globalThis.IntersectionObserver || O,
    I = (function () {
        function e() {
            var e = this;
            ((this.elementsMap = new Map()),
                (this.onObserved = function (t) {
                    t.forEach(function (t) {
                        var n = e.elementsMap.get(t.target);
                        n && n(t);
                    });
                }),
                (this.observer = new v(this.onObserved)));
        }
        return (
            (e.prototype.registerCallback = function (e, t) {
                (this.observer.observe(e), this.elementsMap.set(e, t));
            }),
            (e.prototype.removeCallback = function (e) {
                (this.observer.unobserve(e), this.elementsMap.delete(e));
            }),
            e
        );
    })(),
    T = function () {
        return (y || (y = new I()), y);
    };
function S(e) {
    var t = e.setContainerRef,
        n = e.setCanvasRef,
        r = e.className,
        i = void 0 === r ? '' : r,
        l = e.style,
        c = e.children,
        u = s(e, ['setContainerRef', 'setCanvasRef', 'className', 'style', 'children']),
        d = o(
            {
                width: '100%',
                height: '100%'
            },
            l
        );
    return a.default.createElement(
        'div',
        o(
            {
                ref: t,
                className: i
            },
            !i && { style: d }
        ),
        a.default.createElement(
            'canvas',
            o(
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
        _ = d[0],
        f = d[1],
        p = !!e,
        h = E(t),
        m = u(),
        g = r.useCallback(
            function () {
                if (_) {
                    if (_.layout && _.layout.fit === i.Fit.Layout && s) {
                        var e = m * _.layout.layoutScaleFactor;
                        ((_.devicePixelRatioUsed = m), (_.artboardWidth = (null == s ? void 0 : s.width) / e), (_.artboardHeight = (null == s ? void 0 : s.height) / e));
                    }
                    (_.startRendering(), _.resizeToCanvas());
                }
            },
            [_, m]
        );
    b({
        riveLoaded: !!_,
        canvasElem: s,
        containerRef: c,
        options: h,
        onCanvasHasResized: g,
        artboardBounds: null == _ ? void 0 : _.bounds
    });
    var y = r.useCallback(function (e) {
        (null === e && s && ((s.height = 0), (s.width = 0)), l(e));
    }, []);
    r.useEffect(
        function () {
            if (s && e) {
                var t,
                    n = null != _;
                if (null == _) {
                    var r = h.useOffscreenRenderer;
                    (t = new i.Rive(o(o({ useOffscreenRenderer: r }, e), { canvas: s }))).on(i.EventType.Load, function () {
                        ((n = !0), s ? f(t) : t.cleanup());
                    });
                }
                return function () {
                    n || null == t || t.cleanup();
                };
            }
        },
        [s, p, _]
    );
    var O = r.useCallback(function (e) {
            c.current = e;
        }, []),
        v = {
            observe: r.useCallback(function (e, t) {
                T().registerCallback(e, t);
            }, []),
            unobserve: r.useCallback(function (e) {
                T().removeCallback(e);
            }, [])
        },
        I = v.observe,
        A = v.unobserve;
    (r.useEffect(
        function () {
            var e,
                t = !1,
                n = function () {
                    if (s && t) {
                        var e = s.getBoundingClientRect();
                        e.width > 0 && e.height > 0 && e.top < (window.innerHeight || document.documentElement.clientHeight) && e.bottom > 0 && e.left < (window.innerWidth || document.documentElement.clientWidth) && e.right > 0 && (null == _ || _.startRendering(), (t = !1));
                    }
                };
            return (
                s &&
                    !1 !== h.shouldUseIntersectionObserver &&
                    I(s, function (r) {
                        (r.isIntersecting ? _ && _.startRendering() : _ && _.stopRendering(), (t = !r.isIntersecting), clearTimeout(e), r.isIntersecting || 0 !== r.boundingClientRect.width || (e = setTimeout(n, 10)));
                    }),
                function () {
                    s && A(s);
                }
            );
        },
        [I, A, _, s, h.shouldUseIntersectionObserver]
    ),
        r.useEffect(
            function () {
                return function () {
                    _ && (_.cleanup(), f(null));
                };
            },
            [_, s]
        ));
    var N = null == e ? void 0 : e.animations;
    r.useEffect(
        function () {
            _ && N && (_.isPlaying ? (_.stop(_.animationNames), _.play(N)) : _.isPaused && (_.stop(_.animationNames), _.pause(N)));
        },
        [N, _]
    );
    var C = r.useCallback(
        function (e) {
            return a.default.createElement(
                S,
                o(
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
        rive: _,
        RiveComponent: C
    };
}
function N(e, t, n) {
    var i = r.useState(null),
        a = i[0],
        s = i[1],
        l = r.useState(n.defaultValue),
        c = l[0],
        u = l[1],
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
        [n]
    );
    var g = r.useCallback(function () {
        var e = p.current,
            t = h.current,
            n = m.current;
        if (!e || !t) return (s(null), u(n.defaultValue), f(null), function () {});
        var r = n.getProperty(e, t);
        if (r) {
            (s(r), u(n.getValue(r)), n.getExtendedData && f(n.getExtendedData(r)));
            var i = function () {
                (u(n.getValue(r)), n.getExtendedData && f(n.getExtendedData(r)), n.onPropertyEvent && n.onPropertyEvent());
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
            return ((p.current = t), (h.current = e), g());
        },
        [t, e, g]
    );
    var E = r.useCallback(
            function (e) {
                if (a && p.current === t)
                    try {
                        return (e(a), void (m.current.getExtendedData && f(m.current.getExtendedData(a))));
                    } catch (e) {}
                if (p.current)
                    try {
                        var n = m.current.getProperty(p.current, h.current);
                        n && (s(n), e(n), m.current.getExtendedData && f(m.current.getExtendedData(n)));
                    } catch (e) {}
            },
            [a, t]
        ),
        b = r.useMemo(
            function () {
                return m.current.buildPropertyOperations(E);
            },
            [E]
        ),
        y = o({ value: c }, b);
    return (n.getExtendedData && (y.extendedData = _), y);
}
((t.default = function (e) {
    var t = e.src,
        n = e.artboard,
        r = e.animations,
        i = e.stateMachines,
        l = e.layout,
        c = e.useOffscreenRenderer,
        u = void 0 === c || c,
        d = e.shouldDisableRiveListeners,
        _ = void 0 !== d && d,
        f = e.shouldResizeCanvasToContainer,
        p = void 0 === f || f,
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
                shouldDisableRiveListeners: _,
                automaticallyHandleEvents: m
            },
            {
                useOffscreenRenderer: u,
                shouldResizeCanvasToContainer: p
            }
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
                                    (d('loading'),
                                        (n = new i.RiveFile(e)).init(),
                                        n.on(i.EventType.Load, function () {
                                            (null == n || n.getInstance(), o(n), d('success'));
                                        }),
                                        n.on(i.EventType.LoadError, function () {
                                            d('failed');
                                        }),
                                        o(n));
                                } catch (e) {
                                    (console.error(e), d('failed'));
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
                riveFile: a,
                status: u
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
                                (void 0 !== a && i && (i.value = a), l(i || null));
                            }
                        } else l(null);
                    }
                    (r(),
                        e &&
                            e.on(i.EventType.Load, function () {
                                r();
                            }));
                },
                [e]
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
                            u((n = null != a ? (null == (t = e.viewModelByName) ? void 0 : t.call(e, a)) || null : e.defaultViewModel() || null));
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
                [e, a, s]
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
            _ = u[1];
        return (
            r.useEffect(
                function () {
                    var t, n, r;
                    if (e) {
                        var a = null;
                        (_((a = null != i ? e.instanceByName(i) || null : o ? (null == (t = e.defaultInstance) ? void 0 : t.call(e)) || null : l ? (null == (n = e.instance) ? void 0 : n.call(e)) || null : (null == (r = e.defaultInstance) ? void 0 : r.call(e)) || null)), c && a && c.viewModelInstance !== a && c.bindViewModelInstance(a));
                    } else _(null);
                },
                [e, i, o, l, c]
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
    }));
