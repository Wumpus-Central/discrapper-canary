l.d(t, { T: () => h, p: () => m }), l(323874), l(14289), l(35956), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(735438),
    i = l(194498),
    r = l(77729),
    o = l(372684),
    u = l(399925),
    c = l(956050);
let d = n.createContext(null);
function m(e) {
    var t, m, h;
    let p,
        f,
        g,
        v,
        x,
        b,
        j,
        { children: C, clip: N } = e,
        k = N.type === o.nQ.SCREENSHOT,
        {
            initialDuration: y,
            initialCropStart: E,
            initialCropEnd: A,
            initialCurrentTime: S,
        } = ((p = N.length / 1e3),
        (f = N.editMetadata?.start ?? 0),
        (g = N.editMetadata?.end ?? 0),
        (v = 0 !== f || (0 !== g && g !== p)),
        {
            initialDuration: p,
            initialCropStart: f,
            initialCropEnd: g,
            isCropped: v,
            initialCurrentTime: v ? f : p / 2,
        }),
        I = n.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(N.filepath),
            [N.filepath],
        ),
        [w, T] = n.useState({
            clipName: N.name,
            isTemporary: N.isTemporary ?? !1,
            cropStart: E,
            cropEnd: 0 === A ? y : A,
            voiceAudioEnabled: N.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: N.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: N.editMetadata?.soundboardAudio ?? !0,
        }),
        {
            clipName: L,
            isTemporary: R,
            cropStart: M,
            cropEnd: O,
            voiceAudioEnabled: U,
            applicationAudioEnabled: D,
            soundboardAudioEnabled: $,
        } = w,
        P = n.useRef(null),
        z = n.useRef(S),
        [G, B] = n.useState(y),
        [_, K] = n.useState(!1),
        [V, F] = n.useState(!1),
        W = n.useRef(new Set()),
        H = n.useRef(!1),
        [J, X] = n.useState(null),
        [q, Q] = n.useState(null),
        [Y, Z] = n.useState(null),
        [ee, et] = n.useState([]),
        [el, ea] = n.useState(!1),
        en = n.useCallback(
            () => ({
                ...N,
                name: L,
                editMetadata: { start: M, end: O, applicationAudio: D, voiceAudio: U, soundboardAudio: $ },
            }),
            [N, L, M, O, D, U, $],
        ),
        es = n.useCallback((e) => {
            (P.current = e), X(e.videoElement);
        }, []),
        ei = n.useCallback((e, t, l) => {
            Q(e), et(t), Z(l);
        }, []),
        er = n.useCallback(() => {
            ea(!0);
        }, []);
    (t = N.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("91363"), l.b));
            return (
                (async function () {
                    let l;
                    try {
                        l = await r.A.clips.loadClip(t);
                    } catch {
                        er();
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
                        ei(n, s, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })));
                    }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]);
                })(),
                () => {
                    e.terminate();
                }
            );
        }, [t, ei, er]),
        n.useEffect(
            () => () => {
                null != q && URL.revokeObjectURL(q);
            },
            [q],
        ),
        n.useEffect(
            () => () => {
                for (let e of ee) URL.revokeObjectURL(e.url);
            },
            [ee],
        ),
        n.useEffect(
            () => () => {
                null != Y && URL.revokeObjectURL(Y);
            },
            [Y],
        ),
        (m = N.id),
        (h = { name: L, editMetadata: { start: M, end: O, voiceAudio: U, applicationAudio: D, soundboardAudio: $ } }),
        ((x = n.useRef(h)).current = h),
        n.useEffect(() => {
            async function e() {
                let e = {},
                    t = x.current;
                k || null == I || (e = { thumbnail: await (0, c.m)(I, t.editMetadata.start) }),
                    (0, u.Yy)(m, { ...t, ...e });
            }
            return () => {
                e();
            };
        }, [m, I, k, x]),
        n.useEffect(() => {
            G > 0 && O <= 0 && y <= 0 && T((e) => ({ ...e, cropEnd: G }));
        }, [G, O, y]);
    let eo = n.useMemo(() => O - M, [M, O]),
        eu = n.useCallback(
            (e) => (
                W.current.add(e),
                () => {
                    W.current.delete(e);
                }
            ),
            [W],
        ),
        {
            setCropStart: ec,
            setCropEnd: ed,
            setCrop: em,
        } = ((b = n.useCallback(
            (e) => {
                let t = (0, s.clamp)(e, 0, O - 1);
                T((e) => ({ ...e, cropStart: t })), P?.current?.seek(t);
            },
            [O, T, P],
        )),
        {
            setCropStart: b,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, s.clamp)(e, M + 1, G);
                    T((e) => ({ ...e, cropEnd: t })), P?.current?.seek(t);
                },
                [M, G, T, P],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    T((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [T],
            ),
        }),
        {
            play: eh,
            pause: ep,
            seek: ef,
        } = ((j = n.useCallback(() => {
            P?.current?.play();
        }, [P])),
        {
            play: j,
            pause: n.useCallback(() => {
                P?.current?.pause();
            }, [P]),
            seek: n.useCallback(
                (e) => {
                    P?.current?.seek(e);
                },
                [P],
            ),
        });
    (0, i.A)(() => {
        let e = P.current?.videoElement;
        if (null == e || !H.current) return;
        let t = e.currentTime;
        z.current !== t && ((z.current = t), W.current.forEach((e) => e.onTimeUpdate?.(t)));
    }),
        n.useEffect(() => {
            if (null == J) return;
            let e = () => {
                    K(!0), W.current.forEach((e) => e.onPlay?.());
                },
                t = () => {
                    K(!1), W.current.forEach((e) => e.onPause?.());
                },
                l = () => {
                    B(J.duration);
                },
                a = () => {
                    F(!0), B(J.duration), P?.current?.seek(S);
                },
                n = () => {
                    H.current = !0;
                };
            return (
                J.addEventListener("play", e),
                J.addEventListener("pause", t),
                J.addEventListener("durationchange", l),
                J.addEventListener("loadedmetadata", a),
                J.addEventListener("seeked", n),
                J.duration > 0 && B(J.duration),
                J.readyState >= 1 && (F(!0), P?.current?.seek(S)),
                K(!J.paused),
                () => {
                    J.removeEventListener("play", e),
                        J.removeEventListener("pause", t),
                        J.removeEventListener("durationchange", l),
                        J.removeEventListener("loadedmetadata", a),
                        J.removeEventListener("seeked", n);
                }
            );
        }, [J, S, P, W, K, F, B, H]);
    let eg = n.useCallback((e) => {
            T((t) => ({ ...t, clipName: e }));
        }, []),
        ev = n.useCallback((e) => {
            T((t) => ({ ...t, isTemporary: e }));
        }, []),
        ex = n.useCallback((e) => {
            T((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eb = n.useCallback((e) => {
            T((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        ej = n.useCallback((e) => {
            T((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eC = n.useMemo(
            () =>
                function () {
                    let [e, t] = n.useState(z.current);
                    return (
                        n.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                W.current.add(e),
                                () => {
                                    W.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [z, W],
        ),
        eN = n.useMemo(
            () => ({
                useCurrentTime: eC,
                duration: G,
                isPlaying: _,
                isLoaded: V,
                cropStart: M,
                cropEnd: O,
                cropDuration: eo,
                setCropStart: ec,
                setCropEnd: ed,
                setCrop: em,
                play: eh,
                pause: ep,
                seek: ef,
                subscribe: eu,
                setVideoPlayerRef: es,
                videoPlayerRef: P,
                videoURL: q,
                audioTracks: ee,
                hasError: el,
                applicationAudioEnabled: D,
                setApplicationAudioEnabled: ex,
                voiceAudioEnabled: U,
                setVoiceAudioEnabled: eb,
                soundboardAudioEnabled: $,
                setSoundboardAudioEnabled: ej,
                getEditedClip: en,
                clipName: L,
                setClipName: eg,
                isTemporary: R,
                audioURL: Y,
                setIsTemporary: ev,
            }),
            [
                eC,
                G,
                _,
                V,
                M,
                O,
                eo,
                ec,
                ed,
                em,
                eh,
                ep,
                ef,
                Y,
                eu,
                es,
                q,
                ee,
                el,
                D,
                ex,
                U,
                eb,
                $,
                ej,
                en,
                L,
                eg,
                R,
                ev,
            ],
        );
    return (0, a.jsx)(d.Provider, { value: eN, children: C });
}
function h() {
    let e = n.useContext(d);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
