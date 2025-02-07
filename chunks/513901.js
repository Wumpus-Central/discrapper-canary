n.d(t, { Z: () => C });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(906732),
    c = n(642619),
    d = n(626135),
    u = n(74538),
    m = n(150039),
    h = n(993413),
    g = n(504983),
    _ = n(981631),
    x = n(474936),
    p = n(388032),
    E = n(184057);
function C(e) {
    let { user: t, guild: n, className: r, sectionTitle: C, forcedDivider: f = !1, withTutorial: T = !1, showBorder: N = !1, isTryItOutFlow: S = !1, initialSelectedEffectId: I } = e,
        b = (0, m.Kg)(t, n),
        v = u.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: j } = (0, o.ZP)(),
        { pendingProfileEffectId: A, errors: O } = (0, m.bd)(n),
        R = s.useCallback(
            () =>
                (0, c.H)({
                    analyticsLocations: j,
                    initialSelectedEffectId: I,
                    guild: n
                }),
            [j, I, n]
        );
    s.useEffect(() => {
        v &&
            d.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                type: x.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: j
            });
    }, [v, j]);
    let P = null != n,
        D = T ? a.gtL : a.zxk;
    return (0, i.jsx)(h.Z, {
        forcedDivider: f,
        borderType: g.Y.PREMIUM,
        hasBackground: !0,
        title: C,
        showBorder: N,
        errors: O,
        className: r,
        children: (0, i.jsxs)('div', {
            className: E.buttonsContainer,
            children: [
                (0, i.jsx)(D, {
                    size: a.zxk.Sizes.SMALL,
                    onClick: R,
                    className: l()({ [E.buttonHighlighted]: T }),
                    children: p.intl.string(p.t['0nEVoK'])
                }),
                (S || void 0 !== A ? null != A : null != b) &&
                    (0, i.jsx)(a.zxk, {
                        className: E.removeButton,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.SMALL,
                        onClick: function () {
                            (0, m.s6)(null, b, null == n ? void 0 : n.id);
                        },
                        children: P ? p.intl.string(p.t.GJ3Fcn) : p.intl.string(p.t['Ld+f5e'])
                    })
            ]
        })
    });
}
