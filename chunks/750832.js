n.d(t, {
    SI: () => c,
    nS: () => a
});
var i = n(81643),
    r = n(818083);
let s = (0, r.B)({
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
    l = (0, r.B)({
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
    a = (e) => {
        let t = l.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            n = s.useExperiment({ location: e }, { autoTrackExposure: !1 });
        return t.dmOffByDefault || n.dmOffByDefault;
    },
    o = (e) => {
        let t = l.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }),
            n = s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
        return t.messageRequestOnByDefault || n.messageRequestOnByDefault;
    },
    c = () => (0, i.sf)() && o('shouldAgeVerifyForDMDefaultOff');
