n.d(t, {
    P: () => u,
    R: () => c
});
var i = n(13245),
    r = n(556296),
    l = n(237997),
    o = n(13140),
    a = n(145597),
    s = n(987650),
    d = n(981631);
function c(e, t) {
    return {
        trackView() {
            i.Z.track(d.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, s.bv.Viewed);
        },
        trackClick(n) {
            let r = l.Z.isLocked((0, a.QF)()) ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(d.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: r,
                action_type: n
            }),
                i.Z.notificationEvent(e, s.bv.Clicked);
        }
    };
}
function u() {
    let e = r.ZP.getOverlayKeybind();
    return null != e ? (0, o.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
