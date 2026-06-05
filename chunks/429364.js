l.d(t, { T: () => p, p: () => h }), l(323874), l(14289), l(35956), l(321073);
var a = l(627968),
    n = l(64700),
    i = l(735438),
    r = l(194498),
    s = l(77729),
    o = l(372684),
    u = l(315240),
    c = l(956050),
    d = l(696016);
let m = (e, t, l, a) => (a([]), () => {}),
    f = n.createContext(null);
function h(e) {
    var t, h, p;
    let v,
        x,
        g,
        b,
        j,
        y,
        C,
        { children: E, clip: k, modalContainerRef: A, editOnly: N = !1 } = e,
        w = k.type === o.nQ.SCREENSHOT,
        {
            initialDuration: R,
            initialCropStart: T,
            initialCropEnd: L,
            initialCurrentTime: M,
        } = ((v = k.length / 1e3),
        (x = k.editMetadata?.start ?? 0),
        (g = k.editMetadata?.end ?? 0),
        (b = 0 !== x || (0 !== g && g !== v)),
        {
            initialDuration: v,
            initialCropStart: x,
            initialCropEnd: g,
            isCropped: b,
            initialCurrentTime: b ? x : v / 2,
        }),
        I = n.useMemo(
            () =>
                null == s.A.clips.getClipProtocolURLFromPath ? null : s.A.clips.getClipProtocolURLFromPath(k.filepath),
            [k.filepath],
        ),
        [O, D] = n.useState({
            clipName: k.name,
            isTemporary: k.isTemporary ?? !1,
            cropStart: T,
            cropEnd: 0 === L ? R : L,
            voiceAudioEnabled: k.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: k.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: k.editMetadata?.soundboardAudio ?? !0,
        }),
        {
            clipName: S,
            isTemporary: _,
            cropStart: P,
            cropEnd: U,
            voiceAudioEnabled: B,
            applicationAudioEnabled: $,
            soundboardAudioEnabled: G,
        } = O,
        z = n.useRef(null),
        F = n.useRef(M),
        [H, V] = n.useState(R),
        [K, Z] = n.useState(!1),
        [W, X] = n.useState(!1),
        q = n.useRef(new Set()),
        J = n.useRef(!1),
        [Q, Y] = n.useState(null),
        [ee, et] = n.useState(null),
        [el, ea] = n.useState(null),
        [en, ei] = n.useState([]),
        [er, es] = n.useState(!1),
        [eo, eu] = n.useState(() => m),
        [ec, ed] = n.useState(null),
        em = n.useCallback(
            () => ({
                ...k,
                name: S,
                editMetadata: { start: P, end: U, applicationAudio: $, voiceAudio: B, soundboardAudio: G },
            }),
            [k, S, P, U, $, B, G],
        ),
        ef = n.useCallback((e) => {
            (z.current = e), Y(e.videoElement);
        }, []),
        eh = n.useCallback((e, t, l, a) => {
            et(e), ei(t), ea(l), eu(() => a);
        }, []),
        ep = n.useCallback(() => {
            es(!0);
        }, []);
    (t = k.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("92994"), l.b)),
                a = new Worker(new URL("/assets/" + l.u("35886"), l.b)),
                n = new Map(),
                i = 0,
                r = (e, t, l, r) => {
                    let s = ++i;
                    return (
                        n.set(s, r),
                        a.postMessage({
                            type: "extract",
                            requestId: s,
                            timestamps: e,
                            previewWidth: t,
                            previewHeight: l,
                        }),
                        () => {
                            n.delete(s);
                        }
                    );
                };
            return (
                (async function () {
                    let l;
                    try {
                        l = await s.A.clips.loadClip(t);
                    } catch {
                        ep();
                        return;
                    }
                    (e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: n } = e.data,
                            i = URL.createObjectURL(new Blob([t], { type: "video/mp4" })),
                            s = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            s.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        a.postMessage({ type: "init", videoBuffer: t }, [t]),
                            eh(i, s, URL.createObjectURL(new Blob([n], { type: "audio/mp4" })), r);
                    }),
                        (a.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    ed({ width: t.width, height: t.height });
                                    break;
                                case "thumbnails": {
                                    let e = n.get(t.requestId);
                                    if ((n.delete(t.requestId), null == e)) {
                                        for (let e of t.bitmaps) e.close();
                                        return;
                                    }
                                    e(t.bitmaps);
                                    break;
                                }
                                case "error":
                                    if (
                                        (d.nx.warn(`Timeline thumbnail extraction error: ${t.message}`),
                                        null != t.requestId)
                                    ) {
                                        let e = n.get(t.requestId);
                                        n.delete(t.requestId), e?.([]);
                                    }
                            }
                        }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]);
                })(),
                () => {
                    e.terminate(), a.terminate(), n.clear();
                }
            );
        }, [t, eh, ed, ep]),
        n.useEffect(
            () => () => {
                null != ee && URL.revokeObjectURL(ee);
            },
            [ee],
        ),
        n.useEffect(
            () => () => {
                for (let e of en) URL.revokeObjectURL(e.url);
            },
            [en],
        ),
        n.useEffect(
            () => () => {
                null != el && URL.revokeObjectURL(el);
            },
            [el],
        ),
        (h = k.id),
        (p = { name: S, editMetadata: { start: P, end: U, voiceAudio: B, applicationAudio: $, soundboardAudio: G } }),
        ((j = n.useRef(p)).current = p),
        n.useEffect(() => {
            async function e() {
                let e = {},
                    t = j.current;
                w || null == I || (e = { thumbnail: await (0, c.m)(I, t.editMetadata.start) }),
                    (0, u.Yy)(h, { ...t, ...e });
            }
            return () => {
                N || e();
            };
        }, [h, I, w, j, N]),
        n.useEffect(() => {
            H > 0 && U <= 0 && R <= 0 && D((e) => ({ ...e, cropEnd: H }));
        }, [H, U, R]);
    let ev = n.useMemo(() => U - P, [P, U]),
        ex = n.useCallback(
            (e) => (
                q.current.add(e),
                () => {
                    q.current.delete(e);
                }
            ),
            [q],
        ),
        {
            setCropStart: eg,
            setCropEnd: eb,
            setCrop: ej,
        } = ((y = n.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, U - 1);
                D((e) => ({ ...e, cropStart: t })), z?.current?.seek(t);
            },
            [U, D, z],
        )),
        {
            setCropStart: y,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, P + 1, H);
                    D((e) => ({ ...e, cropEnd: t })), z?.current?.seek(t);
                },
                [P, H, D, z],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    D((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [D],
            ),
        }),
        {
            play: ey,
            pause: eC,
            seek: eE,
        } = ((C = n.useCallback(() => {
            z?.current?.play();
        }, [z])),
        {
            play: C,
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
    (0, r.A)(() => {
        let e = z.current?.videoElement;
        if (null == e || !J.current) return;
        let t = e.currentTime;
        F.current !== t && ((F.current = t), q.current.forEach((e) => e.onTimeUpdate?.(t))),
            A.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        n.useEffect(() => {
            if (null == Q) return;
            let e = () => {
                    Z(!0), q.current.forEach((e) => e.onPlay?.());
                },
                t = () => {
                    Z(!1), q.current.forEach((e) => e.onPause?.());
                },
                l = () => {
                    V(Q.duration);
                },
                a = () => {
                    X(!0), V(Q.duration), z?.current?.seek(M);
                },
                n = () => {
                    J.current = !0;
                };
            return (
                Q.addEventListener("play", e),
                Q.addEventListener("pause", t),
                Q.addEventListener("durationchange", l),
                Q.addEventListener("loadedmetadata", a),
                Q.addEventListener("seeked", n),
                Q.duration > 0 && V(Q.duration),
                Q.readyState >= 1 && (X(!0), z?.current?.seek(M)),
                Z(!Q.paused),
                () => {
                    Q.removeEventListener("play", e),
                        Q.removeEventListener("pause", t),
                        Q.removeEventListener("durationchange", l),
                        Q.removeEventListener("loadedmetadata", a),
                        Q.removeEventListener("seeked", n);
                }
            );
        }, [Q, M, z, q, Z, X, V, J]);
    let ek = n.useCallback((e) => {
            D((t) => ({ ...t, clipName: e }));
        }, []),
        eA = n.useCallback((e) => {
            D((t) => ({ ...t, isTemporary: e }));
        }, []),
        eN = n.useCallback((e) => {
            D((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        ew = n.useCallback((e) => {
            D((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eR = n.useCallback((e) => {
            D((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eT = n.useMemo(
            () =>
                function () {
                    let [e, t] = n.useState(F.current);
                    return (
                        n.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                q.current.add(e),
                                () => {
                                    q.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [F, q],
        ),
        eL = n.useMemo(
            () => ({
                useCurrentTime: eT,
                duration: H,
                isPlaying: K,
                isLoaded: W,
                cropStart: P,
                cropEnd: U,
                cropDuration: ev,
                setCropStart: eg,
                setCropEnd: eb,
                setCrop: ej,
                play: ey,
                pause: eC,
                seek: eE,
                subscribe: ex,
                setVideoPlayerRef: ef,
                videoPlayerRef: z,
                videoURL: ee,
                audioTracks: en,
                hasError: er,
                applicationAudioEnabled: $,
                setApplicationAudioEnabled: eN,
                voiceAudioEnabled: B,
                setVoiceAudioEnabled: ew,
                soundboardAudioEnabled: G,
                setSoundboardAudioEnabled: eR,
                getEditedClip: em,
                clipName: S,
                setClipName: ek,
                isTemporary: _,
                audioURL: el,
                setIsTemporary: eA,
                clip: k,
                editOnly: N,
                generateThumbnails: eo,
                videoDimensions: ec,
            }),
            [
                N,
                eT,
                H,
                K,
                W,
                P,
                U,
                ev,
                eg,
                eb,
                ej,
                ey,
                eC,
                eE,
                el,
                ex,
                ef,
                ee,
                en,
                er,
                $,
                eN,
                B,
                ew,
                G,
                eR,
                em,
                S,
                ek,
                _,
                eA,
                k,
                eo,
                ec,
            ],
        );
    return (0, a.jsx)(f.Provider, { value: eL, children: E });
}
function p() {
    let e = n.useContext(f);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
