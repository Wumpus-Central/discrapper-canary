n.d(t, { b: () => E }), n(539854), n(953529);
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
    x = n(374065),
    y = n(388032);
function E(e) {
    var t, n;
    let { application: E, customId: v, customLink: C, embedUrl: O, referrerId: j } = e,
        S = null == E || null == (t = E.bot) ? void 0 : t.id,
        I = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: E.id,
            botUserId: null == E || null == (n = E.bot) ? void 0 : n.id
        }),
        T = null != E && (0, s.ye)(E),
        N = null != S && T && I,
        { analyticsLocations: P } = (0, a.ZP)(l.Z.ACTIVITY_CUSTOM_LINK),
        A = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        w = (0, x.KF)(A),
        Z = (0, i.e7)([_.ZP], () => {
            if (null == A) return;
            let e = _.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === E.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
        k = (0, b.Z)(),
        L = w === x.jy.CAN_LAUNCH,
        D = null != v ? v : C.customId,
        M = [];
    L &&
        M.push({
            label: null == Z ? y.intl.string(y.t.cnBQPD) : y.intl.string(y.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, g.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: E.id,
                    isStart: null == Z,
                    embeddedActivitiesManager: k,
                    customId: D,
                    referrerId: j,
                    analyticsLocations: P
                });
            },
            disabledReason: null != Z && (null == R ? void 0 : R.compositeInstanceId) === Z ? y.intl.string(y.t.wJNK8P) : void 0
        }),
        N &&
            !L &&
            M.push({
                label: y.intl.string(y.t.JeK1Wl),
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: E.id,
                        botId: S,
                        analyticsLocations: P,
                        customId: D,
                        referrerId: j
                    });
                }
            });
    let U = (0, m.z)(E);
    return (
        null != M && null != U && M.push(U),
        (0, r.jsx)(d.W, {
            actions: M,
            embedUrl: O,
            header: E.name,
            iconSrc: h.ZP.getApplicationIconURL({
                id: E.id,
                icon: E.icon,
                bot: E.bot
            }),
            info: (0, r.jsx)('div', { children: C.description }),
            staticBannerSrc: C.getAssetURL(),
            title: C.title,
            trackingConfig: {
                id: E.id,
                linkType: u.U.CUSTOM_ACTIVITY_LINK,
                referrerId: j,
                activityCustomId: D
            }
        })
    );
}
