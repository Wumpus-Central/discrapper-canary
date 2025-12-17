n.d(t, { Z: () => C }), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(220250),
    u = n(813197),
    g = n(430824),
    f = n(768581),
    m = n(921948),
    b = n(434404),
    p = n(981631),
    h = n(570911),
    x = n(388032),
    j = n(257699);
function v(e) {
    let { profile: t, canManageGuild: n, handleClick: i, hasCustomBanner: l } = e,
        s = (0, d.nv)(),
        u = (0, d.qw)({
            profile: t,
            defaultColor: s.hex(),
            forceDefaultColor: !1,
        });
    return (0, r.jsx)(o.u, {
        asContainer: !0,
        text: x.intl.string(x.t.W4Nd7Q),
        children: (0, r.jsx)(c.P3F, {
            "aria-disabled": !n,
            tabIndex: n ? 0 : -1,
            "aria-label": x.intl.string(x.t.W4Nd7Q),
            onClick: n ? i : void 0,
            style: { background: (0, d.dG)(u) },
            className: a()(j.itemContainer, { [j.disabled]: !n }),
            children: (0, r.jsx)("div", { className: a()({ [j.itemSelected]: !l && null == t.brandColorPrimary }) }),
        }),
    });
}
function O(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: l, canManageGuild: s } = e,
        o = null != n.customBanner,
        d = i.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return f.ff.test(e)
                ? e
                : f.ZP.getGuildDiscoverySplashURL({
                      id: n.id,
                      splash: n.customBanner,
                      size: 300 * (0, m.Z)(),
                  });
        }, [n]);
    if (!t) return null;
    let g =
        null != d
            ? (0, r.jsx)("img", {
                  className: j.uploadedImage,
                  src: d,
                  alt: "",
                  "aria-hidden": !0,
              })
            : (0, r.jsx)(c.dZu, { size: "md" });
    return (0, r.jsx)("div", {
        className: j.uploadItemContainer,
        children: (0, r.jsx)(c.tEY, {
            within: !0,
            children: (0, r.jsx)("div", {
                className: a()(j.uploadItemWrapper, { [j.uploadItemSelected]: o }),
                children: (0, r.jsxs)("div", {
                    className: a()(j.uploadItem, { [j.disabled]: !s }),
                    children: [
                        g,
                        (0, r.jsx)("div", { className: j.overlay }),
                        (0, r.jsx)(c.vdY, {
                            size: "custom",
                            className: j.overlayIcon,
                            width: 20,
                            height: 20,
                            color: "white",
                        }),
                        (0, r.jsx)(u.ZP, {
                            multiple: !1,
                            tabIndex: 0,
                            onChange: l,
                            disabled: !s,
                        }),
                    ],
                }),
            }),
        }),
    });
}
function C(e) {
    var t;
    let { profile: n, onCustomBannerChange: l, canManageGuild: u } = e,
        f = (0, s.e7)([g.Z], () => g.Z.getGuild(n.id)),
        m = null != (t = null == f ? void 0 : f.features.has(p.GuildFeatures.DISCOVERABLE)) && t,
        C = n.id,
        y = i.useCallback(
            (e) => () => {
                b.Z.updateGuildProfile(C, {
                    brandColorPrimary: e,
                    customBanner: null,
                });
            },
            [C],
        ),
        N = i.useCallback((e) => (!m || null == n.customBanner) && e === n.brandColorPrimary, [n, m]);
    return (0, r.jsx)(c.gNt, {
        label: x.intl.string(x.t.BSVog8),
        children: (0, r.jsxs)("div", {
            className: j.grid,
            children: [
                (0, r.jsx)(v, {
                    profile: n,
                    canManageGuild: u,
                    handleClick: y(null),
                    hasCustomBanner: m && null != n.customBanner,
                }),
                h.cb.map((e) => {
                    let { name: t, color: n } = e;
                    return (0, r.jsx)(
                        o.u,
                        {
                            asContainer: !0,
                            __unsupportedReactNodeAsText: t,
                            children: (0, r.jsx)(c.P3F, {
                                "aria-disabled": !u,
                                tabIndex: u ? 0 : -1,
                                "aria-label": t,
                                onClick: u ? y(n) : void 0,
                                style: { background: (0, d.dG)(n) },
                                className: a()(j.itemContainer, { [j.disabled]: !u }),
                                children: (0, r.jsx)("div", { className: a()({ [j.itemSelected]: N(n) }) }),
                            }),
                        },
                        t,
                    );
                }),
                (0, r.jsx)(O, {
                    canManageGuild: u,
                    isDiscoverable: m,
                    profile: n,
                    onCustomBannerChange: l,
                }),
            ],
        }),
    });
}
