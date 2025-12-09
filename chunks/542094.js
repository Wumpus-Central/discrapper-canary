n.d(t, {
    JS: () => S,
    Qv: () => C,
    ZP: () => T,
    fD: () => A,
    w1: () => N,
}),
    n(997841),
    n(704826),
    n(35282);
var r = n(95015),
    i = n(493683),
    a = n(911969),
    o = n(906732),
    s = n(835473),
    l = n(48131),
    c = n(813370),
    u = n(358085),
    d = n(317381),
    f = n(638880),
    p = n(122613),
    _ = n(619915),
    m = n(16609),
    h = n(761122),
    g = n(361213),
    E = n(716600),
    b = n(952561),
    y = n(778569),
    O = n(701488),
    v = n(981631),
    S = (function (e) {
        return (e[(e.START = 0)] = "START"), (e[(e.JOIN = 1)] = "JOIN"), (e[(e.LEAVE = 2)] = "LEAVE"), e;
    })({});
let I = 250;
function T(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: r,
            onActivityItemSelected: i,
            embeddedActivitiesManager: o,
            assetNames: s = ["embedded_cover"],
            backgroundResolution: l = I,
            launchingComponentId: c,
            commandOrigin: d,
            source: f,
        } = e,
        { application: p, activity: m } = t,
        E = m.client_platform_config[(0, h.Z)((0, u.getOS)())],
        b = Date.now(),
        O =
            null != E.label_until &&
            b < Date.parse(E.label_until) &&
            null != E.label_from &&
            b > Date.parse(E.label_from),
        v = (0, y.Z)({
            applicationId: p.id,
            size: l,
            names: s,
            format: "webp",
        }),
        S = null != m.activity_preview_video_asset_id ? (0, g.Z)(p.id, m.activity_preview_video_asset_id) : null,
        T = (0, _.ZP)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
        }),
        P = C({
            context: n,
            applicationId: p.id,
        }),
        R = N({
            application: t.application,
            context: n,
            locationObject: r,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: i,
            launchingComponentId: c,
            commandOrigin: d,
            source: f,
        }),
        D = A(p, t.activity);
    return {
        imageBackground: v,
        videoUrl: S,
        joinableEmbeddedApp: T,
        activityAction: P,
        onActivityItemSelected: R,
        labelType: O ? E.label_type : a.ww.NONE,
        staffReleasePhase: D,
    };
}
function A(e, t) {
    var n;
    let i = null != (n = e.flags) ? n : 0;
    if (!((0, r.yE)(i, v.udG.EMBEDDED_RELEASED) || (0, r.yE)(i, v.udG.EMBEDDED_FIRST_PARTY))) return;
    let a = t.client_platform_config[(0, h.Z)((0, u.getOS)())].release_phase;
    return O.eB.includes(a) ? a.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function C(e) {
    let { context: t, applicationId: n, fetchesApplication: r = !0 } = e,
        i = 0,
        a = "channel" === t.type ? t.channel : void 0,
        o = (0, E.Z)(),
        l = (0, b.Z)({ fetchesApplication: r }),
        c = (0, s.q)(n, r),
        u = (0, _.ZP)(a).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
        });
    if (null == c) return i;
    let d = (0, m.p)(null == o ? void 0 : o.location);
    return null != a && d === a.id && (null == l ? void 0 : l.id) === c.id ? (i = 2) : null != u && (i = 1), i;
}
function N(e) {
    var t;
    let {
            application: n,
            botUserIdForAppDM: r,
            context: a,
            locationObject: s,
            embeddedActivitiesManager: u,
            onActivityItemSelectedProp: _,
            launchingComponentId: m,
            commandOrigin: h,
            sectionName: g,
            source: b,
            fetchesApplication: y = !0,
            customId: O,
            referrerId: v,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        I = null != (t = null == n ? void 0 : n.id) ? t : "",
        T = C({
            context: a,
            applicationId: I,
            fetchesApplication: y,
        }),
        { analyticsLocations: A } = (0, o.ZP)(),
        N = (0, E.Z)(),
        P = (0, c.A)(n);
    if (null == n)
        return () => {
            null == _ || _({ applicationId: "" });
        };
    switch (T) {
        case 0:
            return async () => {
                if (P) {
                    try {
                        await l.Z.launchFrame({ applicationId: I }), null == _ || _({ applicationId: I });
                    } catch (e) {}
                    return;
                }
                let e = "channel" === a.type ? a.channel.id : void 0;
                if (null != r)
                    try {
                        e = await i.Z.openPrivateChannel({
                            recipientIds: r,
                            navigateToChannel: !0,
                        });
                    } catch (e) {
                        return;
                    }
                await (0, p.Z)({
                    targetApplicationId: I,
                    locationObject: s,
                    channelId: e,
                    analyticsLocations: A,
                    componentId: m,
                    commandOrigin: h,
                    sectionName: g,
                    source: b,
                    customId: O,
                    referrerId: v,
                    onConfirmActivityLaunchChecksAlertOpen: S,
                }).then((e) => e && (null == _ ? void 0 : _({ applicationId: I })));
            };
        case 1:
            return async () => {
                d.ZP.isLaunchingActivity() ||
                    (await (0, f.Z)({
                        applicationId: I,
                        activityChannelId: "channel" === a.type ? a.channel.id : void 0,
                        locationObject: s,
                        analyticsLocations: A,
                        componentId: m,
                        sectionName: g,
                        source: b,
                        customId: O,
                        referrerId: v,
                    }).then((e) => e && (null == _ ? void 0 : _({ applicationId: I }))));
            };
        case 2:
            return () => {
                d.ZP.isLaunchingActivity() ||
                    (null != N &&
                        u.leaveActivity({
                            location: N.location,
                            applicationId: I,
                        }),
                    null == _ || _({ applicationId: I }));
            };
    }
}
