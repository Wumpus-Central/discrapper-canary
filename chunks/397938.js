n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(837381),
    a = n(311907),
    s = n(827734),
    o = n(397927),
    c = n(941971),
    u = n(900848),
    d = n(371911),
    f = n(222823),
    p = n(309010),
    h = n(287809),
    b = n(851109),
    g = n(394953),
    m = n(355216),
    A = n(596540),
    y = n(879221);
n(445368);
var O = n(652215),
    j = n(790782),
    v = n(626600);

function x() {
    let e = (0, a.bG)([h.default], () => h.default.getCurrentUser());
    return (0, a.bG)(
        [f.Ay],
        () => (null == e ? void 0 : e.id) != null && f.Ay.getMentionCount(e.id, j.P.NOTIFICATION_CENTER) > 0,
    );
}

function E(e) {
    var t, n;
    let { onClick: d, selectedOverride: f = !1, popoutProps: h, ref: A } = e,
        j = (0, i.Vd)("notifications-inbox"),
        [E, _] = l.useState(!1),
        C = (0, g.lI)(),
        S = f || C,
        { notificationCenterVariant: I } = (0, b.X8)({
            location: "NotificationsInboxButtonInner",
        }),
        {
            badge: N,
            badgeDimensions: T,
            unreadChannelsCount: P,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, b.X8)({
                    location: "NotificationsInboxButtonInner",
                }),
                { unreadChannelIds: n } = (0, g.U4)(),
                l = x(),
                { badge: i, dimensions: a } = (0, m.ux)({
                    isSelected: e,
                });
            return t === b.U5.LEGACY
                ? {
                      badge: l
                          ? (0, r.jsx)(o.SC0, {
                                style: {
                                    height: 13,
                                    width: 13,
                                    position: "relative",
                                },
                                color: s.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: {
                          height: 13,
                          width: 13,
                      },
                  }
                : {
                      badge: i,
                      unreadChannelsCount: n.length,
                      badgeDimensions: a,
                  };
        })(S),
        w = I === b.U5.LEGACY ? o.K$s : o.XFE,
        R = (0, a.bG)([p.A], () => p.A.getChannelId()),
        D = l.useMemo(() => {
            if (I === b.U5.SIDEBAR) return O.BVt.CHANNEL(O.gNP, R);
        }, [I, R]);
    return (0, r.jsxs)(u.c, {
        ref: A,
        children: [
            (0, r.jsx)(c.A, {
                selected: S && I === b.U5.SIDEBAR,
                hovered: E && I === b.U5.SIDEBAR,
                unread: P > 0,
                className: v.Io,
                disabled: I === b.U5.LEGACY,
            }),
            (0, r.jsx)(y.A, {
                children: (0, r.jsx)(o.Qk9, {
                    selected: S || E,
                    lowerBadge: N,
                    lowerBadgeSize: T,
                    children: (0, r.jsx)(
                        o.jlP,
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
                                selected: S || E,
                                onMouseEnter: () => _(!0),
                                onMouseLeave: () => _(!1),
                                children: (0, r.jsx)(w, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: v.iZ,
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

function _() {
    let e = l.useRef(null),
        { notificationCenterVariant: t } = (0, b.X8)({
            location: "NotificationsInboxButton",
        }),
        n = x(),
        i = (0, m.HN)();
    return t === b.U5.SIDEBAR
        ? (0, r.jsx)(E, {
              onClick: i,
          })
        : t === b.U5.POPOUT
          ? (0, r.jsx)(A.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, l) =>
                    (0, r.jsx)(E, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            i(), t();
                        },
                        popoutProps: l,
                    }),
            })
          : t === b.U5.LEGACY
            ? (0, r.jsx)(d.C, {
                  spacing: 0,
                  badgeState: {
                      badgeForYou: n,
                  },
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  dialogClassName: v.T8,
                  children: (t, n, l) =>
                      (0, r.jsx)(E, {
                          ref: e,
                          selectedOverride: n,
                          onClick: () => {
                              i(), t();
                          },
                          popoutProps: l,
                      }),
              })
            : null;
}
