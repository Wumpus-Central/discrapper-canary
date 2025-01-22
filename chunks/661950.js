n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(921801),
    l = n(131951),
    o = n(63063),
    c = n(603963),
    d = n(738486),
    u = n(429789),
    m = n(208113),
    g = n(625205),
    h = n(325808),
    p = n(823087),
    x = n(232388),
    f = n(716210),
    E = n(459674),
    _ = n(803567),
    C = n(269876),
    T = n(976758),
    S = n(726985),
    b = n(981631),
    I = n(65154),
    N = n(388032);
let v = ''.concat(o.Z.getArticleURL(b.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function A() {
    let { inputMode: e } = (0, r.cj)([l.Z], () => ({ inputMode: l.Z.getMode() }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.Z, {
                webSetting: S.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, i.jsxs)(d.Z, {
                        children: [
                            (0, i.jsx)(a.F, {
                                setting: S.s6.VOICE_AND_VIDEO_DEVICES,
                                children: (0, i.jsx)(g.Z, {})
                            }),
                            (0, i.jsx)(a.F, {
                                setting: S.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                                children: (0, i.jsx)(T.Z, {})
                            }),
                            (0, i.jsxs)(a.F, {
                                setting: S.s6.VOICE_AND_VIDEO_MIC_TEST,
                                children: [
                                    (0, i.jsx)(p.Z, {}),
                                    (0, i.jsx)(s.FormText, {
                                        type: s.FormText.Types.DESCRIPTION,
                                        children: N.intl.format(N.t['V+B3FB'], { guideURL: v })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(d.Z, {
                        children: [
                            (0, i.jsx)(a.F, {
                                setting: S.s6.VOICE_AND_VIDEO_INPUT_MODE,
                                children: (0, i.jsx)(h.Z, {})
                            }),
                            (0, i.jsx)(a.F, {
                                setting: S.s6.VOICE_AND_VIDEO_SENSITIVITY,
                                children: e === I.pM.VOICE_ACTIVITY && (0, i.jsx)(C.Z, {})
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(c.Z, {
                webSetting: S.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                title: N.intl.string(N.t['6I6GUl']),
                children: (0, i.jsx)(_.Z, { refreshStyles: !0 })
            }),
            (0, i.jsx)(c.Z, {
                title: N.intl.string(N.t['8/udY2']),
                webSetting: S.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                children: (0, i.jsxs)(d.Z, {
                    children: [(0, i.jsx)(f.Z, { refreshStyles: !0 }), (0, i.jsx)(E.Z, { refreshStyles: !0 }), (0, i.jsx)(u.Z, { refreshStyles: !0 }), (0, i.jsx)(m.Z, { refreshStyles: !0 }), (0, i.jsx)(x.Z, { refreshStyles: !0 })]
                })
            })
        ]
    });
}
