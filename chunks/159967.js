r.r(t), r.d(t, { default: () => O });
var s = r(627968),
    n = r(64700),
    l = r(979186);
r(321073);
var a = r(17928),
    i = r(229659),
    c = r(287809),
    o = r(723702),
    u = r(321034),
    d = r(832213);
r(134528), r(947204);
var h = r(111159),
    m = r(661531),
    f = r(602853),
    p = r(769015);
r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var x = r(938800);
let w = 1e3 / 30;
function M(e) {
    let t = n.useRef(null),
        r = (0, f.r)(m.A.colors.BACKGROUND_BASE_LOW).hsl(),
        l = (0, f.r)(m.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        a = (0, f.r)(m.A.colors.TEXT_DEFAULT).hsl(),
        i = n.useRef(e);
    n.useEffect(() => {
        i.current = e;
    });
    let c = n.useRef(new Float64Array(0)),
        o = n.useRef(0),
        u = window.devicePixelRatio ?? 1,
        d = Math.round(e.width * u),
        h = Math.round(e.height * u);
    return (
        n.useEffect(() => {
            let e = 0,
                s = 0,
                n = (u) => {
                    if (((e = requestAnimationFrame(n)), u - s < w)) return;
                    s = u;
                    let d = t.current;
                    if (null == d) return;
                    let h = d.getContext("2d");
                    if (null == h) return;
                    let { series: m, windowMs: f, yFloor: p, formatMax: x } = i.current,
                        M = window.devicePixelRatio ?? 1,
                        g = d.width,
                        j = d.height;
                    h.setTransform(1, 0, 0, 1, 0, 0), (h.fillStyle = r), h.fillRect(0, 0, g, j);
                    let v = m.slice().sort((e, t) => e.stackOrder - t.stackOrder),
                        A = v.length,
                        N = Date.now(),
                        y = Math.max(1, Math.round(f / 1e3)),
                        b = N - 1e3 * y,
                        _ = A * y;
                    c.current.length < _ && (c.current = new Float64Array(_));
                    let k = c.current;
                    k.fill(0, 0, _);
                    let D = 0;
                    for (let e = 0; e < A; e++) {
                        let t = v[e].buffer,
                            r = t.length;
                        for (let s = 0; s < r; s++) {
                            let r = t.at(s);
                            if (null == r) continue;
                            let n = Math.floor((r.time - b) / 1e3);
                            n < 0 || n >= y || (k[e * y + n] = r.value);
                        }
                    }
                    for (let e = 0; e < y; e++) {
                        let t = 0;
                        for (let r = 0; r < A; r++) t += k[r * y + e];
                        t > D && (D = t);
                    }
                    let S = Math.max(
                            p,
                            (function (e) {
                                if (e <= 0) return 0;
                                let t = Math.pow(10, Math.floor(Math.log10(e))),
                                    r = e / t;
                                return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * t;
                            })(D),
                            1,
                        ),
                        R = o.current;
                    (R = R <= 0 ? S : R + (S - R) * 0.2) < Math.max(p, 1) && (R = Math.max(p, 1)), (o.current = R);
                    let F = Math.ceil(11 * M) + Math.round(4 * M),
                        C = Math.max(1, j - F),
                        E = Math.max(1, Math.ceil(g / y));
                    for (let e = 0; e < y; e++) {
                        let t = Math.floor((e / y) * g),
                            r = j;
                        for (let s = 0; s < A; s++) {
                            let n = k[s * y + e];
                            if (n <= 0) continue;
                            let l = (n / R) * C;
                            (h.fillStyle = v[s].color), h.fillRect(t, r - l, E, l), (r -= l);
                        }
                    }
                    (h.strokeStyle = l),
                        (h.lineWidth = M),
                        h.beginPath(),
                        h.moveTo(0, F),
                        h.lineTo(g, F),
                        h.stroke(),
                        (h.fillStyle = a),
                        (h.font = `${11 * M}px gg sans`),
                        (h.textAlign = "right"),
                        (h.textBaseline = "top"),
                        h.fillText(x(R), g - Math.round(4 * M), Math.round(2 * M));
                };
            return (e = requestAnimationFrame(n)), () => cancelAnimationFrame(e);
        }, [r, l, a]),
        (0, s.jsx)("canvas", {
            ref: t,
            width: d,
            height: h,
            style: { width: e.width, height: e.height },
            className: x.Ji,
        })
    );
}
function g(e) {
    let { title: t, value: r, points: l, children: a } = e,
        c = n.useRef(null),
        [o, u] = n.useState(320);
    return (
        n.useEffect(() => {
            let e = c.current;
            if (null == e) return;
            let t = null,
                r = 0,
                s = new ResizeObserver((e) => {
                    let [s] = e,
                        n = Math.max(80, Math.min(4096, Math.floor(s.contentRect.width)));
                    n === r ||
                        ((r = n),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                (t = null), u(r);
                            })));
                });
            return (
                s.observe(e),
                () => {
                    null != t && cancelAnimationFrame(t), s.disconnect();
                }
            );
        }, []),
        (0, s.jsxs)("div", {
            ref: c,
            className: x.uW,
            children: [
                (0, s.jsxs)("div", {
                    className: x.wx,
                    children: [
                        (0, s.jsx)("span", { className: x.DD, children: t }),
                        (0, s.jsx)("span", { className: x.Uq, children: r }),
                    ],
                }),
                (0, s.jsx)(i.A, { dataPoints: l, width: o, height: 80, windowMs: 12e4 }),
                a,
            ],
        })
    );
}
function j(e) {
    return `${e.toFixed(1)}%`;
}
var v = r(952818),
    A = r(760751),
    N = r(290805),
    y = r(19575);
class b {
    storage;
    head = 0;
    count = 0;
    capacity;
    constructor(e) {
        (this.capacity = e), (this.storage = Array(e));
    }
    push(e, t) {
        (this.storage[this.head] = { value: e, time: t }),
            (this.head = (this.head + 1) % this.capacity),
            this.count < this.capacity && this.count++;
    }
    at(e) {
        if (!(e < 0) && !(e >= this.count))
            return this.count < this.capacity ? this.storage[e] : this.storage[(this.head + e) % this.capacity];
    }
    get length() {
        return this.count;
    }
}
let _ =
    {
        stable: "Discord.exe",
        ptb: "DiscordPTB.exe",
        canary: "DiscordCanary.exe",
        development: "DiscordDevelopment.exe",
    }[N.y] ?? "Discord.exe";
function k(e) {
    return e.at(e.length - 1)?.value ?? 0;
}
function D(e) {
    return `${Math.round(e)} MB`;
}
function S(e) {
    let { title: t, value: r, series: l, yFloor: a, formatMax: i } = e,
        c = n.useRef(null),
        [o, u] = n.useState(320);
    return (
        n.useEffect(() => {
            let e = c.current;
            if (null == e) return;
            let t = null,
                r = 0,
                s = new ResizeObserver((e) => {
                    let [s] = e,
                        n = Math.max(80, Math.min(4096, Math.floor(s.contentRect.width)));
                    n === r ||
                        ((r = n),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                (t = null), u(r);
                            })));
                });
            return (
                s.observe(e),
                () => {
                    null != t && cancelAnimationFrame(t), s.disconnect();
                }
            );
        }, []),
        (0, s.jsxs)("div", {
            ref: c,
            className: x.uW,
            children: [
                (0, s.jsxs)("div", {
                    className: x.wx,
                    children: [
                        (0, s.jsx)("span", { className: x.DD, children: t }),
                        (0, s.jsx)("span", { className: x.Uq, children: r }),
                    ],
                }),
                (0, s.jsx)(M, { series: l, width: o, height: 80, windowMs: 3e5, yFloor: a, formatMax: i }),
            ],
        })
    );
}
function R(e) {
    let { view: t, colorFor: r } = e,
        { adapterName: n, entries: l } = t,
        a = l.map((e) => ({
            key: e.process.pid,
            buffer: e.gpu,
            color: r(e.process),
            stackOrder: e.process.stackOrder,
        })),
        i = l.map((e) => ({
            key: e.process.pid,
            buffer: e.vram,
            color: r(e.process),
            stackOrder: e.process.stackOrder,
        })),
        c = 0,
        o = 0;
    for (let e of l) (c += k(e.gpu)), (o += k(e.vram));
    let u = l.slice().sort((e, t) => {
        let r = t.process.lastSampleAt - e.process.lastSampleAt;
        return 0 !== r ? r : e.process.stackOrder - t.process.stackOrder;
    });
    return (0, s.jsxs)("div", {
        className: x.yT,
        children: [
            (0, s.jsx)("span", { className: x.Xk, children: n }),
            (0, s.jsxs)("div", {
                className: x.Ss,
                children: [
                    (0, s.jsx)(S, {
                        title: "Utilization",
                        value: j(c),
                        series: a,
                        yFloor: 100,
                        formatMax: (e) => `${Math.round(e)}%`,
                    }),
                    (0, s.jsx)(S, { title: "VRAM", value: D(o), series: i, yFloor: 0, formatMax: D }),
                ],
            }),
            (0, s.jsx)("div", {
                className: x.o1,
                children: u.map((e) => (0, s.jsx)(F, { entry: e, color: r(e.process) }, e.process.pid)),
            }),
        ],
    });
}
function F(e) {
    let { entry: t, color: r } = e,
        { process: n } = t;
    return (0, s.jsxs)("div", {
        className: x.eI,
        children: [
            (0, s.jsx)("div", { className: x.A9, style: { background: r } }),
            n.isDiscord
                ? (0, s.jsx)(h.p, { size: "sm", className: x.Gt })
                : (0, s.jsx)(p.A, {
                      game: n.detectableGame,
                      size: p.M.SMALL,
                      allowUnknownGameIcon: !0,
                      className: x.Gt,
                  }),
            (0, s.jsx)("span", { className: x.V1, children: n.name }),
            (0, s.jsxs)("span", { className: x.rz, children: [j(k(t.gpu)), " \xb7 ", D(k(t.vram))] }),
        ],
    });
}
function C(e) {
    let { enabled: t } = e,
        r = (function (e) {
            let [t, r] = n.useState([]),
                s = n.useRef(new Map()),
                l = n.useRef(new Map()),
                a = n.useRef(0);
            return (
                n.useEffect(() => {
                    let t;
                    if (!e) return;
                    let n = !1;
                    return (
                        !(function e() {
                            let i;
                            if (n) return;
                            let c = null == (i = window.DiscordNative?.process?.pid) || isNaN(i) ? null : i,
                                o = [];
                            for (let e of (null != c && o.push({ pid: c, isDiscord: !0 }),
                            v.Ay.getVisibleRunningGames()))
                                o.push({ pid: e.pid, isDiscord: !1, game: e });
                            Promise.all(
                                o.map((e) =>
                                    y.Ay.GetSystemGpuStats(e.pid)
                                        .catch(() => [])
                                        .then((t) => ({ target: e, adapters: t })),
                                ),
                            )
                                .then((e) => {
                                    if (n) return;
                                    let t = Date.now(),
                                        i = new Set(o.map((e) => e.pid)),
                                        c = new Map(s.current);
                                    for (let { target: r, adapters: s } of e) {
                                        let e = r.pid,
                                            n = c.get(e);
                                        if (null != n) c.set(e, { ...n, lastSampleAt: t });
                                        else if (r.isDiscord)
                                            c.set(e, {
                                                pid: e,
                                                isDiscord: !0,
                                                name: _,
                                                detectableGame: null,
                                                colorIndex: -1,
                                                stackOrder: -1,
                                                lastSampleAt: t,
                                            });
                                        else {
                                            let s = r.game,
                                                n = a.current++;
                                            c.set(e, {
                                                pid: e,
                                                isDiscord: !1,
                                                name: s.gameName ?? s.name ?? s.processName ?? `pid ${e}`,
                                                detectableGame: A.A.findGame(s) ?? null,
                                                colorIndex: ((n % 6) + 6) % 6,
                                                stackOrder: n,
                                                lastSampleAt: t,
                                            });
                                        }
                                        let i = (function (e) {
                                            let t = new Map();
                                            for (let r of e) {
                                                let e = t.get(r.adapter_name);
                                                null == e
                                                    ? t.set(r.adapter_name, {
                                                          utilization_percent: r.utilization_percent,
                                                          memory_bytes: r.memory_bytes,
                                                      })
                                                    : ((e.utilization_percent = Math.max(
                                                          e.utilization_percent,
                                                          r.utilization_percent,
                                                      )),
                                                      (e.memory_bytes = Math.max(e.memory_bytes, r.memory_bytes)));
                                            }
                                            return t;
                                        })(s);
                                        if (0 === i.size) continue;
                                        let o = l.current.get(e);
                                        for (let [r, s] of (null == o && ((o = new Map()), l.current.set(e, o)), i)) {
                                            let e = o.get(r);
                                            null == e && ((e = { gpu: new b(300), vram: new b(300) }), o.set(r, e)),
                                                e.gpu.push(s.utilization_percent, t),
                                                e.vram.push(s.memory_bytes / 1048576, t);
                                        }
                                    }
                                    for (let [e, r] of c)
                                        r.isDiscord ||
                                            i.has(e) ||
                                            !(t - r.lastSampleAt > 3e5) ||
                                            (c.delete(e), l.current.delete(e));
                                    for (let e of l.current.keys()) i.has(e) || c.has(e) || l.current.delete(e);
                                    (s.current = c),
                                        r(
                                            (function (e, t) {
                                                let r = new Map();
                                                for (let s of e.values()) {
                                                    let e = t.get(s.pid);
                                                    if (null != e)
                                                        for (let [t, n] of e) {
                                                            let e = r.get(t);
                                                            null == e && ((e = []), r.set(t, e)),
                                                                e.push({ process: s, gpu: n.gpu, vram: n.vram });
                                                        }
                                                }
                                                return Array.from(r.entries())
                                                    .sort((e, t) => {
                                                        let [r] = e,
                                                            [s] = t;
                                                        return r.localeCompare(s);
                                                    })
                                                    .map((e) => {
                                                        let [t, r] = e;
                                                        return { adapterName: t, entries: r };
                                                    });
                                            })(c, l.current),
                                        );
                                })
                                .catch(() => {}),
                                (t = setTimeout(e, 1e3));
                        })(),
                        () => {
                            (n = !0), null != t && clearTimeout(t);
                        }
                    );
                }, [e]),
                t
            );
        })(t),
        l = (0, f.r)(m.A.unsafe_rawColors.BRAND_500).hsl(),
        a = [
            (0, f.r)(m.A.unsafe_rawColors.RED_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.ORANGE_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.YELLOW_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.GREEN_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.TEAL_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.BLUE_400).hsl(),
        ];
    function i(e) {
        return e.isDiscord || e.colorIndex < 0 ? l : a[e.colorIndex % a.length];
    }
    return t && 0 !== r.length
        ? (0, s.jsx)(s.Fragment, { children: r.map((e) => (0, s.jsx)(R, { view: e, colorFor: i }, e.adapterName)) })
        : null;
}
let E = [d.M.Renderer, d.M.Main, d.M.GPU, d.M.Utility, d.M.Crashpad, d.M.Unknown];
function U(e) {
    return (e.wss_priv_kb ?? e.wss_kb ?? 0) / 1024;
}
function T() {
    let e = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.isStaff() ?? !1),
        [t, r] = n.useState(null),
        [l, d] = n.useState(null),
        [h, m] = n.useState([]),
        [f, p] = n.useState(() => new Set()),
        w = n.useRef(null),
        [M, v] = n.useState(320),
        [A] = n.useState(() => new b(120)),
        [N] = n.useState(() => new Map()),
        [y] = n.useState(() => new b(120)),
        [_, k] = n.useState(null),
        D = n.useRef(0);
    if (
        (n.useEffect(() => {
            let e = w.current;
            if (null == e) return;
            let t = null,
                r = 0,
                s = new ResizeObserver((e) => {
                    let [s] = e,
                        n = Math.max(320, Math.min(4096, Math.floor(s.contentRect.width)));
                    n === r ||
                        ((r = n),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                (t = null), v(r);
                            })));
                });
            return (
                s.observe(e),
                () => {
                    null != t && cancelAnimationFrame(t), s.disconnect();
                }
            );
        }, []),
        n.useEffect(() => {
            let e = requestAnimationFrame(function t() {
                (D.current += 1), (e = requestAnimationFrame(t));
            });
            return () => cancelAnimationFrame(e);
        }, []),
        n.useEffect(() => {
            let e = !1,
                t = performance.now(),
                s = !1,
                n = window.DiscordNative?.gcEvents?.addGCListener?.((t) => {
                    let { timestamp: r, kind: s } = t;
                    e || m((e) => [...e.filter((e) => e.time > r - 12e4), { time: r, kind: s }]);
                });
            return (
                !(function n() {
                    if (e) return;
                    let l = Date.now(),
                        a = performance.now(),
                        i = u.A.getCurrentCPUUsagePercent() ?? 0;
                    r(performance.now() - a);
                    let c = performance.now(),
                        o = u.A.getMemoryUsageElectronProcessTypeDetails();
                    if ((d(performance.now() - c), A.push(i, l), null != o))
                        for (let e of Object.keys(o)) {
                            let t = o[e];
                            if (null == t) continue;
                            let r = N.get(e);
                            null == r && ((r = new b(120)), N.set(e, r)), r.push(U(t), l);
                        }
                    let h = performance.now(),
                        m = (h - t) / 1e3;
                    if (s && m > 0) {
                        let e = D.current / m;
                        k(e), y.push(e, l);
                    }
                    (D.current = 0), (t = h), (s = !0), setTimeout(n, 1e3);
                })(),
                () => {
                    (e = !0), n?.();
                }
            );
        }, [A, N, y]),
        !e)
    )
        return null;
    let S = u.A.getCurrentCPUUsagePercent() ?? 0,
        R = u.A.getMemoryUsageElectronProcessTypeDetails() ?? {},
        F = E.reduce((e, t) => {
            let r = R[t];
            return null != r ? e + U(r) : e;
        }, 0);
    function T(e) {
        return null != e ? `${e.toFixed(1)}ms` : "";
    }
    function O(e) {
        return 2 === e
            ? "rgba(237, 66, 69, 0.9)"
            : 4 === e
              ? "rgba(59, 165, 93, 0.9)"
              : 8 === e
                ? "rgba(150, 150, 150, 0.6)"
                : "rgba(250, 168, 26, 0.75)";
    }
    let G = h.filter((e) => !f.has(e.kind)).map((e) => ({ time: e.time, color: O(e.kind) })),
        P = (0, o.isWindows)() && o.isPlatformEmbedded;
    return (0, s.jsxs)("div", {
        className: x.kL,
        children: [
            (0, s.jsx)("h1", { className: x.W, children: "Performance" }),
            (0, s.jsx)(C, { enabled: P }),
            (0, s.jsxs)("div", {
                ref: w,
                className: x.yT,
                children: [
                    (0, s.jsxs)("div", {
                        className: x.x_,
                        children: [
                            (0, s.jsx)("span", { className: x.AM, children: "CPU" }),
                            (0, s.jsx)("span", { className: x.rh, children: T(t) }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: x.uW,
                        children: [
                            (0, s.jsxs)("div", {
                                className: x.wx,
                                children: [
                                    (0, s.jsx)("span", { className: x.DD, children: "Utilization" }),
                                    (0, s.jsx)("span", { className: x.Uq, children: j(S) }),
                                ],
                            }),
                            (0, s.jsx)(i.A, { dataPoints: A, width: M, height: 80, windowMs: 12e4, markers: G }),
                            (0, s.jsx)("div", {
                                className: x.KP,
                                children: [
                                    { kind: 2, label: "Major GC" },
                                    { kind: 4, label: "Incremental" },
                                    { kind: 1, label: "Minor GC" },
                                    { kind: 8, label: "Weak-cb" },
                                ].map((e) => {
                                    let { kind: t, label: r } = e,
                                        n = !f.has(t);
                                    return (0, s.jsxs)(
                                        "button",
                                        {
                                            type: "button",
                                            className: x.$d,
                                            "aria-pressed": n,
                                            title: `${n ? "Hide" : "Show"} ${r} markers`,
                                            onClick: () => {
                                                p((e) => {
                                                    let r = new Set(e);
                                                    return r.has(t) ? r.delete(t) : r.add(t), r;
                                                });
                                            },
                                            children: [
                                                (0, s.jsx)("div", { className: x.AW, style: { background: O(t) } }),
                                                (0, s.jsx)("span", { className: x.IF, children: r }),
                                            ],
                                        },
                                        r,
                                    );
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: x.yT,
                children: [
                    (0, s.jsxs)("div", {
                        className: x.x_,
                        children: [
                            (0, s.jsx)("span", { className: x.AM, children: "Memory" }),
                            (0, s.jsx)("span", { className: x.rh, children: T(l) }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: x.V$,
                        children: [
                            (0, s.jsx)("span", { className: x.j5, children: "Total" }),
                            (0, s.jsx)("span", { className: x.om, children: `${F.toFixed(0)} MB` }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: x.kK,
                        children: E.map((e) => {
                            let t = N.get(e);
                            if (null == t || 0 === t.length) return null;
                            let r = R[e],
                                n = null != r ? U(r) : 0,
                                l = r?.wss_priv_kb != null;
                            return (0, s.jsx)(
                                g,
                                { title: `${e}${l ? " (private)" : ""}`, value: `${n.toFixed(0)} MB`, points: t },
                                e,
                            );
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: x.yT,
                children: [
                    (0, s.jsx)("div", {
                        className: x.x_,
                        children: (0, s.jsx)("span", { className: x.AM, children: "Frame Rate" }),
                    }),
                    (0, s.jsx)(g, {
                        title: "Discord (main window)",
                        value: null != _ ? `${Math.round(_)} FPS` : "",
                        points: y,
                    }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { windowKey: t } = e;
    return (0, s.jsx)(l.A, { withTitleBar: !0, windowKey: t, title: "Discord Stats", children: (0, s.jsx)(T, {}) });
}
