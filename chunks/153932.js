n.d(t, { default: () => x });
var s = n(200651),
    o = n(192379),
    i = n(990547),
    r = n(481060),
    a = n(442837),
    l = n(194359),
    c = n(906732),
    d = n(321488),
    u = n(417183),
    m = n(170245),
    p = n(171368),
    b = n(974042),
    h = n(626135),
    g = n(981631),
    O = n(388032),
    f = n(511515);
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
    let { user: t, status: n, ignoredUser: i } = e;
    let a = o.useContext(h.AnalyticsContext),
        { analyticsLocations: b } = (0, c.ZP)(),
        y = (e) => {
            e.stopPropagation(), l.Z.cancelFriendRequest(t.id, { location: 'Spam requests modal' });
        },
        _ = (e) => {
            e.stopPropagation(),
                l.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'Spam requests modal' }
                });
        },
        j = n === g.Skl.OFFLINE ? g.Skl.UNKNOWN : n,
        x = i ? O.intl.string(O.t.pO68Oz) : O.intl.string(O.t['gp+Yt7']);
    return (0, s.jsx)('div', {
        className: f.spamRequest,
        children: (0, s.jsx)(u.Z, {
            isFocused: !1,
            user: t,
            className: f.listItem,
            activeClassName: f.active,
            onClick: () =>
                (0, p.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: b,
                    analyticsLocation: a.location
                }),
            children: (e) =>
                (0, s.jsxs)('div', {
                    className: f.listItemContents,
                    children: [
                        (0, s.jsx)(m.Z, {
                            user: t,
                            hovered: e,
                            status: j,
                            subText: x,
                            className: f.userInfo
                        }),
                        (0, s.jsxs)('div', {
                            className: f.actions,
                            children: [
                                (0, s.jsx)(d.Z, {
                                    icon: r.dz2,
                                    actionType: d.Z.ActionTypes.ACCEPT,
                                    tooltip: O.intl.string(O.t.ZcibdX),
                                    onClick: _,
                                    shouldHighlight: e
                                }),
                                (0, s.jsx)(d.Z, {
                                    icon: r.Dio,
                                    actionType: d.Z.ActionTypes.DENY,
                                    tooltip: O.intl.string(O.t.xuio0N),
                                    onClick: y,
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
        { rows: c } = (0, a.cj)([b.ZP], () => b.ZP.getState()),
        d = c.filter(g.pJs.PENDING_IGNORED),
        u = c.filter(g.pJs.SPAM),
        m = u.length + d.length;
    return (
        o.useEffect(() => {
            0 === m && n();
        }, [m, n]),
        (0, s.jsxs)(r.Y0X, {
            transitionState: t,
            className: f.modal,
            impression: { impressionName: i.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX },
            children: [
                (0, s.jsxs)(r.xBx, {
                    separator: !1,
                    className: f.modalHeader,
                    children: [
                        (0, s.jsx)(r.X6q, {
                            variant: 'heading-lg/bold',
                            className: f.heading,
                            children: O.intl.string(O.t.kaYqnp)
                        }),
                        (0, s.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: O.intl.string(O.t.tRxb4O)
                        })
                    ]
                }),
                (0, s.jsxs)(r.hzk, {
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
                    (0, s.jsx)('div', {
                        className: f.modalFooter,
                        children: (0, s.jsx)(r.zxk, {
                            className: f.clearAllButton,
                            onClick: () => {
                                l.Z.clearPendingSpamAndIgnored(), n();
                            },
                            children: O.intl.string(O.t.O8k7Oz)
                        })
                    })
            ]
        })
    );
}
