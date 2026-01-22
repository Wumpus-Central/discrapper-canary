l.d(t, {
    T: () => v,
    p: () => p,
}),
    l(896048),
    l(693327),
    l(554719),
    l(680155),
    l(323874),
    l(14289),
    l(35956),
    l(321073),
    l(65821);
var n = l(627968),
    a = l(64700),
    r = l(735438),
    i = l(194498),
    s = l(77729),
    o = l(372684),
    u = l(399925),
    c = l(956050);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
let h = a.createContext(null);
function p(e) {
    var t, p, v, f, b, g, j, x, y, C, k, N, E, S;
    let w,
        O,
        A,
        I,
        T,
        L,
        R,
        { children: M, clip: P } = e,
        U = P.type === o.nQ.SCREENSHOT,
        {
            initialDuration: D,
            initialCropStart: z,
            initialCropEnd: G,
            initialCurrentTime: B,
        } = ((w = P.length / 1000),
        (O = null != (x = null == (C = P.editMetadata) ? void 0 : C.start) ? x : 0),
        (A = null != (y = null == (k = P.editMetadata) ? void 0 : k.end) ? y : 0),
        (I = 0 !== O || (0 !== A && A !== w)),
        {
            initialDuration: w,
            initialCropStart: O,
            initialCropEnd: A,
            isCropped: I,
            initialCurrentTime: I ? O : w / 2,
        }),
        _ = a.useMemo(
            () =>
                null == s.A.clips.getClipProtocolURLFromPath ? null : s.A.clips.getClipProtocolURLFromPath(P.filepath),
            [P.filepath],
        ),
        [K, V] = a.useState({
            clipName: P.name,
            isTemporary: null != (t = P.isTemporary) && t,
            cropStart: z,
            cropEnd: 0 === G ? D : G,
            voiceAudioEnabled: null == (p = null == (b = P.editMetadata) ? void 0 : b.voiceAudio) || p,
            applicationAudioEnabled: null == (v = null == (g = P.editMetadata) ? void 0 : g.applicationAudio) || v,
            soundboardAudioEnabled: null == (f = null == (j = P.editMetadata) ? void 0 : j.soundboardAudio) || f,
        }),
        {
            clipName: F,
            isTemporary: W,
            cropStart: H,
            cropEnd: J,
            voiceAudioEnabled: X,
            applicationAudioEnabled: $,
            soundboardAudioEnabled: q,
        } = K,
        Q = a.useRef(null),
        Y = a.useRef(B),
        [Z, ee] = a.useState(D),
        [et, el] = a.useState(!1),
        [en, ea] = a.useState(!1),
        er = a.useRef(new Set()),
        ei = a.useRef(!1),
        [es, eo] = a.useState(null),
        [eu, ec] = a.useState(null),
        [ed, em] = a.useState(null),
        [eh, ep] = a.useState([]),
        [ev, ef] = a.useState(!1),
        eb = a.useCallback(
            () =>
                m(d({}, P), {
                    name: F,
                    editMetadata: {
                        start: H,
                        end: J,
                        applicationAudio: $,
                        voiceAudio: X,
                        soundboardAudio: q,
                    },
                }),
            [P, F, H, J, $, X, q],
        ),
        eg = a.useCallback((e) => {
            (Q.current = e), eo(e.videoElement);
        }, []),
        ej = a.useCallback((e, t, l) => {
            ec(e), ep(t), em(l);
        }, []),
        ex = a.useCallback(() => {
            ef(!0);
        }, []);
    (N = P.filepath),
        a.useEffect(() => {
            let e = new Worker(new URL("/assets/" + l.u("91363"), l.b));
            return (
                (async function () {
                    let t;
                    try {
                        t = await s.A.clips.loadClip(N);
                    } catch (e) {
                        ex();
                        return;
                    }
                    (e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: l, audioBuffer: n } = e.data,
                            a = URL.createObjectURL(new Blob([t], { type: "video/mp4" })),
                            r = [];
                        for (let e of l) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            r.push({
                                arrayBuffer: e.buffer,
                                url: t,
                                trackName: e.trackName,
                            });
                        }
                        ej(a, r, URL.createObjectURL(new Blob([n], { type: "audio/mp4" })));
                    }),
                        e.postMessage({ videoBuffer: t.data.buffer }, [t.data.buffer]);
                })(),
                () => {
                    e.terminate();
                }
            );
        }, [N, ej, ex]),
        a.useEffect(
            () => () => {
                null != eu && URL.revokeObjectURL(eu);
            },
            [eu],
        ),
        a.useEffect(
            () => () => {
                for (let e of eh) URL.revokeObjectURL(e.url);
            },
            [eh],
        ),
        a.useEffect(
            () => () => {
                null != ed && URL.revokeObjectURL(ed);
            },
            [ed],
        ),
        (E = P.id),
        (S = {
            name: F,
            editMetadata: {
                start: H,
                end: J,
                voiceAudio: X,
                applicationAudio: $,
                soundboardAudio: q,
            },
        }),
        ((T = a.useRef(S)).current = S),
        a.useEffect(() => {
            async function e() {
                let e = {},
                    t = T.current;
                U || null == _ || (e = { thumbnail: await (0, c.m)(_, t.editMetadata.start) }),
                    (0, u.Yy)(E, d({}, t, e));
            }
            return () => {
                e();
            };
        }, [E, _, U, T]);
    let ey = a.useMemo(() => J - H, [H, J]),
        eC = a.useCallback(
            (e) => (
                er.current.add(e),
                () => {
                    er.current.delete(e);
                }
            ),
            [er],
        ),
        {
            setCropStart: ek,
            setCropEnd: eN,
            setCrop: eE,
        } = ((L = a.useCallback(
            (e) => {
                var t;
                let l = (0, r.clamp)(e, 0, J - 1);
                V((e) => m(d({}, e), { cropStart: l })), null == Q || null == (t = Q.current) || t.seek(l);
            },
            [J, V, Q],
        )),
        {
            setCropStart: L,
            setCropEnd: a.useCallback(
                (e) => {
                    var t;
                    let l = (0, r.clamp)(e, H + 1, Z);
                    V((e) => m(d({}, e), { cropEnd: l })), null == Q || null == (t = Q.current) || t.seek(l);
                },
                [H, Z, V, Q],
            ),
            setCrop: a.useCallback(
                (e, t) => {
                    V((l) =>
                        m(d({}, l), {
                            cropStart: e,
                            cropEnd: t,
                        }),
                    );
                },
                [V],
            ),
        }),
        {
            play: eS,
            pause: ew,
            seek: eO,
        } = ((R = a.useCallback(() => {
            var e;
            null == Q || null == (e = Q.current) || e.play();
        }, [Q])),
        {
            play: R,
            pause: a.useCallback(() => {
                var e;
                null == Q || null == (e = Q.current) || e.pause();
            }, [Q]),
            seek: a.useCallback(
                (e) => {
                    var t;
                    null == Q || null == (t = Q.current) || t.seek(e);
                },
                [Q],
            ),
        });
    (0, i.A)(() => {
        var e;
        let t = null == (e = Q.current) ? void 0 : e.videoElement;
        if (null == t || !ei.current) return;
        let l = t.currentTime;
        Y.current !== l &&
            ((Y.current = l),
            er.current.forEach((e) => {
                var t;
                return null == (t = e.onTimeUpdate) ? void 0 : t.call(e, l);
            }));
    }),
        a.useEffect(() => {
            if (null == es) return;
            let e = () => {
                    el(!0),
                        er.current.forEach((e) => {
                            var t;
                            return null == (t = e.onPlay) ? void 0 : t.call(e);
                        });
                },
                t = () => {
                    el(!1),
                        er.current.forEach((e) => {
                            var t;
                            return null == (t = e.onPause) ? void 0 : t.call(e);
                        });
                },
                l = () => {
                    ee(es.duration);
                },
                n = () => {
                    var e;
                    ea(!0), ee(es.duration), null == Q || null == (e = Q.current) || e.seek(B);
                },
                a = () => {
                    ei.current = !0;
                };
            if (
                (es.addEventListener("play", e),
                es.addEventListener("pause", t),
                es.addEventListener("durationchange", l),
                es.addEventListener("loadedmetadata", n),
                es.addEventListener("seeked", a),
                es.duration > 0 && ee(es.duration),
                es.readyState >= 1)
            ) {
                var r;
                ea(!0), null == Q || null == (r = Q.current) || r.seek(B);
            }
            return (
                el(!es.paused),
                () => {
                    es.removeEventListener("play", e),
                        es.removeEventListener("pause", t),
                        es.removeEventListener("durationchange", l),
                        es.removeEventListener("loadedmetadata", n),
                        es.removeEventListener("seeked", a);
                }
            );
        }, [es, B, Q, er, el, ea, ee, ei]);
    let eA = a.useCallback((e) => {
            V((t) => m(d({}, t), { clipName: e }));
        }, []),
        eI = a.useCallback((e) => {
            V((t) => m(d({}, t), { isTemporary: e }));
        }, []),
        eT = a.useCallback((e) => {
            V((t) => m(d({}, t), { applicationAudioEnabled: e }));
        }, []),
        eL = a.useCallback((e) => {
            V((t) => m(d({}, t), { voiceAudioEnabled: e }));
        }, []),
        eR = a.useCallback((e) => {
            V((t) => m(d({}, t), { soundboardAudioEnabled: e }));
        }, []),
        eM = a.useMemo(
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
                                er.current.add(e),
                                () => {
                                    er.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [Y, er],
        ),
        eP = a.useMemo(
            () => ({
                useCurrentTime: eM,
                duration: Z,
                isPlaying: et,
                isLoaded: en,
                cropStart: H,
                cropEnd: J,
                cropDuration: ey,
                setCropStart: ek,
                setCropEnd: eN,
                setCrop: eE,
                play: eS,
                pause: ew,
                seek: eO,
                subscribe: eC,
                setVideoPlayerRef: eg,
                videoPlayerRef: Q,
                videoURL: eu,
                audioTracks: eh,
                hasError: ev,
                applicationAudioEnabled: $,
                setApplicationAudioEnabled: eT,
                voiceAudioEnabled: X,
                setVoiceAudioEnabled: eL,
                soundboardAudioEnabled: q,
                setSoundboardAudioEnabled: eR,
                getEditedClip: eb,
                clipName: F,
                setClipName: eA,
                isTemporary: W,
                audioURL: ed,
                setIsTemporary: eI,
            }),
            [
                eM,
                Z,
                et,
                en,
                H,
                J,
                ey,
                ek,
                eN,
                eE,
                eS,
                ew,
                eO,
                ed,
                eC,
                eg,
                eu,
                eh,
                ev,
                $,
                eT,
                X,
                eL,
                q,
                eR,
                eb,
                F,
                eA,
                W,
                eI,
            ],
        );
    return (0, n.jsx)(h.Provider, {
        value: eP,
        children: M,
    });
}
function v() {
    let e = a.useContext(h);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
