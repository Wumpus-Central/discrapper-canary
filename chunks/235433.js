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
    p = n(626135),
    _ = n(74538),
    m = n(150039),
    h = n(993413),
    g = n(981631),
    E = n(921944),
    b = n(388032),
    y = n(905170),
    O = n(147164);
function v(e) {
    let { user: t, guildId: n, className: v } = e,
        S = u.JH.useExperiment({ location: "DisplayNameStylesSection" }).enabled,
        I = _.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: T } = (0, l.ZP)(),
        {
            userDisplayNameStyles: A,
            guildDisplayNameStyles: C,
            pendingDisplayNameStyles: N,
            pendingErrors: P,
        } = (0, m.mD)(t, n),
        R = [];
    S && R.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE);
    let [w, D] = (0, c.US)(R),
        x = w === a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE,
        L = (0, i.useCallback)(() => {
            D(E.L.TAKE_ACTION),
                p.default.track(g.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, d.I)({
                    analyticsLocations: T,
                    guildId: n,
                });
        }, [T, D, n]),
        j = (0, i.useCallback)(() => {
            (0, s.NI)(null), p.default.track(g.rMx.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        M = (0, i.useCallback)(() => {
            (0, f.N_)(null);
        }, []),
        k = void 0 !== N || (null != n ? null != C : null != A);
    if (!S && !k) return null;
    let U = void 0 !== N ? N : C;
    return (0, r.jsx)(h.Z, {
        title: b.intl.string(y.default["86GtGH"]),
        titleIcon: x
            ? (0, r.jsx)(o.IGR, {
                  text: b.intl.string(b.t.y2b7CA),
                  className: O.newBadge,
              })
            : void 0,
        className: v,
        showPremiumIcon: I,
        errors: P,
        children: (0, r.jsxs)("div", {
            className: O.buttonsContainer,
            children: [
                S &&
                    (0, r.jsx)(o.Button, {
                        variant: "primary",
                        size: "sm",
                        text: b.intl.string(y.default.vJqrIg),
                        onClick: L,
                    }),
                null == n &&
                    k &&
                    (0, r.jsx)(o.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: b.intl.string(y.default.ymq8WQ),
                        onClick: j,
                    }),
                null != n &&
                    null != U &&
                    (0, r.jsx)(o.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: b.intl.string(y.default["j/KRxc"]),
                        onClick: M,
                    }),
            ],
        }),
    });
}
