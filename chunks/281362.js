"use strict";
n.d(t, { E: () => g });
var i = n(157559),
    r = n(627363),
    s = n(192552),
    a = n(395671),
    o = n(734057),
    l = n(71393),
    d = n(576705),
    _ = n(287809),
    u = n(977997),
    c = n(933958),
    E = n(62583),
    h = n(170148),
    m = n(550151),
    f = n(985018);
async function g(e) {
    let {
            channelId: t,
            applicationId: n,
            launchId: g,
            inputApplication: p,
            analyticsLocations: A,
            launchingComponentId: I,
            sectionName: T,
            inviterUserId: S,
        } = e,
        N = c.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == g || e.launchId === g),
        ),
        C = p;
    if (null == C) {
        let e = await r.Ay.fetchApplication(n);
        C = a.Ay.createFromServer(e);
    }
    if (null == N || null == C) return;
    let R = _.default.getCurrentUser();
    async function O() {
        null != N &&
            (await (0, E.A)({
                applicationId: N.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: A,
                componentId: I,
                sectionName: T,
                inviterUserId: S,
            }));
    }
    !(function (e) {
        let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
        switch (t) {
            case m.Gy.CAN_JOIN:
                n?.();
                break;
            case m.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, s.i)();
                break;
            case m.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                i.A.show({ title: f.intl.string(f.t.PtobXW), body: f.intl.string(f.t.UXoQTp), hideActionSheet: !1 });
                break;
            case m.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                i.A.show({ title: f.intl.string(f.t.PtobXW), body: f.intl.string(f.t.uGDCcw), hideActionSheet: !1 });
                break;
            case m.Gy.ACTIVITY_AGE_GATED:
                i.A.show({ title: f.intl.string(f.t.PtobXW), body: f.intl.string(f.t["4WuFRE"]), hideActionSheet: !1 });
                break;
            case m.Gy.NO_CHANNEL_CONNECT_PERMISSION:
            case m.Gy.CHANNEL_FULL:
            case m.Gy.NO_CHANNEL:
            case m.Gy.NO_USER:
                i.A.show({ title: f.intl.string(f.t.PtobXW), body: f.intl.string(f.t.FUCQco), hideActionSheet: !1 });
        }
    })({
        embeddedActivityJoinability: (0, m.Ay)({
            userId: R?.id,
            application: C,
            channelId: t,
            currentUser: R,
            isActivitiesEnabledForCurrentPlatform: (0, h.A)(),
            ChannelStore: o.A,
            VoiceStateStore: u.A,
            PermissionStore: d.A,
            GuildStore: l.A,
        }),
        handleCanJoin: O,
    });
}
