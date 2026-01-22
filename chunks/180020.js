n.d(t, { A: () => O }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(554146),
    s = n(397927),
    o = n(631670),
    l = n(688810),
    c = n(379848),
    u = n(259065),
    d = n(159001),
    f = n(954571),
    p = n(927578),
    _ = n(919395),
    h = n(128450),
    m = n(652215),
    g = n(49999),
    E = n(985018),
    b = n(927961),
    y = n(109046);
function O(e) {
    let { user: t, guildId: n, className: O } = e,
        A = p.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: v } = (0, l.Ay)(),
        {
            userDisplayNameStyles: S,
            guildDisplayNameStyles: I,
            pendingDisplayNameStyles: T,
            pendingErrors: C,
        } = (0, _.B0)(t, n),
        [N, R] = (0, c.kn)([a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]),
        w = N === a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE,
        P = (0, i.useCallback)(() => {
            R(g.i.TAKE_ACTION),
                f.default.track(m.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, u.L)({
                    analyticsLocations: v,
                    guildId: n,
                });
        }, [v, R, n]),
        D = (0, i.useCallback)(() => {
            (0, o.dM)(null), f.default.track(m.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        x = (0, i.useCallback)(() => {
            (0, d.mZ)(null);
        }, []),
        L = void 0 !== T || (null != n ? null != I : null != S),
        j = void 0 !== T ? T : I;
    return (0, r.jsx)(h.A, {
        title: E.intl.string(b.default["86GtGH"]),
        titleIcon: w
            ? (0, r.jsx)(s.LpS, {
                  text: E.intl.string(E.t.y2b7CA),
                  className: y.A,
              })
            : void 0,
        className: O,
        showPremiumIcon: A,
        errors: C,
        children: (0, r.jsxs)("div", {
            className: y.N,
            children: [
                (0, r.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: E.intl.string(b.default.vJqrIg),
                    onClick: P,
                }),
                null == n &&
                    L &&
                    (0, r.jsx)(s.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: E.intl.string(b.default.ymq8WQ),
                        onClick: D,
                    }),
                null != n &&
                    null != j &&
                    (0, r.jsx)(s.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: E.intl.string(b.default["j/KRxc"]),
                        onClick: x,
                    }),
            ],
        }),
    });
}
