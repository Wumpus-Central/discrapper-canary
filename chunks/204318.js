n.d(t, {
    A: () => _,
    g: () => p,
}),
    n(321073);
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(827343),
    o = n(195043),
    l = n(430452),
    c = n(593942),
    u = n(531525),
    d = n(731854),
    f = n(985018);

function p(e, t, n) {
    let r = [
        {
            id: d.rB.STANDARD,
            value: d.rB.STANDARD,
            label: f.intl.string(f.t.dqb2JZ),
        },
    ];
    return (
        e &&
            r.push({
                id: d.rB.LEGACY,
                value: d.rB.LEGACY,
                label: f.intl.string(f.t["TYfH+5"]),
            }),
        t &&
            r.push({
                id: d.rB.EXPERIMENTAL,
                value: d.rB.EXPERIMENTAL,
                label: f.intl.string(f.t.liQmtr),
            }),
        n &&
            r.push({
                id: d.rB.AUTOMATIC,
                value: d.rB.AUTOMATIC,
                label: f.intl.string(f.t.qNgtO1),
            }),
        r
    );
}

function _() {
    let {
        audioSubsystem: e,
        legacyAudioSubsystemSupported: t,
        experimentalAudioSubsystemSupported: n,
        automaticAudioSubsystemSupported: _,
    } = (0, i.cf)([l.A], () => ({
        audioSubsystem: l.A.getAudioSubsystem(),
        legacyAudioSubsystemSupported: l.A.supports(d.O5.LEGACY_AUDIO_SUBSYSTEM),
        experimentalAudioSubsystemSupported: l.A.supports(d.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
        automaticAudioSubsystemSupported: l.A.supports(d.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
    }));
    return (0, r.jsx)(o.x, {
        setting: u.H.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
        children: (0, r.jsx)(a.l6P, {
            label: f.intl.string(f.t.wVBHr0),
            value: e,
            options: p(t, n, _),
            onSelectionChange: (e) => {
                let t = () => s.A.setAudioSubsystem(e);
                (0, c.A)(f.intl.string(f.t.uY7AcQ), f.intl.string(f.t.gBqik6), t);
            },
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
}
