n.d(t, { k: () => v });
var r = n(115911),
    i = n(668781),
    o = n(728345),
    a = n(835873),
    s = n(973616),
    l = n(592125),
    c = n(430824),
    u = n(496675),
    d = n(594174),
    f = n(979651),
    p = n(317381),
    _ = n(638880),
    h = n(782769),
    m = n(527805),
    g = n(388032);
function E(e) {
    let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
    switch (t) {
        case m.Fw.CAN_JOIN:
            null == n || n();
            break;
        case m.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
            (0, a.w)();
            break;
        case m.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
            i.Z.show({
                title: g.NW.string(g.t.PtobXV),
                body: g.NW.string(g.t.UXoQTk),
                hideActionSheet: !1
            });
            break;
        case m.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
            i.Z.show({
                title: g.NW.string(g.t.PtobXV),
                body: g.NW.string(g.t.uGDCc3),
                hideActionSheet: !1
            });
            break;
        case m.Fw.ACTIVITY_AGE_GATED:
            i.Z.show({
                title: g.NW.string(g.t.PtobXV),
                body: g.NW.string(g.t['4WuFRE']),
                hideActionSheet: !1
            });
            break;
        case m.Fw.NO_CHANNEL_CONNECT_PERMISSION:
        case m.Fw.CHANNEL_FULL:
        case m.Fw.NO_CHANNEL:
        case m.Fw.NO_USER:
            i.Z.show({
                title: g.NW.string(g.t.PtobXV),
                body: g.NW.string(g.t.FUCQcn),
                hideActionSheet: !1
            });
    }
}
async function v(e) {
    let { channelId: t, applicationId: n, launchId: i, inputApplication: a, analyticsLocations: g, launchingComponentId: v, sectionName: b, inviterUserId: y } = e,
        O = p.ZP.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n && (null == i || e.launchId === i)),
        S = a;
    if (null == S) {
        let e = await o.ZP.fetchApplication(n);
        S = s.ZP.createFromServer(e);
    }
    if (null == O || null == S) return;
    let I = d.default.getCurrentUser(),
        T = l.Z.getChannel(t);
    async function N() {
        null != O &&
            (await (0, _.Z)({
                applicationId: O.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: g,
                componentId: v,
                sectionName: b,
                inviterUserId: y,
                instanceId: O.compositeInstanceId,
                isContextlessActivity: O.location.kind === r.X.CONTEXTLESS
            }));
    }
    E({
        embeddedActivityJoinability: (0, m.ZP)({
            userId: null == I ? void 0 : I.id,
            application: S,
            channelId: t,
            currentUser: I,
            isActivitiesEnabledForCurrentPlatform: (0, h.a)(T),
            ChannelStore: l.Z,
            VoiceStateStore: f.Z,
            PermissionStore: u.Z,
            GuildStore: c.Z
        }),
        handleCanJoin: N
    });
}
