n.d(t, {
    SN: () => o,
    m_: () => a
});
var r = n(818083);
let i = (0, r.B)({
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
function o(e) {
    return i.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
let l = (0, r.B)({
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
function a(e) {
    return l.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
