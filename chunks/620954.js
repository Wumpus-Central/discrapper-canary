i.d(e, {
    P: () => c,
    R: () => u
});
var n = i(13245),
    l = i(556296),
    s = i(237997),
    o = i(13140),
    r = i(145597),
    a = i(987650),
    d = i(981631);
function u(t, e) {
    return {
        trackView() {
            n.Z.track(d.rMx.NOTIFICATION_VIEWED, e), n.Z.notificationEvent(t, a.bv.Viewed);
        },
        trackClick(i) {
            let l = s.Z.isLocked((0, r.QF)()) ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY;
            n.Z.track(d.rMx.NOTIFICATION_CLICKED, {
                ...e,
                location: l,
                action_type: i
            }),
                n.Z.notificationEvent(t, a.bv.Clicked);
        }
    };
}
function c() {
    let t = l.Z.getOverlayKeybind();
    return null != t ? (0, o.BB)(t.shortcut, !0).split(' + ') : ['???'];
}
