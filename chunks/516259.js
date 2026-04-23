i.d(t, { default: () => f }), i(321073);
var s = i(627968),
    n = i(64700),
    a = i(110259),
    r = i(189213),
    o = i(933832),
    l = i(789645),
    c = i(311907),
    u = i(49229),
    d = i(688810),
    h = i(513297),
    m = i(414711),
    p = i(723690),
    A = i(657331),
    N = i(595623),
    _ = i(652215),
    I = i(985018),
    g = i(452732);
function y(e) {
    let { user: t, status: i, ignoredUser: n } = e,
        { analyticsLocations: a } = (0, d.Ay)(),
        r = (e) => {
            e.stopPropagation(), u.A.cancelFriendRequest(t.id, { location: "Spam requests modal" });
        },
        c = (e) => {
            e.stopPropagation(), u.A.addRelationship({ userId: t.id, context: { location: "Spam requests modal" } });
        },
        N = i === _.clD.OFFLINE ? _.clD.UNKNOWN : i,
        y = n ? I.intl.string(I.t.pO68Oz) : I.intl.string(I.t["gp+Ytz"]);
    return (0, s.jsx)("div", {
        className: g.Bi,
        children: (0, s.jsx)(m.A, {
            isFocused: !1,
            user: t,
            className: g.Aw,
            activeClassName: g.vu,
            noBorder: !0,
            onClick: () => (0, A.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: a }),
            children: (e) =>
                (0, s.jsxs)("div", {
                    className: g.a4,
                    children: [
                        (0, s.jsx)(p.A, { user: t, hovered: e, status: N, subText: y, className: g.eF }),
                        (0, s.jsxs)("div", {
                            className: g.o1,
                            children: [
                                (0, s.jsx)(h.A, {
                                    icon: o.A,
                                    actionType: h.A.ActionTypes.ACCEPT,
                                    tooltip: I.intl.string(I.t.Zcibdf),
                                    onClick: c,
                                    shouldHighlight: e,
                                }),
                                (0, s.jsx)(h.A, {
                                    icon: l.P,
                                    actionType: h.A.ActionTypes.DENY,
                                    tooltip: I.intl.string(I.t.xuio0C),
                                    onClick: r,
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
    let { transitionState: t, onClose: i } = e,
        { rows: o } = (0, c.cf)([N.Ay], () => N.Ay.getState()),
        l = o.filter(_.m3P.PENDING_IGNORED),
        d = o.filter(_.m3P.SPAM),
        h = d.length + l.length;
    n.useEffect(() => {
        0 === h && i();
    }, [h, i]);
    let m = n.useCallback(() => {
            u.A.clearPendingSpamAndIgnored(), i();
        }, [i]),
        p = n.useMemo(() => {
            let e = [];
            return h > 1 && e.push({ text: I.intl.string(I.t.O8k7O4), onClick: m, variant: "secondary" }), e;
        }, [m, h]);
    return (0, s.jsx)(r.Modal, {
        title: I.intl.string(I.t.kaYqnm),
        subtitle: I.intl.string(I.t.tRxb4H),
        actions: p,
        trackingProps: { impression: { impressionName: a.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX } },
        onClose: i,
        transitionState: t,
        children: (0, s.jsxs)("div", {
            className: g.jE,
            children: [
                l.map((e) => (0, n.createElement)(y, { ...e, isFocused: !1, key: e.key, ignoredUser: !0 })),
                d.map((e) => (0, n.createElement)(y, { ...e, isFocused: !1, key: e.key })),
            ],
        }),
    });
}
