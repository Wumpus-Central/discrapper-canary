n.d(t, { default: () => k }), n(539854);
var s = n(54381),
    i = n(473749),
    o = n(990547),
    r = n(159691),
    a = n(481060),
    c = n(442837),
    l = n(194359),
    u = n(906732),
    p = n(321488),
    d = n(417183),
    b = n(170245),
    m = n(892001),
    f = n(974042),
    g = n(981631),
    O = n(388032),
    y = n(52382);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            s.forEach(function (t) {
                var s;
                (s = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = s);
            });
    }
    return e;
}
function j(e, t) {
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
function P(e) {
    let { user: t, status: n, ignoredUser: i } = e,
        { analyticsLocations: o } = (0, u.ZP)(),
        r = (e) => {
            e.stopPropagation(), l.Z.cancelFriendRequest(t.id, { location: "Spam requests modal" });
        },
        c = (e) => {
            e.stopPropagation(),
                l.Z.addRelationship({
                    userId: t.id,
                    context: { location: "Spam requests modal" },
                });
        },
        f = n === g.Skl.OFFLINE ? g.Skl.UNKNOWN : n,
        h = i ? O.intl.string(O.t.pO68Oz) : O.intl.string(O.t["gp+Ytz"]);
    return (0, s.jsx)("div", {
        className: y.spamRequest,
        children: (0, s.jsx)(d.Z, {
            isFocused: !1,
            user: t,
            className: y.listItem,
            activeClassName: y.active,
            onClick: () =>
                (0, m.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: o,
                }),
            children: (e) =>
                (0, s.jsxs)("div", {
                    className: y.listItemContents,
                    children: [
                        (0, s.jsx)(b.Z, {
                            user: t,
                            hovered: e,
                            status: f,
                            subText: h,
                            className: y.userInfo,
                        }),
                        (0, s.jsxs)("div", {
                            className: y.actions,
                            children: [
                                (0, s.jsx)(p.Z, {
                                    icon: a.dz2,
                                    actionType: p.Z.ActionTypes.ACCEPT,
                                    tooltip: O.intl.string(O.t.Zcibdf),
                                    onClick: c,
                                    shouldHighlight: e,
                                }),
                                (0, s.jsx)(p.Z, {
                                    icon: a.Dio,
                                    actionType: p.Z.ActionTypes.DENY,
                                    tooltip: O.intl.string(O.t.xuio0C),
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
function k(e) {
    let { transitionState: t, onClose: n } = e,
        { rows: a } = (0, c.cj)([f.ZP], () => f.ZP.getState()),
        u = a.filter(g.pJs.PENDING_IGNORED),
        p = a.filter(g.pJs.SPAM),
        d = p.length + u.length;
    i.useEffect(() => {
        0 === d && n();
    }, [d, n]);
    let b = i.useCallback(() => {
            l.Z.clearPendingSpamAndIgnored(), n();
        }, [n]),
        m = i.useMemo(() => {
            let e = [];
            return (
                d > 1 &&
                    e.push({
                        text: O.intl.string(O.t.O8k7O4),
                        onClick: b,
                        variant: "secondary",
                    }),
                e
            );
        }, [b, d]);
    return (0, s.jsx)(r.u_l, {
        title: O.intl.string(O.t.kaYqnm),
        subtitle: O.intl.string(O.t.tRxb4H),
        actions: m,
        trackingProps: { impression: { impressionName: o.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX } },
        onClose: n,
        transitionState: t,
        children: (0, s.jsxs)("div", {
            className: y.modalContent,
            children: [
                u.map((e) =>
                    (0, i.createElement)(
                        P,
                        j(h({}, e), {
                            isFocused: !1,
                            key: e.key,
                            ignoredUser: !0,
                        }),
                    ),
                ),
                p.map((e) =>
                    (0, i.createElement)(
                        P,
                        j(h({}, e), {
                            isFocused: !1,
                            key: e.key,
                        }),
                    ),
                ),
            ],
        }),
    });
}
