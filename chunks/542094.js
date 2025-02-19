n.d(t, {
    JS: () => Z,
    Qv: () => E,
    ZP: () => j,
    fD: () => P,
    w1: () => S
}),
    n(789020),
    n(757143),
    n(301563);
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
    g = n(716600),
    O = n(952561),
    h = n(778569),
    m = n(701488),
    w = n(981631),
    Z = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function j(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: r, embeddedActivitiesManager: o, assetNames: c = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: d, commandOrigin: p, source: s } = e,
        { application: v, activity: g } = t,
        O = g.client_platform_config[(0, b.Z)((0, u.getOS)())],
        m = null != O.label_until && Date.now() < Date.parse(O.label_until),
        w = (0, h.Z)({
            applicationId: v.id,
            size: a,
            names: c
        }),
        Z = null != g.activity_preview_video_asset_id ? (0, y.Z)(v.id, g.activity_preview_video_asset_id) : null,
        j = (0, f.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return v.id === t.applicationId;
        }),
        _ = E({
            context: n,
            applicationId: v.id
        }),
        A = S({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: r,
            launchingComponentId: d,
            commandOrigin: p,
            source: s
        }),
        C = P(v, t.activity);
    return {
        imageBackground: w,
        videoUrl: Z,
        joinableEmbeddedApp: j,
        activityAction: _,
        onActivityItemSelected: A,
        labelType: m ? O.label_type : l.ww.NONE,
        staffReleasePhase: C
    };
}
function P(e, t) {
    var n;
    let i = null !== (n = e.flags) && void 0 !== n ? n : 0;
    if (!((0, a.yE)(i, w.udG.EMBEDDED_RELEASED) || (0, a.yE)(i, w.udG.EMBEDDED_FIRST_PARTY))) return;
    let r = t.client_platform_config[(0, b.Z)((0, u.getOS)())].release_phase;
    return m.eB.includes(r) ? r.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function E(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        l = 'channel' === t.type ? t.channel : void 0,
        o = (0, g.Z)(),
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
function S(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: l, embeddedActivitiesManager: c, onActivityItemSelectedProp: a, launchingComponentId: u, commandOrigin: f, sectionName: v, source: b, fetchesApplication: y = !0, customId: O, referrerId: h } = e,
        m = E({
            context: i,
            applicationId: t,
            fetchesApplication: y
        }),
        { analyticsLocations: w } = (0, o.ZP)(),
        Z = (0, g.Z)();
    switch (m) {
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
                    analyticsLocations: w,
                    componentId: u,
                    commandOrigin: f,
                    sectionName: v,
                    source: b,
                    customId: O,
                    referrerId: h
                }).then((e) => e && (null == a ? void 0 : a({ applicationId: t })));
            };
        case 1:
            return async () => {
                d.ZP.isLaunchingActivity() ||
                    (await (0, p.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: l,
                        analyticsLocations: w,
                        componentId: u,
                        sectionName: v,
                        source: b,
                        customId: O,
                        referrerId: h
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
