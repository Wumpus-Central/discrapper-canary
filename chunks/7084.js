(n.r(e), n.d(e, { playgroundConfig: () => d }));
var i = n(477900);
n(582128);
var t = n(927813),
    l = n(299871);
let s = {
    name: "Countdown Bar",
    id: "countdown-bar",
    component: function (a) {
        return (0, i.jsx)(l.r, { ...a }, a.durationMs);
    },
    controls: {
        durationMs: {
            label: "Duration (ms)",
            type: "slider",
            defaultValue: 10 * t.A.Millis.SECOND,
            minValue: t.A.Millis.SECOND,
            maxValue: t.A.Millis.MINUTE,
        },
        isPaused: { label: "Paused", type: "boolean", defaultValue: !1 },
    },
};
var o = n(525396);
let r = 2 * Math.PI * 7;
function u(a) {
    let { durationMs: e, isPaused: n = !1 } = a,
        t = {
            animationDuration: `${e}ms`,
            animationPlayState: n ? "paused" : "running",
            strokeDasharray: r,
            "--custom-final-offset": `${r}`,
        };
    return (0, i.jsxs)("svg", {
        className: o._p,
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        children: [
            (0, i.jsx)("circle", { className: o.RF, cx: 8, cy: 8, r: 7, strokeWidth: 2 }),
            (0, i.jsx)("circle", { className: o.nA, cx: 8, cy: 8, r: 7, strokeWidth: 2, style: t }),
        ],
    });
}
let d = {
    collections: [
        {
            id: "core",
            name: "Core",
            groups: [
                {
                    title: "Components",
                    stories: [
                        s,
                        {
                            name: "Countdown Ring",
                            id: "countdown-ring",
                            component: function (a) {
                                return (0, i.jsx)(u, { ...a }, a.durationMs);
                            },
                            controls: {
                                durationMs: {
                                    label: "Duration (ms)",
                                    type: "slider",
                                    defaultValue: 10 * t.A.Millis.SECOND,
                                    minValue: t.A.Millis.SECOND,
                                    maxValue: t.A.Millis.MINUTE,
                                },
                                isPaused: { label: "Paused", type: "boolean", defaultValue: !1 },
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
