n.d(t, { Ay: () => R, DQ: () => C, Dj: () => b, F5: () => v, Jc: () => A, L6: () => _, ZX: () => N, km: () => I });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(311907),
    o = n(990078),
    d = n(834730),
    c = n(821609),
    u = n(150934),
    h = n(573613),
    m = n(964486),
    p = n(142120),
    g = n(127819),
    f = n(505206);
let _ = 1e3 / 60,
    x = 1e3 / 30,
    A = 5e3,
    E = (1e3 / 60) * 3,
    S = Math.ceil(3e3 / (1e3 / 60));
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = r.useRef(null),
        a = r.useRef(null),
        s = r.useRef(null),
        l = r.useRef(n ?? window);
    r.useEffect(() => {
        l.current = n ?? window;
    }, [n]);
    let o = r.useCallback(() => {
            null != i.current && l.current.clearInterval(i.current),
                null != a.current && l.current.cancelIdleCallback(a.current),
                null != s.current && l.current.cancelAnimationFrame(s.current);
        }, []),
        d = r.useCallback(() => {
            i.current = l.current.setTimeout(() => {
                (a.current = l.current.requestIdleCallback(e)),
                    (s.current = l.current.requestAnimationFrame(() => {
                        t(), d();
                    }));
            }, 12);
        }, [e, t]);
    return [
        r.useCallback(() => {
            o(), d();
        }, [o, d]),
        o,
    ];
}
function v(e) {
    let t = r.useRef(Array(S).fill(0)),
        n = r.useRef(performance.now()),
        i = r.useRef(0),
        a = r.useRef(0),
        s = r.useRef(0),
        l = e.dispatcher.getIsSchedulerBackgrounded(),
        o = r.useRef(l);
    o.current = l;
    let d = r.useRef(l ? performance.now() : 0);
    return (
        r.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (d.current = performance.now());
        }),
        [
            r.useCallback(function () {
                let e = performance.now(),
                    r = e - n.current;
                (n.current = e),
                    o.current ||
                        ((i.current -= t.current[s.current]),
                        (t.current[s.current] = r),
                        (i.current += r),
                        a.current < S && (a.current += 1),
                        (s.current = (s.current + 1) % S));
            }, []),
            (e, t) => {
                let n = a.current ?? 1;
                return Math.abs(e * t - (i.current / n) * n) / t;
            },
            () => {
                (i.current = 0), (a.current = 0), t.current.fill(0), (n.current = performance.now()), (s.current = 0);
            },
        ]
    );
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = r.useRef(Array(S).fill(0)),
        a = r.useRef(performance.now()),
        s = r.useRef(0),
        l = r.useRef(0),
        o = r.useRef(0),
        d = r.useRef(0),
        c = r.useRef(0),
        u = r.useRef(0),
        h = r.useCallback(() => {
            i.current.fill(0),
                (s.current = 0),
                (l.current = 0),
                (d.current = 0),
                (c.current = 0),
                (a.current = performance.now()),
                (o.current = 0);
        }, []),
        m = r.useCallback(
            function () {
                let r = performance.now(),
                    h = r - a.current;
                if (((a.current = r), t.current && !n)) return;
                if (
                    ((l.current -= i.current[c.current]),
                    (i.current[c.current] = h),
                    (l.current += h),
                    d.current < S && (d.current += 1),
                    (c.current = (c.current + 1) % S),
                    h > E)
                ) {
                    let t = 0 === d.current ? _ : l.current / d.current,
                        n = Math.min(2 * _, t),
                        i = Math.floor(h / (e ? n : _));
                    i > 0 && (u.current = performance.now()), (s.current += i);
                }
                let m = 0 === d.current ? _ : l.current / d.current;
                o.current += h / m;
            },
            [e, t, n],
        ),
        p = 0 === d.current ? 0 : l.current / d.current;
    return {
        currentFPS: 0 === p ? 0 : (_ / p) * 60,
        averageFrameTime: p,
        timeSinceLastDrop: (performance.now() - u.current) / 1e3,
        droppedFramesRef: s,
        bufferFramecountRef: d,
        renderedFrameCount: o,
        frameCheckerEffect: m,
        onResetFrameData: h,
    };
}
function C(e) {
    let t = e.dispatcher.getIsSchedulerBackgrounded(),
        n = r.useRef(t);
    n.current = t;
    let i = r.useRef(t ? performance.now() : 0);
    return (
        r.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (i.current = performance.now());
        }),
        [n, i]
    );
}
function T(e) {
    let { socket: t, isAverageFrameTime: n } = e,
        [a, s] = C(t),
        {
            currentFPS: l,
            averageFrameTime: u,
            timeSinceLastDrop: h,
            onResetFrameData: p,
            droppedFramesRef: f,
            renderedFrameCount: x,
            bufferFramecountRef: E,
            frameCheckerEffect: S,
        } = b(n, a),
        [T, j, y] = v(t),
        [w, N] = I(T, S),
        R = performance.now() - s.current < A,
        M = j(u, E.current);
    (0, m.Ay)(
        () => (
            w(),
            () => {
                N();
            }
        ),
    );
    let O = r.useCallback(() => {
        p(), y(), w();
    }, [p, y, w]);
    return (0, i.jsxs)("div", {
        className: g.st,
        children: [
            (0, i.jsxs)(d.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "FPS (~3sec):",
                    " ",
                    (0, i.jsx)(d.E, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: l < 30 ? "text-feedback-critical" : l < 45 ? "text-feedback-warning" : "text-strong",
                        children: l.toFixed(2),
                    }),
                ],
            }),
            (0, i.jsxs)(d.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Dropped Frames:",
                    " ",
                    (0, i.jsx)(d.E, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: h < 2 ? "text-feedback-critical" : h < 5 ? "text-feedback-warning" : "text-strong",
                        children: f.current,
                    }),
                    (0, i.jsxs)(d.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: g.af,
                        children: ["(Dropped: ", ((f.current / x.current) * 100).toFixed(4), "%)"],
                    }),
                    R &&
                        (0, i.jsx)(o.m, {
                            position: "left",
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            asContainer: !0,
                            children: (0, i.jsx)(d.E, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-feedback-critical",
                                className: g.af,
                                children: "(Backgrounded)",
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)(d.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Rendered Frames:",
                    " ",
                    (0, i.jsx)(d.E, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-subtle",
                        children: x.current.toFixed(0),
                    }),
                ],
            }),
            (0, i.jsxs)(d.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Frame Times (~3sec):",
                    " ",
                    (0, i.jsxs)(d.E, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: u > 1.1 * _ ? "text-feedback-warning" : "text-subtle",
                        children: [u.toFixed(2), "ms"],
                    }),
                ],
            }),
            (0, i.jsx)(o.m, {
                position: "left",
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                asContainer: !0,
                children: (0, i.jsxs)(d.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: [
                        "Idle Frame Delta (~3sec):",
                        " ",
                        (0, i.jsxs)(d.E, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: M > 1 ? "text-feedback-critical" : "text-subtle",
                            children: [M.toFixed(2), "ms"],
                        }),
                        R &&
                            (0, i.jsx)(o.m, {
                                position: "left",
                                text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                asContainer: !0,
                                children: (0, i.jsx)(d.E, {
                                    tag: "span",
                                    variant: "text-xs/bold",
                                    color: "text-feedback-critical",
                                    className: g.af,
                                    children: "(Backgrounded)",
                                }),
                            }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                className: g.m8,
                children: (0, i.jsx)(c.$, { variant: "primary", size: "sm", text: "Reset Frame Data", onClick: O }),
            }),
        ],
    });
}
function j(e) {
    let { socket: t, isAverageFrameTime: n, onToggleAverageFrameTime: a } = e,
        [s, l] = r.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        d = r.useRef(null);
    return (
        r.useEffect(
            () => (
                (d.current = setInterval(() => {
                    l(t.dispatcher.getIsRequestIdleCallbackEnabled());
                }, x)),
                () => {
                    null != d.current && clearInterval(d.current);
                }
            ),
            [t.dispatcher],
        ),
        (0, i.jsxs)("div", {
            className: g.st,
            children: [
                (0, i.jsx)(o.m, {
                    position: "left",
                    text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
                    asContainer: !0,
                    children: (0, i.jsx)(u.S, { label: "Use Average Frame Time", checked: n, onChange: () => a(!n) }),
                }),
                (0, i.jsx)(u.S, {
                    label: "Enable New Dispatch Scheduler (requestIdleCallback)",
                    checked: s,
                    onChange: () => {
                        var e;
                        return (e = !s), void (t.dispatcher.toggleRequestIdleCallback(e), l(e));
                    },
                }),
            ],
        })
    );
}
function y(e) {
    let { socket: t } = e,
        n = t.dispatcher.getDispatchTimings(),
        [a, l] = r.useState(!1);
    return (0, i.jsxs)("div", {
        className: g.st,
        children: [
            (0, i.jsx)("div", {
                className: s()(a && g.Mq),
                children: (0, i.jsx)(u.S, { label: "Show Dispatch Timings", checked: a, onChange: () => l((e) => !e) }),
            }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: "Gateway Dispatch Timings:",
                          }),
                          (0, i.jsx)("table", {
                              cellPadding: 4,
                              children: Object.entries(n).map((e) => {
                                  let [t, [n, r]] = e;
                                  return (0, i.jsxs)(
                                      "tr",
                                      {
                                          children: [
                                              (0, i.jsx)("td", {
                                                  children: (0, i.jsx)(d.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, i.jsx)("td", {
                                                  children: (0, i.jsxs)(d.E, {
                                                      tag: "span",
                                                      variant: "text-xs/bold",
                                                      color: "text-default",
                                                      children: [n.toFixed(2), "ms"],
                                                  }),
                                              }),
                                              (0, i.jsx)("td", {
                                                  children: (0, i.jsxs)(d.E, {
                                                      tag: "span",
                                                      variant: "text-xs/normal",
                                                      color: "text-muted",
                                                      children: ["(count: ", r, ")"],
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
function w(e) {
    let { socket: t } = e,
        n = t.dispatcher.getSchedulerTelemetry(),
        [a, l] = r.useState(n.isTelemetryEnabled),
        [o, h] = r.useState(n.isTelemetryEnabled),
        m = (e) => {
            h(e), n.toggleTelemetry(e);
        };
    return (0, i.jsxs)("div", {
        className: g.st,
        children: [
            (0, i.jsx)(u.S, { label: "Enable Dispatch Telemetry", checked: o, onChange: () => m(!o) }),
            (0, i.jsx)("div", {
                className: s()(a && g.Mq),
                children: (0, i.jsx)(u.S, {
                    label: "Show Dispatch Scheduler Telemetry",
                    checked: a,
                    onChange: () => {
                        l((e) => {
                            let t = !e;
                            return t && m(!0), t;
                        });
                    },
                }),
            }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: "Dispatch Scheduler Telemetry:",
                          }),
                          (0, i.jsx)("table", {
                              cellPadding: 4,
                              children: Object.entries(n.generateTelemetry()).map((e) => {
                                  let [t, n] = e;
                                  return (0, i.jsxs)(
                                      "tr",
                                      {
                                          children: [
                                              (0, i.jsx)("td", {
                                                  children: (0, i.jsx)(d.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, i.jsx)("td", {
                                                  children: (0, i.jsx)(d.E, {
                                                      tag: "span",
                                                      variant: "text-xs/bold",
                                                      color: "text-default",
                                                      children: n,
                                                  }),
                                              }),
                                          ],
                                      },
                                      t,
                                  );
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: g.m8,
                              children: (0, i.jsx)(c.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: "Reset Scheduler Telemetry",
                                  onClick: () => {
                                      n.reset();
                                  },
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function N() {
    let [, e] = r.useState({});
    r.useEffect(() => {
        let t = setInterval(() => {
            e({});
        }, x);
        return () => {
            clearInterval(t);
        };
    }, []);
}
function R() {
    let e = (0, l.bG)([p.A], () => p.A.getSocket()),
        [t, n] = r.useState(!1);
    return (
        N(),
        (0, i.jsx)("div", {
            className: s()(f.nd, g.nd),
            children: (0, i.jsxs)(h.Ip, {
                className: g.nd,
                children: [
                    (0, i.jsx)(T, { socket: e, isAverageFrameTime: t }),
                    (0, i.jsx)(j, { socket: e, isAverageFrameTime: t, onToggleAverageFrameTime: n }),
                    (0, i.jsx)(y, { socket: e }),
                    (0, i.jsx)(w, { socket: e }),
                ],
            }),
        })
    );
}
