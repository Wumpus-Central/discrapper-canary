(l.d(t, { T: () => b, p: () => j }), l(323874), l(14289), l(35956), l(321073));
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
    p = l(268378),
    x = l(105292);
let v = (e, t, l, a) => (a([]), () => {}),
    g = n.createContext(null);
function j(e) {
    var t;
    let j,
        b,
        y,
        C,
        N,
        E,
        { children: w, clip: k, modalContainerRef: A, editOnly: R = !1 } = e,
        L = k.type === h.nQ.SCREENSHOT,
        {
            initialDuration: I,
            initialCropStart: T,
            initialCropEnd: M,
            initialCurrentTime: D,
        } = ((j = k.length / 1e3),
        (b = k.editMetadata?.start ?? 0),
        (y = k.editMetadata?.end ?? 0),
        (C = 0 !== b || (0 !== y && y !== j)),
        {
            initialDuration: j,
            initialCropStart: b,
            initialCropEnd: y,
            isCropped: C,
            initialCurrentTime: C ? b : j / 2,
        }),
        S = n.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(k.filepath),
            [k.filepath],
        ),
        [O, P] = n.useState({
            clipName: k.name,
            cropStart: T,
            cropEnd: 0 === M ? I : M,
            voiceAudioEnabled: k.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: k.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: k.editMetadata?.soundboardAudio ?? !0,
            cropPreset: k.editMetadata?.crop?.preset ?? h.yz.ORIGINAL,
        }),
        [_, z] = n.useState(f.Y.NONE),
        {
            clipName: $,
            cropStart: U,
            cropEnd: G,
            voiceAudioEnabled: H,
            applicationAudioEnabled: B,
            soundboardAudioEnabled: X,
            cropPreset: F,
        } = O,
        W = n.useRef(null),
        V = n.useRef(D),
        [K, Y] = n.useState(I),
        [Z, Q] = n.useState(!1),
        [J, q] = n.useState(!1),
        ee = n.useRef(new Set()),
        et = n.useRef(!1),
        [el, ea] = n.useState(null),
        [en, ei] = n.useState(null),
        [es, er] = n.useState(null),
        [eo, ec] = n.useState([]),
        [eu, ed] = n.useState(!1),
        [em, ef] = n.useState(() => v),
        [eh, ep] = n.useState(null),
        [ex, ev] = n.useState(() => k.tracks ?? []),
        eg = n.useRef(ex);
    eg.current = ex;
    let ej = n.useCallback(() => {
            let e = W.current?.videoElement?.currentTime ?? U,
                t = (0, i.clamp)(e, U, G - h.Cx);
            return { startSec: t, endSec: Math.min(t + h.tS, G) };
        }, [U, G, W]),
        eb = n.useCallback(() => {
            let e = crypto.randomUUID(),
                t = {
                    id: e,
                    type: h.Me.TEXT,
                    ...ej(),
                    data: {
                        text: x.intl.string(p.default.v2jEIc),
                        style: { ...h.QK },
                        position: { ...h._S },
                        rotationDeg: h.ad,
                    },
                };
            return (ev((e) => [...e, t]), z(f.Y.NONE), e);
        }, [ej, z]),
        ey = (0, h.QY)(F) ?? (null != eh ? eh.width / eh.height : null),
        eC = n.useCallback(
            (e) => {
                let t = crypto.randomUUID(),
                    l = {
                        id: t,
                        type: h.Me.IMAGE,
                        ...ej(),
                        data: {
                            ...e,
                            position: { ...h._S },
                            widthFraction: null != ey ? (0, h.Qw)(e.naturalWidth / e.naturalHeight, ey) : h.YK,
                            rotationDeg: h.ad,
                            shadow: h.xy,
                            shadowColor: h.pk,
                        },
                    };
                return (ev((e) => [...e, l]), z(f.Y.NONE), t);
            },
            [ej, z, ey],
        ),
        eN = n.useCallback((e) => {
            ev((t) => t.filter((t) => t.id !== e));
        }, []),
        eE = n.useCallback((e, t, l) => {
            ev((a) => a.map((a) => (a.id === e ? { ...a, startSec: t, endSec: l } : a)));
        }, []),
        ew = n.useCallback((e, t) => {
            ev((l) => l.map((l) => (l.id === e && l.type === h.Me.TEXT ? { ...l, data: t(l.data) } : l)));
        }, []),
        ek = n.useCallback((e, t) => {
            ev((l) => l.map((l) => (l.id === e && l.type === h.Me.IMAGE ? { ...l, data: t(l.data) } : l)));
        }, []),
        eA = n.useCallback(
            () => ({
                ...k,
                name: $,
                tracks: eg.current,
                editMetadata: {
                    start: U,
                    end: G,
                    applicationAudio: B,
                    voiceAudio: H,
                    soundboardAudio: X,
                    crop: { preset: F },
                },
            }),
            [k, $, U, G, B, H, X, F],
        ),
        eR = n.useCallback((e) => {
            ((W.current = e), ea(e.videoElement));
        }, []),
        eL = n.useCallback((e, t, l, a) => {
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
                            eL(i, r, URL.createObjectURL(new Blob([n], { type: "audio/mp4" })), s));
                    }),
                        (a.onmessage = (e) => {
                            let t = e.data;
                            switch (t.type) {
                                case "ready":
                                    ep({ width: t.width, height: t.height });
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
        }, [t, eL, ep, eI]),
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
                isScreenshot: L,
                editOnly: R,
                pendingEdits: {
                    name: $,
                    editMetadata: {
                        start: U,
                        end: G,
                        voiceAudio: H,
                        applicationAudio: B,
                        soundboardAudio: X,
                        crop: { preset: F },
                    },
                },
            },
            eg,
        ),
        n.useEffect(() => {
            K > 0 && G <= 0 && I <= 0 && P((e) => ({ ...e, cropEnd: K }));
        }, [K, G, I]));
    let eT = n.useMemo(() => G - U, [U, G]),
        eM = n.useCallback(
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
        } = ((N = n.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, G - 1);
                (P((e) => ({ ...e, cropStart: t })), W?.current?.seek(t));
            },
            [G, P, W],
        )),
        {
            setCropStart: N,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, U + 1, K);
                    (P((e) => ({ ...e, cropEnd: t })), W?.current?.seek(t));
                },
                [U, K, P, W],
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
        } = ((E = n.useCallback(() => {
            W?.current?.play();
        }, [W])),
        {
            play: E,
            pause: n.useCallback(() => {
                W?.current?.pause();
            }, [W]),
            seek: n.useCallback(
                (e) => {
                    W?.current?.seek(e);
                },
                [W],
            ),
        });
    ((0, s.A)(() => {
        let e = W.current?.videoElement;
        if (null == e || !et.current) return;
        let t = e.currentTime;
        (V.current !== t && ((V.current = t), ee.current.forEach((e) => e.onTimeUpdate?.(t))),
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
                    el.duration > 0 && Y(el.duration),
                    el.readyState >= 1 && (q(!0), W?.current?.seek(D)),
                    Q(!el.paused),
                    () => {
                        (el.removeEventListener("play", e),
                            el.removeEventListener("pause", t),
                            el.removeEventListener("durationchange", l),
                            el.removeEventListener("loadedmetadata", a),
                            el.removeEventListener("seeked", n));
                    }
                );
            function e() {
                (Q(!0), ee.current.forEach((e) => e.onPlay?.()));
            }
            function t() {
                (Q(!1), ee.current.forEach((e) => e.onPause?.()));
            }
            function l() {
                null != el && Y(el.duration);
            }
            function a() {
                null != el && (q(!0), Y(el.duration), W?.current?.seek(D));
            }
            function n() {
                et.current = !0;
            }
        }, [el, D, W, ee, Q, q, Y, et]));
    let e$ = n.useCallback((e) => {
            P((t) => ({ ...t, clipName: e }));
        }, []),
        eU = n.useCallback((e) => {
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
        eX = n.useMemo(
            () =>
                function () {
                    let [e, t] = n.useState(V.current);
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
            [V, ee],
        ),
        eF = n.useMemo(
            () => ({
                useCurrentTime: eX,
                duration: K,
                isPlaying: Z,
                isLoaded: J,
                cropStart: U,
                cropEnd: G,
                cropDuration: eT,
                setCropStart: eD,
                setCropEnd: eS,
                setCrop: eO,
                cropPreset: F,
                setCropPreset: eU,
                activeTool: _,
                setActiveTool: z,
                play: eP,
                pause: e_,
                seek: ez,
                subscribe: eM,
                setVideoPlayerRef: eR,
                videoPlayerRef: W,
                videoURL: en,
                audioTracks: eo,
                hasError: eu,
                applicationAudioEnabled: B,
                setApplicationAudioEnabled: eG,
                voiceAudioEnabled: H,
                setVoiceAudioEnabled: eH,
                soundboardAudioEnabled: X,
                setSoundboardAudioEnabled: eB,
                getEditedClip: eA,
                tracks: ex,
                addTextTrack: eb,
                addImageTrack: eC,
                removeTrack: eN,
                updateTrackRange: eE,
                updateTextTrackData: ew,
                updateImageTrackData: ek,
                clipName: $,
                setClipName: e$,
                audioURL: es,
                clip: k,
                editOnly: R,
                generateThumbnails: em,
                videoDimensions: eh,
            }),
            [
                R,
                eX,
                K,
                Z,
                J,
                U,
                G,
                eT,
                eD,
                eS,
                eO,
                F,
                eU,
                _,
                z,
                eP,
                e_,
                ez,
                es,
                eM,
                eR,
                en,
                eo,
                eu,
                B,
                eG,
                H,
                eH,
                X,
                eB,
                eA,
                ex,
                eb,
                eC,
                eN,
                eE,
                ew,
                ek,
                $,
                e$,
                k,
                em,
                eh,
            ],
        );
    return (0, a.jsx)(g.Provider, { value: eF, children: w });
}
function b() {
    let e = n.useContext(g);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
