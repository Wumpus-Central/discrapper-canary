n.d(t, {
    JS: function () {
        return i;
    },
    Qv: function () {
        return C;
    },
    ZP: function () {
        return w;
    },
    fD: function () {
        return b;
    },
    w1: function () {
        return I;
    }
}),
    n(789020),
    n(757143);
var i,
    l,
    r = n(493683),
    o = n(911969),
    a = n(906732),
    u = n(835473),
    c = n(630388),
    d = n(358085),
    f = n(317381),
    s = n(638880),
    p = n(122613),
    v = n(619915),
    h = n(16609),
    g = n(761122),
    Z = n(361213),
    m = n(716600),
    y = n(952561),
    _ = n(778569),
    E = n(701488),
    A = n(981631);
((l = i || (i = {}))[(l.START = 0)] = 'START'), (l[(l.JOIN = 1)] = 'JOIN'), (l[(l.LEAVE = 2)] = 'LEAVE');
function w(e) {
    let { activityItem: t, context: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: r, assetNames: a = ['embedded_cover'], backgroundResolution: u = 250, launchingComponentId: c, commandOrigin: f, source: s } = e,
        { application: p, activity: h } = t,
        m = h.client_platform_config[(0, g.Z)((0, d.getOS)())],
        y = null != m.label_until && Date.now() < Date.parse(m.label_until),
        E = (0, _.Z)({
            applicationId: p.id,
            size: u,
            names: a
        }),
        A = null != h.activity_preview_video_asset_id ? (0, Z.Z)(p.id, h.activity_preview_video_asset_id) : null,
        w = (0, v.ZP)('channel' === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
        }),
        S = C({
            context: n,
            applicationId: p.id
        }),
        x = I({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: f,
            source: s
        }),
        L = b(p, t.activity);
    return {
        imageBackground: E,
        videoUrl: A,
        joinableEmbeddedApp: w,
        activityAction: S,
        onActivityItemSelected: x,
        labelType: y ? m.label_type : o.ww.NONE,
        staffReleasePhase: L
    };
}
function b(e, t) {
    var n;
    let i = null !== (n = e.flags) && void 0 !== n ? n : 0;
    if (!((0, c.yE)(i, A.udG.EMBEDDED_RELEASED) || (0, c.yE)(i, A.udG.EMBEDDED_FIRST_PARTY))) return;
    let l = t.client_platform_config[(0, g.Z)((0, d.getOS)())].release_phase;
    return E.eB.includes(l) ? l.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function C(e) {
    let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        r = 'channel' === t.type ? t.channel : void 0,
        o = (0, m.Z)(),
        a = (0, y.Z)({ fetchesApplication: i }),
        c = (0, u.q)(n, i),
        d = (0, v.ZP)(r).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
        });
    if (null == c) return l;
    let f = (0, h.p)(null == o ? void 0 : o.location);
    return null != r && f === r.id && (null == a ? void 0 : a.id) === c.id ? (l = 2) : null != d && (l = 1), l;
}
function I(e) {
    let { applicationId: t, botUserIdForAppDM: n, context: i, locationObject: l, embeddedActivitiesManager: o, onActivityItemSelectedProp: u, launchingComponentId: c, commandOrigin: d, sectionName: v, source: h, fetchesApplication: g = !0 } = e,
        Z = C({
            context: i,
            applicationId: t,
            fetchesApplication: g
        }),
        { analyticsLocations: y } = (0, a.ZP)(),
        _ = (0, m.Z)();
    switch (Z) {
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
                    locationObject: l,
                    channelId: e,
                    analyticsLocations: y,
                    componentId: c,
                    commandOrigin: d,
                    sectionName: v,
                    source: h
                }).then((e) => e && (null == u ? void 0 : u({ applicationId: t })));
            };
        case 1:
            return async () => {
                !f.ZP.isLaunchingActivity() &&
                    (await (0, s.Z)({
                        applicationId: t,
                        activityChannelId: 'channel' === i.type ? i.channel.id : void 0,
                        locationObject: l,
                        analyticsLocations: y,
                        componentId: c,
                        sectionName: v,
                        source: h
                    }).then((e) => e && (null == u ? void 0 : u({ applicationId: t }))));
            };
        case 2:
            return () => {
                !f.ZP.isLaunchingActivity() &&
                    (null != _ &&
                        o.leaveActivity({
                            location: _.location,
                            applicationId: t
                        }),
                    null == u || u({ applicationId: t }));
            };
    }
}
