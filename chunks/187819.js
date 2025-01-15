r.d(n, {
    _p: function () {
        return o;
    },
    hP: function () {
        return s;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-08_safety_settings_update',
    label: 'Safety Settings Update',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Safety Settings Update',
            config: { enabled: !0 }
        }
    ],
    commonTriggerPoint: a.$P.OPEN_USER_SETTINGS
});
function o(e) {
    let { location: n } = e,
        { enabled: r } = s.useExperiment({ location: n });
    return r;
}
