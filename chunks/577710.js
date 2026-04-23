n.d(t, { N: () => s });
var l = n(311907),
    i = n(576705),
    a = n(652215);
function s(e) {
    let t = (0, l.bG)([i.A], () => i.A.can(a.xBc.KICK_MEMBERS, e), [e]),
        n = !!(
            e?.features.has(a.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e?.features.has(a.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        );
    return { canCreateApplicationBypassInvites: n && t, isManualApprovalGuild: n };
}
