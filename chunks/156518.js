n.d(t, {
    Y: () => m,
    Z: () => h,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(777658),
    l = n(44652),
    c = n(47091),
    u = n(699516),
    d = n(823379),
    f = n(785717),
    p = n(981631),
    _ = n(388032);
function m(e) {
    let { user: t, analyticsLocation: n } = e,
        r = (0, a.e7)([u.Z], () => u.Z.getRelationshipType(t.id) === p.OGo.PENDING_OUTGOING),
        { trackUserProfileAction: o } = (0, f.KZ)(),
        _ = (0, s.Z)({
            user: t,
            location: n,
            onFriendRemove: () => o({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => o({ action: "SEND_FRIEND_REQUEST" }),
        }),
        m = (0, l.Z)({ user: t }),
        h = (0, c.Z)({ user: t });
    return i.useMemo(() => [r ? null : _, m, h].filter(d.lm), [m, _, r, h]);
}
function h(e) {
    let { menuItems: t, children: n, targetElementRef: i } = e;
    return (0, r.jsx)(o.yRy, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(o.v2r, {
                navId: "user-profile-friend-request-buttons",
                onSelect: void 0,
                onClose: n,
                "aria-label": _.intl.string(_.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
