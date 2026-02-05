n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(421380),
    o = n(397927),
    c = n(688810),
    d = n(309635),
    u = n(954571),
    _ = n(927578),
    m = n(919395),
    A = n(128450),
    g = n(212168),
    E = n(652215),
    h = n(788868),
    p = n(985018),
    C = n(97671);
function x(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: r,
            className: x,
            sectionTitle: T,
            forcedDivider: I = !1,
            withTutorial: S = !1,
            showBorder: f = !1,
        } = e,
        { analyticsLocations: N } = (0, c.Ay)(),
        b = _.Ay.canUsePremiumProfileCustomization(t),
        R = (0, m.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: v, errors: O } = (0, m.nZ)(n?.id);
    s.useEffect(() => {
        b &&
            u.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
                type: h.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: N,
            });
    }, [b, N]);
    let j = S ? o.wLn : l.$n;
    return (0, i.jsx)(A.A, {
        forcedDivider: I,
        borderType: g.i.PREMIUM,
        hasBackground: !0,
        title: T,
        showBorder: f,
        errors: O,
        className: x,
        children: (0, i.jsxs)("div", {
            className: C.NC,
            children: [
                (0, i.jsx)(j, {
                    size: l.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, d.W)({ analyticsLocations: N, guild: n, initialSelectedEffect: r });
                    },
                    className: a()({ [C.yj]: S }),
                    children: p.intl.string(p.t["/dRfCf"]),
                }),
                (void 0 === v ? null != R : null != v) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: C.DT,
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
