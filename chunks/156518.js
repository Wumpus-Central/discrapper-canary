n.d(t, {
    Y: () => h,
    Z: () => m
});
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(777658),
    l = n(44652),
    u = n(47091),
    c = n(699516),
    d = n(823379),
    f = n(785717),
    _ = n(981631),
    p = n(388032);
function h(e) {
    let { user: t, analyticsLocation: n } = e,
        i = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(t.id) === _.OGo.PENDING_OUTGOING),
        { trackUserProfileAction: s } = (0, f.KZ)(),
        p = (0, o.Z)({
            user: t,
            location: n,
            onFriendRemove: () => s({ action: 'REMOVE_FRIEND' }),
            onFriendRequestSent: () => s({ action: 'SEND_FRIEND_REQUEST' })
        }),
        h = (0, l.Z)({ user: t }),
        m = (0, u.Z)({ user: t });
    return r.useMemo(() => [i ? null : p, h, m].filter(d.lm), [h, p, i, m]);
}
function m(e) {
    let { menuItems: t, children: n } = e;
    return (0, i.jsx)(s.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(s.v2r, {
                navId: 'user-profile-friend-request-buttons',
                onSelect: void 0,
                onClose: n,
                'aria-label': p.intl.string(p.t.Jszi3N),
                children: t
            });
        },
        children: (e) => n(e)
    });
}
