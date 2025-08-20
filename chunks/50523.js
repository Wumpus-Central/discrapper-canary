n.d(t, { b: () => O }), n(539854), n(953529);
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
    p = n(944486),
    h = n(768581),
    m = n(566620),
    g = n(317381),
    E = n(574952),
    b = n(374065),
    y = n(388032);
function O(e) {
    var t, n;
    let { application: O, customId: v, customLink: I, embedUrl: T, referrerId: S } = e,
        A = null == O || null == (t = O.bot) ? void 0 : t.id,
        C = (0, c.ms)({
            context: { type: "contextless" },
            applicationId: O.id,
            botUserId: null == O || null == (n = O.bot) ? void 0 : n.id,
        }),
        N = null != O && (0, l.ye)(O),
        R = null != A && N && C,
        { analyticsLocations: P } = (0, o.ZP)(a.Z.ACTIVITY_CUSTOM_LINK),
        w = (0, i.e7)([p.Z], () => p.Z.getChannelId()),
        D = (0, b.KF)(w),
        x = (0, i.e7)([g.ZP], () => {
            if (null == w) return;
            let e = g.ZP.getEmbeddedActivitiesForChannel(w).filter((e) => e.applicationId === O.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        L = (0, i.e7)([g.ZP], () => g.ZP.getCurrentEmbeddedActivity()),
        j = (0, E.Z)(),
        M = D === b.jy.CAN_LAUNCH,
        k = null != v ? v : I.customId,
        U = [];
    M &&
        U.push({
            label: null == x ? y.intl.string(y.t.RscU7O) : y.intl.string(y.t.VJlc0d),
            trackingArea: f.j_.PLAY,
            onClick() {
                (0, m.G6)({
                    channelId: null != w ? w : void 0,
                    applicationId: O.id,
                    isStart: null == x,
                    embeddedActivitiesManager: j,
                    customId: k,
                    referrerId: S,
                    analyticsLocations: P,
                });
            },
            disabledReason:
                null != x && (null == L ? void 0 : L.compositeInstanceId) === x ? y.intl.string(y.t.wJNK8P) : void 0,
        }),
        R &&
            !M &&
            U.push({
                label: y.intl.string(y.t.JeK1Wl),
                trackingArea: f.j_.PLAY,
                onClick() {
                    (0, s.W)({
                        appId: O.id,
                        botId: A,
                        analyticsLocations: P,
                        customId: k,
                        referrerId: S,
                    });
                },
            });
    let G = (0, _.G)(O);
    return (0, r.jsx)(d.W, {
        actions: U,
        onClickContent: G,
        embedUrl: T,
        header: O.name,
        iconSrc: h.ZP.getApplicationIconURL({
            id: O.id,
            icon: O.icon,
            bot: O.bot,
        }),
        info: (0, r.jsx)("div", { children: I.description }),
        staticBannerSrc: I.getAssetURL(),
        title: I.title,
        trackingConfig: {
            id: O.id,
            linkType: u.U.CUSTOM_ACTIVITY_LINK,
            referrerId: S,
            activityCustomId: k,
        },
    });
}
