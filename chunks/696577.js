n.d(t, { Z: () => A });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(906732),
    c = n(812206),
    d = n(925329),
    u = n(79712),
    h = n(171368),
    m = n(594174),
    p = n(626135),
    g = n(51144),
    _ = n(743056),
    f = n(321488),
    E = n(417183),
    I = n(170245),
    C = n(981631),
    v = n(388032),
    N = n(55945);
function T(e) {
    var t;
    let { user: n, applicationId: r, isGameRelationship: o, active: c } = e,
        d = (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && (null == n ? void 0 : n.isStaff()),
        { acceptFriendRequest: u, cancelFriendRequest: h } = (0, _.u)({
            userId: n.id,
            applicationId: r,
            isGameRelationship: o,
            location: 'Friends'
        }),
        p = l.useCallback(
            (e) => {
                e.stopPropagation(), u();
            },
            [u]
        ),
        g = l.useCallback(
            (e) => {
                e.stopPropagation(), h();
            },
            [h]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d &&
                (0, i.jsx)('div', {
                    className: N.staffIndicator,
                    children: (0, i.jsx)(s.IGR, {
                        color: a.Z.unsafe_rawColors.BRAND_500.css,
                        text: v.intl.string(v.t.oMx98P)
                    })
                }),
            (0, i.jsx)(f.Z, {
                icon: s.dz2,
                actionType: f.Z.ActionTypes.ACCEPT,
                tooltip: v.intl.string(v.t.ZcibdX),
                onClick: p,
                shouldHighlight: c
            }),
            (0, i.jsx)(f.Z, {
                icon: s.Dio,
                actionType: f.Z.ActionTypes.DENY,
                tooltip: v.intl.string(v.t.xuio0N),
                onClick: g,
                shouldHighlight: c
            })
        ]
    });
}
function S(e) {
    let { userId: t, applicationId: n, isGameRelationship: r, active: a } = e,
        { cancelFriendRequest: o } = (0, _.u)({
            userId: t,
            applicationId: n,
            isGameRelationship: r,
            location: 'Friends'
        }),
        c = l.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o]
        );
    return (0, i.jsx)(f.Z, {
        icon: s.Dio,
        actionType: f.Z.ActionTypes.DENY,
        tooltip: v.intl.string(v.t.eaq81d),
        onClick: c,
        shouldHighlight: a
    });
}
function Z(e) {
    let { isGameRelationship: t, applicationId: n } = e,
        l = t ? v.intl.string(v.t.ujfP6e) : v.intl.string(v.t.yltuhY),
        a = (0, r.e7)([c.Z], () => (null != n ? c.Z.getApplication(n) : null));
    return (0, i.jsxs)('div', {
        className: N.applicationSublabel,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-xxs/medium',
                color: 'text-secondary',
                children: l
            }),
            null != a &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(u.Z, {
                            height: 2,
                            width: 2
                        }),
                        (0, i.jsx)(d.Z, {
                            game: a,
                            size: d.Z.Sizes.XXSMALL
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xxs/medium',
                            color: 'text-secondary',
                            children: a.name
                        })
                    ]
                })
        ]
    });
}
function x(e) {
    let { user: t, hovered: n, status: r, disambiguateGameFriends: a, isGameRelationship: s, applicationId: o } = e,
        c = g.ZP.useUserTag(t),
        d = !!a && !s,
        u = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(Z, {
                          isGameRelationship: s,
                          applicationId: o
                      })
                    : c,
            [o, a, s, c]
        );
    return (0, i.jsx)(I.Z, {
        user: t,
        hovered: n,
        status: r,
        showAccountIdentifier: d,
        subText: u
    });
}
function A(e) {
    let { user: t, type: n, status: r, isFocused: a, applicationId: s, disambiguateGameFriends: c, isGameRelationship: d } = e,
        u = l.useContext(p.AnalyticsContext),
        { analyticsLocations: m } = (0, o.ZP)(),
        g = r === C.Skl.OFFLINE ? C.Skl.UNKNOWN : r,
        _ = l.useCallback(
            () =>
                (0, h.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: m,
                    analyticsLocation: u.location
                }),
            [u.location, m, t.id]
        );
    return (0, i.jsx)(E.Z, {
        isFocused: a,
        user: t,
        onClick: _,
        children: (e) =>
            (0, i.jsxs)('div', {
                className: N.listItemContents,
                children: [
                    (0, i.jsx)(x, {
                        user: t,
                        hovered: e,
                        status: g,
                        disambiguateGameFriends: c,
                        isGameRelationship: d,
                        applicationId: s
                    }),
                    (0, i.jsx)('div', {
                        className: N.actions,
                        children:
                            n === C.OGo.PENDING_INCOMING
                                ? (0, i.jsx)(T, {
                                      user: t,
                                      applicationId: s,
                                      isGameRelationship: d,
                                      active: e
                                  })
                                : (0, i.jsx)(S, {
                                      userId: t.id,
                                      applicationId: s,
                                      isGameRelationship: d,
                                      active: e
                                  })
                    })
                ]
            })
    });
}
