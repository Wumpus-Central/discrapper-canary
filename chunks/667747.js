"use strict";
n.d(t, { I: () => _, m: () => d });
var r = n(308528),
    i = n(711950),
    s = n(264686),
    a = n(793574),
    o = n(486020),
    l = n(652215),
    u = n(985018);
function c(e, t, n) {
    s.default.showNotification(
        o.Ay.getUserAvatarURL(e),
        e.username,
        t,
        {},
        { omitViewTracking: !0, omitClickTracking: !0, tag: e.id, onClick: n, isUserAvatar: !0 },
    );
}
function d(e) {
    c(e, u.intl.string(u.t["t3+Af3"]), () => {
        {
            let { openUserProfileModal: t } = n(657331);
            t({ userId: e.id, sourceAnalyticsLocations: [a.A.FRIEND_REQUEST_NOTIFICATION] });
        }
        i.A.transitionToSection(l.m3P.PENDING, { explicit: !0 });
    });
}
function _(e) {
    c(e, u.intl.string(u.t.MYr3Ka), () => {
        r.A.openPrivateChannel({ recipientIds: e.id });
    });
}
