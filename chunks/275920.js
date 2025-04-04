n.d(t, { Z: () => o });
var r = n(626135),
    i = n(981631);
function o(e) {
    let { type: t, source: n, userId: o, guildId: a, channelId: s, channelType: l, applicationId: c, partyId: u, messageId: d, locationObject: f, analyticsLocations: _, referrerId: p, inviterUserId: h } = e;
    r.default.track(i.rMx.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: a,
        channel_id: s,
        channel_type: l,
        application_id: c,
        party_id: null != u ? u : void 0,
        other_user_id: o,
        message_id: d,
        location: f,
        location_stack: _,
        referrer_id: p,
        invite_inviter_id: h
    });
}
