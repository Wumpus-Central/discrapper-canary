n.d(t, {
    D: () => f,
    u: () => p,
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(539854),
    n(415506);
var l = n(54381),
    a = n(473749),
    i = n(392711),
    r = n(98650),
    s = n(579806),
    o = n(894694),
    u = n(39604),
    c = n(259612);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = a.createContext(null);
function p(e) {
    var t, p, f, v, g, b, j, x;
    let { children: y, clip: N } = e,
        C = N.type === o.NJ.SCREENSHOT,
        {
            initialDuration: k,
            initialCropStart: E,
            initialCropEnd: S,
            initialCurrentTime: w,
        } = (function (e) {
            var t, n, l, a;
            let i = e.length / 1000,
                r = null != (l = null == (t = e.editMetadata) ? void 0 : t.start) ? l : 0,
                s = null != (a = null == (n = e.editMetadata) ? void 0 : n.end) ? a : 0,
                o = 0 !== r || (0 !== s && s !== i);
            return {
                initialDuration: i,
                initialCropStart: r,
                initialCropEnd: s,
                isCropped: o,
                initialCurrentTime: o ? r : i / 2,
            };
        })(N),
        O = a.useMemo(
            () =>
                null == s.Z.clips.getClipProtocolURLFromPath ? null : s.Z.clips.getClipProtocolURLFromPath(N.filepath),
            [N.filepath],
        ),
        [T, I] = a.useState({
            clipName: N.name,
            isTemporary: null != (v = N.isTemporary) && v,
            cropStart: E,
            cropEnd: 0 === S ? k : S,
            voiceAudioEnabled: null == (g = null == (t = N.editMetadata) ? void 0 : t.voiceAudio) || g,
            applicationAudioEnabled: null == (b = null == (p = N.editMetadata) ? void 0 : p.applicationAudio) || b,
            soundboardAudioEnabled: null == (j = null == (f = N.editMetadata) ? void 0 : f.soundboardAudio) || j,
        }),
        {
            clipName: R,
            isTemporary: L,
            cropStart: P,
            cropEnd: A,
            voiceAudioEnabled: M,
            applicationAudioEnabled: D,
            soundboardAudioEnabled: U,
        } = T,
        Z = a.useRef(null),
        z = a.useRef(w),
        [B, V] = a.useState(k),
        [F, G] = a.useState(!1),
        [_, K] = a.useState(!1),
        W = a.useRef(new Set()),
        H = a.useRef(!1),
        [q, Y] = a.useState(null),
        [J, X] = a.useState(null),
        [$, Q] = a.useState(null),
        [ee, et] = a.useState([]),
        [en, el] = a.useState(!1),
        ea = a.useCallback(
            () =>
                m(d({}, N), {
                    name: R,
                    editMetadata: {
                        start: P,
                        end: A,
                        applicationAudio: D,
                        voiceAudio: M,
                        soundboardAudio: U,
                    },
                }),
            [N, R, P, A, D, M, U],
        ),
        ei = a.useCallback((e) => {
            (Z.current = e), Y(e.videoElement);
        }, []),
        er = a.useCallback((e, t, n) => {
            X(e), et(t), Q(n);
        }, []),
        es = a.useCallback(() => {
            el(!0);
        }, []);
    (x = N.filepath),
        a.useEffect(() => {
            let e = new Worker(new URL("/assets/" + n.u("36247"), n.b));
            return (
                (async function () {
                    let t;
                    try {
                        t = await s.Z.clips.loadClip(x);
                    } catch (e) {
                        es();
                        return;
                    }
                    (e.onmessage = (e) => {
                        let { videoBuffer: t, audioTracks: n, audioBuffer: l } = e.data,
                            a = URL.createObjectURL(new Blob([t], { type: "video/mp4" })),
                            i = [];
                        for (let e of n) {
                            let t = URL.createObjectURL(new Blob([e.buffer], { type: "audio/mp4" }));
                            i.push({
                                arrayBuffer: e.buffer,
                                url: t,
                                trackName: e.trackName,
                            });
                        }
                        er(a, i, URL.createObjectURL(new Blob([l], { type: "audio/mp4" })));
                    }),
                        e.postMessage({ videoBuffer: t.data.buffer }, [t.data.buffer]);
                })(),
                () => {
                    e.terminate();
                }
            );
        }, [x, er, es]),
        a.useEffect(
            () => () => {
                null != J && URL.revokeObjectURL(J);
            },
            [J],
        ),
        a.useEffect(
            () => () => {
                for (let e of ee) URL.revokeObjectURL(e.url);
            },
            [ee],
        ),
        a.useEffect(
            () => () => {
                null != $ && URL.revokeObjectURL($);
            },
            [$],
        ),
        (function (e, t, n, l) {
            let i = a.useRef(l);
            (i.current = l),
                a.useEffect(() => {
                    async function l() {
                        let l = {},
                            a = i.current;
                        n || null == t || (l = { thumbnail: await (0, c.R)(t, a.editMetadata.start) }),
                            (0, u.Tm)(e, d({}, a, l));
                    }
                    return () => {
                        l();
                    };
                }, [e, t, n, i]);
        })(N.id, O, C, {
            name: R,
            editMetadata: {
                start: P,
                end: A,
                voiceAudio: M,
                applicationAudio: D,
                soundboardAudio: U,
            },
        });
    let eo = a.useMemo(() => A - P, [P, A]),
        eu = a.useCallback(
            (e) => (
                W.current.add(e),
                () => {
                    W.current.delete(e);
                }
            ),
            [W],
        ),
        {
            setCropStart: ec,
            setCropEnd: ed,
            setCrop: em,
        } = (function (e, t, n, l, r) {
            let s = a.useCallback(
                (e) => {
                    var n;
                    let a = (0, i.clamp)(e, 0, t - 1);
                    l((e) => m(d({}, e), { cropStart: a })), null == r || null == (n = r.current) || n.seek(a);
                },
                [t, l, r],
            );
            return {
                setCropStart: s,
                setCropEnd: a.useCallback(
                    (t) => {
                        var a;
                        let s = (0, i.clamp)(t, e + 1, n);
                        l((e) => m(d({}, e), { cropEnd: s })), null == r || null == (a = r.current) || a.seek(s);
                    },
                    [e, n, l, r],
                ),
                setCrop: a.useCallback(
                    (e, t) => {
                        l((n) =>
                            m(d({}, n), {
                                cropStart: e,
                                cropEnd: t,
                            }),
                        );
                    },
                    [l],
                ),
            };
        })(P, A, B, I, Z),
        {
            play: eh,
            pause: ep,
            seek: ef,
        } = (function (e) {
            let t = a.useCallback(() => {
                var t;
                null == e || null == (t = e.current) || t.play();
            }, [e]);
            return {
                play: t,
                pause: a.useCallback(() => {
                    var t;
                    null == e || null == (t = e.current) || t.pause();
                }, [e]),
                seek: a.useCallback(
                    (t) => {
                        var n;
                        null == e || null == (n = e.current) || n.seek(t);
                    },
                    [e],
                ),
            };
        })(Z);
    (0, r.Z)(() => {
        var e;
        let t = null == (e = Z.current) ? void 0 : e.videoElement;
        if (null == t || !H.current) return;
        let n = t.currentTime;
        z.current !== n &&
            ((z.current = n),
            W.current.forEach((e) => {
                var t;
                return null == (t = e.onTimeUpdate) ? void 0 : t.call(e, n);
            }));
    }),
        a.useEffect(() => {
            if (null == q) return;
            let e = () => {
                    G(!0),
                        W.current.forEach((e) => {
                            var t;
                            return null == (t = e.onPlay) ? void 0 : t.call(e);
                        });
                },
                t = () => {
                    G(!1),
                        W.current.forEach((e) => {
                            var t;
                            return null == (t = e.onPause) ? void 0 : t.call(e);
                        });
                },
                n = () => {
                    V(q.duration);
                },
                l = () => {
                    var e;
                    K(!0), V(q.duration), null == Z || null == (e = Z.current) || e.seek(w);
                },
                a = () => {
                    H.current = !0;
                };
            if (
                (q.addEventListener("play", e),
                q.addEventListener("pause", t),
                q.addEventListener("durationchange", n),
                q.addEventListener("loadedmetadata", l),
                q.addEventListener("seeked", a),
                q.duration > 0 && V(q.duration),
                q.readyState >= 1)
            ) {
                var i;
                K(!0), null == Z || null == (i = Z.current) || i.seek(w);
            }
            return (
                G(!q.paused),
                () => {
                    q.removeEventListener("play", e),
                        q.removeEventListener("pause", t),
                        q.removeEventListener("durationchange", n),
                        q.removeEventListener("loadedmetadata", l),
                        q.removeEventListener("seeked", a);
                }
            );
        }, [q, w, Z, W, G, K, V, H]);
    let ev = a.useCallback((e) => {
            I((t) => m(d({}, t), { clipName: e }));
        }, []),
        eg = a.useCallback((e) => {
            I((t) => m(d({}, t), { isTemporary: e }));
        }, []),
        eb = a.useCallback((e) => {
            I((t) => m(d({}, t), { applicationAudioEnabled: e }));
        }, []),
        ej = a.useCallback((e) => {
            I((t) => m(d({}, t), { voiceAudioEnabled: e }));
        }, []),
        ex = a.useCallback((e) => {
            I((t) => m(d({}, t), { soundboardAudioEnabled: e }));
        }, []),
        ey = a.useMemo(
            () =>
                function () {
                    let [e, t] = a.useState(z.current);
                    return (
                        a.useEffect(() => {
                            let e = {
                                onTimeUpdate: (e) => {
                                    t(e);
                                },
                            };
                            return (
                                W.current.add(e),
                                () => {
                                    W.current.delete(e);
                                }
                            );
                        }, []),
                        e
                    );
                },
            [z, W],
        ),
        eN = a.useMemo(
            () => ({
                useCurrentTime: ey,
                duration: B,
                isPlaying: F,
                isLoaded: _,
                cropStart: P,
                cropEnd: A,
                cropDuration: eo,
                setCropStart: ec,
                setCropEnd: ed,
                setCrop: em,
                play: eh,
                pause: ep,
                seek: ef,
                subscribe: eu,
                setVideoPlayerRef: ei,
                videoPlayerRef: Z,
                videoURL: J,
                audioTracks: ee,
                hasError: en,
                applicationAudioEnabled: D,
                setApplicationAudioEnabled: eb,
                voiceAudioEnabled: M,
                setVoiceAudioEnabled: ej,
                soundboardAudioEnabled: U,
                setSoundboardAudioEnabled: ex,
                getEditedClip: ea,
                clipName: R,
                setClipName: ev,
                isTemporary: L,
                audioURL: $,
                setIsTemporary: eg,
            }),
            [
                ey,
                B,
                F,
                _,
                P,
                A,
                eo,
                ec,
                ed,
                em,
                eh,
                ep,
                ef,
                $,
                eu,
                ei,
                J,
                ee,
                en,
                D,
                eb,
                M,
                ej,
                U,
                ex,
                ea,
                R,
                ev,
                L,
                eg,
            ],
        );
    return (0, l.jsx)(h.Provider, {
        value: eN,
        children: y,
    });
}
function f() {
    let e = a.useContext(h);
    if (null == e) throw Error("useClipContext must be used within a ClipContextProvider");
    return e;
}
