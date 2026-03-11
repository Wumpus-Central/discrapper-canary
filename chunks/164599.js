n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(421380),
    o = n(397927),
    d = n(688810),
    c = n(309635),
    u = n(954571),
    _ = n(927578),
    g = n(919395),
    A = n(128450),
    m = n(212168),
    h = n(652215),
    p = n(788868),
    x = n(985018),
    E = n(971065);
function T(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: l,
            className: T,
            sectionTitle: S,
            forcedDivider: C = !1,
            withTutorial: I = !1,
            showBorder: f = !1,
        } = e,
        { analyticsLocations: N } = (0, d.Ay)(),
        b = _.Ay.canUsePremiumProfileCustomization(t),
        v = (0, g.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: O, errors: j } = (0, g.nZ)(n?.id);
    s.useEffect(() => {
        b &&
            u.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                type: p.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: N,
            });
    }, [b, N]);
    let R = I ? o.wLn : r.$n;
    return (0, i.jsx)(A.A, {
        forcedDivider: C,
        borderType: m.i.PREMIUM,
        hasBackground: !0,
        title: S,
        showBorder: f,
        errors: j,
        className: T,
        children: (0, i.jsxs)("div", {
            className: E.NC,
            children: [
                (0, i.jsx)(R, {
                    size: r.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.W)({ analyticsLocations: N, guild: n, initialSelectedEffect: l });
                    },
                    className: a()({ [E.yj]: I }),
                    children: x.intl.string(x.t["/dRfCf"]),
                }),
                (void 0 === O ? null != v : null != O) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E.DT,
                        children: (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? x.intl.string(x.t.CHf9iJ) : x.intl.string(x.t.uMuafO),
                            onClick: () => {
                                (0, g.mZ)(null, n?.id);
                            },
                        }),
                    }),
            ],
        }),
    });
}
