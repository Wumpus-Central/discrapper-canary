n.d(t, { Z: () => h });
var a = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    l = n(481060),
    o = n(906732),
    s = n(171368),
    c = n(768581),
    d = n(51144),
    u = n(981631),
    m = n(388032),
    x = n(161488);
function h(e) {
    let { user: t, joinRequestId: n, className: i } = e,
        { username: h } = t,
        _ = c.ZP.getUserAvatarURL(t),
        { analyticsLocations: p } = (0, o.ZP)(),
        f = () => {
            (0, s.openUserProfileModal)({
                userId: t.id,
                joinRequestId: n,
                sourceAnalyticsLocations: p,
                analyticsLocation: {
                    section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: u.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, a.jsxs)('div', {
        className: r()(x.container, i),
        children: [
            (0, a.jsx)(l.eee, {
                onClick: f,
                children: (0, a.jsx)(l.qEK, {
                    src: _,
                    size: l.EFr.SIZE_80,
                    'aria-label': h,
                    className: x.avatar
                })
            }),
            (0, a.jsx)('div', {
                className: x.username,
                children: (0, a.jsx)(l.X6q, {
                    variant: 'heading-lg/semibold',
                    children: d.ZP.getFormattedName(t)
                })
            }),
            (0, a.jsx)(l.eee, {
                onClick: f,
                children: m.intl.string(m.t.iXAna2)
            })
        ]
    });
}
