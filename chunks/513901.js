n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(906732),
    u = n(642619),
    d = n(626135),
    f = n(74538),
    p = n(150039),
    _ = n(993413),
    m = n(504983),
    h = n(981631),
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
            withTutorial: S = !1,
            showBorder: I = !1,
        } = e,
        { analyticsLocations: T } = (0, c.ZP)(),
        A = f.ZP.canUsePremiumProfileCustomization(t),
        C = (0, p.nh)({
            user: t,
            guildId: null == n ? void 0 : n.id,
        }),
        { pendingProfileEffect: N, errors: P } = (0, p.xZ)(null == n ? void 0 : n.id),
        R = void 0 === N ? null != C : null != N,
        w = () => {
            (0, u.H)({
                analyticsLocations: T,
                guild: n,
                initialSelectedEffect: a,
            });
        },
        D = () => {
            (0, p.UK)(null, null == n ? void 0 : n.id);
        };
    i.useEffect(() => {
        A &&
            d.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                type: g.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: T,
            });
    }, [A, T]);
    let x = S ? l.gtL : s.zx;
    return (0, r.jsx)(_.Z, {
        forcedDivider: v,
        borderType: m.Y.PREMIUM,
        hasBackground: !0,
        title: O,
        showBorder: I,
        errors: P,
        className: y,
        children: (0, r.jsxs)("div", {
            className: b.buttonsContainer,
            children: [
                (0, r.jsx)(x, {
                    size: s.zx.Sizes.SMALL,
                    onClick: w,
                    className: o()({ [b.buttonHighlighted]: S }),
                    children: E.intl.string(E.t["/dRfCf"]),
                }),
                R &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: b.removeButton,
                        children: (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? E.intl.string(E.t.CHf9iJ) : E.intl.string(E.t.uMuafO),
                            onClick: D,
                        }),
                    }),
            ],
        }),
    });
}
