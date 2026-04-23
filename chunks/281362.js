"use strict";
n.d(t, { E: () => m });
var r = n(157559),
    i = n(627363),
    s = n(192552),
    a = n(611010),
    o = n(734057),
    l = n(71393),
    u = n(576705),
    c = n(287809),
    d = n(977997),
    _ = n(933958),
    f = n(447031),
    p = n(170148),
    h = n(550151),
    E = n(985018);
async function m(e) {
    let {
            channelId: t,
            applicationId: n,
            launchId: m,
            inputApplication: g,
            analyticsLocations: A,
            launchingComponentId: I,
            sectionName: T,
            inviterUserId: S,
        } = e,
        y = _.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == m || e.launchId === m),
        ),
        N = g;
    if (null == N) {
        let e = await i.Ay.fetchApplication(n);
        N = a.Ay.createFromServer(e);
    }
    if (null == y || null == N) return;
    let v = c.default.getCurrentUser();
    async function C() {
        null != y &&
            (await (0, f.A)({
                applicationId: y.applicationId,
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
            case h.Gy.CAN_JOIN:
                n?.();
                break;
            case h.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, s.i)();
                break;
            case h.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                r.A.show({ title: E.intl.string(E.t.PtobXW), body: E.intl.string(E.t.UXoQTp), hideActionSheet: !1 });
                break;
            case h.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                r.A.show({ title: E.intl.string(E.t.PtobXW), body: E.intl.string(E.t.uGDCcw), hideActionSheet: !1 });
                break;
            case h.Gy.ACTIVITY_AGE_GATED:
                r.A.show({ title: E.intl.string(E.t.PtobXW), body: E.intl.string(E.t["4WuFRE"]), hideActionSheet: !1 });
                break;
            case h.Gy.NO_CHANNEL_CONNECT_PERMISSION:
            case h.Gy.CHANNEL_FULL:
            case h.Gy.NO_CHANNEL:
            case h.Gy.NO_USER:
                r.A.show({ title: E.intl.string(E.t.PtobXW), body: E.intl.string(E.t.FUCQco), hideActionSheet: !1 });
        }
    })({
        embeddedActivityJoinability: (0, h.Ay)({
            userId: v?.id,
            application: N,
            channelId: t,
            currentUser: v,
            isActivitiesEnabledForCurrentPlatform: (0, p.A)(),
            ChannelStore: o.A,
            VoiceStateStore: d.A,
            PermissionStore: u.A,
            GuildStore: l.A,
        }),
        handleCanJoin: C,
    });
}
