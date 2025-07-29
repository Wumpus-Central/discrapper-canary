(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(948789),
    s = n(442837),
    c = n(481060),
    u = n(686546),
    d = n(944486),
    p = n(358085),
    h = n(821020),
    f = n(370774),
    g = n(128008),
    m = n(961040),
    b = n(981631),
    _ = n(388032),
    O = n(61626);
function E(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: l, ref: o, focusSectionProps: s } = e,
        [d, h] = i.useState(!1),
        g = (0, f.D)(),
        { unreadRecentMentionsCount: m, unreadChannelIds: b } = (0, f.O4)(),
        E =
            m > 0
                ? {
                      type: 'mentions',
                      count: m
                  }
                : b.length > 0
                  ? {
                        type: 'unread',
                        count: b.length
                    }
                  : { type: null },
        y = n || n || g,
        v = (0, r.jsx)(c.Dkj, {
            className: O.icon,
            color: d || y ? c.TVs.colors.ICON_PRIMARY : c.TVs.colors.ICON_TERTIARY,
            size: 'custom',
            height: 20,
            width: 20
        });
    return (0, r.jsxs)(c.Kqy, {
        gap: 0,
        direction: 'horizontal',
        children: [
            (0, r.jsx)(c.LZC, {
                size: (0, p.isMac)() ? 4 : 72,
                horizontal: !0
            }),
            ' ',
            (0, r.jsx)(c.ua7, {
                shouldShow: !y,
                text: _.intl.string(_.t.HcoRu7),
                children: (e) => {
                    var n, i, d;
                    return (0, r.jsxs)(
                        c.P3F,
                        ((n = (function (e) {
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
                        })(
                            {
                                innerRef: o,
                                className: O.clickableContainer
                            },
                            s,
                            e,
                            l
                        )),
                        (i = i =
                            {
                                onMouseEnter: () => {
                                    var t;
                                    (h(!0), null == (t = e.onMouseEnter) || t.call(e));
                                },
                                onMouseLeave: () => {
                                    var t;
                                    (h(!1), null == (t = e.onMouseLeave) || t.call(e));
                                },
                                onClick: () => {
                                    var n, r;
                                    (null == t || t(), null == l || null == (n = l.onClick) || n.call(l), null == (r = e.onClick) || r.call(e));
                                },
                                children: [
                                    (0, r.jsx)('div', {
                                        className: a()(O.iconWrapper, null),
                                        children:
                                            'unread' === E.type
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(u.ZP, {
                                                              width: 20,
                                                              height: 20,
                                                              mask: u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                              children: v
                                                          }),
                                                          (0, r.jsx)('div', { className: O.unreadDot })
                                                      ]
                                                  })
                                                : v
                                    }),
                                    'mentions' === E.type && null != E.count && (0, r.jsx)(c.mAB, { count: E.count }),
                                    'unread' === E.type &&
                                        null != E.count &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'eyebrow',
                                            children: (d = E.count) > 50 ? ''.concat(50, '+') : d.toString()
                                        })
                                ]
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n)
                    );
                }
            })
        ]
    });
}
function y() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = i.useRef(null),
        { notificationCenterVariant: n } = h.Lk.useExperiment({ location: 'NotificationsInboxButton' }),
        l = (0, s.e7)([d.Z], () => d.Z.getChannelId()),
        a = i.useMemo(() => b.Z5c.NOTIFICATIONS_INBOX(null != l ? l : void 0), [l]),
        c = (0, g.m)();
    return n === h.jP.SIDEBAR
        ? (0, r.jsx)(E, {
              onClick: () => {
                  (c(), (0, o.uL)(a));
              },
              focusSectionProps: e
          })
        : n === h.jP.POPOUT
          ? (0, r.jsx)(m.Z, {
                targetElementRef: t,
                popoutPosition: 'bottom',
                popoutAlign: 'left',
                spacing: 2,
                children: (n, i, l) =>
                    (0, r.jsx)(E, {
                        ref: t,
                        selectedOverride: i,
                        onClick: () => {
                            (c(), n());
                        },
                        popoutProps: l,
                        focusSectionProps: e
                    })
            })
          : null;
}
