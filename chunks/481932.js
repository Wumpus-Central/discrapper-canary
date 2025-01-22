r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(194359),
    l = r(906732),
    u = r(822972),
    c = r(314897),
    d = r(699516),
    f = r(785717),
    p = r(475413),
    h = r(228168),
    _ = r(981631),
    m = r(388032);
function g(e) {
    let { user: n, friendToken: r, profileType: g, shouldShowTooltip: E } = e,
        { newestAnalyticsLocation: v } = (0, l.ZP)(),
        { trackUserProfileAction: y } = (0, f.KZ)(),
        b = (0, a.e7)([c.default], () => c.default.getId() === (null == n ? void 0 : n.id)),
        I = (0, a.e7)([d.Z], () => (null != n ? d.Z.getRelationshipType(n.id) : _.OGo.NONE)),
        T = (0, u.Z)({
            user: n,
            color: 'danger',
            location: v,
            onAction: () => y({ action: 'REMOVE_FRIEND' })
        });
    if (null == n || n.bot || b || I === _.OGo.BLOCKED) return null;
    let S = () =>
            (0, i.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(o.Menu, {
                        navId: 'user-profile-friend-request-buttons',
                        onSelect: void 0,
                        onClose: n,
                        'aria-label': m.intl.string(m.t.Jszi3N),
                        children: T
                    });
                },
                children: (e) =>
                    (0, i.jsx)(p.oY, {
                        shouldShowTooltip: E,
                        icon: o.UserCheckIcon,
                        tooltipText: m.intl.string(m.t.TdEu5e),
                        ...e
                    })
            }),
        A = () =>
            g === h.y0.FULL_SIZE
                ? null
                : (0, i.jsx)(p.oY, {
                      shouldShowTooltip: E,
                      icon: o.UserClockIcon,
                      tooltipText: m.intl.string(m.t.p6IHGB),
                      disabled: !0
                  }),
        C = () =>
            g === h.y0.FULL_SIZE
                ? null
                : (0, i.jsx)(p.oY, {
                      shouldShowTooltip: E,
                      icon: o.UserClockIcon,
                      tooltipText: m.intl.string(m.t.p6IHGB),
                      disabled: !0
                  }),
        N = () =>
            g === h.y0.FULL_SIZE
                ? null
                : (0, i.jsx)(p.oY, {
                      action: 'SEND_FRIEND_REQUEST',
                      icon: o.UserPlusIcon,
                      tooltipText: m.intl.string(m.t.w5uwoK),
                      shouldShowTooltip: E,
                      onClick: () => {
                          s.Z.addRelationship({
                              userId: n.id,
                              friendToken: r,
                              context: { location: v }
                          });
                      }
                  });
    return I === _.OGo.FRIEND ? S() : I === _.OGo.PENDING_INCOMING ? A() : I === _.OGo.PENDING_OUTGOING ? C() : N();
}
