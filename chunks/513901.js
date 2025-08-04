n.d(t, { Z: () => j });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(755721),
    o = n(481060),
    c = n(906732),
    d = n(642619),
    u = n(626135),
    m = n(74538),
    p = n(150039),
    g = n(993413),
    h = n(504983),
    f = n(981631),
    b = n(474936),
    x = n(388032),
    _ = n(482470);
function j(e) {
    let { user: t, guild: n, className: s, sectionTitle: j, forcedDivider: C = !1, withTutorial: E = !1, showBorder: O = !1, isTryItOutFlow: v = !1, initialSelectedEffectId: S } = e,
        T = (0, p.Kg)(t, n),
        N = m.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: I } = (0, c.ZP)(),
        { pendingProfileEffectId: y, errors: A } = (0, p.bd)(n),
        P = r.useCallback(
            () =>
                (0, d.H)({
                    analyticsLocations: I,
                    initialSelectedEffectId: S,
                    guild: n
                }),
            [I, S, n]
        );
    r.useEffect(() => {
        N &&
            u.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: b.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: I
            });
    }, [N, I]);
    let R = null != n,
        D = E ? o.gtL : l.zx;
    return (0, i.jsx)(g.Z, {
        forcedDivider: C,
        borderType: h.Y.PREMIUM,
        hasBackground: !0,
        title: j,
        showBorder: O,
        errors: A,
        className: s,
        children: (0, i.jsxs)('div', {
            className: _.buttonsContainer,
            children: [
                (0, i.jsx)(D, {
                    size: l.zx.Sizes.SMALL,
                    onClick: P,
                    className: a()({ [_.buttonHighlighted]: E }),
                    children: x.intl.string(x.t['/dRfCQ'])
                }),
                (v || void 0 !== y ? null != y : null != T) &&
                    (0, i.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: _.removeButton,
                        children: (0, i.jsx)(o.zxk, {
                            variant: 'secondary',
                            size: 'sm',
                            text: R ? x.intl.string(x.t.CHf9iI) : x.intl.string(x.t.uMuafH),
                            onClick: function () {
                                (0, p.s6)(null, T, null == n ? void 0 : n.id);
                            }
                        })
                    })
            ]
        })
    });
}
