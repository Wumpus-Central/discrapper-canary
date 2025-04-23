n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(194359),
    a = n(906732),
    o = n(388380),
    s = n(892001),
    c = n(321488),
    u = n(417183),
    d = n(170245),
    p = n(981631),
    h = n(388032),
    f = n(292568);
function g(e) {
    let { user: t, nickname: n, status: g, isFocused: m } = e,
        { analyticsLocations: b } = (0, a.ZP)(),
        _ = (e) => {
            null == e || e.stopPropagation(),
                l.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'Friends' },
                    type: void 0,
                    friendToken: void 0,
                    fromFriendSuggestion: !0
                });
        },
        E = (e) => {
            null == e || e.stopPropagation(), o.Z.ignore(t.id);
        },
        O = g === p.Skl.OFFLINE ? p.Skl.UNKNOWN : g;
    return (0, r.jsx)(u.Z, {
        isFocused: m,
        user: t,
        onClick: () =>
            (0, s.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: b
            }),
        children: (e) => {
            let l = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        icon: i.dz2,
                        actionType: c.Z.ActionTypes.ACCEPT,
                        tooltip: h.intl.string(h.t.ZcibdX),
                        onClick: _,
                        shouldHighlight: e
                    }),
                    (0, r.jsx)(c.Z, {
                        icon: i.Dio,
                        actionType: c.Z.ActionTypes.DENY,
                        tooltip: h.intl.string(h.t.xuio0N),
                        onClick: E,
                        shouldHighlight: e
                    })
                ]
            });
            return (0, r.jsxs)('div', {
                className: f.listItemContents,
                children: [
                    (0, r.jsx)(d.Z, {
                        user: t,
                        hovered: e,
                        status: O,
                        subText: n,
                        className: f.__invalid_userInfo
                    }),
                    (0, r.jsx)('div', {
                        className: f.actions,
                        children: l
                    })
                ]
            });
        }
    });
}
