n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(688810),
    a = n(259065),
    o = n(84540),
    d = n(954571),
    c = n(927578),
    u = n(919395),
    m = n(128450),
    g = n(652215),
    _ = n(985018),
    x = n(486844),
    h = n(698551);
function A(e) {
    let { user: t, guildId: n, className: A } = e,
        p = c.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: T } = (0, r.Ay)(),
        {
            userDisplayNameStyles: f,
            guildDisplayNameStyles: S,
            pendingDisplayNameStyles: E,
            pendingErrors: b,
        } = (0, u.B0)(t, n),
        C = (0, s.useCallback)(() => {
            d.default.track(g.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, a.L)({ analyticsLocations: T, guildId: n });
        }, [T, n]),
        v = (0, s.useCallback)(() => {
            (0, o.p)({ displayNameStyles: null }), d.default.track(g.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        N = (0, s.useCallback)(() => {
            (0, o.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        I = void 0 !== E || (null != n ? null != S : null != f);
    return (0, i.jsx)(m.A, {
        title: _.intl.string(x.default["86GtGH"]),
        className: A,
        showPremiumIcon: p,
        errors: b,
        children: (0, i.jsxs)("div", {
            className: h.N,
            children: [
                (0, i.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: _.intl.string(x.default.vJqrIg),
                    onClick: C,
                }),
                null == n &&
                    I &&
                    (0, i.jsx)(l.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(x.default.ymq8WQ),
                        onClick: v,
                    }),
                null != n &&
                    null != (void 0 !== E ? E : S) &&
                    (0, i.jsx)(l.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(x.default["j/KRxc"]),
                        onClick: N,
                    }),
            ],
        }),
    });
}
