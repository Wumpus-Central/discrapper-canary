n.d(t, { Z: () => l });
var r = n(230711),
    i = n(202527),
    a = n(332325),
    o = n(981631);
function s(e) {
    switch (e) {
        case a.Z.MY_GAMES:
            return o.oAB.REGISTERED_GAMES;
        case a.Z.CLIPS:
            return o.oAB.CLIPS;
        case a.Z.OVERLAY:
            return o.oAB.OVERLAY;
        case a.Z.ACTIVITY_PRIVACY:
            return o.oAB.ACTIVITY_PRIVACY;
    }
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldMergeGameSettings: n } = i.b.getCurrentConfig({ location: 'navigator' }, { autoTrackExposure: !1 });
    n ? r.Z.open(o.oAB.GAMES, e, t) : r.Z.open(s(e), null, t);
}
