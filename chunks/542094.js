n.d(t, {
    JS: () => g,
    Qv: () => A,
    ZP: () => Z,
    fD: () => h,
    w1: () => w
}),
    n(997841),
    n(704826),
    n(35282);
var i,
    r = n(493683),
    l = n(911969),
    o = n(906732),
    c = n(835473),
    a = n(630388),
    u = n(358085),
    d = n(317381),
    s = n(638880),
    p = n(122613),
    f = n(619915),
    v = n(16609),
    E = n(761122),
    b = n(361213),
    y = n(716600),
    O = n(952561),
    m = n(778569),
    _ = n(701488),
    P = n(981631),
    g = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function Z(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: r, embeddedActivitiesManager: o, assetNames: c = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: d, commandOrigin: s, source: p } = e,
        { application: v, activity: y } = t,
        O = y.client_platform_config[(0, E.Z)((0, u.getOS)())],
        _ = null != O.label_until && Date.now() < Date.parse(O.label_until),
        P = (0, m.Z)({
            applicationId: v.id,
            size: a,
            names: c
        }),
        g = null != y.activity_preview_video_asset_id ? (0, b.Z)(v.id, y.activity_preview_video_asset_id) : null,
        Z = (0, f.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return v.id === t.applicationId;
        }),
        I = A({
            context: n,
            applicationId: v.id
        }),
        j = w({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: r,
            launchingComponentId: d,
            commandOrigin: s,
            source: p
        }),
        S = h(v, t.activity);
    return {
        imageBackground: P,
        videoUrl: g,
        joinableEmbeddedApp: Z,
        activityAction: I,
        onActivityItemSelected: j,
        labelType: _ ? O.label_type : l.ww.NONE,
        staffReleasePhase: S
    };
}
function h(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, a.yE)(i, P.udG.EMBEDDED_RELEASED) || (0, a.yE)(i, P.udG.EMBEDDED_FIRST_PARTY))) return;
    let r = t.client_platform_config[(0, E.Z)((0, u.getOS)())].release_phase;
    return _.eB.includes(r) ? r.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function A(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        l = 'channel' === t.type ? t.channel : void 0,
        o = (0, y.Z)(),
        a = (0, O.Z)({ fetchesApplication: i }),
        u = (0, c.q)(n, i),
        d = (0, f.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return r;
    let s = (0, v.pY)(null == o ? void 0 : o.location);
    return null != l && s === l.id && (null == a ? void 0 : a.id) === u.id ? (r = 2) : null != d && (r = 1), r;
}
function w(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: l, embeddedActivitiesManager: c, onActivityItemSelectedProp: a, launchingComponentId: u, commandOrigin: f, sectionName: v, source: E, fetchesApplication: b = !0, customId: O, referrerId: m, onConfirmActivityLaunchChecksAlertOpen: _ } = e,
        P = A({
            context: i,
            applicationId: t,
            fetchesApplication: b
        }),
        { analyticsLocations: g } = (0, o.ZP)(),
        Z = (0, y.Z)();
    switch (P) {
        case 0:
            return async () => {
                let e = 'channel' === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await r.Z.openPrivateChannel(n);
                    } catch (e) {
                        return;
                    }
                await (0, p.Z)({
                    targetApplicationId: t,
                    locationObject: l,
                    channelId: e,
                    analyticsLocations: g,
                    componentId: u,
                    commandOrigin: f,
                    sectionName: v,
                    source: E,
                    customId: O,
                    referrerId: m,
                    onConfirmActivityLaunchChecksAlertOpen: _
                }).then((e) => e && (null == a ? void 0 : a({ applicationId: t })));
            };
        case 1:
            return async () => {
                d.ZP.isLaunchingActivity() ||
                    (await (0, s.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: l,
                        analyticsLocations: g,
                        componentId: u,
                        sectionName: v,
                        source: E,
                        customId: O,
                        referrerId: m,
                        instanceId: void 0,
                        isContextlessActivity: !1
                    }).then((e) => e && (null == a ? void 0 : a({ applicationId: t }))));
            };
        case 2:
            return () => {
                d.ZP.isLaunchingActivity() ||
                    (null != Z &&
                        c.leaveActivity({
                            location: Z.location,
                            applicationId: t
                        }),
                    null == a || a({ applicationId: t }));
            };
    }
}
