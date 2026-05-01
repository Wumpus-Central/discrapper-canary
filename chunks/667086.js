o.r(s), o.d(s, { default: () => S });
var t = o(627968),
    n = o(64700),
    i = o(503698),
    c = o.n(i),
    l = o(877227),
    a = o(17928),
    r = o(319354),
    u = o(990078),
    d = o(782603),
    p = o(661531),
    h = o(331322),
    m = o(696986),
    x = o(939249),
    f = o(573435),
    A = o(418842),
    j = o(309010),
    k = o(723702),
    C = o(851109),
    N = o(394953),
    g = o(355216),
    E = o(625864),
    O = o(652215),
    P = o(375708),
    R = o(393058);
let v = { cozy: 0, default: 0, compact: 0 },
    z = { cozy: 0, default: 0, compact: 0 },
    B = { cozy: 95, default: 84, compact: 72 };
function M(e) {
    let { onClick: s, selectedOverride: o = !1, popoutProps: i, ref: l, focusSectionProps: a } = e,
        [j, C] = n.useState(!1),
        E = (0, N.lI)(),
        O = o || E,
        M = o || O,
        S = (0, t.jsx)(d.X, {
            className: R.Kk,
            color: j || M ? p.A.colors.ICON_STRONG : p.A.colors.ICON_MUTED,
            size: "sm",
        }),
        { badge: _, badgeType: b } = (0, g.ux)({ isSelected: O }),
        y = (0, k.isDesktop)(),
        D = (0, A.C)(),
        I = (0, k.isMac)() ? v[D] : y ? z[D] : B[D];
    return (0, t.jsxs)(h.B, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, t.jsx)(m.h, { size: I, horizontal: !0 }),
            (0, t.jsx)(u.m, {
                asContainer: !0,
                shouldShow: !M,
                text: P.intl.string(P.t.HcoRu0),
                children: (0, t.jsxs)(x.D, {
                    innerRef: l,
                    className: R.OV,
                    ...a,
                    ...i,
                    onMouseEnter: () => {
                        C(!0);
                    },
                    onMouseLeave: () => {
                        C(!1);
                    },
                    onClick: () => {
                        s?.(), i?.onClick?.();
                    },
                    children: [
                        (0, t.jsx)("div", {
                            className: c()(R.P0, null),
                            children:
                                "unread" === b
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(f.Ay, {
                                                  width: r.E.sm,
                                                  height: r.E.sm,
                                                  mask: f.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: S,
                                              }),
                                              (0, t.jsx)("div", { className: R.Zm }),
                                          ],
                                      })
                                    : S,
                        }),
                        _,
                    ],
                }),
            }),
        ],
    });
}
function S() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        s = n.useRef(null),
        { notificationCenterVariant: o } = (0, C.X8)({ location: "NotificationsInboxButton" }),
        i = (0, a.bG)([j.A], () => j.A.getChannelId()),
        c = n.useMemo(() => O.BVt.CHANNEL(O.gNP, i ?? void 0), [i]),
        r = (0, g.HN)();
    return o === C.U5.SIDEBAR
        ? (0, t.jsx)(M, {
              onClick: () => {
                  r(), (0, l.pX)(c);
              },
              focusSectionProps: e,
          })
        : o === C.U5.POPOUT
          ? (0, t.jsx)(E.A, {
                targetElementRef: s,
                popoutPosition: "bottom",
                popoutAlign: "left",
                spacing: 2,
                children: (o, n, i) =>
                    (0, t.jsx)(M, {
                        ref: s,
                        selectedOverride: n,
                        onClick: () => {
                            r(), o();
                        },
                        popoutProps: i,
                        focusSectionProps: e,
                    }),
            })
          : null;
}
