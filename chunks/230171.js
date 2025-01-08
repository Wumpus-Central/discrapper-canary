n.d(t, {
    O: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(373793),
    a = n(442837),
    o = n(481060),
    s = n(132871),
    c = n(147890),
    u = n(240991),
    d = n(706454),
    m = n(768581),
    h = n(135431),
    f = n(758199),
    p = n(388032),
    _ = n(129548);
function g(e) {
    var t;
    let { app: n, embedUrl: g } = e,
        { name: E, bot: C } = n,
        I = r.useMemo(() => {
            let e = n.description.trim();
            return '' === e ? null : (0, u.parseBioReact)(e);
        }, [n.description]),
        x = (0, a.e7)([d.default], () => d.default.locale),
        N = r.useMemo(() => {
            var e, t, i;
            let r = new Intl.NumberFormat(x, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                a = null !== (t = null === (e = n.directory_entry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            if (0 === a) return null;
            let o = (0, h.Eb)({
                customInstallUrl: n.custom_install_url,
                installParams: n.install_params,
                integrationTypesConfig: n.integration_types_config
            });
            return l.Y.GUILD_INSTALL in (null !== (i = n.integration_types_config) && void 0 !== i ? i : {}) && o ? p.intl.format(p.t['6IW6Wl'], { guildCount: r.format(a) }) : null;
        }, [n.custom_install_url, null === (t = n.directory_entry) || void 0 === t ? void 0 : t.guild_count, n.install_params, n.integration_types_config, x]),
        v =
            null != C
                ? (0, m.aN)({
                      id: null == C ? void 0 : C.id,
                      banner: null == C ? void 0 : C.banner,
                      size: 512,
                      canAnimate: !1
                  })
                : void 0,
        T = m.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: C
        });
    return (0, i.jsx)(f.W, {
        title: E,
        bannerSrc: v,
        iconSrc: T,
        embedUrl: g,
        info: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    className: _.description,
                    color: 'always-white',
                    children: I
                }),
                null != N &&
                    (0, i.jsxs)(o.Text, {
                        variant: 'text-xs/normal',
                        className: _.tagline,
                        color: 'always-white',
                        children: [
                            (0, i.jsx)(o.CompassIcon, {
                                size: 'xxs',
                                color: 'currentColor'
                            }),
                            N
                        ]
                    })
            ]
        }),
        actions: (0, i.jsx)(o.Button, {
            color: o.Button.Colors.WHITE,
            fullWidth: !0,
            onClick: () => {
                (0, c.goToAppDirectory)({
                    applicationId: n.id,
                    entrypoint: { name: s.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
                });
            },
            children: p.intl.string(p.t['HO/oXl'])
        })
    });
}
