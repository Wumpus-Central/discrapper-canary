"use strict";
n.d(t, { A: () => m, T: () => h });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(803664),
    l = n(509302),
    u = n(460597),
    c = n(994500),
    d = n(403362),
    _ = n(183555),
    f = n(652215),
    p = n(985018);
function h(e) {
    let { user: t, analyticsLocation: n } = e,
        r = (0, a.bG)([c.A], () => c.A.getRelationshipType(t.id) === f.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: s } = (0, _.NJ)(),
        p = (0, o.A)({
            user: t,
            location: n,
            onFriendRemove: () => s({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => s({ action: "SEND_FRIEND_REQUEST" }),
        }),
        h = (0, l.A)({ user: t }),
        m = (0, u.A)({ user: t });
    return i.useMemo(() => [r ? null : p, h, m].filter(d.Vq), [h, p, r, m]);
}
function m(e) {
    let { menuItems: t, children: n, targetElementRef: i } = e;
    return (0, r.jsx)(s.YNO, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(s.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "user-profile-friend-request-buttons",
                onSelect: void 0,
                onClose: n,
                "aria-label": p.intl.string(p.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
