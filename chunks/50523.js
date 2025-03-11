n.d(t, { b: () => E }), n(653041), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(100527),
    l = n(906732),
    s = n(783097),
    c = n(606192),
    d = n(812236),
    u = n(230171),
    p = n(758199),
    m = n(914498),
    f = n(208444),
    h = n(944486),
    g = n(81063),
    _ = n(768581),
    b = n(566620),
    v = n(317381),
    y = n(574952),
    x = n(374065),
    O = n(388032);
function E(e) {
    var t, n;
    let { application: E, customId: j, customLink: N, embedUrl: C, referrerId: I } = e,
        S = null == E ? void 0 : null === (t = E.bot) || void 0 === t ? void 0 : t.id,
        T = (0, d.ms)({
            context: { type: 'contextless' },
            applicationId: E.id,
            botUserId: null == E ? void 0 : null === (n = E.bot) || void 0 === n ? void 0 : n.id
        }),
        P = null != E && (0, s.ye)(E),
        A = null != S && P && T,
        { analyticsLocations: w } = (0, l.ZP)(o.Z.ACTIVITY_BOOKMARK),
        Z = (0, a.e7)([h.Z], () => h.Z.getChannelId()),
        k = (0, x.KF)(Z),
        R = (0, a.e7)([v.ZP], () => {
            if (null == Z) return;
            let e = v.ZP.getEmbeddedActivitiesForChannel(Z).filter((e) => e.applicationId === E.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        D = (0, a.e7)([v.ZP], () => v.ZP.getCurrentEmbeddedActivity()),
        L = (0, y.Z)(),
        M = k === x.jy.CAN_LAUNCH,
        W = null != j ? j : N.custom_id,
        F = null != I ? I : N.referrer_id,
        U = [];
    M &&
        U.push({
            label: null == R ? O.NW.string(O.t.cnBQPD) : O.NW.string(O.t.VJlc0d),
            onClick() {
                (0, b.G6)({
                    channelId: null != Z ? Z : void 0,
                    applicationId: E.id,
                    isStart: null == R,
                    instanceId: R,
                    embeddedActivitiesManager: L,
                    customId: W,
                    referrerId: F,
                    analyticsLocations: w
                }),
                    B(m.j_.PLAY);
            },
            disabledReason: null != R && (null == D ? void 0 : D.compositeInstanceId) === R ? O.NW.string(O.t.wJNK8P) : void 0
        }),
        A &&
            U.push({
                label: null != N.primary_cta ? N.primary_cta : O.NW.string(O.t.JeK1Wl),
                onClick() {
                    (0, c.W)({
                        appId: E.id,
                        botId: S,
                        analyticsLocations: w,
                        customId: W,
                        referrerId: F
                    }),
                        (0, m.KX)(E.id, u.U.ACTIVITY, m.j_.PLAY, F, W);
                }
            });
    let B = i.useCallback(
            (e) => {
                (0, m.KX)(E.id, u.U.ACTIVITY, e, F, W);
            },
            [E.id, W, F]
        ),
        G = (0, f.z)(E, B);
    return (
        null != U && null != G && U.push(G),
        (0, r.jsx)(p.W, {
            actions: U,
            embedUrl: C,
            header: E.name,
            iconSrc: _.ZP.getApplicationIconURL({
                id: E.id,
                icon: E.icon,
                bot: E.bot
            }),
            info: (0, r.jsx)('div', { children: N.description }),
            staticBannerSrc: (0, g.xF)(E.id, N.asset_id, 512),
            title: N.title
        })
    );
}
