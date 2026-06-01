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
        j.current && T() && M();
    });
    let M = n.useCallback(() => {
            for (let e of ((j.current = !0), T(), Object.values(b.current))) null != e && e.play();
        }, [T]),
        I = n.useCallback(() => {
            for (let e of Object.values(b.current)) null != e && e.pause();
        }, []),
        O = n.useCallback((e) => {
            for (let t of (b.current.main?.paused && (j.current = !1), Object.values(b.current)))
                null != t && (t.currentTime = e);
        }, []),
        D = n.useCallback(() => {
            b.current.main?.paused ? M() : I();
        }, [M, I]),
        S = n.useCallback((e) => {
            b.current.main = e;
        }, []),
        _ = n.useCallback((e, t) => {
            b.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: M, seek: O, pause: I, videoElement: b.current.main };
        return r(e), e;
    }, [M, O, I, r]);
    let P = n.useCallback(() => {
        O(l);
    }, [O, l]);
    if (null == s) return null;
    let U = x.type === o.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: E.DV,
        children: [
            U
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: S, src: s, muted: !0, preload: "auto" }),
                          (0, a.jsx)(p.A, { className: E.Ap }),
                      ],
                  })
                : (0, a.jsx)(h.A, {
                      onClick: D,
                      className: E.Ap,
                      ref: S,
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
                ref: (e) => _(e, "main:application"),
                onLoadedMetadata: L,
            }),
            w.map((e) =>
                (0, a.jsx)(
                    N,
                    {
                        setRef: _,
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
    M = l(702841),
    I = l(834730),
    O = l(408278),
    D = l(461150),
    S = l(782134),
    _ = l(113494),
    P = l(898196),
    U = l(187322),
    B = l(765671),
    $ = l(531685);
l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var G = l(661531),
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
            h = (0, z.r)(G.A.colors.BACKGROUND_MOD_STRONG).hex();
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
    q = l(17928),
    J = l(459192),
    Q = l(565645),
    Y = l(287809),
    ee = l(562153),
    et = l(16590),
    el = l(375708),
    ea = l(995469);
function en(e) {
    let { icon: t, title: l, body: n, position: i } = e;
    return (0, a.jsx)(J.u, {
        title: l,
        body: n,
        position: "top",
        children: (0, a.jsx)("div", {
            className: ea.H,
            style: { left: `${i}%` },
            children: (0, a.jsx)(t, { size: "refresh_sm", color: G.A.colors.ICON_DEFAULT }),
        }),
    });
}
function ei(e) {
    let { signal: t, guildId: l, position: n } = e,
        i = (0, q.bG)([Y.default], () => Y.default.getUser(t.userId)),
        r = (0, ee.tx)(l, null, i);
    return (0, a.jsx)(J.u, {
        title: t.name,
        body: r,
        position: "top",
        children: (0, a.jsx)("div", {
            className: ea.H,
            style: { left: `${n}%` },
            children: (0, a.jsx)(Q.A, {
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
                                (0, a.jsxs)(I.E, {
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
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: r,
            isPlaying: s,
            cropStart: o,
            cropEnd: u,
            cropDuration: c,
            setCropStart: m,
            setCropEnd: f,
            play: h,
            pause: p,
            subscribe: v,
            seek: x,
            clip: b,
            generateThumbnails: j,
            videoDimensions: y,
        } = (0, g.T)(),
        E = i(),
        [k, A] = n.useState(null),
        N = n.useRef(null),
        w = n.useRef(null),
        [T, G] = n.useState(!1),
        [z, F] = n.useState(null);
    n.useEffect(
        () =>
            v({
                onPlay: () => {
                    A(null), G(!1);
                },
            }),
        [v],
    );
    let { ref: H, width: V = 0, height: K = 0 } = (0, B.Ay)(),
        W = (0, M.bG)([$.A], () => $.A.windowSize());
    n.useMemo(() => {
        W.width, W.height;
        let e = H.current;
        null != e && F(e.getBoundingClientRect());
    }, [W.width, W.height, V, H, l]);
    let X = n.useCallback(
            (e, t) => {
                if (null == r) return;
                if (null == z) return null;
                let l = (((0, d.clamp)(e, z.left, z.right) - z.left) / z.width) * r,
                    a = (0, d.clamp)(l, 0, r),
                    n = k;
                null == n && t && ((n = a <= o ? "start" : a >= u ? "end" : "playhead"), s && (p(), G(!0)), A(n)),
                    "start" === n ? m(a) : "end" === n ? f(a) : "playhead" === n && x((0, d.clamp)(a, o, u));
            },
            [r, z, k, o, u, s, p, m, f, x],
        ),
        q = n.useCallback(
            (e) => {
                if (null == r) return;
                let t = R(r, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), m(o - t);
                        break;
                    case "ArrowRight":
                        (l = !0), m(o + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [r, m, o],
        ),
        J = n.useCallback(
            (e) => {
                if (null == r) return;
                let t = R(r, e.shiftKey),
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
            T && h(), G(!1), A(null);
        }, [T, h]);
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
    let { numberOfPreviews: et, timelinePreviewWidth: ea } = n.useMemo(() => {
        if (null == y) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil(K * (y.width / y.height));
        return { numberOfPreviews: Math.ceil(V / e), timelinePreviewWidth: e };
    }, [K, V, y]);
    n.useEffect(() => {
        if (0 === et || 0 === ea) return;
        let e = H.current;
        if (null == e) return;
        (e.height = K), (e.width = V);
        let t = e.getContext("2d");
        if (null == t) return;
        (t.fillStyle = "transparent"), t.fillRect(0, 0, V, K);
        let l = [];
        for (let e = 0; e < et; e++) l.push((ea / V) * r * e);
        return j(l, ea, K, (e) => {
            for (let l = 0; l < e.length; l++) t.drawImage(e[l], ea * l, 0, ea, K), e[l].close();
        });
    }, [K, H, r, et, ea, j, V]);
    let en = E - o,
        ei = n.useCallback(() => {
            x(Math.max(o, E - 10));
        }, [o, E, x]),
        er = n.useCallback(() => {
            x(Math.min(u, E + 10));
        }, [u, E, x]),
        es = n.useCallback(() => {
            s ? p() : h();
        }, [s, h, p]),
        ef = (o / r) * 100,
        eh = (1 - (r - u) / r) * 100,
        ep = {
            background: `linear-gradient(to right, var(--black-500) ${ef}%, transparent ${ef}%, transparent ${eh}%, var(--black-500) ${eh}%)`,
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
                                ref: w,
                                className: ec.re,
                                children: (0, a.jsxs)(I.E, {
                                    variant: "text-sm/normal",
                                    className: ec.g7,
                                    color: "text-muted",
                                    children: [
                                        ed(en),
                                        (0, a.jsx)("span", { className: ec.xW, children: " / " }),
                                        ed(c),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: ec.s2,
                            children: [
                                (0, a.jsx)(O.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: D.q,
                                    onClick: ei,
                                    "aria-label": el.intl.string(eu.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(O.K, {
                                    size: "md",
                                    icon: s ? _.E : S.u,
                                    onClick: es,
                                    "aria-label": el.intl.string(s ? el.t.ZcgDJX : el.t.RscU7I),
                                }),
                                (0, a.jsx)(O.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: P.i,
                                    onClick: er,
                                    "aria-label": el.intl.string(eu.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(Z, { onMouseDown: Q, voiceAudioTracks: t, clipId: b.id, className: ec.ou }),
                (0, a.jsx)(eo, { onMouseDown: Q, videoLength: r, clip: b }),
                (0, a.jsx)("div", {
                    className: ec.PH,
                    children: (0, a.jsxs)("div", {
                        className: L()(ec.IO, { [ec.Dg]: null != k }),
                        onMouseDown: Q,
                        children: [
                            (0, a.jsx)("canvas", { className: ec.Ay, ref: H }),
                            (0, a.jsx)(U.vN, {
                                children: (0, a.jsx)("div", { tabIndex: 0, ref: N, className: ec.lG }),
                            }),
                            (0, a.jsx)("div", { className: ec.QT, style: ep }),
                            (0, a.jsxs)("div", {
                                className: ec.Ws,
                                style: {
                                    left: null != r ? `${(o / r) * 100}%` : "0",
                                    right: null != r ? `${((r - u) / r) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(U.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: L()(ec.uI, { [ec.cB]: "start" === k }),
                                            onMouseDown: Q,
                                            onKeyDown: q,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": o,
                                            "aria-valuetext": em(o),
                                            "aria-valuemax": u - C.zj,
                                            "aria-label": el.intl.string(el.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: ec.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(U.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: L()(ec.H1, { [ec.cB]: "end" === k }),
                                            onMouseDown: Q,
                                            onKeyDown: J,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": o + C.zj,
                                            "aria-valuenow": u,
                                            "aria-valuetext": em(u),
                                            "aria-valuemax": r,
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
                : (0, a.jsxs)("div", {
                      className: E.Xf,
                      children: [
                          (0, a.jsx)(w, { ref: d }),
                          (0, a.jsx)(ef, { transitionState: t, voiceAudioTracks: v }),
                      ],
                  }),
        }),
    });
}
