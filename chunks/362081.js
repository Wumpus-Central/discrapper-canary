(l.d(t, { T: () => y, p: () => C }), l(323874), l(14289), l(35956), l(321073));
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
    p = l(704796),
    x = l(375708);
let v = (e, t, l, a) => (a([]), () => {}),
    g = n.createContext(null);
function C(e) {
    var t;
    let C,
        y,
        j,
        b,
        w,
        E,
        { children: N, clip: k, modalContainerRef: A, editOnly: I = !1 } = e,
        L = k.type === f.nQ.SCREENSHOT,
        {
            initialDuration: M,
            initialCropStart: R,
            initialCropEnd: T,
            initialCurrentTime: D,
        } = ((C = k.length / 1e3),
        (y = k.editMetadata?.start ?? 0),
        (j = k.editMetadata?.end ?? 0),
        (b = 0 !== y || (0 !== j && j !== C)),
        {
            initialDuration: C,
            initialCropStart: y,
            initialCropEnd: j,
            isCropped: b,
            initialCurrentTime: b ? y : C / 2,
        }),
        S = n.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(k.filepath),
            [k.filepath],
        ),
        [_, O] = n.useState({
            clipName: k.name,
            cropStart: R,
            cropEnd: 0 === T ? M : T,
            voiceAudioEnabled: k.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: k.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: k.editMetadata?.soundboardAudio ?? !0,
            cropPreset: k.editMetadata?.crop?.preset ?? f.yz.ORIGINAL,
        }),
        [P, G] = n.useState(h.Y.NONE),
        {
            clipName: U,
            cropStart: B,
            cropEnd: K,
            voiceAudioEnabled: z,
            applicationAudioEnabled: $,
            soundboardAudioEnabled: H,
            cropPreset: V,
        } = _,
        F = n.useRef(null),
        X = n.useRef(D),
        [Z, W] = n.useState(M),
        [q, Y] = n.useState(!1),
        [J, Q] = n.useState(!1),
        ee = n.useRef(new Set()),
        et = n.useRef(!1),
        [el, ea] = n.useState(null),
        [en, ei] = n.useState(null),
        [es, er] = n.useState(null),
        [eo, ec] = n.useState([]),
        [eu, ed] = n.useState(!1),
        [em, eh] = n.useState(() => v),
        [ef, ep] = n.useState(null),
        [ex, ev] = n.useState(() => k.tracks ?? []),
        eg = n.useRef(ex);
    eg.current = ex;
    let eC = n.useCallback(() => {
            let e = F.current?.videoElement?.currentTime ?? B,
                t = (0, i.clamp)(e, B, K - f.Cx);
            return { startSec: t, endSec: Math.min(t + f.tS, K) };
        }, [B, K, F]),
        ey = n.useCallback(() => {
            let e = crypto.randomUUID(),
                t = {
                    id: e,
                    type: f.Me.TEXT,
                    ...eC(),
                    data: {
                        text: x.intl.string(p.default.v2jEIc),
                        style: { ...f.QK },
                        position: { ...f._S },
                        rotationDeg: f.ad,
                    },
                };
            return (ev((e) => [...e, t]), G(h.Y.NONE), e);
        }, [eC, G]),
        ej = (0, f.QY)(V) ?? (null != ef ? ef.width / ef.height : null),
        eb = n.useCallback(
            (e) => {
                let t = crypto.randomUUID(),
                    l = {
                        id: t,
                        type: f.Me.IMAGE,
                        ...eC(),
                        data: {
                            ...e,
                            position: { ...f._S },
                            widthFraction: null != ej ? (0, f.Qw)(e.naturalWidth / e.naturalHeight, ej) : f.YK,
                            rotationDeg: f.ad,
                            shadow: f.xy,
                            shadowColor: f.pk,
                        },
                    };
                return (ev((e) => [...e, l]), G(h.Y.NONE), t);
            },
            [eC, G, ej],
        ),
        ew = n.useCallback((e) => {
            ev((t) => t.filter((t) => t.id !== e));
        }, []),
        eE = n.useCallback((e, t, l) => {
            ev((a) => a.map((a) => (a.id === e ? { ...a, startSec: t, endSec: l } : a)));
        }, []),
        eN = n.useCallback((e, t) => {
            ev((l) => l.map((l) => (l.id === e && l.type === f.Me.TEXT ? { ...l, data: t(l.data) } : l)));
        }, []),
        ek = n.useCallback((e, t) => {
            ev((l) => l.map((l) => (l.id === e && l.type === f.Me.IMAGE ? { ...l, data: t(l.data) } : l)));
        }, []),
        eA = n.useCallback(
            () => ({
                ...k,
                name: U,
                tracks: eg.current,
                editMetadata: {
                    start: B,
                    end: K,
                    applicationAudio: $,
                    voiceAudio: z,
                    soundboardAudio: H,
                    crop: { preset: V },
                },
            }),
            [k, U, B, K, $, z, H, V],
        ),
        eI = n.useCallback((e) => {
            ((F.current = e), ea(e.videoElement));
        }, []),
        eL = n.useCallback((e, t, l, a) => {
            (ei(e), ec(t), er(l), eh(() => a));
        }, []),
        eM = n.useCallback(() => {
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
                        eM();
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
        }, [t, eL, ep, eM]),
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
                isScreenshot: L,
                editOnly: I,
                pendingEdits: {
                    name: U,
                    editMetadata: {
                        start: B,
                        end: K,
                        voiceAudio: z,
                        applicationAudio: $,
                        soundboardAudio: H,
                        crop: { preset: V },
                    },
                },
            },
            eg,
        ),
        n.useEffect(() => {
            Z > 0 && K <= 0 && M <= 0 && O((e) => ({ ...e, cropEnd: Z }));
        }, [Z, K, M]));
    let eR = n.useMemo(() => K - B, [B, K]),
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
            setCrop: e_,
        } = ((w = n.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, K - 1);
                (O((e) => ({ ...e, cropStart: t })), F?.current?.seek(t));
            },
            [K, O, F],
        )),
        {
            setCropStart: w,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, B + 1, Z);
                    (O((e) => ({ ...e, cropEnd: t })), F?.current?.seek(t));
                },
                [B, Z, O, F],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    O((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [O],
            ),
        }),
        {
            play: eO,
            pause: eP,
            seek: eG,
        } = ((E = n.useCallback(() => {
            F?.current?.play();
        }, [F])),
        {
            play: E,
            pause: n.useCallback(() => {
                F?.current?.pause();
            }, [F]),
            seek: n.useCallback(
                (e) => {
                    F?.current?.seek(e);
                },
                [F],
            ),
        });
    ((0, s.A)(() => {
        let e = F.current?.videoElement;
        if (null == e || !et.current) return;
        let t = e.currentTime;
        (X.current !== t && ((X.current = t), ee.current.forEach((e) => e.onTimeUpdate?.(t))),
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
                    el.duration > 0 && W(el.duration),
                    el.readyState >= 1 && (Q(!0), F?.current?.seek(D)),
                    Y(!el.paused),
                    () => {
                        (el.removeEventListener("play", e),
                            el.removeEventListener("pause", t),
                            el.removeEventListener("durationchange", l),
                            el.removeEventListener("loadedmetadata", a),
                            el.removeEventListener("seeked", n));
                    }
                );
            function e() {
                (Y(!0), ee.current.forEach((e) => e.onPlay?.()));
            }
            function t() {
                (Y(!1), ee.current.forEach((e) => e.onPause?.()));
            }
            function l() {
                null != el && W(el.duration);
            }
            function a() {
                null != el && (Q(!0), W(el.duration), F?.current?.seek(D));
            }
            function n() {
                et.current = !0;
            }
        }, [el, D, F, ee, Y, Q, W, et]));
    let eU = n.useCallback((e) => {
            O((t) => ({ ...t, clipName: e }));
        }, []),
        eB = n.useCallback((e) => {
            O((t) => ({ ...t, cropPreset: e }));
        }, []),
        eK = n.useCallback((e) => {
            O((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        ez = n.useCallback((e) => {
            O((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        e$ = n.useCallback((e) => {
            O((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eH = n.useMemo(
            () =>
                function () {
                    let [e, t] = n.useState(X.current);
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
            [X, ee],
        ),
        eV = n.useMemo(
            () => ({
                useCurrentTime: eH,
                duration: Z,
                isPlaying: q,
                isLoaded: J,
                cropStart: B,
                cropEnd: K,
                cropDuration: eR,
                setCropStart: eD,
                setCropEnd: eS,
                setCrop: e_,
                cropPreset: V,
                setCropPreset: eB,
                activeTool: P,
                setActiveTool: G,
                play: eO,
                pause: eP,
                seek: eG,
                subscribe: eT,
                setVideoPlayerRef: eI,
                videoPlayerRef: F,
                videoURL: en,
                audioTracks: eo,
                hasError: eu,
                applicationAudioEnabled: $,
                setApplicationAudioEnabled: eK,
                voiceAudioEnabled: z,
                setVoiceAudioEnabled: ez,
                soundboardAudioEnabled: H,
                setSoundboardAudioEnabled: e$,
                getEditedClip: eA,
                tracks: ex,
                addTextTrack: ey,
                addImageTrack: eb,
                removeTrack: ew,
                updateTrackRange: eE,
                updateTextTrackData: eN,
                updateImageTrackData: ek,
                clipName: U,
                setClipName: eU,
                audioURL: es,
                clip: k,
                editOnly: I,
                generateThumbnails: em,
                videoDimensions: ef,
            }),
            [
                I,
                eH,
                Z,
                q,
                J,
                B,
                K,
                eR,
                eD,
                eS,
                e_,
                V,
                eB,
                P,
                G,
                eO,
                eP,
                eG,
                es,
                eT,
                eI,
                en,
                eo,
                eu,
                $,
                eK,
                z,
                ez,
                H,
                e$,
                eA,
                ex,
                ey,
                eb,
                ew,
                eE,
                eN,
                ek,
                U,
                eU,
                k,
                em,
                ef,
            ],
        );
    return (0, a.jsx)(g.Provider, { value: eV, children: N });
}
function y() {
    let e = n.useContext(g);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
