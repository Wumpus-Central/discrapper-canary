n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(692547),
    a = n(481060),
    s = n(906732),
    o = n(171368),
    c = n(594174),
    d = n(626135),
    u = n(298213),
    h = n(321488),
    m = n(417183),
    p = n(170245),
    g = n(981631),
    f = n(388032),
    _ = n(55945);
function E(e) {
    let { user: t, type: n, status: E, isFocused: I, applicationId: C, isGameRelationship: N } = e,
        v = r.useContext(d.AnalyticsContext),
        { analyticsLocations: S } = (0, s.ZP)(),
        T = (e) => {
            e.stopPropagation(),
                u.Z.cancelFriendRequest({
                    userId: t.id,
                    applicationId: N ? C : null,
                    location: 'Friends'
                });
        },
        A = (e) => {
            e.stopPropagation(),
                u.Z.acceptFriendRequest({
                    userId: t.id,
                    applicationId: N ? C : null,
                    location: 'Friends'
                });
        },
        b = E === g.Skl.OFFLINE ? g.Skl.UNKNOWN : E,
        Z = n === g.OGo.PENDING_INCOMING ? f.intl.string(f.t.ZOFd1N) : f.intl.string(f.t.zz2i8v);
    return (0, i.jsx)(m.Z, {
        isFocused: I,
        user: t,
        onClick: () =>
            (0, o.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: S,
                analyticsLocation: v.location
            }),
        children: (e) => {
            var r;
            let s =
                n === g.OGo.PENDING_INCOMING
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (null === (r = c.default.getCurrentUser()) || void 0 === r ? void 0 : r.isStaff()) &&
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
                                  onClick: A,
                                  shouldHighlight: e
                              }),
                              (0, i.jsx)(h.Z, {
                                  icon: a.XSmallIcon,
                                  actionType: h.Z.ActionTypes.DENY,
                                  tooltip: f.intl.string(f.t.xuio0N),
                                  onClick: T,
                                  shouldHighlight: e
                              })
                          ]
                      })
                    : (0, i.jsx)(h.Z, {
                          icon: a.XSmallIcon,
                          actionType: h.Z.ActionTypes.DENY,
                          tooltip: f.intl.string(f.t.eaq81d),
                          onClick: T,
                          shouldHighlight: e
                      });
            return (0, i.jsxs)('div', {
                className: _.listItemContents,
                children: [
                    (0, i.jsx)(p.Z, {
                        user: t,
                        hovered: e,
                        showAccountIdentifier: !0,
                        status: b,
                        subText: Z
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
