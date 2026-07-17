l.d(t, { T: () => j, p: () => g }), l(323874), l(14289), l(35956), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(435558),
    s = l(194498),
    r = l(77729),
    c = l(150303),
    o = l(430795);
let u = new Map(),
    d = new Map();
async function m(e) {
    let t = d.get(e);
    for (; null != t; ) {
        d.delete(e);
        let l = t().catch(() => {});
        u.set(e, l), await l, u.delete(e), (t = d.get(e));
    }
}
var h = l(956050),
    f = l(858174),
    p = l(696016);
let x = (e, t, l, n) => (n([]), () => {}),
    v = a.createContext(null);
function g(e) {
    var t, g, j;
    let b,
        y,
        C,
        E,
        A,
        N,
        k,
        { children: w, clip: R, modalContainerRef: T, editOnly: L = !1 } = e,
        I = R.type === c.nQ.SCREENSHOT,
        {
            initialDuration: O,
            initialCropStart: D,
            initialCropEnd: M,
            initialCurrentTime: _,
        } = ((b = R.length / 1e3),
        (y = R.editMetadata?.start ?? 0),
        (C = R.editMetadata?.end ?? 0),
        (E = 0 !== y || (0 !== C && C !== b)),
        {
            initialDuration: b,
            initialCropStart: y,
            initialCropEnd: C,
            isCropped: E,
            initialCurrentTime: E ? y : b / 2,
        }),
        S = a.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(R.filepath),
            [R.filepath],
        ),
        [P, G] = a.useState({
            clipName: R.name,
            isTemporary: R.isTemporary ?? !1,
            cropStart: D,
            cropEnd: 0 === M ? O : M,
            voiceAudioEnabled: R.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: R.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: R.editMetadata?.soundboardAudio ?? !0,
            cropPreset: R.editMetadata?.crop?.preset ?? c.yz.ORIGINAL,
        }),
        [U, z] = a.useState(f.Y.NONE),
        {
            clipName: B,
            isTemporary: $,
            cropStart: H,
            cropEnd: V,
            voiceAudioEnabled: F,
            applicationAudioEnabled: K,
            soundboardAudioEnabled: Z,
            cropPreset: W,
        } = P,
        X = a.useRef(null),
        Y = a.useRef(_),
        [q, J] = a.useState(O),
        [Q, ee] = a.useState(!1),
        [et, el] = a.useState(!1),
        en = a.useRef(new Set()),
        ea = a.useRef(!1),
        [ei, es] = a.useState(null),
        [er, ec] = a.useState(null),
        [eo, eu] = a.useState(null),
        [ed, em] = a.useState([]),
        [eh, ef] = a.useState(!1),
        [ep, ex] = a.useState(() => x),
        [ev, eg] = a.useState(null),
        ej = a.useCallback(
            () => ({
                ...R,
                name: B,
                editMetadata: {
                    start: H,
                    end: V,
                    applicationAudio: K,
                    voiceAudio: F,
                    soundboardAudio: Z,
                    crop: { preset: W },
                },
            }),
            [R, B, H, V, K, F, Z, W],
        ),
        eb = a.useCallback((e) => {
            (X.current = e), es(e.videoElement);
        }, []),
        ey = a.useCallback((e, t, l, n) => {
            ec(e), em(t), eu(l), ex(() => n);
        }, []),
        eC = a.useCallback(() => {
            ef(!0);
        }, []);
    (t = R.filepath),
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
                        eC();
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
                            ey(i, r, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })), s);
                    }),
                        (n.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    eg({ width: t.width, height: t.height });
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
                                        (p.nx.warn(`Timeline thumbnail extraction error: ${t.message}`),
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
        }, [t, ey, eg, eC]),
        a.useEffect(
            () => () => {
                null != er && URL.revokeObjectURL(er);
            },
            [er],
        ),
        a.useEffect(
            () => () => {
                for (let e of ed) URL.revokeObjectURL(e.url);
            },
            [ed],
        ),
        a.useEffect(
            () => () => {
                null != eo && URL.revokeObjectURL(eo);
            },
            [eo],
        ),
        (g = R.id),
        (j = {
            name: B,
            editMetadata: {
                start: H,
                end: V,
                voiceAudio: F,
                applicationAudio: K,
                soundboardAudio: Z,
                crop: { preset: W },
            },
        }),
        ((A = a.useRef(j)).current = j),
        a.useEffect(() => {
            async function e() {
                let e = {},
                    t = A.current;
                if (!I && null != S)
                    try {
                        e = { thumbnail: await (0, h.m)(S, t.editMetadata.start) };
                    } catch (e) {
                        p.nx.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                    }
                await (0, o.Yy)(g, { ...t, ...e }, !0);
            }
            return () => {
                !L && (d.set(g, e), u.has(g) || m(g));
            };
        }, [g, S, I, A, L]),
        a.useEffect(() => {
            q > 0 && V <= 0 && O <= 0 && G((e) => ({ ...e, cropEnd: q }));
        }, [q, V, O]);
    let eE = a.useMemo(() => V - H, [H, V]),
        eA = a.useCallback(
            (e) => (
                en.current.add(e),
                () => {
                    en.current.delete(e);
                }
            ),
            [en],
        ),
        {
            setCropStart: eN,
            setCropEnd: ek,
            setCrop: ew,
        } = ((N = a.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, V - 1);
                G((e) => ({ ...e, cropStart: t })), X?.current?.seek(t);
            },
            [V, G, X],
        )),
        {
            setCropStart: N,
            setCropEnd: a.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, H + 1, q);
                    G((e) => ({ ...e, cropEnd: t })), X?.current?.seek(t);
                },
                [H, q, G, X],
            ),
            setCrop: a.useCallback(
                (e, t) => {
                    G((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [G],
            ),
        }),
        {
            play: eR,
            pause: eT,
            seek: eL,
        } = ((k = a.useCallback(() => {
            X?.current?.play();
        }, [X])),
        {
            play: k,
            pause: a.useCallback(() => {
                X?.current?.pause();
            }, [X]),
            seek: a.useCallback(
                (e) => {
                    X?.current?.seek(e);
                },
                [X],
            ),
        });
    (0, s.A)(() => {
        let e = X.current?.videoElement;
        if (null == e || !ea.current) return;
        let t = e.currentTime;
        Y.current !== t && ((Y.current = t), en.current.forEach((e) => e.onTimeUpdate?.(t))),
            T.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        a.useEffect(() => {
            if (null != ei)
                return (
                    ei.addEventListener("play", e),
                    ei.addEventListener("pause", t),
                    ei.addEventListener("durationchange", l),
                    ei.addEventListener("loadedmetadata", n),
                    ei.addEventListener("seeked", a),
                    ei.duration > 0 && J(ei.duration),
                    ei.readyState >= 1 && (el(!0), X?.current?.seek(_)),
                    ee(!ei.paused),
                    () => {
                        ei.removeEventListener("play", e),
                            ei.removeEventListener("pause", t),
                            ei.removeEventListener("durationchange", l),
                            ei.removeEventListener("loadedmetadata", n),
                            ei.removeEventListener("seeked", a);
                    }
                );
            function e() {
                ee(!0), en.current.forEach((e) => e.onPlay?.());
            }
            function t() {
                ee(!1), en.current.forEach((e) => e.onPause?.());
            }
            function l() {
                null != ei && J(ei.duration);
            }
            function n() {
                null != ei && (el(!0), J(ei.duration), X?.current?.seek(_));
            }
            function a() {
                ea.current = !0;
            }
        }, [ei, _, X, en, ee, el, J, ea]);
    let eI = a.useCallback((e) => {
            G((t) => ({ ...t, clipName: e }));
        }, []),
        eO = a.useCallback((e) => {
            G((t) => ({ ...t, isTemporary: e }));
        }, []),
        eD = a.useCallback((e) => {
            G((t) => ({ ...t, cropPreset: e }));
        }, []),
        eM = a.useCallback((e) => {
            G((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        e_ = a.useCallback((e) => {
            G((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eS = a.useCallback((e) => {
            G((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eP = a.useMemo(
            () =>
                function () {
                    let [e, t] = a.useState(Y.current);
                    return (
                        a.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                en.current.add(e),
                                () => {
                                    en.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [Y, en],
        ),
        eG = a.useMemo(
            () => ({
                useCurrentTime: eP,
                duration: q,
                isPlaying: Q,
                isLoaded: et,
                cropStart: H,
                cropEnd: V,
                cropDuration: eE,
                setCropStart: eN,
                setCropEnd: ek,
                setCrop: ew,
                cropPreset: W,
                setCropPreset: eD,
                activeTool: U,
                setActiveTool: z,
                play: eR,
                pause: eT,
                seek: eL,
                subscribe: eA,
                setVideoPlayerRef: eb,
                videoPlayerRef: X,
                videoURL: er,
                audioTracks: ed,
                hasError: eh,
                applicationAudioEnabled: K,
                setApplicationAudioEnabled: eM,
                voiceAudioEnabled: F,
                setVoiceAudioEnabled: e_,
                soundboardAudioEnabled: Z,
                setSoundboardAudioEnabled: eS,
                getEditedClip: ej,
                clipName: B,
                setClipName: eI,
                isTemporary: $,
                audioURL: eo,
                setIsTemporary: eO,
                clip: R,
                editOnly: L,
                generateThumbnails: ep,
                videoDimensions: ev,
            }),
            [
                L,
                eP,
                q,
                Q,
                et,
                H,
                V,
                eE,
                eN,
                ek,
                ew,
                W,
                eD,
                U,
                z,
                eR,
                eT,
                eL,
                eo,
                eA,
                eb,
                er,
                ed,
                eh,
                K,
                eM,
                F,
                e_,
                Z,
                eS,
                ej,
                B,
                eI,
                $,
                eO,
                R,
                ep,
                ev,
            ],
        );
    return (0, n.jsx)(v.Provider, { value: eG, children: w });
}
function j() {
    let e = a.useContext(v);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
