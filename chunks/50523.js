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
    g = n(768581),
    _ = n(566620),
    h = n(317381),
    b = n(574952),
    E = n(374065),
    C = n(388032);
function x(e) {
    var t, n;
    let { application: x, customId: v, customLink: y, embedUrl: O, referrerId: j } = e,
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
        Z = (0, i.e7)([h.ZP], () => {
            if (null == A) return;
            let e = h.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === x.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([h.ZP], () => h.ZP.getCurrentEmbeddedActivity()),
        L = (0, b.Z)(),
        D = w === E.jy.CAN_LAUNCH,
        k = null != v ? v : y.customId,
        M = [];
    (D &&
        M.push({
            label: null == Z ? C.intl.string(C.t.RscU7O) : C.intl.string(C.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, _.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: x.id,
                    isStart: null == Z,
                    embeddedActivitiesManager: L,
                    customId: k,
                    referrerId: j,
                    analyticsLocations: P
                });
            },
            disabledReason: null != Z && (null == R ? void 0 : R.compositeInstanceId) === Z ? C.intl.string(C.t.wJNK8P) : void 0
        }),
        N &&
            !D &&
            M.push({
                label: C.intl.string(C.t.JeK1Wl),
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: x.id,
                        botId: I,
                        analyticsLocations: P,
                        customId: k,
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
        iconSrc: g.ZP.getApplicationIconURL({
            id: x.id,
            icon: x.icon,
            bot: x.bot
        }),
        info: (0, r.jsx)('div', { children: y.description }),
        staticBannerSrc: y.getAssetURL(),
        title: y.title,
        trackingConfig: {
            id: x.id,
            linkType: u.U.CUSTOM_ACTIVITY_LINK,
            referrerId: j,
            activityCustomId: k
        }
    });
}
