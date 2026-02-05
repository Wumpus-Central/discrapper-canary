n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    r = n(554146),
    a = n(397927),
    l = n(631670),
    o = n(688810),
    c = n(379848),
    d = n(259065),
    u = n(159001),
    _ = n(954571),
    m = n(927578),
    A = n(919395),
    g = n(128450),
    E = n(652215),
    h = n(49999),
    p = n(985018),
    C = n(927961),
    x = n(109046);
function T(e) {
    let { user: t, guildId: n, className: T } = e,
        I = m.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: S } = (0, o.Ay)(),
        {
            userDisplayNameStyles: f,
            guildDisplayNameStyles: N,
            pendingDisplayNameStyles: b,
            pendingErrors: R,
        } = (0, A.B0)(t, n),
        [v, O] = (0, c.kn)([r.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]),
        j = v === r.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE,
        P = (0, s.useCallback)(() => {
            O(h.i.TAKE_ACTION),
                _.default.track(E.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, d.L)({ analyticsLocations: S, guildId: n });
        }, [S, O, n]),
        y = (0, s.useCallback)(() => {
            (0, l.dM)(null), _.default.track(E.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        L = (0, s.useCallback)(() => {
            (0, u.mZ)(null);
        }, []),
        D = void 0 !== b || (null != n ? null != N : null != f);
    return (0, i.jsx)(g.A, {
        title: p.intl.string(C.default["86GtGH"]),
        titleIcon: j ? (0, i.jsx)(a.LpS, { text: p.intl.string(p.t.y2b7CA), className: x.A }) : void 0,
        className: T,
        showPremiumIcon: I,
        errors: R,
        children: (0, i.jsxs)("div", {
            className: x.N,
            children: [
                (0, i.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: p.intl.string(C.default.vJqrIg),
                    onClick: P,
                }),
                null == n &&
                    D &&
                    (0, i.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: p.intl.string(C.default.ymq8WQ),
                        onClick: y,
                    }),
                null != n &&
                    null != (void 0 !== b ? b : N) &&
                    (0, i.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: p.intl.string(C.default["j/KRxc"]),
                        onClick: L,
                    }),
            ],
        }),
    });
}
