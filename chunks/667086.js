n.d(t, { A: () => T }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(877227),
    o = n(311907),
    c = n(319354),
    u = n(990078),
    d = n(397927),
    p = n(573435),
    f = n(545167),
    h = n(418842),
    A = n(309010),
    g = n(723702),
    m = n(851109),
    b = n(394953),
    _ = n(355216),
    E = n(596540),
    O = n(652215),
    y = n(985018),
    I = n(687836);
let v = {
        cozy: 0,
        default: 0,
        compact: 0,
    },
    S = {
        cozy: 36,
        default: 24,
        compact: 14,
    },
    C = {
        cozy: 95,
        default: 84,
        compact: 72,
    };
function N(e) {
    var t, n;
    let { onClick: l, selectedOverride: s = !1, popoutProps: o, ref: A, focusSectionProps: m } = e,
        [E, O] = i.useState(!1),
        N = (0, b.lI)(),
        T = s || N,
        j = s || T,
        {
            backForwardButtons: x,
            titlebarIconSize: P,
            titlebarHoverHighlight: w,
        } = (0, f.p)({ location: "NotificationsInboxTitleBarButton" }),
        L = (0, r.jsx)(d.XFE, {
            className: I.icon,
            color: E || j ? d.LU0.colors.ICON_STRONG : d.LU0.colors.ICON_MUTED,
            size: P,
        }),
        { badge: R, badgeType: D } = (0, _.ux)({ isSelected: T }),
        M = (0, g.isDesktop)() && x,
        k = (0, h.C)(),
        U = (0, g.isMac)() ? v[k] : M ? S[k] : C[k];
    return (0, r.jsxs)(d.BJc, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, r.jsx)(d.hKd, {
                size: U,
                horizontal: !0,
            }),
            (0, r.jsx)(u.m, {
                asContainer: !0,
                shouldShow: !j,
                text: y.intl.string(y.t.HcoRu0),
                children: (0, r.jsxs)(
                    d.DUT,
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
                            innerRef: A,
                            className: a()(I.clickableContainer, { [I.withHoverHighlight]: w }),
                        },
                        m,
                        o,
                    )),
                    (n = n =
                        {
                            onMouseEnter: () => {
                                O(!0);
                            },
                            onMouseLeave: () => {
                                O(!1);
                            },
                            onClick: () => {
                                var e;
                                null == l || l(), null == o || null == (e = o.onClick) || e.call(o);
                            },
                            children: [
                                (0, r.jsx)("div", {
                                    className: a()(I.iconWrapper, null),
                                    children:
                                        "unread" === D
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(p.Ay, {
                                                          width: c.E[P],
                                                          height: c.E[P],
                                                          mask: p.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                          children: L,
                                                      }),
                                                      (0, r.jsx)("div", { className: a()(I.unreadDot, I[P]) }),
                                                  ],
                                              })
                                            : L,
                                }),
                                R,
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
function T() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = i.useRef(null),
        { notificationCenterVariant: n } = (0, m.X8)({ location: "NotificationsInboxButton" }),
        l = (0, o.bG)([A.A], () => A.A.getChannelId()),
        a = i.useMemo(() => O.BVt.CHANNEL(O.gNP, null != l ? l : void 0), [l]),
        c = (0, _.HN)();
    return n === m.U5.SIDEBAR
        ? (0, r.jsx)(N, {
              onClick: () => {
                  c(), (0, s.pX)(a);
              },
              focusSectionProps: e,
          })
        : n === m.U5.POPOUT
          ? (0, r.jsx)(E.A, {
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
