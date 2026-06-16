s.d(t, { default: () => C }), s(321073);
var i = s(627968),
    n = s(64700),
    a = s(562708),
    o = s(189213),
    l = s(933832),
    r = s(789645),
    c = s(17928),
    d = s(717398),
    u = s(688810),
    p = s(513297),
    m = s(414711),
    h = s(723690),
    g = s(975732),
    A = s(595623),
    N = s(652215),
    k = s(375708),
    x = s(452732);
function y(e) {
    let { user: t, status: s, ignoredUser: n } = e,
        { analyticsLocations: a } = (0, u.Ay)(),
        o = (e) => {
            e.stopPropagation(), d.A.cancelFriendRequest(t.id, { location: "Spam requests modal" });
        },
        c = (e) => {
            e.stopPropagation(), d.A.addRelationship({ userId: t.id, context: { location: "Spam requests modal" } });
        },
        A = s === N.clD.OFFLINE ? N.clD.UNKNOWN : s,
        y = n ? k.intl.string(k.t.pO68Oz) : k.intl.string(k.t["gp+Ytz"]);
    return (0, i.jsx)("div", {
        className: x.Bi,
        children: (0, i.jsx)(m.A, {
            isFocused: !1,
            user: t,
            className: x.Aw,
            activeClassName: x.vu,
            noBorder: !0,
            onClick: () => (0, g.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: a }),
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: x.a4,
                    children: [
                        (0, i.jsx)(h.A, { user: t, hovered: e, status: A, subText: y, className: x.eF }),
                        (0, i.jsxs)("div", {
                            className: x.o1,
                            children: [
                                (0, i.jsx)(p.A, {
                                    icon: l.A,
                                    actionType: p.A.ActionTypes.ACCEPT,
                                    tooltip: k.intl.string(k.t.Zcibdf),
                                    onClick: c,
                                    shouldHighlight: e,
                                }),
                                (0, i.jsx)(p.A, {
                                    icon: r.P,
                                    actionType: p.A.ActionTypes.DENY,
                                    tooltip: k.intl.string(k.t.xuio0C),
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
function C(e) {
    let { transitionState: t, onClose: s } = e,
        { rows: l } = (0, c.cf)([A.Ay], () => A.Ay.getState()),
        r = l.filter(N.m3P.PENDING_IGNORED),
        u = l.filter(N.m3P.SPAM),
        p = u.length + r.length;
    n.useEffect(() => {
        0 === p && s();
    }, [p, s]);
    let m = n.useCallback(() => {
            d.A.clearPendingSpamAndIgnored(), s();
        }, [s]),
        h = n.useMemo(() => {
            let e = [];
            return p > 1 && e.push({ text: k.intl.string(k.t.O8k7O4), onClick: m, variant: "secondary" }), e;
        }, [m, p]);
    return (0, i.jsx)(o.Modal, {
        title: k.intl.string(k.t.kaYqnm),
        subtitle: k.intl.string(k.t.tRxb4H),
        actions: h,
        trackingProps: { impression: { impressionName: a.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX } },
        onClose: s,
        transitionState: t,
        children: (0, i.jsxs)("div", {
            className: x.jE,
            children: [
                r.map((e) => (0, n.createElement)(y, { ...e, isFocused: !1, key: e.key, ignoredUser: !0 })),
                u.map((e) => (0, n.createElement)(y, { ...e, isFocused: !1, key: e.key })),
            ],
        }),
    });
}
