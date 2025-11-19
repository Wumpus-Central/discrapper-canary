n.d(t, { Z: () => O }), n(35282);
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
    m = n(768581),
    p = n(921948),
    f = n(434404),
    h = n(981631),
    b = n(570911),
    x = n(388032),
    j = n(823222);
function _(e) {
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
function v(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: l, canManageGuild: s } = e,
        o = null != n.customBanner,
        d = i.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return m.ff.test(e)
                ? e
                : m.ZP.getGuildDiscoverySplashURL({
                      id: n.id,
                      splash: n.customBanner,
                      size: 300 * (0, p.Z)(),
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
function O(e) {
    var t;
    let { profile: n, onCustomBannerChange: l, canManageGuild: u } = e,
        m = (0, s.e7)([g.Z], () => g.Z.getGuild(n.id)),
        p = null != (t = null == m ? void 0 : m.features.has(h.GuildFeatures.DISCOVERABLE)) && t,
        O = n.id,
        C = i.useCallback(
            (e) => () => {
                f.Z.updateGuildProfile(O, {
                    brandColorPrimary: e,
                    customBanner: null,
                });
            },
            [O],
        ),
        y = i.useCallback((e) => (!p || null == n.customBanner) && e === n.brandColorPrimary, [n, p]);
    return (0, r.jsx)(c.gNt, {
        label: x.intl.string(x.t.BSVog8),
        children: (0, r.jsxs)("div", {
            className: j.grid,
            children: [
                (0, r.jsx)(_, {
                    profile: n,
                    canManageGuild: u,
                    handleClick: C(null),
                    hasCustomBanner: p && null != n.customBanner,
                }),
                b.cb.map((e) => {
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
                                onClick: u ? C(n) : void 0,
                                style: { background: (0, d.dG)(n) },
                                className: a()(j.itemContainer, { [j.disabled]: !u }),
                                children: (0, r.jsx)("div", { className: a()({ [j.itemSelected]: y(n) }) }),
                            }),
                        },
                        t,
                    );
                }),
                (0, r.jsx)(v, {
                    canManageGuild: u,
                    isDiscoverable: p,
                    profile: n,
                    onCustomBannerChange: l,
                }),
            ],
        }),
    });
}
