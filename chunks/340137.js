n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(948789),
    s = n(442837),
    c = n(481060),
    u = n(686546),
    d = n(336219),
    p = n(264783),
    f = n(944486),
    h = n(358085),
    g = n(821020),
    m = n(370774),
    b = n(128008),
    _ = n(961040),
    O = n(981631),
    E = n(388032),
    y = n(445202);
let v = {
        cozy: 6,
        default: 4,
        compact: 2,
    },
    I = {
        cozy: 36,
        default: 24,
        compact: 14,
    },
    C = {
        cozy: 95,
        default: 84,
        compact: 72,
    };
function S(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: l, ref: o, focusSectionProps: s } = e,
        [f, g] = i.useState(!1),
        _ = (0, m.D)(),
        O = n || _,
        S = n || O,
        N = (0, r.jsx)(c.Dkj, {
            className: y.icon,
            color: f || S ? c.TVs.colors.ICON_PRIMARY : c.TVs.colors.ICON_TERTIARY,
            size: "custom",
            height: 20,
            width: 20,
        }),
        { badge: T, badgeType: P } = (0, b.h6)({ isSelected: O }),
        { backForwardButtons: j } = d.MK.useExperiment({ location: "AppTitleBar" }),
        A = (0, h.isDesktop)() && j,
        x = (0, p.A)(),
        Z = (0, h.isMac)() ? v[x] : A ? I[x] : C[x];
    return (0, r.jsxs)(c.Kqy, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, r.jsx)(c.LZC, {
                size: Z,
                horizontal: !0,
            }),
            (0, r.jsx)(c.ua7, {
                shouldShow: !S,
                text: E.intl.string(E.t.HcoRu7),
                children: (e) => {
                    var n, i;
                    return (0, r.jsxs)(
                        c.P3F,
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
                                className: y.clickableContainer,
                            },
                            s,
                            e,
                            l,
                        )),
                        (i = i =
                            {
                                onMouseEnter: () => {
                                    var t;
                                    g(!0), null == (t = e.onMouseEnter) || t.call(e);
                                },
                                onMouseLeave: () => {
                                    var t;
                                    g(!1), null == (t = e.onMouseLeave) || t.call(e);
                                },
                                onClick: () => {
                                    var n, r;
                                    null == t || t(),
                                        null == l || null == (n = l.onClick) || n.call(l),
                                        null == (r = e.onClick) || r.call(e);
                                },
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(y.iconWrapper, null),
                                        children:
                                            "unread" === P
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(u.ZP, {
                                                              width: 20,
                                                              height: 20,
                                                              mask: u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                              children: N,
                                                          }),
                                                          (0, r.jsx)("div", { className: y.unreadDot }),
                                                      ],
                                                  })
                                                : N,
                                    }),
                                    T,
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
        { notificationCenterVariant: n } = (0, g.pN)({ location: "NotificationsInboxButton" }),
        l = (0, s.e7)([f.Z], () => f.Z.getChannelId()),
        a = i.useMemo(() => O.Z5c.CHANNEL(O.STv, null != l ? l : void 0), [l]),
        c = (0, b.mv)();
    return n === g.jP.SIDEBAR
        ? (0, r.jsx)(S, {
              onClick: () => {
                  c(), (0, o.uL)(a);
              },
              focusSectionProps: e,
          })
        : n === g.jP.POPOUT
          ? (0, r.jsx)(_.Z, {
                targetElementRef: t,
                popoutPosition: "bottom",
                popoutAlign: "left",
                spacing: 2,
                children: (n, i, l) =>
                    (0, r.jsx)(S, {
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
