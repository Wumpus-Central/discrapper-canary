(s.d(t, { default: () => x }), s(321073));
var i = s(477900),
    n = s(582128),
    a = s(562708),
    o = s(189213),
    c = s(933832),
    l = s(789645),
    r = s(17928),
    d = s(717398),
    u = s(688810),
    p = s(725663),
    m = s(513297),
    g = s(414711),
    h = s(723690),
    A = s(402860),
    N = s(595623),
    k = s(652215),
    y = s(375708),
    C = s(490569);
function f(e) {
    let { user: t, status: s, ignoredUser: n } = e,
        { analyticsLocations: a } = (0, u.Ay)();
    function o(e) {
        (e.stopPropagation(), d.A.cancelFriendRequest(t.id, { location: "Spam requests modal" }));
    }
    function r(e) {
        (e.stopPropagation(), p.A.maybeConfirmFriendRequestAccept({ userId: t.id, location: "Spam requests modal" }));
    }
    let N = s === k.clD.OFFLINE ? k.clD.UNKNOWN : s,
        f = n ? y.intl.string(y.t.pO68Oz) : y.intl.string(y.t["gp+Ytz"]);
    return (0, i.jsx)("div", {
        className: C.Bi,
        children: (0, i.jsx)(g.A, {
            isFocused: !1,
            user: t,
            className: C.Aw,
            activeClassName: C.vu,
            noBorder: !0,
            onClick: () => (0, A.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: a }),
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: C.a4,
                    children: [
                        (0, i.jsx)(h.A, { user: t, hovered: e, status: N, subText: f, className: C.eF }),
                        (0, i.jsxs)("div", {
                            className: C.o1,
                            children: [
                                (0, i.jsx)(m.A, {
                                    icon: c.CheckmarkLargeIcon,
                                    actionType: m.A.ActionTypes.ACCEPT,
                                    tooltip: y.intl.string(y.t.Zcibdf),
                                    onClick: r,
                                    shouldHighlight: e,
                                }),
                                (0, i.jsx)(m.A, {
                                    icon: l.P,
                                    actionType: m.A.ActionTypes.DENY,
                                    tooltip: y.intl.string(y.t.xuio0C),
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
function x(e) {
    let { transitionState: t, onClose: s } = e,
        { rows: c } = (0, r.cf)([N.Ay], () => N.Ay.getState()),
        l = c.filter(k.m3P.PENDING_IGNORED),
        u = c.filter(k.m3P.SPAM),
        p = u.length + l.length;
    n.useEffect(() => {
        0 === p && s();
    }, [p, s]);
    let m = n.useCallback(() => {
            (d.A.clearPendingSpamAndIgnored(), s());
        }, [s]),
        g = n.useMemo(() => {
            let e = [];
            return (p > 1 && e.push({ text: y.intl.string(y.t.O8k7O4), onClick: m, variant: "secondary" }), e);
        }, [m, p]);
    return (0, i.jsx)(o.a, {
        title: y.intl.string(y.t.kaYqnm),
        subtitle: y.intl.string(y.t.tRxb4H),
        actions: g,
        trackingProps: { impression: { impressionName: a.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX } },
        onClose: s,
        transitionState: t,
        children: (0, i.jsxs)("div", {
            className: C.jE,
            children: [
                l.map((e) => (0, n.createElement)(f, { ...e, isFocused: !1, key: e.key, ignoredUser: !0 })),
                u.map((e) => (0, n.createElement)(f, { ...e, isFocused: !1, key: e.key })),
            ],
        }),
    });
}
