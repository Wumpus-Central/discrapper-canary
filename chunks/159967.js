r.r(t), r.d(t, { default: () => T });
var s = r(627968),
    l = r(64700),
    n = r(979186);
r(321073);
var a = r(17928),
    i = r(229659),
    o = r(287809),
    c = r(723702),
    u = r(321034),
    d = r(832213);
r(134528), r(947204);
var h = r(111159),
    m = r(661531),
    f = r(602853),
    p = r(137177);
r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var x = r(938800);
let w = 1e3 / 30;
function M(e) {
    let t = l.useRef(null),
        r = (0, f.r)(m.A.colors.BACKGROUND_BASE_LOW).hsl(),
        n = (0, f.r)(m.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        a = (0, f.r)(m.A.colors.TEXT_DEFAULT).hsl(),
        i = l.useRef(e);
    l.useEffect(() => {
        i.current = e;
    });
    let o = l.useRef(new Float64Array(0)),
        c = l.useRef(0),
        u = window.devicePixelRatio ?? 1,
        d = Math.round(e.width * u),
        h = Math.round(e.height * u);
    return (
        l.useEffect(() => {
            let e = 0,
                s = 0,
                l = (u) => {
                    if (((e = requestAnimationFrame(l)), u - s < w)) return;
                    s = u;
                    let d = t.current;
                    if (null == d) return;
                    let h = d.getContext("2d");
                    if (null == h) return;
                    let { series: m, windowMs: f, yFloor: p, formatMax: x } = i.current,
                        M = window.devicePixelRatio ?? 1,
                        g = d.width,
                        v = d.height;
                    h.setTransform(1, 0, 0, 1, 0, 0), (h.fillStyle = r), h.fillRect(0, 0, g, v);
                    let j = m.slice().sort((e, t) => e.stackOrder - t.stackOrder),
                        y = j.length,
                        A = Date.now(),
                        N = Math.max(1, Math.round(f / 1e3)),
                        b = A - 1e3 * N,
                        _ = y * N;
                    o.current.length < _ && (o.current = new Float64Array(_));
                    let k = o.current;
                    k.fill(0, 0, _);
                    let D = 0;
                    for (let e = 0; e < y; e++) {
                        let t = j[e].buffer,
                            r = t.length;
                        for (let s = 0; s < r; s++) {
                            let r = t.at(s);
                            if (null == r) continue;
                            let l = Math.floor((r.time - b) / 1e3);
                            l < 0 || l >= N || (k[e * N + l] = r.value);
                        }
                    }
                    for (let e = 0; e < N; e++) {
                        let t = 0;
                        for (let r = 0; r < y; r++) t += k[r * N + e];
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
                        R = c.current;
                    (R = R <= 0 ? S : R + (S - R) * 0.2) < Math.max(p, 1) && (R = Math.max(p, 1)), (c.current = R);
                    let C = Math.ceil(11 * M) + Math.round(4 * M),
                        E = Math.max(1, v - C),
                        F = Math.max(1, Math.ceil(g / N));
                    for (let e = 0; e < N; e++) {
                        let t = Math.floor((e / N) * g),
                            r = v;
                        for (let s = 0; s < y; s++) {
                            let l = k[s * N + e];
                            if (l <= 0) continue;
                            let n = (l / R) * E;
                            (h.fillStyle = j[s].color), h.fillRect(t, r - n, F, n), (r -= n);
                        }
                    }
                    (h.strokeStyle = n),
                        (h.lineWidth = M),
                        h.beginPath(),
                        h.moveTo(0, C),
                        h.lineTo(g, C),
                        h.stroke(),
                        (h.fillStyle = a),
                        (h.font = `${11 * M}px gg sans`),
                        (h.textAlign = "right"),
                        (h.textBaseline = "top"),
                        h.fillText(x(R), g - Math.round(4 * M), Math.round(2 * M));
                };
            return (e = requestAnimationFrame(l)), () => cancelAnimationFrame(e);
        }, [r, n, a]),
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
    let { title: t, value: r, points: n, children: a } = e,
        o = l.useRef(null),
        [c, u] = l.useState(320);
    return (
        l.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = null,
                r = 0,
                s = new ResizeObserver((e) => {
                    let [s] = e,
                        l = Math.max(80, Math.min(4096, Math.floor(s.contentRect.width)));
                    l === r ||
                        ((r = l),
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
            ref: o,
            className: x.uW,
            children: [
                (0, s.jsxs)("div", {
                    className: x.wx,
                    children: [
                        (0, s.jsx)("span", { className: x.DD, children: t }),
                        (0, s.jsx)("span", { className: x.Uq, children: r }),
                    ],
                }),
                (0, s.jsx)(i.A, { dataPoints: n, width: c, height: 80, windowMs: 12e4 }),
                a,
            ],
        })
    );
}
function v(e) {
    return `${e.toFixed(1)}%`;
}
var j = r(952818),
    y = r(760751),
    A = r(290805),
    N = r(19575);
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
    }[A.y] ?? "Discord.exe";
function k(e) {
    return e.at(e.length - 1)?.value ?? 0;
}
function D(e) {
    return `${Math.round(e)} MB`;
}
function S(e) {
    let { title: t, value: r, series: n, yFloor: a, formatMax: i } = e,
        o = l.useRef(null),
        [c, u] = l.useState(320);
    return (
        l.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = null,
                r = 0,
                s = new ResizeObserver((e) => {
                    let [s] = e,
                        l = Math.max(80, Math.min(4096, Math.floor(s.contentRect.width)));
                    l === r ||
                        ((r = l),
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
            ref: o,
            className: x.uW,
            children: [
                (0, s.jsxs)("div", {
                    className: x.wx,
                    children: [
                        (0, s.jsx)("span", { className: x.DD, children: t }),
                        (0, s.jsx)("span", { className: x.Uq, children: r }),
                    ],
                }),
                (0, s.jsx)(M, { series: n, width: c, height: 80, windowMs: 3e5, yFloor: a, formatMax: i }),
            ],
        })
    );
}
function R(e) {
    let { view: t, colorFor: r } = e,
        { adapterName: l, entries: n } = t,
        a = n.map((e) => ({
            key: e.process.pid,
            buffer: e.gpu,
            color: r(e.process),
            stackOrder: e.process.stackOrder,
        })),
        i = n.map((e) => ({
            key: e.process.pid,
            buffer: e.vram,
            color: r(e.process),
            stackOrder: e.process.stackOrder,
        })),
        o = 0,
        c = 0;
    for (let e of n) (o += k(e.gpu)), (c += k(e.vram));
    let u = n.slice().sort((e, t) => {
        let r = t.process.lastSampleAt - e.process.lastSampleAt;
        return 0 !== r ? r : e.process.stackOrder - t.process.stackOrder;
    });
    return (0, s.jsxs)("div", {
        className: x.yT,
        children: [
            (0, s.jsx)("span", { className: x.Xk, children: l }),
            (0, s.jsxs)("div", {
                className: x.Ss,
                children: [
                    (0, s.jsx)(S, {
                        title: "Utilization",
                        value: v(o),
                        series: a,
                        yFloor: 100,
                        formatMax: (e) => `${Math.round(e)}%`,
                    }),
                    (0, s.jsx)(S, { title: "VRAM", value: D(c), series: i, yFloor: 0, formatMax: D }),
                ],
            }),
            (0, s.jsx)("div", {
                className: x.o1,
                children: u.map((e) => (0, s.jsx)(C, { entry: e, color: r(e.process) }, e.process.pid)),
            }),
        ],
    });
}
function C(e) {
    let { entry: t, color: r } = e,
        { process: l } = t;
    return (0, s.jsxs)("div", {
        className: x.eI,
        children: [
            (0, s.jsx)("div", { className: x.A9, style: { background: r } }),
            l.isDiscord
                ? (0, s.jsx)(h.p, { size: "sm", className: x.Gt })
                : (0, s.jsx)(p.A, {
                      game: l.detectableGame,
                      size: p.M.SMALL,
                      allowUnknownGameIcon: !0,
                      className: x.Gt,
                  }),
            (0, s.jsx)("span", { className: x.V1, children: l.name }),
            (0, s.jsxs)("span", { className: x.rz, children: [v(k(t.gpu)), " \xb7 ", D(k(t.vram))] }),
        ],
    });
}
function E(e) {
    let { enabled: t } = e,
        r = (function (e) {
            let [t, r] = l.useState([]),
                s = l.useRef(new Map()),
                n = l.useRef(new Map()),
                a = l.useRef(0);
            return (
                l.useEffect(() => {
                    let t;
                    if (!e) return;
                    let l = !1;
                    return (
                        !(function e() {
                            let i;
                            if (l) return;
                            let o = null == (i = window.DiscordNative?.process?.pid) || isNaN(i) ? null : i,
                                c = [];
                            for (let e of (null != o && c.push({ pid: o, isDiscord: !0 }),
                            j.Ay.getVisibleRunningGames()))
                                c.push({ pid: e.pid, isDiscord: !1, game: e });
                            Promise.all(
                                c.map((e) =>
                                    N.Ay.GetSystemGpuStats(e.pid)
                                        .catch(() => [])
                                        .then((t) => ({ target: e, adapters: t })),
                                ),
                            )
                                .then((e) => {
                                    if (l) return;
                                    let t = Date.now(),
                                        i = new Set(c.map((e) => e.pid)),
                                        o = new Map(s.current);
                                    for (let { target: r, adapters: s } of e) {
                                        let e = r.pid,
                                            l = o.get(e);
                                        if (null != l) o.set(e, { ...l, lastSampleAt: t });
                                        else if (r.isDiscord)
                                            o.set(e, {
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
                                                l = a.current++;
                                            o.set(e, {
                                                pid: e,
                                                isDiscord: !1,
                                                name: s.gameName ?? s.name ?? s.processName ?? `pid ${e}`,
                                                detectableGame: y.A.findGame(s) ?? null,
                                                colorIndex: ((l % 6) + 6) % 6,
                                                stackOrder: l,
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
                                        let c = n.current.get(e);
                                        for (let [r, s] of (null == c && ((c = new Map()), n.current.set(e, c)), i)) {
                                            let e = c.get(r);
                                            null == e && ((e = { gpu: new b(300), vram: new b(300) }), c.set(r, e)),
                                                e.gpu.push(s.utilization_percent, t),
                                                e.vram.push(s.memory_bytes / 1048576, t);
                                        }
                                    }
                                    for (let [e, r] of o)
                                        r.isDiscord ||
                                            i.has(e) ||
                                            !(t - r.lastSampleAt > 3e5) ||
                                            (o.delete(e), n.current.delete(e));
                                    for (let e of n.current.keys()) i.has(e) || o.has(e) || n.current.delete(e);
                                    (s.current = o),
                                        r(
                                            (function (e, t) {
                                                let r = new Map();
                                                for (let s of e.values()) {
                                                    let e = t.get(s.pid);
                                                    if (null != e)
                                                        for (let [t, l] of e) {
                                                            let e = r.get(t);
                                                            null == e && ((e = []), r.set(t, e)),
                                                                e.push({ process: s, gpu: l.gpu, vram: l.vram });
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
                                            })(o, n.current),
                                        );
                                })
                                .catch(() => {}),
                                (t = setTimeout(e, 1e3));
                        })(),
                        () => {
                            (l = !0), null != t && clearTimeout(t);
                        }
                    );
                }, [e]),
                t
            );
        })(t),
        n = (0, f.r)(m.A.unsafe_rawColors.BRAND_500).hsl(),
        a = [
            (0, f.r)(m.A.unsafe_rawColors.RED_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.ORANGE_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.YELLOW_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.GREEN_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.TEAL_400).hsl(),
            (0, f.r)(m.A.unsafe_rawColors.BLUE_400).hsl(),
        ],
        i = (e) => (e.isDiscord || e.colorIndex < 0 ? n : a[e.colorIndex % a.length]);
    return t && 0 !== r.length
        ? (0, s.jsx)(s.Fragment, { children: r.map((e) => (0, s.jsx)(R, { view: e, colorFor: i }, e.adapterName)) })
        : null;
}
let F = [d.M.Renderer, d.M.Main, d.M.GPU, d.M.Utility, d.M.Crashpad, d.M.Unknown];
function U(e) {
    return (e.wss_priv_kb ?? e.wss_kb ?? 0) / 1024;
}
function O() {
    let e = (0, a.bG)([o.default], () => o.default.getCurrentUser()?.isStaff() ?? !1),
        [t, r] = l.useState(null),
        [n, d] = l.useState(null),
        [h, m] = l.useState([]),
        [f, p] = l.useState(() => new Set()),
        w = l.useRef(null),
        [M, j] = l.useState(320),
        [y] = l.useState(() => new b(120)),
        [A] = l.useState(() => new Map());
    if (
        (l.useEffect(() => {
            let e = w.current;
            if (null == e) return;
            let t = null,
                r = 0,
                s = new ResizeObserver((e) => {
                    let [s] = e,
                        l = Math.max(320, Math.min(4096, Math.floor(s.contentRect.width)));
                    l === r ||
                        ((r = l),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                (t = null), j(r);
                            })));
                });
            return (
                s.observe(e),
                () => {
                    null != t && cancelAnimationFrame(t), s.disconnect();
                }
            );
        }, []),
        l.useEffect(() => {
            let e = !1,
                t = window.DiscordNative?.gcEvents?.addGCListener?.((t) => {
                    let { timestamp: r, kind: s } = t;
                    e || m((e) => [...e.filter((e) => e.time > r - 12e4), { time: r, kind: s }]);
                });
            return (
                !(function t() {
                    if (e) return;
                    let s = Date.now(),
                        l = performance.now(),
                        n = u.A.getCurrentCPUUsagePercent() ?? 0;
                    r(performance.now() - l);
                    let a = performance.now(),
                        i = u.A.getMemoryUsageElectronProcessTypeDetails();
                    if ((d(performance.now() - a), y.push(n, s), null != i))
                        for (let e of Object.keys(i)) {
                            let t = i[e];
                            if (null == t) continue;
                            let r = A.get(e);
                            null == r && ((r = new b(120)), A.set(e, r)), r.push(U(t), s);
                        }
                    setTimeout(t, 1e3);
                })(),
                () => {
                    (e = !0), t?.();
                }
            );
        }, [y, A]),
        !e)
    )
        return null;
    let N = u.A.getCurrentCPUUsagePercent() ?? 0,
        _ = u.A.getMemoryUsageElectronProcessTypeDetails() ?? {},
        k = F.reduce((e, t) => {
            let r = _[t];
            return null != r ? e + U(r) : e;
        }, 0);
    function D(e) {
        return null != e ? `${e.toFixed(1)}ms` : "";
    }
    function S(e) {
        return 2 === e
            ? "rgba(237, 66, 69, 0.9)"
            : 4 === e
              ? "rgba(59, 165, 93, 0.9)"
              : 8 === e
                ? "rgba(150, 150, 150, 0.6)"
                : "rgba(250, 168, 26, 0.75)";
    }
    let R = h.filter((e) => !f.has(e.kind)).map((e) => ({ time: e.time, color: S(e.kind) })),
        C = (0, c.isWindows)() && c.isPlatformEmbedded;
    return (0, s.jsxs)("div", {
        className: x.kL,
        children: [
            (0, s.jsx)("h1", { className: x.W, children: "Performance" }),
            (0, s.jsx)(E, { enabled: C }),
            (0, s.jsxs)("div", {
                ref: w,
                className: x.yT,
                children: [
                    (0, s.jsxs)("div", {
                        className: x.x_,
                        children: [
                            (0, s.jsx)("span", { className: x.AM, children: "CPU" }),
                            (0, s.jsx)("span", { className: x.rh, children: D(t) }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: x.uW,
                        children: [
                            (0, s.jsxs)("div", {
                                className: x.wx,
                                children: [
                                    (0, s.jsx)("span", { className: x.DD, children: "Utilization" }),
                                    (0, s.jsx)("span", { className: x.Uq, children: v(N) }),
                                ],
                            }),
                            (0, s.jsx)(i.A, { dataPoints: y, width: M, height: 80, windowMs: 12e4, markers: R }),
                            (0, s.jsx)("div", {
                                className: x.KP,
                                children: [
                                    { kind: 2, label: "Major GC" },
                                    { kind: 4, label: "Incremental" },
                                    { kind: 1, label: "Minor GC" },
                                    { kind: 8, label: "Weak-cb" },
                                ].map((e) => {
                                    let { kind: t, label: r } = e,
                                        l = !f.has(t);
                                    return (0, s.jsxs)(
                                        "button",
                                        {
                                            type: "button",
                                            className: x.$d,
                                            "aria-pressed": l,
                                            title: `${l ? "Hide" : "Show"} ${r} markers`,
                                            onClick: () => {
                                                p((e) => {
                                                    let r = new Set(e);
                                                    return r.has(t) ? r.delete(t) : r.add(t), r;
                                                });
                                            },
                                            children: [
                                                (0, s.jsx)("div", { className: x.AW, style: { background: S(t) } }),
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
                            (0, s.jsx)("span", { className: x.rh, children: D(n) }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: x.V$,
                        children: [
                            (0, s.jsx)("span", { className: x.j5, children: "Total" }),
                            (0, s.jsx)("span", { className: x.om, children: `${k.toFixed(0)} MB` }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: x.kK,
                        children: F.map((e) => {
                            let t = A.get(e);
                            if (null == t || 0 === t.length) return null;
                            let r = _[e],
                                l = null != r ? U(r) : 0,
                                n = r?.wss_priv_kb != null;
                            return (0, s.jsx)(
                                g,
                                { title: `${e}${n ? " (private)" : ""}`, value: `${l.toFixed(0)} MB`, points: t },
                                e,
                            );
                        }),
                    }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { windowKey: t } = e;
    return (0, s.jsx)(n.A, { withTitleBar: !0, windowKey: t, title: "Discord Stats", children: (0, s.jsx)(O, {}) });
}
