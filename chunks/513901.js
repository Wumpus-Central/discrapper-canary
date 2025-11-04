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
            initialSelectedEffect: a,
            className: y,
            sectionTitle: O,
            forcedDivider: v = !1,
            withTutorial: I = !1,
            showBorder: T = !1,
            isTryItOutFlow: S = !1,
        } = e,
        A = (0, _.Kg)(t, n),
        C = f.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: N } = (0, c.ZP)(),
        { pendingProfileEffect: R, errors: P } = (0, _.bd)(n),
        w = i.useCallback(
            () =>
                (0, u.H)({
                    analyticsLocations: N,
                    initialSelectedEffect: a,
                    guild: n,
                }),
            [N, a, n],
        );
    i.useEffect(() => {
        C &&
            d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                type: g.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: N,
            });
    }, [C, N]);
    let D = null != n,
        x = S || void 0 !== R ? null != R : null != A;
    function L() {
        (0, _.UK)(null, null == n ? void 0 : n.id);
    }
    let M = I ? l.gtL : s.zx;
    return (0, r.jsx)(p.Z, {
        forcedDivider: v,
        borderType: h.Y.PREMIUM,
        hasBackground: !0,
        title: O,
        showBorder: T,
        errors: P,
        className: y,
        children: (0, r.jsxs)("div", {
            className: b.buttonsContainer,
            children: [
                (0, r.jsx)(M, {
                    size: s.zx.Sizes.SMALL,
                    onClick: w,
                    className: o()({ [b.buttonHighlighted]: I }),
                    children: E.intl.string(E.t["/dRfCf"]),
                }),
                x &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: b.removeButton,
                        children: (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: D ? E.intl.string(E.t.CHf9iJ) : E.intl.string(E.t.uMuafO),
                            onClick: L,
                        }),
                    }),
            ],
        }),
    });
}
