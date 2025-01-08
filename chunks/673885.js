n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(481060),
    l = n(906732),
    c = n(171368),
    s = n(768581),
    d = n(51144),
    u = n(981631),
    m = n(388032),
    f = n(64371);
function x(e) {
    let { user: t, joinRequestId: n, className: r } = e,
        { username: x } = t,
        b = s.ZP.getUserAvatarURL(t),
        { analyticsLocations: h } = (0, l.ZP)(),
        p = () => {
            (0, c.openUserProfileModal)({
                userId: t.id,
                joinRequestId: n,
                sourceAnalyticsLocations: h,
                analyticsLocation: {
                    section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: u.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, i.jsxs)('div', {
        className: a()(f.container, r),
        children: [
            (0, i.jsx)(o.Anchor, {
                onClick: p,
                children: (0, i.jsx)(o.Avatar, {
                    src: b,
                    size: o.AvatarSizes.SIZE_80,
                    'aria-label': x,
                    className: f.avatar
                })
            }),
            (0, i.jsx)('div', {
                className: f.username,
                children: (0, i.jsx)(o.Heading, {
                    variant: 'heading-lg/semibold',
                    children: d.ZP.getFormattedName(t)
                })
            }),
            (0, i.jsx)(o.Anchor, {
                onClick: p,
                children: m.intl.string(m.t.iXAna2)
            })
        ]
    });
}
