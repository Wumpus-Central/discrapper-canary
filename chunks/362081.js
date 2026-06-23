l.d(t, { T: () => j, p: () => g }), l(323874), l(14289), l(35956), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(735438),
    s = l(194498),
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
            initialCropEnd: _,
            initialCurrentTime: M,
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
        [P, z] = a.useState({
            clipName: R.name,
            isTemporary: R.isTemporary ?? !1,
            cropStart: D,
            cropEnd: 0 === _ ? O : _,
            voiceAudioEnabled: R.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: R.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: R.editMetadata?.soundboardAudio ?? !0,
            cropPreset: R.editMetadata?.crop?.preset ?? c.yz.ORIGINAL,
        }),
        [U, G] = a.useState(f.Y.NONE),
        {
            clipName: B,
            isTemporary: $,
            cropStart: V,
            cropEnd: F,
            voiceAudioEnabled: H,
            applicationAudioEnabled: K,
            soundboardAudioEnabled: W,
            cropPreset: X,
        } = P,
        Z = a.useRef(null),
        Y = a.useRef(M),
        [q, Q] = a.useState(O),
        [J, ee] = a.useState(!1),
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
                    start: V,
                    end: F,
                    applicationAudio: K,
                    voiceAudio: H,
                    soundboardAudio: W,
                    crop: { preset: X },
                },
            }),
            [R, B, V, F, K, H, W, X],
        ),
        eb = a.useCallback((e) => {
            (Z.current = e), es(e.videoElement);
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
                start: V,
                end: F,
                voiceAudio: H,
                applicationAudio: K,
                soundboardAudio: W,
                crop: { preset: X },
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
            q > 0 && F <= 0 && O <= 0 && z((e) => ({ ...e, cropEnd: q }));
        }, [q, F, O]);
    let eE = a.useMemo(() => F - V, [V, F]),
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
                let t = (0, i.clamp)(e, 0, F - 1);
                z((e) => ({ ...e, cropStart: t })), Z?.current?.seek(t);
            },
            [F, z, Z],
        )),
        {
            setCropStart: N,
            setCropEnd: a.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, V + 1, q);
                    z((e) => ({ ...e, cropEnd: t })), Z?.current?.seek(t);
                },
                [V, q, z, Z],
            ),
            setCrop: a.useCallback(
                (e, t) => {
                    z((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [z],
            ),
        }),
        {
            play: eR,
            pause: eT,
            seek: eL,
        } = ((k = a.useCallback(() => {
            Z?.current?.play();
        }, [Z])),
        {
            play: k,
            pause: a.useCallback(() => {
                Z?.current?.pause();
            }, [Z]),
            seek: a.useCallback(
                (e) => {
                    Z?.current?.seek(e);
                },
                [Z],
            ),
        });
    (0, s.A)(() => {
        let e = Z.current?.videoElement;
        if (null == e || !ea.current) return;
        let t = e.currentTime;
        Y.current !== t && ((Y.current = t), en.current.forEach((e) => e.onTimeUpdate?.(t))),
            T.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        a.useEffect(() => {
            if (null == ei) return;
            function e() {
                ee(!0), en.current.forEach((e) => e.onPlay?.());
            }
            function t() {
                ee(!1), en.current.forEach((e) => e.onPause?.());
            }
            let l = () => {
                    Q(ei.duration);
                },
                n = () => {
                    el(!0), Q(ei.duration), Z?.current?.seek(M);
                };
            function a() {
                ea.current = !0;
            }
            return (
                ei.addEventListener("play", e),
                ei.addEventListener("pause", t),
                ei.addEventListener("durationchange", l),
                ei.addEventListener("loadedmetadata", n),
                ei.addEventListener("seeked", a),
                ei.duration > 0 && Q(ei.duration),
                ei.readyState >= 1 && (el(!0), Z?.current?.seek(M)),
                ee(!ei.paused),
                () => {
                    ei.removeEventListener("play", e),
                        ei.removeEventListener("pause", t),
                        ei.removeEventListener("durationchange", l),
                        ei.removeEventListener("loadedmetadata", n),
                        ei.removeEventListener("seeked", a);
                }
            );
        }, [ei, M, Z, en, ee, el, Q, ea]);
    let eI = a.useCallback((e) => {
            z((t) => ({ ...t, clipName: e }));
        }, []),
        eO = a.useCallback((e) => {
            z((t) => ({ ...t, isTemporary: e }));
        }, []),
        eD = a.useCallback((e) => {
            z((t) => ({ ...t, cropPreset: e }));
        }, []),
        e_ = a.useCallback((e) => {
            z((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eM = a.useCallback((e) => {
            z((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eS = a.useCallback((e) => {
            z((t) => ({ ...t, soundboardAudioEnabled: e }));
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
        ez = a.useMemo(
            () => ({
                useCurrentTime: eP,
                duration: q,
                isPlaying: J,
                isLoaded: et,
                cropStart: V,
                cropEnd: F,
                cropDuration: eE,
                setCropStart: eN,
                setCropEnd: ek,
                setCrop: ew,
                cropPreset: X,
                setCropPreset: eD,
                activeTool: U,
                setActiveTool: G,
                play: eR,
                pause: eT,
                seek: eL,
                subscribe: eA,
                setVideoPlayerRef: eb,
                videoPlayerRef: Z,
                videoURL: er,
                audioTracks: ed,
                hasError: eh,
                applicationAudioEnabled: K,
                setApplicationAudioEnabled: e_,
                voiceAudioEnabled: H,
                setVoiceAudioEnabled: eM,
                soundboardAudioEnabled: W,
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
                J,
                et,
                V,
                F,
                eE,
                eN,
                ek,
                ew,
                X,
                eD,
                U,
                G,
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
                e_,
                H,
                eM,
                W,
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
    return (0, n.jsx)(v.Provider, { value: ez, children: w });
}
function j() {
    let e = a.useContext(v);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
