(n.d(t, { b: () => x }), n(539854), n(953529));
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
    h = n(566620),
    g = n(317381),
    b = n(574952),
    E = n(374065),
    y = n(388032);
function x(e) {
    var t, n;
    let { application: x, customId: C, customLink: v, embedUrl: O, referrerId: j } = e,
        I = null == x || null == (t = x.bot) ? void 0 : t.id,
        S = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: x.id,
            botUserId: null == x || null == (n = x.bot) ? void 0 : n.id
        }),
        T = null != x && (0, s.ye)(x),
        N = null != I && T && S,
        { analyticsLocations: P } = (0, a.ZP)(l.Z.ACTIVITY_CUSTOM_LINK),
        A = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        w = (0, E.KF)(A),
        Z = (0, i.e7)([g.ZP], () => {
            if (null == A) return;
            let e = g.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === x.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([g.ZP], () => g.ZP.getCurrentEmbeddedActivity()),
        L = (0, b.Z)(),
        k = w === E.jy.CAN_LAUNCH,
        D = null != C ? C : v.customId,
        M = [];
    (k &&
        M.push({
            label: null == Z ? y.intl.string(y.t.RscU7O) : y.intl.string(y.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, h.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: x.id,
                    isStart: null == Z,
                    embeddedActivitiesManager: L,
                    customId: D,
                    referrerId: j,
                    analyticsLocations: P
                });
            },
            disabledReason: null != Z && (null == R ? void 0 : R.compositeInstanceId) === Z ? y.intl.string(y.t.wJNK8P) : void 0
        }),
        N &&
            !k &&
            M.push({
                label: y.intl.string(y.t.JeK1Wl),
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: x.id,
                        botId: I,
                        analyticsLocations: P,
                        customId: D,
                        referrerId: j
                    });
                }
            }));
    let U = (0, m.G)(x);
    return (0, r.jsx)(d.W, {
        actions: M,
        onClickContent: U,
        embedUrl: O,
        header: x.name,
        iconSrc: _.ZP.getApplicationIconURL({
            id: x.id,
            icon: x.icon,
            bot: x.bot
        }),
        info: (0, r.jsx)('div', { children: v.description }),
        staticBannerSrc: v.getAssetURL(),
        title: v.title,
        trackingConfig: {
            id: x.id,
            linkType: u.U.CUSTOM_ACTIVITY_LINK,
            referrerId: j,
            activityCustomId: D
        }
    });
}
