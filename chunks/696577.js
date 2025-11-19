n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(906732),
    c = n(812206),
    u = n(925329),
    d = n(79712),
    p = n(892001),
    f = n(594174),
    h = n(51144),
    g = n(743056),
    m = n(321488),
    _ = n(417183),
    b = n(170245),
    E = n(981631),
    O = n(388032),
    y = n(507694);
function v(e) {
    var t;
    let { user: n, applicationId: l, isGameRelationship: o, active: c } = e,
        u = (null == (t = f.default.getCurrentUser()) ? void 0 : t.isStaff()) && (null == n ? void 0 : n.isStaff()),
        { acceptFriendRequest: d, cancelFriendRequest: p } = (0, g.u)({
            userId: n.id,
            applicationId: l,
            isGameRelationship: o,
            location: "Friends",
        }),
        h = i.useCallback(
            (e) => {
                e.stopPropagation(), d();
            },
            [d],
        ),
        _ = i.useCallback(
            (e) => {
                e.stopPropagation(), p();
            },
            [p],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)("div", {
                    className: y.staffIndicator,
                    children: (0, r.jsx)(s.IGR, {
                        color: a.Z.unsafe_rawColors.BRAND_500.css,
                        text: O.intl.string(O.t.oMx98L),
                    }),
                }),
            (0, r.jsx)(m.Z, {
                icon: s.dz2,
                actionType: m.Z.ActionTypes.ACCEPT,
                tooltip: O.intl.string(O.t.Zcibdf),
                onClick: h,
                shouldHighlight: c,
            }),
            (0, r.jsx)(m.Z, {
                icon: s.Dio,
                actionType: m.Z.ActionTypes.DENY,
                tooltip: O.intl.string(O.t.xuio0C),
                onClick: _,
                shouldHighlight: c,
            }),
        ],
    });
}
function I(e) {
    let { userId: t, applicationId: n, isGameRelationship: l, active: a } = e,
        { cancelFriendRequest: o } = (0, g.u)({
            userId: t,
            applicationId: n,
            isGameRelationship: l,
            location: "Friends",
        }),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o],
        );
    return (0, r.jsx)(m.Z, {
        icon: s.Dio,
        actionType: m.Z.ActionTypes.DENY,
        tooltip: O.intl.string(O.t.eaq81S),
        onClick: c,
        shouldHighlight: a,
    });
}
function C(e) {
    let { isGameRelationship: t, applicationId: n, userTag: a, isProvisional: o } = e,
        p = i.useMemo(() => (t ? O.intl.string(O.t["Uv/eTx"]) : a), [t, a]),
        f = (0, l.e7)([c.Z], () => (null != n ? c.Z.getApplication(n) : null));
    return (0, r.jsxs)("div", {
        className: y.applicationSublabel,
        children: [
            !o &&
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    children: p,
                }),
            null != f &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        !o &&
                            (0, r.jsx)(d.Z, {
                                height: 2,
                                width: 2,
                            }),
                        (0, r.jsx)(u.Z, {
                            game: f,
                            size: u.A.XXSMALL,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: f.name,
                        }),
                    ],
                }),
        ],
    });
}
function S(e) {
    let { user: t, hovered: n, status: i, isGameRelationship: l, applicationId: a } = e,
        s = h.ZP.useUserTag(t);
    return (0, r.jsx)(b.Z, {
        user: t,
        hovered: n,
        status: i,
        showAccountIdentifier: !l && !t.isProvisional,
        subText: (0, r.jsx)(C, {
            isGameRelationship: l,
            isProvisional: t.isProvisional,
            applicationId: a,
            userTag: s,
        }),
    });
}
function T(e) {
    let { user: t, type: n, status: l, isFocused: a, applicationId: s, isGameRelationship: c } = e,
        { analyticsLocations: u } = (0, o.ZP)(),
        d = l === E.Skl.OFFLINE ? E.Skl.UNKNOWN : l,
        f = i.useCallback(
            () =>
                (0, p.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: u,
                }),
            [u, t.id],
        );
    return (0, r.jsx)(_.Z, {
        isFocused: a,
        user: t,
        onClick: f,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: y.listItemContents,
                children: [
                    (0, r.jsx)(S, {
                        user: t,
                        hovered: e,
                        status: d,
                        isGameRelationship: c,
                        applicationId: s,
                    }),
                    (0, r.jsx)("div", {
                        className: y.actions,
                        children:
                            n === E.OGo.PENDING_INCOMING
                                ? (0, r.jsx)(v, {
                                      user: t,
                                      applicationId: s,
                                      isGameRelationship: c,
                                      active: e,
                                  })
                                : (0, r.jsx)(I, {
                                      userId: t.id,
                                      applicationId: s,
                                      isGameRelationship: c,
                                      active: e,
                                  }),
                    }),
                ],
            }),
    });
}
