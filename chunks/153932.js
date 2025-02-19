s.d(t, { default: () => x });
var n = s(200651),
    o = s(192379),
    a = s(990547),
    r = s(481060),
    i = s(442837),
    c = s(194359),
    l = s(906732),
    d = s(321488),
    u = s(417183),
    m = s(170245),
    p = s(922611),
    b = s(171368),
    h = s(974042),
    g = s(626135),
    N = s(981631),
    O = s(388032),
    f = s(435109);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = s[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, n);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
function j(e) {
    var t, s, a;
    let { user: i, status: h, ignoredUser: y } = e,
        _ = o.useContext(g.AnalyticsContext),
        { analyticsLocations: j } = (0, l.ZP)(),
        x = (e) => {
            e.stopPropagation(), c.Z.cancelFriendRequest(i.id, { location: 'Spam requests modal' });
        },
        P = (e) => {
            e.stopPropagation(),
                c.Z.addRelationship({
                    userId: i.id,
                    context: { location: 'Spam requests modal' }
                });
        },
        k = h === N.Skl.OFFLINE ? N.Skl.UNKNOWN : h,
        v = ((t = (0, p.JX)({ location: 'FriendRequestSpamModal' })), (s = y), (a = i), t ? (s ? O.NW.string(O.t.pO68Oz) : O.NW.string(O.t['gp+Yt7'])) : a.username);
    return (0, n.jsx)('div', {
        className: f.spamRequest,
        children: (0, n.jsx)(u.Z, {
            isFocused: !1,
            user: i,
            className: f.listItem,
            activeClassName: f.active,
            onClick: () =>
                (0, b.openUserProfileModal)({
                    userId: i.id,
                    sourceAnalyticsLocations: j,
                    analyticsLocation: _.location
                }),
            children: (e) =>
                (0, n.jsxs)('div', {
                    className: f.listItemContents,
                    children: [
                        (0, n.jsx)(m.Z, {
                            user: i,
                            hovered: e,
                            status: k,
                            subText: v,
                            className: f.userInfo
                        }),
                        (0, n.jsxs)('div', {
                            className: f.actions,
                            children: [
                                (0, n.jsx)(d.Z, {
                                    icon: r.dz2,
                                    actionType: d.Z.ActionTypes.ACCEPT,
                                    tooltip: O.NW.string(O.t.ZcibdX),
                                    onClick: P,
                                    shouldHighlight: e
                                }),
                                (0, n.jsx)(d.Z, {
                                    icon: r.Dio,
                                    actionType: d.Z.ActionTypes.DENY,
                                    tooltip: O.NW.string(O.t.xuio0N),
                                    onClick: x,
                                    shouldHighlight: e
                                })
                            ]
                        })
                    ]
                })
        })
    });
}
function x(e) {
    let { transitionState: t, onClose: s } = e,
        { rows: l } = (0, i.cj)([h.ZP], () => h.ZP.getState()),
        d = l.filter(N.pJs.PENDING_IGNORED),
        u = l.filter(N.pJs.SPAM),
        m = u.length + d.length;
    return (
        o.useEffect(() => {
            0 === m && s();
        }, [m, s]),
        (0, n.jsxs)(r.Y0X, {
            transitionState: t,
            className: f.modal,
            impression: { impressionName: a.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX },
            children: [
                (0, n.jsxs)(r.xBx, {
                    separator: !1,
                    className: f.modalHeader,
                    children: [
                        (0, n.jsx)(r.X6q, {
                            variant: 'heading-lg/bold',
                            className: f.heading,
                            children: O.NW.string(O.t.kaYqnp)
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: O.NW.string(O.t.tRxb4O)
                        })
                    ]
                }),
                (0, n.jsxs)(r.hzk, {
                    className: f.modalContent,
                    children: [
                        d.map((e) =>
                            (0, o.createElement)(
                                j,
                                _(y({}, e), {
                                    isFocused: !1,
                                    key: e.key,
                                    ignoredUser: !0
                                })
                            )
                        ),
                        u.map((e) =>
                            (0, o.createElement)(
                                j,
                                _(y({}, e), {
                                    isFocused: !1,
                                    key: e.key
                                })
                            )
                        )
                    ]
                }),
                m > 1 &&
                    (0, n.jsx)('div', {
                        className: f.modalFooter,
                        children: (0, n.jsx)(r.zxk, {
                            className: f.clearAllButton,
                            onClick: () => {
                                c.Z.clearPendingSpamAndIgnored(), s();
                            },
                            children: O.NW.string(O.t.O8k7Oz)
                        })
                    })
            ]
        })
    );
}
