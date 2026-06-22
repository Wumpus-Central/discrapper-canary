l.d(t, { T: () => x, p: () => p }), l(323874), l(14289), l(35956), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(735438),
    s = l(194498),
    r = l(77729),
    c = l(372684),
    o = l(430795),
    u = l(956050),
    d = l(858174),
    m = l(696016);
let h = (e, t, l, n) => (n([]), () => {}),
    f = a.createContext(null);
function p(e) {
    var t, p, x;
    let v,
        g,
        j,
        b,
        y,
        C,
        E,
        { children: A, clip: N, modalContainerRef: k, editOnly: w = !1 } = e,
        R = N.type === c.nQ.SCREENSHOT,
        {
            initialDuration: T,
            initialCropStart: L,
            initialCropEnd: I,
            initialCurrentTime: O,
        } = ((v = N.length / 1e3),
        (g = N.editMetadata?.start ?? 0),
        (j = N.editMetadata?.end ?? 0),
        (b = 0 !== g || (0 !== j && j !== v)),
        {
            initialDuration: v,
            initialCropStart: g,
            initialCropEnd: j,
            isCropped: b,
            initialCurrentTime: b ? g : v / 2,
        }),
        D = a.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(N.filepath),
            [N.filepath],
        ),
        [_, M] = a.useState({
            clipName: N.name,
            isTemporary: N.isTemporary ?? !1,
            cropStart: L,
            cropEnd: 0 === I ? T : I,
            voiceAudioEnabled: N.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: N.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: N.editMetadata?.soundboardAudio ?? !0,
            cropPreset: N.editMetadata?.crop?.preset ?? c.yz.ORIGINAL,
        }),
        [S, P] = a.useState(d.Y.NONE),
        {
            clipName: z,
            isTemporary: U,
            cropStart: G,
            cropEnd: B,
            voiceAudioEnabled: $,
            applicationAudioEnabled: V,
            soundboardAudioEnabled: F,
            cropPreset: H,
        } = _,
        K = a.useRef(null),
        W = a.useRef(O),
        [X, Z] = a.useState(T),
        [Y, q] = a.useState(!1),
        [Q, J] = a.useState(!1),
        ee = a.useRef(new Set()),
        et = a.useRef(!1),
        [el, en] = a.useState(null),
        [ea, ei] = a.useState(null),
        [es, er] = a.useState(null),
        [ec, eo] = a.useState([]),
        [eu, ed] = a.useState(!1),
        [em, eh] = a.useState(() => h),
        [ef, ep] = a.useState(null),
        ex = a.useCallback(
            () => ({
                ...N,
                name: z,
                editMetadata: {
                    start: G,
                    end: B,
                    applicationAudio: V,
                    voiceAudio: $,
                    soundboardAudio: F,
                    crop: { preset: H },
                },
            }),
            [N, z, G, B, V, $, F, H],
        ),
        ev = a.useCallback((e) => {
            (K.current = e), en(e.videoElement);
        }, []),
        eg = a.useCallback((e, t, l, n) => {
            ei(e), eo(t), er(l), eh(() => n);
        }, []),
        ej = a.useCallback(() => {
            ed(!0);
        }, []);
    (t = N.filepath),
        a.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("92994"), l.b)),
                n = new Worker(new URL("/assets/" + l.u("35886"), l.b)),
                a = new Map(),
                i = 0,
                s = (e, t, l, s) => {
                    let r = ++i;
                    return (
                        a.set(r, s),
                        n.postMessage({
                            type: "extract",
                            requestId: r,
                            timestamps: e,
                            previewWidth: t,
                            previewHeight: l,
                        }),
                        () => {
                            a.delete(r);
                        }
                    );
                };
            return (
                (async function () {
                    let l;
                    try {
                        l = await r.A.clips.loadClip(t);
                    } catch {
                        ej();
                        return;
                    }
                    (e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: a } = e.data,
                            i = URL.createObjectURL(new Blob([t], { type: "video/mp4" })),
                            r = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            r.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        n.postMessage({ type: "init", videoBuffer: t }, [t]),
                            eg(i, r, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })), s);
                    }),
                        (n.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    ep({ width: t.width, height: t.height });
                                    break;
                                case "thumbnails": {
                                    let e = a.get(t.requestId);
                                    if ((a.delete(t.requestId), null == e)) {
                                        for (let e of t.bitmaps) e.close();
                                        return;
                                    }
                                    e(t.bitmaps);
                                    break;
                                }
                                case "error":
                                    if (
                                        (m.nx.warn(`Timeline thumbnail extraction error: ${t.message}`),
                                        null != t.requestId)
                                    ) {
                                        let e = a.get(t.requestId);
                                        a.delete(t.requestId), e?.([]);
                                    }
                            }
                        }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]);
                })(),
                () => {
                    e.terminate(), n.terminate(), a.clear();
                }
            );
        }, [t, eg, ep, ej]),
        a.useEffect(
            () => () => {
                null != ea && URL.revokeObjectURL(ea);
            },
            [ea],
        ),
        a.useEffect(
            () => () => {
                for (let e of ec) URL.revokeObjectURL(e.url);
            },
            [ec],
        ),
        a.useEffect(
            () => () => {
                null != es && URL.revokeObjectURL(es);
            },
            [es],
        ),
        (p = N.id),
        (x = {
            name: z,
            editMetadata: {
                start: G,
                end: B,
                voiceAudio: $,
                applicationAudio: V,
                soundboardAudio: F,
                crop: { preset: H },
            },
        }),
        ((y = a.useRef(x)).current = x),
        a.useEffect(() => {
            async function e() {
                let e = {},
                    t = y.current;
                R || null == D || (e = { thumbnail: await (0, u.m)(D, t.editMetadata.start) }),
                    (0, o.Yy)(p, { ...t, ...e }, !0);
            }
            return () => {
                w || e();
            };
        }, [p, D, R, y, w]),
        a.useEffect(() => {
            X > 0 && B <= 0 && T <= 0 && M((e) => ({ ...e, cropEnd: X }));
        }, [X, B, T]);
    let eb = a.useMemo(() => B - G, [G, B]),
        ey = a.useCallback(
            (e) => (
                ee.current.add(e),
                () => {
                    ee.current.delete(e);
                }
            ),
            [ee],
        ),
        {
            setCropStart: eC,
            setCropEnd: eE,
            setCrop: eA,
        } = ((C = a.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, B - 1);
                M((e) => ({ ...e, cropStart: t })), K?.current?.seek(t);
            },
            [B, M, K],
        )),
        {
            setCropStart: C,
            setCropEnd: a.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, G + 1, X);
                    M((e) => ({ ...e, cropEnd: t })), K?.current?.seek(t);
                },
                [G, X, M, K],
            ),
            setCrop: a.useCallback(
                (e, t) => {
                    M((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [M],
            ),
        }),
        {
            play: eN,
            pause: ek,
            seek: ew,
        } = ((E = a.useCallback(() => {
            K?.current?.play();
        }, [K])),
        {
            play: E,
            pause: a.useCallback(() => {
                K?.current?.pause();
            }, [K]),
            seek: a.useCallback(
                (e) => {
                    K?.current?.seek(e);
                },
                [K],
            ),
        });
    (0, s.A)(() => {
        let e = K.current?.videoElement;
        if (null == e || !et.current) return;
        let t = e.currentTime;
        W.current !== t && ((W.current = t), ee.current.forEach((e) => e.onTimeUpdate?.(t))),
            k.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        a.useEffect(() => {
            if (null == el) return;
            let e = () => {
                    q(!0), ee.current.forEach((e) => e.onPlay?.());
                },
                t = () => {
                    q(!1), ee.current.forEach((e) => e.onPause?.());
                },
                l = () => {
                    Z(el.duration);
                },
                n = () => {
                    J(!0), Z(el.duration), K?.current?.seek(O);
                },
                a = () => {
                    et.current = !0;
                };
            return (
                el.addEventListener("play", e),
                el.addEventListener("pause", t),
                el.addEventListener("durationchange", l),
                el.addEventListener("loadedmetadata", n),
                el.addEventListener("seeked", a),
                el.duration > 0 && Z(el.duration),
                el.readyState >= 1 && (J(!0), K?.current?.seek(O)),
                q(!el.paused),
                () => {
                    el.removeEventListener("play", e),
                        el.removeEventListener("pause", t),
                        el.removeEventListener("durationchange", l),
                        el.removeEventListener("loadedmetadata", n),
                        el.removeEventListener("seeked", a);
                }
            );
        }, [el, O, K, ee, q, J, Z, et]);
    let eR = a.useCallback((e) => {
            M((t) => ({ ...t, clipName: e }));
        }, []),
        eT = a.useCallback((e) => {
            M((t) => ({ ...t, isTemporary: e }));
        }, []),
        eL = a.useCallback((e) => {
            M((t) => ({ ...t, cropPreset: e }));
        }, []),
        eI = a.useCallback((e) => {
            M((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eO = a.useCallback((e) => {
            M((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eD = a.useCallback((e) => {
            M((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        e_ = a.useMemo(
            () =>
                function () {
                    let [e, t] = a.useState(W.current);
                    return (
                        a.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                ee.current.add(e),
                                () => {
                                    ee.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [W, ee],
        ),
        eM = a.useMemo(
            () => ({
                useCurrentTime: e_,
                duration: X,
                isPlaying: Y,
                isLoaded: Q,
                cropStart: G,
                cropEnd: B,
                cropDuration: eb,
                setCropStart: eC,
                setCropEnd: eE,
                setCrop: eA,
                cropPreset: H,
                setCropPreset: eL,
                activeTool: S,
                setActiveTool: P,
                play: eN,
                pause: ek,
                seek: ew,
                subscribe: ey,
                setVideoPlayerRef: ev,
                videoPlayerRef: K,
                videoURL: ea,
                audioTracks: ec,
                hasError: eu,
                applicationAudioEnabled: V,
                setApplicationAudioEnabled: eI,
                voiceAudioEnabled: $,
                setVoiceAudioEnabled: eO,
                soundboardAudioEnabled: F,
                setSoundboardAudioEnabled: eD,
                getEditedClip: ex,
                clipName: z,
                setClipName: eR,
                isTemporary: U,
                audioURL: es,
                setIsTemporary: eT,
                clip: N,
                editOnly: w,
                generateThumbnails: em,
                videoDimensions: ef,
            }),
            [
                w,
                e_,
                X,
                Y,
                Q,
                G,
                B,
                eb,
                eC,
                eE,
                eA,
                H,
                eL,
                S,
                P,
                eN,
                ek,
                ew,
                es,
                ey,
                ev,
                ea,
                ec,
                eu,
                V,
                eI,
                $,
                eO,
                F,
                eD,
                ex,
                z,
                eR,
                U,
                eT,
                N,
                em,
                ef,
            ],
        );
    return (0, n.jsx)(f.Provider, { value: eM, children: A });
}
function x() {
    let e = a.useContext(f);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
