(l.r(t), l.d(t, { default: () => H }));
var r = l(477900),
    s = l(582128),
    n = l(979186);
l(321073);
var a = l(17928),
    i = l(364522),
    o = l(834730),
    c = l(287809),
    u = l(723702),
    d = l(321034),
    m = l(832213);
(l(134528), l(947204));
var h = l(111159),
    f = l(661531),
    p = l(602853),
    x = l(769015),
    g = l(454908);
(l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162));
var w = l(229659),
    v = l(257327);
class M {
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
        ((this.pinnedState = !this.pinnedState), (this.value = e), this.emit());
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
let j = s.createContext(null);
function y(e) {
    let { store: t, children: l } = e;
    return (0, r.jsx)(j.Provider, { value: t, children: l });
}
function b() {
    return s.useContext(j);
}
function N(e, t) {
    var l;
    let r = e.currentTarget.getBoundingClientRect();
    return r.width <= 0
        ? null
        : ((l = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width))), Date.now() - (1 - l) * t);
}
function k(e) {
    let t,
        l,
        n,
        a,
        { rows: i, format: o, bucketMs: c } = e,
        u = b(),
        d =
            ((t = s.useCallback((e) => u?.subscribe(e) ?? (() => {}), [u])),
            (l = s.useCallback(() => u?.time ?? null, [u])),
            s.useSyncExternalStore(t, l)),
        m =
            ((n = s.useCallback((e) => u?.subscribe(e) ?? (() => {}), [u])),
            (a = s.useCallback(() => u?.pinned ?? !1, [u])),
            s.useSyncExternalStore(n, a));
    if (null == d) return null;
    let h = i
        .map((e) => ({
            row: e,
            value: (function (e, t, l) {
                let r = null;
                for (let s = 0; s < e.length; s++) {
                    let n = e.at(s);
                    if (null != n) {
                        if (n.time > t) break;
                        r = null != l && t - n.time > l ? null : n.value;
                    }
                }
                return r;
            })(e.series, d, c),
        }))
        .filter((e) => null != e.value && (null == c || e.value > 0));
    return 0 === h.length
        ? null
        : (0, r.jsxs)("div", {
              className: v.BN,
              "aria-hidden": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: v.UM,
                      children: [
                          new Date(d).toLocaleTimeString(),
                          m && (0, r.jsx)("span", { className: v.gE, children: "pinned" }),
                      ],
                  }),
                  h.map((e) => {
                      let { row: t, value: l } = e;
                      return (0, r.jsxs)(
                          "div",
                          {
                              className: v.BM,
                              children: [
                                  (0, r.jsx)("span", { className: v.Rd, style: { background: t.color } }),
                                  (0, r.jsx)("span", { className: v.P_, children: t.label }),
                                  (0, r.jsx)("span", { className: v.kx, children: o(l) }),
                              ],
                          },
                          t.key,
                      );
                  }),
              ],
          });
}
function A(e) {
    let { dataPoints: t, width: l, height: s, windowMs: n, label: a, format: i, markers: o } = e,
        c = b(),
        u = (0, p.r)(f.A.unsafe_rawColors.BRAND_500).hsl();
    return (0, r.jsxs)("div", {
        className: v.jm,
        children: [
            (0, r.jsx)(w.A, {
                dataPoints: t,
                width: l,
                height: s,
                windowMs: n,
                markers: o,
                hoverSource: c ?? void 0,
                onHoverTime: null != c ? (e) => c.set(e) : void 0,
                onHoverClick: null != c ? (e) => c.togglePin(e) : void 0,
            }),
            (0, r.jsx)(k, { rows: [{ key: a, label: a, color: u, series: t }], format: i }),
        ],
    });
}
let S = 1e3 / 30;
function _(e) {
    let t = s.useRef(null),
        l = (0, p.r)(f.A.colors.BACKGROUND_BASE_LOW).hsl(),
        n = (0, p.r)(f.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        a = (0, p.r)(f.A.colors.TEXT_DEFAULT).hsl(),
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
            r = 0;
        return (
            (e = requestAnimationFrame(function s(u) {
                if (((e = requestAnimationFrame(s)), u - r < S)) return;
                r = u;
                let d = t.current;
                if (null == d) return;
                let m = d.getContext("2d");
                if (null == m) return;
                let { series: h, windowMs: f, yFloor: p, formatMax: x } = i.current,
                    g = window.devicePixelRatio ?? 1,
                    w = d.width,
                    v = d.height;
                (m.setTransform(1, 0, 0, 1, 0, 0), (m.fillStyle = l), m.fillRect(0, 0, w, v));
                let M = h.slice().sort((e, t) => e.stackOrder - t.stackOrder),
                    j = M.length,
                    y = Date.now(),
                    b = Math.max(1, Math.round(f / 1e3)),
                    N = y - 1e3 * b,
                    k = j * b;
                o.current.length < k && (o.current = new Float64Array(k));
                let A = o.current;
                A.fill(0, 0, k);
                let _ = 0;
                for (let e = 0; e < j; e++) {
                    let t = M[e].buffer,
                        l = t.length;
                    for (let r = 0; r < l; r++) {
                        let l = t.at(r);
                        if (null == l) continue;
                        let s = Math.floor((l.time - N) / 1e3);
                        s < 0 || s >= b || (A[e * b + s] = l.value);
                    }
                }
                for (let e = 0; e < b; e++) {
                    let t = 0;
                    for (let l = 0; l < j; l++) t += A[l * b + e];
                    t > _ && (_ = t);
                }
                let D = Math.max(
                        p,
                        (function (e) {
                            if (e <= 0) return 0;
                            let t = Math.pow(10, Math.floor(Math.log10(e))),
                                l = e / t;
                            return (l <= 1 ? 1 : l <= 2 ? 2 : l <= 5 ? 5 : 10) * t;
                        })(_),
                        1,
                    ),
                    R = c.current;
                ((R = R <= 0 ? D : R + (D - R) * 0.2) < Math.max(p, 1) && (R = Math.max(p, 1)), (c.current = R));
                let C = Math.ceil(11 * g) + Math.round(4 * g),
                    P = Math.max(1, v - C),
                    E = Math.max(1, Math.ceil(w / b));
                for (let e = 0; e < b; e++) {
                    let t = Math.floor((e / b) * w),
                        l = v;
                    for (let r = 0; r < j; r++) {
                        let s = A[r * b + e];
                        if (s <= 0) continue;
                        let n = (s / R) * P;
                        ((m.fillStyle = M[r].color), m.fillRect(t, l - n, E, n), (l -= n));
                    }
                }
                ((m.strokeStyle = n),
                    (m.lineWidth = g),
                    m.beginPath(),
                    m.moveTo(0, C),
                    m.lineTo(w, C),
                    m.stroke(),
                    (m.fillStyle = a),
                    (m.font = `${11 * g}px gg sans`),
                    (m.textAlign = "right"),
                    (m.textBaseline = "top"),
                    m.fillText(x(R), w - Math.round(4 * g), Math.round(2 * g)),
                    (function (e, t, l) {
                        let { time: r, now: s, windowMs: n, color: a, bottomReserve: i } = l;
                        if (null == r) return;
                        let o = 1 - (s - r) / n;
                        if (o < 0 || o > 1) return;
                        let c = window.devicePixelRatio ?? 1,
                            u = Math.round(t.width * o);
                        (e.save(),
                            (e.strokeStyle = a),
                            (e.lineWidth = c),
                            e.beginPath(),
                            e.moveTo(u, 0),
                            e.lineTo(u, Math.max(0, t.height - i)),
                            e.stroke(),
                            e.restore());
                    })(m, d, {
                        time: i.current.hoverStore?.time ?? null,
                        now: y,
                        windowMs: f,
                        color: a,
                        bottomReserve: 0,
                    }));
            })),
            () => cancelAnimationFrame(e)
        );
    }, [l, n, a]);
    let { hoverStore: h, windowMs: x } = e,
        g =
            null != h
                ? (e) => {
                      let t;
                      null != (t = N(e, x)) && h.set(t);
                  }
                : void 0,
        w = null != h ? () => h.set(null) : void 0,
        M =
            null != h
                ? (e) => {
                      let t;
                      null != (t = N(e, x)) && h.togglePin(t);
                  }
                : void 0;
    return (0, r.jsx)("canvas", {
        ref: t,
        width: d,
        height: m,
        style: { width: e.width, height: e.height },
        className: v.Ji,
        onPointerMove: g,
        onPointerLeave: w,
        onPointerDown: M,
    });
}
function D(e) {
    let { title: t, value: l, points: n, format: a, children: i } = e,
        c = s.useRef(null),
        [u, d] = s.useState(320);
    return (
        s.useEffect(() => {
            let e = c.current;
            if (null == e) return;
            let t = null,
                l = 0,
                r = new ResizeObserver((e) => {
                    let [r] = e,
                        s = Math.max(80, Math.min(4096, Math.floor(r.contentRect.width)));
                    s === l ||
                        ((l = s),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                ((t = null), d(l));
                            })));
                });
            return (
                r.observe(e),
                () => {
                    (null != t && cancelAnimationFrame(t), r.disconnect());
                }
            );
        }, []),
        (0, r.jsxs)("div", {
            ref: c,
            className: v.uW,
            children: [
                (0, r.jsxs)("div", {
                    className: v.wx,
                    children: [
                        (0, r.jsx)("span", { className: v.DD, children: t }),
                        (0, r.jsx)(o.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            tag: "span",
                            className: v.Uq,
                            children: l,
                        }),
                    ],
                }),
                (0, r.jsx)(A, {
                    dataPoints: n,
                    width: u,
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
function R(e) {
    return `${e.toFixed(1)}%`;
}
var C = l(952818),
    P = l(760751),
    E = l(290805),
    F = l(19575);
class U {
    storage;
    head = 0;
    count = 0;
    capacity;
    constructor(e) {
        ((this.capacity = e), (this.storage = Array(e)));
    }
    push(e, t) {
        ((this.storage[this.head] = { value: e, time: t }),
            (this.head = (this.head + 1) % this.capacity),
            this.count < this.capacity && this.count++);
    }
    at(e) {
        if (!(e < 0) && !(e >= this.count))
            return this.count < this.capacity ? this.storage[e] : this.storage[(this.head + e) % this.capacity];
    }
    get length() {
        return this.count;
    }
}
let T =
    {
        stable: "Discord.exe",
        ptb: "DiscordPTB.exe",
        canary: "DiscordCanary.exe",
        development: "DiscordDevelopment.exe",
    }[E.y] ?? "Discord.exe";
function O(e) {
    return e.at(e.length - 1)?.value ?? 0;
}
function B(e) {
    return `${Math.round(e)} MB`;
}
function G(e) {
    let { title: t, value: l, series: n, yFloor: a, formatMax: i, formatValue: c, labelByKey: u } = e,
        d = s.useRef(null),
        [m, h] = s.useState(320),
        f = b(),
        p = n
            .slice()
            .sort((e, t) => t.stackOrder - e.stackOrder)
            .map((e) => ({ key: e.key, label: u.get(e.key) ?? String(e.key), color: e.color, series: e.buffer }));
    return (
        s.useEffect(() => {
            let e = d.current;
            if (null == e) return;
            let t = null,
                l = 0,
                r = new ResizeObserver((e) => {
                    let [r] = e,
                        s = Math.max(80, Math.min(4096, Math.floor(r.contentRect.width)));
                    s === l ||
                        ((l = s),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                ((t = null), h(l));
                            })));
                });
            return (
                r.observe(e),
                () => {
                    (null != t && cancelAnimationFrame(t), r.disconnect());
                }
            );
        }, []),
        (0, r.jsxs)("div", {
            ref: d,
            className: v.uW,
            children: [
                (0, r.jsxs)("div", {
                    className: v.wx,
                    children: [
                        (0, r.jsx)("span", { className: v.DD, children: t }),
                        (0, r.jsx)(o.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            tag: "span",
                            className: v.Uq,
                            children: l,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: v.jm,
                    children: [
                        (0, r.jsx)(_, {
                            series: n,
                            width: m,
                            height: 80,
                            windowMs: 3e5,
                            yFloor: a,
                            formatMax: i,
                            hoverStore: f ?? void 0,
                        }),
                        (0, r.jsx)(k, { rows: p, format: c, bucketMs: 1e3 }),
                    ],
                }),
            ],
        })
    );
}
function $(e) {
    let { view: t, colorFor: l } = e,
        { adapterName: s, entries: n } = t,
        a = n.map((e) => ({
            key: e.process.pid,
            buffer: e.gpu,
            color: l(e.process),
            stackOrder: e.process.stackOrder,
        })),
        i = n.map((e) => ({
            key: e.process.pid,
            buffer: e.vram,
            color: l(e.process),
            stackOrder: e.process.stackOrder,
        })),
        c = 0,
        u = 0;
    for (let e of n) ((c += O(e.gpu)), (u += O(e.vram)));
    let d = new Map(n.map((e) => [e.process.pid, e.process.name])),
        m = n.slice().sort((e, t) => {
            let l = t.process.lastSampleAt - e.process.lastSampleAt;
            return 0 !== l ? l : e.process.stackOrder - t.process.stackOrder;
        });
    return (0, r.jsxs)("div", {
        className: v.yT,
        children: [
            (0, r.jsx)(o.E, {
                variant: "text-xxs/semibold",
                color: "text-muted",
                tag: "span",
                className: v.Xk,
                children: s,
            }),
            (0, r.jsxs)("div", {
                className: v.Ss,
                children: [
                    (0, r.jsx)(G, {
                        title: "Utilization",
                        value: R(c),
                        series: a,
                        yFloor: 100,
                        formatMax: (e) => `${Math.round(e)}%`,
                        formatValue: R,
                        labelByKey: d,
                    }),
                    (0, r.jsx)(G, {
                        title: "VRAM",
                        value: B(u),
                        series: i,
                        yFloor: 0,
                        formatMax: B,
                        formatValue: B,
                        labelByKey: d,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: v.o1,
                children: m.map((e) => (0, r.jsx)(z, { entry: e, color: l(e.process) }, e.process.pid)),
            }),
        ],
    });
}
function z(e) {
    let { entry: t, color: l } = e,
        { process: s } = t,
        { data: n } = (0, g.I)(s.gameId);
    return (0, r.jsxs)("div", {
        className: v.eI,
        children: [
            (0, r.jsx)("div", { className: v.A9, style: { background: l } }),
            s.isDiscord
                ? (0, r.jsx)(h.p, { size: "sm", className: v.Gt })
                : (0, r.jsx)(x.A, { game: n, size: x.M.SMALL, allowUnknownGameIcon: !0, className: v.Gt }),
            (0, r.jsx)("span", { className: v.V1, children: s.name }),
            (0, r.jsxs)("span", { className: v.rz, children: [R(O(t.gpu)), " \xb7 ", B(O(t.vram))] }),
        ],
    });
}
function I(e) {
    let { enabled: t } = e,
        l = (function (e) {
            let [t, l] = s.useState([]),
                r = s.useRef(new Map()),
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
                            C.Ay.getVisibleRunningGames()))
                                c.push({ pid: e.pid, isDiscord: !1, game: e });
                            (Promise.all(
                                c.map((e) =>
                                    F.Ay.GetSystemGpuStats(e.pid)
                                        .catch(() => [])
                                        .then((t) => ({ target: e, adapters: t })),
                                ),
                            )
                                .then((e) => {
                                    if (s) return;
                                    let t = Date.now(),
                                        i = new Set(c.map((e) => e.pid)),
                                        o = new Map(r.current);
                                    for (let { target: l, adapters: r } of e) {
                                        let e = l.pid,
                                            s = o.get(e);
                                        if (null != s) o.set(e, { ...s, lastSampleAt: t });
                                        else if (l.isDiscord)
                                            o.set(e, {
                                                pid: e,
                                                isDiscord: !0,
                                                name: T,
                                                gameId: null,
                                                colorIndex: -1,
                                                stackOrder: -1,
                                                lastSampleAt: t,
                                            });
                                        else {
                                            let r = l.game,
                                                s = a.current++;
                                            o.set(e, {
                                                pid: e,
                                                isDiscord: !1,
                                                name: r.gameName ?? r.name ?? r.processName ?? `pid ${e}`,
                                                gameId: P.A.findGame(r)?.id ?? null,
                                                colorIndex: ((s % 6) + 6) % 6,
                                                stackOrder: s,
                                                lastSampleAt: t,
                                            });
                                        }
                                        let i = (function (e) {
                                            let t = new Map();
                                            for (let l of e) {
                                                let e = t.get(l.adapter_name);
                                                null == e
                                                    ? t.set(l.adapter_name, {
                                                          utilization_percent: l.utilization_percent,
                                                          memory_bytes: l.memory_bytes,
                                                      })
                                                    : ((e.utilization_percent = Math.max(
                                                          e.utilization_percent,
                                                          l.utilization_percent,
                                                      )),
                                                      (e.memory_bytes = Math.max(e.memory_bytes, l.memory_bytes)));
                                            }
                                            return t;
                                        })(r);
                                        if (0 === i.size) continue;
                                        let c = n.current.get(e);
                                        for (let [l, r] of (null == c && ((c = new Map()), n.current.set(e, c)), i)) {
                                            let e = c.get(l);
                                            (null == e && ((e = { gpu: new U(300), vram: new U(300) }), c.set(l, e)),
                                                e.gpu.push(r.utilization_percent, t),
                                                e.vram.push(r.memory_bytes / 1048576, t));
                                        }
                                    }
                                    for (let [e, l] of o)
                                        l.isDiscord ||
                                            i.has(e) ||
                                            !(t - l.lastSampleAt > 3e5) ||
                                            (o.delete(e), n.current.delete(e));
                                    for (let e of n.current.keys()) i.has(e) || o.has(e) || n.current.delete(e);
                                    ((r.current = o),
                                        l(
                                            (function (e, t) {
                                                let l = new Map();
                                                for (let r of e.values()) {
                                                    let e = t.get(r.pid);
                                                    if (null != e)
                                                        for (let [t, s] of e) {
                                                            let e = l.get(t);
                                                            (null == e && ((e = []), l.set(t, e)),
                                                                e.push({ process: r, gpu: s.gpu, vram: s.vram }));
                                                        }
                                                }
                                                return Array.from(l.entries())
                                                    .sort((e, t) => {
                                                        let [l] = e,
                                                            [r] = t;
                                                        return l.localeCompare(r);
                                                    })
                                                    .map((e) => {
                                                        let [t, l] = e;
                                                        return { adapterName: t, entries: l };
                                                    });
                                            })(o, n.current),
                                        ));
                                })
                                .catch(() => {}),
                                (t = setTimeout(e, 1e3)));
                        })(),
                        () => {
                            ((s = !0), null != t && clearTimeout(t));
                        }
                    );
                }, [e]),
                t
            );
        })(t),
        n = (0, p.r)(f.A.unsafe_rawColors.BRAND_500).hsl(),
        a = [
            (0, p.r)(f.A.unsafe_rawColors.RED_400).hsl(),
            (0, p.r)(f.A.unsafe_rawColors.ORANGE_400).hsl(),
            (0, p.r)(f.A.unsafe_rawColors.YELLOW_400).hsl(),
            (0, p.r)(f.A.unsafe_rawColors.GREEN_400).hsl(),
            (0, p.r)(f.A.unsafe_rawColors.TEAL_400).hsl(),
            (0, p.r)(f.A.unsafe_rawColors.BLUE_400).hsl(),
        ];
    function i(e) {
        return e.isDiscord || e.colorIndex < 0 ? n : a[e.colorIndex % a.length];
    }
    return t && 0 !== l.length
        ? (0, r.jsx)(r.Fragment, { children: l.map((e) => (0, r.jsx)($, { view: e, colorFor: i }, e.adapterName)) })
        : null;
}
let L = [m.M.Renderer, m.M.Main, m.M.GPU, m.M.Utility, m.M.Crashpad, m.M.Unknown],
    W = [m.M.Renderer, m.M.Main, m.M.GPU, m.M.Utility, m.M.Unknown];
function q(e) {
    return (e.wss_priv_kb ?? e.wss_kb ?? 0) / 1024;
}
function K(e) {
    return e.percent_cpu ?? 0;
}
function V() {
    let e = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.isStaff() ?? !1),
        [t, l] = s.useState(null),
        [n, m] = s.useState(null),
        [h, f] = s.useState([]),
        [p, x] = s.useState(() => new Set()),
        g = s.useRef(null),
        [w, j] = s.useState(320),
        [b] = s.useState(() => new U(120)),
        [N] = s.useState(() => new Map()),
        [k] = s.useState(() => new Map()),
        [S] = s.useState(() => new U(120)),
        [_, C] = s.useState(null),
        P = s.useRef(0),
        [E] = s.useState(() => new M());
    if (
        (s.useEffect(() => {
            let e = g.current;
            if (null == e) return;
            let t = null,
                l = 0,
                r = new ResizeObserver((e) => {
                    let [r] = e,
                        s = Math.max(320, Math.min(4096, Math.floor(r.contentRect.width)));
                    s === l ||
                        ((l = s),
                        null == t &&
                            (t = requestAnimationFrame(() => {
                                ((t = null), j(l));
                            })));
                });
            return (
                r.observe(e),
                () => {
                    (null != t && cancelAnimationFrame(t), r.disconnect());
                }
            );
        }, []),
        s.useEffect(() => {
            let e = requestAnimationFrame(function t() {
                ((P.current += 1), (e = requestAnimationFrame(t)));
            });
            return () => cancelAnimationFrame(e);
        }, []),
        s.useEffect(() => {
            let e = !1,
                t = performance.now(),
                r = !1,
                s = window.DiscordNative?.gcEvents?.addGCListener?.((t) => {
                    let { timestamp: l, kind: r } = t;
                    e || f((e) => [...e.filter((e) => e.time > l - 12e4), { time: l, kind: r }]);
                });
            return (
                !(function s() {
                    if (e) return;
                    let n = Date.now(),
                        a = performance.now(),
                        i = d.A.getCurrentCPUUsagePercent() ?? 0,
                        o = d.A.getCpuUsageElectronProcessTypeDetails();
                    l(performance.now() - a);
                    let c = performance.now(),
                        u = d.A.getMemoryUsageElectronProcessTypeDetails();
                    if ((m(performance.now() - c), b.push(i, n), null != o))
                        for (let e of Object.keys(o)) {
                            let t = o[e];
                            if (null == t) continue;
                            let l = N.get(e);
                            (null == l && ((l = new U(120)), N.set(e, l)), l.push(K(t), n));
                        }
                    if (null != u)
                        for (let e of Object.keys(u)) {
                            let t = u[e];
                            if (null == t) continue;
                            let l = k.get(e);
                            (null == l && ((l = new U(120)), k.set(e, l)), l.push(q(t), n));
                        }
                    let h = performance.now(),
                        f = (h - t) / 1e3;
                    if (r && f > 0) {
                        let e = P.current / f;
                        (C(e), S.push(e, n));
                    }
                    ((P.current = 0), (t = h), (r = !0), setTimeout(s, 1e3));
                })(),
                () => {
                    ((e = !0), s?.());
                }
            );
        }, [b, N, k, S]),
        !e)
    )
        return null;
    let F = d.A.getCurrentCPUUsagePercent() ?? 0,
        T = d.A.getCpuUsageElectronProcessTypeDetails() ?? {},
        O = d.A.getMemoryUsageElectronProcessTypeDetails() ?? {},
        B = L.reduce((e, t) => {
            let l = O[t];
            return null != l ? e + q(l) : e;
        }, 0);
    function G(e) {
        return null != e ? `${e.toFixed(1)}ms` : "";
    }
    function $(e) {
        return 2 === e
            ? "rgba(237, 66, 69, 0.9)"
            : 4 === e
              ? "rgba(59, 165, 93, 0.9)"
              : 8 === e
                ? "rgba(150, 150, 150, 0.6)"
                : "rgba(250, 168, 26, 0.75)";
    }
    let z = h.filter((e) => !p.has(e.kind)).map((e) => ({ time: e.time, color: $(e.kind) })),
        V = (0, u.isWindows)() && u.isPlatformEmbedded;
    return (0, r.jsx)(y, {
        store: E,
        children: (0, r.jsxs)(i.Ar, {
            className: v.kL,
            children: [
                (0, r.jsx)("h1", { className: v.W, children: "Performance" }),
                (0, r.jsx)(I, { enabled: V }),
                (0, r.jsxs)("div", {
                    ref: g,
                    className: v.yT,
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.x_,
                            children: [
                                (0, r.jsx)("span", { className: v.AM, children: "CPU" }),
                                (0, r.jsx)("span", { className: v.rh, children: G(t) }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: v.uW,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: v.wx,
                                    children: [
                                        (0, r.jsx)("span", { className: v.DD, children: "Utilization" }),
                                        (0, r.jsx)(o.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-strong",
                                            tag: "span",
                                            className: v.Uq,
                                            children: R(F),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(A, {
                                    dataPoints: b,
                                    width: w,
                                    height: 80,
                                    windowMs: 12e4,
                                    markers: z,
                                    label: "Utilization",
                                    format: R,
                                }),
                                (0, r.jsx)("div", {
                                    className: v.KP,
                                    children: [
                                        { kind: 2, label: "Major GC" },
                                        { kind: 4, label: "Incremental" },
                                        { kind: 1, label: "Minor GC" },
                                        { kind: 8, label: "Weak-cb" },
                                    ].map((e) => {
                                        let { kind: t, label: l } = e,
                                            s = !p.has(t);
                                        return (0, r.jsxs)(
                                            "button",
                                            {
                                                type: "button",
                                                className: v.$d,
                                                "aria-pressed": s,
                                                title: `${s ? "Hide" : "Show"} ${l} markers`,
                                                onClick: () => {
                                                    x((e) => {
                                                        let l = new Set(e);
                                                        return (l.has(t) ? l.delete(t) : l.add(t), l);
                                                    });
                                                },
                                                children: [
                                                    (0, r.jsx)("div", { className: v.AW, style: { background: $(t) } }),
                                                    (0, r.jsx)("span", { className: v.IF, children: l }),
                                                ],
                                            },
                                            l,
                                        );
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: v.kK,
                            children: W.map((e) => {
                                let t = N.get(e);
                                if (null == t || 0 === t.length) return null;
                                let l = T[e],
                                    s = null != l ? K(l) : 0;
                                return (0, r.jsx)(D, { title: e, value: R(s), points: t, format: R }, e);
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: v.yT,
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.x_,
                            children: [
                                (0, r.jsx)("span", { className: v.AM, children: "Memory" }),
                                (0, r.jsx)("span", { className: v.rh, children: G(n) }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: v.V$,
                            children: [
                                (0, r.jsx)("span", { className: v.j5, children: "Total" }),
                                (0, r.jsx)("span", { className: v.om, children: `${B.toFixed(0)} MB` }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: v.kK,
                            children: L.map((e) => {
                                let t = k.get(e);
                                if (null == t || 0 === t.length) return null;
                                let l = O[e],
                                    s = null != l ? q(l) : 0,
                                    n = l?.wss_priv_kb != null;
                                return (0, r.jsx)(
                                    D,
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
                (0, r.jsxs)("div", {
                    className: v.yT,
                    children: [
                        (0, r.jsx)("div", {
                            className: v.x_,
                            children: (0, r.jsx)("span", { className: v.AM, children: "Frame Rate" }),
                        }),
                        (0, r.jsx)(D, {
                            title: "Discord (main window)",
                            value: null != _ ? `${Math.round(_)} FPS` : "",
                            points: S,
                            format: (e) => `${Math.round(e)} FPS`,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function H(e) {
    let { windowKey: t } = e;
    return (0, r.jsx)(n.A, { withTitleBar: !0, windowKey: t, title: "Discord Stats", children: (0, r.jsx)(V, {}) });
}
