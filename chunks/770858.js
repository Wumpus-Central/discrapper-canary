(n.d(t, { Z: () => I }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(377171),
    d = n(276952),
    h = n(682662),
    p = n(178088),
    f = n(306680),
    g = n(944486),
    m = n(594174),
    b = n(821020),
    _ = n(370774),
    O = n(128008),
    y = n(961040),
    C = n(932711),
    v = n(981631),
    j = n(490897),
    E = n(522458);
function S() {
    let e = (0, s.e7)([m.default], () => m.default.getCurrentUser());
    return (0, s.e7)([f.ZP], () => (null == e ? void 0 : e.id) != null && f.ZP.getMentionCount(e.id, j.W.NOTIFICATION_CENTER) > 0);
}
function x(e) {
    var t, n;
    let { onClick: l, selectedOverride: p = !1, popoutProps: f, ref: m } = e,
        O = (0, a.Ie)('notifications-inbox'),
        [y, j] = i.useState(!1),
        x = (0, _.D)(),
        I = p || x,
        { notificationCenterVariant: P } = b.Lk.useExperiment({ location: 'NotificationsInboxButtonInner' }),
        {
            badge: N,
            badgeDimensions: w,
            unreadChannelsCount: Z
        } = (function (e) {
            let { notificationCenterVariant: t } = b.Lk.useExperiment({ location: 'NotificationsInboxButtonInner' }),
                { unreadRecentMentionsCount: n, unreadChannelIds: i } = (0, _.O4)(),
                l = S();
            if (t === b.jP.LEGACY)
                return {
                    badge: l
                        ? (0, r.jsx)(c.fWl, {
                              style: {
                                  height: 13,
                                  width: 13,
                                  position: 'relative'
                              },
                              color: u.Z.STATUS_DANGER
                          })
                        : null,
                    unreadChannelsCount: 0,
                    badgeDimensions: {
                        height: 13,
                        width: 13
                    }
                };
            let { badge: a, dimensions: s } = (function (e, t, n) {
                if (e > 0)
                    return {
                        badge: (0, r.jsx)(c.mAB, {
                            count: e,
                            className: E.badgeTransition
                        }),
                        dimensions: {
                            height: 16,
                            width: (0, c.OVM)(e)
                        }
                    };
                if (t > 0) {
                    let e = (0, c.OVM)(t) - 3;
                    return {
                        badge: (0, r.jsx)(c.mAB, {
                            count: t,
                            style: {
                                width: e,
                                lineHeight: 13,
                                height: 13,
                                minHeight: 13,
                                minWidth: 13
                            },
                            className: o()(E.badgeTransition, E.grayBadge, { [E.selected]: n })
                        }),
                        dimensions: {
                            height: 13,
                            width: e
                        }
                    };
                }
                return { badge: null };
            })(n, i.length, e);
            return {
                badge: a,
                unreadChannelsCount: i.length,
                badgeDimensions: s
            };
        })(I),
        T = P === b.jP.LEGACY ? c.xx7 : c.Dkj,
        A = (0, s.e7)([g.Z], () => g.Z.getChannelId()),
        R = i.useMemo(() => {
            if (P === b.jP.SIDEBAR) return v.Z5c.NOTIFICATIONS_INBOX(null != A ? A : void 0);
        }, [P, A]);
    return (0, r.jsxs)(h.H, {
        ref: m,
        children: [
            (0, r.jsx)(d.Z, {
                selected: I && P === b.jP.SIDEBAR,
                hovered: y && P === b.jP.SIDEBAR,
                unread: Z > 0,
                className: E.pill,
                disabled: P === b.jP.LEGACY
            }),
            (0, r.jsx)(C.Z, {
                children: (0, r.jsx)(c.aRk, {
                    selected: I || y,
                    lowerBadge: N,
                    lowerBadgeSize: w,
                    children: (0, r.jsx)(
                        c.LYs,
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
                        })({}, O, f)),
                        (n = n =
                            {
                                onClick: l,
                                to: R,
                                selected: I || y,
                                onMouseEnter: () => j(!0),
                                onMouseLeave: () => j(!1),
                                children: (0, r.jsx)(T, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: E.notificationsIcon,
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
function I() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = b.Lk.useExperiment({ location: 'NotificationsInboxButton' }),
        n = S(),
        l = (0, O.m)();
    return t === b.jP.SIDEBAR
        ? (0, r.jsx)(x, {})
        : t === b.jP.POPOUT
          ? (0, r.jsx)(y.Z, {
                targetElementRef: e,
                popoutPosition: 'right',
                popoutAlign: 'bottom',
                children: (t, n, i) =>
                    (0, r.jsx)(x, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            (l(), t());
                        },
                        popoutProps: i
                    })
            })
          : t === b.jP.LEGACY
            ? (0, r.jsx)(p.k, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: 'right',
                  popoutAlign: 'top',
                  dialogClassName: E.positionLayer,
                  children: (t, n, i) =>
                      (0, r.jsx)(x, {
                          ref: e,
                          selectedOverride: n,
                          onClick: () => {
                              (l(), t());
                          },
                          popoutProps: i
                      })
              })
            : null;
}
