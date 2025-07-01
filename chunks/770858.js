(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(91192),
    o = n(442837),
    a = n(481060),
    s = n(377171),
    c = n(276952),
    u = n(682662),
    d = n(593364),
    h = n(455199),
    p = n(178088),
    f = n(592125),
    g = n(430824),
    m = n(306680),
    b = n(944486),
    _ = n(594174),
    O = n(821020),
    y = n(370774),
    v = n(961040),
    C = n(739340),
    j = n(932711),
    S = n(981631),
    E = n(490897),
    x = n(522458);
function I() {
    let e = (0, o.e7)([_.default], () => _.default.getCurrentUser());
    return (0, o.e7)([m.ZP], () => (null == e ? void 0 : e.id) != null && m.ZP.getMentionCount(e.id, E.W.NOTIFICATION_CENTER) > 0);
}
function P(e) {
    var t, n;
    let { onClick: p, selectedOverride: _ = !1, popoutProps: v, ref: E } = e,
        P = (0, l.Ie)('notifications-inbox'),
        [N, w] = i.useState(!1),
        Z = (0, y.D)(),
        T = _ || Z,
        { anyUnread: A, unreadRecentMentionsCount: R } = (function () {
            let e = (0, C.wt)(),
                t = (0, o.e7)([m.ZP], () => e.some((e) => m.ZP.hasUnread(e))),
                n = (0, o.Wu)([h.Z], () => {
                    var e;
                    return null != (e = h.Z.getSettingsFilteredMentions()) ? e : [];
                });
            return {
                anyUnread: t,
                unreadRecentMentionsCount: (0, o.e7)([m.ZP, f.Z, g.Z], () => n.filter((e) => (0, y.YH)(e, g.Z, f.Z, m.ZP)).length, [n])
            };
        })(),
        { notificationCenterVariant: D } = O.Lk.useExperiment({ location: 'NotificationsInboxButtonInner' }),
        L = I(),
        M =
            D === O.jP.LEGACY
                ? L
                    ? (0, r.jsx)(a.fWl, {
                          style: {
                              height: 12,
                              width: 12,
                              top: -2,
                              left: -2,
                              position: 'relative'
                          },
                          color: s.Z.STATUS_DANGER
                      })
                    : null
                : R > 0
                  ? (0, d.N)(R)
                  : null,
        k = D === O.jP.LEGACY ? a.xx7 : a.Dkj,
        U = (0, o.e7)([b.Z], () => b.Z.getChannelId()),
        G = i.useMemo(() => {
            if (D === O.jP.SIDEBAR) return S.Z5c.NOTIFICATIONS_INBOX(null != U ? U : void 0);
        }, [D, U]);
    return (0, r.jsxs)(u.H, {
        ref: E,
        children: [
            (0, r.jsx)(c.Z, {
                selected: T && D === O.jP.SIDEBAR,
                hovered: N && D === O.jP.SIDEBAR,
                unread: A,
                className: x.pill,
                disabled: D === O.jP.LEGACY
            }),
            (0, r.jsx)(j.Z, {
                children: (0, r.jsx)(a.aRk, {
                    selected: T || N,
                    lowerBadge: M,
                    children: (0, r.jsx)(
                        a.LYs,
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
                        })({}, P, v)),
                        (n = n =
                            {
                                onClick: p,
                                to: G,
                                selected: T || N,
                                onMouseEnter: () => w(!0),
                                onMouseLeave: () => w(!1),
                                children: (0, r.jsx)(k, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: x.notificationsIcon,
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
function N() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = O.Lk.useExperiment({ location: 'NotificationsInboxButton' }),
        n = I();
    return t === O.jP.SIDEBAR
        ? (0, r.jsx)(P, {})
        : t === O.jP.POPOUT
          ? (0, r.jsx)(v.Z, {
                targetElementRef: e,
                popoutPosition: 'right',
                popoutAlign: 'bottom',
                children: (t, n, i) =>
                    (0, r.jsx)(P, {
                        ref: e,
                        selectedOverride: n,
                        onClick: t,
                        popoutProps: i
                    })
            })
          : t === O.jP.LEGACY
            ? (0, r.jsx)(p.k, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: 'right',
                  popoutAlign: 'top',
                  dialogClassName: x.positionLayer,
                  children: (t, n, i) =>
                      (0, r.jsx)(P, {
                          ref: e,
                          selectedOverride: n,
                          onClick: t,
                          popoutProps: i
                      })
              })
            : null;
}
