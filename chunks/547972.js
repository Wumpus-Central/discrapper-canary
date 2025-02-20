n.d(t, { Z: () => l });
var r = n(230711),
    i = n(202527),
    o = n(332325),
    a = n(981631);
function s(e) {
    switch (e) {
        case o.Z.MY_GAMES:
            return a.oAB.REGISTERED_GAMES;
        case o.Z.CLIPS:
            return a.oAB.CLIPS;
        case o.Z.OVERLAY:
            return a.oAB.OVERLAY;
        case o.Z.ACTIVITY_PRIVACY:
            return a.oAB.ACTIVITY_PRIVACY;
    }
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldMergeGameSettings: n } = i.b.getCurrentConfig({ location: 'navigator' }, { autoTrackExposure: !1 });
    n ? r.Z.open(a.oAB.GAMES, e, t) : r.Z.open(s(e), null, t);
}
