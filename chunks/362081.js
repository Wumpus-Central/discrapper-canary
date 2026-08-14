l.d(t, { T: () => b, p: () => j }), l(323874), l(14289), l(35956), l(321073);
var n = l(477900),
    a = l(582128),
    i = l(435558),
    s = l(972117),
    r = l(77729),
    c = l(539572);
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
    h = l(635793),
    f = l(696016),
    x = l(16590),
    v = l(375708);
let p = (e, t, l, n) => (n([]), () => {}),
    g = a.createContext(null);
function j(e) {
    var t;
    let j,
        b,
        C,
        y,
        N,
        E,
        { children: w, clip: k, modalContainerRef: A, editOnly: R = !1 } = e,
        L = k.type === f.nQ.SCREENSHOT,
        {
            initialDuration: T,
            initialCropStart: I,
            initialCropEnd: M,
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
        S = a.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(k.filepath),
            [k.filepath],
        ),
        [O, P] = a.useState({
            clipName: k.name,
            cropStart: I,
            cropEnd: 0 === M ? T : M,
            voiceAudioEnabled: k.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: k.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: k.editMetadata?.soundboardAudio ?? !0,
            cropPreset: k.editMetadata?.crop?.preset ?? f.yz.ORIGINAL,
        }),
        [_, z] = a.useState(h.Y.NONE),
        {
            clipName: U,
            cropStart: $,
            cropEnd: G,
            voiceAudioEnabled: B,
            applicationAudioEnabled: H,
            soundboardAudioEnabled: V,
            cropPreset: K,
        } = O,
        F = a.useRef(null),
        Z = a.useRef(D),
        [W, X] = a.useState(T),
        [Y, J] = a.useState(!1),
        [Q, q] = a.useState(!1),
        ee = a.useRef(new Set()),
        et = a.useRef(!1),
        [el, en] = a.useState(null),
        [ea, ei] = a.useState(null),
        [es, er] = a.useState(null),
        [ec, eo] = a.useState([]),
        [eu, ed] = a.useState(!1),
        [em, eh] = a.useState(() => p),
        [ef, ex] = a.useState(null),
        [ev, ep] = a.useState(() => k.tracks ?? []),
        eg = a.useRef(ev);
    eg.current = ev;
    let ej = a.useCallback(() => {
            let e = crypto.randomUUID(),
                t = F.current?.videoElement?.currentTime ?? $,
                l = (0, i.clamp)(t, $, G - f.Cx),
                n = Math.min(l + f.tS, G),
                a = {
                    id: e,
                    type: f.Me.TEXT,
                    startSec: l,
                    endSec: n,
                    data: { text: v.intl.string(x.default.v2jEIc), style: { ...f.QK }, position: { ...f._S } },
                };
            return ep((e) => [...e, a]), z(h.Y.NONE), e;
        }, [$, G, z, F]),
        eb = a.useCallback((e) => {
            ep((t) => t.filter((t) => t.id !== e));
        }, []),
        eC = a.useCallback((e, t, l) => {
            ep((n) => n.map((n) => (n.id === e ? { ...n, startSec: t, endSec: l } : n)));
        }, []),
        ey = a.useCallback((e, t) => {
            ep((l) => l.map((l) => (l.id === e ? { ...l, data: t(l.data) } : l)));
        }, []),
        eN = a.useCallback(
            () => ({
                ...k,
                name: U,
                tracks: eg.current,
                editMetadata: {
                    start: $,
                    end: G,
                    applicationAudio: H,
                    voiceAudio: B,
                    soundboardAudio: V,
                    crop: { preset: K },
                },
            }),
            [k, U, $, G, H, B, V, K],
        ),
        eE = a.useCallback((e) => {
            (F.current = e), en(e.videoElement);
        }, []),
        ew = a.useCallback((e, t, l, n) => {
            ei(e), eo(t), er(l), eh(() => n);
        }, []),
        ek = a.useCallback(() => {
            ed(!0);
        }, []);
    (t = k.filepath),
        a.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("380202"), l.b)),
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
                        ek();
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
                                    ex({ width: t.width, height: t.height });
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
                                        (f.nx.warn(`Timeline thumbnail extraction error: ${t.message}`),
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
        }, [t, ew, ex, ek]),
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
        (function (e, t) {
            let { clipId: l, clipProtocolVideoURL: n, isScreenshot: i, editOnly: s, pendingEdits: r } = e,
                h = a.useRef(r);
            (h.current = r),
                a.useEffect(() => {
                    async function e() {
                        let e = {},
                            a = h.current;
                        if (!i && null != n)
                            try {
                                e = { thumbnail: await (0, m.m)(n, a.editMetadata.start) };
                            } catch (e) {
                                f.nx.warn(`Clip thumbnail generation failed; persisting metadata without it: ${e}`);
                            }
                        await (0, c.Yy)(l, { ...a, tracks: t.current, ...e }, !0);
                    }
                    return () => {
                        !s && (u.set(l, e), o.has(l) || d(l));
                    };
                }, [l, n, i, h, s, t]);
        })(
            {
                clipId: k.id,
                clipProtocolVideoURL: S,
                isScreenshot: L,
                editOnly: R,
                pendingEdits: {
                    name: U,
                    editMetadata: {
                        start: $,
                        end: G,
                        voiceAudio: B,
                        applicationAudio: H,
                        soundboardAudio: V,
                        crop: { preset: K },
                    },
                },
            },
            eg,
        ),
        a.useEffect(() => {
            W > 0 && G <= 0 && T <= 0 && P((e) => ({ ...e, cropEnd: W }));
        }, [W, G, T]);
    let eA = a.useMemo(() => G - $, [$, G]),
        eR = a.useCallback(
            (e) => (
                ee.current.add(e),
                () => {
                    ee.current.delete(e);
                }
            ),
            [ee],
        ),
        {
            setCropStart: eL,
            setCropEnd: eT,
            setCrop: eI,
        } = ((N = a.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, G - 1);
                P((e) => ({ ...e, cropStart: t })), F?.current?.seek(t);
            },
            [G, P, F],
        )),
        {
            setCropStart: N,
            setCropEnd: a.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, $ + 1, W);
                    P((e) => ({ ...e, cropEnd: t })), F?.current?.seek(t);
                },
                [$, W, P, F],
            ),
            setCrop: a.useCallback(
                (e, t) => {
                    P((l) => ({ ...l, cropStart: e, cropEnd: t }));
                },
                [P],
            ),
        }),
        {
            play: eM,
            pause: eD,
            seek: eS,
        } = ((E = a.useCallback(() => {
            F?.current?.play();
        }, [F])),
        {
            play: E,
            pause: a.useCallback(() => {
                F?.current?.pause();
            }, [F]),
            seek: a.useCallback(
                (e) => {
                    F?.current?.seek(e);
                },
                [F],
            ),
        });
    (0, s.A)(() => {
        let e = F.current?.videoElement;
        if (null == e || !et.current) return;
        let t = e.currentTime;
        Z.current !== t && ((Z.current = t), ee.current.forEach((e) => e.onTimeUpdate?.(t))),
            A.current?.style.setProperty("--custom-video-progress", `${(t / e.duration) * 100}%`);
    }),
        a.useEffect(() => {
            if (null != el)
                return (
                    el.addEventListener("play", e),
                    el.addEventListener("pause", t),
                    el.addEventListener("durationchange", l),
                    el.addEventListener("loadedmetadata", n),
                    el.addEventListener("seeked", a),
                    el.duration > 0 && X(el.duration),
                    el.readyState >= 1 && (q(!0), F?.current?.seek(D)),
                    J(!el.paused),
                    () => {
                        el.removeEventListener("play", e),
                            el.removeEventListener("pause", t),
                            el.removeEventListener("durationchange", l),
                            el.removeEventListener("loadedmetadata", n),
                            el.removeEventListener("seeked", a);
                    }
                );
            function e() {
                J(!0), ee.current.forEach((e) => e.onPlay?.());
            }
            function t() {
                J(!1), ee.current.forEach((e) => e.onPause?.());
            }
            function l() {
                null != el && X(el.duration);
            }
            function n() {
                null != el && (q(!0), X(el.duration), F?.current?.seek(D));
            }
            function a() {
                et.current = !0;
            }
        }, [el, D, F, ee, J, q, X, et]);
    let eO = a.useCallback((e) => {
            P((t) => ({ ...t, clipName: e }));
        }, []),
        eP = a.useCallback((e) => {
            P((t) => ({ ...t, cropPreset: e }));
        }, []),
        e_ = a.useCallback((e) => {
            P((t) => ({ ...t, applicationAudioEnabled: e }));
        }, []),
        ez = a.useCallback((e) => {
            P((t) => ({ ...t, voiceAudioEnabled: e }));
        }, []),
        eU = a.useCallback((e) => {
            P((t) => ({ ...t, soundboardAudioEnabled: e }));
        }, []),
        e$ = a.useMemo(
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
                                ee.current.add(e),
                                () => {
                                    ee.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [Z, ee],
        ),
        eG = a.useMemo(
            () => ({
                useCurrentTime: e$,
                duration: W,
                isPlaying: Y,
                isLoaded: Q,
                cropStart: $,
                cropEnd: G,
                cropDuration: eA,
                setCropStart: eL,
                setCropEnd: eT,
                setCrop: eI,
                cropPreset: K,
                setCropPreset: eP,
                activeTool: _,
                setActiveTool: z,
                play: eM,
                pause: eD,
                seek: eS,
                subscribe: eR,
                setVideoPlayerRef: eE,
                videoPlayerRef: F,
                videoURL: ea,
                audioTracks: ec,
                hasError: eu,
                applicationAudioEnabled: H,
                setApplicationAudioEnabled: e_,
                voiceAudioEnabled: B,
                setVoiceAudioEnabled: ez,
                soundboardAudioEnabled: V,
                setSoundboardAudioEnabled: eU,
                getEditedClip: eN,
                tracks: ev,
                addTextTrack: ej,
                removeTrack: eb,
                updateTrackRange: eC,
                updateTextTrackData: ey,
                clipName: U,
                setClipName: eO,
                audioURL: es,
                clip: k,
                editOnly: R,
                generateThumbnails: em,
                videoDimensions: ef,
            }),
            [
                R,
                e$,
                W,
                Y,
                Q,
                $,
                G,
                eA,
                eL,
                eT,
                eI,
                K,
                eP,
                _,
                z,
                eM,
                eD,
                eS,
                es,
                eR,
                eE,
                ea,
                ec,
                eu,
                H,
                e_,
                B,
                ez,
                V,
                eU,
                eN,
                ev,
                ej,
                eb,
                eC,
                ey,
                U,
                eO,
                k,
                em,
                ef,
            ],
        );
    return (0, n.jsx)(g.Provider, { value: eG, children: w });
}
function b() {
    let e = a.useContext(g);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
