r.d(t, {
    MC: () => p,
    Y5: () => j,
    ZF: () => T,
    ZP: () => I,
    d6: () => b,
    m8: () => v,
    nU: () => S,
    tO: () => m
}),
    r(47120);
var n = r(200651),
    a = r(192379),
    s = r(120356),
    c = r.n(s),
    l = r(442837),
    i = r(481060),
    u = r(493773),
    o = r(38618),
    d = r(273762),
    x = r(658951);
let m = 1000 / 60,
    h = 1000 / 30,
    p = 5000,
    f = (1000 / 60) * 3,
    g = Math.ceil(3000 / (1000 / 60));
function j(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        n = a.useRef(null),
        s = a.useRef(null),
        c = a.useRef(null),
        l = a.useRef(null != r ? r : window);
    a.useEffect(() => {
        l.current = null != r ? r : window;
    }, [r]);
    let i = a.useCallback(() => {
            null != n.current && l.current.clearInterval(n.current), null != s.current && l.current.cancelIdleCallback(s.current), null != c.current && l.current.cancelAnimationFrame(c.current);
        }, []),
        u = a.useCallback(() => {
            n.current = l.current.setTimeout(() => {
                (s.current = l.current.requestIdleCallback(e)),
                    (c.current = l.current.requestAnimationFrame(() => {
                        t(), u();
                    }));
            }, 12);
        }, [e, t]);
    return [
        a.useCallback(() => {
            i(), u();
        }, [i, u]),
        i
    ];
}
function T(e) {
    let t = a.useRef(Array(g).fill(0)),
        r = a.useRef(performance.now()),
        n = a.useRef(0),
        s = a.useRef(0),
        c = a.useRef(0),
        l = e.dispatcher.getIsSchedulerBackgrounded(),
        i = a.useRef(l);
    i.current = l;
    let u = a.useRef(l ? performance.now() : 0);
    return (
        a.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (u.current = performance.now());
        }),
        [
            a.useCallback(function () {
                let e = performance.now(),
                    a = e - r.current;
                (r.current = e), !i.current && ((n.current -= t.current[c.current]), (t.current[c.current] = a), (n.current += a), s.current < g && (s.current += 1), (c.current = (c.current + 1) % g));
            }, []),
            (e, t) => {
                var r;
                let a = null !== (r = s.current) && void 0 !== r ? r : 1;
                return Math.abs(e * t - (n.current / a) * a) / t;
            },
            () => {
                (n.current = 0), (s.current = 0), t.current.fill(0), (r.current = performance.now()), (c.current = 0);
            }
        ]
    );
}
function b(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = a.useRef(Array(g).fill(0)),
        s = a.useRef(performance.now()),
        c = a.useRef(0),
        l = a.useRef(0),
        i = a.useRef(0),
        u = a.useRef(0),
        o = a.useRef(0),
        d = a.useRef(0),
        x = a.useCallback(() => {
            n.current.fill(0), (c.current = 0), (l.current = 0), (u.current = 0), (o.current = 0), (s.current = performance.now()), (i.current = 0);
        }, []),
        h = a.useCallback(
            function () {
                let a = performance.now(),
                    x = a - s.current;
                if (((s.current = a), t.current && !r)) return;
                if (((l.current -= n.current[o.current]), (n.current[o.current] = x), (l.current += x), u.current < g && (u.current += 1), (o.current = (o.current + 1) % g), x > f)) {
                    let t = 0 === u.current ? m : l.current / u.current,
                        r = Math.min(2 * m, t),
                        n = Math.floor(x / (e ? r : m));
                    n > 0 && (d.current = performance.now()), (c.current += n);
                }
                let h = 0 === u.current ? m : l.current / u.current;
                i.current += x / h;
            },
            [e, t, r]
        ),
        p = 0 === u.current ? 0 : l.current / u.current;
    return {
        currentFPS: 0 === p ? 0 : (m / p) * 60,
        averageFrameTime: p,
        timeSinceLastDrop: (performance.now() - d.current) / 1000,
        droppedFramesRef: c,
        bufferFramecountRef: u,
        renderedFrameCount: i,
        frameCheckerEffect: h,
        onResetFrameData: x
    };
}
function v(e) {
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
        [s, c] = v(t),
        { currentFPS: l, averageFrameTime: o, timeSinceLastDrop: x, onResetFrameData: h, droppedFramesRef: f, renderedFrameCount: g, bufferFramecountRef: k, frameCheckerEffect: w } = b(r, s),
        [y, R, S] = T(t),
        [I, F] = j(y, w),
        C = performance.now() - c.current < p,
        E = R(o, k.current);
    (0, u.ZP)(
        () => (
            I(),
            () => {
                F();
            }
        )
    );
    let X = a.useCallback(() => {
        h(), S(), I();
    }, [h, S, I]);
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
                        children: f.current
                    }),
                    (0, n.jsxs)(i.Text, {
                        tag: 'span',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: d.secondaryInfoText,
                        children: ['(Dropped: ', ((f.current / g.current) * 100).toFixed(4), '%)']
                    }),
                    C &&
                        (0, n.jsx)(i.ua7, {
                            position: 'left',
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            children: (e) =>
                                (0, n.jsx)('span', {
                                    ...e,
                                    children: (0, n.jsx)(i.Text, {
                                        tag: 'span',
                                        variant: 'text-xs/bold',
                                        color: 'text-danger',
                                        className: d.secondaryInfoText,
                                        children: '(Backgrounded)'
                                    })
                                })
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
                        children: g.current.toFixed(0)
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
                        color: o > 1.1 * m ? 'text-warning' : 'text-secondary',
                        children: [o.toFixed(2), 'ms']
                    })
                ]
            }),
            (0, n.jsx)(i.ua7, {
                position: 'left',
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (e) =>
                    (0, n.jsx)('div', {
                        ...e,
                        children: (0, n.jsxs)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: [
                                'Idle Frame Delta (~3sec):',
                                ' ',
                                (0, n.jsxs)(i.Text, {
                                    tag: 'span',
                                    variant: 'text-md/semibold',
                                    color: E > 1 ? 'text-danger' : 'text-secondary',
                                    children: [E.toFixed(2), 'ms']
                                }),
                                C &&
                                    (0, n.jsx)(i.ua7, {
                                        position: 'left',
                                        text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                        children: (e) =>
                                            (0, n.jsx)('span', {
                                                ...e,
                                                children: (0, n.jsx)(i.Text, {
                                                    tag: 'span',
                                                    variant: 'text-xs/bold',
                                                    color: 'text-danger',
                                                    className: d.secondaryInfoText,
                                                    children: '(Backgrounded)'
                                                })
                                            })
                                    })
                            ]
                        })
                    })
            }),
            (0, n.jsx)('div', {
                className: d.bottomPanelButton,
                children: (0, n.jsx)(i.zxk, {
                    size: i.zxk.Sizes.SMALL,
                    onClick: X,
                    children: 'Reset Frame Data'
                })
            })
        ]
    });
}
function w(e) {
    let { socket: t, isAverageFrameTime: r, onToggleAverageFrameTime: s } = e,
        [c, l] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        u = a.useRef(null);
    a.useEffect(() => {
        let e = setInterval(() => {
            l(t.dispatcher.getIsRequestIdleCallbackEnabled());
        }, h);
        return (
            (u.current = e),
            () => {
                null != u.current && clearInterval(u.current);
            }
        );
    }, [t.dispatcher]);
    let o = (e) => {
        t.dispatcher.toggleRequestIdleCallback(e), l(e);
    };
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsx)(i.ua7, {
                position: 'left',
                text: 'Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.',
                children: (e) =>
                    (0, n.jsx)('div', {
                        ...e,
                        children: (0, n.jsx)(i.XZJ, {
                            value: r,
                            onChange: () => s(!r),
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
            }),
            (0, n.jsx)(i.XZJ, {
                value: c,
                onChange: () => o(!c),
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
function y(e) {
    let { socket: t } = e,
        r = t.dispatcher.getDispatchTimings(),
        [s, l] = a.useState(!1);
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsx)('div', {
                className: c()(s && d.topPanelToggle),
                children: (0, n.jsx)(i.XZJ, {
                    value: s,
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
            s
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
function R(e) {
    let { socket: t } = e,
        r = t.dispatcher.getSchedulerTelemetry(),
        [s, l] = a.useState(r.isTelemetryEnabled),
        [u, o] = a.useState(r.isTelemetryEnabled),
        x = (e) => {
            o(e), r.toggleTelemetry(e);
        };
    return (0, n.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, n.jsx)(i.XZJ, {
                value: u,
                onChange: () => x(!u),
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
                className: c()(s && d.topPanelToggle),
                children: (0, n.jsx)(i.XZJ, {
                    value: s,
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
            s
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
function S() {
    let [, e] = a.useState({});
    a.useEffect(() => {
        let t = setInterval(() => {
            e({});
        }, h);
        return () => {
            clearInterval(t);
        };
    }, []);
}
function I() {
    let e = (0, l.e7)([o.Z], () => o.Z.getSocket()),
        [t, r] = a.useState(!1);
    return (
        S(),
        (0, n.jsx)('div', {
            className: c()(x.panel, d.panel),
            children: (0, n.jsxs)(i.zJl, {
                className: d.panel,
                children: [
                    (0, n.jsx)(k, {
                        socket: e,
                        isAverageFrameTime: t
                    }),
                    (0, n.jsx)(w, {
                        socket: e,
                        isAverageFrameTime: t,
                        onToggleAverageFrameTime: r
                    }),
                    (0, n.jsx)(y, { socket: e }),
                    (0, n.jsx)(R, { socket: e })
                ]
            })
        })
    );
}
