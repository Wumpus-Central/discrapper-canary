n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(906732),
    c = n(642619),
    d = n(626135),
    u = n(74538),
    m = n(150039),
    g = n(993413),
    p = n(504983),
    h = n(981631),
    f = n(474936),
    b = n(388032),
    N = n(482470);
function x(e) {
    let { user: t, guild: n, className: s, sectionTitle: x, forcedDivider: _ = !1, withTutorial: E = !1, showBorder: j = !1, isTryItOutFlow: O = !1, initialSelectedEffectId: C } = e,
        S = (0, m.Kg)(t, n),
        v = u.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: T } = (0, o.ZP)(),
        { pendingProfileEffectId: I, errors: y } = (0, m.bd)(n),
        A = i.useCallback(
            () =>
                (0, c.H)({
                    analyticsLocations: T,
                    initialSelectedEffectId: C,
                    guild: n
                }),
            [T, C, n]
        );
    i.useEffect(() => {
        v &&
            d.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                type: f.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: T
            });
    }, [v, T]);
    let P = null != n,
        R = E ? l.gtL : l.zxk;
    return (0, r.jsx)(g.Z, {
        forcedDivider: _,
        borderType: p.Y.PREMIUM,
        hasBackground: !0,
        title: x,
        showBorder: j,
        errors: y,
        className: s,
        children: (0, r.jsxs)('div', {
            className: N.buttonsContainer,
            children: [
                (0, r.jsx)(R, {
                    size: l.zxk.Sizes.SMALL,
                    onClick: A,
                    className: a()({ [N.buttonHighlighted]: E }),
                    children: b.NW.string(b.t['0nEVoK'])
                }),
                (O || void 0 !== I ? null != I : null != S) &&
                    (0, r.jsx)(l.zxk, {
                        className: N.removeButton,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.SMALL,
                        onClick: function () {
                            (0, m.s6)(null, S, null == n ? void 0 : n.id);
                        },
                        children: P ? b.NW.string(b.t.GJ3Fcn) : b.NW.string(b.t['Ld+f5e'])
                    })
            ]
        })
    });
}
