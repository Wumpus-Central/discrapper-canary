n.d(t, {
    SI: () => d,
    nS: () => o
});
var i = n(81643),
    r = n(818083),
    s = n(128064);
let l = (0, r.B)({
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
    a = (0, r.B)({
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
    o = (e) => {
        let t = a.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            n = l.useExperiment({ location: e }, { autoTrackExposure: !1 });
        return t.dmOffByDefault || n.dmOffByDefault;
    },
    c = (e) => {
        let t = a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }),
            n = l.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
        return t.messageRequestOnByDefault || n.messageRequestOnByDefault || (0, s.c_)(e);
    },
    d = () => (0, i.sf)() && c('shouldAgeVerifyForDMDefaultOff');
