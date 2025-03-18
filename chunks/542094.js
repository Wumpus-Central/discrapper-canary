n.d(t, {
    JS: () => j,
    Qv: () => C,
    ZP: () => E,
    fD: () => P,
    w1: () => O
}),
    n(789020),
    n(757143),
    n(301563);
var i,
    l = n(493683),
    r = n(911969),
    o = n(906732),
    a = n(835473),
    s = n(630388),
    c = n(358085),
    u = n(317381),
    d = n(638880),
    p = n(122613),
    m = n(619915),
    f = n(16609),
    h = n(761122),
    v = n(361213),
    y = n(716600),
    b = n(952561),
    N = n(778569),
    g = n(701488),
    x = n(981631),
    j = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function E(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: o, assetNames: a = ['embedded_cover'], backgroundResolution: s = 250, launchingComponentId: u, commandOrigin: d, source: p } = e,
        { application: f, activity: y } = t,
        b = y.client_platform_config[(0, h.Z)((0, c.getOS)())],
        g = null != b.label_until && Date.now() < Date.parse(b.label_until),
        x = (0, N.Z)({
            applicationId: f.id,
            size: s,
            names: a
        }),
        j = null != y.activity_preview_video_asset_id ? (0, v.Z)(f.id, y.activity_preview_video_asset_id) : null,
        E = (0, m.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
        }),
        A = C({
            context: n,
            applicationId: f.id
        }),
        I = O({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: l,
            launchingComponentId: u,
            commandOrigin: d,
            source: p
        }),
        _ = P(f, t.activity);
    return {
        imageBackground: x,
        videoUrl: j,
        joinableEmbeddedApp: E,
        activityAction: A,
        onActivityItemSelected: I,
        labelType: g ? b.label_type : r.ww.NONE,
        staffReleasePhase: _
    };
}
function P(e, t) {
    var n;
    let i = null !== (n = e.flags) && void 0 !== n ? n : 0;
    if (!((0, s.yE)(i, x.udG.EMBEDDED_RELEASED) || (0, s.yE)(i, x.udG.EMBEDDED_FIRST_PARTY))) return;
    let l = t.client_platform_config[(0, h.Z)((0, c.getOS)())].release_phase;
    return g.eB.includes(l) ? l.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function C(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        r = 'channel' === t.type ? t.channel : void 0,
        o = (0, y.Z)(),
        s = (0, b.Z)({ fetchesApplication: i }),
        c = (0, a.q)(n, i),
        u = (0, m.ZP)(r).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
        });
    if (null == c) return l;
    let d = (0, f.pY)(null == o ? void 0 : o.location);
    return null != r && d === r.id && (null == s ? void 0 : s.id) === c.id ? (l = 2) : null != u && (l = 1), l;
}
function O(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: r, embeddedActivitiesManager: a, onActivityItemSelectedProp: s, launchingComponentId: c, commandOrigin: m, sectionName: f, source: h, fetchesApplication: v = !0, customId: b, referrerId: N, onConfirmActivityLaunchChecksAlertOpen: g } = e,
        x = C({
            context: i,
            applicationId: t,
            fetchesApplication: v
        }),
        { analyticsLocations: j } = (0, o.ZP)(),
        E = (0, y.Z)();
    switch (x) {
        case 0:
            return async () => {
                let e = 'channel' === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await l.Z.openPrivateChannel(n);
                    } catch (e) {
                        return;
                    }
                await (0, p.Z)({
                    targetApplicationId: t,
                    locationObject: r,
                    channelId: e,
                    analyticsLocations: j,
                    componentId: c,
                    commandOrigin: m,
                    sectionName: f,
                    source: h,
                    customId: b,
                    referrerId: N,
                    onConfirmActivityLaunchChecksAlertOpen: g
                }).then((e) => e && (null == s ? void 0 : s({ applicationId: t })));
            };
        case 1:
            return async () => {
                u.ZP.isLaunchingActivity() ||
                    (await (0, d.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: r,
                        analyticsLocations: j,
                        componentId: c,
                        sectionName: f,
                        source: h,
                        customId: b,
                        referrerId: N,
                        instanceId: void 0,
                        isContextlessActivity: !1
                    }).then((e) => e && (null == s ? void 0 : s({ applicationId: t }))));
            };
        case 2:
            return () => {
                u.ZP.isLaunchingActivity() ||
                    (null != E &&
                        a.leaveActivity({
                            location: E.location,
                            applicationId: t
                        }),
                    null == s || s({ applicationId: t }));
            };
    }
}
