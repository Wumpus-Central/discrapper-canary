(n.d(t, { Z: () => S }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(948789),
    s = n(442837),
    c = n(481060),
    u = n(686546),
    d = n(455199),
    p = n(592125),
    h = n(430824),
    f = n(306680),
    g = n(944486),
    m = n(358085),
    b = n(821020),
    _ = n(370774),
    E = n(961040),
    O = n(739340),
    y = n(981631),
    I = n(388032),
    v = n(61626);
function C(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: l, ref: o } = e,
        [g, b] = i.useState(!1),
        E = (0, _.D)(),
        { unreadRecentMentionsCount: y, unreadChannelIds: C } = (function () {
            let e = (0, O.wt)(),
                t = (0, s.Wu)([f.ZP], () => e.filter((e) => f.ZP.hasUnread(e)), [e]),
                n = (0, s.Wu)([d.Z], () => {
                    var e;
                    return null != (e = d.Z.getSettingsFilteredMentions()) ? e : [];
                });
            return {
                unreadRecentMentionsCount: (0, s.e7)(
                    [f.ZP, p.Z, h.Z],
                    () => {
                        var e, t;
                        return null != (t = null == n || null == (e = n.filter((e) => (0, _.YH)(e, h.Z, p.Z, f.ZP))) ? void 0 : e.length) ? t : 0;
                    },
                    [n]
                ),
                unreadChannelIds: t
            };
        })(),
        S =
            y > 0
                ? {
                      type: 'mentions',
                      count: y
                  }
                : C.length > 0
                  ? {
                        type: 'unread',
                        count: C.length
                    }
                  : { type: null },
        N = n || n || E,
        T = (0, r.jsx)(c.Dkj, {
            className: v.icon,
            color: g || N ? c.TVs.colors.ICON_PRIMARY : c.TVs.colors.ICON_TERTIARY,
            size: 'custom',
            height: 16,
            width: 16
        });
    return (0, r.jsxs)(c.Kqy, {
        gap: 0,
        direction: 'horizontal',
        children: [
            (0, r.jsx)(c.LZC, {
                size: (0, m.isMac)() ? 4 : 72,
                horizontal: !0
            }),
            (0, r.jsx)(c.ua7, {
                shouldShow: !N,
                text: I.intl.string(I.t.HcoRu7),
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
                                className: v.clickableContainer
                            },
                            e,
                            l
                        )),
                        (i = i =
                            {
                                onMouseEnter: () => {
                                    var t;
                                    (b(!0), null == (t = e.onMouseEnter) || t.call(e));
                                },
                                onMouseLeave: () => {
                                    var t;
                                    (b(!1), null == (t = e.onMouseLeave) || t.call(e));
                                },
                                onClick: () => {
                                    var n, r;
                                    (null == t || t(), null == l || null == (n = l.onClick) || n.call(l), null == (r = e.onClick) || r.call(e));
                                },
                                children: [
                                    (0, r.jsx)('div', {
                                        className: a()(v.iconWrapper, null),
                                        children:
                                            'unread' === S.type
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(u.ZP, {
                                                              width: 16,
                                                              height: 16,
                                                              mask: u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                              children: T
                                                          }),
                                                          (0, r.jsx)('div', { className: v.unreadDot })
                                                      ]
                                                  })
                                                : T
                                    }),
                                    'mentions' === S.type && null != S.count && (0, r.jsx)(c.mAB, { count: S.count }),
                                    'unread' === S.type &&
                                        null != S.count &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'eyebrow',
                                            children: (s = S.count) > 50 ? ''.concat(50, '+') : s.toString()
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
function S() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = b.Lk.useExperiment({ location: 'NotificationsInboxButton' }),
        n = (0, s.e7)([g.Z], () => g.Z.getChannelId()),
        l = i.useMemo(() => y.Z5c.NOTIFICATIONS_INBOX(null != n ? n : void 0), [n]);
    return t === b.jP.SIDEBAR
        ? (0, r.jsx)(C, { onClick: () => (0, o.uL)(l) })
        : t === b.jP.POPOUT
          ? (0, r.jsx)(E.Z, {
                targetElementRef: e,
                popoutPosition: 'bottom',
                popoutAlign: 'center',
                spacing: 4,
                children: (t, n, i) =>
                    (0, r.jsx)(C, {
                        ref: e,
                        selectedOverride: n,
                        onClick: t,
                        popoutProps: i
                    })
            })
          : null;
}
