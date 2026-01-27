n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(554146),
    s = n(397927),
    a = n(631670),
    o = n(688810),
    c = n(379848),
    d = n(259065),
    u = n(159001),
    _ = n(954571),
    p = n(927578),
    m = n(919395),
    g = n(128450),
    A = n(652215),
    f = n(49999),
    h = n(985018),
    b = n(927961),
    E = n(109046);

function x(e) {
    let { user: t, guildId: n, className: x } = e,
        O = p.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: C } = (0, o.Ay)(),
        {
            userDisplayNameStyles: I,
            guildDisplayNameStyles: T,
            pendingDisplayNameStyles: S,
            pendingErrors: j,
        } = (0, m.B0)(t, n),
        [v, N] = (0, c.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]),
        y = v === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE,
        P = (0, i.useCallback)(() => {
            N(f.i.TAKE_ACTION),
                _.default.track(A.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, d.L)({
                    analyticsLocations: C,
                    guildId: n,
                });
        }, [C, N, n]),
        R = (0, i.useCallback)(() => {
            (0, a.dM)(null), _.default.track(A.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        D = (0, i.useCallback)(() => {
            (0, u.mZ)(null);
        }, []),
        w = void 0 !== S || (null != n ? null != T : null != I);
    return (0, r.jsx)(g.A, {
        title: h.intl.string(b.default["86GtGH"]),
        titleIcon: y
            ? (0, r.jsx)(s.LpS, {
                  text: h.intl.string(h.t.y2b7CA),
                  className: E.A,
              })
            : void 0,
        className: x,
        showPremiumIcon: O,
        errors: j,
        children: (0, r.jsxs)("div", {
            className: E.N,
            children: [
                (0, r.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: h.intl.string(b.default.vJqrIg),
                    onClick: P,
                }),
                null == n &&
                    w &&
                    (0, r.jsx)(s.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: h.intl.string(b.default.ymq8WQ),
                        onClick: R,
                    }),
                null != n &&
                    null != (void 0 !== S ? S : T) &&
                    (0, r.jsx)(s.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: h.intl.string(b.default["j/KRxc"]),
                        onClick: D,
                    }),
            ],
        }),
    });
}
