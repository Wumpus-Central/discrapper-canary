n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(692547),
    o = n(481060),
    s = n(906732),
    c = n(812206),
    u = n(925329),
    d = n(79712),
    p = n(171368),
    h = n(594174),
    f = n(51144),
    g = n(743056),
    m = n(321488),
    b = n(417183),
    _ = n(170245),
    E = n(981631),
    O = n(388032),
    y = n(53487);
function I(e) {
    var t;
    let { user: n, applicationId: l, isGameRelationship: s, active: c } = e,
        u = (null == (t = h.default.getCurrentUser()) ? void 0 : t.isStaff()) && (null == n ? void 0 : n.isStaff()),
        { acceptFriendRequest: d, cancelFriendRequest: p } = (0, g.u)({
            userId: n.id,
            applicationId: l,
            isGameRelationship: s,
            location: 'Friends'
        }),
        f = i.useCallback(
            (e) => {
                e.stopPropagation(), d();
            },
            [d]
        ),
        b = i.useCallback(
            (e) => {
                e.stopPropagation(), p();
            },
            [p]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)('div', {
                    className: y.staffIndicator,
                    children: (0, r.jsx)(o.IGR, {
                        color: a.Z.unsafe_rawColors.BRAND_500.css,
                        text: O.intl.string(O.t.oMx98P)
                    })
                }),
            (0, r.jsx)(m.Z, {
                icon: o.dz2,
                actionType: m.Z.ActionTypes.ACCEPT,
                tooltip: O.intl.string(O.t.ZcibdX),
                onClick: f,
                shouldHighlight: c
            }),
            (0, r.jsx)(m.Z, {
                icon: o.Dio,
                actionType: m.Z.ActionTypes.DENY,
                tooltip: O.intl.string(O.t.xuio0N),
                onClick: b,
                shouldHighlight: c
            })
        ]
    });
}
function v(e) {
    let { userId: t, applicationId: n, isGameRelationship: l, active: a } = e,
        { cancelFriendRequest: s } = (0, g.u)({
            userId: t,
            applicationId: n,
            isGameRelationship: l,
            location: 'Friends'
        }),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), s();
            },
            [s]
        );
    return (0, r.jsx)(m.Z, {
        icon: o.Dio,
        actionType: m.Z.ActionTypes.DENY,
        tooltip: O.intl.string(O.t.eaq81d),
        onClick: c,
        shouldHighlight: a
    });
}
function C(e) {
    let { isGameRelationship: t, applicationId: n, userTag: a, isProvisional: s } = e,
        p = i.useMemo(() => (t ? O.intl.string(O.t['Uv/eT0']) : a), [t, a]),
        h = (0, l.e7)([c.Z], () => (null != n ? c.Z.getApplication(n) : null));
    return (0, r.jsxs)('div', {
        className: y.applicationSublabel,
        children: [
            !s &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    children: p
                }),
            null != h &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        !s &&
                            (0, r.jsx)(d.Z, {
                                height: 2,
                                width: 2
                            }),
                        (0, r.jsx)(u.Z, {
                            game: h,
                            size: u.Z.Sizes.XXSMALL
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-secondary',
                            children: h.name
                        })
                    ]
                })
        ]
    });
}
function S(e) {
    let { user: t, hovered: n, status: i, isGameRelationship: l, applicationId: a } = e,
        o = f.ZP.useUserTag(t);
    return (0, r.jsx)(_.Z, {
        user: t,
        hovered: n,
        status: i,
        showAccountIdentifier: !l && !t.isProvisional,
        subText: (0, r.jsx)(C, {
            isGameRelationship: l,
            isProvisional: t.isProvisional,
            applicationId: a,
            userTag: o
        })
    });
}
function N(e) {
    let { user: t, type: n, status: l, isFocused: a, applicationId: o, isGameRelationship: c } = e,
        { analyticsLocations: u } = (0, s.ZP)(),
        d = l === E.Skl.OFFLINE ? E.Skl.UNKNOWN : l,
        h = i.useCallback(
            () =>
                (0, p.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: u
                }),
            [u, t.id]
        );
    return (0, r.jsx)(b.Z, {
        isFocused: a,
        user: t,
        onClick: h,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: y.listItemContents,
                children: [
                    (0, r.jsx)(S, {
                        user: t,
                        hovered: e,
                        status: d,
                        isGameRelationship: c,
                        applicationId: o
                    }),
                    (0, r.jsx)('div', {
                        className: y.actions,
                        children:
                            n === E.OGo.PENDING_INCOMING
                                ? (0, r.jsx)(I, {
                                      user: t,
                                      applicationId: o,
                                      isGameRelationship: c,
                                      active: e
                                  })
                                : (0, r.jsx)(v, {
                                      userId: t.id,
                                      applicationId: o,
                                      isGameRelationship: c,
                                      active: e
                                  })
                    })
                ]
            })
    });
}
