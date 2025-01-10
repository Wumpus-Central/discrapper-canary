n.d(t, {
    O: function () {
        return T;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(373793),
    a = n(442837),
    o = n(481060),
    s = n(213459),
    c = n(132871),
    u = n(147890),
    d = n(240991),
    m = n(706454),
    h = n(592125),
    f = n(496675),
    p = n(944486),
    _ = n(914010),
    g = n(768581),
    E = n(585483),
    C = n(135431),
    I = n(758199),
    x = n(981631),
    N = n(388032),
    v = n(129548);
function T(e) {
    var t;
    let { app: n, embedUrl: T } = e,
        { name: S, bot: A, is_discoverable: b } = n,
        j = (0, C.Eb)({
            customInstallUrl: n.custom_install_url,
            installParams: n.install_params,
            integrationTypesConfig: n.integration_types_config
        }),
        R = j && null != n.integration_types_config && l.Y.GUILD_INSTALL in n.integration_types_config,
        Z = j && null != n.integration_types_config && l.Y.USER_INSTALL in n.integration_types_config,
        P = (0, a.e7)([_.Z], () => {
            var e;
            return null !== (e = _.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        L = (0, s.PL)(!0, !1),
        y = (0, s.LD)(P, !1),
        O = (0, C.TK)(n.id, L),
        M = (0, C.TK)(n.id, y),
        k = r.useMemo(() => {
            let e = n.description.trim();
            return '' === e ? null : (0, d.parseBioReact)(e);
        }, [n.description]),
        D = (0, a.e7)([m.default], () => m.default.locale, []),
        B = r.useMemo(() => {
            var e, t;
            let i = new Intl.NumberFormat(D, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null !== (t = null === (e = n.directory_entry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            return 0 !== r && R ? N.intl.format(N.t['6IW6Wl'], { guildCount: i.format(r) }) : null;
        }, [null === (t = n.directory_entry) || void 0 === t ? void 0 : t.guild_count, R, D]),
        U =
            null != A
                ? (0, g.aN)({
                      id: null == A ? void 0 : A.id,
                      banner: null == A ? void 0 : A.banner,
                      size: 512,
                      canAnimate: !1
                  })
                : void 0,
        w = g.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: A
        }),
        F = (0, a.e7)(
            [h.Z, f.Z, p.Z],
            () => {
                let e = h.Z.getChannel(p.Z.getChannelId());
                return null != e && (e.isPrivate() || f.Z.can(x.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        G = (O || M || Z) && F,
        V = b || G,
        H = r.useCallback(() => {
            if (G) {
                E.S.dispatchToLastSubscribed(x.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id });
                return;
            }
            (0, u.goToAppDirectory)({
                applicationId: n.id,
                entrypoint: { name: c.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
        }, [n.id, G]),
        z = r.useCallback(() => {
            (0, C.LO)({
                applicationId: n.id,
                customInstallUrl: n.custom_install_url,
                installParams: n.install_params,
                integrationTypesConfig: n.integration_types_config,
                guildId: P,
                source: 'app_message_embed'
            });
        }, [n.custom_install_url, n.id, n.install_params, n.integration_types_config, P]),
        W = r.useMemo(() => {
            let e = [];
            return (
                V
                    ? e.push({
                          label: N.intl.string(N.t['HO/oXl']),
                          onClick: H
                      })
                    : j &&
                      e.push({
                          label: N.intl.string(N.t.NgXl3N),
                          onClick: z
                      }),
                e
            );
        }, [V, z, H, j]);
    return (0, i.jsx)(I.W, {
        title: S,
        bannerSrc: U,
        iconSrc: w,
        embedUrl: T,
        info: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    className: v.description,
                    color: 'always-white',
                    children: k
                }),
                null != B &&
                    (0, i.jsxs)(o.Text, {
                        variant: 'text-xs/normal',
                        className: v.tagline,
                        color: 'always-white',
                        children: [
                            (0, i.jsx)(o.CompassIcon, {
                                size: 'xxs',
                                color: 'currentColor'
                            }),
                            B
                        ]
                    })
            ]
        }),
        actions: W
    });
}
