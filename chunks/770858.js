n.d(t, { Z: () => v }), n(388685);
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
    f = n(370774),
    g = n(961040),
    m = n(932711),
    b = n(981631),
    y = n(522458);
function O(e) {
    var t, n;
    let { onClick: g, selectedOverride: O = !1, popoutProps: v, ref: _ } = e,
        C = (0, l.Ie)('notifications-inbox'),
        [j, S] = i.useState(!1),
        E = (0, f.D)(),
        x = O || E,
        P = (0, o.e7)([p.Z], () => p.Z.unreadMessageIds),
        I = P.size > 0 ? (0, u.N)(P.size) : null,
        { notificationCenterVariant: w } = h.L.useExperiment({ location: 'NotificationsInboxButtonInner' }),
        N = (0, o.e7)([d.Z], () => d.Z.getChannelId()),
        Z = i.useMemo(() => {
            if ('sidebar' === w) return b.Z5c.NOTIFICATIONS_INBOX(null != N ? N : void 0);
        }, [w, N]);
    return (0, r.jsxs)(c.H, {
        ref: _,
        children: [
            'sidebar' === w &&
                (0, r.jsx)(a.Z, {
                    selected: x,
                    hovered: j,
                    unread: P.size > 0,
                    className: y.pill
                }),
            (0, r.jsx)(m.Z, {
                children: (0, r.jsx)(s.aRk, {
                    selected: x || j,
                    lowerBadge: I,
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
                        })({}, C, v)),
                        (n = n =
                            {
                                onClick: g,
                                to: Z,
                                selected: x || j,
                                onMouseEnter: () => S(!0),
                                onMouseLeave: () => S(!1),
                                children: (0, r.jsx)(s.Dkj, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: y.notificationsIcon,
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
function v() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = h.L.useExperiment({ location: 'NotificationsInboxButton' });
    return 'sidebar' === t
        ? (0, r.jsx)(O, {})
        : 'popout' === t
          ? (0, r.jsx)(g.Z, {
                targetElementRef: e,
                popoutPosition: 'right',
                popoutAlign: 'bottom',
                children: (t, n, i) =>
                    (0, r.jsx)(O, {
                        ref: e,
                        selectedOverride: n,
                        onClick: t,
                        popoutProps: i
                    })
            })
          : null;
}
