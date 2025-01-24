i.d(e, {
    P: function () {
        return c;
    },
    R: function () {
        return d;
    }
});
var n = i(13245),
    l = i(556296),
    o = i(237997),
    r = i(13140),
    s = i(145597),
    a = i(987650),
    u = i(981631);
function d(t, e) {
    return {
        trackView() {
            n.Z.track(u.rMx.NOTIFICATION_VIEWED, e), n.Z.notificationEvent(t, a.bv.Viewed);
        },
        trackClick(i) {
            let l = o.Z.isLocked((0, s.QF)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY;
            n.Z.track(u.rMx.NOTIFICATION_CLICKED, {
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
    return null != t ? (0, r.BB)(t.shortcut, !0).split(' + ') : ['???'];
}
