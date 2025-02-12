a.d(t, { default: () => j }), a(47120), a(315314), a(309749), a(610138), a(216116), a(78328), a(815648);
var n = a(200651),
    l = a(192379),
    i = a(990547),
    r = a(481060),
    o = a(240872),
    s = a(579806),
    u = a(100527),
    d = a(906732),
    c = a(39604),
    m = a(212039),
    p = a(259612),
    v = a(572720),
    f = a(362693),
    h = a(674908),
    x = a(20437),
    g = a(388032),
    _ = a(273835);
function j(e) {
    var t, a, j, C, b, w, y, k;
    let { clip: N, channelId: S, transitionState: R, onClose: E } = e,
        [L, T] = l.useState(!0),
        [F, P] = l.useState(null),
        [I, A] = l.useState(null),
        { analyticsLocations: Z } = (0, d.ZP)(u.Z.CLIPS_EDITOR);
    l.useEffect(() => {
        (async function () {
            let e;
            try {
                e = await s.Z.clips.loadClip(N.filepath);
            } catch {
                E(),
                    o.Z.show({
                        title: g.intl.string(g.t.yjoSOD),
                        body: g.intl.string(g.t.JmYczc)
                    });
                return;
            }
            let t = await (0, m.w)(e.data.buffer),
                a = URL.createObjectURL(new Blob([t], { type: 'audio/mp4' })),
                n = URL.createObjectURL(new Blob([e.data], { type: 'video/mp4' }));
            A(a), P(n);
        })();
    }, [N.filepath, E]),
        l.useEffect(
            () => () => {
                null != F && URL.revokeObjectURL(F);
            },
            [F]
        ),
        l.useEffect(
            () => () => {
                null != I && URL.revokeObjectURL(I);
            },
            [I]
        );
    let [D, B] = l.useState(null === (b = null === (t = N.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === b || b),
        [M, z] = l.useState(null === (w = null === (a = N.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === w || w),
        [H, O] = l.useState({
            start: null !== (y = null === (j = N.editMetadata) || void 0 === j ? void 0 : j.start) && void 0 !== y ? y : 0,
            end: null !== (k = null === (C = N.editMetadata) || void 0 === C ? void 0 : C.end) && void 0 !== k ? k : 0
        }),
        [W, U] = l.useState(N.name),
        V = l.useRef({
            name: W,
            editMetadata: {
                start: H.start,
                end: H.end,
                voiceAudio: D,
                applicationAudio: M
            }
        });
    V.current = {
        name: W,
        editMetadata: {
            start: H.start,
            end: H.end,
            voiceAudio: D,
            applicationAudio: M
        }
    };
    let X = (0, v.l)(N);
    l.useEffect(() => {
        async function e() {
            let e = {};
            null != X && (e = { thumbnail: await (0, p.R)(X, V.current.editMetadata.start) }),
                (0, c.Tm)(N.id, {
                    ...V.current,
                    ...e
                });
        }
        return () => {
            e();
        };
    }, [N.id, X]);
    let G = l.useRef(null),
        K = l.useMemo(
            () => ({
                videoPlayerRef: G,
                applicationAudioEnabled: M,
                setApplicationAudioEnabled: z,
                voiceAudioEnabled: D,
                setVoiceAudioEnabled: B,
                cropData: H,
                setCropData: O
            }),
            [M, D, H]
        );
    return (0, n.jsx)(r.Y0X, {
        impression: { impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED },
        size: r.CgR.DYNAMIC,
        className: _.modalRoot,
        transitionState: R,
        children: (0, n.jsx)(d.Gt, {
            value: Z,
            children: (0, n.jsx)(r.hzk, {
                className: _.modalContent,
                children: (0, n.jsx)(x.Q.Provider, {
                    value: K,
                    children:
                        null == F || null == I
                            ? (0, n.jsx)('div', {
                                  className: _.spinnerContainer,
                                  children: (0, n.jsx)(r.$jN, {})
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(f.Z, {
                                          videoURL: F,
                                          isLoading: L,
                                          onDoneLoading: () => T(!1),
                                          audioURL: I,
                                          transitionState: R
                                      }),
                                      !L &&
                                          (0, n.jsx)(h.Z, {
                                              channelId: S,
                                              onSetClipName: U,
                                              clipName: W,
                                              clip: N,
                                              onClose: E
                                          })
                                  ]
                              })
                })
            })
        })
    });
}
