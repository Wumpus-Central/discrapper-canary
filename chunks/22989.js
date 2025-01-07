n.r(t),
    n.d(t, {
        default: function () {
            return j;
        }
    }),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var a = n(200651),
    l = n(192379),
    i = n(990547),
    r = n(481060),
    o = n(240872),
    s = n(579806),
    u = n(100527),
    d = n(906732),
    c = n(39604),
    m = n(212039),
    p = n(259612),
    v = n(572720),
    f = n(362693),
    b = n(674908),
    h = n(20437),
    x = n(388032),
    g = n(927932);
function j(e) {
    var t, n, j, C, w, y, _, k;
    let { clip: S, channelId: N, transitionState: T, onClose: L } = e,
        [F, R] = l.useState(!0),
        [E, I] = l.useState(null),
        [P, B] = l.useState(null),
        { analyticsLocations: M } = (0, d.ZP)(u.Z.CLIPS_EDITOR);
    l.useEffect(() => {
        (async function e() {
            let e;
            try {
                e = await s.Z.clips.loadClip(S.filepath);
            } catch {
                L(),
                    o.Z.show({
                        title: x.intl.string(x.t.yjoSOD),
                        body: x.intl.string(x.t.JmYczc)
                    });
                return;
            }
            let t = e.data.buffer,
                n = await (0, m.w)(t),
                a = URL.createObjectURL(new Blob([n], { type: 'audio/mp4' })),
                l = URL.createObjectURL(new Blob([e.data], { type: 'video/mp4' }));
            B(a), I(l);
        })();
    }, [S.filepath, L]),
        l.useEffect(
            () => () => {
                null != E && URL.revokeObjectURL(E);
            },
            [E]
        ),
        l.useEffect(
            () => () => {
                null != P && URL.revokeObjectURL(P);
            },
            [P]
        );
    let [A, Z] = l.useState(null === (w = null === (t = S.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === w || w),
        [D, z] = l.useState(null === (y = null === (n = S.editMetadata) || void 0 === n ? void 0 : n.applicationAudio) || void 0 === y || y),
        [O, H] = l.useState({
            start: null !== (_ = null === (j = S.editMetadata) || void 0 === j ? void 0 : j.start) && void 0 !== _ ? _ : 0,
            end: null !== (k = null === (C = S.editMetadata) || void 0 === C ? void 0 : C.end) && void 0 !== k ? k : 0
        }),
        [W, U] = l.useState(S.name),
        V = l.useRef({
            name: W,
            editMetadata: {
                start: O.start,
                end: O.end,
                voiceAudio: A,
                applicationAudio: D
            }
        });
    V.current = {
        name: W,
        editMetadata: {
            start: O.start,
            end: O.end,
            voiceAudio: A,
            applicationAudio: D
        }
    };
    let K = (0, v.l)(S);
    l.useEffect(() => {
        async function e() {
            let e = {};
            null != K && (e = { thumbnail: await (0, p.R)(K, V.current.editMetadata.start) }),
                (0, c.Tm)(S.id, {
                    ...V.current,
                    ...e
                });
        }
        return () => {
            e();
        };
    }, [S.id, K]);
    let G = l.useRef(null),
        X = l.useMemo(
            () => ({
                videoPlayerRef: G,
                applicationAudioEnabled: D,
                setApplicationAudioEnabled: z,
                voiceAudioEnabled: A,
                setVoiceAudioEnabled: Z,
                cropData: O,
                setCropData: H
            }),
            [D, A, O]
        );
    return (0, a.jsx)(r.ModalRoot, {
        impression: { impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED },
        size: r.ModalSize.DYNAMIC,
        className: g.modalRoot,
        transitionState: T,
        children: (0, a.jsx)(d.Gt, {
            value: M,
            children: (0, a.jsx)(r.ModalContent, {
                className: g.modalContent,
                children: (0, a.jsx)(h.Q.Provider, {
                    value: X,
                    children:
                        null == E || null == P
                            ? (0, a.jsx)('div', {
                                  className: g.spinnerContainer,
                                  children: (0, a.jsx)(r.Spinner, {})
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(f.Z, {
                                          videoURL: E,
                                          isLoading: F,
                                          onDoneLoading: () => R(!1),
                                          audioURL: P,
                                          transitionState: T
                                      }),
                                      !F &&
                                          (0, a.jsx)(b.Z, {
                                              channelId: N,
                                              onSetClipName: U,
                                              clipName: W,
                                              clip: S,
                                              onClose: L
                                          })
                                  ]
                              })
                })
            })
        })
    });
}
