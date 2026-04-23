l.d(t, { T: () => h, p: () => m }), l(323874), l(14289), l(35956), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(735438),
    i = l(194498),
    r = l(77729),
    d = l(372684),
    o = l(399925),
    c = l(956050);
let u = n.createContext(null);
function m(e) {
    var t, m, h;
    let p,
        f,
        v,
        g,
        x,
        j,
        b,
        { children: C, clip: y, modalContainerRef: A } = e,
        N = y.type === d.nQ.SCREENSHOT,
        {
            initialDuration: E,
            initialCropStart: w,
            initialCropEnd: k,
            initialCurrentTime: I,
        } = ((p = y.length / 1e3),
        (f = y.editMetadata?.start ?? 0),
        (v = y.editMetadata?.end ?? 0),
        (g = 0 !== f || (0 !== v && v !== p)),
        {
            initialDuration: p,
            initialCropStart: f,
            initialCropEnd: v,
            isCropped: g,
            initialCurrentTime: g ? f : p / 2,
        }),
        S = n.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(y.filepath),
            [y.filepath],
        ),
        [L, M] = n.useState({
            clipName: y.name,
            isTemporary: y.isTemporary ?? !1,
            cropStart: w,
            cropEnd: 0 === k ? E : k,
            voiceAudioEnabled: y.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: y.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: y.editMetadata?.soundboardAudio ?? !0,
        }),
        {
            clipName: R,
            isTemporary: T,
            cropStart: D,
            cropEnd: O,
            voiceAudioEnabled: P,
            applicationAudioEnabled: U,
            soundboardAudioEnabled: G,
        } = L,
        V = n.useRef(null),
        _ = n.useRef(I),
        [z, H] = n.useState(E),
        [$, F] = n.useState(!1),
        [B, K] = n.useState(!1),
        Z = n.useRef(new Set()),
        Q = n.useRef(!1),
        [X, Y] = n.useState(null),
        [q, W] = n.useState(null),
        [J, ee] = n.useState(null),
        [et, el] = n.useState([]),
        [ea, en] = n.useState(!1),
        es = n.useCallback(
            () => ({
                ...y,
                name: R,
                editMetadata: { start: D, end: O, applicationAudio: U, voiceAudio: P, soundboardAudio: G },
            }),
            [y, R, D, O, U, P, G],
        ),
        ei = n.useCallback((e) => {
            (V.current = e), Y(e.videoElement);
        }, []),
        er = n.useCallback((e, t, l) => {
            W(e), el(t), ee(l);
        }, []),
        ed = n.useCallback(() => {
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
                        ed();
                        return;
                    }
                    (e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: a } = e.data,
                            n = URL.createObjectURL(new Blob([t], { type: "video/mp4" })),
                            s = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            s.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        er(n, s, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })));
                    }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]);
                })(),
                () => {
                    e.terminate();
                }
            );
        }, [t, er, ed]),
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
        (m = y.id),
        (h = { name: R, editMetadata: { start: D, end: O, voiceAudio: P, applicationAudio: U, soundboardAudio: G } }),
        ((x = n.useRef(h)).current = h),
        n.useEffect(() => {
            async function e() {
                let e = {},
                    t = x.current;
                N || null == S || (e = { thumbnail: await (0, c.m)(S, t.editMetadata.start) }),
                    (0, o.Yy)(m, { ...t, ...e });
            }
            return () => {
                e();
            };
        }, [m, S, N, x]),
        n.useEffect(() => {
            z > 0 && O <= 0 && E <= 0 && M((e) => ({ ...e, cropEnd: z }));
        }, [z, O, E]);
    let eo = n.useMemo(() => O - D, [D, O]),
        ec = n.useCallback(
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
        } = ((j = n.useCallback(
            (e) => {
                let t = (0, s.clamp)(e, 0, O - 1);
                M((e) => ({ ...e, cropStart: t })), V?.current?.seek(t);
            },
            [O, M, V],
        )),
        {
            setCropStart: j,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, s.clamp)(e, D + 1, z);
                    M((e) => ({ ...e, cropEnd: t })), V?.current?.seek(t);
                },
                [D, z, M, V],
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
            pause: ef,
            seek: ev,
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
    (0, i.A)(() => {
        let e = V.current?.videoElement;
        if (null == e || !Q.current) return;
        let t = e.currentTime;
        _.current !== t && ((_.current = t), Z.current.forEach((e) => e.onTimeUpdate?.(t))),
            A.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        n.useEffect(() => {
            if (null == X) return;
            let e = () => {
                    F(!0), Z.current.forEach((e) => e.onPlay?.());
                },
                t = () => {
                    F(!1), Z.current.forEach((e) => e.onPause?.());
                },
                l = () => {
                    H(X.duration);
                },
                a = () => {
                    K(!0), H(X.duration), V?.current?.seek(I);
                },
                n = () => {
                    Q.current = !0;
                };
            return (
                X.addEventListener("play", e),
                X.addEventListener("pause", t),
                X.addEventListener("durationchange", l),
                X.addEventListener("loadedmetadata", a),
                X.addEventListener("seeked", n),
                X.duration > 0 && H(X.duration),
                X.readyState >= 1 && (K(!0), V?.current?.seek(I)),
                F(!X.paused),
                () => {
                    X.removeEventListener("play", e),
                        X.removeEventListener("pause", t),
                        X.removeEventListener("durationchange", l),
                        X.removeEventListener("loadedmetadata", a),
                        X.removeEventListener("seeked", n);
                }
            );
        }, [X, I, V, Z, F, K, H, Q]);
    let eg = n.useCallback((e) => {
            M((t) => ({ ...t, clipName: e }));
        }, []),
        ex = n.useCallback((e) => {
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
                    let [e, t] = n.useState(_.current);
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
            [_, Z],
        ),
        eA = n.useMemo(
            () => ({
                useCurrentTime: ey,
                duration: z,
                isPlaying: $,
                isLoaded: B,
                cropStart: D,
                cropEnd: O,
                cropDuration: eo,
                setCropStart: eu,
                setCropEnd: em,
                setCrop: eh,
                play: ep,
                pause: ef,
                seek: ev,
                subscribe: ec,
                setVideoPlayerRef: ei,
                videoPlayerRef: V,
                videoURL: q,
                audioTracks: et,
                hasError: ea,
                applicationAudioEnabled: U,
                setApplicationAudioEnabled: ej,
                voiceAudioEnabled: P,
                setVoiceAudioEnabled: eb,
                soundboardAudioEnabled: G,
                setSoundboardAudioEnabled: eC,
                getEditedClip: es,
                clipName: R,
                setClipName: eg,
                isTemporary: T,
                audioURL: J,
                setIsTemporary: ex,
            }),
            [
                ey,
                z,
                $,
                B,
                D,
                O,
                eo,
                eu,
                em,
                eh,
                ep,
                ef,
                ev,
                J,
                ec,
                ei,
                q,
                et,
                ea,
                U,
                ej,
                P,
                eb,
                G,
                eC,
                es,
                R,
                eg,
                T,
                ex,
            ],
        );
    return (0, a.jsx)(u.Provider, { value: eA, children: C });
}
function h() {
    let e = n.useContext(u);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
