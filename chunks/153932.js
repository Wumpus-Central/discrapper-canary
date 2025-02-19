n.d(t, { default: () => x });
var s = n(200651),
    o = n(192379),
    a = n(990547),
    r = n(481060),
    i = n(442837),
    l = n(194359),
    c = n(906732),
    d = n(321488),
    u = n(417183),
    m = n(170245),
    p = n(922611),
    b = n(171368),
    g = n(974042),
    h = n(626135),
    N = n(981631),
    O = n(388032),
    f = n(435109);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                var s;
                (s = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = s);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, s);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    var t, n, a;
    let { user: i, status: g, ignoredUser: y } = e,
        _ = o.useContext(h.AnalyticsContext),
        { analyticsLocations: j } = (0, c.ZP)(),
        x = (e) => {
            e.stopPropagation(), l.Z.cancelFriendRequest(i.id, { location: 'Spam requests modal' });
        },
        P = (e) => {
            e.stopPropagation(),
                l.Z.addRelationship({
                    userId: i.id,
                    context: { location: 'Spam requests modal' }
                });
        },
        k = g === N.Skl.OFFLINE ? N.Skl.UNKNOWN : g,
        v = ((t = (0, p.JX)({ location: 'FriendRequestSpamModal' })), (n = y), (a = i), t ? (n ? O.NW.string(O.t.pO68Oz) : O.NW.string(O.t['gp+Yt7'])) : a.username);
    return (0, s.jsx)('div', {
        className: f.spamRequest,
        children: (0, s.jsx)(u.Z, {
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
                (0, s.jsxs)('div', {
                    className: f.listItemContents,
                    children: [
                        (0, s.jsx)(m.Z, {
                            user: i,
                            hovered: e,
                            status: k,
                            subText: v,
                            className: f.userInfo
                        }),
                        (0, s.jsxs)('div', {
                            className: f.actions,
                            children: [
                                (0, s.jsx)(d.Z, {
                                    icon: r.dz2,
                                    actionType: d.Z.ActionTypes.ACCEPT,
                                    tooltip: O.NW.string(O.t.ZcibdX),
                                    onClick: P,
                                    shouldHighlight: e
                                }),
                                (0, s.jsx)(d.Z, {
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
    let { transitionState: t, onClose: n } = e,
        c = (0, p.Do)({ location: 'FriendRequestSpamModal' }),
        { rows: d } = (0, i.cj)([g.ZP], () => g.ZP.getState()),
        u = d.filter(N.pJs.PENDING_IGNORED),
        m = d.filter(N.pJs.SPAM),
        b = m.length + u.length;
    return (
        o.useEffect(() => {
            0 === b && n();
        }, [b, n]),
        (0, s.jsxs)(r.Y0X, {
            transitionState: t,
            className: f.modal,
            impression: { impressionName: a.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX },
            children: [
                (0, s.jsxs)(r.xBx, {
                    separator: !1,
                    className: f.modalHeader,
                    children: [
                        (0, s.jsx)(r.X6q, {
                            variant: 'heading-lg/bold',
                            className: f.heading,
                            children: c ? O.NW.string(O.t.kaYqnp) : O.NW.string(O.t['rIMT+v'])
                        }),
                        c &&
                            (0, s.jsx)(r.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: O.NW.string(O.t.tRxb4O)
                            })
                    ]
                }),
                (0, s.jsxs)(r.hzk, {
                    className: f.modalContent,
                    children: [
                        u.map((e) =>
                            (0, o.createElement)(
                                j,
                                _(y({}, e), {
                                    isFocused: !1,
                                    key: e.key,
                                    ignoredUser: !0
                                })
                            )
                        ),
                        m.map((e) =>
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
                b > 1 &&
                    (0, s.jsx)('div', {
                        className: f.modalFooter,
                        children: (0, s.jsx)(r.zxk, {
                            className: f.clearAllButton,
                            onClick: () => {
                                l.Z.clearPendingSpamAndIgnored(), n();
                            },
                            children: O.NW.string(O.t.O8k7Oz)
                        })
                    })
            ]
        })
    );
}
