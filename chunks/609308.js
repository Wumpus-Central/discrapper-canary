l.d(t, { A: () => J }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(735438),
    c = l(702841),
    o = l(834730),
    u = l(408278),
    d = l(461150),
    m = l(782134),
    h = l(113494),
    f = l(898196),
    p = l(187322),
    x = l(765671),
    v = l(531685);
l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var g = l(661531),
    j = l(602853),
    b = l(602674),
    y = l(696016),
    C = l(335416),
    E = l(664875);
let A = new Map(),
    N = a.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: r, className: c } = e,
            o = a.useRef(null),
            { ref: u, width: d, height: m } = (0, x.Ay)(),
            [h, f] = a.useState(null),
            p = (0, j.r)(g.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (a.useEffect(
            () => (
                (o.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    o.current?.terminate();
                }
            ),
            [],
        ),
        a.useEffect(() => {
            if (0 === d || 0 === i.length || null == o.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${d}`,
                l = A.get(e);
            if (null != l) return void f(l.waveform);
            let n = o.current,
                a = !1;
            function s(t) {
                if (a) return;
                let { waveform: l, error: n } = t.data;
                null != n ? y.nx.error("Failed to load waveform:", n) : (A.set(e, { waveform: l }), f(l));
            }
            return (
                n.addEventListener("message", s),
                (async function () {
                    try {
                        let e = (0, b.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (a) return;
                        let l = [],
                            s = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let n = new Float32Array(e.getChannelData(l));
                                t.push(n), s.push(n.buffer);
                            }
                            l.push(t);
                        }
                        n.postMessage({ trackChannels: l, width: d }, s);
                    } catch (e) {
                        a || y.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (a = !0), n.removeEventListener("message", s);
                }
            );
        }, [i, t, d]),
        a.useEffect(() => {
            if (null == u.current || null == h || (d ?? 0) === 0 || (m ?? 0) === 0) return;
            let e = u.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: n } = e,
                a = l / h.length,
                i = -(a * (C.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, n), (t.fillStyle = p);
            for (let e = 0; e < h.length; e++) {
                let l = h[e] * n,
                    s = e * a + i;
                t.fillRect(s, n, a - i, -l);
            }
        }, [p, d, u, m, h]),
        0 === i.length)
            ? null
            : (0, n.jsx)("div", {
                  className: s()(E.k, c),
                  children: (0, n.jsx)("canvas", {
                      className: E.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
var k = l(584794),
    w = l(362081),
    R = l(343032),
    T = l(713608),
    L = l(17928),
    I = l(459192),
    O = l(565645),
    D = l(287809),
    M = l(562153),
    _ = l(372684),
    S = l(260612),
    P = l(953727),
    G = l(16590),
    U = l(375708),
    z = l(995469);
function B(e) {
    let { icon: t, title: l, body: a, position: i } = e;
    return (0, n.jsx)(I.u, {
        title: l,
        body: a,
        position: "top",
        children: (0, n.jsx)("div", {
            className: z.H,
            style: { left: `${i}%` },
            children: (0, n.jsx)(t, { size: "refresh_sm", color: g.A.colors.ICON_DEFAULT }),
        }),
    });
}
let $ = {
    [_.Gy.LAUGHTER]: { icon: R.i, title: G.default.bTC23D },
    [_.Gy.SHOUTING]: {
        icon: function (e) {
            let {
                    size: t = "md",
                    width: l,
                    height: a,
                    color: i = g.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: s = "",
                    ...r
                } = e,
                c = (0, S.J)(t),
                o = c?.width ?? l,
                u = c?.height ?? a,
                d = "string" == typeof i ? i : i.css;
            return (0, n.jsxs)("svg", {
                ...(0, P.A)(r),
                width: o,
                height: u,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, n.jsx)("path", {
                        d: "M8.00002 8.00033C7.30688 8.00033 6.73728 8.79367 6.67277 9.80803C7.07947 9.93174 7.5283 10.0003 8.00002 10.0003C8.47174 10.0003 8.92057 9.93174 9.32727 9.80803C9.26276 8.79367 8.69315 8.00033 8.00002 8.00033Z",
                        fill: d,
                        className: s,
                    }),
                    (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15.3334 8.00033C15.3334 12.0504 12.0502 15.3337 8.00008 15.3337C3.94999 15.3337 0.666748 12.0504 0.666748 8.00033C0.666748 3.95024 3.94999 0.666992 8.00008 0.666992C12.0502 0.666992 15.3334 3.95024 15.3334 8.00033ZM3.4038 4.36885C3.56846 4.03953 3.9689 3.90605 4.29822 4.07071L6.29822 5.07071C6.52408 5.18364 6.66675 5.41448 6.66675 5.66699C6.66675 5.91951 6.52408 6.15035 6.29822 6.26328L4.29822 7.26328C3.9689 7.42794 3.56846 7.29445 3.4038 6.96514C3.23914 6.63582 3.37262 6.23537 3.70194 6.07071L4.50937 5.66699L3.70194 5.26328C3.37262 5.09862 3.23914 4.69817 3.4038 4.36885ZM11.7019 4.07071C12.0313 3.90605 12.4317 4.03953 12.5964 4.36885C12.761 4.69817 12.6275 5.09862 12.2982 5.26328L11.4908 5.66699L12.2982 6.07071C12.6275 6.23537 12.761 6.63582 12.5964 6.96514C12.4317 7.29445 12.0313 7.42794 11.7019 7.26328L9.70194 6.26328C9.47608 6.15035 9.33341 5.91951 9.33341 5.66699C9.33341 5.41448 9.47608 5.18364 9.70194 5.07071L11.7019 4.07071ZM10.6667 10.0003C10.6667 11.8413 9.47284 13.3337 8.00008 13.3337C6.52732 13.3337 5.33341 11.8413 5.33341 10.0003C5.33341 8.15938 6.52732 6.66699 8.00008 6.66699C9.47284 6.66699 10.6667 8.15938 10.6667 10.0003Z",
                        fill: d,
                        className: s,
                    }),
                ],
            });
        },
        title: G.default["3gqpuo"],
    },
};
function H(e, t, l) {
    let { icon: a, title: i } = $[e];
    return (0, n.jsx)(
        B,
        { icon: a, title: U.intl.string(i), body: U.intl.string(G.default["ry+jxm"]), position: l },
        t,
    );
}
function V(e) {
    let { signal: t, guildId: l, position: a } = e,
        i = (0, L.bG)([D.default], () => D.default.getUser(t.userId)),
        s = (0, M.tx)(l, null, i);
    return (0, n.jsx)(I.u, {
        title: t.name,
        body: s,
        position: "top",
        children: (0, n.jsx)("div", {
            className: z.H,
            style: { left: `${a}%` },
            children: (0, n.jsx)(O.A, {
                emojiId: t.emojiId ?? null,
                emojiName: t.emojiName ?? null,
                animated: t.emojiAnimated,
                size: "reaction",
            }),
        }),
    });
}
let F = a.memo(function (e) {
    let { clip: t, videoLength: l } = e,
        i = t.audioEvents,
        s = null != i,
        r = a.useMemo(
            () =>
                s
                    ? t.timeline.filter((e) => {
                          var t;
                          return (t = e.signal.type) !== _.Gy.LAUGHTER && t !== _.Gy.SHOUTING;
                      })
                    : (function (e) {
                          let t = e
                                  .filter((e) => e.signal.type === _.Gy.LAUGHTER && e.signal.confidence > 0.8)
                                  .sort((e, t) => e.timestamp - t.timestamp),
                              l = new Set(),
                              n = 0;
                          for (let e = 1; e <= t.length; e++)
                              (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                                  (e - n >= 2 && l.add(t[e - 1]), (n = e));
                          return e.filter((e) => e.signal.type !== _.Gy.LAUGHTER || l.has(e));
                      })(t.timeline),
            [t.timeline, s],
        );
    function c(e) {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return n < 0 || n > l ? null : (n / l) * 100;
    }
    return [
        ...(s
            ? i.map(function (e, t) {
                  let l = c(e.peakMs);
                  return null == l ? null : H(e.type, `audio-${e.peakMs}-${e.type}-${t}`, l);
              })
            : []),
        ...r.map(function (e) {
            if (e.signal.hiddenFromTimeline) return null;
            let l = c(e.timestamp);
            if (null == l) return null;
            let a = `${e.timestamp}-${e.signal.type}`;
            switch (e.signal.type) {
                case _.Gy.LAUGHTER:
                    return H(_.Gy.LAUGHTER, a, l);
                case _.Gy.SHOUTING:
                    return H(_.Gy.SHOUTING, a, l);
                case _.Gy.GAME_EVENT:
                    return (0, n.jsx)(
                        B,
                        {
                            icon: T.q,
                            title: e.signal.title ?? "",
                            body: U.intl.string(G.default["347DBb"]),
                            position: l,
                        },
                        a,
                    );
                case _.Gy.SOUNDBOARD:
                    return (0, n.jsx)(V, { signal: e.signal, guildId: t.guildId, position: l }, a);
                default:
                    return null;
            }
        }),
    ];
});
var K = l(698269);
let Z = a.memo(function (e) {
    let { videoLength: t, clip: l, onMouseDown: i } = e,
        { timeNotches: s, subNotches: r } = a.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let l = [],
                n = t / 6;
            e =
                n <= 1
                    ? 1
                    : n <= 2
                      ? 2
                      : n <= 5
                        ? 5
                        : n <= 10
                          ? 10
                          : n <= 15
                            ? 15
                            : n <= 20
                              ? 20
                              : n <= 30
                                ? 30
                                : 10 * Math.round(n / 10);
            for (let n = 0; n <= t; n += e) {
                let e = (n / t) * 100;
                l.push({ time: n, position: e });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) && l.push({ time: t, position: 100 });
            let a = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    a.push({ position: l });
                }
            return { timeNotches: l, subNotches: a };
        }, [t]);
    return (0, n.jsx)("div", {
        className: K.ZX,
        onMouseDown: i,
        children: (0, n.jsxs)("div", {
            className: K.QY,
            children: [
                r.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: K.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, n.jsx)("div", { className: K.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                s.map((e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: K.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, n.jsx)("div", { className: K.d9 }),
                                (0, n.jsxs)(o.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: K.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, n.jsx)(F, { clip: l, videoLength: t }),
            ],
        }),
    });
});
var W = l(445563),
    X = l(541151);
function Y(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`;
}
function q(e) {
    let t = Math.floor(e / 60),
        l = U.intl.formatToPlainString(U.t.iXLF9W, { minutes: t }),
        n = U.intl.formatToPlainString(U.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function J(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: g,
            isPlaying: j,
            cropStart: b,
            cropEnd: C,
            cropDuration: E,
            setCropStart: A,
            setCropEnd: R,
            play: T,
            pause: L,
            subscribe: I,
            seek: O,
            clip: D,
            generateThumbnails: M,
            videoDimensions: _,
        } = (0, w.T)(),
        S = i(),
        [P, G] = a.useState(null),
        z = a.useRef(null),
        B = a.useRef(null),
        [$, H] = a.useState(!1),
        [V, F] = a.useState(null);
    a.useEffect(
        () =>
            I({
                onPlay: () => {
                    G(null), H(!1);
                },
            }),
        [I],
    );
    let { ref: K, width: J = 0, height: Q = 0 } = (0, x.Ay)(),
        ee = (0, c.bG)([v.A], () => v.A.windowSize());
    a.useMemo(() => {
        ee.width, ee.height;
        let e = K.current;
        null != e && F(e.getBoundingClientRect());
    }, [ee.width, ee.height, J, K, l]);
    let et = a.useCallback(
            (e, t) => {
                if (null == g) return;
                if (null == V) return null;
                let l = (((0, r.clamp)(e, V.left, V.right) - V.left) / V.width) * g,
                    n = (0, r.clamp)(l, 0, g),
                    a = P;
                null == a && t && ((a = n <= b ? "start" : n >= C ? "end" : "playhead"), j && (L(), H(!0)), G(a)),
                    "start" === a ? A(n) : "end" === a ? R(n) : "playhead" === a && O((0, r.clamp)(n, b, C));
            },
            [g, V, P, b, C, j, L, A, R, O],
        ),
        el = a.useCallback(
            (e) => {
                if (null == g) return;
                let t = (0, k.A)(g, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), A(b - t);
                        break;
                    case "ArrowRight":
                        (l = !0), A(b + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [g, A, b],
        ),
        en = a.useCallback(
            (e) => {
                if (null == g) return;
                let t = (0, k.A)(g, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), R(C - t);
                        break;
                    case "ArrowRight":
                        (l = !0), R(C + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [g, R, C],
        ),
        ea = a.useCallback(
            (e) => {
                et(e.clientX, !0);
            },
            [et],
        ),
        ei = a.useCallback(
            (e) => {
                et(e.clientX, !1);
            },
            [et],
        ),
        es = a.useCallback(() => {
            $ && T(), H(!1), G(null);
        }, [$, T]);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", ei),
            document.addEventListener("mouseup", es),
            () => {
                document.removeEventListener("mousemove", ei), document.removeEventListener("mouseup", es);
            }
        ),
        [ei, es],
    );
    let { numberOfPreviews: er, timelinePreviewWidth: ec } = a.useMemo(() => {
        if (null == _) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(Q * (_.width / _.height));
        return { numberOfPreviews: Math.ceil(J / e), timelinePreviewWidth: e };
    }, [Q, J, _]);
    a.useEffect(() => {
        if (0 === er || 0 === ec) return;
        let e = K.current;
        if (null == e) return;
        (e.height = Q), (e.width = J);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, J, Q);
        let l = [];
        for (let e = 0; e < er; e++) l.push((ec / J) * g * e);
        return M(l, ec, Q, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], ec * l, 0, ec, Q), e[l].close();
        });
    }, [Q, K, g, er, ec, M, J]);
    let eo = S - b,
        eu = a.useCallback(() => {
            O(Math.max(b, S - 10));
        }, [b, S, O]),
        ed = a.useCallback(() => {
            O(Math.min(C, S + 10));
        }, [C, S, O]),
        em = a.useCallback(() => {
            j ? L() : T();
        }, [j, T, L]),
        eh = (b / g) * 100,
        ef = (1 - (g - C) / g) * 100,
        ep = {
            background: `linear-gradient(to right, var(--black-500) ${eh}%, transparent ${eh}%, transparent ${ef}%, var(--black-500) ${ef}%)`,
        };
    return (0, n.jsx)("div", {
        className: X.f4,
        children: (0, n.jsxs)("div", {
            className: X.fL,
            children: [
                (0, n.jsxs)("div", {
                    className: X.lx,
                    children: [
                        (0, n.jsx)("div", {
                            className: X.k2,
                            children: (0, n.jsx)("div", {
                                ref: B,
                                className: X.re,
                                children: (0, n.jsxs)(o.E, {
                                    variant: "text-sm/normal",
                                    className: X.g7,
                                    color: "text-muted",
                                    children: [Y(eo), (0, n.jsx)("span", { className: X.xW, children: " / " }), Y(E)],
                                }),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: X.s2,
                            children: [
                                (0, n.jsx)(u.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: d.q,
                                    onClick: eu,
                                    "aria-label": U.intl.string(W.default["dRVF+Z"]),
                                }),
                                (0, n.jsx)(u.K, {
                                    size: "md",
                                    icon: j ? h.E : m.u,
                                    onClick: em,
                                    "aria-label": U.intl.string(j ? U.t.ZcgDJX : U.t.RscU7I),
                                }),
                                (0, n.jsx)(u.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: f.i,
                                    onClick: ed,
                                    "aria-label": U.intl.string(W.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(N, { onMouseDown: ea, voiceAudioTracks: t, clipId: D.id, className: X.ou }),
                (0, n.jsx)(Z, { onMouseDown: ea, videoLength: g, clip: D }),
                (0, n.jsx)("div", {
                    className: X.PH,
                    children: (0, n.jsxs)("div", {
                        className: s()(X.IO, { [X.Dg]: null != P }),
                        onMouseDown: ea,
                        children: [
                            (0, n.jsx)("canvas", { className: X.Ay, ref: K }),
                            (0, n.jsx)(p.vN, { children: (0, n.jsx)("div", { tabIndex: 0, ref: z, className: X.lG }) }),
                            (0, n.jsx)("div", { className: X.QT, style: ep }),
                            (0, n.jsxs)("div", {
                                className: X.Ws,
                                style: {
                                    left: null != g ? `${(b / g) * 100}%` : "0",
                                    right: null != g ? `${((g - C) / g) * 100}%` : "0",
                                },
                                children: [
                                    (0, n.jsx)(p.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: s()(X.uI, { [X.cB]: "start" === P }),
                                            onMouseDown: ea,
                                            onKeyDown: el,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": b,
                                            "aria-valuetext": q(b),
                                            "aria-valuemax": C - y.zj,
                                            "aria-label": U.intl.string(U.t["+BTvw8"]),
                                            children: (0, n.jsx)("div", { className: X.FV }),
                                        }),
                                    }),
                                    (0, n.jsx)(p.vN, {
                                        children: (0, n.jsx)("button", {
                                            className: s()(X.H1, { [X.cB]: "end" === P }),
                                            onMouseDown: ea,
                                            onKeyDown: en,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": b + y.zj,
                                            "aria-valuenow": C,
                                            "aria-valuetext": q(C),
                                            "aria-valuemax": g,
                                            "aria-label": U.intl.string(U.t.bBgBYo),
                                            children: (0, n.jsx)("div", { className: X.kn }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
