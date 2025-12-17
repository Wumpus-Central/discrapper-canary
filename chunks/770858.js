n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(91192),
    a = n(442837),
    o = n(692547),
    s = n(481060),
    c = n(276952),
    u = n(682662),
    d = n(178088),
    f = n(306680),
    h = n(944486),
    p = n(594174),
    g = n(821020),
    b = n(370774),
    m = n(128008),
    y = n(961040),
    O = n(932711),
    v = n(871301),
    j = n(981631),
    C = n(490897),
    x = n(678878);
function E() {
    let e = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    return (0, a.e7)(
        [f.ZP],
        () => (null == e ? void 0 : e.id) != null && f.ZP.getMentionCount(e.id, C.W.NOTIFICATION_CENTER) > 0,
    );
}
function S(e) {
    var t, n;
    let { onClick: d, selectedOverride: f = !1, popoutProps: p, ref: y } = e,
        C = (0, l.Ie)("notifications-inbox"),
        [S, I] = i.useState(!1),
        _ = (0, b.D)(),
        P = f || _,
        { notificationCenterVariant: N } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: Z,
            badgeDimensions: w,
            unreadChannelsCount: T,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, b.O4)(),
                i = E(),
                { badge: l, dimensions: a } = (0, m.h6)({ isSelected: e });
            return t === g.jP.LEGACY
                ? {
                      badge: i
                          ? (0, r.jsx)(s.fWl, {
                                style: {
                                    height: v.zw,
                                    width: v.zw,
                                    position: "relative",
                                },
                                color: o.Z.colors.STATUS_DANGER.css,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: {
                          height: v.zw,
                          width: v.zw,
                      },
                  }
                : {
                      badge: l,
                      unreadChannelsCount: n.length,
                      badgeDimensions: a,
                  };
        })(P),
        A = N === g.jP.LEGACY ? s.xx7 : s.Dkj,
        R = (0, a.e7)([h.Z], () => h.Z.getChannelId()),
        D = i.useMemo(() => {
            if (N === g.jP.SIDEBAR) return j.Z5c.CHANNEL(j.STv, R);
        }, [N, R]);
    return (0, r.jsxs)(u.H, {
        ref: y,
        children: [
            (0, r.jsx)(c.Z, {
                selected: P && N === g.jP.SIDEBAR,
                hovered: S && N === g.jP.SIDEBAR,
                unread: T > 0,
                className: x.pill,
                disabled: N === g.jP.LEGACY,
            }),
            (0, r.jsx)(O.Z, {
                children: (0, r.jsx)(s.aRk, {
                    selected: P || S,
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
                        })({}, C, p)),
                        (n = n =
                            {
                                onClick: d,
                                to: D,
                                selected: P || S,
                                onMouseEnter: () => I(!0),
                                onMouseLeave: () => I(!1),
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
function I() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = (0, g.pN)({ location: "NotificationsInboxButton" }),
        n = E(),
        l = (0, m.mv)();
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
                  dialogClassName: x.positionLayer,
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
