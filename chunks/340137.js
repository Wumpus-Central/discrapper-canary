n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(948789),
    s = n(442837),
    c = n(212605),
    u = n(28664),
    d = n(481060),
    p = n(686546),
    f = n(719961),
    h = n(264783),
    g = n(944486),
    m = n(358085),
    b = n(821020),
    _ = n(370774),
    O = n(128008),
    E = n(961040),
    v = n(981631),
    y = n(388032),
    I = n(445202);
let C = {
        cozy: 0,
        default: 0,
        compact: 0,
    },
    S = {
        cozy: 36,
        default: 24,
        compact: 14,
    },
    T = {
        cozy: 95,
        default: 84,
        compact: 72,
    };
function N(e) {
    var t, n;
    let { onClick: l, selectedOverride: o = !1, popoutProps: s, ref: g, focusSectionProps: b } = e,
        [E, v] = i.useState(!1),
        N = (0, _.D)(),
        j = o || N,
        P = o || j,
        {
            backForwardButtons: x,
            titlebarIconSize: A,
            titlebarHoverHighlight: Z,
        } = (0, f.T)({ location: "NotificationsInboxTitleBarButton" }),
        w = (0, r.jsx)(d.Dkj, {
            className: I.icon,
            color: E || P ? d.TVs.colors.ICON_PRIMARY : d.TVs.colors.ICON_TERTIARY,
            size: A,
        }),
        { badge: L, badgeType: R } = (0, O.h6)({ isSelected: j }),
        D = (0, m.isDesktop)() && x,
        k = (0, h.A)(),
        M = (0, m.isMac)() ? C[k] : D ? S[k] : T[k];
    return (0, r.jsxs)(d.Kqy, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, r.jsx)(d.LZC, {
                size: M,
                horizontal: !0,
            }),
            (0, r.jsx)(u.u, {
                asContainer: !0,
                shouldShow: !P,
                text: y.intl.string(y.t.HcoRu7),
                children: (0, r.jsxs)(
                    d.P3F,
                    ((t = (function (e) {
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
                            innerRef: g,
                            className: a()(I.clickableContainer, { [I.withHoverHighlight]: Z }),
                        },
                        b,
                        s,
                    )),
                    (n = n =
                        {
                            onMouseEnter: () => {
                                v(!0);
                            },
                            onMouseLeave: () => {
                                v(!1);
                            },
                            onClick: () => {
                                var e;
                                null == l || l(), null == s || null == (e = s.onClick) || e.call(s);
                            },
                            children: [
                                (0, r.jsx)("div", {
                                    className: a()(I.iconWrapper, null),
                                    children:
                                        "unread" === R
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(p.ZP, {
                                                          width: c.Z[A],
                                                          height: c.Z[A],
                                                          mask: p.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                          children: w,
                                                      }),
                                                      (0, r.jsx)("div", { className: a()(I.unreadDot, I[A]) }),
                                                  ],
                                              })
                                            : w,
                                }),
                                L,
                            ],
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
                    t),
                ),
            }),
        ],
    });
}
function j() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = i.useRef(null),
        { notificationCenterVariant: n } = (0, b.pN)({ location: "NotificationsInboxButton" }),
        l = (0, s.e7)([g.Z], () => g.Z.getChannelId()),
        a = i.useMemo(() => v.Z5c.CHANNEL(v.STv, null != l ? l : void 0), [l]),
        c = (0, O.mv)();
    return n === b.jP.SIDEBAR
        ? (0, r.jsx)(N, {
              onClick: () => {
                  c(), (0, o.uL)(a);
              },
              focusSectionProps: e,
          })
        : n === b.jP.POPOUT
          ? (0, r.jsx)(E.Z, {
                targetElementRef: t,
                popoutPosition: "bottom",
                popoutAlign: "left",
                spacing: 2,
                children: (n, i, l) =>
                    (0, r.jsx)(N, {
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
