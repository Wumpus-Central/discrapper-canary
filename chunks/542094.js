n.d(t, {
    JS: () => A,
    Qv: () => P,
    ZP: () => O,
    fD: () => I,
    w1: () => Z
}),
    n(997841),
    n(704826),
    n(35282);
var i,
    l = n(493683),
    r = n(911969),
    a = n(906732),
    o = n(835473),
    c = n(630388),
    u = n(358085),
    d = n(317381),
    p = n(638880),
    s = n(122613),
    f = n(619915),
    E = n(16609),
    v = n(761122),
    _ = n(361213),
    y = n(716600),
    b = n(952561),
    h = n(778569),
    g = n(701488),
    m = n(981631),
    A = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function O(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: a, assetNames: o = ['embedded_cover'], backgroundResolution: c = 250, launchingComponentId: d, commandOrigin: p, source: s } = e,
        { application: E, activity: y } = t,
        b = y.client_platform_config[(0, v.Z)((0, u.getOS)())],
        g = null != b.label_until && Date.now() < Date.parse(b.label_until),
        m = (0, h.Z)({
            applicationId: E.id,
            size: c,
            names: o
        }),
        A = null != y.activity_preview_video_asset_id ? (0, _.Z)(E.id, y.activity_preview_video_asset_id) : null,
        O = (0, f.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return E.id === t.applicationId;
        }),
        w = P({
            context: n,
            applicationId: E.id
        }),
        C = Z({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: a,
            onActivityItemSelectedProp: l,
            launchingComponentId: d,
            commandOrigin: p,
            source: s
        }),
        L = I(E, t.activity);
    return {
        imageBackground: m,
        videoUrl: A,
        joinableEmbeddedApp: O,
        activityAction: w,
        onActivityItemSelected: C,
        labelType: g ? b.label_type : r.ww.NONE,
        staffReleasePhase: L
    };
}
function I(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, c.yE)(i, m.udG.EMBEDDED_RELEASED) || (0, c.yE)(i, m.udG.EMBEDDED_FIRST_PARTY))) return;
    let l = t.client_platform_config[(0, v.Z)((0, u.getOS)())].release_phase;
    return g.eB.includes(l) ? l.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function P(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        r = 'channel' === t.type ? t.channel : void 0,
        a = (0, y.Z)(),
        c = (0, b.Z)({ fetchesApplication: i }),
        u = (0, o.q)(n, i),
        d = (0, f.ZP)(r).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return l;
    let p = (0, E.pY)(null == a ? void 0 : a.location);
    return null != r && p === r.id && (null == c ? void 0 : c.id) === u.id ? (l = 2) : null != d && (l = 1), l;
}
function Z(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: r, embeddedActivitiesManager: o, onActivityItemSelectedProp: c, launchingComponentId: u, commandOrigin: f, sectionName: E, source: v, fetchesApplication: _ = !0, customId: b, referrerId: h, onConfirmActivityLaunchChecksAlertOpen: g } = e,
        m = P({
            context: i,
            applicationId: t,
            fetchesApplication: _
        }),
        { analyticsLocations: A } = (0, a.ZP)(),
        O = (0, y.Z)();
    switch (m) {
        case 0:
            return async () => {
                let e = 'channel' === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await l.Z.openPrivateChannel({
                            recipientIds: n,
                            navigateToChannel: !0
                        });
                    } catch (e) {
                        return;
                    }
                await (0, s.Z)({
                    targetApplicationId: t,
                    locationObject: r,
                    channelId: e,
                    analyticsLocations: A,
                    componentId: u,
                    commandOrigin: f,
                    sectionName: E,
                    source: v,
                    customId: b,
                    referrerId: h,
                    onConfirmActivityLaunchChecksAlertOpen: g
                }).then((e) => e && (null == c ? void 0 : c({ applicationId: t })));
            };
        case 1:
            return async () => {
                d.ZP.isLaunchingActivity() ||
                    (await (0, p.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: r,
                        analyticsLocations: A,
                        componentId: u,
                        sectionName: E,
                        source: v,
                        customId: b,
                        referrerId: h,
                        instanceId: void 0,
                        isContextlessActivity: !1
                    }).then((e) => e && (null == c ? void 0 : c({ applicationId: t }))));
            };
        case 2:
            return () => {
                d.ZP.isLaunchingActivity() ||
                    (null != O &&
                        o.leaveActivity({
                            location: O.location,
                            applicationId: t
                        }),
                    null == c || c({ applicationId: t }));
            };
    }
}
