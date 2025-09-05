n.d(t, {
    O: () => k,
    U: () => x.U,
}),
    n(539854),
    n(784620),
    n(973216),
    n(953529),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(373793),
    o = n(705512),
    s = n(442837),
    l = n(481060),
    c = n(566620),
    u = n(574952),
    d = n(100527),
    f = n(906732),
    _ = n(915346),
    p = n(783097),
    h = n(812236),
    m = n(561308),
    g = n(567409),
    E = n(706454),
    b = n(314897),
    y = n(592125),
    O = n(699516),
    v = n(914010),
    I = n(594174),
    T = n(768581),
    S = n(433534),
    A = n(506895),
    C = n(758199),
    N = n(943762),
    R = n(914498),
    P = n(172109),
    w = n(880251),
    D = n(515344),
    x = n(967249),
    L = n(388032),
    j = n(299650);
function k(e) {
    var t;
    let { app: n, embedUrl: a, linkType: o, activityCustomId: l, activityReferrerId: m, message: g, onView: E } = e,
        { name: O, bot: v } = (n = (0, P.O)(n)),
        I = null == v ? void 0 : v.id,
        S = (0, p.ye)(n),
        N = T.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: v,
        }),
        { staticBannerSrc: x, videoBannerSrc: j, bannerAspectRatio: k } = (0, w.E)(n),
        G = (0, s.e7)([b.default], () => (null != m ? m : b.default.getId()), [m]),
        { analyticsLocations: B } = (0, f.ZP)(d.Z.APP_MESSAGE_EMBED),
        { currentChannelId: Z, instanceId: F, isCurrentlyInInstance: V, canLaunchInChannel: H } = (0, A.c)(n.id),
        Y = (0, u.Z)(),
        W = (0, h.ms)({
            context: { type: "contextless" },
            applicationId: n.id,
            botUserId: null == v ? void 0 : v.id,
        }),
        K = null != I && S && W,
        z = H && S,
        q = (0, D.G)(n),
        X = (0, D.z)(n),
        Q = i.useMemo(() => {
            let e = [];
            return (
                S
                    ? (z &&
                          e.push({
                              label: null == F ? L.intl.string(L.t.RscU7O) : L.intl.string(L.t.VJlc0d),
                              trackingArea: R.j_.PLAY,
                              onClick() {
                                  (0, c.G6)({
                                      channelId: null != Z ? Z : void 0,
                                      applicationId: n.id,
                                      isStart: null == F,
                                      embeddedActivitiesManager: Y,
                                      customId: l,
                                      referrerId: G,
                                      analyticsLocations: B,
                                  });
                              },
                              disabledReason: V ? L.intl.string(L.t.wJNK8P) : void 0,
                          }),
                      !z &&
                          K &&
                          e.push({
                              label: L.intl.string(L.t.JeK1Wl),
                              trackingArea: R.j_.PLAY,
                              onClick() {
                                  (0, _.W)({
                                      appId: n.id,
                                      botId: I,
                                      analyticsLocations: B,
                                      customId: l,
                                      referrerId: G,
                                  });
                              },
                          }))
                    : null != X && e.push(X),
                e
            );
        }, [z, K, F, V, Z, n.id, Y, l, G, B, S, X, I]),
        J = S ? (0, r.jsx)(U, { app: n }) : (0, r.jsx)(M, { app: n });
    return (0, r.jsx)(C.W, {
        title: O,
        staticBannerSrc: x,
        videoBannerSrc: j,
        onClickBanner: q,
        bannerAspectRatio: k,
        iconSrc: N,
        embedUrl: a,
        info: J,
        actions: Q,
        onClickContent: q,
        trackingConfig: {
            id: n.id,
            linkType: o,
            referrerId: G,
            activityCustomId: l,
            onView: E,
            guildId: null == (t = y.Z.getChannel(g.channel_id)) ? void 0 : t.guild_id,
            channelId: g.channel_id,
            messageId: g.id,
        },
    });
}
function M(e) {
    var t, n, o;
    let { app: c } = e,
        u =
            (0, S.Eb)({
                customInstallUrl: c.customInstallUrl,
                installParams: c.installParams,
                integrationTypesConfig: c.integrationTypesConfig,
            }) &&
            null != c.integrationTypesConfig &&
            a.Y.GUILD_INSTALL in c.integrationTypesConfig,
        d = (0, s.e7)([E.default], () => E.default.locale, []),
        f = i.useMemo(() => {
            var e, t;
            if (!u) return null;
            let n = new Intl.NumberFormat(d, {
                    notation: "compact",
                    compactDisplay: "short",
                }),
                r = null != (t = null == (e = c.directoryEntry) ? void 0 : e.guild_count) ? t : 0;
            return 0 === r ? null : L.intl.format(L.t["6IW6Wl"], { guildCount: n.format(r) });
        }, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]),
        _ = null == (o = c.categories) || null == (n = o.at(0)) ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != _ &&
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: j.description,
                    color: "none",
                    children: _,
                }),
            null != f &&
                (0, r.jsxs)(l.Text, {
                    variant: "text-xs/normal",
                    className: j.tagline,
                    color: "none",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(l.Jmo, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        f,
                    ],
                }),
        ],
    });
}
function U(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: a = 0 } = t,
        c = (0, s.e7)([v.Z], () => {
            var e;
            return null != (e = v.Z.getGuildId()) ? e : void 0;
        }, []),
        u = (0, g.N)(t.id),
        d = (0, s.Wu)([I.default, O.Z], () => {
            let e = [];
            for (let [t, n] of u.entries()) {
                if (t >= 5) break;
                let r = I.default.getUser(n.author_id),
                    i = O.Z.isFriend(n.author_id);
                null != r && i && e.push(r);
            }
            return e;
        }, [u]),
        f = i.useMemo(() => {
            if (d.length > 0)
                return (0, r.jsx)(N.K, {
                    activityUsers: d,
                    guildId: c,
                    activityText: L.intl.formatToPlainString(L.t["IJa+4+"], { count: d.length }),
                });
            if (u.some((e) => (0, m.ig)(e) === o.o.GLOBAL))
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.YqE, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        L.intl.string(L.t.TsWCdX),
                    ],
                });
            let e = a > 0 ? L.intl.format(L.t.z8EAJS, { count: a }) : L.intl.string(L.t.RjceQU);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.tBG, {
                        size: "xxs",
                        color: "currentColor",
                    }),
                    e,
                ],
            });
        }, [u, d, c, a]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n.length > 0 &&
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: j.description,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) =>
                        (0, r.jsx)(
                            "span",
                            {
                                className: j.tag,
                                children: e,
                            },
                            t,
                        ),
                    ),
                }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                className: j.tagline,
                color: "none",
                lineClamp: 1,
                children: f,
            }),
        ],
    });
}
