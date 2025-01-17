r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(626135),
    a = r(981631);
function s(e) {
    let { type: n, source: r, userId: s, guildId: o, channelId: l, channelType: u, applicationId: c, partyId: d, messageId: f, locationObject: _, analyticsLocations: h, referrerId: p, inviterUserId: m } = e;
    i.default.track(a.rMx.APPLICATION_OPENED, {
        type: n,
        source: r,
        guild_id: o,
        channel_id: l,
        channel_type: u,
        application_id: c,
        party_id: null != d ? d : void 0,
        other_user_id: s,
        message_id: f,
        location: _,
        location_stack: h,
        referrer_id: p,
        invite_inviter_id: m
    });
}
