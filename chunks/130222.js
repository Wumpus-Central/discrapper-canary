n.d(t, {
    Ay: () => I,
    Us: () => A,
    ls: () => O,
}),
    n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(582754),
    s = n(397927),
    o = n(827343),
    l = n(195043),
    c = n(347481),
    u = n(430452),
    d = n(954571),
    f = n(975571),
    p = n(544028),
    _ = n(772927),
    h = n(531525),
    m = n(652215),
    g = n(985018),
    E = n(856412);
let b = n(993830),
    y = n(413142);
var O = (function (e) {
    return (e.NONE = "NONE"), (e.STANDARD = "STANDARD"), (e.KRISP = "KRISP"), e;
})({});
let A = {
    page: m.liQ.USER_SETTINGS,
    section: m.JJy.SETTINGS_VOICE_AND_VIDEO,
};
function v(e) {
    let t = e.currentTarget;
    d.default.track(m.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: m.liQ.USER_SETTINGS,
            section: m.JJy.SETTINGS_VOICE_AND_VIDEO,
        },
    });
}
function S() {
    let e = (0, i.bG)([p.A], () => p.A.theme),
        {
            noiseCancellation: t,
            noiseSuppression: n,
            noiseSuppressionSupported: l,
            noiseCancellationSupported: c,
        } = (0, i.cf)([u.A], () => ({
            noiseCancellation: u.A.getNoiseCancellation(),
            noiseSuppression: u.A.getNoiseSuppression(),
            noiseSuppressionSupported: u.A.isNoiseSuppressionSupported(),
            noiseCancellationSupported: u.A.isNoiseCancellationSupported(),
        }));
    if (!l && !c) return null;
    let d = n ? "STANDARD" : "NONE",
        _ = t ? "KRISP" : d,
        h = [];
    return (
        c &&
            h.push({
                name: g.intl.string(g.t.rdoNzt),
                value: "KRISP",
            }),
        l &&
            h.push({
                name: g.intl.string(g.t.qXeYHw),
                value: "STANDARD",
            }),
        h.push({
            name: g.intl.string(g.t.wkYAlz),
            value: "NONE",
        }),
        (0, r.jsxs)(s.BJc, {
            gap: 8,
            children: [
                (0, r.jsx)(s.z6M, {
                    label: g.intl.string(g.t.t8Qhib),
                    description: g.intl.string(g.t.najZCV),
                    options: h,
                    onChange: (e) => {
                        o.A.setNoiseCancellation("KRISP" === e, A), o.A.setNoiseSuppression("STANDARD" === e, A);
                    },
                    value: _,
                }),
                c &&
                    (0, r.jsx)(s.ZpM, {
                        type: s.ZpM.Types.PRIMARY,
                        children: (0, r.jsxs)("div", {
                            className: E.C,
                            children: [
                                (0, r.jsx)("img", {
                                    src: (0, a.qB)(e) ? b : y,
                                    width: 70,
                                    height: 40,
                                    alt: "",
                                }),
                                (0, r.jsx)(s.MzZ, {
                                    href: f.A.getArticleURL(m.MVz.NOISE_SUPPRESSION),
                                    onClick: v,
                                    children: g.intl.string(g.t.hvVgAZ),
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
function I() {
    let {
            inputMode: e,
            inputDeviceId: t,
            echoCancellation: n,
            automaticGainControl: a,
            vadAutoThreshold: d,
            vadUseKrisp: f,
            bypassSystemInputProcessing: p,
        } = (0, i.cf)([u.A], () => ({
            inputMode: u.A.getMode(),
            inputDeviceId: u.A.getInputDeviceId(),
            echoCancellation: u.A.getEchoCancellation(),
            automaticGainControl: u.A.getAutomaticGainControl(),
            vadAutoThreshold: u.A.getModeOptions().autoThreshold,
            vadUseKrisp: u.A.getModeOptions().vadUseKrisp,
            bypassSystemInputProcessing: u.A.getBypassSystemInputProcessing(),
        })),
        {
            hasEchoCancellation: E,
            hasNoiseSuppression: b,
            hasAutomaticGainControl: y,
        } = (0, i.cf)(
            [c.A],
            () => ({
                hasEchoCancellation: c.A.hasEchoCancellation(t),
                hasNoiseSuppression: c.A.hasNoiseSuppression(t),
                hasAutomaticGainControl: c.A.hasAutomaticGainControl(t),
            }),
            [t],
        ),
        O = E || b || y,
        A = e === m.TBI.VOICE_ACTIVITY && d;
    return (0, r.jsxs)(_.A, {
        children: [
            O &&
                (0, r.jsx)(s.wx6, {
                    type: "info",
                    children: g.intl.string(g.t["/Whuzi"]),
                }),
            (0, r.jsx)(l.x, {
                setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, r.jsx)(s.dOG, {
                    label: g.intl.string(g.t.iWTwu6),
                    checked: n,
                    onChange: (e) =>
                        o.A.setEchoCancellation(e, {
                            page: m.liQ.USER_SETTINGS,
                            section: m.JJy.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: E,
                }),
            }),
            (0, r.jsx)(l.x, {
                setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, r.jsx)(S, {}),
            }),
            (0, r.jsx)(l.x, {
                setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, r.jsx)(s.dOG, {
                    label: g.intl.string(g.t.BbESsg),
                    description: g.intl.string(g.t.LoOB1F),
                    checked: f,
                    onChange: (t) => o.A.setMode(e, { vadUseKrisp: t }),
                    disabled: !A,
                }),
            }),
            (0, r.jsx)(l.x, {
                setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, r.jsx)(s.dOG, {
                    label: g.intl.string(g.t.cUMdH0),
                    description: g.intl.string(g.t["6EjbvA"]),
                    checked: a,
                    onChange: (e) =>
                        o.A.setAutomaticGainControl(e, {
                            page: m.liQ.USER_SETTINGS,
                            section: m.JJy.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: y,
                }),
            }),
            (0, r.jsx)(l.x, {
                setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
                children: (0, r.jsx)(s.dOG, {
                    label: g.intl.string(g.t.DFPXIG),
                    description: g.intl.string(g.t["UyRX+C"]),
                    checked: p,
                    onChange: (e) => {
                        o.A.setBypassSystemInputProcessing(e);
                    },
                }),
            }),
        ],
    });
}
