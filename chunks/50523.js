n.d(t, { b: () => E }), n(539854), n(953529);
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
function E(e) {
    var t, n;
    let { application: E, customId: v, customLink: N, embedUrl: O, referrerId: j } = e,
        C = null == E || null == (t = E.bot) ? void 0 : t.id,
        S = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: E.id,
            botUserId: null == E || null == (n = E.bot) ? void 0 : n.id
        }),
        I = null != E && (0, s.ye)(E),
        T = null != C && I && S,
        { analyticsLocations: P } = (0, l.ZP)(a.Z.ACTIVITY_CUSTOM_LINK),
        A = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        w = (0, x.KF)(A),
        Z = (0, i.e7)([_.ZP], () => {
            if (null == A) return;
            let e = _.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === E.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
        k = (0, b.Z)(),
        D = w === x.jy.CAN_LAUNCH,
        L = null != v ? v : N.customId,
        M = [];
    D &&
        M.push({
            label: null == Z ? y.NW.string(y.t.cnBQPD) : y.NW.string(y.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, g.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: E.id,
                    isStart: null == Z,
                    instanceId: Z,
                    embeddedActivitiesManager: k,
                    customId: L,
                    referrerId: j,
                    analyticsLocations: P
                });
            },
            disabledReason: null != Z && (null == R ? void 0 : R.compositeInstanceId) === Z ? y.NW.string(y.t.wJNK8P) : void 0
        }),
        T &&
            !D &&
            M.push({
                label: y.NW.string(y.t.JeK1Wl),
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: E.id,
                        botId: C,
                        analyticsLocations: P,
                        customId: L,
                        referrerId: j
                    });
                }
            });
    let W = (0, m.z)(E);
    return (
        null != M && null != W && M.push(W),
        (0, r.jsx)(d.W, {
            actions: M,
            embedUrl: O,
            header: E.name,
            iconSrc: h.ZP.getApplicationIconURL({
                id: E.id,
                icon: E.icon,
                bot: E.bot
            }),
            info: (0, r.jsx)('div', { children: N.description }),
            staticBannerSrc: N.getAssetURL(),
            title: N.title,
            trackingConfig: {
                id: E.id,
                linkType: u.U.CUSTOM_ACTIVITY_LINK,
                referrerId: j,
                activityCustomId: L
            }
        })
    );
}
