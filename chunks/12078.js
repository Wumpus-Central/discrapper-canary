n.d(t, { Z: () => C }), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(220250),
    u = n(813197),
    m = n(430824),
    g = n(768581),
    p = n(921948),
    f = n(434404),
    h = n(981631),
    x = n(570911),
    b = n(388032),
    j = n(453921);
function _(e) {
    let { profile: t, canManageGuild: n, handleClick: i, hasCustomBanner: l } = e,
        a = (0, d.nv)(),
        u = (0, d.qw)({
            profile: t,
            defaultColor: a.hex(),
            forceDefaultColor: !1,
        });
    return (0, r.jsx)(o.u, {
        asContainer: !0,
        text: b.intl.string(b.t.W4Nd7e),
        children: (0, r.jsx)(c.P3F, {
            "aria-disabled": !n,
            tabIndex: n ? 0 : -1,
            "aria-label": b.intl.string(b.t.W4Nd7e),
            onClick: n ? i : void 0,
            style: { background: (0, d.dG)(u) },
            className: s()(j.itemContainer, { [j.disabled]: !n }),
            children: (0, r.jsx)("div", { className: s()({ [j.itemSelected]: !l && null == t.brandColorPrimary }) }),
        }),
    });
}
function v(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: l, canManageGuild: a } = e,
        o = null != n.customBanner,
        d = i.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return g.ff.test(e)
                ? e
                : g.ZP.getGuildDiscoverySplashURL({
                      id: n.id,
                      splash: n.customBanner,
                      size: 300 * (0, p.Z)(),
                  });
        }, [n]);
    if (!t) return null;
    let m =
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
                className: s()(j.uploadItemWrapper, { [j.uploadItemSelected]: o }),
                children: (0, r.jsxs)("div", {
                    className: s()(j.uploadItem, { [j.disabled]: !a }),
                    children: [
                        m,
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
                            disabled: !a,
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
        g = (0, a.e7)([m.Z], () => m.Z.getGuild(n.id)),
        p = null != (t = null == g ? void 0 : g.features.has(h.oNc.DISCOVERABLE)) && t,
        C = n.id,
        O = i.useCallback(
            (e) => () => {
                f.Z.updateGuildProfile(C, {
                    brandColorPrimary: e,
                    customBanner: null,
                });
            },
            [C],
        ),
        y = i.useCallback((e) => (!p || null == n.customBanner) && e === n.brandColorPrimary, [n, p]);
    return (0, r.jsx)(c.hjN, {
        title: b.intl.string(b.t.BSVog4),
        children: (0, r.jsxs)("div", {
            className: j.grid,
            children: [
                (0, r.jsx)(_, {
                    profile: n,
                    canManageGuild: u,
                    handleClick: O(null),
                    hasCustomBanner: p && null != n.customBanner,
                }),
                x.cb.map((e) => {
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
                                onClick: u ? O(n) : void 0,
                                style: { background: (0, d.dG)(n) },
                                className: s()(j.itemContainer, { [j.disabled]: !u }),
                                children: (0, r.jsx)("div", { className: s()({ [j.itemSelected]: y(n) }) }),
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
