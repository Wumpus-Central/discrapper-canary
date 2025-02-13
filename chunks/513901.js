n.d(t, { Z: () => C });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(906732),
    c = n(642619),
    d = n(626135),
    u = n(74538),
    h = n(150039),
    m = n(993413),
    g = n(504983),
    x = n(981631),
    _ = n(474936),
    p = n(388032),
    E = n(148902);
function C(e) {
    let { user: t, guild: n, className: l, sectionTitle: C, forcedDivider: N = !1, withTutorial: f = !1, showBorder: I = !1, isTryItOutFlow: T = !1, initialSelectedEffectId: S } = e,
        j = (0, h.Kg)(t, n),
        v = u.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: b } = (0, o.ZP)(),
        { pendingProfileEffectId: A, errors: O } = (0, h.bd)(n),
        R = s.useCallback(
            () =>
                (0, c.H)({
                    analyticsLocations: b,
                    initialSelectedEffectId: S,
                    guild: n
                }),
            [b, S, n]
        );
    s.useEffect(() => {
        v &&
            d.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                type: _.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: b
            });
    }, [v, b]);
    let D = null != n,
        P = f ? a.gtL : a.zxk;
    return (0, i.jsx)(m.Z, {
        forcedDivider: N,
        borderType: g.Y.PREMIUM,
        hasBackground: !0,
        title: C,
        showBorder: I,
        errors: O,
        className: l,
        children: (0, i.jsxs)('div', {
            className: E.buttonsContainer,
            children: [
                (0, i.jsx)(P, {
                    size: a.zxk.Sizes.SMALL,
                    onClick: R,
                    className: r()({ [E.buttonHighlighted]: f }),
                    children: p.intl.string(p.t['0nEVoK'])
                }),
                (T || void 0 !== A ? null != A : null != j) &&
                    (0, i.jsx)(a.zxk, {
                        className: E.removeButton,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.SMALL,
                        onClick: function () {
                            (0, h.s6)(null, j, null == n ? void 0 : n.id);
                        },
                        children: D ? p.intl.string(p.t.GJ3Fcn) : p.intl.string(p.t['Ld+f5e'])
                    })
            ]
        })
    });
}
