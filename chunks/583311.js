n.d(t, { A: () => p, T: () => g });
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(265872),
    s = n(861672),
    o = n(803664),
    c = n(509302),
    u = n(460597),
    d = n(994500),
    m = n(403362),
    f = n(183555),
    x = n(652215),
    A = n(985018);
function g(e) {
    let { user: t, analyticsLocation: n } = e,
        l = (0, i.bG)([d.A], () => d.A.getRelationshipType(t.id) === x.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: a } = (0, f.NJ)(),
        s = (0, o.A)({
            user: t,
            location: n,
            onFriendRemove: () => a({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => a({ action: "SEND_FRIEND_REQUEST" }),
        }),
        A = (0, c.A)({ user: t }),
        g = (0, u.A)({ user: t });
    return r.useMemo(() => [l ? null : s, A, g].filter(m.Vq), [A, s, l, g]);
}
function p(e) {
    let { menuItems: t, children: n, targetElementRef: r } = e;
    return (0, l.jsx)(a.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(s.W, {
                "data-menu-migrated-auto": !0,
                navId: "user-profile-friend-request-buttons",
                onSelect: void 0,
                onClose: n,
                "aria-label": A.intl.string(A.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
