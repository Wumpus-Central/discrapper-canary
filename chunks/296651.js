r.r(t), r.d(t, { default: () => q });
var l = r(627968),
    s = r(64700),
    n = r(979186);
r(321073);
var a = r(17928),
    i = r(834730),
    o = r(287809),
    c = r(723702),
    u = r(321034),
    d = r(832213);
r(134528), r(947204);
var m = r(111159),
    h = r(661531),
    f = r(602853),
    p = r(769015);
r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var x = r(229659),
    v = r(952432);
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
let g = s.createContext(null);
function M(e) {
    let { store: t, children: r } = e;
    return (0, l.jsx)(g.Provider, { value: t, children: r });
}
function j() {
    return s.useContext(g);
}
function b(e, t) {
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
        u = j(),
        d =
            ((t = s.useCallback((e) => u?.subscribe(e) ?? (() => {}), [u])),
            (r = s.useCallback(() => u?.time ?? null, [u])),
            s.useSyncExternalStore(t, r)),
        m =
            ((n = s.useCallback((e) => u?.subscribe(e) ?? (() => {}), [u])),
            (a = s.useCallback(() => u?.pinned ?? !1, [u])),
            s.useSyncExternalStore(n, a));
    if (null == d) return null;
    let h = i
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
    return 0 === h.length
        ? null
        : (0, l.jsxs)("div", {
              className: v.BN,
              "aria-hidden": !0,
              children: [
                  (0, l.jsxs)("div", {
                      className: v.UM,
                      children: [
                          new Date(d).toLocaleTimeString(),
                          m && (0, l.jsx)("span", { className: v.gE, children: "pinned" }),
                      ],
                  }),
                  h.map((e) => {
                      let { row: t, value: r } = e;
                      return (0, l.jsxs)(
                          "div",
                          {
                              className: v.BM,
                              children: [
                                  (0, l.jsx)("span", { className: v.Rd, style: { background: t.color } }),
                                  (0, l.jsx)("span", { className: v.P_, children: t.label }),
                                  (0, l.jsx)("span", { className: v.kx, children: o(r) }),
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
        c = j(),
        u = (0, f.r)(h.A.unsafe_rawColors.BRAND_500).hsl();
    return (0, l.jsxs)("div", {
        className: v.jm,
        children: [
            (0, l.jsx)(x.A, {
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
let k = 1e3 / 30;
function A(e) {
    let t = s.useRef(null),
        r = (0, f.r)(h.A.colors.BACKGROUND_BASE_LOW).hsl(),
        n = (0, f.r)(h.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        a = (0, f.r)(h.A.colors.TEXT_DEFAULT).hsl(),
        i = s.useRef(e);
    s.useEffect(() => {
        i.current = e;
    });
    let o = s.useRef(new Float64Array(0)),
        c = s.useRef(0),
        u = window.devicePixelRatio ?? 1,
        d = Math.round(e.width * u),
        m = Math.round(e.height * u);
    s.useEffect(() => {
        let e = 0,
            l = 0,
            s = (u) => {
                if (((e = requestAnimationFrame(s)), u - l < k)) return;
                l = u;
                let d = t.current;
                if (null == d) return;
                let m = d.getContext("2d");
                if (null == m) return;
                let { series: h, windowMs: f, yFloor: p, formatMax: x } = i.current,
                    v = window.devicePixelRatio ?? 1,
                    w = d.width,
                    g = d.height;
                m.setTransform(1, 0, 0, 1, 0, 0), (m.fillStyle = r), m.fillRect(0, 0, w, g);
                let M = h.slice().sort((e, t) => e.stackOrder - t.stackOrder),
                    j = M.length,
                    b = Date.now(),
                    y = Math.max(1, Math.round(f / 1e3)),
                    N = b - 1e3 * y,
                    A = j * y;
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
                        let s = Math.floor((r.time - N) / 1e3);
                        s < 0 || s >= y || (S[e * y + s] = r.value);
                    }
                }
                for (let e = 0; e < y; e++) {
                    let t = 0;
                    for (let r = 0; r < j; r++) t += S[r * y + e];
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
                let C = Math.ceil(11 * v) + Math.round(4 * v),
                    P = Math.max(1, g - C),
                    E = Math.max(1, Math.ceil(w / y));
                for (let e = 0; e < y; e++) {
                    let t = Math.floor((e / y) * w),
                        r = g;
                    for (let l = 0; l < j; l++) {
                        let s = S[l * y + e];
                        if (s <= 0) continue;
                        let n = (s / R) * P;
                        (m.fillStyle = M[l].color), m.fillRect(t, r - n, E, n), (r -= n);
                    }
                }
                (m.strokeStyle = n),
                    (m.lineWidth = v),
                    m.beginPath(),
                    m.moveTo(0, C),
                    m.lineTo(w, C),
                    m.stroke(),
                    (m.fillStyle = a),
                    (m.font = `${11 * v}px gg sans`),
                    (m.textAlign = "right"),
                    (m.textBaseline = "top"),
                    m.fillText(x(R), w - Math.round(4 * v), Math.round(2 * v)),
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
                    })(m, d, {
                        time: i.current.hoverStore?.time ?? null,
                        now: b,
                        windowMs: f,
                        color: a,
                        bottomReserve: 0,
                    });
            };
        return (e = requestAnimationFrame(s)), () => cancelAnimationFrame(e);
    }, [r, n, a]);
    let { hoverStore: p, windowMs: x } = e,
        w =
            null != p
                ? (e) => {
                      let t;
                      null != (t = b(e, x)) && p.set(t);
                  }
                : void 0,
        g = null != p ? () => p.set(null) : void 0,
        M =
            null != p
                ? (e) => {
                      let t;
                      null != (t = b(e, x)) && p.togglePin(t);
                  }
                : void 0;
    return (0, l.jsx)("canvas", {
        ref: t,
        width: d,
        height: m,
        style: { width: e.width, height: e.height },
        className: v.Ji,
        onPointerMove: w,
        onPointerLeave: g,
        onPointerDown: M,
    });
}
function S(e) {
    let { title: t, value: r, points: n, format: a, children: o } = e,
        c = s.useRef(null),
        [u, d] = s.useState(320);
    return (
        s.useEffect(() => {
            let e = c.current;
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
                                (t = null), d(r);
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
            ref: c,
            className: v.uW,
            children: [
                (0, l.jsxs)("div", {
                    className: v.wx,
                    children: [
                        (0, l.jsx)("span", { className: v.DD, children: t }),
                        (0, l.jsx)(i.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            tag: "span",
                            className: v.Uq,
                            children: r,
                        }),
                    ],
                }),
                (0, l.jsx)(N, {
                    dataPoints: n,
                    width: u,
                    height: 80,
                    windowMs: 12e4,
                    label: t,
                    format: a ?? ((e) => String(e)),
                }),
                o,
            ],
        })
    );
}
function _(e) {
    return `${e.toFixed(1)}%`;
}
var D = r(952818),
    R = r(760751),
    C = r(290805),
    P = r(19575);
class E {
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
    }[C.y] ?? "Discord.exe";
function T(e) {
    return e.at(e.length - 1)?.value ?? 0;
}
function U(e) {
    return `${Math.round(e)} MB`;
}
function O(e) {
    let { title: t, value: r, series: n, yFloor: a, formatMax: o, formatValue: c, labelByKey: u } = e,
        d = s.useRef(null),
        [m, h] = s.useState(320),
        f = j(),
        p = n
            .slice()
            .sort((e, t) => t.stackOrder - e.stackOrder)
            .map((e) => ({ key: e.key, label: u.get(e.key) ?? String(e.key), color: e.color, series: e.buffer }));
    return (
        s.useEffect(() => {
            let e = d.current;
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
            ref: d,
            className: v.uW,
            children: [
                (0, l.jsxs)("div", {
                    className: v.wx,
                    children: [
                        (0, l.jsx)("span", { className: v.DD, children: t }),
                        (0, l.jsx)(i.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            tag: "span",
                            className: v.Uq,
                            children: r,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: v.jm,
                    children: [
                        (0, l.jsx)(A, {
                            series: n,
                            width: m,
                            height: 80,
                            windowMs: 3e5,
                            yFloor: a,
                            formatMax: o,
                            hoverStore: f ?? void 0,
                        }),
                        (0, l.jsx)(y, { rows: p, format: c, bucketMs: 1e3 }),
                    ],
                }),
            ],
        })
    );
}
function G(e) {
    let { view: t, colorFor: r } = e,
        { adapterName: s, entries: n } = t,
        a = n.map((e) => ({
            key: e.process.pid,
            buffer: e.gpu,
            color: r(e.process),
            stackOrder: e.process.stackOrder,
        })),
        o = n.map((e) => ({
            key: e.process.pid,
            buffer: e.vram,
            color: r(e.process),
            stackOrder: e.process.stackOrder,
        })),
        c = 0,
        u = 0;
    for (let e of n) (c += T(e.gpu)), (u += T(e.vram));
    let d = new Map(n.map((e) => [e.process.pid, e.process.name])),
        m = n.slice().sort((e, t) => {
            let r = t.process.lastSampleAt - e.process.lastSampleAt;
            return 0 !== r ? r : e.process.stackOrder - t.process.stackOrder;
        });
    return (0, l.jsxs)("div", {
        className: v.yT,
        children: [
            (0, l.jsx)(i.E, {
                variant: "text-xxs/semibold",
                color: "text-muted",
                tag: "span",
                className: v.Xk,
                children: s,
            }),
            (0, l.jsxs)("div", {
                className: v.Ss,
                children: [
                    (0, l.jsx)(O, {
                        title: "Utilization",
                        value: _(c),
                        series: a,
                        yFloor: 100,
                        formatMax: (e) => `${Math.round(e)}%`,
                        formatValue: _,
                        labelByKey: d,
                    }),
                    (0, l.jsx)(O, {
                        title: "VRAM",
                        value: U(u),
                        series: o,
                        yFloor: 0,
                        formatMax: U,
                        formatValue: U,
                        labelByKey: d,
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: v.o1,
                children: m.map((e) => (0, l.jsx)(B, { entry: e, color: r(e.process) }, e.process.pid)),
            }),
        ],
    });
}
function B(e) {
    let { entry: t, color: r } = e,
        { process: s } = t;
    return (0, l.jsxs)("div", {
        className: v.eI,
        children: [
            (0, l.jsx)("div", { className: v.A9, style: { background: r } }),
            s.isDiscord
                ? (0, l.jsx)(m.p, { size: "sm", className: v.Gt })
                : (0, l.jsx)(p.A, {
                      game: s.detectableGame,
                      size: p.M.SMALL,
                      allowUnknownGameIcon: !0,
                      className: v.Gt,
                  }),
            (0, l.jsx)("span", { className: v.V1, children: s.name }),
            (0, l.jsxs)("span", { className: v.rz, children: [_(T(t.gpu)), " \xb7 ", U(T(t.vram))] }),
        ],
    });
}
function $(e) {
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
                            D.Ay.getVisibleRunningGames()))
                                c.push({ pid: e.pid, isDiscord: !1, game: e });
                            Promise.all(
                                c.map((e) =>
                                    P.Ay.GetSystemGpuStats(e.pid)
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
                                                detectableGame: R.A.findGame(l) ?? null,
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
                                            null == e && ((e = { gpu: new E(300), vram: new E(300) }), c.set(r, e)),
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
        n = (0, f.r)(h.A.unsafe_rawColors.BRAND_500).hsl(),
        a = [
            (0, f.r)(h.A.unsafe_rawColors.RED_400).hsl(),
            (0, f.r)(h.A.unsafe_rawColors.ORANGE_400).hsl(),
            (0, f.r)(h.A.unsafe_rawColors.YELLOW_400).hsl(),
            (0, f.r)(h.A.unsafe_rawColors.GREEN_400).hsl(),
            (0, f.r)(h.A.unsafe_rawColors.TEAL_400).hsl(),
            (0, f.r)(h.A.unsafe_rawColors.BLUE_400).hsl(),
        ];
    function i(e) {
        return e.isDiscord || e.colorIndex < 0 ? n : a[e.colorIndex % a.length];
    }
    return t && 0 !== r.length
        ? (0, l.jsx)(l.Fragment, { children: r.map((e) => (0, l.jsx)(G, { view: e, colorFor: i }, e.adapterName)) })
        : null;
}
let z = [d.M.Renderer, d.M.Main, d.M.GPU, d.M.Utility, d.M.Crashpad, d.M.Unknown];
function L(e) {
    return (e.wss_priv_kb ?? e.wss_kb ?? 0) / 1024;
}
function W() {
    let e = (0, a.bG)([o.default], () => o.default.getCurrentUser()?.isStaff() ?? !1),
        [t, r] = s.useState(null),
        [n, d] = s.useState(null),
        [m, h] = s.useState([]),
        [f, p] = s.useState(() => new Set()),
        x = s.useRef(null),
        [g, j] = s.useState(320),
        [b] = s.useState(() => new E(120)),
        [y] = s.useState(() => new Map()),
        [k] = s.useState(() => new E(120)),
        [A, D] = s.useState(null),
        R = s.useRef(0),
        [C] = s.useState(() => new w());
    if (
        (s.useEffect(() => {
            let e = x.current;
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
                                (t = null), j(r);
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
                (R.current += 1), (e = requestAnimationFrame(t));
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
                        i = u.A.getCurrentCPUUsagePercent() ?? 0;
                    r(performance.now() - a);
                    let o = performance.now(),
                        c = u.A.getMemoryUsageElectronProcessTypeDetails();
                    if ((d(performance.now() - o), b.push(i, n), null != c))
                        for (let e of Object.keys(c)) {
                            let t = c[e];
                            if (null == t) continue;
                            let r = y.get(e);
                            null == r && ((r = new E(120)), y.set(e, r)), r.push(L(t), n);
                        }
                    let m = performance.now(),
                        h = (m - t) / 1e3;
                    if (l && h > 0) {
                        let e = R.current / h;
                        D(e), k.push(e, n);
                    }
                    (R.current = 0), (t = m), (l = !0), setTimeout(s, 1e3);
                })(),
                () => {
                    (e = !0), s?.();
                }
            );
        }, [b, y, k]),
        !e)
    )
        return null;
    let P = u.A.getCurrentCPUUsagePercent() ?? 0,
        F = u.A.getMemoryUsageElectronProcessTypeDetails() ?? {},
        T = z.reduce((e, t) => {
            let r = F[t];
            return null != r ? e + L(r) : e;
        }, 0);
    function U(e) {
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
    let G = m.filter((e) => !f.has(e.kind)).map((e) => ({ time: e.time, color: O(e.kind) })),
        B = (0, c.isWindows)() && c.isPlatformEmbedded;
    return (0, l.jsx)(M, {
        store: C,
        children: (0, l.jsxs)("div", {
            className: v.kL,
            children: [
                (0, l.jsx)("h1", { className: v.W, children: "Performance" }),
                (0, l.jsx)($, { enabled: B }),
                (0, l.jsxs)("div", {
                    ref: x,
                    className: v.yT,
                    children: [
                        (0, l.jsxs)("div", {
                            className: v.x_,
                            children: [
                                (0, l.jsx)("span", { className: v.AM, children: "CPU" }),
                                (0, l.jsx)("span", { className: v.rh, children: U(t) }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: v.uW,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: v.wx,
                                    children: [
                                        (0, l.jsx)("span", { className: v.DD, children: "Utilization" }),
                                        (0, l.jsx)(i.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-strong",
                                            tag: "span",
                                            className: v.Uq,
                                            children: _(P),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(N, {
                                    dataPoints: b,
                                    width: g,
                                    height: 80,
                                    windowMs: 12e4,
                                    markers: G,
                                    label: "Utilization",
                                    format: _,
                                }),
                                (0, l.jsx)("div", {
                                    className: v.KP,
                                    children: [
                                        { kind: 2, label: "Major GC" },
                                        { kind: 4, label: "Incremental" },
                                        { kind: 1, label: "Minor GC" },
                                        { kind: 8, label: "Weak-cb" },
                                    ].map((e) => {
                                        let { kind: t, label: r } = e,
                                            s = !f.has(t);
                                        return (0, l.jsxs)(
                                            "button",
                                            {
                                                type: "button",
                                                className: v.$d,
                                                "aria-pressed": s,
                                                title: `${s ? "Hide" : "Show"} ${r} markers`,
                                                onClick: () => {
                                                    p((e) => {
                                                        let r = new Set(e);
                                                        return r.has(t) ? r.delete(t) : r.add(t), r;
                                                    });
                                                },
                                                children: [
                                                    (0, l.jsx)("div", { className: v.AW, style: { background: O(t) } }),
                                                    (0, l.jsx)("span", { className: v.IF, children: r }),
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
                    className: v.yT,
                    children: [
                        (0, l.jsxs)("div", {
                            className: v.x_,
                            children: [
                                (0, l.jsx)("span", { className: v.AM, children: "Memory" }),
                                (0, l.jsx)("span", { className: v.rh, children: U(n) }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: v.V$,
                            children: [
                                (0, l.jsx)("span", { className: v.j5, children: "Total" }),
                                (0, l.jsx)("span", { className: v.om, children: `${T.toFixed(0)} MB` }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: v.kK,
                            children: z.map((e) => {
                                let t = y.get(e);
                                if (null == t || 0 === t.length) return null;
                                let r = F[e],
                                    s = null != r ? L(r) : 0,
                                    n = r?.wss_priv_kb != null;
                                return (0, l.jsx)(
                                    S,
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
                    className: v.yT,
                    children: [
                        (0, l.jsx)("div", {
                            className: v.x_,
                            children: (0, l.jsx)("span", { className: v.AM, children: "Frame Rate" }),
                        }),
                        (0, l.jsx)(S, {
                            title: "Discord (main window)",
                            value: null != A ? `${Math.round(A)} FPS` : "",
                            points: k,
                            format: (e) => `${Math.round(e)} FPS`,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function q(e) {
    let { windowKey: t } = e;
    return (0, l.jsx)(n.A, { withTitleBar: !0, windowKey: t, title: "Discord Stats", children: (0, l.jsx)(W, {}) });
}
