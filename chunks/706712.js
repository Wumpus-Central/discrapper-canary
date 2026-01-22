r.d(t, {
    Ay: () => O,
    DQ: () => w,
    Dj: () => k,
    F5: () => j,
    Jc: () => b,
    L6: () => x,
    ZX: () => S,
    km: () => v,
}),
    r(896048);
var n = r(627968),
    a = r(64700),
    c = r(503698),
    l = r.n(c),
    u = r(311907),
    s = r(990078),
    i = r(397927),
    o = r(964486),
    d = r(142120),
    f = r(132262),
    m = r(661251);
let x = 1e3 / 60,
    h = 1e3 / 30,
    b = 5e3,
    g = (1e3 / 60) * 3,
    p = Math.ceil(3e3 / (1e3 / 60));

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
        i = a.useCallback(() => {
            n.current = u.current.setTimeout(() => {
                (c.current = u.current.requestIdleCallback(e)),
                    (l.current = u.current.requestAnimationFrame(() => {
                        t(), i();
                    }));
            }, 12);
        }, [e, t]);
    return [
        a.useCallback(() => {
            s(), i();
        }, [s, i]),
        s,
    ];
}

function j(e) {
    let t = a.useRef(Array(p).fill(0)),
        r = a.useRef(performance.now()),
        n = a.useRef(0),
        c = a.useRef(0),
        l = a.useRef(0),
        u = e.dispatcher.getIsSchedulerBackgrounded(),
        s = a.useRef(u);
    s.current = u;
    let i = a.useRef(u ? performance.now() : 0);
    return (
        a.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (i.current = performance.now());
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
                        c.current < p && (c.current += 1),
                        (l.current = (l.current + 1) % p));
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
        n = a.useRef(Array(p).fill(0)),
        c = a.useRef(performance.now()),
        l = a.useRef(0),
        u = a.useRef(0),
        s = a.useRef(0),
        i = a.useRef(0),
        o = a.useRef(0),
        d = a.useRef(0),
        f = a.useCallback(() => {
            n.current.fill(0),
                (l.current = 0),
                (u.current = 0),
                (i.current = 0),
                (o.current = 0),
                (c.current = performance.now()),
                (s.current = 0);
        }, []),
        m = a.useCallback(
            function () {
                let a = performance.now(),
                    f = a - c.current;
                if (((c.current = a), t.current && !r)) return;
                if (
                    ((u.current -= n.current[o.current]),
                    (n.current[o.current] = f),
                    (u.current += f),
                    i.current < p && (i.current += 1),
                    (o.current = (o.current + 1) % p),
                    f > g)
                ) {
                    let t = 0 === i.current ? x : u.current / i.current,
                        r = Math.min(2 * x, t),
                        n = Math.floor(f / (e ? r : x));
                    n > 0 && (d.current = performance.now()), (l.current += n);
                }
                let m = 0 === i.current ? x : u.current / i.current;
                s.current += f / m;
            },
            [e, t, r],
        ),
        h = 0 === i.current ? 0 : u.current / i.current;
    return {
        currentFPS: 0 === h ? 0 : (x / h) * 60,
        averageFrameTime: h,
        timeSinceLastDrop: (performance.now() - d.current) / 1e3,
        droppedFramesRef: l,
        bufferFramecountRef: i,
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
            renderedFrameCount: p,
            bufferFramecountRef: y,
            frameCheckerEffect: T,
        } = k(r, c),
        [R, C, S] = j(t),
        [O, E] = v(R, T),
        F = performance.now() - l.current < b,
        I = C(d, y.current);
    (0, o.Ay)(
        () => (
            O(),
            () => {
                E();
            }
        ),
    );
    let D = a.useCallback(() => {
        h(), S(), O();
    }, [h, S, O]);
    return (0, n.jsxs)("div", {
        className: f.st,
        children: [
            (0, n.jsxs)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "FPS (~3sec):",
                    " ",
                    (0, n.jsx)(i.Text, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: u < 30 ? "text-feedback-critical" : u < 45 ? "text-feedback-warning" : "text-strong",
                        children: u.toFixed(2),
                    }),
                ],
            }),
            (0, n.jsxs)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Dropped Frames:",
                    " ",
                    (0, n.jsx)(i.Text, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: m < 2 ? "text-feedback-critical" : m < 5 ? "text-feedback-warning" : "text-strong",
                        children: g.current,
                    }),
                    (0, n.jsxs)(i.Text, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: f.af,
                        children: ["(Dropped: ", ((g.current / p.current) * 100).toFixed(4), "%)"],
                    }),
                    F &&
                        (0, n.jsx)(s.m, {
                            position: "left",
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            asContainer: !0,
                            children: (0, n.jsx)(i.Text, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-feedback-critical",
                                className: f.af,
                                children: "(Backgrounded)",
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Rendered Frames:",
                    " ",
                    (0, n.jsx)(i.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-subtle",
                        children: p.current.toFixed(0),
                    }),
                ],
            }),
            (0, n.jsxs)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Frame Times (~3sec):",
                    " ",
                    (0, n.jsxs)(i.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: d > 1.1 * x ? "text-feedback-warning" : "text-subtle",
                        children: [d.toFixed(2), "ms"],
                    }),
                ],
            }),
            (0, n.jsx)(s.m, {
                position: "left",
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                asContainer: !0,
                children: (0, n.jsxs)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: [
                        "Idle Frame Delta (~3sec):",
                        " ",
                        (0, n.jsxs)(i.Text, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: I > 1 ? "text-feedback-critical" : "text-subtle",
                            children: [I.toFixed(2), "ms"],
                        }),
                        F &&
                            (0, n.jsx)(s.m, {
                                position: "left",
                                text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                asContainer: !0,
                                children: (0, n.jsx)(i.Text, {
                                    tag: "span",
                                    variant: "text-xs/bold",
                                    color: "text-feedback-critical",
                                    className: f.af,
                                    children: "(Backgrounded)",
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: f.m8,
                children: (0, n.jsx)(i.Button, {
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
                }, h)),
                () => {
                    null != o.current && clearInterval(o.current);
                }
            ),
            [t.dispatcher],
        ),
        (0, n.jsxs)("div", {
            className: f.st,
            children: [
                (0, n.jsx)(s.m, {
                    position: "left",
                    text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
                    asContainer: !0,
                    children: (0, n.jsx)(i.Checkbox, {
                        label: "Use Average Frame Time",
                        checked: r,
                        onChange: () => c(!r),
                    }),
                }),
                (0, n.jsx)(i.Checkbox, {
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
        className: f.st,
        children: [
            (0, n.jsx)("div", {
                className: l()(c && f.Mq),
                children: (0, n.jsx)(i.Checkbox, {
                    label: "Show Dispatch Timings",
                    checked: c,
                    onChange: () => u((e) => !e),
                }),
            }),
            c
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(i.Text, {
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
                                                  children: (0, n.jsx)(i.Text, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsxs)(i.Text, {
                                                      tag: "span",
                                                      variant: "text-xs/bold",
                                                      color: "text-default",
                                                      children: [r.toFixed(2), "ms"],
                                                  }),
                                              }),
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsxs)(i.Text, {
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
        [s, o] = a.useState(r.isTelemetryEnabled),
        d = (e) => {
            o(e), r.toggleTelemetry(e);
        };
    return (0, n.jsxs)("div", {
        className: f.st,
        children: [
            (0, n.jsx)(i.Checkbox, {
                label: "Enable Dispatch Telemetry",
                checked: s,
                onChange: () => d(!s),
            }),
            (0, n.jsx)("div", {
                className: l()(c && f.Mq),
                children: (0, n.jsx)(i.Checkbox, {
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
                          (0, n.jsx)(i.Text, {
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
                                                  children: (0, n.jsx)(i.Text, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, n.jsx)("td", {
                                                  children: (0, n.jsx)(i.Text, {
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
                              className: f.m8,
                              children: (0, n.jsx)(i.Button, {
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
    let e = (0, u.bG)([d.A], () => d.A.getSocket()),
        [t, r] = a.useState(!1);
    return (
        S(),
        (0, n.jsx)("div", {
            className: l()(m.nd, f.nd),
            children: (0, n.jsxs)(i.IpV, {
                className: f.nd,
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
                    (0, n.jsx)(R, {
                        socket: e,
                    }),
                    (0, n.jsx)(C, {
                        socket: e,
                    }),
                ],
            }),
        })
    );
}
