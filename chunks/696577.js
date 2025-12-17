n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(692547),
    o = n(481060),
    s = n(906732),
    c = n(812206),
    u = n(925329),
    d = n(79712),
    p = n(892001),
    f = n(594174),
    g = n(51144),
    h = n(743056),
    m = n(321488),
    b = n(417183),
    _ = n(170245),
    E = n(981631),
    O = n(388032),
    v = n(184607);
function y(e) {
    var t;
    let { user: n, applicationId: l, isGameRelationship: s, active: c } = e,
        u = (null == (t = f.default.getCurrentUser()) ? void 0 : t.isStaff()) && (null == n ? void 0 : n.isStaff()),
        { acceptFriendRequest: d, cancelFriendRequest: p } = (0, h.u)({
            userId: n.id,
            applicationId: l,
            isGameRelationship: s,
            location: "Friends",
        }),
        g = i.useCallback(
            (e) => {
                e.stopPropagation(), d();
            },
            [d],
        ),
        b = i.useCallback(
            (e) => {
                e.stopPropagation(), p();
            },
            [p],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)("div", {
                    className: v.staffIndicator,
                    children: (0, r.jsx)(o.IGR, {
                        color: a.Z.unsafe_rawColors.BRAND_500.css,
                        text: O.intl.string(O.t.oMx98L),
                    }),
                }),
            (0, r.jsx)(m.Z, {
                icon: o.dz2,
                actionType: m.Z.ActionTypes.ACCEPT,
                tooltip: O.intl.string(O.t.Zcibdf),
                onClick: g,
                shouldHighlight: c,
            }),
            (0, r.jsx)(m.Z, {
                icon: o.Dio,
                actionType: m.Z.ActionTypes.DENY,
                tooltip: O.intl.string(O.t.xuio0C),
                onClick: b,
                shouldHighlight: c,
            }),
        ],
    });
}
function I(e) {
    let { userId: t, applicationId: n, isGameRelationship: l, active: a } = e,
        { cancelFriendRequest: s } = (0, h.u)({
            userId: t,
            applicationId: n,
            isGameRelationship: l,
            location: "Friends",
        }),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), s();
            },
            [s],
        );
    return (0, r.jsx)(m.Z, {
        icon: o.Dio,
        actionType: m.Z.ActionTypes.DENY,
        tooltip: O.intl.string(O.t.eaq81S),
        onClick: c,
        shouldHighlight: a,
    });
}
function C(e) {
    let { isGameRelationship: t, applicationId: n, userTag: a, isProvisional: s } = e,
        p = i.useMemo(() => (t ? O.intl.string(O.t["Uv/eTx"]) : a), [t, a]),
        f = (0, l.e7)([c.Z], () => (null != n ? c.Z.getApplication(n) : null));
    return (0, r.jsxs)("div", {
        className: v.applicationSublabel,
        children: [
            !s &&
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: p,
                }),
            null != f &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        !s &&
                            (0, r.jsx)(d.Z, {
                                height: 2,
                                width: 2,
                            }),
                        (0, r.jsx)(u.Z, {
                            game: f,
                            size: u.A.XXSMALL,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: f.name,
                        }),
                    ],
                }),
        ],
    });
}
function S(e) {
    let { user: t, hovered: n, status: i, isGameRelationship: l, applicationId: a } = e,
        o = g.ZP.useUserTag(t);
    return (0, r.jsx)(_.Z, {
        user: t,
        hovered: n,
        status: i,
        showAccountIdentifier: !l && !t.isProvisional,
        subText: (0, r.jsx)(C, {
            isGameRelationship: l,
            isProvisional: t.isProvisional,
            applicationId: a,
            userTag: o,
        }),
    });
}
function T(e) {
    let { user: t, type: n, status: l, isFocused: a, applicationId: o, isGameRelationship: c } = e,
        { analyticsLocations: u } = (0, s.ZP)(),
        d = l === E.Skl.OFFLINE ? E.Skl.UNKNOWN : l,
        f = i.useCallback(
            () =>
                (0, p.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: u,
                }),
            [u, t.id],
        );
    return (0, r.jsx)(b.Z, {
        isFocused: a,
        user: t,
        onClick: f,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: v.listItemContents,
                children: [
                    (0, r.jsx)(S, {
                        user: t,
                        hovered: e,
                        status: d,
                        isGameRelationship: c,
                        applicationId: o,
                    }),
                    (0, r.jsx)("div", {
                        className: v.actions,
                        children:
                            n === E.OGo.PENDING_INCOMING
                                ? (0, r.jsx)(y, {
                                      user: t,
                                      applicationId: o,
                                      isGameRelationship: c,
                                      active: e,
                                  })
                                : (0, r.jsx)(I, {
                                      userId: t.id,
                                      applicationId: o,
                                      isGameRelationship: c,
                                      active: e,
                                  }),
                    }),
                ],
            }),
    });
}
