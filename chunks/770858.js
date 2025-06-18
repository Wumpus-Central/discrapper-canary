n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(91192),
    o = n(442837),
    s = n(481060),
    a = n(377171),
    c = n(276952),
    u = n(682662),
    d = n(593364),
    h = n(455199),
    p = n(178088),
    f = n(592125),
    g = n(430824),
    m = n(306680),
    b = n(944486),
    y = n(594174),
    O = n(821020),
    _ = n(370774),
    v = n(961040),
    C = n(739340),
    j = n(932711),
    S = n(981631),
    x = n(490897),
    E = n(522458);
function P() {
    let e = (0, o.e7)([y.default], () => y.default.getCurrentUser());
    return (0, o.e7)([m.ZP], () => (null == e ? void 0 : e.id) != null && m.ZP.getMentionCount(e.id, x.W.NOTIFICATION_CENTER) > 0);
}
function I(e) {
    var t, n;
    let { onClick: p, selectedOverride: y = !1, popoutProps: v, ref: x } = e,
        I = (0, l.Ie)('notifications-inbox'),
        [N, w] = i.useState(!1),
        Z = (0, _.D)(),
        T = y || Z,
        { anyUnread: A, unreadRecentMentionsCount: R } = (function () {
            let e = (0, C.wt)(),
                t = (0, o.e7)([m.ZP], () => e.some((e) => m.ZP.hasUnread(e))),
                n = (0, o.e7)([h.Z], () => h.Z.getSettingsFilteredMentions());
            return {
                anyUnread: t,
                unreadRecentMentionsCount: (0, o.e7)(
                    [m.ZP, f.Z, g.Z],
                    () => {
                        var e, t;
                        return null != (t = null == n || null == (e = n.filter((e) => (0, _.YH)(e, g.Z, f.Z, m.ZP))) ? void 0 : e.length) ? t : 0;
                    },
                    [n]
                )
            };
        })(),
        { notificationCenterVariant: D } = O.Lk.useExperiment({ location: 'NotificationsInboxButtonInner' }),
        L = P(),
        M =
            D === O.jP.LEGACY
                ? L
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
                : R > 0
                  ? (0, d.N)(R)
                  : A
                    ? (0, r.jsx)(s.fWl, {
                          style: {
                              height: 12,
                              width: 12,
                              top: -2,
                              left: -2,
                              position: 'relative'
                          },
                          color: a.Z.BG_BRAND
                      })
                    : null,
        k = D === O.jP.LEGACY ? s.xx7 : s.Dkj,
        U = (0, o.e7)([b.Z], () => b.Z.getChannelId()),
        G = i.useMemo(() => {
            if (D === O.jP.SIDEBAR) return S.Z5c.NOTIFICATIONS_INBOX(null != U ? U : void 0);
        }, [D, U]);
    return (0, r.jsxs)(u.H, {
        ref: x,
        children: [
            D === O.jP.SIDEBAR &&
                (0, r.jsx)(c.Z, {
                    selected: T,
                    hovered: N,
                    unread: A,
                    className: E.pill
                }),
            (0, r.jsx)(j.Z, {
                children: (0, r.jsx)(s.aRk, {
                    selected: T || N,
                    lowerBadge: M,
                    children: (0, r.jsx)(
                        s.LYs,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, I, v)),
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
function N() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = O.Lk.useExperiment({ location: 'NotificationsInboxButton' }),
        n = P();
    return t === O.jP.SIDEBAR
        ? (0, r.jsx)(I, {})
        : t === O.jP.POPOUT
          ? (0, r.jsx)(v.Z, {
                targetElementRef: e,
                popoutPosition: 'right',
                popoutAlign: 'bottom',
                children: (t, n, i) =>
                    (0, r.jsx)(I, {
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
                  dialogClassName: E.positionLayer,
                  children: (t, n, i) =>
                      (0, r.jsx)(I, {
                          ref: e,
                          selectedOverride: n,
                          onClick: t,
                          popoutProps: i
                      })
              })
            : null;
}
