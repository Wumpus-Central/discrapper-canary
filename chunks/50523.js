n.d(t, { b: () => v }), n(539854), n(953529);
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(100527),
    l = n(906732),
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
    x = n(374065),
    y = n(388032);
function v(e) {
    var t, n;
    let { application: v, customId: E, customLink: O, embedUrl: N, referrerId: j } = e,
        C = null == v || null == (t = v.bot) ? void 0 : t.id,
        I = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: v.id,
            botUserId: null == v || null == (n = v.bot) ? void 0 : n.id
        }),
        S = null != v && (0, s.ye)(v),
        T = null != C && S && I,
        { analyticsLocations: P } = (0, l.ZP)(a.Z.ACTIVITY_CUSTOM_LINK),
        A = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        w = (0, x.KF)(A),
        Z = (0, i.e7)([_.ZP], () => {
            if (null == A) return;
            let e = _.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === v.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        k = (0, i.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
        R = (0, b.Z)(),
        D = w === x.jy.CAN_LAUNCH,
        L = null != E ? E : O.customId,
        M = [];
    D &&
        M.push({
            label: null != O.primaryCta ? O.primaryCta : null == Z ? y.NW.string(y.t.cnBQPD) : y.NW.string(y.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, g.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: v.id,
                    isStart: null == Z,
                    instanceId: Z,
                    embeddedActivitiesManager: R,
                    customId: L,
                    referrerId: j,
                    analyticsLocations: P
                });
            },
            disabledReason: null != Z && (null == k ? void 0 : k.compositeInstanceId) === Z ? y.NW.string(y.t.wJNK8P) : void 0
        }),
        T &&
            M.push({
                label: D || null == O.primaryCta ? y.NW.string(y.t.JeK1Wl) : O.primaryCta,
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: v.id,
                        botId: C,
                        analyticsLocations: P,
                        customId: L,
                        referrerId: j
                    });
                }
            });
    let W = (0, m.z)(v);
    return (
        null != M && null != W && M.push(W),
        (0, r.jsx)(d.W, {
            actions: M,
            embedUrl: N,
            header: v.name,
            iconSrc: h.ZP.getApplicationIconURL({
                id: v.id,
                icon: v.icon,
                bot: v.bot
            }),
            info: (0, r.jsx)('div', { children: O.description }),
            staticBannerSrc: O.getAssetURL(),
            title: O.title,
            trackingConfig: {
                id: v.id,
                linkType: u.U.CUSTOM_ACTIVITY_LINK,
                referrerId: j,
                activityCustomId: L
            }
        })
    );
}
