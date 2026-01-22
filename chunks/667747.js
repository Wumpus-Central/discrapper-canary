n.d(t, {
    I: () => f,
    m: () => d,
});
var r = n(308528),
    i = n(711950),
    a = n(264686),
    s = n(793574),
    o = n(486020),
    l = n(652215),
    c = n(985018);
function u(e, t, n) {
    a.default.showNotification(
        o.Ay.getUserAvatarURL(e),
        e.username,
        t,
        {},
        {
            omitViewTracking: !0,
            omitClickTracking: !0,
            tag: e.id,
            onClick: n,
            isUserAvatar: !0,
        },
    );
}
function d(e) {
    u(e, c.intl.string(c.t["t3+Af3"]), () => {
        {
            let { openUserProfileModal: t } = n(657331);
            t({
                userId: e.id,
                sourceAnalyticsLocations: [s.A.FRIEND_REQUEST_NOTIFICATION],
            });
        }
        i.A.transitionToSection(l.m3P.PENDING, { explicit: !0 });
    });
}
function f(e) {
    u(e, c.intl.string(c.t.MYr3Ka), () => {
        r.A.openPrivateChannel({ recipientIds: e.id });
    });
}
