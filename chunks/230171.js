n.d(t, {
    O: function () {
        return j;
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
    d = n(783097),
    u = n(606192),
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
    v = n(135431),
    T = n(758199),
    S = n(981631),
    A = n(388032),
    b = n(129548);
function j(e) {
    var t;
    let { app: n, embedUrl: j, activityCustomId: R, activityReferrerId: Z } = e,
        { name: P, bot: L, isDiscoverable: y } = n,
        O = null == L ? void 0 : L.id,
        M = (0, v.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }),
        D = M && null != n.integrationTypesConfig && l.Y.GUILD_INSTALL in n.integrationTypesConfig,
        k = M && null != n.integrationTypesConfig && l.Y.USER_INSTALL in n.integrationTypesConfig,
        U = (0, a.e7)([x.Z], () => {
            var e;
            return null !== (e = x.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        B = (0, m.PL)(!0, !1),
        w = (0, m.LD)(U, !1),
        F = (0, v.TK)(n.id, B),
        G = (0, v.TK)(n.id, w),
        V = (0, d.ye)(n),
        H = r.useMemo(() => {
            var e;
            let t = null === (e = n.description) || void 0 === e ? void 0 : e.trim();
            return null == t || '' === t ? null : (0, _.parseBioReact)(t);
        }, [n.description]),
        z = (0, a.e7)([g.default], () => g.default.locale, []),
        W = r.useMemo(() => {
            var e, t;
            let i = new Intl.NumberFormat(z, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null !== (t = null === (e = n.directoryEntry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            return 0 !== r && D ? A.intl.format(A.t['6IW6Wl'], { guildCount: i.format(r) }) : null;
        }, [null === (t = n.directoryEntry) || void 0 === t ? void 0 : t.guild_count, D, z]),
        K =
            null != L
                ? (0, N.aN)({
                      id: null == L ? void 0 : L.id,
                      banner: null == L ? void 0 : L.banner,
                      size: 512,
                      canAnimate: !1
                  })
                : void 0,
        Y = N.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: L
        }),
        { analyticsLocations: X } = (0, c.ZP)(s.Z.APP_MESSAGE_EMBED),
        Q = (0, a.e7)(
            [E.Z, C.Z, I.Z],
            () => {
                let e = E.Z.getChannel(I.Z.getChannelId());
                return null != e && (e.isPrivate() || C.Z.can(S.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        q = (F || G || k) && Q,
        J = y || q,
        $ = r.useCallback(() => {
            if (q) {
                (0, d.X)(n.id);
                return;
            }
            (0, p.goToAppDirectory)({
                applicationId: n.id,
                entrypoint: { name: f.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
        }, [n.id, q]),
        ee = r.useCallback(() => {
            (0, v.LO)({
                applicationId: n.id,
                customInstallUrl: n.customInstallUrl,
                installParams: n.installParams,
                integrationTypesConfig: n.integrationTypesConfig,
                guildId: U,
                source: 'app_message_embed'
            });
        }, [n.customInstallUrl, n.id, n.installParams, n.integrationTypesConfig, U]),
        et = (0, h.ms)({
            applicationId: n.id,
            botUserId: null == L ? void 0 : L.id
        }),
        en = null != O && V && et,
        ei = r.useMemo(() => {
            let e = [];
            return (
                en &&
                    e.push({
                        label: A.intl.string(A.t.RscU7O),
                        onClick() {
                            (0, u.W)({
                                appId: n.id,
                                botId: O,
                                analyticsLocations: X,
                                customId: R,
                                referrerId: Z
                            });
                        }
                    }),
                J
                    ? e.push({
                          label: A.intl.string(A.t['HO/oXl']),
                          onClick: $
                      })
                    : M &&
                      e.push({
                          label: A.intl.string(A.t.NgXl3N),
                          onClick: ee
                      }),
                e
            );
        }, [R, Z, X, n.id, O, en, J, ee, $, M]);
    return (0, i.jsx)(T.W, {
        title: P,
        bannerSrc: K,
        iconSrc: Y,
        embedUrl: j,
        info: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    className: b.description,
                    color: 'always-white',
                    children: H
                }),
                null != W &&
                    (0, i.jsxs)(o.Text, {
                        variant: 'text-xs/normal',
                        className: b.tagline,
                        color: 'always-white',
                        children: [
                            (0, i.jsx)(o.CompassIcon, {
                                size: 'xxs',
                                color: 'currentColor'
                            }),
                            W
                        ]
                    })
            ]
        }),
        actions: ei
    });
}
