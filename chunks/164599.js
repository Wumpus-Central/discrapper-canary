n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(862482),
    o = n(930861),
    d = n(821609),
    u = n(688810),
    c = n(617061),
    g = n(84540),
    m = n(954571),
    _ = n(927578),
    A = n(919395),
    h = n(128450),
    p = n(212168),
    x = n(652215),
    E = n(788868),
    T = n(985018),
    S = n(872246);
function f(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: l,
            className: f,
            sectionTitle: b,
            forcedDivider: C = !1,
            withTutorial: v = !1,
            showBorder: N = !1,
        } = e,
        { analyticsLocations: I } = (0, u.Ay)(),
        y = _.Ay.canUsePremiumProfileCustomization(t),
        j = (0, A.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: O, errors: R } = (0, A.nZ)(n?.id);
    s.useEffect(() => {
        y &&
            m.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, {
                type: E.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: I,
            });
    }, [y, I]);
    let L = v ? o.wL : r.$n;
    return (0, i.jsx)(h.A, {
        forcedDivider: C,
        borderType: p.i.PREMIUM,
        hasBackground: !0,
        title: b,
        showBorder: N,
        errors: R,
        className: f,
        children: (0, i.jsxs)("div", {
            className: S.NC,
            children: [
                (0, i.jsx)(L, {
                    size: r.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.W)({ analyticsLocations: I, guild: n, initialSelectedEffect: l });
                    },
                    className: a()({ [S.yj]: v }),
                    children: T.intl.string(T.t["/dRfCf"]),
                }),
                (void 0 === O ? null != j : null != O) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: S.DT,
                        children: (0, i.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? T.intl.string(T.t.CHf9iJ) : T.intl.string(T.t.uMuafO),
                            onClick: () => {
                                (0, g.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
