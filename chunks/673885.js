n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(481060),
    l = n(906732),
    s = n(171368),
    c = n(768581),
    d = n(51144),
    u = n(981631),
    m = n(388032),
    p = n(955069);
function f(e) {
    let { user: t, joinRequestId: n, className: a } = e,
        { username: f } = t,
        x = c.ZP.getUserAvatarURL(t),
        { analyticsLocations: h } = (0, l.ZP)(),
        b = () => {
            (0, s.openUserProfileModal)({
                userId: t.id,
                joinRequestId: n,
                sourceAnalyticsLocations: h,
                analyticsLocation: {
                    section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: u.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, r.jsxs)('div', {
        className: i()(p.container, a),
        children: [
            (0, r.jsx)(o.eee, {
                onClick: b,
                children: (0, r.jsx)(o.qEK, {
                    src: x,
                    size: o.EFr.SIZE_80,
                    'aria-label': f,
                    className: p.avatar
                })
            }),
            (0, r.jsx)('div', {
                className: p.username,
                children: (0, r.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    children: d.ZP.getFormattedName(t)
                })
            }),
            (0, r.jsx)(o.eee, {
                onClick: b,
                children: m.NW.string(m.t.iXAna2)
            })
        ]
    });
}
