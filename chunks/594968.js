n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(827734),
    s = n(397927),
    o = n(688810),
    c = n(587895),
    u = n(769015),
    d = n(640708),
    p = n(657331),
    f = n(287809),
    h = n(427262),
    A = n(390848),
    g = n(513297),
    m = n(414711),
    b = n(723690),
    _ = n(652215),
    E = n(985018),
    O = n(615078);
function y(e) {
    var t;
    let { user: n, applicationId: l, isGameRelationship: o, active: c } = e,
        u = (null == (t = f.default.getCurrentUser()) ? void 0 : t.isStaff()) && (null == n ? void 0 : n.isStaff()),
        { acceptFriendRequest: d, cancelFriendRequest: p } = (0, A.I)({
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
        m = i.useCallback(
            (e) => {
                e.stopPropagation(), p();
            },
            [p],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)("div", {
                    className: O.ou,
                    children: (0, r.jsx)(s.LpS, {
                        color: a.A.unsafe_rawColors.BRAND_500.css,
                        text: E.intl.string(E.t.oMx98L),
                    }),
                }),
            (0, r.jsx)(g.A, {
                icon: s.A9s,
                actionType: g.A.ActionTypes.ACCEPT,
                tooltip: E.intl.string(E.t.Zcibdf),
                onClick: h,
                shouldHighlight: c,
            }),
            (0, r.jsx)(g.A, {
                icon: s.PGe,
                actionType: g.A.ActionTypes.DENY,
                tooltip: E.intl.string(E.t.xuio0C),
                onClick: m,
                shouldHighlight: c,
            }),
        ],
    });
}
function I(e) {
    let { userId: t, applicationId: n, isGameRelationship: l, active: a } = e,
        { cancelFriendRequest: o } = (0, A.I)({
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
    return (0, r.jsx)(g.A, {
        icon: s.PGe,
        actionType: g.A.ActionTypes.DENY,
        tooltip: E.intl.string(E.t.eaq81S),
        onClick: c,
        shouldHighlight: a,
    });
}
function v(e) {
    let { isGameRelationship: t, applicationId: n, userTag: a, isProvisional: o } = e,
        p = i.useMemo(() => (t ? E.intl.string(E.t["Uv/eTx"]) : a), [t, a]),
        f = (0, l.bG)([c.A], () => (null != n ? c.A.getApplication(n) : null));
    return (0, r.jsxs)("div", {
        className: O.P9,
        children: [
            !o &&
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: p,
                }),
            null != f &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        !o &&
                            (0, r.jsx)(d.A, {
                                height: 2,
                                width: 2,
                            }),
                        (0, r.jsx)(u.A, {
                            game: f,
                            size: u.M.XXSMALL,
                        }),
                        (0, r.jsx)(s.Text, {
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
        s = h.Ay.useUserTag(t);
    return (0, r.jsx)(b.A, {
        user: t,
        hovered: n,
        status: i,
        showAccountIdentifier: !l && !t.isProvisional,
        subText: (0, r.jsx)(v, {
            isGameRelationship: l,
            isProvisional: t.isProvisional,
            applicationId: a,
            userTag: s,
        }),
    });
}
function C(e) {
    let { user: t, type: n, status: l, isFocused: a, applicationId: s, isGameRelationship: c } = e,
        { analyticsLocations: u } = (0, o.Ay)(),
        d = l === _.clD.OFFLINE ? _.clD.UNKNOWN : l,
        f = i.useCallback(
            () =>
                (0, p.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: u,
                }),
            [u, t.id],
        );
    return (0, r.jsx)(m.A, {
        isFocused: a,
        user: t,
        onClick: f,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: O.a4,
                children: [
                    (0, r.jsx)(S, {
                        user: t,
                        hovered: e,
                        status: d,
                        isGameRelationship: c,
                        applicationId: s,
                    }),
                    (0, r.jsx)("div", {
                        className: O.o1,
                        children:
                            n === _.eA$.PENDING_INCOMING
                                ? (0, r.jsx)(y, {
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
