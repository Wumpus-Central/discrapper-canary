n.d(t, { A: () => v }), n(747238);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    c = n(990078),
    o = n(397927),
    d = n(649640),
    u = n(946274),
    f = n(71393),
    g = n(486020),
    b = n(835517),
    m = n(997509),
    p = n(652215),
    x = n(282435),
    h = n(985018),
    j = n(168938);
function O(e) {
    let { profile: t, canManageGuild: n, handleClick: i, hasCustomBanner: l } = e,
        a = (0, d.b2)(),
        u = (0, d.aG)({
            profile: t,
            defaultColor: a.hex(),
            forceDefaultColor: !1,
        });
    return (0, r.jsx)(c.m, {
        asContainer: !0,
        text: h.intl.string(h.t.W4Nd7Q),
        children: (0, r.jsx)(o.DUT, {
            "aria-disabled": !n,
            tabIndex: n ? 0 : -1,
            "aria-label": h.intl.string(h.t.W4Nd7Q),
            onClick: n ? i : void 0,
            style: { background: (0, d.n6)(u) },
            className: s()(j.DB, { [j.r9]: !n }),
            children: (0, r.jsx)("div", { className: s()({ [j.z2]: !l && null == t.brandColorPrimary }) }),
        }),
    });
}
function y(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: l, canManageGuild: a } = e,
        c = null != n.customBanner,
        d = i.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return g.aq.test(e)
                ? e
                : g.Ay.getGuildDiscoverySplashURL({
                      id: n.id,
                      splash: n.customBanner,
                      size: 300 * (0, b.A)(),
                  });
        }, [n]);
    if (!t) return null;
    let f =
        null != d
            ? (0, r.jsx)("img", {
                  className: j.qX,
                  src: d,
                  alt: "",
                  "aria-hidden": !0,
              })
            : (0, r.jsx)(o.kpT, { size: "md" });
    return (0, r.jsx)("div", {
        className: j.sK,
        children: (0, r.jsx)(o.vN3, {
            within: !0,
            children: (0, r.jsx)("div", {
                className: s()(j.K7, { [j.e7]: c }),
                children: (0, r.jsxs)("div", {
                    className: s()(j.vw, { [j.r9]: !a }),
                    children: [
                        f,
                        (0, r.jsx)("div", { className: j.Lw }),
                        (0, r.jsx)(o.R2l, {
                            size: "custom",
                            className: j.QY,
                            width: 20,
                            height: 20,
                            color: "white",
                        }),
                        (0, r.jsx)(u.Ay, {
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
function v(e) {
    var t;
    let { profile: n, onCustomBannerChange: l, canManageGuild: u } = e,
        g = (0, a.bG)([f.A], () => f.A.getGuild(n.id)),
        b = null != (t = null == g ? void 0 : g.features.has(p.GuildFeatures.DISCOVERABLE)) && t,
        v = n.id,
        A = i.useCallback(
            (e) => () => {
                m.A.updateGuildProfile(v, {
                    brandColorPrimary: e,
                    customBanner: null,
                });
            },
            [v],
        ),
        E = i.useCallback((e) => (!b || null == n.customBanner) && e === n.brandColorPrimary, [n, b]);
    return (0, r.jsx)(o.D0$, {
        label: h.intl.string(h.t.BSVog8),
        children: (0, r.jsxs)("div", {
            className: j.Vg,
            children: [
                (0, r.jsx)(O, {
                    profile: n,
                    canManageGuild: u,
                    handleClick: A(null),
                    hasCustomBanner: b && null != n.customBanner,
                }),
                x.aA.map((e) => {
                    let { name: t, color: n } = e;
                    return (0, r.jsx)(
                        c.m,
                        {
                            asContainer: !0,
                            __unsupportedReactNodeAsText: t,
                            children: (0, r.jsx)(o.DUT, {
                                "aria-disabled": !u,
                                tabIndex: u ? 0 : -1,
                                "aria-label": t,
                                onClick: u ? A(n) : void 0,
                                style: { background: (0, d.n6)(n) },
                                className: s()(j.DB, { [j.r9]: !u }),
                                children: (0, r.jsx)("div", { className: s()({ [j.z2]: E(n) }) }),
                            }),
                        },
                        t,
                    );
                }),
                (0, r.jsx)(y, {
                    canManageGuild: u,
                    isDiscoverable: b,
                    profile: n,
                    onCustomBannerChange: l,
                }),
            ],
        }),
    });
}
