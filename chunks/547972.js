n.d(t, { Z: () => l });
var i = n(230711),
    r = n(202527),
    a = n(332325),
    s = n(981631);
function o(e) {
    switch (e) {
        case a.Z.MY_GAMES:
            return s.oAB.REGISTERED_GAMES;
        case a.Z.CLIPS:
            return s.oAB.CLIPS;
        case a.Z.OVERLAY:
            return s.oAB.OVERLAY;
        case a.Z.ACTIVITY_PRIVACY:
            return s.oAB.ACTIVITY_PRIVACY;
    }
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldMergeGameSettings: n } = r.b.getCurrentConfig({ location: 'navigator' }, { autoTrackExposure: !1 });
    n ? i.Z.open(s.oAB.GAMES, e, t) : i.Z.open(o(e), null, t);
}
