n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(704215),
    o = n(481060),
    s = n(809206),
    l = n(906732),
    c = n(243778),
    u = n(829716),
    d = n(18438),
    f = n(626135),
    p = n(74538),
    _ = n(150039),
    m = n(993413),
    h = n(981631),
    g = n(921944),
    E = n(388032),
    b = n(143525),
    y = n(399477);
function O(e) {
    let { user: t, guildId: n, className: O } = e,
        v = p.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: S } = (0, l.ZP)(),
        {
            userDisplayNameStyles: I,
            guildDisplayNameStyles: T,
            pendingDisplayNameStyles: C,
            pendingErrors: A,
        } = (0, _.mD)(t, n),
        [N, P] = (0, c.US)([a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]),
        R = N === a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE,
        w = (0, i.useCallback)(() => {
            P(g.L.TAKE_ACTION),
                f.default.track(h.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, u.I)({
                    analyticsLocations: S,
                    guildId: n,
                });
        }, [S, P, n]),
        D = (0, i.useCallback)(() => {
            (0, s.NI)(null), f.default.track(h.rMx.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        x = (0, i.useCallback)(() => {
            (0, d.N_)(null);
        }, []),
        L = void 0 !== C || (null != n ? null != T : null != I),
        j = void 0 !== C ? C : T;
    return (0, r.jsx)(m.Z, {
        title: E.intl.string(b.default["86GtGH"]),
        titleIcon: R
            ? (0, r.jsx)(o.IGR, {
                  text: E.intl.string(E.t.y2b7CA),
                  className: y.newBadge,
              })
            : void 0,
        className: O,
        showPremiumIcon: v,
        errors: A,
        children: (0, r.jsxs)("div", {
            className: y.buttonsContainer,
            children: [
                (0, r.jsx)(o.Button, {
                    variant: "primary",
                    size: "sm",
                    text: E.intl.string(b.default.vJqrIg),
                    onClick: w,
                }),
                null == n &&
                    L &&
                    (0, r.jsx)(o.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: E.intl.string(b.default.ymq8WQ),
                        onClick: D,
                    }),
                null != n &&
                    null != j &&
                    (0, r.jsx)(o.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: E.intl.string(b.default["j/KRxc"]),
                        onClick: x,
                    }),
            ],
        }),
    });
}
