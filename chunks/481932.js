r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(194359),
    u = r(906732),
    c = r(372460),
    d = r(91896),
    f = r(822972),
    p = r(314897),
    h = r(699516),
    _ = r(785717),
    m = r(475413),
    g = r(930945),
    E = r(228168),
    v = r(981631),
    y = r(388032);
function b(e) {
    let { user: n, analyticsLocation: r, shouldShowTooltip: a } = e,
        { trackUserProfileAction: o } = (0, _.KZ)(),
        l = (0, f.Z)({
            user: n,
            color: 'danger',
            location: r,
            onAction: () => o({ action: 'REMOVE_FRIEND' })
        });
    return (0, i.jsx)(s.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(s.Menu, {
                navId: 'user-profile-friend-request-buttons',
                onSelect: void 0,
                onClose: n,
                'aria-label': y.intl.string(y.t.Jszi3N),
                children: l
            });
        },
        children: (e) =>
            (0, i.jsx)(m.oY, {
                shouldShowTooltip: a,
                icon: s.UserCheckIcon,
                tooltipText: y.intl.string(y.t.TdEu5e),
                ...e
            })
    });
}
function I(e) {
    let { userId: n, friendToken: r, analyticsLocation: o, shouldShowTooltip: u } = e,
        c = a.useCallback(() => {
            l.Z.addRelationship({
                userId: n,
                friendToken: r,
                context: { location: o }
            });
        }, [o, r, n]);
    return (0, i.jsx)(m.oY, {
        action: 'SEND_FRIEND_REQUEST',
        icon: s.UserPlusIcon,
        tooltipText: y.intl.string(y.t.w5uwoK),
        shouldShowTooltip: u,
        onClick: c
    });
}
function T(e) {
    let { user: n, friendToken: r, profileType: a, shouldShowTooltip: l = !1 } = e,
        { newestAnalyticsLocation: f } = (0, u.ZP)(),
        _ = (0, c.wn)({ location: 'useFriendRequestButtonTooltip' }),
        T = (0, o.e7)([p.default], () => p.default.getId() === n.id),
        S = (0, o.e7)([h.Z], () => h.Z.getRelationshipType(n.id)),
        A = (0, o.Wu)([d.Z], () => d.Z.getGameFriendsForUser(n.id));
    if (null == n || n.bot || T || S === v.OGo.BLOCKED) return null;
    if (S === v.OGo.NONE && _ && 0 !== A.length)
        return (0, i.jsx)(g.Z, {
            userId: n.id,
            shouldShowTooltip: l
        });
    switch (S) {
        case v.OGo.FRIEND:
            return (0, i.jsx)(b, {
                user: n,
                analyticsLocation: f,
                shouldShowTooltip: l
            });
        case v.OGo.PENDING_INCOMING:
        case v.OGo.PENDING_OUTGOING:
            if (a === E.y0.FULL_SIZE) return null;
            return (0, i.jsx)(m.oY, {
                shouldShowTooltip: l,
                icon: s.UserClockIcon,
                tooltipText: y.intl.string(y.t.p6IHGB),
                disabled: !0
            });
        default:
            if (a === E.y0.FULL_SIZE) return null;
            return (0, i.jsx)(I, {
                userId: n.id,
                shouldShowTooltip: l,
                friendToken: r,
                analyticsLocation: f
            });
    }
}
