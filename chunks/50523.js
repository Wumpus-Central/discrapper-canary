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
    let { application: I, customId: T, customLink: S, referrerId: A, message: C } = e,
        N = null == I || null == (t = I.bot) ? void 0 : t.id,
        R = (0, c.ms)({
            context: { type: "contextless" },
            applicationId: I.id,
            botUserId: null == I || null == (n = I.bot) ? void 0 : n.id,
        }),
        P = null != I && (0, l.ye)(I),
        D = null != N && P && R,
        { analyticsLocations: w } = (0, o.ZP)(a.Z.ACTIVITY_CUSTOM_LINK),
        x = (0, i.e7)([h.Z], () => h.Z.getChannelId()),
        L = (0, y.KF)(x),
        M = (0, i.e7)([E.ZP], () => {
            if (null == x) return;
            let e = E.ZP.getEmbeddedActivitiesForChannel(x).filter((e) => e.applicationId === I.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        j = (0, i.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()),
        k = (0, b.Z)(),
        U = L === y.jy.CAN_LAUNCH,
        G = null != M && (null == j ? void 0 : j.compositeInstanceId) === M,
        B = null != T ? T : S.customId,
        Z = [];
    U &&
        Z.push({
            label: null == M ? O.intl.string(O.t.RscU7I) : G ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
            trackingArea: f.j_.PLAY,
            onClick() {
                (0, g.G6)({
                    channelId: null != x ? x : void 0,
                    applicationId: I.id,
                    isStart: null == M,
                    embeddedActivitiesManager: k,
                    customId: B,
                    referrerId: A,
                    analyticsLocations: w,
                });
            },
            disabled: G,
        }),
        D &&
            !U &&
            Z.push({
                label: O.intl.string(O.t.JeK1Wg),
                trackingArea: f.j_.PLAY,
                onClick() {
                    (0, s.W)({
                        appId: I.id,
                        botId: N,
                        analyticsLocations: w,
                        customId: B,
                        referrerId: A,
                    });
                },
            });
    let F = (0, _.G)(I);
    return (0, r.jsx)(d.W, {
        actions: Z,
        onClickContent: F,
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
            referrerId: A,
            activityCustomId: B,
            guildId: null == (v = p.Z.getChannel(C.channel_id)) ? void 0 : v.guild_id,
            channelId: C.channel_id,
            messageId: C.id,
        },
    });
}
