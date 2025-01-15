n.d(t, {
    U: function () {
        return r;
    }
});
let i = (0, n(818083).B)({
    id: '2021-08_user_initiated_refunds',
    label: 'User Initiated Refunds',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Can refund',
            config: { enabled: !0 }
        }
    ]
});
function r() {
    let { enabled: e } = i.getCurrentConfig({ location: '70b634_1' }, { autoTrackExposure: !1 });
    return i.trackExposure({ location: '70b634_2' }), e;
}
