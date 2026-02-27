n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(421380),
    o = n(397927),
    c = n(688810),
    d = n(309635),
    u = n(954571),
    _ = n(927578),
    m = n(919395),
    A = n(128450),
    g = n(212168),
    h = n(652215),
    x = n(788868),
    p = n(985018),
    E = n(97671);
function C(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: a,
            className: C,
            sectionTitle: T,
            forcedDivider: S = !1,
            withTutorial: I = !1,
            showBorder: f = !1,
        } = e,
        { analyticsLocations: N } = (0, c.Ay)(),
        b = _.Ay.canUsePremiumProfileCustomization(t),
        j = (0, m.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: v, errors: O } = (0, m.nZ)(n?.id);
    s.useEffect(() => {
        b &&
            u.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                type: x.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: N,
            });
    }, [b, N]);
    let R = I ? o.wLn : r.$n;
    return (0, i.jsx)(A.A, {
        forcedDivider: S,
        borderType: g.i.PREMIUM,
        hasBackground: !0,
        title: T,
        showBorder: f,
        errors: O,
        className: C,
        children: (0, i.jsxs)("div", {
            className: E.NC,
            children: [
                (0, i.jsx)(R, {
                    size: r.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, d.W)({ analyticsLocations: N, guild: n, initialSelectedEffect: a });
                    },
                    className: l()({ [E.yj]: I }),
                    children: p.intl.string(p.t["/dRfCf"]),
                }),
                (void 0 === v ? null != j : null != v) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E.DT,
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
