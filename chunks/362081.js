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
    h = l(635793),
    f = l(696016),
    x = l(268378),
    v = l(375708);
let p = (e, t, l, a) => (a([]), () => {}),
    g = n.createContext(null);
function j(e) {
    var t;
    let j,
        b,
        C,
        y,
        w,
        N,
        { children: E, clip: k, modalContainerRef: A, editOnly: L = !1 } = e,
        R = k.type === f.nQ.SCREENSHOT,
        {
            initialDuration: I,
            initialCropStart: M,
            initialCropEnd: T,
            initialCurrentTime: D,
        } = ((j = k.length / 1e3),
        (b = k.editMetadata?.start ?? 0),
        (C = k.editMetadata?.end ?? 0),
        (y = 0 !== b || (0 !== C && C !== j)),
        {
            initialDuration: j,
            initialCropStart: b,
            initialCropEnd: C,
            isCropped: y,
            initialCurrentTime: y ? b : j / 2,
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
            cropPreset: k.editMetadata?.crop?.preset ?? f.yz.ORIGINAL,
        }),
        [z, _] = n.useState(h.Y.NONE),
        {
            clipName: $,
            cropStart: U,
            cropEnd: G,
            voiceAudioEnabled: H,
            applicationAudioEnabled: B,
            soundboardAudioEnabled: X,
            cropPreset: F,
        } = O,
        V = n.useRef(null),
        K = n.useRef(D),
        [W, Z] = n.useState(I),
        [Y, J] = n.useState(!1),
        [Q, q] = n.useState(!1),
        ee = n.useRef(new Set()),
        et = n.useRef(!1),
        [el, ea] = n.useState(null),
        [en, ei] = n.useState(null),
        [es, er] = n.useState(null),
        [eo, ec] = n.useState([]),
        [eu, ed] = n.useState(!1),
        [em, eh] = n.useState(() => p),
        [ef, ex] = n.useState(null),
        [ev, ep] = n.useState(() => k.tracks ?? []),
        eg = n.useRef(ev);
    eg.current = ev;
    let ej = n.useCallback(() => {
            let e = V.current?.videoElement?.currentTime ?? U,
                t = (0, i.clamp)(e, U, G - f.Cx);
            return { startSec: t, endSec: Math.min(t + f.tS, G) };
        }, [U, G, V]),
        eb = n.useCallback(() => {
            let e = crypto.randomUUID(),
                t = {
                    id: e,
                    type: f.Me.TEXT,
                    ...ej(),
                    data: {
                        text: v.intl.string(x.default.v2jEIc),
                        style: { ...f.QK },
                        position: { ...f._S },
                        rotationDeg: f.ad,
                    },
                };
            return (ep((e) => [...e, t]), _(h.Y.NONE), e);
        }, [ej, _]),
        eC = (0, f.QY)(F) ?? (null != ef ? ef.width / ef.height : null),
        ey = n.useCallback(
            (e) => {
                let t = crypto.randomUUID(),
                    l = {
                        id: t,
                        type: f.Me.IMAGE,
                        ...ej(),
                        data: {
                            ...e,
                            position: { ...f._S },
                            widthFraction: null != eC ? (0, f.Qw)(e.naturalWidth / e.naturalHeight, eC) : f.YK,
                            rotationDeg: f.ad,
                            shadow: f.xy,
                            shadowColor: f.pk,
                        },
                    };
                return (ep((e) => [...e, l]), _(h.Y.NONE), t);
            },
            [ej, _, eC],
        ),
        ew = n.useCallback((e) => {
            ep((t) => t.filter((t) => t.id !== e));
        }, []),
        eN = n.useCallback((e, t, l) => {
            ep((a) => a.map((a) => (a.id === e ? { ...a, startSec: t, endSec: l } : a)));
        }, []),
        eE = n.useCallback((e, t) => {
            ep((l) => l.map((l) => (l.id === e && l.type === f.Me.TEXT ? { ...l, data: t(l.data) } : l)));
        }, []),
        ek = n.useCallback((e, t) => {
            ep((l) => l.map((l) => (l.id === e && l.type === f.Me.IMAGE ? { ...l, data: t(l.data) } : l)));
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
        eL = n.useCallback((e) => {
            ((V.current = e), ea(e.videoElement));
        }, []),
        eR = n.useCallback((e, t, l, a) => {
            (ei(e), ec(t), er(l), eh(() => a));
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
                                        (f.nx.warn(`Timeline thumbnail extraction error: ${t.message}`),
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
                h = n.useRef(r);
            ((h.current = r),
                n.useEffect(() => {
                    async function e() {
                        let e = {},
                            n = h.current;
                        if (!i && null != a)
                            try {
                                e = { thumbnail: await (0, m.m)(a, n.editMetadata.start) };
                            } catch (e) {
                                f.nx.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                            }
                        await (0, o.Yy)(l, { ...n, tracks: t.current, ...e }, !0);
                    }
                    return () => {
                        !s && (u.set(l, e), c.has(l) || d(l));
                    };
                }, [l, a, i, h, s, t]));
        })(
            {
                clipId: k.id,
                clipProtocolVideoURL: S,
                isScreenshot: R,
                editOnly: L,
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
            W > 0 && G <= 0 && I <= 0 && P((e) => ({ ...e, cropEnd: W }));
        }, [W, G, I]));
    let eM = n.useMemo(() => G - U, [U, G]),
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
                    let t = (0, i.clamp)(e, U + 1, W);
                    (P((e) => ({ ...e, cropEnd: t })), V?.current?.seek(t));
                },
                [U, W, P, V],
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
            pause: ez,
            seek: e_,
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
        (K.current !== t && ((K.current = t), ee.current.forEach((e) => e.onTimeUpdate?.(t))),
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
                    el.duration > 0 && Z(el.duration),
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
                null != el && Z(el.duration);
            }
            function a() {
                null != el && (q(!0), Z(el.duration), V?.current?.seek(D));
            }
            function n() {
                et.current = !0;
            }
        }, [el, D, V, ee, J, q, Z, et]));
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
                    let [e, t] = n.useState(K.current);
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
            [K, ee],
        ),
        eF = n.useMemo(
            () => ({
                useCurrentTime: eX,
                duration: W,
                isPlaying: Y,
                isLoaded: Q,
                cropStart: U,
                cropEnd: G,
                cropDuration: eM,
                setCropStart: eD,
                setCropEnd: eS,
                setCrop: eO,
                cropPreset: F,
                setCropPreset: eU,
                activeTool: z,
                setActiveTool: _,
                play: eP,
                pause: ez,
                seek: e_,
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
                soundboardAudioEnabled: X,
                setSoundboardAudioEnabled: eB,
                getEditedClip: eA,
                tracks: ev,
                addTextTrack: eb,
                addImageTrack: ey,
                removeTrack: ew,
                updateTrackRange: eN,
                updateTextTrackData: eE,
                updateImageTrackData: ek,
                clipName: $,
                setClipName: e$,
                audioURL: es,
                clip: k,
                editOnly: L,
                generateThumbnails: em,
                videoDimensions: ef,
            }),
            [
                L,
                eX,
                W,
                Y,
                Q,
                U,
                G,
                eM,
                eD,
                eS,
                eO,
                F,
                eU,
                z,
                _,
                eP,
                ez,
                e_,
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
                X,
                eB,
                eA,
                ev,
                eb,
                ey,
                ew,
                eN,
                eE,
                ek,
                $,
                e$,
                k,
                em,
                ef,
            ],
        );
    return (0, a.jsx)(g.Provider, { value: eF, children: E });
}
function b() {
    let e = n.useContext(g);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
