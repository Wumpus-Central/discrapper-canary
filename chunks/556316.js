l.d(t, { A: () => eb });
var a = l(627968),
    n = l(64700),
    i = l(231723),
    s = l(939249),
    r = l(256905),
    o = l(372684),
    c = l(819945);
function u() {
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
var d = l(735438),
    m = l.n(d),
    h = l(194498),
    f = l(607470),
    p = l(226421),
    v = l(376595),
    x = l(773503),
    g = l(429364);
let j = [],
    b = [];
function C() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, g.T)(),
        s = i.decision?.timestamp ?? 0,
        r = n.useMemo(() => new v.H(i.timeline ?? []), [i.timeline]),
        o = s - i.length,
        c = n.useCallback(
            (e) => {
                let t = 1e3 * m().round(e, 3);
                return r.getEventsAtTimestamp(o + t);
            },
            [r, o],
        ),
        [u, d] = n.useState(() => c(0));
    return (
        n.useEffect(
            () =>
                e({
                    onTimeUpdate: (e) => {
                        d(c(e));
                    },
                }),
            [e, c],
        ),
        (0, a.jsx)(x.A, {
            speakingUserIds: l ? u.speakingUserIds : j,
            activeSoundboards: t ? u.activeSoundboards : b,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var y = l(696016),
    E = l(594731),
    N = l(70585);
function A(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(y.gC.ALL)) return !1;
        else return !0;
    return e.includes(y.gC.APPLICATION) ? !l : e.includes(y.gC.VOICE) ? !a : !e.includes(y.gC.SOUNDBOARD) || !n;
}
function k(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: s } = e,
        r = n.useCallback(
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
        ref: r,
        src: i ?? void 0,
        muted: s,
        preload: "auto",
        className: N.R,
        onLoadedMetadata: o,
    });
}
let w = n.forwardRef(function (e, t) {
    let {} = e,
        {
            cropStart: l,
            cropEnd: i,
            setVideoPlayerRef: s,
            videoURL: r,
            audioURL: c,
            applicationAudioEnabled: u,
            voiceAudioEnabled: m,
            soundboardAudioEnabled: v,
            clip: x,
        } = (0, g.T)(),
        j = n.useRef({}),
        b = n.useRef(!1),
        [w, R] = n.useState([]),
        T = n.useCallback(() => {
            let e = j.current.main;
            if (null == e) return;
            let t = (0, d.round)(e.currentTime, 3),
                a = (0, d.round)(l, 3);
            if (t >= (null != i ? (0, d.round)(i, 3) : (0, d.round)(e.duration, 3)) || t < a) {
                for (let e of Object.values(j.current)) null != e && (e.currentTime = l);
                return !0;
            }
        }, [l, i]),
        L = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(y.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(y.gC.VOICE) || l.label.includes(y.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            R(t);
        }, []);
    (0, h.A)(() => {
        b.current && T() && I();
    });
    let I = n.useCallback(() => {
            for (let e of ((b.current = !0), T(), Object.values(j.current))) null != e && e.play();
        }, [T]),
        O = n.useCallback(() => {
            for (let e of Object.values(j.current)) null != e && e.pause();
        }, []),
        S = n.useCallback((e) => {
            for (let t of (j.current.main?.paused && (b.current = !1), Object.values(j.current)))
                null != t && (t.currentTime = e);
        }, []),
        M = n.useCallback(() => {
            j.current.main?.paused ? I() : O();
        }, [I, O]),
        _ = n.useCallback((e) => {
            j.current.main = e;
        }, []),
        D = n.useCallback((e, t) => {
            j.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: I, seek: S, pause: O, videoElement: j.current.main };
        return s(e), e;
    }, [I, S, O, s]);
    let P = n.useCallback(() => {
        S(l);
    }, [S, l]);
    if (null == r) return null;
    let U = x.type === o.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: E.DV,
        children: [
            U
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: _, src: r, muted: !0, preload: "auto" }),
                          (0, a.jsx)(p.A, { className: E.Ap }),
                      ],
                  })
                : (0, a.jsx)(f.A, {
                      onClick: M,
                      className: E.Ap,
                      ref: _,
                      src: r,
                      muted: A(":all", {
                          applicationAudioEnabled: u,
                          voiceAudioEnabled: m,
                          soundboardAudioEnabled: v,
                          isVoiceClip: U,
                      }),
                      preload: "auto",
                      onLoadedData: P,
                  }),
            (0, a.jsx)(C, {}),
            (0, a.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: c ?? void 0,
                muted: A(":application", {
                    applicationAudioEnabled: u,
                    voiceAudioEnabled: m,
                    soundboardAudioEnabled: v,
                    isVoiceClip: U,
                }),
                className: N.R,
                preload: "auto",
                ref: (e) => D(e, "main:application"),
                onLoadedMetadata: L,
            }),
            w.map((e) =>
                (0, a.jsx)(
                    k,
                    {
                        setRef: D,
                        audioTrackLabel: e,
                        src: c,
                        muted: A(e, {
                            applicationAudioEnabled: u,
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
var R = l(503698),
    T = l.n(R),
    L = l(702841),
    I = l(459192),
    O = l(990078),
    S = l(768622),
    M = l(661531),
    _ = l(27232),
    D = l(918715),
    P = l(297152),
    U = l(369606),
    G = l(138134),
    z = l(499373),
    B = l(175841),
    $ = l(215026),
    F = l(834730),
    V = l(534890),
    H = l(408278),
    K = l(461150),
    Z = l(782134),
    W = l(113494),
    X = l(898196),
    J = l(187322),
    Y = l(565645),
    Q = l(765671),
    q = l(287809),
    ee = l(531685),
    et = l(427262);
l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var el = l(602853),
    ea = l(602674),
    en = l(335416),
    ei = l(944939);
let es = new Map(),
    er = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: s, className: r } = e,
            o = n.useRef(null),
            { ref: c, width: u, height: d } = (0, Q.Ay)(),
            [m, h] = n.useState(null),
            f = (0, el.r)(M.A.colors.BACKGROUND_MOD_STRONG).hex();
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
            if (0 === u || 0 === i.length || null == o.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${u}`,
                l = es.get(e);
            if (null != l) return void h(l.waveform);
            let a = o.current,
                n = !1,
                s = (t) => {
                    if (n) return;
                    let { waveform: l, error: a } = t.data;
                    null != a ? y.nx.error("Failed to load waveform:", a) : (es.set(e, { waveform: l }), h(l));
                };
            return (
                a.addEventListener("message", s),
                (async () => {
                    try {
                        let e = (0, ea.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (n) return;
                        let l = [],
                            s = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let a = new Float32Array(e.getChannelData(l));
                                t.push(a), s.push(a.buffer);
                            }
                            l.push(t);
                        }
                        a.postMessage({ trackChannels: l, width: u }, s);
                    } catch (e) {
                        n || y.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (n = !0), a.removeEventListener("message", s);
                }
            );
        }, [i, t, u]),
        n.useEffect(() => {
            if (null == c.current || null == m || (u ?? 0) === 0 || (d ?? 0) === 0) return;
            let e = c.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / m.length,
                i = -(n * (en.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, a), (t.fillStyle = f);
            for (let e = 0; e < m.length; e++) {
                let l = m[e] * a,
                    s = e * n + i;
                t.fillRect(s, a, n - i, -l);
            }
        }, [f, u, c, d, m]),
        0 === i.length)
            ? null
            : (0, a.jsx)("div", {
                  className: T()(ei.k, r),
                  children: (0, a.jsx)("canvas", {
                      className: ei.s,
                      ref: c,
                      width: (u ?? 0) * 2,
                      height: (d ?? 0) * 2,
                      onMouseDown: s,
                  }),
              });
    });
function eo(e, t) {
    let l = e / y.YM;
    return t && (l /= y.iJ), l;
}
var ec = l(375708),
    eu = l(639790),
    ed = l(238559);
function em(e) {
    let { eventType: t, importance: l, style: i, title: s, description: r } = e,
        c = n.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        u = n.useMemo(() => {
            switch (t) {
                case o.rb.KILL:
                    return (0, a.jsx)(S.g, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                case o.rb.MULTIKILL:
                    return (0, a.jsx)(_.G, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                case o.rb.DEATH:
                    return (0, a.jsx)(D.V, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                case o.rb.ASSIST:
                    return (0, a.jsx)(P.E, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                case o.rb.ITEM:
                    return (0, a.jsx)(_.G, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                case o.rb.VICTORY:
                    return (0, a.jsx)(U.O, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                case o.rb.DEFEAT:
                    return (0, a.jsx)(G.i, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                case o.rb.LEVEL_UP:
                    return (0, a.jsx)(z.T, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                case o.rb.TREASURE:
                    return (0, a.jsx)(B.B, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                case o.rb.OBJECTIVE_KILL:
                    return (0, a.jsx)($.w, { size: "custom", width: c, height: c, color: M.A.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, c]);
    if (null == u) return null;
    let d = (0, a.jsx)("div", { className: ed.HS, style: i, children: u });
    return null != s || null != r
        ? null == s || null == r
            ? (0, a.jsx)(O.m, { text: s ?? r, position: "top", children: d })
            : (0, a.jsx)(I.u, { title: s, body: r ?? "", position: "top", children: d })
        : d;
}
function eh(e) {
    let { videoLength: t, clip: l, onMouseDown: i } = e,
        { timeNotches: s, subNotches: r } = n.useMemo(() => {
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
        className: ed.ZX,
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: ed.QY,
            children: [
                r.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: ed.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: ed.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                s.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: ed.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: ed.d9 }),
                                (0, a.jsxs)(F.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: ed.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(ef, { clip: l, videoLength: t }),
                (0, a.jsx)(ep, { clip: l, videoLength: t }),
                (0, a.jsx)(ev, { clip: l, videoLength: t }),
            ],
        }),
    });
}
function ef(e) {
    let { clip: t, videoLength: l } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === o.Gy.GAME_EVENT),
            [t.timeline, t.decision?.timestamp],
        ),
        s = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
                      em,
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
function ep(e) {
    let { clip: t, videoLength: l } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === o.Gy.SOUNDBOARD && !0 === e.signal.playing),
            [t.timeline, t.decision?.timestamp],
        ),
        s = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            if (null == l || (null == e.signal.emojiId && null == e.signal.emojiName)) return null;
            let n = q.default.getUser(e.signal.userId),
                i = (0, et.mG)(n);
            return (0, a.jsx)(
                I.u,
                {
                    title: e.signal.name,
                    body: i ?? "",
                    position: "top",
                    children: (0, a.jsx)("div", {
                        className: ed.HS,
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
function ev(e) {
    let { clip: t, videoLength: l } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === o.Gy.PHRASE),
            [t.timeline, t.decision?.timestamp],
        ),
        s = n.useCallback(
            (e) => {
                if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
                let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
                return a < 0 || a > l ? null : (a / l) * 100;
            },
            [l, t.decision?.timestamp, t.length],
        );
    return (0, a.jsx)(a.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            return null == l
                ? null
                : (0, a.jsx)(
                      I.u,
                      {
                          title: ec.intl.string(ec.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, a.jsx)("div", {
                              className: ed.HS,
                              style: { left: `${l}%` },
                              children: (0, a.jsx)(V.o, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: M.A.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
let ex = function (e) {
    let { sourceURL: t, voiceAudioTracks: l, transitionState: i } = e,
        {
            useCurrentTime: s,
            duration: r,
            isPlaying: o,
            cropStart: c,
            cropEnd: u,
            cropDuration: m,
            setCropStart: h,
            setCropEnd: p,
            play: v,
            pause: x,
            subscribe: j,
            seek: b,
            clip: C,
        } = (0, g.T)(),
        E = s(),
        N = n.useRef(null),
        [A, k] = n.useState(!1),
        [w, R] = n.useState(null),
        I = n.useRef(null),
        O = n.useRef(null),
        [S, M] = n.useState(!1),
        [_, D] = n.useState(null);
    n.useEffect(
        () =>
            j({
                onPlay: () => {
                    R(null), M(!1);
                },
            }),
        [j],
    );
    let { ref: P, width: U = 0, height: G = 0 } = (0, Q.Ay)(),
        z = (0, L.bG)([ee.A], () => ee.A.windowSize());
    n.useMemo(() => {
        z.width, z.height;
        let e = P.current;
        null != e && D(e.getBoundingClientRect());
    }, [z.width, z.height, U, P, i]);
    let B = n.useRef(null),
        $ = n.useRef({}),
        V = n.useCallback(
            (e, t) => {
                if (null == r) return;
                if (null == _) return null;
                let l = (((0, d.clamp)(e, _.left, _.right) - _.left) / _.width) * r,
                    a = (0, d.clamp)(l, 0, r),
                    n = w;
                null == n && t && ((n = a <= c ? "start" : a >= u ? "end" : "playhead"), o && (x(), M(!0)), R(n)),
                    "start" === n ? h(a) : "end" === n ? p(a) : "playhead" === n && b((0, d.clamp)(a, c, u));
            },
            [r, _, w, c, u, o, x, h, p, b],
        ),
        Y = n.useCallback(
            (e) => {
                if (null == r) return;
                let t = eo(r, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), h(c - t);
                        break;
                    case "ArrowRight":
                        (l = !0), h(c + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [r, h, c],
        ),
        q = n.useCallback(
            (e) => {
                if (null == r) return;
                let t = eo(r, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (l = !0), p(u - t);
                        break;
                    case "ArrowRight":
                        (l = !0), p(u + t);
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [r, p, u],
        ),
        et = n.useCallback(
            (e) => {
                V(e.clientX, !0);
            },
            [V],
        ),
        el = n.useCallback(
            (e) => {
                V(e.clientX, !1);
            },
            [V],
        ),
        ea = n.useCallback(() => {
            S && v(), M(!1), R(null);
        }, [S, v]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", el),
            document.addEventListener("mouseup", ea),
            () => {
                document.removeEventListener("mousemove", el), document.removeEventListener("mouseup", ea);
            }
        ),
        [el, ea],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = P.current,
                    t = N.current;
                if (null == e || null == t || !A) return;
                (e.height = G), (e.width = U);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "transparent"), l.fillRect(0, 0, U, G);
                let a = Math.ceil(G * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(U / a),
                    i = B.current;
                if (null == i) return;
                (i.width = a), (i.height = G);
                let s = i?.getContext("2d", { willReadFrequently: !0 });
                if (null == s) return;
                let o = $.current;
                if (o[n]?.length === n) {
                    for (let e = 0; e < n; e++) l.putImageData(o[n][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((i) => {
                        (t.onseeked = () => {
                            l.drawImage(t, a * e, 0, a, G), s.drawImage(t, 0, 0, a, G);
                            let r = s.getImageData(0, 0, a, G);
                            null == o[n] && (o[n] = []), (o[n][e] = r), i();
                        }),
                            (t.currentTime = (a / U) * r * e);
                    });
            })();
        }, [U, G, P, r, B, A]);
    let en = E - c,
        ei = n.useCallback(() => {
            b(Math.max(c, E - 10));
        }, [c, E, b]),
        es = n.useCallback(() => {
            b(Math.min(u, E + 10));
        }, [u, E, b]),
        em = n.useCallback(() => {
            o ? x() : v();
        }, [o, v, x]),
        ef = n.useCallback(() => k(!0), []),
        ep = (c / r) * 100,
        ev = (1 - (r - u) / r) * 100,
        ex = {
            background: `linear-gradient(to right, var(--black-500) ${ep}%, transparent ${ep}%, transparent ${ev}%, var(--black-500) ${ev}%)`,
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
                                ref: O,
                                className: ed.re,
                                children: (0, a.jsxs)(F.E, {
                                    variant: "text-sm/normal",
                                    className: ed.g7,
                                    color: "text-muted",
                                    children: [
                                        eg(en),
                                        (0, a.jsx)("span", { className: ed.xW, children: " / " }),
                                        eg(m),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: ed.s2,
                            children: [
                                (0, a.jsx)(H.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: K.q,
                                    onClick: ei,
                                    "aria-label": ec.intl.string(eu.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(H.K, {
                                    size: "md",
                                    icon: o ? W.E : Z.u,
                                    onClick: em,
                                    "aria-label": ec.intl.string(o ? ec.t.ZcgDJX : ec.t.RscU7I),
                                }),
                                (0, a.jsx)(H.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: X.i,
                                    onClick: es,
                                    "aria-label": ec.intl.string(eu.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(er, { onMouseDown: et, voiceAudioTracks: l, clipId: C.id, className: ed.ou }),
                (0, a.jsx)(eh, { onMouseDown: et, videoLength: r, clip: C }),
                (0, a.jsx)("div", {
                    className: ed.PH,
                    children: (0, a.jsxs)("div", {
                        className: T()(ed.IO, { [ed.Dg]: null != w }),
                        onMouseDown: et,
                        children: [
                            (0, a.jsx)("canvas", { className: ed.zj, ref: B }),
                            (0, a.jsx)("canvas", { className: ed.Ay, ref: P }),
                            (0, a.jsx)(J.vN, {
                                children: (0, a.jsx)("div", { tabIndex: 0, ref: I, className: ed.lG }),
                            }),
                            (0, a.jsx)(f.A, {
                                preload: "auto",
                                className: ed.Fi,
                                ref: N,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: ef,
                            }),
                            (0, a.jsx)("div", { className: ed.QT, style: ex }),
                            (0, a.jsxs)("div", {
                                className: ed.Ws,
                                style: {
                                    left: null != r ? `${(c / r) * 100}%` : "0",
                                    right: null != r ? `${((r - u) / r) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(J.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: T()(ed.uI, { [ed.cB]: "start" === w }),
                                            onMouseDown: et,
                                            onKeyDown: Y,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": c,
                                            "aria-valuetext": ej(c),
                                            "aria-valuemax": u - y.zj,
                                            "aria-label": ec.intl.string(ec.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: ed.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(J.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: T()(ed.H1, { [ed.cB]: "end" === w }),
                                            onMouseDown: et,
                                            onKeyDown: q,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": c + y.zj,
                                            "aria-valuenow": u,
                                            "aria-valuetext": ej(u),
                                            "aria-valuemax": r,
                                            "aria-label": ec.intl.string(ec.t.bBgBYo),
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
};
function eg(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function ej(e) {
    let t = Math.floor(e / 60),
        l = ec.intl.formatToPlainString(ec.t.iXLF9W, { minutes: t }),
        a = ec.intl.formatToPlainString(ec.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function eb(e) {
    let { transitionState: t } = e,
        { cropStart: l, cropEnd: c, videoPlayerRef: d, videoURL: m, audioTracks: h, clip: f } = (0, g.T)(),
        p = f.type === o.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!p) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if (document.activeElement?.tagName === "INPUT" || document.activeElement?.role === "textbox") return;
            let t = d.current;
            if (null == t) return;
            let a = d.current?.videoElement;
            if (null == a) return;
            let n = eo(a.duration, e.shiftKey),
                i = !1;
            switch (e.key) {
                case " ":
                    (i = !0), a.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (i = !0), t.seek(Math.max(l, a.currentTime - n));
                    break;
                case "ArrowRight":
                    (i = !0), t.seek(Math.min(c, a.currentTime + n));
            }
            i && (e.stopPropagation(), e.preventDefault());
        }
    }, [d, p, f.type, l, c]);
    let v = n.useMemo(() => h.filter((e) => e.trackName.includes(":voice")), [h]),
        x = n.useCallback(() => {
            (0, r.R)(
                {
                    items: [{ type: "IMAGE", url: f.thumbnail, proxyUrl: f.thumbnail, alt: f.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [f.thumbnail, f.name]);
    if (p)
        return (0, a.jsx)("div", {
            className: E.OJ,
            children:
                t !== i.ip.ENTERED
                    ? (0, a.jsx)(u, {})
                    : (0, a.jsx)("div", {
                          className: E.zT,
                          children: (0, a.jsx)(s.D, {
                              className: E.xS,
                              onClick: x,
                              children: (0, a.jsx)("img", { className: E.V_, src: f.thumbnail, alt: f.name ?? "" }),
                          }),
                      }),
        });
    let j = null == m || t !== i.ip.ENTERED;
    return (0, a.jsx)("div", {
        className: E.OJ,
        children: (0, a.jsxs)("div", {
            className: E.zT,
            children: [
                (0, a.jsx)("div", { className: E.nV }),
                j
                    ? (0, a.jsx)(u, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(w, { ref: d }),
                              (0, a.jsx)(ex, { transitionState: t, sourceURL: m, voiceAudioTracks: v }),
                          ],
                      }),
            ],
        }),
    });
}
