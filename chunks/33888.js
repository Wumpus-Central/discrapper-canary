n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    d = n(939249),
    c = n(626034),
    u = n(187322),
    m = n(22231),
    g = n(452027),
    h = n(649640),
    x = n(946274),
    _ = n(71393),
    p = n(486020),
    A = n(835517),
    E = n(997509),
    f = n(652215),
    j = n(282435),
    N = n(985018),
    I = n(159457);
function C(e) {
    let { profile: t, canManageGuild: n, handleClick: l, hasCustomBanner: s } = e,
        a = (0, h.b2)(),
        c = (0, h.aG)({ profile: t, defaultColor: a.hex(), forceDefaultColor: !1 });
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: N.intl.string(N.t.W4Nd7Q),
        children: (0, i.jsx)(d.D, {
            "aria-disabled": !n,
            tabIndex: n ? 0 : -1,
            "aria-label": N.intl.string(N.t.W4Nd7Q),
            onClick: n ? l : void 0,
            style: { background: (0, h.n6)(c) },
            className: r()(I.DB, { [I.r9]: !n }),
            children: (0, i.jsx)("div", { className: r()({ [I.z2]: !s && null == t.brandColorPrimary }) }),
        }),
    });
}
function b(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: s, canManageGuild: a } = e,
        o = null != n.customBanner,
        d = l.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return p.aq.test(e)
                ? e
                : p.Ay.getGuildDiscoverySplashURL({ id: n.id, splash: n.customBanner, size: 300 * (0, A.A)() });
        }, [n]);
    if (!t) return null;
    let g =
        null != d
            ? (0, i.jsx)("img", { className: I.qX, src: d, alt: "", "aria-hidden": !0 })
            : (0, i.jsx)(c.k, { size: "md" });
    return (0, i.jsx)("div", {
        className: I.sK,
        children: (0, i.jsx)(u.vN, {
            within: !0,
            children: (0, i.jsx)("div", {
                className: r()(I.K7, { [I.e7]: o }),
                children: (0, i.jsxs)("div", {
                    className: r()(I.vw, { [I.r9]: !a }),
                    children: [
                        g,
                        (0, i.jsx)("div", { className: I.Lw }),
                        (0, i.jsx)(m.R, { size: "custom", className: I.QY, width: 20, height: 20, color: "white" }),
                        (0, i.jsx)(x.Ay, { multiple: !1, tabIndex: 0, onChange: s, disabled: !a }),
                    ],
                }),
            }),
        }),
    });
}
function v(e) {
    let { profile: t, onCustomBannerChange: n, canManageGuild: s } = e,
        c = (0, a.bG)([_.A], () => _.A.getGuild(t.id)),
        u = c?.features.has(f.GuildFeatures.DISCOVERABLE) ?? !1,
        m = t.id,
        x = l.useCallback(
            (e) => () => {
                E.A.updateGuildProfile(m, { brandColorPrimary: e, customBanner: null });
            },
            [m],
        ),
        p = l.useCallback((e) => (!u || null == t.customBanner) && e === t.brandColorPrimary, [t, u]);
    return (0, i.jsx)(g.D, {
        label: N.intl.string(N.t.BSVog8),
        children: (0, i.jsxs)("div", {
            className: I.Vg,
            children: [
                (0, i.jsx)(C, {
                    profile: t,
                    canManageGuild: s,
                    handleClick: x(null),
                    hasCustomBanner: u && null != t.customBanner,
                }),
                j.aA.map((e) => {
                    let { name: t, color: n } = e;
                    return (0, i.jsx)(
                        o.m,
                        {
                            asContainer: !0,
                            __unsupportedReactNodeAsText: t,
                            children: (0, i.jsx)(d.D, {
                                "aria-disabled": !s,
                                tabIndex: s ? 0 : -1,
                                "aria-label": t,
                                onClick: s ? x(n) : void 0,
                                style: { background: (0, h.n6)(n) },
                                className: r()(I.DB, { [I.r9]: !s }),
                                children: (0, i.jsx)("div", { className: r()({ [I.z2]: p(n) }) }),
                            }),
                        },
                        t,
                    );
                }),
                (0, i.jsx)(b, { canManageGuild: s, isDiscoverable: u, profile: t, onCustomBannerChange: n }),
            ],
        }),
    });
}
