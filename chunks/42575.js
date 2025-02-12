n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    r = n(481060),
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
    _ = n(290457);
function f(e) {
    let { user: t, nickname: n, status: f, isFocused: E } = e,
        I = l.useContext(d.AnalyticsContext),
        { analyticsLocations: C } = (0, s.ZP)(),
        N = (e) => {
            null == e || e.stopPropagation(),
                a.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'Friends' },
                    type: void 0,
                    friendToken: void 0,
                    fromFriendSuggestion: !0
                });
        },
        v = (e) => {
            null == e || e.stopPropagation(), o.Z.ignore(t.id);
        },
        T = f === p.Skl.OFFLINE ? p.Skl.UNKNOWN : f;
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
            let l = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(u.Z, {
                        icon: r.dz2,
                        actionType: u.Z.ActionTypes.ACCEPT,
                        tooltip: g.intl.string(g.t.ZcibdX),
                        onClick: N,
                        shouldHighlight: e
                    }),
                    (0, i.jsx)(u.Z, {
                        icon: r.Dio,
                        actionType: u.Z.ActionTypes.DENY,
                        tooltip: g.intl.string(g.t.xuio0N),
                        onClick: v,
                        shouldHighlight: e
                    })
                ]
            });
            return (0, i.jsxs)('div', {
                className: _.listItemContents,
                children: [
                    (0, i.jsx)(m.Z, {
                        user: t,
                        hovered: e,
                        status: T,
                        subText: n,
                        className: _.__invalid_userInfo
                    }),
                    (0, i.jsx)('div', {
                        className: _.actions,
                        children: l
                    })
                ]
            });
        }
    });
}
