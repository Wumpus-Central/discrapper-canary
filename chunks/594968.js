n.d(t, { A: () => b });
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(827734),
    s = n(397927),
    o = n(308528),
    d = n(688810),
    c = n(587895),
    u = n(769015),
    A = n(640708),
    h = n(657331),
    _ = n(994500),
    m = n(287809),
    g = n(427262),
    p = n(390848),
    E = n(513297),
    I = n(414711),
    f = n(723690),
    C = n(652215),
    T = n(985018),
    N = n(79676);
function S(e) {
    let { user: t, applicationId: n, isGameRelationship: r, active: o, onAcceptFriendRequest: d } = e,
        [c, u] = a.useState(!1),
        A = m.default.getCurrentUser()?.isStaff() && t?.isStaff(),
        { acceptFriendRequest: h, cancelFriendRequest: _ } = (0, p.I)({
            userId: t.id,
            applicationId: n,
            isGameRelationship: r,
            location: "Friends",
            onFinally: () => {
                u(!1);
            },
        }),
        g = a.useCallback(
            (e) => {
                u(!0), e.stopPropagation(), d(), h();
            },
            [h, d],
        ),
        I = a.useCallback(
            (e) => {
                e.stopPropagation(), _();
            },
            [_],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            A &&
                (0, i.jsx)("div", {
                    className: N.ou,
                    children: (0, i.jsx)(s.LpS, {
                        color: l.A.unsafe_rawColors.BRAND_500.css,
                        text: T.intl.string(T.t.oMx98L),
                    }),
                }),
            (0, i.jsx)(E.A, {
                icon: s.A9s,
                actionType: E.A.ActionTypes.ACCEPT,
                tooltip: T.intl.string(T.t.Zcibdf),
                onClick: g,
                shouldHighlight: o,
                loading: c,
            }),
            (0, i.jsx)(E.A, {
                icon: s.PGe,
                actionType: E.A.ActionTypes.DENY,
                tooltip: T.intl.string(T.t.xuio0C),
                onClick: I,
                shouldHighlight: o,
            }),
        ],
    });
}
function x(e) {
    let { userId: t, applicationId: n, isGameRelationship: r, active: l } = e,
        { cancelFriendRequest: o } = (0, p.I)({
            userId: t,
            applicationId: n,
            isGameRelationship: r,
            location: "Friends",
        }),
        d = a.useCallback(
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
        shouldHighlight: l,
    });
}
function v(e) {
    let { isGameRelationship: t, applicationId: n, userTag: l, isProvisional: o } = e,
        d = a.useMemo(() => (t ? T.intl.string(T.t["Uv/eTx"]) : l), [t, l]),
        h = (0, r.bG)([c.A], () => (null != n ? c.A.getApplication(n) : null));
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
    let { user: t, hovered: n, status: a, isGameRelationship: r, applicationId: o, isFriend: d } = e,
        c = g.Ay.useUserTag(t);
    return (0, i.jsx)(f.A, {
        user: t,
        hovered: n,
        status: a,
        showAccountIdentifier: !1,
        subText: d
            ? (0, i.jsxs)("div", {
                  className: N.Tl,
                  children: [
                      (0, i.jsx)(s.Uzd, { size: "sm", color: l.A.colors.ICON_FEEDBACK_POSITIVE }),
                      (0, i.jsx)(s.Text, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          children: T.intl.string(T.t.bgL68y),
                      }),
                  ],
              })
            : (0, i.jsx)(v, { isGameRelationship: r, isProvisional: t.isProvisional, applicationId: o, userTag: c }),
    });
}
function b(e) {
    let {
            user: t,
            type: n,
            status: l,
            isFocused: c,
            applicationId: u,
            isGameRelationship: A,
            onAcceptFriendRequest: m,
        } = e,
        { analyticsLocations: g } = (0, d.Ay)(),
        p = l === C.clD.OFFLINE ? C.clD.UNKNOWN : l,
        E = (0, r.bG)([_.A], () => _.A.getRelationshipType(t.id)),
        f = a.useCallback(() => (0, h.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: g }), [g, t.id]),
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
                          (0, i.jsx)(y, {
                              user: t,
                              hovered: e,
                              status: p,
                              isGameRelationship: A,
                              applicationId: u,
                              isFriend: E === C.eA$.FRIEND,
                          }),
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
