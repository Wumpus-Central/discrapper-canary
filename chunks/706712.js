n.d(t, { Ay: () => R, DQ: () => C, Dj: () => b, F5: () => v, Jc: () => A, L6: () => _, ZX: () => N, km: () => I });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(17928),
    o = n(990078),
    d = n(834730),
    c = n(821609),
    u = n(150934),
    h = n(364522),
    m = n(964486),
    p = n(366853),
    g = n(127819),
    f = n(505206);
let _ = 1e3 / 60,
    x = 1e3 / 30,
    A = 5e3,
    E = (1e3 / 60) * 3,
    S = Math.ceil(3e3 / (1e3 / 60));
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = a.useRef(null),
        r = a.useRef(null),
        l = a.useRef(null),
        s = a.useRef(n ?? window);
    a.useEffect(() => {
        s.current = n ?? window;
    }, [n]);
    let o = a.useCallback(() => {
            null != i.current && s.current.clearInterval(i.current),
                null != r.current && s.current.cancelIdleCallback(r.current),
                null != l.current && s.current.cancelAnimationFrame(l.current);
        }, []),
        d = a.useCallback(() => {
            i.current = s.current.setTimeout(() => {
                (r.current = s.current.requestIdleCallback(e)),
                    (l.current = s.current.requestAnimationFrame(() => {
                        t(), d();
                    }));
            }, 12);
        }, [e, t]);
    return [
        a.useCallback(() => {
            o(), d();
        }, [o, d]),
        o,
    ];
}
function v(e) {
    let t = a.useRef(Array(S).fill(0)),
        n = a.useRef(performance.now()),
        i = a.useRef(0),
        r = a.useRef(0),
        l = a.useRef(0),
        s = e.dispatcher.getIsSchedulerBackgrounded(),
        o = a.useRef(s);
    o.current = s;
    let d = a.useRef(s ? performance.now() : 0);
    return (
        a.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (d.current = performance.now());
        }),
        [
            a.useCallback(function () {
                let e = performance.now(),
                    a = e - n.current;
                (n.current = e),
                    o.current ||
                        ((i.current -= t.current[l.current]),
                        (t.current[l.current] = a),
                        (i.current += a),
                        r.current < S && (r.current += 1),
                        (l.current = (l.current + 1) % S));
            }, []),
            (e, t) => {
                let n = r.current ?? 1;
                return Math.abs(e * t - (i.current / n) * n) / t;
            },
            () => {
                (i.current = 0), (r.current = 0), t.current.fill(0), (n.current = performance.now()), (l.current = 0);
            },
        ]
    );
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = a.useRef(Array(S).fill(0)),
        r = a.useRef(performance.now()),
        l = a.useRef(0),
        s = a.useRef(0),
        o = a.useRef(0),
        d = a.useRef(0),
        c = a.useRef(0),
        u = a.useRef(0),
        h = a.useCallback(() => {
            i.current.fill(0),
                (l.current = 0),
                (s.current = 0),
                (d.current = 0),
                (c.current = 0),
                (r.current = performance.now()),
                (o.current = 0);
        }, []),
        m = a.useCallback(
            function () {
                let a = performance.now(),
                    h = a - r.current;
                if (((r.current = a), t.current && !n)) return;
                if (
                    ((s.current -= i.current[c.current]),
                    (i.current[c.current] = h),
                    (s.current += h),
                    d.current < S && (d.current += 1),
                    (c.current = (c.current + 1) % S),
                    h > E)
                ) {
                    let t = 0 === d.current ? _ : s.current / d.current,
                        n = Math.min(2 * _, t),
                        i = Math.floor(h / (e ? n : _));
                    i > 0 && (u.current = performance.now()), (l.current += i);
                }
                let m = 0 === d.current ? _ : s.current / d.current;
                o.current += h / m;
            },
            [e, t, n],
        ),
        p = 0 === d.current ? 0 : s.current / d.current;
    return {
        currentFPS: 0 === p ? 0 : (_ / p) * 60,
        averageFrameTime: p,
        timeSinceLastDrop: (performance.now() - u.current) / 1e3,
        droppedFramesRef: l,
        bufferFramecountRef: d,
        renderedFrameCount: o,
        frameCheckerEffect: m,
        onResetFrameData: h,
    };
}
function C(e) {
    let t = e.dispatcher.getIsSchedulerBackgrounded(),
        n = a.useRef(t);
    n.current = t;
    let i = a.useRef(t ? performance.now() : 0);
    return (
        a.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (i.current = performance.now());
        }),
        [n, i]
    );
}
function T(e) {
    let { socket: t, isAverageFrameTime: n } = e,
        [r, l] = C(t),
        {
            currentFPS: s,
            averageFrameTime: u,
            timeSinceLastDrop: h,
            onResetFrameData: p,
            droppedFramesRef: f,
            renderedFrameCount: x,
            bufferFramecountRef: E,
            frameCheckerEffect: S,
        } = b(n, r),
        [T, y, j] = v(t),
        [w, N] = I(T, S),
        R = performance.now() - l.current < A,
        M = y(u, E.current);
    (0, m.Ay)(
        () => (
            w(),
            () => {
                N();
            }
        ),
    );
    let O = a.useCallback(() => {
        p(), j(), w();
    }, [p, j, w]);
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
                        color: s < 30 ? "text-feedback-critical" : s < 45 ? "text-feedback-warning" : "text-strong",
                        children: s.toFixed(2),
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
function y(e) {
    let { socket: t, isAverageFrameTime: n, onToggleAverageFrameTime: r } = e,
        [l, s] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        d = a.useRef(null);
    return (
        a.useEffect(
            () => (
                (d.current = setInterval(() => {
                    s(t.dispatcher.getIsRequestIdleCallbackEnabled());
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
                    children: (0, i.jsx)(u.S, { label: "Use Average Frame Time", checked: n, onChange: () => r(!n) }),
                }),
                (0, i.jsx)(u.S, {
                    label: "Enable New Dispatch Scheduler (requestIdleCallback)",
                    checked: l,
                    onChange: () => {
                        var e;
                        return (e = !l), void (t.dispatcher.toggleRequestIdleCallback(e), s(e));
                    },
                }),
            ],
        })
    );
}
function j(e) {
    let { socket: t } = e,
        n = t.dispatcher.getDispatchTimings(),
        [r, s] = a.useState(!1);
    return (0, i.jsxs)("div", {
        className: g.st,
        children: [
            (0, i.jsx)("div", {
                className: l()(r && g.Mq),
                children: (0, i.jsx)(u.S, { label: "Show Dispatch Timings", checked: r, onChange: () => s((e) => !e) }),
            }),
            r
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
                                  let [t, [n, a]] = e;
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
function w(e) {
    let { socket: t } = e,
        n = t.dispatcher.getSchedulerTelemetry(),
        [r, s] = a.useState(n.isTelemetryEnabled),
        [o, h] = a.useState(n.isTelemetryEnabled),
        m = (e) => {
            h(e), n.toggleTelemetry(e);
        };
    return (0, i.jsxs)("div", {
        className: g.st,
        children: [
            (0, i.jsx)(u.S, { label: "Enable Dispatch Telemetry", checked: o, onChange: () => m(!o) }),
            (0, i.jsx)("div", {
                className: l()(r && g.Mq),
                children: (0, i.jsx)(u.S, {
                    label: "Show Dispatch Scheduler Telemetry",
                    checked: r,
                    onChange: () => {
                        s((e) => {
                            let t = !e;
                            return t && m(!0), t;
                        });
                    },
                }),
            }),
            r
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
    let [, e] = a.useState({});
    a.useEffect(() => {
        let t = setInterval(() => {
            e({});
        }, x);
        return () => {
            clearInterval(t);
        };
    }, []);
}
function R() {
    let e = (0, s.bG)([p.A], () => p.A.getSocket()),
        [t, n] = a.useState(!1);
    return (
        N(),
        (0, i.jsx)("div", {
            className: l()(f.nd, g.nd),
            children: (0, i.jsxs)(h.Ip, {
                className: g.nd,
                children: [
                    (0, i.jsx)(T, { socket: e, isAverageFrameTime: t }),
                    (0, i.jsx)(y, { socket: e, isAverageFrameTime: t, onToggleAverageFrameTime: n }),
                    (0, i.jsx)(j, { socket: e }),
                    (0, i.jsx)(w, { socket: e }),
                ],
            }),
        })
    );
}
