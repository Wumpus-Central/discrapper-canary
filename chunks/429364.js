l.d(t, { T: () => h, p: () => m }), l(323874), l(14289), l(35956), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(735438),
    i = l(194498),
    r = l(77729),
    c = l(372684),
    u = l(607814),
    o = l(956050);
let d = n.createContext(null);
function m(e) {
    var t, m, h;
    let f,
        p,
        v,
        x,
        g,
        j,
        b,
        { children: N, clip: C, modalContainerRef: E, editOnly: k = !1 } = e,
        y = C.type === c.nQ.SCREENSHOT,
        {
            initialDuration: A,
            initialCropStart: w,
            initialCropEnd: R,
            initialCurrentTime: T,
        } = ((f = C.length / 1e3),
        (p = C.editMetadata?.start ?? 0),
        (v = C.editMetadata?.end ?? 0),
        (x = 0 !== p || (0 !== v && v !== f)),
        {
            initialDuration: f,
            initialCropStart: p,
            initialCropEnd: v,
            isCropped: x,
            initialCurrentTime: x ? p : f / 2,
        }),
        L = n.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(C.filepath),
            [C.filepath],
        ),
        [I, S] = n.useState({
            clipName: C.name,
            isTemporary: C.isTemporary ?? !1,
            cropStart: w,
            cropEnd: 0 === R ? A : R,
            voiceAudioEnabled: C.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: C.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: C.editMetadata?.soundboardAudio ?? !0,
        }),
        {
            clipName: M,
            isTemporary: O,
            cropStart: D,
            cropEnd: U,
            voiceAudioEnabled: z,
            applicationAudioEnabled: P,
            soundboardAudioEnabled: G,
        } = I,
        $ = n.useRef(null),
        _ = n.useRef(T),
        [B, V] = n.useState(A),
        [F, K] = n.useState(!1),
        [H, Z] = n.useState(!1),
        J = n.useRef(new Set()),
        W = n.useRef(!1),
        [X, Q] = n.useState(null),
        [q, Y] = n.useState(null),
        [ee, et] = n.useState(null),
        [el, ea] = n.useState([]),
        [en, es] = n.useState(!1),
        ei = n.useCallback(
            () => ({
                ...C,
                name: M,
                editMetadata: { start: D, end: U, applicationAudio: P, voiceAudio: z, soundboardAudio: G },
            }),
            [C, M, D, U, P, z, G],
        ),
        er = n.useCallback((e) => {
            ($.current = e), Q(e.videoElement);
        }, []),
        ec = n.useCallback((e, t, l) => {
            Y(e), ea(t), et(l);
        }, []),
        eu = n.useCallback(() => {
            es(!0);
        }, []);
    (t = C.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("92994"), l.b));
            return (
                (async function () {
                    let l;
                    try {
                        l = await r.A.clips.loadClip(t);
                    } catch {
                        eu();
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
                        ec(n, s, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })));
                    }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]);
                })(),
                () => {
                    e.terminate();
                }
            );
        }, [t, ec, eu]),
        n.useEffect(
            () => () => {
                null != q && URL.revokeObjectURL(q);
            },
            [q],
        ),
        n.useEffect(
            () => () => {
                for (let e of el) URL.revokeObjectURL(e.url);
            },
            [el],
        ),
        n.useEffect(
            () => () => {
                null != ee && URL.revokeObjectURL(ee);
            },
            [ee],
        ),
        (m = C.id),
        (h = { name: M, editMetadata: { start: D, end: U, voiceAudio: z, applicationAudio: P, soundboardAudio: G } }),
        ((g = n.useRef(h)).current = h),
        n.useEffect(() => {
            async function e() {
                let e = {},
                    t = g.current;
                y || null == L || (e = { thumbnail: await (0, o.m)(L, t.editMetadata.start) }),
                    (0, u.Yy)(m, { ...t, ...e });
            }
            return () => {
                k || e();
            };
        }, [m, L, y, g, k]),
        n.useEffect(() => {
            B > 0 && U <= 0 && A <= 0 && S((e) => ({ ...e, cropEnd: B }));
        }, [B, U, A]);
    let eo = n.useMemo(() => U - D, [D, U]),
        ed = n.useCallback(
            (e) => (
                J.current.add(e),
                () => {
                    J.current.delete(e);
                }
            ),
            [J],
        ),
        {
            setCropStart: em,
            setCropEnd: eh,
            setCrop: ef,
        } = ((j = n.useCallback(
            (e) => {
                let t = (0, s.clamp)(e, 0, U - 1);
                S((e) => ({ ...e, cropStart: t })), $?.current?.seek(t);
            },
            [U, S, $],
        )),
        {
            setCropStart: j,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, s.clamp)(e, D + 1, B);
                    S((e) => ({ ...e, cropEnd: t })), $?.current?.seek(t);
                },
                [D, B, S, $],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    S((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [S],
            ),
        }),
        {
            play: ep,
            pause: ev,
            seek: ex,
        } = ((b = n.useCallback(() => {
            $?.current?.play();
        }, [$])),
        {
            play: b,
            pause: n.useCallback(() => {
                $?.current?.pause();
            }, [$]),
            seek: n.useCallback(
                (e) => {
                    $?.current?.seek(e);
                },
                [$],
            ),
        });
    (0, i.A)(() => {
        let e = $.current?.videoElement;
        if (null == e || !W.current) return;
        let t = e.currentTime;
        _.current !== t && ((_.current = t), J.current.forEach((e) => e.onTimeUpdate?.(t))),
            E.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        n.useEffect(() => {
            if (null == X) return;
            let e = () => {
                    K(!0), J.current.forEach((e) => e.onPlay?.());
                },
                t = () => {
                    K(!1), J.current.forEach((e) => e.onPause?.());
                },
                l = () => {
                    V(X.duration);
                },
                a = () => {
                    Z(!0), V(X.duration), $?.current?.seek(T);
                },
                n = () => {
                    W.current = !0;
                };
            return (
                X.addEventListener("play", e),
                X.addEventListener("pause", t),
                X.addEventListener("durationchange", l),
                X.addEventListener("loadedmetadata", a),
                X.addEventListener("seeked", n),
                X.duration > 0 && V(X.duration),
                X.readyState >= 1 && (Z(!0), $?.current?.seek(T)),
                K(!X.paused),
                () => {
                    X.removeEventListener("play", e),
                        X.removeEventListener("pause", t),
                        X.removeEventListener("durationchange", l),
                        X.removeEventListener("loadedmetadata", a),
                        X.removeEventListener("seeked", n);
                }
            );
        }, [X, T, $, J, K, Z, V, W]);
    let eg = n.useCallback((e) => {
            S((t) => ({ ...t, clipName: e }));
        }, []),
        ej = n.useCallback((e) => {
            S((t) => ({ ...t, isTemporary: e }));
        }, []),
        eb = n.useCallback((e) => {
            S((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eN = n.useCallback((e) => {
            S((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eC = n.useCallback((e) => {
            S((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eE = n.useMemo(
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
                                J.current.add(e),
                                () => {
                                    J.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [_, J],
        ),
        ek = n.useMemo(
            () => ({
                useCurrentTime: eE,
                duration: B,
                isPlaying: F,
                isLoaded: H,
                cropStart: D,
                cropEnd: U,
                cropDuration: eo,
                setCropStart: em,
                setCropEnd: eh,
                setCrop: ef,
                play: ep,
                pause: ev,
                seek: ex,
                subscribe: ed,
                setVideoPlayerRef: er,
                videoPlayerRef: $,
                videoURL: q,
                audioTracks: el,
                hasError: en,
                applicationAudioEnabled: P,
                setApplicationAudioEnabled: eb,
                voiceAudioEnabled: z,
                setVoiceAudioEnabled: eN,
                soundboardAudioEnabled: G,
                setSoundboardAudioEnabled: eC,
                getEditedClip: ei,
                clipName: M,
                setClipName: eg,
                isTemporary: O,
                audioURL: ee,
                setIsTemporary: ej,
                clip: C,
                editOnly: k,
            }),
            [
                k,
                eE,
                B,
                F,
                H,
                D,
                U,
                eo,
                em,
                eh,
                ef,
                ep,
                ev,
                ex,
                ee,
                ed,
                er,
                q,
                el,
                en,
                P,
                eb,
                z,
                eN,
                G,
                eC,
                ei,
                M,
                eg,
                O,
                ej,
                C,
            ],
        );
    return (0, a.jsx)(d.Provider, { value: ek, children: N });
}
function h() {
    let e = n.useContext(d);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
