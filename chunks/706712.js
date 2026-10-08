n.d(t, { Ay: () => R, DQ: () => C, Dj: () => T, F5: () => j, Jc: () => E, L6: () => x, ZX: () => _, km: () => v });
var i = n(477900),
    r = n(582128),
    s = n(503698),
    l = n.n(s),
    a = n(17928);
if (588245 != n.j) var o = n(834730);
if (588245 != n.j) var d = n(866665);
if (588245 != n.j) var u = n(821609);
if (588245 != n.j) var c = n(150934);
if (588245 != n.j) var h = n(364522);
var m = n(964486),
    g = n(595528),
    p = n(643784),
    f = n(730441);
let x = 1e3 / 60,
    A = 1e3 / 30,
    E = 5e3,
    S = (1e3 / 60) * 3,
    I = Math.ceil(3e3 / (1e3 / 60));
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = r.useRef(null),
        s = r.useRef(null),
        l = r.useRef(null),
        a = r.useRef(n ?? window);
    r.useEffect(() => {
        a.current = n ?? window;
    }, [n]);
    let o = r.useCallback(() => {
            (null != i.current && a.current.clearInterval(i.current),
                null != s.current && a.current.cancelIdleCallback(s.current),
                null != l.current && a.current.cancelAnimationFrame(l.current));
        }, []),
        d = r.useCallback(() => {
            i.current = a.current.setTimeout(() => {
                ((s.current = a.current.requestIdleCallback(e)),
                    (l.current = a.current.requestAnimationFrame(() => {
                        (t(), d());
                    })));
            }, 12);
        }, [e, t]);
    return [
        r.useCallback(() => {
            (o(), d());
        }, [o, d]),
        o,
    ];
}
function j(e) {
    let t = r.useRef(Array(I).fill(0)),
        n = r.useRef(performance.now()),
        i = r.useRef(0),
        s = r.useRef(0),
        l = r.useRef(0),
        a = e.dispatcher.getIsSchedulerBackgrounded(),
        o = r.useRef(a);
    o.current = a;
    let d = r.useRef(a ? performance.now() : 0);
    return (
        r.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() && (d.current = performance.now());
        }),
        [
            r.useCallback(function () {
                let e = performance.now(),
                    r = e - n.current;
                ((n.current = e),
                    o.current ||
                        ((i.current -= t.current[l.current]),
                        (t.current[l.current] = r),
                        (i.current += r),
                        s.current < I && (s.current += 1),
                        (l.current = (l.current + 1) % I)));
            }, []),
            function (e, t) {
                let n = s.current ?? 1;
                return Math.abs(e * t - (i.current / n) * n) / t;
            },
            function () {
                ((i.current = 0), (s.current = 0), t.current.fill(0), (n.current = performance.now()), (l.current = 0));
            },
        ]
    );
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = r.useRef(Array(I).fill(0)),
        s = r.useRef(performance.now()),
        l = r.useRef(0),
        a = r.useRef(0),
        o = r.useRef(0),
        d = r.useRef(0),
        u = r.useRef(0),
        c = r.useRef(0),
        h = r.useCallback(() => {
            (i.current.fill(0),
                (l.current = 0),
                (a.current = 0),
                (d.current = 0),
                (u.current = 0),
                (s.current = performance.now()),
                (o.current = 0));
        }, []),
        m = r.useCallback(
            function () {
                let r = performance.now(),
                    h = r - s.current;
                if (((s.current = r), t.current && !n)) return;
                if (
                    ((a.current -= i.current[u.current]),
                    (i.current[u.current] = h),
                    (a.current += h),
                    d.current < I && (d.current += 1),
                    (u.current = (u.current + 1) % I),
                    h > S)
                ) {
                    let t = 0 === d.current ? x : a.current / d.current,
                        n = Math.min(2 * x, t),
                        i = Math.floor(h / (e ? n : x));
                    (i > 0 && (c.current = performance.now()), (l.current += i));
                }
                let m = 0 === d.current ? x : a.current / d.current;
                o.current += h / m;
            },
            [e, t, n],
        ),
        g = 0 === d.current ? 0 : a.current / d.current;
    return {
        currentFPS: 0 === g ? 0 : (x / g) * 60,
        averageFrameTime: g,
        timeSinceLastDrop: (performance.now() - c.current) / 1e3,
        droppedFramesRef: l,
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
function y(e) {
    let { socket: t, isAverageFrameTime: n } = e,
        [s, l] = C(t),
        {
            currentFPS: a,
            averageFrameTime: c,
            timeSinceLastDrop: h,
            onResetFrameData: g,
            droppedFramesRef: f,
            renderedFrameCount: A,
            bufferFramecountRef: S,
            frameCheckerEffect: I,
        } = T(n, s),
        [y, b, w] = j(t),
        [N, _] = v(y, I),
        R = performance.now() - l.current < E,
        O = b(c, S.current);
    (0, m.Ay)(
        () => (
            N(),
            () => {
                _();
            }
        ),
    );
    let M = r.useCallback(() => {
        (g(), w(), N());
    }, [g, w, N]);
    return (0, i.jsxs)("div", {
        className: p.st,
        children: [
            (0, i.jsxs)(o.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "FPS (~3sec):",
                    " ",
                    (0, i.jsx)(o.E, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: a < 30 ? "text-feedback-critical" : a < 45 ? "text-feedback-warning" : "text-strong",
                        children: a.toFixed(2),
                    }),
                ],
            }),
            (0, i.jsxs)(o.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Dropped Frames:",
                    " ",
                    (0, i.jsx)(o.E, {
                        tag: "span",
                        variant: "text-md/bold",
                        color: h < 2 ? "text-feedback-critical" : h < 5 ? "text-feedback-warning" : "text-strong",
                        children: f.current,
                    }),
                    (0, i.jsxs)(o.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: p.af,
                        children: ["(Dropped: ", ((f.current / A.current) * 100).toFixed(4), "%)"],
                    }),
                    R &&
                        (0, i.jsx)(d.m, {
                            position: "left",
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            asContainer: !0,
                            children: (0, i.jsx)(o.E, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-feedback-critical",
                                className: p.af,
                                children: "(Backgrounded)",
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)(o.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Rendered Frames:",
                    " ",
                    (0, i.jsx)(o.E, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-subtle",
                        children: A.current.toFixed(0),
                    }),
                ],
            }),
            (0, i.jsxs)(o.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: [
                    "Frame Times (~3sec):",
                    " ",
                    (0, i.jsxs)(o.E, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: c > 1.1 * x ? "text-feedback-warning" : "text-subtle",
                        children: [c.toFixed(2), "ms"],
                    }),
                ],
            }),
            (0, i.jsx)(d.m, {
                position: "left",
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                asContainer: !0,
                children: (0, i.jsxs)(o.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: [
                        "Idle Frame Delta (~3sec):",
                        " ",
                        (0, i.jsxs)(o.E, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: O > 1 ? "text-feedback-critical" : "text-subtle",
                            children: [O.toFixed(2), "ms"],
                        }),
                        R &&
                            (0, i.jsx)(d.m, {
                                position: "left",
                                text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                asContainer: !0,
                                children: (0, i.jsx)(o.E, {
                                    tag: "span",
                                    variant: "text-xs/bold",
                                    color: "text-feedback-critical",
                                    className: p.af,
                                    children: "(Backgrounded)",
                                }),
                            }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                className: p.m8,
                children: (0, i.jsx)(u.$, { variant: "primary", size: "sm", text: "Reset Frame Data", onClick: M }),
            }),
        ],
    });
}
function b(e) {
    let { socket: t, isAverageFrameTime: n, onToggleAverageFrameTime: s } = e,
        [l, a] = r.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        o = r.useRef(null);
    return (
        r.useEffect(
            () => (
                (o.current = setInterval(() => {
                    a(t.dispatcher.getIsRequestIdleCallbackEnabled());
                }, A)),
                () => {
                    null != o.current && clearInterval(o.current);
                }
            ),
            [t.dispatcher],
        ),
        (0, i.jsxs)("div", {
            className: p.st,
            children: [
                (0, i.jsx)(d.m, {
                    position: "left",
                    text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
                    asContainer: !0,
                    children: (0, i.jsx)(c.S, { label: "Use Average Frame Time", checked: n, onChange: () => s(!n) }),
                }),
                (0, i.jsx)(c.S, {
                    label: "Enable New Dispatch Scheduler (requestIdleCallback)",
                    checked: l,
                    onChange: () => {
                        var e;
                        return ((e = !l), void (t.dispatcher.toggleRequestIdleCallback(e), a(e)));
                    },
                }),
            ],
        })
    );
}
function w(e) {
    let { socket: t } = e,
        n = t.dispatcher.getDispatchTimings(),
        [s, a] = r.useState(!1);
    return (0, i.jsxs)("div", {
        className: p.st,
        children: [
            (0, i.jsx)("div", {
                className: l()(s && p.Mq),
                children: (0, i.jsx)(c.S, { label: "Show Dispatch Timings", checked: s, onChange: () => a((e) => !e) }),
            }),
            s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.E, {
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
                                                  children: (0, i.jsx)(o.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, i.jsx)("td", {
                                                  children: (0, i.jsxs)(o.E, {
                                                      tag: "span",
                                                      variant: "text-xs/bold",
                                                      color: "text-default",
                                                      children: [n.toFixed(2), "ms"],
                                                  }),
                                              }),
                                              (0, i.jsx)("td", {
                                                  children: (0, i.jsxs)(o.E, {
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
function N(e) {
    let { socket: t } = e,
        n = t.dispatcher.getSchedulerTelemetry(),
        [s, a] = r.useState(n.isTelemetryEnabled),
        [d, h] = r.useState(n.isTelemetryEnabled);
    function m(e) {
        (h(e), n.toggleTelemetry(e));
    }
    return (0, i.jsxs)("div", {
        className: p.st,
        children: [
            (0, i.jsx)(c.S, { label: "Enable Dispatch Telemetry", checked: d, onChange: () => m(!d) }),
            (0, i.jsx)("div", {
                className: l()(s && p.Mq),
                children: (0, i.jsx)(c.S, {
                    label: "Show Dispatch Scheduler Telemetry",
                    checked: s,
                    onChange: function () {
                        a((e) => {
                            let t = !e;
                            return (t && m(!0), t);
                        });
                    },
                }),
            }),
            s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.E, {
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
                                                  children: (0, i.jsx)(o.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-default",
                                                      children: t,
                                                  }),
                                              }),
                                              (0, i.jsx)("td", {
                                                  children: (0, i.jsx)(o.E, {
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
                              className: p.m8,
                              children: (0, i.jsx)(u.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: "Reset Scheduler Telemetry",
                                  onClick: function () {
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
function _() {
    let [, e] = r.useState({});
    r.useEffect(() => {
        let t = setInterval(() => {
            e({});
        }, A);
        return () => {
            clearInterval(t);
        };
    }, []);
}
function R() {
    let e = (0, a.bG)([g.A], () => g.A.getSocket()),
        [t, n] = r.useState(!1);
    return (
        _(),
        (0, i.jsx)("div", {
            className: l()(f.nd, p.nd),
            children: (0, i.jsxs)(h.Ip, {
                className: p.nd,
                children: [
                    (0, i.jsx)(y, { socket: e, isAverageFrameTime: t }),
                    (0, i.jsx)(b, { socket: e, isAverageFrameTime: t, onToggleAverageFrameTime: n }),
                    (0, i.jsx)(w, { socket: e }),
                    (0, i.jsx)(N, { socket: e }),
                ],
            }),
        })
    );
}
