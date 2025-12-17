n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(194359),
    a = n(906732),
    o = n(388380),
    s = n(892001),
    c = n(321488),
    u = n(417183),
    d = n(170245),
    p = n(981631),
    f = n(388032),
    g = n(626019);
function h(e) {
    let { user: t, nickname: n, status: h, isFocused: m } = e,
        { analyticsLocations: b } = (0, a.ZP)(),
        _ = (e) => {
            null == e || e.stopPropagation(),
                l.Z.addRelationship({
                    userId: t.id,
                    context: { location: "Friends" },
                    type: void 0,
                    fromFriendSuggestion: !0,
                });
        },
        E = (e) => {
            null == e || e.stopPropagation(), o.Z.ignore(t.id);
        },
        O = h === p.Skl.OFFLINE ? p.Skl.UNKNOWN : h;
    return (0, r.jsx)(u.Z, {
        isFocused: m,
        user: t,
        onClick: () =>
            (0, s.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: b,
            }),
        children: (e) => {
            let l = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        icon: i.dz2,
                        actionType: c.Z.ActionTypes.ACCEPT,
                        tooltip: f.intl.string(f.t.Zcibdf),
                        onClick: _,
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
                className: g.listItemContents,
                children: [
                    (0, r.jsx)(d.Z, {
                        user: t,
                        hovered: e,
                        status: O,
                        subText: n,
                        className: g.__invalid_userInfo,
                    }),
                    (0, r.jsx)("div", {
                        className: g.actions,
                        children: l,
                    }),
                ],
            });
        },
    });
}
