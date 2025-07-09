(n.d(t, { default: () => j }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
var a = n(255367),
    r = n(73800),
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
    var t, n, j, y, _, w, C, P;
    let { clip: k, channelId: O, transitionState: S, onClose: N } = e,
        [E, R] = r.useState(!0),
        [L, T] = r.useState(null),
        [F, D] = r.useState(null),
        { analyticsLocations: I } = (0, c.ZP)(u.Z.CLIPS_EDITOR);
    (r.useEffect(() => {
        !(async function () {
            let e;
            try {
                e = await s.Z.clips.loadClip(k.filepath);
            } catch (e) {
                (N(),
                    o.Z.show({
                        title: x.intl.string(x.t.yjoSOD),
                        body: x.intl.string(x.t.JmYczc)
                    }));
                return;
            }
            let t = await (0, m.w)(e.data.buffer),
                n = URL.createObjectURL(new Blob([t], { type: 'audio/mp4' })),
                a = URL.createObjectURL(new Blob([e.data], { type: 'video/mp4' }));
            (D(n), T(a));
        })();
    }, [k.filepath, N]),
        r.useEffect(
            () => () => {
                null != L && URL.revokeObjectURL(L);
            },
            [L]
        ),
        r.useEffect(
            () => () => {
                null != F && URL.revokeObjectURL(F);
            },
            [F]
        ));
    let [A, Z] = r.useState(null == (_ = null == (t = k.editMetadata) ? void 0 : t.voiceAudio) || _),
        [B, M] = r.useState(null == (w = null == (n = k.editMetadata) ? void 0 : n.applicationAudio) || w),
        [z, H] = r.useState({
            start: null != (C = null == (j = k.editMetadata) ? void 0 : j.start) ? C : 0,
            end: null != (P = null == (y = k.editMetadata) ? void 0 : y.end) ? P : 0
        }),
        [W, U] = r.useState(k.name),
        V = r.useRef({
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
    let X = (0, f.l)(k);
    r.useEffect(() => {
        async function e() {
            let e = {};
            (null != X && (e = { thumbnail: await (0, p.R)(X, V.current.editMetadata.start) }),
                (0, d.Tm)(
                    k.id,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    ((a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = a));
                                }));
                        }
                        return e;
                    })({}, V.current, e)
                ));
        }
        return () => {
            e();
        };
    }, [k.id, X]);
    let G = r.useRef(null),
        K = r.useMemo(
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
    return (0, a.jsx)(i.Y0X, {
        impression: { impressionName: l.ImpressionNames.CLIP_EDITOR_VIEWED },
        size: i.CgR.DYNAMIC,
        className: b.modalRoot,
        transitionState: S,
        parentComponent: 'ClipsEditModal',
        children: (0, a.jsx)(c.Gt, {
            value: I,
            children: (0, a.jsx)(i.hzk, {
                className: b.modalContent,
                children: (0, a.jsx)(g.Q.Provider, {
                    value: K,
                    children:
                        null == L || null == F
                            ? (0, a.jsx)('div', {
                                  className: b.spinnerContainer,
                                  children: (0, a.jsx)(i.$jN, {})
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(v.Z, {
                                          videoURL: L,
                                          isLoading: E,
                                          onDoneLoading: () => R(!1),
                                          audioURL: F,
                                          transitionState: S
                                      }),
                                      !E &&
                                          (0, a.jsx)(h.Z, {
                                              channelId: O,
                                              onSetClipName: U,
                                              clipName: W,
                                              clip: k,
                                              onClose: N
                                          })
                                  ]
                              })
                })
            })
        })
    });
}
