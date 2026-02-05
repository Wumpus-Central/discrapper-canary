n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(877227),
    o = n(311907),
    d = n(319354),
    c = n(990078),
    u = n(397927),
    A = n(573435),
    h = n(545167),
    _ = n(418842),
    m = n(309010),
    p = n(723702),
    g = n(851109),
    E = n(394953),
    f = n(355216),
    I = n(596540),
    C = n(652215),
    N = n(985018),
    T = n(687836);
let S = { cozy: 0, default: 0, compact: 0 },
    x = { cozy: 36, default: 24, compact: 14 },
    v = { cozy: 95, default: 84, compact: 72 };
function b(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: a, ref: s, focusSectionProps: o } = e,
        [m, g] = r.useState(!1),
        I = (0, E.lI)(),
        C = n || I,
        b = n || C,
        {
            backForwardButtons: y,
            titlebarIconSize: L,
            titlebarHoverHighlight: O,
        } = (0, h.pz)({ location: "NotificationsInboxTitleBarButton" }),
        R = (0, i.jsx)(u.XFE, {
            className: T.icon,
            color: m || b ? u.LU0.colors.ICON_STRONG : u.LU0.colors.ICON_MUTED,
            size: L,
        }),
        { badge: P, badgeType: j } = (0, f.ux)({ isSelected: C }),
        D = (0, p.isDesktop)() && y,
        w = (0, _.C)(),
        M = (0, p.isMac)() ? S[w] : D ? x[w] : v[w];
    return (0, i.jsxs)(u.BJc, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, i.jsx)(u.hKd, { size: M, horizontal: !0 }),
            (0, i.jsx)(c.m, {
                asContainer: !0,
                shouldShow: !b,
                text: N.intl.string(N.t.HcoRu0),
                children: (0, i.jsxs)(u.DUT, {
                    innerRef: s,
                    className: l()(T.clickableContainer, { [T.withHoverHighlight]: O }),
                    ...o,
                    ...a,
                    onMouseEnter: () => {
                        g(!0);
                    },
                    onMouseLeave: () => {
                        g(!1);
                    },
                    onClick: () => {
                        t?.(), a?.onClick?.();
                    },
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(T.iconWrapper, null),
                            children:
                                "unread" === j
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(A.Ay, {
                                                  width: d.E[L],
                                                  height: d.E[L],
                                                  mask: A.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: R,
                                              }),
                                              (0, i.jsx)("div", { className: l()(T.unreadDot, T[L]) }),
                                          ],
                                      })
                                    : R,
                        }),
                        P,
                    ],
                }),
            }),
        ],
    });
}
function y() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = r.useRef(null),
        { notificationCenterVariant: n } = (0, g.X8)({ location: "NotificationsInboxButton" }),
        a = (0, o.bG)([m.A], () => m.A.getChannelId()),
        l = r.useMemo(() => C.BVt.CHANNEL(C.gNP, a ?? void 0), [a]),
        d = (0, f.HN)();
    return n === g.U5.SIDEBAR
        ? (0, i.jsx)(b, {
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
                children: (n, r, a) =>
                    (0, i.jsx)(b, {
                        ref: t,
                        selectedOverride: r,
                        onClick: () => {
                            d(), n();
                        },
                        popoutProps: a,
                        focusSectionProps: e,
                    }),
            })
          : null;
}
