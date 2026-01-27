n.d(t, {
    A: () => m,
    g: () => p,
}),
    n(321073);
var r = n(627968),
    i = n(311907),
    l = n(397927),
    s = n(827343),
    a = n(195043),
    o = n(430452),
    c = n(593942),
    d = n(531525),
    u = n(731854),
    _ = n(985018);

function p(e, t, n) {
    let r = [
        {
            id: u.rB.STANDARD,
            value: u.rB.STANDARD,
            label: _.intl.string(_.t.dqb2JZ),
        },
    ];
    return (
        e &&
            r.push({
                id: u.rB.LEGACY,
                value: u.rB.LEGACY,
                label: _.intl.string(_.t["TYfH+5"]),
            }),
        t &&
            r.push({
                id: u.rB.EXPERIMENTAL,
                value: u.rB.EXPERIMENTAL,
                label: _.intl.string(_.t.liQmtr),
            }),
        n &&
            r.push({
                id: u.rB.AUTOMATIC,
                value: u.rB.AUTOMATIC,
                label: _.intl.string(_.t.qNgtO1),
            }),
        r
    );
}

function m() {
    let {
        audioSubsystem: e,
        legacyAudioSubsystemSupported: t,
        experimentalAudioSubsystemSupported: n,
        automaticAudioSubsystemSupported: m,
    } = (0, i.cf)([o.A], () => ({
        audioSubsystem: o.A.getAudioSubsystem(),
        legacyAudioSubsystemSupported: o.A.supports(u.O5.LEGACY_AUDIO_SUBSYSTEM),
        experimentalAudioSubsystemSupported: o.A.supports(u.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
        automaticAudioSubsystemSupported: o.A.supports(u.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
    }));
    return (0, r.jsx)(a.x, {
        setting: d.H.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
        children: (0, r.jsx)(l.l6P, {
            label: _.intl.string(_.t.wVBHr0),
            value: e,
            options: p(t, n, m),
            onSelectionChange: (e) => {
                (0, c.A)(_.intl.string(_.t.uY7AcQ), _.intl.string(_.t.gBqik6), () => s.A.setAudioSubsystem(e));
            },
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
}
