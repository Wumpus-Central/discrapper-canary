n.d(t, {
    O: () => j,
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
    M = n(217648);
function j(e) {
    var t;
    let { app: n, linkType: a, activityCustomId: o, activityReferrerId: l, message: m, onView: g } = e,
        { name: E, bot: O } = (n = (0, P.O)(n)),
        v = null == O ? void 0 : O.id,
        I = (0, p.ye)(n),
        S = T.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: O,
        }),
        { staticBannerSrc: N, videoBannerSrc: x, bannerAspectRatio: M } = (0, w.E)(n),
        j = (0, s.e7)([b.default], () => (null != l ? l : b.default.getId()), [l]),
        { analyticsLocations: G } = (0, f.ZP)(d.Z.APP_MESSAGE_EMBED),
        { currentChannelId: B, instanceId: Z, isCurrentlyInInstance: F, canLaunchInChannel: V } = (0, A.c)(n.id),
        H = (0, u.Z)(),
        Y = (0, h.ms)({
            context: { type: "contextless" },
            applicationId: n.id,
            botUserId: null == O ? void 0 : O.id,
        }),
        W = null != v && I && Y,
        K = V && I,
        z = (0, D.G)(n),
        q = (0, D.z)(n),
        X = i.useMemo(() => {
            let e = [];
            return (
                I
                    ? (K &&
                          e.push({
                              label:
                                  null == Z
                                      ? L.intl.string(L.t.RscU7I)
                                      : F
                                        ? L.intl.string(L.t.DPfdsq)
                                        : L.intl.string(L.t.sqe0hj),
                              trackingArea: R.j_.PLAY,
                              onClick() {
                                  (0, c.G6)({
                                      channelId: null != B ? B : void 0,
                                      applicationId: n.id,
                                      isStart: null == Z,
                                      embeddedActivitiesManager: H,
                                      customId: o,
                                      referrerId: j,
                                      analyticsLocations: G,
                                  });
                              },
                              disabled: F,
                          }),
                      !K &&
                          W &&
                          e.push({
                              label: L.intl.string(L.t.JeK1Wg),
                              trackingArea: R.j_.PLAY,
                              onClick() {
                                  (0, _.W)({
                                      appId: n.id,
                                      botId: v,
                                      analyticsLocations: G,
                                      customId: o,
                                      referrerId: j,
                                  });
                              },
                          }))
                    : null != q && e.push(q),
                e
            );
        }, [K, W, Z, F, B, n.id, H, o, j, G, I, q, v]),
        Q = I ? (0, r.jsx)(U, { app: n }) : (0, r.jsx)(k, { app: n });
    return (0, r.jsx)(C.W, {
        title: E,
        staticBannerSrc: N,
        videoBannerSrc: x,
        onClickBanner: z,
        bannerAspectRatio: M,
        iconSrc: S,
        info: Q,
        actions: X,
        onClickContent: z,
        trackingConfig: {
            id: n.id,
            linkType: a,
            referrerId: j,
            activityCustomId: o,
            onView: g,
            guildId: null == (t = y.Z.getChannel(m.channel_id)) ? void 0 : t.guild_id,
            channelId: m.channel_id,
            messageId: m.id,
        },
    });
}
function k(e) {
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
            return 0 === r ? null : L.intl.format(L.t["6IW6Wi"], { guildCount: n.format(r) });
        }, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]),
        _ = null == (o = c.categories) || null == (n = o.at(0)) ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != _ &&
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: M.description,
                    color: "none",
                    children: _,
                }),
            null != f &&
                (0, r.jsxs)(l.Text, {
                    variant: "text-xs/normal",
                    className: M.tagline,
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
                    activityText: L.intl.formatToPlainString(L.t["IJa+46"], { count: d.length }),
                });
            if (u.some((e) => (0, m.ig)(e) === o.o.GLOBAL))
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
                    className: M.description,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) =>
                        (0, r.jsx)(
                            "span",
                            {
                                className: M.tag,
                                children: e,
                            },
                            t,
                        ),
                    ),
                }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                className: M.tagline,
                color: "none",
                lineClamp: 1,
                children: f,
            }),
        ],
    });
}
