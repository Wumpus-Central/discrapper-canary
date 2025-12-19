n.d(t, { default: () => E }), n(539854);
var r = n(54381),
    a = n(473749),
    i = n(990547),
    o = n(159691),
    s = n(481060),
    c = n(442837),
    l = n(194359),
    u = n(906732),
    d = n(321488),
    b = n(417183),
    p = n(170245),
    f = n(892001),
    g = n(974042),
    O = n(981631),
    m = n(388032),
    y = n(52382);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let { user: t, status: n, ignoredUser: a } = e,
        { analyticsLocations: i } = (0, u.ZP)(),
        o = (e) => {
            e.stopPropagation(), l.Z.cancelFriendRequest(t.id, { location: "Spam requests modal" });
        },
        c = (e) => {
            e.stopPropagation(),
                l.Z.addRelationship({
                    userId: t.id,
                    context: { location: "Spam requests modal" },
                });
        },
        g = n === O.Skl.OFFLINE ? O.Skl.UNKNOWN : n,
        S = a ? m.intl.string(m.t.pO68Oz) : m.intl.string(m.t["gp+Ytz"]);
    return (0, r.jsx)("div", {
        className: y.spamRequest,
        children: (0, r.jsx)(b.Z, {
            isFocused: !1,
            user: t,
            className: y.listItem,
            activeClassName: y.active,
            onClick: () =>
                (0, f.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: i,
                }),
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: y.listItemContents,
                    children: [
                        (0, r.jsx)(p.Z, {
                            user: t,
                            hovered: e,
                            status: g,
                            subText: S,
                            className: y.userInfo,
                        }),
                        (0, r.jsxs)("div", {
                            className: y.actions,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    icon: s.dz2,
                                    actionType: d.Z.ActionTypes.ACCEPT,
                                    tooltip: m.intl.string(m.t.Zcibdf),
                                    onClick: c,
                                    shouldHighlight: e,
                                }),
                                (0, r.jsx)(d.Z, {
                                    icon: s.Dio,
                                    actionType: d.Z.ActionTypes.DENY,
                                    tooltip: m.intl.string(m.t.xuio0C),
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
function E(e) {
    let { transitionState: t, onClose: n } = e,
        { rows: s } = (0, c.cj)([g.ZP], () => g.ZP.getState()),
        u = s.filter(O.pJs.PENDING_IGNORED),
        d = s.filter(O.pJs.SPAM),
        b = d.length + u.length;
    a.useEffect(() => {
        0 === b && n();
    }, [b, n]);
    let p = a.useCallback(() => {
            l.Z.clearPendingSpamAndIgnored(), n();
        }, [n]),
        f = a.useMemo(() => {
            let e = [];
            return (
                b > 1 &&
                    e.push({
                        text: m.intl.string(m.t.O8k7O4),
                        onClick: p,
                        variant: "secondary",
                    }),
                e
            );
        }, [p, b]);
    return (0, r.jsx)(o.u_l, {
        title: m.intl.string(m.t.kaYqnm),
        subtitle: m.intl.string(m.t.tRxb4H),
        actions: f,
        trackingProps: { impression: { impressionName: i.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX } },
        onClose: n,
        transitionState: t,
        children: (0, r.jsxs)("div", {
            className: y.modalContent,
            children: [
                u.map((e) =>
                    (0, a.createElement)(
                        _,
                        h(S({}, e), {
                            isFocused: !1,
                            key: e.key,
                            ignoredUser: !0,
                        }),
                    ),
                ),
                d.map((e) =>
                    (0, a.createElement)(
                        _,
                        h(S({}, e), {
                            isFocused: !1,
                            key: e.key,
                        }),
                    ),
                ),
            ],
        }),
    });
}
