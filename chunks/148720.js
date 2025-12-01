n.d(t, { k: () => E });
var r = n(668781),
    i = n(728345),
    a = n(835873),
    o = n(973616),
    s = n(592125),
    l = n(430824),
    c = n(496675),
    u = n(594174),
    d = n(979651),
    f = n(317381),
    p = n(638880),
    _ = n(790920),
    m = n(527805),
    h = n(388032);
function g(e) {
    let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
    switch (t) {
        case m.Fw.CAN_JOIN:
            null == n || n();
            break;
        case m.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
            (0, a.w)();
            break;
        case m.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
            r.Z.show({
                title: h.intl.string(h.t.PtobXW),
                body: h.intl.string(h.t.UXoQTp),
                hideActionSheet: !1,
            });
            break;
        case m.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
            r.Z.show({
                title: h.intl.string(h.t.PtobXW),
                body: h.intl.string(h.t.uGDCcw),
                hideActionSheet: !1,
            });
            break;
        case m.Fw.ACTIVITY_AGE_GATED:
            r.Z.show({
                title: h.intl.string(h.t.PtobXW),
                body: h.intl.string(h.t["4WuFRE"]),
                hideActionSheet: !1,
            });
            break;
        case m.Fw.NO_CHANNEL_CONNECT_PERMISSION:
        case m.Fw.CHANNEL_FULL:
        case m.Fw.NO_CHANNEL:
        case m.Fw.NO_USER:
            r.Z.show({
                title: h.intl.string(h.t.PtobXW),
                body: h.intl.string(h.t.FUCQco),
                hideActionSheet: !1,
            });
    }
}
async function E(e) {
    let {
            channelId: t,
            applicationId: n,
            launchId: r,
            inputApplication: a,
            analyticsLocations: h,
            launchingComponentId: E,
            sectionName: b,
            inviterUserId: y,
        } = e,
        O = f.ZP.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == r || e.launchId === r),
        ),
        v = a;
    if (null == v) {
        let e = await i.ZP.fetchApplication(n);
        v = o.ZP.createFromServer(e);
    }
    if (null == O || null == v) return;
    let S = u.default.getCurrentUser();
    async function I() {
        null != O &&
            (await (0, p.Z)({
                applicationId: O.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: h,
                componentId: E,
                sectionName: b,
                inviterUserId: y,
            }));
    }
    g({
        embeddedActivityJoinability: (0, m.ZP)({
            userId: null == S ? void 0 : S.id,
            application: v,
            channelId: t,
            currentUser: S,
            isActivitiesEnabledForCurrentPlatform: (0, _.a)(),
            ChannelStore: s.Z,
            VoiceStateStore: d.Z,
            PermissionStore: c.Z,
            GuildStore: l.Z,
        }),
        handleCanJoin: I,
    });
}
