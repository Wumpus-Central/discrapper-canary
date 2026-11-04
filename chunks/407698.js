var i = n(477900),
    s = n(582128),
    l = n(866665),
    r = n(683063),
    a = n(426983),
    o = n(176128),
    c = n(454938),
    u = n(714991),
    d = n(554783),
    m = n(652215);
n.d(
    t,
    {},
    {
        Q: function (e) {
            let t,
                { guild: n, children: f, subtitle: E } = e,
                I = (0, c.A)(n),
                g = s.useMemo(() => {
                    if (I) {
                        let e = (0, o.Jp)(n);
                        return (0, a.K)(e) !== a._.NONE;
                    }
                    return (
                        n.features.has(m.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ||
                        n.features.has(m.GuildFeatures.HUB) ||
                        n.features.has(m.GuildFeatures.VERIFIED) ||
                        n.features.has(m.GuildFeatures.PARTNERED)
                    );
                }, [n, I]);
            return g || null != E
                ? (g && I
                      ? (t = (0, i.jsx)(d.A, { disableBoostClick: !0, guild: n, size: 20 }))
                      : g && (t = (0, i.jsx)(u.A, { guild: n, size: 20 })),
                  (0, i.jsx)(r.u, {
                      asset: t,
                      assetSize: 20,
                      position: "right",
                      align: "center",
                      title: null != E ? n.name : void 0,
                      body: E ?? n.name,
                      children: f,
                  }))
                : (0, i.jsx)(l.m, { position: "right", align: "center", text: n.name, children: f });
        },
    },
);
