n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(91192),
    o = n(442837),
    a = n(692547),
    s = n(481060),
    c = n(276952),
    u = n(682662),
    d = n(178088),
    f = n(306680),
    p = n(944486),
    h = n(594174),
    g = n(821020),
    m = n(370774),
    b = n(128008),
    _ = n(961040),
    y = n(932711),
    O = n(871301),
    v = n(981631),
    j = n(490897),
    x = n(888158);
function C() {
    let e = (0, o.e7)([h.default], () => h.default.getCurrentUser());
    return (0, o.e7)(
        [f.ZP],
        () => (null == e ? void 0 : e.id) != null && f.ZP.getMentionCount(e.id, j.W.NOTIFICATION_CENTER) > 0,
    );
}
function E(e) {
    var t, n;
    let { onClick: d, selectedOverride: f = !1, popoutProps: h, ref: _ } = e,
        j = (0, l.Ie)("notifications-inbox"),
        [E, S] = i.useState(!1),
        I = (0, m.D)(),
        P = f || I,
        { notificationCenterVariant: N } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: Z,
            badgeDimensions: w,
            unreadChannelsCount: T,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, m.O4)(),
                i = C(),
                { badge: l, dimensions: o } = (0, b.h6)({ isSelected: e });
            return t === g.jP.LEGACY
                ? {
                      badge: i
                          ? (0, r.jsx)(s.fWl, {
                                style: {
                                    height: O.zw,
                                    width: O.zw,
                                    position: "relative",
                                },
                                color: a.Z.colors.STATUS_DANGER.css,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: {
                          height: O.zw,
                          width: O.zw,
                      },
                  }
                : {
                      badge: l,
                      unreadChannelsCount: n.length,
                      badgeDimensions: o,
                  };
        })(P),
        A = N === g.jP.LEGACY ? s.xx7 : s.Dkj,
        R = (0, o.e7)([p.Z], () => p.Z.getChannelId()),
        D = i.useMemo(() => {
            if (N === g.jP.SIDEBAR) return v.Z5c.CHANNEL(v.STv, R);
        }, [N, R]);
    return (0, r.jsxs)(u.H, {
        ref: _,
        children: [
            (0, r.jsx)(c.Z, {
                selected: P && N === g.jP.SIDEBAR,
                hovered: E && N === g.jP.SIDEBAR,
                unread: T > 0,
                className: x.pill,
                disabled: N === g.jP.LEGACY,
            }),
            (0, r.jsx)(y.Z, {
                children: (0, r.jsx)(s.aRk, {
                    selected: P || E,
                    lowerBadge: Z,
                    lowerBadgeSize: w,
                    children: (0, r.jsx)(
                        s.LYs,
                        ((t = (function (e) {
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
                        })({}, j, h)),
                        (n = n =
                            {
                                onClick: d,
                                to: D,
                                selected: P || E,
                                onMouseEnter: () => S(!0),
                                onMouseLeave: () => S(!1),
                                children: (0, r.jsx)(A, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: x.notificationsIcon,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                    ),
                }),
            }),
        ],
    });
}
function S() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButton" }),
        n = C(),
        l = (0, b.mv)();
    return t === g.jP.SIDEBAR
        ? (0, r.jsx)(E, { onClick: l })
        : t === g.jP.POPOUT
          ? (0, r.jsx)(_.Z, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, i) =>
                    (0, r.jsx)(E, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            l(), t();
                        },
                        popoutProps: i,
                    }),
            })
          : t === g.jP.LEGACY
            ? (0, r.jsx)(d.k, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  dialogClassName: x.positionLayer,
                  children: (t, n, i) =>
                      (0, r.jsx)(E, {
                          ref: e,
                          selectedOverride: n,
                          onClick: () => {
                              l(), t();
                          },
                          popoutProps: i,
                      }),
              })
            : null;
}
