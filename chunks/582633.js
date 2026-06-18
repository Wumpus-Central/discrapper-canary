l.d(t, { A: () => ep });
var a = l(627968),
    n = l(64700),
    i = l(621466),
    r = l(231723),
    s = l(939249),
    o = l(256905),
    u = l(372684),
    c = l(878185);
function d() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: c.OC }),
            (0, a.jsx)("div", {
                className: c.f4,
                children: (0, a.jsxs)("div", {
                    className: c.fL,
                    children: [
                        (0, a.jsx)("div", { className: c.u }),
                        (0, a.jsx)("div", { className: c.ou }),
                        (0, a.jsx)("div", { className: c.PH }),
                    ],
                }),
            }),
        ],
    });
}
l(321073);
var m = l(735438),
    f = l.n(m),
    h = l(194498),
    p = l(607470),
    v = l(226421),
    x = l(376595),
    g = l(773503),
    b = l(429364);
let j = [],
    y = [];
function C() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, b.T)(),
        r = i.decision?.timestamp ?? 0,
        s = n.useMemo(() => new x.H(i.timeline ?? []), [i.timeline]),
        o = r - i.length,
        u = n.useCallback(
            (e) => {
                let t = 1e3 * f().round(e, 3);
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
        (0, a.jsx)(g.A, {
            speakingUserIds: l ? c.speakingUserIds : j,
            activeSoundboards: t ? c.activeSoundboards : y,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var E = l(696016),
    k = l(97451),
    A = l(813433);
function N(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(E.gC.ALL)) return !1;
        else return !0;
    return e.includes(E.gC.APPLICATION) ? !l : e.includes(E.gC.VOICE) ? !a : !e.includes(E.gC.SOUNDBOARD) || !n;
}
function w(e) {
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
        className: A.R,
        onLoadedMetadata: o,
    });
}
let R = n.forwardRef(function (e, t) {
    let {} = e,
        {
            cropStart: l,
            cropEnd: i,
            setVideoPlayerRef: r,
            videoURL: s,
            audioURL: o,
            applicationAudioEnabled: c,
            voiceAudioEnabled: d,
            soundboardAudioEnabled: f,
            clip: x,
        } = (0, b.T)(),
        g = n.useRef({}),
        j = n.useRef(!1),
        [y, R] = n.useState([]),
        L = n.useCallback(() => {
            let e = g.current.main;
            if (null == e) return;
            let t = (0, m.round)(e.currentTime, 3),
                a = (0, m.round)(l, 3);
            if (t >= (null != i ? (0, m.round)(i, 3) : (0, m.round)(e.duration, 3)) || t < a) {
                for (let e of Object.values(g.current)) null != e && (e.currentTime = l);
                return !0;
            }
        }, [l, i]),
        T = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(E.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(E.gC.VOICE) || l.label.includes(E.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            R(t);
        }, []);
    (0, h.A)(() => {
        j.current && L() && M();
    });
    let M = n.useCallback(() => {
            for (let e of ((j.current = !0), L(), Object.values(g.current))) null != e && e.play();
        }, [L]),
        I = n.useCallback(() => {
            for (let e of Object.values(g.current)) null != e && e.pause();
        }, []),
        D = n.useCallback((e) => {
            for (let t of (g.current.main?.paused && (j.current = !1), Object.values(g.current)))
                null != t && (t.currentTime = e);
        }, []),
        O = n.useCallback(() => {
            g.current.main?.paused ? M() : I();
        }, [M, I]),
        _ = n.useCallback((e) => {
            g.current.main = e;
        }, []),
        S = n.useCallback((e, t) => {
            g.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: M, seek: D, pause: I, videoElement: g.current.main };
        return r(e), e;
    }, [M, D, I, r]);
    let P = n.useCallback(() => {
        D(l);
    }, [D, l]);
    if (null == s) return null;
    let U = x.type === u.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: k.DV,
        children: [
            U
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: _, src: s, muted: !0, preload: "auto" }),
                          (0, a.jsx)(v.A, { className: k.Ap }),
                      ],
                  })
                : (0, a.jsx)(p.A, {
                      onClick: O,
                      className: k.Ap,
                      ref: _,
                      src: s,
                      muted: N(":all", {
                          applicationAudioEnabled: c,
                          voiceAudioEnabled: d,
                          soundboardAudioEnabled: f,
                          isVoiceClip: U,
                      }),
                      preload: "auto",
                      onLoadedData: P,
                  }),
            (0, a.jsx)(C, {}),
            (0, a.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: o ?? void 0,
                muted: N(":application", {
                    applicationAudioEnabled: c,
                    voiceAudioEnabled: d,
                    soundboardAudioEnabled: f,
                    isVoiceClip: U,
                }),
                className: A.R,
                preload: "auto",
                ref: (e) => S(e, "main:application"),
                onLoadedMetadata: T,
            }),
            y.map((e) =>
                (0, a.jsx)(
                    w,
                    {
                        setRef: S,
                        audioTrackLabel: e,
                        src: o,
                        muted: N(e, {
                            applicationAudioEnabled: c,
                            voiceAudioEnabled: d,
                            soundboardAudioEnabled: f,
                            isVoiceClip: U,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});
function L(e, t) {
    let l = e / E.YM;
    return t && (l /= E.iJ), l;
}
var T = l(503698),
    M = l.n(T),
    I = l(702841),
    D = l(834730),
    O = l(408278),
    _ = l(461150),
    S = l(782134),
    P = l(113494),
    U = l(898196),
    B = l(187322),
    G = l(765671),
    $ = l(531685);
l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var z = l(661531),
    F = l(602853),
    H = l(602674),
    V = l(335416),
    K = l(664875);
let Z = new Map(),
    W = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: r, className: s } = e,
            o = n.useRef(null),
            { ref: u, width: c, height: d } = (0, G.Ay)(),
            [m, f] = n.useState(null),
            h = (0, F.r)(z.A.colors.BACKGROUND_MOD_STRONG).hex();
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
                l = Z.get(e);
            if (null != l) return void f(l.waveform);
            let a = o.current,
                n = !1,
                r = (t) => {
                    if (n) return;
                    let { waveform: l, error: a } = t.data;
                    null != a ? E.nx.error("Failed to load waveform:", a) : (Z.set(e, { waveform: l }), f(l));
                };
            return (
                a.addEventListener("message", r),
                (async () => {
                    try {
                        let e = (0, H.v)();
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
                        n || E.nx.error("Failed to decode audio:", e);
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
                i = -(n * (V.Jh.waveformBarWidth - 1));
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
                  className: M()(K.k, s),
                  children: (0, a.jsx)("canvas", {
                      className: K.s,
                      ref: u,
                      width: (c ?? 0) * 2,
                      height: (d ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
var X = l(343032),
    q = l(713608),
    J = l(17928),
    Q = l(459192),
    Y = l(565645),
    ee = l(287809),
    et = l(562153),
    el = l(16590),
    ea = l(375708),
    en = l(995469);
function ei(e) {
    let { icon: t, title: l, body: n, position: i } = e;
    return (0, a.jsx)(Q.u, {
        title: l,
        body: n,
        position: "top",
        children: (0, a.jsx)("div", {
            className: en.H,
            style: { left: `${i}%` },
            children: (0, a.jsx)(t, { size: "refresh_sm", color: z.A.colors.ICON_DEFAULT }),
        }),
    });
}
function er(e) {
    let { signal: t, guildId: l, position: n } = e,
        i = (0, J.bG)([ee.default], () => ee.default.getUser(t.userId)),
        r = (0, et.tx)(l, null, i);
    return (0, a.jsx)(Q.u, {
        title: t.name,
        body: r,
        position: "top",
        children: (0, a.jsx)("div", {
            className: en.H,
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
let es = n.memo(function (e) {
    let { clip: t, videoLength: l } = e;
    return n
        .useMemo(
            () =>
                (function (e) {
                    let t = e
                            .filter((e) => e.signal.type === u.Gy.LAUGHTER && e.signal.confidence > 0.8)
                            .sort((e, t) => e.timestamp - t.timestamp),
                        l = new Set(),
                        a = 0;
                    for (let e = 1; e <= t.length; e++)
                        (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                            (e - a >= 2 && l.add(t[e - 1]), (a = e));
                    return e.filter((e) => e.signal.type !== u.Gy.LAUGHTER || l.has(e));
                })(t.timeline),
            [t.timeline],
        )
        .map(function (e) {
            if (e.signal.hiddenFromTimeline) return null;
            let n = (function (e) {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            })(e.timestamp);
            if (null == n) return null;
            let i = `${e.timestamp}-${e.signal.type}`;
            switch (e.signal.type) {
                case u.Gy.LAUGHTER:
                    return (0, a.jsx)(
                        ei,
                        {
                            icon: X.i,
                            title: ea.intl.string(el.default.bTC23D),
                            body: ea.intl.string(el.default["ry+jxm"]),
                            position: n,
                        },
                        i,
                    );
                case u.Gy.GAME_EVENT:
                    return (0, a.jsx)(
                        ei,
                        {
                            icon: q.q,
                            title: e.signal.title ?? "",
                            body: ea.intl.string(el.default["347DBb"]),
                            position: n,
                        },
                        i,
                    );
                case u.Gy.SOUNDBOARD:
                    return (0, a.jsx)(er, { signal: e.signal, guildId: t.guildId, position: n }, i);
                default:
                    return null;
            }
        });
});
var eo = l(698269);
let eu = n.memo(function (e) {
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
        className: eo.ZX,
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: eo.QY,
            children: [
                s.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eo.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eo.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                r.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eo.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eo.d9 }),
                                (0, a.jsxs)(D.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: eo.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(es, { clip: l, videoLength: t }),
            ],
        }),
    });
});
var ec = l(445563),
    ed = l(541151);
function em(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function ef(e) {
    let t = Math.floor(e / 60),
        l = ea.intl.formatToPlainString(ea.t.iXLF9W, { minutes: t }),
        a = ea.intl.formatToPlainString(ea.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function eh(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: r,
            isPlaying: s,
            cropStart: o,
            cropEnd: u,
            cropDuration: c,
            setCropStart: d,
            setCropEnd: f,
            play: h,
            pause: p,
            subscribe: v,
            seek: x,
            clip: g,
            generateThumbnails: j,
            videoDimensions: y,
        } = (0, b.T)(),
        C = i(),
        [k, A] = n.useState(null),
        N = n.useRef(null),
        w = n.useRef(null),
        [R, T] = n.useState(!1),
        [z, F] = n.useState(null);
    n.useEffect(
        () =>
            v({
                onPlay: () => {
                    A(null), T(!1);
                },
            }),
        [v],
    );
    let { ref: H, width: V = 0, height: K = 0 } = (0, G.Ay)(),
        Z = (0, I.bG)([$.A], () => $.A.windowSize());
    n.useMemo(() => {
        Z.width, Z.height;
        let e = H.current;
        null != e && F(e.getBoundingClientRect());
    }, [Z.width, Z.height, V, H, l]);
    let X = n.useCallback(
            (e, t) => {
                if (null == r) return;
                if (null == z) return null;
                let l = (((0, m.clamp)(e, z.left, z.right) - z.left) / z.width) * r,
                    a = (0, m.clamp)(l, 0, r),
                    n = k;
                null == n && t && ((n = a <= o ? "start" : a >= u ? "end" : "playhead"), s && (p(), T(!0)), A(n)),
                    "start" === n ? d(a) : "end" === n ? f(a) : "playhead" === n && x((0, m.clamp)(a, o, u));
            },
            [r, z, k, o, u, s, p, d, f, x],
        ),
        q = n.useCallback(
            (e) => {
                if (null == r) return;
                let t = L(r, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), d(o - t);
                        break;
                    case "ArrowRight":
                        (l = !0), d(o + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [r, d, o],
        ),
        J = n.useCallback(
            (e) => {
                if (null == r) return;
                let t = L(r, e.shiftKey),
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
            [r, f, u],
        ),
        Q = n.useCallback(
            (e) => {
                X(e.clientX, !0);
            },
            [X],
        ),
        Y = n.useCallback(
            (e) => {
                X(e.clientX, !1);
            },
            [X],
        ),
        ee = n.useCallback(() => {
            R && h(), T(!1), A(null);
        }, [R, h]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", Y),
            document.addEventListener("mouseup", ee),
            () => {
                document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", ee);
            }
        ),
        [Y, ee],
    );
    let { numberOfPreviews: et, timelinePreviewWidth: el } = n.useMemo(() => {
        if (null == y) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(K * (y.width / y.height));
        return { numberOfPreviews: Math.ceil(V / e), timelinePreviewWidth: e };
    }, [K, V, y]);
    n.useEffect(() => {
        if (0 === et || 0 === el) return;
        let e = H.current;
        if (null == e) return;
        (e.height = K), (e.width = V);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, V, K);
        let l = [];
        for (let e = 0; e < et; e++) l.push((el / V) * r * e);
        return j(l, el, K, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], el * l, 0, el, K), e[l].close();
        });
    }, [K, H, r, et, el, j, V]);
    let en = C - o,
        ei = n.useCallback(() => {
            x(Math.max(o, C - 10));
        }, [o, C, x]),
        er = n.useCallback(() => {
            x(Math.min(u, C + 10));
        }, [u, C, x]),
        es = n.useCallback(() => {
            s ? p() : h();
        }, [s, h, p]),
        eo = (o / r) * 100,
        eh = (1 - (r - u) / r) * 100,
        ep = {
            background: `linear-gradient(to right, var(--black-500) ${eo}%, transparent ${eo}%, transparent ${eh}%, var(--black-500) ${eh}%)`,
        };
    return (0, a.jsx)("div", {
        className: ed.f4,
        children: (0, a.jsxs)("div", {
            className: ed.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: ed.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: ed.k2,
                            children: (0, a.jsx)("div", {
                                ref: w,
                                className: ed.re,
                                children: (0, a.jsxs)(D.E, {
                                    variant: "text-sm/normal",
                                    className: ed.g7,
                                    color: "text-muted",
                                    children: [
                                        em(en),
                                        (0, a.jsx)("span", { className: ed.xW, children: " / " }),
                                        em(c),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: ed.s2,
                            children: [
                                (0, a.jsx)(O.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: _.q,
                                    onClick: ei,
                                    "aria-label": ea.intl.string(ec.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(O.K, {
                                    size: "md",
                                    icon: s ? P.E : S.u,
                                    onClick: es,
                                    "aria-label": ea.intl.string(s ? ea.t.ZcgDJX : ea.t.RscU7I),
                                }),
                                (0, a.jsx)(O.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: U.i,
                                    onClick: er,
                                    "aria-label": ea.intl.string(ec.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(W, { onMouseDown: Q, voiceAudioTracks: t, clipId: g.id, className: ed.ou }),
                (0, a.jsx)(eu, { onMouseDown: Q, videoLength: r, clip: g }),
                (0, a.jsx)("div", {
                    className: ed.PH,
                    children: (0, a.jsxs)("div", {
                        className: M()(ed.IO, { [ed.Dg]: null != k }),
                        onMouseDown: Q,
                        children: [
                            (0, a.jsx)("canvas", { className: ed.Ay, ref: H }),
                            (0, a.jsx)(B.vN, {
                                children: (0, a.jsx)("div", { tabIndex: 0, ref: N, className: ed.lG }),
                            }),
                            (0, a.jsx)("div", { className: ed.QT, style: ep }),
                            (0, a.jsxs)("div", {
                                className: ed.Ws,
                                style: {
                                    left: null != r ? `${(o / r) * 100}%` : "0",
                                    right: null != r ? `${((r - u) / r) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(B.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: M()(ed.uI, { [ed.cB]: "start" === k }),
                                            onMouseDown: Q,
                                            onKeyDown: q,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": o,
                                            "aria-valuetext": ef(o),
                                            "aria-valuemax": u - E.zj,
                                            "aria-label": ea.intl.string(ea.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: ed.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(B.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: M()(ed.H1, { [ed.cB]: "end" === k }),
                                            onMouseDown: Q,
                                            onKeyDown: J,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": o + E.zj,
                                            "aria-valuenow": u,
                                            "aria-valuetext": ef(u),
                                            "aria-valuemax": r,
                                            "aria-label": ea.intl.string(ea.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: ed.kn }),
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
function ep(e) {
    let { transitionState: t } = e,
        { cropStart: l, cropEnd: c, videoPlayerRef: m, videoURL: f, audioTracks: h, clip: p } = (0, b.T)(),
        v = p.type === u.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!v) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            let t = m.current;
            if (null == t) return;
            let a = m.current?.videoElement;
            if (null == a) return;
            let n = L(a.duration, e.shiftKey),
                r = !1;
            switch (e.key) {
                case " ":
                    (r = !0), a.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (r = !0), t.seek(Math.max(l, a.currentTime - n));
                    break;
                case "ArrowRight":
                    (r = !0), t.seek(Math.min(c, a.currentTime + n));
            }
            r && (e.stopPropagation(), e.preventDefault());
        }
    }, [m, v, p.type, l, c]);
    let x = n.useMemo(() => h.filter((e) => e.trackName.includes(":voice")), [h]),
        g = n.useCallback(() => {
            (0, o.R)(
                {
                    items: [{ type: "IMAGE", url: p.thumbnail, proxyUrl: p.thumbnail, alt: p.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [p.thumbnail, p.name]);
    if (v)
        return (0, a.jsx)("div", {
            className: k.OJ,
            children:
                t !== r.ip.ENTERED
                    ? (0, a.jsx)(d, {})
                    : (0, a.jsx)("div", {
                          className: k.zT,
                          children: (0, a.jsx)(s.D, {
                              className: k.xS,
                              onClick: g,
                              children: (0, a.jsx)("img", { className: k.V_, src: p.thumbnail, alt: p.name ?? "" }),
                          }),
                      }),
        });
    let j = null == f || t !== r.ip.ENTERED;
    return (0, a.jsx)("div", {
        className: k.OJ,
        children: (0, a.jsx)("div", {
            className: k.zT,
            children: j
                ? (0, a.jsx)(d, {})
                : (0, a.jsxs)("div", {
                      className: k.Xf,
                      children: [
                          (0, a.jsx)(R, { ref: m }),
                          (0, a.jsx)(eh, { transitionState: t, voiceAudioTracks: x }),
                      ],
                  }),
        }),
    });
}
