n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(948789),
    o = n(442837),
    c = n(212605),
    u = n(28664),
    d = n(481060),
    p = n(686546),
    f = n(719961),
    h = n(264783),
    g = n(944486),
    m = n(358085),
    _ = n(821020),
    b = n(370774),
    E = n(128008),
    O = n(961040),
    y = n(981631),
    v = n(388032),
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
    let { onClick: l, selectedOverride: s = !1, popoutProps: o, ref: g, focusSectionProps: _ } = e,
        [O, y] = i.useState(!1),
        N = (0, b.D)(),
        j = s || N,
        P = s || j,
        {
            backForwardButtons: x,
            titlebarIconSize: A,
            titlebarHoverHighlight: Z,
        } = (0, f.T)({ location: "NotificationsInboxTitleBarButton" }),
        w = (0, r.jsx)(d.Dkj, {
            className: I.icon,
            color: O || P ? d.TVs.colors.ICON_PRIMARY : d.TVs.colors.ICON_TERTIARY,
            size: A,
        }),
        { badge: L, badgeType: R } = (0, E.h6)({ isSelected: j }),
        D = (0, m.isDesktop)() && x,
        M = (0, h.A)(),
        k = (0, m.isMac)() ? C[M] : D ? S[M] : T[M];
    return (0, r.jsxs)(d.Kqy, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, r.jsx)(d.LZC, {
                size: k,
                horizontal: !0,
            }),
            (0, r.jsx)(u.u, {
                asContainer: !0,
                shouldShow: !P,
                text: v.intl.string(v.t.HcoRu0),
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
                        _,
                        o,
                    )),
                    (n = n =
                        {
                            onMouseEnter: () => {
                                y(!0);
                            },
                            onMouseLeave: () => {
                                y(!1);
                            },
                            onClick: () => {
                                var e;
                                null == l || l(), null == o || null == (e = o.onClick) || e.call(o);
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
        { notificationCenterVariant: n } = (0, _.pN)({ location: "NotificationsInboxButton" }),
        l = (0, o.e7)([g.Z], () => g.Z.getChannelId()),
        a = i.useMemo(() => y.Z5c.CHANNEL(y.STv, null != l ? l : void 0), [l]),
        c = (0, E.mv)();
    return n === _.jP.SIDEBAR
        ? (0, r.jsx)(N, {
              onClick: () => {
                  c(), (0, s.uL)(a);
              },
              focusSectionProps: e,
          })
        : n === _.jP.POPOUT
          ? (0, r.jsx)(O.Z, {
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
