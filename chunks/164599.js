n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(421380),
    o = n(397927),
    d = n(688810),
    c = n(309635),
    u = n(84540),
    _ = n(954571),
    m = n(927578),
    g = n(919395),
    A = n(128450),
    x = n(212168),
    h = n(652215),
    p = n(788868),
    T = n(985018),
    E = n(97671);
function S(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: l,
            className: S,
            sectionTitle: f,
            forcedDivider: C = !1,
            withTutorial: b = !1,
            showBorder: N = !1,
        } = e,
        { analyticsLocations: I } = (0, d.Ay)(),
        v = m.Ay.canUsePremiumProfileCustomization(t),
        j = (0, g.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: y, errors: R } = (0, g.nZ)(n?.id);
    s.useEffect(() => {
        v &&
            _.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                type: p.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: I,
            });
    }, [v, I]);
    let O = b ? o.wLn : r.$n;
    return (0, i.jsx)(A.A, {
        forcedDivider: C,
        borderType: x.i.PREMIUM,
        hasBackground: !0,
        title: f,
        showBorder: N,
        errors: R,
        className: S,
        children: (0, i.jsxs)("div", {
            className: E.NC,
            children: [
                (0, i.jsx)(O, {
                    size: r.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.W)({ analyticsLocations: I, guild: n, initialSelectedEffect: l });
                    },
                    className: a()({ [E.yj]: b }),
                    children: T.intl.string(T.t["/dRfCf"]),
                }),
                (void 0 === y ? null != j : null != y) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E.DT,
                        children: (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? T.intl.string(T.t.CHf9iJ) : T.intl.string(T.t.uMuafO),
                            onClick: () => {
                                (0, u.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
