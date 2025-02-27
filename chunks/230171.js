n.d(t, {
    O: () => k,
    U: () => T.Un
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
    E = n(81063),
    j = n(768581),
    N = n(135431),
    C = n(850240),
    I = n(374211),
    S = n(758199),
    T = n(914498),
    P = n(172109),
    A = n(981631),
    w = n(388032),
    Z = n(405796);
function k(e) {
    let { app: t, embedUrl: n, linkId: l, linkType: b, activityCustomId: Z, activityReferrerId: k } = e,
        { name: D, bot: M, isDiscoverable: W } = (t = (0, P.O)(t)),
        F = null == M ? void 0 : M.id,
        U = (0, N.Eb)({
            customInstallUrl: t.customInstallUrl,
            installParams: t.installParams,
            integrationTypesConfig: t.integrationTypesConfig
        }),
        B = U && null != t.integrationTypesConfig && a.Y.GUILD_INSTALL in t.integrationTypesConfig,
        G = U && null != t.integrationTypesConfig && a.Y.USER_INSTALL in t.integrationTypesConfig,
        H = (0, o.e7)([O.Z], () => {
            var e;
            return null !== (e = O.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        V = (0, f.PL)(!0, !1),
        z = (0, f.LD)(H, !1),
        K = (0, N.TK)(t.id, V),
        Y = (0, N.TK)(t.id, z),
        X = (0, p.ye)(t),
        q = j.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: M
        }),
        { url: Q } = (0, c.Z)({
            applicationId: X ? t.id : void 0,
            size: 600,
            names: ['embedded_cover']
        }),
        {
            staticBannerSrc: J,
            videoBannerSrc: $,
            bannerAspectRatio: ee
        } = i.useMemo(() => {
            let e, n;
            let r = S.u.BOT;
            if (null != M) {
                let { banner: t } = M;
                (e = (0, j.aN)({
                    id: M.id,
                    banner: t,
                    size: 512,
                    canAnimate: !1
                })),
                    (0, j.xR)(t) &&
                        null == Q &&
                        (n = (0, j.aN)({
                            id: M.id,
                            banner: t,
                            size: 512,
                            canAnimate: !0
                        }));
            }
            if (X) {
                let i = (0, p.yJ)(t);
                null != Q && ((e = Q), (r = S.u.ACTIVITY));
                let a = null == i ? void 0 : i.activity_preview_video_asset_id;
                null != a && ((n = (0, s.Z)(t.id, a)), (r = S.u.ACTIVITY));
            }
            return {
                staticBannerSrc: e,
                videoBannerSrc: n,
                bannerAspectRatio: r
            };
        }, [Q, M, X, t]),
        { analyticsLocations: et } = (0, u.ZP)(d.Z.APP_MESSAGE_EMBED),
        en = i.useCallback(
            (e) => {
                (0, T.KX)(t.id, b, e, k, Z);
            },
            [Z, k, t.id, b]
        ),
        er = i.useCallback(() => {
            (0, T.GF)(t.id, b, k, Z);
        }, [Z, k, t.id, b]),
        ei = i.useCallback(() => {
            (0, T.Yu)(t.id, b);
        }, [t.id, b]),
        ea = (0, o.e7)(
            [v.Z, y.Z, x.Z],
            () => {
                let e = v.Z.getChannel(x.Z.getChannelId());
                return null != e && (e.isPrivate() || y.Z.can(A.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        eo = (K || Y || G) && ea,
        el = W || eo,
        es = i.useCallback(() => {
            if ((en(T.j_.VIEW), eo)) {
                (0, p.X)(t.id);
                return;
            }
            (0, _.dx)({
                applicationId: t.id,
                entrypoint: { name: g.n3.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
        }, [t.id, eo, en]),
        ec = i.useCallback(() => {
            (0, N.LO)({
                applicationId: t.id,
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
                guildId: H,
                source: 'app_message_embed'
            }),
                en(T.j_.ADD_APP);
        }, [t.customInstallUrl, t.id, t.installParams, t.integrationTypesConfig, H, en]),
        ed = (0, h.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == M ? void 0 : M.id
        }),
        eu = null != F && X && ed,
        ep = (0, C._)(l),
        { data: em, error: ef } = (0, I.h)(t.id, ep),
        eh = i.useMemo(() => {
            let e = [];
            if (eu) {
                let n = (null == em ? void 0 : em.primary_cta) != null ? em.primary_cta : w.NW.string(w.t.RscU7O),
                    r = null != Z ? Z : null == em ? void 0 : em.custom_id,
                    i = null != k ? k : null == em ? void 0 : em.referrer_id;
                e.push({
                    label: n,
                    onClick() {
                        (0, m.W)({
                            appId: t.id,
                            botId: F,
                            analyticsLocations: et,
                            customId: r,
                            referrerId: i
                        }),
                            en(T.j_.PLAY);
                    }
                });
            }
            return (
                el
                    ? e.push({
                          label: w.NW.string(w.t['HO/oXl']),
                          onClick: es
                      })
                    : U &&
                      e.push({
                          label: w.NW.string(w.t.NgXl3N),
                          onClick: ec
                      }),
                e
            );
        }, [Z, k, et, t.id, F, eu, el, null == em ? void 0 : em.custom_id, null == em ? void 0 : em.primary_cta, null == em ? void 0 : em.referrer_id, ec, es, U, en]);
    return null != l && null == ef
        ? null == em
            ? null
            : (0, r.jsx)(S.W, {
                  header: em.title,
                  title: D,
                  staticBannerSrc: (0, E.getAssetImage)(t.id, em.asset_id, 512),
                  iconSrc: q,
                  embedUrl: n,
                  info: X
                      ? (0, r.jsx)(L, { app: t })
                      : (0, r.jsx)(R, {
                            app: t,
                            isGuildInstallable: B
                        }),
                  actions: eh
              })
        : (0, r.jsx)(S.W, {
              title: D,
              staticBannerSrc: J,
              videoBannerSrc: $,
              bannerAspectRatio: ee,
              iconSrc: q,
              embedUrl: n,
              info: X
                  ? (0, r.jsx)(L, { app: t })
                  : (0, r.jsx)(R, {
                        app: t,
                        isGuildInstallable: B
                    }),
              actions: eh,
              onView: er,
              onLinkCopied: ei
          });
}
function R(e) {
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
            return 0 === r ? null : w.NW.format(w.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = s.directoryEntry) || void 0 === t ? void 0 : t.guild_count, c, d]),
        p = null === (a = s.categories) || void 0 === a ? void 0 : null === (n = a.at(0)) || void 0 === n ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != p &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: Z.description,
                    color: 'none',
                    children: p
                }),
            null != u &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    className: Z.tagline,
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
function L(e) {
    let { app: t } = e,
        n = [null != t.maxParticipants ? w.NW.format(w.t.z8EAJS, { count: t.maxParticipants }) : w.NW.string(w.t.RjceQU), ...t.tags];
    return (0, r.jsx)(r.Fragment, {
        children:
            n.length > 0 &&
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: Z.description,
                color: 'none',
                lineClamp: 1,
                children: n.map((e, t) =>
                    (0, r.jsx)(
                        'span',
                        {
                            className: Z.tag,
                            children: e
                        },
                        t
                    )
                )
            })
    });
}
