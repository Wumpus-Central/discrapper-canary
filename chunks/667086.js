n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(877227),
    o = n(311907),
    d = n(319354),
    u = n(990078),
    c = n(782603),
    A = n(827734),
    h = n(331322),
    _ = n(696986),
    E = n(939249),
    p = n(573435),
    m = n(418842),
    g = n(309010),
    I = n(723702),
    C = n(851109),
    f = n(394953),
    T = n(355216),
    S = n(596540),
    N = n(652215),
    O = n(985018),
    L = n(393058);
let y = { cozy: 0, default: 0, compact: 0 },
    v = { cozy: 36, default: 24, compact: 14 },
    b = { cozy: 95, default: 84, compact: 72 };
function D(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: a, ref: s, focusSectionProps: o } = e,
        [g, C] = r.useState(!1),
        S = (0, f.lI)(),
        N = n || S,
        D = n || N,
        R = (0, i.jsx)(c.X, {
            className: L.Kk,
            color: g || D ? A.A.colors.ICON_STRONG : A.A.colors.ICON_MUTED,
            size: "sm",
        }),
        { badge: P, badgeType: w } = (0, T.ux)({ isSelected: N }),
        M = (0, I.isDesktop)(),
        U = (0, m.C)(),
        x = (0, I.isMac)() ? y[U] : M ? v[U] : b[U];
    return (0, i.jsxs)(h.B, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, i.jsx)(_.h, { size: x, horizontal: !0 }),
            (0, i.jsx)(u.m, {
                asContainer: !0,
                shouldShow: !D,
                text: O.intl.string(O.t.HcoRu0),
                children: (0, i.jsxs)(E.D, {
                    innerRef: s,
                    className: L.OV,
                    ...o,
                    ...a,
                    onMouseEnter: () => {
                        C(!0);
                    },
                    onMouseLeave: () => {
                        C(!1);
                    },
                    onClick: () => {
                        t?.(), a?.onClick?.();
                    },
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(L.P0, null),
                            children:
                                "unread" === w
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(p.Ay, {
                                                  width: d.E.sm,
                                                  height: d.E.sm,
                                                  mask: p.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: R,
                                              }),
                                              (0, i.jsx)("div", { className: L.Zm }),
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
function R() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = r.useRef(null),
        { notificationCenterVariant: n } = (0, C.X8)({ location: "NotificationsInboxButton" }),
        a = (0, o.bG)([g.A], () => g.A.getChannelId()),
        l = r.useMemo(() => N.BVt.CHANNEL(N.gNP, a ?? void 0), [a]),
        d = (0, T.HN)();
    return n === C.U5.SIDEBAR
        ? (0, i.jsx)(D, {
              onClick: () => {
                  d(), (0, s.pX)(l);
              },
              focusSectionProps: e,
          })
        : n === C.U5.POPOUT
          ? (0, i.jsx)(S.A, {
                targetElementRef: t,
                popoutPosition: "bottom",
                popoutAlign: "left",
                spacing: 2,
                children: (n, r, a) =>
                    (0, i.jsx)(D, {
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
