s.d(t, { default: () => j });
var n = s(200651),
    o = s(192379),
    r = s(990547),
    i = s(481060),
    a = s(442837),
    c = s(194359),
    l = s(906732),
    d = s(321488),
    u = s(417183),
    m = s(170245),
    p = s(171368),
    b = s(974042),
    h = s(626135),
    g = s(981631),
    N = s(388032),
    O = s(511515);
function f(e) {
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
function y(e, t) {
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
function _(e) {
    let { user: t, status: s, ignoredUser: r } = e;
    let a = o.useContext(h.AnalyticsContext),
        { analyticsLocations: b } = (0, l.ZP)(),
        f = (e) => {
            e.stopPropagation(), c.Z.cancelFriendRequest(t.id, { location: 'Spam requests modal' });
        },
        y = (e) => {
            e.stopPropagation(),
                c.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'Spam requests modal' }
                });
        },
        _ = s === g.Skl.OFFLINE ? g.Skl.UNKNOWN : s,
        j = r ? N.NW.string(N.t.pO68Oz) : N.NW.string(N.t['gp+Yt7']);
    return (0, n.jsx)('div', {
        className: O.spamRequest,
        children: (0, n.jsx)(u.Z, {
            isFocused: !1,
            user: t,
            className: O.listItem,
            activeClassName: O.active,
            onClick: () =>
                (0, p.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: b,
                    analyticsLocation: a.location
                }),
            children: (e) =>
                (0, n.jsxs)('div', {
                    className: O.listItemContents,
                    children: [
                        (0, n.jsx)(m.Z, {
                            user: t,
                            hovered: e,
                            status: _,
                            subText: j,
                            className: O.userInfo
                        }),
                        (0, n.jsxs)('div', {
                            className: O.actions,
                            children: [
                                (0, n.jsx)(d.Z, {
                                    icon: i.dz2,
                                    actionType: d.Z.ActionTypes.ACCEPT,
                                    tooltip: N.NW.string(N.t.ZcibdX),
                                    onClick: y,
                                    shouldHighlight: e
                                }),
                                (0, n.jsx)(d.Z, {
                                    icon: i.Dio,
                                    actionType: d.Z.ActionTypes.DENY,
                                    tooltip: N.NW.string(N.t.xuio0N),
                                    onClick: f,
                                    shouldHighlight: e
                                })
                            ]
                        })
                    ]
                })
        })
    });
}
function j(e) {
    let { transitionState: t, onClose: s } = e,
        { rows: l } = (0, a.cj)([b.ZP], () => b.ZP.getState()),
        d = l.filter(g.pJs.PENDING_IGNORED),
        u = l.filter(g.pJs.SPAM),
        m = u.length + d.length;
    return (
        o.useEffect(() => {
            0 === m && s();
        }, [m, s]),
        (0, n.jsxs)(i.Y0X, {
            transitionState: t,
            className: O.modal,
            impression: { impressionName: r.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX },
            children: [
                (0, n.jsxs)(i.xBx, {
                    separator: !1,
                    className: O.modalHeader,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: 'heading-lg/bold',
                            className: O.heading,
                            children: N.NW.string(N.t.kaYqnp)
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: N.NW.string(N.t.tRxb4O)
                        })
                    ]
                }),
                (0, n.jsxs)(i.hzk, {
                    className: O.modalContent,
                    children: [
                        d.map((e) =>
                            (0, o.createElement)(
                                _,
                                y(f({}, e), {
                                    isFocused: !1,
                                    key: e.key,
                                    ignoredUser: !0
                                })
                            )
                        ),
                        u.map((e) =>
                            (0, o.createElement)(
                                _,
                                y(f({}, e), {
                                    isFocused: !1,
                                    key: e.key
                                })
                            )
                        )
                    ]
                }),
                m > 1 &&
                    (0, n.jsx)('div', {
                        className: O.modalFooter,
                        children: (0, n.jsx)(i.zxk, {
                            className: O.clearAllButton,
                            onClick: () => {
                                c.Z.clearPendingSpamAndIgnored(), s();
                            },
                            children: N.NW.string(N.t.O8k7Oz)
                        })
                    })
            ]
        })
    );
}
