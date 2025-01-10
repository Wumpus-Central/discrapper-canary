n.d(t, {
    O: function () {
        return R;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(373793),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(783097),
    d = n(606192),
    m = n(213459),
    h = n(812236),
    f = n(132871),
    p = n(147890),
    _ = n(240991),
    g = n(706454),
    E = n(592125),
    C = n(496675),
    I = n(944486),
    x = n(914010),
    N = n(768581),
    v = n(585483),
    T = n(135431),
    S = n(758199),
    A = n(981631),
    b = n(388032),
    j = n(129548);
function R(e) {
    var t;
    let { app: n, embedUrl: R } = e,
        { name: Z, bot: P, is_discoverable: L } = n,
        y = null == P ? void 0 : P.id,
        O = (0, T.Eb)({
            customInstallUrl: n.custom_install_url,
            installParams: n.install_params,
            integrationTypesConfig: n.integration_types_config
        }),
        M = O && null != n.integration_types_config && l.Y.GUILD_INSTALL in n.integration_types_config,
        k = O && null != n.integration_types_config && l.Y.USER_INSTALL in n.integration_types_config,
        D = (0, a.e7)([x.Z], () => {
            var e;
            return null !== (e = x.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        B = (0, m.PL)(!0, !1),
        U = (0, m.LD)(D, !1),
        w = (0, T.TK)(n.id, B),
        F = (0, T.TK)(n.id, U),
        G = (0, u.ye)(n),
        V = r.useMemo(() => {
            let e = n.description.trim();
            return '' === e ? null : (0, _.parseBioReact)(e);
        }, [n.description]),
        H = (0, a.e7)([g.default], () => g.default.locale, []),
        z = r.useMemo(() => {
            var e, t;
            let i = new Intl.NumberFormat(H, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null !== (t = null === (e = n.directory_entry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            return 0 !== r && M ? b.intl.format(b.t['6IW6Wl'], { guildCount: i.format(r) }) : null;
        }, [null === (t = n.directory_entry) || void 0 === t ? void 0 : t.guild_count, M, H]),
        W =
            null != P
                ? (0, N.aN)({
                      id: null == P ? void 0 : P.id,
                      banner: null == P ? void 0 : P.banner,
                      size: 512,
                      canAnimate: !1
                  })
                : void 0,
        K = N.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: P
        }),
        { analyticsLocations: Y } = (0, c.ZP)(s.Z.APP_MESSAGE_EMBED),
        X = (0, a.e7)(
            [E.Z, C.Z, I.Z],
            () => {
                let e = E.Z.getChannel(I.Z.getChannelId());
                return null != e && (e.isPrivate() || C.Z.can(A.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        Q = (w || F || k) && X,
        q = L || Q,
        J = r.useCallback(() => {
            if (Q) {
                v.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id });
                return;
            }
            (0, p.goToAppDirectory)({
                applicationId: n.id,
                entrypoint: { name: f.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
        }, [n.id, Q]),
        $ = r.useCallback(() => {
            (0, T.LO)({
                applicationId: n.id,
                customInstallUrl: n.custom_install_url,
                installParams: n.install_params,
                integrationTypesConfig: n.integration_types_config,
                guildId: D,
                source: 'app_message_embed'
            });
        }, [n.custom_install_url, n.id, n.install_params, n.integration_types_config, D]),
        ee = (0, h.ms)({
            applicationId: n.id,
            botUserId: null == P ? void 0 : P.id
        }),
        et = null != y && G && ee,
        en = r.useMemo(() => {
            let e = [];
            return (
                et &&
                    e.push({
                        label: b.intl.string(b.t.RscU7O),
                        onClick() {
                            (0, d.W)(n.id, y, Y);
                        }
                    }),
                q
                    ? e.push({
                          label: b.intl.string(b.t['HO/oXl']),
                          onClick: J
                      })
                    : O &&
                      e.push({
                          label: b.intl.string(b.t.NgXl3N),
                          onClick: $
                      }),
                e
            );
        }, [Y, n.id, y, et, q, $, J, O]);
    return (0, i.jsx)(S.W, {
        title: Z,
        bannerSrc: W,
        iconSrc: K,
        embedUrl: R,
        info: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    className: j.description,
                    color: 'always-white',
                    children: V
                }),
                null != z &&
                    (0, i.jsxs)(o.Text, {
                        variant: 'text-xs/normal',
                        className: j.tagline,
                        color: 'always-white',
                        children: [
                            (0, i.jsx)(o.CompassIcon, {
                                size: 'xxs',
                                color: 'currentColor'
                            }),
                            z
                        ]
                    })
            ]
        }),
        actions: en
    });
}
