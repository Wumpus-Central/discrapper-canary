n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(91192),
    o = n(442837),
    a = n(481060),
    s = n(377171),
    c = n(276952),
    u = n(682662),
    d = n(178088),
    p = n(306680),
    f = n(944486),
    h = n(594174),
    g = n(821020),
    m = n(370774),
    b = n(128008),
    _ = n(961040),
    O = n(932711),
    y = n(871301),
    v = n(981631),
    j = n(490897),
    C = n(86517);
function E() {
    let e = (0, o.e7)([h.default], () => h.default.getCurrentUser());
    return (0, o.e7)(
        [p.ZP],
        () => (null == e ? void 0 : e.id) != null && p.ZP.getMentionCount(e.id, j.W.NOTIFICATION_CENTER) > 0,
    );
}
function x(e) {
    var t, n;
    let { onClick: d, selectedOverride: p = !1, popoutProps: h, ref: _ } = e,
        j = (0, l.Ie)("notifications-inbox"),
        [x, S] = i.useState(!1),
        I = (0, m.D)(),
        P = p || I,
        { notificationCenterVariant: N } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: Z,
            badgeDimensions: T,
            unreadChannelsCount: w,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, m.O4)(),
                i = E(),
                { badge: l, dimensions: o } = (0, b.h6)({ isSelected: e });
            return t === g.jP.LEGACY
                ? {
                      badge: i
                          ? (0, r.jsx)(a.fWl, {
                                style: {
                                    height: y.zw,
                                    width: y.zw,
                                    position: "relative",
                                },
                                color: s.Z.STATUS_DANGER,
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
        A = N === g.jP.LEGACY ? a.xx7 : a.Dkj,
        R = (0, o.e7)([f.Z], () => f.Z.getChannelId()),
        D = i.useMemo(() => {
            if (N === g.jP.SIDEBAR) return v.Z5c.CHANNEL(v.STv, R);
        }, [N, R]);
    return (0, r.jsxs)(u.H, {
        ref: _,
        children: [
            (0, r.jsx)(c.Z, {
                selected: P && N === g.jP.SIDEBAR,
                hovered: x && N === g.jP.SIDEBAR,
                unread: w > 0,
                className: C.pill,
                disabled: N === g.jP.LEGACY,
            }),
            (0, r.jsx)(O.Z, {
                children: (0, r.jsx)(a.aRk, {
                    selected: P || x,
                    lowerBadge: Z,
                    lowerBadgeSize: T,
                    children: (0, r.jsx)(
                        a.LYs,
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
                                selected: P || x,
                                onMouseEnter: () => S(!0),
                                onMouseLeave: () => S(!1),
                                children: (0, r.jsx)(A, {
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
function S() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButton" }),
        n = E(),
        l = (0, b.mv)();
    return t === g.jP.SIDEBAR
        ? (0, r.jsx)(x, { onClick: l })
        : t === g.jP.POPOUT
          ? (0, r.jsx)(_.Z, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, i) =>
                    (0, r.jsx)(x, {
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
                      (0, r.jsx)(x, {
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
