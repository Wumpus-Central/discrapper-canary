"use strict";
n.d(t, { E: () => g });
var i = n(157559),
    r = n(627363),
    s = n(192552),
    a = n(395671),
    o = n(734057),
    l = n(71393),
    _ = n(576705),
    d = n(287809),
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
            inputApplication: A,
            analyticsLocations: I,
            launchingComponentId: p,
            sectionName: T,
            inviterUserId: S,
        } = e,
        N = c.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == g || e.launchId === g),
        ),
        O = A;
    if (null == O) {
        let e = await r.Ay.fetchApplication(n);
        O = a.Ay.createFromServer(e);
    }
    if (null == N || null == O) return;
    let R = d.default.getCurrentUser();
    async function C() {
        null != N &&
            (await (0, E.A)({
                applicationId: N.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: I,
                componentId: p,
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
            application: O,
            channelId: t,
            currentUser: R,
            isActivitiesEnabledForCurrentPlatform: (0, h.A)(),
            ChannelStore: o.A,
            VoiceStateStore: u.A,
            PermissionStore: _.A,
            GuildStore: l.A,
        }),
        handleCanJoin: C,
    });
}
