n.d(t, { Z: () => Z });
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
    N = n(388032),
    v = n(165392);
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
                shouldHighlight: c
            }),
            (0, i.jsx)(f.Z, {
                icon: s.Dio,
                actionType: f.Z.ActionTypes.DENY,
                tooltip: N.intl.string(N.t.xuio0N),
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
        tooltip: N.intl.string(N.t.eaq81d),
        onClick: c,
        shouldHighlight: a
    });
}
function b(e) {
    let { disambiguateGameRelationships: t, isGameRelationship: n, applicationId: a, userTag: o } = e,
        h = l.useMemo(() => (t ? (n ? N.intl.string(N.t.ujfP6e) : N.intl.string(N.t.yltuhY)) : o), [t, n, o]),
        m = (0, r.e7)([c.Z], () => (null != a ? c.Z.getApplication(a) : null));
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
                        (0, i.jsx)(d.Z, {
                            game: m,
                            size: d.Z.Sizes.XXSMALL
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
function A(e) {
    let { user: t, hovered: n, status: l, disambiguateGameRelationships: r, isGameRelationship: a, applicationId: s } = e,
        o = g.ZP.useUserTag(t);
    return (0, i.jsx)(I.Z, {
        user: t,
        hovered: n,
        status: l,
        showAccountIdentifier: !!r && !a,
        subText: (0, i.jsx)(b, {
            disambiguateGameRelationships: r,
            isGameRelationship: a,
            applicationId: s,
            userTag: o
        })
    });
}
function Z(e) {
    let { user: t, type: n, status: r, isFocused: a, applicationId: s, disambiguateGameRelationships: c, isGameRelationship: d } = e,
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
                    (0, i.jsx)(A, {
                        user: t,
                        hovered: e,
                        status: g,
                        disambiguateGameRelationships: c,
                        isGameRelationship: d,
                        applicationId: s
                    }),
                    (0, i.jsx)('div', {
                        className: v.actions,
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
