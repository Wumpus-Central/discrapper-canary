(n.d(t, { Z: () => x }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(91192),
    o = n(442837),
    s = n(481060),
    a = n(377171),
    c = n(276952),
    u = n(682662),
    d = n(593364),
    h = n(178088),
    p = n(306680),
    f = n(944486),
    g = n(594174),
    m = n(821020),
    b = n(370774),
    _ = n(961040),
    O = n(932711),
    y = n(981631),
    v = n(490897),
    C = n(522458);
function j() {
    let e = (0, o.e7)([g.default], () => g.default.getCurrentUser());
    return (0, o.e7)([p.ZP], () => (null == e ? void 0 : e.id) != null && p.ZP.getMentionCount(e.id, v.W.NOTIFICATION_CENTER) > 0);
}
function E(e) {
    var t, n;
    let { onClick: h, selectedOverride: p = !1, popoutProps: g, ref: _ } = e,
        v = (0, l.Ie)('notifications-inbox'),
        [E, x] = i.useState(!1),
        S = (0, b.D)(),
        I = p || S,
        { unreadRecentMentionsCount: P, unreadChannelIds: N } = (0, b.O4)(),
        { notificationCenterVariant: w } = m.Lk.useExperiment({ location: 'NotificationsInboxButtonInner' }),
        Z = j(),
        T =
            w === m.jP.LEGACY
                ? Z
                    ? (0, r.jsx)(s.fWl, {
                          style: {
                              height: 12,
                              width: 12,
                              top: -2,
                              left: -2,
                              position: 'relative'
                          },
                          color: a.Z.STATUS_DANGER
                      })
                    : null
                : P > 0
                  ? (0, d.N)(P)
                  : null,
        A = w === m.jP.LEGACY ? s.xx7 : s.Dkj,
        R = (0, o.e7)([f.Z], () => f.Z.getChannelId()),
        D = i.useMemo(() => {
            if (w === m.jP.SIDEBAR) return y.Z5c.NOTIFICATIONS_INBOX(null != R ? R : void 0);
        }, [w, R]);
    return (0, r.jsxs)(u.H, {
        ref: _,
        children: [
            (0, r.jsx)(c.Z, {
                selected: I && w === m.jP.SIDEBAR,
                hovered: E && w === m.jP.SIDEBAR,
                unread: N.length > 0,
                className: C.pill,
                disabled: w === m.jP.LEGACY
            }),
            (0, r.jsx)(O.Z, {
                children: (0, r.jsx)(s.aRk, {
                    selected: I || E,
                    lowerBadge: T,
                    children: (0, r.jsx)(
                        s.LYs,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, v, g)),
                        (n = n =
                            {
                                onClick: h,
                                to: D,
                                selected: I || E,
                                onMouseEnter: () => x(!0),
                                onMouseLeave: () => x(!1),
                                children: (0, r.jsx)(A, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: C.notificationsIcon,
                                    width: 20,
                                    height: 20
                                })
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
                        t)
                    )
                })
            })
        ]
    });
}
function x() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = m.Lk.useExperiment({ location: 'NotificationsInboxButton' }),
        n = j();
    return t === m.jP.SIDEBAR
        ? (0, r.jsx)(E, {})
        : t === m.jP.POPOUT
          ? (0, r.jsx)(_.Z, {
                targetElementRef: e,
                popoutPosition: 'right',
                popoutAlign: 'bottom',
                children: (t, n, i) =>
                    (0, r.jsx)(E, {
                        ref: e,
                        selectedOverride: n,
                        onClick: t,
                        popoutProps: i
                    })
            })
          : t === m.jP.LEGACY
            ? (0, r.jsx)(h.k, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: 'right',
                  popoutAlign: 'top',
                  dialogClassName: C.positionLayer,
                  children: (t, n, i) =>
                      (0, r.jsx)(E, {
                          ref: e,
                          selectedOverride: n,
                          onClick: t,
                          popoutProps: i
                      })
              })
            : null;
}
