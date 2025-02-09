n.d(t, {
    P: () => c,
    R: () => d
});
var i = n(13245),
    s = n(556296),
    l = n(237997),
    a = n(13140),
    r = n(981631),
    o = n(987650);
function d(e, t) {
    return {
        trackView() {
            i.Z.track(r.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, o.bv.Viewed);
        },
        trackClick(n) {
            let s = l.Z.isInstanceLocked() ? r.Sbl.LOCKED_OVERLAY : r.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(r.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: s,
                action_type: n
            }),
                i.Z.notificationEvent(e, o.bv.Clicked);
        }
    };
}
function c() {
    let e = s.ZP.getOverlayKeybind();
    return null != e ? (0, a.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
