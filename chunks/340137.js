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
    E = n(61626);
function O(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: l, ref: o } = e,
        [s, d] = i.useState(!1),
        h = (0, f.D)(),
        { unreadRecentMentionsCount: g, unreadChannelIds: m } = (0, f.O4)(),
        b =
            g > 0
                ? {
                      type: 'mentions',
                      count: g
                  }
                : m.length > 0
                  ? {
                        type: 'unread',
                        count: m.length
                    }
                  : { type: null },
        O = n || n || h,
        y = (0, r.jsx)(c.Dkj, {
            className: E.icon,
            color: s || O ? c.TVs.colors.ICON_PRIMARY : c.TVs.colors.ICON_TERTIARY,
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
                shouldShow: !O,
                text: _.intl.string(_.t.HcoRu7),
                children: (e) => {
                    var n, i, s;
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
                                className: E.clickableContainer
                            },
                            e,
                            l
                        )),
                        (i = i =
                            {
                                onMouseEnter: () => {
                                    var t;
                                    (d(!0), null == (t = e.onMouseEnter) || t.call(e));
                                },
                                onMouseLeave: () => {
                                    var t;
                                    (d(!1), null == (t = e.onMouseLeave) || t.call(e));
                                },
                                onClick: () => {
                                    var n, r;
                                    (null == t || t(), null == l || null == (n = l.onClick) || n.call(l), null == (r = e.onClick) || r.call(e));
                                },
                                children: [
                                    (0, r.jsx)('div', {
                                        className: a()(E.iconWrapper, null),
                                        children:
                                            'unread' === b.type
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(u.ZP, {
                                                              width: 20,
                                                              height: 20,
                                                              mask: u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                              children: y
                                                          }),
                                                          (0, r.jsx)('div', { className: E.unreadDot })
                                                      ]
                                                  })
                                                : y
                                    }),
                                    'mentions' === b.type && null != b.count && (0, r.jsx)(c.mAB, { count: b.count }),
                                    'unread' === b.type &&
                                        null != b.count &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'eyebrow',
                                            children: (s = b.count) > 50 ? ''.concat(50, '+') : s.toString()
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
    let e = i.useRef(null),
        { notificationCenterVariant: t } = h.Lk.useExperiment({ location: 'NotificationsInboxButton' }),
        n = (0, s.e7)([d.Z], () => d.Z.getChannelId()),
        l = i.useMemo(() => b.Z5c.NOTIFICATIONS_INBOX(null != n ? n : void 0), [n]),
        a = (0, g.m)();
    return t === h.jP.SIDEBAR
        ? (0, r.jsx)(O, {
              onClick: () => {
                  (a(), (0, o.uL)(l));
              }
          })
        : t === h.jP.POPOUT
          ? (0, r.jsx)(m.Z, {
                targetElementRef: e,
                popoutPosition: 'bottom',
                popoutAlign: 'left',
                spacing: 2,
                children: (t, n, i) =>
                    (0, r.jsx)(O, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            (a(), t());
                        },
                        popoutProps: i
                    })
            })
          : null;
}
