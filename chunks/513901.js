n.d(t, { Z: () => x });
var i = n(255367),
    r = n(73800),
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
    let { user: t, guild: n, className: s, sectionTitle: x, forcedDivider: E = !1, withTutorial: j = !1, showBorder: C = !1, isTryItOutFlow: O = !1, initialSelectedEffectId: S } = e,
        v = (0, m.Kg)(t, n),
        T = u.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: N } = (0, o.ZP)(),
        { pendingProfileEffectId: I, errors: y } = (0, m.bd)(n),
        A = r.useCallback(
            () =>
                (0, c.H)({
                    analyticsLocations: N,
                    initialSelectedEffectId: S,
                    guild: n
                }),
            [N, S, n]
        );
    r.useEffect(() => {
        T &&
            d.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                type: f.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: N
            });
    }, [T, N]);
    let P = null != n,
        R = j ? a.gtL : a.zxk;
    return (0, i.jsx)(p.Z, {
        forcedDivider: E,
        borderType: g.Y.PREMIUM,
        hasBackground: !0,
        title: x,
        showBorder: C,
        errors: y,
        className: s,
        children: (0, i.jsxs)('div', {
            className: _.buttonsContainer,
            children: [
                (0, i.jsx)(R, {
                    size: a.zxk.Sizes.SMALL,
                    onClick: A,
                    className: l()({ [_.buttonHighlighted]: j }),
                    children: b.intl.string(b.t['/dRfCQ'])
                }),
                (O || void 0 !== I ? null != I : null != v) &&
                    (0, i.jsx)(a.zxk, {
                        className: _.removeButton,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.SMALL,
                        onClick: function () {
                            (0, m.s6)(null, v, null == n ? void 0 : n.id);
                        },
                        children: P ? b.intl.string(b.t.CHf9iI) : b.intl.string(b.t.uMuafH)
                    })
            ]
        })
    });
}
