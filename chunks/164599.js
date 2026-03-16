n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(421380),
    o = n(397927),
    d = n(688810),
    c = n(309635),
    u = n(954571),
    _ = n(927578),
    m = n(919395),
    g = n(128450),
    A = n(212168),
    h = n(652215),
    x = n(788868),
    p = n(985018),
    T = n(97671);
function E(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: l,
            className: E,
            sectionTitle: C,
            forcedDivider: S = !1,
            withTutorial: f = !1,
            showBorder: N = !1,
        } = e,
        { analyticsLocations: b } = (0, d.Ay)(),
        I = _.Ay.canUsePremiumProfileCustomization(t),
        v = (0, m.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: j, errors: O } = (0, m.nZ)(n?.id);
    s.useEffect(() => {
        I &&
            u.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                type: x.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: b,
            });
    }, [I, b]);
    let y = f ? o.wLn : a.$n;
    return (0, i.jsx)(g.A, {
        forcedDivider: S,
        borderType: A.i.PREMIUM,
        hasBackground: !0,
        title: C,
        showBorder: N,
        errors: O,
        className: E,
        children: (0, i.jsxs)("div", {
            className: T.NC,
            children: [
                (0, i.jsx)(y, {
                    size: a.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.W)({ analyticsLocations: b, guild: n, initialSelectedEffect: l });
                    },
                    className: r()({ [T.yj]: f }),
                    children: p.intl.string(p.t["/dRfCf"]),
                }),
                (void 0 === j ? null != v : null != j) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T.DT,
                        children: (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? p.intl.string(p.t.CHf9iJ) : p.intl.string(p.t.uMuafO),
                            onClick: () => {
                                (0, m.mZ)(null, n?.id);
                            },
                        }),
                    }),
            ],
        }),
    });
}
