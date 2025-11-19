n.d(t, { Z: () => v }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(704215),
    o = n(481060),
    s = n(809206),
    l = n(906732),
    c = n(243778),
    u = n(594928),
    d = n(829716),
    f = n(18438),
    _ = n(626135),
    p = n(74538),
    h = n(150039),
    m = n(993413),
    g = n(981631),
    E = n(921944),
    b = n(388032),
    y = n(88406),
    O = n(147164);
function v(e) {
    let { user: t, guildId: n, className: v } = e,
        I = u.JH.useExperiment({ location: "DisplayNameStylesSection" }).enabled,
        T = p.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: S } = (0, l.ZP)(),
        {
            userDisplayNameStyles: A,
            guildDisplayNameStyles: C,
            pendingDisplayNameStyles: N,
            pendingErrors: R,
        } = (0, h.mD)(t, n),
        P = [];
    I && P.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE);
    let [D, w] = (0, c.US)(P),
        L = D === a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE,
        x = (0, i.useCallback)(() => {
            w(E.L.TAKE_ACTION),
                _.default.track(g.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, d.I)({
                    analyticsLocations: S,
                    guildId: n,
                });
        }, [S, w, n]),
        M = (0, i.useCallback)(() => {
            (0, s.NI)(null), _.default.track(g.rMx.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        k = (0, i.useCallback)(() => {
            (0, f.N_)(null);
        }, []),
        j = void 0 !== N || (null != n ? null != C : null != A);
    if (!I && !j) return null;
    let U = void 0 !== N ? N : C;
    return (0, r.jsx)(m.Z, {
        title: b.intl.string(y.default["86GtGH"]),
        titleIcon: L
            ? (0, r.jsx)(o.IGR, {
                  text: b.intl.string(b.t.y2b7CA),
                  className: O.newBadge,
              })
            : void 0,
        className: v,
        showPremiumIcon: T,
        errors: R,
        children: (0, r.jsxs)("div", {
            className: O.buttonsContainer,
            children: [
                I &&
                    (0, r.jsx)(o.Button, {
                        variant: "primary",
                        size: "sm",
                        text: b.intl.string(y.default.vJqrIg),
                        onClick: x,
                    }),
                null == n &&
                    j &&
                    (0, r.jsx)(o.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: b.intl.string(y.default.ymq8WQ),
                        onClick: M,
                    }),
                null != n &&
                    null != U &&
                    (0, r.jsx)(o.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: b.intl.string(y.default["j/KRxc"]),
                        onClick: k,
                    }),
            ],
        }),
    });
}
