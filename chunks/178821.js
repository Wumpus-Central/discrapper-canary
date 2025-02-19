r.d(t, {
    MC: () => g,
    Y5: () => v,
    ZF: () => T,
    ZP: () => F,
    d6: () => k,
    m8: () => y,
    nU: () => I,
    tO: () => p
}),
    r(47120);
var n = r(200651),
    a = r(192379),
    c = r(120356),
    s = r.n(c),
    l = r(442837),
    i = r(481060),
    o = r(493773),
    u = r(38618),
    d = r(827649),
    x = r(841699);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let p = 1000 / 60,
    f = 1000 / 30,
    g = 5000,
    j = (1000 / 60) * 3,
    b = Math.ceil(3000 / (1000 / 60));
function v(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        n = a.useRef(null),
        c = a.useRef(null),
        s = a.useRef(null),
        l = a.useRef(null != r ? r : window);
    a.useEffect(() => {
        l.current = null != r ? r : window;
    }, [r]);
    let i = a.useCallback(() => {
            null != n.current && l.current.clearInterval(n.current), null != c.current && l.current.cancelIdleCallback(c.current), null != s.current && l.current.cancelAnimationFrame(s.current);
        }, []),
        o = a.useCallback(() => {
            n.current = l.current.setTimeout(() => {
                (c.current = l.current.requestIdleCallback(e)),
                    (s.current = l.current.requestAnimationFrame(() => {
                        t(), o();
                    }));
            }, 12);
        }, [e, t]);
    return [
        a.useCallback(() => {
            i(), o();
        }, [i, o]),
        i
    ];
}
function T(e) {
    let t = a.useRef(Array(b).fill(0)),
        r = a.useRef(performance.now()),
        n = a.useRef(0),
        c = a.useRef(0),
        s = a.useRef(0),
        l = e.dispatcher.getIsSchedulerBackgrounded(),
        i = a.useRef(l);
    i.current = l;
    let o = a.useRef(l ? performance.now() : 0);
    return (
        a.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (o.current = performance.now());
        }),
        [
            a.useCallback(function () {
                let e = performance.now(),
                    a = e - r.current;
                (r.current = e), !i.current && ((n.current -= t.current[s.current]), (t.current[s.current] = a), (n.current += a), c.current < b && (c.current += 1), (s.current = (s.current + 1) % b));
            }, []),
            (e, t) => {
                var r;
                let a = null !== (r = c.current) && void 0 !== r ? r : 1;
                return Math.abs(e * t - (n.current / a) * a) / t;
            },
            () => {
                (n.current = 0), (c.current = 0), t.current.fill(0), (r.current = performance.now()), (s.current = 0);
            }
        ]
    );
}
function k(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = a.useRef(Array(b).fill(0)),
        c = a.useRef(performance.now()),
        s = a.useRef(0),
        l = a.useRef(0),
        i = a.useRef(0),
        o = a.useRef(0),
        u = a.useRef(0),
        d = a.useRef(0),
        x = a.useCallback(() => {
            n.current.fill(0), (s.current = 0), (l.current = 0), (o.current = 0), (u.current = 0), (c.current = performance.now()), (i.current = 0);
        }, []),
        m = a.useCallback(
            function () {
                let a = performance.now(),
                    x = a - c.current;
                if (((c.current = a), t.current && !r)) return;
                if (((l.current -= n.current[u.current]), (n.current[u.current] = x), (l.current += x), o.current < b && (o.current += 1), (u.current = (u.current + 1) % b), x > j)) {
                    let t = 0 === o.current ? p : l.current / o.current,
                        r = Math.min(2 * p, t),
                        n = Math.floor(x / (e ? r : p));
                    n > 0 && (d.current = performance.now()), (s.current += n);
                }
                let m = 0 === o.current ? p : l.current / o.current;
                i.current += x / m;
            },
            [e, t, r]
        ),
        h = 0 === o.current ? 0 : l.current / o.current;
    return {
        currentFPS: 0 === h ? 0 : (p / h) * 60,
        averageFrameTime: h,
        timeSinceLastDrop: (performance.now() - d.current) / 1000,
        droppedFramesRef: s,
        bufferFramecountRef: o,
        renderedFrameCount: i,
        frameCheckerEffect: m,
        onResetFrameData: x
    };
}
function y(e) {
    let t = e.dispatcher.getIsSchedulerBackgrounded(),
        r = a.useRef(t);
    r.current = t;
    let n = a.useRef(t ? performance.now() : 0);
    return (
        a.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (n.current = performance.now());
        }),
        [r, n]
    );
}
function w(e) {
    let { socket: t, isAverageFrameTime: r } = e,
        [c, s] = y(t),
        { currentFPS: l, averageFrameTime: u, timeSinceLastDrop: x, onResetFrameData: f, droppedFramesRef: j, renderedFrameCount: b, bufferFramecountRef: w, frameCheckerEffect: S } = k(r, c),
        [R, O, I] = T(t),
        [F, C] = v(R, S),
        E = performance.now() - s.current < g,
        D = O(u, w.current);
    (0, o.ZP)(
        () => (
            F(),
            () => {
                C();
            }
        )
    );
    let P = a.useCallback(() => {
        f(), I(), F();
    }, [f, I, F]);
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsxs)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'FPS (~3sec):',
                    ' ',
                    (0, n.jsx)(i.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: l < 30 ? 'text-danger' : l < 45 ? 'text-warning' : 'text-primary',
                        children: l.toFixed(2)
                    })
                ]
            }),
            (0, n.jsxs)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Dropped Frames:',
                    ' ',
                    (0, n.jsx)(i.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: x < 2 ? 'text-danger' : x < 5 ? 'text-warning' : 'text-primary',
                        children: j.current
                    }),
                    (0, n.jsxs)(i.Text, {
                        tag: 'span',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: d.secondaryInfoText,
                        children: ['(Dropped: ', ((j.current / b.current) * 100).toFixed(4), '%)']
                    }),
                    E &&
                        (0, n.jsx)(i.ua7, {
                            position: 'left',
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            children: (e) =>
                                (0, n.jsx)(
                                    'span',
                                    h(m({}, e), {
                                        children: (0, n.jsx)(i.Text, {
                                            tag: 'span',
                                            variant: 'text-xs/bold',
                                            color: 'text-danger',
                                            className: d.secondaryInfoText,
                                            children: '(Backgrounded)'
                                        })
                                    })
                                )
                        })
                ]
            }),
            (0, n.jsxs)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Rendered Frames:',
                    ' ',
                    (0, n.jsx)(i.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: 'text-secondary',
                        children: b.current.toFixed(0)
                    })
                ]
            }),
            (0, n.jsxs)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Frame Times (~3sec):',
                    ' ',
                    (0, n.jsxs)(i.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: u > 1.1 * p ? 'text-warning' : 'text-secondary',
                        children: [u.toFixed(2), 'ms']
                    })
                ]
            }),
            (0, n.jsx)(i.ua7, {
                position: 'left',
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (e) =>
                    (0, n.jsx)(
                        'div',
                        h(m({}, e), {
                            children: (0, n.jsxs)(i.Text, {
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: [
                                    'Idle Frame Delta (~3sec):',
                                    ' ',
                                    (0, n.jsxs)(i.Text, {
                                        tag: 'span',
                                        variant: 'text-md/semibold',
                                        color: D > 1 ? 'text-danger' : 'text-secondary',
                                        children: [D.toFixed(2), 'ms']
                                    }),
                                    E &&
                                        (0, n.jsx)(i.ua7, {
                                            position: 'left',
                                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                            children: (e) =>
                                                (0, n.jsx)(
                                                    'span',
                                                    h(m({}, e), {
                                                        children: (0, n.jsx)(i.Text, {
                                                            tag: 'span',
                                                            variant: 'text-xs/bold',
                                                            color: 'text-danger',
                                                            className: d.secondaryInfoText,
                                                            children: '(Backgrounded)'
                                                        })
                                                    })
                                                )
                                        })
                                ]
                            })
                        })
                    )
            }),
            (0, n.jsx)('div', {
                className: d.bottomPanelButton,
                children: (0, n.jsx)(i.zxk, {
                    size: i.zxk.Sizes.SMALL,
                    onClick: P,
                    children: 'Reset Frame Data'
                })
            })
        ]
    });
}
function S(e) {
    let { socket: t, isAverageFrameTime: r, onToggleAverageFrameTime: c } = e,
        [s, l] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        o = a.useRef(null);
    a.useEffect(() => {
        let e = setInterval(() => {
            l(t.dispatcher.getIsRequestIdleCallbackEnabled());
        }, f);
        return (
            (o.current = e),
            () => {
                null != o.current && clearInterval(o.current);
            }
        );
    }, [t.dispatcher]);
    let u = (e) => {
        t.dispatcher.toggleRequestIdleCallback(e), l(e);
    };
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsx)(i.ua7, {
                position: 'left',
                text: 'Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.',
                children: (e) =>
                    (0, n.jsx)(
                        'div',
                        h(m({}, e), {
                            children: (0, n.jsx)(i.XZJ, {
                                value: r,
                                onChange: () => c(!r),
                                size: 18,
                                type: i.XZJ.Types.INVERTED,
                                shape: i.XZJ.Shapes.BOX,
                                children: (0, n.jsx)(i.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: 'Use Average Frame Time'
                                })
                            })
                        })
                    )
            }),
            (0, n.jsx)(i.XZJ, {
                value: s,
                onChange: () => u(!s),
                size: 18,
                type: i.XZJ.Types.INVERTED,
                shape: i.XZJ.Shapes.BOX,
                children: (0, n.jsx)(i.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable New Dispatch Scheduler (requestIdleCallback)'
                })
            })
        ]
    });
}
function R(e) {
    let { socket: t } = e,
        r = t.dispatcher.getDispatchTimings(),
        [c, l] = a.useState(!1);
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsx)('div', {
                className: s()(c && d.topPanelToggle),
                children: (0, n.jsx)(i.XZJ, {
                    value: c,
                    onChange: () => l((e) => !e),
                    size: 18,
                    type: i.XZJ.Types.INVERTED,
                    shape: i.XZJ.Shapes.BOX,
                    children: (0, n.jsx)(i.Text, {
                        tag: 'span',
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: 'Show Dispatch Timings'
                    })
                })
            }),
            c
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(i.Text, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: 'Gateway Dispatch Timings:'
                          }),
                          (0, n.jsx)('table', {
                              cellPadding: 4,
                              children: Object.entries(r).map((e) => {
                                  let [t, [r, a]] = e;
                                  return (0, n.jsxs)(
                                      'tr',
                                      {
                                          children: [
                                              (0, n.jsx)('td', {
                                                  children: (0, n.jsx)(i.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, n.jsx)('td', {
                                                  children: (0, n.jsxs)(i.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/bold',
                                                      color: 'text-normal',
                                                      children: [r.toFixed(2), 'ms']
                                                  })
                                              }),
                                              (0, n.jsx)('td', {
                                                  children: (0, n.jsxs)(i.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/normal',
                                                      color: 'text-muted',
                                                      children: ['(count: ', a, ')']
                                                  })
                                              })
                                          ]
                                      },
                                      t
                                  );
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}
function O(e) {
    let { socket: t } = e,
        r = t.dispatcher.getSchedulerTelemetry(),
        [c, l] = a.useState(r.isTelemetryEnabled),
        [o, u] = a.useState(r.isTelemetryEnabled),
        x = (e) => {
            u(e), r.toggleTelemetry(e);
        };
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsx)(i.XZJ, {
                value: o,
                onChange: () => x(!o),
                size: 18,
                type: i.XZJ.Types.INVERTED,
                shape: i.XZJ.Shapes.BOX,
                children: (0, n.jsx)(i.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable Dispatch Telemetry'
                })
            }),
            (0, n.jsx)('div', {
                className: s()(c && d.topPanelToggle),
                children: (0, n.jsx)(i.XZJ, {
                    value: c,
                    onChange: () => {
                        l((e) => {
                            let t = !e;
                            return t && x(!0), t;
                        });
                    },
                    size: 18,
                    type: i.XZJ.Types.INVERTED,
                    shape: i.XZJ.Shapes.BOX,
                    children: (0, n.jsx)(i.Text, {
                        tag: 'span',
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: 'Show Dispatch Scheduler Telemetry'
                    })
                })
            }),
            c
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(i.Text, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: 'Dispatch Scheduler Telemetry:'
                          }),
                          (0, n.jsx)('table', {
                              cellPadding: 4,
                              children: Object.entries(r.generateTelemetry()).map((e) => {
                                  let [t, r] = e;
                                  return (0, n.jsxs)(
                                      'tr',
                                      {
                                          children: [
                                              (0, n.jsx)('td', {
                                                  children: (0, n.jsx)(i.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, n.jsx)('td', {
                                                  children: (0, n.jsx)(i.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/bold',
                                                      color: 'text-normal',
                                                      children: r
                                                  })
                                              })
                                          ]
                                      },
                                      t
                                  );
                              })
                          }),
                          (0, n.jsx)('div', {
                              className: d.bottomPanelButton,
                              children: (0, n.jsx)(i.zxk, {
                                  size: i.zxk.Sizes.SMALL,
                                  onClick: () => {
                                      r.reset();
                                  },
                                  children: 'Reset Scheduler Telemetry'
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}
function I() {
    let [, e] = a.useState({});
    a.useEffect(() => {
        let t = setInterval(() => {
            e({});
        }, f);
        return () => {
            clearInterval(t);
        };
    }, []);
}
function F() {
    let e = (0, l.e7)([u.Z], () => u.Z.getSocket()),
        [t, r] = a.useState(!1);
    return (
        I(),
        (0, n.jsx)('div', {
            className: s()(x.panel, d.panel),
            children: (0, n.jsxs)(i.zJl, {
                className: d.panel,
                children: [
                    (0, n.jsx)(w, {
                        socket: e,
                        isAverageFrameTime: t
                    }),
                    (0, n.jsx)(S, {
                        socket: e,
                        isAverageFrameTime: t,
                        onToggleAverageFrameTime: r
                    }),
                    (0, n.jsx)(R, { socket: e }),
                    (0, n.jsx)(O, { socket: e })
                ]
            })
        })
    );
}
