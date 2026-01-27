n.d(t, {
    A: () => E,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(421380),
    o = n(397927),
    c = n(688810),
    d = n(309635),
    u = n(954571),
    _ = n(927578),
    p = n(919395),
    m = n(128450),
    g = n(212168),
    A = n(652215),
    f = n(788868),
    h = n(985018),
    b = n(97671);

function E(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: l,
            className: E,
            sectionTitle: x,
            forcedDivider: O = !1,
            withTutorial: C = !1,
            showBorder: I = !1,
        } = e,
        { analyticsLocations: T } = (0, c.Ay)(),
        S = _.Ay.canUsePremiumProfileCustomization(t),
        j = (0, p.N2)({
            user: t,
            guildId: null == n ? void 0 : n.id,
        }),
        { pendingProfileEffect: v, errors: N } = (0, p.nZ)(null == n ? void 0 : n.id);
    i.useEffect(() => {
        S &&
            u.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: f.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: T,
            });
    }, [S, T]);
    let y = C ? o.wLn : a.$n;
    return (0, r.jsx)(m.A, {
        forcedDivider: O,
        borderType: g.i.PREMIUM,
        hasBackground: !0,
        title: x,
        showBorder: I,
        errors: N,
        className: E,
        children: (0, r.jsxs)("div", {
            className: b.NC,
            children: [
                (0, r.jsx)(y, {
                    size: a.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, d.W)({
                            analyticsLocations: T,
                            guild: n,
                            initialSelectedEffect: l,
                        });
                    },
                    className: s()({
                        [b.yj]: C,
                    }),
                    children: h.intl.string(h.t["/dRfCf"]),
                }),
                (void 0 === v ? null != j : null != v) &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: b.DT,
                        children: (0, r.jsx)(o.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? h.intl.string(h.t.CHf9iJ) : h.intl.string(h.t.uMuafO),
                            onClick: () => {
                                (0, p.mZ)(null, null == n ? void 0 : n.id);
                            },
                        }),
                    }),
            ],
        }),
    });
}
