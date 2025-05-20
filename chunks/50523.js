n.d(t, { b: () => y }), n(539854), n(953529);
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(100527),
    a = n(906732),
    o = n(915346),
    s = n(783097),
    c = n(812236),
    u = n(230171),
    d = n(758199),
    p = n(914498),
    m = n(208444),
    f = n(944486),
    h = n(768581),
    g = n(566620),
    _ = n(317381),
    b = n(574952),
    E = n(374065),
    x = n(388032);
function y(e) {
    var t, n;
    let { application: y, customId: v, customLink: O, embedUrl: j, referrerId: C } = e,
        S = null == y || null == (t = y.bot) ? void 0 : t.id,
        I = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: y.id,
            botUserId: null == y || null == (n = y.bot) ? void 0 : n.id
        }),
        N = null != y && (0, s.ye)(y),
        T = null != S && N && I,
        { analyticsLocations: P } = (0, a.ZP)(l.Z.ACTIVITY_CUSTOM_LINK),
        A = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        w = (0, E.KF)(A),
        Z = (0, i.e7)([_.ZP], () => {
            if (null == A) return;
            let e = _.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === y.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
        k = (0, b.Z)(),
        D = w === E.jy.CAN_LAUNCH,
        L = null != v ? v : O.customId,
        M = [];
    D &&
        M.push({
            label: null == Z ? x.intl.string(x.t.cnBQPD) : x.intl.string(x.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, g.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: y.id,
                    isStart: null == Z,
                    embeddedActivitiesManager: k,
                    customId: L,
                    referrerId: C,
                    analyticsLocations: P
                });
            },
            disabledReason: null != Z && (null == R ? void 0 : R.compositeInstanceId) === Z ? x.intl.string(x.t.wJNK8P) : void 0
        }),
        T &&
            !D &&
            M.push({
                label: x.intl.string(x.t.JeK1Wl),
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: y.id,
                        botId: S,
                        analyticsLocations: P,
                        customId: L,
                        referrerId: C
                    });
                }
            });
    let U = (0, m.z)(y);
    return (
        null != M && null != U && M.push(U),
        (0, r.jsx)(d.W, {
            actions: M,
            embedUrl: j,
            header: y.name,
            iconSrc: h.ZP.getApplicationIconURL({
                id: y.id,
                icon: y.icon,
                bot: y.bot
            }),
            info: (0, r.jsx)('div', { children: O.description }),
            staticBannerSrc: O.getAssetURL(),
            title: O.title,
            trackingConfig: {
                id: y.id,
                linkType: u.U.CUSTOM_ACTIVITY_LINK,
                referrerId: C,
                activityCustomId: L
            }
        })
    );
}
