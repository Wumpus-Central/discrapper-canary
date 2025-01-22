r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(230711),
    a = r(202527),
    o = r(332325),
    s = r(981631);
function l(e) {
    switch (e) {
        case o.Z.MY_GAMES:
            return s.oAB.REGISTERED_GAMES;
        case o.Z.CLIPS:
            return s.oAB.CLIPS;
        case o.Z.OVERLAY:
            return s.oAB.OVERLAY;
        case o.Z.ACTIVITY_PRIVACY:
            return s.oAB.ACTIVITY_PRIVACY;
    }
}
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldMergeGameSettings: r } = a.b.getCurrentConfig({ location: 'navigator' }, { autoTrackExposure: !1 });
    r ? i.Z.open(s.oAB.GAMES, e, n) : i.Z.open(l(e), null, n);
}
