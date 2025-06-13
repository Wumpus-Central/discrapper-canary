n.d(t, { Z: () => x }), n(388685);
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
    p = n(592125),
    f = n(430824),
    g = n(306680),
    m = n(944486),
    b = n(821020),
    y = n(370774),
    O = n(961040),
    _ = n(739340),
    v = n(932711),
    C = n(981631),
    j = n(522458);
function S(e) {
    var t, n;
    let { onClick: O, selectedOverride: S = !1, popoutProps: x, ref: E } = e,
        P = (0, l.Ie)('notifications-inbox'),
        [I, w] = i.useState(!1),
        N = (0, y.D)(),
        Z = S || N,
        { anyUnread: T, unreadRecentMentionsCount: A } = (function () {
            let e = (0, _.wt)(),
                t = (0, o.e7)([g.ZP], () => e.some((e) => g.ZP.hasUnread(e))),
                n = (0, o.e7)([h.Z], () => h.Z.getSettingsFilteredMentions());
            return {
                anyUnread: t,
                unreadRecentMentionsCount: (0, o.e7)(
                    [g.ZP, p.Z, f.Z],
                    () => {
                        var e, t;
                        return null != (t = null == n || null == (e = n.filter((e) => (0, y.YH)(e, f.Z, p.Z, g.ZP))) ? void 0 : e.length) ? t : 0;
                    },
                    [n]
                )
            };
        })(),
        R =
            A > 0
                ? (0, d.N)(A)
                : T
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
        { notificationCenterVariant: D } = b.L.useExperiment({ location: 'NotificationsInboxButtonInner' }),
        L = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
        M = i.useMemo(() => {
            if ('sidebar' === D) return C.Z5c.NOTIFICATIONS_INBOX(null != L ? L : void 0);
        }, [D, L]);
    return (0, r.jsxs)(u.H, {
        ref: E,
        children: [
            'sidebar' === D &&
                (0, r.jsx)(c.Z, {
                    selected: Z,
                    hovered: I,
                    unread: T,
                    className: j.pill
                }),
            (0, r.jsx)(v.Z, {
                children: (0, r.jsx)(s.aRk, {
                    selected: Z || I,
                    lowerBadge: R,
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
                        })({}, P, x)),
                        (n = n =
                            {
                                onClick: O,
                                to: M,
                                selected: Z || I,
                                onMouseEnter: () => w(!0),
                                onMouseLeave: () => w(!1),
                                children: (0, r.jsx)(s.Dkj, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: j.notificationsIcon,
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
        { notificationCenterVariant: t } = b.L.useExperiment({ location: 'NotificationsInboxButton' });
    return 'sidebar' === t
        ? (0, r.jsx)(S, {})
        : 'popout' === t
          ? (0, r.jsx)(O.Z, {
                targetElementRef: e,
                popoutPosition: 'right',
                popoutAlign: 'bottom',
                children: (t, n, i) =>
                    (0, r.jsx)(S, {
                        ref: e,
                        selectedOverride: n,
                        onClick: t,
                        popoutProps: i
                    })
            })
          : null;
}
