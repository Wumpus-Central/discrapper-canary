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
    x = n(374065),
    E = n(388032);
function y(e) {
    var t, n;
    let { application: y, customId: v, customLink: C, embedUrl: O, referrerId: j } = e,
        S = null == y || null == (t = y.bot) ? void 0 : t.id,
        I = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: y.id,
            botUserId: null == y || null == (n = y.bot) ? void 0 : n.id
        }),
        T = null != y && (0, s.ye)(y),
        N = null != S && T && I,
        { analyticsLocations: P } = (0, a.ZP)(l.Z.ACTIVITY_CUSTOM_LINK),
        A = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        w = (0, x.KF)(A),
        Z = (0, i.e7)([_.ZP], () => {
            if (null == A) return;
            let e = _.ZP.getEmbeddedActivitiesForChannel(A).filter((e) => e.applicationId === y.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        R = (0, i.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
        k = (0, b.Z)(),
        L = w === x.jy.CAN_LAUNCH,
        D = null != v ? v : C.customId,
        M = [];
    L &&
        M.push({
            label: null == Z ? E.intl.string(E.t.cnBQPD) : E.intl.string(E.t.VJlc0d),
            trackingArea: p.j_.PLAY,
            onClick() {
                (0, g.G6)({
                    channelId: null != A ? A : void 0,
                    applicationId: y.id,
                    isStart: null == Z,
                    embeddedActivitiesManager: k,
                    customId: D,
                    referrerId: j,
                    analyticsLocations: P
                });
            },
            disabledReason: null != Z && (null == R ? void 0 : R.compositeInstanceId) === Z ? E.intl.string(E.t.wJNK8P) : void 0
        }),
        N &&
            !L &&
            M.push({
                label: E.intl.string(E.t.JeK1Wl),
                trackingArea: p.j_.PLAY,
                onClick() {
                    (0, o.W)({
                        appId: y.id,
                        botId: S,
                        analyticsLocations: P,
                        customId: D,
                        referrerId: j
                    });
                }
            });
    let U = (0, m.z)(y);
    return (
        null != M && null != U && M.push(U),
        (0, r.jsx)(d.W, {
            actions: M,
            embedUrl: O,
            header: y.name,
            iconSrc: h.ZP.getApplicationIconURL({
                id: y.id,
                icon: y.icon,
                bot: y.bot
            }),
            info: (0, r.jsx)('div', { children: C.description }),
            staticBannerSrc: C.getAssetURL(),
            title: C.title,
            trackingConfig: {
                id: y.id,
                linkType: u.U.CUSTOM_ACTIVITY_LINK,
                referrerId: j,
                activityCustomId: D
            }
        })
    );
}
