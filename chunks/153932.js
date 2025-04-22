n.d(t, { default: () => y });
var s = n(200651),
    o = n(192379),
    i = n(990547),
    r = n(481060),
    a = n(442837),
    l = n(194359),
    c = n(906732),
    d = n(321488),
    m = n(417183),
    p = n(170245),
    u = n(171368),
    b = n(974042),
    h = n(981631),
    g = n(388032),
    O = n(511515);
function f(e) {
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
    let { user: t, status: n, ignoredUser: o } = e;
    let { analyticsLocations: i } = (0, c.ZP)(),
        a = (e) => {
            e.stopPropagation(), l.Z.cancelFriendRequest(t.id, { location: 'Spam requests modal' });
        },
        b = (e) => {
            e.stopPropagation(),
                l.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'Spam requests modal' }
                });
        },
        f = n === h.Skl.OFFLINE ? h.Skl.UNKNOWN : n,
        _ = o ? g.intl.string(g.t.pO68Oz) : g.intl.string(g.t['gp+Yt7']);
    return (0, s.jsx)('div', {
        className: O.spamRequest,
        children: (0, s.jsx)(m.Z, {
            isFocused: !1,
            user: t,
            className: O.listItem,
            activeClassName: O.active,
            onClick: () =>
                (0, u.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: i
                }),
            children: (e) =>
                (0, s.jsxs)('div', {
                    className: O.listItemContents,
                    children: [
                        (0, s.jsx)(p.Z, {
                            user: t,
                            hovered: e,
                            status: f,
                            subText: _,
                            className: O.userInfo
                        }),
                        (0, s.jsxs)('div', {
                            className: O.actions,
                            children: [
                                (0, s.jsx)(d.Z, {
                                    icon: r.dz2,
                                    actionType: d.Z.ActionTypes.ACCEPT,
                                    tooltip: g.intl.string(g.t.ZcibdX),
                                    onClick: b,
                                    shouldHighlight: e
                                }),
                                (0, s.jsx)(d.Z, {
                                    icon: r.Dio,
                                    actionType: d.Z.ActionTypes.DENY,
                                    tooltip: g.intl.string(g.t.xuio0N),
                                    onClick: a,
                                    shouldHighlight: e
                                })
                            ]
                        })
                    ]
                })
        })
    });
}
function y(e) {
    let { transitionState: t, onClose: n } = e,
        { rows: c } = (0, a.cj)([b.ZP], () => b.ZP.getState()),
        d = c.filter(h.pJs.PENDING_IGNORED),
        m = c.filter(h.pJs.SPAM),
        p = m.length + d.length;
    return (
        o.useEffect(() => {
            0 === p && n();
        }, [p, n]),
        (0, s.jsxs)(r.Y0X, {
            transitionState: t,
            className: O.modal,
            impression: { impressionName: i.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX },
            children: [
                (0, s.jsxs)(r.xBx, {
                    separator: !1,
                    className: O.modalHeader,
                    children: [
                        (0, s.jsx)(r.X6q, {
                            variant: 'heading-lg/bold',
                            className: O.heading,
                            children: g.intl.string(g.t.kaYqnp)
                        }),
                        (0, s.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: g.intl.string(g.t.tRxb4O)
                        })
                    ]
                }),
                (0, s.jsxs)(r.hzk, {
                    className: O.modalContent,
                    children: [
                        d.map((e) =>
                            (0, o.createElement)(
                                j,
                                _(f({}, e), {
                                    isFocused: !1,
                                    key: e.key,
                                    ignoredUser: !0
                                })
                            )
                        ),
                        m.map((e) =>
                            (0, o.createElement)(
                                j,
                                _(f({}, e), {
                                    isFocused: !1,
                                    key: e.key
                                })
                            )
                        )
                    ]
                }),
                p > 1 &&
                    (0, s.jsx)('div', {
                        className: O.modalFooter,
                        children: (0, s.jsx)(r.zxk, {
                            className: O.clearAllButton,
                            onClick: () => {
                                l.Z.clearPendingSpamAndIgnored(), n();
                            },
                            children: g.intl.string(g.t.O8k7Oz)
                        })
                    })
            ]
        })
    );
}
