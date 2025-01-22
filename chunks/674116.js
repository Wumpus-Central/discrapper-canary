n.d(t, {
    Z: function () {
        return G;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(921801),
    m = n(131951),
    g = n(663389),
    h = n(63063),
    p = n(680924),
    x = n(58765),
    f = n(429789),
    _ = n(726763),
    E = n(208113),
    C = n(894939),
    T = n(710808),
    S = n(625205),
    b = n(325808),
    I = n(823087),
    N = n(232388),
    v = n(546997),
    A = n(186934),
    j = n(716210),
    O = n(520384),
    R = n(459674),
    P = n(167540),
    D = n(267006),
    y = n(803567),
    B = n(269876),
    Z = n(976758),
    L = n(526761),
    M = n(726985),
    k = n(981631),
    w = n(65154),
    F = n(388032),
    U = n(232186);
let V = ''.concat(h.Z.getArticleURL(k.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function G() {
    let { inputMode: e } = (0, l.cj)([m.Z], () => ({ inputMode: m.Z.getMode() })),
        t = (0, l.e7)([g.Z], () => g.Z.getSubsection()),
        n = r.createRef();
    r.useEffect(() => {
        if (t === L.GA) {
            var e;
            null == n || null === (e = n.current) || void 0 === e || e.scrollIntoView(), d.Z.clearSubsection();
        }
    }, [n, t]);
    let s = (0, x.Z)();
    return (0, i.jsxs)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: F.intl.string(F.t.NiTd0d),
        children: [
            (0, i.jsxs)(u.F, {
                setting: M.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, i.jsx)(u.F, {
                        setting: M.s6.VOICE_AND_VIDEO_DEVICES,
                        children: (0, i.jsx)(S.Z, {})
                    }),
                    (0, i.jsx)(u.F, {
                        setting: M.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                        children: (0, i.jsx)(Z.Z, {})
                    }),
                    (0, i.jsxs)(u.F, {
                        setting: M.s6.VOICE_AND_VIDEO_MIC_TEST,
                        children: [
                            (0, i.jsx)(I.Z, {}),
                            (0, i.jsx)(o.FormText, {
                                className: U.marginBottom20,
                                type: o.FormText.Types.DESCRIPTION,
                                children: F.intl.format(F.t['V+B3FB'], { guideURL: V })
                            }),
                            (0, i.jsx)(o.FormDivider, { className: a()(U.marginBottom20) })
                        ]
                    }),
                    (0, i.jsx)(u.F, {
                        setting: M.s6.VOICE_AND_VIDEO_INPUT_MODE,
                        children: (0, i.jsx)(b.Z, {})
                    }),
                    (0, i.jsx)(u.F, {
                        setting: M.s6.VOICE_AND_VIDEO_SENSITIVITY,
                        children: e === w.pM.VOICE_ACTIVITY && (0, i.jsx)(B.Z, {})
                    }),
                    (0, i.jsx)(o.FormDivider, { className: U.marginBottom40 })
                ]
            }),
            (0, i.jsx)(u.F, {
                setting: M.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, i.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: n
                })
            }),
            (0, i.jsx)(u.F, {
                setting: M.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, i.jsx)(C.Z, {})
            }),
            (0, i.jsx)(u.F, {
                setting: M.s6.VOICE_AND_VIDEO_VIDEO,
                children: (0, i.jsx)(P.Z, {})
            }),
            (0, i.jsx)(u.F, {
                setting: M.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, i.jsxs)(o.HeadingLevel, {
                    component: (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H1,
                        className: U.marginBottom20,
                        children: F.intl.string(F.t['8/udY2'])
                    }),
                    children: [
                        (0, i.jsx)(_.Z, {}),
                        (0, i.jsx)(D.Z, {}),
                        (0, i.jsx)(u.F, {
                            setting: M.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, i.jsx)(y.Z, {})
                        }),
                        (0, i.jsx)(O.Z, {}),
                        (0, i.jsx)(N.Z, {}),
                        (0, i.jsx)(f.Z, {}),
                        s && (0, i.jsx)(A.Z, {}),
                        (0, i.jsx)(E.Z, {}),
                        (0, i.jsx)(v.Z, {}),
                        (0, i.jsx)(j.Z, {}),
                        (0, i.jsx)(R.Z, { refreshStyles: !0 }),
                        (0, i.jsx)(o.FormDivider, { className: U.marginBottom40 }),
                        (0, i.jsx)(u.F, {
                            setting: M.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, i.jsx)(T.Z, {})
                        }),
                        (0, i.jsx)(u.F, {
                            setting: M.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, i.jsx)(o.FormItem, {
                                children: (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.OUTLINED,
                                    color: o.Button.Colors.RED,
                                    onClick: () => {
                                        (0, p.Z)(F.intl.string(F.t['/RXu6+']), F.intl.string(F.t.sQ42iY), c.Z.reset);
                                    },
                                    size: o.Button.Sizes.SMALL,
                                    children: F.intl.string(F.t['/RXu6+'])
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
