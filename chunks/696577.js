n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(692547),
    a = n(481060),
    s = n(194359),
    o = n(906732),
    c = n(171368),
    d = n(594174),
    u = n(626135),
    h = n(321488),
    m = n(417183),
    p = n(170245),
    g = n(981631),
    f = n(388032),
    _ = n(55945);
function E(e) {
    let { user: t, type: n, status: E, isFocused: I } = e,
        C = r.useContext(u.AnalyticsContext),
        { analyticsLocations: N } = (0, o.ZP)(),
        v = (e) => {
            e.stopPropagation(), s.Z.cancelFriendRequest(t.id, { location: 'Friends' });
        },
        S = (e) => {
            e.stopPropagation(),
                s.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'Friends' }
                });
        },
        T = E === g.Skl.OFFLINE ? g.Skl.UNKNOWN : E,
        b = n === g.OGo.PENDING_INCOMING ? f.intl.string(f.t.ZOFd1N) : f.intl.string(f.t.zz2i8v);
    return (0, i.jsx)(m.Z, {
        isFocused: I,
        user: t,
        onClick: () =>
            (0, c.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: N,
                analyticsLocation: C.location
            }),
        children: (e) => {
            var r;
            let s =
                n === g.OGo.PENDING_INCOMING
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (null === (r = d.default.getCurrentUser()) || void 0 === r ? void 0 : r.isStaff()) &&
                                  (null == t ? void 0 : t.isStaff()) &&
                                  (0, i.jsx)('div', {
                                      className: _.staffIndicator,
                                      children: (0, i.jsx)(a.TextBadge, {
                                          color: l.Z.unsafe_rawColors.BRAND_500.css,
                                          text: f.intl.string(f.t.oMx98P)
                                      })
                                  }),
                              (0, i.jsx)(h.Z, {
                                  icon: a.CheckmarkLargeIcon,
                                  actionType: h.Z.ActionTypes.ACCEPT,
                                  tooltip: f.intl.string(f.t.ZcibdX),
                                  onClick: S,
                                  shouldHighlight: e
                              }),
                              (0, i.jsx)(h.Z, {
                                  icon: a.XSmallIcon,
                                  actionType: h.Z.ActionTypes.DENY,
                                  tooltip: f.intl.string(f.t.xuio0N),
                                  onClick: v,
                                  shouldHighlight: e
                              })
                          ]
                      })
                    : (0, i.jsx)(h.Z, {
                          icon: a.XSmallIcon,
                          actionType: h.Z.ActionTypes.DENY,
                          tooltip: f.intl.string(f.t.eaq81d),
                          onClick: v,
                          shouldHighlight: e
                      });
            return (0, i.jsxs)('div', {
                className: _.listItemContents,
                children: [
                    (0, i.jsx)(p.Z, {
                        user: t,
                        hovered: e,
                        showAccountIdentifier: !0,
                        status: T,
                        subText: b
                    }),
                    (0, i.jsx)('div', {
                        className: _.actions,
                        children: s
                    })
                ]
            });
        }
    });
}
