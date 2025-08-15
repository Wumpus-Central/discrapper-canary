n.d(t, {
    JS: () => g,
    Qv: () => D,
    ZP: () => P,
    fD: () => C,
    w1: () => y,
}),
    n(997841),
    n(704826),
    n(35282);
var r,
    i = n(493683),
    l = n(911969),
    a = n(906732),
    o = n(835473),
    c = n(510839),
    s = n(813370),
    u = n(630388),
    d = n(358085),
    _ = n(317381),
    E = n(638880),
    I = n(122613),
    T = n(619915),
    O = n(16609),
    p = n(761122),
    N = n(361213),
    f = n(716600),
    S = n(952561),
    m = n(778569),
    R = n(701488),
    A = n(981631),
    g = (((r = {})[(r.START = 0)] = "START"), (r[(r.JOIN = 1)] = "JOIN"), (r[(r.LEAVE = 2)] = "LEAVE"), r);
function P(e) {
    let {
            activityItem: t,
            context: n,
            locationObject: r,
            onActivityItemSelected: i,
            embeddedActivitiesManager: a,
            assetNames: o = ["embedded_cover"],
            backgroundResolution: c = 250,
            launchingComponentId: s,
            commandOrigin: u,
            source: _,
        } = e,
        { application: E, activity: I } = t,
        O = I.client_platform_config[(0, p.Z)((0, d.getOS)())],
        f = Date.now(),
        S =
            null != O.label_until &&
            f < Date.parse(O.label_until) &&
            null != O.label_from &&
            f > Date.parse(O.label_from),
        R = (0, m.Z)({
            applicationId: E.id,
            size: c,
            names: o,
        }),
        A = null != I.activity_preview_video_asset_id ? (0, N.Z)(E.id, I.activity_preview_video_asset_id) : null,
        g = (0, T.ZP)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return E.id === t.applicationId;
        }),
        P = D({
            context: n,
            applicationId: E.id,
        }),
        h = y({
            application: t.application,
            context: n,
            locationObject: r,
            embeddedActivitiesManager: a,
            onActivityItemSelectedProp: i,
            launchingComponentId: s,
            commandOrigin: u,
            source: _,
        }),
        b = C(E, t.activity);
    return {
        imageBackground: R,
        videoUrl: A,
        joinableEmbeddedApp: g,
        activityAction: P,
        onActivityItemSelected: h,
        labelType: S ? O.label_type : l.ww.NONE,
        staffReleasePhase: b,
    };
}
function C(e, t) {
    var n;
    let r = null != (n = e.flags) ? n : 0;
    if (!((0, u.yE)(r, A.udG.EMBEDDED_RELEASED) || (0, u.yE)(r, A.udG.EMBEDDED_FIRST_PARTY))) return;
    let i = t.client_platform_config[(0, p.Z)((0, d.getOS)())].release_phase;
    return R.eB.includes(i) ? i.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function D(e) {
    let { context: t, applicationId: n, fetchesApplication: r = !0 } = e,
        i = 0,
        l = "channel" === t.type ? t.channel : void 0,
        a = (0, f.Z)(),
        c = (0, S.Z)({ fetchesApplication: r }),
        s = (0, o.q)(n, r),
        u = (0, T.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != s && s.id === t.applicationId;
        });
    if (null == s) return i;
    let d = (0, O.p)(null == a ? void 0 : a.location);
    return null != l && d === l.id && (null == c ? void 0 : c.id) === s.id ? (i = 2) : null != u && (i = 1), i;
}
function y(e) {
    var t;
    let {
            application: n,
            botUserIdForAppDM: r,
            context: l,
            locationObject: o,
            embeddedActivitiesManager: u,
            onActivityItemSelectedProp: d,
            launchingComponentId: T,
            commandOrigin: O,
            sectionName: p,
            source: N,
            fetchesApplication: S = !0,
            customId: m,
            referrerId: R,
            onConfirmActivityLaunchChecksAlertOpen: A,
        } = e,
        g = null != (t = null == n ? void 0 : n.id) ? t : "",
        P = D({
            context: l,
            applicationId: g,
            fetchesApplication: S,
        }),
        { analyticsLocations: C } = (0, a.ZP)(),
        y = (0, f.Z)(),
        h = (0, s.A)(n);
    if (null == n)
        return () => {
            null == d || d({ applicationId: "" });
        };
    switch (P) {
        case 0:
            return async () => {
                if (h) {
                    try {
                        (0, c.s2)({ applicationId: g }), null == d || d({ applicationId: g });
                    } catch (e) {}
                    return;
                }
                let e = "channel" === l.type ? l.channel.id : void 0;
                if (null != r)
                    try {
                        e = await i.Z.openPrivateChannel({
                            recipientIds: r,
                            navigateToChannel: !0,
                        });
                    } catch (e) {
                        return;
                    }
                await (0, I.Z)({
                    targetApplicationId: g,
                    locationObject: o,
                    channelId: e,
                    analyticsLocations: C,
                    componentId: T,
                    commandOrigin: O,
                    sectionName: p,
                    source: N,
                    customId: m,
                    referrerId: R,
                    onConfirmActivityLaunchChecksAlertOpen: A,
                }).then((e) => e && (null == d ? void 0 : d({ applicationId: g })));
            };
        case 1:
            return async () => {
                _.ZP.isLaunchingActivity() ||
                    (await (0, E.Z)({
                        applicationId: g,
                        activityChannelId: "channel" === l.type ? l.channel.id : void 0,
                        locationObject: o,
                        analyticsLocations: C,
                        componentId: T,
                        sectionName: p,
                        source: N,
                        customId: m,
                        referrerId: R,
                    }).then((e) => e && (null == d ? void 0 : d({ applicationId: g }))));
            };
        case 2:
            return () => {
                _.ZP.isLaunchingActivity() ||
                    (null != y &&
                        u.leaveActivity({
                            location: y.location,
                            applicationId: g,
                        }),
                    null == d || d({ applicationId: g }));
            };
    }
}
