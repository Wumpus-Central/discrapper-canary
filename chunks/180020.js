n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(554146),
    a = n(397927),
    r = n(688810),
    o = n(932001),
    d = n(259065),
    c = n(84540),
    u = n(954571),
    _ = n(927578),
    m = n(919395),
    g = n(128450),
    A = n(652215),
    x = n(49999),
    h = n(985018),
    p = n(241015),
    T = n(437008);
function E(e) {
    let { user: t, guildId: n, className: E } = e,
        S = _.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: f } = (0, r.Ay)(),
        {
            userDisplayNameStyles: C,
            guildDisplayNameStyles: b,
            pendingDisplayNameStyles: N,
            pendingErrors: I,
        } = (0, m.B0)(t, n),
        [v, j] = (0, o.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]),
        y = v === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE,
        R = (0, s.useCallback)(() => {
            j(x.i.TAKE_ACTION),
                u.default.track(A.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, d.L)({ analyticsLocations: f, guildId: n });
        }, [f, j, n]),
        O = (0, s.useCallback)(() => {
            (0, c.p)({ displayNameStyles: null }), u.default.track(A.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        L = (0, s.useCallback)(() => {
            (0, c.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        D = void 0 !== N || (null != n ? null != b : null != C);
    return (0, i.jsx)(g.A, {
        title: h.intl.string(p.default["86GtGH"]),
        titleIcon: y ? (0, i.jsx)(a.LpS, { text: h.intl.string(h.t.y2b7CA), className: T.A }) : void 0,
        className: E,
        showPremiumIcon: S,
        errors: I,
        children: (0, i.jsxs)("div", {
            className: T.N,
            children: [
                (0, i.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: h.intl.string(p.default.vJqrIg),
                    onClick: R,
                }),
                null == n &&
                    D &&
                    (0, i.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: h.intl.string(p.default.ymq8WQ),
                        onClick: O,
                    }),
                null != n &&
                    null != (void 0 !== N ? N : b) &&
                    (0, i.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: h.intl.string(p.default["j/KRxc"]),
                        onClick: L,
                    }),
            ],
        }),
    });
}
