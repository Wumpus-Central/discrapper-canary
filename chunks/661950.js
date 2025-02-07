n.d(t, { Z: () => j });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(921801),
    a = n(131951),
    o = n(63063),
    c = n(603963),
    d = n(738486),
    u = n(429789),
    m = n(208113),
    h = n(625205),
    g = n(325808),
    _ = n(823087),
    x = n(232388),
    p = n(716210),
    E = n(459674),
    C = n(803567),
    f = n(269876),
    T = n(976758),
    N = n(726985),
    S = n(981631),
    I = n(65154),
    b = n(388032);
let v = ''.concat(o.Z.getArticleURL(S.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function j() {
    let { inputMode: e } = (0, s.cj)([a.Z], () => ({ inputMode: a.Z.getMode() }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.Z, {
                webSetting: N.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, i.jsxs)(d.Z, {
                        children: [
                            (0, i.jsx)(l.F, {
                                setting: N.s6.VOICE_AND_VIDEO_DEVICES,
                                children: (0, i.jsx)(h.Z, {})
                            }),
                            (0, i.jsx)(l.F, {
                                setting: N.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                                children: (0, i.jsx)(T.Z, {})
                            }),
                            (0, i.jsxs)(l.F, {
                                setting: N.s6.VOICE_AND_VIDEO_MIC_TEST,
                                children: [
                                    (0, i.jsx)(_.Z, {}),
                                    (0, i.jsx)(r.R94, {
                                        type: r.R94.Types.DESCRIPTION,
                                        children: b.intl.format(b.t['V+B3FB'], { guideURL: v })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(d.Z, {
                        children: [
                            (0, i.jsx)(l.F, {
                                setting: N.s6.VOICE_AND_VIDEO_INPUT_MODE,
                                children: (0, i.jsx)(g.Z, {})
                            }),
                            (0, i.jsx)(l.F, {
                                setting: N.s6.VOICE_AND_VIDEO_SENSITIVITY,
                                children: e === I.pM.VOICE_ACTIVITY && (0, i.jsx)(f.Z, {})
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(c.Z, {
                webSetting: N.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                title: b.intl.string(b.t['6I6GUl']),
                children: (0, i.jsx)(C.Z, { refreshStyles: !0 })
            }),
            (0, i.jsx)(c.Z, {
                title: b.intl.string(b.t['8/udY2']),
                webSetting: N.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                children: (0, i.jsxs)(d.Z, {
                    children: [(0, i.jsx)(p.Z, { refreshStyles: !0 }), (0, i.jsx)(E.Z, { refreshStyles: !0 }), (0, i.jsx)(u.Z, { refreshStyles: !0 }), (0, i.jsx)(m.Z, { refreshStyles: !0 }), (0, i.jsx)(x.Z, { refreshStyles: !0 })]
                })
            })
        ]
    });
}
