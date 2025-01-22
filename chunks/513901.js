n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(906732),
    c = n(642619),
    d = n(626135),
    u = n(74538),
    m = n(150039),
    g = n(993413),
    h = n(504983),
    p = n(981631),
    x = n(474936),
    f = n(388032),
    _ = n(184057);
function E(e) {
    let { user: t, guild: n, className: s, sectionTitle: E, forcedDivider: C = !1, withTutorial: T = !1, showBorder: S = !1, isTryItOutFlow: b = !1, initialSelectedEffectId: I } = e,
        N = (0, m.Kg)(t, n),
        v = u.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: A } = (0, o.ZP)(),
        { pendingProfileEffectId: j, errors: O } = (0, m.bd)(n),
        R = r.useCallback(
            () =>
                (0, c.H)({
                    analyticsLocations: A,
                    initialSelectedEffectId: I,
                    guild: n
                }),
            [A, I, n]
        );
    r.useEffect(() => {
        v &&
            d.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                type: x.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: A
            });
    }, [v, A]);
    let P = null != n,
        D = b || void 0 !== j ? null != j : null != N,
        y = T ? l.ShinyButton : l.Button;
    return (0, i.jsx)(g.Z, {
        forcedDivider: C,
        borderType: h.Y.PREMIUM,
        hasBackground: !0,
        title: E,
        showBorder: S,
        errors: O,
        className: s,
        children: (0, i.jsxs)('div', {
            className: _.buttonsContainer,
            children: [
                (0, i.jsx)(y, {
                    size: l.Button.Sizes.SMALL,
                    onClick: R,
                    className: a()({ [_.buttonHighlighted]: T }),
                    children: f.intl.string(f.t['0nEVoK'])
                }),
                D &&
                    (0, i.jsx)(l.Button, {
                        className: _.removeButton,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.LINK,
                        size: l.Button.Sizes.SMALL,
                        onClick: function () {
                            (0, m.s6)(null, N, null == n ? void 0 : n.id);
                        },
                        children: P ? f.intl.string(f.t.GJ3Fcn) : f.intl.string(f.t['Ld+f5e'])
                    })
            ]
        })
    });
}
