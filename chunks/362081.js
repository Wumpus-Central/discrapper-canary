l.d(t, { T: () => b, p: () => j }), l(323874), l(14289), l(35956), l(321073);
var n = l(477900),
    a = l(582128),
    i = l(435558),
    s = l(194498),
    r = l(77729),
    o = l(539572);
let c = new Map(),
    u = new Map();
async function d(e) {
    let t = u.get(e);
    for (; null != t; ) {
        u.delete(e);
        let l = t().catch(() => {});
        c.set(e, l), await l, c.delete(e), (t = u.get(e));
    }
}
var m = l(956050),
    h = l(635793),
    f = l(696016),
    x = l(711918),
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
        { children: w, clip: k, modalContainerRef: A, editOnly: L = !1 } = e,
        R = k.type === f.nQ.SCREENSHOT,
        {
            initialDuration: I,
            initialCropStart: T,
            initialCropEnd: M,
            initialCurrentTime: S,
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
        D = a.useMemo(
            () =>
                null == r.A.clips.getClipProtocolURLFromPath ? null : r.A.clips.getClipProtocolURLFromPath(k.filepath),
            [k.filepath],
        ),
        [O, P] = a.useState({
            clipName: k.name,
            cropStart: T,
            cropEnd: 0 === M ? I : M,
            voiceAudioEnabled: k.editMetadata?.voiceAudio ?? !0,
            applicationAudioEnabled: k.editMetadata?.applicationAudio ?? !0,
            soundboardAudioEnabled: k.editMetadata?.soundboardAudio ?? !0,
            cropPreset: k.editMetadata?.crop?.preset ?? f.yz.ORIGINAL,
        }),
        [_, z] = a.useState(h.Y.NONE),
        {
            clipName: U,
            cropStart: $,
            cropEnd: B,
            voiceAudioEnabled: G,
            applicationAudioEnabled: H,
            soundboardAudioEnabled: V,
            cropPreset: K,
        } = O,
        F = a.useRef(null),
        W = a.useRef(S),
        [X, Z] = a.useState(I),
        [Y, J] = a.useState(!1),
        [Q, q] = a.useState(!1),
        ee = a.useRef(new Set()),
        et = a.useRef(!1),
        [el, en] = a.useState(null),
        [ea, ei] = a.useState(null),
        [es, er] = a.useState(null),
        [eo, ec] = a.useState([]),
        [eu, ed] = a.useState(!1),
        [em, eh] = a.useState(() => p),
        [ef, ex] = a.useState(null),
        [ev, ep] = a.useState(() => k.tracks ?? []),
        eg = a.useRef(ev);
    eg.current = ev;
    let ej = a.useCallback(() => {
            let e = crypto.randomUUID(),
                t = F.current?.videoElement?.currentTime ?? $,
                l = (0, i.clamp)(t, $, B - f.Cx),
                n = Math.min(l + f.tS, B),
                a = {
                    id: e,
                    type: f.Me.TEXT,
                    startSec: l,
                    endSec: n,
                    data: { text: v.intl.string(x.default.v2jEIc), style: { ...f.QK }, position: { ...f._S } },
                };
            return ep((e) => [...e, a]), z(h.Y.NONE), e;
        }, [$, B, z, F]),
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
                    end: B,
                    applicationAudio: H,
                    voiceAudio: G,
                    soundboardAudio: V,
                    crop: { preset: K },
                },
            }),
            [k, U, $, B, H, G, V, K],
        ),
        eE = a.useCallback((e) => {
            (F.current = e), en(e.videoElement);
        }, []),
        ew = a.useCallback((e, t, l, n) => {
            ei(e), ec(t), er(l), eh(() => n);
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
                for (let e of eo) URL.revokeObjectURL(e.url);
            },
            [eo],
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
                        await (0, o.Yy)(l, { ...a, tracks: t.current, ...e }, !0);
                    }
                    return () => {
                        !s && (u.set(l, e), c.has(l) || d(l));
                    };
                }, [l, n, i, h, s, t]);
        })(
            {
                clipId: k.id,
                clipProtocolVideoURL: D,
                isScreenshot: R,
                editOnly: L,
                pendingEdits: {
                    name: U,
                    editMetadata: {
                        start: $,
                        end: B,
                        voiceAudio: G,
                        applicationAudio: H,
                        soundboardAudio: V,
                        crop: { preset: K },
                    },
                },
            },
            eg,
        ),
        a.useEffect(() => {
            X > 0 && B <= 0 && I <= 0 && P((e) => ({ ...e, cropEnd: X }));
        }, [X, B, I]);
    let eA = a.useMemo(() => B - $, [$, B]),
        eL = a.useCallback(
            (e) => (
                ee.current.add(e),
                () => {
                    ee.current.delete(e);
                }
            ),
            [ee],
        ),
        {
            setCropStart: eR,
            setCropEnd: eI,
            setCrop: eT,
        } = ((N = a.useCallback(
            (e) => {
                let t = (0, i.clamp)(e, 0, B - 1);
                P((e) => ({ ...e, cropStart: t })), F?.current?.seek(t);
            },
            [B, P, F],
        )),
        {
            setCropStart: N,
            setCropEnd: a.useCallback(
                (e) => {
                    let t = (0, i.clamp)(e, $ + 1, X);
                    P((e) => ({ ...e, cropEnd: t })), F?.current?.seek(t);
                },
                [$, X, P, F],
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
            pause: eS,
            seek: eD,
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
        W.current !== t && ((W.current = t), ee.current.forEach((e) => e.onTimeUpdate?.(t))),
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
                    el.duration > 0 && Z(el.duration),
                    el.readyState >= 1 && (q(!0), F?.current?.seek(S)),
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
                null != el && Z(el.duration);
            }
            function n() {
                null != el && (q(!0), Z(el.duration), F?.current?.seek(S));
            }
            function a() {
                et.current = !0;
            }
        }, [el, S, F, ee, J, q, Z, et]);
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
                    let [e, t] = a.useState(W.current);
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
            [W, ee],
        ),
        eB = a.useMemo(
            () => ({
                useCurrentTime: e$,
                duration: X,
                isPlaying: Y,
                isLoaded: Q,
                cropStart: $,
                cropEnd: B,
                cropDuration: eA,
                setCropStart: eR,
                setCropEnd: eI,
                setCrop: eT,
                cropPreset: K,
                setCropPreset: eP,
                activeTool: _,
                setActiveTool: z,
                play: eM,
                pause: eS,
                seek: eD,
                subscribe: eL,
                setVideoPlayerRef: eE,
                videoPlayerRef: F,
                videoURL: ea,
                audioTracks: eo,
                hasError: eu,
                applicationAudioEnabled: H,
                setApplicationAudioEnabled: e_,
                voiceAudioEnabled: G,
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
                editOnly: L,
                generateThumbnails: em,
                videoDimensions: ef,
            }),
            [
                L,
                e$,
                X,
                Y,
                Q,
                $,
                B,
                eA,
                eR,
                eI,
                eT,
                K,
                eP,
                _,
                z,
                eM,
                eS,
                eD,
                es,
                eL,
                eE,
                ea,
                eo,
                eu,
                H,
                e_,
                G,
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
    return (0, n.jsx)(g.Provider, { value: eB, children: w });
}
function b() {
    let e = a.useContext(g);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
