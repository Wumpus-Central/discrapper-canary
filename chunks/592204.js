r.d(n, {
    Xo: function () {
        return s;
    },
    pB: function () {
        return l;
    }
});
var i = r(818083),
    a = r(517858);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-04_keyword_filter_experiment',
    label: 'Replace registered keywords with asterisks',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Keyword Filter',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let { location: n } = e,
        r = (0, a.C3)({ location: n });
    return o.useExperiment({ location: n }, { autoTrackExposure: !0 }).enabled || r;
}
function l(e) {
    let { location: n } = e,
        r = (0, a.GW)({ location: n });
    return o.getCurrentConfig({ location: n }).enabled || r;
}
