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
    m = n(954571),
    _ = n(927578),
    g = n(919395),
    x = n(128450),
    A = n(212168),
    h = n(652215),
    p = n(788868),
    f = n(985018),
    T = n(545286);
function S(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: l,
            className: S,
            sectionTitle: E,
            forcedDivider: b = !1,
            withTutorial: C = !1,
            showBorder: v = !1,
        } = e,
        { analyticsLocations: N } = (0, d.Ay)(),
        I = _.Ay.canUsePremiumProfileCustomization(t),
        j = (0, g.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: y, errors: O } = (0, g.nZ)(n?.id);
    s.useEffect(() => {
        I &&
            m.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                type: p.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: N,
            });
    }, [I, N]);
    let R = C ? o.wLn : r.$n;
    return (0, i.jsx)(x.A, {
        forcedDivider: b,
        borderType: A.i.PREMIUM,
        hasBackground: !0,
        title: E,
        showBorder: v,
        errors: O,
        className: S,
        children: (0, i.jsxs)("div", {
            className: T.NC,
            children: [
                (0, i.jsx)(R, {
                    size: r.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.W)({ analyticsLocations: N, guild: n, initialSelectedEffect: l });
                    },
                    className: a()({ [T.yj]: C }),
                    children: f.intl.string(f.t["/dRfCf"]),
                }),
                (void 0 === y ? null != j : null != y) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T.DT,
                        children: (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? f.intl.string(f.t.CHf9iJ) : f.intl.string(f.t.uMuafO),
                            onClick: () => {
                                (0, u.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
