n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(827734),
    s = n(397927),
    o = n(688810),
    d = n(587895),
    c = n(769015),
    u = n(640708),
    A = n(657331),
    h = n(287809),
    _ = n(427262),
    m = n(390848),
    g = n(513297),
    p = n(414711),
    E = n(723690),
    I = n(652215),
    f = n(985018),
    C = n(79676);
function T(e) {
    let { user: t, applicationId: n, isGameRelationship: l, active: o } = e,
        d = h.default.getCurrentUser()?.isStaff() && t?.isStaff(),
        { acceptFriendRequest: c, cancelFriendRequest: u } = (0, m.I)({
            userId: t.id,
            applicationId: n,
            isGameRelationship: l,
            location: "Friends",
        }),
        A = r.useCallback(
            (e) => {
                e.stopPropagation(), c();
            },
            [c],
        ),
        _ = r.useCallback(
            (e) => {
                e.stopPropagation(), u();
            },
            [u],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d &&
                (0, i.jsx)("div", {
                    className: C.ou,
                    children: (0, i.jsx)(s.LpS, {
                        color: a.A.unsafe_rawColors.BRAND_500.css,
                        text: f.intl.string(f.t.oMx98L),
                    }),
                }),
            (0, i.jsx)(g.A, {
                icon: s.A9s,
                actionType: g.A.ActionTypes.ACCEPT,
                tooltip: f.intl.string(f.t.Zcibdf),
                onClick: A,
                shouldHighlight: o,
            }),
            (0, i.jsx)(g.A, {
                icon: s.PGe,
                actionType: g.A.ActionTypes.DENY,
                tooltip: f.intl.string(f.t.xuio0C),
                onClick: _,
                shouldHighlight: o,
            }),
        ],
    });
}
function N(e) {
    let { userId: t, applicationId: n, isGameRelationship: l, active: a } = e,
        { cancelFriendRequest: o } = (0, m.I)({
            userId: t,
            applicationId: n,
            isGameRelationship: l,
            location: "Friends",
        }),
        d = r.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o],
        );
    return (0, i.jsx)(g.A, {
        icon: s.PGe,
        actionType: g.A.ActionTypes.DENY,
        tooltip: f.intl.string(f.t.eaq81S),
        onClick: d,
        shouldHighlight: a,
    });
}
function S(e) {
    let { isGameRelationship: t, applicationId: n, userTag: a, isProvisional: o } = e,
        A = r.useMemo(() => (t ? f.intl.string(f.t["Uv/eTx"]) : a), [t, a]),
        h = (0, l.bG)([d.A], () => (null != n ? d.A.getApplication(n) : null));
    return (0, i.jsxs)("div", {
        className: C.P9,
        children: [
            !o && (0, i.jsx)(s.Text, { variant: "text-sm/medium", color: "text-subtle", children: A }),
            null != h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        !o && (0, i.jsx)(u.A, { height: 2, width: 2 }),
                        (0, i.jsx)(c.A, { game: h, size: c.M.XXSMALL }),
                        (0, i.jsx)(s.Text, { variant: "text-sm/medium", color: "text-subtle", children: h.name }),
                    ],
                }),
        ],
    });
}
function x(e) {
    let { user: t, hovered: n, status: r, isGameRelationship: l, applicationId: a } = e,
        s = _.Ay.useUserTag(t);
    return (0, i.jsx)(E.A, {
        user: t,
        hovered: n,
        status: r,
        showAccountIdentifier: !l && !t.isProvisional,
        subText: (0, i.jsx)(S, { isGameRelationship: l, isProvisional: t.isProvisional, applicationId: a, userTag: s }),
    });
}
function v(e) {
    let { user: t, type: n, status: l, isFocused: a, applicationId: s, isGameRelationship: d } = e,
        { analyticsLocations: c } = (0, o.Ay)(),
        u = l === I.clD.OFFLINE ? I.clD.UNKNOWN : l,
        h = r.useCallback(() => (0, A.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: c }), [c, t.id]);
    return (0, i.jsx)(p.A, {
        isFocused: a,
        user: t,
        onClick: h,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: C.a4,
                children: [
                    (0, i.jsx)(x, { user: t, hovered: e, status: u, isGameRelationship: d, applicationId: s }),
                    (0, i.jsx)("div", {
                        className: C.o1,
                        children:
                            n === I.eA$.PENDING_INCOMING
                                ? (0, i.jsx)(T, { user: t, applicationId: s, isGameRelationship: d, active: e })
                                : (0, i.jsx)(N, { userId: t.id, applicationId: s, isGameRelationship: d, active: e }),
                    }),
                ],
            }),
    });
}
