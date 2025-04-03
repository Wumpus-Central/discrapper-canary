n.d(t, {
    SN: () => c,
    m_: () => d
});
var r = n(442837),
    i = n(818083),
    l = n(695346),
    o = n(885110),
    a = n(231338);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-02_activity_sharing_popout',
    label: 'Enables the rtc popout',
    defaultConfig: { rtcPopoutEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'RTC Popout',
            config: { rtcPopoutEnabled: !0 }
        }
    ]
});
function c(e) {
    return s.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
let u = (0, i.B)({
    kind: 'user',
    id: '2025-03_activity_sharing_popout_with_invisibility',
    label: 'Activity Sharing Popout with Invisibility',
    defaultConfig: { rtcPopoutEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable the RTC popout when the user is not sharing activity or is invisible',
            config: { rtcPopoutEnabled: !0 }
        }
    ]
});
function d(e) {
    let t = l.G6.useSetting(),
        n = (0, r.e7)([o.Z], () => o.Z.getStatus()),
        i = !t || n === a.Sk.INVISIBLE;
    return u.useExperiment(
        { location: e },
        {
            autoTrackExposure: !0,
            disable: !i
        }
    );
}
