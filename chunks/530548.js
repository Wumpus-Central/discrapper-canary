Object.defineProperty(t, '__esModule', { value: !0 });
var r = n(192379),
    i = n(630881),
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
        a = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: []
        },
        o = Object.create(('function' == typeof Iterator ? Iterator : Object).prototype);
    return (
        (o.next = s(0)),
        (o.throw = s(1)),
        (o.return = s(2)),
        'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
                return this;
            }),
        o
    );
    function s(s) {
        return function (l) {
            return (function (s) {
                if (n) throw TypeError('Generator is already executing.');
                for (; o && ((o = 0), s[0] && (a = 0)), a; )
                    try {
                        if (((n = 1), r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done)) return i;
                        switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return (
                                    a.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    }
                                );
                            case 5:
                                a.label++, (r = s[1]), (s = [0]);
                                continue;
                            case 7:
                                (s = a.ops.pop()), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    a = 0;
                                    continue;
                                }
                                if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                    a.label = s[1];
                                    break;
                                }
                                if (6 === s[0] && a.label < i[1]) {
                                    (a.label = i[1]), (i = s);
                                    break;
                                }
                                if (i && a.label < i[2]) {
                                    (a.label = i[2]), a.ops.push(s);
                                    break;
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue;
                        }
                        s = t.call(e, a);
                    } catch (e) {
                        (s = [6, e]), (r = 0);
                    } finally {
                        n = i = 0;
                    }
                if (5 & s[0]) throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                };
            })([s, l]);
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
'function' == typeof SuppressedError && SuppressedError;
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
            new _(
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
                    clearTimeout(l),
                        (l = window.setTimeout(function () {
                            return o.apply(e, t);
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
        a = e.containerRef,
        o = e.options,
        s = void 0 === o ? {} : o,
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
        v = y.height,
        O = y.width,
        I = b[1],
        S = r.useState(!0),
        T = S[0],
        N = S[1],
        A = d.fitCanvasToArtboardHeight,
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
                return A && c
                    ? {
                          width: i,
                          height: i * (c.maxY / c.maxX)
                      }
                    : {
                          width: i,
                          height: o
                      };
            },
            [a, A, x, M]
        );
    r.useEffect(
        function () {
            if (C && a.current && n) {
                var e = k(),
                    t = e.width,
                    r = e.height,
                    o = !1;
                if (i) {
                    var s = t !== h || r !== p;
                    if ((d.fitCanvasToArtboardHeight && s && ((a.current.style.height = r + 'px'), (o = !0)), d.useDevicePixelRatio)) {
                        if (s || t * D !== O || r * D !== v) {
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
                                (o = !0);
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
                l && (T || o) && l && l(), T && N(!1);
            }
        },
        [i, a, w, D, k, T, N, v, O, p, h, l, C, A, R, n]
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
    v = (function () {
        function e() {}
        return (e.prototype.observe = function () {}), (e.prototype.unobserve = function () {}), (e.prototype.disconnect = function () {}), e;
    })(),
    O = globalThis.IntersectionObserver || v,
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
                (this.observer = new O(this.onObserved));
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
function N(e, t) {
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
                    (t = new i.Rive(o(o({ useOffscreenRenderer: r }, e), { canvas: s }))).on(i.EventType.Load, function () {
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
    var v = r.useCallback(function (e) {
            c.current = e;
        }, []),
        O = {
            observe: r.useCallback(function (e, t) {
                S().registerCallback(e, t);
            }, []),
            unobserve: r.useCallback(function (e) {
                S().removeCallback(e);
            }, [])
        },
        I = O.observe,
        N = O.unobserve;
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
                    s && N(s);
                }
            );
        },
        [I, N, f, s, h.shouldUseIntersectionObserver]
    ),
        r.useEffect(
            function () {
                return function () {
                    f && (f.cleanup(), _(null));
                };
            },
            [f, s]
        );
    var A = null == e ? void 0 : e.animations;
    r.useEffect(
        function () {
            f && A && (f.isPlaying ? (f.stop(f.animationNames), f.play(A)) : f.isPaused && (f.stop(f.animationNames), f.pause(A)));
        },
        [A, f]
    );
    var C = r.useCallback(
        function (e) {
            return a.default.createElement(
                T,
                o(
                    {
                        setContainerRef: v,
                        setCanvasRef: y
                    },
                    e
                )
            );
        },
        [y, v]
    );
    return {
        canvas: s,
        container: c.current,
        setCanvasRef: y,
        setContainerRef: v,
        rive: f,
        RiveComponent: C
    };
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
        b = N(
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
    return a.default.createElement(b, o({}, E), g);
}),
    (t.useResizeCanvas = b),
    (t.useRive = N),
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
                                    d('loading'),
                                        (n = new i.RiveFile(e)).init(),
                                        n.on(i.EventType.Load, function () {
                                            null == n || n.getInstance(), o(n), d('success');
                                        }),
                                        n.on(i.EventType.LoadError, function () {
                                            d('failed');
                                        }),
                                        o(n);
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
                [e]
            ),
            s
        );
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
