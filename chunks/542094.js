n.d(t, {
    JS: () => O,
    Qv: () => Z,
    ZP: () => I,
    fD: () => P,
    w1: () => w
}),
    n(997841),
    n(704826),
    n(35282);
var i,
    l = n(493683),
    r = n(911969),
    o = n(906732),
    a = n(835473),
    c = n(630388),
    u = n(358085),
    d = n(774226),
    p = n(317381),
    s = n(638880),
    f = n(122613),
    E = n(619915),
    v = n(16609),
    _ = n(761122),
    y = n(361213),
    b = n(716600),
    h = n(952561),
    g = n(778569),
    m = n(701488),
    A = n(981631),
    O = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function I(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: o, assetNames: a = ['embedded_cover'], backgroundResolution: c = 250, launchingComponentId: d, commandOrigin: p, source: s } = e,
        { application: f, activity: v } = t,
        b = v.client_platform_config[(0, _.Z)((0, u.getOS)())],
        h = null != b.label_until && Date.now() < Date.parse(b.label_until),
        m = (0, g.Z)({
            applicationId: f.id,
            size: c,
            names: a
        }),
        A = null != v.activity_preview_video_asset_id ? (0, y.Z)(f.id, v.activity_preview_video_asset_id) : null,
        O = (0, E.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
        }),
        I = Z({
            context: n,
            applicationId: f.id
        }),
        C = w({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: l,
            launchingComponentId: d,
            commandOrigin: p,
            source: s
        }),
        L = P(f, t.activity);
    return {
        imageBackground: m,
        videoUrl: A,
        joinableEmbeddedApp: O,
        activityAction: I,
        onActivityItemSelected: C,
        labelType: h ? b.label_type : r.ww.NONE,
        staffReleasePhase: L
    };
}
function P(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, c.yE)(i, A.udG.EMBEDDED_RELEASED) || (0, c.yE)(i, A.udG.EMBEDDED_FIRST_PARTY))) return;
    let l = t.client_platform_config[(0, _.Z)((0, u.getOS)())].release_phase;
    return m.eB.includes(l) ? l.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function Z(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        r = 'channel' === t.type ? t.channel : void 0,
        o = (0, b.Z)(),
        c = (0, h.Z)({ fetchesApplication: i }),
        u = (0, a.q)(n, i),
        d = (0, E.ZP)(r).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return l;
    let p = (0, v.pY)(null == o ? void 0 : o.location);
    return null != r && p === r.id && (null == c ? void 0 : c.id) === u.id ? (l = 2) : null != d && (l = 1), l;
}
function w(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: r, embeddedActivitiesManager: c, onActivityItemSelectedProp: u, launchingComponentId: E, commandOrigin: v, sectionName: _, source: y, fetchesApplication: h = !0, customId: g, referrerId: m, onConfirmActivityLaunchChecksAlertOpen: A } = e,
        O = (0, a.q)(t, h),
        I = Z({
            context: i,
            applicationId: t,
            fetchesApplication: h
        }),
        { analyticsLocations: P } = (0, o.ZP)(),
        w = (0, b.Z)(),
        C = (0, d.GK)(null != O ? O : void 0);
    switch (I) {
        case 0:
            return async () => {
                let e = 'channel' === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await l.Z.openPrivateChannel({
                            recipientIds: n,
                            navigateToChannel: !C
                        });
                    } catch (e) {
                        return;
                    }
                await (0, f.Z)({
                    targetApplicationId: t,
                    locationObject: r,
                    channelId: e,
                    analyticsLocations: P,
                    componentId: E,
                    commandOrigin: v,
                    sectionName: _,
                    source: y,
                    customId: g,
                    referrerId: m,
                    onConfirmActivityLaunchChecksAlertOpen: A
                }).then((e) => e && (null == u ? void 0 : u({ applicationId: t })));
            };
        case 1:
            return async () => {
                p.ZP.isLaunchingActivity() ||
                    (await (0, s.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: r,
                        analyticsLocations: P,
                        componentId: E,
                        sectionName: _,
                        source: y,
                        customId: g,
                        referrerId: m,
                        instanceId: void 0,
                        isContextlessActivity: !1
                    }).then((e) => e && (null == u ? void 0 : u({ applicationId: t }))));
            };
        case 2:
            return () => {
                p.ZP.isLaunchingActivity() ||
                    (null != w &&
                        c.leaveActivity({
                            location: w.location,
                            applicationId: t
                        }),
                    null == u || u({ applicationId: t }));
            };
    }
}
