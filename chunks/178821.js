r.d(t, {
    MC: () => g,
    Y5: () => v,
    ZF: () => y,
    ZP: () => E,
    d6: () => k,
    m8: () => w,
    nU: () => P,
    tO: () => h,
}),
    r(388685);
var n = r(951288),
    a = r(647438),
    c = r(120356),
    l = r.n(c),
    u = r(442837),
    s = r(481060),
    o = r(493773),
    i = r(38618),
    d = r(499504),
    f = r(451429);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function x(e, t) {
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
let h = 1000 / 60,
    p = 1000 / 30,
    g = 5000,
    b = (1000 / 60) * 3,
    j = Math.ceil(3000 / (1000 / 60));
function v(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        n = a.useRef(null),
        c = a.useRef(null),
        l = a.useRef(null),
        u = a.useRef(null != r ? r : window);
    a.useEffect(() => {
        u.current = null != r ? r : window;
    }, [r]);
    let s = a.useCallback(() => {
            null != n.current && u.current.clearInterval(n.current),
                null != c.current && u.current.cancelIdleCallback(c.current),
                null != l.current && u.current.cancelAnimationFrame(l.current);
        }, []),
        o = a.useCallback(() => {
            n.current = u.current.setTimeout(() => {
                (c.current = u.current.requestIdleCallback(e)),
                    (l.current = u.current.requestAnimationFrame(() => {
                        t(), o();
                    }));
            }, 12);
        }, [e, t]);
    return [
        a.useCallback(() => {
            s(), o();
        }, [s, o]),
        s,
    ];
}
function y(e) {
    let t = a.useRef(Array(j).fill(0)),
        r = a.useRef(performance.now()),
        n = a.useRef(0),
        c = a.useRef(0),
        l = a.useRef(0),
        u = e.dispatcher.getIsSchedulerBackgrounded(),
        s = a.useRef(u);
    s.current = u;
    let o = a.useRef(u ? performance.now() : 0);
    return (
        a.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (o.current = performance.now());
        }),
        [
            a.useCallback(function () {
                let e = performance.now(),
                    a = e - r.current;
                (r.current = e),
                    s.current ||
                        ((n.current -= t.current[l.current]),
                        (t.current[l.current] = a),
                        (n.current += a),
                        c.current < j && (c.current += 1),
                        (l.current = (l.current + 1) % j));
            }, []),
            (e, t) => {
                var r;
                let a = null != (r = c.current) ? r : 1;
                return Math.abs(e * t - (n.current / a) * a) / t;
            },
            () => {
                (n.current = 0), (c.current = 0), t.current.fill(0), (r.current = performance.now()), (l.current = 0);
            },
        ]
    );
}
function k(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = a.useRef(Array(j).fill(0)),
        c = a.useRef(performance.now()),
        l = a.useRef(0),
        u = a.useRef(0),
        s = a.useRef(0),
        o = a.useRef(0),
        i = a.useRef(0),
        d = a.useRef(0),
        f = a.useCallback(() => {
            n.current.fill(0),
                (l.current = 0),
                (u.current = 0),
                (o.current = 0),
                (i.current = 0),
                (c.current = performance.now()),
                (s.current = 0);
        }, []),
        m = a.useCallback(
            function () {
                let a = performance.now(),
                    f = a - c.current;
                if (((c.current = a), t.current && !r)) return;
                if (
                    ((u.current -= n.current[i.current]),
                    (n.current[i.current] = f),
                    (u.current += f),
                    o.current < j && (o.current += 1),
                    (i.current = (i.current + 1) % j),
                    f > b)
                ) {
                    let t = 0 === o.current ? h : u.current / o.current,
                        r = Math.min(2 * h, t),
                        n = Math.floor(f / (e ? r : h));
                    n > 0 && (d.current = performance.now()), (l.current += n);
                }
                let m = 0 === o.current ? h : u.current / o.current;
                s.current += f / m;
            },
            [e, t, r],
        ),
        x = 0 === o.current ? 0 : u.current / o.current;
    return {
        currentFPS: 0 === x ? 0 : (h / x) * 60,
        averageFrameTime: x,
        timeSinceLastDrop: (performance.now() - d.current) / 1000,
        droppedFramesRef: l,
        bufferFramecountRef: o,
        renderedFrameCount: s,
        frameCheckerEffect: m,
        onResetFrameData: f,
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
function O(e) {
    let { socket: t, isAverageFrameTime: r } = e,
        [c, l] = w(t),
        {
            currentFPS: u,
            averageFrameTime: i,
            timeSinceLastDrop: f,
            onResetFrameData: p,
            droppedFramesRef: b,
            renderedFrameCount: j,
            bufferFramecountRef: O,
            frameCheckerEffect: T,
        } = k(r, c),
        [R, S, P] = y(t),
        [E, C] = v(R, T),
        F = performance.now() - l.current < g,
        I = S(i, O.current);
    (0, o.ZP)(
        () => (
            E(),
            () => {
                C();
            }
        ),
    );
    let D = a.useCallback(() => {
        p(), P(), E();
    }, [p, P, E]);
    return (0, n.jsxs)("div", {
        className: d.panelGroup,
        children: [
            (0, n.jsxs)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "FPS (~3sec):",
                    " ",
                    (0, n.jsx)(s.Text, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: u < 30 ? "text-danger" : u < 45 ? "text-feedback-warning" : "text-primary",
                        children: u.toFixed(2),
                    }),
                ],
            }),
            (0, n.jsxs)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Dropped Frames:",
                    " ",
                    (0, n.jsx)(s.Text, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: f < 2 ? "text-danger" : f < 5 ? "text-feedback-warning" : "text-primary",
                        children: b.current,
                    }),
                    (0, n.jsxs)(s.Text, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: d.secondaryInfoText,
                        children: ["(Dropped: ", ((b.current / j.current) * 100).toFixed(4), "%)"],
                    }),
                    F &&
                        (0, n.jsx)(s.ua7, {
                            position: "left",
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            children: (e) =>
                                (0, n.jsx)(
                                    "span",
                                    x(m({}, e), {
                                        children: (0, n.jsx)(s.Text, {
                                            tag: "span",
                                            variant: "text-xs/bold",
                                            color: "text-danger",
                                            className: d.secondaryInfoText,
                                            children: "(Backgrounded)",
                                        }),
                                    }),
                                ),
                        }),
                ],
            }),
            (0, n.jsxs)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Rendered Frames:",
                    " ",
                    (0, n.jsx)(s.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-secondary",
                        children: j.current.toFixed(0),
                    }),
                ],
            }),
            (0, n.jsxs)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Frame Times (~3sec):",
                    " ",
                    (0, n.jsxs)(s.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: i > 1.1 * h ? "text-feedback-warning" : "text-secondary",
                        children: [i.toFixed(2), "ms"],
                    }),
                ],
            }),
            (0, n.jsx)(s.ua7, {
                position: "left",
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (e) =>
                    (0, n.jsx)(
                        "div",
                        x(m({}, e), {
                            children: (0, n.jsxs)(s.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: [
                                    "Idle Frame Delta (~3sec):",
                                    " ",
                                    (0, n.jsxs)(s.Text, {
                                        tag: "span",
                                        variant: "text-md/semibold",
                                        color: I > 1 ? "text-danger" : "text-secondary",
                                        children: [I.toFixed(2), "ms"],
                                    }),
                                    F &&
                                        (0, n.jsx)(s.ua7, {
                                            position: "left",
                                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                            children: (e) =>
                                                (0, n.jsx)(
                                                    "span",
                                                    x(m({}, e), {
                                                        children: (0, n.jsx)(s.Text, {
                                                            tag: "span",
                                                            variant: "text-xs/bold",
                                                            color: "text-danger",
                                                            className: d.secondaryInfoText,
                                                            children: "(Backgrounded)",
                                                        }),
                                                    }),
                                                ),
                                        }),
                                ],
                            }),
                        }),
                    ),
            }),
            (0, n.jsx)("div", {
                className: d.bottomPanelButton,
                children: (0, n.jsx)(s.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: "Reset Frame Data",
                    onClick: D,
                }),
            }),
        ],
    });
}
function T(e) {
    let { socket: t, isAverageFrameTime: r, onToggleAverageFrameTime: c } = e,
        [l, u] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        o = a.useRef(null);
    return (
        a.useEffect(
            () => (
                (o.current = setInterval(() => {
                    u(t.dispatcher.getIsRequestIdleCallbackEnabled());
                }, p)),
                () => {
                    null != o.current && clearInterval(o.current);
                }
            ),
            [t.dispatcher],
        ),
        (0, n.jsxs)("div", {
            className: d.panelGroup,
            children: [
                (0, n.jsx)(s.ua7, {
                    position: "left",
                    text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
                    children: (e) =>
                        (0, n.jsx)(
                            "div",
                            x(m({}, e), {
                                children: (0, n.jsx)(s.XZJ, {
                                    label: "Use Average Frame Time",
                                    checked: r,
                                    onChange: () => c(!r),
                                }),
                            }),
                        ),
                }),
                (0, n.jsx)(s.XZJ, {
                    label: "Enable New Dispatch Scheduler (requestIdleCallback)",
                    checked: l,
                    onChange: () => {
                        var e;
                        return (e = !l), void (t.dispatcher.toggleRequestIdleCallback(e), u(e));
                    },
                }),
            ],
        })
    );
}
function R(e) {
    let { socket: t } = e,
        r = t.dispatcher.getDispatchTimings(),
        [c, u] = a.useState(!1);
    return (0, n.jsxs)("div", {
        className: d.panelGroup,
        children: [
            (0, n.jsx)("div", {
                className: l()(c && d.topPanelToggle),
                children: (0, n.jsx)(s.XZJ, {
                    label: "Show Dispatch Timings",
                    checked: c,
                    onChange: () => u((e) => !e),
                }),
            }),
            c
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(s.Text, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: "Gateway Dispatch Timings:",
                          }),
                          (0, n.jsx)("table", {
                              cellPadding: 4,
                              children: Object.entries(r).map((e) => {
                                  let [t, [r, a]] = e;
                                  return (0, n.jsxs)(
                                      "tr",
                                      {
                                          children: [
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsx)(s.Text, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsxs)(s.Text, {
                                                      tag: "span",
                                                      variant: "text-xs/bold",
                                                      color: "text-default",
                                                      children: [r.toFixed(2), "ms"],
                                                  }),
                                              }),
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsxs)(s.Text, {
                                                      tag: "span",
                                                      variant: "text-xs/normal",
                                                      color: "text-muted",
                                                      children: ["(count: ", a, ")"],
                                                  }),
                                              }),
                                          ],
                                      },
                                      t,
                                  );
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function S(e) {
    let { socket: t } = e,
        r = t.dispatcher.getSchedulerTelemetry(),
        [c, u] = a.useState(r.isTelemetryEnabled),
        [o, i] = a.useState(r.isTelemetryEnabled),
        f = (e) => {
            i(e), r.toggleTelemetry(e);
        };
    return (0, n.jsxs)("div", {
        className: d.panelGroup,
        children: [
            (0, n.jsx)(s.XZJ, {
                label: "Enable Dispatch Telemetry",
                checked: o,
                onChange: () => f(!o),
            }),
            (0, n.jsx)("div", {
                className: l()(c && d.topPanelToggle),
                children: (0, n.jsx)(s.XZJ, {
                    label: "Show Dispatch Scheduler Telemetry",
                    checked: c,
                    onChange: () => {
                        u((e) => {
                            let t = !e;
                            return t && f(!0), t;
                        });
                    },
                }),
            }),
            c
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(s.Text, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: "Dispatch Scheduler Telemetry:",
                          }),
                          (0, n.jsx)("table", {
                              cellPadding: 4,
                              children: Object.entries(r.generateTelemetry()).map((e) => {
                                  let [t, r] = e;
                                  return (0, n.jsxs)(
                                      "tr",
                                      {
                                          children: [
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsx)(s.Text, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsx)(s.Text, {
                                                      tag: "span",
                                                      variant: "text-xs/bold",
                                                      color: "text-default",
                                                      children: r,
                                                  }),
                                              }),
                                          ],
                                      },
                                      t,
                                  );
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: d.bottomPanelButton,
                              children: (0, n.jsx)(s.zxk, {
                                  variant: "primary",
                                  size: "sm",
                                  text: "Reset Scheduler Telemetry",
                                  onClick: () => {
                                      r.reset();
                                  },
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function P() {
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
function E() {
    let e = (0, u.e7)([i.Z], () => i.Z.getSocket()),
        [t, r] = a.useState(!1);
    return (
        P(),
        (0, n.jsx)("div", {
            className: l()(f.panel, d.panel),
            children: (0, n.jsxs)(s.zJl, {
                className: d.panel,
                children: [
                    (0, n.jsx)(O, {
                        socket: e,
                        isAverageFrameTime: t,
                    }),
                    (0, n.jsx)(T, {
                        socket: e,
                        isAverageFrameTime: t,
                        onToggleAverageFrameTime: r,
                    }),
                    (0, n.jsx)(R, { socket: e }),
                    (0, n.jsx)(S, { socket: e }),
                ],
            }),
        })
    );
}
