n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(821609),
    a = n(688810),
    r = n(259065),
    o = n(84540),
    d = n(954571),
    u = n(927578),
    c = n(919395),
    g = n(128450),
    m = n(652215),
    _ = n(985018),
    A = n(864386),
    h = n(152103);
function p(e) {
    let { user: t, guildId: n, className: p } = e,
        x = u.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: E } = (0, a.Ay)(),
        {
            userDisplayNameStyles: T,
            guildDisplayNameStyles: S,
            pendingDisplayNameStyles: f,
            pendingErrors: b,
        } = (0, c.B0)(t, n),
        C = (0, s.useCallback)(() => {
            d.default.track(m.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, r.L)({ analyticsLocations: E, guildId: n });
        }, [E, n]),
        v = (0, s.useCallback)(() => {
            (0, o.p)({ displayNameStyles: null }), d.default.track(m.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        N = (0, s.useCallback)(() => {
            (0, o.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        I = void 0 !== f || (null != n ? null != S : null != T);
    return (0, i.jsx)(g.A, {
        title: _.intl.string(A.default["86GtGH"]),
        className: p,
        showPremiumIcon: x,
        errors: b,
        children: (0, i.jsxs)("div", {
            className: h.N,
            children: [
                (0, i.jsx)(l.$, { variant: "primary", size: "sm", text: _.intl.string(A.default.vJqrIg), onClick: C }),
                null == n &&
                    I &&
                    (0, i.jsx)(l.$, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(A.default.ymq8WQ),
                        onClick: v,
                    }),
                null != n &&
                    null != (void 0 !== f ? f : S) &&
                    (0, i.jsx)(l.$, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(A.default["j/KRxc"]),
                        onClick: N,
                    }),
            ],
        }),
    });
}
