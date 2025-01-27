n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
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
    f = n(269245),
    _ = n(321488),
    E = n(417183),
    I = n(170245),
    C = n(981631),
    v = n(388032),
    N = n(55945);
function T(e) {
    var t;
    let { user: n, applicationId: l, isGameRelationship: o, active: c } = e,
        d = (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && (null == n ? void 0 : n.isStaff()),
        { acceptFriendRequest: u, cancelFriendRequest: h } = (0, f.u)({
            userId: n.id,
            applicationId: l,
            isGameRelationship: o,
            location: 'Friends'
        }),
        p = r.useCallback(
            (e) => {
                e.stopPropagation(), u();
            },
            [u]
        ),
        g = r.useCallback(
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
                    children: (0, i.jsx)(s.TextBadge, {
                        color: a.Z.unsafe_rawColors.BRAND_500.css,
                        text: v.intl.string(v.t.oMx98P)
                    })
                }),
            (0, i.jsx)(_.Z, {
                icon: s.CheckmarkLargeIcon,
                actionType: _.Z.ActionTypes.ACCEPT,
                tooltip: v.intl.string(v.t.ZcibdX),
                onClick: p,
                shouldHighlight: c
            }),
            (0, i.jsx)(_.Z, {
                icon: s.XSmallIcon,
                actionType: _.Z.ActionTypes.DENY,
                tooltip: v.intl.string(v.t.xuio0N),
                onClick: g,
                shouldHighlight: c
            })
        ]
    });
}
function S(e) {
    let { userId: t, applicationId: n, isGameRelationship: l, active: a } = e,
        { cancelFriendRequest: o } = (0, f.u)({
            userId: t,
            applicationId: n,
            isGameRelationship: l,
            location: 'Friends'
        }),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o]
        );
    return (0, i.jsx)(_.Z, {
        icon: s.XSmallIcon,
        actionType: _.Z.ActionTypes.DENY,
        tooltip: v.intl.string(v.t.eaq81d),
        onClick: c,
        shouldHighlight: a
    });
}
function b(e) {
    let { isGameRelationship: t, applicationId: n } = e,
        r = t ? v.intl.string(v.t.ujfP6e) : v.intl.string(v.t.yltuhY),
        a = (0, l.e7)([c.Z], () => (null != n ? c.Z.getApplication(n) : null));
    return (0, i.jsxs)('div', {
        className: N.applicationSublabel,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-xxs/medium',
                color: 'text-secondary',
                children: r
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
function A(e) {
    let { user: t, hovered: n, status: l, disambiguateGameFriends: a, isGameRelationship: s, applicationId: o } = e,
        c = g.ZP.useUserTag(t),
        d = !!a && !s,
        u = r.useMemo(
            () =>
                a
                    ? (0, i.jsx)(b, {
                          isGameRelationship: s,
                          applicationId: o
                      })
                    : c,
            [o, a, s, c]
        );
    return (0, i.jsx)(I.Z, {
        user: t,
        hovered: n,
        status: l,
        showAccountIdentifier: d,
        subText: u
    });
}
function Z(e) {
    let { user: t, type: n, status: l, isFocused: a, applicationId: s, disambiguateGameFriends: c, isGameRelationship: d } = e,
        u = r.useContext(p.AnalyticsContext),
        { analyticsLocations: m } = (0, o.ZP)(),
        g = l === C.Skl.OFFLINE ? C.Skl.UNKNOWN : l,
        f = r.useCallback(
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
        onClick: f,
        children: (e) =>
            (0, i.jsxs)('div', {
                className: N.listItemContents,
                children: [
                    (0, i.jsx)(A, {
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
