n.d(t, { default: () => j }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(255367),
    a = n(73800),
    l = n(990547),
    i = n(481060),
    o = n(240872),
    s = n(579806),
    u = n(100527),
    c = n(906732),
    d = n(39604),
    m = n(212039),
    p = n(259612),
    f = n(572720),
    v = n(362693),
    h = n(674908),
    g = n(20437),
    x = n(388032),
    b = n(138339);
function j(e) {
    var t, n, j, y, _, w, C, k;
    let { clip: P, channelId: O, transitionState: S, onClose: N } = e,
        [E, R] = a.useState(!0),
        [L, T] = a.useState(null),
        [F, D] = a.useState(null),
        { analyticsLocations: I } = (0, c.ZP)(u.Z.CLIPS_EDITOR);
    a.useEffect(() => {
        !(async function () {
            let e;
            try {
                e = await s.Z.clips.loadClip(P.filepath);
            } catch (e) {
                N(),
                    o.Z.show({
                        title: x.intl.string(x.t.yjoSOD),
                        body: x.intl.string(x.t.JmYczc)
                    });
                return;
            }
            let t = await (0, m.w)(e.data.buffer),
                n = URL.createObjectURL(new Blob([t], { type: 'audio/mp4' })),
                r = URL.createObjectURL(new Blob([e.data], { type: 'video/mp4' }));
            D(n), T(r);
        })();
    }, [P.filepath, N]),
        a.useEffect(
            () => () => {
                null != L && URL.revokeObjectURL(L);
            },
            [L]
        ),
        a.useEffect(
            () => () => {
                null != F && URL.revokeObjectURL(F);
            },
            [F]
        );
    let [A, Z] = a.useState(null == (_ = null == (t = P.editMetadata) ? void 0 : t.voiceAudio) || _),
        [B, M] = a.useState(null == (w = null == (n = P.editMetadata) ? void 0 : n.applicationAudio) || w),
        [z, H] = a.useState({
            start: null != (C = null == (j = P.editMetadata) ? void 0 : j.start) ? C : 0,
            end: null != (k = null == (y = P.editMetadata) ? void 0 : y.end) ? k : 0
        }),
        [W, U] = a.useState(P.name),
        V = a.useRef({
            name: W,
            editMetadata: {
                start: z.start,
                end: z.end,
                voiceAudio: A,
                applicationAudio: B
            }
        });
    V.current = {
        name: W,
        editMetadata: {
            start: z.start,
            end: z.end,
            voiceAudio: A,
            applicationAudio: B
        }
    };
    let X = (0, f.l)(P);
    a.useEffect(() => {
        async function e() {
            let e = {};
            null != X && (e = { thumbnail: await (0, p.R)(X, V.current.editMetadata.start) }),
                (0, d.Tm)(
                    P.id,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, V.current, e)
                );
        }
        return () => {
            e();
        };
    }, [P.id, X]);
    let G = a.useRef(null),
        K = a.useMemo(
            () => ({
                videoPlayerRef: G,
                applicationAudioEnabled: B,
                setApplicationAudioEnabled: M,
                voiceAudioEnabled: A,
                setVoiceAudioEnabled: Z,
                cropData: z,
                setCropData: H
            }),
            [B, A, z]
        );
    return (0, r.jsx)(i.Y0X, {
        impression: { impressionName: l.ImpressionNames.CLIP_EDITOR_VIEWED },
        size: i.CgR.DYNAMIC,
        className: b.modalRoot,
        transitionState: S,
        children: (0, r.jsx)(c.Gt, {
            value: I,
            children: (0, r.jsx)(i.hzk, {
                className: b.modalContent,
                children: (0, r.jsx)(g.Q.Provider, {
                    value: K,
                    children:
                        null == L || null == F
                            ? (0, r.jsx)('div', {
                                  className: b.spinnerContainer,
                                  children: (0, r.jsx)(i.$jN, {})
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(v.Z, {
                                          videoURL: L,
                                          isLoading: E,
                                          onDoneLoading: () => R(!1),
                                          audioURL: F,
                                          transitionState: S
                                      }),
                                      !E &&
                                          (0, r.jsx)(h.Z, {
                                              channelId: O,
                                              onSetClipName: U,
                                              clipName: W,
                                              clip: P,
                                              onClose: N
                                          })
                                  ]
                              })
                })
            })
        })
    });
}
