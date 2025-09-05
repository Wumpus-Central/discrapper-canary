n.d(t, { b: () => v }), n(539854), n(953529);
var r = n(951288),
    i = n(442837),
    a = n(100527),
    o = n(906732),
    s = n(915346),
    l = n(783097),
    c = n(812236),
    u = n(230171),
    d = n(758199),
    f = n(914498),
    _ = n(515344),
    p = n(592125),
    h = n(944486),
    m = n(768581),
    g = n(566620),
    E = n(317381),
    b = n(574952),
    y = n(374065),
    O = n(388032);
function v(e) {
    var t, n, v;
    let { application: I, customId: T, customLink: S, embedUrl: A, referrerId: C, message: N } = e,
        R = null == I || null == (t = I.bot) ? void 0 : t.id,
        P = (0, c.ms)({
            context: { type: "contextless" },
            applicationId: I.id,
            botUserId: null == I || null == (n = I.bot) ? void 0 : n.id,
        }),
        w = null != I && (0, l.ye)(I),
        D = null != R && w && P,
        { analyticsLocations: x } = (0, o.ZP)(a.Z.ACTIVITY_CUSTOM_LINK),
        L = (0, i.e7)([h.Z], () => h.Z.getChannelId()),
        j = (0, y.KF)(L),
        k = (0, i.e7)([E.ZP], () => {
            if (null == L) return;
            let e = E.ZP.getEmbeddedActivitiesForChannel(L).filter((e) => e.applicationId === I.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        M = (0, i.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()),
        U = (0, b.Z)(),
        G = j === y.jy.CAN_LAUNCH,
        B = null != T ? T : S.customId,
        Z = [];
    G &&
        Z.push({
            label: null == k ? O.intl.string(O.t.RscU7O) : O.intl.string(O.t.VJlc0d),
            trackingArea: f.j_.PLAY,
            onClick() {
                (0, g.G6)({
                    channelId: null != L ? L : void 0,
                    applicationId: I.id,
                    isStart: null == k,
                    embeddedActivitiesManager: U,
                    customId: B,
                    referrerId: C,
                    analyticsLocations: x,
                });
            },
            disabledReason:
                null != k && (null == M ? void 0 : M.compositeInstanceId) === k ? O.intl.string(O.t.wJNK8P) : void 0,
        }),
        D &&
            !G &&
            Z.push({
                label: O.intl.string(O.t.JeK1Wl),
                trackingArea: f.j_.PLAY,
                onClick() {
                    (0, s.W)({
                        appId: I.id,
                        botId: R,
                        analyticsLocations: x,
                        customId: B,
                        referrerId: C,
                    });
                },
            });
    let F = (0, _.G)(I);
    return (0, r.jsx)(d.W, {
        actions: Z,
        onClickContent: F,
        embedUrl: A,
        header: I.name,
        iconSrc: m.ZP.getApplicationIconURL({
            id: I.id,
            icon: I.icon,
            bot: I.bot,
        }),
        info: (0, r.jsx)("div", { children: S.description }),
        staticBannerSrc: S.getAssetURL(),
        title: S.title,
        trackingConfig: {
            id: I.id,
            linkType: u.U.CUSTOM_ACTIVITY_LINK,
            referrerId: C,
            activityCustomId: B,
            guildId: null == (v = p.Z.getChannel(N.channel_id)) ? void 0 : v.guild_id,
            channelId: N.channel_id,
            messageId: N.id,
        },
    });
}
