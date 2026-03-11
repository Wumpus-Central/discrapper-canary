n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(827734),
    s = n(397927),
    o = n(308528),
    d = n(688810),
    c = n(587895),
    u = n(769015),
    A = n(640708),
    h = n(657331),
    _ = n(994500),
    m = n(287809),
    p = n(427262),
    g = n(390848),
    E = n(513297),
    I = n(414711),
    f = n(723690),
    C = n(652215),
    T = n(985018),
    N = n(79676);
function S(e) {
    let { user: t, applicationId: n, isGameRelationship: l, active: o, onAcceptFriendRequest: d } = e,
        c = m.default.getCurrentUser()?.isStaff() && t?.isStaff(),
        { acceptFriendRequest: u, cancelFriendRequest: A } = (0, g.I)({
            userId: t.id,
            applicationId: n,
            isGameRelationship: l,
            location: "Friends",
            onConfirm: d,
        }),
        h = r.useCallback(
            (e) => {
                e.stopPropagation(), u();
            },
            [u],
        ),
        _ = r.useCallback(
            (e) => {
                e.stopPropagation(), A();
            },
            [A],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c &&
                (0, i.jsx)("div", {
                    className: N.ou,
                    children: (0, i.jsx)(s.LpS, {
                        color: a.A.unsafe_rawColors.BRAND_500.css,
                        text: T.intl.string(T.t.oMx98L),
                    }),
                }),
            (0, i.jsx)(E.A, {
                icon: s.A9s,
                actionType: E.A.ActionTypes.ACCEPT,
                tooltip: T.intl.string(T.t.Zcibdf),
                onClick: h,
                shouldHighlight: o,
            }),
            (0, i.jsx)(E.A, {
                icon: s.PGe,
                actionType: E.A.ActionTypes.DENY,
                tooltip: T.intl.string(T.t.xuio0C),
                onClick: _,
                shouldHighlight: o,
            }),
        ],
    });
}
function x(e) {
    let { userId: t, applicationId: n, isGameRelationship: l, active: a } = e,
        { cancelFriendRequest: o } = (0, g.I)({
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
    return (0, i.jsx)(E.A, {
        icon: s.PGe,
        actionType: E.A.ActionTypes.DENY,
        tooltip: T.intl.string(T.t.eaq81S),
        onClick: d,
        shouldHighlight: a,
    });
}
function v(e) {
    let { isGameRelationship: t, applicationId: n, userTag: a, isProvisional: o } = e,
        d = r.useMemo(() => (t ? T.intl.string(T.t["Uv/eTx"]) : a), [t, a]),
        h = (0, l.bG)([c.A], () => (null != n ? c.A.getApplication(n) : null));
    return (0, i.jsxs)("div", {
        className: N.P9,
        children: [
            !o && (0, i.jsx)(s.Text, { variant: "text-sm/medium", color: "text-subtle", children: d }),
            null != h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        !o && (0, i.jsx)(A.A, { height: 2, width: 2 }),
                        (0, i.jsx)(u.A, { game: h, size: u.M.XXSMALL }),
                        (0, i.jsx)(s.Text, { variant: "text-sm/medium", color: "text-subtle", children: h.name }),
                    ],
                }),
        ],
    });
}
function y(e) {
    let { user: t, hovered: n, status: r, isGameRelationship: l, applicationId: a } = e,
        s = p.Ay.useUserTag(t);
    return (0, i.jsx)(f.A, {
        user: t,
        hovered: n,
        status: r,
        showAccountIdentifier: !l && !t.isProvisional,
        subText: (0, i.jsx)(v, { isGameRelationship: l, isProvisional: t.isProvisional, applicationId: a, userTag: s }),
    });
}
function b(e) {
    let {
            user: t,
            type: n,
            status: a,
            isFocused: c,
            applicationId: u,
            isGameRelationship: A,
            onAcceptFriendRequest: m,
        } = e,
        { analyticsLocations: p } = (0, d.Ay)(),
        g = a === C.clD.OFFLINE ? C.clD.UNKNOWN : a,
        E = (0, l.bG)([_.A], () => _.A.getRelationshipType(t.id)),
        f = r.useCallback(() => (0, h.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: p }), [p, t.id]),
        T = (e) => {
            e.stopPropagation(), o.A.openPrivateChannel({ recipientIds: [t.id] });
        };
    return [C.eA$.PENDING_INCOMING, C.eA$.PENDING_OUTGOING, C.eA$.FRIEND].includes(E)
        ? (0, i.jsx)(I.A, {
              isFocused: c,
              user: t,
              onClick: f,
              children: (e) =>
                  (0, i.jsxs)("div", {
                      className: N.a4,
                      children: [
                          (0, i.jsx)(y, { user: t, hovered: e, status: g, isGameRelationship: A, applicationId: u }),
                          (0, i.jsx)("div", {
                              className: N.o1,
                              children:
                                  E === C.eA$.FRIEND
                                      ? (0, i.jsx)(s.Button, {
                                            text: "Message",
                                            variant: "secondary",
                                            icon: s.oyn,
                                            onClick: T,
                                        })
                                      : n === C.eA$.PENDING_INCOMING
                                        ? (0, i.jsx)(S, {
                                              user: t,
                                              applicationId: u,
                                              isGameRelationship: A,
                                              active: e,
                                              onAcceptFriendRequest: m,
                                          })
                                        : (0, i.jsx)(x, {
                                              userId: t.id,
                                              applicationId: u,
                                              isGameRelationship: A,
                                              active: e,
                                          }),
                          }),
                      ],
                  }),
          })
        : null;
}
