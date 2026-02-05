n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(827734),
    s = n(397927),
    o = n(688810),
    d = n(587895),
    c = n(769015),
    u = n(640708),
    A = n(657331),
    h = n(287809),
    _ = n(427262),
    m = n(390848),
    p = n(513297),
    g = n(414711),
    E = n(723690),
    f = n(652215),
    I = n(985018),
    C = n(615078);
function N(e) {
    let { user: t, applicationId: n, isGameRelationship: a, active: o } = e,
        d = h.default.getCurrentUser()?.isStaff() && t?.isStaff(),
        { acceptFriendRequest: c, cancelFriendRequest: u } = (0, m.I)({
            userId: t.id,
            applicationId: n,
            isGameRelationship: a,
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
                        color: l.A.unsafe_rawColors.BRAND_500.css,
                        text: I.intl.string(I.t.oMx98L),
                    }),
                }),
            (0, i.jsx)(p.A, {
                icon: s.A9s,
                actionType: p.A.ActionTypes.ACCEPT,
                tooltip: I.intl.string(I.t.Zcibdf),
                onClick: A,
                shouldHighlight: o,
            }),
            (0, i.jsx)(p.A, {
                icon: s.PGe,
                actionType: p.A.ActionTypes.DENY,
                tooltip: I.intl.string(I.t.xuio0C),
                onClick: _,
                shouldHighlight: o,
            }),
        ],
    });
}
function T(e) {
    let { userId: t, applicationId: n, isGameRelationship: a, active: l } = e,
        { cancelFriendRequest: o } = (0, m.I)({
            userId: t,
            applicationId: n,
            isGameRelationship: a,
            location: "Friends",
        }),
        d = r.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o],
        );
    return (0, i.jsx)(p.A, {
        icon: s.PGe,
        actionType: p.A.ActionTypes.DENY,
        tooltip: I.intl.string(I.t.eaq81S),
        onClick: d,
        shouldHighlight: l,
    });
}
function S(e) {
    let { isGameRelationship: t, applicationId: n, userTag: l, isProvisional: o } = e,
        A = r.useMemo(() => (t ? I.intl.string(I.t["Uv/eTx"]) : l), [t, l]),
        h = (0, a.bG)([d.A], () => (null != n ? d.A.getApplication(n) : null));
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
    let { user: t, hovered: n, status: r, isGameRelationship: a, applicationId: l } = e,
        s = _.Ay.useUserTag(t);
    return (0, i.jsx)(E.A, {
        user: t,
        hovered: n,
        status: r,
        showAccountIdentifier: !a && !t.isProvisional,
        subText: (0, i.jsx)(S, { isGameRelationship: a, isProvisional: t.isProvisional, applicationId: l, userTag: s }),
    });
}
function v(e) {
    let { user: t, type: n, status: a, isFocused: l, applicationId: s, isGameRelationship: d } = e,
        { analyticsLocations: c } = (0, o.Ay)(),
        u = a === f.clD.OFFLINE ? f.clD.UNKNOWN : a,
        h = r.useCallback(() => (0, A.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: c }), [c, t.id]);
    return (0, i.jsx)(g.A, {
        isFocused: l,
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
                            n === f.eA$.PENDING_INCOMING
                                ? (0, i.jsx)(N, { user: t, applicationId: s, isGameRelationship: d, active: e })
                                : (0, i.jsx)(T, { userId: t.id, applicationId: s, isGameRelationship: d, active: e }),
                    }),
                ],
            }),
    });
}
