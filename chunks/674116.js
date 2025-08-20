n.d(t, { Z: () => Z });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(846027),
    l = n(230711),
    c = n(921801),
    u = n(131951),
    d = n(663389),
    f = n(63063),
    _ = n(680924),
    p = n(58765),
    h = n(429789),
    m = n(726763),
    g = n(208113),
    E = n(894939),
    b = n(710808),
    y = n(625205),
    O = n(325808),
    v = n(823087),
    I = n(232388),
    T = n(546997),
    S = n(186934),
    A = n(716210),
    C = n(520384),
    N = n(459674),
    R = n(167540),
    P = n(267006),
    w = n(803567),
    D = n(269876),
    x = n(976758),
    L = n(526761),
    j = n(726985),
    M = n(981631),
    k = n(65154),
    U = n(388032),
    G = n(197571);
let B = "".concat(
    f.Z.getArticleURL(M.BhN.VOICE_VIDEO_TROUBLESHOOTING),
    "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm",
);
function Z() {
    let { inputMode: e } = (0, a.cj)([u.Z], () => ({ inputMode: u.Z.getMode() })),
        t = (0, a.e7)([d.Z], () => d.Z.getSubsection()),
        n = i.useRef(null),
        f = i.useRef(null);
    i.useEffect(() => {
        var e, r;
        t === L.GA && (null == n || null == (e = n.current) || e.scrollIntoView(), l.Z.clearSubsection()),
            t === L.gP && (null == f || null == (r = f.current) || r.scrollIntoView(), l.Z.clearSubsection());
    }, [n, f, t]);
    let M = (0, p.Z)();
    return (0, r.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: U.intl.string(U.t.NiTd0d),
        children: [
            (0, r.jsxs)(c.F, {
                setting: j.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, r.jsx)(c.F, {
                        setting: j.s6.VOICE_AND_VIDEO_DEVICES,
                        children: (0, r.jsx)(y.Z, {}),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: j.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                        children: (0, r.jsx)(x.Z, {}),
                    }),
                    (0, r.jsxs)(c.F, {
                        setting: j.s6.VOICE_AND_VIDEO_MIC_TEST,
                        children: [
                            (0, r.jsx)(v.Z, {}),
                            (0, r.jsx)(o.R94, {
                                className: G.marginBottom20,
                                type: o.R94.Types.DESCRIPTION,
                                children: U.intl.format(U.t["V+B3FB"], { guideURL: B }),
                            }),
                            (0, r.jsx)(o.$i$, { className: G.marginBottom20 }),
                        ],
                    }),
                    (0, r.jsx)(c.F, {
                        setting: j.s6.VOICE_AND_VIDEO_INPUT_MODE,
                        children: (0, r.jsx)(O.Z, {}),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: j.s6.VOICE_AND_VIDEO_SENSITIVITY,
                        children: e === k.pM.VOICE_ACTIVITY && (0, r.jsx)(D.Z, {}),
                    }),
                    (0, r.jsx)(o.$i$, { className: G.marginBottom40 }),
                ],
            }),
            (0, r.jsx)(c.F, {
                setting: j.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, r.jsx)("div", {
                    style: { scrollMarginTop: "48px" },
                    ref: n,
                }),
            }),
            (0, r.jsx)(c.F, {
                setting: j.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, r.jsx)(E.Z, {}),
            }),
            (0, r.jsxs)(c.F, {
                setting: j.s6.VOICE_AND_VIDEO_VIDEO,
                children: [
                    (0, r.jsx)("div", {
                        style: { scrollMarginTop: "48px" },
                        ref: f,
                    }),
                    (0, r.jsx)(R.Z, {}),
                ],
            }),
            (0, r.jsx)(c.F, {
                setting: j.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, r.jsxs)(o.y5t, {
                    component: (0, r.jsx)(o.vwX, {
                        tag: o.RB0.H1,
                        className: G.marginBottom20,
                        children: U.intl.string(U.t["8/udY2"]),
                    }),
                    children: [
                        (0, r.jsx)(m.Z, {}),
                        (0, r.jsx)(P.Z, {}),
                        (0, r.jsx)(c.F, {
                            setting: j.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, r.jsx)(w.Z, {}),
                        }),
                        (0, r.jsx)(C.Z, {}),
                        (0, r.jsx)(I.Z, {}),
                        (0, r.jsx)(h.Z, {}),
                        M && (0, r.jsx)(S.Z, {}),
                        (0, r.jsx)(g.Z, {}),
                        (0, r.jsx)(T.Z, {}),
                        (0, r.jsx)(A.Z, {}),
                        (0, r.jsx)(N.Z, { refreshStyles: !0 }),
                        (0, r.jsx)(o.$i$, { className: G.marginBottom40 }),
                        (0, r.jsx)(c.F, {
                            setting: j.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, r.jsx)(b.Z, {}),
                        }),
                        (0, r.jsx)(c.F, {
                            setting: j.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, r.jsx)(o.xJW, {
                                children: (0, r.jsx)(o.zxk, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: U.intl.string(U.t["/RXu6+"]),
                                    onClick: () => {
                                        (0, _.Z)(U.intl.string(U.t["/RXu6+"]), U.intl.string(U.t.sQ42iY), s.Z.reset);
                                    },
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
