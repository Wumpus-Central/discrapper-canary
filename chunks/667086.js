s.r(o);
var t = s(477900),
    n = s(582128),
    c = s(503698),
    l = s.n(c),
    i = s(877227),
    a = s(855986),
    r = s(319354),
    u = s(782603),
    d = s(646514),
    p = s(331322),
    h = s(696986),
    m = s(866665),
    x = s(939249),
    f = s(573435),
    A = s(418842),
    j = s(309010),
    C = s(723702),
    N = s(851109),
    g = s(394953),
    k = s(355216),
    E = s(45364),
    O = s(652215),
    y = s(792996),
    B = s(346994);
let P = { cozy: 0, default: 0, compact: 0 },
    R = { cozy: 0, default: 0, compact: 0 },
    v = { cozy: 95, default: 84, compact: 72 };
function z(e) {
    let { onClick: o, selectedOverride: s = !1, popoutProps: c, ref: i, focusSectionProps: a } = e,
        [j, N] = n.useState(!1),
        E = (0, g.lI)(),
        O = s || E,
        z = s || O,
        I = (0, t.jsx)(u.BellIcon, {
            className: B.Kk,
            color: j || z ? d.A.colors.ICON_STRONG : d.A.colors.ICON_MUTED,
            size: "sm",
        }),
        { badge: S, badgeType: _ } = (0, k.ux)({ isSelected: O }),
        b = (0, C.xl)(),
        M = (0, A.C)(),
        T = (0, C.cX)() ? P[M] : b ? R[M] : v[M];
    return (0, t.jsxs)(p.B, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, t.jsx)(h.h, { size: T, horizontal: !0 }),
            (0, t.jsx)(m.m, {
                asContainer: !0,
                shouldShow: !z,
                text: y.intl.string(y.t.HcoRu0),
                children: (0, t.jsxs)(x.D, {
                    innerRef: i,
                    className: B.OV,
                    ...a,
                    ...c,
                    onMouseEnter: () => {
                        N(!0);
                    },
                    onMouseLeave: () => {
                        N(!1);
                    },
                    onClick: () => {
                        (o?.(), c?.onClick?.());
                    },
                    children: [
                        (0, t.jsx)("div", {
                            className: l()(B.P0, null),
                            children:
                                "unread" === _
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
                        S,
                    ],
                }),
            }),
        ],
    });
}
s.d(
    o,
    {},
    {
        default: function () {
            let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = n.useRef(null),
                { notificationCenterVariant: s } = (0, N.X8)({ location: "NotificationsInboxButton" }),
                c = (0, a.bG)([j.Ay], () => j.Ay.getChannelId()),
                l = n.useMemo(() => O.BVt.CHANNEL(O.gNP, c ?? void 0), [c]),
                r = (0, k.HN)();
            return s === N.U5.SIDEBAR
                ? (0, t.jsx)(z, {
                      onClick: () => {
                          (r(), (0, i.pX)(l));
                      },
                      focusSectionProps: e,
                  })
                : s === N.U5.POPOUT
                  ? (0, t.jsx)(E.A, {
                        targetElementRef: o,
                        popoutPosition: "bottom",
                        popoutAlign: "left",
                        spacing: 2,
                        children: (s, n, c) =>
                            (0, t.jsx)(z, {
                                ref: o,
                                selectedOverride: n,
                                onClick: () => {
                                    (r(), s());
                                },
                                popoutProps: c,
                                focusSectionProps: e,
                            }),
                    })
                  : null;
        },
    },
);
