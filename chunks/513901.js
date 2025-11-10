n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(906732),
    u = n(642619),
    d = n(350327),
    f = n(626135),
    _ = n(74538),
    p = n(150039),
    h = n(993413),
    m = n(504983),
    g = n(981631),
    E = n(474936),
    b = n(388032),
    y = n(78946);
function O(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: a,
            className: O,
            sectionTitle: v,
            forcedDivider: I = !1,
            withTutorial: S = !1,
            showBorder: T = !1,
            isTryItOut: A = !1,
        } = e,
        { analyticsLocations: C } = (0, c.ZP)(),
        N = _.ZP.canUsePremiumProfileCustomization(t),
        R = (0, p.nh)({
            user: t,
            guildId: null == n ? void 0 : n.id,
        }),
        { pendingProfileEffect: P, errors: w } = (0, p.sY)({
            guildId: null == n ? void 0 : n.id,
            isTryItOut: A,
        }),
        D = i.useCallback(() => {
            (0, u.H)({
                analyticsLocations: C,
                guild: n,
                initialSelectedEffect: a,
                isTryItOut: A,
            });
        }, [C, a, n, A]);
    i.useEffect(() => {
        N &&
            f.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                type: E.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: C,
            });
    }, [N, C]);
    let x = A || void 0 !== P ? null != P : null != R;
    function L() {
        A ? (0, d.Ju)(null) : (0, p.UK)(null, null == n ? void 0 : n.id);
    }
    let M = S ? l.gtL : s.zx;
    return (0, r.jsx)(h.Z, {
        forcedDivider: I,
        borderType: m.Y.PREMIUM,
        hasBackground: !0,
        title: v,
        showBorder: T,
        errors: w,
        className: O,
        children: (0, r.jsxs)("div", {
            className: y.buttonsContainer,
            children: [
                (0, r.jsx)(M, {
                    size: s.zx.Sizes.SMALL,
                    onClick: D,
                    className: o()({ [y.buttonHighlighted]: S }),
                    children: b.intl.string(b.t["/dRfCf"]),
                }),
                x &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: y.removeButton,
                        children: (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? b.intl.string(b.t.CHf9iJ) : b.intl.string(b.t.uMuafO),
                            onClick: L,
                        }),
                    }),
            ],
        }),
    });
}
