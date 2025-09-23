n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(948789),
    s = n(442837),
    c = n(212605),
    u = n(481060),
    d = n(686546),
    p = n(719961),
    f = n(264783),
    h = n(944486),
    g = n(358085),
    m = n(821020),
    b = n(370774),
    _ = n(128008),
    O = n(961040),
    E = n(981631),
    y = n(388032),
    v = n(10663);
let I = {
        cozy: 0,
        default: 0,
        compact: 0,
    },
    C = {
        cozy: 36,
        default: 24,
        compact: 14,
    },
    S = {
        cozy: 95,
        default: 84,
        compact: 72,
    };
function T(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: l, ref: o, focusSectionProps: s } = e,
        [h, m] = i.useState(!1),
        O = (0, b.D)(),
        E = n || O,
        T = n || E,
        {
            backForwardButtons: N,
            titlebarIconSize: P,
            titlebarHoverHighlight: j,
        } = (0, p.T)({ location: "NotificationsInboxTitleBarButton" }),
        x = (0, r.jsx)(u.Dkj, {
            className: v.icon,
            color: h || T ? u.TVs.colors.ICON_PRIMARY : u.TVs.colors.ICON_TERTIARY,
            size: P,
        }),
        { badge: A, badgeType: Z } = (0, _.h6)({ isSelected: E }),
        w = (0, g.isDesktop)() && N,
        L = (0, f.A)(),
        R = (0, g.isMac)() ? I[L] : w ? C[L] : S[L];
    return (0, r.jsxs)(u.Kqy, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, r.jsx)(u.LZC, {
                size: R,
                horizontal: !0,
            }),
            (0, r.jsx)(u.ua7, {
                shouldShow: !T,
                text: y.intl.string(y.t.HcoRu7),
                children: (e) => {
                    var n, i;
                    return (0, r.jsxs)(
                        u.P3F,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                innerRef: o,
                                className: a()(v.clickableContainer, { [v.withHoverHighlight]: j }),
                            },
                            s,
                            e,
                            l,
                        )),
                        (i = i =
                            {
                                onMouseEnter: () => {
                                    var t;
                                    m(!0), null == (t = e.onMouseEnter) || t.call(e);
                                },
                                onMouseLeave: () => {
                                    var t;
                                    m(!1), null == (t = e.onMouseLeave) || t.call(e);
                                },
                                onClick: () => {
                                    var n, r;
                                    null == t || t(),
                                        null == l || null == (n = l.onClick) || n.call(l),
                                        null == (r = e.onClick) || r.call(e);
                                },
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(v.iconWrapper, null),
                                        children:
                                            "unread" === Z
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(d.ZP, {
                                                              width: c.Z[P],
                                                              height: c.Z[P],
                                                              mask: d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                              children: x,
                                                          }),
                                                          (0, r.jsx)("div", { className: a()(v.unreadDot, v[P]) }),
                                                      ],
                                                  })
                                                : x,
                                    }),
                                    A,
                                ],
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
                        n),
                    );
                },
            }),
        ],
    });
}
function N() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = i.useRef(null),
        { notificationCenterVariant: n } = (0, m.pN)({ location: "NotificationsInboxButton" }),
        l = (0, s.e7)([h.Z], () => h.Z.getChannelId()),
        a = i.useMemo(() => E.Z5c.CHANNEL(E.STv, null != l ? l : void 0), [l]),
        c = (0, _.mv)();
    return n === m.jP.SIDEBAR
        ? (0, r.jsx)(T, {
              onClick: () => {
                  c(), (0, o.uL)(a);
              },
              focusSectionProps: e,
          })
        : n === m.jP.POPOUT
          ? (0, r.jsx)(O.Z, {
                targetElementRef: t,
                popoutPosition: "bottom",
                popoutAlign: "left",
                spacing: 2,
                children: (n, i, l) =>
                    (0, r.jsx)(T, {
                        ref: t,
                        selectedOverride: i,
                        onClick: () => {
                            c(), n();
                        },
                        popoutProps: l,
                        focusSectionProps: e,
                    }),
            })
          : null;
}
