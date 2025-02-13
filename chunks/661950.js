n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(921801),
    a = n(131951),
    o = n(63063),
    c = n(603963),
    d = n(738486),
    u = n(429789),
    h = n(208113),
    m = n(625205),
    g = n(325808),
    x = n(823087),
    _ = n(232388),
    p = n(716210),
    E = n(459674),
    C = n(803567),
    N = n(269876),
    I = n(976758),
    f = n(726985),
    T = n(981631),
    S = n(65154),
    j = n(388032);
let v = ''.concat(o.Z.getArticleURL(T.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function b() {
    let { inputMode: e } = (0, s.cj)([a.Z], () => ({ inputMode: a.Z.getMode() }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.Z, {
                webSetting: f.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, i.jsxs)(d.Z, {
                        children: [
                            (0, i.jsx)(r.F, {
                                setting: f.s6.VOICE_AND_VIDEO_DEVICES,
                                children: (0, i.jsx)(m.Z, {})
                            }),
                            (0, i.jsx)(r.F, {
                                setting: f.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                                children: (0, i.jsx)(I.Z, {})
                            }),
                            (0, i.jsxs)(r.F, {
                                setting: f.s6.VOICE_AND_VIDEO_MIC_TEST,
                                children: [
                                    (0, i.jsx)(x.Z, {}),
                                    (0, i.jsx)(l.R94, {
                                        type: l.R94.Types.DESCRIPTION,
                                        children: j.intl.format(j.t['V+B3FB'], { guideURL: v })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(d.Z, {
                        children: [
                            (0, i.jsx)(r.F, {
                                setting: f.s6.VOICE_AND_VIDEO_INPUT_MODE,
                                children: (0, i.jsx)(g.Z, {})
                            }),
                            (0, i.jsx)(r.F, {
                                setting: f.s6.VOICE_AND_VIDEO_SENSITIVITY,
                                children: e === S.pM.VOICE_ACTIVITY && (0, i.jsx)(N.Z, {})
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(c.Z, {
                webSetting: f.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                title: j.intl.string(j.t['6I6GUl']),
                children: (0, i.jsx)(C.Z, { refreshStyles: !0 })
            }),
            (0, i.jsx)(c.Z, {
                title: j.intl.string(j.t['8/udY2']),
                webSetting: f.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                children: (0, i.jsxs)(d.Z, {
                    children: [(0, i.jsx)(p.Z, { refreshStyles: !0 }), (0, i.jsx)(E.Z, { refreshStyles: !0 }), (0, i.jsx)(u.Z, { refreshStyles: !0 }), (0, i.jsx)(h.Z, { refreshStyles: !0 }), (0, i.jsx)(_.Z, { refreshStyles: !0 })]
                })
            })
        ]
    });
}
