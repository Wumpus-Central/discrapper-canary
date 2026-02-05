"use strict";
n.d(t, { E: () => E });
var r = n(157559),
    i = n(627363),
    a = n(192552),
    s = n(611010),
    o = n(734057),
    l = n(71393),
    u = n(576705),
    c = n(287809),
    d = n(977997),
    _ = n(933958),
    f = n(447031),
    p = n(170148),
    h = n(550151),
    m = n(985018);
function g(e) {
    let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
    switch (t) {
        case h.Gy.CAN_JOIN:
            n?.();
            break;
        case h.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
            (0, a.i)();
            break;
        case h.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
            r.A.show({ title: m.intl.string(m.t.PtobXW), body: m.intl.string(m.t.UXoQTp), hideActionSheet: !1 });
            break;
        case h.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
            r.A.show({ title: m.intl.string(m.t.PtobXW), body: m.intl.string(m.t.uGDCcw), hideActionSheet: !1 });
            break;
        case h.Gy.ACTIVITY_AGE_GATED:
            r.A.show({ title: m.intl.string(m.t.PtobXW), body: m.intl.string(m.t["4WuFRE"]), hideActionSheet: !1 });
            break;
        case h.Gy.NO_CHANNEL_CONNECT_PERMISSION:
        case h.Gy.CHANNEL_FULL:
        case h.Gy.NO_CHANNEL:
        case h.Gy.NO_USER:
            r.A.show({ title: m.intl.string(m.t.PtobXW), body: m.intl.string(m.t.FUCQco), hideActionSheet: !1 });
    }
}
async function E(e) {
    let {
            channelId: t,
            applicationId: n,
            launchId: r,
            inputApplication: a,
            analyticsLocations: m,
            launchingComponentId: E,
            sectionName: A,
            inviterUserId: I,
        } = e,
        T = _.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == r || e.launchId === r),
        ),
        y = a;
    if (null == y) {
        let e = await i.Ay.fetchApplication(n);
        y = s.Ay.createFromServer(e);
    }
    if (null == T || null == y) return;
    let S = c.default.getCurrentUser();
    async function v() {
        null != T &&
            (await (0, f.A)({
                applicationId: T.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: m,
                componentId: E,
                sectionName: A,
                inviterUserId: I,
            }));
    }
    g({
        embeddedActivityJoinability: (0, h.Ay)({
            userId: S?.id,
            application: y,
            channelId: t,
            currentUser: S,
            isActivitiesEnabledForCurrentPlatform: (0, p.A)(),
            ChannelStore: o.A,
            VoiceStateStore: d.A,
            PermissionStore: u.A,
            GuildStore: l.A,
        }),
        handleCanJoin: v,
    });
}
