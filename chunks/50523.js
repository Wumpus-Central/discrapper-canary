(n.d(t, { b: () => O }), n(539854), n(953529));
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
    _ = n(768581),
    g = n(566620),
    h = n(317381),
    b = n(574952),
    E = n(374065),
    C = n(388032);
function O(e) {
    var t, n;
    let { application: O, customId: v, customLink: y, embedUrl: x, referrerId: I } = e,
        j = null == O || null == (t = O.bot) ? void 0 : t.id,
        S = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: O.id,
            botUserId: null == O || null == (n = O.bot) ? void 0 : n.id
        }),
        T = null != O && (0, s.ye)(O),
        N = null != j && T && S,
        { analyticsLocations: P } = (0, a.ZP)(l.Z.ACTIVITY_CUSTOM_LINK),
        A = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        w = (0, E.KF)(A),
        Z = (0, i.e7)([h.ZP], () => {
            if (null == A) return;
            let e = h.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === O.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([h.ZP], () => h.ZP.getCurrentEmbeddedActivity()),
        D = (0, b.Z)(),
        L = w === E.jy.CAN_LAUNCH,
        M = null != v ? v : y.customId,
        k = [];
    (L &&
        k.push({
            label: null == Z ? C.intl.string(C.t.RscU7O) : C.intl.string(C.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, g.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: O.id,
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
                        appId: O.id,
                        botId: j,
                        analyticsLocations: P,
                        customId: M,
                        referrerId: I
                    });
                }
            }));
    let U = (0, m.G)(O);
    return (0, r.jsx)(d.W, {
        actions: k,
        onClickContent: U,
        embedUrl: x,
        header: O.name,
        iconSrc: _.ZP.getApplicationIconURL({
            id: O.id,
            icon: O.icon,
            bot: O.bot
        }),
        info: (0, r.jsx)('div', { children: y.description }),
        staticBannerSrc: y.getAssetURL(),
        title: y.title,
        trackingConfig: {
            id: O.id,
            linkType: u.U.CUSTOM_ACTIVITY_LINK,
            referrerId: I,
            activityCustomId: M
        }
    });
}
