n.d(t, { Z: () => G });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(921801),
    m = n(131951),
    g = n(663389),
    p = n(63063),
    h = n(680924),
    f = n(58765),
    b = n(429789),
    N = n(726763),
    x = n(208113),
    _ = n(894939),
    E = n(710808),
    j = n(625205),
    C = n(325808),
    O = n(823087),
    v = n(232388),
    S = n(546997),
    T = n(186934),
    I = n(716210),
    y = n(520384),
    A = n(459674),
    P = n(167540),
    R = n(267006),
    D = n(803567),
    Z = n(269876),
    w = n(976758),
    k = n(526761),
    W = n(726985),
    L = n(981631),
    B = n(65154),
    M = n(388032),
    U = n(455812);
let V = ''.concat(p.Z.getArticleURL(L.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function G() {
    let { inputMode: e } = (0, l.cj)([m.Z], () => ({ inputMode: m.Z.getMode() })),
        t = (0, l.e7)([g.Z], () => g.Z.getSubsection()),
        n = i.createRef(),
        s = i.createRef();
    i.useEffect(() => {
        var e, r;
        t === k.GA && (null == n || null === (e = n.current) || void 0 === e || e.scrollIntoView(), d.Z.clearSubsection()), t === k.gP && (null == s || null === (r = s.current) || void 0 === r || r.scrollIntoView(), d.Z.clearSubsection());
    }, [n, s, t]);
    let p = (0, f.Z)();
    return (0, r.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: M.NW.string(M.t.NiTd0d),
        children: [
            (0, r.jsxs)(u.F, {
                setting: W.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, r.jsx)(u.F, {
                        setting: W.s6.VOICE_AND_VIDEO_DEVICES,
                        children: (0, r.jsx)(j.Z, {})
                    }),
                    (0, r.jsx)(u.F, {
                        setting: W.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                        children: (0, r.jsx)(w.Z, {})
                    }),
                    (0, r.jsxs)(u.F, {
                        setting: W.s6.VOICE_AND_VIDEO_MIC_TEST,
                        children: [
                            (0, r.jsx)(O.Z, {}),
                            (0, r.jsx)(o.R94, {
                                className: U.marginBottom20,
                                type: o.R94.Types.DESCRIPTION,
                                children: M.NW.format(M.t['V+B3FB'], { guideURL: V })
                            }),
                            (0, r.jsx)(o.$i$, { className: a()(U.marginBottom20) })
                        ]
                    }),
                    (0, r.jsx)(u.F, {
                        setting: W.s6.VOICE_AND_VIDEO_INPUT_MODE,
                        children: (0, r.jsx)(C.Z, {})
                    }),
                    (0, r.jsx)(u.F, {
                        setting: W.s6.VOICE_AND_VIDEO_SENSITIVITY,
                        children: e === B.pM.VOICE_ACTIVITY && (0, r.jsx)(Z.Z, {})
                    }),
                    (0, r.jsx)(o.$i$, { className: U.marginBottom40 })
                ]
            }),
            (0, r.jsx)(u.F, {
                setting: W.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, r.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: n
                })
            }),
            (0, r.jsx)(u.F, {
                setting: W.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, r.jsx)(_.Z, {})
            }),
            (0, r.jsxs)(u.F, {
                setting: W.s6.VOICE_AND_VIDEO_VIDEO,
                children: [
                    (0, r.jsx)('div', {
                        style: { scrollMarginTop: '48px' },
                        ref: s
                    }),
                    (0, r.jsx)(P.Z, {})
                ]
            }),
            (0, r.jsx)(u.F, {
                setting: W.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, r.jsxs)(o.y5t, {
                    component: (0, r.jsx)(o.vwX, {
                        tag: o.RB0.H1,
                        className: U.marginBottom20,
                        children: M.NW.string(M.t['8/udY2'])
                    }),
                    children: [
                        (0, r.jsx)(N.Z, {}),
                        (0, r.jsx)(R.Z, {}),
                        (0, r.jsx)(u.F, {
                            setting: W.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, r.jsx)(D.Z, {})
                        }),
                        (0, r.jsx)(y.Z, {}),
                        (0, r.jsx)(v.Z, {}),
                        (0, r.jsx)(b.Z, {}),
                        p && (0, r.jsx)(T.Z, {}),
                        (0, r.jsx)(x.Z, {}),
                        (0, r.jsx)(S.Z, {}),
                        (0, r.jsx)(I.Z, {}),
                        (0, r.jsx)(A.Z, { refreshStyles: !0 }),
                        (0, r.jsx)(o.$i$, { className: U.marginBottom40 }),
                        (0, r.jsx)(u.F, {
                            setting: W.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, r.jsx)(E.Z, {})
                        }),
                        (0, r.jsx)(u.F, {
                            setting: W.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, r.jsx)(o.xJW, {
                                children: (0, r.jsx)(o.zxk, {
                                    look: o.zxk.Looks.OUTLINED,
                                    color: o.zxk.Colors.RED,
                                    onClick: () => {
                                        (0, h.Z)(M.NW.string(M.t['/RXu6+']), M.NW.string(M.t.sQ42iY), c.Z.reset);
                                    },
                                    size: o.zxk.Sizes.SMALL,
                                    children: M.NW.string(M.t['/RXu6+'])
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
