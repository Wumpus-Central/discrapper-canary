r.d(n, {
    T: function () {
        return o;
    },
    s: function () {
        return s;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    id: '2025-01_valentines_gifting_2025',
    label: 'Valentines Gifting 2025',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable Valentines Gifting Promotion',
            config: { enabled: !0 }
        }
    ]
});
function o() {
    let { enabled: e } = s.useExperiment({ location: 'useIsValentinesGiftingActive' }, { autoTrackExposure: !1 });
    return e;
}
