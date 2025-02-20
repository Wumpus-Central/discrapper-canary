n.d(t, { k: () => E });
var r = n(668781),
    i = n(728345),
    o = n(835873),
    a = n(973616),
    s = n(592125),
    l = n(430824),
    c = n(496675),
    u = n(594174),
    d = n(979651),
    f = n(317381),
    p = n(638880),
    _ = n(782769),
    h = n(527805),
    m = n(388032);
function g(e) {
    let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
    switch (t) {
        case h.Fw.CAN_JOIN:
            null == n || n();
            break;
        case h.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
            (0, o.w)();
            break;
        case h.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
            r.Z.show({
                title: m.NW.string(m.t.PtobXV),
                body: m.NW.string(m.t.UXoQTk),
                hideActionSheet: !1
            });
            break;
        case h.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
            r.Z.show({
                title: m.NW.string(m.t.PtobXV),
                body: m.NW.string(m.t.uGDCc3),
                hideActionSheet: !1
            });
            break;
        case h.Fw.ACTIVITY_AGE_GATED:
            r.Z.show({
                title: m.NW.string(m.t.PtobXV),
                body: m.NW.string(m.t['4WuFRE']),
                hideActionSheet: !1
            });
            break;
        case h.Fw.NO_CHANNEL_CONNECT_PERMISSION:
        case h.Fw.CHANNEL_FULL:
        case h.Fw.NO_CHANNEL:
        case h.Fw.NO_USER:
            r.Z.show({
                title: m.NW.string(m.t.PtobXV),
                body: m.NW.string(m.t.FUCQcn),
                hideActionSheet: !1
            });
    }
}
async function E(e) {
    let { channelId: t, applicationId: n, launchId: r, inputApplication: o, analyticsLocations: m, launchingComponentId: E, sectionName: v, inviterUserId: b } = e,
        y = f.ZP.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n && (null == r || e.launchId === r)),
        O = o;
    if (null == O) {
        let e = await i.ZP.fetchApplication(n);
        O = a.ZP.createFromServer(e);
    }
    if (null == y || null == O) return;
    let S = u.default.getCurrentUser(),
        I = s.Z.getChannel(t);
    async function T() {
        null != y &&
            (await (0, p.Z)({
                applicationId: y.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: m,
                componentId: E,
                sectionName: v,
                inviterUserId: b
            }));
    }
    g({
        embeddedActivityJoinability: (0, h.ZP)({
            userId: null == S ? void 0 : S.id,
            application: O,
            channelId: t,
            currentUser: S,
            isActivitiesEnabledForCurrentPlatform: (0, _.a)(I),
            ChannelStore: s.Z,
            VoiceStateStore: d.Z,
            PermissionStore: c.Z,
            GuildStore: l.Z
        }),
        handleCanJoin: T
    });
}
