r.d(t, {
    MC: () => g,
    Y5: () => v,
    ZF: () => T,
    ZP: () => I,
    d6: () => y,
    m8: () => w,
    nU: () => S,
    tO: () => f
}),
    r(47120);
var n = r(200651),
    a = r(192379),
    c = r(120356),
    l = r.n(c),
    s = r(442837),
    u = r(481060),
    i = r(493773),
    o = r(38618),
    d = r(917356),
    m = r(616257);
function x(e) {
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
let f = 1000 / 60,
    p = 1000 / 30,
    g = 5000,
    b = (1000 / 60) * 3,
    j = Math.ceil(3000 / (1000 / 60));
function v(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        n = a.useRef(null),
        c = a.useRef(null),
        l = a.useRef(null),
        s = a.useRef(null != r ? r : window);
    a.useEffect(() => {
        s.current = null != r ? r : window;
    }, [r]);
    let u = a.useCallback(() => {
            null != n.current && s.current.clearInterval(n.current), null != c.current && s.current.cancelIdleCallback(c.current), null != l.current && s.current.cancelAnimationFrame(l.current);
        }, []),
        i = a.useCallback(() => {
            n.current = s.current.setTimeout(() => {
                (c.current = s.current.requestIdleCallback(e)),
                    (l.current = s.current.requestAnimationFrame(() => {
                        t(), i();
                    }));
            }, 12);
        }, [e, t]);
    return [
        a.useCallback(() => {
            u(), i();
        }, [u, i]),
        u
    ];
}
function T(e) {
    let t = a.useRef(Array(j).fill(0)),
        r = a.useRef(performance.now()),
        n = a.useRef(0),
        c = a.useRef(0),
        l = a.useRef(0),
        s = e.dispatcher.getIsSchedulerBackgrounded(),
        u = a.useRef(s);
    u.current = s;
    let i = a.useRef(s ? performance.now() : 0);
    return (
        a.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (i.current = performance.now());
        }),
        [
            a.useCallback(function () {
                let e = performance.now(),
                    a = e - r.current;
                (r.current = e), u.current || ((n.current -= t.current[l.current]), (t.current[l.current] = a), (n.current += a), c.current < j && (c.current += 1), (l.current = (l.current + 1) % j));
            }, []),
            (e, t) => {
                var r;
                let a = null != (r = c.current) ? r : 1;
                return Math.abs(e * t - (n.current / a) * a) / t;
            },
            () => {
                (n.current = 0), (c.current = 0), t.current.fill(0), (r.current = performance.now()), (l.current = 0);
            }
        ]
    );
}
function y(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = a.useRef(Array(j).fill(0)),
        c = a.useRef(performance.now()),
        l = a.useRef(0),
        s = a.useRef(0),
        u = a.useRef(0),
        i = a.useRef(0),
        o = a.useRef(0),
        d = a.useRef(0),
        m = a.useCallback(() => {
            n.current.fill(0), (l.current = 0), (s.current = 0), (i.current = 0), (o.current = 0), (c.current = performance.now()), (u.current = 0);
        }, []),
        x = a.useCallback(
            function () {
                let a = performance.now(),
                    m = a - c.current;
                if (((c.current = a), t.current && !r)) return;
                if (((s.current -= n.current[o.current]), (n.current[o.current] = m), (s.current += m), i.current < j && (i.current += 1), (o.current = (o.current + 1) % j), m > b)) {
                    let t = 0 === i.current ? f : s.current / i.current,
                        r = Math.min(2 * f, t),
                        n = Math.floor(m / (e ? r : f));
                    n > 0 && (d.current = performance.now()), (l.current += n);
                }
                let x = 0 === i.current ? f : s.current / i.current;
                u.current += m / x;
            },
            [e, t, r]
        ),
        h = 0 === i.current ? 0 : s.current / i.current;
    return {
        currentFPS: 0 === h ? 0 : (f / h) * 60,
        averageFrameTime: h,
        timeSinceLastDrop: (performance.now() - d.current) / 1000,
        droppedFramesRef: l,
        bufferFramecountRef: i,
        renderedFrameCount: u,
        frameCheckerEffect: x,
        onResetFrameData: m
    };
}
function w(e) {
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
function k(e) {
    let { socket: t, isAverageFrameTime: r } = e,
        [c, l] = w(t),
        { currentFPS: s, averageFrameTime: o, timeSinceLastDrop: m, onResetFrameData: p, droppedFramesRef: b, renderedFrameCount: j, bufferFramecountRef: k, frameCheckerEffect: R } = y(r, c),
        [O, E, S] = T(t),
        [I, F] = v(O, R),
        P = performance.now() - l.current < g,
        N = E(o, k.current);
    (0, i.ZP)(
        () => (
            I(),
            () => {
                F();
            }
        )
    );
    let C = a.useCallback(() => {
        p(), S(), I();
    }, [p, S, I]);
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsxs)(u.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'FPS (~3sec):',
                    ' ',
                    (0, n.jsx)(u.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: s < 30 ? 'text-danger' : s < 45 ? 'text-warning' : 'text-primary',
                        children: s.toFixed(2)
                    })
                ]
            }),
            (0, n.jsxs)(u.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Dropped Frames:',
                    ' ',
                    (0, n.jsx)(u.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: m < 2 ? 'text-danger' : m < 5 ? 'text-warning' : 'text-primary',
                        children: b.current
                    }),
                    (0, n.jsxs)(u.Text, {
                        tag: 'span',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: d.secondaryInfoText,
                        children: ['(Dropped: ', ((b.current / j.current) * 100).toFixed(4), '%)']
                    }),
                    P &&
                        (0, n.jsx)(u.ua7, {
                            position: 'left',
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            children: (e) =>
                                (0, n.jsx)(
                                    'span',
                                    h(x({}, e), {
                                        children: (0, n.jsx)(u.Text, {
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
            (0, n.jsxs)(u.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Rendered Frames:',
                    ' ',
                    (0, n.jsx)(u.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: 'text-secondary',
                        children: j.current.toFixed(0)
                    })
                ]
            }),
            (0, n.jsxs)(u.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Frame Times (~3sec):',
                    ' ',
                    (0, n.jsxs)(u.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: o > 1.1 * f ? 'text-warning' : 'text-secondary',
                        children: [o.toFixed(2), 'ms']
                    })
                ]
            }),
            (0, n.jsx)(u.ua7, {
                position: 'left',
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (e) =>
                    (0, n.jsx)(
                        'div',
                        h(x({}, e), {
                            children: (0, n.jsxs)(u.Text, {
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: [
                                    'Idle Frame Delta (~3sec):',
                                    ' ',
                                    (0, n.jsxs)(u.Text, {
                                        tag: 'span',
                                        variant: 'text-md/semibold',
                                        color: N > 1 ? 'text-danger' : 'text-secondary',
                                        children: [N.toFixed(2), 'ms']
                                    }),
                                    P &&
                                        (0, n.jsx)(u.ua7, {
                                            position: 'left',
                                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                            children: (e) =>
                                                (0, n.jsx)(
                                                    'span',
                                                    h(x({}, e), {
                                                        children: (0, n.jsx)(u.Text, {
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
                children: (0, n.jsx)(u.zxk, {
                    size: u.zxk.Sizes.SMALL,
                    onClick: C,
                    children: 'Reset Frame Data'
                })
            })
        ]
    });
}
function R(e) {
    let { socket: t, isAverageFrameTime: r, onToggleAverageFrameTime: c } = e,
        [l, s] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        i = a.useRef(null);
    a.useEffect(
        () => (
            (i.current = setInterval(() => {
                s(t.dispatcher.getIsRequestIdleCallbackEnabled());
            }, p)),
            () => {
                null != i.current && clearInterval(i.current);
            }
        ),
        [t.dispatcher]
    );
    let o = (e) => {
        t.dispatcher.toggleRequestIdleCallback(e), s(e);
    };
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsx)(u.ua7, {
                position: 'left',
                text: 'Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.',
                children: (e) =>
                    (0, n.jsx)(
                        'div',
                        h(x({}, e), {
                            children: (0, n.jsx)(u.XZJ, {
                                value: r,
                                onChange: () => c(!r),
                                size: 18,
                                type: u.XZJ.Types.INVERTED,
                                shape: u.XZJ.Shapes.BOX,
                                children: (0, n.jsx)(u.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: 'Use Average Frame Time'
                                })
                            })
                        })
                    )
            }),
            (0, n.jsx)(u.XZJ, {
                value: l,
                onChange: () => o(!l),
                size: 18,
                type: u.XZJ.Types.INVERTED,
                shape: u.XZJ.Shapes.BOX,
                children: (0, n.jsx)(u.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable New Dispatch Scheduler (requestIdleCallback)'
                })
            })
        ]
    });
}
function O(e) {
    let { socket: t } = e,
        r = t.dispatcher.getDispatchTimings(),
        [c, s] = a.useState(!1);
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsx)('div', {
                className: l()(c && d.topPanelToggle),
                children: (0, n.jsx)(u.XZJ, {
                    value: c,
                    onChange: () => s((e) => !e),
                    size: 18,
                    type: u.XZJ.Types.INVERTED,
                    shape: u.XZJ.Shapes.BOX,
                    children: (0, n.jsx)(u.Text, {
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
                          (0, n.jsx)(u.Text, {
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
                                                  children: (0, n.jsx)(u.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, n.jsx)('td', {
                                                  children: (0, n.jsxs)(u.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/bold',
                                                      color: 'text-normal',
                                                      children: [r.toFixed(2), 'ms']
                                                  })
                                              }),
                                              (0, n.jsx)('td', {
                                                  children: (0, n.jsxs)(u.Text, {
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
function E(e) {
    let { socket: t } = e,
        r = t.dispatcher.getSchedulerTelemetry(),
        [c, s] = a.useState(r.isTelemetryEnabled),
        [i, o] = a.useState(r.isTelemetryEnabled),
        m = (e) => {
            o(e), r.toggleTelemetry(e);
        };
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsx)(u.XZJ, {
                value: i,
                onChange: () => m(!i),
                size: 18,
                type: u.XZJ.Types.INVERTED,
                shape: u.XZJ.Shapes.BOX,
                children: (0, n.jsx)(u.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable Dispatch Telemetry'
                })
            }),
            (0, n.jsx)('div', {
                className: l()(c && d.topPanelToggle),
                children: (0, n.jsx)(u.XZJ, {
                    value: c,
                    onChange: () => {
                        s((e) => {
                            let t = !e;
                            return t && m(!0), t;
                        });
                    },
                    size: 18,
                    type: u.XZJ.Types.INVERTED,
                    shape: u.XZJ.Shapes.BOX,
                    children: (0, n.jsx)(u.Text, {
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
                          (0, n.jsx)(u.Text, {
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
                                                  children: (0, n.jsx)(u.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, n.jsx)('td', {
                                                  children: (0, n.jsx)(u.Text, {
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
                              children: (0, n.jsx)(u.zxk, {
                                  size: u.zxk.Sizes.SMALL,
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
function S() {
    let [, e] = a.useState({});
    a.useEffect(() => {
        let t = setInterval(() => {
            e({});
        }, p);
        return () => {
            clearInterval(t);
        };
    }, []);
}
function I() {
    let e = (0, s.e7)([o.Z], () => o.Z.getSocket()),
        [t, r] = a.useState(!1);
    return (
        S(),
        (0, n.jsx)('div', {
            className: l()(m.panel, d.panel),
            children: (0, n.jsxs)(u.zJl, {
                className: d.panel,
                children: [
                    (0, n.jsx)(k, {
                        socket: e,
                        isAverageFrameTime: t
                    }),
                    (0, n.jsx)(R, {
                        socket: e,
                        isAverageFrameTime: t,
                        onToggleAverageFrameTime: r
                    }),
                    (0, n.jsx)(O, { socket: e }),
                    (0, n.jsx)(E, { socket: e })
                ]
            })
        })
    );
}
