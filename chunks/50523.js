n.d(t, { b: () => E }), n(653041), n(266796);
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
    h = n(81063),
    g = n(768581),
    _ = n(566620),
    b = n(317381),
    x = n(574952),
    y = n(374065),
    v = n(388032);
function E(e) {
    var t, n;
    let { application: E, customId: O, customLink: N, embedUrl: j, referrerId: C } = e,
        I = null == E || null == (t = E.bot) ? void 0 : t.id,
        S = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: E.id,
            botUserId: null == E || null == (n = E.bot) ? void 0 : n.id
        }),
        T = null != E && (0, s.ye)(E),
        P = null != I && T && S,
        { analyticsLocations: A } = (0, l.ZP)(a.Z.ACTIVITY_CUSTOM_LINK),
        w = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        Z = (0, y.KF)(w),
        k = (0, i.e7)([b.ZP], () => {
            if (null == w) return;
            let e = b.ZP.getEmbeddedActivitiesForChannel(w).filter((e) => e.applicationId === E.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()),
        D = (0, x.Z)(),
        L = Z === y.jy.CAN_LAUNCH,
        M = null != O ? O : N.custom_id,
        W = [];
    L &&
        W.push({
            label: null != N.primary_cta ? N.primary_cta : null == k ? v.NW.string(v.t.cnBQPD) : v.NW.string(v.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, _.G6)({
                    channelId: null != w ? w : void 0,
                    applicationId: E.id,
                    isStart: null == k,
                    instanceId: k,
                    embeddedActivitiesManager: D,
                    customId: M,
                    referrerId: C,
                    analyticsLocations: A
                });
            },
            disabledReason: null != k && (null == R ? void 0 : R.compositeInstanceId) === k ? v.NW.string(v.t.wJNK8P) : void 0
        }),
        P &&
            W.push({
                label: L || null == N.primary_cta ? v.NW.string(v.t.JeK1Wl) : N.primary_cta,
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: E.id,
                        botId: I,
                        analyticsLocations: A,
                        customId: M,
                        referrerId: C
                    });
                }
            });
    let U = (0, m.z)(E);
    return (
        null != W && null != U && W.push(U),
        (0, r.jsx)(d.W, {
            actions: W,
            embedUrl: j,
            header: E.name,
            iconSrc: g.ZP.getApplicationIconURL({
                id: E.id,
                icon: E.icon,
                bot: E.bot
            }),
            info: (0, r.jsx)('div', { children: N.description }),
            staticBannerSrc: (0, h.xF)(E.id, N.asset_id, 512),
            title: N.title,
            trackingConfig: {
                id: E.id,
                linkType: u.U.CUSTOM_ACTIVITY_LINK,
                referrerId: C,
                activityCustomId: M
            }
        })
    );
}
