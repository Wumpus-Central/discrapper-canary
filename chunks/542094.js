n.d(t, {
    JS: () => I,
    Qv: () => C,
    ZP: () => S,
    fD: () => A,
    w1: () => N,
}),
    n(997841),
    n(704826),
    n(35282);
var r = n(493683),
    i = n(911969),
    a = n(906732),
    o = n(835473),
    s = n(48131),
    l = n(813370),
    c = n(630388),
    u = n(358085),
    d = n(317381),
    f = n(638880),
    _ = n(122613),
    p = n(619915),
    h = n(16609),
    m = n(761122),
    g = n(361213),
    E = n(716600),
    b = n(952561),
    y = n(778569),
    O = n(701488),
    v = n(981631),
    I = (function (e) {
        return (e[(e.START = 0)] = "START"), (e[(e.JOIN = 1)] = "JOIN"), (e[(e.LEAVE = 2)] = "LEAVE"), e;
    })({});
let T = 250;
function S(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: r,
            onActivityItemSelected: a,
            embeddedActivitiesManager: o,
            assetNames: s = ["embedded_cover"],
            backgroundResolution: l = T,
            launchingComponentId: c,
            commandOrigin: d,
            source: f,
        } = e,
        { application: _, activity: h } = t,
        E = h.client_platform_config[(0, m.Z)((0, u.getOS)())],
        b = Date.now(),
        O =
            null != E.label_until &&
            b < Date.parse(E.label_until) &&
            null != E.label_from &&
            b > Date.parse(E.label_from),
        v = (0, y.Z)({
            applicationId: _.id,
            size: l,
            names: s,
        }),
        I = null != h.activity_preview_video_asset_id ? (0, g.Z)(_.id, h.activity_preview_video_asset_id) : null,
        S = (0, p.ZP)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return _.id === t.applicationId;
        }),
        R = C({
            context: n,
            applicationId: _.id,
        }),
        P = N({
            application: t.application,
            context: n,
            locationObject: r,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: a,
            launchingComponentId: c,
            commandOrigin: d,
            source: f,
        }),
        D = A(_, t.activity);
    return {
        imageBackground: v,
        videoUrl: I,
        joinableEmbeddedApp: S,
        activityAction: R,
        onActivityItemSelected: P,
        labelType: O ? E.label_type : i.ww.NONE,
        staffReleasePhase: D,
    };
}
function A(e, t) {
    var n;
    let r = null != (n = e.flags) ? n : 0;
    if (!((0, c.yE)(r, v.udG.EMBEDDED_RELEASED) || (0, c.yE)(r, v.udG.EMBEDDED_FIRST_PARTY))) return;
    let i = t.client_platform_config[(0, m.Z)((0, u.getOS)())].release_phase;
    return O.eB.includes(i) ? i.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function C(e) {
    let { context: t, applicationId: n, fetchesApplication: r = !0 } = e,
        i = 0,
        a = "channel" === t.type ? t.channel : void 0,
        s = (0, E.Z)(),
        l = (0, b.Z)({ fetchesApplication: r }),
        c = (0, o.q)(n, r),
        u = (0, p.ZP)(a).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
        });
    if (null == c) return i;
    let d = (0, h.p)(null == s ? void 0 : s.location);
    return null != a && d === a.id && (null == l ? void 0 : l.id) === c.id ? (i = 2) : null != u && (i = 1), i;
}
function N(e) {
    var t;
    let {
            application: n,
            botUserIdForAppDM: i,
            context: o,
            locationObject: c,
            embeddedActivitiesManager: u,
            onActivityItemSelectedProp: p,
            launchingComponentId: h,
            commandOrigin: m,
            sectionName: g,
            source: b,
            fetchesApplication: y = !0,
            customId: O,
            referrerId: v,
            onConfirmActivityLaunchChecksAlertOpen: I,
        } = e,
        T = null != (t = null == n ? void 0 : n.id) ? t : "",
        S = C({
            context: o,
            applicationId: T,
            fetchesApplication: y,
        }),
        { analyticsLocations: A } = (0, a.ZP)(),
        N = (0, E.Z)(),
        R = (0, l.A)(n);
    if (null == n)
        return () => {
            null == p || p({ applicationId: "" });
        };
    switch (S) {
        case 0:
            return async () => {
                if (R) {
                    try {
                        await s.Z.launchFrame({ applicationId: T }), null == p || p({ applicationId: T });
                    } catch (e) {}
                    return;
                }
                let e = "channel" === o.type ? o.channel.id : void 0;
                if (null != i)
                    try {
                        e = await r.Z.openPrivateChannel({
                            recipientIds: i,
                            navigateToChannel: !0,
                        });
                    } catch (e) {
                        return;
                    }
                await (0, _.Z)({
                    targetApplicationId: T,
                    locationObject: c,
                    channelId: e,
                    analyticsLocations: A,
                    componentId: h,
                    commandOrigin: m,
                    sectionName: g,
                    source: b,
                    customId: O,
                    referrerId: v,
                    onConfirmActivityLaunchChecksAlertOpen: I,
                }).then((e) => e && (null == p ? void 0 : p({ applicationId: T })));
            };
        case 1:
            return async () => {
                d.ZP.isLaunchingActivity() ||
                    (await (0, f.Z)({
                        applicationId: T,
                        activityChannelId: "channel" === o.type ? o.channel.id : void 0,
                        locationObject: c,
                        analyticsLocations: A,
                        componentId: h,
                        sectionName: g,
                        source: b,
                        customId: O,
                        referrerId: v,
                    }).then((e) => e && (null == p ? void 0 : p({ applicationId: T }))));
            };
        case 2:
            return () => {
                d.ZP.isLaunchingActivity() ||
                    (null != N &&
                        u.leaveActivity({
                            location: N.location,
                            applicationId: T,
                        }),
                    null == p || p({ applicationId: T }));
            };
    }
}
