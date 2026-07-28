l.d(t, { T: () => g, p: () => j }), l(323874), l(14289), l(35956), l(321073);
var n = l(477900),
    a = l(582128),
    i = l(435558),
    s = l(972117),
    r = l(77729),
    c = l(372684),
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
    f = l(635793),
    x = l(696016);
let v = (e, t, l, n) => (n([]), () => {}),
    p = a.createContext(null);
function j(e) {
    var t, j, g;
    let b,
        C,
        y,
        N,
        E,
        k,
        w,
        { children: A, clip: L, modalContainerRef: R, editOnly: T = !1 } = e,
        M = L.type === c.nQ.SCREENSHOT,
        {
            initialDuration: I,
            initialCropStart: D,
            initialCropEnd: S,
            initialCurrentTime: O,
        } = ((b = L.length / 1e3),
        (C = L.editMetadata?.start ?? 0),
        (y = L.editMetadata?.end ?? 0),
        (N = 0 !== C || (0 !== y && y !== b)),
        {
            initialDuration: b,
            initialCropStart: C,
            initialCropEnd: y,
            isCropped: N,
            initialCurrentTime: N ? C : b / 2,
        }),
        P = a.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(L.filepath),
            [L.filepath],
        ),
        [_, z] = a.useState({
            clipName: L.name,
            isTemporary: L.isTemporary ?? !1,
            cropStart: D,
            cropEnd: 0 === S ? I : S,
            voiceAudioEnabled: L.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: L.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: L.editMetadata?.soundboardAudio ?? !0,
            cropPreset: L.editMetadata?.crop?.preset ?? c.yz.ORIGINAL,
        }),
        [U, $] = a.useState(f.Y.NONE),
        {
            clipName: B,
            isTemporary: G,
            cropStart: H,
            cropEnd: F,
            voiceAudioEnabled: K,
            applicationAudioEnabled: V,
            soundboardAudioEnabled: X,
            cropPreset: Z,
        } = _,
        W = a.useRef(null),
        Y = a.useRef(O),
        [Q, J] = a.useState(I),
        [q, ee] = a.useState(!1),
        [et, el] = a.useState(!1),
        en = a.useRef(new Set()),
        ea = a.useRef(!1),
        [ei, es] = a.useState(null),
        [er, ec] = a.useState(null),
        [eo, eu] = a.useState(null),
        [ed, em] = a.useState([]),
        [eh, ef] = a.useState(!1),
        [ex, ev] = a.useState(() => v),
        [ep, ej] = a.useState(null),
        eg = a.useCallback(
            () => ({
                ...L,
                name: B,
                editMetadata: {
                    start: H,
                    end: F,
                    applicationAudio: V,
                    voiceAudio: K,
                    soundboardAudio: X,
                    crop: { preset: Z },
                },
            }),
            [L, B, H, F, V, K, X, Z],
        ),
        eb = a.useCallback((e) => {
            (W.current = e), es(e.videoElement);
        }, []),
        eC = a.useCallback((e, t, l, n) => {
            ec(e), em(t), eu(l), ev(() => n);
        }, []),
        ey = a.useCallback(() => {
            ef(!0);
        }, []);
    (t = L.filepath),
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
                        ey();
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
                            eC(i, r, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })), s);
                    }),
                        (n.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    ej({ width: t.width, height: t.height });
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
                                        (x.nx.warn(`Timeline thumbnail extraction error: ${t.message}`),
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
        }, [t, eC, ej, ey]),
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
        (j = L.id),
        (g = {
            name: B,
            editMetadata: {
                start: H,
                end: F,
                voiceAudio: K,
                applicationAudio: V,
                soundboardAudio: X,
                crop: { preset: Z },
            },
        }),
        ((E = a.useRef(g)).current = g),
        a.useEffect(() => {
            async function e() {
                let e = {},
                    t = E.current;
                if (!M && null != P)
                    try {
                        e = { thumbnail: await (0, h.m)(P, t.editMetadata.start) };
                    } catch (e) {
                        x.nx.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                    }
                await (0, o.Yy)(j, { ...t, ...e }, !0);
            }
            return () => {
                !T && (d.set(j, e), u.has(j) || m(j));
            };
        }, [j, P, M, E, T]),
        a.useEffect(() => {
            Q > 0 && F <= 0 && I <= 0 && z((e) => ({ ...e, cropEnd: Q }));
        }, [Q, F, I]);
    let eN = a.useMemo(() => F - H, [H, F]),
        eE = a.useCallback(
            (e) => (
                en.current.add(e),
                () => {
                    en.current.delete(e);
                }
            ),
            [en],
        ),
        {
            setCropStart: ek,
            setCropEnd: ew,
            setCrop: eA,
        } = ((k = a.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, F - 1);
                z((e) => ({ ...e, cropStart: t })), W?.current?.seek(t);
            },
            [F, z, W],
        )),
        {
            setCropStart: k,
            setCropEnd: a.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, H + 1, Q);
                    z((e) => ({ ...e, cropEnd: t })), W?.current?.seek(t);
                },
                [H, Q, z, W],
            ),
            setCrop: a.useCallback(
                (e, t) => {
                    z((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [z],
            ),
        }),
        {
            play: eL,
            pause: eR,
            seek: eT,
        } = ((w = a.useCallback(() => {
            W?.current?.play();
        }, [W])),
        {
            play: w,
            pause: a.useCallback(() => {
                W?.current?.pause();
            }, [W]),
            seek: a.useCallback(
                (e) => {
                    W?.current?.seek(e);
                },
                [W],
            ),
        });
    (0, s.A)(() => {
        let e = W.current?.videoElement;
        if (null == e || !ea.current) return;
        let t = e.currentTime;
        Y.current !== t && ((Y.current = t), en.current.forEach((e) => e.onTimeUpdate?.(t))),
            R.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
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
                    ei.readyState >= 1 && (el(!0), W?.current?.seek(O)),
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
                null != ei && (el(!0), J(ei.duration), W?.current?.seek(O));
            }
            function a() {
                ea.current = !0;
            }
        }, [ei, O, W, en, ee, el, J, ea]);
    let eM = a.useCallback((e) => {
            z((t) => ({ ...t, clipName: e }));
        }, []),
        eI = a.useCallback((e) => {
            z((t) => ({ ...t, isTemporary: e }));
        }, []),
        eD = a.useCallback((e) => {
            z((t) => ({ ...t, cropPreset: e }));
        }, []),
        eS = a.useCallback((e) => {
            z((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eO = a.useCallback((e) => {
            z((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eP = a.useCallback((e) => {
            z((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        e_ = a.useMemo(
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
        ez = a.useMemo(
            () => ({
                useCurrentTime: e_,
                duration: Q,
                isPlaying: q,
                isLoaded: et,
                cropStart: H,
                cropEnd: F,
                cropDuration: eN,
                setCropStart: ek,
                setCropEnd: ew,
                setCrop: eA,
                cropPreset: Z,
                setCropPreset: eD,
                activeTool: U,
                setActiveTool: $,
                play: eL,
                pause: eR,
                seek: eT,
                subscribe: eE,
                setVideoPlayerRef: eb,
                videoPlayerRef: W,
                videoURL: er,
                audioTracks: ed,
                hasError: eh,
                applicationAudioEnabled: V,
                setApplicationAudioEnabled: eS,
                voiceAudioEnabled: K,
                setVoiceAudioEnabled: eO,
                soundboardAudioEnabled: X,
                setSoundboardAudioEnabled: eP,
                getEditedClip: eg,
                clipName: B,
                setClipName: eM,
                isTemporary: G,
                audioURL: eo,
                setIsTemporary: eI,
                clip: L,
                editOnly: T,
                generateThumbnails: ex,
                videoDimensions: ep,
            }),
            [
                T,
                e_,
                Q,
                q,
                et,
                H,
                F,
                eN,
                ek,
                ew,
                eA,
                Z,
                eD,
                U,
                $,
                eL,
                eR,
                eT,
                eo,
                eE,
                eb,
                er,
                ed,
                eh,
                V,
                eS,
                K,
                eO,
                X,
                eP,
                eg,
                B,
                eM,
                G,
                eI,
                L,
                ex,
                ep,
            ],
        );
    return (0, n.jsx)(p.Provider, { value: ez, children: A });
}
function g() {
    let e = a.useContext(p);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
