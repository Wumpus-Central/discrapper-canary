n.d(t, { Z: () => x }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(91192),
    o = n(442837),
    s = n(481060),
    a = n(377171),
    c = n(276952),
    u = n(682662),
    d = n(178088),
    h = n(306680),
    p = n(944486),
    f = n(594174),
    g = n(821020),
    m = n(370774),
    b = n(128008),
    O = n(961040),
    _ = n(932711),
    y = n(871301),
    C = n(981631),
    v = n(490897),
    j = n(340151);
function E() {
    let e = (0, o.e7)([f.default], () => f.default.getCurrentUser());
    return (0, o.e7)(
        [h.ZP],
        () => (null == e ? void 0 : e.id) != null && h.ZP.getMentionCount(e.id, v.W.NOTIFICATION_CENTER) > 0,
    );
}
function S(e) {
    var t, n;
    let { onClick: d, selectedOverride: h = !1, popoutProps: f, ref: O } = e,
        v = (0, l.Ie)("notifications-inbox"),
        [S, x] = i.useState(!1),
        I = (0, m.D)(),
        P = h || I,
        { notificationCenterVariant: N } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: w,
            badgeDimensions: Z,
            unreadChannelsCount: T,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, m.O4)(),
                i = E(),
                { badge: l, dimensions: o } = (0, b.h6)({ isSelected: e });
            return t === g.jP.LEGACY
                ? {
                      badge: i
                          ? (0, r.jsx)(s.fWl, {
                                style: {
                                    height: y.zw,
                                    width: y.zw,
                                    position: "relative",
                                },
                                color: a.Z.STATUS_DANGER,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: {
                          height: y.zw,
                          width: y.zw,
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
            if (N === g.jP.SIDEBAR) return C.Z5c.CHANNEL(C.STv, R);
        }, [N, R]);
    return (0, r.jsxs)(u.H, {
        ref: O,
        children: [
            (0, r.jsx)(c.Z, {
                selected: P && N === g.jP.SIDEBAR,
                hovered: S && N === g.jP.SIDEBAR,
                unread: T > 0,
                className: j.pill,
                disabled: N === g.jP.LEGACY,
            }),
            (0, r.jsx)(_.Z, {
                children: (0, r.jsx)(s.aRk, {
                    selected: P || S,
                    lowerBadge: w,
                    lowerBadgeSize: Z,
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
                        })({}, v, f)),
                        (n = n =
                            {
                                onClick: d,
                                to: D,
                                selected: P || S,
                                onMouseEnter: () => x(!0),
                                onMouseLeave: () => x(!1),
                                children: (0, r.jsx)(A, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: j.notificationsIcon,
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
function x() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButton" }),
        n = E(),
        l = (0, b.mv)();
    return t === g.jP.SIDEBAR
        ? (0, r.jsx)(S, { onClick: l })
        : t === g.jP.POPOUT
          ? (0, r.jsx)(O.Z, {
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
                  dialogClassName: j.positionLayer,
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
