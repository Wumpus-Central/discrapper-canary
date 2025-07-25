(n.d(t, {
    JS: () => _,
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
    u = n(835473),
    a = n(510839),
    c = n(813370),
    d = n(630388),
    s = n(358085),
    p = n(317381),
    f = n(638880),
    v = n(122613),
    y = n(619915),
    b = n(16609),
    m = n(761122),
    E = n(361213),
    O = n(716600),
    Z = n(952561),
    h = n(778569),
    g = n(701488),
    P = n(981631),
    _ = (((i = {})[(i.START = 0)] = 'START'), (i[(i.JOIN = 1)] = 'JOIN'), (i[(i.LEAVE = 2)] = 'LEAVE'), i);
function w(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: r, embeddedActivitiesManager: o, assetNames: u = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: c, commandOrigin: d, source: p } = e,
        { application: f, activity: v } = t,
        b = v.client_platform_config[(0, m.Z)((0, s.getOS)())],
        O = Date.now(),
        Z = null != b.label_until && O < Date.parse(b.label_until) && null != b.label_from && O > Date.parse(b.label_from),
        g = (0, h.Z)({
            applicationId: f.id,
            size: a,
            names: u
        }),
        P = null != v.activity_preview_video_asset_id ? (0, E.Z)(f.id, v.activity_preview_video_asset_id) : null,
        _ = (0, y.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
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
        D = A(f, t.activity);
    return {
        imageBackground: g,
        videoUrl: P,
        joinableEmbeddedApp: _,
        activityAction: w,
        onActivityItemSelected: j,
        labelType: Z ? b.label_type : l.ww.NONE,
        staffReleasePhase: D
    };
}
function A(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, d.yE)(i, P.udG.EMBEDDED_RELEASED) || (0, d.yE)(i, P.udG.EMBEDDED_FIRST_PARTY))) return;
    let r = t.client_platform_config[(0, m.Z)((0, s.getOS)())].release_phase;
    return g.eB.includes(r) ? r.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function I(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        r = 0,
        l = 'channel' === t.type ? t.channel : void 0,
        o = (0, O.Z)(),
        a = (0, Z.Z)({ fetchesApplication: i }),
        c = (0, u.q)(n, i),
        d = (0, y.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
        });
    if (null == c) return r;
    let s = (0, b.p)(null == o ? void 0 : o.location);
    return (null != l && s === l.id && (null == a ? void 0 : a.id) === c.id ? (r = 2) : null != d && (r = 1), r);
}
function S(e) {
    var t;
    let { application: n, botUserIdForAppDM: i, context: l, locationObject: u, embeddedActivitiesManager: d, onActivityItemSelectedProp: s, launchingComponentId: y, commandOrigin: b, sectionName: m, source: E, fetchesApplication: Z = !0, customId: h, referrerId: g, onConfirmActivityLaunchChecksAlertOpen: P } = e,
        _ = null != (t = null == n ? void 0 : n.id) ? t : '',
        w = I({
            context: l,
            applicationId: _,
            fetchesApplication: Z
        }),
        { analyticsLocations: A } = (0, o.ZP)(),
        S = (0, O.Z)(),
        j = (0, c.A)(n);
    if (null == n)
        return () => {
            null == s || s({ applicationId: '' });
        };
    switch (w) {
        case 0:
            return async () => {
                if (j) {
                    try {
                        ((0, a.s2)({ applicationId: _ }), null == s || s({ applicationId: _ }));
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
                    targetApplicationId: _,
                    locationObject: u,
                    channelId: e,
                    analyticsLocations: A,
                    componentId: y,
                    commandOrigin: b,
                    sectionName: m,
                    source: E,
                    customId: h,
                    referrerId: g,
                    onConfirmActivityLaunchChecksAlertOpen: P
                }).then((e) => e && (null == s ? void 0 : s({ applicationId: _ })));
            };
        case 1:
            return async () => {
                p.ZP.isLaunchingActivity() ||
                    (await (0, f.Z)({
                        applicationId: _,
                        activityChannelId: 'channel' === l.type ? l.channel.id : void 0,
                        locationObject: u,
                        analyticsLocations: A,
                        componentId: y,
                        sectionName: m,
                        source: E,
                        customId: h,
                        referrerId: g
                    }).then((e) => e && (null == s ? void 0 : s({ applicationId: _ }))));
            };
        case 2:
            return () => {
                p.ZP.isLaunchingActivity() ||
                    (null != S &&
                        d.leaveActivity({
                            location: S.location,
                            applicationId: _
                        }),
                    null == s || s({ applicationId: _ }));
            };
    }
}
