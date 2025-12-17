n.d(t, { b: () => v }), n(539854), n(953529);
var r = n(54381),
    i = n(442837),
    a = n(100527),
    o = n(906732),
    s = n(915346),
    l = n(783097),
    c = n(812236),
    u = n(230171),
    d = n(758199),
    f = n(914498),
    p = n(515344),
    _ = n(592125),
    m = n(944486),
    h = n(768581),
    g = n(566620),
    E = n(317381),
    b = n(574952),
    y = n(374065),
    O = n(388032);
function v(e) {
    var t, n, v;
    let { application: S, customId: I, customLink: T, referrerId: C, message: A } = e,
        N = null == S || null == (t = S.bot) ? void 0 : t.id,
        P = (0, c.ms)({
            context: { type: "contextless" },
            applicationId: S.id,
            botUserId: null == S || null == (n = S.bot) ? void 0 : n.id,
        }),
        R = null != S && (0, l.ye)(S),
        w = null != N && R && P,
        { analyticsLocations: D } = (0, o.ZP)(a.Z.ACTIVITY_CUSTOM_LINK),
        x = (0, i.e7)([m.Z], () => m.Z.getChannelId()),
        L = (0, y.KF)(x),
        j = (0, i.e7)([E.ZP], () => {
            if (null == x) return;
            let e = E.ZP.getEmbeddedActivitiesForChannel(x).filter((e) => e.applicationId === S.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        M = (0, i.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()),
        k = (0, b.Z)(),
        U = L === y.jy.CAN_LAUNCH,
        G = null != j && (null == M ? void 0 : M.compositeInstanceId) === j,
        Z = null != I ? I : T.customId,
        F = [];
    U &&
        F.push({
            label: null == j ? O.intl.string(O.t.RscU7I) : G ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
            trackingArea: f.j_.PLAY,
            onClick() {
                (0, g.G6)({
                    channelId: null != x ? x : void 0,
                    applicationId: S.id,
                    isStart: null == j,
                    embeddedActivitiesManager: k,
                    customId: Z,
                    referrerId: C,
                    analyticsLocations: D,
                });
            },
            disabled: G,
        }),
        w &&
            !U &&
            F.push({
                label: O.intl.string(O.t.JeK1Wg),
                trackingArea: f.j_.PLAY,
                onClick() {
                    (0, s.W)({
                        appId: S.id,
                        botId: N,
                        analyticsLocations: D,
                        customId: Z,
                        referrerId: C,
                    });
                },
            });
    let B = (0, p.G)(S);
    return (0, r.jsx)(d.W, {
        actions: F,
        onClickContent: B,
        header: S.name,
        iconSrc: h.ZP.getApplicationIconURL({
            id: S.id,
            icon: S.icon,
            bot: S.bot,
        }),
        info: (0, r.jsx)("div", { children: T.description }),
        staticBannerSrc: T.getAssetURL(),
        title: T.title,
        trackingConfig: {
            id: S.id,
            linkType: u.U.CUSTOM_ACTIVITY_LINK,
            referrerId: C,
            activityCustomId: Z,
            guildId: null == (v = _.Z.getChannel(A.channel_id)) ? void 0 : v.guild_id,
            channelId: A.channel_id,
            messageId: A.id,
        },
    });
}
