n.d(t, {
    P: () => c,
    R: () => d
});
var i = n(13245),
    s = n(556296),
    l = n(237997),
    a = n(13140),
    o = n(981631),
    r = n(987650);
function d(e, t) {
    return {
        trackView() {
            i.Z.track(o.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, r.bv.Viewed);
        },
        trackClick(n) {
            let s = l.Z.isInstanceLocked() ? o.Sbl.LOCKED_OVERLAY : o.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(o.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: s,
                action_type: n
            }),
                i.Z.notificationEvent(e, r.bv.Clicked);
        }
    };
}
function c() {
    let e = s.ZP.getOverlayKeybind();
    return null != e ? (0, a.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
