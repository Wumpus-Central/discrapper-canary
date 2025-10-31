n.d(t, { default: () => x });
var s = n(951288),
    o = n(647438),
    i = n(990547),
    r = n(755721),
    a = n(481060),
    l = n(442837),
    c = n(194359),
    d = n(906732),
    m = n(321488),
    p = n(417183),
    u = n(170245),
    b = n(892001),
    h = n(974042),
    g = n(981631),
    f = n(388032),
    O = n(862998);
function _(e) {
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
function y(e) {
    let { user: t, status: n, ignoredUser: o } = e,
        { analyticsLocations: i } = (0, d.ZP)(),
        r = (e) => {
            e.stopPropagation(), c.Z.cancelFriendRequest(t.id, { location: "Spam requests modal" });
        },
        l = (e) => {
            e.stopPropagation(),
                c.Z.addRelationship({
                    userId: t.id,
                    context: { location: "Spam requests modal" },
                });
        },
        h = n === g.Skl.OFFLINE ? g.Skl.UNKNOWN : n,
        _ = o ? f.intl.string(f.t.pO68Oz) : f.intl.string(f.t["gp+Ytz"]);
    return (0, s.jsx)("div", {
        className: O.spamRequest,
        children: (0, s.jsx)(p.Z, {
            isFocused: !1,
            user: t,
            className: O.listItem,
            activeClassName: O.active,
            onClick: () =>
                (0, b.openUserProfileModal)({
                    userId: t.id,
                    sourceAnalyticsLocations: i,
                }),
            children: (e) =>
                (0, s.jsxs)("div", {
                    className: O.listItemContents,
                    children: [
                        (0, s.jsx)(u.Z, {
                            user: t,
                            hovered: e,
                            status: h,
                            subText: _,
                            className: O.userInfo,
                        }),
                        (0, s.jsxs)("div", {
                            className: O.actions,
                            children: [
                                (0, s.jsx)(m.Z, {
                                    icon: a.dz2,
                                    actionType: m.Z.ActionTypes.ACCEPT,
                                    tooltip: f.intl.string(f.t.Zcibdf),
                                    onClick: l,
                                    shouldHighlight: e,
                                }),
                                (0, s.jsx)(m.Z, {
                                    icon: a.Dio,
                                    actionType: m.Z.ActionTypes.DENY,
                                    tooltip: f.intl.string(f.t.xuio0C),
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
function x(e) {
    let { transitionState: t, onClose: n } = e,
        { rows: d } = (0, l.cj)([h.ZP], () => h.ZP.getState()),
        m = d.filter(g.pJs.PENDING_IGNORED),
        p = d.filter(g.pJs.SPAM),
        u = p.length + m.length;
    return (
        o.useEffect(() => {
            0 === u && n();
        }, [u, n]),
        (0, s.jsxs)(a.Y0X, {
            transitionState: t,
            className: O.modal,
            impression: { impressionName: i.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX },
            parentComponent: "OtherFriendRequestsModal",
            children: [
                (0, s.jsxs)(a.xBx, {
                    separator: !1,
                    className: O.modalHeader,
                    children: [
                        (0, s.jsx)(a.Heading, {
                            variant: "heading-lg/bold",
                            className: O.heading,
                            children: f.intl.string(f.t.kaYqnm),
                        }),
                        (0, s.jsx)(a.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: f.intl.string(f.t.tRxb4H),
                        }),
                    ],
                }),
                (0, s.jsxs)(a.hzk, {
                    className: O.modalContent,
                    children: [
                        m.map((e) =>
                            (0, o.createElement)(
                                y,
                                j(_({}, e), {
                                    isFocused: !1,
                                    key: e.key,
                                    ignoredUser: !0,
                                }),
                            ),
                        ),
                        p.map((e) =>
                            (0, o.createElement)(
                                y,
                                j(_({}, e), {
                                    isFocused: !1,
                                    key: e.key,
                                }),
                            ),
                        ),
                    ],
                }),
                u > 1 &&
                    (0, s.jsx)("div", {
                        className: O.modalFooter,
                        children: (0, s.jsx)(r.zx, {
                            className: O.clearAllButton,
                            onClick: () => {
                                c.Z.clearPendingSpamAndIgnored(), n();
                            },
                            children: f.intl.string(f.t.O8k7O4),
                        }),
                    }),
            ],
        })
    );
}
