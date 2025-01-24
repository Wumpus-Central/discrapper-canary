n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(194359),
    s = n(906732),
    o = n(388380),
    c = n(171368),
    d = n(626135),
    u = n(321488),
    h = n(417183),
    m = n(170245),
    p = n(981631),
    g = n(388032),
    f = n(28504);
function _(e) {
    let { user: t, nickname: n, status: _, isFocused: E } = e,
        I = r.useContext(d.AnalyticsContext),
        { analyticsLocations: C } = (0, s.ZP)(),
        v = (e) => {
            null == e || e.stopPropagation(),
                a.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'Friends' },
                    type: void 0,
                    friendToken: void 0,
                    fromFriendSuggestion: !0
                });
        },
        N = (e) => {
            null == e || e.stopPropagation(), o.Z.ignore(t.id);
        },
        S = _ === p.Skl.OFFLINE ? p.Skl.UNKNOWN : _;
    return (0, i.jsx)(h.Z, {
        isFocused: E,
        user: t,
        onClick: () =>
            (0, c.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: C,
                analyticsLocation: I.location
            }),
        children: (e) => {
            let r = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(u.Z, {
                        icon: l.CheckmarkLargeIcon,
                        actionType: u.Z.ActionTypes.ACCEPT,
                        tooltip: g.intl.string(g.t.ZcibdX),
                        onClick: v,
                        shouldHighlight: e
                    }),
                    (0, i.jsx)(u.Z, {
                        icon: l.XSmallIcon,
                        actionType: u.Z.ActionTypes.DENY,
                        tooltip: g.intl.string(g.t.xuio0N),
                        onClick: N,
                        shouldHighlight: e
                    })
                ]
            });
            return (0, i.jsxs)('div', {
                className: f.listItemContents,
                children: [
                    (0, i.jsx)(m.Z, {
                        user: t,
                        hovered: e,
                        status: S,
                        subText: n,
                        className: f.__invalid_userInfo
                    }),
                    (0, i.jsx)('div', {
                        className: f.actions,
                        children: r
                    })
                ]
            });
        }
    });
}
