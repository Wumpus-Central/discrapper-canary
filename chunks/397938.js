n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(837381),
    s = n(311907),
    a = n(827734),
    o = n(397927),
    c = n(941971),
    u = n(900848),
    d = n(371911),
    p = n(222823),
    h = n(309010),
    f = n(287809),
    g = n(851109),
    m = n(394953),
    b = n(355216),
    A = n(596540),
    y = n(879221);
n(445368);
var _ = n(652215),
    O = n(790782),
    j = n(626600);

function v() {
    let e = (0, s.bG)([f.default], () => f.default.getCurrentUser());
    return (0, s.bG)(
        [p.Ay],
        () => (null == e ? void 0 : e.id) != null && p.Ay.getMentionCount(e.id, O.P.NOTIFICATION_CENTER) > 0,
    );
}

function x(e) {
    var t, n;
    let { onClick: d, selectedOverride: p = !1, popoutProps: f, ref: A } = e,
        O = (0, i.Vd)("notifications-inbox"),
        [x, E] = l.useState(!1),
        C = (0, m.lI)(),
        S = p || C,
        { notificationCenterVariant: I } = (0, g.X8)({
            location: "NotificationsInboxButtonInner",
        }),
        {
            badge: N,
            badgeDimensions: T,
            unreadChannelsCount: P,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, g.X8)({
                    location: "NotificationsInboxButtonInner",
                }),
                { unreadChannelIds: n } = (0, m.U4)(),
                l = v(),
                { badge: i, dimensions: s } = (0, b.ux)({
                    isSelected: e,
                });
            return t === g.U5.LEGACY
                ? {
                      badge: l
                          ? (0, r.jsx)(o.SC0, {
                                style: {
                                    height: 13,
                                    width: 13,
                                    position: "relative",
                                },
                                color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
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
                      badgeDimensions: s,
                  };
        })(S),
        w = I === g.U5.LEGACY ? o.K$s : o.XFE,
        R = (0, s.bG)([h.A], () => h.A.getChannelId()),
        D = l.useMemo(() => {
            if (I === g.U5.SIDEBAR) return _.BVt.CHANNEL(_.gNP, R);
        }, [I, R]);
    return (0, r.jsxs)(u.c, {
        ref: A,
        children: [
            (0, r.jsx)(c.A, {
                selected: S && I === g.U5.SIDEBAR,
                hovered: x && I === g.U5.SIDEBAR,
                unread: P > 0,
                className: j.Io,
                disabled: I === g.U5.LEGACY,
            }),
            (0, r.jsx)(y.A, {
                children: (0, r.jsx)(o.Qk9, {
                    selected: S || x,
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
                        })({}, O, f)),
                        (n = n =
                            {
                                onClick: d,
                                to: D,
                                selected: S || x,
                                onMouseEnter: () => E(!0),
                                onMouseLeave: () => E(!1),
                                children: (0, r.jsx)(w, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: j.iZ,
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

function E() {
    let e = l.useRef(null),
        { notificationCenterVariant: t } = (0, g.X8)({
            location: "NotificationsInboxButton",
        }),
        n = v(),
        i = (0, b.HN)();
    return t === g.U5.SIDEBAR
        ? (0, r.jsx)(x, {
              onClick: i,
          })
        : t === g.U5.POPOUT
          ? (0, r.jsx)(A.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, l) =>
                    (0, r.jsx)(x, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            i(), t();
                        },
                        popoutProps: l,
                    }),
            })
          : t === g.U5.LEGACY
            ? (0, r.jsx)(d.C, {
                  spacing: 0,
                  badgeState: {
                      badgeForYou: n,
                  },
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  children: (t, n, l) =>
                      (0, r.jsx)(x, {
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
