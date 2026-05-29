l.d(t, { A: () => eh });
var a = l(627968),
    n = l(64700),
    i = l(231723),
    r = l(939249),
    s = l(256905),
    o = l(372684),
    u = l(878185);
function c() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: u.OC }),
            (0, a.jsx)("div", {
                className: u.f4,
                children: (0, a.jsxs)("div", {
                    className: u.fL,
                    children: [
                        (0, a.jsx)("div", { className: u.u }),
                        (0, a.jsx)("div", { className: u.ou }),
                        (0, a.jsx)("div", { className: u.PH }),
                    ],
                }),
            }),
        ],
    });
}
l(321073);
var d = l(735438),
    m = l.n(d),
    f = l(194498),
    h = l(607470),
    p = l(226421),
    v = l(376595),
    x = l(773503),
    g = l(429364);
let b = [],
    j = [];
function y() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, g.T)(),
        r = i.decision?.timestamp ?? 0,
        s = n.useMemo(() => new v.H(i.timeline ?? []), [i.timeline]),
        o = r - i.length,
        u = n.useCallback(
            (e) => {
                let t = 1e3 * m().round(e, 3);
                return s.getEventsAtTimestamp(o + t);
            },
            [s, o],
        ),
        [c, d] = n.useState(() => u(0));
    return (
        n.useEffect(
            () =>
                e({
                    onTimeUpdate: (e) => {
                        d(u(e));
                    },
                }),
            [e, u],
        ),
        (0, a.jsx)(x.A, {
            speakingUserIds: l ? c.speakingUserIds : b,
            activeSoundboards: t ? c.activeSoundboards : j,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var C = l(696016),
    E = l(97451),
    k = l(813433);
function A(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(C.gC.ALL)) return !1;
        else return !0;
    return e.includes(C.gC.APPLICATION) ? !l : e.includes(C.gC.VOICE) ? !a : !e.includes(C.gC.SOUNDBOARD) || !n;
}
function N(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: r } = e,
        s = n.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        o = n.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = l === e.label;
                });
            },
            [l],
        );
    return (0, a.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${l}`,
        ref: s,
        src: i ?? void 0,
        muted: r,
        preload: "auto",
        className: k.R,
        onLoadedMetadata: o,
    });
}
let w = n.forwardRef(function (e, t) {
    let {} = e,
        {
            cropStart: l,
            cropEnd: i,
            setVideoPlayerRef: r,
            videoURL: s,
            audioURL: u,
            applicationAudioEnabled: c,
            voiceAudioEnabled: m,
            soundboardAudioEnabled: v,
            clip: x,
        } = (0, g.T)(),
        b = n.useRef({}),
        j = n.useRef(!1),
        [w, R] = n.useState([]),
        T = n.useCallback(() => {
            let e = b.current.main;
            if (null == e) return;
            let t = (0, d.round)(e.currentTime, 3),
                a = (0, d.round)(l, 3);
            if (t >= (null != i ? (0, d.round)(i, 3) : (0, d.round)(e.duration, 3)) || t < a) {
                for (let e of Object.values(b.current)) null != e && (e.currentTime = l);
                return !0;
            }
        }, [l, i]),
        L = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(C.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(C.gC.VOICE) || l.label.includes(C.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            R(t);
        }, []);
    (0, f.A)(() => {
        j.current && T() && I();
    });
    let I = n.useCallback(() => {
            for (let e of ((j.current = !0), T(), Object.values(b.current))) null != e && e.play();
        }, [T]),
        M = n.useCallback(() => {
            for (let e of Object.values(b.current)) null != e && e.pause();
        }, []),
        D = n.useCallback((e) => {
            for (let t of (b.current.main?.paused && (j.current = !1), Object.values(b.current)))
                null != t && (t.currentTime = e);
        }, []),
        O = n.useCallback(() => {
            b.current.main?.paused ? I() : M();
        }, [I, M]),
        _ = n.useCallback((e) => {
            b.current.main = e;
        }, []),
        S = n.useCallback((e, t) => {
            b.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: I, seek: D, pause: M, videoElement: b.current.main };
        return r(e), e;
    }, [I, D, M, r]);
    let P = n.useCallback(() => {
        D(l);
    }, [D, l]);
    if (null == s) return null;
    let U = x.type === o.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: E.DV,
        children: [
            U
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: _, src: s, muted: !0, preload: "auto" }),
                          (0, a.jsx)(p.A, { className: E.Ap }),
                      ],
                  })
                : (0, a.jsx)(h.A, {
                      onClick: O,
                      className: E.Ap,
                      ref: _,
                      src: s,
                      muted: A(":all", {
                          applicationAudioEnabled: c,
                          voiceAudioEnabled: m,
                          soundboardAudioEnabled: v,
                          isVoiceClip: U,
                      }),
                      preload: "auto",
                      onLoadedData: P,
                  }),
            (0, a.jsx)(y, {}),
            (0, a.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: u ?? void 0,
                muted: A(":application", {
                    applicationAudioEnabled: c,
                    voiceAudioEnabled: m,
                    soundboardAudioEnabled: v,
                    isVoiceClip: U,
                }),
                className: k.R,
                preload: "auto",
                ref: (e) => S(e, "main:application"),
                onLoadedMetadata: L,
            }),
            w.map((e) =>
                (0, a.jsx)(
                    N,
                    {
                        setRef: S,
                        audioTrackLabel: e,
                        src: u,
                        muted: A(e, {
                            applicationAudioEnabled: c,
                            voiceAudioEnabled: m,
                            soundboardAudioEnabled: v,
                            isVoiceClip: U,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});
function R(e, t) {
    let l = e / C.YM;
    return t && (l /= C.iJ), l;
}
var T = l(503698),
    L = l.n(T),
    I = l(702841),
    M = l(834730),
    D = l(408278),
    O = l(461150),
    _ = l(782134),
    S = l(113494),
    P = l(898196),
    U = l(187322),
    B = l(765671),
    G = l(531685);
l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var $ = l(661531),
    z = l(602853),
    F = l(602674),
    H = l(335416),
    V = l(664875);
let K = new Map(),
    Z = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: r, className: s } = e,
            o = n.useRef(null),
            { ref: u, width: c, height: d } = (0, B.Ay)(),
            [m, f] = n.useState(null),
            h = (0, z.r)($.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(
            () => (
                (o.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    o.current?.terminate();
                }
            ),
            [],
        ),
        n.useEffect(() => {
            if (0 === c || 0 === i.length || null == o.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${c}`,
                l = K.get(e);
            if (null != l) return void f(l.waveform);
            let a = o.current,
                n = !1,
                r = (t) => {
                    if (n) return;
                    let { waveform: l, error: a } = t.data;
                    null != a ? C.nx.error("Failed to load waveform:", a) : (K.set(e, { waveform: l }), f(l));
                };
            return (
                a.addEventListener("message", r),
                (async () => {
                    try {
                        let e = (0, F.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (n) return;
                        let l = [],
                            r = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let a = new Float32Array(e.getChannelData(l));
                                t.push(a), r.push(a.buffer);
                            }
                            l.push(t);
                        }
                        a.postMessage({ trackChannels: l, width: c }, r);
                    } catch (e) {
                        n || C.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (n = !0), a.removeEventListener("message", r);
                }
            );
        }, [i, t, c]),
        n.useEffect(() => {
            if (null == u.current || null == m || (c ?? 0) === 0 || (d ?? 0) === 0) return;
            let e = u.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / m.length,
                i = -(n * (H.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, a), (t.fillStyle = h);
            for (let e = 0; e < m.length; e++) {
                let l = m[e] * a,
                    r = e * n + i;
                t.fillRect(r, a, n - i, -l);
            }
        }, [h, c, u, d, m]),
        0 === i.length)
            ? null
            : (0, a.jsx)("div", {
                  className: L()(V.k, s),
                  children: (0, a.jsx)("canvas", {
                      className: V.s,
                      ref: u,
                      width: (c ?? 0) * 2,
                      height: (d ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
var W = l(343032),
    X = l(713608),
    J = l(17928),
    Q = l(459192),
    Y = l(565645),
    q = l(287809),
    ee = l(562153),
    et = l(16590),
    el = l(375708),
    ea = l(995469);
function en(e) {
    let { icon: t, title: l, body: n, position: i } = e;
    return (0, a.jsx)(Q.u, {
        title: l,
        body: n,
        position: "top",
        children: (0, a.jsx)("div", {
            className: ea.H,
            style: { left: `${i}%` },
            children: (0, a.jsx)(t, { size: "refresh_sm", color: $.A.colors.ICON_DEFAULT }),
        }),
    });
}
function ei(e) {
    let { signal: t, guildId: l, position: n } = e,
        i = (0, J.bG)([q.default], () => q.default.getUser(t.userId)),
        r = (0, ee.tx)(l, null, i);
    return (0, a.jsx)(Q.u, {
        title: t.name,
        body: r,
        position: "top",
        children: (0, a.jsx)("div", {
            className: ea.H,
            style: { left: `${n}%` },
            children: (0, a.jsx)(Y.A, {
                emojiId: t.emojiId ?? null,
                emojiName: t.emojiName ?? null,
                animated: t.emojiAnimated,
                size: "reaction",
            }),
        }),
    });
}
let er = n.memo(function (e) {
    let { clip: t, videoLength: l } = e;
    return n
        .useMemo(
            () =>
                (function (e) {
                    let t = e.filter((e) => e.signal.type === o.Gy.LAUGHTER).sort((e, t) => e.timestamp - t.timestamp),
                        l = new Set();
                    for (let e = 0; e < t.length - 1; e++) t[e + 1].timestamp - t[e].timestamp < 2500 && l.add(t[e]);
                    return e.filter((e) => !l.has(e));
                })(t.timeline),
            [t.timeline],
        )
        .map(function (e) {
            let n = (function (e) {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            })(e.timestamp);
            if (null == n) return null;
            let i = `${e.timestamp}-${e.signal.type}`;
            switch (e.signal.type) {
                case o.Gy.LAUGHTER:
                    return (0, a.jsx)(
                        en,
                        {
                            icon: W.i,
                            title: el.intl.string(et.default.bTC23D),
                            body: el.intl.string(et.default["ry+jxm"]),
                            position: n,
                        },
                        i,
                    );
                case o.Gy.GAME_EVENT:
                    return (0, a.jsx)(
                        en,
                        {
                            icon: X.q,
                            title: e.signal.title ?? "",
                            body: el.intl.string(et.default["347DBb"]),
                            position: n,
                        },
                        i,
                    );
                case o.Gy.SOUNDBOARD:
                    return (0, a.jsx)(ei, { signal: e.signal, guildId: t.guildId, position: n }, i);
                default:
                    return null;
            }
        });
});
var es = l(698269);
let eo = n.memo(function (e) {
    let { videoLength: t, clip: l, onMouseDown: i } = e,
        { timeNotches: r, subNotches: s } = n.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let l = [],
                a = t / 6;
            e =
                a <= 1
                    ? 1
                    : a <= 2
                      ? 2
                      : a <= 5
                        ? 5
                        : a <= 10
                          ? 10
                          : a <= 15
                            ? 15
                            : a <= 20
                              ? 20
                              : a <= 30
                                ? 30
                                : 10 * Math.round(a / 10);
            for (let a = 0; a <= t; a += e) {
                let e = (a / t) * 100;
                l.push({ time: a, position: e });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) && l.push({ time: t, position: 100 });
            let n = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    n.push({ position: l });
                }
            return { timeNotches: l, subNotches: n };
        }, [t]);
    return (0, a.jsx)("div", {
        className: es.ZX,
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: es.QY,
            children: [
                s.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: es.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: es.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                r.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: es.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: es.d9 }),
                                (0, a.jsxs)(M.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: es.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(er, { clip: l, videoLength: t }),
            ],
        }),
    });
});
var eu = l(445563),
    ec = l(541151);
function ed(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function em(e) {
    let t = Math.floor(e / 60),
        l = el.intl.formatToPlainString(el.t.iXLF9W, { minutes: t }),
        a = el.intl.formatToPlainString(el.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function ef(e) {
    let { sourceURL: t, voiceAudioTracks: l, transitionState: i } = e,
        {
            useCurrentTime: r,
            duration: s,
            isPlaying: o,
            cropStart: u,
            cropEnd: c,
            cropDuration: m,
            setCropStart: f,
            setCropEnd: p,
            play: v,
            pause: x,
            subscribe: b,
            seek: j,
            clip: y,
        } = (0, g.T)(),
        E = r(),
        k = n.useRef(null),
        [A, N] = n.useState(!1),
        [w, T] = n.useState(null),
        $ = n.useRef(null),
        z = n.useRef(null),
        [F, H] = n.useState(!1),
        [V, K] = n.useState(null);
    n.useEffect(
        () =>
            b({
                onPlay: () => {
                    T(null), H(!1);
                },
            }),
        [b],
    );
    let { ref: W, width: X = 0, height: J = 0 } = (0, B.Ay)(),
        Q = (0, I.bG)([G.A], () => G.A.windowSize());
    n.useMemo(() => {
        Q.width, Q.height;
        let e = W.current;
        null != e && K(e.getBoundingClientRect());
    }, [Q.width, Q.height, X, W, i]);
    let Y = n.useRef(null),
        q = n.useRef({}),
        ee = n.useCallback(
            (e, t) => {
                if (null == s) return;
                if (null == V) return null;
                let l = (((0, d.clamp)(e, V.left, V.right) - V.left) / V.width) * s,
                    a = (0, d.clamp)(l, 0, s),
                    n = w;
                null == n && t && ((n = a <= u ? "start" : a >= c ? "end" : "playhead"), o && (x(), H(!0)), T(n)),
                    "start" === n ? f(a) : "end" === n ? p(a) : "playhead" === n && j((0, d.clamp)(a, u, c));
            },
            [s, V, w, u, c, o, x, f, p, j],
        ),
        et = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = R(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), f(u - t);
                        break;
                    case "ArrowRight":
                        (l = !0), f(u + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, f, u],
        ),
        ea = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = R(s, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), p(c - t);
                        break;
                    case "ArrowRight":
                        (l = !0), p(c + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [s, p, c],
        ),
        en = n.useCallback(
            (e) => {
                ee(e.clientX, !0);
            },
            [ee],
        ),
        ei = n.useCallback(
            (e) => {
                ee(e.clientX, !1);
            },
            [ee],
        ),
        er = n.useCallback(() => {
            F && v(), H(!1), T(null);
        }, [F, v]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", ei),
            document.addEventListener("mouseup", er),
            () => {
                document.removeEventListener("mousemove", ei), document.removeEventListener("mouseup", er);
            }
        ),
        [ei, er],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = W.current,
                    t = k.current;
                if (null == e || null == t || !A) return;
                (e.height = J), (e.width = X);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "transparent"), l.fillRect(0, 0, X, J);
                let a = Math.ceil(J * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(X / a),
                    i = Y.current;
                if (null == i) return;
                (i.width = a), (i.height = J);
                let r = i?.getContext("2d", { willReadFrequently: !0 });
                if (null == r) return;
                let o = q.current;
                if (o[n]?.length === n) {
                    for (let e = 0; e < n; e++) l.putImageData(o[n][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((i) => {
                        (t.onseeked = () => {
                            l.drawImage(t, a * e, 0, a, J), r.drawImage(t, 0, 0, a, J);
                            let s = r.getImageData(0, 0, a, J);
                            null == o[n] && (o[n] = []), (o[n][e] = s), i();
                        }),
                            (t.currentTime = (a / X) * s * e);
                    });
            })();
        }, [X, J, W, s, Y, A]);
    let es = E - u,
        ef = n.useCallback(() => {
            j(Math.max(u, E - 10));
        }, [u, E, j]),
        eh = n.useCallback(() => {
            j(Math.min(c, E + 10));
        }, [c, E, j]),
        ep = n.useCallback(() => {
            o ? x() : v();
        }, [o, v, x]),
        ev = n.useCallback(() => N(!0), []),
        ex = (u / s) * 100,
        eg = (1 - (s - c) / s) * 100,
        eb = {
            background: `linear-gradient(to right, var(--black-500) ${ex}%, transparent ${ex}%, transparent ${eg}%, var(--black-500) ${eg}%)`,
        };
    return (0, a.jsx)("div", {
        className: ec.f4,
        children: (0, a.jsxs)("div", {
            className: ec.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: ec.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: ec.k2,
                            children: (0, a.jsx)("div", {
                                ref: z,
                                className: ec.re,
                                children: (0, a.jsxs)(M.E, {
                                    variant: "text-sm/normal",
                                    className: ec.g7,
                                    color: "text-muted",
                                    children: [
                                        ed(es),
                                        (0, a.jsx)("span", { className: ec.xW, children: " / " }),
                                        ed(m),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: ec.s2,
                            children: [
                                (0, a.jsx)(D.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: O.q,
                                    onClick: ef,
                                    "aria-label": el.intl.string(eu.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(D.K, {
                                    size: "md",
                                    icon: o ? S.E : _.u,
                                    onClick: ep,
                                    "aria-label": el.intl.string(o ? el.t.ZcgDJX : el.t.RscU7I),
                                }),
                                (0, a.jsx)(D.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: P.i,
                                    onClick: eh,
                                    "aria-label": el.intl.string(eu.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(Z, { onMouseDown: en, voiceAudioTracks: l, clipId: y.id, className: ec.ou }),
                (0, a.jsx)(eo, { onMouseDown: en, videoLength: s, clip: y }),
                (0, a.jsx)("div", {
                    className: ec.PH,
                    children: (0, a.jsxs)("div", {
                        className: L()(ec.IO, { [ec.Dg]: null != w }),
                        onMouseDown: en,
                        children: [
                            (0, a.jsx)("canvas", { className: ec.zj, ref: Y }),
                            (0, a.jsx)("canvas", { className: ec.Ay, ref: W }),
                            (0, a.jsx)(U.vN, {
                                children: (0, a.jsx)("div", { tabIndex: 0, ref: $, className: ec.lG }),
                            }),
                            (0, a.jsx)(h.A, {
                                preload: "auto",
                                className: ec.Fi,
                                ref: k,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: ev,
                            }),
                            (0, a.jsx)("div", { className: ec.QT, style: eb }),
                            (0, a.jsxs)("div", {
                                className: ec.Ws,
                                style: {
                                    left: null != s ? `${(u / s) * 100}%` : "0",
                                    right: null != s ? `${((s - c) / s) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(U.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: L()(ec.uI, { [ec.cB]: "start" === w }),
                                            onMouseDown: en,
                                            onKeyDown: et,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": u,
                                            "aria-valuetext": em(u),
                                            "aria-valuemax": c - C.zj,
                                            "aria-label": el.intl.string(el.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: ec.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(U.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: L()(ec.H1, { [ec.cB]: "end" === w }),
                                            onMouseDown: en,
                                            onKeyDown: ea,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": u + C.zj,
                                            "aria-valuenow": c,
                                            "aria-valuetext": em(c),
                                            "aria-valuemax": s,
                                            "aria-label": el.intl.string(el.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: ec.kn }),
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
function eh(e) {
    let { transitionState: t } = e,
        { cropStart: l, cropEnd: u, videoPlayerRef: d, videoURL: m, audioTracks: f, clip: h } = (0, g.T)(),
        p = h.type === o.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!p) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if (document.activeElement?.tagName === "INPUT" || document.activeElement?.role === "textbox") return;
            let t = d.current;
            if (null == t) return;
            let a = d.current?.videoElement;
            if (null == a) return;
            let n = R(a.duration, e.shiftKey),
                i = !1;
            switch (e.key) {
                case " ":
                    (i = !0), a.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (i = !0), t.seek(Math.max(l, a.currentTime - n));
                    break;
                case "ArrowRight":
                    (i = !0), t.seek(Math.min(u, a.currentTime + n));
            }
            i && (e.stopPropagation(), e.preventDefault());
        }
    }, [d, p, h.type, l, u]);
    let v = n.useMemo(() => f.filter((e) => e.trackName.includes(":voice")), [f]),
        x = n.useCallback(() => {
            (0, s.R)(
                {
                    items: [{ type: "IMAGE", url: h.thumbnail, proxyUrl: h.thumbnail, alt: h.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [h.thumbnail, h.name]);
    if (p)
        return (0, a.jsx)("div", {
            className: E.OJ,
            children:
                t !== i.ip.ENTERED
                    ? (0, a.jsx)(c, {})
                    : (0, a.jsx)("div", {
                          className: E.zT,
                          children: (0, a.jsx)(r.D, {
                              className: E.xS,
                              onClick: x,
                              children: (0, a.jsx)("img", { className: E.V_, src: h.thumbnail, alt: h.name ?? "" }),
                          }),
                      }),
        });
    let b = null == m || t !== i.ip.ENTERED;
    return (0, a.jsx)("div", {
        className: E.OJ,
        children: (0, a.jsx)("div", {
            className: E.zT,
            children: b
                ? (0, a.jsx)(c, {})
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(w, { ref: d }),
                          (0, a.jsx)(ef, { transitionState: t, sourceURL: m, voiceAudioTracks: v }),
                      ],
                  }),
        }),
    });
}
