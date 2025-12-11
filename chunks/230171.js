n.d(t, {
    O: () => M,
    U: () => x.U,
}),
    n(539854),
    n(784620),
    n(973216),
    n(953529),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(373793),
    o = n(705512),
    s = n(442837),
    l = n(481060),
    c = n(566620),
    u = n(574952),
    d = n(100527),
    f = n(906732),
    p = n(915346),
    _ = n(783097),
    m = n(812236),
    h = n(561308),
    g = n(567409),
    E = n(706454),
    b = n(314897),
    y = n(592125),
    O = n(699516),
    v = n(914010),
    S = n(594174),
    I = n(768581),
    T = n(433534),
    C = n(506895),
    A = n(758199),
    N = n(943762),
    P = n(914498),
    R = n(172109),
    w = n(880251),
    D = n(515344),
    x = n(967249),
    L = n(388032),
    j = n(44830);
function M(e) {
    var t;
    let { app: n, linkType: a, activityCustomId: o, activityReferrerId: l, message: h, onView: g } = e,
        { name: E, bot: O } = (n = (0, R.O)(n)),
        v = null == O ? void 0 : O.id,
        S = (0, _.ye)(n),
        T = I.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: O,
        }),
        { staticBannerSrc: N, videoBannerSrc: x, bannerAspectRatio: j } = (0, w.E)(n),
        M = (0, s.e7)([b.default], () => (null != l ? l : b.default.getId()), [l]),
        { analyticsLocations: G } = (0, f.ZP)(d.Z.APP_MESSAGE_EMBED),
        { currentChannelId: Z, instanceId: B, isCurrentlyInInstance: F, canLaunchInChannel: V } = (0, C.c)(n.id),
        H = (0, u.Z)(),
        Y = (0, m.ms)({
            context: { type: "contextless" },
            applicationId: n.id,
            botUserId: null == O ? void 0 : O.id,
        }),
        W = null != v && S && Y,
        K = V && S,
        z = (0, D.G)(n),
        q = (0, D.z)(n),
        Q = i.useMemo(() => {
            let e = [];
            return (
                S
                    ? (K &&
                          e.push({
                              label:
                                  null == B
                                      ? L.intl.string(L.t.RscU7I)
                                      : F
                                        ? L.intl.string(L.t.DPfdsq)
                                        : L.intl.string(L.t.sqe0hj),
                              trackingArea: P.j_.PLAY,
                              onClick() {
                                  (0, c.G6)({
                                      channelId: null != Z ? Z : void 0,
                                      applicationId: n.id,
                                      isStart: null == B,
                                      embeddedActivitiesManager: H,
                                      customId: o,
                                      referrerId: M,
                                      analyticsLocations: G,
                                  });
                              },
                              disabled: F,
                          }),
                      !K &&
                          W &&
                          e.push({
                              label: L.intl.string(L.t.JeK1Wg),
                              trackingArea: P.j_.PLAY,
                              onClick() {
                                  (0, p.W)({
                                      appId: n.id,
                                      botId: v,
                                      analyticsLocations: G,
                                      customId: o,
                                      referrerId: M,
                                  });
                              },
                          }))
                    : null != q && e.push(q),
                e
            );
        }, [K, W, B, F, Z, n.id, H, o, M, G, S, q, v]),
        X = S ? (0, r.jsx)(U, { app: n }) : (0, r.jsx)(k, { app: n });
    return (0, r.jsx)(A.W, {
        title: E,
        staticBannerSrc: N,
        videoBannerSrc: x,
        onClickBanner: z,
        bannerAspectRatio: j,
        iconSrc: T,
        info: X,
        actions: Q,
        onClickContent: z,
        trackingConfig: {
            id: n.id,
            linkType: a,
            referrerId: M,
            activityCustomId: o,
            onView: g,
            guildId: null == (t = y.Z.getChannel(h.channel_id)) ? void 0 : t.guild_id,
            channelId: h.channel_id,
            messageId: h.id,
        },
    });
}
function k(e) {
    var t, n, o;
    let { app: c } = e,
        u =
            (0, T.Eb)({
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
            return 0 === r ? null : L.intl.format(L.t["6IW6Wi"], { guildCount: n.format(r) });
        }, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]),
        p = null == (o = c.categories) || null == (n = o.at(0)) ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != p &&
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: j.description,
                    color: "none",
                    children: p,
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
        d = (0, s.Wu)([S.default, O.Z], () => {
            let e = [];
            for (let [t, n] of u.entries()) {
                if (t >= 5) break;
                let r = S.default.getUser(n.author_id),
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
                    activityText: L.intl.formatToPlainString(L.t["IJa+46"], { count: d.length }),
                });
            if (u.some((e) => (0, h.ig)(e) === o.o.GLOBAL))
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.YqE, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        L.intl.string(L.t.TsWCdW),
                    ],
                });
            let e = a > 0 ? L.intl.format(L.t.z8EAJW, { count: a }) : L.intl.string(L.t.RjceQU);
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
