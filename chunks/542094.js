n.d(t, {
    JS: () => h,
    Qv: () => A,
    ZP: () => _,
    fD: () => w,
    w1: () => I
}),
    n(997841),
    n(704826),
    n(35282);
var i,
    r = n(493683),
    l = n(911969),
    o = n(906732),
    a = n(835473),
    c = n(630388),
    u = n(358085),
    d = n(774226),
    p = n(317381),
    s = n(638880),
    f = n(122613),
    v = n(619915),
    y = n(16609),
    b = n(761122),
    E = n(361213),
    O = n(716600),
    m = n(952561),
    g = n(778569),
    P = n(701488),
    Z = n(981631),
    h = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function _(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: r, embeddedActivitiesManager: o, assetNames: a = ['embedded_cover'], backgroundResolution: c = 250, launchingComponentId: d, commandOrigin: p, source: s } = e,
        { application: f, activity: y } = t,
        O = y.client_platform_config[(0, b.Z)((0, u.getOS)())],
        m = null != O.label_until && Date.now() < Date.parse(O.label_until),
        P = (0, g.Z)({
            applicationId: f.id,
            size: c,
            names: a
        }),
        Z = null != y.activity_preview_video_asset_id ? (0, E.Z)(f.id, y.activity_preview_video_asset_id) : null,
        h = (0, v.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
        }),
        _ = A({
            context: n,
            applicationId: f.id
        }),
        j = I({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: r,
            launchingComponentId: d,
            commandOrigin: p,
            source: s
        }),
        S = w(f, t.activity);
    return {
        imageBackground: P,
        videoUrl: Z,
        joinableEmbeddedApp: h,
        activityAction: _,
        onActivityItemSelected: j,
        labelType: m ? O.label_type : l.ww.NONE,
        staffReleasePhase: S
    };
}
function w(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, c.yE)(i, Z.udG.EMBEDDED_RELEASED) || (0, c.yE)(i, Z.udG.EMBEDDED_FIRST_PARTY))) return;
    let r = t.client_platform_config[(0, b.Z)((0, u.getOS)())].release_phase;
    return P.eB.includes(r) ? r.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function A(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        l = 'channel' === t.type ? t.channel : void 0,
        o = (0, O.Z)(),
        c = (0, m.Z)({ fetchesApplication: i }),
        u = (0, a.q)(n, i),
        d = (0, v.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return r;
    let p = (0, y.pY)(null == o ? void 0 : o.location);
    return null != l && p === l.id && (null == c ? void 0 : c.id) === u.id ? (r = 2) : null != d && (r = 1), r;
}
function I(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: l, embeddedActivitiesManager: c, onActivityItemSelectedProp: u, launchingComponentId: v, commandOrigin: y, sectionName: b, source: E, fetchesApplication: m = !0, customId: g, referrerId: P, onConfirmActivityLaunchChecksAlertOpen: Z } = e,
        h = (0, a.q)(t, m),
        _ = A({
            context: i,
            applicationId: t,
            fetchesApplication: m
        }),
        { analyticsLocations: w } = (0, o.ZP)(),
        I = (0, O.Z)(),
        j = (0, d.GK)(null != h ? h : void 0);
    switch (_) {
        case 0:
            return async () => {
                let e = 'channel' === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await r.Z.openPrivateChannel({
                            recipientIds: n,
                            navigateToChannel: !j
                        });
                    } catch (e) {
                        return;
                    }
                await (0, f.Z)({
                    targetApplicationId: t,
                    locationObject: l,
                    channelId: e,
                    analyticsLocations: w,
                    componentId: v,
                    commandOrigin: y,
                    sectionName: b,
                    source: E,
                    customId: g,
                    referrerId: P,
                    onConfirmActivityLaunchChecksAlertOpen: Z
                }).then((e) => e && (null == u ? void 0 : u({ applicationId: t })));
            };
        case 1:
            return async () => {
                p.ZP.isLaunchingActivity() ||
                    (await (0, s.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: l,
                        analyticsLocations: w,
                        componentId: v,
                        sectionName: b,
                        source: E,
                        customId: g,
                        referrerId: P
                    }).then((e) => e && (null == u ? void 0 : u({ applicationId: t }))));
            };
        case 2:
            return () => {
                p.ZP.isLaunchingActivity() ||
                    (null != I &&
                        c.leaveActivity({
                            location: I.location,
                            applicationId: t
                        }),
                    null == u || u({ applicationId: t }));
            };
    }
}
