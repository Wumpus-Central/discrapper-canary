s.d(t, { default: () => f }), s(321073);
var i = s(627968),
    n = s(64700),
    a = s(110259),
    o = s(732955),
    r = s(397927),
    c = s(311907),
    l = s(49229),
    u = s(688810),
    _ = s(513297),
    d = s(414711),
    g = s(723690),
    h = s(657331),
    p = s(595623),
    m = s(652215),
    S = s(985018),
    E = s(464908);
function N(e) {
    let { user: t, status: s, ignoredUser: n } = e,
        { analyticsLocations: a } = (0, u.Ay)(),
        o = (e) => {
            e.stopPropagation(), l.A.cancelFriendRequest(t.id, { location: "Spam requests modal" });
        },
        c = (e) => {
            e.stopPropagation(), l.A.addRelationship({ userId: t.id, context: { location: "Spam requests modal" } });
        },
        p = s === m.clD.OFFLINE ? m.clD.UNKNOWN : s,
        N = n ? S.intl.string(S.t.pO68Oz) : S.intl.string(S.t["gp+Ytz"]);
    return (0, i.jsx)("div", {
        className: E.Bi,
        children: (0, i.jsx)(d.A, {
            isFocused: !1,
            user: t,
            className: E.Aw,
            activeClassName: E.vu,
            noBorder: !0,
            onClick: () => (0, h.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: a }),
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: E.a4,
                    children: [
                        (0, i.jsx)(g.A, { user: t, hovered: e, status: p, subText: N, className: E.eF }),
                        (0, i.jsxs)("div", {
                            className: E.o1,
                            children: [
                                (0, i.jsx)(_.A, {
                                    icon: r.A9s,
                                    actionType: _.A.ActionTypes.ACCEPT,
                                    tooltip: S.intl.string(S.t.Zcibdf),
                                    onClick: c,
                                    shouldHighlight: e,
                                }),
                                (0, i.jsx)(_.A, {
                                    icon: r.PGe,
                                    actionType: _.A.ActionTypes.DENY,
                                    tooltip: S.intl.string(S.t.xuio0C),
                                    onClick: o,
                                    shouldHighlight: e,
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function f(e) {
    let { transitionState: t, onClose: s } = e,
        { rows: r } = (0, c.cf)([p.Ay], () => p.Ay.getState()),
        u = r.filter(m.m3P.PENDING_IGNORED),
        _ = r.filter(m.m3P.SPAM),
        d = _.length + u.length;
    n.useEffect(() => {
        0 === d && s();
    }, [d, s]);
    let g = n.useCallback(() => {
            l.A.clearPendingSpamAndIgnored(), s();
        }, [s]),
        h = n.useMemo(() => {
            let e = [];
            return d > 1 && e.push({ text: S.intl.string(S.t.O8k7O4), onClick: g, variant: "secondary" }), e;
        }, [g, d]);
    return (0, i.jsx)(o.aFV, {
        title: S.intl.string(S.t.kaYqnm),
        subtitle: S.intl.string(S.t.tRxb4H),
        actions: h,
        trackingProps: { impression: { impressionName: a.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX } },
        onClose: s,
        transitionState: t,
        children: (0, i.jsxs)("div", {
            className: E.jE,
            children: [
                u.map((e) => (0, n.createElement)(N, { ...e, isFocused: !1, key: e.key, ignoredUser: !0 })),
                _.map((e) => (0, n.createElement)(N, { ...e, isFocused: !1, key: e.key })),
            ],
        }),
    });
}
