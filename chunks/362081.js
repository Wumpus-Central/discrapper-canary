l.d(t, { T: () => C, p: () => j }), l(323874), l(14289), l(35956), l(321073);
var n = l(477900),
    a = l(582128),
    i = l(435558),
    s = l(972117),
    r = l(77729),
    c = l(430795);
let o = new Map(),
    u = new Map();
async function d(e) {
    let t = u.get(e);
    for (; null != t; ) {
        u.delete(e);
        let l = t().catch(() => {});
        o.set(e, l), await l, o.delete(e), (t = u.get(e));
    }
}
var m = l(956050),
    f = l(635793),
    h = l(696016),
    x = l(16590),
    v = l(375708);
let p = (e, t, l, n) => (n([]), () => {}),
    g = a.createContext(null);
function j(e) {
    var t;
    let j,
        C,
        b,
        y,
        E,
        N,
        { children: k, clip: w, modalContainerRef: A, editOnly: L = !1 } = e,
        R = w.type === h.nQ.SCREENSHOT,
        {
            initialDuration: T,
            initialCropStart: I,
            initialCropEnd: M,
            initialCurrentTime: D,
        } = ((j = w.length / 1e3),
        (C = w.editMetadata?.start ?? 0),
        (b = w.editMetadata?.end ?? 0),
        (y = 0 !== C || (0 !== b && b !== j)),
        {
            initialDuration: j,
            initialCropStart: C,
            initialCropEnd: b,
            isCropped: y,
            initialCurrentTime: y ? C : j / 2,
        }),
        S = a.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(w.filepath),
            [w.filepath],
        ),
        [O, P] = a.useState({
            clipName: w.name,
            isTemporary: w.isTemporary ?? !1,
            cropStart: I,
            cropEnd: 0 === M ? T : M,
            voiceAudioEnabled: w.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: w.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: w.editMetadata?.soundboardAudio ?? !0,
            cropPreset: w.editMetadata?.crop?.preset ?? h.yz.ORIGINAL,
        }),
        [_, z] = a.useState(f.Y.NONE),
        {
            clipName: U,
            isTemporary: $,
            cropStart: B,
            cropEnd: G,
            voiceAudioEnabled: H,
            applicationAudioEnabled: V,
            soundboardAudioEnabled: K,
            cropPreset: F,
        } = O,
        X = a.useRef(null),
        Z = a.useRef(D),
        [W, Y] = a.useState(T),
        [Q, J] = a.useState(!1),
        [q, ee] = a.useState(!1),
        et = a.useRef(new Set()),
        el = a.useRef(!1),
        [en, ea] = a.useState(null),
        [ei, es] = a.useState(null),
        [er, ec] = a.useState(null),
        [eo, eu] = a.useState([]),
        [ed, em] = a.useState(!1),
        [ef, eh] = a.useState(() => p),
        [ex, ev] = a.useState(null),
        [ep, eg] = a.useState(() => w.tracks ?? []),
        ej = a.useRef(ep);
    ej.current = ep;
    let eC = a.useCallback(() => {
            let e = crypto.randomUUID(),
                t = X.current?.videoElement?.currentTime ?? B,
                l = (0, i.clamp)(t, B, G - h.Cx),
                n = Math.min(l + h.tS, G),
                a = {
                    id: e,
                    type: h.Me.TEXT,
                    startSec: l,
                    endSec: n,
                    data: { text: v.intl.string(x.default.v2jEIc), style: { ...h.QK }, position: { ...h._S } },
                };
            return eg((e) => [...e, a]), z(f.Y.NONE), e;
        }, [B, G, z, X]),
        eb = a.useCallback((e) => {
            eg((t) => t.filter((t) => t.id !== e));
        }, []),
        ey = a.useCallback((e, t, l) => {
            eg((n) => n.map((n) => (n.id === e ? { ...n, startSec: t, endSec: l } : n)));
        }, []),
        eE = a.useCallback((e, t) => {
            eg((l) => l.map((l) => (l.id === e ? { ...l, data: t(l.data) } : l)));
        }, []),
        eN = a.useCallback(
            () => ({
                ...w,
                name: U,
                tracks: ej.current,
                editMetadata: {
                    start: B,
                    end: G,
                    applicationAudio: V,
                    voiceAudio: H,
                    soundboardAudio: K,
                    crop: { preset: F },
                },
            }),
            [w, U, B, G, V, H, K, F],
        ),
        ek = a.useCallback((e) => {
            (X.current = e), ea(e.videoElement);
        }, []),
        ew = a.useCallback((e, t, l, n) => {
            es(e), eu(t), ec(l), eh(() => n);
        }, []),
        eA = a.useCallback(() => {
            em(!0);
        }, []);
    (t = w.filepath),
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
                        eA();
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
                            ew(i, r, URL.createObjectURL(new Blob([a], { type: "audio/mp4" })), s);
                    }),
                        (n.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    ev({ width: t.width, height: t.height });
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
                                        (h.nx.warn(`Timeline thumbnail extraction error: ${t.message}`),
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
        }, [t, ew, ev, eA]),
        a.useEffect(
            () => () => {
                null != ei && URL.revokeObjectURL(ei);
            },
            [ei],
        ),
        a.useEffect(
            () => () => {
                for (let e of eo) URL.revokeObjectURL(e.url);
            },
            [eo],
        ),
        a.useEffect(
            () => () => {
                null != er && URL.revokeObjectURL(er);
            },
            [er],
        ),
        (function (e, t) {
            let { clipId: l, clipProtocolVideoURL: n, isScreenshot: i, editOnly: s, pendingEdits: r } = e,
                f = a.useRef(r);
            (f.current = r),
                a.useEffect(() => {
                    async function e() {
                        let e = {},
                            a = f.current;
                        if (!i && null != n)
                            try {
                                e = { thumbnail: await (0, m.m)(n, a.editMetadata.start) };
                            } catch (e) {
                                h.nx.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                            }
                        await (0, c.Yy)(l, { ...a, tracks: t.current, ...e }, !0);
                    }
                    return () => {
                        !s && (u.set(l, e), o.has(l) || d(l));
                    };
                }, [l, n, i, f, s, t]);
        })(
            {
                clipId: w.id,
                clipProtocolVideoURL: S,
                isScreenshot: R,
                editOnly: L,
                pendingEdits: {
                    name: U,
                    editMetadata: {
                        start: B,
                        end: G,
                        voiceAudio: H,
                        applicationAudio: V,
                        soundboardAudio: K,
                        crop: { preset: F },
                    },
                },
            },
            ej,
        ),
        a.useEffect(() => {
            W > 0 && G <= 0 && T <= 0 && P((e) => ({ ...e, cropEnd: W }));
        }, [W, G, T]);
    let eL = a.useMemo(() => G - B, [B, G]),
        eR = a.useCallback(
            (e) => (
                et.current.add(e),
                () => {
                    et.current.delete(e);
                }
            ),
            [et],
        ),
        {
            setCropStart: eT,
            setCropEnd: eI,
            setCrop: eM,
        } = ((E = a.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, G - 1);
                P((e) => ({ ...e, cropStart: t })), X?.current?.seek(t);
            },
            [G, P, X],
        )),
        {
            setCropStart: E,
            setCropEnd: a.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, B + 1, W);
                    P((e) => ({ ...e, cropEnd: t })), X?.current?.seek(t);
                },
                [B, W, P, X],
            ),
            setCrop: a.useCallback(
                (e, t) => {
                    P((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [P],
            ),
        }),
        {
            play: eD,
            pause: eS,
            seek: eO,
        } = ((N = a.useCallback(() => {
            X?.current?.play();
        }, [X])),
        {
            play: N,
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
        if (null == e || !el.current) return;
        let t = e.currentTime;
        Z.current !== t && ((Z.current = t), et.current.forEach((e) => e.onTimeUpdate?.(t))),
            A.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        a.useEffect(() => {
            if (null != en)
                return (
                    en.addEventListener("play", e),
                    en.addEventListener("pause", t),
                    en.addEventListener("durationchange", l),
                    en.addEventListener("loadedmetadata", n),
                    en.addEventListener("seeked", a),
                    en.duration > 0 && Y(en.duration),
                    en.readyState >= 1 && (ee(!0), X?.current?.seek(D)),
                    J(!en.paused),
                    () => {
                        en.removeEventListener("play", e),
                            en.removeEventListener("pause", t),
                            en.removeEventListener("durationchange", l),
                            en.removeEventListener("loadedmetadata", n),
                            en.removeEventListener("seeked", a);
                    }
                );
            function e() {
                J(!0), et.current.forEach((e) => e.onPlay?.());
            }
            function t() {
                J(!1), et.current.forEach((e) => e.onPause?.());
            }
            function l() {
                null != en && Y(en.duration);
            }
            function n() {
                null != en && (ee(!0), Y(en.duration), X?.current?.seek(D));
            }
            function a() {
                el.current = !0;
            }
        }, [en, D, X, et, J, ee, Y, el]);
    let eP = a.useCallback((e) => {
            P((t) => ({ ...t, clipName: e }));
        }, []),
        e_ = a.useCallback((e) => {
            P((t) => ({ ...t, isTemporary: e }));
        }, []),
        ez = a.useCallback((e) => {
            P((t) => ({ ...t, cropPreset: e }));
        }, []),
        eU = a.useCallback((e) => {
            P((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        e$ = a.useCallback((e) => {
            P((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eB = a.useCallback((e) => {
            P((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eG = a.useMemo(
            () =>
                function () {
                    let [e, t] = a.useState(Z.current);
                    return (
                        a.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                et.current.add(e),
                                () => {
                                    et.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [Z, et],
        ),
        eH = a.useMemo(
            () => ({
                useCurrentTime: eG,
                duration: W,
                isPlaying: Q,
                isLoaded: q,
                cropStart: B,
                cropEnd: G,
                cropDuration: eL,
                setCropStart: eT,
                setCropEnd: eI,
                setCrop: eM,
                cropPreset: F,
                setCropPreset: ez,
                activeTool: _,
                setActiveTool: z,
                play: eD,
                pause: eS,
                seek: eO,
                subscribe: eR,
                setVideoPlayerRef: ek,
                videoPlayerRef: X,
                videoURL: ei,
                audioTracks: eo,
                hasError: ed,
                applicationAudioEnabled: V,
                setApplicationAudioEnabled: eU,
                voiceAudioEnabled: H,
                setVoiceAudioEnabled: e$,
                soundboardAudioEnabled: K,
                setSoundboardAudioEnabled: eB,
                getEditedClip: eN,
                tracks: ep,
                addTextTrack: eC,
                removeTrack: eb,
                updateTrackRange: ey,
                updateTextTrackData: eE,
                clipName: U,
                setClipName: eP,
                isTemporary: $,
                audioURL: er,
                setIsTemporary: e_,
                clip: w,
                editOnly: L,
                generateThumbnails: ef,
                videoDimensions: ex,
            }),
            [
                L,
                eG,
                W,
                Q,
                q,
                B,
                G,
                eL,
                eT,
                eI,
                eM,
                F,
                ez,
                _,
                z,
                eD,
                eS,
                eO,
                er,
                eR,
                ek,
                ei,
                eo,
                ed,
                V,
                eU,
                H,
                e$,
                K,
                eB,
                eN,
                ep,
                eC,
                eb,
                ey,
                eE,
                U,
                eP,
                $,
                e_,
                w,
                ef,
                ex,
            ],
        );
    return (0, n.jsx)(g.Provider, { value: eH, children: k });
}
function C() {
    let e = a.useContext(g);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
