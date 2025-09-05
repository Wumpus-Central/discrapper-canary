n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(906732),
    u = n(642619),
    d = n(626135),
    f = n(74538),
    _ = n(150039),
    p = n(993413),
    h = n(504983),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    b = n(78946);
function y(e) {
    let {
            user: t,
            guild: n,
            className: a,
            sectionTitle: y,
            forcedDivider: O = !1,
            withTutorial: v = !1,
            showBorder: I = !1,
            isTryItOutFlow: T = !1,
            initialSelectedEffectId: S,
        } = e,
        A = (0, _.Kg)(t, n),
        C = f.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: N } = (0, c.ZP)(),
        { pendingProfileEffectId: R, errors: P } = (0, _.bd)(n),
        w = i.useCallback(
            () =>
                (0, u.H)({
                    analyticsLocations: N,
                    initialSelectedEffectId: S,
                    guild: n,
                }),
            [N, S, n],
        );
    i.useEffect(() => {
        C &&
            d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                type: g.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: N,
            });
    }, [C, N]);
    let D = null != n,
        x = T || void 0 !== R ? null != R : null != A;
    function L() {
        (0, _.s6)(null, A, null == n ? void 0 : n.id);
    }
    let j = v ? l.gtL : s.zx;
    return (0, r.jsx)(p.Z, {
        forcedDivider: O,
        borderType: h.Y.PREMIUM,
        hasBackground: !0,
        title: y,
        showBorder: I,
        errors: P,
        className: a,
        children: (0, r.jsxs)("div", {
            className: b.buttonsContainer,
            children: [
                (0, r.jsx)(j, {
                    size: s.zx.Sizes.SMALL,
                    onClick: w,
                    className: o()({ [b.buttonHighlighted]: v }),
                    children: E.intl.string(E.t["/dRfCQ"]),
                }),
                x &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: b.removeButton,
                        children: (0, r.jsx)(l.zxk, {
                            variant: "secondary",
                            size: "sm",
                            text: D ? E.intl.string(E.t.CHf9iI) : E.intl.string(E.t.uMuafH),
                            onClick: L,
                        }),
                    }),
            ],
        }),
    });
}
