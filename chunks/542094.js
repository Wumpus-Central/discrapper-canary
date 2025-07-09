(n.d(t, {
    JS: () => P,
    Qv: () => I,
    ZP: () => w,
    fD: () => A,
    w1: () => S
}),
    n(997841),
    n(704826),
    n(35282));
var i,
    r = n(493683),
    l = n(911969),
    o = n(906732),
    a = n(835473),
    u = n(510839),
    c = n(813370),
    d = n(630388),
    s = n(358085),
    p = n(317381),
    f = n(638880),
    v = n(122613),
    b = n(619915),
    y = n(16609),
    m = n(761122),
    E = n(361213),
    g = n(716600),
    Z = n(952561),
    O = n(778569),
    h = n(701488),
    _ = n(981631),
    P = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function w(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: r, embeddedActivitiesManager: o, assetNames: a = ['embedded_cover'], backgroundResolution: u = 250, launchingComponentId: c, commandOrigin: d, source: p } = e,
        { application: f, activity: v } = t,
        y = v.client_platform_config[(0, m.Z)((0, s.getOS)())],
        g = Date.now(),
        Z = null != y.label_until && g < Date.parse(y.label_until) && null != y.label_from && g > Date.parse(y.label_from),
        h = (0, O.Z)({
            applicationId: f.id,
            size: u,
            names: a
        }),
        _ = null != v.activity_preview_video_asset_id ? (0, E.Z)(f.id, v.activity_preview_video_asset_id) : null,
        P = (0, b.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
        }),
        w = I({
            context: n,
            applicationId: f.id
        }),
        j = S({
            application: t.application,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: r,
            launchingComponentId: c,
            commandOrigin: d,
            source: p
        }),
        C = A(f, t.activity);
    return {
        imageBackground: h,
        videoUrl: _,
        joinableEmbeddedApp: P,
        activityAction: w,
        onActivityItemSelected: j,
        labelType: Z ? y.label_type : l.ww.NONE,
        staffReleasePhase: C
    };
}
function A(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, d.yE)(i, _.udG.EMBEDDED_RELEASED) || (0, d.yE)(i, _.udG.EMBEDDED_FIRST_PARTY))) return;
    let r = t.client_platform_config[(0, m.Z)((0, s.getOS)())].release_phase;
    return h.eB.includes(r) ? r.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function I(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        l = 'channel' === t.type ? t.channel : void 0,
        o = (0, g.Z)(),
        u = (0, Z.Z)({ fetchesApplication: i }),
        c = (0, a.q)(n, i),
        d = (0, b.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
        });
    if (null == c) return r;
    let s = (0, y.p)(null == o ? void 0 : o.location);
    return (null != l && s === l.id && (null == u ? void 0 : u.id) === c.id ? (r = 2) : null != d && (r = 1), r);
}
function S(e) {
    var t;
    let { application: n, botUserIdForAppDM: i, context: l, locationObject: a, embeddedActivitiesManager: d, onActivityItemSelectedProp: s, launchingComponentId: b, commandOrigin: y, sectionName: m, source: E, fetchesApplication: Z = !0, customId: O, referrerId: h, onConfirmActivityLaunchChecksAlertOpen: _ } = e,
        P = null != (t = null == n ? void 0 : n.id) ? t : '',
        w = I({
            context: l,
            applicationId: P,
            fetchesApplication: Z
        }),
        { analyticsLocations: A } = (0, o.ZP)(),
        S = (0, g.Z)();
    if (null == n)
        return () => {
            null == s || s({ applicationId: '' });
        };
    switch (w) {
        case 0:
            return async () => {
                if ((0, c.g)(n)) {
                    try {
                        ((0, u.s2)({ applicationId: P }), null == s || s({ applicationId: P }));
                    } catch (e) {}
                    return;
                }
                let e = 'channel' === l.type ? l.channel.id : void 0;
                if (null != i)
                    try {
                        e = await r.Z.openPrivateChannel({
                            recipientIds: i,
                            navigateToChannel: !0
                        });
                    } catch (e) {
                        return;
                    }
                await (0, v.Z)({
                    targetApplicationId: P,
                    locationObject: a,
                    channelId: e,
                    analyticsLocations: A,
                    componentId: b,
                    commandOrigin: y,
                    sectionName: m,
                    source: E,
                    customId: O,
                    referrerId: h,
                    onConfirmActivityLaunchChecksAlertOpen: _
                }).then((e) => e && (null == s ? void 0 : s({ applicationId: P })));
            };
        case 1:
            return async () => {
                p.ZP.isLaunchingActivity() ||
                    (await (0, f.Z)({
                        applicationId: P,
                        activityChannelId: 'channel' === l.type ? l.channel.id : void 0,
                        locationObject: a,
                        analyticsLocations: A,
                        componentId: b,
                        sectionName: m,
                        source: E,
                        customId: O,
                        referrerId: h
                    }).then((e) => e && (null == s ? void 0 : s({ applicationId: P }))));
            };
        case 2:
            return () => {
                p.ZP.isLaunchingActivity() ||
                    (null != S &&
                        d.leaveActivity({
                            location: S.location,
                            applicationId: P
                        }),
                    null == s || s({ applicationId: P }));
            };
    }
}
