l.d(t, { T: () => h, p: () => m }), l(323874), l(14289), l(35956), l(321073);
var a = l(627968),
    n = l(64700),
    i = l(735438),
    s = l(194498),
    r = l(77729),
    o = l(372684),
    d = l(399925),
    c = l(956050);
let u = n.createContext(null);
function m(e) {
    var t, m, h;
    let p,
        x,
        f,
        g,
        v,
        j,
        b,
        { children: C, clip: y, modalContainerRef: N } = e,
        A = y.type === o.nQ.SCREENSHOT,
        {
            initialDuration: E,
            initialCropStart: k,
            initialCropEnd: I,
            initialCurrentTime: S,
        } = ((p = y.length / 1e3),
        (x = y.editMetadata?.start ?? 0),
        (f = y.editMetadata?.end ?? 0),
        (g = 0 !== x || (0 !== f && f !== p)),
        {
            initialDuration: p,
            initialCropStart: x,
            initialCropEnd: f,
            isCropped: g,
            initialCurrentTime: g ? x : p / 2,
        }),
        w = n.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(y.filepath),
            [y.filepath],
        ),
        [L, M] = n.useState({
            clipName: y.name,
            isTemporary: y.isTemporary ?? !1,
            cropStart: k,
            cropEnd: 0 === I ? E : I,
            voiceAudioEnabled: y.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: y.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: y.editMetadata?.soundboardAudio ?? !0,
        }),
        {
            clipName: T,
            isTemporary: R,
            cropStart: D,
            cropEnd: O,
            voiceAudioEnabled: P,
            applicationAudioEnabled: U,
            soundboardAudioEnabled: G,
        } = L,
        V = n.useRef(null),
        H = n.useRef(S),
        [$, z] = n.useState(E),
        [_, K] = n.useState(!1),
        [F, B] = n.useState(!1),
        Y = n.useRef(new Set()),
        X = n.useRef(!1),
        [Q, q] = n.useState(null),
        [Z, W] = n.useState(null),
        [J, ee] = n.useState(null),
        [et, el] = n.useState([]),
        [ea, en] = n.useState(!1),
        ei = n.useCallback(
            () => ({
                ...y,
                name: T,
                editMetadata: { start: D, end: O, applicationAudio: U, voiceAudio: P, soundboardAudio: G },
            }),
            [y, T, D, O, U, P, G],
        ),
        es = n.useCallback((e) => {
            (V.current = e), q(e.videoElement);
        }, []),
        er = n.useCallback((e, t, l) => {
            W(e), el(t), ee(l);
        }, []),
        eo = n.useCallback(() => {
            en(!0);
        }, []);
    (t = y.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("91363"), l.b));
            return (
                (async function () {
                    let l;
                    try {
                        l = await r.A.clips.loadClip(t);
                    } catch {
                        eo();
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
        }, [t, er, eo]),
        n.useEffect(
            () => () => {
                null != Z && URL.revokeObjectURL(Z);
            },
            [Z],
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
        (m = y.id),
        (h = { name: T, editMetadata: { start: D, end: O, voiceAudio: P, applicationAudio: U, soundboardAudio: G } }),
        ((v = n.useRef(h)).current = h),
        n.useEffect(() => {
            async function e() {
                let e = {},
                    t = v.current;
                A || null == w || (e = { thumbnail: await (0, c.m)(w, t.editMetadata.start) }),
                    (0, d.Yy)(m, { ...t, ...e });
            }
            return () => {
                e();
            };
        }, [m, w, A, v]),
        n.useEffect(() => {
            $ > 0 && O <= 0 && E <= 0 && M((e) => ({ ...e, cropEnd: $ }));
        }, [$, O, E]);
    let ed = n.useMemo(() => O - D, [D, O]),
        ec = n.useCallback(
            (e) => (
                Y.current.add(e),
                () => {
                    Y.current.delete(e);
                }
            ),
            [Y],
        ),
        {
            setCropStart: eu,
            setCropEnd: em,
            setCrop: eh,
        } = ((j = n.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, O - 1);
                M((e) => ({ ...e, cropStart: t })), V?.current?.seek(t);
            },
            [O, M, V],
        )),
        {
            setCropStart: j,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, D + 1, $);
                    M((e) => ({ ...e, cropEnd: t })), V?.current?.seek(t);
                },
                [D, $, M, V],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    M((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [M],
            ),
        }),
        {
            play: ep,
            pause: ex,
            seek: ef,
        } = ((b = n.useCallback(() => {
            V?.current?.play();
        }, [V])),
        {
            play: b,
            pause: n.useCallback(() => {
                V?.current?.pause();
            }, [V]),
            seek: n.useCallback(
                (e) => {
                    V?.current?.seek(e);
                },
                [V],
            ),
        });
    (0, s.A)(() => {
        let e = V.current?.videoElement;
        if (null == e || !X.current) return;
        let t = e.currentTime;
        H.current !== t && ((H.current = t), Y.current.forEach((e) => e.onTimeUpdate?.(t))),
            N.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        n.useEffect(() => {
            if (null == Q) return;
            let e = () => {
                    K(!0), Y.current.forEach((e) => e.onPlay?.());
                },
                t = () => {
                    K(!1), Y.current.forEach((e) => e.onPause?.());
                },
                l = () => {
                    z(Q.duration);
                },
                a = () => {
                    B(!0), z(Q.duration), V?.current?.seek(S);
                },
                n = () => {
                    X.current = !0;
                };
            return (
                Q.addEventListener("play", e),
                Q.addEventListener("pause", t),
                Q.addEventListener("durationchange", l),
                Q.addEventListener("loadedmetadata", a),
                Q.addEventListener("seeked", n),
                Q.duration > 0 && z(Q.duration),
                Q.readyState >= 1 && (B(!0), V?.current?.seek(S)),
                K(!Q.paused),
                () => {
                    Q.removeEventListener("play", e),
                        Q.removeEventListener("pause", t),
                        Q.removeEventListener("durationchange", l),
                        Q.removeEventListener("loadedmetadata", a),
                        Q.removeEventListener("seeked", n);
                }
            );
        }, [Q, S, V, Y, K, B, z, X]);
    let eg = n.useCallback((e) => {
            M((t) => ({ ...t, clipName: e }));
        }, []),
        ev = n.useCallback((e) => {
            M((t) => ({ ...t, isTemporary: e }));
        }, []),
        ej = n.useCallback((e) => {
            M((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eb = n.useCallback((e) => {
            M((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eC = n.useCallback((e) => {
            M((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        ey = n.useMemo(
            () =>
                function () {
                    let [e, t] = n.useState(H.current);
                    return (
                        n.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                Y.current.add(e),
                                () => {
                                    Y.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [H, Y],
        ),
        eN = n.useMemo(
            () => ({
                useCurrentTime: ey,
                duration: $,
                isPlaying: _,
                isLoaded: F,
                cropStart: D,
                cropEnd: O,
                cropDuration: ed,
                setCropStart: eu,
                setCropEnd: em,
                setCrop: eh,
                play: ep,
                pause: ex,
                seek: ef,
                subscribe: ec,
                setVideoPlayerRef: es,
                videoPlayerRef: V,
                videoURL: Z,
                audioTracks: et,
                hasError: ea,
                applicationAudioEnabled: U,
                setApplicationAudioEnabled: ej,
                voiceAudioEnabled: P,
                setVoiceAudioEnabled: eb,
                soundboardAudioEnabled: G,
                setSoundboardAudioEnabled: eC,
                getEditedClip: ei,
                clipName: T,
                setClipName: eg,
                isTemporary: R,
                audioURL: J,
                setIsTemporary: ev,
            }),
            [
                ey,
                $,
                _,
                F,
                D,
                O,
                ed,
                eu,
                em,
                eh,
                ep,
                ex,
                ef,
                J,
                ec,
                es,
                Z,
                et,
                ea,
                U,
                ej,
                P,
                eb,
                G,
                eC,
                ei,
                T,
                eg,
                R,
                ev,
            ],
        );
    return (0, a.jsx)(u.Provider, { value: eN, children: C });
}
function h() {
    let e = n.useContext(u);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
