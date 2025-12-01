n.d(t, { Z: () => a });
var r = n(626135),
    i = n(981631);
function a(e) {
    let {
        type: t,
        source: n,
        userId: a,
        guildId: o,
        channelId: s,
        channelType: l,
        applicationId: c,
        partyId: u,
        messageId: d,
        locationObject: f,
        analyticsLocations: p,
        referrerId: _,
        inviterUserId: m,
        remoteJoinPlatform: h,
    } = e;
    r.default.track(i.rMx.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: o,
        channel_id: s,
        channel_type: l,
        application_id: c,
        party_id: null != u ? u : void 0,
        other_user_id: a,
        message_id: d,
        location: f,
        location_stack: p,
        referrer_id: _,
        invite_inviter_id: m,
        remote_join_platform: h,
    });
}
