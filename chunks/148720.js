r.d(n, {
    k: function () {
        return v;
    }
});
var i = r(668781),
    a = r(728345),
    s = r(835873),
    o = r(973616),
    l = r(592125),
    u = r(430824),
    c = r(496675),
    d = r(594174),
    f = r(979651),
    _ = r(317381),
    h = r(638880),
    p = r(782769),
    m = r(527805),
    g = r(388032);
function E(e) {
    let { embeddedActivityJoinability: n, handleCanJoin: r } = e;
    switch (n) {
        case m.Fw.CAN_JOIN:
            null == r || r();
            break;
        case m.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
            (0, s.w)();
            break;
        case m.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
            i.Z.show({
                title: g.intl.string(g.t.PtobXV),
                body: g.intl.string(g.t.UXoQTk),
                hideActionSheet: !1
            });
            break;
        case m.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
            i.Z.show({
                title: g.intl.string(g.t.PtobXV),
                body: g.intl.string(g.t.uGDCc3),
                hideActionSheet: !1
            });
            break;
        case m.Fw.ACTIVITY_AGE_GATED:
            i.Z.show({
                title: g.intl.string(g.t.PtobXV),
                body: g.intl.string(g.t['4WuFRE']),
                hideActionSheet: !1
            });
            break;
        case m.Fw.NO_CHANNEL_CONNECT_PERMISSION:
        case m.Fw.CHANNEL_FULL:
        case m.Fw.NO_CHANNEL:
        case m.Fw.NO_USER:
            i.Z.show({
                title: g.intl.string(g.t.PtobXV),
                body: g.intl.string(g.t.FUCQcn),
                hideActionSheet: !1
            });
    }
}
async function v(e) {
    let { channelId: n, applicationId: r, launchId: i, inputApplication: s, analyticsLocations: g, launchingComponentId: v, sectionName: I, inviterUserId: T } = e,
        b = _.ZP.getEmbeddedActivitiesForChannel(n).find((e) => e.applicationId === r && (null == i || e.launchId === i)),
        y = s;
    if (null == y) {
        let e = await a.ZP.fetchApplication(r);
        y = o.ZP.createFromServer(e);
    }
    if (null == b || null == y) return;
    let S = d.default.getCurrentUser(),
        A = l.Z.getChannel(n);
    async function N() {
        if (null != b)
            await (0, h.Z)({
                applicationId: b.applicationId,
                activityChannelId: n,
                locationObject: {},
                analyticsLocations: g,
                componentId: v,
                sectionName: I,
                inviterUserId: T
            });
    }
    E({
        embeddedActivityJoinability: (0, m.ZP)({
            userId: null == S ? void 0 : S.id,
            application: y,
            channelId: n,
            currentUser: S,
            isActivitiesEnabledForCurrentPlatform: (0, p.a)(A),
            ChannelStore: l.Z,
            VoiceStateStore: f.Z,
            PermissionStore: c.Z,
            GuildStore: u.Z
        }),
        handleCanJoin: N
    });
}
