n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(91192),
    a = n(442837),
    o = n(692547),
    s = n(481060),
    c = n(276952),
    u = n(682662),
    d = n(178088),
    p = n(306680),
    f = n(944486),
    h = n(594174),
    g = n(821020),
    m = n(370774),
    b = n(128008),
    y = n(961040),
    v = n(932711),
    O = n(871301),
    j = n(981631),
    x = n(490897),
    C = n(678878);
function E() {
    let e = (0, a.e7)([h.default], () => h.default.getCurrentUser());
    return (0, a.e7)(
        [p.ZP],
        () => (null == e ? void 0 : e.id) != null && p.ZP.getMentionCount(e.id, x.W.NOTIFICATION_CENTER) > 0,
    );
}
function S(e) {
    var t, n;
    let { onClick: d, selectedOverride: p = !1, popoutProps: h, ref: y } = e,
        x = (0, l.Ie)("notifications-inbox"),
        [S, _] = i.useState(!1),
        I = (0, m.D)(),
        P = p || I,
        { notificationCenterVariant: Z } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: N,
            badgeDimensions: T,
            unreadChannelsCount: A,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, m.O4)(),
                i = E(),
                { badge: l, dimensions: a } = (0, b.h6)({ isSelected: e });
            return t === g.jP.LEGACY
                ? {
                      badge: i
                          ? (0, r.jsx)(s.fWl, {
                                style: {
                                    height: O.zw,
                                    width: O.zw,
                                    position: "relative",
                                },
                                color: o.Z.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
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
                      badgeDimensions: a,
                  };
        })(P),
        w = Z === g.jP.LEGACY ? s.xx7 : s.Dkj,
        R = (0, a.e7)([f.Z], () => f.Z.getChannelId()),
        D = i.useMemo(() => {
            if (Z === g.jP.SIDEBAR) return j.Z5c.CHANNEL(j.STv, R);
        }, [Z, R]);
    return (0, r.jsxs)(u.H, {
        ref: y,
        children: [
            (0, r.jsx)(c.Z, {
                selected: P && Z === g.jP.SIDEBAR,
                hovered: S && Z === g.jP.SIDEBAR,
                unread: A > 0,
                className: C.pill,
                disabled: Z === g.jP.LEGACY,
            }),
            (0, r.jsx)(v.Z, {
                children: (0, r.jsx)(s.aRk, {
                    selected: P || S,
                    lowerBadge: N,
                    lowerBadgeSize: T,
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
                        })({}, x, h)),
                        (n = n =
                            {
                                onClick: d,
                                to: D,
                                selected: P || S,
                                onMouseEnter: () => _(!0),
                                onMouseLeave: () => _(!1),
                                children: (0, r.jsx)(w, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: C.notificationsIcon,
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
    let e = i.useRef(null),
        { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButton" }),
        n = E(),
        l = (0, b.mv)();
    return t === g.jP.SIDEBAR
        ? (0, r.jsx)(S, { onClick: l })
        : t === g.jP.POPOUT
          ? (0, r.jsx)(y.Z, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, i) =>
                    (0, r.jsx)(S, {
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
                  dialogClassName: C.positionLayer,
                  children: (t, n, i) =>
                      (0, r.jsx)(S, {
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
