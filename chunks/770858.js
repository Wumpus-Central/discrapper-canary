n.d(t, { Z: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(91192),
    o = n(442837),
    s = n(481060),
    a = n(276952),
    c = n(682662),
    u = n(593364),
    d = n(944486),
    h = n(821020),
    p = n(846355),
    f = n(961040),
    g = n(932711),
    m = n(981631),
    b = n(531397);
function y(e) {
    var t, n;
    let { onClick: f, selectedOverride: y = !1, popoutProps: O } = e,
        v = (0, l.Ie)('notifications-inbox'),
        [_, C] = i.useState(!1),
        j = y || window.location.pathname.startsWith(m.Z5c.NOTIFICATIONS_INBOX()),
        S = (0, o.e7)([p.Z], () => p.Z.unreadMessageIds),
        E = S.size > 0 ? (0, u.N)(S.size) : null,
        { notificationCenterVariant: x } = h.L.useExperiment({ location: 'NotificationsInboxButtonInner' }),
        P = (0, o.e7)([d.Z], () => d.Z.getChannelId()),
        I = i.useMemo(() => {
            if ('sidebar' === x) return m.Z5c.NOTIFICATIONS_INBOX(null != P ? P : void 0);
        }, [x, P]);
    return (0, r.jsxs)(c.H, {
        children: [
            'sidebar' === x &&
                (0, r.jsx)(a.Z, {
                    selected: j,
                    hovered: _,
                    unread: S.size > 0,
                    className: b.pill
                }),
            (0, r.jsx)(g.Z, {
                children: (0, r.jsx)(s.aRk, {
                    selected: j || _,
                    lowerBadge: E,
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
                        })({}, v, O)),
                        (n = n =
                            {
                                onClick: f,
                                to: I,
                                selected: j || _,
                                onMouseEnter: () => C(!0),
                                onMouseLeave: () => C(!1),
                                children: (0, r.jsx)(s.Dkj, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: b.notificationsIcon,
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
function O() {
    let { notificationCenterVariant: e } = h.L.useExperiment({ location: 'NotificationsInboxButton' });
    return 'sidebar' === e
        ? (0, r.jsx)(y, {})
        : 'popout' === e
          ? (0, r.jsx)(f.Z, {
                popoutPosition: 'right',
                popoutAlign: 'bottom',
                children: (e, t, n) =>
                    (0, r.jsx)(y, {
                        selectedOverride: t,
                        onClick: e,
                        popoutProps: n
                    })
            })
          : null;
}
