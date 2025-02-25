n.d(t, {
    O: () => A,
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
    I = n(172109),
    S = n(981631),
    P = n(388032),
    T = n(405796);
function A(e) {
    let { app: t, embedUrl: n, linkType: l, activityCustomId: b, activityReferrerId: T } = e,
        { name: A, bot: k, isDiscoverable: R } = (t = (0, I.O)(t)),
        L = null == k ? void 0 : k.id,
        D = (0, j.Eb)({
            customInstallUrl: t.customInstallUrl,
            installParams: t.installParams,
            integrationTypesConfig: t.integrationTypesConfig
        }),
        M = D && null != t.integrationTypesConfig && a.Y.GUILD_INSTALL in t.integrationTypesConfig,
        W = D && null != t.integrationTypesConfig && a.Y.USER_INSTALL in t.integrationTypesConfig,
        F = (0, o.e7)([O.Z], () => {
            var e;
            return null !== (e = O.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        U = (0, f.PL)(!0, !1),
        B = (0, f.LD)(F, !1),
        G = (0, j.TK)(t.id, U),
        H = (0, j.TK)(t.id, B),
        V = (0, p.ye)(t),
        z = E.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: k
        }),
        { url: K } = (0, c.Z)({
            applicationId: V ? t.id : void 0,
            size: 600,
            names: ['embedded_cover']
        }),
        {
            staticBannerSrc: Y,
            videoBannerSrc: X,
            bannerAspectRatio: q
        } = i.useMemo(() => {
            let e, n;
            let r = N.u.BOT;
            if (null != k) {
                let { banner: t } = k;
                (e = (0, E.aN)({
                    id: k.id,
                    banner: t,
                    size: 512,
                    canAnimate: !1
                })),
                    (0, E.xR)(t) &&
                        null == K &&
                        (n = (0, E.aN)({
                            id: k.id,
                            banner: t,
                            size: 512,
                            canAnimate: !0
                        }));
            }
            if (V) {
                let i = (0, p.yJ)(t);
                null != K && ((e = K), (r = N.u.ACTIVITY));
                let a = null == i ? void 0 : i.activity_preview_video_asset_id;
                null != a && ((n = (0, s.Z)(t.id, a)), (r = N.u.ACTIVITY));
            }
            return {
                staticBannerSrc: e,
                videoBannerSrc: n,
                bannerAspectRatio: r
            };
        }, [K, k, V, t]),
        { analyticsLocations: Q } = (0, u.ZP)(d.Z.APP_MESSAGE_EMBED),
        J = i.useCallback(
            (e) => {
                (0, C.KX)(t.id, l, e, T, b);
            },
            [b, T, t.id, l]
        ),
        $ = i.useCallback(() => {
            (0, C.GF)(t.id, l, T, b);
        }, [b, T, t.id, l]),
        ee = i.useCallback(() => {
            (0, C.Yu)(t.id, l);
        }, [t.id, l]),
        et = (0, o.e7)(
            [v.Z, y.Z, x.Z],
            () => {
                let e = v.Z.getChannel(x.Z.getChannelId());
                return null != e && (e.isPrivate() || y.Z.can(S.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        en = (G || H || W) && et,
        er = R || en,
        ei = i.useCallback(() => {
            if ((J(C.j_.VIEW), en)) {
                (0, p.X)(t.id);
                return;
            }
            (0, _.dx)({
                applicationId: t.id,
                entrypoint: { name: g.n3.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
        }, [t.id, en, J]),
        ea = i.useCallback(() => {
            (0, j.LO)({
                applicationId: t.id,
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
                guildId: F,
                source: 'app_message_embed'
            }),
                J(C.j_.ADD_APP);
        }, [t.customInstallUrl, t.id, t.installParams, t.integrationTypesConfig, F, J]),
        eo = (0, h.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == k ? void 0 : k.id
        }),
        el = null != L && V && eo,
        es = i.useMemo(() => {
            let e = [];
            return (
                el &&
                    e.push({
                        label: P.NW.string(P.t.RscU7O),
                        onClick() {
                            (0, m.W)({
                                appId: t.id,
                                botId: L,
                                analyticsLocations: Q,
                                customId: b,
                                referrerId: T
                            }),
                                J(C.j_.PLAY);
                        }
                    }),
                er
                    ? e.push({
                          label: P.NW.string(P.t['HO/oXl']),
                          onClick: ei
                      })
                    : D &&
                      e.push({
                          label: P.NW.string(P.t.NgXl3N),
                          onClick: ea
                      }),
                e
            );
        }, [b, T, Q, t.id, L, el, er, ea, ei, D, J]);
    return (0, r.jsx)(N.W, {
        title: A,
        staticBannerSrc: Y,
        videoBannerSrc: X,
        bannerAspectRatio: q,
        iconSrc: z,
        embedUrl: n,
        info: V
            ? (0, r.jsx)(Z, { app: t })
            : (0, r.jsx)(w, {
                  app: t,
                  isGuildInstallable: M
              }),
        actions: es,
        onView: $,
        onLinkCopied: ee
    });
}
function w(e) {
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
            return 0 === r ? null : P.NW.format(P.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = s.directoryEntry) || void 0 === t ? void 0 : t.guild_count, c, d]),
        p = null === (a = s.categories) || void 0 === a ? void 0 : null === (n = a.at(0)) || void 0 === n ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != p &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: T.description,
                    color: 'none',
                    children: p
                }),
            null != u &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    className: T.tagline,
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
function Z(e) {
    let { app: t } = e,
        n = [null != t.maxParticipants ? P.NW.format(P.t.z8EAJS, { count: t.maxParticipants }) : P.NW.string(P.t.RjceQU), ...t.tags];
    return (0, r.jsx)(r.Fragment, {
        children:
            n.length > 0 &&
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: T.description,
                color: 'none',
                lineClamp: 1,
                children: n.map((e, t) =>
                    (0, r.jsx)(
                        'span',
                        {
                            className: T.tag,
                            children: e
                        },
                        t
                    )
                )
            })
    });
}
