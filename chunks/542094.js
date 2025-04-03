n.d(t, {
    JS: () => h,
    Qv: () => _,
    ZP: () => Z,
    fD: () => w,
    w1: () => A
}),
    n(789020),
    n(757143),
    n(301563);
var i,
    r = n(493683),
    o = n(911969),
    l = n(906732),
    c = n(835473),
    a = n(630388),
    u = n(358085),
    d = n(317381),
    s = n(638880),
    p = n(122613),
    f = n(619915),
    v = n(16609),
    b = n(761122),
    y = n(361213),
    m = n(716600),
    E = n(952561),
    O = n(778569),
    g = n(701488),
    P = n(981631),
    h = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function Z(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: r, embeddedActivitiesManager: l, assetNames: c = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: d, commandOrigin: s, source: p } = e,
        { application: v, activity: m } = t,
        E = m.client_platform_config[(0, b.Z)((0, u.getOS)())],
        g = null != E.label_until && Date.now() < Date.parse(E.label_until),
        P = (0, O.Z)({
            applicationId: v.id,
            size: a,
            names: c
        }),
        h = null != m.activity_preview_video_asset_id ? (0, y.Z)(v.id, m.activity_preview_video_asset_id) : null,
        Z = (0, f.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return v.id === t.applicationId;
        }),
        I = _({
            context: n,
            applicationId: v.id
        }),
        j = A({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: l,
            onActivityItemSelectedProp: r,
            launchingComponentId: d,
            commandOrigin: s,
            source: p
        }),
        S = w(v, t.activity);
    return {
        imageBackground: P,
        videoUrl: h,
        joinableEmbeddedApp: Z,
        activityAction: I,
        onActivityItemSelected: j,
        labelType: g ? E.label_type : o.ww.NONE,
        staffReleasePhase: S
    };
}
function w(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, a.yE)(i, P.udG.EMBEDDED_RELEASED) || (0, a.yE)(i, P.udG.EMBEDDED_FIRST_PARTY))) return;
    let r = t.client_platform_config[(0, b.Z)((0, u.getOS)())].release_phase;
    return g.eB.includes(r) ? r.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function _(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        o = 'channel' === t.type ? t.channel : void 0,
        l = (0, m.Z)(),
        a = (0, E.Z)({ fetchesApplication: i }),
        u = (0, c.q)(n, i),
        d = (0, f.ZP)(o).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
        });
    if (null == u) return r;
    let s = (0, v.pY)(null == l ? void 0 : l.location);
    return null != o && s === o.id && (null == a ? void 0 : a.id) === u.id ? (r = 2) : null != d && (r = 1), r;
}
function A(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: o, embeddedActivitiesManager: c, onActivityItemSelectedProp: a, launchingComponentId: u, commandOrigin: f, sectionName: v, source: b, fetchesApplication: y = !0, customId: E, referrerId: O, onConfirmActivityLaunchChecksAlertOpen: g } = e,
        P = _({
            context: i,
            applicationId: t,
            fetchesApplication: y
        }),
        { analyticsLocations: h } = (0, l.ZP)(),
        Z = (0, m.Z)();
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
                    locationObject: o,
                    channelId: e,
                    analyticsLocations: h,
                    componentId: u,
                    commandOrigin: f,
                    sectionName: v,
                    source: b,
                    customId: E,
                    referrerId: O,
                    onConfirmActivityLaunchChecksAlertOpen: g
                }).then((e) => e && (null == a ? void 0 : a({ applicationId: t })));
            };
        case 1:
            return async () => {
                d.ZP.isLaunchingActivity() ||
                    (await (0, s.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: o,
                        analyticsLocations: h,
                        componentId: u,
                        sectionName: v,
                        source: b,
                        customId: E,
                        referrerId: O,
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
