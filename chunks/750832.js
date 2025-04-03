n.d(t, {
    SI: () => c,
    nS: () => l
});
var r = n(81643),
    i = n(818083);
let s = (0, i.B)({
        kind: 'user',
        id: '2025-02_dm_defaults_new_users',
        label: 'Default DM Settings - New Users',
        defaultConfig: {
            enabled: !1,
            dmOffByDefault: !1,
            messageRequestOnByDefault: !1
        },
        treatments: [
            {
                id: 1,
                label: 'DM Off by Default',
                config: {
                    enabled: !0,
                    dmOffByDefault: !0,
                    messageRequestOnByDefault: !1
                }
            },
            {
                id: 2,
                label: 'Message Reqeust On by Default',
                config: {
                    enabled: !0,
                    dmOffByDefault: !1,
                    messageRequestOnByDefault: !0
                }
            }
        ]
    }),
    a = (0, i.B)({
        kind: 'user',
        id: '2025-02_dm_defaults',
        label: 'Default DM Settings',
        defaultConfig: {
            enabled: !1,
            dmOffByDefault: !1,
            messageRequestOnByDefault: !1
        },
        treatments: [
            {
                id: 1,
                label: 'DM Off by Default',
                config: {
                    enabled: !0,
                    dmOffByDefault: !0,
                    messageRequestOnByDefault: !1
                }
            },
            {
                id: 2,
                label: 'Message Reqeust On by Default',
                config: {
                    enabled: !0,
                    dmOffByDefault: !1,
                    messageRequestOnByDefault: !0
                }
            }
        ]
    }),
    l = (e) => {
        let t = a.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            n = s.useExperiment({ location: e }, { autoTrackExposure: !1 });
        return t.dmOffByDefault || n.dmOffByDefault;
    },
    o = (e) => {
        let t = a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }),
            n = s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
        return t.messageRequestOnByDefault || n.messageRequestOnByDefault;
    },
    c = () => (0, r.sf)() && o('shouldAgeVerifyForDMDefaultOff');
