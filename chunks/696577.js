n.d(t, { Z: () => x });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(906732),
    d = n(812206),
    c = n(925329),
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
    N = n(388032),
    v = n(715137);
function T(e) {
    var t;
    let { user: n, applicationId: r, isGameRelationship: o, active: d } = e,
        c = (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && (null == n ? void 0 : n.isStaff()),
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
            c &&
                (0, i.jsx)('div', {
                    className: v.staffIndicator,
                    children: (0, i.jsx)(s.IGR, {
                        color: a.Z.unsafe_rawColors.BRAND_500.css,
                        text: N.intl.string(N.t.oMx98P)
                    })
                }),
            (0, i.jsx)(f.Z, {
                icon: s.dz2,
                actionType: f.Z.ActionTypes.ACCEPT,
                tooltip: N.intl.string(N.t.ZcibdX),
                onClick: p,
                shouldHighlight: d
            }),
            (0, i.jsx)(f.Z, {
                icon: s.Dio,
                actionType: f.Z.ActionTypes.DENY,
                tooltip: N.intl.string(N.t.xuio0N),
                onClick: g,
                shouldHighlight: d
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
        d = l.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o]
        );
    return (0, i.jsx)(f.Z, {
        icon: s.Dio,
        actionType: f.Z.ActionTypes.DENY,
        tooltip: N.intl.string(N.t.eaq81d),
        onClick: d,
        shouldHighlight: a
    });
}
function A(e) {
    let { disambiguateGameRelationships: t, isGameRelationship: n, applicationId: a, userTag: o } = e,
        h = l.useMemo(() => (t ? (n ? N.intl.string(N.t.ujfP6e) : N.intl.string(N.t.yltuhY)) : o), [t, n, o]),
        m = (0, r.e7)([d.Z], () => (null != a ? d.Z.getApplication(a) : null));
    return (0, i.jsxs)('div', {
        className: v.applicationSublabel,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/medium',
                color: 'text-secondary',
                children: h
            }),
            null != m &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(u.Z, {
                            height: 2,
                            width: 2
                        }),
                        (0, i.jsx)(c.Z, {
                            game: m,
                            size: c.Z.Sizes.XXSMALL
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            children: m.name
                        })
                    ]
                })
        ]
    });
}
function Z(e) {
    let { user: t, hovered: n, status: l, disambiguateGameRelationships: r, isGameRelationship: a, applicationId: s } = e,
        o = g.ZP.useUserTag(t);
    return (0, i.jsx)(I.Z, {
        user: t,
        hovered: n,
        status: l,
        showAccountIdentifier: !!r && !a,
        subText: (0, i.jsx)(A, {
            disambiguateGameRelationships: r,
            isGameRelationship: a,
            applicationId: s,
            userTag: o
        })
    });
}
function x(e) {
    let { user: t, type: n, status: r, isFocused: a, applicationId: s, disambiguateGameRelationships: d, isGameRelationship: c } = e,
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
                className: v.listItemContents,
                children: [
                    (0, i.jsx)(Z, {
                        user: t,
                        hovered: e,
                        status: g,
                        disambiguateGameRelationships: d,
                        isGameRelationship: c,
                        applicationId: s
                    }),
                    (0, i.jsx)('div', {
                        className: v.actions,
                        children:
                            n === C.OGo.PENDING_INCOMING
                                ? (0, i.jsx)(T, {
                                      user: t,
                                      applicationId: s,
                                      isGameRelationship: c,
                                      active: e
                                  })
                                : (0, i.jsx)(S, {
                                      userId: t.id,
                                      applicationId: s,
                                      isGameRelationship: c,
                                      active: e
                                  })
                    })
                ]
            })
    });
}
