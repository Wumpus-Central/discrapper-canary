(l.d(t, { T: () => C, p: () => j }), l(323874), l(14289), l(35956), l(321073));
var a = l(477900),
    n = l(582128),
    i = l(435558),
    s = l(194498),
    r = l(77729),
    o = l(614584);
let c = new Map(),
    u = new Map();
async function d(e) {
    let t = u.get(e);
    for (; null != t;) {
        u.delete(e);
        let l = t().catch(() => {});
        (c.set(e, l), await l, c.delete(e), (t = u.get(e)));
    }
}
var m = l(956050),
    f = l(635793),
    h = l(696016),
    x = l(268378),
    p = l(375708);
let v = (e, t, l, a) => (a([]), () => {}),
    g = n.createContext(null);
function j(e) {
    var t;
    let j,
        C,
        b,
        y,
        w,
        N,
        { children: E, clip: k, modalContainerRef: A, editOnly: L = !1 } = e,
        R = k.type === h.nQ.SCREENSHOT,
        {
            initialDuration: I,
            initialCropStart: M,
            initialCropEnd: T,
            initialCurrentTime: D,
        } = ((j = k.length / 1e3),
        (C = k.editMetadata?.start ?? 0),
        (b = k.editMetadata?.end ?? 0),
        (y = 0 !== C || (0 !== b && b !== j)),
        {
            initialDuration: j,
            initialCropStart: C,
            initialCropEnd: b,
            isCropped: y,
            initialCurrentTime: y ? C : j / 2,
        }),
        S = n.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(k.filepath),
            [k.filepath],
        ),
        [O, P] = n.useState({
            clipName: k.name,
            cropStart: M,
            cropEnd: 0 === T ? I : T,
            voiceAudioEnabled: k.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: k.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: k.editMetadata?.soundboardAudio ?? !0,
            cropPreset: k.editMetadata?.crop?.preset ?? h.yz.ORIGINAL,
        }),
        [_, z] = n.useState(f.Y.NONE),
        {
            clipName: U,
            cropStart: $,
            cropEnd: G,
            voiceAudioEnabled: H,
            applicationAudioEnabled: B,
            soundboardAudioEnabled: F,
            cropPreset: X,
        } = O,
        V = n.useRef(null),
        W = n.useRef(D),
        [Z, K] = n.useState(I),
        [Y, J] = n.useState(!1),
        [Q, q] = n.useState(!1),
        ee = n.useRef(new Set()),
        et = n.useRef(!1),
        [el, ea] = n.useState(null),
        [en, ei] = n.useState(null),
        [es, er] = n.useState(null),
        [eo, ec] = n.useState([]),
        [eu, ed] = n.useState(!1),
        [em, ef] = n.useState(() => v),
        [eh, ex] = n.useState(null),
        [ep, ev] = n.useState(() => k.tracks ?? []),
        eg = n.useRef(ep);
    eg.current = ep;
    let ej = n.useCallback(() => {
            let e = V.current?.videoElement?.currentTime ?? $,
                t = (0, i.clamp)(e, $, G - h.Cx);
            return { startSec: t, endSec: Math.min(t + h.tS, G) };
        }, [$, G, V]),
        eC = n.useCallback(() => {
            let e = crypto.randomUUID(),
                t = {
                    id: e,
                    type: h.Me.TEXT,
                    ...ej(),
                    data: {
                        text: p.intl.string(x.default.v2jEIc),
                        style: { ...h.QK },
                        position: { ...h._S },
                        rotationDeg: h.ad,
                    },
                };
            return (ev((e) => [...e, t]), z(f.Y.NONE), e);
        }, [ej, z]),
        eb = (0, h.QY)(X) ?? (null != eh ? eh.width / eh.height : null),
        ey = n.useCallback(
            (e) => {
                let t = crypto.randomUUID(),
                    l = {
                        id: t,
                        type: h.Me.IMAGE,
                        ...ej(),
                        data: {
                            ...e,
                            position: { ...h._S },
                            widthFraction: null != eb ? (0, h.Qw)(e.naturalWidth / e.naturalHeight, eb) : h.YK,
                            rotationDeg: h.ad,
                            shadow: h.xy,
                            shadowColor: h.pk,
                        },
                    };
                return (ev((e) => [...e, l]), z(f.Y.NONE), t);
            },
            [ej, z, eb],
        ),
        ew = n.useCallback((e) => {
            ev((t) => t.filter((t) => t.id !== e));
        }, []),
        eN = n.useCallback((e, t, l) => {
            ev((a) => a.map((a) => (a.id === e ? { ...a, startSec: t, endSec: l } : a)));
        }, []),
        eE = n.useCallback((e, t) => {
            ev((l) => l.map((l) => (l.id === e && l.type === h.Me.TEXT ? { ...l, data: t(l.data) } : l)));
        }, []),
        ek = n.useCallback((e, t) => {
            ev((l) => l.map((l) => (l.id === e && l.type === h.Me.IMAGE ? { ...l, data: t(l.data) } : l)));
        }, []),
        eA = n.useCallback(
            () => ({
                ...k,
                name: U,
                tracks: eg.current,
                editMetadata: {
                    start: $,
                    end: G,
                    applicationAudio: B,
                    voiceAudio: H,
                    soundboardAudio: F,
                    crop: { preset: X },
                },
            }),
            [k, U, $, G, B, H, F, X],
        ),
        eL = n.useCallback((e) => {
            ((V.current = e), ea(e.videoElement));
        }, []),
        eR = n.useCallback((e, t, l, a) => {
            (ei(e), ec(t), er(l), ef(() => a));
        }, []),
        eI = n.useCallback(() => {
            ed(!0);
        }, []);
    ((t = k.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("380202"), l.b)),
                a = new Worker(new URL("/assets/" + l.u("35886"), l.b)),
                n = new Map(),
                i = 0,
                s = (e, t, l, s) => {
                    let r = ++i;
                    return (
                        n.set(r, s),
                        a.postMessage({
                            type: "extract",
                            requestId: r,
                            timestamps: e,
                            previewWidth: t,
                            previewHeight: l,
                        }),
                        () => {
                            n.delete(r);
                        }
                    );
                };
            return (
                (async function () {
                    let l;
                    try {
                        l = await r.A.clips.loadClip(t);
                    } catch {
                        eI();
                        return;
                    }
                    ((e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: n } = e.data,
                            i = URL.createObjectURL(new Blob([t], { type: "video/mp4" })),
                            r = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            r.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        (a.postMessage({ type: "init", videoBuffer: t }, [t]),
                            eR(i, r, URL.createObjectURL(new Blob([n], { type: "audio/mp4" })), s));
                    }),
                        (a.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    ex({ width: t.width, height: t.height });
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
                                        (h.nx.warn(`Timeline thumbnail extraction error: ${t.message}`),
                                        null != t.requestId)
                                    ) {
                                        let e = n.get(t.requestId);
                                        (n.delete(t.requestId), e?.([]));
                                    }
                            }
                        }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]));
                })(),
                () => {
                    (e.terminate(), a.terminate(), n.clear());
                }
            );
        }, [t, eR, ex, eI]),
        n.useEffect(
            () => () => {
                null != en && URL.revokeObjectURL(en);
            },
            [en],
        ),
        n.useEffect(
            () => () => {
                for (let e of eo) URL.revokeObjectURL(e.url);
            },
            [eo],
        ),
        n.useEffect(
            () => () => {
                null != es && URL.revokeObjectURL(es);
            },
            [es],
        ),
        (function (e, t) {
            let { clipId: l, clipProtocolVideoURL: a, isScreenshot: i, editOnly: s, pendingEdits: r } = e,
                f = n.useRef(r);
            ((f.current = r),
                n.useEffect(() => {
                    async function e() {
                        let e = {},
                            n = f.current;
                        if (!i && null != a)
                            try {
                                e = { thumbnail: await (0, m.m)(a, n.editMetadata.start) };
                            } catch (e) {
                                h.nx.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                            }
                        await (0, o.Yy)(l, { ...n, tracks: t.current, ...e }, !0);
                    }
                    return () => {
                        !s && (u.set(l, e), c.has(l) || d(l));
                    };
                }, [l, a, i, f, s, t]));
        })(
            {
                clipId: k.id,
                clipProtocolVideoURL: S,
                isScreenshot: R,
                editOnly: L,
                pendingEdits: {
                    name: U,
                    editMetadata: {
                        start: $,
                        end: G,
                        voiceAudio: H,
                        applicationAudio: B,
                        soundboardAudio: F,
                        crop: { preset: X },
                    },
                },
            },
            eg,
        ),
        n.useEffect(() => {
            Z > 0 && G <= 0 && I <= 0 && P((e) => ({ ...e, cropEnd: Z }));
        }, [Z, G, I]));
    let eM = n.useMemo(() => G - $, [$, G]),
        eT = n.useCallback(
            (e) => (
                ee.current.add(e),
                () => {
                    ee.current.delete(e);
                }
            ),
            [ee],
        ),
        {
            setCropStart: eD,
            setCropEnd: eS,
            setCrop: eO,
        } = ((w = n.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, G - 1);
                (P((e) => ({ ...e, cropStart: t })), V?.current?.seek(t));
            },
            [G, P, V],
        )),
        {
            setCropStart: w,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, $ + 1, Z);
                    (P((e) => ({ ...e, cropEnd: t })), V?.current?.seek(t));
                },
                [$, Z, P, V],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    P((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [P],
            ),
        }),
        {
            play: eP,
            pause: e_,
            seek: ez,
        } = ((N = n.useCallback(() => {
            V?.current?.play();
        }, [V])),
        {
            play: N,
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
    ((0, s.A)(() => {
        let e = V.current?.videoElement;
        if (null == e || !et.current) return;
        let t = e.currentTime;
        (W.current !== t && ((W.current = t), ee.current.forEach((e) => e.onTimeUpdate?.(t))),
            A.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`));
    }),
        n.useEffect(() => {
            if (null != el)
                return (
                    el.addEventListener("play", e),
                    el.addEventListener("pause", t),
                    el.addEventListener("durationchange", l),
                    el.addEventListener("loadedmetadata", a),
                    el.addEventListener("seeked", n),
                    el.duration > 0 && K(el.duration),
                    el.readyState >= 1 && (q(!0), V?.current?.seek(D)),
                    J(!el.paused),
                    () => {
                        (el.removeEventListener("play", e),
                            el.removeEventListener("pause", t),
                            el.removeEventListener("durationchange", l),
                            el.removeEventListener("loadedmetadata", a),
                            el.removeEventListener("seeked", n));
                    }
                );
            function e() {
                (J(!0), ee.current.forEach((e) => e.onPlay?.()));
            }
            function t() {
                (J(!1), ee.current.forEach((e) => e.onPause?.()));
            }
            function l() {
                null != el && K(el.duration);
            }
            function a() {
                null != el && (q(!0), K(el.duration), V?.current?.seek(D));
            }
            function n() {
                et.current = !0;
            }
        }, [el, D, V, ee, J, q, K, et]));
    let eU = n.useCallback((e) => {
            P((t) => ({ ...t, clipName: e }));
        }, []),
        e$ = n.useCallback((e) => {
            P((t) => ({ ...t, cropPreset: e }));
        }, []),
        eG = n.useCallback((e) => {
            P((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eH = n.useCallback((e) => {
            P((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eB = n.useCallback((e) => {
            P((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eF = n.useMemo(
            () =>
                function () {
                    let [e, t] = n.useState(W.current);
                    return (
                        n.useEffect(() => {
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
        eX = n.useMemo(
            () => ({
                useCurrentTime: eF,
                duration: Z,
                isPlaying: Y,
                isLoaded: Q,
                cropStart: $,
                cropEnd: G,
                cropDuration: eM,
                setCropStart: eD,
                setCropEnd: eS,
                setCrop: eO,
                cropPreset: X,
                setCropPreset: e$,
                activeTool: _,
                setActiveTool: z,
                play: eP,
                pause: e_,
                seek: ez,
                subscribe: eT,
                setVideoPlayerRef: eL,
                videoPlayerRef: V,
                videoURL: en,
                audioTracks: eo,
                hasError: eu,
                applicationAudioEnabled: B,
                setApplicationAudioEnabled: eG,
                voiceAudioEnabled: H,
                setVoiceAudioEnabled: eH,
                soundboardAudioEnabled: F,
                setSoundboardAudioEnabled: eB,
                getEditedClip: eA,
                tracks: ep,
                addTextTrack: eC,
                addImageTrack: ey,
                removeTrack: ew,
                updateTrackRange: eN,
                updateTextTrackData: eE,
                updateImageTrackData: ek,
                clipName: U,
                setClipName: eU,
                audioURL: es,
                clip: k,
                editOnly: L,
                generateThumbnails: em,
                videoDimensions: eh,
            }),
            [
                L,
                eF,
                Z,
                Y,
                Q,
                $,
                G,
                eM,
                eD,
                eS,
                eO,
                X,
                e$,
                _,
                z,
                eP,
                e_,
                ez,
                es,
                eT,
                eL,
                en,
                eo,
                eu,
                B,
                eG,
                H,
                eH,
                F,
                eB,
                eA,
                ep,
                eC,
                ey,
                ew,
                eN,
                eE,
                ek,
                U,
                eU,
                k,
                em,
                eh,
            ],
        );
    return (0, a.jsx)(g.Provider, { value: eX, children: E });
}
function C() {
    let e = n.useContext(g);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
