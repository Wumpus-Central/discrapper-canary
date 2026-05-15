l.d(t, { $: () => ln, default: () => li });
var a = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(17928),
    c = l(990078),
    o = l(521489),
    d = l(231723),
    u = l(192308),
    m = l(534514),
    h = l(408278),
    p = l(405433),
    f = l(241326),
    x = l(972213),
    v = l(775602),
    g = l(793574),
    j = l(688810),
    C = l(274372),
    b = l(607814),
    y = l(939249),
    A = l(548411),
    N = l(256905),
    E = l(372684),
    k = l(878185);
function w() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: k.OC }),
            (0, a.jsx)("div", {
                className: k.f4,
                children: (0, a.jsxs)("div", {
                    className: k.fL,
                    children: [
                        (0, a.jsx)("div", { className: k.u }),
                        (0, a.jsx)("div", { className: k.ou }),
                        (0, a.jsx)("div", { className: k.PH }),
                    ],
                }),
            }),
        ],
    });
}
l(321073);
var I = l(735438),
    L = l.n(I),
    M = l(194498),
    S = l(607470),
    R = l(226421),
    D = l(376595),
    T = l(773503);
l(323874), l(14289), l(35956);
var O = l(77729),
    P = l(956050);
let U = n.createContext(null);
function G(e) {
    var t, i, s;
    let r,
        c,
        o,
        d,
        u,
        m,
        h,
        { children: p, clip: f, modalContainerRef: x } = e,
        v = f.type === E.nQ.SCREENSHOT,
        {
            initialDuration: g,
            initialCropStart: j,
            initialCropEnd: C,
            initialCurrentTime: y,
        } = ((r = f.length / 1e3),
        (c = f.editMetadata?.start ?? 0),
        (o = f.editMetadata?.end ?? 0),
        (d = 0 !== c || (0 !== o && o !== r)),
        {
            initialDuration: r,
            initialCropStart: c,
            initialCropEnd: o,
            isCropped: d,
            initialCurrentTime: d ? c : r / 2,
        }),
        A = n.useMemo(
            () =>
                null == O.A.clips.getClipProtocolURLFromPath ? null : O.A.clips.getClipProtocolURLFromPath(f.filepath),
            [f.filepath],
        ),
        [N, k] = n.useState({
            clipName: f.name,
            isTemporary: f.isTemporary ?? !1,
            cropStart: j,
            cropEnd: 0 === C ? g : C,
            voiceAudioEnabled: f.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: f.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: f.editMetadata?.soundboardAudio ?? !0,
        }),
        {
            clipName: w,
            isTemporary: L,
            cropStart: S,
            cropEnd: R,
            voiceAudioEnabled: D,
            applicationAudioEnabled: T,
            soundboardAudioEnabled: G,
        } = N,
        z = n.useRef(null),
        V = n.useRef(y),
        [_, H] = n.useState(g),
        [F, $] = n.useState(!1),
        [K, B] = n.useState(!1),
        Z = n.useRef(new Set()),
        Y = n.useRef(!1),
        [Q, X] = n.useState(null),
        [q, W] = n.useState(null),
        [J, ee] = n.useState(null),
        [et, el] = n.useState([]),
        [ea, en] = n.useState(!1),
        ei = n.useCallback(
            () => ({
                ...f,
                name: w,
                editMetadata: { start: S, end: R, applicationAudio: T, voiceAudio: D, soundboardAudio: G },
            }),
            [f, w, S, R, T, D, G],
        ),
        es = n.useCallback((e) => {
            (z.current = e), X(e.videoElement);
        }, []),
        er = n.useCallback((e, t, l) => {
            W(e), el(t), ee(l);
        }, []),
        ec = n.useCallback(() => {
            en(!0);
        }, []);
    (t = f.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("92994"), l.b));
            return (
                (async function () {
                    let l;
                    try {
                        l = await O.A.clips.loadClip(t);
                    } catch {
                        ec();
                        return;
                    }
                    (e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: a } = e.data,
                            n = URL.createObjectURL(new Blob([t], { type: "video/mp4" })),
                            i = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            i.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        er(n, i, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })));
                    }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]);
                })(),
                () => {
                    e.terminate();
                }
            );
        }, [t, er, ec]),
        n.useEffect(
            () => () => {
                null != q && URL.revokeObjectURL(q);
            },
            [q],
        ),
        n.useEffect(
            () => () => {
                for (let e of et) URL.revokeObjectURL(e.url);
            },
            [et],
        ),
        n.useEffect(
            () => () => {
                null != J && URL.revokeObjectURL(J);
            },
            [J],
        ),
        (i = f.id),
        (s = { name: w, editMetadata: { start: S, end: R, voiceAudio: D, applicationAudio: T, soundboardAudio: G } }),
        ((u = n.useRef(s)).current = s),
        n.useEffect(() => {
            async function e() {
                let e = {},
                    t = u.current;
                v || null == A || (e = { thumbnail: await (0, P.m)(A, t.editMetadata.start) }),
                    (0, b.Yy)(i, { ...t, ...e });
            }
            return () => {
                e();
            };
        }, [i, A, v, u]),
        n.useEffect(() => {
            _ > 0 && R <= 0 && g <= 0 && k((e) => ({ ...e, cropEnd: _ }));
        }, [_, R, g]);
    let eo = n.useMemo(() => R - S, [S, R]),
        ed = n.useCallback(
            (e) => (
                Z.current.add(e),
                () => {
                    Z.current.delete(e);
                }
            ),
            [Z],
        ),
        {
            setCropStart: eu,
            setCropEnd: em,
            setCrop: eh,
        } = ((m = n.useCallback(
            (e) => {
                let t = (0, I.clamp)(e, 0, R - 1);
                k((e) => ({ ...e, cropStart: t })), z?.current?.seek(t);
            },
            [R, k, z],
        )),
        {
            setCropStart: m,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, I.clamp)(e, S + 1, _);
                    k((e) => ({ ...e, cropEnd: t })), z?.current?.seek(t);
                },
                [S, _, k, z],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    k((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [k],
            ),
        }),
        {
            play: ep,
            pause: ef,
            seek: ex,
        } = ((h = n.useCallback(() => {
            z?.current?.play();
        }, [z])),
        {
            play: h,
            pause: n.useCallback(() => {
                z?.current?.pause();
            }, [z]),
            seek: n.useCallback(
                (e) => {
                    z?.current?.seek(e);
                },
                [z],
            ),
        });
    (0, M.A)(() => {
        let e = z.current?.videoElement;
        if (null == e || !Y.current) return;
        let t = e.currentTime;
        V.current !== t && ((V.current = t), Z.current.forEach((e) => e.onTimeUpdate?.(t))),
            x.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        n.useEffect(() => {
            if (null == Q) return;
            let e = () => {
                    $(!0), Z.current.forEach((e) => e.onPlay?.());
                },
                t = () => {
                    $(!1), Z.current.forEach((e) => e.onPause?.());
                },
                l = () => {
                    H(Q.duration);
                },
                a = () => {
                    B(!0), H(Q.duration), z?.current?.seek(y);
                },
                n = () => {
                    Y.current = !0;
                };
            return (
                Q.addEventListener("play", e),
                Q.addEventListener("pause", t),
                Q.addEventListener("durationchange", l),
                Q.addEventListener("loadedmetadata", a),
                Q.addEventListener("seeked", n),
                Q.duration > 0 && H(Q.duration),
                Q.readyState >= 1 && (B(!0), z?.current?.seek(y)),
                $(!Q.paused),
                () => {
                    Q.removeEventListener("play", e),
                        Q.removeEventListener("pause", t),
                        Q.removeEventListener("durationchange", l),
                        Q.removeEventListener("loadedmetadata", a),
                        Q.removeEventListener("seeked", n);
                }
            );
        }, [Q, y, z, Z, $, B, H, Y]);
    let ev = n.useCallback((e) => {
            k((t) => ({ ...t, clipName: e }));
        }, []),
        eg = n.useCallback((e) => {
            k((t) => ({ ...t, isTemporary: e }));
        }, []),
        ej = n.useCallback((e) => {
            k((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eC = n.useCallback((e) => {
            k((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eb = n.useCallback((e) => {
            k((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        ey = n.useMemo(
            () =>
                function () {
                    let [e, t] = n.useState(V.current);
                    return (
                        n.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                Z.current.add(e),
                                () => {
                                    Z.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [V, Z],
        ),
        eA = n.useMemo(
            () => ({
                useCurrentTime: ey,
                duration: _,
                isPlaying: F,
                isLoaded: K,
                cropStart: S,
                cropEnd: R,
                cropDuration: eo,
                setCropStart: eu,
                setCropEnd: em,
                setCrop: eh,
                play: ep,
                pause: ef,
                seek: ex,
                subscribe: ed,
                setVideoPlayerRef: es,
                videoPlayerRef: z,
                videoURL: q,
                audioTracks: et,
                hasError: ea,
                applicationAudioEnabled: T,
                setApplicationAudioEnabled: ej,
                voiceAudioEnabled: D,
                setVoiceAudioEnabled: eC,
                soundboardAudioEnabled: G,
                setSoundboardAudioEnabled: eb,
                getEditedClip: ei,
                clipName: w,
                setClipName: ev,
                isTemporary: L,
                audioURL: J,
                setIsTemporary: eg,
                clip: f,
            }),
            [
                ey,
                _,
                F,
                K,
                S,
                R,
                eo,
                eu,
                em,
                eh,
                ep,
                ef,
                ex,
                J,
                ed,
                es,
                q,
                et,
                ea,
                T,
                ej,
                D,
                eC,
                G,
                eb,
                ei,
                w,
                ev,
                L,
                eg,
                f,
            ],
        );
    return (0, a.jsx)(U.Provider, { value: eA, children: p });
}
function z() {
    let e = n.useContext(U);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
let V = [],
    _ = [];
function H() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = z(),
        s = i.decision?.timestamp ?? 0,
        r = n.useMemo(() => new D.H(i.timeline ?? []), [i.timeline]),
        c = s - i.length,
        o = n.useCallback(
            (e) => {
                let t = 1e3 * L().round(e, 3);
                return r.getEventsAtTimestamp(c + t);
            },
            [r, c],
        ),
        [d, u] = n.useState(() => o(0));
    return (
        n.useEffect(
            () =>
                e({
                    onTimeUpdate: (e) => {
                        u(o(e));
                    },
                }),
            [e, o],
        ),
        (0, a.jsx)(T.A, {
            speakingUserIds: l ? d.speakingUserIds : V,
            activeSoundboards: t ? d.activeSoundboards : _,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var F = l(696016),
    $ = l(97451),
    K = l(813433);
function B(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(F.gC.ALL)) return !1;
        else return !0;
    return e.includes(F.gC.APPLICATION) ? !l : e.includes(F.gC.VOICE) ? !a : !e.includes(F.gC.SOUNDBOARD) || !n;
}
function Z(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: s } = e,
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
        src: i ?? void 0,
        muted: s,
        preload: "auto",
        className: K.R,
        onLoadedMetadata: c,
    });
}
let Y = n.forwardRef(function (e, t) {
    let {} = e,
        {
            cropStart: l,
            cropEnd: i,
            setVideoPlayerRef: s,
            videoURL: r,
            audioURL: c,
            applicationAudioEnabled: o,
            voiceAudioEnabled: d,
            soundboardAudioEnabled: u,
            clip: m,
        } = z(),
        h = n.useRef({}),
        p = n.useRef(!1),
        [f, x] = n.useState([]),
        v = n.useCallback(() => {
            let e = h.current.main;
            if (null == e) return;
            let t = (0, I.round)(e.currentTime, 3),
                a = (0, I.round)(l, 3);
            if (t >= (null != i ? (0, I.round)(i, 3) : (0, I.round)(e.duration, 3)) || t < a) {
                for (let e of Object.values(h.current)) null != e && (e.currentTime = l);
                return !0;
            }
        }, [l, i]),
        g = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(F.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(F.gC.VOICE) || l.label.includes(F.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            x(t);
        }, []);
    (0, M.A)(() => {
        p.current && v() && j();
    });
    let j = n.useCallback(() => {
            for (let e of ((p.current = !0), v(), Object.values(h.current))) null != e && e.play();
        }, [v]),
        C = n.useCallback(() => {
            for (let e of Object.values(h.current)) null != e && e.pause();
        }, []),
        b = n.useCallback((e) => {
            for (let t of (h.current.main?.paused && (p.current = !1), Object.values(h.current)))
                null != t && (t.currentTime = e);
        }, []),
        y = n.useCallback(() => {
            h.current.main?.paused ? j() : C();
        }, [j, C]),
        A = n.useCallback((e) => {
            h.current.main = e;
        }, []),
        N = n.useCallback((e, t) => {
            h.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: j, seek: b, pause: C, videoElement: h.current.main };
        return s(e), e;
    }, [j, b, C, s]);
    let k = n.useCallback(() => {
        b(l);
    }, [b, l]);
    if (null == r) return null;
    let w = m.type === E.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: $.DV,
        children: [
            w
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: A, src: r, muted: !0, preload: "auto" }),
                          (0, a.jsx)(R.A, { className: $.Ap }),
                      ],
                  })
                : (0, a.jsx)(S.A, {
                      onClick: y,
                      className: $.Ap,
                      ref: A,
                      src: r,
                      muted: B(":all", {
                          applicationAudioEnabled: o,
                          voiceAudioEnabled: d,
                          soundboardAudioEnabled: u,
                          isVoiceClip: w,
                      }),
                      preload: "auto",
                      onLoadedData: k,
                  }),
            (0, a.jsx)(H, {}),
            (0, a.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: c ?? void 0,
                muted: B(":application", {
                    applicationAudioEnabled: o,
                    voiceAudioEnabled: d,
                    soundboardAudioEnabled: u,
                    isVoiceClip: w,
                }),
                className: K.R,
                preload: "auto",
                ref: (e) => N(e, "main:application"),
                onLoadedMetadata: g,
            }),
            f.map((e) =>
                (0, a.jsx)(
                    Z,
                    {
                        setRef: N,
                        audioTrackLabel: e,
                        src: c,
                        muted: B(e, {
                            applicationAudioEnabled: o,
                            voiceAudioEnabled: d,
                            soundboardAudioEnabled: u,
                            isVoiceClip: w,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});
var Q = l(702841),
    X = l(459192),
    q = l(768622),
    W = l(661531),
    J = l(27232),
    ee = l(918715),
    et = l(297152),
    el = l(369606),
    ea = l(138134),
    en = l(499373),
    ei = l(175841),
    es = l(215026),
    er = l(834730),
    ec = l(534890),
    eo = l(461150),
    ed = l(782134),
    eu = l(113494),
    em = l(898196),
    eh = l(187322),
    ep = l(565645),
    ef = l(765671),
    ex = l(287809),
    ev = l(531685),
    eg = l(427262);
l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162);
var ej = l(602853),
    eC = l(602674),
    eb = l(335416),
    ey = l(664875);
let eA = new Map(),
    eN = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: r, className: c } = e,
            o = n.useRef(null),
            { ref: d, width: u, height: m } = (0, ef.Ay)(),
            [h, p] = n.useState(null),
            f = (0, ej.r)(W.A.colors.BACKGROUND_MOD_STRONG).hex();
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
                l = eA.get(e);
            if (null != l) return void p(l.waveform);
            let a = o.current,
                n = !1,
                s = (t) => {
                    if (n) return;
                    let { waveform: l, error: a } = t.data;
                    null != a ? F.nx.error("Failed to load waveform:", a) : (eA.set(e, { waveform: l }), p(l));
                };
            return (
                a.addEventListener("message", s),
                (async () => {
                    try {
                        let e = (0, eC.v)();
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
                        n || F.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (n = !0), a.removeEventListener("message", s);
                }
            );
        }, [i, t, u]),
        n.useEffect(() => {
            if (null == d.current || null == h || (u ?? 0) === 0 || (m ?? 0) === 0) return;
            let e = d.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / h.length,
                i = -(n * (eb.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, a), (t.fillStyle = f);
            for (let e = 0; e < h.length; e++) {
                let l = h[e] * a,
                    s = e * n + i;
                t.fillRect(s, a, n - i, -l);
            }
        }, [f, u, d, m, h]),
        0 === i.length)
            ? null
            : (0, a.jsx)("div", {
                  className: s()(ey.k, c),
                  children: (0, a.jsx)("canvas", {
                      className: ey.s,
                      ref: d,
                      width: (u ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
function eE(e, t) {
    let l = e / F.YM;
    return t && (l /= F.iJ), l;
}
var ek = l(375708),
    ew = l(445563),
    eI = l(474847);
function eL(e) {
    let { eventType: t, importance: l, style: i, title: s, description: r } = e,
        o = n.useMemo(() => (0 === l ? 16 : 0.5 === l ? 20 : 1 === l ? 24 : 16), [l]),
        d = n.useMemo(() => {
            switch (t) {
                case E.rb.KILL:
                    return (0, a.jsx)(q.g, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                case E.rb.MULTIKILL:
                    return (0, a.jsx)(J.G, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                case E.rb.DEATH:
                    return (0, a.jsx)(ee.V, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                case E.rb.ASSIST:
                    return (0, a.jsx)(et.E, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                case E.rb.ITEM:
                    return (0, a.jsx)(J.G, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                case E.rb.VICTORY:
                    return (0, a.jsx)(el.O, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                case E.rb.DEFEAT:
                    return (0, a.jsx)(ea.i, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                case E.rb.LEVEL_UP:
                    return (0, a.jsx)(en.T, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                case E.rb.TREASURE:
                    return (0, a.jsx)(ei.B, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                case E.rb.OBJECTIVE_KILL:
                    return (0, a.jsx)(es.w, { size: "custom", width: o, height: o, color: W.A.colors.ICON_STRONG });
                default:
                    return null;
            }
        }, [t, o]);
    if (null == d) return null;
    let u = (0, a.jsx)("div", { className: eI.HS, style: i, children: d });
    return null != s || null != r
        ? null == s || null == r
            ? (0, a.jsx)(c.m, { text: s ?? r, position: "top", children: u })
            : (0, a.jsx)(X.u, { title: s, body: r ?? "", position: "top", children: u })
        : u;
}
function eM(e) {
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
        className: eI.ZX,
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: eI.QY,
            children: [
                r.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eI.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eI.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                s.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eI.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eI.d9 }),
                                (0, a.jsxs)(er.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: eI.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(eS, { clip: l, videoLength: t }),
                (0, a.jsx)(eR, { clip: l, videoLength: t }),
                (0, a.jsx)(eD, { clip: l, videoLength: t }),
            ],
        }),
    });
}
function eS(e) {
    let { clip: t, videoLength: l } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === E.Gy.GAME_EVENT),
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
                      eL,
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
function eR(e) {
    let { clip: t, videoLength: l } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === E.Gy.SOUNDBOARD && !0 === e.signal.playing),
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
            let n = ex.default.getUser(e.signal.userId),
                i = (0, eg.mG)(n);
            return (0, a.jsx)(
                X.u,
                {
                    title: e.signal.name,
                    body: i ?? "",
                    position: "top",
                    children: (0, a.jsx)("div", {
                        className: eI.HS,
                        style: { left: `${l}%` },
                        children: (0, a.jsx)(ep.A, {
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
function eD(e) {
    let { clip: t, videoLength: l } = e,
        i = n.useMemo(
            () =>
                null == t.timeline || t.decision?.timestamp == null
                    ? []
                    : t.timeline.filter((e) => e.signal.type === E.Gy.PHRASE),
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
                      X.u,
                      {
                          title: ek.intl.string(ek.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, a.jsx)("div", {
                              className: eI.HS,
                              style: { left: `${l}%` },
                              children: (0, a.jsx)(ec.o, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: W.A.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      `${e.timestamp}-${t}`,
                  );
        }),
    });
}
let eT = function (e) {
    let { sourceURL: t, voiceAudioTracks: l, transitionState: i } = e,
        {
            useCurrentTime: r,
            duration: c,
            isPlaying: o,
            cropStart: d,
            cropEnd: u,
            cropDuration: m,
            setCropStart: p,
            setCropEnd: f,
            play: x,
            pause: v,
            subscribe: g,
            seek: j,
            clip: C,
        } = z(),
        b = r(),
        y = n.useRef(null),
        [A, N] = n.useState(!1),
        [E, k] = n.useState(null),
        w = n.useRef(null),
        L = n.useRef(null),
        [M, R] = n.useState(!1),
        [D, T] = n.useState(null);
    n.useEffect(
        () =>
            g({
                onPlay: () => {
                    k(null), R(!1);
                },
            }),
        [g],
    );
    let { ref: O, width: P = 0, height: U = 0 } = (0, ef.Ay)(),
        G = (0, Q.bG)([ev.A], () => ev.A.windowSize());
    n.useMemo(() => {
        G.width, G.height;
        let e = O.current;
        null != e && T(e.getBoundingClientRect());
    }, [G.width, G.height, P, O, i]);
    let V = n.useRef(null),
        _ = n.useRef({}),
        H = n.useCallback(
            (e, t) => {
                if (null == c) return;
                if (null == D) return null;
                let l = (((0, I.clamp)(e, D.left, D.right) - D.left) / D.width) * c,
                    a = (0, I.clamp)(l, 0, c),
                    n = E;
                null == n && t && ((n = a <= d ? "start" : a >= u ? "end" : "playhead"), o && (v(), R(!0)), k(n)),
                    "start" === n ? p(a) : "end" === n ? f(a) : "playhead" === n && j((0, I.clamp)(a, d, u));
            },
            [c, D, E, d, u, o, v, p, f, j],
        ),
        $ = n.useCallback(
            (e) => {
                if (null == c) return;
                let t = eE(c, e.shiftKey),
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
        K = n.useCallback(
            (e) => {
                if (null == c) return;
                let t = eE(c, e.shiftKey),
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
            [c, f, u],
        ),
        B = n.useCallback(
            (e) => {
                H(e.clientX, !0);
            },
            [H],
        ),
        Z = n.useCallback(
            (e) => {
                H(e.clientX, !1);
            },
            [H],
        ),
        Y = n.useCallback(() => {
            M && x(), R(!1), k(null);
        }, [M, x]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", Z),
            document.addEventListener("mouseup", Y),
            () => {
                document.removeEventListener("mousemove", Z), document.removeEventListener("mouseup", Y);
            }
        ),
        [Z, Y],
    ),
        n.useEffect(() => {
            !(async function () {
                let e = O.current,
                    t = y.current;
                if (null == e || null == t || !A) return;
                (e.height = U), (e.width = P);
                let l = e.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "transparent"), l.fillRect(0, 0, P, U);
                let a = Math.ceil(U * (t.videoWidth / t.videoHeight)),
                    n = Math.ceil(P / a),
                    i = V.current;
                if (null == i) return;
                (i.width = a), (i.height = U);
                let s = i?.getContext("2d", { willReadFrequently: !0 });
                if (null == s) return;
                let r = _.current;
                if (r[n]?.length === n) {
                    for (let e = 0; e < n; e++) l.putImageData(r[n][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < n; e++)
                    await new Promise((i) => {
                        (t.onseeked = () => {
                            l.drawImage(t, a * e, 0, a, U), s.drawImage(t, 0, 0, a, U);
                            let c = s.getImageData(0, 0, a, U);
                            null == r[n] && (r[n] = []), (r[n][e] = c), i();
                        }),
                            (t.currentTime = (a / P) * c * e);
                    });
            })();
        }, [P, U, O, c, V, A]);
    let X = b - d,
        q = n.useCallback(() => {
            j(Math.max(d, b - 10));
        }, [d, b, j]),
        W = n.useCallback(() => {
            j(Math.min(u, b + 10));
        }, [u, b, j]),
        J = n.useCallback(() => {
            o ? v() : x();
        }, [o, x, v]),
        ee = n.useCallback(() => N(!0), []),
        et = (d / c) * 100,
        el = (1 - (c - u) / c) * 100,
        ea = {
            background: `linear-gradient(to right, var(--black-500) ${et}%, transparent ${et}%, transparent ${el}%, var(--black-500) ${el}%)`,
        };
    return (0, a.jsx)("div", {
        className: eI.f4,
        children: (0, a.jsxs)("div", {
            className: eI.fL,
            children: [
                (0, a.jsxs)("div", {
                    className: eI.lx,
                    children: [
                        (0, a.jsx)("div", {
                            className: eI.k2,
                            children: (0, a.jsx)("div", {
                                ref: L,
                                className: eI.re,
                                children: (0, a.jsxs)(er.E, {
                                    variant: "text-sm/normal",
                                    className: eI.g7,
                                    color: "text-muted",
                                    children: [eO(X), (0, a.jsx)("span", { className: eI.xW, children: " / " }), eO(m)],
                                }),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: eI.s2,
                            children: [
                                (0, a.jsx)(h.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: eo.q,
                                    onClick: q,
                                    "aria-label": ek.intl.string(ew.default["dRVF+Z"]),
                                }),
                                (0, a.jsx)(h.K, {
                                    size: "md",
                                    icon: o ? eu.E : ed.u,
                                    onClick: J,
                                    "aria-label": ek.intl.string(o ? ek.t.ZcgDJX : ek.t.RscU7I),
                                }),
                                (0, a.jsx)(h.K, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: em.i,
                                    onClick: W,
                                    "aria-label": ek.intl.string(ew.default.yV2FLL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(eN, { onMouseDown: B, voiceAudioTracks: l, clipId: C.id, className: eI.ou }),
                (0, a.jsx)(eM, { onMouseDown: B, videoLength: c, clip: C }),
                (0, a.jsx)("div", {
                    className: eI.PH,
                    children: (0, a.jsxs)("div", {
                        className: s()(eI.IO, { [eI.Dg]: null != E }),
                        onMouseDown: B,
                        children: [
                            (0, a.jsx)("canvas", { className: eI.zj, ref: V }),
                            (0, a.jsx)("canvas", { className: eI.Ay, ref: O }),
                            (0, a.jsx)(eh.vN, {
                                children: (0, a.jsx)("div", { tabIndex: 0, ref: w, className: eI.lG }),
                            }),
                            (0, a.jsx)(S.A, {
                                preload: "auto",
                                className: eI.Fi,
                                ref: y,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: ee,
                            }),
                            (0, a.jsx)("div", { className: eI.QT, style: ea }),
                            (0, a.jsxs)("div", {
                                className: eI.Ws,
                                style: {
                                    left: null != c ? `${(d / c) * 100}%` : "0",
                                    right: null != c ? `${((c - u) / c) * 100}%` : "0",
                                },
                                children: [
                                    (0, a.jsx)(eh.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: s()(eI.uI, { [eI.cB]: "start" === E }),
                                            onMouseDown: B,
                                            onKeyDown: $,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": d,
                                            "aria-valuetext": eP(d),
                                            "aria-valuemax": u - F.zj,
                                            "aria-label": ek.intl.string(ek.t["+BTvw8"]),
                                            children: (0, a.jsx)("div", { className: eI.FV }),
                                        }),
                                    }),
                                    (0, a.jsx)(eh.vN, {
                                        children: (0, a.jsx)("button", {
                                            className: s()(eI.H1, { [eI.cB]: "end" === E }),
                                            onMouseDown: B,
                                            onKeyDown: K,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": d + F.zj,
                                            "aria-valuenow": u,
                                            "aria-valuetext": eP(u),
                                            "aria-valuemax": c,
                                            "aria-label": ek.intl.string(ek.t.bBgBYo),
                                            children: (0, a.jsx)("div", { className: eI.kn }),
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
function eO(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return (t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`;
}
function eP(e) {
    let t = Math.floor(e / 60),
        l = ek.intl.formatToPlainString(ek.t.iXLF9W, { minutes: t }),
        a = ek.intl.formatToPlainString(ek.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function eU(e) {
    let { transitionState: t, onClose: l } = e,
        { cropStart: i, cropEnd: s, videoPlayerRef: r, videoURL: c, audioTracks: o, clip: u } = z(),
        m = u.type === E.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!m) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        function e(e) {
            if (document.activeElement?.tagName === "INPUT" || document.activeElement?.role === "textbox") return;
            let t = r.current;
            if (null == t) return;
            let l = r.current?.videoElement;
            if (null == l) return;
            let a = eE(l.duration, e.shiftKey),
                n = !1;
            switch (e.key) {
                case " ":
                    (n = !0), l.paused ? t.play() : t.pause();
                    break;
                case "ArrowLeft":
                    (n = !0), t.seek(Math.max(i, l.currentTime - a));
                    break;
                case "ArrowRight":
                    (n = !0), t.seek(Math.min(s, l.currentTime + a));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [r, m, u.type, i, s]);
    let p = n.useMemo(() => o.filter((e) => e.trackName.includes(":voice")), [o]),
        f = n.useCallback(() => {
            (0, N.R)(
                {
                    items: [{ type: "IMAGE", url: u.thumbnail, proxyUrl: u.thumbnail, alt: u.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [u.thumbnail, u.name]);
    if (m)
        return (0, a.jsx)("div", {
            className: $.OJ,
            children:
                t !== d.ip.ENTERED
                    ? (0, a.jsx)(w, {})
                    : (0, a.jsx)("div", {
                          className: $.zT,
                          children: (0, a.jsx)(y.D, {
                              className: $.xS,
                              onClick: f,
                              children: (0, a.jsx)("img", { className: $.V_, src: u.thumbnail, alt: u.name ?? "" }),
                          }),
                      }),
        });
    let x = null == c || t !== d.ip.ENTERED;
    return (0, a.jsx)("div", {
        className: $.OJ,
        children: (0, a.jsxs)("div", {
            className: $.zT,
            children: [
                (0, a.jsx)("div", {
                    className: $.Gv,
                    children: (0, a.jsx)(h.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: A.Z,
                        "aria-label": ek.intl.string(ek.t["13/7kX"]),
                        onClick: l,
                    }),
                }),
                x
                    ? (0, a.jsx)(w, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(Y, { ref: r }),
                              (0, a.jsx)(eT, { transitionState: t, sourceURL: c, voiceAudioTracks: p }),
                          ],
                      }),
            ],
        }),
    });
}
var eG = l(342952),
    ez = l(92446),
    eV = l(364522),
    e_ = l(270003),
    eH = l(683071),
    eF = l(331322),
    e$ = l(821609),
    eK = l(292666),
    eB = l(790845),
    eZ = l(452027),
    eY = l(825484),
    eQ = l(365199),
    eX = l(442433),
    eq = l(429913),
    eW = l(47167),
    eJ = l(713654),
    e0 = l(137177),
    e1 = l(145497),
    e2 = l(734057),
    e3 = l(540999),
    e8 = l(71393),
    e5 = l(58703),
    e4 = l(403362);
function e9(e) {
    return n.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            switch (t.type) {
                case E.Gy.GAME_EVENT:
                    return t.description ?? t.title ?? ek.intl.string(ek.t.Cyxddp);
                case E.Gy.PHRASE:
                    return `"${t.text}"`;
            }
        }
        return ek.intl.string(ek.t.Cyxddp);
    }, [e.name, e.decision]);
}
var e6 = l(794905),
    e7 = l(16590),
    te = l(567282);
function tt(e) {
    let { channelId: t, onClose: i } = e,
        {
            getEditedClip: s,
            voiceAudioEnabled: c,
            setVoiceAudioEnabled: o,
            applicationAudioEnabled: d,
            setApplicationAudioEnabled: f,
            soundboardAudioEnabled: x,
            setSoundboardAudioEnabled: v,
            pause: g,
            clipName: j,
            setClipName: y,
            isTemporary: A,
            setIsTemporary: N,
            clip: k,
        } = z(),
        w = k.type === E.nQ.SCREENSHOT,
        I = (0, eq.h)(k.applicationId),
        L = (0, r.bG)([C.A], () => C.A.isClipExporting(k.id)),
        { onShareClick: M } = (0, e6.A)(t),
        S = (0, r.bG)([e3.A], () => e3.A.isDeveloper),
        R = e9(k),
        D = n.useCallback(async () => {
            await (0, b.w7)(k.id), N(!1);
        }, [k.id, N]),
        T = (0, r.yK)([ex.default], () => k.users.map(ex.default.getUser).filter(e4.Vq)),
        O = (0, r.bG)([e8.A], () => (k.version >= 3 && null != k.guildId ? e8.A.getGuild(k.guildId) : null)),
        P = (0, r.bG)([e2.A], () => (k.version >= 3 && null != k.channelId ? e2.A.getChannel(k.channelId) : null)),
        U = (0, eW.Ay)(P),
        G = null != P ? (0, eJ.gU)(P, O) : null;
    return (0, a.jsxs)("div", {
        className: te.XV,
        children: [
            (0, a.jsxs)("div", {
                className: te.eW,
                children: [
                    (0, a.jsx)("div", {
                        className: te.VW,
                        children: (0, a.jsx)(m.D, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            className: te.qd,
                            children: ek.intl.string(e7.default["snNYS+"]),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: te.Pz,
                        children:
                            S &&
                            (0, a.jsx)(h.K, {
                                onClick: function () {
                                    (0, u.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (t) => (0, a.jsx)(e, { ...t, clip: k });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: ez.Q,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                    }),
                ],
            }),
            (0, a.jsx)(eV.Ip, {
                className: te.Md,
                children: (0, a.jsxs)(e_.n, {
                    children: [
                        A &&
                            (0, a.jsx)(eH.w, {
                                type: "info",
                                children: (0, a.jsxs)(eF.B, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(er.E, {
                                            variant: "text-sm/normal",
                                            children: ek.intl.string(ek.t.EkUv4u),
                                        }),
                                        (0, a.jsx)(e$.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: D,
                                            text: ek.intl.string(ek.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(eK.k, {
                            label: ek.intl.string(ek.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? y(void 0) : y(e);
                            },
                            value: j,
                            minLength: F.U_,
                            maxLength: F.mk,
                            placeholder: R,
                        }),
                        !w &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(eB.A, { label: ek.intl.string(ek.t.GnQui9), checked: d, onChange: f }),
                                    (0, a.jsx)(eB.A, {
                                        label: ek.intl.string(ek.t["5mVOCb"]),
                                        checked: c,
                                        onChange: o,
                                    }),
                                    (0, a.jsx)(eB.A, {
                                        label: ek.intl.string(ek.t["8K7Ges"]),
                                        checked: x,
                                        onChange: v,
                                    }),
                                ],
                            }),
                        (0, a.jsx)(eZ.D, {
                            label: ek.intl.string(ek.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(er.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, e5.mk)(new Date(k.createdAt)),
                            }),
                        }),
                        (0, a.jsx)(eZ.D, {
                            label: ek.intl.string(ek.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(eG.A, { users: T, maxUsers: 10 }),
                        }),
                        null != I &&
                            (0, a.jsx)(eZ.D, {
                                label: ek.intl.string(e7.default.PACPOV),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: te._c,
                                    children: [
                                        (0, a.jsx)(e0.A, { game: I, size: e0.M.XXSMALL, className: te.Z9 }),
                                        (0, a.jsx)(er.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: te.lR,
                                            children: I?.name ?? k.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != O &&
                            (0, a.jsx)(eZ.D, {
                                label: ek.intl.string(ek.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: te._c,
                                    children: [
                                        (0, a.jsx)(e1.Ay, { guild: O, iconSize: 16, className: te.Z9 }),
                                        (0, a.jsx)(er.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: te.lR,
                                            children: O.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != P &&
                            null != G &&
                            (0, a.jsx)(eZ.D, {
                                label: ek.intl.string(ek.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: te._c,
                                    children: [
                                        (0, a.jsx)(G, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: te.Z9,
                                        }),
                                        (0, a.jsx)(er.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: te.lR,
                                            children: U,
                                        }),
                                    ],
                                }),
                            }),
                        k.version >= 3 &&
                            null != k.activity &&
                            (null != k.activity.state || null != k.activity.details) &&
                            (0, a.jsx)(eZ.D, {
                                label: ek.intl.string(ek.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, a.jsx)(er.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [k.activity.state, k.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: te.G3,
                children: (0, a.jsxs)(eY.e, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(e$.$, {
                            loading: L,
                            disabled: L,
                            variant: "primary",
                            icon: p.l,
                            iconPosition: "start",
                            onClick: () => M({ clips: [s()] }),
                            text: ek.intl.string(ek.t.RDE0Sc),
                        }),
                        (0, a.jsx)(h.K, {
                            "aria-label": ek.intl.string(ek.t.PdRCRg),
                            loading: L,
                            disabled: L,
                            variant: "secondary",
                            onClick: function (e) {
                                g(),
                                    (0, eX.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            l.e("66900"),
                                            l.e("98793"),
                                            l.e("73500"),
                                            l.e("18489"),
                                            l.e("36926"),
                                            l.e("69006"),
                                            l.e("80628"),
                                        ]).then(l.bind(l, 183903));
                                        return (l) =>
                                            (0, a.jsx)(e, { ...l, clips: [s()], channelId: t, onAfterDelete: i });
                                    });
                            },
                            icon: eQ.j,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var tl = l(280483),
    ta = l(562708),
    tn = l(289873),
    ti = l(139286),
    ts = l(962125),
    tr = l(989349),
    tc = l.n(tr),
    to = l(66455),
    td = l(890856),
    tu = l(778712),
    tm = l(777666),
    th = l(505930),
    tp = l(530005),
    tf = l(406810),
    tx = l(176781),
    tv = l(983851),
    tg = l(31300),
    tj = l(587895),
    tC = l(549685),
    tb = l(174459),
    ty = l(665039),
    tA = l(652215),
    tN = l(798594);
let tE = function (e) {
    let { clip: t, actionsDisabled: i, isNew: c, onEdit: o, onClick: d } = e,
        u = (0, r.yK)([ex.default], () => t.users.map((e) => ex.default.getUser(e)).filter(e4.Vq)),
        m = (0, r.bG)([e2.A], () => (null != t.channelId ? e2.A.getChannel(t.channelId) : null)),
        h = (0, r.bG)([e8.A], () => (null != t.guildId ? e8.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, j.Ay)(g.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: x, isMultiSelectMode: v } = n.useContext(ln),
        [b, y] = n.useState(!1),
        A = n.useRef(null),
        N = (0, to.A)(t.editMetadata?.start ?? 0),
        k = f.has(t.id),
        w = t.type === E.nQ.SCREENSHOT,
        I = (0, eW.Ay)(m),
        L = "" === t.applicationName && null != I && "" !== I ? I : t.applicationName,
        M = (0, e5.Fe)(new Date(t.createdAt)),
        S = n.useMemo(() => {
            let e = [];
            return (
                t.type === E.nQ.VOICE_CLIP
                    ? (h?.name != null && e.push(h.name), null != I && e.push(I))
                    : ("" !== L && null != L && e.push(L),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [L, h?.name, I, t.activity?.state, t.activity?.details, t.type]),
        R = n.useCallback(() => {
            let e = A.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        D = n.useCallback(() => {
            if (!0 === w) return;
            let e = A.current;
            null != e && e.paused && ((e.currentTime = N.current), A.current?.play());
        }, [w, N]),
        T = n.useCallback(() => {
            if (!0 === w) return;
            let e = A.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [w, t.editMetadata?.start]),
        O = n.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && T();
            },
            [T],
        ),
        P = n.useCallback(() => {
            y(!1);
        }, []),
        U = n.useCallback(
            (e) => {
                y(!0), A.current?.pause();
                let n =
                    v && f.size > 0
                        ? Array.from(f)
                              .map((e) => C.A.getClipById(e))
                              .filter(e4.Vq)
                        : [t];
                (0, eX.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("66900"),
                            l.e("98793"),
                            l.e("73500"),
                            l.e("18489"),
                            l.e("36926"),
                            l.e("69006"),
                            l.e("80628"),
                        ]).then(l.bind(l, 183903));
                        return (l) =>
                            (0, a.jsx)(e, {
                                ...l,
                                clips: n,
                                actionsDisabled: i,
                                showShareAndEdit: !0,
                                onShare: () => {
                                    tb.default.track(tA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    o(t), tb.default.track(tA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: R,
                                onAfterDelete: () => {
                                    tb.default.track(tA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: P },
                );
            },
            [t, v, f, i, R, P, o],
        ),
        G = n.useCallback(
            (e) => {
                i || (e.preventDefault(), e.stopPropagation(), U(e));
            },
            [i, U],
        ),
        z = n.useCallback(
            (e) => {
                i ||
                    (e.shiftKey ? (e.preventDefault(), x(t.id)) : v ? x(t.id) : null != d && d(t),
                    tb.default.track(tA.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [i, v, x, t, d],
        );
    return (0, a.jsx)(j.f5, {
        value: p,
        children: (0, a.jsxs)(td.s, {
            "aria-disabled": i,
            "aria-label": ek.intl.string(!0 === w ? ek.t["HO/oXl"] : ek.t.bt75uw),
            onClick: i ? void 0 : z,
            onContextMenu: G,
            className: s()(tN.QN, { [tN.r9]: i, [tN.in]: b, [tN.wH]: k }),
            onBlur: O,
            onFocus: D,
            onMouseOver: D,
            onMouseLeave: T,
            children: [
                (0, a.jsx)(tk, { clip: t, isNew: c, videoRef: A, onOpenContextMenu: U, actionsDisabled: i }),
                (0, a.jsxs)("div", {
                    className: tN.wI,
                    children: [
                        (0, a.jsx)(tL, { clip: t }),
                        (0, a.jsxs)("div", {
                            className: tN.i0,
                            children: [
                                (0, a.jsx)(tw, { clip: t }),
                                (0, a.jsx)(er.E, {
                                    className: tN.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: S,
                                }),
                                (0, a.jsx)(er.E, {
                                    className: tN.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: M,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: tN.jW,
                            children: (0, a.jsx)(eG.A, {
                                maxUsers: 3,
                                users: u,
                                size: tu._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && D());
                                },
                                "aria-label": ek.intl.string(ek.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function tk(e) {
    let { clip: t, isNew: l, videoRef: i, onOpenContextMenu: s, actionsDisabled: r } = e,
        o = 0 === t.length,
        d = !0 === t.pending,
        [u, m] = n.useState(0);
    n.useEffect(() => {
        let e = i.current;
        if (null == e || o) return;
        let l = null,
            a = () => {
                if (e.paused || e.ended) {
                    (l = null), m(0);
                    return;
                }
                let n = t.editMetadata?.start ?? 0,
                    i = t.editMetadata?.end ?? e.duration,
                    s = ((e.currentTime - n) / (i - n)) * 100;
                m(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (l = requestAnimationFrame(a));
            },
            n = () => {
                null == l && (l = requestAnimationFrame(a));
            },
            s = () => {
                null != l && (cancelAnimationFrame(l), (l = null), m(0));
            };
        return (
            e.addEventListener("play", n),
            e.addEventListener("pause", s),
            e.addEventListener("ended", s),
            e.paused || n(),
            () => {
                null != l && (cancelAnimationFrame(l), m(0)),
                    e.removeEventListener("play", n),
                    e.removeEventListener("pause", s),
                    e.removeEventListener("ended", s);
            }
        );
    }, [i, o, t.editMetadata]);
    let { durationDisplay: p, isClipEdited: f } = n.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                a = !1;
            if (null != t.editMetadata) {
                let n = null != l && 1e3 * l < t.length,
                    i =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (a = n || i), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let n = tc().duration(e),
                i = n.minutes(),
                s = n.seconds();
            return 0 === i
                ? { durationDisplay: `${s}s`, isClipEdited: a }
                : { durationDisplay: `${i}:${s.toString().padStart(2, "0")}`, isClipEdited: a };
        }, [t.length, t.editMetadata]),
        x = n.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), b.XK(t);
            },
            [t],
        ),
        v = n.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, a.jsxs)("div", {
        className: tN.QB,
        children: [
            (0, a.jsx)("div", { className: tN.ne }),
            !d && l && (0, a.jsx)(tm.Lp, { className: tN.Ad, text: ek.intl.string(ek.t.y2b7CA) }),
            !r &&
                (0, a.jsxs)("div", {
                    className: tN.g3,
                    children: [
                        (0, a.jsx)(
                            c.m,
                            {
                                text: ek.intl.string(t.isFavorite ? e7.default.IZsalP : e7.default.ihBfyA),
                                position: "top",
                                children: (0, a.jsx)(h.K, {
                                    onClick: x,
                                    icon: t.isFavorite ? J.G : th.y,
                                    "aria-label": ek.intl.string(ek.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, a.jsx)(h.K, {
                            onClick: v,
                            icon: tp.F,
                            "aria-label": ek.intl.string(ek.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, a.jsx)(tI, { clip: t, videoRef: i }),
            (0, a.jsxs)("div", {
                className: tN.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, a.jsxs)("div", {
                            className: tN.OH,
                            children: [
                                t.isTemporary && (0, a.jsx)(tf.O, { color: "white", size: "xs" }),
                                (0, a.jsx)(er.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ek.intl.string(ek.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !o &&
                        (0, a.jsxs)("div", {
                            className: tN.OH,
                            children: [
                                f && (0, a.jsx)(tC.A, { color: "white", width: 16, height: 16 }),
                                (0, a.jsx)("span", {
                                    children: (0, a.jsx)(er.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: d ? ek.intl.string(ek.t["2Fp7OP"]) : p,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !o &&
                u > 0 &&
                (0, a.jsx)("div", {
                    className: tN.X7,
                    children: (0, a.jsx)("div", { className: tN.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function tw(e) {
    let { clip: t } = e,
        l = e9(t),
        n = "" !== l;
    return (0, a.jsx)(er.E, {
        className: tN.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: n ? l : t.name,
    });
}
function tI(e) {
    let { clip: t, videoRef: l } = e,
        n = (0, ty.j)(t),
        i = t.type === E.nQ.SCREENSHOT;
    return t.type === E.nQ.VOICE_CLIP
        ? (0, a.jsx)(R.A, { className: tN.fT })
        : i
          ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: tN.fT })
          : null != n
            ? (0, a.jsx)(S.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: n,
                  loop: !0,
                  className: tN.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: tN.fT })
              : (0, a.jsx)("div", {
                    className: s()(tN.fT, tN.Is),
                    children: (0, a.jsx)(tx.x, { color: W.A.colors.ICON_MUTED }),
                });
}
function tL(e) {
    let { clip: t } = e,
        l = (0, r.bG)([tj.A], () => (null != t.applicationId ? tj.A.getApplication(t.applicationId) : null)),
        n = l?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: tN.gS,
        "aria-hidden": "true",
        children:
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: tN.NH })
                : t.type === E.nQ.VOICE_CLIP
                  ? (0, a.jsx)(tv.H, { size: "sm", color: "currentColor" })
                  : (0, a.jsx)(tg.k, { size: "sm", color: "currentColor" }),
    });
}
function tM(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, width: s = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/469fc21d7c695426b2a4476c47ce30c6ff93031a6c38a6bdf12f95264ae547f6.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
var tS = l(687966),
    tR = l(475358),
    tD = l(123292),
    tT = l(292801),
    tO = l(780964),
    tP = l(766075),
    tU = l(532624),
    tG = l(350535),
    tz = l(311162);
function tV(e) {
    let { header: t, description: l } = e;
    return (0, a.jsxs)("div", {
        className: tz.Nr,
        children: [t, (0, a.jsx)(er.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function t_() {
    let e = (0, Q.bG)([tU.Ay], () => tU.Ay.getKeybindForAction(tA.hCu.SAVE_CLIP)),
        t = null != e ? tG.dI(e.shortcut, !0) : null;
    return (0, a.jsxs)("div", {
        className: tz.kR,
        children: [
            (0, a.jsx)(tV, {
                header: (0, a.jsx)(tS._, { size: "refresh_sm", color: W.A.colors.ICON_DEFAULT }),
                description: ek.intl.string(e7.default["4K56sP"]),
            }),
            (0, a.jsx)(tV, {
                header: null != t ? (0, a.jsx)(tR.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  ek.intl.format(e7.default.BIwQis, { keybind: t }),
                                  (0, a.jsx)("div", {
                                      className: tz.JH,
                                      children: (0, a.jsx)(tD.Q, {
                                          text: ek.intl.string(e7.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, tP.openUserSettings)(tO.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ek.intl.string(e7.default.HOUDUm),
            }),
            (0, a.jsx)(tV, {
                header: (0, a.jsx)(tT.t, { size: "refresh_sm", color: W.A.colors.ICON_DEFAULT }),
                description: ek.intl.string(e7.default.DLzdl7),
            }),
        ],
    });
}
function tH(e) {
    let { isEmptyBecauseQuery: t } = e;
    return (0, a.jsx)("div", {
        className: tz.kL,
        children: (0, a.jsxs)("div", {
            className: tz.Qs,
            children: [
                (0, a.jsx)(tM, { width: 213, height: 135, alt: "" }),
                (0, a.jsx)(m.D, {
                    className: tz.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ek.intl.string(e7.default["+M2iLf"]) : ek.intl.string(e7.default.m2GEpP),
                }),
                t
                    ? (0, a.jsx)(er.E, {
                          className: tz.h_,
                          variant: "text-md/medium",
                          children: ek.intl.string(e7.default.xkY5xS),
                      })
                    : (0, a.jsx)(t_, {}),
            ],
        }),
    });
}
var tF = l(352528);
let t$ = 16 / 9,
    tK = [0, 16, 0, 16],
    tB = tK[1] + tK[3];
function tZ(e, t) {
    return Math.ceil(t / e);
}
function tY(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: i, onEdit: s } = e,
        [c, o] = n.useState(!0),
        [d, u] = n.useState({ width: 0, height: 0 }),
        h = (0, r.bG)([C.A], () => C.A.getSettings().storageLocation),
        p = (0, r.yK)([C.A], () => C.A.getNewClipIds()),
        f = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0);
    (0, ti.A)(
        {
            type: ta.ImpressionTypes.MODAL,
            name: ta.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: c },
        [t.length, c],
    );
    let x = n.useMemo(() => {
            let e = [],
                l = new Map(),
                a = [],
                n = new Date();
            n.setHours(0, 0, 0, 0);
            let i = n.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        n = new Date(t);
                    if ((n.setHours(0, 0, 0, 0), n.getTime() === i)) a.push(e);
                    else {
                        let a = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            n = l.get(a) ?? [];
                        l.set(a, [...n, e]);
                    }
                }),
                a.length > 0)
            ) {
                let t = a.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: ek.intl.string(ek.t["kB2R/0"]),
                    description: t ? ek.intl.string(ek.t["6AXirz"]) : void 0,
                    clips: a,
                });
            }
            return (
                Array.from(l.entries()).forEach((t) => {
                    let [l, a] = t;
                    e.push({ type: "monthyear", title: l, clips: a });
                }),
                e
            );
        }, [t]),
        { width: v } = d,
        { tileWidth: g, columns: j } = n.useMemo(() => {
            var e;
            let l, a, n, i, s;
            return (
                (e = t.length),
                (n = 16 * ((a = Math.max(1, Math.floor(((l = v - tB) + 16) / 336))) - 1)),
                (i = Math.max(320, (l - n) / a)),
                (s = tZ(a, e)),
                { tileWidth: i, columns: a, rows: s }
            );
        }, [t.length, v]);
    n.useEffect(() => {
        !(async function () {
            o(!0);
            try {
                await b.Fb(h);
            } finally {
                o(!1);
            }
        })();
    }, [h]);
    let y = n.useMemo(() => x.map((e) => tZ(j, e.clips.length)), [x, j]),
        A = n.useMemo(() => y.reduce((e, t) => e + t, 0), [y]),
        N = Math.floor(g / t$),
        E = n.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: n } = t,
                    r = x[l];
                if (null == r) return null;
                let c = n * j,
                    o = r.clips.slice(c, c + j);
                return (0, a.jsx)(
                    "div",
                    {
                        className: tF.UX,
                        children: o.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    style: { width: g },
                                    children: (0, a.jsx)(tE, {
                                        actionsDisabled: f,
                                        isNew: p.includes(e.id),
                                        onClick: i ?? s,
                                        onEdit: s,
                                        clip: e,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                    },
                    `row-${l}-${n}`,
                );
            },
            [x, j, g, f, p, i, s],
        ),
        k = n.useCallback(
            (e) => {
                let t = x[e];
                return t?.description != null ? 66 : 44;
            },
            [x],
        ),
        w = n.useCallback(
            (e) => {
                let t = x[e];
                return null == t
                    ? null
                    : (0, a.jsxs)(
                          "div",
                          {
                              className: tF.aE,
                              children: [
                                  (0, a.jsx)(m.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, a.jsx)(er.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tF.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [x],
        );
    return c || 0 !== x.length
        ? c
            ? (0, a.jsx)("div", { className: tF.dc, children: (0, a.jsx)(tn.y, {}) })
            : (0, a.jsx)(ts.A, {
                  listPadding: tK,
                  renderRow: E,
                  renderSectionHeader: w,
                  rowCount: A,
                  rowCountBySection: y,
                  rowHeight: N + 68 + 16,
                  sectionHeaderHeight: k,
                  onResize: u,
              })
        : (0, a.jsx)(tH, { isEmptyBecauseQuery: l > 0 });
}
var tQ = l(922016),
    tX = l(783977),
    tq = l(625903),
    tW = l(892547),
    tJ = l(91871),
    t0 = l.n(tJ),
    t1 = l(980707),
    t2 = l(477782),
    t3 = l(583650),
    t8 = l(353640);
let t5 = {
        query: "",
        sortOrder: "descending",
        selectedGameId: null,
        selectedUserIds: new Set(),
        selectedActivity: null,
        selectedGuildId: null,
        selectedYear: null,
    },
    t4 = (0, t8.v)((e) => ({
        ...t5,
        setQuery: (t) => e({ query: t }),
        setSortOrder: (t) => e({ sortOrder: t }),
        setSelectedGameId: (t) => e({ selectedGameId: t }),
        setSelectedUserIds: (t) => e({ selectedUserIds: t }),
        toggleUserId: (t) =>
            e((e) => {
                let l = new Set(e.selectedUserIds);
                return l.has(t) ? l.delete(t) : l.add(t), { selectedUserIds: l };
            }),
        setSelectedActivity: (t) => e({ selectedActivity: t }),
        setSelectedGuildId: (t) => e({ selectedGuildId: t }),
        setSelectedYear: (t) => e({ selectedYear: t }),
        clearFilters: () =>
            e({ selectedUserIds: new Set(), selectedActivity: null, selectedGuildId: null, selectedYear: null }),
        resetFilters: () => e(t5),
    }));
function t9(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: i,
            selectedActivity: s,
            selectedGuildId: r,
            selectedYear: c,
            sortOrder: o,
            toggleUserId: d,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setSelectedYear: h,
            setSortOrder: p,
            clearFilters: f,
        } = t4(),
        x = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = ex.default.getUser(e);
                        if (null != t) {
                            let a = t.globalName ?? t.username;
                            l.push({ userId: e, name: a });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        v = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e)
                        l.activity?.state != null && t.add(l.activity.state),
                            l.activity?.details != null && t.add(l.activity.details);
                    return Array.from(t).sort((e, t) => e.localeCompare(t));
                })(l),
            [l],
        ),
        g = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = e8.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        j = n.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) {
                        let e = new Date(l.createdAt).getFullYear();
                        t.add(e);
                    }
                    return Array.from(t).sort((e, t) => t - e);
                })(l),
            [l],
        ),
        [C, b] = n.useState(""),
        [y, A] = n.useState(""),
        [N, E] = n.useState(""),
        k = n.useMemo(
            () => (0 === C.trim().length ? x : x.filter((e) => t0()(C.toLowerCase(), e.name.toLowerCase()))),
            [x, C],
        ),
        w = n.useMemo(
            () => (0 === y.trim().length ? g : g.filter((e) => t0()(y.toLowerCase(), e.name.toLowerCase()))),
            [g, y],
        ),
        I = n.useMemo(
            () => (0 === N.trim().length ? v : v.filter((e) => t0()(N.toLowerCase(), e.toLowerCase()))),
            [v, N],
        ),
        L = i.size > 0 || null != s || null != r || null != c,
        M = n.useMemo(() => {
            if (0 !== i.size)
                return x
                    .filter((e) => i.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [i, x]),
        S = n.useMemo(() => {
            if (null == r) return;
            let e = g.find((e) => e.guildId === r);
            return e?.name;
        }, [r, g]),
        R = n.useMemo(() => s ?? void 0, [s]),
        D = n.useMemo(() => (null != c ? String(c) : void 0), [c]);
    return (0, a.jsxs)(t1.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ek.intl.string(ek.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, a.jsxs)(t2.rX, {
                label: "Filter",
                children: [
                    x.length > 0 &&
                        (0, a.jsxs)(t2.Dr, {
                            id: "participants",
                            label: ek.intl.string(ek.t.YQ6dJg),
                            subtext: M,
                            children: [
                                x.length > 20 &&
                                    (0, a.jsx)(t2.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(t3.V, {
                                                ...e,
                                                query: C,
                                                onChange: b,
                                                ref: t,
                                                placeholder: ek.intl.string(ek.t["5h0QOP"]),
                                            }),
                                    }),
                                k.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        t2.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: i.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    g.length > 0 &&
                        (0, a.jsxs)(t2.Dr, {
                            id: "servers",
                            label: ek.intl.string(ek.t["5qyruI"]),
                            subtext: S,
                            children: [
                                g.length > 20 &&
                                    (0, a.jsx)(t2.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(t3.V, {
                                                ...e,
                                                query: y,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ek.intl.string(ek.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(t2.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ek.intl.string(ek.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                w.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        t2.iD,
                                        {
                                            id: `server-${t}`,
                                            group: "server",
                                            label: l,
                                            action: () => m(t),
                                            checked: r === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    v.length > 0 &&
                        (0, a.jsxs)(t2.Dr, {
                            id: "activities",
                            label: ek.intl.string(ek.t.agRtPG),
                            subtext: R,
                            children: [
                                v.length > 20 &&
                                    (0, a.jsx)(t2.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(t3.V, {
                                                ...e,
                                                query: N,
                                                onChange: E,
                                                ref: t,
                                                placeholder: ek.intl.string(ek.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(t2.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ek.intl.string(ek.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                I.map((e) =>
                                    (0, a.jsx)(
                                        t2.iD,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => u(e),
                                            checked: s === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    j.length > 0 &&
                        (0, a.jsxs)(t2.Dr, {
                            id: "years",
                            label: ek.intl.string(ek.t.w9zd68),
                            subtext: D,
                            children: [
                                (0, a.jsx)(t2.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ek.intl.string(ek.t["2/yeUU"]),
                                    action: () => h(null),
                                    checked: null == c,
                                }),
                                j.map((e) =>
                                    (0, a.jsx)(
                                        t2.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => h(e),
                                            checked: c === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsxs)(t2.rX, {
                label: ek.intl.string(ek.t.XvNMNk),
                children: [
                    (0, a.jsx)(t2.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ek.intl.string(ek.t["4LLKx3"]),
                        action: () => p("descending"),
                        checked: "descending" === o,
                    }),
                    (0, a.jsx)(t2.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ek.intl.string(ek.t["0gitSE"]),
                        action: () => p("ascending"),
                        checked: "ascending" === o,
                    }),
                ],
            }),
            L &&
                (0, a.jsx)(t2.rX, {
                    children: (0, a.jsx)(t2.Dr, { id: "clear-filters", label: ek.intl.string(ek.t.FbDgiu), action: f }),
                }),
        ],
    });
}
var t6 = l(174726);
let t7 = n.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: i } = t4(),
            s = (0, Q.bG)([tU.Ay], () => tU.Ay.getKeybindForAction(tA.hCu.SAVE_CLIP)),
            r = t4(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            o = n.useCallback(() => {
                (0, tP.openUserSettings)(tO.X.CLIPS_PANEL);
            }, []),
            d = n.useCallback(() => i(""), [i]),
            u = null != s ? tG.dI(s.shortcut, !0) : null,
            p = n.useRef(null);
        return (0, a.jsxs)("div", {
            className: t6.aN,
            children: [
                (0, a.jsxs)("div", {
                    className: t6.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: t6.Pe,
                            children: [
                                (0, a.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ek.intl.string(ek.t.z2jK6X),
                                }),
                                null != u && (0, a.jsx)(tR.e, { className: t6.P, shortcut: u }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: t6.$s,
                            children: [
                                (0, a.jsx)(c.m, {
                                    text: ek.intl.string(ek.t.X7yRDm),
                                    children: (0, a.jsx)(tQ.Y, {
                                        position: "bottom",
                                        targetElementRef: p,
                                        renderPopout: (e) => (0, a.jsx)(t9, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, a.jsx)("div", {
                                                ref: p,
                                                children:
                                                    r > 0
                                                        ? (0, a.jsx)(e$.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: ek.intl.formatToPlainString(e7.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: tX.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, a.jsx)(h.K, {
                                                              icon: tX.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": ek.intl.string(ek.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, a.jsx)(c.m, {
                                    text: ek.intl.string(ek.t["3D5yo/"]),
                                    children: (0, a.jsx)(h.K, {
                                        onClick: o,
                                        icon: tq.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ek.intl.string(ek.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: t6.MT,
                    children: (0, a.jsx)(tW.I, {
                        placeholder: ek.intl.string(ek.t["5h0QOP"]),
                        query: l,
                        onChange: i,
                        onClear: d,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    le = n.memo(function (e) {
        let { name: t, count: l, icon: n, isSelected: i, onClick: r } = e;
        return (0, a.jsxs)(y.D, {
            className: s()(t6.MV, { [t6.wH]: i }),
            onClick: r,
            children: [
                (0, a.jsxs)("div", {
                    className: t6.tk,
                    children: [
                        n,
                        (0, a.jsx)(er.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: t6.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: t6.z2,
                    children: (0, a.jsx)(er.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function lt(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: i, allClips: s } = e,
        r = t4((e) => e.selectedGameId),
        c = t4((e) => e.setSelectedGameId),
        o = n.useMemo(() => t.map((e) => e.applicationId), [t]),
        d = (0, eq.A)(o),
        u = n.useCallback(() => c(null), [c]),
        h = n.useCallback(() => c("favorites"), [c]),
        p = n.useMemo(() => new Map(d.map((e) => [e?.id, e])), [d]);
    return (0, a.jsxs)("div", {
        className: t6.pz,
        children: [
            (0, a.jsx)(t7, { allClips: s }),
            (0, a.jsxs)("div", {
                className: t6.wp,
                children: [
                    (0, a.jsx)("div", {
                        className: t6.om,
                        children: (0, a.jsxs)("div", {
                            className: t6.Ep,
                            children: [
                                (0, a.jsx)(le, {
                                    name: ek.intl.string(ek.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, a.jsx)(tx.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, a.jsx)(le, {
                                    name: ek.intl.string(ek.t["9rlCk1"]),
                                    count: i.length,
                                    icon: (0, a.jsx)(J.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: h,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, a.jsxs)(eV.Ip, {
                            className: t6.om,
                            fade: !0,
                            children: [
                                (0, a.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: t6.a9,
                                    children: ek.intl.string(ek.t.URyqtP),
                                }),
                                (0, a.jsx)("div", {
                                    className: t6.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: n } = e;
                                        return (0, a.jsx)(
                                            le,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, a.jsx)(e0.A, { game: p.get(n), size: e0.M.XSMALL }),
                                                isSelected: r === n,
                                                onClick: () => c(n),
                                            },
                                            n,
                                        );
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function ll(e, t) {
    return "ascending" === t
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : "descending" === t
          ? e.sort((e, t) => t.createdAt - e.createdAt)
          : e;
}
var la = l(847455);
let ln = n.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function li(e) {
    let t,
        i,
        y,
        { channelId: A, onClose: N, onClipClick: E, transitionState: k, initialEditingClipId: w, ...I } = e;
    (0, tl.A)();
    let { analyticsLocations: L } = (0, j.Ay)(g.A.CLIPS_GALLERY),
        [M, S] = n.useState(new Set()),
        {
            clipsByGame: R,
            filteredClips: D,
            favoriteClips: T,
            allClips: O,
        } = ((t = (0, r.yK)([C.A], () => C.A.getClips())),
        (i = (0, r.bG)([C.A], () => C.A.getPendingClips())),
        (y = t4()),
        n.useMemo(() => {
            let e = [...i, ...t],
                l = new Map(),
                a = [];
            for (let t of e) {
                let e = (function (e, t) {
                    if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                        return !1;
                    if ("" !== t.query.trim()) {
                        let l = t.query.toLowerCase(),
                            a = null != e.name && t0()(l, e.name.toLowerCase()),
                            n = t0()(l, e.applicationName.toLowerCase()),
                            i = e.activity?.state != null && t0()(l, e.activity.state.toLowerCase()),
                            s = e.activity?.details != null && t0()(l, e.activity.details.toLowerCase());
                        if (!a && !n && !i && !s) return !1;
                    }
                    if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                    if (null !== t.selectedActivity) {
                        let l = e.activity?.state,
                            a = e.activity?.details;
                        if (l !== t.selectedActivity && a !== t.selectedActivity) return !1;
                    }
                    return (null === t.selectedYear || tc()(e.createdAt).year() === t.selectedYear) && !0;
                })(t, y);
                if ((e && a.push(t), null == t.applicationId)) continue;
                let n = l.get(t.applicationId);
                null == n
                    ? l.set(t.applicationId, {
                          clips: [t],
                          filteredClips: e ? [t] : [],
                          mostRecentClipCreatedAt: t.createdAt,
                          name: t.applicationName,
                      })
                    : (n.clips.push(t),
                      e && n.filteredClips.push(t),
                      t.createdAt > n.mostRecentClipCreatedAt && (n.mostRecentClipCreatedAt = t.createdAt));
            }
            let n = ll(a, y.sortOrder),
                s = ll(
                    a.filter((e) => e.isFavorite),
                    y.sortOrder,
                );
            return {
                clipsByGame: Array.from(l.entries())
                    .map((e) => {
                        let [t, l] = e;
                        return {
                            applicationId: t,
                            name: l.name,
                            count: l.filteredClips.length,
                            mostRecentClipCreatedAt: l.mostRecentClipCreatedAt,
                            filteredClips: ll(l.filteredClips, y.sortOrder),
                        };
                    })
                    .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
                allClips: e,
                filteredClips: n,
                favoriteClips: s,
            };
        }, [t, i, y])),
        { onShareClick: P } = (0, e6.A)(A),
        U = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        [z, V] = n.useState(null != w ? "editing" : "gallery"),
        [_, H] = n.useState(w ?? null),
        F = (0, r.bG)([C.A], () => (null != _ ? C.A.getClipById(_) : null), [_]),
        $ = n.useRef(z);
    ($.current = z), (n.useRef(_).current = _);
    let [K, B] = n.useState(null != w ? d.ip.ENTERED : d.ip.HIDDEN),
        Z = n.useRef(null),
        Y = t4((e) => e.selectedGameId),
        Q = n.useMemo(
            () => (null == Y || "favorites" === Y ? null : (R.find((e) => e.applicationId === Y) ?? null)),
            [Y, R],
        ),
        X = n.useMemo(() => ("favorites" === Y ? T : (Q?.filteredClips ?? D)), [Y, Q, D, T]),
        q = n.useMemo(
            () => ("favorites" === Y ? ek.intl.string(ek.t["9rlCk1"]) : (Q?.name ?? ek.intl.string(ek.t.dPVrEv))),
            [Y, Q],
        ),
        W = n.useCallback(() => {
            V("editing"), v.A.useReducedMotion && B(d.ip.ENTERED);
        }, []),
        J = n.useCallback((e) => {
            S((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        ee = n.useCallback(
            (e) => {
                H(e.id), W();
            },
            [W],
        ),
        et = n.useCallback(() => {
            v.A.useReducedMotion && H(null), V("gallery");
        }, []);
    n.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === $.current && (e.stopPropagation(), et());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [et, N]),
        n.useEffect(() => {
            if ("editing" !== z || null == _)
                return (
                    (0, b.Su)(),
                    (0, b.jA)(),
                    () => {
                        (0, b.Su)(), (0, b.jA)();
                    }
                );
            (0, b.YK)(_);
        }, [z, _]);
    let el = n.useCallback(() => {
            S(new Set());
        }, []),
        ea = M.size > 0,
        en = n.useCallback(() => {
            let e = O.filter((e) => M.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, a.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                el(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [O, M, el]),
        ei = n.useCallback(async () => {
            let e = O.filter((e) => M.has(e.id));
            await P({ clips: e }), el();
        }, [O, M, P, el]),
        es = n.useMemo(
            () => ({ selectedClipIds: M, toggleClipSelection: J, clearSelection: el, isMultiSelectMode: ea }),
            [M, J, el, ea],
        );
    return (0, a.jsx)(j.f5, {
        value: L,
        children: (0, a.jsx)(ln.Provider, {
            value: es,
            children: (0, a.jsx)(o.N, {
                onClose: N,
                transitionState: k,
                ...I,
                children: (0, a.jsxs)("div", {
                    className: la.jT,
                    ref: Z,
                    children: [
                        (0, a.jsxs)("div", {
                            className: s()(la.PD, "gallery" === z && la.vu),
                            "aria-hidden": "gallery" !== z,
                            children: [
                                (0, a.jsx)(lt, { clipsByGame: R, filteredClips: D, favoriteClips: T, allClips: O }),
                                (0, a.jsxs)("div", {
                                    className: la.Qs,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: la.$Q,
                                            children: [
                                                (0, a.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: q,
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: la.$s,
                                                    children: [
                                                        ea &&
                                                            (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(c.m, {
                                                                        text: ek.intl.string(ek.t.RDE0Sc),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: ei,
                                                                            icon: p.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ek.intl.string(ek.t.RDE0Sc),
                                                                            loading: U,
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(c.m, {
                                                                        text: ek.intl.string(ek.t.oyYWHE),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: en,
                                                                            icon: f.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ek.intl.string(ek.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, a.jsx)(h.K, {
                                                            onClick: N,
                                                            icon: x.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ek.intl.string(ek.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(tY, {
                                            onEdit: ee,
                                            channelId: A,
                                            filteredClips: X,
                                            totalClipCount: O.length,
                                            onClipClick: E,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: s()(la.jN, "editing" === z && la.vu),
                            "aria-hidden": "editing" !== z,
                            onTransitionEnd: () => {
                                "gallery" === z ? (H(null), B(d.ip.HIDDEN)) : "editing" === z && B(d.ip.ENTERED);
                            },
                            children:
                                null != F &&
                                (0, a.jsxs)(G, {
                                    clip: F,
                                    modalContainerRef: Z,
                                    children: [
                                        (0, a.jsx)(eU, { transitionState: K, onClose: et }),
                                        (0, a.jsx)(tt, { channelId: A, onClose: et }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
