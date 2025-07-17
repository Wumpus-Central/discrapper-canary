(n.d(t, { b: () => C }), n(539854), n(953529));
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
    h = n(566620),
    _ = n(317381),
    b = n(574952),
    E = n(374065),
    x = n(388032);
function C(e) {
    var t, n;
    let { application: C, customId: v, customLink: y, embedUrl: O, referrerId: j } = e,
        I = null == C || null == (t = C.bot) ? void 0 : t.id,
        S = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: C.id,
            botUserId: null == C || null == (n = C.bot) ? void 0 : n.id
        }),
        T = null != C && (0, s.ye)(C),
        N = null != I && T && S,
        { analyticsLocations: P } = (0, a.ZP)(l.Z.ACTIVITY_CUSTOM_LINK),
        A = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        w = (0, E.KF)(A),
        Z = (0, i.e7)([_.ZP], () => {
            if (null == A) return;
            let e = _.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === C.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
        k = (0, b.Z)(),
        L = w === E.jy.CAN_LAUNCH,
        D = null != v ? v : y.customId,
        M = [];
    (L &&
        M.push({
            label: null == Z ? x.intl.string(x.t.RscU7O) : x.intl.string(x.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, h.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: C.id,
                    isStart: null == Z,
                    embeddedActivitiesManager: k,
                    customId: D,
                    referrerId: j,
                    analyticsLocations: P
                });
            },
            disabledReason: null != Z && (null == R ? void 0 : R.compositeInstanceId) === Z ? x.intl.string(x.t.wJNK8P) : void 0
        }),
        N &&
            !L &&
            M.push({
                label: x.intl.string(x.t.JeK1Wl),
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: C.id,
                        botId: I,
                        analyticsLocations: P,
                        customId: D,
                        referrerId: j
                    });
                }
            }));
    let U = (0, m.G)(C);
    return (0, r.jsx)(d.W, {
        actions: M,
        onClickContent: U,
        embedUrl: O,
        header: C.name,
        iconSrc: g.ZP.getApplicationIconURL({
            id: C.id,
            icon: C.icon,
            bot: C.bot
        }),
        info: (0, r.jsx)('div', { children: y.description }),
        staticBannerSrc: y.getAssetURL(),
        title: y.title,
        trackingConfig: {
            id: C.id,
            linkType: u.U.CUSTOM_ACTIVITY_LINK,
            referrerId: j,
            activityCustomId: D
        }
    });
}
