n.d(t, { Z: () => x });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(906732),
    c = n(642619),
    d = n(626135),
    u = n(74538),
    m = n(150039),
    p = n(993413),
    g = n(504983),
    h = n(981631),
    f = n(474936),
    b = n(388032),
    _ = n(482470);
function x(e) {
    let { user: t, guild: n, className: s, sectionTitle: x, forcedDivider: E = !1, withTutorial: C = !1, showBorder: j = !1, isTryItOutFlow: O = !1, initialSelectedEffectId: S } = e,
        v = (0, m.Kg)(t, n),
        T = u.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: I } = (0, o.ZP)(),
        { pendingProfileEffectId: N, errors: y } = (0, m.bd)(n),
        A = r.useCallback(
            () =>
                (0, c.H)({
                    analyticsLocations: I,
                    initialSelectedEffectId: S,
                    guild: n
                }),
            [I, S, n]
        );
    r.useEffect(() => {
        T &&
            d.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                type: f.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: I
            });
    }, [T, I]);
    let P = null != n,
        R = C ? a.gtL : a.zxk;
    return (0, i.jsx)(p.Z, {
        forcedDivider: E,
        borderType: g.Y.PREMIUM,
        hasBackground: !0,
        title: x,
        showBorder: j,
        errors: y,
        className: s,
        children: (0, i.jsxs)('div', {
            className: _.buttonsContainer,
            children: [
                (0, i.jsx)(R, {
                    size: a.zxk.Sizes.SMALL,
                    onClick: A,
                    className: l()({ [_.buttonHighlighted]: C }),
                    children: b.intl.string(b.t['0nEVoK'])
                }),
                (O || void 0 !== N ? null != N : null != v) &&
                    (0, i.jsx)(a.zxk, {
                        className: _.removeButton,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.SMALL,
                        onClick: function () {
                            (0, m.s6)(null, v, null == n ? void 0 : n.id);
                        },
                        children: P ? b.intl.string(b.t.GJ3Fcn) : b.intl.string(b.t['Ld+f5e'])
                    })
            ]
        })
    });
}
