t.r(n), t.d(n, { default: () => L });
var s = t(627968),
    i = t(64700),
    o = t(503698),
    a = t.n(o),
    l = t(877227),
    r = t(17928),
    c = t(319354),
    u = t(990078),
    d = t(782603),
    h = t(661531),
    p = t(331322),
    _ = t(696986),
    m = t(939249),
    b = t(573435),
    f = t(418842),
    g = t(309010),
    x = t(723702),
    E = t(851109),
    T = t(394953),
    A = t(355216),
    j = t(625864),
    N = t(652215),
    R = t(985018),
    I = t(393058);
let O = { cozy: 0, default: 0, compact: 0 },
    k = { cozy: 36, default: 24, compact: 14 },
    y = { cozy: 95, default: 84, compact: 72 };
function C(e) {
    let { onClick: n, selectedOverride: t = !1, popoutProps: o, ref: l, focusSectionProps: r } = e,
        [g, E] = i.useState(!1),
        j = (0, T.lI)(),
        N = t || j,
        C = t || N,
        L = (0, s.jsx)(d.X, {
            className: I.Kk,
            color: g || C ? h.A.colors.ICON_STRONG : h.A.colors.ICON_MUTED,
            size: "sm",
        }),
        { badge: S, badgeType: v } = (0, A.ux)({ isSelected: N }),
        M = (0, x.isDesktop)(),
        B = (0, f.C)(),
        P = (0, x.isMac)() ? O[B] : M ? k[B] : y[B];
    return (0, s.jsxs)(p.B, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, s.jsx)(_.h, { size: P, horizontal: !0 }),
            (0, s.jsx)(u.m, {
                asContainer: !0,
                shouldShow: !C,
                text: R.intl.string(R.t.HcoRu0),
                children: (0, s.jsxs)(m.D, {
                    innerRef: l,
                    className: I.OV,
                    ...r,
                    ...o,
                    onMouseEnter: () => {
                        E(!0);
                    },
                    onMouseLeave: () => {
                        E(!1);
                    },
                    onClick: () => {
                        n?.(), o?.onClick?.();
                    },
                    children: [
                        (0, s.jsx)("div", {
                            className: a()(I.P0, null),
                            children:
                                "unread" === v
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(b.Ay, {
                                                  width: c.E.sm,
                                                  height: c.E.sm,
                                                  mask: b.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: L,
                                              }),
                                              (0, s.jsx)("div", { className: I.Zm }),
                                          ],
                                      })
                                    : L,
                        }),
                        S,
                    ],
                }),
            }),
        ],
    });
}
function L() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = i.useRef(null),
        { notificationCenterVariant: t } = (0, E.X8)({ location: "NotificationsInboxButton" }),
        o = (0, r.bG)([g.A], () => g.A.getChannelId()),
        a = i.useMemo(() => N.BVt.CHANNEL(N.gNP, o ?? void 0), [o]),
        c = (0, A.HN)();
    return t === E.U5.SIDEBAR
        ? (0, s.jsx)(C, {
              onClick: () => {
                  c(), (0, l.pX)(a);
              },
              focusSectionProps: e,
          })
        : t === E.U5.POPOUT
          ? (0, s.jsx)(j.A, {
                targetElementRef: n,
                popoutPosition: "bottom",
                popoutAlign: "left",
                spacing: 2,
                children: (t, i, o) =>
                    (0, s.jsx)(C, {
                        ref: n,
                        selectedOverride: i,
                        onClick: () => {
                            c(), t();
                        },
                        popoutProps: o,
                        focusSectionProps: e,
                    }),
            })
          : null;
}
