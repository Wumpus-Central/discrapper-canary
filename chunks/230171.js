n.d(t, { O: () => P }), n(653041), n(571269), n(298267), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(373793),
    o = n(442837),
    l = n(481060),
    s = n(361213),
    c = n(778569),
    d = n(100527),
    u = n(906732),
    p = n(783097),
    m = n(606192),
    f = n(213459),
    h = n(812236),
    g = n(132871),
    _ = n(147890),
    b = n(706454),
    v = n(592125),
    y = n(496675),
    x = n(944486),
    O = n(914010),
    E = n(768581),
    j = n(135431),
    N = n(758199),
    C = n(981631),
    I = n(388032),
    S = n(405796);
function P(e) {
    let { app: t, embedUrl: n, activityCustomId: l, activityReferrerId: b } = e,
        { name: S, bot: P, isDiscoverable: w } = t,
        Z = null == P ? void 0 : P.id,
        k = (0, j.Eb)({
            customInstallUrl: t.customInstallUrl,
            installParams: t.installParams,
            integrationTypesConfig: t.integrationTypesConfig
        }),
        R = k && null != t.integrationTypesConfig && a.Y.GUILD_INSTALL in t.integrationTypesConfig,
        L = k && null != t.integrationTypesConfig && a.Y.USER_INSTALL in t.integrationTypesConfig,
        D = (0, o.e7)([O.Z], () => {
            var e;
            return null !== (e = O.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        M = (0, f.PL)(!0, !1),
        W = (0, f.LD)(D, !1),
        F = (0, j.TK)(t.id, M),
        U = (0, j.TK)(t.id, W),
        B = (0, p.ye)(t),
        G = E.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: P
        }),
        { url: H } = (0, c.Z)({
            applicationId: B ? t.id : void 0,
            size: 600,
            names: ['embedded_cover']
        }),
        {
            staticBannerSrc: V,
            videoBannerSrc: z,
            bannerAspectRatio: K
        } = i.useMemo(() => {
            let e, n;
            let r = N.u.BOT;
            if (null != P) {
                let { banner: t } = P;
                (e = (0, E.aN)({
                    id: P.id,
                    banner: t,
                    size: 512,
                    canAnimate: !1
                })),
                    (0, E.xR)(t) &&
                        null == H &&
                        (n = (0, E.aN)({
                            id: P.id,
                            banner: t,
                            size: 512,
                            canAnimate: !0
                        }));
            }
            if (B) {
                let i = (0, p.yJ)(t);
                null != H && ((e = H), (r = N.u.ACTIVITY));
                let a = null == i ? void 0 : i.activity_preview_video_asset_id;
                null != a && ((n = (0, s.Z)(t.id, a)), (r = N.u.ACTIVITY));
            }
            return {
                staticBannerSrc: e,
                videoBannerSrc: n,
                bannerAspectRatio: r
            };
        }, [H, P, B, t]),
        { analyticsLocations: Y } = (0, u.ZP)(d.Z.APP_MESSAGE_EMBED),
        X = (0, o.e7)(
            [v.Z, y.Z, x.Z],
            () => {
                let e = v.Z.getChannel(x.Z.getChannelId());
                return null != e && (e.isPrivate() || y.Z.can(C.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        q = (F || U || L) && X,
        Q = w || q,
        J = i.useCallback(() => {
            if (q) {
                (0, p.X)(t.id);
                return;
            }
            (0, _.dx)({
                applicationId: t.id,
                entrypoint: { name: g.n3.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
        }, [t.id, q]),
        $ = i.useCallback(() => {
            (0, j.LO)({
                applicationId: t.id,
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
                guildId: D,
                source: 'app_message_embed'
            });
        }, [t.customInstallUrl, t.id, t.installParams, t.integrationTypesConfig, D]),
        ee = (0, h.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == P ? void 0 : P.id
        }),
        et = null != Z && B && ee,
        en = i.useMemo(() => {
            let e = [];
            return (
                et &&
                    e.push({
                        label: I.NW.string(I.t.RscU7O),
                        onClick() {
                            (0, m.W)({
                                appId: t.id,
                                botId: Z,
                                analyticsLocations: Y,
                                customId: l,
                                referrerId: b
                            });
                        }
                    }),
                Q
                    ? e.push({
                          label: I.NW.string(I.t['HO/oXl']),
                          onClick: J
                      })
                    : k &&
                      e.push({
                          label: I.NW.string(I.t.NgXl3N),
                          onClick: $
                      }),
                e
            );
        }, [l, b, Y, t.id, Z, et, Q, $, J, k]);
    return (0, r.jsx)(N.W, {
        title: S,
        staticBannerSrc: V,
        videoBannerSrc: z,
        bannerAspectRatio: K,
        iconSrc: G,
        embedUrl: n,
        info: B
            ? (0, r.jsx)(A, { app: t })
            : (0, r.jsx)(T, {
                  app: t,
                  isGuildInstallable: R
              }),
        actions: en
    });
}
function T(e) {
    var t, n, a;
    let { app: s, isGuildInstallable: c } = e,
        d = (0, o.e7)([b.default], () => b.default.locale, []),
        u = i.useMemo(() => {
            var e, t;
            if (!c) return null;
            let n = new Intl.NumberFormat(d, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null !== (t = null === (e = s.directoryEntry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            return 0 === r ? null : I.NW.format(I.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = s.directoryEntry) || void 0 === t ? void 0 : t.guild_count, c, d]),
        p = null === (a = s.categories) || void 0 === a ? void 0 : null === (n = a.at(0)) || void 0 === n ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != p &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: S.description,
                    color: 'none',
                    children: p
                }),
            null != u &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    className: S.tagline,
                    color: 'none',
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(l.Jmo, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        u
                    ]
                })
        ]
    });
}
function A(e) {
    let { app: t } = e,
        n = [null != t.maxParticipants ? I.NW.format(I.t.z8EAJS, { count: t.maxParticipants }) : I.NW.string(I.t.RjceQU), ...t.tags];
    return (0, r.jsx)(r.Fragment, {
        children:
            n.length > 0 &&
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: S.description,
                color: 'none',
                lineClamp: 1,
                children: n.map((e, t) =>
                    (0, r.jsx)(
                        'span',
                        {
                            className: S.tag,
                            children: e
                        },
                        t
                    )
                )
            })
    });
}
