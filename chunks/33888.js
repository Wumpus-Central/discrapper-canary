"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(649640),
    u = n(946274),
    m = n(71393),
    g = n(486020),
    x = n(835517),
    h = n(997509),
    _ = n(652215),
    A = n(282435),
    p = n(985018),
    f = n(168938);
function j(e) {
    let { profile: t, canManageGuild: n, handleClick: s, hasCustomBanner: l } = e,
        a = (0, c.b2)(),
        u = (0, c.aG)({ profile: t, defaultColor: a.hex(), forceDefaultColor: !1 });
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: p.intl.string(p.t.W4Nd7Q),
        children: (0, i.jsx)(d.DUT, {
            "aria-disabled": !n,
            tabIndex: n ? 0 : -1,
            "aria-label": p.intl.string(p.t.W4Nd7Q),
            onClick: n ? s : void 0,
            style: { background: (0, c.n6)(u) },
            className: r()(f.DB, { [f.r9]: !n }),
            children: (0, i.jsx)("div", { className: r()({ [f.z2]: !l && null == t.brandColorPrimary }) }),
        }),
    });
}
function N(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: l, canManageGuild: a } = e,
        o = null != n.customBanner,
        c = s.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return g.aq.test(e)
                ? e
                : g.Ay.getGuildDiscoverySplashURL({ id: n.id, splash: n.customBanner, size: 300 * (0, x.A)() });
        }, [n]);
    if (!t) return null;
    let m =
        null != c
            ? (0, i.jsx)("img", { className: f.qX, src: c, alt: "", "aria-hidden": !0 })
            : (0, i.jsx)(d.kpT, { size: "md" });
    return (0, i.jsx)("div", {
        className: f.sK,
        children: (0, i.jsx)(d.vN3, {
            within: !0,
            children: (0, i.jsx)("div", {
                className: r()(f.K7, { [f.e7]: o }),
                children: (0, i.jsxs)("div", {
                    className: r()(f.vw, { [f.r9]: !a }),
                    children: [
                        m,
                        (0, i.jsx)("div", { className: f.Lw }),
                        (0, i.jsx)(d.R2l, { size: "custom", className: f.QY, width: 20, height: 20, color: "white" }),
                        (0, i.jsx)(u.Ay, { multiple: !1, tabIndex: 0, onChange: l, disabled: !a }),
                    ],
                }),
            }),
        }),
    });
}
function E(e) {
    let { profile: t, onCustomBannerChange: n, canManageGuild: l } = e,
        u = (0, a.bG)([m.A], () => m.A.getGuild(t.id)),
        g = u?.features.has(_.GuildFeatures.DISCOVERABLE) ?? !1,
        x = t.id,
        E = s.useCallback(
            (e) => () => {
                h.A.updateGuildProfile(x, { brandColorPrimary: e, customBanner: null });
            },
            [x],
        ),
        b = s.useCallback((e) => (!g || null == t.customBanner) && e === t.brandColorPrimary, [t, g]);
    return (0, i.jsx)(d.D0$, {
        label: p.intl.string(p.t.BSVog8),
        children: (0, i.jsxs)("div", {
            className: f.Vg,
            children: [
                (0, i.jsx)(j, {
                    profile: t,
                    canManageGuild: l,
                    handleClick: E(null),
                    hasCustomBanner: g && null != t.customBanner,
                }),
                A.aA.map((e) => {
                    let { name: t, color: n } = e;
                    return (0, i.jsx)(
                        o.m,
                        {
                            asContainer: !0,
                            __unsupportedReactNodeAsText: t,
                            children: (0, i.jsx)(d.DUT, {
                                "aria-disabled": !l,
                                tabIndex: l ? 0 : -1,
                                "aria-label": t,
                                onClick: l ? E(n) : void 0,
                                style: { background: (0, c.n6)(n) },
                                className: r()(f.DB, { [f.r9]: !l }),
                                children: (0, i.jsx)("div", { className: r()({ [f.z2]: b(n) }) }),
                            }),
                        },
                        t,
                    );
                }),
                (0, i.jsx)(N, { canManageGuild: l, isDiscoverable: g, profile: t, onCustomBannerChange: n }),
            ],
        }),
    });
}
