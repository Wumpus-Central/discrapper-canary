n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(194359),
    s = n(906732),
    o = n(171368),
    c = n(626135),
    d = n(321488),
    u = n(417183),
    h = n(170245),
    m = n(981631),
    p = n(388032),
    g = n(821583);
function _(e) {
    let { user: t, key: n, isFocused: _ } = e,
        f = l.useContext(c.AnalyticsContext),
        { analyticsLocations: E } = (0, s.ZP)(),
        I = (e) => {
            e.stopPropagation(), a.Z.unblockUser(t.id, { location: 'Friends' });
        };
    return (0, i.jsx)(
        u.Z,
        {
            isFocused: _,
            onClick: () =>
                (0, o.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: E,
                    analyticsLocation: f.location
                }),
            user: t,
            children: (e) =>
                (0, i.jsxs)('div', {
                    className: g.listItemContents,
                    children: [
                        (0, i.jsx)(h.Z, {
                            user: t,
                            hovered: e,
                            status: m.Skl.UNKNOWN,
                            subText: p.intl.string(p.t['4bDptL'])
                        }),
                        (0, i.jsx)(d.Z, {
                            icon: r.I9k,
                            actionType: d.Z.ActionTypes.DENY,
                            tooltip: p.intl.string(p.t.XyHpKC),
                            onClick: I,
                            shouldHighlight: e
                        })
                    ]
                })
        },
        n
    );
}
