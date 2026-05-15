l.d(t, { A: () => eC });
var a = l(627968),
    n = l(64700),
    s = l(231723),
    i = l(939249),
    r = l(408278),
    c = l(972213),
    u = l(548411),
    o = l(256905),
    d = l(372684),
    m = l(878185);
function h() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: m.OC }),
            (0, a.jsx)("div", {
                className: m.f4,
                children: (0, a.jsxs)("div", {
                    className: m.fL,
                    children: [
                        (0, a.jsx)("div", { className: m.u }),
                        (0, a.jsx)("div", { className: m.ou }),
                        (0, a.jsx)("div", { className: m.PH }),
                    ],
                }),
            }),
        ],
    });
}
l(321073);
var f = l(735438),
    p = l.n(f),
    v = l(194498),
    x = l(607470),
    g = l(226421),
    j = l(376595),
    b = l(773503),
    N = l(429364);
let C = [],
    E = [];
function k() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: s } = (0, N.T)(),
        i = s.decision?.timestamp ?? 0,
        r = n.useMemo(() => new j.H(s.timeline ?? []), [s.timeline]),
        c = i - s.length,
        u = n.useCallback(
            (e) => {
                let t = 1e3 * p().round(e, 3);
                return r.getEventsAtTimestamp(c + t);
            },
            [r, c],
        ),
        [o, d] = n.useState(() => u(0));
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
        (0, a.jsx)(b.A, {
            speakingUserIds: l ? o.speakingUserIds : C,
            activeSoundboards: t ? o.activeSoundboards : E,
            userIds: s.users,
            guildId: s.guildId,
            channelId: s.channelId,
        })
    );
}
var y = l(696016),
    A = l(97451),
    w = l(813433);
function R(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: s } = t;
    if (!s && l && a && n)
        if (e.includes(y.gC.ALL)) return !1;
        else return !0;
    return e.includes(y.gC.APPLICATION) ? !l : e.includes(y.gC.VOICE) ? !a : !e.includes(y.gC.SOUNDBOARD) || !n;
}
function T(e) {
    let { setRef: t, audioTrackLabel: l, src: s, muted: i } = e,
        r = n.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        c = n.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = l === e.label;
                });
            },
            [l],
        );
    return (0, a.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${l}`,
        ref: r,
        src: s ?? void 0,
        muted: i,
        preload: "auto",
        className: w.R,
        onLoadedMetadata: c,
    });
}
let L = n.forwardRef(function (e, t) {
    let {} = e,
        {
            cropStart: l,
            cropEnd: s,
            setVideoPlayerRef: i,
            videoURL: r,
            audioURL: c,
            applicationAudioEnabled: u,
            voiceAudioEnabled: o,
            soundboardAudioEnabled: m,
            clip: h,
        } = (0, N.T)(),
        p = n.useRef({}),
        j = n.useRef(!1),
        [b, C] = n.useState([]),
        E = n.useCallback(() => {
            let e = p.current.main;
            if (null == e) return;
            let t = (0, f.round)(e.currentTime, 3),
                a = (0, f.round)(l, 3);
            if (t >= (null != s ? (0, f.round)(s, 3) : (0, f.round)(e.duration, 3)) || t < a) {
                for (let e of Object.values(p.current)) null != e && (e.currentTime = l);
                return !0;
            }
        }, [l, s]),
        L = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(y.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(y.gC.VOICE) || l.label.includes(y.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            C(t);
        }, []);
    (0, v.A)(() => {
        j.current && E() && I();
    });
    let I = n.useCallback(() => {
            for (let e of ((j.current = !0), E(), Object.values(p.current))) null != e && e.play();
        }, [E]),
        S = n.useCallback(() => {
            for (let e of Object.values(p.current)) null != e && e.pause();
        }, []),
        M = n.useCallback((e) => {
            for (let t of (p.current.main?.paused && (j.current = !1), Object.values(p.current)))
                null != t && (t.currentTime = e);
        }, []),
        O = n.useCallback(() => {
            p.current.main?.paused ? I() : S();
        }, [I, S]),
        D = n.useCallback((e) => {
            p.current.main = e;
        }, []),
        U = n.useCallback((e, t) => {
            p.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: I, seek: M, pause: S, videoElement: p.current.main };
        return i(e), e;
    }, [I, M, S, i]);
    let z = n.useCallback(() => {
        M(l);
    }, [M, l]);
    if (null == r) return null;
    let P = h.type === d.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: A.DV,
        children: [
            P
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: D, src: r, muted: !0, preload: "auto" }),
                          (0, a.jsx)(g.A, { className: A.Ap }),
                      ],
                  })
                : (0, a.jsx)(x.A, {
                      onClick: O,
                      className: A.Ap,
                      ref: D,
                      src: r,
                      muted: R(":all", {
                          applicationAudioEnabled: u,
                          voiceAudioEnabled: o,
                          soundboardAudioEnabled: m,
                          isVoiceClip: P,
                      }),
                      preload: "auto",
                      onLoadedData: z,
                  }),
            (0, a.jsx)(k, {}),
            (0, a.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: c ?? void 0,
                muted: R(":application", {
                    applicationAudioEnabled: u,
                    voiceAudioEnabled: o,
                    soundboardAudioEnabled: m,
                    isVoiceClip: P,
                }),
                className: w.R,
                preload: "auto",
                ref: (e) => U(e, "main:application"),
                onLoadedMetadata: L,
            }),
            b.map((e) =>
                (0, a.jsx)(
                    T,
                    {
                        setRef: U,
                        audioTrackLabel: e,
                        src: c,
                        muted: R(e, {
                            applicationAudioEnabled: u,
                            voiceAudioEnabled: o,
                            soundboardAudioEnabled: m,
                            isVoiceClip: P,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});
var I = l(503698),
    S = l.n(I),
    M = l(702841),
    O = l(459192),
    D = l(990078),
    U = l(768622),
    z = l(661531),
    P = l(27232),
    G = l(918715),
    $ = l(297152),
    _ = l(369606),
    B = l(138134),
    V = l(499373),
    F = l(175841),
    K = l(215026),
    H = l(834730),
    Z = l(534890),
    J = l(461150),
    W = l(782134),
    X = l(113494),
    Q = l(898196),
    q = l(187322),
    Y = l(565645),
    ee = l(765671),
    et = l(287809),
    el = l(531685),
    ea = l(427262);
l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var en = l(602853),
    es = l(602674),
    ei = l(335416),
    er = l(664875);
let ec = new Map(),
    eu = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: s, onMouseDown: i, className: r } = e,
            c = n.useRef(null),
            { ref: u, width: o, height: d } = (0, ee.Ay)(),
            [m, h] = n.useState(null),
            f = (0, en.r)(z.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(
            () => (
                (c.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    c.current?.terminate();
                }
            ),
            [],
        ),
        n.useEffect(() => {
            if (0 === o || 0 === s.length || null == c.current) return;
            let e = `${t}-${s.map((e) => e.trackName).join(",")}-${o}`,
                l = ec.get(e);
            if (null != l) return void h(l.waveform);
            let a = c.current,
                n = !1,
                i = (t) => {
                    if (n) return;
                    let { waveform: l, error: a } = t.data;
                    null != a ? y.nx.error("Failed to load waveform:", a) : (ec.set(e, { waveform: l }), h(l));
                };
            return (
                a.addEventListener("message", i),
                (async () => {
                    try {
                        let e = (0, es.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(s.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (n) return;
                        let l = [],
                            i = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let a = new Float32Array(e.getChannelData(l));
                                t.push(a), i.push(a.buffer);
                            }
                            l.push(t);
                        }
                        a.postMessage({ trackChannels: l, width: o }, i);
                    } catch (e) {
                        n || y.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (n = !0), a.removeEventListener("message", i);
                }
            );
        }, [s, t, o]),
        n.useEffect(() => {
            if (null == u.current || null == m || (o ?? 0) === 0 || (d ?? 0) === 0) return;
            let e = u.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / m.length,
                s = -(n * (ei.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, a), (t.fillStyle = f);
            for (let e = 0; e < m.length; e++) {
                let l = m[e] * a,
                    i = e * n + s;
                t.fillRect(i, a, n - s, -l);
            }
        }, [f, o, u, d, m]),
        0 === s.length)
            ? null
            : (0, a.jsx)("div", {
                  className: S()(er.k, r),
                  children: (0, a.jsx)("canvas", {
                      className: er.s,
                      ref: u,
                      width: (o ?? 0) * 2,
                      height: (d ?? 0) * 2,
                      onMouseDown: i,
                  }),
              });
    });
function eo(e, t) {
    let l = e / y.YM;
    return t && (l /= y.iJ), l;
}
var ed = l(375708),
    em = l(445563),
    eh = l(474847);
function ef(e) {
    let { eventType: t, importance: l, style: s, title: i, description: r } = e,
        c = n.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        u = n.useMemo(() => {
            switch (t) {
                case d.rb.KILL:
                    return (0, a.jsx)(U.g, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                case d.rb.MULTIKILL:
                    return (0, a.jsx)(P.G, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                case d.rb.DEATH:
                    return (0, a.jsx)(G.V, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                case d.rb.ASSIST:
                    return (0, a.jsx)($.E, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                case d.rb.ITEM:
                    return (0, a.jsx)(P.G, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                case d.rb.VICTORY:
                    return (0, a.jsx)(_.O, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                case d.rb.DEFEAT:
                    return (0, a.jsx)(B.i, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                case d.rb.LEVEL_UP:
                    return (0, a.jsx)(V.T, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                case d.rb.TREASURE:
                    return (0, a.jsx)(F.B, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                case d.rb.OBJECTIVE_KILL:
                    return (0, a.jsx)(K.w, { size: "custom", width: c, height: c, color: z.A.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, c]);
    if (null == u) return null;
    let o = (0, a.jsx)("div", { className: eh.HS, style: s, children: u });
    return null != i || null != r
        ? null == i || null == r
            ? (0, a.jsx)(D.m, { text: i ?? r, position: "top", children: o })
            : (0, a.jsx)(O.u, { title: i, body: r ?? "", position: "top", children: o })
        : o;
}
function ep(e) {
    let { videoLength: t, clip: l, onMouseDown: s } = e,
        { timeNotches: i, subNotches: r } = n.useMemo(() => {
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
                s = e / 5;
            for (let e = s; e < t; e += s)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    n.push({ position: l });
                }
            return { timeNotches: l, subNotches: n };
        }, [t]);
    return (0, a.jsx)("div", {
        className: eh.ZX,
        onMouseDown: s,
        children: (0, a.jsxs)("div", {
            className: eh.QY,
            children: [
                r.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eh.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eh.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                i.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eh.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eh.d9 }),
                                (0, a.jsxs)(H.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: eh.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(ev, { clip: l, videoLength: t }),
                (0, a.jsx)(ex, { clip: l, videoLength: t }),
                (0, a.jsx)(eg, { clip: l, videoLength: t }),
            ],
        }),
    });
}
function ev(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === d.Gy.GAME_EVENT),
            [t.timeline, t.decision?.timestamp],
        ),
        i = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: s.map((e, t) => {
            let l = i(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
                      ef,
                      {
                          eventType: e.signal.eventType,
                          importance: e.signal.importance ?? 0,
                          title: e.signal.title,
                          description: e.signal.description,
                          style: { left: `${l}%` },
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
function ex(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === d.Gy.SOUNDBOARD && !0 === e.signal.playing),
            [t.timeline, t.decision?.timestamp],
        ),
        i = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: s.map((e, t) => {
            let l = i(e.timestamp);
            if (null == l || (null == e.signal.emojiId && null == e.signal.emojiName)) return null;
            let n = et.default.getUser(e.signal.userId),
                s = (0, ea.mG)(n);
            return (0, a.jsx)(
                O.u,
                {
                    title: e.signal.name,
                    body: s ?? "",
                    position: "top",
                    children: (0, a.jsx)("div", {
                        className: eh.HS,
                        style: { left: `${l}%` },
                        children: (0, a.jsx)(Y.A, {
                            emojiId: e.signal.emojiId ?? null,
                            emojiName: e.signal.emojiName ?? null,
                            animated: e.signal.emojiAnimated,
                            size: "reaction",
                        }),
                    }),
                },
                `${e.timestamp}-${t}`,
            );
        }),
    });
}
function eg(e) {
    let { clip: t, videoLength: l } = e,
        s = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === d.Gy.PHRASE),
            [t.timeline, t.decision?.timestamp],
        ),
        i = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: s.map((e, t) => {
            let l = i(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
                      O.u,
                      {
                          title: ed.intl.string(ed.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, a.jsx)("div", {
                              className: eh.HS,
                              style: { left: `${l}%` },
                              children: (0, a.jsx)(Z.o, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: z.A.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
let ej = function (e) {
    let { sourceURL: t, voiceAudioTracks: l, transitionState: s } = e,
        {
            useCurrentTime: i,
            duration: c,
            isPlaying: u,
            cropStart: o,
            cropEnd: d,
            cropDuration: m,
            setCropStart: h,
            setCropEnd: p,
            play: v,
            pause: g,
            subscribe: j,
            seek: b,
            clip: C,
        } = (0, N.T)(),
        E = i(),
        k = n.useRef(null),
        [A, w] = n.useState(!1),
        [R, T] = n.useState(null),
        L = n.useRef(null),
        I = n.useRef(null),
        [O, D] = n.useState(!1),
        [U, z] = n.useState(null);
    n.useEffect(
        () =>
            j({
                onPlay: () => {
                    T(null), D(!1);
                },
            }),
        [j],
    );
    let { ref: P, width: G = 0, height: $ = 0 } = (0, ee.Ay)(),
        _ = (0, M.bG)([el.A], () => el.A.windowSize());
    n.useMemo(() => {
        _.width, _.height;
        let e = P.current;
        null != e && z(e.getBoundingClientRect());
    }, [_.width, _.height, G, P, s]);
    let B = n.useRef(null),
        V = n.useRef({}),
        F = n.useCallback(
            (e, t) => {
                if (null == c) return;
                if (null == U) return null;
                let l = (((0, f.clamp)(e, U.left, U.right) - U.left) / U.width) * c,
                    a = (0, f.clamp)(l, 0, c),
                    n = R;
                null == n && t && ((n = a <= o ? "start" : a >= d ? "end" : "playhead"), u && (g(), D(!0)), T(n)),
                    "start" === n ? h(a) : "end" === n ? p(a) : "playhead" === n && b((0, f.clamp)(a, o, d));
            },
            [c, U, R, o, d, u, g, h, p, b],
        ),
        K = n.useCallback(
            (e) => {
                if (null == c) return;
                let t = eo(c, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), h(o - t);
                        break;
                    case "ArrowRight":
                        (l = !0), h(o + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [c, h, o],
        ),
        Z = n.useCallback(
            (e) => {
                if (null == c) return;
                let t = eo(c, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), p(d - t);
                        break;
                    case "ArrowRight":
                        (l = !0), p(d + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [c, p, d],
        ),
        Y = n.useCallback(
            (e) => {
                F(e.clientX, !0);
            },
            [F],
        ),
        et = n.useCallback(
            (e) => {
                F(e.clientX, !1);
            },
            [F],
        ),
        ea = n.useCallback(() => {
            O && v(), D(!1), T(null);
        }, [O, v]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", et),
            document.addEventListener("mouseup", ea),
            () => {
                document.removeEventListener("mousemove", et), document.removeEventListener("mouseup", ea);
            }
        ),
        [et, ea],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = P.current,
                    t = k.current;
                if (null == e || null == t || !A) return;
                (e.height = $), (e.width = G);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "transparent"), l.fillRect(0, 0, G, $);
                let a = Math.ceil($ * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(G / a),
                    s = B.current;
                if (null == s) return;
                (s.width = a), (s.height = $);
                let i = s?.getContext("2d", { willReadFrequently: !0 });
                if (null == i) return;
                let r = V.current;
                if (r[n]?.length === n) {
                    for (let e = 0; e < n; e++) l.putImageData(r[n][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((s) => {
                        (t.onseeked = () => {
                            l.drawImage(t, a * e, 0, a, $), i.drawImage(t, 0, 0, a, $);
                            let c = i.getImageData(0, 0, a, $);
                            null == r[n] && (r[n] = []), (r[n][e] = c), s();
                        }),
                            (t.currentTime = (a / G) * c * e);
                    });
            })();
        }, [G, $, P, c, B, A]);
    let en = E - o,
        es = n.useCallback(() => {
            b(Math.max(o, E - 10));
        }, [o, E, b]),
        ei = n.useCallback(() => {
            b(Math.min(d, E + 10));
        }, [d, E, b]),
        er = n.useCallback(() => {
            u ? g() : v();
        }, [u, v, g]),
        ec = n.useCallback(() => w(!0), []),
        ef = (o / c) * 100,
        ev = (1 - (c - d) / c) * 100,
        ex = {
            background: `linear-gradient(to right, var(--black-500) ${ef}%, transparent ${ef}%, transparent ${ev}%, var(--black-500) ${ev}%)`,
        };
    return (0, a.jsx)("div", {
        className: eh.f4,
        children: (0, a.jsxs)("div", {
            className: eh.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: eh.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: eh.k2,
                            children: (0, a.jsx)("div", {
                                ref: I,
                                className: eh.re,
                                children: (0, a.jsxs)(H.E, {
                                    variant: "text-sm/normal",
                                    className: eh.g7,
                                    color: "text-muted",
                                    children: [
                                        eb(en),
                                        (0, a.jsx)("span", { className: eh.xW, children: " / " }),
                                        eb(m),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: eh.s2,
                            children: [
                                (0, a.jsx)(r.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: J.q,
                                    onClick: es,
                                    "aria-label": ed.intl.string(em.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(r.K, {
                                    size: "md",
                                    icon: u ? X.E : W.u,
                                    onClick: er,
                                    "aria-label": ed.intl.string(u ? ed.t.ZcgDJX : ed.t.RscU7I),
                                }),
                                (0, a.jsx)(r.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: Q.i,
                                    onClick: ei,
                                    "aria-label": ed.intl.string(em.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(eu, { onMouseDown: Y, voiceAudioTracks: l, clipId: C.id, className: eh.ou }),
                (0, a.jsx)(ep, { onMouseDown: Y, videoLength: c, clip: C }),
                (0, a.jsx)("div", {
                    className: eh.PH,
                    children: (0, a.jsxs)("div", {
                        className: S()(eh.IO, { [eh.Dg]: null != R }),
                        onMouseDown: Y,
                        children: [
                            (0, a.jsx)("canvas", { className: eh.zj, ref: B }),
                            (0, a.jsx)("canvas", { className: eh.Ay, ref: P }),
                            (0, a.jsx)(q.vN, {
                                children: (0, a.jsx)("div", { tabIndex: 0, ref: L, className: eh.lG }),
                            }),
                            (0, a.jsx)(x.A, {
                                preload: "auto",
                                className: eh.Fi,
                                ref: k,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: ec,
                            }),
                            (0, a.jsx)("div", { className: eh.QT, style: ex }),
                            (0, a.jsxs)("div", {
                                className: eh.Ws,
                                style: {
                                    left: null != c ? `${(o / c) * 100}%` : "0",
                                    right: null != c ? `${((c - d) / c) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(q.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: S()(eh.uI, { [eh.cB]: "start" === R }),
                                            onMouseDown: Y,
                                            onKeyDown: K,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": o,
                                            "aria-valuetext": eN(o),
                                            "aria-valuemax": d - y.zj,
                                            "aria-label": ed.intl.string(ed.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: eh.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(q.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: S()(eh.H1, { [eh.cB]: "end" === R }),
                                            onMouseDown: Y,
                                            onKeyDown: Z,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": o + y.zj,
                                            "aria-valuenow": d,
                                            "aria-valuetext": eN(d),
                                            "aria-valuemax": c,
                                            "aria-label": ed.intl.string(ed.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: eh.kn }),
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
};
function eb(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function eN(e) {
    let t = Math.floor(e / 60),
        l = ed.intl.formatToPlainString(ed.t.iXLF9W, { minutes: t }),
        a = ed.intl.formatToPlainString(ed.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function eC(e) {
    let { transitionState: t, onClose: l } = e,
        { cropStart: m, cropEnd: f, videoPlayerRef: p, videoURL: v, audioTracks: x, clip: g, editOnly: j } = (0, N.T)(),
        b = g.type === d.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!b) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if (document.activeElement?.tagName === "INPUT" || document.activeElement?.role === "textbox") return;
            let t = p.current;
            if (null == t) return;
            let l = p.current?.videoElement;
            if (null == l) return;
            let a = eo(l.duration, e.shiftKey),
                n = !1;
            switch (e.key) {
                case " ":
                    (n = !0), l.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (n = !0), t.seek(Math.max(m, l.currentTime - a));
                    break;
                case "ArrowRight":
                    (n = !0), t.seek(Math.min(f, l.currentTime + a));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [p, b, g.type, m, f]);
    let C = n.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
        E = n.useCallback(() => {
            (0, o.R)(
                {
                    items: [{ type: "IMAGE", url: g.thumbnail, proxyUrl: g.thumbnail, alt: g.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [g.thumbnail, g.name]);
    if (b)
        return (0, a.jsx)("div", {
            className: A.OJ,
            children:
                t !== s.ip.ENTERED
                    ? (0, a.jsx)(h, {})
                    : (0, a.jsx)("div", {
                          className: A.zT,
                          children: (0, a.jsx)(i.D, {
                              className: A.xS,
                              onClick: E,
                              children: (0, a.jsx)("img", { className: A.V_, src: g.thumbnail, alt: g.name ?? "" }),
                          }),
                      }),
        });
    let k = null == v || t !== s.ip.ENTERED;
    return (0, a.jsx)("div", {
        className: A.OJ,
        children: (0, a.jsxs)("div", {
            className: A.zT,
            children: [
                (0, a.jsx)("div", {
                    className: A.Gv,
                    children: (0, a.jsx)(r.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: j ? c.d : u.Z,
                        "aria-label": ed.intl.string(j ? ed.t.cpT0Cq : ed.t["13/7kX"]),
                        onClick: l,
                    }),
                }),
                k
                    ? (0, a.jsx)(h, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(L, { ref: p }),
                              (0, a.jsx)(ej, { transitionState: t, sourceURL: v, voiceAudioTracks: C }),
                          ],
                      }),
            ],
        }),
    });
}
