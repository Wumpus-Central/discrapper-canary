i.d(t, {
    JS: () => b,
    Qv: () => C,
    ZP: () => w,
    fD: () => A,
    w1: () => I
}),
    i(789020),
    i(757143);
var l,
    n = i(493683),
    a = i(911969),
    r = i(906732),
    d = i(835473),
    o = i(630388),
    u = i(358085),
    c = i(317381),
    s = i(638880),
    p = i(122613),
    f = i(619915),
    v = i(16609),
    h = i(761122),
    Z = i(361213),
    g = i(716600),
    m = i(952561),
    y = i(778569),
    _ = i(701488),
    E = i(981631),
    b = (((l = {})[(l.START = 0)] = 'START'), (l[(l.JOIN = 1)] = 'JOIN'), (l[(l.LEAVE = 2)] = 'LEAVE'), l);
function w(e) {
    let { activityItem: t, context: i, locationObject: l, onActivityItemSelected: n, embeddedActivitiesManager: r, assetNames: d = ['embedded_cover'], backgroundResolution: o = 250, launchingComponentId: c, commandOrigin: s, source: p } = e,
        { application: v, activity: g } = t,
        m = g.client_platform_config[(0, h.Z)((0, u.getOS)())],
        _ = null != m.label_until && Date.now() < Date.parse(m.label_until),
        E = (0, y.Z)({
            applicationId: v.id,
            size: o,
            names: d
        }),
        b = null != g.activity_preview_video_asset_id ? (0, Z.Z)(v.id, g.activity_preview_video_asset_id) : null,
        w = (0, f.ZP)('channel' === i.type ? i.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return v.id === t.applicationId;
        }),
        S = C({
            context: i,
            applicationId: v.id
        }),
        x = I({
            applicationId: t.application.id,
            context: i,
            locationObject: l,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: n,
            launchingComponentId: c,
            commandOrigin: s,
            source: p
        }),
        P = A(v, t.activity);
    return {
        imageBackground: E,
        videoUrl: b,
        joinableEmbeddedApp: w,
        activityAction: S,
        onActivityItemSelected: x,
        labelType: _ ? m.label_type : a.ww.NONE,
        staffReleasePhase: P
    };
}
function A(e, t) {
    var i;
    let l = null !== (i = e.flags) && void 0 !== i ? i : 0;
    if (!((0, o.yE)(l, E.udG.EMBEDDED_RELEASED) || (0, o.yE)(l, E.udG.EMBEDDED_FIRST_PARTY))) return;
    let n = t.client_platform_config[(0, h.Z)((0, u.getOS)())].release_phase;
    return _.eB.includes(n) ? n.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function C(e) {
    let { context: t, applicationId: i, fetchesApplication: l = !0 } = e,
        n = 0,
        a = 'channel' === t.type ? t.channel : void 0,
        r = (0, g.Z)(),
        o = (0, m.Z)({ fetchesApplication: l }),
        u = (0, d.q)(i, l),
        c = (0, f.ZP)(a).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return n;
    let s = (0, v.pY)(null == r ? void 0 : r.location);
    return null != a && s === a.id && (null == o ? void 0 : o.id) === u.id ? (n = 2) : null != c && (n = 1), n;
}
function I(e) {
    let { applicationId: t, botUserIdForAppDM: i, context: l, locationObject: a, embeddedActivitiesManager: d, onActivityItemSelectedProp: o, launchingComponentId: u, commandOrigin: f, sectionName: v, source: h, fetchesApplication: Z = !0, customId: m, referrerId: y } = e,
        _ = C({
            context: l,
            applicationId: t,
            fetchesApplication: Z
        }),
        { analyticsLocations: E } = (0, r.ZP)(),
        b = (0, g.Z)();
    switch (_) {
        case 0:
            return async () => {
                let e = 'channel' === l.type ? l.channel.id : void 0;
                if (null != i)
                    try {
                        e = await n.Z.openPrivateChannel(i);
                    } catch (e) {
                        return;
                    }
                await (0, p.Z)({
                    targetApplicationId: t,
                    locationObject: a,
                    channelId: e,
                    analyticsLocations: E,
                    componentId: u,
                    commandOrigin: f,
                    sectionName: v,
                    source: h,
                    customId: m,
                    referrerId: y
                }).then((e) => e && (null == o ? void 0 : o({ applicationId: t })));
            };
        case 1:
            return async () => {
                c.ZP.isLaunchingActivity() ||
                    (await (0, s.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === l.type ? l.channel.id : void 0,
                        locationObject: a,
                        analyticsLocations: E,
                        componentId: u,
                        sectionName: v,
                        source: h,
                        customId: m,
                        referrerId: y
                    }).then((e) => e && (null == o ? void 0 : o({ applicationId: t }))));
            };
        case 2:
            return () => {
                c.ZP.isLaunchingActivity() ||
                    (null != b &&
                        d.leaveActivity({
                            location: b.location,
                            applicationId: t
                        }),
                    null == o || o({ applicationId: t }));
            };
    }
}
