r.r(t), r.d(t, { default: () => W });
var l = r(627968),
    s = r(64700),
    n = r(979186);
r(321073);
var a = r(17928),
    i = r(287809),
    o = r(723702),
    c = r(321034),
    u = r(832213);
r(134528), r(947204);
var d = r(111159),
    h = r(661531),
    m = r(602853),
    f = r(769015);
r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var p = r(229659),
    x = r(938800);
class w {
    value = null;
    pinnedState = !1;
    listeners = new Set();
    get time() {
        return this.value;
    }
    get pinned() {
        return this.pinnedState;
    }
    set(e) {
        this.pinnedState || e === this.value || ((this.value = e), this.emit());
    }
    togglePin(e) {
        (this.pinnedState = !this.pinnedState), (this.value = e), this.emit();
    }
    subscribe(e) {
        return (
            this.listeners.add(e),
            () => {
                this.listeners.delete(e);
            }
        );
    }
    emit() {
        for (let e of this.listeners) e();
    }
}
let v = s.createContext(null);
function g(e) {
    let { store: t, children: r } = e;
    return (0, l.jsx)(v.Provider, { value: t, children: r });
}
function M() {
    return s.useContext(v);
}
function j(e, t) {
    var r;
    let l = e.currentTarget.getBoundingClientRect();
    return l.width <= 0
        ? null
        : ((r = Math.max(0, Math.min(1, (e.clientX - l.left) / l.width))), Date.now() - (1 - r) * t);
}
function y(e) {
    let t,
        r,
        n,
        a,
        { rows: i, format: o, bucketMs: c } = e,
        u = M(),
        d =
            ((t = s.useCallback((e) => u?.subscribe(e) ?? (() => {}), [u])),
            (r = s.useCallback(() => u?.time ?? null, [u])),
            s.useSyncExternalStore(t, r)),
        h =
            ((n = s.useCallback((e) => u?.subscribe(e) ?? (() => {}), [u])),
            (a = s.useCallback(() => u?.pinned ?? !1, [u])),
            s.useSyncExternalStore(n, a));
    if (null == d) return null;
    let m = i
        .map((e) => ({
            row: e,
            value: (function (e, t, r) {
                let l = null;
                for (let s = 0; s < e.length; s++) {
                    let n = e.at(s);
                    if (null != n) {
                        if (n.time > t) break;
                        l = null != r && t - n.time > r ? null : n.value;
                    }
                }
                return l;
            })(e.series, d, c),
        }))
        .filter((e) => null != e.value && (null == c || e.value > 0));
    return 0 === m.length
        ? null
        : (0, l.jsxs)("div", {
              className: x.BN,
              "aria-hidden": !0,
              children: [
                  (0, l.jsxs)("div", {
                      className: x.UM,
                      children: [
                          new Date(d).toLocaleTimeString(),
                          h && (0, l.jsx)("span", { className: x.gE, children: "pinned" }),
                      ],
                  }),
                  m.map((e) => {
                      let { row: t, value: r } = e;
                      return (0, l.jsxs)(
                          "div",
                          {
                              className: x.BM,
                              children: [
                                  (0, l.jsx)("span", { className: x.Rd, style: { background: t.color } }),
                                  (0, l.jsx)("span", { className: x.P_, children: t.label }),
                                  (0, l.jsx)("span", { className: x.kx, children: o(r) }),
                              ],
                          },
                          t.key,
                      );
                  }),
              ],
          });
}
function N(e) {
    let { dataPoints: t, width: r, height: s, windowMs: n, label: a, format: i, markers: o } = e,
        c = M(),
        u = (0, m.r)(h.A.unsafe_rawColors.BRAND_500).hsl();
    return (0, l.jsxs)("div", {
        className: x.jm,
        children: [
            (0, l.jsx)(p.A, {
                dataPoints: t,
                width: r,
                height: s,
                windowMs: n,
                markers: o,
                hoverSource: c ?? void 0,
                onHoverTime: null != c ? (e) => c.set(e) : void 0,
                onHoverClick: null != c ? (e) => c.togglePin(e) : void 0,
            }),
            (0, l.jsx)(y, { rows: [{ key: a, label: a, color: u, series: t }], format: i }),
        ],
    });
}
let b = 1e3 / 30;
function k(e) {
    let t = s.useRef(null),
        r = (0, m.r)(h.A.colors.BACKGROUND_BASE_LOW).hsl(),
        n = (0, m.r)(h.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        a = (0, m.r)(h.A.colors.TEXT_DEFAULT).hsl(),
        i = s.useRef(e);
    s.useEffect(() => {
        i.current = e;
    });
    let o = s.useRef(new Float64Array(0)),
        c = s.useRef(0),
        u = window.devicePixelRatio ?? 1,
        d = Math.round(e.width * u),
        f = Math.round(e.height * u);
    s.useEffect(() => {
        let e = 0,
            l = 0,
            s = (u) => {
                if (((e = requestAnimationFrame(s)), u - l < b)) return;
                l = u;
                let d = t.current;
                if (null == d) return;
                let h = d.getContext("2d");
                if (null == h) return;
                let { series: m, windowMs: f, yFloor: p, formatMax: x } = i.current,
                    w = window.devicePixelRatio ?? 1,
                    v = d.width,
                    g = d.height;
                h.setTransform(1, 0, 0, 1, 0, 0), (h.fillStyle = r), h.fillRect(0, 0, v, g);
                let M = m.slice().sort((e, t) => e.stackOrder - t.stackOrder),
                    j = M.length,
                    y = Date.now(),
                    N = Math.max(1, Math.round(f / 1e3)),
                    k = y - 1e3 * N,
                    A = j * N;
                o.current.length < A && (o.current = new Float64Array(A));
                let S = o.current;
                S.fill(0, 0, A);
                let _ = 0;
                for (let e = 0; e < j; e++) {
                    let t = M[e].buffer,
                        r = t.length;
                    for (let l = 0; l < r; l++) {
                        let r = t.at(l);
                        if (null == r) continue;
                        let s = Math.floor((r.time - k) / 1e3);
                        s < 0 || s >= N || (S[e * N + s] = r.value);
                    }
                }
                for (let e = 0; e < N; e++) {
                    let t = 0;
                    for (let r = 0; r < j; r++) t += S[r * N + e];
                    t > _ && (_ = t);
                }
                let D = Math.max(
                        p,
                        (function (e) {
                            if (e <= 0) return 0;
                            let t = Math.pow(10, Math.floor(Math.log10(e))),
                                r = e / t;
                            return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * t;
                        })(_),
                        1,
                    ),
                    R = c.current;
                (R = R <= 0 ? D : R + (D - R) * 0.2) < Math.max(p, 1) && (R = Math.max(p, 1)), (c.current = R);
                let C = Math.ceil(11 * w) + Math.round(4 * w),
                    P = Math.max(1, g - C),
                    F = Math.max(1, Math.ceil(v / N));
                for (let e = 0; e < N; e++) {
                    let t = Math.floor((e / N) * v),
                        r = g;
                    for (let l = 0; l < j; l++) {
                        let s = S[l * N + e];
                        if (s <= 0) continue;
                        let n = (s / R) * P;
                        (h.fillStyle = M[l].color), h.fillRect(t, r - n, F, n), (r -= n);
                    }
                }
                (h.strokeStyle = n),
                    (h.lineWidth = w),
                    h.beginPath(),
                    h.moveTo(0, C),
                    h.lineTo(v, C),
                    h.stroke(),
                    (h.fillStyle = a),
                    (h.font = `${11 * w}px gg sans`),
                    (h.textAlign = "right"),
                    (h.textBaseline = "top"),
                    h.fillText(x(R), v - Math.round(4 * w), Math.round(2 * w)),
                    (function (e, t, r) {
                        let { time: l, now: s, windowMs: n, color: a, bottomReserve: i } = r;
                        if (null == l) return;
                        let o = 1 - (s - l) / n;
                        if (o < 0 || o > 1) return;
                        let c = window.devicePixelRatio ?? 1,
                            u = Math.round(t.width * o);
                        e.save(),
                            (e.strokeStyle = a),
                            (e.lineWidth = c),
                            e.beginPath(),
                            e.moveTo(u, 0),
                            e.lineTo(u, Math.max(0, t.height - i)),
                            e.stroke(),
                            e.restore();
                    })(h, d, {
                        time: i.current.hoverStore?.time ?? null,
                        now: y,
                        windowMs: f,
                        color: a,
                        bottomReserve: 0,
                    });
            };
        return (e = requestAnimationFrame(s)), () => cancelAnimationFrame(e);
    }, [r, n, a]);
    let { hoverStore: p, windowMs: w } = e,
        v =
            null != p
                ? (e) => {
                      let t;
                      null != (t = j(e, w)) && p.set(t);
                  }
                : void 0,
        g = null != p ? () => p.set(null) : void 0,
        M =
            null != p
                ? (e) => {
                      let t;
                      null != (t = j(e, w)) && p.togglePin(t);
                  }
                : void 0;
    return (0, l.jsx)("canvas", {
        ref: t,
        width: d,
        height: f,
        style: { width: e.width, height: e.height },
        className: x.Ji,
        onPointerMove: v,
        onPointerLeave: g,
        onPointerDown: M,
    });
}
function A(e) {
    let { title: t, value: r, points: n, format: a, children: i } = e,
        o = s.useRef(null),
        [c, u] = s.useState(320);
    return (
        s.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = null,
                r = 0,
                l = new ResizeObserver((e) => {
                    let [l] = e,
                        s = Math.max(80, Math.min(4096, Math.floor(l.contentRect.width)));
                    s === r ||
                        ((r = s),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                (t = null), u(r);
                            })));
                });
            return (
                l.observe(e),
                () => {
                    null != t && cancelAnimationFrame(t), l.disconnect();
                }
            );
        }, []),
        (0, l.jsxs)("div", {
            ref: o,
            className: x.uW,
            children: [
                (0, l.jsxs)("div", {
                    className: x.wx,
                    children: [
                        (0, l.jsx)("span", { className: x.DD, children: t }),
                        (0, l.jsx)("span", { className: x.Uq, children: r }),
                    ],
                }),
                (0, l.jsx)(N, {
                    dataPoints: n,
                    width: c,
                    height: 80,
                    windowMs: 12e4,
                    label: t,
                    format: a ?? ((e) => String(e)),
                }),
                i,
            ],
        })
    );
}
function S(e) {
    return `${e.toFixed(1)}%`;
}
var _ = r(952818),
    D = r(760751),
    R = r(290805),
    C = r(19575);
class P {
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
let F =
    {
        stable: "Discord.exe",
        ptb: "DiscordPTB.exe",
        canary: "DiscordCanary.exe",
        development: "DiscordDevelopment.exe",
    }[R.y] ?? "Discord.exe";
function E(e) {
    return e.at(e.length - 1)?.value ?? 0;
}
function T(e) {
    return `${Math.round(e)} MB`;
}
function U(e) {
    let { title: t, value: r, series: n, yFloor: a, formatMax: i, formatValue: o, labelByKey: c } = e,
        u = s.useRef(null),
        [d, h] = s.useState(320),
        m = M(),
        f = n
            .slice()
            .sort((e, t) => t.stackOrder - e.stackOrder)
            .map((e) => ({ key: e.key, label: c.get(e.key) ?? String(e.key), color: e.color, series: e.buffer }));
    return (
        s.useEffect(() => {
            let e = u.current;
            if (null == e) return;
            let t = null,
                r = 0,
                l = new ResizeObserver((e) => {
                    let [l] = e,
                        s = Math.max(80, Math.min(4096, Math.floor(l.contentRect.width)));
                    s === r ||
                        ((r = s),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                (t = null), h(r);
                            })));
                });
            return (
                l.observe(e),
                () => {
                    null != t && cancelAnimationFrame(t), l.disconnect();
                }
            );
        }, []),
        (0, l.jsxs)("div", {
            ref: u,
            className: x.uW,
            children: [
                (0, l.jsxs)("div", {
                    className: x.wx,
                    children: [
                        (0, l.jsx)("span", { className: x.DD, children: t }),
                        (0, l.jsx)("span", { className: x.Uq, children: r }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: x.jm,
                    children: [
                        (0, l.jsx)(k, {
                            series: n,
                            width: d,
                            height: 80,
                            windowMs: 3e5,
                            yFloor: a,
                            formatMax: i,
                            hoverStore: m ?? void 0,
                        }),
                        (0, l.jsx)(y, { rows: f, format: o, bucketMs: 1e3 }),
                    ],
                }),
            ],
        })
    );
}
function O(e) {
    let { view: t, colorFor: r } = e,
        { adapterName: s, entries: n } = t,
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
    for (let e of n) (o += E(e.gpu)), (c += E(e.vram));
    let u = new Map(n.map((e) => [e.process.pid, e.process.name])),
        d = n.slice().sort((e, t) => {
            let r = t.process.lastSampleAt - e.process.lastSampleAt;
            return 0 !== r ? r : e.process.stackOrder - t.process.stackOrder;
        });
    return (0, l.jsxs)("div", {
        className: x.yT,
        children: [
            (0, l.jsx)("span", { className: x.Xk, children: s }),
            (0, l.jsxs)("div", {
                className: x.Ss,
                children: [
                    (0, l.jsx)(U, {
                        title: "Utilization",
                        value: S(o),
                        series: a,
                        yFloor: 100,
                        formatMax: (e) => `${Math.round(e)}%`,
                        formatValue: S,
                        labelByKey: u,
                    }),
                    (0, l.jsx)(U, {
                        title: "VRAM",
                        value: T(c),
                        series: i,
                        yFloor: 0,
                        formatMax: T,
                        formatValue: T,
                        labelByKey: u,
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: x.o1,
                children: d.map((e) => (0, l.jsx)(G, { entry: e, color: r(e.process) }, e.process.pid)),
            }),
        ],
    });
}
function G(e) {
    let { entry: t, color: r } = e,
        { process: s } = t;
    return (0, l.jsxs)("div", {
        className: x.eI,
        children: [
            (0, l.jsx)("div", { className: x.A9, style: { background: r } }),
            s.isDiscord
                ? (0, l.jsx)(d.p, { size: "sm", className: x.Gt })
                : (0, l.jsx)(f.A, {
                      game: s.detectableGame,
                      size: f.M.SMALL,
                      allowUnknownGameIcon: !0,
                      className: x.Gt,
                  }),
            (0, l.jsx)("span", { className: x.V1, children: s.name }),
            (0, l.jsxs)("span", { className: x.rz, children: [S(E(t.gpu)), " \xb7 ", T(E(t.vram))] }),
        ],
    });
}
function B(e) {
    let { enabled: t } = e,
        r = (function (e) {
            let [t, r] = s.useState([]),
                l = s.useRef(new Map()),
                n = s.useRef(new Map()),
                a = s.useRef(0);
            return (
                s.useEffect(() => {
                    let t;
                    if (!e) return;
                    let s = !1;
                    return (
                        !(function e() {
                            let i;
                            if (s) return;
                            let o = null == (i = window.DiscordNative?.process?.pid) || isNaN(i) ? null : i,
                                c = [];
                            for (let e of (null != o && c.push({ pid: o, isDiscord: !0 }),
                            _.Ay.getVisibleRunningGames()))
                                c.push({ pid: e.pid, isDiscord: !1, game: e });
                            Promise.all(
                                c.map((e) =>
                                    C.Ay.GetSystemGpuStats(e.pid)
                                        .catch(() => [])
                                        .then((t) => ({ target: e, adapters: t })),
                                ),
                            )
                                .then((e) => {
                                    if (s) return;
                                    let t = Date.now(),
                                        i = new Set(c.map((e) => e.pid)),
                                        o = new Map(l.current);
                                    for (let { target: r, adapters: l } of e) {
                                        let e = r.pid,
                                            s = o.get(e);
                                        if (null != s) o.set(e, { ...s, lastSampleAt: t });
                                        else if (r.isDiscord)
                                            o.set(e, {
                                                pid: e,
                                                isDiscord: !0,
                                                name: F,
                                                detectableGame: null,
                                                colorIndex: -1,
                                                stackOrder: -1,
                                                lastSampleAt: t,
                                            });
                                        else {
                                            let l = r.game,
                                                s = a.current++;
                                            o.set(e, {
                                                pid: e,
                                                isDiscord: !1,
                                                name: l.gameName ?? l.name ?? l.processName ?? `pid ${e}`,
                                                detectableGame: D.A.findGame(l) ?? null,
                                                colorIndex: ((s % 6) + 6) % 6,
                                                stackOrder: s,
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
                                        })(l);
                                        if (0 === i.size) continue;
                                        let c = n.current.get(e);
                                        for (let [r, l] of (null == c && ((c = new Map()), n.current.set(e, c)), i)) {
                                            let e = c.get(r);
                                            null == e && ((e = { gpu: new P(300), vram: new P(300) }), c.set(r, e)),
                                                e.gpu.push(l.utilization_percent, t),
                                                e.vram.push(l.memory_bytes / 1048576, t);
                                        }
                                    }
                                    for (let [e, r] of o)
                                        r.isDiscord ||
                                            i.has(e) ||
                                            !(t - r.lastSampleAt > 3e5) ||
                                            (o.delete(e), n.current.delete(e));
                                    for (let e of n.current.keys()) i.has(e) || o.has(e) || n.current.delete(e);
                                    (l.current = o),
                                        r(
                                            (function (e, t) {
                                                let r = new Map();
                                                for (let l of e.values()) {
                                                    let e = t.get(l.pid);
                                                    if (null != e)
                                                        for (let [t, s] of e) {
                                                            let e = r.get(t);
                                                            null == e && ((e = []), r.set(t, e)),
                                                                e.push({ process: l, gpu: s.gpu, vram: s.vram });
                                                        }
                                                }
                                                return Array.from(r.entries())
                                                    .sort((e, t) => {
                                                        let [r] = e,
                                                            [l] = t;
                                                        return r.localeCompare(l);
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
                            (s = !0), null != t && clearTimeout(t);
                        }
                    );
                }, [e]),
                t
            );
        })(t),
        n = (0, m.r)(h.A.unsafe_rawColors.BRAND_500).hsl(),
        a = [
            (0, m.r)(h.A.unsafe_rawColors.RED_400).hsl(),
            (0, m.r)(h.A.unsafe_rawColors.ORANGE_400).hsl(),
            (0, m.r)(h.A.unsafe_rawColors.YELLOW_400).hsl(),
            (0, m.r)(h.A.unsafe_rawColors.GREEN_400).hsl(),
            (0, m.r)(h.A.unsafe_rawColors.TEAL_400).hsl(),
            (0, m.r)(h.A.unsafe_rawColors.BLUE_400).hsl(),
        ];
    function i(e) {
        return e.isDiscord || e.colorIndex < 0 ? n : a[e.colorIndex % a.length];
    }
    return t && 0 !== r.length
        ? (0, l.jsx)(l.Fragment, { children: r.map((e) => (0, l.jsx)(O, { view: e, colorFor: i }, e.adapterName)) })
        : null;
}
let $ = [u.M.Renderer, u.M.Main, u.M.GPU, u.M.Utility, u.M.Crashpad, u.M.Unknown];
function z(e) {
    return (e.wss_priv_kb ?? e.wss_kb ?? 0) / 1024;
}
function L() {
    let e = (0, a.bG)([i.default], () => i.default.getCurrentUser()?.isStaff() ?? !1),
        [t, r] = s.useState(null),
        [n, u] = s.useState(null),
        [d, h] = s.useState([]),
        [m, f] = s.useState(() => new Set()),
        p = s.useRef(null),
        [v, M] = s.useState(320),
        [j] = s.useState(() => new P(120)),
        [y] = s.useState(() => new Map()),
        [b] = s.useState(() => new P(120)),
        [k, _] = s.useState(null),
        D = s.useRef(0),
        [R] = s.useState(() => new w());
    if (
        (s.useEffect(() => {
            let e = p.current;
            if (null == e) return;
            let t = null,
                r = 0,
                l = new ResizeObserver((e) => {
                    let [l] = e,
                        s = Math.max(320, Math.min(4096, Math.floor(l.contentRect.width)));
                    s === r ||
                        ((r = s),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                (t = null), M(r);
                            })));
                });
            return (
                l.observe(e),
                () => {
                    null != t && cancelAnimationFrame(t), l.disconnect();
                }
            );
        }, []),
        s.useEffect(() => {
            let e = requestAnimationFrame(function t() {
                (D.current += 1), (e = requestAnimationFrame(t));
            });
            return () => cancelAnimationFrame(e);
        }, []),
        s.useEffect(() => {
            let e = !1,
                t = performance.now(),
                l = !1,
                s = window.DiscordNative?.gcEvents?.addGCListener?.((t) => {
                    let { timestamp: r, kind: l } = t;
                    e || h((e) => [...e.filter((e) => e.time > r - 12e4), { time: r, kind: l }]);
                });
            return (
                !(function s() {
                    if (e) return;
                    let n = Date.now(),
                        a = performance.now(),
                        i = c.A.getCurrentCPUUsagePercent() ?? 0;
                    r(performance.now() - a);
                    let o = performance.now(),
                        d = c.A.getMemoryUsageElectronProcessTypeDetails();
                    if ((u(performance.now() - o), j.push(i, n), null != d))
                        for (let e of Object.keys(d)) {
                            let t = d[e];
                            if (null == t) continue;
                            let r = y.get(e);
                            null == r && ((r = new P(120)), y.set(e, r)), r.push(z(t), n);
                        }
                    let h = performance.now(),
                        m = (h - t) / 1e3;
                    if (l && m > 0) {
                        let e = D.current / m;
                        _(e), b.push(e, n);
                    }
                    (D.current = 0), (t = h), (l = !0), setTimeout(s, 1e3);
                })(),
                () => {
                    (e = !0), s?.();
                }
            );
        }, [j, y, b]),
        !e)
    )
        return null;
    let C = c.A.getCurrentCPUUsagePercent() ?? 0,
        F = c.A.getMemoryUsageElectronProcessTypeDetails() ?? {},
        E = $.reduce((e, t) => {
            let r = F[t];
            return null != r ? e + z(r) : e;
        }, 0);
    function T(e) {
        return null != e ? `${e.toFixed(1)}ms` : "";
    }
    function U(e) {
        return 2 === e
            ? "rgba(237, 66, 69, 0.9)"
            : 4 === e
              ? "rgba(59, 165, 93, 0.9)"
              : 8 === e
                ? "rgba(150, 150, 150, 0.6)"
                : "rgba(250, 168, 26, 0.75)";
    }
    let O = d.filter((e) => !m.has(e.kind)).map((e) => ({ time: e.time, color: U(e.kind) })),
        G = (0, o.isWindows)() && o.isPlatformEmbedded;
    return (0, l.jsx)(g, {
        store: R,
        children: (0, l.jsxs)("div", {
            className: x.kL,
            children: [
                (0, l.jsx)("h1", { className: x.W, children: "Performance" }),
                (0, l.jsx)(B, { enabled: G }),
                (0, l.jsxs)("div", {
                    ref: p,
                    className: x.yT,
                    children: [
                        (0, l.jsxs)("div", {
                            className: x.x_,
                            children: [
                                (0, l.jsx)("span", { className: x.AM, children: "CPU" }),
                                (0, l.jsx)("span", { className: x.rh, children: T(t) }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: x.uW,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: x.wx,
                                    children: [
                                        (0, l.jsx)("span", { className: x.DD, children: "Utilization" }),
                                        (0, l.jsx)("span", { className: x.Uq, children: S(C) }),
                                    ],
                                }),
                                (0, l.jsx)(N, {
                                    dataPoints: j,
                                    width: v,
                                    height: 80,
                                    windowMs: 12e4,
                                    markers: O,
                                    label: "Utilization",
                                    format: S,
                                }),
                                (0, l.jsx)("div", {
                                    className: x.KP,
                                    children: [
                                        { kind: 2, label: "Major GC" },
                                        { kind: 4, label: "Incremental" },
                                        { kind: 1, label: "Minor GC" },
                                        { kind: 8, label: "Weak-cb" },
                                    ].map((e) => {
                                        let { kind: t, label: r } = e,
                                            s = !m.has(t);
                                        return (0, l.jsxs)(
                                            "button",
                                            {
                                                type: "button",
                                                className: x.$d,
                                                "aria-pressed": s,
                                                title: `${s ? "Hide" : "Show"} ${r} markers`,
                                                onClick: () => {
                                                    f((e) => {
                                                        let r = new Set(e);
                                                        return r.has(t) ? r.delete(t) : r.add(t), r;
                                                    });
                                                },
                                                children: [
                                                    (0, l.jsx)("div", { className: x.AW, style: { background: U(t) } }),
                                                    (0, l.jsx)("span", { className: x.IF, children: r }),
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
                (0, l.jsxs)("div", {
                    className: x.yT,
                    children: [
                        (0, l.jsxs)("div", {
                            className: x.x_,
                            children: [
                                (0, l.jsx)("span", { className: x.AM, children: "Memory" }),
                                (0, l.jsx)("span", { className: x.rh, children: T(n) }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: x.V$,
                            children: [
                                (0, l.jsx)("span", { className: x.j5, children: "Total" }),
                                (0, l.jsx)("span", { className: x.om, children: `${E.toFixed(0)} MB` }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: x.kK,
                            children: $.map((e) => {
                                let t = y.get(e);
                                if (null == t || 0 === t.length) return null;
                                let r = F[e],
                                    s = null != r ? z(r) : 0,
                                    n = r?.wss_priv_kb != null;
                                return (0, l.jsx)(
                                    A,
                                    {
                                        title: `${e}${n ? " (private)" : ""}`,
                                        value: `${s.toFixed(0)} MB`,
                                        points: t,
                                        format: (e) => `${e.toFixed(0)} MB`,
                                    },
                                    e,
                                );
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: x.yT,
                    children: [
                        (0, l.jsx)("div", {
                            className: x.x_,
                            children: (0, l.jsx)("span", { className: x.AM, children: "Frame Rate" }),
                        }),
                        (0, l.jsx)(A, {
                            title: "Discord (main window)",
                            value: null != k ? `${Math.round(k)} FPS` : "",
                            points: b,
                            format: (e) => `${Math.round(e)} FPS`,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function W(e) {
    let { windowKey: t } = e;
    return (0, l.jsx)(n.A, { withTitleBar: !0, windowKey: t, title: "Discord Stats", children: (0, l.jsx)(L, {}) });
}
