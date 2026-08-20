s.r(o), s.d(o, { default: () => I });
var t = s(477900),
    n = s(582128),
    i = s(503698),
    c = s.n(i),
    l = s(877227),
    a = s(17928),
    r = s(319354),
    u = s(782603),
    d = s(661531),
    p = s(331322),
    h = s(696986),
    m = s(866665),
    x = s(939249),
    f = s(573435),
    A = s(418842),
    j = s(309010),
    k = s(723702),
    C = s(851109),
    N = s(394953),
    g = s(355216),
    E = s(625864),
    O = s(652215),
    y = s(375708),
    B = s(346994);
let P = { cozy: 0, default: 0, compact: 0 },
    R = { cozy: 0, default: 0, compact: 0 },
    v = { cozy: 95, default: 84, compact: 72 };
function z(e) {
    let { onClick: o, selectedOverride: s = !1, popoutProps: i, ref: l, focusSectionProps: a } = e,
        [j, C] = n.useState(!1),
        E = (0, N.lI)(),
        O = s || E,
        z = s || O,
        I = (0, t.jsx)(u.BellIcon, {
            className: B.Kk,
            color: j || z ? d.A.colors.ICON_STRONG : d.A.colors.ICON_MUTED,
            size: "sm",
        }),
        { badge: M, badgeType: S } = (0, g.ux)({ isSelected: O }),
        _ = (0, k.isDesktop)(),
        b = (0, A.C)(),
        D = (0, k.isMac)() ? P[b] : _ ? R[b] : v[b];
    return (0, t.jsxs)(p.B, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, t.jsx)(h.h, { size: D, horizontal: !0 }),
            (0, t.jsx)(m.m, {
                asContainer: !0,
                shouldShow: !z,
                text: y.intl.string(y.t.HcoRu0),
                children: (0, t.jsxs)(x.D, {
                    innerRef: l,
                    className: B.OV,
                    ...a,
                    ...i,
                    onMouseEnter: () => {
                        C(!0);
                    },
                    onMouseLeave: () => {
                        C(!1);
                    },
                    onClick: () => {
                        o?.(), i?.onClick?.();
                    },
                    children: [
                        (0, t.jsx)("div", {
                            className: c()(B.P0, null),
                            children:
                                "unread" === S
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(f.Ay, {
                                                  width: r.E.sm,
                                                  height: r.E.sm,
                                                  mask: f.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: I,
                                              }),
                                              (0, t.jsx)("div", { className: B.Zm }),
                                          ],
                                      })
                                    : I,
                        }),
                        M,
                    ],
                }),
            }),
        ],
    });
}
function I() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        o = n.useRef(null),
        { notificationCenterVariant: s } = (0, C.X8)({ location: "NotificationsInboxButton" }),
        i = (0, a.bG)([j.Ay], () => j.Ay.getChannelId()),
        c = n.useMemo(() => O.BVt.CHANNEL(O.gNP, i ?? void 0), [i]),
        r = (0, g.HN)();
    return s === C.U5.SIDEBAR
        ? (0, t.jsx)(z, {
              onClick: () => {
                  r(), (0, l.pX)(c);
              },
              focusSectionProps: e,
          })
        : s === C.U5.POPOUT
          ? (0, t.jsx)(E.A, {
                targetElementRef: o,
                popoutPosition: "bottom",
                popoutAlign: "left",
                spacing: 2,
                children: (s, n, i) =>
                    (0, t.jsx)(z, {
                        ref: o,
                        selectedOverride: n,
                        onClick: () => {
                            r(), s();
                        },
                        popoutProps: i,
                        focusSectionProps: e,
                    }),
            })
          : null;
}
