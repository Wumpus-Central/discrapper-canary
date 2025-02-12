s.d(t, { default: () => k });
var a = s(200651),
    i = s(192379),
    n = s(990547),
    o = s(481060),
    l = s(442837),
    r = s(194359),
    c = s(906732),
    d = s(321488),
    m = s(417183),
    u = s(170245),
    p = s(922611),
    h = s(171368),
    b = s(974042),
    _ = s(626135),
    g = s(981631),
    x = s(388032),
    N = s(896389);
function I(e) {
    var t, s, n;
    let { user: l, status: b, ignoredUser: I } = e,
        k = i.useContext(_.AnalyticsContext),
        { analyticsLocations: C } = (0, c.ZP)(),
        j = (e) => {
            e.stopPropagation(), r.Z.cancelFriendRequest(l.id, { location: 'Spam requests modal' });
        },
        v = (e) => {
            e.stopPropagation(),
                r.Z.addRelationship({
                    userId: l.id,
                    context: { location: 'Spam requests modal' }
                });
        },
        f = b === g.Skl.OFFLINE ? g.Skl.UNKNOWN : b,
        S = ((t = (0, p.JX)({ location: 'FriendRequestSpamModal' })), (s = I), (n = l), t ? (s ? x.intl.string(x.t.pO68Oz) : x.intl.string(x.t['gp+Yt7'])) : n.username);
    return (0, a.jsx)('div', {
        className: N.spamRequest,
        children: (0, a.jsx)(m.Z, {
            isFocused: !1,
            user: l,
            className: N.listItem,
            activeClassName: N.active,
            onClick: () =>
                (0, h.openUserProfileModal)({
                    userId: l.id,
                    sourceAnalyticsLocations: C,
                    analyticsLocation: k.location
                }),
            children: (e) =>
                (0, a.jsxs)('div', {
                    className: N.listItemContents,
                    children: [
                        (0, a.jsx)(u.Z, {
                            user: l,
                            hovered: e,
                            status: f,
                            subText: S,
                            className: N.userInfo
                        }),
                        (0, a.jsxs)('div', {
                            className: N.actions,
                            children: [
                                (0, a.jsx)(d.Z, {
                                    icon: o.dz2,
                                    actionType: d.Z.ActionTypes.ACCEPT,
                                    tooltip: x.intl.string(x.t.ZcibdX),
                                    onClick: v,
                                    shouldHighlight: e
                                }),
                                (0, a.jsx)(d.Z, {
                                    icon: o.Dio,
                                    actionType: d.Z.ActionTypes.DENY,
                                    tooltip: x.intl.string(x.t.xuio0N),
                                    onClick: j,
                                    shouldHighlight: e
                                })
                            ]
                        })
                    ]
                })
        })
    });
}
function k(e) {
    let { transitionState: t, onClose: s } = e,
        c = (0, p.Do)({ location: 'FriendRequestSpamModal' }),
        { rows: d } = (0, l.cj)([b.ZP], () => b.ZP.getState()),
        m = d.filter(g.pJs.PENDING_IGNORED),
        u = d.filter(g.pJs.SPAM),
        h = u.length + m.length;
    return (
        i.useEffect(() => {
            0 === h && s();
        }, [h, s]),
        (0, a.jsxs)(o.Y0X, {
            transitionState: t,
            className: N.modal,
            impression: { impressionName: n.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX },
            children: [
                (0, a.jsxs)(o.xBx, {
                    separator: !1,
                    className: N.modalHeader,
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            className: N.heading,
                            children: c ? x.intl.string(x.t.kaYqnp) : x.intl.string(x.t['rIMT+v'])
                        }),
                        c &&
                            (0, a.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: x.intl.string(x.t.tRxb4O)
                            })
                    ]
                }),
                (0, a.jsxs)(o.hzk, {
                    className: N.modalContent,
                    children: [
                        m.map((e) =>
                            (0, i.createElement)(I, {
                                ...e,
                                isFocused: !1,
                                key: e.key,
                                ignoredUser: !0
                            })
                        ),
                        u.map((e) =>
                            (0, i.createElement)(I, {
                                ...e,
                                isFocused: !1,
                                key: e.key
                            })
                        )
                    ]
                }),
                h > 1 &&
                    (0, a.jsx)('div', {
                        className: N.modalFooter,
                        children: (0, a.jsx)(o.zxk, {
                            className: N.clearAllButton,
                            onClick: () => {
                                r.Z.clearPendingSpamAndIgnored(), s();
                            },
                            children: x.intl.string(x.t.O8k7Oz)
                        })
                    })
            ]
        })
    );
}
