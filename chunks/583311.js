n.d(t, {
    A: () => m,
    T: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(803664),
    l = n(509302),
    c = n(460597),
    u = n(994500),
    d = n(403362),
    f = n(183555),
    p = n(652215),
    _ = n(985018);
function h(e) {
    let { user: t, analyticsLocation: n } = e,
        r = (0, a.bG)([u.A], () => u.A.getRelationshipType(t.id) === p.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: s } = (0, f.NJ)(),
        _ = (0, o.A)({
            user: t,
            location: n,
            onFriendRemove: () => s({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => s({ action: "SEND_FRIEND_REQUEST" }),
        }),
        h = (0, l.A)({ user: t }),
        m = (0, c.A)({ user: t });
    return i.useMemo(() => [r ? null : _, h, m].filter(d.Vq), [h, _, r, m]);
}
function m(e) {
    let { menuItems: t, children: n, targetElementRef: i } = e;
    return (0, r.jsx)(s.YNO, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(s.W1t, {
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
