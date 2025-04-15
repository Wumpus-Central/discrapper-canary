n.d(t, {
    JS: () => Z,
    Qv: () => A,
    ZP: () => _,
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
    p = n(638880),
    s = n(122613),
    f = n(619915),
    v = n(16609),
    y = n(761122),
    b = n(361213),
    E = n(716600),
    O = n(952561),
    m = n(778569),
    P = n(701488),
    g = n(981631),
    Z = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function _(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: r, embeddedActivitiesManager: o, assetNames: c = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: d, commandOrigin: p, source: s } = e,
        { application: v, activity: E } = t,
        O = E.client_platform_config[(0, y.Z)((0, u.getOS)())],
        P = null != O.label_until && Date.now() < Date.parse(O.label_until),
        g = (0, m.Z)({
            applicationId: v.id,
            size: a,
            names: c
        }),
        Z = null != E.activity_preview_video_asset_id ? (0, b.Z)(v.id, E.activity_preview_video_asset_id) : null,
        _ = (0, f.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
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
            commandOrigin: p,
            source: s
        }),
        S = h(v, t.activity);
    return {
        imageBackground: g,
        videoUrl: Z,
        joinableEmbeddedApp: _,
        activityAction: I,
        onActivityItemSelected: j,
        labelType: P ? O.label_type : l.ww.NONE,
        staffReleasePhase: S
    };
}
function h(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, a.yE)(i, g.udG.EMBEDDED_RELEASED) || (0, a.yE)(i, g.udG.EMBEDDED_FIRST_PARTY))) return;
    let r = t.client_platform_config[(0, y.Z)((0, u.getOS)())].release_phase;
    return P.eB.includes(r) ? r.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function A(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        l = 'channel' === t.type ? t.channel : void 0,
        o = (0, E.Z)(),
        a = (0, O.Z)({ fetchesApplication: i }),
        u = (0, c.q)(n, i),
        d = (0, f.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return r;
    let p = (0, v.pY)(null == o ? void 0 : o.location);
    return null != l && p === l.id && (null == a ? void 0 : a.id) === u.id ? (r = 2) : null != d && (r = 1), r;
}
function w(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: l, embeddedActivitiesManager: c, onActivityItemSelectedProp: a, launchingComponentId: u, commandOrigin: f, sectionName: v, source: y, fetchesApplication: b = !0, customId: O, referrerId: m, onConfirmActivityLaunchChecksAlertOpen: P } = e,
        g = A({
            context: i,
            applicationId: t,
            fetchesApplication: b
        }),
        { analyticsLocations: Z } = (0, o.ZP)(),
        _ = (0, E.Z)();
    switch (g) {
        case 0:
            return async () => {
                let e = 'channel' === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await r.Z.openPrivateChannel(n);
                    } catch (e) {
                        return;
                    }
                await (0, s.Z)({
                    targetApplicationId: t,
                    locationObject: l,
                    channelId: e,
                    analyticsLocations: Z,
                    componentId: u,
                    commandOrigin: f,
                    sectionName: v,
                    source: y,
                    customId: O,
                    referrerId: m,
                    onConfirmActivityLaunchChecksAlertOpen: P
                }).then((e) => e && (null == a ? void 0 : a({ applicationId: t })));
            };
        case 1:
            return async () => {
                d.ZP.isLaunchingActivity() ||
                    (await (0, p.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: l,
                        analyticsLocations: Z,
                        componentId: u,
                        sectionName: v,
                        source: y,
                        customId: O,
                        referrerId: m,
                        instanceId: void 0,
                        isContextlessActivity: !1
                    }).then((e) => e && (null == a ? void 0 : a({ applicationId: t }))));
            };
        case 2:
            return () => {
                d.ZP.isLaunchingActivity() ||
                    (null != _ &&
                        c.leaveActivity({
                            location: _.location,
                            applicationId: t
                        }),
                    null == a || a({ applicationId: t }));
            };
    }
}
