n.d(t, {
    JS: () => O,
    Qv: () => I,
    ZP: () => A,
    fD: () => P,
    w1: () => w
}),
    n(997841),
    n(704826),
    n(35282);
var i,
    a = n(493683),
    o = n(911969),
    l = n(906732),
    r = n(835473),
    c = n(630388),
    u = n(358085),
    p = n(317381),
    d = n(638880),
    s = n(122613),
    f = n(619915),
    b = n(16609),
    v = n(761122),
    y = n(361213),
    E = n(716600),
    h = n(952561),
    g = n(778569),
    m = n(701488),
    _ = n(981631),
    O = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function A(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: a, embeddedActivitiesManager: l, assetNames: r = ['embedded_cover'], backgroundResolution: c = 250, launchingComponentId: p, commandOrigin: d, source: s } = e,
        { application: b, activity: E } = t,
        h = E.client_platform_config[(0, v.Z)((0, u.getOS)())],
        m = null != h.label_until && Date.now() < Date.parse(h.label_until),
        _ = (0, g.Z)({
            applicationId: b.id,
            size: c,
            names: r
        }),
        O = null != E.activity_preview_video_asset_id ? (0, y.Z)(b.id, E.activity_preview_video_asset_id) : null,
        A = (0, f.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return b.id === t.applicationId;
        }),
        C = I({
            context: n,
            applicationId: b.id
        }),
        T = w({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: l,
            onActivityItemSelectedProp: a,
            launchingComponentId: p,
            commandOrigin: d,
            source: s
        }),
        S = P(b, t.activity);
    return {
        imageBackground: _,
        videoUrl: O,
        joinableEmbeddedApp: A,
        activityAction: C,
        onActivityItemSelected: T,
        labelType: m ? h.label_type : o.ww.NONE,
        staffReleasePhase: S
    };
}
function P(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, c.yE)(i, _.udG.EMBEDDED_RELEASED) || (0, c.yE)(i, _.udG.EMBEDDED_FIRST_PARTY))) return;
    let a = t.client_platform_config[(0, v.Z)((0, u.getOS)())].release_phase;
    return m.eB.includes(a) ? a.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function I(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        a = 0,
        o = 'channel' === t.type ? t.channel : void 0,
        l = (0, E.Z)(),
        c = (0, h.Z)({ fetchesApplication: i }),
        u = (0, r.q)(n, i),
        p = (0, f.ZP)(o).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return a;
    let d = (0, b.pY)(null == l ? void 0 : l.location);
    return null != o && d === o.id && (null == c ? void 0 : c.id) === u.id ? (a = 2) : null != p && (a = 1), a;
}
function w(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: o, embeddedActivitiesManager: r, onActivityItemSelectedProp: c, launchingComponentId: u, commandOrigin: f, sectionName: b, source: v, fetchesApplication: y = !0, customId: h, referrerId: g, onConfirmActivityLaunchChecksAlertOpen: m } = e,
        _ = I({
            context: i,
            applicationId: t,
            fetchesApplication: y
        }),
        { analyticsLocations: O } = (0, l.ZP)(),
        A = (0, E.Z)();
    switch (_) {
        case 0:
            return async () => {
                let e = 'channel' === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await a.Z.openPrivateChannel({
                            recipientIds: n,
                            navigateToChannel: !0
                        });
                    } catch (e) {
                        return;
                    }
                await (0, s.Z)({
                    targetApplicationId: t,
                    locationObject: o,
                    channelId: e,
                    analyticsLocations: O,
                    componentId: u,
                    commandOrigin: f,
                    sectionName: b,
                    source: v,
                    customId: h,
                    referrerId: g,
                    onConfirmActivityLaunchChecksAlertOpen: m
                }).then((e) => e && (null == c ? void 0 : c({ applicationId: t })));
            };
        case 1:
            return async () => {
                p.ZP.isLaunchingActivity() ||
                    (await (0, d.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: o,
                        analyticsLocations: O,
                        componentId: u,
                        sectionName: b,
                        source: v,
                        customId: h,
                        referrerId: g,
                        instanceId: void 0,
                        isContextlessActivity: !1
                    }).then((e) => e && (null == c ? void 0 : c({ applicationId: t }))));
            };
        case 2:
            return () => {
                p.ZP.isLaunchingActivity() ||
                    (null != A &&
                        r.leaveActivity({
                            location: A.location,
                            applicationId: t
                        }),
                    null == c || c({ applicationId: t }));
            };
    }
}
