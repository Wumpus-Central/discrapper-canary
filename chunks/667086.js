n.d(t, { A: () => b });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(877227),
    o = n(311907),
    d = n(319354),
    c = n(990078),
    u = n(397927),
    A = n(573435),
    _ = n(418842),
    h = n(309010),
    m = n(723702),
    g = n(851109),
    p = n(394953),
    E = n(355216),
    I = n(596540),
    f = n(652215),
    C = n(985018),
    T = n(173733);
let N = { cozy: 0, default: 0, compact: 0 },
    S = { cozy: 36, default: 24, compact: 14 },
    x = { cozy: 95, default: 84, compact: 72 };
function v(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: r, ref: s, focusSectionProps: o } = e,
        [h, g] = a.useState(!1),
        I = (0, p.lI)(),
        f = n || I,
        v = n || f,
        b = (0, i.jsx)(u.XFE, {
            className: T.Kk,
            color: h || v ? u.LU0.colors.ICON_STRONG : u.LU0.colors.ICON_MUTED,
            size: "sm",
        }),
        { badge: y, badgeType: O } = (0, E.ux)({ isSelected: f }),
        L = (0, m.isDesktop)(),
        R = (0, _.C)(),
        P = (0, m.isMac)() ? N[R] : L ? S[R] : x[R];
    return (0, i.jsxs)(u.BJc, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, i.jsx)(u.hKd, { size: P, horizontal: !0 }),
            (0, i.jsx)(c.m, {
                asContainer: !0,
                shouldShow: !v,
                text: C.intl.string(C.t.HcoRu0),
                children: (0, i.jsxs)(u.DUT, {
                    innerRef: s,
                    className: T.OV,
                    ...o,
                    ...r,
                    onMouseEnter: () => {
                        g(!0);
                    },
                    onMouseLeave: () => {
                        g(!1);
                    },
                    onClick: () => {
                        t?.(), r?.onClick?.();
                    },
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(T.P0, null),
                            children:
                                "unread" === O
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(A.Ay, {
                                                  width: d.E.sm,
                                                  height: d.E.sm,
                                                  mask: A.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: b,
                                              }),
                                              (0, i.jsx)("div", { className: T.Zm }),
                                          ],
                                      })
                                    : b,
                        }),
                        y,
                    ],
                }),
            }),
        ],
    });
}
function b() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = a.useRef(null),
        { notificationCenterVariant: n } = (0, g.X8)({ location: "NotificationsInboxButton" }),
        r = (0, o.bG)([h.A], () => h.A.getChannelId()),
        l = a.useMemo(() => f.BVt.CHANNEL(f.gNP, r ?? void 0), [r]),
        d = (0, E.HN)();
    return n === g.U5.SIDEBAR
        ? (0, i.jsx)(v, {
              onClick: () => {
                  d(), (0, s.pX)(l);
              },
              focusSectionProps: e,
          })
        : n === g.U5.POPOUT
          ? (0, i.jsx)(I.A, {
                targetElementRef: t,
                popoutPosition: "bottom",
                popoutAlign: "left",
                spacing: 2,
                children: (n, a, r) =>
                    (0, i.jsx)(v, {
                        ref: t,
                        selectedOverride: a,
                        onClick: () => {
                            d(), n();
                        },
                        popoutProps: r,
                        focusSectionProps: e,
                    }),
            })
          : null;
}
