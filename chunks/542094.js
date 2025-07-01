(n.d(t, {
    JS: () => h,
    Qv: () => w,
    ZP: () => P,
    fD: () => _,
    w1: () => A
}),
    n(997841),
    n(704826),
    n(35282));
var i,
    r = n(493683),
    l = n(911969),
    o = n(906732),
    u = n(835473),
    a = n(630388),
    c = n(358085),
    d = n(317381),
    s = n(638880),
    p = n(122613),
    f = n(619915),
    v = n(16609),
    y = n(761122),
    b = n(361213),
    m = n(716600),
    E = n(952561),
    Z = n(778569),
    O = n(701488),
    g = n(981631),
    h = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function P(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: r, embeddedActivitiesManager: o, assetNames: u = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: d, commandOrigin: s, source: p } = e,
        { application: v, activity: m } = t,
        E = m.client_platform_config[(0, y.Z)((0, c.getOS)())],
        O = null != E.label_until && Date.now() < Date.parse(E.label_until),
        g = (0, Z.Z)({
            applicationId: v.id,
            size: a,
            names: u
        }),
        h = null != m.activity_preview_video_asset_id ? (0, b.Z)(v.id, m.activity_preview_video_asset_id) : null,
        P = (0, f.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return v.id === t.applicationId;
        }),
        I = w({
            context: n,
            applicationId: v.id
        }),
        S = A({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: r,
            launchingComponentId: d,
            commandOrigin: s,
            source: p
        }),
        j = _(v, t.activity);
    return {
        imageBackground: g,
        videoUrl: h,
        joinableEmbeddedApp: P,
        activityAction: I,
        onActivityItemSelected: S,
        labelType: O ? E.label_type : l.ww.NONE,
        staffReleasePhase: j
    };
}
function _(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, a.yE)(i, g.udG.EMBEDDED_RELEASED) || (0, a.yE)(i, g.udG.EMBEDDED_FIRST_PARTY))) return;
    let r = t.client_platform_config[(0, y.Z)((0, c.getOS)())].release_phase;
    return O.eB.includes(r) ? r.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function w(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        l = 'channel' === t.type ? t.channel : void 0,
        o = (0, m.Z)(),
        a = (0, E.Z)({ fetchesApplication: i }),
        c = (0, u.q)(n, i),
        d = (0, f.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
        });
    if (null == c) return r;
    let s = (0, v.p)(null == o ? void 0 : o.location);
    return (null != l && s === l.id && (null == a ? void 0 : a.id) === c.id ? (r = 2) : null != d && (r = 1), r);
}
function A(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: l, embeddedActivitiesManager: u, onActivityItemSelectedProp: a, launchingComponentId: c, commandOrigin: f, sectionName: v, source: y, fetchesApplication: b = !0, customId: E, referrerId: Z, onConfirmActivityLaunchChecksAlertOpen: O } = e,
        g = w({
            context: i,
            applicationId: t,
            fetchesApplication: b
        }),
        { analyticsLocations: h } = (0, o.ZP)(),
        P = (0, m.Z)();
    switch (g) {
        case 0:
            return async () => {
                let e = 'channel' === i.type ? i.channel.id : void 0;
                if (null != n)
                    try {
                        e = await r.Z.openPrivateChannel({
                            recipientIds: n,
                            navigateToChannel: !0
                        });
                    } catch (e) {
                        return;
                    }
                await (0, p.Z)({
                    targetApplicationId: t,
                    locationObject: l,
                    channelId: e,
                    analyticsLocations: h,
                    componentId: c,
                    commandOrigin: f,
                    sectionName: v,
                    source: y,
                    customId: E,
                    referrerId: Z,
                    onConfirmActivityLaunchChecksAlertOpen: O
                }).then((e) => e && (null == a ? void 0 : a({ applicationId: t })));
            };
        case 1:
            return async () => {
                d.ZP.isLaunchingActivity() ||
                    (await (0, s.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: l,
                        analyticsLocations: h,
                        componentId: c,
                        sectionName: v,
                        source: y,
                        customId: E,
                        referrerId: Z
                    }).then((e) => e && (null == a ? void 0 : a({ applicationId: t }))));
            };
        case 2:
            return () => {
                d.ZP.isLaunchingActivity() ||
                    (null != P &&
                        u.leaveActivity({
                            location: P.location,
                            applicationId: t
                        }),
                    null == a || a({ applicationId: t }));
            };
    }
}
