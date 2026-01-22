n.d(t, {
    N: () => r,
});
var l = n(311907),
    i = n(576705),
    s = n(652215);

function r(e) {
    let t = (0, l.bG)([i.A], () => i.A.can(s.xBc.KICK_MEMBERS, e), [e]),
        n = !!(
            (null == e ? void 0 : e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) &&
            (null == e ? void 0 : e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED))
        );
    return {
        canCreateApplicationBypassInvites: n && t,
        isManualApprovalGuild: n,
    };
}
