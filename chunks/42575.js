n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(194359),
    o = n(906732),
    s = n(388380),
    c = n(171368),
    u = n(626135),
    d = n(321488),
    p = n(417183),
    h = n(170245),
    f = n(981631),
    g = n(388032),
    m = n(292568);
function b(e) {
    let { user: t, nickname: n, status: b, isFocused: _ } = e,
        E = i.useContext(u.AnalyticsContext),
        { analyticsLocations: O } = (0, o.ZP)(),
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
        y = (e) => {
            null == e || e.stopPropagation(), s.Z.ignore(t.id);
        },
        I = b === f.Skl.OFFLINE ? f.Skl.UNKNOWN : b;
    return (0, r.jsx)(p.Z, {
        isFocused: _,
        user: t,
        onClick: () =>
            (0, c.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: O,
                analyticsLocation: E.location
            }),
        children: (e) => {
            let i = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Z, {
                        icon: l.dz2,
                        actionType: d.Z.ActionTypes.ACCEPT,
                        tooltip: g.NW.string(g.t.ZcibdX),
                        onClick: N,
                        shouldHighlight: e
                    }),
                    (0, r.jsx)(d.Z, {
                        icon: l.Dio,
                        actionType: d.Z.ActionTypes.DENY,
                        tooltip: g.NW.string(g.t.xuio0N),
                        onClick: y,
                        shouldHighlight: e
                    })
                ]
            });
            return (0, r.jsxs)('div', {
                className: m.listItemContents,
                children: [
                    (0, r.jsx)(h.Z, {
                        user: t,
                        hovered: e,
                        status: I,
                        subText: n,
                        className: m.__invalid_userInfo
                    }),
                    (0, r.jsx)('div', {
                        className: m.actions,
                        children: i
                    })
                ]
            });
        }
    });
}
