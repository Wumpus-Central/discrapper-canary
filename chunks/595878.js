r.d(n, {
    AK: function () {
        return s;
    },
    cG: function () {
        return a;
    },
    dR: function () {
        return o;
    },
    mK: function () {
        return l;
    },
    oY: function () {
        return u;
    }
});
var i = r(290031);
function a(e) {
    let { location: n } = e,
        { enableNitroTenureRewardCard: r } = i.OW.useExperiment({ location: n }, { autoTrackExposure: !1 }),
        { enabled: a } = i.Hd.useExperiment({ location: n });
    return r || a;
}
function o(e) {
    let { location: n } = e,
        { enableNitroTenureRewardCard: r } = i.OW.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }),
        { enabled: a } = i.Hd.getCurrentConfig({ location: n });
    return r || a;
}
function s(e) {
    let { location: n } = e,
        { enabled: r } = i.sg.useExperiment({ location: n }, { autoTrackExposure: !1 });
    return r;
}
function l(e) {
    let { location: n } = e,
        { enabled: r } = i.fR.useExperiment({ location: n }, { autoTrackExposure: !1 });
    return r;
}
function u(e) {
    let { location: n } = e,
        { enabled: r } = i.Hd.useExperiment({ location: n });
    return r;
}
