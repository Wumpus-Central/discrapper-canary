n.d(t, {
    JS: () => h,
    Qv: () => Z,
    ZP: () => w,
    fD: () => _,
    w1: () => A
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
    b = n(761122),
    y = n(361213),
    O = n(716600),
    E = n(952561),
    m = n(778569),
    P = n(701488),
    g = n(981631),
    h = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function w(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: r, embeddedActivitiesManager: o, assetNames: c = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: d, commandOrigin: p, source: s } = e,
        { application: v, activity: O } = t,
        E = O.client_platform_config[(0, b.Z)((0, u.getOS)())],
        P = null != E.label_until && Date.now() < Date.parse(E.label_until),
        g = (0, m.Z)({
            applicationId: v.id,
            size: a,
            names: c
        }),
        h = null != O.activity_preview_video_asset_id ? (0, y.Z)(v.id, O.activity_preview_video_asset_id) : null,
        w = (0, f.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return v.id === t.applicationId;
        }),
        I = Z({
            context: n,
            applicationId: v.id
        }),
        j = A({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: r,
            launchingComponentId: d,
            commandOrigin: p,
            source: s
        }),
        S = _(v, t.activity);
    return {
        imageBackground: g,
        videoUrl: h,
        joinableEmbeddedApp: w,
        activityAction: I,
        onActivityItemSelected: j,
        labelType: P ? E.label_type : l.ww.NONE,
        staffReleasePhase: S
    };
}
function _(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, a.yE)(i, g.udG.EMBEDDED_RELEASED) || (0, a.yE)(i, g.udG.EMBEDDED_FIRST_PARTY))) return;
    let r = t.client_platform_config[(0, b.Z)((0, u.getOS)())].release_phase;
    return P.eB.includes(r) ? r.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function Z(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        l = 'channel' === t.type ? t.channel : void 0,
        o = (0, O.Z)(),
        a = (0, E.Z)({ fetchesApplication: i }),
        u = (0, c.q)(n, i),
        d = (0, f.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return r;
    let p = (0, v.pY)(null == o ? void 0 : o.location);
    return null != l && p === l.id && (null == a ? void 0 : a.id) === u.id ? (r = 2) : null != d && (r = 1), r;
}
function A(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: l, embeddedActivitiesManager: c, onActivityItemSelectedProp: a, launchingComponentId: u, commandOrigin: f, sectionName: v, source: b, fetchesApplication: y = !0, customId: E, referrerId: m, onConfirmActivityLaunchChecksAlertOpen: P } = e,
        g = Z({
            context: i,
            applicationId: t,
            fetchesApplication: y
        }),
        { analyticsLocations: h } = (0, o.ZP)(),
        w = (0, O.Z)();
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
                    analyticsLocations: h,
                    componentId: u,
                    commandOrigin: f,
                    sectionName: v,
                    source: b,
                    customId: E,
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
                        analyticsLocations: h,
                        componentId: u,
                        sectionName: v,
                        source: b,
                        customId: E,
                        referrerId: m,
                        instanceId: void 0,
                        isContextlessActivity: !1
                    }).then((e) => e && (null == a ? void 0 : a({ applicationId: t }))));
            };
        case 2:
            return () => {
                d.ZP.isLaunchingActivity() ||
                    (null != w &&
                        c.leaveActivity({
                            location: w.location,
                            applicationId: t
                        }),
                    null == a || a({ applicationId: t }));
            };
    }
}
