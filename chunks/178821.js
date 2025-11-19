r.d(t, {
    MC: () => p,
    Y5: () => v,
    ZF: () => j,
    ZP: () => O,
    d6: () => k,
    m8: () => w,
    nU: () => S,
    tO: () => x,
}),
    r(388685);
var n = r(54381),
    a = r(473749),
    c = r(120356),
    l = r.n(c),
    u = r(442837),
    s = r(28664),
    o = r(481060),
    i = r(493773),
    d = r(38618),
    f = r(756746),
    m = r(866403);
let x = 1000 / 60,
    h = 1000 / 30,
    p = 5000,
    g = (1000 / 60) * 3,
    b = Math.ceil(3000 / (1000 / 60));
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
function j(e) {
    let t = a.useRef(Array(b).fill(0)),
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
                        c.current < b && (c.current += 1),
                        (l.current = (l.current + 1) % b));
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
        n = a.useRef(Array(b).fill(0)),
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
                    o.current < b && (o.current += 1),
                    (i.current = (i.current + 1) % b),
                    f > g)
                ) {
                    let t = 0 === o.current ? x : u.current / o.current,
                        r = Math.min(2 * x, t),
                        n = Math.floor(f / (e ? r : x));
                    n > 0 && (d.current = performance.now()), (l.current += n);
                }
                let m = 0 === o.current ? x : u.current / o.current;
                s.current += f / m;
            },
            [e, t, r],
        ),
        h = 0 === o.current ? 0 : u.current / o.current;
    return {
        currentFPS: 0 === h ? 0 : (x / h) * 60,
        averageFrameTime: h,
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
function y(e) {
    let { socket: t, isAverageFrameTime: r } = e,
        [c, l] = w(t),
        {
            currentFPS: u,
            averageFrameTime: d,
            timeSinceLastDrop: m,
            onResetFrameData: h,
            droppedFramesRef: g,
            renderedFrameCount: b,
            bufferFramecountRef: y,
            frameCheckerEffect: T,
        } = k(r, c),
        [R, C, S] = j(t),
        [O, E] = v(R, T),
        F = performance.now() - l.current < p,
        P = C(d, y.current);
    (0, i.ZP)(
        () => (
            O(),
            () => {
                E();
            }
        ),
    );
    let I = a.useCallback(() => {
        h(), S(), O();
    }, [h, S, O]);
    return (0, n.jsxs)("div", {
        className: f.panelGroup,
        children: [
            (0, n.jsxs)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "FPS (~3sec):",
                    " ",
                    (0, n.jsx)(o.Text, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: u < 30 ? "text-danger" : u < 45 ? "text-feedback-warning" : "text-primary",
                        children: u.toFixed(2),
                    }),
                ],
            }),
            (0, n.jsxs)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Dropped Frames:",
                    " ",
                    (0, n.jsx)(o.Text, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: m < 2 ? "text-danger" : m < 5 ? "text-feedback-warning" : "text-primary",
                        children: g.current,
                    }),
                    (0, n.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: f.secondaryInfoText,
                        children: ["(Dropped: ", ((g.current / b.current) * 100).toFixed(4), "%)"],
                    }),
                    F &&
                        (0, n.jsx)(s.u, {
                            position: "left",
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            asContainer: !0,
                            children: (0, n.jsx)(o.Text, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-danger",
                                className: f.secondaryInfoText,
                                children: "(Backgrounded)",
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Rendered Frames:",
                    " ",
                    (0, n.jsx)(o.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-secondary",
                        children: b.current.toFixed(0),
                    }),
                ],
            }),
            (0, n.jsxs)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Frame Times (~3sec):",
                    " ",
                    (0, n.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: d > 1.1 * x ? "text-feedback-warning" : "text-secondary",
                        children: [d.toFixed(2), "ms"],
                    }),
                ],
            }),
            (0, n.jsx)(s.u, {
                position: "left",
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                asContainer: !0,
                children: (0, n.jsxs)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: [
                        "Idle Frame Delta (~3sec):",
                        " ",
                        (0, n.jsxs)(o.Text, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: P > 1 ? "text-danger" : "text-secondary",
                            children: [P.toFixed(2), "ms"],
                        }),
                        F &&
                            (0, n.jsx)(s.u, {
                                position: "left",
                                text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                asContainer: !0,
                                children: (0, n.jsx)(o.Text, {
                                    tag: "span",
                                    variant: "text-xs/bold",
                                    color: "text-danger",
                                    className: f.secondaryInfoText,
                                    children: "(Backgrounded)",
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: f.bottomPanelButton,
                children: (0, n.jsx)(o.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Reset Frame Data",
                    onClick: I,
                }),
            }),
        ],
    });
}
function T(e) {
    let { socket: t, isAverageFrameTime: r, onToggleAverageFrameTime: c } = e,
        [l, u] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        i = a.useRef(null);
    return (
        a.useEffect(
            () => (
                (i.current = setInterval(() => {
                    u(t.dispatcher.getIsRequestIdleCallbackEnabled());
                }, h)),
                () => {
                    null != i.current && clearInterval(i.current);
                }
            ),
            [t.dispatcher],
        ),
        (0, n.jsxs)("div", {
            className: f.panelGroup,
            children: [
                (0, n.jsx)(s.u, {
                    position: "left",
                    text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
                    asContainer: !0,
                    children: (0, n.jsx)(o.Checkbox, {
                        label: "Use Average Frame Time",
                        checked: r,
                        onChange: () => c(!r),
                    }),
                }),
                (0, n.jsx)(o.Checkbox, {
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
        className: f.panelGroup,
        children: [
            (0, n.jsx)("div", {
                className: l()(c && f.topPanelToggle),
                children: (0, n.jsx)(o.Checkbox, {
                    label: "Show Dispatch Timings",
                    checked: c,
                    onChange: () => u((e) => !e),
                }),
            }),
            c
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(o.Text, {
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
                                                  children: (0, n.jsx)(o.Text, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsxs)(o.Text, {
                                                      tag: "span",
                                                      variant: "text-xs/bold",
                                                      color: "text-default",
                                                      children: [r.toFixed(2), "ms"],
                                                  }),
                                              }),
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsxs)(o.Text, {
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
function C(e) {
    let { socket: t } = e,
        r = t.dispatcher.getSchedulerTelemetry(),
        [c, u] = a.useState(r.isTelemetryEnabled),
        [s, i] = a.useState(r.isTelemetryEnabled),
        d = (e) => {
            i(e), r.toggleTelemetry(e);
        };
    return (0, n.jsxs)("div", {
        className: f.panelGroup,
        children: [
            (0, n.jsx)(o.Checkbox, {
                label: "Enable Dispatch Telemetry",
                checked: s,
                onChange: () => d(!s),
            }),
            (0, n.jsx)("div", {
                className: l()(c && f.topPanelToggle),
                children: (0, n.jsx)(o.Checkbox, {
                    label: "Show Dispatch Scheduler Telemetry",
                    checked: c,
                    onChange: () => {
                        u((e) => {
                            let t = !e;
                            return t && d(!0), t;
                        });
                    },
                }),
            }),
            c
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(o.Text, {
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
                                                  children: (0, n.jsx)(o.Text, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsx)(o.Text, {
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
                              className: f.bottomPanelButton,
                              children: (0, n.jsx)(o.Button, {
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
function O() {
    let e = (0, u.e7)([d.Z], () => d.Z.getSocket()),
        [t, r] = a.useState(!1);
    return (
        S(),
        (0, n.jsx)("div", {
            className: l()(m.panel, f.panel),
            children: (0, n.jsxs)(o.zJl, {
                className: f.panel,
                children: [
                    (0, n.jsx)(y, {
                        socket: e,
                        isAverageFrameTime: t,
                    }),
                    (0, n.jsx)(T, {
                        socket: e,
                        isAverageFrameTime: t,
                        onToggleAverageFrameTime: r,
                    }),
                    (0, n.jsx)(R, { socket: e }),
                    (0, n.jsx)(C, { socket: e }),
                ],
            }),
        })
    );
}
