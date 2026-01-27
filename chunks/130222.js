n.d(t, {
    Ay: () => S,
    Us: () => C,
    ls: () => O,
}),
    n(321073);
var r,
    i = n(627968);
n(64700);
var l = n(311907),
    s = n(582754),
    a = n(397927),
    o = n(827343),
    c = n(195043),
    d = n(347481),
    u = n(430452),
    _ = n(954571),
    p = n(975571),
    m = n(544028),
    g = n(772927),
    A = n(531525),
    f = n(652215),
    h = n(985018),
    b = n(856412);
let E = n(993830),
    x = n(413142);
var O = (((r = {}).NONE = "NONE"), (r.STANDARD = "STANDARD"), (r.KRISP = "KRISP"), r);
let C = {
    page: f.liQ.USER_SETTINGS,
    section: f.JJy.SETTINGS_VOICE_AND_VIDEO,
};

function I(e) {
    let t = e.currentTarget;
    _.default.track(f.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: f.liQ.USER_SETTINGS,
            section: f.JJy.SETTINGS_VOICE_AND_VIDEO,
        },
    });
}

function T() {
    let e = (0, l.bG)([m.A], () => m.A.theme),
        {
            noiseCancellation: t,
            noiseSuppression: n,
            noiseSuppressionSupported: r,
            noiseCancellationSupported: c,
        } = (0, l.cf)([u.A], () => ({
            noiseCancellation: u.A.getNoiseCancellation(),
            noiseSuppression: u.A.getNoiseSuppression(),
            noiseSuppressionSupported: u.A.isNoiseSuppressionSupported(),
            noiseCancellationSupported: u.A.isNoiseCancellationSupported(),
        }));
    if (!r && !c) return null;
    let d = [];
    return (
        c &&
            d.push({
                name: h.intl.string(h.t.rdoNzt),
                value: "KRISP",
            }),
        r &&
            d.push({
                name: h.intl.string(h.t.qXeYHw),
                value: "STANDARD",
            }),
        d.push({
            name: h.intl.string(h.t.wkYAlz),
            value: "NONE",
        }),
        (0, i.jsxs)(a.BJc, {
            gap: 8,
            children: [
                (0, i.jsx)(a.z6M, {
                    label: h.intl.string(h.t.t8Qhib),
                    description: h.intl.string(h.t.najZCV),
                    options: d,
                    onChange: (e) => {
                        o.A.setNoiseCancellation("KRISP" === e, C), o.A.setNoiseSuppression("STANDARD" === e, C);
                    },
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                }),
                c &&
                    (0, i.jsx)(a.ZpM, {
                        type: a.ZpM.Types.PRIMARY,
                        children: (0, i.jsxs)("div", {
                            className: b.C,
                            children: [
                                (0, i.jsx)("img", {
                                    src: (0, s.qB)(e) ? E : x,
                                    width: 70,
                                    height: 40,
                                    alt: "",
                                }),
                                (0, i.jsx)(a.MzZ, {
                                    href: p.A.getArticleURL(f.MVz.NOISE_SUPPRESSION),
                                    onClick: I,
                                    children: h.intl.string(h.t.hvVgAZ),
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}

function S() {
    let {
            inputMode: e,
            inputDeviceId: t,
            echoCancellation: n,
            automaticGainControl: r,
            vadAutoThreshold: s,
            vadUseKrisp: _,
            bypassSystemInputProcessing: p,
        } = (0, l.cf)([u.A], () => ({
            inputMode: u.A.getMode(),
            inputDeviceId: u.A.getInputDeviceId(),
            echoCancellation: u.A.getEchoCancellation(),
            automaticGainControl: u.A.getAutomaticGainControl(),
            vadAutoThreshold: u.A.getModeOptions().autoThreshold,
            vadUseKrisp: u.A.getModeOptions().vadUseKrisp,
            bypassSystemInputProcessing: u.A.getBypassSystemInputProcessing(),
        })),
        {
            hasEchoCancellation: m,
            hasNoiseSuppression: b,
            hasAutomaticGainControl: E,
        } = (0, l.cf)(
            [d.A],
            () => ({
                hasEchoCancellation: d.A.hasEchoCancellation(t),
                hasNoiseSuppression: d.A.hasNoiseSuppression(t),
                hasAutomaticGainControl: d.A.hasAutomaticGainControl(t),
            }),
            [t],
        ),
        x = m || b || E,
        O = e === f.TBI.VOICE_ACTIVITY && s;
    return (0, i.jsxs)(g.A, {
        children: [
            x &&
                (0, i.jsx)(a.wx6, {
                    type: "info",
                    children: h.intl.string(h.t["/Whuzi"]),
                }),
            (0, i.jsx)(c.x, {
                setting: A.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, i.jsx)(a.dOG, {
                    label: h.intl.string(h.t.iWTwu6),
                    checked: n,
                    onChange: (e) =>
                        o.A.setEchoCancellation(e, {
                            page: f.liQ.USER_SETTINGS,
                            section: f.JJy.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: m,
                }),
            }),
            (0, i.jsx)(c.x, {
                setting: A.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, i.jsx)(T, {}),
            }),
            (0, i.jsx)(c.x, {
                setting: A.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, i.jsx)(a.dOG, {
                    label: h.intl.string(h.t.BbESsg),
                    description: h.intl.string(h.t.LoOB1F),
                    checked: _,
                    onChange: (t) =>
                        o.A.setMode(e, {
                            vadUseKrisp: t,
                        }),
                    disabled: !O,
                }),
            }),
            (0, i.jsx)(c.x, {
                setting: A.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, i.jsx)(a.dOG, {
                    label: h.intl.string(h.t.cUMdH0),
                    description: h.intl.string(h.t["6EjbvA"]),
                    checked: r,
                    onChange: (e) =>
                        o.A.setAutomaticGainControl(e, {
                            page: f.liQ.USER_SETTINGS,
                            section: f.JJy.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: E,
                }),
            }),
            (0, i.jsx)(c.x, {
                setting: A.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
                children: (0, i.jsx)(a.dOG, {
                    label: h.intl.string(h.t.DFPXIG),
                    description: h.intl.string(h.t["UyRX+C"]),
                    checked: p,
                    onChange: (e) => {
                        o.A.setBypassSystemInputProcessing(e);
                    },
                }),
            }),
        ],
    });
}
