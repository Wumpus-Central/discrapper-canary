n.d(t, {
    SN: () => c,
    m_: () => d
});
var r = n(442837),
    i = n(818083),
    l = n(695346),
    o = n(885110),
    s = n(231338);
let a = (0, i.B)({
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
    return a.useExperiment({ location: e }, { autoTrackExposure: !0 });
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
        i = !t || n === s.Sk.INVISIBLE;
    return u.useExperiment(
        { location: e },
        {
            autoTrackExposure: !0,
            disable: !i
        }
    );
}
(0, i.B)({
    kind: 'user',
    id: '2025-05_activity_sharing_popout_per_server',
    label: 'Activity Sharing Popout Per Server',
    defaultConfig: {
        isEnabled: !1,
        showActivitySharingIndicatorWhenSharing: !1,
        autoOpenPopout: !1,
        settingsPageEnabled: !1,
        perServerControlsEnabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Manually opened RTC popout only when not sharing',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                autoOpenPopout: !1,
                settingsPageEnabled: !1,
                perServerControlsEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Manually opened RTC popout only when not sharing with settings page',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                autoOpenPopout: !1,
                settingsPageEnabled: !0,
                perServerControlsEnabled: !1
            }
        },
        {
            id: 3,
            label: 'Manually opened RTC popout with settings page',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !0,
                autoOpenPopout: !1,
                settingsPageEnabled: !0,
                perServerControlsEnabled: !1
            }
        },
        {
            id: 4,
            label: 'Auto-open RTC popout when not sharing with settings page',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                autoOpenPopout: !0,
                settingsPageEnabled: !0,
                perServerControlsEnabled: !1
            }
        },
        {
            id: 5,
            label: 'Auto-open RTC popout when not sharing with settings page and per server controls',
            config: {
                isEnabled: !0,
                showActivitySharingIndicatorWhenSharing: !1,
                autoOpenPopout: !0,
                settingsPageEnabled: !0,
                perServerControlsEnabled: !0
            }
        }
    ]
});
