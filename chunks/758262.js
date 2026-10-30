(l.d(t, { T: () => N, p: () => C }), l(323874), l(14289), l(35956), l(321073));
var a = l(477900),
    n = l(582128),
    i = l(435558),
    r = l(194498),
    s = l(77729),
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
    f = l(367974);
async function h(e, t, l, a, n) {
    let i = document.createElement("video");
    ((i.muted = !0), (i.preload = "auto"), (i.src = e));
    let r = [];
    try {
        for (let e of (await p(i, "loadeddata"), t)) {
            if (n()) break;
            ((i.currentTime = e),
                await p(i, "seeked"),
                r.push(await createImageBitmap(i, { resizeWidth: l, resizeHeight: a, resizeQuality: "low" })));
        }
    } catch (e) {
        for (let e of r) e.close();
        throw e;
    } finally {
        (0, f.A)(i);
    }
    return r;
}
function p(e, t) {
    return new Promise((l, a) => {
        function n() {
            (e.removeEventListener("error", i), l());
        }
        function i() {
            (e.removeEventListener(t, n),
                a(Error(`video element error while waiting for ${t}: ${e.error?.message ?? "unknown"}`)));
        }
        (e.addEventListener(t, n, { once: !0 }), e.addEventListener("error", i, { once: !0 }));
    });
}
var x = l(635793),
    v = l(696016),
    g = l(185973),
    b = l(105292);
let j = (e, t, l, a) => (a([]), () => {}),
    y = n.createContext(null);
function C(e) {
    var t;
    let f,
        p,
        C,
        N,
        w,
        E,
        { children: k, clip: A, modalContainerRef: L, editOnly: R = !1 } = e,
        T = A.type === v.nQ.SCREENSHOT,
        {
            initialDuration: I,
            initialCropStart: M,
            initialCropEnd: D,
            initialCurrentTime: S,
        } = ((f = A.length / 1e3),
        (p = A.editMetadata?.start ?? 0),
        (C = A.editMetadata?.end ?? 0),
        (N = 0 !== p || (0 !== C && C !== f)),
        {
            initialDuration: f,
            initialCropStart: p,
            initialCropEnd: C,
            isCropped: N,
            initialCurrentTime: N ? p : f / 2,
        }),
        O = n.useMemo(
            () =>
                null == s.A.clips.getClipProtocolURLFromPath ? null : s.A.clips.getClipProtocolURLFromPath(A.filepath),
            [A.filepath],
        ),
        [P, _] = n.useState({
            clipName: A.name,
            cropStart: M,
            cropEnd: 0 === D ? I : D,
            voiceAudioEnabled: A.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: A.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: A.editMetadata?.soundboardAudio ?? !0,
            cropPreset: A.editMetadata?.crop?.preset ?? v.yz.ORIGINAL,
        }),
        [z, $] = n.useState(x.Y.NONE),
        {
            clipName: U,
            cropStart: G,
            cropEnd: B,
            voiceAudioEnabled: H,
            applicationAudioEnabled: X,
            soundboardAudioEnabled: F,
            cropPreset: W,
        } = P,
        V = n.useRef(null),
        K = n.useRef(S),
        [Y, Z] = n.useState(I),
        [Q, q] = n.useState(!1),
        [J, ee] = n.useState(!1),
        et = n.useRef(new Set()),
        el = n.useRef(!1),
        [ea, en] = n.useState(null),
        [ei, er] = n.useState(null),
        [es, eo] = n.useState(null),
        [ec, eu] = n.useState([]),
        [ed, em] = n.useState(!1),
        [ef, eh] = n.useState(() => j),
        [ep, ex] = n.useState(null),
        [ev, eg] = n.useState(() => A.tracks ?? []),
        eb = n.useRef(ev);
    eb.current = ev;
    let ej = n.useCallback(() => {
            let e = V.current?.videoElement?.currentTime ?? G,
                t = (0, i.clamp)(e, G, B - v.Cx);
            return { startSec: t, endSec: Math.min(t + v.tS, B) };
        }, [G, B, V]),
        ey = n.useCallback(() => {
            let e = crypto.randomUUID(),
                t = {
                    id: e,
                    type: v.Me.TEXT,
                    ...ej(),
                    data: {
                        text: b.intl.string(g.default.v2jEIc),
                        style: { ...v.QK },
                        position: { ...v._S },
                        rotationDeg: v.ad,
                    },
                };
            return (eg((e) => [...e, t]), $(x.Y.NONE), e);
        }, [ej, $]),
        eC = (0, v.QY)(W) ?? (null != ep ? ep.width / ep.height : null),
        eN = n.useCallback(
            (e) => {
                let t = crypto.randomUUID(),
                    l = {
                        id: t,
                        type: v.Me.IMAGE,
                        ...ej(),
                        data: {
                            ...e,
                            position: { ...v._S },
                            widthFraction: null != eC ? (0, v.Qw)(e.naturalWidth / e.naturalHeight, eC) : v.YK,
                            rotationDeg: v.ad,
                            shadow: v.xy,
                            shadowColor: v.pk,
                        },
                    };
                return (eg((e) => [...e, l]), $(x.Y.NONE), t);
            },
            [ej, $, eC],
        ),
        ew = n.useCallback((e) => {
            eg((t) => t.filter((t) => t.id !== e));
        }, []),
        eE = n.useCallback((e, t, l) => {
            eg((a) => a.map((a) => (a.id === e ? { ...a, startSec: t, endSec: l } : a)));
        }, []),
        ek = n.useCallback((e, t) => {
            eg((l) => l.map((l) => (l.id === e && l.type === v.Me.TEXT ? { ...l, data: t(l.data) } : l)));
        }, []),
        eA = n.useCallback((e, t) => {
            eg((l) => l.map((l) => (l.id === e && l.type === v.Me.IMAGE ? { ...l, data: t(l.data) } : l)));
        }, []),
        eL = n.useCallback(
            () => ({
                ...A,
                name: U,
                tracks: eb.current,
                editMetadata: {
                    start: G,
                    end: B,
                    applicationAudio: X,
                    voiceAudio: H,
                    soundboardAudio: F,
                    crop: { preset: W },
                },
            }),
            [A, U, G, B, X, H, F, W],
        ),
        eR = n.useCallback((e) => {
            ((V.current = e), en(e.videoElement));
        }, []),
        eT = n.useCallback((e, t, l, a) => {
            (er(e), eu(t), eo(l), eh(() => a));
        }, []),
        eI = n.useCallback(() => {
            em(!0);
        }, []);
    ((t = A.filepath),
        n.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("380202"), l.b)),
                a = new Worker(new URL("/assets/" + l.u("35886"), l.b)),
                n = new Map(),
                i = 0,
                r = null,
                o = !1;
            async function c(e, t, l) {
                let a = [];
                try {
                    a = await h(l, t.timestamps, t.previewWidth, t.previewHeight, () => !n.has(e));
                } catch (e) {
                    v.nx.warn("Timeline thumbnail video element fallback error:", e);
                }
                let i = n.get(e);
                if ((n.delete(e), null == i)) {
                    for (let e of a) e.close();
                    return;
                }
                i.onComplete(a);
            }
            let u = (e, t, l, s) => {
                let u = ++i,
                    d = { timestamps: e, previewWidth: t, previewHeight: l, onComplete: s };
                return (
                    n.set(u, d),
                    o && null != r
                        ? c(u, d, r)
                        : a.postMessage({
                              type: "extract",
                              requestId: u,
                              timestamps: e,
                              previewWidth: t,
                              previewHeight: l,
                          }),
                    () => {
                        n.delete(u);
                    }
                );
            };
            return (
                (async function () {
                    let l;
                    try {
                        l = await s.A.clips.loadClip(t);
                    } catch {
                        eI();
                        return;
                    }
                    ((e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: n } = e.data,
                            i = URL.createObjectURL(new Blob([t], { type: "video/mp4" }));
                        r = i;
                        let s = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            s.push({ arrayBuffer: e.buffer, url: t, trackName: e.trackName });
                        }
                        (a.postMessage({ type: "init", videoBuffer: t }, [t]),
                            eT(i, s, URL.createObjectURL(new Blob([n], { type: "audio/mp4" })), u));
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
                                    e.onComplete(t.bitmaps);
                                    break;
                                }
                                case "error": {
                                    if (
                                        (v.nx.warn(`Timeline thumbnail extraction error: ${t.message}`),
                                        null == t.requestId)
                                    )
                                        break;
                                    let e = n.get(t.requestId);
                                    if (null == e) break;
                                    if (null == r) {
                                        (n.delete(t.requestId), e.onComplete([]));
                                        break;
                                    }
                                    (o ||
                                        (v.nx.info("Timeline thumbnails: falling back to video element extraction"),
                                        (o = !0)),
                                        c(t.requestId, e, r));
                                }
                            }
                        }),
                        e.postMessage({ videoBuffer: l.data.buffer }, [l.data.buffer]));
                })(),
                () => {
                    (e.terminate(), a.terminate(), n.clear());
                }
            );
        }, [t, eT, ex, eI]),
        n.useEffect(
            () => () => {
                null != ei && URL.revokeObjectURL(ei);
            },
            [ei],
        ),
        n.useEffect(
            () => () => {
                for (let e of ec) URL.revokeObjectURL(e.url);
            },
            [ec],
        ),
        n.useEffect(
            () => () => {
                null != es && URL.revokeObjectURL(es);
            },
            [es],
        ),
        (function (e, t) {
            let { clipId: l, clipProtocolVideoURL: a, isScreenshot: i, editOnly: r, pendingEdits: s } = e,
                f = n.useRef(s);
            ((f.current = s),
                n.useEffect(() => {
                    async function e() {
                        let e = {},
                            n = f.current;
                        if (!i && null != a)
                            try {
                                e = { thumbnail: await (0, m.m)(a, n.editMetadata.start) };
                            } catch (e) {
                                v.nx.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                            }
                        await (0, o.Yy)(l, { ...n, tracks: t.current, ...e }, !0);
                    }
                    return () => {
                        !r && (u.set(l, e), c.has(l) || d(l));
                    };
                }, [l, a, i, f, r, t]));
        })(
            {
                clipId: A.id,
                clipProtocolVideoURL: O,
                isScreenshot: T,
                editOnly: R,
                pendingEdits: {
                    name: U,
                    editMetadata: {
                        start: G,
                        end: B,
                        voiceAudio: H,
                        applicationAudio: X,
                        soundboardAudio: F,
                        crop: { preset: W },
                    },
                },
            },
            eb,
        ),
        n.useEffect(() => {
            Y > 0 && B <= 0 && I <= 0 && _((e) => ({ ...e, cropEnd: Y }));
        }, [Y, B, I]));
    let eM = n.useMemo(() => B - G, [G, B]),
        eD = n.useCallback(
            (e) => (
                et.current.add(e),
                () => {
                    et.current.delete(e);
                }
            ),
            [et],
        ),
        {
            setCropStart: eS,
            setCropEnd: eO,
            setCrop: eP,
        } = ((w = n.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, B - 1);
                (_((e) => ({ ...e, cropStart: t })), V?.current?.seek(t));
            },
            [B, _, V],
        )),
        {
            setCropStart: w,
            setCropEnd: n.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, G + 1, Y);
                    (_((e) => ({ ...e, cropEnd: t })), V?.current?.seek(t));
                },
                [G, Y, _, V],
            ),
            setCrop: n.useCallback(
                (e, t) => {
                    _((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [_],
            ),
        }),
        {
            play: e_,
            pause: ez,
            seek: e$,
        } = ((E = n.useCallback(() => {
            V?.current?.play();
        }, [V])),
        {
            play: E,
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
    ((0, r.A)(() => {
        let e = V.current?.videoElement;
        if (null == e || !el.current) return;
        let t = e.currentTime;
        (K.current !== t && ((K.current = t), et.current.forEach((e) => e.onTimeUpdate?.(t))),
            L.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`));
    }),
        n.useEffect(() => {
            if (null != ea)
                return (
                    ea.addEventListener("play", e),
                    ea.addEventListener("pause", t),
                    ea.addEventListener("durationchange", l),
                    ea.addEventListener("loadedmetadata", a),
                    ea.addEventListener("seeked", n),
                    ea.duration > 0 && Z(ea.duration),
                    ea.readyState >= 1 && (ee(!0), V?.current?.seek(S)),
                    q(!ea.paused),
                    () => {
                        (ea.removeEventListener("play", e),
                            ea.removeEventListener("pause", t),
                            ea.removeEventListener("durationchange", l),
                            ea.removeEventListener("loadedmetadata", a),
                            ea.removeEventListener("seeked", n));
                    }
                );
            function e() {
                (q(!0), et.current.forEach((e) => e.onPlay?.()));
            }
            function t() {
                (q(!1), et.current.forEach((e) => e.onPause?.()));
            }
            function l() {
                null != ea && Z(ea.duration);
            }
            function a() {
                null != ea && (ee(!0), Z(ea.duration), V?.current?.seek(S));
            }
            function n() {
                el.current = !0;
            }
        }, [ea, S, V, et, q, ee, Z, el]));
    let eU = n.useCallback((e) => {
            _((t) => ({ ...t, clipName: e }));
        }, []),
        eG = n.useCallback((e) => {
            _((t) => ({ ...t, cropPreset: e }));
        }, []),
        eB = n.useCallback((e) => {
            _((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        eH = n.useCallback((e) => {
            _((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eX = n.useCallback((e) => {
            _((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        eF = n.useMemo(
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
                                et.current.add(e),
                                () => {
                                    et.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [K, et],
        ),
        eW = n.useMemo(
            () => ({
                useCurrentTime: eF,
                duration: Y,
                isPlaying: Q,
                isLoaded: J,
                cropStart: G,
                cropEnd: B,
                cropDuration: eM,
                setCropStart: eS,
                setCropEnd: eO,
                setCrop: eP,
                cropPreset: W,
                setCropPreset: eG,
                activeTool: z,
                setActiveTool: $,
                play: e_,
                pause: ez,
                seek: e$,
                subscribe: eD,
                setVideoPlayerRef: eR,
                videoPlayerRef: V,
                videoURL: ei,
                audioTracks: ec,
                hasError: ed,
                applicationAudioEnabled: X,
                setApplicationAudioEnabled: eB,
                voiceAudioEnabled: H,
                setVoiceAudioEnabled: eH,
                soundboardAudioEnabled: F,
                setSoundboardAudioEnabled: eX,
                getEditedClip: eL,
                tracks: ev,
                addTextTrack: ey,
                addImageTrack: eN,
                removeTrack: ew,
                updateTrackRange: eE,
                updateTextTrackData: ek,
                updateImageTrackData: eA,
                clipName: U,
                setClipName: eU,
                audioURL: es,
                clip: A,
                editOnly: R,
                generateThumbnails: ef,
                videoDimensions: ep,
            }),
            [
                R,
                eF,
                Y,
                Q,
                J,
                G,
                B,
                eM,
                eS,
                eO,
                eP,
                W,
                eG,
                z,
                $,
                e_,
                ez,
                e$,
                es,
                eD,
                eR,
                ei,
                ec,
                ed,
                X,
                eB,
                H,
                eH,
                F,
                eX,
                eL,
                ev,
                ey,
                eN,
                ew,
                eE,
                ek,
                eA,
                U,
                eU,
                A,
                ef,
                ep,
            ],
        );
    return (0, a.jsx)(y.Provider, { value: eW, children: k });
}
function N() {
    let e = n.useContext(y);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
