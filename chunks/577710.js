n.d(t, { N: () => a });
var i = n(311907),
    l = n(576705),
    s = n(652215);
function a(e) {
    let t = (0, i.bG)([l.A], () => l.A.can(s.xBc.KICK_MEMBERS, e), [e]),
        n = !!(
            e?.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e?.features.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        );
    return { canCreateApplicationBypassInvites: n && t, isManualApprovalGuild: n };
}
