n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(194359),
    a = n(906732),
    s = n(388380),
    o = n(892001),
    c = n(321488),
    u = n(417183),
    d = n(170245),
    p = n(981631),
    f = n(388032),
    h = n(715246);
function g(e) {
    let { user: t, nickname: n, status: g, isFocused: m } = e,
        { analyticsLocations: _ } = (0, a.ZP)(),
        b = (e) => {
            null == e || e.stopPropagation(),
                l.Z.addRelationship({
                    userId: t.id,
                    context: { location: "Friends" },
                    type: void 0,
                    fromFriendSuggestion: !0,
                });
        },
        E = (e) => {
            null == e || e.stopPropagation(), s.Z.ignore(t.id);
        },
        O = g === p.Skl.OFFLINE ? p.Skl.UNKNOWN : g;
    return (0, r.jsx)(u.Z, {
        isFocused: m,
        user: t,
        onClick: () =>
            (0, o.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: _,
            }),
        children: (e) => {
            let l = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        icon: i.dz2,
                        actionType: c.Z.ActionTypes.ACCEPT,
                        tooltip: f.intl.string(f.t.Zcibdf),
                        onClick: b,
                        shouldHighlight: e,
                    }),
                    (0, r.jsx)(c.Z, {
                        icon: i.Dio,
                        actionType: c.Z.ActionTypes.DENY,
                        tooltip: f.intl.string(f.t.xuio0C),
                        onClick: E,
                        shouldHighlight: e,
                    }),
                ],
            });
            return (0, r.jsxs)("div", {
                className: h.listItemContents,
                children: [
                    (0, r.jsx)(d.Z, {
                        user: t,
                        hovered: e,
                        status: O,
                        subText: n,
                        className: h.__invalid_userInfo,
                    }),
                    (0, r.jsx)("div", {
                        className: h.actions,
                        children: l,
                    }),
                ],
            });
        },
    });
}
