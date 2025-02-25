n.d(t, {
    O: () => T,
    U: () => C.Un
}),
    n(653041),
    n(571269),
    n(298267),
    n(266796),
    n(47120);
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
    C = n(914498),
    I = n(981631),
    S = n(388032),
    P = n(405796);
function T(e) {
    let { app: t, embedUrl: n, linkType: l, activityCustomId: b, activityReferrerId: P } = e,
        { name: T, bot: Z, isDiscoverable: k } = t,
        R = null == Z ? void 0 : Z.id,
        L = (0, j.Eb)({
            customInstallUrl: t.customInstallUrl,
            installParams: t.installParams,
            integrationTypesConfig: t.integrationTypesConfig
        }),
        D = L && null != t.integrationTypesConfig && a.Y.GUILD_INSTALL in t.integrationTypesConfig,
        M = L && null != t.integrationTypesConfig && a.Y.USER_INSTALL in t.integrationTypesConfig,
        W = (0, o.e7)([O.Z], () => {
            var e;
            return null !== (e = O.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        F = (0, f.PL)(!0, !1),
        U = (0, f.LD)(W, !1),
        B = (0, j.TK)(t.id, F),
        G = (0, j.TK)(t.id, U),
        H = (0, p.ye)(t),
        V = E.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: Z
        }),
        { url: z } = (0, c.Z)({
            applicationId: H ? t.id : void 0,
            size: 600,
            names: ['embedded_cover']
        }),
        {
            staticBannerSrc: K,
            videoBannerSrc: Y,
            bannerAspectRatio: X
        } = i.useMemo(() => {
            let e, n;
            let r = N.u.BOT;
            if (null != Z) {
                let { banner: t } = Z;
                (e = (0, E.aN)({
                    id: Z.id,
                    banner: t,
                    size: 512,
                    canAnimate: !1
                })),
                    (0, E.xR)(t) &&
                        null == z &&
                        (n = (0, E.aN)({
                            id: Z.id,
                            banner: t,
                            size: 512,
                            canAnimate: !0
                        }));
            }
            if (H) {
                let i = (0, p.yJ)(t);
                null != z && ((e = z), (r = N.u.ACTIVITY));
                let a = null == i ? void 0 : i.activity_preview_video_asset_id;
                null != a && ((n = (0, s.Z)(t.id, a)), (r = N.u.ACTIVITY));
            }
            return {
                staticBannerSrc: e,
                videoBannerSrc: n,
                bannerAspectRatio: r
            };
        }, [z, Z, H, t]),
        { analyticsLocations: q } = (0, u.ZP)(d.Z.APP_MESSAGE_EMBED),
        Q = i.useCallback(
            (e) => {
                (0, C.KX)(t.id, l, e, P, b);
            },
            [b, P, t.id, l]
        ),
        J = i.useCallback(() => {
            (0, C.GF)(t.id, l, P, b);
        }, [b, P, t.id, l]),
        $ = i.useCallback(() => {
            (0, C.Yu)(t.id, l);
        }, [t.id, l]),
        ee = (0, o.e7)(
            [v.Z, y.Z, x.Z],
            () => {
                let e = v.Z.getChannel(x.Z.getChannelId());
                return null != e && (e.isPrivate() || y.Z.can(I.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        et = (B || G || M) && ee,
        en = k || et,
        er = i.useCallback(() => {
            if ((Q(C.j_.VIEW), et)) {
                (0, p.X)(t.id);
                return;
            }
            (0, _.dx)({
                applicationId: t.id,
                entrypoint: { name: g.n3.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
        }, [t.id, et, Q]),
        ei = i.useCallback(() => {
            (0, j.LO)({
                applicationId: t.id,
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
                guildId: W,
                source: 'app_message_embed'
            }),
                Q(C.j_.ADD_APP);
        }, [t.customInstallUrl, t.id, t.installParams, t.integrationTypesConfig, W, Q]),
        ea = (0, h.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == Z ? void 0 : Z.id
        }),
        eo = null != R && H && ea,
        el = i.useMemo(() => {
            let e = [];
            return (
                eo &&
                    e.push({
                        label: S.NW.string(S.t.RscU7O),
                        onClick() {
                            (0, m.W)({
                                appId: t.id,
                                botId: R,
                                analyticsLocations: q,
                                customId: b,
                                referrerId: P
                            }),
                                Q(C.j_.PLAY);
                        }
                    }),
                en
                    ? e.push({
                          label: S.NW.string(S.t['HO/oXl']),
                          onClick: er
                      })
                    : L &&
                      e.push({
                          label: S.NW.string(S.t.NgXl3N),
                          onClick: ei
                      }),
                e
            );
        }, [b, P, q, t.id, R, eo, en, ei, er, L, Q]);
    return (0, r.jsx)(N.W, {
        title: T,
        staticBannerSrc: K,
        videoBannerSrc: Y,
        bannerAspectRatio: X,
        iconSrc: V,
        embedUrl: n,
        info: H
            ? (0, r.jsx)(w, { app: t })
            : (0, r.jsx)(A, {
                  app: t,
                  isGuildInstallable: D
              }),
        actions: el,
        onView: J,
        onLinkCopied: $
    });
}
function A(e) {
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
            return 0 === r ? null : S.NW.format(S.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = s.directoryEntry) || void 0 === t ? void 0 : t.guild_count, c, d]),
        p = null === (a = s.categories) || void 0 === a ? void 0 : null === (n = a.at(0)) || void 0 === n ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != p &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: P.description,
                    color: 'none',
                    children: p
                }),
            null != u &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    className: P.tagline,
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
function w(e) {
    let { app: t } = e,
        n = [null != t.maxParticipants ? S.NW.format(S.t.z8EAJS, { count: t.maxParticipants }) : S.NW.string(S.t.RjceQU), ...t.tags];
    return (0, r.jsx)(r.Fragment, {
        children:
            n.length > 0 &&
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: P.description,
                color: 'none',
                lineClamp: 1,
                children: n.map((e, t) =>
                    (0, r.jsx)(
                        'span',
                        {
                            className: P.tag,
                            children: e
                        },
                        t
                    )
                )
            })
    });
}
