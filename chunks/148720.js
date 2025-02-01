n.d(t, { k: () => E });
var i = n(668781),
    r = n(728345),
    a = n(835873),
    s = n(973616),
    o = n(592125),
    l = n(430824),
    u = n(496675),
    c = n(594174),
    d = n(979651),
    f = n(317381),
    _ = n(638880),
    p = n(782769),
    h = n(527805),
    m = n(388032);
function g(e) {
    let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
    switch (t) {
        case h.Fw.CAN_JOIN:
            null == n || n();
            break;
        case h.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
            (0, a.w)();
            break;
        case h.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
            i.Z.show({
                title: m.intl.string(m.t.PtobXV),
                body: m.intl.string(m.t.UXoQTk),
                hideActionSheet: !1
            });
            break;
        case h.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
            i.Z.show({
                title: m.intl.string(m.t.PtobXV),
                body: m.intl.string(m.t.uGDCc3),
                hideActionSheet: !1
            });
            break;
        case h.Fw.ACTIVITY_AGE_GATED:
            i.Z.show({
                title: m.intl.string(m.t.PtobXV),
                body: m.intl.string(m.t['4WuFRE']),
                hideActionSheet: !1
            });
            break;
        case h.Fw.NO_CHANNEL_CONNECT_PERMISSION:
        case h.Fw.CHANNEL_FULL:
        case h.Fw.NO_CHANNEL:
        case h.Fw.NO_USER:
            i.Z.show({
                title: m.intl.string(m.t.PtobXV),
                body: m.intl.string(m.t.FUCQcn),
                hideActionSheet: !1
            });
    }
}
async function E(e) {
    let { channelId: t, applicationId: n, launchId: i, inputApplication: a, analyticsLocations: m, launchingComponentId: E, sectionName: v, inviterUserId: y } = e,
        I = f.ZP.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n && (null == i || e.launchId === i)),
        T = a;
    if (null == T) {
        let e = await r.ZP.fetchApplication(n);
        T = s.ZP.createFromServer(e);
    }
    if (null == I || null == T) return;
    let b = c.default.getCurrentUser(),
        S = o.Z.getChannel(t);
    async function A() {
        null != I &&
            (await (0, _.Z)({
                applicationId: I.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: m,
                componentId: E,
                sectionName: v,
                inviterUserId: y
            }));
    }
    g({
        embeddedActivityJoinability: (0, h.ZP)({
            userId: null == b ? void 0 : b.id,
            application: T,
            channelId: t,
            currentUser: b,
            isActivitiesEnabledForCurrentPlatform: (0, p.a)(S),
            ChannelStore: o.Z,
            VoiceStateStore: d.Z,
            PermissionStore: u.Z,
            GuildStore: l.Z
        }),
        handleCanJoin: A
    });
}
