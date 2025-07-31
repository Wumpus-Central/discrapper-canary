(n.d(t, { b: () => v }), n(539854), n(953529));
var r = n(255367),
    i = n(442837),
    l = n(100527),
    a = n(906732),
    o = n(915346),
    s = n(783097),
    c = n(812236),
    u = n(230171),
    d = n(758199),
    p = n(914498),
    m = n(515344),
    f = n(944486),
    g = n(768581),
    _ = n(566620),
    h = n(317381),
    b = n(574952),
    E = n(374065),
    C = n(388032);
function v(e) {
    var t, n;
    let { application: v, customId: O, customLink: x, embedUrl: y, referrerId: I } = e,
        j = null == v || null == (t = v.bot) ? void 0 : t.id,
        S = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: v.id,
            botUserId: null == v || null == (n = v.bot) ? void 0 : n.id
        }),
        T = null != v && (0, s.ye)(v),
        N = null != j && T && S,
        { analyticsLocations: P } = (0, a.ZP)(l.Z.ACTIVITY_CUSTOM_LINK),
        A = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        w = (0, E.KF)(A),
        Z = (0, i.e7)([h.ZP], () => {
            if (null == A) return;
            let e = h.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === v.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([h.ZP], () => h.ZP.getCurrentEmbeddedActivity()),
        D = (0, b.Z)(),
        L = w === E.jy.CAN_LAUNCH,
        M = null != O ? O : x.customId,
        k = [];
    (L &&
        k.push({
            label: null == Z ? C.intl.string(C.t.RscU7O) : C.intl.string(C.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, _.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: v.id,
                    isStart: null == Z,
                    embeddedActivitiesManager: D,
                    customId: M,
                    referrerId: I,
                    analyticsLocations: P
                });
            },
            disabledReason: null != Z && (null == R ? void 0 : R.compositeInstanceId) === Z ? C.intl.string(C.t.wJNK8P) : void 0
        }),
        N &&
            !L &&
            k.push({
                label: C.intl.string(C.t.JeK1Wl),
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: v.id,
                        botId: j,
                        analyticsLocations: P,
                        customId: M,
                        referrerId: I
                    });
                }
            }));
    let U = (0, m.G)(v);
    return (0, r.jsx)(d.W, {
        actions: k,
        onClickContent: U,
        embedUrl: y,
        header: v.name,
        iconSrc: g.ZP.getApplicationIconURL({
            id: v.id,
            icon: v.icon,
            bot: v.bot
        }),
        info: (0, r.jsx)('div', { children: x.description }),
        staticBannerSrc: x.getAssetURL(),
        title: x.title,
        trackingConfig: {
            id: v.id,
            linkType: u.U.CUSTOM_ACTIVITY_LINK,
            referrerId: I,
            activityCustomId: M
        }
    });
}
