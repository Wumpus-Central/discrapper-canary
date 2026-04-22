n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(827734),
    r = n(777666),
    o = n(933832),
    c = n(789645),
    d = n(834730),
    u = n(478016),
    m = n(821609),
    A = n(534890),
    h = n(308528),
    x = n(688810),
    p = n(587895),
    g = n(769015),
    N = n(640708),
    f = n(657331),
    _ = n(994500),
    I = n(287809),
    v = n(954571),
    j = n(427262),
    C = n(390848),
    y = n(513297),
    S = n(414711),
    E = n(723690),
    T = n(652215),
    b = n(985018),
    P = n(525075);
function L(e) {
    let { user: t, applicationId: n, isGameRelationship: l, active: d, onAcceptFriendRequest: u } = e,
        [m, A] = s.useState(!1),
        h = I.default.getCurrentUser()?.isStaff() && t?.isStaff(),
        { acceptFriendRequest: x, cancelFriendRequest: p } = (0, C.I)({
            userId: t.id,
            applicationId: n,
            isGameRelationship: l,
            location: "Friends",
            onFinally: () => {
                A(!1);
            },
        }),
        g = s.useCallback(
            (e) => {
                A(!0), e.stopPropagation(), u(), x();
            },
            [x, u],
        ),
        N = s.useCallback(
            (e) => {
                e.stopPropagation(), p();
            },
            [p],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            h &&
                (0, i.jsx)("div", {
                    className: P.ou,
                    children: (0, i.jsx)(r.Lp, {
                        color: a.A.unsafe_rawColors.BRAND_500.css,
                        text: b.intl.string(b.t.oMx98L),
                    }),
                }),
            (0, i.jsx)(y.A, {
                icon: o.A,
                actionType: y.A.ActionTypes.ACCEPT,
                tooltip: b.intl.string(b.t.Zcibdf),
                onClick: g,
                shouldHighlight: d,
                loading: m,
            }),
            (0, i.jsx)(y.A, {
                icon: c.P,
                actionType: y.A.ActionTypes.DENY,
                tooltip: b.intl.string(b.t.xuio0C),
                onClick: N,
                shouldHighlight: d,
            }),
        ],
    });
}
function R(e) {
    let { userId: t, applicationId: n, isGameRelationship: l, active: a } = e,
        { cancelFriendRequest: r } = (0, C.I)({
            userId: t,
            applicationId: n,
            isGameRelationship: l,
            location: "Friends",
        }),
        o = s.useCallback(
            (e) => {
                e.stopPropagation(), r();
            },
            [r],
        );
    return (0, i.jsx)(y.A, {
        icon: c.P,
        actionType: y.A.ActionTypes.DENY,
        tooltip: b.intl.string(b.t.eaq81S),
        onClick: o,
        shouldHighlight: a,
    });
}
function D(e) {
    let { isGameRelationship: t, applicationId: n, userTag: a, isProvisional: r } = e,
        o = s.useMemo(() => (t ? b.intl.string(b.t["Uv/eTx"]) : a), [t, a]),
        c = (0, l.bG)([p.A], () => (null != n ? p.A.getApplication(n) : null));
    return (0, i.jsxs)("div", {
        className: P.P9,
        children: [
            !r && (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: o }),
            null != c &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        !r && (0, i.jsx)(N.A, { height: 2, width: 2 }),
                        (0, i.jsx)(g.A, { game: c, size: g.M.XXSMALL }),
                        (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: c.name }),
                    ],
                }),
        ],
    });
}
function O(e) {
    let { user: t, hovered: n, status: s, isGameRelationship: l, applicationId: r, isFriend: o } = e,
        c = j.Ay.useUserTag(t);
    return (0, i.jsx)(E.A, {
        user: t,
        hovered: n,
        status: s,
        showAccountIdentifier: !1,
        subText: o
            ? (0, i.jsxs)("div", {
                  className: P.Tl,
                  children: [
                      (0, i.jsx)(u.U, { size: "sm", color: a.A.colors.ICON_FEEDBACK_POSITIVE }),
                      (0, i.jsx)(d.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          children: b.intl.string(b.t.bgL68y),
                      }),
                  ],
              })
            : (0, i.jsx)(D, { isGameRelationship: l, isProvisional: t.isProvisional, applicationId: r, userTag: c }),
    });
}
function k(e) {
    let {
            user: t,
            type: n,
            status: a,
            isFocused: r,
            applicationId: o,
            isGameRelationship: c,
            onAcceptFriendRequest: d,
        } = e,
        { analyticsLocations: u } = (0, x.Ay)(),
        p = a === T.clD.OFFLINE ? T.clD.UNKNOWN : a,
        g = (0, l.bG)([_.A], () => _.A.getRelationshipType(t.id)),
        N = s.useCallback(() => (0, f.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: u }), [u, t.id]),
        I = (e) => {
            e.stopPropagation(),
                v.default.track(T.HAw.FRIEND_REQUEST_ACCEPT_MESSAGE_CLICKED),
                h.A.openPrivateChannel({ recipientIds: [t.id] });
        };
    return [T.eA$.PENDING_INCOMING, T.eA$.PENDING_OUTGOING, T.eA$.FRIEND].includes(g)
        ? (0, i.jsx)(S.A, {
              isFocused: r,
              user: t,
              analyticsLocations: u,
              onClick: N,
              children: (e) =>
                  (0, i.jsxs)("div", {
                      className: P.a4,
                      children: [
                          (0, i.jsx)(O, {
                              user: t,
                              hovered: e,
                              status: p,
                              isGameRelationship: c,
                              applicationId: o,
                              isFriend: g === T.eA$.FRIEND,
                          }),
                          (0, i.jsx)("div", {
                              className: P.o1,
                              children:
                                  g === T.eA$.FRIEND
                                      ? (0, i.jsx)(m.$, {
                                            text: "Message",
                                            variant: "secondary",
                                            icon: A.o,
                                            onClick: I,
                                        })
                                      : n === T.eA$.PENDING_INCOMING
                                        ? (0, i.jsx)(L, {
                                              user: t,
                                              applicationId: o,
                                              isGameRelationship: c,
                                              active: e,
                                              onAcceptFriendRequest: d,
                                          })
                                        : (0, i.jsx)(R, {
                                              userId: t.id,
                                              applicationId: o,
                                              isGameRelationship: c,
                                              active: e,
                                          }),
                          }),
                      ],
                  }),
          })
        : null;
}
