n.d(t, { Z: () => a });
var i = n(626135),
    r = n(981631);
function a(e) {
    let { type: t, source: n, userId: a, guildId: s, channelId: o, channelType: l, applicationId: u, partyId: c, messageId: d, locationObject: f, analyticsLocations: _, referrerId: p, inviterUserId: h } = e;
    i.default.track(r.rMx.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: s,
        channel_id: o,
        channel_type: l,
        application_id: u,
        party_id: null != c ? c : void 0,
        other_user_id: a,
        message_id: d,
        location: f,
        location_stack: _,
        referrer_id: p,
        invite_inviter_id: h
    });
}
