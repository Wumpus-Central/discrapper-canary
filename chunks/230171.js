n.d(t, { O: () => Z }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(373793),
    r = n(442837),
    s = n(481060),
    o = n(361213),
    c = n(778569),
    d = n(100527),
    u = n(906732),
    m = n(783097),
    _ = n(606192),
    h = n(213459),
    p = n(812236),
    g = n(132871),
    f = n(147890),
    x = n(240991),
    C = n(706454),
    E = n(592125),
    v = n(496675),
    I = n(944486),
    N = n(914010),
    S = n(768581),
    T = n(135431),
    b = n(758199),
    A = n(981631),
    j = n(388032),
    y = n(708485);
function Z(e) {
    var t;
    let { app: n, embedUrl: Z, activityCustomId: R, activityReferrerId: L } = e,
        { name: P, bot: k, isDiscoverable: M } = n,
        O = null == k ? void 0 : k.id,
        D = (0, T.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }),
        w = D && null != n.integrationTypesConfig && a.Y.GUILD_INSTALL in n.integrationTypesConfig,
        F = D && null != n.integrationTypesConfig && a.Y.USER_INSTALL in n.integrationTypesConfig,
        U = (0, r.e7)([N.Z], () => {
            var e;
            return null !== (e = N.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        B = (0, h.PL)(!0, !1),
        G = (0, h.LD)(U, !1),
        H = (0, T.TK)(n.id, B),
        V = (0, T.TK)(n.id, G),
        z = (0, m.ye)(n),
        W = l.useMemo(() => {
            var e;
            let t = null === (e = n.description) || void 0 === e ? void 0 : e.trim();
            return null == t || '' === t ? null : (0, x.parseBioReact)(t);
        }, [n.description]),
        K = (0, r.e7)([C.default], () => C.default.locale, []),
        Y = l.useMemo(() => {
            var e, t;
            let i = new Intl.NumberFormat(K, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                l = null !== (t = null === (e = n.directoryEntry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            return 0 !== l && w ? j.intl.format(j.t['6IW6Wl'], { guildCount: i.format(l) }) : null;
        }, [null === (t = n.directoryEntry) || void 0 === t ? void 0 : t.guild_count, w, K]),
        X = S.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: k
        }),
        { url: q } = (0, c.Z)({
            applicationId: z ? n.id : void 0,
            size: 600,
            names: ['embedded_cover']
        }),
        {
            staticBannerSrc: Q,
            videoBannerSrc: J,
            bannerAspectRatio: $
        } = l.useMemo(() => {
            let e, t;
            let i = b.u.BOT;
            if (null != k) {
                let { banner: n } = k;
                (e = (0, S.aN)({
                    id: k.id,
                    banner: n,
                    size: 512,
                    canAnimate: !1
                })),
                    (0, S.xR)(n) &&
                        null == q &&
                        (t = (0, S.aN)({
                            id: k.id,
                            banner: n,
                            size: 512,
                            canAnimate: !0
                        }));
            }
            if (z) {
                let l = (0, m.yJ)(n);
                null != q && ((e = q), (i = b.u.ACTIVITY));
                let a = null == l ? void 0 : l.activity_preview_video_asset_id;
                null != a && ((t = (0, o.Z)(n.id, a)), (i = b.u.ACTIVITY));
            }
            return {
                staticBannerSrc: e,
                videoBannerSrc: t,
                bannerAspectRatio: i
            };
        }, [q, k, z, n]),
        { analyticsLocations: ee } = (0, u.ZP)(d.Z.APP_MESSAGE_EMBED),
        et = (0, r.e7)(
            [E.Z, v.Z, I.Z],
            () => {
                let e = E.Z.getChannel(I.Z.getChannelId());
                return null != e && (e.isPrivate() || v.Z.can(A.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        en = (H || V || F) && et,
        ei = M || en,
        el = l.useCallback(() => {
            if (en) {
                (0, m.X)(n.id);
                return;
            }
            (0, f.dx)({
                applicationId: n.id,
                entrypoint: { name: g.n3.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
        }, [n.id, en]),
        ea = l.useCallback(() => {
            (0, T.LO)({
                applicationId: n.id,
                customInstallUrl: n.customInstallUrl,
                installParams: n.installParams,
                integrationTypesConfig: n.integrationTypesConfig,
                guildId: U,
                source: 'app_message_embed'
            });
        }, [n.customInstallUrl, n.id, n.installParams, n.integrationTypesConfig, U]),
        er = (0, p.ms)({
            context: { type: 'contextless' },
            applicationId: n.id,
            botUserId: null == k ? void 0 : k.id
        }),
        es = null != O && z && er,
        eo = l.useMemo(() => {
            let e = [];
            return (
                es &&
                    e.push({
                        label: j.intl.string(j.t.RscU7O),
                        onClick() {
                            (0, _.W)({
                                appId: n.id,
                                botId: O,
                                analyticsLocations: ee,
                                customId: R,
                                referrerId: L
                            });
                        }
                    }),
                ei
                    ? e.push({
                          label: j.intl.string(j.t['HO/oXl']),
                          onClick: el
                      })
                    : D &&
                      e.push({
                          label: j.intl.string(j.t.NgXl3N),
                          onClick: ea
                      }),
                e
            );
        }, [R, L, ee, n.id, O, es, ei, ea, el, D]);
    return (0, i.jsx)(b.W, {
        title: P,
        staticBannerSrc: Q,
        videoBannerSrc: J,
        bannerAspectRatio: $,
        iconSrc: X,
        embedUrl: Z,
        info: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    className: y.description,
                    color: 'none',
                    lineClamp: null != Y ? 1 : 2,
                    children: W
                }),
                null != Y &&
                    (0, i.jsxs)(s.Text, {
                        variant: 'text-xs/normal',
                        className: y.tagline,
                        color: 'none',
                        lineClamp: 1,
                        children: [
                            (0, i.jsx)(s.Jmo, {
                                size: 'xxs',
                                color: 'currentColor'
                            }),
                            Y
                        ]
                    })
            ]
        }),
        actions: eo
    });
}
